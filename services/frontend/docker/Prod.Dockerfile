ARG NODE_IMAGE

FROM ${NODE_IMAGE}

ENV PORT 6601

WORKDIR /services/frontend

COPY . .

RUN yarn

RUN yarn prod
