# 📸 How to Add Your Photos

## Quick Start

1. **Add your photos to this folder** (`/public/photos/`)
2. **Name them**: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
3. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.webp`

## Example Structure

```
public/photos/
├── photo1.jpg    ← Your first photo
├── photo2.jpg    ← Your second photo
├── photo3.jpg    ← Your third photo
├── photo4.jpg    ← Your fourth photo
└── photo5.jpg    ← Your fifth photo
```

## How It Works

- The gallery displays **one photo per day** based on the current date
- Each day will show a different photo from your collection
- The photo selection is consistent - the same photo will appear on the same date

## Adding More or Fewer Photos

If you want to add more photos or use fewer:

1. Add your photos to this folder with sequential names
2. Open `/src/components/Gallery.jsx`
3. Update the `images` array (around line 10) to include your photo filenames

Example:
```javascript
const images = [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/our_vacation.jpg",     // You can use custom names too!
    "/photos/anniversary.png",       // Different formats work!
];
```

## Tips

- **High quality photos** work best (but will be automatically optimized)
- **Landscape orientation** photos typically look better in the gallery
- Keep file sizes reasonable (under 5MB each) for faster loading
- Use meaningful filenames if you want to remember which photo is which

---

**Need help?** Check the Gallery.jsx file for more customization options!
