// vue.config.js
const path = require('path')
module.exports = {
  outputDir: '../../api/v1/request/_static',
  assetsDir: 'assets',
  lintOnSave: true,
  publicPath: './',
  productionSourceMap: false,
  css: {
    extract: false
  },
  chainWebpack: config => {
    if (config.plugins.has('extract-css')) {
      const extractCSSPlugin = config.plugin('extract-css')
      extractCSSPlugin && extractCSSPlugin.tap(() => [{
        filename: 'assets/[name].css',
        chunkFilename: 'assets/[name].css'
      }])
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'pnbi-base': path.resolve(__dirname, '.')
      }
    },
    output: {
      filename: 'assets/[name].js',
      chunkFilename: 'assets/[name].js'
    }
  }
}
