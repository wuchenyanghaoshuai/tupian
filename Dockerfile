FROM registry.cn-hangzhou.aliyuncs.com/wuchenyang/node:18.20.7 AS builder
WORKDIR /home/node/app
COPY package.json /home/node/app/
COPY . /home/node/app
RUN npm config set registry http://registry.npmmirror.com &&  npm install
RUN npm run build

FROM registry.cn-hangzhou.aliyuncs.com/wuchenyang/nginx:1.27.4
COPY --from=builder /home/node/app/nginx.default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/dist /usr/share/nginx/html
EXPOSE 80