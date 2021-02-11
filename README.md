# Forms CDN

Project to serve via CDN an embeddable OneBlink form.

## Scripts

The script to include comes in a few different ways to allow people to choose the updates/breaks that want. Every deployment will upsert 4 files. If the next deployment is `1.2.3`, the following 4 files will be created if they don't exist, or updated if they do:

- `1.2.3.js` - for the people who are super cautious and never want there scripts to break (or be updated)
- `1.2.x.js` - for the people who are cautious but like to stay up to date
- `1.x.x.js` - for the people who are cautious but prefer to be up to date
- `latest.js` - or for the really hardcore who don't care if there website breaks

### Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Must include Material Icons which are used by Form -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />

    <!-- OneBlink -->
    <script src="https://oneblink-forms.cdn.oneblink.io/{version}.js"></script>

    <!-- CivicPlus -->
    <script src="https://civicplus-forms.cdn.transform.civicplus.com/{version}.js"></script>

    <script>
      window.addEventListener('load', function (event) {
        OneBlinkForms.render({
          selector: '#oneblink-form',
          formId: 1,
          formsAppId: 1,
          submissionRedirectUrl: 'https://submitted.example.com',
          cancelRedirectUrl: 'https://cancelled.example.com',
          googleMapsApiKey: 'GOOGLE_MAPS_API_KEY',
          captchaSiteKey: 'CAPTCHA_SITE_KEY',
        })
      })
    </script>
  </head>
  <body>
    <div id="oneblink-form"></div>
  </body>
</html>
```

## `OneBlinkForms.render()` Options

| Property                | Type     | Required    | Description                                                                                                                                                |
| ----------------------- | -------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `selector`              | `string` | Yes         | The selector to find a HTML Element to render the OneBlink Form inside.                                                                                    |
| `formId`                | `number` | Yes         | The identifier of the OneBlink Form to render.                                                                                                             |
| `formsAppId`            | `number` | Yes         | The identifier of the OneBlink Forms App to submit the form to.                                                                                            |
| `submissionRedirectUrl` | `string` | Yes         | The URL to redirect the user to after a successful submission. Will have `submissionId` added to query string before redirecting.                          |
| `cancelRedirectUrl`     | `string` | Yes         | The URL to redirect the user to if they cancel the form.                                                                                                   |
| `googleMapsApiKey`      | `string` | Conditional | A [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key). Required if the form contains a `location` form element. |
| `captchaSiteKey`        | `string` | Conditional | A [reCAPTCHA Site Key](https://developers.google.com/recaptcha/intro). Required if the form contains a `captcha` form element.                             |
| `externalId`            | `string` | No          | An identifier to match the form submission with in your system.                                                                                            |
| `preFillData`           | `Object` | No          | The data to pre-fill the OneBlink Form.                                                                                                                    |
