(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd5f3"],{"2c5a":function(e,t,n){"use strict";n.r(t);var l=n("7a23");const c={class:"list-group"},s=["onClick"],i={class:"btn btn-light"},a={key:0,class:"card"},o={class:"card-body bg-light"},b=Object(l["g"])("p",null,"Pronunciation:",-1),u=["innerHTML"],d=Object(l["g"])("p",null,"Type:",-1),r=["innerHTML"],g=Object(l["g"])("p",null,"Meaning:",-1),j=["innerHTML"];function p(e,t,n,p,O,h){return Object(l["t"])(),Object(l["f"])("div",null,[Object(l["g"])("ul",c,[(Object(l["t"])(!0),Object(l["f"])(l["a"],null,Object(l["x"])(O.items_list,(e,t)=>(Object(l["t"])(),Object(l["f"])("div",{key:t},[Object(l["g"])("li",{class:"list-group-item d-flex justify-content-between align-items-center text-primary",onClick:e=>h.handleShowTopicContent(t)},[Object(l["i"])(Object(l["A"])(e.word&&""!=e.word?e.word:e.pronunciation)+" ",1),Object(l["g"])("span",i,[Object(l["g"])("i",{class:Object(l["p"])("fa-solid fa-chevron-"+(t===O.selected_index?"up":"down"))},null,2)])],8,s),t===O.selected_index?(Object(l["t"])(),Object(l["f"])("div",a,[Object(l["g"])("div",o,[b,Object(l["g"])("p",null,[Object(l["g"])("b",null,[Object(l["g"])("span",{class:"text-success",innerHTML:e.pronunciation},null,8,u)])]),d,Object(l["g"])("p",null,[Object(l["g"])("b",null,[Object(l["g"])("span",{class:"text-success",innerHTML:e.type},null,8,r)])]),g,Object(l["g"])("span",{class:"text-success",innerHTML:e.meaning},null,8,j)])])):Object(l["e"])("",!0)]))),128))])])}var O=n("e988"),h=n("4b76"),w={data(){return{topics:null,items_list:null,selected_index:null}},async created(){await this.init()},methods:{async init(){switch(this.localStorage=new O["a"],this.localStorage.language_key){default:this.topics=h["a"].english;break}this.items_list=this.topics[this.localStorage.setting.level.topic].value[this.localStorage.setting.level.level].value[this.localStorage.setting.level.sub_level].value},async handleShowTopicContent(e){this.selected_index==e?this.selected_index=null:this.selected_index=e}}},v=n("6b0d"),f=n.n(v);const x=f()(w,[["render",p]]);t["default"]=x}}]);
//# sourceMappingURL=chunk-2d0bd5f3.0e018fc0.js.map