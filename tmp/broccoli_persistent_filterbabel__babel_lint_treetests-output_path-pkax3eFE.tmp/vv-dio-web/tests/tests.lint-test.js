define('vv-dio-web/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/list-sensors-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/list-sensors-test.js should pass ESLint\n\n6:64 - \'assert\' is defined but never used. (no-unused-vars)\n10:64 - \'assert\' is defined but never used. (no-unused-vars)\n14:54 - \'assert\' is defined but never used. (no-unused-vars)\n18:59 - \'assert\' is defined but never used. (no-unused-vars)\n22:63 - \'assert\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});