import { module, test } from 'qunit';
import { setupTest } from 'streaming-website/tests/helpers';

module('Unit | Service | omdb', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:omdb');
    assert.ok(service);
  });
});
