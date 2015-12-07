/*
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Types = require('../Types');

var _Types2 = _interopRequireDefault(_Types);

var TimeStamp = (function () {
    function TimeStamp(year, month) {
        var day = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
        var hour = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
        var minute = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
        var second = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
        var millisecond = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];
        var tick = arguments.length <= 7 || arguments[7] === undefined ? 0 : arguments[7];

        _classCallCheck(this, TimeStamp);

        // TODO: Add validation or properly carry out of range values...
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
        this.millisecond = millisecond;
        this.tick = tick;
        Object.freeze(this);
    }

    _createClass(TimeStamp, [{
        key: 'toJsDate',
        value: function toJsDate() {
            var _ = this;
            return new Date(_.year, _.month, _.day, _.hour, _.minute, _.second, _.millisecond + _.tick / 10000);
        }
    }], [{
        key: 'from',
        value: function from(d) {
            if (!_Types2['default'].isInstanceOf(d, Date) && _Types2['default'].hasMember(d, 'toJsDate')) d = d.toJsDate();
            if (_Types2['default'].isInstanceOf(d, Date)) {
                return new TimeStamp(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
            } else {
                throw Error('Invalid date type.');
            }
        }
    }]);

    return TimeStamp;
})();

exports['default'] = TimeStamp;
module.exports = exports['default'];
//# sourceMappingURL=TimeStamp.js.map
