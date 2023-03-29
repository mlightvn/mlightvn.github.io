import{_ as y}from"./Card-dd27a835.js";import{o,c as n,a as t,F as u,g as c,t as _,l as r,v as p,i as $,e as h,b as d,w as f,q as w}from"./index-ce911ff9.js";import{_ as x}from"./CopyMixin-3e329cef.js";import{_ as g}from"./PasteMixin-30109a2b.js";import{l as v}from"./lodash-026a56df.js";const D={class:"card overflow-scroll",style:{height:"1200px"}},U={class:"card-body bg-white py-1"},k={class:"row bg-white"},C={class:"col-md-12 border-top bg-light h5"},H=["textContent"],I={class:"nav flex-column"},V=["textContent"],j={data(){return{}}},O=Object.assign(j,{__name:"PasswordItemsList",props:{categories_list:{type:Array,required:!0}},setup(e){return(l,a)=>(o(),n("div",D,[t("div",U,[(o(!0),n(u,null,c(e.categories_list,(s,i)=>(o(),n("div",{key:i,class:"mb-2"},[t("div",k,[t("div",C,[t("strong",{textContent:_(s.label)},null,8,H)])]),t("ul",I,[(o(!0),n(u,null,c(s.list,(m,b)=>(o(),n("li",{class:"nav-item",key:b},[t("div",null,[t("span",{class:"nav-link pointer-events",textContent:_(m.info.label)},null,8,V)])]))),128))])]))),128))])]))}}),q={class:"row p-0"},E={class:"col-3 pe-1"},L=["textContent"],P={class:"col ps-0"},N={key:0},B={class:"input-group"},M=["disabled"],S=t("i",{class:"fa-solid fa-xmark"},null,-1),A=[S],F=["disabled"],T=t("i",{class:"fa-solid fa-copy"},null,-1),R=[T],z=t("i",{class:"fa-solid fa-paste"},null,-1),G=[z],J={key:0,class:"mb-3"},K=["href","textContent"],Q={key:1},W={key:1,class:"input-group"},X={mixins:[x,g],data(){return{}},methods:{handleUpdate(){this.$emit("handleUpdate")},handleDelete(){this.$emit("handleDelete")}}},Y=Object.assign(X,{__name:"ItemEditorSlot",props:{item:{type:Object,required:!0}},setup(e){return(l,a)=>(o(),n("div",null,[t("div",q,[t("div",E,[e.item.label.is_fixed?(o(),n("span",{key:0,textContent:_(e.item.label.value)},null,8,L)):r((o(),n("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=s=>e.item.label.value=s)},null,512)),[[p,e.item.label.value]])]),t("div",P,[e.item.type=="url"||e.item.type=="text"||e.item.type=="password"||e.item.type!=="textarea"?(o(),n("div",N,[t("div",B,[$(l.$slots,"input",{},()=>[r(t("input",{type:"text",class:"form-control","onUpdate:modelValue":a[1]||(a[1]=s=>e.item.value=s)},null,512),[[p,e.item.value]])]),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!e.item.value,onClick:a[2]||(a[2]=s=>e.item.value="")},A,8,M),t("button",{type:"button",class:"btn btn-outline-primary",disabled:!e.item.value,onClick:a[3]||(a[3]=s=>l.copyToClipboard(e.item.value))},R,8,F),t("button",{type:"button",class:"btn btn-outline-primary",onClick:a[4]||(a[4]=s=>l.paste(i=>e.item.value=i))},G)]),e.item.type=="url"?(o(),n("div",J,[e.item.value?(o(),n("a",{key:0,href:e.item.value,textContent:_(e.item.value),target:"_blank"},null,8,K)):(o(),n("span",Q," "))])):h("",!0)])):e.item.type=="textarea"?(o(),n("div",W,[r(t("textarea",{class:"form-control",rows:"30","onUpdate:modelValue":a[5]||(a[5]=s=>e.item.value=s)},null,512),[[p,e.item.value]])])):h("",!0)])])]))}}),Z=["type","onUpdate:modelValue"],ee={data(){return{}},methods:{handleUpdate(){this.$emit("handleUpdate")},handleDelete(){this.$emit("handleDelete")}}},te=Object.assign(ee,{__name:"ItemListEditor",props:{input_items_list:{type:Array,required:!0}},setup(e){return(l,a)=>(o(),n("div",null,[(o(!0),n(u,null,c(e.input_items_list,(s,i)=>(o(),n("div",{key:i},[d(Y,{item:s},{input:f(()=>[r(t("input",{type:s.type,class:"form-control","onUpdate:modelValue":m=>s.value=m},null,8,Z),[[w,s.value]])]),_:2},1032,["item"])]))),128))]))}}),se={class:"card"},le={class:"card-body"},ae={class:"card-footer text-end"},oe=t("i",{class:"fa-solid fa-pencil"},null,-1),ne=[oe],ie=t("i",{class:"fa-solid fa-trash"},null,-1),de=[ie],re={data(){return{}},methods:{handleUpdate(){this.$emit("handleUpdate")},handleDelete(){this.$emit("handleDelete")}}},ue=Object.assign(re,{__name:"PasswordEditor",props:{model:{type:Object,required:!0}},setup(e){return(l,a)=>(o(),n("div",se,[t("div",le,[(o(!0),n(u,null,c(e.model.details,(s,i)=>(o(),n("div",{key:i},[d(te,{input_items_list:s,onHandleUpdate:l.handleUpdate,onHandleDelete:l.handleDelete},null,8,["input_items_list","onHandleUpdate","onHandleDelete"])]))),128))]),t("div",ae,[t("button",{type:"button",class:"btn btn-primary mx-1",onClick:a[0]||(a[0]=(...s)=>l.handleUpdate&&l.handleUpdate(...s))},ne),t("button",{type:"button",class:"btn btn-danger ms-1",onClick:a[1]||(a[1]=(...s)=>l.handleDelete&&l.handleDelete(...s))},de)])]))}}),ce={class:""},_e={class:"row"},me={class:"col-3 pe-0"},pe={class:"col ps-1"},he={data(){return{password_item_default:{info:{label:"Default"},details:{basic_list:[{type:"text",label:{value:"Password Label",is_fixed:!0},value:""},{type:"url",label:{value:"URL",is_fixed:!0},value:""},{type:"text",label:{value:"ID",is_fixed:!0},value:""},{type:"password",label:{value:"Password",is_fixed:!0},value:""}],secure_list:[{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""}],note:[{type:"textarea",label:{value:"Note",is_fixed:!0},value:""}]}},password_category_default:{label:"Default",list:[]},password_categories_list:[]}},methods:{handleChooseItem(){console.log("handleChooseItem")},handleUpdate(){console.log("handleUpdate")},handleDelete(){console.log("handleDelete")}},created(){let e=v.cloneDeep(this.password_item_default);this.password_category_default.list.push(e);let l=v.cloneDeep(this.password_category_default);this.password_categories_list.push(l)}},we=Object.assign(he,{__name:"Index",setup(e){return(l,a)=>(o(),n("div",ce,[d(y,{header_label:"Password Manager"},{default:f(()=>[t("div",_e,[t("div",me,[d(O,{categories_list:l.password_categories_list,onHandleChooseItem:l.handleChooseItem},null,8,["categories_list","onHandleChooseItem"])]),t("div",pe,[d(ue,{model:l.password_categories_list[0].list[0],onHandleUpdate:l.handleUpdate,onHandleDelete:l.handleDelete},null,8,["model","onHandleUpdate","onHandleDelete"])])])]),_:1})]))}});export{we as default};
