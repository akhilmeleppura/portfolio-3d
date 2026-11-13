# Interactive 3D Developer Portfolio

An immersive, futuristic 3D developer portfolio featuring an interactive 3D robot model, cinematic camera movements, real-time lighting and post-processing effects, sound controls, and a slide-out details drawer.

## 🚀 Quick Start

Because this portfolio uses 3D models (`.glb`) and WebGL modules, it needs to be served through a local HTTP server:

### Option 1: Using Node.js (npx)
```bash
npx serve .
```

### Option 2: Using Python
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

---

## ⚙️ Customization

All your portfolio content is cleanly centralized in **`portfolio-config.js`**. You do not need to touch any compiled code or bundle files to personalize your site.

Open [portfolio-config.js](file:///c:/Users/HP/Downloads/akhil%20s/portfolio-config.js) to edit:

- **Name & Title**: `name`, `title`, `role`
- **Default Language**: `defaultLang` (`"en"` or `"es"`)
- **Sections**:
  - **About Me**: Bio paragraphs, key stats (Location, Degree, Focus)
  - **Experience**: Role, company, dates, bullets, tech stack
  - **Skills**: Categorized frontend, backend, and cloud/database skills
  - **Projects**: Project title, description, tags, preview images, GitHub/live links
  - **Certifications**: Professional credentials and badges
  - **Contact**: Email address and social links (GitHub, LinkedIn, Portfolio)

---

## 🌐 Deploying to GitHub Pages

1. Initialize a new Git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Interactive 3D Portfolio"
   ```
2. Create a repository on GitHub (e.g., `username.github.io` or `my-portfolio`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repository settings, go to **Settings > Pages**, set Branch to `main`, and save. Your site is live!

---

## 📁 Project Structure

```
├── index.html              # Main HTML entry point
├── portfolio-config.js     # User configuration (bio, skills, projects, links)
├── assets/
│   ├── index-DcagGn9F.js   # 3D Scene & Application engine
│   └── index-DQPpKdS8.css  # Futuristic styling & animations
├── img/                    # Project thumbnails & preview graphics
├── audio/                  # Background music & sound effects
└── models/                 # 3D assets & animations (GLB)
```
