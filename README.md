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

## Better Auth

Schema lives in `src/db/schema/auth.ts`. Skip the CLI prompt with `--yes` and write next to the rest of the Drizzle schema:

```bash
bun x auth@latest generate --config src/lib/auth/index.ts --output src/db/schema/auth.ts --yes
```

Google/Apple only register when `GOOGLE_CLIENT_ID`/`GOOGLE_CLIENT_SECRET` and `APPLE_CLIENT_ID`/`APPLE_CLIENT_SECRET` are set. Email/password works without them.

This project uses drizzle-orm 1.0, which removed `relations()`. After `auth generate`, delete the generated `relations(...)` helpers — table FKs are enough for Better Auth.

Ctrl+C the hanging `generate` prompt if it is still waiting for `y/N`.

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
| `BETTER_AUTH_SECRET` | Better Auth secret |
| `BETTER_AUTH_URL` | App URL (e.g. `http://localhost:3000`) |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Optional Google OAuth |
| `APPLE_CLIENT_ID` / `APPLE_CLIENT_SECRET` | Optional Apple OAuth |
