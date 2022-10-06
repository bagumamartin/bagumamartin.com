const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
              scss: {
        additionalData: `
                        @import "~@/assets/scss/_config.scss";
                        @import "~@/assets/scss/_colors.scss";
                        @import "~@/assets/scss/_fonts.scss";
                        @import "~@/assets/scss/_animations.scss";
                        @import "~@/assets/scss/_responsiveness.scss";
                        @import "~@/assets/scss/_transitions.scss";
                        `
      },
    }
  },
})
