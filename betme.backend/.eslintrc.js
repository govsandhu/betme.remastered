module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
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
  }
};
