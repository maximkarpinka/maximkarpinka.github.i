
const NODE_ENV = process.env.NODE_ENV || 'dev';
const webpack = require('webpack')


module.exports = {

	entry: "./js/widget.js",
	output : {
		path: __dirname + "/dist",
		publicPath:  './dist/',
		filename: "bundle.js"
	},

	watch : NODE_ENV == 'dev',
	watchOptions : {
		aggreateTimeout : 100
	},

	devtool : NODE_ENV == 'dev' ? 'source-map' : false,

	module : {

		rules: [
     
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }],
      },


       {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        },

         {
            test: /\.css$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }]
        },

         { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,

          loader: "url-loader?limit=10000&mimetype=application/font-woff" },

          { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,

           loader: "file-loader" }
        


 
    
      // Loaders for other file types can go here
    ]

	},

	plugins : []
}	


if(NODE_ENV=='prod'){

	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warnings : false,
				drop_console : true,
				unsafe : true
			}
		}))

}

if(NODE_ENV=='prod'){
module.exports.module.rules.push(
      {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loaders: [
      'url-loader?limit=10000',
      'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65", speed: 4}, mozjpeg: {quality: 65}}'
    ]
  }

)

}

if(NODE_ENV=='dev'){

  module.exports.module.rules.push({
          test : /\.(gif|png|jpe?g|svg)$/i,
          loader : 'url-loader?limit=1000'
        }
        )
}