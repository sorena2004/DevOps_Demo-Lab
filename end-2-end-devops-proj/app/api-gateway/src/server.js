const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://user-service:3001";

const TASK_SERVICE_URL =
  process.env.TASK_SERVICE_URL || "http://task-service:3002";

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "api-gateway",
    status: "healthy",
  });
});

app.get("/users", async (req, res) => {
  try {
    const response = await fetch(`${USER_SERVICE_URL}/users`);

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error("User service error:", error);

    res.status(503).json({
      error: "User service unavailable",
    });
  }
});

app.get("/tasks", async (req, res) => {
  try {
    const response = await fetch(`${TASK_SERVICE_URL}/tasks`);

    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error("Task service error:", error);

    res.status(503).json({
      error: "Task service unavailable",
    });
  }
});

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
