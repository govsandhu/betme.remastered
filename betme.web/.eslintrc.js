module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '../betme.backend/.eslintrc.js'
  ],
  parserOptions: {
    ecmaVersion: 2018,
  }
};
