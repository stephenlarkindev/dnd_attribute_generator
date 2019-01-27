const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  const htmlplugin = new HtmlWebpackPlugin({
    hash: true,
    template: "./public/index.html", // this is where the plugin looks for html
    filename: "index.html" // the output filename, will be added to the dist folder by default
  });

  const BabelLoader = {
    test: /\.(js|jsx)$/, // file extension to look for
    exclude: /node_modules/, // don't look in here or for these files
    use: {
      loader: "babel-loader" // when converting from ES6 -> ES5, please use this
    }
  };

  const HtmlLoader = {
    test: /\.html$/,
    use: {
      loader: "html-loader",
      options: { minimize: true }
    }
  };

  const CssLoader = {
    test: /\.(css|scss)$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: "[name]__[local]__[hash:base64:5]"
        }
      },
      { loader: "sass-loader" }
    ]
  };

  return {
    module: {
      rules: [BabelLoader, HtmlLoader, CssLoader]
    },
    plugins: [htmlplugin]
  };
};
