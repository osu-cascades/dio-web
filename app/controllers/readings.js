import Controller from '@ember/controller';
import Ember from 'ember';
import _ from 'lodash';
import moment from 'moment';

export default Controller.extend({
  readingData:
    Ember.computed('model', function(){
      let allReadings = this.get('model').mapBy('reading');
      return _.slice(allReadings, allReadings.length - 300, allReadings.length)
    }),

  readingLabels:
    Ember.computed('model', function(){
      let labels = [];
      let dateTimes = this.get('model').mapBy('createdAt');

      _.each(dateTimes, function(date){
        labels.push(moment(date).format('HH:mm:ss a'));
      });

      return _.slice(labels, labels.length - 300, labels.length);
    }),

  readingConfig:
    Ember.computed('model', 'readingLabels', function() {
      return {
        labels: this.get('readingLabels'),
        datasets: [{
          label: 'Dissolved Oxygen',
          borderColor: 'rgba(199,45,45,0.6)',
          backgroundColor: 'rgba(199,45,45,0.2)',
          data: this.get('readingData')
        }]
      }
    }),

  lastReading:
    Ember.computed('readingData', function() {
      let readings = this.get('readingData');
      return _.slice(readings, readings.length - 1, readings.length);
    })
});
