#!/bin/bash

# Script to copy optimized images to new Vite app
# Usage: ./copy-images-to-new-app.sh /path/to/your/new/app

if [ -z "$1" ]; then
    echo "❌ Error: Please provide the path to your new app"
    echo "Usage: ./copy-images-to-new-app.sh /path/to/your/new/app"
    exit 1
fi

NEW_APP_PATH="$1"
SOURCE_DIR="/Volumes/SSK SSD/Developer/thepeepal/public"
TARGET_DIR="$NEW_APP_PATH/public/images"

echo "📦 Copying images to new app..."
echo "From: $SOURCE_DIR"
echo "To: $TARGET_DIR"
echo ""

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# Copy gallery images
echo "📸 Copying gallery images..."
cp "$SOURCE_DIR/assets/gallery-"*.{webp,jpg} "$TARGET_DIR/" 2>/dev/null && echo "  ✓ Gallery images copied"

# Copy founder images
echo "👥 Copying founder images..."
cp "$SOURCE_DIR/assets/Sunita.jpeg" "$TARGET_DIR/" 2>/dev/null && echo "  ✓ Sunita.jpeg copied"
cp "$SOURCE_DIR/assets/Aditya.webp" "$TARGET_DIR/" 2>/dev/null && echo "  ✓ Aditya.webp copied"

# Copy logo
echo "🏢 Copying logo..."
cp "$SOURCE_DIR/PHOTO-2026-01-14-21-10-59.jpg" "$TARGET_DIR/" 2>/dev/null && echo "  ✓ Logo copied"

# Copy additional farm images
echo "🌾 Copying additional farm images..."
cp "$SOURCE_DIR/assets/1000236050_convert_"*.webp "$TARGET_DIR/" 2>/dev/null && echo "  ✓ Farm images copied"

echo ""
echo "✅ All images copied successfully!"
echo ""
echo "📊 Summary:"
ls -lh "$TARGET_DIR" | grep -E "\.(jpg|jpeg|webp|png)" | wc -l | xargs echo "Total images copied:"
du -sh "$TARGET_DIR" | awk '{print "Total size: " $1}'
