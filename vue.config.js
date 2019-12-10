const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      }
    }
  },
  devServer: {
    port: 80,
    disableHostCheck: true,
  },
  "transpileDependencies": [
    "vuetify"
  ]
}