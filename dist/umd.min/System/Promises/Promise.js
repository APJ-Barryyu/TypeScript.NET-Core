/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 * Although most of the following code is written from scratch, it is
 * heavily influenced by Q (https://github.com/kriskowal/q) and uses some of Q's spec.
 */
!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","../Types","../Threading/deferImmediate","../Disposable/DisposableBase","../Exceptions/InvalidOperationException","../Exceptions/ArgumentException","../Exceptions/ArgumentNullException","../Disposable/ObjectPool","../Collections/Set","../Threading/defer","../Disposable/ObjectDisposedException","../../extends"],t)}(function(t,e){"use strict";function n(t){return c["default"].hasMemberOfType(t,I,c["default"].FUNCTION)}function r(t,e,r){var i=e?e(t):t;return i&&n(i)?T.wrap(i):r(i)}function i(t,e,n){try{var r=n?n(e):e;return t&&t.resolve(r),null}catch(i){return t&&t.reject(i),i}}function o(t,e,n,r){try{var i=r?r(n):n;t&&t(i)}catch(o){e&&e(o)}}function s(t,e,n){t instanceof E?t.thenThis(e,n):t.then(e,n)}function u(t,e,n){return t instanceof E?t.thenSynchronous(e,n):t.then(e,n)}function l(){return new g.ObjectDisposedException("Promise","An underlying promise-result was disposed.")}var c=t("../Types"),a=t("../Threading/deferImmediate"),f=t("../Disposable/DisposableBase"),h=t("../Exceptions/InvalidOperationException"),p=t("../Exceptions/ArgumentException"),d=t("../Exceptions/ArgumentNullException"),v=t("../Disposable/ObjectPool"),w=t("../Collections/Set"),y=t("../Threading/defer"),g=t("../Disposable/ObjectDisposedException"),m=t("../../extends"),_=m["default"],b=void 0,j="Promise",D=j+"State",I="then",S="target",x=function(t){function e(e,n,r){t.call(this),this._state=e,this._result=n,this._error=r,this._disposableObjectName=D}return _(e,t),e.prototype._onDispose=function(){this._state=b,this._result=b,this._error=b},e.prototype.getState=function(){return this._state},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isPending",{get:function(){return this.getState()===T.State.Pending},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isSettled",{get:function(){return this.getState()!=T.State.Pending},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isFulfilled",{get:function(){return this.getState()===T.State.Fulfilled},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRejected",{get:function(){return this.getState()===T.State.Rejected},enumerable:!0,configurable:!0}),e.prototype.getResult=function(){return this._result},Object.defineProperty(e.prototype,"result",{get:function(){return this.throwIfDisposed(),this.getResult()},enumerable:!0,configurable:!0}),e.prototype.getError=function(){return this._error},Object.defineProperty(e.prototype,"error",{get:function(){return this.throwIfDisposed(),this.getError()},enumerable:!0,configurable:!0}),e}(f.DisposableBase);e.PromiseState=x;var E=function(t){function e(){t.call(this,T.State.Pending),this._disposableObjectName=j}return _(e,t),e.prototype.then=function(t,e){var n=this;return new T(function(r,i){n.thenThis(function(e){return o(r,i,e,t)},function(t){return e?o(r,null,t,e):i(t)})})},e.prototype.done=function(t,e){var n=this;y.defer(function(){return n.thenThis(t,e)})},e.prototype.delayFromNow=function(t){var e=this;return void 0===t&&(t=0),this.throwIfDisposed(),new T(function(n,r){y.defer(function(){e.thenThis(function(t){return n(t)},function(t){return r(t)})},t)},!0)},e.prototype.delayAfterResolve=function(t){var e=this;return void 0===t&&(t=0),this.throwIfDisposed(),this.isSettled?this.delayFromNow(t):new T(function(n,r){e.thenThis(function(e){return y.defer(function(){return n(e)},t)},function(e){return y.defer(function(){return r(e)},t)})},!0)},e.prototype["catch"]=function(t){return this.throwIfDisposed(),this.then(b,t)},e.prototype["finally"]=function(t){return this.throwIfDisposed(),this.then(t,t)},e.prototype.finallyThis=function(t,e){this.throwIfDisposed();var n=e?n:function(){return a.deferImmediate(t)};return this.thenThis(n,n),this},e}(x);e.PromiseBase=E;var P=function(t){function e(){t.apply(this,arguments)}return _(e,t),e.prototype.thenSynchronous=function(t,e){this.throwIfDisposed();try{switch(this.state){case T.State.Fulfilled:return t?r(this._result,t,T.resolve):this;case T.State.Rejected:return e?r(this._error,e,T.resolve):this}}catch(n){return new R(n)}throw new Error("Invalid state for a resolved promise.")},e.prototype.thenThis=function(t,e){switch(this.throwIfDisposed(),this.state){case T.State.Fulfilled:t&&t(this._result);break;case T.State.Rejected:e&&e(this._error)}return this},e}(E);e.Resolvable=P;var A=function(t){function e(e,n,r){t.call(this),this._result=n,this._error=r,this._state=e}return _(e,t),e}(P);e.Resolved=A;var O=function(t){function e(e){t.call(this,T.State.Fulfilled,e)}return _(e,t),e}(A);e.Fulfilled=O;var R=function(t){function e(e){t.call(this,T.State.Rejected,b,e)}return _(e,t),e}(A);e.Rejected=R;var F=function(t){function e(e){var r=this;if(t.call(this),this._target=e,!e)throw new d.ArgumentNullException(S);if(!n(e))throw new p.ArgumentException(S,"Must be a promise-like object.");e.then(function(t){r._state=T.State.Fulfilled,r._result=t,r._error=b,r._target=b},function(t){r._state=T.State.Rejected,r._error=t,r._target=b})}return _(e,t),e.prototype.thenSynchronous=function(e,n){this.throwIfDisposed();var r=this._target;return r?new T(function(t,i){s(r,function(n){return o(t,i,n,e)},function(e){return n?o(t,null,e,n):i(e)})},!0):t.prototype.thenSynchronous.call(this,e,n)},e.prototype.thenThis=function(e,n){this.throwIfDisposed();var r=this._target;return r?(s(r,e,n),this):t.prototype.thenThis.call(this,e,n)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._target=b},e}(P),T=function(t){function e(e,n){void 0===n&&(n=!1),t.call(this),e&&this.resolveUsing(e,n)}return _(e,t),e.prototype.thenSynchronous=function(n,r){if(this.throwIfDisposed(),this._state)return t.prototype.thenSynchronous.call(this,n,r);var i=new e;return(this._waiting||(this._waiting=[])).push(k.PromiseCallbacks.init(n,r,i)),i},e.prototype.thenThis=function(e,n){return this.throwIfDisposed(),this._state?t.prototype.thenThis.call(this,e,n):((this._waiting||(this._waiting=[])).push(k.PromiseCallbacks.init(e,n)),this)},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._resolvedCalled=b},e.prototype.resolveUsing=function(t,n,r){var i=this;if(void 0===n&&(n=!1),void 0===r&&(r=!1),!t)throw new d.ArgumentNullException("resolver");if(this._resolvedCalled)throw new h.InvalidOperationException(".resolve() already called.");if(this.state)throw new h.InvalidOperationException("Already resolved: "+e.State[this.state]);this._resolvedCalled=!0;var o=0,s=function(t){o?console.warn(-1==o?"Rejection called multiple times":"Rejection called after fulfilled."):(o=-1,i._resolvedCalled=!1,i.reject(t))},u=function(t){o?console.warn(1==o?"Fulfill called multiple times":"Fulfill called after rejection."):(o=1,i._resolvedCalled=!1,i.resolve(t))};n?t(u,s):a.deferImmediate(function(){return t(u,s)})},e.prototype._emitDisposalRejection=function(t){var e=t.wasDisposed;return e&&this._rejectInternal(l()),e},e.prototype._resolveInternal=function(t){var r=this;if(!this.wasDisposed){for(;t instanceof E;){var o=t;if(this._emitDisposalRejection(o))return;switch(o.state){case e.State.Pending:return void o.thenSynchronous(function(t){return r._resolveInternal(t)},function(t){return r._rejectInternal(t)});case e.State.Rejected:return void this._rejectInternal(o.error);case e.State.Fulfilled:t=o.result}}if(n(t))t.then(function(t){return r._resolveInternal(t)},function(t){return r._rejectInternal(t)});else{this._state=e.State.Fulfilled,this._result=t,this._error=b;var s=this._waiting;if(s){this._waiting=b;for(var u=0,l=s;u<l.length;u++){var c=l[u],a=c.onFulfilled,f=c.promise,h=f;k.PromiseCallbacks.recycle(c),i(h,t,a)}s.length=0}}}},e.prototype._rejectInternal=function(t){if(!this.wasDisposed){this._state=e.State.Rejected,this._error=t;var n=this._waiting;if(n){this._waiting=null;for(var r=0,o=n;r<o.length;r++){var s=o[r],u=s.onRejected,l=s.promise,c=l;k.PromiseCallbacks.recycle(s),u?i(c,t,u):c&&c.reject(t)}n.length=0}}},e.prototype.resolve=function(t,n){if(void 0===n&&(n=!1),this.throwIfDisposed(),t==this)throw new h.InvalidOperationException("Cannot resolve a promise as itself.");if(this._state){if(!n||this._state==e.State.Fulfilled&&this._result===t)return;throw new h.InvalidOperationException("Changing the fulfilled state/value of a promise is not supported.")}if(this._resolvedCalled){if(n)throw new h.InvalidOperationException(".resolve() already called.")}else this._resolveInternal(t)},e.prototype.reject=function(t,n){if(void 0===n&&(n=!1),this.throwIfDisposed(),this._state){if(!n||this._state==e.State.Rejected&&this._error===t)return;throw new h.InvalidOperationException("Changing the rejected state/value of a promise is not supported.")}if(this._resolvedCalled){if(n)throw new h.InvalidOperationException(".resolve() already called.")}else this._rejectInternal(t)},e}(P);e.Promise=T;var C=function(t){function e(){t.apply(this,arguments)}return _(e,t),e.prototype.map=function(t){var n=this;return this.throwIfDisposed(),new e(function(e){n.thenThis(function(n){return e(n.map(t))})},!0)},e.prototype.reduce=function(t,e){return this.thenSynchronous(function(n){return n.reduce(t,e)})},e.fulfilled=function(t){return new e(function(e){return t},!0)},e}(T);e.ArrayPromise=C;var N=function(t){function e(e){t.call(this),this._source=e&&e.slice()||[]}return _(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source.length=0,this._source=null},Object.defineProperty(e.prototype,"promises",{get:function(){return this.throwIfDisposed(),this._source.slice()},enumerable:!0,configurable:!0}),e.prototype.all=function(){return this.throwIfDisposed(),T.all(this._source)},e.prototype.race=function(){return this.throwIfDisposed(),T.race(this._source)},e.prototype.waitAll=function(){return this.throwIfDisposed(),T.waitAll(this._source)},e.prototype.map=function(t){var e=this;return this.throwIfDisposed(),new C(function(n){e.all().thenThis(function(e){return n(e.map(t))})},!0)},e.prototype.pipe=function(t){return this.throwIfDisposed(),new e(this._source.map(function(e){return u(e,t)}))},e.prototype.reduce=function(t,e){return this.throwIfDisposed(),T.wrap(this._source.reduce(function(e,n,r,i){return u(e,function(e){return u(n,function(n){return t(e,n,r,i)})})},n(e)?e:new O(e)))},e}(f.DisposableBase);e.PromiseCollection=N;var k;!function(t){var e;!function(t){function e(){return o||(o=new v.ObjectPool(40,n,function(t){t.onFulfilled=null,t.onRejected=null,t.promise=null}))}function n(){return{onFulfilled:null,onRejected:null,promise:null}}function r(t,n,r){var i=e().take();return i.onFulfilled=t,i.onRejected=n,i.promise=r,i}function i(t){e().add(t)}var o;t.init=r,t.recycle=i}(e=t.PromiseCallbacks||(t.PromiseCallbacks={}))}(k||(k={}));var T;!function(t){function e(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new d.ArgumentNullException("promises");return new N((Array.isArray(t)?t:[t]).concat(e))}function r(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new d.ArgumentNullException("promises");var r=(Array.isArray(t)?t:[t]).concat(e);return!r.length||r.every(function(t){return!t})?new C(function(t){return t(r)},!0):new C(function(t,e){var n=[],i=r.length;n.length=i;for(var o=new w.Set(r.map(function(t,e){return e})),s=function(){e=null,t=null,r.length=0,r=null,o.dispose(),o=null},u=function(){var e=t;e&&!o.count&&(s(),e(n))},l=function(e,r){t&&(n[r]=e,o.remove(r),u())},c=function(t){var n=e;n&&(s(),n(t))},a=function(t){var e=r[t];e?e.then(function(e){return l(e,t)},c):o.remove(t),u()},f=0;o&&i>f;f++)a(f)})}function i(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new d.ArgumentNullException("promises");var r=(Array.isArray(t)?t:[t]).concat(e);return!r.length||r.every(function(t){return!t})?new C(function(t){return t(r)},!0):new C(function(t,e){for(var n=r.length,i=new w.Set(r.map(function(t,e){return e})),o=function(){e=null,t=null,i.dispose(),i=null},s=function(){var e=t;e&&!i.count&&(o(),e(r))},u=function(t){i&&(i.remove(t),s())},l=function(t){var e=r[t];e?e.then(function(e){return u(t)},function(e){return u(t)}):u(t)},c=0;i&&n>c;c++)l(c)})}function o(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=e&&(Array.isArray(e)?e:[e]).concat(n);if(!i||!i.length||!(i=i.filter(function(t){return null!=t})).length)throw new p.ArgumentException("Nothing to wait for.");var o=i.length;if(1==o)return a(i[0]);for(var s=0;o>s;s++){var u=i[s];if(u instanceof E&&u.isSettled)return u}return new t(function(t,e){for(var n=function(){e=null,t=null,i.length=0,i=null},r=function(t,e){t&&(n(),t(e))},o=function(e){return r(t,e)},s=function(t){return r(e,t)},u=0,l=i;u<l.length;u++){var c=l[u];if(!t)break;c.then(o,s)}})}function s(t){return n(t)?a(t):new O(t)}function u(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(!t&&!e.length)throw new d.ArgumentNullException("resolutions");return new N((Array.isArray(t)?t:[t]).concat(e).map(function(t){return s(t)}))}function l(e,n){return new N(e.map(function(e){return new t(function(t,r){try{t(n(e))}catch(i){r(i)}})}))}function c(t){return new R(t)}function a(t){if(!t)throw new d.ArgumentNullException(S);return n(t)?t instanceof E?t:new F(t):new O(t)}function f(t){if(!t)throw new d.ArgumentNullException(I);return new F({then:t})}!function(t){t[t.Pending=0]="Pending",t[t.Fulfilled=1]="Fulfilled",t[t.Rejected=-1]="Rejected"}(t.State||(t.State={}));var h=t.State;Object.freeze(h),t.group=e,t.all=r,t.waitAll=i,t.race=o,t.resolve=s,t.resolveAll=u,t.map=l,t.reject=c,t.wrap=a,t.createFrom=f}(T=e.Promise||(e.Promise={})),Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=T});
//# sourceMappingURL=Promise.js.map
