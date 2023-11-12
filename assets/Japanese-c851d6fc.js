import{e as y,o as U,i as M,w as C,a as r,t as E,b as H,m as I,v as K,g as S,c as B,h as z,F as R}from"./index-295f84cc.js";import{g as x}from"./lodash-b028437e.js";import{_ as T}from"./CopyMixin.vue_vue_type_script_setup_true_lang-df5fa061.js";import{_ as $}from"./PasteMixin.vue_vue_type_script_lang-1252b51c.js";import{_ as G}from"./InputOutputVariablesMixin.vue_vue_type_script_setup_true_lang-71a2cb55.js";import{_ as j}from"./Card.vue_vue_type_script_setup_true_lang-db57acd5.js";import{P as w}from"./PrimaryButton-9f8e0c45.js";import{P as D}from"./PrimaryOutlineButton-2dd653b5.js";import{R as J}from"./ResetButton-3b18c4f8.js";import{_ as V}from"./ClearCopyPasteButtons.vue_vue_type_script_setup_true_lang-158db2e6.js";var P={exports:{}};(function(i,l){var t;(function(a){var s={あ:"A",い:"I",う:"U",え:"E",お:"O",か:"KA",き:"KI",く:"KU",け:"KE",こ:"KO",さ:"SA",し:"SHI",す:"SU",せ:"SE",そ:"SO",た:"TA",ち:"CHI",つ:"TSU",て:"TE",と:"TO",な:"NA",に:"NI",ぬ:"NU",ね:"NE",の:"NO",は:"HA",ひ:"HI",ふ:"FU",へ:"HE",ほ:"HO",ま:"MA",み:"MI",む:"MU",め:"ME",も:"MO",や:"YA",ゆ:"YU",よ:"YO",ら:"RA",り:"RI",る:"RU",れ:"RE",ろ:"RO",わ:"WA",ゐ:"I",ゑ:"E",を:"O",ぁ:"A",ぃ:"I",ぅ:"U",ぇ:"E",ぉ:"O",が:"GA",ぎ:"GI",ぐ:"GU",げ:"GE",ご:"GO",ざ:"ZA",じ:"JI",ず:"ZU",ぜ:"ZE",ぞ:"ZO",だ:"DA",ぢ:"JI",づ:"ZU",で:"DE",ど:"DO",ば:"BA",び:"BI",ぶ:"BU",べ:"BE",ぼ:"BO",ぱ:"PA",ぴ:"PI",ぷ:"PU",ぺ:"PE",ぽ:"PO",きゃ:"KYA",きゅ:"KYU",きょ:"KYO",しゃ:"SHA",しゅ:"SHU",しょ:"SHO",ちゃ:"CHA",ちゅ:"CHU",ちょ:"CHO",ちぇ:"CHE",にゃ:"NYA",にゅ:"NYU",にょ:"NYO",ひゃ:"HYA",ひゅ:"HYU",ひょ:"HYO",みゃ:"MYA",みゅ:"MYU",みょ:"MYO",りゃ:"RYA",りゅ:"RYU",りょ:"RYO",ぎゃ:"GYA",ぎゅ:"GYU",ぎょ:"GYO",じゃ:"JA",じゅ:"JU",じょ:"JO",びゃ:"BYA",びゅ:"BYU",びょ:"BYO",ぴゃ:"PYA",ぴゅ:"PYU",ぴょ:"PYO"},h={AA:!0,EE:!0,II:!1,OO:!0,OU:!0,UU:!0},c=function(o,e){var n=null,f=null;return e+1<o.length&&(f=o.substring(e,e+2),n=s[f]),!n&&e<o.length&&(f=o.substring(e,e+1),n=s[f]),{c:f,h:n||null}};a.toHebon=function(o){for(var e="",n="",f=0;f<o.length;){var u=c(o,f);if(u.c=="っ")(v=c(o,f+1)).h!=null&&(v.h.indexOf("CH")==0?u.h="T":u.h=v.h.substring(0,1));else if(u.c=="ん"){var v;(v=c(o,f+1)).h!=null&&"BMP".indexOf(v.h.charAt(0))!=-1?u.h="M":u.h="N"}else u.c=="ー"&&(u.h="");if(u.h!=null){if(n!=null){var p=n+u.h;2<p.length&&(p=p.substring(p.length-2)),h[p]&&(u.h="")}e+=u.h}else e+=u.c;n=u.h,u.c,f+=u.c.length}return e}})(t||(t={})),function(a){var s="ぁ".charCodeAt(0),h="ゖ".charCodeAt(0),c="ァ".charCodeAt(0),o="ヶ".charCodeAt(0);a.toKatakana=function(e){for(var n="",f=0;f<e.length;f+=1){var u=e.charCodeAt(f);n+=s<=u&&u<=h?String.fromCharCode(u-s+c):e.charAt(f)}return n},a.toHiragana=function(e){for(var n="",f=0;f<e.length;f+=1){var u=e.charCodeAt(f);n+=c<=u&&u<=o?String.fromCharCode(u-c+s):e.charAt(f)}return n}}(t||(t={})),function(a){i.exports=a}(t||(t={})),function(a){var s=function(u){var v={},p={};if(u.length%2!=0)throw"bad data length:"+u.length;for(var m,A,Z=u.length/2,_=0;_<Z;_+=1)m=u[2*_],A=u[2*_+1],v[m]||(v[m]=A),p[A]||(p[A]=m);return{convert:function(k,N){for(var Y=N?p:v,g="",d=0;d<k.length;d+=1){var O;d+1<k.length&&(O=Y[k.substring(d,d+2)])?(g+=O,d+=1):(O=Y[k.substring(d,d+1)])?g+=O:g+=k.substring(d,d+1)}return g}}},h=s([" ","　","!","！",'"',"”",'"',"“","#","＃","$","＄","%","％","&","＆","'","’","(","（",")","）","*","＊","+","＋",",","，","-","－",".","．","/","／","0","０","1","１","2","２","3","３","4","４","5","５","6","６","7","７","8","８","9","９",":","：",";","；","<","＜","=","＝",">","＞","?","？","@","＠","A","Ａ","B","Ｂ","C","Ｃ","D","Ｄ","E","Ｅ","F","Ｆ","G","Ｇ","H","Ｈ","I","Ｉ","J","Ｊ","K","Ｋ","L","Ｌ","M","Ｍ","N","Ｎ","O","Ｏ","P","Ｐ","Q","Ｑ","R","Ｒ","S","Ｓ","T","Ｔ","U","Ｕ","V","Ｖ","W","Ｗ","X","Ｘ","Y","Ｙ","Z","Ｚ","[","［","\\","￥","]","］","^","＾","_","＿","`","‘","a","ａ","b","ｂ","c","ｃ","d","ｄ","e","ｅ","f","ｆ","g","ｇ","h","ｈ","i","ｉ","j","ｊ","k","ｋ","l","ｌ","m","ｍ","n","ｎ","o","ｏ","p","ｐ","q","ｑ","r","ｒ","s","ｓ","t","ｔ","u","ｕ","v","ｖ","w","ｗ","x","ｘ","y","ｙ","z","ｚ","{","｛","|","｜","}","｝","~","～"]),c=s(["。","｡","「","｢","」","｣","、","､","・","･","ヲ","ｦ","ァ","ｧ","ィ","ｨ","ゥ","ｩ","ェ","ｪ","ォ","ｫ","ャ","ｬ","ュ","ｭ","ョ","ｮ","ッ","ｯ","ー","ｰ","ア","ｱ","イ","ｲ","ウ","ｳ","エ","ｴ","オ","ｵ","カ","ｶ","キ","ｷ","ク","ｸ","ケ","ｹ","コ","ｺ","ガ","ｶﾞ","ギ","ｷﾞ","グ","ｸﾞ","ゲ","ｹﾞ","ゴ","ｺﾞ","サ","ｻ","シ","ｼ","ス","ｽ","セ","ｾ","ソ","ｿ","ザ","ｻﾞ","ジ","ｼﾞ","ズ","ｽﾞ","ゼ","ｾﾞ","ゾ","ｿﾞ","タ","ﾀ","チ","ﾁ","ツ","ﾂ","テ","ﾃ","ト","ﾄ","ダ","ﾀﾞ","ヂ","ﾁﾞ","ヅ","ﾂﾞ","デ","ﾃﾞ","ド","ﾄﾞ","ナ","ﾅ","ニ","ﾆ","ヌ","ﾇ","ネ","ﾈ","ノ","ﾉ","ハ","ﾊ","ヒ","ﾋ","フ","ﾌ","ヘ","ﾍ","ホ","ﾎ","バ","ﾊﾞ","ビ","ﾋﾞ","ブ","ﾌﾞ","ベ","ﾍﾞ","ボ","ﾎﾞ","パ","ﾊﾟ","ピ","ﾋﾟ","プ","ﾌﾟ","ペ","ﾍﾟ","ポ","ﾎﾟ","マ","ﾏ","ミ","ﾐ","ム","ﾑ","メ","ﾒ","モ","ﾓ","ヤ","ﾔ","ユ","ﾕ","ヨ","ﾖ","ラ","ﾗ","リ","ﾘ","ル","ﾙ","レ","ﾚ","ロ","ﾛ","ワ","ﾜ","ン","ﾝ","ヴ","ｳﾞ","゛","ﾞ","゜","ﾟ","ヰ","ｲ","ヱ","ｴ","ヮ","ﾜ","ヵ","ｶ","ヶ","ｹ"]);function o(u){return h.convert(u,!0)}function e(u){return h.convert(u,!1)}function n(u){return c.convert(u,!1)}function f(u){return c.convert(u,!0)}a.toHanAscii=o,a.toZenAscii=e,a.toHanKana=n,a.toZenKana=f,a.toHan=function(u){return o(n(u))},a.toZen=function(u){return e(f(u))},a.normalize=function(u){return o(f(u))}}(t||(t={}))})(P);var F=P.exports;const b=x(F),L={class:"row"},W={class:"col-md-12"},q={class:"table table-borderless"},Q=["textContent"],X={colspan:"2"},uu=["textContent"],fu={class:"input-group"},au=["onUpdate:modelValue"],eu=r("i",{class:"fa-solid fa-copy"},null,-1),tu={mixins:[T,$,G],data(){return{input:{label:"Input",value:""},output:{hebon:{label:"Hebon",value:""},katakana:{label:"Katakana",value:""},hiragana:{label:"Hiragana",value:""},hankaku_ascii:{label:"Hankaku Ascii",value:""},zenkaku_ascii:{label:"Zenkaku Ascii",value:""},hankaku_kana:{label:"Hankaku Kana",value:""},zenkaku_kana:{label:"Zenkaku Kana",value:""},hankaku:{label:"Hankaku",value:""},zenkaku:{label:"Zenkaku",value:""},normalize:{label:"Normalize",value:""}}}},methods:{async handleExecute(){let i=this.input.value;this.output.hebon.value=b.toHebon(i),this.output.katakana.value=b.toKatakana(i),this.output.hiragana.value=b.toHiragana(i),this.output.hankaku_ascii.value=b.toHanAscii(i),this.output.zenkaku_ascii.value=b.toZenAscii(i),this.output.hankaku_kana.value=b.toHanKana(i),this.output.zenkaku_kana.value=b.toZenKana(i),this.output.hankaku.value=b.toHan(i),this.output.zenkaku.value=b.toZen(i),this.output.normalize.value=b.normalize(i)}}},vu=y({...tu,__name:"Japanese",setup(i){return(l,t)=>(U(),M(j,{header_label:"IME変換"},{default:C(()=>[r("div",L,[r("div",W,[r("table",q,[r("tbody",null,[r("tr",null,[r("td",{width:"150",textContent:E(l.input.label)},null,8,Q),r("td",null,[H(V,{value:l.input.value,onClear:t[1]||(t[1]=a=>l.input.value=""),onCopy:t[2]||(t[2]=a=>l.copy(l.input.value)),onPaste:t[3]||(t[3]=a=>l.pasteToObject(l.input,"value"))},{default:C(()=>[I(r("input",{type:"text",class:"form-control","onUpdate:modelValue":t[0]||(t[0]=a=>l.input.value=a)},null,512),[[K,l.input.value]])]),_:1},8,["value"])])]),r("tr",null,[r("td",X,[H(w,{onClick:l.handleExecute},{default:C(()=>[S(" 変換 ")]),_:1},8,["onClick"]),H(J,{onClick:l.handleReset},null,8,["onClick"])])]),(U(!0),B(R,null,z(l.output,(a,s)=>(U(),B("tr",{key:s},[r("td",{textContent:E(a.label)},null,8,uu),r("td",fu,[I(r("input",{type:"text",class:"form-control","onUpdate:modelValue":h=>a.value=h,disabled:""},null,8,au),[[K,a.value]]),H(D,{onClick:h=>l.copyToClipboard(a.value)},{default:C(()=>[eu]),_:2},1032,["onClick"])])]))),128))])])])])]),_:1}))}});export{vu as default};