module.exports = {
  outputDir: "dist",
  publicPath: process.env.NODE_ENV === "production" ? "/vue-template/" : "/",
  devServer: {
    port: 9100, // 自定义端口
    proxy: {
      "/github": {
        target: "https://api.github.com/",
        pathRewrite: {
          "^/github": "",
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Vue Template"; // 自定义标题
      return args;
    });
  },
};
