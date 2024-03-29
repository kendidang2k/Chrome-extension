import merge from "webpack-merge";
import webpackConfig from "./webpack.config";

module.exports = merge(webpackConfig, {
    mode: 'development',
    devtool: 'inline-source-map'
})