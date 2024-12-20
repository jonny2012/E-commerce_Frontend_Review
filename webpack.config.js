const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  cache: false,
  mode: "development",
  entry: "./src/index.tsx",

  resolve: {
    alias: {
      Components: path.resolve(__dirname, "./src/Components"),
      modules: path.resolve(__dirname, "./src/modules"),
      pages: path.resolve(__dirname, "./src/Pages"),
      assets: path.resolve(__dirname, "./src/assets"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"], // add other extensions if needed
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          type: "css/mini-extract",
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css[name].css",
    }),
  ],
  target: "web",
  devServer: {
    port: 3333,
    open: true,
    compress: true,
    watchFiles: ["src/*", "public/*"],
    liveReload: false,
    hot: true,
    historyApiFallback: true,
  },
  watchOptions: {
    ignored: "/node_modules/",
    aggregateTimeout: 600,
    poll: 1000, // Check for changes every second
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/i, // Match .ts and .tsx files
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              module: "CommonJs",
            },
          },
        }, // Use ts-loader for TypeScript files
        exclude: /node_modules/,
      },
      {
        test: /\.module\.(scss)$/, // For CSS/SCSS modules (only files with .module.scss or .module.sass)
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              esModule: false,
              sourceMap: false,
              exportType: "array",
              modules: {
                localIdentName: "[hash:base64:5]", // Naming  for CSS modules
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              api: "modern-compiler",
            },
          }, // Use Sass (SCSS)
        ],
      },
      {
        test: /\.scss$/, // Match global SCSS files (non-modules)
        exclude: /\.module\.scss$/, // Exclude module files to prevent conflict
        use: [
          "style-loader",
          "css-loader", // Translates CSS into CommonJS
          "sass-loader", // Compile SCSS to CSS
        ],
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset",
        use: {
          loader: "image-webpack-loader",
          options: {
            bypassOnDebug: true, // webpack@1.x
            disable: true, // webpack@2.x and newer
          },
        },
      },

      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: "@svgr/webpack",
          },
        ],
      },
    ],
  },
};
