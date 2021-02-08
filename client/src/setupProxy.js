const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api', '/auth/google', '/auth/facebook', '/auth/github'],
    proxy({ target: 'http://localhost:5000' })
  );
};
