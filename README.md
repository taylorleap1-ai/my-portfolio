# Taylor Leap Portfolio Website

A modern, responsive portfolio website showcasing 3D modeling, VFX, motion design, and concept art work.

**Live Site:** https://taylorleap1-ai.github.io/my-portfolio/

---

## 📁 Project Structure

```
my-portfolio/
├── index.html           # Main homepage
├── 3d.html             # 3D models gallery
├── vfx.html            # VFX video gallery
├── concept.html        # Concept art gallery
├── about.html          # About page
├── assets/
│   ├── images/         
│   │   ├── concept-art/    # Gallery images
│   │   ├── logos/          # Software logos for skills section
│   │   └── Face.png        # Hero image
│   ├── models/             # 3D .glb files
│   ├── fonts/              # Custom fonts
│   └── documents/
│       └── Resume/         # PDF resume
└── README.md
```

---

## 🚀 Deployment

The site is hosted on **GitHub Pages** and auto-deploys when you push to the `main` branch.

### To Deploy Changes:
```powershell
cd C:\Users\taylo\Desktop\my-portfolio
git add .
git commit -m "Your commit message here"
git push origin main
```

Wait 2-3 minutes for GitHub Pages to rebuild. Hard refresh your browser with `Ctrl + Shift + R`.

---

## ✏️ How to Update Content

### **1. Update Contact Information**

**Email** - Edit `index.html`:
```html
<!-- Find line ~1885 -->
<a href="mailto:taylorleap1@gmail.com">taylorleap1@gmail.com</a>
```

**Phone** - Edit `index.html`:
```html
<!-- Find line ~1886 -->
<a href="tel:+19714193914">(971) 419-3914</a>
```

**Social Links** - Edit `index.html`:
```html
<!-- Find lines ~1862-1871 -->
<a href="https://www.linkedin.com/in/taylor-leap-472130341">
<a href="https://www.instagram.com/taylorleap_">
```

---

### **2. Replace Hero Image (Face.png)**

The hero image is the main portrait that appears on the homepage.

**Steps:**
1. Prepare your new image:
   - **Recommended size:** 400px wide × 728px tall (or similar tall portrait ratio)
   - **File format:** PNG with transparent background works best
   - **File name:** Keep as `Face.png` OR use a new name
   
2. Replace the file:
   - Navigate to `assets/images/`
   - Replace `Face.png` with your new image
   
3. If you use a different filename, update `index.html` (line ~1471):
   ```html
   <img src="assets/images/YOUR-NEW-IMAGE.png" alt="Taylor Leap - 3D Modeler, VFX Artist, Motion Designer" class="hero-image">
   ```

4. Also update the preload tag in `index.html` (line ~35):
   ```html
   <link rel="preload" href="assets/images/YOUR-NEW-IMAGE.png" as="image">
   ```

**Tips:**
- The image automatically scales, so use high resolution (2x or 3x the display size)
- PNG format recommended for best quality and transparency
- Image appears on a red background, so transparent edges look cleanest

---

### **3. Add Concept Art Images**

1. Add image to `assets/images/concept-art/`
2. Edit `concept.html` and add a new card:

```html
<div class="concept-card" onclick="openLightbox('assets/images/concept-art/your-image.jpg')">
    <img src="assets/images/concept-art/your-image.jpg" 
         alt="Description" 
         class="concept-image" 
         loading="lazy" 
         width="350" 
         height="350">
</div>
```

---

### **3. Add Concept Art Images**

1. Add image to `assets/images/concept-art/`
2. Edit `concept.html` and add a new card:

```html
<div class="concept-card" onclick="openLightbox('assets/images/concept-art/your-image.jpg')">
    <img src="assets/images/concept-art/your-image.jpg" 
         alt="Description" 
         class="concept-image" 
         loading="lazy" 
         width="350" 
         height="350">
</div>
```

---

### **4. Add 3D Models**

1. Export your model as `.glb` format
2. Add file to `assets/models/`
3. Replace a placeholder card in `3d.html`:

```html
<div class="model-card" onclick="openModel('Model Name', 'assets/models/your-model.glb')">
    <div class="model-preview">
        <div class="loading-spinner"></div>
        <div class="preview-placeholder">Click to View</div>
        <div class="preview-thumbnail">
            <model-viewer src="assets/models/your-model.glb" 
                         auto-rotate 
                         camera-controls 
                         touch-action="none" 
                         disable-zoom 
                         loading="lazy">
            </model-viewer>
        </div>
    </div>
    <h3 class="model-title">Model Name</h3>
</div>
```

---

### **4. Add 3D Models**

1. Export your model as `.glb` format
2. Add file to `assets/models/`
3. Replace a placeholder card in `3d.html`:

```html
<div class="model-card" onclick="openModel('Model Name', 'assets/models/your-model.glb')">
    <div class="model-preview">
        <div class="loading-spinner"></div>
        <div class="preview-placeholder">Click to View</div>
        <div class="preview-thumbnail">
            <model-viewer src="assets/models/your-model.glb" 
                         auto-rotate 
                         camera-controls 
                         touch-action="none" 
                         disable-zoom 
                         loading="lazy">
            </model-viewer>
        </div>
    </div>
    <h3 class="model-title">Model Name</h3>
</div>
```

---

### **5. Add VFX Videos**

#### **For YouTube/Vimeo Videos:**
1. Get the embed URL (YouTube: click Share → Embed, copy the `src` URL)
2. Edit `vfx.html` and update a placeholder card:

```html
<div class="vfx-card" onclick="openLightbox('https://www.youtube.com/embed/VIDEO_ID')">
    <img src="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" 
         alt="Video Title" 
         class="vfx-thumbnail" 
         loading="lazy">
    <div class="vfx-info">
        <h3 class="vfx-name">Project Name</h3>
        <p class="vfx-type">Compositing</p>
    </div>
</div>
```

#### **For MP4 Files:**
1. Add video file to `assets/videos/` (create folder if needed)
2. Update card in `vfx.html`:

```html
<div class="vfx-card" onclick="openLightbox('assets/videos/your-video.mp4')">
    <div class="vfx-thumbnail" style="background: linear-gradient(135deg, #242424 0%, #3a3a3a 100%); display: flex; align-items: center; justify-content: center; color: #666; font-size: 1rem;">
        Preview
    </div>
    <div class="vfx-info">
        <h3 class="vfx-name">Project Name</h3>
        <p class="vfx-type">Motion Graphics</p>
    </div>
</div>
```

---

### **5. Add VFX Videos**

#### **For YouTube/Vimeo Videos:**
1. Get the embed URL (YouTube: click Share → Embed, copy the `src` URL)
2. Edit `vfx.html` and update a placeholder card:

```html
<div class="vfx-card" onclick="openLightbox('https://www.youtube.com/embed/VIDEO_ID')">
    <img src="https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg" 
         alt="Video Title" 
         class="vfx-thumbnail" 
         loading="lazy">
    <div class="vfx-info">
        <h3 class="vfx-name">Project Name</h3>
        <p class="vfx-type">Compositing</p>
    </div>
</div>
```

#### **For MP4 Files:**
1. Add video file to `assets/videos/` (create folder if needed)
2. Update card in `vfx.html`:

```html
<div class="vfx-card" onclick="openLightbox('assets/videos/your-video.mp4')">
    <div class="vfx-thumbnail" style="background: linear-gradient(135deg, #242424 0%, #3a3a3a 100%); display: flex; align-items: center; justify-content: center; color: #666; font-size: 1rem;">
        Preview
    </div>
    <div class="vfx-info">
        <h3 class="vfx-name">Project Name</h3>
        <p class="vfx-type">Motion Graphics</p>
    </div>
</div>
```

---

### **6. Update Skills Section**

Edit `index.html` around line ~1520. Each skill has:
- **Logo:** Place in `assets/images/logos/`
- **Name:** Skill name
- **Dots:** Visual proficiency (10 dots = 100%)

```html
<div class="skill-card">
    <img src="assets/images/logos/software-logo.png" alt="Software Name" loading="lazy" width="48" height="48">
    <span class="skill-name">Software Name</span>
    <div class="skill-bar">
        <div class="skill-fill" style="width: 80%">
            <span class="skill-dots">●●●●●●●●○○</span>
        </div>
    </div>
</div>
```

**Proficiency Guide:**
- 10 dots (●●●●●●●●●●) = Expert (100%)
- 8 dots (●●●●●●●●○○) = Advanced (80%)
- 5 dots (●●●●●○○○○○) = Intermediate (50%)
- 3 dots (●●●○○○○○○○) = Beginner (30%)

**Color coding** (automatic):
- Green: 65-100%
- Yellow: 50-64%
- Red: 15-49%

---

### **6. Update Skills Section**

Edit `index.html` around line ~1520. Each skill has:
- **Logo:** Place in `assets/images/logos/`
- **Name:** Skill name
- **Dots:** Visual proficiency (10 dots = 100%)

```html
<div class="skill-card">
    <img src="assets/images/logos/software-logo.png" alt="Software Name" loading="lazy" width="48" height="48">
    <span class="skill-name">Software Name</span>
    <div class="skill-bar">
        <div class="skill-fill" style="width: 80%">
            <span class="skill-dots">●●●●●●●●○○</span>
        </div>
    </div>
</div>
```

**Proficiency Guide:**
- 10 dots (●●●●●●●●●●) = Expert (100%)
- 8 dots (●●●●●●●●○○) = Advanced (80%)
- 5 dots (●●●●●○○○○○) = Intermediate (50%)
- 3 dots (●●●○○○○○○○) = Beginner (30%)

**Color coding** (automatic):
- Green: 65-100%
- Yellow: 50-64%
- Red: 15-49%

---

### **7. Update Resume**

1. Replace file at `assets/documents/Resume/Taylor Leap Resume.pdf`
2. Keep the same filename or update the link in `index.html`:

```html
<!-- Find line ~1420 -->
<a href="assets/documents/Resume/Taylor Leap Resume.pdf" class="resume-btn">RÉSUMÉ</a>
```

---

### **7. Update Resume**

1. Replace file at `assets/documents/Resume/Taylor Leap Resume.pdf`
2. Keep the same filename or update the link in `index.html`:

```html
<!-- Find line ~1420 -->
<a href="assets/documents/Resume/Taylor Leap Resume.pdf" class="resume-btn">RÉSUMÉ</a>
```

---

### **8. Change Demo Reel Video**

Edit `index.html` around line ~1710:

```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

---

## 🎨 Styling & Design

### **Font Sizes (Desktop)**
- Hero Title: `200px` (TAYLOR LEAP)
- Hero Subtitle: `50px` (3D MODELER • VFX ARTIST • MOTION DESIGNER)

To change, edit `index.html` around line ~318:
```css
.hero-title {
    font-size: 200px !important;
}
.hero-subtitle {
    font-size: 50px !important;
}
```

### **Colors**
Main color variables (line ~295):
```css
--dark-bg: #242424;       /* Dark background */
--light-bg: #FBF5F3;      /* Light/cream sections */
--accent-red: #D7263D;    /* Primary accent color */
--text-dark: #242424;     /* Dark text */
--text-light: #FBF5F3;    /* Light text */
```

---

## 🐛 Troubleshooting

### **Changes Not Showing on Live Site**
1. Wait 2-3 minutes after pushing
2. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Try incognito mode
4. Clear browser cache completely

### **Images Not Loading**
- Check file path is correct (case-sensitive!)
- Verify file exists in `assets/` folder
- Ensure pushed to GitHub: `git status` should show nothing

### **3D Models Not Displaying**
- Models must be `.glb` format (not `.fbx`, `.obj`, etc.)
- Keep file size under 10MB for good performance
- Use compression tools if needed

### **Videos Not Playing**
- YouTube embeds: Use `/embed/` URL format
- MP4 files: Ensure file is in repository and under 100MB (GitHub limit)
- For large files, use YouTube/Vimeo instead

---

## 📱 Mobile Optimization

The site is fully responsive. Test on mobile by:
1. Open browser dev tools (`F12`)
2. Click device toolbar icon
3. Select mobile device preset

Mobile breakpoints:
- Tablet: `768px`
- Mobile: `480px`

---

## ⚙️ Form Setup

Contact form uses **Formspree** (ID: `xeoyzzpn`).

To change form endpoint, edit `index.html` line ~1825:
```html
<form action="https://formspree.io/f/xeoyzzpn" method="POST">
```

---

## 📊 Repository Info

- **Repository:** taylorleap1-ai/my-portfolio
- **Branch:** main
- **Deploy:** Automatic on push to main
- **URL:** https://taylorleap1-ai.github.io/my-portfolio/

---

## 🆘 Quick Reference Commands

```powershell
# Check what files changed
git status

# See all changes
git diff

# Deploy changes
git add .
git commit -m "Updated portfolio content"
git push origin main

# Undo last commit (if not pushed yet)
git reset --soft HEAD~1
```

---

## ✅ Pre-Deployment Checklist

Before pushing changes:
- [ ] Test all links work
- [ ] Check images load properly
- [ ] Test contact form submission
- [ ] Verify mobile layout looks good
- [ ] Spell-check all text
- [ ] Ensure resume PDF is up to date

---

**Need Help?** Check the HTML comments in each file for guidance on specific sections.

### Updating Your Resume
1. Replace the PDF in `assets/documents/Resume/`
2. Keep the filename as `Taylor Leap Resume.pdf` (or update all references in HTML files)

## Benefits of This Structure

✅ **Clean separation**: Assets are separated by type (images, fonts, models, documents)
✅ **Easy to find**: Logical folder names make it clear where each asset belongs
✅ **Simple updates**: Add new content without searching through nested folders
✅ **Version control friendly**: Clear structure makes git diffs more readable
✅ **Scalable**: Easy to add new categories as your portfolio grows
