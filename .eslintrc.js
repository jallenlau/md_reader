module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  rules: {
    "no-console": "error",
    "no-var": "error"
  }
}