#!/bin/bash

# Create assets directory
mkdir -p /Users/seanivore/Development/design-site/assets/images/yoga-services

# Download all CDN assets
while IFS= read -r url; do
    # Clean up URL (remove size parameters like " 500w," if present)
    clean_url=$(echo "$url" | sed 's/ [0-9]*w,$//')
    
    # Extract filename
    filename=$(basename "$clean_url")
    
    # Download file
    echo "Downloading: $filename"
    curl -s "$clean_url" -o "/Users/seanivore/Development/design-site/assets/images/yoga-services/$filename"
done < /Users/seanivore/Development/design-site/temp-assets/cdn-urls.txt

echo "All assets downloaded to /Users/seanivore/Development/design-site/assets/images/yoga-services/"
