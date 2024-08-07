# Changelog

## [Unreleased]

### Added

- support for form publish dates

## [1.7.0] - 2024-08-07

### Added

- `token` option to allow for authenticated forms to be submitted

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to 14.0.1-beta.1 (from 14.0.0-beta.3)

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.2.3-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [6.2.2-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.6.4] - 2024-07-10

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [14.0.0-beta.3](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [13.0.0-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.2.2-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [6.2.1-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.6.3] - 2024-07-01

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.2.1-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [6.2.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.6.2] - 2024-06-21

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [13.0.0-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [12.0.1-beta.6](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.2.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [6.1.1-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- no longer depend upon [@oneblink/types](https://www.npmjs.com/package/@oneblink/types)

## [1.6.1] - 2024-06-13

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.1.1-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [6.1.0-beta.10](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.6.0] - 2024-06-04

### Added

- Google Maps API Key will now be inherited from the Forms App used to render the form via the `formsAppId` option. The `googleMapsApiKey` option in `OneBlinkForms.render()` function has been **Deprecated** but can still be passed in to allow for backward compatibility. The `googleMapsApiKey` option may be removed in a future release.

### Fixed

- typescript errors not being reported, change `strict` type checking to `true`.

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [12.0.1-beta.6](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [12.0.0-beta.16](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.1.0-beta.10](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [6.0.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.11] - 2024-05-21

### Fixed

- form submissions passing `formSubmissionDraftId` and `jobId` as `null` instead of `undefined`

## [1.5.10] - 2024-05-20

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [12.0.0-beta.16](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [11.2.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [6.0.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.14.0-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.9] - 2024-05-10

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [11.2.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [11.1.0-beta.14](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.14.0-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.13.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.8] - 2024-04-30

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [11.1.0-beta.14](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [11.0.1-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.13.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.12.2-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- no longer depend upon [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin)

- depend upon [buffer](https://www.npmjs.com/package/buffer) 6.0.3

- depend upon [events](https://www.npmjs.com/package/events) [3.3.0](https://github.com/browserify/events/releases/tag/v3.3.0)

- depend upon [timers-browserify](https://www.npmjs.com/package/timers-browserify) [2.0.12](https://github.com/jryans/timers-browserify/blob/master/CHANGELOG.md)

## [1.5.7] - 2024-04-10

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.12.2-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.12.1-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.6] - 2024-03-25

##### Release Name: Hotfix Reforesting

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.12.1-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.12.0-beta.16](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.5] - 2024-03-14

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [11.0.1-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [11.0.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.12.0-beta.16](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.11.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.4] - 2024-03-06

### Added

- build config to create single arcgis chunk

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [11.0.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [10.1.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.11.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.10.0-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- no longer depend upon [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core)

## [1.5.3] - 2024-02-21

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.10.0-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.9.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [5.4.0](https://github.com/oneblink/sdk-core-js/releases/tag/v5.4.0) (from [5.3.0](https://github.com/oneblink/sdk-core-js/releases/tag/v5.3.0))

## [1.5.2] - 2024-02-18

### Changed

- `publicPath` in webpack output

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [10.1.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [9.0.0](https://github.com/oneblink/apps/releases/tag/v9.0.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.9.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.8.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.5.1] - 2024-02-07

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.23.9](https://github.com/babel/babel/releases/tag/v7.23.9) (from [7.22.9](https://github.com/babel/babel/releases/tag/v7.22.9))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.23.9](https://github.com/babel/babel/releases/tag/v7.23.9) (from [7.22.9](https://github.com/babel/babel/releases/tag/v7.22.9))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.23.3](https://github.com/babel/babel/releases/tag/v7.23.3) (from [7.22.5](https://github.com/babel/babel/releases/tag/v7.22.5))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [9.0.0](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [9.0.0-beta.6](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.8.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.7.0-beta.9](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [5.3.0](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [5.3.0-beta.1](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.73 (from 17.0.43)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.25 (from 17.0.14)

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.5.6 (from 7.5.0)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [6.20.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [6.1.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [6.20.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [6.1.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [clsx](https://www.npmjs.com/package/clsx) to 2.1.0 (from [2.0.0](https://github.com/lukeed/clsx/releases/tag/v2.0.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.35.1](https://github.com/zloirock/core-js/releases/tag/v3.35.1) (from [3.31.1](https://github.com/zloirock/core-js/releases/tag/v3.31.1))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [6.10.0](https://github.com/webpack-contrib/css-loader/blob/master/CHANGELOG.md) (from [6.8.1](https://github.com/webpack-contrib/css-loader/blob/master/CHANGELOG.md))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [16.4.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [16.3.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin) to 3.0.0 (from 2.0.1)

- update [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) to 0.14.1 (from 0.13.11)

- update [sass](https://www.npmjs.com/package/sass) to [1.70.0](https://github.com/sass/dart-sass/releases/tag/1.70.0) (from [1.63.6](https://github.com/sass/dart-sass/blob/master/CHANGELOG.md))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [14.1.0](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md) (from [13.3.2](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.3.4](https://github.com/webpack-contrib/style-loader/blob/master/CHANGELOG.md) (from [3.3.3](https://github.com/webpack-contrib/style-loader/blob/master/CHANGELOG.md))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.5.1](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md) (from [9.4.4](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md))

- update [ts-node](https://www.npmjs.com/package/ts-node) to 10.9.2 (from 10.9.1)

- update [typescript](https://www.npmjs.com/package/typescript) to 5.3.3 (from 5.1.6)

- update [webpack](https://www.npmjs.com/package/webpack) to 5.90.1 (from 5.88.2)

- update [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) to [3.6.20](https://github.com/github/fetch/blob/master/CHANGELOG.md) (from [3.6.16](https://github.com/github/fetch/blob/master/CHANGELOG.md))

## [1.5.0] - 2024-01-30

### Added

- `renderPaymentForm()` function

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [9.0.0-beta.6](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [8.1.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.7.0-beta.9](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.6.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [5.3.0-beta.1](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [5.2.0-beta.2](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

- no longer depend upon [setimmediate](https://www.npmjs.com/package/setimmediate)

## [1.4.14] - 2024-01-18

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [8.1.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [8.0.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.6.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.5.0-beta.7](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [3.3.1](https://github.com/oneblink/cli/releases/tag/v3.3.1) (from [3.3.0](https://github.com/oneblink/cli/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [5.2.0-beta.2](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [5.1.0](https://github.com/oneblink/sdk-core-js/releases/tag/v5.1.0))

## [1.4.13] - 2023-12-12

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [8.0.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [7.0.1](https://github.com/oneblink/apps/releases/tag/v7.0.1))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.5.0-beta.7](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.4.0](https://github.com/oneblink/apps-react/releases/tag/v5.4.0))

## [1.4.12] - 2023-11-20

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [7.0.1](https://github.com/oneblink/apps/releases/tag/v7.0.1) (from [7.0.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.4.0](https://github.com/oneblink/apps-react/releases/tag/v5.4.0) (from [5.3.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [5.1.0](https://github.com/oneblink/sdk-core-js/releases/tag/v5.1.0) (from [5.0.0-beta.2](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

## [1.4.11] - 2023-11-01

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [7.0.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [6.8.0](https://github.com/oneblink/apps/releases/tag/v6.8.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.3.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.2.0](https://github.com/oneblink/apps-react/releases/tag/v5.2.0))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [5.0.0-beta.2](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [4.2.0](https://github.com/oneblink/sdk-core-js/releases/tag/v4.2.0))

## [1.4.10] - 2023-10-25

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [6.8.0](https://github.com/oneblink/apps/releases/tag/v6.8.0) (from [6.4.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.2.0](https://github.com/oneblink/apps-react/releases/tag/v5.2.0) (from [5.1.4-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [3.3.0](https://github.com/oneblink/cli/blob/master/CHANGELOG.md) (from [3.2.0](https://github.com/oneblink/cli/releases/tag/v3.2.0))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [4.2.0](https://github.com/oneblink/sdk-core-js/releases/tag/v4.2.0) (from [4.1.0](https://github.com/oneblink/sdk-core-js/releases/tag/v4.1.0))

## [1.4.9] - 2023-10-23

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.1.4-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.1.0](https://github.com/oneblink/apps-react/releases/tag/v5.1.0))

## [1.4.8] - 2023-09-07

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [6.4.0-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [6.2.0-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.1.0](https://github.com/oneblink/apps-react/releases/tag/v5.1.0) (from [5.1.0-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [3.2.0](https://github.com/oneblink/cli/releases/tag/v3.2.0) (from [3.0.0](https://github.com/oneblink/cli/releases/tag/v3.0.0))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [4.1.0](https://github.com/oneblink/sdk-core-js/releases/tag/v4.1.0) (from [4.0.0](https://github.com/oneblink/sdk-core-js/releases/tag/v4.0.0))

## [1.4.7] - 2023-08-29

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.1.0-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.0.1-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.4.6] - 2023-08-11

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.0.1-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [5.0.0-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.4.5] - 2023-08-10

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [6.2.0-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [6.1.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [5.0.0-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [4.4.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [3.0.0](https://github.com/oneblink/cli/releases/tag/v3.0.0) (from [2.1.0](https://github.com/oneblink/cli/releases/tag/v2.1.0))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [4.0.0](https://github.com/oneblink/sdk-core-js/releases/tag/v4.0.0) (from [4.0.0-beta.1](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

## [1.4.4] - 2023-08-01

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [6.1.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [6.0.0-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [4.4.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [4.3.0-beta.11](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.4.3] - 2023-07-26

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.22.9](https://github.com/babel/babel/releases/tag/v7.22.9) (from [7.21.4](https://github.com/babel/babel/releases/tag/v7.21.4))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.22.9](https://github.com/babel/babel/releases/tag/v7.22.9) (from [7.21.4](https://github.com/babel/babel/releases/tag/v7.21.4))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.22.5](https://github.com/babel/babel/releases/tag/v7.22.5) (from [7.18.6](https://github.com/babel/babel/releases/tag/v7.18.6))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [6.0.0-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [5.0.0-beta.15](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [4.3.0-beta.11](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [4.2.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [2.1.0](https://github.com/oneblink/cli/releases/tag/v2.1.0) (from [2.0.0](https://github.com/oneblink/cli/releases/tag/v2.0.0))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [4.0.0-beta.1](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [3.1.0-beta.4](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.5.0 (from 7.3.13)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [6.1.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v6.1.0) (from [5.57.1](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.57.1))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [6.1.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [5.57.1](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [babel-loader](https://www.npmjs.com/package/babel-loader) to [9.1.3](https://github.com/babel/babel-loader/releases/tag/v9.1.3) (from [9.1.2](https://github.com/babel/babel-loader/releases/tag/v9.1.2))

- update [clsx](https://www.npmjs.com/package/clsx) to [2.0.0](https://github.com/lukeed/clsx/releases/tag/v2.0.0) (from [1.2.1](https://github.com/lukeed/clsx/releases/tag/v1.2.1))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.31.1](https://github.com/zloirock/core-js/releases/tag/v3.31.1) (from [3.30.0](https://github.com/zloirock/core-js/releases/tag/v3.30.0))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [6.8.1](https://github.com/webpack-contrib/css-loader/releases/tag/v6.8.1) (from [6.7.3](https://github.com/webpack-contrib/css-loader/releases/tag/v6.7.3))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [16.3.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [16.0.3](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [sass](https://www.npmjs.com/package/sass) to [1.63.6](https://github.com/sass/dart-sass/releases/tag/1.63.6) (from [1.60.0](https://github.com/sass/dart-sass/releases/tag/1.60.0))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [13.3.2](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md) (from [13.2.2](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md))

- update [semver](https://www.npmjs.com/package/semver) to [7.5.4](https://github.com/npm/node-semver/blob/master/CHANGELOG.md) (from [7.3.8](https://github.com/npm/node-semver/blob/master/CHANGELOG.md))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.3.3](https://github.com/webpack-contrib/style-loader/blob/master/CHANGELOG.md) (from [3.3.2](https://github.com/webpack-contrib/style-loader/blob/master/CHANGELOG.md))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.4.4](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md) (from [9.4.2](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md))

- update [typescript](https://www.npmjs.com/package/typescript) to 5.1.6 (from 5.0.3)

- update [webpack](https://www.npmjs.com/package/webpack) to 5.88.2 (from 5.77.0)

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [5.1.4](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [5.0.1](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

- update [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) to 3.6.16 (from 3.6.2)

## [1.4.2] - 2023-07-12

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [4.2.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [4.1.0-beta.8](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.4.1] - 2023-07-03

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [4.1.0-beta.8](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [4.0.0-beta.14](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.4.0] - 2023-06-23

### Added

- support for receipt generation and server validation based on the form configuration

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [5.0.0-beta.15](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [4.1.0-beta.8](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [4.0.0-beta.14](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [3.1.0-beta.10](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [3.1.0-beta.4](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [3.0.0-beta.2](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

## [1.3.14] - 2023-06-05

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [4.1.0-beta.8](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [4.0.0-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [3.1.0-beta.10](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [3.0.0-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [3.0.0-beta.2](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md) (from [2.0.0](https://github.com/oneblink/sdk-core-js/releases/tag/v2.0.0))

## [1.3.13] - 2023-05-26

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [4.0.0-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [3.2.0](https://github.com/oneblink/apps/releases/tag/v3.2.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [3.0.0-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.14.2-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.12] - 2023-05-12

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.2.0](https://github.com/oneblink/apps/releases/tag/v3.2.0) (from [3.2.0-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.14.2-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.14.2-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) to [2.0.0](https://github.com/oneblink/sdk-core-js/releases/tag/v2.0.0) (from [2.0.0-beta.3](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md))

## [1.3.11] - 2023-05-09

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.14.2-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.14.1-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.10] - 2023-05-08

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.2.0-beta.4](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [3.1.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.14.1-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.14.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [2.0.0](https://github.com/oneblink/cli/releases/tag/v2.0.0) (from [1.3.1](https://github.com/oneblink/cli/releases/tag/v1.3.1))

- depend upon [@oneblink/sdk-core](https://www.npmjs.com/package/@oneblink/sdk-core) [2.0.0-beta.3](https://github.com/oneblink/sdk-core-js/blob/master/CHANGELOG.md)

## [1.3.9] - 2023-05-02

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.14.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.13.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.7] - 2023-04-27

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.13.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.11.0-beta.9](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.6] - 2023-04-20

### Added

- `@microsoft/eslint-plugin-sdl` eslint plugin

## [1.3.5] - 2023-04-14

### Changed

- Set `abnLookupAuthenticationGuid` using `formsAppConfiguration`

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.21.4](https://github.com/babel/babel/releases/tag/v7.21.4) (from [7.19.3](https://github.com/babel/babel/releases/tag/v7.19.3))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.21.4](https://github.com/babel/babel/releases/tag/v7.21.4) (from [7.19.4](https://github.com/babel/babel/releases/tag/v7.19.4))

- update @oneblink/apps to [3.1.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [3.0.4](https://github.com/oneblink/apps/releases/tag/v3.0.4))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.11.0-beta.9](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.10.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [1.3.1](https://github.com/oneblink/cli/releases/tag/v1.3.1) (from [1.1.0](https://github.com/oneblink/cli/releases/tag/1.1.0))

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.13 (from 7.3.12)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [5.57.1](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [5.40.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [5.57.1](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [5.40.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.40.0))

- update [babel-loader](https://www.npmjs.com/package/babel-loader) to [9.1.2](https://github.com/babel/babel-loader/releases/tag/v9.1.2) (from [8.2.5](https://github.com/babel/babel-loader/releases/tag/v8.2.5))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.30.0](https://github.com/zloirock/core-js/releases/tag/v3.30.0) (from [3.25.5](https://github.com/zloirock/core-js/releases/tag/v3.25.5))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [6.7.3](https://github.com/webpack-contrib/css-loader/releases/tag/v6.7.3) (from [6.7.1](https://github.com/webpack-contrib/css-loader/releases/tag/v6.7.1))

- update [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) to 0.13.11 (from 0.13.9)

- update [sass](https://www.npmjs.com/package/sass) to [1.60.0](https://github.com/sass/dart-sass/releases/tag/1.60.0) (from [1.55.0](https://github.com/sass/dart-sass/releases/tag/1.55.0))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [13.2.2](https://github.com/webpack-contrib/sass-loader/releases/tag/v13.2.2) (from [13.1.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v13.1.0))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.3.2](https://github.com/webpack-contrib/style-loader/releases/tag/v3.3.2) (from [3.3.1](https://github.com/webpack-contrib/style-loader/releases/tag/v3.3.1))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.4.2](https://github.com/TypeStrong/ts-loader/releases/tag/v9.4.2) (from [9.4.1](https://github.com/TypeStrong/ts-loader/releases/tag/9.4.1))

- update [typescript](https://www.npmjs.com/package/typescript) to 5.0.3 (from 4.8.4)

- update [webpack](https://www.npmjs.com/package/webpack) to 5.77.0 (from 5.74.0)

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [5.0.1](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.10.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.3.4] - 2023-04-02

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.10.0-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.9.0-beta.9](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.3] - 2023-03-26

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.9.0-beta.9](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.8.0-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.2] - 2023-03-13

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.0.4](https://github.com/oneblink/apps/releases/tag/v3.0.4) (from [3.0.3](https://github.com/oneblink/apps/releases/tag/v3.0.3))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.8.0-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.7.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.1] - 2023-03-03

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.7.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.6.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.3.0] - 2023-02-16

### Added

- `renderPaymentReceipt()` function

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.0.3](https://github.com/oneblink/apps/releases/tag/v3.0.3) (from [3.0.2-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.6.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.5.1-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.48] - 2022-12-12

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.0.2-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [3.0.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.5.1-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.5.0-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.47] - 2022-11-24

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.5.0-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [2.4.0](https://github.com/oneblink/apps-react/releases/tag/v2.4.0))

## [1.2.46] - 2022-10-26

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.0.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [3.0.0](https://github.com/oneblink/apps/releases/tag/v3.0.0))

## [1.2.45] - 2022-10-19

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.4.0](https://github.com/oneblink/apps-react/releases/tag/v2.4.0) (from [2.3.0](https://github.com/oneblink/apps-react/releases/tag/v2.3.0))

## [1.2.44] - 2022-10-19

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.19.3](https://github.com/babel/babel/releases/tag/v7.19.3) (from [7.18.0](https://github.com/babel/babel/releases/tag/v7.18.0))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.19.4](https://github.com/babel/babel/releases/tag/v7.19.4) (from [7.18.0](https://github.com/babel/babel/releases/tag/v7.18.0))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.18.6](https://github.com/babel/babel/releases/tag/v7.18.6) (from [7.17.12](https://github.com/babel/babel/releases/tag/v7.17.12))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [3.0.0](https://github.com/oneblink/apps/releases/tag/v3.0.0) (from [2.1.0](https://github.com/oneblink/apps/releases/tag/v2.1.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.3.0](https://github.com/oneblink/apps-react/releases/tag/v2.3.0) (from [2.1.0](https://github.com/oneblink/apps-react/releases/tag/v2.1.0))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [1.1.0](https://github.com/oneblink/cli/releases/tag/1.1.0) (from [0.3.0](https://github.com/oneblink/cli/releases/tag/v0.3.0))

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.12 (from 7.3.9)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [5.40.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [5.26.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [5.40.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.40.0) (from [5.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.26.0))

- update [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) to 1.7.5 (from 1.7.3)

- update [clsx](https://www.npmjs.com/package/clsx) to [1.2.1](https://github.com/lukeed/clsx/releases/tag/v1.2.1) (from [1.1.1](https://github.com/lukeed/clsx/releases/tag/v1.1.1))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.25.5](https://github.com/zloirock/core-js/releases/tag/v3.25.5) (from [3.22.7](https://github.com/zloirock/core-js/releases/tag/v3.22.7))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [16.0.3](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [16.0.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin) to 2.0.1 (from 1.1.4)

- update [sass](https://www.npmjs.com/package/sass) to [1.55.0](https://github.com/sass/dart-sass/releases/tag/1.55.0) (from [1.52.1](https://github.com/sass/dart-sass/releases/tag/1.52.1))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [13.1.0](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md) (from [13.0.0](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md))

- update [semver](https://www.npmjs.com/package/semver) to [7.3.8](https://github.com/npm/node-semver/blob/master/CHANGELOG.md) (from [7.3.7](https://github.com/npm/node-semver/blob/master/CHANGELOG.md))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.4.1](https://github.com/TypeStrong/ts-loader/releases/tag/9.4.1) (from [9.3.0](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md))

- update [ts-node](https://www.npmjs.com/package/ts-node) to 10.9.1 (from [10.8.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.8.0))

- update [typescript](https://www.npmjs.com/package/typescript) to 4.8.4 (from 4.7.2)

- update [webpack](https://www.npmjs.com/package/webpack) to 5.74.0 (from 5.72.1)

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [4.10.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.9.2](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.2.43] - 2022-09-13

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [2.1.0](https://github.com/oneblink/apps/releases/tag/v2.1.0) (from [2.0.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [2.1.0](https://github.com/oneblink/apps-react/releases/tag/v2.1.0) (from [2.0.0-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.42] - 2022-08-29

### Dependencies

- update @oneblink/apps to 2.0.0-beta.1 (from [1.2.6](https://github.com/oneblink/apps/releases/tag/v1.2.6))

- update @oneblink/apps-react to 2.0.0-beta.1 (from [1.2.5](https://github.com/oneblink/apps-react/releases/tag/v1.2.5))

## [1.2.41] - 2022-08-16

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.2.6](https://github.com/oneblink/apps/releases/tag/v1.2.6) (from [1.2.5](https://github.com/oneblink/apps/releases/tag/v1.2.5))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.2.5](https://github.com/oneblink/apps-react/releases/tag/v1.2.5) (from [1.2.4](https://github.com/oneblink/apps-react/releases/tag/v1.2.4))

## [1.2.40] - 2022-07-29

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.2.5](https://github.com/oneblink/apps/releases/tag/v1.2.5) (from [1.2.4](https://github.com/oneblink/apps/releases/tag/v1.2.4))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.2.4](https://github.com/oneblink/apps-react/releases/tag/v1.2.4) (from [1.2.3](https://github.com/oneblink/apps-react/releases/tag/v1.2.3))

## [1.2.39] - 2022-07-10

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.2.4](https://github.com/oneblink/apps/releases/tag/v1.2.4) (from [1.2.1](https://github.com/oneblink/apps/releases/tag/v1.2.1))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.2.3](https://github.com/oneblink/apps-react/releases/tag/v1.2.3) (from [1.2.1](https://github.com/oneblink/apps-react/releases/tag/v1.2.1))

## [1.2.38] - 2022-06-17

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.2.1](https://github.com/oneblink/apps/releases/tag/v1.2.1) (from [1.2.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.2.1](https://github.com/oneblink/apps-react/releases/tag/v1.2.1) (from [1.2.0-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.37] - 2022-06-02

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.2.0-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [1.1.0](https://github.com/oneblink/apps/releases/tag/v1.1.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.2.0-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [1.1.1](https://github.com/oneblink/apps-react/releases/tag/v1.1.1))

## [1.2.36] - 2022-05-31

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.18.0](https://github.com/babel/babel/releases/tag/v7.18.0) (from [7.17.10](https://github.com/babel/babel/releases/tag/v7.17.10))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.18.0](https://github.com/babel/babel/releases/tag/v7.18.0) (from [7.17.10](https://github.com/babel/babel/releases/tag/v7.17.10))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.17.12](https://github.com/babel/babel/releases/tag/v7.17.12) (from [7.16.7](https://github.com/babel/babel/releases/tag/v7.16.7))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.1.0](https://github.com/oneblink/apps/releases/tag/v1.1.0) (from [1.0.0](https://github.com/oneblink/apps/releases/tag/v1.0.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.1.1](https://github.com/oneblink/apps-react/releases/tag/v1.1.1) (from [1.0.0](https://github.com/oneblink/apps-react/releases/tag/v1.0.0))

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [5.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.26.0) (from [5.22.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.22.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [5.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.26.0) (from [5.22.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.22.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.22.7](https://github.com/zloirock/core-js/releases/tag/v3.22.7) (from [3.22.4](https://github.com/zloirock/core-js/releases/tag/v3.22.4))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [16.0.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [16.0.0](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [sass](https://www.npmjs.com/package/sass) to [1.52.1](https://github.com/sass/dart-sass/releases/tag/1.52.1) (from [1.51.0](https://github.com/sass/dart-sass/releases/tag/1.51.0))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [13.0.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v13.0.0) (from [12.6.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v12.6.0))

- update [ts-node](https://www.npmjs.com/package/ts-node) to [10.8.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.8.0) (from [10.7.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.7.0))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.7.2](https://github.com/microsoft/TypeScript/releases/tag/v4.7.2) (from [4.6.4](https://github.com/microsoft/TypeScript/releases/tag/v4.6.4))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.72.1](https://github.com/webpack/webpack/releases/tag/v5.72.1) (from [5.72.0](https://github.com/webpack/webpack/releases/tag/v5.72.0))

## [1.2.35] - 2022-05-03

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.17.10](https://github.com/babel/babel/releases/tag/v7.17.10) (from [7.17.9](https://github.com/babel/babel/releases/tag/v7.17.9))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.17.10](https://github.com/babel/babel/releases/tag/v7.17.10) (from [7.16.11](https://github.com/babel/babel/releases/tag/v7.16.11))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [1.0.0](https://github.com/oneblink/apps/releases/tag/v1.0.0) (from [0.12.11](https://github.com/oneblink/apps/releases/tag/v0.12.11))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [1.0.0](https://github.com/oneblink/apps-react/releases/tag/v1.0.0) (from [0.6.2](https://github.com/oneblink/apps-react/releases/tag/v0.6.2))

- no longer depend upon [@types/node](https://www.npmjs.com/package/@types/node)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [5.22.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.22.0) (from [5.20.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.20.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [5.22.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.22.0) (from [5.20.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.20.0))

- update [babel-loader](https://www.npmjs.com/package/babel-loader) to [8.2.5](https://github.com/babel/babel-loader/releases/tag/v8.2.5) (from [8.2.4](https://github.com/babel/babel-loader/releases/tag/v8.2.4))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.22.4](https://github.com/zloirock/core-js/releases/tag/v3.22.4) (from [3.22.0](https://github.com/zloirock/core-js/releases/tag/v3.22.0))

- update [sass](https://www.npmjs.com/package/sass) to [1.51.0](https://github.com/sass/dart-sass/releases/tag/1.51.0) (from [1.50.1](https://github.com/sass/dart-sass/releases/tag/1.50.1))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.3.0](https://github.com/TypeStrong/ts-loader/releases/tag/v9.3.0) (from [9.2.8](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.8))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.6.4](https://github.com/microsoft/TypeScript/releases/tag/v4.6.4) (from [4.6.3](https://github.com/microsoft/TypeScript/releases/tag/v4.6.3))

## [1.2.34] - 2022-04-19

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.11-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.12.10](https://github.com/oneblink/apps/releases/tag/v0.12.10))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.6.2-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.6.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.33] - 2022-04-13

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.17.9](https://github.com/babel/babel/releases/tag/v7.17.9) (from [7.15.5](https://github.com/babel/babel/releases/tag/v7.15.5))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.16.11](https://github.com/babel/babel/releases/tag/v7.16.11) (from [7.15.6](https://github.com/babel/babel/releases/tag/v7.15.6))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.16.7](https://github.com/babel/babel/releases/tag/v7.16.7) (from [7.14.5](https://github.com/babel/babel/releases/tag/v7.14.5))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.10](https://github.com/oneblink/apps/releases/tag/v0.12.10) (from [0.12.7](https://github.com/oneblink/apps/releases/tag/v0.12.7))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.6.1](https://github.com/oneblink/apps-react/releases/tag/v0.6.1) (from [0.5.7-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [0.3.0](https://github.com/oneblink/cli/releases/tag/v0.3.0) (from [0.2.2](https://github.com/oneblink/cli/releases/tag/v0.2.2))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 17.0.23 (from 16.9.6)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.43 (from 17.0.24)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.14 (from 17.0.9)

- update [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom) to 5.3.3 (from 5.3.0)

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.9 (from 7.3.8)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [5.19.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.19.0) (from [5.4.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.4.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [5.19.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.19.0) (from [5.4.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.4.0))

- update [babel-loader](https://www.npmjs.com/package/babel-loader) to [8.2.4](https://github.com/babel/babel-loader/releases/tag/v8.2.4) (from [8.2.2](https://github.com/babel/babel-loader/blob/master/CHANGELOG.md))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.21.1](https://github.com/zloirock/core-js/releases/tag/v3.21.1) (from [3.18.0](https://github.com/zloirock/core-js/releases/tag/v3.18.0))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [6.7.1](https://github.com/webpack-contrib/css-loader/releases/tag/v6.7.1) (from [6.3.0](https://github.com/webpack-contrib/css-loader/releases/tag/v6.3.0))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [16.0.0](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [10.0.0](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [sass](https://www.npmjs.com/package/sass) to [1.50.0](https://github.com/sass/dart-sass/releases/tag/1.50.0) (from [1.42.1](https://github.com/sass/dart-sass/releases/tag/1.42.1))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [12.6.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v12.6.0) (from [12.1.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v12.1.0))

- update [semver](https://www.npmjs.com/package/semver) to [7.3.7](https://github.com/npm/node-semver/releases/tag/v7.3.7) (from [7.3.5](https://github.com/npm/node-semver/blob/master/CHANGELOG.md))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.3.1](https://github.com/webpack-contrib/style-loader/releases/tag/v3.3.1) (from [3.3.0](https://github.com/webpack-contrib/style-loader/releases/tag/v3.3.0))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.2.8](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.8) (from [9.2.6](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.6))

- update [ts-node](https://www.npmjs.com/package/ts-node) to [10.7.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.7.0) (from [10.2.1](https://github.com/TypeStrong/ts-node/releases/tag/v10.2.1))

- update typescript to [4.6.3](https://github.com/microsoft/TypeScript/releases/tag/v4.6.3) (from [4.4.3](https://github.com/microsoft/TypeScript/releases/tag/v4.4.3))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.72.0](https://github.com/webpack/webpack/releases/tag/v5.72.0) (from [5.53.0](https://github.com/webpack/webpack/releases/tag/v5.53.0))

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [4.9.2](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.8.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.2.32] - 2022-01-27

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.7-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.5.6-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.31] - 2022-01-24

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.7](https://github.com/oneblink/apps/releases/tag/v0.12.7) (from [0.12.6-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

## [1.2.30] - 2022-01-19

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.6-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.12.5-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.6-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.5.5-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.29] - 2021-12-21

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.5-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.12.4-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.5-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.5.4-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.28] - 2021-12-09

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.4-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.5.3](https://github.com/oneblink/apps-react/releases/tag/v0.5.3))

## [1.2.27] - 2021-12-06

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.3](https://github.com/oneblink/apps-react/releases/tag/v0.5.3) (from [0.5.2-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.26] - 2021-12-02

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.2-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.5.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))
- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.4-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.12.0](https://github.com/oneblink/apps/releases/tag/v0.12.0))

## [1.2.25] - 2021-11-24

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.1-beta.4](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.5.0](https://github.com/oneblink/apps-react/releases/tag/v0.5.0))

## [1.2.24] - 2021-11-15

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.12.0](https://github.com/oneblink/apps/releases/tag/v0.12.0) (from [0.11.7](https://github.com/oneblink/apps/releases/tag/v0.11.7))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.5.0](https://github.com/oneblink/apps-react/releases/tag/v0.5.0) (from [0.4.20-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [5.4.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.4.0) (from [4.31.2](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.2))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [5.4.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.4.0) (from [4.31.2](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.2))

## [1.2.23] - 2021-11-01

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.7](https://github.com/oneblink/apps/releases/tag/v0.11.7) (from [0.11.6](https://github.com/oneblink/apps/releases/tag/v0.11.6))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.20-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.19-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.22] - 2021-10-19

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.19-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.18-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.21] - 2021-10-15

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.19-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.17](https://github.com/oneblink/apps-react/releases/tag/v0.4.17))

## [1.2.20] - 2021-09-24

### Dependencies

- update [@oneblink/types](https://github.com/oneblink/types)

## [1.2.19] - 2021-09-24

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.6](https://github.com/oneblink/apps/releases/tag/v0.11.6) (from [0.11.5](https://github.com/oneblink/apps/releases/tag/v0.11.5))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.17](https://github.com/oneblink/apps-react/releases/tag/v0.4.17) (from [0.4.16](https://github.com/oneblink/apps-react/releases/tag/v0.4.16))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 16.9.6 (from 16.9.4)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.24 (from 17.0.21)

- update [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom) to 5.3.0 (from 5.1.9)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.31.2](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.2) (from [4.31.1](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.1))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.31.2](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.2) (from [4.31.1](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.1))

- update [sass](https://www.npmjs.com/package/sass) to [1.42.1](https://github.com/sass/dart-sass/releases/tag/1.42.1) (from [1.41.1](https://github.com/sass/dart-sass/releases/tag/1.41.1))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.3.0](https://github.com/webpack-contrib/style-loader/releases/tag/v3.3.0) (from [3.2.1](https://github.com/webpack-contrib/style-loader/releases/tag/v3.2.1))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.2.6](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.6) (from [9.2.5](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.5))

## [1.2.18] - 2021-09-20

### Dependencies

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.15.6](https://github.com/babel/babel/releases/tag/v7.15.6) (from [7.15.4](https://github.com/babel/babel/releases/tag/v7.15.4))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.5](https://github.com/oneblink/apps/releases/tag/v0.11.5) (from [0.11.4](https://github.com/oneblink/apps/releases/tag/v0.11.4))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.16](https://github.com/oneblink/apps-react/releases/tag/v0.4.16) (from [0.4.15](https://github.com/oneblink/apps-react/releases/tag/v0.4.15))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [0.2.2](https://github.com/oneblink/cli/releases/tag/v0.2.2) (from [0.2.1](https://github.com/oneblink/cli/releases/tag/v0.2.1))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 16.9.4 (from 16.7.13)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.21 (from 17.0.20)

- update [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom) to 5.1.9 (from 5.1.8)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.31.1](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.1) (from [4.31.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.31.1](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.1) (from [4.31.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.18.0](https://github.com/zloirock/core-js/releases/tag/v3.18.0) (from [3.17.2](https://github.com/zloirock/core-js/releases/tag/v3.17.2))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [6.3.0](https://github.com/webpack-contrib/css-loader/releases/tag/v6.3.0) (from [6.2.0](https://github.com/webpack-contrib/css-loader/releases/tag/v6.2.0))

- update [sass](https://www.npmjs.com/package/sass) to [1.41.1](https://github.com/sass/dart-sass/releases/tag/1.41.1) (from [1.39.0](https://github.com/sass/dart-sass/releases/tag/1.39.0))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.4.3](https://github.com/microsoft/TypeScript/releases/tag/v4.4.3) (from [4.4.2](https://github.com/microsoft/TypeScript/releases/tag/v4.4.2))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.53.0](https://github.com/webpack/webpack/releases/tag/v5.53.0) (from [5.52.0](https://github.com/webpack/webpack/releases/tag/v5.52.0))

## [1.2.17] - 2021-09-09

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.15](https://github.com/oneblink/apps-react/releases/tag/v0.4.15) (from [0.4.14](https://github.com/oneblink/apps-react/releases/tag/v0.4.14))

## [1.2.16] - 2021-09-08

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.15.5](https://github.com/babel/babel/releases/tag/v7.15.5) (from [7.15.0](https://github.com/babel/babel/releases/tag/v7.15.0))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.15.4](https://github.com/babel/babel/releases/tag/v7.15.4) (from [7.15.0](https://github.com/babel/babel/releases/tag/v7.15.0))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.4](https://github.com/oneblink/apps/releases/tag/v0.11.4) (from [0.11.3-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.14](https://github.com/oneblink/apps-react/releases/tag/v0.4.14) (from [0.4.13-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 16.7.13 (from 16.7.2)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.20 (from 17.0.19)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.31.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.0) (from [4.29.3](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.29.3))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.31.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.31.0) (from [4.29.3](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.29.3))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.17.2](https://github.com/zloirock/core-js/releases/tag/v3.17.2) (from [3.16.3](https://github.com/zloirock/core-js/releases/tag/v3.16.3))

- update [react-router-dom](https://www.npmjs.com/package/react-router-dom) to [5.3.0](https://github.com/remix-run/react-router/releases/tag/v5.3.0) (from [5.2.0](https://github.com/remix-run/react-router/releases/tag/v5.2.0))

- update [sass](https://www.npmjs.com/package/sass) to [1.39.0](https://github.com/sass/dart-sass/releases/tag/1.39.0) (from [1.38.1](https://github.com/sass/dart-sass/releases/tag/1.38.1))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.4.2](https://github.com/microsoft/TypeScript/releases/tag/v4.4.2) (from [4.3.5](https://github.com/microsoft/TypeScript/releases/tag/v4.3.5))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.52.0](https://github.com/webpack/webpack/releases/tag/v5.52.0) (from [5.51.1](https://github.com/webpack/webpack/releases/tag/v5.51.1))

## [1.2.15] - 2021-09-01

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.3-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.11.2-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.13-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.12](https://github.com/oneblink/apps-react/releases/tag/v0.4.12))

## [1.2.14] - 2021-08-31

### Fixed

- post build script using invalid typescript

## [1.2.13] - 2021-08-31

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.15.0](https://github.com/babel/babel/releases/tag/v7.15.0) (from [7.14.6](https://github.com/babel/babel/releases/tag/v7.14.6))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.15.0](https://github.com/babel/babel/releases/tag/v7.15.0) (from [7.14.7](https://github.com/babel/babel/releases/tag/v7.14.7))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.2-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.11.0-beta.3](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.12](https://github.com/oneblink/apps-react/releases/tag/v0.4.12) (from [0.4.11](https://github.com/oneblink/apps-react/releases/tag/v0.4.11))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [0.2.1](https://github.com/oneblink/cli/releases/tag/v0.2.1) (from [0.2.0](https://github.com/oneblink/cli/releases/tag/v0.2.0))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 16.7.2 (from 16.3.3)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.19 (from 17.0.14)

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.8 (from 7.3.7)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.29.3](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.29.3) (from [4.28.4](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.28.4))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.29.3](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.29.3) (from [4.28.4](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.28.4))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.16.3](https://github.com/zloirock/core-js/releases/tag/v3.16.3) (from [3.15.2](https://github.com/zloirock/core-js/releases/tag/v3.15.2))

- update [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) to 0.13.9 (from 0.13.7)

- update [sass](https://www.npmjs.com/package/sass) to [1.38.1](https://github.com/sass/dart-sass/releases/tag/1.38.1) (from [1.35.2](https://github.com/sass/dart-sass/releases/tag/1.35.2))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.2.1](https://github.com/webpack-contrib/style-loader/releases/tag/v3.2.1) (from [3.1.0](https://github.com/webpack-contrib/style-loader/releases/tag/v3.1.0))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.2.5](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.5) (from [9.2.3](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.3))

- update [ts-node](https://www.npmjs.com/package/ts-node) to [10.2.1](https://github.com/TypeStrong/ts-node/releases/tag/v10.2.1) (from [10.1.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.1.0))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.51.1](https://github.com/webpack/webpack/releases/tag/v5.51.1) (from [5.45.1](https://github.com/webpack/webpack/releases/tag/v5.45.1))

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [4.8.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.7.2](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.2.12] - 2021-08-23

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.11.0-beta.3](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.10.1](https://github.com/oneblink/apps/releases/tag/v0.10.1))

## [1.2.11] - 2021-08-12

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.10.1](https://github.com/oneblink/apps/releases/tag/v0.10.1) (from [0.10.0](https://github.com/oneblink/apps/releases/tag/v0.10.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.11](https://github.com/oneblink/apps-react/releases/tag/v0.4.11) (from [0.4.10-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.10] - 2021-08-04

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.10-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.9-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.9] - 2021-08-03

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.9-beta.2](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.8](https://github.com/oneblink/apps-react/releases/tag/v0.4.8))

## [1.2.8] - 2021-07-20

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.10.0](https://github.com/oneblink/apps/releases/tag/v0.10.0) (from [0.9.3-beta.6](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.8](https://github.com/oneblink/apps-react/releases/tag/v0.4.8) (from [0.4.4-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 16.3.3 (from 15.14.2)

- update [css-loader](https://www.npmjs.com/package/css-loader) to [6.2.0](https://github.com/webpack-contrib/css-loader/releases/tag/v6.2.0) (from [5.2.7](https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.7))

- update [style-loader](https://www.npmjs.com/package/style-loader) to [3.1.0](https://github.com/webpack-contrib/style-loader/releases/tag/v3.1.0) (from [2.0.0](https://github.com/webpack-contrib/style-loader/releases/tag/v2.0.0))

## [1.2.7] - 2021-07-20

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.14.6](https://github.com/babel/babel/releases/tag/v7.14.6) (from [7.14.3](https://github.com/babel/babel/releases/tag/v7.14.3))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.14.7](https://github.com/babel/babel/releases/tag/v7.14.7) (from [7.14.4](https://github.com/babel/babel/releases/tag/v7.14.4))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.14.5](https://github.com/babel/babel/releases/tag/v7.14.5) (from [7.13.13](https://github.com/babel/babel/releases/tag/v7.13.13))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 15.14.2 (from 15.12.1)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.14 (from 17.0.9)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.9 (from 17.0.6)

- update [@types/react-router-dom](https://www.npmjs.com/package/@types/react-router-dom) to 5.1.8 (from 5.1.5)

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.7 (from 7.3.6)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.28.4](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.28.4) (from [4.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.26.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.28.4](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.28.4) (from [4.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.26.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.15.2](https://github.com/zloirock/core-js/releases/tag/v3.15.2) (from [3.14.0](https://github.com/zloirock/core-js/releases/tag/v3.14.0))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [5.2.7](https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.7) (from [5.2.6](https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.6))

- update [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin) to [1.1.4](https://github.com/Richienb/node-polyfill-webpack-plugin/releases/tag/v1.1.4) (from [1.1.2](https://github.com/Richienb/node-polyfill-webpack-plugin/releases/tag/v1.1.2))

- update [sass](https://www.npmjs.com/package/sass) to [1.35.2](https://github.com/sass/dart-sass/releases/tag/1.35.2) (from [1.34.1](https://github.com/sass/dart-sass/releases/tag/1.34.1))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [12.1.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v12.1.0) (from [12.0.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v12.0.0))

- update [ts-node](https://www.npmjs.com/package/ts-node) to [10.1.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.1.0) (from [10.0.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.0.0))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.3.5](https://github.com/microsoft/TypeScript/releases/tag/v4.3.5) (from [4.3.2](https://github.com/microsoft/TypeScript/releases/tag/v4.3.2))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.45.1](https://github.com/webpack/webpack/releases/tag/v5.45.1) (from [5.38.1](https://github.com/webpack/webpack/releases/tag/v5.38.1))

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [4.7.2](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.7.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.2.6] - 2021-06-30

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.4-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.1-beta.20](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.5] - 2021-06-23

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.9.3-beta.6](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.9.2](https://github.com/oneblink/apps/releases/tag/v0.9.2))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.1-beta.20](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.4.0](https://github.com/oneblink/apps-react/releases/tag/v0.4.0))

## [1.2.4] - 2021-06-06

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.14.3](https://github.com/babel/babel/releases/tag/v7.14.3) (from [7.14.2](https://github.com/babel/babel/releases/tag/v7.14.2))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.14.4](https://github.com/babel/babel/releases/tag/v7.14.4) (from [7.14.2](https://github.com/babel/babel/releases/tag/v7.14.2))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.9.2](https://github.com/oneblink/apps/releases/tag/v0.9.2) (from [0.9.0](https://github.com/oneblink/apps/releases/tag/v0.9.0))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.4.0](https://github.com/oneblink/apps-react/releases/tag/v0.4.0) (from [0.3.3-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [0.2.0](https://github.com/oneblink/cli/releases/tag/v0.2.0) (from [0.1.13](https://github.com/oneblink/cli/releases/tag/v0.1.13))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 15.12.1 (from 15.3.0)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.9 (from 17.0.5)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.6 (from 17.0.5)

- update [@types/react-loader-spinner](https://www.npmjs.com/package/@types/react-loader-spinner) to 4.0.0 (from 3.1.0)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.26.0) (from [4.23.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.23.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.26.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.26.0) (from [4.23.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.23.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.14.0](https://github.com/zloirock/core-js/releases/tag/v3.14.0) (from [3.12.1](https://github.com/zloirock/core-js/releases/tag/v3.12.1))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [5.2.6](https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.6) (from [5.2.4](https://github.com/webpack-contrib/css-loader/releases/tag/v5.2.4))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [10.0.0](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [9.0.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [sass](https://www.npmjs.com/package/sass) to [1.34.1](https://github.com/sass/dart-sass/releases/tag/1.34.1) (from [1.32.13](https://github.com/sass/dart-sass/releases/tag/1.32.13))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [12.0.0](https://github.com/webpack-contrib/sass-loader/releases/tag/v12.0.0) (from [11.1.1](https://github.com/webpack-contrib/sass-loader/releases/tag/v11.1.1))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.2.3](https://github.com/TypeStrong/ts-loader/releases/tag/v9.2.3) (from [9.1.2](https://github.com/TypeStrong/ts-loader/releases/tag/v9.1.2))

- update [ts-node](https://www.npmjs.com/package/ts-node) to [10.0.0](https://github.com/TypeStrong/ts-node/releases/tag/v10.0.0) (from [9.1.1](https://github.com/TypeStrong/ts-node/releases/tag/v9.1.1))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.3.2](https://github.com/microsoft/TypeScript/releases/tag/v4.3.2) (from [4.2.4](https://github.com/microsoft/TypeScript/releases/tag/v4.2.4))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.38.1](https://github.com/webpack/webpack/releases/tag/v5.38.1) (from [5.37.0](https://github.com/webpack/webpack/releases/tag/v5.37.0))

## [1.2.3] - 2021-06-02

### Added

- Setting of `buttons` for `OneBlinkForm`

### Dependencies

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.3.3-beta.6](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.3.2](https://github.com/oneblink/apps-react/releases/tag/v0.3.2))

## [1.2.2] - 2021-05-26

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.9.0](https://github.com/oneblink/apps/releases/tag/v0.9.0) (from [0.8.2-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.3.2](https://github.com/oneblink/apps-react/releases/tag/v0.3.2) (from [0.3.1-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.2.1] - 2021-05-19

### Fixed

- reCAPTCHA to be automatic instead of requiring a site key passed as parameter

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.14.2](https://github.com/babel/babel/releases/tag/v7.14.2) (from [7.13.16](https://github.com/babel/babel/releases/tag/v7.13.16))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.14.2](https://github.com/babel/babel/releases/tag/v7.14.2) (from [7.13.15](https://github.com/babel/babel/releases/tag/v7.13.15))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.8.2-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.8.1](https://github.com/oneblink/apps/releases/tag/v0.8.1))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.3.1-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.3.0](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 15.3.0 (from 15.0.1)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.5 (from 17.0.4)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.5 (from 17.0.3)

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.6 (from 7.3.5)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.23.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [4.22.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.23.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [4.22.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [abortcontroller-polyfill](https://www.npmjs.com/package/abortcontroller-polyfill) to 1.7.3 (from 1.7.1)

- update [core-js](https://www.npmjs.com/package/core-js) to [3.12.1](https://github.com/zloirock/core-js/blob/master/CHANGELOG.md) (from [3.11.0](https://github.com/zloirock/core-js/releases/tag/v3.11.0))

- update [dotenv](https://www.npmjs.com/package/dotenv) to [9.0.1](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md) (from [8.2.0](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md))

- update [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin) to 1.1.2 (from 1.1.0)

- update [sass](https://www.npmjs.com/package/sass) to [1.32.13](https://github.com/sass/dart-sass/releases/tag/1.32.13) (from [1.32.11](https://github.com/sass/dart-sass/releases/tag/1.32.11))

- update [sass-loader](https://www.npmjs.com/package/sass-loader) to [11.1.1](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md) (from [11.0.1](https://github.com/webpack-contrib/sass-loader/blob/master/CHANGELOG.md))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.1.2](https://github.com/TypeStrong/ts-loader/releases/tag/v9.1.2) (from [9.1.1](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md))

- update [webpack](https://www.npmjs.com/package/webpack) to 5.37.0 (from 5.36.0)

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [4.7.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.6.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.2.0] - 2021-05-13

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.13.16](https://github.com/babel/babel/releases/tag/v7.13.16) (from [7.13.10](https://github.com/babel/babel/releases/tag/v7.13.10))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.13.15](https://github.com/babel/babel/releases/tag/v7.13.15) (from [7.13.10](https://github.com/babel/babel/releases/tag/v7.13.10))

- update [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) to [7.13.13](https://github.com/babel/babel/releases/tag/v7.13.13) (from [7.12.13](https://github.com/babel/babel/releases/tag/v7.12.13))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.8.1](https://github.com/oneblink/apps/releases/tag/v0.8.1) (from [0.7.2-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.3.0](https://github.com/oneblink/apps-react/releases/tag/v0.3.0) (from [0.2.3-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [0.1.13](https://github.com/oneblink/cli/releases/tag/v0.1.13) (from [0.1.10](https://github.com/oneblink/cli/releases/tag/v0.1.10))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 15.0.1 (from 14.14.35)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.4 (from 17.0.3)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.3 (from 17.0.2)

- update [@types/semver](https://www.npmjs.com/package/@types/semver) to 7.3.5 (from 7.3.4)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.22.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [4.18.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.22.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.22.0) (from [4.18.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.18.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.11.0](https://github.com/zloirock/core-js/blob/master/CHANGELOG.md) (from [3.9.1](https://github.com/zloirock/core-js/blob/master/CHANGELOG.md))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [5.2.4](https://github.com/webpack-contrib/css-loader/blob/master/CHANGELOG.md) (from [5.1.3](https://github.com/webpack-contrib/css-loader/blob/master/CHANGELOG.md))

- update [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin) to [1.1.0](https://github.com/Richienb/node-polyfill-webpack-plugin/releases/tag/v1.1.0) (from 1.0.3)

- update [react](https://www.npmjs.com/package/react) to [17.0.2](https://github.com/facebook/react/blob/master/CHANGELOG.md) (from [17.0.1](https://github.com/facebook/react/blob/master/CHANGELOG.md))

- update [react-dom](https://www.npmjs.com/package/react-dom) to [17.0.2](https://github.com/facebook/react/blob/master/CHANGELOG.md) (from [17.0.1](https://github.com/facebook/react/blob/master/CHANGELOG.md))

- update [sass](https://www.npmjs.com/package/sass) to [1.32.11](https://github.com/sass/dart-sass/releases/tag/1.32.11) (from [1.32.8](https://github.com/sass/dart-sass/releases/tag/1.32.8))

- update [semver](https://www.npmjs.com/package/semver) to [7.3.5](https://github.com/npm/node-semver/blob/master/CHANGELOG.md) (from [7.3.4](https://github.com/npm/node-semver/blob/master/CHANGELOG.md))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [9.1.1](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md) (from [8.0.18](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md))

- update [typescript](https://www.npmjs.com/package/typescript) to 4.2.4 (from 4.2.3)

- update [webpack](https://www.npmjs.com/package/webpack) to 5.36.0 (from 5.26.3)

- update [webpack-cli](https://www.npmjs.com/package/webpack-cli) to [4.6.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md) (from [4.5.0](https://github.com/webpack/webpack-cli/blob/master/CHANGELOG.md))

## [1.1.2] - 2021-04-15

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.7.2-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.7.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.2.3-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.2.2-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.1.1] - 2021-03-31

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.7.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.6.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.2.2-beta.1](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.2.1-beta.7](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

## [1.1.0] - 2021-03-23

### Dependencies

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.6.1-beta.1](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.6.0-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.2.1-beta.7](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.2.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 14.14.35 (from 14.14.33)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.18.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.18.0) (from [4.17.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.17.0))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.18.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.18.0) (from [4.17.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.17.0))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [5.1.3](https://github.com/webpack-contrib/css-loader/releases/tag/v5.1.3) (from [5.1.2](https://github.com/webpack-contrib/css-loader/releases/tag/v5.1.2))

- update [webpack](https://www.npmjs.com/package/webpack) to [5.26.3](https://github.com/webpack/webpack/releases/tag/v5.26.3) (from [5.24.4](https://github.com/webpack/webpack/releases/tag/v5.24.4))

- depend upon [dotenv](https://www.npmjs.com/package/dotenv) [8.2.0](https://github.com/motdotla/dotenv/blob/master/CHANGELOG.md)

## [1.0.0] - 2020-03-17

### Dependencies

- update [@babel/core](https://www.npmjs.com/package/@babel/core) to [7.13.10](https://github.com/babel/babel/releases/tag/v7.13.10) (from [7.12.13](https://github.com/babel/babel/releases/tag/v7.12.13))

- update [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) to [7.13.10](https://github.com/babel/babel/releases/tag/v7.13.10) (from [7.12.13](https://github.com/babel/babel/releases/tag/v7.12.13))

- update [@oneblink/apps](https://www.npmjs.com/package/@oneblink/apps) to [0.6.0-beta.5](https://github.com/oneblink/apps/blob/master/CHANGELOG.md) (from [0.5.2-beta.2](https://github.com/oneblink/apps/blob/master/CHANGELOG.md))

- update [@oneblink/apps-react](https://www.npmjs.com/package/@oneblink/apps-react) to [0.2.0-beta.5](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md) (from [0.1.11-beta.3](https://github.com/oneblink/apps-react/blob/master/CHANGELOG.md))

- update [@oneblink/cli](https://www.npmjs.com/package/@oneblink/cli) to [0.1.10](https://github.com/oneblink/cli/releases/tag/v0.1.10) (from [0.1.9](https://github.com/oneblink/cli/releases/tag/v0.1.9))

- update [@types/node](https://www.npmjs.com/package/@types/node) to 14.14.33 (from 14.14.26)

- update [@types/react](https://www.npmjs.com/package/@types/react) to 17.0.3 (from 17.0.1)

- update [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to 17.0.2 (from 17.0.0)

- update [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) to [4.17.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md) (from [4.15.0](https://github.com/typescript-eslint/typescript-eslint/blob/master/CHANGELOG.md))

- update [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) to [4.17.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.17.0) (from [4.15.0](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v4.15.0))

- update [core-js](https://www.npmjs.com/package/core-js) to [3.9.1](https://github.com/zloirock/core-js/releases/tag/v3.9.1) (from [3.8.3](https://github.com/zloirock/core-js/releases/tag/v3.8.3))

- update [css-loader](https://www.npmjs.com/package/css-loader) to [5.1.2](https://github.com/webpack-contrib/css-loader/releases/tag/v5.1.2) (from [5.0.1](https://github.com/webpack-contrib/css-loader/releases/tag/v5.0.1))

- update [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin) to [1.0.3](https://github.com/Richienb/node-polyfill-webpack-plugin/releases/tag/v1.0.3) (from [1.0.2](https://github.com/Richienb/node-polyfill-webpack-plugin/releases/tag/v1.0.2))

- update [sass](https://www.npmjs.com/package/sass) to [1.32.8](https://github.com/sass/dart-sass/releases/tag/1.32.8) (from [1.32.7](https://github.com/sass/dart-sass/releases/tag/1.32.7))

- update [ts-loader](https://www.npmjs.com/package/ts-loader) to [8.0.18](https://github.com/TypeStrong/ts-loader/releases/tag/v8.0.18) (from [8.0.17](https://github.com/TypeStrong/ts-loader/blob/master/CHANGELOG.md))

- update [typescript](https://www.npmjs.com/package/typescript) to [4.2.3](https://github.com/microsoft/TypeScript/releases/tag/v4.2.3) (from 4.1.5)

- update [webpack](https://www.npmjs.com/package/webpack) to 5.24.4 (from 5.21.2)

- update [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch) to [3.6.2](https://github.com/github/fetch/releases/tag/v3.6.2) (from [3.5.0](https://github.com/github/fetch/releases/tag/v3.5.0))

## [0.2.0] - 2020-02-15

### Changed

- CSS styles to be contained within Node that has form appended

## [0.1.0] - 2020-02-02

### Initial Release
