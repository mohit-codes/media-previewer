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
    "plugin:jsdoc/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "no-console": "error",
    "react/iframe-missing-sandbox": "off",
    "react/jsx-no-leaked-render": "off",
    "logical-assignment-operators": "off",
    "no-constant-binary-expression": "off",
    "no-empty-static-block": "off",
    "no-new-native-nonconstructor": "off",
    "no-unused-private-class-members": "off",
    "prefer-object-has-own": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
