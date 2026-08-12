const express = require("express");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

const tasks = [
  {
    id: 1,
    title: "Learn Kubernetes",
    completed: false,
    userId: 1
  },
  {
    id: 2,
    title: "Build CI/CD pipeline",
    completed: true,
    userId: 1
  }
];

app.get("/health", (req, res) => {
  res.status(200).json({
    service: "task-service",
    status: "healthy"
  });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(
    task => task.id === Number(req.params.id)
  );

  if (!task) {
    return res.status(404).json({
      error: "Task not found"
    });
  }

  res.json(task);
});

app.post("/tasks", (req, res) => {
  const { title, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({
      error: "title and userId are required"
    });
  }

  const task = {
    id: tasks.length + 1,
    title,
    completed: false,
    userId
  };

  tasks.push(task);

  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Task service running on port ${PORT}`);
});
