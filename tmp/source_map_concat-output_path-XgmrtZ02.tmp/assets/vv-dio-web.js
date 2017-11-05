"use strict";



define('vv-dio-web/app', ['exports', 'vv-dio-web/resolver', 'ember-load-initializers', 'vv-dio-web/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Application = Ember.Application;


  var App = Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('vv-dio-web/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('vv-dio-web/helpers/app-version', ['exports', 'vv-dio-web/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('vv-dio-web/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('vv-dio-web/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('vv-dio-web/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'vv-dio-web/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('vv-dio-web/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('vv-dio-web/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('vv-dio-web/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('vv-dio-web/initializers/export-application-global', ['exports', 'vv-dio-web/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('vv-dio-web/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('vv-dio-web/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('vv-dio-web/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("vv-dio-web/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('vv-dio-web/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('vv-dio-web/router', ['exports', 'vv-dio-web/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var EmberRouter = Ember.Router;


  var Router = EmberRouter.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
    this.route('sensors');
    this.route('graph');
  });

  exports.default = Router;
});
define('vv-dio-web/routes/about', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('vv-dio-web/routes/contact', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('vv-dio-web/routes/graph', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('vv-dio-web/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({
    beforeModel: function beforeModel() {
      this.replaceWith('sensors');
    }
  });
});
define('vv-dio-web/routes/sensors', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Route = Ember.Route;
  exports.default = Route.extend({});
});
define('vv-dio-web/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("vv-dio-web/templates/about", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mw39LH9A", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"About DiO and Volcano Veggies\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    DiO is an aquaponics management system, built for Volcano Veggies.\\n  \"],[8],[0,\"\\n\"],[4,\"link-to\",[\"contact\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    Contact Us\\n\"]],\"parameters\":[]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "vv-dio-web/templates/about.hbs" } });
});
define("vv-dio-web/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "6YaNyamU", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"menu\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[7],[0,\"\\n        \"],[6,\"em\"],[7],[0,\"DiO\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"    \"],[6,\"div\"],[9,\"class\",\"links\"],[7],[0,\"\\n\"],[4,\"link-to\",[\"graph\"],null,{\"statements\":[[0,\"        Graph\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"about\"],null,{\"statements\":[[0,\"        About\\n\"]],\"parameters\":[]},null],[4,\"link-to\",[\"contact\"],null,{\"statements\":[[0,\"        Contact\\n\"]],\"parameters\":[]},null],[0,\"    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"body\"],[7],[0,\"\\n    \"],[1,[18,\"outlet\"],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "vv-dio-web/templates/application.hbs" } });
});
define("vv-dio-web/templates/contact", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qUTP5K0/", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Contact Us\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About\\n\"]],\"parameters\":[]},null],[0,\"  \"],[6,\"p\"],[7],[0,\"\\n    \"],[6,\"a\"],[9,\"href\",\"mailto:tappertj@oregonstate.edu\"],[7],[0,\"tappertj@oregonstate.edu\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "vv-dio-web/templates/contact.hbs" } });
});
define("vv-dio-web/templates/graph", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "U+S0T502", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Graph\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"\\n    Insert Graph here\\n  \"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "vv-dio-web/templates/graph.hbs" } });
});
define("vv-dio-web/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Gp7VSV9j", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "vv-dio-web/templates/index.hbs" } });
});
define("vv-dio-web/templates/sensors", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "RnEdPPTr", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"jumbo\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"right tomster\"],[7],[8],[0,\"\\n  \"],[6,\"h2\"],[7],[0,\"Sensors\"],[8],[0,\"\\n  \"],[6,\"p\"],[7],[0,\"LIST O' SENSORS\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"about\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    About Us\\n\"]],\"parameters\":[]},null],[8]],\"hasEval\":false}", "meta": { "moduleName": "vv-dio-web/templates/sensors.hbs" } });
});


define('vv-dio-web/config/environment', [], function() {
  var prefix = 'vv-dio-web';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("vv-dio-web/app")["default"].create({"name":"vv-dio-web","version":"0.0.0+ecf6e04d"});
}
//# sourceMappingURL=vv-dio-web.map
