/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(e){if("object"==typeof module&&"object"==typeof module.exports){var t=e(require,exports);void 0!==t&&(module.exports=t)}else"function"==typeof define&&define.amd&&define(["require","exports","../Exceptions/ArgumentNullException","./ReadOnlyCollectionBase","./Enumeration/Enumerator","../Types","../../extends"],e)}(function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("../Exceptions/ArgumentNullException"),o=e("./ReadOnlyCollectionBase"),r=e("./Enumeration/Enumerator"),u=e("../Types"),i=e("../../extends"),l=i["default"],s=function(e){function t(t){var o=e.call(this)||this;if(!t)throw new n.ArgumentNullException("collection");return u.Type.isArrayLike(t)?(o.__getCount=function(){return t.length},o.__getEnumerator=function(){return r.from(t)}):(o.__getCount=function(){return t.count},o.__getEnumerator=function(){return t.getEnumerator()}),o}return l(t,e),t.prototype._getCount=function(){return this.throwIfDisposed(),this.__getCount()},t.prototype._getEnumerator=function(){return this.throwIfDisposed(),this.__getEnumerator()},t.prototype._onDispose=function(){e.prototype._onDispose.call(this);var t=this;t.__getCount=null,t.__getEnumerator=null},t}(o.ReadOnlyCollectionBase);t["default"]=s});
//# sourceMappingURL=ReadOnlyCollectionWrapper.js.map