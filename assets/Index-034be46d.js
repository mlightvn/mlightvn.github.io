import{o as i,c as l,b as m,w as _,a as t,k as r,v as d,t as u,F as p,g as h}from"./index-aa4b6a43.js";import{_ as c}from"./Card-94acc959.js";import{c as b}from"./index-6ee0056c.js";import{_ as v}from"./CopyMixin-8f3f5aa4.js";const f={class:""},y={class:"row mb-2"},C={class:"col-md-4"},g={class:"input-group"},x=t("span",{class:"input-group-text"},"Interest",-1),k=t("span",{class:"input-group-text"},"%",-1),w={class:"col-md-4"},V={class:"input-group"},D=t("span",{class:"input-group-text"},"VND/USD/JPY/...",-1),E=["textContent"],N={class:"col-md"},W={class:"input-group"},B=t("span",{class:"input-group-text"},"Years",-1),F={class:"row"},I={class:"col-md"},U={class:"float-end"},M=t("i",{class:"fa-brands fa-servicestack"},null,-1),S=[M],Y={key:0,class:"row"},$=t("div",{class:"col"},"No data",-1),A=[$],T={key:1,class:"row"},j={class:"col"},J={class:"table table-hover table-bordered"},L=t("thead",{class:"bg-light"},[t("tr",null,[t("th",null,"Year (th)"),t("th",null,"Interest"),t("th",null,"Amount")])],-1),O=["textContent"],P=["textContent"],q=["textContent"],z={mixins:[v],data(){return{input:{interest:7,amount:1e8,number_of_years:20},output:{estimated_list:null}}},computed:{},methods:{async init(){},copyToClipboard(a){a!==""&&(copy(a),this.$snackbar.add({type:"info",text:"Copied to clipboard"}))},handleEstimate(){let a=Number(this.input.interest),e={index:0,interest:{value:0,label:0},amount:{value:parseFloat(this.input.amount,2),label:this.numberWithCommas(parseFloat(this.input.amount,2))}};this.output.estimated_list=Array(e);for(let n=1;n<=this.input.number_of_years;n++){let s=Math.round(a*e.amount.value/100,2),o={index:n,interest:{value:s},amount:{value:Math.round(s+e.amount.value,2)}};o.interest.label=this.numberWithCommas(o.interest.value),o.amount.label=this.numberWithCommas(o.amount.value),e=b(o),this.output.estimated_list[n]=o}},numberWithCommas(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},created(){this.init()}},R=Object.assign(z,{__name:"Index",setup(a){return(e,n)=>(i(),l("div",f,[m(c,{header_label:"Interest"},{default:_(()=>[t("div",y,[t("div",C,[t("div",g,[x,r(t("input",{type:"number",class:"form-control","onUpdate:modelValue":n[0]||(n[0]=s=>e.input.interest=s)},null,512),[[d,e.input.interest]]),k])]),t("div",w,[t("div",V,[r(t("input",{type:"number",class:"form-control","onUpdate:modelValue":n[1]||(n[1]=s=>e.input.amount=s)},null,512),[[d,e.input.amount]]),D]),t("div",{class:"text-end",textContent:u(e.numberWithCommas(e.input.amount))},null,8,E)]),t("div",N,[t("div",W,[r(t("input",{type:"number",class:"form-control","onUpdate:modelValue":n[2]||(n[2]=s=>e.input.number_of_years=s),min:"0",max:"1000"},null,512),[[d,e.input.number_of_years]]),B])])]),t("div",F,[t("div",I,[t("div",U,[t("button",{type:"button",class:"btn btn-primary",onClick:n[3]||(n[3]=(...s)=>e.handleEstimate&&e.handleEstimate(...s))},S)])])])]),_:1}),m(c,{header_label:"Estimation table"},{default:_(()=>[e.output.estimated_list?(i(),l("div",T,[t("div",j,[t("table",J,[L,t("tbody",null,[(i(!0),l(p,null,h(e.output.estimated_list,(s,o)=>(i(),l("tr",{key:o},[t("td",{class:"text-end",textContent:u(s.index)},null,8,O),t("td",{class:"text-end",textContent:u(s.interest.label)},null,8,P),t("td",{class:"text-end",textContent:u(s.amount.label)},null,8,q)]))),128))])])])])):(i(),l("div",Y,A))]),_:1})]))}});export{R as default};