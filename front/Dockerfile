FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
# TODO: Change npm run dev.
CMD [ "npm", "run", "dev", "--host"]
