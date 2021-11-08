const path = require('path');

// const tsConfigPath = path.resolve(__dirname, './tsconfig.main.json');

module.exports = {
  entry: './src/bootstrap/main.ts',
  target: 'electron-main',
  node: false,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.ts'],
    plugins: [],
  }
};