// eslint.config.js
export default [
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.jsx', '**/*.vue'],
    extends: ['standard'],
    languageOptions: {
      sourceType: 'module',
    },
    rules: {
      'no-unused-vars': 'warn',
      eqeqeq: 'error',
    },
  },
]
