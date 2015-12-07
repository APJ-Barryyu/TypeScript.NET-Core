/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
(function (deps, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(deps, factory);
    }
})(["require", "exports", '../../Compare'], function (require, exports) {
    ///<reference path="../../FunctionTypes.d.ts"/>
    ///<reference path="../../IComparer.d.ts"/>
    ///<reference path="../Array/IArray.d.ts"/>
    ///<reference path="Order.d.ts"/>
    var Values = require('../../Compare');
    var SortContext = (function () {
        function SortContext(_next, _comparer, _order) {
            if (_comparer === void 0) { _comparer = Values.compare; }
            if (_order === void 0) { _order = 1; }
            this._next = _next;
            this._comparer = _comparer;
            this._order = _order;
        }
        Object.defineProperty(SortContext.prototype, "order", {
            get: function () { return this._order; },
            enumerable: true,
            configurable: true
        });
        SortContext.prototype.generateSortedIndexes = function (source) {
            var _this = this;
            if (source == null)
                return [];
            var result = source.map(function (s, i) { return i; });
            result.sort(function (a, b) { return _this.compare(source[a], source[b]); });
            return result;
        };
        SortContext.prototype.compare = function (a, b) {
            var _ = this;
            var d = _._comparer(a, b);
            if (d == 0 && _._next)
                return _._next.compare(a, b);
            return _._order * d;
        };
        return SortContext;
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SortContext;
});
//# sourceMappingURL=SortContext.js.map