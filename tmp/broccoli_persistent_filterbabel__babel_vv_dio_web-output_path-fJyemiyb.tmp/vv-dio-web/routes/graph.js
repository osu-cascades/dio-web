define('vv-dio-web/routes/graph', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return ['DERP', 'DERP2', 'DERP3'];
    }
  });
});