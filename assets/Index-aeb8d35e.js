import{_ as m,L as b,o as n,c as o,a as e,t as d,n as h,f as _,e as u,F as p,g as f}from"./index-e1daf2c0.js";import{V as v}from"./index-7400e1b2.js";const x={components:{},data(){return{score:0,furigana_shown_flag:!0,quiz:{index:0,question:"",furigana:"",selected:!1,options:[{label:"",correct:!1,checked:!1,enabled:!0}]},topics:null,items_list:null,selected_index:null}},computed:{current_level_item:{get(){if(this.localStorage.setting.level.sub_level){let t=this.localStorage.setting.level,s={debug:this.topics[t.topic],topic:this.topics[t.topic].label,level:this.topics[t.topic].value[t.level].label,sub_level:this.topics[t.topic].value[t.level].value[t.sub_level].label};return s.label=s.topic+" > "+s.level+" > "+s.sub_level,{level:t,level_label:s,text:s.label}}return null}},quizIndex:{get(){return this.quiz.index??0},set(t){t<0&&(t=0),t>=this.items_list.length&&(t=this.items_list.length-1);let s=this.items_list[t];this.quiz={index:t,question:s.word,furigana:s.pronunciation,selected:!1,options:[{label:s.meaning??s.example,correct:!0,checked:!1,enabled:!0}]},this.generateRandomFalseOptions(),this.optionsRandomPosition()}}},watch:{},methods:{next(){this.quizIndex=this.getRandomInt(this.items_list.length)},checkAnswerOption(t){t.enabled&&(t.checked=!0,this.quiz.selected=!0,t.enabled=!1,this.score=t.correct?this.score+1:this.score-1)},async init(){this.localStorage=new b,this.localStorage.setLanguageKey("japanese-vietnamese"),this.topics=v.vietnamese,this.items_list=this.topics[this.localStorage.setting.level.topic].value[this.localStorage.setting.level.level].value[this.localStorage.setting.level.sub_level].value,this.quizIndex=await this.getRandomInt(this.items_list.length)},getRandomInt(t){return Math.floor(Math.random()*Math.floor(t))},generateRandomFalseOptions(){let t=0;for(let s=0;s<3&&(t++,!(t>20));s++){let c=this.getRandomInt(this.items_list.length);if(c==this.quizIndex){s--;continue}let a=this.items_list[c];this.quiz.options.push({label:a.meaning==null||a.meaning==""?a.example:a.meaning,correct:!1,checked:!1,enabled:!0})}},optionsRandomPosition(){this.quiz.options.sort(()=>Math.random()-.5)}},async created(){await this.init()}},w={class:"container"},y={key:0,class:"container"},k=e("div",{class:"row mb-2"},[e("div",{class:"col-12 p-0 bg-warning text-white px-3 py-2 h6"},[e("span",null,"Choose Level before playing")])],-1),C=[k],L={key:1,class:"container mt-2"},q={class:"row mb-2"},z={class:"col-12 h3 text-center"},V=["textContent"],S={class:"row mb-2"},I=e("div",{class:"col-3"},"Score:",-1),M={class:"col-2 text-end bg-light border border-1"},R=["textContent"],H=e("div",{class:"col-1 text-center"},[e("svg",{width:"10",height:"20",viewBox:"0 0 10 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M0 0H10V7.85C10 8.23333 9.91667 8.575 9.75 8.875C9.58333 9.175 9.35 9.41667 9.05 9.6L5.5 11.7L6.2 14H10L6.9 16.2L8.1 20L5 17.65L1.9 20L3.1 16.2L0 14H3.8L4.5 11.7L0.95 9.6C0.65 9.41667 0.416667 9.175 0.25 8.875C0.0833333 8.575 0 8.23333 0 7.85V0ZM2 2V7.85L4 9.05V2H2ZM8 2H6V9.05L8 7.85V2Z",fill:"#1C1B1F"})])],-1),B={class:"row mb-2"},F={class:"col-12 p-0"},O=["textContent"],T={class:"row mb-2"},N={class:"col-5 p-0"},Z={key:0,class:"row mb-2"},A={class:"col-12 p-0"},P=["textContent"],j={class:"row mb-2"},D={class:"col-12 p-0 d-grid gap-2"},E=["onClick","disabled"],K=["innerHTML"],G={key:0,class:"text-success float-end"},J=e("i",{class:"fa-solid fa-circle-check"},null,-1),Q=[J],U={class:"row mb-2"},W={class:"col-12 p-0 text-end"},X=["disabled"],Y=e("i",{class:"fa-solid fa-angle-right"},null,-1);function $(t,s,c,a,l,r){return n(),o("div",w,[l.items_list==null||l.items_list.length===0?(n(),o("div",y,C)):(n(),o("div",L,[e("div",q,[e("div",z,[e("span",{textContent:d(r.current_level_item.text)},null,8,V)])]),e("div",S,[I,e("div",M,[e("span",{class:h(`h5
                            ${l.score>=0?"text-primary":"text-danger"}
                        `),textContent:d(l.score)},null,10,R)]),H]),e("div",B,[e("div",F,[e("textarea",{class:"form-control",rows:"2",readonly:"",textContent:d(l.quiz.question)},null,8,O)])]),e("div",T,[e("div",N,[e("span",{type:"button",class:h(`btn rounded-pill btn-sm
                            ${l.furigana_shown_flag?"btn-outline-primary":"btn-outline-secondary"}
                        `),onClick:s[0]||(s[0]=i=>l.furigana_shown_flag=!l.furigana_shown_flag)},[e("i",{class:h(`fa-solid fa-eye${l.furigana_shown_flag?"":"-slash"}`)},null,2),_(" Furigana ")],2)])]),l.furigana_shown_flag?(n(),o("div",Z,[e("div",A,[e("textarea",{class:"form-control",rows:"2",readonly:"",textContent:d(l.quiz.furigana)},null,8,P)])])):u("",!0),e("div",j,[e("div",D,[(n(!0),o(p,null,f(l.quiz.options,(i,g)=>(n(),o("div",{class:h(`btn rounded-pill px-3 py-1 text-start
                            ${i.checked?"btn-outline-primary disabled":"btn-outline-secondary"}
                            ${i.label?"":"d-none"}
                        `),key:g,onClick:ee=>r.checkAnswerOption(i),disabled:!i.enabled},[e("span",{innerHTML:i.label,class:""},null,8,K),!i.enabled&&i.correct?(n(),o("span",G,Q)):u("",!0)],10,E))),128))])]),e("div",U,[e("div",W,[e("button",{class:"btn btn-primary btn-lg",onClick:s[1]||(s[1]=(...i)=>r.next&&r.next(...i)),disabled:!l.quiz.selected},[_("   "),Y,_("   ")],8,X)])])]))])}const le=m(x,[["render",$]]);export{le as default};
