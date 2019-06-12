const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
	entry: {
		Editor: "./src/index.tsx",
		Home: "./Homepage/index.tsx"
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "public")
	},

	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js", ".jsx"]
	},

	// plugins: [
	// 	new BundleAnalyzerPlugin()
	// ],
	
	module: {
		rules: [
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader'
			},
			{ test: /\.png$/, loader: "url-loader?mimetype=image/png" },
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ test: /\.css$/, use: ["style-loader", "css-loader"] },
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: [{
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}],
				
			}
		]
	}
}