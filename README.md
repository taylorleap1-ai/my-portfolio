# Assets Folder Structure

This folder contains all the organized assets for the Taylor Leap portfolio website.

## Directory Structure

```
assets/
├── images/              # All images
│   ├── concept-art/     # Concept art gallery images
│   ├── logos/           # Software/tool logos
│   ├── Face.png         # Hero profile image
│   └── *.webp, *.png    # Other images
├── fonts/               # Custom fonts
│   ├── CubaoFree2-UltraExpanded.ttf
│   └── Sprite-Graffiti/
├── models/              # 3D model files (.glb)
│   ├── GhostCan.glb
│   ├── TheRenovator.glb
│   └── placeholder*.glb
└── documents/           # PDFs and documents
    └── Resume/
        └── Taylor Leap Resume.pdf
```

## How to Add New Content

### Adding a New Concept Art Image
1. Place your image in `assets/images/concept-art/`
2. Add to `concept.html`:
   ```html
   <div class="concept-card" onclick="openLightbox('assets/images/concept-art/your-image.jpg')">
       <img src="assets/images/concept-art/your-image.jpg" alt="Description" class="concept-image" loading="lazy" width="350" height="350">
   </div>
   ```

### Adding a New 3D Model
1. Place your `.glb` file in `assets/models/`
2. Update the placeholder card in `3d.html`:
   ```html
   <div class="model-card" onclick="openModel('Model Name', 'assets/models/your-model.glb')">
       <model-viewer src="assets/models/your-model.glb" auto-rotate camera-controls></model-viewer>
   </div>
   ```

### Adding a New Software Logo
1. Place your logo image in `assets/images/logos/`
2. Add to the skills section in `index.html`:
   ```html
   <img src="assets/images/logos/your-logo.png" alt="Software Name" loading="lazy" width="48" height="48">
   ```

### Updating Your Resume
1. Replace the PDF in `assets/documents/Resume/`
2. Keep the filename as `Taylor Leap Resume.pdf` (or update all references in HTML files)

## Benefits of This Structure

✅ **Clean separation**: Assets are separated by type (images, fonts, models, documents)
✅ **Easy to find**: Logical folder names make it clear where each asset belongs
✅ **Simple updates**: Add new content without searching through nested folders
✅ **Version control friendly**: Clear structure makes git diffs more readable
✅ **Scalable**: Easy to add new categories as your portfolio grows
