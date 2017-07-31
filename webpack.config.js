module.exports = {
  entry: {
    app: __dirname + '/src',
    components: [__dirname + '/src/components/Calculadora.js']
  },
  output: {
    path: 'bundles',
    filename: '[name].js',
    publicPath: '/bundles/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
