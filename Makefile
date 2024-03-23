env=local
web_app=app

.PHONY: install build

build:
	@docker compose -f compose.$(env).yaml build

up:
	@docker compose -f $COMPOSE_FILE up -d

install:
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(id -u):$(id -g) $(web_app) npm install
	@docker compose -f compose.$(env).yaml run --rm --no-deps --user $(id -u):$(id -g) $(web_app) npm run build
