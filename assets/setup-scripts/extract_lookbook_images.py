#!/usr/bin/env python3
import csv
import requests
import os
import time
import re

# Create directory structure
os.makedirs('assets/images/autumn-lookbook/impressionist', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/surrealism', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/neo-expressionism', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/psychedelic', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/synthwave', exist_ok=True)

# Define headers to mimic a browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://ai-generated-content.august.style/lookbook',
    'Connection': 'keep-alive',
}

# CSV file path
csv_file = 'assets/docs/04-autumn-lookbook/Lookbook.csv'

# Function to sanitize filenames
def sanitize_filename(name):
    return re.sub(r'[^\w\-_.]', '_', name)

# Function to download an image
def download_image(url, directory, filename):
    if not url or not url.startswith('http'):
        print(f"Skipping invalid URL: {url}")
        return False
    
    try:
        print(f"Downloading {url} to {directory}/{filename}")
        response = requests.get(url, headers=headers, stream=True, timeout=10)
        
        # If successful, save the file
        if response.status_code == 200:
            filepath = os.path.join(directory, filename)
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"Successfully downloaded {filepath}")
            return True
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
            return False
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

# Read the CSV file and extract image URLs
image_map = {}  # To store mapping between original URL and local path
image_count = 0

with open(csv_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Get art movement and slug to determine folder and filename
        art_movement = row.get('Art Movement', '').strip().lower()
        look_name = row.get('Look Name', '').strip()
        slug = row.get('Slug', '').strip()
        
        # Skip if missing critical information
        if not art_movement or not look_name:
            continue
        
        # Determine directory based on art movement
        if 'impressionism' in art_movement:
            directory = 'assets/images/autumn-lookbook/impressionist'
        elif 'surrealism' in art_movement:
            directory = 'assets/images/autumn-lookbook/surrealism'
        elif 'neo expressionism' in art_movement or 'expressionism' in art_movement:
            directory = 'assets/images/autumn-lookbook/neo-expressionism'
        elif 'psychedelic' in art_movement:
            directory = 'assets/images/autumn-lookbook/psychedelic'
        elif 'synthwave' in art_movement:
            directory = 'assets/images/autumn-lookbook/synthwave'
        else:
            # Use impressionist as default if we can't categorize
            directory = 'assets/images/autumn-lookbook/impressionist'
        
        # Create sanitized base filename
        base_filename = sanitize_filename(look_name.lower().replace(' ', '-'))
        
        # Get image URLs from various columns
        image_urls = [
            row.get('Portrait 1', ''),
            row.get('Portrait 2', ''),
            row.get('Portrait 3', ''),
            row.get('Landscape 1', ''),
            row.get('Landscape 2', ''),
            row.get('Landscape 3', ''),
            row.get('Thumbnail', '')
        ]
        
        # Filter out empty URLs
        image_urls = [url for url in image_urls if url and url.startswith('http')]
        
        # Download each image
        for i, url in enumerate(image_urls):
            img_type = 'portrait' if i < 3 else 'landscape' if i < 6 else 'thumbnail'
            filename = f"{base_filename}-{img_type}-{i+1}.webp"
            
            if download_image(url, directory, filename):
                # Store mapping
                image_map[url] = os.path.join(directory, filename)
                image_count += 1
            
            # Sleep to avoid rate limiting
            time.sleep(1)

print(f"Downloaded {image_count} images successfully!")

# Update the HTML file to use local images
html_file = 'projects/autumn-lookbook.html'

try:
    with open(html_file, 'r') as f:
        content = f.read()
    
    # Replace direct Framer URLs with local paths
    for url, path in image_map.items():
        local_path = '../' + path
        content = content.replace(url, local_path)
    
    with open(html_file, 'w') as f:
        f.write(content)
    
    print(f"Updated HTML file with local image paths: {html_file}")
except Exception as e:
    print(f"Error updating HTML file: {e}")

print("All operations completed!") 