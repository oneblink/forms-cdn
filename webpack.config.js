const path = require('path')

const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

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
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /core-js/,
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
  },
  devServer: {
    contentBase: 'public',
    open: true,
    liveReload: true,
    watchContentBase: true,
    port: 3000,
    injectClient: false,
  },
}
