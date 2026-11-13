const https = require('https');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const MODELS = ['models/gemini-3.5-flash-lite', 'models/gemini-3.5-flash', 'models/gemini-flash-latest'];

const SYSTEM_INSTRUCTION = `You are the Cyberpunk AI Portfolio Assistant for Akhil S, a Backend Laravel & PHP Developer with 3+ years of professional experience.

PROFESSIONAL CONTEXT:
- Name: Akhil S
- Title: Backend Laravel / PHP Developer
- Experience: 3+ Years of Professional Experience in building scalable web applications, RESTful APIs, multi-branch e-commerce platforms, delivery management solutions, and microservices.
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
  * AK-MART: High-scale multi-branch retail e-commerce platform with real-time stock sync across branches and POS systems.
  * Mini Mart: Multi-vendor marketplace with vendor commissions, wallet payouts, and automated delivery dispatch.
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

RULES:
1. Always represent Akhil accurately, positively, and professionally as an expert 3+ years Laravel/PHP backend engineer.
2. If the user asks in Malayalam (മലയാളം), reply in fluent Malayalam!
3. If the user asks in Hindi (हिन्दी), reply in fluent Hindi!
4. If the user asks in English, reply in English!
5. Keep answers concise, direct, helpful, and formatted with markdown (bullet points, bold text).`;

function callGemini(userPrompt, lang = 'en', userApiKey = '') {
  const activeKey = userApiKey || GEMINI_API_KEY;
  return new Promise(async (resolve, reject) => {
    let lastErr = null;
    for (const model of MODELS) {
      try {
        const result = await makeGeminiRequest(model, userPrompt, lang, activeKey);
        return resolve(result);
      } catch (err) {
        lastErr = err;
      }
    }
    reject(lastErr || new Error('All Gemini models failed'));
  });
}

function makeGeminiRequest(model, userPrompt, lang, apiKey) {
  return new Promise((resolve, reject) => {
    const url = `https://generativelanguage.googleapis.com/v1beta/${model}:generateContent?key=${apiKey}`;
    const bodyObj = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${SYSTEM_INSTRUCTION}\n\n[Active Language: ${lang}]\nUser Query: ${userPrompt}` }]
        }
      ],
      generationConfig: {
        maxOutputTokens: 600,
        temperature: 0.7
      }
    };
    const data = JSON.stringify(bodyObj);
    const req = https.request(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
      },
      timeout: 10000
    }, res => {
      let raw = '';
      res.on('data', c => raw += c);
      res.on('end', () => {
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode}: ${raw.substring(0, 150)}`));
        }
        try {
          const json = JSON.parse(raw);
          const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
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

    if (!userPrompt) {
      return res.status(400).json({ success: false, error: 'Empty message' });
    }

    const reply = await callGemini(userPrompt, lang, apiKey);
    return res.status(200).json({ success: true, reply });
  } catch (err) {
    return res.status(200).json({ success: false, fallback: true, error: err.message });
  }
};
