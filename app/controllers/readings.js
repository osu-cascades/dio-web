import Controller from '@ember/controller';
import Ember from 'ember';
import _ from 'lodash';
import moment from 'moment';

export default Controller.extend({
  readingLabels:
    Ember.computed('model', function(){
      let labels = [];
      let dateTimes = this.get('model').mapBy('createdAt');

      _.each(dateTimes, function(date){
        labels.push(moment(date).format('HH:mm:ss a'));
      });
      return labels;
    }),

  readingData:
    Ember.computed('model', function(){
      return this.get('model').mapBy('reading');
    }),

  readingChart:
    Ember.computed('model', 'readingLabels', function() {
      return {
        labels: this.get('readingLabels'),
        datasets: [{
          label: 'Dissolved Oxygen',
          fillColor: 'rgba(199,45,45,0.2)',
          strokeColor: 'rgba(199,45,45,1)',
          pointColor: 'rgba(199,45,45,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(199,45,45,1)',
          data: this.get('readingData')
        }]
      }
    })
});
