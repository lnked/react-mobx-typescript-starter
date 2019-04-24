const merge = require('webpack-merge');

const options = require('./options');
const common = require('./webpack/common.config.js')
const configs = require(`./webpack/${options.env}.config.js`);

module.exports = merge(
  common,
  configs,
);
