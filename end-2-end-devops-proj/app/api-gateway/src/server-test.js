const test = require("node:test");
const assert = require("node:assert");

test("api gateway configuration test", () => {
  const port = process.env.PORT || 3000;

  assert.strictEqual(Number(port), 3000);
});
