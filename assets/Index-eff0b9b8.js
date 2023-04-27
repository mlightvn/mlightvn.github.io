import{j as h,o as i,c as p,b as a,w as s,f as C,a as l,m as d,v,t as c,F as m,g as k,u as b}from"./index-44ad6cc5.js";import{_ as w}from"./CopyMixin.vue_vue_type_script_setup_true_lang-f63e81dd.js";import{_ as $}from"./PasteMixin.vue_vue_type_script_lang-30109a2b.js";import{_ as V}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-2168ab2c.js";import{_ as y}from"./Card-25ef1ee3.js";import{a as f}from"./lodash-026a56df.js";import{C as B}from"./ClearCopyPasteButtons-d9cb083e.js";import{P as T}from"./PrimaryButton-f72eba1b.js";import{P as _}from"./PrimaryOutlineButton-73e4096e.js";import{R as g}from"./ResetButton-4fda4a75.js";const L={class:"row mb-3"},P=l("div",{class:"col-3"},"Input",-1),E={class:"col"},M=l("hr",null,null,-1),R=l("div",{class:"row my-3"},[l("div",{class:"col fw-bold"},"Input Information")],-1),D={class:"row mb-3"},F=l("div",{class:"col-3"},"Length",-1),O=["textContent"],U=["textContent"],N={class:"col input-group"},S=["onUpdate:modelValue","placeholder"],Y=l("i",{class:"fa-solid fa-play"},null,-1),j=l("i",{class:"fa-solid fa-copy"},null,-1),z={mixins:[w,$,V],data(){return{input:{value:""},output:{convertTypes:[{type:"camelCase",value:"",placeholder:"myLoverId"},{type:"capitalize",value:"",placeholder:"My lover id"},{type:"kebabCase",value:"",placeholder:"my-lover-id"},{type:"lowerCase",value:"",placeholder:"my lover id"},{type:"lowerFirst",value:"",placeholder:"my lover id"},{type:"snakeCase",value:"",placeholder:"my_lover_id"},{type:"toLower",value:"",placeholder:"my lover id"},{type:"toUpper",value:"",placeholder:"MY LOVER ID"},{type:"trim",value:"",placeholder:"my lover id"},{type:"trimEnd",value:"",placeholder:"my lover id"},{type:"trimStart",value:"",placeholder:"my lover id"},{type:"upperCase",value:"",placeholder:"MY LOVER ID"},{type:"upperFirst",value:"",placeholder:"My lover id"}]}}},methods:{handleConvert(){let u=this;this.output.convertTypes.forEach(e=>{e.value=f[e.type](u.input.value)})}}},Z=h({...z,__name:"Index",setup(u){return(e,t)=>(i(),p(m,null,[a(y,{header_label:"Convert"},{footer:s(()=>[a(T,{onClick:e.handleConvert},{default:s(()=>[C(" 変換 ")]),_:1},8,["onClick"]),a(g,{onClick:e.handleReset},null,8,["onClick"])]),default:s(()=>[l("div",L,[P,l("div",E,[a(B,{value:e.input.value,onClear:t[1]||(t[1]=o=>e.input.value=""),onCopy:t[2]||(t[2]=o=>e.copyToClipboard(e.input.value)),onPaste:t[3]||(t[3]=o=>e.paste(n=>e.input.value=n))},{default:s(()=>[d(l("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=o=>e.input.value=o)},null,512),[[v,e.input.value]])]),_:1},8,["value"])])]),M,R,l("div",D,[F,l("div",{class:"col",textContent:c(e.input.value.length)},null,8,O)])]),_:1}),a(y,{header_label:"Output"},{default:s(()=>[(i(!0),p(m,null,k(e.output.convertTypes,(o,n)=>(i(),p("div",{class:"row mb-3",key:n},[l("div",{class:"col-3",textContent:c(o.type)},null,8,U),l("div",N,[d(l("input",{type:"text",class:"form-control",disabled:"","onUpdate:modelValue":r=>o.value=r,placeholder:o.placeholder},null,8,S),[[v,o.value]]),a(_,{onClick:r=>o.value=b(f)[o.type](e.input.value)},{default:s(()=>[Y]),_:2},1032,["onClick"]),a(_,{onClick:r=>e.copyToClipboard(o.value)},{default:s(()=>[j]),_:2},1032,["onClick"])])]))),128))]),_:1})],64))}});export{Z as default};