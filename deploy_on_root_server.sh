#!/bin/bash
echo "this wants to be run as root"
echo "at best delete the repo, and re-clone"
echo "then cd into repo root"

npm run build
systemctl restart nginx

