const path = require("path");


module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve('public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.json$/,
          exclude: /node_modules/,
          use: {
            loader: "json-loader",
          },
          include: '/src/testData.json'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          }
        }
      ]
    }

}
