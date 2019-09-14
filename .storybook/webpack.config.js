module.exports = ({config}) => {
  config.module.rules.push(
    {
      test: /\.module.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
            },
            importLoaders: 1,
          },
        },
        'sass-loader',
      ],
    },
  );
  config.module.rules.push(
    {
      test: /^((?!\.module).)*\.(scss)$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
  );


  return config;
};
