env=local
web_app=app

uid=1000
gid=1000

.PHONY: build rebuild up down

build:
	@docker compose -f compose.$(env).yaml build

rebuild:
	@docker compose -f compose.$(env).yaml up --build --force-recreate

up:
	@docker compose -f compose.$(env).yaml up -d

down:
	@docker compose -f compose.$(env).yaml down


.PHONY: install npm-install npm-build npm-dev

install: npm-install npm-build up

npm-install:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(uid):$(gid) $(web_app) npm install

npm-dev:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(uid):$(gid) $(web_app) npm run dev

npm-build:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(uid):$(gid) $(web_app) npm run build


.PHONY: exec exec-root

exec:
	@docker compose -f compose.$(env).yaml run --user $(uid):$(gid) $(web_app) bash

exec-root:
	@docker compose -f compose.$(env).yaml run --user root:root $(web_app) bash


