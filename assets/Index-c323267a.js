import{e as C,o as r,i as $,w as c,a as t,m as d,v as p,u as f,c as m,b,t as u,F as T,h as V,g as v}from"./index-bc66532c.js";import{_ as x}from"./Card.vue_vue_type_script_setup_true_lang-9947392d.js";import{c as a}from"./index-436ac39b.js";import{_ as A}from"./CopyMixin.vue_vue_type_script_setup_true_lang-3f1b5384.js";import{_ as M}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-40d226b6.js";import{d as l}from"./Number-b931076f.js";import{R as k}from"./ResetButton-225abbc8.js";import"./_commonjsHelpers-23102255.js";import"./lodash-a0577307.js";const D={class:"row"},I={class:"col-12"},w={class:"input-group"},N=t("span",{class:"input-group-text"},"Asset value",-1),F=["value"],U=t("span",{class:"input-group-text"},"JPY",-1),B=t("span",{class:"input-group-text"},"multiple times",-1),P=t("span",{class:"input-group-text"},"exchange rate",-1),S=t("i",{class:"fa-solid fa-play"},null,-1),Y=[S],L=["value"],R=t("span",{class:"input-group-text"},"VND",-1),J={data(){return{input:{crypto:1e7,xTimes:10,exchange_rate:162},output:{vndAmount:0}}},methods:{init(){this.handleExecute()},handleExecute(){this.output.vndAmount=this.input.crypto*this.input.xTimes*this.input.exchange_rate}},created(){this.init()}},j=C({...J,__name:"Crypto2VND",setup(h){return(e,s)=>(r(),$(x,{header_label:"Asset value to VND"},{default:c(()=>[t("div",D,[t("div",I,[t("div",w,[N,d(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=n=>e.input.crypto=n)},null,512),[[p,e.input.crypto]]),t("input",{type:"text",class:"form-control text-end",value:f(l)(e.input.crypto,0),disabled:""},null,8,F),U,B,d(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=n=>e.input.xTimes=n)},null,512),[[p,e.input.xTimes]]),P,d(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=n=>e.input.exchange_rate=n)},null,512),[[p,e.input.exchange_rate]]),t("button",{type:"button",class:"btn btn-primary me-1",onClick:s[3]||(s[3]=(...n)=>e.handleExecute&&e.handleExecute(...n))},Y),t("input",{type:"text",class:"form-control text-end",value:f(l)(e.output.vndAmount,0),disabled:""},null,8,L),R])])])]),_:1}))}}),q={class:""},z={class:"row"},G={class:"col-12"},H={class:"col-12"},K=t("span",{class:"fw-bold h5"},"Interest",-1),O={class:"row mb-2"},Q={class:"col-md-4"},W={class:"input-group"},X=t("span",{class:"input-group-text"},"Interest",-1),Z=t("span",{class:"input-group-text"},"%",-1),tt={class:"col-md-4"},et={class:"input-group"},nt=t("span",{class:"input-group-text"},"VND/USD/JPY/...",-1),st=["textContent"],ot={class:"col-md"},lt={class:"input-group"},at=t("span",{class:"input-group-text"},"Years",-1),it={class:"float-end"},ut=t("i",{class:"fa-brands fa-servicestack"},null,-1),rt=[ut],dt={key:0,class:"row"},pt=t("div",{class:"col"},"No data",-1),_t=[pt],mt={key:1,class:"row"},ct={class:"col"},ht={class:"table table-hover table-bordered"},bt=t("thead",{class:"bg-light"},[t("tr",null,[t("th",null,"Year (th)"),t("th",null,"Compounding Interest"),t("th",null,[v(" Amount"),t("br"),t("sub",null,"Compounding Interest")]),t("th",null,[v(" Interest"),t("br"),t("sub",null,"Fixed increment")]),t("th",null,[v(" Amount"),t("br"),t("sub",null,"Fixed increment")])])],-1),vt=["textContent"],ft=["textContent"],xt=["textContent"],yt=["textContent"],gt=["textContent"],Ct={mixins:[A,M],data(){return{input:{interest:7,amount:1e8,number_of_years:20},output:{estimated_list:null}}},methods:{handleEstimate(){let h=Number(this.input.interest),e={value:parseFloat(this.input.amount),label:l(parseFloat(this.input.amount))};const n={index:0,interest:{value:0,label:0},interest_2:{value:0,label:0},interest_3:{value:0,label:0},interest_4:{value:0,label:0},amount:a(e),amount_2:a(e),amount_3:a(e),amount_4:a(e)};let i=a(n),E=Math.round(h*n.amount.value/100);this.output.estimated_list=Array(i);for(let _=1;_<=this.input.number_of_years;_++){let y=Math.round(h*i.amount.value/100),g=Math.round(E*_),o={index:_,interest:{value:y,label:0},amount:{value:Math.round(y+i.amount.value)},interest_2:{value:g,label:0},amount_2:{value:Math.round(g+n.amount.value)}};o.interest.label=l(o.interest.value),o.amount.label=l(o.amount.value),o.interest_2.label=l(o.interest_2.value),o.amount_2.label=l(o.amount_2.value),i=a(o),this.output.estimated_list[_]=a(o)}}}},wt=C({...Ct,__name:"Index",setup(h){return(e,s)=>(r(),m("div",q,[t("div",z,[t("div",G,[b(j)]),t("div",H,[b(x,null,{header:c(()=>[K]),footer:c(()=>[t("div",it,[t("button",{type:"button",class:"btn btn-primary me-1",onClick:s[3]||(s[3]=(...n)=>e.handleEstimate&&e.handleEstimate(...n))},rt),b(k,{onClick:e.handleReset},null,8,["onClick"])])]),default:c(()=>[t("div",O,[t("div",Q,[t("div",W,[X,d(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=n=>e.input.interest=n)},null,512),[[p,e.input.interest]]),Z])]),t("div",tt,[t("div",et,[d(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=n=>e.input.amount=n)},null,512),[[p,e.input.amount]]),nt]),t("div",{class:"text-end",textContent:u(f(l)(e.input.amount))},null,8,st)]),t("div",ot,[t("div",lt,[d(t("input",{type:"number",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=n=>e.input.number_of_years=n),min:"0",max:"1000"},null,512),[[p,e.input.number_of_years]]),at])])])]),_:1})])]),b(x,{header_label:"Estimation table"},{default:c(()=>[e.output.estimated_list?(r(),m("div",mt,[t("div",ct,[t("table",ht,[bt,t("tbody",null,[(r(!0),m(T,null,V(e.output.estimated_list,(n,i)=>(r(),m("tr",{key:i},[t("td",{class:"text-end",textContent:u(n.index)},null,8,vt),t("td",{class:"text-end",textContent:u(n.interest.label)},null,8,ft),t("td",{class:"text-end",textContent:u(n.amount.label)},null,8,xt),t("td",{class:"text-end",textContent:u(n.interest_2.label)},null,8,yt),t("td",{class:"text-end",textContent:u(n.amount_2.label)},null,8,gt)]))),128))])])])])):(r(),m("div",dt,_t))]),_:1})]))}});export{wt as default};
