const webpack = require('webpack');
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config.js');
const nodemon = require('nodemon');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require("express");

const hmrserver = express();
const clientCompiler = webpack(webpackClientConfig)

hmrserver.use(webpackDevMiddleware(clientCompiler,{
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  noInfo: true,
  watchOptions:{
    ignore: /dist/,
  },
  writeToDisk: true,
  stats: 'errors-only',
}));

hmrserver.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr'
}));

hmrserver.listen(3001,()=>{
  console.log('HMR server successfully started');
});

const compiler = webpack(webpackServerConfig);

compiler.run((err)=>{
  if(err) {
    console.log('Compilation failed', err);
  }

  compiler.watch({},(err)=>{
    if(err) {
      console.log('Compilation failed', err);
    }
    console.log('Compilation was successfully');
  });

  nodemon({
    script: path.resolve(__dirname,'../dist/server/server.js'),
    watch: [
      path.resolve(__dirname,'../dist/server'),
      path.resolve(__dirname,'../dist/client'),
    ]
  })
});