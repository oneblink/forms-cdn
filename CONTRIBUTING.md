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
   // window.__DEVELOPMENT_EXTERNAL_ID__ = ''
   // window.__DEVELOPMENT_PRE_FILL_DATA__ = {}
   // window.__DEVELOPMENT_TOKEN__ = '' // Set this for authenticated forms
   ```

1. Optionally create a `.env.local` file in the root of the project to override the values set in `.env`

1. `npm run start` - This will serve an index.html file located in `public` dir which includes the project

1. The served project will automatically open in your default browser.

1. The files will be recompiled when you make changes, however you will need to manually refresh your browser.

## Test Release Process

1. Checkout `master`

   ```
   git checkout master
   ```

1. Get the latest code

   ```
   git pull
   ```

1. Start the release process using a tag matching `x.x.x-test.x`

   ```
   npm run release
   ```

## Production Release Process

1.  Install the release CLI globally

    ```
    npm i -g @oneblink/release-cli
    ```

1.  Start a product release and follow the prompts to release this repository

    ```
    oneblink-release product
    ```
