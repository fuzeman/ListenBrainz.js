var path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: [
        'whatwg-fetch',
        __dirname + '/src/index.js'
    ],

    plugins: [new ESLintPlugin()],

    output: {
        filename: 'listenbrainz.js',

        library: 'listenbrainz',
        libraryTarget: 'umd',

        devtoolModuleFilenameTemplate: '[resource-path]',
        devtoolFallbackModuleFilenameTemplate: '[resource-path]?[hash]'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],

                enforce: 'pre'
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],

                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                'add-module-exports'
                            ],
                            presets: [
                                '@babel/env'
                            ]
                        }
                    }
                ]
            }
        ]
    },

    resolve: {
        modules: [
            path.resolve('./node_modules')
        ]
    }
};
