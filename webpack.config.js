'use strict';

const path = require('path');
const ignore = /(?:node_modules)$/;
const NodeExternals = require('webpack-node-externals');

module.exports =
{
	mode: 'development',
    target: 'node',
    entry:
    {
        app: './src/index.ts'
    },
    resolve:
    {
        extensions:
        [
            '.ts',
            '.json'
        ],
        alias:
        {
            src: __dirname + '/src',
            node_modules: __dirname + '/node_modules'
        }
    },
    output:
    {
        filename: 'index.js',
        path: __dirname,
        libraryTarget: 'umd'
    },
    watch: true,
    module:
    {
        rules:
        [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: ignore
            }
        ]
    },
	externals:
	[
		NodeExternals()
	]
};