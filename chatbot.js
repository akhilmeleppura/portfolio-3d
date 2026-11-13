/**
 * Cyberpunk AI Assistant Chatbot - Akhil S Portfolio
 * Supports English & Malayalam (മലയാളം)
 */
(function() {
  // Knowledge Base for Akhil S
  const KB = {
    en: {
      botName: "Akhil's AI Assistant",
      subtitle: "Online · Ask me anything about Akhil S",
      greeting: "Hello! 👋 I am Akhil S's virtual assistant. Akhil is a Backend Laravel / PHP Developer with 3+ years of professional experience building scalable web apps, enterprise retail platforms, and delivery systems. How can I assist you today?",
      placeholder: "Ask in English or മലയാളം...",
      chips: [
        { label: "💼 3+ Yrs Experience", query: "Tell me about Akhil's work experience" },
        { label: "🚀 Top Projects", query: "What projects has Akhil built?" },
        { label: "🛠️ Tech Stack", query: "What are Akhil's core technical skills?" },
        { label: "📞 Contact / Hire", query: "How can I contact or hire Akhil?" },
        { label: "⚡ Availability", query: "Is Akhil available immediately?" },
        { label: "🌐 സംസാരിക്കാം", query: "മലയാളത്തിൽ പറയാമോ?" }
      ],
      responses: {
        experience: `<strong>💼 3+ Years Professional Experience:</strong><br><br>
• <strong>PIXELPO</strong> (Feb 2026 – Present | Remote / Palakkad): Backend Laravel/PHP Developer building RBAC, API integrations, database workflows, and contributing to the <strong>AK-MART</strong> multi-branch retail platform.<br>
• <strong>StackCue</strong> (Jun 2025 – Jan 2026 | Remote / Palakkad): Laravel Developer building MVC backends, RESTful APIs, Sanctum & Spatie permissions, and Next.js integrations.<br>
• <strong>Commerce9 Technologies</strong> (Dec 2023 – Apr 2025 | Infopark, Kochi): Software Engineer delivering order management, delivery tracking, payment APIs, and MySQL optimization.<br>
• <strong>Commerce9 Technologies</strong> (Dec 2023 – Jun 2024): Software Engineer Intern building Laravel & React applications.`,

        projects: `<strong>🚀 Featured Works & Projects:</strong><br><br>
1. <strong>AK-MART</strong>: Multi-Branch Retail Platform & POS (Laravel 12, Livewire 3, MySQL, Redis, Sanctum, Spatie).<br>
   <a href="https://ak-mart.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Live Demo</a> 
   <a href="https://github.com/akhilmeleppura/Ak-Mart" target="_blank" class="chatbot-action-link"><i class="fab fa-github"></i> GitHub</a><br><br>
2. <strong>Mini Mart</strong>: Multi-Vendor E-Commerce Platform.<br>
   <a href="https://minimart-hqui.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Live Demo</a><br><br>
3. <strong>HC Admin System</strong>: Enterprise RBAC & Workflow Engine (Laravel, Spatie, Next.js).<br>
4. <strong>Dodelivery</strong>: Real-Time Logistics & Dispatch Tracking Platform.<br>
5. <strong>Store9</strong>: Scalable E-Commerce Backend & Payment Integration.<br>
6. <strong>Tekneka</strong>: Secure File & Document Vault System with RBAC.<br>
7. <strong>10+ Web & CMS Projects</strong>: Custom WordPress & WooCommerce business solutions.`,

        skills: `<strong>🛠️ Technical Skills & Stack:</strong><br><br>
• <strong>Backend:</strong> Laravel 11/12, PHP 8.x, RESTful APIs, OOP, MVC, Laravel Sanctum, Spatie Permissions, RBAC, Queues & Background Jobs.<br>
• <strong>Database:</strong> MySQL (Schema Design, Query Optimization, Relationships), Redis Caching.<br>
• <strong>Frontend:</strong> Next.js, React.js, JavaScript (ES6+), Blade, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress.<br>
• <strong>DevOps & Tools:</strong> Docker, Git, GitHub Actions, CI/CD, Postman, PHPUnit, OWASP Security.`,

        contact: `<strong>📞 Contact & Hiring Details:</strong><br><br>
• <strong>Location:</strong> Palakkad, Kerala, India<br>
• <strong>Phone:</strong> <a href="tel:+917902207027">+91 79022 07027</a><br>
• <strong>Email:</strong> <a href="mailto:akhilmeleppura@gmail.com">akhilmeleppura@gmail.com</a><br>
• <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/akhil-meleppura" target="_blank">linkedin.com/in/akhil-meleppura</a><br>
• <strong>GitHub:</strong> <a href="https://github.com/akhilmeleppura" target="_blank">github.com/akhilmeleppura</a><br>
• <strong>Live Portfolio:</strong> <a href="https://akhil-meleppura.42web.io" target="_blank">akhil-meleppura.42web.io</a><br><br>
<div class="chatbot-action-links">
  <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> Call Akhil</a>
  <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> Email Akhil</a>
</div>`,

        availability: `<strong>⚡ Availability & Target Roles:</strong><br><br>
• <strong>Status:</strong> Immediate Joiner ⚡<br>
• <strong>Location:</strong> Palakkad, Kerala, India (Open for Remote, Hybrid & On-Site opportunities)<br>
• <strong>Target Roles:</strong> Laravel Developer, PHP Developer, Backend Developer, Full-Stack / Software Engineer.`,

        education: `<strong>🎓 Education:</strong><br><br>
• <strong>Bachelor of Science (B.Sc.) in Physics</strong> (2019 – 2022)<br>
  Government Victoria College, Palakkad, Kerala.<br>
• Over 3 years of enterprise software engineering and production development practice.`,

        default: `I can help you with anything regarding Akhil S! You can ask about his <strong>3+ years experience</strong>, <strong>enterprise projects (AK-MART, Mini Mart)</strong>, <strong>technical stack</strong>, or <strong>contact info</strong>. Feel free to use the quick buttons below!`
      }
    },
    ml: {
      botName: "അഖിൽ AI അസിസ്റ്റന്റ്",
      subtitle: "ഓൺലൈൻ · അഖിലിനെക്കുറിച്ച് എന്തും ചോദിക്കാം",
      greeting: "നമസ്കാരം! 👋 ഞാൻ അഖിൽ എസ്-ന്റെ AI അസിസ്റ്റന്റാണ്. ലാരവെൽ, പിഎച്ച്പി, മൈഎസ്ക്യുഎൽ, റെസ്റ്റ് എപിഐകൾ എന്നിവയിൽ 3+ വർഷത്തെ പ്രൊഫഷണൽ പരിചയമുള്ള ബാക്ക്-എൻഡ് ഡെവലപ്പറാണ് അഖിൽ. നിങ്ങൾക്ക് എന്ത് വിവരമാണ് അറിയേണ്ടത്?",
      placeholder: "മലയാളത്തിലോ ഇംഗ്ലീഷിലോ ചോദിക്കൂ...",
      chips: [
        { label: "💼 3+ വർഷത്തെ പരിചയം", query: "അഖിലിന്റെ പ്രവൃത്തിപരിചയം പറയൂ" },
        { label: "🚀 പ്രധാന പ്രൊജക്ടുകൾ", query: "അഖിൽ ചെയ്ത പ്രൊജക്ടുകൾ ഏതൊക്കെയാണ്?" },
        { label: "🛠️ സാങ്കേതിക സ്കിൽസ്", query: "അഖിലിന്റെ പ്രധാന സ്കിൽസ് എന്തൊക്കെയാണ്?" },
        { label: "📞 ബന്ധപ്പെടാൻ", query: "അഖിലിനെ എങ്ങനെ ബന്ധപ്പെടാം?" },
        { label: "⚡ ലഭ്യത (Availability)", query: "അഖിൽ എപ്പോൾ ജോയിൻ ചെയ്യാൻ ലഭ്യമാണ്?" },
        { label: "🌐 Switch to English", query: "Can you speak in English?" }
      ],
      responses: {
        experience: `<strong>💼 3+ വർഷത്തെ പ്രൊഫഷണൽ പരിചയം:</strong><br><br>
• <strong>PIXELPO</strong> (ഫെബ്രുവരി 2026 – നിലവിൽ | റിമോട്ട് / പാലക്കാട്): ബാക്ക്-എൻഡ് ലാരവെൽ/പിഎച്ച്പി ഡെവലപ്പർ. ആർബിഎസി, എപിഐ ഇൻ്റഗ്രേഷൻ, ക്യൂകൾ, <strong>AK-MART</strong> മൾട്ടി-ബ്രാഞ്ച് റീട്ടെയിൽ പ്ലാറ്റ്‌ഫോം ഡെവലപ്‌മെൻ്റ്.<br>
• <strong>StackCue</strong> (ജൂൺ 2025 – ജനുവരി 2026 | റിമോട്ട് / പാലക്കാട്): ലാരവെൽ ഡെവലപ്പർ. MVC ബാക്ക്-എൻഡ്, RESTful APIs, സാങ്ക്ടം & സ്പാറ്റി സെക്യൂരിറ്റി, Next.js ഇൻ്റഗ്രേഷൻ.<br>
• <strong>Commerce9 Technologies</strong> (ഡിസംബർ 2023 – ഏപ്രിൽ 2025 | ഇൻഫോപാർക്ക്, കൊച്ചി): സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയർ. ഓർഡർ മാനേജ്‌മെൻ്റ്, ഡെലിവറി ട്രാക്കിംഗ്, പേയ്‌മെൻ്റ് എപിഐകൾ, MySQL ഒപ്റ്റിമൈസേഷൻ.<br>
• <strong>Commerce9 Technologies</strong> (ഡിസംബർ 2023 – ജൂൺ 2024): സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയർ ഇൻ്റേൺ. ലാരവെൽ & റിയാക്റ്റ് ഡെവലപ്‌മെൻ്റ്.`,

        projects: `<strong>🚀 പ്രധാന പ്രൊജക്ടുകൾ:</strong><br><br>
1. <strong>AK-MART</strong>: മൾട്ടി-ബ്രാഞ്ച് റീട്ടെയിൽ & POS പ്ലാറ്റ്‌ഫോം (Laravel 12, Livewire 3, MySQL, Redis, Sanctum, Spatie).<br>
   <a href="https://ak-mart.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> ലൈവ് ഡെമോ</a> 
   <a href="https://github.com/akhilmeleppura/Ak-Mart" target="_blank" class="chatbot-action-link"><i class="fab fa-github"></i> ഗിറ്റ്ഹബ്ബ്</a><br><br>
2. <strong>Mini Mart</strong>: മൾട്ടി-വെണ്ടർ ഇ-കൊമേഴ്‌സ് മാർക്കറ്റ്‌പ്ലേസ്.<br>
   <a href="https://minimart-hqui.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> ലൈവ് ഡെമോ</a><br><br>
3. <strong>HC Admin System</strong>: എൻ്റർപ്രൈസ് ആർബിഎസി & അഡ്മിൻ മാനേജ്‌മെൻ്റ് സിസ്റ്റം.<br>
4. <strong>Dodelivery</strong>: തത്സമയ ഡെലിവറി & ഡിസ്പാച്ച് ട്രാക്കിംഗ് പ്ലാറ്റ്‌ഫോം.<br>
5. <strong>Store9</strong>: ഇ-കൊമേഴ്‌സ് ബാക്ക്-എൻഡ് & പേയ്‌മെൻ്റ് ഗേറ്റ്‌വേ.<br>
6. <strong>Tekneka</strong>: സുരക്ഷിത ഫയൽ & ഡോക്യുമെൻ്റ് വോൾട്ട് സിസ്റ്റം.<br>
7. <strong>10+ വെബ് & സിഎംഎസ് പ്രൊജക്ടുകൾ</strong>: വേർഡ്പ്രസ്സ്, വൂകൊമേഴ്‌സ് ബിസിനസ്സ് സൈറ്റുകൾ.`,

        skills: `<strong>🛠️ സാങ്കേതിക വൈദഗ്ദ്ധ്യം (Skills):</strong><br><br>
• <strong>ബാക്ക്-എൻഡ്:</strong> Laravel 11/12, PHP 8.x, RESTful APIs, OOP, MVC, Laravel Sanctum, Spatie Permissions, RBAC, Queues & Background Jobs.<br>
• <strong>ഡാറ്റാബേസ്:</strong> MySQL (Schema Design, Query Optimization), Redis Caching.<br>
• <strong>ഫ്രണ്ട്-എൻഡ്:</strong> Next.js, React.js, JavaScript (ES6+), Blade, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress.<br>
• <strong>ഡെവോപ്സ് & ടൂളുകൾ:</strong> Docker, Git, GitHub Actions, CI/CD, Postman, PHPUnit, OWASP Security.`,

        contact: `<strong>📞 ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ:</strong><br><br>
• <strong>സ്ഥലം:</strong> പാലക്കാട്, കേരളം, ഇന്ത്യ<br>
• <strong>ഫോൺ:</strong> <a href="tel:+917902207027">+91 79022 07027</a><br>
• <strong>ഇമെയിൽ:</strong> <a href="mailto:akhilmeleppura@gmail.com">akhilmeleppura@gmail.com</a><br>
• <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/akhil-meleppura" target="_blank">linkedin.com/in/akhil-meleppura</a><br>
• <strong>GitHub:</strong> <a href="https://github.com/akhilmeleppura" target="_blank">github.com/akhilmeleppura</a><br>
• <strong>പോർട്ട്ഫോളിയോ:</strong> <a href="https://akhil-meleppura.42web.io" target="_blank">akhil-meleppura.42web.io</a><br><br>
<div class="chatbot-action-links">
  <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> വിളിക്കുക</a>
  <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> ഇമെയിൽ അയക്കുക</a>
</div>`,

        availability: `<strong>⚡ ലഭ്യതയും ജോബ് റോളുകളും:</strong><br><br>
• <strong>ലഭ്യത:</strong> ഉടനടി ജോലിയിൽ പ്രവേശിക്കാം (Immediate Joiner) ⚡<br>
• <strong>സ്ഥലം:</strong> പാലക്കാട്, കേരളം (റിമോട്ട്, ഹൈബ്രിഡ്, ഓൺ-സൈറ്റ് അവസരങ്ങൾ സ്വീകരിക്കുന്നു)<br>
• <strong>റോളുകൾ:</strong> Laravel Developer, PHP Developer, Backend Developer, Software Engineer.`,

        education: `<strong>🎓 വിദ്യാഭ്യാസം:</strong><br><br>
• <strong>ബാച്ചിലർ ഓഫ് സയൻസ് (B.Sc.) ഇൻ ഫിസിക്സ്</strong> (2019 – 2022)<br>
  ഗവൺമെന്റ് വിക്ടോറിയ കോളേജ്, പാലക്കാട്, കേരളം.<br>
• കൂടാതെ 3+ വർഷത്തെ പ്രൊഫഷണൽ സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയറിംഗ് പ്രവൃത്തിപരിചയം.`,

        default: `അഖിലിന്റെ <strong>3+ വർഷത്തെ പ്രവൃത്തിപരിചയം</strong>, <strong>പ്രൊജക്ടുകൾ (AK-MART, Mini Mart)</strong>, <strong>സാങ്കേതിക സ്കിൽസ്</strong>, അല്ലെങ്കിൽ <strong>ഫോൺ/ഇമെയിൽ വിവരങ്ങൾ</strong> എന്നിവയെക്കുറിച്ച് എന്നോട് ചോദിക്കാം. താഴെയുള്ള ബട്ടണുകൾ ഉപയോഗിക്കാവുന്നതാണ്!`
      }
    }
  };

  // State
  let currentLang = (function() {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'ml' || stored === 'en') return stored;
      return (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.defaultLang) || 'en';
    } catch (e) {
      return 'en';
    }
  })();

  let isOpen = false;

  // DOM Elements
  let triggerBtn, chatWindow, msgContainer, inputEl, sendBtn, langBtn, chipsContainer, titleBox;

  function initChatbot() {
    // 1. Create HTML structures
    triggerBtn = document.createElement('button');
    triggerBtn.className = 'chatbot-trigger';
    triggerBtn.setAttribute('aria-label', 'Open AI Assistant Chat');
    triggerBtn.innerHTML = `
      <div class="online-pulse"></div>
      <i class="fas fa-robot trigger-icon"></i>
    `;

    chatWindow = document.createElement('div');
    chatWindow.className = 'chatbot-window';
    chatWindow.innerHTML = `
      <div class="chatbot-header">
        <div class="chatbot-header-left">
          <div class="chatbot-avatar">
            <i class="fas fa-robot"></i>
            <div class="avatar-status"></div>
          </div>
          <div class="chatbot-title-box">
            <h3 id="cb-header-title">${KB[currentLang].botName}</h3>
            <p id="cb-header-subtitle">${KB[currentLang].subtitle}</p>
          </div>
        </div>
        <div class="chatbot-header-actions">
          <button class="chatbot-lang-btn" id="cb-lang-toggle" title="Switch Language">${currentLang === 'en' ? 'മലയാളം' : 'EN'}</button>
          <button class="chatbot-close-btn" id="cb-close-btn" aria-label="Close Chat">&times;</button>
        </div>
      </div>
      <div class="chatbot-messages" id="cb-messages"></div>
      <div class="chatbot-suggestions" id="cb-suggestions"></div>
      <div class="chatbot-input-bar">
        <input type="text" class="chatbot-input" id="cb-input" placeholder="${KB[currentLang].placeholder}" autocomplete="off" />
        <button class="chatbot-send-btn" id="cb-send-btn" aria-label="Send Message">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    `;

    document.body.appendChild(triggerBtn);
    document.body.appendChild(chatWindow);

    // References
    msgContainer = document.getElementById('cb-messages');
    inputEl = document.getElementById('cb-input');
    sendBtn = document.getElementById('cb-send-btn');
    langBtn = document.getElementById('cb-lang-toggle');
    chipsContainer = document.getElementById('cb-suggestions');
    titleBox = document.querySelector('.chatbot-title-box');

    // Events
    triggerBtn.addEventListener('click', toggleChat);
    document.getElementById('cb-close-btn').addEventListener('click', toggleChat);
    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    langBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ml' : 'en');
    });

    // Render Initial Greeting and Chips
    renderChips();
    addBotMessage(KB[currentLang].greeting);

    // Listen for portfolio language changes
    window.addEventListener('storage', (e) => {
      if (e.key === 'lang' && (e.newValue === 'en' || e.newValue === 'ml')) {
        setLanguage(e.newValue);
      }
    });

    // Also observe documentElement lang
    const observer = new MutationObserver(() => {
      const docLang = document.documentElement.lang;
      if (docLang && (docLang === 'en' || docLang === 'ml') && docLang !== currentLang) {
        setLanguage(docLang);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  function toggleChat() {
    isOpen = !isOpen;
    if (isOpen) {
      chatWindow.classList.add('open');
      triggerBtn.classList.add('active');
      triggerBtn.innerHTML = `<i class="fas fa-times trigger-icon"></i>`;
      inputEl.focus();
    } else {
      chatWindow.classList.remove('open');
      triggerBtn.classList.remove('active');
      triggerBtn.innerHTML = `
        <div class="online-pulse"></div>
        <i class="fas fa-robot trigger-icon"></i>
      `;
    }
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ml') return;
    currentLang = lang;
    langBtn.textContent = currentLang === 'en' ? 'മലയാളം' : 'EN';
    document.getElementById('cb-header-title').textContent = KB[currentLang].botName;
    document.getElementById('cb-header-subtitle').textContent = KB[currentLang].subtitle;
    inputEl.placeholder = KB[currentLang].placeholder;
    renderChips();
    addBotMessage(currentLang === 'en' ? "Language changed to English! How can I help you?" : "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി! അഖിലിനെക്കുറിച്ച് എന്താണ് അറിയേണ്ടത്?");
  }

  function renderChips() {
    chipsContainer.innerHTML = '';
    const chips = KB[currentLang].chips;
    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'chatbot-chip';
      btn.textContent = chip.label;
      btn.addEventListener('click', () => {
        inputEl.value = chip.query;
        handleSend();
      });
      chipsContainer.appendChild(btn);
    });
  }

  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chatbot-msg user';
    div.textContent = text;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function addBotMessage(html) {
    const div = document.createElement('div');
    div.className = 'chatbot-msg bot';
    div.innerHTML = html;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chatbot-typing';
    div.id = 'cb-typing-indicator';
    div.innerHTML = `
      <div class="chatbot-dot"></div>
      <div class="chatbot-dot"></div>
      <div class="chatbot-dot"></div>
    `;
    msgContainer.appendChild(div);
    msgContainer.scrollTop = msgContainer.scrollHeight;
  }

  function hideTyping() {
    const el = document.getElementById('cb-typing-indicator');
    if (el) el.remove();
  }

  function handleSend() {
    const query = inputEl.value.trim();
    if (!query) return;

    addUserMessage(query);
    inputEl.value = '';

    showTyping();

    // Match query
    setTimeout(() => {
      hideTyping();
      const reply = findAnswer(query);
      addBotMessage(reply);
    }, 450);
  }

  function findAnswer(q) {
    const text = q.toLowerCase();
    const isMalayalam = /[\u0D00-\u0D7F]/.test(q);
    const lang = isMalayalam ? 'ml' : currentLang;

    // Check if user requests language change
    if (text.includes('malayalam') || text.includes('മലയാള')) {
      if (currentLang !== 'ml') {
        currentLang = 'ml';
        setLanguage('ml');
        return KB.ml.greeting;
      }
    }
    if (text.includes('english') || text.includes('ഇംഗ്ലീഷ്')) {
      if (currentLang !== 'en') {
        currentLang = 'en';
        setLanguage('en');
        return KB.en.greeting;
      }
    }

    const dict = KB[lang].responses;

    // Experience / Companies
    if (text.includes('experience') || text.includes('work') || text.includes('compan') || text.includes('pixelpo') || text.includes('stackcue') || text.includes('commerce9') || text.includes('പരിചയം') || text.includes('കമ്പനി') || text.includes('വർഷ')) {
      return dict.experience;
    }

    // Projects / Works
    if (text.includes('project') || text.includes('work') || text.includes('ak-mart') || text.includes('minimart') || text.includes('mini mart') || text.includes('admin') || text.includes('dodelivery') || text.includes('store9') || text.includes('tekneka') || text.includes('പ്രൊജക്റ്റ്') || text.includes('ചെയ്തത്') || text.includes('വർക്ക്')) {
      return dict.projects;
    }

    // Skills / Stack
    if (text.includes('skill') || text.includes('stack') || text.includes('tech') || text.includes('laravel') || text.includes('php') || text.includes('mysql') || text.includes('redis') || text.includes('next') || text.includes('react') || text.includes('docker') || text.includes('സ്കിൽ') || text.includes('സാങ്കേതിക')) {
      return dict.skills;
    }

    // Contact / Phone / Email / Hire
    if (text.includes('contact') || text.includes('phone') || text.includes('call') || text.includes('email') || text.includes('hire') || text.includes('reach') || text.includes('number') || text.includes('ഫോൺ') || text.includes('ഇമെയിൽ') || text.includes('ബന്ധപ്പെടാൻ') || text.includes('വിളിക്ക')) {
      return dict.contact;
    }

    // Availability / Location
    if (text.includes('availab') || text.includes('join') || text.includes('immediate') || text.includes('location') || text.includes('kerala') || text.includes('palakkad') || text.includes('സ്ഥലം') || text.includes('എപ്പോൾ') || text.includes('ലഭ്യത')) {
      return dict.availability;
    }

    // Education
    if (text.includes('education') || text.includes('degree') || text.includes('college') || text.includes('physics') || text.includes('victoria') || text.includes('പഠനം') || text.includes('വിദ്യാഭ്യാസം')) {
      return dict.education;
    }

    // Greetings
    if (text.includes('hi') || text.includes('hello') || text.includes('hey') || text.includes('നമസ്കാരം') || text.includes('ഹലോ') || text.includes('സുഖമാണോ')) {
      return lang === 'en' ? "Hello! How can I assist you with Akhil S's portfolio today?" : "നമസ്കാരം! അഖിലിന്റെ പ്രൊഫഷണൽ വിവരങ്ങളെക്കുറിച്ച് എന്താണ് അറിയേണ്ടത്?";
    }

    return dict.default;
  }

  // Initialize once DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();

