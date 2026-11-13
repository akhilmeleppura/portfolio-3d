/**
 * Cyberpunk AI Assistant Chatbot - Akhil S Portfolio
 * Supports English (en), Malayalam (ml), and Hindi (hi)
 */
(function() {
  // Knowledge Base for Akhil S
  const KB = {
    en: {
      botName: "Akhil's AI Assistant",
      subtitle: "Online · Ask me anything about Akhil S",
      greeting: "Hello! 👋 I am Akhil S's virtual assistant. Akhil is a Backend Laravel / PHP Developer with 3+ years of professional experience building scalable web apps, enterprise retail platforms, and delivery systems. How can I assist you today?",
      placeholder: "Ask in English, മലയാളം, or हिन्दी...",
      langLabel: "മലയാളം",
      chips: [
        { label: "💼 3+ Yrs Experience", query: "Tell me about Akhil's work experience" },
        { label: "🚀 Top Projects", query: "What projects has Akhil built?" },
        { label: "🛠️ Tech Stack", query: "What are Akhil's core technical skills?" },
        { label: "📞 Contact / Hire", query: "How can I contact or hire Akhil?" },
        { label: "⚡ Availability", query: "Is Akhil available immediately?" },
        { label: "🌐 മലയാളം / हिन्दी", query: "Can you speak in Malayalam or Hindi?" }
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
      langLabel: "हिन्दी",
      chips: [
        { label: "💼 3+ വർഷത്തെ പരിചയം", query: "അഖിലിന്റെ പ്രവൃത്തിപരിചയം പറയൂ" },
        { label: "🚀 പ്രധാന പ്രൊജക്ടുകൾ", query: "അഖിൽ ചെയ്ത പ്രൊജക്ടുകൾ ഏതൊക്കെയാണ്?" },
        { label: "🛠️ സാങ്കേതിക സ്കിൽസ്", query: "അഖിലിന്റെ പ്രധാന സ്കിൽസ് എന്തൊക്കെയാണ്?" },
        { label: "📞 ബന്ധപ്പെടാൻ", query: "അഖിലിനെ എങ്ങനെ ബന്ധപ്പെടാം?" },
        { label: "⚡ ലഭ്യത (Availability)", query: "അഖിൽ എപ്പോൾ ജോയിൻ ചെയ്യാൻ ലഭ്യമാണ്?" },
        { label: "🌐 English / हिन्दी", query: "Switch to English or Hindi" }
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
    },
    hi: {
      botName: "अखिल AI सहायक",
      subtitle: "ऑनलाइन · अखिल एस के बारे में कुछ भी पूछें",
      greeting: "नमस्ते! 👋 मैं अखिल एस का AI सहायक हूँ। अखिल 3+ वर्षों के पेशेवर अनुभव के साथ बैक-एंड लारवेल / पीएचपी डेवलपर हैं। उन्होंने स्केलेबल वेब ऐप्स, एंटरप्राइज रिटेल प्लेटफॉर्म और डिलीवरी सिस्टम बनाए हैं। मैं आपकी क्या सहायता कर सकता हूँ?",
      placeholder: "हिन्दी, English या മലയാളം में पूछें...",
      langLabel: "EN",
      chips: [
        { label: "💼 3+ वर्ष का अनुभव", query: "अखिल के कार्य अनुभव के बारे में बताएं" },
        { label: "🚀 मुख्य प्रोजेक्ट्स", query: "अखिल ने कौन-कौन से प्रोजेक्ट्स बनाए हैं?" },
        { label: "🛠️ तकनीकी कौशल", query: "अखिल के तकनीकी कौशल क्या हैं?" },
        { label: "📞 संपर्क विवरण", query: "अखिल से कैसे संपर्क करें?" },
        { label: "⚡ उपलब्धता (Availability)", query: "अखिल कब जॉइन कर सकते हैं?" },
        { label: "🌐 English / മലയാളം", query: "Switch to English or Malayalam" }
      ],
      responses: {
        experience: `<strong>💼 3+ वर्ष का पेशेवर अनुभव:</strong><br><br>
• <strong>PIXELPO</strong> (फरवरी 2026 – वर्तमान | रिमोट / पलक्कड़): बैक-एंड लारवेल/पीएचपी डेवलपर। RBAC, एपीआई इंटीग्रेशन, डेटाबेस वर्कफ़्लो और <strong>AK-MART</strong> मल्टी-ब्रांच रिटेल प्लेटफॉर्म का विकास।<br>
• <strong>StackCue</strong> (जून 2025 – जनवरी 2026 | रिमोट / पलक्कड़): लारवेल डेवलपर। MVC बैक-एंड, RESTful APIs, सैंक्टम और स्पैटी परमिशन्स, और Next.js इंटीग्रेशन।<br>
• <strong>Commerce9 Technologies</strong> (दिसंबर 2023 – अप्रैल 2025 | इन्फोपार्क, कोच्चि): सॉफ्टवेयर इंजीनियर। ऑर्डर प्रबंधन, डिलीवरी ट्रैकिंग, पेमेंट गेटवे एपीआई और MySQL क्वेरी ऑप्टिमाइजेशन।<br>
• <strong>Commerce9 Technologies</strong> (दिसंबर 2023 – जून 2024): सॉफ्टवेयर इंजीनियर इंटर्न। लारवेल और रिएक्ट अनुप्रयोग विकास।`,

        projects: `<strong>🚀 प्रमुख प्रोजेक्ट्स और कार्य:</strong><br><br>
1. <strong>AK-MART</strong>: मल्टी-ब्रांच रिटेल और पीओएस प्लेटफॉर्म (Laravel 12, Livewire 3, MySQL, Redis, Sanctum, Spatie)।<br>
   <a href="https://ak-mart.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> लाइव डेमो</a> 
   <a href="https://github.com/akhilmeleppura/Ak-Mart" target="_blank" class="chatbot-action-link"><i class="fab fa-github"></i> गिटहब</a><br><br>
2. <strong>Mini Mart</strong>: मल्टी-वेंडर ई-कॉमर्स मार्केटप्लेस।<br>
   <a href="https://minimart-hqui.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> लाइव डेमो</a><br><br>
3. <strong>HC Admin System</strong>: एंटरप्राइज RBAC और एडमिन वर्कफ़्लो इंजन।<br>
4. <strong>Dodelivery</strong>: रीयल-टाइम लॉजिस्टिक्स और डिलीवरी ट्रैकिंग प्लेटफॉर्म।<br>
5. <strong>Store9</strong>: स्केलेबल ई-कॉमर्स बैक-एंड और पेमेंट गेटवे।<br>
6. <strong>Tekneka</strong>: सुरक्षित फ़ाइल और डॉक्यूमेंट वॉल्ट सिस्टम।<br>
7. <strong>10+ वेब और सीएमएस प्रोजेक्ट्स</strong>: वर्डप्रेस और वूकॉमर्स बिजनेस सॉल्यूशंस।`,

        skills: `<strong>🛠️ तकनीकी कौशल और स्टैक:</strong><br><br>
• <strong>बैक-एंड:</strong> Laravel 11/12, PHP 8.x, RESTful APIs, OOP, MVC, Laravel Sanctum, Spatie Permissions, RBAC, Queues & Background Jobs.<br>
• <strong>डेटाबेस:</strong> MySQL (Schema Design, Query Optimization), Redis Caching.<br>
• <strong>फ्रंट-एंड:</strong> Next.js, React.js, JavaScript (ES6+), Blade, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress.<br>
• <strong>डेवऑप्स और टूल्स:</strong> Docker, Git, GitHub Actions, CI/CD, Postman, PHPUnit, OWASP Security.`,

        contact: `<strong>📞 संपर्क और हायरिंग विवरण:</strong><br><br>
• <strong>स्थान:</strong> पलक्कड़, केरल, भारत<br>
• <strong>फोन:</strong> <a href="tel:+917902207027">+91 79022 07027</a><br>
• <strong>ईमेल:</strong> <a href="mailto:akhilmeleppura@gmail.com">akhilmeleppura@gmail.com</a><br>
• <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/akhil-meleppura" target="_blank">linkedin.com/in/akhil-meleppura</a><br>
• <strong>GitHub:</strong> <a href="https://github.com/akhilmeleppura" target="_blank">github.com/akhilmeleppura</a><br>
• <strong>लाइव पोर्टफोलियो:</strong> <a href="https://akhil-meleppura.42web.io" target="_blank">akhil-meleppura.42web.io</a><br><br>
<div class="chatbot-action-links">
  <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> कॉल करें</a>
  <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> ईमेल भेजें</a>
</div>`,

        availability: `<strong>⚡ उपलब्धता और भूमिकाएं:</strong><br><br>
• <strong>स्थिति:</strong> तुरंत उपलब्ध (Immediate Joiner) ⚡<br>
• <strong>स्थान:</strong> पलक्कड़, केरल (रिमोट, हाइब्रिड और ऑन-साइट अवसरों के लिए खुले हैं)<br>
• <strong>भूमिकाएं:</strong> Laravel Developer, PHP Developer, Backend Developer, Software Engineer.`,

        education: `<strong>🎓 शिक्षा:</strong><br><br>
• <strong>बैचलर ऑफ साइंस (B.Sc.) भौतिकी (Physics) में</strong> (2019 – 2022)<br>
  गवर्नमेंट विक्टोरिया कॉलेज, पलक्कड़, केरल।<br>
• इसके साथ 3+ वर्षों का एंटरप्राइज सॉफ्टवेयर इंजीनियरिंग अनुभव।`,

        default: `मैं अखिल एस के बारे में आपकी पूरी सहायता कर सकता हूँ! आप उनके <strong>3+ वर्ष के अनुभव</strong>, <strong>प्रोजेक्ट्स (AK-MART, Mini Mart)</strong>, <strong>तकनीकी स्टैक</strong>, या <strong>फोन/ईमेल संपर्क</strong> के बारे में पूछ सकते हैं।`
      }
    }
  };

  // State
  let currentLang = (function() {
    try {
      const stored = localStorage.getItem('lang');
      if (stored === 'ml' || stored === 'en' || stored === 'hi') return stored;
      return (window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.defaultLang) || 'en';
    } catch (e) {
      return 'en';
    }
  })();

  let isOpen = false;

  // DOM Elements
  let triggerBtn, chatWindow, msgContainer, inputEl, sendBtn, langBtn, chipsContainer;

  function initChatbot() {
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
          <button class="chatbot-lang-btn" id="cb-lang-toggle" title="Switch Language">${KB[currentLang].langLabel}</button>
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

    // Events
    triggerBtn.addEventListener('click', toggleChat);
    document.getElementById('cb-close-btn').addEventListener('click', toggleChat);
    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    langBtn.addEventListener('click', () => {
      // Cycle: en -> ml -> hi -> en
      const next = currentLang === 'en' ? 'ml' : (currentLang === 'ml' ? 'hi' : 'en');
      setLanguage(next);
    });

    // Render Initial Greeting and Chips
    renderChips();
    addBotMessage(KB[currentLang].greeting);

    // Observe documentElement lang
    const observer = new MutationObserver(() => {
      const docLang = document.documentElement.lang;
      if (docLang && (docLang === 'en' || docLang === 'ml' || docLang === 'hi') && docLang !== currentLang) {
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
    if (!KB[lang]) return;
    currentLang = lang;
    langBtn.textContent = KB[currentLang].langLabel;
    document.getElementById('cb-header-title').textContent = KB[currentLang].botName;
    document.getElementById('cb-header-subtitle').textContent = KB[currentLang].subtitle;
    inputEl.placeholder = KB[currentLang].placeholder;
    renderChips();

    const switchMsg = lang === 'en' 
      ? "Language changed to English! How can I help you?"
      : (lang === 'ml' 
          ? "ഭാഷ മലയാളത്തിലേക്ക് മാറ്റി! അഖിലിനെക്കുറിച്ച് എന്താണ് അറിയേണ്ടത്?"
          : "भाषा हिन्दी में बदल दी गई है! आप अखिल एस के बारे में क्या जानना चाहते हैं?");
    addBotMessage(switchMsg);
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

    setTimeout(() => {
      hideTyping();
      const reply = findAnswer(query);
      addBotMessage(reply);
    }, 450);
  }

  function findAnswer(q) {
    const text = q.toLowerCase();
    const isMalayalam = /[\u0D00-\u0D7F]/.test(q);
    const isHindi = /[\u0900-\u097F]/.test(q);

    let lang = currentLang;
    if (isMalayalam) lang = 'ml';
    else if (isHindi) lang = 'hi';

    // Direct language switches
    if (text.includes('malayalam') || text.includes('മലയാള')) {
      if (currentLang !== 'ml') { setLanguage('ml'); return KB.ml.greeting; }
    }
    if (text.includes('hindi') || text.includes('हिन्दी') || text.includes('हिंदी')) {
      if (currentLang !== 'hi') { setLanguage('hi'); return KB.hi.greeting; }
    }
    if (text.includes('english') || text.includes('ഇംഗ്ലീഷ്') || text.includes('इंग्लिश')) {
      if (currentLang !== 'en') { setLanguage('en'); return KB.en.greeting; }
    }

    const dict = KB[lang].responses;

    // Experience / Companies
    if (text.includes('experience') || text.includes('work') || text.includes('compan') || text.includes('pixelpo') || text.includes('stackcue') || text.includes('commerce9') || text.includes('പരിചയം') || text.includes('കമ്പനി') || text.includes('വർഷ') || text.includes('अनुभव') || text.includes('कंपनी') || text.includes('काम')) {
      return dict.experience;
    }

    // Projects / Works
    if (text.includes('project') || text.includes('ak-mart') || text.includes('minimart') || text.includes('mini mart') || text.includes('admin') || text.includes('dodelivery') || text.includes('store9') || text.includes('tekneka') || text.includes('പ്രൊജക്റ്റ്') || text.includes('ചെയ്തത്') || text.includes('വർക്ക്') || text.includes('प्रोजेक्ट') || text.includes('परियोजना')) {
      return dict.projects;
    }

    // Skills / Stack
    if (text.includes('skill') || text.includes('stack') || text.includes('tech') || text.includes('laravel') || text.includes('php') || text.includes('mysql') || text.includes('redis') || text.includes('next') || text.includes('react') || text.includes('docker') || text.includes('സ്കിൽ') || text.includes('സാങ്കേതിക') || text.includes('कौशल') || text.includes('हुनर')) {
      return dict.skills;
    }

    // Contact / Phone / Email / Hire
    if (text.includes('contact') || text.includes('phone') || text.includes('call') || text.includes('email') || text.includes('hire') || text.includes('reach') || text.includes('number') || text.includes('ഫോൺ') || text.includes('ഇമെയിൽ') || text.includes('ബന്ധപ്പെട') || text.includes('വിളിക്ക') || text.includes('മെസ്സേജ്') || text.includes('संपर्क') || text.includes('फोन') || text.includes('ईमेल') || text.includes('हायर') || text.includes('बात')) {
      return dict.contact;
    }

    // Availability / Location
    if (text.includes('availab') || text.includes('join') || text.includes('immediate') || text.includes('location') || text.includes('kerala') || text.includes('palakkad') || text.includes('സ്ഥലം') || text.includes('എപ്പോൾ') || text.includes('ലഭ്യത') || text.includes('ഉടനടി') || text.includes('उपलब्ध') || text.includes('स्थान') || text.includes('जॉइन')) {
      return dict.availability;
    }

    // Education / Study
    if (text.includes('education') || text.includes('study') || text.includes('studied') || text.includes('degree') || text.includes('college') || text.includes('physics') || text.includes('victoria') || text.includes('പഠ') || text.includes('വിദ്യാഭ്യാസ') || text.includes('शिक्षा') || text.includes('डिग्री') || text.includes('कॉलेज') || text.includes('पढ़ाई')) {
      return dict.education;
    }

    // Greetings (strict word boundaries for short words)
    if (/\b(hi|hello|hey)\b/i.test(text) || text.includes('നമസ്കാരം') || text.includes('ഹലോ') || text.includes('സുഖമാണോ') || text.includes('नमस्ते') || text.includes('प्रणाम')) {
      return lang === 'en' 
        ? "Hello! How can I assist you with Akhil S's portfolio today?" 
        : (lang === 'ml' 
            ? "നമസ്കാരം! അഖിലിന്റെ പ്രൊഫഷണൽ വിവരങ്ങളെക്കുറിച്ച് എന്താണ് അറിയേണ്ടത്?" 
            : "नमस्ते! मैं अखिल एस के पोर्टफोलियो के बारे में आपकी क्या मदद कर सकता हूँ?");
    }

    return dict.default;
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
