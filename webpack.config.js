const path = require('path');
const MODE = 'development';

const isSourceMap = MODE === 'development';

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: `${__dirname}/node_modules/`,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/react'],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.join(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpg|svg)$/,
                type: 'asset/inline',
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isSourceMap,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: isSourceMap,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        //webpackで画像を取り扱う際は、相対パスより絶対パスのがいい。
        alias: {
            '@image': path.resolve(__dirname, './public/images/'),
        },
    },
    target: ['web', 'es5'],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
    },
};
