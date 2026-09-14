# Work24x7.ai — Work in Progress Landing Page

A modern, high-converting "Coming Soon" landing page for **[work24x7.ai](https://work24x7.ai)** built with Next.js App Router, React 19, and Tailwind CSS.

---

## 🚀 Features

- **Futuristic AI Aesthetic**: Sleek dark mode palette, ambient glows, responsive background grid, and micro-interactions.
- **Interactive Waitlist**: Form with instant client validation, submission states, and an `/api/waitlist` endpoint.
- **Real-Time Agent Telemetry HUD**: Animated terminal showcasing autonomous multi-agent mesh activity and live uptime counter.
- **Development Roadmap Tracker**: Transparent milestones highlighting progress toward the public beta.
- **Production-Grade SEO**: Configured OpenGraph, Twitter Card, keywords, and metadata for high discoverability and clean link previews.
- **100% Vercel Native**: Zero extra configuration required.

---

## 💻 Local Development

1. Install dependencies (already installed):
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deploying to Vercel

You can deploy this to Vercel using either of the two standard methods below:

### Method A: Direct Deploy via Vercel CLI (Fastest)

Run the following command in your terminal:
```bash
npx vercel
```
- When prompted to set up and deploy, select `Y`.
- Accept the default settings.
- Once the preview is generated, run `npx vercel --prod` to deploy to production.

---

### Method B: Push to GitHub & Connect with Vercel Dashboard

1. Create a new repository on [GitHub](https://github.com/new) called `work24x7`.
2. Push this local repo to your GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/work24x7.git
   git branch -M main
   git push -u origin main
   ```
3. Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New..." > "Project"**.
4. Import your `work24x7` repository and click **Deploy**.

---

## 🔗 Connecting your Domain (`work24x7.ai`)

Once deployed on Vercel:

1. In your Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Type in:
   - `work24x7.ai`
   - `www.work24x7.ai` (Vercel will offer to redirect `www` to the apex domain automatically).
3. Vercel will show the required DNS records. Add them to your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare, Porkbun):
   - **Type**: `A`
   - **Name / Host**: `@`
   - **Value / Points to**: `76.76.21.21`

   - **Type**: `CNAME`
   - **Name / Host**: `www`
   - **Value / Points to**: `cname.vercel-dns.com`

4. Within a few minutes, Vercel will automatically provision a free SSL certificate (HTTPS), and `https://work24x7.ai` will be live!
