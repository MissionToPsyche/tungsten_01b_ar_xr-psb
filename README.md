# Tungsten 01B AR/XR PSB

## Setup

### Node.js

This project uses Node `v18.18.0`.

#### Node Version Manager (NVM)

[NVM](https://github.com/nvm-sh/nvm) is our recommended method of managing Node versions if you are using a *NIX
machine. Follow the instructions at the linked page to get it installed.

1. Install Node `v18.18.0`

   ```shell
   nvm install v18.18.0
   ```

2. Instruct NVM to use `v18.18.0`. Don't forget to do this every time you start a new shell session related to the
   project.

   ```shell
   nvm use
   ```

#### Manual Node Installation

If you are not on a *NIX machine then you may need to manually install Node.js.

1. Download the appropriate installer from the Node.js [distribution repository](https://nodejs.org/dist/v18.18.0/).
2. Run the installer, be sure to select the option to add Node to your path.

### Dependencies

1. Install the project dependencies. Ensure that you run `ci` rather than `install` so that you don't accidentally
   update the `package-lock`.

   ```shell
   npm ci
   ```

2. Configure the Git hooks.

   ```shell
   npm run prepare
   ```

### Formatting

You can format project files by running `npm run format`. Additionally, the pre-commit will format files prior to
commit. However, it is recommended
to [install and configure the prettier extension](https://prettier.io/docs/en/editors.html) for your IDE or editor of
choice.

### Linting

Similar to formatting, you can lint project files by running `npm run lint` and the pre-commit hook will lint prior to
commit. However, it is recommended
to [install and configure the eslint extension](https://eslint.org/docs/latest/use/integrations) for your IDE or editor
of choice.

## Running Locally

To run the project locally, simply run `npm run dev`.

## Testing

### Unit Tests

Unit tests are ran with [vitest](https://vitest.dev/) and leverage
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro). These tests also run as a part of
the pre-commit hooks.

- Run the tests `npm run test`
- Run the tests with UI presentation of test progress `npm run test:ui`
- Watch project files and continuously re-run tests `npm run test:watch`
- Run the tests with a coverage report `npm run test:coverage`

## Building

```shell
npm run build
```