!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var n=t(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","./RegularExpressions","../Collections/Enumeration/EmptyEnumerator","../Collections/Enumeration/EnumeratorBase"],function(e,t){"use strict";/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var n=e("./RegularExpressions"),r=e("../Collections/Enumeration/EmptyEnumerator"),o=e("../Collections/Enumeration/EnumeratorBase"),u=function(){function e(e){e instanceof n.Regex?this._pattern=e:this._pattern=new n.Regex(e)}return e.prototype.matches=function(e){var t,n=this;return new o.EnumeratorBase(function(){t=0},function(r){var o=n._pattern.match(e,t);return o.success?(t=o.index+o.length,r.yieldReturn(o)):r.yieldBreak()})},e.matches=function(t,n){return t&&n?new e(n).matches(t):r.EmptyEnumerator},e}();t.RegexMatchEnumerator=u,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=u.matches});
//# sourceMappingURL=RegexMatchEnumerator.js.map