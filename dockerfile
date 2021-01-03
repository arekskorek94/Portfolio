FROM node:14.7.0-alpine As builderapp
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY .   .
RUN npm run build --prod
FROM nginx:1.19-alpine
COPY --from=builderapp /usr/src/app/dist/portfolio/ /usr/share/nginx/html
