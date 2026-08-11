const test = require("node:test");
const assert = require("node:assert");

test("task service basic test", () => {
  const task = {
    id: 1,
    title: "Learn Kubernetes",
    completed: false
  };

  assert.strictEqual(task.id, 1);
  assert.strictEqual(task.completed, false);
});
