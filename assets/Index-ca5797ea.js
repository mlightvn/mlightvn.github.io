import{o as l,c as a,b as p,w as n,a as t,k as r,v as d,t as c,F as v,g as m}from"./index-56d8370f.js";import{_ as h}from"./CopyMixin-cfe63d3e.js";import{_}from"./Card-c815de0e.js";import{a as b}from"./lodash-026a56df.js";const f={class:"row mb-3"},C=t("div",{class:"col-3"},"Input",-1),w={class:"col input-group"},k=t("hr",null,null,-1),g=t("div",{class:"row my-3"},[t("div",{class:"col fw-bold"},"Input Information")],-1),x={class:"row mb-3"},T=t("div",{class:"col-3"},"Length",-1),V=["textContent"],F=["textContent"],U={class:"col input-group"},B=["onUpdate:modelValue"],E=["onClick"],L=t("i",{class:"fa-solid fa-copy"},null,-1),$=[L],D={mixins:[h],data(){return{input:{value:""},output:{convertTypes:[{type:"camelCase",value:""},{type:"capitalize",value:""},{type:"kebabCase",value:""},{type:"lowerCase",value:""},{type:"lowerFirst",value:""},{type:"snakeCase",value:""},{type:"toLower",value:""},{type:"toUpper",value:""},{type:"trim",value:""},{type:"trimEnd",value:""},{type:"trimStart",value:""},{type:"upperCase",value:""},{type:"upperFirst",value:""}]}}},methods:{handleConvert(){let u=this;this.output.convertTypes.forEach(e=>{e.value=b[e.type](u.input.value)})}}},z=Object.assign(D,{__name:"Index",setup(u){return(e,s)=>(l(),a(v,null,[p(_,{header_label:"Convert"},{footer:n(()=>[t("button",{type:"button",class:"btn btn-primary",onClick:s[1]||(s[1]=(...o)=>e.handleConvert&&e.handleConvert(...o))}," 変換 ")]),default:n(()=>[t("div",f,[C,t("div",w,[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=o=>e.input.value=o)},null,512),[[d,e.input.value]])])]),k,g,t("div",x,[T,t("div",{class:"col",textContent:c(e.input.value.length)},null,8,V)])]),_:1}),p(_,{header_label:"Output"},{default:n(()=>[(l(!0),a(v,null,m(e.output.convertTypes,(o,y)=>(l(),a("div",{class:"row mb-3",key:y},[t("div",{class:"col-3",textContent:c(o.type)},null,8,F),t("div",U,[r(t("input",{type:"text",class:"form-control",disabled:"","onUpdate:modelValue":i=>o.value=i},null,8,B),[[d,o.value]]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:i=>e.copyToClipboard(o.value)},$,8,E)])]))),128))]),_:1})],64))}});export{z as default};
