const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
        exclude: [
          '/node_modules',
          '/src/test'
        ]
      },
    ],
  },
  node: {
    __filename: true,
    __dirname: true
  },
  externals: [nodeExternals()],
  mode: 'production',
  resolve: {
    extensions: ['.wasm', '.ts', '.js', '.mjs', '.json'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};