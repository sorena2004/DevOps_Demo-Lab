const express = require("express");
const {
  createProxyMiddleware
} = require("http-proxy-middleware");

const app = express();

const PORT = process.env.PORT || 3000;

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL ||
  "http://user-service:3001";

const TASK_SERVICE_URL =
  process.env.TASK_SERVICE_URL ||
  "http://task-service:3002";

app.get("/health", (req, res) => {
  res.json({
    service: "api-gateway",
    status: "healthy"
  });
});

app.use(
  "/users",
  createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true
  })
);

app.use(
  "/tasks",
  createProxyMiddleware({
    target: TASK_SERVICE_URL,
    changeOrigin: true
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
