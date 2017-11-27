define('vv-dio-web/tests/integration/components/sensor-display-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  var EmberObject = Ember.Object;


  var sensor = EmberObject.create({
    name: 'test-sensor',
    reading: 23,
    location: 'test-location'
  });

  (0, _emberQunit.moduleForComponent)('sensor-display', 'Integration | Component | sensor display', {
    integration: true
  });

  (0, _emberQunit.test)('should display sensor details', function (assert) {
    this.set('sensorObj', sensor);
    this.render(Ember.HTMLBars.template({
      "id": "LYsguBIX",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"sensor-display\",null,[[\"sensor\"],[[20,[\"sensorObj\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.sensor-card h3').text(), 'test-sensor', 'Name: test-sensor');
    assert.equal(this.$('.sensor-card .reading').text().trim(), 'reading: 23', 'Reading: 23');
    assert.equal(this.$('.sensor-card .location').text().trim(), 'location: test-location', 'Location: test-location');
  });
});