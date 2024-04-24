const path = require('path')

const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const dotenv = require('dotenv')

const { parse } = require('semver')
const pkg = require('./package.json')
const version = parse(pkg.version)

dotenv.config({
  path: path.join(__dirname, '.env.local'),
})
dotenv.config()

module.exports = {
  mode: 'development',
  entry: {
    latest: { filename: 'latest.js', import: './src/index.tsx' },
    major: { filename: `${version.major}.x.x.js`, import: './src/index.tsx' },
    minor: {
      filename: `${version.major}.${version.minor}.x.js`,
      import: './src/index.tsx',
    },
    patch: {
      filename: `${version.major}.${version.minor}.${version.patch}.js`,
      import: './src/index.tsx',
    },
  },
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      __TENANT__: `'${process.env.TENANT}'`,
      __ENVIRONMENT__: `'${process.env.ENVIRONMENT}'`,
    }),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    library: ['OneBlinkForms'],
    chunkFilename: `[name].${version.major}.${version.minor}.${version.patch}.js`,
    libraryTarget: 'umd',
    publicPath: `${process.env.PUBLIC_URL}/`,
    chunkLoadTimeout: 600000,
  },
  optimization: {
    moduleIds: 'deterministic',
    splitChunks: {
      cacheGroups: {
        arcgis: {
          test: /[\\/]node_modules[\\/]((@arcgis)|(@esri))[\\/]/,
          name: 'arcgis',
          chunks: 'all',
        },
        vendor: {
          test: /[\\/]node_modules[\\/](?!(@arcgis)|(@esri))[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
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
    fallback: {
      http: false,
      https: false,
      http2: false,
    },
  },
  devServer: {
    open: true,
    liveReload: true,
    port: 3000,
  },
}
