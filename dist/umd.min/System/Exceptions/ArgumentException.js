!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var n=t(require,exports);void 0!==n&&(module.exports=n)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","./SystemException","../Text/Utility","../../extends"],function(e,t){"use strict";/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
     */
var n=e("./SystemException"),o=e("../Text/Utility"),i=e("../../extends"),r=i["default"],u="ArgumentException",c=function(e){function t(t,n,i,r){var u,c=t?"{"+t+"} ":"";return u=e.call(this,o.trim(c+(n||"")),i,function(e){e.paramName=t,r&&r(e)})||this}return r(t,e),t.prototype.getName=function(){return u},t}(n.SystemException);t.ArgumentException=c,Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=c});
//# sourceMappingURL=ArgumentException.js.map