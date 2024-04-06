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


.PHONY: install run-npm-install

install: run-npm-install up

run-npm-install:
	@docker compose -f compose.$(env).yaml run --user $(uid):$(gid) $(web_app) npm install && npm run build && npm run postinstall

.PHONY: exec run exec-root

exec:
	@docker compose -f compose.$(env).yaml exec --user $(uid):$(gid) $(web_app) sh

exec-root:
	@docker compose -f compose.$(env).yaml exec --user root:root $(web_app) sh


