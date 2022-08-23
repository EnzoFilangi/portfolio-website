#!/bin/sh
exec >> /home/enzo/logs/webhooks/portfolio/output.log 2>>&1

echo "###### Deploying changes ######"
date +'%Y-%m-%d %H:%M:%S'

echo "------ Git pull ------"
git fetch --all
git pull

echo "------ Rebuilding and restarting the container ------"
docker-compose up --force-recreate --build -d

echo "------ Deleting unused images ------"
docker image prune -f

echo "###### Deployed! ######"
