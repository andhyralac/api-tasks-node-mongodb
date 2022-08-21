FROM node:16-alpine3.14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

# variables de entorno
ENV DEVELOPMENT=DEVELOPMENT
ENV PORT=4000
ENV MONGO_URI=mongodb://localhost:27017/task-database
ENV JWT_SECRET=colocar_el_secret_jwt


EXPOSE ${PORT}

CMD ["npm", "run", "dev"]