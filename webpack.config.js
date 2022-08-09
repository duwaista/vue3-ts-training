import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { VueLoaderPlugin } from 'vue-loader';

const config = {
	entry: [
		'./src/main.ts'
	],
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
		new VueLoaderPlugin(),
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[chunkhash].bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue'],
    modules: [path.join(process.cwd(), 'src'), 'node_modules'],
    alias: {
      react: path.join(process.cwd(), 'node_modules', 'vue'),
    },
  },
  module: {
    rules: [
			{
				test: /\.vue$/,
				use: "vue-loader"
			},
      {
        test: /\.(ts|tsx)$/,
        use: {
					loader: 'ts-loader',
					options: {
						appendTsSuffixTo: [/\.vue$/],
					}
				},
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name() {
            if (process.env.NODE_ENV === 'development') {
              return '[path][name].[ext]';
            }
            return '[contenthash].[ext]';
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
};

export default config;
