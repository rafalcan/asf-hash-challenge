/* eslint import/no-dynamic-require: 0 */
const env = process.env.NODE_ENV;

console.log(`** Running ${env} mode using webpack **`);

module.exports = require(`./webpack/webpack.${env}.js`);
