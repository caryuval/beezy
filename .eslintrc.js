module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: ['warn', 4],
    'no-param-reassign': 'off',
    'no-unused-vars': ["error", { 'args' : 'none' }],
    'no-plusplus': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
