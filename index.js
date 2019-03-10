var vm = require('vm');


var requireWithVersionSupport = (moduleName) => {
  // moduleName = mongo@2.1
  var name = moduleName.split('@')[0];
  // versioned import of libraries defaults to available
  // version installed in the running environment
  return require(name);
};

var runInLocalSandbox = (ruleScript, args, configuration) => {

  var scriptTemplate =`
    (${ruleScript}).apply(null, __ruleArgs)
  `;

  var executableScript = new vm.Script(scriptTemplate);

  var webtaskGlobalContext = {};
  // filling rules engine available modules into context
  // ref: https://auth0.com/docs/appliance/modules
  require('auth0-authz-rules-api').extend(webtaskGlobalContext);

  var sandboxContext = Object.assign(webtaskGlobalContext, {
    __ruleArgs: args,
    require: requireWithVersionSupport,
    configuration: configuration || {}
  });

  var sandbox = vm.createContext(sandboxContext);

  executableScript.runInContext(sandbox);

};

module.exports = runInLocalSandbox;
