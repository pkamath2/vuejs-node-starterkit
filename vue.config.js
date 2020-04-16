const configureAPI = require('./src/server/configure')

module.exports = {
    devServer: {
        before: configureAPI
    },
    outputDir: __dirname + '/dist/client',
    configureWebpack: {
        entry: {
            app: __dirname + '/src/client/main.js'
        }
    }
}