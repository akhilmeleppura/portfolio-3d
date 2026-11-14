const https = require('https');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MODELS = [
  'models/gemini-2.5-flash',
  'models/gemini-2.0-flash',
  'models/gemini-1.5-flash',
  'models/gemini-2.5-flash-lite',
  'models/gemini-3.5-flash-lite',
  'models/gemini-3.5-flash'
];

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
2. NEVER cut off responses. Complete every sentence, list, or explanation fully.
3. Keep conversational memory. If the user asks a follow-up (e.g. "show details", "tell me more", "how was that built"), understand they are referring to the project or topic from previous messages!
4. NEVER include artificial sci-fi or robotic terminal prefixes such as "System initialized", "Connection established", "INITIALIZING AX-994", or "ACCESS GRANTED".
5. NEVER comment on user typos or cutoffs. Answer their underlying question directly.
6. If the user asks in Malayalam (മലയാളം), reply in fluent, respectful Malayalam!
7. If the user asks in Hindi (हिन्दी), reply in fluent, respectful Hindi!
8. If the user asks in English, reply in English!
9. Format responses cleanly with readable markdown (use clear headings, bold labels, clean bullet points). Include project links when discussing projects.`;

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

    contents.push({
      role: 'user',
      parts: [{ text: `${SYSTEM_INSTRUCTION}\n\n[Active Language: ${lang}]\nUser Query: ${userPrompt}` }]
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

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    let payload = req.body;
    if (typeof payload === 'string') {
      try { payload = JSON.parse(payload); } catch(e) {}
    }
    payload = payload || {};

    const userPrompt = (payload.message || '').trim();
    const lang = payload.lang || 'en';
    const apiKey = (payload.apiKey || '').trim();
    const history = Array.isArray(payload.history) ? payload.history : [];

    if (!userPrompt) {
      return res.status(400).json({ success: false, error: 'Empty message' });
    }

    const reply = await callGemini(userPrompt, lang, apiKey, history);
    return res.status(200).json({ success: true, reply });
  } catch (err) {
    return res.status(200).json({ success: false, fallback: true, error: err.message });
  }
};
