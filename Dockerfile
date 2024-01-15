FROM oven/bun:1

WORKDIR /usr/src

RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

COPY . .

USER bun
