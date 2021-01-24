// figure out what set of credentials to return
if (process.NODE_ENV === 'production') {
    // return the prod set of keys
    module.exporst = require('./prod');
} else {
    // return the dev set of keys
    module.exports = require('./dev');
}
