# Changelog

## Unreleased

- Fix `drizzle.config.ts` to load Postgres credentials from `process.env` instead of Hono `env()` / `getRuntimeKey()`, which require a request `Context` that drizzle-kit does not have.
