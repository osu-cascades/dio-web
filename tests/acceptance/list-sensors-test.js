import { test } from 'qunit';
import moduleForAcceptance from 'vv-dio-web/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list sensors');

test('should show sensor displays on the home page', function (assert) {
  visit('/');
  andThen(function () {
    assert.equal(currentURL(), '/sensors', 'should redirect automatically')
  });
  andThen(function () {
    assert.equal(find('.sensor-card').length, 2, 'should see two sensors');
  });
});

test('should link to information about the company', function (assert) {
  visit('/');
  click('a:contains("About")');
  andThen(function () {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to contact information', function (assert) {
  visit('/');
  click('a:contains("Contact")');
  andThen(function () {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });
});

test('should link to the graph of sensor data', function (assert) {
  visit('/');
  click('a:contains("Graph")');
  andThen(function () {
    assert.equal(currentURL(), '/graph', 'should navigate to graph');
  });
});

test('should show details for the selected sensor', function (assert) {

});
