(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,n,t){"use strict";var r,o;e.exports=(null==(r=t.g.process)?void 0:r.env)&&"object"===typeof(null==(o=t.g.process)?void 0:o.env)?t.g.process:t(7663)},6840:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(430)}])},732:function(e,n,t){"use strict";var r=(0,t(7294).createContext)(null);n.Z=r},430:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),o.forEach((function(n){r(e,n,t[n])}))}return e}t.r(n),t.d(n,{default:function(){return w}});var i=t(5893),u=(t(906),t(7294)),c="undefined"!==typeof window,a=({beforeSend:e}={})=>{var n;if(!c)return;if(window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)}),e&&(null==(n=window.va)||n.call(window,"beforeSend",e)),document.head.querySelector('script[src="/va/script.js"]'))return;const t=document.createElement("script");t.src="/va/script.js",t.defer=!0,document.head.appendChild(t)};function s(e){return u.createElement(l,{...e})}function l({beforeSend:e}){return(0,u.useEffect)((()=>{a({beforeSend:e})}),[e]),null}var f=t(732),d=t(1163),p=t(3454).env.NEXT_PUBLIC_GA_TRACKING_ID;var w=function(e){var n=e.Component,t=e.pageProps,r=(0,d.useRouter)();(0,u.useEffect)((function(){var e=document.createElement("script");e.src="https://www.googletagmanager.com/gtag/js?id=".concat(p),e.async=!0,document.head.appendChild(e),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",p,{page_path:window.location.pathname});var n=function(e){window.gtag("config",p,{page_path:e})};return r.events.on("routeChangeComplete",n),function(){r.events.off("routeChangeComplete",n)}}),[r.events]);var c=(0,u.useRef)(null),a=(0,u.useRef)(null),l=(0,u.useRef)(null),w=(0,u.useState)({portfolio:{NavBar:{IntervalEvent:null,scrolling:null,scrollSizeY:null},Scrolling:{IntervalEvent:null}},userdata:{timerCookieRef:c,windowSizeTracker:a,mousePositionTracker:l},typing:{keyboardEvent:null,eventInputLostFocus:null},finishedLoading:!1}),v=w[0],h=w[1];return(0,i.jsxs)(f.Z.Provider,{value:{sharedState:v,setSharedState:h},children:[(0,i.jsx)(n,o({},t)),(0,i.jsx)(s,{})]})}},906:function(){},7663:function(e){!function(){var n={308:function(e){var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(r){try{return n.call(null,e,0)}catch(r){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var c,a=[],s=!1,l=-1;function f(){s&&c&&(s=!1,c.length?a=c.concat(a):l=-1,a.length&&d())}function d(){if(!s){var e=u(f);s=!0;for(var n=a.length;n;){for(c=a,a=[];++l<n;)c&&c[l].run();l=-1,n=a.length}c=null,s=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function p(e,n){this.fun=e,this.array=n}function w(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];a.push(new p(e,n)),1!==a.length||s||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=w,r.addListener=w,r.once=w,r.off=w,r.removeListener=w,r.removeAllListeners=w,r.emit=w,r.prependListener=w,r.prependOnceListener=w,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}},u=!0;try{n[e](i,i.exports,r),u=!1}finally{u&&delete t[e]}return i.exports}r.ab="//";var o=r(308);e.exports=o}()},1163:function(e,n,t){e.exports=t(387)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(6840),n(387)}));var t=e.O();_N_E=t}]);