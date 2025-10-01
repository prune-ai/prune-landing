#!/bin/bash

# File Compression Script for Prune Landing Site
# This script compresses large images and videos for better web performance

echo "🗜️  Starting asset compression..."

# Create backup directory
mkdir -p public/original-assets
echo "📁 Created backup directory"

# Check if ffmpeg is installed (for video compression)
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ ffmpeg not found. Please install it first:"
    echo "   macOS: brew install ffmpeg"
    echo "   Ubuntu: sudo apt install ffmpeg"
    exit 1
fi

# Check if imagemagick is installed (for image compression)
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo "   macOS: brew install imagemagick"
    echo "   Ubuntu: sudo apt install imagemagick"
    exit 1
fi

# Backup original files
echo "💾 Backing up original files..."
cp public/Rectangle.png public/original-assets/ 2>/dev/null || echo "Rectangle.png not found"
cp public/Rectangle12.png public/original-assets/ 2>/dev/null || echo "Rectangle12.png not found"
cp "public/background hero.mp4" public/original-assets/ 2>/dev/null || echo "background hero.mp4 not found"

# Compress Rectangle.png (25MB -> target ~2-3MB)
if [ -f "public/Rectangle.png" ]; then
    echo "🖼️  Compressing Rectangle.png..."
    if command -v magick &> /dev/null; then
        magick public/Rectangle.png -quality 75 -resize 1920x1080\> public/Rectangle_compressed.png
    else
        convert public/Rectangle.png -quality 75 -resize 1920x1080\> public/Rectangle_compressed.png
    fi
    
    # Replace original with compressed version
    mv public/Rectangle_compressed.png public/Rectangle.png
    echo "✅ Rectangle.png compressed"
else
    echo "⚠️  Rectangle.png not found"
fi

# Compress Rectangle12.png (12MB -> target ~1-2MB)
if [ -f "public/Rectangle12.png" ]; then
    echo "🖼️  Compressing Rectangle12.png..."
    if command -v magick &> /dev/null; then
        magick public/Rectangle12.png -quality 75 -resize 1920x1080\> public/Rectangle12_compressed.png
    else
        convert public/Rectangle12.png -quality 75 -resize 1920x1080\> public/Rectangle12_compressed.png
    fi
    
    # Replace original with compressed version
    mv public/Rectangle12_compressed.png public/Rectangle12.png
    echo "✅ Rectangle12.png compressed"
else
    echo "⚠️  Rectangle12.png not found"
fi

# Compress background hero.mp4 (3.9MB -> target ~1-2MB)
if [ -f "public/background hero.mp4" ]; then
    echo "🎥 Compressing background hero.mp4..."
    ffmpeg -i "public/background hero.mp4" \
        -c:v libx264 \
        -preset medium \
        -crf 28 \
        -c:a aac \
        -b:a 128k \
        -movflags +faststart \
        "public/background_hero_compressed.mp4" \
        -y
    
    # Replace original with compressed version
    mv "public/background_hero_compressed.mp4" "public/background hero.mp4"
    echo "✅ background hero.mp4 compressed"
else
    echo "⚠️  background hero.mp4 not found"
fi

echo ""
echo "🎉 Compression complete!"
echo "📊 File size comparison:"

# Show file sizes
echo "Current sizes:"
ls -lh public/Rectangle.png 2>/dev/null | awk '{print "  Rectangle.png: " $5}'
ls -lh public/Rectangle12.png 2>/dev/null | awk '{print "  Rectangle12.png: " $5}'
ls -lh "public/background hero.mp4" 2>/dev/null | awk '{print "  background hero.mp4: " $5}'

echo ""
echo "Original files backed up to: public/original-assets/"
echo "If you're happy with the results, you can delete the backup folder to save space."