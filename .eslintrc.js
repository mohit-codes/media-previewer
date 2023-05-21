/**
 * @type {import('eslint').Linter.Config} eslint description
 */
module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ['custom'],
  settings: {
    next: {
      rootDir: ['apps/*/']
    },
    react: {
      version: 'detect'
    }
  },
  ignorePatterns: ['**/dist/**', '**/build/**']
};
