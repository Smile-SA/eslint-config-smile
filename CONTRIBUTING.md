# Contributing

## Submitting a PR

Format your code before submitting a PR with `npm run prettier`.

This should be done automatically with git hooks and husky.

Your code must pass the linting, you can check with `npm run eslint:all`.

Commit messages must be clear and easily readable, respecting the convention of [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Release

Create a release with the following commands depending on the version you want to increment:

- `release:patch` to increment the last digit x.y.Z
- `release:minor` to increment the second digit x.Y.z
- `release:major` to increment the first digit X.y.z

The command will update the CHANGELOG.md and publish the package to npm.
