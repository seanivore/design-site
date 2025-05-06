#!/usr/bin/env python3
import re
from PIL import Image, ImageDraw, ImageFont
import os

# Create placeholder image directories if they don't exist
os.makedirs('assets/images/autumn-lookbook/placeholders', exist_ok=True)

# Function to create a placeholder image
def create_placeholder(text, filename, color=(200, 200, 200)):
    img = Image.new('RGB', (800, 600), color=color)
    draw = ImageDraw.Draw(img)
    
    # Try to use a system font
    try:
        font = ImageFont.truetype('Arial', 36)
    except IOError:
        font = ImageFont.load_default()
    
    # Add text to image
    text_width, text_height = draw.textsize(text, font=font) if hasattr(draw, 'textsize') else (200, 50)
    position = ((800 - text_width) // 2, (600 - text_height) // 2)
    draw.text(position, text, fill=(0, 0, 0), font=font)
    
    # Save image
    img.save(filename, 'JPEG')
    print(f"Created placeholder: {filename}")

# Read HTML file
html_file = 'projects/autumn-lookbook.html'
with open(html_file, 'r') as f:
    content = f.read()

# Find all remaining Framer URLs in the HTML
framer_urls = re.findall(r'https://framerusercontent\.com/images/[^"\']+', content)

# Process each URL
replacements = 0
for i, url in enumerate(framer_urls):
    # Create a placeholder filename
    placeholder_path = f'assets/images/autumn-lookbook/placeholders/placeholder-{i+1}.jpg'
    
    # Create the placeholder image
    create_placeholder(f"Fashion Image {i+1}", placeholder_path)
    
    # Replace in HTML
    content = content.replace(url, f'../{placeholder_path}')
    replacements += 1

# Save updated HTML
with open(html_file, 'w') as f:
    f.write(content)

print(f"Replaced {replacements} image URLs with local placeholders in {html_file}")
print("Done. Please refresh your browser to see the changes.") 