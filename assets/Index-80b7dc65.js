import{o as e,h as C,w as p,a as t,l as m,c as l,F as u,g as c,u as f,t as d,x as $,v as y,f as g,b as v,e as N}from"./index-5b66cff4.js";import{_ as k}from"./CopyMixin.vue_vue_type_script_setup_true_lang-dfc15996.js";import{_ as w}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-3a3eb48c.js";import{_ as h}from"./Card-ce898755.js";import{_ as U}from"./PasteMixin.vue_vue_type_script_lang-30109a2b.js";import"./lodash-026a56df.js";const _={domain:{list:[{environment:"production",label:"本番",domain:"http://localhost:8080"},{environment:"staging",label:"ステージング",domain:"http://localhost:5174"},{environment:"development",label:"開発環境",domain:"http://localhost:5173"}],default:"http://localhost:8080"},menuitems:[{menuName:"Common",screens:[{id:"SCR_HOME",label:"Homepage",slug:"/"},{id:"UNAUTHORIZED",label:"Unauthenticated",slug:"/Unauthenticated"},{id:"LOGIN",label:"LOGIN",slug:"/login"}]},{menuName:"マスタ",screens:[{id:"SCR001",label:"Users",slug:"/SCR001"},{id:"SCR002",label:"Assets",slug:"/SCR002"},{id:"SCR002",label:"Products",slug:"/SCR003"},{id:"SCR004",label:"Profits & Losses",slug:"/SCR004"}]}]},I={class:"row mb-2"},O=t("div",{class:"col-md-2"},"Domain",-1),R={class:"col"},T=["value"],L=["textContent"],B={class:"input-group"},D=["value"],P=["disabled"],V=t("i",{class:"fa-solid fa-copy"},null,-1),F=[V],M={class:"row"},j=t("div",{class:"col-md-2"},"Original url",-1),E={class:"col input-group"},H=["disabled"],z=t("i",{class:"fa-solid fa-xmark"},null,-1),A=[z],G=["disabled"],Z=t("i",{class:"fa-solid fa-copy"},null,-1),q=[Z],J=t("i",{class:"fa-solid fa-paste"},null,-1),K=[J],Q=t("i",{class:"fa-solid fa-paste"},null,-1),W=t("i",{class:"fa-solid fa-play"},null,-1),X={class:"row"},Y=t("div",{class:"col-md-2"},"New url",-1),x={class:"col"},tt={class:"input-group"},st=["disabled"],ot=t("i",{class:"fa-solid fa-xmark"},null,-1),nt=[ot],et=["disabled"],lt=t("i",{class:"fa-solid fa-copy"},null,-1),it=[lt],at=["href","textContent"],rt={key:1},dt=t("i",{class:"fa-solid fa-play"},null,-1),ut=[dt],ct={mixins:[k,U,w],data(){return{input:{url_convert:{domain:_.domain.default,url:""}},output:{url_convert:{url:""}}}},methods:{async pasteToUrlConvertOriginalUrl(){await this.paste(i=>this.input.url_convert.url=i.replace(/[\r|\n]/g,""))},async handleUrlDomainConvert(){let i=this.input.url_convert.url;if(!i)return this.$snackbar.add({type:"warning",text:"Original URL is not a valid URL"}),!1;let s=await i.replace(/https?:\/\/(.*?)\//,"/"),n=this.input.url_convert.domain+s;this.output.url_convert.url=n},async handleUrlConvertByPaste(){await this.pasteToUrlConvertOriginalUrl(),await this.handleUrlDomainConvert()}}},pt=Object.assign(ct,{__name:"UrlDomainConvert",setup(i){return(s,n)=>(e(),C(h,{header_label:"Convert domain of url",class:"border-dark"},{footer:p(()=>[t("button",{type:"button",class:"btn btn-primary",onClick:n[10]||(n[10]=(...o)=>s.handleUrlDomainConvert&&s.handleUrlDomainConvert(...o))},ut)]),default:p(()=>[t("div",I,[O,t("div",R,[m(t("select",{class:"form-select","onUpdate:modelValue":n[0]||(n[0]=o=>s.input.url_convert.domain=o),size:"5"},[(e(!0),l(u,null,c(f(_).domain.list,(o,a)=>(e(),l("option",{key:a,value:o.domain},[t("span",{textContent:d(`[${o.label}] ${o.domain}`)},null,8,L)],8,T))),128))],512),[[$,s.input.url_convert.domain]]),t("div",B,[t("input",{type:"text",class:"form-control",readonly:"",disabled:"",value:s.input.url_convert.domain},null,8,D),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.url_convert.domain,onClick:n[1]||(n[1]=o=>s.copyToClipboard(s.input.url_convert.domain))},F,8,P)])])]),t("div",M,[j,t("div",E,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=o=>s.input.url_convert.url=o)},null,512),[[y,s.input.url_convert.url]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.url_convert.url,onClick:n[3]||(n[3]=o=>s.input.url_convert.url="")},A,8,H),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.url_convert.url,onClick:n[4]||(n[4]=o=>s.copyToClipboard(s.input.url_convert.url))},q,8,G),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[5]||(n[5]=(...o)=>s.pasteToUrlConvertOriginalUrl&&s.pasteToUrlConvertOriginalUrl(...o))},K),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[6]||(n[6]=(...o)=>s.handleUrlConvertByPaste&&s.handleUrlConvertByPaste(...o))},[Q,g(" ➡ "),W])])]),t("div",X,[Y,t("div",x,[t("div",tt,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[7]||(n[7]=o=>s.output.url_convert.url=o)},null,512),[[y,s.output.url_convert.url]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.output.url_convert.url,onClick:n[8]||(n[8]=o=>s.output.url_convert.url="")},nt,8,st),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.output.url_convert.url,onClick:n[9]||(n[9]=o=>s.copyToClipboard(s.output.url_convert.url))},it,8,et)]),t("div",null,[s.output.url_convert.url?(e(),l("a",{key:0,href:s.output.url_convert.url,textContent:d(s.output.url_convert.url),target:"_blank"},null,8,at)):(e(),l("span",rt," "))])])])]),_:1}))}}),_t={class:"row mb-3"},mt={class:"col-md-6"},ht={class:"row mb-2"},bt=t("div",{class:"col-md-2"},"Domain",-1),vt={class:"col"},ft=["value"],yt=["textContent"],Ct={class:"row"},$t=t("div",{class:"col-md-2"},"Menu id, label",-1),gt={class:"col"},kt={class:"input-group"},wt=["disabled"],Ut=t("i",{class:"fa-solid fa-xmark"},null,-1),St=[Ut],Nt=t("i",{class:"fa-solid fa-paste"},null,-1),It=[Nt],Ot=t("i",{class:"fa-solid fa-paste"},null,-1),Rt=t("i",{class:"fa-solid fa-search"},null,-1),Tt={class:"text-end"},Lt=["disabled"],Bt=t("i",{class:"fa fa-search"},null,-1),Dt=[Bt],Pt={class:"col"},Vt={class:"row"},Ft={class:"row"},Mt={class:"col h5 fw-bold"},jt=["textContent"],Et={class:"col-md-12"},Ht={class:"nav"},zt={class:"nav-item list-group-item-action m-1 p-1"},At=["href","textContent"],Gt={class:"float-end"},Zt=["onClick"],qt=t("i",{class:"fa-solid fa-copy"},null,-1),Jt=[qt],Kt=["onClick"],Qt=t("i",{class:"fa-solid fa-copy"},null,-1),Wt=[Qt],Xt={class:"row"},Yt={class:"row"},xt=["textContent"],ts={class:"col-md-12"},ss={class:"list-group"},os=["href","textContent"],ns={mixins:[k,U,w],data(){return{input:{domain:_.domain.default,search:""},output:{menuItems:[]}}},methods:{handleSearch:async function(){let i=this.input.search;if(!i)return this.$snackbar.add({type:"warning",text:"No input data for search"}),!1;let s=[];if(await _.menuitems.filter(async n=>{let o=await n.screens.filter(a=>a.id.toLowerCase()==i.toLowerCase()||a.label.toLowerCase().includes(i.toLowerCase()));o.length>0&&s.push({menuName:n.menuName,screens:o})}),this.output.menuItems=s,s.length===0)return this.$snackbar.add({type:"warning",text:"No search result data"}),!1},handleSearchByPasting:async function(){await this.pasteFromClipboardIntoInput("search"),await this.handleSearch()},async pasteFromClipboardIntoInput(i="search"){await this.paste(s=>this.input[i]=s.replace(/[\r|\n]/g,""))}}},us=Object.assign(ns,{__name:"Index",setup(i){return(s,n)=>(e(),l("div",null,[t("div",_t,[t("div",mt,[v(h,{header_label:"Filter"},{footer:p(()=>[t("div",Tt,[t("button",{class:"btn btn-primary",disabled:!s.input.search,onClick:n[5]||(n[5]=(...o)=>s.handleSearch&&s.handleSearch(...o))},Dt,8,Lt)])]),default:p(()=>[t("div",ht,[bt,t("div",vt,[m(t("select",{class:"form-select","onUpdate:modelValue":n[0]||(n[0]=o=>s.input.domain=o),size:"5"},[(e(!0),l(u,null,c(f(_).domain.list,(o,a)=>(e(),l("option",{key:a,value:o.domain},[t("span",{textContent:d(`[${o.label}] ${o.domain}`)},null,8,yt)],8,ft))),128))],512),[[$,s.input.domain]])])]),t("div",Ct,[$t,t("div",gt,[t("div",kt,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=o=>s.input.search=o)},null,512),[[y,s.input.search]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.search,onClick:n[2]||(n[2]=o=>s.input.search="")},St,8,wt),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[3]||(n[3]=o=>s.pasteFromClipboardIntoInput("search"))},It),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[4]||(n[4]=(...o)=>s.handleSearchByPasting&&s.handleSearchByPasting(...o))},[Ot,g(" ➡ "),Rt])])])])]),_:1})]),t("div",Pt,[v(pt)])]),s.output.menuItems&&s.output.menuItems.length>0?(e(),C(h,{key:0,header_label:"Filtered results"},{default:p(()=>[t("div",Vt,[(e(!0),l(u,null,c(s.output.menuItems,(o,a)=>(e(),l("div",{class:"col-md-4 mb-3",key:a},[t("div",Ft,[t("div",Mt,[t("span",{textContent:d(o.menuName)},null,8,jt)])]),(e(!0),l(u,null,c(o.screens,(r,b)=>(e(),l("div",{class:"row",key:b},[t("div",Et,[t("ul",Ht,[t("li",zt,[t("a",{class:"",target:"_blank",href:s.input.domain+r.slug,textContent:d(r.id+" "+r.label)},null,8,At),t("div",Gt,[t("button",{type:"button",class:"btn btn-outline-primary mx-1",onClick:S=>s.copyToClipboard(r.id)},Jt,8,Zt),t("button",{type:"button",class:"btn btn-outline-primary ms-1",onClick:S=>s.copyToClipboard(r.label)},Wt,8,Kt)])])])])]))),128))]))),128))])]),_:1})):N("",!0),v(h,{header_label:"Menu List Full"},{default:p(()=>[t("div",Xt,[(e(!0),l(u,null,c(f(_).menuitems,(o,a)=>(e(),l("div",{class:"col-md-4 mb-3",key:a},[t("div",Yt,[t("div",{class:"col-md-12 h5 fw-bold",textContent:d(o.menuName)},null,8,xt)]),(e(!0),l(u,null,c(o.screens,(r,b)=>(e(),l("div",{class:"row",key:b},[t("div",ts,[t("div",ss,[t("a",{class:"list-group-item list-group-item-action",target:"_blank",href:s.input.domain+r.slug,textContent:d(r.id+" "+r.label)},null,8,os)])])]))),128))]))),128))])]),_:1})]))}});export{us as default};
