"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("./isNull.js");function n(r,...o){const e=Object(r);if(o.length===0)return e;for(const t of o)if(!u.isNull(t))for(const s of Object.keys(t))e[s]=t[s];return e}exports.assign=n;exports.default=n;
