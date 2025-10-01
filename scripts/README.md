# Asset Compression Guide

## Quick Start (Automated)

### Prerequisites
Install the required tools:
```bash
# macOS
brew install ffmpeg imagemagick

# Ubuntu/Debian
sudo apt install ffmpeg imagemagick
```

### Run Compression
```bash
./scripts/compress-assets.sh
```

## Manual Alternative (No Dependencies)

If you prefer not to install command-line tools, use these online services:

### Images (Rectangle.png, Rectangle12.png)
1. **TinyPNG** (https://tinypng.com/)
   - Upload your PNG files
   - Download compressed versions
   - Typically reduces size by 60-80%

2. **Squoosh** (https://squoosh.app/)
   - More control over compression settings
   - Side-by-side comparison
   - WebP conversion option (even smaller)

### Video (background hero.mp4)
1. **CloudConvert** (https://cloudconvert.com/mp4-converter)
   - Upload your MP4
   - Set quality to 75-80%
   - Enable "Web Optimized" option

2. **HandBrake** (free desktop app)
   - Download: https://handbrake.fr/
   - Use "Web Optimized" preset
   - Adjust quality slider to 22-25

## Expected Results
- **Rectangle.png**: 25MB → ~2-3MB (88% reduction)
- **Rectangle12.png**: 12MB → ~1-2MB (85% reduction)  
- **background hero.mp4**: 3.9MB → ~1-2MB (50% reduction)

## Next Steps
After compression:
1. Test your site to ensure quality is acceptable
2. Monitor Core Web Vitals improvement
3. Submit sitemap to Google Search Console
4. Set up performance monitoring