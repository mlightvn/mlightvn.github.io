import{C as ht}from"./Configuration-8f6968ec.js";import{m as Gt,z as Lt,A as qe,B as jt,C as pt,D as zt,o as We,h as Tt,w as Fe,i as Ke,c as Ct,F as $t,g as Ut,u as ke,n as qt,E as Kt,a as U,t as gt}from"./index-404a1488.js";/**!
 * Sortable 1.15.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function mt(o,e){var t=Object.keys(o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(o);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),t.push.apply(t,n)}return t}function j(o){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?mt(Object(t),!0).forEach(function(n){Vt(o,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(t)):mt(Object(t)).forEach(function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(t,n))})}return o}function Xe(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Xe=function(e){return typeof e}:Xe=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xe(o)}function Vt(o,e,t){return e in o?Object.defineProperty(o,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[e]=t,o}function K(){return K=Object.assign||function(o){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}return o},K.apply(this,arguments)}function Zt(o,e){if(o==null)return{};var t={},n=Object.keys(o),i,r;for(r=0;r<n.length;r++)i=n[r],!(e.indexOf(i)>=0)&&(t[i]=o[i]);return t}function Qt(o,e){if(o==null)return{};var t=Zt(o,e),n,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(o,n)&&(t[n]=o[n])}return t}var Jt="1.15.0";function q(o){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(o)}var V=q(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),Oe=q(/Edge/i),vt=q(/firefox/i),_e=q(/safari/i)&&!q(/chrome/i)&&!q(/android/i),Ot=q(/iP(ad|od|hone)/i),It=q(/chrome/i)&&q(/android/i),At={capture:!1,passive:!1};function y(o,e,t){o.addEventListener(e,t,!V&&At)}function b(o,e,t){o.removeEventListener(e,t,!V&&At)}function Ge(o,e){if(e){if(e[0]===">"&&(e=e.substring(1)),o)try{if(o.matches)return o.matches(e);if(o.msMatchesSelector)return o.msMatchesSelector(e);if(o.webkitMatchesSelector)return o.webkitMatchesSelector(e)}catch{return!1}return!1}}function en(o){return o.host&&o!==document&&o.host.nodeType?o.host:o.parentNode}function G(o,e,t,n){if(o){t=t||document;do{if(e!=null&&(e[0]===">"?o.parentNode===t&&Ge(o,e):Ge(o,e))||n&&o===t)return o;if(o===t)break}while(o=en(o))}return null}var bt=/\s+/g;function F(o,e,t){if(o&&e)if(o.classList)o.classList[t?"add":"remove"](e);else{var n=(" "+o.className+" ").replace(bt," ").replace(" "+e+" "," ");o.className=(n+(t?" "+e:"")).replace(bt," ")}}function h(o,e,t){var n=o&&o.style;if(n){if(t===void 0)return document.defaultView&&document.defaultView.getComputedStyle?t=document.defaultView.getComputedStyle(o,""):o.currentStyle&&(t=o.currentStyle),e===void 0?t:t[e];!(e in n)&&e.indexOf("webkit")===-1&&(e="-webkit-"+e),n[e]=t+(typeof t=="string"?"":"px")}}function de(o,e){var t="";if(typeof o=="string")t=o;else do{var n=h(o,"transform");n&&n!=="none"&&(t=n+" "+t)}while(!e&&(o=o.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(t)}function Pt(o,e,t){if(o){var n=o.getElementsByTagName(e),i=0,r=n.length;if(t)for(;i<r;i++)t(n[i],i);return n}return[]}function L(){var o=document.scrollingElement;return o||document.documentElement}function C(o,e,t,n,i){if(!(!o.getBoundingClientRect&&o!==window)){var r,a,l,u,s,f,d;if(o!==window&&o.parentNode&&o!==L()?(r=o.getBoundingClientRect(),a=r.top,l=r.left,u=r.bottom,s=r.right,f=r.height,d=r.width):(a=0,l=0,u=window.innerHeight,s=window.innerWidth,f=window.innerHeight,d=window.innerWidth),(e||t)&&o!==window&&(i=i||o.parentNode,!V))do if(i&&i.getBoundingClientRect&&(h(i,"transform")!=="none"||t&&h(i,"position")!=="static")){var m=i.getBoundingClientRect();a-=m.top+parseInt(h(i,"border-top-width")),l-=m.left+parseInt(h(i,"border-left-width")),u=a+r.height,s=l+r.width;break}while(i=i.parentNode);if(n&&o!==window){var w=de(i||o),v=w&&w.a,E=w&&w.d;w&&(a/=E,l/=v,d/=v,f/=E,u=a+f,s=l+d)}return{top:a,left:l,bottom:u,right:s,width:d,height:f}}}function yt(o,e,t){for(var n=te(o,!0),i=C(o)[e];n;){var r=C(n)[t],a=void 0;if(t==="top"||t==="left"?a=i>=r:a=i<=r,!a)return n;if(n===L())break;n=te(n,!1)}return!1}function he(o,e,t,n){for(var i=0,r=0,a=o.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==p.ghost&&(n||a[r]!==p.dragged)&&G(a[r],t.draggable,o,!1)){if(i===e)return a[r];i++}r++}return null}function ut(o,e){for(var t=o.lastElementChild;t&&(t===p.ghost||h(t,"display")==="none"||e&&!Ge(t,e));)t=t.previousElementSibling;return t||null}function R(o,e){var t=0;if(!o||!o.parentNode)return-1;for(;o=o.previousElementSibling;)o.nodeName.toUpperCase()!=="TEMPLATE"&&o!==p.clone&&(!e||Ge(o,e))&&t++;return t}function Et(o){var e=0,t=0,n=L();if(o)do{var i=de(o),r=i.a,a=i.d;e+=o.scrollLeft*r,t+=o.scrollTop*a}while(o!==n&&(o=o.parentNode));return[e,t]}function tn(o,e){for(var t in o)if(o.hasOwnProperty(t)){for(var n in e)if(e.hasOwnProperty(n)&&e[n]===o[t][n])return Number(t)}return-1}function te(o,e){if(!o||!o.getBoundingClientRect)return L();var t=o,n=!1;do if(t.clientWidth<t.scrollWidth||t.clientHeight<t.scrollHeight){var i=h(t);if(t.clientWidth<t.scrollWidth&&(i.overflowX=="auto"||i.overflowX=="scroll")||t.clientHeight<t.scrollHeight&&(i.overflowY=="auto"||i.overflowY=="scroll")){if(!t.getBoundingClientRect||t===document.body)return L();if(n||e)return t;n=!0}}while(t=t.parentNode);return L()}function nn(o,e){if(o&&e)for(var t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o}function Ve(o,e){return Math.round(o.top)===Math.round(e.top)&&Math.round(o.left)===Math.round(e.left)&&Math.round(o.height)===Math.round(e.height)&&Math.round(o.width)===Math.round(e.width)}var De;function Nt(o,e){return function(){if(!De){var t=arguments,n=this;t.length===1?o.call(n,t[0]):o.apply(n,t),De=setTimeout(function(){De=void 0},e)}}}function on(){clearTimeout(De),De=void 0}function xt(o,e,t){o.scrollLeft+=e,o.scrollTop+=t}function Mt(o){var e=window.Polymer,t=window.jQuery||window.Zepto;return e&&e.dom?e.dom(o).cloneNode(!0):t?t(o).clone(!0)[0]:o.cloneNode(!0)}var X="Sortable"+new Date().getTime();function rn(){var o=[],e;return{captureAnimationState:function(){if(o=[],!!this.options.animation){var n=[].slice.call(this.el.children);n.forEach(function(i){if(!(h(i,"display")==="none"||i===p.ghost)){o.push({target:i,rect:C(i)});var r=j({},o[o.length-1].rect);if(i.thisAnimationDuration){var a=de(i,!0);a&&(r.top-=a.f,r.left-=a.e)}i.fromRect=r}})}},addAnimationState:function(n){o.push(n)},removeAnimationState:function(n){o.splice(tn(o,{target:n}),1)},animateAll:function(n){var i=this;if(!this.options.animation){clearTimeout(e),typeof n=="function"&&n();return}var r=!1,a=0;o.forEach(function(l){var u=0,s=l.target,f=s.fromRect,d=C(s),m=s.prevFromRect,w=s.prevToRect,v=l.rect,E=de(s,!0);E&&(d.top-=E.f,d.left-=E.e),s.toRect=d,s.thisAnimationDuration&&Ve(m,d)&&!Ve(f,d)&&(v.top-d.top)/(v.left-d.left)===(f.top-d.top)/(f.left-d.left)&&(u=ln(v,m,w,i.options)),Ve(d,f)||(s.prevFromRect=f,s.prevToRect=d,u||(u=i.options.animation),i.animate(s,v,d,u)),u&&(r=!0,a=Math.max(a,u),clearTimeout(s.animationResetTimer),s.animationResetTimer=setTimeout(function(){s.animationTime=0,s.prevFromRect=null,s.fromRect=null,s.prevToRect=null,s.thisAnimationDuration=null},u),s.thisAnimationDuration=u)}),clearTimeout(e),r?e=setTimeout(function(){typeof n=="function"&&n()},a):typeof n=="function"&&n(),o=[]},animate:function(n,i,r,a){if(a){h(n,"transition",""),h(n,"transform","");var l=de(this.el),u=l&&l.a,s=l&&l.d,f=(i.left-r.left)/(u||1),d=(i.top-r.top)/(s||1);n.animatingX=!!f,n.animatingY=!!d,h(n,"transform","translate3d("+f+"px,"+d+"px,0)"),this.forRepaintDummy=an(n),h(n,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),h(n,"transform","translate3d(0,0,0)"),typeof n.animated=="number"&&clearTimeout(n.animated),n.animated=setTimeout(function(){h(n,"transition",""),h(n,"transform",""),n.animated=!1,n.animatingX=!1,n.animatingY=!1},a)}}}}function an(o){return o.offsetWidth}function ln(o,e,t,n){return Math.sqrt(Math.pow(e.top-o.top,2)+Math.pow(e.left-o.left,2))/Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))*n.animation}var se=[],Ze={initializeByDefault:!0},Ie={mount:function(e){for(var t in Ze)Ze.hasOwnProperty(t)&&!(t in e)&&(e[t]=Ze[t]);se.forEach(function(n){if(n.pluginName===e.pluginName)throw"Sortable: Cannot mount plugin ".concat(e.pluginName," more than once")}),se.push(e)},pluginEvent:function(e,t,n){var i=this;this.eventCanceled=!1,n.cancel=function(){i.eventCanceled=!0};var r=e+"Global";se.forEach(function(a){t[a.pluginName]&&(t[a.pluginName][r]&&t[a.pluginName][r](j({sortable:t},n)),t.options[a.pluginName]&&t[a.pluginName][e]&&t[a.pluginName][e](j({sortable:t},n)))})},initializePlugins:function(e,t,n,i){se.forEach(function(l){var u=l.pluginName;if(!(!e.options[u]&&!l.initializeByDefault)){var s=new l(e,t,e.options);s.sortable=e,s.options=e.options,e[u]=s,K(n,s.defaults)}});for(var r in e.options)if(e.options.hasOwnProperty(r)){var a=this.modifyOption(e,r,e.options[r]);typeof a<"u"&&(e.options[r]=a)}},getEventProperties:function(e,t){var n={};return se.forEach(function(i){typeof i.eventProperties=="function"&&K(n,i.eventProperties.call(t[i.pluginName],e))}),n},modifyOption:function(e,t,n){var i;return se.forEach(function(r){e[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[t]=="function"&&(i=r.optionListeners[t].call(e[r.pluginName],n))}),i}};function sn(o){var e=o.sortable,t=o.rootEl,n=o.name,i=o.targetEl,r=o.cloneEl,a=o.toEl,l=o.fromEl,u=o.oldIndex,s=o.newIndex,f=o.oldDraggableIndex,d=o.newDraggableIndex,m=o.originalEvent,w=o.putSortable,v=o.extraEventProperties;if(e=e||t&&t[X],!!e){var E,Y=e.options,z="on"+n.charAt(0).toUpperCase()+n.substr(1);window.CustomEvent&&!V&&!Oe?E=new CustomEvent(n,{bubbles:!0,cancelable:!0}):(E=document.createEvent("Event"),E.initEvent(n,!0,!0)),E.to=a||t,E.from=l||t,E.item=i||t,E.clone=r,E.oldIndex=u,E.newIndex=s,E.oldDraggableIndex=f,E.newDraggableIndex=d,E.originalEvent=m,E.pullMode=w?w.lastPutMode:void 0;var A=j(j({},v),Ie.getEventProperties(n,e));for(var B in A)E[B]=A[B];t&&t.dispatchEvent(E),Y[z]&&Y[z].call(e,E)}}var un=["evt"],N=function(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.evt,r=Qt(n,un);Ie.pluginEvent.bind(p)(e,t,j({dragEl:c,parentEl:S,ghostEl:g,rootEl:_,nextEl:le,lastDownEl:Re,cloneEl:D,cloneHidden:ee,dragStarted:ye,putSortable:O,activeSortable:p.active,originalEvent:i,oldIndex:ce,oldDraggableIndex:Se,newIndex:k,newDraggableIndex:J,hideGhostForTarget:Rt,unhideGhostForTarget:Yt,cloneNowHidden:function(){ee=!0},cloneNowShown:function(){ee=!1},dispatchSortableEvent:function(l){P({sortable:t,name:l,originalEvent:i})}},r))};function P(o){sn(j({putSortable:O,cloneEl:D,targetEl:c,rootEl:_,oldIndex:ce,oldDraggableIndex:Se,newIndex:k,newDraggableIndex:J},o))}var c,S,g,_,le,Re,D,ee,ce,k,Se,J,Pe,O,fe=!1,Le=!1,je=[],re,H,Qe,Je,wt,_t,ye,ue,Te,Ce=!1,Ne=!1,Ye,I,et=[],rt=!1,ze=[],Ue=typeof document<"u",xe=Ot,Dt=Oe||V?"cssFloat":"float",fn=Ue&&!It&&!Ot&&"draggable"in document.createElement("div"),Ft=function(){if(Ue){if(V)return!1;var o=document.createElement("x");return o.style.cssText="pointer-events:auto",o.style.pointerEvents==="auto"}}(),kt=function(e,t){var n=h(e),i=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),r=he(e,0,t),a=he(e,1,t),l=r&&h(r),u=a&&h(a),s=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+C(r).width,f=u&&parseInt(u.marginLeft)+parseInt(u.marginRight)+C(a).width;if(n.display==="flex")return n.flexDirection==="column"||n.flexDirection==="column-reverse"?"vertical":"horizontal";if(n.display==="grid")return n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&l.float&&l.float!=="none"){var d=l.float==="left"?"left":"right";return a&&(u.clear==="both"||u.clear===d)?"vertical":"horizontal"}return r&&(l.display==="block"||l.display==="flex"||l.display==="table"||l.display==="grid"||s>=i&&n[Dt]==="none"||a&&n[Dt]==="none"&&s+f>i)?"vertical":"horizontal"},cn=function(e,t,n){var i=n?e.left:e.top,r=n?e.right:e.bottom,a=n?e.width:e.height,l=n?t.left:t.top,u=n?t.right:t.bottom,s=n?t.width:t.height;return i===l||r===u||i+a/2===l+s/2},dn=function(e,t){var n;return je.some(function(i){var r=i[X].options.emptyInsertThreshold;if(!(!r||ut(i))){var a=C(i),l=e>=a.left-r&&e<=a.right+r,u=t>=a.top-r&&t<=a.bottom+r;if(l&&u)return n=i}}),n},Xt=function(e){function t(r,a){return function(l,u,s,f){var d=l.options.group.name&&u.options.group.name&&l.options.group.name===u.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return t(r(l,u,s,f),a)(l,u,s,f);var m=(a?l:u).options.group.name;return r===!0||typeof r=="string"&&r===m||r.join&&r.indexOf(m)>-1}}var n={},i=e.group;(!i||Xe(i)!="object")&&(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),n.revertClone=i.revertClone,e.group=n},Rt=function(){!Ft&&g&&h(g,"display","none")},Yt=function(){!Ft&&g&&h(g,"display","")};Ue&&!It&&document.addEventListener("click",function(o){if(Le)return o.preventDefault(),o.stopPropagation&&o.stopPropagation(),o.stopImmediatePropagation&&o.stopImmediatePropagation(),Le=!1,!1},!0);var ae=function(e){if(c){e=e.touches?e.touches[0]:e;var t=dn(e.clientX,e.clientY);if(t){var n={};for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);n.target=n.rootEl=t,n.preventDefault=void 0,n.stopPropagation=void 0,t[X]._onDragOver(n)}}},hn=function(e){c&&c.parentNode[X]._isOutsideThisEl(e.target)};function p(o,e){if(!(o&&o.nodeType&&o.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));this.el=o,this.options=e=K({},e),o[X]=this;var t={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(o.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return kt(o,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,l){a.setData("Text",l.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:p.supportPointer!==!1&&"PointerEvent"in window&&!_e,emptyInsertThreshold:5};Ie.initializePlugins(this,o,t);for(var n in t)!(n in e)&&(e[n]=t[n]);Xt(e);for(var i in this)i.charAt(0)==="_"&&typeof this[i]=="function"&&(this[i]=this[i].bind(this));this.nativeDraggable=e.forceFallback?!1:fn,this.nativeDraggable&&(this.options.touchStartThreshold=1),e.supportPointer?y(o,"pointerdown",this._onTapStart):(y(o,"mousedown",this._onTapStart),y(o,"touchstart",this._onTapStart)),this.nativeDraggable&&(y(o,"dragover",this),y(o,"dragenter",this)),je.push(this.el),e.store&&e.store.get&&this.sort(e.store.get(this)||[]),K(this,rn())}p.prototype={constructor:p,_isOutsideThisEl:function(e){!this.el.contains(e)&&e!==this.el&&(ue=null)},_getDirection:function(e,t){return typeof this.options.direction=="function"?this.options.direction.call(this,e,t,c):this.options.direction},_onTapStart:function(e){if(e.cancelable){var t=this,n=this.el,i=this.options,r=i.preventOnFilter,a=e.type,l=e.touches&&e.touches[0]||e.pointerType&&e.pointerType==="touch"&&e,u=(l||e).target,s=e.target.shadowRoot&&(e.path&&e.path[0]||e.composedPath&&e.composedPath()[0])||u,f=i.filter;if(wn(n),!c&&!(/mousedown|pointerdown/.test(a)&&e.button!==0||i.disabled)&&!s.isContentEditable&&!(!this.nativeDraggable&&_e&&u&&u.tagName.toUpperCase()==="SELECT")&&(u=G(u,i.draggable,n,!1),!(u&&u.animated)&&Re!==u)){if(ce=R(u),Se=R(u,i.draggable),typeof f=="function"){if(f.call(this,e,u,this)){P({sortable:t,rootEl:s,name:"filter",targetEl:u,toEl:n,fromEl:n}),N("filter",t,{evt:e}),r&&e.cancelable&&e.preventDefault();return}}else if(f&&(f=f.split(",").some(function(d){if(d=G(s,d.trim(),n,!1),d)return P({sortable:t,rootEl:d,name:"filter",targetEl:u,fromEl:n,toEl:n}),N("filter",t,{evt:e}),!0}),f)){r&&e.cancelable&&e.preventDefault();return}i.handle&&!G(s,i.handle,n,!1)||this._prepareDragStart(e,l,u)}}},_prepareDragStart:function(e,t,n){var i=this,r=i.el,a=i.options,l=r.ownerDocument,u;if(n&&!c&&n.parentNode===r){var s=C(n);if(_=r,c=n,S=c.parentNode,le=c.nextSibling,Re=n,Pe=a.group,p.dragged=c,re={target:c,clientX:(t||e).clientX,clientY:(t||e).clientY},wt=re.clientX-s.left,_t=re.clientY-s.top,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,c.style["will-change"]="all",u=function(){if(N("delayEnded",i,{evt:e}),p.eventCanceled){i._onDrop();return}i._disableDelayedDragEvents(),!vt&&i.nativeDraggable&&(c.draggable=!0),i._triggerDragStart(e,t),P({sortable:i,name:"choose",originalEvent:e}),F(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(f){Pt(c,f.trim(),tt)}),y(l,"dragover",ae),y(l,"mousemove",ae),y(l,"touchmove",ae),y(l,"mouseup",i._onDrop),y(l,"touchend",i._onDrop),y(l,"touchcancel",i._onDrop),vt&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),N("delayStart",this,{evt:e}),a.delay&&(!a.delayOnTouchOnly||t)&&(!this.nativeDraggable||!(Oe||V))){if(p.eventCanceled){this._onDrop();return}y(l,"mouseup",i._disableDelayedDrag),y(l,"touchend",i._disableDelayedDrag),y(l,"touchcancel",i._disableDelayedDrag),y(l,"mousemove",i._delayedDragTouchMoveHandler),y(l,"touchmove",i._delayedDragTouchMoveHandler),a.supportPointer&&y(l,"pointermove",i._delayedDragTouchMoveHandler),i._dragStartTimer=setTimeout(u,a.delay)}else u()}},_delayedDragTouchMoveHandler:function(e){var t=e.touches?e.touches[0]:e;Math.max(Math.abs(t.clientX-this._lastX),Math.abs(t.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&tt(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._disableDelayedDrag),b(e,"touchend",this._disableDelayedDrag),b(e,"touchcancel",this._disableDelayedDrag),b(e,"mousemove",this._delayedDragTouchMoveHandler),b(e,"touchmove",this._delayedDragTouchMoveHandler),b(e,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(e,t){t=t||e.pointerType=="touch"&&e,!this.nativeDraggable||t?this.options.supportPointer?y(document,"pointermove",this._onTouchMove):t?y(document,"touchmove",this._onTouchMove):y(document,"mousemove",this._onTouchMove):(y(c,"dragend",this),y(_,"dragstart",this._onDragStart));try{document.selection?Be(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(e,t){if(fe=!1,_&&c){N("dragStarted",this,{evt:t}),this.nativeDraggable&&y(document,"dragover",hn);var n=this.options;!e&&F(c,n.dragClass,!1),F(c,n.ghostClass,!0),p.active=this,e&&this._appendGhost(),P({sortable:this,name:"start",originalEvent:t})}else this._nulling()},_emulateDragOver:function(){if(H){this._lastX=H.clientX,this._lastY=H.clientY,Rt();for(var e=document.elementFromPoint(H.clientX,H.clientY),t=e;e&&e.shadowRoot&&(e=e.shadowRoot.elementFromPoint(H.clientX,H.clientY),e!==t);)t=e;if(c.parentNode[X]._isOutsideThisEl(e),t)do{if(t[X]){var n=void 0;if(n=t[X]._onDragOver({clientX:H.clientX,clientY:H.clientY,target:e,rootEl:t}),n&&!this.options.dragoverBubble)break}e=t}while(t=t.parentNode);Yt()}},_onTouchMove:function(e){if(re){var t=this.options,n=t.fallbackTolerance,i=t.fallbackOffset,r=e.touches?e.touches[0]:e,a=g&&de(g,!0),l=g&&a&&a.a,u=g&&a&&a.d,s=xe&&I&&Et(I),f=(r.clientX-re.clientX+i.x)/(l||1)+(s?s[0]-et[0]:0)/(l||1),d=(r.clientY-re.clientY+i.y)/(u||1)+(s?s[1]-et[1]:0)/(u||1);if(!p.active&&!fe){if(n&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<n)return;this._onDragStart(e,!0)}if(g){a?(a.e+=f-(Qe||0),a.f+=d-(Je||0)):a={a:1,b:0,c:0,d:1,e:f,f:d};var m="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");h(g,"webkitTransform",m),h(g,"mozTransform",m),h(g,"msTransform",m),h(g,"transform",m),Qe=f,Je=d,H=r}e.cancelable&&e.preventDefault()}},_appendGhost:function(){if(!g){var e=this.options.fallbackOnBody?document.body:_,t=C(c,!0,xe,!0,e),n=this.options;if(xe){for(I=e;h(I,"position")==="static"&&h(I,"transform")==="none"&&I!==document;)I=I.parentNode;I!==document.body&&I!==document.documentElement?(I===document&&(I=L()),t.top+=I.scrollTop,t.left+=I.scrollLeft):I=L(),et=Et(I)}g=c.cloneNode(!0),F(g,n.ghostClass,!1),F(g,n.fallbackClass,!0),F(g,n.dragClass,!0),h(g,"transition",""),h(g,"transform",""),h(g,"box-sizing","border-box"),h(g,"margin",0),h(g,"top",t.top),h(g,"left",t.left),h(g,"width",t.width),h(g,"height",t.height),h(g,"opacity","0.8"),h(g,"position",xe?"absolute":"fixed"),h(g,"zIndex","100000"),h(g,"pointerEvents","none"),p.ghost=g,e.appendChild(g),h(g,"transform-origin",wt/parseInt(g.style.width)*100+"% "+_t/parseInt(g.style.height)*100+"%")}},_onDragStart:function(e,t){var n=this,i=e.dataTransfer,r=n.options;if(N("dragStart",this,{evt:e}),p.eventCanceled){this._onDrop();return}N("setupClone",this),p.eventCanceled||(D=Mt(c),D.removeAttribute("id"),D.draggable=!1,D.style["will-change"]="",this._hideClone(),F(D,this.options.chosenClass,!1),p.clone=D),n.cloneId=Be(function(){N("clone",n),!p.eventCanceled&&(n.options.removeCloneOnHide||_.insertBefore(D,c),n._hideClone(),P({sortable:n,name:"clone"}))}),!t&&F(c,r.dragClass,!0),t?(Le=!0,n._loopId=setInterval(n._emulateDragOver,50)):(b(document,"mouseup",n._onDrop),b(document,"touchend",n._onDrop),b(document,"touchcancel",n._onDrop),i&&(i.effectAllowed="move",r.setData&&r.setData.call(n,i,c)),y(document,"drop",n),h(c,"transform","translateZ(0)")),fe=!0,n._dragStartId=Be(n._dragStarted.bind(n,t,e)),y(document,"selectstart",n),ye=!0,_e&&h(document.body,"user-select","none")},_onDragOver:function(e){var t=this.el,n=e.target,i,r,a,l=this.options,u=l.group,s=p.active,f=Pe===u,d=l.sort,m=O||s,w,v=this,E=!1;if(rt)return;function Y(be,Ht){N(be,v,j({evt:e,isOwner:f,axis:w?"vertical":"horizontal",revert:a,dragRect:i,targetRect:r,canSort:d,fromSortable:m,target:n,completed:A,onMove:function(dt,Wt){return Me(_,t,c,i,dt,C(dt),e,Wt)},changed:B},Ht))}function z(){Y("dragOverAnimationCapture"),v.captureAnimationState(),v!==m&&m.captureAnimationState()}function A(be){return Y("dragOverCompleted",{insertion:be}),be&&(f?s._hideClone():s._showClone(v),v!==m&&(F(c,O?O.options.ghostClass:s.options.ghostClass,!1),F(c,l.ghostClass,!0)),O!==v&&v!==p.active?O=v:v===p.active&&O&&(O=null),m===v&&(v._ignoreWhileAnimating=n),v.animateAll(function(){Y("dragOverAnimationComplete"),v._ignoreWhileAnimating=null}),v!==m&&(m.animateAll(),m._ignoreWhileAnimating=null)),(n===c&&!c.animated||n===t&&!n.animated)&&(ue=null),!l.dragoverBubble&&!e.rootEl&&n!==document&&(c.parentNode[X]._isOutsideThisEl(e.target),!be&&ae(e)),!l.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),E=!0}function B(){k=R(c),J=R(c,l.draggable),P({sortable:v,name:"change",toEl:t,newIndex:k,newDraggableIndex:J,originalEvent:e})}if(e.preventDefault!==void 0&&e.cancelable&&e.preventDefault(),n=G(n,l.draggable,t,!0),Y("dragOver"),p.eventCanceled)return E;if(c.contains(e.target)||n.animated&&n.animatingX&&n.animatingY||v._ignoreWhileAnimating===n)return A(!1);if(Le=!1,s&&!l.disabled&&(f?d||(a=S!==_):O===this||(this.lastPutMode=Pe.checkPull(this,s,c,e))&&u.checkPut(this,s,c,e))){if(w=this._getDirection(e,n)==="vertical",i=C(c),Y("dragOverValid"),p.eventCanceled)return E;if(a)return S=_,z(),this._hideClone(),Y("revert"),p.eventCanceled||(le?_.insertBefore(c,le):_.appendChild(c)),A(!0);var x=ut(t,l.draggable);if(!x||vn(e,w,this)&&!x.animated){if(x===c)return A(!1);if(x&&t===e.target&&(n=x),n&&(r=C(n)),Me(_,t,c,i,n,r,e,!!n)!==!1)return z(),x&&x.nextSibling?t.insertBefore(c,x.nextSibling):t.appendChild(c),S=t,B(),A(!0)}else if(x&&mn(e,w,this)){var ne=he(t,0,l,!0);if(ne===c)return A(!1);if(n=ne,r=C(n),Me(_,t,c,i,n,r,e,!1)!==!1)return z(),t.insertBefore(c,ne),S=t,B(),A(!0)}else if(n.parentNode===t){r=C(n);var W=0,oe,pe=c.parentNode!==t,M=!cn(c.animated&&c.toRect||i,n.animated&&n.toRect||r,w),ge=w?"top":"left",Z=yt(n,"top","top")||yt(c,"top","top"),me=Z?Z.scrollTop:void 0;ue!==n&&(oe=r[ge],Ce=!1,Ne=!M&&l.invertSwap||pe),W=bn(e,n,r,w,M?1:l.swapThreshold,l.invertedSwapThreshold==null?l.swapThreshold:l.invertedSwapThreshold,Ne,ue===n);var $;if(W!==0){var ie=R(c);do ie-=W,$=S.children[ie];while($&&(h($,"display")==="none"||$===g))}if(W===0||$===n)return A(!1);ue=n,Te=W;var ve=n.nextElementSibling,Q=!1;Q=W===1;var Ae=Me(_,t,c,i,n,r,e,Q);if(Ae!==!1)return(Ae===1||Ae===-1)&&(Q=Ae===1),rt=!0,setTimeout(gn,30),z(),Q&&!ve?t.appendChild(c):n.parentNode.insertBefore(c,Q?ve:n),Z&&xt(Z,0,me-Z.scrollTop),S=c.parentNode,oe!==void 0&&!Ne&&(Ye=Math.abs(oe-C(n)[ge])),B(),A(!0)}if(t.contains(c))return A(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){b(document,"mousemove",this._onTouchMove),b(document,"touchmove",this._onTouchMove),b(document,"pointermove",this._onTouchMove),b(document,"dragover",ae),b(document,"mousemove",ae),b(document,"touchmove",ae)},_offUpEvents:function(){var e=this.el.ownerDocument;b(e,"mouseup",this._onDrop),b(e,"touchend",this._onDrop),b(e,"pointerup",this._onDrop),b(e,"touchcancel",this._onDrop),b(document,"selectstart",this)},_onDrop:function(e){var t=this.el,n=this.options;if(k=R(c),J=R(c,n.draggable),N("drop",this,{evt:e}),S=c&&c.parentNode,k=R(c),J=R(c,n.draggable),p.eventCanceled){this._nulling();return}fe=!1,Ne=!1,Ce=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),at(this.cloneId),at(this._dragStartId),this.nativeDraggable&&(b(document,"drop",this),b(t,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),_e&&h(document.body,"user-select",""),h(c,"transform",""),e&&(ye&&(e.cancelable&&e.preventDefault(),!n.dropBubble&&e.stopPropagation()),g&&g.parentNode&&g.parentNode.removeChild(g),(_===S||O&&O.lastPutMode!=="clone")&&D&&D.parentNode&&D.parentNode.removeChild(D),c&&(this.nativeDraggable&&b(c,"dragend",this),tt(c),c.style["will-change"]="",ye&&!fe&&F(c,O?O.options.ghostClass:this.options.ghostClass,!1),F(c,this.options.chosenClass,!1),P({sortable:this,name:"unchoose",toEl:S,newIndex:null,newDraggableIndex:null,originalEvent:e}),_!==S?(k>=0&&(P({rootEl:S,name:"add",toEl:S,fromEl:_,originalEvent:e}),P({sortable:this,name:"remove",toEl:S,originalEvent:e}),P({rootEl:S,name:"sort",toEl:S,fromEl:_,originalEvent:e}),P({sortable:this,name:"sort",toEl:S,originalEvent:e})),O&&O.save()):k!==ce&&k>=0&&(P({sortable:this,name:"update",toEl:S,originalEvent:e}),P({sortable:this,name:"sort",toEl:S,originalEvent:e})),p.active&&((k==null||k===-1)&&(k=ce,J=Se),P({sortable:this,name:"end",toEl:S,originalEvent:e}),this.save()))),this._nulling()},_nulling:function(){N("nulling",this),_=c=S=g=le=D=Re=ee=re=H=ye=k=J=ce=Se=ue=Te=O=Pe=p.dragged=p.ghost=p.clone=p.active=null,ze.forEach(function(e){e.checked=!0}),ze.length=Qe=Je=0},handleEvent:function(e){switch(e.type){case"drop":case"dragend":this._onDrop(e);break;case"dragenter":case"dragover":c&&(this._onDragOver(e),pn(e));break;case"selectstart":e.preventDefault();break}},toArray:function(){for(var e=[],t,n=this.el.children,i=0,r=n.length,a=this.options;i<r;i++)t=n[i],G(t,a.draggable,this.el,!1)&&e.push(t.getAttribute(a.dataIdAttr)||En(t));return e},sort:function(e,t){var n={},i=this.el;this.toArray().forEach(function(r,a){var l=i.children[a];G(l,this.options.draggable,i,!1)&&(n[r]=l)},this),t&&this.captureAnimationState(),e.forEach(function(r){n[r]&&(i.removeChild(n[r]),i.appendChild(n[r]))}),t&&this.animateAll()},save:function(){var e=this.options.store;e&&e.set&&e.set(this)},closest:function(e,t){return G(e,t||this.options.draggable,this.el,!1)},option:function(e,t){var n=this.options;if(t===void 0)return n[e];var i=Ie.modifyOption(this,e,t);typeof i<"u"?n[e]=i:n[e]=t,e==="group"&&Xt(n)},destroy:function(){N("destroy",this);var e=this.el;e[X]=null,b(e,"mousedown",this._onTapStart),b(e,"touchstart",this._onTapStart),b(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(b(e,"dragover",this),b(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),je.splice(je.indexOf(this.el),1),this.el=e=null},_hideClone:function(){if(!ee){if(N("hideClone",this),p.eventCanceled)return;h(D,"display","none"),this.options.removeCloneOnHide&&D.parentNode&&D.parentNode.removeChild(D),ee=!0}},_showClone:function(e){if(e.lastPutMode!=="clone"){this._hideClone();return}if(ee){if(N("showClone",this),p.eventCanceled)return;c.parentNode==_&&!this.options.group.revertClone?_.insertBefore(D,c):le?_.insertBefore(D,le):_.appendChild(D),this.options.group.revertClone&&this.animate(c,D),h(D,"display",""),ee=!1}}};function pn(o){o.dataTransfer&&(o.dataTransfer.dropEffect="move"),o.cancelable&&o.preventDefault()}function Me(o,e,t,n,i,r,a,l){var u,s=o[X],f=s.options.onMove,d;return window.CustomEvent&&!V&&!Oe?u=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(u=document.createEvent("Event"),u.initEvent("move",!0,!0)),u.to=e,u.from=o,u.dragged=t,u.draggedRect=n,u.related=i||e,u.relatedRect=r||C(e),u.willInsertAfter=l,u.originalEvent=a,o.dispatchEvent(u),f&&(d=f.call(s,u,a)),d}function tt(o){o.draggable=!1}function gn(){rt=!1}function mn(o,e,t){var n=C(he(t.el,0,t.options,!0)),i=10;return e?o.clientX<n.left-i||o.clientY<n.top&&o.clientX<n.right:o.clientY<n.top-i||o.clientY<n.bottom&&o.clientX<n.left}function vn(o,e,t){var n=C(ut(t.el,t.options.draggable)),i=10;return e?o.clientX>n.right+i||o.clientX<=n.right&&o.clientY>n.bottom&&o.clientX>=n.left:o.clientX>n.right&&o.clientY>n.top||o.clientX<=n.right&&o.clientY>n.bottom+i}function bn(o,e,t,n,i,r,a,l){var u=n?o.clientY:o.clientX,s=n?t.height:t.width,f=n?t.top:t.left,d=n?t.bottom:t.right,m=!1;if(!a){if(l&&Ye<s*i){if(!Ce&&(Te===1?u>f+s*r/2:u<d-s*r/2)&&(Ce=!0),Ce)m=!0;else if(Te===1?u<f+Ye:u>d-Ye)return-Te}else if(u>f+s*(1-i)/2&&u<d-s*(1-i)/2)return yn(e)}return m=m||a,m&&(u<f+s*r/2||u>d-s*r/2)?u>f+s/2?1:-1:0}function yn(o){return R(c)<R(o)?1:-1}function En(o){for(var e=o.tagName+o.className+o.src+o.href+o.textContent,t=e.length,n=0;t--;)n+=e.charCodeAt(t);return n.toString(36)}function wn(o){ze.length=0;for(var e=o.getElementsByTagName("input"),t=e.length;t--;){var n=e[t];n.checked&&ze.push(n)}}function Be(o){return setTimeout(o,0)}function at(o){return clearTimeout(o)}Ue&&y(document,"touchmove",function(o){(p.active||fe)&&o.cancelable&&o.preventDefault()});p.utils={on:y,off:b,css:h,find:Pt,is:function(e,t){return!!G(e,t,e,!1)},extend:nn,throttle:Nt,closest:G,toggleClass:F,clone:Mt,index:R,nextTick:Be,cancelNextTick:at,detectDirection:kt,getChild:he};p.get=function(o){return o[X]};p.mount=function(){for(var o=arguments.length,e=new Array(o),t=0;t<o;t++)e[t]=arguments[t];e[0].constructor===Array&&(e=e[0]),e.forEach(function(n){if(!n.prototype||!n.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(n));n.utils&&(p.utils=j(j({},p.utils),n.utils)),Ie.mount(n)})};p.create=function(o,e){return new p(o,e)};p.version=Jt;var T=[],Ee,lt,st=!1,nt,ot,$e,we;function _n(){function o(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var e in this)e.charAt(0)==="_"&&typeof this[e]=="function"&&(this[e]=this[e].bind(this))}return o.prototype={dragStarted:function(t){var n=t.originalEvent;this.sortable.nativeDraggable?y(document,"dragover",this._handleAutoScroll):this.options.supportPointer?y(document,"pointermove",this._handleFallbackAutoScroll):n.touches?y(document,"touchmove",this._handleFallbackAutoScroll):y(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var n=t.originalEvent;!this.options.dragOverBubble&&!n.rootEl&&this._handleAutoScroll(n)},drop:function(){this.sortable.nativeDraggable?b(document,"dragover",this._handleAutoScroll):(b(document,"pointermove",this._handleFallbackAutoScroll),b(document,"touchmove",this._handleFallbackAutoScroll),b(document,"mousemove",this._handleFallbackAutoScroll)),St(),He(),on()},nulling:function(){$e=lt=Ee=st=we=nt=ot=null,T.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,n){var i=this,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=document.elementFromPoint(r,a);if($e=t,n||this.options.forceAutoScrollFallback||Oe||V||_e){it(t,this.options,l,n);var u=te(l,!0);st&&(!we||r!==nt||a!==ot)&&(we&&St(),we=setInterval(function(){var s=te(document.elementFromPoint(r,a),!0);s!==u&&(u=s,He()),it(t,i.options,s,n)},10),nt=r,ot=a)}else{if(!this.options.bubbleScroll||te(l,!0)===L()){He();return}it(t,this.options,te(l,!1),!1)}}},K(o,{pluginName:"scroll",initializeByDefault:!0})}function He(){T.forEach(function(o){clearInterval(o.pid)}),T=[]}function St(){clearInterval(we)}var it=Nt(function(o,e,t,n){if(e.scroll){var i=(o.touches?o.touches[0]:o).clientX,r=(o.touches?o.touches[0]:o).clientY,a=e.scrollSensitivity,l=e.scrollSpeed,u=L(),s=!1,f;lt!==t&&(lt=t,He(),Ee=e.scroll,f=e.scrollFn,Ee===!0&&(Ee=te(t,!0)));var d=0,m=Ee;do{var w=m,v=C(w),E=v.top,Y=v.bottom,z=v.left,A=v.right,B=v.width,x=v.height,ne=void 0,W=void 0,oe=w.scrollWidth,pe=w.scrollHeight,M=h(w),ge=w.scrollLeft,Z=w.scrollTop;w===u?(ne=B<oe&&(M.overflowX==="auto"||M.overflowX==="scroll"||M.overflowX==="visible"),W=x<pe&&(M.overflowY==="auto"||M.overflowY==="scroll"||M.overflowY==="visible")):(ne=B<oe&&(M.overflowX==="auto"||M.overflowX==="scroll"),W=x<pe&&(M.overflowY==="auto"||M.overflowY==="scroll"));var me=ne&&(Math.abs(A-i)<=a&&ge+B<oe)-(Math.abs(z-i)<=a&&!!ge),$=W&&(Math.abs(Y-r)<=a&&Z+x<pe)-(Math.abs(E-r)<=a&&!!Z);if(!T[d])for(var ie=0;ie<=d;ie++)T[ie]||(T[ie]={});(T[d].vx!=me||T[d].vy!=$||T[d].el!==w)&&(T[d].el=w,T[d].vx=me,T[d].vy=$,clearInterval(T[d].pid),(me!=0||$!=0)&&(s=!0,T[d].pid=setInterval(function(){n&&this.layer===0&&p.active._onTouchMove($e);var ve=T[this.layer].vy?T[this.layer].vy*l:0,Q=T[this.layer].vx?T[this.layer].vx*l:0;typeof f=="function"&&f.call(p.dragged.parentNode[X],Q,ve,o,$e,T[this.layer].el)!=="continue"||xt(T[this.layer].el,Q,ve)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&m!==u&&(m=te(m,!1)));st=s}},30),Bt=function(e){var t=e.originalEvent,n=e.putSortable,i=e.dragEl,r=e.activeSortable,a=e.dispatchSortableEvent,l=e.hideGhostForTarget,u=e.unhideGhostForTarget;if(t){var s=n||r;l();var f=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:t,d=document.elementFromPoint(f.clientX,f.clientY);u(),s&&!s.el.contains(d)&&(a("spill"),this.onSpill({dragEl:i,putSortable:n}))}};function ft(){}ft.prototype={startIndex:null,dragStart:function(e){var t=e.oldDraggableIndex;this.startIndex=t},onSpill:function(e){var t=e.dragEl,n=e.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var i=he(this.sortable.el,this.startIndex,this.options);i?this.sortable.el.insertBefore(t,i):this.sortable.el.appendChild(t),this.sortable.animateAll(),n&&n.animateAll()},drop:Bt};K(ft,{pluginName:"revertOnSpill"});function ct(){}ct.prototype={onSpill:function(e){var t=e.dragEl,n=e.putSortable,i=n||this.sortable;i.captureAnimationState(),t.parentNode&&t.parentNode.removeChild(t),i.animateAll()},drop:Bt};K(ct,{pluginName:"removeOnSpill"});p.mount(new _n);p.mount(ct,ft);const Dn=Gt({__name:"Sortable",props:{options:{type:Object,default:null,required:!1},list:{type:[Array,Object],default:[],required:!0},itemKey:{type:[String,Function],default:"",required:!0},tag:{type:String,default:"div",required:!1}},emits:["choose","unchoose","start","end","add","update","sort","remove","filter","move","clone","change"],setup(o,{expose:e,emit:t}){const n=o,i=Lt(),r=qe(!1),a=qe(null),l=qe(null),u=jt(()=>typeof n.itemKey=="string"?s=>s[n.itemKey]:n.itemKey);return e({containerRef:a,sortable:l,isDragging:r}),pt(a,s=>{s&&(l.value=new p(s,{...n.options,onChoose:f=>t("choose",f),onUnchoose:f=>t("unchoose",f),onStart:f=>{r.value=!0,t("start",f)},onEnd:f=>{setTimeout(()=>{r.value=!1,t("end",f)})},onAdd:f=>t("add",f),onUpdate:f=>t("update",f),onSort:f=>t("sort",f),onRemove:f=>t("remove",f),onFilter:f=>t("filter",f),onMove:(f,d)=>"onMoveCapture"in i?i.onMoveCapture(f,d):t("move",f,d),onClone:f=>t("clone",f),onChange:f=>t("change",f)}))}),pt(()=>n.options,s=>{if(s&&(l!=null&&l.value))for(const f in s)l.value.option(f,s[f])}),zt(()=>{l.value&&(l.value.destroy(),a.value=null,l.value=null)}),(s,f)=>(We(),Tt(Kt(s.$props.tag),{ref_key:"containerRef",ref:a,class:qt(s.$props.class)},{default:Fe(()=>[Ke(s.$slots,"header"),(We(!0),Ct($t,null,Ut(o.list,(d,m)=>Ke(s.$slots,"item",{key:ke(u)(d),element:d,index:m})),128)),Ke(s.$slots,"footer")]),_:3},8,["class"]))}}),Sn=U("header",null,[U("h2",null,"Sortable Social menu items")],-1),Tn={class:"list-group-item list-group-item-action"},Cn=["href","textContent"],On=U("i",{class:"fa-solid fa-grip-vertical float-end"},null,-1),In={class:"draggable list-group"},An={class:"list-group-item list-group-item-action"},Pn={class:"text-effect-gradient"},Nn=U("i",{class:"fa-solid fa-grip-vertical float-end"},null,-1),xn={data(){return{}}},Xn=Object.assign(xn,{__name:"DraggableMenu",setup(o){return(e,t)=>(We(),Tt(ke(Dn),{list:ke(ht).author.social,"item-key":"id",tag:"div",options:e.options,class:"row"},{header:Fe(()=>[Sn]),item:Fe(({element:n,index:i})=>[(We(),Ct("div",{class:"draggable list-group",key:i},[U("span",Tn,[U("a",{href:n.url,textContent:gt(n.url),target:"_blank"},null,8,Cn),On])]))]),footer:Fe(()=>[U("footer",In,[U("span",An,[U("span",Pn,gt(ke(ht).author.name),1),Nn])])]),_:1},8,["list","options"]))}});export{Xn as default};