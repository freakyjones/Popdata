const path=require('path');
const html=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'index_bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: [
                  ["transform-class-properties", { "spec": true }]
                ]
              },
                 
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ]
      },
      plugins:[new html({template:'./src/index.html'})]
}
