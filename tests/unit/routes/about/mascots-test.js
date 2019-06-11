import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about/mascots', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about/mascots');
    assert.ok(route);
  });
});
