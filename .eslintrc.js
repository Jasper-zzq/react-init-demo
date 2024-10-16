module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier', // 确保 Prettier 的规则优先级高于其他规则
      'plugin:prettier/recommended', // 使用 Prettier 插件
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
      // 自定义规则
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': ['error'], // 将 Prettier 规则作为错误处理
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };