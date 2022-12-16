const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      // 👇️ make sure to update your target
      //target: 'http://localhost:6001',
      target:'https://server-ujbx.onrender.com',
      changeOrigin: true,
    }),
  );
};
