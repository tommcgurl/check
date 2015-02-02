// Generated by CoffeeScript 1.9.0
(function() {
  var check,
    __slice = [].slice;

  check = {
    useWithFallback: function() {
      var fallback, obj, suspect, suspects, _i, _j, _len;
      obj = arguments[0], suspects = 3 <= arguments.length ? __slice.call(arguments, 1, _i = arguments.length - 1) : (_i = 1, []), fallback = arguments[_i++];
      if (typeof obj !== 'object') {
        return fallback;
      }
      for (_j = 0, _len = suspects.length; _j < _len; _j++) {
        suspect = suspects[_j];
        if (obj[suspect] == null) {
          return fallback;
        }
        obj = obj[suspect];
      }
      return obj;
    },
    use: function() {
      var obj, suspects;
      obj = arguments[0], suspects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return this.useWithFallback.apply(this, [obj].concat(__slice.call(suspects), [this.defaultFallback]));
    },
    check: function() {
      var obj, suspects;
      obj = arguments[0], suspects = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return !!this.useWithFallback.apply(this, [obj].concat(__slice.call(suspects), [this.defaultFallback]));
    },
    setDefaultFallback: function(fallback) {
      return this.defaultFallback = fallback;
    },
    defaultFallback: false
  };

  module.exports = check;

}).call(this);
