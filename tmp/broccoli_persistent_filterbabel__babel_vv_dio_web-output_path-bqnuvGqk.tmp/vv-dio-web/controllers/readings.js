define('vv-dio-web/controllers/readings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    readingData: Ember.computed('readings', function () {
      return {
        labels: undefined.get('readings').mapBy('createdAt'),
        datasets: [{
          label: 'Dissolved Oxygen',
          data: undefined.get('readings').mapBy('reading.length')
        }]
      };
    })
  });
});