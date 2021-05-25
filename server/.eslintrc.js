module.exports = {

  root: true, // this will stop ESLint loading other config files from ancestor directories.

  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // eslint-plugin-prettier + eslint-config-prettier
    'prettier/@typescript-eslint', // Deactivate conflicting rules of @typescript-eslint/eslint-plugin
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    allowImportExportEverywhere: true,
    warnOnUnsupportedTypeScriptVersion: true,
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort', // eslint-plugin-simple-import-sort
  ],
  rules: {
    semi: [2, 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'always'],
    'no-new-object': 'error',
    'no-array-constructor': 'error',
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    // third-party
    'simple-import-sort/imports': 'error',
    // typescript
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-var-requires': 'warn',
  },
};