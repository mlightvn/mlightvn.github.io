(function(e){function t(t){for(var a,o,s=t[0],r=t[1],i=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(b.length)b.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,o=1;o<n.length;o++){var r=n[o];0!==c[r]&&(a=!1)}a&&(l.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},l=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c09d4":"1b95b8ca","chunk-2d0c916c":"1c68dd1c","chunk-2d0cef36":"a455b497","chunk-2d0ddf52":"ed1f9091","chunk-2d22c692":"2a9b7ecb","chunk-2d22d746":"3969d6d9","chunk-9534077c":"d73d7070","chunk-2d0bd5f3":"0e018fc0","chunk-2d0e200f":"d4305693","chunk-2d21eac7":"9e4eb928","chunk-2d226747":"524f023b","chunk-a57b1e9e":"fb2f9b8c","chunk-2d0b1e02":"0a56d3b4","chunk-2d0c46e1":"3cd8b9fe","chunk-2d0d3659":"b240b40f"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=c[e]=[t,a]}));t.push(n[2]=a);var l,r=document.createElement("script");r.charset="utf-8",r.timeout=120,s.nc&&r.setAttribute("nonce",s.nc),r.src=o(e);var i=new Error;l=function(t){r.onerror=r.onload=null,clearTimeout(d);var n=c[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+l+")",i.name="ChunkLoadError",i.type=a,i.request=l,n[1](i)}c[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:r})}),12e4);r.onerror=r.onload=l,document.head.appendChild(r)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=i;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function c(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}var l=n("6b0d"),o=n.n(l);const s={},r=o()(s,[["render",c]]);var i=r,d=n("9483");Object(d["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=n("6605");function b(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}const h={},p=o()(h,[["render",b]]);var g=p,m=[{path:"levels",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d226747")]).then(n.bind(null,"e974"))}];const j={class:"navbar navbar-expand-sm bg-primary navbar-primary"},f={class:"container-fluid"},v=["src"],O=["textContent"],k=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),w={class:"collapse navbar-collapse",id:"collapsibleNavbar"},y={class:"navbar-nav"},A={class:"nav-item"},x=Object(a["g"])("i",{class:"fa-solid fa-school"},null,-1),L={class:"nav-item"},P=Object(a["g"])("i",{class:"fas fa-donate"},null,-1),_={class:"nav-item dropdown"},D=Object(a["g"])("a",{class:"nav-link text-white dropdown-toggle",href:"javascript:void(0)",role:"button","data-bs-toggle":"dropdown"},[Object(a["g"])("i",{class:"fa-solid fa-gears"}),Object(a["i"])(" Setting")],-1),T={class:"dropdown-menu"},E=Object(a["g"])("i",{class:"fa-solid fa-dial-med"},null,-1),H={class:"nav-item"},N=Object(a["g"])("i",{class:"fa-solid fa-address-card"},null,-1);function S(e,t,c,l,o,s){const r=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("nav",j,[Object(a["g"])("div",f,[Object(a["j"])(r,{class:"navbar-brand",to:"/smartphone/english"},{default:Object(a["E"])(()=>[Object(a["g"])("img",{src:n("d5dd"),alt:"Avatar Logo",style:{width:"40px"},class:"rounded-pill"},null,8,v),Object(a["g"])("span",{class:"navbar-text ms-3 text-white",textContent:Object(a["A"])(o.localStorate.language.title)},null,8,O)]),_:1}),k,Object(a["g"])("div",w,[Object(a["g"])("ul",y,[Object(a["g"])("li",A,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/english/study"},{default:Object(a["E"])(()=>[x,Object(a["i"])(" Study")]),_:1})]),Object(a["g"])("li",L,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/english/donate"},{default:Object(a["E"])(()=>[P,Object(a["i"])(" Donate ✨✨✨")]),_:1})]),Object(a["g"])("li",_,[D,Object(a["g"])("ul",T,[Object(a["g"])("li",null,[Object(a["j"])(r,{class:"dropdown-item",to:"/smartphone/english/setting/levels"},{default:Object(a["E"])(()=>[E,Object(a["i"])(" Levels")]),_:1})]),Object(a["e"])("",!0)])]),Object(a["g"])("li",H,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/english/about"},{default:Object(a["E"])(()=>[N,Object(a["i"])(" About me")]),_:1})])]),Object(a["e"])("",!0)])])])}var C=n("e988"),M={data(){return{localStorate:null}},async created(){this.init()},methods:{async init(){this.localStorate=new C["a"]}}};const U=o()(M,[["render",S]]);var V=U,J={__name:"Index",setup(e){return(e,t)=>(Object(a["t"])(),Object(a["f"])("header",null,[Object(a["j"])(V)]))}};const z=J;var Z=z;var Q={__name:"DefaultTemplateView",setup(e){return(e,t)=>{const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])("div",null,[Object(a["j"])(Z),Object(a["g"])("main",null,[Object(a["j"])(n),Object(a["e"])("",!0)]),Object(a["e"])("",!0)])}}};const R=Q;var F=R;const I=[{path:"",component:F,children:[{path:"",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"/",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"study",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0b1e02")]).then(n.bind(null,"225a"))},{path:"about",component:()=>n.e("chunk-2d0c916c").then(n.bind(null,"583f"))},{path:"setting",component:g,children:m}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0ddf52").then(n.bind(null,"8433"))}];var G=I,W=[{path:"levels",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0e200f")]).then(n.bind(null,"7d9e"))}];function X(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}const K={},q=o()(K,[["render",X]]);var B=q;const Y={class:"navbar navbar-expand-sm bg-primary navbar-primary"},$={class:"container-fluid"},ee=["src"],te=["textContent"],ne=Object(a["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapsibleNavbar"},[Object(a["g"])("span",{class:"navbar-toggler-icon"})],-1),ae={class:"collapse navbar-collapse",id:"collapsibleNavbar"},ce={class:"navbar-nav"},le={class:"nav-item"},oe=Object(a["g"])("i",{class:"fa-solid fa-school"},null,-1),se={class:"nav-item"},re=Object(a["g"])("i",{class:"fas fa-donate"},null,-1),ie={class:"nav-item dropdown"},de=Object(a["g"])("a",{class:"nav-link text-white dropdown-toggle",href:"javascript:void(0)",role:"button","data-bs-toggle":"dropdown"},[Object(a["g"])("i",{class:"fa-solid fa-gears"}),Object(a["i"])(" Setting")],-1),ue={class:"dropdown-menu"},be=Object(a["g"])("i",{class:"fa-solid fa-dial-med"},null,-1),he={class:"nav-item"},pe=Object(a["g"])("i",{class:"fa-solid fa-address-card"},null,-1);function ge(e,t,c,l,o,s){const r=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("nav",Y,[Object(a["g"])("div",$,[Object(a["j"])(r,{class:"navbar-brand",to:"/smartphone/vietnamese"},{default:Object(a["E"])(()=>[Object(a["g"])("img",{src:n("d5dd"),alt:"Avatar Logo",style:{width:"40px"},class:"rounded-pill"},null,8,ee),Object(a["g"])("span",{class:"navbar-text ms-3 text-white",textContent:Object(a["A"])(o.localStorate.language.title)},null,8,te)]),_:1}),ne,Object(a["g"])("div",ae,[Object(a["g"])("ul",ce,[Object(a["g"])("li",le,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/study"},{default:Object(a["E"])(()=>[oe,Object(a["i"])(" Study")]),_:1})]),Object(a["g"])("li",se,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/donate"},{default:Object(a["E"])(()=>[re,Object(a["i"])(" Donate ✨✨✨")]),_:1})]),Object(a["g"])("li",ie,[de,Object(a["g"])("ul",ue,[Object(a["g"])("li",null,[Object(a["j"])(r,{class:"dropdown-item",to:"/smartphone/vietnamese/setting/levels"},{default:Object(a["E"])(()=>[be,Object(a["i"])(" Levels")]),_:1})]),Object(a["e"])("",!0)])]),Object(a["g"])("li",he,[Object(a["j"])(r,{class:"nav-link text-white",to:"/smartphone/vietnamese/about"},{default:Object(a["E"])(()=>[pe,Object(a["i"])(" About me")]),_:1})])]),Object(a["e"])("",!0)])])])}var me={data(){return{localStorate:null}},async created(){this.init()},methods:{async init(){this.localStorate=new C["a"]}}};const je=o()(me,[["render",ge]]);var fe=je,ve={__name:"Index",setup(e){return(e,t)=>(Object(a["t"])(),Object(a["f"])("header",null,[Object(a["j"])(fe)]))}};const Oe=ve;var ke=Oe;var we={__name:"DefaultTemplateView",setup(e){return(e,t)=>{const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])("div",null,[Object(a["j"])(ke),Object(a["g"])("main",null,[Object(a["j"])(n),Object(a["e"])("",!0)]),Object(a["e"])("",!0)])}}};const ye=we;var Ae=ye;const xe=[{path:"",component:Ae,children:[{path:"",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d21eac7")]).then(n.bind(null,"d720"))},{path:"/",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d21eac7")]).then(n.bind(null,"d720"))},{path:"study",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d21eac7")]).then(n.bind(null,"d720"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0c46e1")]).then(n.bind(null,"3b95"))},{path:"about",component:()=>n.e("chunk-2d22c692").then(n.bind(null,"f2b2"))},{path:"setting",component:B,children:W}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0c09d4").then(n.bind(null,"4310"))}];var Le=xe;const Pe=[{path:"",component:g,children:[{path:"",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"/",component:()=>Promise.all([n.e("chunk-9534077c"),n.e("chunk-2d0bd5f3")]).then(n.bind(null,"2c5a"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0b1e02")]).then(n.bind(null,"225a"))},{path:"about",component:()=>n.e("chunk-2d0c916c").then(n.bind(null,"583f"))},{path:"english",component:g,children:G},{path:"vietnamese",component:g,children:Le}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0ddf52").then(n.bind(null,"8433"))}];var _e=Pe;function De(e,t){const n=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["d"])(n)}const Te={},Ee=o()(Te,[["render",De]]);var He=Ee;const Ne=[{path:"",component:He,children:[{path:"",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"/",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"donate",component:()=>Promise.all([n.e("chunk-a57b1e9e"),n.e("chunk-2d0d3659")]).then(n.bind(null,"5d1e"))},{path:"about",component:()=>n.e("chunk-2d22d746").then(n.bind(null,"f820"))},{path:"smartphone",component:He,children:_e}]},{path:"/:pathMatch(.*)*",name:"error_404",component:()=>n.e("chunk-2d0cef36").then(n.bind(null,"6248"))}],Se=Object(u["a"])({history:Object(u["b"])("/"),routes:Ne});var Ce=Se,Me=n("5502"),Ue=Object(Me["a"])({state:{},mutations:{},actions:{},modules:{}});Object(a["c"])(i).use(Ue).use(Ce).mount("#app")},"7f16":function(e,t,n){"use strict";const a={version:"1.0.0",author:{name:"Nguyen Ngoc Nam",social:{linktree:{url:"https://linktr.ee/mlight",icon:"fab fa-staylinked"},linkedin:{url:"https://www.linkedin.com/in/nguyenngocnam/",icon:"fab fa-linkedin"},stackOverflow:{url:"https://stackoverflow.com/users/6351894/ngoc-nam",icon:"fab fa-stack-overflow"},github:{url:"https://github.com/mlightvn",icon:"fab fa-github"}}},language:{key:"japanese-english",list:{"japanese-vietnamese":{title:"Học tiếng Nhật bằng JLPT",description:"Học tiếng Nhật bằng JLPT",local_storage:{name:"github.com/mlightvn|nguyen-ngoc-nam|jlpt-app|japanese-vietnamese|timestamp:20221010_000001"},data:{default:{topic:"jlpt",level:"jlpt5",sub_level:"week_01"}}},"japanese-english":{title:"JLPT Vocabularies",description:"JLPT Vocabularies",local_storage:{name:"github.com/mlightvn|nguyen-ngoc-nam|jlpt-app|japanese-english|timestamp:20221010_000001"},data:{default:{topic:"jlpt",level:"jlpt5",sub_level:"week_01"}}}}},setting:{level:{topic:"jlpt",level:"jlpt5",sub_level:"week_01"}},donate:{urls:{paypal:"https://www.paypal.me/rakujin",ethereum:"https://etherscan.io/address/0x0a0b017db9b5b306d219eb8e5f0f83d9235c9bc0",ethereum_2nd:"https://etherscan.io/address/0x27b5419afb9c3D99A262046383e083Ae7d81900a"},cryptocurrency:{ethereum:{ethereum:{address:"0x0a0b017db9b5b306d219eb8e5f0f83d9235c9bc0",address_2nd:"0x27b5419afb9c3D99A262046383e083Ae7d81900a"}},coincheck:{btc:{address:"1Ft6QQA5LcZxD4pGzCd4pVhHGQbUuftGi8",generated_at:"2020-09-20"}},localbitcoins:{btc:{address:"36HRRE1Jdfz4hSFJC9NwMKrcQVzrhTrRtM",expired_at:"2020-08-01"}}}}};a.language.value=a.language.list[a.language.key],t["a"]=a},d5dd:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAE6ElEQVR4Ab1WA5RjSRTdY629Y9u2PbPesW3btm3btm172vbPTzr5yVfdfS/9h2mM77nNOqlbT7fqC3xi+AjomnC73qTq+UgCmqosm+Lo+a+jd8MXpD9d80fT0kcQ0C6ftDXIL1XNxKySMYkJFdM5+jQSHjdswQi6AGG+p4BwyI4BzaSqmaXqWW1/FZGblpObeNmojHNkO3FlJZbXwKIKiHn0ngKePeukWjmSdlfPHzGjw83IEC9DzZCHWFUfkzJiUmYcHARDe2cBMyLY3raGVC0L0TV3JAwDb+DuNkzLjclZMasg/E+/s4CybLJUJRPtLreobAT7gSGgy1DjoMZDi0diMDY3wuQsHMTm5pDDoEhwJVjUlFQFhFDPHrJ3/UOqndu9dZm14nyGGw1wqQwulWVeLocDeTE9C6Zkw9ScWFoVK2pbpNrc3ph2DczoUHXtGDMmxCtp4MlAHPsKx75+hd9gVTpMzkYaFIoVDXFiBlyYC8AIC6TKJS/AvXFoEBaWwaP9IEjncCYrjn+L49/hVHqcysA8nQGHM2NedkzLypyeHbMKMGfmE0cnu3eskltUck7pB031TZGJoyMxkZokE9b+AzkQd5pap75eF9J5yNcgX/XyBu5PwJ6fsftH7MuIR8sRcQeRt7UTm23181GL0xhpF48nF0HELcwryVFPzYUD/+JUOjo+nz32EN6AGoNrNXD8a+b99jDdAITiTBzRgWeoWmZHvybCLvkICIHTU6kLOcWzMmHfD/z5B11gJudC0btw8lc+wcnfEL3b8rA7l21/F6Uxkmrm8OxanZxVyKHcEly9bFiRDmfzw3EHycJQcK+NlcNrNaHGgmAargVjpOo8SXLramZ4UHJmd2UZpmTlJpmeCbdGIBUknKWyW10QvtrSDXgsNyxNQVCilDWzfQQMFQcHWhHMzYCrjaDbkRJCl+LEjzj+DTcbtZwX6tmDXGoym3p51VP7fQT8TnLPURmmZsXWX3DyJ4SvRbJw+eNiCR4L4pNBPDSAKcWRsdPZqdTOsd2ER3ldwG3DpmY8NXT8Zblw9HvKL0+vOxRvQJh4OtTa/UIxGnhrg61LpRrZqQa2f0voD276FPn6akzNzsefUwwPluNCYf48pdhvHCBeE7BdwpnsvHriB4QstLIb9FRuVoHKSwLK0kkQps+gXVqA2UV40I6Oon5A4AyuHgmcycbN/qAbHnRl3uuOXbWwLB2Wp8fK7NjTEQcG4uAAfecke4e6lByyZHL45AaN8hh6VezogZgnIHiicLUqZYk12JEsYssPmMJptMhelAkT0pMXmTFRyopp6tEdyXuRSLR7Dmx29Gmo379urURtw8lfLI8jUsMc+h7zeHduZW42i+wxF+aBYJoUva8AL7gWjZdqZqcbOHFMV+FWvHl1ImIjghdwopkLsLe+d8esbCrn5+DaSlxbwbxKjnQ7DbtWzxyg5uUZqZtHPbUPvoh9isWVLYEz0wHxbjeaUN3OCT0tt+r+l5kQ+7o3aHQVU8ZZYEUdyOHvc+nrj27LDUuxmdTKQWLudXOVtXOINPTqjoVY19DrtTlwZ/P7vouEUJZP5SzVyJY0kBYrZ3D0bSzigzjvB/rDbX9fAcCMCrO3r0U7et9eFhMqpbceXsKE5vrQt6l26YRr4ThqqpdcOJaeTNB1vBc+9+v64+N/oKklTvzdhEwAAAAASUVORK5CYII="},e988:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("8159"),c=n.n(a),l=n("7f16");class o{constructor(){this.init()}async init(){await this.onLoad()}async onLoad(){this.localStorage=c.a,this.setLanguageKey(l["a"].language.key)}setLanguageKey(e="japanese-vietnamese"){this.language_key=e,this.language=l["a"].language.list[this.language_key],this.default_level=this.language.data.default,this.name=this.language.local_storage.name,this.setting=this.getSettingInfo()}getSettingInfo(){let e=this.localStorage.getItem(this.name);return e||(e=l["a"].setting),e}getValue(e=null){return e&&e in this.setting?this.setting[e]:null}setValue(e=null,t=null){e&&(this.setting[e]=t),this.localStorage.setItem(this.name,this.setting)}getLevel(){return this.setting.level}setLevel(e=this.default_level){this.setting.level=e,this.setValue("level",this.setting.level)}}}});
//# sourceMappingURL=app.32afd789.js.map