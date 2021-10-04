FROM node:14
WORKDIR /opt/app

COPY ./package.json ./

COPY src/ ./src

RUN useradd -u 2469 node
USER node

ENTRYPOINT ["yarn"]
