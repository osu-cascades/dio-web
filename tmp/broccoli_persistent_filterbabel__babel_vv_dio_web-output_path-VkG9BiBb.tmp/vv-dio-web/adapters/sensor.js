define('vv-dio-web/adapters/sensor', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: 'localhost:3000',
    namespace: 'api/v1/'
  });
});