# Base 이미지
FROM node:16-alpine

# docker container 내부의 어떤 디렉토리에서 실행할지
WORKDIR /usr/src/app

# 현재 dir의 package.json을 container의 ./에 복사
COPY package.json ./

RUN npm i

COPY ./ ./

CMD ["npm", "run", "dev:all"]

# export DOCKER_BUILDKIT=0
# export COMPOSE_DOCKER_CLI_BUILD=0
# docker run -p 3000:3000 <Image>