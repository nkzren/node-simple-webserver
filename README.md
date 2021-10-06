# node-simple-webserver
Infra básica para um servidor de páginas web utilizando Node, ExpressJS e Pug. Tudo no docker (:

# Pré-requisitos
* Docker
* Make (opcional, mas recomendado)

## Opcionais para rodar fora do container
O repo foi pensado para rodar 100% dentro do container docker. Caso não queira utilizar dessa forma, instalar os opcionais abaixo
* NodeJS (testado na v14 LTS)
* Yarn (testado na v1.22)

## Subindo a aplicação
As instruções abaixo são feitas para rodar com o make. Caso queira rodar sem ele, abra o `Makefile` e veja os comandos executados lá dentro

* Cria a rede do docker
`make setup`

* Sobe o container
`make start`

* (dentro do container) Instala as dependências
`yarn`

* (dentro do container) Inicia a aplicação
`yarn start`

* O servidor fica disponível no `localhost` (porta 80 mesmo)

