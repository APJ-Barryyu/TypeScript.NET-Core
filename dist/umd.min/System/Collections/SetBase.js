/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","./LinkedNodeList","../Exceptions/ArgumentNullException","./Enumeration/Enumerator","./Enumeration/EmptyEnumerator","../Disposable/dispose","../Compare","./CollectionBase","../../extends"],t)}(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=t("./LinkedNodeList"),o=t("../Exceptions/ArgumentNullException"),r=t("./Enumeration/Enumerator"),i=t("./Enumeration/EmptyEnumerator"),s=t("../Disposable/dispose"),u=t("../Compare"),c=t("./CollectionBase"),a=t("../../extends"),p=a["default"],f=void 0,l="other",h=function(t){function e(e){var n=t.call(this,f,u.areEqual)||this;return n._importEntries(e),n}return p(e,t),e.prototype._getSet=function(){var t=this._set;return t||(this._set=t=new n.LinkedNodeList),t},e.prototype.getCount=function(){return this._set?this._set.unsafeCount:0},e.prototype.exceptWith=function(t){var e=this;if(!t)throw new o.ArgumentNullException(l);r.forEach(t,function(t){e._removeInternal(t)&&e._incrementModified()}),e._signalModification()},e.prototype.intersectWith=function(t){if(!t)throw new o.ArgumentNullException(l);var n=this;if(t instanceof e){var r=n._set;r&&r.forEach(function(e){!t.contains(e.value)&&n._removeInternal(e.value)&&n._incrementModified()},!0),n._signalModification()}else s.using(n.newUsing(t),function(t){return n.intersectWith(t)})},e.prototype.isProperSubsetOf=function(t){var n=this;if(!t)throw new o.ArgumentNullException(l);return t instanceof e?t.isProperSupersetOf(this):s.using(this.newUsing(t),function(t){return t.isProperSupersetOf(n)})},e.prototype.isProperSupersetOf=function(t){var n=this;if(!t)throw new o.ArgumentNullException(l);var i,u=!0;return t instanceof e?(u=this.isSupersetOf(t),i=t.getCount()):i=s.using(this.newUsing(),function(e){return r.forEach(t,function(t){return e.add(t),u=n.contains(t)}),e.getCount()}),u&&this.getCount()>i},e.prototype.isSubsetOf=function(t){var n=this;if(!t)throw new o.ArgumentNullException(l);return t instanceof e?t.isSupersetOf(this):s.using(this.newUsing(t),function(t){return t.isSupersetOf(n)})},e.prototype.isSupersetOf=function(t){var e=this;if(!t)throw new o.ArgumentNullException(l);var n=!0;return r.forEach(t,function(t){return n=e.contains(t)}),n},e.prototype.overlaps=function(t){var e=this;if(!t)throw new o.ArgumentNullException(l);var n=!1;return r.forEach(t,function(t){return!(n=e.contains(t))}),n},e.prototype.setEquals=function(t){if(!t)throw new o.ArgumentNullException(l);return this.getCount()==(t instanceof e?t.getCount():s.using(this.newUsing(t),function(t){return t.getCount()}))&&this.isSubsetOf(t)},e.prototype.symmetricExceptWith=function(t){if(!t)throw new o.ArgumentNullException(l);var n=this;t instanceof e?(r.forEach(t,function(t){n.contains(t)?n._removeInternal(t)&&n._incrementModified():n._addInternal(t)&&n._incrementModified()}),n._signalModification()):s.using(this.newUsing(t),function(t){return n.symmetricExceptWith(t)})},e.prototype.unionWith=function(t){this.importEntries(t)},e.prototype._clearInternal=function(){var t=this._set;return t?t.clear():0},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._set=null},e.prototype.contains=function(t){return!(!this.getCount()||!this._getNode(t))},e.prototype.getEnumerator=function(){var t=this;t.throwIfDisposed();var e=t._set;return e&&t.getCount()?n.LinkedNodeList.valueEnumeratorFrom(e):i.EmptyEnumerator},e.prototype.forEach=function(e,n){var o=this._set;return o?n?t.prototype.forEach.call(this,e,n):o.forEach(function(t,n){return e(t.value,n)}):0},e.prototype._removeNode=function(t){return!!t&&0!=this.remove(t.value)},e.prototype.removeFirst=function(){var t=this._set;return this._removeNode(t&&t.first)},e.prototype.removeLast=function(){var t=this._set;return this._removeNode(t&&t.last)},e}(c.CollectionBase);e.SetBase=h,e["default"]=h});
//# sourceMappingURL=SetBase.js.map