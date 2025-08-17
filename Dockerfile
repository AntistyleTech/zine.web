
FROM node:18.13-alpine AS base

WORKDIR /usr/src/app

RUN apk add --no-cache git bash python3 make g++

COPY package*.json ./

FROM base AS local

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

#FROM base as build
#
#RUN npm install
#
#COPY --chown=${UID}:${GID} . .
#
#RUN npm run build
#
#FROM node:18.13-alpine as production
#
#WORKDIR /usr/src/app
#
#COPY --from=build /usr/src/app/.output ./.output
#COPY --from=build /usr/src/app/node_modules ./node_modules
#COPY --from=build /usr/src/app/package*.json ./
#
#EXPOSE 3000
#CMD ["node", ".output/server/index.mjs"]
