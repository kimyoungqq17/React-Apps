const path = require('path');
const { entry } = require('./wordChain/webpack.config');

module.exports = {
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions:['.jsx', '.js'],
    },
    entry: {
        app: './client',
    },
    module:{
        rulse:[{
            test:/\.jsx?$/,
            loader:'babel0loader',
            options:{
                preset: ['@babel/preset-env', '@babel/preset-react'],
                plugins:[],
            }
        }],
    },
    output:{

    },
}