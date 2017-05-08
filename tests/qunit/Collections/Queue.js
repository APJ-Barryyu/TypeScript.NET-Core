(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ICollection", "../../../dist/amd/System/Collections/Queue"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ICollectionTests = require("./ICollection");
    var Queue_1 = require("../../../dist/amd/System/Collections/Queue");
    function run() {
        ICollectionTests.StringCollection('Queue', new Queue_1.default());
        ICollectionTests.NumberCollection('Queue', new Queue_1.default());
        ICollectionTests.InstanceCollection('Queue', new Queue_1.default());
    }
    exports.default = run;
});
//# sourceMappingURL=Queue.js.map