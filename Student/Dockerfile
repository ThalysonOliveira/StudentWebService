FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY  . .

EXPOSE 3366

CMD ["npm", "start"]
