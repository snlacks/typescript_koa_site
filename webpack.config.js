module.exports = {
  entry: './src/app.ts',
  target: 'node',
  output: {
    filename: 'app.js',
    path: __dirname
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
};