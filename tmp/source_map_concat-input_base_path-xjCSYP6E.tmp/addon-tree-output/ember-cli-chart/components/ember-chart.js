define('ember-cli-chart/components/ember-chart', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'canvas',
    attributeBindings: ['width', 'height'],

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      var context = this.get('element');
      var data = this.get('data');
      var type = this.get('type');
      var options = this.get('options');

      var chart = new Chart(context, {
        type: type,
        data: data,
        options: options
      });
      this.set('chart', chart);
    },
    willDestroyElement: function willDestroyElement() {
      this._super.apply(this, arguments);
      this.get('chart').destroy();
    },
    didUpdateAttrs: function didUpdateAttrs() {
      this._super.apply(this, arguments);
      this.updateChart();
    },
    updateChart: function updateChart() {
      var chart = this.get('chart');
      var data = this.get('data');
      var options = this.get('options');
      var animate = this.get('animate');

      if (chart) {
        chart.config.data = data;
        chart.config.options = options;
        if (animate) {
          chart.update();
        } else {
          chart.update(0);
        }
      }
    }
  });
});