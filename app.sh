#!/bin/sh

sudo yum update -y
sudo yum upgrade -y
sudo yum install nginx git ncurses wget lsof -y

curl -o- https://raw.githubusercontent.com/gokul1630/blog_app_Iac/refs/heads/main/nginx.conf > nginx.conf

sudo mv nginx.conf /etc/nginx/nginx.conf

sudo systemctl start nginx
sudo systemctl enable nginx

sudo useradd frontend && sudo su frontend

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

source ~/.bashrc

nvm install 20 && nvm use 20

git clone https://github.com/gokul1630/blog_app_Iac blog_app

cd blog_app/frontend

npm install pm2 -g

npm install --legacy-peer-deps && npm run build 

pm2 start npm --name devops-blog-app -- run start -- -p 3000
