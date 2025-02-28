import { module, test } from 'qunit';
import { setupTest } from 'streaming-website/tests/helpers';

module('Unit | Route | reviews', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:reviews');
    assert.ok(route);
  });
});
