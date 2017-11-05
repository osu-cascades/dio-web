define('vv-dio-web/routes/sensors', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    model: function model() {
      return [{
        id: 'dissolved-oxygen',
        name: 'Dissolved Oxygen',
        location: 'Ground level fish tank',
        reading: 15.67
      }, {
        id: 'pH',
        name: 'Potential of Hydrogen',
        location: 'Ground level fish tank',
        reading: 7.8
      }];
    }
  });
});