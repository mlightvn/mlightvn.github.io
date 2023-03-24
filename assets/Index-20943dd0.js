import{o as e,h as C,w as p,a as t,k as m,c as l,F as u,g as c,u as f,t as d,p as $,v as y,f as g,b as v,e as S}from"./index-aa4b6a43.js";import{_ as k}from"./CopyMixin-8f3f5aa4.js";import{_ as h}from"./Card-94acc959.js";import{_ as w}from"./PasteMixin-30109a2b.js";const _={domain:{list:[{environment:"production",label:"本番",domain:"http://localhost:8080"},{environment:"staging",label:"ステージング",domain:"http://localhost:5174"},{environment:"development",label:"開発環境",domain:"http://localhost:5173"}],default:"http://localhost:8080"},menuitems:[{menuName:"Common",screens:[{id:"SCR_HOME",label:"Homepage",slug:"/"},{id:"UNAUTHORIZED",label:"Unauthenticated",slug:"/Unauthenticated"},{id:"LOGIN",label:"LOGIN",slug:"/login"}]},{menuName:"マスタ",screens:[{id:"SCR001",label:"Users",slug:"/SCR001"},{id:"SCR002",label:"Assets",slug:"/SCR002"},{id:"SCR002",label:"Products",slug:"/SCR003"},{id:"SCR004",label:"Profits & Losses",slug:"/SCR004"}]}]},N={class:"row mb-2"},I=t("div",{class:"col-md-2"},"Domain",-1),O={class:"col"},R=["value"],T=["textContent"],B={class:"input-group"},D=["value"],L=["disabled"],P=t("i",{class:"fa-solid fa-copy"},null,-1),V=[P],F={class:"row"},M=t("div",{class:"col-md-2"},"Original url",-1),j={class:"col input-group"},E=["disabled"],H=t("i",{class:"fa-solid fa-xmark"},null,-1),z=[H],A=["disabled"],G=t("i",{class:"fa-solid fa-copy"},null,-1),Z=[G],q=t("i",{class:"fa-solid fa-paste"},null,-1),J=[q],K=t("i",{class:"fa-solid fa-paste"},null,-1),Q=t("i",{class:"fa-solid fa-play"},null,-1),W={class:"row"},X=t("div",{class:"col-md-2"},"New url",-1),Y={class:"col"},x={class:"input-group"},tt=["disabled"],st=t("i",{class:"fa-solid fa-xmark"},null,-1),ot=[st],nt=["disabled"],et=t("i",{class:"fa-solid fa-copy"},null,-1),lt=[et],it=["href","textContent"],at={key:1},rt=t("i",{class:"fa-solid fa-play"},null,-1),dt=[rt],ut={mixins:[k,w],data(){return{input:{url_convert:{domain:_.domain.default,url:""}},output:{url_convert:{url:""}}}},methods:{async pasteToUrlConvertOriginalUrl(){await this.paste(i=>this.input.url_convert.url=i.replace(/[\r|\n]/g,""))},async handleUrlDomainConvert(){let i=this.input.url_convert.url;if(!i)return this.$snackbar.add({type:"warning",text:"Original URL is not a valid URL"}),!1;let s=await i.replace(/https?:\/\/(.*?)\//,"/"),n=this.input.url_convert.domain+s;this.output.url_convert.url=n},async handleUrlConvertByPaste(){await this.pasteToUrlConvertOriginalUrl(),await this.handleUrlDomainConvert()}}},ct=Object.assign(ut,{__name:"UrlDomainConvert",setup(i){return(s,n)=>(e(),C(h,{header_label:"Convert domain of url",class:"border-dark"},{footer:p(()=>[t("button",{type:"button",class:"btn btn-primary",onClick:n[10]||(n[10]=(...o)=>s.handleUrlDomainConvert&&s.handleUrlDomainConvert(...o))},dt)]),default:p(()=>[t("div",N,[I,t("div",O,[m(t("select",{class:"form-select","onUpdate:modelValue":n[0]||(n[0]=o=>s.input.url_convert.domain=o),size:"5"},[(e(!0),l(u,null,c(f(_).domain.list,(o,a)=>(e(),l("option",{key:a,value:o.domain},[t("span",{textContent:d(`[${o.label}] ${o.domain}`)},null,8,T)],8,R))),128))],512),[[$,s.input.url_convert.domain]]),t("div",B,[t("input",{type:"text",class:"form-control",readonly:"",disabled:"",value:s.input.url_convert.domain},null,8,D),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.url_convert.domain,onClick:n[1]||(n[1]=o=>s.copyToClipboard(s.input.url_convert.domain))},V,8,L)])])]),t("div",F,[M,t("div",j,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=o=>s.input.url_convert.url=o)},null,512),[[y,s.input.url_convert.url]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.url_convert.url,onClick:n[3]||(n[3]=o=>s.input.url_convert.url="")},z,8,E),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.url_convert.url,onClick:n[4]||(n[4]=o=>s.copyToClipboard(s.input.url_convert.url))},Z,8,A),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[5]||(n[5]=(...o)=>s.pasteToUrlConvertOriginalUrl&&s.pasteToUrlConvertOriginalUrl(...o))},J),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[6]||(n[6]=(...o)=>s.handleUrlConvertByPaste&&s.handleUrlConvertByPaste(...o))},[K,g(" ➡ "),Q])])]),t("div",W,[X,t("div",Y,[t("div",x,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[7]||(n[7]=o=>s.output.url_convert.url=o)},null,512),[[y,s.output.url_convert.url]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.output.url_convert.url,onClick:n[8]||(n[8]=o=>s.output.url_convert.url="")},ot,8,tt),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.output.url_convert.url,onClick:n[9]||(n[9]=o=>s.copyToClipboard(s.output.url_convert.url))},lt,8,nt)]),t("div",null,[s.output.url_convert.url?(e(),l("a",{key:0,href:s.output.url_convert.url,textContent:d(s.output.url_convert.url),target:"_blank"},null,8,it)):(e(),l("span",at," "))])])])]),_:1}))}}),pt={class:"row mb-3"},_t={class:"col-md-6"},mt={class:"row mb-2"},ht=t("div",{class:"col-md-2"},"Domain",-1),bt={class:"col"},vt=["value"],ft=["textContent"],yt={class:"row"},Ct=t("div",{class:"col-md-2"},"Menu id, label",-1),$t={class:"col"},gt={class:"input-group"},kt=["disabled"],wt=t("i",{class:"fa-solid fa-xmark"},null,-1),Ut=[wt],St=t("i",{class:"fa-solid fa-paste"},null,-1),Nt=[St],It=t("i",{class:"fa-solid fa-paste"},null,-1),Ot=t("i",{class:"fa-solid fa-search"},null,-1),Rt={class:"text-end"},Tt=["disabled"],Bt=t("i",{class:"fa fa-search"},null,-1),Dt=[Bt],Lt={class:"col"},Pt={class:"row"},Vt={class:"row"},Ft={class:"col h5 fw-bold"},Mt=["textContent"],jt={class:"col-md-12"},Et={class:"nav"},Ht={class:"nav-item list-group-item-action m-1 p-1"},zt=["href","textContent"],At={class:"float-end"},Gt=["onClick"],Zt=t("i",{class:"fa-solid fa-copy"},null,-1),qt=[Zt],Jt=["onClick"],Kt=t("i",{class:"fa-solid fa-copy"},null,-1),Qt=[Kt],Wt={class:"row mb-3"},Xt={class:"row"},Yt=["textContent"],xt={class:"col-md-12"},ts={class:"list-group"},ss=["href","textContent"],os={mixins:[k,w],data(){return{input:{domain:_.domain.default,search:""},output:{menuItems:[]}}},methods:{handleSearch:async function(){let i=this.input.search;if(!i)return this.$snackbar.add({type:"warning",text:"No input data for search"}),!1;let s=[];if(await _.menuitems.filter(async n=>{let o=await n.screens.filter(a=>a.id.toLowerCase()==i.toLowerCase()||a.label.includes(i));o.length>0&&s.push({menuName:n.menuName,screens:o})}),this.output.menuItems=s,s.length===0)return this.$snackbar.add({type:"warning",text:"No search result data"}),!1},handleSearchByPasting:async function(){await this.pasteFromClipboardIntoInput("search"),await this.handleSearch()},async pasteFromClipboardIntoInput(i="search"){await this.paste(s=>this.input[i]=s.replace(/[\r|\n]/g,""))}}},as=Object.assign(os,{__name:"Index",setup(i){return(s,n)=>(e(),l("div",null,[t("div",pt,[t("div",_t,[v(h,{header_label:"Filter"},{footer:p(()=>[t("div",Rt,[t("button",{class:"btn btn-primary",disabled:!s.input.search,onClick:n[5]||(n[5]=(...o)=>s.handleSearch&&s.handleSearch(...o))},Dt,8,Tt)])]),default:p(()=>[t("div",mt,[ht,t("div",bt,[m(t("select",{class:"form-select","onUpdate:modelValue":n[0]||(n[0]=o=>s.input.domain=o),size:"5"},[(e(!0),l(u,null,c(f(_).domain.list,(o,a)=>(e(),l("option",{key:a,value:o.domain},[t("span",{textContent:d(`[${o.label}] ${o.domain}`)},null,8,ft)],8,vt))),128))],512),[[$,s.input.domain]])])]),t("div",yt,[Ct,t("div",$t,[t("div",gt,[m(t("input",{type:"text",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=o=>s.input.search=o)},null,512),[[y,s.input.search]]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.search,onClick:n[2]||(n[2]=o=>s.input.search="")},Ut,8,kt),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[3]||(n[3]=o=>s.pasteFromClipboardIntoInput("search"))},Nt),t("button",{type:"button",class:"btn btn-outline-primary",onClick:n[4]||(n[4]=(...o)=>s.handleSearchByPasting&&s.handleSearchByPasting(...o))},[It,g(" ➡ "),Ot])])])])]),_:1})]),t("div",Lt,[v(ct)])]),s.output.menuItems&&s.output.menuItems.length>0?(e(),C(h,{key:0,header_label:"Filtered results"},{default:p(()=>[t("div",Pt,[(e(!0),l(u,null,c(s.output.menuItems,(o,a)=>(e(),l("div",{class:"col-md-4 mb-3",key:a},[t("div",Vt,[t("div",Ft,[t("span",{textContent:d(o.menuName)},null,8,Mt)])]),(e(!0),l(u,null,c(o.screens,(r,b)=>(e(),l("div",{class:"row",key:b},[t("div",jt,[t("ul",Et,[t("li",Ht,[t("a",{class:"",target:"_blank",href:s.input.domain+r.slug,textContent:d(r.id+" "+r.label)},null,8,zt),t("div",At,[t("button",{type:"button",class:"btn btn-outline-primary mx-1",onClick:U=>s.copyToClipboard(r.id)},qt,8,Gt),t("button",{type:"button",class:"btn btn-outline-primary ms-1",onClick:U=>s.copyToClipboard(r.label)},Qt,8,Jt)])])])])]))),128))]))),128))])]),_:1})):S("",!0),v(h,{header_label:"Menu List Full"},{default:p(()=>[t("div",Wt,[(e(!0),l(u,null,c(f(_).menuitems,(o,a)=>(e(),l("div",{class:"col-md-4 mb-3",key:a},[t("div",Xt,[t("div",{class:"col-md-12 h5 fw-bold",textContent:d(o.menuName)},null,8,Yt)]),(e(!0),l(u,null,c(o.screens,(r,b)=>(e(),l("div",{class:"row",key:b},[t("div",xt,[t("div",ts,[t("a",{class:"list-group-item list-group-item-action",target:"_blank",href:s.input.domain+r.slug,textContent:d(r.id+" "+r.label)},null,8,ss)])])]))),128))]))),128))])]),_:1})]))}});export{as as default};
