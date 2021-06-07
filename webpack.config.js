const path = require("path");
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const webpack = require("webpack");

const common_settings = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },

  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: { mimetype: "image/png" },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
};

module.exports = [
  /// Server entry & settings
  {
    target: "node",
    entry: {
      "server.bundle": "./src/server/index.ts",
    },
    output: {
      filename: "[name].js",
      path: `${__dirname}/private`,
    },

    resolve: {
      fallback: {
        fs: false,
        crypto: false,
        net: false,
        tls: false,
      },
    },

    node: {
      __dirname: false,
    },

    externals: [nodeExternals()],

    ...common_settings,
  },
  /// Client
  {
    entry: {
      "client.bundle": "./src/client/index.tsx",
    },

    output: {
      filename: "[name].js?[fullhash]",
      path: `${__dirname}/public`, 
      publicPath: "/public",
    },

    plugins: [
      new HtmlWebpackPlugin({
        chunks: ["client.bundle"],
        filename: path.resolve(__dirname, "public", `client.html`),
        template: "./src/HtmlTemplate/template.html",
      }),
    ],

    ...common_settings,
  },
];
