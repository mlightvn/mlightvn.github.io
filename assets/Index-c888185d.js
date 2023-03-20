import{o as h,h as g,w as $,a as t,k as f,v as _,f as b,c as F,b as y}from"./index-9edc2fe1.js";import{c as r}from"./index-6ee0056c.js";import{_ as v}from"./Card-4b54c32f.js";import{_ as D}from"./CopyMixin-2d675881.js";import{_ as w}from"./PasteMixin-30109a2b.js";import{l as m}from"./lodash-026a56df.js";const I={class:"row mb-2"},S=t("div",{class:"col-md-3"},"Input Date Time",-1),R={class:"col input-group"},V=t("span",{class:"input-group-text"},"From",-1),B=["disabled"],U=t("i",{class:"fa-solid fa-xmark"},null,-1),A=[U],L=t("i",{class:"fa-solid fa-paste"},null,-1),N=[L],E={class:"col input-group"},j=t("span",{class:"input-group-text"},"To",-1),O=["disabled"],q=t("i",{class:"fa-solid fa-xmark"},null,-1),z=[q],G=t("i",{class:"fa-solid fa-paste"},null,-1),J=[G],K={class:"row mb-2"},P={class:"col text-end"},Q=["disabled"],W=t("i",{class:"fa-solid fa-sliders"},null,-1),X=[W],Z=t("i",{class:"fa-solid fa-xmark"},null,-1),x=[Z],tt={class:"row mb-2"},st=t("div",{class:"col-md-3"},"Difference Date Time",-1),et={class:"col input-group"},it=t("span",{class:"input-group-text"},"Short",-1),ot=["value"],at=["disabled"],nt=t("i",{class:"fa-solid fa-xmark"},null,-1),lt=[nt],dt=t("i",{class:"fa-solid fa-copy"},null,-1),ut=[dt],rt={class:"col input-group"},mt=t("span",{class:"input-group-text"},"Long",-1),pt=["value"],ft=["disabled"],_t=t("i",{class:"fa-solid fa-xmark"},null,-1),ht=[_t],ct=t("i",{class:"fa-solid fa-copy"},null,-1),bt=[ct],yt={mixins:[D,w],data(){return{input:{datetime:{start:"",end:""}},output:{datetime:{diff:{full:"",hhmmss:"",hhmmssiii:""}}},default_values:null}},methods:{async handleDiff(){let o=this.input.datetime.start.replace(",","."),s=this.input.datetime.end.replace(",",".");if(o===""||s==="")return await this.$snackbar.add({type:"warning",text:"No data to diff"}),!1;let e=await new Date(o),i=await new Date(s),a=await e.getTime(),u=await i.getTime()-a,l=await new Date(u),d=await this.get_formatted_time("hh:mm:ss",l),p=await this.get_formatted_time("hh:mm:ss.iii",l);this.output.datetime.diff.hhmmss=d,this.output.datetime.diff.hhmmssiii=p,await this.copyToClipboard(this.output.datetime.diff.hhmmss)},handleReset(){this.input=r(this.default_values.input),this.output=r(this.default_values.output)},get_formatted_time:async(o="YYYY/MM/DD hh:mm:ss.iii",s=new Date)=>await[["YYYY",s.getFullYear()],["MM",s.getMonth()+1],["DD",s.getDate()],["hh",s.getUTCHours()],["mm",s.getMinutes()],["ss",s.getSeconds()],["iii",s.getMilliseconds()]].reduce((e,i)=>e.replace(i[0],`${i[1]}`.padStart(i[0].length,"0")),o),clearInputDatetime(o){this.input.datetime[o]=""},pasteFromClipboard(o="start"){this.paste(s=>this.input.datetime[o]=s)}},created(){this.default_values={input:r(this.input),output:r(this.output)}}},gt=Object.assign(yt,{__name:"DiffByStartEndDateTime",setup(o){return(s,e)=>(h(),g(v,{header_label:"Date Differences"},{default:$(()=>[t("div",I,[S,t("div",R,[V,f(t("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=i=>s.input.datetime.start=i),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[_,s.input.datetime.start]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.datetime.start,onClick:e[1]||(e[1]=i=>s.clearInputDatetime("start"))},A,8,B),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[2]||(e[2]=i=>s.pasteFromClipboard("start"))},N)]),t("div",E,[j,f(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=i=>s.input.datetime.end=i),class:"form-control",placeholder:"YYYY-MM-DD HH:mm:ss(.iii)"},null,512),[[_,s.input.datetime.end]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.datetime.end,onClick:e[4]||(e[4]=i=>s.clearInputDatetime("end"))},z,8,O),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[5]||(e[5]=i=>s.pasteFromClipboard("end"))},J)])]),t("div",K,[t("div",P,[t("button",{type:"button",class:"btn btn-primary me-1",onClick:e[6]||(e[6]=(...i)=>s.handleDiff&&s.handleDiff(...i)),disabled:s.input.datetime.start===""||s.input.datetime.end===""},X,8,Q),t("button",{type:"button",class:"btn btn-secondary",onClick:e[7]||(e[7]=(...i)=>s.handleReset&&s.handleReset(...i))},x)])]),t("div",tt,[st,t("div",et,[it,t("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss",disabled:"",value:s.output.datetime.diff.hhmmss,onClick:e[8]||(e[8]=i=>s.copyToClipboard(s.output.datetime.diff.hhmmss))},null,8,ot),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.output.datetime.diff.hhmmss,onClick:e[9]||(e[9]=i=>s.output.datetime.diff.hhmmss="")},lt,8,at),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[10]||(e[10]=i=>s.copyToClipboard(s.output.datetime.diff.hhmmss))},ut)]),t("div",rt,[mt,t("input",{type:"text",class:"form-control",placeholder:"HH:mm:ss.iii",disabled:"",value:s.output.datetime.diff.hhmmssiii,onClick:e[11]||(e[11]=i=>s.copyToClipboard(s.output.datetime.diff.hhmmssiii))},null,8,pt),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.output.datetime.diff.hhmmssiii,onClick:e[12]||(e[12]=i=>s.output.datetime.diff.hhmmssiii="")},ht,8,ft),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[13]||(e[13]=i=>s.copyToClipboard(s.output.datetime.diff.hhmmssiii))},bt)])])]),_:1}))}}),$t={class:"row mb-2"},vt={class:"col"},Dt={class:"row mb-2"},wt={class:"col-md-12"},Ct=["disabled"],kt=t("i",{class:"fa-solid fa-xmark"},null,-1),Yt=[kt],Tt=["disabled"],Mt=t("i",{class:"fa-solid fa-copy"},null,-1),Ht=[Mt],Ft=t("i",{class:"fa-solid fa-paste"},null,-1),It=[Ft],St={class:"row mb-2"},Rt={class:"col-md-12"},Vt=["disabled"],Bt=t("i",{class:"fa-solid fa-sliders"},null,-1),Ut=[Bt],At=t("i",{class:"fa-solid fa-paste"},null,-1),Lt=t("i",{class:"fa-solid fa-sliders"},null,-1),Nt=t("i",{class:"fa-solid fa-copy"},null,-1),Et=t("i",{class:"fa-solid fa-xmark"},null,-1),jt=[Et],Ot={class:"row mb-2"},qt=t("div",{class:"col-md-3"},"Date Time",-1),zt={class:"col input-group"},Gt=t("span",{class:"input-group-text"},"From",-1),Jt=["value"],Kt=t("i",{class:"fa-solid fa-copy"},null,-1),Pt=[Kt],Qt={class:"col input-group"},Wt=t("span",{class:"input-group-text"},"To",-1),Xt=["value"],Zt=t("i",{class:"fa-solid fa-copy"},null,-1),xt=[Zt],ts={class:"row mb-2"},ss=t("div",{class:"col-md-3"},"Difference Date Time",-1),es={class:"col input-group"},is=t("span",{class:"input-group-text"},"Short",-1),os=["value"],as=t("i",{class:"fa-solid fa-copy"},null,-1),ns=[as],ls={class:"col input-group"},ds=t("span",{class:"input-group-text"},"Long",-1),us=["value"],rs=t("i",{class:"fa-solid fa-copy"},null,-1),ms=[rs],ps={mixins:[D,w],data(){return{input:{log_format_data:""},output:{datetime:{start:"",end:"",diff_by_time:{short:"",long:""}}},origin:null}},methods:{async handleDiff(){let o={start:"",end:""},s=await this.input.log_format_data.replaceAll("\r",""),e=s.split(`
`);if(!s)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let i=e.filter(H=>H),a=i[0],n=i[i.length-1],u=/^\d{4}[\-\_\/]\d{2}[\-\_\/]\d{2} \d{2}:\d{2}:\d{2}[,\.]\d{3}/;if(!a||!n)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;let l=a.match(u);l&&l.length>0?a=l[0].replace(",","."):a="";let d=n.match(u);if(d&&d.length>0?n=d[0].replace(",","."):n="",!a||!n)return this.$snackbar.add({type:"warning",text:"Incorrect date time format"}),!1;this.output.datetime.start=a,this.output.datetime.end=n,o.start=new Date(this.output.datetime.start),o.end=new Date(this.output.datetime.end);let p=o.start.getTime(),C=o.end.getTime()-p,c=new Date(C),k="hh:mm:ss",Y="hh:mm:ss.iii",T=await this.get_formatted_time(k,c),M=await this.get_formatted_time(Y,c);this.output.datetime.diff_by_time.short=T,this.output.datetime.diff_by_time.long=M},handleReset(){this.input=m.cloneDeep(this.origin.input),this.output=m.cloneDeep(this.origin.output)},get_formatted_time:async(o="YYYY/MM/DD hh:mm:ss.iii",s=new Date)=>await[["YYYY",s.getFullYear()],["MM",s.getMonth()+1],["DD",s.getDate()],["hh",s.getUTCHours()],["mm",s.getMinutes()],["ss",s.getSeconds()],["iii",s.getMilliseconds()]].reduce((e,i)=>e.replace(i[0],`${i[1]}`.padStart(i[0].length,"0")),o),clearInputDatetime(){this.input.log_format_data=""},async pasteFromClipboard(){await this.paste(o=>this.input.log_format_data=o)},async pasteFromClipboardAndDiff(){await this.pasteFromClipboard(),await this.handleDiff(),await this.copy(this.output.datetime.diff_by_time.short)}},created:function(){this.origin={input:m.cloneDeep(this.input),output:m.cloneDeep(this.output)}}},fs=Object.assign(ps,{__name:"DiffFromLogFormat",setup(o){return(s,e)=>(h(),g(v,{header_label:"Diff from Log Format"},{default:$(()=>[t("div",$t,[t("div",vt,[f(t("textarea",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.input.log_format_data=i),rows:"15",class:"form-control"},null,512),[[_,s.input.log_format_data]])])]),t("div",Dt,[t("div",wt,[t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:e[1]||(e[1]=(...i)=>s.clearInputDatetime&&s.clearInputDatetime(...i)),disabled:!s.input.log_format_data},Yt,8,Ct),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.log_format_data,onClick:e[2]||(e[2]=i=>s.copy(s.input.log_format_data))},Ht,8,Tt),t("button",{type:"button",class:"btn btn-outline-primary me-1",onClick:e[3]||(e[3]=(...i)=>s.pasteFromClipboard&&s.pasteFromClipboard(...i))},It)])]),t("div",St,[t("div",Rt,[t("button",{type:"button",class:"btn btn-primary me-1",onClick:e[4]||(e[4]=(...i)=>s.handleDiff&&s.handleDiff(...i)),disabled:!s.input.log_format_data},Ut,8,Vt),t("button",{type:"button",class:"btn btn-primary me-1",onClick:e[5]||(e[5]=(...i)=>s.pasteFromClipboardAndDiff&&s.pasteFromClipboardAndDiff(...i))},[At,b(" ➡ "),Lt,b(" ➡ "),Nt]),t("button",{type:"button",class:"btn btn-secondary me-1",onClick:e[6]||(e[6]=(...i)=>s.handleReset&&s.handleReset(...i))},jt)])]),t("div",Ot,[qt,t("div",zt,[Gt,t("input",{type:"text",class:"form-control",disabled:"",value:s.output.datetime.start,placeholder:"HH:mm:ss(.iii)"},null,8,Jt),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[7]||(e[7]=i=>s.copyToClipboard(s.output.datetime.start))},Pt)]),t("div",Qt,[Wt,t("input",{type:"text",class:"form-control",disabled:"",value:s.output.datetime.end,placeholder:"HH:mm:ss(.iii)"},null,8,Xt),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[8]||(e[8]=i=>s.copyToClipboard(s.output.datetime.end))},xt)])]),t("div",ts,[ss,t("div",es,[is,t("input",{type:"text",class:"form-control",disabled:"",value:s.output.datetime.diff_by_time.short,placeholder:"HH:mm:ss"},null,8,os),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[9]||(e[9]=i=>s.copyToClipboard(s.output.datetime.diff_by_time.short))},ns)]),t("div",ls,[ds,t("input",{type:"text",class:"form-control",disabled:"",value:s.output.datetime.diff_by_time.long,placeholder:"HH:mm:ss.iii"},null,8,us),t("button",{type:"button",class:"btn btn-outline-primary",onClick:e[10]||(e[10]=i=>s.copyToClipboard(s.output.datetime.diff_by_time.long))},ms)])])]),_:1}))}}),_s={class:""},hs={class:"row mb-3"},cs={class:"col"},bs={class:"row mb-3"},ys={class:"col"},Ys={__name:"Index",setup(o){return(s,e)=>(h(),F("div",_s,[t("div",hs,[t("div",cs,[y(gt)])]),t("div",bs,[t("div",ys,[y(fs)])])]))}};export{Ys as default};
