import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | releases/channels/canary', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:releases/channels/canary');
    assert.ok(route);
  });
});
