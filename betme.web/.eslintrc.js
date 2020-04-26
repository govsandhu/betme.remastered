module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
  ],
  rules: {

  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
};
