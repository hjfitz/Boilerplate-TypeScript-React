const config = {
  entry: ['babel-polyfill', `${__dirname}/src/build/router.tsx`],
  output: {
    path: `${__dirname}/src/public/js`,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },
};

module.exports = config;
