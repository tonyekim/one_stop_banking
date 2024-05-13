import * as Sentry from "@sentry/nextjs";
// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
https://docs.sentry.io/platforms/javascript/guides/nextjs


Sentry.init({
  dsn: "https://183e953c528c332c30c3d8232c9d0227@o4507231879954432.ingest.de.sentry.io/4507231890047056",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
