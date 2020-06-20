'use strict'
const path = require('path')

// gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = process.env.port || process.env.npm_config_port || 8080 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'dev',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://dev-api.cocreatestudio.com',
        changeOrigin: true,
        pathRewrite: {
          ['/api']: ''
        }
      }
    },
    disableHostCheck: true
  },
  chainWebpack: config => {
    // 压缩图片
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true
      })
      .end()

    // 全局引入 base.less
    config.module
      .rule('less')
      .oneOf('vue')
      .use('less-loader')
      .options({
        prependData: `@import "@/assets/less/base.less";`
      })
      .end()
  },
  configureWebpack: config => {
    config.resolve.alias = {
      '@': resolve('src'),
      '~': resolve('src/components'),
      assets: path.resolve(__dirname, 'src/assets')
    }

    config.plugins.push(
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240, // >10k 会被压缩
        minRatio: 0.8
      })
    )
  }
}
