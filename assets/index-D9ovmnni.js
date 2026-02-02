(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yh(e,n){for(var t=0;t<n.length;t++){const a=n[t];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const r=Object.getOwnPropertyDescriptor(a,i);r&&Object.defineProperty(e,i,r.get?r:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var Ki=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var wd={exports:{}},Pr={},xd={exports:{}},U={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var oi=Symbol.for("react.element"),Vh=Symbol.for("react.portal"),Qh=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),eg=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),tg=Symbol.for("react.suspense"),ag=Symbol.for("react.memo"),ig=Symbol.for("react.lazy"),ic=Symbol.iterator;function rg(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sd=Object.assign,kd={};function ra(e,n,t){this.props=e,this.context=n,this.refs=kd,this.updater=t||Ad}ra.prototype.isReactComponent={};ra.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ra.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cd(){}Cd.prototype=ra.prototype;function Jl(e,n,t){this.props=e,this.context=n,this.refs=kd,this.updater=t||Ad}var Bl=Jl.prototype=new Cd;Bl.constructor=Jl;Sd(Bl,ra.prototype);Bl.isPureReactComponent=!0;var rc=Array.isArray,Pd=Object.prototype.hasOwnProperty,Ul={current:null},Ld={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,n,t){var a,i={},r=null,o=null;if(n!=null)for(a in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(r=""+n.key),n)Pd.call(n,a)&&!Ld.hasOwnProperty(a)&&(i[a]=n[a]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:oi,type:e,key:r,ref:o,props:i,_owner:Ul.current}}function og(e,n){return{$$typeof:oi,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function lg(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var oc=/\/+/g;function Xr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?lg(""+e.key):n.toString(36)}function ji(e,n,t,a,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case oi:case Vh:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+Xr(o,0):a,rc(i)?(t="",e!=null&&(t=e.replace(oc,"$&/")+"/"),ji(i,n,t,"",function(c){return c})):i!=null&&(Fl(i)&&(i=og(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oc,"$&/")+"/")+e)),n.push(i)),1;if(o=0,a=a===""?".":a+":",rc(e))for(var l=0;l<e.length;l++){r=e[l];var s=a+Xr(r,l);o+=ji(r,n,t,s,i)}else if(s=rg(e),typeof s=="function")for(e=s.call(e),l=0;!(r=e.next()).done;)r=r.value,s=a+Xr(r,l++),o+=ji(r,n,t,s,i);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function mi(e,n,t){if(e==null)return e;var a=[],i=0;return ji(e,a,"","",function(r){return n.call(t,r,i++)}),a}function sg(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Hi={transition:null},cg={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:Ul};function Ed(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:mi,forEach:function(e,n,t){mi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mi(e,function(){n++}),n},toArray:function(e){return mi(e,function(n){return n})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=ra;U.Fragment=Qh;U.Profiler=$h;U.PureComponent=Jl;U.StrictMode=Kh;U.Suspense=tg;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;U.act=Ed;U.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Sd({},e.props),i=e.key,r=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,o=Ul.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Pd.call(n,s)&&!Ld.hasOwnProperty(s)&&(a[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)a.children=t;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:oi,type:e.type,key:i,ref:r,props:a,_owner:o}};U.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qh,_context:e},e.Consumer=e};U.createElement=Nd;U.createFactory=function(e){var n=Nd.bind(null,e);return n.type=e,n};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:ng,render:e}};U.isValidElement=Fl;U.lazy=function(e){return{$$typeof:ig,_payload:{_status:-1,_result:e},_init:sg}};U.memo=function(e,n){return{$$typeof:ag,type:e,compare:n===void 0?null:n}};U.startTransition=function(e){var n=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=n}};U.unstable_act=Ed;U.useCallback=function(e,n){return Me.current.useCallback(e,n)};U.useContext=function(e){return Me.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};U.useEffect=function(e,n){return Me.current.useEffect(e,n)};U.useId=function(){return Me.current.useId()};U.useImperativeHandle=function(e,n,t){return Me.current.useImperativeHandle(e,n,t)};U.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};U.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};U.useMemo=function(e,n){return Me.current.useMemo(e,n)};U.useReducer=function(e,n,t){return Me.current.useReducer(e,n,t)};U.useRef=function(e){return Me.current.useRef(e)};U.useState=function(e){return Me.current.useState(e)};U.useSyncExternalStore=function(e,n,t){return Me.current.useSyncExternalStore(e,n,t)};U.useTransition=function(){return Me.current.useTransition()};U.version="18.3.1";xd.exports=U;var E=xd.exports;const Id=zl(E),ug=Yh({__proto__:null,default:Id},[E]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var dg=E,fg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,gg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mg={key:!0,ref:!0,__self:!0,__source:!0};function Wd(e,n,t){var a,i={},r=null,o=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)hg.call(n,a)&&!mg.hasOwnProperty(a)&&(i[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:fg,type:e,key:r,ref:o,props:i,_owner:gg.current}}Pr.Fragment=pg;Pr.jsx=Wd;Pr.jsxs=Wd;wd.exports=Pr;var f=wd.exports,Mo={},Rd={exports:{}},Ye={},Md={exports:{}},Zd={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function n(R,H){var y=R.length;R.push(H);e:for(;0<y;){var G=y-1>>>1,Q=R[G];if(0<i(Q,H))R[G]=H,R[y]=Q,y=G;else break e}}function t(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var H=R[0],y=R.pop();if(y!==H){R[0]=y;e:for(var G=0,Q=R.length,v=Q>>>1;G<v;){var ye=2*(G+1)-1,rn=R[ye],te=ye+1,hn=R[te];if(0>i(rn,y))te<Q&&0>i(hn,rn)?(R[G]=hn,R[te]=y,G=te):(R[G]=rn,R[ye]=y,G=ye);else if(te<Q&&0>i(hn,y))R[G]=hn,R[te]=y,G=te;else break e}}return H}function i(R,H){var y=R.sortIndex-H.sortIndex;return y!==0?y:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],u=1,d=null,h=3,p=!1,w=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(R){for(var H=t(c);H!==null;){if(H.callback===null)a(c);else if(H.startTime<=R)a(c),H.sortIndex=H.expirationTime,n(s,H);else break;H=t(c)}}function S(R){if(x=!1,b(R),!w)if(t(s)!==null)w=!0,he(L);else{var H=t(c);H!==null&&fe(S,H.startTime-R)}}function L(R,H){w=!1,x&&(x=!1,g(M),M=-1),p=!0;var y=h;try{for(b(H),d=t(s);d!==null&&(!(d.expirationTime>H)||R&&!D());){var G=d.callback;if(typeof G=="function"){d.callback=null,h=d.priorityLevel;var Q=G(d.expirationTime<=H);H=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(s)&&a(s),b(H)}else a(s);d=t(s)}if(d!==null)var v=!0;else{var ye=t(c);ye!==null&&fe(S,ye.startTime-H),v=!1}return v}finally{d=null,h=y,p=!1}}var A=!1,I=null,M=-1,_=5,T=-1;function D(){return!(e.unstable_now()-T<_)}function j(){if(I!==null){var R=e.unstable_now();T=R;var H=!0;try{H=I(!0,R)}finally{H?Y():(A=!1,I=null)}}else A=!1}var Y;if(typeof m=="function")Y=function(){m(j)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,F=le.port2;le.port1.onmessage=j,Y=function(){F.postMessage(null)}}else Y=function(){C(j,0)};function he(R){I=R,A||(A=!0,Y())}function fe(R,H){M=C(function(){R(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||p||(w=!0,he(L))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var y=h;h=H;try{return R()}finally{h=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var y=h;h=R;try{return H()}finally{h=y}},e.unstable_scheduleCallback=function(R,H,y){var G=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?G+y:G):y=G,R){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=y+Q,R={id:u++,callback:H,priorityLevel:R,startTime:y,expirationTime:Q,sortIndex:-1},y>G?(R.sortIndex=y,n(c,R),t(s)===null&&R===t(c)&&(x?(g(M),M=-1):x=!0,fe(S,y-G))):(R.sortIndex=Q,n(s,R),w||p||(w=!0,he(L))),R},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(R){var H=h;return function(){var y=h;h=H;try{return R.apply(this,arguments)}finally{h=y}}}})(Zd);Md.exports=Zd;var yg=Md.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bg=E,Xe=yg;function P(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Ja={};function vt(e,n){$t(e,n),$t(e+"Capture",n)}function $t(e,n){for(Ja[e]=n,e=0;e<n.length;e++)Td.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,vg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},sc={};function wg(e){return Zo.call(sc,e)?!0:Zo.call(lc,e)?!1:vg.test(e)?sc[e]=!0:(lc[e]=!0,!1)}function xg(e,n,t,a){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ag(e,n,t,a){if(n===null||typeof n>"u"||xg(e,n,t,a))return!0;if(a)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ze(e,n,t,a,i,r,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ze(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ol,Gl);Ce[n]=new Ze(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ol,Gl);Ce[n]=new Ze(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ol,Gl);Ce[n]=new Ze(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,n,t,a){var i=Ce.hasOwnProperty(n)?Ce[n]:null;(i!==null?i.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Ag(n,t,i,a)&&(t=null),a||i===null?wg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,a=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,a?e.setAttributeNS(a,n,t):e.setAttribute(n,t))))}var Dn=bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),It=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),jd=Symbol.for("react.context"),Vl=Symbol.for("react.forward_ref"),Do=Symbol.for("react.suspense"),jo=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),cc=Symbol.iterator;function ha(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Yr;function ka(e){if(Yr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Yr=n&&n[1]||""}return`
`+Yr+e}var Vr=!1;function Qr(e,n){if(!e||Vr)return"";Vr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var a=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){a=c}e.call(n.prototype)}else{try{throw Error()}catch(c){a=c}e()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),r=a.stack.split(`
`),o=i.length-1,l=r.length-1;1<=o&&0<=l&&i[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==r[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Vr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?ka(e):""}function Sg(e){switch(e.tag){case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return e=Qr(e.type,!1),e;case 11:return e=Qr(e.type.render,!1),e;case 1:return e=Qr(e.type,!0),e;default:return""}}function Ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case It:return"Portal";case To:return"Profiler";case Yl:return"StrictMode";case Do:return"Suspense";case jo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case jd:return(e.displayName||"Context")+".Consumer";case Dd:return(e._context.displayName||"Context")+".Provider";case Vl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return n=e.displayName||null,n!==null?n:Ho(e.type)||"Memo";case zn:n=e._payload,e=e._init;try{return Ho(e(n))}catch{}}return null}function kg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ho(n);case 8:return n===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cg(e){var n=_d(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bi(e){e._valueTracker||(e._valueTracker=Cg(e))}function zd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=_d(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,n){var t=n.checked;return ue({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function uc(e,n){var t=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;t=nt(n.value!=null?n.value:t),e._wrapperState={initialChecked:a,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jd(e,n){n=n.checked,n!=null&&Xl(e,"checked",n,!1)}function zo(e,n){Jd(e,n);var t=nt(n.value),a=n.type;if(t!=null)a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Jo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Jo(e,n.type,nt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function dc(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Jo(e,n,t){(n!=="number"||$i(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ca=Array.isArray;function Ut(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Bo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(P(92));if(Ca(t)){if(1<t.length)throw Error(P(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:nt(t)}}function Bd(e,n){var t=nt(n.value),a=nt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),a!=null&&(e.defaultValue=""+a)}function pc(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ud(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,a,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,a,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ba(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pg=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(e){Pg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ea[n]=Ea[e]})});function Od(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ea.hasOwnProperty(e)&&Ea[e]?(""+n).trim():n+"px"}function Gd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var a=t.indexOf("--")===0,i=Od(t,n[t],a);t==="float"&&(t="cssFloat"),a?e.setProperty(t,i):e[t]=i}}var Lg=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(Lg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(P(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(P(61))}if(n.style!=null&&typeof n.style!="object")throw Error(P(62))}}function Oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Ft=null,Ot=null;function hc(e){if(e=ci(e)){if(typeof Xo!="function")throw Error(P(280));var n=e.stateNode;n&&(n=Wr(n),Xo(e.stateNode,e.type,n))}}function Xd(e){Ft?Ot?Ot.push(e):Ot=[e]:Ft=e}function Yd(){if(Ft){var e=Ft,n=Ot;if(Ot=Ft=null,hc(e),n)for(e=0;e<n.length;e++)hc(n[e])}}function Vd(e,n){return e(n)}function Qd(){}var Kr=!1;function Kd(e,n,t){if(Kr)return e(n,t);Kr=!0;try{return Vd(e,n,t)}finally{Kr=!1,(Ft!==null||Ot!==null)&&(Qd(),Yd())}}function Ua(e,n){var t=e.stateNode;if(t===null)return null;var a=Wr(t);if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(P(231,n,typeof t));return t}var Yo=!1;if(Rn)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Yo=!1}function Ng(e,n,t,a,i,r,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(u){this.onError(u)}}var Ia=!1,qi=null,er=!1,Vo=null,Eg={onError:function(e){Ia=!0,qi=e}};function Ig(e,n,t,a,i,r,o,l,s){Ia=!1,qi=null,Ng.apply(Eg,arguments)}function Wg(e,n,t,a,i,r,o,l,s){if(Ig.apply(this,arguments),Ia){if(Ia){var c=qi;Ia=!1,qi=null}else throw Error(P(198));er||(er=!0,Vo=c)}}function wt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function $d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function gc(e){if(wt(e)!==e)throw Error(P(188))}function Rg(e){var n=e.alternate;if(!n){if(n=wt(e),n===null)throw Error(P(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===t)return gc(i),e;if(r===a)return gc(i),n;r=r.sibling}throw Error(P(188))}if(t.return!==a.return)t=i,a=r;else{for(var o=!1,l=i.child;l;){if(l===t){o=!0,t=i,a=r;break}if(l===a){o=!0,a=i,t=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===t){o=!0,t=r,a=i;break}if(l===a){o=!0,a=r,t=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(t.alternate!==a)throw Error(P(190))}if(t.tag!==3)throw Error(P(188));return t.stateNode.current===t?e:n}function qd(e){return e=Rg(e),e!==null?ef(e):null}function ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ef(e);if(n!==null)return n;e=e.sibling}return null}var nf=Xe.unstable_scheduleCallback,mc=Xe.unstable_cancelCallback,Mg=Xe.unstable_shouldYield,Zg=Xe.unstable_requestPaint,pe=Xe.unstable_now,Tg=Xe.unstable_getCurrentPriorityLevel,$l=Xe.unstable_ImmediatePriority,tf=Xe.unstable_UserBlockingPriority,nr=Xe.unstable_NormalPriority,Dg=Xe.unstable_LowPriority,af=Xe.unstable_IdlePriority,Lr=null,xn=null;function jg(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:zg,Hg=Math.log,_g=Math.LN2;function zg(e){return e>>>=0,e===0?32:31-(Hg(e)/_g|0)|0}var wi=64,xi=4194304;function Pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function tr(e,n){var t=e.pendingLanes;if(t===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~i;l!==0?a=Pa(l):(r&=o,r!==0&&(a=Pa(r)))}else o=t&~i,o!==0?a=Pa(o):r!==0&&(a=Pa(r));if(a===0)return 0;if(n!==0&&n!==a&&!(n&i)&&(i=a&-a,r=n&-n,i>=r||i===16&&(r&4194240)!==0))return n;if(a&4&&(a|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)t=31-dn(n),i=1<<t,a|=e[t],n&=~i;return a}function Jg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bg(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-dn(r),l=1<<o,s=i[o];s===-1?(!(l&t)||l&a)&&(i[o]=Jg(l,n)):s<=n&&(e.expiredLanes|=l),r&=~l}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rf(){var e=wi;return wi<<=1,!(wi&4194240)&&(wi=64),e}function $r(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function li(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-dn(n),e[n]=t}function Ug(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-dn(t),r=1<<i;n[i]=0,a[i]=-1,e[i]=-1,t&=~r}}function ql(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-dn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}var V=0;function of(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lf,es,sf,cf,uf,Ko=!1,Ai=[],Gn=null,Xn=null,Yn=null,Fa=new Map,Oa=new Map,Bn=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Fa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(n.pointerId)}}function ma(e,n,t,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},n!==null&&(n=ci(n),n!==null&&es(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Og(e,n,t,a,i){switch(n){case"focusin":return Gn=ma(Gn,e,n,t,a,i),!0;case"dragenter":return Xn=ma(Xn,e,n,t,a,i),!0;case"mouseover":return Yn=ma(Yn,e,n,t,a,i),!0;case"pointerover":var r=i.pointerId;return Fa.set(r,ma(Fa.get(r)||null,e,n,t,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Oa.set(r,ma(Oa.get(r)||null,e,n,t,a,i)),!0}return!1}function df(e){var n=ct(e.target);if(n!==null){var t=wt(n);if(t!==null){if(n=t.tag,n===13){if(n=$d(t),n!==null){e.blockedOn=n,uf(e.priority,function(){sf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$o(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Go=a,t.target.dispatchEvent(a),Go=null}else return n=ci(t),n!==null&&es(n),e.blockedOn=t,!1;n.shift()}return!0}function bc(e,n,t){_i(e)&&t.delete(n)}function Gg(){Ko=!1,Gn!==null&&_i(Gn)&&(Gn=null),Xn!==null&&_i(Xn)&&(Xn=null),Yn!==null&&_i(Yn)&&(Yn=null),Fa.forEach(bc),Oa.forEach(bc)}function ya(e,n){e.blockedOn===n&&(e.blockedOn=null,Ko||(Ko=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Gg)))}function Ga(e){function n(i){return ya(i,e)}if(0<Ai.length){ya(Ai[0],e);for(var t=1;t<Ai.length;t++){var a=Ai[t];a.blockedOn===e&&(a.blockedOn=null)}}for(Gn!==null&&ya(Gn,e),Xn!==null&&ya(Xn,e),Yn!==null&&ya(Yn,e),Fa.forEach(n),Oa.forEach(n),t=0;t<Bn.length;t++)a=Bn[t],a.blockedOn===e&&(a.blockedOn=null);for(;0<Bn.length&&(t=Bn[0],t.blockedOn===null);)df(t),t.blockedOn===null&&Bn.shift()}var Gt=Dn.ReactCurrentBatchConfig,ar=!0;function Xg(e,n,t,a){var i=V,r=Gt.transition;Gt.transition=null;try{V=1,ns(e,n,t,a)}finally{V=i,Gt.transition=r}}function Yg(e,n,t,a){var i=V,r=Gt.transition;Gt.transition=null;try{V=4,ns(e,n,t,a)}finally{V=i,Gt.transition=r}}function ns(e,n,t,a){if(ar){var i=$o(e,n,t,a);if(i===null)so(e,n,a,ir,t),yc(e,a);else if(Og(i,e,n,t,a))a.stopPropagation();else if(yc(e,a),n&4&&-1<Fg.indexOf(e)){for(;i!==null;){var r=ci(i);if(r!==null&&lf(r),r=$o(e,n,t,a),r===null&&so(e,n,a,ir,t),r===i)break;i=r}i!==null&&a.stopPropagation()}else so(e,n,a,null,t)}}var ir=null;function $o(e,n,t,a){if(ir=null,e=Kl(a),e=ct(e),e!==null)if(n=wt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=$d(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ir=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tg()){case $l:return 1;case tf:return 4;case nr:case Dg:return 16;case af:return 536870912;default:return 16}default:return 16}}var Fn=null,ts=null,zi=null;function pf(){if(zi)return zi;var e,n=ts,t=n.length,a,i="value"in Fn?Fn.value:Fn.textContent,r=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===i[r-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function Ji(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function vc(){return!1}function Ve(e){function n(t,a,i,r,o){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Si:vc,this.isPropagationStopped=vc,this}return ue(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),n}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Ve(oa),si=ue({},oa,{view:0,detail:0}),Vg=Ve(si),qr,eo,ba,Nr=ue({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(qr=e.screenX-ba.screenX,eo=e.screenY-ba.screenY):eo=qr=0,ba=e),qr)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),wc=Ve(Nr),Qg=ue({},Nr,{dataTransfer:0}),Kg=Ve(Qg),$g=ue({},si,{relatedTarget:0}),no=Ve($g),qg=ue({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Ve(qg),nm=ue({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=Ve(nm),am=ue({},oa,{data:0}),xc=Ve(am),im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=om[e])?!!n[e]:!1}function is(){return lm}var sm=ue({},si,{key:function(e){if(e.key){var n=im[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Ve(sm),um=ue({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ac=Ve(um),dm=ue({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),fm=Ve(dm),pm=ue({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=Ve(pm),gm=ue({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Ve(gm),ym=[9,13,27,32],rs=Rn&&"CompositionEvent"in window,Wa=null;Rn&&"documentMode"in document&&(Wa=document.documentMode);var bm=Rn&&"TextEvent"in window&&!Wa,hf=Rn&&(!rs||Wa&&8<Wa&&11>=Wa),Sc=" ",kc=!1;function gf(e,n){switch(e){case"keyup":return ym.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function vm(e,n){switch(e){case"compositionend":return mf(n);case"keypress":return n.which!==32?null:(kc=!0,Sc);case"textInput":return e=n.data,e===Sc&&kc?null:e;default:return null}}function wm(e,n){if(Rt)return e==="compositionend"||!rs&&gf(e,n)?(e=pf(),zi=ts=Fn=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return hf&&n.locale!=="ko"?null:n.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xm[e.type]:n==="textarea"}function yf(e,n,t,a){Xd(a),n=rr(n,"onChange"),0<n.length&&(t=new as("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var Ra=null,Xa=null;function Am(e){Nf(e,0)}function Er(e){var n=Tt(e);if(zd(n))return e}function Sm(e,n){if(e==="change")return n}var bf=!1;if(Rn){var to;if(Rn){var ao="oninput"in document;if(!ao){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),ao=typeof Pc.oninput=="function"}to=ao}else to=!1;bf=to&&(!document.documentMode||9<document.documentMode)}function Lc(){Ra&&(Ra.detachEvent("onpropertychange",vf),Xa=Ra=null)}function vf(e){if(e.propertyName==="value"&&Er(Xa)){var n=[];yf(n,Xa,e,Kl(e)),Kd(Am,n)}}function km(e,n,t){e==="focusin"?(Lc(),Ra=n,Xa=t,Ra.attachEvent("onpropertychange",vf)):e==="focusout"&&Lc()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(Xa)}function Pm(e,n){if(e==="click")return Er(n)}function Lm(e,n){if(e==="input"||e==="change")return Er(n)}function Nm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:Nm;function Ya(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Zo.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,n){var t=Nc(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Nc(t)}}function wf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xf(){for(var e=window,n=$i();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=$i(e.document)}return n}function os(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Em(e){var n=xf(),t=e.focusedElem,a=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&wf(t.ownerDocument.documentElement,t)){if(a!==null&&os(t)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,r=Math.min(a.start,i);a=a.end===void 0?r:Math.min(a.end,i),!e.extend&&r>a&&(i=a,a=r,r=i),i=Ec(t,r);var o=Ec(t,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),r>a?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Im=Rn&&"documentMode"in document&&11>=document.documentMode,Mt=null,qo=null,Ma=null,el=!1;function Ic(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;el||Mt==null||Mt!==$i(a)||(a=Mt,"selectionStart"in a&&os(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ma&&Ya(Ma,a)||(Ma=a,a=rr(qo,"onSelect"),0<a.length&&(n=new as("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Mt)))}function ki(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Zt={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},io={},Af={};Rn&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Zt.animationend.animation,delete Zt.animationiteration.animation,delete Zt.animationstart.animation),"TransitionEvent"in window||delete Zt.transitionend.transition);function Ir(e){if(io[e])return io[e];if(!Zt[e])return e;var n=Zt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Af)return io[e]=n[t];return e}var Sf=Ir("animationend"),kf=Ir("animationiteration"),Cf=Ir("animationstart"),Pf=Ir("transitionend"),Lf=new Map,Wc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function at(e,n){Lf.set(e,n),vt(n,[e])}for(var ro=0;ro<Wc.length;ro++){var oo=Wc[ro],Wm=oo.toLowerCase(),Rm=oo[0].toUpperCase()+oo.slice(1);at(Wm,"on"+Rm)}at(Sf,"onAnimationEnd");at(kf,"onAnimationIteration");at(Cf,"onAnimationStart");at("dblclick","onDoubleClick");at("focusin","onFocus");at("focusout","onBlur");at(Pf,"onTransitionEnd");$t("onMouseEnter",["mouseout","mouseover"]);$t("onMouseLeave",["mouseout","mouseover"]);$t("onPointerEnter",["pointerout","pointerover"]);$t("onPointerLeave",["pointerout","pointerover"]);vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Rc(e,n,t){var a=e.type||"unknown-event";e.currentTarget=t,Wg(a,n,void 0,e),e.currentTarget=null}function Nf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var r=void 0;if(n)for(var o=a.length-1;0<=o;o--){var l=a[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==r&&i.isPropagationStopped())break e;Rc(i,l,c),r=s}else for(o=0;o<a.length;o++){if(l=a[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==r&&i.isPropagationStopped())break e;Rc(i,l,c),r=s}}}if(er)throw e=Vo,er=!1,Vo=null,e}function ie(e,n){var t=n[rl];t===void 0&&(t=n[rl]=new Set);var a=e+"__bubble";t.has(a)||(Ef(n,e,2,!1),t.add(a))}function lo(e,n,t){var a=0;n&&(a|=4),Ef(t,e,a,n)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Va(e){if(!e[Ci]){e[Ci]=!0,Td.forEach(function(t){t!=="selectionchange"&&(Mm.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Ci]||(n[Ci]=!0,lo("selectionchange",!1,n))}}function Ef(e,n,t,a){switch(ff(n)){case 1:var i=Xg;break;case 4:i=Yg;break;default:i=ns}t=i.bind(null,n,t,e),i=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function so(e,n,t,a,i){var r=a;if(!(n&1)&&!(n&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ct(l),o===null)return;if(s=o.tag,s===5||s===6){a=r=o;continue e}l=l.parentNode}}a=a.return}Kd(function(){var c=r,u=Kl(t),d=[];e:{var h=Lf.get(e);if(h!==void 0){var p=as,w=e;switch(e){case"keypress":if(Ji(t)===0)break e;case"keydown":case"keyup":p=cm;break;case"focusin":w="focus",p=no;break;case"focusout":w="blur",p=no;break;case"beforeblur":case"afterblur":p=no;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=wc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fm;break;case Sf:case kf:case Cf:p=em;break;case Pf:p=hm;break;case"scroll":p=Vg;break;case"wheel":p=mm;break;case"copy":case"cut":case"paste":p=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ac}var x=(n&4)!==0,C=!x&&e==="scroll",g=x?h!==null?h+"Capture":null:h;x=[];for(var m=c,b;m!==null;){b=m;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,g!==null&&(S=Ua(m,g),S!=null&&x.push(Qa(m,S,b)))),C)break;m=m.return}0<x.length&&(h=new p(h,w,null,t,u),d.push({event:h,listeners:x}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&t!==Go&&(w=t.relatedTarget||t.fromElement)&&(ct(w)||w[Mn]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(w=t.relatedTarget||t.toElement,p=c,w=w?ct(w):null,w!==null&&(C=wt(w),w!==C||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=c),p!==w)){if(x=wc,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ac,S="onPointerLeave",g="onPointerEnter",m="pointer"),C=p==null?h:Tt(p),b=w==null?h:Tt(w),h=new x(S,m+"leave",p,t,u),h.target=C,h.relatedTarget=b,S=null,ct(u)===c&&(x=new x(g,m+"enter",w,t,u),x.target=b,x.relatedTarget=C,S=x),C=S,p&&w)n:{for(x=p,g=w,m=0,b=x;b;b=Nt(b))m++;for(b=0,S=g;S;S=Nt(S))b++;for(;0<m-b;)x=Nt(x),m--;for(;0<b-m;)g=Nt(g),b--;for(;m--;){if(x===g||g!==null&&x===g.alternate)break n;x=Nt(x),g=Nt(g)}x=null}else x=null;p!==null&&Mc(d,h,p,x,!1),w!==null&&C!==null&&Mc(d,C,w,x,!0)}}e:{if(h=c?Tt(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=Sm;else if(Cc(h))if(bf)L=Lm;else{L=Cm;var A=km}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Pm);if(L&&(L=L(e,c))){yf(d,L,t,u);break e}A&&A(e,h,c),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Jo(h,"number",h.value)}switch(A=c?Tt(c):window,e){case"focusin":(Cc(A)||A.contentEditable==="true")&&(Mt=A,qo=c,Ma=null);break;case"focusout":Ma=qo=Mt=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Ic(d,t,u);break;case"selectionchange":if(Im)break;case"keydown":case"keyup":Ic(d,t,u)}var I;if(rs)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Rt?gf(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(hf&&t.locale!=="ko"&&(Rt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Rt&&(I=pf()):(Fn=u,ts="value"in Fn?Fn.value:Fn.textContent,Rt=!0)),A=rr(c,M),0<A.length&&(M=new xc(M,e,null,t,u),d.push({event:M,listeners:A}),I?M.data=I:(I=mf(t),I!==null&&(M.data=I)))),(I=bm?vm(e,t):wm(e,t))&&(c=rr(c,"onBeforeInput"),0<c.length&&(u=new xc("onBeforeInput","beforeinput",null,t,u),d.push({event:u,listeners:c}),u.data=I))}Nf(d,n)})}function Qa(e,n,t){return{instance:e,listener:n,currentTarget:t}}function rr(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Ua(e,t),r!=null&&a.unshift(Qa(e,r,i)),r=Ua(e,n),r!=null&&a.push(Qa(e,r,i))),e=e.return}return a}function Nt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Mc(e,n,t,a,i){for(var r=n._reactName,o=[];t!==null&&t!==a;){var l=t,s=l.alternate,c=l.stateNode;if(s!==null&&s===a)break;l.tag===5&&c!==null&&(l=c,i?(s=Ua(t,r),s!=null&&o.unshift(Qa(t,s,l))):i||(s=Ua(t,r),s!=null&&o.push(Qa(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Zm=/\r\n?/g,Tm=/\u0000|\uFFFD/g;function Zc(e){return(typeof e=="string"?e:""+e).replace(Zm,`
`).replace(Tm,"")}function Pi(e,n,t){if(n=Zc(n),Zc(e)!==n&&t)throw Error(P(425))}function or(){}var nl=null,tl=null;function al(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Dm=typeof clearTimeout=="function"?clearTimeout:void 0,Tc=typeof Promise=="function"?Promise:void 0,jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tc<"u"?function(e){return Tc.resolve(null).then(e).catch(Hm)}:il;function Hm(e){setTimeout(function(){throw e})}function co(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(a===0){e.removeChild(i),Ga(n);return}a--}else t!=="$"&&t!=="$?"&&t!=="$!"||a++;t=i}while(t);Ga(n)}function Vn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Dc(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var la=Math.random().toString(36).slice(2),vn="__reactFiber$"+la,Ka="__reactProps$"+la,Mn="__reactContainer$"+la,rl="__reactEvents$"+la,_m="__reactListeners$"+la,zm="__reactHandles$"+la;function ct(e){var n=e[vn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[vn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Dc(e);e!==null;){if(t=e[vn])return t;e=Dc(e)}return n}e=t,t=e.parentNode}return null}function ci(e){return e=e[vn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Wr(e){return e[Ka]||null}var ol=[],Dt=-1;function it(e){return{current:e}}function re(e){0>Dt||(e.current=ol[Dt],ol[Dt]=null,Dt--)}function ee(e,n){Dt++,ol[Dt]=e.current,e.current=n}var tt={},Ee=it(tt),He=it(!1),ht=tt;function qt(e,n){var t=e.type.contextTypes;if(!t)return tt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in t)i[r]=n[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function lr(){re(He),re(Ee)}function jc(e,n,t){if(Ee.current!==tt)throw Error(P(168));ee(Ee,n),ee(He,t)}function If(e,n,t){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return t;a=a.getChildContext();for(var i in a)if(!(i in n))throw Error(P(108,kg(e)||"Unknown",i));return ue({},t,a)}function sr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,ht=Ee.current,ee(Ee,e),ee(He,He.current),!0}function Hc(e,n,t){var a=e.stateNode;if(!a)throw Error(P(169));t?(e=If(e,n,ht),a.__reactInternalMemoizedMergedChildContext=e,re(He),re(Ee),ee(Ee,e)):re(He),ee(He,t)}var Nn=null,Rr=!1,uo=!1;function Wf(e){Nn===null?Nn=[e]:Nn.push(e)}function Jm(e){Rr=!0,Wf(e)}function rt(){if(!uo&&Nn!==null){uo=!0;var e=0,n=V;try{var t=Nn;for(V=1;e<t.length;e++){var a=t[e];do a=a(!0);while(a!==null)}Nn=null,Rr=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(e+1)),nf($l,rt),i}finally{V=n,uo=!1}}return null}var jt=[],Ht=0,cr=null,ur=0,Qe=[],Ke=0,gt=null,En=1,In="";function ot(e,n){jt[Ht++]=ur,jt[Ht++]=cr,cr=e,ur=n}function Rf(e,n,t){Qe[Ke++]=En,Qe[Ke++]=In,Qe[Ke++]=gt,gt=e;var a=En;e=In;var i=32-dn(a)-1;a&=~(1<<i),t+=1;var r=32-dn(n)+i;if(30<r){var o=i-i%5;r=(a&(1<<o)-1).toString(32),a>>=o,i-=o,En=1<<32-dn(n)+i|t<<i|a,In=r+e}else En=1<<r|t<<i|a,In=e}function ls(e){e.return!==null&&(ot(e,1),Rf(e,1,0))}function ss(e){for(;e===cr;)cr=jt[--Ht],jt[Ht]=null,ur=jt[--Ht],jt[Ht]=null;for(;e===gt;)gt=Qe[--Ke],Qe[Ke]=null,In=Qe[--Ke],Qe[Ke]=null,En=Qe[--Ke],Qe[Ke]=null}var Ge=null,Oe=null,oe=!1,cn=null;function Mf(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function _c(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ge=e,Oe=Vn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ge=e,Oe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=gt!==null?{id:En,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ge=e,Oe=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(oe){var n=Oe;if(n){var t=n;if(!_c(e,n)){if(ll(e))throw Error(P(418));n=Vn(t.nextSibling);var a=Ge;n&&_c(e,n)?Mf(a,t):(e.flags=e.flags&-4097|2,oe=!1,Ge=e)}}else{if(ll(e))throw Error(P(418));e.flags=e.flags&-4097|2,oe=!1,Ge=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Li(e){if(e!==Ge)return!1;if(!oe)return zc(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!al(e.type,e.memoizedProps)),n&&(n=Oe)){if(ll(e))throw Zf(),Error(P(418));for(;n;)Mf(e,n),n=Vn(n.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Oe=Vn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Oe=null}}else Oe=Ge?Vn(e.stateNode.nextSibling):null;return!0}function Zf(){for(var e=Oe;e;)e=Vn(e.nextSibling)}function ea(){Oe=Ge=null,oe=!1}function cs(e){cn===null?cn=[e]:cn.push(e)}var Bm=Dn.ReactCurrentBatchConfig;function va(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(P(309));var a=t.stateNode}if(!a)throw Error(P(147,e));var i=a,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(o){var l=i.refs;o===null?delete l[r]:l[r]=o},n._stringRef=r,n)}if(typeof e!="string")throw Error(P(284));if(!t._owner)throw Error(P(290,e))}return e}function Ni(e,n){throw e=Object.prototype.toString.call(n),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Jc(e){var n=e._init;return n(e._payload)}function Tf(e){function n(g,m){if(e){var b=g.deletions;b===null?(g.deletions=[m],g.flags|=16):b.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function a(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=qn(g,m),g.index=0,g.sibling=null,g}function r(g,m,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<m?(g.flags|=2,m):b):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,b,S){return m===null||m.tag!==6?(m=bo(b,g.mode,S),m.return=g,m):(m=i(m,b),m.return=g,m)}function s(g,m,b,S){var L=b.type;return L===Wt?u(g,m,b.props.children,S,b.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===zn&&Jc(L)===m.type)?(S=i(m,b.props),S.ref=va(g,m,b),S.return=g,S):(S=Yi(b.type,b.key,b.props,null,g.mode,S),S.ref=va(g,m,b),S.return=g,S)}function c(g,m,b,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=vo(b,g.mode,S),m.return=g,m):(m=i(m,b.children||[]),m.return=g,m)}function u(g,m,b,S,L){return m===null||m.tag!==7?(m=pt(b,g.mode,S,L),m.return=g,m):(m=i(m,b),m.return=g,m)}function d(g,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=bo(""+m,g.mode,b),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yi:return b=Yi(m.type,m.key,m.props,null,g.mode,b),b.ref=va(g,null,m),b.return=g,b;case It:return m=vo(m,g.mode,b),m.return=g,m;case zn:var S=m._init;return d(g,S(m._payload),b)}if(Ca(m)||ha(m))return m=pt(m,g.mode,b,null),m.return=g,m;Ni(g,m)}return null}function h(g,m,b,S){var L=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return L!==null?null:l(g,m,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case yi:return b.key===L?s(g,m,b,S):null;case It:return b.key===L?c(g,m,b,S):null;case zn:return L=b._init,h(g,m,L(b._payload),S)}if(Ca(b)||ha(b))return L!==null?null:u(g,m,b,S,null);Ni(g,b)}return null}function p(g,m,b,S,L){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(b)||null,l(m,g,""+S,L);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case yi:return g=g.get(S.key===null?b:S.key)||null,s(m,g,S,L);case It:return g=g.get(S.key===null?b:S.key)||null,c(m,g,S,L);case zn:var A=S._init;return p(g,m,b,A(S._payload),L)}if(Ca(S)||ha(S))return g=g.get(b)||null,u(m,g,S,L,null);Ni(m,S)}return null}function w(g,m,b,S){for(var L=null,A=null,I=m,M=m=0,_=null;I!==null&&M<b.length;M++){I.index>M?(_=I,I=null):_=I.sibling;var T=h(g,I,b[M],S);if(T===null){I===null&&(I=_);break}e&&I&&T.alternate===null&&n(g,I),m=r(T,m,M),A===null?L=T:A.sibling=T,A=T,I=_}if(M===b.length)return t(g,I),oe&&ot(g,M),L;if(I===null){for(;M<b.length;M++)I=d(g,b[M],S),I!==null&&(m=r(I,m,M),A===null?L=I:A.sibling=I,A=I);return oe&&ot(g,M),L}for(I=a(g,I);M<b.length;M++)_=p(I,g,M,b[M],S),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?M:_.key),m=r(_,m,M),A===null?L=_:A.sibling=_,A=_);return e&&I.forEach(function(D){return n(g,D)}),oe&&ot(g,M),L}function x(g,m,b,S){var L=ha(b);if(typeof L!="function")throw Error(P(150));if(b=L.call(b),b==null)throw Error(P(151));for(var A=L=null,I=m,M=m=0,_=null,T=b.next();I!==null&&!T.done;M++,T=b.next()){I.index>M?(_=I,I=null):_=I.sibling;var D=h(g,I,T.value,S);if(D===null){I===null&&(I=_);break}e&&I&&D.alternate===null&&n(g,I),m=r(D,m,M),A===null?L=D:A.sibling=D,A=D,I=_}if(T.done)return t(g,I),oe&&ot(g,M),L;if(I===null){for(;!T.done;M++,T=b.next())T=d(g,T.value,S),T!==null&&(m=r(T,m,M),A===null?L=T:A.sibling=T,A=T);return oe&&ot(g,M),L}for(I=a(g,I);!T.done;M++,T=b.next())T=p(I,g,M,T.value,S),T!==null&&(e&&T.alternate!==null&&I.delete(T.key===null?M:T.key),m=r(T,m,M),A===null?L=T:A.sibling=T,A=T);return e&&I.forEach(function(j){return n(g,j)}),oe&&ot(g,M),L}function C(g,m,b,S){if(typeof b=="object"&&b!==null&&b.type===Wt&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case yi:e:{for(var L=b.key,A=m;A!==null;){if(A.key===L){if(L=b.type,L===Wt){if(A.tag===7){t(g,A.sibling),m=i(A,b.props.children),m.return=g,g=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===zn&&Jc(L)===A.type){t(g,A.sibling),m=i(A,b.props),m.ref=va(g,A,b),m.return=g,g=m;break e}t(g,A);break}else n(g,A);A=A.sibling}b.type===Wt?(m=pt(b.props.children,g.mode,S,b.key),m.return=g,g=m):(S=Yi(b.type,b.key,b.props,null,g.mode,S),S.ref=va(g,m,b),S.return=g,g=S)}return o(g);case It:e:{for(A=b.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){t(g,m.sibling),m=i(m,b.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=vo(b,g.mode,S),m.return=g,g=m}return o(g);case zn:return A=b._init,C(g,m,A(b._payload),S)}if(Ca(b))return w(g,m,b,S);if(ha(b))return x(g,m,b,S);Ni(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(t(g,m.sibling),m=i(m,b),m.return=g,g=m):(t(g,m),m=bo(b,g.mode,S),m.return=g,g=m),o(g)):t(g,m)}return C}var na=Tf(!0),Df=Tf(!1),dr=it(null),fr=null,_t=null,us=null;function ds(){us=_t=fr=null}function fs(e){var n=dr.current;re(dr),e._currentValue=n}function cl(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Xt(e,n){fr=e,us=_t=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(je=!0),e.firstContext=null)}function tn(e){var n=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:n,next:null},_t===null){if(fr===null)throw Error(P(308));_t=e,fr.dependencies={lanes:0,firstContext:e}}else _t=_t.next=e;return n}var ut=null;function ps(e){ut===null?ut=[e]:ut.push(e)}function jf(e,n,t,a){var i=n.interleaved;return i===null?(t.next=t,ps(n)):(t.next=i.next,i.next=t),n.interleaved=t,Zn(e,a)}function Zn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Jn=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Qn(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,X&2){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,Zn(e,t)}return i=a.interleaved,i===null?(n.next=n,ps(a)):(n.next=i.next,i.next=n),a.interleaved=n,Zn(e,t)}function Bi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,ql(e,t)}}function Bc(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?i=r=o:r=r.next=o,t=t.next}while(t!==null);r===null?i=r=n:r=r.next=n}else i=r=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function pr(e,n,t,a){var i=e.updateQueue;Jn=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?r=c:o.next=c,o=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(r!==null){var d=i.baseState;o=0,u=c=s=null,l=r;do{var h=l.lane,p=l.eventTime;if((a&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,x=l;switch(h=n,p=t,x.tag){case 1:if(w=x.payload,typeof w=="function"){d=w.call(p,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(p,d,h):w,h==null)break e;d=ue({},d,h);break e;case 2:Jn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=p,s=d):u=u.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else r===null&&(i.shared.lanes=0);yt|=o,e.lanes=o,e.memoizedState=d}}function Uc(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],i=a.callback;if(i!==null){if(a.callback=null,a=t,typeof i!="function")throw Error(P(191,i));i.call(a)}}}var ui={},An=it(ui),$a=it(ui),qa=it(ui);function dt(e){if(e===ui)throw Error(P(174));return e}function gs(e,n){switch(ee(qa,n),ee($a,e),ee(An,ui),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Uo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Uo(n,e)}re(An),ee(An,n)}function ta(){re(An),re($a),re(qa)}function _f(e){dt(qa.current);var n=dt(An.current),t=Uo(n,e.type);n!==t&&(ee($a,e),ee(An,t))}function ms(e){$a.current===e&&(re(An),re($a))}var se=it(0);function hr(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fo=[];function ys(){for(var e=0;e<fo.length;e++)fo[e]._workInProgressVersionPrimary=null;fo.length=0}var Ui=Dn.ReactCurrentDispatcher,po=Dn.ReactCurrentBatchConfig,mt=0,ce=null,be=null,xe=null,gr=!1,Za=!1,ei=0,Um=0;function Pe(){throw Error(P(321))}function bs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function vs(e,n,t,a,i,r){if(mt=r,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ui.current=e===null||e.memoizedState===null?Xm:Ym,e=t(a,i),Za){r=0;do{if(Za=!1,ei=0,25<=r)throw Error(P(301));r+=1,xe=be=null,n.updateQueue=null,Ui.current=Vm,e=t(a,i)}while(Za)}if(Ui.current=mr,n=be!==null&&be.next!==null,mt=0,xe=be=ce=null,gr=!1,n)throw Error(P(300));return e}function ws(){var e=ei!==0;return ei=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ce.memoizedState=xe=e:xe=xe.next=e,xe}function an(){if(be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var n=xe===null?ce.memoizedState:xe.next;if(n!==null)xe=n,be=e;else{if(e===null)throw Error(P(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},xe===null?ce.memoizedState=xe=e:xe=xe.next=e}return xe}function ni(e,n){return typeof n=="function"?n(e):n}function ho(e){var n=an(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var a=be,i=a.baseQueue,r=t.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}a.baseQueue=i=r,t.pending=null}if(i!==null){r=i.next,a=a.baseState;var l=o=null,s=null,c=r;do{var u=c.lane;if((mt&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,o=a):s=s.next=d,ce.lanes|=u,yt|=u}c=c.next}while(c!==null&&c!==r);s===null?o=a:s.next=l,pn(a,n.memoizedState)||(je=!0),n.memoizedState=a,n.baseState=o,n.baseQueue=s,t.lastRenderedState=a}if(e=t.interleaved,e!==null){i=e;do r=i.lane,ce.lanes|=r,yt|=r,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function go(e){var n=an(),t=n.queue;if(t===null)throw Error(P(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,r=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);pn(r,n.memoizedState)||(je=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,a]}function zf(){}function Jf(e,n){var t=ce,a=an(),i=n(),r=!pn(a.memoizedState,i);if(r&&(a.memoizedState=i,je=!0),a=a.queue,xs(Ff.bind(null,t,a,e),[e]),a.getSnapshot!==n||r||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,ti(9,Uf.bind(null,t,a,i,n),void 0,null),Ae===null)throw Error(P(349));mt&30||Bf(t,n,i)}return i}function Bf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Uf(e,n,t,a){n.value=t,n.getSnapshot=a,Of(n)&&Gf(e)}function Ff(e,n,t){return t(function(){Of(n)&&Gf(e)})}function Of(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function Gf(e){var n=Zn(e,1);n!==null&&fn(n,e,1,-1)}function Fc(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ni,lastRenderedState:e},n.queue=e,e=e.dispatch=Gm.bind(null,ce,e),[n.memoizedState,e]}function ti(e,n,t,a){return e={tag:e,create:n,destroy:t,deps:a,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e)),e}function Xf(){return an().memoizedState}function Fi(e,n,t,a){var i=yn();ce.flags|=e,i.memoizedState=ti(1|n,t,void 0,a===void 0?null:a)}function Mr(e,n,t,a){var i=an();a=a===void 0?null:a;var r=void 0;if(be!==null){var o=be.memoizedState;if(r=o.destroy,a!==null&&bs(a,o.deps)){i.memoizedState=ti(n,t,r,a);return}}ce.flags|=e,i.memoizedState=ti(1|n,t,r,a)}function Oc(e,n){return Fi(8390656,8,e,n)}function xs(e,n){return Mr(2048,8,e,n)}function Yf(e,n){return Mr(4,2,e,n)}function Vf(e,n){return Mr(4,4,e,n)}function Qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kf(e,n,t){return t=t!=null?t.concat([e]):null,Mr(4,4,Qf.bind(null,n,e),t)}function As(){}function $f(e,n){var t=an();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&bs(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function qf(e,n){var t=an();n=n===void 0?null:n;var a=t.memoizedState;return a!==null&&n!==null&&bs(n,a[1])?a[0]:(e=e(),t.memoizedState=[e,n],e)}function ep(e,n,t){return mt&21?(pn(t,n)||(t=rf(),ce.lanes|=t,yt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=t)}function Fm(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var a=po.transition;po.transition={};try{e(!1),n()}finally{V=t,po.transition=a}}function np(){return an().memoizedState}function Om(e,n,t){var a=$n(e);if(t={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null},tp(e))ap(n,t);else if(t=jf(e,n,t,a),t!==null){var i=Re();fn(t,e,a,i),ip(t,n,a)}}function Gm(e,n,t){var a=$n(e),i={lane:a,action:t,hasEagerState:!1,eagerState:null,next:null};if(tp(e))ap(n,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var o=n.lastRenderedState,l=r(o,t);if(i.hasEagerState=!0,i.eagerState=l,pn(l,o)){var s=n.interleaved;s===null?(i.next=i,ps(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=jf(e,n,i,a),t!==null&&(i=Re(),fn(t,e,a,i),ip(t,n,a))}}function tp(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function ap(e,n){Za=gr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ip(e,n,t){if(t&4194240){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,ql(e,t)}}var mr={readContext:tn,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Xm={readContext:tn,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Oc,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4194308,4,Qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fi(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var a=yn();return n=t!==void 0?t(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Om.bind(null,ce,e),[a.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:Fc,useDebugValue:As,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Fc(!1),n=e[0];return e=Fm.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var a=ce,i=yn();if(oe){if(t===void 0)throw Error(P(407));t=t()}else{if(t=n(),Ae===null)throw Error(P(349));mt&30||Bf(a,n,t)}i.memoizedState=t;var r={value:t,getSnapshot:n};return i.queue=r,Oc(Ff.bind(null,a,r,e),[e]),a.flags|=2048,ti(9,Uf.bind(null,a,r,t,n),void 0,null),t},useId:function(){var e=yn(),n=Ae.identifierPrefix;if(oe){var t=In,a=En;t=(a&~(1<<32-dn(a)-1)).toString(32)+t,n=":"+n+"R"+t,t=ei++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Um++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ym={readContext:tn,useCallback:$f,useContext:tn,useEffect:xs,useImperativeHandle:Kf,useInsertionEffect:Yf,useLayoutEffect:Vf,useMemo:qf,useReducer:ho,useRef:Xf,useState:function(){return ho(ni)},useDebugValue:As,useDeferredValue:function(e){var n=an();return ep(n,be.memoizedState,e)},useTransition:function(){var e=ho(ni)[0],n=an().memoizedState;return[e,n]},useMutableSource:zf,useSyncExternalStore:Jf,useId:np,unstable_isNewReconciler:!1},Vm={readContext:tn,useCallback:$f,useContext:tn,useEffect:xs,useImperativeHandle:Kf,useInsertionEffect:Yf,useLayoutEffect:Vf,useMemo:qf,useReducer:go,useRef:Xf,useState:function(){return go(ni)},useDebugValue:As,useDeferredValue:function(e){var n=an();return be===null?n.memoizedState=e:ep(n,be.memoizedState,e)},useTransition:function(){var e=go(ni)[0],n=an().memoizedState;return[e,n]},useMutableSource:zf,useSyncExternalStore:Jf,useId:np,unstable_isNewReconciler:!1};function ln(e,n){if(e&&e.defaultProps){n=ue({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ul(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:ue({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Zr={isMounted:function(e){return(e=e._reactInternals)?wt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Re(),i=$n(e),r=Wn(a,i);r.payload=n,t!=null&&(r.callback=t),n=Qn(e,r,i),n!==null&&(fn(n,e,i,a),Bi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Re(),i=$n(e),r=Wn(a,i);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=Qn(e,r,i),n!==null&&(fn(n,e,i,a),Bi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Re(),a=$n(e),i=Wn(t,a);i.tag=2,n!=null&&(i.callback=n),n=Qn(e,i,a),n!==null&&(fn(n,e,a,t),Bi(n,e,a))}};function Gc(e,n,t,a,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):n.prototype&&n.prototype.isPureReactComponent?!Ya(t,a)||!Ya(i,r):!0}function rp(e,n,t){var a=!1,i=tt,r=n.contextType;return typeof r=="object"&&r!==null?r=tn(r):(i=_e(n)?ht:Ee.current,a=n.contextTypes,r=(a=a!=null)?qt(e,i):tt),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Zr,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),n}function Xc(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Zr.enqueueReplaceState(n,n.state,null)}function dl(e,n,t,a){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},hs(e);var r=n.contextType;typeof r=="object"&&r!==null?i.context=tn(r):(r=_e(n)?ht:Ee.current,i.context=qt(e,r)),i.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(ul(e,n,r,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Zr.enqueueReplaceState(i,i.state,null),pr(e,t,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function aa(e,n){try{var t="",a=n;do t+=Sg(a),a=a.return;while(a);var i=t}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:i,digest:null}}function mo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function fl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qm=typeof WeakMap=="function"?WeakMap:Map;function op(e,n,t){t=Wn(-1,t),t.tag=3,t.payload={element:null};var a=n.value;return t.callback=function(){br||(br=!0,xl=a),fl(e,n)},t}function lp(e,n,t){t=Wn(-1,t),t.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=n.value;t.payload=function(){return a(i)},t.callback=function(){fl(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){fl(e,n),typeof a!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Yc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Qm;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(i.add(t),e=uy.bind(null,e,n,t),n.then(e,e))}function Vc(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qc(e,n,t,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Wn(-1,1),n.tag=2,Qn(t,n,1))),t.lanes|=1),e)}var Km=Dn.ReactCurrentOwner,je=!1;function We(e,n,t,a){n.child=e===null?Df(n,null,t,a):na(n,e.child,t,a)}function Kc(e,n,t,a,i){t=t.render;var r=n.ref;return Xt(n,i),a=vs(e,n,t,a,r,i),t=ws(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tn(e,n,i)):(oe&&t&&ls(n),n.flags|=1,We(e,n,a,i),n.child)}function $c(e,n,t,a,i){if(e===null){var r=t.type;return typeof r=="function"&&!Is(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,sp(e,n,r,a,i)):(e=Yi(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&i)){var o=r.memoizedProps;if(t=t.compare,t=t!==null?t:Ya,t(o,a)&&e.ref===n.ref)return Tn(e,n,i)}return n.flags|=1,e=qn(r,a),e.ref=n.ref,e.return=n,n.child=e}function sp(e,n,t,a,i){if(e!==null){var r=e.memoizedProps;if(Ya(r,a)&&e.ref===n.ref)if(je=!1,n.pendingProps=a=r,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return n.lanes=e.lanes,Tn(e,n,i)}return pl(e,n,t,a,i)}function cp(e,n,t){var a=n.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Jt,Fe),Fe|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ee(Jt,Fe),Fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:t,ee(Jt,Fe),Fe|=a}else r!==null?(a=r.baseLanes|t,n.memoizedState=null):a=t,ee(Jt,Fe),Fe|=a;return We(e,n,i,t),n.child}function up(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function pl(e,n,t,a,i){var r=_e(t)?ht:Ee.current;return r=qt(n,r),Xt(n,i),t=vs(e,n,t,a,r,i),a=ws(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Tn(e,n,i)):(oe&&a&&ls(n),n.flags|=1,We(e,n,t,i),n.child)}function qc(e,n,t,a,i){if(_e(t)){var r=!0;sr(n)}else r=!1;if(Xt(n,i),n.stateNode===null)Oi(e,n),rp(n,t,a),dl(n,t,a,i),a=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=tn(c):(c=_e(t)?ht:Ee.current,c=qt(n,c));var u=t.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||s!==c)&&Xc(n,o,a,c),Jn=!1;var h=n.memoizedState;o.state=h,pr(n,a,o,i),s=n.memoizedState,l!==a||h!==s||He.current||Jn?(typeof u=="function"&&(ul(n,t,u,a),s=n.memoizedState),(l=Jn||Gc(n,t,l,a,h,s,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=s),o.props=a,o.state=s,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{o=n.stateNode,Hf(e,n),l=n.memoizedProps,c=n.type===n.elementType?l:ln(n.type,l),o.props=c,d=n.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=tn(s):(s=_e(t)?ht:Ee.current,s=qt(n,s));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Xc(n,o,a,s),Jn=!1,h=n.memoizedState,o.state=h,pr(n,a,o,i);var w=n.memoizedState;l!==d||h!==w||He.current||Jn?(typeof p=="function"&&(ul(n,t,p,a),w=n.memoizedState),(c=Jn||Gc(n,t,c,a,h,w,s)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,w,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,w,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=w),o.props=a,o.state=w,o.context=s,a=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),a=!1)}return hl(e,n,t,a,r,i)}function hl(e,n,t,a,i,r){up(e,n);var o=(n.flags&128)!==0;if(!a&&!o)return i&&Hc(n,t,!1),Tn(e,n,r);a=n.stateNode,Km.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&o?(n.child=na(n,e.child,null,r),n.child=na(n,null,l,r)):We(e,n,l,r),n.memoizedState=a.state,i&&Hc(n,t,!0),n.child}function dp(e){var n=e.stateNode;n.pendingContext?jc(e,n.pendingContext,n.pendingContext!==n.context):n.context&&jc(e,n.context,!1),gs(e,n.containerInfo)}function eu(e,n,t,a,i){return ea(),cs(i),n.flags|=256,We(e,n,t,a),n.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,n,t){var a=n.pendingProps,i=se.current,r=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(se,i&1),e===null)return sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=a.children,e=a.fallback,r?(a=n.mode,r=n.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=jr(o,a,0,null),e=pt(e,a,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=ml(t),n.memoizedState=gl,e):Ss(n,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return $m(e,n,o,a,l,i,t);if(r){r=a.fallback,o=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&n.child!==i?(a=n.child,a.childLanes=0,a.pendingProps=s,n.deletions=null):(a=qn(i,s),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?r=qn(l,r):(r=pt(r,o,t,null),r.flags|=2),r.return=n,a.return=n,a.sibling=r,n.child=a,a=r,r=n.child,o=e.child.memoizedState,o=o===null?ml(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~t,n.memoizedState=gl,a}return r=e.child,e=r.sibling,a=qn(r,{mode:"visible",children:a.children}),!(n.mode&1)&&(a.lanes=t),a.return=n,a.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=a,n.memoizedState=null,a}function Ss(e,n){return n=jr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ei(e,n,t,a){return a!==null&&cs(a),na(n,e.child,null,t),e=Ss(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function $m(e,n,t,a,i,r,o){if(t)return n.flags&256?(n.flags&=-257,a=mo(Error(P(422))),Ei(e,n,o,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=a.fallback,i=n.mode,a=jr({mode:"visible",children:a.children},i,0,null),r=pt(r,i,o,null),r.flags|=2,a.return=n,r.return=n,a.sibling=r,n.child=a,n.mode&1&&na(n,e.child,null,o),n.child.memoizedState=ml(o),n.memoizedState=gl,r);if(!(n.mode&1))return Ei(e,n,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,r=Error(P(419)),a=mo(r,a,void 0),Ei(e,n,o,a)}if(l=(o&e.childLanes)!==0,je||l){if(a=Ae,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,Zn(e,i),fn(a,e,i,-1))}return Es(),a=mo(Error(P(421))),Ei(e,n,o,a)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=dy.bind(null,e),i._reactRetry=n,null):(e=r.treeContext,Oe=Vn(i.nextSibling),Ge=n,oe=!0,cn=null,e!==null&&(Qe[Ke++]=En,Qe[Ke++]=In,Qe[Ke++]=gt,En=e.id,In=e.overflow,gt=n),n=Ss(n,a.children),n.flags|=4096,n)}function nu(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),cl(e.return,n,t)}function yo(e,n,t,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=t,r.tailMode=i)}function pp(e,n,t){var a=n.pendingProps,i=a.revealOrder,r=a.tail;if(We(e,n,a.children,t),a=se.current,a&2)a=a&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nu(e,t,n);else if(e.tag===19)nu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ee(se,a),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&hr(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),yo(n,!1,i,t,r);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&hr(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}yo(n,!0,t,null,r);break;case"together":yo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Tn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),yt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(P(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function qm(e,n,t){switch(n.tag){case 3:dp(n),ea();break;case 5:_f(n);break;case 1:_e(n.type)&&sr(n);break;case 4:gs(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,i=n.memoizedProps.value;ee(dr,a._currentValue),a._currentValue=i;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(ee(se,se.current&1),n.flags|=128,null):t&n.child.childLanes?fp(e,n,t):(ee(se,se.current&1),e=Tn(e,n,t),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(a=(t&n.childLanes)!==0,e.flags&128){if(a)return pp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),a)break;return null;case 22:case 23:return n.lanes=0,cp(e,n,t)}return Tn(e,n,t)}var hp,yl,gp,mp;hp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yl=function(){};gp=function(e,n,t,a){var i=e.memoizedProps;if(i!==a){e=n.stateNode,dt(An.current);var r=null;switch(t){case"input":i=_o(e,i),a=_o(e,a),r=[];break;case"select":i=ue({},i,{value:void 0}),a=ue({},a,{value:void 0}),r=[];break;case"textarea":i=Bo(e,i),a=Bo(e,a),r=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=or)}Fo(t,a);var o;t=null;for(c in i)if(!a.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in a){var s=a[c];if(l=i!=null?i[c]:void 0,a.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(r||(r=[]),r.push(c,t)),t=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(r=r||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ie("scroll",e),r||l===s||(r=[])):(r=r||[]).push(c,s))}t&&(r=r||[]).push("style",t);var c=r;(n.updateQueue=c)&&(n.flags|=4)}};mp=function(e,n,t,a){t!==a&&(n.flags|=4)};function wa(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function ey(e,n,t){var a=n.pendingProps;switch(ss(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return _e(n.type)&&lr(),Le(n),null;case 3:return a=n.stateNode,ta(),re(He),re(Ee),ys(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Li(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(kl(cn),cn=null))),yl(e,n),Le(n),null;case 5:ms(n);var i=dt(qa.current);if(t=n.type,e!==null&&n.stateNode!=null)gp(e,n,t,a,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(P(166));return Le(n),null}if(e=dt(An.current),Li(n)){a=n.stateNode,t=n.type;var r=n.memoizedProps;switch(a[vn]=n,a[Ka]=r,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(i=0;i<La.length;i++)ie(La[i],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":uc(a,r),ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ie("invalid",a);break;case"textarea":fc(a,r),ie("invalid",a)}Fo(t,r),i=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?a.textContent!==l&&(r.suppressHydrationWarning!==!0&&Pi(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&Pi(a.textContent,l,e),i=["children",""+l]):Ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",a)}switch(t){case"input":bi(a),dc(a,r,!0);break;case"textarea":bi(a),pc(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=or)}a=i,n.updateQueue=a,a!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ud(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(t,{is:a.is}):(e=o.createElement(t),t==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,t),e[vn]=n,e[Ka]=a,hp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Oo(t,a),t){case"dialog":ie("cancel",e),ie("close",e),i=a;break;case"iframe":case"object":case"embed":ie("load",e),i=a;break;case"video":case"audio":for(i=0;i<La.length;i++)ie(La[i],e);i=a;break;case"source":ie("error",e),i=a;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=a;break;case"details":ie("toggle",e),i=a;break;case"input":uc(e,a),i=_o(e,a),ie("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ue({},a,{value:void 0}),ie("invalid",e);break;case"textarea":fc(e,a),i=Bo(e,a),ie("invalid",e);break;default:i=a}Fo(t,i),l=i;for(r in l)if(l.hasOwnProperty(r)){var s=l[r];r==="style"?Gd(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fd(e,s)):r==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ba(e,s):typeof s=="number"&&Ba(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ja.hasOwnProperty(r)?s!=null&&r==="onScroll"&&ie("scroll",e):s!=null&&Xl(e,r,s,o))}switch(t){case"input":bi(e),dc(e,a,!1);break;case"textarea":bi(e),pc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+nt(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?Ut(e,!!a.multiple,r,!1):a.defaultValue!=null&&Ut(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=or)}switch(t){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)mp(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(P(166));if(t=dt(qa.current),dt(An.current),Li(n)){if(a=n.stateNode,t=n.memoizedProps,a[vn]=n,(r=a.nodeValue!==t)&&(e=Ge,e!==null))switch(e.tag){case 3:Pi(a.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(a.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else a=(t.nodeType===9?t:t.ownerDocument).createTextNode(a),a[vn]=n,n.stateNode=a}return Le(n),null;case 13:if(re(se),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Oe!==null&&n.mode&1&&!(n.flags&128))Zf(),ea(),n.flags|=98560,r=!1;else if(r=Li(n),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(P(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(P(317));r[vn]=n}else ea(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),r=!1}else cn!==null&&(kl(cn),cn=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,n.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):Es())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return ta(),yl(e,n),e===null&&Va(n.stateNode.containerInfo),Le(n),null;case 10:return fs(n.type._context),Le(n),null;case 17:return _e(n.type)&&lr(),Le(n),null;case 19:if(re(se),r=n.memoizedState,r===null)return Le(n),null;if(a=(n.flags&128)!==0,o=r.rendering,o===null)if(a)wa(r,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=hr(e),o!==null){for(n.flags|=128,wa(r,!1),a=o.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=t,t=n.child;t!==null;)r=t,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ee(se,se.current&1|2),n.child}e=e.sibling}r.tail!==null&&pe()>ia&&(n.flags|=128,a=!0,wa(r,!1),n.lanes=4194304)}else{if(!a)if(e=hr(o),e!==null){if(n.flags|=128,a=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),wa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!oe)return Le(n),null}else 2*pe()-r.renderingStartTime>ia&&t!==1073741824&&(n.flags|=128,a=!0,wa(r,!1),n.lanes=4194304);r.isBackwards?(o.sibling=n.child,n.child=o):(t=r.last,t!==null?t.sibling=o:n.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=pe(),n.sibling=null,t=se.current,ee(se,a?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Ns(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&n.mode&1?Fe&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(P(156,n.tag))}function ny(e,n){switch(ss(n),n.tag){case 1:return _e(n.type)&&lr(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(),re(He),re(Ee),ys(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ms(n),null;case 13:if(re(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(P(340));ea()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return re(se),null;case 4:return ta(),null;case 10:return fs(n.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Ii=!1,Ne=!1,ty=typeof WeakSet=="function"?WeakSet:Set,Z=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(a){de(e,n,a)}else t.current=null}function yp(e,n,t){try{t()}catch(a){de(e,n,a)}}var tu=!1;function ay(e,n){if(nl=ar,e=xf(),os(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,c=0,u=0,d=e,h=null;n:for(;;){for(var p;d!==t||i!==0&&d.nodeType!==3||(l=o+i),d!==r||a!==0&&d.nodeType!==3||(s=o+a),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break n;if(h===t&&++c===i&&(l=o),h===r&&++u===a&&(s=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(tl={focusedElem:e,selectionRange:t},ar=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var w=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,C=w.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?x:ln(n.type,x),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=n.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){de(n,n.return,S)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return w=tu,tu=!1,w}function Ta(e,n,t){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&yp(n,t,r)}i=i.next}while(i!==a)}}function Tr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var a=t.create;t.destroy=a()}t=t.next}while(t!==n)}}function bl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function bp(e){var n=e.alternate;n!==null&&(e.alternate=null,bp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[vn],delete n[Ka],delete n[rl],delete n[_m],delete n[zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=or));else if(a!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function wl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(wl(e,n,t),e=e.sibling;e!==null;)wl(e,n,t),e=e.sibling}var Se=null,sn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)wp(e,n,t),t=t.sibling}function wp(e,n,t){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(Lr,t)}catch{}switch(t.tag){case 5:Ne||zt(t,n);case 6:var a=Se,i=sn;Se=null,Hn(e,n,t),Se=a,sn=i,Se!==null&&(sn?(e=Se,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Se.removeChild(t.stateNode));break;case 18:Se!==null&&(sn?(e=Se,t=t.stateNode,e.nodeType===8?co(e.parentNode,t):e.nodeType===1&&co(e,t),Ga(e)):co(Se,t.stateNode));break;case 4:a=Se,i=sn,Se=t.stateNode.containerInfo,sn=!0,Hn(e,n,t),Se=a,sn=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(a=t.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var r=i,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&yp(t,n,o),i=i.next}while(i!==a)}Hn(e,n,t);break;case 1:if(!Ne&&(zt(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=t.memoizedProps,a.state=t.memoizedState,a.componentWillUnmount()}catch(l){de(t,n,l)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(Ne=(a=Ne)||t.memoizedState!==null,Hn(e,n,t),Ne=a):Hn(e,n,t);break;default:Hn(e,n,t)}}function iu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ty),n.forEach(function(a){var i=fy.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}}function on(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];try{var r=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:Se=l.stateNode,sn=!1;break e;case 3:Se=l.stateNode.containerInfo,sn=!0;break e;case 4:Se=l.stateNode.containerInfo,sn=!0;break e}l=l.return}if(Se===null)throw Error(P(160));wp(r,o,i),Se=null,sn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){de(i,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)xp(n,e),n=n.sibling}function xp(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(on(n,e),mn(e),a&4){try{Ta(3,e,e.return),Tr(3,e)}catch(x){de(e,e.return,x)}try{Ta(5,e,e.return)}catch(x){de(e,e.return,x)}}break;case 1:on(n,e),mn(e),a&512&&t!==null&&zt(t,t.return);break;case 5:if(on(n,e),mn(e),a&512&&t!==null&&zt(t,t.return),e.flags&32){var i=e.stateNode;try{Ba(i,"")}catch(x){de(e,e.return,x)}}if(a&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,o=t!==null?t.memoizedProps:r,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&Jd(i,r),Oo(l,o);var c=Oo(l,r);for(o=0;o<s.length;o+=2){var u=s[o],d=s[o+1];u==="style"?Gd(i,d):u==="dangerouslySetInnerHTML"?Fd(i,d):u==="children"?Ba(i,d):Xl(i,u,d,c)}switch(l){case"input":zo(i,r);break;case"textarea":Bd(i,r);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?Ut(i,!!r.multiple,p,!1):h!==!!r.multiple&&(r.defaultValue!=null?Ut(i,!!r.multiple,r.defaultValue,!0):Ut(i,!!r.multiple,r.multiple?[]:"",!1))}i[Ka]=r}catch(x){de(e,e.return,x)}}break;case 6:if(on(n,e),mn(e),a&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(x){de(e,e.return,x)}}break;case 3:if(on(n,e),mn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Ga(n.containerInfo)}catch(x){de(e,e.return,x)}break;case 4:on(n,e),mn(e);break;case 13:on(n,e),mn(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=pe())),a&4&&iu(e);break;case 22:if(u=t!==null&&t.memoizedState!==null,e.mode&1?(Ne=(c=Ne)||u,on(n,e),Ne=c):on(n,e),mn(e),a&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(Z=e,u=e.child;u!==null;){for(d=Z=u;Z!==null;){switch(h=Z,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ta(4,h,h.return);break;case 1:zt(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){a=h,t=h.return;try{n=a,w.props=n.memoizedProps,w.state=n.memoizedState,w.componentWillUnmount()}catch(x){de(a,t,x)}}break;case 5:zt(h,h.return);break;case 22:if(h.memoizedState!==null){ou(d);continue}}p!==null?(p.return=h,Z=p):ou(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Od("display",o))}catch(x){de(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){de(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:on(n,e),mn(e),a&4&&iu(e);break;case 21:break;default:on(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(vp(t)){var a=t;break e}t=t.return}throw Error(P(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Ba(i,""),a.flags&=-33);var r=au(e);wl(e,r,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=au(e);vl(e,l,o);break;default:throw Error(P(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function iy(e,n,t){Z=e,Ap(e)}function Ap(e,n,t){for(var a=(e.mode&1)!==0;Z!==null;){var i=Z,r=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Ii;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ne;l=Ii;var c=Ne;if(Ii=o,(Ne=s)&&!c)for(Z=i;Z!==null;)o=Z,s=o.child,o.tag===22&&o.memoizedState!==null?lu(i):s!==null?(s.return=o,Z=s):lu(i);for(;r!==null;)Z=r,Ap(r),r=r.sibling;Z=i,Ii=l,Ne=c}ru(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,Z=r):ru(e)}}function ru(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ne||Tr(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!Ne)if(t===null)a.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:ln(n.type,t.memoizedProps);a.componentDidUpdate(i,t.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Uc(n,r,a);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Uc(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ne||n.flags&512&&bl(n)}catch(h){de(n,n.return,h)}}if(n===e){Z=null;break}if(t=n.sibling,t!==null){t.return=n.return,Z=t;break}Z=n.return}}function ou(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Z=t;break}Z=n.return}}function lu(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Tr(4,n)}catch(s){de(n,t,s)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var i=n.return;try{a.componentDidMount()}catch(s){de(n,i,s)}}var r=n.return;try{bl(n)}catch(s){de(n,r,s)}break;case 5:var o=n.return;try{bl(n)}catch(s){de(n,o,s)}}}catch(s){de(n,n.return,s)}if(n===e){Z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Z=l;break}Z=n.return}}var ry=Math.ceil,yr=Dn.ReactCurrentDispatcher,ks=Dn.ReactCurrentOwner,en=Dn.ReactCurrentBatchConfig,X=0,Ae=null,me=null,ke=0,Fe=0,Jt=it(0),ve=0,ai=null,yt=0,Dr=0,Cs=0,Da=null,De=null,Ps=0,ia=1/0,Ln=null,br=!1,xl=null,Kn=null,Wi=!1,On=null,vr=0,ja=0,Al=null,Gi=-1,Xi=0;function Re(){return X&6?pe():Gi!==-1?Gi:Gi=pe()}function $n(e){return e.mode&1?X&2&&ke!==0?ke&-ke:Bm.transition!==null?(Xi===0&&(Xi=rf()),Xi):(e=V,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function fn(e,n,t,a){if(50<ja)throw ja=0,Al=null,Error(P(185));li(e,t,a),(!(X&2)||e!==Ae)&&(e===Ae&&(!(X&2)&&(Dr|=t),ve===4&&Un(e,ke)),ze(e,a),t===1&&X===0&&!(n.mode&1)&&(ia=pe()+500,Rr&&rt()))}function ze(e,n){var t=e.callbackNode;Bg(e,n);var a=tr(e,e===Ae?ke:0);if(a===0)t!==null&&mc(t),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(t!=null&&mc(t),n===1)e.tag===0?Jm(su.bind(null,e)):Wf(su.bind(null,e)),jm(function(){!(X&6)&&rt()}),t=null;else{switch(of(a)){case 1:t=$l;break;case 4:t=tf;break;case 16:t=nr;break;case 536870912:t=af;break;default:t=nr}t=Ip(t,Sp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Sp(e,n){if(Gi=-1,Xi=0,X&6)throw Error(P(327));var t=e.callbackNode;if(Yt()&&e.callbackNode!==t)return null;var a=tr(e,e===Ae?ke:0);if(a===0)return null;if(a&30||a&e.expiredLanes||n)n=wr(e,a);else{n=a;var i=X;X|=2;var r=Cp();(Ae!==e||ke!==n)&&(Ln=null,ia=pe()+500,ft(e,n));do try{sy();break}catch(l){kp(e,l)}while(!0);ds(),yr.current=r,X=i,me!==null?n=0:(Ae=null,ke=0,n=ve)}if(n!==0){if(n===2&&(i=Qo(e),i!==0&&(a=i,n=Sl(e,i))),n===1)throw t=ai,ft(e,0),Un(e,a),ze(e,pe()),t;if(n===6)Un(e,a);else{if(i=e.current.alternate,!(a&30)&&!oy(i)&&(n=wr(e,a),n===2&&(r=Qo(e),r!==0&&(a=r,n=Sl(e,r))),n===1))throw t=ai,ft(e,0),Un(e,a),ze(e,pe()),t;switch(e.finishedWork=i,e.finishedLanes=a,n){case 0:case 1:throw Error(P(345));case 2:lt(e,De,Ln);break;case 3:if(Un(e,a),(a&130023424)===a&&(n=Ps+500-pe(),10<n)){if(tr(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=il(lt.bind(null,e,De,Ln),n);break}lt(e,De,Ln);break;case 4:if(Un(e,a),(a&4194240)===a)break;for(n=e.eventTimes,i=-1;0<a;){var o=31-dn(a);r=1<<o,o=n[o],o>i&&(i=o),a&=~r}if(a=i,a=pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ry(a/1960))-a,10<a){e.timeoutHandle=il(lt.bind(null,e,De,Ln),a);break}lt(e,De,Ln);break;case 5:lt(e,De,Ln);break;default:throw Error(P(329))}}}return ze(e,pe()),e.callbackNode===t?Sp.bind(null,e):null}function Sl(e,n){var t=Da;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=wr(e,n),e!==2&&(n=De,De=t,n!==null&&kl(n)),e}function kl(e){De===null?De=e:De.push.apply(De,e)}function oy(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var a=0;a<t.length;a++){var i=t[a],r=i.getSnapshot;i=i.value;try{if(!pn(r(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~Cs,n&=~Dr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-dn(n),a=1<<t;e[t]=-1,n&=~a}}function su(e){if(X&6)throw Error(P(327));Yt();var n=tr(e,0);if(!(n&1))return ze(e,pe()),null;var t=wr(e,n);if(e.tag!==0&&t===2){var a=Qo(e);a!==0&&(n=a,t=Sl(e,a))}if(t===1)throw t=ai,ft(e,0),Un(e,n),ze(e,pe()),t;if(t===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,lt(e,De,Ln),ze(e,pe()),null}function Ls(e,n){var t=X;X|=1;try{return e(n)}finally{X=t,X===0&&(ia=pe()+500,Rr&&rt())}}function bt(e){On!==null&&On.tag===0&&!(X&6)&&Yt();var n=X;X|=1;var t=en.transition,a=V;try{if(en.transition=null,V=1,e)return e()}finally{V=a,en.transition=t,X=n,!(X&6)&&rt()}}function Ns(){Fe=Jt.current,re(Jt)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Dm(t)),me!==null)for(t=me.return;t!==null;){var a=t;switch(ss(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&lr();break;case 3:ta(),re(He),re(Ee),ys();break;case 5:ms(a);break;case 4:ta();break;case 13:re(se);break;case 19:re(se);break;case 10:fs(a.type._context);break;case 22:case 23:Ns()}t=t.return}if(Ae=e,me=e=qn(e.current,null),ke=Fe=n,ve=0,ai=null,Cs=Dr=yt=0,De=Da=null,ut!==null){for(n=0;n<ut.length;n++)if(t=ut[n],a=t.interleaved,a!==null){t.interleaved=null;var i=a.next,r=t.pending;if(r!==null){var o=r.next;r.next=i,a.next=o}t.pending=a}ut=null}return e}function kp(e,n){do{var t=me;try{if(ds(),Ui.current=mr,gr){for(var a=ce.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}gr=!1}if(mt=0,xe=be=ce=null,Za=!1,ei=0,ks.current=null,t===null||t.return===null){ve=1,ai=n,me=null;break}e:{var r=e,o=t.return,l=t,s=n;if(n=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Vc(o);if(p!==null){p.flags&=-257,Qc(p,o,l,r,n),p.mode&1&&Yc(r,c,n),n=p,s=c;var w=n.updateQueue;if(w===null){var x=new Set;x.add(s),n.updateQueue=x}else w.add(s);break e}else{if(!(n&1)){Yc(r,c,n),Es();break e}s=Error(P(426))}}else if(oe&&l.mode&1){var C=Vc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Qc(C,o,l,r,n),cs(aa(s,l));break e}}r=s=aa(s,l),ve!==4&&(ve=2),Da===null?Da=[r]:Da.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var g=op(r,s,n);Bc(r,g);break e;case 1:l=s;var m=r.type,b=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kn===null||!Kn.has(b)))){r.flags|=65536,n&=-n,r.lanes|=n;var S=lp(r,l,n);Bc(r,S);break e}}r=r.return}while(r!==null)}Lp(t)}catch(L){n=L,me===t&&t!==null&&(me=t=t.return);continue}break}while(!0)}function Cp(){var e=yr.current;return yr.current=mr,e===null?mr:e}function Es(){(ve===0||ve===3||ve===2)&&(ve=4),Ae===null||!(yt&268435455)&&!(Dr&268435455)||Un(Ae,ke)}function wr(e,n){var t=X;X|=2;var a=Cp();(Ae!==e||ke!==n)&&(Ln=null,ft(e,n));do try{ly();break}catch(i){kp(e,i)}while(!0);if(ds(),X=t,yr.current=a,me!==null)throw Error(P(261));return Ae=null,ke=0,ve}function ly(){for(;me!==null;)Pp(me)}function sy(){for(;me!==null&&!Mg();)Pp(me)}function Pp(e){var n=Ep(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,n===null?Lp(e):me=n,ks.current=null}function Lp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ny(t,n),t!==null){t.flags&=32767,me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(t=ey(t,n,Fe),t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);ve===0&&(ve=5)}function lt(e,n,t){var a=V,i=en.transition;try{en.transition=null,V=1,cy(e,n,t,a)}finally{en.transition=i,V=a}return null}function cy(e,n,t,a){do Yt();while(On!==null);if(X&6)throw Error(P(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(Ug(e,r),e===Ae&&(me=Ae=null,ke=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wi||(Wi=!0,Ip(nr,function(){return Yt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=en.transition,en.transition=null;var o=V;V=1;var l=X;X|=4,ks.current=null,ay(e,t),xp(t,e),Em(tl),ar=!!nl,tl=nl=null,e.current=t,iy(t),Zg(),X=l,V=o,en.transition=r}else e.current=t;if(Wi&&(Wi=!1,On=e,vr=i),r=e.pendingLanes,r===0&&(Kn=null),jg(t.stateNode),ze(e,pe()),n!==null)for(a=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],a(i.value,{componentStack:i.stack,digest:i.digest});if(br)throw br=!1,e=xl,xl=null,e;return vr&1&&e.tag!==0&&Yt(),r=e.pendingLanes,r&1?e===Al?ja++:(ja=0,Al=e):ja=0,rt(),null}function Yt(){if(On!==null){var e=of(vr),n=en.transition,t=V;try{if(en.transition=null,V=16>e?16:e,On===null)var a=!1;else{if(e=On,On=null,vr=0,X&6)throw Error(P(331));var i=X;for(X|=4,Z=e.current;Z!==null;){var r=Z,o=r.child;if(Z.flags&16){var l=r.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(Z=c;Z!==null;){var u=Z;switch(u.tag){case 0:case 11:case 15:Ta(8,u,r)}var d=u.child;if(d!==null)d.return=u,Z=d;else for(;Z!==null;){u=Z;var h=u.sibling,p=u.return;if(bp(u),u===c){Z=null;break}if(h!==null){h.return=p,Z=h;break}Z=p}}}var w=r.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}Z=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,Z=o;else e:for(;Z!==null;){if(r=Z,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Ta(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,Z=g;break e}Z=r.return}}var m=e.current;for(Z=m;Z!==null;){o=Z;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,Z=b;else e:for(o=m;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Tr(9,l)}}catch(L){de(l,l.return,L)}if(l===o){Z=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Z=S;break e}Z=l.return}}if(X=i,rt(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(Lr,e)}catch{}a=!0}return a}finally{V=t,en.transition=n}}return!1}function cu(e,n,t){n=aa(t,n),n=op(e,n,1),e=Qn(e,n,1),n=Re(),e!==null&&(li(e,1,n),ze(e,n))}function de(e,n,t){if(e.tag===3)cu(e,e,t);else for(;n!==null;){if(n.tag===3){cu(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kn===null||!Kn.has(a))){e=aa(t,e),e=lp(n,e,1),n=Qn(n,e,1),e=Re(),n!==null&&(li(n,1,e),ze(n,e));break}}n=n.return}}function uy(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&t,Ae===e&&(ke&t)===t&&(ve===4||ve===3&&(ke&130023424)===ke&&500>pe()-Ps?ft(e,0):Cs|=t),ze(e,n)}function Np(e,n){n===0&&(e.mode&1?(n=xi,xi<<=1,!(xi&130023424)&&(xi=4194304)):n=1);var t=Re();e=Zn(e,n),e!==null&&(li(e,n,t),ze(e,t))}function dy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Np(e,t)}function fy(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(P(314))}a!==null&&a.delete(n),Np(e,t)}var Ep;Ep=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||He.current)je=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return je=!1,qm(e,n,t);je=!!(e.flags&131072)}else je=!1,oe&&n.flags&1048576&&Rf(n,ur,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;Oi(e,n),e=n.pendingProps;var i=qt(n,Ee.current);Xt(n,t),i=vs(null,n,a,e,i,t);var r=ws();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_e(a)?(r=!0,sr(n)):r=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hs(n),i.updater=Zr,n.stateNode=i,i._reactInternals=n,dl(n,a,e,t),n=hl(null,n,a,!0,r,t)):(n.tag=0,oe&&r&&ls(n),We(null,n,i,t),n=n.child),n;case 16:a=n.elementType;e:{switch(Oi(e,n),e=n.pendingProps,i=a._init,a=i(a._payload),n.type=a,i=n.tag=hy(a),e=ln(a,e),i){case 0:n=pl(null,n,a,e,t);break e;case 1:n=qc(null,n,a,e,t);break e;case 11:n=Kc(null,n,a,e,t);break e;case 14:n=$c(null,n,a,ln(a.type,e),t);break e}throw Error(P(306,a,""))}return n;case 0:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:ln(a,i),pl(e,n,a,i,t);case 1:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:ln(a,i),qc(e,n,a,i,t);case 3:e:{if(dp(n),e===null)throw Error(P(387));a=n.pendingProps,r=n.memoizedState,i=r.element,Hf(e,n),pr(n,a,null,t);var o=n.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){i=aa(Error(P(423)),n),n=eu(e,n,a,t,i);break e}else if(a!==i){i=aa(Error(P(424)),n),n=eu(e,n,a,t,i);break e}else for(Oe=Vn(n.stateNode.containerInfo.firstChild),Ge=n,oe=!0,cn=null,t=Df(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ea(),a===i){n=Tn(e,n,t);break e}We(e,n,a,t)}n=n.child}return n;case 5:return _f(n),e===null&&sl(n),a=n.type,i=n.pendingProps,r=e!==null?e.memoizedProps:null,o=i.children,al(a,i)?o=null:r!==null&&al(a,r)&&(n.flags|=32),up(e,n),We(e,n,o,t),n.child;case 6:return e===null&&sl(n),null;case 13:return fp(e,n,t);case 4:return gs(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=na(n,null,a,t):We(e,n,a,t),n.child;case 11:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:ln(a,i),Kc(e,n,a,i,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(a=n.type._context,i=n.pendingProps,r=n.memoizedProps,o=i.value,ee(dr,a._currentValue),a._currentValue=o,r!==null)if(pn(r.value,o)){if(r.children===i.children&&!He.current){n=Tn(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var s=l.firstContext;s!==null;){if(s.context===a){if(r.tag===1){s=Wn(-1,t&-t),s.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}r.lanes|=t,s=r.alternate,s!==null&&(s.lanes|=t),cl(r.return,t,n),l.lanes|=t;break}s=s.next}}else if(r.tag===10)o=r.type===n.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(P(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),cl(o,t,n),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===n){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}We(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,a=n.pendingProps.children,Xt(n,t),i=tn(i),a=a(i),n.flags|=1,We(e,n,a,t),n.child;case 14:return a=n.type,i=ln(a,n.pendingProps),i=ln(a.type,i),$c(e,n,a,i,t);case 15:return sp(e,n,n.type,n.pendingProps,t);case 17:return a=n.type,i=n.pendingProps,i=n.elementType===a?i:ln(a,i),Oi(e,n),n.tag=1,_e(a)?(e=!0,sr(n)):e=!1,Xt(n,t),rp(n,a,i),dl(n,a,i,t),hl(null,n,a,!0,e,t);case 19:return pp(e,n,t);case 22:return cp(e,n,t)}throw Error(P(156,n.tag))};function Ip(e,n){return nf(e,n)}function py(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,a){return new py(e,n,t,a)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hy(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vl)return 11;if(e===Ql)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yi(e,n,t,a,i,r){var o=2;if(a=e,typeof e=="function")Is(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return pt(t.children,i,r,n);case Yl:o=8,i|=8;break;case To:return e=qe(12,t,n,i|2),e.elementType=To,e.lanes=r,e;case Do:return e=qe(13,t,n,i),e.elementType=Do,e.lanes=r,e;case jo:return e=qe(19,t,n,i),e.elementType=jo,e.lanes=r,e;case Hd:return jr(t,i,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dd:o=10;break e;case jd:o=9;break e;case Vl:o=11;break e;case Ql:o=14;break e;case zn:o=16,a=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return n=qe(o,t,n,i),n.elementType=e,n.type=a,n.lanes=r,n}function pt(e,n,t,a){return e=qe(7,e,a,n),e.lanes=t,e}function jr(e,n,t,a){return e=qe(22,e,a,n),e.elementType=Hd,e.lanes=t,e.stateNode={isHidden:!1},e}function bo(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function vo(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gy(e,n,t,a,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$r(0),this.expirationTimes=$r(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ws(e,n,t,a,i,r,o,l,s){return e=new gy(e,n,t,l,s),n===1?(n=1,r===!0&&(n|=8)):n=0,r=qe(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(r),e}function my(e,n,t){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:a==null?null:""+a,children:e,containerInfo:n,implementation:t}}function Wp(e){if(!e)return tt;e=e._reactInternals;e:{if(wt(e)!==e||e.tag!==1)throw Error(P(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(P(171))}if(e.tag===1){var t=e.type;if(_e(t))return If(e,t,n)}return n}function Rp(e,n,t,a,i,r,o,l,s){return e=Ws(t,a,!0,e,i,r,o,l,s),e.context=Wp(null),t=e.current,a=Re(),i=$n(t),r=Wn(a,i),r.callback=n??null,Qn(t,r,i),e.current.lanes=i,li(e,i,a),ze(e,a),e}function Hr(e,n,t,a){var i=n.current,r=Re(),o=$n(i);return t=Wp(t),n.context===null?n.context=t:n.pendingContext=t,n=Wn(r,o),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=Qn(i,n,o),e!==null&&(fn(e,i,o,r),Bi(e,i,o)),o}function xr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Rs(e,n){uu(e,n),(e=e.alternate)&&uu(e,n)}function yy(){return null}var Mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ms(e){this._internalRoot=e}_r.prototype.render=Ms.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(P(409));Hr(e,n,null,null)};_r.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;bt(function(){Hr(null,e,null,null)}),n[Mn]=null}};function _r(e){this._internalRoot=e}_r.prototype.unstable_scheduleHydration=function(e){if(e){var n=cf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bn.length&&n!==0&&n<Bn[t].priority;t++);Bn.splice(t,0,e),t===0&&df(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function du(){}function by(e,n,t,a,i){if(i){if(typeof a=="function"){var r=a;a=function(){var c=xr(o);r.call(c)}}var o=Rp(n,a,e,0,null,!1,!1,"",du);return e._reactRootContainer=o,e[Mn]=o.current,Va(e.nodeType===8?e.parentNode:e),bt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var c=xr(s);l.call(c)}}var s=Ws(e,0,!1,null,null,!1,!1,"",du);return e._reactRootContainer=s,e[Mn]=s.current,Va(e.nodeType===8?e.parentNode:e),bt(function(){Hr(n,s,t,a)}),s}function Jr(e,n,t,a,i){var r=t._reactRootContainer;if(r){var o=r;if(typeof i=="function"){var l=i;i=function(){var s=xr(o);l.call(s)}}Hr(n,o,e,i)}else o=by(t,n,e,i,a);return xr(o)}lf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pa(n.pendingLanes);t!==0&&(ql(n,t|1),ze(n,pe()),!(X&6)&&(ia=pe()+500,rt()))}break;case 13:bt(function(){var a=Zn(e,1);if(a!==null){var i=Re();fn(a,e,1,i)}}),Rs(e,1)}};es=function(e){if(e.tag===13){var n=Zn(e,134217728);if(n!==null){var t=Re();fn(n,e,134217728,t)}Rs(e,134217728)}};sf=function(e){if(e.tag===13){var n=$n(e),t=Zn(e,n);if(t!==null){var a=Re();fn(t,e,n,a)}Rs(e,n)}};cf=function(){return V};uf=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};Xo=function(e,n,t){switch(n){case"input":if(zo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=Wr(a);if(!i)throw Error(P(90));zd(a),zo(a,i)}}}break;case"textarea":Bd(e,t);break;case"select":n=t.value,n!=null&&Ut(e,!!t.multiple,n,!1)}};Vd=Ls;Qd=bt;var vy={usingClientEntryPoint:!1,Events:[ci,Tt,Wr,Xd,Yd,Ls]},xa={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wy={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qd(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Lr=Ri.inject(wy),xn=Ri}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(n))throw Error(P(200));return my(e,n,null,t)};Ye.createRoot=function(e,n){if(!Zs(e))throw Error(P(299));var t=!1,a="",i=Mp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Ws(e,1,!1,null,null,t,!1,a,i),e[Mn]=n.current,Va(e.nodeType===8?e.parentNode:e),new Ms(n)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=qd(n),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return bt(e)};Ye.hydrate=function(e,n,t){if(!zr(n))throw Error(P(200));return Jr(null,e,n,!0,t)};Ye.hydrateRoot=function(e,n,t){if(!Zs(e))throw Error(P(405));var a=t!=null&&t.hydratedSources||null,i=!1,r="",o=Mp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Rp(n,null,e,1,t??null,i,!1,r,o),e[Mn]=n.current,Va(e),a)for(e=0;e<a.length;e++)t=a[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _r(n)};Ye.render=function(e,n,t){if(!zr(n))throw Error(P(200));return Jr(null,e,n,!1,t)};Ye.unmountComponentAtNode=function(e){if(!zr(e))throw Error(P(40));return e._reactRootContainer?(bt(function(){Jr(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ls;Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,a){if(!zr(t))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Jr(e,n,t,!1,a)};Ye.version="18.3.1-next-f1338f8080-20240426";function Zp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zp)}catch(e){console.error(e)}}Zp(),Rd.exports=Ye;var Tp=Rd.exports,fu=Tp;Mo.createRoot=fu.createRoot,Mo.hydrateRoot=fu.hydrateRoot;/**
* @remix-run/router v1.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Cl.apply(this,arguments)}var Ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ar||(Ar={}));function we(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ts(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function pu(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function di(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}var hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hu||(hu={}));function xy(e,n,t){return t===void 0&&(t="/"),Ay(e,n,t)}function Ay(e,n,t,a){let i=typeof n=="string"?di(n):n,r=Hp(i.pathname||"/",t);if(r==null)return null;let o=Dp(e);Sy(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let c=Ty(r);l=Ry(o[s],c)}return l}function Dp(e,n,t,a){n===void 0&&(n=[]),t===void 0&&(t=[]),a===void 0&&(a="");let i=(r,o,l)=>{let s={relativePath:l===void 0?r.path||"":l,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};s.relativePath.startsWith("/")&&(we(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let c=et([a,s.relativePath]),u=t.concat(s);r.children&&r.children.length>0&&(we(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Dp(r.children,n,u,c)),!(r.path==null&&!r.index)&&n.push({path:c,score:Iy(c,r.index),routesMeta:u})};return e.forEach((r,o)=>{var l;if(r.path===""||!((l=r.path)!=null&&l.includes("?")))i(r,o);else for(let s of jp(r.path))i(r,o,s)}),n}function jp(e){let n=e.split("/");if(n.length===0)return[];let[t,...a]=n,i=t.endsWith("?"),r=t.replace(/\?$/,"");if(a.length===0)return i?[r,""]:[r];let o=jp(a.join("/")),l=[];return l.push(...o.map(s=>s===""?r:[r,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Sy(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Wy(n.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}const ky=/^:[\w-]+$/,Cy=3,Py=2,Ly=1,Ny=10,Ey=-2,gu=e=>e==="*";function Iy(e,n){let t=e.split("/"),a=t.length;return t.some(gu)&&(a+=Ey),n&&(a+=Py),t.filter(i=>!gu(i)).reduce((i,r)=>i+(ky.test(r)?Cy:r===""?Ly:Ny),a)}function Wy(e,n){return e.length===n.length&&e.slice(0,-1).every((t,a)=>t===n[a])?e[e.length-1]-n[n.length-1]:0}function Ry(e,n,t){let{routesMeta:a}=e,i={},r="/",o=[];for(let l=0;l<a.length;++l){let s=a[l],c=l===a.length-1,u=r==="/"?n:n.slice(r.length)||"/",d=My({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u),h=s.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:et([r,d.pathname]),pathnameBase:zy(et([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=et([r,d.pathnameBase]))}return o}function My(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,a]=Zy(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let r=i[0],o=r.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((s,c,u)=>{let{paramName:d,isOptional:h}=c;if(d==="*"){let w=l[u]||"";o=r.slice(0,r.length-w.length).replace(/(.)\/+$/,"$1")}const p=l[u];return h&&!p?s[d]=void 0:s[d]=(p||"").replace(/%2F/g,"/"),s},{}),pathname:r,pathnameBase:o,pattern:e}}function Zy(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ts(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,l)=>(a.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),a]}function Ty(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ts(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Hp(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}const Dy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jy=e=>Dy.test(e);function Hy(e,n){n===void 0&&(n="/");let{pathname:t,search:a="",hash:i=""}=typeof e=="string"?di(e):e,r;if(t)if(jy(t))r=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Ts(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?r=mu(t.substring(1),"/"):r=mu(t,n)}else r=n;return{pathname:r,search:Jy(a),hash:By(i)}}function mu(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function wo(e,n,t,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _y(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function _p(e,n){let t=_y(e);return n?t.map((a,i)=>i===t.length-1?a.pathname:a.pathnameBase):t.map(a=>a.pathnameBase)}function zp(e,n,t,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=di(e):(i=Cl({},e),we(!i.pathname||!i.pathname.includes("?"),wo("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),wo("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),wo("#","search","hash",i)));let r=e===""||i.pathname==="",o=r?"/":i.pathname,l;if(o==null)l=t;else{let d=n.length-1;if(!a&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?n[d]:"/"}let s=Hy(i,l),c=o&&o!=="/"&&o.endsWith("/"),u=(r||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const et=e=>e.join("/").replace(/\/\/+/g,"/"),zy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,By=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Uy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jp=["post","put","patch","delete"];new Set(Jp);const Fy=["get",...Jp];new Set(Fy);/**
* React Router v6.30.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ii.apply(this,arguments)}const Ds=E.createContext(null),Oy=E.createContext(null),xt=E.createContext(null),Br=E.createContext(null),At=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Bp=E.createContext(null);function Gy(e,n){let{relative:t}=n===void 0?{}:n;fi()||we(!1);let{basename:a,navigator:i}=E.useContext(xt),{hash:r,pathname:o,search:l}=Fp(e,{relative:t}),s=o;return a!=="/"&&(s=o==="/"?a:et([a,o])),i.createHref({pathname:s,search:l,hash:r})}function fi(){return E.useContext(Br)!=null}function sa(){return fi()||we(!1),E.useContext(Br).location}function Up(e){E.useContext(xt).static||E.useLayoutEffect(e)}function Xy(){let{isDataRoute:e}=E.useContext(At);return e?o0():Yy()}function Yy(){fi()||we(!1);let e=E.useContext(Ds),{basename:n,future:t,navigator:a}=E.useContext(xt),{matches:i}=E.useContext(At),{pathname:r}=sa(),o=JSON.stringify(_p(i,t.v7_relativeSplatPath)),l=E.useRef(!1);return Up(()=>{l.current=!0}),E.useCallback(function(s,c){if(c===void 0&&(c={}),!l.current)return;if(typeof s=="number"){a.go(s);return}let u=zp(s,JSON.parse(o),r,c.relative==="path");e==null&&n!=="/"&&(u.pathname=u.pathname==="/"?n:et([n,u.pathname])),(c.replace?a.replace:a.push)(u,c.state,c)},[n,a,o,r,e])}function Fp(e,n){let{relative:t}=n===void 0?{}:n,{future:a}=E.useContext(xt),{matches:i}=E.useContext(At),{pathname:r}=sa(),o=JSON.stringify(_p(i,a.v7_relativeSplatPath));return E.useMemo(()=>zp(e,JSON.parse(o),r,t==="path"),[e,o,r,t])}function Vy(e,n){return Qy(e,n)}function Qy(e,n,t,a){fi()||we(!1);let{navigator:i}=E.useContext(xt),{matches:r}=E.useContext(At),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=sa(),u;if(n){var d;let C=typeof n=="string"?di(n):n;s==="/"||(d=C.pathname)!=null&&d.startsWith(s)||we(!1),u=C}else u=c;let h=u.pathname||"/",p=h;if(s!=="/"){let C=s.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let w=xy(e,{pathname:p}),x=n0(w&&w.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:et([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:et([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),r,t,a);return n&&x?E.createElement(Br.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ar.Pop}},x):x}function Ky(){let e=r0(),n=Uy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:a},t):null,null)}const $y=E.createElement(Ky,null);class qy extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(At.Provider,{value:this.props.routeContext},E.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e0(e){let{routeContext:n,match:t,children:a}=e,i=E.useContext(Ds);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(At.Provider,{value:n},a)}function n0(e,n,t,a){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),a===void 0&&(a=null),e==null){var r;if(!t)return null;if(t.errors)e=t.matches;else if((r=a)!=null&&r.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||we(!1),o=o.slice(0,Math.min(o.length,u+1))}let s=!1,c=-1;if(t&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:p}=t,w=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||w){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let p,w=!1,x=null,C=null;t&&(p=l&&d.route.id?l[d.route.id]:void 0,x=d.route.errorElement||$y,s&&(c<0&&h===0?(l0("route-fallback"),w=!0,C=null):c===h&&(w=!0,C=d.route.hydrateFallbackElement||null)));let g=n.concat(o.slice(0,h+1)),m=()=>{let b;return p?b=x:w?b=C:d.route.Component?b=E.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=u,E.createElement(e0,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:t!=null},children:b})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement(qy,{location:t.location,revalidation:t.revalidation,component:x,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Op||{}),Gp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gp||{});function t0(e){let n=E.useContext(Ds);return n||we(!1),n}function a0(e){let n=E.useContext(Oy);return n||we(!1),n}function i0(e){let n=E.useContext(At);return n||we(!1),n}function Xp(e){let n=i0(),t=n.matches[n.matches.length-1];return t.route.id||we(!1),t.route.id}function r0(){var e;let n=E.useContext(Bp),t=a0(),a=Xp();return n!==void 0?n:(e=t.errors)==null?void 0:e[a]}function o0(){let{router:e}=t0(Op.UseNavigateStable),n=Xp(Gp.UseNavigateStable),t=E.useRef(!1);return Up(()=>{t.current=!0}),E.useCallback(function(a,i){i===void 0&&(i={}),t.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ii({fromRouteId:n},i)))},[e,n])}const yu={};function l0(e,n,t){yu[e]||(yu[e]=!0)}function s0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pn(e){we(!1)}function c0(e){let{basename:n="/",children:t=null,location:a,navigationType:i=Ar.Pop,navigator:r,static:o=!1,future:l}=e;fi()&&we(!1);let s=n.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:r,static:o,future:ii({v7_relativeSplatPath:!1},l)}),[s,l,r,o]);typeof a=="string"&&(a=di(a));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:w="default"}=a,x=E.useMemo(()=>{let C=Hp(u,s);return C==null?null:{location:{pathname:C,search:d,hash:h,state:p,key:w},navigationType:i}},[s,u,d,h,p,w,i]);return x==null?null:E.createElement(xt.Provider,{value:c},E.createElement(Br.Provider,{children:t,value:x}))}function u0(e){let{children:n,location:t}=e;return Vy(Pl(n),t)}new Promise(()=>{});function Pl(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(a,i)=>{if(!E.isValidElement(a))return;let r=[...n,i];if(a.type===E.Fragment){t.push.apply(t,Pl(a.props.children,r));return}a.type!==Pn&&we(!1),!a.props.index||!a.props.children||we(!1);let o={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Pl(a.props.children,r)),t.push(o)}),t}/**
* @remix-run/router v1.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Sr(){return Sr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Sr.apply(this,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const bu="popstate";function d0(e){e===void 0&&(e={});function n(a,i){let{pathname:r,search:o,hash:l}=a.location;return Ll("",{pathname:r,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(a,i){return typeof i=="string"?i:Yp(i)}return g0(n,t,null,e)}function f0(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function p0(){return Math.random().toString(36).substr(2,8)}function vu(e,n){return{usr:e.state,key:e.key,idx:n}}function Ll(e,n,t,a){return t===void 0&&(t=null),Sr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?h0(n):n,{state:t,key:n&&n.key||a||p0()})}function Yp(e){let{pathname:n="/",search:t="",hash:a=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),a&&a!=="#"&&(n+=a.charAt(0)==="#"?a:"#"+a),n}function h0(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let a=e.indexOf("?");a>=0&&(n.search=e.substr(a),e=e.substr(0,a)),e&&(n.pathname=e)}return n}function g0(e,n,t,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:r=!1}=a,o=i.history,l=Bt.Pop,s=null,c=u();c==null&&(c=0,o.replaceState(Sr({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){l=Bt.Pop;let C=u(),g=C==null?null:C-c;c=C,s&&s({action:l,location:x.location,delta:g})}function h(C,g){l=Bt.Push;let m=Ll(x.location,C,g);c=u()+1;let b=vu(m,c),S=x.createHref(m);try{o.pushState(b,"",S)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(S)}r&&s&&s({action:l,location:x.location,delta:1})}function p(C,g){l=Bt.Replace;let m=Ll(x.location,C,g);c=u();let b=vu(m,c),S=x.createHref(m);o.replaceState(b,"",S),r&&s&&s({action:l,location:x.location,delta:0})}function w(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Yp(C);return m=m.replace(/ $/,"%20"),f0(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let x={get action(){return l},get location(){return e(i,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(bu,d),s=C,()=>{i.removeEventListener(bu,d),s=null}},createHref(C){return n(i,C)},createURL:w,encodeLocation(C){let g=w(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(C){return o.go(C)}};return x}var wu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(wu||(wu={}));function m0(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,a=e.charAt(t);return a&&a!=="/"?null:e.slice(t)||"/"}const Vp=["post","put","patch","delete"];new Set(Vp);const y0=["get",...Vp];new Set(y0);/**
* React Router DOM v6.30.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Nl.apply(this,arguments)}function b0(e,n){if(e==null)return{};var t={},a=Object.keys(e),i,r;for(r=0;r<a.length;r++)i=a[r],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function v0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function w0(e,n){return e.button===0&&(!n||n==="_self")&&!v0(e)}const x0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],A0="6";try{window.__reactRouterVersion=A0}catch{}const S0="startTransition",xu=ug[S0];function k0(e){let{basename:n,children:t,future:a,window:i}=e,r=E.useRef();r.current==null&&(r.current=d0({window:i,v5Compat:!0}));let o=r.current,[l,s]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=a||{},u=E.useCallback(d=>{c&&xu?xu(()=>s(d)):s(d)},[s,c]);return E.useLayoutEffect(()=>o.listen(u),[o,u]),E.useEffect(()=>s0(a),[a]),E.createElement(c0,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:a})}const C0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Na=E.forwardRef(function(e,n){let{onClick:t,relative:a,reloadDocument:i,replace:r,state:o,target:l,to:s,preventScrollReset:c,viewTransition:u}=e,d=b0(e,x0),{basename:h}=E.useContext(xt),p,w=!1;if(typeof s=="string"&&P0.test(s)&&(p=s,C0))try{let m=new URL(window.location.href),b=s.startsWith("//")?new URL(m.protocol+s):new URL(s),S=m0(b.pathname,h);b.origin===m.origin&&S!=null?s=S+b.search+b.hash:w=!0}catch{}let x=Gy(s,{relative:a}),C=L0(s,{replace:r,state:o,target:l,preventScrollReset:c,relative:a,viewTransition:u});function g(m){t&&t(m),m.defaultPrevented||C(m)}return E.createElement("a",Nl({},d,{href:p||x,onClick:w||i?t:g,ref:n,target:l}))});var Au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Au||(Au={}));var Su;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Su||(Su={}));function L0(e,n){let{target:t,replace:a,state:i,preventScrollReset:r,relative:o,viewTransition:l}=n===void 0?{}:n,s=Xy(),c=sa(),u=Fp(e,{relative:o});return E.useCallback(d=>{if(w0(d,t)){d.preventDefault();let h=a!==void 0?a:pu(c)===pu(u);s(e,{replace:h,state:i,preventScrollReset:r,relative:o,viewTransition:l})}},[c,s,u,a,i,t,e,r,o,l])}const xo=[{name:"Home",link:"/",group:"home"},{name:"News",link:"/news",group:"news"},{name:"Research",link:"/research",group:"research"},{name:"Publications",link:"/publications",group:"publications"},{name:"Software",link:"/software",group:"software"},{name:"Members",link:"/members",group:"members"},{name:"Join",link:"/join",group:"join"},{name:"Contact",link:"/contact",group:"contact"}],Qp=()=>"/",N0=e=>{let n=e.startsWith("/")?e.slice(1):e;n=n.startsWith("static/")?n.slice(7):n;const t=Qp(),a=n.startsWith("/")?n:`/${n}`;return!t||t==="/"?a:`${t.endsWith("/")?t.slice(0,-1):t}${a}`},O={name:"Genomics and Artificial Intelligence in Healthcare Lab",description:"This is the official web page for the Genomics and Artificial Intelligence in Healthcare Lab at Hong Kong PolyU.",url:"https://genomics-in-healthcare.github.io/",baseurl:Qp(),static:N0},E0=()=>{const[e,n]=E.useState(!1),[t,a]=E.useState(!1),i=sa(),r=i.pathname==="/"||i.pathname==="/genomics-in-healthcare.github.io/";E.useEffect(()=>{const c=()=>{const u=window.pageYOffset||document.documentElement.scrollTop;a(u>50)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const o=()=>{n(!e)},l=()=>{n(!1)},s=(()=>{const c=i.pathname,u=xo.find(d=>{const h=d.link==="/"?"/":d.link;return c===h||c===`${O.baseurl}${h}`});return(u==null?void 0:u.group)||""})();return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:`md-app-bar ${r?"home":""} ${t?"scrolled":""}`,children:f.jsxs("div",{className:"md-app-bar__container",children:[f.jsx("button",{className:"md-button md-button--text md-menu-button",id:"menuButton","aria-label":"Open menu",onClick:o,style:{color:"#64748b"},children:f.jsxs("span",{className:"md-menu-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})}),f.jsx("div",{className:"md-app-bar__brand",style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Na,{to:"/",style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-app-bar__logo",src:O.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{className:"md-app-bar__title",children:[f.jsx("div",{className:"md-app-bar__title-main",style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{className:"md-app-bar__title-sub",style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("nav",{className:"md-app-bar__actions",id:"desktopNav",style:{gap:"4px"},children:xo.map(c=>f.jsx(Na,{to:c.link,className:`md-button md-button--text ${s===c.group?"md-button--active":""}`,style:{color:"#64748b",fontWeight:500,padding:"10px 12px",borderRadius:"4px",transition:"background-color 0.15s ease",fontSize:"1.125rem",fontFamily:"'Inter', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"},children:c.name},c.link))})]})}),f.jsxs("aside",{className:`md-navigation-drawer ${e?"open":""}`,id:"navigationDrawer",children:[f.jsx("div",{className:"md-navigation-drawer__header",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Na,{to:"/",onClick:l,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-navigation-drawer__logo",src:O.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("button",{className:"md-button md-button--text md-close-button",id:"closeDrawerButton","aria-label":"Close menu",onClick:l,style:{color:"#64748b",padding:"8px"},children:f.jsxs("span",{className:"md-close-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{})]})})]})}),f.jsx("div",{className:"md-navigation-drawer__content",children:xo.map(c=>f.jsx(Na,{to:c.link,onClick:l,className:`md-navigation-drawer__item ${s===c.group?"active":""}`,tabIndex:0,style:{backgroundColor:"transparent !important",color:"#1a1c1e !important",border:"none !important",boxShadow:"none !important"},children:c.name},c.link))})]}),f.jsx("div",{className:`md-backdrop ${e?"open":""}`,id:"backdrop",onClick:l})]})},I0=()=>f.jsx("footer",{children:f.jsx("div",{children:f.jsx("p",{children:"© 2025 Hong Kong JC STEM Lab of Genomics and AI in Healthcare. All rights reserved."})})}),W0=({children:e})=>{const n=sa(),t=n.pathname==="/"||n.pathname==="/genomics-in-healthcare.github.io/";return E.useEffect(()=>{t?(document.body.classList.add("home"),document.body.classList.remove("non-home")):(document.body.classList.add("non-home"),document.body.classList.remove("home")),document.querySelectorAll("table").forEach(i=>{if(!i.parentElement.classList.contains("table-responsive")){const r=document.createElement("div");r.className="table-responsive",r.style.overflowX="auto",r.style.margin="16px 0",i.parentNode.insertBefore(r,i),r.appendChild(i)}});const a=document.querySelector(".md-main-content");a&&a.classList.add("md-fade-in")},[t,n]),f.jsxs("div",{className:`layout ${t?"home":"non-home"}`,children:[f.jsx(E0,{}),f.jsx("main",{className:"md-main-content",children:e}),f.jsx(I0,{})]})},R0=()=>{const e=O.static("img/logo/homepage_background.png"),n=[{src:O.static("img/logo/hksar.png"),alt:"Hong Kong SAR"},{src:O.static("img/logo/rgc.png"),alt:"RGC"},{src:O.static("img/logo/nsfc.png"),alt:"NSFC"},{src:O.static("img/logo/hkjcct.png"),alt:"Hong Kong Jockey Club Charities Trust"}];return f.jsxs(f.Fragment,{children:[f.jsx("section",{className:"hero-section",style:{background:`linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%), url('${e}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",color:"white",height:"35vh",minHeight:"240px",maxHeight:"400px",width:"100vw",maxWidth:"100vw",display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:"32px 0",position:"relative",marginTop:"60px",marginLeft:"calc(-50vw + 50%)",marginRight:"calc(-50vw + 50%)",boxShadow:"inset 0 0 100px rgba(0, 0, 0, 0.1)",overflow:"visible"},children:f.jsx("div",{style:{textAlign:"center",width:"100%",maxWidth:"1200px",padding:"0 clamp(16px, 2.5vw, 32px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0 auto",wordWrap:"break-word",overflowWrap:"break-word",boxSizing:"border-box"},children:f.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:400,margin:0,lineHeight:1.5,color:"#334155",textShadow:"1px 1px 2px rgba(0,0,0,0.06)",textAlign:"center",width:"100%",display:"block",fontFamily:"'Georgia', 'Times New Roman', 'serif'",letterSpacing:"0.02em",wordWrap:"break-word",overflowWrap:"break-word",hyphens:"auto"},children:"Our mission is to advance AI and genomic technologies to enable personalized diagnosis and treatment for complex diseases, especially cancer and neuropsychiatric disorders like depression and schizophrenia. We focus on developing and combining AI with biological techniques, including reliable, explainable machine learning and single-cell spatial transcriptomics. Our research is highly interdisciplinary, spanning AI, data science, molecular biology, genetics, genomics, and neuroscience"})})}),f.jsxs("div",{className:"md-main-content",style:{marginTop:0,position:"relative",zIndex:2,paddingTop:0},children:[f.jsxs("section",{className:"lab-description-section",style:{margin:"24px 0 8px 0",position:"relative"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:600,margin:0,color:"#334155",position:"relative",textAlign:"center",lineHeight:1.6},children:f.jsxs("span",{style:{position:"relative",zIndex:1,background:"#f8f9fa",padding:0,lineHeight:1.6},children:["Our Laboratory combines",f.jsx("br",{}),"a computational biology lab (the Dry Lab) and a molecular biology lab (the Wet Lab)"]})})}),f.jsx("div",{style:{width:"100%",maxWidth:"800px",margin:"0 auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 10px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Dry Lab features a high-performance computing setup, including GPU and CPU clusters, large disk arrays, and filer servers"})})]}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",margin:"20px 0",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:O.static("img/data_center.jpg"),alt:"Data Center - CPU and GPU clusters",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:O.static("img/office_workspace.jpg"),alt:"Office Workspace - Computational Biology Lab",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]}),f.jsx("div",{className:"lab-description-text",style:{width:"100%",maxWidth:"800px",margin:"20px auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 20px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Wet Lab is equipped for molecular biology research and animal study, including high-throughput sequencers"})}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px",margin:"20px 0",width:"100%",maxWidth:"1200px",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:O.static("img/wet_lab1.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 1",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:O.static("img/wet_lab2.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 2",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:O.static("img/wet_lab3.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 3",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]})]}),f.jsx("section",{style:{margin:0,position:"relative",background:"#f8f9fa",padding:"16px 0"},children:f.jsxs("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("h2",{className:"funding-title",style:{fontSize:"1.5rem",fontWeight:600,margin:"0 0 12px 0",color:"#334155",textAlign:"center"},children:"Research Supported By"}),f.jsx("div",{className:"funding-partners",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px"},children:n.map((t,a)=>f.jsx("img",{src:t.src,alt:t.alt,style:{height:"40px",width:"auto",margin:"2px",display:"inline-block",filter:"grayscale(0%)",opacity:.9,transition:"opacity 0.3s ease"}},a))})]})})]})},M0=E.memo(function({children:e,variant:n="text",size:t="medium",active:a=!1,className:i="",onClick:r,style:o={},disabled:l=!1,type:s="button",...c}){const u=["ui-button",`ui-button--${n}`,`ui-button--${t}`,a&&"ui-button--active",l&&"ui-button--disabled",i].filter(Boolean).join(" ");return f.jsx("button",{type:s,className:u,onClick:r,style:o,disabled:l,...c,children:e})});M0.displayName="Button";const Kp=E.memo(function({children:e,className:n="",style:t={},elevated:a=!1,outlined:i=!1,...r}){const o=["ui-card",a&&"ui-card--elevated",i&&"ui-card--outlined",n].filter(Boolean).join(" ");return f.jsx("div",{className:o,style:t,...r,children:e})});Kp.displayName="Card";const Vt=E.memo(function({children:e,to:n,href:t,external:a=!1,variant:i="default",className:r="",...o}){const l=["ui-link",`ui-link--${i}`,r].filter(Boolean).join(" ");return t||a?f.jsx("a",{href:t||n,className:l,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,...o,children:e}):f.jsx(Na,{to:n,className:l,...o,children:e})});Vt.displayName="Link";const $p=E.memo(function({src:e,alt:n,className:t="",style:a={},lazy:i=!0,...r}){let o=e;e.startsWith("http")||(o=e.startsWith("/")?e:`/${e}`);const l=["ui-image",t].filter(Boolean).join(" ");return f.jsx("img",{src:o,alt:n,className:l,style:a,loading:i?"lazy":"eager",...r})});$p.displayName="Image";const Z0=E.memo(function({children:e,className:n="",style:t={},variant:a="default",background:i=!1,...r}){const o=["ui-section",`ui-section--${a}`,i&&"ui-section--background",n].filter(Boolean).join(" ");return f.jsx("section",{className:o,style:t,...r,children:e})});Z0.displayName="Section";const T0=E.memo(function({children:e,className:n="",style:t={},size:a="medium",...i}){const r=["ui-container",`ui-container--${a}`,n].filter(Boolean).join(" ");return f.jsx("div",{className:r,style:t,...i,children:e})});T0.displayName="Container";const D0=E.memo(function({isOpen:e,onClose:n,title:t,children:a,size:i="medium",closeOnBackdrop:r=!0,className:o=""}){if(E.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),E.useEffect(()=>{const u=d=>{d.key==="Escape"&&e&&n()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e,n]),!e)return null;const l=u=>{r&&u.target===u.currentTarget&&n()},s=["ui-modal",`ui-modal--${i}`,o].filter(Boolean).join(" "),c=f.jsx("div",{className:"ui-modal__backdrop",onClick:l,children:f.jsxs("div",{className:s,children:[(t||r)&&f.jsxs("div",{className:"ui-modal__header",children:[t&&f.jsx("h2",{className:"ui-modal__title",children:t}),r&&f.jsx("button",{className:"ui-modal__close",onClick:n,"aria-label":"Close modal",children:f.jsx("span",{className:"material-icons",children:"close"})})]}),f.jsx("div",{className:"ui-modal__content",children:a})]})});return Tp.createPortal(c,document.body)});D0.displayName="Modal";const j0=E.memo(function({options:e,value:n,onChange:t,placeholder:a="请选择...",disabled:i=!1,className:r="",variant:o="default"}){const[l,s]=E.useState(!1),c=E.useRef(null);E.useEffect(()=>{const p=w=>{c.current&&!c.current.contains(w.target)&&s(!1)};return l&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[l]);const u=e.find(p=>p.value===n),d=p=>{var w;(w=e.find(x=>x.value===p))!=null&&w.disabled||(t(p),s(!1))},h=["ui-dropdown",`ui-dropdown--${o}`,l&&"ui-dropdown--open",i&&"ui-dropdown--disabled",r].filter(Boolean).join(" ");return f.jsxs("div",{className:h,ref:c,children:[f.jsxs("button",{className:"ui-dropdown__trigger",onClick:()=>!i&&s(!l),disabled:i,type:"button",children:[f.jsx("span",{className:"ui-dropdown__selected",children:u?f.jsxs(f.Fragment,{children:[u.icon&&f.jsx("span",{className:"material-icons ui-dropdown__icon",children:u.icon}),u.label]}):f.jsx("span",{className:"ui-dropdown__placeholder",children:a})}),f.jsx("span",{className:"material-icons ui-dropdown__arrow",children:l?"expand_less":"expand_more"})]}),l&&f.jsx("div",{className:"ui-dropdown__menu",children:e.map(p=>f.jsxs("button",{className:`ui-dropdown__option ${p.value===n?"ui-dropdown__option--selected":""} ${p.disabled?"ui-dropdown__option--disabled":""}`,onClick:()=>d(p.value),disabled:p.disabled,type:"button",children:[p.icon&&f.jsx("span",{className:"material-icons ui-dropdown__option-icon",children:p.icon}),p.label]},p.value))})]})});j0.displayName="Dropdown";const H0=E.memo(function({tabs:e,defaultTab:n,onChange:t,variant:a="default",className:i=""}){var r,o;const[l,s]=E.useState(n||((r=e[0])==null?void 0:r.id)||""),c=h=>{const p=e.find(w=>w.id===h);p&&!p.disabled&&(s(h),t==null||t(h))},u=(o=e.find(h=>h.id===l))==null?void 0:o.content,d=["ui-tabs",`ui-tabs--${a}`,i].filter(Boolean).join(" ");return f.jsxs("div",{className:d,children:[f.jsx("div",{className:"ui-tabs__header",children:e.map(h=>f.jsxs("button",{className:`ui-tabs__tab ${l===h.id?"ui-tabs__tab--active":""} ${h.disabled?"ui-tabs__tab--disabled":""}`,onClick:()=>c(h.id),disabled:h.disabled,type:"button",children:[h.icon&&f.jsx("span",{className:"material-icons ui-tabs__tab-icon",children:h.icon}),h.label]},h.id))}),f.jsx("div",{className:"ui-tabs__content",children:u})]})});H0.displayName="Tabs";function _0(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const z0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,J0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,B0={};function ku(e,n){return(B0.jsx?J0:z0).test(e)}const U0=/[ \t\n\f\r]/g;function F0(e){return typeof e=="object"?e.type==="text"?Cu(e.value):!1:Cu(e)}function Cu(e){return e.replace(U0,"")===""}class pi{constructor(n,t,a){this.normal=t,this.property=n,a&&(this.space=a)}}pi.prototype.normal={};pi.prototype.property={};pi.prototype.space=void 0;function qp(e,n){const t={},a={};for(const i of e)Object.assign(t,i.property),Object.assign(a,i.normal);return new pi(t,a,n)}function El(e){return e.toLowerCase()}class Je{constructor(n,t){this.attribute=t,this.property=n}}Je.prototype.attribute="";Je.prototype.booleanish=!1;Je.prototype.boolean=!1;Je.prototype.commaOrSpaceSeparated=!1;Je.prototype.commaSeparated=!1;Je.prototype.defined=!1;Je.prototype.mustUseProperty=!1;Je.prototype.number=!1;Je.prototype.overloadedBoolean=!1;Je.prototype.property="";Je.prototype.spaceSeparated=!1;Je.prototype.space=void 0;let O0=0;const J=St(),ge=St(),Il=St(),N=St(),q=St(),Qt=St(),Ue=St();function St(){return 2**++O0}const Wl=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:ge,commaOrSpaceSeparated:Ue,commaSeparated:Qt,number:N,overloadedBoolean:Il,spaceSeparated:q},Symbol.toStringTag,{value:"Module"})),Ao=Object.keys(Wl);class js extends Je{constructor(n,t,a,i){let r=-1;if(super(n,t),Pu(this,"space",i),typeof a=="number")for(;++r<Ao.length;){const o=Ao[r];Pu(this,Ao[r],(a&Wl[o])===Wl[o])}}}js.prototype.defined=!0;function Pu(e,n,t){t&&(e[n]=t)}function ca(e){const n={},t={};for(const[a,i]of Object.entries(e.properties)){const r=new js(a,e.transform(e.attributes||{},a),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(r.mustUseProperty=!0),n[a]=r,t[El(a)]=a,t[El(r.attribute)]=a}return new pi(n,t,e.space)}const eh=ca({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:N,ariaColIndex:N,ariaColSpan:N,ariaControls:q,ariaCurrent:null,ariaDescribedBy:q,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:q,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:q,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:q,ariaLevel:N,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:q,ariaPlaceholder:null,ariaPosInSet:N,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:q,ariaRowCount:N,ariaRowIndex:N,ariaRowSpan:N,ariaSelected:ge,ariaSetSize:N,ariaSort:null,ariaValueMax:N,ariaValueMin:N,ariaValueNow:N,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function nh(e,n){return n in e?e[n]:n}function th(e,n){return nh(e,n.toLowerCase())}const G0=ca({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qt,acceptCharset:q,accessKey:q,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:q,autoFocus:J,autoPlay:J,blocking:q,capture:null,charSet:null,checked:J,cite:null,className:q,cols:N,colSpan:null,content:null,contentEditable:ge,controls:J,controlsList:q,coords:N|Qt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:Il,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:q,height:N,hidden:Il,high:N,href:null,hrefLang:null,htmlFor:q,httpEquiv:q,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:q,itemRef:q,itemScope:J,itemType:q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:N,manifest:null,max:null,maxLength:N,media:null,method:null,min:null,minLength:N,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:N,pattern:null,ping:q,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:q,required:J,reversed:J,rows:N,rowSpan:N,sandbox:q,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:N,sizes:null,slot:null,span:N,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:N,step:null,style:null,tabIndex:N,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:ge,width:N,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:q,axis:null,background:null,bgColor:null,border:N,borderColor:null,bottomMargin:N,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:N,leftMargin:N,link:null,longDesc:null,lowSrc:null,marginHeight:N,marginWidth:N,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:N,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:N,valueType:null,version:null,vAlign:null,vLink:null,vSpace:N,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:N,security:null,unselectable:null},space:"html",transform:th}),X0=ca({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ue,accentHeight:N,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:N,amplitude:N,arabicForm:null,ascent:N,attributeName:null,attributeType:null,azimuth:N,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:N,by:null,calcMode:null,capHeight:N,className:q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:N,diffuseConstant:N,direction:null,display:null,dur:null,divisor:N,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:N,enableBackground:null,end:null,event:null,exponent:N,externalResourcesRequired:null,fill:null,fillOpacity:N,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Qt,g2:Qt,glyphName:Qt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:N,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:N,horizOriginX:N,horizOriginY:N,id:null,ideographic:N,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:N,k:N,k1:N,k2:N,k3:N,k4:N,kernelMatrix:Ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:N,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:N,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:N,overlineThickness:N,paintOrder:null,panose1:null,path:null,pathLength:N,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:N,pointsAtY:N,pointsAtZ:N,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ue,rev:Ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ue,requiredFeatures:Ue,requiredFonts:Ue,requiredFormats:Ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:N,specularExponent:N,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:N,strikethroughThickness:N,string:null,stroke:null,strokeDashArray:Ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:N,strokeOpacity:N,strokeWidth:null,style:null,surfaceScale:N,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ue,tabIndex:N,tableValues:null,target:null,targetX:N,targetY:N,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:N,underlineThickness:N,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:N,values:null,vAlphabetic:N,vMathematical:N,vectorEffect:null,vHanging:N,vIdeographic:N,version:null,vertAdvY:N,vertOriginX:N,vertOriginY:N,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:N,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:nh}),ah=ca({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),ih=ca({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:th}),rh=ca({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Y0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},V0=/[A-Z]/g,Lu=/-[a-z]/g,Q0=/^data[-\w.:]+$/i;function K0(e,n){const t=El(n);let a=n,i=Je;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Q0.test(n)){if(n.charAt(4)==="-"){const r=n.slice(5).replace(Lu,q0);a="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=n.slice(4);if(!Lu.test(r)){let o=r.replace(V0,$0);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=js}return new i(a,n)}function $0(e){return"-"+e.toLowerCase()}function q0(e){return e.charAt(1).toUpperCase()}const eb=qp([eh,G0,ah,ih,rh],"html"),Hs=qp([eh,X0,ah,ih,rh],"svg");function nb(e){return e.join(" ").trim()}var _s={},Nu=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,tb=/\n/g,ab=/^\s*/,ib=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rb=/^:\s*/,ob=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,lb=/^[;\s]*/,sb=/^\s+|\s+$/g,cb=`
`,Eu="/",Iu="*",st="",ub="comment",db="declaration";function fb(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,a=1;function i(w){var x=w.match(tb);x&&(t+=x.length);var C=w.lastIndexOf(cb);a=~C?w.length-C:a+w.length}function r(){var w={line:t,column:a};return function(x){return x.position=new o(w),c(),x}}function o(w){this.start=w,this.end={line:t,column:a},this.source=n.source}o.prototype.content=e;function l(w){var x=new Error(n.source+":"+t+":"+a+": "+w);if(x.reason=w,x.filename=n.source,x.line=t,x.column=a,x.source=e,!n.silent)throw x}function s(w){var x=w.exec(e);if(x){var C=x[0];return i(C),e=e.slice(C.length),x}}function c(){s(ab)}function u(w){var x;for(w=w||[];x=d();)x!==!1&&w.push(x);return w}function d(){var w=r();if(!(Eu!=e.charAt(0)||Iu!=e.charAt(1))){for(var x=2;st!=e.charAt(x)&&(Iu!=e.charAt(x)||Eu!=e.charAt(x+1));)++x;if(x+=2,st===e.charAt(x-1))return l("End of comment missing");var C=e.slice(2,x-2);return a+=2,i(C),e=e.slice(x),a+=2,w({type:ub,comment:C})}}function h(){var w=r(),x=s(ib);if(x){if(d(),!s(rb))return l("property missing ':'");var C=s(ob),g=w({type:db,property:Wu(x[0].replace(Nu,st)),value:C?Wu(C[0].replace(Nu,st)):st});return s(lb),g}}function p(){var w=[];u(w);for(var x;x=h();)x!==!1&&(w.push(x),u(w));return w}return c(),p()}function Wu(e){return e?e.replace(sb,st):st}var pb=fb,hb=Ki&&Ki.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_s,"__esModule",{value:!0});_s.default=mb;const gb=hb(pb);function mb(e,n){let t=null;if(!e||typeof e!="string")return t;const a=(0,gb.default)(e),i=typeof n=="function";return a.forEach(r=>{if(r.type!=="declaration")return;const{property:o,value:l}=r;i?n(o,l,r):l&&(t=t||{},t[o]=l)}),t}var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.camelCase=void 0;var yb=/^--[a-zA-Z0-9_-]+$/,bb=/-([a-z])/g,vb=/^[^-]+$/,wb=/^-(webkit|moz|ms|o|khtml)-/,xb=/^-(ms)-/,Ab=function(e){return!e||vb.test(e)||yb.test(e)},Sb=function(e,n){return n.toUpperCase()},Ru=function(e,n){return"".concat(n,"-")},kb=function(e,n){return n===void 0&&(n={}),Ab(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(xb,Ru):e=e.replace(wb,Ru),e.replace(bb,Sb))};Ur.camelCase=kb;var Cb=Ki&&Ki.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Pb=Cb(_s),Lb=Ur;function Rl(e,n){var t={};return!e||typeof e!="string"||(0,Pb.default)(e,function(a,i){a&&i&&(t[(0,Lb.camelCase)(a,n)]=i)}),t}Rl.default=Rl;var Nb=Rl;const Eb=zl(Nb),oh=lh("end"),zs=lh("start");function lh(e){return n;function n(t){const a=t&&t.position&&t.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function Ib(e){const n=zs(e),t=oh(e);if(n&&t)return{start:n,end:t}}function Ha(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Mu(e.position):"start"in e||"end"in e?Mu(e):"line"in e||"column"in e?Ml(e):""}function Ml(e){return Zu(e&&e.line)+":"+Zu(e&&e.column)}function Mu(e){return Ml(e&&e.start)+"-"+Ml(e&&e.end)}function Zu(e){return e&&typeof e=="number"?e:1}class Ie extends Error{constructor(n,t,a){super(),typeof t=="string"&&(a=t,t=void 0);let i="",r={},o=!1;if(t&&("line"in t&&"column"in t?r={place:t}:"start"in t&&"end"in t?r={place:t}:"type"in t?r={ancestors:[t],place:t.position}:r={...t}),typeof n=="string"?i=n:!r.cause&&n&&(o=!0,i=n.message,r.cause=n),!r.ruleId&&!r.source&&typeof a=="string"){const s=a.indexOf(":");s===-1?r.ruleId=a:(r.source=a.slice(0,s),r.ruleId=a.slice(s+1))}if(!r.place&&r.ancestors&&r.ancestors){const s=r.ancestors[r.ancestors.length-1];s&&(r.place=s.position)}const l=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ha(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=o&&r.cause&&typeof r.cause.stack=="string"?r.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ie.prototype.file="";Ie.prototype.name="";Ie.prototype.reason="";Ie.prototype.message="";Ie.prototype.stack="";Ie.prototype.column=void 0;Ie.prototype.line=void 0;Ie.prototype.ancestors=void 0;Ie.prototype.cause=void 0;Ie.prototype.fatal=void 0;Ie.prototype.place=void 0;Ie.prototype.ruleId=void 0;Ie.prototype.source=void 0;const Js={}.hasOwnProperty,Wb=new Map,Rb=/[A-Z]/g,Mb=new Set(["table","tbody","thead","tfoot","tr"]),Zb=new Set(["td","th"]),sh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Tb(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let a;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=Ub(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=Bb(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:a,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Hs:eb,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},r=ch(i,e,void 0);return r&&typeof r!="string"?r:i.create(e,i.Fragment,{children:r||void 0},void 0)}function ch(e,n,t){if(n.type==="element")return Db(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return jb(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return _b(e,n,t);if(n.type==="mdxjsEsm")return Hb(e,n);if(n.type==="root")return zb(e,n,t);if(n.type==="text")return Jb(e,n)}function Db(e,n,t){const a=e.schema;let i=a;n.tagName.toLowerCase()==="svg"&&a.space==="html"&&(i=Hs,e.schema=i),e.ancestors.push(n);const r=dh(e,n.tagName,!1),o=Fb(e,n);let l=Us(e,n);return Mb.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!F0(s):!0})),uh(e,o,r,n),Bs(o,l),e.ancestors.pop(),e.schema=a,e.create(n,r,o,t)}function jb(e,n){if(n.data&&n.data.estree&&e.evaluater){const t=n.data.estree.body[0];return t.type,e.evaluater.evaluateExpression(t.expression)}ri(e,n.position)}function Hb(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ri(e,n.position)}function _b(e,n,t){const a=e.schema;let i=a;n.name==="svg"&&a.space==="html"&&(i=Hs,e.schema=i),e.ancestors.push(n);const r=n.name===null?e.Fragment:dh(e,n.name,!0),o=Ob(e,n),l=Us(e,n);return uh(e,o,r,n),Bs(o,l),e.ancestors.pop(),e.schema=a,e.create(n,r,o,t)}function zb(e,n,t){const a={};return Bs(a,Us(e,n)),e.create(n,e.Fragment,a,t)}function Jb(e,n){return n.value}function uh(e,n,t,a){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=a)}function Bs(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function Bb(e,n,t){return a;function a(i,r,o,l){const s=Array.isArray(o.children)?t:n;return l?s(r,o,l):s(r,o)}}function Ub(e,n){return t;function t(a,i,r,o){const l=Array.isArray(r.children),s=zs(a);return n(i,r,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Fb(e,n){const t={};let a,i;for(i in n.properties)if(i!=="children"&&Js.call(n.properties,i)){const r=Gb(e,i,n.properties[i]);if(r){const[o,l]=r;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Zb.has(n.tagName)?a=l:t[o]=l}}if(a){const r=t.style||(t.style={});r[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return t}function Ob(e,n){const t={};for(const a of n.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const i=a.data.estree.body[0];i.type;const r=i.expression;r.type;const o=r.properties[0];o.type,Object.assign(t,e.evaluater.evaluateExpression(o.argument))}else ri(e,n.position);else{const i=a.name;let r;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const o=a.value.data.estree.body[0];o.type,r=e.evaluater.evaluateExpression(o.expression)}else ri(e,n.position);else r=a.value===null?!0:a.value;t[i]=r}return t}function Us(e,n){const t=[];let a=-1;const i=e.passKeys?new Map:Wb;for(;++a<n.children.length;){const r=n.children[a];let o;if(e.passKeys){const s=r.type==="element"?r.tagName:r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement"?r.name:void 0;if(s){const c=i.get(s)||0;o=s+"-"+c,i.set(s,c+1)}}const l=ch(e,r,o);l!==void 0&&t.push(l)}return t}function Gb(e,n,t){const a=K0(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=a.commaSeparated?_0(t):nb(t)),a.property==="style"){let i=typeof t=="object"?t:Xb(e,String(t));return e.stylePropertyNameCase==="css"&&(i=Yb(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&a.space?Y0[a.property]||a.property:a.attribute,t]}}function Xb(e,n){try{return Eb(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const a=t,i=new Ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=sh+"#cannot-parse-style-attribute",i}}function dh(e,n,t){let a;if(!t)a={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let r=-1,o;for(;++r<i.length;){const l=ku(i[r])?{type:"Identifier",name:i[r]}:{type:"Literal",value:i[r]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(r&&l.type==="Literal"),optional:!1}:l}a=o}else a=ku(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(a.type==="Literal"){const i=a.value;return Js.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(a);ri(e)}function ri(e,n){const t=new Ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=sh+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Yb(e){const n={};let t;for(t in e)Js.call(e,t)&&(n[Vb(t)]=e[t]);return n}function Vb(e){let n=e.replace(Rb,Qb);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Qb(e){return"-"+e.toLowerCase()}const So={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Kb={};function $b(e,n){const t=Kb,a=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return fh(e,a,i)}function fh(e,n,t){if(qb(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Tu(e.children,n,t)}return Array.isArray(e)?Tu(e,n,t):""}function Tu(e,n,t){const a=[];let i=-1;for(;++i<e.length;)a[i]=fh(e[i],n,t);return a.join("")}function qb(e){return!!(e&&typeof e=="object")}const Du=document.createElement("i");function Fs(e){const n="&"+e+";";Du.innerHTML=n;const t=Du.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Sn(e,n,t,a){const i=e.length;let r=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,a.length<1e4)o=Array.from(a),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);r<a.length;)o=a.slice(r,r+1e4),o.unshift(n,0),e.splice(...o),r+=1e4,n+=1e4}function $e(e,n){return e.length>0?(Sn(e,e.length,0,n),e):n}const ju={}.hasOwnProperty;function e1(e){const n={};let t=-1;for(;++t<e.length;)n1(n,e[t]);return n}function n1(e,n){let t;for(t in n){const a=(ju.call(e,t)?e[t]:void 0)||(e[t]={}),i=n[t];let r;if(i)for(r in i){ju.call(a,r)||(a[r]=[]);const o=i[r];t1(a[r],Array.isArray(o)?o:o?[o]:[])}}}function t1(e,n){let t=-1;const a=[];for(;++t<n.length;)(n[t].add==="after"?e:a).push(n[t]);Sn(e,0,0,a)}function ph(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Kt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Os(e){return e!==null&&e<-2}function Hu(e){return e===-2||e===-1||e===32}function ne(e,n,t,a){const i=a?a-1:Number.POSITIVE_INFINITY;let r=0;return o;function o(s){return Hu(s)?(e.enter(t),l(s)):n(s)}function l(s){return Hu(s)&&r++<i?(e.consume(s),l):(e.exit(t),n(s))}}const a1={tokenize:i1};function i1(e){const n=e.attempt(this.parser.constructs.contentInitial,a,i);let t;return n;function a(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),ne(e,n,"linePrefix")}function i(l){return e.enter("paragraph"),r(l)}function r(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Os(l)?(e.consume(l),e.exit("chunkText"),r):(e.consume(l),o)}}const r1={tokenize:o1},_u={tokenize:l1};function o1(e){const n=this,t=[];let a=0,i,r,o;return l;function l(b){if(a<t.length){const S=t[a];return n.containerState=S[1],e.attempt(S[0].continuation,s,c)(b)}return c(b)}function s(b){if(a++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const S=n.events.length;let L=S,A;for(;L--;)if(n.events[L][0]==="exit"&&n.events[L][1].type==="chunkFlow"){A=n.events[L][1].end;break}g(a);let I=S;for(;I<n.events.length;)n.events[I][1].end={...A},I++;return Sn(n.events,L+1,0,n.events.slice(S)),n.events.length=I,c(b)}return l(b)}function c(b){if(a===t.length){if(!i)return h(b);if(i.currentConstruct&&i.currentConstruct.concrete)return w(b);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(_u,u,d)(b)}function u(b){return i&&m(),g(a),h(b)}function d(b){return n.parser.lazy[n.now().line]=a!==t.length,o=n.now().offset,w(b)}function h(b){return n.containerState={},e.attempt(_u,p,w)(b)}function p(b){return a++,t.push([n.currentConstruct,n.containerState]),h(b)}function w(b){if(b===null){i&&m(),g(0),e.consume(b);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:r}),x(b)}function x(b){if(b===null){C(e.exit("chunkFlow"),!0),g(0),e.consume(b);return}return Os(b)?(e.consume(b),C(e.exit("chunkFlow")),a=0,n.interrupt=void 0,l):(e.consume(b),x)}function C(b,S){const L=n.sliceStream(b);if(S&&L.push(null),b.previous=r,r&&(r.next=b),r=b,i.defineSkip(b.start),i.write(L),n.parser.lazy[b.start.line]){let A=i.events.length;for(;A--;)if(i.events[A][1].start.offset<o&&(!i.events[A][1].end||i.events[A][1].end.offset>o))return;const I=n.events.length;let M=I,_,T;for(;M--;)if(n.events[M][0]==="exit"&&n.events[M][1].type==="chunkFlow"){if(_){T=n.events[M][1].end;break}_=!0}for(g(a),A=I;A<n.events.length;)n.events[A][1].end={...T},A++;Sn(n.events,M+1,0,n.events.slice(I)),n.events.length=A}}function g(b){let S=t.length;for(;S-- >b;){const L=t[S];n.containerState=L[1],L[0].exit.call(n,e)}t.length=b}function m(){i.write([null]),r=void 0,i=void 0,n.containerState._closeFlow=void 0}}function l1(e,n,t){return ne(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function s1(e){return e!==null&&(e<0||e===32)}const c1=hh(new RegExp("\\p{P}|\\p{S}","u")),u1=hh(/\s/);function hh(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function zu(e){if(e===null||s1(e)||u1(e))return 1;if(c1(e))return 2}function Gs(e,n,t){const a=[];let i=-1;for(;++i<e.length;){const r=e[i].resolveAll;r&&!a.includes(r)&&(n=r(n,t),a.push(r))}return n}const Zl={name:"attention",resolveAll:d1,tokenize:f1};function d1(e,n){let t=-1,a,i,r,o,l,s,c,u;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(a=t;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&n.sliceSerialize(e[a][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[a][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[a][1].end.offset-e[a][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d={...e[a][1].end},h={...e[t][1].start};Ju(d,-s),Ju(h,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[a][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},r={type:s>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[t][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[a][1].end={...o.start},e[t][1].start={...l.end},c=[],e[a][1].end.offset-e[a][1].start.offset&&(c=$e(c,[["enter",e[a][1],n],["exit",e[a][1],n]])),c=$e(c,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",r,n]]),c=$e(c,Gs(n.parser.constructs.insideSpan.null,e.slice(a+1,t),n)),c=$e(c,[["exit",r,n],["enter",l,n],["exit",l,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(u=2,c=$e(c,[["enter",e[t][1],n],["exit",e[t][1],n]])):u=0,Sn(e,a-1,t-a+3,c),t=a+c.length-u-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function f1(e,n){const t=this.parser.constructs.attentionMarkers.null,a=this.previous,i=zu(a);let r;return o;function o(s){return r=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===r)return e.consume(s),l;const c=e.exit("attentionSequence"),u=zu(s),d=!u||u===2&&i||t.includes(s),h=!i||i===2&&u||t.includes(a);return c._open=!!(r===42?d:d&&(i||!h)),c._close=!!(r===42?h:h&&(u||!d)),n(s)}}function Ju(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const wn=ua(/[A-Za-z]/),un=ua(/[\dA-Za-z]/),p1=ua(/[#-'*+\--9=?A-Z^-~]/);function h1(e){return e!==null&&(e<32||e===127)}const Tl=ua(/\d/),g1=ua(/[\dA-Fa-f]/),m1=ua(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function nn(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}function ua(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}const y1={name:"autolink",tokenize:b1};function b1(e,n,t){let a=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r}function r(p){return wn(p)?(e.consume(p),o):p===64?t(p):c(p)}function o(p){return p===43||p===45||p===46||un(p)?(a=1,l(p)):c(p)}function l(p){return p===58?(e.consume(p),a=0,s):(p===43||p===45||p===46||un(p))&&a++<32?(e.consume(p),l):(a=0,c(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||h1(p)?t(p):(e.consume(p),s)}function c(p){return p===64?(e.consume(p),u):p1(p)?(e.consume(p),c):t(p)}function u(p){return un(p)?d(p):t(p)}function d(p){return p===46?(e.consume(p),a=0,u):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):h(p)}function h(p){if((p===45||un(p))&&a++<63){const w=p===45?h:d;return e.consume(p),w}return t(p)}}const Fr={partial:!0,tokenize:v1};function v1(e,n,t){return a;function a(r){return K(r)?ne(e,i,"linePrefix")(r):i(r)}function i(r){return r===null||B(r)?n(r):t(r)}}const gh={continuation:{tokenize:x1},exit:A1,name:"blockQuote",tokenize:w1};function w1(e,n,t){const a=this;return i;function i(o){if(o===62){const l=a.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),r}return t(o)}function r(o){return K(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function x1(e,n,t){const a=this;return i;function i(o){return K(o)?ne(e,r,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):r(o)}function r(o){return e.attempt(gh,n,t)(o)}}function A1(e){e.exit("blockQuote")}const mh={name:"characterEscape",tokenize:S1};function S1(e,n,t){return a;function a(r){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(r),e.exit("escapeMarker"),i}function i(r){return m1(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(r)}}const yh={name:"characterReference",tokenize:k1};function k1(e,n,t){const a=this;let i=0,r,o;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),r=31,o=un,u(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,o=g1,u):(e.enter("characterReferenceValue"),r=7,o=Tl,u(d))}function u(d){if(d===59&&i){const h=e.exit("characterReferenceValue");return o===un&&!Fs(a.sliceSerialize(h))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(d)&&i++<r?(e.consume(d),u):t(d)}}const Bu={partial:!0,tokenize:P1},Uu={concrete:!0,name:"codeFenced",tokenize:C1};function C1(e,n,t){const a=this,i={partial:!0,tokenize:L};let r=0,o=0,l;return s;function s(A){return c(A)}function c(A){const I=a.events[a.events.length-1];return r=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,l=A,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(A)}function u(A){return A===l?(o++,e.consume(A),u):o<3?t(A):(e.exit("codeFencedFenceSequence"),K(A)?ne(e,d,"whitespace")(A):d(A))}function d(A){return A===null||B(A)?(e.exit("codeFencedFence"),a.interrupt?n(A):e.check(Bu,x,S)(A)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(A))}function h(A){return A===null||B(A)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(A)):K(A)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ne(e,p,"whitespace")(A)):A===96&&A===l?t(A):(e.consume(A),h)}function p(A){return A===null||B(A)?d(A):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),w(A))}function w(A){return A===null||B(A)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(A)):A===96&&A===l?t(A):(e.consume(A),w)}function x(A){return e.attempt(i,S,C)(A)}function C(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),g}function g(A){return r>0&&K(A)?ne(e,m,"linePrefix",r+1)(A):m(A)}function m(A){return A===null||B(A)?e.check(Bu,x,S)(A):(e.enter("codeFlowValue"),b(A))}function b(A){return A===null||B(A)?(e.exit("codeFlowValue"),m(A)):(e.consume(A),b)}function S(A){return e.exit("codeFenced"),n(A)}function L(A,I,M){let _=0;return T;function T(F){return A.enter("lineEnding"),A.consume(F),A.exit("lineEnding"),D}function D(F){return A.enter("codeFencedFence"),K(F)?ne(A,j,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):j(F)}function j(F){return F===l?(A.enter("codeFencedFenceSequence"),Y(F)):M(F)}function Y(F){return F===l?(_++,A.consume(F),Y):_>=o?(A.exit("codeFencedFenceSequence"),K(F)?ne(A,le,"whitespace")(F):le(F)):M(F)}function le(F){return F===null||B(F)?(A.exit("codeFencedFence"),I(F)):M(F)}}}function P1(e,n,t){const a=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r)}function r(o){return a.parser.lazy[a.now().line]?t(o):n(o)}}const ko={name:"codeIndented",tokenize:N1},L1={partial:!0,tokenize:E1};function N1(e,n,t){const a=this;return i;function i(c){return e.enter("codeIndented"),ne(e,r,"linePrefix",5)(c)}function r(c){const u=a.events[a.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?o(c):t(c)}function o(c){return c===null?s(c):B(c)?e.attempt(L1,o,s)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||B(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function s(c){return e.exit("codeIndented"),n(c)}}function E1(e,n,t){const a=this;return i;function i(o){return a.parser.lazy[a.now().line]?t(o):B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):ne(e,r,"linePrefix",5)(o)}function r(o){const l=a.events[a.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):B(o)?i(o):t(o)}}const I1={name:"codeText",previous:R1,resolve:W1,tokenize:M1};function W1(e){let n=e.length-4,t=3,a,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(a=t;++a<n;)if(e[a][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(a=t-1,n++;++a<=n;)i===void 0?a!==n&&e[a][1].type!=="lineEnding"&&(i=a):(a===n||e[a][1].type==="lineEnding")&&(e[i][1].type="codeTextData",a!==i+2&&(e[i][1].end=e[a-1][1].end,e.splice(i+2,a-i-2),n-=a-i-2,a=i+2),i=void 0);return e}function R1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function M1(e,n,t){let a=0,i,r;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),l(d)}function l(d){return d===96?(e.consume(d),a++,l):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(r=e.enter("codeTextSequence"),i=0,u(d)):B(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||B(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),c)}function u(d){return d===96?(e.consume(d),i++,u):i===a?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(r.type="codeTextData",c(d))}}class Z1{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const a=t??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(n,a):n>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(n,t,a){const i=t||0;this.setCursor(Math.trunc(n));const r=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return a&&Aa(this.left,a),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Aa(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Aa(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Aa(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Aa(this.left,t.reverse())}}}function Aa(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function bh(e){const n={};let t=-1,a,i,r,o,l,s,c;const u=new Z1(e);for(;++t<u.length;){for(;t in n;)t=n[t];if(a=u.get(t),t&&a[1].type==="chunkFlow"&&u.get(t-1)[1].type==="listItemPrefix"&&(s=a[1]._tokenizer.events,r=0,r<s.length&&s[r][1].type==="lineEndingBlank"&&(r+=2),r<s.length&&s[r][1].type==="content"))for(;++r<s.length&&s[r][1].type!=="content";)s[r][1].type==="chunkText"&&(s[r][1]._isInFirstContentOfListItem=!0,r++);if(a[0]==="enter")a[1].contentType&&(Object.assign(n,T1(u,t)),t=n[t],c=!0);else if(a[1]._container){for(r=t,i=void 0;r--;)if(o=u.get(r),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=r);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(a[1].end={...u.get(i)[1].start},l=u.slice(i,t),l.unshift(a),u.splice(i,t-i+1,l))}}return Sn(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function T1(e,n){const t=e.get(n)[1],a=e.get(n)[2];let i=n-1;const r=[];let o=t._tokenizer;o||(o=a.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,s=[],c={};let u,d,h=-1,p=t,w=0,x=0;const C=[x];for(;p;){for(;e.get(++i)[1]!==p;);r.push(i),p._tokenizer||(u=a.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=t;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(x=h+1,C.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):C.pop(),h=C.length;h--;){const g=l.slice(C[h],C[h+1]),m=r.pop();s.push([m,m+g.length-1]),e.splice(m,2,g)}for(s.reverse(),h=-1;++h<s.length;)c[w+s[h][0]]=w+s[h][1],w+=s[h][1]-s[h][0]-1;return c}const D1={resolve:H1,tokenize:_1},j1={partial:!0,tokenize:z1};function H1(e){return bh(e),e}function _1(e,n){let t;return a;function a(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?r(l):B(l)?e.check(j1,o,r)(l):(e.consume(l),i)}function r(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function z1(e,n,t){const a=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),ne(e,r,"linePrefix")}function r(o){if(o===null||B(o))return t(o);const l=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(a.parser.constructs.flow,t,n)(o)}}function Fu(e){return e!==null&&(e<32||e===127)}function J1(e){return e!==null&&e<-2}function B1(e){return e!==null&&(e<0||e===32)}function vh(e,n,t,a,i,r,o,l,s){const c=s||Number.POSITIVE_INFINITY;let u=0;return d;function d(g){return g===60?(e.enter(a),e.enter(i),e.enter(r),e.consume(g),e.exit(r),h):g===null||g===32||g===41||Fu(g)?t(g):(e.enter(a),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),x(g))}function h(g){return g===62?(e.enter(r),e.consume(g),e.exit(r),e.exit(i),e.exit(a),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(l),h(g)):g===null||g===60||J1(g)?t(g):(e.consume(g),g===92?w:p)}function w(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function x(g){return!u&&(g===null||g===41||B1(g))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(a),n(g)):u<c&&g===40?(e.consume(g),u++,x):g===41?(e.consume(g),u--,x):g===null||g===32||g===40||Fu(g)?t(g):(e.consume(g),g===92?C:x)}function C(g){return g===40||g===41||g===92?(e.consume(g),x):x(g)}}function wh(e,n,t,a,i,r){const o=this;let l=0,s;return c;function c(p){return e.enter(a),e.enter(i),e.consume(p),e.exit(i),e.enter(r),u}function u(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(r),e.enter(i),e.consume(p),e.exit(i),e.exit(a),n):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||B(p)||l++>999?(e.exit("chunkString"),u(p)):(e.consume(p),s||(s=!K(p)),p===92?h:d)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,d):d(p)}}function Ou(e){return e!==null&&e<-2}function xh(e,n,t,a,i,r){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(a),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,s):t(h)}function s(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(a),n):(e.enter(r),c(h))}function c(h){return h===o?(e.exit(r),s(o)):h===null?t(h):Ou(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),ne(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(h))}function u(h){return h===o||h===null||Ou(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?d:u)}function d(h){return h===o||h===92?(e.consume(h),u):u(h)}}function U1(e){return e!==null&&e<-2}function F1(e){return e===-2||e===-1||e===32}function _a(e,n){let t;return a;function a(i){return U1(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,a):F1(i)?ne(e,a,t?"linePrefix":"lineSuffix")(i):n(i)}}const O1={name:"definition",tokenize:X1},G1={partial:!0,tokenize:Y1};function X1(e,n,t){const a=this;let i;return r;function r(p){return e.enter("definition"),o(p)}function o(p){return wh.call(a,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=Kt(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return nn(p)?_a(e,c)(p):c(p)}function c(p){return vh(e,u,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function u(p){return e.attempt(G1,d,d)(p)}function d(p){return K(p)?ne(e,h,"whitespace")(p):h(p)}function h(p){return p===null||B(p)?(e.exit("definition"),a.parser.defined.push(i),n(p)):t(p)}}function Y1(e,n,t){return a;function a(l){return nn(l)?_a(e,i)(l):t(l)}function i(l){return xh(e,r,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function r(l){return K(l)?ne(e,o,"whitespace")(l):o(l)}function o(l){return l===null||B(l)?n(l):t(l)}}const V1={name:"hardBreakEscape",tokenize:Q1};function Q1(e,n,t){return a;function a(r){return e.enter("hardBreakEscape"),e.consume(r),i}function i(r){return B(r)?(e.exit("hardBreakEscape"),n(r)):t(r)}}const K1={name:"headingAtx",resolve:$1,tokenize:q1};function $1(e,n){let t=e.length-2,a=3,i,r;return e[a][1].type==="whitespace"&&(a+=2),t-2>a&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(a===t-1||t-4>a&&e[t-2][1].type==="whitespace")&&(t-=a+1===t?2:4),t>a&&(i={type:"atxHeadingText",start:e[a][1].start,end:e[t][1].end},r={type:"chunkText",start:e[a][1].start,end:e[t][1].end,contentType:"text"},Sn(e,a,t-a+1,[["enter",i,n],["enter",r,n],["exit",r,n],["exit",i,n]])),e}function q1(e,n,t){let a=0;return i;function i(u){return e.enter("atxHeading"),r(u)}function r(u){return e.enter("atxHeadingSequence"),o(u)}function o(u){return u===35&&a++<6?(e.consume(u),o):u===null||nn(u)?(e.exit("atxHeadingSequence"),l(u)):t(u)}function l(u){return u===35?(e.enter("atxHeadingSequence"),s(u)):u===null||B(u)?(e.exit("atxHeading"),n(u)):K(u)?ne(e,l,"whitespace")(u):(e.enter("atxHeadingText"),c(u))}function s(u){return u===35?(e.consume(u),s):(e.exit("atxHeadingSequence"),l(u))}function c(u){return u===null||u===35||nn(u)?(e.exit("atxHeadingText"),l(u)):(e.consume(u),c)}}const ev=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Gu=["pre","script","style","textarea"],nv={concrete:!0,name:"htmlFlow",resolveTo:iv,tokenize:rv},tv={partial:!0,tokenize:lv},av={partial:!0,tokenize:ov};function iv(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function rv(e,n,t){const a=this;let i,r,o,l,s;return c;function c(v){return u(v)}function u(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),d}function d(v){return v===33?(e.consume(v),h):v===47?(e.consume(v),r=!0,x):v===63?(e.consume(v),i=3,a.interrupt?n:y):wn(v)?(e.consume(v),o=String.fromCharCode(v),C):t(v)}function h(v){return v===45?(e.consume(v),i=2,p):v===91?(e.consume(v),i=5,l=0,w):wn(v)?(e.consume(v),i=4,a.interrupt?n:y):t(v)}function p(v){return v===45?(e.consume(v),a.interrupt?n:y):t(v)}function w(v){const ye="CDATA[";return v===ye.charCodeAt(l++)?(e.consume(v),l===ye.length?a.interrupt?n:j:w):t(v)}function x(v){return wn(v)?(e.consume(v),o=String.fromCharCode(v),C):t(v)}function C(v){if(v===null||v===47||v===62||nn(v)){const ye=v===47,rn=o.toLowerCase();return!ye&&!r&&Gu.includes(rn)?(i=1,a.interrupt?n(v):j(v)):ev.includes(o.toLowerCase())?(i=6,ye?(e.consume(v),g):a.interrupt?n(v):j(v)):(i=7,a.interrupt&&!a.parser.lazy[a.now().line]?t(v):r?m(v):b(v))}return v===45||un(v)?(e.consume(v),o+=String.fromCharCode(v),C):t(v)}function g(v){return v===62?(e.consume(v),a.interrupt?n:j):t(v)}function m(v){return K(v)?(e.consume(v),m):T(v)}function b(v){return v===47?(e.consume(v),T):v===58||v===95||wn(v)?(e.consume(v),S):K(v)?(e.consume(v),b):T(v)}function S(v){return v===45||v===46||v===58||v===95||un(v)?(e.consume(v),S):L(v)}function L(v){return v===61?(e.consume(v),A):K(v)?(e.consume(v),L):b(v)}function A(v){return v===null||v===60||v===61||v===62||v===96?t(v):v===34||v===39?(e.consume(v),s=v,I):K(v)?(e.consume(v),A):M(v)}function I(v){return v===s?(e.consume(v),s=null,_):v===null||B(v)?t(v):(e.consume(v),I)}function M(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||nn(v)?L(v):(e.consume(v),M)}function _(v){return v===47||v===62||K(v)?b(v):t(v)}function T(v){return v===62?(e.consume(v),D):t(v)}function D(v){return v===null||B(v)?j(v):K(v)?(e.consume(v),D):t(v)}function j(v){return v===45&&i===2?(e.consume(v),he):v===60&&i===1?(e.consume(v),fe):v===62&&i===4?(e.consume(v),G):v===63&&i===3?(e.consume(v),y):v===93&&i===5?(e.consume(v),H):B(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(tv,Q,Y)(v)):v===null||B(v)?(e.exit("htmlFlowData"),Y(v)):(e.consume(v),j)}function Y(v){return e.check(av,le,Q)(v)}function le(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),F}function F(v){return v===null||B(v)?Y(v):(e.enter("htmlFlowData"),j(v))}function he(v){return v===45?(e.consume(v),y):j(v)}function fe(v){return v===47?(e.consume(v),o="",R):j(v)}function R(v){if(v===62){const ye=o.toLowerCase();return Gu.includes(ye)?(e.consume(v),G):j(v)}return wn(v)&&o.length<8?(e.consume(v),o+=String.fromCharCode(v),R):j(v)}function H(v){return v===93?(e.consume(v),y):j(v)}function y(v){return v===62?(e.consume(v),G):v===45&&i===2?(e.consume(v),y):j(v)}function G(v){return v===null||B(v)?(e.exit("htmlFlowData"),Q(v)):(e.consume(v),G)}function Q(v){return e.exit("htmlFlow"),n(v)}}function ov(e,n,t){const a=this;return i;function i(o){return B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):t(o)}function r(o){return a.parser.lazy[a.now().line]?t(o):n(o)}}function lv(e,n,t){return a;function a(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Fr,n,t)}}const sv={name:"htmlText",tokenize:cv};function cv(e,n,t){const a=this;let i,r,o;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),c):y===47?(e.consume(y),L):y===63?(e.consume(y),b):wn(y)?(e.consume(y),M):t(y)}function c(y){return y===45?(e.consume(y),u):y===91?(e.consume(y),r=0,w):wn(y)?(e.consume(y),m):t(y)}function u(y){return y===45?(e.consume(y),p):t(y)}function d(y){return y===null?t(y):y===45?(e.consume(y),h):B(y)?(o=d,fe(y)):(e.consume(y),d)}function h(y){return y===45?(e.consume(y),p):d(y)}function p(y){return y===62?he(y):y===45?h(y):d(y)}function w(y){const G="CDATA[";return y===G.charCodeAt(r++)?(e.consume(y),r===G.length?x:w):t(y)}function x(y){return y===null?t(y):y===93?(e.consume(y),C):B(y)?(o=x,fe(y)):(e.consume(y),x)}function C(y){return y===93?(e.consume(y),g):x(y)}function g(y){return y===62?he(y):y===93?(e.consume(y),g):x(y)}function m(y){return y===null||y===62?he(y):B(y)?(o=m,fe(y)):(e.consume(y),m)}function b(y){return y===null?t(y):y===63?(e.consume(y),S):B(y)?(o=b,fe(y)):(e.consume(y),b)}function S(y){return y===62?he(y):b(y)}function L(y){return wn(y)?(e.consume(y),A):t(y)}function A(y){return y===45||un(y)?(e.consume(y),A):I(y)}function I(y){return B(y)?(o=I,fe(y)):K(y)?(e.consume(y),I):he(y)}function M(y){return y===45||un(y)?(e.consume(y),M):y===47||y===62||nn(y)?_(y):t(y)}function _(y){return y===47?(e.consume(y),he):y===58||y===95||wn(y)?(e.consume(y),T):B(y)?(o=_,fe(y)):K(y)?(e.consume(y),_):he(y)}function T(y){return y===45||y===46||y===58||y===95||un(y)?(e.consume(y),T):D(y)}function D(y){return y===61?(e.consume(y),j):B(y)?(o=D,fe(y)):K(y)?(e.consume(y),D):_(y)}function j(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),i=y,Y):B(y)?(o=j,fe(y)):K(y)?(e.consume(y),j):(e.consume(y),le)}function Y(y){return y===i?(e.consume(y),i=void 0,F):y===null?t(y):B(y)?(o=Y,fe(y)):(e.consume(y),Y)}function le(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||nn(y)?_(y):(e.consume(y),le)}function F(y){return y===47||y===62||nn(y)?_(y):t(y)}function he(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function fe(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),R}function R(y){return K(y)?ne(e,H,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):H(y)}function H(y){return e.enter("htmlTextData"),o(y)}}const Xs={name:"labelEnd",resolveAll:pv,resolveTo:hv,tokenize:gv},uv={tokenize:mv},dv={tokenize:yv},fv={tokenize:bv};function pv(e){let n=-1;const t=[];for(;++n<e.length;){const a=e[n][1];if(t.push(e[n]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const i=a.type==="labelImage"?4:2;a.type="data",n+=i}}return e.length!==t.length&&Sn(e,0,e.length,t),e}function hv(e,n){let t=e.length,a=0,i,r,o,l;for(;t--;)if(i=e[t][1],r){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(r=t,i.type!=="labelLink")){a=2;break}}else i.type==="labelEnd"&&(o=t);const s={type:e[r][1].type==="labelLink"?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[r][1].start},end:{...e[o][1].end}},u={type:"labelText",start:{...e[r+a+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,n],["enter",c,n]],l=$e(l,e.slice(r+1,r+a+3)),l=$e(l,[["enter",u,n]]),l=$e(l,Gs(n.parser.constructs.insideSpan.null,e.slice(r+a+4,o-3),n)),l=$e(l,[["exit",u,n],e[o-2],e[o-1],["exit",c,n]]),l=$e(l,e.slice(o+1)),l=$e(l,[["exit",s,n]]),Sn(e,r,e.length,l),e}function gv(e,n,t){const a=this;let i=a.events.length,r,o;for(;i--;)if((a.events[i][1].type==="labelImage"||a.events[i][1].type==="labelLink")&&!a.events[i][1]._balanced){r=a.events[i][1];break}return l;function l(h){return r?r._inactive?d(h):(o=a.parser.defined.includes(Kt(a.sliceSerialize({start:r.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),s):t(h)}function s(h){return h===40?e.attempt(uv,u,o?u:d)(h):h===91?e.attempt(dv,u,o?c:d)(h):o?u(h):d(h)}function c(h){return e.attempt(fv,u,d)(h)}function u(h){return n(h)}function d(h){return r._balanced=!0,t(h)}}function mv(e,n,t){return a;function a(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return nn(d)?_a(e,r)(d):r(d)}function r(d){return d===41?u(d):vh(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return nn(d)?_a(e,s)(d):u(d)}function l(d){return t(d)}function s(d){return d===34||d===39||d===40?xh(e,c,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):u(d)}function c(d){return nn(d)?_a(e,u)(d):u(d)}function u(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function yv(e,n,t){const a=this;return i;function i(l){return wh.call(a,e,r,o,"reference","referenceMarker","referenceString")(l)}function r(l){return a.parser.defined.includes(Kt(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function o(l){return t(l)}}function bv(e,n,t){return a;function a(r){return e.enter("reference"),e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),i}function i(r){return r===93?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),n):t(r)}}const vv={name:"labelStartImage",resolveAll:Xs.resolveAll,tokenize:wv};function wv(e,n,t){const a=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),r}function r(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):t(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in a.parser.constructs?t(l):n(l)}}const xv={name:"labelStartLink",resolveAll:Xs.resolveAll,tokenize:Av};function Av(e,n,t){const a=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),r}function r(o){return o===94&&"_hiddenFootnoteSupport"in a.parser.constructs?t(o):n(o)}}const Co={name:"lineEnding",tokenize:Sv};function Sv(e,n){return t;function t(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),ne(e,n,"linePrefix")}}const Vi={name:"thematicBreak",tokenize:kv};function kv(e,n,t){let a=0,i;return r;function r(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),s(c)):a>=3&&(c===null||B(c))?(e.exit("thematicBreak"),n(c)):t(c)}function s(c){return c===i?(e.consume(c),a++,s):(e.exit("thematicBreakSequence"),K(c)?ne(e,l,"whitespace")(c):l(c))}}const Te={continuation:{tokenize:Nv},exit:Iv,name:"list",tokenize:Lv},Cv={partial:!0,tokenize:Wv},Pv={partial:!0,tokenize:Ev};function Lv(e,n,t){const a=this,i=a.events[a.events.length-1];let r=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const w=a.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(w==="listUnordered"?!a.containerState.marker||p===a.containerState.marker:Tl(p)){if(a.containerState.type||(a.containerState.type=w,e.enter(w,{_container:!0})),w==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Vi,t,c)(p):c(p);if(!a.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return Tl(p)&&++o<10?(e.consume(p),s):(!a.interrupt||o<2)&&(a.containerState.marker?p===a.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):t(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||p,e.check(Fr,a.interrupt?t:u,e.attempt(Cv,h,d))}function u(p){return a.containerState.initialBlankLine=!0,r++,h(p)}function d(p){return K(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):t(p)}function h(p){return a.containerState.size=r+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Nv(e,n,t){const a=this;return a.containerState._closeFlow=void 0,e.check(Fr,i,r);function i(l){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,ne(e,n,"listItemIndent",a.containerState.size+1)(l)}function r(l){return a.containerState.furtherBlankLines||!K(l)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,o(l)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(Pv,n,o)(l))}function o(l){return a.containerState._closeFlow=!0,a.interrupt=void 0,ne(e,e.attempt(Te,n,t),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ev(e,n,t){const a=this;return ne(e,i,"listItemIndent",a.containerState.size+1);function i(r){const o=a.events[a.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===a.containerState.size?n(r):t(r)}}function Iv(e){e.exit(this.containerState.type)}function Wv(e,n,t){const a=this;return ne(e,i,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(r){const o=a.events[a.events.length-1];return!K(r)&&o&&o[1].type==="listItemPrefixWhitespace"?n(r):t(r)}}const Xu={name:"setextUnderline",resolveTo:Rv,tokenize:Mv};function Rv(e,n){let t=e.length,a,i,r;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){a=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!r&&e[t][1].type==="definition"&&(r=t);const o={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",r?(e.splice(i,0,["enter",o,n]),e.splice(r+1,0,["exit",e[a][1],n]),e[a][1].end={...e[r][1].end}):e[a][1]=o,e.push(["exit",o,n]),e}function Mv(e,n,t){const a=this;let i;return r;function r(c){let u=a.events.length,d;for(;u--;)if(a.events[u][1].type!=="lineEnding"&&a.events[u][1].type!=="linePrefix"&&a.events[u][1].type!=="content"){d=a.events[u][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||d)?(e.enter("setextHeadingLine"),i=c,o(c)):t(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),K(c)?ne(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||B(c)?(e.exit("setextHeadingLine"),n(c)):t(c)}}const Zv={tokenize:Tv};function Tv(e){const n=this,t=e.attempt(Fr,a,e.attempt(this.parser.constructs.flowInitial,i,ne(e,e.attempt(this.parser.constructs.flow,i,e.attempt(D1,i)),"linePrefix")));return t;function a(r){if(r===null){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(r){if(r===null){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Dv={resolveAll:Sh()},jv=Ah("string"),Hv=Ah("text");function Ah(e){return{resolveAll:Sh(e==="text"?_v:void 0),tokenize:n};function n(t){const a=this,i=this.parser.constructs[e],r=t.attempt(i,o,l);return o;function o(u){return c(u)?r(u):l(u)}function l(u){if(u===null){t.consume(u);return}return t.enter("data"),t.consume(u),s}function s(u){return c(u)?(t.exit("data"),r(u)):(t.consume(u),s)}function c(u){if(u===null)return!0;const d=i[u];let h=-1;if(d)for(;++h<d.length;){const p=d[h];if(!p.previous||p.previous.call(a,a.previous))return!0}return!1}}}function Sh(e){return n;function n(t,a){let i=-1,r;for(;++i<=t.length;)r===void 0?t[i]&&t[i][1].type==="data"&&(r=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(t,a):t}}function _v(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const a=e[t-1][1],i=n.sliceStream(a);let r=i.length,o=-1,l=0,s;for(;r--;){const c=i[r];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(c===-2)s=!0,l++;else if(c!==-1){r++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(l=0),l){const c={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:r?o:a.start._bufferIndex+o,_index:a.start._index+r,line:a.end.line,column:a.end.column-l,offset:a.end.offset-l},end:{...a.end}};a.end={...c.start},a.start.offset===a.end.offset?Object.assign(a,c):(e.splice(t,0,["enter",c,n],["exit",c,n]),t+=2)}t++}return e}const zv={42:Te,43:Te,45:Te,48:Te,49:Te,50:Te,51:Te,52:Te,53:Te,54:Te,55:Te,56:Te,57:Te,62:gh},Jv={91:O1},Bv={[-2]:ko,[-1]:ko,32:ko},Uv={35:K1,42:Vi,45:[Xu,Vi],60:nv,61:Xu,95:Vi,96:Uu,126:Uu},Fv={38:yh,92:mh},Ov={[-5]:Co,[-4]:Co,[-3]:Co,33:vv,38:yh,42:Zl,60:[y1,sv],91:xv,92:[V1,mh],93:Xs,95:Zl,96:I1},Gv={null:[Zl,Dv]},Xv={null:[42,95]},Yv={null:[]},Vv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Xv,contentInitial:Jv,disable:Yv,document:zv,flow:Uv,flowInitial:Bv,insideSpan:Gv,string:Fv,text:Ov},Symbol.toStringTag,{value:"Module"}));function Qv(e,n,t){let a={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},r=[];let o=[],l=[];const s={attempt:I(L),check:I(A),consume:m,enter:b,exit:S,interrupt:I(A,{interrupt:!0})},c={code:null,containerState:{},defineSkip:x,events:[],now:w,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:d};let u=n.tokenize.call(c,s);return n.resolveAll&&r.push(n),c;function d(D){return o=$e(o,D),C(),o[o.length-1]!==null?[]:(M(n,0),c.events=Gs(r,c.events,c),c.events)}function h(D,j){return $v(p(D),j)}function p(D){return Kv(o,D)}function w(){const{_bufferIndex:D,_index:j,line:Y,column:le,offset:F}=a;return{_bufferIndex:D,_index:j,line:Y,column:le,offset:F}}function x(D){i[D.line]=D.column,T()}function C(){let D;for(;a._index<o.length;){const j=o[a._index];if(typeof j=="string")for(D=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===D&&a._bufferIndex<j.length;)g(j.charCodeAt(a._bufferIndex));else g(j)}}function g(D){u=u(D)}function m(D){Os(D)?(a.line++,a.column=1,a.offset+=D===-3?2:1,T()):D!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===o[a._index].length&&(a._bufferIndex=-1,a._index++)),c.previous=D}function b(D,j){const Y=j||{};return Y.type=D,Y.start=w(),c.events.push(["enter",Y,c]),l.push(Y),Y}function S(D){const j=l.pop();return j.end=w(),c.events.push(["exit",j,c]),j}function L(D,j){M(D,j.from)}function A(D,j){j.restore()}function I(D,j){return Y;function Y(le,F,he){let fe,R,H,y;return Array.isArray(le)?Q(le):"tokenize"in le?Q([le]):G(le);function G(te){return hn;function hn(jn){const kt=jn!==null&&te[jn],Ct=jn!==null&&te.null,gi=[...Array.isArray(kt)?kt:kt?[kt]:[],...Array.isArray(Ct)?Ct:Ct?[Ct]:[]];return Q(gi)(jn)}}function Q(te){return fe=te,R=0,te.length===0?he:v(te[R])}function v(te){return hn;function hn(jn){return y=_(),H=te,te.partial||(c.currentConstruct=te),te.name&&c.parser.constructs.disable.null.includes(te.name)?rn():te.tokenize.call(j?Object.assign(Object.create(c),j):c,s,ye,rn)(jn)}}function ye(te){return D(H,y),F}function rn(te){return y.restore(),++R<fe.length?v(fe[R]):he}}}function M(D,j){D.resolveAll&&!r.includes(D)&&r.push(D),D.resolve&&Sn(c.events,j,c.events.length-j,D.resolve(c.events.slice(j),c)),D.resolveTo&&(c.events=D.resolveTo(c.events,c))}function _(){const D=w(),j=c.previous,Y=c.currentConstruct,le=c.events.length,F=Array.from(l);return{from:le,restore:he};function he(){a=D,c.previous=j,c.currentConstruct=Y,c.events.length=le,l=F,T()}}function T(){a.line in i&&a.column<2&&(a.column=i[a.line],a.offset+=i[a.line]-1)}}function Kv(e,n){const t=n.start._index,a=n.start._bufferIndex,i=n.end._index,r=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(a,r)];else{if(o=e.slice(t,i),a>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(a):o.shift()}r>0&&o.push(e[i].slice(0,r))}return o}function $v(e,n){let t=-1;const a=[];let i;for(;++t<e.length;){const r=e[t];let o;if(typeof r=="string")o=r;else switch(r){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(r)}i=r===-2,a.push(o)}return a.join("")}function qv(e){const n={constructs:e1([Vv,...(e||{}).extensions||[]]),content:t(a1),defined:[],document:t(r1),flow:t(Zv),lazy:{},string:t(jv),text:t(Hv)};return n;function t(a){return i;function i(r){return Qv(n,a,r)}}}function ew(e){for(;!bh(e););return e}const Yu=/[\0\t\n\r]/g;function nw(){let e=1,n="",t=!0,a;return i;function i(r,o,l){const s=[];let c,u,d,h,p;for(r=n+(typeof r=="string"?r.toString():new TextDecoder(o||void 0).decode(r)),d=0,n="",t&&(r.charCodeAt(0)===65279&&d++,t=void 0);d<r.length;){if(Yu.lastIndex=d,c=Yu.exec(r),h=c&&c.index!==void 0?c.index:r.length,p=r.charCodeAt(h),!c){n=r.slice(d);break}if(p===10&&d===h&&a)s.push(-3),a=void 0;else switch(a&&(s.push(-5),a=void 0),d<h&&(s.push(r.slice(d,h)),e+=h-d),p){case 0:{s.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,s.push(-2);e++<u;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:a=!0,e=1}d=h+1}return l&&(a&&s.push(-5),n&&s.push(n),s.push(null)),s}}const tw=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function aw(e){return e.replace(tw,iw)}function iw(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const a=t.charCodeAt(1),i=a===120||a===88;return ph(t.slice(i?2:1),i?16:10)}return Fs(t)||e}const kh={}.hasOwnProperty;function rw(e,n,t){return typeof n!="string"&&(t=n,n=void 0),ow(t)(ew(qv(t).document().write(nw()(e,n,!0))))}function ow(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(tc),autolinkProtocol:_,autolinkEmail:_,atxHeading:r(qs),blockQuote:r(Ct),characterEscape:_,characterReference:_,codeFenced:r(gi),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:r(gi,o),codeText:r(_h,o),codeTextData:_,data:_,codeFlowValue:_,definition:r(zh),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:r(Jh),hardBreakEscape:r(ec),hardBreakTrailing:r(ec),htmlFlow:r(nc,o),htmlFlowData:_,htmlText:r(nc,o),htmlTextData:_,image:r(Bh),label:o,link:r(tc),listItem:r(Uh),listItemValue:h,listOrdered:r(ac,d),listUnordered:r(ac),paragraph:r(Fh),reference:v,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:r(qs),strong:r(Oh),thematicBreak:r(Xh)},exit:{atxHeading:s(),atxHeadingSequence:L,autolink:s(),autolinkEmail:kt,autolinkProtocol:jn,blockQuote:s(),characterEscapeValue:T,characterReferenceMarkerHexadecimal:rn,characterReferenceMarkerNumeric:rn,characterReferenceValue:te,characterReference:hn,codeFenced:s(C),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:w,codeFlowValue:T,codeIndented:s(g),codeText:s(F),codeTextData:T,data:T,definition:s(),definitionDestinationString:S,definitionLabelString:m,definitionTitleString:b,emphasis:s(),hardBreakEscape:s(j),hardBreakTrailing:s(j),htmlFlow:s(Y),htmlFlowData:T,htmlText:s(le),htmlTextData:T,image:s(fe),label:H,labelText:R,lineEnding:D,link:s(he),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ye,resourceDestinationString:y,resourceTitleString:G,resource:Q,setextHeading:s(M),setextHeadingLineSequence:I,setextHeadingText:A,strong:s(),thematicBreak:s()}};Ch(n,(e||{}).mdastExtensions||[]);const t={};return a;function a(k){let W={type:"root",children:[]};const z={stack:[W],tokenStack:[],config:n,enter:l,exit:c,buffer:o,resume:u,data:t},$=[];let ae=-1;for(;++ae<k.length;)if(k[ae][1].type==="listOrdered"||k[ae][1].type==="listUnordered")if(k[ae][0]==="enter")$.push(ae);else{const gn=$.pop();ae=i(k,gn,ae)}for(ae=-1;++ae<k.length;){const gn=n[k[ae][0]];kh.call(gn,k[ae][1].type)&&gn[k[ae][1].type].call(Object.assign({sliceSerialize:k[ae][2].sliceSerialize},z),k[ae][1])}if(z.tokenStack.length>0){const gn=z.tokenStack[z.tokenStack.length-1];(gn[1]||Vu).call(z,void 0,gn[0])}for(W.position={start:_n(k.length>0?k[0][1].start:{line:1,column:1,offset:0}),end:_n(k.length>0?k[k.length-2][1].end:{line:1,column:1,offset:0})},ae=-1;++ae<n.transforms.length;)W=n.transforms[ae](W)||W;return W}function i(k,W,z){let $=W-1,ae=-1,gn=!1,Pt,kn,fa,pa;for(;++$<=z;){const Be=k[$];switch(Be[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Be[0]==="enter"?ae++:ae--,pa=void 0;break}case"lineEndingBlank":{Be[0]==="enter"&&(Pt&&!pa&&!ae&&!fa&&(fa=$),pa=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:pa=void 0}if(!ae&&Be[0]==="enter"&&Be[1].type==="listItemPrefix"||ae===-1&&Be[0]==="exit"&&(Be[1].type==="listUnordered"||Be[1].type==="listOrdered")){if(Pt){let Lt=$;for(kn=void 0;Lt--;){const Cn=k[Lt];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;kn&&(k[kn][1].type="lineEndingBlank",gn=!0),Cn[1].type="lineEnding",kn=Lt}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}fa&&(!kn||fa<kn)&&(Pt._spread=!0),Pt.end=Object.assign({},kn?k[kn][1].start:Be[1].end),k.splice(kn||$,0,["exit",Pt,Be[2]]),$++,z++}if(Be[1].type==="listItemPrefix"){const Lt={type:"listItem",_spread:!1,start:Object.assign({},Be[1].start),end:void 0};Pt=Lt,k.splice($,0,["enter",Lt,Be[2]]),$++,z++,fa=void 0,pa=!0}}}return k[W][1]._spread=gn,z}function r(k,W){return z;function z($){l.call(this,k($),$),W&&W.call(this,$)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(k,W,z){this.stack[this.stack.length-1].children.push(k),this.stack.push(k),this.tokenStack.push([W,z||void 0]),k.position={start:_n(W.start),end:void 0}}function s(k){return W;function W(z){k&&k.call(this,z),c.call(this,z)}}function c(k,W){const z=this.stack.pop(),$=this.tokenStack.pop();if($)$[0].type!==k.type&&(W?W.call(this,k,$[0]):($[1]||Vu).call(this,k,$[0]));else throw new Error("Cannot close `"+k.type+"` ("+Ha({start:k.start,end:k.end})+"): it’s not open");z.position.end=_n(k.end)}function u(){return $b(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(k){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(k),10),this.data.expectingFirstListItemValue=void 0}}function p(){const k=this.resume(),W=this.stack[this.stack.length-1];W.lang=k}function w(){const k=this.resume(),W=this.stack[this.stack.length-1];W.meta=k}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const k=this.resume(),W=this.stack[this.stack.length-1];W.value=k.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const k=this.resume(),W=this.stack[this.stack.length-1];W.value=k.replace(/(\r?\n|\r)$/g,"")}function m(k){const W=this.resume(),z=this.stack[this.stack.length-1];z.label=W,z.identifier=Kt(this.sliceSerialize(k)).toLowerCase()}function b(){const k=this.resume(),W=this.stack[this.stack.length-1];W.title=k}function S(){const k=this.resume(),W=this.stack[this.stack.length-1];W.url=k}function L(k){const W=this.stack[this.stack.length-1];if(!W.depth){const z=this.sliceSerialize(k).length;W.depth=z}}function A(){this.data.setextHeadingSlurpLineEnding=!0}function I(k){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(k).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function _(k){const W=this.stack[this.stack.length-1].children;let z=W[W.length-1];(!z||z.type!=="text")&&(z=Gh(),z.position={start:_n(k.start),end:void 0},W.push(z)),this.stack.push(z)}function T(k){const W=this.stack.pop();W.value+=this.sliceSerialize(k),W.position.end=_n(k.end)}function D(k){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=W.children[W.children.length-1];z.position.end=_n(k.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(W.type)&&(_.call(this,k),T.call(this,k))}function j(){this.data.atHardBreak=!0}function Y(){const k=this.resume(),W=this.stack[this.stack.length-1];W.value=k}function le(){const k=this.resume(),W=this.stack[this.stack.length-1];W.value=k}function F(){const k=this.resume(),W=this.stack[this.stack.length-1];W.value=k}function he(){const k=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=W,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function fe(){const k=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";k.type+="Reference",k.referenceType=W,delete k.url,delete k.title}else delete k.identifier,delete k.label;this.data.referenceType=void 0}function R(k){const W=this.sliceSerialize(k),z=this.stack[this.stack.length-2];z.label=aw(W),z.identifier=Kt(W).toLowerCase()}function H(){const k=this.stack[this.stack.length-1],W=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const $=k.children;z.children=$}else z.alt=W}function y(){const k=this.resume(),W=this.stack[this.stack.length-1];W.url=k}function G(){const k=this.resume(),W=this.stack[this.stack.length-1];W.title=k}function Q(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function ye(k){const W=this.resume(),z=this.stack[this.stack.length-1];z.label=W,z.identifier=Kt(this.sliceSerialize(k)).toLowerCase(),this.data.referenceType="full"}function rn(k){this.data.characterReferenceType=k.type}function te(k){const W=this.sliceSerialize(k),z=this.data.characterReferenceType;let $;z?($=ph(W,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):$=Fs(W);const ae=this.stack[this.stack.length-1];ae.value+=$}function hn(k){const W=this.stack.pop();W.position.end=_n(k.end)}function jn(k){T.call(this,k);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(k)}function kt(k){T.call(this,k);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(k)}function Ct(){return{type:"blockquote",children:[]}}function gi(){return{type:"code",lang:null,meta:null,value:""}}function _h(){return{type:"inlineCode",value:""}}function zh(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Jh(){return{type:"emphasis",children:[]}}function qs(){return{type:"heading",depth:0,children:[]}}function ec(){return{type:"break"}}function nc(){return{type:"html",value:""}}function Bh(){return{type:"image",title:null,url:"",alt:null}}function tc(){return{type:"link",title:null,url:"",children:[]}}function ac(k){return{type:"list",ordered:k.type==="listOrdered",start:null,spread:k._spread,children:[]}}function Uh(k){return{type:"listItem",spread:k._spread,checked:null,children:[]}}function Fh(){return{type:"paragraph",children:[]}}function Oh(){return{type:"strong",children:[]}}function Gh(){return{type:"text",value:""}}function Xh(){return{type:"thematicBreak"}}}function _n(e){return{line:e.line,column:e.column,offset:e.offset}}function Ch(e,n){let t=-1;for(;++t<n.length;){const a=n[t];Array.isArray(a)?Ch(e,a):lw(e,a)}}function lw(e,n){let t;for(t in n)if(kh.call(n,t))switch(t){case"canContainEols":{const a=n[t];a&&e[t].push(...a);break}case"transforms":{const a=n[t];a&&e[t].push(...a);break}case"enter":case"exit":{const a=n[t];a&&Object.assign(e[t],a);break}}}function Vu(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+Ha({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+Ha({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+Ha({start:n.start,end:n.end})+") is still open")}function sw(e){const n=this;n.parser=t;function t(a){return rw(a,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function cw(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function uw(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function dw(e,n){const t=n.value?n.value+`
`:"",a={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(a.className=["language-"+i[0]]);let r={type:"element",tagName:"code",properties:a,children:[{type:"text",value:t}]};return n.meta&&(r.data={meta:n.meta}),e.patch(n,r),r=e.applyData(n,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(n,r),r}function fw(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function pw(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Qu=hw(/[\dA-Za-z]/);function hw(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function da(e){const n=[];let t=-1,a=0,i=0;for(;++t<e.length;){const r=e.charCodeAt(t);let o="";if(r===37&&Qu(e.charCodeAt(t+1))&&Qu(e.charCodeAt(t+2)))i=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(o=String.fromCharCode(r));else if(r>55295&&r<57344){const l=e.charCodeAt(t+1);r<56320&&l>56319&&l<57344?(o=String.fromCharCode(r,l),i=1):o="�"}else o=String.fromCharCode(r);o&&(n.push(e.slice(a,t),encodeURIComponent(o)),a=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(a)}function gw(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(n.identifier).toUpperCase(),i=da(a.toLowerCase()),r=e.footnoteOrder.indexOf(a);let o,l=e.footnoteCounts.get(a);l===void 0?(l=0,e.footnoteOrder.push(a),o=e.footnoteOrder.length):o=r+1,l+=1,e.footnoteCounts.set(a,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,s);const c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,c),e.applyData(n,c)}function mw(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function yw(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Ph(e,n){const t=n.referenceType;let a="]";if(t==="collapsed"?a+="[]":t==="full"&&(a+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+a}];const i=e.all(n),r=i[0];r&&r.type==="text"?r.value="["+r.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=a:i.push({type:"text",value:a}),i}function bw(e,n){const t=String(n.identifier).toUpperCase(),a=e.definitionById.get(t);if(!a)return Ph(e,n);const i={src:da(a.url||""),alt:n.alt};a.title!==null&&a.title!==void 0&&(i.title=a.title);const r={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,r),e.applyData(n,r)}function vw(e,n){const t={src:da(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const a={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,a),e.applyData(n,a)}function ww(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const a={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,a),e.applyData(n,a)}function xw(e,n){const t=String(n.identifier).toUpperCase(),a=e.definitionById.get(t);if(!a)return Ph(e,n);const i={href:da(a.url||"")};a.title!==null&&a.title!==void 0&&(i.title=a.title);const r={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Aw(e,n){const t={href:da(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const a={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Sw(e,n,t){const a=e.all(n),i=t?kw(t):Lh(n),r={},o=[];if(typeof n.checked=="boolean"){const u=a[0];let d;u&&u.type==="element"&&u.tagName==="p"?d=u:(d={type:"element",tagName:"p",properties:{},children:[]},a.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),r.className=["task-list-item"]}let l=-1;for(;++l<a.length;){const u=a[l];(i||l!==0||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?o.push(...u.children):o.push(u)}const s=a[a.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:r,children:o};return e.patch(n,c),e.applyData(n,c)}function kw(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let a=-1;for(;!n&&++a<t.length;)n=Lh(t[a])}return n}function Lh(e){return e.spread??e.children.length>1}function Cw(e,n){const t={},a=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<a.length;){const o=a[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const r={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(a,!0)};return e.patch(n,r),e.applyData(n,r)}function Pw(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Lw(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Nw(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ew(e,n){const t=e.all(n),a=t.shift(),i=[];if(a){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=zs(n.children[1]),s=oh(n.children[n.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o)}const r={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,r),e.applyData(n,r)}function Iw(e,n,t){const a=t?t.children:void 0,i=(a?a.indexOf(n):1)===0?"th":"td",r=t&&t.type==="table"?t.align:void 0,o=r?r.length:n.children.length;let l=-1;const s=[];for(;++l<o;){const u=n.children[l],d={},h=r?r[l]:void 0;h&&(d.align=h);let p={type:"element",tagName:i,properties:d,children:[]};u&&(p.children=e.all(u),e.patch(u,p),p=e.applyData(u,p)),s.push(p)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(n,c),e.applyData(n,c)}function Ww(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Ku=9,$u=32;function Rw(e){const n=String(e),t=/\r?\n|\r/g;let a=t.exec(n),i=0;const r=[];for(;a;)r.push(qu(n.slice(i,a.index),i>0,!0),a[0]),i=a.index+a[0].length,a=t.exec(n);return r.push(qu(n.slice(i),i>0,!1)),r.join("")}function qu(e,n,t){let a=0,i=e.length;if(n){let r=e.codePointAt(a);for(;r===Ku||r===$u;)a++,r=e.codePointAt(a)}if(t){let r=e.codePointAt(i-1);for(;r===Ku||r===$u;)i--,r=e.codePointAt(i-1)}return i>a?e.slice(a,i):""}function Mw(e,n){const t={type:"text",value:Rw(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function Zw(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Tw={blockquote:cw,break:uw,code:dw,delete:fw,emphasis:pw,footnoteReference:gw,heading:mw,html:yw,imageReference:bw,image:vw,inlineCode:ww,linkReference:xw,link:Aw,listItem:Sw,list:Cw,paragraph:Pw,root:Lw,strong:Nw,table:Ew,tableCell:Ww,tableRow:Iw,text:Mw,thematicBreak:Zw,toml:Mi,yaml:Mi,definition:Mi,footnoteDefinition:Mi};function Mi(){}const Nh=-1,Or=0,za=1,kr=2,Ys=3,Vs=4,Qs=5,Ks=6,Eh=7,Ih=8,ed=typeof self=="object"?self:globalThis,Dw=(e,n)=>{const t=(i,r)=>(e.set(r,i),i),a=i=>{if(e.has(i))return e.get(i);const[r,o]=n[i];switch(r){case Or:case Nh:return t(o,i);case za:{const l=t([],i);for(const s of o)l.push(a(s));return l}case kr:{const l=t({},i);for(const[s,c]of o)l[a(s)]=a(c);return l}case Ys:return t(new Date(o),i);case Vs:{const{source:l,flags:s}=o;return t(new RegExp(l,s),i)}case Qs:{const l=t(new Map,i);for(const[s,c]of o)l.set(a(s),a(c));return l}case Ks:{const l=t(new Set,i);for(const s of o)l.add(a(s));return l}case Eh:{const{name:l,message:s}=o;return t(new ed[l](s),i)}case Ih:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new ed[r](o),i)};return a},nd=e=>Dw(new Map,e)(0),Et="",{toString:jw}={},{keys:Hw}=Object,Sa=e=>{const n=typeof e;if(n!=="object"||!e)return[Or,n];const t=jw.call(e).slice(8,-1);switch(t){case"Array":return[za,Et];case"Object":return[kr,Et];case"Date":return[Ys,Et];case"RegExp":return[Vs,Et];case"Map":return[Qs,Et];case"Set":return[Ks,Et];case"DataView":return[za,t]}return t.includes("Array")?[za,t]:t.includes("Error")?[Eh,t]:[kr,t]},Zi=([e,n])=>e===Or&&(n==="function"||n==="symbol"),_w=(e,n,t,a)=>{const i=(o,l)=>{const s=a.push(o)-1;return t.set(l,s),s},r=o=>{if(t.has(o))return t.get(o);let[l,s]=Sa(o);switch(l){case Or:{let u=o;switch(s){case"bigint":l=Ih,u=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);u=null;break;case"undefined":return i([Nh],o)}return i([l,u],o)}case za:{if(s){let h=o;return s==="DataView"?h=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(h=new Uint8Array(o)),i([s,[...h]],o)}const u=[],d=i([l,u],o);for(const h of o)u.push(r(h));return d}case kr:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(n&&"toJSON"in o)return r(o.toJSON());const u=[],d=i([l,u],o);for(const h of Hw(o))(e||!Zi(Sa(o[h])))&&u.push([r(h),r(o[h])]);return d}case Ys:return i([l,o.toISOString()],o);case Vs:{const{source:u,flags:d}=o;return i([l,{source:u,flags:d}],o)}case Qs:{const u=[],d=i([l,u],o);for(const[h,p]of o)(e||!(Zi(Sa(h))||Zi(Sa(p))))&&u.push([r(h),r(p)]);return d}case Ks:{const u=[],d=i([l,u],o);for(const h of o)(e||!Zi(Sa(h)))&&u.push(r(h));return d}}const{message:c}=o;return i([l,{name:s,message:c}],o)};return r},td=(e,{json:n,lossy:t}={})=>{const a=[];return _w(!(n||t),!!n,new Map,a)(e),a},Cr=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?nd(td(e,n)):structuredClone(e):(e,n)=>nd(td(e,n));function zw(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Jw(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Bw(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||zw,a=e.options.footnoteBackLabel||Jw,i=e.options.footnoteLabel||"Footnotes",r=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;const u=e.all(c),d=String(c.identifier).toUpperCase(),h=da(d.toLowerCase());let p=0;const w=[],x=e.footnoteCounts.get(d);for(;x!==void 0&&++p<=x;){w.length>0&&w.push({type:"text",value:" "});let m=typeof t=="string"?t:t(s,p);typeof m=="string"&&(m={type:"text",value:m}),w.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const C=u[u.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const m=C.children[C.children.length-1];m&&m.type==="text"?m.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...w)}else u.push(...w);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(u,!0)};e.patch(c,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:r,properties:{...Cr(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Wh=function(e){if(e==null)return Gw;if(typeof e=="function")return Gr(e);if(typeof e=="object")return Array.isArray(e)?Uw(e):Fw(e);if(typeof e=="string")return Ow(e);throw new Error("Expected function, string, or object as test")};function Uw(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Wh(e[t]);return Gr(a);function a(...i){let r=-1;for(;++r<n.length;)if(n[r].apply(this,i))return!0;return!1}}function Fw(e){const n=e;return Gr(t);function t(a){const i=a;let r;for(r in e)if(i[r]!==n[r])return!1;return!0}}function Ow(e){return Gr(n);function n(t){return t&&t.type===e}}function Gr(e){return n;function n(t,a,i){return!!(Xw(t)&&e.call(this,t,typeof a=="number"?a:void 0,i||void 0))}}function Gw(){return!0}function Xw(e){return e!==null&&typeof e=="object"&&"type"in e}const Rh=[],Yw=!0,ad=!1,Vw="skip";function Qw(e,n,t,a){let i;typeof n=="function"&&typeof t!="function"?(a=t,t=n):i=n;const r=Wh(i),o=a?-1:1;l(e,void 0,[])();function l(s,c,u){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Rh,w,x,C;if((!n||r(s,c,u[u.length-1]||void 0))&&(p=Kw(t(s,u)),p[0]===ad))return p;if("children"in s&&s.children){const g=s;if(g.children&&p[0]!==Vw)for(x=(a?g.children.length:-1)+o,C=u.concat(g);x>-1&&x<g.children.length;){const m=g.children[x];if(w=l(m,x,C)(),w[0]===ad)return w;x=typeof w[1]=="number"?w[1]:x+o}}return p}}}function Kw(e){return Array.isArray(e)?e:typeof e=="number"?[Yw,e]:e==null?Rh:[e]}function Mh(e,n,t,a){let i,r,o;typeof n=="function"&&typeof t!="function"?(r=void 0,o=n,i=t):(r=n,o=t,i=a),Qw(e,r,l,i);function l(s,c){const u=c[c.length-1],d=u?u.children.indexOf(s):void 0;return o(s,d,u)}}const Dl={}.hasOwnProperty,$w={};function qw(e,n){const t=n||$w,a=new Map,i=new Map,r=new Map,o={...Tw,...t.handlers},l={all:c,applyData:nx,definitionById:a,footnoteById:i,footnoteCounts:r,footnoteOrder:[],handlers:o,one:s,options:t,patch:ex,wrap:ax};return Mh(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const d=u.type==="definition"?a:i,h=String(u.identifier).toUpperCase();d.has(h)||d.set(h,u)}}),l;function s(u,d){const h=u.type,p=l.handlers[h];if(Dl.call(l.handlers,h)&&p)return p(l,u,d);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in u){const{children:w,...x}=u,C=Cr(x);return C.children=l.all(u),C}return Cr(u)}return(l.options.unknownHandler||tx)(l,u,d)}function c(u){const d=[];if("children"in u){const h=u.children;let p=-1;for(;++p<h.length;){const w=l.one(h[p],u);if(w){if(p&&h[p-1].type==="break"&&(!Array.isArray(w)&&w.type==="text"&&(w.value=id(w.value)),!Array.isArray(w)&&w.type==="element")){const x=w.children[0];x&&x.type==="text"&&(x.value=id(x.value))}Array.isArray(w)?d.push(...w):d.push(w)}}}return d}}function ex(e,n){e.position&&(n.position=Ib(e))}function nx(e,n){let t=n;if(e&&e.data){const a=e.data.hName,i=e.data.hChildren,r=e.data.hProperties;if(typeof a=="string")if(t.type==="element")t.tagName=a;else{const o="children"in t?t.children:[t];t={type:"element",tagName:a,properties:{},children:o}}t.type==="element"&&r&&Object.assign(t.properties,Cr(r)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function tx(e,n){const t=n.data||{},a="value"in n&&!(Dl.call(t,"hProperties")||Dl.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function ax(e,n){const t=[];let a=-1;for(n&&t.push({type:"text",value:`
`});++a<e.length;)a&&t.push({type:"text",value:`
`}),t.push(e[a]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function id(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function rd(e,n){const t=qw(e,n),a=t.one(e,void 0),i=Bw(t),r=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return i&&r.children.push({type:"text",value:`
`},i),r}function ix(e,n){return e&&"run"in e?async function(t,a){const i=rd(t,{file:a,...n});await e.run(i,a)}:function(t,a){return rd(t,{file:a,...e||n})}}function od(e){if(e)throw e}var Qi=Object.prototype.hasOwnProperty,Zh=Object.prototype.toString,ld=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,cd=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Zh.call(e)==="[object Array]"},ud=function(e){if(!e||Zh.call(e)!=="[object Object]")return!1;var n=Qi.call(e,"constructor"),t=e.constructor&&e.constructor.prototype&&Qi.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!t)return!1;var a;for(a in e);return typeof a>"u"||Qi.call(e,a)},dd=function(e,n){ld&&n.name==="__proto__"?ld(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},fd=function(e,n){if(n==="__proto__")if(Qi.call(e,n)){if(sd)return sd(e,n).value}else return;return e[n]},rx=function e(){var n,t,a,i,r,o,l=arguments[0],s=1,c=arguments.length,u=!1;for(typeof l=="boolean"&&(u=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<c;++s)if(n=arguments[s],n!=null)for(t in n)a=fd(l,t),i=fd(n,t),l!==i&&(u&&i&&(ud(i)||(r=cd(i)))?(r?(r=!1,o=a&&cd(a)?a:[]):o=a&&ud(a)?a:{},dd(l,{name:t,newValue:e(u,o,i)})):typeof i<"u"&&dd(l,{name:t,newValue:i}));return l};const Po=zl(rx);function jl(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ox(){const e=[],n={run:t,use:a};return n;function t(...i){let r=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...c){const u=e[++r];let d=-1;if(s){o(s);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,u?lx(u,l)(...c):o(null,...c)}}function a(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function lx(e,n){let t;return a;function a(...o){const l=e.length>o.length;let s;l&&o.push(i);try{s=e.apply(this,o)}catch(c){const u=c;if(l&&t)throw u;return i(u)}l||(s&&s.then&&typeof s.then=="function"?s.then(r,i):s instanceof Error?i(s):r(s))}function i(o,...l){t||(t=!0,n(o,...l))}function r(o){i(null,o)}}const bn={basename:sx,dirname:cx,extname:ux,join:dx,sep:"/"};function sx(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');hi(e);let t=0,a=-1,i=e.length,r;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(r){t=i+1;break}}else a<0&&(r=!0,a=i+1);return a<0?"":e.slice(t,a)}if(n===e)return"";let o=-1,l=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(r){t=i+1;break}}else o<0&&(r=!0,o=i+1),l>-1&&(e.codePointAt(i)===n.codePointAt(l--)?l<0&&(a=i):(l=-1,a=o));return t===a?a=o:a<0&&(a=e.length),e.slice(t,a)}function cx(e){if(hi(e),e.length===0)return".";let n=-1,t=e.length,a;for(;--t;)if(e.codePointAt(t)===47){if(a){n=t;break}}else a||(a=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function ux(e){hi(e);let n=e.length,t=-1,a=0,i=-1,r=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){a=n+1;break}continue}t<0&&(o=!0,t=n+1),l===46?i<0?i=n:r!==1&&(r=1):i>-1&&(r=-1)}return i<0||t<0||r===0||r===1&&i===t-1&&i===a+1?"":e.slice(i,t)}function dx(...e){let n=-1,t;for(;++n<e.length;)hi(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":fx(t)}function fx(e){hi(e);const n=e.codePointAt(0)===47;let t=px(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function px(e,n){let t="",a=0,i=-1,r=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||r===1))if(i!==o-1&&r===2){if(t.length<2||a!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",a=0):(t=t.slice(0,s),a=t.length-1-t.lastIndexOf("/")),i=o,r=0;continue}}else if(t.length>0){t="",a=0,i=o,r=0;continue}}n&&(t=t.length>0?t+"/..":"..",a=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),a=o-i-1;i=o,r=0}else l===46&&r>-1?r++:r=-1}return t}function hi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const hx={cwd:gx};function gx(){return"/"}function Hl(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function mx(e){if(typeof e=="string")e=new URL(e);else if(!Hl(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return yx(e)}function yx(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const a=n.codePointAt(t+2);if(a===70||a===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Lo=["history","path","basename","stem","extname","dirname"];class Th{constructor(n){let t;n?Hl(n)?t={path:n}:typeof n=="string"||bx(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":hx.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Lo.length;){const r=Lo[a];r in t&&t[r]!==void 0&&t[r]!==null&&(this[r]=r==="history"?[...t[r]]:t[r])}let i;for(i in t)Lo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?bn.basename(this.path):void 0}set basename(n){Eo(n,"basename"),No(n,"basename"),this.path=bn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?bn.dirname(this.path):void 0}set dirname(n){pd(this.basename,"dirname"),this.path=bn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?bn.extname(this.path):void 0}set extname(n){if(No(n,"extname"),pd(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=bn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Hl(n)&&(n=mx(n)),Eo(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?bn.basename(this.path,this.extname):void 0}set stem(n){Eo(n,"stem"),No(n,"stem"),this.path=bn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,a){const i=this.message(n,t,a);throw i.fatal=!0,i}info(n,t,a){const i=this.message(n,t,a);return i.fatal=void 0,i}message(n,t,a){const i=new Ie(n,t,a);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function No(e,n){if(e&&e.includes(bn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+bn.sep+"`")}function Eo(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function pd(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function bx(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vx=function(e){const n=this.constructor.prototype,t=n[e],a=function(){return t.apply(a,arguments)};return Object.setPrototypeOf(a,n),a},wx={}.hasOwnProperty;class $s extends vx{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ox()}copy(){const n=new $s;let t=-1;for(;++t<this.attachers.length;){const a=this.attachers[t];n.use(...a)}return n.data(Po(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Ro("data",this.frozen),this.namespace[n]=t,this):wx.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Ro("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const i=t.call(n,...a);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ti(n),a=this.parser||this.Parser;return Io("parse",a),a(String(t),t)}process(n,t){const a=this;return this.freeze(),Io("process",this.parser||this.Parser),Wo("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(r,o){const l=Ti(n),s=a.parse(l);a.run(s,l,function(u,d,h){if(u||!d||!h)return c(u);const p=d,w=a.stringify(p,h);Sx(w)?h.value=w:h.result=w,c(u,h)});function c(u,d){u||!d?o(u):r?r(d):t(void 0,d)}}}processSync(n){let t=!1,a;return this.freeze(),Io("processSync",this.parser||this.Parser),Wo("processSync",this.compiler||this.Compiler),this.process(n,i),gd("processSync","process",t),a;function i(r,o){t=!0,od(r),a=o}}run(n,t,a){hd(n),this.freeze();const i=this.transformers;return!a&&typeof t=="function"&&(a=t,t=void 0),a?r(void 0,a):new Promise(r);function r(o,l){const s=Ti(t);i.run(n,s,c);function c(u,d,h){const p=d||n;u?l(u):o?o(p):a(void 0,p,h)}}}runSync(n,t){let a=!1,i;return this.run(n,t,r),gd("runSync","run",a),i;function r(o,l){od(o),i=l,a=!0}}stringify(n,t){this.freeze();const a=Ti(t),i=this.compiler||this.Compiler;return Wo("stringify",i),hd(n),i(n,a)}use(n,...t){const a=this.attachers,i=this.namespace;if(Ro("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function r(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[u,...d]=c;s(u,d)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=Po(!0,i.settings,c.settings))}function l(c){let u=-1;if(c!=null)if(Array.isArray(c))for(;++u<c.length;){const d=c[u];r(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,u){let d=-1,h=-1;for(;++d<a.length;)if(a[d][0]===c){h=d;break}if(h===-1)a.push([c,...u]);else if(u.length>0){let[p,...w]=u;const x=a[h][1];jl(x)&&jl(p)&&(p=Po(!0,x,p)),a[h]=[c,p,...w]}}}}const xx=new $s().freeze();function Io(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Wo(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ro(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hd(e){if(!jl(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function gd(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ti(e){return Ax(e)?e:new Th(e)}function Ax(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Sx(e){return typeof e=="string"||kx(e)}function kx(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Cx="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",md=[],yd={allowDangerousHtml:!0},Px=/^(https?|ircs?|mailto|xmpp)$/i,Lx=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Dh(e){const n=Nx(e),t=Ex(e);return Ix(n.runSync(n.parse(t),t),e)}function Nx(e){const n=e.rehypePlugins||md,t=e.remarkPlugins||md,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...yd}:yd;return xx().use(sw).use(t).use(ix,a).use(n)}function Ex(e){const n=e.children||"",t=new Th;return typeof n=="string"&&(t.value=n),t}function Ix(e,n){const t=n.allowedElements,a=n.allowElement,i=n.components,r=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,s=n.urlTransform||Wx;for(const u of Lx)Object.hasOwn(n,u.from)&&""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+Cx+u.id;return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),Mh(e,c),Tb(e,{Fragment:f.Fragment,components:i,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function c(u,d,h){if(u.type==="raw"&&h&&typeof d=="number")return o?h.children.splice(d,1):h.children[d]={type:"text",value:u.value},d;if(u.type==="element"){let p;for(p in So)if(Object.hasOwn(So,p)&&Object.hasOwn(u.properties,p)){const w=u.properties[p],x=So[p];(x===null||x.includes(u.tagName))&&(u.properties[p]=s(String(w||""),p,u))}}if(u.type==="element"){let p=t?!t.includes(u.tagName):r?r.includes(u.tagName):!1;if(!p&&a&&typeof d=="number"&&(p=!a(u,d,h)),p&&h&&typeof d=="number")return l&&u.children?h.children.splice(d,1,...u.children):h.children.splice(d,1),d}}}function Wx(e){const n=e.indexOf(":"),t=e.indexOf("?"),a=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||a!==-1&&n>a||Px.test(e.slice(0,n))?e:""}const jh=E.memo(function({post:e,formatDate:n}){const t=a=>a.toLowerCase().replace(/\s+/g,"-");return f.jsxs("div",{className:"news-item",children:[f.jsx("div",{className:"news-item__date",children:n(e.date)}),f.jsxs("div",{className:"news-item__content",children:[f.jsx(Dh,{children:e.content}),(e.author||e.tags&&e.tags.length>0)&&f.jsxs("div",{className:"news-item__meta",children:[e.author&&f.jsx("span",{className:"news-item__author",children:f.jsx(Vt,{to:`${O.baseurl}/members#${e.author}`,children:e.author})}),e.tags&&e.tags.length>0&&f.jsxs(f.Fragment,{children:[e.author&&" | ",f.jsx("span",{className:"news-item__tags-label",children:"tags:"}),e.tags.map((a,i)=>f.jsxs(Vt,{to:`${O.baseurl}/tags/${t(a)}/`,variant:"tag",className:"news-item__tag",children:["#",a]},i))]})]})]})]})});jh.displayName="NewsItem";const Hh=["Principal Investigator","Principal Research Fellow","Research Assistant Professor","Postdoctoral Scholar","Ph.D. Student","MPhil Student","Research Assistant"];function Rx(e){return e?e.replace(/ DOT /gi,".").replace(/ dot /gi,".").replace(/ Dot /gi,".").replace(/ AT /gi,"@").replace(/ at /gi,"@").replace(/ At /gi,"@"):null}function Mx(e){return e?e.replace("@"," at ").replace(/\./g," dot "):""}function Zx(e){return!!(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(n=>n&&n.trim()!==""))}function Tx(e){const n={};return Hh.forEach(t=>{n[t]=e.filter(a=>a.position===t&&Zx(a)).sort((a,i)=>a.name.localeCompare(i.name))}),n}function Dx(e){if(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(t=>t&&t.trim()!==""))return!1;const n=(e.position||"").toLowerCase();return!((n.includes("srtp")||n.includes("intern")||n.includes("sep")||n.includes("visiting")||n.includes("high school"))&&!n.includes("affiliate"))}function jx(e){return e.filter(Dx).sort((n,t)=>{const a=n.enddate&&n.enddate.length>0?n.enddate[n.enddate.length-1]:"";return(t.enddate&&t.enddate.length>0?t.enddate[t.enddate.length-1]:"").localeCompare(a)})}const _l=E.memo(function({member:e}){const[n,t]=E.useState(e.image),a=Rx(e.email),i=a?Mx(a):null,r=()=>{e.altimage&&t(e.altimage)},o=()=>{t(e.image)},l=[{key:"orcid",icon:"fingerprint",label:"ORCID",url:`http://orcid.org/${e.orcid}`,isButton:!1},{key:"linkedIn",icon:"work",label:"LinkedIn",url:`http://www.linkedin.com/in/${e.linkedIn}`,isButton:!1},{key:"UCSF",icon:"account_circle",label:"UCSF Profile",url:`http://profiles.ucsf.edu/${e.UCSF}`,isButton:!1},{key:"scholar",icon:"school",label:"Scholar",url:`http://scholar.google.com/citations?user=${e.scholar}`,isButton:!0},{key:"twitTer",icon:"chat",label:"Twitter",url:`http://twitter.com/${e.twitTer}`,isButton:!1},{key:"bsky",icon:"chat_bubble",label:"Bluesky",url:`https://bsky.app/profile/${e.bsky}`,isButton:!1},{key:"github",icon:"code",label:"GitHub",url:`http://github.com/${e.github}`,isButton:!1}].filter(u=>e[u.key]),s=l.filter(u=>u.isButton),c=l.filter(u=>!u.isButton);return f.jsxs(Kp,{className:"member-card",id:e.name,children:[f.jsx("div",{className:"member-card__photo-wrapper",children:f.jsx($p,{src:n,alt:e.name,className:"member-card__photo",onMouseEnter:r,onMouseLeave:o})}),f.jsxs("div",{className:"member-card__info",children:[f.jsx("h3",{className:"member-card__name",children:e.name}),e.pronouns&&f.jsx("p",{className:"member-card__position",children:e.pronouns}),(a||e.website)&&f.jsxs("div",{className:"member-card__contact",children:[i&&f.jsx("span",{className:"member-card__email",children:i}),e.website&&f.jsx(Vt,{href:e.website,external:!0,children:"Website"})]}),s.length>0&&f.jsx("div",{className:"member-card__buttons",children:s.map(u=>f.jsx(Vt,{href:u.url,external:!0,variant:"button",className:"member-card__button",children:u.label},u.key))}),c.length>0&&f.jsx("div",{className:"member-card__links",children:c.map(u=>f.jsxs(Vt,{href:u.url,external:!0,className:"member-card__link",children:[f.jsx("span",{className:"material-icons",children:u.icon}),u.label]},u.key))}),e.description&&f.jsx("div",{className:"member-card__description",children:f.jsx(Dh,{children:e.description})})]})]})});_l.displayName="MemberCard";const Hx=[{filename:"2025-11-10-news.md",date:"2025-11-10",title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",link_title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",published:!0,layout:"post",group:"news",content:'Weixiong has a paper accepted to AAAI-2026, titled "MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training"',author:"",tags:[]},{filename:"2025-11-01-news.md",date:"2025-11-01",title:"Welcome Diao Xin to the lab as Postdoc",link_title:"Welcome Diao Xin to the lab as Postdoc",published:!0,layout:"post",group:"news",content:"Welcome Diao Xin to the lab as Postdoc",author:"",tags:[]},{filename:"2025-10-29-news.md",date:"2025-10-29",title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",link_title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",published:!0,layout:"post",group:"news",content:"Yan Zhu's work on a language model for PM2.5 and human health has been accepted to Environmental Science & Technology (a top journal in environmental science)",author:"",tags:[]},{filename:"2025-10-21-news.md",date:"2025-10-21",title:"Talk at 1st Asia Pacific Precision Oncology Conf",link_title:"Talk at 1st Asia Pacific Precision Oncology Conf",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a talk on Noncanonical circular RNAs as cancer diagnostic biomarkers at the [1st Asia Pacific Precision Oncology Conference](https://apacprecisiononcology.com) on 01/11/25",author:"",tags:[]},{filename:"2025-10-12-news.md",date:"2025-10-12",title:"The 10th Big Data Forum for Life and Health Sciences",link_title:"The 10th Big Data Forum for Life and Health Sciences",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a keynote talk at [The 10th Big Data Forum for Life and Health Sciences](https://ngdc.cncb.ac.cn/conference/bdf2025) on 15/10/25",author:"",tags:[]},{filename:"2025-09-01-news.md",date:"2025-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"",author:"",tags:[]},{filename:"2025-08-30-news.md",date:"2025-08-30",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Chunyu's paper, Adaptive control of dynamic networks, has been accepted to IEEE Trans on Network Science and Engineering",author:"",tags:[]},{filename:"2025-05-14-news.md",date:"2025-05-14",title:"Cracking the Code of Complex Diseases",link_title:"Cracking the Code of Complex Diseases",published:!0,layout:"post",group:"news",content:"[Cracking the Code of Complex Diseases](https://www.polyu.edu.hk/publications/excelximpact/en/issue/202516/cover-story/cracking-the-code-of-complex-diseases)",author:"",tags:[]},{filename:"2024-11-24-news.md",date:"2024-11-24",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to ACM Transactions on Intelligent Systems and Technology. The title is 'Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning'",author:"",tags:[]},{filename:"2024-11-01-join.md",date:"2024-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Huang Yin to the Lab as Research Fellow and Pan Chunyu as Postdoc!",author:"",tags:[]},{filename:"2024-10-01-join.md",date:"2024-10-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Chen Junyi to the Lab as RAP!",author:"",tags:[]},{filename:"2024-09-01-join.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Edao Abebe, Li Yixin, Han Nan, Wang Zhenqian, Wang Yuchuan and Zhang Jie to the Lab as PhD students!",author:"",tags:[]},{filename:"2024-09-01-news.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"We built our first foundation model on genomics, called dnaGrinder. A preprint of the manuscript on dnaGrinder is available at arXiv",author:"",tags:[]},{filename:"2024-09-01-promote.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan has been promoted to Principal Research Fellow, the highest rank in the research track. Congratulations, Shulan!",author:"",tags:[]},{filename:"2024-08-01-news.md",date:"2024-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has been appointed to the position of Associate Director of PolyU Academy of Interdisciplinary Research (PAIR)",author:"",tags:[]},{filename:"2024-05-01-news.md",date:"2024-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Welcome Zhang Chi to the Lab as PhD student!<br>Edao Abebe received <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span>',author:"",tags:[]},{filename:"2024-04-02-news.md",date:"2024-04-02",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to IJCAI-24. The title of the paper: Generalized taxonomy-guided graph neural networks",author:"",tags:[]},{filename:"2024-04-01-news.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Tu Yue to the Lab as Postdoc!",author:"",tags:[]},{filename:"2024-04-01-pub.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong published a paper with IEEE Transactions on Neural Networks and Learning Systems. The title of the paper: Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning",author:"",tags:[]},{filename:"2024-01-01-news.md",date:"2024-01-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Fu Qinghui and Ma Ke to the Lab as PhD students!",author:"",tags:[]},{filename:"2023-12-01-news.md",date:"2023-12-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Wang Zhenqian, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-join.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Wang Xin, a new coming postdoc, received PolyU Distinguished Postdoctoral Fellowship",author:"",tags:[]},{filename:"2023-11-01-join2.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Ma Ke, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-news.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on A neuroimaging-based precision medicine framework for depression was published online with Asian J Psychiatry",author:"",tags:[]},{filename:"2023-11-01-prestigious.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Weixiong was selected into the list of "Top 2% of Global Scientists"',author:"",tags:[]},{filename:"2023-09-01-pub.md",date:"2023-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on Total network controllability analysis discovers explainable drugs for Covid-19 treatment was published in Biology Direct",author:"",tags:[]},{filename:"2023-08-01-news.md",date:"2023-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan was promoted to Senior Research Fellow and took the position of STEM Lab manager",author:"",tags:[]},{filename:"2023-07-01-news.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong was interviewed on NOW NEWS, a Hong Kong TV news station, to discuss the newly funded RGC Strategic Target Grant (STG) funding on developing AI/genomic technologies to diagnose and treat major psychiatric disorders",author:"",tags:[]},{filename:"2023-07-01-promote.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong, as project PC, received RGC Strategic Target Grant (STG) funding (five years and $37 million) to develop AI, genomic and biomedical technologies for developing genetic and neuroimaging markers and integrative approaches for objective diagnosis and personalized therapy of major psychiatric disorders, including depression, schizophrenia, and bipolar disorder",author:"",tags:[]},{filename:"2023-07-01-pub.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on cancer-keeper genes as therapeutic targets published online with iScience, a Cell Press journal",author:"",tags:[]},{filename:"2023-05-01-news.md",date:"2023-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Dr. Qiu Shulan joined the lab as Research Fellow",author:"",tags:[]},{filename:"2023-04-01-news.md",date:"2023-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: Constructive learning meets homophily: Two birds with one stone",author:"",tags:[]},{filename:"2023-02-01-news.md",date:"2023-02-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: A survey of community detection approaches: From statistical modeling to deep learning",author:"",tags:[]},{filename:"2022-05-01-news.md",date:"2022-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong received Health and Medical Research Fund (HMRF, three years and $1.4 million) to study schizophrenia using systems biology approaches",author:"",tags:[]},{filename:"2025-2-01-join.md",date:"",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Tan Yejun, an RA in the lab, received both <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span> and <span class="fellowship-highlight">PolyU Presidential PhD Fellowship (PPPFS)</span>',author:"",tags:[]}],_x=Hx||[],zx=()=>{const[e,n]=E.useState([]);E.useEffect(()=>{const a=_x.filter(i=>i.group==="news"&&i.published!==!1).sort((i,r)=>i.date<r.date?1:i.date>r.date?-1:0);n(a)},[]);const t=a=>{if(!a)return"";const i=new Date(a),r=String(i.getDate()).padStart(2,"0"),o=String(i.getMonth()+1).padStart(2,"0"),l=String(i.getFullYear()).slice(-2);return`${r}/${o}/${l}`};return f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"news-container",children:e.map((a,i)=>f.jsx(jh,{post:a,formatDate:t},i))})})},Jx=()=>f.jsx("div",{className:"md-main-content",children:f.jsxs("div",{className:"research-container",children:[f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Integrated innovative artificial intelligence, genomic, and biomedical technologies in healthcare: Objective diagnosis, personalized therapy, and determining the etiology of major mental disorders"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Strategic Topic Grant (STG), HKD $37.236M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop innovative AI and genomic technologies for objective diagnosis and personalized treatment of major psychiatric disorders, including major depressive disorder, schizophrenia and bipolar disorder."]}),f.jsx("img",{src:O.static("img/projects/fig1.png"),alt:"Project 1 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Unravelling the black box between air pollution and public health for transformative air quality management"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Theme-based Research Scheme (TRS), HKD $41.4M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Develop integrated approaches that address the global puzzle of what components drive PM2.5 health effects in different regions."}),f.jsx("li",{children:"Generate solid evidence of key PM2.5 toxic components and emission sources to specific index diseases as a foundation for making public policies."})]})]}),f.jsx("img",{src:O.static("img/projects/fig2.png"),alt:"Project 2 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Understanding the molecular mechanism linking mRNA decay and capping with post-transcriptional gene silencing"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," NSFC/RGC Collaborative Research Scheme (NSFC/RGC CRS), HKD $3.6M + RMB 3M"]}),f.jsxs("div",{className:"research-description logo-row",style:{textAlign:"center"},children:[f.jsx("img",{src:O.static("img/logo/nsfc.png"),alt:"NSFC",style:{maxWidth:"180px",height:"auto",margin:"6px",display:"inline-block"}}),f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})]}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Determine if and how the translation process leads to ct-siRNA generation."}),f.jsx("li",{children:"Determine the effects of the defects in mRNA capping on siRNA generation and its interconnection with the translational process."}),f.jsx("li",{children:"Reveal biological functions and mechanisms linking ct-siRNA biogenesis and PTGS of genes with plant stress responses."})]})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Subtyping and diagnosis of schizophrenia by systems-biology analytics"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," Health and Medical Research Fund (HMRF), HKD $1.420M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/hmrf.png"),alt:"HMRF",style:{maxWidth:"260px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Define objective subtypes of schizophrenia using systems-biology analytics and develop personalized therapy for schizophrenia treatment."]}),f.jsxs("div",{className:"research-description",children:[f.jsx("img",{src:O.static("img/projects/fig3.png"),alt:"Project 4 image A",style:{maxWidth:"100%",height:"auto",marginRight:"6px"}}),f.jsx("img",{src:O.static("img/projects/fig4.png"),alt:"Project 4 image B",style:{maxWidth:"100%",height:"auto"}})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"High-resolution single-cell multi-omics: Joint profiling of multiple types of biomolecules in the same single cell"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Collaborative Research Fund (CRF), HKD $6.412M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop an innovative technology for profiling DNA, RNA and proteins in the same single cell at the same time; apply the new technology to cancer research."]}),f.jsx("img",{src:O.static("img/projects/fig5.png"),alt:"Project 5 image",style:{maxWidth:"100%",height:"auto"}})]})]})]})}),bd=({html:e})=>f.jsx("li",{dangerouslySetInnerHTML:{__html:e}}),Bx=[{html:`<a href="book.html"><em>State-Space Search: Algorithms,
              Complexity, Extensions and Applications</em></a>,
          Springer, 1999. ISBN 0-387-98832-7`,text:`State-Space Search: Algorithms,
              Complexity, Extensions and Applications,
          Springer, 1999. ISBN 0-387-98832-7`}],Ux={2e3:{year:"2000",items:[{html:`
          <p><font face="Arial">M. Tambe and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Towards flexible teamwork in
                persistent teams: Extended report</span>,&nbsp; <span
                style="font-style: italic;">Autonomous Agents and
                Multi-Agent Systems,</span><i> </i><b>3</b>(2):159-83,
              2000. (selected from the Best of ICMAS-98) </font></p>
        `,text:`M. Tambe and W. Zhang, Towards flexible teamwork in
                persistent teams: Extended report,&nbsp; Autonomous Agents and
                Multi-Agent Systems, 3(2):159-83,
              2000. (selected from the Best of ICMAS-98)`},{html:`
          <p><font face="Arial">R. E. Korf and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Divided-and-conquer frontier
                search applied to optimal sequence alignment</span>, <span
                style="font-style: italic;">Proc. 17-th National Conf.
                on Artificial Intelligence (AAAI-2000)</span>, Austin,
              Texas, July 30-August 3, 2000, pp.910-6. </font></p>
        `,text:`R. E. Korf and W. Zhang, Divided-and-conquer frontier
                search applied to optimal sequence alignment, Proc. 17-th National Conf.
                on Artificial Intelligence (AAAI-2000), Austin,
              Texas, July 30-August 3, 2000, pp.910-6.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Depth-first branch-and-bound vs. local search: A
                case study</span><i>, </i><span style="font-style:
                italic;">Proc. 17-th National Conf. on Artificial
                Intelligence (AAAI-2000)</span>, Austin, Texas, July
              30-August 3, 2000, pp.930-5.&nbsp; <a
                href="atsp-aaai00.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a><a
href="http://www.cs.wustl.edu/%7Ezhang/publications/atsp-aaai00.ps"> </a></font></p>
        `,text:`W. Zhang, Depth-first branch-and-bound vs. local search: A
                case study, Proc. 17-th National Conf. on Artificial
                Intelligence (AAAI-2000), Austin, Texas, July
              30-August 3, 2000, pp.930-5.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R. Hill, <span
                style="font-weight: bold;">A template-based and
                pattern-driven approach to situation awareness and
                assessment in virtual humans</span>, <span
                style="font-style: italic;">Proc. of 4th Intern. Conf.
                on Autonomous Agents (Agents 2000)</span>, Barcelona,
              Catalonia, Spain, June 3-7, 2000.&nbsp; <a
                href="awareness.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang and R. Hill, A template-based and
                pattern-driven approach to situation awareness and
                assessment in virtual humans, Proc. of 4th Intern. Conf.
                on Autonomous Agents (Agents 2000), Barcelona,
              Catalonia, Spain, June 3-7, 2000.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R. Hill, <span
                style="font-weight: bold;">Situation awareness and
                assessment: Issues and computational approaches</span>,
              <span style="font-style: italic;">Proc. 9th Conference on
                Computer Generated Forces and Behavioral Representation</span>,
              May 16-18, 2000.</font></p>
        `,text:`W. Zhang and R. Hill, Situation awareness and
                assessment: Issues and computational approaches,
              Proc. 9th Conference on
                Computer Generated Forces and Behavioral Representation,
              May 16-18, 2000.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Association-based multiple imputation in
                multivariate datasets: A summary</span>, <span
                style="font-style: italic;">Proc. 16-th Intern. Conf. on
                Data Engineering (ICDE-2000)</span>, San Diego, CA, Feb.
              29-March 3, 2000.</font></p>
        `,text:`W. Zhang, Association-based multiple imputation in
                multivariate datasets: A summary, Proc. 16-th Intern. Conf. on
                Data Engineering (ICDE-2000), San Diego, CA, Feb.
              29-March 3, 2000.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span
                style="font-weight: bold;">A study of complexity
                transitions on the asymmetric traveling salesman problem</span>,
              <span style="font-style: italic;">Artificial Intelligence</span>,
              <b>81</b>(1-2):223-39, 1996. &nbsp; <a href="tspaij.ps"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font> </p>
        `,text:`W. Zhang and R.E. Korf, A study of complexity
                transitions on the asymmetric traveling salesman problem,
              Artificial Intelligence,
              81(1-2):223-39, 1996. &nbsp;`},{html:`
          <p><font face="Arial">J.C. Pemberton and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Epsilon-transformation:
                Exploiting Phase Transitions to solve combinatorial
                optimization problems</span>, <span style="font-style:
                italic;">Artificial Intelligence</span>, <b>81</b>(1-2):297-325,



              1996.&nbsp; <a href="epsilonaij.ps"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font> </p>
        `,text:`J.C. Pemberton and W. Zhang, Epsilon-transformation:
                Exploiting Phase Transitions to solve combinatorial
                optimization problems, Artificial Intelligence, 81(1-2):297-325,



              1996.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">A note on the complexity of the asymmetric
                Traveling Salesman Problem</span>, <span
                style="font-style: italic;">Operations Research Letters</span>,
              <b>20:</b>31-8<b>, </b>1997.</font></p>
        `,text:`W. Zhang, A note on the complexity of the asymmetric
                Traveling Salesman Problem, Operations Research Letters,
              20:31-8, 1997.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span
                style="font-weight: bold;">Performance of linear-space
                search algorithms</span>, <span style="font-style:
                italic;">Artificial Intelligence</span>, <b>79</b>(2):241-92,



              1995.&nbsp; <a href="bnbaij.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font> </p>
        `,text:`W. Zhang and R.E. Korf, Performance of linear-space
                search algorithms, Artificial Intelligence, 79(2):241-92,



              1995.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span
                style="font-weight: bold;">Parallel Heap Operations on
                EREW PRAM</span>, <span style="font-style: italic;">J.
                Parallel and Distributed Computing</span>, <b>20</b>(2):248-55,



              1994.</font></p>
        `,text:`W. Zhang and R.E. Korf, Parallel Heap Operations on
                EREW PRAM, J.
                Parallel and Distributed Computing, 20(2):248-55,



              1994.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and N.S.V. Rao, <span
                style="font-weight: bold;">Heuristic tree search with
                nonparametric statistical inference methods</span>, <span
                style="font-style: italic;">J. Computer Mathematics</span>,
              <b>39</b>(1+2):133-52, 1991.</font></p>
        `,text:`W. Zhang and N.S.V. Rao, Heuristic tree search with
                nonparametric statistical inference methods, J. Computer Mathematics,
              39(1+2):133-52, 1991.`},{html:`
          <p><font face="Arial">S. Olariu, Z. Wen and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">A faster optimal algorithm
                for the measure problem</span>, <span
                style="font-style: italic;">Parallel Computing</span>, <b>17</b>,
              1991, pp.683-7.</font></p>
        `,text:`S. Olariu, Z. Wen and W. Zhang, A faster optimal algorithm
                for the measure problem, Parallel Computing, 17,
              1991, pp.683-7.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong><span style="font-weight: bold;">,
                Representation of assembly and automatic robot planning
                by Petri net</span>, <span style="font-style: italic;">IEEE



                Trans. on Systems, Man and Cybernetics</span>, <b>19</b>(2):418-22,



              1989.</font></p>
        `,text:`W. Zhang,
                Representation of assembly and automatic robot planning
                by Petri net, IEEE



                Trans. on Systems, Man and Cybernetics, 19(2):418-22,



              1989.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Flexible and approximate computation through
                state-space reduction</span>, <span style="font-style:
                italic;">Proc. 14-th Annual Conference on Uncertainty in
                Artificial Intelligence (UAI-98)</span>, Madison,
              Wisconsin, July 24-26, 1998, pp.531-38.</font></p>
        `,text:`W. Zhang, Flexible and approximate computation through
                state-space reduction, Proc. 14-th Annual Conference on Uncertainty in
                Artificial Intelligence (UAI-98), Madison,
              Wisconsin, July 24-26, 1998, pp.531-38.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong><span style="font-weight: bold;">,
                Complete Anytime Beam Search</span>, <span
                style="font-style: italic;">Proc. 15-th National Conf.
                on Artificial Intelligence (AAAI-98)</span>, Madison,
              Wisconsin, July 26-30, 1998, pp.425-30.</font></p>
        `,text:`W. Zhang,
                Complete Anytime Beam Search, Proc. 15-th National Conf.
                on Artificial Intelligence (AAAI-98), Madison,
              Wisconsin, July 26-30, 1998, pp.425-30.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Forward estimation for game-tree search</span>, <span
                style="font-style: italic;">Proc. 13-th National Conf.
                on Artificial Intelligence (AAAI-96)</span>, Portland,
              OR, 1996, pp.240-5</font></p>
        `,text:`W. Zhang, Forward estimation for game-tree search, Proc. 13-th National Conf.
                on Artificial Intelligence (AAAI-96), Portland,
              OR, 1996, pp.240-5`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and J. C. Pemberton, <span
                style="font-weight: bold;">Epsilon-transformation:
                Exploiting complexity transitions to solve combinatorial
                optimization problems - Initial results</span>, <span
                style="font-style: italic;">Proc. 12-th National Conf.
                on Artificial Intelligence (AAAI-94)</span>, Seattle,
              WA, July 31-Aug. 4, 1994, pp.895-900.</font></p>
        `,text:`W. Zhang and J. C. Pemberton, Epsilon-transformation:
                Exploiting complexity transitions to solve combinatorial
                optimization problems - Initial results, Proc. 12-th National Conf.
                on Artificial Intelligence (AAAI-94), Seattle,
              WA, July 31-Aug. 4, 1994, pp.895-900.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span
                style="font-weight: bold;">Depth-first vs. best-first
                search: New results</span>, <span style="font-style:
                italic;">Proc. 11-th National Conf. on Artificial
                Intelligence (AAAI-93)</span>, Washington, DC, July
              11-15, 1993, pp.769-75.</font></p>
        `,text:`W. Zhang and R.E. Korf, Depth-first vs. best-first
                search: New results, Proc. 11-th National Conf. on Artificial
                Intelligence (AAAI-93), Washington, DC, July
              11-15, 1993, pp.769-75.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong><span style="font-weight: bold;">,
                Truncated branch-and-bound: A case study on the
                asymmetric traveling salesman problem</span>, <span
                style="font-style: italic;">Proc. of AAAI 1993 Spring
                Symposium on AI and NP-Hard Problems</span>, Stanford,
              CA, March 23-25, 1993, pp.160-6. [<a
                href="atsp-aaai93-symp.ps">ps file</a>]</font></p>
        `,text:`W. Zhang,
                Truncated branch-and-bound: A case study on the
                asymmetric traveling salesman problem, Proc. of AAAI 1993 Spring
                Symposium on AI and NP-Hard Problems, Stanford,
              CA, March 23-25, 1993, pp.160-6. [ps file]`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span
                style="font-weight: bold;">An average-case analysis of
                branch-and-bound with applications: Summary of results</span>,
              <span style="font-style: italic;">Proc. 10-th National
                Conf. on Artificial Intelligence (AAAI-92)</span>, San
              Jose, CA, July 12-17, 1992, pp.545-50. </font></p>
        `,text:`W. Zhang and R.E. Korf, An average-case analysis of
                branch-and-bound with applications: Summary of results,
              Proc. 10-th National
                Conf. on Artificial Intelligence (AAAI-92), San
              Jose, CA, July 12-17, 1992, pp.545-50.`},{html:`
          <p><font face="Arial">Weixiong Zhang and Volker Sorge,
              Distributed Constraint Problem Solving and Reasoning in
              Multi-agent Systems, editers, IOS Press, 2004.</font></p>
        `,text:`Weixiong Zhang and Volker Sorge,
              Distributed Constraint Problem Solving and Reasoning in
              Multi-agent Systems, editers, IOS Press, 2004.`},{html:`
          <p><font face="Arial">Weixiong Zhang, Rina Dechter and Richard
              E. Korf, <a
                href="http://www.elsevier.com/gej-ng/10/10/48/198/27/show/toc.htt"><em>Artificial


                  Intelligence, vol. 129, no 1-2, </em>special issue on
                Heuristic Search</a>; Editorial: <a
                href="http://www.elsevier.com/gej-ng/10/10/48/198/27/show/toc.htt">Heuristic



                search in artificial intelligence</a><br>
            </font> </p>
        `,text:`Weixiong Zhang, Rina Dechter and Richard
              E. Korf, Artificial


                  Intelligence, vol. 129, no 1-2, special issue on
                Heuristic Search; Editorial: Heuristic



                search in artificial intelligence`},{html:`<font face="Arial">Weixiong Zhang and Sven Koenig, <a
              href="http://www.aaai.org/Press/Reports/Symposia/Spring/ss-99-07.html"><em>Search


                Techniques for Problem Solving Under Uncertainty and
                Incomplete Information</em></a>, Papers from 1999 AAAI
            Spring Symposium. ISBN 1-57735-106-1 </font>`,text:`Weixiong Zhang and Sven Koenig, Search


                Techniques for Problem Solving Under Uncertainty and
                Incomplete Information, Papers from 1999 AAAI
            Spring Symposium. ISBN 1-57735-106-1`},{html:`
          <p><font face="Arial">Weixiong Zhang,<span style="font-style:
                italic;"> <a
                  href="http://www.aaai.org/Conferences/AAAI/2006/aaai06tutorials.php#sa3">Computational


                  biology: Perspective and approaches based on feature
                  extraction and selection</a></span>, <em>National
                Conference on Artificial Intelligence (AAAI-06)</em>.<em></em></font></p>
        `,text:`Weixiong Zhang, Computational


                  biology: Perspective and approaches based on feature
                  extraction and selection, National
                Conference on Artificial Intelligence (AAAI-06).`},{html:`
          <p><font face="Arial">Weixiong Zhang and Sharlee Climer, <a
                href="http://ijcai05.csd.abdn.ac.uk/index.php?section=tutorialprog#t3">Techniques


                for computing and using bounds for combinatorial
                optimization problems</a>, <em>19th International Joint
                Conference on Artificial Intelligence (IJCAI-05)</em>.</font></p>
        `,text:`Weixiong Zhang and Sharlee Climer, Techniques


                for computing and using bounds for combinatorial
                optimization problems, 19th International Joint
                Conference on Artificial Intelligence (IJCAI-05).`},{html:`
          <p><font face="Arial">Weixiong&nbsp; Zhang and Sharlee Climer,
              <a
                href="http://www.aaai.org/Conferences/National/2005/tutorials05.html">Systematic



                bounding techniques for combinatorial optimization</a>,
              <em>12th National Conf. on Artificial Intelligence
                (AAAI-05)</em>.</font></p>
        `,text:`Weixiong&nbsp; Zhang and Sharlee Climer,
              Systematic



                bounding techniques for combinatorial optimization,
              12th National Conf. on Artificial Intelligence
                (AAAI-05).`},{html:`<font face="Arial">Carla Gomes, Tad Hogg, Toby Walsh and
            Weixiong Zhang, <a
href="http://www.cs.wustl.edu/%7Ezhang/links/ijcai-phase-transitions.html">Phase
Transitions
and
Structure
in
Combinatorial



              Problems</a>, <em>17th International Joint Conference on
              Artificial Intelligence (IJCAI-01).</em><em></em></font>`,text:`Carla Gomes, Tad Hogg, Toby Walsh and
            Weixiong Zhang, Phase
Transitions
and
Structure
in
Combinatorial



              Problems, 17th International Joint Conference on
              Artificial Intelligence (IJCAI-01).`}]},2001:{year:"2001",items:[{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Iterative state-space reduction for flexible
                computation</span>, <span style="font-style: italic;">Artificial



                Intelligence</span>, <b>126</b>(1-2):109-138,
              2001.&nbsp; <a
                href="http://www.elsevier.nl/gej-ng/10/10/48/185/26/show/toc.htt"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, Iterative state-space reduction for flexible
                computation, Artificial



                Intelligence, 126(1-2):109-138,
              2001.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Phase transitions and backbones of 3-SAT and
                Maximum 3-SAT</span>, <span style="font-style: italic;">Proc.



                7th Intern. Conf. on Principles and Practice of
                Consstraint Programming (CP-2001)</span>, Paphos,
              Cyprus, Nov. 26 - Dec. 1, 2001.&nbsp; <a href="cp2001.ps"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, Phase transitions and backbones of 3-SAT and
                Maximum 3-SAT, Proc.



                7th Intern. Conf. on Principles and Practice of
                Consstraint Programming (CP-2001), Paphos,
              Cyprus, Nov. 26 - Dec. 1, 2001.&nbsp;`},{html:`
          <p><font face="Arial">J. Cirasella, D.S. Johnson, L. A.
              McGeoch and <strong>W. Zhang</strong>, <span style="font-weight: bold;">The



                asymmetric Traveling Salesman Problem: Algorithms,
                instance generators, and tests</span>, in <span
                style="font-style: italic;">Proc. of ALENEX 2001</span>.&nbsp;



              <a href="atsp-alenex.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`J. Cirasella, D.S. Johnson, L. A.
              McGeoch and W. Zhang, The



                asymmetric Traveling Salesman Problem: Algorithms,
                instance generators, and tests, in Proc. of ALENEX 2001.&nbsp;`}]},2002:{year:"2002",items:[{html:`
          <p><font face="Arial">D. S. Johnson, G. Gutin, L. A. McGeoch,
              A. Yeo, <strong>W. Zhang</strong> and A. Zverovich, <span
                style="font-weight: bold;">Experimental analysis of
                heuristics for the ATSP</span>, in <span
                style="font-style: italic;">The Traveling Salesman
                Problem and its Variations</span>, G. Gutin and A.
              Punnen, Editors, Kluwer Academic Publishers, 2002,
              pp.445-88.&nbsp; <a href="atspchap.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font></p>
        `,text:`D. S. Johnson, G. Gutin, L. A. McGeoch,
              A. Yeo, W. Zhang and A. Zverovich, Experimental analysis of
                heuristics for the ATSP, in The Traveling Salesman
                Problem and its Variations, G. Gutin and A.
              Punnen, Editors, Kluwer Academic Publishers, 2002,
              pp.445-88.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Search techniques</span>, to appear as Chapter 8
              of <span style="font-style: italic;">Handbook of Data
                Mining and Knowledge Discovery</span>, Oxford University
              Press, 2002.</font></p>
        `,text:`W. Zhang, Search techniques, to appear as Chapter 8
              of Handbook of Data
                Mining and Knowledge Discovery, Oxford University
              Press, 2002.`},{html:`
          <p><font face="Arial">Z. Deng and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Localization and dynamic
                tracking using wireless-networked sensors and
                multi-agent technology: First steps</span>, <em>IEICE
                Transactions on Fundamentals of Electronics,
                Communications and Computer Sciences, </em><strong>E85-A</strong>(11)


              2002 (invited paper).<span style="font-weight: bold;"></span></font></p>
        `,text:`Z. Deng and W. Zhang, Localization and dynamic
                tracking using wireless-networked sensors and
                multi-agent technology: First steps, IEICE
                Transactions on Fundamentals of Electronics,
                Communications and Computer Sciences, E85-A(11)


              2002 (invited paper).`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and L. Wittenburg, <span
                style="font-weight: bold;">Distributed breakout
                revisited</span>, in <span style="font-style: italic;">Proc.


                18-th National Conf. on Artificial Intelligence
                (AAAI-2002)</span>, Edmonton, Canada, July 28-August 1,
              2002, pp.352-7.&nbsp; <a href="dba-aaai02.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang and L. Wittenburg, Distributed breakout
                revisited, in Proc.


                18-th National Conf. on Artificial Intelligence
                (AAAI-2002), Edmonton, Canada, July 28-August 1,
              2002, pp.352-7.&nbsp;`},{html:`
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Searching for backbones and
                fat: A limit-crossing approach with applications</span>,
              in <em>Proc. 18-th National Conf. on Artificial
                Intelligence (AAAI-2002)</em>, Edmonton, Canada, July
              28-August 1, 2002, pp.707-12.&nbsp; <a
                href="lc-aaai02.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`S. Climer and W. Zhang, Searching for backbones and
                fat: A limit-crossing approach with applications,
              in Proc. 18-th National Conf. on Artificial
                Intelligence (AAAI-2002), Edmonton, Canada, July
              28-August 1, 2002, pp.707-12.&nbsp;`},{html:`
          <p><font face="Arial">A. K. Sen, A. Bagchi and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">An average-case analysis of
                graph search</span>, in <span style="font-style:
                italic;">Proc. 18-th National Conf. on Artificial
                Intelligence (AAAI-2002)</span>, Edmonton, Canada, July
              28-August 1, 2002, pp.757-62.&nbsp; <a
                href="AAAI02ASen.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`A. K. Sen, A. Bagchi and W. Zhang, An average-case analysis of
                graph search, in Proc. 18-th National Conf. on Artificial
                Intelligence (AAAI-2002), Edmonton, Canada, July
              28-August 1, 2002, pp.757-62.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Phase transitions, backbones, measurement
                accuracy, and phase aware approximations: The ATSP as a
                case study</span>, <em>Proc. 4th Intern. Workshop on
                Integration of AI and OR techniques in Constraint
                Programming for Combinatorial Optimization Problems</em><span
                style="font-style: italic;"> (AI-OR-CP-02)</span>, 2002.</font></p>
        `,text:`W. Zhang, Phase transitions, backbones, measurement
                accuracy, and phase aware approximations: The ATSP as a
                case study, Proc. 4th Intern. Workshop on
                Integration of AI and OR techniques in Constraint
                Programming for Combinatorial Optimization Problems (AI-OR-CP-02), 2002.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, G. Wang and L. Wittenburg, <span
                style="font-weight: bold;">Distributed stochastic search
                for constraint satisfaction and optimization:
                Parallelism, phase transitions and performance</span>,
              in <em>Proc. </em><span style="font-style: italic;">AAAI
                Workshop on Probabilistic Approaches in Search</span>,
              Edmonton, Canada, July 28, 2002, pp.53-9.&nbsp; <a
                href="dsa-aaai.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, G. Wang and L. Wittenburg, Distributed stochastic search
                for constraint satisfaction and optimization:
                Parallelism, phase transitions and performance,
              in Proc. AAAI
                Workshop on Probabilistic Approaches in Search,
              Edmonton, Canada, July 28, 2002, pp.53-9.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and Z. Xing, <span
                style="font-weight: bold;">Distributed breakout vs.
                distributed stochastic: A comparative evaluation on scan
                scheduling</span>, in <span style="font-style: italic;">Proc.



                AAMAS-02 Third International Workshop on Distributed
                Constraint Reasoning</span>, July 16, 2002, Bologna,
              Italy, pp.192-201.&nbsp; <a href="scan-aamas.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang and Z. Xing, Distributed breakout vs.
                distributed stochastic: A comparative evaluation on scan
                scheduling, in Proc.



                AAMAS-02 Third International Workshop on Distributed
                Constraint Reasoning, July 16, 2002, Bologna,
              Italy, pp.192-201.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, Z. Deng, G. Wang, L.
              Wittenburg and Z. Xing, <span style="font-weight: bold;">Distributed



                problem solving in sensor networks</span>, in <span
                style="font-style: italic;">Proc. </span><em>1st
                Intern. Joint Conf. on Autonomous Agents &amp; Multi
                Agent Systems</em><span style="font-style: italic;">
                (AAMAS-02)</span>, July 15-19, Bologna, Italy, poster
              paper.&nbsp; <a href="aamas02-zhang1.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font> </p>
        `,text:`W. Zhang, Z. Deng, G. Wang, L.
              Wittenburg and Z. Xing, Distributed



                problem solving in sensor networks, in Proc. 1st
                Intern. Joint Conf. on Autonomous Agents &amp; Multi
                Agent Systems
                (AAMAS-02), July 15-19, Bologna, Italy, poster
              paper.&nbsp;`}]},2003:{year:"2003",items:[{html:`
          <p><font face="Arial">R. Souvenir, J. Buhler, G. Stormo and W.
              Zhang*, <span style="font-weight: bold;">Selecting
                degenerate multiplex PCR primers</span>, in <em>Proc.
                Workshop on Algorithms in Bioinformatics (WABI-03)</em>,
              September 15-20, 2003, Budapest, Hungary.&nbsp; [<a
                href="http://www.cse.wustl.edu/%7Ezhang/projects/mips.zip">software</a>]&nbsp;



              <a href="mips-wabi03.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`R. Souvenir, J. Buhler, G. Stormo and W.
              Zhang*, Selecting
                degenerate multiplex PCR primers, in Proc.
                Workshop on Algorithms in Bioinformatics (WABI-03),
              September 15-20, 2003, Budapest, Hungary.&nbsp; [software]&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Phase transitions of the asymmetric Traveling
                Salesman</span>, <em>Proc. 18th Intern. Joint Conf. on
                AI (IJCAI-03)</em>, Acapulco, Mexico, Aug. 9-15, 2003,
              pages 1202-7.&nbsp; <a href="atsp-ijcai03.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, Phase transitions of the asymmetric Traveling
                Salesman, Proc. 18th Intern. Joint Conf. on
                AI (IJCAI-03), Acapulco, Mexico, Aug. 9-15, 2003,
              pages 1202-7.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, A. Rangan and M. Looks, <span
                style="font-weight: bold;">Backbone guided local search
                for maximum satisfiability</span>, <em>Proc. 18th
                Intern. Joint Conf. on Artificial Intelligence
                (IJCAI-03)</em>, Acapulco, Mexico, Aug. 9-15, 2003,
              pages 1179-84.&nbsp; [<a
href="http://www.cse.wustl.edu/%7Ezhang/projects/backboneGuidedSearch/bgwalksat/index.html">software</a>]&nbsp;



              <a href="bgwalksat-ijcai03.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, A. Rangan and M. Looks, Backbone guided local search
                for maximum satisfiability, Proc. 18th
                Intern. Joint Conf. on Artificial Intelligence
                (IJCAI-03), Acapulco, Mexico, Aug. 9-15, 2003,
              pages 1179-84.&nbsp; [software]&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, Z. Xing, G. Wang and L.
              Wittenburg, <span style="font-weight: bold;">An analysis
                and application of distributed constraint satisfaction
                and optimization algorithms in sensor networks</span>, <em>Proc.



                2nd Intern. Joint Conf. on Autonomous Agents &amp; Multi
                Agent Systems (AAMAS-03)</em>, Melbourne, Australia,
              July 14-18, 2003, pages 185-92.&nbsp; <a
                href="dsadba-aamas03.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, Z. Xing, G. Wang and L.
              Wittenburg, An analysis
                and application of distributed constraint satisfaction
                and optimization algorithms in sensor networks, Proc.



                2nd Intern. Joint Conf. on Autonomous Agents &amp; Multi
                Agent Systems (AAMAS-03), Melbourne, Australia,
              July 14-18, 2003, pages 185-92.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and L. Wittenburg, <span
                style="font-weight: bold;">Distributed breakout
                algorithm for distributed constraint optimization
                problems - DBArelax</span>, <em>Proc. 2nd Intern. Joint
                Conf. on Autonomous Agents &amp; Multi Agent Systems
                (AAMAS-03)</em>, Melbourne, Australia, July 14-18, 2003,
              (poster).</font></p>
        `,text:`W. Zhang and L. Wittenburg, Distributed breakout
                algorithm for distributed constraint optimization
                problems - DBArelax, Proc. 2nd Intern. Joint
                Conf. on Autonomous Agents &amp; Multi Agent Systems
                (AAMAS-03), Melbourne, Australia, July 14-18, 2003,
              (poster).`},{html:`
          <p><font face="Arial">G. Wang, <strong>W. Zhang</strong>, R. Mailler and V.
              Lesser, <span style="font-weight: bold;">Analysis of
                negotiation protocols by distributed search</span>, in <em>Distributed



                Sensor Networks: A Multiagent Systems Approach</em>, V.
              Lesser, C. Ortiz, and M. Tambe (eds.), Kluwer, 2003, pages
              339-62.</font></p>
        `,text:`G. Wang, W. Zhang, R. Mailler and V.
              Lesser, Analysis of
                negotiation protocols by distributed search, in Distributed



                Sensor Networks: A Multiagent Systems Approach, V.
              Lesser, C. Ortiz, and M. Tambe (eds.), Kluwer, 2003, pages
              339-62.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, G. Wang, Z. Xing and L.
              Wittenburg, <span style="font-weight: bold;">A
                comparative study of distributed constraint algorithms
                with applications to problems in sensor networks</span>,
              in <em>Distributed Sensor Networks: A Multiagent Systems
                Approach</em>, V. Lesser, C. Ortiz, and M. Tambe (eds.),
              Kluwer, 2003, pages 319-38.</font></p>
        `,text:`W. Zhang, G. Wang, Z. Xing and L.
              Wittenburg, A
                comparative study of distributed constraint algorithms
                with applications to problems in sensor networks,
              in Distributed Sensor Networks: A Multiagent Systems
                Approach, V. Lesser, C. Ortiz, and M. Tambe (eds.),
              Kluwer, 2003, pages 319-38.`}]},2011:{year:"2011",items:[{html:`
          <p><font face="Arial">C.E. Joyce, X. Zhou, J. Xia, C. Ryan, B.
              Thrash, A. Menter, <strong>W. Zhang</strong>* and A.M. Bowcock*, <span
                style="font-weight: bold;">Deep sequencing of small RNAs
                from human skin reveals major alterations in the
                psoriasis miRNAome</span>, <span style="font-style:
                italic;">Human Molecular Genetics</span>, <span
                style="font-weight: bold;">20</span>(20):4025-40, 2011.
              <a href="HMG11.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid; border: 0px solid; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`C.E. Joyce, X. Zhou, J. Xia, C. Ryan, B.
              Thrash, A. Menter, W. Zhang* and A.M. Bowcock*, Deep sequencing of small RNAs
                from human skin reveals major alterations in the
                psoriasis miRNAome, Human Molecular Genetics, 20(20):4025-40, 2011.`},{html:`<font face="Arial"><strong>W. Zhang</strong>*, S. Gao, X. Zhou, P.
            Chellappan, Z. Chen, X. Zhou, X. Zhang, N. Fromuth, G.
            Coutino, M. Coffey, H. Jin*, <span style="font-weight:
              bold;">Bacterial-responsive microRNAs regulate plant
              innate immunity by modulating plant hormone networks</span>,
            <span style="font-style: italic;">Plant Molecular Biology</span>,
            <span style="font-weight: bold;">75</span>(1-2):93-105,
            2011. <a href="http://www.ncbi.nlm.nih.gov/pubmed/21153682"><img
                alt="pmb" src="pdf.jpg" style="border: 0px solid;
                border: 0px solid; width: 12px; height: 13px;"></a></font>`,text:`W. Zhang*, S. Gao, X. Zhou, P.
            Chellappan, Z. Chen, X. Zhou, X. Zhang, N. Fromuth, G.
            Coutino, M. Coffey, H. Jin*, Bacterial-responsive microRNAs regulate plant
              innate immunity by modulating plant hormone networks,
            Plant Molecular Biology,
            75(1-2):93-105,
            2011.`},{html:`
          <p><font face="Arial"><strong style="font-weight: bold;
                font-style: italic; text-decoration: underline;"><em></em></strong>W.



              Zhang*, S. Guo, J. Xia, X. Zhou, P. Chellappan, X. Zhou,
              X. Zhang and H. Jin*, <span style="font-weight: bold;">Multiple



                distinct small RNAs originate from the same microRNA
                precursors</span>, <span style="font-style: italic;">Genome



                Biology</span>, <span style="font-weight: bold;">11</span>:R81,



              2010.<span style="font-weight: bold;"></span> <a
                href="http://genomebiology.com/2010/11/8/R81/abstract"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"> <img style="width: 91px;
                  height: 12px;" alt="" src="highlyaccessed.gif"></a></font>
          </p>
        `,text:`W.



              Zhang*, S. Guo, J. Xia, X. Zhou, P. Chellappan, X. Zhou,
              X. Zhang and H. Jin*, Multiple



                distinct small RNAs originate from the same microRNA
                precursors, Genome



                Biology, 11:R81,



              2010.`},{html:`
          <p><font face="Arial">T.A. Reese, J. Xia, L.S. Johnson, X.
              Zhou, <strong>W. Zhang</strong>* and H.W. Virgin*, <span
                style="font-weight: bold;">Identification of novel
                microRNA-like molecules generated from herpesvirus and
                host tRNA transcripts</span>, <span style="font-style:
                italic;">J. Virology</span>, <span style="font-weight:
                bold;">84</span>(19):10344-53, 2010. <a
                href="http://jvi.asm.org/cgi/content/abstract/JVI.00707-10v1"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`T.A. Reese, J. Xia, L.S. Johnson, X.
              Zhou, W. Zhang* and H.W. Virgin*, Identification of novel
                microRNA-like molecules generated from herpesvirus and
                host tRNA transcripts, J. Virology, 84(19):10344-53, 2010.`},{html:`
          <p><font face="Arial">P. Chellappan, J. Xia, X. Zhou, S. Gao,
              X. Zhang, G. Coutino, F. Vazquez, <strong>W. Zhang</strong>* and H. Jin*<span
                style="font-weight: bold;"></span>, <span
                style="font-weight: bold;">siRNAs from miRNA sites
                mediate DNA methylation of target genes</span>, <span
                style="font-style: italic;">Nucleic Acids Research</span>,
              <span style="font-weight: bold;">38</span>(20):6883-94,
              2010. <a
                href="http://nar.oxfordjournals.org/cgi/content/full/gkq590"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`P. Chellappan, J. Xia, X. Zhou, S. Gao,
              X. Zhang, G. Coutino, F. Vazquez, W. Zhang* and H. Jin*, siRNAs from miRNA sites
                mediate DNA methylation of target genes, Nucleic Acids Research,
              38(20):6883-94,
              2010.`},{html:`
          <p><font face="Arial">C. Zeng, W. Wang, Y. Zheng, X. Chen, X.
              Bo, S. Song, <strong>W. Zhang</strong>* and M. Peng*, <span
                style="font-weight: bold;">Conservation and divergence
                of microRNAs and their functions in Euphorbiaceous
                plants</span>, <span style="font-style: italic;">Nucleic


                Acids Research</span>, <span style="font-weight: bold;">38</span>(3):981-95,


              2010. <a
                href="http://nar.oxfordjournals.org/cgi/screenpdf/gkp1035"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font> </p>
        `,text:`C. Zeng, W. Wang, Y. Zheng, X. Chen, X.
              Bo, S. Song, W. Zhang* and M. Peng*, Conservation and divergence
                of microRNAs and their functions in Euphorbiaceous
                plants, Nucleic


                Acids Research, 38(3):981-95,


              2010.`},{html:`
          <p><font face="Arial">Y-F. Li, Y. Zheng, C. Addo-Quaye, L.
              Zhang, A. Saini, G. Jagadeeswaran, M. Axtell, <strong>W. Zhang</strong> and
              R. Sunkar*,&nbsp;<span style="font-weight: bold;">Transcriptome-wide



                identification of microRNA targets in rice</span>,<span
                style="font-style: italic;"> The Plant Journal</span>,
              62(5):742-59, 2010. <a
                href="http://www3.interscience.wiley.com/journal/123304837/abstract"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a><a
                href="http://www.biomedcentral.com/1471-2164/11/52"> </a><span
                class="src"></span></font></p>
        `,text:`Y-F. Li, Y. Zheng, C. Addo-Quaye, L.
              Zhang, A. Saini, G. Jagadeeswaran, M. Axtell, W. Zhang and
              R. Sunkar*,&nbsp;Transcriptome-wide



                identification of microRNA targets in rice, The Plant Journal,
              62(5):742-59, 2010.`},{html:`
          <p><font face="Arial">G. Jagadeeswaran, Y. Zheng, N.
              Sumathipala, H. Jiang, E. Arese, J.L. Soulages, <strong>W. Zhang</strong>
              and R. Sunkar*, <span style="font-weight: bold;">Deep
                sequencing of small RNA libraries reveals dynamic
                regulation of conserved and novel microRNAs and
                microRNA-stars during silkworm development</span>,<span
                style="font-style: italic;"> BMC Genomics</span>, <span
                style="font-weight: bold;">11:</span>52, <span
                style="font-style: italic;"></span>2010. <a
                href="http://www.biomedcentral.com/1471-2164/11/52"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"> </a><img style="width: 91px;
                height: 12px;" alt="" src="highlyaccessed.gif"></font></p>
        `,text:`G. Jagadeeswaran, Y. Zheng, N.
              Sumathipala, H. Jiang, E. Arese, J.L. Soulages, W. Zhang
              and R. Sunkar*, Deep
                sequencing of small RNA libraries reveals dynamic
                regulation of conserved and novel microRNAs and
                microRNA-stars during silkworm development, BMC Genomics, 11:52, 2010.`},{html:`<font face="Arial">Y. Zheng* and <strong>W. Zhang</strong>*, <span
              style="font-weight: bold;">Animal microRNA target
              prediction using diverse sequence-specific determinants</span>,
            <span style="font-style: italic;">J. Bioinformatics and
              Computational Biology</span>, <span style="font-weight:
              bold;">8</span>(4):763-88, 2010. <a
              href="http://www.worldscinet.com/jbcb/08/0804/S0219720010004896.html"><img
                alt="" src="pdf.jpg" style="border: 0px solid ; width:
                12px; height: 13px;"></a> `,text:`Y. Zheng* and W. Zhang*, Animal microRNA target
              prediction using diverse sequence-specific determinants,
            J. Bioinformatics and
              Computational Biology, 8(4):763-88, 2010.`},{html:`
          <p><font face="Arial"><strong style="font-weight: normal;">M.
                Ray</strong> and <strong>W. Zhang</strong>*, <span style="font-weight:
                bold;">Analysis of Alzheimer's disease severity across
                brain regions by topological analysis of gene
                co-expression networks</span>, <em>BMC Systems Biology</em>,
              <span style="font-weight: bold;">4</span>:136, <em></em>2010.



              <a href="http://www.biomedcentral.com/1752-0509/4/136"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font> </p>
        `,text:`M.
                Ray and W. Zhang*, Analysis of Alzheimer's disease severity across
                brain regions by topological analysis of gene
                co-expression networks, BMC Systems Biology,
              4:136, 2010.`},{html:`
          <p><font face="Arial"><strong style="font-weight: normal;">J.
                Ruan</strong>*, A.K. Dean and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">A general co-expression
                network-based approach to gene expression analysis:
                Comparison and applications</span>, <em>BMC Systems
                Biology</em>, <span style="font-weight: bold;">4</span>:8<em>,
              </em>2010. <a
                href="http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"> </a><img style="width: 91px;
                height: 12px;" alt="" src="highlyaccessed.gif"> [<a
                href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]<br>
            </font></p>
        `,text:`J.
                Ruan*, A.K. Dean and W. Zhang*, A general co-expression
                network-based approach to gene expression analysis:
                Comparison and applications, BMC Systems
                Biology, 4:8,
              2010.   [Software]`},{html:`<font face="Arial">S. Pinaki, <strong>W. Zhang</strong>, P. Cobb and A.
            Nehorai*, <span style="font-weight: bold;">Gene
              reachability using Page Ranking on gene co-expression
              networks</span>, Chapter 21, in <span style="font-style:
              italic;">Link Mining: Models, Algorithms and Applications</span>,
            Springer, pp.557-68, 2010.</font>`,text:`S. Pinaki, W. Zhang, P. Cobb and A.
            Nehorai*, Gene
              reachability using Page Ranking on gene co-expression
              networks, Chapter 21, in Link Mining: Models, Algorithms and Applications,
            Springer, pp.557-68, 2010.`},{html:`<font face="Arial">X. Zhou, J. Ruan and <strong>W. Zhang</strong>, <span
              style="font-weight: bold;">Promoter prediction based on a
              multiple instance learning scheme</span>, <span
              style="font-style: italic;">ACM Intern. Conf. on
              Bioinformatics and Computational Biology</span>, Aug. 2-4,
            2010, Niagara Falls, NY, USA, accepted as a full paper.</font>`,text:`X. Zhou, J. Ruan and W. Zhang, Promoter prediction based on a
              multiple instance learning scheme, ACM Intern. Conf. on
              Bioinformatics and Computational Biology, Aug. 2-4,
            2010, Niagara Falls, NY, USA, accepted as a full paper.`},{html:`
          <p><font face="Arial">S. Climer, A. Templeton and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">SplittingHeirs: Inferring
                haplotypes by optimizing resultant dense graphs</span>,<span
                style="font-style: italic;"> ACM Intern. Conf. on
                Bioinformatics and Computational Biology</span>, Aug.
              2-4, 2010, Niagara Falls, NY, USA, accepted as a full
              paper.<br>
            </font> </p>
        `,text:`S. Climer, A. Templeton and W. Zhang, SplittingHeirs: Inferring
                haplotypes by optimizing resultant dense graphs, ACM Intern. Conf. on
                Bioinformatics and Computational Biology, Aug.
              2-4, 2010, Niagara Falls, NY, USA, accepted as a full
              paper.`},{html:`<font face="Arial">G. Jaeger and <strong>W. Zhang</strong>, <span
              style="font-weight: bold;">Phase transitions of and an
              efficient algorithm for the directed Hamiltonian cycle
              problem</span>,<span style="font-style: italic;"> J.
              Artificial Intelligence Research, </span>39:663-87, 2010.
            <a href="http://jair.org/papers/paper3109.html"><img
                alt="http://jair.org/papers/paper3109.html"
                src="pdf.jpg" style="border: 0px solid; border: 0px
                solid; width: 12px; height: 13px;"></a></font> `,text:`G. Jaeger and W. Zhang, Phase transitions of and an
              efficient algorithm for the directed Hamiltonian cycle
              problem, J.
              Artificial Intelligence Research, 39:663-87, 2010.`},{html:`<font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span
              style="font-weight: bold;">A novel transition based
              encoding scheme for planning as Satisfiability</span>, <span
              style="font-style: italic;">Proc. 24th AAAI Conference on
              Artificial Intelligence (AAAI-10</span><span
              style="font-style: italic;">)</span>, Atlanta, Georgia,
            USA, July 11-15, 2010; <span style="color: rgb(204, 0, 0);">Winner



              of the Outstanding Paper Award of AAAI-10</span>.&nbsp;<a
              href="SASE-Encoding-aaai10.pdf"><img alt="aaai00 best
                paper" src="pdf.jpg" style="border: 0px solid; border:
                0px solid; width: 12px; height: 13px;"></a> (<a
              href="http://www.cse.wustl.edu/%7Ehuangr/sase.htm">source
              code</a>)<br>
          </font> `,text:`R. Huang, Y. Chen and W. Zhang, A novel transition based
              encoding scheme for planning as Satisfiability, Proc. 24th AAAI Conference on
              Artificial Intelligence (AAAI-10), Atlanta, Georgia,
            USA, July 11-15, 2010; Winner



              of the Outstanding Paper Award of AAAI-10.&nbsp; (source
              code)`},{html:`<font face="Arial">G. Jaeger and <strong>W. Zhang</strong>, A SAT based
            effective algorithm for the directed Hamiltonian cycle
            problem, Proc. of CSR-2010, 216-27.</font>`,text:`G. Jaeger and W. Zhang, A SAT based
            effective algorithm for the directed Hamiltonian cycle
            problem, Proc. of CSR-2010, 216-27.`},{html:`
          <p><font face="Arial">X. Zhou, R. Sunkar, H. Jin, J-K. Zhu and
              <strong>W. Zhang</strong>*, <span style="font-weight: bold;">Genome-wide
                identification and analysis of small RNAs originate from
                natural antisense transcripts in <span
                  style="font-style: italic;">Oryza sativa</span></span>,
              <span style="font-style: italic;">Genome Research, </span><span
                style="font-weight: bold;">19</span>:70-8, 2009.&nbsp; <a
                href="ricenat.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`X. Zhou, R. Sunkar, H. Jin, J-K. Zhu and
              W. Zhang*, Genome-wide
                identification and analysis of small RNAs originate from
                natural antisense transcripts in Oryza sativa,
              Genome Research, 19:70-8, 2009.&nbsp;`},{html:`
          <p><font face="Arial">G. Jagadeeswaran, Y. Zheng, Y-f. Li,
              L.I. Shukla, J. Matts, P. Hoyt, S.L. Macmil, G.B. Wiley,
              B.A. Roe, <strong>W. Zhang</strong>, R. Sunkar*, <span style="font-weight:
                bold;">Cloning and characterization of small RNAs from
                Medicago truncatula reveals novel legume-specific and
                candidate microRNAs</span>, <span style="font-style:
                italic;">New Phytologist, </span>184(1):85-98, 2009.</font></p>
        `,text:`G. Jagadeeswaran, Y. Zheng, Y-f. Li,
              L.I. Shukla, J. Matts, P. Hoyt, S.L. Macmil, G.B. Wiley,
              B.A. Roe, W. Zhang, R. Sunkar*, Cloning and characterization of small RNAs from
                Medicago truncatula reveals novel legume-specific and
                candidate microRNAs, New Phytologist, 184(1):85-98, 2009.`},{html:`
          <p><font face="Arial">A.M. Reddy, Y. Zheng, G. Jagadeeswaran,
              S.L. Macmil, G.B. Wiley, B.A. Roe, U. Desilva, <strong>W. Zhang</strong>
              and R. Sunkar*, <span style="font-weight: bold;">Cloning,
                characterization and expression analysis of porcine
                microRNAs</span>, <span style="font-style: italic;">BMC
                Genomics</span>, <span style="font-weight: bold;">10</span>:65,



              2009.&nbsp; <a
                href="http://www.biomedcentral.com/1471-2164/10/65"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a> &nbsp;<img style="width:
                91px; height: 12px;" alt="" src="highlyaccessed.gif"></font>
          </p>
        `,text:`A.M. Reddy, Y. Zheng, G. Jagadeeswaran,
              S.L. Macmil, G.B. Wiley, B.A. Roe, U. Desilva, W. Zhang
              and R. Sunkar*, Cloning,
                characterization and expression analysis of porcine
                microRNAs, BMC
                Genomics, 10:65,



              2009.&nbsp;  &nbsp;`},{html:`
          <p><font face="Arial">J.A. Webster, J.R. Cibbs, J. Clarke, M.
              Ray, <strong>W. Zhang</strong>, P. Holmans, K. Rohrer, A. Zhao, L. Marlowe,
              M. Kaleem, D.S. McCorquodale III, C. Cuello, D. Leung, L.
              Bryden, P. Nath, V.L. Zisman, K. Joshipura, M.J.
              Huentelman, D. H Lince, K.D. Coon, D.W. Craig, J.V.
              Pearson, C.B. Heward, E.M. Reiman, D. Stephan, J. Hardy,
              A.J. Myers*, <span style="font-weight: bold;">Genetic
                control of human brain transcript expression in
                Alzheimer's disease</span>, <span style="font-style:
                italic;">American J. of Human Genetics</span>, <span
                style="font-weight: bold;">84</span>:445-458, 2009.<strong
                style="font-weight: normal;"></strong></font></p>
        `,text:`J.A. Webster, J.R. Cibbs, J. Clarke, M.
              Ray, W. Zhang, P. Holmans, K. Rohrer, A. Zhao, L. Marlowe,
              M. Kaleem, D.S. McCorquodale III, C. Cuello, D. Leung, L.
              Bryden, P. Nath, V.L. Zisman, K. Joshipura, M.J.
              Huentelman, D. H Lince, K.D. Coon, D.W. Craig, J.V.
              Pearson, C.B. Heward, E.M. Reiman, D. Stephan, J. Hardy,
              A.J. Myers*, Genetic
                control of human brain transcript expression in
                Alzheimer's disease, American J. of Human Genetics, 84:445-458, 2009.`},{html:`
          <p><font face="Arial">M. Ray and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">Integrating genetic and
                phenotypic information to analyze Alzheimer's disease</span>,
              <span style="font-style: italic;">J. of Alzheimer's
                Disease</span>, <span style="font-weight: bold;">16</span>(1):73-84,



              2009.&nbsp; <a href="multireg.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a><strong style="font-weight:
                normal;"></strong></font></p>
        `,text:`M. Ray and W. Zhang*, Integrating genetic and
                phenotypic information to analyze Alzheimer's disease,
              J. of Alzheimer's
                Disease, 16(1):73-84,



              2009.&nbsp;`},{html:`
          <p><font face="Arial"><strong style="font-weight: normal;">J.
                Ruan</strong>*, Y Deng, E.J. Perkins and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">An ensemble learning approach
                to reverse-engineering transcriptional regulatory
                networks from time-series expression data</span>, <em>BMC


                Genomics</em>, Suppl 1:S8, 2009. <br>
            </font> </p>
        `,text:`J.
                Ruan*, Y Deng, E.J. Perkins and W. Zhang*, An ensemble learning approach
                to reverse-engineering transcriptional regulatory
                networks from time-series expression data, BMC


                Genomics, Suppl 1:S8, 2009.`},{html:`
          <p><font face="Arial">S. Climer, G. Jaeger, A. Templeton and
              <strong>W. Zhang</strong>*, <span style="font-weight: bold;">How frugal is
                mother nature with haplotypes?</span> <span
                style="font-style: italic;">Bioinformatics</span>, <span
                style="font-weight: bold;">25</span>(1):68-74, 2009. <a
                href="frugal.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`S. Climer, G. Jaeger, A. Templeton and
              W. Zhang*, How frugal is
                mother nature with haplotypes? Bioinformatics, 25(1):68-74, 2009.`},{html:`
          <p><font face="Arial">G. Jaeger, S. Climer and <strong>W. Zhang</strong>. <span
                style="font-weight: bold;">Complete parsimony haplotype
                inference problem and algorithms, </span><span
                style="font-style: italic;">Proc. 17th Annual European
                Symposium on Algorithms</span> (ESA-09), Copenhagen,
              Sept, 7-9, 2009.</font></p>
        `,text:`G. Jaeger, S. Climer and W. Zhang. Complete parsimony haplotype
                inference problem and algorithms, Proc. 17th Annual European
                Symposium on Algorithms (ESA-09), Copenhagen,
              Sept, 7-9, 2009.`},{html:`
          <p><font face="Arial">Y. Chen, R. Huang, Z. Xing and <strong>W. Zhang</strong>,
              <span style="font-weight: bold;">Long-distance mutual
                exclusion for planning</span>, <em>Artificial
                Intelligence</em>, <span style="font-weight: bold;">173</span>:365-91,


              2009. <a href="londexaij.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`Y. Chen, R. Huang, Z. Xing and W. Zhang,
              Long-distance mutual
                exclusion for planning, Artificial
                Intelligence, 173:365-91,


              2009.`},{html:`<font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span
              style="font-weight: bold;">An optimal temporally
              expressive planner: Initial results and application to P2P
              network optimization</span>, <span style="font-style:
              italic;">Proc. 19th Intern. Conf. on Automated Planning
              and Scheduling</span> (ICAPS-09), Thessaloniki, Greece,
            Sept. 19-23, 2009.<br>
          </font> `,text:`R. Huang, Y. Chen and W. Zhang, An optimal temporally
              expressive planner: Initial results and application to P2P
              network optimization, Proc. 19th Intern. Conf. on Automated Planning
              and Scheduling (ICAPS-09), Thessaloniki, Greece,
            Sept. 19-23, 2009.`},{html:`
          <p><font face="Arial">Y. Xu, X. Zhou and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">MicroRNA prediction with a
                novel ranking algorithm based on random walks</span>, <span
                style="font-style: italic;">Bioinformatics </span><span
                style="font-weight: bold;">24</span>:i50-i58, 2008, (<span
                style="font-style: italic;">Proc. 16th Annual Intern.
                Conf. on Intelligent Systems for Molecular Biology</span>
              <span style="font-style: italic;">(ISMB-2008)</span>). <a
                href="miRank.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>
          </p>
        `,text:`Y. Xu, X. Zhou and W. Zhang*, MicroRNA prediction with a
                novel ranking algorithm based on random walks, Bioinformatics 24:i50-i58, 2008, (Proc. 16th Annual Intern.
                Conf. on Intelligent Systems for Molecular Biology
              (ISMB-2008)).`},{html:`
          <p><font face="Arial">R. Sunkar, X. Zhou, Y. Zheng, <strong>W. Zhang</strong>
              and J-K. Zhu*, <span style="font-weight: bold;">Identification



                of novel and candidate miRNAs in rice by high throughput
                sequencing</span>, <span style="font-style: italic;">BMC



                Plant Biology</span>, <span style="font-weight: bold;">8</span>:25,



              2008. <a
                href="http://www.biomedcentral.com/1471-2229/8/25"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a>&nbsp;&nbsp; <img
                style="width: 91px; height: 12px;" alt=""
                src="highlyaccessed.gif">&nbsp; </font></p>
        `,text:`R. Sunkar, X. Zhou, Y. Zheng, W. Zhang
              and J-K. Zhu*, Identification



                of novel and candidate miRNAs in rice by high throughput
                sequencing, BMC



                Plant Biology, 8:25,



              2008. &nbsp;&nbsp; &nbsp;`},{html:`
          <p><font face="Arial">X. Zhou, G. Wang, K. Sutoh, J-K. Zhu and
              <strong>W. Zhang</strong>*, <span style="font-weight: bold;">Identification



                of cold inducible microRNAs in plants by transcriptome
                analysis</span>, <span style="font-style: italic;">Biochim



                Biophys Acta</span>, <span style="font-weight: bold;">1779</span>(11):780-8,



              2008. <a href="coldmirBBA.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`X. Zhou, G. Wang, K. Sutoh, J-K. Zhu and
              W. Zhang*, Identification



                of cold inducible microRNAs in plants by transcriptome
                analysis, Biochim



                Biophys Acta, 1779(11):780-8,



              2008.`},{html:`
          <p><font face="Arial">M. Ray, J. Ruan and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">Variations in the
                transcriptome of Alzheimer's disease reveal modular
                networks involved in cardiovascular diseases</span>, <span
                style="font-style: italic;">Genome Biology</span>, <span
                style="font-weight: bold;">9</span>(10):R148, 2008. <a
href="http://genomebiology.com/content/pdf/gb-2008-9-10-r148.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a>&nbsp; <img style="width:
                91px; height: 12px;" alt="" src="highlyaccessed.gif"></font>
          </p>
        `,text:`M. Ray, J. Ruan and W. Zhang*, Variations in the
                transcriptome of Alzheimer's disease reveal modular
                networks involved in cardiovascular diseases, Genome Biology, 9(10):R148, 2008. &nbsp;`},{html:`
          <p><font face="Arial">J.E. McDunn, K. Husain, A.D. Polpitiya,
              A. Burykin, J. Ruan, Q. Li, W. Schierding, N. Lin, D.
              Dixon, <strong>W. Zhang</strong>, C.M. Coopersmith, W.M. Dunne, M. Colonna,
              B.K. Ghosh and J.P. Cobb*, <span style="font-weight:
                bold;">Plasticity of the systemic inflammatory reponse
                to acute infection during critical illness: Development
                of the riboleukogram</span>, <span style="font-style:
                italic;">PLoS ONE</span>, <span style="font-weight:
                bold;">3</span>(2):e1564, 2008. <a
href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0001564"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a><a href="PLoSONE-vap.pdf"> </a></font></p>
        `,text:`J.E. McDunn, K. Husain, A.D. Polpitiya,
              A. Burykin, J. Ruan, Q. Li, W. Schierding, N. Lin, D.
              Dixon, W. Zhang, C.M. Coopersmith, W.M. Dunne, M. Colonna,
              B.K. Ghosh and J.P. Cobb*, Plasticity of the systemic inflammatory reponse
                to acute infection during critical illness: Development
                of the riboleukogram, PLoS ONE, 3(2):e1564, 2008.`},{html:`
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Identifying network
                communities with a high resolution</span>,<span
                style="font-weight: bold;"> </span><span
                style="font-style: italic;">Physical Review E</span>, <span
                style="font-weight: bold;">77</span>:016104, 2008. <a
href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0001564"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"><br>
              </a></font></p>
        `,text:`J. Ruan and W. Zhang, Identifying network
                communities with a high resolution, Physical Review E, 77:016104, 2008.`},{html:`
          <p><font face="Arial">Y. Chen, R. Huang and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Fast planning by search in
                domain transition graphs</span>, <span
                style="font-style: italic;">Proc. 23rd AAAI Conference
                on Artificial Intelligence (AAAI-08</span><span
                style="font-style: italic;">)</span>, Chicago, IL, USA,
              July 13-17, 2008.&nbsp; <a
                href="http://www.cse.wustl.edu/%7Echen/public/DTG.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`Y. Chen, R. Huang and W. Zhang, Fast planning by search in
                domain transition graphs, Proc. 23rd AAAI Conference
                on Artificial Intelligence (AAAI-08), Chicago, IL, USA,
              July 13-17, 2008.&nbsp;`},{html:`
          <p><font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">DTG-Plan: Fast planning by
                search in domain transition graphs</span>, <span
                style="font-style: italic;">Proc. 6th International
                Planning Competition, International Conf. on Automated
                Planning and Scheduling, </span>2008.&nbsp; <a
                href="http://www.cse.wustl.edu/%7Echen/public/DTG-Plan.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`R. Huang, Y. Chen and W. Zhang, DTG-Plan: Fast planning by
                search in domain transition graphs, Proc. 6th International
                Planning Competition, International Conf. on Automated
                Planning and Scheduling, 2008.&nbsp;`},{html:`  
          <p><font face="Arial">X. Zhou, G. Wang and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">UV-B light responsive
                microRNA genes in <span style="font-style: italic;">Arabidopsis



                  thaliana</span>, </span><span style="font-style:
                italic;">Molecular Systems Biology</span>, <span
                style="font-weight: bold;">3</span>:103, 2007. <a
                href="msb4100143.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>
          </p>
        `,text:`X. Zhou, G. Wang and W. Zhang*, UV-B light responsive
                microRNA genes in Arabidopsis



                  thaliana, Molecular Systems Biology, 3:103, 2007.`},{html:`
          <p><font face="Arial">X. Zhou, J. Ruan, G. Wang and <strong>W. Zhang</strong>*,
              <span style="font-weight: bold;">Characterization and
                identification of microRNA core promoters in four model
                species</span>, <em>PLoS Computational Biology</em>, <span
                style="font-weight: bold;">3</span>(3):e37, 2007. <a
href="http://www.ploscompbiol.org/article/info:doi%2F10.1371%2Fjournal.pcbi.0030037"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a>. <span
                style="text-decoration: underline;">[</span><a
                href="http://cic.cse.wustl.edu/microrna/promoters.html">Supplemental



                materials</a>] </font></p>
        `,text:`X. Zhou, J. Ruan, G. Wang and W. Zhang*,
              Characterization and
                identification of microRNA core promoters in four model
                species, PLoS Computational Biology, 3(3):e37, 2007. . [Supplemental



                materials]`},{html:`
          <p><font face="Arial">M. Ray, S. Dharmarajan, J. Freudenberg,
              <strong>W. Zhang</strong>* and G.A. Patterson*, <span style="font-weight:
                bold;">Expression profiling of human donor lungs to
                understand primary graft dysfunction after lung
                transplantation</span>,<span style="font-weight: bold;">
              </span><span style="font-style: italic;">American J. of
                Transplantation</span>, <span style="font-weight:
                bold;">7</span>:2396-405, 2007.&nbsp; <a
                href="lung-j.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>
          </p>
        `,text:`M. Ray, S. Dharmarajan, J. Freudenberg,
              W. Zhang* and G.A. Patterson*, Expression profiling of human donor lungs to
                understand primary graft dysfunction after lung
                transplantation,
              American J. of
                Transplantation, 7:2396-405, 2007.&nbsp;`},{html:`
          <p><font face="Arial">H. Zeng, L. Luo, <strong>W. Zhang</strong>, J. Zhou, Z.
              Li, H. Liu, T. Zhu, X. Feng and Y. Zhong*, <span
                style="font-weight: bold;">PlantQTL-GE: A database for
                searching candidate genes by gene expression and QTL
                information</span>, <em>Nucleic Acids Research</em>, <span
                style="font-weight: bold;">35</span>:D879-82, 2007. <a
href="http://nar.oxfordjournals.org/cgi/content/full/gkl814v1"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font> </p>
        `,text:`H. Zeng, L. Luo, W. Zhang, J. Zhou, Z.
              Li, H. Liu, T. Zhu, X. Feng and Y. Zhong*, PlantQTL-GE: A database for
                searching candidate genes by gene expression and QTL
                information, Nucleic Acids Research, 35:D879-82, 2007.`},{html:`
          <p><font face="Arial">X. Zhou and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">Combinatory circuits of
                miRNAs and transcription factors for plant gene
                regulation</span><span style="font-weight: bold;"><span
                  style="font-style: italic;"></span>, </span><span
                style="font-style: italic;">RECOMB Satellite Conference
                on Systems Biology</span>, San Diego, Nov. 30 - Dec. 1,
              2007.&nbsp;</font></p>
        `,text:`X. Zhou and W. Zhang*, Combinatory circuits of
                miRNAs and transcription factors for plant gene
                regulation, RECOMB Satellite Conference
                on Systems Biology, San Diego, Nov. 30 - Dec. 1,
              2007.&nbsp;`},{html:`
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">An efficient spectral
                algorithm for network community discovery and its
                applications to biological and social networks</span>, <span
                style="font-style: italic;">Proc. IEEE Intern. Conf. on
                Data Mining, ICDM-07</span>, Omaha, NE, USA, Oct. 28-31,
              2007. <a href="network-icdm.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font> </p>
        `,text:`J. Ruan and W. Zhang, An efficient spectral
                algorithm for network community discovery and its
                applications to biological and social networks, Proc. IEEE Intern. Conf. on
                Data Mining, ICDM-07, Omaha, NE, USA, Oct. 28-31,
              2007.`},{html:`
          <p><font face="Arial">M. Ray, S. Dharmarajan, J. Freudenberg,
              G.A. Patterson and <strong>W. Zhang</strong>*, <span style="font-weight:
                bold;">Gene expression profiling and machine learning to
                understand and predict primary graft dysfunction</span>,<span
                style="font-weight: bold;"> </span><span
                style="font-style: italic;">Proc. IEEE 7-th Intern.
                Conf. on BioInfornatics &amp; BioEngineering</span>,
              Boson, MA, Oct. 14-17<span style="font-weight: bold;"></span>,
              2007.</font></p>
        `,text:`M. Ray, S. Dharmarajan, J. Freudenberg,
              G.A. Patterson and W. Zhang*, Gene expression profiling and machine learning to
                understand and predict primary graft dysfunction, Proc. IEEE 7-th Intern.
                Conf. on BioInfornatics &amp; BioEngineering,
              Boson, MA, Oct. 14-17,
              2007.`},{html:`
          <p><font face="Arial">R. Souvenir, J. Buhler, G. Stormo and W.
              Zhang*, <span style="font-weight: bold;">An iterative
                method for selecting degenerate multiplex PCR primers</span>,
              <em>Methods in Molecular Biology, </em>402:245-68, 2007.
              <a href="pcrprimer.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a>
              [<a href="http://www.cse.wustl.edu/%7Ezhang/projects/mips.zip">software</a>]</font></p>
        `,text:`R. Souvenir, J. Buhler, G. Stormo and W.
              Zhang*, An iterative
                method for selecting degenerate multiplex PCR primers,
              Methods in Molecular Biology, 402:245-68, 2007.
              
              [software]`},{html:`
          <p><font face="Arial">M. Ray, J. Freudenberg and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">A comprehensive analysis of
                the effect of microarray data preprocessing methods on
                differentially expressed transcript selection</span>, in
              <span style="font-style: italic;">Normalization Concepts
                for Microarray Technologies</span>, Phillip Stafford
              (editor), Taylor and Francis Publications, 2007.&nbsp; <a
                href="normalization-bookchapter.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font></p>
        `,text:`M. Ray, J. Freudenberg and W. Zhang*, A comprehensive analysis of
                the effect of microarray data preprocessing methods on
                differentially expressed transcript selection, in
              Normalization Concepts
                for Microarray Technologies, Phillip Stafford
              (editor), Taylor and Francis Publications, 2007.&nbsp;`},{html:`
          <p><font face="Arial">Z. Xing, Y. Chen and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Long-distance mutual
                exclusions for propositional planning</span>, <span
                style="font-style: italic;">Proc. 20th Intern. Joint
                Conf. on </span><em>Artificial Intelligence </em><span
                style="font-style: italic;">(IJCAI-07)</span>,
              Hyderabad, India, Jan. 9-12, 2007.&nbsp; <a
                href="ijcai07final.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>
          </p>
        `,text:`Z. Xing, Y. Chen and W. Zhang, Long-distance mutual
                exclusions for propositional planning, Proc. 20th Intern. Joint
                Conf. on Artificial Intelligence (IJCAI-07),
              Hyderabad, India, Jan. 9-12, 2007.&nbsp;`},{html:`
          <p><font face="Arial">G. Wang and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">A steganalysis-based approach
                to comprehensive identification and characterization of
                functional regulatory elements</span>, <em>Genome
                Biology</em>, <span style="font-weight: bold;">7</span>(6):R49,



              2006.&nbsp;[<a href="http://cic.cse.wustl.edu/wordspy">software</a>]&nbsp;



              <a href="http://genomebiology.com/2006/7/6/R49"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a>&nbsp; <img style="width:
                91px; height: 12px;" alt="" src="highlyaccessed.gif"></font></p>
        `,text:`G. Wang and W. Zhang*, A steganalysis-based approach
                to comprehensive identification and characterization of
                functional regulatory elements, Genome
                Biology, 7(6):R49,



              2006.&nbsp;[software]&nbsp;



              &nbsp;`},{html:`
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Rearrangement clustering:
                Pitfalls, remedies and applications</span>, <em>J.
                Machine Learning Research</em>, <span
                style="font-weight: bold;">7</span>:919-43, 2006. [<a
                href="http://cic.cse.wustl.edu/TSP_k/">software</a>]&nbsp;



              <a
                href="http://jmlr.csail.mit.edu/papers/volume7/climer06a/climer06a.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`S. Climer and W. Zhang, Rearrangement clustering:
                Pitfalls, remedies and applications, J.
                Machine Learning Research, 7:919-43, 2006. [software]&nbsp;`},{html:`
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">A bi-dimensional regression
                tree approach to the modeling of gene expression
                regulation</span>, <em>Bioinformatics</em>, <span
                style="font-weight: bold;">22</span>(3):332-40, 2006. <a
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=Abstract&amp;list_uids=16303796&amp;query_hl=3&amp;itool=pubmed_docsum"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`J. Ruan and W. Zhang*, A bi-dimensional regression
                tree approach to the modeling of gene expression
                regulation, Bioinformatics, 22(3):332-40, 2006.`},{html:`
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Identification and evaluation
                of weak community structures in networks</span>, <em>Proc.



                21st National Conf. on Artificial Intelligence,
                (AAAI-06)</em>, Boston, Massachusetts, July 16-20, 2006,
              pp.470-5.&nbsp; <a href="aaai06.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a><br>
            </font> </p>
        `,text:`J. Ruan and W. Zhang, Identification and evaluation
                of weak community structures in networks, Proc.



                21st National Conf. on Artificial Intelligence,
                (AAAI-06), Boston, Massachusetts, July 16-20, 2006,
              pp.470-5.&nbsp;`},{html:`
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">Identification and evaluation
                of functional modules in gene co-expression networks, </span><span
                style="font-style: italic;">RECOMB Satellite Conference
                on Systems Biology</span>, San Diego, Dec. 1-3, 2006,
              (oral presentation).</font></p>
        `,text:`J. Ruan and W. Zhang*, Identification and evaluation
                of functional modules in gene co-expression networks, RECOMB Satellite Conference
                on Systems Biology, San Diego, Dec. 1-3, 2006,
              (oral presentation).`},{html:`
          <p><font face="Arial">X. Zhou, G. Wang and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">UV-B light responsive
                microRNA genes in <span style="font-style: italic;">Arabidopsis



                  thaliana</span>, </span><span style="font-style:
                italic;">RECOMB Satellite Conference on Systems Biology</span>,
              San Diego, Dec. 1-3, 2006, (oral presentation).</font></p>
        `,text:`X. Zhou, G. Wang and W. Zhang*, UV-B light responsive
                microRNA genes in Arabidopsis



                  thaliana, RECOMB Satellite Conference on Systems Biology,
              San Diego, Dec. 1-3, 2006, (oral presentation).`},{html:`
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Cut-and-solve: A linear
                search strategy for combinatorial optimization problems</span>,
              <em>Artificial Intelligence</em>, <span
                style="font-weight: bold;">170</span>(8-9):714-38,
              2006.&nbsp; <a href="cutsolve.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a> [<a
                href="http://cic.cse.wustl.edu/cnstsp">software</a>]&nbsp;&nbsp;</font></p>
        `,text:`S. Climer and W. Zhang, Cut-and-solve: A linear
                search strategy for combinatorial optimization problems,
              Artificial Intelligence, 170(8-9):714-38,
              2006.&nbsp;  [software]&nbsp;&nbsp;`},{html:`
          <p><font face="Arial">Z. Xing, Y. Chen and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">An efficient hybrid strategy
                for temporal planning</span>, <span style="font-style:
                italic;">Proc. 3rd Intern. Conf. on Integration of AI
                and OR Techniques for Constraint Programming for
                Combinatorial Optimization Problems (CP-AI-OR 2006)</span>,
              Cork, Ireland, May 30-June 2, 2006.&nbsp; <a
                href="cpaior06.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`Z. Xing, Y. Chen and W. Zhang, An efficient hybrid strategy
                for temporal planning, Proc. 3rd Intern. Conf. on Integration of AI
                and OR Techniques for Constraint Programming for
                Combinatorial Optimization Problems (CP-AI-OR 2006),
              Cork, Ireland, May 30-June 2, 2006.&nbsp;`},{html:`
          <p><font face="Arial">Z. Xing, Y. Chen and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Optimal STRIPS planning by
                maximum satisfiability and accumulative learning</span>,
              <em>Proc. Intern. Conf. on Automated Planning and
                Scheduling (ICAPS-06)</em>, Cumbia, UK, June 6-10, 2006,
              pp.442-7.&nbsp; <a href="icaps06.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font> </p>
        `,text:`Z. Xing, Y. Chen and W. Zhang, Optimal STRIPS planning by
                maximum satisfiability and accumulative learning,
              Proc. Intern. Conf. on Automated Planning and
                Scheduling (ICAPS-06), Cumbia, UK, June 6-10, 2006,
              pp.442-7.&nbsp;`},{html:`
          <p><font face="Arial">Z. Xing and Y. Chen and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">MaxPlan: Optimal planning by
                decomposed satisfiability and backward reduction</span>,
              <em>Proc. 5th International Planning Competition, Intern.
                Conf. on Automated Planning and Scheduling (ICAPS-06)</em>,
              Cumbia, UK, June 6-10, 2006, pp.53-6. (<span style="color:
                rgb(204, 0, 0);">First Place Award</span>, Optimal
              Planning Track)&nbsp; <a href="MaxPlan-final.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`Z. Xing and Y. Chen and W. Zhang, MaxPlan: Optimal planning by
                decomposed satisfiability and backward reduction,
              Proc. 5th International Planning Competition, Intern.
                Conf. on Automated Planning and Scheduling (ICAPS-06),
              Cumbia, UK, June 6-10, 2006, pp.53-6. (First Place Award, Optimal
              Planning Track)&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>*, J. Ruan, T-h. D. Ho, Y. You,
              T. Yu and R.S. Quatrano, <em style="font-weight: bold;">Cis</em><span
                style="font-weight: bold;">-regulatory element based
                targeted gene finding: Genome-wide identification of
                ABA- and abiotic stress-responsive genes in </span><em
                style="font-weight: bold;">Arabidopsis thaliana</em>, <em>
                Bioinformatics</em>, <strong>21</strong>(14):3074-81,
              2005.&nbsp; <a
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15890746&amp;query_hl=1"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang*, J. Ruan, T-h. D. Ho, Y. You,
              T. Yu and R.S. Quatrano, Cis-regulatory element based
                targeted gene finding: Genome-wide identification of
                ABA- and abiotic stress-responsive genes in Arabidopsis thaliana, 
                Bioinformatics, 21(14):3074-81,
              2005.&nbsp;`},{html:`
          <p><font face="Arial">G. Wang, T. Yu and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">WordSpy: Identify
                transcription factor binding motifs by building a
                dictionary and learning a grammar</span>, <em>Nucleic
                Acids Research</em>, <strong>33</strong>:W412-6, 2005.
              [<a href="http://cic.cse.wustl.edu/wordspy">web server</a>]&nbsp;



              <a
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15980501&amp;query_hl=4"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`G. Wang, T. Yu and W. Zhang*, WordSpy: Identify
                transcription factor binding motifs by building a
                dictionary and learning a grammar, Nucleic
                Acids Research, 33:W412-6, 2005.
              [web server]&nbsp;`},{html:`
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">CAGER: Classification
                analysis of gene expression regulation using multiple
                information sources</span>, <em>BMC Bioinformatics</em>,
              <strong>6</strong>:114, 2005.&nbsp; <a
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15890068&amp;query_hl=6"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`J. Ruan and W. Zhang*, CAGER: Classification
                analysis of gene expression regulation using multiple
                information sources, BMC Bioinformatics,
              6:114, 2005.&nbsp;`},{html:`
          <p><font face="Arial">G. Wang and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">Genome-wide identification of
                cis-regulatory elements: A steganalysis approach</span><em></em>,
              <em>Proc. of First Annual RECOMB Satellite Workshop on
                Systems Biology and the Second Annual RECOMB Satellite
                Workshop on Regulatory Genomics</em>, San Diego, CA,
              Dec. 2-4, 2005. (Oral presentation. The final version
              appeared in <em>Genome Biology</em> in 2006.)</font></p>
        `,text:`G. Wang and W. Zhang*, Genome-wide identification of
                cis-regulatory elements: A steganalysis approach,
              Proc. of First Annual RECOMB Satellite Workshop on
                Systems Biology and the Second Annual RECOMB Satellite
                Workshop on Regulatory Genomics, San Diego, CA,
              Dec. 2-4, 2005. (Oral presentation. The final version
              appeared in Genome Biology in 2006.)`},{html:`
          <p><font face="Arial">X. Zhou, J. Ruan, G. Wang and <strong>W. Zhang</strong>*,
              <span style="font-weight: bold;">Characterization of the
                promoters of microRNA genes: A genome-scale analysis on
              </span><em style="font-weight: bold;">C. elegans</em><span
                style="font-weight: bold;">, </span><em
                style="font-weight: bold;">A. thaliana</em><span
                style="font-weight: bold;"> and </span><em
                style="font-weight: bold;">H. sapiens</em>, <em>Proc.
                of First Annual RECOMB Satellite Workshop on Systems
                Biology and the Second Annual RECOMB Satellite Workshop
                on Regulatory Genomics</em>, San Diego, CA, Dec. 2-4,
              2005. (Poster presentation. The final version will appear
              in <em>PLoS Computational Biology</em>.</font></p>
        `,text:`X. Zhou, J. Ruan, G. Wang and W. Zhang*,
              Characterization of the
                promoters of microRNA genes: A genome-scale analysis on
              C. elegans, A. thaliana and H. sapiens, Proc.
                of First Annual RECOMB Satellite Workshop on Systems
                Biology and the Second Annual RECOMB Satellite Workshop
                on Regulatory Genomics, San Diego, CA, Dec. 2-4,
              2005. (Poster presentation. The final version will appear
              in PLoS Computational Biology.`},{html:`
          <p><font face="Arial">R. Korf, <strong>W. Zhang</strong>, I. Thayer and H.
              Hohwald, <span style="font-weight: bold;">Frontier search</span>,
              <em>J. ACM</em>, <strong>52</strong>(5):715-48,
              2005.&nbsp; <a
href="http://portal.acm.org/citation.cfm?id=1089023.1089024&amp;coll=GUIDE&amp;dl=GUIDE&amp;idx=1089023&amp;part=periodical&amp;WantType=periodical&amp;title=Journal%20of%20the%20ACM%20%28JACM%29&amp;CFID=72757175&amp;CFTOKEN=93721332"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font> </p>
        `,text:`R. Korf, W. Zhang, I. Thayer and H.
              Hohwald, Frontier search,
              J. ACM, 52(5):715-48,
              2005.&nbsp;`},{html:`
          <p><font face="Arial">Z. Xing and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">MaxSolver: An efficient exact
                algorithm for (weighted) maximum satisfiability</span>,
              <em>Artificial Intelligence</em>, <strong>164</strong>(1-2):47-80,


              2005. [<a href="http://cic.cse.wustl.edu/maxsolver">software</a>]&nbsp;



              <a href="maxsolver.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`Z. Xing and W. Zhang, MaxSolver: An efficient exact
                algorithm for (weighted) maximum satisfiability,
              Artificial Intelligence, 164(1-2):47-80,


              2005. [software]&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, G. Wang, Z. Xing and L.
              Wittenberg, <span style="font-weight: bold;">Distributed
                stochastic search and distributed breakout: Properties,
                comparison and applications to constraint optimization
                problems in sensor networks</span>, <em>Artificial
                Intelligence</em>, <strong>161</strong>(1-2):55-87,
              2005.&nbsp; <a href="distsearch.pdf"><img alt=""
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;
                  height: 13px;"></a></font></p>
        `,text:`W. Zhang, G. Wang, Z. Xing and L.
              Wittenberg, Distributed
                stochastic search and distributed breakout: Properties,
                comparison and applications to constraint optimization
                problems in sensor networks, Artificial
                Intelligence, 161(1-2):55-87,
              2005.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and M. Looks <span
                style="font-weight: bold;">A novel local search
                algorithm for the Traveling Salesman Problem that
                exploits backbones</span>, <em>Proc. 19th Intern. Joint
                Conf. on Artificial Intelligence (IJCAI-05)</em>.&nbsp;
              <a href="bgtsp.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>
          </p>
        `,text:`W. Zhang and M. Looks A novel local search
                algorithm for the Traveling Salesman Problem that
                exploits backbones, Proc. 19th Intern. Joint
                Conf. on Artificial Intelligence (IJCAI-05).&nbsp;`},{html:`
          <p><font face="Arial">J. Ruan, G. Stormo and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">ILM: A web server for
                predicting RNA secondary structures with pseudoknots</span>,
              <em>Nucleic Acids Research</em>, <strong>32</strong>:W146-9,



              2004.&nbsp;[<a href="http://cic.cse.wustl.edu/RNA/">web server</a>]&nbsp; <a
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15215368&amp;query_hl=8"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`J. Ruan, G. Stormo and W. Zhang*, ILM: A web server for
                predicting RNA secondary structures with pseudoknots,
              Nucleic Acids Research, 32:W146-9,



              2004.&nbsp;[web server]&nbsp;`},{html:`
          <p><font face="Arial">J. Ruan, G. Stormo and <strong>W. Zhang</strong>*, <span
                style="font-weight: bold;">An iterated loop matching
                approach to the prediction of RNA secondary structures
                with pseudoknots</span>, <em>Bioinformatics</em>, <strong>20</strong>(1)58-66,



              2004.&nbsp; [<a href="http://cic.cse.wustl.edu/RNA/">softare



                and web server</a>]&nbsp; <a
                href="http://www.cs.wustl.edu/%7Ezhang/projects/rna/ilm/index.html"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`J. Ruan, G. Stormo and W. Zhang*, An iterated loop matching
                approach to the prediction of RNA secondary structures
                with pseudoknots, Bioinformatics, 20(1)58-66,



              2004.&nbsp; [softare



                and web server]&nbsp;`},{html:`
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Take a walk and cluster
                genes: A TSP-based approach to optimal rearrangement
                clustering</span>, <em>Proc. Intern. Conf. on Machine
                Learning (ICML-04)</em>, Alberta, Canada, July 4-8,
              2004.&nbsp; [<a href="http://cic.cse.wustl.edu/TSP_k/">software</a>]&nbsp;



              <a href="tsp-icml04.pdf"><img alt="" src="pdf.jpg"
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:`S. Climer and W. Zhang, Take a walk and cluster
                genes: A TSP-based approach to optimal rearrangement
                clustering, Proc. Intern. Conf. on Machine
                Learning (ICML-04), Alberta, Canada, July 4-8,
              2004.&nbsp; [software]&nbsp;`},{html:`
          <p><font face="Arial">J. Buhler, R. Souvenir, <strong>W. Zhang</strong> and R.
              Mitra, <span style="font-weight: bold;">Design of a
                high-throughput assay for alternative splicing using
                polymerase colonies</span>, <em>Proc. Pacific Symposium
                on Biocomputing (PSB-04), </em><strong>9</strong>:5-16,
              2004.&nbsp; <a
                href="http://www-smi.stanford.edu/projects/helix/psb04/buhler.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`J. Buhler, R. Souvenir, W. Zhang and R.
              Mitra, Design of a
                high-throughput assay for alternative splicing using
                polymerase colonies, Proc. Pacific Symposium
                on Biocomputing (PSB-04), 9:5-16,
              2004.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>,<span style="font-weight:
                bold;"> Configuartion landscape analysis and backbone
                guided local search: Part I: Satisfiability and maximum
                satisfiability</span>, <em>Artificial Intelligence</em>,
              <strong>158</strong>(1):1-26, 2004.&nbsp; <a
href="http://www.sciencedirect.com/science?_ob=IssueURL&amp;_tockey=%23TOC%235617%232004%23998419998%23511518%23FLA%23Volume_158,_Issue_1,_Pages_1-108_%28September_2004%29&amp;_auth=y&amp;view=c&amp;_acct=C000000938&amp;_version=1&amp;_urlVersion=0&amp;_userid=840033&amp;md5=950cc93c318fb3fcc3812b7788aa9de5"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`W. Zhang, Configuartion landscape analysis and backbone
                guided local search: Part I: Satisfiability and maximum
                satisfiability, Artificial Intelligence,
              158(1):1-26, 2004.&nbsp;`},{html:`
          <p><font face="Arial">A. K. Sen, A. Bagchi and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Average case analysis of
                best-first search in two representative directed acyclic
                graphs</span>, <em>Artificial Intelligence</em>, <strong>155</strong>(1-2):183-206,



              2004.&nbsp; <a
href="http://www.sciencedirect.com/science?_ob=IssueURL&amp;_tockey=%23TOC%235617%232004%23998449998%23490436%23FLP%23Volume_155,_Issues_1-2,_Pages_1-209_%28May_2004%29&amp;_auth=y&amp;view=c&amp;_acct=C000050221&amp;_version=1&amp;_urlVersion=0&amp;_userid=10&amp;md5=4cd44fd31afb1ff54aa11725a99228f6"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a></font></p>
        `,text:`A. K. Sen, A. Bagchi and W. Zhang, Average case analysis of
                best-first search in two representative directed acyclic
                graphs, Artificial Intelligence, 155(1-2):183-206,



              2004.&nbsp;`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
                bold;">Phase transitions and backbones of the asymmetric
                Traveling Salesman Problem</span>, <em>J. Artificial
                Intelligence</em> <em>Research</em>, <strong>20</strong>:471-97,



              2004.&nbsp; <a
href="http://www-2.cs.cmu.edu/afs/cs/project/jair/pub/volume21/zhang04b.pdf"><img
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:
                  12px; height: 13px;"></a><a
href="http://www-2.cs.cmu.edu/afs/cs/project/jair/pub/volume21/zhang04b.ps">
              </a></font></p>
        `,text:`W. Zhang, Phase transitions and backbones of the asymmetric
                Traveling Salesman Problem, J. Artificial
                Intelligence Research, 20:471-97,



              2004.&nbsp;`},{html:`
          <p><font face="Arial">Z. Xing and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">Efficient strategies for
                (weighted) maximum satisfiability</span>, <em>Proc.
                10th Intern. Conf. on Principles and Practice of
                Constraint Programming (CP-04)</em>, Toronto, Canada,
              Sept. 27 - Oct. 1, 2004, pp.690-705.</font></p>
        `,text:`Z. Xing and W. Zhang, Efficient strategies for
                (weighted) maximum satisfiability, Proc.
                10th Intern. Conf. on Principles and Practice of
                Constraint Programming (CP-04), Toronto, Canada,
              Sept. 27 - Oct. 1, 2004, pp.690-705.`},{html:`
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span
                style="font-weight: bold;">A linear search strategy with
                bounds</span>, <em>Proc. 14th Intern. Conf. on
                Automated Planning and Scheduling (ICAPS-04)</em>,
              British Columbia, Canada, June 3-7, 2004.</font></p>
        `,text:`S. Climer and W. Zhang, A linear search strategy with
                bounds, Proc. 14th Intern. Conf. on
                Automated Planning and Scheduling (ICAPS-04),
              British Columbia, Canada, June 3-7, 2004.`},{html:`
          <p><font face="Arial"><strong>W. Zhang</strong> and X. Zhang, <span
                style="font-weight: bold;">An improved integer local
                search for complex scheduling problems</span>, <em>Proc.



                14th Intern. Conf. on Automated Planning and Scheduling
                (ICAPS-04)</em>, British Columbia, Canada, June 3-7,
              2004. </font></p>
        `,text:`W. Zhang and X. Zhang, An improved integer local
                search for complex scheduling problems, Proc.



                14th Intern. Conf. on Automated Planning and Scheduling
                (ICAPS-04), British Columbia, Canada, June 3-7,
              2004.`}]},2012:{year:"2012",items:[{html:`<font face="Arial">X. Zhang, J. Xia, Y. Lii, B.E.
              Barrera-Figueroa, X. Zhou, S. Gao, L. Lu, D. Nie, Z. Chen,
              C. Leung, T. Wong, H. Zhang, J. Guo, Y. Li, R. Liu, W.
              Liang, J-K. Zhu, <strong>W. Zhang</strong>*, H. Jin*, <b>Genome-wide analysis of plant
                nat-siRNAs reveals insights into their distribution,
                biogenesis and function</b>, <i>Genome Biology</i>,
              13:R20, 2012. <a
                href="http://genomebiology.com/2012/13/3/R20"><img
                  alt="" src="pdf.jpg" width="12" height="13" border="0"></a></font>`,text:`X. Zhang, J. Xia, Y. Lii, B.E.
              Barrera-Figueroa, X. Zhou, S. Gao, L. Lu, D. Nie, Z. Chen,
              C. Leung, T. Wong, H. Zhang, J. Guo, Y. Li, R. Liu, W.
              Liang, J-K. Zhu, W. Zhang*, H. Jin*, Genome-wide analysis of plant
                nat-siRNAs reveals insights into their distribution,
                biogenesis and function, Genome Biology,
              13:R20, 2012.`},{html:`<font face="Arial">Y. Zheng, Y-F. Li, R. Sunkar and W.
              Zhang, <b>SeqTar: An
                effective method for identifying microRNA guided
                cleavage sites from degradome of polyadenylated
                transcripts in plants</b>, <i>Nucleic Acids Research</i>, 40(4):e28, 2012.
              <a href="http://www.ncbi.nlm.nih.gov/pubmed/22140118"><img
                  alt="" src="pdf.jpg" style="border: 0px solid; border:
                  0px solid; width: 12px; height: 13px;" width="12"
                  height="13" border="0"></a></font>`,text:`Y. Zheng, Y-F. Li, R. Sunkar and W.
              Zhang, SeqTar: An
                effective method for identifying microRNA guided
                cleavage sites from degradome of polyadenylated
                transcripts in plants, Nucleic Acids Research, 40(4):e28, 2012.`},{html:`<font face="Arial">J. Xia and <strong>W. Zhang</strong>*, <b>Noncanonical microRNAs and
              endogenous siRNAs in lytic infection of murine
              gammaherpesvirus</b>, <i>PLOS ONE</i>, 7(10):e47863,
            2012. <a
href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0047863"><img
                alt="" src="pdf.jpg" width="12" height="13" border="0"></a></font>`,text:`J. Xia and W. Zhang*, Noncanonical microRNAs and
              endogenous siRNAs in lytic infection of murine
              gammaherpesvirus, PLOS ONE, 7(10):e47863,
            2012.`},{html:`<font face="Arial">J.K. Greenberg, J. Xia, X. Zhou, S.R.
              Thatcher, X. Gu, S.A. Ament, T.C. Newman, P.J. Green, W.
              Zhang, G.E. Robinson and Y. Ben-Shahar*, <b>Behavioral plasticity in
                honey bees is associated with major differences in brain
                microRNA transcriptome</b>. <i>Genes, Brain and Behavior</i>, 11(6):660-70,
              2012. <a href="honeybee.pdf"><img alt="" src="pdf.jpg"
                  width="12" height="13" border="0"></a></font>`,text:`J.K. Greenberg, J. Xia, X. Zhou, S.R.
              Thatcher, X. Gu, S.A. Ament, T.C. Newman, P.J. Green, W.
              Zhang, G.E. Robinson and Y. Ben-Shahar*, Behavioral plasticity in
                honey bees is associated with major differences in brain
                microRNA transcriptome. Genes, Brain and Behavior, 11(6):660-70,
              2012.`},{html:`<font face="Arial"><strong>W. Zhang</strong>*, X. Zhou, J. Xia and X. Zhou,
              <b>Identification of
                microRNAs and natural antisense transcript-originated
                endogenous siRNAs from small-RNA deep sequencing data</b>,
              in <i>Methods in Molecular Biology</i>, 883:221-7, 2012. </font>`,text:`W. Zhang*, X. Zhou, J. Xia and X. Zhou,
              Identification of
                microRNAs and natural antisense transcript-originated
                endogenous siRNAs from small-RNA deep sequencing data,
              in Methods in Molecular Biology, 883:221-7, 2012.`},{html:`<font face="Arial"> D. He, D. Liu, <strong>W. Zhang</strong>, B. Yang and D.
            Jin, <b>Discovering link communities in complex networks by
              exploiting link dynamics</b>, <i>J. Statistical Mechanics</i>,
            P10015, 2012.<br>
          </font> `,text:`D. He, D. Liu, W. Zhang, B. Yang and D.
            Jin, Discovering link communities in complex networks by
              exploiting link dynamics, J. Statistical Mechanics,
            P10015, 2012.`},{html:`
          <p><font face="Arial">Y. Gan, J. Guan*, S. Zhou and <strong>W. Zhang</strong>*,
              <span style="font-weight: bold;">Structural features based
                genome-wide characterization and prediction of
                nucleosome organization</span>, <span
                style="font-style: italic;">BMC Bioinformatics</span>,
              13:49, 2012.&nbsp;<a
                href="http://www.biomedcentral.com/1471-2105/13/49"><img
                  alt="" src="pdf.jpg" width="12" height="13" border="0"></a><a
                href="http://genomebiology.com/2010/11/8/R81/abstract">&nbsp;</a><a
                href="http://genomebiology.com/2010/11/8/R81/abstract"><img
                  alt="" src="highlyaccessed.gif" width="91" height="12"
                  border="0"></a></font></p>
        `,text:`Y. Gan, J. Guan*, S. Zhou and W. Zhang*,
              Structural features based
                genome-wide characterization and prediction of
                nucleosome organization, BMC Bioinformatics,
              13:49, 2012.&nbsp;&nbsp;`},{html:`<font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span
              style="font-weight: bold;">SAS+ planning as Satisfiability</span>,<span
              style="font-style: italic;"> J. Artificial Intelligence
              Research, </span>43:293-328, 2012. <span style="color:
              rgb(255, 0, 0);">AAAI 2010 Outstanding Paper Award</span>.
            <a href="http://www.jair.org/papers/paper3442.html"><img
                alt="" src="pdf.jpg" style="border: 0px solid; border:
                0px solid; width: 12px; height: 13px;"></a></font>`,text:`R. Huang, Y. Chen and W. Zhang, SAS+ planning as Satisfiability, J. Artificial Intelligence
              Research, 43:293-328, 2012. AAAI 2010 Outstanding Paper Award.`}]},2021:{year:"2021",items:[{html:`<font face="Arial"><font face="Arial">M. Chang, F. Womer, X.
            Gong, X. Chen, L. Tang, R. Feng, S. Dong, J. Duan, Y. Chen,
            R. Zhang, Y. Wang, S. Ren, Y. Wang, J. Kang, Z. Yin, Y. Wei,
            S. Wei, X. Jian, K. Xu, B. Cao, Y. Zhang, <strong>W. Zhang</strong>, Y. Tang,
            X. Zhang, F. Wang, <a href="https://www.nature.com/articles/s41380-020-00892-3">Identifying and validating subtypes
              within major psychiatric disorders based on
              frontal-posterior functional imbalance via deep learning</a>,
            <u><i>Molecular Psychiatry</i></u>, available online.</font>.
        </font> `,text:`M. Chang, F. Womer, X.
            Gong, X. Chen, L. Tang, R. Feng, S. Dong, J. Duan, Y. Chen,
            R. Zhang, Y. Wang, S. Ren, Y. Wang, J. Kang, Z. Yin, Y. Wei,
            S. Wei, X. Jian, K. Xu, B. Cao, Y. Zhang, W. Zhang, Y. Tang,
            X. Zhang, F. Wang, Identifying and validating subtypes
              within major psychiatric disorders based on
              frontal-posterior functional imbalance via deep learning,
            Molecular Psychiatry, available online..`},{html:`
        <p><font face="Arial"><font face="Arial"><font face="Arial">X.
                Liu, J. Frost, A. Bowcock, <strong>W. Zhang</strong>*, <a href="https://pubmed.ncbi.nlm.nih.gov/34068434/">Canonical and
                  interior circular RNAs function as competing
                  endogenous RNAs in psoriatic skin</a>, <u><i>Intern</i></u><u><i>.
                    J. Molecular Sciences</i></u>, 22(10):5182, 2021.</font></font>.
            <br>
          </font></p>
      `,text:`X.
                Liu, J. Frost, A. Bowcock, W. Zhang*, Canonical and
                  interior circular RNAs function as competing
                  endogenous RNAs in psoriatic skin, Intern.
                    J. Molecular Sciences, 22(10):5182, 2021..`},{html:`<font face="Arial">L. Chen, J. Zhou, T. Li, Z. Fang, L. Li, G.
          Huang, L. Gao, X. Zhu, X. Zhou, H. Xiao, J. Zhang, Q. Xiong,
          J. Zhang, A. Ma, W. Zhai, <strong>W. Zhang</strong>*, and H. Peng*, <a href="https://www.sciencedirect.com/science/article/abs/pii/S0963996921005615">GmoDetector:

            An accurate and efficient GMO identification approach and
            its application</a>, <u><i>Food Research International</i></u>,
          149:110662, 2021.</font>`,text:`L. Chen, J. Zhou, T. Li, Z. Fang, L. Li, G.
          Huang, L. Gao, X. Zhu, X. Zhou, H. Xiao, J. Zhang, Q. Xiong,
          J. Zhang, A. Ma, W. Zhai, W. Zhang*, and H. Peng*, GmoDetector:

            An accurate and efficient GMO identification approach and
            its application, Food Research International,
          149:110662, 2021.`},{html:`<font face="Arial"><font face="Arial">D. Jin, Z. Yu, P. Jiao,
            S. Pan, D. He, J. Wu, P. Yu, and <strong>W. Zhang</strong>, <a href="https://www.computer.org/csdl/journal/tk/5555/01/09511798/1vYRDDazcJ2">A survey of
              community detection approaches: From statistical modeling
              to deep learning</a>, <u><i>IEEE Trans. on Knowledge and
                Data Engineering</i></u>, available online.</font>.</font>`,text:`D. Jin, Z. Yu, P. Jiao,
            S. Pan, D. He, J. Wu, P. Yu, and W. Zhang, A survey of
              community detection approaches: From statistical modeling
              to deep learning, IEEE Trans. on Knowledge and
                Data Engineering, available online..`},{html:`<font face="Arial">Z. Zhang, T. Zhao, H. Gay, <strong>W. Zhang</strong>*, B.
          Sun*, <b>Weaving attention U-net: A novel hybrid CNN and attention-based method for organs-at-risk segmentation in head and neck CT images</b>, <u><i>Medical Physics</i></u>, in press. </font>`,text:`Z. Zhang, T. Zhao, H. Gay, W. Zhang*, B.
          Sun*, Weaving attention U-net: A novel hybrid CNN and attention-based method for organs-at-risk segmentation in head and neck CT images, Medical Physics, in press.`},{html:`<font face="Arial">Z. Zhang, T. Zhao, H. Gay, <strong>W. Zhang</strong>*, B.
          Sun*, <a href="https://pubmed.ncbi.nlm.nih.gov/33151620/">ARPM-net: A novel CNN-based adversarial method with
            Markov Random Field enhancement for prostate and organs at
            risk segmentation in pelvic CT images</a>, <u><i>Medical
            Physics</i></u>, 48(1):227-37, 2021.</font>`,text:`Z. Zhang, T. Zhao, H. Gay, W. Zhang*, B.
          Sun*, ARPM-net: A novel CNN-based adversarial method with
            Markov Random Field enhancement for prostate and organs at
            risk segmentation in pelvic CT images, Medical
            Physics, 48(1):227-37, 2021.`},{html:'<font face="Arial">Z. Zhang, T. Zhao, H. Gay, <strong>W. Zhang</strong>*, B. Sun*, <b>Semi-supervised semantic segmentation of prostate and organs-at-risk on 3D pelvic CT images</b>, <u><i>Biomedical Physics & Engineering Express</i></u>, in press.</font>',text:"Z. Zhang, T. Zhao, H. Gay, W. Zhang*, B. Sun*, Semi-supervised semantic segmentation of prostate and organs-at-risk on 3D pelvic CT images, Biomedical Physics & Engineering Express, in press."},{html:`
          <p>X. Liu, Z. Hu, J. Zhou, C. Tian, G. Tian, M. He, L. Gao, L.
            Chen, T. Li, H. Peng, and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/31532701">Interior circular
              RNA</a>, <u><i>RNA Biology</i></u>, 17(1):87-97, 2020.
            <font color="#cc0000"><a
href="https://engineering.wustl.edu/news/Pages/Big-data-analysis-leads-to-discovery-of-new-class-of-RNA.aspx">News



                about our discovery</a></font></p>
        `,text:`X. Liu, Z. Hu, J. Zhou, C. Tian, G. Tian, M. He, L. Gao, L.
            Chen, T. Li, H. Peng, and W. Zhang*, Interior circular
              RNA, RNA Biology, 17(1):87-97, 2020.
            News



                about our discovery`},{html:`<font face="Arial"><font face="Arial"><font face="Arial">P.
                Xuan, T. Shen, X. Wang, T. Zhang and <strong>W. Zhang</strong>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/30281474">Inferring


                  disease-associated microRNAs in heterogeneous networks
                  with node attributes</a>, <u><i>IEEE/</i></u><u><i>ACM


                    Trans. Computational Biology a</i></u><u><i>nd
                    Bioinformati</i></u><u><i>cs</i></u>, 17(3):1019-31,
                2020.</font></font></font>`,text:`P.
                Xuan, T. Shen, X. Wang, T. Zhang and W. Zhang, Inferring


                  disease-associated microRNAs in heterogeneous networks
                  with node attributes, IEEE/ACM


                    Trans. Computational Biology and
                    Bioinformatics, 17(3):1019-31,
                2020.`},{html:`
          <p><font face="Arial">S. Climer*, A.R. Templeton, M. Garvin,
              D. Jacobson, M. Lane, S. Hulver, B. Scheid, and <strong>W. Zhang</strong>*,
              <a href="https://www.biorxiv.org/content/10.1101/2020.01.28.923730v1.">Syncronized genetic activities in Alzheimer's brains
                revealed by heterogeneity-capturing network analysis</a>,
              bioRxiv.</font><br>
            </p>
        `,text:`S. Climer*, A.R. Templeton, M. Garvin,
              D. Jacobson, M. Lane, S. Hulver, B. Scheid, and W. Zhang*,
              Syncronized genetic activities in Alzheimer's brains
                revealed by heterogeneity-capturing network analysis,
              bioRxiv.`},{html:`S. Zhang, Z. Xia, <strong>W. Zhang</strong>, C. Li, X. Wang, X. Lu, X. Zhao,
          H. Ma, <strong>W. Zhang</strong>, X. Zhou, T. Zhu, P. Liu, G. Liu, H. Yang, J.
          Arango, M. Peters, W. Wang*, and T. Xia*, <a href="https://www.biorxiv.org/content/10.1101/2020.02.28.970749v1">Chromosome-scale
            genome assembly provides insights into speciation of
            allotetraploid and massive biomass accumulation of elephant
            grass (<i>Pennisetum purpureum Schum.</i>)</a>, bioRxiv.<br>
        `,text:`S. Zhang, Z. Xia, W. Zhang, C. Li, X. Wang, X. Lu, X. Zhao,
          H. Ma, W. Zhang, X. Zhou, T. Zhu, P. Liu, G. Liu, H. Yang, J.
          Arango, M. Peters, W. Wang*, and T. Xia*, Chromosome-scale
            genome assembly provides insights into speciation of
            allotetraploid and massive biomass accumulation of elephant
            grass (Pennisetum purpureum Schum.), bioRxiv.`},{html:`<font face="Arial">M. Li, D. Jin, D. He, and <strong>W. Zhang</strong>, <b>Modeling
                    with node popularities for autonomous overlapping
                    community detection</b>, <u><i>ACM Transactions on
                      Information Systems</i></u>, 11(3):27, 2020</font></font></font></font>.`,text:`M. Li, D. Jin, D. He, and W. Zhang, Modeling
                    with node popularities for autonomous overlapping
                    community detection, ACM Transactions on
                      Information Systems, 11(3):27, 2020.`},{html:`<font face="Arial">X. Zhang, J. Gao, Y. Lv and <strong>W. Zhang</strong>, <b>Early and
              efficient identification of useless constraint propagation
              for alldifferent constraints</b>, <i>Proc 29-th Intern.
              Joint Conf. on AI </i>(IJCAI-20)</font>`,text:`X. Zhang, J. Gao, Y. Lv and W. Zhang, Early and
              efficient identification of useless constraint propagation
              for alldifferent constraints, Proc 29-th Intern.
              Joint Conf. on AI (IJCAI-20)`},{html:`<font face="Arial">D. He, Y. Song, D. Jin, Z. Feng, B.
            Zhang, Z. Yu and <strong>W. Zhang</strong>, <b>Community-centric graph
              Convolutional Network for unsupervised community detection</b>,
            <i>Proc 29-th Intern. Joint Conf. on AI </i>(IJCAI-20)</font>`,text:`D. He, Y. Song, D. Jin, Z. Feng, B.
            Zhang, Z. Yu and W. Zhang, Community-centric graph
              Convolutional Network for unsupervised community detection,
            Proc 29-th Intern. Joint Conf. on AI (IJCAI-20)`},{html:`L. Li, H. Peng, S. Tan, J. Zhou, Z. Fang, Z. Hu, L. Gao, T.
          Li, <strong>W. Zhang</strong>*, and L. Chen*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/31251979">Effects of early cold stress
            on gene expression in Chlamydomonas reinhardtii</a>, <i>Genomics</i>,
          2019, doi: 10.1016/j.ygeno.2019.06.027.<i><br>
          </i>`,text:`L. Li, H. Peng, S. Tan, J. Zhou, Z. Fang, Z. Hu, L. Gao, T.
          Li, W. Zhang*, and L. Chen*, Effects of early cold stress
            on gene expression in Chlamydomonas reinhardtii, Genomics,
          2019, doi: 10.1016/j.ygeno.2019.06.027.`},{html:`
          <p>D. Lam, X. Zhang, H. Li, Y. Deshan, B. Schott, T. Zhao, W.
            Zhang, S. Mutic, and B. Sun*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/31386761">Predicting gamma passing
              rates for portal dosimetry-based IMRT QA using machine
              learning</a>, <i>Medical Physics</i>, doi:
            10.1002/mp.13752, 2019.</p>
        `,text:`D. Lam, X. Zhang, H. Li, Y. Deshan, B. Schott, T. Zhao, W.
            Zhang, S. Mutic, and B. Sun*, Predicting gamma passing
              rates for portal dosimetry-based IMRT QA using machine
              learning, Medical Physics, doi:
            10.1002/mp.13752, 2019.`},{html:`X. Wang, D. Jin, D. He, and <strong>W. Zhang</strong>, <b>Robust detection
            of link communities with summary description in
            social networks</b>, <i>IEEE Trans</i><i>actions on
            Knowledge Discovery and Engineering</i>, accepted.<br>
        `,text:`X. Wang, D. Jin, D. He, and W. Zhang, Robust detection
            of link communities with summary description in
            social networks, IEEE Transactions on
            Knowledge Discovery and Engineering, accepted.`},{html:`L. Yang, Y. Wang, J. Gu, X. Cao, X. Wang, D. Jin, G. Ding,
          J. Han, and <strong>W. Zhang</strong>, <a href="https://dl.acm.org/citation.cfm?id=3355393">Autonomous semantic community
            detection via adaptively weighted low-rank approximation</a>,
          <i>ACM Transactions on Multimedia Computing</i>, <i>Communications,



            and Applications</i> (TOMM), 15(3s), 2019.`,text:`L. Yang, Y. Wang, J. Gu, X. Cao, X. Wang, D. Jin, G. Ding,
          J. Han, and W. Zhang, Autonomous semantic community
            detection via adaptively weighted low-rank approximation,
          ACM Transactions on Multimedia Computing, Communications,



            and Applications (TOMM), 15(3s), 2019.`},{html:`
          <p>D. Jin, Z. Liu, W. Li, D. He, and <strong>W. Zhang</strong>, <a href="https://www.aaai.org/ojs/index.php/AAAI/article/view/3780/3658">Graph
              Convolutional Networks meet Markov Random Fields:
              Semi-supervised community detection in attribute networks</a>,
            <i>Pr</i><i>oc 33-rd</i><i> AAAI Conf</i><i> on A</i><i>I</i>
            (AAAI-19).<br>
          </p>
        `,text:`D. Jin, Z. Liu, W. Li, D. He, and W. Zhang, Graph
              Convolutional Networks meet Markov Random Fields:
              Semi-supervised community detection in attribute networks,
            Proc 33-rd AAAI Conf on AI
            (AAAI-19).`},{html:`D. Jin, B. Li, P. Jiao, D. He, and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2019/0370.pdf">Network-specific



            variational auto-encoder for embedding of attributed
            networks</a>, <i>Proc 28-th IJCAI</i> (IJCAI-19).<br>
        `,text:`D. Jin, B. Li, P. Jiao, D. He, and W. Zhang, Network-specific



            variational auto-encoder for embedding of attributed
            networks, Proc 28-th IJCAI (IJCAI-19).`},{html:`
          <p><font face="Arial">L. Li, G. Tian, H. Peng, D. Meng, L.
              Wang, X. Hu, C. Tian, M. He, J. Zhou, L. Chen, C. Fu, W.
              Zhang* and Z. Hu*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/29632184">New class of transcription factors
                controls flagellar assembly by recruiting RNA polymerase
                II in <i>Chlamydomonas</i></a>, <i><u>Proceedings


                  of National Academy of Sciences of the USA</u> </i>(PNAS),



              115(17):4435-40, 2018</font><font face="Arial">.</font></p>
        `,text:`L. Li, G. Tian, H. Peng, D. Meng, L.
              Wang, X. Hu, C. Tian, M. He, J. Zhou, L. Chen, C. Fu, W.
              Zhang* and Z. Hu*, New class of transcription factors
                controls flagellar assembly by recruiting RNA polymerase
                II in Chlamydomonas, Proceedings


                  of National Academy of Sciences of the USA (PNAS),



              115(17):4435-40, 2018.`},{html:`
          <p><font face="Arial"><font face="Arial">L. Gao, Z. Fang, J.
                Zhou, L. Li, L. Lu, L. Li, L. Chen, <strong>W. Zhang</strong>, W. Zhai,
                and H. Peng*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/30120263">Transcriptional insights into the
                  pyramided resistance to rice bacterial blight</a>, </font><font
                face="Arial"><font face="Arial"><u><i><font face="Arial"><i>Scientific



                          Reports</i></font></i></u><font face="Arial">,
                    8(1):12358, 2018, doi:10.1038/s41598-018-29899-1. </font></font></font></font></p>
        `,text:`L. Gao, Z. Fang, J.
                Zhou, L. Li, L. Lu, L. Li, L. Chen, W. Zhang, W. Zhai,
                and H. Peng*, Transcriptional insights into the
                  pyramided resistance to rice bacterial blight, Scientific



                          Reports,
                    8(1):12358, 2018, doi:10.1038/s41598-018-29899-1.`},{html:`
          <p><font face="Arial">Y. Zhong, P. Xuan*, X. Wang, T. Zhang,
              J. Li, Y. Liu and <strong>W. Zhang</strong>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/28968753">A non-negative matrix
                factorization based method for predicting
                disease-associated miRNAs in miRNA-disease bilayer
                network</a>, <u><i>Bioinformatics</i></u>,
              34(2):267-77, 2018. </font><font
              face="Arial">.</font></p>
        `,text:`Y. Zhong, P. Xuan*, X. Wang, T. Zhang,
              J. Li, Y. Liu and W. Zhang, A non-negative matrix
                factorization based method for predicting
                disease-associated miRNAs in miRNA-disease bilayer
                network, Bioinformatics,
              34(2):267-77, 2018. .`},{html:`<font face="Arial">X. Zhang and <strong>W. Zhang</strong>, <b>A fast
              algorithm for generalized arc consistency of the
              alldifferent constraint</b>, <i>Proc 27-th Intern. Joint
              Conf. on AI </i>(IJCAI-18).</font>`,text:`X. Zhang and W. Zhang, A fast
              algorithm for generalized arc consistency of the
              alldifferent constraint, Proc 27-th Intern. Joint
              Conf. on AI (IJCAI-18).`},{html:'<font face="Arial">G. Meng, D. Jin and <strong>W. Zhang</strong>, <b>Integrative network embedding via deep joint reconstruction</b>, <i>Proc 27-th Intern. Joint Conf. on AI </i>(IJCAI-18).</font>',text:"G. Meng, D. Jin and W. Zhang, Integrative network embedding via deep joint reconstruction, Proc 27-th Intern. Joint Conf. on AI (IJCAI-18)."},{html:`<font face="Arial">D. He, X. You, Z. Feng, D. Jin, X. Yang
              and <strong>W. Zhang</strong>, <b>A network-specific Markov Random Field approach to community detection</b>, <i>Proc 32-nd AAAI
                Conf on A I</i> (AAAI-18).</font>`,text:`D. He, X. You, Z. Feng, D. Jin, X. Yang
              and W. Zhang, A network-specific Markov Random Field approach to community detection, Proc 32-nd AAAI
                Conf on A I (AAAI-18).`},{html:`<font face="Arial"><font face="Arial"><font face="Arial">D.
                Jin, X. Wang, R. He, D. He and <strong>W. Zhang</strong>, </font><b><font
                  face="Arial">Robust detection of link communities in
                  large social networks by exploiting link semantics</font></b><font
                face="Arial">, </font><font face="Arial"><i>Pr</i><i>oc
                  32-nd</i><i> AAAI Conf</i><i> on A</i><i>I</i>
                (AAAI-18)</font></font>.</font>`,text:`D.
                Jin, X. Wang, R. He, D. He and W. Zhang, Robust detection of link communities in
                  large social networks by exploiting link semantics, Proc
                  32-nd AAAI Conf on AI
                (AAAI-18).`},{html:`<font face="Arial">L. Li, Z. Fang, J. Zhou, H. Chen, Z. Hu,
            L. Gao, L. Chen, S. Ren, H. Ma, L. Lu, <strong>W. Zhang</strong>* and H.
            Peng*, <a href="https://academic.oup.com/nar/article/45/10/e88/2981921/An-accurate-and-efficient-method-for-large-scale">An accurate and efficient method for large-scale
              SSR genotyping and applications</a>, <i>Nucleic Acids
              Research</i>, 45(10):e88, 2017, doi:10.1093/nar/gkx093. </font>
          </font>`,text:`L. Li, Z. Fang, J. Zhou, H. Chen, Z. Hu,
            L. Gao, L. Chen, S. Ren, H. Ma, L. Lu, W. Zhang* and H.
            Peng*, An accurate and efficient method for large-scale
              SSR genotyping and applications, Nucleic Acids
              Research, 45(10):e88, 2017, doi:10.1093/nar/gkx093.`},{html:`
          <p><font face="Arial">J. Xia, L. Li, T. Li, Z. Fang, K. Zhang,
              J. Zhou, H. Peng, and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/29036674">Detecting and
                characterizing microRNAs of diverse genomic origins via
                miRvial</a>, </font><font face="Arial"><font
                face="Arial"><i>Nucleic Acids Research</i></font>,
              45(21):e176, 2017. </font><br>
            </font></p>
        `,text:`J. Xia, L. Li, T. Li, Z. Fang, K. Zhang,
              J. Zhou, H. Peng, and W. Zhang*, Detecting and
                characterizing microRNAs of diverse genomic origins via
                miRvial, Nucleic Acids Research,
              45(21):e176, 2017.`},{html:`<font face="Arial">C. Zeng, J. Xia, X. Chen, Y. Zhou, M.
              Peng* and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/29214993">MicroRNA-like RNAs from the
                same miRNA precursors play a role in cassava
              chilling responses</a>, <i>Scientific Reports</i>,
              7(1):17135, 2017. </font><br>
          </font>`,text:`C. Zeng, J. Xia, X. Chen, Y. Zhou, M.
              Peng* and W. Zhang*, MicroRNA-like RNAs from the
                same miRNA precursors play a role in cassava
              chilling responses, Scientific Reports,
              7(1):17135, 2017.`},{html:`
          <p><font face="Arial">TP Michael, D. Bryant, R. Gutierrez, N.
              Borisjuk, P. Chu, H. Zhang, J. Xia, J. Zhou, H. Peng, M.E.
              Baidouri, B. ten Hallers, AR. Hastie, T. Liang, K. Acosta,
              S. Gilbert, C. McEntee, SA. Jackson, TC. Mockler, <strong>W. Zhang</strong>
              and E. Lam*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/27754575">Comprehensive definition of genome
                features in Spirodela polyrhiza by high-depth physical
                mapping and short-read DNA sequencing strategies</a>, <i>The


                Plant J</i><i>ournal</i>, 89(3):617-35, 2017</font><font
              face="Arial">. </font>
          </p>
        `,text:`TP Michael, D. Bryant, R. Gutierrez, N.
              Borisjuk, P. Chu, H. Zhang, J. Xia, J. Zhou, H. Peng, M.E.
              Baidouri, B. ten Hallers, AR. Hastie, T. Liang, K. Acosta,
              S. Gilbert, C. McEntee, SA. Jackson, TC. Mockler, W. Zhang
              and E. Lam*, Comprehensive definition of genome
                features in Spirodela polyrhiza by high-depth physical
                mapping and short-read DNA sequencing strategies, The


                Plant Journal, 89(3):617-35, 2017.`},{html:`
          <p><font face="Arial"><font face="Arial"><font face="Arial"><font
                    face="Arial">D. He, D. Jin and <strong>W. Zhang</strong>, </font><a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14251"><font
                      face="Arial">Joint identification of network
                      communities and semantics via integrative modeling
                      of network topologies and node contents</font></a><font
                    face="Arial">, </font><font face="Arial"><i>Pr</i><i>oc



                      31-st</i><i> AAAI Conf</i><i> on A</i><i>I</i>
                    (AAAI-17)</font></font></font>.</font></p>
        `,text:`D. He, D. Jin and W. Zhang, Joint identification of network
                      communities and semantics via integrative modeling
                      of network topologies and node contents, Proc



                      31-st AAAI Conf on AI
                    (AAAI-17).`},{html:`
          <p><font face="Arial"><font face="Arial">J. Fu, <strong>W. Zhang</strong> and
                J. Wu, </font><a href="https://www.nature.com/articles/s41598-017-00718-3"><font face="Arial">Identification of
                  leader and self-organizing communities in complex
                  networks</font></a><font face="Arial">, </font><font
                face="Arial"><i>Scientific Reports</i>, 7(1):704, 2017.
                </
              </font></font></p>
        `,text:`J. Fu, W. Zhang and
                J. Wu, Identification of
                  leader and self-organizing communities in complex
                  networks, Scientific Reports, 7(1):704, 2017.`},{html:`<font face="Arial"><font face="Arial"><font face="Arial"><font
                  face="Arial">X. Zhang, J. Han and <strong>W. Zhang</strong>, <a href="https://www.nature.com/articles/s41598-017-10744-w">An
                    efficient algorithm for finding all possible input
                    nodes for controlling complex networks</a></font><font
                  face="Arial">, </font><font face="Arial"><i>Scientific



                    Reports</i>, 7(1):10677, 2017</font></font></font>.
            </font><br>
          </font>`,text:`X. Zhang, J. Han and W. Zhang, An
                    efficient algorithm for finding all possible input
                    nodes for controlling complex networks, Scientific



                    Reports, 7(1):10677, 2017.`},{html:`<font face="Arial">D. Tiosano, L. Audi, S. Climer, <strong>W. Zhang</strong>,
            A.R. Templeton*, M. Fernandez-Cancio, R. Gershoni-Baruch,
            J.M. Sanchez-Muro, M.E. Kholy, Z. Hochberg, <a href="https://www.g3journal.org/content/6/5/1251.long">Latitudinal
              Clines of the human Vitamin D receptor and
              skin color-genes</a>, <i>Genes, Genomes,
              Genetics</i>, 6(5):1251-66, 2016. doi:
            10.1534/g3.115.026773.</font>`,text:`D. Tiosano, L. Audi, S. Climer, W. Zhang,
            A.R. Templeton*, M. Fernandez-Cancio, R. Gershoni-Baruch,
            J.M. Sanchez-Muro, M.E. Kholy, Z. Hochberg, Latitudinal
              Clines of the human Vitamin D receptor and
              skin color-genes, Genes, Genomes,
              Genetics, 6(5):1251-66, 2016. doi:
            10.1534/g3.115.026773.`},{html:`
          <p><font face="Arial">J. Xia, X. Wang, P-F. Perroud, Y. He, R.
                Quatrano and <strong>W. Zhang</strong>*, <a href="https://www.nature.com/articles/srep30118">Endogenous small-noncoding
                RNAs and potential functions in desiccation tolerance in
                Physcomitrella patens</a>, <i>Scientific Reports</i>,
              6:30118, 2016. </font><br>
            <meta name="Title" content="">
          </p>
          <p>
            <meta name="Keywords" content="">
            <meta http-equiv="Content-Type" content="text/html;
              charset=windows-1252">
            <meta name="ProgId" content="Word.Document">
            <meta name="Generator" content="Microsoft Word 14">
            <meta name="Originator" content="Microsoft Word 14">
            <link rel="File-List"
href="file://localhost/Users/weixiongzhang/Library/Caches/TemporaryItems/msoclip/0clip_filelist.xml">
            <!--[if gte mso 9]><xml>
 <o:OfficeDocumentSettings>
  <o:AllowPNG/>
 </o:OfficeDocumentSettings>
</xml><![endif]-->
            <link rel="themeData"
href="file://localhost/Users/weixiongzhang/Library/Caches/TemporaryItems/msoclip/0clip_themedata.xml">
            <!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:View>Normal</w:View>
  <w:Zoom>0</w:Zoom>
  <w:TrackMoves/>
  <w:TrackFormatting/>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>EN-US</w:LidThemeOther>
  <w:LidThemeAsian>JA</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
   <w:UseFELayout/>
  </w:Compatibility>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac m:val="off"/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="true"
  DefSemiHidden="true" DefQFormat="false" DefPriority="99"
  LatentStyleCount="276">
  <w:LsdException Locked="false" Priority="0" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 1"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 2"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 3"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 4"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 5"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 6"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 7"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 8"/>
  <w:LsdException Locked="false" Priority="39" Name="toc 9"/>
  <w:LsdException Locked="false" Priority="35" QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" Priority="10" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" Priority="1" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" Priority="11" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" Priority="22" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" Priority="20" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" Priority="59" SemiHidden="false"
   UnhideWhenUsed="false" Name="Table Grid"/>
  <w:LsdException Locked="false" UnhideWhenUsed="false" Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" UnhideWhenUsed="false" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"
   UnhideWhenUsed="false" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"
   UnhideWhenUsed="false" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"
   UnhideWhenUsed="false" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" SemiHidden="false"
   UnhideWhenUsed="false" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" QFormat="true" Name="TOC Heading"/>
 </w:LatentStyles>
</xml><![endif]-->
            <style>
<!--
 /* Font Definitions */
@font-face
	{font-family:Arial;
	panose-1:2 11 6 4 2 2 2 2 2 4;
	mso-font-charset:0;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:-536859905 -1073711037 9 0 511 0;}
@font-face
	{font-family:Times;
	panose-1:2 0 5 0 0 0 0 0 0 0;
	mso-font-charset:0;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:3 0 0 0 1 0;}
@font-face
	{font-family:Times;
	panose-1:2 0 5 0 0 0 0 0 0 0;
	mso-font-charset:0;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:3 0 0 0 1 0;}
@font-face
	{font-family:Cambria;
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:auto;
	mso-font-pitch:variable;
	mso-font-signature:-536870145 1073743103 0 0 415 0;}
@font-face
	{font-family:"MS Mincho";
	mso-font-alt:"&#65325;&#65331; &#26126;&#26397;";
	mso-font-charset:128;
	mso-generic-font-family:modern;
	mso-font-pitch:fixed;
	mso-font-signature:-536870145 1791491579 18 0 131231 0;}
 /* Style Definitions */
p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin-top:0in;
	margin-right:0in;
	margin-bottom:10.0pt;
	margin-left:0in;
	mso-pagination:widow-orphan;
	font-size:12.0pt;
	mso-bidi-font-size:10.0pt;
	font-family:Times;
	mso-fareast-font-family:"MS Mincho";
	mso-bidi-font-family:Arial;
	color:black;
	mso-font-kerning:14.0pt;
	mso-fareast-language:JA;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	font-size:10.0pt;
	mso-ansi-font-size:10.0pt;
	mso-bidi-font-size:10.0pt;
	font-family:Cambria;
	mso-ascii-font-family:Cambria;
	mso-fareast-font-family:"MS Mincho";
	mso-hansi-font-family:Cambria;
	mso-bidi-font-family:Arial;}
@page WordSection1
	{size:8.5in 11.0in;
	margin:1.0in 1.25in 1.0in 1.25in;
	mso-header-margin:.5in;
	mso-footer-margin:.5in;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
-->
</style><!--[if gte mso 10]>
<style>
 /* Style Definitions */
table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin:0in;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:10.0pt;
</style>
<![endif]-->
            <!--StartFragment--><span
              style="font-size:12.0pt;mso-bidi-font-size:10.0pt;
              font-family:&quot;Times New
              Roman&quot;;mso-fareast-font-family:&quot;MS
              Mincho&quot;;color:#0D0D0D;
              mso-font-kerning:14.0pt;mso-ansi-language:EN-US;mso-fareast-language:JA;
              mso-bidi-language:HE"></span><!--EndFragment--> </p>
        `,text:`J. Xia, X. Wang, P-F. Perroud, Y. He, R.
                Quatrano and W. Zhang*, Endogenous small-noncoding
                RNAs and potential functions in desiccation tolerance in
                Physcomitrella patens, Scientific Reports,
              6:30118, 2016. 
            
          
          
            
            
            
            
            
            
            
 
  
 

            
            
 
  Normal
  0
  
  
  
  
  false
  false
  false
  
  EN-US
  JA
  X-NONE
  
   
   
   
   
   
   
   
   
   
   
  
  
   
   
   
   
   
   
   
   
   
   
   
  

 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 

            



 /* Style Definitions */
table.MsoNormalTable
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0in 5.4pt 0in 5.4pt;
	mso-para-margin:0in;
	mso-para-margin-bottom:.0001pt;
	mso-pagination:widow-orphan;
	font-size:10.0pt;`},{html:`
          <p> <font face="Arial"><font face="Arial">Z-Y. Li, J. Xia, Z.
                Chen, Y. Yu, Q-F. Li, Y-C. Zhang, J-P. Zhang, C-Y. Wang,
                X-Y. Zhu, <strong>W. Zhang</strong>* and Y-Q. Chen*, <a href="https://www.nature.com/articles/srep25493">Large-scale
                  rewiring of innate immunity circuitry and microRNA
                  regulation during initial rice blast infection</a>, <i>Scientific



                  Reports</i>, 6:25493, 2016. </font></font></p>
        `,text:`Z-Y. Li, J. Xia, Z.
                Chen, Y. Yu, Q-F. Li, Y-C. Zhang, J-P. Zhang, C-Y. Wang,
                X-Y. Zhu, W. Zhang* and Y-Q. Chen*, Large-scale
                  rewiring of innate immunity circuitry and microRNA
                  regulation during initial rice blast infection, Scientific



                  Reports, 6:25493, 2016.`},{html:`
          <p><font face="Arial">L. <font face="Arial">Chen, J. Han, X.
                Deng, S. Tan, L. Li, L. Li, J. Zhou, H. Peng, G. Yang*,
                <strong>W. Zhang</strong>*, <a href="https://www.nature.com/articles/srep21623">Expansion and stress responses of
                  AP2/EREBP superfamily in Brachypodium distachyon</i></a>,
                <i>Scientific Reports</i>, 6:21623, 2016</font>. </font><font
              face="Arial"><font color="#000099"><b><span
                    style="text-decoration: underline;"></span></b></font></font></p>
        `,text:`L. Chen, J. Han, X.
                Deng, S. Tan, L. Li, L. Li, J. Zhou, H. Peng, G. Yang*,
                W. Zhang*, Expansion and stress responses of
                  AP2/EREBP superfamily in Brachypodium distachyon,
                Scientific Reports, 6:21623, 2016.`},{html:`
          <p><font face="Arial">G. Jager, S. Climer and <strong>W. Zhang</strong></font><font
              face="Arial">. </font><font face="Arial">
              <meta http-equiv="content-type" content="text/html;
                charset=windows-1252">
              <a href="https://www.sciencedirect.com/science/article/pii/S1570866716300090">Complete Parsimony Haplotype Inference Problem and
                Algorithms Based on Integer Programming,
                Branch-and-Bound and Boolean Satisfiability</a>, <i>J</i><i>.
                Discrete Algorithms</i>, 37:68-83, 2016. </font><br>
            </font></p>
        `,text:`G. Jager, S. Climer and W. Zhang. 
              
              Complete Parsimony Haplotype Inference Problem and
                Algorithms Based on Integer Programming,
                Branch-and-Bound and Boolean Satisfiability, J.
                Discrete Algorithms, 37:68-83, 2016.`},{html:`<font face="Arial">L. Yang, X. Cao, D. He, <strong>W. Zhang</strong>, <a
            href="https://www.ijcai.org/Proceedings/16/Papers/200.pdf">Modularity
              based community detection with deep learning</a>,
            <i>Proc 25-th Intern. Joint Conf. on AI</i> (IJCAI-16), to
            appear. </font><br>
          </font>`,text:`L. Yang, X. Cao, D. He, W. Zhang, Modularity
              based community detection with deep learning,
            Proc 25-th Intern. Joint Conf. on AI (IJCAI-16), to
            appear.`},{html:`
          <p><font face="Arial">D. Jin, H. Wang, J. Dang, D. He and W.
              Zhang, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/view/12111">Detect overlapping communities via ranking node
                popularities</a>, <i>Pr</i><i>oc 30</i><i>-</i><i>th
                AAAI Conf</i><i> on A</i><i>I</i> (AAAI-16), to appear.
            </font></p>
        `,text:`D. Jin, H. Wang, J. Dang, D. He and W.
              Zhang, Detect overlapping communities via ranking node
                popularities, Proc 30-th
                AAAI Conf on AI (AAAI-16), to appear.`},{html:`
          <p><font face="Arial">X. Wang, D. Jin, X. Cao, L. Yang and W.
            Zhang, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/view/12111">Semantic community identification in large
                attribute networks</a>, </font><font face="Arial"><i>Pr</i><i>oc



                30</i><i>-</i><i>th AAAI Conf</i><i> on A</i><i>I</i>
              (AAAI-16), to appear. </font></p>
        `,text:`X. Wang, D. Jin, X. Cao, L. Yang and W.
            Zhang, Semantic community identification in large
                attribute networks, Proc



                30-th AAAI Conf on AI
              (AAAI-16), to appear.`},{html:` <font face="Arial">S. Climer*, A. Templeton and <strong>W. Zhang</strong>*,
              <a href="https://www.nature.com/articles/ncomms7534">Human <i>gephyrin</i> is encompassed within giant
              functional noncoding yin-yang sequences</a>, <i>Nature
              Communications</i>, 6:6534, 2015, doi: 10.1038/ncomms7534.
            [<a href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]
            [<a
              href="http://news.wustl.edu/news/Pages/big-data-genetic-clues.aspx">News</a>]<strong
              style="font-weight: bold; font-style: italic;
              text-decoration: underline;"><em></em></strong></font>`,text:`S. Climer*, A. Templeton and W. Zhang*,
              Human gephyrin is encompassed within giant
              functional noncoding yin-yang sequences, Nature
              Communications, 6:6534, 2015, doi: 10.1038/ncomms7534.
            [Software]
            [News]`},{html:`<font face="Arial">H. Peng, Z. Chen, Z. Fang, J. Zhou, Z.
            Xia, L. Gao, L. Chen, L. Li, T. Li, W. Zhai, and <strong>W. Zhang</strong>*,
            <a href="https://www.nature.com/articles/srep12165">Rice Xa21 primed genes and pathways that are
              critical for combating bacterial blight infection</a>, <i>Scientific



              Reports</i>, 5:12165, 2015 </font>`,text:`H. Peng, Z. Chen, Z. Fang, J. Zhou, Z.
            Xia, L. Gao, L. Chen, L. Li, T. Li, W. Zhai, and W. Zhang*,
            Rice Xa21 primed genes and pathways that are
              critical for combating bacterial blight infection, Scientific



              Reports, 5:12165, 2015`},{html:`
          <p><font face="Arial">X. Chen, J. Xia, Z. Xia, H. Zhang, C.
              Zeng, C. Lu, <strong>W. Zhang</strong> and W. Wang*, <a href="http://www.biomedcentral.com/1471-2229/15/33">Potential
                functions of microRNAs in starch metabolism and
                development revealed by miRNA transcriptome profiling of
                cassava cultivars and their wild progenitor</a>, <i>BMC
                Plant Biology</i>, 15(1):33, 2015.&nbsp; </font></p>
        `,text:`X. Chen, J. Xia, Z. Xia, H. Zhang, C.
              Zeng, C. Lu, W. Zhang and W. Wang*, Potential
                functions of microRNAs in starch metabolism and
                development revealed by miRNA transcriptome profiling of
                cassava cultivars and their wild progenitor, BMC
                Plant Biology, 15(1):33, 2015.&nbsp;`},{html:`
          <p><font face="Arial">D. Nie, J. Xia, C. Jiang, B. Qi, X.
              Ling, S. Lin, <strong>W. Zhang</strong>, J. Guo, H. Jin and H. Zhao, <a href="http://www.ncbi.nlm.nih.gov/pubmed/26526683">Bacillus



                cereus AR156 primes induced systemic resistance by
                suppressing miR825/825* and activating defense related
                genes in Arabidopsis</a>, <i>J Integrative Plant Biol.</i>,
              doi: 10.1111/jipb.12446. </font>
          </p>
        `,text:`D. Nie, J. Xia, C. Jiang, B. Qi, X.
              Ling, S. Lin, W. Zhang, J. Guo, H. Jin and H. Zhao, Bacillus



                cereus AR156 primes induced systemic resistance by
                suppressing miR825/825* and activating defense related
                genes in Arabidopsis, J Integrative Plant Biol.,
              doi: 10.1111/jipb.12446.`},{html:`<font face="Arial">D. He, D. Jin, Z. Chen and <strong>W. Zhang</strong>, <a href="https://www.nature.com/articles/srep08638">Identification



              of hybrid node and link communities in complex networks</a>,
            <i>Scientific Reports</i>, 5:8638, 2015.&nbsp; </font>
        `,text:`D. He, D. Jin, Z. Chen and W. Zhang, Identification



              of hybrid node and link communities in complex networks,
            Scientific Reports, 5:8638, 2015.&nbsp;`},{html:`
          <p><font face="Arial">Z. Chen, M. Chen, K. Weinberger and W.
              Zhang, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI15/paper/view/9595">Marginalized denoising for link prediction and
                multi-label learning</a>, <i>Pr</i><i>oc 2</i><i>9-</i><i>th



                AAAI Conf</i><i> on A</i><i>I</i> (AAAI-15), Jan 25-30,
                Austin, Texas, USA. </font></p>
        `,text:`Z. Chen, M. Chen, K. Weinberger and W.
              Zhang, Marginalized denoising for link prediction and
                multi-label learning, Proc 29-th



                AAAI Conf on AI (AAAI-15), Jan 25-30,
                Austin, Texas, USA.`},{html:`
          <p><font face="Arial">D. Jin, Z. Chen, D. He and <strong>W. Zhang</strong>, <span style="font-weight: bold;">Modeling with node degree preservation can accurately find communities</span>, <i>Proc 29-th AAAI Conf on AI</i> (AAAI-15), Jan 25-30, Austin, Texas, USA. <a href="nodeDegreeAAA15.pdf"><img alt="" src="pdf.jpg" style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>
        `,text:"D. Jin, Z. Chen, D. He and W. Zhang, Modeling with node degree preservation can accurately find communities, Proc 29-th AAAI Conf on AI (AAAI-15), Jan 25-30, Austin, Texas, USA."},{html:`
          <p><font face="Arial">D. He, D. Liu, D. Jin and <strong>W. Zhang</strong>, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI15/paper/view/9595">A stochastic model for the detection of heterogeneous link
              communities in complex networks</a>, <i>Proc 29-th AAAI Conf on AI</i> (AAAI-15), Jan 25-30, Austin, Texas, USA.
              </font></p>
        `,text:`D. He, D. Liu, D. Jin and W. Zhang, A stochastic model for the detection of heterogeneous link
              communities in complex networks, Proc 29-th AAAI Conf on AI (AAAI-15), Jan 25-30, Austin, Texas, USA.`},{html:`<font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:
              bold;">Ten simple rules for writing research papers</span>,
            <i>PLOS Computational Biology</i>, 10(1):e1003453, 2014. 
          </font>`,text:`W. Zhang, Ten simple rules for writing research papers,
            PLOS Computational Biology, 10(1):e1003453, 2014.`},{html:`<font face="Arial">W. Wang, B. Feng, J. Xiao, Z. Xia, X.
            Zhou, P. Li, <strong>W. Zhang</strong>, et al., <span style="font-weight:
              bold;">Cassava genome from a wild ancestor to cultivated
              varieties</span><span style="font-style: italic;">, Nature
              Communications</span>, 5:5110, 2014. <br>
          </font> `,text:`W. Wang, B. Feng, J. Xiao, Z. Xia, X.
            Zhou, P. Li, W. Zhang, et al., Cassava genome from a wild ancestor to cultivated
              varieties, Nature
              Communications, 5:5110, 2014.`},{html:`<font face="Arial"> S. Climer*, A. Templeton and <strong>W. Zhang</strong>*,
            <a href="https://www.ploscompbiol.org/article/info:doi/10.1371/journal.pcbi.1003766">Allele-specific network reveals combinatorial
              interactions that transcends small effects in psoriasis
              GWAS</a>, <i>PLOS Computational Biology</i>,
            10(9):e1003766.&nbsp; 
            [<a href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]<br>
          </font>`,text:`S. Climer*, A. Templeton and W. Zhang*,
            Allele-specific network reveals combinatorial
              interactions that transcends small effects in psoriasis
              GWAS, PLOS Computational Biology,
            10(9):e1003766.&nbsp; 
            [Software]`},{html:`
          <p><font face="Arial">J. Xia and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/24326350">MicroRNAs in normal and
                psoriatic skin, <span style="font-style: italic;">
                Physiological Genomics</span>, 46(4):113-22, 2014.&nbsp;
                Invited review. <br>
            </font> </p>
        `,text:`J. Xia and W. Zhang*, MicroRNAs in normal and
                psoriatic skin, 
                Physiological Genomics, 46(4):113-22, 2014.&nbsp;
                Invited review.`},{html:`
          <p><font face="Arial">J. Xia and <strong>W. Zhang</strong>*, <a href="http://nar.oxfordjournals.org/content/42/3/1427.long">A meta-analysis revealed
                insights into the sources, conservation and impact of
                microRNA 5'-isoforms in four model species</a><span
                style="font-style: italic;">, Nucleic Acids Research</span>,
              42(3):1427-41, 2014. </font></p>
        `,text:`J. Xia and W. Zhang*, A meta-analysis revealed
                insights into the sources, conservation and impact of
                microRNA 5'-isoforms in four model species, Nucleic Acids Research,
              42(3):1427-41, 2014.`},{html:`
          <p><font face="Arial">J. Xia, C. Zeng, Z. Chen, K. Zhang, X.
              Chen, Y. Zhou, S. Song, C. Lu, R. Yang, Z. Yang, J. Zhou,
              H. Peng, W. Wang, M. Peng*, <strong>W. Zhang</strong>*, <a href="http://www.biomedcentral.com/1471-2164/15/634">Endogenous
                small-noncoding RNAs and their roles in chilling
                response and stress acclimation in cassava</a>, <i>BMC
                Genomics</i>, 15:634, 2014. </font></p>
        `,text:`J. Xia, C. Zeng, Z. Chen, K. Zhang, X.
              Chen, Y. Zhou, S. Song, C. Lu, R. Yang, Z. Yang, J. Zhou,
              H. Peng, W. Wang, M. Peng*, W. Zhang*, Endogenous
                small-noncoding RNAs and their roles in chilling
                response and stress acclimation in cassava, BMC
                Genomics, 15:634, 2014.`},{html:`<font face="Arial">W. Goettel, Z. Liu, J. Xia, <strong>W. Zhang</strong>,
            P.X. Zhao and Y-Q. An*, <a href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0086153">Systems and evolutionary
              characterization of microRNAs and their underlying
              regulatory networks in soybean cotyledons</a>, <i>PLOS
                ONE</i>, 9(1):e86153, 2014. 
          </font>`,text:`W. Goettel, Z. Liu, J. Xia, W. Zhang,
            P.X. Zhao and Y-Q. An*, Systems and evolutionary
              characterization of microRNAs and their underlying
              regulatory networks in soybean cotyledons, PLOS
                ONE, 9(1):e86153, 2014.`},{html:`
          <p><font face="Arial">C. Zeng, Z. Chen, J. Xia, K. Zhang, X.
              Chen, Y. Zhou, W. Bo, S. Song, D. Deng, X. Guo, B. Wang,
              J. Zhou, H. Peng, W. Wang, M. Peng*, <strong>W. Zhang</strong>*, <a href="http://www.biomedcentral.com/1471-2229/14/207">Chilling



                acclimation provides immunity to stress by altering
                regulatory networks and inducing genes with protective
                functions in cassava</a>, <i>BMC Plant Biology</i>,
              14(1):207, 2014. </font></p>
        `,text:`C. Zeng, Z. Chen, J. Xia, K. Zhang, X.
              Chen, Y. Zhou, W. Bo, S. Song, D. Deng, X. Guo, B. Wang,
              J. Zhou, H. Peng, W. Wang, M. Peng*, W. Zhang*, Chilling



                acclimation provides immunity to stress by altering
                regulatory networks and inducing genes with protective
                functions in cassava, BMC Plant Biology,
              14(1):207, 2014.`},{html:`<font face="Arial">Z. Chen and <strong>W. Zhang</strong>, A marginalized denoising method
              for link prediction in relational data,<span
              style="font-style: italic;">Proc. SIAM Intern. Conf. on
              Data Mining, </span>April 24-26, 2014, Philadelphia, USA.
            (Full paper, oral presentation) </font>`,text:`Z. Chen and W. Zhang, A marginalized denoising method
              for link prediction in relational data,Proc. SIAM Intern. Conf. on
              Data Mining, April 24-26, 2014, Philadelphia, USA.
            (Full paper, oral presentation)`},{html:`
          <p><font face="Arial">Y. Gan, J. Guan, S. Zhou and <strong>W. Zhang</strong>*,
              <a href="https://ieeexplore.ieee.org/document/6646168">Identifying cis-regulatory elements and modules using
                Conditional Random Fields</a>, <i>IEEE/ACM Transactions
                on Computational Biology and Bioinformatics</i>,
              11(1):73-82, 2014. 
            </font></p>
        `,text:`Y. Gan, J. Guan, S. Zhou and W. Zhang*,
              Identifying cis-regulatory elements and modules using
                Conditional Random Fields, IEEE/ACM Transactions
                on Computational Biology and Bioinformatics,
              11(1):73-82, 2014.`},{html:`<font face="Arial">J. Xia, C.E. Joyce, A.M. Bowcock* and W.
              Zhang*, <b>Noncanonical
                microRNAs and endogenous siRNAs in normal and psoriatic
                human skin</b>, <i>Human Molecular Genetics</i>, 22(4):737-48, 2013. </font>`,text:`J. Xia, C.E. Joyce, A.M. Bowcock* and W.
              Zhang*, Noncanonical
                microRNAs and endogenous siRNAs in normal and psoriatic
                human skin, Human Molecular Genetics, 22(4):737-48, 2013.`},{html:`<font face="Arial">Z. Chen and <strong>W. Zhang</strong>*, <b>Integrative
                analysis using module-guided Random Forests reveals
                correlated genetic factors related to mouse weight</b>,
              <i>PLOS Computational Biology</i>, 9(3):e1002956, 2013. 
              [<a href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]</font>`,text:`Z. Chen and W. Zhang*, Integrative
                analysis using module-guided Random Forests reveals
                correlated genetic factors related to mouse weight,
              PLOS Computational Biology, 9(3):e1002956, 2013. 
              [Software]`},{html:`<font face="Arial">L. Gao, Y. Cao, Z. Xia, G. Jiang, G.
              Liu, <strong>W. Zhang</strong>* and W. Zhai*, <b>Do transgenesis and
                backcross breeding produce substantially equivalent
                plants? - A comparative study of transgenic and
                backcross rice with disease resistant gene Xa21</b>, <i>BMC
                Genomics</i>, 14(1):738, 2013.</font>`,text:`L. Gao, Y. Cao, Z. Xia, G. Jiang, G.
              Liu, W. Zhang* and W. Zhai*, Do transgenesis and
                backcross breeding produce substantially equivalent
                plants? - A comparative study of transgenic and
                backcross rice with disease resistant gene Xa21, BMC
                Genomics, 14(1):738, 2013.`},{html:`<font face="Arial">H. Peng, G. Jiang, J. Zhang, <strong>W. Zhang</strong> and
            W. Zhai*, <b>DNA methylation polymorphism and stability in
              Chinese indica hybrid rice</b>, Sci. China Life Sci.,
            56(12):1097-106, 2013. <a
              href="http://www.ncbi.nlm.nih.gov/pubmed/24302290"><img
                alt="" src="/static/img/pdf-icon.svg" width="12" height="13" border="0"></a><br>
          </font> `,text:`H. Peng, G. Jiang, J. Zhang, W. Zhang and
            W. Zhai*, DNA methylation polymorphism and stability in
              Chinese indica hybrid rice, Sci. China Life Sci.,
            56(12):1097-106, 2013.`},{html:`<font face="Arial">Z. Chen and <strong>W. Zhang</strong>, <b>Domain
                adaptation with topical correspondence learning</b>, <i>Proc.
                23rd Intern. Joint Conf. on Artificial Intelligence</i>
              (IJCAI-13), Aug. 3-9, 2013, Beijing, China, to appear.
              (Oral presentation, acceptance rate: ~28%.) <a
                href="http://ijcai.org/papers13/Papers/IJCAI13-193.pdf"><img
                  alt="" src="/static/img/pdf-icon.svg" width="12" height="13" border="0"></a></font>`,text:`Z. Chen and W. Zhang, Domain
                adaptation with topical correspondence learning, Proc.
                23rd Intern. Joint Conf. on Artificial Intelligence
              (IJCAI-13), Aug. 3-9, 2013, Beijing, China, to appear.
              (Oral presentation, acceptance rate: ~28%.)`},{html:`<font face="Arial">Q. Lu, R. Huang, Y. Chen, Y. Xu, W.
              Zhang, G. Sun and G. Chen, <b>A SAT-based approach to cost sensitive temporally
                expressive planning</b>, <i>ACM Transactions on Intelligent Systems and
                Technology</i>, 5(1):18, 2013.&nbsp;<a
                href="http://dl.acm.org/citation.cfm?id=2542200"><img
                  alt="" src="pdf.jpg" width="12" height="13" border="0"></a></font>`,text:`Q. Lu, R. Huang, Y. Chen, Y. Xu, W.
              Zhang, G. Sun and G. Chen, A SAT-based approach to cost sensitive temporally
                expressive planning, ACM Transactions on Intelligent Systems and
                Technology, 5(1):18, 2013.&nbsp;`}]},2022:{year:"2022",items:[{html:'<font face="Arial">D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2022/0293.pdf">RAW-GNN: Random Walk Aggregation based graph neural network</a>, <u><i>Proc 31-st Intern. Joint Conf. on AI</i></u> (IJCAI-22).</font>',text:"D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and W. Zhang, RAW-GNN: Random Walk Aggregation based graph neural network, Proc 31-st Intern. Joint Conf. on AI (IJCAI-22)."},{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, published online March 2022.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, published online March 2022."},{html:'<font face="Arial">P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, <strong>W. Zhang</strong>, <a href="https://pubmed.ncbi.nlm.nih.gov/34813484/">Graph Triple-Attention Network for Disease-Related LncRNA Prediction</a>, <u><i>IEEE Journal of Biomedical and Health Informatics</i></u>, 26(6):2839-49, 2022.</font>',text:"P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, W. Zhang, Graph Triple-Attention Network for Disease-Related LncRNA Prediction, IEEE Journal of Biomedical and Health Informatics, 26(6):2839-49, 2022."},{html:`<font face="Arial">Palavicini, J. P., L. Ding, M. Pan, <strong>S. Qiu</strong>, H. Wang, Q. Shen, J. L. Dupree and X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/36613677/">Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(1), 2022.</font>`,text:"Palavicini, J. P., L. Ding, M. Pan, S. Qiu, H. Wang, Q. Shen, J. L. Dupree and X. Han, Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks, International Journal of Molecular Sciences, 24(1), 2022."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2023:{year:"2023",items:[{html:'<font face="Arial">D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=YIcb3pR8ld">Contrastive learning meets homophily: Two birds with one stone</a>, <u><i>Conference on Machine Learning</i></u> (ICML-2023).</font>',text:"D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and W. Zhang, Contrastive learning meets homophily: Two birds with one stone, Conference on Machine Learning (ICML-2023)."},{html:'<font face="Arial">X. Wei, <strong>C. Pan</strong>, X. Zhang*, <strong>W. Zhang</strong>*, <a href="https://biologydirect.biomedcentral.com/articles/10.1186/s13062-023-00410-9">Total network controllability analysis discovers explainable drugs for Covid-19 treatment</a>, <u><i>Biology Direct</i></u>, 18(1):55, 2023.</font>',text:"X. Wei, C. Pan, X. Zhang*, W. Zhang*, Total network controllability analysis discovers explainable drugs for Covid-19 treatment, Biology Direct, 18(1):55, 2023."},{html:'<font face="Arial">X. Zhang*, <strong>C. Pan</strong>, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and <strong>W. Zhang</strong>*, <a href="https://pubmed.ncbi.nlm.nih.gov/37520717/">Cancer-keeper genes as therapeutic targets</a>, <u><i>iScience</i></u>, 26(8):107296, 2023.</font>',text:"X. Zhang*, C. Pan, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and W. Zhang*, Cancer-keeper genes as therapeutic targets, iScience, 26(8):107296, 2023."},{html:'<font face="Arial">D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, <strong>W. Zhang</strong>, <a href="hhttps://arxiv.org/pdf/2101.01669">A survey of community detection approaches: From statistical modeling to deep learning</a>, <u><i>IEEE Transactions on Knowledge and Data Engineering</i></u>, 35(2):1149-90, 2023.</font>',text:"D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, W. Zhang, A survey of community detection approaches: From statistical modeling to deep learning, IEEE Transactions on Knowledge and Data Engineering, 35(2):1149-90, 2023."},{html:'<font face="Arial">Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, <strong>W. Zhang</strong>, Z. Liu, X. Zhang, F. Wang*, <a href="https://pubmed.ncbi.nlm.nih.gov/37992593/">A neuroimaging-based precision medicine framework for depression</a>, <u><i>Asian Journal of Psychiatry</i></u>, 91:103803, 2023.</font>',text:"Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, W. Zhang, Z. Liu, X. Zhang, F. Wang*, A neuroimaging-based precision medicine framework for depression, Asian Journal of Psychiatry, 91:103803, 2023."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2024:{year:"2024",items:[{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, 35(4):4438-50, 2024.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, 35(4):4438-50, 2024."},{html:'<font face="Arial">D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=R8SolCx62K&referrer=%5Bthe%20profile%20of%20Zhen%20Wang%5D(%2Fprofile%3Fid%3D~Zhen_Wang11)">Exploitation of a latent mechanism in graph contrastive learning: Representation scattering</a>, <u><i>Proc 38-th Conference on Neural Information Processing Systems</i></u> (NeurIPS 2024).</font>',text:"D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, W. Zhang, Exploitation of a latent mechanism in graph contrastive learning: Representation scattering, Proc 38-th Conference on Neural Information Processing Systems (NeurIPS 2024)."},{html:'<font face="Arial">Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2024/289">Generalized taxonomy-guided graph neural networks</a>, <u><i>Proc 33-rd Intern. Joint Conf. on AI</i></u> (IJCAI-24).</font>',text:"Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and W. Zhang, Generalized taxonomy-guided graph neural networks, Proc 33-rd Intern. Joint Conf. on AI (IJCAI-24)."},{html:'<font face="Arial">Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, <strong>S. Qiu</strong>, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, <u><i>CCS Chemistry</i></u>, 6(11):2662-2670, 2024.</font>',text:"Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, S. Qiu, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, CCS Chemistry, 6(11):2662-2670, 2024."},{html:`<font face="Arial">X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, <strong>S. Qiu</strong>, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, <u><i>Chinese Chemical Letters</i></u>, 35(11):109653, 2024.</font>`,text:"X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, S. Qiu, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, Chinese Chemical Letters, 35(11):109653, 2024."}]},2025:{year:"2025",items:[{html:'<font face="Arial">L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and <strong>W. Zhang</strong>, <b>MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training</b>, AAAI-2026, 2025.</font>',text:"L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and W. Zhang, MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training, AAAI-2026, 2025."},{html:'<font face="Arial"><strong>Y. Zhu</strong>, S. Wang, Y. Han, Y. Lu, A. Xiong, <strong>S. Qiu</strong>, L. N. Jin, and <strong>W. Zhang</strong>, <a href="https://pubs.acs.org/doi/10.1021/acs.est.5c12915">A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant–Human Protein Interactions</a>, <u><i>Environmental Science &amp; Technology</i></u>, 2025, DOI: 10.1021/acs.est.5c12915.</font>',text:"Y. Zhu, S. Wang, Y. Han, Y. Lu, A. Xiong, S. Qiu, L. N. Jin, and W. Zhang, A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant–Human Protein Interactions, Environmental Science &amp; Technology, 2025, DOI: 10.1021/acs.est.5c12915."},{html:'<font face="Arial"><strong>C. Pan</strong>, X. Zhang, H. Zheng, Z. Su, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/document/11150536">Adaptive Control of Dynamic Networks</a>, <u><i>IEEE Transactions on Network Science and Engineering</i></u>, 14(8), 2025.</font>',text:"C. Pan, X. Zhang, H. Zheng, Z. Su, C. Zhang, W. Zhang, Adaptive Control of Dynamic Networks, IEEE Transactions on Network Science and Engineering, 14(8), 2025."},{html:'<font face="Arial">C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and <strong>W. Zhang</strong>, <a href="https://dl.acm.org/doi/abs/10.1145/3706115">Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning</a>, <u><i>ACM Trans. Intell. Syst. Technol</i></u>, 2025, 16(1):1-21.</font>',text:"C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and W. Zhang, Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning, ACM Trans. Intell. Syst. Technol, 2025, 16(1):1-21."},{html:'<font face="Arial">H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, <strong>W. Zhang</strong>, X. Zhang & F. Wang, <a href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-03850-4">Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia</a>, <u><i>BMC medicine</i></u>, 23(1):38, 2025.</font>',text:"H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, W. Zhang, X. Zhang & F. Wang, Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia, BMC medicine, 23(1):38, 2025."},{html:'<font face="Arial"><strong>Q. Zhao</strong>, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://arxiv.org/pdf/2409.15697.pdf">dnaGrinder: a lightweight and high-capacity genomic foundation model</a>, arXiv, 2024, https://arxiv.org/abs/2409.15697.</font>',text:"Q. Zhao, C. Zhang, W. Zhang, dnaGrinder: a lightweight and high-capacity genomic foundation model, arXiv, 2024, https://arxiv.org/abs/2409.15697."}]}},Fx={book:Bx,byYear:Ux},Di=Fx,Ox=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"publications-container",children:f.jsxs("div",{className:"pub-list",children:[Di.book.length>0&&f.jsx("div",{className:"pub-section",children:f.jsxs("font",{face:"Arial",children:[f.jsx("strong",{children:"Book"}),f.jsx("blockquote",{children:f.jsx("ul",{style:{listStyle:"none",padding:0},children:Di.book.map((e,n)=>f.jsx(bd,{html:e.html},`book-${n}`))})}),f.jsx("hr",{})]})}),Object.keys(Di.byYear).sort((e,n)=>parseInt(n)-parseInt(e)).map(e=>{const n=Di.byYear[e];return n.items.length===0?null:f.jsxs("div",{className:"pub-year-section",children:[f.jsx("p",{children:f.jsx("font",{face:"Arial",children:f.jsxs("b",{children:[e,f.jsx("a",{name:e})]})})}),f.jsx("ul",{children:n.items.map((t,a)=>f.jsx(bd,{html:t.html},`${e}-${a}`))})]},e)})]})})}),Gx=()=>f.jsxs("div",{className:"software-container",children:[f.jsx("p",{className:"intro-text",children:"The software tools here were developed in the Zhang lab over many years by grant support from NSF, NIH, The Alzheimer's Association and Monsanto Corporation."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Computational Biology"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"AmpSeq-SSR"}),f.jsxs("div",{className:"software-description",children:["An accurate and efficient method for large-scale SSR genotyping and applications"," ","(",f.jsx("a",{href:`${O.baseurl}/software/AmpSeq-SSR-scripts.zip`,children:"software"}),","," ",f.jsx("a",{href:`${O.baseurl}/SSR_ST2.pdf`,children:"supplemental table"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRvial"}),f.jsxs("div",{className:"software-description",children:["A computational method and software package for detecting and characterizing microRNAs of diverse genomic origins"," ","(",f.jsx("a",{href:`${O.baseurl}/software/miRvial.tgz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"BlocBuster"}),f.jsxs("div",{className:"software-description",children:["An allele-specific and network-based GWAS method"," ","(",f.jsx("a",{href:"http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003766",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ","paper2,"," ",f.jsx("a",{href:"http://www.blocbuster.org",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"mgRF"}),f.jsxs("div",{className:"software-description",children:["Module-guided Random Forests for integration of genotypic variation and gene expression for analyzing complex traits"," ","(",f.jsx("a",{href:"http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1002956",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/mgrf.tar.bz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRank"}),f.jsxs("div",{className:"software-description",children:["MicroRNA prediction with a novel ranking algorithm based on random walks"," ","(",f.jsx("a",{href:"http://bioinformatics.oxfordjournals.org/content/24/13/i50.full",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/miRank.tgz`,children:"software and data files"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Qcut and HQcut"}),f.jsxs("div",{className:"software-description",children:["Finding communities in networks; also with scripts for visualizing clustering results and for constructing and clustering gene co-expression networks"," ","(",f.jsx("a",{href:"http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ",f.jsx("a",{href:"http://www.researchgate.net/publication/5500334_Identifying_network_communities_with_a_high_resolution",target:"_blank",rel:"noopener noreferrer",children:"paper2"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/qcut.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"WordSpy"}),f.jsx("div",{className:"software-description",children:"A steganalysis-based, genome scale motif finding method (software)"})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Rearrangement clustering"}),f.jsxs("div",{className:"software-description",children:["A method with application to gene expression analysis"," ","(",f.jsx("a",{href:"http://jmlr.org/papers/volume7/climer06a/climer06a.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:"http://cic.cs.wustl.edu/TSP_k/",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"DBTree"}),f.jsxs("div",{className:"software-description",children:["A bi-directional regression tree approach to modeling transcriptional regulation"," ","(",f.jsx("a",{href:"http://www.ncbi.nlm.nih.gov/pubmed/16303796?dopt=Abstract",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/bdtree-1.01.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Iterated loop matching"}),f.jsxs("div",{className:"software-description",children:["A method for RNA folding with pseudonots"," ","(",f.jsx("a",{href:`${O.baseurl}/software/ilm.tar.gz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Degenerate multiple PCR primers"}),f.jsxs("div",{className:"software-description",children:["A method for selecting degenerate multiple PCR primers"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/mips.zip",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Optimization and Search"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Cut-and-solve for the ATSP"}),f.jsxs("div",{className:"software-description",children:["(",f.jsx("a",{href:"http://www.cse.wustl.edu/~sclimer/i-right5.htm#download",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"MaxSolver"}),f.jsxs("div",{className:"software-description",children:["An exact max-SAT solver"," ","(",f.jsx("a",{href:"http://cic.cs.wustl.edu/maxsolver/index.htm",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Backbone guided WalkSAT"}),f.jsxs("div",{className:"software-description",children:["A method with dynamic noise strategy for SAT and Max-SAT"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/backboneGuidedSearch/bgwalksat/index.html",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]})]}),Xx=[{name:"Negesso, Abebe Edao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/AbebeEdao.jpg",position:"Ph.D. Student",description:"Abebe Edao earned a Bachelor of science degree in Medical Laboratory Technology and a Master's degree in Clinical Chemistry from Addis Ababa University, Ethiopia."},{name:"Deng Jing",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Dengjing.jpg",position:"Research Assistant",description:"She received her bachelor's degree from Southwest University of Science and Technology and her master's degree from Yanbian University. During her master's studies, she spent two years as an exchange student at the Institute of Cardiopulmonary Research, Capital Medical University. Her major is Biochemistry and Molecular Biology. She is currently working as a research assistant in Professor Zhang's group, focusing on molecular experiments and animal studies."},{name:"Junyi Chen, Ph.D.",startdate:["2024-10-07"],enddate:[""],image:"/img/members/ChenJunyi.jpg",position:"Research Assistant Professor",description:"Dr. CHEN  finished his Ph.D. in Computer Science at the City University of Hong Kong. His research focuses on the application of artificial intelligence in bioinformatics, including single-cell RNA-seq analysis, and sequence analysis",email:"jerry-junyi dot chen at polyu dot edu dot hk"},{name:"Li Yixin",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Liyixin.jpg",position:"Ph.D. Student",description:"Li Yixin obtained her bachelor's degree from Hubei University of Medicine and her master's degree in psychiatry and mental health from the First Clinical School of Wuhan University. She worked in Professor Zhang's bench group, focusing on research involving depression mouse models and related molecular mechanisms."},{name:"Zhao Qihang",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Qihangzhao.jpg",position:"Ph.D. Student",description:"Qihang holds a Bachelor’s degree in Computer Engineering from the University of Illinois Urbana-Champaign and a Master’s degree in Computer Science from Washington University in St. Louis. In the STEM Lab, Qihang focuses on genomic foundation models and deep learning approaches to tackle specific genomic challenges."},{name:"Shulan Qiu, Ph.D.",startdate:["2023-05-10"],enddate:[""],image:"/img/members/Qiushulan.jpg",position:"Principal Research Fellow",description:"As Lab Manager, Dr. Qiu received her Bachelor and Ph.D degrees in Beijing Normal University of Cell Biology. She worked as Associate Professor  in Beijing Anzhen Hospital Affiliated to Capital Medical University/Beijing Institute of Heart, Lung, and Blood Vessel Diseases (2016), then worked as Instructor in Sam and Ann Barshop Institute for Longevity and Aging Studies, University of Texas Health Science Center at San Antonio, US (2022). She has been as PI of  Youth Project and General Project of National Natural Science Foundation of China (NSFC), and as co-I in many other projects. She published  31 reviewed papers including 13 of h-index.",email:"shulan dot qiu at polyu dot edu dot hk"},{name:"Sun Canghao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Suncanghao.jpg",position:"Ph.D. Student",description:"He earned his bachelor's degree in Medical Laboratory Technology from Dalian Medical University. Currently, he is pursuing an MPhil under the supervision of Professor Zhang, focusing on molecular biology and computational biology."},{name:"Yue Tu, Ph.D.",startdate:["2024-06-17"],enddate:[""],image:"/img/members/TuYue.jpg",position:"Postdoctoral Scholar",description:'"Dr. Tu received his Bachelor’s, Master’s, and Ph.D. in Computer Application Technology from Northeastern University, under the supervision of Prof. QIAO Jianzhong and Prof. LIN Shukuan. His primary research interests include medical image analysis, computer-aided diagnosis, Magnetic Resonance Imaging, and neuroscience.'},{name:"Xin Diao, Ph.D.",startdate:["2025-11-01"],enddate:[""],image:"/img/members/DiaoXin.jpg",position:"Postdoctoral Scholar",description:"Dr. Diao received his Ph.D. in Chemistry from Hong Kong Baptist University, where he developed expertise in spatial multi-omics. At Prof. Zhang's lab, he now leverages this expertise to investigate the biology of depression through spatial proteomics."},{name:"Weixiong Zhang, Ph.D.",startdate:["2020-08-01"],enddate:[""],image:"/img/members/Zhangweixiong.jpg",position:"Principal Investigator",description:`**Background**:
- BS in Computer Engineering, Tsinghua University
- PhD in Computer Science, UCLA

**Position**:
- Hong Kong Global STEM Professor
- Chair Professor of Systems Biology and Artificial Intelligence
- Associate Director, [PolyU Academy of Interdisciplinary Research](https://www.polyu.edu.hk/pair/)

**Affiliation**:
- [Dept of Health Technology & Informatics](https://www.polyu.edu.hk/hti/)
- [Dept of Data Science & Artificial Intelligence](https://www.polyu.edu.hk/dsai/)
- [Dept of Computing](https://www.polyu.edu.hk/comp/)`,email:"weixiong dot zhang at polyu dot edu dot hk",scholar:"Minb5QMAAAAJ"},{name:"Fu QingHui",startdate:["2024-03-18"],enddate:[""],image:"/img/members/FuQinghui.jpg",position:"Ph.D. Student",description:"Fu Qinghui earned her bachelor's degree in Pharmacy from Shenzhen University and a master's degree in Medical Microbiology from The University of Manchester. Currently, in Zhang's lab, she is working on utilizing behavioral models and molecular methods to understand the neural and immunological mechanisms underlying depression."},{name:"Han Nan",startdate:["2024-05-01"],enddate:[""],image:"/img/members/HanNan.jpg",position:"Ph.D. Student",description:"Nan Han completed her Bachelor's degree in Bioinformatics at Harbin Medical University, where she researched enhancer and miRNA/lncRNA regulation with Prof. Juan Xu. She then earned her Master's degree in Bioinformatics from the Beijing Institute of Genomics, Chinese Academy of Sciences / China National Center for Bioinformation, conducting research on alternative splicing and their role in development with Prof. Zhaoqi Liu. Currently, in Prof. Zhang’s lab, she focuses on epigenetic signals and their role in depression."},{name:"Yin Huang, Ph.D.",startdate:["2024-05-01"],enddate:["2025-09-08"],image:"/img/members/HuangYin.jpg",position:"Research Fellow",description:"Dr. Huang finished his Ph.D. in Computational Biology at the University of Chinese Academy of Sciences, followed by postdoctoral research experience at Columbia University and the Guangzhou National Lab. His research has focused on developing computational methods and analyzing large-scale genomic and single-cell data."},{name:"Jiang Jiahao",startdate:["2025-01-15"],enddate:[""],image:"/img/members/JiangJiahao.jpg",position:"Ph.D. Student",description:"Jiahao earned his Bachelor's and Master's degrees in Clinical Medicine from Tongji University in China. During his studies, he developed a strong interest in cancer biology, particularly in the role of non-coding RNAs within tumor-derived exosomes. Under the guidance of Professor Zhang, Jiahao leverage advanced techniques to uncover potential biomarkers and therapeutic targets for cancer diagnosis and treatment."},{name:"Li Kang",startdate:["2022-09-01"],enddate:[""],image:"/img/members/LiKang.jpg",position:"Ph.D. Student",description:"Kang received his bachelor's degree in computer science and technology in Northeastern University in China and master's degree in Software Engineering in JiangNan University. He researches noncoding RNA and explainable AI in genomic model."},{name:"Ma Ke",startdate:["2024-01-01"],enddate:[""],image:"/img/members/MaKe.jpg",position:"Ph.D. Student",description:"Ke received his Bachelor's and Master's degrees in Mechanical Engineering from Nanjing University of Science and Technology and South China University of Technology, respectively. Then, he worked as an engineer in Zhongshan Ophthalmic Center, focusing on intelligent diagnosis of ophthalmic diseases based on EEG signals, clinical data and images. In Prof. ZHANG's lab, he is currently working on single-cell and spatial transcriptome-based disease mechanism studies."},{name:"Chunyu Pan, Ph.D.",startdate:["2024-05-01"],enddate:[""],image:"/img/members/PanChunyu.jpg",position:"Postdoctoral Scholar",description:"Dr. Pan earned his Ph.D. in Computer Science from Northeastern University. His research specializes in complex network theory and its applications in biological networks, with a particular focus on brain network alterations in various psychiatric disorders."},{name:"Peng Yuling",startdate:["2024-01-01"],enddate:[""],image:"/img/members/PengYuling.jpg",position:"Research Assistant",description:"Yuling PENG obtained her bachelor's degree from Southwest Medical University and her academic master's degree from Guangzhou Medical University. During her master's studies, she focused on basic research. Currently, she works as a research assistant in Professor Zhang's lab, where she primarily conducts molecular experiments and animal studies."},{name:"Qin Haoning",startdate:["2024-01-03"],enddate:[""],image:"/img/members/QinHaoning.jpg",position:"MPhil Student",description:"Haoning received her Bachelor of Science in Biochemistry from the University of Hong Kong (HKU). Her undergraduate studies laid the foundation for her interest in molecular biology and genetics. In Prof. Zhang's lab, Haoning employs a variety of molecular biology techniques to unravel the complex roles of non-coding RNAs in disease progression and brain function."},{name:"Tan Yejun",startdate:["2024-12-20"],enddate:[""],image:"/img/members/Tanyejun.jpg",position:"Ph.D. Student",description:`Yejun received his Bachelor's degree in Mathematical Biology (Genomics specialization) in University of Minnesota, Twin Cities (UMN). He is also an awardee of <span class=\\"fellowship-highlight\\">HKPFS</span> and <span class=\\"fellowship-highlight\\">PPPFS</span>. Under the guidance of Professor Zhang, Yejun is currently conducting research on epidemiology and non-coding RNA at the JC-STEM laboratory.`},{name:"Wang Weixu",startdate:["2022-09-01"],enddate:[""],image:"/img/members/WangWeixu.png",position:"Ph.D. Student",description:`"Weixu earned his Bachelor's and Master's degrees in Computer Science and Technology from Heilongjiang University of Science and Technology and Northeastern University, respectively.`},{name:"Wang Yuchuan",startdate:["2024-09-01"],enddate:[""],image:"/img/members/WangYuchuan.jpg",position:"Ph.D. Student",description:`"Yuchuan received his Bachelor's degree in Information Management and Information Systems from China University in Geosciences (Beijing). He then earned his Master's degree in Computer Science from Washington University in St. Louis, where he was advised by Prof. William YEOH and co-advised by Prof. Chein-Ju HO.`},{name:"Wang Zhenqian",startdate:["2024-09-01"],enddate:["2025-09-09"],image:"/img/members/WangZhenqian.png",position:"",description:"Zhenqian holds a Bachelor's degree in Statistics from Nanjing Agricultural University and a Master's degree in Epidemiology and Health Statistics from Sun Yat-sen University. He is currently focused on developing network-based GWAS methods to identify the allelic networks of disorders and utilizing these genetic biomarkers to subtype diseases."},{name:"Zeng Xianlin",startdate:["2024-12-09"],enddate:[""],image:"/img/members/ZengXianlin.jpg",position:"Ph.D. Student",description:"Xianlin received his Bachelor's degree in Biology at City University of Hong Kong and Master's in Bioinformatics at Johns Hopkins University. In Prof. Zhang's lab, Xianlin will maintain the animal model of depression and explore disease epigenomics in the process of depression intergenerational inheritance leveraging bioinformatics tools."},{name:"Zhang Chi",startdate:["2024-05-01"],enddate:["2025-09-09"],image:"/img/members/ZhangChi.jpg",position:"",description:"Chi received his Master's degree (2023) of Electronic Information Engineering at the University of Electronic Science and Technology of China, and Bachelor's degree (2020) of Communication Engineering from the North China Institute of Aerospace Engineering."},{name:"Zhang Fei",startdate:["2023-01-01"],enddate:[""],image:"/img/members/ZhangFei.png",position:"Ph.D. Student",description:"Zhang Fei earned a bachelor's degree from the School of Mathematics and Statistics, Central South University, and a master's degree from Weill Medical College of Cornell University. In Zhang's lab, she researches linkage disequilibrium, haplotype blocks, and SNP causality to develop novel GWAS models and uncover psychiatric disorder mechanisms."},{name:"Zhang Jie",startdate:["2024-09-01"],enddate:[""],image:"/img/members/ZhangJie.jpg",position:"Ph.D. Student",description:"Jie ZHANG received her  Bachelor's degree in clinical medicine and master's degree in clinical oncology from WuHan University, where she focused on the colorectal cancer basic research supervised by prof. Qibin SONG. In ZHANG lab, she will pay attention on the biogenesis and function of circular RNA."},{name:"Zhu Yan",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Zhuyan.jpg",position:"Ph.D. Student",description:"ZHU Yan earned her Bachelor's degree in Science from Jining University and her Master's degree in Science from Dalian Maritime University. Currently, she is enrolled in a joint dual-degree program organized by The Hong Kong Polytechnic University and Harbin Institute of Technology. Her research paper focuses on the prediction of protein-ligand interactions using deep learning. In Professor Zhang's lab, ZHU Yan will apply deep learning techniques to investigate the interactions between proteins and compounds of environmental pollutants, and delve into the underlying molecular mechanisms."},{name:"Zhu Yanan",startdate:["2023-12-27"],enddate:[""],image:"/img/members/ZhuYanan.jpg",position:"Research Assistant",description:"Yanan graduated with a master's degree from Zhengzhou University, focusing on research in chronic pain and circRNA. As a Research Assistant  in Prof. Zhang's lab, she is primarily responsible for administrative tasks. When needed, she also assists with animal and molecular experiments."}],vd=Xx||[],Yx=()=>{const[e,n]=E.useState({}),[t,a]=E.useState([]);return E.useEffect(()=>{const i=Tx(vd);n(i);const r=jx(vd);a(r)},[]),f.jsxs("div",{className:"members-container",children:[Hh.map(i=>{const r=e[i]||[];return r.length===0?null:f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[i,i!=="Principal Investigator"&&"s"]}),r.map(o=>f.jsx(_l,{member:o},o.name))]},i)}),t.length>0&&f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[f.jsx("span",{className:"material-icons position-title__icon",children:"school"}),"Alumni"]}),t.map(i=>f.jsx(_l,{member:i},i.name))]})]})},Vx=()=>f.jsxs("div",{className:"join-container",children:[f.jsx("p",{className:"intro-text",children:"We welcome applicants with backgrounds in Computer Science and Engineering, Biology, Computational Biology, Genomics, Biomedical Engineering, Medicine and related disciplines to join the Hong Kong Jockey Club STEM Laboratory of Genomics and AI in Healthcare."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Opportunities"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistant Professors"}),f.jsx("div",{className:"card-body",children:"Lead or co-lead projects at the interface of AI and genomics; mentor junior researchers."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"(Senior) Research Fellows"}),f.jsx("div",{className:"card-body",children:"Drive cutting-edge methods and applications; collaborate across computational and wet-lab teams."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Postdoctoral Fellows"}),f.jsx("div",{className:"card-body",children:"Develop algorithms, models and experiments for genomic medicine and AI for healthcare."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistants"}),f.jsx("div",{className:"card-body",children:"Support data analysis, software engineering and/or molecular experiments."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"PhD and Master's students"}),f.jsx("div",{className:"card-body",children:"Pursue graduate research in computational genomics, systems biology, and AI."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Undergraduate Interns"}),f.jsx("div",{className:"card-body",children:"Gain hands-on research experience in computational biology or molecular biology."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"About the Laboratory"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Computational Laboratory"}),f.jsx("div",{className:"card-body",children:"Cluster with CPUs, H100/A800/A6000 GPUs, file servers and petabyte-scale storage."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Molecular Biology Laboratory"}),f.jsx("div",{className:"card-body",children:"Instruments for genomics, cellular/molecular mechanism studies and conventional techniques."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Application"})}),f.jsxs("div",{className:"contact-box",children:["Prospective applicants may send inquiry to: ",f.jsx("strong",{children:"genomics@polyu.edu.hk"})]})]}),Qx=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"contact-container",children:f.jsx("div",{className:"contact-content",children:f.jsxs("p",{children:["Department of Health Technology and Informatics",f.jsx("br",{}),"Lee Shau Kee Building, Block Y520, The Hong Kong Polytechnic University",f.jsx("br",{}),"Yuk Choi Road, Hung Hom",f.jsx("br",{}),f.jsx("br",{}),f.jsx("strong",{children:"Email:"})," ",f.jsx("a",{href:"mailto:genomics@polyu.edu.hk",children:"genomics@polyu.edu.hk"}),f.jsx("br",{}),f.jsx("strong",{children:"Phone:"})," +852 3400 8567",f.jsx("br",{}),f.jsx("strong",{children:f.jsx("a",{style:{color:"#1e3a8a"},href:"https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E6%9D%8E%E5%85%86%E5%9F%BA%E6%A5%BC/@22.3060237,114.1808547,17z/data=!3m1!4b1!4m6!3m5!1s0x340400e7ea4cd421:0xc9fb261caeaaf54a!8m2!3d22.3060237!4d114.1808547!16s%2Fg%2F11b67ll0tq?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",children:"Google Map"})})]})})})}),Kx=()=>f.jsx(W0,{children:f.jsxs(u0,{children:[f.jsx(Pn,{path:"/",element:f.jsx(R0,{})}),f.jsx(Pn,{path:"/news",element:f.jsx(zx,{})}),f.jsx(Pn,{path:"/research",element:f.jsx(Jx,{})}),f.jsx(Pn,{path:"/publications",element:f.jsx(Ox,{})}),f.jsx(Pn,{path:"/software",element:f.jsx(Gx,{})}),f.jsx(Pn,{path:"/members",element:f.jsx(Yx,{})}),f.jsx(Pn,{path:"/join",element:f.jsx(Vx,{})}),f.jsx(Pn,{path:"/contact",element:f.jsx(Qx,{})})]})}),$x="/";Mo.createRoot(document.getElementById("root")).render(f.jsx(Id.StrictMode,{children:f.jsx(k0,{basename:$x,children:f.jsx(Kx,{})})}));
