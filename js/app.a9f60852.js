(function(e){function t(t){for(var a,o,s=t[0],r=t[1],i=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(b.length)b.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},l=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c09d4":"1b95b8ca","chunk-2d0c916c":"1c68dd1c","chunk-2d0cef36":"a455b497","chunk-2d0ddf52":"ed1f9091","chunk-2d22c692":"2a9b7ecb","chunk-2d22d746":"3969d6d9","chunk-9534077c":"d73d7070","chunk-2d0bd5f3":"0e018fc0","chunk-2d0e200f":"d4305693","chunk-2d21eac7":"9e4eb928","chunk-2d226747":"524f023b","chunk-6474a31a":"4d8d0d99","chunk-a57b1e9e":"fb2f9b8c","chunk-2d0b1e02":"0a56d3b4","chunk-2d0c46e1":"3cd8b9fe","chunk-2d0d3659":"b240b40f"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=o(e);var i=new Error;l=function(t){r.onerror=r.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+l+")",i.name="ChunkLoadError",i.type=a,i.request=l,n[1](i)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function c(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}var l=n("6b0d"),o=n.n(l);const s={},r=o()(s,[["render",c]]);var i=r,d=n("9483");Object(d["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=n("6605");function b(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}const h={},p=o()(h,[["render",b]]);var g=p,j=[{path:"levels",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d226747")]).then(n.bind(null,"e974"))}];const A={class:"navbar navbar-expand-sm bg-primary navbar-primary"},f={class:"container-fluid"},m=["src"],v=["textContent"],O=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),k={class:"collapse navbar-collapse",id:"collapsibleNavbar"},w={class:"navbar-nav"},y={class:"nav-item"},D=Object(a["g"])("i",{class:"fa-solid fa-school"},null,-1),E={class:"nav-item"},B=Object(a["g"])("i",{class:"fas fa-donate"},null,-1),Q={class:"nav-item dropdown"},S=Object(a["g"])("a",{class:"nav-link text-white dropdown-toggle",href:"javascript:void(0)",role:"button","data-bs-toggle":"dropdown"},[Object(a["g"])("i",{class:"fa-solid fa-gears"}),Object(a["i"])(" Setting")],-1),I={class:"dropdown-menu"},P=Object(a["g"])("i",{class:"fa-solid fa-dial-med"},null,-1),U={class:"nav-item"},x=Object(a["g"])("i",{class:"fa-solid fa-address-card"},null,-1);function C(e,t,c,l,o,s){const r=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("nav",A,[Object(a["g"])("div",f,[Object(a["j"])(r,{class:"navbar-brand",to:"/smartphone/english"},{default:Object(a["E"])(()=>[Object(a["g"])("img",{src:n("6f6c"),alt:"Avatar Logo",style:{width:"40px"},class:"rounded-pill"},null,8,m),Object(a["g"])("span",{class:"navbar-text ms-3 text-white",textContent:Object(a["A"])(o.localStorate.language.title)},null,8,v)]),_:1}),O,Object(a["g"])("div",k,[Object(a["g"])("ul",w,[Object(a["g"])("li",y,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/english/study"},{default:Object(a["E"])(()=>[D,Object(a["i"])(" Study")]),_:1})]),Object(a["g"])("li",E,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/english/donate"},{default:Object(a["E"])(()=>[B,Object(a["i"])(" Donate ✨✨✨")]),_:1})]),Object(a["g"])("li",Q,[S,Object(a["g"])("ul",I,[Object(a["g"])("li",null,[Object(a["j"])(r,{class:"dropdown-item",to:"/smartphone/english/setting/levels"},{default:Object(a["E"])(()=>[P,Object(a["i"])(" Levels")]),_:1})]),Object(a["e"])("",!0)])]),Object(a["g"])("li",U,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/english/about"},{default:Object(a["E"])(()=>[x,Object(a["i"])(" About me")]),_:1})])]),Object(a["e"])("",!0)])])])}var L=n("e988"),J={data(){return{localStorate:null}},async created(){this.init()},methods:{async init(){this.localStorate=new L["a"]}}};const M=o()(J,[["render",C]]);var N=M,V={__name:"Index",setup(e){return(e,t)=>(Object(a["t"])(),Object(a["f"])("header",null,[Object(a["j"])(N)]))}};const K=V;var G=K;var F={__name:"DefaultTemplateView",setup(e){return(e,t)=>{const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])("div",null,[Object(a["j"])(G),Object(a["g"])("main",null,[Object(a["j"])(n),Object(a["e"])("",!0)]),Object(a["e"])("",!0)])}}};const T=F;var H=T;const W=[{path:"",component:H,children:[{path:"",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"/",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"study",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0b1e02")]).then(n.bind(null,"225a"))},{path:"about",component:()=>n.e("chunk-2d0c916c").then(n.bind(null,"583f"))},{path:"setting",component:g,children:j}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0ddf52").then(n.bind(null,"8433"))}];var Z=W,Y=[{path:"levels",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0e200f")]).then(n.bind(null,"7d9e"))}];function X(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}const z={},R=o()(z,[["render",X]]);var q=R;const _={class:"navbar navbar-expand-sm bg-primary navbar-primary"},$={class:"container-fluid"},ee=["src"],te=["textContent"],ne=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),ae={class:"collapse navbar-collapse",id:"collapsibleNavbar"},ce={class:"navbar-nav"},le={class:"nav-item"},oe=Object(a["g"])("i",{class:"fa-solid fa-school"},null,-1),se={class:"nav-item"},re=Object(a["g"])("i",{class:"fa-solid fa-chess"},null,-1),ie={class:"nav-item"},de=Object(a["g"])("i",{class:"fas fa-donate"},null,-1),ue={class:"nav-item dropdown"},be=Object(a["g"])("a",{class:"nav-link text-white dropdown-toggle",href:"javascript:void(0)",role:"button","data-bs-toggle":"dropdown"},[Object(a["g"])("i",{class:"fa-solid fa-gears"}),Object(a["i"])(" Setting")],-1),he={class:"dropdown-menu"},pe=Object(a["g"])("i",{class:"fa-solid fa-dial-med"},null,-1),ge={class:"nav-item"},je=Object(a["g"])("i",{class:"fa-solid fa-address-card"},null,-1);function Ae(e,t,c,l,o,s){const r=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("nav",_,[Object(a["g"])("div",$,[Object(a["j"])(r,{class:"navbar-brand",to:"/smartphone/vietnamese"},{default:Object(a["E"])(()=>[Object(a["g"])("img",{src:n("6f6c"),alt:"Avatar Logo",style:{width:"40px"},class:"rounded-pill"},null,8,ee),Object(a["g"])("span",{class:"navbar-text ms-3 text-white",textContent:Object(a["A"])(o.localStorate.language.title)},null,8,te)]),_:1}),ne,Object(a["g"])("div",ae,[Object(a["g"])("ul",ce,[Object(a["g"])("li",le,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/study"},{default:Object(a["E"])(()=>[oe,Object(a["i"])(" Study")]),_:1})]),Object(a["g"])("li",se,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/play"},{default:Object(a["E"])(()=>[re,Object(a["i"])(" Play")]),_:1})]),Object(a["g"])("li",ie,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/donate"},{default:Object(a["E"])(()=>[de,Object(a["i"])(" Donate ✨✨✨")]),_:1})]),Object(a["g"])("li",ue,[be,Object(a["g"])("ul",he,[Object(a["g"])("li",null,[Object(a["j"])(r,{class:"dropdown-item",to:"/smartphone/vietnamese/setting/levels"},{default:Object(a["E"])(()=>[pe,Object(a["i"])(" Levels")]),_:1})]),Object(a["e"])("",!0)])]),Object(a["g"])("li",ge,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/about"},{default:Object(a["E"])(()=>[je,Object(a["i"])(" About me")]),_:1})])]),Object(a["e"])("",!0)])])])}var fe={data(){return{localStorate:null}},async created(){this.init()},methods:{async init(){this.localStorate=new L["a"]}}};const me=o()(fe,[["render",Ae]]);var ve=me,Oe={__name:"Index",setup(e){return(e,t)=>(Object(a["t"])(),Object(a["f"])("header",null,[Object(a["j"])(ve)]))}};const ke=Oe;var we=ke;var ye={__name:"DefaultTemplateView",setup(e){return(e,t)=>{const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])("div",null,[Object(a["j"])(we),Object(a["g"])("main",null,[Object(a["j"])(n),Object(a["e"])("",!0)]),Object(a["e"])("",!0)])}}};const De=ye;var Ee=De;const Be=[{path:"",component:Ee,children:[{path:"",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d21eac7")]).then(n.bind(null,"d720"))},{path:"/",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d21eac7")]).then(n.bind(null,"d720"))},{path:"study",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d21eac7")]).then(n.bind(null,"d720"))},{path:"play",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-6474a31a")]).then(n.bind(null,"b08e"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0c46e1")]).then(n.bind(null,"3b95"))},{path:"about",component:()=>n.e("chunk-2d22c692").then(n.bind(null,"f2b2"))},{path:"setting",component:q,children:Y}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0c09d4").then(n.bind(null,"4310"))}];var Qe=Be;const Se=[{path:"",component:g,children:[{path:"",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"/",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0b1e02")]).then(n.bind(null,"225a"))},{path:"about",component:()=>n.e("chunk-2d0c916c").then(n.bind(null,"583f"))},{path:"english",component:g,children:Z},{path:"vietnamese",component:g,children:Qe}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0ddf52").then(n.bind(null,"8433"))}];var Ie=Se;function Pe(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}const Ue={},xe=o()(Ue,[["render",Pe]]);var Ce=xe;const Le=[{path:"",component:Ce,children:[{path:"",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"/",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0d3659")]).then(n.bind(null,"5d1e"))},{path:"about",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"smartphone",component:Ce,children:Ie}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0cef36").then(n.bind(null,"6248"))}],Je=Object(u["a"])({history:Object(u["b"])(),routes:Le});var Me=Je,Ne=n("5502"),Ve=Object(Ne["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(i).use(Ve).use(Me).mount("#app")},"6f6c":function(e,t){e.exports="data:image/png;base64,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"},"7f16":function(e,t,n){"use strict";const a={version:"1.0.0",author:{name:"Nguyen Ngoc Nam",social:{linktree:{url:"https://linktr.ee/mlight",icon:"fab fa-staylinked"},linkedin:{url:"https://www.linkedin.com/in/nguyenngocnam/",icon:"fab fa-linkedin"},stackOverflow:{url:"https://stackoverflow.com/users/6351894/ngoc-nam",icon:"fab fa-stack-overflow"},github:{url:"https://github.com/mlightvn",icon:"fab fa-github"}}},language:{key:"japanese-english",list:{"japanese-vietnamese":{title:"Học tiếng Nhật bằng JLPT",description:"Học tiếng Nhật bằng JLPT",local_storage:{name:"github.com/mlightvn|nguyen-ngoc-nam|jlpt-app|japanese-vietnamese|timestamp:20221010_000001"},data:{default:{topic:"jlpt",level:"jlpt5",sub_level:"week_01"}}},"japanese-english":{title:"JLPT Vocabularies",description:"JLPT Vocabularies",local_storage:{name:"github.com/mlightvn|nguyen-ngoc-nam|jlpt-app|japanese-english|timestamp:20221010_000001"},data:{default:{topic:"jlpt",level:"jlpt5",sub_level:"week_01"}}}}},setting:{level:{topic:"jlpt",level:"jlpt5",sub_level:"week_01"}},donate:{urls:{paypal:"https://www.paypal.me/rakujin",ethereum:"https://etherscan.io/address/0x0a0b017db9b5b306d219eb8e5f0f83d9235c9bc0",ethereum_2nd:"https://etherscan.io/address/0x27b5419afb9c3D99A262046383e083Ae7d81900a"},cryptocurrency:{ethereum:{ethereum:{address:"0x0a0b017db9b5b306d219eb8e5f0f83d9235c9bc0",address_2nd:"0x27b5419afb9c3D99A262046383e083Ae7d81900a"}},coincheck:{btc:{address:"1Ft6QQA5LcZxD4pGzCd4pVhHGQbUuftGi8",generated_at:"2020-09-20"}},localbitcoins:{btc:{address:"36HRRE1Jdfz4hSFJC9NwMKrcQVzrhTrRtM",expired_at:"2020-08-01"}}}}};a.language.value=a.language.list[a.language.key],t["a"]=a},e988:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("8159"),c=n.n(a),l=n("7f16");class o{constructor(){this.init()}async init(){await this.onLoad()}async onLoad(){this.localStorage=c.a,this.setLanguageKey(l["a"].language.key)}setLanguageKey(e="japanese-vietnamese"){this.language_key=e,this.language=l["a"].language.list[this.language_key],this.default_level=this.language.data.default,this.name=this.language.local_storage.name,this.setting=this.getSettingInfo()}getSettingInfo(){let e=this.localStorage.getItem(this.name);return e||(e=l["a"].setting),e}getValue(e=null){return e&&e in this.setting?this.setting[e]:null}setValue(e=null,t=null){e&&(this.setting[e]=t),this.localStorage.setItem(this.name,this.setting)}getLevel(){return this.setting.level}setLevel(e=this.default_level){this.setting.level=e,this.setValue("level",this.setting.level)}}}});
//# sourceMappingURL=app.a9f60852.js.map