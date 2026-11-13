# How to Get Your Free `akhil-meleppura.is-a.dev` Domain

Follow these 3 simple steps to claim your free developer domain:

---

### Step 1: Open the `is-a-dev` Registration Repo
1. Go to: **[https://github.com/is-a-dev/register](https://github.com/is-a-dev/register)**
2. In the top-right corner, click **Fork** to copy the repository to your GitHub account (`akhils994`).

---

### Step 2: Add Your Domain File
1. In your forked repository, click into the **`domains/`** folder.
2. Click **"Add file" → "Create new file"**.
3. In the filename box, type:
   ```
   akhil-meleppura.json
   ```
4. Paste this exact JSON content inside the file:
   ```json
   {
     "owner": {
       "username": "akhils994",
       "email": "akhilmeleppura@gmail.com"
     },
     "record": {
       "CNAME": "akhil-portfolio.onrender.com"
     }
   }
   ```
   *(Note: If you deploy on Vercel instead of Render, change `akhil-portfolio.onrender.com` to `cname.vercel-dns.com`)*.

5. Scroll down and click the green button: **"Commit changes"**.

---

### Step 3: Open a Pull Request
1. At the top of your repository, you will see a banner: **"This branch is 1 commit ahead of is-a-dev:main"**.
2. Click **"Contribute" → "Open pull request"**.
3. Title it: `Add akhil-meleppura.is-a.dev`.
4. Click **"Create pull request"**.

---

### What Happens Next?
* The `is-a-dev` automated validation bot will check your JSON file in ~30 seconds.
* Within a few hours, the maintainers merge your PR.
* Your website will be permanently live at:
  **`https://akhil-meleppura.is-a.dev`** with free automatic SSL/HTTPS!

