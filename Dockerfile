FROM node:12.14.0
COPY . /app
WORKDIR /app
RUN npm install --registry=https://registry.npm.taobao.org \
	&& npm install -g pm2
EXPOSE 9099
CMD npm run prd