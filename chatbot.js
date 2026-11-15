/**
 * Cyberpunk AI Assistant Chatbot - Akhil S Portfolio
 * With Real-Time Voice Chat (Speech-to-Text & Text-to-Speech)
 * Free Google Gemini Live AI Integration with Multi-Turn Memory & Instant Fallback
 * Supports English (en), Malayalam (ml), and Hindi (hi)
 */
(function() {
  // Knowledge Base for Akhil S
  const KB = {
    en: {
      botName: "Akhil's AI Assistant",
      subtitle: "Online · Voice & AI Ready",
      greeting: "Hello! 👋 I am Akhil S's virtual assistant. Akhil is a Backend Laravel / PHP Developer with 3+ years of professional experience building scalable web apps, enterprise retail platforms, and delivery systems. You can type or tap the 🎙️ mic to speak with me!",
      placeholder: "Ask or tap 🎙️ mic to speak...",
      listeningText: "🎙️ Listening... speak now",
      chips: [
        { label: "💼 3+ Yrs Experience", query: "Tell me about Akhil's work experience" },
        { label: "🚀 Top Projects", query: "What are the most challenging projects Akhil has built?" },
        { label: "🛠️ Tech Stack", query: "What are Akhil's core technical skills?" },
        { label: "📞 Contact / Hire", query: "How can I contact or hire Akhil?" },
        { label: "⚡ Availability", query: "Is Akhil available immediately?" }
      ],
      responses: {
        experience: `<strong>💼 3+ Years Professional Experience:</strong><br><br>
• <strong>PIXELPO</strong> (Feb 2026 – Present | Palakkad): Senior Backend Laravel/PHP Developer leading multi-branch retail architecture, order fulfillment queues, and the <strong>AK-MART</strong> retail platform.<br>
• <strong>StackCue</strong> (Jun 2025 – Jan 2026 | Palakkad): Laravel Developer building RESTful APIs, Sanctum authentication, Spatie permissions, and Next.js integrations.<br>
• <strong>Commerce9 Technologies</strong> (Dec 2023 – Apr 2025 | Infopark, Kochi): Software Engineer delivering order management, delivery tracking, and MySQL optimization.<br>
• <strong>Commerce9 Technologies</strong> (Dec 2023 – Jun 2024): Software Engineer Intern building Laravel & React applications.`,

        projects: `<strong>🚀 Featured Works & Projects:</strong><br><br>
<strong>Enterprise Backend & Laravel:</strong><br>
1. <strong>AK-MART</strong>: Multi-Branch Retail Platform & POS (Laravel 12, Livewire 3, MySQL, Redis, Sanctum, Spatie).<br>
   <a href="https://ak-mart.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Live Demo</a> 
   <a href="https://github.com/akhilmeleppura/Ak-Mart" target="_blank" class="chatbot-action-link"><i class="fab fa-github"></i> GitHub</a><br><br>
2. <strong>Mini Mart</strong>: Multi-Vendor E-Commerce Platform.<br>
   <a href="https://minimart-hqui.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Live Demo</a><br><br>
3. <strong>HC Admin System</strong>: Enterprise RBAC & Workflow Engine (Laravel, Spatie, Next.js).<br>
4. <strong>Dodelivery</strong>: Real-Time Logistics & Dispatch Tracking Platform.<br>
5. <strong>Store9</strong>: Scalable E-Commerce Backend & Payment Integration.<br>
6. <strong>Tekneka</strong>: Secure File & Document Vault System with RBAC.<br><br>
<strong>Live WordPress & CMS Client Websites:</strong><br>
7. <strong>PIXELPO</strong>: Digital Agency & Branding Platform (WordPress, Elementor, PHP, SEO).<br>
   <a href="https://pixelpo.in" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Visit pixelpo.in</a><br><br>
8. <strong>Commerce 9 Technology</strong>: Creative Web Agency (WordPress, OceanWP, WhatsApp API).<br>
   <a href="https://commerce9.io" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Visit commerce9.io</a><br><br>
9. <strong>LegalGlow</strong>: Advocate & Legal Consulting Services (WordPress, Elementor, Lead Forms).<br>
   <a href="https://www.legalglow.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Visit legalglow.com</a><br><br>
10. <strong>Docib Clinic</strong>: Healthcare & Online Doctor Appointment Booking System.<br>
    <a href="http://docibclinic.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Visit docibclinic.com</a><br><br>
11. <strong>Smiling Coders</strong>: ERP Platform & Technology Solutions (WordPress, CPT, Caching).<br>
    <a href="https://thesmilingcoders.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> Visit thesmilingcoders.com</a>`,

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
• <strong>GitHub:</strong> <a href="https://github.com/akhilmeleppura" target="_blank">github.com/akhilmeleppura</a><br><br>
<div class="chatbot-action-links">
  <a href="https://wa.me/917902207027?text=Hi%20Akhil,%20I%20saw%20your%20portfolio" target="_blank" class="chatbot-action-link whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
  <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> Call</a>
  <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> Email</a>
</div>`,

        availability: `<strong>⚡ Availability & Target Roles:</strong><br><br>
• <strong>Status:</strong> Immediate Joiner ⚡<br>
• <strong>Location:</strong> Palakkad, Kerala, India (Open for Remote, Hybrid & On-Site opportunities)<br>
• <strong>Target Roles:</strong> Laravel Developer, PHP Developer, Backend Developer, Full-Stack / Software Engineer.`,

        education: `<strong>🎓 Education:</strong><br><br>
• <strong>Bachelor of Science (B.Sc.) in Physics</strong> (2019 – 2022)<br>
  Government Victoria College, Palakkad, Kerala.<br>
• Over 3 years of enterprise software engineering and production development practice.`,

        default: `I can help you with anything regarding Akhil S! You can ask about his <strong>3+ years experience</strong>, <strong>enterprise projects (AK-MART, Mini Mart)</strong>, <strong>technical stack</strong>, or <strong>contact info</strong>. Tap the 🎙️ mic to speak or use the quick buttons below!`
      }
    },
    ml: {
      botName: "അഖിൽ AI അസിസ്റ്റന്റ്",
      subtitle: "ഓൺലൈൻ · വോയ്‌സ് & AI സപ്പോർട്ട്",
      greeting: "നമസ്കാരം! 👋 ഞാൻ അഖിൽ എസ്-ന്റെ AI അസിസ്റ്റന്റാണ്. ലാരവെൽ, പിഎച്ച്പി, മൈഎസ്ക്യുഎൽ എന്നിവയിൽ 3+ വർഷത്തെ പ്രവൃത്തിപരിചയമുള്ള ബാക്ക്-എൻഡ് ഡെവലപ്പറാണ് അഖിൽ. ടൈപ്പ് ചെയ്യുകയോ 🎙️ മൈക്കിൽ ക്ലിക്ക് ചെയ്ത് എന്നോട് സംസാരിക്കുകയോ ചെയ്യാം!",
      placeholder: "ചോദിക്കൂ അല്ലെങ്കിൽ 🎙️ മൈക്കിൽ സംസാരിക്കൂ...",
      listeningText: "🎙️ കേൾക്കുന്നു... സംസാരിക്കൂ",
      chips: [
        { label: "💼 3+ വർഷത്തെ പരിചയം", query: "അഖിലിന്റെ പ്രവൃത്തിപരിചയം പറയൂ" },
        { label: "🚀 പ്രധാന പ്രൊജക്ടുകൾ", query: "അഖിൽ ചെയ്ത പ്രൊജക്ടുകൾ ഏതൊക്കെയാണ്?" },
        { label: "🛠️ സാങ്കേതിക സ്കിൽസ്", query: "അഖിലിന്റെ പ്രധാന സ്കിൽസ് എന്തൊക്കെയാണ്?" },
        { label: "📞 ബന്ധപ്പെടാൻ", query: "അഖിലിനെ എങ്ങനെ ബന്ധപ്പെടാം?" },
        { label: "⚡ ലഭ്യത (Availability)", query: "അഖിൽ എപ്പോൾ ജോയിൻ ചെയ്യാൻ ലഭ്യമാണ്?" }
      ],
      responses: {
        experience: `<strong>💼 3+ വർഷത്തെ പ്രൊഫഷണൽ പരിചയം:</strong><br><br>
• <strong>PIXELPO</strong> (ഫെബ്രുവരി 2026 – നിലവിൽ | പാലക്കാട്): ബാക്ക്-എൻഡ് ലാരവെൽ/പിഎച്ച്പി ഡെവലപ്പർ. ആർബിഎസി, എപിഐ ഇൻ്റഗ്രേഷൻ, ക്യൂകൾ, <strong>AK-MART</strong> മൾട്ടി-ബ്രാഞ്ച് റീട്ടെയിൽ പ്ലാറ്റ്‌ഫോം ഡെവലപ്‌മെൻ്റ്.<br>
• <strong>StackCue</strong> (ജൂൺ 2025 – ജനുവരി 2026 | പാലക്കാട്): ലാരവെൽ ഡെവലപ്പർ. MVC ബാക്ക്-എൻഡ്, RESTful APIs, സാങ്ക്ടം & സ്പാറ്റി സെക്യൂരിറ്റി, Next.js ഇൻ്റഗ്രേഷൻ.<br>
• <strong>Commerce9 Technologies</strong> (ഡിസംബർ 2023 – ഏപ്രിൽ 2025 | ഇൻഫോപാർക്ക്, കൊച്ചി): സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയർ. ഓർഡർ മാനേജ്‌മെൻ്റ്, ഡെലിവറി ട്രാക്കിംഗ്, പേയ്‌മെൻ്റ് എപിഐകൾ, MySQL ഒപ്റ്റിമൈസേഷൻ.<br>
• <strong>Commerce9 Technologies</strong> (ഡിസംബർ 2023 – ജൂൺ 2024): സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയർ ഇൻ്റേൺ. ലാരവെൽ & റിയാക്റ്റ് ഡെവലപ്‌മെൻ്റ്.`,

        projects: `<strong>🚀 പ്രധാന പ്രൊജക്ടുകൾ:</strong><br><br>
<strong>എൻ്റർപ്രൈസ് ബാക്ക്-എൻഡ് & ലാരവെൽ:</strong><br>
1. <strong>AK-MART</strong>: മൾട്ടി-ബ്രാഞ്ച് റീട്ടെയിൽ & POS പ്ലാറ്റ്‌ഫോം (Laravel 12, Livewire 3, MySQL, Redis, Sanctum, Spatie).<br>
   <a href="https://ak-mart.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> ലൈവ് ഡെമോ</a> 
   <a href="https://github.com/akhilmeleppura/Ak-Mart" target="_blank" class="chatbot-action-link"><i class="fab fa-github"></i> ഗിറ്റ്ഹബ്ബ്</a><br><br>
2. <strong>Mini Mart</strong>: മൾട്ടി-വെണ്ടർ ഇ-കൊമേഴ്‌സ് മാർക്കറ്റ്‌പ്ലേസ്.<br>
   <a href="https://minimart-hqui.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> ലൈവ് ഡെമോ</a><br><br>
3. <strong>HC Admin System</strong>: എൻ്റർപ്രൈസ് ആർബിഎസി & അഡ്മിൻ മാനേജ്‌മെൻ്റ് സിസ്റ്റം.<br>
4. <strong>Dodelivery</strong>: തത്സമയ ഡെലിവറി & ഡിസ്പാച്ച് ട്രാക്കിംഗ് പ്ലാറ്റ്‌ഫോം.<br>
5. <strong>Store9</strong>: ഇ-കൊമേഴ്‌സ് ബാക്ക്-എൻഡ് & പേയ്‌മെൻ്റ് ഇൻ്റഗ്രേഷൻ.<br>
6. <strong>Tekneka</strong>: സുരക്ഷിതമായ ഡോക്യുമെൻ്റ് വോൾട്ട് സിസ്റ്റം.<br><br>
<strong>ലൈവ് വേർഡ്പ്രസ്സ് & സിഎംഎസ് ക്ലയൻ്റ് സൈറ്റുകൾ:</strong><br>
7. <strong>PIXELPO</strong>: ഡിജിറ്റൽ ഏജൻസി പ്ലാറ്റ്‌ഫോം.<br>
   <a href="https://pixelpo.in" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> pixelpo.in സന്ദർശിക്കുക</a><br><br>
8. <strong>Commerce 9 Technology</strong>: ക്രിയേറ്റീവ് വെബ് ഏജൻസി വെബ്സൈറ്റ്.<br>
   <a href="https://commerce9.io" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> commerce9.io സന്ദർശിക്കുക</a><br><br>
9. <strong>LegalGlow</strong>: ലീഗൽ & അഡ്വക്കേറ്റ് സർവീസസ് പോർട്ടൽ.<br>
   <a href="https://www.legalglow.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> legalglow.com സന്ദർശിക്കുക</a><br><br>
10. <strong>Docib Clinic</strong>: ഹെൽത്ത്‌കെയർ & ഓൺലൈൻ ഡോക്ടർ അപ്പോയിന്റ്മെന്റ് ബുക്കിംഗ് സിസ്റ്റം.<br>
    <a href="http://docibclinic.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> docibclinic.com സന്ദർശിക്കുക</a><br><br>
11. <strong>Smiling Coders</strong>: ഇആർപി സർവീസസ് & ടെക് പ്ലാറ്റ്‌ഫോം.<br>
    <a href="https://thesmilingcoders.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> thesmilingcoders.com സന്ദർശിക്കുക</a>`,

        skills: `<strong>🛠️ സാങ്കേതിക സ്കിൽസ്:</strong><br><br>
• <strong>ബാക്ക്-എൻഡ്:</strong> Laravel 11/12, PHP 8.x, RESTful APIs, OOP, MVC, Laravel Sanctum, Spatie Permissions, RBAC, Queues & ബാക്ക്ഗ്രൗണ്ട് ജോലികൾ.<br>
• <strong>ഡാറ്റാബേസ്:</strong> MySQL (സ്കീമ ഡിസൈൻ, ഒപ്റ്റിമൈസേഷൻ, ഇൻഡക്സിങ്), Redis കാഷിങ്.<br>
• <strong>ഫ്രണ്ട്-എൻഡ്:</strong> Next.js, React.js, JavaScript (ES6+), Blade, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress.<br>
• <strong>ഡെവോപ്സ് & ടൂളുകൾ:</strong> Docker, Git, GitHub Actions, CI/CD, Postman, PHPUnit, OWASP Security.`,

        contact: `<strong>📞 ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ:</strong><br><br>
• <strong>സ്ഥലം:</strong> പാലക്കാട്, കേരളം, ഇന്ത്യ<br>
• <strong>ഫോൺ:</strong> <a href="tel:+917902207027">+91 79022 07027</a><br>
• <strong>ഇമെയിൽ:</strong> <a href="mailto:akhilmeleppura@gmail.com">akhilmeleppura@gmail.com</a><br>
• <strong>ലിങ്ക്ഡ്ഇൻ:</strong> <a href="https://linkedin.com/in/akhil-meleppura" target="_blank">linkedin.com/in/akhil-meleppura</a><br>
• <strong>ഗിറ്റ്ഹബ്ബ്:</strong> <a href="https://github.com/akhilmeleppura" target="_blank">github.com/akhilmeleppura</a><br><br>
<div class="chatbot-action-links">
  <a href="https://wa.me/917902207027?text=Hi%20Akhil,%20I%20saw%20your%20portfolio" target="_blank" class="chatbot-action-link whatsapp"><i class="fab fa-whatsapp"></i> വാട്ട്സ്ആപ്പ്</a>
  <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> വിളിക്കുക</a>
  <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> ഇമെയിൽ</a>
</div>`,

        availability: `<strong>⚡ ലഭ്യത & റോളുകൾ:</strong><br><br>
• <strong>സ്റ്റാറ്റസ്:</strong> ഉടനടി ജോലിയിൽ പ്രവേശിക്കാൻ തയ്യാറാണ് (Immediate Joiner) ⚡<br>
• <strong>സ്ഥലം:</strong> പാലക്കാട്, കേരളം (റിമോട്ട്, ഹൈബ്രിഡ്, ഓൺ-സൈറ്റ് അവസരങ്ങൾ സ്വീകരിക്കും)<br>
• <strong>റോളുകൾ:</strong> Laravel Developer, PHP Developer, Backend Developer, Full-Stack / Software Engineer.`,

        education: `<strong>🎓 വിദ്യാഭ്യാസം:</strong><br><br>
• <strong>ഫിസിക്സിൽ ബിരുദം (B.Sc. Physics)</strong> (2019 – 2022)<br>
  ഗവൺമെന്റ് വിക്ടോറിയ കോളേജ്, പാലക്കാട്, കേരളം.<br>
• 3 വർഷത്തിലധികം പ്രൊഫഷണൽ സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയറിംഗ് പ്രവൃത്തിപരിചയം.`,

        default: `അഖിൽ എസ്-നെക്കുറിച്ചുള്ള ഏത് ചോദ്യത്തിനും ഞാൻ സഹായിക്കാം! <strong>3+ വർഷത്തെ പ്രവൃത്തിപരിചയം</strong>, <strong>പ്രൊജക്ടുകൾ (AK-MART, Mini Mart)</strong>, <strong>സ്കിൽസ്</strong> ചോദിക്കാം. 🎙️ മൈക്കിൽ സംസാരിക്കുകയോ താഴെയുള്ള ബട്ടണുകൾ ഉപയോഗിക്കുകയോ ചെയ്യൂ!`
      }
    },
    hi: {
      botName: "अखिल AI असिस्टेंट",
      subtitle: "ऑनलाइन · वॉइस और AI सपोर्ट",
      greeting: "नमस्ते! 👋 मैं अखिल एस का AI असिस्टेंट हूँ। अखिल लारवेल, पीएचपी, मायएसक्यूएल और रेस्ट एपीआई में 3+ वर्षों के पेशेवर अनुभव वाले बैक-एंड डेवलपर हैं। आप टाइप कर सकते हैं या 🎙️ माइक पर टैप करके मुझसे बात कर सकते हैं!",
      placeholder: "पूछें या 🎙️ माइक दबाकर बोलें...",
      listeningText: "🎙️ सुन रहा हूँ... बोलिए",
      chips: [
        { label: "💼 3+ वर्ष का अनुभव", query: "अखिल का कार्य अनुभव बताएं" },
        { label: "🚀 प्रमुख प्रोजेक्ट्स", query: "अखिल ने कौन-कौन से प्रोजेक्ट बनाए हैं?" },
        { label: "🛠️ तकनीकी कौशल", query: "अखिल के मुख्य स्किल्स क्या हैं?" },
        { label: "📞 संपर्क / हायर", query: "अखिल से कैसे संपर्क करें?" },
        { label: "⚡ उपलब्धता (Availability)", query: "अखिल कब जॉइन कर सकते हैं?" }
      ],
      responses: {
        experience: `<strong>💼 3+ वर्ष का पेशेवर अनुभव:</strong><br><br>
• <strong>PIXELPO</strong> (फरवरी 2026 – वर्तमान | पलक्कड़): सीनियर बैक-एंड लारवेल/पीएचपी डेवलपर। RBAC, API इंटीग्रेशन, डेटाबेस वर्कफ़्लोज़ और <strong>AK-MART</strong> मल्टी-ब्रांच रिटेल प्लेटफ़ॉर्म निर्माण।<br>
• <strong>StackCue</strong> (जून 2025 – जनवरी 2026 | पलक्कड़): लारवेल डेवलपर। MVC बैक-एंड, RESTful APIs, सैंक्टम और स्पैटी सुरक्षा, Next.js इंटीग्रेशन।<br>
• <strong>Commerce9 Technologies</strong> (दिसंबर 2023 – अप्रैल 2025 | इन्फोपार्क, कोच्चि): सॉफ्टवेयर इंजीनियर। ऑर्डर मैनेजमेंट, डिलीवरी ट्रैकिंग, पेमेंट एपीआई और MySQL ऑप्टिमाइजेशन।<br>
• <strong>Commerce9 Technologies</strong> (दिसंबर 2023 – जून 2024): सॉफ्टवेयर इंजीनियर इंटर्न। लारवेल और रिएक्ट डेवलपमेंट।`,

        projects: `<strong>🚀 प्रमुख प्रोजेक्ट्स और कार्य:</strong><br><br>
<strong>एंटरप्राइज बैक-एंड और लारवेल:</strong><br>
1. <strong>AK-MART</strong>: मल्टी-ब्रांच रिटेल प्लेटफ़ॉर्म और POS (Laravel 12, Livewire 3, MySQL, Redis, Sanctum, Spatie)।<br>
   <a href="https://ak-mart.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> लाइव डेमो</a> 
   <a href="https://github.com/akhilmeleppura/Ak-Mart" target="_blank" class="chatbot-action-link"><i class="fab fa-github"></i> गिटहब</a><br><br>
2. <strong>Mini Mart</strong>: मल्टी-वेंडर ई-कॉमर्स मार्केटप्लेस।<br>
   <a href="https://minimart-hqui.onrender.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> लाइव डेमो</a><br><br>
3. <strong>HC Admin System</strong>: एंटरप्राइज RBAC और वर्कफ़्लो एडमिन इंजन।<br>
4. <strong>Dodelivery</strong>: रीयल-टाइम लॉजिस्टिक्स और डिलीवरी ट्रैकिंग प्लेटफ़ॉर्म।<br>
5. <strong>Store9</strong>: स्केलेबल ई-कॉमर्स बैक-एंड और पेमेंट इंटीग्रेशन।<br>
6. <strong>Tekneka</strong>: सुरक्षित दस्तावेज़ वॉल्ट सिस्टम।<br><br>
<strong>लाइव वर्डप्रेस और सीएमएस क्लाइंट वेबसाइट्स:</strong><br>
7. <strong>PIXELPO</strong>: डिजिटल एजेंसी वेबसाइट।<br>
   <a href="https://pixelpo.in" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> pixelpo.in देखें</a><br><br>
8. <strong>Commerce 9 Technology</strong>: क्रिएटिव वेब एजेंसी वेबसाइट।<br>
   <a href="https://commerce9.io" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> commerce9.io देखें</a><br><br>
9. <strong>LegalGlow</strong>: कानूनी और अधिवक्ता परामर्श पोर्टल।<br>
   <a href="https://www.legalglow.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> legalglow.com देखें</a><br><br>
10. <strong>Docib Clinic</strong>: ऑनलाइन डॉक्टर अपॉइंटमेंट बुकिंग हेल्थकेयर साइट।<br>
    <a href="http://docibclinic.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> docibclinic.com देखें</a><br><br>
11. <strong>Smiling Coders</strong>: ईआरपी सेवाएं और सॉफ्टवेयर परामर्श प्लेटफॉर्म।<br>
    <a href="https://thesmilingcoders.com" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> thesmilingcoders.com देखें</a>`,

        skills: `<strong>🛠️ तकनीकी कौशल और स्टैक:</strong><br><br>
• <strong>बैक-एंड:</strong> Laravel 11/12, PHP 8.x, RESTful APIs, OOP, MVC, Laravel Sanctum, Spatie Permissions, RBAC, Queues & बैकग्राउंड जॉब्स।<br>
• <strong>डेटाबेस:</strong> MySQL (स्कीमा डिज़ाइन, क्वेरी ऑप्टिमाइजेशन, इंडेक्सिंग), Redis कैशिंग।<br>
• <strong>फ्रंट-एंड:</strong> Next.js, React.js, JavaScript (ES6+), Blade, HTML5, CSS3, Bootstrap, Tailwind CSS, WordPress.<br>
• <strong>डेवऑप्स और टूल्स:</strong> Docker, Git, GitHub Actions, CI/CD, Postman, PHPUnit, OWASP Security.`,

        contact: `<strong>📞 संपर्क और हायरिंग विवरण:</strong><br><br>
• <strong>स्थान:</strong> पलक्कड़, केरल, भारत<br>
• <strong>फ़ोन:</strong> <a href="tel:+917902207027">+91 79022 07027</a><br>
• <strong>ईमेल:</strong> <a href="mailto:akhilmeleppura@gmail.com">akhilmeleppura@gmail.com</a><br>
• <strong>लिंक्डइन:</strong> <a href="https://linkedin.com/in/akhil-meleppura" target="_blank">linkedin.com/in/akhil-meleppura</a><br>
• <strong>गिटहब:</strong> <a href="https://github.com/akhilmeleppura" target="_blank">github.com/akhilmeleppura</a><br><br>
<div class="chatbot-action-links">
  <a href="https://wa.me/917902207027?text=Hi%20Akhil,%20I%20saw%20your%20portfolio" target="_blank" class="chatbot-action-link whatsapp"><i class="fab fa-whatsapp"></i> व्हाट्सएप</a>
  <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> कॉल करें</a>
  <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> ईमेल करें</a>
</div>`,

        availability: `<strong>⚡ उपलब्धता और पद:</strong><br><br>
• <strong>स्थिति:</strong> तुरंत जॉइन करने के लिए उपलब्ध (Immediate Joiner) ⚡<br>
• <strong>स्थान:</strong> पलक्कड़, केरल (रिमोट, हाइब्रिड और ऑन-साइट अवसरों के लिए खुले हैं)<br>
• <strong>लक्ष्य पद:</strong> Laravel Developer, PHP Developer, Backend Developer, Full-Stack / Software Engineer.`,

        education: `<strong>🎓 शिक्षा:</strong><br><br>
• <strong>भौतिकी में विज्ञान स्नातक (B.Sc. Physics)</strong> (2019 – 2022)<br>
  गवर्नमेंट विक्टोरिया कॉलेज, पलक्कड़, केरल।<br>
• 3+ वर्षों का व्यावहारिक सॉफ्टवेयर इंजीनियरिंग अनुभव।`,

        default: `मैं अखिल एस के संबंध में आपकी किसी भी तरह से सहायता कर सकता हूँ! आप उनके <strong>3+ वर्ष के अनुभव</strong>, <strong>प्रोजेक्ट्स (AK-MART, Mini Mart)</strong>, <strong>स्किल्स</strong> या <strong>संपर्क जानकारी</strong> के बारे में पूछ सकते हैं। 🎙️ माइक दबाकर बोलें या नीचे दिए बटनों का प्रयोग करें!`
      }
    }
  };

  let currentLang = 'en';
  let geminiMode = true; // Enabled by default with live API proxy
  let autoVoice = true;  // Auto read responses aloud
  let currentSpeakingUtterance = null;
  const conversationHistory = []; // Multi-turn memory

  // Speech Recognition & Voice Synthesis State
  let activeRecognition = null;
  let recognitionTimeout = null;
  let isListening = false;
  let speechKeepAliveInterval = null;
  let currentSpeechSessionId = 0;

  // DOM Elements
  let triggerBtn, chatWindow, msgContainer, inputEl, sendBtn, micBtn, closeBtn, chipsContainer, geminiToggleBtn, voiceAutoBtn;

  function prepareSpeechText(raw) {
    if (!raw) return '';
    return raw
      .replace(/<[^>]*>/g, ' ')               // Strip HTML tags
      .replace(/```[\s\S]*?```/g, ' ')        // Strip code blocks
      .replace(/`([^`]+)`/g, '$1')            // Strip inline code backticks
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')// [Link text](url) -> Link text
      .replace(/https?:\/\/[^\s]+/g, ' ')     // Strip raw URLs
      .replace(/[#*_~>|]/g, ' ')              // Strip markdown symbols
      .replace(/[-•]\s*/g, '. ')              // Bullets into natural pauses
      .replace(/\s+/g, ' ')                  // Collapse whitespace
      .trim();
  }

  function splitIntoSentences(text) {
    if (!text) return [];
    const matches = text.match(/[^.!?\n]+[.!?\n]+|[^.!?\n]+$/g);
    return matches ? matches.map(s => s.trim()).filter(s => s.length > 0) : [text];
  }

  function unlockAudio() {
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.resume(); } catch(e) {}
    }
  }

  function initChatbot() {
    try {
      const savedLang = localStorage.getItem('lang');
      if (savedLang && KB[savedLang]) currentLang = savedLang;
      const savedMode = localStorage.getItem('cb_gemini_mode');
      if (savedMode !== null) geminiMode = savedMode === 'true';
      const savedVoice = localStorage.getItem('cb_auto_voice');
      if (savedVoice !== null) autoVoice = savedVoice === 'true';
    } catch(e) {}

    // Prime voices on load
    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        try { window.speechSynthesis.getVoices(); } catch(e) {}
      };
      try { window.speechSynthesis.getVoices(); } catch(e) {}
    }

    // Touch/click listener to unlock audio on mobile & modern browsers
    window.addEventListener('click', unlockAudio, { once: true });
    window.addEventListener('touchstart', unlockAudio, { once: true });

    renderDOM();
    bindEvents();
    renderChips();
    addBotMessage(KB[currentLang].greeting, KB[currentLang].greeting, 'system', false);
  }

  function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      addBotMessage(
        "⚠️ <strong>Voice input is not supported in this browser.</strong><br>Please use Google Chrome, Microsoft Edge, or Safari for live voice chat.",
        "",
        'system',
        false
      );
      return;
    }

    stopSpeaking();
    stopListening();
    unlockAudio();
    pauseBackgroundAudio();

    try {
      const rec = new SpeechRecognition();
      activeRecognition = rec;
      rec.continuous = false;
      rec.interimResults = true;
      rec.maxAlternatives = 1;

      // Select language
      if (currentLang === 'ml') {
        rec.lang = 'ml-IN';
      } else if (currentLang === 'hi') {
        rec.lang = 'hi-IN';
      } else {
        rec.lang = 'en-IN';
      }

      rec.onstart = () => {
        isListening = true;
        if (micBtn) {
          micBtn.classList.add('listening');
          micBtn.setAttribute('title', 'Listening... Speak now (tap again to cancel)');
        }
        if (inputEl) {
          inputEl.classList.add('listening');
          inputEl.placeholder = KB[currentLang].listeningText || '🎙️ Listening... Speak now';
          inputEl.focus();
        }
      };

      let accumulatedFinal = '';

      rec.onresult = (event) => {
        let interim = '';
        accumulatedFinal = '';

        for (let i = 0; i < event.results.length; i++) {
          const res = event.results[i];
          if (res.isFinal) {
            accumulatedFinal += res[0].transcript;
          } else {
            interim += res[0].transcript;
          }
        }

        const full = (accumulatedFinal || interim).trim();
        if (inputEl && full) {
          inputEl.value = full;
        }

        // Auto-finish after 1.8 seconds of natural silence
        clearTimeout(recognitionTimeout);
        recognitionTimeout = setTimeout(() => {
          if (isListening && activeRecognition) {
            try { activeRecognition.stop(); } catch(e) {}
          }
        }, 1800);
      };

      rec.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
          addBotMessage(
            "⚠️ <strong>Microphone Permission Blocked:</strong><br>Your browser blocked microphone access. Click the 🔒 lock or 🎙️ camera/microphone icon in your address bar, change Microphone to <strong>Allow</strong>, and tap the mic button again!",
            "",
            'system',
            false
          );
        } else if (event.error === 'network') {
          addBotMessage(
            "⚠️ <strong>Voice Network Issue:</strong><br>Could not reach browser speech recognition service. Please check your internet connection.",
            "",
            'system',
            false
          );
        }
        stopListening();
      };

      rec.onend = () => {
        clearTimeout(recognitionTimeout);
        stopListening();
        // If voice text was captured, automatically submit it!
        if (inputEl && inputEl.value.trim()) {
          setTimeout(() => {
            if (inputEl && inputEl.value.trim()) {
              handleSend();
            }
          }, 350);
        }
      };

      rec.start();
    } catch(err) {
      console.warn('Recognition start exception:', err);
      stopListening();
    }
  }

  function stopListening() {
    isListening = false;
    clearTimeout(recognitionTimeout);
    if (micBtn) {
      micBtn.classList.remove('listening');
      micBtn.setAttribute('title', 'Voice Input (Click to speak)');
    }
    if (inputEl) {
      inputEl.classList.remove('listening');
      inputEl.placeholder = KB[currentLang].placeholder;
    }
    if (activeRecognition) {
      const r = activeRecognition;
      activeRecognition = null;
      try { r.stop(); } catch(e) {}
    }
  }

  function renderDOM() {
    // 1. Floating Trigger Button
    triggerBtn = document.createElement('button');
    triggerBtn.className = 'chatbot-trigger';
    triggerBtn.id = 'chatbot-trigger';
    triggerBtn.setAttribute('aria-label', 'Open Akhil AI Chatbot');
    triggerBtn.innerHTML = `
      <i class="fas fa-robot trigger-icon"></i>
      <span class="online-pulse"></span>
    `;
    document.body.appendChild(triggerBtn);

    // 2. Chatbot Window
    chatWindow = document.createElement('div');
    chatWindow.className = 'chatbot-window';
    chatWindow.id = 'chatbot-window';
    chatWindow.innerHTML = `
      <div class="chatbot-header">
        <div class="chatbot-header-left">
          <div class="chatbot-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="chatbot-title-group">
            <div class="chatbot-title" id="cb-header-title">${KB[currentLang].botName}</div>
            <div class="chatbot-subtitle" id="cb-header-subtitle">
              ${geminiMode ? '⚡ Gemini Live AI' : '⚡ Instant Mode'}
            </div>
          </div>
        </div>
        <div class="chatbot-header-actions">
          <button class="cb-voice-auto-btn ${autoVoice ? 'active' : ''}" id="cb-voice-auto-btn" title="Toggle Auto Voice (Reads answers aloud)">
            <i class="fas ${autoVoice ? 'fa-volume-high' : 'fa-volume-xmark'}"></i>
          </button>
          <button class="cb-gemini-toggle ${geminiMode ? 'active' : ''}" id="cb-gemini-toggle" title="Toggle Gemini Live AI / Instant Engine">
            <span class="toggle-dot"></span>
            <span class="toggle-text">${geminiMode ? 'AI ON' : 'AI OFF'}</span>
          </button>
          <div class="cb-lang-chips">
            <button class="cb-lang-chip ${currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="cb-lang-chip ${currentLang === 'ml' ? 'active' : ''}" data-lang="ml">ML</button>
            <button class="cb-lang-chip ${currentLang === 'hi' ? 'active' : ''}" data-lang="hi">HI</button>
          </div>
          <button class="chatbot-close-btn" id="cb-close-btn" title="Close Chat">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <div class="chatbot-messages" id="cb-messages"></div>

      <!-- Quick Action Chips -->
      <div class="cb-chips-bar" id="cb-chips-bar"></div>

      <div class="chatbot-footer">
        <button class="chatbot-mic-btn" id="cb-mic-btn" title="Voice Input (Click to speak)">
          <i class="fas fa-microphone"></i>
        </button>
        <input 
          type="text" 
          class="chatbot-input" 
          id="cb-input" 
          placeholder="${KB[currentLang].placeholder}"
          autocomplete="off"
        />
        <button class="chatbot-send-btn" id="cb-send-btn" title="Send Message">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    `;
    document.body.appendChild(chatWindow);

    msgContainer = document.getElementById('cb-messages');
    inputEl = document.getElementById('cb-input');
    sendBtn = document.getElementById('cb-send-btn');
    micBtn = document.getElementById('cb-mic-btn');
    closeBtn = document.getElementById('cb-close-btn');
    chipsContainer = document.getElementById('cb-chips-bar');
    geminiToggleBtn = document.getElementById('cb-gemini-toggle');
    voiceAutoBtn = document.getElementById('cb-voice-auto-btn');
  }

  function bindEvents() {
    triggerBtn.addEventListener('click', toggleChat);
    closeBtn.addEventListener('click', toggleChat);

    // Microphone Voice Input
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        if (isListening) {
          stopListening();
        } else {
          startListening();
        }
      });
    }

    // Auto-Voice Read Aloud Toggle
    if (voiceAutoBtn) {
      voiceAutoBtn.addEventListener('click', () => {
        autoVoice = !autoVoice;
        try { localStorage.setItem('cb_auto_voice', autoVoice); } catch(e) {}
        voiceAutoBtn.classList.toggle('active', autoVoice);
        voiceAutoBtn.querySelector('i').className = `fas ${autoVoice ? 'fa-volume-high' : 'fa-volume-xmark'}`;
        if (!autoVoice) stopSpeaking();
      });
    }

    // Direct language switcher chips
    chatWindow.querySelectorAll('.cb-lang-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        if (lang) {
          stopSpeaking();
          stopListening();
          setLanguage(lang);
          window.dispatchEvent(new CustomEvent('setPortfolioLang', { detail: { lang } }));
        }
      });
    });

    geminiToggleBtn.addEventListener('click', () => {
      geminiMode = !geminiMode;
      try { localStorage.setItem('cb_gemini_mode', geminiMode); } catch(e) {}
      updateHeaderStatus();
      const statusMsg = geminiMode 
        ? "⚡ <strong>Gemini Live AI Mode enabled!</strong> The assistant now uses Google Gemini with conversation memory."
        : "⚡ <strong>Instant Knowledge Mode enabled!</strong> Ultra-fast local replies.";
      addBotMessage(statusMsg, statusMsg, 'system', false);
    });

    sendBtn.addEventListener('click', handleSend);
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });

    // Listen for language changes from main portfolio toggle
    window.addEventListener('languageChanged', (e) => {
      if (e.detail && e.detail.lang && e.detail.lang !== currentLang) {
        setLanguage(e.detail.lang);
      }
    });

    // Stop speaking immediately if user toggles off main audio button
    document.addEventListener('click', (e) => {
      const musicBtn = e.target && e.target.closest && e.target.closest('#btn-music-toggle');
      if (musicBtn) {
        setTimeout(() => {
          if (window.__audioOn === false) {
            stopSpeaking();
          }
        }, 50);
      }
    });
  }

  function pauseBackgroundAudio() {
    // 1. Turn off 3D portfolio audio state
    window.__audioOn = false;
    if (typeof window.__setPlaying === 'function') {
      try { window.__setPlaying(false); } catch(e) {}
    }
    if (typeof window.__stopSceneAudio === 'function') {
      try { window.__stopSceneAudio(); } catch(e) {}
    }
    // 2. Pause any background HTML audio elements
    document.querySelectorAll('audio').forEach(a => {
      try { 
        a.pause(); 
        a.currentTime = 0; 
      } catch(e) {}
    });
    // 3. Cancel any 3D scene robot speech narration
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch(e) {}
    }
    // 4. Update music toggle button in UI to show AUDIO OFF
    const musicBtn = document.getElementById('btn-music-toggle');
    if (musicBtn) {
      musicBtn.classList.remove('playing');
      musicBtn.innerHTML = '<i class="fas fa-volume-xmark" style="margin-right:6px"></i>AUDIO OFF';
    }
  }

  function toggleChat() {
    chatWindow.classList.toggle('open');
    triggerBtn.classList.toggle('active');
    if (chatWindow.classList.contains('open')) {
      pauseBackgroundAudio();
      inputEl.focus();
    } else {
      stopSpeaking();
      stopListening();
    }
  }

  function updateHeaderStatus() {
    const subtitleEl = document.getElementById('cb-header-subtitle');
    const toggleText = geminiToggleBtn.querySelector('.toggle-text');
    if (geminiMode) {
      geminiToggleBtn.classList.add('active');
      toggleText.innerText = 'AI ON';
      subtitleEl.innerText = '⚡ Gemini Live AI';
    } else {
      geminiToggleBtn.classList.remove('active');
      toggleText.innerText = 'AI OFF';
      subtitleEl.innerText = '⚡ Instant Mode';
    }
  }

  function setLanguage(lang) {
    if (!KB[lang]) return;
    currentLang = lang;
    try { localStorage.setItem('lang', lang); } catch(e) {}
    conversationHistory.length = 0; // Reset conversation memory so previous language doesn't bleed into new language

    document.getElementById('cb-header-title').innerText = KB[lang].botName;
    inputEl.placeholder = KB[lang].placeholder;

    // Update active chip style
    chatWindow.querySelectorAll('.cb-lang-chip').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    renderChips();
    addBotMessage(KB[lang].greeting, KB[lang].greeting, 'system', false);
  }

  function renderChips() {
    chipsContainer.innerHTML = '';
    const chips = KB[currentLang].chips || [];
    chips.forEach(chip => {
      const btn = document.createElement('button');
      btn.className = 'cb-chip-btn';
      btn.innerText = chip.label;
      btn.addEventListener('click', () => {
        stopSpeaking();
        addUserMessage(chip.query);
        processQuery(chip.query);
      });
      chipsContainer.appendChild(btn);
    });
  }

  function addUserMessage(text) {
    const wrap = document.createElement('div');
    wrap.className = 'chatbot-msg-wrap user';
    const div = document.createElement('div');
    div.className = 'chatbot-msg user';
    div.textContent = text;
    wrap.appendChild(div);
    msgContainer.appendChild(wrap);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    // Record to memory
    conversationHistory.push({ role: 'user', content: text });
  }

  function addBotMessage(html, textToSpeak = '', modelType = '', shouldAutoSpeak = true) {
    const wrap = document.createElement('div');
    wrap.className = 'chatbot-msg-wrap bot';

    const div = document.createElement('div');
    div.className = 'chatbot-msg bot';
    div.innerHTML = html;
    wrap.appendChild(div);

    // Footer with speak button & model badge
    const footer = document.createElement('div');
    footer.className = 'chatbot-msg-footer';

    const plainText = textToSpeak || div.innerText;
    const speakBtn = document.createElement('button');
    speakBtn.className = 'cb-speak-btn';
    speakBtn.title = 'Read message aloud';
    speakBtn.innerHTML = `<i class="fas fa-volume-high"></i>`;
    speakBtn.addEventListener('click', () => toggleSpeak(plainText, speakBtn));
    footer.appendChild(speakBtn);

    const modelTag = document.createElement('span');
    modelTag.className = 'cb-model-tag';
    if (modelType === 'gemini') {
      modelTag.innerText = '⚡ Gemini 3.5 Flash';
    } else if (modelType === 'offline') {
      modelTag.innerText = '⚡ Instant Knowledge';
    }
    footer.appendChild(modelTag);

    wrap.appendChild(footer);
    msgContainer.appendChild(wrap);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    // Record response to memory
    if (plainText && modelType !== 'system') {
      conversationHistory.push({ role: 'assistant', content: plainText });
    }

    // Auto-Speak if enabled and chat is open
    if (autoVoice && shouldAutoSpeak && plainText) {
      setTimeout(() => {
        if (autoVoice && chatWindow && chatWindow.classList.contains('open')) {
          toggleSpeak(plainText, speakBtn);
        }
      }, 150);
    }
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
    stopSpeaking();
    stopListening();
    const query = inputEl.value.trim();
    if (!query) return;

    addUserMessage(query);
    inputEl.value = '';
    processQuery(query);
  }

  function cleanAiResponse(text) {
    if (!text) return '';
    return text
      // Strip artificial terminal/sci-fi filler prefixes
      .replace(/^[\s\r\n]*(\*+)?(system initialized|connection established|initializing|access granted|protocol online|status: online)[^\n]*\n*/gim, '')
      // Strip meta remarks about typos or cutoffs
      .replace(/^hello! [^\n]*looks like your message got cut off[^\n]*\n*/gim, '')
      // Strip leading blank lines
      .replace(/^\s*[\r\n]+/g, '')
      .trim();
  }

  async function processQuery(query) {
    pauseBackgroundAudio();
    showTyping();

    // 1. If Gemini mode is ON, attempt server call with memory history
    if (geminiMode) {
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            message: query, 
            lang: currentLang,
            history: conversationHistory.slice(-6)
          })
        });

        if (res.ok) {
          const data = await res.json();
          if (data.success && data.reply) {
            hideTyping();
            const cleanReply = cleanAiResponse(data.reply);
            const formattedHtml = parseMarkdown(cleanReply);
            addBotMessage(formattedHtml, cleanReply, 'gemini', true);
            return;
          }
        }
      } catch (err) {
        console.warn('Gemini live request failed, using instant offline engine:', err);
      }
    }

    // 2. Fallback to offline Knowledge Base engine
    setTimeout(() => {
      hideTyping();
      const reply = findAnswer(query);
      addBotMessage(reply, '', 'offline', true);
    }, 350);
  }

  function parseMarkdown(md) {
    if (!md) return '';
    let html = md
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Normalize bullets missing space e.g. "*Title" -> "* Title"
      .replace(/^(\s*)\*([a-zA-Z0-9\u0D00-\u0D7F\u0900-\u097F])/gm, '$1* $2')
      // Headers
      .replace(/^### (.*$)/gim, '<div class="cb-heading h3">$1</div>')
      .replace(/^## (.*$)/gim, '<div class="cb-heading h2">$1</div>')
      .replace(/^# (.*$)/gim, '<div class="cb-heading h1">$1</div>')
      // Code blocks
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Bullet items with bold prefixes (runs before italic to avoid eating bullets)
      .replace(/^\s*[-*]\s+\*\*(.*?)\*\*:?\s*(.*)$/gim, '<div class="cb-list-item"><strong>$1:</strong> $2</div>')
      .replace(/^\s*[-*]\s+(.*)$/gim, '<div class="cb-list-item">• $1</div>')
      // Numbered list items
      .replace(/^\s*(\d+)\.\s+\*\*(.*?)\*\*:?\s*(.*)$/gim, '<div class="cb-list-item"><strong>$1. $2:</strong> $3</div>')
      .replace(/^\s*(\d+)\.\s+(.*)$/gim, '<div class="cb-list-item">$1. $2</div>')
      // Bold & Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[^\*])\*([^\*\n\r]+)\*([^\*]|$)/g, '$1<em>$2</em>$3')
      // Markdown links: [text](url)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, '<a href="$2" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> $1</a>')
      .replace(/\n\n/g, '<br>')
      .replace(/\n/g, '<br>');

    // Clean multiple <br> inside list items
    html = html.replace(/(<\/div>)<br>/g, '$1');

    // Make standalone URLs clickable with buttons if not already linked
    html = html.replace(/(^|[^"'>])(https?:\/\/[^\s<)]+)/g, '$1<a href="$2" target="_blank" class="chatbot-action-link"><i class="fas fa-external-link-alt"></i> $2</a>');

    // Add WhatsApp & Call buttons if contact or hire query
    if (/phone|call|email|contact|hire|വാട്ട്സ്ആപ്പ്|ഫോൺ|ഇമെയിൽ|संपर्क|फोन/i.test(html) && !html.includes('whatsapp')) {
      html += `<div class="chatbot-action-links" style="margin-top:10px;">
        <a href="https://wa.me/917902207027?text=Hi%20Akhil,%20I%20saw%20your%20portfolio" target="_blank" class="chatbot-action-link whatsapp"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        <a href="tel:+917902207027" class="chatbot-action-link"><i class="fas fa-phone"></i> +91 79022 07027</a>
        <a href="mailto:akhilmeleppura@gmail.com" class="chatbot-action-link"><i class="fas fa-envelope"></i> Email</a>
      </div>`;
    }

    return html;
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

    // Follow-up details request
    if (text.includes('detail') || text.includes('more') || text.includes('വിശദ') || text.includes('കൂടുതൽ') || text.includes('വിവര') || text.includes('और') || text.includes('विवरण')) {
      // Check last discussed subject from conversation history
      const lastUser = conversationHistory.slice(-2)[0]?.content?.toLowerCase() || '';
      if (lastUser.includes('project') || lastUser.includes('ak-mart') || lastUser.includes('challeng')) {
        return dict.projects;
      }
      if (lastUser.includes('experience') || lastUser.includes('work')) {
        return dict.experience;
      }
      if (lastUser.includes('skill') || lastUser.includes('tech')) {
        return dict.skills;
      }
      return dict.projects;
    }

    // Experience / Companies
    if (text.includes('experience') || text.includes('work') || text.includes('compan') || text.includes('pixelpo') || text.includes('stackcue') || text.includes('commerce9') || text.includes('പരിചയം') || text.includes('കമ്പനി') || text.includes('വർഷ') || text.includes('अनुभव') || text.includes('कंपनी') || text.includes('काम')) {
      return dict.experience;
    }

    // Projects / Works / Challenges
    if (text.includes('project') || text.includes('challeng') || text.includes('ak-mart') || text.includes('minimart') || text.includes('mini mart') || text.includes('admin') || text.includes('dodelivery') || text.includes('store9') || text.includes('tekneka') || text.includes('പ്രൊജക്റ്റ്') || text.includes('ചെയ്തത്') || text.includes('വർക്ക്') || text.includes('प्रोजेक्ट') || text.includes('परियोजना')) {
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

    // Greetings
    if (/\b(hi|hello|hey)\b/i.test(text) || text.includes('നമസ്കാരം') || text.includes('ഹലോ') || text.includes('സുഖമാണോ') || text.includes('नमस्ते') || text.includes('प्रणाम')) {
      return lang === 'en' 
        ? "Hello! How can I assist you with Akhil S's portfolio today? Feel free to speak or type!" 
        : (lang === 'ml' 
            ? "നമസ്കാരം! അഖിലിന്റെ പ്രൊഫഷണൽ വിവരങ്ങളെക്കുറിച്ച് എന്താണ് അറിയേണ്ടത്? സംസാരിക്കുകയോ ടൈപ്പ് ചെയ്യുകയോ ചെയ്യാം!" 
            : "नमस्ते! मैं अखिल एस के पोर्टफोलियो के बारे में आपकी क्या मदद कर सकता हूँ? आप बोल भी सकते हैं!");
    }

    return dict.default;
  }

  function stopSpeaking() {
    currentSpeechSessionId++; // Invalidate and abort active speech session immediately
    if ('speechSynthesis' in window) {
      try { 
        window.speechSynthesis.cancel(); 
      } catch(e) {}
    }
    clearInterval(speechKeepAliveInterval);
    speechKeepAliveInterval = null;
    document.querySelectorAll('.cb-speak-btn.speaking').forEach(b => b.classList.remove('speaking'));
  }

  function toggleSpeak(text, btn) {
    if (!('speechSynthesis' in window)) return;

    if (btn && btn.classList.contains('speaking')) {
      stopSpeaking();
      return;
    }

    stopSpeaking();
    unlockAudio();
    pauseBackgroundAudio();

    const clean = prepareSpeechText(text);
    if (!clean) return;

    const sentences = splitIntoSentences(clean);
    if (sentences.length === 0) return;

    // Detect language strictly from text unicode or active currentLang
    const isMalayalam = /[\u0D00-\u0D7F]/.test(clean) || currentLang === 'ml';
    const isHindi = /[\u0900-\u097F]/.test(clean) || currentLang === 'hi';

    const voices = window.speechSynthesis.getVoices() || [];
    let chosenVoice = null;
    let targetLang = 'en-IN';

    if (isMalayalam) {
      targetLang = 'ml-IN';
      // Search strictly for Malayalam voice
      chosenVoice = voices.find(v => v.lang && (v.lang.toLowerCase().startsWith('ml') || v.name.toLowerCase().includes('malayalam')));
    } else if (isHindi) {
      targetLang = 'hi-IN';
      // Search strictly for Hindi voice
      chosenVoice = voices.find(v => v.lang && (v.lang.toLowerCase().startsWith('hi') || v.name.toLowerCase().includes('hindi')));
    } else {
      targetLang = 'en-IN';
      chosenVoice = voices.find(v => v.lang === 'en-IN') 
                 || voices.find(v => v.lang.startsWith('en-US')) 
                 || voices.find(v => v.lang.startsWith('en'));
    }

    if (btn) btn.classList.add('speaking');

    // Keep Chrome speech synthesis alive for long texts
    speechKeepAliveInterval = setInterval(() => {
      if ('speechSynthesis' in window && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      } else {
        clearInterval(speechKeepAliveInterval);
      }
    }, 10000);

    const activeSessionId = currentSpeechSessionId;
    let currentIndex = 0;

    function speakNext() {
      // Abort immediately if session was cancelled or closed
      if (activeSessionId !== currentSpeechSessionId) return;

      if (currentIndex >= sentences.length) {
        stopSpeaking();
        return;
      }

      const sentenceText = sentences[currentIndex++];
      const utter = new SpeechSynthesisUtterance(sentenceText);
      utter.rate = isMalayalam ? 0.95 : (isHindi ? 0.98 : 1.02);
      utter.pitch = 1.0;

      if (chosenVoice) {
        utter.voice = chosenVoice;
        utter.lang = chosenVoice.lang;
      } else {
        // If no offline Malayalam or Hindi voice exists, NEVER assign an English voice!
        // Leaving utter.voice null and setting utter.lang lets Chrome/Edge use its native online language TTS
        utter.lang = targetLang;
      }

      utter.onend = () => {
        // Abort if session ended or was cancelled
        if (activeSessionId !== currentSpeechSessionId) return;
        speakNext();
      };

      utter.onerror = (e) => {
        // If error was caused by cancel or session aborted, DO NOT advance to next sentence!
        if (activeSessionId !== currentSpeechSessionId) return;
        if (e && (e.error === 'canceled' || e.error === 'interrupted')) return;
        console.warn('Utterance error:', e);
        speakNext();
      };

      window._activeUtterance = utter; // Keep reference to prevent GC bug in Chrome
      try {
        window.speechSynthesis.speak(utter);
      } catch(err) {
        console.warn('SpeechSynthesis error:', err);
        stopSpeaking();
      }
    }

    speakNext();
  }

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
