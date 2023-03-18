module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', 'xo', 'prettier'],
  overrides: [
    {
      extends: ['xo-typescript'],
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.node.json'],
      },
      files: ['*.ts', '*.tsx'],

      rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase'],
          },
        ],
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'capitalized-comments': 'off',
    'no-unused-vars': 'off',
  },
};
