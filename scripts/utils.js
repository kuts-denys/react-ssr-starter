/* eslint-disable prefer-promise-reject-errors */
const chalk = require('chalk');

const logMessage = (message, level = 'info') => {
  const isInfo = level === 'info' ? 'blue' : 'white';
  const isWarning = level === 'warning' ? 'yellow' : isInfo;
  const color = level === 'error' ? 'red' : isWarning;
  console.log(`[${new Date().toISOString()}]`, chalk[color](message));
};

const compilerPromise = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      logMessage(`[${name}] Compiling `);
    });
    compiler.hooks.done.tap(name, (stats) => {
      if (!stats.hasErrors()) {
        return resolve();
      }
      return reject(`Failed to compile ${name}`);
    });
  });
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const clientOnly = () => process.argv.includes('--client-only');

module.exports = {
  clientOnly,
  compilerPromise,
  logMessage,
  sleep,
};
