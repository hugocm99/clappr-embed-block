/**
 * Skipped minification because the original files appears to be already minified.
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("Clappr"),require("ClapprStats")):"function"==typeof define&&define.amd?define(["Clappr","ClapprStats"],e):"object"==typeof exports?exports.ClapprNerdStats=e(require("Clappr"),require("ClapprStats")):t.ClapprNerdStats=e(t.Clappr,t.ClapprStats)}(window,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";var r,o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":o(window))&&(r=window)}t.exports=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(2),i=l(n(3)),a=l(n(4)),s=l(n(6)),c=l(n(7)),u=l(n(8));function l(t){return t&&t.__esModule?t:{default:t}}var p=n(10),f=n(12),d=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._shortcut=(0,c.default)(t,"options.clapprNerdStats.shortcut",["command+shift+s","ctrl+shift+s"]),n._iconPosition=(0,c.default)(t,"options.clapprNerdStats.iconPosition","top-right"),n.metrics={},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"name",get:function(){return"clappr-nerd-stats"}},{key:"template",get:function(){return(0,o.template)(s.default)}},{key:"attributes",get:function(){return{"data-clappr-nerd-stats":"",class:"clappr-nerd-stats"}}},{key:"events",get:function(){return{"click [data-show-stats-button]":"showOrHide","click [data-close-button]":"hide"}}},{key:"statsBoxElem",get:function(){return".clappr-nerd-stats[data-clappr-nerd-stats] .stats-box"}},{key:"statsBoxWidthThreshold",get:function(){return 720}},{key:"playerWidth",get:function(){return this.core.playerInfo.computedSize.width}},{key:"playerHeight",get:function(){return this.core.playerInfo.computedSize.height}}]),r(e,[{key:"bindEvents",value:function(){this.listenToOnce(this.core,o.Events.CORE_READY,this.init)}},{key:"init",value:function(){var t=this;this.container=this.core.getCurrentContainer();var e=this.container.getPlugin("clappr_stats");void 0===e?(console.error("clappr-stats not available. Please, include it as a plugin of your Clappr instance.\nFor more info, visit: https://github.com/clappr/clappr-stats."),this.disable()):(f.bind(this._shortcut,(function(){return t.showOrHide()})),o.Mediator.on(this.core.options.playerId+":"+o.Events.PLAYER_RESIZE,this.onPlayerResize,this),this.listenTo(e,i.default.REPORT_EVENT,this.updateMetrics),this.updateMetrics(e._metrics),this.render())}},{key:"showOrHide",value:function(t){this.showing?this.hide(t):this.show(t)}},{key:"show",value:function(t){this.core.$el.find(this.statsBoxElem).show(),this.showing=!0,t&&t.stopPropagation()}},{key:"hide",value:function(t){this.core.$el.find(this.statsBoxElem).hide(),this.showing=!1,t&&t.stopPropagation()}},{key:"onPlayerResize",value:function(){this.setStatsBoxSize()}},{key:"addGeneralMetrics",value:function(){this.metrics.general={displayResolution:this.playerWidth+"x"+this.playerHeight,volume:this.container.volume}}},{key:"updateMetrics",value:function(t){this.metrics=(0,u.default)(t),this.addGeneralMetrics();var e=this.core.$el.find(this.statsBoxElem).scrollTop();this.$el.html(this.template({metrics:p.format(this.metrics),iconPosition:this._iconPosition})),this.setStatsBoxSize(),this.core.$el.find(this.statsBoxElem).scrollTop(e),this.showing||this.hide()}},{key:"setStatsBoxSize",value:function(){this.playerWidth>=this.statsBoxWidthThreshold?(this.$el.find(this.statsBoxElem).addClass("wide"),this.$el.find(this.statsBoxElem).removeClass("narrow")):(this.$el.find(this.statsBoxElem).removeClass("wide"),this.$el.find(this.statsBoxElem).addClass("narrow"))}},{key:"render",value:function(){var t=o.Styler.getStyleFor(a.default,{baseUrl:this.options.baseUrl});return this.core.$el.append(t),this.core.$el.append(this.$el),this.hide(),this}}]),e}(o.UICorePlugin);e.default=d,t.exports=e.default},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){(e=n(5)(!1)).push([t.i,".clappr-nerd-stats[data-clappr-nerd-stats] .stats-box {\n  position: absolute;\n  display: inline-block;\n  top: 2em;\n  left: 2em;\n  padding: 5px 5px 5px 5px;\n  margin: 0;\n  line-height: 20px;\n  font-size: 11px;\n  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.15);\n  background: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  z-index: 1000;\n  overflow: auto;\n  max-height: 300px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box.narrow {\n  width: 260px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box.wide {\n  width: 860px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box ul {\n  display: inline-block;\n  float: left;\n  padding: 5px 5px 5px 5px;\n  width: 210px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box ul, li {\n  list-style-type: none;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box li:nth-child(2n) {\n  background: hsla(0, 0%, 100%, 0.15);\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box li {\n  padding: 0 5px;\n  text-align: left;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box li.title {\n  text-align: center;\n  font-weight: bold;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box li div {\n  padding-left: 5px;\n  margin: 0;\n  float: right;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .stats-box a.close-button {\n  position: absolute;\n  right: 0.3em;\n  top: 0;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .icon-show-stats a {\n  z-index: 1000;\n  position: absolute;\n  float: right;\n  color: white;\n  display: none;\n  cursor: pointer;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .icon-show-stats.top-right a {\n  display: block;\n  top: 5px;\n  right: 10px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .icon-show-stats.top-left a {\n  display: block;\n  top: 5px;\n  left: 10px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .icon-show-stats.bottom-right a {\n  display: block;\n  right: 10px;\n  bottom: 5px;\n}\n\n.clappr-nerd-stats[data-clappr-nerd-stats] .icon-show-stats.bottom-left a {\n  display: block;\n  bottom: 5px;\n  left: 10px;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e){t.exports='<% general = metrics.general %> <% counters = metrics.counters %> <% timers = metrics.timers %> <% extra = metrics.extra %> <div class="icon-show-stats <%= iconPosition %>" data-show-stats-button> <a>&#9432;</a> </div> <div class=stats-box> <a class=close-button data-close-button>&times;</a> <ul> <li class=title><span>General</span></li> <li> Display resolution: <div><span><%= general.displayResolution %></span></div> </li> <li> Volume: <div><span><%= general.volume %></span></div> </li> </ul> <ul> <li class=title><span>Counters</span></li> <li> Plays: <div><span><%= counters.play %></span></div> </li> <li> Pauses: <div><span><%= counters.pause %></span></div> </li> <li> Errors: <div><span><%= counters.error %></span></div> </li> <li> Bufferings: <div><span><%= counters.buffering %></span></div> </li> <li> Decoded frames: <div><span><%= counters.decodedFrames %></span></div> </li> <li> Dropped frames: <div><span><%= counters.droppedFrames %></span></div> </li> <li> Frames per second: <div><span><%= counters.fps %></span></div> </li> <li> Bitrate changes: <div><span><%= counters.changeLevel %></span></div> </li> <li> Seeks: <div><span><%= counters.seek %></span></div> </li> <li> Fullscreen: <div><span><%= counters.fullscreen %></span></div> </li> <li> DVR seeks: <div><span><%= counters.dvrUsage %></span></div> </li> </ul> <ul> <li class=title><span>Timers</span></li> <li> Startup time: <div><span><%= timers.startup %></span></div> </li> <li> Watching time: <div><span><%= timers.watch %></span></div> </li> <li> Pause time: <div><span><%= timers.pause %></span></div> </li> <li> Buffering time: <div><span><%= timers.buffering %></span></div> </li> <li> Session time: <div><span><%= timers.session %></span></div> </li> <li> Latency: <div><span><%= timers.latency %></span></div> </li> </ul> <ul> <li class=title><span>Extra</span></li> <li> Playback: <div><span><%= extra.playbackName %></span></div> </li> <li> Playback type: <div><span><%= extra.playbackType %></span></div> </li> <li> Buffer size: <div><span><%= extra.buffersize %></span></div> </li> <li> Video duration: <div><span><%= extra.duration %></span></div> </li> <li> Current time: <div><span><%= extra.currentTime %></span></div> </li> <li> Bitrate weighted mean: <div><span><%= extra.bitrateWeightedMean %></span></div> </li> <li> Bitrate most used: <div><span><%= extra.bitrateMostUsed %></span></div> </li> <li> % Watched: <div><span><%= extra.watchedPercentage %></span></div> </li> <li> % Buffering: <div><span><%= extra.bufferingPercentage %></span></div> </li> <li> Bandwidth: <div><span><%= extra.bandwidth %></span></div> </li> </ul> </div> '},function(t,e,n){"use strict";(function(e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,o=/^\w*$/,i=/^\./,a=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s=/\\(\\)?/g,c=/^\[object .+?Constructor\]$/,u="object"==(void 0===e?"undefined":n(e))&&e&&e.Object===Object&&e,l="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,p=u||l||Function("return this")();var f,d=Array.prototype,h=Function.prototype,y=Object.prototype,v=p["__core-js_shared__"],b=(f=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+f:"",_=h.toString,g=y.hasOwnProperty,m=y.toString,w=RegExp("^"+_.call(g).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=p.Symbol,j=d.splice,k=R(p,"Map"),S=R(Object,"create"),O=x?x.prototype:void 0,P=O?O.toString:void 0;function E(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function C(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function M(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function A(t,e){for(var n,r,o=t.length;o--;)if((n=t[o][0])===(r=e)||n!=n&&r!=r)return o;return-1}function T(t,e){for(var i,a=0,s=(e=function(t,e){if(z(t))return!1;var i=void 0===t?"undefined":n(t);if("number"==i||"symbol"==i||"boolean"==i||null==t||D(t))return!0;return o.test(t)||!r.test(t)||null!=e&&t in Object(e)}(e,t)?[e]:z(i=e)?i:I(i)).length;null!=t&&a<s;)t=t[F(e[a++])];return a&&a==s?t:void 0}function $(t){return!(!N(t)||(e=t,b&&b in e))&&(function(t){var e=N(t)?m.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?w:c).test(function(t){if(null!=t){try{return _.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function B(t,e){var r,o,i=t.__data__;return("string"==(o=void 0===(r=e)?"undefined":n(r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==r:null===r)?i["string"==typeof e?"string":"hash"]:i.map}function R(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return $(n)?n:void 0}E.prototype.clear=function(){this.__data__=S?S(null):{}},E.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},E.prototype.get=function(t){var e=this.__data__;if(S){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return g.call(e,t)?e[t]:void 0},E.prototype.has=function(t){var e=this.__data__;return S?void 0!==e[t]:g.call(e,t)},E.prototype.set=function(t,e){return this.__data__[t]=S&&void 0===e?"__lodash_hash_undefined__":e,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(t){var e=this.__data__,n=A(e,t);return!(n<0)&&(n==e.length-1?e.pop():j.call(e,n,1),!0)},C.prototype.get=function(t){var e=this.__data__,n=A(e,t);return n<0?void 0:e[n][1]},C.prototype.has=function(t){return A(this.__data__,t)>-1},C.prototype.set=function(t,e){var n=this.__data__,r=A(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},M.prototype.clear=function(){this.__data__={hash:new E,map:new(k||C),string:new E}},M.prototype.delete=function(t){return B(this,t).delete(t)},M.prototype.get=function(t){return B(this,t).get(t)},M.prototype.has=function(t){return B(this,t).has(t)},M.prototype.set=function(t,e){return B(this,t).set(t,e),this};var I=U((function(t){var e;t=null==(e=t)?"":function(t){if("string"==typeof t)return t;if(D(t))return P?P.call(t):"";var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}(e);var n=[];return i.test(t)&&n.push(""),t.replace(a,(function(t,e,r,o){n.push(r?o.replace(s,"$1"):e||t)})),n}));function F(t){if("string"==typeof t||D(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}function U(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function n(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=t.apply(this,r);return n.cache=i.set(o,a),a};return n.cache=new(U.Cache||M),n}U.Cache=M;var z=Array.isArray;function N(t){var e=void 0===t?"undefined":n(t);return!!t&&("object"==e||"function"==e)}function D(t){return"symbol"==(void 0===t?"undefined":n(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":n(t))}(t)&&"[object Symbol]"==m.call(t)}t.exports=function(t,e,n){var r=null==t?void 0:T(t,e);return void 0===r?n:r}}).call(this,n(0))},function(t,e,n){"use strict";(function(t,n){var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o="[object Arguments]",i="[object Function]",a="[object GeneratorFunction]",s="[object Map]",c="[object Set]",u=/\w*$/,l=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,f={};f[o]=f["[object Array]"]=f["[object ArrayBuffer]"]=f["[object DataView]"]=f["[object Boolean]"]=f["[object Date]"]=f["[object Float32Array]"]=f["[object Float64Array]"]=f["[object Int8Array]"]=f["[object Int16Array]"]=f["[object Int32Array]"]=f[s]=f["[object Number]"]=f["[object Object]"]=f["[object RegExp]"]=f[c]=f["[object String]"]=f["[object Symbol]"]=f["[object Uint8Array]"]=f["[object Uint8ClampedArray]"]=f["[object Uint16Array]"]=f["[object Uint32Array]"]=!0,f["[object Error]"]=f[i]=f["[object WeakMap]"]=!1;var d="object"==(void 0===t?"undefined":r(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,y=d||h||Function("return this")(),v="object"==r(e)&&e&&!e.nodeType&&e,b=v&&"object"==r(n)&&n&&!n.nodeType&&n,_=b&&b.exports===v;function g(t,e){return t.set(e[0],e[1]),t}function m(t,e){return t.add(e),t}function w(t,e,n,r){var o=-1,i=t?t.length:0;for(r&&i&&(n=t[++o]);++o<i;)n=e(n,t[o],o,t);return n}function x(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function j(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function k(t,e){return function(n){return t(e(n))}}function S(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var O,P=Array.prototype,E=Function.prototype,C=Object.prototype,M=y["__core-js_shared__"],A=(O=/[^.]+$/.exec(M&&M.keys&&M.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",T=E.toString,$=C.hasOwnProperty,B=C.toString,R=RegExp("^"+T.call($).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),I=_?y.Buffer:void 0,F=y.Symbol,U=y.Uint8Array,z=k(Object.getPrototypeOf,Object),N=Object.create,D=C.propertyIsEnumerable,L=P.splice,W=Object.getOwnPropertySymbols,q=I?I.isBuffer:void 0,K=k(Object.keys,Object),V=bt(y,"DataView"),G=bt(y,"Map"),H=bt(y,"Promise"),Y=bt(y,"Set"),Z=bt(y,"WeakMap"),J=bt(Object,"create"),X=xt(V),Q=xt(G),tt=xt(H),et=xt(Y),nt=xt(Z),rt=F?F.prototype:void 0,ot=rt?rt.valueOf:void 0;function it(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function at(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function st(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function ct(t){this.__data__=new at(t)}function ut(t,e){var n=kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":r(t))}(t)&&St(t)}(t)&&$.call(t,"callee")&&(!D.call(t,"callee")||B.call(t)==o)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],i=n.length,a=!!i;for(var s in t)!e&&!$.call(t,s)||a&&("length"==s||mt(s,i))||n.push(s);return n}function lt(t,e,n){var r=t[e];$.call(t,e)&&jt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function pt(t,e){for(var n=t.length;n--;)if(jt(t[n][0],e))return n;return-1}function ft(t,e,n,r,l,p,d){var h;if(r&&(h=p?r(t,l,p,d):r(t)),void 0!==h)return h;if(!Et(t))return t;var y=kt(t);if(y){if(h=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&$.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,h)}else{var v=gt(t),b=v==i||v==a;if(Ot(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if("[object Object]"==v||v==o||b&&!p){if(x(t))return p?t:{};if(h=function(t){return"function"!=typeof t.constructor||wt(t)?{}:(e=z(t),Et(e)?N(e):{});var e}(b?{}:t),!e)return function(t,e){return yt(t,_t(t),e)}(t,function(t,e){return t&&yt(e,Ct(e),t)}(h,t))}else{if(!f[v])return p?t:{};h=function(t,e,n,r){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var n=e?ht(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var n=e?ht(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case s:return function(t,e,n){return w(e?n(j(t),!0):j(t),g,new t.constructor)}(t,r,n);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,u.exec(t));return e.lastIndex=t.lastIndex,e}(t);case c:return function(t,e,n){return w(e?n(S(t),!0):S(t),m,new t.constructor)}(t,r,n);case"[object Symbol]":return i=t,ot?Object(ot.call(i)):{}}var i}(t,v,ft,e)}}d||(d=new ct);var _=d.get(t);if(_)return _;if(d.set(t,h),!y)var k=n?function(t){return function(t,e,n){var r=e(t);return kt(t)?r:function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}(r,n(t))}(t,Ct,_t)}(t):Ct(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(k||t,(function(o,i){k&&(o=t[i=o]),lt(h,i,ft(o,e,n,r,i,t,d))})),h}function dt(t){return!(!Et(t)||(e=t,A&&A in e))&&(Pt(t)||x(t)?R:l).test(xt(t));var e}function ht(t){var e=new t.constructor(t.byteLength);return new U(e).set(new U(t)),e}function yt(t,e,n,r){n||(n={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=r?r(n[a],t[a],a,n,t):void 0;lt(n,a,void 0===s?t[a]:s)}return n}function vt(t,e){var n,o,i=t.__data__;return("string"==(o=void 0===(n=e)?"undefined":r(n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function bt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return dt(n)?n:void 0}it.prototype.clear=function(){this.__data__=J?J(null):{}},it.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},it.prototype.get=function(t){var e=this.__data__;if(J){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return $.call(e,t)?e[t]:void 0},it.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:$.call(e,t)},it.prototype.set=function(t,e){return this.__data__[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,n=pt(e,t);return!(n<0)&&(n==e.length-1?e.pop():L.call(e,n,1),!0)},at.prototype.get=function(t){var e=this.__data__,n=pt(e,t);return n<0?void 0:e[n][1]},at.prototype.has=function(t){return pt(this.__data__,t)>-1},at.prototype.set=function(t,e){var n=this.__data__,r=pt(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},st.prototype.clear=function(){this.__data__={hash:new it,map:new(G||at),string:new it}},st.prototype.delete=function(t){return vt(this,t).delete(t)},st.prototype.get=function(t){return vt(this,t).get(t)},st.prototype.has=function(t){return vt(this,t).has(t)},st.prototype.set=function(t,e){return vt(this,t).set(t,e),this},ct.prototype.clear=function(){this.__data__=new at},ct.prototype.delete=function(t){return this.__data__.delete(t)},ct.prototype.get=function(t){return this.__data__.get(t)},ct.prototype.has=function(t){return this.__data__.has(t)},ct.prototype.set=function(t,e){var n=this.__data__;if(n instanceof at){var r=n.__data__;if(!G||r.length<199)return r.push([t,e]),this;n=this.__data__=new st(r)}return n.set(t,e),this};var _t=W?k(W,Object):function(){return[]},gt=function(t){return B.call(t)};function mt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||p.test(t))&&t>-1&&t%1==0&&t<e}function wt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||C)}function xt(t){if(null!=t){try{return T.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,e){return t===e||t!=t&&e!=e}(V&&"[object DataView]"!=gt(new V(new ArrayBuffer(1)))||G&&gt(new G)!=s||H&&"[object Promise]"!=gt(H.resolve())||Y&&gt(new Y)!=c||Z&&"[object WeakMap]"!=gt(new Z))&&(gt=function(t){var e=B.call(t),n="[object Object]"==e?t.constructor:void 0,r=n?xt(n):void 0;if(r)switch(r){case X:return"[object DataView]";case Q:return s;case tt:return"[object Promise]";case et:return c;case nt:return"[object WeakMap]"}return e});var kt=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Pt(t)}var Ot=q||function(){return!1};function Pt(t){var e=Et(t)?B.call(t):"";return e==i||e==a}function Et(t){var e=void 0===t?"undefined":r(t);return!!t&&("object"==e||"function"==e)}function Ct(t){return St(t)?ut(t):function(t){if(!wt(t))return K(t);var e=[];for(var n in Object(t))$.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}n.exports=function(t){return ft(t,!0,!0)}}).call(this,n(0),n(9)(t))},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=n(11),i=new o.Scale({ms:1,sec:1e3,min:6e4,hours:36e5}),a=new o.Scale({"%":1}),s={general:{volume:{scale:a}},timers:{startup:{scale:i},watch:{scale:i},pause:{scale:i},buffering:{scale:i},session:{scale:i},latency:{scale:i}},extra:{buffersize:{scale:i},duration:{scale:i},currentTime:{scale:i},bitrateWeightedMean:{unit:"bps"},bitrateMostUsed:{unit:"bps"},bandwidth:{unit:"bps"},watchedPercentage:{scale:a},bufferingPercentage:{scale:a}}},c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,null,[{key:"format",value:function(t){var e={};return Object.keys(t).forEach((function(n){e[n]={};var r=s[n];Object.keys(t[n]).forEach((function(i){var a=t[n][i];if(r&&r[i]&&"number"==typeof a&&!isNaN(a)){var s=r[i].scale||"SI",c=r[i].unit||"";e[n][i]=o(a,{scale:s,unit:c,decimals:2})}else e[n][i]=a}))})),e}}]),t}();e.default=c,t.exports=e.default},function(t,e,n){"use strict";var r,o,i;"function"==typeof Symbol&&Symbol.iterator;o=[],void 0===(i="function"==typeof(r=function(){function t(t,e){var n;for(n in e)c(e,n)&&(t[n]=e[n])}function e(e,n){var r,o;for(r=0,o=arguments.length;r<o;++r)(n=arguments[r])&&t(e,n);return e}function n(t,e){return e.length-t.length}function r(t,e){return t.factor-e.factor}function o(t,e){var n;for(n in t)c(t,n)&&e(t[n],n)}var i,a,s,c=(a=Object.prototype.hasOwnProperty,function(t,e){return t&&a.call(t,e)}),u=(i=Object.prototype.toString,function(t){return i.call(t)}),l=(s=u(0),function(t){return t==t&&u(t)===s}),p=function(t){return function(e){return u(e)===t}}(u(""));function f(t,e){for(;p(e);)e=t[e];return e}function d(t){this._prefixes=t;var e=[],i=[];o(t,(function(t,n){e.push(n.replace(/([.*+?=^!:${}()|[\]/\\])/g,"\\$1")),i.push({factor:t,prefix:n})}));var a=this._lcPrefixes={};o(t,(function(e,n){var r=n.toLowerCase();c(t,r)||(a[r]=n)})),i.sort(r),this._list=i,e.sort(n),this._regexp=new RegExp("^\\s*(\\d+(?:\\.\\d+)?)\\s*("+e.join("|")+")\\s*(.*)\\s*?$","i")}d.create=function(t,e,n){var r={};return function(t,e){var n,r;for(n=0,r=t.length;n<r;++n)e(t[n],n)}(t,(function(t,o){r[t]=Math.pow(e,o+(n||0))})),new d(r)},d.prototype.findPrefix=function(t){for(var e,n=this._list,r=0,o=n.length-1;r!==o;)n[e=r+o+1>>1].factor>t?o=e-1:r=e;return n[r]},d.prototype.parse=function(t,e){var n=t.match(this._regexp);if(!n)return null;var r,o=n[2];if(c(this._prefixes,o))r=this._prefixes[o];else{if(e||(o=o.toLowerCase(),!c(this._lcPrefixes,o)))return null;o=this._lcPrefixes[o],r=this._prefixes[o]}return{factor:r,prefix:o,unit:n[3],value:+n[1]}};var h={binary:d.create(",ki,Mi,Gi,Ti,Pi,Ei,Zi,Yi".split(","),1024),SI:d.create("y,z,a,f,p,n,µ,m,,k,M,G,T,P,E,Z,Y".split(","),1e3,-8)},y={scale:"SI",strict:!1,unit:"",decimals:2,separator:" "};function v(t,n){var r=g(t,n=e({},y,n)),o=r.prefix+n.unit;return function(t,e){if(!e)return Math.round(t);var n=Math.pow(10,e);return Math.round(t*n)/n}(r.value,n.decimals)+(o?n.separator+o:"")}function b(t,e){var n=_(t,e);return n.value*n.factor}function _(t,n){if(!p(t))throw new TypeError("str must be a string");n=e({},y,n);var r=f(h,n.scale);if(!r)throw new Error("missing scale");var o=r.parse(t,n.strict);if(!o)throw new Error("cannot parse str");return o}function g(t,n){if(0===t)return{value:0,prefix:""};if(!l(t))throw new TypeError("value must be a number");n=e({},y,n);var r=f(h,n.scale);if(!r)throw new Error("missing scale");var o,i=n.prefix;if(null!=i){if(!c(r._prefixes,i))throw new Error("invalid prefix");o=r._prefixes[i]}else{var a=r.findPrefix(t);i=a.prefix,o=a.factor}return{prefix:i,value:t/=o}}return v.parse=b,b.raw=_,v.raw=g,v.Scale=d,v})?r.apply(e,o):r)||(t.exports=i)},function(t,e,n){"use strict";var r;!function(o,i,a){if(o){for(var s,c={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},u={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},l={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},f=1;f<20;++f)c[111+f]="f"+f;for(f=0;f<=9;++f)c[f+96]=f.toString();_.prototype.bind=function(t,e,n){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,n),this},_.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},_.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},_.prototype.reset=function(){return this._callbacks={},this._directMap={},this},_.prototype.stopCallback=function(t,e){if((" "+e.className+" ").indexOf(" mousetrap ")>-1)return!1;if(function t(e,n){return null!==e&&e!==i&&(e===n||t(e.parentNode,n))}(e,this.target))return!1;if("composedPath"in t&&"function"==typeof t.composedPath){var n=t.composedPath()[0];n!==t.target&&(e=n)}return"INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable},_.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},_.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(c[e]=t[e]);s=null},_.init=function(){var t=_(i);for(var e in t)"_"!==e.charAt(0)&&(_[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},_.init(),o.Mousetrap=_,t.exports&&(t.exports=_),void 0===(r=function(){return _}.call(e,n,e,t))||(t.exports=r)}function d(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)}function h(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return c[t.which]?c[t.which]:u[t.which]?u[t.which]:String.fromCharCode(t.which).toLowerCase()}function y(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function v(t,e,n){return n||(n=function(){if(!s)for(var t in s={},c)t>95&&t<112||c.hasOwnProperty(t)&&(s[c[t]]=t);return s}()[t]?"keydown":"keypress"),"keypress"==n&&e.length&&(n="keydown"),n}function b(t,e){var n,r,o,i=[];for(n=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),o=0;o<n.length;++o)r=n[o],p[r]&&(r=p[r]),e&&"keypress"!=e&&l[r]&&(r=l[r],i.push("shift")),y(r)&&i.push(r);return{key:r,modifiers:i,action:e=v(r,i,e)}}function _(t){var e=this;if(t=t||i,!(e instanceof _))return new _(t);e.target=t,e._callbacks={},e._directMap={};var n,r={},o=!1,a=!1,s=!1;function c(t){t=t||{};var e,n=!1;for(e in r)t[e]?n=!0:r[e]=0;n||(s=!1)}function u(t,n,o,i,a,s){var c,u,l,p,f=[],d=o.type;if(!e._callbacks[t])return[];for("keyup"==d&&y(t)&&(n=[t]),c=0;c<e._callbacks[t].length;++c)if(u=e._callbacks[t][c],(i||!u.seq||r[u.seq]==u.level)&&d==u.action&&("keypress"==d&&!o.metaKey&&!o.ctrlKey||(l=n,p=u.modifiers,l.sort().join(",")===p.sort().join(",")))){var h=!i&&u.combo==a,v=i&&u.seq==i&&u.level==s;(h||v)&&e._callbacks[t].splice(c,1),f.push(u)}return f}function l(t,n,r,o){e.stopCallback(n,n.target||n.srcElement,r,o)||!1===t(n,r)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(n),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(n))}function p(t){"number"!=typeof t.which&&(t.which=t.keyCode);var n=h(t);n&&("keyup"!=t.type||o!==n?e.handleKey(n,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):o=!1)}function f(t,e,i,a){function u(e){return function(){s=e,++r[t],clearTimeout(n),n=setTimeout(c,1e3)}}function p(e){l(i,e,t),"keyup"!==a&&(o=h(e)),setTimeout(c,10)}r[t]=0;for(var f=0;f<e.length;++f){var d=f+1===e.length?p:u(a||b(e[f+1]).action);v(e[f],d,a,t,f)}}function v(t,n,r,o,i){e._directMap[t+":"+r]=n;var a,s=(t=t.replace(/\s+/g," ")).split(" ");s.length>1?f(t,s,n,r):(a=b(t,r),e._callbacks[a.key]=e._callbacks[a.key]||[],u(a.key,a.modifiers,{type:a.action},o,t,i),e._callbacks[a.key][o?"unshift":"push"]({callback:n,modifiers:a.modifiers,action:a.action,seq:o,level:i,combo:t}))}e._handleKey=function(t,e,n){var r,o=u(t,e,n),i={},p=0,f=!1;for(r=0;r<o.length;++r)o[r].seq&&(p=Math.max(p,o[r].level));for(r=0;r<o.length;++r)if(o[r].seq){if(o[r].level!=p)continue;f=!0,i[o[r].seq]=1,l(o[r].callback,n,o[r].combo,o[r].seq)}else f||l(o[r].callback,n,o[r].combo);var d="keypress"==n.type&&a;n.type!=s||y(t)||d||c(i),a=f&&"keydown"==n.type},e._bindMultiple=function(t,e,n){for(var r=0;r<t.length;++r)v(t[r],e,n)},d(t,"keypress",p),d(t,"keydown",p),d(t,"keyup",p)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}])}));