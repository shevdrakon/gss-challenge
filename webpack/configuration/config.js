const fs = require('fs');
const path = require('path');
const parseArgs = require('minimist');

const defaultPort = 3000;

const args = parseArgs(process.argv);
const environment = args.mode || 'production';

const loadConfiguration = (configFolder) => {
  const configurationFilePath = `${path.join(configFolder, environment)}.configuration.json`;
  if (!fs.existsSync(configurationFilePath)) {
    throw new Error(`Unable to find configuration file: '${configurationFilePath}'.`);
  }

  const config = require(configurationFilePath);

  return {
    ...config,
    environment,
  };
};


const config = loadConfiguration(__dirname);

module.exports = {
  ...config,
  port: config.port || defaultPort,
}
