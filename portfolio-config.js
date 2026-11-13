/**
 * Portfolio Configuration & Content File
 * 
 * You can easily customize any text, links, projects, skills, and details
 * in this file without modifying the core 3D application code!
 */
if (typeof window === 'undefined') {
  global.window = {};
}
window.PORTFOLIO_CONFIG = {
  "name": "Akhil S",
  "title": "Akhil S — Interactive 3D Portfolio",
  "role": "Software Developer & Computer Science Engineer",
  "defaultLang": "en",
  "hn": [
    {
      "id": "origin",
      "label": "01",
      "title": "About Me",
      "verb": "awakens",
      "accent": "#00f0ff",
      "clips": [
        "Waving",
        "Pointing Forward"
      ],
      "contentSide": "left",
      "line": "Welcome! I am your virtual assistant. Welcome to Akhil S's interactive 3D portfolio. Akhil is a passionate Software Developer specializing in full-stack engineering, cloud architecture, and modern scalable solutions.",
      "desc": "Software Developer & Computer Science Engineer",
      "sparkles": {
        "count": 35,
        "speed": 0.08,
        "size": 0.6
      },
      "fogRange": [
        8,
        25
      ],
      "floor": {
        "roughness": 0.2,
        "metalness": 0.8
      },
      "lighting": {
        "ambient": 0.6,
        "rim": 6
      },
      "modelPos": {
        "x": 0.35,
        "y": 0,
        "z": 0
      },
      "modelRot": {
        "y": -0.2
      },
      "shots": [
        {
          "t": 0,
          "orbit": -540,
          "dist": 9.5,
          "height": 1.5,
          "aim": 0,
          "fov": 48,
          "pan": 0
        },
        {
          "t": 2,
          "orbit": -340,
          "dist": 5.5,
          "height": 0.7,
          "aim": 0.16,
          "fov": 38,
          "pan": -0.18
        },
        {
          "t": 4.2,
          "orbit": -160,
          "dist": 3.2,
          "height": 0.28,
          "aim": 0.23,
          "fov": 29,
          "pan": -0.34
        },
        {
          "t": 6.5,
          "orbit": 0,
          "dist": 3,
          "height": 0.15,
          "aim": 0.2,
          "fov": 30,
          "pan": -0.45
        }
      ],
      "details": {
        "p1": "I am a Software Developer and Computer Science Engineer with a strong focus on building high-performance web applications, distributed systems, and intelligent digital experiences. I thrive on architecting clean, maintainable, and scalable software that solves meaningful problems.",
        "p2": "My expertise spans the modern stack: from responsive web interfaces and cross-platform applications to robust backend microservices, cloud deployments, and automated pipelines. In my free time, I enjoy exploring emerging technologies, competitive programming, and continuous learning.",
        "stats": [
          {
            "label": "Location",
            "value": "Global / Remote",
            "icon": "fas fa-map-marker-alt"
          },
          {
            "label": "Focus",
            "value": "Full-Stack & Cloud",
            "icon": "fas fa-code"
          },
          {
            "label": "Studies",
            "value": "B.S. Computer Science",
            "icon": "fas fa-university"
          }
        ]
      }
    },
    {
      "id": "experience",
      "label": "02",
      "title": "Experience",
      "verb": "engineers",
      "accent": "#ff007f",
      "clips": [
        "Pointing Forward",
        "Salute"
      ],
      "contentSide": "right",
      "line": "Explore Akhil's professional journey delivering scalable software architectures, robust APIs, and intuitive user experiences.",
      "desc": "Engineering scalable web applications, microservices, and distributed cloud systems.",
      "sparkles": {
        "count": 40,
        "speed": 0.08,
        "size": 0.5
      },
      "fogRange": [
        4,
        15
      ],
      "floor": {
        "roughness": 0.6,
        "metalness": 0.2
      },
      "lighting": {
        "ambient": 0.3,
        "rim": 11
      },
      "modelPos": {
        "x": -0.4,
        "y": 0,
        "z": -0.2
      },
      "modelRot": {
        "y": 0.35
      },
      "shots": [
        {
          "t": 0,
          "orbit": -248,
          "dist": 2.8,
          "height": 0.15,
          "aim": 0.25,
          "fov": 32,
          "pan": 0.45
        },
        {
          "t": 2.5,
          "orbit": -113,
          "dist": 3.2,
          "height": 0.1,
          "aim": 0.2,
          "fov": 30,
          "pan": 0.45
        },
        {
          "t": 5,
          "orbit": 22,
          "dist": 2.9,
          "height": 0.08,
          "aim": 0.18,
          "fov": 29,
          "pan": 0.45
        }
      ],
      "details": {
        "summary": "Full-stack development of enterprise web and cloud applications, focusing on scalable architecture, clean code, security best practices, and continuous delivery.",
        "role": "Software Developer",
        "company": "Software Engineering & Cloud Solutions",
        "date": "2024 — Present",
        "bulletsTitle": "Key Contributions & Responsibilities",
        "bullets": [
          "Architected and deployed scalable full-stack web applications and microservices with modern frameworks.",
          "Implemented robust authentication, token-based session security, role-based access control, and rate limiting.",
          "Designed high-performance REST and GraphQL APIs backed by relational and NoSQL databases.",
          "Streamlined continuous integration and automated deployment pipelines (CI/CD) on cloud infrastructure."
        ],
        "stack": [
          "React / TypeScript",
          "Node.js",
          "Python",
          "Docker",
          "PostgreSQL",
          "AWS / Cloud",
          "CI/CD"
        ]
      }
    },
    {
      "id": "skills",
      "label": "03",
      "title": "Skills",
      "verb": "architects",
      "accent": "#7000ff",
      "clips": [
        "Arm Stretching",
        "Salute"
      ],
      "contentSide": "left",
      "line": "Akhil commands modern engineering tools. From dynamic UI frameworks and reactive state to microservices, containerization, and cloud deployment.",
      "desc": "Modern technology stack spanning frontend, backend, cloud, and databases.",
      "sparkles": {
        "count": 45,
        "speed": 0.08,
        "size": 0.6
      },
      "fogRange": [
        6,
        18
      ],
      "floor": {
        "roughness": 0.3,
        "metalness": 0.6
      },
      "lighting": {
        "ambient": 0.45,
        "rim": 7
      },
      "modelPos": {
        "x": 0.35,
        "y": 0,
        "z": 0
      },
      "modelRot": {
        "y": -0.3
      },
      "shots": [
        {
          "t": 0,
          "orbit": -250,
          "dist": 4,
          "height": -0.15,
          "aim": 0.2,
          "fov": 38,
          "pan": -0.45
        },
        {
          "t": 3,
          "orbit": -115,
          "dist": 3.6,
          "height": 0.05,
          "aim": 0.22,
          "fov": 34,
          "pan": -0.45
        },
        {
          "t": 6,
          "orbit": 20,
          "dist": 3.3,
          "height": 0.12,
          "aim": 0.18,
          "fov": 32,
          "pan": -0.45
        }
      ],
      "details": {
        "frontend": [
          "React",
          "TypeScript",
          "Next.js",
          "JavaScript (ES6+)",
          "Tailwind CSS",
          "HTML5 / CSS3",
          "Three.js / WebGL"
        ],
        "backend": [
          "Node.js / Express",
          "Python / FastAPI",
          "Java / Spring",
          "Go",
          "RESTful APIs",
          "GraphQL",
          "Microservices"
        ],
        "cloudDbSec": [
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Docker",
          "AWS",
          "Git & GitHub",
          "CI/CD Actions"
        ]
      }
    },
    {
      "id": "projects",
      "label": "04",
      "title": "Projects",
      "verb": "deploys",
      "accent": "#00f5a0",
      "clips": [
        "Standing Pointing",
        "Pointing Forward"
      ],
      "contentSide": "right",
      "line": "Here is a selection of technical projects, spanning cloud microservices, AI intelligence pipelines, mobile experiences, and high-performance engines.",
      "desc": "Curated portfolio of distributed systems, AI integrations, and responsive applications.",
      "sparkles": {
        "count": 50,
        "speed": 0.08,
        "size": 0.5
      },
      "fogRange": [
        3,
        14
      ],
      "floor": {
        "roughness": 0.15,
        "metalness": 0.9
      },
      "lighting": {
        "ambient": 0.25,
        "rim": 12
      },
      "modelPos": {
        "x": -0.35,
        "y": 0,
        "z": -0.15
      },
      "modelRot": {
        "y": 0.35
      },
      "shots": [
        {
          "t": 0,
          "orbit": 100,
          "dist": 2.7,
          "height": 0.22,
          "aim": 0.18,
          "fov": 27,
          "pan": 0.45
        },
        {
          "t": 1.5,
          "orbit": 50,
          "dist": 2.5,
          "height": 0.15,
          "aim": 0.14,
          "fov": 26,
          "pan": 0.45
        },
        {
          "t": 3.5,
          "orbit": 0,
          "dist": 2.3,
          "height": 0.05,
          "aim": 0.1,
          "fov": 25,
          "pan": 0.45
        },
        {
          "t": 5.5,
          "orbit": -46,
          "dist": 2.5,
          "height": 0.08,
          "aim": 0.06,
          "fov": 26,
          "pan": 0.45
        }
      ],
      "details": {
        "projectsList": [
          {
            "title": "Cloud Distributed Microservices Platform",
            "desc": "High-throughput distributed backend with API gateway, event-driven message queuing, auto-scaling, and telemetry monitoring.",
            "tags": [
              "Distributed Systems",
              "Docker",
              "Node.js",
              "Redis"
            ],
            "img": "./img/project-cloud.svg",
            "link": "https://github.com/",
            "color": "#78ddff"
          },
          {
            "title": "Autonomous AI Agent & Neural Engine",
            "desc": "Intelligent orchestration pipeline featuring retrieval-augmented generation (RAG), vector similarity search, and automated task execution.",
            "tags": [
              "AI / ML",
              "Python",
              "LLMs",
              "Vector DB"
            ],
            "img": "./img/project-ai.svg",
            "link": "https://github.com/",
            "color": "#ff7eac"
          },
          {
            "title": "Cross-Platform Mobile & Web Ecosystem",
            "desc": "Responsive, offline-first application with real-time data synchronization, biometric authentication, and sleek interactive UI.",
            "tags": [
              "React Native",
              "TypeScript",
              "Tailwind",
              "Firebase"
            ],
            "img": "./img/project-app.svg",
            "link": "https://github.com/",
            "color": "#00f5a0"
          },
          {
            "title": "High-Performance Real-Time Engine",
            "desc": "Low-latency processing core with concurrent worker threads, memory optimization, and dynamic metrics visualization.",
            "tags": [
              "C++ / Systems",
              "Low Latency",
              "Algorithms",
              "Concurrency"
            ],
            "img": "./img/project-systems.svg",
            "link": "https://github.com/",
            "color": "#ffb703"
          }
        ]
      }
    },
    {
      "id": "certs",
      "label": "05",
      "title": "Certifications",
      "verb": "certifies",
      "accent": "#ffb703",
      "clips": [
        "Salute",
        "Pointing Forward"
      ],
      "contentSide": "left",
      "line": "Dedicated to technical excellence, continuous growth, and industry best practices across cloud platforms and modern software design.",
      "desc": "Continuous technical education in cloud infrastructure, cybersecurity, and software architecture.",
      "sparkles": {
        "count": 40,
        "speed": 0.08,
        "size": 0.6
      },
      "fogRange": [
        7,
        22
      ],
      "floor": {
        "roughness": 0.4,
        "metalness": 0.7
      },
      "lighting": {
        "ambient": 0.7,
        "rim": 8
      },
      "modelPos": {
        "x": 0.45,
        "y": 0,
        "z": 0
      },
      "modelRot": {
        "y": -0.45
      },
      "shots": [
        {
          "t": 0,
          "orbit": 252,
          "dist": 2.5,
          "height": 0.2,
          "aim": 0.28,
          "fov": 28,
          "pan": -0.45
        },
        {
          "t": 2,
          "orbit": 117,
          "dist": 2.2,
          "height": 0.15,
          "aim": 0.22,
          "fov": 26,
          "pan": -0.45
        },
        {
          "t": 4,
          "orbit": -18,
          "dist": 2.6,
          "height": 0.1,
          "aim": 0.18,
          "fov": 28,
          "pan": -0.45
        }
      ],
      "details": {
        "certsList": [
          {
            "title": "Cloud Architecture & Solutions",
            "icon": "fab fa-aws",
            "link": "https://github.com/"
          },
          {
            "title": "Full-Stack Software Engineering",
            "icon": "fas fa-code",
            "link": "https://github.com/"
          },
          {
            "title": "DevOps & Containerized Microservices",
            "icon": "fab fa-docker",
            "link": "https://github.com/"
          },
          {
            "title": "Cybersecurity & Secure Software Lifecycle",
            "icon": "fas fa-shield-alt",
            "link": "https://github.com/"
          }
        ],
        "badgesList": [
          {
            "title": "Advanced Problem Solving",
            "icon": "fas fa-trophy",
            "link": "https://github.com/"
          },
          {
            "title": "Web Application Security",
            "icon": "fas fa-shield-alt",
            "link": "https://github.com/"
          },
          {
            "title": "Cloud Infrastructure Practitioner",
            "icon": "fas fa-cloud",
            "link": "https://github.com/"
          }
        ]
      }
    },
    {
      "id": "contact",
      "label": "06",
      "title": "Contact",
      "verb": "connects",
      "accent": "#00f0ff",
      "clips": [
        "Waving",
        "Salute"
      ],
      "contentSide": "right",
      "line": "If you would like to collaborate on an innovative project, discuss software engineering roles, or get in touch, reach out anytime!",
      "desc": "Open for full-time engineering opportunities, collaborations, and technical consulting.",
      "sparkles": {
        "count": 35,
        "speed": 0.08,
        "size": 0.6
      },
      "fogRange": [
        9,
        30
      ],
      "floor": {
        "roughness": 0.3,
        "metalness": 0.5
      },
      "lighting": {
        "ambient": 0.65,
        "rim": 9
      },
      "modelPos": {
        "x": -0.3,
        "y": 0,
        "z": 0.25
      },
      "modelRot": {
        "y": 0.3
      },
      "shots": [
        {
          "t": 0,
          "orbit": -270,
          "dist": 2.2,
          "height": 0.4,
          "aim": 0.38,
          "fov": 24,
          "pan": 0.45
        },
        {
          "t": 1.5,
          "orbit": -190,
          "dist": 2,
          "height": 0.45,
          "aim": 0.4,
          "fov": 22,
          "pan": 0.45
        },
        {
          "t": 3.5,
          "orbit": -100,
          "dist": 3.2,
          "height": 0.1,
          "aim": 0.18,
          "fov": 32,
          "pan": 0.45
        },
        {
          "t": 6,
          "orbit": 0,
          "dist": 3.4,
          "height": 0.12,
          "aim": 0.2,
          "fov": 31,
          "pan": 0.45
        }
      ],
      "details": {
        "email": "contact@akhils.dev",
        "socials": [
          {
            "name": "Email",
            "icon": "fas fa-envelope",
            "link": "mailto:contact@akhils.dev"
          },
          {
            "name": "GitHub",
            "icon": "fab fa-github",
            "link": "https://github.com/"
          },
          {
            "name": "LinkedIn",
            "icon": "fab fa-linkedin",
            "link": "https://linkedin.com/"
          },
          {
            "name": "Portfolio",
            "icon": "fas fa-globe",
            "link": "#"
          }
        ]
      }
    }
  ],
  "_g": {
    "en": {
      "nav": [
        "About",
        "Experience",
        "Skills",
        "Projects",
        "Certifications",
        "Contact"
      ],
      "listen": "▶ Listen",
      "stop": "■ Stop",
      "details": "+ Details",
      "fe": "Frontend & Mobile",
      "be": "Backend & Systems",
      "cloud": "Cloud, DB & DevOps",
      "role": "Role",
      "company": "Company",
      "period": "Period",
      "companyName": "Software Engineering",
      "certsLabel": "Certifications",
      "next": "ES",
      "langTitle": "Cambiar a Español",
      "close": "✕ Close",
      "viewCode": "View Code",
      "viewCred": "View Credential",
      "cyber": "Credentials & Badges",
      "aboutHeading": "About Me"
    },
    "es": {
      "nav": [
        "Sobre mí",
        "Experiencia",
        "Habilidades",
        "Proyectos",
        "Certificaciones",
        "Contacto"
      ],
      "listen": "▶ Escuchar",
      "stop": "■ Detener",
      "details": "+ Detalles",
      "fe": "Frontend & Mobile",
      "be": "Backend & Sistemas",
      "cloud": "Cloud, BD & DevOps",
      "role": "Rol",
      "company": "Empresa",
      "period": "Periodo",
      "companyName": "Ingeniería de Software",
      "certsLabel": "Certificaciones",
      "next": "EN",
      "langTitle": "Switch to English",
      "close": "✕ Cerrar",
      "viewCode": "Ver código",
      "viewCred": "Ver credencial",
      "cyber": "Credenciales & Insignias",
      "aboutHeading": "Sobre mí"
    }
  },
  "p8": {
    "origin": {
      "title": "About",
      "desc": "Software Developer & Computer Science Engineer",
      "details": {
        "p1": "I am a Software Developer and Computer Science Engineer with a strong focus on building high-performance web applications, distributed systems, and intelligent digital experiences. I thrive on architecting clean, maintainable, and scalable software that solves meaningful problems.",
        "p2": "My expertise spans the modern stack: from responsive web interfaces and cross-platform applications to robust backend microservices, cloud deployments, and automated pipelines. In my free time, I enjoy exploring emerging technologies, competitive programming, and continuous learning.",
        "stats": [
          {
            "label": "Location",
            "value": "Global / Remote",
            "icon": "fas fa-map-marker-alt"
          },
          {
            "label": "Focus",
            "value": "Full-Stack & Cloud",
            "icon": "fas fa-code"
          },
          {
            "label": "Studies",
            "value": "B.S. Computer Science",
            "icon": "fas fa-university"
          }
        ]
      }
    },
    "experience": {
      "title": "Experience",
      "desc": "Engineering scalable web applications, microservices, and distributed cloud systems.",
      "details": {
        "summary": "Full-stack development of enterprise web and cloud applications, focusing on scalable architecture, clean code, security best practices, and continuous delivery.",
        "role": "Software Developer",
        "company": "Software Engineering & Cloud Solutions",
        "date": "2024 — Present",
        "bulletsTitle": "Key Contributions & Responsibilities",
        "bullets": [
          "Architected and deployed scalable full-stack web applications and microservices with modern frameworks.",
          "Implemented robust authentication, token-based session security, role-based access control, and rate limiting.",
          "Designed high-performance REST and GraphQL APIs backed by relational and NoSQL databases.",
          "Streamlined continuous integration and automated deployment pipelines (CI/CD) on cloud infrastructure."
        ]
      }
    },
    "skills": {
      "title": "Skills",
      "desc": "Modern technology stack spanning frontend, backend, cloud, and databases.",
      "details": {
        "backend": [
          "Node.js / Express",
          "Python / FastAPI",
          "Java / Spring",
          "Go",
          "RESTful APIs",
          "GraphQL",
          "Microservices"
        ]
      }
    },
    "projects": {
      "title": "Projects",
      "desc": "Curated portfolio of distributed systems, AI integrations, and responsive applications.",
      "details": {
        "projectsList": [
          {
            "title": "Cloud Distributed Microservices Platform",
            "desc": "High-throughput distributed backend with API gateway, event-driven message queuing, auto-scaling, and telemetry monitoring.",
            "tags": [
              "Distributed Systems",
              "Docker",
              "Node.js",
              "Redis"
            ]
          },
          {
            "title": "Autonomous AI Agent & Neural Engine",
            "desc": "Intelligent orchestration pipeline featuring retrieval-augmented generation (RAG), vector similarity search, and automated task execution.",
            "tags": [
              "AI / ML",
              "Python",
              "LLMs",
              "Vector DB"
            ]
          },
          {
            "title": "Cross-Platform Mobile & Web Ecosystem",
            "desc": "Responsive, offline-first application with real-time data synchronization, biometric authentication, and sleek interactive UI.",
            "tags": [
              "React Native",
              "TypeScript",
              "Tailwind",
              "Firebase"
            ]
          },
          {
            "title": "High-Performance Real-Time Engine",
            "desc": "Low-latency processing core with concurrent worker threads, memory optimization, and dynamic metrics visualization.",
            "tags": [
              "C++ / Systems",
              "Low Latency",
              "Algorithms",
              "Concurrency"
            ]
          }
        ]
      }
    },
    "certs": {
      "title": "Certifications",
      "desc": "Continuous technical education in cloud infrastructure, cybersecurity, and software architecture."
    },
    "contact": {
      "title": "Contact",
      "desc": "Open for full-time engineering opportunities, collaborations, and technical consulting."
    }
  }
};
