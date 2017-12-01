define('vv-dio-web/controllers/readings', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    readingData: Ember.computed('model', function () {
      return {
        labels: ['One', 'Two'],
        datasets: [{
          label: 'Dissolved Oxygen',
          data: [5, 6]
        }]
      };
    })
  });
});