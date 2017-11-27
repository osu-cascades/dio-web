define('vv-dio-web/models/reading', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    reading: _emberData.default.attr('string'),
    location: _emberData.default.attr('string'),
    createdAt: _emberData.default.attr('string')
  });
});