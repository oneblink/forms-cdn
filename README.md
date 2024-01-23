# OneBlink Forms CDN [![tests](https://github.com/oneblink/apps-react/actions/workflows/test.yml/badge.svg)](https://github.com/oneblink/apps-react/actions)

Project to serve via CDN to embed a OneBlink Form in your website.

## Scripts

The script to include comes in a few different ways to allow you to choose the updates/breaks you want. Every deployment will upsert 4 files. If the latest deployment was `1.2.3`, the following 4 files will be available to use:

- `1.2.3.js` - for the people who are super cautious and never want their scripts to break (or be updated)
- `1.2.x.js` - for the people who are cautious but like to stay up to date
- `1.x.x.js` - for the people who are cautious but prefer to be up to date **(we recommend using this version)**
- `latest.js` - or for the really hardcore who don't care if their website breaks

**Note: `1.2.3` is just an example.** To check what the latest version is, please see the [Latest Release](https://github.com/oneblink/forms-cdn/releases/latest) or for more information on historical releases, see the [Changelog](./CHANGELOG.md).

## Example - Form

```html
<!doctype html>
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
          submissionRedirectUrl: 'https://example.com/submitted',
          cancelRedirectUrl: 'https://example.com/cancelled',
          googleMapsApiKey: 'GOOGLE_MAPS_API_KEY',
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
| `paymentReceiptUrl`     | `string` | Conditional | The URL to redirect the user to for displaying a payment receipt. Required if the form requires a payment.                                                 |
| `paymentFormUrl`        | `string` | Conditional | The URL to redirect the user to for displaying a payment form. Required if the form requires a payment using a custom form e.g. Westpac QuickStream.       |
| `googleMapsApiKey`      | `string` | Conditional | A [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key). Required if the form contains a `location` form element. |
| `externalId`            | `string` | No          | An identifier to match the form submission with in your system.                                                                                            |
| `preFillData`           | `Object` | No          | The data to pre-fill the OneBlink Form.                                                                                                                    |

## Example - Payment Receipt Page

```html
<!doctype html>
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
        OneBlinkForms.renderPaymentReceipt({
          selector: '#receipt',
          doneRedirectUrl: 'https://example.com/finished-payment',
          cancelRedirectUrl: 'https://example.com/cancelled-payment',
        })
      })
    </script>
  </head>
  <body>
    <div id="oneblink-form"></div>
  </body>
</html>
```

| Property            | Type     | Required | Description                                                                                           |
| ------------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `selector`          | `string` | Yes      | The selector to find a HTML Element to render the payment receipt inside                              |
| `doneRedirectUrl`   | `string` | Yes      | The URL to redirect the user once they click 'Done' on the payment receipt                            |
| `cancelRedirectUrl` | `string` | Yes      | The URL to redirect the user if they click 'Cancel' on the payment receipt after a failed transaction |

## Example - Payment Form Page

```html
<!doctype html>
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
        OneBlinkForms.renderPaymentForm({
          selector: '#oneblink-payment-form',
          formsAppId: 1,
        })
      })
    </script>
  </head>
  <body>
    <div id="oneblink-payment-form"></div>
  </body>
</html>
```

| Property     | Type     | Required | Description                                                              |
| ------------ | -------- | -------- | ------------------------------------------------------------------------ |
| `selector`   | `string` | Yes      | The selector to find a HTML Element to render the payment receipt inside |
| `formsAppId` | `number` | Yes      | The identifier of the OneBlink Forms App to gather configuration from    |
