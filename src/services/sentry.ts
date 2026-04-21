import * as Sentry from "@sentry/node";

export function initSentry() {
  const dsn = process.env.VITE_SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  
  if (!dsn) {
    console.warn("Sentry DSN missing. Error tracking disabled.");
    return;
  }

  Sentry.init({
    dsn: dsn,
    // Performance Monitoring
    tracesSampleRate: 1.0,
  });
}
