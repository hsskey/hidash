"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("./internal/array.js");function n(t){if(t==null)return!0;const r=typeof t;if(r==="number"||r==="boolean"||r==="function")return!0;if(i.isArrayLike(t))return!t.length;const e=Object.prototype.toString.call(t);if(e==="[object Date]")return!0;if(e==="[object Map]"||e==="[object Set]")return!t.size;if(e==="[object Object]"){for(const o in t)if(Object.prototype.hasOwnProperty.call(t,o))return!1;return!0}return!1}exports.default=n;exports.isEmpty=n;
