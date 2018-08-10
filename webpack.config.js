
//entry -> output
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env)=>{

  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  console.log('env', env);
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
        {
      test: /\.s?css$/,
      use: CSSExtract.extract({
        use: [
          {
            loader: 'css-loader',
            options:{
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options:{
              sourceMap: true
            }
          }
        ]
      })
    },

    { test: /\.(jp(e?)g|png|svg)$/,
      use: [
        'file-loader',

        {
       loader: 'image-webpack-loader',
      options: {
        mozjpeg:{
          progressive: true,
          quality: 65
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: 65-90,
          speed: 4
        },
        gifsicle: {
            interlaced: false,

        },
        webp: {
          quality: 75
        }


        // bypassOnDebug: true, // webpack@1.x
        // disable: true, // webpack@2.x and newer
      }
    },
  ],

    }

    ]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction?'source-map':'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true

    }
  }
}
