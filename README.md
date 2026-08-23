# bun-hono-cf-worker-d1-drizzle-better-auth

Hono API on Bun with Drizzle ORM, PostgreSQL, and Better Auth.

## Stack

- Bun + Hono
- Drizzle ORM + drizzle-kit (PostgreSQL)
- Better Auth
- Docker Compose for local Postgres and Redis

## Setup

```bash
bun install
docker compose up -d
bun run dev
```

## Drizzle

`drizzle.config.ts` reads credentials from process env (`DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`, `DATABASE_SSL`). drizzle-kit is a CLI process — it has no Hono request context.

```bash
bunx drizzle-kit generate
bunx drizzle-kit migrate
bunx drizzle-kit studio
```

## Env

| Variable | Purpose |
| --- | --- |
| `DATABASE_HOST` | Postgres host |
| `DATABASE_PORT` | Postgres port |
| `DATABASE_NAME` | Database name |
| `DATABASE_USER` | Postgres user |
| `DATABASE_PASSWORD` | Postgres password |
| `DATABASE_SSL` | `true` to enable SSL |
| `REDIS_HOST` | Redis host |
| `REDIS_PORT` | Redis port |
| `REDIS_PASSWORD` | Redis password |
