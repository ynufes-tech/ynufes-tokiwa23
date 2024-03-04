FROM node:20-slim as builder
#nodeのイメージをベースにする

ENV BASE_URL=/23/tokiwa/

WORKDIR /app
#作業ディレクトリの指定

COPY ./ ./
#ynu-fes...の下を/appの下にコピー

RUN pnpm install

RUN pnpm run build

FROM node:20-slim as production

WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/.nuxt ./.nuxt
#最小限のファイルをコピー

ENV HOST=0.0.0.0

ENV BASE_URL=/23/tokiwa/

ENV PORT=8080
#環境変数の設定

CMD ["node" ,"./.output/server/index.mjs"]
#--containerを作成するときに実行されるコマンド

EXPOSE 8080
