const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(3030, '0.0.0.0', function (err) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://0.0.0.0:3030');
  });
