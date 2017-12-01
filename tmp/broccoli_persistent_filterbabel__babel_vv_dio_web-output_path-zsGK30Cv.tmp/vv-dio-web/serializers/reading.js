define('vv-dio-web/serializers/reading', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.RESTSerializer.extend({
    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {

      payload = { readings: payload };

      return this._super(store, primaryModelClass, payload, id, requestType);
    }
  });
});