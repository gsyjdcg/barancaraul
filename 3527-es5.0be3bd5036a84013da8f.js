!function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkbarancaraul=self.webpackChunkbarancaraul||[]).push([[3527],{3527:function(r,o,n){n.r(o),n.d(o,{ion_popover:function(){return C}});var i=n(4553),a=n(245),s=n(8688),p=n(7013),c=n(8824),d=n(1135),l=n(1269),u=n(6069),v=n(1014),f=function(e,t,r){var o=t.getBoundingClientRect(),n=o.height,i=o.width;return"cover"===e&&r&&(i=r.getBoundingClientRect().width),{contentWidth:i,contentHeight:n}},h=function(e,t){return t&&"ION-ITEM"===t.tagName?e.findIndex(function(e){return e===t}):-1},g=function(e){var t=(0,c.g)(e).querySelector("button");t&&(0,c.r)(function(){return t.focus()})},m=function(e,t,r,o,n,i,a,s,p,c,d){var l,u={top:0,left:0,width:0,height:0};switch(i){case"event":if(!d)return p;u={top:d.clientY,left:d.clientX,width:1,height:1};break;case"trigger":default:var v=d,f=c||(null===(l=null==v?void 0:v.detail)||void 0===l?void 0:l.ionShadowTarget)||(null==v?void 0:v.target);if(!f)return p;var h=f.getBoundingClientRect();u={top:h.top,left:h.left,width:h.width,height:h.height}}var g=k(a,u,t,r,o,n,e),m=P(s,a,u,t,r),w=g.top+m.top,x=g.left+m.left,D=y(a,o,n,w,x,t,r,e),T=D.arrowTop,E=D.arrowLeft,I=b(a,s,e);return{top:w,left:x,referenceCoordinates:u,arrowTop:T,arrowLeft:E,originX:I.originX,originY:I.originY}},b=function(e,t,r){switch(e){case"top":return{originX:w(t),originY:"bottom"};case"bottom":return{originX:w(t),originY:"top"};case"left":return{originX:"right",originY:x(t)};case"right":return{originX:"left",originY:x(t)};case"start":return{originX:r?"left":"right",originY:x(t)};case"end":return{originX:r?"right":"left",originY:x(t)}}},w=function(e){switch(e){case"start":return"left";case"center":return"center";case"end":return"right"}},x=function(e){switch(e){case"start":return"top";case"center":return"center";case"end":return"bottom"}},y=function(e,t,r,o,n,i,a,s){var p={arrowTop:o+a/2-t/2,arrowLeft:n+i-t/2},c={arrowTop:o+a/2-t/2,arrowLeft:n-1.5*t};switch(e){case"top":return{arrowTop:o+a,arrowLeft:n+i/2-t/2};case"bottom":return{arrowTop:o-r,arrowLeft:n+i/2-t/2};case"left":return p;case"right":return c;case"start":return s?c:p;case"end":return s?p:c;default:return{arrowTop:0,arrowLeft:0}}},k=function(e,t,r,o,n,i,a){var s={top:t.top,left:t.left-r-n},p={top:t.top,left:t.left+t.width+n};switch(e){case"top":return{top:t.top-o-i,left:t.left};case"right":return p;case"bottom":return{top:t.top+t.height+i,left:t.left};case"left":return s;case"start":return a?p:s;case"end":return a?s:p}},P=function(e,t,r,o,n){switch(e){case"center":return T(t,r,o,n);case"end":return D(t,r,o,n);case"start":default:return{top:0,left:0}}},D=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o-t.height),left:0};case"top":case"bottom":default:return{top:0,left:-(r-t.width)}}},T=function(e,t,r,o){switch(e){case"start":case"end":case"left":case"right":return{top:-(o/2-t.height/2),left:0};case"top":case"bottom":default:return{top:0,left:-(r/2-t.width/2)}}},E=function(e,t,r,o,n,i,a,s,p,c,d,l){var u,v=arguments.length>12&&void 0!==arguments[12]?arguments[12]:0,f=arguments.length>13&&void 0!==arguments[13]?arguments[13]:0,h=arguments.length>14&&void 0!==arguments[14]?arguments[14]:0,g=v,m=r,b=t,w=c,x=d,y=!1,k=!1,P=l?l.top+l.height:i/2-s/2,D=l?l.height:0,T=!1;return m<o+p?(m=o,y=!0,w="left"):a+o+m+p>n&&(k=!0,m=n-a-o,w="right"),P+D+s>i&&("top"===e||"bottom"===e)&&(P-s>0?(g=(b=P-s-D-(h-1))+s,x="bottom",T=!0):u=o),{top:b,left:m,bottom:u,originX:w,originY:x,checkSafeAreaLeft:y,checkSafeAreaRight:k,arrowTop:g,arrowLeft:f,addPopoverBottomClass:T}},I=function(e,t){var r,o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,p=t.align,d=e.ownerDocument,l="rtl"===d.dir,u=d.defaultView.innerWidth,h=d.defaultView.innerHeight,g=(0,c.g)(e),b=g.querySelector(".popover-content"),w=g.querySelector(".popover-arrow"),x=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),y=f(n,b,x),k=y.contentWidth,P=y.contentHeight,D=function(e){if(!e)return{arrowWidth:0,arrowHeight:0};var t=e.getBoundingClientRect();return{arrowWidth:t.width,arrowHeight:t.height}}(w),T=D.arrowWidth,I=D.arrowHeight,S=m(l,k,P,T,I,a,s,p,{top:h/2-P/2,left:u/2-k/2,originX:l?"right":"left",originY:"top"},i,o),A="cover"===n?0:5,L="cover"===n?0:25,C=E(s,S.top,S.left,A,u,h,k,P,L,S.originX,S.originY,S.referenceCoordinates,S.arrowTop,S.arrowLeft,I),W=C.originX,N=C.originY,O=C.top,R=C.left,q=C.bottom,Y=C.checkSafeAreaLeft,X=C.checkSafeAreaRight,z=C.arrowTop,B=C.arrowLeft,j=C.addPopoverBottomClass,H=(0,v.c)(),F=(0,v.c)(),V=(0,v.c)();return F.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),V.addElement(g.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),H.easing("ease").duration(100).beforeAddWrite(function(){"cover"===n&&e.style.setProperty("--width","".concat(k,"px")),j&&e.classList.add("popover-bottom"),void 0!==q&&b.style.setProperty("bottom","".concat(q,"px"));var t="".concat(R,"px");Y&&(t="".concat(R,"px + var(--ion-safe-area-left, 0)")),X&&(t="".concat(R,"px - var(--ion-safe-area-right, 0)")),b.style.setProperty("top","calc(".concat(O,"px + var(--offset-y, 0))")),b.style.setProperty("left","calc(".concat(t," + var(--offset-x, 0))")),b.style.setProperty("transform-origin","".concat(N," ").concat(W)),null!==w&&(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;return!(!r&&!o||"top"!==e&&"bottom"!==e&&t)}(s,S.top!==O||S.left!==R,o,i)?(w.style.setProperty("top","calc(".concat(z,"px + var(--offset-y, 0))")),w.style.setProperty("left","calc(".concat(B,"px + var(--offset-x, 0))"))):w.style.setProperty("display","none"))}).addAnimation([F,V])},S=function(e){var t=(0,c.g)(e),r=t.querySelector(".popover-content"),o=t.querySelector(".popover-arrow"),n=(0,v.c)(),i=(0,v.c)(),a=(0,v.c)();return i.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),a.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),n.easing("ease").afterAddWrite(function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([i,a])},A=function(e,t){var r,o=t.event,n=t.size,i=t.trigger,a=t.reference,s=t.side,p=t.align,d=e.ownerDocument,l="rtl"===d.dir,u=d.defaultView.innerWidth,h=d.defaultView.innerHeight,g=(0,c.g)(e),b=g.querySelector(".popover-content"),w=i||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),x=f(n,b,w),y=x.contentWidth,k=x.contentHeight,P=m(l,y,k,0,0,a,s,p,{top:h/2-k/2,left:u/2-y/2,originX:l?"right":"left",originY:"top"},i,o),D="cover"===n?0:12,T=E(s,P.top,P.left,D,u,h,y,k,0,P.originX,P.originY,P.referenceCoordinates),I=T.originX,S=T.originY,A=T.top,L=T.left,C=T.bottom,W=(0,v.c)(),N=(0,v.c)(),O=(0,v.c)(),R=(0,v.c)(),q=(0,v.c)();return N.addElement(g.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),O.addElement(g.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),R.addElement(b).beforeStyles({top:"calc(".concat(A,"px + var(--offset-y, 0px))"),left:"calc(".concat(L,"px + var(--offset-x, 0px))"),"transform-origin":"".concat(S," ").concat(I)}).beforeAddWrite(function(){void 0!==C&&b.style.setProperty("bottom","".concat(C,"px"))}).fromTo("transform","scale(0.8)","scale(1)"),q.addElement(g.querySelector(".popover-viewport")).fromTo("opacity",.01,1),W.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(function(){"cover"===n&&e.style.setProperty("--width","".concat(y,"px")),"bottom"===S&&e.classList.add("popover-bottom")}).addAnimation([N,O,R,q])},L=function(e){var t=(0,c.g)(e),r=t.querySelector(".popover-content"),o=(0,v.c)(),n=(0,v.c)(),i=(0,v.c)();return n.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(function(){e.style.removeProperty("--width"),e.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([n,i])},C=function(){function r(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(0,a.r)(this,e),this.didPresent=(0,a.e)(this,"ionPopoverDidPresent",7),this.willPresent=(0,a.e)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,a.e)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,a.e)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,a.e)(this,"didPresent",7),this.willPresentShorthand=(0,a.e)(this,"willPresent",7),this.willDismissShorthand=(0,a.e)(this,"willDismiss",7),this.didDismissShorthand=(0,a.e)(this,"didDismiss",7),this.parentPopover=null,this.popoverIndex=N++,this.coreDelegate=(0,p.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.triggerAction="click",this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment="start",this.arrow=!0,this.isOpen=!1,this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onBackdropTap=function(){t.dismiss(void 0,d.B)},this.onLifecycle=function(e){var r=t.usersElement,o=W[e.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}},this.configureTriggerInteraction=function(){var e=t.trigger,r=t.triggerAction,o=t.el,n=t.destroyTriggerInteraction;n&&n();var a=t.triggerEl=void 0!==e?document.getElementById(e):null;!a||(t.destroyTriggerInteraction=function(e,t,r){var o,n=[];switch(t){case"hover":var a;n=[{eventName:"mouseenter",callback:(o=(0,i.Z)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.stopPropagation(),a&&clearTimeout(a),a=setTimeout(function(){(0,c.r)(function(){r.presentFromTrigger(t),a=void 0})},100);case 1:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)})},{eventName:"mouseleave",callback:function(e){a&&clearTimeout(a);var t=e.relatedTarget;!t||t.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}];break;case"context-menu":n=[{eventName:"contextmenu",callback:function(e){e.preventDefault(),r.presentFromTrigger(e)}},{eventName:"click",callback:function(e){return e.stopPropagation()}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}];break;case"click":default:n=[{eventName:"click",callback:function(e){return r.presentFromTrigger(e)}},{eventName:"ionPopoverActivateTrigger",callback:function(e){return r.presentFromTrigger(e,!0)}}]}return n.forEach(function(t){var r=t.eventName,o=t.callback;return e.addEventListener(r,o)}),e.setAttribute("data-ion-popover-trigger","true"),function(){n.forEach(function(t){var r=t.eventName,o=t.callback;return e.removeEventListener(r,o)}),e.removeAttribute("data-ion-popover-trigger")}}(a,r,o))},this.configureKeyboardInteraction=function(){var e=t.destroyKeyboardInteraction,r=t.el;e&&e(),t.destroyKeyboardInteraction=function(e){var t,r=(t=(0,i.Z)(regeneratorRuntime.mark(function t(r){var o,n,i,a,s,p,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=document.activeElement,n=[];try{n=Array.from(e.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch(d){}t.t0=r.key,t.next="ArrowLeft"===t.t0?6:"ArrowDown"===t.t0?12:"ArrowUp"===t.t0?16:"Home"===t.t0?20:"End"===t.t0?24:"ArrowRight"===t.t0||" "===t.t0||"Enter"===t.t0?28:29;break;case 6:return t.next=8,e.getParentPopover();case 8:if(t.t1=t.sent,!t.t1){t.next=11;break}e.dismiss(void 0,void 0,!1);case 11:return t.abrupt("break",29);case 12:return r.preventDefault(),void 0!==(i=function(e,t){return e[h(e,t)+1]}(n,o))&&g(i),t.abrupt("break",29);case 16:return r.preventDefault(),void 0!==(a=function(e,t){return e[h(e,t)-1]}(n,o))&&g(a),t.abrupt("break",29);case 20:return r.preventDefault(),void 0!==(s=n[0])&&g(s),t.abrupt("break",29);case 24:return r.preventDefault(),void 0!==(p=n[n.length-1])&&g(p),t.abrupt("break",29);case 28:o&&function(e){return e.hasAttribute("data-ion-popover-trigger")}(o)&&(c=new CustomEvent("ionPopoverActivateTrigger"),o.dispatchEvent(c));case 29:case"end":return t.stop()}},t)})),function(e){return t.apply(this,arguments)});return e.addEventListener("keydown",r),function(){return e.removeEventListener("keydown",r)}}(r)},this.configureDismissInteraction=function(){var e=t.destroyDismissInteraction,r=t.parentPopover,o=t.triggerAction,n=t.triggerEl,i=t.el;!r||!n||(e&&e(),t.destroyDismissInteraction=function(e,t,r,o){var n=[],i=(0,c.g)(o).querySelector(".popover-content");switch(t){case"hover":n=[{eventName:"mouseenter",callback:function(t){document.elementFromPoint(t.clientX,t.clientY)!==e&&r.dismiss(void 0,void 0,!1)}}];break;case"context-menu":case"click":default:n=[{eventName:"click",callback:function(t){t.target.closest("[data-ion-popover-trigger]")!==e?r.dismiss(void 0,void 0,!1):t.stopPropagation()}}]}return n.forEach(function(e){var t=e.eventName,r=e.callback;return i.addEventListener(t,r)}),function(){n.forEach(function(e){var t=e.eventName,r=e.callback;return i.removeEventListener(t,r)})}}(n,o,i,r))}}var o,n,v;return o=r,v=[{key:"watchers",get:function(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}}],(n=[{key:"onTriggerChange",value:function(){this.configureTriggerInteraction()}},{key:"onIsOpenChange",value:function(e,t){!0===e&&!1===t?this.present():!1===e&&!0===t&&this.dismiss()}},{key:"connectedCallback",value:function(){(0,d.e)(this.el)}},{key:"componentWillLoad",value:function(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):"ion-popover-".concat(this.popoverIndex),this.parentPopover=this.el.closest("ion-popover:not(#".concat(this.popoverId,")"))}},{key:"componentDidLoad",value:function(){var e=this,t=this.parentPopover;!0===this.isOpen&&(0,c.r)(function(){return e.present()}),t&&(0,c.a)(t,"ionPopoverWillDismiss",function(){e.dismiss(void 0,void 0,!1)}),this.configureTriggerInteraction()}},{key:"presentFromTrigger",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return(0,i.Z)(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return r.focusDescendantOnPresent=t,o.next=3,r.present(e);case 3:r.focusDescendantOnPresent=!1;case 4:case"end":return o.stop()}},o)}))()}},{key:"getDelegate",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.workingDelegate&&!e)return{delegate:this.workingDelegate,inline:this.inline};var t=this.el.parentNode,r=this.inline=null!==t&&"ION-APP"!==t.tagName&&"BODY"!==t.tagName;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}},{key:"present",value:function(e){var t=this;return(0,i.Z)(regeneratorRuntime.mark(function r(){var o,n,i,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.presented){r.next=2;break}return r.abrupt("return");case 2:if(r.t0=void 0!==t.currentTransition,!r.t0){r.next=6;break}return r.next=6,t.currentTransition;case 6:return o=Object.assign(Object.assign({},t.componentProps),{popover:t.el}),n=t.getDelegate(!0),i=n.inline,a=n.delegate,r.next=9,(0,p.a)(a,t.el,t.component,["popover-viewport"],o,i);case 9:return t.usersElement=r.sent,r.next=12,(0,u.e)(t.usersElement);case 12:return t.configureKeyboardInteraction(),t.configureDismissInteraction(),t.currentTransition=(0,d.d)(t,"popoverEnter",I,A,{event:e||t.event,size:t.size,trigger:t.triggerEl,reference:t.reference,side:t.side,align:t.alignment}),r.next=17,t.currentTransition;case 17:t.currentTransition=void 0,t.focusDescendantOnPresent&&(0,d.j)(t.el,t.el);case 19:case"end":return r.stop()}},r)}))()}},{key:"dismiss",value:function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=this;return(0,i.Z)(regeneratorRuntime.mark(function n(){var i,a,s,c,l;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(n.t0=void 0!==o.currentTransition,!n.t0){n.next=4;break}return n.next=4,o.currentTransition;case 4:return i=o.destroyKeyboardInteraction,a=o.destroyDismissInteraction,r&&o.parentPopover&&o.parentPopover.dismiss(e,t,r),o.currentTransition=(0,d.f)(o,e,t,"popoverLeave",S,L,o.event),n.next=8,o.currentTransition;case 8:if(!(s=n.sent)){n.next=14;break}return i&&(i(),o.destroyKeyboardInteraction=void 0),a&&(a(),o.destroyDismissInteraction=void 0),c=o.getDelegate(),l=c.delegate,n.next=14,(0,p.d)(l,o.usersElement);case 14:return n.abrupt("return",(o.currentTransition=void 0,s));case 15:case"end":return n.stop()}},n)}))()}},{key:"getParentPopover",value:function(){var e=this;return(0,i.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.parentPopover);case 1:case"end":return t.stop()}},t)}))()}},{key:"onDidDismiss",value:function(){return(0,d.g)(this.el,"ionPopoverDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,d.g)(this.el,"ionPopoverWillDismiss")}},{key:"render",value:function(){var t,r=this,o=(0,s.b)(this),n=this.onLifecycle,i=this.popoverId,p=this.parentPopover,c=this.dismissOnSelect,d=this.presented,u=this.side,v=this.arrow,f=this.htmlAttributes,h=(0,s.a)("desktop"),g=v&&!p&&!h;return(0,a.h)(a.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},f,{style:{zIndex:"".concat(2e4+this.overlayIndex)},id:i,class:Object.assign(Object.assign({},(0,l.g)(this.cssClass)),(t={},e(t,o,!0),e(t,"popover-translucent",this.translucent),e(t,"overlay-hidden",!0),e(t,"popover-interactive",d),e(t,"popover-desktop",h),e(t,"popover-side-".concat(u),!0),e(t,"popover-nested",!!p),t)),onIonPopoverDidPresent:n,onIonPopoverWillPresent:n,onIonPopoverWillDismiss:n,onIonPopoverDidDismiss:n,onIonDismiss:this.onDismiss,onIonBackdropTap:this.onBackdropTap}),!p&&(0,a.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,a.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:c?function(){return r.dismiss()}:void 0},g&&(0,a.h)("div",{class:"popover-arrow",part:"arrow"}),(0,a.h)("div",{class:"popover-content",part:"content"},(0,a.h)("slot",null))))}},{key:"el",get:function(){return(0,a.i)(this)}}])&&t(o.prototype,n),v&&t(o,v),r}(),W={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},N=0;C.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001;pointer-events:none}:host(.popover-interactive) .popover-content,:host(.popover-interactive) ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}}}])}();