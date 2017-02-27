define(["require","exports","./initialize","../../Exceptions/ArgumentNullException","../../Exceptions/ArgumentOutOfRangeException"],function(e,n,t,i,o){"use strict";function r(e,n,i){return void 0===n&&(n=0),void 0===i&&(i=1/0),e?u(e,t.initialize(Math.min(i,Math.max(e.length-n,0))),n,0,i):e}function u(e,n,t,r,u){if(void 0===t&&(t=0),void 0===r&&(r=0),void 0===u&&(u=1/0),!e)throw new i.ArgumentNullException("source",a);if(!n)throw new i.ArgumentNullException("destination",a);if(t<0)throw new o.ArgumentOutOfRangeException("sourceIndex",t,c);var h=e.length;if(!h)return n;if(t>=h)throw new o.ArgumentOutOfRangeException("sourceIndex",t,"Must be less than the length of the source array.");if(n.length<0)throw new o.ArgumentOutOfRangeException("destinationIndex",r,c);var l=e.length-t;if(isFinite(u)&&u>l)throw new o.ArgumentOutOfRangeException("sourceIndex",t,"Source index + length cannot exceed the length of the source array.");u=Math.min(u,l);var g=r+u;g>n.length&&(n.length=g);for(var f=0;f<u;f++)n[r+f]=e[t+f];return n}Object.defineProperty(n,"__esModule",{value:!0}),n.copy=r;var a="Cannot be null.",c="Cannot be less than zero.";n.copyTo=u});
//# sourceMappingURL=copy.js.map