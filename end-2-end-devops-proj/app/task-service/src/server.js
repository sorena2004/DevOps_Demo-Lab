const express = require("express");
const client = require("prom-client");

const app = express();

const PORT = process.env.PORT || 3002;

// Default Node.js metrics
client.collectDefaultMetrics();

// HTTP request counter
const httpRequestsTotal = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
});

// HTTP request duration
const httpRequestDuration = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "HTTP request duration in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1, 2, 5],
});

app.use(express.json());

// Metrics middleware
app.use((req, res, next) => {
  if (req.path === "/metrics") {
    return next();
  }

  const start = process.hrtime();

  res.on("finish", () => {
    const diff = process.hrtime(start);

    const duration = diff[0] + diff[1] / 1e9;

    const route = req.route?.path || req.path;

    const labels = {
      method: req.method,
      route,
      status_code: res.statusCode.toString(),
    };

    httpRequestsTotal.inc(labels);
    httpRequestDuration.observe(labels, duration);
  });

  next();
});

// Health
app.get("/health", (req, res) => {
  res.status(200).json({
    service: "task-service",
    status: "healthy",
  });
});

// Prometheus metrics
app.get("/metrics", async (req, res) => {
  try {
    res.set("Content-Type", client.register.contentType);

    const metrics = await client.register.metrics();

    res.end(metrics);
  } catch (error) {
    res.status(500).end(error);
  }
});

// Tasks
app.get("/tasks", (req, res) => {
  res.status(200).json({
    service: "task-service",
    tasks: [
      {
        id: 1,
        title: "Learn Kubernetes",
        completed: false,
      },
      {
        id: 2,
        title: "Configure Prometheus",
        completed: true,
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Task Service running on port ${PORT}`);
});
