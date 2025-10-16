// eslint.config.js
export default [
  {
    files: ["**/*.js"],
    extends: ['standard'],
    languageOptions: {
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "warn",
      "eqeqeq": "error",
    },
  },
];
