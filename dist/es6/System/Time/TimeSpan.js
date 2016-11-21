/*!
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon .NET source but with many additions and improvements.
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
import { Type } from "../Types";
import { TimeUnit } from "./TimeUnit";
import { ClockTime } from "./ClockTime";
import { TimeQuantity } from "./TimeQuantity";
// noinspection JSUnusedLocalSymbols
/**
 * TimeSpan expands on TimeQuantity to provide an class that is similar to .NET's TimeSpan including many useful static methods.
 */
export class TimeSpan extends TimeQuantity {
    // In .NET the default type is Ticks, but for JavaScript, we will use Milliseconds.
    constructor(value, units = TimeUnit.Milliseconds) {
        const ms = TimeUnit.toMilliseconds(value, units);
        super(ms);
        const _ = this;
        _.ticks = ms * 10000 /* Millisecond */;
        _.milliseconds = ms;
        _.seconds = ms / 1000 /* Second */;
        _.minutes = ms / 60000 /* Minute */;
        _.hours = ms / 3600000 /* Hour */;
        _.days = ms / 86400000 /* Day */;
    }
    /**
     * Provides an standard interface for acquiring the total time.
     * @returns {TimeSpan}
     */
    get total() {
        return this;
    }
    // Instead of the confusing getTotal versus unit name, expose a 'ClockTime' value which reports the individual components.
    get time() {
        const _ = this;
        let t = _._time;
        if (!t)
            _._time = t = new ClockTime(_.getTotalMilliseconds());
        return t;
    }
    add(other) {
        if (Type.isNumber(other))
            throw new Error("Use .addUnit(value:number,units:TimeUnit) to add a numerical value amount.  Default units are milliseconds.\n" +
                ".add only supports quantifiable time values (ITimeTotal).");
        return new TimeSpan(this.getTotalMilliseconds() + other.total.milliseconds);
    }
    addUnit(value, units = TimeUnit.Milliseconds) {
        return new TimeSpan(this.getTotalMilliseconds() + TimeUnit.toMilliseconds(value, units));
    }
    static from(value, units) {
        return new TimeSpan(value, units);
    }
    static fromDays(value) {
        return new TimeSpan(value, TimeUnit.Days);
    }
    static fromHours(value) {
        return new TimeSpan(value, TimeUnit.Hours);
    }
    static fromMinutes(value) {
        return new TimeSpan(value, TimeUnit.Minutes);
    }
    static fromSeconds(value) {
        return new TimeSpan(value, TimeUnit.Seconds);
    }
    static fromMilliseconds(value) {
        return new TimeSpan(value, TimeUnit.Milliseconds);
    }
    static fromTicks(value) {
        return new TimeSpan(value, TimeUnit.Ticks);
    }
    static get zero() {
        return timeSpanZero || (timeSpanZero = new TimeSpan(0));
    }
}
let timeSpanZero;
export default TimeSpan;
//# sourceMappingURL=TimeSpan.js.map