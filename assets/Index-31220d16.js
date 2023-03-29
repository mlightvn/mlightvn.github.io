import{o as b,h as f,w as $,a as t,l as n,v as a,c as v,e as _,m as x,b as h}from"./index-a9b7efb8.js";import{_ as y}from"./CopyMixin-9be47624.js";import{_ as w}from"./Card-027d0184.js";import{_ as D}from"./PasteMixin-30109a2b.js";function k(l,e){return String(l).padStart(e,"0")}const U={class:"row mb-2"},g={class:"col input-group"},C=t("i",{class:"fa-solid fa-xmark"},null,-1),T=[C];const N=t("span",{class:"input-group-text"},"～",-1),V=t("i",{class:"fa-solid fa-xmark"},null,-1),I=[V];const B=t("span",{class:"input-group-text"},"Size",-1),z=t("span",{class:"input-group-text"},"Replaced text",-1),R=["disabled"],G=t("i",{class:"fa-solid fa-xmark"},null,-1),S=[G],X={class:"row mb-2"},E={class:"col"},M=["placeholder"],j={class:"row mb-2"},A={class:"col-12"},O=t("i",{class:"fa-solid fa-sliders"},null,-1),W=[O],P={class:"row mb-2"},q={class:"col"},F=["placeholder"],H={class:"row mb-2"},J={class:"col"},K=t("i",{class:"fa-solid fa-xmark"},null,-1),L=[K],Q=t("i",{class:"fa-solid fa-copy"},null,-1),Y=[Q],Z={mixins:[y],data(){return{input:{min:1,max:100,size:5,replaced_text:"{XXX}",sample_row_text:""},output:{table_data:""}}},computed:{table_data_placeholder:{get(){return`ID00001	UserName	1 million dollars
ID00002	UserName	1 million dollars`}}},methods:{async handleGenerateTableData(){var p,u;let l="",e=this.input.sample_row_text;if(!e)return this.$snackbar.add({type:"warning",text:"No data to process"}),!1;(p=this.input).min||(p.min=0),(u=this.input).max||(u.max=1);let s=await parseInt(this.input.min),o=await parseInt(this.input.max),d="",i="";for(let r=s;r<=o;r++)i=k(r,this.input.size),d=e,this.input.replaced_text&&(d=await d.replaceAll(this.input.replaced_text,i)),l?l+=`\r
`+d:l=d;this.output.table_data=l}}},tt=Object.assign(Z,{__name:"TableDataRowWithIncrementNumber",setup(l){return(e,s)=>(b(),f(w,{header_label:"Table Data Row with increment Number"},{default:$(()=>[t("div",U,[t("div",g,[n(t("input",{type:"number",class:"form-control",placeholder:"1","onUpdate:modelValue":s[0]||(s[0]=o=>e.input.min=o),min:"0",step:"1"},null,512),[[a,e.input.min]]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:s[1]||(s[1]=o=>e.input.min="")},T),_("",!0),N,n(t("input",{type:"number",class:"form-control",placeholder:"Maximum","onUpdate:modelValue":s[2]||(s[2]=o=>e.input.max=o),min:"1",step:"1"},null,512),[[a,e.input.max]]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:s[3]||(s[3]=o=>e.input.max="")},I),_("",!0),B,n(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=o=>e.input.size=o),min:"1",step:"1"},null,512),[[a,e.input.size]]),z,n(t("input",{type:"text",class:"form-control",placeholder:"Replaced text","onUpdate:modelValue":s[5]||(s[5]=o=>e.input.replaced_text=o)},null,512),[[a,e.input.replaced_text]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!e.input.replaced_text,onClick:s[6]||(s[6]=o=>e.input.replaced_text="")},S,8,R)])]),t("div",X,[t("div",E,[n(t("input",{type:"text",class:"form-control",placeholder:`ID${e.input.replaced_text}	UserName	1 Million Dollar`,"onUpdate:modelValue":s[7]||(s[7]=o=>e.input.sample_row_text=o)},null,8,M),[[a,e.input.sample_row_text]])])]),t("div",j,[t("div",A,[t("button",{type:"button",class:"btn btn-primary me-1",onClick:s[8]||(s[8]=(...o)=>e.handleGenerateTableData&&e.handleGenerateTableData(...o))},W)])]),t("div",P,[t("div",q,[n(t("textarea",{class:"form-control",rows:"20",placeholder:e.table_data_placeholder,"onUpdate:modelValue":s[9]||(s[9]=o=>e.output.table_data=o),disabled:""},null,8,F),[[a,e.output.table_data]])])]),t("div",H,[t("div",J,[t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[10]||(s[10]=o=>e.output.table_data="")},L),t("button",{type:"button",class:"btn btn-outline-primary",onClick:s[11]||(s[11]=o=>e.copyToClipboard(e.output.table_data))},Y)])])]),_:1}))}}),et={class:"row mb-2"},st={class:"col input-group"},ot=t("i",{class:"fa-solid fa-xmark"},null,-1),lt=[ot];const nt=t("span",{class:"input-group-text"},"～",-1),at=t("i",{class:"fa-solid fa-xmark"},null,-1),it=[at];const dt=t("span",{class:"input-group-text"},"Size",-1),rt=t("span",{class:"input-group-text"},"Replaced text",-1),pt={class:"row mb-2"},ut={class:"col"},_t=["placeholder"],mt={class:"row mb-2"},ct={class:"col-12"},bt=t("i",{class:"fa-solid fa-xmark"},null,-1),ht=[bt],ft=t("i",{class:"fa-solid fa-paste"},null,-1),$t=[ft],yt={class:"row mb-2"},wt={class:"col-12"},kt=t("i",{class:"fa-solid fa-sliders"},null,-1),vt=[kt],xt={class:"row mb-2"},Dt={class:"col"},Ut=["placeholder"],gt={class:"row mb-2"},Ct={class:"col"},Tt=t("i",{class:"fa-solid fa-xmark"},null,-1),Nt=[Tt],Vt=t("i",{class:"fa-solid fa-copy"},null,-1),It=[Vt],Bt={mixins:[y,D],data(){return{input:{min:1,max:100,size:5,replaced_text:"{XXX}",sample_row_text:""},output:{table_data:""}}},computed:{sample_row_text_placeholder:{get(){return`ID00001	UserName01	1 million dollars	Rank ${this.input.replaced_text}
ID00002	UserName02	2 million dollars	Rank ${this.input.replaced_text}`}},table_data_placeholder:{get(){return`ID00001	UserName01	1 million dollars	Rank 00001
ID00002	UserName02	2 million dollars	Rank 00002`}}},methods:{async handleGenerateTableData(){var u,r;let l="",e=this.input.sample_row_text;if(e=e.replace(/\r/g,""),!e)return this.$snackbar.add({type:"warning",text:"No data to process"}),!1;let s=e.split(`
`);(u=this.input).min||(u.min=0),(r=this.input).max||(r.max=1);let o=await parseInt(this.input.min),d=await parseInt(this.input.max),i="",p="";for(let m=o,c=0;m<=d&&c<s.length;m++,c++)p=k(m,this.input.size),i=s[c],this.input.replaced_text&&(i=await i.replaceAll(this.input.replaced_text,p)),l?l+=`
`+i:l=i;this.output.table_data=l},async pasteToSampleTableData(){await this.paste(l=>this.input.sample_row_text=l)}}},zt=Object.assign(Bt,{__name:"TableDataWithIncrementNumber",setup(l){return x(),(e,s)=>(b(),f(w,{header_label:"Table Data with increment Number"},{default:$(()=>[t("div",et,[t("div",st,[n(t("input",{type:"number",class:"form-control",placeholder:"1","onUpdate:modelValue":s[0]||(s[0]=o=>e.input.min=o),min:"0",step:"1"},null,512),[[a,e.input.min]]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:s[1]||(s[1]=o=>e.input.min="")},lt),_("",!0),nt,n(t("input",{type:"number",class:"form-control",placeholder:"Maximum","onUpdate:modelValue":s[2]||(s[2]=o=>e.input.max=o),min:"1",step:"1"},null,512),[[a,e.input.max]]),t("button",{type:"button",class:"btn btn-outline-primary",onClick:s[3]||(s[3]=o=>e.input.max="")},it),_("",!0),dt,n(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=o=>e.input.size=o),min:"1",step:"1"},null,512),[[a,e.input.size]]),rt,n(t("input",{type:"text",class:"form-control",placeholder:"Replaced text","onUpdate:modelValue":s[5]||(s[5]=o=>e.input.replaced_text=o)},null,512),[[a,e.input.replaced_text]])])]),t("div",pt,[t("div",ut,[n(t("textarea",{class:"form-control",rows:"20",placeholder:e.sample_row_text_placeholder,"onUpdate:modelValue":s[6]||(s[6]=o=>e.input.sample_row_text=o),disabled:""},null,8,_t),[[a,e.input.sample_row_text]])])]),t("div",mt,[t("div",ct,[t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[7]||(s[7]=o=>e.input.sample_row_text="")},ht),t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[8]||(s[8]=o=>e.pasteToSampleTableData())},$t)])]),t("div",yt,[t("div",wt,[t("button",{type:"button",class:"btn btn-primary me-1",onClick:s[9]||(s[9]=(...o)=>e.handleGenerateTableData&&e.handleGenerateTableData(...o))},vt)])]),t("div",xt,[t("div",Dt,[n(t("textarea",{class:"form-control",rows:"20",placeholder:e.table_data_placeholder,"onUpdate:modelValue":s[10]||(s[10]=o=>e.output.table_data=o),disabled:""},null,8,Ut),[[a,e.output.table_data]])])]),t("div",gt,[t("div",Ct,[t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[11]||(s[11]=o=>e.output.table_data="")},Nt),t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[12]||(s[12]=o=>e.copyToClipboard(e.output.table_data))},It)])])]),_:1}))}}),Rt={class:""},Gt={class:"row mb-3"},St={class:"col"},Xt={class:"row mb-3"},Et={class:"col"},Wt={__name:"Index",setup(l){return(e,s)=>(b(),v("div",Rt,[t("div",Gt,[t("div",St,[h(tt)])]),t("div",Xt,[t("div",Et,[h(zt)])])]))}};export{Wt as default};
