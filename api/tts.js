const https = require('https');

module.exports = (req, res) => {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    return res.end();
  }

  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const text = urlObj.searchParams.get('text') || (req.query && req.query.text) || '';
  const lang = urlObj.searchParams.get('lang') || (req.query && req.query.lang) || 'ml';

  if (!text || !text.trim()) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Text query parameter is required' }));
  }

  // Google TTS supports chunks up to ~200 characters
  const cleanText = text.trim().substring(0, 200);
  const targetLang = (lang === 'ml' || lang === 'hi' || lang === 'en') ? lang : 'ml';
  const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(cleanText)}&tl=${targetLang}&client=tw-ob`;

  const options = {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Referer': 'https://translate.google.com/'
    }
  };

  https.get(ttsUrl, options, (googleRes) => {
    if (googleRes.statusCode !== 200) {
      res.writeHead(googleRes.statusCode, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Failed to fetch TTS audio' }));
    }

    res.writeHead(200, {
      'Content-Type': 'audio/mpeg',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    });
    googleRes.pipe(res);
  }).on('error', (err) => {
    console.error('TTS Proxy Error:', err);
    if (!res.headersSent) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal TTS proxy error', details: err.message }));
    }
  });
};
