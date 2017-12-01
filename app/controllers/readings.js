import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  readingData: Ember.computed('model', () => {
    return {
      labels: ['One', 'Two'],
      datasets: [{
        label: 'Dissolved Oxygen',
        data: [5,6]
      }]
    }
  })
});
