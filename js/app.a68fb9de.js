(function(e){function t(t){for(var r,u,l=t[0],o=t[1],i=t[2],f=0,d=[];f<l.length;f++)u=l[f],a[u]&&d.push(a[u][0]),a[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);s&&s(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var s=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Odds")],1)},c=[],u=n("d225"),l=n("308d"),o=n("6bb5"),i=n("4e2b"),s=n("9ab4"),f=n("60a3"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",[n("v-card-text",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-text-field",{attrs:{label:"Attack Pool",type:"number"},model:{value:e.dice,callback:function(t){e.dice=t},expression:"dice"}}),n("v-text-field",{attrs:{label:"Defence Target Number",type:"number"},model:{value:e.defence,callback:function(t){e.defence=t},expression:"defence"}})],1)],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("odd-table",{attrs:{dice:e.dice,defence:e.defence}})],1)],1)],1)},b=[],p=n("b0b4"),v=n("2fe1"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs1:""}},[n("v-list",[n("v-list-tile",[n("v-list-tile-title",{staticClass:"text-xs-center"},[e._v("Hits")])],1),e._l(e.dice,function(t){return n("v-list-tile",{key:t},[n("v-list-tile-title",{staticClass:"text-xs-center",domProps:{textContent:e._s(t)}})],1)})],2)],1),e._l(5,function(t){return n("odd-column",{key:t,attrs:{rolls:e.rollSum(7-t),targetNumber:t+1}})})],2)},O=[],j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{xs2:""}},[n("v-list",[n("v-list-tile",[n("v-list-tile-title",{staticClass:"text-xs-center"},[e._v(e._s(e.targetNumber)+"+")])],1),e._l(e.rolls.length-1,function(t){return n("v-list-tile",{key:t,class:e.rangeColor(e.rolls[t])},[n("v-list-tile-title",{staticClass:"text-xs-center"},[e._v(e._s(e._f("percent")(e.rolls[t])))])],1)})],2)],1)},y=[],m=n("bd86"),x=function(e){function t(){return Object(u["a"])(this,t),Object(l["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(i["a"])(t,e),Object(p["a"])(t,[{key:"rangeColor",value:function(e){if(e>.65){var t=Math.floor((e-.9)/.05);return t>0?Object(m["a"])({blue:!0},"darken-".concat(t),!0):0===t?{blue:!0}:Object(m["a"])({blue:!0},"lighten".concat(t),!0)}if(e<.35){var n=Math.floor((e-.05)/.05);return n>0?Object(m["a"])({red:!0},"lighten-".concat(n),!0):0===n?{red:!0}:Object(m["a"])({red:!0},"darken".concat(n),!0)}return{}}}]),t}(r["default"]);s["a"]([Object(f["b"])({required:!0})],x.prototype,"rolls",void 0),s["a"]([Object(f["b"])({required:!0})],x.prototype,"targetNumber",void 0),x=s["a"]([Object(v["b"])({name:"odd-column",filters:{percent:function(e){return"number"!==typeof e||isNaN(e)?"-":(e*=100,e.toFixed(1)+"%")}}})],x);var g=x,_=g,w=n("0c7c"),k=Object(w["a"])(_,j,y,!1,null,null,null),C=k.exports;n("ac6a"),n("6c7b");function P(e,t){if("number"!==typeof e||"number"!==typeof t)return[];if(e<1||t>6)return[1];if(t<2){var n=new Array(e+1).fill(0);return n[e]=1,n}var r=[[1],[(7-t)/6,(t-1)/6]];while(!r[e]){var a=r.length-1;if(2*a<=e)r[2*a]=E(r[a],r[a]);else{var c=e-a;while(!r[c])c--;r[a+c]=E(r[a],r[c])}}return r[e]}function S(e,t){return t>6?e:e.map(function(e,n){return new Array(n).fill(0).concat(P(n,t).map(function(t){return t*e}))}).reduce(function(e,t,n){return t.forEach(function(t,r){var a=r-n<0?0:r-n;e[a]=e[a]||0,e[a]+=t}),e},[])}function E(e,t){return e.map(function(e){return t.map(function(t){return t*e})}).reduce(M,[])}function M(e,t,n){return t.forEach(function(t,r){e[n+r]=e[n+r]||0,e[n+r]+=t}),e}var N=function(e){function t(){return Object(u["a"])(this,t),Object(l["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(i["a"])(t,e),Object(p["a"])(t,[{key:"rollSum",value:function(e){for(var t=S(P(this.dice,e),this.defence),n=[1],r=1;r<t.length;r++)n[r]=n[r-1]-t[r-1];return n}}]),t}(r["default"]);s["a"]([Object(f["b"])({required:!0})],N.prototype,"dice",void 0),s["a"]([Object(f["b"])({required:!0})],N.prototype,"defence",void 0),N=s["a"]([Object(v["b"])({name:"odd-table",components:{OddColumn:C}})],N);var T=N,$=T,q=Object(w["a"])($,h,O,!1,null,null,null),A=q.exports,I=function(e){function t(){var e;return Object(u["a"])(this,t),e=Object(l["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.d=6,e.def=6,e}return Object(i["a"])(t,e),Object(p["a"])(t,[{key:"dice",get:function(){return this.d},set:function(e){this.d="number"!==typeof e?""!==e?parseInt(e,10):0:e}},{key:"defence",get:function(){return this.def},set:function(e){this.def="number"!==typeof e?""!==e?parseInt(e,10):0:e}}]),t}(r["default"]);I=s["a"]([Object(v["b"])({name:"odds",components:{OddTable:A}})],I);var J=I,D=J,F=Object(w["a"])(D,d,b,!1,null,null,null),H=F.exports,z=function(e){function t(){return Object(u["a"])(this,t),Object(l["a"])(this,Object(o["a"])(t).apply(this,arguments))}return Object(i["a"])(t,e),t}(f["c"]);z=s["a"]([Object(f["a"])({name:"app",components:{Odds:H}})],z);var B=z,G=B,K=Object(w["a"])(G,a,c,!1,null,null,null),L=K.exports,Q=(n("953f"),n("ce5b")),R=n.n(Q);r["default"].config.productionTip=!1,r["default"].use(R.a),new r["default"]({render:function(e){return e(L)}}).$mount("#app")}});
//# sourceMappingURL=app.a68fb9de.js.map