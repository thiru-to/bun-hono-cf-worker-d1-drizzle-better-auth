import * as Sentry from "@sentry/bun";

Sentry.init({
	dsn: "https://af72c31bb031267fe6c99d17137bb75e@o4511706469433344.ingest.us.sentry.io/4511958538059776",

	// Add Performance Monitoring by setting tracesSampleRate
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});
