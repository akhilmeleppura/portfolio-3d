const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load .env variables locally if present
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    lines.forEach(line => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const k = match[1];
        let v = (match[2] || '').trim();
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        process.env[k] = v;
      }
    });
  }
} catch (e) {}

const PORT = process.env.PORT || 5000;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MODELS = [
  'models/gemini-2.5-flash',
  'models/gemini-2.0-flash',
  'models/gemini-1.5-flash',
  'models/gemini-2.5-flash-lite',
  'models/gemini-3.5-flash-lite',
  'models/gemini-3.5-flash'
];

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.mp3': 'audio/mpeg',
  '.ico': 'image/x-icon'
};

const SYSTEM_INSTRUCTION = `You are the professional, friendly virtual portfolio assistant representing Akhil S (Akhil Meleppura), an expert Backend Laravel & PHP Developer with 3+ years of professional experience.

PROFESSIONAL CONTEXT:
- Full Name: Akhil S (Akhil Meleppura)
- Professional Title: Backend Laravel / PHP Developer
- Experience: 3+ Years of Professional Experience in building scalable web applications, RESTful APIs, enterprise retail platforms, delivery management solutions, and microservices.
- Current Location: Palakkad, Kerala, India (Available as an Immediate Joiner).
- Work History:
  * PIXELPO (Mar 2024 – Present, Palakkad): Senior Backend Laravel Developer. Leading backend architecture for multi-branch retail, real-time inventory synchronization, order fulfillment queues, and REST APIs.
  * StackCue (Jan 2023 – Mar 2024, Palakkad): Backend PHP/Laravel Developer. Engineered RESTful APIs, Laravel Sanctum authentication, Spatie RBAC permission system, and automated invoice/order workflows with Laravel Queues.
  * Commerce9 Technologies (Nov 2021 – Dec 2022, Kochi): Junior Backend Developer. Built e-commerce backends, payment gateway integrations, relational MySQL database designs, and Next.js frontend integrations.
- Key Technical Skills:
  * Backend: PHP 8.x, Laravel 11/12, RESTful APIs, MVC, Microservices, Authentication (Sanctum, JWT), Spatie RBAC.
  * Databases & Cache: MySQL (indexing, optimization, EXPLAIN), Redis (caching, background job queues), PostgreSQL.
  * Dev Tools & Cloud: Docker, Git, GitHub, Postman, Linux, CI/CD, PHPUnit.
  * Frontend Integrations: Next.js, React.js, JavaScript, Blade, HTML5, CSS3, Bootstrap.
- Key Projects:
  * AK-MART: High-scale multi-branch retail e-commerce platform with real-time stock sync across branches and POS systems. (Live demo available: https://ak-mart.onrender.com | GitHub: https://github.com/akhilmeleppura/Ak-Mart)
  * Mini Mart: Multi-vendor marketplace with vendor commissions, wallet payouts, and automated delivery dispatch. (Live demo: https://minimart-hqui.onrender.com)
  * Dodelivery: Real-time logistics tracking and delivery driver routing engine.
  * HC Admin: Centralized administrative control center with granular role-based permissions and activity audit logs.
  * Store9 & Tekneka: Scalable e-commerce and enterprise product management systems.
  * PIXELPO Digital Agency Website: WordPress, Elementor, and custom PHP client agency platform. (Live site: https://pixelpo.in)
  * Commerce 9 Technology: Creative agency WordPress website with OceanWP theme and floating WhatsApp integration. (Live site: https://commerce9.io)
  * LegalGlow: Advocate and legal consulting WordPress platform with lead capture and case inquiries. (Live site: https://www.legalglow.com)
  * Docib Clinic: Medical clinic healthcare website with online appointment booking and doctor profile management. (Live site: http://docibclinic.com)
  * Smiling Coders: ERP services and technology solutions platform using custom post types and dynamic templates. (Live site: https://thesmilingcoders.com)
- Education:
  * Bachelor of Science in Physics, Government Victoria College, Palakkad (University of Calicut).
  * Advanced Python/Django & Full-Stack Development Certification, Luminar Technolab, Kochi.
- Contact Details:
  * Phone: +91 79022 07027
  * Email: akhilmeleppura@gmail.com
  * LinkedIn: linkedin.com/in/akhil-meleppura
  * GitHub: github.com/akhilmeleppura
  * Location: Palakkad, Kerala, India
- Availability: Immediate Joiner (Notice period: None / Ready to join immediately).

CRITICAL TONE & OUTPUT GUIDELINES:
1. Speak in a clean, natural, polite, and professional executive tone.
2. NEVER include artificial sci-fi or robotic terminal prefixes such as "System initialized", "Connection established with AI_PORTFOLIO_CORE", "INITIALIZING AX-994 PROTOCOL", "ACCESS GRANTED", or robotic roleplay.
3. NEVER mock, mention, or comment on user typos or cutoffs (e.g., do NOT say "It looks like your message got cut off"). Simply understand the user's intent and answer directly.
4. Jump straight into the helpful, concise answer without meta-commentary.
5. Jump straight into the helpful, concise answer without meta-commentary.
6. LANGUAGE RULE: Follow the [Active Language] mandate strictly. If Active Language is 'ml', respond ONLY in fluent Malayalam (മലയാളം). If Active Language is 'hi', respond ONLY in fluent Hindi (हिन्दी). If Active Language is 'en', respond in English. Do NOT default to English when the active language is Malayalam or Hindi!
7. Format responses cleanly with readable markdown (use clear headings, bold labels, clean bullet points). Include project links when discussing projects.`;

function callGemini(userPrompt, lang = 'en', userApiKey = '', history = []) {
  const activeKey = userApiKey || GEMINI_API_KEY;
  return new Promise(async (resolve, reject) => {
    let lastErr = null;
    for (const model of MODELS) {
      try {
        const result = await makeGeminiRequest(model, userPrompt, lang, activeKey, history);
        return resolve(result);
      } catch (err) {
        lastErr = err;
      }
    }
    reject(lastErr || new Error('All Gemini models failed'));
  });
}

function makeGeminiRequest(model, userPrompt, lang, apiKey, history = []) {
  return new Promise((resolve, reject) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${apiKey}`;

    // Build contents with recent conversation history for multi-turn memory
    const contents = [];
    if (Array.isArray(history) && history.length > 0) {
      history.slice(-6).forEach(h => {
        if (h && h.content) {
          contents.push({
            role: h.role === 'assistant' || h.role === 'model' ? 'model' : 'user',
            parts: [{ text: String(h.content) }]
          });
        }
      });
    }

    let langInstruction = '';
    if (lang === 'ml') {
      langInstruction = `\n\n🚨 STRICT LANGUAGE MANDATE: The user has selected MALAYALAM (മലയാളം). You MUST reply completely in natural, respectful Malayalam script (മലയാളത്തിൽ എഴുതുക). Do NOT reply in English even if the user query was written or spoken in English! Proper nouns and technical keywords (Laravel, PHP, MySQL, Redis, PIXELPO, AK-MART, Mini Mart) may remain in Latin script, but all surrounding sentences must be in Malayalam.`;
    } else if (lang === 'hi') {
      langInstruction = `\n\n🚨 STRICT LANGUAGE MANDATE: The user has selected HINDI (हिन्दी). You MUST reply completely in natural, respectful Hindi script (हिन्दी में उत्तर दें). Do NOT reply in English even if the user query was written or spoken in English! Proper nouns and technical keywords (Laravel, PHP, MySQL, Redis, PIXELPO, AK-MART, Mini Mart) may remain in Latin script, but all surrounding sentences must be in Hindi.`;
    } else {
      langInstruction = `\n\nActive Language: English. Reply in clear, professional English.`;
    }

    contents.push({
      role: 'user',
      parts: [{ text: `${SYSTEM_INSTRUCTION}${langInstruction}\n\nUser Query: ${userPrompt}` }]
    });

    const bodyObj = {
      contents,
      generationConfig: {
        maxOutputTokens: 2048,
        temperature: 0.6
      }
    };
    const data = JSON.stringify(bodyObj);
    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      timeout: 15000
    }, res => {
      let raw = '';
      res.on('data', c => raw += c);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}: ${raw.substring(0, 150)}`));
        }
        try {
          const json = JSON.parse(raw);
          const parts = json.candidates?.[0]?.content?.parts || [];
          const text = parts.map(p => p.text || '').join('').trim();
          if (!text) return reject(new Error('Empty response from model'));
          resolve(text);
        } catch (e) {
          reject(e);
        }
      });
    });
    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Gemini timeout')); });
    req.write(data);
    req.end();
  });
}

const server = http.createServer((req, res) => {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle TTS API
  if (req.url.startsWith('/api/tts')) {
    const ttsHandler = require('./api/tts.js');
    return ttsHandler(req, res);
  }

  // Handle Gemini Chat API
  if (req.url === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const userPrompt = (payload.message || '').trim();
        const lang = payload.lang || 'en';
        const apiKey = (payload.apiKey || '').trim();
        const history = Array.isArray(payload.history) ? payload.history : [];

        if (!userPrompt) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, error: 'Empty message' }));
          return;
        }

        const reply = await callGemini(userPrompt, lang, apiKey, history);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, reply }));
      } catch (err) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, fallback: true, error: err.message }));
      }
    });
    return;
  }

  // Static file serving
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  let safePath = path.normalize(decodeURIComponent(cleanUrl)).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';
  
  const fullPath = path.join(__dirname, safePath);

  fs.stat(fullPath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found: ' + cleanUrl);
      return;
    }

    const ext = path.extname(fullPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Support audio / model Range requests
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
      const chunksize = (end - start) + 1;
      const file = fs.createReadStream(fullPath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${stats.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType
      });
      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': stats.size,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes'
      });
      fs.createReadStream(fullPath).pipe(res);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`\n======================================================`);
  console.log(`🚀 Live Portfolio Server running at http://localhost:${PORT}`);
  console.log(`⚡ Gemini AI Chatbot Endpoint active at /api/chat`);
  console.log(`======================================================\n`);
});
