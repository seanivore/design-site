#!/usr/bin/env python3
import requests
import os
import time
from urllib.parse import urlparse
from pathlib import Path

# Create directories
os.makedirs('assets/images/autumn-lookbook/impressionist', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/surrealism', exist_ok=True)
os.makedirs('assets/images/autumn-lookbook/neo-expressionism', exist_ok=True)

# Define headers to mimic a browser
headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Referer': 'https://ai-generated-content.august.style/lookbook',  # The site you mentioned
    'Connection': 'keep-alive',
    'Sec-Fetch-Dest': 'image',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'cross-site',
}

# List of image URLs and their destination paths
images = [
    # Impressionist section
    ('https://framerusercontent.com/images/PhurGupgg1eFfMJ64sqWAU6VTM.webp', 'assets/images/autumn-lookbook/impressionist/ephemeral-elegance-1.webp'),
    ('https://framerusercontent.com/images/g9qcj5Z0gAJFoM9jE6u4J5wVs.webp', 'assets/images/autumn-lookbook/impressionist/ephemeral-elegance-2.webp'),
    ('https://framerusercontent.com/images/bnl2n00y4rzYgUfJLmT79fUH41A.webp', 'assets/images/autumn-lookbook/impressionist/ephemeral-elegance-3.webp'),
    
    # Surrealism section
    ('https://framerusercontent.com/images/dEgODsUuXQHQYQnTOCpvJnWkG1M.webp', 'assets/images/autumn-lookbook/surrealism/dreamscape-dissonance-1.webp'),
    ('https://framerusercontent.com/images/Gf20gzB2B1nNqgZuBbq9q3iX1w.webp', 'assets/images/autumn-lookbook/surrealism/dreamscape-dissonance-2.webp'),
    ('https://framerusercontent.com/images/DmTuYNcZNRQ4L5rRrZYipDZH4.webp', 'assets/images/autumn-lookbook/surrealism/dreamscape-dissonance-3.webp'),
    
    # Neo-expressionism section
    ('https://framerusercontent.com/images/DaU7pKvl6urvBcYGOwEOgBsZPQ.webp', 'assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-1.webp'),
    ('https://framerusercontent.com/images/f5vQDCUn0Vj1tyQSIKMeD2T1lXc.webp', 'assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-2.webp'),
    ('https://framerusercontent.com/images/OTzJkCmDKtd9yqBjOUZSUPXpgY.webp', 'assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-3.webp'),
    ('https://framerusercontent.com/images/jCbE6ZeFTNPfn0iZnTCvBKKko.webp', 'assets/images/autumn-lookbook/neo-expressionism/unfiltered-canvas-4.webp'),
    
    # Dreamscape illusion section
    ('https://framerusercontent.com/images/eHiW4u13B3VqPKyLd6D9Uzmwhuo.webp', 'assets/images/autumn-lookbook/surrealism/dreamscape-illusion-1.webp'),
    ('https://framerusercontent.com/images/NuUt7TfE4ltOdjmOYd9hHQVa0.webp', 'assets/images/autumn-lookbook/surrealism/dreamscape-illusion-2.webp'),
]

# Download each image
for url, path in images:
    try:
        print(f"Downloading {url} to {path}")
        response = requests.get(url, headers=headers, stream=True, timeout=10)
        
        # If successful, save the file
        if response.status_code == 200:
            with open(path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            print(f"Successfully downloaded {path}")
        else:
            print(f"Failed to download {url}. Status code: {response.status_code}")
        
        # Sleep to avoid hitting rate limits
        time.sleep(1)
    except Exception as e:
        print(f"Error downloading {url}: {e}")

# Now let's update the HTML to use local images
html_file = 'projects/autumn-lookbook.html'
updated_html_file = html_file

try:
    with open(html_file, 'r') as f:
        content = f.read()
    
    # Replace direct Framer URLs with local paths
    for url, path in images:
        local_path = '../' + path
        content = content.replace(url, local_path)
    
    with open(updated_html_file, 'w') as f:
        f.write(content)
    
    print(f"Updated HTML file with local image paths: {updated_html_file}")
except Exception as e:
    print(f"Error updating HTML file: {e}")

print("All operations completed!") 