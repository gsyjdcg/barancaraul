"use strict";(self.webpackChunkbarancaraul=self.webpackChunkbarancaraul||[]).push([[431],{431:function(t,e,i){i.r(e),i.d(e,{ion_virtual_scroll:function(){return u}});var s=i(4553),r=i(245),n=i(8824);const l="item",o="header",h="footer",a=(t,e)=>{const i=c(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},c=(t,e)=>{switch(e){case l:return t.querySelector("template:not([name])");case o:return t.querySelector("template[name=header]");case h:return t.querySelector("template[name=footer]")}},d=(t,e,i,s,r,n,a,c,d,u,g,p)=>{const m=[],f=p+g;for(let v=g;v<f;v++){const g=t[v];if(r){const e=r(g,v,t);null!=e&&m.push({i:u++,type:o,value:e,index:v,height:i?i(e,v):a,reads:i?0:2,visible:!!i})}if(m.push({i:u++,type:l,value:g,index:v,height:e?e(g,v):d,reads:e?0:2,visible:!!e}),n){const e=n(g,v,t);null!=e&&m.push({i:u++,type:h,value:e,index:v,height:s?s(e,v):c,reads:s?0:2,visible:!!s})}}return m},u=class{constructor(t){(0,r.r)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}componentWillLoad(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}connectedCallback(){var t=this;return(0,s.Z)(function*(){const e=t.el.closest("ion-content");e?(t.scrollEl=yield e.getScrollElement(),t.contentEl=e,t.calcCells(),t.updateState()):console.error("<ion-virtual-scroll> must be used inside an <ion-content>")})()}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,e,i)=>{const s=e.find(e=>e.type===l&&e.index===t);return s?i[s.i]:-1})(t,this.cells,this.getHeightIndex()))}checkRange(t,e=-1){var i=this;return(0,s.Z)(function*(){if(!i.items)return;const s=-1===e?i.items.length-t:e,r=((t,e)=>0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex(t=>t.index===e))(i.cells,t),n=d(i.items,i.itemHeight,i.headerHeight,i.footerHeight,i.headerFn,i.footerFn,i.approxHeaderHeight,i.approxFooterHeight,i.approxItemHeight,r,t,s);i.cells=((t,e,i)=>{if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t})(i.cells,n,r),i.lastItemLen=i.items.length,i.indexDirty=Math.max(t-1,0),i.scheduleUpdate()})()}checkEnd(){var t=this;return(0,s.Z)(function*(){t.items&&t.checkRange(t.lastItemLen)})()}updateVirtualScroll(){!this.isEnabled||!this.scrollEl||(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),(0,r.f)(this.readVS.bind(this)),(0,r.c)(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,r=i;for(;r&&r!==t;)s+=r.offsetTop,r=r.offsetParent;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=((t,e,i)=>({top:Math.max(t-100,0),bottom:t+e+100}))(this.currentScrollTop-this.viewportOffset,this.viewportHeight),i=this.getHeightIndex(),s=((t,e,i)=>{const s=e.top,r=e.bottom;let n=0;for(;n<t.length&&!(t[n]>s);n++);const l=Math.max(n-2-1,0);for(;n<t.length&&!(t[n]>=r);n++);return{offset:l,length:Math.min(n+2,t.length)-l}})(i,e);!((t,e,i)=>t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length)(t,this.range,s)||(this.range=s,((t,e,i,s)=>{for(const o of t)o.change=0,o.d=!0;const r=[],n=s.offset+s.length;for(let o=s.offset;o<n;o++){const s=i[o],n=t.find(t=>t.d&&t.cell===s);if(n){const t=e[o];t!==n.top&&(n.top=t,n.change=1),n.d=!1}else r.push(s)}const l=t.filter(t=>t.d);for(const o of r){const i=l.find(t=>t.d&&t.cell.type===o.type),s=o.i;i?(i.d=!1,i.change=2,i.cell=o,i.top=e[s]):t.push({d:!1,cell:o,visible:!0,change:2,top:e[s]})}t.filter(t=>t.d&&-9999!==t.top).forEach(t=>{t.change=1,t.top=-9999})})(this.virtualDom,i,this.cells,s),this.nodeRender?((t,e,i,s)=>{const r=Array.from(t.children).filter(t=>"TEMPLATE"!==t.tagName),n=r.length;let l;for(let o=0;o<i.length;o++){const h=i[o],c=h.cell;if(2===h.change){if(o<n)l=r[o],e(l,c,o);else{const i=a(t,c.type);l=e(i,c,o)||i,l.classList.add("virtual-item"),t.appendChild(l)}l.$ionCell=c}else l=r[o];0!==h.change&&(l.style.transform=`translate3d(0,${h.top}px,0)`);const d=c.visible;h.visible!==d&&(d?l.classList.remove("virtual-loading"):l.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(s(c,l),c.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&(0,r.j)(this))}updateCellHeight(t,e){const i=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e?(0,n.c)(e,i):i()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height!==e||!0!==t.visible)&&(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate())}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout(()=>this.updateVirtualScroll(),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){!this.items||(this.lastItemLen=this.items.length,this.cells=d(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,e)=>{if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)})(this.heightIndex,this.cells.length),this.totalHeight=((t,e,i)=>{let s=t[i];for(let r=i;r<t.length;r++)t[r]=s,s+=e[r].height;return s})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const e=this.scrollEl;e&&(this.isEnabled=t,e.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{e.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case l:return this.renderItem(i,s);case o:return this.renderHeader(i,s);case h:return this.renderFooter(i,s)}}render(){return(0,r.h)(r.H,{style:{height:`${this.totalHeight}px`}},this.renderItem&&(0,r.h)(g,{dom:this.virtualDom},this.virtualDom.map(t=>this.renderVirtualNode(t))))}get el(){return(0,r.i)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},g=({dom:t},e,i)=>i.map(e,(e,i)=>{const s=t[i],r=e.vattrs||{};let n=r.class||"";return n+="virtual-item ",s.visible||(n+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},r),{class:n,style:Object.assign(Object.assign({},r.style),{transform:`translate3d(0,${s.top}px,0)`})})})});u.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);