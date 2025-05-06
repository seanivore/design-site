#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create directories if they don't exist
os.makedirs('assets/images/autumn-lookbook/impressionist', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/surrealism', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/neo-expressionism', exist_ok=True)

# Define the images to create
images = [
    # Impressionist section
    ('assets/images/autumn-lookbook/impressionist/ephemeral-elegance-1.webp', 'Ephemeral Elegance 1', (173, 216, 230)),  # Light blue
    ('assets/images/autumn-lookbook/impressionist/ephemeral-elegance-2.webp', 'Ephemeral Elegance 2', (173, 216, 230)),
    ('assets/images/autumn-lookbook/impressionist/ephemeral-elegance-3.webp', 'Ephemeral Elegance 3', (173, 216, 230)),
    
    # Surrealism section
    ('assets/images/autumn-lookbook/surrealism/dreamscape-dissonance-1.webp', 'Dreamscape Dissonance 1', (221, 160, 221)),  # Plum
    ('assets/images/autumn-lookbook/surrealism/dreamscape-dissonance-2.webp', 'Dreamscape Dissonance 2', (221, 160, 221)),
    ('assets/images/autumn-lookbook/surrealism/dreamscape-dissonance-3.webp', 'Dreamscape Dissonance 3', (221, 160, 221)),
    
    # Neo-expressionism section
    ('assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-1.webp', 'Unfiltered Canvas 1', (255, 165, 0)),  # Orange
    ('assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-2.webp', 'Unfiltered Canvas 2', (255, 165, 0)),
    ('assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-3.webp', 'Unfiltered Canvas 3', (255, 165, 0)),
    ('assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-4.webp', 'Unfiltered Canvas 4', (255, 165, 0)),
    
    # Dreamscape illusion section
    ('assets/images/autumn-lookbook/surrealism/dreamscape-illusion-1.webp', 'Dreamscape Illusion 1', (152, 251, 152)),  # Pale green
    ('assets/images/autumn-lookbook/surrealism/dreamscape-illusion-2.webp', 'Dreamscape Illusion 2', (152, 251, 152)),
]

# Create each placeholder image
for path, text, color in images:
    # Create a colored image
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
    img.save(path.replace('.webp', '.jpg'), 'JPEG')  # Save as JPG instead of webp for simplicity
    print(f"Created placeholder: {path.replace('.webp', '.jpg')}")

print("All placeholder images created successfully!") 