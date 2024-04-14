import{bH as k,_ as y,o as s,c as l,a as t,F as h,h as d,g as p,t as v,n as f,f as _}from"./index-c4370b3b.js";import{V as m}from"./index-7400e1b2.js";const L={data(){return{topics:null,items_list:null,default_level:null,selected_level:null,indexes:{topic:null,level:null,sub_level:null}}},created(){this.init()},methods:{init(){switch(this.localStorage=new k,this.localStorage.setLanguageKey("japanese-vietnamese"),this.default_level=this.localStorage.default_level,this.localStorage.language_key){case"japanese-english":this.topics=m.english;break;case"japanese-vietnamese":this.topics=m.vietnamese;break;default:this.topics=m.vietnamese;break}this.selected_level=this.localStorage.setting.level,this.items_list=this.topics[this.selected_level.topic].value[this.selected_level.level].value[this.selected_level.sub_level].value,this.indexes={...this.selected_level}},setLevel(e=this.default_level){this.selected_level=e,this.localStorage.setLevel(e)},isLevelSelected(e=null,c=null){return c===null||e===null?!1:c.topic===e.topic&&c.level===e.level&&c.sub_level===e.sub_level},handleTopicExpand(e){this.indexes.topic=this.indexes.topic&&this.indexes.topic===e?null:e},handleLevelExpand(e){this.indexes.level=this.indexes.level&&this.indexes.level===e?null:e}}},S={class:""},x={class:"list-group"},C=["onClick"],w={class:"btn btn-light"},j={key:0,class:"ms-4 list-group"},E=["onClick"],V={class:"btn btn-light"},T={key:0,class:"ms-4 list-group"},B=["onClick"],N={key:0,class:"text-primary"},F=t("i",{class:"fa-solid fa-circle-check"},null,-1),z=[F];function D(e,c,H,I,i,o){return s(),l("div",S,[t("ul",x,[(s(!0),l(h,null,d(i.topics,(g,a)=>(s(),l("div",{key:a},[t("li",{class:"ps-2 list-group-item d-flex justify-content-between align-items-center text-primary",onClick:u=>o.handleTopicExpand(a)},[p(v(g.label)+" ",1),t("span",w,[t("i",{class:f(`fa-solid ${a===i.indexes.topic?"fa-chevron-up":"fa-chevron-down"}`)},null,2)])],8,C),a===i.indexes.topic?(s(),l("ul",j,[(s(!0),l(h,null,d(g.value,(u,n)=>(s(),l("div",{key:n},[t("li",{class:"ps-1 list-group-item d-flex justify-content-between align-items-center text-info",onClick:b=>o.handleLevelExpand(n)},[p(v(u.label)+" ",1),t("span",V,[t("i",{class:f(`fa-solid ${n===i.indexes.level?"fa-chevron-up":"fa-chevron-down"}`)},null,2)])],8,E),n===i.indexes.level?(s(),l("ul",T,[(s(!0),l(h,null,d(u.value,(b,r)=>(s(),l("li",{class:f(`ps-1 list-group-item d-flex justify-content-between align-items-center
                                ${o.isLevelSelected({topic:a,level:n,sub_level:r},i.selected_level)?"border border-primary text-primary":""}
                                `),key:r,onClick:K=>o.setLevel({topic:a,level:n,sub_level:r})},[p(v(b.label)+" ",1),o.isLevelSelected({topic:a,level:n,sub_level:r},i.selected_level)?(s(),l("span",N,z)):_("",!0)],10,B))),128))])):_("",!0)]))),128))])):_("",!0)]))),128))])])}const G=y(L,[["render",D]]);export{G as default};
