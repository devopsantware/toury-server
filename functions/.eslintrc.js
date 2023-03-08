module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ["@typescript-eslint", "prettier"],
  ignorePatterns: ["/lib/**/*", '.eslintrc.js'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    jsx: true,
    project: ["tsconfig.json", "tsconfig.dev.json"],
    tsconfigRootDir: __dirname
  },
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'arrow-parens': 0,
    'no-console': 1,
    'no-empty': 1,
    'no-use-before-define': 'off',
    'jsx-no-lambda': 0,
    'jsx-boolean-value': 0,
    'prefer-const': 2,
    'react/prop-types': 0,
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'no-underscore-dangle': 0
  }
};
