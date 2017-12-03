define("ember-paper/templates/components/paper-tabs", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "6uHG4WGo", "block": "{\"symbols\":[\"&default\"],\"statements\":[[5,\"md-tabs-wrapper\",[[10,\"class\",[25,\"if\",[[20,[\"shouldStretch\"]],\"md-stretch-tabs\"],null],null]],[[],[]],{\"statements\":[[0,\"\\n\\n\"],[4,\"if\",[[20,[\"shouldPaginate\"]]],null,{\"statements\":[[0,\"    \"],[5,\"md-prev-button\",[[9,\"role\",\"button\"],[10,\"class\",[25,\"unless\",[[20,[\"canPageBack\"]],\"md-disabled\"],null],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"previousPage\"],null],null]],[[],[]],{\"statements\":[[0,\"\\n      \"],[1,[25,\"paper-icon\",[\"keyboard-arrow-left\"],null],false],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n    \"],[5,\"md-next-button\",[[9,\"role\",\"button\"],[10,\"class\",[25,\"unless\",[[20,[\"canPageForward\"]],\"md-disabled\"],null],null],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"nextPage\"],null],null]],[[],[]],{\"statements\":[[0,\"\\n      \"],[1,[25,\"paper-icon\",[\"keyboard-arrow-left\"],null],false],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n  \"],[5,\"md-tabs-canvas\",[[10,\"class\",[26,[[25,\"if\",[[20,[\"shouldPaginate\"]],\"md-paginated\"],null],\" \",[25,\"if\",[[20,[\"shouldCenter\"]],\"md-center-tabs\"],null]]]],[9,\"tabindex\",\"-1\"],[9,\"role\",\"tablist\"]],[[],[]],{\"statements\":[[0,\"\\n    \"],[5,\"md-pagination-wrapper\",[[10,\"class\",[25,\"if\",[[20,[\"shouldCenter\"]],\"md-center-tabs\"],null],null],[10,\"style\",[25,\"if\",[[20,[\"shouldPaginate\"]],[20,[\"paginationStyle\"]]],null],null]],[[],[]],{\"statements\":[[0,\"\\n\\n      \"],[11,1,[[25,\"hash\",null,[[\"tab\"],[[25,\"component\",[\"paper-tab\"],[[\"noInk\",\"selected\",\"onSelect\"],[[20,[\"noInk\"]],[20,[\"selected\"]],[25,\"action\",[[19,0,[]],\"onChange\"],null]]]]]]]]],[0,\"\\n\\n\"],[4,\"unless\",[[20,[\"noInkBar\"]]],null,{\"statements\":[[0,\"        \"],[1,[25,\"paper-ink-bar\",null,[[\"movingRight\",\"left\",\"right\"],[[20,[\"movingRight\"]],[20,[\"inkBarLeft\"]],[20,[\"inkBarRight\"]]]]],false],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"\\n    \"]],\"parameters\":[]}],[0,\"\\n  \"]],\"parameters\":[]}],[0,\"\\n\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "ember-paper/templates/components/paper-tabs.hbs" } });
});