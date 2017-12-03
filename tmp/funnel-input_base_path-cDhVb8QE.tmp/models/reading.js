import DS from 'ember-data';

export default DS.Model.extend({
  reading: DS.attr('string'),
  location: DS.attr('string'),
  createdAt: DS.attr('date')
});
