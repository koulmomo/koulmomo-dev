/* eslint-env node */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    // eslint recommended
    "eslint:recommended",

    // typescript
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",

    // react
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    // prettier
    "plugin:prettier/recommended",
  ],
};
