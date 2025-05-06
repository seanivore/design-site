#!/bin/bash

# Destination directory
DEST_DIR="assets/images/webflow-product-page"
mkdir -p "$DEST_DIR"

# More specific series images with multiple options from each
declare -a MORE_IMAGES=(
  # Brutalism (BRTM) series
  "web-BRTM-16001-30x20.webp:BRTM-16001-30x20.webp"
  "web-BRTM-16002-30x20.webp:BRTM-16002-30x20.webp"
  "web-BRTM-16003-30x20.webp:BRTM-16003-30x20.webp"
  "web-BRTM-16004-30x20.webp:BRTM-16004-30x20.webp"
  
  # Bauhaus (BAHU) series
  "web-BAHU-24001-24x18.webp:BAHU-24001-24x18.webp"
  "web-BAHU-31001-24x18.webp:BAHU-31001-24x18.webp"
  "web-BAHU-28001-24x18.webp:BAHU-28001-24x18.webp"
  "web-BAHU-32001-24x18.webp:BAHU-32001-24x18.webp"
  "web-BAHU-33001-24x18.webp:BAHU-33001-24x18.webp"
  
  # Vaporwave (VPWV) series
  "web-VPWV-13701-24x18.webp:VPWV-13701-24x18.webp"
  "web-VPWV-13702-24x18.webp:VPWV-13702-24x18.webp"
  "web-VPWV-13703-24x18.webp:VPWV-13703-24x18.webp"
  
  # Sinewaves (SNWV) series
  "web-SNWV-14001-24x18.webp:SNWV-14001-24x18.webp"
  "web-SNWV-14002-24x18.webp:SNWV-14002-24x18.webp"
  "web-SNWV-14003-24x18.webp:SNWV-14003-24x18.webp"
  
  # Glitch (GTCH) series
  "web-GTCH-11701-24x18.webp:GTCH-11701-24x18.webp"
  "web-GTCH-11702-24x18.webp:GTCH-11702-24x18.webp"
  "web-GTCH-12501-24x18.webp:GTCH-12501-24x18.webp"
  "web-GTCH-12502-24x18.webp:GTCH-12502-24x18.webp"
  
  # Surreal (SURL) series
  "web-SURL-49001-24x18.webp:SURL-49001-24x18.webp"
  "web-SURL-49002-24x18.webp:SURL-49002-24x18.webp"
  "web-SURL-49003-24x18.webp:SURL-49003-24x18.webp"
)

# Try different formats for each image
for img in "${MORE_IMAGES[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  # Try first format
  curl -s -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src" || true
  
  # If file is empty or doesn't exist, try alternate format (without size)
  if [ ! -s "$DEST_DIR/$dest" ]; then
    alt_src=${src%-*}.webp
    echo "First attempt failed, trying $alt_src"
    curl -s -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$alt_src" || true
  fi
  
  # If still empty, try fr-v1 format
  if [ ! -s "$DEST_DIR/$dest" ]; then
    base_name=$(echo "$src" | sed -E 's/web-([^-]+)-([^-]+).*/\1-\2/')
    alt_src="fr-v1-$base_name.webp"
    echo "Second attempt failed, trying $alt_src"
    curl -s -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$alt_src" || true
  fi
done

echo "Additional product images downloaded to $DEST_DIR" 