module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  plugins: ['prettier', '@babel'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      cwd: __dirname,
      configFile: './babel.config.js'
    }
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 80,
        endOfLine: 'auto'
      }
    ],
    'no-unused-vars': 'warn',
    'func-names': 'off',
    'no-underscore-dangle': ['error', { allow: ['_avg', '_min', '_max'] }]
  }
}
