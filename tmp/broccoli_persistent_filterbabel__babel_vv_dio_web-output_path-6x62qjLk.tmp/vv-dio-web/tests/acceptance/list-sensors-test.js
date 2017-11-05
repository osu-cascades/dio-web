define('vv-dio-web/tests/acceptance/list-sensors-test', ['qunit', 'vv-dio-web/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | list sensors');

  (0, _qunit.test)('should show sensor displays on the home page', function (assert) {
    visit('/');
    andThen(function () {
      assert.equal(currentURL(), '/sensors', 'should redirect automatically');
    });
    andThen(function () {
      assert.equal(find('.sensor-card').length, 2, 'should see two sensors');
    });
  });

  (0, _qunit.test)('should link to information about the company', function (assert) {
    visit('/');
    click('a:contains("About")');
    andThen(function () {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });

  (0, _qunit.test)('should link to contact information', function (assert) {
    visit('/');
    click('a:contains("Contact")');
    andThen(function () {
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
    });
  });

  (0, _qunit.test)('should link to the graph of sensor data', function (assert) {
    visit('/');
    click('a:contains("Graph")');
    andThen(function () {
      assert.equal(currentURL(), '/graph', 'should navigate to graph');
    });
  });

  (0, _qunit.test)('should show details for the selected sensor', function (assert) {});
});