import{o as u,c as p,b as d,w as r,a as t,m as c,v as h,t as _}from"./index-e823abe2.js";import{_ as m}from"./Card.vue_vue_type_script_setup_true_lang-92a1d0ab.js";const v={class:""},f=t("div",{class:"row"},[t("div",{class:"col-6"},"Original phases:"),t("div",{class:"col"},"Result:")],-1),b={class:"row"},g={class:"col-6"},y=["placeholder"],w={class:"col"},k=["textContent","placeholder"],x=t("i",{class:"fa-solid fa-paper-plane"},null,-1),C=[x],O={data(){return{input:{original_phases:{value:"",required:!0,type:"string",label:"Original phases",placeholder:`1. one	4. four
2. two	5. five
3. three	6. six`},result:{value:"",required:!1,type:"string",label:"Result",placeholder:`one
two
three
four
five
six`,list:{},array:[]}}}},methods:{submit(){let a=this.input.original_phases.value.split(`
`),e=this;a=a.map(s=>{s.replaceAll(".","").split("	").map(o=>{let i=o.trim().split(" "),n=i[0].padStart(2,"0");e.input.result.list[n]=i[1].trim()})}),this.input.result.array=Object.keys(this.input.result.list).sort(),this.input.result.value="",this.input.result.array.map(s=>{this.input.result.value+=this.input.result.list[s]+`
`})}}},q=Object.assign(O,{__name:"Index",setup(a){return(e,s)=>(u(),p("div",v,[d(m,{header_label:"Trade"},{footer:r(()=>[t("button",{type:"button",class:"btn btn-primary",onClick:s[1]||(s[1]=(...l)=>e.submit&&e.submit(...l))},C)]),default:r(()=>[f,t("div",b,[t("div",g,[c(t("textarea",{class:"form-control",rows:"12","onUpdate:modelValue":s[0]||(s[0]=l=>e.input.original_phases.value=l),placeholder:e.input.original_phases.placeholder},null,8,y),[[h,e.input.original_phases.value]])]),t("div",w,[t("textarea",{class:"form-control",rows:"12",textContent:_(e.input.result.value),placeholder:e.input.result.placeholder,readonly:""},null,8,k)])])]),_:1})]))}});export{q as default};
