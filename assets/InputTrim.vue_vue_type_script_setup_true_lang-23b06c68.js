import{m as o,o as m,c as p,a as s,l as h,v as c,n as r}from"./index-5b66cff4.js";function u(n,t=" "){let a=n;for(;a.indexOf(t)===0;)a=a.replace(t,"");return a}function d(n,t=" "){let a=-1,e=n,i=0;const l=t.length;for(;i=e.length,a=e.lastIndexOf(t),!(a<0||i!==a+l);)e=e.substring(0,a);return e}function f(n,t=" "){let a=n;return a=u(a,t),a=d(a,t),a}async function Y(n="YYYY/MM/DD hh:mm:ss.iii",t=new Date){return await[["YYYY",t.getFullYear()],["MM",t.getMonth()+1],["DD",t.getDate()],["hh",t.getUTCHours()],["mm",t.getMinutes()],["ss",t.getSeconds()],["iii",t.getMilliseconds()]].reduce((a,e)=>a.replace(e[0],`${e[1]}`.padStart(e[0].length,"0")),n)}const g={data(){return{input:{paragraph:{value:""}}}},computed:{paragraph_value:{get(){return this.input.paragraph.value},set(n){this.input.paragraph.value=n}}},methods:{async commonLinesMapAction(n,t=!0){await this.commonAction(async a=>await a.map(n),t)},async commonAction(n,t=!0){let a=this.input.paragraph.value;if(a.length===0)return this.$snackbar.add({type:"warning",text:"No data available"}),!1;a=await a.replaceAll("\r","");let e=await a.split(`
`),i=await n(e);if(i===void 0)return this.$snackbar.add({type:"error",text:"Result is undefined"}),!1;if(i.length===0)return this.$snackbar.add({type:"warning",text:"Result is empty"}),!1;if(t){let l=await i.join(`\r
`);this.input.paragraph.value=l}}}},b={mixins:[g],methods:{async handleTrim(n){n||(n=" "),await this.commonLinesMapAction(t=>f(t,n))},async handleTrimStart(n){n||(n=" "),await this.commonLinesMapAction(t=>u(t,n))},async handleTrimEnd(n){n||(n=" "),await this.commonLinesMapAction(t=>d(t,n))}}},E=o({...b,__name:"TrimMixin",setup(n){return()=>{}}}),T={class:""},y={class:"input-group"},w=["disabled"],v=s("i",{class:"fa-solid fa-xmark"},null,-1),M=[v],k={data(){return{input:{value:""}}},methods:{handleTrim(){this.$emit("handleTrim",this.input.value)},handleTrimStart(){this.$emit("handleTrimStart",this.input.value)},handleTrimEnd(){this.$emit("handleTrimEnd",this.input.value)}}},A=o({...k,__name:"InputTrim",props:{button_class:{type:String,required:!1,default:"btn btn-outline-primary"}},setup(n){return(t,a)=>(m(),p("div",T,[s("div",y,[h(s("input",{type:"text",class:"form-control",placeholder:"Trim text","onUpdate:modelValue":a[0]||(a[0]=e=>t.input.value=e),onFocus:a[1]||(a[1]=e=>{var i;return(i=e==null?void 0:e.target)==null?void 0:i.select()})},null,544),[[c,t.input.value]]),s("button",{type:"button",class:r(n.button_class),onClick:a[2]||(a[2]=e=>t.input.value=""),disabled:!t.input.value},M,10,w),s("button",{type:"button",class:r(n.button_class),onClick:a[3]||(a[3]=(...e)=>t.handleTrim&&t.handleTrim(...e))}," Trim ",2),s("button",{type:"button",class:r(n.button_class),onClick:a[4]||(a[4]=(...e)=>t.handleTrimStart&&t.handleTrimStart(...e))}," Trim Start ",2),s("button",{type:"button",class:r(n.button_class),onClick:a[5]||(a[5]=(...e)=>t.handleTrimEnd&&t.handleTrimEnd(...e))}," Trim End ",2)])]))}});export{g as _,A as a,E as b,Y as d};
