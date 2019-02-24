#!/bin/bash
#Filename: rebuild_vue_project.sh

# Git Clone
cd /srv/gocodesa/ViaLink/
sudo git pull

# Pull down packages
sudo npm install

# Build Project
cd src
sudo npm run build

# Push build to /var/www/
sudo cp -r ../dist/* /var/www/cmlink/
