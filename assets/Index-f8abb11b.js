import{e as y,o as h,i as $,w as i,a as e,b as o,m as r,v as u,c as S,F as O,h as U,g as _,f as F,t as P}from"./index-b061f691.js";import{_ as C}from"./Card.vue_vue_type_script_setup_true_lang-e835bd73.js";import{_ as g}from"./CopyMixin.vue_vue_type_script_setup_true_lang-40058bf4.js";import{_ as w}from"./PasteMixin.vue_vue_type_script_lang-1252b51c.js";import{_ as D}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-097f38bf.js";import{d as c,c as I,a as M}from"./InputTrim.vue_vue_type_script_setup_true_lang-be72adeb.js";import{P as b}from"./PrimaryButton-f5e47c2c.js";import{R as Y}from"./ResetButton-79457144.js";import{_ as d}from"./ClearCopyPasteButtons.vue_vue_type_script_setup_true_lang-97850f90.js";import{P as k}from"./PrimaryOutlineButton-63bc7fea.js";import{d as L}from"./Number-b931076f.js";import"./lodash-b028437e.js";const j={class:"row mb-2"},q=e("div",{class:"col-md-3"},"Today",-1),z={class:"col"},G={class:"col"},J={class:"row mb-2"},K=e("div",{class:"col-md-3"},"Yesterday",-1),Q={class:"col"},W={class:"col"},X={class:"row mb-2"},Z={class:"col text-end"},x=e("i",{class:"fa-solid fa-play"},null,-1),tt={mixins:[g,w,D],data(){return{input:{},output:{dates:{label:{today:{short:"",long:{dash:"",slash:""},full:{dash:"",slash:""}},yesterday:{short:"",long:{dash:"",slash:""},full:{dash:"",slash:""}},tomorrow:{short:"",long:{dash:"",slash:""},full:{dash:"",slash:""}}}}}}},methods:{async handleExecute(){let l=new Date,t=new Date;t.setDate(l.getDate()-1),this.output.dates.label.today.long.slash=await c("YYYY/MM/DD",l),this.output.dates.label.today.short=this.output.dates.label.today.long.slash.replaceAll("/",""),this.output.dates.label.yesterday.long.slash=await c("YYYY/MM/DD",t),this.output.dates.label.yesterday.short=this.output.dates.label.yesterday.long.slash.replaceAll("/","")}}},et=y({...tt,__name:"DateInfo",setup(l){return(t,a)=>(h(),$(C,{header_label:"Date Information"},{default:i(()=>[e("div",j,[q,e("div",z,[o(d,{value:t.output.dates.label.today.long.slash,hidden_clear:"",hidden_paste:"",onCopy:a[1]||(a[1]=s=>t.copyToClipboard(t.output.dates.label.today.long.slash))},{default:i(()=>[r(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>t.output.dates.label.today.long.slash=s),class:"form-control",readonly:"",placeholder:"YYYY/MM/DD"},null,512),[[u,t.output.dates.label.today.long.slash]])]),_:1},8,["value"])]),e("div",G,[o(d,{value:t.output.dates.label.today.short,hidden_clear:"",hidden_paste:"",onCopy:a[3]||(a[3]=s=>t.copyToClipboard(t.output.dates.label.today.short))},{default:i(()=>[r(e("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=s=>t.output.dates.label.today.short=s),class:"form-control",readonly:"",placeholder:"YYYYMMDD"},null,512),[[u,t.output.dates.label.today.short]])]),_:1},8,["value"])])]),e("div",J,[K,e("div",Q,[o(d,{value:t.output.dates.label.yesterday.long.slash,hidden_clear:"",hidden_paste:"",onCopy:a[5]||(a[5]=s=>t.copyToClipboard(t.output.dates.label.yesterday.long.slash))},{default:i(()=>[r(e("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=s=>t.output.dates.label.yesterday.long.slash=s),class:"form-control",readonly:"",placeholder:"YYYY/MM/DD"},null,512),[[u,t.output.dates.label.yesterday.long.slash]])]),_:1},8,["value"])]),e("div",W,[o(d,{value:t.output.dates.label.yesterday.short,hidden_clear:"",hidden_paste:"",onCopy:a[7]||(a[7]=s=>t.copyToClipboard(t.output.dates.label.yesterday.short))},{default:i(()=>[r(e("input",{type:"text","onUpdate:modelValue":a[6]||(a[6]=s=>t.output.dates.label.yesterday.short=s),class:"form-control",readonly:"",placeholder:"YYYYMMDD"},null,512),[[u,t.output.dates.label.yesterday.short]])]),_:1},8,["value"])])]),e("div",X,[e("div",Z,[o(b,{onClick:t.handleExecute},{default:i(()=>[x]),_:1},8,["onClick"]),o(Y,{onClick:t.handleReset},null,8,["onClick"])])])]),_:1}))}}),at={class:"row mb-2"},st=e("div",{class:"col-md-3"},"Input Date Time",-1),ot={class:"col"},lt={class:"col"},it={class:"row mb-2"},dt={class:"col text-end"},nt=e("i",{class:"fa-solid fa-sliders"},null,-1),rt={class:"row mb-2"},ut=e("div",{class:"col-md-3"},"Difference Date Time",-1),pt={class:"col"},mt=["value"],ht={class:"col"},ct=["value"],ft={mixins:[g,w,D],data(){return{input:{datetime:{start:"",end:""}},output:{datetime:{diff:{full:"",hhmmss:"",hhmmssiii:""}}}}},methods:{async handleDiff(){let l=this.input.datetime.start.replace(",","."),t=this.input.datetime.end.replace(",",".");if(l===""||t==="")return await this.$snackbar.add({type:"warning",text:"No data to diff"}),!1;let a=await new Date(l),s=await new Date(t),n=await a.getTime(),v=await s.getTime()-n,m=await new Date(v),f=await c("hh:mm:ss",m),T=await c("hh:mm:ss.iii",m);this.output.datetime.diff.hhmmss=f,this.output.datetime.diff.hhmmssiii=T,await this.copyToClipboard(this.output.datetime.diff.hhmmss)},clearInputDatetime(l){this.input.datetime[l]=""},pasteFromClipboard(l="start"){this.pasteToObject(this.input.datetime,l)}}},_t=y({...ft,__name:"DiffByStartEndDateTime",setup(l){return(t,a)=>(h(),$(C,{header_label:"Date Differences"},{default:i(()=>[e("div",at,[st,e("div",ot,[o(d,{label:"From",value:t.input.datetime.start,hidden_copy:"",onClear:a[1]||(a[1]=s=>t.clearInputDatetime("start")),onPaste:a[2]||(a[2]=s=>t.pasteFromClipboard("start"))},{default:i(()=>[r(e("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=s=>t.input.datetime.start=s),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[u,t.input.datetime.start]])]),_:1},8,["value"])]),e("div",lt,[o(d,{label:"To",value:t.input.datetime.start,hidden_copy:"",onClear:a[4]||(a[4]=s=>t.clearInputDatetime("end")),onPaste:a[5]||(a[5]=s=>t.pasteFromClipboard("end"))},{default:i(()=>[r(e("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=s=>t.input.datetime.end=s),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[u,t.input.datetime.end]])]),_:1},8,["value"])])]),e("div",it,[e("div",dt,[o(b,{onClick:t.handleDiff,disabled:t.input.datetime.start===""||t.input.datetime.end===""},{default:i(()=>[nt]),_:1},8,["onClick","disabled"]),o(Y,{onClick:t.handleReset},null,8,["onClick"])])]),e("div",rt,[ut,e("div",pt,[o(d,{label:"Short",value:t.output.datetime.diff.hhmmss,hidden_paste:"",onClear:a[6]||(a[6]=s=>t.output.datetime.diff.hhmmss=""),onCopy:a[7]||(a[7]=s=>t.copyToClipboard(t.output.datetime.diff.hhmmss))},{default:i(()=>[e("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss",disabled:"",value:t.output.datetime.diff.hhmmss},null,8,mt)]),_:1},8,["value"])]),e("div",ht,[o(d,{label:"Long",value:t.output.datetime.diff.hhmmssiii,hidden_paste:"",onClear:a[8]||(a[8]=s=>t.output.datetime.diff.hhmmssiii=""),onCopy:a[9]||(a[9]=s=>t.copyToClipboard(t.output.datetime.diff.hhmmssiii))},{default:i(()=>[e("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss.iii",disabled:"",value:t.output.datetime.diff.hhmmssiii},null,8,ct)]),_:1},8,["value"])])])]),_:1}))}}),bt={class:"row mb-2"},yt={class:"col"},vt=["placeholder"],$t={class:"row mb-2"},Ct={class:"col-12"},gt=e("i",{class:"fa-solid fa-xmark"},null,-1),wt=e("i",{class:"fa-solid fa-copy"},null,-1),Dt=e("i",{class:"fa-solid fa-paste"},null,-1),Tt={class:"col-12"},kt={class:"row mb-2"},Yt={class:"col-12"},Ht=e("i",{class:"fa-solid fa-sliders"},null,-1),Ft=e("i",{class:"fa-solid fa-sliders"},null,-1),St=e("i",{class:"fa-solid fa-copy"},null,-1),It=e("i",{class:"fa-solid fa-paste"},null,-1),Mt=e("i",{class:"fa-solid fa-sliders"},null,-1),Vt=e("i",{class:"fa-solid fa-copy"},null,-1),At={class:"row mb-2"},Bt=e("div",{class:"col-md-3"},"Date Time",-1),Et={class:"col"},Nt=["value"],Rt={class:"col"},Ot=["value"];const Ut={class:"row mb-2"},Pt=e("div",{class:"col-md-3"},"Difference Date Time",-1),Lt={class:"col"},jt=["value"],qt={class:"col"},zt=["value"],Gt={mixins:[g,w,D,M],data(){return{input:{paragraph:{placeholder:`2023-03-22 15:21:20,900 INFO  readLoveFile Start
2023-03-22 15:21:21,197 INFO  encoding
2023-03-22 15:21:21,197 ERROR  get VIRUS`}},output:{datetime:{start:"",end:"",diff_by_time:{short:{time:""},long:{time:""}}}},origin:null}},methods:{async handleDiff(){let l={start:"",end:""},t=await this.input.paragraph.value.replaceAll("\r",""),a=t.split(`
`);if(!t)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let s=a.filter(R=>R),n=s[0],p=s[s.length-1],v=/^\d{4}[\-\_\/]\d{2}[\-\_\/]\d{2} \d{2}:\d{2}:\d{2}[,\.]\d{3}/;if(!n||!p)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let m=n.match(v);m&&m.length>0?n=m[0].replace(",","."):n="";let f=p.match(v);if(f&&f.length>0?p=f[0].replace(",","."):p="",!n||!p)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;this.output.datetime.start=n,this.output.datetime.end=p,l.start=new Date(this.output.datetime.start),l.end=new Date(this.output.datetime.end);let T=l.start.getTime(),V=l.end.getTime()-T,H=new Date(V),A="hh:mm:ss",B="hh:mm:ss.iii",E=await c(A,H),N=await c(B,H);this.output.datetime.diff_by_time.short.time=E,this.output.datetime.diff_by_time.long.time=N},clearInputDatetime(){this.input.paragraph.value=""},async pasteFromClipboard(){let l=this;await this.pasteToObject(l.input.paragraph,"value")},async handleDiffAndCopy(){await this.handleDiff(),await this.copy(this.output.datetime.diff_by_time.short.time)},async pasteFromClipboardAndDiff(){await this.pasteFromClipboard(),await this.handleDiffAndCopy()}}},Jt=y({...Gt,__name:"DiffFromLogFormat",setup(l){return(t,a)=>(h(),$(C,{header_label:"Diff from Log Format"},{default:i(()=>[e("div",bt,[e("div",yt,[r(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=s=>t.input.paragraph.value=s),rows:"15",class:"form-control",placeholder:t.input.paragraph.placeholder},null,8,vt),[[u,t.input.paragraph.value]])])]),e("div",$t,[e("div",Ct,[o(k,{class:"me-1",onClick:t.clearInputDatetime,disabled:!t.input.paragraph.value},{default:i(()=>[gt]),_:1},8,["onClick","disabled"]),o(k,{class:"me-1",disabled:!t.input.paragraph.value,onClick:a[1]||(a[1]=s=>t.copy(t.input.paragraph.value))},{default:i(()=>[wt]),_:1},8,["disabled"]),o(k,{class:"me-1",onClick:t.pasteFromClipboard},{default:i(()=>[Dt]),_:1},8,["onClick"])])]),(h(),S(O,null,U([1,2,3,4,5],s=>e("div",{class:"row mb-2",key:s},[e("div",Tt,[o(I,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])])),64)),e("div",kt,[e("div",Yt,[o(b,{onClick:t.handleDiff,disabled:!t.input.paragraph.value},{default:i(()=>[Ht]),_:1},8,["onClick","disabled"]),o(b,{onClick:t.handleDiffAndCopy,disabled:!t.input.paragraph.value},{default:i(()=>[Ft,_(" ➡ "),St]),_:1},8,["onClick","disabled"]),o(b,{onClick:t.pasteFromClipboardAndDiff},{default:i(()=>[It,_(" ➡ "),Mt,_(" ➡ "),Vt]),_:1},8,["onClick"]),o(Y,{onClick:t.handleReset},null,8,["onClick"])])]),e("div",At,[Bt,e("div",Et,[o(d,{label:"From",value:t.output.datetime.start,hidden_clear:"",hidden_paste:"",onCopy:a[2]||(a[2]=s=>t.copyToClipboard(t.output.datetime.start))},{default:i(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.start,placeholder:"HH:mm:ss(.iii)"},null,8,Nt)]),_:1},8,["value"])]),e("div",Rt,[o(d,{label:"To",value:t.output.datetime.end,hidden_clear:"",hidden_paste:"",onCopy:a[3]||(a[3]=s=>t.copyToClipboard(t.output.datetime.end))},{default:i(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.end,placeholder:"HH:mm:ss(.iii)"},null,8,Ot)]),_:1},8,["value"])]),F("",!0),F("",!0)]),e("div",Ut,[Pt,e("div",Lt,[o(d,{label:"Short",value:t.output.datetime.diff_by_time.short.time,hidden_clear:"",hidden_paste:"",onCopy:a[6]||(a[6]=s=>t.copyToClipboard(t.output.datetime.diff_by_time.short.time))},{default:i(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.diff_by_time.short.time,placeholder:"HH:mm:ss"},null,8,jt)]),_:1},8,["value"])]),e("div",qt,[o(d,{label:"Long",value:t.output.datetime.diff_by_time.long.time,hidden_clear:"",hidden_paste:"",onCopy:a[7]||(a[7]=s=>t.copyToClipboard(t.output.datetime.diff_by_time.long.time))},{default:i(()=>[e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.diff_by_time.long.time,placeholder:"HH:mm:ss.iii"},null,8,zt)]),_:1},8,["value"])])])]),_:1}))}}),Kt={class:"row mb-2"},Qt={class:"col"},Wt=["placeholder"],Xt={class:"row mb-2"},Zt={class:"col-md-12"},xt=["disabled"],te=e("i",{class:"fa-solid fa-xmark"},null,-1),ee=[te],ae=["disabled"],se=e("i",{class:"fa-solid fa-copy"},null,-1),oe=[se],le=e("i",{class:"fa-solid fa-paste"},null,-1),ie=[le],de={class:"row mb-2"},ne={class:"col-md-12"},re={class:"row mb-2"},ue={class:"col-md-12"},pe=["disabled"],me=["disabled"],he=e("i",{class:"fa-solid fa-copy"},null,-1),ce=e("i",{class:"fa-solid fa-paste"},null,-1),fe=e("i",{class:"fa-solid fa-copy"},null,-1),_e=e("i",{class:"fa-solid fa-xmark"},null,-1),be=[_e],ye={class:"row mb-2"},ve={class:"col input-group"},$e=e("span",{class:"input-group-text"},"Total",-1),Ce=["placeholder","value"],ge=["textContent"],we=e("i",{class:"fa-solid fa-copy"},null,-1),De=[we],Te={mixins:[g,w,D,M],data(){return{input:{paragraph:{placeholder:`10
20
30
40`},trim:{value:" "}},output:{total:{value:0,placeholder:"100",label:"0"}},origin:null}},methods:{async handleSum(){let l=0;await this.commonLinesMapAction(t=>{try{if(isNaN(t)||t==="")return;l+=parseFloat(t)}catch(a){console.error("Error parsing"),console.error({value:t,error:a})}},!1),this.output.total.value=l,this.output.total.label=L(l)},clearInputDatetime(){this.input.paragraph.value=""},async pasteFromClipboard(){await this.pasteToObject(this.input.paragraph,"value")},async handleSumAndCopy(){await this.handleSum(),await this.copy(this.output.total.value)},async pasteFromClipboardAndDiff(){await this.pasteFromClipboard(),await this.handleSumAndCopy()}}},ke=y({...Te,__name:"NumberSum",setup(l){return(t,a)=>(h(),$(C,{header_label:"Total"},{default:i(()=>[e("div",Kt,[e("div",Qt,[r(e("textarea",{"onUpdate:modelValue":a[0]||(a[0]=s=>t.input.paragraph.value=s),rows:"15",class:"form-control",placeholder:t.input.paragraph.placeholder},null,8,Wt),[[u,t.input.paragraph.value]])])]),e("div",Xt,[e("div",Zt,[e("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:a[1]||(a[1]=(...s)=>t.clearInputDatetime&&t.clearInputDatetime(...s)),disabled:!t.input.paragraph.value},ee,8,xt),e("button",{type:"button",class:"btn btn-outline-primary me-1",disabled:!t.input.paragraph.value,onClick:a[2]||(a[2]=s=>t.copy(t.input.paragraph.value))},oe,8,ae),e("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:a[3]||(a[3]=(...s)=>t.pasteFromClipboard&&t.pasteFromClipboard(...s))},ie)])]),e("div",de,[e("div",ne,[o(I,{onHandleTrim:t.handleTrim,onHandleTrimStart:t.handleTrimStart,onHandleTrimEnd:t.handleTrimEnd},null,8,["onHandleTrim","onHandleTrimStart","onHandleTrimEnd"])])]),e("div",re,[e("div",ue,[e("button",{type:"button",class:"btn btn-primary me-1",onClick:a[4]||(a[4]=(...s)=>t.handleSum&&t.handleSum(...s)),disabled:!t.input.paragraph.value}," Sum ",8,pe),e("button",{type:"button",class:"btn btn-primary me-1",onClick:a[5]||(a[5]=(...s)=>t.handleSumAndCopy&&t.handleSumAndCopy(...s)),disabled:!t.input.paragraph.value},[_(" Sum ➡ "),he],8,me),e("button",{type:"button",class:"btn btn-primary me-1",onClick:a[6]||(a[6]=(...s)=>t.pasteFromClipboardAndDiff&&t.pasteFromClipboardAndDiff(...s))},[ce,_(" ➡ Sum ➡ "),fe]),e("button",{type:"button",class:"btn btn-secondary me-1",onClick:a[7]||(a[7]=(...s)=>t.handleReset&&t.handleReset(...s))},be)])]),e("div",ye,[e("div",ve,[$e,e("input",{type:"text",class:"form-control",disabled:"",placeholder:t.output.total.placeholder,value:t.output.total.value},null,8,Ce),e("span",{class:"input-group-text",textContent:P(t.output.total.label)},null,8,ge),e("button",{type:"button",class:"btn btn-outline-primary",onClick:a[8]||(a[8]=s=>t.copyToClipboard(t.output.total.value))},De)])])]),_:1}))}}),Ye={class:""},He={class:"row"},Fe={class:"col"},Se={class:"row"},Ie={class:"col"},Me={class:"row"},Ve={class:"col"},Ae={class:"row"},Be={class:"col"},Qe=y({__name:"Index",setup(l){return(t,a)=>(h(),S("div",Ye,[e("div",He,[e("div",Fe,[o(et)])]),e("div",Se,[e("div",Ie,[o(_t)])]),e("div",Me,[e("div",Ve,[o(Jt)])]),e("div",Ae,[e("div",Be,[o(ke)])])]))}});export{Qe as default};
