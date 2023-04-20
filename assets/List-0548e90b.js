import{_ as m,o as c,c as u,d as _,b as a,w as n,a as t,l as i,v as o,f as d}from"./index-44f8073e.js";import{_ as r}from"./Card-69d93a47.js";import{_ as f}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-5298e249.js";import{R as b}from"./ResetButton-48a88281.js";import"./lodash-026a56df.js";const h={},v={"aria-label":"Page navigation"},g=_('<ul class="pagination"><li class="page-item"><a class="page-link" href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li><li class="page-item"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li></ul>',1),y=[g];function k(p,l){return c(),u("nav",v,y)}const N=m(h,[["render",k]]),x={class:"row"},V=t("div",{class:"col-md-2"},"ID",-1),w={class:"col-md-4"},C=t("div",{class:"col-md-2"},"Code",-1),P={class:"col-md-4"},$={class:"row"},B=t("div",{class:"col-md-2"},"Name",-1),L={class:"col-md-4"},U=t("div",{class:"col-md-2"},"Current Keeper",-1),A={class:"col-md-4"},D=t("div",{class:"row"},[t("div",{class:"col-md-2"},"Keeping period"),t("div",{class:"col-md-4"},[t("div",{class:"input-group"},[t("input",{type:"date",class:"form-control"}),t("span",{class:"input-group-text"},"～"),t("input",{type:"date",class:"form-control"})])]),t("div",{class:"col-md-2"},"Status"),t("div",{class:"col-md-4"})],-1),I=t("div",{class:"row"},[t("div",{class:"col-md-2"},"In storage"),t("div",{class:"col-md-4"},[t("label",{class:"me-2"},[t("input",{type:"radio",name:"in_storage",value:"1",class:"form-check-input"}),d(" True")]),t("label",{class:"mx-2"},[t("input",{type:"radio",name:"in_storage",value:"0",class:"form-check-input"}),d(" False")])]),t("div",{class:"col-md-2"}),t("div",{class:"col-md-4"})],-1),K=t("button",{type:"button",class:"btn btn-primary me-1 btn-lg"},[t("i",{class:"fa-solid fa-search"})],-1),R=t("div",{class:"table-responsive"},[t("table",{class:"table table-hover table-bordered"},[t("thead",{class:"bg-light"},[t("tr",null,[t("th",null,"ID"),t("th",null,"Code"),t("th",null,"Name"),t("th",null,"Current Keeper"),t("th",null,"Period"),t("th",null,"Action")])]),t("tbody",null,[t("tr",null,[t("td",null,"0000000001"),t("td",null,"A000000001"),t("td",null,"Laptop"),t("td",null,"Nam"),t("td",null,"2023/01/01 ～ Present"),t("td",null,[t("button",{type:"button",class:"btn btn-outline-primary mx-1"},[t("i",{class:"fa-solid fa-pencil"})]),t("button",{type:"button",class:"btn btn-outline-danger ms-1"},[t("i",{class:"fa-solid fa-trash"})])])]),t("tr",null,[t("td",null,"0000000002"),t("td",null,"A000000002"),t("td",null,"Laptop 2"),t("td",null,"Nam"),t("td",null,"2023/01/01 ～ Present"),t("td",null,[t("button",{type:"button",class:"btn btn-outline-primary mx-1"},[t("i",{class:"fa-solid fa-pencil"})]),t("button",{type:"button",class:"btn btn-outline-danger ms-1"},[t("i",{class:"fa-solid fa-trash"})])])])])])],-1),T={mixins:[f],data(){return{input:{filter:{id:"",code:"",name:"",current_keeper:""}}}}},O=Object.assign(T,{__name:"List",setup(p){return(l,e)=>(c(),u("div",null,[a(r,{header_label:"Filter"},{footer:n(()=>[K,a(b,{onClick:l.handleReset},null,8,["onClick"])]),default:n(()=>[t("div",x,[V,t("div",w,[i(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=s=>l.input.filter.id=s)},null,512),[[o,l.input.filter.id]])]),C,t("div",P,[i(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>l.input.filter.code=s)},null,512),[[o,l.input.filter.code]])])]),t("div",$,[B,t("div",L,[i(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=s=>l.input.filter.name=s)},null,512),[[o,l.input.filter.name]])]),U,t("div",A,[i(t("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=s=>l.input.filter.current_keeper=s)},null,512),[[o,l.input.filter.current_keeper]])])]),D,I]),_:1}),a(r,{header_label:"List"},{footer:n(()=>[a(N)]),default:n(()=>[R]),_:1})]))}});export{O as default};
