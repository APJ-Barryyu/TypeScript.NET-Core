/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 */
define(["require","exports","./Disposable/DisposableBase","./Exceptions/ArgumentNullException","../extends"],function(e,t,r,o,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a["default"],u=null,l="ResolverBase",n=function(e){function t(t,r,a){void 0===a&&(a=!1);var i=e.call(this,l)||this;if(i._valueFactory=t,i._trapExceptions=r,i._allowReset=a,!t)throw new o.ArgumentNullException("valueFactory");return i._isValueCreated=!1,i}return i(t,e),t.prototype.getError=function(){return this._error},Object.defineProperty(t.prototype,"error",{get:function(){return this.getError()},enumerable:!0,configurable:!0}),t.prototype.getValue=function(){var e=this;if(e.throwIfDisposed(),null===e._isValueCreated)throw new Error("Recursion detected.");if(!e._isValueCreated&&e._valueFactory){e._isValueCreated=null;try{var t=void 0;if(!e._isValueCreated&&(t=e._valueFactory)){e._isValueCreated=null,this._allowReset||(this._valueFactory=u);var r=t();return e._value=r,e._error=void 0,r}}catch(o){if(e._error=o,!e._trapExceptions)throw o}finally{e._isValueCreated=!0}}return e._value},Object.defineProperty(t.prototype,"canReset",{get:function(){return this._allowReset&&!!this._valueFactory},enumerable:!0,configurable:!0}),t.prototype._onDispose=function(){this._valueFactory=u,this._value=u,this._isValueCreated=u},t.prototype.tryReset=function(){var e=this;return!!e._valueFactory&&(e._isValueCreated=!1,e._value=u,e._error=void 0,!0)},t}(r.DisposableBase);t.ResolverBase=n,t["default"]=n});
//# sourceMappingURL=ResolverBase.js.map