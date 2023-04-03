UID := $(shell id -u):$(shell id -g)

.PHONY: 'clean start stop setup'

start:
	@CURRENT_USER=${UID} docker-compose up -d
	@docker-compose exec app bash

stop:
	@docker-compose down

clean:
	@docker-compose stop
	@docker-compose rm -f

setup:
	@echo "Creating netowrk development..."
	@docker network create --gateway=172.28.0.1 --subnet 172.28.0.0/16 development 2> /dev/null; true
