const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "fastapi//",
    createProxyMiddleware({
      target: "http://15.164.142.161/fastapi/home/", // 프록시 대상 주소
      changeOrigin: true, // 이 값을 true로 설정하여 프록시 대상의 origin을 변경
      pathRewrite: {
        api: "/api", // 경로 재작성
      },
      logLevel: "error", // 로그 레벨 설정
      secure: false, // HTTPS를 사용하고 있다면 true로 설정
    }),
  );
};
