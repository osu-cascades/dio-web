define('ember-paper/components/paper-toast-text', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({
    tagName: 'span',
    classNames: ['md-toast-text']
  });
});