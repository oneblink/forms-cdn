# Contributing

## Git Branch Workflow

This project adheres to [GitHub Flow](https://guides.github.com/introduction/flow/).

## Development

Coming soon...

## Test Release Process

1. Create a GitLab Tag that matches the following regex: `/^\d+\.\d+\.\d+-test.\d+$/` e.g. `1.0.0-test.1`.

## Production Release Process

1. Checkout `master` and get the latest code

   ```
   git checkout master && git pull
   ```

1. Update the [Changelog](./CHANGELOG.md) by replacing `Unreleased` with `x.x.x (YYYY-MM-DD)`

1. Commit changes to the `master` branch

   ```
   git add -A
   git commit -m "[RELEASE] x.x.x"
   ```

1. Create a GitLab Tag that matches the following regex: `/^\d+\.\d+\.\d+$/` e.g. `1.0.0`.
