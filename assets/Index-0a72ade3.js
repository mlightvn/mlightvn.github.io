import{_,L as p,o as a,c as l,a as e,F as u,g as h,t as g,e as r,p as v,l as b}from"./index-43387229.js";import{V as m}from"./index-7400e1b2.js";const y={data(){return{topics:null,items_list:null,selected_index:null}},async created(){await this.init()},methods:{async init(){switch(this.localStorage=new p,this.localStorage.setLanguageKey("japanese-vietnamese"),this.localStorage.language_key){default:this.topics=m.vietnamese;break}this.items_list=this.topics[this.localStorage.setting.level.topic].value[this.localStorage.setting.level.level].value[this.localStorage.setting.level.sub_level].value},async handleShowTopicContent(t){this.selected_index==t?this.selected_index=null:this.selected_index=t},moveToTop(){window.scrollTo({top:0,behavior:"smooth"})}}},n=t=>(v("data-v-c6712758"),t=t(),b(),t),f={class:"accordion",id:"accordion_jlpt_vocabularies_list"},T=["id"],S=["data-bs-target","aria-controls"],w=["id","aria-labelledby"],L={class:"accordion-body"},x=n(()=>e("p",null,"Pronunciation:",-1)),k=["innerHTML"],I=n(()=>e("p",null,"Meaning:",-1)),$=["innerHTML"],M=n(()=>e("i",{class:"fa-solid fa-jet-fighter-up"},null,-1)),j=[M];function H(t,c,V,B,d,i){return a(),l("div",null,[e("div",f,[(a(!0),l(u,null,h(d.items_list,(s,o)=>(a(),l("div",{class:"accordion-item",key:o},[e("h2",{class:"accordion-header",id:`heading_${o}`},[e("div",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","aria-expanded":"false","data-bs-target":`#collapse_${o}`,"aria-controls":`collapse_${o}`},g(s.word&&s.word!=""?s.word:s.pronunciation),9,S)],8,T),e("div",{id:`collapse_${o}`,"aria-labelledby":`heading_${o}`,"data-bs-parent":"#accordion_jlpt_vocabularies_list",class:"accordion-collapse collapse"},[e("div",L,[x,e("p",null,[e("b",null,[e("span",{class:"text-success",innerHTML:s.pronunciation},null,8,k)])]),r("",!0),r("",!0),I,e("span",{class:"text-success",innerHTML:s.meaning},null,8,$)])],8,w)]))),128))]),e("button",{onClick:c[0]||(c[0]=(...s)=>i.moveToTop&&i.moveToTop(...s)),class:"btn btn-outline-primary rounded-circle btn-sm move-2-top-icon"},j)])}const N=_(y,[["render",H],["__scopeId","data-v-c6712758"]]);export{N as default};
