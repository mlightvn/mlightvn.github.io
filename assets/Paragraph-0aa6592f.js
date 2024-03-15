import{e as W,o as M,c as Y,a as d,m as R,s as Be,v as te,n as T,g as q,x as Xt,y as re,z as In,A as Tn,b as E,u as Nn,j as Rn,i as qt,w as z,h as $n,F as Ln,t as Mn,f as we}from"./index-1778b19f.js";import{l as Fn,a as zn}from"./lodash-b028437e.js";import{_ as Kt,a as jn,b as Dn}from"./InputTrim.vue_vue_type_script_setup_true_lang-adf87693.js";import{_ as Yn}from"./CopyMixin.vue_vue_type_script_setup_true_lang-10cc832a.js";import{_ as Un}from"./PasteMixin.vue_vue_type_script_lang-1252b51c.js";import{_ as Bn}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-827d66c2.js";import{_ as Qt}from"./Card.vue_vue_type_script_setup_true_lang-0129fee9.js";import{P as kt}from"./PrimaryButton-41c21438.js";import{P as Te}from"./PrimaryOutlineButton-d40c3595.js";import{R as Hn}from"./ResetButton-100d8191.js";const Wn={class:""},Vn={class:"input-group"},Gn={class:"input-group-text"},Xn=["disabled"],qn=["disabled"],Kn=d("i",{class:"fa-solid fa-xmark"},null,-1),Qn=[Kn],Zn={class:"input-group-text"},Jn={class:"input-group-text"},ea=["disabled"],ta=["disabled"],na=["disabled"],aa={computed:{input_value:{get(){let e="abc";switch(this.input.selected_type){case"0":e=this.input.value;break;case"1":e=this.input.tab;break;case"2":e=this.input.new_line;break}return e}}},data(){return{input:{selected_type:"0",value:"",tab:"	",new_line:`
`}}},methods:{handleAdd(){this.$emit("handleAdd",this.input_value)},handleAddStart(){this.$emit("handleAddStart",this.input_value)},handleAddEnd(){this.$emit("handleAddEnd",this.input_value)}}},ra=W({...aa,__name:"InputAdd",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(M(),Y("div",Wn,[d("div",Vn,[d("label",Gn,[R(d("input",{type:"radio",name:"add_value",class:"form-check-input","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.selected_type=a),value:"0"},null,512),[[Be,t.input.selected_type]])]),R(d("input",{type:"text",class:"form-control",placeholder:"Add text","onUpdate:modelValue":n[1]||(n[1]=a=>t.input.value=a),disabled:t.input.selected_type!="0",onFocus:n[2]||(n[2]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()})},null,40,Xn),[[te,t.input.value]]),d("button",{type:"button",class:T(e.button_class),onClick:n[3]||(n[3]=a=>t.input.value=""),disabled:!t.input.value},Qn,10,qn),d("label",Zn,[R(d("input",{type:"radio",name:"add_value",class:"form-check-input","onUpdate:modelValue":n[4]||(n[4]=a=>t.input.selected_type=a),value:"1"},null,512),[[Be,t.input.selected_type]]),q(" Tab ")]),d("label",Jn,[R(d("input",{type:"radio",name:"add_value",class:"form-check-input","onUpdate:modelValue":n[5]||(n[5]=a=>t.input.selected_type=a),value:"2"},null,512),[[Be,t.input.selected_type]]),q(" New Line ")]),d("button",{type:"button",class:T(e.button_class),disabled:!t.input_value,onClick:n[6]||(n[6]=(...a)=>t.handleAdd&&t.handleAdd(...a))}," Add ",10,ea),d("button",{type:"button",class:T(e.button_class),disabled:!t.input_value,onClick:n[7]||(n[7]=(...a)=>t.handleAddStart&&t.handleAddStart(...a))}," Add Start ",10,ta),d("button",{type:"button",class:T(e.button_class),disabled:!t.input_value,onClick:n[8]||(n[8]=(...a)=>t.handleAddEnd&&t.handleAddEnd(...a))}," Add End ",10,na)])]))}}),ia={class:""},oa={class:"input-group"},sa=["disabled"],la=d("i",{class:"fa-solid fa-xmark"},null,-1),fa=[la],ua=["disabled"],ca=d("i",{class:"fa-solid fa-xmark"},null,-1),da=[ca],ma=["disabled"],pa={data(){return{input:{search:{value:""},replace:{value:""}}}},methods:{handleReplaceAll(){this.$emit("handleReplaceAll",this.input.search.value,this.input.replace.value)}}},va=W({...pa,__name:"InputReplace",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(M(),Y("div",ia,[d("div",oa,[R(d("input",{type:"text",class:"form-control",placeholder:"Searched text","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.search.value=a),onFocus:n[1]||(n[1]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()})},null,544),[[te,t.input.search.value]]),d("button",{type:"button",class:T(e.button_class),onClick:n[2]||(n[2]=a=>t.input.search.value=""),disabled:!t.input.search.value},fa,10,sa),R(d("input",{type:"text",class:"form-control",placeholder:"Replacing text","onUpdate:modelValue":n[3]||(n[3]=a=>t.input.replace.value=a),onFocus:n[4]||(n[4]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()})},null,544),[[te,t.input.replace.value]]),d("button",{type:"button",class:T(e.button_class),onClick:n[5]||(n[5]=a=>t.input.replace.value=""),disabled:!t.input.replace.value},da,10,ua),d("button",{type:"button",class:T(e.button_class),disabled:!t.input.search.value&&!t.input.replace.value,onClick:n[6]||(n[6]=(...a)=>t.handleReplaceAll&&t.handleReplaceAll(...a))}," Replace All ",10,ma)])]))}}),ba={class:""},ha={class:"input-group"},ga=d("span",{class:"input-group-text"},"Replace New line by",-1),ya=["disabled"],ka=["disabled"],wa=d("i",{class:"fa-solid fa-xmark"},null,-1),xa=[wa],Aa={class:"input-group-text"},_a={class:"form-check form-switch"},Sa=["disabled"],Oa={data(){return{input:{search:{value:/[\n|\r]/g},replace:{value:"",tab:{isSelected:!1,value:"	"}}}}},methods:{handleReplaceRegEx(){let e=this.input.replace.tab.isSelected?this.input.replace.tab.value:this.input.replace.value;this.$emit("handleReplaceRegEx",this.input.search.value,e)}}},Ca=W({...Oa,__name:"InputReplaceNewLine",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(M(),Y("div",ba,[d("div",ha,[ga,R(d("input",{type:"text",class:"form-control",placeholder:"Replacing text","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.replace.value=a),onFocus:n[1]||(n[1]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()}),disabled:t.input.replace.tab.isSelected},null,40,ya),[[te,t.input.replace.value]]),d("button",{type:"button",class:T(e.button_class),onClick:n[2]||(n[2]=a=>t.input.replace.value=""),disabled:!t.input.replace.value},xa,10,ka),d("label",Aa,[d("span",_a,[R(d("input",{type:"checkbox",role:"switch",class:"form-check-input","onUpdate:modelValue":n[3]||(n[3]=a=>t.input.replace.tab.isSelected=a)},null,512),[[Xt,t.input.replace.tab.isSelected]])]),q(" Tab ")]),d("button",{type:"button",class:T(e.button_class),disabled:!t.input.search.value&&!t.input.replace.value,onClick:n[4]||(n[4]=(...a)=>t.handleReplaceRegEx&&t.handleReplaceRegEx(...a))}," Replace All ",10,Sa)])]))}}),Ea={class:""},Pa={class:"input-group"},Ia=["disabled"],Ta=["disabled"],Na=d("i",{class:"fa-solid fa-xmark"},null,-1),Ra=[Na],$a={class:"input-group-text"},La={class:"form-check form-switch"},Ma=d("span",{class:"input-group-text"},"by New line",-1),Fa=["disabled"],za={data(){return{input:{search:{value:"",tab:{isSelected:!1,value:"	"}},replace:{value:`
`}}}},methods:{handleReplaceAll(){let e=this.input.search.tab.isSelected?this.input.search.tab.value:this.input.search.value;this.$emit("handleReplaceAll",e,this.input.replace.value)}}},ja=W({...za,__name:"InputReplaceByNewLine",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(e){return(t,n)=>(M(),Y("div",Ea,[d("div",Pa,[R(d("input",{type:"text",class:"form-control",placeholder:"Replacing text","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.search.value=a),onFocus:n[1]||(n[1]=a=>{var r;return(r=a==null?void 0:a.target)==null?void 0:r.select()}),disabled:t.input.search.tab.isSelected},null,40,Ia),[[te,t.input.search.value]]),d("button",{type:"button",class:T(e.button_class),onClick:n[2]||(n[2]=a=>t.input.search.value=""),disabled:!t.input.replace.value},Ra,10,Ta),d("label",$a,[d("span",La,[R(d("input",{type:"checkbox",role:"switch",class:"form-check-input","onUpdate:modelValue":n[3]||(n[3]=a=>t.input.search.tab.isSelected=a)},null,512),[[Xt,t.input.search.tab.isSelected]])]),q(" Tab ")]),Ma,d("button",{type:"button",class:T(e.button_class),disabled:!t.input.search.value&&!t.input.replace.value,onClick:n[4]||(n[4]=(...a)=>t.handleReplaceAll&&t.handleReplaceAll(...a))}," Replace All ",10,Fa)])]))}}),Da={mixins:[Kt],methods:{async handleAdd(e,t="	"){e||(e=t),await this.commonLinesMapAction(n=>e+n+e)},async handleAddStart(e,t="	"){e||(e=t),await this.commonLinesMapAction(n=>e+n)},async handleAddEnd(e,t="	"){e||(e=t),await this.commonLinesMapAction(n=>n+e)}}},Ya=W({...Da,__name:"AddMixin",setup(e){return()=>{}}}),Ua={mixins:[Kt],methods:{async handleReplaceAll(e,t){this.paragraph_value=await this.paragraph_value.replaceAll(e,t)},async handleReplaceRegEx(e,t){this.paragraph_value=await this.paragraph_value.replace(e,t)}}},Ba=W({...Ua,__name:"ReplaceMixin",setup(e){return()=>{}}});function wt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(n),!0).forEach(function(a){S(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function $e(e){"@babel/helpers - typeof";return $e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$e(e)}function Ha(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xt(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Wa(e,t,n){return t&&xt(e.prototype,t),n&&xt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function st(e,t){return Ga(e)||qa(e,t)||Zt(e,t)||Qa()}function ge(e){return Va(e)||Xa(e)||Zt(e)||Ka()}function Va(e){if(Array.isArray(e))return qe(e)}function Ga(e){if(Array.isArray(e))return e}function Xa(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function qa(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Zt(e,t){if(e){if(typeof e=="string")return qe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qe(e,t)}}function qe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Ka(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var At=function(){},lt={},Jt={},en=null,tn={mark:At,measure:At};try{typeof window<"u"&&(lt=window),typeof document<"u"&&(Jt=document),typeof MutationObserver<"u"&&(en=MutationObserver),typeof performance<"u"&&(tn=performance)}catch{}var Za=lt.navigator||{},_t=Za.userAgent,St=_t===void 0?"":_t,K=lt,w=Jt,Ot=en,xe=tn;K.document;var V=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",nn=~St.indexOf("MSIE")||~St.indexOf("Trident/"),Ae,_e,Se,Oe,Ce,U="___FONT_AWESOME___",Ke=16,an="fa",rn="svg-inline--fa",ne="data-fa-i2svg",Qe="data-fa-pseudo-element",Ja="data-fa-pseudo-element-pending",ft="data-prefix",ut="data-icon",Ct="fontawesome-i2svg",er="async",tr=["HTML","HEAD","STYLE","SCRIPT"],on=function(){try{return!0}catch{return!1}}(),k="classic",x="sharp",ct=[k,x];function ye(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[k]}})}var me=ye((Ae={},S(Ae,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),S(Ae,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ae)),pe=ye((_e={},S(_e,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),S(_e,x,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),_e)),ve=ye((Se={},S(Se,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),S(Se,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Se)),nr=ye((Oe={},S(Oe,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),S(Oe,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Oe)),ar=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sn="fa-layers-text",rr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ir=ye((Ce={},S(Ce,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),S(Ce,x,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ce)),ln=[1,2,3,4,5,6,7,8,9,10],or=ln.concat([11,12,13,14,15,16,17,18,19,20]),sr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},be=new Set;Object.keys(pe[k]).map(be.add.bind(be));Object.keys(pe[x]).map(be.add.bind(be));var lr=[].concat(ct,ge(be),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(ln.map(function(e){return"".concat(e,"x")})).concat(or.map(function(e){return"w-".concat(e)})),ce=K.FontAwesomeConfig||{};function fr(e){var t=w.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function ur(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var cr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cr.forEach(function(e){var t=st(e,2),n=t[0],a=t[1],r=ur(fr(n));r!=null&&(ce[a]=r)})}var fn={styleDefault:"solid",familyDefault:"classic",cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ce.familyPrefix&&(ce.cssPrefix=ce.familyPrefix);var le=c(c({},fn),ce);le.autoReplaceSvg||(le.observeMutations=!1);var m={};Object.keys(fn).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(n){le[e]=n,de.forEach(function(a){return a(m)})},get:function(){return le[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){le.cssPrefix=t,de.forEach(function(n){return n(m)})},get:function(){return le.cssPrefix}});K.FontAwesomeConfig=m;var de=[];function dr(e){return de.push(e),function(){de.splice(de.indexOf(e),1)}}var X=Ke,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mr(e){if(!(!e||!V)){var t=w.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=w.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return w.head.insertBefore(t,a),e}}var pr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function he(){for(var e=12,t="";e-- >0;)t+=pr[Math.random()*62|0];return t}function fe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function dt(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function un(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function vr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(un(e[n]),'" ')},"").trim()}function ze(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function mt(e){return e.size!==j.size||e.x!==j.x||e.y!==j.y||e.rotate!==j.rotate||e.flipX||e.flipY}function br(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function hr(e){var t=e.transform,n=e.width,a=n===void 0?Ke:n,r=e.height,i=r===void 0?Ke:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&nn?l+="translate(".concat(t.x/X-a/2,"em, ").concat(t.y/X-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/X,"em), calc(-50% + ").concat(t.y/X,"em)) "):l+="translate(".concat(t.x/X,"em, ").concat(t.y/X,"em) "),l+="scale(".concat(t.size/X*(t.flipX?-1:1),", ").concat(t.size/X*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var gr=`:root, :host {
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
}`;function cn(){var e=an,t=rn,n=m.cssPrefix,a=m.replacementClass,r=gr;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Et=!1;function He(){m.autoAddCss&&!Et&&(mr(cn()),Et=!0)}var yr={mixout:function(){return{dom:{css:cn,insertCss:He}}},hooks:function(){return{beforeDOMElementCreation:function(){He()},beforeI2svg:function(){He()}}}},B=K||{};B[U]||(B[U]={});B[U].styles||(B[U].styles={});B[U].hooks||(B[U].hooks={});B[U].shims||(B[U].shims=[]);var L=B[U],dn=[],kr=function e(){w.removeEventListener("DOMContentLoaded",e),Le=1,dn.map(function(t){return t()})},Le=!1;V&&(Le=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Le||w.addEventListener("DOMContentLoaded",kr));function wr(e){V&&(Le?setTimeout(e,0):dn.push(e))}function ke(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?un(e):"<".concat(t," ").concat(vr(a),">").concat(i.map(ke).join(""),"</").concat(t,">")}function Pt(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var xr=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},We=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?xr(n,r):n,l,u,f;for(a===void 0?(l=1,f=t[i[0]]):(l=0,f=a);l<o;l++)u=i[l],f=s(f,t[u],u,t);return f};function Ar(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Ze(e){var t=Ar(e);return t.length===1?t[0].toString(16):null}function _r(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function It(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Je(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=It(t);typeof L.hooks.addPack=="function"&&!r?L.hooks.addPack(e,It(t)):L.styles[e]=c(c({},L.styles[e]||{}),i),e==="fas"&&Je("fa",t)}var Ee,Pe,Ie,ie=L.styles,Sr=L.shims,Or=(Ee={},S(Ee,k,Object.values(ve[k])),S(Ee,x,Object.values(ve[x])),Ee),pt=null,mn={},pn={},vn={},bn={},hn={},Cr=(Pe={},S(Pe,k,Object.keys(me[k])),S(Pe,x,Object.keys(me[x])),Pe);function Er(e){return~lr.indexOf(e)}function Pr(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Er(r)?r:null}var gn=function(){var t=function(i){return We(ie,function(o,s,l){return o[l]=We(s,i,{}),o},{})};mn=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),pn=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),hn=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in ie||m.autoFetchSvg,a=We(Sr,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});vn=a.names,bn=a.unicodes,pt=je(m.styleDefault,{family:m.familyDefault})};dr(function(e){pt=je(e.styleDefault,{family:m.familyDefault})});gn();function vt(e,t){return(mn[e]||{})[t]}function Ir(e,t){return(pn[e]||{})[t]}function ee(e,t){return(hn[e]||{})[t]}function yn(e){return vn[e]||{prefix:null,iconName:null}}function Tr(e){var t=bn[e],n=vt("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Q(){return pt}var bt=function(){return{prefix:null,iconName:null,rest:[]}};function je(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?k:n,r=me[a][e],i=pe[a][e]||pe[a][r],o=e in L.styles?e:null;return i||o||null}var Tt=(Ie={},S(Ie,k,Object.keys(ve[k])),S(Ie,x,Object.keys(ve[x])),Ie);function De(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},S(t,k,"".concat(m.cssPrefix,"-").concat(k)),S(t,x,"".concat(m.cssPrefix,"-").concat(x)),t),o=null,s=k;(e.includes(i[k])||e.some(function(u){return Tt[k].includes(u)}))&&(s=k),(e.includes(i[x])||e.some(function(u){return Tt[x].includes(u)}))&&(s=x);var l=e.reduce(function(u,f){var p=Pr(m.cssPrefix,f);if(ie[f]?(f=Or[s].includes(f)?nr[s][f]:f,o=f,u.prefix=f):Cr[s].indexOf(f)>-1?(o=f,u.prefix=je(f,{family:s})):p?u.iconName=p:f!==m.replacementClass&&f!==i[k]&&f!==i[x]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var h=o==="fa"?yn(u.iconName):{},g=ee(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!ie.far&&ie.fas&&!m.autoFetchSvg&&(u.prefix="fas")}return u},bt());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(ie.fass||m.autoFetchSvg)&&(l.prefix="fass",l.iconName=ee(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Q()||"fas"),l}var Nr=function(){function e(){Ha(this,e),this.definitions={}}return Wa(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=c(c({},n.definitions[s]||{}),o[s]),Je(s,o[s]);var l=ve[k][s];l&&Je(l,o[s]),gn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,f=u[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[s][p]=u)}),n[s][l]=u}),n}}]),e}(),Nt=[],oe={},se={},Rr=Object.keys(se);function $r(e,t){var n=t.mixoutsTo;return Nt=e,oe={},Object.keys(se).forEach(function(a){Rr.indexOf(a)===-1&&delete se[a]}),Nt.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),$e(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){oe[o]||(oe[o]=[]),oe[o].push(i[o])})}a.provides&&a.provides(se)}),n}function et(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=oe[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function ae(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=oe[e]||[];r.forEach(function(i){i.apply(null,n)})}function H(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return se[e]?se[e].apply(null,t):void 0}function tt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Q();if(t)return t=ee(n,t)||t,Pt(kn.definitions,n,t)||Pt(L.styles,n,t)}var kn=new Nr,Lr=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,ae("noAuto")},Mr={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return V?(ae("beforeI2svg",t),H("pseudoElements2svg",t),H("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,wr(function(){zr({autoReplaceSvgRoot:n}),ae("watch",t)})}},Fr={icon:function(t){if(t===null)return null;if($e(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ee(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=je(t[0]);return{prefix:a,iconName:ee(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(ar))){var r=De(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Q(),iconName:ee(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Q();return{prefix:i,iconName:ee(i,t)||t}}}},N={noAuto:Lr,config:m,dom:Mr,parse:Fr,library:kn,findIconDefinition:tt,toHtml:ke},zr=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?w:n;(Object.keys(L.styles).length>0||m.autoFetchSvg)&&V&&m.autoReplaceSvg&&N.dom.i2svg({node:a})};function Ye(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return ke(a)})}}),Object.defineProperty(e,"node",{get:function(){if(V){var a=w.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function jr(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(mt(o)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=ze(c(c({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Dr(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:o}),children:a}]}]}function ht(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,f=e.titleId,p=e.extra,h=e.watchable,g=h===void 0?!1:h,O=a.found?a:n,C=O.width,P=O.height,v=r==="fak",b=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(G){return p.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(p.classes).join(" "),y={children:[],attributes:c(c({},p.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(P)})},A=v&&!~p.classes.indexOf("fa-fw")?{width:"".concat(C/P*16*.0625,"em")}:{};g&&(y.attributes[ne]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||he())},children:[l]}),delete y.attributes.title);var _=c(c({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:c(c({},A),p.styles)}),F=a.found&&n.found?H("generateAbstractMask",_)||{children:[],attributes:{}}:H("generateAbstractIcon",_)||{children:[],attributes:{}},$=F.children,Ue=F.attributes;return _.children=$,_.attributes=Ue,s?Dr(_):jr(_)}function Rt(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ne]="");var f=c({},o.styles);mt(r)&&(f.transform=hr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var p=ze(f);p.length>0&&(u.style=p);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),i&&h.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),h}function Yr(e){var t=e.content,n=e.title,a=e.extra,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ze(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ve=L.styles;function nt(e){var t=e[0],n=e[1],a=e.slice(4),r=st(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ur={found:!1,width:512,height:512};function Br(e,t){!on&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function at(e,t){var n=t;return t==="fa"&&m.styleDefault!==null&&(t=Q()),new Promise(function(a,r){if(H("missingIconAbstract"),n==="fa"){var i=yn(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Ve[t]&&Ve[t][e]){var o=Ve[t][e];return a(nt(o))}Br(e,t),a(c(c({},Ur),{},{icon:m.showMissingIcons&&e?H("missingIconAbstract")||{}:{}}))})}var $t=function(){},rt=m.measurePerformance&&xe&&xe.mark&&xe.measure?xe:{mark:$t,measure:$t},ue='FA "6.5.1"',Hr=function(t){return rt.mark("".concat(ue," ").concat(t," begins")),function(){return wn(t)}},wn=function(t){rt.mark("".concat(ue," ").concat(t," ends")),rt.measure("".concat(ue," ").concat(t),"".concat(ue," ").concat(t," begins"),"".concat(ue," ").concat(t," ends"))},gt={begin:Hr,end:wn},Ne=function(){};function Lt(e){var t=e.getAttribute?e.getAttribute(ne):null;return typeof t=="string"}function Wr(e){var t=e.getAttribute?e.getAttribute(ft):null,n=e.getAttribute?e.getAttribute(ut):null;return t&&n}function Vr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Gr(){if(m.autoReplaceSvg===!0)return Re.replace;var e=Re[m.autoReplaceSvg];return e||Re.replace}function Xr(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function qr(e){return w.createElement(e)}function xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Xr:qr:n;if(typeof e=="string")return w.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(xn(o,{ceFn:a}))}),r}function Kr(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Re={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(xn(r),n)}),n.getAttribute(ne)===null&&m.keepOriginalSource){var a=w.createComment(Kr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~dt(n).indexOf(m.replacementClass))return Re.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return ke(s)}).join(`
`);n.setAttribute(ne,""),n.innerHTML=o}};function Mt(e){e()}function An(e,t){var n=typeof t=="function"?t:Ne;if(e.length===0)n();else{var a=Mt;m.mutateApproach===er&&(a=K.requestAnimationFrame||Mt),a(function(){var r=Gr(),i=gt.begin("mutate");e.map(r),i(),n()})}}var yt=!1;function _n(){yt=!0}function it(){yt=!1}var Me=null;function Ft(e){if(Ot&&m.observeMutations){var t=e.treeCallback,n=t===void 0?Ne:t,a=e.nodeCallback,r=a===void 0?Ne:a,i=e.pseudoElementsCallback,o=i===void 0?Ne:i,s=e.observeMutationsRoot,l=s===void 0?w:s;Me=new Ot(function(u){if(!yt){var f=Q();fe(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Lt(p.addedNodes[0])&&(m.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&m.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Lt(p.target)&&~sr.indexOf(p.attributeName))if(p.attributeName==="class"&&Wr(p.target)){var h=De(dt(p.target)),g=h.prefix,O=h.iconName;p.target.setAttribute(ft,g||f),O&&p.target.setAttribute(ut,O)}else Vr(p.target)&&r(p.target)})}}),V&&Me.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qr(){Me&&Me.disconnect()}function Zr(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Jr(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=De(dt(e));return r.prefix||(r.prefix=Q()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=Ir(r.prefix,e.innerText)||vt(r.prefix,Ze(e.innerText))),!r.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function ei(e){var t=fe(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return m.autoA11y&&(n?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(a||he()):(t["aria-hidden"]="true",t.focusable="false")),t}function ti(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function zt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Jr(e),a=n.iconName,r=n.prefix,i=n.rest,o=ei(e),s=et("parseNodeAttributes",{},e),l=t.styleParser?Zr(e):[];return c({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var ni=L.styles;function Sn(e){var t=m.autoReplaceSvg==="nest"?zt(e,{styleParser:!1}):zt(e);return~t.extra.classes.indexOf(sn)?H("generateLayersText",e,t):H("generateSvgReplacementMutation",e,t)}var Z=new Set;ct.map(function(e){Z.add("fa-".concat(e))});Object.keys(me[k]).map(Z.add.bind(Z));Object.keys(me[x]).map(Z.add.bind(Z));Z=ge(Z);function jt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!V)return Promise.resolve();var n=w.documentElement.classList,a=function(p){return n.add("".concat(Ct,"-").concat(p))},r=function(p){return n.remove("".concat(Ct,"-").concat(p))},i=m.autoFetchSvg?Z:ct.map(function(f){return"fa-".concat(f)}).concat(Object.keys(ni));i.includes("fa")||i.push("fa");var o=[".".concat(sn,":not([").concat(ne,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(ne,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=fe(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=gt.begin("onTree"),u=s.reduce(function(f,p){try{var h=Sn(p);h&&f.push(h)}catch(g){on||g.name==="MissingIcon"&&console.error(g)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(h){An(h,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),f()})}).catch(function(h){l(),p(h)})})}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sn(e).then(function(n){n&&An([n],t)})}function ri(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:tt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:tt(r||{})),e(a,c(c({},n),{},{mask:r}))}}var ii=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?j:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,f=u===void 0?null:u,p=n.title,h=p===void 0?null:p,g=n.titleId,O=g===void 0?null:g,C=n.classes,P=C===void 0?[]:C,v=n.attributes,b=v===void 0?{}:v,y=n.styles,A=y===void 0?{}:y;if(t){var _=t.prefix,F=t.iconName,$=t.icon;return Ye(c({type:"icon"},t),function(){return ae("beforeDOMElementCreation",{iconDefinition:t,params:n}),m.autoA11y&&(h?b["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(O||he()):(b["aria-hidden"]="true",b.focusable="false")),ht({icons:{main:nt($),mask:l?nt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:F,transform:c(c({},j),r),symbol:o,title:h,maskId:f,titleId:O,extra:{attributes:b,styles:A,classes:P}})})}},oi={mixout:function(){return{icon:ri(ii)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=jt,n.nodeCallback=ai,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?w:a,i=n.callback,o=i===void 0?function(){}:i;return jt(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,f=a.mask,p=a.maskId,h=a.extra;return new Promise(function(g,O){Promise.all([at(r,s),f.iconName?at(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var P=st(C,2),v=P[0],b=P[1];g([n,ht({icons:{main:v,mask:b},prefix:s,iconName:r,transform:l,symbol:u,maskId:p,title:i,titleId:o,extra:h,watchable:!0})])}).catch(O)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ze(s);l.length>0&&(r.style=l);var u;return mt(o)&&(u=H("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},si={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ye({type:"layer"},function(){ae("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ge(i)).join(" ")},children:o}]})}}}},li={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,f=a.styles,p=f===void 0?{}:f;return Ye({type:"counter",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),Yr({content:n.toString(),title:i,extra:{attributes:u,styles:p,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ge(s))}})})}}}},fi={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,l=a.classes,u=l===void 0?[]:l,f=a.attributes,p=f===void 0?{}:f,h=a.styles,g=h===void 0?{}:h;return Ye({type:"text",content:n},function(){return ae("beforeDOMElementCreation",{content:n,params:a}),Rt({content:n,transform:c(c({},j),i),title:s,extra:{attributes:p,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ge(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(nn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/u,l=f.height/u}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rt({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},ui=new RegExp('"',"ug"),Dt=[1105920,1112319];function ci(e){var t=e.replace(ui,""),n=_r(t,0),a=n>=Dt[0]&&n<=Dt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Ze(r?t[0]:t),isSecondary:a||r}}function Yt(e,t){var n="".concat(Ja).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=fe(e.children),o=i.filter(function($){return $.getAttribute(Qe)===t})[0],s=K.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(rr),u=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&f!=="none"&&f!==""){var p=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?x:k,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pe[h][l[2].toLowerCase()]:ir[h][u],O=ci(p),C=O.value,P=O.isSecondary,v=l[0].startsWith("FontAwesome"),b=vt(g,C),y=b;if(v){var A=Tr(C);A.iconName&&A.prefix&&(b=A.iconName,g=A.prefix)}if(b&&!P&&(!o||o.getAttribute(ft)!==g||o.getAttribute(ut)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var _=ti(),F=_.extra;F.attributes[Qe]=t,at(b,g).then(function($){var Ue=ht(c(c({},_),{},{icons:{main:$,mask:bt()},prefix:g,iconName:y,extra:F,watchable:!0})),G=w.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(G,e.firstChild):e.appendChild(G),G.outerHTML=Ue.map(function(Pn){return ke(Pn)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function di(e){return Promise.all([Yt(e,"::before"),Yt(e,"::after")])}function mi(e){return e.parentNode!==document.head&&!~tr.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Qe)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ut(e){if(V)return new Promise(function(t,n){var a=fe(e.querySelectorAll("*")).filter(mi).map(di),r=gt.begin("searchPseudoElements");_n(),Promise.all(a).then(function(){r(),it(),t()}).catch(function(){r(),it(),n()})})}var pi={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ut,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?w:a;m.searchPseudoElements&&Ut(r)}}},Bt=!1,vi={mixout:function(){return{dom:{unwatch:function(){_n(),Bt=!0}}}},hooks:function(){return{bootstrap:function(){Ft(et("mutationObserverCallbacks",{}))},noAuto:function(){Qr()},watch:function(n){var a=n.observeMutationsRoot;Bt?it():Ft(et("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ht=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},bi={mixout:function(){return{parse:{transform:function(n){return Ht(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ht(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),p={transform:"".concat(l," ").concat(u," ").concat(f)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:p,path:h};return{tag:"g",attributes:c({},g.outer),children:[{tag:"g",attributes:c({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:c(c({},a.icon.attributes),g.path)}]}]}}}},Ge={x:0,y:0,width:"100%",height:"100%"};function Wt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function hi(e){return e.tag==="g"?e.children:[e]}var gi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?De(r.split(" ").map(function(o){return o.trim()})):bt();return i.prefix||(i.prefix=Q()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,f=i.icon,p=o.width,h=o.icon,g=br({transform:l,containerWidth:p,iconWidth:u}),O={tag:"rect",attributes:c(c({},Ge),{},{fill:"white"})},C=f.children?{children:f.children.map(Wt)}:{},P={tag:"g",attributes:c({},g.inner),children:[Wt(c({tag:f.tag,attributes:c(c({},f.attributes),g.path)},C))]},v={tag:"g",attributes:c({},g.outer),children:[P]},b="mask-".concat(s||he()),y="clip-".concat(s||he()),A={tag:"mask",attributes:c(c({},Ge),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[O,v]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:hi(h)},A]};return a.push(_,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},Ge)}),{children:a,attributes:r}}}},yi={provides:function(t){var n=!1;K.matchMedia&&(n=K.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:c(c({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=c(c({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:c(c({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:c(c({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:c(c({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:c(c({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ki={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},wi=[yr,oi,si,li,fi,pi,vi,bi,gi,yi,ki];$r(wi,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var ot=N.parse;N.findIconDefinition;N.toHtml;var xi=N.icon;N.layer;N.text;N.counter;function Vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vt(Object(n),!0).forEach(function(a){I(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Fe(e){"@babel/helpers - typeof";return Fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fe(e)}function I(e,t,n){return t=Oi(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ai(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function _i(e,t){if(e==null)return{};var n=Ai(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Si(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,t||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Oi(e){var t=Si(e,"string");return typeof t=="symbol"?t:String(t)}var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},On={exports:{}};(function(e){(function(t){var n=function(v,b,y){if(!u(b)||p(b)||h(b)||g(b)||l(b))return b;var A,_=0,F=0;if(f(b))for(A=[],F=b.length;_<F;_++)A.push(n(v,b[_],y));else{A={};for(var $ in b)Object.prototype.hasOwnProperty.call(b,$)&&(A[v($,y)]=n(v,b[$],y))}return A},a=function(v,b){b=b||{};var y=b.separator||"_",A=b.split||/(?=[A-Z])/;return v.split(A).join(y)},r=function(v){return O(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(b,y){return y?y.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var b=r(v);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(v,b){return a(v,b).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},u=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},p=function(v){return s.call(v)=="[object Date]"},h=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},O=function(v){return v=v-0,v===v},C=function(v,b){var y=b&&"process"in b?b.process:b;return typeof y!="function"?v:function(A,_){return y(A,v,_)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,b){return n(C(r,b),v)},decamelizeKeys:function(v,b){return n(C(o,b),v,b)},pascalizeKeys:function(v,b){return n(C(i,b),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=P:t.humps=P})(Ci)})(On);var Ei=On.exports,Pi=["class","style"];function Ii(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=Ei.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function Ti(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Cn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return Cn(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var f=e.attributes[u];switch(u){case"class":l.class=Ti(f);break;case"style":l.style=Ii(f);break;default:l.attrs[u]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=_i(n,Pi);return Tn(e.tag,D(D(D({},t),{},{class:r.class,style:D(D({},r.style),o)},r.attrs),s),a)}var En=!1;try{En=!0}catch{}function Ni(){if(!En&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Xe(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?I({},e,t):{}}function Ri(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},I(t,"fa-".concat(e.size),e.size!==null),I(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),I(t,"fa-pull-".concat(e.pull),e.pull!==null),I(t,"fa-swap-opacity",e.swapOpacity),I(t,"fa-bounce",e.bounce),I(t,"fa-shake",e.shake),I(t,"fa-beat",e.beat),I(t,"fa-fade",e.fade),I(t,"fa-beat-fade",e.beatFade),I(t,"fa-flash",e.flash),I(t,"fa-spin-pulse",e.spinPulse),I(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Gt(e){if(e&&Fe(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ot.icon)return ot.icon(e);if(e===null)return null;if(Fe(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var $i=W({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=re(function(){return Gt(t.icon)}),i=re(function(){return Xe("classes",Ri(t))}),o=re(function(){return Xe("transform",typeof t.transform=="string"?ot.transform(t.transform):t.transform)}),s=re(function(){return Xe("mask",Gt(t.mask))}),l=re(function(){return xi(r.value,D(D(D(D({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});In(l,function(f){if(!f)return Ni("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=re(function(){return l.value?Cn(l.value.abstract[0],{},a):null});return function(){return u.value}}});const Li={methods:{handleToggle(){this.$emit("handleToggle")}}},Mi=Object.assign(Li,{__name:"ToggleButton",props:{isOn:{type:Boolean,default:!1,required:!1},iconOnClass:{type:String,default:"fa-solid fa-circle-check",required:!1},iconOffClass:{type:String,default:"fa-regular fa-circle",required:!1}},setup(e){return(t,n)=>(M(),Y("span",{type:"button",class:T({"btn rounded-pill me-2 btn-sm":!0,"btn-outline-primary":e.isOn,"btn-outline-secondary":!e.isOn}),onClick:n[0]||(n[0]=(...a)=>t.handleToggle&&t.handleToggle(...a))},[E(Nn($i),{icon:`${e.isOn?e.iconOnClass:e.iconOffClass}`,class:"me-2"},null,8,["icon"]),Rn(t.$slots,"default")],2))}}),Fi=Mi,zi={class:"row"},ji={class:"col-12"},Di={methods:{handleExecute(e){this.$emit("handleExecuteCaseConversion",e)}}},Yi=W({...Di,__name:"ParagraphCaseConversionButtons",props:{convertTypes:{type:Array,required:!0}},setup(e){return(t,n)=>(M(),qt(Qt,{has_shadow:!1},{default:z(()=>[d("div",zi,[d("div",ji,[(M(!0),Y(Ln,null,$n(e.convertTypes,(a,r)=>(M(),Y("span",{key:r,class:"me-2"},[E(Te,{onClick:i=>t.handleExecute(a.type)},{default:z(()=>[q(Mn(a.label),1)]),_:2},1032,["onClick"])]))),128))])])]),_:1}))}}),Ui={class:"row mb-3"},Bi=["placeholder"],Hi={key:0,class:"col"},Wi=["placeholder"],Vi={class:"row mb-3"},Gi={class:"col-md-12"},Xi=d("i",{class:"fa-solid fa-xmark"},null,-1),qi=d("i",{class:"fa-solid fa-copy"},null,-1),Ki=d("i",{class:"fa-solid fa-paste"},null,-1),Qi={class:"row mb-3"},Zi={class:"col-md-12"},Ji={class:"row mb-3"},eo={class:"col-md-12"},to={class:"row mb-3"},no={class:"col-md-12"},ao={class:"row mb-3"},ro={class:"col-md-6"},io={class:"col"},oo={class:"row mb-3"},so={class:"col-md-12"},lo={class:"row mb-3"},fo={class:"col-12"},uo={mixins:[Yn,Un,Bn,Dn,Ya,Ba],data(){return{input:{paragraph:{value:"",placeholder:"Input text"},caseConvert:{isOn:!1,paragraph:{value:"",placeholder:"Output for Case conversion"}}},output:{convertTypes:[{type:"camelCase",label:"camelCase",value:"",placeholder:"myLoverId"},{type:"capitalize",label:"Capitalize",value:"",placeholder:"My lover id"},{type:"kebabCase",label:"kebab-case",value:"",placeholder:"my-lover-id"},{type:"lowerCase",label:"lower case",value:"",placeholder:"my lover id"},{type:"lowerFirst",label:"lower First",value:"",placeholder:"my lover id"},{type:"snakeCase",label:"snake_case",value:"",placeholder:"my_lover_id"},{type:"toLower",label:"to lower",value:"",placeholder:"my lover id"},{type:"toUpper",label:"TO UPPER",value:"",placeholder:"MY LOVER ID"},{type:"upperCase",label:"UPPER CASE",value:"",placeholder:"MY LOVER ID"},{type:"upperFirst",label:"Upper first",value:"",placeholder:"My lover id"}]}}},methods:{async handleUniqueLines(){await this.commonAction(async e=>await Fn.uniq(e))},async handleRemoveBlankLines(){await this.commonAction(async e=>await e.filter(t=>!!t))},async pasteToInputParagraph(){await this.paste(e=>this.input.paragraph.value=e)},async handleExecuteCaseConversion(e){this.input.caseConvert.paragraph.value=await this.commonAction(async t=>await t.map(n=>zn[e](n)),!1)}}},xo=W({...uo,__name:"Paragraph",setup(e){return(t,n)=>(M(),Y("div",null,[E(Qt,{header_label:"Paragraph"},{footer:z(()=>[t.input.caseConvert.isOn?(M(),qt(Yi,{key:0,onHandleExecuteCaseConversion:t.handleExecuteCaseConversion,convertTypes:t.output.convertTypes},null,8,["onHandleExecuteCaseConversion","convertTypes"])):we("",!0),d("div",Qi,[d("div",Zi,[E(jn,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),d("div",Ji,[d("div",eo,[E(ra,{onHandleAdd:t.handleAdd,onHandleAddStart:t.handleAddStart,onHandleAddEnd:t.handleAddEnd},null,8,["onHandleAdd","onHandleAddStart","onHandleAddEnd"])])]),d("div",to,[d("div",no,[E(va,{onHandleReplaceAll:t.handleReplaceAll},null,8,["onHandleReplaceAll"])])]),d("div",ao,[d("div",ro,[E(Ca,{onHandleReplaceRegEx:t.handleReplaceRegEx},null,8,["onHandleReplaceRegEx"])]),d("div",io,[E(ja,{onHandleReplaceAll:t.handleReplaceAll},null,8,["onHandleReplaceAll"])])]),d("div",oo,[d("div",so,[E(kt,{onClick:t.handleUniqueLines},{default:z(()=>[q(" Unique Lines ")]),_:1},8,["onClick"]),E(kt,{onClick:t.handleRemoveBlankLines},{default:z(()=>[q(" Remove blank lines ")]),_:1},8,["onClick"])])]),d("div",lo,[d("div",fo,[E(Hn,{onClick:t.handleReset},null,8,["onClick"])])])]),default:z(()=>[d("div",Ui,[d("div",{class:T(`col-md-${t.input.caseConvert.isOn?"6":"12"}`)},[R(d("textarea",{class:"form-control",rows:"20","onUpdate:modelValue":n[0]||(n[0]=a=>t.input.paragraph.value=a),placeholder:t.input.paragraph.placeholder},null,8,Bi),[[te,t.input.paragraph.value]])],2),t.input.caseConvert.isOn?(M(),Y("div",Hi,[R(d("textarea",{class:"form-control",rows:"20","onUpdate:modelValue":n[1]||(n[1]=a=>t.input.caseConvert.paragraph.value=a),placeholder:t.input.caseConvert.paragraph.placeholder,readonly:""},null,8,Wi),[[te,t.input.caseConvert.paragraph.value]])])):we("",!0)]),d("div",Vi,[d("div",Gi,[E(Te,{class:"me-2",disabled:!t.input.paragraph.value,onClick:n[2]||(n[2]=a=>t.input.paragraph.value="")},{default:z(()=>[Xi]),_:1},8,["disabled"]),E(Te,{class:"me-2",disabled:!t.input.paragraph.value,onClick:n[3]||(n[3]=a=>t.copy(t.input.paragraph.value))},{default:z(()=>[qi]),_:1},8,["disabled"]),E(Te,{class:"me-2",onClick:n[4]||(n[4]=a=>t.pasteToObject(t.input.paragraph,"value"))},{default:z(()=>[Ki]),_:1}),E(Fi,{isOn:t.input.caseConvert.isOn,onHandleToggle:n[5]||(n[5]=a=>t.input.caseConvert.isOn=!t.input.caseConvert.isOn)},{default:z(()=>[q("Case conversion")]),_:1},8,["isOn"])])])]),_:1}),we("",!0),we("",!0)]))}});export{xo as default};
