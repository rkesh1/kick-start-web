define(function (require) {
    "use strict";

    var sharedScope = require("sharedScope");

    // Using Shared Scope
    sharedScope.checkFunction = function () {
        console.log(">> Module2: I am from Shared Scope");
    }

    return {};
});