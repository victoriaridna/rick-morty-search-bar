const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const jsLoaders = [
	{
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			babelrc: false,
			sourceType: 'unambiguous',
			presets: [
				[
					"@babel/preset-env", {
						"targets": {
							"node": "current",
							"browsers": [
								">0.25%",
								"not ie 10",
								"not op_mini all",
								"ie 11"
							]
						},
						"modules": "auto",
						"useBuiltIns": "entry",
						"corejs": "3.4.7"
					}
				],
				"@babel/preset-react",
			],
			"plugins": [
				"@babel/plugin-proposal-class-properties",
				"@babel/plugin-transform-async-to-generator",
				"@babel/plugin-transform-object-assign",
				"@babel/plugin-transform-runtime"
			]
		},
	},
];

module.exports = {
	mode: 'development',
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'client.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules\/[^a])/,
				use: jsLoaders
			},
			{
				test: /\.(css)$/,
				exclude: arg => {
					if (arg.includes('node_modules')) {
						return true;
					}
					return false;
				},
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
				]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html"
		}),
		new MiniCssExtractPlugin(
			{
				filename: '[name].css',
				chunkFilename: '[id].css',
			}
		)
	],

	resolve: {
		extensions: [".js", ".jsx"],
		alias: {
			promise: 'empty-module', turf: 'turf/turf',
		},
		modules: [
			__dirname,
			__dirname + '/node_modules',
			__dirname + '/src',
		],
	},
};
