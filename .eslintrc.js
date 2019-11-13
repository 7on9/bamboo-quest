module.exports = {
  env: {
    es6: true,
    browser: true,
    mocha: true,
    jest: true,
    node: true,
    phantomjs: true,
    protractor: true,
    'cypress/globals': true,
  },
  plugins: ['react', 'cypress'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
    },
  },
  rules: {
    'max-len': ['off', 160, 4],
    'jsx-max-len/jsx-max-len': [
      'off',
      {
        lineMaxLength: 160,
        tabWidth: 2,
        maxAttributesPerLine: 10,
      },
    ],
    'react/forbid-prop-types': ['off'],
    'react/prop-types': ['warn'],
    'react/jsx-no-bind': ['off'],
    'react/jsx-indent': ['off'],
    'react/jsx-indent-props': ['off'],
    'react/jsx-filename-extension': ['off'],
    'import/no-named-as-default': ['off'],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'log', 'error'],
      },
    ],
    semicolon: [0, 'never'],
  },
  overrides: [
    {
      files: ['**/*.spec.js'],
      rules: {
        semi: 'off',
        'react/jsx-no-bind': ['off'],
        'react/prop-types': ['off'],
      },
    },
  ],
}
