#!/usr/bin/env python3
import re
import os

# Read HTML file
html_file = 'projects/autumn-lookbook.html'
with open(html_file, 'r') as f:
    content = f.read()

# Find all image paths in the HTML
img_paths = re.findall(r'src="([^"]+)"', content)

# Process each path
replacements = 0
placeholder_index = 1

for path in img_paths:
    # Skip paths that already point to placeholders
    if 'placeholder' in path:
        continue
        
    # Create a reference to a placeholder image
    placeholder_path = f'../assets/images/autumn-lookbook/placeholders/placeholder-{placeholder_index}.jpg'
    
    # Replace in HTML
    content = content.replace(f'src="{path}"', f'src="{placeholder_path}"')
    replacements += 1
    placeholder_index += 1
    
    # Cycle back to placeholder-1 if we run out of placeholders
    if placeholder_index > 11:
        placeholder_index = 1

# Save updated HTML
with open(html_file, 'w') as f:
    f.write(content)

print(f"Replaced {replacements} image paths with available placeholders in {html_file}")
print("Done. Please refresh your browser to see the changes.") 