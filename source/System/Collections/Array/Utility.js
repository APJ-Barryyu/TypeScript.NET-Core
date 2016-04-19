/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../../Types", "../../Integer", "../../Compare", "../../Exceptions/ArgumentException", "../../Exceptions/ArgumentNullException", "../../Exceptions/ArgumentOutOfRangeException"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Types_1 = require("../../Types");
    var Integer_1 = require("../../Integer");
    var Compare_1 = require("../../Compare");
    var ArgumentException_1 = require("../../Exceptions/ArgumentException");
    var ArgumentNullException_1 = require("../../Exceptions/ArgumentNullException");
    var ArgumentOutOfRangeException_1 = require("../../Exceptions/ArgumentOutOfRangeException");
    function initialize(length) {
        Integer_1.default.assert(length, 'length');
        var array;
        if (length > 65536)
            array = new Array(length);
        else {
            array = [];
            array.length = length;
        }
        return array;
    }
    exports.initialize = initialize;
    function copy(source, sourceIndex, length) {
        if (sourceIndex === void 0) { sourceIndex = 0; }
        if (length === void 0) { length = Infinity; }
        if (!source)
            return source;
        return copyTo(source, initialize(Math.min(length, Math.max(source.length - sourceIndex, 0))), sourceIndex, 0, length);
    }
    exports.copy = copy;
    var CBN = 'Cannot be null.', CB0 = 'Cannot be zero.', CBL0 = 'Cannot be less than zero.', VFN = 'Must be a valid finite number';
    function copyTo(source, destination, sourceIndex, destinationIndex, length) {
        if (sourceIndex === void 0) { sourceIndex = 0; }
        if (destinationIndex === void 0) { destinationIndex = 0; }
        if (length === void 0) { length = Infinity; }
        if (!source)
            throw new ArgumentNullException_1.default('source', CBN);
        if (!destination)
            throw new ArgumentNullException_1.default('destination', CBN);
        if (sourceIndex < 0)
            throw new ArgumentOutOfRangeException_1.default('sourceIndex', sourceIndex, CBL0);
        var sourceLength = source.length;
        if (sourceIndex >= sourceLength)
            throw new ArgumentOutOfRangeException_1.default('sourceIndex', sourceIndex, 'Must be less than the length of the source array.');
        if (destination.length < 0)
            throw new ArgumentOutOfRangeException_1.default('destinationIndex', destinationIndex, CBL0);
        var maxLength = source.length - sourceIndex;
        if (isFinite(length) && length > maxLength)
            throw new ArgumentOutOfRangeException_1.default('sourceIndex', sourceIndex, 'Source index + length cannot exceed the length of the source array.');
        length = Math.min(length, maxLength);
        for (var i = 0; i < length; ++i) {
            destination[destinationIndex + i] = source[sourceIndex + i];
        }
        return destination;
    }
    exports.copyTo = copyTo;
    function contains(array, item, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = Compare_1.areEqual; }
        if (array && array.length) {
            if (Array.isArray(array))
                return array.indexOf(item) != -1;
            for (var i = 0; i < array.length; ++i) {
                if (equalityComparer(array[i], item))
                    return true;
            }
        }
        return false;
    }
    exports.contains = contains;
    function replace(array, old, newValue, max) {
        var count = 0;
        if (max !== 0) {
            if (!max)
                max = Infinity;
            else if (max < 0)
                throw new ArgumentOutOfRangeException_1.default('max', max, CBL0);
            for (var i = (array.length - 1); i >= 0; --i) {
                if (array[i] === old) {
                    array[i] = newValue;
                    ++count;
                    if (!--max)
                        break;
                }
            }
        }
        return count;
    }
    exports.replace = replace;
    function updateRange(array, value, index, length) {
        Integer_1.default.assert(index, 'index');
        Integer_1.default.assert(index, 'length');
        var end = index + length;
        for (var i = index; i < end; ++i) {
            array[i] = value;
        }
    }
    exports.updateRange = updateRange;
    function clear(array, index, length) {
        updateRange(array, null, index, length);
    }
    exports.clear = clear;
    function register(array, item, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = Compare_1.areEqual; }
        if (!array)
            throw new ArgumentNullException_1.default('array', CBN);
        var len = array.length;
        var ok = !len || !contains(array, item, equalityComparer);
        if (ok)
            array[len] = item;
        return ok;
    }
    exports.register = register;
    function findIndex(array, predicate) {
        if (!array)
            throw new ArgumentNullException_1.default('array', CBN);
        if (!Types_1.default.isFunction(predicate))
            throw new ArgumentException_1.default('predicate', 'Must be a function.');
        var len = array.length;
        for (var i = 0; i < len; ++i) {
            if ((i) in (array) && predicate(array[i]))
                return i;
        }
        return -1;
    }
    exports.findIndex = findIndex;
    function forEach(source, fn) {
        if (!source)
            throw new ArgumentNullException_1.default('source', CBN);
        if (fn) {
            for (var i = 0; i < source.length; ++i) {
                if (fn(source[i]) === false)
                    break;
            }
        }
        return source;
    }
    exports.forEach = forEach;
    function applyTo(target, fn) {
        if (!target)
            throw new ArgumentNullException_1.default('target', CBN);
        if (fn) {
            for (var i = 0; i < target.length; ++i) {
                target[i] = fn(target[i]);
            }
        }
        return target;
    }
    exports.applyTo = applyTo;
    function removeIndex(array, index) {
        if (!array)
            throw new ArgumentNullException_1.default('array', CBN);
        Integer_1.default.assert(index, 'index');
        if (index < 0)
            throw new ArgumentOutOfRangeException_1.default('index', index, CBL0);
        var exists = index < array.length;
        if (exists)
            array.splice(index, 1);
        return exists;
    }
    exports.removeIndex = removeIndex;
    function remove(array, value, max, equalityComparer) {
        if (equalityComparer === void 0) { equalityComparer = Compare_1.areEqual; }
        if (!array)
            throw new ArgumentNullException_1.default('array', CBN);
        var count = 0;
        if (array && array.length && max !== 0) {
            if (!max)
                max = Infinity;
            else if (max < 0)
                throw new ArgumentOutOfRangeException_1.default('max', max, CBL0);
            for (var i = (array.length - 1); i >= 0; --i) {
                if (equalityComparer(array[i], value)) {
                    array.splice(i, 1);
                    ++count;
                    if (!--max)
                        break;
                }
            }
        }
        return count;
    }
    exports.remove = remove;
    function repeat(element, count) {
        Integer_1.default.assert(count, 'count');
        if (count < 0)
            throw new ArgumentOutOfRangeException_1.default('count', count, CBL0);
        var result = initialize(count);
        for (var i = 0; i < count; ++i) {
            result[i] = element;
        }
        return result;
    }
    exports.repeat = repeat;
    function range(first, count, step) {
        if (step === void 0) { step = 1; }
        if (isNaN(first) || !isFinite(first))
            throw new ArgumentOutOfRangeException_1.default('first', first, VFN);
        if (isNaN(count) || !isFinite(count))
            throw new ArgumentOutOfRangeException_1.default('count', count, VFN);
        if (count < 0)
            throw new ArgumentOutOfRangeException_1.default('count', count, CBL0);
        var result = initialize(count);
        for (var i = 0; i < count; ++i) {
            result[i] = first;
            first += step;
        }
        return result;
    }
    exports.range = range;
    function rangeUntil(first, until, step) {
        if (step === void 0) { step = 1; }
        if (step == 0)
            throw new ArgumentOutOfRangeException_1.default('step', step, CB0);
        return range(first, (until - first) / step, step);
    }
    exports.rangeUntil = rangeUntil;
    function flatten(a, recurseDepth) {
        if (recurseDepth === void 0) { recurseDepth = 0; }
        var result = [];
        for (var i = 0; i < a.length; i++) {
            var x = a[i];
            if (Array.isArray(x)) {
                if (recurseDepth > 0)
                    x = flatten(x, recurseDepth - 1);
                for (var n = 0; n < x.length; n++)
                    result.push(x[n]);
            }
            else
                result.push(x);
        }
        return result;
    }
    exports.flatten = flatten;
});
//# sourceMappingURL=Utility.js.map