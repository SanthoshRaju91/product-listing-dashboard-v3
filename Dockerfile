FROM node:18-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Runner stage
FROM nginx:1.19.0

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]


