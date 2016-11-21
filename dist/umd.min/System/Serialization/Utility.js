!function(e,t){if("object"==typeof module&&"object"==typeof module.exports){var r=t(require,exports);void 0!==r&&(module.exports=r)}else"function"==typeof define&&define.amd&&define(e,t)}(["require","exports","../Types","../Exceptions/InvalidOperationException"],function(e,t){"use strict";function r(e,t){var r=e;switch(typeof r){case a.Type.UNDEFINED:case a.Type.STRING:return r;case a.Type.BOOLEAN:return r?u:p;case a.Type.NUMBER:return o+r;default:if(null===r)return r;if(i(r))return r.serialize();if(t)return t;var n=new s.InvalidOperationException("Attempting to serialize unidentifiable type.");throw n.data.value=r,n}}function i(e){return a.Type.hasMemberOfType(e,"serialize",a.Type.FUNCTION)}function n(e,t,r){if(e)switch(t&&(e=e.toLowerCase()),e){case"null":return null;case a.Type.UNDEFINED:return;case u:return!0;case p:return!1;default:var i=e.replace(/^\s+|,|\s+$/g,o);if(i)if(/^\d+$/g.test(i)){var n=parseInt(i);if(!isNaN(n))return n}else{var s=parseFloat(e);if(!isNaN(s))return s}r&&(e=r(e))}return e}/*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
     */
var a=e("../Types"),s=e("../Exceptions/InvalidOperationException"),o="",u="true",p="false";t.toString=r,t.isSerializable=i,t.toPrimitive=n});
//# sourceMappingURL=Utility.js.map