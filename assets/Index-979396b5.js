import{r as v,o as e,c as i,b as h,w as _,a as l,m as w,v as y,f as C,h as $,F as r,g as c,t as b,e as P,u as j}from"./index-f76c4a32.js";import{_ as x}from"./CopyMixin.vue_vue_type_script_setup_true_lang-f92658a2.js";import{_ as L}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-453a20a5.js";import{_ as m}from"./Card-770b0178.js";import{_ as F}from"./PasteMixin.vue_vue_type_script_lang-30109a2b.js";import"./lodash-026a56df.js";const I={label:"JLPT 5",slug:"jlpt-5",list:[{label:"文法",slug:"grammars",list:[{label:"動詞",slug:"doushi"},{label:"Động từ thể ます",slug:"masu-kei"},{label:"Động từ thì quá khứ – Thể た",slug:"ta-kei"},{label:"Các cấu trúc sử dụng thể て",slug:"te-kei"}]},{label:"語彙・言葉",slug:"vocabularies",list:[{label:"第01課",slug:"dai-01-ka"},{label:"第02課",slug:"dai-02-ka"},{label:"第03課",slug:"dai-03-ka"},{label:"第04課",slug:"dai-04-ka"},{label:"第05課",slug:"dai-05-ka"},{label:"第06課",slug:"dai-06-ka"},{label:"第07課",slug:"dai-07-ka"},{label:"第08課",slug:"dai-08-ka"},{label:"第09課",slug:"dai-09-ka"},{label:"第10課",slug:"dai-10-ka"},{label:"第11課",slug:"dai-11-ka"},{label:"第12課",slug:"dai-12-ka"},{label:"第13課",slug:"dai-13-ka"}]},{label:"漢字",slug:"kanji",list:[{label:"103漢字",slug:"103-kanji"}]}]},N={label:"JLPT 3",slug:"jlpt-3",list:[{label:"文法",slug:"grammars",list:[{label:"～ば～ほど",slug:"ba-hodo"},{label:"～にすぎない",slug:"ni-suginai"},{label:"～ても",slug:"temo"},{label:"～ないで、なくて、ず、ずに",slug:"naide-nakute-zu-zuni"}]},{label:"語彙・言葉",slug:"vocabularies",list:[{label:"第01課：台所・リビングルーム",slug:"dai-01-ka"},{label:"第02課：Nấu ăn  (Phần 1)",slug:"dai-02-ka"},{label:"第03課：Nấu ăn (Phần 2)",slug:"dai-03-ka"},{label:"第04課：Dọn dẹp",slug:"dai-04-ka"},{label:"第05課：Giặt đồ",slug:"dai-05-ka"},{label:"第06課：Chăm sóc trẻ con và thú cưng",slug:"dai-06-ka"},{label:"第07課：Lên kế hoạch đi du lịch",slug:"dai-07-ka"},{label:"第08課：Đi tàu (Phần 1)",slug:"dai-08-ka"},{label:"第09課：Đi tàu (Phần 2)",slug:"dai-09-ka"},{label:"第10課：Lái xe ô tô (Phần 1)",slug:"dai-10-ka"},{label:"第11課：Lái xe ô tô (Phần 2)",slug:"dai-11-ka"},{label:"第12課：",slug:"dai-12-ka"},{label:"第13課：",slug:"dai-13-ka"}]},{label:"漢字",slug:"kanji",list:[{label:"第01課",slug:"dai-01-ka"},{label:"第02課",slug:"dai-02-ka"}]}]},S={label:"JLPT 2",slug:"jlpt-2",list:[{label:"文法",slug:"grammars",list:[{label:"～といえば",slug:"to-ieba"},{label:"～にもかかわらず",slug:"nimo-kakawarazu"},{label:"～をめぐって",slug:"wo-megutte"},{label:"～にしては",slug:"ni-shiteha"},{label:"～げ",slug:"ge"}]},{label:"語彙・言葉",slug:"vocabularies",list:[{label:"第01課",slug:"dai-01-ka"},{label:"第02課",slug:"dai-02-ka"},{label:"第03課",slug:"dai-03-ka"},{label:"第04課",slug:"dai-04-ka"},{label:"第05課",slug:"dai-05-ka"},{label:"第06課",slug:"dai-06-ka"},{label:"第07課",slug:"dai-07-ka"},{label:"第08課",slug:"dai-08-ka"},{label:"第09課",slug:"dai-09-ka"},{label:"第10課",slug:"dai-10-ka"},{label:"第11課",slug:"dai-11-ka"},{label:"第12課",slug:"dai-12-ka"},{label:"第13課",slug:"dai-13-ka"}]},{label:"漢字",slug:"kanji",list:[{label:"第01課",slug:"dai-01-ka"},{label:"第02課",slug:"dai-02-ka"}]}]},f={big_levels_list:[I,N,S]},B={class:"row"},T=l("div",{class:"col-md-2"},"Menu label",-1),V={class:"col"},D={class:"input-group"},z=["disabled"],J=l("i",{class:"fa-solid fa-xmark"},null,-1),M=[J],R=l("i",{class:"fa-solid fa-paste"},null,-1),q=[R],E=l("i",{class:"fa-solid fa-paste"},null,-1),G=l("i",{class:"fa-solid fa-search"},null,-1),O={class:"text-end"},U=["disabled"],A=l("i",{class:"fa-solid fa-search"},null,-1),H=[A],K=l("i",{class:"fa-solid fa-xmark"},null,-1),Q=[K],W={class:"row"},X={class:"row"},Y={class:"col-12 h5 fw-bold"},Z=["textContent"],ll={class:"row"},sl={class:"row"},al={class:"col h6 fw-bold"},tl=["textContent"],el={class:"col-12"},il={class:"nav"},nl={class:"nav-item list-group-item-action m-1 p-1"},ol={class:"float-end"},ul=["onClick"],dl=l("i",{class:"fa-solid fa-copy"},null,-1),rl=[dl],cl={class:"row"},bl={class:"row"},gl=["textContent"],hl={class:"row"},_l={class:"row"},kl=["textContent"],pl={class:"col"},ml={class:"list-group"},fl={mixins:[x,F,L],data(){return{input:{search:""},output:{big_levels_list:[]}}},methods:{handleSearch:async function(){let g=this.input.search;if(!g)return this.$snackbar.add({type:"warning",text:"No input data for search"}),!1;let s=[];if(await f.big_levels_list.filter(async t=>{let u=[];return await t.list.filter(async a=>{let o=[];return await a.list.filter(async n=>{await n.label.toLowerCase().includes(g.toLowerCase())&&await o.push(n)}),o.length>0&&await u.push({...a,list:o}),!1}),u.length>0&&await s.push({...t,list:u}),!1}),this.output.big_levels_list=s,s.length===0)return this.$snackbar.add({type:"warning",text:"No search result data"}),!1;this.$snackbar.add({type:"success",text:"Data found"})},handleSearchByPasting:async function(){await this.pasteFromClipboardIntoInput("search"),await this.handleSearch()},async pasteFromClipboardIntoInput(g="search"){await this.paste(s=>this.input[g]=s.replace(/[\r|\n]/g,""))}}},xl=Object.assign(fl,{__name:"Index",setup(g){return(s,t)=>{const u=v("router-link");return e(),i("div",null,[h(m,{header_label:"Filter"},{footer:_(()=>[l("div",O,[l("button",{class:"btn btn-primary me-2",disabled:!s.input.search,onClick:t[4]||(t[4]=(...a)=>s.handleSearch&&s.handleSearch(...a))},H,8,U),l("button",{class:"btn btn-secondary",onClick:t[5]||(t[5]=(...a)=>s.handleReset&&s.handleReset(...a))},Q)])]),default:_(()=>[l("div",B,[T,l("div",V,[l("div",D,[w(l("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=a=>s.input.search=a)},null,512),[[y,s.input.search]]),l("button",{type:"button",class:"btn btn-outline-primary",disabled:!s.input.search,onClick:t[1]||(t[1]=a=>s.input.search="")},M,8,z),l("button",{type:"button",class:"btn btn-outline-primary",onClick:t[2]||(t[2]=a=>s.pasteFromClipboardIntoInput("search"))},q),l("button",{type:"button",class:"btn btn-outline-primary",onClick:t[3]||(t[3]=(...a)=>s.handleSearchByPasting&&s.handleSearchByPasting(...a))},[E,C(" ➡ "),G])])])])]),_:1}),s.output.big_levels_list&&s.output.big_levels_list.length>0?(e(),$(m,{key:0,header_label:"Filtered results"},{default:_(()=>[l("div",W,[(e(!0),i(r,null,c(s.output.big_levels_list,(a,o)=>(e(),i("div",{class:"col-12 mb-3",key:o},[l("div",X,[l("div",Y,[l("span",{textContent:b(a.label)},null,8,Z)])]),l("div",ll,[(e(!0),i(r,null,c(a.list,(n,k)=>(e(),i("div",{class:"col-4",key:k},[l("div",sl,[l("div",al,[l("span",{textContent:b(n.label)},null,8,tl)])]),(e(!0),i(r,null,c(n.list,(d,p)=>(e(),i("div",{class:"row",key:p},[l("div",el,[l("ul",il,[l("li",nl,[h(u,{target:"_blank",class:"",to:`${a.slug}/${n.slug}/${d.slug}`,textContent:b(d.label)},null,8,["to","textContent"]),l("div",ol,[l("button",{type:"button",class:"btn btn-outline-primary ms-1",onClick:vl=>s.copyToClipboard(d.label)},rl,8,ul)])])])])]))),128))]))),128))])]))),128))])]),_:1})):P("",!0),h(m,{header_label:"Full List"},{default:_(()=>[l("div",cl,[(e(!0),i(r,null,c(j(f).big_levels_list,(a,o)=>(e(),i("div",{class:"col-12 mb-3",key:o},[l("div",bl,[l("div",{class:"col-12 h5 fw-bold",textContent:b(a.label)},null,8,gl)]),l("div",hl,[(e(!0),i(r,null,c(a.list,(n,k)=>(e(),i("div",{class:"col-4 mb-4",key:k},[l("div",_l,[l("div",{class:"col h6 fw-bold",textContent:b(n.label)},null,8,kl)]),(e(!0),i(r,null,c(n.list,(d,p)=>(e(),i("div",{class:"row",key:p},[l("div",pl,[l("div",ml,[h(u,{class:"list-group-item list-group-item-action",target:"_blank",to:`${a.slug}/${n.slug}/${d.slug}`,textContent:b(d.label)},null,8,["to","textContent"])])])]))),128))]))),128))])]))),128))])]),_:1})])}}});export{xl as default};
