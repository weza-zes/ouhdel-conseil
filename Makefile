.PHONY: init up down build

init:
	$(MAKE) down
	$(MAKE) build

up:
	@docker compose up -d

down:
	@docker compose down

build:
	@docker compose up -d --build
