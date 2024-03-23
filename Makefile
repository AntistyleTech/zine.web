env=local
web_app=app

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

install: npm-install npm-build

npm-install:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(id -u):$(id -g) $(web_app) npm install

npm-dev:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(id -u):$(id -g) $(web_app) npm run dev

npm-build:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(id -u):$(id -g) $(web_app) npm run build

