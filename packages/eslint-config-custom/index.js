/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    "next",
    "turbo",
    "prettier",
    "kentcdodds",
    "kentcdodds/react",
    "plugin:jsx-a11y/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-console": "error",
  },
};
