import{e as V,o as N,c as M,a as c,m as R,s as He,v as K,n as P,g as U,x as Qt,y as re,z as Ln,A as $n,b as C,u as Mn,j as zn,_ as Fn,F as Zt,h as Jt,B as kt,i as en,w as $,t as jn,f as ke}from"./index-1f795b3d.js";import{l as Dn,a as Yn}from"./lodash-b028437e.js";import{_ as tn,a as Un,b as Hn}from"./InputTrim.vue_vue_type_script_setup_true_lang-961d975c.js";import{_ as Bn}from"./CopyMixin.vue_vue_type_script_setup_true_lang-9233ec1e.js";import{_ as Wn}from"./PasteMixin.vue_vue_type_script_lang-1252b51c.js";import{_ as Vn}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-008f8236.js";import{_ as qe}from"./Card.vue_vue_type_script_setup_true_lang-e3c11e40.js";import{P as xt}from"./PrimaryButton-698d5eca.js";import{P as Ie}from"./PrimaryOutlineButton-54ea0be8.js";import{R as Gn}from"./ResetButton-894caff2.js";const Xn={class:""},qn={class:"input-group"},Kn={class:"input-group-text"},Qn=["disabled"],Zn=["disabled"],Jn=c("i",{class:"fa-solid fa-xmark"},null,-1),ea=[Jn],ta={class:"input-group-text"},na={class:"input-group-text"},aa=["disabled"],ra=["disabled"],ia=["disabled"],oa={computed:{input_value:{get(){let e="abc";switch(this.input.selected_type){case"0":e=this.input.value;break;case"1":e=this.input.tab;break;case"2":e=this.input.new_line;break}return e}}},data(){return{input:{selected_type:"0",value:"",tab:"	",new_line:`
`}}},methods:{handleAdd(){this.$emit("handleAdd",this.input_value)},handleAddStart(){this.$emit("handleAddStart",this.input_value)},handleAddEnd(){this.$emit("handleAddEnd",this.input_value)}}},sa=V({...oa,__name:"InputAdd",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(N(),M("div",Xn,[c("div",qn,[c("label",Kn,[R(c("input",{type:"radio",name:"add_value",class:"form-check-input","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.selected_type=a),value:"0"},null,512),[[He,t.input.selected_type]])]),R(c("input",{type:"text",class:"form-control",placeholder:"Add text","onUpdate:modelValue":n[1]||(n[1]=a=>t.input.value=a),disabled:t.input.selected_type!="0",onFocus:n[2]||(n[2]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()})},null,40,Qn),[[K,t.input.value]]),c("button",{type:"button",class:P(e.button_class),onClick:n[3]||(n[3]=a=>t.input.value=""),disabled:!t.input.value},ea,10,Zn),c("label",ta,[R(c("input",{type:"radio",name:"add_value",class:"form-check-input","onUpdate:modelValue":n[4]||(n[4]=a=>t.input.selected_type=a),value:"1"},null,512),[[He,t.input.selected_type]]),U(" Tab ")]),c("label",na,[R(c("input",{type:"radio",name:"add_value",class:"form-check-input","onUpdate:modelValue":n[5]||(n[5]=a=>t.input.selected_type=a),value:"2"},null,512),[[He,t.input.selected_type]]),U(" New Line ")]),c("button",{type:"button",class:P(e.button_class),disabled:!t.input_value,onClick:n[6]||(n[6]=(...a)=>t.handleAdd&&t.handleAdd(...a))}," Add ",10,aa),c("button",{type:"button",class:P(e.button_class),disabled:!t.input_value,onClick:n[7]||(n[7]=(...a)=>t.handleAddStart&&t.handleAddStart(...a))}," Add Start ",10,ra),c("button",{type:"button",class:P(e.button_class),disabled:!t.input_value,onClick:n[8]||(n[8]=(...a)=>t.handleAddEnd&&t.handleAddEnd(...a))}," Add End ",10,ia)])]))}}),la={class:""},fa={class:"input-group"},ua=["disabled"],ca=c("i",{class:"fa-solid fa-xmark"},null,-1),da=[ca],ma=["disabled"],pa=c("i",{class:"fa-solid fa-xmark"},null,-1),va=[pa],ha=["disabled"],ba={data(){return{input:{search:{value:""},replace:{value:""}}}},methods:{handleReplaceAll(){this.$emit("handleReplaceAll",this.input.search.value,this.input.replace.value)}}},ga=V({...ba,__name:"InputReplace",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(N(),M("div",la,[c("div",fa,[R(c("input",{type:"text",class:"form-control",placeholder:"Searched text","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.search.value=a),onFocus:n[1]||(n[1]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()})},null,544),[[K,t.input.search.value]]),c("button",{type:"button",class:P(e.button_class),onClick:n[2]||(n[2]=a=>t.input.search.value=""),disabled:!t.input.search.value},da,10,ua),R(c("input",{type:"text",class:"form-control",placeholder:"Replacing text","onUpdate:modelValue":n[3]||(n[3]=a=>t.input.replace.value=a),onFocus:n[4]||(n[4]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()})},null,544),[[K,t.input.replace.value]]),c("button",{type:"button",class:P(e.button_class),onClick:n[5]||(n[5]=a=>t.input.replace.value=""),disabled:!t.input.replace.value},va,10,ma),c("button",{type:"button",class:P(e.button_class),disabled:!t.input.search.value&&!t.input.replace.value,onClick:n[6]||(n[6]=(...a)=>t.handleReplaceAll&&t.handleReplaceAll(...a))}," Replace All ",10,ha)])]))}}),ya={class:""},wa={class:"input-group"},ka=c("span",{class:"input-group-text"},"Replace New line by",-1),xa=["disabled"],_a=["disabled"],Aa=c("i",{class:"fa-solid fa-xmark"},null,-1),Sa=[Aa],Ca={class:"input-group-text"},Oa={class:"form-check form-switch"},Ea=["disabled"],Pa={data(){return{input:{search:{value:/[\n|\r]/g},replace:{value:"",tab:{isSelected:!1,value:"	"}}}}},methods:{handleReplaceRegEx(){let e=this.input.replace.tab.isSelected?this.input.replace.tab.value:this.input.replace.value;this.$emit("handleReplaceRegEx",this.input.search.value,e)}}},Ta=V({...Pa,__name:"InputReplaceNewLine",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(N(),M("div",ya,[c("div",wa,[ka,R(c("input",{type:"text",class:"form-control",placeholder:"Replacing text","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.replace.value=a),onFocus:n[1]||(n[1]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()}),disabled:t.input.replace.tab.isSelected},null,40,xa),[[K,t.input.replace.value]]),c("button",{type:"button",class:P(e.button_class),onClick:n[2]||(n[2]=a=>t.input.replace.value=""),disabled:!t.input.replace.value},Sa,10,_a),c("label",Ca,[c("span",Oa,[R(c("input",{type:"checkbox",role:"switch",class:"form-check-input","onUpdate:modelValue":n[3]||(n[3]=a=>t.input.replace.tab.isSelected=a)},null,512),[[Qt,t.input.replace.tab.isSelected]])]),U(" Tab ")]),c("button",{type:"button",class:P(e.button_class),disabled:!t.input.search.value&&!t.input.replace.value,onClick:n[4]||(n[4]=(...a)=>t.handleReplaceRegEx&&t.handleReplaceRegEx(...a))}," Replace All ",10,Ea)])]))}}),Ia={class:""},Na={class:"input-group"},Ra=["disabled"],La=["disabled"],$a=c("i",{class:"fa-solid fa-xmark"},null,-1),Ma=[$a],za={class:"input-group-text"},Fa={class:"form-check form-switch"},ja=c("span",{class:"input-group-text"},"by New line",-1),Da=["disabled"],Ya={data(){return{input:{search:{value:"",tab:{isSelected:!1,value:"	"}},replace:{value:`
`}}}},methods:{handleReplaceAll(){let e=this.input.search.tab.isSelected?this.input.search.tab.value:this.input.search.value;this.$emit("handleReplaceAll",e,this.input.replace.value)}}},Ua=V({...Ya,__name:"InputReplaceByNewLine",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(N(),M("div",Ia,[c("div",Na,[R(c("input",{type:"text",class:"form-control",placeholder:"Replacing text","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.search.value=a),onFocus:n[1]||(n[1]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()}),disabled:t.input.search.tab.isSelected},null,40,Ra),[[K,t.input.search.value]]),c("button",{type:"button",class:P(e.button_class),onClick:n[2]||(n[2]=a=>t.input.search.value=""),disabled:!t.input.replace.value},Ma,10,La),c("label",za,[c("span",Fa,[R(c("input",{type:"checkbox",role:"switch",class:"form-check-input","onUpdate:modelValue":n[3]||(n[3]=a=>t.input.search.tab.isSelected=a)},null,512),[[Qt,t.input.search.tab.isSelected]])]),U(" Tab ")]),ja,c("button",{type:"button",class:P(e.button_class),disabled:!t.input.search.value&&!t.input.replace.value,onClick:n[4]||(n[4]=(...a)=>t.handleReplaceAll&&t.handleReplaceAll(...a))}," Replace All ",10,Da)])]))}}),Ha={mixins:[tn],methods:{async handleAdd(e,t="	"){e||(e=t),await this.commonLinesMapAction(n=>e+n+e)},async handleAddStart(e,t="	"){e||(e=t),await this.commonLinesMapAction(n=>e+n)},async handleAddEnd(e,t="	"){e||(e=t),await this.commonLinesMapAction(n=>n+e)}}},Ba=V({...Ha,__name:"AddMixin",setup(e){return()=>{}}}),Wa={mixins:[tn],methods:{async handleReplaceAll(e,t){this.paragraph_value=await this.paragraph_value.replaceAll(e,t)},async handleReplaceRegEx(e,t){this.paragraph_value=await this.paragraph_value.replace(e,t)}}},Va=V({...Wa,__name:"ReplaceMixin",setup(e){return()=>{}}});function _t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?_t(Object(n),!0).forEach(function(a){S(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_t(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Le(e){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Le(e)}function Ga(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function At(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Xa(e,t,n){return t&&At(e.prototype,t),n&&At(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lt(e,t){return Ka(e)||Za(e,t)||nn(e,t)||er()}function ge(e){return qa(e)||Qa(e)||nn(e)||Ja()}function qa(e){if(Array.isArray(e))return Ke(e)}function Ka(e){if(Array.isArray(e))return e}function Qa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Za(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function nn(e,t){if(e){if(typeof e=="string")return Ke(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ke(e,t)}}function Ke(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Ja(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function er(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var St=function(){},ft={},an={},rn=null,on={mark:St,measure:St};try{typeof window<"u"&&(ft=window),typeof document<"u"&&(an=document),typeof MutationObserver<"u"&&(rn=MutationObserver),typeof performance<"u"&&(on=performance)}catch{}var tr=ft.navigator||{},Ct=tr.userAgent,Ot=Ct===void 0?"":Ct,Q=ft,k=an,Et=rn,xe=on;Q.document;var G=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",sn=~Ot.indexOf("MSIE")||~Ot.indexOf("Trident/"),_e,Ae,Se,Ce,Oe,H="___FONT_AWESOME___",Qe=16,ln="fa",fn="svg-inline--fa",ne="data-fa-i2svg",Ze="data-fa-pseudo-element",nr="data-fa-pseudo-element-pending",ut="data-prefix",ct="data-icon",Pt="fontawesome-i2svg",ar="async",rr=["HTML","HEAD","STYLE","SCRIPT"],un=function(){try{return!0}catch{return!1}}(),w="classic",x="sharp",dt=[w,x];function ye(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[w]}})}var me=ye((_e={},S(_e,w,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(_e,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_e)),pe=ye((Ae={},S(Ae,w,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(Ae,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ae)),ve=ye((Se={},S(Se,w,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(Se,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Se)),ir=ye((Ce={},S(Ce,w,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(Ce,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Ce)),or=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,cn="fa-layers-text",sr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,lr=ye((Oe={},S(Oe,w,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(Oe,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Oe)),dn=[1,2,3,4,5,6,7,8,9,10],fr=dn.concat([11,12,13,14,15,16,17,18,19,20]),ur=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ee={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},he=new Set;Object.keys(pe[w]).map(he.add.bind(he));Object.keys(pe[x]).map(he.add.bind(he));var cr=[].concat(dt,ge(he),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ee.GROUP,ee.SWAP_OPACITY,ee.PRIMARY,ee.SECONDARY]).concat(dn.map(function(e){return"".concat(e,"x")})).concat(fr.map(function(e){return"w-".concat(e)})),ce=Q.FontAwesomeConfig||{};function dr(e){var t=k.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function mr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(k&&typeof k.querySelector=="function"){var pr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pr.forEach(function(e){var t=lt(e,2),n=t[0],a=t[1],r=mr(dr(n));r!=null&&(ce[a]=r)})}var mn={styleDefault:"solid",familyDefault:"classic",cssPrefix:ln,replacementClass:fn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ce.familyPrefix&&(ce.cssPrefix=ce.familyPrefix);var le=d(d({},mn),ce);le.autoReplaceSvg||(le.observeMutations=!1);var m={};Object.keys(mn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){le[e]=n,de.forEach(function(a){return a(m)})},get:function(){return le[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){le.cssPrefix=t,de.forEach(function(n){return n(m)})},get:function(){return le.cssPrefix}});Q.FontAwesomeConfig=m;var de=[];function vr(e){return de.push(e),function(){de.splice(de.indexOf(e),1)}}var q=Qe,D={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hr(e){if(!(!e||!G)){var t=k.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=k.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return k.head.insertBefore(t,a),e}}var br="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function be(){for(var e=12,t="";e-- >0;)t+=br[Math.random()*62|0];return t}function fe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function mt(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function pn(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function gr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(pn(e[n]),'" ')},"").trim()}function Fe(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function pt(e){return e.size!==D.size||e.x!==D.x||e.y!==D.y||e.rotate!==D.rotate||e.flipX||e.flipY}function yr(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function wr(e){var t=e.transform,n=e.width,a=n===void 0?Qe:n,r=e.height,i=r===void 0?Qe:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&sn?l+="translate(".concat(t.x/q-a/2,"em, ").concat(t.y/q-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/q,"em), calc(-50% + ").concat(t.y/q,"em)) "):l+="translate(".concat(t.x/q,"em, ").concat(t.y/q,"em) "),l+="scale(".concat(t.size/q*(t.flipX?-1:1),", ").concat(t.size/q*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var kr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function vn(){var e=ln,t=fn,n=m.cssPrefix,a=m.replacementClass,r=kr;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Tt=!1;function Be(){m.autoAddCss&&!Tt&&(hr(vn()),Tt=!0)}var xr={mixout:function(){return{dom:{css:vn,insertCss:Be}}},hooks:function(){return{beforeDOMElementCreation:function(){Be()},beforeI2svg:function(){Be()}}}},B=Q||{};B[H]||(B[H]={});B[H].styles||(B[H].styles={});B[H].hooks||(B[H].hooks={});B[H].shims||(B[H].shims=[]);var F=B[H],hn=[],_r=function e(){k.removeEventListener("DOMContentLoaded",e),$e=1,hn.map(function(t){return t()})},$e=!1;G&&($e=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),$e||k.addEventListener("DOMContentLoaded",_r));function Ar(e){G&&($e?setTimeout(e,0):hn.push(e))}function we(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?pn(e):"<".concat(t," ").concat(gr(a),">").concat(i.map(we).join(""),"</").concat(t,">")}function It(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Sr=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},We=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?Sr(n,r):n,l,u,f;for(a===void 0?(l=1,f=t[i[0]]):(l=0,f=a);l<o;l++)u=i[l],f=s(f,t[u],u,t);return f};function Cr(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Je(e){var t=Cr(e);return t.length===1?t[0].toString(16):null}function Or(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Nt(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function et(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Nt(t);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(e,Nt(t)):F.styles[e]=d(d({},F.styles[e]||{}),i),e==="fas"&&et("fa",t)}var Ee,Pe,Te,ie=F.styles,Er=F.shims,Pr=(Ee={},S(Ee,w,Object.values(ve[w])),S(Ee,x,Object.values(ve[x])),Ee),vt=null,bn={},gn={},yn={},wn={},kn={},Tr=(Pe={},S(Pe,w,Object.keys(me[w])),S(Pe,x,Object.keys(me[x])),Pe);function Ir(e){return~cr.indexOf(e)}function Nr(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Ir(r)?r:null}var xn=function(){var t=function(i){return We(ie,function(o,s,l){return o[l]=We(s,i,{}),o},{})};bn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),gn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),kn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in ie||m.autoFetchSvg,a=We(Er,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});yn=a.names,wn=a.unicodes,vt=je(m.styleDefault,{family:m.familyDefault})};vr(function(e){vt=je(e.styleDefault,{family:m.familyDefault})});xn();function ht(e,t){return(bn[e]||{})[t]}function Rr(e,t){return(gn[e]||{})[t]}function te(e,t){return(kn[e]||{})[t]}function _n(e){return yn[e]||{prefix:null,iconName:null}}function Lr(e){var t=wn[e],n=ht("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return vt}var bt=function(){return{prefix:null,iconName:null,rest:[]}};function je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?w:n,r=me[a][e],i=pe[a][e]||pe[a][r],o=e in F.styles?e:null;return i||o||null}var Rt=(Te={},S(Te,w,Object.keys(ve[w])),S(Te,x,Object.keys(ve[x])),Te);function De(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},S(t,w,"".concat(m.cssPrefix,"-").concat(w)),S(t,x,"".concat(m.cssPrefix,"-").concat(x)),t),o=null,s=w;(e.includes(i[w])||e.some(function(u){return Rt[w].includes(u)}))&&(s=w),(e.includes(i[x])||e.some(function(u){return Rt[x].includes(u)}))&&(s=x);var l=e.reduce(function(u,f){var p=Nr(m.cssPrefix,f);if(ie[f]?(f=Pr[s].includes(f)?ir[s][f]:f,o=f,u.prefix=f):Tr[s].indexOf(f)>-1?(o=f,u.prefix=je(f,{family:s})):p?u.iconName=p:f!==m.replacementClass&&f!==i[w]&&f!==i[x]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var b=o==="fa"?_n(u.iconName):{},g=te(u.prefix,u.iconName);b.prefix&&(o=null),u.iconName=b.iconName||g||u.iconName,u.prefix=b.prefix||u.prefix,u.prefix==="far"&&!ie.far&&ie.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},bt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(ie.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=te(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Z()||"fas"),l}var $r=function(){function e(){Ga(this,e),this.definitions={}}return Xa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),et(s,o[s]);var l=ve[w][s];l&&et(l,o[s]),xn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[s][p]=u)}),n[s][l]=u}),n}}]),e}(),Lt=[],oe={},se={},Mr=Object.keys(se);function zr(e,t){var n=t.mixoutsTo;return Lt=e,oe={},Object.keys(se).forEach(function(a){Mr.indexOf(a)===-1&&delete se[a]}),Lt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Le(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){oe[o]||(oe[o]=[]),oe[o].push(i[o])})}a.provides&&a.provides(se)}),n}function tt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=oe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=oe[e]||[];r.forEach(function(i){i.apply(null,n)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return se[e]?se[e].apply(null,t):void 0}function nt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Z();if(t)return t=te(n,t)||t,It(An.definitions,n,t)||It(F.styles,n,t)}var An=new $r,Fr=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ae("noAuto")},jr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return G?(ae("beforeI2svg",t),W("pseudoElements2svg",t),W("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ar(function(){Yr({autoReplaceSvgRoot:n}),ae("watch",t)})}},Dr={icon:function(t){if(t===null)return null;if(Le(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:te(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=je(t[0]);return{prefix:a,iconName:te(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(or))){var r=De(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Z(),iconName:te(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Z();return{prefix:i,iconName:te(i,t)||t}}}},L={noAuto:Fr,config:m,dom:jr,parse:Dr,library:An,findIconDefinition:nt,toHtml:we},Yr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?k:n;(Object.keys(F.styles).length>0||m.autoFetchSvg)&&G&&m.autoReplaceSvg&&L.dom.i2svg({node:a})};function Ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return we(a)})}}),Object.defineProperty(e,"node",{get:function(){if(G){var a=k.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Ur(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(pt(o)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=Fe(d(d({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Hr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:a}]}]}function gt(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,p=e.extra,b=e.watchable,g=b===void 0?!1:b,O=a.found?a:n,E=O.width,T=O.height,v=r==="fak",h=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(X){return p.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(p.classes).join(" "),y={children:[],attributes:d(d({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(E," ").concat(T)})},_=v&&!~p.classes.indexOf("fa-fw")?{width:"".concat(E/T*16*.0625,"em")}:{};g&&(y.attributes[ne]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||be())},children:[l]}),delete y.attributes.title);var A=d(d({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:d(d({},_),p.styles)}),j=a.found&&n.found?W("generateAbstractMask",A)||{children:[],attributes:{}}:W("generateAbstractIcon",A)||{children:[],attributes:{}},z=j.children,Ue=j.attributes;return A.children=z,A.attributes=Ue,s?Hr(A):Ur(A)}function $t(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ne]="");var f=d({},o.styles);pt(r)&&(f.transform=wr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var p=Fe(f);p.length>0&&(u.style=p);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Br(e){var t=e.content,n=e.title,a=e.extra,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Fe(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ve=F.styles;function at(e){var t=e[0],n=e[1],a=e.slice(4),r=lt(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ee.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(ee.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Wr={found:!1,width:512,height:512};function Vr(e,t){!un&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function rt(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=Z()),new Promise(function(a,r){if(W("missingIconAbstract"),n==="fa"){var i=_n(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ve[t]&&Ve[t][e]){var o=Ve[t][e];return a(at(o))}Vr(e,t),a(d(d({},Wr),{},{icon:m.showMissingIcons&&e?W("missingIconAbstract")||{}:{}}))})}var Mt=function(){},it=m.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:Mt,measure:Mt},ue='FA "6.5.1"',Gr=function(t){return it.mark("".concat(ue," ").concat(t," begins")),function(){return Sn(t)}},Sn=function(t){it.mark("".concat(ue," ").concat(t," ends")),it.measure("".concat(ue," ").concat(t),"".concat(ue," ").concat(t," begins"),"".concat(ue," ").concat(t," ends"))},yt={begin:Gr,end:Sn},Ne=function(){};function zt(e){var t=e.getAttribute?e.getAttribute(ne):null;return typeof t=="string"}function Xr(e){var t=e.getAttribute?e.getAttribute(ut):null,n=e.getAttribute?e.getAttribute(ct):null;return t&&n}function qr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Kr(){if(m.autoReplaceSvg===!0)return Re.replace;var e=Re[m.autoReplaceSvg];return e||Re.replace}function Qr(e){return k.createElementNS("http://www.w3.org/2000/svg",e)}function Zr(e){return k.createElement(e)}function Cn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Qr:Zr:n;if(typeof e=="string")return k.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Cn(o,{ceFn:a}))}),r}function Jr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Re={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Cn(r),n)}),n.getAttribute(ne)===null&&m.keepOriginalSource){var a=k.createComment(Jr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~mt(n).indexOf(m.replacementClass))return Re.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return we(s)}).join(`
`);n.setAttribute(ne,""),n.innerHTML=o}};function Ft(e){e()}function On(e,t){var n=typeof t=="function"?t:Ne;if(e.length===0)n();else{var a=Ft;m.mutateApproach===ar&&(a=Q.requestAnimationFrame||Ft),a(function(){var r=Kr(),i=yt.begin("mutate");e.map(r),i(),n()})}}var wt=!1;function En(){wt=!0}function ot(){wt=!1}var Me=null;function jt(e){if(Et&&m.observeMutations){var t=e.treeCallback,n=t===void 0?Ne:t,a=e.nodeCallback,r=a===void 0?Ne:a,i=e.pseudoElementsCallback,o=i===void 0?Ne:i,s=e.observeMutationsRoot,l=s===void 0?k:s;Me=new Et(function(u){if(!wt){var f=Z();fe(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!zt(p.addedNodes[0])&&(m.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&m.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&zt(p.target)&&~ur.indexOf(p.attributeName))if(p.attributeName==="class"&&Xr(p.target)){var b=De(mt(p.target)),g=b.prefix,O=b.iconName;p.target.setAttribute(ut,g||f),O&&p.target.setAttribute(ct,O)}else qr(p.target)&&r(p.target)})}}),G&&Me.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ei(){Me&&Me.disconnect()}function ti(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function ni(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=De(mt(e));return r.prefix||(r.prefix=Z()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Rr(r.prefix,e.innerText)||ht(r.prefix,Je(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ai(e){var t=fe(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||be()):(t["aria-hidden"]="true",t.focusable="false")),t}function ri(){return{iconName:null,title:null,titleId:null,prefix:null,transform:D,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Dt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ni(e),a=n.iconName,r=n.prefix,i=n.rest,o=ai(e),s=tt("parseNodeAttributes",{},e),l=t.styleParser?ti(e):[];return d({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:D,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ii=F.styles;function Pn(e){var t=m.autoReplaceSvg==="nest"?Dt(e,{styleParser:!1}):Dt(e);return~t.extra.classes.indexOf(cn)?W("generateLayersText",e,t):W("generateSvgReplacementMutation",e,t)}var J=new Set;dt.map(function(e){J.add("fa-".concat(e))});Object.keys(me[w]).map(J.add.bind(J));Object.keys(me[x]).map(J.add.bind(J));J=ge(J);function Yt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!G)return Promise.resolve();var n=k.documentElement.classList,a=function(p){return n.add("".concat(Pt,"-").concat(p))},r=function(p){return n.remove("".concat(Pt,"-").concat(p))},i=m.autoFetchSvg?J:dt.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ii));i.includes("fa")||i.push("fa");var o=[".".concat(cn,":not([").concat(ne,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(ne,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=fe(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=yt.begin("onTree"),u=s.reduce(function(f,p){try{var b=Pn(p);b&&f.push(b)}catch(g){un||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(b){On(b,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(b){l(),p(b)})})}function oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Pn(e).then(function(n){n&&On([n],t)})}function si(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:nt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:nt(r||{})),e(a,d(d({},n),{},{mask:r}))}}var li=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?D:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,p=n.title,b=p===void 0?null:p,g=n.titleId,O=g===void 0?null:g,E=n.classes,T=E===void 0?[]:E,v=n.attributes,h=v===void 0?{}:v,y=n.styles,_=y===void 0?{}:y;if(t){var A=t.prefix,j=t.iconName,z=t.icon;return Ye(d({type:"icon"},t),function(){return ae("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(b?h["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(O||be()):(h["aria-hidden"]="true",h.focusable="false")),gt({icons:{main:at(z),mask:l?at(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:j,transform:d(d({},D),r),symbol:o,title:b,maskId:f,titleId:O,extra:{attributes:h,styles:_,classes:T}})})}},fi={mixout:function(){return{icon:si(li)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Yt,n.nodeCallback=oi,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?k:a,i=n.callback,o=i===void 0?function(){}:i;return Yt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,f=a.mask,p=a.maskId,b=a.extra;return new Promise(function(g,O){Promise.all([rt(r,s),f.iconName?rt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(E){var T=lt(E,2),v=T[0],h=T[1];g([n,gt({icons:{main:v,mask:h},prefix:s,iconName:r,transform:l,symbol:u,maskId:p,title:i,titleId:o,extra:b,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Fe(s);l.length>0&&(r.style=l);var u;return pt(o)&&(u=W("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},ui={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ye({type:"layer"},function(){ae("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ge(i)).join(" ")},children:o}]})}}}},ci={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,f=a.styles,p=f===void 0?{}:f;return Ye({type:"counter",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),Br({content:n.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ge(s))}})})}}}},di={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?D:r,o=a.title,s=o===void 0?null:o,l=a.classes,u=l===void 0?[]:l,f=a.attributes,p=f===void 0?{}:f,b=a.styles,g=b===void 0?{}:b;return Ye({type:"text",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),$t({content:n,transform:d(d({},D),i),title:s,extra:{attributes:p,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ge(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(sn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,$t({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},mi=new RegExp('"',"ug"),Ut=[1105920,1112319];function pi(e){var t=e.replace(mi,""),n=Or(t,0),a=n>=Ut[0]&&n<=Ut[1],r=t.length===2?t[0]===t[1]:!1;return{value:Je(r?t[0]:t),isSecondary:a||r}}function Ht(e,t){var n="".concat(nr).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=fe(e.children),o=i.filter(function(z){return z.getAttribute(Ze)===t})[0],s=Q.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(sr),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),b=~["Sharp"].indexOf(l[2])?x:w,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pe[b][l[2].toLowerCase()]:lr[b][u],O=pi(p),E=O.value,T=O.isSecondary,v=l[0].startsWith("FontAwesome"),h=ht(g,E),y=h;if(v){var _=Lr(E);_.iconName&&_.prefix&&(h=_.iconName,g=_.prefix)}if(h&&!T&&(!o||o.getAttribute(ut)!==g||o.getAttribute(ct)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var A=ri(),j=A.extra;j.attributes[Ze]=t,rt(h,g).then(function(z){var Ue=gt(d(d({},A),{},{icons:{main:z,mask:bt()},prefix:g,iconName:y,extra:j,watchable:!0})),X=k.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(X,e.firstChild):e.appendChild(X),X.outerHTML=Ue.map(function(Rn){return we(Rn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function vi(e){return Promise.all([Ht(e,"::before"),Ht(e,"::after")])}function hi(e){return e.parentNode!==document.head&&!~rr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Bt(e){if(G)return new Promise(function(t,n){var a=fe(e.querySelectorAll("*")).filter(hi).map(vi),r=yt.begin("searchPseudoElements");En(),Promise.all(a).then(function(){r(),ot(),t()}).catch(function(){r(),ot(),n()})})}var bi={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Bt,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?k:a;m.searchPseudoElements&&Bt(r)}}},Wt=!1,gi={mixout:function(){return{dom:{unwatch:function(){En(),Wt=!0}}}},hooks:function(){return{bootstrap:function(){jt(tt("mutationObserverCallbacks",{}))},noAuto:function(){ei()},watch:function(n){var a=n.observeMutationsRoot;Wt?ot():jt(tt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Vt=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},yi={mixout:function(){return{parse:{transform:function(n){return Vt(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Vt(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(f)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:p,path:b};return{tag:"g",attributes:d({},g.outer),children:[{tag:"g",attributes:d({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:d(d({},a.icon.attributes),g.path)}]}]}}}},Ge={x:0,y:0,width:"100%",height:"100%"};function Gt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function wi(e){return e.tag==="g"?e.children:[e]}var ki={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?De(r.split(" ").map(function(o){return o.trim()})):bt();return i.prefix||(i.prefix=Z()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,f=i.icon,p=o.width,b=o.icon,g=yr({transform:l,containerWidth:p,iconWidth:u}),O={tag:"rect",attributes:d(d({},Ge),{},{fill:"white"})},E=f.children?{children:f.children.map(Gt)}:{},T={tag:"g",attributes:d({},g.inner),children:[Gt(d({tag:f.tag,attributes:d(d({},f.attributes),g.path)},E))]},v={tag:"g",attributes:d({},g.outer),children:[T]},h="mask-".concat(s||be()),y="clip-".concat(s||be()),_={tag:"mask",attributes:d(d({},Ge),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:wi(b)},_]};return a.push(A,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(h,")")},Ge)}),{children:a,attributes:r}}}},xi={provides:function(t){var n=!1;Q.matchMedia&&(n=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},_i={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Ai=[xr,fi,ui,ci,di,bi,gi,yi,ki,xi,_i];zr(Ai,{mixoutsTo:L});L.noAuto;L.config;L.library;L.dom;var st=L.parse;L.findIconDefinition;L.toHtml;var Si=L.icon;L.layer;L.text;L.counter;function Xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xt(Object(n),!0).forEach(function(a){I(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function ze(e){"@babel/helpers - typeof";return ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ze(e)}function I(e,t,n){return t=Pi(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ci(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Oi(e,t){if(e==null)return{};var n=Ci(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Ei(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Pi(e){var t=Ei(e,"string");return typeof t=="symbol"?t:String(t)}var Ti=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Tn={exports:{}};(function(e){(function(t){var n=function(v,h,y){if(!u(h)||p(h)||b(h)||g(h)||l(h))return h;var _,A=0,j=0;if(f(h))for(_=[],j=h.length;A<j;A++)_.push(n(v,h[A],y));else{_={};for(var z in h)Object.prototype.hasOwnProperty.call(h,z)&&(_[v(z,y)]=n(v,h[z],y))}return _},a=function(v,h){h=h||{};var y=h.separator||"_",_=h.split||/(?=[A-Z])/;return v.split(_).join(y)},r=function(v){return O(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(h,y){return y?y.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var h=r(v);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(v,h){return a(v,h).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},p=function(v){return s.call(v)=="[object Date]"},b=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},O=function(v){return v=v-0,v===v},E=function(v,h){var y=h&&"process"in h?h.process:h;return typeof y!="function"?v:function(_,A){return y(_,v,A)}},T={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,h){return n(E(r,h),v)},decamelizeKeys:function(v,h){return n(E(o,h),v,h)},pascalizeKeys:function(v,h){return n(E(i,h),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=T:t.humps=T})(Ti)})(Tn);var Ii=Tn.exports,Ni=["class","style"];function Ri(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Ii.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function Li(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function In(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return In(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.class=Li(f);break;case"style":l.style=Ri(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Oi(n,Ni);return $n(e.tag,Y(Y(Y({},t),{},{class:r.class,style:Y(Y({},r.style),o)},r.attrs),s),a)}var Nn=!1;try{Nn=!0}catch{}function $i(){if(!Nn&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?I({},e,t):{}}function Mi(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},I(t,"fa-".concat(e.size),e.size!==null),I(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),I(t,"fa-pull-".concat(e.pull),e.pull!==null),I(t,"fa-swap-opacity",e.swapOpacity),I(t,"fa-bounce",e.bounce),I(t,"fa-shake",e.shake),I(t,"fa-beat",e.beat),I(t,"fa-fade",e.fade),I(t,"fa-beat-fade",e.beatFade),I(t,"fa-flash",e.flash),I(t,"fa-spin-pulse",e.spinPulse),I(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function qt(e){if(e&&ze(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(st.icon)return st.icon(e);if(e===null)return null;if(ze(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var zi=V({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=re(function(){return qt(t.icon)}),i=re(function(){return Xe("classes",Mi(t))}),o=re(function(){return Xe("transform",typeof t.transform=="string"?st.transform(t.transform):t.transform)}),s=re(function(){return Xe("mask",qt(t.mask))}),l=re(function(){return Si(r.value,Y(Y(Y(Y({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Ln(l,function(f){if(!f)return $i("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=re(function(){return l.value?In(l.value.abstract[0],{},a):null});return function(){return u.value}}});const Fi={methods:{handleToggle(){this.$emit("handleToggle")}}},ji=Object.assign(Fi,{__name:"ToggleButton",props:{isOn:{type:Boolean,default:!1,required:!1},iconOnClass:{type:String,default:"fa-solid fa-circle-check",required:!1},iconOffClass:{type:String,default:"fa-regular fa-circle",required:!1}},setup(e){return(t,n)=>(N(),M("span",{type:"button",class:P({"btn rounded-pill me-2 btn-sm":!0,"btn-outline-primary":e.isOn,"btn-outline-secondary":!e.isOn}),onClick:n[0]||(n[0]=(...a)=>t.handleToggle&&t.handleToggle(...a))},[C(Mn(zi),{icon:`${e.isOn?e.iconOnClass:e.iconOffClass}`,class:"me-2"},null,8,["icon"]),zn(t.$slots,"default")],2))}}),Kt=ji;const Di={name:"LinedTextArea",mounted(){this.content=this.value,this.syncScroll(),this.calculateCharactersPerLine()},data(){return{content:"",widthPerChar:8,numPerLine:1,previousWidth:0,scrolledLength:0}},props:{readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},nowrap:{type:Boolean,default:!0},placeholder:{type:String,default:""},styles:{type:Object,default:()=>({})},value:{type:String,default:""},validate:{type:Function,default:()=>!0},rows:{type:String,default:"24",required:!1}},computed:{invalidLines(){const e=[];return this.content.split(`
`).forEach((t,n)=>{this.validate(t)||e.push(n+1)}),e},lines(){if(this.content==="")return[1];const e=[];let t=1;function n(a,r){if(r<=0)return console.warn("Please set the min-width of textarea to allow at least one character per line."),a.length+1;const i=a.split(" ");let o=1,s=r;return i.forEach(l=>{for(;s===r&&l.length>=s;)o++,l=l.slice(r);if(s===r){s-=l.length;return}l.length+1>s&&(o++,s=r),s-=s===r?l.length:l.length+1}),s===r?o-1:o}return this.content.split(`
`).forEach(a=>{const r=n(a,this.numPerLine)-1;e.push(t);for(let i=0;i<r;i++)e.push("&nbsp;");t++}),e},longestWidth(){for(let e=this.lines.length-1;e>=0;e--)if(this.lines[e]!=="&nbsp;")return(this.lines[e]+"").length*this.widthPerChar+10}},watch:{longestWidth(e,t){e!==t&&this.$nextTick(()=>this.calculateCharactersPerLine())},nowrap(){this.calculateCharactersPerLine()},value(e){e!==this.content&&(this.content=e)}},methods:{calculateCharactersPerLine(){if(this.nowrap){this.numPerLine=Number.MAX_SAFE_INTEGER;return}const e=this.$refs.textarea,t=getComputedStyle(e),n=parseFloat(t.getPropertyValue("padding-left")),a=parseFloat(t.getPropertyValue("padding-right")),r=t.getPropertyValue("font-size"),i=t.getPropertyValue("font-family"),o=e.clientWidth-n-a,s=this.$refs.helper;s.style.fontSize=r,s.style.fontFamily=i,s.innerHTML="";for(let l=1;l<999;l++)if(s.innerHTML+="a",s.getBoundingClientRect().width>o){this.numPerLine=l-1;break}},detectResize(){const e=this.$refs.textarea,{clientWidth:t,clientHeight:n}=e,a=()=>{const{clientWidth:i,clientHeight:o}=e;(t!==i||n!==o)&&this.calculateCharactersPerLine()},r=()=>{this.calculateCharactersPerLine(),document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",r)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",r)},onInput(){this.$emit("input",this.content),this.recalculate()},recalculate(){const t=this.$refs.textarea.clientWidth;t!==this.previousWidth&&this.calculateCharactersPerLine(),this.previousWidth=t},scrollLines(e){this.scrolledLength=e.target.scrollTop,this.syncScroll()},syncScroll(){this.$refs.lines.style.transform=`translateY(${-this.scrolledLength}px)`}}},Yi={class:"lined-textarea"},Ui={class:"lined-textarea__lines__inner",ref:"lines"},Hi=["innerHTML"],Bi=["disabled","readonly","placeholder","rows"],Wi={class:"count-helper",ref:"helper"};function Vi(e,t,n,a,r,i){return N(),M("div",Yi,[c("div",{class:"lined-textarea__lines",style:kt({"padding-right":i.longestWidth+"px"})},[c("div",Ui,[(N(!0),M(Zt,null,Jt(i.lines,(o,s)=>(N(),M("p",{key:s,class:P(["lined-textarea__lines__line",{"lined-textarea__lines__line--invalid":i.invalidLines.includes(o)}]),innerHTML:o},null,10,Hi))),128))],512)],4),R(c("textarea",{disabled:n.disabled,readonly:n.readonly,placeholder:n.placeholder,class:P(["lined-textarea__content",{"form-control":!1,"lined-textarea__content--disabled":n.disabled,"lined-textarea__content--wrap":!n.nowrap,"lined-textarea__content--nowrap":n.nowrap}]),"onUpdate:modelValue":t[0]||(t[0]=o=>r.content=o),onScroll:t[1]||(t[1]=(...o)=>i.scrollLines&&i.scrollLines(...o)),onInput:t[2]||(t[2]=(...o)=>i.onInput&&i.onInput(...o)),onMousedown:t[3]||(t[3]=(...o)=>i.detectResize&&i.detectResize(...o)),rows:n.rows,style:kt(n.styles),ref:"textarea"},null,46,Bi),[[K,r.content]]),c("div",Wi,null,512)])}const Gi=Fn(Di,[["render",Vi],["__scopeId","data-v-a13727e6"]]),Xi={class:"row"},qi={class:"col-12"},Ki={methods:{handleExecute(e){this.$emit("handleExecuteCaseConversion",e)}}},Qi=V({...Ki,__name:"ParagraphCaseConversionButtons",props:{convertTypes:{type:Array,required:!0}},setup(e){return(t,n)=>(N(),en(qe,{has_shadow:!1},{default:$(()=>[c("div",Xi,[c("div",qi,[(N(!0),M(Zt,null,Jt(e.convertTypes,(a,r)=>(N(),M("span",{key:r,class:"me-2"},[C(Ie,{onClick:i=>t.handleExecute(a.type)},{default:$(()=>[U(jn(a.label),1)]),_:2},1032,["onClick"])]))),128))])])]),_:1}))}}),Zi={class:"row mb-3"},Ji={class:"col-md-12"},eo={class:"row mb-3"},to=["nowrap","placeholder"],no={key:0,class:"col"},ao=["nowrap","placeholder"],ro={class:"row mb-3"},io={class:"col-md-12"},oo=c("i",{class:"fa-solid fa-xmark"},null,-1),so=c("i",{class:"fa-solid fa-copy"},null,-1),lo=c("i",{class:"fa-solid fa-paste"},null,-1),fo={class:"row mb-3"},uo={class:"col-md-12"},co={class:"row mb-3"},mo={class:"col-md-12"},po={class:"row mb-3"},vo={class:"col-md-12"},ho={class:"row mb-3"},bo={class:"col-md-6"},go={class:"col"},yo={class:"row mb-3"},wo={class:"col-md-12"},ko={class:"row mb-3"},xo={class:"col-12"},_o={mixins:[Bn,Wn,Vn,Hn,Ba,Va],data(){return{input:{paragraph:{value:"",placeholder:"Input text",setting:{nowrap:!0}},caseConvert:{isOn:!1,paragraph:{value:"",placeholder:"Output for Case conversion"}}},output:{convertTypes:[{type:"camelCase",label:"camelCase",value:"",placeholder:"myLoverId"},{type:"capitalize",label:"Capitalize",value:"",placeholder:"My lover id"},{type:"kebabCase",label:"kebab-case",value:"",placeholder:"my-lover-id"},{type:"lowerCase",label:"lower case",value:"",placeholder:"my lover id"},{type:"lowerFirst",label:"lower First",value:"",placeholder:"my lover id"},{type:"snakeCase",label:"snake_case",value:"",placeholder:"my_lover_id"},{type:"toLower",label:"to lower",value:"",placeholder:"my lover id"},{type:"toUpper",label:"TO UPPER",value:"",placeholder:"MY LOVER ID"},{type:"upperCase",label:"UPPER CASE",value:"",placeholder:"MY LOVER ID"},{type:"upperFirst",label:"Upper first",value:"",placeholder:"My lover id"}]}}},methods:{async handleUniqueLines(){await this.commonAction(async e=>await Dn.uniq(e))},async handleRemoveBlankLines(){await this.commonAction(async e=>await e.filter(t=>!!t))},async pasteToInputParagraph(){await this.paste(e=>this.input.paragraph.value=e)},async handleExecuteCaseConversion(e){this.input.caseConvert.paragraph.value=await this.commonAction(async t=>await t.map(n=>Yn[e](n)),!1)}}},Lo=V({..._o,__name:"Paragraph",setup(e){return(t,n)=>(N(),M("div",null,[C(qe,{header_label:"Paragraph"},{footer:$(()=>[t.input.caseConvert.isOn?(N(),en(Qi,{key:0,onHandleExecuteCaseConversion:t.handleExecuteCaseConversion,convertTypes:t.output.convertTypes},null,8,["onHandleExecuteCaseConversion","convertTypes"])):ke("",!0),c("div",fo,[c("div",uo,[C(Un,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),c("div",co,[c("div",mo,[C(sa,{onHandleAdd:t.handleAdd,onHandleAddStart:t.handleAddStart,onHandleAddEnd:t.handleAddEnd},null,8,["onHandleAdd","onHandleAddStart","onHandleAddEnd"])])]),c("div",po,[c("div",vo,[C(ga,{onHandleReplaceAll:t.handleReplaceAll},null,8,["onHandleReplaceAll"])])]),c("div",ho,[c("div",bo,[C(Ta,{onHandleReplaceRegEx:t.handleReplaceRegEx},null,8,["onHandleReplaceRegEx"])]),c("div",go,[C(Ua,{onHandleReplaceAll:t.handleReplaceAll},null,8,["onHandleReplaceAll"])])]),c("div",yo,[c("div",wo,[C(xt,{onClick:t.handleUniqueLines},{default:$(()=>[U(" Unique Lines ")]),_:1},8,["onClick"]),C(xt,{onClick:t.handleRemoveBlankLines},{default:$(()=>[U(" Remove blank lines ")]),_:1},8,["onClick"])])]),c("div",ko,[c("div",xo,[C(Gn,{onClick:t.handleReset},null,8,["onClick"])])])]),default:$(()=>[c("div",Zi,[c("div",Ji,[C(Kt,{isOn:t.input.paragraph.setting.nowrap,onHandleToggle:n[0]||(n[0]=a=>t.input.paragraph.setting.nowrap=!t.input.paragraph.setting.nowrap)},{default:$(()=>[U("Nowrap")]),_:1},8,["isOn"])])]),c("div",eo,[c("div",{class:P(`col-md-${t.input.caseConvert.isOn?"6":"12"}`)},[R(c("textarea",{class:"form-control",rows:"20",nowrap:t.input.paragraph.setting.nowrap,"onUpdate:modelValue":n[1]||(n[1]=a=>t.input.paragraph.value=a),placeholder:t.input.paragraph.placeholder},null,8,to),[[K,t.input.paragraph.value]])],2),t.input.caseConvert.isOn?(N(),M("div",no,[R(c("textarea",{class:"form-control",rows:"20",nowrap:t.input.paragraph.setting.nowrap,"onUpdate:modelValue":n[2]||(n[2]=a=>t.input.caseConvert.paragraph.value=a),placeholder:t.input.caseConvert.paragraph.placeholder,readonly:""},null,8,ao),[[K,t.input.caseConvert.paragraph.value]])])):ke("",!0)]),c("div",ro,[c("div",io,[C(Ie,{class:"me-2",disabled:!t.input.paragraph.value,onClick:n[3]||(n[3]=a=>t.input.paragraph.value="")},{default:$(()=>[oo]),_:1},8,["disabled"]),C(Ie,{class:"me-2",disabled:!t.input.paragraph.value,onClick:n[4]||(n[4]=a=>t.copy(t.input.paragraph.value))},{default:$(()=>[so]),_:1},8,["disabled"]),C(Ie,{class:"me-2",onClick:n[5]||(n[5]=a=>t.pasteToObject(t.input.paragraph,"value"))},{default:$(()=>[lo]),_:1}),C(Kt,{isOn:t.input.caseConvert.isOn,onHandleToggle:n[6]||(n[6]=a=>t.input.caseConvert.isOn=!t.input.caseConvert.isOn)},{default:$(()=>[U("Case conversion")]),_:1},8,["isOn"])])])]),_:1}),C(qe,null,{default:$(()=>[C(Gi,{value:t.input.paragraph.value,nowrap:t.input.paragraph.setting.nowrap,placeholder:t.input.paragraph.placeholder},null,8,["value","nowrap","placeholder"])]),_:1}),ke("",!0),ke("",!0)]))}});export{Lo as default};
