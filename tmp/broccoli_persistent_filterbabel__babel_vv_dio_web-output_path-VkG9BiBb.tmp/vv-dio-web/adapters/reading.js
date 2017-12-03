define('vv-dio-web/adapters/reading', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.JSONAPIAdapter.extend({
    host: 'https://vv-dio-service-staging.herokuapp.com', // 'http://localhost:3000',
    namespace: 'api/v1/do',

    pathForType: function pathForType() {
      return 'readings';
    }
  });
});