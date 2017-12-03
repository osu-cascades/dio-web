import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

let sensor = EmberObject.create({
  name: 'test-sensor',
  reading: 23,
  location: 'test-location'
});

moduleForComponent('sensor-display', 'Integration | Component | sensor display', {
  integration: true
});

test('should display sensor details', function (assert) {
  this.set('sensorObj', sensor);
  this.render(hbs`{{sensor-display sensor=sensorObj}}`);
  assert.equal(this.$('.sensor-card h3').text(), 'test-sensor', 'Name: test-sensor');
  assert.equal(this.$('.sensor-card .reading').text().trim(), 'reading: 23', 'Reading: 23');
  assert.equal(this.$('.sensor-card .location').text().trim(), 'location: test-location', 'Location: test-location');
});
