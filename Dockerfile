FROM node:18.13-alpine as node

ARG UID=1000
ARG GID=1000

WORKDIR /app

COPY --chown=$UID:$GID package.json .
COPY --chown=$UID:$GID package-lock.json .
RUN npm install

COPY --chown=$UID:$GID . /app
RUN npm run build
RUN npm run postinstall

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
