const path = require('path');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "App.js",
		path: path.resolve(__dirname, "public")
	},

	resolve: {
		// Add `.ts` and `.tsx` as a resolvable extension.
		extensions: [".ts", ".tsx", ".js"]
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ test: /\.css$/, loader: "css-loader" },
			{ test: /\.js$/, loader: "babel-loader" }
		]
	}
}
