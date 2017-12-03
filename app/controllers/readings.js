import Controller from '@ember/controller';
import Ember from 'ember';
import _ from 'lodash';
import moment from 'moment';

export default Controller.extend({
  readingLabels:
    Ember.computed('model', function() {
      let labels = [];

      _.each(this.get('model.content'), (reading) => {
        let dateLabel = moment(reading.createdAt).format('MMM Do, YYYY');
        labels.push(dateLabel);
      });

      return labels;
    }),

  readingData:
    Ember.computed('readings', () => {
      return _.map(this.get('readings'), 'reading');
    }),

  readingChart:
    Ember.computed('readingLabels', 'readingData', () => {
      return {
        labels: ['Dec 01, 2017', 'Dec 02, 2017', 'Dec 03, 2017', 'Dec 04, 2017', 'Dec 05, 2017'],             //this.get('readingLabels'),
        datasets: [{
          label: 'Dissolved Oxygen',
          fillColor: 'rgba(199,45,45,0.2)',
          strokeColor: 'rgba(199,45,45,1)',
          pointColor: 'rgba(199,45,45,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(199,45,45,1)',
          data: [15.85, 15.86, 15.87, 15.86, 15.55]              //this.get('readingData')
        }]
      }
    })
});
