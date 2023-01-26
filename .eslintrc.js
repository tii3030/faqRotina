module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    node: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'no-plusplus': ["error", { allowForLoopAfterthoughts: true }]
  },
};
