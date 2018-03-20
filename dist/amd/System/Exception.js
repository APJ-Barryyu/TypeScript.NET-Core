/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT https://github.com/electricessence/TypeScript.NET/blob/master/LICENSE.md
 * Based upon: https://msdn.microsoft.com/en-us/library/System.Exception%28v=vs.110%29.aspx
 */
define(["require","exports"],function(require,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var NAME="Exception",Exception=function(){function Exception(message,innerException,beforeSealing){this.message=message;var _=this;this.name=_.getName(),this.data={},innerException&&(_.data.innerException=innerException),beforeSealing&&beforeSealing(_);try{var stack=eval("new Error()").stack;stack=stack&&stack.replace(/^Error\n/,"").replace(/(.|\n)+\s+at new.+/,"")||"",this.stack=_.toStringWithoutBrackets()+stack}catch(ex){this.stack=""}Object.freeze(_)}return Exception.prototype.getName=function(){return NAME},Exception.prototype.toString=function(){return"["+this.toStringWithoutBrackets()+"]"},Exception.prototype.toStringWithoutBrackets=function(){var e=this,t=e.message;return e.name+(t?": "+t:"")},Exception.prototype.dispose=function(){var e=this.data;for(var t in e)e.hasOwnProperty(t)&&delete e[t]},Exception}();exports.Exception=Exception,exports["default"]=Exception});
//# sourceMappingURL=Exception.js.map