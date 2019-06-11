import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | releases/editions/octane', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:releases/editions/octane');
    assert.ok(route);
  });
});
