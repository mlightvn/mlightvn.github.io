import{_ as b}from"./Card-8a20dc34.js";import{o,c as n,a as l,F as u,g as _,t as m,m as r,v as p,b as d,w as v,i as $,e as h,s as w}from"./index-088b151d.js";import{_ as x}from"./CopyMixin.vue_vue_type_script_setup_true_lang-a392e21a.js";import{_ as g}from"./PasteMixin.vue_vue_type_script_lang-30109a2b.js";import{C as D}from"./ClearCopyPasteButtons-ad085e2b.js";import{l as f}from"./lodash-026a56df.js";import"./PrimaryOutlineButton-5b499667.js";const C={class:"card overflow-scroll",style:{height:"1200px"}},U={class:"card-body bg-white py-1"},k={class:"row bg-white"},H={class:"col-md-12 border-top bg-light h5"},I=["textContent"],V={class:"nav flex-column"},j=["textContent"],O={data(){return{}}},P=Object.assign(O,{__name:"PasswordItemsList",props:{categories_list:{type:Array,required:!0}},setup(e){return(s,a)=>(o(),n("div",C,[l("div",U,[(o(!0),n(u,null,_(e.categories_list,(t,i)=>(o(),n("div",{key:i,class:"mb-2"},[l("div",k,[l("div",H,[l("strong",{textContent:m(t.label)},null,8,I)])]),l("ul",V,[(o(!0),n(u,null,_(t.list,(c,y)=>(o(),n("li",{class:"nav-item",key:y},[l("div",null,[l("span",{class:"nav-link pointer-events",textContent:m(c.info.label)},null,8,j)])]))),128))])]))),128))])]))}}),E={class:"row p-0"},L={class:"col-3 pe-1"},q=["textContent"],B={class:"col ps-0"},N={key:0},M={key:0,class:"mb-3"},S=["href","textContent"],A={key:1},F={key:1,class:"input-group"},T={mixins:[x,g],data(){return{}},methods:{handleUpdate(){this.$emit("handleUpdate")},handleDelete(){this.$emit("handleDelete")}}},R=Object.assign(T,{__name:"ItemEditorSlot",props:{item:{type:Object,required:!0}},setup(e){return(s,a)=>(o(),n("div",null,[l("div",E,[l("div",L,[e.item.label.is_fixed?(o(),n("span",{key:0,textContent:m(e.item.label.value)},null,8,q)):r((o(),n("input",{key:1,type:"text",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=t=>e.item.label.value=t)},null,512)),[[p,e.item.label.value]])]),l("div",B,[e.item.type=="url"||e.item.type=="text"||e.item.type=="password"||e.item.type!=="textarea"?(o(),n("div",N,[d(D,{value:e.item.value,onClear:a[2]||(a[2]=t=>e.item.value=""),onCopy:a[3]||(a[3]=t=>s.copyToClipboard(e.item.value)),onPaste:a[4]||(a[4]=t=>s.paste(i=>e.item.value=i))},{default:v(()=>[$(s.$slots,"input",{},()=>[r(l("input",{type:"text",class:"form-control","onUpdate:modelValue":a[1]||(a[1]=t=>e.item.value=t)},null,512),[[p,e.item.value]])])]),_:3},8,["value"]),e.item.type=="url"?(o(),n("div",M,[e.item.value?(o(),n("a",{key:0,href:e.item.value,textContent:m(e.item.value),target:"_blank"},null,8,S)):(o(),n("span",A," "))])):h("",!0)])):e.item.type=="textarea"?(o(),n("div",F,[r(l("textarea",{class:"form-control",rows:"30","onUpdate:modelValue":a[5]||(a[5]=t=>e.item.value=t)},null,512),[[p,e.item.value]])])):h("",!0)])])]))}}),z=["type","onUpdate:modelValue"],G={data(){return{}},methods:{handleUpdate(){this.$emit("handleUpdate")},handleDelete(){this.$emit("handleDelete")}}},J=Object.assign(G,{__name:"ItemListEditor",props:{input_items_list:{type:Array,required:!0}},setup(e){return(s,a)=>(o(),n("div",null,[(o(!0),n(u,null,_(e.input_items_list,(t,i)=>(o(),n("div",{key:i},[d(R,{item:t},{input:v(()=>[r(l("input",{type:t.type,class:"form-control","onUpdate:modelValue":c=>t.value=c},null,8,z),[[w,t.value]])]),_:2},1032,["item"])]))),128))]))}}),K={class:"card"},Q={class:"card-body"},W={class:"card-footer text-end"},X=l("i",{class:"fa-solid fa-pencil"},null,-1),Y=[X],Z=l("i",{class:"fa-solid fa-trash"},null,-1),ee=[Z],te={data(){return{}},methods:{handleUpdate(){this.$emit("handleUpdate")},handleDelete(){this.$emit("handleDelete")}}},le=Object.assign(te,{__name:"PasswordEditor",props:{model:{type:Object,required:!0}},setup(e){return(s,a)=>(o(),n("div",K,[l("div",Q,[(o(!0),n(u,null,_(e.model.details,(t,i)=>(o(),n("div",{key:i},[d(J,{input_items_list:t,onHandleUpdate:s.handleUpdate,onHandleDelete:s.handleDelete},null,8,["input_items_list","onHandleUpdate","onHandleDelete"])]))),128))]),l("div",W,[l("button",{type:"button",class:"btn btn-primary mx-1",onClick:a[0]||(a[0]=(...t)=>s.handleUpdate&&s.handleUpdate(...t))},Y),l("button",{type:"button",class:"btn btn-danger ms-1",onClick:a[1]||(a[1]=(...t)=>s.handleDelete&&s.handleDelete(...t))},ee)])]))}}),se={class:""},ae={class:"row"},oe={class:"col-3 pe-0"},ne={class:"col ps-1"},ie={data(){return{password_item_default:{info:{label:"Default"},details:{basic_list:[{type:"text",label:{value:"Password Label",is_fixed:!0},value:""},{type:"url",label:{value:"URL",is_fixed:!0},value:""},{type:"text",label:{value:"ID",is_fixed:!0},value:""},{type:"password",label:{value:"Password",is_fixed:!0},value:""}],secure_list:[{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""},{type:"password",label:{value:"",is_fixed:!1},value:""}],note:[{type:"textarea",label:{value:"Note",is_fixed:!0},value:""}]}},password_category_default:{label:"Default",list:[]},password_categories_list:[]}},methods:{handleChooseItem(){console.log("handleChooseItem")},handleUpdate(){console.log("handleUpdate")},handleDelete(){console.log("handleDelete")}},created(){let e=f.cloneDeep(this.password_item_default);this.password_category_default.list.push(e);let s=f.cloneDeep(this.password_category_default);this.password_categories_list.push(s)}},ve=Object.assign(ie,{__name:"Index",setup(e){return(s,a)=>(o(),n("div",se,[d(b,{header_label:"Password Manager"},{default:v(()=>[l("div",ae,[l("div",oe,[d(P,{categories_list:s.password_categories_list,onHandleChooseItem:s.handleChooseItem},null,8,["categories_list","onHandleChooseItem"])]),l("div",ne,[d(le,{model:s.password_categories_list[0].list[0],onHandleUpdate:s.handleUpdate,onHandleDelete:s.handleDelete},null,8,["model","onHandleUpdate","onHandleDelete"])])])]),_:1})]))}});export{ve as default};
