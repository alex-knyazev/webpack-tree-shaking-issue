const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        ["index"]: path.resolve(__dirname, 'src', 'index.js'),
        ["entry-1"]: path.resolve(__dirname, 'src', 'entry-1.js'),
        ["entry-2"]: path.resolve(__dirname, 'src', 'entry-2.js'),
    },
    optimization: {
        // minimize: false,
        // mergeDuplicateChunks: false,
    },
}