FROM node:20-slim AS base

ARG H5WEB_APP_PORT=3000
ARG H5GROVE_APP_URL=http://localhost
ARG H5GROVE_APP_PORT=8888
ENV H5WEB_APP_PORT=${H5WEB_APP_PORT}
ENV VITE_H5GROVE_URL=${H5GROVE_APP_URL}
ENV VITE_H5GROVE_PORT=${H5GROVE_APP_PORT}

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /h5web_app
WORKDIR /h5web_app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

EXPOSE $H5WEB_APP_PORT
CMD pnpm preview --port $H5WEB_APP_PORT --host
