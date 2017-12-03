define('vv-dio-web/tests/unit/serializers/reading-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('reading', 'Unit | Serializer | reading', {
    // Specify the other units that are required for this test.
    needs: ['serializer:reading']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});