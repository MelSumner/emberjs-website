import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | about/users', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:about/users');
    assert.ok(route);
  });
});
