#!/bin/bash

# Destination directory
DEST_DIR="assets/images/webflow-product-page"
mkdir -p "$DEST_DIR"

# Main product images
declare -a PRODUCT_IMAGES=(
  "web-BRTM-16012-30x20.webp:BRTM-16012-bg.webp"
  "fr-v1-BRTM-16012.webp:BRTM-16012-v1.webp"
  "fr-v2-BRTM-16012.webp:BRTM-16012-v2.webp"
)

# Related product images (one from each series)
declare -a RELATED_IMAGES=(
  # Brutalism series
  "web-BRTM-16001.webp:BRTM-16001.webp"
  "web-BRTM-16002.webp:BRTM-16002.webp"
  
  # Bauhaus series
  "web-BAHU-24001.webp:BAHU-24001.webp"
  "web-BAHU-31001.webp:BAHU-31001.webp"
  "web-BAHU-28001.webp:BAHU-28001.webp"
  "web-BAHU-32001.webp:BAHU-32001.webp"
  "web-BAHU-33001.webp:BAHU-33001.webp"
  
  # Other related series
  "web-VPWV-13701.webp:VPWV-13701.webp"
  "web-SNWV-14001.webp:SNWV-14001.webp"
  "web-GTCH-11701.webp:GTCH-11701.webp"
  "web-GTCH-12501.webp:GTCH-12501.webp"
  "web-SURL-49001.webp:SURL-49001.webp"
)

# Download main product images
for img in "${PRODUCT_IMAGES[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  curl -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src"
done

# Download related product images
for img in "${RELATED_IMAGES[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  curl -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src"
done

echo "All product images downloaded to $DEST_DIR" 