!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var n=t(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","./TaskHandlerBase","../../Exceptions/ArgumentNullException","../../../extends"],function(e,t){"use strict";/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var n=e("./TaskHandlerBase"),o=e("../../Exceptions/ArgumentNullException"),i=e("../../../extends"),r=i["default"],s=function(e){function t(t){var n=e.call(this)||this;if(n._action=t,!t)throw new o.ArgumentNullException("action");return n}return r(t,e),t.prototype._onExecute=function(){this._action()},t.prototype._onDispose=function(){e.prototype._onDispose.call(this),this._action=null},t}(n.TaskHandlerBase);t.TaskHandler=s,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=s});
//# sourceMappingURL=TaskHandler.js.map