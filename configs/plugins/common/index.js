const WebpackPlugins = require('./webpack-plugins');
const DuplicatesPlugin = require('./duplicates-plugin');
const CopyWebpackPlugin = require('./copy-webpack-plugin');
const HtmlWebpackPlugin = require('./html-webpack-plugin');
const CircularDependencyPlugin = require('./circular-dependency-plugin');
const UnusedFilesWebpackPlugin = require('./unused-files-webpack-plugin');
const CaseSensitivePathsPlugin = require('./case-sensitive-paths-webpack-plugin');

module.exports = {
  plugins: [
    ...WebpackPlugins(),
    ...DuplicatesPlugin(),
    ...CopyWebpackPlugin(),
    ...HtmlWebpackPlugin(),
    ...UnusedFilesWebpackPlugin(),
    ...CaseSensitivePathsPlugin(),
    ...CircularDependencyPlugin(),
  ].filter(Boolean),
};
