import { moduleForComponent, test } from "ember-qunit";

// {{my-component}} is defined in "babel-demo-addon"
moduleForComponent("my-component", {
  unit: true
});

test("babel-plugin-demo2 is replaced within the component, but not in tests", function(assert) {
  var component = this.subject();

  assert.equal(component.get("leProperty"), "demo2");

  // "babel-plugin-demo2" string is not replaced with "demo2" here
  assert.ok("babel-plugin-demo2".indexOf("babel-plugin") === 0);
});
