import{o as h,h as g,w as v,a as e,l as f,v as _,f as b,c as H,b as y}from"./index-ce911ff9.js";import{c as r}from"./index-6ee0056c.js";import{_ as $}from"./Card-dd27a835.js";import{_ as D}from"./CopyMixin-3e329cef.js";import{_ as w}from"./PasteMixin-30109a2b.js";import{l as m}from"./lodash-026a56df.js";const I={class:"row mb-2"},R=e("div",{class:"col-md-3"},"Input Date Time",-1),S={class:"col input-group"},V=e("span",{class:"input-group-text"},"From",-1),N=["disabled"],U=e("i",{class:"fa-solid fa-xmark"},null,-1),B=[U],L=e("i",{class:"fa-solid fa-paste"},null,-1),O=[L],A={class:"col input-group"},E=e("span",{class:"input-group-text"},"To",-1),j=["disabled"],q=e("i",{class:"fa-solid fa-xmark"},null,-1),z=[q],G=e("i",{class:"fa-solid fa-paste"},null,-1),J=[G],K={class:"row mb-2"},P={class:"col text-end"},Q=["disabled"],W=e("i",{class:"fa-solid fa-sliders"},null,-1),X=[W],Z=e("i",{class:"fa-solid fa-xmark"},null,-1),x=[Z],tt={class:"row mb-2"},et=e("div",{class:"col-md-3"},"Difference Date Time",-1),st={class:"col input-group"},it=e("span",{class:"input-group-text"},"Short",-1),ot=["value"],at=["disabled"],nt=e("i",{class:"fa-solid fa-xmark"},null,-1),lt=[nt],dt=e("i",{class:"fa-solid fa-copy"},null,-1),ut=[dt],rt={class:"col input-group"},mt=e("span",{class:"input-group-text"},"Long",-1),pt=["value"],ft=["disabled"],_t=e("i",{class:"fa-solid fa-xmark"},null,-1),ht=[_t],ct=e("i",{class:"fa-solid fa-copy"},null,-1),bt=[ct],yt={mixins:[D,w],data(){return{input:{datetime:{start:"",end:""}},output:{datetime:{diff:{full:"",hhmmss:"",hhmmssiii:""}}},default_values:null}},methods:{async handleDiff(){let o=this.input.datetime.start.replace(",","."),t=this.input.datetime.end.replace(",",".");if(o===""||t==="")return await this.$snackbar.add({type:"warning",text:"No data to diff"}),!1;let s=await new Date(o),i=await new Date(t),a=await s.getTime(),u=await i.getTime()-a,l=await new Date(u),d=await this.get_formatted_time("hh:mm:ss",l),p=await this.get_formatted_time("hh:mm:ss.iii",l);this.output.datetime.diff.hhmmss=d,this.output.datetime.diff.hhmmssiii=p,await this.copyToClipboard(this.output.datetime.diff.hhmmss)},handleReset(){this.input=r(this.default_values.input),this.output=r(this.default_values.output)},get_formatted_time:async(o="YYYY/MM/DD hh:mm:ss.iii",t=new Date)=>await[["YYYY",t.getFullYear()],["MM",t.getMonth()+1],["DD",t.getDate()],["hh",t.getUTCHours()],["mm",t.getMinutes()],["ss",t.getSeconds()],["iii",t.getMilliseconds()]].reduce((s,i)=>s.replace(i[0],`${i[1]}`.padStart(i[0].length,"0")),o),clearInputDatetime(o){this.input.datetime[o]=""},pasteFromClipboard(o="start"){this.paste(t=>this.input.datetime[o]=t)}},created(){this.default_values={input:r(this.input),output:r(this.output)}}},gt=Object.assign(yt,{__name:"DiffByStartEndDateTime",setup(o){return(t,s)=>(h(),g($,{header_label:"Date Differences"},{default:v(()=>[e("div",I,[R,e("div",S,[V,f(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=i=>t.input.datetime.start=i),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[_,t.input.datetime.start]]),e("button",{type:"button",class:"btn btn-outline-primary",disabled:!t.input.datetime.start,onClick:s[1]||(s[1]=i=>t.clearInputDatetime("start"))},B,8,N),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[2]||(s[2]=i=>t.pasteFromClipboard("start"))},O)]),e("div",A,[E,f(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=i=>t.input.datetime.end=i),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[_,t.input.datetime.end]]),e("button",{type:"button",class:"btn btn-outline-primary",disabled:!t.input.datetime.end,onClick:s[4]||(s[4]=i=>t.clearInputDatetime("end"))},z,8,j),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[5]||(s[5]=i=>t.pasteFromClipboard("end"))},J)])]),e("div",K,[e("div",P,[e("button",{type:"button",class:"btn btn-primary me-1",onClick:s[6]||(s[6]=(...i)=>t.handleDiff&&t.handleDiff(...i)),disabled:t.input.datetime.start===""||t.input.datetime.end===""},X,8,Q),e("button",{type:"button",class:"btn btn-secondary",onClick:s[7]||(s[7]=(...i)=>t.handleReset&&t.handleReset(...i))},x)])]),e("div",tt,[et,e("div",st,[it,e("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss",disabled:"",value:t.output.datetime.diff.hhmmss,onClick:s[8]||(s[8]=i=>t.copyToClipboard(t.output.datetime.diff.hhmmss))},null,8,ot),e("button",{type:"button",class:"btn btn-outline-primary",disabled:!t.output.datetime.diff.hhmmss,onClick:s[9]||(s[9]=i=>t.output.datetime.diff.hhmmss="")},lt,8,at),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[10]||(s[10]=i=>t.copyToClipboard(t.output.datetime.diff.hhmmss))},ut)]),e("div",rt,[mt,e("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss.iii",disabled:"",value:t.output.datetime.diff.hhmmssiii,onClick:s[11]||(s[11]=i=>t.copyToClipboard(t.output.datetime.diff.hhmmssiii))},null,8,pt),e("button",{type:"button",class:"btn btn-outline-primary",disabled:!t.output.datetime.diff.hhmmssiii,onClick:s[12]||(s[12]=i=>t.output.datetime.diff.hhmmssiii="")},ht,8,ft),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[13]||(s[13]=i=>t.copyToClipboard(t.output.datetime.diff.hhmmssiii))},bt)])])]),_:1}))}}),vt={class:"row mb-2"},$t={class:"col"},Dt=["placeholder"],wt={class:"row mb-2"},Ct={class:"col-md-12"},kt=["disabled"],Yt=e("i",{class:"fa-solid fa-xmark"},null,-1),Tt=[Yt],Ft=["disabled"],Mt=e("i",{class:"fa-solid fa-copy"},null,-1),Ht=[Mt],It=e("i",{class:"fa-solid fa-paste"},null,-1),Rt=[It],St={class:"row mb-2"},Vt={class:"col-md-12"},Nt=["disabled"],Ut=e("i",{class:"fa-solid fa-sliders"},null,-1),Bt=[Ut],Lt=e("i",{class:"fa-solid fa-paste"},null,-1),Ot=e("i",{class:"fa-solid fa-sliders"},null,-1),At=e("i",{class:"fa-solid fa-copy"},null,-1),Et=e("i",{class:"fa-solid fa-xmark"},null,-1),jt=[Et],qt={class:"row mb-2"},zt=e("div",{class:"col-md-3"},"Date Time",-1),Gt={class:"col input-group"},Jt=e("span",{class:"input-group-text"},"From",-1),Kt=["value"],Pt=e("i",{class:"fa-solid fa-copy"},null,-1),Qt=[Pt],Wt={class:"col input-group"},Xt=e("span",{class:"input-group-text"},"To",-1),Zt=["value"],xt=e("i",{class:"fa-solid fa-copy"},null,-1),te=[xt],ee={class:"row mb-2"},se=e("div",{class:"col-md-3"},"Difference Date Time",-1),ie={class:"col input-group"},oe=e("span",{class:"input-group-text"},"Short",-1),ae=["value"],ne=e("i",{class:"fa-solid fa-copy"},null,-1),le=[ne],de={class:"col input-group"},ue=e("span",{class:"input-group-text"},"Long",-1),re=["value"],me=e("i",{class:"fa-solid fa-copy"},null,-1),pe=[me],fe={mixins:[D,w],data(){return{input:{log_format_data:{value:"",placeholder:`2023-03-22 15:21:20,900 INFO  readLoveFile Start
2023-03-22 15:21:21,197 INFO  encoding
2023-03-22 15:21:21,197 ERROR  get VIRUS`}},output:{datetime:{start:"",end:"",diff_by_time:{short:{time:""},long:{time:""}}}},origin:null}},methods:{async handleDiff(){let o={start:"",end:""},t=await this.input.log_format_data.value.replaceAll("\r",""),s=t.split(`
`);if(!t)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let i=s.filter(M=>M),a=i[0],n=i[i.length-1],u=/^\d{4}[\-\_\/]\d{2}[\-\_\/]\d{2} \d{2}:\d{2}:\d{2}[,\.]\d{3}/;if(!a||!n)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let l=a.match(u);l&&l.length>0?a=l[0].replace(",","."):a="";let d=n.match(u);if(d&&d.length>0?n=d[0].replace(",","."):n="",!a||!n)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;this.output.datetime.start=a,this.output.datetime.end=n,o.start=new Date(this.output.datetime.start),o.end=new Date(this.output.datetime.end);let p=o.start.getTime(),C=o.end.getTime()-p,c=new Date(C),k="hh:mm:ss",Y="hh:mm:ss.iii",T=await this.get_formatted_time(k,c),F=await this.get_formatted_time(Y,c);this.output.datetime.diff_by_time.short.time=T,this.output.datetime.diff_by_time.long.time=F},handleReset(){this.input=m.cloneDeep(this.origin.input),this.output=m.cloneDeep(this.origin.output)},get_formatted_time:async(o="YYYY/MM/DD hh:mm:ss.iii",t=new Date)=>await[["YYYY",t.getFullYear()],["MM",t.getMonth()+1],["DD",t.getDate()],["hh",t.getUTCHours()],["mm",t.getMinutes()],["ss",t.getSeconds()],["iii",t.getMilliseconds()]].reduce((s,i)=>s.replace(i[0],`${i[1]}`.padStart(i[0].length,"0")),o),clearInputDatetime(){this.input.log_format_data.value=""},async pasteFromClipboard(){let o=this;await this.paste(t=>o.input.log_format_data.value=t)},async pasteFromClipboardAndDiff(){await this.pasteFromClipboard(),await this.handleDiff(),await this.copy(this.output.datetime.diff_by_time.short.time)}},created:function(){this.origin={input:m.cloneDeep(this.input),output:m.cloneDeep(this.output)}}},_e=Object.assign(fe,{__name:"DiffFromLogFormat",setup(o){return(t,s)=>(h(),g($,{header_label:"Diff from Log Format"},{default:v(()=>[e("div",vt,[e("div",$t,[f(e("textarea",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.input.log_format_data.value=i),rows:"15",class:"form-control",placeholder:t.input.log_format_data.placeholder},null,8,Dt),[[_,t.input.log_format_data.value]])])]),e("div",wt,[e("div",Ct,[e("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[1]||(s[1]=(...i)=>t.clearInputDatetime&&t.clearInputDatetime(...i)),disabled:!t.input.log_format_data.value},Tt,8,kt),e("button",{type:"button",class:"btn btn-outline-primary",disabled:!t.input.log_format_data.value,onClick:s[2]||(s[2]=i=>t.copy(t.input.log_format_data.value))},Ht,8,Ft),e("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:s[3]||(s[3]=(...i)=>t.pasteFromClipboard&&t.pasteFromClipboard(...i))},Rt)])]),e("div",St,[e("div",Vt,[e("button",{type:"button",class:"btn btn-primary me-1",onClick:s[4]||(s[4]=(...i)=>t.handleDiff&&t.handleDiff(...i)),disabled:!t.input.log_format_data.value},Bt,8,Nt),e("button",{type:"button",class:"btn btn-primary me-1",onClick:s[5]||(s[5]=(...i)=>t.pasteFromClipboardAndDiff&&t.pasteFromClipboardAndDiff(...i))},[Lt,b(" ➡ "),Ot,b(" ➡ "),At]),e("button",{type:"button",class:"btn btn-secondary me-1",onClick:s[6]||(s[6]=(...i)=>t.handleReset&&t.handleReset(...i))},jt)])]),e("div",qt,[zt,e("div",Gt,[Jt,e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.start,placeholder:"HH:mm:ss(.iii)"},null,8,Kt),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[7]||(s[7]=i=>t.copyToClipboard(t.output.datetime.start))},Qt)]),e("div",Wt,[Xt,e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.end,placeholder:"HH:mm:ss(.iii)"},null,8,Zt),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[8]||(s[8]=i=>t.copyToClipboard(t.output.datetime.end))},te)])]),e("div",ee,[se,e("div",ie,[oe,e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.diff_by_time.short.time,placeholder:"HH:mm:ss"},null,8,ae),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[9]||(s[9]=i=>t.copyToClipboard(t.output.datetime.diff_by_time.short.time))},le)]),e("div",de,[ue,e("input",{type:"text",class:"form-control",disabled:"",value:t.output.datetime.diff_by_time.long.time,placeholder:"HH:mm:ss.iii"},null,8,re),e("button",{type:"button",class:"btn btn-outline-primary",onClick:s[10]||(s[10]=i=>t.copyToClipboard(t.output.datetime.diff_by_time.long.time))},pe)])])]),_:1}))}}),he={class:""},ce={class:"row mb-3"},be={class:"col"},ye={class:"row mb-3"},ge={class:"col"},Te={__name:"Index",setup(o){return(t,s)=>(h(),H("div",he,[e("div",ce,[e("div",be,[y(gt)])]),e("div",ye,[e("div",ge,[y(_e)])])]))}};export{Te as default};