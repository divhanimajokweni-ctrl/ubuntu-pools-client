import * as Sentry from "@sentry/node";

export function initSentry() {
  const dsn = 
    process.env.SENTRY_DSN || 
    process.env.VITE_SENTRY_DSN || 
    process.env.NEXT_PUBLIC_SENTRY_DSN;
  
  if (!dsn) {
    if (process.env.NODE_ENV === "production") {
      console.warn("Sentry DSN missing in production. error tracking disabled.");
    } else {
      // Sliently skip in development to reduce log noise
    }
    return;
  }

  Sentry.init({
    dsn: dsn,
    // Performance Monitoring
    tracesSampleRate: 1.0,
  });
}
