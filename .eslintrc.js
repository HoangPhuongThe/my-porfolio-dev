require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-airbnb-with-typescript',
    '@vue/prettier',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    sourceType: 'module',
    createDefaultProgram: true,
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'vue/multi-word-component-names': 0,
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
  },
}
