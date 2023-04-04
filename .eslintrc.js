module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'xo',
    'prettier',
    'plugin:@intlify/vue-i18n/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      extends: ['xo-typescript'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'UPPER_CASE', 'StrictPascalCase'],
          },
        ],
      },
    },
    {
      files: ['*.test.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
      },
    },
    {
      files: ['*.stories.ts'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/prefer-ts-expect-error': 'off',
        'new-cap': 'off',
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
    '@intlify/vue-i18n/no-dynamic-keys': 'error',
    '@intlify/vue-i18n/no-raw-text': 'error',
    '@intlify/vue-i18n/no-unused-keys': [
      'error',
      {
        extensions: ['.js', '.vue'],
      },
    ],
  },
};
