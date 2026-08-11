const test = require("node:test");
const assert = require("node:assert");

test("user service basic test", () => {
  const user = {
    id: 1,
    name: "John Doe"
  };

  assert.strictEqual(user.id, 1);
  assert.strictEqual(user.name, "John Doe");
});
