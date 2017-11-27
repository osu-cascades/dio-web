define('vv-dio-web/controllers/application', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Controller = Ember.Controller;
  exports.default = Controller.extend({
    actions: {
      getLastReading: function getLastReading() {
        this.store.find('reading').then(function (reading) {});
      }
    }
  });
});