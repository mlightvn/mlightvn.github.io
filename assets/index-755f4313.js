import{g as f}from"./lodash-b028437e.js";var i=Object.prototype.toString,s=function(e){if(e===void 0)return"undefined";if(e===null)return"null";var t=typeof e;if(t==="boolean")return"boolean";if(t==="string")return"string";if(t==="number")return"number";if(t==="symbol")return"symbol";if(t==="function")return m(e)?"generatorfunction":"function";if(y(e))return"array";if(O(e))return"buffer";if(l(e))return"arguments";if(b(e))return"date";if(p(e))return"error";if(g(e))return"regexp";switch(a(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if(j(e))return"generator";switch(t=i.call(e),t){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return t.slice(8,-1).toLowerCase().replace(/\s/g,"")};function a(r){return typeof r.constructor=="function"?r.constructor.name:null}function y(r){return Array.isArray?Array.isArray(r):r instanceof Array}function p(r){return r instanceof Error||typeof r.message=="string"&&r.constructor&&typeof r.constructor.stackTraceLimit=="number"}function b(r){return r instanceof Date?!0:typeof r.toDateString=="function"&&typeof r.getDate=="function"&&typeof r.setDate=="function"}function g(r){return r instanceof RegExp?!0:typeof r.flags=="string"&&typeof r.ignoreCase=="boolean"&&typeof r.multiline=="boolean"&&typeof r.global=="boolean"}function m(r,e){return a(r)==="GeneratorFunction"}function j(r){return typeof r.throw=="function"&&typeof r.return=="function"&&typeof r.next=="function"}function l(r){try{if(typeof r.length=="number"&&typeof r.callee=="function")return!0}catch(e){if(e.message.indexOf("callee")!==-1)return!0}return!1}function O(r){return r.constructor&&typeof r.constructor.isBuffer=="function"?r.constructor.isBuffer(r):!1}/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */const c=Symbol.prototype.valueOf,A=s;function w(r,e){switch(A(r)){case"array":return r.slice();case"object":return Object.assign({},r);case"date":return new r.constructor(Number(r));case"map":return new Map(r);case"set":return new Set(r);case"buffer":return S(r);case"symbol":return D(r);case"arraybuffer":return h(r);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return x(r);case"regexp":return d(r);case"error":return Object.create(r);default:return r}}function d(r){const e=r.flags!==void 0?r.flags:/\w+$/.exec(r)||void 0,t=new r.constructor(r.source,e);return t.lastIndex=r.lastIndex,t}function h(r){const e=new r.constructor(r.byteLength);return new Uint8Array(e).set(new Uint8Array(r)),e}function x(r,e){return new r.constructor(r.buffer,r.byteOffset,r.length)}function S(r){const e=r.length,t=Buffer.allocUnsafe?Buffer.allocUnsafe(e):Buffer.from(e);return r.copy(t),t}function D(r){return c?Object(c.call(r)):{}}var I=w;/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var k=function(e){return e!=null&&typeof e=="object"&&Array.isArray(e)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var B=k;function u(r){return B(r)===!0&&Object.prototype.toString.call(r)==="[object Object]"}var U=function(e){var t,n;return!(u(e)===!1||(t=e.constructor,typeof t!="function")||(n=t.prototype,u(n)===!1)||n.hasOwnProperty("isPrototypeOf")===!1)};const P=I,E=s,F=U;function o(r,e){switch(E(r)){case"object":return $(r,e);case"array":return M(r,e);default:return P(r)}}function $(r,e){if(typeof e=="function")return e(r);if(e||F(r)){const t=new r.constructor;for(let n in r)t[n]=o(r[n],e);return t}return r}function M(r,e){const t=new r.constructor(r.length);for(let n=0;n<r.length;n++)t[n]=o(r[n],e);return t}var G=o;const R=f(G);export{R as c};