import{o as p,h as d,w as u,a as n,k as r,v as e}from"./index-a86750d8.js";import{l as o}from"./lodash-026a56df.js";import{_ as m}from"./CopyMixin-0d4027b1.js";import{_ as h}from"./PasteMixin-30109a2b.js";import{_ as b}from"./Card-0b3a5bec.js";const y={class:"row mb-3"},f={class:"col-md-12"},g={class:"row mb-3"},c={class:"col-md-12"},w=["disabled"],k=n("i",{class:"fa-solid fa-xmark"},null,-1),v=[k],C=["disabled"],T=n("i",{class:"fa-solid fa-copy"},null,-1),_=[T],$=n("i",{class:"fa-solid fa-paste"},null,-1),L=[$],q={class:"row mb-3"},A={class:"col-md-12"},B=n("i",{class:"fa-solid fa-arrow-up"},null,-1),E=[B],R=n("i",{class:"fa-solid fa-arrow-down"},null,-1),U=[R],P={class:"row mb-3"},S={class:"col-md-12"},D={mixins:[m,h],data(){return{origin:{input:{paragraph:""},output:{paragraph:""}},input:null,output:null}},methods:{async handleUniqueLines(){await this.handleCommonAction(async i=>await o.uniq(i))},async handleTrim(){await this.handleCommonAction(async i=>await i.map(t=>o.trim(t)))},async handleTrimEnd(){await this.handleCommonAction(async i=>await i.map(t=>o.trimEnd(t)))},async handleTrimStart(){await this.handleCommonAction(async i=>await i.map(t=>o.trimStart(t)))},async handleRemoveBlankLines(){await this.handleCommonAction(async i=>await i.filter(t=>!!t))},async handleCommonAction(i){let t=this.input.paragraph;if(t.length===0)return this.$snackbar.add({type:"warning",text:"No data available"}),!1;t=await t.replace(/\r/g,"");let a=await t.split(`
`),s=await i(a);if(s===void 0)return this.$snackbar.add({type:"error",text:"Result is undefined"}),!1;if(s.length===0)return this.$snackbar.add({type:"warning",text:"Result is empty"}),!1;let l=await s.join(`\r
`);this.output.paragraph=l},async pasteToInputParagraph(){await this.paste(i=>this.input.paragraph=i)}},created(){this.input=o.cloneDeep(this.origin.input),this.output=o.cloneDeep(this.origin.output)}},O=Object.assign(D,{__name:"Paragraph",setup(i){return(t,a)=>(p(),d(b,{header_label:"Paragraph"},{default:u(()=>[n("div",y,[n("div",f,[r(n("textarea",{class:"form-control",rows:"20","onUpdate:modelValue":a[0]||(a[0]=s=>t.input.paragraph=s)},null,512),[[e,t.input.paragraph]])])]),n("div",g,[n("div",c,[n("button",{type:"button",class:"btn btn-outline-primary me-2",disabled:!t.input.paragraph,onClick:a[1]||(a[1]=s=>t.input.paragraph="")},v,8,w),n("button",{type:"button",class:"btn btn-outline-primary me-2",disabled:!t.input.paragraph,onClick:a[2]||(a[2]=s=>t.copy(t.input.paragraph))},_,8,C),n("button",{type:"button",class:"btn btn-outline-primary me-2",onClick:a[3]||(a[3]=(...s)=>t.pasteToInputParagraph&&t.pasteToInputParagraph(...s))},L)])]),n("div",q,[n("div",A,[n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[4]||(a[4]=(...s)=>t.handleUniqueLines&&t.handleUniqueLines(...s))}," Unique Lines "),n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[5]||(a[5]=(...s)=>t.handleTrim&&t.handleTrim(...s))}," Trim Lines "),n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[6]||(a[6]=(...s)=>t.handleTrimEnd&&t.handleTrimEnd(...s))}," Trim End "),n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[7]||(a[7]=(...s)=>t.handleTrimStart&&t.handleTrimStart(...s))}," Trim Start "),n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[8]||(a[8]=(...s)=>t.handleRemoveBlankLines&&t.handleRemoveBlankLines(...s))}," Remove blank lines "),n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[9]||(a[9]=s=>t.input.paragraph=t.output.paragraph)},E),n("button",{type:"button",class:"btn btn-primary me-2",onClick:a[10]||(a[10]=s=>t.output.paragraph=t.input.paragraph)},U)])]),n("div",P,[n("div",S,[r(n("textarea",{class:"form-control",rows:"20","onUpdate:modelValue":a[11]||(a[11]=s=>t.output.paragraph=s)},null,512),[[e,t.output.paragraph]])])])]),_:1}))}});export{O as default};
