const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("/imgs/*", {
      target: "http://localhost:3000/", //跨域地址
      changeOrigin: true
    })
  );
};
