const paths = require('./config/paths');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
  ],
  globals: {
    __BROWSER__: true,
    __SERVER__: true,
  },
  plugins: ['babel', 'import', 'prettier', 'security'],
  settings: {
    'import/resolver': {
      node: {
        paths: paths.resolveModules,
      },
    },
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  rules: {
    'import/named': 0,
    'import/no-unassigned-import': 0,
    'import/no-named-as-default-member': 0,
    'prettier/prettier': ['error'],
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'arrow-parens': ['error', 'always'],
    'func-names': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
