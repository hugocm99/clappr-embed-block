!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("Clappr")):"function"==typeof define&&define.amd?define(["Clappr"],t):"object"==typeof exports?exports.ClapprStats=t(require("Clappr")):e.ClapprStats=t(e.Clappr)}(window,function(n){return function(N){var n=window.webpackHotUpdateClapprStats;window.webpackHotUpdateClapprStats=function(e,t){!function(e,t){if(!H[e]||!p[e])return;for(var n in p[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(I[n]=t[n]);0==--u&&0===l&&_()}(e,t),n&&n(e,t)};var o,r=!0,A="6f4de0da0fe2448c3667",t=1e4,S={},R=[],i=[];function s(t){var n=F[t];if(!n)return U;function r(e){return n.hot.active?(F[e]?-1===F[e].parents.indexOf(t)&&F[e].parents.push(t):(R=[t],o=e),-1===n.children.indexOf(e)&&n.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+t),R=[]),U(e)}function e(t){return{configurable:!0,enumerable:!0,get:function(){return U[t]},set:function(e){U[t]=e}}}for(var i in U)Object.prototype.hasOwnProperty.call(U,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,e(i));return r.e=function(e){return"ready"===C&&M("prepare"),l++,U.e(e).then(t,function(e){throw t(),e});function t(){l--,"prepare"===C&&(d[e]||h(e),0===l&&0===u&&_())}},r.t=function(e,t){return 1&t&&(e=r(e)),U.t(e,-2&t)},r}var a=[],C="idle";function M(e){C=e;for(var t=0;t<a.length;t++)a[t].call(null,e)}var c,I,D,u=0,l=0,d={},p={},H={};function B(e){return+e+""===e?+e:e}function f(e){if("idle"!==C)throw new Error("check() is only allowed in idle status");return r=e,M("check"),function(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=U.p+""+A+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}(t).then(function(e){if(!e)return M("idle"),null;p={},d={},H=e.c,D=e.h,M("prepare");var t=new Promise(function(e,t){c={resolve:e,reject:t}});I={};return h(0),"prepare"===C&&0===l&&0===u&&_(),t})}function h(e){H[e]?(p[e]=!0,u++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=U.p+""+e+"."+A+".hot-update.js",document.head.appendChild(t)}(e)):d[e]=!0}function _(){M("ready");var t=c;if(c=null,t)if(r)Promise.resolve().then(function(){return y(r)}).then(function(e){t.resolve(e)},function(e){t.reject(e)});else{var e=[];for(var n in I)Object.prototype.hasOwnProperty.call(I,n)&&e.push(B(n));t.resolve(e)}}function y(n){if("ready"!==C)throw new Error("apply() is only allowed in ready status");var e,t,r,l,i;function o(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});0<r.length;){var i=r.pop(),o=i.id,s=i.chain;if((l=F[o])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var a=0;a<l.parents.length;a++){var c=l.parents[a],u=F[c];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([c]),moduleId:o,parentId:c};-1===t.indexOf(c)&&(u.hot._acceptedDependencies[o]?(n[c]||(n[c]=[]),d(n[c],[o])):(delete n[c],t.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}n=n||{};function s(){console.warn("[HMR] unexpected require("+f.moduleId+") to disposed module")}var a={},c=[],u={};for(var p in I)if(Object.prototype.hasOwnProperty.call(I,p)){var f;i=B(p);var h=!1,_=!1,y=!1,v="";switch((f=I[p]?o(i):{type:"disposed",moduleId:p}).chain&&(v="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":n.onDeclined&&n.onDeclined(f),n.ignoreDeclined||(h=new Error("Aborted because of self decline: "+f.moduleId+v));break;case"declined":n.onDeclined&&n.onDeclined(f),n.ignoreDeclined||(h=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+v));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(f),n.ignoreUnaccepted||(h=new Error("Aborted because "+i+" is not accepted"+v));break;case"accepted":n.onAccepted&&n.onAccepted(f),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(f),y=!0;break;default:throw new Error("Unexception type "+f.type)}if(h)return M("abort"),Promise.reject(h);if(_)for(i in u[i]=I[i],d(c,f.outdatedModules),f.outdatedDependencies)Object.prototype.hasOwnProperty.call(f.outdatedDependencies,i)&&(a[i]||(a[i]=[]),d(a[i],f.outdatedDependencies[i]));y&&(d(c,[f.moduleId]),u[i]=s)}var m,b=[];for(t=0;t<c.length;t++)i=c[t],F[i]&&F[i].hot._selfAccepted&&u[i]!==s&&b.push({module:i,errorHandler:F[i].hot._selfAccepted});M("dispose"),Object.keys(H).forEach(function(e){!1===H[e]&&function(e){delete installedChunks[e]}(e)});for(var w,g,E=c.slice();0<E.length;)if(i=E.pop(),l=F[i]){var T={},O=l.hot._disposeHandlers;for(r=0;r<O.length;r++)(e=O[r])(T);for(S[i]=T,l.hot.active=!1,delete F[i],delete a[i],r=0;r<l.children.length;r++){var P=F[l.children[r]];P&&0<=(m=P.parents.indexOf(i))&&P.parents.splice(m,1)}}for(i in a)if(Object.prototype.hasOwnProperty.call(a,i)&&(l=F[i]))for(g=a[i],r=0;r<g.length;r++)w=g[r],0<=(m=l.children.indexOf(w))&&l.children.splice(m,1);for(i in M("apply"),A=D,u)Object.prototype.hasOwnProperty.call(u,i)&&(N[i]=u[i]);var k=null;for(i in a)if(Object.prototype.hasOwnProperty.call(a,i)&&(l=F[i])){g=a[i];var x=[];for(t=0;t<g.length;t++)if(w=g[t],e=l.hot._acceptedDependencies[w]){if(-1!==x.indexOf(e))continue;x.push(e)}for(t=0;t<x.length;t++){e=x[t];try{e(g)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:i,dependencyId:g[t],error:e}),n.ignoreErrored||(k=k||e)}}}for(t=0;t<b.length;t++){var j=b[t];i=j.module,R=[i];try{U(i)}catch(t){if("function"==typeof j.errorHandler)try{j.errorHandler(t)}catch(e){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:e,originalError:t}),n.ignoreErrored||(k=k||e),k=k||t}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:i,error:t}),n.ignoreErrored||(k=k||t)}}return k?(M("fail"),Promise.reject(k)):(M("idle"),new Promise(function(e){e(c)}))}var F={};function U(e){if(F[e])return F[e].exports;var t=F[e]={i:e,l:!1,exports:{},hot:function(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._acceptedDependencies[e[n]]=t||function(){};else r._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._declinedDependencies[e[t]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=r._disposeHandlers.indexOf(e);0<=t&&r._disposeHandlers.splice(t,1)},check:f,apply:y,status:function(e){if(!e)return C;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);0<=t&&a.splice(t,1)},data:S[e]};return o=void 0,r}(e),parents:(i=R,R=[],i),children:[]};return N[e].call(t.exports,t,t.exports,s(e)),t.l=!0,t.exports}return U.m=N,U.c=F,U.d=function(e,t,n){U.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},U.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},U.t=function(t,e){if(1&e&&(t=U(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(U.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)U.d(n,r,function(e){return t[e]}.bind(null,r));return n},U.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return U.d(t,"a",t),t},U.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},U.p="latest/",U.h=function(){return A},s("./src/clappr-stats.js")(U.s="./src/clappr-stats.js")}({"./node_modules/lodash.get/index.js":function(W,e,t){"use strict";(function(e){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t="Expected a function",r="__lodash_hash_undefined__",n=1/0,o="[object Function]",s="[object GeneratorFunction]",a="[object Symbol]",c=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/,l=/^\./,d=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,f=/^\[object .+?Constructor\]$/,h="object"==(void 0===e?"undefined":i(e))&&e&&e.Object===Object&&e,_="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,y=h||_||Function("return this")();var v,m=Array.prototype,b=Function.prototype,w=Object.prototype,g=y["__core-js_shared__"],E=(v=/[^.]+$/.exec(g&&g.keys&&g.keys.IE_PROTO||""))?"Symbol(src)_1."+v:"",T=b.toString,O=w.hasOwnProperty,P=w.toString,k=RegExp("^"+T.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),x=y.Symbol,j=m.splice,N=U(y,"Map"),A=U(Object,"create"),S=x?x.prototype:void 0,R=S?S.toString:void 0;function C(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function M(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function I(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function D(e,t){for(var n,r,i=e.length;i--;)if((n=e[i][0])===(r=t)||n!=n&&r!=r)return i;return-1}function H(e,t){for(var n=0,r=(t=function(e,t){if($(e))return!1;var n=void 0===e?"undefined":i(e);if("number"==n||"symbol"==n||"boolean"==n||null==e||V(e))return!0;return u.test(e)||!c.test(e)||null!=t&&e in Object(t)}(t,e)?[t]:function(e){return $(e)?e:L(e)}(t)).length;null!=e&&n<r;)e=e[G(t[n++])];return n&&n==r?e:void 0}function B(e){return!(!Y(e)||function(e){return!!E&&E in e}(e))&&(function(e){var t=Y(e)?P.call(e):"";return t==o||t==s}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?k:f).test(function(e){if(null!=e){try{return T.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function F(e,t){var n=e.__data__;return function(e){var t=void 0===e?"undefined":i(e);return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}(t)?n["string"==typeof t?"string":"hash"]:n.map}function U(e,t){var n=function(e,t){return null==e?void 0:e[t]}(e,t);return B(n)?n:void 0}C.prototype.clear=function(){this.__data__=A?A(null):{}},C.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},C.prototype.get=function(e){var t=this.__data__;if(A){var n=t[e];return n===r?void 0:n}return O.call(t,e)?t[e]:void 0},C.prototype.has=function(e){var t=this.__data__;return A?void 0!==t[e]:O.call(t,e)},C.prototype.set=function(e,t){return this.__data__[e]=A&&void 0===t?r:t,this},M.prototype.clear=function(){this.__data__=[]},M.prototype.delete=function(e){var t=this.__data__,n=D(t,e);return!(n<0)&&(n==t.length-1?t.pop():j.call(t,n,1),!0)},M.prototype.get=function(e){var t=this.__data__,n=D(t,e);return n<0?void 0:t[n][1]},M.prototype.has=function(e){return-1<D(this.__data__,e)},M.prototype.set=function(e,t){var n=this.__data__,r=D(n,e);return r<0?n.push([e,t]):n[r][1]=t,this},I.prototype.clear=function(){this.__data__={hash:new C,map:new(N||M),string:new C}},I.prototype.delete=function(e){return F(this,e).delete(e)},I.prototype.get=function(e){return F(this,e).get(e)},I.prototype.has=function(e){return F(this,e).has(e)},I.prototype.set=function(e,t){return F(this,e).set(e,t),this};var L=q(function(e){e=function(e){return null==e?"":function(e){if("string"==typeof e)return e;if(V(e))return R?R.call(e):"";var t=e+"";return"0"==t&&1/e==-n?"-0":t}(e)}(e);var i=[];return l.test(e)&&i.push(""),e.replace(d,function(e,t,n,r){i.push(n?r.replace(p,"$1"):t||e)}),i});function G(e){if("string"==typeof e||V(e))return e;var t=e+"";return"0"==t&&1/e==-n?"-0":t}function q(i,o){if("function"!=typeof i||o&&"function"!=typeof o)throw new TypeError(t);function s(){var e=arguments,t=o?o.apply(this,e):e[0],n=s.cache;if(n.has(t))return n.get(t);var r=i.apply(this,e);return s.cache=n.set(t,r),r}return s.cache=new(q.Cache||I),s}q.Cache=I;var $=Array.isArray;function Y(e){var t=void 0===e?"undefined":i(e);return!!e&&("object"==t||"function"==t)}function V(e){return"symbol"==(void 0===e?"undefined":i(e))||function(e){return!!e&&"object"==(void 0===e?"undefined":i(e))}(e)&&P.call(e)==a}W.exports=function(e,t,n){var r=null==e?void 0:H(e,t);return void 0===r?n:r}}).call(this,t("./node_modules/webpack/buildin/global.js"))},"./node_modules/webpack/buildin/global.js":function(e,t,n){"use strict";var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":i(window))&&(r=window)}e.exports=r},"./src/clappr-stats.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e};function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o,s=n("clappr"),a=n("./node_modules/lodash.get/index.js"),c=(o=a)&&o.__esModule?o:{default:o};var u=(function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,s.ContainerPlugin),r(l,[{key:"_now",value:function(){return window.performance&&"function"==typeof window.performance.now?window.performance.now():new Date}},{key:"_inc",value:function(e){this._metrics.counters[e]+=1}},{key:"_timerHasStarted",value:function(e){return void 0!==this["_start"+e]}},{key:"_start",value:function(e){this["_start"+e]=this._now()}},{key:"_stop",value:function(e){this._metrics.timers[e]+=this._now()-this["_start"+e]}},{key:"_defaultReport",value:function(e){console.log(e)}},{key:"name",get:function(){return"clappr_stats"}},{key:"_playbackName",get:function(){return this.container.playback.name}},{key:"_playbackType",get:function(){return this.container.getPlaybackType()}}]),r(l,[{key:"bindEvents",value:function(){var t=this;this.listenTo(this.container,s.Events.CONTAINER_BITRATE,this.onBitrate),this.listenTo(this.container,s.Events.CONTAINER_STOP,this.stopReporting),this.listenTo(this.container,s.Events.CONTAINER_ENDED,this.stopReporting),this.listenToOnce(this.container.playback,s.Events.PLAYBACK_PLAY_INTENT,this.startTimers),this.listenToOnce(this.container,s.Events.CONTAINER_PLAY,this.onFirstPlaying),this.listenTo(this.container,s.Events.CONTAINER_PLAY,this.onPlay),this.listenTo(this.container,s.Events.CONTAINER_PAUSE,this.onPause),this.listenToOnce(this.container,s.Events.CONTAINER_STATE_BUFFERING,this.onBuffering),this.listenTo(this.container,s.Events.CONTAINER_SEEK,this.onSeek),this.listenTo(this.container,s.Events.CONTAINER_ERROR,function(){return t._inc("error")}),this.listenTo(this.container,s.Events.CONTAINER_FULLSCREEN,function(){return t._inc("fullscreen")}),this.listenTo(this.container,s.Events.CONTAINER_PLAYBACKDVRSTATECHANGED,function(e){e&&t._inc("dvrUsage")}),this.listenTo(this.container.playback,s.Events.PLAYBACK_PROGRESS,this.onProgress),this.listenTo(this.container.playback,s.Events.PLAYBACK_TIMEUPDATE,this.onTimeUpdate)}},{key:"destroy",value:function(){this.stopReporting(),function e(t,n,r){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,n);if(void 0===i){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,r)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(r):void 0}(l.prototype.__proto__||Object.getPrototypeOf(l.prototype),"destroy",this).call(this)}},{key:"onBitrate",value:function(e){var t=parseInt((0,c.default)(e,"bitrate",0),10),n=this._now();if(0<this._metrics.extra.bitratesHistory.length){var r=this._metrics.extra.bitratesHistory[this._metrics.extra.bitratesHistory.length-1];r.end=n,r.time=n-r.start}this._metrics.extra.bitratesHistory.push({start:this._now(),bitrate:t}),this._inc("changeLevel")}},{key:"stopReporting",value:function(){this._buildReport(),clearInterval(this._intervalId),this._newMetrics(),this.stopListening(),this.bindEvents()}},{key:"startTimers",value:function(){this._intervalId=setInterval(this._buildReport.bind(this),this._runEach),this._start("session"),this._start("startup")}},{key:"onFirstPlaying",value:function(){this.listenTo(this.container,s.Events.CONTAINER_TIMEUPDATE,this.onContainerUpdateWhilePlaying),this._start("watch"),this._stop("startup")}},{key:"playAfterPause",value:function(){this.listenTo(this.container,s.Events.CONTAINER_TIMEUPDATE,this.onContainerUpdateWhilePlaying),this._stop("pause"),this._start("watch")}},{key:"onPlay",value:function(){this._inc("play")}},{key:"onPause",value:function(){this._stop("watch"),this._start("pause"),this._inc("pause"),this.listenToOnce(this.container,s.Events.CONTAINER_PLAY,this.playAfterPause),this.stopListening(this.container,s.Events.CONTAINER_TIMEUPDATE,this.onContainerUpdateWhilePlaying)}},{key:"onSeek",value:function(e){this._inc("seek"),this._metrics.extra.watchHistory.push([1e3*e,1e3*e])}},{key:"onTimeUpdate",value:function(e){var t=1e3*e.current,n=1e3*e.total,r=this._metrics.extra.watchHistory.length;if(this._metrics.extra.duration=n,this._metrics.extra.currentTime=t,this._metrics.extra.watchedPercentage=t/n*100,0===r?this._metrics.extra.watchHistory.push([t,t]):this._metrics.extra.watchHistory[r-1][1]=t,0<this._metrics.extra.bitratesHistory.length){var i=this._metrics.extra.bitratesHistory[this._metrics.extra.bitratesHistory.length-1];i.end||(i.time=this._now()-i.start)}this._onCompletion()}},{key:"onContainerUpdateWhilePlaying",value:function(){this.container.playback.isPlaying()&&(this._stop("watch"),this._start("watch"))}},{key:"onBuffering",value:function(){this._inc("buffering"),this._start("buffering"),this.listenToOnce(this.container,s.Events.CONTAINER_STATE_BUFFERFULL,this.onBufferfull)}},{key:"onBufferfull",value:function(){this._stop("buffering"),this.listenToOnce(this.container,s.Events.CONTAINER_STATE_BUFFERING,this.onBuffering)}},{key:"onProgress",value:function(e){this._metrics.extra.buffersize=1e3*e.current}},{key:"_newMetrics",value:function(){this._metrics={counters:{play:0,pause:0,error:0,buffering:0,decodedFrames:0,droppedFrames:0,fps:0,changeLevel:0,seek:0,fullscreen:0,dvrUsage:0},timers:{startup:0,watch:0,pause:0,buffering:0,session:0,latency:0},extra:{playbackName:"",playbackType:"",bitratesHistory:[],bitrateWeightedMean:0,bitrateMostUsed:0,buffersize:0,watchHistory:[],watchedPercentage:0,bufferingPercentage:0,bandwidth:0,duration:0,currentTime:0}}}},{key:"_onCompletion",value:function(){var e=this._metrics.extra.watchedPercentage,t=this._completion.watch,n=-1!=this._completion.calls.indexOf(e);-1==t.indexOf(e)||n||(s.Log.info(this.name+" PERCENTAGE_EVENT: "+e),this._completion.calls.push(e),this.trigger(l.PERCENTAGE_EVENT,e))}},{key:"_buildReport",value:function(){this._stop("session"),this._start("session"),this._metrics.extra.playbackName=this._playbackName,this._metrics.extra.playbackType=this._playbackType,this._calculateBitrates(),this._calculatePercentages(),this._fetchFPS(),this._measureLatency(),this._measureBandwidth(),this.trigger(l.REPORT_EVENT,JSON.parse(JSON.stringify(this._metrics)))}},{key:"_fetchFPS",value:function(){var e={html5_video:this._html5FetchFPS,hls:this._html5FetchFPS,dash_shaka_playback:this._html5FetchFPS};e[this._playbackName]&&e[this._playbackName].call(this)}},{key:"_calculateBitrates",value:function(){var e=this._metrics.extra.bitratesHistory.map(function(e){return e.time}).reduce(function(e,t){return e+t},0);this._metrics.extra.bitrateWeightedMean=this._metrics.extra.bitratesHistory.map(function(e){return e.bitrate*e.time}).reduce(function(e,t){return e+t},0)/e,0<this._metrics.extra.bitratesHistory.length&&(this._metrics.extra.bitrateMostUsed=this._metrics.extra.bitratesHistory.slice().sort(function(e,t){return e.time<t.time})[0].bitrate)}},{key:"_calculatePercentages",value:function(){0<this._metrics.extra.duration&&(this._metrics.extra.bufferingPercentage=this._metrics.timers.buffering/this._metrics.extra.duration*100)}},{key:"_html5FetchFPS",value:function(){var e=this.container.playback.el,t=e.webkitDecodedFrameCount||e.mozDecodedFrames||0,n=e.webkitDroppedFrameCount||e.mozParsedFrames-e.mozDecodedFrames||0,r=t-(this._lastDecodedFramesCount||0);this._metrics.counters.decodedFrames=t,this._metrics.counters.droppedFrames=n,this._metrics.counters.fps=r/(this._runEach/1e3),this._lastDecodedFramesCount=t}},{key:"_measureLatency",value:function(){var n=this;if(this._uriToMeasureLatency){var e,r=[],i=function(){e=r[2]-r[1],n._metrics.timers.latency=e};!function e(){if(r.push(n._now()),2<r.length)i();else{var t=new Image;t.onload=e,t.src=n._uriToMeasureLatency+"?"+Math.random()+"="+n._now()}}()}}},{key:"_measureBandwidth",value:function(){var r=this;if(this._urisToMeasureBandwidth&&this._bwMeasureCount%this._runBandwidthTestEvery==0){var i=0,o=function(e){var t=(r._urisToMeasureBandwidth[i-1].end-r._urisToMeasureBandwidth[i-1].start)/1e3,n=8*e.loaded/t;r._metrics.extra.bandwidth=n,r._urisToMeasureBandwidth.forEach(function(e){e.start=0,e.end=0,e.expired=!1,clearTimeout(e.timer)})};!function e(t){if(0<i&&(r._urisToMeasureBandwidth[i-1].end=r._now(),clearTimeout(r._urisToMeasureBandwidth[i-1].timer)),i>=r._urisToMeasureBandwidth.length||0<i&&r._urisToMeasureBandwidth[i-1].expired)o(t);else{var n=new XMLHttpRequest;n.open("GET",r._urisToMeasureBandwidth[i].url,!0),n.responseType="arraybuffer",n.onload=n.onabort=e,r._urisToMeasureBandwidth[i].start=r._now(),r._urisToMeasureBandwidth[i].timer=setTimeout(function(e){r._urisToMeasureBandwidth[e].expired=!0,n.abort()},r._urisToMeasureBandwidth[i].timeout,i),n.send()}i++}()}this._bwMeasureCount++}}]),l);function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return t._runEach=(0,c.default)(e,"options.clapprStats.runEach",5e3),t._onReport=(0,c.default)(e,"options.clapprStats.onReport",t._defaultReport),t._uriToMeasureLatency=(0,c.default)(e,"options.clapprStats.uriToMeasureLatency"),t._urisToMeasureBandwidth=(0,c.default)(e,"options.clapprStats.urisToMeasureBandwidth"),t._runBandwidthTestEvery=(0,c.default)(e,"options.clapprStats.runBandwidthTestEvery",10),t._bwMeasureCount=0,t._completion={watch:(0,c.default)(e,"options.clapprStats.onCompletion",[]),calls:[]},t._newMetrics(),t.on(l.REPORT_EVENT,t._onReport),t}(t.default=u).REPORT_EVENT="clappr:stats:report",u.PERCENTAGE_EVENT="clappr:stats:percentage",e.exports=t.default},clappr:function(e,t){e.exports=n}})});