import{o as U,h as y,w as M,a as n,t as C,k as E,v as I,c as K,g as S,F as z}from"./index-a86750d8.js";import{l as x}from"./lodash-026a56df.js";import{_ as N}from"./CopyMixin-0d4027b1.js";import{_ as P}from"./Card-0b3a5bec.js";var m={},G={get exports(){return m},set exports(o){m=o}};(function(o,v){var i;(function(a){var c={あ:"A",い:"I",う:"U",え:"E",お:"O",か:"KA",き:"KI",く:"KU",け:"KE",こ:"KO",さ:"SA",し:"SHI",す:"SU",せ:"SE",そ:"SO",た:"TA",ち:"CHI",つ:"TSU",て:"TE",と:"TO",な:"NA",に:"NI",ぬ:"NU",ね:"NE",の:"NO",は:"HA",ひ:"HI",ふ:"FU",へ:"HE",ほ:"HO",ま:"MA",み:"MI",む:"MU",め:"ME",も:"MO",や:"YA",ゆ:"YU",よ:"YO",ら:"RA",り:"RI",る:"RU",れ:"RE",ろ:"RO",わ:"WA",ゐ:"I",ゑ:"E",を:"O",ぁ:"A",ぃ:"I",ぅ:"U",ぇ:"E",ぉ:"O",が:"GA",ぎ:"GI",ぐ:"GU",げ:"GE",ご:"GO",ざ:"ZA",じ:"JI",ず:"ZU",ぜ:"ZE",ぞ:"ZO",だ:"DA",ぢ:"JI",づ:"ZU",で:"DE",ど:"DO",ば:"BA",び:"BI",ぶ:"BU",べ:"BE",ぼ:"BO",ぱ:"PA",ぴ:"PI",ぷ:"PU",ぺ:"PE",ぽ:"PO",きゃ:"KYA",きゅ:"KYU",きょ:"KYO",しゃ:"SHA",しゅ:"SHU",しょ:"SHO",ちゃ:"CHA",ちゅ:"CHU",ちょ:"CHO",ちぇ:"CHE",にゃ:"NYA",にゅ:"NYU",にょ:"NYO",ひゃ:"HYA",ひゅ:"HYU",ひょ:"HYO",みゃ:"MYA",みゅ:"MYU",みょ:"MYO",りゃ:"RYA",りゅ:"RYU",りょ:"RYO",ぎゃ:"GYA",ぎゅ:"GYU",ぎょ:"GYO",じゃ:"JA",じゅ:"JU",じょ:"JO",びゃ:"BYA",びゅ:"BYU",びょ:"BYO",ぴゃ:"PYA",ぴゅ:"PYU",ぴょ:"PYO"},b={AA:!0,EE:!0,II:!1,OO:!0,OU:!0,UU:!0},r=function(l,t){var e=null,f=null;return t+1<l.length&&(f=l.substring(t,t+2),e=c[f]),!e&&t<l.length&&(f=l.substring(t,t+1),e=c[f]),{c:f,h:e||null}};a.toHebon=function(l){for(var t="",e="",f=0;f<l.length;){var u=r(l,f);if(u.c=="っ")(h=r(l,f+1)).h!=null&&(h.h.indexOf("CH")==0?u.h="T":u.h=h.h.substring(0,1));else if(u.c=="ん"){var h;(h=r(l,f+1)).h!=null&&"BMP".indexOf(h.h.charAt(0))!=-1?u.h="M":u.h="N"}else u.c=="ー"&&(u.h="");if(u.h!=null){if(e!=null){var p=e+u.h;2<p.length&&(p=p.substring(p.length-2)),b[p]&&(u.h="")}t+=u.h}else t+=u.c;e=u.h,u.c,f+=u.c.length}return t}})(i||(i={})),function(a){var c="ぁ".charCodeAt(0),b="ゖ".charCodeAt(0),r="ァ".charCodeAt(0),l="ヶ".charCodeAt(0);a.toKatakana=function(t){for(var e="",f=0;f<t.length;f+=1){var u=t.charCodeAt(f);e+=c<=u&&u<=b?String.fromCharCode(u-c+r):t.charAt(f)}return e},a.toHiragana=function(t){for(var e="",f=0;f<t.length;f+=1){var u=t.charCodeAt(f);e+=r<=u&&u<=l?String.fromCharCode(u-r+c):t.charAt(f)}return e}}(i||(i={})),function(a){o.exports=a}(i||(i={})),function(a){var c=function(u){var h={},p={};if(u.length%2!=0)throw"bad data length:"+u.length;for(var A,_,Z=u.length/2,g=0;g<Z;g+=1)A=u[2*g],_=u[2*g+1],h[A]||(h[A]=_),p[_]||(p[_]=A);return{convert:function(k,B){for(var Y=B?p:h,O="",s=0;s<k.length;s+=1){var H;s+1<k.length&&(H=Y[k.substring(s,s+2)])?(O+=H,s+=1):(H=Y[k.substring(s,s+1)])?O+=H:O+=k.substring(s,s+1)}return O}}},b=c([" ","　","!","！",'"',"”",'"',"“","#","＃","$","＄","%","％","&","＆","'","’","(","（",")","）","*","＊","+","＋",",","，","-","－",".","．","/","／","0","０","1","１","2","２","3","３","4","４","5","５","6","６","7","７","8","８","9","９",":","：",";","；","<","＜","=","＝",">","＞","?","？","@","＠","A","Ａ","B","Ｂ","C","Ｃ","D","Ｄ","E","Ｅ","F","Ｆ","G","Ｇ","H","Ｈ","I","Ｉ","J","Ｊ","K","Ｋ","L","Ｌ","M","Ｍ","N","Ｎ","O","Ｏ","P","Ｐ","Q","Ｑ","R","Ｒ","S","Ｓ","T","Ｔ","U","Ｕ","V","Ｖ","W","Ｗ","X","Ｘ","Y","Ｙ","Z","Ｚ","[","［","\\","￥","]","］","^","＾","_","＿","`","‘","a","ａ","b","ｂ","c","ｃ","d","ｄ","e","ｅ","f","ｆ","g","ｇ","h","ｈ","i","ｉ","j","ｊ","k","ｋ","l","ｌ","m","ｍ","n","ｎ","o","ｏ","p","ｐ","q","ｑ","r","ｒ","s","ｓ","t","ｔ","u","ｕ","v","ｖ","w","ｗ","x","ｘ","y","ｙ","z","ｚ","{","｛","|","｜","}","｝","~","～"]),r=c(["。","｡","「","｢","」","｣","、","､","・","･","ヲ","ｦ","ァ","ｧ","ィ","ｨ","ゥ","ｩ","ェ","ｪ","ォ","ｫ","ャ","ｬ","ュ","ｭ","ョ","ｮ","ッ","ｯ","ー","ｰ","ア","ｱ","イ","ｲ","ウ","ｳ","エ","ｴ","オ","ｵ","カ","ｶ","キ","ｷ","ク","ｸ","ケ","ｹ","コ","ｺ","ガ","ｶﾞ","ギ","ｷﾞ","グ","ｸﾞ","ゲ","ｹﾞ","ゴ","ｺﾞ","サ","ｻ","シ","ｼ","ス","ｽ","セ","ｾ","ソ","ｿ","ザ","ｻﾞ","ジ","ｼﾞ","ズ","ｽﾞ","ゼ","ｾﾞ","ゾ","ｿﾞ","タ","ﾀ","チ","ﾁ","ツ","ﾂ","テ","ﾃ","ト","ﾄ","ダ","ﾀﾞ","ヂ","ﾁﾞ","ヅ","ﾂﾞ","デ","ﾃﾞ","ド","ﾄﾞ","ナ","ﾅ","ニ","ﾆ","ヌ","ﾇ","ネ","ﾈ","ノ","ﾉ","ハ","ﾊ","ヒ","ﾋ","フ","ﾌ","ヘ","ﾍ","ホ","ﾎ","バ","ﾊﾞ","ビ","ﾋﾞ","ブ","ﾌﾞ","ベ","ﾍﾞ","ボ","ﾎﾞ","パ","ﾊﾟ","ピ","ﾋﾟ","プ","ﾌﾟ","ペ","ﾍﾟ","ポ","ﾎﾟ","マ","ﾏ","ミ","ﾐ","ム","ﾑ","メ","ﾒ","モ","ﾓ","ヤ","ﾔ","ユ","ﾕ","ヨ","ﾖ","ラ","ﾗ","リ","ﾘ","ル","ﾙ","レ","ﾚ","ロ","ﾛ","ワ","ﾜ","ン","ﾝ","ヴ","ｳﾞ","゛","ﾞ","゜","ﾟ","ヰ","ｲ","ヱ","ｴ","ヮ","ﾜ","ヵ","ｶ","ヶ","ｹ"]);function l(u){return b.convert(u,!0)}function t(u){return b.convert(u,!1)}function e(u){return r.convert(u,!1)}function f(u){return r.convert(u,!0)}a.toHanAscii=l,a.toZenAscii=t,a.toHanKana=e,a.toZenKana=f,a.toHan=function(u){return l(e(u))},a.toZen=function(u){return t(f(u))},a.normalize=function(u){return l(f(u))}}(i||(i={}))})(G);const d=m,R={class:"row"},D={class:"col-md-12"},T={class:"table table-borderless"},w=["textContent"],J={colspan:"2"},j=["textContent"],V={class:"input-group"},F=["onUpdate:modelValue"],$=["onClick"],L=n("i",{class:"fa-solid fa-copy"},null,-1),W=[L],q={mixins:[N],data(){return{origin:{input:{label:"Input",value:""},output:{hebon:{label:"Hebon",value:""},katakana:{label:"Katakana",value:""},hiragana:{label:"Hiragana",value:""},hankaku_ascii:{label:"Hankaku Ascii",value:""},zenkaku_ascii:{label:"Zenkaku Ascii",value:""},hankaku_kana:{label:"Hankaku Kana",value:""},zenkaku_kana:{label:"Zenkaku Kana",value:""},hankaku:{label:"Hankaku",value:""},zenkaku:{label:"Zenkaku",value:""},normalize:{label:"Normalize",value:""}}},input:null,output:null}},methods:{async handleExecute(){let o=this.input.value;this.output.hebon.value=d.toHebon(o),this.output.katakana.value=d.toKatakana(o),this.output.hiragana.value=d.toHiragana(o),this.output.hankaku_ascii.value=d.toHanAscii(o),this.output.zenkaku_ascii.value=d.toZenAscii(o),this.output.hankaku_kana.value=d.toHanKana(o),this.output.zenkaku_kana.value=d.toZenKana(o),this.output.hankaku.value=d.toHan(o),this.output.zenkaku.value=d.toZen(o),this.output.normalize.value=d.normalize(o)}},created(){this.input=x.cloneDeep(this.origin.input),this.output=x.cloneDeep(this.origin.output)}},au=Object.assign(q,{__name:"Japanese",setup(o){return(v,i)=>(U(),y(P,{header_label:"IME変換"},{default:M(()=>[n("div",R,[n("div",D,[n("table",T,[n("tbody",null,[n("tr",null,[n("td",{width:"150",textContent:C(v.input.label)},null,8,w),n("td",null,[E(n("input",{type:"text",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=a=>v.input.value=a)},null,512),[[I,v.input.value]])])]),n("tr",null,[n("td",J,[n("button",{type:"button",class:"btn btn-primary",onClick:i[1]||(i[1]=(...a)=>v.handleExecute&&v.handleExecute(...a))}," 変換 ")])]),(U(!0),K(z,null,S(v.output,(a,c)=>(U(),K("tr",{key:c},[n("td",{textContent:C(a.label)},null,8,j),n("td",V,[E(n("input",{type:"text",class:"form-control","onUpdate:modelValue":b=>a.value=b,disabled:""},null,8,F),[[I,a.value]]),n("button",{type:"button",class:"btn btn-primary",onClick:b=>v.copyToClipboard(a.value)},W,8,$)])]))),128))])])])])]),_:1}))}});export{au as default};
