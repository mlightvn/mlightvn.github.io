import{_ as c,L as r,o as n,c as l,a as e,F as d,g as u,f as _,t as h,n as p,e as g}from"./index-404a1488.js";import{V as f}from"./index-7400e1b2.js";const v={data(){return{topics:null,items_list:null,selected_index:null}},async created(){await this.init()},methods:{async init(){switch(this.localStorage=new r,this.localStorage.language_key){default:this.topics=f.english;break}this.items_list=this.topics[this.localStorage.setting.level.topic].value[this.localStorage.setting.level.level].value[this.localStorage.setting.level.sub_level].value},async handleShowTopicContent(o){this.selected_index==o?this.selected_index=null:this.selected_index=o}}},m={class:"list-group"},x=["onClick"],y={class:"btn btn-light"},T={key:0,class:"card"},b={class:"card-body bg-light"},w=e("p",null,"Pronunciation:",-1),L=["innerHTML"],S=e("p",null,"Type:",-1),k=["innerHTML"],M=e("p",null,"Meaning:",-1),C=["innerHTML"];function H(o,V,B,N,i,a){return n(),l("div",null,[e("ul",m,[(n(!0),l(d,null,u(i.items_list,(s,t)=>(n(),l("div",{key:t},[e("li",{class:"list-group-item d-flex justify-content-between align-items-center text-primary",onClick:F=>a.handleShowTopicContent(t)},[_(h(s.word&&s.word!=""?s.word:s.pronunciation)+" ",1),e("span",y,[e("i",{class:p(`fa-solid fa-chevron-${t===i.selected_index?"up":"down"}`)},null,2)])],8,x),t===i.selected_index?(n(),l("div",T,[e("div",b,[w,e("p",null,[e("b",null,[e("span",{class:"text-success",innerHTML:s.pronunciation},null,8,L)])]),S,e("p",null,[e("b",null,[e("span",{class:"text-success",innerHTML:s.type},null,8,k)])]),M,e("span",{class:"text-success",innerHTML:s.meaning},null,8,C)])])):g("",!0)]))),128))])])}const z=c(v,[["render",H]]);export{z as default};
