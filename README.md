# T3 Node

## local setup
1. clone repository
1. get copy of .env file and add to root folder
1. $ npm install
1. $ npm run dev

## staging/production setup
1. [install heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
1. heroku login
1. $ git remote add staging https://git.heroku.com/dotthebot-staging.git
1. $ git remote add production https://git.heroku.com/dotthebot.git

## push to staging/production
1. $ git push staging master OR git push production master
