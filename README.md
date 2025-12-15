# TaskMetro Website

A fully responsive, production-ready static website for **TaskMetro** — Bengaluru City Errand Services.

## 🎯 Overview

TaskMetro helps people outside Bengaluru get city tasks done without traveling. Save time, avoid unnecessary travel, and get reliable errand services with transparent pricing and live updates.

## 📁 Project Structure

```
website2/
├── index.html          # Landing page with hero, services, testimonials
├── services.html       # Complete service catalog
├── pricing.html        # Transparent pricing with examples
├── request.html        # Task request form
├── contact.html        # Contact information and quick message form
├── faq.html           # Frequently asked questions
├── terms.html         # Terms of service
├── privacy.html       # Privacy policy
├── 404.html           # Custom 404 page
├── sitemap.xml        # SEO sitemap
├── assets/
│   └── png.png        # Logo (your provided file)
├── css/
│   └── styles.css     # Complete responsive styles
├── js/
│   └── main.js        # Navigation, forms, interactivity
└── README.md          # This file
```

## ✨ Features

### Design & UX
- 🌙 Modern dark theme with professional branding
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible navigation and forms
- 🎨 Consistent color palette and typography
- 🖼️ Logo integration throughout

### Pages & Content
- **Home**: Hero section, how it works, featured services, testimonials, CTA
- **Services**: Government/RTO, Property/Utilities, Medical/Pharma, Courier, Custom tasks
- **Pricing**: Transparent pricing cards with example scenarios
- **Request Task**: Detailed form with mailto integration
- **Contact**: Multiple contact methods (Email, Phone, WhatsApp)
- **FAQs**: 10 comprehensive questions with expandable answers
- **Legal**: Complete Terms of Service and Privacy Policy

### SEO & Performance
- ✅ Meta tags (description, keywords, author)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD) for business info
- ✅ Semantic HTML5
- ✅ Sitemap.xml
- ✅ Custom 404 page
- ✅ Fast loading (no external dependencies)

### Interactive Features
- 📧 Mailto forms for request and contact (no backend needed)
- 🔗 WhatsApp integration
- 📱 Mobile hamburger navigation
- ⚡ Smooth scrolling
- 🎯 Active nav state detection
- 📅 Dynamic copyright year

## 🚀 Getting Started

### Prerequisites
- A web browser
- (Optional) A simple HTTP server for local testing

### Local Development

1. **Clone or download** this repository

2. **Add your logo**: Ensure `assets/png.png` exists

3. **Open locally** (option 1):
   ```bash
   # Just open index.html in your browser
   open index.html
   ```

4. **Or use a local server** (option 2, recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8080
   
   # Then open http://localhost:8080/index.html
   ```

5. **Or use other servers**:
   ```bash
   # Node.js http-server
   npx http-server -p 8080
   
   # PHP
   php -S localhost:8080
   ```

## 🎨 Customization

### Update Contact Details
Edit these files to add real contact information:
- [contact.html](contact.html) — Email, phone, WhatsApp links
- [js/main.js](js/main.js) — Email addresses in forms
- [index.html](index.html) — WhatsApp link in hero section

**Replace:**
- `support@taskmetro.com` → your real email
- `+91-00000-00000` → your real phone number
- `919353522929` → your WhatsApp number (without + or -)

### Adjust Pricing
Edit [pricing.html](pricing.html):
- Modify base fee, runner time, travel costs
- Update example scenarios
- Add/remove pricing cards

### Modify Services
Edit [services.html](services.html):
- Add new service categories
- Update service lists
- Add specific offerings

### Change Colors/Branding
Edit [css/styles.css](css/styles.css) `:root` variables:
```css
:root {
  --bg: #0b0f14;           /* Background */
  --card: #121821;         /* Card backgrounds */
  --primary: #2dd4bf;      /* Primary color */
  --accent: #60a5fa;       /* Links */
  /* ... */
}
```

## 🌐 Deployment

### Option 1: GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Site will be live at `https://yourusername.github.io/repo-name/`

### Option 2: Netlify
1. Drag & drop the `website2` folder to Netlify
2. Or connect GitHub repo
3. Auto-deploys on push

### Option 3: Vercel
```bash
npm i -g vercel
vercel
```

### Option 4: Azure Static Web Apps
1. Use Azure Portal or VS Code extension
2. Connect to GitHub repo
3. Auto-deploys with GitHub Actions

### Option 5: Traditional Hosting
- Upload all files via FTP/SFTP to web hosting
- Ensure `index.html` is in the root directory

## 📋 Pre-Deployment Checklist

- [ ] Logo (`assets/png.png`) is added
- [ ] Update all contact details (email, phone, WhatsApp)
- [ ] Verify pricing is accurate
- [ ] Test all forms (mailto links)
- [ ] Update domain in sitemap.xml
- [ ] Update domain in Open Graph tags
- [ ] Test on mobile, tablet, desktop
- [ ] Check all internal links work
- [ ] Verify 404 page works
- [ ] Test navigation on all pages

## 🔧 Technical Details

- **Framework**: Pure HTML, CSS, JavaScript (no dependencies)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile**: Fully responsive with breakpoints at 720px and 920px
- **Forms**: Mailto-based (can be upgraded to backend later)
- **Performance**: Lightweight (~50KB total)

## 📱 Contact Integration

### Email Forms
Forms use `mailto:` protocol to open user's email client. To upgrade to a backend:
1. Add a form processing service (Formspree, FormSubmit, etc.)
2. Or create a backend API endpoint
3. Update form `action` and `onsubmit` handlers

### WhatsApp Integration
Update the WhatsApp number in:
- [index.html](index.html) — Hero section button
- [contact.html](contact.html) — Contact card
- Structured data in index.html

Format: `https://wa.me/COUNTRYCODE-NUMBER` (e.g., `https://wa.me/919876543210`)

## 📈 SEO Improvements

After deployment:
1. Submit sitemap.xml to Google Search Console
2. Verify structured data with Google Rich Results Test
3. Set up Google Analytics (optional)
4. Create Google My Business listing
5. Get backlinks from directories
6. Add schema markup for reviews/ratings (when you have them)

## 🆘 Support

For TaskMetro business inquiries: support@taskmetro.com

For website technical issues: Check browser console for errors

## 📄 License

© 2025 TaskMetro. All rights reserved.

---

**Built with ❤️ for TaskMetro — Save travel. Get tasks done, remotely.**
