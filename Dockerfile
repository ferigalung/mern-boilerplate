FROM node:16-alpine
WORKDIR /app

COPY ./package.json ./package.json
COPY ./backend ./backend
COPY ./frontend ./frontend

RUN npm install
RUN npm install --prefix frontend
RUN npm run build --prefix frontend

EXPOSE 8000

CMD ["npm","start"]