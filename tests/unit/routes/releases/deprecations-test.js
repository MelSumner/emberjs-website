import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | releases/deprecations', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:releases/deprecations');
    assert.ok(route);
  });
});
