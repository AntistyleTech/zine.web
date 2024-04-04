FROM node:20 as node

ARG UID=1000
ARG GID=1000

WORKDIR /app

RUN usermod -u ${UID} node
RUN groupmod -g ${GID} node
RUN usermod -d /app node

RUN mkdir -p /home/node/.npm \
&& chown -R node:node /home/node/.npm

ENV npm_config_cache /home/node/.npm

COPY --chown=node package.json package.json
RUN npm install

COPY --chown=node . .
RUN npm build

ENV HOST 0.0.0.0

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
