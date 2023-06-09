(function() {
  function vendorModule() {
    'use strict';
    // Velocity tries to register on jQuery first, if it's not present, then it registers itself globally
    // For FastBoot, jQuery and Velocity don't exist so we use a noop
    var Velocity = self.jQuery && self.jQuery.Velocity || self.$ && self.$.Velocity || self.Velocity || function(){};
    return { 'default': Velocity };
  }

  define('velocity', [], vendorModule);
})();
