# for Cloud Run

FROM node:20-slim AS builder
 
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile --production=false
COPY . .
RUN yarn build
 
FROM node:20-slim AS runner
ENV NODE_ENV=production
 
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/.next/standalone ./
CMD ["node", "server.js"]