import{m as f}from"./index-ce911ff9.js";var m=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(l){e.addRange(l)}),t&&t.focus()}},y=m,u={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function b(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function C(e,t){var r,n,l,s,c,a,i=!1;t||(t={}),r=t.debug||!1;try{l=y(),s=document.createRange(),c=document.getSelection(),a=document.createElement("span"),a.textContent=e,a.ariaHidden="true",a.style.all="unset",a.style.position="fixed",a.style.top=0,a.style.clip="rect(0, 0, 0, 0)",a.style.whiteSpace="pre",a.style.webkitUserSelect="text",a.style.MozUserSelect="text",a.style.msUserSelect="text",a.style.userSelect="text",a.addEventListener("copy",function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),typeof o.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=u[t.format]||u.default;window.clipboardData.setData(d,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))}),document.body.appendChild(a),s.selectNodeContents(a),c.addRange(s);var p=document.execCommand("copy");if(!p)throw new Error("copy command was unsuccessful");i=!0}catch(o){r&&console.error("unable to copy using execCommand: ",o),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),i=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),n=b("message"in t?t.message:g),window.prompt(n,e)}}finally{c&&(typeof c.removeRange=="function"?c.removeRange(s):c.removeAllRanges()),a&&document.body.removeChild(a),l()}return i}var v=C;const w={methods:{async copyToClipboard(e){if(e==null||e==="")return this.$snackbar.add({type:"warning",text:"No data to copy"}),!1;await v(e,{debug:!0,message:"Copied to clipboard"}),this.$snackbar.add({type:"info",text:"Copied to clipboard"})},async copy(e){await this.copyToClipboard(e)}}},h=Object.assign(w,{__name:"CopyMixin",setup(e){return f(),()=>{}}});export{h as _};
