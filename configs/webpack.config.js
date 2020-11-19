'use strict'

const path = require('path');
const process = require('process');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const conf_mode = process.env.NODE_ENV;

const outname = () => {
  if (conf_mode == 'production') return 'index.min.js';
  if (conf_mode == 'development') return 'index.js';
};

module.exports = {
  target: 'node',
  mode: conf_mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: outname(),
	  libraryTarget: 'commonjs2'
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: conf_mode === 'development' ? true : false
    })
  ],
  module: {
    rules: []
  }
};
