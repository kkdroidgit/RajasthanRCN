module: {

    rules: [
        {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [
                {
                    loader: 'src/Components/HeaderComponents/logo.jpeg',
                    options: {
                        name: '[path][name]-[hash:8].[ext]'
                    },
                },
            ]
            output: {
                      path: PATHS.build,
                      filename: 'app.bundle.js',
                      publicPath: PATHS.build
                    },
        },
    ],
},

export
