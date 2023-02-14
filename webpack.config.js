const path = require('path')

const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const dotenv = require('dotenv')

dotenv.config({
  path: path.join(__dirname, '.env.local'),
})
dotenv.config()

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      __TENANT__: `'${process.env.TENANT}'`,
      __ENVIRONMENT__: `'${process.env.ENVIRONMENT}'`,
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'latest.js',
    library: ['OneBlinkForms'],
    libraryTarget: 'umd',
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // Need to transpile apps-react and apps sdk for ie11, but must exclude core-js polyfills
        test: /\.js$/,
        exclude: /core-js|quagga/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/react',
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      react$: path.resolve('./node_modules/react'),
      'react-dom$': path.resolve('./node_modules/react-dom'),
      'react-router-dom$': path.resolve('./node_modules/react-router-dom'),
      '@oneblink/apps$': path.resolve('./node_modules/@oneblink/apps'),
    },
  },
  devServer: {
    open: true,
    liveReload: true,
    port: 3000,
  },
}
