import{o as c,c as l,b as m,w as d,a as r,l as y,v as b,t as u,u as k,F as I,g as S,f as _}from"./index-44f8073e.js";import{_ as j}from"./Card-69d93a47.js";import{_ as D}from"./CopyMixin.vue_vue_type_script_setup_true_lang-4c59f2e7.js";import{_ as B}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-5298e249.js";import{d as a}from"./Number-b931076f.js";import{R as U}from"./ResetButton-48a88281.js";import"./lodash-026a56df.js";var F=Object.prototype.toString,O=function(e){if(e===void 0)return"undefined";if(e===null)return"null";var n=typeof e;if(n==="boolean")return"boolean";if(n==="string")return"string";if(n==="number")return"number";if(n==="symbol")return"symbol";if(n==="function")return V(e)?"generatorfunction":"function";if(M(e))return"array";if(L(e))return"buffer";if(R(e))return"arguments";if(N(e))return"date";if(E(e))return"error";if(P(e))return"regexp";switch(C(e)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if($(e))return"generator";switch(n=F.call(e),n){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return n.slice(8,-1).toLowerCase().replace(/\s/g,"")};function C(t){return typeof t.constructor=="function"?t.constructor.name:null}function M(t){return Array.isArray?Array.isArray(t):t instanceof Array}function E(t){return t instanceof Error||typeof t.message=="string"&&t.constructor&&typeof t.constructor.stackTraceLimit=="number"}function N(t){return t instanceof Date?!0:typeof t.toDateString=="function"&&typeof t.getDate=="function"&&typeof t.setDate=="function"}function P(t){return t instanceof RegExp?!0:typeof t.flags=="string"&&typeof t.ignoreCase=="boolean"&&typeof t.multiline=="boolean"&&typeof t.global=="boolean"}function V(t,e){return C(t)==="GeneratorFunction"}function $(t){return typeof t.throw=="function"&&typeof t.return=="function"&&typeof t.next=="function"}function R(t){try{if(typeof t.length=="number"&&typeof t.callee=="function")return!0}catch(e){if(e.message.indexOf("callee")!==-1)return!0}return!1}function L(t){return t.constructor&&typeof t.constructor.isBuffer=="function"?t.constructor.isBuffer(t):!1}/*!
 * shallow-clone <https://github.com/jonschlinkert/shallow-clone>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */const w=Symbol.prototype.valueOf,T=O;function G(t,e){switch(T(t)){case"array":return t.slice();case"object":return Object.assign({},t);case"date":return new t.constructor(Number(t));case"map":return new Map(t);case"set":return new Set(t);case"buffer":return q(t);case"symbol":return z(t);case"arraybuffer":return W(t);case"float32array":case"float64array":case"int16array":case"int32array":case"int8array":case"uint16array":case"uint32array":case"uint8clampedarray":case"uint8array":return J(t);case"regexp":return Y(t);case"error":return Object.create(t);default:return t}}function Y(t){const e=t.flags!==void 0?t.flags:/\w+$/.exec(t)||void 0,n=new t.constructor(t.source,e);return n.lastIndex=t.lastIndex,n}function W(t){const e=new t.constructor(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}function J(t,e){return new t.constructor(t.buffer,t.byteOffset,t.length)}function q(t){const e=t.length,n=Buffer.allocUnsafe?Buffer.allocUnsafe(e):Buffer.from(e);return t.copy(n),n}function z(t){return w?Object(w.call(t)):{}}var H=G;/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var K=function(e){return e!=null&&typeof e=="object"&&Array.isArray(e)===!1};/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */var Q=K;function A(t){return Q(t)===!0&&Object.prototype.toString.call(t)==="[object Object]"}var X=function(e){var n,o;return!(A(e)===!1||(n=e.constructor,typeof n!="function")||(o=n.prototype,A(o)===!1)||o.hasOwnProperty("isPrototypeOf")===!1)};const Z=H,v=O,tt=X;function h(t,e){switch(v(t)){case"object":return et(t,e);case"array":return rt(t,e);default:return Z(t)}}function et(t,e){if(typeof e=="function")return e(t);if(e||tt(t)){const n=new t.constructor;for(let o in t)n[o]=h(t[o],e);return n}return t}function rt(t,e){const n=new t.constructor(t.length);for(let o=0;o<t.length;o++)n[o]=h(t[o],e);return n}var f=h;const nt={class:""},ot=r("span",{class:"fw-bold h5"},"Interest",-1),st={class:"row mb-2"},ut={class:"col-md-4"},at={class:"input-group"},it=r("span",{class:"input-group-text"},"Interest",-1),ct=r("span",{class:"input-group-text"},"%",-1),lt={class:"col-md-4"},ft={class:"input-group"},dt=r("span",{class:"input-group-text"},"VND/USD/JPY/...",-1),pt=["textContent"],mt={class:"col-md"},yt={class:"input-group"},bt=r("span",{class:"input-group-text"},"Years",-1),_t={class:"float-end"},ht=r("i",{class:"fa-brands fa-servicestack"},null,-1),gt=[ht],xt={key:0,class:"row"},jt=r("div",{class:"col"},"No data",-1),wt=[jt],At={key:1,class:"row"},Ot={class:"col"},Ct={class:"table table-hover table-bordered"},kt=r("thead",{class:"bg-light"},[r("tr",null,[r("th",null,"Year (th)"),r("th",null,"Compounding Interest"),r("th",null,[_(" Amount"),r("br"),r("sub",null,"Compounding Interest")]),r("th",null,[_(" Interest"),r("br"),r("sub",null,"Fixed increment")]),r("th",null,[_(" Amount"),r("br"),r("sub",null,"Fixed increment")])])],-1),It=["textContent"],St=["textContent"],Dt=["textContent"],Bt=["textContent"],Ut=["textContent"],Ft={mixins:[D,B],data(){return{input:{interest:7,amount:1e8,number_of_years:20},output:{estimated_list:null}}},methods:{handleEstimate(){let t=Number(this.input.interest),e={value:parseFloat(this.input.amount,2),label:a(parseFloat(this.input.amount,2))};const n={index:0,interest:{value:0,label:0},interest_2:{value:0,label:0},amount:f(e),amount_2:f(e)};let o=f(n),p=Math.round(t*n.amount.value/100,2);this.output.estimated_list=Array(o);for(let i=1;i<=this.input.number_of_years;i++){let g=Math.round(t*o.amount.value/100,2),x=Math.round(p*i,2),s={index:i,interest:{value:g},amount:{value:Math.round(g+o.amount.value,2)},interest_2:{value:x},amount_2:{value:Math.round(x+n.amount.value,2)}};s.interest.label=a(s.interest.value),s.amount.label=a(s.amount.value),s.interest_2.label=a(s.interest_2.value),s.amount_2.label=a(s.amount_2.value),o=f(s),this.output.estimated_list[i]=f(s)}}}},Lt=Object.assign(Ft,{__name:"Index",setup(t){return(e,n)=>(c(),l("div",nt,[m(j,null,{header:d(()=>[ot]),footer:d(()=>[r("div",_t,[r("button",{type:"button",class:"btn btn-primary me-1",onClick:n[3]||(n[3]=(...o)=>e.handleEstimate&&e.handleEstimate(...o))},gt),m(U,{onClick:e.handleReset},null,8,["onClick"])])]),default:d(()=>[r("div",st,[r("div",ut,[r("div",at,[it,y(r("input",{type:"number",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=o=>e.input.interest=o)},null,512),[[b,e.input.interest]]),ct])]),r("div",lt,[r("div",ft,[y(r("input",{type:"number",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=o=>e.input.amount=o)},null,512),[[b,e.input.amount]]),dt]),r("div",{class:"text-end",textContent:u(k(a)(e.input.amount))},null,8,pt)]),r("div",mt,[r("div",yt,[y(r("input",{type:"number",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=o=>e.input.number_of_years=o),min:"0",max:"1000"},null,512),[[b,e.input.number_of_years]]),bt])])])]),_:1}),m(j,{header_label:"Estimation table"},{default:d(()=>[e.output.estimated_list?(c(),l("div",At,[r("div",Ot,[r("table",Ct,[kt,r("tbody",null,[(c(!0),l(I,null,S(e.output.estimated_list,(o,p)=>(c(),l("tr",{key:p},[r("td",{class:"text-end",textContent:u(o.index)},null,8,It),r("td",{class:"text-end",textContent:u(o.interest.label)},null,8,St),r("td",{class:"text-end",textContent:u(o.amount.label)},null,8,Dt),r("td",{class:"text-end",textContent:u(o.interest_2.label)},null,8,Bt),r("td",{class:"text-end",textContent:u(o.amount_2.label)},null,8,Ut)]))),128))])])])])):(c(),l("div",xt,wt))]),_:1})]))}});export{Lt as default};
