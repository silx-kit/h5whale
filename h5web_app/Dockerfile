FROM node:16-alpine

WORKDIR /h5web_app
COPY . .

ARG H5GROVE_APP_URL=http://localhost
ARG H5GROVE_APP_PORT=8888
ENV VITE_H5GROVE_URL=${H5GROVE_APP_URL}
ENV VITE_H5GROVE_PORT=${H5GROVE_APP_PORT}

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD pnpm preview --port 3000 --host
