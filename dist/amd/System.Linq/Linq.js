define(["require","exports","../System/Compare","../System/Collections/Array/copy","../System/Collections/Array/Compare","../System/Collections/Enumeration/Enumerator","../System/Collections/Enumeration/Enumerator","../System/Collections/Enumeration/EmptyEnumerator","../System/Types","../System/Integer","../System/Functions","../System/Collections/Enumeration/ArrayEnumerator","../System/Collections/Enumeration/EnumeratorBase","../System/Collections/Dictionaries/Dictionary","../System/Collections/Queue","../System/Disposable/dispose","../System/Disposable/DisposableBase","../System/Collections/Enumeration/UnsupportedEnumerableException","../System/Disposable/ObjectDisposedException","../System/Collections/Sorting/KeySortedContext","../System/Exceptions/ArgumentNullException","../System/Exceptions/ArgumentOutOfRangeException","../System/Collections/Enumeration/IndexEnumerator","../System/Collections/Enumeration/IteratorEnumerator","../System/Collections/Array/initialize","../System/Random","../System/Collections/Enumeration/InfiniteEnumerator","../extends","../System/Collections/LazyList"],function(t,e,n,r,o,i,u,s,a,c,f,p,l,y,h,d,m,v,w,E,g,I,N,x,D,b,A,B,O){"use strict";function R(){return 0}function _(){return 1}function k(t){return null!=t}function S(){return s.EmptyEnumerator}function q(t,e){if(e){if(!e.moveNext())return e&&e.dispose(),null;t.enqueue(e)}return e}function F(t,e){void 0===e&&(e=null);var n=new E.KeySortedContext(e,t.keySelector,t.order,t.comparer);return t.parent?F(t.parent,n):n}function T(t){if(t)throw new w.ObjectDisposedException("Enumerable");return!0}function C(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return M(t,e)}function M(t,e){var n=C.fromAny(t);if(!n)throw new v.UnsupportedEnumerableException;return e&&e.length?n.merge(e):n}Object.defineProperty(e,"__esModule",{value:!0});var L=d.dispose.single,j=B["default"],K={},z=void 0,U=null,G=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return j(e,t),e.prototype.Greater=function(t,e){return t>e?t:e},e.prototype.Lesser=function(t,e){return t<e?t:e},e}(f.Functions),V=Object.freeze(new G),P=function(t){function e(e,n){var r=t.call(this,n)||this;return r._enumeratorFactory=e,r._isEndless=!0,r._disposableObjectName="InfiniteLinqEnumerable",r}return j(e,t),Object.defineProperty(e.prototype,"isEndless",{get:function(){return this._isEndless},enumerable:!0,configurable:!0}),e.prototype.getEnumerator=function(){return this.throwIfDisposed(),this._enumeratorFactory()},e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._enumeratorFactory=null},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.doAction=function(t,e,n,r){void 0===n&&(n=this.isEndless);var o=this;o.throwIfDisposed();var i=n||void 0;if(!t)throw new g.ArgumentNullException("action");return new Q(function(){var n,u=0;return new l.EnumeratorBase(function(){T(!t),e&&e(),u=0,n=o.getEnumerator()},function(e){for(T(!t);n.moveNext();){var o=n.current,i=t(o,u++);if(i===!1||0===i)return e.yieldBreak();if(2!==i)return e.yieldReturn(o)}return r&&r(u),!1},function(){n&&n.dispose()},i)},function(){t=U},i)},e.prototype.force=function(){this.throwIfDisposed(),this.doAction(R).getEnumerator().moveNext()},e.prototype.skip=function(t){var n=this;return n.throwIfDisposed(),isFinite(t)?(c.Integer.assert(t,"count"),this.where(function(e,n){return n>=t})):new e(S)},e.prototype.take=function(t){if(!(t>0))return C.empty();var e=this;if(e.throwIfDisposed(),!isFinite(t))throw new I.ArgumentOutOfRangeException("count",t,"Must be finite.");return c.Integer.assert(t,"count"),e.doAction(function(e,n){return n<t},null,!1)},e.prototype.elementAt=function(t){var e=this.elementAtOrDefault(t,K);if(e===K)throw new I.ArgumentOutOfRangeException("index",t,"is greater than or equal to the number of elements in source");return e},e.prototype.elementAtOrDefault=function(t,e){var n=this;n.throwIfDisposed(),c.Integer.assertZeroOrGreater(t,"index");var r=t;return d.using(this.getEnumerator(),function(t){for(var n=0;t.moveNext();){if(n==r)return t.current;n++}return e})},e.prototype.first=function(){var t=this.firstOrDefault(K);if(t===K)throw new Error("first:The sequence is empty.");return t},e.prototype.firstOrDefault=function(t){var e=this;return e.throwIfDisposed(),d.using(this.getEnumerator(),function(e){return e.moveNext()?e.current:t})},e.prototype.single=function(){var t=this;return t.throwIfDisposed(),d.using(this.getEnumerator(),function(t){if(t.moveNext()){var e=t.current;if(!t.moveNext())return e;throw new Error("single:sequence contains more than one element.")}throw new Error("single:The sequence is empty.")})},e.prototype.singleOrDefault=function(t){var e=this;return e.throwIfDisposed(),d.using(this.getEnumerator(),function(e){if(e.moveNext()){var n=e.current;if(!e.moveNext())return n}return t})},e.prototype.any=function(){var t=this;return t.throwIfDisposed(),d.using(this.getEnumerator(),function(t){return t.moveNext()})},e.prototype.isEmpty=function(){return!this.any()},e.prototype.traverseDepthFirst=function(t,e){void 0===e&&(e=V.Identity);var n=this,r=!n.throwIfDisposed(),o=n._isEndless;return new Q(function(){var i,u,c;return new l.EnumeratorBase(function(){T(r),u=n.getEnumerator(),i=[],c=0},function(n){for(T(r);;){if(u.moveNext()){var o=e(u.current,c);i[c++]=u;var f=t(u.current),p=!a.Type.isString(f)&&C.fromAny(f);return u=p?p.getEnumerator():s.EmptyEnumerator,n.yieldReturn(o)}if(0==c)return!1;u.dispose(),u=i[--c],i.length=c}},function(){try{u&&u.dispose()}finally{i&&(d.dispose.these.noCopy(i),i.length=0,i=U)}},o)},function(){r=!0},o)},e.prototype.flatten=function(){return this.selectMany(function(t){var e=!a.Type.isString(t)&&C.fromAny(t);return e?e.flatten():[t]})},e.prototype.pairwise=function(t){var e=this;if(e.throwIfDisposed(),!t)throw new g.ArgumentNullException("selector");var n;return this.select(function(e,r){var o=r?t(n,e,r):U;return n=e,o}).skip(1)},e.prototype.scan=function(t,e){var n=this;if(n.throwIfDisposed(),!t)throw new g.ArgumentNullException("func");return e===z?this.select(function(n,r){return e=r?t(e,n,r):n}):this.select(function(n,r){return e=t(e,n,r)})},e.prototype.select=function(t){return this._filterSelected(t)},e.prototype._selectMany=function(t,e){var n=this;if(n.throwIfDisposed(),!t)throw new g.ArgumentNullException("collectionSelector");var r=n._isEndless;return e||(e=function(t,e){return e}),new Q(function(){var o,u,s=0;return new l.EnumeratorBase(function(){T(!t),o=n.getEnumerator(),u=z,s=0},function(n){if(T(!t),u===z&&!o.moveNext())return!1;do{if(!u){var r=t(o.current,s++);if(!r)continue;u=i.from(r)}if(u.moveNext())return n.yieldReturn(e(o.current,u.current));u.dispose(),u=null}while(o.moveNext());return!1},function(){o&&o.dispose(),L(u),o=U,u=null},r)},function(){t=U},r)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype._filterSelected=function(t,e){void 0===t&&(t=V.Identity);var n=this,r=!n.throwIfDisposed();if(!t)throw new g.ArgumentNullException("selector");return new Q(function(){var o,i=0;return new l.EnumeratorBase(function(){T(!t),i=0,o=n.getEnumerator()},function(n){for(T(r);o.moveNext();){var u=i++,s=t(o.current,u);if(!e||e(s,u++))return n.yieldReturn(s)}return!1},function(){o&&o.dispose()},n._isEndless)},function(){r=!1},n._isEndless)},e.prototype.choose=function(t){return void 0===t&&(t=V.Identity),this._filterSelected(t,k)},e.prototype.where=function(t){return this._filterSelected(V.Identity,t)},e.prototype.nonNull=function(){return this.where(function(t){return null!=t&&t!=z})},e.prototype.ofType=function(t){var e;switch(t){case Number:e=a.Type.NUMBER;break;case String:e=a.Type.STRING;break;case Boolean:e=a.Type.BOOLEAN;break;case Function:e=a.Type.FUNCTION;break;default:return this.where(function(e){return e instanceof t})}return this.where(function(t){return k(t)&&typeof t===e})},e.prototype.except=function(t,e){var n=this,r=!n.throwIfDisposed(),o=n._isEndless;return new Q(function(){var u,s;return new l.EnumeratorBase(function(){T(r),u=n.getEnumerator(),s=new y.Dictionary(e),t&&i.forEach(t,function(t){s.addByKeyValue(t,!0)})},function(t){for(T(r);u.moveNext();){var e=u.current;if(!s.containsKey(e))return s.addByKeyValue(e,!0),t.yieldReturn(e)}return!1},function(){u&&u.dispose(),s.clear()},o)},function(){r=!0},o)},e.prototype.distinct=function(t){return this.except(U,t)},e.prototype.distinctUntilChanged=function(t){void 0===t&&(t=V.Identity);var e=this,r=!e.throwIfDisposed(),o=e._isEndless;return new Q(function(){var i,u,s=!0;return new l.EnumeratorBase(function(){T(r),i=e.getEnumerator()},function(e){for(T(r);i.moveNext();){var o=t(i.current);if(s)s=!1;else if(n.areEqual(u,o))continue;return u=o,e.yieldReturn(i.current)}return!1},function(){i&&i.dispose()},o)},function(){r=!0},o)},e.prototype.defaultIfEmpty=function(t){var e=this,n=!e.throwIfDisposed(),r=e._isEndless;return new Q(function(){var o,i;return new l.EnumeratorBase(function(){i=!0,T(n),o=e.getEnumerator()},function(e){return T(n),o.moveNext()?(i=!1,e.yieldReturn(o.current)):!!i&&(i=!1,e.yieldReturn(t))},function(){o&&o.dispose(),o=U},r)},null,r)},e.prototype.zip=function(t,e){var n=this;return n.throwIfDisposed(),new Q(function(){var r,o,u=0;return new l.EnumeratorBase(function(){u=0,r=n.getEnumerator(),o=i.from(t)},function(t){return r.moveNext()&&o.moveNext()&&t.yieldReturn(e(r.current,o.current,u++))},function(){r&&r.dispose(),o&&o.dispose(),r=U,o=U})})},e.prototype.zipMultiple=function(t,e){var n=this;return n.throwIfDisposed(),t.length?new Q(function(){var r,o,u,s=0;return new l.EnumeratorBase(function(){r=new h.Queue(t),s=0,o=n.getEnumerator(),u=U},function(t){if(o.moveNext())for(;;){for(;!u;){if(!r.count)return t.yieldBreak();var n=r.dequeue();n&&(u=i.from(n))}if(u.moveNext())return t.yieldReturn(e(o.current,u.current,s++));u.dispose(),u=U}return t.yieldBreak()},function(){o&&o.dispose(),u&&u.dispose(),r&&r.dispose(),o=U,u=U,r=U})}):C.empty()},e.prototype.join=function(t,e,n,r,o){void 0===o&&(o=V.Identity);var i=this;return new Q(function(){var u,s,a,c=0;return new l.EnumeratorBase(function(){u=i.getEnumerator(),s=C.from(t).toLookup(n,V.Identity,o)},function(t){for(;;){if(a){var n=a[c++];if(n!==z)return t.yieldReturn(r(u.current,n));a=null,c=0}if(!u.moveNext())return t.yieldBreak();var o=e(u.current);a=s.get(o)}},function(){u&&u.dispose(),a=null,u=U,s=U})})},e.prototype.groupJoin=function(t,e,n,r,o){void 0===o&&(o=V.Identity);var i=this;return new Q(function(){var u,s;return new l.EnumeratorBase(function(){u=i.getEnumerator(),s=C.from(t).toLookup(n,V.Identity,o)},function(t){return u.moveNext()&&t.yieldReturn(r(u.current,s.get(e(u.current))))},function(){u&&u.dispose(),u=U,s=U})})},e.prototype.merge=function(t){var e=this,n=e._isEndless;return t&&0!=t.length?new Q(function(){var r,o;return new l.EnumeratorBase(function(){r=e.getEnumerator(),o=new h.Queue(t)},function(t){for(;;){for(;!r&&o.tryDequeue(function(t){r=i.from(t)}););if(r&&r.moveNext())return t.yieldReturn(r.current);{if(!r)return t.yieldBreak();r.dispose(),r=U}}},function(){r&&r.dispose(),r=U,o&&o.dispose(),o=U},n)},null,n):e},e.prototype.concat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.merge(t)},e.prototype.union=function(t,e){void 0===e&&(e=V.Identity);var n=this,r=n._isEndless;return new Q(function(){var o,u,s;return new l.EnumeratorBase(function(){o=n.getEnumerator(),s=new y.Dictionary(e)},function(e){var n;if(u===z){for(;o.moveNext();)if(n=o.current,!s.containsKey(n))return s.addByKeyValue(n,null),e.yieldReturn(n);u=i.from(t)}for(;u.moveNext();)if(n=u.current,!s.containsKey(n))return s.addByKeyValue(n,null),e.yieldReturn(n);return!1},function(){o&&o.dispose(),u&&u.dispose(),o=U,u=U},r)},null,r)},e.prototype.insertAt=function(t,e){c.Integer.assertZeroOrGreater(t,"index");var n=t,r=this;r.throwIfDisposed();var o=r._isEndless;return new Q(function(){var t,u,s=0,a=!1;return new l.EnumeratorBase(function(){s=0,t=r.getEnumerator(),u=i.from(e),a=!1},function(e){return s==n&&(a=!0,u.moveNext())?e.yieldReturn(u.current):t.moveNext()?(s++,e.yieldReturn(t.current)):!a&&u.moveNext()&&e.yieldReturn(u.current)},function(){t&&t.dispose(),t=U,u&&u.dispose(),u=U},o)},null,o)},e.prototype.alternateMultiple=function(t){var e=this,n=e._isEndless;return new Q(function(){var r,o,i,u;return new l.EnumeratorBase(function(){u=new p.ArrayEnumerator(C.toArray(t)),i=e.getEnumerator();var n=i.moveNext();o=n?1:0,n&&(r=i.current)},function(t){switch(o){case 0:return t.yieldBreak();case 2:if(u.moveNext())return t.yieldReturn(u.current);u.reset(),o=1}var e=r,n=i.moveNext();return o=n?2:0,n&&(r=i.current),t.yieldReturn(e)},function(){i&&i.dispose(),u&&u.dispose(),i=U,u=U},n)},null,n)},e.prototype.alternateSingle=function(t){return this.alternateMultiple(C.make(t))},e.prototype.alternate=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this.alternateMultiple(t)},e.prototype.catchError=function(t){var e=this,n=!e.throwIfDisposed();return new Q(function(){var r;return new l.EnumeratorBase(function(){try{T(n),r=e.getEnumerator()}catch(t){}},function(e){if(r)try{if(T(n),r.moveNext())return e.yieldReturn(r.current)}catch(o){t(o)}return!1},function(){r&&r.dispose(),r=U})})},e.prototype.finallyAction=function(t){var e=this,n=!e.throwIfDisposed();return new Q(function(){var r;return new l.EnumeratorBase(function(){T(n),r=e.getEnumerator()},function(t){return T(n),!!r.moveNext()&&t.yieldReturn(r.current)},function(){try{r&&r.dispose(),r=U}finally{t()}})})},e.prototype.buffer=function(t){if(t<1||!isFinite(t))throw new Error("Invalid buffer size.");c.Integer.assert(t,"size");var e,n=this,r=n._isEndless;return new Q(function(){var o;return new l.EnumeratorBase(function(){o=n.getEnumerator()},function(n){var r=D.initialize(t);for(e=0;e<t&&o.moveNext();)r[e++]=o.current;return r.length=e,!!e&&n.yieldReturn(r)},function(){o&&o.dispose(),o=U},r)},null,r)},e.prototype.share=function(){var t=this;t.throwIfDisposed();var e;return new Q(function(){return e||(e=t.getEnumerator())},function(){e&&e.dispose(),e=U},t._isEndless)},e}(m.DisposableBase);e.InfiniteLinqEnumerable=P;var Q=function(t){function e(e,n,r){var o=t.call(this,e,n)||this;return o._isEndless=r,o._disposableObjectName="LinqEnumerable",o}return j(e,t),e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(function(){return t.getEnumerator()})},e.prototype.skip=function(e){return t.prototype.skip.call(this,e)},e.prototype.skipWhile=function(t){return this.throwIfDisposed(),this.doAction(function(e,n){return t(e,n)?2:1})},e.prototype.takeWhile=function(t){if(this.throwIfDisposed(),!t)throw new g.ArgumentNullException("predicate");return this.doAction(function(e,n){return t(e,n)?1:0},null,null)},e.prototype.takeUntil=function(t,e){if(this.throwIfDisposed(),!t)throw new g.ArgumentNullException("predicate");if(!e)return this.doAction(function(e,n){return t(e,n)?0:1},null,null);var n=!1;return this.doAction(function(e,r){return n?0:(n=t(e,r),1)},function(){n=!1},null)},e.prototype.traverseBreadthFirst=function(t,n){void 0===n&&(n=V.Identity);var r=this,o=!r.throwIfDisposed(),i=r._isEndless;return new e(function(){var e,u,s,a=0;return new l.EnumeratorBase(function(){T(o),e=r.getEnumerator(),a=0,u=[],s=0},function(r){for(T(o);;){if(e.moveNext())return u[s++]=e.current,r.yieldReturn(n(e.current,a));if(!s)return r.yieldBreak();var i=C.from(u).selectMany(t);if(!i.any())return r.yieldBreak();a++,u=[],s=0,e.dispose(),e=i.getEnumerator()}},function(){e&&e.dispose(),e=U,u.length=0},i)},function(){o=!0},i)},e.prototype.forEach=function(t,e){void 0===e&&(e=1/0);var n=this;if(n.throwIfDisposed(),!t)throw new g.ArgumentNullException("action");return u.throwIfEndless(n.isEndless),e>0?d.using(n.getEnumerator(),function(r){u.throwIfEndless(!isFinite(e)&&r.isEndless);for(var o=0;e>o&&n.throwIfDisposed()&&r.moveNext()&&t(r.current,o++)!==!1;);return o}):0},e.prototype.toArray=function(t){return t?this.where(t).toArray():this.copyTo([])},e.prototype.copyTo=function(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=1/0),this.throwIfDisposed(),!t)throw new g.ArgumentNullException("target");return c.Integer.assertZeroOrGreater(e),i.forEach(this,function(n,r){t[r+e]=n},n),t},e.prototype.toLookup=function(t,e,n){void 0===e&&(e=V.Identity),void 0===n&&(n=V.Identity);var r=new y.Dictionary(n);return this.forEach(function(n,o){var i=t(n,o),u=e(n,o),s=r.getValue(i);s!==z?s.push(u):r.addByKeyValue(i,[u])}),new H(r)},e.prototype.toMap=function(t,e){var n={};return this.forEach(function(r,o){n[t(r,o)]=e(r,o)}),n},e.prototype.toDictionary=function(t,e,n){void 0===n&&(n=V.Identity);var r=new y.Dictionary(n);return this.forEach(function(n,o){return r.addByKeyValue(t(n,o),e(n,o))}),r},e.prototype.toJoinedString=function(t,e){return void 0===t&&(t=""),void 0===e&&(e=V.Identity),this.select(e).toArray().join(t)},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var n=this;if(!(t>0))return n;if(!isFinite(t))return C.empty();c.Integer.assert(t,"count");var r=t;return new e(function(){var t,e;return new l.EnumeratorBase(function(){t=n.getEnumerator(),e=new h.Queue},function(n){for(;t.moveNext();)if(e.enqueue(t.current),e.count>r)return n.yieldReturn(e.dequeue());return!1},function(){t&&t.dispose(),t=U,e&&e.dispose(),e=U})})},e.prototype.skipToLast=function(t){if(!(t>0))return C.empty();var e=this;return isFinite(t)?(c.Integer.assert(t,"count"),e.reverse().take(t).reverse()):e},e.prototype.select=function(e){return t.prototype.select.call(this,e)},e.prototype.selectMany=function(t,e){return this._selectMany(t,e)},e.prototype.choose=function(t){return void 0===t&&(t=V.Identity),this._filterSelected(t,k)},e.prototype.reverse=function(){var t=this,n=!t.throwIfDisposed();return u.throwIfEndless(t._isEndless),new e(function(){var e,r=0;return new l.EnumeratorBase(function(){T(n),t.throwIfDisposed(),e=t.toArray(),r=e.length},function(t){return!!r&&t.yieldReturn(e[--r])},function(){e.length=0})},function(){n=!0})},e.prototype.shuffle=function(){var t=this,n=!t.throwIfDisposed();return u.throwIfEndless(t._isEndless),new e(function(){var e,r,o;return new l.EnumeratorBase(function(){T(n),e=t.toArray(),r=o=e.length},function(t){if(!o)return t.yieldBreak();var n=b.Random.integer(o),r=e[n];return e[n]=e[--o],e[o]=U,o%32==0&&(e.length=o),t.yieldReturn(r)},function(){e.length=0})},function(){n=!0})},e.prototype.count=function(t){var e=0;return this.forEach(t?function(n,r){t(n,r)&&++e}:function(){++e}),e},e.prototype.all=function(t){if(!t)throw new g.ArgumentNullException("predicate");var e=!0;return this.forEach(function(n,r){if(!t(n,r))return e=!1,!1}),e},e.prototype.every=function(t){return this.all(t)},e.prototype.any=function(e){if(!e)return t.prototype.any.call(this);var n=!1;return this.forEach(function(t,r){return n=e(t,r),!n}),n},e.prototype.some=function(t){return this.any(t)},e.prototype.contains=function(t,e){if(e){var r=e(t);return this.any(function(t){return n.areEqual(e(t),r)})}return this.any(function(e){return n.areEqual(e,t)})},e.prototype.indexOf=function(t,e){var r=-1;return this.forEach(e?function(o,i){if(n.areEqual(e(o,i),e(t,i),!0))return r=i,!1}:function(e,o){if(n.areEqual(e,t,!0))return r=o,!1}),r},e.prototype.lastIndexOf=function(t,e){var r=-1;return this.forEach(e?function(o,i){n.areEqual(e(o,i),e(t,i),!0)&&(r=i)}:function(e,o){n.areEqual(e,t,!0)&&(r=o)}),r},e.prototype.intersect=function(t,n){var r=this;if(r.throwIfDisposed(),!t)throw new g.ArgumentNullException("second");var o=r.isEndless;return new e(function(){var e,u,s;return new l.EnumeratorBase(function(){T(!t),e=r.getEnumerator(),u=new y.Dictionary(n),s=new y.Dictionary(n),i.forEach(t,function(t){u.addByKeyValue(t,!0)})},function(t){for(;e.moveNext();){var n=e.current;if(!s.containsKey(n)&&u.containsKey(n))return s.addByKeyValue(n,!0),t.yieldReturn(n)}return t.yieldBreak()},function(){e&&e.dispose(),u&&e.dispose(),s&&e.dispose(),e=U,u=U,s=U},o)},function(){t=U},o)},e.prototype.sequenceEqual=function(t,e){return void 0===e&&(e=n.areEqual),this.throwIfDisposed(),d.using(this.getEnumerator(),function(n){return d.using(i.from(t),function(t){for(u.throwIfEndless(n.isEndless&&t.isEndless);n.moveNext();)if(!t.moveNext()||!e(n.current,t.current))return!1;return!t.moveNext()})})},e.prototype.ofType=function(e){return this.throwIfDisposed(),t.prototype.ofType.call(this,e)},e.prototype.orderBy=function(t){return void 0===t&&(t=V.Identity),this.throwIfDisposed(),new X(this,t,1)},e.prototype.orderUsing=function(t){return this.throwIfDisposed(),new X(this,null,1,null,t)},e.prototype.orderUsingReversed=function(t){return this.throwIfDisposed(),new X(this,null,(-1),null,t)},e.prototype.orderByDescending=function(t){return void 0===t&&(t=V.Identity),this.throwIfDisposed(),new X(this,t,(-1))},e.prototype.buffer=function(e){return t.prototype.buffer.call(this,e)},e.prototype.groupBy=function(t,n,r){var o=this;return n||(n=V.Identity),new e(function(){return o.toLookup(t,n,r).getEnumerator()})},e.prototype.partitionBy=function(t,r,o,i){void 0===o&&(o=function(t,e){return new Z(t,e)}),void 0===i&&(i=V.Identity);var u=this;return r||(r=V.Identity),new e(function(){var e,s,a,c,f;return new l.EnumeratorBase(function(){if(T(!r),e=u.getEnumerator(),e.moveNext()){var n=e.current;s=t(n),a=i(s),c=[r(n)],f=1}else c=null},function(u){if(T(!r),!c)return u.yieldBreak();for(var p,l;(p=e.moveNext())&&(l=e.current,n.areEqual(a,i(t(l))));)c[f++]=r(l);var y=o(s,c);return p?(l=e.current,s=t(l),a=i(s),c=[r(l)],f=1):c=null,u.yieldReturn(y)},function(){e&&e.dispose(),e=U,c=null})},function(){r=U})},e.prototype.flatten=function(){return t.prototype.flatten.call(this)},e.prototype.pairwise=function(e){return t.prototype.pairwise.call(this,e)},e.prototype.aggregate=function(t,e){return this.forEach(function(n,r){e=r?t(e,n,r):n}),e},e.prototype.average=function(t){void 0===t&&(t=a.Type.numberOrNaN);var e=0,n=this.sum(function(n,r){return e++,t(n,r)});return isNaN(n)||!e?NaN:n/e},e.prototype.max=function(){return this.aggregate(V.Greater)},e.prototype.min=function(){return this.aggregate(V.Lesser)},e.prototype.maxBy=function(t){return void 0===t&&(t=V.Identity),this.aggregate(function(e,n){return t(e)>t(n)?e:n})},e.prototype.minBy=function(t){return void 0===t&&(t=V.Identity),this.aggregate(function(e,n){return t(e)<t(n)?e:n})},e.prototype.sum=function(t){void 0===t&&(t=a.Type.numberOrNaN);var e=0,n=0;return this.forEach(function(r,o){var i=t(r,o);return isNaN(i)?(e=NaN,!1):void(isFinite(i)?e+=i:n+=i>0?1:-1)}),isNaN(e)?NaN:n?n*(1/0):e},e.prototype.product=function(t){void 0===t&&(t=a.Type.numberOrNaN);var e=1,n=!1;return this.forEach(function(r,o){n=!0;var i=t(r,o);return isNaN(i)?(e=NaN,!1):0==i?(e=0,!1):void(e*=i)}),n&&isNaN(e)?NaN:e},e.prototype.quotient=function(t){void 0===t&&(t=a.Type.numberOrNaN);var e=0,n=NaN;return this.forEach(function(r,o){var i=t(r,o);if(e++,1===e)n=i;else{if(isNaN(i)||0===i||!isFinite(i))return n=NaN,!1;n/=i}}),1===e&&(n=NaN),n},e.prototype.last=function(){var t=this;t.throwIfDisposed();var e=z,n=!1;if(t.forEach(function(t){n=!0,e=t}),!n)throw new Error("last:No element satisfies the condition.");return e},e.prototype.lastOrDefault=function(t){var e=this;e.throwIfDisposed();var n=z,r=!1;return e.forEach(function(t){r=!0,n=t}),r?n:t},e.prototype.memoize=function(){var t=new O.LazyList(this);return new e(function(){return t.getEnumerator()},function(){t.dispose(),t=null},this.isEndless)},e.prototype.throwWhenEmpty=function(){return this.doAction(_,null,this.isEndless,function(t){if(!t)throw"Collection is empty."})},e}(P);e.LinqEnumerable=Q;var J=function(t){function e(e,n){var r=t.call(this,e,n,!1)||this;return r._disposableObjectName="FiniteEnumerable",r}return j(e,t),e}(Q);e.FiniteEnumerable=J;var W=function(t){function e(e){var n=t.call(this,function(){return r.throwIfDisposed(),new p.ArrayEnumerator(function(){return r.throwIfDisposed("The underlying ArrayEnumerable was disposed.","ArrayEnumerator"),r._source})})||this,r=n;return r._disposableObjectName="ArrayEnumerable",r._source=e,n}return j(e,t),e.prototype._onDispose=function(){t.prototype._onDispose.call(this),this._source=U},Object.defineProperty(e.prototype,"source",{get:function(){return this._source},enumerable:!0,configurable:!0}),e.prototype.toArray=function(){var t=this;return t.throwIfDisposed(),i.toArray(t._source)},e.prototype.asEnumerable=function(){var t=this;return t.throwIfDisposed(),new e(this._source)},e.prototype.forEach=function(t,e){void 0===e&&(e=1/0);var n=this;return n.throwIfDisposed(),i.forEach(n._source,t,e)},e.prototype.any=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r.length;return!!o&&(!e||t.prototype.any.call(this,e))},e.prototype.count=function(e){var n=this;n.throwIfDisposed();var r=n._source,o=r.length;return o&&(e?t.prototype.count.call(this,e):o)},e.prototype.elementAtOrDefault=function(t,e){var n=this;n.throwIfDisposed(),c.Integer.assertZeroOrGreater(t,"index");var r=n._source;return t<r.length?r[t]:e},e.prototype.last=function(){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t.prototype.last.call(this)},e.prototype.lastOrDefault=function(t){var e=this;e.throwIfDisposed();var n=e._source,r=n.length;return r?n[r-1]:t},e.prototype.skip=function(t){var e=this;return e.throwIfDisposed(),t>0?new Q(function(){return new p.ArrayEnumerator(function(){return e._source},t)}):e},e.prototype.takeExceptLast=function(t){void 0===t&&(t=1);var e=this;return e.throwIfDisposed(),e.take(e._source.length-t)},e.prototype.skipToLast=function(t){var e=this;if(e.throwIfDisposed(),!(t>0))return C.empty();if(!isFinite(t))return e;var n=e._source?e._source.length:0;return e.skip(n-t)},e.prototype.reverse=function(){var t=this,e=!t.throwIfDisposed();return new Q(function(){return t.throwIfDisposed(),new N.IndexEnumerator(function(){var n=t._source;return T(e||!n),{source:n,pointer:n.length-1,length:n.length,step:-1}})},function(){e=!0})},e.prototype.memoize=function(){return this.asEnumerable()},e.prototype.sequenceEqual=function(r,i){return void 0===i&&(i=n.areEqual),a.Type.isArrayLike(r)?o.areEqual(this.source,r,!0,i):r instanceof e?r.sequenceEqual(this.source,i):t.prototype.sequenceEqual.call(this,r,i)},e.prototype.toJoinedString=function(e,n){void 0===e&&(e=""),void 0===n&&(n=V.Identity);var r=this._source;return!n&&r instanceof Array?r.join(e):t.prototype.toJoinedString.call(this,e,n)},e}(J),Z=function(t){function e(e,n){var r=t.call(this,n)||this;return r._groupKey=e,r._disposableObjectName="Grouping",r}return j(e,t),Object.defineProperty(e.prototype,"key",{get:function(){return this._groupKey},enumerable:!0,configurable:!0}),e}(W),H=function(){function t(t){this._dictionary=t}return Object.defineProperty(t.prototype,"count",{get:function(){return this._dictionary.count},enumerable:!0,configurable:!0}),t.prototype.get=function(t){return this._dictionary.getValue(t)||null},t.prototype.contains=function(t){return this._dictionary.containsKey(t)},t.prototype.getEnumerator=function(){var t,e=this;return new l.EnumeratorBase(function(){t=e._dictionary.getEnumerator()},function(e){if(!t.moveNext())return!1;var n=t.current;return e.yieldReturn(new Z(n.key,n.value))},function(){t&&t.dispose(),t=U})},t}(),X=function(t){function e(e,r,o,i,s){void 0===s&&(s=n.compare);var a=t.call(this,U)||this;return a.source=e,a.keySelector=r,a.order=o,a.parent=i,a.comparer=s,u.throwIfEndless(e&&e.isEndless),a._disposableObjectName="OrderedEnumerable",a}return j(e,t),e.prototype.createOrderedEnumerable=function(t,n){return this.throwIfDisposed(),new e(this.source,t,n,this)},e.prototype.thenBy=function(t){return this.createOrderedEnumerable(t,1)},e.prototype.thenUsing=function(t){return new e(this.source,null,1,this,t)},e.prototype.thenByDescending=function(t){return this.createOrderedEnumerable(t,-1)},e.prototype.thenUsingReversed=function(t){return new e(this.source,null,(-1),this,t)},e.prototype.getEnumerator=function(){var t=this;t.throwIfDisposed();var e,n,r=0;return new l.EnumeratorBase(function(){t.throwIfDisposed(),r=0,e=C.toArray(t.source),n=F(t).generateSortedIndexes(e)},function(o){return t.throwIfDisposed(),r<n.length&&o.yieldReturn(e[n[r++]])},function(){e&&(e.length=0),e=U,n&&(n.length=0),n=U},(!1))},e.prototype._onDispose=function(){var e=this;t.prototype._onDispose.call(this),e.source=U,e.keySelector=U,e.order=U,e.parent=U},e}(J);e.Enumerable=C,function(t){function e(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return M(t,e)}function n(t,e){if(a.Type.isObject(t)||a.Type.isString(t)){if(t instanceof P)return t;if(a.Type.isArrayLike(t))return new W(t);if(u.isEnumerable(t))return new Q(function(){return t.getEnumerator()},null,t.isEndless);if(u.isEnumerator(t))return new Q(function(){return t},null,t.isEndless);if(u.isIterator(t))return n(new x.IteratorEnumerator(t))}else if(a.Type.isFunction(t))return new P(function(){return new A.InfiniteEnumerator(t)});return e}function o(t){switch(t?t.length:0){case 0:return N();case 1:return M(t[0]);default:return N().merge(t)}}function s(t){return n(t)||N()}function f(t){return t instanceof Q?t.toArray():i.toArray(t)}function p(t){return new P(function(){return new l.EnumeratorBase(null,function(e){return T(!t),e.yieldReturn(b.Random.select.one(t))},(!0))},function(){t.length=0,t=U})}function y(t){var e=t&&t.length;if(!e||!isFinite(e))throw new I.ArgumentOutOfRangeException("length",length);return p(r.copy(t))}function m(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)throw new I.ArgumentOutOfRangeException("length",length);return p(t)}function v(t){return new P(function(){var e=0;return new l.EnumeratorBase(function(){e=0},function(n){return T(!t),e>=t.length&&(e=0),n.yieldReturn(t[e++])},(!0))},function(){t.length=0,t=U})}function w(t){var e=t&&t.length;if(!e||!isFinite(e))throw new I.ArgumentOutOfRangeException("length",length);return v(r.copy(t))}function E(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(!t.length)throw new I.ArgumentOutOfRangeException("length",length);return v(t)}function N(){return new J(S)}function D(e,n){return void 0===n&&(n=1/0),n>0?isFinite(n)&&c.Integer.assert(n,"count")?new J(function(){var t=n,r=0;return new l.EnumeratorBase(function(){r=0},function(n){return r++<t&&n.yieldReturn(e)},null,(!1))}):new Q(function(){return new l.EnumeratorBase(null,function(t){return t.yieldReturn(e)},(!0))}):t.empty()}function B(t,e){if(!t)throw new g.ArgumentNullException("initializer");return new P(function(){var n;return new l.EnumeratorBase(function(){t&&(n=t())},function(e){return t?e.yieldReturn(n):e.yieldBreak()},function(){n=U,e&&e(n)},(!0))},function(){t=U,e=z})}function O(t){return D(t,1)}function R(t,e,n){if(void 0===n&&(n=1),!isFinite(t))throw new I.ArgumentOutOfRangeException("start",t,"Must be a finite number.");if(!(e>0))return N();if(!n)throw new I.ArgumentOutOfRangeException("step",n,"Must be a valid value");if(!isFinite(n))throw new I.ArgumentOutOfRangeException("step",n,"Must be a finite number.");return c.Integer.assert(e,"count"),new J(function(){var r,o=e,i=0;return new l.EnumeratorBase(function(){i=0,r=t},function(t){var u=i++<o&&t.yieldReturn(r);return u&&i<e&&(r+=n),u},(!1))})}function _(t,e,n){return void 0===n&&(n=1),n=Math.abs(n)*-1,R(t,e,n)}function k(t,e){if(void 0===t&&(t=0),void 0===e&&(e=1),!isFinite(t))throw new I.ArgumentOutOfRangeException("start",t,"Must be a finite number.");if(!e)throw new I.ArgumentOutOfRangeException("step",e,"Must be a valid value");if(!isFinite(e))throw new I.ArgumentOutOfRangeException("step",e,"Must be a finite number.");return new P(function(){var n;return new l.EnumeratorBase(function(){n=t},function(t){var r=n;return n+=e,t.yieldReturn(r)},(!0))})}function F(t,e){return void 0===t&&(t=0),void 0===e&&(e=1),k(t,-e)}function C(t,e,n){if(void 0===n&&(n=1),isNaN(e)||!isFinite(e))throw new I.ArgumentOutOfRangeException("to",e,"Must be a finite number.");if(n&&!isFinite(n))throw new I.ArgumentOutOfRangeException("step",n,"Must be a finite non-zero number.");
return n=Math.abs(n),new J(function(){var r;return new l.EnumeratorBase(function(){r=t},t<e?function(t){var o=r<=e&&t.yieldReturn(r);return o&&(r+=n),o}:function(t){var o=r>=e&&t.yieldReturn(r);return o&&(r-=n),o},(!1))})}function L(t,e,n){if(void 0===n&&(n=""),null==t)throw new g.ArgumentNullException("input");var r=typeof t;if(r!=a.Type.STRING)throw new Error("Cannot exec RegExp matches of type '"+r+"'.");return e instanceof RegExp&&(n+=e.ignoreCase?"i":"",n+=e.multiline?"m":"",e=e.source),n.indexOf("g")===-1&&(n+="g"),new J(function(){var r;return new l.EnumeratorBase(function(){r=new RegExp(e,n)},function(e){var n=r.exec(t);return null!=n?e.yieldReturn(n):e.yieldBreak()})})}function j(e,n){if(void 0===n&&(n=1/0),!e)throw new g.ArgumentNullException("factory");return isNaN(n)||n<=0?t.empty():isFinite(n)&&c.Integer.assert(n,"count")?new J(function(){var t=n,r=0;return new l.EnumeratorBase(function(){r=0},function(n){T(!e);var o=r++;return o<t&&n.yieldReturn(e(o))},(!1))},function(){e=U}):new P(function(){var t=0;return new l.EnumeratorBase(function(){t=0},function(n){return T(!e),n.yieldReturn(e(t++))},(!0))},function(){e=U})}function K(t,e,n){if(void 0===n&&(n=!1),!e)throw new g.ArgumentNullException("factory");return new P(function(){var r,o,i=0;return new l.EnumeratorBase(function(){i=0,r=t,o=!n},function(t){T(!e);var n=i++;return o?o=!1:r=e(r,n),t.yieldReturn(r)},(!0))},function(){e=U})}function G(t,e,n){return void 0===n&&(n=1/0),i.forEach(t,e,n)}function Z(t,e){return i.map(t,e)}function H(t){var e=t.takeUntil(function(t){return t==+(1/0)},!0).aggregate(V.Greater);return e===z?NaN:e}function X(t){var e=t.takeUntil(function(t){return t==-(1/0)},!0).aggregate(V.Lesser);return e===z?NaN:e}function Y(t){if(!t)throw new g.ArgumentNullException("enumerables");var e=!1;return new Q(function(){var n,r,o;return new l.EnumeratorBase(function(){T(e),o=0,n=new h.Queue,r=i.from(t)},function(t){T(e);var o=null;if(r){for(;!o&&r.moveNext();){var u=r.current;o=q(n,u?i.from(u):U)}o||(r=null)}for(;!o&&n.tryDequeue(function(t){o=q(n,i.from(t))}););return o?t.yieldReturn(o.current):t.yieldBreak()},function(){n&&(d.dispose.these.noCopy(n.dump()),n=U),r&&r.dispose(),r=null})},function(){e=!0})}t.from=e,t.fromAny=n,t.fromThese=o,t.fromOrEmpty=s,t.toArray=f,t._choice=p,t.choice=y,t.chooseFrom=m,t.cycle=w,t.cycleThrough=E,t.empty=N,t.repeat=D,t.repeatWithFinalize=B,t.make=O,t.range=R,t.rangeDown=_,t.toInfinity=k,t.toNegativeInfinity=F,t.rangeTo=C,t.matches=L,t.generate=j,t.unfold=K,t.forEach=G,t.map=Z,t.max=H,t.min=X,t.weave=Y}(C=e.Enumerable||(e.Enumerable={})),e["default"]=C});
//# sourceMappingURL=Linq.js.map