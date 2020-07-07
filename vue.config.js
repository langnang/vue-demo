module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-demo/'
        : '/',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Vue Demo'
                return args
            })
    }
}