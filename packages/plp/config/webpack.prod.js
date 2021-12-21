const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/plp/latest/',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'plp',
      filename: 'remoteEntry.js',
      exposes: {
        './PlpApp': './src/bootstrap',
      },
      shared: packageJson.dependencies,
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig)
