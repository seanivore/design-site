#!/bin/bash

# Destination directory
DEST_DIR="assets/images/webflow-print-series"
mkdir -p "$DEST_DIR"

# Additional print images we need
declare -a ADDITIONAL=(
  "fr-v1-MCMD-22006-18x24.webp:MCMD-22006-18x24.webp"
  "fr-v1-MCMD-22007-18x24.webp:MCMD-22007-18x24.webp"
  "fr-v1-MCMD-22010-18x24.webp:MCMD-22010-18x24.webp"
  "fr-v1-MCMD-22011-20x16.webp:MCMD-22011-20x16.webp"
  "fr-v1-MCMD-22012-24x18.webp:MCMD-22012-24x18.webp"
  "fr-v1-MCMD-22013-24x18.webp:MCMD-22013-24x18.webp"
  "fr-v1-MCMD-22014-24x18.webp:MCMD-22014-24x18.webp"
)

# Additional related series images
declare -a RELATED_ADDITIONAL=(
  "web-MCMD-34003-18x18.webp:MCMD-34003-18x18.webp"
  "web-MCMD-35001-24x18.webp:MCMD-35001-24x18.webp"
  "web-MCMD-35002-24x18.webp:MCMD-35002-24x18.webp"
  "web-MCMD-35003-24x18.webp:MCMD-35003-24x18.webp"
  "web-MCMD-35004-24x18.webp:MCMD-35004-24x18.webp"
  "web-MCMD-13001.webp:MCMD-13001.webp"
  "web-MCMD-13002.webp:MCMD-13002.webp"
  "web-MCMD-13003.webp:MCMD-13003.webp"
  "web-MCMD-13004.webp:MCMD-13004.webp"
  "web-MCMD-13005.webp:MCMD-13005.webp"
)

# Download additional print images
for img in "${ADDITIONAL[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  curl -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src"
done

# Download additional related collection images
for img in "${RELATED_ADDITIONAL[@]}"; do
  src=${img%%:*}
  dest=${img#*:}
  echo "Downloading $src to $DEST_DIR/$dest"
  curl -o "$DEST_DIR/$dest" "https://print-shop-fashion.august.style/assets/images/$src"
done

echo "Additional images downloaded to $DEST_DIR" 