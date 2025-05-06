#!/usr/bin/env python3
import os
from PIL import Image
import glob

def convert_webp_to_jpg():
    """Convert all .webp files in the autumn-lookbook subdirectories to .jpg format."""
    
    # Base directory for lookbook images
    base_dir = "assets/images/autumn-lookbook"
    
    # Find all .webp files recursively
    webp_files = glob.glob(f"{base_dir}/**/*.webp", recursive=True)
    
    print(f"Found {len(webp_files)} .webp files to convert")
    
    # Convert each file
    for webp_file in webp_files:
        try:
            # Create the jpg filename
            jpg_file = webp_file.replace('.webp', '.jpg')
            
            # Open and convert the image
            img = Image.open(webp_file)
            
            # Convert transparency if needed
            if img.mode in ('RGBA', 'LA'):
                background = Image.new(img.mode[:-1], img.size, (255, 255, 255))
                background.paste(img, img.split()[-1])
                img = background
            
            # Save as jpg
            img.convert('RGB').save(jpg_file, 'JPEG', quality=90)
            
            print(f"Converted: {webp_file} -> {jpg_file}")
            
        except Exception as e:
            print(f"Error converting {webp_file}: {str(e)}")
    
    print("Conversion complete!")

if __name__ == "__main__":
    convert_webp_to_jpg() 