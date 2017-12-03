define('vv-dio-web/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/reading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/reading.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/sensor.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/sensor.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/sensor-display.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sensor-display.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/readings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/readings.js should pass ESLint\n\n');
  });

  QUnit.test('models/reading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/reading.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/about.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/about.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact.js should pass ESLint\n\n');
  });

  QUnit.test('routes/graph.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/graph.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/readings.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/readings.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/reading.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/reading.js should pass ESLint\n\n');
  });
});