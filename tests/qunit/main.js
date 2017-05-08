(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "QUnit", "./Arrays/_all", "./Collections/_all", "./Linq/_all", "./Uri", "./Integer", "./Tasks/Parallel"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ///<reference types="qunit"/>
    ///<amd-dependency path="QUnit"/>
    var _all_1 = require("./Arrays/_all");
    var _all_2 = require("./Collections/_all");
    var _all_3 = require("./Linq/_all");
    var Uri_1 = require("./Uri");
    var Integer_1 = require("./Integer");
    var Parallel_1 = require("./Tasks/Parallel");
    Integer_1.default();
    _all_1.default();
    Uri_1.default();
    _all_2.default();
    _all_3.default();
    Parallel_1.default();
    QUnit.start();
});
//# sourceMappingURL=main.js.map