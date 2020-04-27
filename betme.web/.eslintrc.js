module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue-scoped-css/recommended'
  ],
  rules: {
    'vue/singleline-html-element-content-newline': ['off', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true
    }],
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'array-bracket-newline': ['warn', 'consistent'],
    'array-element-newline': ['warn', 'consistent'],
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'max-len': ['warn', 180],
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-trailing-spaces': ['warn', { skipBlankLines: true }],
    'object-curly-newline': ['warn', { consistent: true }],
    'object-curly-spacing': ['warn', 'always'],
    'quotes': ['error', 'single', { avoidEscape: true }],
    'quote-props': ['warn', 'consistent-as-needed'],
    'semi': ['error', 'always'],
    'semi-style': ['error', 'last']
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018
  }
};
