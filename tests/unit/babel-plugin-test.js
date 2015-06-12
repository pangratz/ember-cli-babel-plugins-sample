import { module, test } from "qunit";

module("test babel plugins");

test("babel-plugin for demo1", function(assert) {
  assert.equal("babel-plugin-demo1", "demo1");
});

test("babel-plugin for demo2", function(assert) {
  assert.equal("babel-plugin-demo2", "demo2");
});
