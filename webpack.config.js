const path = require('path')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [new NodePolyfillPlugin()],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'latest.js',
    library: ['OneBlink'],
    libraryTarget: 'umd',
    publicPath: '/dist/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
