/* eslint-disable global-require */
const { clientOnly } = require('./utils');

if (clientOnly()) {
  require('./build-client');
} else {
  require('./build-ssr');
}
