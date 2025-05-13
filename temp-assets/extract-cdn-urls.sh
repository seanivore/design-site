#!/bin/bash

# Extract CDN URLs from the HTML file
grep -o 'https://cdn[^"]*' /Users/seanivore/Development/design-site/temp-assets/online-pt-trainer.august.style/index.html | sort | uniq > /Users/seanivore/Development/design-site/temp-assets/cdn-urls.txt

echo "CDN URLs extracted to cdn-urls.txt"
