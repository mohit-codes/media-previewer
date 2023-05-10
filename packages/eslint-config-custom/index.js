/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'next',
    'turbo',
    'prettier',
    'kentcdodds',
    'kentcdodds/react',
    'plugin:jsx-a11y/recommended',
    'plugin:jsdoc/recommended'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'no-console': 'error',
    'react/iframe-missing-sandbox': 'off',
    'react/jsx-no-leaked-render': 'off',
    'logical-assignment-operators': 'off',
    'no-constant-binary-expression': 'off',
    'no-empty-static-block': 'off',
    'no-new-native-nonconstructor': 'off',
    'no-unused-private-class-members': 'off',
    'prefer-object-has-own': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  },
  // =================================
  // Overrides for Specific Files
  // =================================
  overrides: [
    // Match TypeScript Files
    // =================================
    {
      files: ['**/*.{ts,tsx}'],

      // Global ESLint Settings
      // =================================
      env: {
        jest: true
      },
      globals: {
        React: 'writable'
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        }
      },

      // Parser Settings
      // =================================
      // allow ESLint to understand TypeScript syntax
      // https://github.com/iamturns/eslint-config-airbnb-typescript/blob/master/lib/shared.js#L10
      parser: '@typescript-eslint/parser',

      // Plugins
      // =================================
      plugins: ['jsx-a11y'],

      // Extend Other Configs
      // =================================
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:react-hooks/recommended',
        'prettier'
      ],
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': [0],
        // temp allowing during TS migration
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': 'allow-with-description',
            minimumDescriptionLength: 4
          }
        ]
      }
    }
  ]
};
