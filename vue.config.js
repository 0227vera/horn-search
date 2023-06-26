const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src/miniprogram')
        }
      }
    }
  },
  pluginOptions: {
    mpx: {
      srcMode: 'wx',
      plugin: {},
      loader: {}
    }
  }
})
