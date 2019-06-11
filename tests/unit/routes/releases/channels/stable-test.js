import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | releases/channels/stable', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:releases/channels/stable');
    assert.ok(route);
  });
});
