const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true, // 自动打开浏览器
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    // 配置跨域
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000/api',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  },
  configureWebpack: config => {
    config.resolve = {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    };
    if (isProd) {
      config.optimization = {
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 250000,
          cacheGroups: {
            vendors: {
              name: 'chunk-vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
              chunks: 'initial'
            },
            common: {
              name: 'chunk-common',
              minChunks: 2,
              priority: 5,
              chunks: 'initial',
              reuseExistingChunk: true
            }
          }
        }
      }
    }
  },
  css: {
    extract: {
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css'
    },
    loaderOptions: {
      sass: {
        additionalData: `
          @use "@/assets/variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    // 移除 preload 插件
    config.plugins.delete('preload');
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    // 设置标题
    config.plugin('html')
      .tap(args => {
        args[0].title = 'Study'
        return args
      })
    // 修改打包后js文件名
    config.output
      .filename('static/js/[name].[hash:8].js')
      .chunkFilename('static/js/[name].[hash:8].js')
    // 修改图片输出配置
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096,
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'static/img/[name].[hash:8].[ext]'
          }
        }
      })
    if (isProd) {
      // 修改html-webpack-plugin插件配置
      config
        .plugin('html')
        .tap(args => {
          args[0].minify = {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: false
          }
          // 注入资源
          args[0].inject = true
          // 使用 'auto' 替代 'deps'
          args[0].chunksSortMode = 'auto'
          return args
        })
    }
  },
  pluginOptions: {}
}