FROM node:18.13-alpine as node

ARG UID=1000
ARG GID=1000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

COPY  --chown=$UID:$GID . /usr/src/app/

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
