# API FROM TASK WITH NODE AND MONGO_DB
REST API of tasks that are created by each user and you will only be able to view the tasks that you 
have created and you will not be able to see the other user tasks

## Environment Variables
You must create the .env file for the environment variables, to be able to run it on your local 
machine without using docker

| Plugin | README |
| ------ | ------ |
| PORT | the http server port |
| MONGO_URI | the mongodb database uri |
| DEVELOPMENT | development environment |
| JWT_SECRET | secret key for json web token configuration |

## Installation
```sh
git clone https://github.com/andhyralac/api-tasks-node-mongodb.git
npm install
npm run dev
npm start
```

## Installation with docker-compose (Recommended)
```sh
docker compose up --build app
```
