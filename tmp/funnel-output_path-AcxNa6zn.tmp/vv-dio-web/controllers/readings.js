import Controller from '@ember/controller';
import Ember from 'ember';
import _ from 'lodash';
import moment from 'moment';

export default Controller.extend({
  readingLabels:
    Ember.computed('readings', () => {
      let labels = [];

      _.each(this.get('readings'), (reading) => {
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
        labels: this.get('readingLabels'),
        datasets: [{
          label: 'Dissolved Oxygen',
          fillColor: "rgba(199,45,45,0.2)",
          strokeColor: "rgba(199,45,45,1)",
          pointColor: "rgba(199,45,45,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(199,45,45,1)",
          data: this.get('readingData')
        }]
      }
    })
});
