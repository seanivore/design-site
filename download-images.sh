#!/bin/bash

# Destination directory
DEST_DIR="assets/images/webflow-print-series"
mkdir -p "$DEST_DIR"

# Bauhaus navbar icon
curl -o "$DEST_DIR/bauhaus-navbar-icon.webp" "https://print-shop-fashion.august.style/assets/images/bauhaus-navbar-icon-05-400px.webp"

# Main print images
declare -a IMAGES=(
  "fr-v1-MCMD-22008-18x24.webp:MCMD-22008-18x24.webp"
  "fr-v1-MCMD-22001-12x16.webp:MCMD-22001-12x16.webp"
  "fr-v1-MCMD-22002-18x24.webp:MCMD-22002-18x24.webp"
  "fr-v1-MCMD-22003-18x24.webp:MCMD-22003-18x24.webp"
  "fr-v1-MCMD-22004-24x18.webp:MCMD-22004-24x18.webp"
  "fr-v1-MCMD-22005-24x18.webp:MCMD-22005-24x18.webp"
)

# Related collection images
declare -a RELATED=(
  "web-MCMD-20001-24x18.webp:MCMD-20001-24x18.webp"
  "web-MCMD-20002-24x18.webp:MCMD-20002-24x18.webp"
  "web-MCMD-20003-24x18.webp:MCMD-20003-24x18.webp"
  "web-MCMD-34001-18x18.webp:MCMD-34001-18x18.webp"
  "web-MCMD-34002-18x18.webp:MCMD-34002-18x18.webp"
  "web-MCMD-34003-18x18.webp:MCMD-34003-18x18.webp"
)

# Download main print images
for img in "${IMAGES[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  curl -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src"
done

# Download related collection images
for img in "${RELATED[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  curl -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src"
done

echo "All images downloaded to $DEST_DIR" 