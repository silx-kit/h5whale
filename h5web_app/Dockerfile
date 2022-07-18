FROM node:16-alpine

WORKDIR /h5web_app
COPY . .

RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

EXPOSE 3000
CMD pnpm preview --port 3000 --host
