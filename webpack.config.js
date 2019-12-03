const path = require('path');
const autoprefixer = require('autoprefixer');
const ExamplesGenerator = require('generate-examples-index-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function absPath(pathFromProjectRoot) {
  return path.resolve(__dirname, pathFromProjectRoot);
}

const config = {
  host: 'http://localhost',
  port: 8085,
  entries: 'playground',
  outDir: 'examples',
  stats: {
    assetsSort: 'name',
    modules: false,
    children: false,
    excludeAssets: [/hot(-update)?\.js(on)?/, /webpack-dev-server/],
  },
};

module.exports = env => {
  const baseConfig = {
    mode: 'development',

    output: {
      filename: '[name].js',
      path: absPath(config.outDir),
    },

    stats: config.stats,

    devtool: 'source-map',

    devServer: {
      hot: true,
      inline: true,
      port: 8085,
      contentBase: absPath(config.outDir),
      publicPath: '',
      stats: config.stats,
    },

    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {},
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /(node_modules)|(playground)/,
          enforce: 'pre',
          use: [
            {
              loader: 'tslint-loader',
              options: {
                formatter: 'stylish',
                typeCheck: true,
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                compilerOptions: {
                  declaration: false,
                  sourceMap: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(css|scss|sass|less)$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'typings-for-css-modules-loader',
                options: {
                  modules: true,
                  importLoaders: 1,
                  namedExport: true,
                  camelCase: true,
                  sourceMap: true,
                  localIdentName: '[local]',
                },
              },
              {
                loader: 'postcss-loader',
                options: { plugins: () => [autoprefixer('ie >= 9')] },
              },
            ],
          }),
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        root: path.resolve(__dirname, '..'),
        verbose: false,
      }),
      new ExamplesGenerator({
        noEntries: true,
        outputPath: config.outDir,
        examples: config.entries,
        static: `${config.entries}/assets`,
      }),
    ],
  };

  if (env === 'env') {
    baseConfig.entry = {
      'webpack-dev-server': `webpack-dev-server/client?${config.host}:${config.port}`,
      hot: 'webpack/hot/only-dev-server',
    };

    baseConfig.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    );
  }

  return baseConfig;
};
