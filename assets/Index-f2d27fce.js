import{o as y,h as g,w as l,a as e,b as s,m as _,v as b,f as u,c as O,e as S,t as P}from"./index-44ad6cc5.js";import{_ as T}from"./Card-25ef1ee3.js";import{_ as w}from"./CopyMixin.vue_vue_type_script_setup_true_lang-f63e81dd.js";import{_ as D}from"./PasteMixin.vue_vue_type_script_lang-30109a2b.js";import{_ as H}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-2168ab2c.js";import{d as v,a as c,b as F}from"./InputTrim.vue_vue_type_script_setup_true_lang-f4e1e718.js";import{P as f}from"./PrimaryButton-f72eba1b.js";import{R as E}from"./ResetButton-4fda4a75.js";import{C as d}from"./ClearCopyPasteButtons-d9cb083e.js";import{P as C}from"./PrimaryOutlineButton-73e4096e.js";import{d as Y}from"./Number-b931076f.js";import"./lodash-026a56df.js";const L={class:"row mb-2"},M=e("div",{class:"col-md-3"},"Input Date Time",-1),U={class:"col"},j={class:"col"},q={class:"row mb-2"},z={class:"col text-end"},G=e("i",{class:"fa-solid fa-sliders"},null,-1),J={class:"row mb-2"},K=e("div",{class:"col-md-3"},"Difference Date Time",-1),Q={class:"col"},W=["value"],X={class:"col"},Z=["value"],x={mixins:[w,D,H],data(){return{input:{datetime:{start:"",end:""}},output:{datetime:{diff:{full:"",hhmmss:"",hhmmssiii:""}}}}},methods:{async handleDiff(){let o=this.input.datetime.start.replace(",","."),t=this.input.datetime.end.replace(",",".");if(o===""||t==="")return await this.$snackbar.add({type:"warning",text:"No data to diff"}),!1;let a=await new Date(o),i=await new Date(t),n=await a.getTime(),h=await i.getTime()-n,m=await new Date(h),p=await v("hh:mm:ss",m),$=await v("hh:mm:ss.iii",m);this.output.datetime.diff.hhmmss=p,this.output.datetime.diff.hhmmssiii=$,await this.copyToClipboard(this.output.datetime.diff.hhmmss)},clearInputDatetime(o){this.input.datetime[o]=""},pasteFromClipboard(o="start"){this.paste(t=>this.input.datetime[o]=t)}}},tt=Object.assign(x,{__name:"DiffByStartEndDateTime",setup(o){return(t,a)=>(y(),g(T,{header_label:"Date Differences"},{default:l(()=>[e("div",L,[M,e("div",U,[s(d,{label:"From",value:t.input.datetime.start,hidden_copy:"",onClear:a[1]||(a[1]=i=>t.clearInputDatetime("start")),onPaste:a[2]||(a[2]=i=>t.pasteFromClipboard("start"))},{default:l(()=>[_(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=i=>t.input.datetime.start=i),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[b,t.input.datetime.start]])]),_:1},8,["value"])]),e("div",j,[s(d,{label:"To",value:t.input.datetime.start,hidden_copy:"",onClear:a[4]||(a[4]=i=>t.clearInputDatetime("end")),onPaste:a[5]||(a[5]=i=>t.pasteFromClipboard("end"))},{default:l(()=>[_(e("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=i=>t.input.datetime.end=i),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[b,t.input.datetime.end]])]),_:1},8,["value"])])]),e("div",q,[e("div",z,[s(f,{onClick:t.handleDiff,disabled:t.input.datetime.start===""||t.input.datetime.end===""},{default:l(()=>[G]),_:1},8,["onClick","disabled"]),s(E,{onClick:t.handleReset},null,8,["onClick"])])]),e("div",J,[K,e("div",Q,[s(d,{label:"Short",value:t.output.datetime.diff.hhmmss,hidden_paste:"",onClear:a[6]||(a[6]=i=>t.output.datetime.diff.hhmmss=""),onCopy:a[7]||(a[7]=i=>t.copyToClipboard(t.output.datetime.diff.hhmmss))},{default:l(()=>[e("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss",disabled:"",value:t.output.datetime.diff.hhmmss},null,8,W)]),_:1},8,["value"])]),e("div",X,[s(d,{label:"Long",value:t.output.datetime.diff.hhmmssiii,hidden_paste:"",onClear:a[8]||(a[8]=i=>t.output.datetime.diff.hhmmssiii=""),onCopy:a[9]||(a[9]=i=>t.copyToClipboard(t.output.datetime.diff.hhmmssiii))},{default:l(()=>[e("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss.iii",disabled:"",value:t.output.datetime.diff.hhmmssiii},null,8,Z)]),_:1},8,["value"])])])]),_:1}))}}),et={class:"row mb-2"},at={class:"col"},it=["placeholder"],st={class:"row mb-2"},ot={class:"col-12"},lt=e("i",{class:"fa-solid fa-xmark"},null,-1),nt=e("i",{class:"fa-solid fa-copy"},null,-1),dt=e("i",{class:"fa-solid fa-paste"},null,-1),rt={class:"row mb-2"},mt={class:"col-12"},pt={class:"row mb-2"},ut={class:"col-12"},ht={class:"row mb-2"},ct={class:"col-12"},ft={class:"row mb-2"},_t={class:"col-12"},bt=e("i",{class:"fa-solid fa-sliders"},null,-1),vt=e("i",{class:"fa-solid fa-sliders"},null,-1),yt=e("i",{class:"fa-solid fa-copy"},null,-1),$t=e("i",{class:"fa-solid fa-paste"},null,-1),Ct=e("i",{class:"fa-solid fa-sliders"},null,-1),gt=e("i",{class:"fa-solid fa-copy"},null,-1),Tt={class:"row mb-2"},wt=e("div",{class:"col-md-3"},"Date Time",-1),Dt={class:"col"},Ht=["value"],kt={class:"col"},St=["value"];const Ft={class:"row mb-2"},Et=e("div",{class:"col-md-3"},"Difference Date Time",-1),Bt={class:"col"},It=["value"],At={class:"col"},Nt=["value"],Vt={mixins:[w,D,H,F],data(){return{input:{paragraph:{placeholder:`2023-03-22 15:21:20,900 INFO  readLoveFile Start
2023-03-22 15:21:21,197 INFO  encoding
2023-03-22 15:21:21,197 ERROR  get VIRUS`}},output:{datetime:{start:"",end:"",diff_by_time:{short:{time:""},long:{time:""}}}},origin:null}},methods:{async handleDiff(){let o={start:"",end:""},t=await this.input.paragraph.value.replaceAll("\r",""),a=t.split(`
`);if(!t)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let i=a.filter(R=>R),n=i[0],r=i[i.length-1],h=/^\d{4}[\-\_\/]\d{2}[\-\_\/]\d{2} \d{2}:\d{2}:\d{2}[,\.]\d{3}/;if(!n||!r)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let m=n.match(h);m&&m.length>0?n=m[0].replace(",","."):n="";let p=r.match(h);if(p&&p.length>0?r=p[0].replace(",","."):r="",!n||!r)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;this.output.datetime.start=n,this.output.datetime.end=r,o.start=new Date(this.output.datetime.start),o.end=new Date(this.output.datetime.end);let $=o.start.getTime(),B=o.end.getTime()-$,k=new Date(B),I="hh:mm:ss",A="hh:mm:ss.iii",N=await v(I,k),V=await v(A,k);this.output.datetime.diff_by_time.short.time=N,this.output.datetime.diff_by_time.long.time=V},clearInputDatetime(){this.input.paragraph.value=""},async pasteFromClipboard(){let o=this;await this.paste(t=>o.input.paragraph.value=t)},async handleDiffAndCopy(){await this.handleDiff(),await this.copy(this.output.datetime.diff_by_time.short.time)},async pasteFromClipboardAndDiff(){await this.pasteFromClipboard(),await this.handleDiffAndCopy()}}},Rt=Object.assign(Vt,{__name:"DiffFromLogFormat",setup(o){return(t,a)=>(y(),g(T,{header_label:"Diff from Log Format"},{default:l(()=>[e("div",et,[e("div",at,[_(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=i=>t.input.paragraph.value=i),rows:"15",class:"form-control",placeholder:t.input.paragraph.placeholder},null,8,it),[[b,t.input.paragraph.value]])])]),e("div",st,[e("div",ot,[s(C,{class:"me-1",onClick:t.clearInputDatetime,disabled:!t.input.paragraph.value},{default:l(()=>[lt]),_:1},8,["onClick","disabled"]),s(C,{class:"me-1",disabled:!t.input.paragraph.value,onClick:a[1]||(a[1]=i=>t.copy(t.input.paragraph.value))},{default:l(()=>[nt]),_:1},8,["disabled"]),s(C,{class:"me-1",onClick:t.pasteFromClipboard},{default:l(()=>[dt]),_:1},8,["onClick"])])]),e("div",rt,[e("div",mt,[s(c,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),e("div",pt,[e("div",ut,[s(c,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),e("div",ht,[e("div",ct,[s(c,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),e("div",ft,[e("div",_t,[s(f,{onClick:t.handleDiff,disabled:!t.input.paragraph.value},{default:l(()=>[bt]),_:1},8,["onClick","disabled"]),s(f,{onClick:t.handleDiffAndCopy,disabled:!t.input.paragraph.value},{default:l(()=>[vt,u(" ➡ "),yt]),_:1},8,["onClick","disabled"]),s(f,{onClick:t.pasteFromClipboardAndDiff},{default:l(()=>[$t,u(" ➡ "),Ct,u(" ➡ "),gt]),_:1},8,["onClick"]),s(E,{onClick:t.handleReset},null,8,["onClick"])])]),e("div",Tt,[wt,e("div",Dt,[s(d,{label:"From",value:t.output.datetime.start,hidden_clear:"",hidden_paste:"",onCopy:a[2]||(a[2]=i=>t.copyToClipboard(t.output.datetime.start))},{default:l(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.start,placeholder:"HH:mm:ss(.iii)"},null,8,Ht)]),_:1},8,["value"])]),e("div",kt,[s(d,{label:"To",value:t.output.datetime.end,hidden_clear:"",hidden_paste:"",onCopy:a[3]||(a[3]=i=>t.copyToClipboard(t.output.datetime.end))},{default:l(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.end,placeholder:"HH:mm:ss(.iii)"},null,8,St)]),_:1},8,["value"])]),S("",!0),S("",!0)]),e("div",Ft,[Et,e("div",Bt,[s(d,{label:"Short",value:t.output.datetime.diff_by_time.short.time,hidden_clear:"",hidden_paste:"",onCopy:a[6]||(a[6]=i=>t.copyToClipboard(t.output.datetime.diff_by_time.short.time))},{default:l(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.diff_by_time.short.time,placeholder:"HH:mm:ss"},null,8,It)]),_:1},8,["value"])]),e("div",At,[s(d,{label:"Long",value:t.output.datetime.diff_by_time.long.time,hidden_clear:"",hidden_paste:"",onCopy:a[7]||(a[7]=i=>t.copyToClipboard(t.output.datetime.diff_by_time.long.time))},{default:l(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.diff_by_time.long.time,placeholder:"HH:mm:ss.iii"},null,8,Nt)]),_:1},8,["value"])])])]),_:1}))}}),Ot={class:"row mb-2"},Pt={class:"col"},Yt=["placeholder"],Lt={class:"row mb-2"},Mt={class:"col-md-12"},Ut=["disabled"],jt=e("i",{class:"fa-solid fa-xmark"},null,-1),qt=[jt],zt=["disabled"],Gt=e("i",{class:"fa-solid fa-copy"},null,-1),Jt=[Gt],Kt=e("i",{class:"fa-solid fa-paste"},null,-1),Qt=[Kt],Wt={class:"row mb-2"},Xt={class:"col-md-12"},Zt={class:"row mb-2"},xt={class:"col-md-12"},te=["disabled"],ee=["disabled"],ae=e("i",{class:"fa-solid fa-copy"},null,-1),ie=e("i",{class:"fa-solid fa-paste"},null,-1),se=e("i",{class:"fa-solid fa-copy"},null,-1),oe=e("i",{class:"fa-solid fa-xmark"},null,-1),le=[oe],ne={class:"row mb-2"},de={class:"col input-group"},re=e("span",{class:"input-group-text"},"Total",-1),me=["placeholder","value"],pe=["textContent"],ue=e("i",{class:"fa-solid fa-copy"},null,-1),he=[ue],ce={mixins:[w,D,H,F],data(){return{input:{paragraph:{placeholder:`10
20
30
40`},trim:{value:" "}},output:{total:{value:0,placeholder:"100",label:"0"}},origin:null}},methods:{async handleSum(){let o=0;await this.commonLinesMapAction(t=>{try{if(isNaN(t)||t==="")return;o+=parseFloat(t)}catch(a){console.error("Error parsing"),console.error({value:t,error:a})}},!1),this.output.total.value=o,this.output.total.label=Y(o)},clearInputDatetime(){this.input.paragraph.value=""},async pasteFromClipboard(){let o=this;await this.paste(t=>o.input.paragraph.value=t)},async handleSumAndCopy(){await this.handleSum(),await this.copy(this.output.total.value)},async pasteFromClipboardAndDiff(){await this.pasteFromClipboard(),await this.handleSumAndCopy()}}},fe=Object.assign(ce,{__name:"NumberSum",setup(o){return(t,a)=>(y(),g(T,{header_label:"Total"},{default:l(()=>[e("div",Ot,[e("div",Pt,[_(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=i=>t.input.paragraph.value=i),rows:"15",class:"form-control",placeholder:t.input.paragraph.placeholder},null,8,Yt),[[b,t.input.paragraph.value]])])]),e("div",Lt,[e("div",Mt,[e("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:a[1]||(a[1]=(...i)=>t.clearInputDatetime&&t.clearInputDatetime(...i)),disabled:!t.input.paragraph.value},qt,8,Ut),e("button",{type:"button",class:"btn btn-outline-primary me-1",disabled:!t.input.paragraph.value,onClick:a[2]||(a[2]=i=>t.copy(t.input.paragraph.value))},Jt,8,zt),e("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:a[3]||(a[3]=(...i)=>t.pasteFromClipboard&&t.pasteFromClipboard(...i))},Qt)])]),e("div",Wt,[e("div",Xt,[s(c,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),e("div",Zt,[e("div",xt,[e("button",{type:"button",class:"btn btn-primary me-1",onClick:a[4]||(a[4]=(...i)=>t.handleSum&&t.handleSum(...i)),disabled:!t.input.paragraph.value}," Sum ",8,te),e("button",{type:"button",class:"btn btn-primary me-1",onClick:a[5]||(a[5]=(...i)=>t.handleSumAndCopy&&t.handleSumAndCopy(...i)),disabled:!t.input.paragraph.value},[u(" Sum ➡ "),ae],8,ee),e("button",{type:"button",class:"btn btn-primary me-1",onClick:a[6]||(a[6]=(...i)=>t.pasteFromClipboardAndDiff&&t.pasteFromClipboardAndDiff(...i))},[ie,u(" ➡ Sum ➡ "),se]),e("button",{type:"button",class:"btn btn-secondary me-1",onClick:a[7]||(a[7]=(...i)=>t.handleReset&&t.handleReset(...i))},le)])]),e("div",ne,[e("div",de,[re,e("input",{type:"text",class:"form-control",disabled:"",placeholder:t.output.total.placeholder,value:t.output.total.value},null,8,me),e("span",{class:"input-group-text",textContent:P(t.output.total.label)},null,8,pe),e("button",{type:"button",class:"btn btn-outline-primary",onClick:a[8]||(a[8]=i=>t.copyToClipboard(t.output.total.value))},he)])])]),_:1}))}}),_e={class:""},be={class:"row"},ve={class:"col"},ye={class:"row"},$e={class:"col"},Ce={class:"row"},ge={class:"col"},Re={__name:"Index",setup(o){return(t,a)=>(y(),O("div",_e,[e("div",be,[e("div",ve,[s(tt)])]),e("div",ye,[e("div",$e,[s(Rt)])]),e("div",Ce,[e("div",ge,[s(fe)])])]))}};export{Re as default};
