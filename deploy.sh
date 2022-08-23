#!/bin/sh
set -e
exec >> /home/enzo/logs/webhooks/portfolio/output.log 2>>/home/enzo/logs/webhooks/portfolio/output.log

echo -e "\n\n"
echo "###### Deploying changes ######"
date +'%Y-%m-%d %H:%M:%S'

cd /home/enzo/portfolio-website

echo "------ Git pull ------"
git fetch --all
git pull

echo "------ Rebuilding and restarting the container ------"
docker compose up --force-recreate --build -d

echo "------ Deleting unused images ------"
docker image prune -f

echo "###### Deployed! ######"
