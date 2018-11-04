/* eslint-env browser */

var Writer = Writer || {};

Writer.App = (function() {
  "use strict";

  var that = {};

  function init() {
    console.log("in: init() [Writer.js]");
  }

  that.init = init;
  return that;
}());

Writer.App.init();