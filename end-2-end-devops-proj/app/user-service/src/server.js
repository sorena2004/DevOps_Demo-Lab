const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com"
  }
];

app.get("/health", (req, res) => {
  res.json({
    service: "user-service",
    status: "healthy"
  });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find(
    user => user.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    });
  }

  res.json(user);
});

app.listen(PORT, () => {
  console.log(`User service running on port ${PORT}`);
});
