# Contributing

## Git Branch Workflow

This project adheres to [GitHub Flow](https://guides.github.com/introduction/flow/).

## Development

To run the project locally:

1. Create a `./public/configuration.js` file, replacing the values with your own:

   ```js
   window.__DEVELOPMENT_FORM_ID__ = 1
   window.__DEVELOPMENT_FORMS_APP_ID__ = 1

   // The following are optional as they have defaults in "index.html"
   // window.__DEVELOPMENT_SUBMISSION_REDIRECT_URL__ = ''
   // window.__DEVELOPMENT_CANCEL_REDIRECT_URL__ = ''
   // window.__DEVELOPMENT_GOOGLE_MAPS_API_KEY__ = ''
   // window.__DEVELOPMENT_CAPTCHA_SITE_KEY__ = ''
   // window.__DEVELOPMENT_EXTERNAL_ID__ = ''
   // window.__DEVELOPMENT_PRE_FILL_DATA__ = {}
   ```

1. Optionally create a `.env.local` file in the root of the project to override the values set in `.env`

1. `npm run start` - This will serve an index.html file located in `public` dir which includes the project

1. The served project will automatically open in your default browser.

1. The files will be recompiled when you make changes, however you will need to manually refresh your browser.

## Test Release Process

1. Checkout `master` and get the latest code

   ```
   git checkout master && git pull
   ```

1. Bump the version and create a release commit following regex: `/^\d+\.\d+\.\d+-test.\d+$/` e.g. `1.0.0-test.1`.

   ```
   npm version x.x.x-test.x --message "[RELEASE] %s"
   ```

1. Push changes to the `master` branch

   ```
   git push && git push --tags
   ```

## Production Release Process

1. Checkout `master` and get the latest code

   ```
   git checkout master && git pull
   ```

1. Run CLI to check if dependencies have been updated

   ```
   npx package-diff-summary {last-tag}
   ```

1. Copy result (if there is one) under a _Dependencies_ heading in [Changelog](./CHANGELOG.md)

1. Update the [Changelog](./CHANGELOG.md) by adding `x.x.x (YYYY-MM-DD)` under `Unreleased`

1. Commit changes to the `master` branch

   ```
   git add -A && git commit -m "[CHANGELOG] x.x.x"
   ```

1. Bump the version and create a release commit

   ```
   npm version x.x.x --message "[RELEASE] %s"
   ```

1. Push changes to the `master` branch

   ```
   git push && git push --tags
   ```
