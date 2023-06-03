const path = require('path')

module.exports = {
    enty: path.resolve(__dirname, './src/index.jsx'),
    output: {
        __filename: 'bundle.js',
        path: path(__dirname, './build')
    },
    resolve: {
        extensions: ['.js', 'jsx']
    },
    //    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: {
                    'css-loader'
                }
            }
        ]
    }
}