const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

let dotenv = require('dotenv')
let env
if (process.env.NODE_ENV === 'development') {
    env = require('dotenv').config({ path: '.env.development' }).parsed
} else {
    env = require('dotenv').config({ path: '.env' }).parsed
}
// eslint
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const getLocalIP = require('./plugins/ip')
const prot = 8080
const commonConfig = (arg) => {
    const localIP = getLocalIP()
    const port = arg.port || prot
    return {
        // 入口使用相对路径
        entry: './src/index.tsx',
        output: {
            // 设置出口文件的名字
            filename: 'bundle.js',
            clean: true,
            // 出口必须是绝对路径 所以需要使用 node的path模块
            path: path.resolve(__dirname, '../build'),
            publicPath: '',
        },
        stats: 'minimal',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName:
                                        '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [require('autoprefixer')],
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName:
                                        '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)$/,
                    type: 'asset/resource',
                },
                {
                    test: /\.(ts|tsx)$/, // 匹配.ts文件
                    exclude: /node_modules/, // 排除node_modules目录
                    use: {
                        loader: 'babel-loader', // 使用babel-loader进行转换
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                },
                {
                    test: /\.(js|jsx)$/, // 匹配.ts文件
                    exclude: /node_modules/, // 排除node_modules目录
                    use: {
                        loader: 'babel-loader', // 使用babel-loader进行转换
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                            ],
                        },
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'ysy',
                template: './public/index.html',
                inject: true,
            }),
            new ESLintPlugin({
                extensions: ['js', 'jsx', 'ts', 'tsx'], // 指定要检查的文件扩展名
            }),
            new ForkTsCheckerWebpackPlugin({
                async: false,
            }),
            new webpack.DefinePlugin({
                'process.env': JSON.stringify(env),
            }),
            new FriendlyErrorsWebpackPlugin({
                compilationSuccessInfo: {
                    messages: [
                        `You application is running here http://${localIP}:${port}`,
                    ],
                },
            }),
        ],
        resolve: {
            extensions: ['.js', '.ts', '.tsx', 'jsx', 'css', 'scss'], // 添加.ts扩展名
            alias: {
                '@': path.resolve(__dirname, '../src/'), // 设置路径别名
                // 添加更多路径别名
            },
        },
    }
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const prodConfig = require('./webpack.prod')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const devConfig = require('./webpack.dev')
//这里导出一个对象 在运行webpack的时候 它会调用 并且把 终端的指令转递过来
module.exports = function (env, argv) {
    const isProduction = env.production
    process.env.production = isProduction
    const config = isProduction ? prodConfig : devConfig
    return merge(commonConfig(argv), config)
}
