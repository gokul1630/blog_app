#!/bin/sh

sudo yum update -y
sudo yum upgrade -y
sudo yum install nginx git ncurses wget -y

cd /tmp

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

source ~/.bashrc

npm install pm2 -g

git clone https://github.com/gokul1630/blog_app_Iac blog_app

cd blog_app && ls

sudo mv nginx.conf /etc/nginx/nginx.conf

cd frontend && ls

npm install --legacy-peer-deps && npm run build 

pm2 start npm --name devops-blog-app -- run start -- -p 3000


sudo systemctl start nginx
sudo systemctl enable nginx
sudo rm -rf /tmp/blog_app
