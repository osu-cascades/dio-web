define('ember-paper/components/paper-reset-button', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend(_transitionMixin.default, {
    tagName: 'button',
    attributeBindings: ['tabindex'],
    transitionClass: 'ng',
    onReset: null,

    mouseUp: function mouseUp(e) {
      var onReset = this.get('onReset');
      if (onReset === null) {
        return;
      }
      onReset(e);
    }
  });
});