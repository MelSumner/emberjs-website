import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | community/guidelines', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:community/guidelines');
    assert.ok(route);
  });
});
