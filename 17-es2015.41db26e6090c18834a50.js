(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{WBfN:function(t,n,e){"use strict";e.r(n),e.d(n,"TapasPageModule",(function(){return v}));var i=e("TEn/"),c=e("ofXK"),o=e("3Pt+"),a=e("tyNb"),s=e("fXoL"),r=e("tk/3");let l=(()=>{class t{constructor(t){this.http=t}load(t){this.http.get("assets/data/tapas.json").subscribe(n=>{(null==n?void 0:n.length)&&(this.tapas=n.filter(n=>n.tipo===t))},t=>{console.log(t)})}}return t.\u0275fac=function(n){return new(n||t)(s.Pb(r.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),p=(()=>{class t{constructor(){this.tipos=[{id:"carne",name:"Carne"},{id:"pescado",name:"Pescado"},{id:"otros",name:"Otros"},{id:"bocadillos",name:"Bocadillos"},{id:"especiales",name:"Tapas Especiales"}]}getNameById(t){const n=this.tipos.find(n=>n.id===t);return n?n.name:""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function b(t,n){if(1&t&&(s.Mb(0,"span"),s.fc(1),s.Wb(2,"currency"),s.Lb()),2&t){const t=s.Vb(2).$implicit;s.zb(1),s.hc(" / Media: ",s.Xb(2,1,t.price.half,"EUR","symbol"),"")}}function u(t,n){if(1&t&&(s.Mb(0,"span"),s.fc(1),s.Wb(2,"currency"),s.Lb()),2&t){const t=s.Vb(2).$implicit;s.zb(1),s.hc(" / Tapa: ",s.Xb(2,1,t.price.tapa,"EUR","symbol"),"")}}function f(t,n){if(1&t&&(s.Mb(0,"p"),s.fc(1),s.Wb(2,"currency"),s.ec(3,b,3,5,"span",5),s.ec(4,u,3,5,"span",5),s.Lb()),2&t){const t=s.Vb().$implicit;s.zb(1),s.hc("Raci\xf3n: ",s.Xb(2,3,t.price.one,"EUR","symbol")," "),s.zb(2),s.ac("ngIf",null==t||null==t.price?null:t.price.half),s.zb(1),s.ac("ngIf",null==t||null==t.price?null:t.price.tapa)}}function d(t,n){if(1&t&&(s.Mb(0,"p"),s.fc(1),s.Wb(2,"currency"),s.Lb()),2&t){const t=s.Vb().$implicit;s.zb(1),s.gc(s.Xb(2,1,t.price.precio,"EUR","symbol"))}}function m(t,n){if(1&t&&(s.Mb(0,"ion-item"),s.Mb(1,"ion-label"),s.Mb(2,"ion-text"),s.Mb(3,"h1",7),s.fc(4),s.Lb(),s.Lb(),s.ec(5,f,5,7,"p",5),s.ec(6,d,3,5,"p",5),s.Lb(),s.Lb()),2&t){const t=n.$implicit;s.zb(4),s.gc(t.name),s.zb(1),s.ac("ngIf",null==t||null==t.price?null:t.price.one),s.zb(1),s.ac("ngIf",null==t||null==t.price?null:t.price.precio)}}function h(t,n){if(1&t&&(s.Mb(0,"ion-list"),s.ec(1,m,7,3,"ion-item",6),s.Lb()),2&t){const t=s.Vb();s.zb(1),s.ac("ngForOf",null==t.tapasService?null:t.tapasService.tapas)}}const g=[{path:"",component:(()=>{class t{constructor(t,n,e){this.route=t,this.tapasService=n,this.tiposService=e;const i=this.route.snapshot.paramMap.get("tipo");this.tapasService.load(i),this.title=this.tiposService.getNameById(i)}}return t.\u0275fac=function(n){return new(n||t)(s.Jb(a.a),s.Jb(l),s.Jb(p))},t.\u0275cmp=s.Db({type:t,selectors:[["app-tapas"]],decls:8,vars:4,consts:[[3,"translucent"],["color","app"],["src","./assets/img/logo-header.svg","alt","","slot","start",1,"ion-margin-start"],[1,"ion-text-uppercase","title"],[3,"fullscreen"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"ion-text-wrap"]],template:function(t,n){1&t&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar",1),s.Kb(2,"ion-img",2),s.Mb(3,"ion-title"),s.Mb(4,"ion-label",3),s.fc(5),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Mb(6,"ion-content",4),s.ec(7,h,2,1,"ion-list",5),s.Lb()),2&t&&(s.ac("translucent",!0),s.zb(5),s.gc(n.title),s.zb(1),s.ac("fullscreen",!0),s.zb(1),s.ac("ngIf",null==n.tapasService||null==n.tapasService.tapas?null:n.tapasService.tapas.length))},directives:[i.c,i.o,i.e,i.n,i.g,i.b,c.j,i.h,c.i,i.f,i.m],pipes:[c.c],styles:[".title[_ngcontent-%COMP%]{font-size:25px}"]}),t})()}];let y=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(g)],a.i]}),t})(),v=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(n){return new(n||t)},imports:[[i.p,c.b,o.a,y]]}),t})()}}]);