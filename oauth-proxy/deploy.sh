#!/bin/bash
# Auto-deploy script — triggered by GitHub webhook
# Place at /var/www/vhosts/thevitalitysource.ca/deploy.sh and chmod +x it

set -e

REPO_DIR="/var/www/vhosts/thevitalitysource.ca/vitality"
WEB_DIR="/var/www/vhosts/thevitalitysource.ca/httpdocs"

echo "[deploy] Pulling latest code..."
cd "$REPO_DIR"
git pull origin main

echo "[deploy] Installing dependencies..."
npm ci

echo "[deploy] Building (static export)..."
npm run build

echo "[deploy] Copying to httpdocs..."
rsync -a --delete out/ "$WEB_DIR/"
chown -R thevitalitysource.ca_fk0afovg7tj:psaserv "$WEB_DIR"

echo "[deploy] Done."
