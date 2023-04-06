import{o as H,h as B,w as y,a as n,t as C,l as E,v as I,c as K,g as M,F as S}from"./index-404a1488.js";import{_ as z}from"./CopyMixin.vue_vue_type_script_setup_true_lang-1a100816.js";import{_ as N}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-182c9c46.js";import{_ as P}from"./Card-e89c42db.js";import"./lodash-026a56df.js";var U={},G={get exports(){return U},set exports(o){U=o}};(function(o,p){var c;(function(a){var r={あ:"A",い:"I",う:"U",え:"E",お:"O",か:"KA",き:"KI",く:"KU",け:"KE",こ:"KO",さ:"SA",し:"SHI",す:"SU",せ:"SE",そ:"SO",た:"TA",ち:"CHI",つ:"TSU",て:"TE",と:"TO",な:"NA",に:"NI",ぬ:"NU",ね:"NE",の:"NO",は:"HA",ひ:"HI",ふ:"FU",へ:"HE",ほ:"HO",ま:"MA",み:"MI",む:"MU",め:"ME",も:"MO",や:"YA",ゆ:"YU",よ:"YO",ら:"RA",り:"RI",る:"RU",れ:"RE",ろ:"RO",わ:"WA",ゐ:"I",ゑ:"E",を:"O",ぁ:"A",ぃ:"I",ぅ:"U",ぇ:"E",ぉ:"O",が:"GA",ぎ:"GI",ぐ:"GU",げ:"GE",ご:"GO",ざ:"ZA",じ:"JI",ず:"ZU",ぜ:"ZE",ぞ:"ZO",だ:"DA",ぢ:"JI",づ:"ZU",で:"DE",ど:"DO",ば:"BA",び:"BI",ぶ:"BU",べ:"BE",ぼ:"BO",ぱ:"PA",ぴ:"PI",ぷ:"PU",ぺ:"PE",ぽ:"PO",きゃ:"KYA",きゅ:"KYU",きょ:"KYO",しゃ:"SHA",しゅ:"SHU",しょ:"SHO",ちゃ:"CHA",ちゅ:"CHU",ちょ:"CHO",ちぇ:"CHE",にゃ:"NYA",にゅ:"NYU",にょ:"NYO",ひゃ:"HYA",ひゅ:"HYU",ひょ:"HYO",みゃ:"MYA",みゅ:"MYU",みょ:"MYO",りゃ:"RYA",りゅ:"RYU",りょ:"RYO",ぎゃ:"GYA",ぎゅ:"GYU",ぎょ:"GYO",じゃ:"JA",じゅ:"JU",じょ:"JO",びゃ:"BYA",びゅ:"BYU",びょ:"BYO",ぴゃ:"PYA",ぴゅ:"PYU",ぴょ:"PYO"},b={AA:!0,EE:!0,II:!1,OO:!0,OU:!0,UU:!0},i=function(l,t){var e=null,f=null;return t+1<l.length&&(f=l.substring(t,t+2),e=r[f]),!e&&t<l.length&&(f=l.substring(t,t+1),e=r[f]),{c:f,h:e||null}};a.toHebon=function(l){for(var t="",e="",f=0;f<l.length;){var u=i(l,f);if(u.c=="っ")(h=i(l,f+1)).h!=null&&(h.h.indexOf("CH")==0?u.h="T":u.h=h.h.substring(0,1));else if(u.c=="ん"){var h;(h=i(l,f+1)).h!=null&&"BMP".indexOf(h.h.charAt(0))!=-1?u.h="M":u.h="N"}else u.c=="ー"&&(u.h="");if(u.h!=null){if(e!=null){var v=e+u.h;2<v.length&&(v=v.substring(v.length-2)),b[v]&&(u.h="")}t+=u.h}else t+=u.c;e=u.h,u.c,f+=u.c.length}return t}})(c||(c={})),function(a){var r="ぁ".charCodeAt(0),b="ゖ".charCodeAt(0),i="ァ".charCodeAt(0),l="ヶ".charCodeAt(0);a.toKatakana=function(t){for(var e="",f=0;f<t.length;f+=1){var u=t.charCodeAt(f);e+=r<=u&&u<=b?String.fromCharCode(u-r+i):t.charAt(f)}return e},a.toHiragana=function(t){for(var e="",f=0;f<t.length;f+=1){var u=t.charCodeAt(f);e+=i<=u&&u<=l?String.fromCharCode(u-i+r):t.charAt(f)}return e}}(c||(c={})),function(a){o.exports=a}(c||(c={})),function(a){var r=function(u){var h={},v={};if(u.length%2!=0)throw"bad data length:"+u.length;for(var _,A,x=u.length/2,g=0;g<x;g+=1)_=u[2*g],A=u[2*g+1],h[_]||(h[_]=A),v[A]||(v[A]=_);return{convert:function(k,Z){for(var Y=Z?v:h,O="",s=0;s<k.length;s+=1){var m;s+1<k.length&&(m=Y[k.substring(s,s+2)])?(O+=m,s+=1):(m=Y[k.substring(s,s+1)])?O+=m:O+=k.substring(s,s+1)}return O}}},b=r([" ","　","!","！",'"',"”",'"',"“","#","＃","$","＄","%","％","&","＆","'","’","(","（",")","）","*","＊","+","＋",",","，","-","－",".","．","/","／","0","０","1","１","2","２","3","３","4","４","5","５","6","６","7","７","8","８","9","９",":","：",";","；","<","＜","=","＝",">","＞","?","？","@","＠","A","Ａ","B","Ｂ","C","Ｃ","D","Ｄ","E","Ｅ","F","Ｆ","G","Ｇ","H","Ｈ","I","Ｉ","J","Ｊ","K","Ｋ","L","Ｌ","M","Ｍ","N","Ｎ","O","Ｏ","P","Ｐ","Q","Ｑ","R","Ｒ","S","Ｓ","T","Ｔ","U","Ｕ","V","Ｖ","W","Ｗ","X","Ｘ","Y","Ｙ","Z","Ｚ","[","［","\\","￥","]","］","^","＾","_","＿","`","‘","a","ａ","b","ｂ","c","ｃ","d","ｄ","e","ｅ","f","ｆ","g","ｇ","h","ｈ","i","ｉ","j","ｊ","k","ｋ","l","ｌ","m","ｍ","n","ｎ","o","ｏ","p","ｐ","q","ｑ","r","ｒ","s","ｓ","t","ｔ","u","ｕ","v","ｖ","w","ｗ","x","ｘ","y","ｙ","z","ｚ","{","｛","|","｜","}","｝","~","～"]),i=r(["。","｡","「","｢","」","｣","、","､","・","･","ヲ","ｦ","ァ","ｧ","ィ","ｨ","ゥ","ｩ","ェ","ｪ","ォ","ｫ","ャ","ｬ","ュ","ｭ","ョ","ｮ","ッ","ｯ","ー","ｰ","ア","ｱ","イ","ｲ","ウ","ｳ","エ","ｴ","オ","ｵ","カ","ｶ","キ","ｷ","ク","ｸ","ケ","ｹ","コ","ｺ","ガ","ｶﾞ","ギ","ｷﾞ","グ","ｸﾞ","ゲ","ｹﾞ","ゴ","ｺﾞ","サ","ｻ","シ","ｼ","ス","ｽ","セ","ｾ","ソ","ｿ","ザ","ｻﾞ","ジ","ｼﾞ","ズ","ｽﾞ","ゼ","ｾﾞ","ゾ","ｿﾞ","タ","ﾀ","チ","ﾁ","ツ","ﾂ","テ","ﾃ","ト","ﾄ","ダ","ﾀﾞ","ヂ","ﾁﾞ","ヅ","ﾂﾞ","デ","ﾃﾞ","ド","ﾄﾞ","ナ","ﾅ","ニ","ﾆ","ヌ","ﾇ","ネ","ﾈ","ノ","ﾉ","ハ","ﾊ","ヒ","ﾋ","フ","ﾌ","ヘ","ﾍ","ホ","ﾎ","バ","ﾊﾞ","ビ","ﾋﾞ","ブ","ﾌﾞ","ベ","ﾍﾞ","ボ","ﾎﾞ","パ","ﾊﾟ","ピ","ﾋﾟ","プ","ﾌﾟ","ペ","ﾍﾟ","ポ","ﾎﾟ","マ","ﾏ","ミ","ﾐ","ム","ﾑ","メ","ﾒ","モ","ﾓ","ヤ","ﾔ","ユ","ﾕ","ヨ","ﾖ","ラ","ﾗ","リ","ﾘ","ル","ﾙ","レ","ﾚ","ロ","ﾛ","ワ","ﾜ","ン","ﾝ","ヴ","ｳﾞ","゛","ﾞ","゜","ﾟ","ヰ","ｲ","ヱ","ｴ","ヮ","ﾜ","ヵ","ｶ","ヶ","ｹ"]);function l(u){return b.convert(u,!0)}function t(u){return b.convert(u,!1)}function e(u){return i.convert(u,!1)}function f(u){return i.convert(u,!0)}a.toHanAscii=l,a.toZenAscii=t,a.toHanKana=e,a.toZenKana=f,a.toHan=function(u){return l(e(u))},a.toZen=function(u){return t(f(u))},a.normalize=function(u){return l(f(u))}}(c||(c={}))})(G);const d=U,R={class:"row"},T={class:"col-md-12"},w={class:"table table-borderless"},J=["textContent"],j={colspan:"2"},D=["textContent"],V={class:"input-group"},$=["onUpdate:modelValue"],F=["onClick"],L=n("i",{class:"fa-solid fa-copy"},null,-1),W=[L],q={mixins:[z,N],data(){return{origin:{input:{label:"Input",value:""},output:{hebon:{label:"Hebon",value:""},katakana:{label:"Katakana",value:""},hiragana:{label:"Hiragana",value:""},hankaku_ascii:{label:"Hankaku Ascii",value:""},zenkaku_ascii:{label:"Zenkaku Ascii",value:""},hankaku_kana:{label:"Hankaku Kana",value:""},zenkaku_kana:{label:"Zenkaku Kana",value:""},hankaku:{label:"Hankaku",value:""},zenkaku:{label:"Zenkaku",value:""},normalize:{label:"Normalize",value:""}}},input:null,output:null}},methods:{async handleExecute(){let o=this.input.value;this.output.hebon.value=d.toHebon(o),this.output.katakana.value=d.toKatakana(o),this.output.hiragana.value=d.toHiragana(o),this.output.hankaku_ascii.value=d.toHanAscii(o),this.output.zenkaku_ascii.value=d.toZenAscii(o),this.output.hankaku_kana.value=d.toHanKana(o),this.output.zenkaku_kana.value=d.toZenKana(o),this.output.hankaku.value=d.toHan(o),this.output.zenkaku.value=d.toZen(o),this.output.normalize.value=d.normalize(o)}}},tu=Object.assign(q,{__name:"Japanese",setup(o){return(p,c)=>(H(),B(P,{header_label:"IME変換"},{default:y(()=>[n("div",R,[n("div",T,[n("table",w,[n("tbody",null,[n("tr",null,[n("td",{width:"150",textContent:C(p.input.label)},null,8,J),n("td",null,[E(n("input",{type:"text",class:"form-control","onUpdate:modelValue":c[0]||(c[0]=a=>p.input.value=a)},null,512),[[I,p.input.value]])])]),n("tr",null,[n("td",j,[n("button",{type:"button",class:"btn btn-primary",onClick:c[1]||(c[1]=(...a)=>p.handleExecute&&p.handleExecute(...a))}," 変換 ")])]),(H(!0),K(S,null,M(p.output,(a,r)=>(H(),K("tr",{key:r},[n("td",{textContent:C(a.label)},null,8,D),n("td",V,[E(n("input",{type:"text",class:"form-control","onUpdate:modelValue":b=>a.value=b,disabled:""},null,8,$),[[I,a.value]]),n("button",{type:"button",class:"btn btn-primary",onClick:b=>p.copyToClipboard(a.value)},W,8,F)])]))),128))])])])])]),_:1}))}});export{tu as default};
