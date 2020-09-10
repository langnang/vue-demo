module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-demo/'
        : '/',
    devServer: {
        port: 19103,// 自定义端口
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vue Demo'
                return args
            })
    }
}