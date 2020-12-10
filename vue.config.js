module.exports = {
    lintOnSave: false,
    devServer: {
        host: '0.0.0.0',
        proxy: {
            "/api": {
                target: "http://www.chst.vip",
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};