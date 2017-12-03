define('vv-dio-web/controllers/readings', ['exports', 'lodash', 'moment'], function (exports, _lodash, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    readingLabels: Ember.computed('readings', function () {
      var labels = [];

      _lodash.default.each(undefined.get('readings'), function (reading) {
        var dateLabel = (0, _moment.default)(reading.createdAt).format('MMM Do, YYYY');
        labels.push(dateLabel);
      });

      return labels;
    }),

    readingData: Ember.computed('readings', function () {
      return _lodash.default.map(undefined.get('readings'), 'reading');
    }),

    readingChart: Ember.computed('readingLabels', 'readingData', function () {
      return {
        labels: undefined.get('readingLabels'),
        datasets: [{
          label: 'Dissolved Oxygen',
          fillColor: "rgba(199,45,45,0.2)",
          strokeColor: "rgba(199,45,45,1)",
          pointColor: "rgba(199,45,45,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(199,45,45,1)",
          data: undefined.get('readingData')
        }]
      };
    })
  });
});