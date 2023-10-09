const webpack = require('webpack')
const isProduction = false
const dev = (arg) => {
    return {
        mode: 'development',
        devtool: 'cheap-module-source-map',
        devServer: {
            // 页面输出错误 不输出警告
            client: {
                overlay: {
                    errors: true,
                    warnings: false,
                },
            },
            historyApiFallback: true, //该配置影响react-router的路由刷新
            proxy: {
                '/api': {
                    target: 'http://localhost:3000', // 后端API的地址
                    pathRewrite: { '^/api': '' }, // 重写请求路径，去掉 '/api' 前缀
                    secure: false, // 如果目标是HTTPS，需要设置为false
                    changeOrigin: true, // 允许跨域
                },
            },
        },
    }
}
module.exports = dev()
