import{_ as o}from"./Card.vue_vue_type_script_setup_true_lang-e835bd73.js";import{_ as n}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-097f38bf.js";import{R as r}from"./ResetButton-79457144.js";import{e as l,o as i,c,b as a,w as s,a as e,t as _}from"./index-b061f691.js";import"./lodash-b028437e.js";const d={class:"row"},p={class:"col-md-12"},u=["textContent","placeholder"],m=e("button",{type:"button",class:"btn btn-primary me-1"},[e("i",{class:"fa-solid fa-bolt"})],-1),f={mixins:[n],data(){return{input:{spread_text:"",placeholder:`Person in charge	Start Date	End Date	Hours\r
Nguyen Nam	2023/11/01	2023/11/03	16`},output:{table:{}}}}},B=l({...f,__name:"Index",setup(h){return(t,b)=>(i(),c("div",null,[a(o,{header_label:"Time Measure"},{footer:s(()=>[m,a(r,{onClick:t.handleReset},null,8,["onClick"])]),default:s(()=>[e("div",d,[e("div",p,[e("textarea",{class:"form-control",rows:"50",textContent:_(t.input.spread_text),placeholder:t.input.placeholder},null,8,u)])])]),_:1}),a(o,{header_label:"Output"})]))}});export{B as default};
