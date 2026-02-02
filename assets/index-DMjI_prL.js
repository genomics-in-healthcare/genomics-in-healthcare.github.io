(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Yh(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const r=Object.getOwnPropertyDescriptor(a,i);r&&Object.defineProperty(e,i,r.get?r:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xd={exports:{}},Pr={},wd={exports:{}},U={};/**
* @license React
* react.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var oi=Symbol.for("react.element"),Vh=Symbol.for("react.portal"),Kh=Symbol.for("react.fragment"),$h=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),eg=Symbol.for("react.context"),tg=Symbol.for("react.forward_ref"),ng=Symbol.for("react.suspense"),ag=Symbol.for("react.memo"),ig=Symbol.for("react.lazy"),ic=Symbol.iterator;function rg(e){return e===null||typeof e!="object"?null:(e=ic&&e[ic]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kd=Object.assign,Sd={};function ra(e,t,n){this.props=e,this.context=t,this.refs=Sd,this.updater=n||Ad}ra.prototype.isReactComponent={};ra.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ra.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cd(){}Cd.prototype=ra.prototype;function Jl(e,t,n){this.props=e,this.context=t,this.refs=Sd,this.updater=n||Ad}var Bl=Jl.prototype=new Cd;Bl.constructor=Jl;kd(Bl,ra.prototype);Bl.isPureReactComponent=!0;var rc=Array.isArray,Pd=Object.prototype.hasOwnProperty,Ul={current:null},Ld={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var a,i={},r=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(r=""+t.key),t)Pd.call(t,a)&&!Ld.hasOwnProperty(a)&&(i[a]=t[a]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),c=0;c<l;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(a in l=e.defaultProps,l)i[a]===void 0&&(i[a]=l[a]);return{$$typeof:oi,type:e,key:r,ref:o,props:i,_owner:Ul.current}}function og(e,t){return{$$typeof:oi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===oi}function lg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var oc=/\/+/g;function Xr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lg(""+e.key):t.toString(36)}function Di(e,t,n,a,i){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(r){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case oi:case Vh:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+Xr(o,0):a,rc(i)?(n="",e!=null&&(n=e.replace(oc,"$&/")+"/"),Di(i,t,n,"",function(c){return c})):i!=null&&(Fl(i)&&(i=og(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(oc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",rc(e))for(var l=0;l<e.length;l++){r=e[l];var s=a+Xr(r,l);o+=Di(r,t,n,s,i)}else if(s=rg(e),typeof s=="function")for(e=s.call(e),l=0;!(r=e.next()).done;)r=r.value,s=a+Xr(r,l++),o+=Di(r,t,n,s,i);else if(r==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function mi(e,t,n){if(e==null)return e;var a=[],i=0;return Di(e,a,"","",function(r){return t.call(n,r,i++)}),a}function sg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Hi={transition:null},cg={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Hi,ReactCurrentOwner:Ul};function Ed(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:mi,forEach:function(e,t,n){mi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return mi(e,function(){t++}),t},toArray:function(e){return mi(e,function(t){return t})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=ra;U.Fragment=Kh;U.Profiler=Qh;U.PureComponent=Jl;U.StrictMode=$h;U.Suspense=ng;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cg;U.act=Ed;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=kd({},e.props),i=e.key,r=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(r=t.ref,o=Ul.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)Pd.call(t,s)&&!Ld.hasOwnProperty(s)&&(a[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){l=Array(s);for(var c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}return{$$typeof:oi,type:e.type,key:i,ref:r,props:a,_owner:o}};U.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qh,_context:e},e.Consumer=e};U.createElement=Nd;U.createFactory=function(e){var t=Nd.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:tg,render:e}};U.isValidElement=Fl;U.lazy=function(e){return{$$typeof:ig,_payload:{_status:-1,_result:e},_init:sg}};U.memo=function(e,t){return{$$typeof:ag,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Hi.transition;Hi.transition={};try{e()}finally{Hi.transition=t}};U.unstable_act=Ed;U.useCallback=function(e,t){return Ze.current.useCallback(e,t)};U.useContext=function(e){return Ze.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};U.useEffect=function(e,t){return Ze.current.useEffect(e,t)};U.useId=function(){return Ze.current.useId()};U.useImperativeHandle=function(e,t,n){return Ze.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Ze.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Ze.current.useReducer(e,t,n)};U.useRef=function(e){return Ze.current.useRef(e)};U.useState=function(e){return Ze.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Ze.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Ze.current.useTransition()};U.version="18.3.1";wd.exports=U;var E=wd.exports;const Wd=zl(E),ug=Yh({__proto__:null,default:Wd},[E]);/**
* @license React
* react-jsx-runtime.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var dg=E,fg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,gg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mg={key:!0,ref:!0,__self:!0,__source:!0};function Id(e,t,n){var a,i={},r=null,o=null;n!==void 0&&(r=""+n),t.key!==void 0&&(r=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)hg.call(t,a)&&!mg.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:fg,type:e,key:r,ref:o,props:i,_owner:gg.current}}Pr.Fragment=pg;Pr.jsx=Id;Pr.jsxs=Id;xd.exports=Pr;var f=xd.exports,Zo={},Rd={exports:{}},Ye={},Zd={exports:{}},Md={};/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/(function(e){function t(R,H){var y=R.length;R.push(H);e:for(;0<y;){var G=y-1>>>1,K=R[G];if(0<i(K,H))R[G]=H,R[y]=K,y=G;else break e}}function n(R){return R.length===0?null:R[0]}function a(R){if(R.length===0)return null;var H=R[0],y=R.pop();if(y!==H){R[0]=y;e:for(var G=0,K=R.length,v=K>>>1;G<v;){var ye=2*(G+1)-1,it=R[ye],ne=ye+1,pt=R[ne];if(0>i(it,y))ne<K&&0>i(pt,it)?(R[G]=pt,R[ne]=y,G=ne):(R[G]=it,R[ye]=y,G=ye);else if(ne<K&&0>i(pt,y))R[G]=pt,R[ne]=y,G=ne;else break e}}return H}function i(R,H){var y=R.sortIndex-H.sortIndex;return y!==0?y:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],c=[],u=1,d=null,h=3,p=!1,x=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(R){for(var H=n(c);H!==null;){if(H.callback===null)a(c);else if(H.startTime<=R)a(c),H.sortIndex=H.expirationTime,t(s,H);else break;H=n(c)}}function k(R){if(w=!1,b(R),!x)if(n(s)!==null)x=!0,he(L);else{var H=n(c);H!==null&&fe(k,H.startTime-R)}}function L(R,H){x=!1,w&&(w=!1,g(Z),Z=-1),p=!0;var y=h;try{for(b(H),d=n(s);d!==null&&(!(d.expirationTime>H)||R&&!T());){var G=d.callback;if(typeof G=="function"){d.callback=null,h=d.priorityLevel;var K=G(d.expirationTime<=H);H=e.unstable_now(),typeof K=="function"?d.callback=K:d===n(s)&&a(s),b(H)}else a(s);d=n(s)}if(d!==null)var v=!0;else{var ye=n(c);ye!==null&&fe(k,ye.startTime-H),v=!1}return v}finally{d=null,h=y,p=!1}}var A=!1,W=null,Z=-1,_=5,j=-1;function T(){return!(e.unstable_now()-j<_)}function D(){if(W!==null){var R=e.unstable_now();j=R;var H=!0;try{H=W(!0,R)}finally{H?Y():(A=!1,W=null)}}else A=!1}var Y;if(typeof m=="function")Y=function(){m(D)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,F=le.port2;le.port1.onmessage=D,Y=function(){F.postMessage(null)}}else Y=function(){C(D,0)};function he(R){W=R,A||(A=!0,Y())}function fe(R,H){Z=C(function(){R(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,he(L))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var y=h;h=H;try{return R()}finally{h=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var y=h;h=R;try{return H()}finally{h=y}},e.unstable_scheduleCallback=function(R,H,y){var G=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?G+y:G):y=G,R){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=y+K,R={id:u++,callback:H,priorityLevel:R,startTime:y,expirationTime:K,sortIndex:-1},y>G?(R.sortIndex=y,t(c,R),n(s)===null&&R===n(c)&&(w?(g(Z),Z=-1):w=!0,fe(k,y-G))):(R.sortIndex=K,t(s,R),x||p||(x=!0,he(L))),R},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(R){var H=h;return function(){var y=h;h=H;try{return R.apply(this,arguments)}finally{h=y}}}})(Md);Zd.exports=Md;var yg=Zd.exports;/**
* @license React
* react-dom.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var bg=E,Xe=yg;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jd=new Set,Ja={};function vn(e,t){Qn(e,t),Qn(e+"Capture",t)}function Qn(e,t){for(Ja[e]=t,e=0;e<t.length;e++)jd.add(t[e])}var It=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mo=Object.prototype.hasOwnProperty,vg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc={},sc={};function xg(e){return Mo.call(sc,e)?!0:Mo.call(lc,e)?!1:vg.test(e)?sc[e]=!0:(lc[e]=!0,!1)}function wg(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ag(e,t,n,a){if(t===null||typeof t>"u"||wg(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,a,i,r,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=r,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ce[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ol,Gl);Ce[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ol,Gl);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ol,Gl);Ce[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Xl(e,t,n,a){var i=Ce.hasOwnProperty(t)?Ce[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ag(t,n,i,a)&&(n=null),a||i===null?xg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var jt=bg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yi=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),jo=Symbol.for("react.profiler"),Td=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Vl=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),Do=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),cc=Symbol.iterator;function ha(e){return e===null||typeof e!="object"?null:(e=cc&&e[cc]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Yr;function Sa(e){if(Yr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yr=t&&t[1]||""}return`
`+Yr+e}var Vr=!1;function Kr(e,t){if(!e||Vr)return"";Vr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var a=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){a=c}e.call(t.prototype)}else{try{throw Error()}catch(c){a=c}e()}}catch(c){if(c&&a&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),r=a.stack.split(`
`),o=i.length-1,l=r.length-1;1<=o&&0<=l&&i[o]!==r[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==r[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==r[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Vr=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Sa(e):""}function kg(e){switch(e.tag){case 5:return Sa(e.type);case 16:return Sa("Lazy");case 13:return Sa("Suspense");case 19:return Sa("SuspenseList");case 0:case 2:case 15:return e=Kr(e.type,!1),e;case 11:return e=Kr(e.type.render,!1),e;case 1:return e=Kr(e.type,!0),e;default:return""}}function Ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Wn:return"Portal";case jo:return"Profiler";case Yl:return"StrictMode";case To:return"Suspense";case Do:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dd:return(e.displayName||"Context")+".Consumer";case Td:return(e._context.displayName||"Context")+".Provider";case Vl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return t=e.displayName||null,t!==null?t:Ho(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return Ho(e(t))}catch{}}return null}function Sg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ho(t);case 8:return t===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _d(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cg(e){var t=_d(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,r=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,r.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bi(e){e._valueTracker||(e._valueTracker=Cg(e))}function zd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=_d(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function uc(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Jd(e,t){t=t.checked,t!=null&&Xl(e,"checked",t,!1)}function zo(e,t){Jd(e,t);var n=en(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jo(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jo(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function dc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jo(e,t,n){(t!=="number"||Qi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ca=Array.isArray;function Un(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Bo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function fc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Ca(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Bd(e,t){var n=en(t.value),a=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function pc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,Fd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ba(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pg=["Webkit","ms","Moz","O"];Object.keys(Ea).forEach(function(e){Pg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ea[t]=Ea[e]})});function Od(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ea.hasOwnProperty(e)&&Ea[e]?(""+t).trim():t+"px"}function Gd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Od(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var Lg=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,t){if(t){if(Lg[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Fn=null,On=null;function hc(e){if(e=ci(e)){if(typeof Xo!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Ir(t),Xo(e.stateNode,e.type,t))}}function Xd(e){Fn?On?On.push(e):On=[e]:Fn=e}function Yd(){if(Fn){var e=Fn,t=On;if(On=Fn=null,hc(e),t)for(e=0;e<t.length;e++)hc(t[e])}}function Vd(e,t){return e(t)}function Kd(){}var $r=!1;function $d(e,t,n){if($r)return e(t,n);$r=!0;try{return Vd(e,t,n)}finally{$r=!1,(Fn!==null||On!==null)&&(Kd(),Yd())}}function Ua(e,t){var n=e.stateNode;if(n===null)return null;var a=Ir(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Yo=!1;if(It)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{Yo=!1}function Ng(e,t,n,a,i,r,o,l,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Wa=!1,qi=null,er=!1,Vo=null,Eg={onError:function(e){Wa=!0,qi=e}};function Wg(e,t,n,a,i,r,o,l,s){Wa=!1,qi=null,Ng.apply(Eg,arguments)}function Ig(e,t,n,a,i,r,o,l,s){if(Wg.apply(this,arguments),Wa){if(Wa){var c=qi;Wa=!1,qi=null}else throw Error(P(198));er||(er=!0,Vo=c)}}function xn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Qd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gc(e){if(xn(e)!==e)throw Error(P(188))}function Rg(e){var t=e.alternate;if(!t){if(t=xn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return gc(i),e;if(r===a)return gc(i),t;r=r.sibling}throw Error(P(188))}if(n.return!==a.return)n=i,a=r;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,a=r;break}if(l===a){o=!0,a=i,n=r;break}l=l.sibling}if(!o){for(l=r.child;l;){if(l===n){o=!0,n=r,a=i;break}if(l===a){o=!0,a=r,n=i;break}l=l.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==a)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function qd(e){return e=Rg(e),e!==null?ef(e):null}function ef(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ef(e);if(t!==null)return t;e=e.sibling}return null}var tf=Xe.unstable_scheduleCallback,mc=Xe.unstable_cancelCallback,Zg=Xe.unstable_shouldYield,Mg=Xe.unstable_requestPaint,pe=Xe.unstable_now,jg=Xe.unstable_getCurrentPriorityLevel,Ql=Xe.unstable_ImmediatePriority,nf=Xe.unstable_UserBlockingPriority,tr=Xe.unstable_NormalPriority,Tg=Xe.unstable_LowPriority,af=Xe.unstable_IdlePriority,Lr=null,xt=null;function Dg(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Lr,e,void 0,(e.current.flags&128)===128)}catch{}}var ut=Math.clz32?Math.clz32:zg,Hg=Math.log,_g=Math.LN2;function zg(e){return e>>>=0,e===0?32:31-(Hg(e)/_g|0)|0}var xi=64,wi=4194304;function Pa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function nr(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?a=Pa(l):(r&=o,r!==0&&(a=Pa(r)))}else o=n&~i,o!==0?a=Pa(o):r!==0&&(a=Pa(r));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,r=t&-t,i>=r||i===16&&(r&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-ut(t),i=1<<n,a|=e[n],t&=~i;return a}function Jg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bg(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes;0<r;){var o=31-ut(r),l=1<<o,s=i[o];s===-1?(!(l&n)||l&a)&&(i[o]=Jg(l,t)):s<=t&&(e.expiredLanes|=l),r&=~l}}function Ko(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function rf(){var e=xi;return xi<<=1,!(xi&4194240)&&(xi=64),e}function Qr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function li(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ut(t),e[t]=n}function Ug(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ut(n),r=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~r}}function ql(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ut(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var V=0;function of(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var lf,es,sf,cf,uf,$o=!1,Ai=[],Ot=null,Gt=null,Xt=null,Fa=new Map,Oa=new Map,Jt=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yc(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Xt=null;break;case"pointerover":case"pointerout":Fa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(t.pointerId)}}function ma(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ci(t),t!==null&&es(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Og(e,t,n,a,i){switch(t){case"focusin":return Ot=ma(Ot,e,t,n,a,i),!0;case"dragenter":return Gt=ma(Gt,e,t,n,a,i),!0;case"mouseover":return Xt=ma(Xt,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return Fa.set(r,ma(Fa.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Oa.set(r,ma(Oa.get(r)||null,e,t,n,a,i)),!0}return!1}function df(e){var t=cn(e.target);if(t!==null){var n=xn(t);if(n!==null){if(t=n.tag,t===13){if(t=Qd(n),t!==null){e.blockedOn=t,uf(e.priority,function(){sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Go=a,n.target.dispatchEvent(a),Go=null}else return t=ci(n),t!==null&&es(t),e.blockedOn=n,!1;t.shift()}return!0}function bc(e,t,n){_i(e)&&n.delete(t)}function Gg(){$o=!1,Ot!==null&&_i(Ot)&&(Ot=null),Gt!==null&&_i(Gt)&&(Gt=null),Xt!==null&&_i(Xt)&&(Xt=null),Fa.forEach(bc),Oa.forEach(bc)}function ya(e,t){e.blockedOn===t&&(e.blockedOn=null,$o||($o=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Gg)))}function Ga(e){function t(i){return ya(i,e)}if(0<Ai.length){ya(Ai[0],e);for(var n=1;n<Ai.length;n++){var a=Ai[n];a.blockedOn===e&&(a.blockedOn=null)}}for(Ot!==null&&ya(Ot,e),Gt!==null&&ya(Gt,e),Xt!==null&&ya(Xt,e),Fa.forEach(t),Oa.forEach(t),n=0;n<Jt.length;n++)a=Jt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)df(n),n.blockedOn===null&&Jt.shift()}var Gn=jt.ReactCurrentBatchConfig,ar=!0;function Xg(e,t,n,a){var i=V,r=Gn.transition;Gn.transition=null;try{V=1,ts(e,t,n,a)}finally{V=i,Gn.transition=r}}function Yg(e,t,n,a){var i=V,r=Gn.transition;Gn.transition=null;try{V=4,ts(e,t,n,a)}finally{V=i,Gn.transition=r}}function ts(e,t,n,a){if(ar){var i=Qo(e,t,n,a);if(i===null)so(e,t,a,ir,n),yc(e,a);else if(Og(i,e,t,n,a))a.stopPropagation();else if(yc(e,a),t&4&&-1<Fg.indexOf(e)){for(;i!==null;){var r=ci(i);if(r!==null&&lf(r),r=Qo(e,t,n,a),r===null&&so(e,t,a,ir,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else so(e,t,a,null,n)}}var ir=null;function Qo(e,t,n,a){if(ir=null,e=$l(a),e=cn(e),e!==null)if(t=xn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Qd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ir=e,null}function ff(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jg()){case Ql:return 1;case nf:return 4;case tr:case Tg:return 16;case af:return 536870912;default:return 16}default:return 16}}var Ut=null,ns=null,zi=null;function pf(){if(zi)return zi;var e,t=ns,n=t.length,a,i="value"in Ut?Ut.value:Ut.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[r-a];a++);return zi=i.slice(e,1<a?1-a:void 0)}function Ji(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function vc(){return!1}function Ve(e){function t(n,a,i,r,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(r):r[l]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?ki:vc,this.isPropagationStopped=vc,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},as=Ve(oa),si=ue({},oa,{view:0,detail:0}),Vg=Ve(si),qr,eo,ba,Nr=ue({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:is,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(qr=e.screenX-ba.screenX,eo=e.screenY-ba.screenY):eo=qr=0,ba=e),qr)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),xc=Ve(Nr),Kg=ue({},Nr,{dataTransfer:0}),$g=Ve(Kg),Qg=ue({},si,{relatedTarget:0}),to=Ve(Qg),qg=ue({},oa,{animationName:0,elapsedTime:0,pseudoElement:0}),em=Ve(qg),tm=ue({},oa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),nm=Ve(tm),am=ue({},oa,{data:0}),wc=Ve(am),im={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=om[e])?!!t[e]:!1}function is(){return lm}var sm=ue({},si,{key:function(e){if(e.key){var t=im[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:is,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cm=Ve(sm),um=ue({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ac=Ve(um),dm=ue({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:is}),fm=Ve(dm),pm=ue({},oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=Ve(pm),gm=ue({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=Ve(gm),ym=[9,13,27,32],rs=It&&"CompositionEvent"in window,Ia=null;It&&"documentMode"in document&&(Ia=document.documentMode);var bm=It&&"TextEvent"in window&&!Ia,hf=It&&(!rs||Ia&&8<Ia&&11>=Ia),kc=" ",Sc=!1;function gf(e,t){switch(e){case"keyup":return ym.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rn=!1;function vm(e,t){switch(e){case"compositionend":return mf(t);case"keypress":return t.which!==32?null:(Sc=!0,kc);case"textInput":return e=t.data,e===kc&&Sc?null:e;default:return null}}function xm(e,t){if(Rn)return e==="compositionend"||!rs&&gf(e,t)?(e=pf(),zi=ns=Ut=null,Rn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hf&&t.locale!=="ko"?null:t.data;default:return null}}var wm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wm[e.type]:t==="textarea"}function yf(e,t,n,a){Xd(a),t=rr(t,"onChange"),0<t.length&&(n=new as("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var Ra=null,Xa=null;function Am(e){Nf(e,0)}function Er(e){var t=jn(e);if(zd(t))return e}function km(e,t){if(e==="change")return t}var bf=!1;if(It){var no;if(It){var ao="oninput"in document;if(!ao){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),ao=typeof Pc.oninput=="function"}no=ao}else no=!1;bf=no&&(!document.documentMode||9<document.documentMode)}function Lc(){Ra&&(Ra.detachEvent("onpropertychange",vf),Xa=Ra=null)}function vf(e){if(e.propertyName==="value"&&Er(Xa)){var t=[];yf(t,Xa,e,$l(e)),$d(Am,t)}}function Sm(e,t,n){e==="focusin"?(Lc(),Ra=t,Xa=n,Ra.attachEvent("onpropertychange",vf)):e==="focusout"&&Lc()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Er(Xa)}function Pm(e,t){if(e==="click")return Er(t)}function Lm(e,t){if(e==="input"||e==="change")return Er(t)}function Nm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Nm;function Ya(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!Mo.call(t,i)||!ft(e[i],t[i]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ec(e,t){var n=Nc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nc(n)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wf(){for(var e=window,t=Qi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qi(e.document)}return t}function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Em(e){var t=wf(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&xf(n.ownerDocument.documentElement,n)){if(a!==null&&os(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,r=Math.min(a.start,i);a=a.end===void 0?r:Math.min(a.end,i),!e.extend&&r>a&&(i=a,a=r,r=i),i=Ec(n,r);var o=Ec(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),r>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wm=It&&"documentMode"in document&&11>=document.documentMode,Zn=null,qo=null,Za=null,el=!1;function Wc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;el||Zn==null||Zn!==Qi(a)||(a=Zn,"selectionStart"in a&&os(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Za&&Ya(Za,a)||(Za=a,a=rr(qo,"onSelect"),0<a.length&&(t=new as("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Zn)))}function Si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Mn={animationend:Si("Animation","AnimationEnd"),animationiteration:Si("Animation","AnimationIteration"),animationstart:Si("Animation","AnimationStart"),transitionend:Si("Transition","TransitionEnd")},io={},Af={};It&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete Mn.animationend.animation,delete Mn.animationiteration.animation,delete Mn.animationstart.animation),"TransitionEvent"in window||delete Mn.transitionend.transition);function Wr(e){if(io[e])return io[e];if(!Mn[e])return e;var t=Mn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Af)return io[e]=t[n];return e}var kf=Wr("animationend"),Sf=Wr("animationiteration"),Cf=Wr("animationstart"),Pf=Wr("transitionend"),Lf=new Map,Ic="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Lf.set(e,t),vn(t,[e])}for(var ro=0;ro<Ic.length;ro++){var oo=Ic[ro],Im=oo.toLowerCase(),Rm=oo[0].toUpperCase()+oo.slice(1);nn(Im,"on"+Rm)}nn(kf,"onAnimationEnd");nn(Sf,"onAnimationIteration");nn(Cf,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Pf,"onTransitionEnd");Qn("onMouseEnter",["mouseout","mouseover"]);Qn("onMouseLeave",["mouseout","mouseover"]);Qn("onPointerEnter",["pointerout","pointerover"]);Qn("onPointerLeave",["pointerout","pointerover"]);vn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vn("onBeforeInput",["compositionend","keypress","textInput","paste"]);vn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zm=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Rc(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,Ig(a,t,void 0,e),e.currentTarget=null}function Nf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var o=a.length-1;0<=o;o--){var l=a[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==r&&i.isPropagationStopped())break e;Rc(i,l,c),r=s}else for(o=0;o<a.length;o++){if(l=a[o],s=l.instance,c=l.currentTarget,l=l.listener,s!==r&&i.isPropagationStopped())break e;Rc(i,l,c),r=s}}}if(er)throw e=Vo,er=!1,Vo=null,e}function ie(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var a=e+"__bubble";n.has(a)||(Ef(t,e,2,!1),n.add(a))}function lo(e,t,n){var a=0;t&&(a|=4),Ef(n,e,a,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function Va(e){if(!e[Ci]){e[Ci]=!0,jd.forEach(function(n){n!=="selectionchange"&&(Zm.has(n)||lo(n,!1,e),lo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,lo("selectionchange",!1,t))}}function Ef(e,t,n,a){switch(ff(t)){case 1:var i=Xg;break;case 4:i=Yg;break;default:i=ts}n=i.bind(null,t,n,e),i=void 0,!Yo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function so(e,t,n,a,i){var r=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var l=a.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=cn(l),o===null)return;if(s=o.tag,s===5||s===6){a=r=o;continue e}l=l.parentNode}}a=a.return}$d(function(){var c=r,u=$l(n),d=[];e:{var h=Lf.get(e);if(h!==void 0){var p=as,x=e;switch(e){case"keypress":if(Ji(n)===0)break e;case"keydown":case"keyup":p=cm;break;case"focusin":x="focus",p=to;break;case"focusout":x="blur",p=to;break;case"beforeblur":case"afterblur":p=to;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$g;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fm;break;case kf:case Sf:case Cf:p=em;break;case Pf:p=hm;break;case"scroll":p=Vg;break;case"wheel":p=mm;break;case"copy":case"cut":case"paste":p=nm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ac}var w=(t&4)!==0,C=!w&&e==="scroll",g=w?h!==null?h+"Capture":null:h;w=[];for(var m=c,b;m!==null;){b=m;var k=b.stateNode;if(b.tag===5&&k!==null&&(b=k,g!==null&&(k=Ua(m,g),k!=null&&w.push(Ka(m,k,b)))),C)break;m=m.return}0<w.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==Go&&(x=n.relatedTarget||n.fromElement)&&(cn(x)||x[Rt]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?cn(x):null,x!==null&&(C=xn(x),x!==C||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(w=xc,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ac,k="onPointerLeave",g="onPointerEnter",m="pointer"),C=p==null?h:jn(p),b=x==null?h:jn(x),h=new w(k,m+"leave",p,n,u),h.target=C,h.relatedTarget=b,k=null,cn(u)===c&&(w=new w(g,m+"enter",x,n,u),w.target=b,w.relatedTarget=C,k=w),C=k,p&&x)t:{for(w=p,g=x,m=0,b=w;b;b=Nn(b))m++;for(b=0,k=g;k;k=Nn(k))b++;for(;0<m-b;)w=Nn(w),m--;for(;0<b-m;)g=Nn(g),b--;for(;m--;){if(w===g||g!==null&&w===g.alternate)break t;w=Nn(w),g=Nn(g)}w=null}else w=null;p!==null&&Zc(d,h,p,w,!1),x!==null&&C!==null&&Zc(d,C,x,w,!0)}}e:{if(h=c?jn(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=km;else if(Cc(h))if(bf)L=Lm;else{L=Cm;var A=Sm}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Pm);if(L&&(L=L(e,c))){yf(d,L,n,u);break e}A&&A(e,h,c),e==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Jo(h,"number",h.value)}switch(A=c?jn(c):window,e){case"focusin":(Cc(A)||A.contentEditable==="true")&&(Zn=A,qo=c,Za=null);break;case"focusout":Za=qo=Zn=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Wc(d,n,u);break;case"selectionchange":if(Wm)break;case"keydown":case"keyup":Wc(d,n,u)}var W;if(rs)e:{switch(e){case"compositionstart":var Z="onCompositionStart";break e;case"compositionend":Z="onCompositionEnd";break e;case"compositionupdate":Z="onCompositionUpdate";break e}Z=void 0}else Rn?gf(e,n)&&(Z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Z="onCompositionStart");Z&&(hf&&n.locale!=="ko"&&(Rn||Z!=="onCompositionStart"?Z==="onCompositionEnd"&&Rn&&(W=pf()):(Ut=u,ns="value"in Ut?Ut.value:Ut.textContent,Rn=!0)),A=rr(c,Z),0<A.length&&(Z=new wc(Z,e,null,n,u),d.push({event:Z,listeners:A}),W?Z.data=W:(W=mf(n),W!==null&&(Z.data=W)))),(W=bm?vm(e,n):xm(e,n))&&(c=rr(c,"onBeforeInput"),0<c.length&&(u=new wc("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=W))}Nf(d,t)})}function Ka(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;i.tag===5&&r!==null&&(i=r,r=Ua(e,n),r!=null&&a.unshift(Ka(e,r,i)),r=Ua(e,t),r!=null&&a.push(Ka(e,r,i))),e=e.return}return a}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zc(e,t,n,a,i){for(var r=t._reactName,o=[];n!==null&&n!==a;){var l=n,s=l.alternate,c=l.stateNode;if(s!==null&&s===a)break;l.tag===5&&c!==null&&(l=c,i?(s=Ua(n,r),s!=null&&o.unshift(Ka(n,s,l))):i||(s=Ua(n,r),s!=null&&o.push(Ka(n,s,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Mm=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Mc(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(jm,"")}function Pi(e,t,n){if(t=Mc(t),Mc(e)!==t&&n)throw Error(P(425))}function or(){}var tl=null,nl=null;function al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Tm=typeof clearTimeout=="function"?clearTimeout:void 0,jc=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof jc<"u"?function(e){return jc.resolve(null).then(e).catch(Hm)}:il;function Hm(e){setTimeout(function(){throw e})}function co(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Ga(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Ga(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var la=Math.random().toString(36).slice(2),bt="__reactFiber$"+la,$a="__reactProps$"+la,Rt="__reactContainer$"+la,rl="__reactEvents$"+la,_m="__reactListeners$"+la,zm="__reactHandles$"+la;function cn(e){var t=e[bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Tc(e);e!==null;){if(n=e[bt])return n;e=Tc(e)}return t}e=n,n=e.parentNode}return null}function ci(e){return e=e[bt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Ir(e){return e[$a]||null}var ol=[],Tn=-1;function an(e){return{current:e}}function re(e){0>Tn||(e.current=ol[Tn],ol[Tn]=null,Tn--)}function ee(e,t){Tn++,ol[Tn]=e.current,e.current=t}var tn={},Ee=an(tn),He=an(!1),hn=tn;function qn(e,t){var n=e.type.contextTypes;if(!n)return tn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},r;for(r in n)i[r]=t[r];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function lr(){re(He),re(Ee)}function Dc(e,t,n){if(Ee.current!==tn)throw Error(P(168));ee(Ee,t),ee(He,n)}function Wf(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(P(108,Sg(e)||"Unknown",i));return ue({},n,a)}function sr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,hn=Ee.current,ee(Ee,e),ee(He,He.current),!0}function Hc(e,t,n){var a=e.stateNode;if(!a)throw Error(P(169));n?(e=Wf(e,t,hn),a.__reactInternalMemoizedMergedChildContext=e,re(He),re(Ee),ee(Ee,e)):re(He),ee(He,n)}var Lt=null,Rr=!1,uo=!1;function If(e){Lt===null?Lt=[e]:Lt.push(e)}function Jm(e){Rr=!0,If(e)}function rn(){if(!uo&&Lt!==null){uo=!0;var e=0,t=V;try{var n=Lt;for(V=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Lt=null,Rr=!1}catch(i){throw Lt!==null&&(Lt=Lt.slice(e+1)),tf(Ql,rn),i}finally{V=t,uo=!1}}return null}var Dn=[],Hn=0,cr=null,ur=0,Ke=[],$e=0,gn=null,Nt=1,Et="";function on(e,t){Dn[Hn++]=ur,Dn[Hn++]=cr,cr=e,ur=t}function Rf(e,t,n){Ke[$e++]=Nt,Ke[$e++]=Et,Ke[$e++]=gn,gn=e;var a=Nt;e=Et;var i=32-ut(a)-1;a&=~(1<<i),n+=1;var r=32-ut(t)+i;if(30<r){var o=i-i%5;r=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Nt=1<<32-ut(t)+i|n<<i|a,Et=r+e}else Nt=1<<r|n<<i|a,Et=e}function ls(e){e.return!==null&&(on(e,1),Rf(e,1,0))}function ss(e){for(;e===cr;)cr=Dn[--Hn],Dn[Hn]=null,ur=Dn[--Hn],Dn[Hn]=null;for(;e===gn;)gn=Ke[--$e],Ke[$e]=null,Et=Ke[--$e],Ke[$e]=null,Nt=Ke[--$e],Ke[$e]=null}var Ge=null,Oe=null,oe=!1,st=null;function Zf(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _c(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Oe=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:Nt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Oe=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(oe){var t=Oe;if(t){var n=t;if(!_c(e,t)){if(ll(e))throw Error(P(418));t=Yt(n.nextSibling);var a=Ge;t&&_c(e,t)?Zf(a,n):(e.flags=e.flags&-4097|2,oe=!1,Ge=e)}}else{if(ll(e))throw Error(P(418));e.flags=e.flags&-4097|2,oe=!1,Ge=e}}}function zc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Li(e){if(e!==Ge)return!1;if(!oe)return zc(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!al(e.type,e.memoizedProps)),t&&(t=Oe)){if(ll(e))throw Mf(),Error(P(418));for(;t;)Zf(e,t),t=Yt(t.nextSibling)}if(zc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=Ge?Yt(e.stateNode.nextSibling):null;return!0}function Mf(){for(var e=Oe;e;)e=Yt(e.nextSibling)}function ea(){Oe=Ge=null,oe=!1}function cs(e){st===null?st=[e]:st.push(e)}var Bm=jt.ReactCurrentBatchConfig;function va(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var a=n.stateNode}if(!a)throw Error(P(147,e));var i=a,r=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===r?t.ref:(t=function(o){var l=i.refs;o===null?delete l[r]:l[r]=o},t._stringRef=r,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function Ni(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jc(e){var t=e._init;return t(e._payload)}function jf(e){function t(g,m){if(e){var b=g.deletions;b===null?(g.deletions=[m],g.flags|=16):b.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function a(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=Qt(g,m),g.index=0,g.sibling=null,g}function r(g,m,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<m?(g.flags|=2,m):b):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,b,k){return m===null||m.tag!==6?(m=bo(b,g.mode,k),m.return=g,m):(m=i(m,b),m.return=g,m)}function s(g,m,b,k){var L=b.type;return L===In?u(g,m,b.props.children,k,b.key):m!==null&&(m.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===_t&&Jc(L)===m.type)?(k=i(m,b.props),k.ref=va(g,m,b),k.return=g,k):(k=Yi(b.type,b.key,b.props,null,g.mode,k),k.ref=va(g,m,b),k.return=g,k)}function c(g,m,b,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=vo(b,g.mode,k),m.return=g,m):(m=i(m,b.children||[]),m.return=g,m)}function u(g,m,b,k,L){return m===null||m.tag!==7?(m=pn(b,g.mode,k,L),m.return=g,m):(m=i(m,b),m.return=g,m)}function d(g,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=bo(""+m,g.mode,b),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yi:return b=Yi(m.type,m.key,m.props,null,g.mode,b),b.ref=va(g,null,m),b.return=g,b;case Wn:return m=vo(m,g.mode,b),m.return=g,m;case _t:var k=m._init;return d(g,k(m._payload),b)}if(Ca(m)||ha(m))return m=pn(m,g.mode,b,null),m.return=g,m;Ni(g,m)}return null}function h(g,m,b,k){var L=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return L!==null?null:l(g,m,""+b,k);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case yi:return b.key===L?s(g,m,b,k):null;case Wn:return b.key===L?c(g,m,b,k):null;case _t:return L=b._init,h(g,m,L(b._payload),k)}if(Ca(b)||ha(b))return L!==null?null:u(g,m,b,k,null);Ni(g,b)}return null}function p(g,m,b,k,L){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(b)||null,l(m,g,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case yi:return g=g.get(k.key===null?b:k.key)||null,s(m,g,k,L);case Wn:return g=g.get(k.key===null?b:k.key)||null,c(m,g,k,L);case _t:var A=k._init;return p(g,m,b,A(k._payload),L)}if(Ca(k)||ha(k))return g=g.get(b)||null,u(m,g,k,L,null);Ni(m,k)}return null}function x(g,m,b,k){for(var L=null,A=null,W=m,Z=m=0,_=null;W!==null&&Z<b.length;Z++){W.index>Z?(_=W,W=null):_=W.sibling;var j=h(g,W,b[Z],k);if(j===null){W===null&&(W=_);break}e&&W&&j.alternate===null&&t(g,W),m=r(j,m,Z),A===null?L=j:A.sibling=j,A=j,W=_}if(Z===b.length)return n(g,W),oe&&on(g,Z),L;if(W===null){for(;Z<b.length;Z++)W=d(g,b[Z],k),W!==null&&(m=r(W,m,Z),A===null?L=W:A.sibling=W,A=W);return oe&&on(g,Z),L}for(W=a(g,W);Z<b.length;Z++)_=p(W,g,Z,b[Z],k),_!==null&&(e&&_.alternate!==null&&W.delete(_.key===null?Z:_.key),m=r(_,m,Z),A===null?L=_:A.sibling=_,A=_);return e&&W.forEach(function(T){return t(g,T)}),oe&&on(g,Z),L}function w(g,m,b,k){var L=ha(b);if(typeof L!="function")throw Error(P(150));if(b=L.call(b),b==null)throw Error(P(151));for(var A=L=null,W=m,Z=m=0,_=null,j=b.next();W!==null&&!j.done;Z++,j=b.next()){W.index>Z?(_=W,W=null):_=W.sibling;var T=h(g,W,j.value,k);if(T===null){W===null&&(W=_);break}e&&W&&T.alternate===null&&t(g,W),m=r(T,m,Z),A===null?L=T:A.sibling=T,A=T,W=_}if(j.done)return n(g,W),oe&&on(g,Z),L;if(W===null){for(;!j.done;Z++,j=b.next())j=d(g,j.value,k),j!==null&&(m=r(j,m,Z),A===null?L=j:A.sibling=j,A=j);return oe&&on(g,Z),L}for(W=a(g,W);!j.done;Z++,j=b.next())j=p(W,g,Z,j.value,k),j!==null&&(e&&j.alternate!==null&&W.delete(j.key===null?Z:j.key),m=r(j,m,Z),A===null?L=j:A.sibling=j,A=j);return e&&W.forEach(function(D){return t(g,D)}),oe&&on(g,Z),L}function C(g,m,b,k){if(typeof b=="object"&&b!==null&&b.type===In&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case yi:e:{for(var L=b.key,A=m;A!==null;){if(A.key===L){if(L=b.type,L===In){if(A.tag===7){n(g,A.sibling),m=i(A,b.props.children),m.return=g,g=m;break e}}else if(A.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===_t&&Jc(L)===A.type){n(g,A.sibling),m=i(A,b.props),m.ref=va(g,A,b),m.return=g,g=m;break e}n(g,A);break}else t(g,A);A=A.sibling}b.type===In?(m=pn(b.props.children,g.mode,k,b.key),m.return=g,g=m):(k=Yi(b.type,b.key,b.props,null,g.mode,k),k.ref=va(g,m,b),k.return=g,g=k)}return o(g);case Wn:e:{for(A=b.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(g,m.sibling),m=i(m,b.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=vo(b,g.mode,k),m.return=g,g=m}return o(g);case _t:return A=b._init,C(g,m,A(b._payload),k)}if(Ca(b))return x(g,m,b,k);if(ha(b))return w(g,m,b,k);Ni(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,b),m.return=g,g=m):(n(g,m),m=bo(b,g.mode,k),m.return=g,g=m),o(g)):n(g,m)}return C}var ta=jf(!0),Tf=jf(!1),dr=an(null),fr=null,_n=null,us=null;function ds(){us=_n=fr=null}function fs(e){var t=dr.current;re(dr),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){fr=e,us=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(fr===null)throw Error(P(308));_n=e,fr.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var un=null;function ps(e){un===null?un=[e]:un.push(e)}function Df(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,ps(t)):(n.next=i.next,i.next=n),t.interleaved=n,Zt(e,a)}function Zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var zt=!1;function hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Vt(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,X&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Zt(e,n)}return i=a.interleaved,i===null?(t.next=t,ps(a)):(t.next=i.next,i.next=t),a.interleaved=t,Zt(e,n)}function Bi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ql(e,n)}}function Bc(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};r===null?i=r=o:r=r.next=o,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function pr(e,t,n,a){var i=e.updateQueue;zt=!1;var r=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,c=s.next;s.next=null,o===null?r=c:o.next=c,o=s;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==o&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(r!==null){var d=i.baseState;o=0,u=c=s=null,l=r;do{var h=l.lane,p=l.eventTime;if((a&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,w=l;switch(h=t,p=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ue({},d,h);break e;case 2:zt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=p,s=d):u=u.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(u===null&&(s=d),i.baseState=s,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else r===null&&(i.shared.lanes=0);yn|=o,e.lanes=o,e.memoizedState=d}}function Uc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(P(191,i));i.call(a)}}}var ui={},wt=an(ui),Qa=an(ui),qa=an(ui);function dn(e){if(e===ui)throw Error(P(174));return e}function gs(e,t){switch(ee(qa,t),ee(Qa,e),ee(wt,ui),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uo(t,e)}re(wt),ee(wt,t)}function na(){re(wt),re(Qa),re(qa)}function _f(e){dn(qa.current);var t=dn(wt.current),n=Uo(t,e.type);t!==n&&(ee(Qa,e),ee(wt,n))}function ms(e){Qa.current===e&&(re(wt),re(Qa))}var se=an(0);function hr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var fo=[];function ys(){for(var e=0;e<fo.length;e++)fo[e]._workInProgressVersionPrimary=null;fo.length=0}var Ui=jt.ReactCurrentDispatcher,po=jt.ReactCurrentBatchConfig,mn=0,ce=null,be=null,we=null,gr=!1,Ma=!1,ei=0,Um=0;function Pe(){throw Error(P(321))}function bs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function vs(e,t,n,a,i,r){if(mn=r,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ui.current=e===null||e.memoizedState===null?Xm:Ym,e=n(a,i),Ma){r=0;do{if(Ma=!1,ei=0,25<=r)throw Error(P(301));r+=1,we=be=null,t.updateQueue=null,Ui.current=Vm,e=n(a,i)}while(Ma)}if(Ui.current=mr,t=be!==null&&be.next!==null,mn=0,we=be=ce=null,gr=!1,t)throw Error(P(300));return e}function xs(){var e=ei!==0;return ei=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function at(){if(be===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=we===null?ce.memoizedState:we.next;if(t!==null)we=t,be=e;else{if(e===null)throw Error(P(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function ti(e,t){return typeof t=="function"?t(e):t}function ho(e){var t=at(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var a=be,i=a.baseQueue,r=n.pending;if(r!==null){if(i!==null){var o=i.next;i.next=r.next,r.next=o}a.baseQueue=i=r,n.pending=null}if(i!==null){r=i.next,a=a.baseState;var l=o=null,s=null,c=r;do{var u=c.lane;if((mn&u)===u)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),a=c.hasEagerState?c.eagerState:e(a,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(l=s=d,o=a):s=s.next=d,ce.lanes|=u,yn|=u}c=c.next}while(c!==null&&c!==r);s===null?o=a:s.next=l,ft(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=s,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do r=i.lane,ce.lanes|=r,yn|=r,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function go(e){var t=at(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do r=e(r,o.action),o=o.next;while(o!==i);ft(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function zf(){}function Jf(e,t){var n=ce,a=at(),i=t(),r=!ft(a.memoizedState,i);if(r&&(a.memoizedState=i,De=!0),a=a.queue,ws(Ff.bind(null,n,a,e),[e]),a.getSnapshot!==t||r||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ni(9,Uf.bind(null,n,a,i,t),void 0,null),Ae===null)throw Error(P(349));mn&30||Bf(n,t,i)}return i}function Bf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Uf(e,t,n,a){t.value=n,t.getSnapshot=a,Of(t)&&Gf(e)}function Ff(e,t,n){return n(function(){Of(t)&&Gf(e)})}function Of(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Gf(e){var t=Zt(e,1);t!==null&&dt(t,e,1,-1)}function Fc(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},t.queue=e,e=e.dispatch=Gm.bind(null,ce,e),[t.memoizedState,e]}function ni(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Xf(){return at().memoizedState}function Fi(e,t,n,a){var i=mt();ce.flags|=e,i.memoizedState=ni(1|t,n,void 0,a===void 0?null:a)}function Zr(e,t,n,a){var i=at();a=a===void 0?null:a;var r=void 0;if(be!==null){var o=be.memoizedState;if(r=o.destroy,a!==null&&bs(a,o.deps)){i.memoizedState=ni(t,n,r,a);return}}ce.flags|=e,i.memoizedState=ni(1|t,n,r,a)}function Oc(e,t){return Fi(8390656,8,e,t)}function ws(e,t){return Zr(2048,8,e,t)}function Yf(e,t){return Zr(4,2,e,t)}function Vf(e,t){return Zr(4,4,e,t)}function Kf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $f(e,t,n){return n=n!=null?n.concat([e]):null,Zr(4,4,Kf.bind(null,t,e),n)}function As(){}function Qf(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&bs(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function qf(e,t){var n=at();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&bs(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function ep(e,t,n){return mn&21?(ft(n,t)||(n=rf(),ce.lanes|=n,yn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function Fm(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var a=po.transition;po.transition={};try{e(!1),t()}finally{V=n,po.transition=a}}function tp(){return at().memoizedState}function Om(e,t,n){var a=$t(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},np(e))ap(t,n);else if(n=Df(e,t,n,a),n!==null){var i=Re();dt(n,e,a,i),ip(n,t,a)}}function Gm(e,t,n){var a=$t(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(np(e))ap(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var o=t.lastRenderedState,l=r(o,n);if(i.hasEagerState=!0,i.eagerState=l,ft(l,o)){var s=t.interleaved;s===null?(i.next=i,ps(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Df(e,t,i,a),n!==null&&(i=Re(),dt(n,e,a,i),ip(n,t,a))}}function np(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function ap(e,t){Ma=gr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ip(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ql(e,n)}}var mr={readContext:nt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Xm={readContext:nt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:Oc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fi(4194308,4,Kf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fi(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=mt();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Om.bind(null,ce,e),[a.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:Fc,useDebugValue:As,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=Fc(!1),t=e[0];return e=Fm.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=ce,i=mt();if(oe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ae===null)throw Error(P(349));mn&30||Bf(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,Oc(Ff.bind(null,a,r,e),[e]),a.flags|=2048,ni(9,Uf.bind(null,a,r,n,t),void 0,null),n},useId:function(){var e=mt(),t=Ae.identifierPrefix;if(oe){var n=Et,a=Nt;n=(a&~(1<<32-ut(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=ei++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Um++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ym={readContext:nt,useCallback:Qf,useContext:nt,useEffect:ws,useImperativeHandle:$f,useInsertionEffect:Yf,useLayoutEffect:Vf,useMemo:qf,useReducer:ho,useRef:Xf,useState:function(){return ho(ti)},useDebugValue:As,useDeferredValue:function(e){var t=at();return ep(t,be.memoizedState,e)},useTransition:function(){var e=ho(ti)[0],t=at().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:Jf,useId:tp,unstable_isNewReconciler:!1},Vm={readContext:nt,useCallback:Qf,useContext:nt,useEffect:ws,useImperativeHandle:$f,useInsertionEffect:Yf,useLayoutEffect:Vf,useMemo:qf,useReducer:go,useRef:Xf,useState:function(){return go(ti)},useDebugValue:As,useDeferredValue:function(e){var t=at();return be===null?t.memoizedState=e:ep(t,be.memoizedState,e)},useTransition:function(){var e=go(ti)[0],t=at().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:Jf,useId:tp,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ul(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mr={isMounted:function(e){return(e=e._reactInternals)?xn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Re(),i=$t(e),r=Wt(a,i);r.payload=t,n!=null&&(r.callback=n),t=Vt(e,r,i),t!==null&&(dt(t,e,i,a),Bi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Re(),i=$t(e),r=Wt(a,i);r.tag=1,r.payload=t,n!=null&&(r.callback=n),t=Vt(e,r,i),t!==null&&(dt(t,e,i,a),Bi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),a=$t(e),i=Wt(n,a);i.tag=2,t!=null&&(i.callback=t),t=Vt(e,i,a),t!==null&&(dt(t,e,a,n),Bi(t,e,a))}};function Gc(e,t,n,a,i,r,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,o):t.prototype&&t.prototype.isPureReactComponent?!Ya(n,a)||!Ya(i,r):!0}function rp(e,t,n){var a=!1,i=tn,r=t.contextType;return typeof r=="object"&&r!==null?r=nt(r):(i=_e(t)?hn:Ee.current,a=t.contextTypes,r=(a=a!=null)?qn(e,i):tn),t=new t(n,r),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Mr,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=r),t}function Xc(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Mr.enqueueReplaceState(t,t.state,null)}function dl(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},hs(e);var r=t.contextType;typeof r=="object"&&r!==null?i.context=nt(r):(r=_e(t)?hn:Ee.current,i.context=qn(e,r)),i.state=e.memoizedState,r=t.getDerivedStateFromProps,typeof r=="function"&&(ul(e,t,r,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Mr.enqueueReplaceState(i,i.state,null),pr(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function aa(e,t){try{var n="",a=t;do n+=kg(a),a=a.return;while(a);var i=n}catch(r){i=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:t,stack:i,digest:null}}function mo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Km=typeof WeakMap=="function"?WeakMap:Map;function op(e,t,n){n=Wt(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){br||(br=!0,wl=a),fl(e,t)},n}function lp(e,t,n){n=Wt(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){fl(e,t)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof a!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Yc(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Km;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=uy.bind(null,e,t,n),t.then(e,e))}function Vc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Kc(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Wt(-1,1),t.tag=2,Vt(n,t,1))),n.lanes|=1),e)}var $m=jt.ReactCurrentOwner,De=!1;function Ie(e,t,n,a){t.child=e===null?Tf(t,null,n,a):ta(t,e.child,n,a)}function $c(e,t,n,a,i){n=n.render;var r=t.ref;return Xn(t,i),a=vs(e,t,n,a,r,i),n=xs(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(oe&&n&&ls(t),t.flags|=1,Ie(e,t,a,i),t.child)}function Qc(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!Ws(r)&&r.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=r,sp(e,t,r,a,i)):(e=Yi(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!(e.lanes&i)){var o=r.memoizedProps;if(n=n.compare,n=n!==null?n:Ya,n(o,a)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=Qt(r,a),e.ref=t.ref,e.return=t,t.child=e}function sp(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(Ya(r,a)&&e.ref===t.ref)if(De=!1,t.pendingProps=a=r,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return pl(e,t,n,a,i)}function cp(e,t,n){var a=t.pendingProps,i=a.children,r=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Jn,Fe),Fe|=n;else{if(!(n&1073741824))return e=r!==null?r.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Jn,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=r!==null?r.baseLanes:n,ee(Jn,Fe),Fe|=a}else r!==null?(a=r.baseLanes|n,t.memoizedState=null):a=n,ee(Jn,Fe),Fe|=a;return Ie(e,t,i,n),t.child}function up(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function pl(e,t,n,a,i){var r=_e(n)?hn:Ee.current;return r=qn(t,r),Xn(t,i),n=vs(e,t,n,a,r,i),a=xs(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(oe&&a&&ls(t),t.flags|=1,Ie(e,t,n,i),t.child)}function qc(e,t,n,a,i){if(_e(n)){var r=!0;sr(t)}else r=!1;if(Xn(t,i),t.stateNode===null)Oi(e,t),rp(t,n,a),dl(t,n,a,i),a=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=_e(n)?hn:Ee.current,c=qn(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==a||s!==c)&&Xc(t,o,a,c),zt=!1;var h=t.memoizedState;o.state=h,pr(t,a,o,i),s=t.memoizedState,l!==a||h!==s||He.current||zt?(typeof u=="function"&&(ul(t,n,u,a),s=t.memoizedState),(l=zt||Gc(t,n,l,a,h,s,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=s),o.props=a,o.state=s,o.context=c,a=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Hf(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ot(t.type,l),o.props=c,d=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=nt(s):(s=_e(n)?hn:Ee.current,s=qn(t,s));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Xc(t,o,a,s),zt=!1,h=t.memoizedState,o.state=h,pr(t,a,o,i);var x=t.memoizedState;l!==d||h!==x||He.current||zt?(typeof p=="function"&&(ul(t,n,p,a),x=t.memoizedState),(c=zt||Gc(t,n,c,a,h,x,s)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,x,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=x),o.props=a,o.state=x,o.context=s,a=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return hl(e,t,n,a,r,i)}function hl(e,t,n,a,i,r){up(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&Hc(t,n,!1),Mt(e,t,r);a=t.stateNode,$m.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=ta(t,e.child,null,r),t.child=ta(t,null,l,r)):Ie(e,t,l,r),t.memoizedState=a.state,i&&Hc(t,n,!0),t.child}function dp(e){var t=e.stateNode;t.pendingContext?Dc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dc(e,t.context,!1),gs(e,t.containerInfo)}function eu(e,t,n,a,i){return ea(),cs(i),t.flags|=256,Ie(e,t,n,a),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function fp(e,t,n){var a=t.pendingProps,i=se.current,r=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(r=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(se,i&1),e===null)return sl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,r?(a=t.mode,r=t.child,o={mode:"hidden",children:o},!(a&1)&&r!==null?(r.childLanes=0,r.pendingProps=o):r=Dr(o,a,0,null),e=pn(e,a,n,null),r.return=t,e.return=t,r.sibling=e,t.child=r,t.child.memoizedState=ml(n),t.memoizedState=gl,e):ks(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Qm(e,t,o,a,l,i,n);if(r){r=a.fallback,o=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=s,t.deletions=null):(a=Qt(i,s),a.subtreeFlags=i.subtreeFlags&14680064),l!==null?r=Qt(l,r):(r=pn(r,o,n,null),r.flags|=2),r.return=t,a.return=t,a.sibling=r,t.child=a,a=r,r=t.child,o=e.child.memoizedState,o=o===null?ml(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},r.memoizedState=o,r.childLanes=e.childLanes&~n,t.memoizedState=gl,a}return r=e.child,e=r.sibling,a=Qt(r,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function ks(e,t){return t=Dr({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ei(e,t,n,a){return a!==null&&cs(a),ta(t,e.child,null,n),e=ks(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qm(e,t,n,a,i,r,o){if(n)return t.flags&256?(t.flags&=-257,a=mo(Error(P(422))),Ei(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(r=a.fallback,i=t.mode,a=Dr({mode:"visible",children:a.children},i,0,null),r=pn(r,i,o,null),r.flags|=2,a.return=t,r.return=t,a.sibling=r,t.child=a,t.mode&1&&ta(t,e.child,null,o),t.child.memoizedState=ml(o),t.memoizedState=gl,r);if(!(t.mode&1))return Ei(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var l=a.dgst;return a=l,r=Error(P(419)),a=mo(r,a,void 0),Ei(e,t,o,a)}if(l=(o&e.childLanes)!==0,De||l){if(a=Ae,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==r.retryLane&&(r.retryLane=i,Zt(e,i),dt(a,e,i,-1))}return Es(),a=mo(Error(P(421))),Ei(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dy.bind(null,e),i._reactRetry=t,null):(e=r.treeContext,Oe=Yt(i.nextSibling),Ge=t,oe=!0,st=null,e!==null&&(Ke[$e++]=Nt,Ke[$e++]=Et,Ke[$e++]=gn,Nt=e.id,Et=e.overflow,gn=t),t=ks(t,a.children),t.flags|=4096,t)}function tu(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),cl(e.return,t,n)}function yo(e,t,n,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=i)}function pp(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;if(Ie(e,t,a.children,n),a=se.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tu(e,n,t);else if(e.tag===19)tu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(ee(se,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&hr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),yo(t,!1,i,n,r);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&hr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}yo(t,!0,n,null,r);break;case"together":yo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Oi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),yn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qm(e,t,n){switch(t.tag){case 3:dp(t),ea();break;case 5:_f(t);break;case 1:_e(t.type)&&sr(t);break;case 4:gs(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;ee(dr,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?fp(e,t,n):(ee(se,se.current&1),e=Mt(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return pp(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),a)break;return null;case 22:case 23:return t.lanes=0,cp(e,t,n)}return Mt(e,t,n)}var hp,yl,gp,mp;hp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};gp=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,dn(wt.current);var r=null;switch(n){case"input":i=_o(e,i),a=_o(e,a),r=[];break;case"select":i=ue({},i,{value:void 0}),a=ue({},a,{value:void 0}),r=[];break;case"textarea":i=Bo(e,i),a=Bo(e,a),r=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=or)}Fo(n,a);var o;n=null;for(c in i)if(!a.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ja.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in a){var s=a[c];if(l=i!=null?i[c]:void 0,a.hasOwnProperty(c)&&s!==l&&(s!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(r||(r=[]),r.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(r=r||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(r=r||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&ie("scroll",e),r||l===s||(r=[])):(r=r||[]).push(c,s))}n&&(r=r||[]).push("style",n);var c=r;(t.updateQueue=c)&&(t.flags|=4)}};mp=function(e,t,n,a){n!==a&&(t.flags|=4)};function xa(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ey(e,t,n){var a=t.pendingProps;switch(ss(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return _e(t.type)&&lr(),Le(t),null;case 3:return a=t.stateNode,na(),re(He),re(Ee),ys(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,st!==null&&(Sl(st),st=null))),yl(e,t),Le(t),null;case 5:ms(t);var i=dn(qa.current);if(n=t.type,e!==null&&t.stateNode!=null)gp(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(P(166));return Le(t),null}if(e=dn(wt.current),Li(t)){a=t.stateNode,n=t.type;var r=t.memoizedProps;switch(a[bt]=t,a[$a]=r,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",a),ie("close",a);break;case"iframe":case"object":case"embed":ie("load",a);break;case"video":case"audio":for(i=0;i<La.length;i++)ie(La[i],a);break;case"source":ie("error",a);break;case"img":case"image":case"link":ie("error",a),ie("load",a);break;case"details":ie("toggle",a);break;case"input":uc(a,r),ie("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!r.multiple},ie("invalid",a);break;case"textarea":fc(a,r),ie("invalid",a)}Fo(n,r),i=null;for(var o in r)if(r.hasOwnProperty(o)){var l=r[o];o==="children"?typeof l=="string"?a.textContent!==l&&(r.suppressHydrationWarning!==!0&&Pi(a.textContent,l,e),i=["children",l]):typeof l=="number"&&a.textContent!==""+l&&(r.suppressHydrationWarning!==!0&&Pi(a.textContent,l,e),i=["children",""+l]):Ja.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",a)}switch(n){case"input":bi(a),dc(a,r,!0);break;case"textarea":bi(a),pc(a);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(a.onclick=or)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ud(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[bt]=t,e[$a]=a,hp(e,t,!1,!1),t.stateNode=e;e:{switch(o=Oo(n,a),n){case"dialog":ie("cancel",e),ie("close",e),i=a;break;case"iframe":case"object":case"embed":ie("load",e),i=a;break;case"video":case"audio":for(i=0;i<La.length;i++)ie(La[i],e);i=a;break;case"source":ie("error",e),i=a;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=a;break;case"details":ie("toggle",e),i=a;break;case"input":uc(e,a),i=_o(e,a),ie("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=ue({},a,{value:void 0}),ie("invalid",e);break;case"textarea":fc(e,a),i=Bo(e,a),ie("invalid",e);break;default:i=a}Fo(n,i),l=i;for(r in l)if(l.hasOwnProperty(r)){var s=l[r];r==="style"?Gd(e,s):r==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Fd(e,s)):r==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Ba(e,s):typeof s=="number"&&Ba(e,""+s):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&(Ja.hasOwnProperty(r)?s!=null&&r==="onScroll"&&ie("scroll",e):s!=null&&Xl(e,r,s,o))}switch(n){case"input":bi(e),dc(e,a,!1);break;case"textarea":bi(e),pc(e);break;case"option":a.value!=null&&e.setAttribute("value",""+en(a.value));break;case"select":e.multiple=!!a.multiple,r=a.value,r!=null?Un(e,!!a.multiple,r,!1):a.defaultValue!=null&&Un(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=or)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)mp(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(P(166));if(n=dn(qa.current),dn(wt.current),Li(t)){if(a=t.stateNode,n=t.memoizedProps,a[bt]=t,(r=a.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Pi(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pi(a.nodeValue,n,(e.mode&1)!==0)}r&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[bt]=t,t.stateNode=a}return Le(t),null;case 13:if(re(se),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Oe!==null&&t.mode&1&&!(t.flags&128))Mf(),ea(),t.flags|=98560,r=!1;else if(r=Li(t),a!==null&&a.dehydrated!==null){if(e===null){if(!r)throw Error(P(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(P(317));r[bt]=t}else ea(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Le(t),r=!1}else st!==null&&(Sl(st),st=null),r=!0;if(!r)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):Es())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return na(),yl(e,t),e===null&&Va(t.stateNode.containerInfo),Le(t),null;case 10:return fs(t.type._context),Le(t),null;case 17:return _e(t.type)&&lr(),Le(t),null;case 19:if(re(se),r=t.memoizedState,r===null)return Le(t),null;if(a=(t.flags&128)!==0,o=r.rendering,o===null)if(a)xa(r,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=hr(e),o!==null){for(t.flags|=128,xa(r,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)r=n,e=a,r.flags&=14680066,o=r.alternate,o===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,e=o.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}r.tail!==null&&pe()>ia&&(t.flags|=128,a=!0,xa(r,!1),t.lanes=4194304)}else{if(!a)if(e=hr(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xa(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!oe)return Le(t),null}else 2*pe()-r.renderingStartTime>ia&&n!==1073741824&&(t.flags|=128,a=!0,xa(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(n=r.last,n!==null?n.sibling=o:t.child=o,r.last=o)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=pe(),t.sibling=null,n=se.current,ee(se,a?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Ns(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?Fe&1073741824&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function ty(e,t){switch(ss(t),t.tag){case 1:return _e(t.type)&&lr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(),re(He),re(Ee),ys(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));ea()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return na(),null;case 10:return fs(t.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Wi=!1,Ne=!1,ny=typeof WeakSet=="function"?WeakSet:Set,M=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){de(e,t,a)}else n.current=null}function yp(e,t,n){try{n()}catch(a){de(e,t,a)}}var nu=!1;function ay(e,t){if(tl=ar,e=wf(),os(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var o=0,l=-1,s=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==r||a!==0&&d.nodeType!==3||(s=o+a),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break t;if(h===n&&++c===i&&(l=o),h===r&&++u===a&&(s=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(nl={focusedElem:e,selectionRange:n},ar=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,C=x.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?w:ot(t.type,w),C);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){de(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=nu,nu=!1,x}function ja(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var r=i.destroy;i.destroy=void 0,r!==void 0&&yp(t,n,r)}i=i.next}while(i!==a)}}function jr(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function bl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function bp(e){var t=e.alternate;t!==null&&(e.alternate=null,bp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[bt],delete t[$a],delete t[rl],delete t[_m],delete t[zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vp(e){return e.tag===5||e.tag===3||e.tag===4}function au(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=or));else if(a!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function xl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(xl(e,t,n),e=e.sibling;e!==null;)xl(e,t,n),e=e.sibling}var ke=null,lt=!1;function Dt(e,t,n){for(n=n.child;n!==null;)xp(e,t,n),n=n.sibling}function xp(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Lr,n)}catch{}switch(n.tag){case 5:Ne||zn(n,t);case 6:var a=ke,i=lt;ke=null,Dt(e,t,n),ke=a,lt=i,ke!==null&&(lt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(lt?(e=ke,n=n.stateNode,e.nodeType===8?co(e.parentNode,n):e.nodeType===1&&co(e,n),Ga(e)):co(ke,n.stateNode));break;case 4:a=ke,i=lt,ke=n.stateNode.containerInfo,lt=!0,Dt(e,t,n),ke=a,lt=i;break;case 0:case 11:case 14:case 15:if(!Ne&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var r=i,o=r.destroy;r=r.tag,o!==void 0&&(r&2||r&4)&&yp(n,t,o),i=i.next}while(i!==a)}Dt(e,t,n);break;case 1:if(!Ne&&(zn(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(l){de(n,t,l)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ne=(a=Ne)||n.memoizedState!==null,Dt(e,t,n),Ne=a):Dt(e,t,n);break;default:Dt(e,t,n)}}function iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ny),t.forEach(function(a){var i=fy.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function rt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var r=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,lt=!1;break e;case 3:ke=l.stateNode.containerInfo,lt=!0;break e;case 4:ke=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(ke===null)throw Error(P(160));xp(r,o,i),ke=null,lt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(c){de(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wp(t,e),t=t.sibling}function wp(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(rt(t,e),gt(e),a&4){try{ja(3,e,e.return),jr(3,e)}catch(w){de(e,e.return,w)}try{ja(5,e,e.return)}catch(w){de(e,e.return,w)}}break;case 1:rt(t,e),gt(e),a&512&&n!==null&&zn(n,n.return);break;case 5:if(rt(t,e),gt(e),a&512&&n!==null&&zn(n,n.return),e.flags&32){var i=e.stateNode;try{Ba(i,"")}catch(w){de(e,e.return,w)}}if(a&4&&(i=e.stateNode,i!=null)){var r=e.memoizedProps,o=n!==null?n.memoizedProps:r,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&r.type==="radio"&&r.name!=null&&Jd(i,r),Oo(l,o);var c=Oo(l,r);for(o=0;o<s.length;o+=2){var u=s[o],d=s[o+1];u==="style"?Gd(i,d):u==="dangerouslySetInnerHTML"?Fd(i,d):u==="children"?Ba(i,d):Xl(i,u,d,c)}switch(l){case"input":zo(i,r);break;case"textarea":Bd(i,r);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!r.multiple;var p=r.value;p!=null?Un(i,!!r.multiple,p,!1):h!==!!r.multiple&&(r.defaultValue!=null?Un(i,!!r.multiple,r.defaultValue,!0):Un(i,!!r.multiple,r.multiple?[]:"",!1))}i[$a]=r}catch(w){de(e,e.return,w)}}break;case 6:if(rt(t,e),gt(e),a&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,r=e.memoizedProps;try{i.nodeValue=r}catch(w){de(e,e.return,w)}}break;case 3:if(rt(t,e),gt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ga(t.containerInfo)}catch(w){de(e,e.return,w)}break;case 4:rt(t,e),gt(e);break;case 13:rt(t,e),gt(e),i=e.child,i.flags&8192&&(r=i.memoizedState!==null,i.stateNode.isHidden=r,!r||i.alternate!==null&&i.alternate.memoizedState!==null||(Ps=pe())),a&4&&iu(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(c=Ne)||u,rt(t,e),Ne=c):rt(t,e),gt(e),a&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(M=e,u=e.child;u!==null;){for(d=M=u;M!==null;){switch(h=M,p=h.child,h.tag){case 0:case 11:case 14:case 15:ja(4,h,h.return);break;case 1:zn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){a=h,n=h.return;try{t=a,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){de(a,n,w)}}break;case 5:zn(h,h.return);break;case 22:if(h.memoizedState!==null){ou(d);continue}}p!==null?(p.return=h,M=p):ou(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Od("display",o))}catch(w){de(e,e.return,w)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(w){de(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:rt(t,e),gt(e),a&4&&iu(e);break;case 21:break;default:rt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vp(n)){var a=n;break e}n=n.return}throw Error(P(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(Ba(i,""),a.flags&=-33);var r=au(e);xl(e,r,i);break;case 3:case 4:var o=a.stateNode.containerInfo,l=au(e);vl(e,l,o);break;default:throw Error(P(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function iy(e,t,n){M=e,Ap(e)}function Ap(e,t,n){for(var a=(e.mode&1)!==0;M!==null;){var i=M,r=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Wi;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ne;l=Wi;var c=Ne;if(Wi=o,(Ne=s)&&!c)for(M=i;M!==null;)o=M,s=o.child,o.tag===22&&o.memoizedState!==null?lu(i):s!==null?(s.return=o,M=s):lu(i);for(;r!==null;)M=r,Ap(r),r=r.sibling;M=i,Wi=l,Ne=c}ru(e)}else i.subtreeFlags&8772&&r!==null?(r.return=i,M=r):ru(e)}}function ru(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ne||jr(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!Ne)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var r=t.updateQueue;r!==null&&Uc(t,r,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Uc(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ga(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ne||t.flags&512&&bl(t)}catch(h){de(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function ou(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function lu(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{jr(4,t)}catch(s){de(t,n,s)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(s){de(t,i,s)}}var r=t.return;try{bl(t)}catch(s){de(t,r,s)}break;case 5:var o=t.return;try{bl(t)}catch(s){de(t,o,s)}}}catch(s){de(t,t.return,s)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var ry=Math.ceil,yr=jt.ReactCurrentDispatcher,Ss=jt.ReactCurrentOwner,et=jt.ReactCurrentBatchConfig,X=0,Ae=null,me=null,Se=0,Fe=0,Jn=an(0),ve=0,ai=null,yn=0,Tr=0,Cs=0,Ta=null,Te=null,Ps=0,ia=1/0,Pt=null,br=!1,wl=null,Kt=null,Ii=!1,Ft=null,vr=0,Da=0,Al=null,Gi=-1,Xi=0;function Re(){return X&6?pe():Gi!==-1?Gi:Gi=pe()}function $t(e){return e.mode&1?X&2&&Se!==0?Se&-Se:Bm.transition!==null?(Xi===0&&(Xi=rf()),Xi):(e=V,e!==0||(e=window.event,e=e===void 0?16:ff(e.type)),e):1}function dt(e,t,n,a){if(50<Da)throw Da=0,Al=null,Error(P(185));li(e,n,a),(!(X&2)||e!==Ae)&&(e===Ae&&(!(X&2)&&(Tr|=n),ve===4&&Bt(e,Se)),ze(e,a),n===1&&X===0&&!(t.mode&1)&&(ia=pe()+500,Rr&&rn()))}function ze(e,t){var n=e.callbackNode;Bg(e,t);var a=nr(e,e===Ae?Se:0);if(a===0)n!==null&&mc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&mc(n),t===1)e.tag===0?Jm(su.bind(null,e)):If(su.bind(null,e)),Dm(function(){!(X&6)&&rn()}),n=null;else{switch(of(a)){case 1:n=Ql;break;case 4:n=nf;break;case 16:n=tr;break;case 536870912:n=af;break;default:n=tr}n=Wp(n,kp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function kp(e,t){if(Gi=-1,Xi=0,X&6)throw Error(P(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var a=nr(e,e===Ae?Se:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=xr(e,a);else{t=a;var i=X;X|=2;var r=Cp();(Ae!==e||Se!==t)&&(Pt=null,ia=pe()+500,fn(e,t));do try{sy();break}catch(l){Sp(e,l)}while(!0);ds(),yr.current=r,X=i,me!==null?t=0:(Ae=null,Se=0,t=ve)}if(t!==0){if(t===2&&(i=Ko(e),i!==0&&(a=i,t=kl(e,i))),t===1)throw n=ai,fn(e,0),Bt(e,a),ze(e,pe()),n;if(t===6)Bt(e,a);else{if(i=e.current.alternate,!(a&30)&&!oy(i)&&(t=xr(e,a),t===2&&(r=Ko(e),r!==0&&(a=r,t=kl(e,r))),t===1))throw n=ai,fn(e,0),Bt(e,a),ze(e,pe()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(P(345));case 2:ln(e,Te,Pt);break;case 3:if(Bt(e,a),(a&130023424)===a&&(t=Ps+500-pe(),10<t)){if(nr(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=il(ln.bind(null,e,Te,Pt),t);break}ln(e,Te,Pt);break;case 4:if(Bt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-ut(a);r=1<<o,o=t[o],o>i&&(i=o),a&=~r}if(a=i,a=pe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*ry(a/1960))-a,10<a){e.timeoutHandle=il(ln.bind(null,e,Te,Pt),a);break}ln(e,Te,Pt);break;case 5:ln(e,Te,Pt);break;default:throw Error(P(329))}}}return ze(e,pe()),e.callbackNode===n?kp.bind(null,e):null}function kl(e,t){var n=Ta;return e.current.memoizedState.isDehydrated&&(fn(e,t).flags|=256),e=xr(e,t),e!==2&&(t=Te,Te=n,t!==null&&Sl(t)),e}function Sl(e){Te===null?Te=e:Te.push.apply(Te,e)}function oy(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ft(r(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~Cs,t&=~Tr,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ut(t),a=1<<n;e[n]=-1,t&=~a}}function su(e){if(X&6)throw Error(P(327));Yn();var t=nr(e,0);if(!(t&1))return ze(e,pe()),null;var n=xr(e,t);if(e.tag!==0&&n===2){var a=Ko(e);a!==0&&(t=a,n=kl(e,a))}if(n===1)throw n=ai,fn(e,0),Bt(e,t),ze(e,pe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ln(e,Te,Pt),ze(e,pe()),null}function Ls(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(ia=pe()+500,Rr&&rn())}}function bn(e){Ft!==null&&Ft.tag===0&&!(X&6)&&Yn();var t=X;X|=1;var n=et.transition,a=V;try{if(et.transition=null,V=1,e)return e()}finally{V=a,et.transition=n,X=t,!(X&6)&&rn()}}function Ns(){Fe=Jn.current,re(Jn)}function fn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Tm(n)),me!==null)for(n=me.return;n!==null;){var a=n;switch(ss(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&lr();break;case 3:na(),re(He),re(Ee),ys();break;case 5:ms(a);break;case 4:na();break;case 13:re(se);break;case 19:re(se);break;case 10:fs(a.type._context);break;case 22:case 23:Ns()}n=n.return}if(Ae=e,me=e=Qt(e.current,null),Se=Fe=t,ve=0,ai=null,Cs=Tr=yn=0,Te=Ta=null,un!==null){for(t=0;t<un.length;t++)if(n=un[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,r=n.pending;if(r!==null){var o=r.next;r.next=i,a.next=o}n.pending=a}un=null}return e}function Sp(e,t){do{var n=me;try{if(ds(),Ui.current=mr,gr){for(var a=ce.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}gr=!1}if(mn=0,we=be=ce=null,Ma=!1,ei=0,Ss.current=null,n===null||n.return===null){ve=1,ai=t,me=null;break}e:{var r=e,o=n.return,l=n,s=t;if(t=Se,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,u=l,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Vc(o);if(p!==null){p.flags&=-257,Kc(p,o,l,r,t),p.mode&1&&Yc(r,c,t),t=p,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if(!(t&1)){Yc(r,c,t),Es();break e}s=Error(P(426))}}else if(oe&&l.mode&1){var C=Vc(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Kc(C,o,l,r,t),cs(aa(s,l));break e}}r=s=aa(s,l),ve!==4&&(ve=2),Ta===null?Ta=[r]:Ta.push(r),r=o;do{switch(r.tag){case 3:r.flags|=65536,t&=-t,r.lanes|=t;var g=op(r,s,t);Bc(r,g);break e;case 1:l=s;var m=r.type,b=r.stateNode;if(!(r.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kt===null||!Kt.has(b)))){r.flags|=65536,t&=-t,r.lanes|=t;var k=lp(r,l,t);Bc(r,k);break e}}r=r.return}while(r!==null)}Lp(n)}catch(L){t=L,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Cp(){var e=yr.current;return yr.current=mr,e===null?mr:e}function Es(){(ve===0||ve===3||ve===2)&&(ve=4),Ae===null||!(yn&268435455)&&!(Tr&268435455)||Bt(Ae,Se)}function xr(e,t){var n=X;X|=2;var a=Cp();(Ae!==e||Se!==t)&&(Pt=null,fn(e,t));do try{ly();break}catch(i){Sp(e,i)}while(!0);if(ds(),X=n,yr.current=a,me!==null)throw Error(P(261));return Ae=null,Se=0,ve}function ly(){for(;me!==null;)Pp(me)}function sy(){for(;me!==null&&!Zg();)Pp(me)}function Pp(e){var t=Ep(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Lp(e):me=t,Ss.current=null}function Lp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ty(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(n=ey(n,t,Fe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ve===0&&(ve=5)}function ln(e,t,n){var a=V,i=et.transition;try{et.transition=null,V=1,cy(e,t,n,a)}finally{et.transition=i,V=a}return null}function cy(e,t,n,a){do Yn();while(Ft!==null);if(X&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var r=n.lanes|n.childLanes;if(Ug(e,r),e===Ae&&(me=Ae=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ii||(Ii=!0,Wp(tr,function(){return Yn(),null})),r=(n.flags&15990)!==0,n.subtreeFlags&15990||r){r=et.transition,et.transition=null;var o=V;V=1;var l=X;X|=4,Ss.current=null,ay(e,n),wp(n,e),Em(nl),ar=!!tl,nl=tl=null,e.current=n,iy(n),Mg(),X=l,V=o,et.transition=r}else e.current=n;if(Ii&&(Ii=!1,Ft=e,vr=i),r=e.pendingLanes,r===0&&(Kt=null),Dg(n.stateNode),ze(e,pe()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(br)throw br=!1,e=wl,wl=null,e;return vr&1&&e.tag!==0&&Yn(),r=e.pendingLanes,r&1?e===Al?Da++:(Da=0,Al=e):Da=0,rn(),null}function Yn(){if(Ft!==null){var e=of(vr),t=et.transition,n=V;try{if(et.transition=null,V=16>e?16:e,Ft===null)var a=!1;else{if(e=Ft,Ft=null,vr=0,X&6)throw Error(P(331));var i=X;for(X|=4,M=e.current;M!==null;){var r=M,o=r.child;if(M.flags&16){var l=r.deletions;if(l!==null){for(var s=0;s<l.length;s++){var c=l[s];for(M=c;M!==null;){var u=M;switch(u.tag){case 0:case 11:case 15:ja(8,u,r)}var d=u.child;if(d!==null)d.return=u,M=d;else for(;M!==null;){u=M;var h=u.sibling,p=u.return;if(bp(u),u===c){M=null;break}if(h!==null){h.return=p,M=h;break}M=p}}}var x=r.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}M=r}}if(r.subtreeFlags&2064&&o!==null)o.return=r,M=o;else e:for(;M!==null;){if(r=M,r.flags&2048)switch(r.tag){case 0:case 11:case 15:ja(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,M=g;break e}M=r.return}}var m=e.current;for(M=m;M!==null;){o=M;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,M=b;else e:for(o=m;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:jr(9,l)}}catch(L){de(l,l.return,L)}if(l===o){M=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,M=k;break e}M=l.return}}if(X=i,rn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Lr,e)}catch{}a=!0}return a}finally{V=n,et.transition=t}}return!1}function cu(e,t,n){t=aa(n,t),t=op(e,t,1),e=Vt(e,t,1),t=Re(),e!==null&&(li(e,1,t),ze(e,t))}function de(e,t,n){if(e.tag===3)cu(e,e,n);else for(;t!==null;){if(t.tag===3){cu(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Kt===null||!Kt.has(a))){e=aa(n,e),e=lp(t,e,1),t=Vt(t,e,1),e=Re(),t!==null&&(li(t,1,e),ze(t,e));break}}t=t.return}}function uy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&(Se&n)===n&&(ve===4||ve===3&&(Se&130023424)===Se&&500>pe()-Ps?fn(e,0):Cs|=n),ze(e,t)}function Np(e,t){t===0&&(e.mode&1?(t=wi,wi<<=1,!(wi&130023424)&&(wi=4194304)):t=1);var n=Re();e=Zt(e,t),e!==null&&(li(e,t,n),ze(e,n))}function dy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Np(e,n)}function fy(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(P(314))}a!==null&&a.delete(t),Np(e,n)}var Ep;Ep=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,qm(e,t,n);De=!!(e.flags&131072)}else De=!1,oe&&t.flags&1048576&&Rf(t,ur,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Oi(e,t),e=t.pendingProps;var i=qn(t,Ee.current);Xn(t,n),i=vs(null,t,a,e,i,n);var r=xs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,_e(a)?(r=!0,sr(t)):r=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hs(t),i.updater=Mr,t.stateNode=i,i._reactInternals=t,dl(t,a,e,n),t=hl(null,t,a,!0,r,n)):(t.tag=0,oe&&r&&ls(t),Ie(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(Oi(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=hy(a),e=ot(a,e),i){case 0:t=pl(null,t,a,e,n);break e;case 1:t=qc(null,t,a,e,n);break e;case 11:t=$c(null,t,a,e,n);break e;case 14:t=Qc(null,t,a,ot(a.type,e),n);break e}throw Error(P(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ot(a,i),pl(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ot(a,i),qc(e,t,a,i,n);case 3:e:{if(dp(t),e===null)throw Error(P(387));a=t.pendingProps,r=t.memoizedState,i=r.element,Hf(e,t),pr(t,a,null,n);var o=t.memoizedState;if(a=o.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){i=aa(Error(P(423)),t),t=eu(e,t,a,n,i);break e}else if(a!==i){i=aa(Error(P(424)),t),t=eu(e,t,a,n,i);break e}else for(Oe=Yt(t.stateNode.containerInfo.firstChild),Ge=t,oe=!0,st=null,n=Tf(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ea(),a===i){t=Mt(e,t,n);break e}Ie(e,t,a,n)}t=t.child}return t;case 5:return _f(t),e===null&&sl(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,o=i.children,al(a,i)?o=null:r!==null&&al(a,r)&&(t.flags|=32),up(e,t),Ie(e,t,o,n),t.child;case 6:return e===null&&sl(t),null;case 13:return fp(e,t,n);case 4:return gs(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ta(t,null,a,n):Ie(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ot(a,i),$c(e,t,a,i,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,r=t.memoizedProps,o=i.value,ee(dr,a._currentValue),a._currentValue=o,r!==null)if(ft(r.value,o)){if(r.children===i.children&&!He.current){t=Mt(e,t,n);break e}}else for(r=t.child,r!==null&&(r.return=t);r!==null;){var l=r.dependencies;if(l!==null){o=r.child;for(var s=l.firstContext;s!==null;){if(s.context===a){if(r.tag===1){s=Wt(-1,n&-n),s.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?s.next=s:(s.next=u.next,u.next=s),c.pending=s}}r.lanes|=n,s=r.alternate,s!==null&&(s.lanes|=n),cl(r.return,n,t),l.lanes|=n;break}s=s.next}}else if(r.tag===10)o=r.type===t.type?null:r.child;else if(r.tag===18){if(o=r.return,o===null)throw Error(P(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),cl(o,n,t),o=r.sibling}else o=r.child;if(o!==null)o.return=r;else for(o=r;o!==null;){if(o===t){o=null;break}if(r=o.sibling,r!==null){r.return=o.return,o=r;break}o=o.return}r=o}Ie(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,Xn(t,n),i=nt(i),a=a(i),t.flags|=1,Ie(e,t,a,n),t.child;case 14:return a=t.type,i=ot(a,t.pendingProps),i=ot(a.type,i),Qc(e,t,a,i,n);case 15:return sp(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ot(a,i),Oi(e,t),t.tag=1,_e(a)?(e=!0,sr(t)):e=!1,Xn(t,n),rp(t,a,i),dl(t,a,i,n),hl(null,t,a,!0,e,n);case 19:return pp(e,t,n);case 22:return cp(e,t,n)}throw Error(P(156,t.tag))};function Wp(e,t){return tf(e,t)}function py(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,a){return new py(e,t,n,a)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hy(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vl)return 11;if(e===Kl)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Yi(e,t,n,a,i,r){var o=2;if(a=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case In:return pn(n.children,i,r,t);case Yl:o=8,i|=8;break;case jo:return e=qe(12,n,t,i|2),e.elementType=jo,e.lanes=r,e;case To:return e=qe(13,n,t,i),e.elementType=To,e.lanes=r,e;case Do:return e=qe(19,n,t,i),e.elementType=Do,e.lanes=r,e;case Hd:return Dr(n,i,r,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Td:o=10;break e;case Dd:o=9;break e;case Vl:o=11;break e;case Kl:o=14;break e;case _t:o=16,a=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=qe(o,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function pn(e,t,n,a){return e=qe(7,e,a,t),e.lanes=n,e}function Dr(e,t,n,a){return e=qe(22,e,a,t),e.elementType=Hd,e.lanes=n,e.stateNode={isHidden:!1},e}function bo(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function vo(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gy(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qr(0),this.expirationTimes=Qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qr(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Is(e,t,n,a,i,r,o,l,s){return e=new gy(e,t,n,l,s),t===1?(t=1,r===!0&&(t|=8)):t=0,r=qe(3,null,null,t),e.current=r,r.stateNode=e,r.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hs(r),e}function my(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Ip(e){if(!e)return tn;e=e._reactInternals;e:{if(xn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(_e(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(_e(n))return Wf(e,n,t)}return t}function Rp(e,t,n,a,i,r,o,l,s){return e=Is(n,a,!0,e,i,r,o,l,s),e.context=Ip(null),n=e.current,a=Re(),i=$t(n),r=Wt(a,i),r.callback=t??null,Vt(n,r,i),e.current.lanes=i,li(e,i,a),ze(e,a),e}function Hr(e,t,n,a){var i=t.current,r=Re(),o=$t(i);return n=Ip(n),t.context===null?t.context=n:t.pendingContext=n,t=Wt(r,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Vt(i,t,o),e!==null&&(dt(e,i,o,r),Bi(e,i,o)),o}function wr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rs(e,t){uu(e,t),(e=e.alternate)&&uu(e,t)}function yy(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zs(e){this._internalRoot=e}_r.prototype.render=Zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Hr(e,t,null,null)};_r.prototype.unmount=Zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;bn(function(){Hr(null,e,null,null)}),t[Rt]=null}};function _r(e){this._internalRoot=e}_r.prototype.unstable_scheduleHydration=function(e){if(e){var t=cf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&df(e)}};function Ms(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function du(){}function by(e,t,n,a,i){if(i){if(typeof a=="function"){var r=a;a=function(){var c=wr(o);r.call(c)}}var o=Rp(t,a,e,0,null,!1,!1,"",du);return e._reactRootContainer=o,e[Rt]=o.current,Va(e.nodeType===8?e.parentNode:e),bn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var l=a;a=function(){var c=wr(s);l.call(c)}}var s=Is(e,0,!1,null,null,!1,!1,"",du);return e._reactRootContainer=s,e[Rt]=s.current,Va(e.nodeType===8?e.parentNode:e),bn(function(){Hr(t,s,n,a)}),s}function Jr(e,t,n,a,i){var r=n._reactRootContainer;if(r){var o=r;if(typeof i=="function"){var l=i;i=function(){var s=wr(o);l.call(s)}}Hr(t,o,e,i)}else o=by(n,t,e,i,a);return wr(o)}lf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Pa(t.pendingLanes);n!==0&&(ql(t,n|1),ze(t,pe()),!(X&6)&&(ia=pe()+500,rn()))}break;case 13:bn(function(){var a=Zt(e,1);if(a!==null){var i=Re();dt(a,e,1,i)}}),Rs(e,1)}};es=function(e){if(e.tag===13){var t=Zt(e,134217728);if(t!==null){var n=Re();dt(t,e,134217728,n)}Rs(e,134217728)}};sf=function(e){if(e.tag===13){var t=$t(e),n=Zt(e,t);if(n!==null){var a=Re();dt(n,e,t,a)}Rs(e,t)}};cf=function(){return V};uf=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Xo=function(e,t,n){switch(t){case"input":if(zo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=Ir(a);if(!i)throw Error(P(90));zd(a),zo(a,i)}}}break;case"textarea":Bd(e,n);break;case"select":t=n.value,t!=null&&Un(e,!!n.multiple,t,!1)}};Vd=Ls;Kd=bn;var vy={usingClientEntryPoint:!1,Events:[ci,jn,Ir,Xd,Yd,Ls]},wa={findFiberByHostInstance:cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qd(e),e===null?null:e.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ri=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ri.isDisabled&&Ri.supportsFiber)try{Lr=Ri.inject(xy),xt=Ri}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ms(t))throw Error(P(200));return my(e,t,null,n)};Ye.createRoot=function(e,t){if(!Ms(e))throw Error(P(299));var n=!1,a="",i=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Is(e,1,!1,null,null,n,!1,a,i),e[Rt]=t.current,Va(e.nodeType===8?e.parentNode:e),new Zs(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=qd(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return bn(e)};Ye.hydrate=function(e,t,n){if(!zr(t))throw Error(P(200));return Jr(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!Ms(e))throw Error(P(405));var a=n!=null&&n.hydratedSources||null,i=!1,r="",o=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Rp(t,null,e,1,n??null,i,!1,r,o),e[Rt]=t.current,Va(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _r(t)};Ye.render=function(e,t,n){if(!zr(t))throw Error(P(200));return Jr(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!zr(e))throw Error(P(40));return e._reactRootContainer?(bn(function(){Jr(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};Ye.unstable_batchedUpdates=Ls;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!zr(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Jr(e,t,n,!1,a)};Ye.version="18.3.1-next-f1338f8080-20240426";function Mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mp)}catch(e){console.error(e)}}Mp(),Rd.exports=Ye;var jp=Rd.exports,fu=jp;Zo.createRoot=fu.createRoot,Zo.hydrateRoot=fu.hydrateRoot;/**
* @remix-run/router v1.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Cl.apply(this,arguments)}var Ar;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ar||(Ar={}));function xe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function js(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function pu(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function di(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}var hu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hu||(hu={}));function wy(e,t,n){return n===void 0&&(n="/"),Ay(e,t,n)}function Ay(e,t,n,a){let i=typeof t=="string"?di(t):t,r=Hp(i.pathname||"/",n);if(r==null)return null;let o=Tp(e);ky(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let c=jy(r);l=Ry(o[s],c)}return l}function Tp(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let i=(r,o,l)=>{let s={relativePath:l===void 0?r.path||"":l,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};s.relativePath.startsWith("/")&&(xe(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let c=qt([a,s.relativePath]),u=n.concat(s);r.children&&r.children.length>0&&(xe(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Tp(r.children,t,u,c)),!(r.path==null&&!r.index)&&t.push({path:c,score:Wy(c,r.index),routesMeta:u})};return e.forEach((r,o)=>{var l;if(r.path===""||!((l=r.path)!=null&&l.includes("?")))i(r,o);else for(let s of Dp(r.path))i(r,o,s)}),t}function Dp(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),r=n.replace(/\?$/,"");if(a.length===0)return i?[r,""]:[r];let o=Dp(a.join("/")),l=[];return l.push(...o.map(s=>s===""?r:[r,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function ky(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Iy(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Sy=/^:[\w-]+$/,Cy=3,Py=2,Ly=1,Ny=10,Ey=-2,gu=e=>e==="*";function Wy(e,t){let n=e.split("/"),a=n.length;return n.some(gu)&&(a+=Ey),t&&(a+=Py),n.filter(i=>!gu(i)).reduce((i,r)=>i+(Sy.test(r)?Cy:r===""?Ly:Ny),a)}function Iy(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Ry(e,t,n){let{routesMeta:a}=e,i={},r="/",o=[];for(let l=0;l<a.length;++l){let s=a[l],c=l===a.length-1,u=r==="/"?t:t.slice(r.length)||"/",d=Zy({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},u),h=s.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:qt([r,d.pathname]),pathnameBase:zy(qt([r,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(r=qt([r,d.pathnameBase]))}return o}function Zy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=My(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let r=i[0],o=r.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:a.reduce((s,c,u)=>{let{paramName:d,isOptional:h}=c;if(d==="*"){let x=l[u]||"";o=r.slice(0,r.length-x.length).replace(/(.)\/+$/,"$1")}const p=l[u];return h&&!p?s[d]=void 0:s[d]=(p||"").replace(/%2F/g,"/"),s},{}),pathname:r,pathnameBase:o,pattern:e}}function My(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),js(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,l)=>(a.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function jy(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return js(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hp(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const Ty=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dy=e=>Ty.test(e);function Hy(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?di(e):e,r;if(n)if(Dy(n))r=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),js(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?r=mu(n.substring(1),"/"):r=mu(n,t)}else r=t;return{pathname:r,search:Jy(a),hash:By(i)}}function mu(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function xo(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _y(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _p(e,t){let n=_y(e);return t?n.map((a,i)=>i===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function zp(e,t,n,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=di(e):(i=Cl({},e),xe(!i.pathname||!i.pathname.includes("?"),xo("?","pathname","search",i)),xe(!i.pathname||!i.pathname.includes("#"),xo("#","pathname","hash",i)),xe(!i.search||!i.search.includes("#"),xo("#","search","hash",i)));let r=e===""||i.pathname==="",o=r?"/":i.pathname,l;if(o==null)l=n;else{let d=t.length-1;if(!a&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=Hy(i,l),c=o&&o!=="/"&&o.endsWith("/"),u=(r||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(c||u)&&(s.pathname+="/"),s}const qt=e=>e.join("/").replace(/\/\/+/g,"/"),zy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,By=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Uy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Jp=["post","put","patch","delete"];new Set(Jp);const Fy=["get",...Jp];new Set(Fy);/**
* React Router v6.30.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ii.apply(this,arguments)}const Ts=E.createContext(null),Oy=E.createContext(null),wn=E.createContext(null),Br=E.createContext(null),An=E.createContext({outlet:null,matches:[],isDataRoute:!1}),Bp=E.createContext(null);function Gy(e,t){let{relative:n}=t===void 0?{}:t;fi()||xe(!1);let{basename:a,navigator:i}=E.useContext(wn),{hash:r,pathname:o,search:l}=Fp(e,{relative:n}),s=o;return a!=="/"&&(s=o==="/"?a:qt([a,o])),i.createHref({pathname:s,search:l,hash:r})}function fi(){return E.useContext(Br)!=null}function sa(){return fi()||xe(!1),E.useContext(Br).location}function Up(e){E.useContext(wn).static||E.useLayoutEffect(e)}function Xy(){let{isDataRoute:e}=E.useContext(An);return e?o0():Yy()}function Yy(){fi()||xe(!1);let e=E.useContext(Ts),{basename:t,future:n,navigator:a}=E.useContext(wn),{matches:i}=E.useContext(An),{pathname:r}=sa(),o=JSON.stringify(_p(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return Up(()=>{l.current=!0}),E.useCallback(function(s,c){if(c===void 0&&(c={}),!l.current)return;if(typeof s=="number"){a.go(s);return}let u=zp(s,JSON.parse(o),r,c.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:qt([t,u.pathname])),(c.replace?a.replace:a.push)(u,c.state,c)},[t,a,o,r,e])}function Fp(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=E.useContext(wn),{matches:i}=E.useContext(An),{pathname:r}=sa(),o=JSON.stringify(_p(i,a.v7_relativeSplatPath));return E.useMemo(()=>zp(e,JSON.parse(o),r,n==="path"),[e,o,r,n])}function Vy(e,t){return Ky(e,t)}function Ky(e,t,n,a){fi()||xe(!1);let{navigator:i}=E.useContext(wn),{matches:r}=E.useContext(An),o=r[r.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let c=sa(),u;if(t){var d;let C=typeof t=="string"?di(t):t;s==="/"||(d=C.pathname)!=null&&d.startsWith(s)||xe(!1),u=C}else u=c;let h=u.pathname||"/",p=h;if(s!=="/"){let C=s.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=wy(e,{pathname:p}),w=t0(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:qt([s,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?s:qt([s,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),r,n,a);return t&&w?E.createElement(Br.Provider,{value:{location:ii({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Ar.Pop}},w):w}function $y(){let e=r0(),t=Uy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},t),n?E.createElement("pre",{style:a},n):null,null)}const Qy=E.createElement($y,null);class qy extends E.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?E.createElement(An.Provider,{value:this.props.routeContext},E.createElement(Bp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e0(e){let{routeContext:t,match:n,children:a}=e,i=E.useContext(Ts);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(An.Provider,{value:t},a)}function t0(e,t,n,a){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var r;if(!n)return null;if(n.errors)e=n.matches;else if((r=a)!=null&&r.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let u=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);u>=0||xe(!1),o=o.slice(0,Math.min(o.length,u+1))}let s=!1,c=-1;if(n&&a&&a.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:h,errors:p}=n,x=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||x){s=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,h)=>{let p,x=!1,w=null,C=null;n&&(p=l&&d.route.id?l[d.route.id]:void 0,w=d.route.errorElement||Qy,s&&(c<0&&h===0?(l0("route-fallback"),x=!0,C=null):c===h&&(x=!0,C=d.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,h+1)),m=()=>{let b;return p?b=w:x?b=C:d.route.Component?b=E.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=u,E.createElement(e0,{match:d,routeContext:{outlet:u,matches:g,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?E.createElement(qy,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Op||{}),Gp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gp||{});function n0(e){let t=E.useContext(Ts);return t||xe(!1),t}function a0(e){let t=E.useContext(Oy);return t||xe(!1),t}function i0(e){let t=E.useContext(An);return t||xe(!1),t}function Xp(e){let t=i0(),n=t.matches[t.matches.length-1];return n.route.id||xe(!1),n.route.id}function r0(){var e;let t=E.useContext(Bp),n=a0(),a=Xp();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function o0(){let{router:e}=n0(Op.UseNavigateStable),t=Xp(Gp.UseNavigateStable),n=E.useRef(!1);return Up(()=>{n.current=!0}),E.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,ii({fromRouteId:t},i)))},[e,t])}const yu={};function l0(e,t,n){yu[e]||(yu[e]=!0)}function s0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ct(e){xe(!1)}function c0(e){let{basename:t="/",children:n=null,location:a,navigationType:i=Ar.Pop,navigator:r,static:o=!1,future:l}=e;fi()&&xe(!1);let s=t.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:s,navigator:r,static:o,future:ii({v7_relativeSplatPath:!1},l)}),[s,l,r,o]);typeof a=="string"&&(a=di(a));let{pathname:u="/",search:d="",hash:h="",state:p=null,key:x="default"}=a,w=E.useMemo(()=>{let C=Hp(u,s);return C==null?null:{location:{pathname:C,search:d,hash:h,state:p,key:x},navigationType:i}},[s,u,d,h,p,x,i]);return w==null?null:E.createElement(wn.Provider,{value:c},E.createElement(Br.Provider,{children:n,value:w}))}function u0(e){let{children:t,location:n}=e;return Vy(Pl(t),n)}new Promise(()=>{});function Pl(e,t){t===void 0&&(t=[]);let n=[];return E.Children.forEach(e,(a,i)=>{if(!E.isValidElement(a))return;let r=[...t,i];if(a.type===E.Fragment){n.push.apply(n,Pl(a.props.children,r));return}a.type!==Ct&&xe(!1),!a.props.index||!a.props.children||xe(!1);let o={id:a.props.id||r.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=Pl(a.props.children,r)),n.push(o)}),n}/**
* @remix-run/router v1.23.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function kr(){return kr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},kr.apply(this,arguments)}var Bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bn||(Bn={}));const bu="popstate";function d0(e){e===void 0&&(e={});function t(a,i){let{pathname:r,search:o,hash:l}=a.location;return Ll("",{pathname:r,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(a,i){return typeof i=="string"?i:Yp(i)}return g0(t,n,null,e)}function f0(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function p0(){return Math.random().toString(36).substr(2,8)}function vu(e,t){return{usr:e.state,key:e.key,idx:t}}function Ll(e,t,n,a){return n===void 0&&(n=null),kr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?h0(t):t,{state:n,key:t&&t.key||a||p0()})}function Yp(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function h0(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function g0(e,t,n,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:r=!1}=a,o=i.history,l=Bn.Pop,s=null,c=u();c==null&&(c=0,o.replaceState(kr({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){l=Bn.Pop;let C=u(),g=C==null?null:C-c;c=C,s&&s({action:l,location:w.location,delta:g})}function h(C,g){l=Bn.Push;let m=Ll(w.location,C,g);c=u()+1;let b=vu(m,c),k=w.createHref(m);try{o.pushState(b,"",k)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(k)}r&&s&&s({action:l,location:w.location,delta:1})}function p(C,g){l=Bn.Replace;let m=Ll(w.location,C,g);c=u();let b=vu(m,c),k=w.createHref(m);o.replaceState(b,"",k),r&&s&&s({action:l,location:w.location,delta:0})}function x(C){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof C=="string"?C:Yp(C);return m=m.replace(/ $/,"%20"),f0(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let w={get action(){return l},get location(){return e(i,o)},listen(C){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(bu,d),s=C,()=>{i.removeEventListener(bu,d),s=null}},createHref(C){return t(i,C)},createURL:x,encodeLocation(C){let g=x(C);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(C){return o.go(C)}};return w}var xu;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xu||(xu={}));function m0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const Vp=["post","put","patch","delete"];new Set(Vp);const y0=["get",...Vp];new Set(y0);/**
* React Router DOM v6.30.2
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Nl.apply(this,arguments)}function b0(e,t){if(e==null)return{};var n={},a=Object.keys(e),i,r;for(r=0;r<a.length;r++)i=a[r],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function v0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function x0(e,t){return e.button===0&&(!t||t==="_self")&&!v0(e)}const w0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],A0="6";try{window.__reactRouterVersion=A0}catch{}const k0="startTransition",wu=ug[k0];function S0(e){let{basename:t,children:n,future:a,window:i}=e,r=E.useRef();r.current==null&&(r.current=d0({window:i,v5Compat:!0}));let o=r.current,[l,s]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=a||{},u=E.useCallback(d=>{c&&wu?wu(()=>s(d)):s(d)},[s,c]);return E.useLayoutEffect(()=>o.listen(u),[o,u]),E.useEffect(()=>s0(a),[a]),E.createElement(c0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:a})}const C0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Na=E.forwardRef(function(e,t){let{onClick:n,relative:a,reloadDocument:i,replace:r,state:o,target:l,to:s,preventScrollReset:c,viewTransition:u}=e,d=b0(e,w0),{basename:h}=E.useContext(wn),p,x=!1;if(typeof s=="string"&&P0.test(s)&&(p=s,C0))try{let m=new URL(window.location.href),b=s.startsWith("//")?new URL(m.protocol+s):new URL(s),k=m0(b.pathname,h);b.origin===m.origin&&k!=null?s=k+b.search+b.hash:x=!0}catch{}let w=Gy(s,{relative:a}),C=L0(s,{replace:r,state:o,target:l,preventScrollReset:c,relative:a,viewTransition:u});function g(m){n&&n(m),m.defaultPrevented||C(m)}return E.createElement("a",Nl({},d,{href:p||w,onClick:x||i?n:g,ref:t,target:l}))});var Au;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Au||(Au={}));var ku;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ku||(ku={}));function L0(e,t){let{target:n,replace:a,state:i,preventScrollReset:r,relative:o,viewTransition:l}=t===void 0?{}:t,s=Xy(),c=sa(),u=Fp(e,{relative:o});return E.useCallback(d=>{if(x0(d,n)){d.preventDefault();let h=a!==void 0?a:pu(c)===pu(u);s(e,{replace:h,state:i,preventScrollReset:r,relative:o,viewTransition:l})}},[c,s,u,a,i,n,e,r,o,l])}const wo=[{name:"Home",link:"/",group:"home"},{name:"News",link:"/news",group:"news"},{name:"Research",link:"/research",group:"research"},{name:"Publications",link:"/publications",group:"publications"},{name:"Software",link:"/software",group:"software"},{name:"Members",link:"/members",group:"members"},{name:"Join",link:"/join",group:"join"},{name:"Contact",link:"/contact",group:"contact"}],Kp=()=>"/",N0=e=>{let t=e.startsWith("/")?e.slice(1):e;t=t.startsWith("static/")?t.slice(7):t;const n=Kp(),a=t.startsWith("/")?t:`/${t}`;return!n||n==="/"?a:`${n.endsWith("/")?n.slice(0,-1):n}${a}`},O={name:"Genomics and Artificial Intelligence in Healthcare Lab",description:"This is the official web page for the Genomics and Artificial Intelligence in Healthcare Lab at Hong Kong PolyU.",url:"https://genomics-in-healthcare.github.io/",baseurl:Kp(),static:N0},E0=()=>{const[e,t]=E.useState(!1),[n,a]=E.useState(!1),i=sa(),r=i.pathname==="/"||i.pathname==="/genomics-in-healthcare.github.io/";E.useEffect(()=>{const c=()=>{const u=window.pageYOffset||document.documentElement.scrollTop;a(u>50)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const o=()=>{t(!e)},l=()=>{t(!1)},s=(()=>{const c=i.pathname,u=wo.find(d=>{const h=d.link==="/"?"/":d.link;return c===h||c===`${O.baseurl}${h}`});return(u==null?void 0:u.group)||""})();return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:`md-app-bar ${r?"home":""} ${n?"scrolled":""}`,children:f.jsxs("div",{className:"md-app-bar__container",children:[f.jsx("button",{className:"md-button md-button--text md-menu-button",id:"menuButton","aria-label":"Open menu",onClick:o,style:{color:"#64748b"},children:f.jsxs("span",{className:"md-menu-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})}),f.jsx("div",{className:"md-app-bar__brand",style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Na,{to:"/",style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-app-bar__logo",src:O.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{className:"md-app-bar__title",children:[f.jsx("div",{className:"md-app-bar__title-main",style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{className:"md-app-bar__title-sub",style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("nav",{className:"md-app-bar__actions",id:"desktopNav",style:{gap:"4px"},children:wo.map(c=>f.jsx(Na,{to:c.link,className:`md-button md-button--text ${s===c.group?"md-button--active":""}`,style:{color:"#64748b",fontWeight:500,padding:"10px 12px",borderRadius:"4px",transition:"background-color 0.15s ease",fontSize:"1.125rem",fontFamily:"'Inter', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"},children:c.name},c.link))})]})}),f.jsxs("aside",{className:`md-navigation-drawer ${e?"open":""}`,id:"navigationDrawer",children:[f.jsx("div",{className:"md-navigation-drawer__header",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Na,{to:"/",onClick:l,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-navigation-drawer__logo",src:O.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("button",{className:"md-button md-button--text md-close-button",id:"closeDrawerButton","aria-label":"Close menu",onClick:l,style:{color:"#64748b",padding:"8px"},children:f.jsxs("span",{className:"md-close-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{})]})})]})}),f.jsx("div",{className:"md-navigation-drawer__content",children:wo.map(c=>f.jsx(Na,{to:c.link,onClick:l,className:`md-navigation-drawer__item ${s===c.group?"active":""}`,tabIndex:0,style:{backgroundColor:"transparent !important",color:"#1a1c1e !important",border:"none !important",boxShadow:"none !important"},children:c.name},c.link))})]}),f.jsx("div",{className:`md-backdrop ${e?"open":""}`,id:"backdrop",onClick:l})]})},W0=()=>f.jsx("footer",{children:f.jsx("div",{children:f.jsx("p",{children:"© 2025 Hong Kong JC STEM Lab of Genomics and AI in Healthcare. All rights reserved."})})}),I0=({children:e})=>{const t=sa(),n=t.pathname==="/"||t.pathname==="/genomics-in-healthcare.github.io/";return E.useEffect(()=>{n?(document.body.classList.add("home"),document.body.classList.remove("non-home")):(document.body.classList.add("non-home"),document.body.classList.remove("home")),document.querySelectorAll("table").forEach(i=>{if(!i.parentElement.classList.contains("table-responsive")){const r=document.createElement("div");r.className="table-responsive",r.style.overflowX="auto",r.style.margin="16px 0",i.parentNode.insertBefore(r,i),r.appendChild(i)}});const a=document.querySelector(".md-main-content");a&&a.classList.add("md-fade-in")},[n,t]),f.jsxs("div",{className:`layout ${n?"home":"non-home"}`,children:[f.jsx(E0,{}),f.jsx("main",{className:"md-main-content",children:e}),f.jsx(W0,{})]})},R0=()=>{const e=O.static("img/logo/homepage_background.png"),t=[{src:O.static("img/logo/hksar.png"),alt:"Hong Kong SAR"},{src:O.static("img/logo/rgc.png"),alt:"RGC"},{src:O.static("img/logo/nsfc.png"),alt:"NSFC"},{src:O.static("img/logo/hkjcct.png"),alt:"Hong Kong Jockey Club Charities Trust"}];return f.jsxs(f.Fragment,{children:[f.jsx("section",{className:"hero-section",style:{background:`linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%), url('${e}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",color:"white",height:"35vh",minHeight:"240px",maxHeight:"400px",width:"100vw",maxWidth:"100vw",display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:"32px 0",position:"relative",marginTop:"60px",marginLeft:"calc(-50vw + 50%)",marginRight:"calc(-50vw + 50%)",boxShadow:"inset 0 0 100px rgba(0, 0, 0, 0.1)",overflow:"visible"},children:f.jsx("div",{style:{textAlign:"center",width:"100%",maxWidth:"1200px",padding:"0 clamp(16px, 2.5vw, 32px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0 auto",wordWrap:"break-word",overflowWrap:"break-word",boxSizing:"border-box"},children:f.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:400,margin:0,lineHeight:1.5,color:"#334155",textShadow:"1px 1px 2px rgba(0,0,0,0.06)",textAlign:"center",width:"100%",display:"block",fontFamily:"'Georgia', 'Times New Roman', 'serif'",letterSpacing:"0.02em",wordWrap:"break-word",overflowWrap:"break-word",hyphens:"auto"},children:"Our mission is to advance AI and genomic technologies to enable personalized diagnosis and treatment for complex diseases, especially cancer and neuropsychiatric disorders like depression and schizophrenia. We focus on developing and combining AI with biological techniques, including reliable, explainable machine learning and single-cell spatial transcriptomics. Our research is highly interdisciplinary, spanning AI, data science, molecular biology, genetics, genomics, and neuroscience"})})}),f.jsxs("div",{className:"md-main-content",style:{marginTop:0,position:"relative",zIndex:2,paddingTop:0},children:[f.jsxs("section",{className:"lab-description-section",style:{margin:"24px 0 8px 0",position:"relative"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:600,margin:0,color:"#334155",position:"relative",textAlign:"center",lineHeight:1.6},children:f.jsxs("span",{style:{position:"relative",zIndex:1,background:"#f8f9fa",padding:0,lineHeight:1.6},children:["Our Laboratory combines",f.jsx("br",{}),"a computational biology lab (the Dry Lab) and a molecular biology lab (the Wet Lab)"]})})}),f.jsx("div",{style:{width:"100%",maxWidth:"800px",margin:"0 auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 10px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Dry Lab features a high-performance computing setup, including GPU and CPU clusters, large disk arrays, and filer servers"})})]}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",margin:"20px 0",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:O.static("img/data_center.jpg"),alt:"Data Center - CPU and GPU clusters",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:O.static("img/office_workspace.jpg"),alt:"Office Workspace - Computational Biology Lab",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]}),f.jsx("div",{className:"lab-description-text",style:{width:"100%",maxWidth:"800px",margin:"20px auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 20px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Wet Lab is equipped for molecular biology research and animal study, including high-throughput sequencers"})}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px",margin:"20px 0",width:"100%",maxWidth:"1200px",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:O.static("img/wet_lab1.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 1",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:O.static("img/wet_lab2.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 2",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:O.static("img/wet_lab3.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 3",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]})]}),f.jsx("section",{style:{margin:0,position:"relative",background:"#f8f9fa",padding:"16px 0"},children:f.jsxs("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("h2",{className:"funding-title",style:{fontSize:"1.5rem",fontWeight:600,margin:"0 0 12px 0",color:"#334155",textAlign:"center"},children:"Research Supported By"}),f.jsx("div",{className:"funding-partners",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px"},children:t.map((n,a)=>f.jsx("img",{src:n.src,alt:n.alt,style:{height:"40px",width:"auto",margin:"2px",display:"inline-block",filter:"grayscale(0%)",opacity:.9,transition:"opacity 0.3s ease"}},a))})]})})]})},Z0=E.memo(function({children:e,variant:t="text",size:n="medium",active:a=!1,className:i="",onClick:r,style:o={},disabled:l=!1,type:s="button",...c}){const u=["ui-button",`ui-button--${t}`,`ui-button--${n}`,a&&"ui-button--active",l&&"ui-button--disabled",i].filter(Boolean).join(" ");return f.jsx("button",{type:s,className:u,onClick:r,style:o,disabled:l,...c,children:e})});Z0.displayName="Button";const $p=E.memo(function({children:e,className:t="",style:n={},elevated:a=!1,outlined:i=!1,...r}){const o=["ui-card",a&&"ui-card--elevated",i&&"ui-card--outlined",t].filter(Boolean).join(" ");return f.jsx("div",{className:o,style:n,...r,children:e})});$p.displayName="Card";const Vn=E.memo(function({children:e,to:t,href:n,external:a=!1,variant:i="default",className:r="",...o}){const l=["ui-link",`ui-link--${i}`,r].filter(Boolean).join(" ");return n||a?f.jsx("a",{href:n||t,className:l,target:a?"_blank":void 0,rel:a?"noopener noreferrer":void 0,...o,children:e}):f.jsx(Na,{to:t,className:l,...o,children:e})});Vn.displayName="Link";const Qp=E.memo(function({src:e,alt:t,className:n="",style:a={},lazy:i=!0,...r}){let o=e;e.startsWith("http")||(o=e.startsWith("/")?e:`/${e}`);const l=["ui-image",n].filter(Boolean).join(" ");return f.jsx("img",{src:o,alt:t,className:l,style:a,loading:i?"lazy":"eager",...r})});Qp.displayName="Image";const M0=E.memo(function({children:e,className:t="",style:n={},variant:a="default",background:i=!1,...r}){const o=["ui-section",`ui-section--${a}`,i&&"ui-section--background",t].filter(Boolean).join(" ");return f.jsx("section",{className:o,style:n,...r,children:e})});M0.displayName="Section";const j0=E.memo(function({children:e,className:t="",style:n={},size:a="medium",...i}){const r=["ui-container",`ui-container--${a}`,t].filter(Boolean).join(" ");return f.jsx("div",{className:r,style:n,...i,children:e})});j0.displayName="Container";const T0=E.memo(function({isOpen:e,onClose:t,title:n,children:a,size:i="medium",closeOnBackdrop:r=!0,className:o=""}){if(E.useEffect(()=>(e?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[e]),E.useEffect(()=>{const u=d=>{d.key==="Escape"&&e&&t()};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[e,t]),!e)return null;const l=u=>{r&&u.target===u.currentTarget&&t()},s=["ui-modal",`ui-modal--${i}`,o].filter(Boolean).join(" "),c=f.jsx("div",{className:"ui-modal__backdrop",onClick:l,children:f.jsxs("div",{className:s,children:[(n||r)&&f.jsxs("div",{className:"ui-modal__header",children:[n&&f.jsx("h2",{className:"ui-modal__title",children:n}),r&&f.jsx("button",{className:"ui-modal__close",onClick:t,"aria-label":"Close modal",children:f.jsx("span",{className:"material-icons",children:"close"})})]}),f.jsx("div",{className:"ui-modal__content",children:a})]})});return jp.createPortal(c,document.body)});T0.displayName="Modal";const D0=E.memo(function({options:e,value:t,onChange:n,placeholder:a="请选择...",disabled:i=!1,className:r="",variant:o="default"}){const[l,s]=E.useState(!1),c=E.useRef(null);E.useEffect(()=>{const p=x=>{c.current&&!c.current.contains(x.target)&&s(!1)};return l&&document.addEventListener("mousedown",p),()=>{document.removeEventListener("mousedown",p)}},[l]);const u=e.find(p=>p.value===t),d=p=>{var x;(x=e.find(w=>w.value===p))!=null&&x.disabled||(n(p),s(!1))},h=["ui-dropdown",`ui-dropdown--${o}`,l&&"ui-dropdown--open",i&&"ui-dropdown--disabled",r].filter(Boolean).join(" ");return f.jsxs("div",{className:h,ref:c,children:[f.jsxs("button",{className:"ui-dropdown__trigger",onClick:()=>!i&&s(!l),disabled:i,type:"button",children:[f.jsx("span",{className:"ui-dropdown__selected",children:u?f.jsxs(f.Fragment,{children:[u.icon&&f.jsx("span",{className:"material-icons ui-dropdown__icon",children:u.icon}),u.label]}):f.jsx("span",{className:"ui-dropdown__placeholder",children:a})}),f.jsx("span",{className:"material-icons ui-dropdown__arrow",children:l?"expand_less":"expand_more"})]}),l&&f.jsx("div",{className:"ui-dropdown__menu",children:e.map(p=>f.jsxs("button",{className:`ui-dropdown__option ${p.value===t?"ui-dropdown__option--selected":""} ${p.disabled?"ui-dropdown__option--disabled":""}`,onClick:()=>d(p.value),disabled:p.disabled,type:"button",children:[p.icon&&f.jsx("span",{className:"material-icons ui-dropdown__option-icon",children:p.icon}),p.label]},p.value))})]})});D0.displayName="Dropdown";const H0=E.memo(function({tabs:e,defaultTab:t,onChange:n,variant:a="default",className:i=""}){var r,o;const[l,s]=E.useState(t||((r=e[0])==null?void 0:r.id)||""),c=h=>{const p=e.find(x=>x.id===h);p&&!p.disabled&&(s(h),n==null||n(h))},u=(o=e.find(h=>h.id===l))==null?void 0:o.content,d=["ui-tabs",`ui-tabs--${a}`,i].filter(Boolean).join(" ");return f.jsxs("div",{className:d,children:[f.jsx("div",{className:"ui-tabs__header",children:e.map(h=>f.jsxs("button",{className:`ui-tabs__tab ${l===h.id?"ui-tabs__tab--active":""} ${h.disabled?"ui-tabs__tab--disabled":""}`,onClick:()=>c(h.id),disabled:h.disabled,type:"button",children:[h.icon&&f.jsx("span",{className:"material-icons ui-tabs__tab-icon",children:h.icon}),h.label]},h.id))}),f.jsx("div",{className:"ui-tabs__content",children:u})]})});H0.displayName="Tabs";function _0(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const z0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,J0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,B0={};function Su(e,t){return(B0.jsx?J0:z0).test(e)}const U0=/[ \t\n\f\r]/g;function F0(e){return typeof e=="object"?e.type==="text"?Cu(e.value):!1:Cu(e)}function Cu(e){return e.replace(U0,"")===""}class pi{constructor(t,n,a){this.normal=n,this.property=t,a&&(this.space=a)}}pi.prototype.normal={};pi.prototype.property={};pi.prototype.space=void 0;function qp(e,t){const n={},a={};for(const i of e)Object.assign(n,i.property),Object.assign(a,i.normal);return new pi(n,a,t)}function El(e){return e.toLowerCase()}class Je{constructor(t,n){this.attribute=n,this.property=t}}Je.prototype.attribute="";Je.prototype.booleanish=!1;Je.prototype.boolean=!1;Je.prototype.commaOrSpaceSeparated=!1;Je.prototype.commaSeparated=!1;Je.prototype.defined=!1;Je.prototype.mustUseProperty=!1;Je.prototype.number=!1;Je.prototype.overloadedBoolean=!1;Je.prototype.property="";Je.prototype.spaceSeparated=!1;Je.prototype.space=void 0;let O0=0;const J=kn(),ge=kn(),Wl=kn(),N=kn(),q=kn(),Kn=kn(),Ue=kn();function kn(){return 2**++O0}const Il=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:ge,commaOrSpaceSeparated:Ue,commaSeparated:Kn,number:N,overloadedBoolean:Wl,spaceSeparated:q},Symbol.toStringTag,{value:"Module"})),Ao=Object.keys(Il);class Ds extends Je{constructor(t,n,a,i){let r=-1;if(super(t,n),Pu(this,"space",i),typeof a=="number")for(;++r<Ao.length;){const o=Ao[r];Pu(this,Ao[r],(a&Il[o])===Il[o])}}}Ds.prototype.defined=!0;function Pu(e,t,n){n&&(e[t]=n)}function ca(e){const t={},n={};for(const[a,i]of Object.entries(e.properties)){const r=new Ds(a,e.transform(e.attributes||{},a),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(a)&&(r.mustUseProperty=!0),t[a]=r,n[El(a)]=a,n[El(r.attribute)]=a}return new pi(t,n,e.space)}const eh=ca({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:N,ariaColIndex:N,ariaColSpan:N,ariaControls:q,ariaCurrent:null,ariaDescribedBy:q,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:q,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:q,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:q,ariaLevel:N,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:q,ariaPlaceholder:null,ariaPosInSet:N,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:q,ariaRowCount:N,ariaRowIndex:N,ariaRowSpan:N,ariaSelected:ge,ariaSetSize:N,ariaSort:null,ariaValueMax:N,ariaValueMin:N,ariaValueNow:N,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function th(e,t){return t in e?e[t]:t}function nh(e,t){return th(e,t.toLowerCase())}const G0=ca({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Kn,acceptCharset:q,accessKey:q,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:q,autoFocus:J,autoPlay:J,blocking:q,capture:null,charSet:null,checked:J,cite:null,className:q,cols:N,colSpan:null,content:null,contentEditable:ge,controls:J,controlsList:q,coords:N|Kn,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:Wl,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:q,height:N,hidden:Wl,high:N,href:null,hrefLang:null,htmlFor:q,httpEquiv:q,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:q,itemRef:q,itemScope:J,itemType:q,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:N,manifest:null,max:null,maxLength:N,media:null,method:null,min:null,minLength:N,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:N,pattern:null,ping:q,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:q,required:J,reversed:J,rows:N,rowSpan:N,sandbox:q,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:N,sizes:null,slot:null,span:N,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:N,step:null,style:null,tabIndex:N,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:ge,width:N,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:q,axis:null,background:null,bgColor:null,border:N,borderColor:null,bottomMargin:N,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:N,leftMargin:N,link:null,longDesc:null,lowSrc:null,marginHeight:N,marginWidth:N,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:N,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:N,valueType:null,version:null,vAlign:null,vLink:null,vSpace:N,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:N,security:null,unselectable:null},space:"html",transform:nh}),X0=ca({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ue,accentHeight:N,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:N,amplitude:N,arabicForm:null,ascent:N,attributeName:null,attributeType:null,azimuth:N,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:N,by:null,calcMode:null,capHeight:N,className:q,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:N,diffuseConstant:N,direction:null,display:null,dur:null,divisor:N,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:N,enableBackground:null,end:null,event:null,exponent:N,externalResourcesRequired:null,fill:null,fillOpacity:N,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Kn,g2:Kn,glyphName:Kn,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:N,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:N,horizOriginX:N,horizOriginY:N,id:null,ideographic:N,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:N,k:N,k1:N,k2:N,k3:N,k4:N,kernelMatrix:Ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:N,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:N,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:N,overlineThickness:N,paintOrder:null,panose1:null,path:null,pathLength:N,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:q,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:N,pointsAtY:N,pointsAtZ:N,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ue,rev:Ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ue,requiredFeatures:Ue,requiredFonts:Ue,requiredFormats:Ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:N,specularExponent:N,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:N,strikethroughThickness:N,string:null,stroke:null,strokeDashArray:Ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:N,strokeOpacity:N,strokeWidth:null,style:null,surfaceScale:N,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ue,tabIndex:N,tableValues:null,target:null,targetX:N,targetY:N,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:N,underlineThickness:N,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:N,values:null,vAlphabetic:N,vMathematical:N,vectorEffect:null,vHanging:N,vIdeographic:N,version:null,vertAdvY:N,vertOriginX:N,vertOriginY:N,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:N,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:th}),ah=ca({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),ih=ca({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:nh}),rh=ca({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Y0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},V0=/[A-Z]/g,Lu=/-[a-z]/g,K0=/^data[-\w.:]+$/i;function $0(e,t){const n=El(t);let a=t,i=Je;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&K0.test(t)){if(t.charAt(4)==="-"){const r=t.slice(5).replace(Lu,q0);a="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=t.slice(4);if(!Lu.test(r)){let o=r.replace(V0,Q0);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}i=Ds}return new i(a,t)}function Q0(e){return"-"+e.toLowerCase()}function q0(e){return e.charAt(1).toUpperCase()}const eb=qp([eh,G0,ah,ih,rh],"html"),Hs=qp([eh,X0,ah,ih,rh],"svg");function tb(e){return e.join(" ").trim()}var _s={},Nu=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,nb=/\n/g,ab=/^\s*/,ib=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,rb=/^:\s*/,ob=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,lb=/^[;\s]*/,sb=/^\s+|\s+$/g,cb=`
`,Eu="/",Wu="*",sn="",ub="comment",db="declaration";function fb(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,a=1;function i(x){var w=x.match(nb);w&&(n+=w.length);var C=x.lastIndexOf(cb);a=~C?x.length-C:a+x.length}function r(){var x={line:n,column:a};return function(w){return w.position=new o(x),c(),w}}function o(x){this.start=x,this.end={line:n,column:a},this.source=t.source}o.prototype.content=e;function l(x){var w=new Error(t.source+":"+n+":"+a+": "+x);if(w.reason=x,w.filename=t.source,w.line=n,w.column=a,w.source=e,!t.silent)throw w}function s(x){var w=x.exec(e);if(w){var C=w[0];return i(C),e=e.slice(C.length),w}}function c(){s(ab)}function u(x){var w;for(x=x||[];w=d();)w!==!1&&x.push(w);return x}function d(){var x=r();if(!(Eu!=e.charAt(0)||Wu!=e.charAt(1))){for(var w=2;sn!=e.charAt(w)&&(Wu!=e.charAt(w)||Eu!=e.charAt(w+1));)++w;if(w+=2,sn===e.charAt(w-1))return l("End of comment missing");var C=e.slice(2,w-2);return a+=2,i(C),e=e.slice(w),a+=2,x({type:ub,comment:C})}}function h(){var x=r(),w=s(ib);if(w){if(d(),!s(rb))return l("property missing ':'");var C=s(ob),g=x({type:db,property:Iu(w[0].replace(Nu,sn)),value:C?Iu(C[0].replace(Nu,sn)):sn});return s(lb),g}}function p(){var x=[];u(x);for(var w;w=h();)w!==!1&&(x.push(w),u(x));return x}return c(),p()}function Iu(e){return e?e.replace(sb,sn):sn}var pb=fb,hb=$i&&$i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(_s,"__esModule",{value:!0});_s.default=mb;const gb=hb(pb);function mb(e,t){let n=null;if(!e||typeof e!="string")return n;const a=(0,gb.default)(e),i=typeof t=="function";return a.forEach(r=>{if(r.type!=="declaration")return;const{property:o,value:l}=r;i?t(o,l,r):l&&(n=n||{},n[o]=l)}),n}var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});Ur.camelCase=void 0;var yb=/^--[a-zA-Z0-9_-]+$/,bb=/-([a-z])/g,vb=/^[^-]+$/,xb=/^-(webkit|moz|ms|o|khtml)-/,wb=/^-(ms)-/,Ab=function(e){return!e||vb.test(e)||yb.test(e)},kb=function(e,t){return t.toUpperCase()},Ru=function(e,t){return"".concat(t,"-")},Sb=function(e,t){return t===void 0&&(t={}),Ab(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(wb,Ru):e=e.replace(xb,Ru),e.replace(bb,kb))};Ur.camelCase=Sb;var Cb=$i&&$i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},Pb=Cb(_s),Lb=Ur;function Rl(e,t){var n={};return!e||typeof e!="string"||(0,Pb.default)(e,function(a,i){a&&i&&(n[(0,Lb.camelCase)(a,t)]=i)}),n}Rl.default=Rl;var Nb=Rl;const Eb=zl(Nb),oh=lh("end"),zs=lh("start");function lh(e){return t;function t(n){const a=n&&n.position&&n.position[e]||{};if(typeof a.line=="number"&&a.line>0&&typeof a.column=="number"&&a.column>0)return{line:a.line,column:a.column,offset:typeof a.offset=="number"&&a.offset>-1?a.offset:void 0}}}function Wb(e){const t=zs(e),n=oh(e);if(t&&n)return{start:t,end:n}}function Ha(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Zu(e.position):"start"in e||"end"in e?Zu(e):"line"in e||"column"in e?Zl(e):""}function Zl(e){return Mu(e&&e.line)+":"+Mu(e&&e.column)}function Zu(e){return Zl(e&&e.start)+"-"+Zl(e&&e.end)}function Mu(e){return e&&typeof e=="number"?e:1}class We extends Error{constructor(t,n,a){super(),typeof n=="string"&&(a=n,n=void 0);let i="",r={},o=!1;if(n&&("line"in n&&"column"in n?r={place:n}:"start"in n&&"end"in n?r={place:n}:"type"in n?r={ancestors:[n],place:n.position}:r={...n}),typeof t=="string"?i=t:!r.cause&&t&&(o=!0,i=t.message,r.cause=t),!r.ruleId&&!r.source&&typeof a=="string"){const s=a.indexOf(":");s===-1?r.ruleId=a:(r.source=a.slice(0,s),r.ruleId=a.slice(s+1))}if(!r.place&&r.ancestors&&r.ancestors){const s=r.ancestors[r.ancestors.length-1];s&&(r.place=s.position)}const l=r.place&&"start"in r.place?r.place.start:r.place;this.ancestors=r.ancestors||void 0,this.cause=r.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=Ha(r.place)||"1:1",this.place=r.place||void 0,this.reason=this.message,this.ruleId=r.ruleId||void 0,this.source=r.source||void 0,this.stack=o&&r.cause&&typeof r.cause.stack=="string"?r.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}We.prototype.file="";We.prototype.name="";We.prototype.reason="";We.prototype.message="";We.prototype.stack="";We.prototype.column=void 0;We.prototype.line=void 0;We.prototype.ancestors=void 0;We.prototype.cause=void 0;We.prototype.fatal=void 0;We.prototype.place=void 0;We.prototype.ruleId=void 0;We.prototype.source=void 0;const Js={}.hasOwnProperty,Ib=new Map,Rb=/[A-Z]/g,Zb=new Set(["table","tbody","thead","tfoot","tr"]),Mb=new Set(["td","th"]),sh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function jb(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let a;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");a=Ub(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");a=Bb(n,t.jsx,t.jsxs)}const i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:a,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?Hs:eb,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},r=ch(i,e,void 0);return r&&typeof r!="string"?r:i.create(e,i.Fragment,{children:r||void 0},void 0)}function ch(e,t,n){if(t.type==="element")return Tb(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return Db(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return _b(e,t,n);if(t.type==="mdxjsEsm")return Hb(e,t);if(t.type==="root")return zb(e,t,n);if(t.type==="text")return Jb(e,t)}function Tb(e,t,n){const a=e.schema;let i=a;t.tagName.toLowerCase()==="svg"&&a.space==="html"&&(i=Hs,e.schema=i),e.ancestors.push(t);const r=dh(e,t.tagName,!1),o=Fb(e,t);let l=Us(e,t);return Zb.has(t.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!F0(s):!0})),uh(e,o,r,t),Bs(o,l),e.ancestors.pop(),e.schema=a,e.create(t,r,o,n)}function Db(e,t){if(t.data&&t.data.estree&&e.evaluater){const n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}ri(e,t.position)}function Hb(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);ri(e,t.position)}function _b(e,t,n){const a=e.schema;let i=a;t.name==="svg"&&a.space==="html"&&(i=Hs,e.schema=i),e.ancestors.push(t);const r=t.name===null?e.Fragment:dh(e,t.name,!0),o=Ob(e,t),l=Us(e,t);return uh(e,o,r,t),Bs(o,l),e.ancestors.pop(),e.schema=a,e.create(t,r,o,n)}function zb(e,t,n){const a={};return Bs(a,Us(e,t)),e.create(t,e.Fragment,a,n)}function Jb(e,t){return t.value}function uh(e,t,n,a){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=a)}function Bs(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Bb(e,t,n){return a;function a(i,r,o,l){const s=Array.isArray(o.children)?n:t;return l?s(r,o,l):s(r,o)}}function Ub(e,t){return n;function n(a,i,r,o){const l=Array.isArray(r.children),s=zs(a);return t(i,r,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function Fb(e,t){const n={};let a,i;for(i in t.properties)if(i!=="children"&&Js.call(t.properties,i)){const r=Gb(e,i,t.properties[i]);if(r){const[o,l]=r;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&Mb.has(t.tagName)?a=l:n[o]=l}}if(a){const r=n.style||(n.style={});r[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=a}return n}function Ob(e,t){const n={};for(const a of t.attributes)if(a.type==="mdxJsxExpressionAttribute")if(a.data&&a.data.estree&&e.evaluater){const i=a.data.estree.body[0];i.type;const r=i.expression;r.type;const o=r.properties[0];o.type,Object.assign(n,e.evaluater.evaluateExpression(o.argument))}else ri(e,t.position);else{const i=a.name;let r;if(a.value&&typeof a.value=="object")if(a.value.data&&a.value.data.estree&&e.evaluater){const o=a.value.data.estree.body[0];o.type,r=e.evaluater.evaluateExpression(o.expression)}else ri(e,t.position);else r=a.value===null?!0:a.value;n[i]=r}return n}function Us(e,t){const n=[];let a=-1;const i=e.passKeys?new Map:Ib;for(;++a<t.children.length;){const r=t.children[a];let o;if(e.passKeys){const s=r.type==="element"?r.tagName:r.type==="mdxJsxFlowElement"||r.type==="mdxJsxTextElement"?r.name:void 0;if(s){const c=i.get(s)||0;o=s+"-"+c,i.set(s,c+1)}}const l=ch(e,r,o);l!==void 0&&n.push(l)}return n}function Gb(e,t,n){const a=$0(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=a.commaSeparated?_0(n):tb(n)),a.property==="style"){let i=typeof n=="object"?n:Xb(e,String(n));return e.stylePropertyNameCase==="css"&&(i=Yb(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&a.space?Y0[a.property]||a.property:a.attribute,n]}}function Xb(e,t){try{return Eb(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const a=n,i=new We("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:a,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=sh+"#cannot-parse-style-attribute",i}}function dh(e,t,n){let a;if(!n)a={type:"Literal",value:t};else if(t.includes(".")){const i=t.split(".");let r=-1,o;for(;++r<i.length;){const l=Su(i[r])?{type:"Identifier",name:i[r]}:{type:"Literal",value:i[r]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(r&&l.type==="Literal"),optional:!1}:l}a=o}else a=Su(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(a.type==="Literal"){const i=a.value;return Js.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(a);ri(e)}function ri(e,t){const n=new We("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=sh+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Yb(e){const t={};let n;for(n in e)Js.call(e,n)&&(t[Vb(n)]=e[n]);return t}function Vb(e){let t=e.replace(Rb,Kb);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Kb(e){return"-"+e.toLowerCase()}const ko={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},$b={};function Qb(e,t){const n=$b,a=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,i=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return fh(e,a,i)}function fh(e,t,n){if(qb(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return ju(e.children,t,n)}return Array.isArray(e)?ju(e,t,n):""}function ju(e,t,n){const a=[];let i=-1;for(;++i<e.length;)a[i]=fh(e[i],t,n);return a.join("")}function qb(e){return!!(e&&typeof e=="object")}const Tu=document.createElement("i");function Fs(e){const t="&"+e+";";Tu.innerHTML=t;const n=Tu.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function At(e,t,n,a){const i=e.length;let r=0,o;if(t<0?t=-t>i?0:i+t:t=t>i?i:t,n=n>0?n:0,a.length<1e4)o=Array.from(a),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);r<a.length;)o=a.slice(r,r+1e4),o.unshift(t,0),e.splice(...o),r+=1e4,t+=1e4}function Qe(e,t){return e.length>0?(At(e,e.length,0,t),e):t}const Du={}.hasOwnProperty;function e1(e){const t={};let n=-1;for(;++n<e.length;)t1(t,e[n]);return t}function t1(e,t){let n;for(n in t){const a=(Du.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n];let r;if(i)for(r in i){Du.call(a,r)||(a[r]=[]);const o=i[r];n1(a[r],Array.isArray(o)?o:o?[o]:[])}}}function n1(e,t){let n=-1;const a=[];for(;++n<t.length;)(t[n].add==="after"?e:a).push(t[n]);At(e,0,0,a)}function ph(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function $n(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Os(e){return e!==null&&e<-2}function Hu(e){return e===-2||e===-1||e===32}function te(e,t,n,a){const i=a?a-1:Number.POSITIVE_INFINITY;let r=0;return o;function o(s){return Hu(s)?(e.enter(n),l(s)):t(s)}function l(s){return Hu(s)&&r++<i?(e.consume(s),l):(e.exit(n),t(s))}}const a1={tokenize:i1};function i1(e){const t=e.attempt(this.parser.constructs.contentInitial,a,i);let n;return t;function a(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),te(e,t,"linePrefix")}function i(l){return e.enter("paragraph"),r(l)}function r(l){const s=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=s),n=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Os(l)?(e.consume(l),e.exit("chunkText"),r):(e.consume(l),o)}}const r1={tokenize:o1},_u={tokenize:l1};function o1(e){const t=this,n=[];let a=0,i,r,o;return l;function l(b){if(a<n.length){const k=n[a];return t.containerState=k[1],e.attempt(k[0].continuation,s,c)(b)}return c(b)}function s(b){if(a++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&m();const k=t.events.length;let L=k,A;for(;L--;)if(t.events[L][0]==="exit"&&t.events[L][1].type==="chunkFlow"){A=t.events[L][1].end;break}g(a);let W=k;for(;W<t.events.length;)t.events[W][1].end={...A},W++;return At(t.events,L+1,0,t.events.slice(k)),t.events.length=W,c(b)}return l(b)}function c(b){if(a===n.length){if(!i)return h(b);if(i.currentConstruct&&i.currentConstruct.concrete)return x(b);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(_u,u,d)(b)}function u(b){return i&&m(),g(a),h(b)}function d(b){return t.parser.lazy[t.now().line]=a!==n.length,o=t.now().offset,x(b)}function h(b){return t.containerState={},e.attempt(_u,p,x)(b)}function p(b){return a++,n.push([t.currentConstruct,t.containerState]),h(b)}function x(b){if(b===null){i&&m(),g(0),e.consume(b);return}return i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:r}),w(b)}function w(b){if(b===null){C(e.exit("chunkFlow"),!0),g(0),e.consume(b);return}return Os(b)?(e.consume(b),C(e.exit("chunkFlow")),a=0,t.interrupt=void 0,l):(e.consume(b),w)}function C(b,k){const L=t.sliceStream(b);if(k&&L.push(null),b.previous=r,r&&(r.next=b),r=b,i.defineSkip(b.start),i.write(L),t.parser.lazy[b.start.line]){let A=i.events.length;for(;A--;)if(i.events[A][1].start.offset<o&&(!i.events[A][1].end||i.events[A][1].end.offset>o))return;const W=t.events.length;let Z=W,_,j;for(;Z--;)if(t.events[Z][0]==="exit"&&t.events[Z][1].type==="chunkFlow"){if(_){j=t.events[Z][1].end;break}_=!0}for(g(a),A=W;A<t.events.length;)t.events[A][1].end={...j},A++;At(t.events,Z+1,0,t.events.slice(W)),t.events.length=A}}function g(b){let k=n.length;for(;k-- >b;){const L=n[k];t.containerState=L[1],L[0].exit.call(t,e)}n.length=b}function m(){i.write([null]),r=void 0,i=void 0,t.containerState._closeFlow=void 0}}function l1(e,t,n){return te(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function s1(e){return e!==null&&(e<0||e===32)}const c1=hh(new RegExp("\\p{P}|\\p{S}","u")),u1=hh(/\s/);function hh(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function zu(e){if(e===null||s1(e)||u1(e))return 1;if(c1(e))return 2}function Gs(e,t,n){const a=[];let i=-1;for(;++i<e.length;){const r=e[i].resolveAll;r&&!a.includes(r)&&(t=r(t,n),a.push(r))}return t}const Ml={name:"attention",resolveAll:d1,tokenize:f1};function d1(e,t){let n=-1,a,i,r,o,l,s,c,u;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(a=n;a--;)if(e[a][0]==="exit"&&e[a][1].type==="attentionSequence"&&e[a][1]._open&&t.sliceSerialize(e[a][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[a][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[a][1].end.offset-e[a][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;s=e[a][1].end.offset-e[a][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const d={...e[a][1].end},h={...e[n][1].start};Ju(d,-s),Ju(h,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[a][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:h},r={type:s>1?"strongText":"emphasisText",start:{...e[a][1].end},end:{...e[n][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[a][1].end={...o.start},e[n][1].start={...l.end},c=[],e[a][1].end.offset-e[a][1].start.offset&&(c=Qe(c,[["enter",e[a][1],t],["exit",e[a][1],t]])),c=Qe(c,[["enter",i,t],["enter",o,t],["exit",o,t],["enter",r,t]]),c=Qe(c,Gs(t.parser.constructs.insideSpan.null,e.slice(a+1,n),t)),c=Qe(c,[["exit",r,t],["enter",l,t],["exit",l,t],["exit",i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,c=Qe(c,[["enter",e[n][1],t],["exit",e[n][1],t]])):u=0,At(e,a-1,n-a+3,c),n=a+c.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function f1(e,t){const n=this.parser.constructs.attentionMarkers.null,a=this.previous,i=zu(a);let r;return o;function o(s){return r=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===r)return e.consume(s),l;const c=e.exit("attentionSequence"),u=zu(s),d=!u||u===2&&i||n.includes(s),h=!i||i===2&&u||n.includes(a);return c._open=!!(r===42?d:d&&(i||!h)),c._close=!!(r===42?h:h&&(u||!d)),t(s)}}function Ju(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const vt=ua(/[A-Za-z]/),ct=ua(/[\dA-Za-z]/),p1=ua(/[#-'*+\--9=?A-Z^-~]/);function h1(e){return e!==null&&(e<32||e===127)}const jl=ua(/\d/),g1=ua(/[\dA-Fa-f]/),m1=ua(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function tt(e){return e!==null&&(e<0||e===32)}function $(e){return e===-2||e===-1||e===32}function ua(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}const y1={name:"autolink",tokenize:b1};function b1(e,t,n){let a=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r}function r(p){return vt(p)?(e.consume(p),o):p===64?n(p):c(p)}function o(p){return p===43||p===45||p===46||ct(p)?(a=1,l(p)):c(p)}function l(p){return p===58?(e.consume(p),a=0,s):(p===43||p===45||p===46||ct(p))&&a++<32?(e.consume(p),l):(a=0,c(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||h1(p)?n(p):(e.consume(p),s)}function c(p){return p===64?(e.consume(p),u):p1(p)?(e.consume(p),c):n(p)}function u(p){return ct(p)?d(p):n(p)}function d(p){return p===46?(e.consume(p),a=0,u):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):h(p)}function h(p){if((p===45||ct(p))&&a++<63){const x=p===45?h:d;return e.consume(p),x}return n(p)}}const Fr={partial:!0,tokenize:v1};function v1(e,t,n){return a;function a(r){return $(r)?te(e,i,"linePrefix")(r):i(r)}function i(r){return r===null||B(r)?t(r):n(r)}}const gh={continuation:{tokenize:w1},exit:A1,name:"blockQuote",tokenize:x1};function x1(e,t,n){const a=this;return i;function i(o){if(o===62){const l=a.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),r}return n(o)}function r(o){return $(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function w1(e,t,n){const a=this;return i;function i(o){return $(o)?te(e,r,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):r(o)}function r(o){return e.attempt(gh,t,n)(o)}}function A1(e){e.exit("blockQuote")}const mh={name:"characterEscape",tokenize:k1};function k1(e,t,n){return a;function a(r){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(r),e.exit("escapeMarker"),i}function i(r){return m1(r)?(e.enter("characterEscapeValue"),e.consume(r),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(r)}}const yh={name:"characterReference",tokenize:S1};function S1(e,t,n){const a=this;let i=0,r,o;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),c):(e.enter("characterReferenceValue"),r=31,o=ct,u(d))}function c(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,o=g1,u):(e.enter("characterReferenceValue"),r=7,o=jl,u(d))}function u(d){if(d===59&&i){const h=e.exit("characterReferenceValue");return o===ct&&!Fs(a.sliceSerialize(h))?n(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(d)&&i++<r?(e.consume(d),u):n(d)}}const Bu={partial:!0,tokenize:P1},Uu={concrete:!0,name:"codeFenced",tokenize:C1};function C1(e,t,n){const a=this,i={partial:!0,tokenize:L};let r=0,o=0,l;return s;function s(A){return c(A)}function c(A){const W=a.events[a.events.length-1];return r=W&&W[1].type==="linePrefix"?W[2].sliceSerialize(W[1],!0).length:0,l=A,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(A)}function u(A){return A===l?(o++,e.consume(A),u):o<3?n(A):(e.exit("codeFencedFenceSequence"),$(A)?te(e,d,"whitespace")(A):d(A))}function d(A){return A===null||B(A)?(e.exit("codeFencedFence"),a.interrupt?t(A):e.check(Bu,w,k)(A)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(A))}function h(A){return A===null||B(A)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(A)):$(A)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),te(e,p,"whitespace")(A)):A===96&&A===l?n(A):(e.consume(A),h)}function p(A){return A===null||B(A)?d(A):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(A))}function x(A){return A===null||B(A)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(A)):A===96&&A===l?n(A):(e.consume(A),x)}function w(A){return e.attempt(i,k,C)(A)}function C(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),g}function g(A){return r>0&&$(A)?te(e,m,"linePrefix",r+1)(A):m(A)}function m(A){return A===null||B(A)?e.check(Bu,w,k)(A):(e.enter("codeFlowValue"),b(A))}function b(A){return A===null||B(A)?(e.exit("codeFlowValue"),m(A)):(e.consume(A),b)}function k(A){return e.exit("codeFenced"),t(A)}function L(A,W,Z){let _=0;return j;function j(F){return A.enter("lineEnding"),A.consume(F),A.exit("lineEnding"),T}function T(F){return A.enter("codeFencedFence"),$(F)?te(A,D,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(F):D(F)}function D(F){return F===l?(A.enter("codeFencedFenceSequence"),Y(F)):Z(F)}function Y(F){return F===l?(_++,A.consume(F),Y):_>=o?(A.exit("codeFencedFenceSequence"),$(F)?te(A,le,"whitespace")(F):le(F)):Z(F)}function le(F){return F===null||B(F)?(A.exit("codeFencedFence"),W(F)):Z(F)}}}function P1(e,t,n){const a=this;return i;function i(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r)}function r(o){return a.parser.lazy[a.now().line]?n(o):t(o)}}const So={name:"codeIndented",tokenize:N1},L1={partial:!0,tokenize:E1};function N1(e,t,n){const a=this;return i;function i(c){return e.enter("codeIndented"),te(e,r,"linePrefix",5)(c)}function r(c){const u=a.events[a.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?o(c):n(c)}function o(c){return c===null?s(c):B(c)?e.attempt(L1,o,s)(c):(e.enter("codeFlowValue"),l(c))}function l(c){return c===null||B(c)?(e.exit("codeFlowValue"),o(c)):(e.consume(c),l)}function s(c){return e.exit("codeIndented"),t(c)}}function E1(e,t,n){const a=this;return i;function i(o){return a.parser.lazy[a.now().line]?n(o):B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):te(e,r,"linePrefix",5)(o)}function r(o){const l=a.events[a.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):B(o)?i(o):n(o)}}const W1={name:"codeText",previous:R1,resolve:I1,tokenize:Z1};function I1(e){let t=e.length-4,n=3,a,i;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(a=n;++a<t;)if(e[a][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(a=n-1,t++;++a<=t;)i===void 0?a!==t&&e[a][1].type!=="lineEnding"&&(i=a):(a===t||e[a][1].type==="lineEnding")&&(e[i][1].type="codeTextData",a!==i+2&&(e[i][1].end=e[a-1][1].end,e.splice(i+2,a-i-2),t-=a-i-2,a=i+2),i=void 0);return e}function R1(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Z1(e,t,n){let a=0,i,r;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),l(d)}function l(d){return d===96?(e.consume(d),a++,l):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?n(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(r=e.enter("codeTextSequence"),i=0,u(d)):B(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),c(d))}function c(d){return d===null||d===32||d===96||B(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),c)}function u(d){return d===96?(e.consume(d),i++,u):i===a?(e.exit("codeTextSequence"),e.exit("codeText"),t(d)):(r.type="codeTextData",c(d))}}class M1{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const a=n??Number.POSITIVE_INFINITY;return a<this.left.length?this.left.slice(t,a):t>this.left.length?this.right.slice(this.right.length-a+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-a+this.left.length).reverse())}splice(t,n,a){const i=n||0;this.setCursor(Math.trunc(t));const r=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return a&&Aa(this.left,a),r.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Aa(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Aa(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Aa(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Aa(this.left,n.reverse())}}}function Aa(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function bh(e){const t={};let n=-1,a,i,r,o,l,s,c;const u=new M1(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(a=u.get(n),n&&a[1].type==="chunkFlow"&&u.get(n-1)[1].type==="listItemPrefix"&&(s=a[1]._tokenizer.events,r=0,r<s.length&&s[r][1].type==="lineEndingBlank"&&(r+=2),r<s.length&&s[r][1].type==="content"))for(;++r<s.length&&s[r][1].type!=="content";)s[r][1].type==="chunkText"&&(s[r][1]._isInFirstContentOfListItem=!0,r++);if(a[0]==="enter")a[1].contentType&&(Object.assign(t,j1(u,n)),n=t[n],c=!0);else if(a[1]._container){for(r=n,i=void 0;r--;)if(o=u.get(r),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=r);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(a[1].end={...u.get(i)[1].start},l=u.slice(i,n),l.unshift(a),u.splice(i,n-i+1,l))}}return At(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!c}function j1(e,t){const n=e.get(t)[1],a=e.get(t)[2];let i=t-1;const r=[];let o=n._tokenizer;o||(o=a.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,s=[],c={};let u,d,h=-1,p=n,x=0,w=0;const C=[w];for(;p;){for(;e.get(++i)[1]!==p;);r.push(i),p._tokenizer||(u=a.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(w=h+1,C.push(w),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):C.pop(),h=C.length;h--;){const g=l.slice(C[h],C[h+1]),m=r.pop();s.push([m,m+g.length-1]),e.splice(m,2,g)}for(s.reverse(),h=-1;++h<s.length;)c[x+s[h][0]]=x+s[h][1],x+=s[h][1]-s[h][0]-1;return c}const T1={resolve:H1,tokenize:_1},D1={partial:!0,tokenize:z1};function H1(e){return bh(e),e}function _1(e,t){let n;return a;function a(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?r(l):B(l)?e.check(D1,o,r)(l):(e.consume(l),i)}function r(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}}function z1(e,t,n){const a=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),te(e,r,"linePrefix")}function r(o){if(o===null||B(o))return n(o);const l=a.events[a.events.length-1];return!a.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):e.interrupt(a.parser.constructs.flow,n,t)(o)}}function Fu(e){return e!==null&&(e<32||e===127)}function J1(e){return e!==null&&e<-2}function B1(e){return e!==null&&(e<0||e===32)}function vh(e,t,n,a,i,r,o,l,s){const c=s||Number.POSITIVE_INFINITY;let u=0;return d;function d(g){return g===60?(e.enter(a),e.enter(i),e.enter(r),e.consume(g),e.exit(r),h):g===null||g===32||g===41||Fu(g)?n(g):(e.enter(a),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),w(g))}function h(g){return g===62?(e.enter(r),e.consume(g),e.exit(r),e.exit(i),e.exit(a),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(l),h(g)):g===null||g===60||J1(g)?n(g):(e.consume(g),g===92?x:p)}function x(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function w(g){return!u&&(g===null||g===41||B1(g))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(a),t(g)):u<c&&g===40?(e.consume(g),u++,w):g===41?(e.consume(g),u--,w):g===null||g===32||g===40||Fu(g)?n(g):(e.consume(g),g===92?C:w)}function C(g){return g===40||g===41||g===92?(e.consume(g),w):w(g)}}function xh(e,t,n,a,i,r){const o=this;let l=0,s;return c;function c(p){return e.enter(a),e.enter(i),e.consume(p),e.exit(i),e.enter(r),u}function u(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(p):p===93?(e.exit(r),e.enter(i),e.consume(p),e.exit(i),e.exit(a),t):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||B(p)||l++>999?(e.exit("chunkString"),u(p)):(e.consume(p),s||(s=!$(p)),p===92?h:d)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,d):d(p)}}function Ou(e){return e!==null&&e<-2}function wh(e,t,n,a,i,r){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(a),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,s):n(h)}function s(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(a),t):(e.enter(r),c(h))}function c(h){return h===o?(e.exit(r),s(o)):h===null?n(h):Ou(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),te(e,c,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(h))}function u(h){return h===o||h===null||Ou(h)?(e.exit("chunkString"),c(h)):(e.consume(h),h===92?d:u)}function d(h){return h===o||h===92?(e.consume(h),u):u(h)}}function U1(e){return e!==null&&e<-2}function F1(e){return e===-2||e===-1||e===32}function _a(e,t){let n;return a;function a(i){return U1(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),n=!0,a):F1(i)?te(e,a,n?"linePrefix":"lineSuffix")(i):t(i)}}const O1={name:"definition",tokenize:X1},G1={partial:!0,tokenize:Y1};function X1(e,t,n){const a=this;let i;return r;function r(p){return e.enter("definition"),o(p)}function o(p){return xh.call(a,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=$n(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):n(p)}function s(p){return tt(p)?_a(e,c)(p):c(p)}function c(p){return vh(e,u,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function u(p){return e.attempt(G1,d,d)(p)}function d(p){return $(p)?te(e,h,"whitespace")(p):h(p)}function h(p){return p===null||B(p)?(e.exit("definition"),a.parser.defined.push(i),t(p)):n(p)}}function Y1(e,t,n){return a;function a(l){return tt(l)?_a(e,i)(l):n(l)}function i(l){return wh(e,r,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function r(l){return $(l)?te(e,o,"whitespace")(l):o(l)}function o(l){return l===null||B(l)?t(l):n(l)}}const V1={name:"hardBreakEscape",tokenize:K1};function K1(e,t,n){return a;function a(r){return e.enter("hardBreakEscape"),e.consume(r),i}function i(r){return B(r)?(e.exit("hardBreakEscape"),t(r)):n(r)}}const $1={name:"headingAtx",resolve:Q1,tokenize:q1};function Q1(e,t){let n=e.length-2,a=3,i,r;return e[a][1].type==="whitespace"&&(a+=2),n-2>a&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(a===n-1||n-4>a&&e[n-2][1].type==="whitespace")&&(n-=a+1===n?2:4),n>a&&(i={type:"atxHeadingText",start:e[a][1].start,end:e[n][1].end},r={type:"chunkText",start:e[a][1].start,end:e[n][1].end,contentType:"text"},At(e,a,n-a+1,[["enter",i,t],["enter",r,t],["exit",r,t],["exit",i,t]])),e}function q1(e,t,n){let a=0;return i;function i(u){return e.enter("atxHeading"),r(u)}function r(u){return e.enter("atxHeadingSequence"),o(u)}function o(u){return u===35&&a++<6?(e.consume(u),o):u===null||tt(u)?(e.exit("atxHeadingSequence"),l(u)):n(u)}function l(u){return u===35?(e.enter("atxHeadingSequence"),s(u)):u===null||B(u)?(e.exit("atxHeading"),t(u)):$(u)?te(e,l,"whitespace")(u):(e.enter("atxHeadingText"),c(u))}function s(u){return u===35?(e.consume(u),s):(e.exit("atxHeadingSequence"),l(u))}function c(u){return u===null||u===35||tt(u)?(e.exit("atxHeadingText"),l(u)):(e.consume(u),c)}}const ev=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Gu=["pre","script","style","textarea"],tv={concrete:!0,name:"htmlFlow",resolveTo:iv,tokenize:rv},nv={partial:!0,tokenize:lv},av={partial:!0,tokenize:ov};function iv(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function rv(e,t,n){const a=this;let i,r,o,l,s;return c;function c(v){return u(v)}function u(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),d}function d(v){return v===33?(e.consume(v),h):v===47?(e.consume(v),r=!0,w):v===63?(e.consume(v),i=3,a.interrupt?t:y):vt(v)?(e.consume(v),o=String.fromCharCode(v),C):n(v)}function h(v){return v===45?(e.consume(v),i=2,p):v===91?(e.consume(v),i=5,l=0,x):vt(v)?(e.consume(v),i=4,a.interrupt?t:y):n(v)}function p(v){return v===45?(e.consume(v),a.interrupt?t:y):n(v)}function x(v){const ye="CDATA[";return v===ye.charCodeAt(l++)?(e.consume(v),l===ye.length?a.interrupt?t:D:x):n(v)}function w(v){return vt(v)?(e.consume(v),o=String.fromCharCode(v),C):n(v)}function C(v){if(v===null||v===47||v===62||tt(v)){const ye=v===47,it=o.toLowerCase();return!ye&&!r&&Gu.includes(it)?(i=1,a.interrupt?t(v):D(v)):ev.includes(o.toLowerCase())?(i=6,ye?(e.consume(v),g):a.interrupt?t(v):D(v)):(i=7,a.interrupt&&!a.parser.lazy[a.now().line]?n(v):r?m(v):b(v))}return v===45||ct(v)?(e.consume(v),o+=String.fromCharCode(v),C):n(v)}function g(v){return v===62?(e.consume(v),a.interrupt?t:D):n(v)}function m(v){return $(v)?(e.consume(v),m):j(v)}function b(v){return v===47?(e.consume(v),j):v===58||v===95||vt(v)?(e.consume(v),k):$(v)?(e.consume(v),b):j(v)}function k(v){return v===45||v===46||v===58||v===95||ct(v)?(e.consume(v),k):L(v)}function L(v){return v===61?(e.consume(v),A):$(v)?(e.consume(v),L):b(v)}function A(v){return v===null||v===60||v===61||v===62||v===96?n(v):v===34||v===39?(e.consume(v),s=v,W):$(v)?(e.consume(v),A):Z(v)}function W(v){return v===s?(e.consume(v),s=null,_):v===null||B(v)?n(v):(e.consume(v),W)}function Z(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||tt(v)?L(v):(e.consume(v),Z)}function _(v){return v===47||v===62||$(v)?b(v):n(v)}function j(v){return v===62?(e.consume(v),T):n(v)}function T(v){return v===null||B(v)?D(v):$(v)?(e.consume(v),T):n(v)}function D(v){return v===45&&i===2?(e.consume(v),he):v===60&&i===1?(e.consume(v),fe):v===62&&i===4?(e.consume(v),G):v===63&&i===3?(e.consume(v),y):v===93&&i===5?(e.consume(v),H):B(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(nv,K,Y)(v)):v===null||B(v)?(e.exit("htmlFlowData"),Y(v)):(e.consume(v),D)}function Y(v){return e.check(av,le,K)(v)}function le(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),F}function F(v){return v===null||B(v)?Y(v):(e.enter("htmlFlowData"),D(v))}function he(v){return v===45?(e.consume(v),y):D(v)}function fe(v){return v===47?(e.consume(v),o="",R):D(v)}function R(v){if(v===62){const ye=o.toLowerCase();return Gu.includes(ye)?(e.consume(v),G):D(v)}return vt(v)&&o.length<8?(e.consume(v),o+=String.fromCharCode(v),R):D(v)}function H(v){return v===93?(e.consume(v),y):D(v)}function y(v){return v===62?(e.consume(v),G):v===45&&i===2?(e.consume(v),y):D(v)}function G(v){return v===null||B(v)?(e.exit("htmlFlowData"),K(v)):(e.consume(v),G)}function K(v){return e.exit("htmlFlow"),t(v)}}function ov(e,t,n){const a=this;return i;function i(o){return B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):n(o)}function r(o){return a.parser.lazy[a.now().line]?n(o):t(o)}}function lv(e,t,n){return a;function a(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Fr,t,n)}}const sv={name:"htmlText",tokenize:cv};function cv(e,t,n){const a=this;let i,r,o;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),c):y===47?(e.consume(y),L):y===63?(e.consume(y),b):vt(y)?(e.consume(y),Z):n(y)}function c(y){return y===45?(e.consume(y),u):y===91?(e.consume(y),r=0,x):vt(y)?(e.consume(y),m):n(y)}function u(y){return y===45?(e.consume(y),p):n(y)}function d(y){return y===null?n(y):y===45?(e.consume(y),h):B(y)?(o=d,fe(y)):(e.consume(y),d)}function h(y){return y===45?(e.consume(y),p):d(y)}function p(y){return y===62?he(y):y===45?h(y):d(y)}function x(y){const G="CDATA[";return y===G.charCodeAt(r++)?(e.consume(y),r===G.length?w:x):n(y)}function w(y){return y===null?n(y):y===93?(e.consume(y),C):B(y)?(o=w,fe(y)):(e.consume(y),w)}function C(y){return y===93?(e.consume(y),g):w(y)}function g(y){return y===62?he(y):y===93?(e.consume(y),g):w(y)}function m(y){return y===null||y===62?he(y):B(y)?(o=m,fe(y)):(e.consume(y),m)}function b(y){return y===null?n(y):y===63?(e.consume(y),k):B(y)?(o=b,fe(y)):(e.consume(y),b)}function k(y){return y===62?he(y):b(y)}function L(y){return vt(y)?(e.consume(y),A):n(y)}function A(y){return y===45||ct(y)?(e.consume(y),A):W(y)}function W(y){return B(y)?(o=W,fe(y)):$(y)?(e.consume(y),W):he(y)}function Z(y){return y===45||ct(y)?(e.consume(y),Z):y===47||y===62||tt(y)?_(y):n(y)}function _(y){return y===47?(e.consume(y),he):y===58||y===95||vt(y)?(e.consume(y),j):B(y)?(o=_,fe(y)):$(y)?(e.consume(y),_):he(y)}function j(y){return y===45||y===46||y===58||y===95||ct(y)?(e.consume(y),j):T(y)}function T(y){return y===61?(e.consume(y),D):B(y)?(o=T,fe(y)):$(y)?(e.consume(y),T):_(y)}function D(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),i=y,Y):B(y)?(o=D,fe(y)):$(y)?(e.consume(y),D):(e.consume(y),le)}function Y(y){return y===i?(e.consume(y),i=void 0,F):y===null?n(y):B(y)?(o=Y,fe(y)):(e.consume(y),Y)}function le(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||tt(y)?_(y):(e.consume(y),le)}function F(y){return y===47||y===62||tt(y)?_(y):n(y)}function he(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function fe(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),R}function R(y){return $(y)?te(e,H,"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):H(y)}function H(y){return e.enter("htmlTextData"),o(y)}}const Xs={name:"labelEnd",resolveAll:pv,resolveTo:hv,tokenize:gv},uv={tokenize:mv},dv={tokenize:yv},fv={tokenize:bv};function pv(e){let t=-1;const n=[];for(;++t<e.length;){const a=e[t][1];if(n.push(e[t]),a.type==="labelImage"||a.type==="labelLink"||a.type==="labelEnd"){const i=a.type==="labelImage"?4:2;a.type="data",t+=i}}return e.length!==n.length&&At(e,0,e.length,n),e}function hv(e,t){let n=e.length,a=0,i,r,o,l;for(;n--;)if(i=e[n][1],r){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[n][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(r=n,i.type!=="labelLink")){a=2;break}}else i.type==="labelEnd"&&(o=n);const s={type:e[r][1].type==="labelLink"?"link":"image",start:{...e[r][1].start},end:{...e[e.length-1][1].end}},c={type:"label",start:{...e[r][1].start},end:{...e[o][1].end}},u={type:"labelText",start:{...e[r+a+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,t],["enter",c,t]],l=Qe(l,e.slice(r+1,r+a+3)),l=Qe(l,[["enter",u,t]]),l=Qe(l,Gs(t.parser.constructs.insideSpan.null,e.slice(r+a+4,o-3),t)),l=Qe(l,[["exit",u,t],e[o-2],e[o-1],["exit",c,t]]),l=Qe(l,e.slice(o+1)),l=Qe(l,[["exit",s,t]]),At(e,r,e.length,l),e}function gv(e,t,n){const a=this;let i=a.events.length,r,o;for(;i--;)if((a.events[i][1].type==="labelImage"||a.events[i][1].type==="labelLink")&&!a.events[i][1]._balanced){r=a.events[i][1];break}return l;function l(h){return r?r._inactive?d(h):(o=a.parser.defined.includes($n(a.sliceSerialize({start:r.end,end:a.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),s):n(h)}function s(h){return h===40?e.attempt(uv,u,o?u:d)(h):h===91?e.attempt(dv,u,o?c:d)(h):o?u(h):d(h)}function c(h){return e.attempt(fv,u,d)(h)}function u(h){return t(h)}function d(h){return r._balanced=!0,n(h)}}function mv(e,t,n){return a;function a(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return tt(d)?_a(e,r)(d):r(d)}function r(d){return d===41?u(d):vh(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return tt(d)?_a(e,s)(d):u(d)}function l(d){return n(d)}function s(d){return d===34||d===39||d===40?wh(e,c,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):u(d)}function c(d){return tt(d)?_a(e,u)(d):u(d)}function u(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),t):n(d)}}function yv(e,t,n){const a=this;return i;function i(l){return xh.call(a,e,r,o,"reference","referenceMarker","referenceString")(l)}function r(l){return a.parser.defined.includes($n(a.sliceSerialize(a.events[a.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function bv(e,t,n){return a;function a(r){return e.enter("reference"),e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),i}function i(r){return r===93?(e.enter("referenceMarker"),e.consume(r),e.exit("referenceMarker"),e.exit("reference"),t):n(r)}}const vv={name:"labelStartImage",resolveAll:Xs.resolveAll,tokenize:xv};function xv(e,t,n){const a=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),r}function r(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in a.parser.constructs?n(l):t(l)}}const wv={name:"labelStartLink",resolveAll:Xs.resolveAll,tokenize:Av};function Av(e,t,n){const a=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),r}function r(o){return o===94&&"_hiddenFootnoteSupport"in a.parser.constructs?n(o):t(o)}}const Co={name:"lineEnding",tokenize:kv};function kv(e,t){return n;function n(a){return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),te(e,t,"linePrefix")}}const Vi={name:"thematicBreak",tokenize:Sv};function Sv(e,t,n){let a=0,i;return r;function r(c){return e.enter("thematicBreak"),o(c)}function o(c){return i=c,l(c)}function l(c){return c===i?(e.enter("thematicBreakSequence"),s(c)):a>=3&&(c===null||B(c))?(e.exit("thematicBreak"),t(c)):n(c)}function s(c){return c===i?(e.consume(c),a++,s):(e.exit("thematicBreakSequence"),$(c)?te(e,l,"whitespace")(c):l(c))}}const je={continuation:{tokenize:Nv},exit:Wv,name:"list",tokenize:Lv},Cv={partial:!0,tokenize:Iv},Pv={partial:!0,tokenize:Ev};function Lv(e,t,n){const a=this,i=a.events[a.events.length-1];let r=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const x=a.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!a.containerState.marker||p===a.containerState.marker:jl(p)){if(a.containerState.type||(a.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Vi,n,c)(p):c(p);if(!a.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return n(p)}function s(p){return jl(p)&&++o<10?(e.consume(p),s):(!a.interrupt||o<2)&&(a.containerState.marker?p===a.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),c(p)):n(p)}function c(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),a.containerState.marker=a.containerState.marker||p,e.check(Fr,a.interrupt?n:u,e.attempt(Cv,h,d))}function u(p){return a.containerState.initialBlankLine=!0,r++,h(p)}function d(p){return $(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return a.containerState.size=r+a.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function Nv(e,t,n){const a=this;return a.containerState._closeFlow=void 0,e.check(Fr,i,r);function i(l){return a.containerState.furtherBlankLines=a.containerState.furtherBlankLines||a.containerState.initialBlankLine,te(e,t,"listItemIndent",a.containerState.size+1)(l)}function r(l){return a.containerState.furtherBlankLines||!$(l)?(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,o(l)):(a.containerState.furtherBlankLines=void 0,a.containerState.initialBlankLine=void 0,e.attempt(Pv,t,o)(l))}function o(l){return a.containerState._closeFlow=!0,a.interrupt=void 0,te(e,e.attempt(je,t,n),"linePrefix",a.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Ev(e,t,n){const a=this;return te(e,i,"listItemIndent",a.containerState.size+1);function i(r){const o=a.events[a.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===a.containerState.size?t(r):n(r)}}function Wv(e){e.exit(this.containerState.type)}function Iv(e,t,n){const a=this;return te(e,i,"listItemPrefixWhitespace",a.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(r){const o=a.events[a.events.length-1];return!$(r)&&o&&o[1].type==="listItemPrefixWhitespace"?t(r):n(r)}}const Xu={name:"setextUnderline",resolveTo:Rv,tokenize:Zv};function Rv(e,t){let n=e.length,a,i,r;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){a=n;break}e[n][1].type==="paragraph"&&(i=n)}else e[n][1].type==="content"&&e.splice(n,1),!r&&e[n][1].type==="definition"&&(r=n);const o={type:"setextHeading",start:{...e[a][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",r?(e.splice(i,0,["enter",o,t]),e.splice(r+1,0,["exit",e[a][1],t]),e[a][1].end={...e[r][1].end}):e[a][1]=o,e.push(["exit",o,t]),e}function Zv(e,t,n){const a=this;let i;return r;function r(c){let u=a.events.length,d;for(;u--;)if(a.events[u][1].type!=="lineEnding"&&a.events[u][1].type!=="linePrefix"&&a.events[u][1].type!=="content"){d=a.events[u][1].type==="paragraph";break}return!a.parser.lazy[a.now().line]&&(a.interrupt||d)?(e.enter("setextHeadingLine"),i=c,o(c)):n(c)}function o(c){return e.enter("setextHeadingLineSequence"),l(c)}function l(c){return c===i?(e.consume(c),l):(e.exit("setextHeadingLineSequence"),$(c)?te(e,s,"lineSuffix")(c):s(c))}function s(c){return c===null||B(c)?(e.exit("setextHeadingLine"),t(c)):n(c)}}const Mv={tokenize:jv};function jv(e){const t=this,n=e.attempt(Fr,a,e.attempt(this.parser.constructs.flowInitial,i,te(e,e.attempt(this.parser.constructs.flow,i,e.attempt(T1,i)),"linePrefix")));return n;function a(r){if(r===null){e.consume(r);return}return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const Tv={resolveAll:kh()},Dv=Ah("string"),Hv=Ah("text");function Ah(e){return{resolveAll:kh(e==="text"?_v:void 0),tokenize:t};function t(n){const a=this,i=this.parser.constructs[e],r=n.attempt(i,o,l);return o;function o(u){return c(u)?r(u):l(u)}function l(u){if(u===null){n.consume(u);return}return n.enter("data"),n.consume(u),s}function s(u){return c(u)?(n.exit("data"),r(u)):(n.consume(u),s)}function c(u){if(u===null)return!0;const d=i[u];let h=-1;if(d)for(;++h<d.length;){const p=d[h];if(!p.previous||p.previous.call(a,a.previous))return!0}return!1}}}function kh(e){return t;function t(n,a){let i=-1,r;for(;++i<=n.length;)r===void 0?n[i]&&n[i][1].type==="data"&&(r=i,i++):(!n[i]||n[i][1].type!=="data")&&(i!==r+2&&(n[r][1].end=n[i-1][1].end,n.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(n,a):n}}function _v(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const a=e[n-1][1],i=t.sliceStream(a);let r=i.length,o=-1,l=0,s;for(;r--;){const c=i[r];if(typeof c=="string"){for(o=c.length;c.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(c===-2)s=!0,l++;else if(c!==-1){r++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const c={type:n===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:r?o:a.start._bufferIndex+o,_index:a.start._index+r,line:a.end.line,column:a.end.column-l,offset:a.end.offset-l},end:{...a.end}};a.end={...c.start},a.start.offset===a.end.offset?Object.assign(a,c):(e.splice(n,0,["enter",c,t],["exit",c,t]),n+=2)}n++}return e}const zv={42:je,43:je,45:je,48:je,49:je,50:je,51:je,52:je,53:je,54:je,55:je,56:je,57:je,62:gh},Jv={91:O1},Bv={[-2]:So,[-1]:So,32:So},Uv={35:$1,42:Vi,45:[Xu,Vi],60:tv,61:Xu,95:Vi,96:Uu,126:Uu},Fv={38:yh,92:mh},Ov={[-5]:Co,[-4]:Co,[-3]:Co,33:vv,38:yh,42:Ml,60:[y1,sv],91:wv,92:[V1,mh],93:Xs,95:Ml,96:W1},Gv={null:[Ml,Tv]},Xv={null:[42,95]},Yv={null:[]},Vv=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Xv,contentInitial:Jv,disable:Yv,document:zv,flow:Uv,flowInitial:Bv,insideSpan:Gv,string:Fv,text:Ov},Symbol.toStringTag,{value:"Module"}));function Kv(e,t,n){let a={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const i={},r=[];let o=[],l=[];const s={attempt:W(L),check:W(A),consume:m,enter:b,exit:k,interrupt:W(A,{interrupt:!0})},c={code:null,containerState:{},defineSkip:w,events:[],now:x,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:d};let u=t.tokenize.call(c,s);return t.resolveAll&&r.push(t),c;function d(T){return o=Qe(o,T),C(),o[o.length-1]!==null?[]:(Z(t,0),c.events=Gs(r,c.events,c),c.events)}function h(T,D){return Qv(p(T),D)}function p(T){return $v(o,T)}function x(){const{_bufferIndex:T,_index:D,line:Y,column:le,offset:F}=a;return{_bufferIndex:T,_index:D,line:Y,column:le,offset:F}}function w(T){i[T.line]=T.column,j()}function C(){let T;for(;a._index<o.length;){const D=o[a._index];if(typeof D=="string")for(T=a._index,a._bufferIndex<0&&(a._bufferIndex=0);a._index===T&&a._bufferIndex<D.length;)g(D.charCodeAt(a._bufferIndex));else g(D)}}function g(T){u=u(T)}function m(T){Os(T)?(a.line++,a.column=1,a.offset+=T===-3?2:1,j()):T!==-1&&(a.column++,a.offset++),a._bufferIndex<0?a._index++:(a._bufferIndex++,a._bufferIndex===o[a._index].length&&(a._bufferIndex=-1,a._index++)),c.previous=T}function b(T,D){const Y=D||{};return Y.type=T,Y.start=x(),c.events.push(["enter",Y,c]),l.push(Y),Y}function k(T){const D=l.pop();return D.end=x(),c.events.push(["exit",D,c]),D}function L(T,D){Z(T,D.from)}function A(T,D){D.restore()}function W(T,D){return Y;function Y(le,F,he){let fe,R,H,y;return Array.isArray(le)?K(le):"tokenize"in le?K([le]):G(le);function G(ne){return pt;function pt(Tt){const Sn=Tt!==null&&ne[Tt],Cn=Tt!==null&&ne.null,gi=[...Array.isArray(Sn)?Sn:Sn?[Sn]:[],...Array.isArray(Cn)?Cn:Cn?[Cn]:[]];return K(gi)(Tt)}}function K(ne){return fe=ne,R=0,ne.length===0?he:v(ne[R])}function v(ne){return pt;function pt(Tt){return y=_(),H=ne,ne.partial||(c.currentConstruct=ne),ne.name&&c.parser.constructs.disable.null.includes(ne.name)?it():ne.tokenize.call(D?Object.assign(Object.create(c),D):c,s,ye,it)(Tt)}}function ye(ne){return T(H,y),F}function it(ne){return y.restore(),++R<fe.length?v(fe[R]):he}}}function Z(T,D){T.resolveAll&&!r.includes(T)&&r.push(T),T.resolve&&At(c.events,D,c.events.length-D,T.resolve(c.events.slice(D),c)),T.resolveTo&&(c.events=T.resolveTo(c.events,c))}function _(){const T=x(),D=c.previous,Y=c.currentConstruct,le=c.events.length,F=Array.from(l);return{from:le,restore:he};function he(){a=T,c.previous=D,c.currentConstruct=Y,c.events.length=le,l=F,j()}}function j(){a.line in i&&a.column<2&&(a.column=i[a.line],a.offset+=i[a.line]-1)}}function $v(e,t){const n=t.start._index,a=t.start._bufferIndex,i=t.end._index,r=t.end._bufferIndex;let o;if(n===i)o=[e[n].slice(a,r)];else{if(o=e.slice(n,i),a>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(a):o.shift()}r>0&&o.push(e[i].slice(0,r))}return o}function Qv(e,t){let n=-1;const a=[];let i;for(;++n<e.length;){const r=e[n];let o;if(typeof r=="string")o=r;else switch(r){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&i)continue;o=" ";break}default:o=String.fromCharCode(r)}i=r===-2,a.push(o)}return a.join("")}function qv(e){const t={constructs:e1([Vv,...(e||{}).extensions||[]]),content:n(a1),defined:[],document:n(r1),flow:n(Mv),lazy:{},string:n(Dv),text:n(Hv)};return t;function n(a){return i;function i(r){return Kv(t,a,r)}}}function ex(e){for(;!bh(e););return e}const Yu=/[\0\t\n\r]/g;function tx(){let e=1,t="",n=!0,a;return i;function i(r,o,l){const s=[];let c,u,d,h,p;for(r=t+(typeof r=="string"?r.toString():new TextDecoder(o||void 0).decode(r)),d=0,t="",n&&(r.charCodeAt(0)===65279&&d++,n=void 0);d<r.length;){if(Yu.lastIndex=d,c=Yu.exec(r),h=c&&c.index!==void 0?c.index:r.length,p=r.charCodeAt(h),!c){t=r.slice(d);break}if(p===10&&d===h&&a)s.push(-3),a=void 0;else switch(a&&(s.push(-5),a=void 0),d<h&&(s.push(r.slice(d,h)),e+=h-d),p){case 0:{s.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,s.push(-2);e++<u;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:a=!0,e=1}d=h+1}return l&&(a&&s.push(-5),t&&s.push(t),s.push(null)),s}}const nx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ax(e){return e.replace(nx,ix)}function ix(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const a=n.charCodeAt(1),i=a===120||a===88;return ph(n.slice(i?2:1),i?16:10)}return Fs(n)||e}const Sh={}.hasOwnProperty;function rx(e,t,n){return typeof t!="string"&&(n=t,t=void 0),ox(n)(ex(qv(n).document().write(tx()(e,t,!0))))}function ox(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:r(nc),autolinkProtocol:_,autolinkEmail:_,atxHeading:r(qs),blockQuote:r(Cn),characterEscape:_,characterReference:_,codeFenced:r(gi),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:r(gi,o),codeText:r(_h,o),codeTextData:_,data:_,codeFlowValue:_,definition:r(zh),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:r(Jh),hardBreakEscape:r(ec),hardBreakTrailing:r(ec),htmlFlow:r(tc,o),htmlFlowData:_,htmlText:r(tc,o),htmlTextData:_,image:r(Bh),label:o,link:r(nc),listItem:r(Uh),listItemValue:h,listOrdered:r(ac,d),listUnordered:r(ac),paragraph:r(Fh),reference:v,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:r(qs),strong:r(Oh),thematicBreak:r(Xh)},exit:{atxHeading:s(),atxHeadingSequence:L,autolink:s(),autolinkEmail:Sn,autolinkProtocol:Tt,blockQuote:s(),characterEscapeValue:j,characterReferenceMarkerHexadecimal:it,characterReferenceMarkerNumeric:it,characterReferenceValue:ne,characterReference:pt,codeFenced:s(C),codeFencedFence:w,codeFencedFenceInfo:p,codeFencedFenceMeta:x,codeFlowValue:j,codeIndented:s(g),codeText:s(F),codeTextData:j,data:j,definition:s(),definitionDestinationString:k,definitionLabelString:m,definitionTitleString:b,emphasis:s(),hardBreakEscape:s(D),hardBreakTrailing:s(D),htmlFlow:s(Y),htmlFlowData:j,htmlText:s(le),htmlTextData:j,image:s(fe),label:H,labelText:R,lineEnding:T,link:s(he),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ye,resourceDestinationString:y,resourceTitleString:G,resource:K,setextHeading:s(Z),setextHeadingLineSequence:W,setextHeadingText:A,strong:s(),thematicBreak:s()}};Ch(t,(e||{}).mdastExtensions||[]);const n={};return a;function a(S){let I={type:"root",children:[]};const z={stack:[I],tokenStack:[],config:t,enter:l,exit:c,buffer:o,resume:u,data:n},Q=[];let ae=-1;for(;++ae<S.length;)if(S[ae][1].type==="listOrdered"||S[ae][1].type==="listUnordered")if(S[ae][0]==="enter")Q.push(ae);else{const ht=Q.pop();ae=i(S,ht,ae)}for(ae=-1;++ae<S.length;){const ht=t[S[ae][0]];Sh.call(ht,S[ae][1].type)&&ht[S[ae][1].type].call(Object.assign({sliceSerialize:S[ae][2].sliceSerialize},z),S[ae][1])}if(z.tokenStack.length>0){const ht=z.tokenStack[z.tokenStack.length-1];(ht[1]||Vu).call(z,void 0,ht[0])}for(I.position={start:Ht(S.length>0?S[0][1].start:{line:1,column:1,offset:0}),end:Ht(S.length>0?S[S.length-2][1].end:{line:1,column:1,offset:0})},ae=-1;++ae<t.transforms.length;)I=t.transforms[ae](I)||I;return I}function i(S,I,z){let Q=I-1,ae=-1,ht=!1,Pn,kt,fa,pa;for(;++Q<=z;){const Be=S[Q];switch(Be[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Be[0]==="enter"?ae++:ae--,pa=void 0;break}case"lineEndingBlank":{Be[0]==="enter"&&(Pn&&!pa&&!ae&&!fa&&(fa=Q),pa=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:pa=void 0}if(!ae&&Be[0]==="enter"&&Be[1].type==="listItemPrefix"||ae===-1&&Be[0]==="exit"&&(Be[1].type==="listUnordered"||Be[1].type==="listOrdered")){if(Pn){let Ln=Q;for(kt=void 0;Ln--;){const St=S[Ln];if(St[1].type==="lineEnding"||St[1].type==="lineEndingBlank"){if(St[0]==="exit")continue;kt&&(S[kt][1].type="lineEndingBlank",ht=!0),St[1].type="lineEnding",kt=Ln}else if(!(St[1].type==="linePrefix"||St[1].type==="blockQuotePrefix"||St[1].type==="blockQuotePrefixWhitespace"||St[1].type==="blockQuoteMarker"||St[1].type==="listItemIndent"))break}fa&&(!kt||fa<kt)&&(Pn._spread=!0),Pn.end=Object.assign({},kt?S[kt][1].start:Be[1].end),S.splice(kt||Q,0,["exit",Pn,Be[2]]),Q++,z++}if(Be[1].type==="listItemPrefix"){const Ln={type:"listItem",_spread:!1,start:Object.assign({},Be[1].start),end:void 0};Pn=Ln,S.splice(Q,0,["enter",Ln,Be[2]]),Q++,z++,fa=void 0,pa=!0}}}return S[I][1]._spread=ht,z}function r(S,I){return z;function z(Q){l.call(this,S(Q),Q),I&&I.call(this,Q)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(S,I,z){this.stack[this.stack.length-1].children.push(S),this.stack.push(S),this.tokenStack.push([I,z||void 0]),S.position={start:Ht(I.start),end:void 0}}function s(S){return I;function I(z){S&&S.call(this,z),c.call(this,z)}}function c(S,I){const z=this.stack.pop(),Q=this.tokenStack.pop();if(Q)Q[0].type!==S.type&&(I?I.call(this,S,Q[0]):(Q[1]||Vu).call(this,S,Q[0]));else throw new Error("Cannot close `"+S.type+"` ("+Ha({start:S.start,end:S.end})+"): it’s not open");z.position.end=Ht(S.end)}function u(){return Qb(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(S){if(this.data.expectingFirstListItemValue){const I=this.stack[this.stack.length-2];I.start=Number.parseInt(this.sliceSerialize(S),10),this.data.expectingFirstListItemValue=void 0}}function p(){const S=this.resume(),I=this.stack[this.stack.length-1];I.lang=S}function x(){const S=this.resume(),I=this.stack[this.stack.length-1];I.meta=S}function w(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function C(){const S=this.resume(),I=this.stack[this.stack.length-1];I.value=S.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const S=this.resume(),I=this.stack[this.stack.length-1];I.value=S.replace(/(\r?\n|\r)$/g,"")}function m(S){const I=this.resume(),z=this.stack[this.stack.length-1];z.label=I,z.identifier=$n(this.sliceSerialize(S)).toLowerCase()}function b(){const S=this.resume(),I=this.stack[this.stack.length-1];I.title=S}function k(){const S=this.resume(),I=this.stack[this.stack.length-1];I.url=S}function L(S){const I=this.stack[this.stack.length-1];if(!I.depth){const z=this.sliceSerialize(S).length;I.depth=z}}function A(){this.data.setextHeadingSlurpLineEnding=!0}function W(S){const I=this.stack[this.stack.length-1];I.depth=this.sliceSerialize(S).codePointAt(0)===61?1:2}function Z(){this.data.setextHeadingSlurpLineEnding=void 0}function _(S){const I=this.stack[this.stack.length-1].children;let z=I[I.length-1];(!z||z.type!=="text")&&(z=Gh(),z.position={start:Ht(S.start),end:void 0},I.push(z)),this.stack.push(z)}function j(S){const I=this.stack.pop();I.value+=this.sliceSerialize(S),I.position.end=Ht(S.end)}function T(S){const I=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=I.children[I.children.length-1];z.position.end=Ht(S.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(I.type)&&(_.call(this,S),j.call(this,S))}function D(){this.data.atHardBreak=!0}function Y(){const S=this.resume(),I=this.stack[this.stack.length-1];I.value=S}function le(){const S=this.resume(),I=this.stack[this.stack.length-1];I.value=S}function F(){const S=this.resume(),I=this.stack[this.stack.length-1];I.value=S}function he(){const S=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";S.type+="Reference",S.referenceType=I,delete S.url,delete S.title}else delete S.identifier,delete S.label;this.data.referenceType=void 0}function fe(){const S=this.stack[this.stack.length-1];if(this.data.inReference){const I=this.data.referenceType||"shortcut";S.type+="Reference",S.referenceType=I,delete S.url,delete S.title}else delete S.identifier,delete S.label;this.data.referenceType=void 0}function R(S){const I=this.sliceSerialize(S),z=this.stack[this.stack.length-2];z.label=ax(I),z.identifier=$n(I).toLowerCase()}function H(){const S=this.stack[this.stack.length-1],I=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const Q=S.children;z.children=Q}else z.alt=I}function y(){const S=this.resume(),I=this.stack[this.stack.length-1];I.url=S}function G(){const S=this.resume(),I=this.stack[this.stack.length-1];I.title=S}function K(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function ye(S){const I=this.resume(),z=this.stack[this.stack.length-1];z.label=I,z.identifier=$n(this.sliceSerialize(S)).toLowerCase(),this.data.referenceType="full"}function it(S){this.data.characterReferenceType=S.type}function ne(S){const I=this.sliceSerialize(S),z=this.data.characterReferenceType;let Q;z?(Q=ph(I,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Q=Fs(I);const ae=this.stack[this.stack.length-1];ae.value+=Q}function pt(S){const I=this.stack.pop();I.position.end=Ht(S.end)}function Tt(S){j.call(this,S);const I=this.stack[this.stack.length-1];I.url=this.sliceSerialize(S)}function Sn(S){j.call(this,S);const I=this.stack[this.stack.length-1];I.url="mailto:"+this.sliceSerialize(S)}function Cn(){return{type:"blockquote",children:[]}}function gi(){return{type:"code",lang:null,meta:null,value:""}}function _h(){return{type:"inlineCode",value:""}}function zh(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Jh(){return{type:"emphasis",children:[]}}function qs(){return{type:"heading",depth:0,children:[]}}function ec(){return{type:"break"}}function tc(){return{type:"html",value:""}}function Bh(){return{type:"image",title:null,url:"",alt:null}}function nc(){return{type:"link",title:null,url:"",children:[]}}function ac(S){return{type:"list",ordered:S.type==="listOrdered",start:null,spread:S._spread,children:[]}}function Uh(S){return{type:"listItem",spread:S._spread,checked:null,children:[]}}function Fh(){return{type:"paragraph",children:[]}}function Oh(){return{type:"strong",children:[]}}function Gh(){return{type:"text",value:""}}function Xh(){return{type:"thematicBreak"}}}function Ht(e){return{line:e.line,column:e.column,offset:e.offset}}function Ch(e,t){let n=-1;for(;++n<t.length;){const a=t[n];Array.isArray(a)?Ch(e,a):lx(e,a)}}function lx(e,t){let n;for(n in t)if(Sh.call(t,n))switch(n){case"canContainEols":{const a=t[n];a&&e[n].push(...a);break}case"transforms":{const a=t[n];a&&e[n].push(...a);break}case"enter":case"exit":{const a=t[n];a&&Object.assign(e[n],a);break}}}function Vu(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+Ha({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+Ha({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+Ha({start:t.start,end:t.end})+") is still open")}function sx(e){const t=this;t.parser=n;function n(a){return rx(a,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function cx(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function ux(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function dx(e,t){const n=t.value?t.value+`
`:"",a={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(a.className=["language-"+i[0]]);let r={type:"element",tagName:"code",properties:a,children:[{type:"text",value:n}]};return t.meta&&(r.data={meta:t.meta}),e.patch(t,r),r=e.applyData(t,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(t,r),r}function fx(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function px(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const Ku=hx(/[\dA-Za-z]/);function hx(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function da(e){const t=[];let n=-1,a=0,i=0;for(;++n<e.length;){const r=e.charCodeAt(n);let o="";if(r===37&&Ku(e.charCodeAt(n+1))&&Ku(e.charCodeAt(n+2)))i=2;else if(r<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(r))||(o=String.fromCharCode(r));else if(r>55295&&r<57344){const l=e.charCodeAt(n+1);r<56320&&l>56319&&l<57344?(o=String.fromCharCode(r,l),i=1):o="�"}else o=String.fromCharCode(r);o&&(t.push(e.slice(a,n),encodeURIComponent(o)),a=n+i+1,o=""),i&&(n+=i,i=0)}return t.join("")+e.slice(a)}function gx(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",a=String(t.identifier).toUpperCase(),i=da(a.toLowerCase()),r=e.footnoteOrder.indexOf(a);let o,l=e.footnoteCounts.get(a);l===void 0?(l=0,e.footnoteOrder.push(a),o=e.footnoteOrder.length):o=r+1,l+=1,e.footnoteCounts.set(a,l);const s={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+i,id:n+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,s);const c={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(t,c),e.applyData(t,c)}function mx(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yx(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Ph(e,t){const n=t.referenceType;let a="]";if(n==="collapsed"?a+="[]":n==="full"&&(a+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+a}];const i=e.all(t),r=i[0];r&&r.type==="text"?r.value="["+r.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=a:i.push({type:"text",value:a}),i}function bx(e,t){const n=String(t.identifier).toUpperCase(),a=e.definitionById.get(n);if(!a)return Ph(e,t);const i={src:da(a.url||""),alt:t.alt};a.title!==null&&a.title!==void 0&&(i.title=a.title);const r={type:"element",tagName:"img",properties:i,children:[]};return e.patch(t,r),e.applyData(t,r)}function vx(e,t){const n={src:da(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const a={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,a),e.applyData(t,a)}function xx(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const a={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,a),e.applyData(t,a)}function wx(e,t){const n=String(t.identifier).toUpperCase(),a=e.definitionById.get(n);if(!a)return Ph(e,t);const i={href:da(a.url||"")};a.title!==null&&a.title!==void 0&&(i.title=a.title);const r={type:"element",tagName:"a",properties:i,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ax(e,t){const n={href:da(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const a={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function kx(e,t,n){const a=e.all(t),i=n?Sx(n):Lh(t),r={},o=[];if(typeof t.checked=="boolean"){const u=a[0];let d;u&&u.type==="element"&&u.tagName==="p"?d=u:(d={type:"element",tagName:"p",properties:{},children:[]},a.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),r.className=["task-list-item"]}let l=-1;for(;++l<a.length;){const u=a[l];(i||l!==0||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?o.push(...u.children):o.push(u)}const s=a[a.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const c={type:"element",tagName:"li",properties:r,children:o};return e.patch(t,c),e.applyData(t,c)}function Sx(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let a=-1;for(;!t&&++a<n.length;)t=Lh(n[a])}return t}function Lh(e){return e.spread??e.children.length>1}function Cx(e,t){const n={},a=e.all(t);let i=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++i<a.length;){const o=a[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const r={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(a,!0)};return e.patch(t,r),e.applyData(t,r)}function Px(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Lx(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Nx(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Ex(e,t){const n=e.all(t),a=n.shift(),i=[];if(a){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([a],!0)};e.patch(t.children[0],o),i.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=zs(t.children[1]),s=oh(t.children[t.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o)}const r={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(t,r),e.applyData(t,r)}function Wx(e,t,n){const a=n?n.children:void 0,i=(a?a.indexOf(t):1)===0?"th":"td",r=n&&n.type==="table"?n.align:void 0,o=r?r.length:t.children.length;let l=-1;const s=[];for(;++l<o;){const u=t.children[l],d={},h=r?r[l]:void 0;h&&(d.align=h);let p={type:"element",tagName:i,properties:d,children:[]};u&&(p.children=e.all(u),e.patch(u,p),p=e.applyData(u,p)),s.push(p)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(t,c),e.applyData(t,c)}function Ix(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const $u=9,Qu=32;function Rx(e){const t=String(e),n=/\r?\n|\r/g;let a=n.exec(t),i=0;const r=[];for(;a;)r.push(qu(t.slice(i,a.index),i>0,!0),a[0]),i=a.index+a[0].length,a=n.exec(t);return r.push(qu(t.slice(i),i>0,!1)),r.join("")}function qu(e,t,n){let a=0,i=e.length;if(t){let r=e.codePointAt(a);for(;r===$u||r===Qu;)a++,r=e.codePointAt(a)}if(n){let r=e.codePointAt(i-1);for(;r===$u||r===Qu;)i--,r=e.codePointAt(i-1)}return i>a?e.slice(a,i):""}function Zx(e,t){const n={type:"text",value:Rx(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Mx(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const jx={blockquote:cx,break:ux,code:dx,delete:fx,emphasis:px,footnoteReference:gx,heading:mx,html:yx,imageReference:bx,image:vx,inlineCode:xx,linkReference:wx,link:Ax,listItem:kx,list:Cx,paragraph:Px,root:Lx,strong:Nx,table:Ex,tableCell:Ix,tableRow:Wx,text:Zx,thematicBreak:Mx,toml:Zi,yaml:Zi,definition:Zi,footnoteDefinition:Zi};function Zi(){}const Nh=-1,Or=0,za=1,Sr=2,Ys=3,Vs=4,Ks=5,$s=6,Eh=7,Wh=8,ed=typeof self=="object"?self:globalThis,Tx=(e,t)=>{const n=(i,r)=>(e.set(r,i),i),a=i=>{if(e.has(i))return e.get(i);const[r,o]=t[i];switch(r){case Or:case Nh:return n(o,i);case za:{const l=n([],i);for(const s of o)l.push(a(s));return l}case Sr:{const l=n({},i);for(const[s,c]of o)l[a(s)]=a(c);return l}case Ys:return n(new Date(o),i);case Vs:{const{source:l,flags:s}=o;return n(new RegExp(l,s),i)}case Ks:{const l=n(new Map,i);for(const[s,c]of o)l.set(a(s),a(c));return l}case $s:{const l=n(new Set,i);for(const s of o)l.add(a(s));return l}case Eh:{const{name:l,message:s}=o;return n(new ed[l](s),i)}case Wh:return n(BigInt(o),i);case"BigInt":return n(Object(BigInt(o)),i);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new ed[r](o),i)};return a},td=e=>Tx(new Map,e)(0),En="",{toString:Dx}={},{keys:Hx}=Object,ka=e=>{const t=typeof e;if(t!=="object"||!e)return[Or,t];const n=Dx.call(e).slice(8,-1);switch(n){case"Array":return[za,En];case"Object":return[Sr,En];case"Date":return[Ys,En];case"RegExp":return[Vs,En];case"Map":return[Ks,En];case"Set":return[$s,En];case"DataView":return[za,n]}return n.includes("Array")?[za,n]:n.includes("Error")?[Eh,n]:[Sr,n]},Mi=([e,t])=>e===Or&&(t==="function"||t==="symbol"),_x=(e,t,n,a)=>{const i=(o,l)=>{const s=a.push(o)-1;return n.set(l,s),s},r=o=>{if(n.has(o))return n.get(o);let[l,s]=ka(o);switch(l){case Or:{let u=o;switch(s){case"bigint":l=Wh,u=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);u=null;break;case"undefined":return i([Nh],o)}return i([l,u],o)}case za:{if(s){let h=o;return s==="DataView"?h=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(h=new Uint8Array(o)),i([s,[...h]],o)}const u=[],d=i([l,u],o);for(const h of o)u.push(r(h));return d}case Sr:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(t&&"toJSON"in o)return r(o.toJSON());const u=[],d=i([l,u],o);for(const h of Hx(o))(e||!Mi(ka(o[h])))&&u.push([r(h),r(o[h])]);return d}case Ys:return i([l,o.toISOString()],o);case Vs:{const{source:u,flags:d}=o;return i([l,{source:u,flags:d}],o)}case Ks:{const u=[],d=i([l,u],o);for(const[h,p]of o)(e||!(Mi(ka(h))||Mi(ka(p))))&&u.push([r(h),r(p)]);return d}case $s:{const u=[],d=i([l,u],o);for(const h of o)(e||!Mi(ka(h)))&&u.push(r(h));return d}}const{message:c}=o;return i([l,{name:s,message:c}],o)};return r},nd=(e,{json:t,lossy:n}={})=>{const a=[];return _x(!(t||n),!!t,new Map,a)(e),a},Cr=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?td(nd(e,t)):structuredClone(e):(e,t)=>td(nd(e,t));function zx(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function Jx(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function Bx(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||zx,a=e.options.footnoteBackLabel||Jx,i=e.options.footnoteLabel||"Footnotes",r=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const c=e.footnoteById.get(e.footnoteOrder[s]);if(!c)continue;const u=e.all(c),d=String(c.identifier).toUpperCase(),h=da(d.toLowerCase());let p=0;const x=[],w=e.footnoteCounts.get(d);for(;w!==void 0&&++p<=w;){x.length>0&&x.push({type:"text",value:" "});let m=typeof n=="string"?n:n(s,p);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof a=="string"?a:a(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const C=u[u.length-1];if(C&&C.type==="element"&&C.tagName==="p"){const m=C.children[C.children.length-1];m&&m.type==="text"?m.value+=" ":C.children.push({type:"text",value:" "}),C.children.push(...x)}else u.push(...x);const g={type:"element",tagName:"li",properties:{id:t+"fn-"+h},children:e.wrap(u,!0)};e.patch(c,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:r,properties:{...Cr(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Ih=function(e){if(e==null)return Gx;if(typeof e=="function")return Gr(e);if(typeof e=="object")return Array.isArray(e)?Ux(e):Fx(e);if(typeof e=="string")return Ox(e);throw new Error("Expected function, string, or object as test")};function Ux(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Ih(e[n]);return Gr(a);function a(...i){let r=-1;for(;++r<t.length;)if(t[r].apply(this,i))return!0;return!1}}function Fx(e){const t=e;return Gr(n);function n(a){const i=a;let r;for(r in e)if(i[r]!==t[r])return!1;return!0}}function Ox(e){return Gr(t);function t(n){return n&&n.type===e}}function Gr(e){return t;function t(n,a,i){return!!(Xx(n)&&e.call(this,n,typeof a=="number"?a:void 0,i||void 0))}}function Gx(){return!0}function Xx(e){return e!==null&&typeof e=="object"&&"type"in e}const Rh=[],Yx=!0,ad=!1,Vx="skip";function Kx(e,t,n,a){let i;typeof t=="function"&&typeof n!="function"?(a=n,n=t):i=t;const r=Ih(i),o=a?-1:1;l(e,void 0,[])();function l(s,c,u){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Rh,x,w,C;if((!t||r(s,c,u[u.length-1]||void 0))&&(p=$x(n(s,u)),p[0]===ad))return p;if("children"in s&&s.children){const g=s;if(g.children&&p[0]!==Vx)for(w=(a?g.children.length:-1)+o,C=u.concat(g);w>-1&&w<g.children.length;){const m=g.children[w];if(x=l(m,w,C)(),x[0]===ad)return x;w=typeof x[1]=="number"?x[1]:w+o}}return p}}}function $x(e){return Array.isArray(e)?e:typeof e=="number"?[Yx,e]:e==null?Rh:[e]}function Zh(e,t,n,a){let i,r,o;typeof t=="function"&&typeof n!="function"?(r=void 0,o=t,i=n):(r=t,o=n,i=a),Kx(e,r,l,i);function l(s,c){const u=c[c.length-1],d=u?u.children.indexOf(s):void 0;return o(s,d,u)}}const Tl={}.hasOwnProperty,Qx={};function qx(e,t){const n=t||Qx,a=new Map,i=new Map,r=new Map,o={...jx,...n.handlers},l={all:c,applyData:tw,definitionById:a,footnoteById:i,footnoteCounts:r,footnoteOrder:[],handlers:o,one:s,options:n,patch:ew,wrap:aw};return Zh(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const d=u.type==="definition"?a:i,h=String(u.identifier).toUpperCase();d.has(h)||d.set(h,u)}}),l;function s(u,d){const h=u.type,p=l.handlers[h];if(Tl.call(l.handlers,h)&&p)return p(l,u,d);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in u){const{children:x,...w}=u,C=Cr(w);return C.children=l.all(u),C}return Cr(u)}return(l.options.unknownHandler||nw)(l,u,d)}function c(u){const d=[];if("children"in u){const h=u.children;let p=-1;for(;++p<h.length;){const x=l.one(h[p],u);if(x){if(p&&h[p-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=id(x.value)),!Array.isArray(x)&&x.type==="element")){const w=x.children[0];w&&w.type==="text"&&(w.value=id(w.value))}Array.isArray(x)?d.push(...x):d.push(x)}}}return d}}function ew(e,t){e.position&&(t.position=Wb(e))}function tw(e,t){let n=t;if(e&&e.data){const a=e.data.hName,i=e.data.hChildren,r=e.data.hProperties;if(typeof a=="string")if(n.type==="element")n.tagName=a;else{const o="children"in n?n.children:[n];n={type:"element",tagName:a,properties:{},children:o}}n.type==="element"&&r&&Object.assign(n.properties,Cr(r)),"children"in n&&n.children&&i!==null&&i!==void 0&&(n.children=i)}return n}function nw(e,t){const n=t.data||{},a="value"in t&&!(Tl.call(n,"hProperties")||Tl.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function aw(e,t){const n=[];let a=-1;for(t&&n.push({type:"text",value:`
`});++a<e.length;)a&&n.push({type:"text",value:`
`}),n.push(e[a]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function id(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function rd(e,t){const n=qx(e,t),a=n.one(e,void 0),i=Bx(n),r=Array.isArray(a)?{type:"root",children:a}:a||{type:"root",children:[]};return i&&r.children.push({type:"text",value:`
`},i),r}function iw(e,t){return e&&"run"in e?async function(n,a){const i=rd(n,{file:a,...t});await e.run(i,a)}:function(n,a){return rd(n,{file:a,...e||t})}}function od(e){if(e)throw e}var Ki=Object.prototype.hasOwnProperty,Mh=Object.prototype.toString,ld=Object.defineProperty,sd=Object.getOwnPropertyDescriptor,cd=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Mh.call(e)==="[object Array]"},ud=function(e){if(!e||Mh.call(e)!=="[object Object]")return!1;var t=Ki.call(e,"constructor"),n=e.constructor&&e.constructor.prototype&&Ki.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!t&&!n)return!1;var a;for(a in e);return typeof a>"u"||Ki.call(e,a)},dd=function(e,t){ld&&t.name==="__proto__"?ld(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},fd=function(e,t){if(t==="__proto__")if(Ki.call(e,t)){if(sd)return sd(e,t).value}else return;return e[t]},rw=function e(){var t,n,a,i,r,o,l=arguments[0],s=1,c=arguments.length,u=!1;for(typeof l=="boolean"&&(u=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<c;++s)if(t=arguments[s],t!=null)for(n in t)a=fd(l,n),i=fd(t,n),l!==i&&(u&&i&&(ud(i)||(r=cd(i)))?(r?(r=!1,o=a&&cd(a)?a:[]):o=a&&ud(a)?a:{},dd(l,{name:n,newValue:e(u,o,i)})):typeof i<"u"&&dd(l,{name:n,newValue:i}));return l};const Po=zl(rw);function Dl(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function ow(){const e=[],t={run:n,use:a};return t;function n(...i){let r=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...c){const u=e[++r];let d=-1;if(s){o(s);return}for(;++d<i.length;)(c[d]===null||c[d]===void 0)&&(c[d]=i[d]);i=c,u?lw(u,l)(...c):o(null,...c)}}function a(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),t}}function lw(e,t){let n;return a;function a(...o){const l=e.length>o.length;let s;l&&o.push(i);try{s=e.apply(this,o)}catch(c){const u=c;if(l&&n)throw u;return i(u)}l||(s&&s.then&&typeof s.then=="function"?s.then(r,i):s instanceof Error?i(s):r(s))}function i(o,...l){n||(n=!0,t(o,...l))}function r(o){i(null,o)}}const yt={basename:sw,dirname:cw,extname:uw,join:dw,sep:"/"};function sw(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');hi(e);let n=0,a=-1,i=e.length,r;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(r){n=i+1;break}}else a<0&&(r=!0,a=i+1);return a<0?"":e.slice(n,a)}if(t===e)return"";let o=-1,l=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(r){n=i+1;break}}else o<0&&(r=!0,o=i+1),l>-1&&(e.codePointAt(i)===t.codePointAt(l--)?l<0&&(a=i):(l=-1,a=o));return n===a?a=o:a<0&&(a=e.length),e.slice(n,a)}function cw(e){if(hi(e),e.length===0)return".";let t=-1,n=e.length,a;for(;--n;)if(e.codePointAt(n)===47){if(a){t=n;break}}else a||(a=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function uw(e){hi(e);let t=e.length,n=-1,a=0,i=-1,r=0,o;for(;t--;){const l=e.codePointAt(t);if(l===47){if(o){a=t+1;break}continue}n<0&&(o=!0,n=t+1),l===46?i<0?i=t:r!==1&&(r=1):i>-1&&(r=-1)}return i<0||n<0||r===0||r===1&&i===n-1&&i===a+1?"":e.slice(i,n)}function dw(...e){let t=-1,n;for(;++t<e.length;)hi(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":fw(n)}function fw(e){hi(e);const t=e.codePointAt(0)===47;let n=pw(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function pw(e,t){let n="",a=0,i=-1,r=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||r===1))if(i!==o-1&&r===2){if(n.length<2||a!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(s=n.lastIndexOf("/"),s!==n.length-1){s<0?(n="",a=0):(n=n.slice(0,s),a=n.length-1-n.lastIndexOf("/")),i=o,r=0;continue}}else if(n.length>0){n="",a=0,i=o,r=0;continue}}t&&(n=n.length>0?n+"/..":"..",a=2)}else n.length>0?n+="/"+e.slice(i+1,o):n=e.slice(i+1,o),a=o-i-1;i=o,r=0}else l===46&&r>-1?r++:r=-1}return n}function hi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const hw={cwd:gw};function gw(){return"/"}function Hl(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function mw(e){if(typeof e=="string")e=new URL(e);else if(!Hl(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return yw(e)}function yw(e){if(e.hostname!==""){const a=new TypeError('File URL host must be "localhost" or empty on darwin');throw a.code="ERR_INVALID_FILE_URL_HOST",a}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const a=t.codePointAt(n+2);if(a===70||a===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(t)}const Lo=["history","path","basename","stem","extname","dirname"];class jh{constructor(t){let n;t?Hl(t)?n={path:t}:typeof t=="string"||bw(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":hw.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let a=-1;for(;++a<Lo.length;){const r=Lo[a];r in n&&n[r]!==void 0&&n[r]!==null&&(this[r]=r==="history"?[...n[r]]:n[r])}let i;for(i in n)Lo.includes(i)||(this[i]=n[i])}get basename(){return typeof this.path=="string"?yt.basename(this.path):void 0}set basename(t){Eo(t,"basename"),No(t,"basename"),this.path=yt.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?yt.dirname(this.path):void 0}set dirname(t){pd(this.basename,"dirname"),this.path=yt.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?yt.extname(this.path):void 0}set extname(t){if(No(t,"extname"),pd(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=yt.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Hl(t)&&(t=mw(t)),Eo(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?yt.basename(this.path,this.extname):void 0}set stem(t){Eo(t,"stem"),No(t,"stem"),this.path=yt.join(this.dirname||"",t+(this.extname||""))}fail(t,n,a){const i=this.message(t,n,a);throw i.fatal=!0,i}info(t,n,a){const i=this.message(t,n,a);return i.fatal=void 0,i}message(t,n,a){const i=new We(t,n,a);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function No(e,t){if(e&&e.includes(yt.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+yt.sep+"`")}function Eo(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function pd(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function bw(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const vw=function(e){const t=this.constructor.prototype,n=t[e],a=function(){return n.apply(a,arguments)};return Object.setPrototypeOf(a,t),a},xw={}.hasOwnProperty;class Qs extends vw{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=ow()}copy(){const t=new Qs;let n=-1;for(;++n<this.attachers.length;){const a=this.attachers[n];t.use(...a)}return t.data(Po(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(Ro("data",this.frozen),this.namespace[t]=n,this):xw.call(this.namespace,t)&&this.namespace[t]||void 0:t?(Ro("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...a]=this.attachers[this.freezeIndex];if(a[0]===!1)continue;a[0]===!0&&(a[0]=void 0);const i=n.call(t,...a);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=ji(t),a=this.parser||this.Parser;return Wo("parse",a),a(String(n),n)}process(t,n){const a=this;return this.freeze(),Wo("process",this.parser||this.Parser),Io("process",this.compiler||this.Compiler),n?i(void 0,n):new Promise(i);function i(r,o){const l=ji(t),s=a.parse(l);a.run(s,l,function(u,d,h){if(u||!d||!h)return c(u);const p=d,x=a.stringify(p,h);kw(x)?h.value=x:h.result=x,c(u,h)});function c(u,d){u||!d?o(u):r?r(d):n(void 0,d)}}}processSync(t){let n=!1,a;return this.freeze(),Wo("processSync",this.parser||this.Parser),Io("processSync",this.compiler||this.Compiler),this.process(t,i),gd("processSync","process",n),a;function i(r,o){n=!0,od(r),a=o}}run(t,n,a){hd(t),this.freeze();const i=this.transformers;return!a&&typeof n=="function"&&(a=n,n=void 0),a?r(void 0,a):new Promise(r);function r(o,l){const s=ji(n);i.run(t,s,c);function c(u,d,h){const p=d||t;u?l(u):o?o(p):a(void 0,p,h)}}}runSync(t,n){let a=!1,i;return this.run(t,n,r),gd("runSync","run",a),i;function r(o,l){od(o),i=l,a=!0}}stringify(t,n){this.freeze();const a=ji(n),i=this.compiler||this.Compiler;return Io("stringify",i),hd(t),i(t,a)}use(t,...n){const a=this.attachers,i=this.namespace;if(Ro("use",this.frozen),t!=null)if(typeof t=="function")s(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function r(c){if(typeof c=="function")s(c,[]);else if(typeof c=="object")if(Array.isArray(c)){const[u,...d]=c;s(u,d)}else o(c);else throw new TypeError("Expected usable value, not `"+c+"`")}function o(c){if(!("plugins"in c)&&!("settings"in c))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(c.plugins),c.settings&&(i.settings=Po(!0,i.settings,c.settings))}function l(c){let u=-1;if(c!=null)if(Array.isArray(c))for(;++u<c.length;){const d=c[u];r(d)}else throw new TypeError("Expected a list of plugins, not `"+c+"`")}function s(c,u){let d=-1,h=-1;for(;++d<a.length;)if(a[d][0]===c){h=d;break}if(h===-1)a.push([c,...u]);else if(u.length>0){let[p,...x]=u;const w=a[h][1];Dl(w)&&Dl(p)&&(p=Po(!0,w,p)),a[h]=[c,p,...x]}}}}const ww=new Qs().freeze();function Wo(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Io(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ro(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function hd(e){if(!Dl(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function gd(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function ji(e){return Aw(e)?e:new jh(e)}function Aw(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function kw(e){return typeof e=="string"||Sw(e)}function Sw(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Cw="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",md=[],yd={allowDangerousHtml:!0},Pw=/^(https?|ircs?|mailto|xmpp)$/i,Lw=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Th(e){const t=Nw(e),n=Ew(e);return Ww(t.runSync(t.parse(n),n),e)}function Nw(e){const t=e.rehypePlugins||md,n=e.remarkPlugins||md,a=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...yd}:yd;return ww().use(sx).use(n).use(iw,a).use(t)}function Ew(e){const t=e.children||"",n=new jh;return typeof t=="string"&&(n.value=t),n}function Ww(e,t){const n=t.allowedElements,a=t.allowElement,i=t.components,r=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,s=t.urlTransform||Iw;for(const u of Lw)Object.hasOwn(t,u.from)&&""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+Cw+u.id;return t.className&&(e={type:"element",tagName:"div",properties:{className:t.className},children:e.type==="root"?e.children:[e]}),Zh(e,c),jb(e,{Fragment:f.Fragment,components:i,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function c(u,d,h){if(u.type==="raw"&&h&&typeof d=="number")return o?h.children.splice(d,1):h.children[d]={type:"text",value:u.value},d;if(u.type==="element"){let p;for(p in ko)if(Object.hasOwn(ko,p)&&Object.hasOwn(u.properties,p)){const x=u.properties[p],w=ko[p];(w===null||w.includes(u.tagName))&&(u.properties[p]=s(String(x||""),p,u))}}if(u.type==="element"){let p=n?!n.includes(u.tagName):r?r.includes(u.tagName):!1;if(!p&&a&&typeof d=="number"&&(p=!a(u,d,h)),p&&h&&typeof d=="number")return l&&u.children?h.children.splice(d,1,...u.children):h.children.splice(d,1),d}}}function Iw(e){const t=e.indexOf(":"),n=e.indexOf("?"),a=e.indexOf("#"),i=e.indexOf("/");return t===-1||i!==-1&&t>i||n!==-1&&t>n||a!==-1&&t>a||Pw.test(e.slice(0,t))?e:""}const Dh=E.memo(function({post:e,formatDate:t}){const n=a=>a.toLowerCase().replace(/\s+/g,"-");return f.jsxs("div",{className:"news-item",children:[f.jsx("div",{className:"news-item__date",children:t(e.date)}),f.jsxs("div",{className:"news-item__content",children:[f.jsx(Th,{children:e.content}),(e.author||e.tags&&e.tags.length>0)&&f.jsxs("div",{className:"news-item__meta",children:[e.author&&f.jsx("span",{className:"news-item__author",children:f.jsx(Vn,{to:`${O.baseurl}/members#${e.author}`,children:e.author})}),e.tags&&e.tags.length>0&&f.jsxs(f.Fragment,{children:[e.author&&" | ",f.jsx("span",{className:"news-item__tags-label",children:"tags:"}),e.tags.map((a,i)=>f.jsxs(Vn,{to:`${O.baseurl}/tags/${n(a)}/`,variant:"tag",className:"news-item__tag",children:["#",a]},i))]})]})]})]})});Dh.displayName="NewsItem";const Hh=["Principal Investigator","Principal Research Fellow","Research Assistant Professor","Postdoctoral Scholar","Ph.D. Student","MPhil Student","Research Assistant"];function Rw(e){return e?e.replace(/ DOT /gi,".").replace(/ dot /gi,".").replace(/ Dot /gi,".").replace(/ AT /gi,"@").replace(/ at /gi,"@").replace(/ At /gi,"@"):null}function Zw(e){return e?e.replace("@"," at ").replace(/\./g," dot "):""}function Mw(e){return!!(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(t=>t&&t.trim()!==""))}function jw(e){const t={};return Hh.forEach(n=>{t[n]=e.filter(a=>a.position===n&&Mw(a)).sort((a,i)=>a.name.localeCompare(i.name))}),t}function Tw(e){if(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(n=>n&&n.trim()!==""))return!1;const t=(e.position||"").toLowerCase();return!((t.includes("srtp")||t.includes("intern")||t.includes("sep")||t.includes("visiting")||t.includes("high school"))&&!t.includes("affiliate"))}function Dw(e){return e.filter(Tw).sort((t,n)=>{const a=t.enddate&&t.enddate.length>0?t.enddate[t.enddate.length-1]:"";return(n.enddate&&n.enddate.length>0?n.enddate[n.enddate.length-1]:"").localeCompare(a)})}const _l=E.memo(function({member:e}){const[t,n]=E.useState(e.image),a=Rw(e.email),i=a?Zw(a):null,r=()=>{e.altimage&&n(e.altimage)},o=()=>{n(e.image)},l=[{key:"orcid",icon:"fingerprint",label:"ORCID",url:`http://orcid.org/${e.orcid}`,isButton:!1},{key:"linkedIn",icon:"work",label:"LinkedIn",url:`http://www.linkedin.com/in/${e.linkedIn}`,isButton:!1},{key:"UCSF",icon:"account_circle",label:"UCSF Profile",url:`http://profiles.ucsf.edu/${e.UCSF}`,isButton:!1},{key:"scholar",icon:"school",label:"Scholar",url:`http://scholar.google.com/citations?user=${e.scholar}`,isButton:!0},{key:"twitTer",icon:"chat",label:"Twitter",url:`http://twitter.com/${e.twitTer}`,isButton:!1},{key:"bsky",icon:"chat_bubble",label:"Bluesky",url:`https://bsky.app/profile/${e.bsky}`,isButton:!1},{key:"github",icon:"code",label:"GitHub",url:`http://github.com/${e.github}`,isButton:!1}].filter(u=>e[u.key]),s=l.filter(u=>u.isButton),c=l.filter(u=>!u.isButton);return f.jsxs($p,{className:"member-card",id:e.name,children:[f.jsx("div",{className:"member-card__photo-wrapper",children:f.jsx(Qp,{src:t,alt:e.name,className:"member-card__photo",onMouseEnter:r,onMouseLeave:o})}),f.jsxs("div",{className:"member-card__info",children:[f.jsx("h3",{className:"member-card__name",children:e.name}),e.pronouns&&f.jsx("p",{className:"member-card__position",children:e.pronouns}),(a||e.website)&&f.jsxs("div",{className:"member-card__contact",children:[i&&f.jsx("span",{className:"member-card__email",children:i}),e.website&&f.jsx(Vn,{href:e.website,external:!0,children:"Website"})]}),s.length>0&&f.jsx("div",{className:"member-card__buttons",children:s.map(u=>f.jsx(Vn,{href:u.url,external:!0,variant:"button",className:"member-card__button",children:u.label},u.key))}),c.length>0&&f.jsx("div",{className:"member-card__links",children:c.map(u=>f.jsxs(Vn,{href:u.url,external:!0,className:"member-card__link",children:[f.jsx("span",{className:"material-icons",children:u.icon}),u.label]},u.key))}),e.description&&f.jsx("div",{className:"member-card__description",children:f.jsx(Th,{children:e.description})})]})]})});_l.displayName="MemberCard";const Hw=[{filename:"2025-11-10-news.md",date:"2025-11-10",title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",link_title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",published:!0,layout:"post",group:"news",content:'Weixiong has a paper accepted to AAAI-2026, titled "MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training"',author:"",tags:[]},{filename:"2025-11-01-news.md",date:"2025-11-01",title:"Welcome Diao Xin to the lab as Postdoc",link_title:"Welcome Diao Xin to the lab as Postdoc",published:!0,layout:"post",group:"news",content:"Welcome Diao Xin to the lab as Postdoc",author:"",tags:[]},{filename:"2025-10-29-news.md",date:"2025-10-29",title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",link_title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",published:!0,layout:"post",group:"news",content:"Yan Zhu's work on a language model for PM2.5 and human health has been accepted to Environmental Science & Technology (a top journal in environmental science)",author:"",tags:[]},{filename:"2025-10-21-news.md",date:"2025-10-21",title:"Talk at 1st Asia Pacific Precision Oncology Conf",link_title:"Talk at 1st Asia Pacific Precision Oncology Conf",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a talk on Noncanonical circular RNAs as cancer diagnostic biomarkers at the [1st Asia Pacific Precision Oncology Conference](https://apacprecisiononcology.com) on 01/11/25",author:"",tags:[]},{filename:"2025-10-12-news.md",date:"2025-10-12",title:"The 10th Big Data Forum for Life and Health Sciences",link_title:"The 10th Big Data Forum for Life and Health Sciences",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a keynote talk at [The 10th Big Data Forum for Life and Health Sciences](https://ngdc.cncb.ac.cn/conference/bdf2025) on 15/10/25",author:"",tags:[]},{filename:"2025-09-01-news.md",date:"2025-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"",author:"",tags:[]},{filename:"2025-08-30-news.md",date:"2025-08-30",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Chunyu's paper, Adaptive control of dynamic networks, has been accepted to IEEE Trans on Network Science and Engineering",author:"",tags:[]},{filename:"2025-05-14-news.md",date:"2025-05-14",title:"Cracking the Code of Complex Diseases",link_title:"Cracking the Code of Complex Diseases",published:!0,layout:"post",group:"news",content:"[Cracking the Code of Complex Diseases](https://www.polyu.edu.hk/publications/excelximpact/en/issue/202516/cover-story/cracking-the-code-of-complex-diseases)",author:"",tags:[]},{filename:"2024-11-24-news.md",date:"2024-11-24",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to ACM Transactions on Intelligent Systems and Technology. The title is 'Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning'",author:"",tags:[]},{filename:"2024-11-01-join.md",date:"2024-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Huang Yin to the Lab as Research Fellow and Pan Chunyu as Postdoc!",author:"",tags:[]},{filename:"2024-10-01-join.md",date:"2024-10-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Chen Junyi to the Lab as RAP!",author:"",tags:[]},{filename:"2024-09-01-join.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Edao Abebe, Li Yixin, Han Nan, Wang Zhenqian, Wang Yuchuan and Zhang Jie to the Lab as PhD students!",author:"",tags:[]},{filename:"2024-09-01-news.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"We built our first foundation model on genomics, called dnaGrinder. A preprint of the manuscript on dnaGrinder is available at arXiv",author:"",tags:[]},{filename:"2024-09-01-promote.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan has been promoted to Principal Research Fellow, the highest rank in the research track. Congratulations, Shulan!",author:"",tags:[]},{filename:"2024-08-01-news.md",date:"2024-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has been appointed to the position of Associate Director of PolyU Academy of Interdisciplinary Research (PAIR)",author:"",tags:[]},{filename:"2024-05-01-news.md",date:"2024-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Welcome Zhang Chi to the Lab as PhD student!<br>Edao Abebe received <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span>',author:"",tags:[]},{filename:"2024-04-02-news.md",date:"2024-04-02",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to IJCAI-24. The title of the paper: Generalized taxonomy-guided graph neural networks",author:"",tags:[]},{filename:"2024-04-01-news.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Tu Yue to the Lab as Postdoc!",author:"",tags:[]},{filename:"2024-04-01-pub.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong published a paper with IEEE Transactions on Neural Networks and Learning Systems. The title of the paper: Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning",author:"",tags:[]},{filename:"2024-01-01-news.md",date:"2024-01-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Fu Qinghui and Ma Ke to the Lab as PhD students!",author:"",tags:[]},{filename:"2023-12-01-news.md",date:"2023-12-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Wang Zhenqian, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-join.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Wang Xin, a new coming postdoc, received PolyU Distinguished Postdoctoral Fellowship",author:"",tags:[]},{filename:"2023-11-01-join2.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Ma Ke, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-news.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on A neuroimaging-based precision medicine framework for depression was published online with Asian J Psychiatry",author:"",tags:[]},{filename:"2023-11-01-prestigious.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Weixiong was selected into the list of "Top 2% of Global Scientists"',author:"",tags:[]},{filename:"2023-09-01-pub.md",date:"2023-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on Total network controllability analysis discovers explainable drugs for Covid-19 treatment was published in Biology Direct",author:"",tags:[]},{filename:"2023-08-01-news.md",date:"2023-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan was promoted to Senior Research Fellow and took the position of STEM Lab manager",author:"",tags:[]},{filename:"2023-07-01-news.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong was interviewed on NOW NEWS, a Hong Kong TV news station, to discuss the newly funded RGC Strategic Target Grant (STG) funding on developing AI/genomic technologies to diagnose and treat major psychiatric disorders",author:"",tags:[]},{filename:"2023-07-01-promote.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong, as project PC, received RGC Strategic Target Grant (STG) funding (five years and $37 million) to develop AI, genomic and biomedical technologies for developing genetic and neuroimaging markers and integrative approaches for objective diagnosis and personalized therapy of major psychiatric disorders, including depression, schizophrenia, and bipolar disorder",author:"",tags:[]},{filename:"2023-07-01-pub.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on cancer-keeper genes as therapeutic targets published online with iScience, a Cell Press journal",author:"",tags:[]},{filename:"2023-05-01-news.md",date:"2023-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Dr. Qiu Shulan joined the lab as Research Fellow",author:"",tags:[]},{filename:"2023-04-01-news.md",date:"2023-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: Constructive learning meets homophily: Two birds with one stone",author:"",tags:[]},{filename:"2023-02-01-news.md",date:"2023-02-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: A survey of community detection approaches: From statistical modeling to deep learning",author:"",tags:[]},{filename:"2022-05-01-news.md",date:"2022-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong received Health and Medical Research Fund (HMRF, three years and $1.4 million) to study schizophrenia using systems biology approaches",author:"",tags:[]},{filename:"2025-2-01-join.md",date:"",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Tan Yejun, an RA in the lab, received both <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span> and <span class="fellowship-highlight">PolyU Presidential PhD Fellowship (PPPFS)</span>',author:"",tags:[]}],_w=Hw||[],zw=()=>{const[e,t]=E.useState([]);E.useEffect(()=>{const a=_w.filter(i=>i.group==="news"&&i.published!==!1).sort((i,r)=>i.date<r.date?1:i.date>r.date?-1:0);t(a)},[]);const n=a=>{if(!a)return"";const i=new Date(a),r=String(i.getDate()).padStart(2,"0"),o=String(i.getMonth()+1).padStart(2,"0"),l=String(i.getFullYear()).slice(-2);return`${r}/${o}/${l}`};return f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"news-container",children:e.map((a,i)=>f.jsx(Dh,{post:a,formatDate:n},i))})})},Jw=()=>f.jsx("div",{className:"md-main-content",children:f.jsxs("div",{className:"research-container",children:[f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Integrated innovative artificial intelligence, genomic, and biomedical technologies in healthcare: Objective diagnosis, personalized therapy, and determining the etiology of major mental disorders"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Strategic Topic Grant (STG), HKD $37.236M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop innovative AI and genomic technologies for objective diagnosis and personalized treatment of major psychiatric disorders, including major depressive disorder, schizophrenia and bipolar disorder."]}),f.jsx("img",{src:O.static("img/projects/fig1.png"),alt:"Project 1 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Unravelling the black box between air pollution and public health for transformative air quality management"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Theme-based Research Scheme (TRS), HKD $41.4M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Develop integrated approaches that address the global puzzle of what components drive PM2.5 health effects in different regions."}),f.jsx("li",{children:"Generate solid evidence of key PM2.5 toxic components and emission sources to specific index diseases as a foundation for making public policies."})]})]}),f.jsx("img",{src:O.static("img/projects/fig2.png"),alt:"Project 2 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Understanding the molecular mechanism linking mRNA decay and capping with post-transcriptional gene silencing"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," NSFC/RGC Collaborative Research Scheme (NSFC/RGC CRS), HKD $3.6M + RMB 3M"]}),f.jsxs("div",{className:"research-description logo-row",style:{textAlign:"center"},children:[f.jsx("img",{src:O.static("img/logo/nsfc.png"),alt:"NSFC",style:{maxWidth:"180px",height:"auto",margin:"6px",display:"inline-block"}}),f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})]}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Determine if and how the translation process leads to ct-siRNA generation."}),f.jsx("li",{children:"Determine the effects of the defects in mRNA capping on siRNA generation and its interconnection with the translational process."}),f.jsx("li",{children:"Reveal biological functions and mechanisms linking ct-siRNA biogenesis and PTGS of genes with plant stress responses."})]})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Subtyping and diagnosis of schizophrenia by systems-biology analytics"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," Health and Medical Research Fund (HMRF), HKD $1.420M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/hmrf.png"),alt:"HMRF",style:{maxWidth:"260px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Define objective subtypes of schizophrenia using systems-biology analytics and develop personalized therapy for schizophrenia treatment."]}),f.jsxs("div",{className:"research-description",children:[f.jsx("img",{src:O.static("img/projects/fig3.png"),alt:"Project 4 image A",style:{maxWidth:"100%",height:"auto",marginRight:"6px"}}),f.jsx("img",{src:O.static("img/projects/fig4.png"),alt:"Project 4 image B",style:{maxWidth:"100%",height:"auto"}})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"High-resolution single-cell multi-omics: Joint profiling of multiple types of biomolecules in the same single cell"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Collaborative Research Fund (CRF), HKD $6.412M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:O.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop an innovative technology for profiling DNA, RNA and proteins in the same single cell at the same time; apply the new technology to cancer research."]}),f.jsx("img",{src:O.static("img/projects/fig5.png"),alt:"Project 5 image",style:{maxWidth:"100%",height:"auto"}})]})]})]})}),bd=({html:e})=>f.jsx("li",{dangerouslySetInnerHTML:{__html:e}}),Bw=[{html:`<a href="book.html"><em>State-Space Search: Algorithms,
              Complexity, Extensions and Applications</em></a>,
          Springer, 1999. ISBN 0-387-98832-7`,text:`State-Space Search: Algorithms,
              Complexity, Extensions and Applications,
          Springer, 1999. ISBN 0-387-98832-7`}],Uw={2e3:{year:"2000",items:[{html:`
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
                Technology, 5(1):18, 2013.&nbsp;`}]},2022:{year:"2022",items:[{html:'<font face="Arial">D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2022/0293.pdf">RAW-GNN: Random Walk Aggregation based graph neural network</a>, <u><i>Proc 31-st Intern. Joint Conf. on AI</i></u> (IJCAI-22).</font>',text:"D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and W. Zhang, RAW-GNN: Random Walk Aggregation based graph neural network, Proc 31-st Intern. Joint Conf. on AI (IJCAI-22)."},{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, published online March 2022.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, published online March 2022."},{html:'<font face="Arial">P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, <strong>W. Zhang</strong>, <a href="https://pubmed.ncbi.nlm.nih.gov/34813484/">Graph Triple-Attention Network for Disease-Related LncRNA Prediction</a>, <u><i>IEEE Journal of Biomedical and Health Informatics</i></u>, 26(6):2839-49, 2022.</font>',text:"P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, W. Zhang, Graph Triple-Attention Network for Disease-Related LncRNA Prediction, IEEE Journal of Biomedical and Health Informatics, 26(6):2839-49, 2022."},{html:`<font face="Arial">Palavicini, J. P., L. Ding, M. Pan, <strong>S. Qiu</strong>, H. Wang, Q. Shen, J. L. Dupree and X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/36613677/">Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(1), 2022.</font>`,text:"Palavicini, J. P., L. Ding, M. Pan, S. Qiu, H. Wang, Q. Shen, J. L. Dupree and X. Han, Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks, International Journal of Molecular Sciences, 24(1), 2022."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2023:{year:"2023",items:[{html:'<font face="Arial">D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=YIcb3pR8ld">Contrastive learning meets homophily: Two birds with one stone</a>, <u><i>Conference on Machine Learning</i></u> (ICML-2023).</font>',text:"D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and W. Zhang, Contrastive learning meets homophily: Two birds with one stone, Conference on Machine Learning (ICML-2023)."},{html:'<font face="Arial">X. Wei, <strong>C. Pan</strong>, X. Zhang*, <strong>W. Zhang</strong>*, <a href="https://biologydirect.biomedcentral.com/articles/10.1186/s13062-023-00410-9">Total network controllability analysis discovers explainable drugs for Covid-19 treatment</a>, <u><i>Biology Direct</i></u>, 18(1):55, 2023.</font>',text:"X. Wei, C. Pan, X. Zhang*, W. Zhang*, Total network controllability analysis discovers explainable drugs for Covid-19 treatment, Biology Direct, 18(1):55, 2023."},{html:'<font face="Arial">X. Zhang*, <strong>C. Pan</strong>, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and <strong>W. Zhang</strong>*, <a href="https://pubmed.ncbi.nlm.nih.gov/37520717/">Cancer-keeper genes as therapeutic targets</a>, <u><i>iScience</i></u>, 26(8):107296, 2023.</font>',text:"X. Zhang*, C. Pan, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and W. Zhang*, Cancer-keeper genes as therapeutic targets, iScience, 26(8):107296, 2023."},{html:'<font face="Arial">D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, <strong>W. Zhang</strong>, <a href="hhttps://arxiv.org/pdf/2101.01669">A survey of community detection approaches: From statistical modeling to deep learning</a>, <u><i>IEEE Transactions on Knowledge and Data Engineering</i></u>, 35(2):1149-90, 2023.</font>',text:"D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, W. Zhang, A survey of community detection approaches: From statistical modeling to deep learning, IEEE Transactions on Knowledge and Data Engineering, 35(2):1149-90, 2023."},{html:'<font face="Arial">Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, <strong>W. Zhang</strong>, Z. Liu, X. Zhang, F. Wang*, <a href="https://pubmed.ncbi.nlm.nih.gov/37992593/">A neuroimaging-based precision medicine framework for depression</a>, <u><i>Asian Journal of Psychiatry</i></u>, 91:103803, 2023.</font>',text:"Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, W. Zhang, Z. Liu, X. Zhang, F. Wang*, A neuroimaging-based precision medicine framework for depression, Asian Journal of Psychiatry, 91:103803, 2023."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2024:{year:"2024",items:[{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, 35(4):4438-50, 2024.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, 35(4):4438-50, 2024."},{html:'<font face="Arial">D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=R8SolCx62K&referrer=%5Bthe%20profile%20of%20Zhen%20Wang%5D(%2Fprofile%3Fid%3D~Zhen_Wang11)">Exploitation of a latent mechanism in graph contrastive learning: Representation scattering</a>, <u><i>Proc 38-th Conference on Neural Information Processing Systems</i></u> (NeurIPS 2024).</font>',text:"D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, W. Zhang, Exploitation of a latent mechanism in graph contrastive learning: Representation scattering, Proc 38-th Conference on Neural Information Processing Systems (NeurIPS 2024)."},{html:'<font face="Arial">Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2024/289">Generalized taxonomy-guided graph neural networks</a>, <u><i>Proc 33-rd Intern. Joint Conf. on AI</i></u> (IJCAI-24).</font>',text:"Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and W. Zhang, Generalized taxonomy-guided graph neural networks, Proc 33-rd Intern. Joint Conf. on AI (IJCAI-24)."},{html:'<font face="Arial">Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, <strong>S. Qiu</strong>, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, <u><i>CCS Chemistry</i></u>, 6(11):2662-2670, 2024.</font>',text:"Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, S. Qiu, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, CCS Chemistry, 6(11):2662-2670, 2024."},{html:`<font face="Arial">X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, <strong>S. Qiu</strong>, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, <u><i>Chinese Chemical Letters</i></u>, 35(11):109653, 2024.</font>`,text:"X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, S. Qiu, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, Chinese Chemical Letters, 35(11):109653, 2024."}]},2025:{year:"2025",items:[{html:'<font face="Arial">L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and <strong>W. Zhang</strong>, <b>MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training</b>, AAAI-2026, 2025.</font>',text:"L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and W. Zhang, MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training, AAAI-2026, 2025."},{html:'<font face="Arial"><strong>Y. Zhu</strong>, S. Wang, Y. Han, Y. Lu, A. Xiong, <strong>S. Qiu</strong>, L. N. Jin, and <strong>W. Zhang</strong>, <a href="https://pubs.acs.org/doi/10.1021/acs.est.5c12915">A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant–Human Protein Interactions</a>, <u><i>Environmental Science &amp; Technology</i></u>, 2025, DOI: 10.1021/acs.est.5c12915.</font>',text:"Y. Zhu, S. Wang, Y. Han, Y. Lu, A. Xiong, S. Qiu, L. N. Jin, and W. Zhang, A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant–Human Protein Interactions, Environmental Science &amp; Technology, 2025, DOI: 10.1021/acs.est.5c12915."},{html:'<font face="Arial"><strong>C. Pan</strong>, X. Zhang, H. Zheng, Z. Su, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/document/11150536">Adaptive Control of Dynamic Networks</a>, <u><i>IEEE Transactions on Network Science and Engineering</i></u>, 14(8), 2025.</font>',text:"C. Pan, X. Zhang, H. Zheng, Z. Su, C. Zhang, W. Zhang, Adaptive Control of Dynamic Networks, IEEE Transactions on Network Science and Engineering, 14(8), 2025."},{html:'<font face="Arial">C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and <strong>W. Zhang</strong>, <a href="https://dl.acm.org/doi/abs/10.1145/3706115">Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning</a>, <u><i>ACM Trans. Intell. Syst. Technol</i></u>, 2025, 16(1):1-21.</font>',text:"C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and W. Zhang, Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning, ACM Trans. Intell. Syst. Technol, 2025, 16(1):1-21."},{html:'<font face="Arial">H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, <strong>W. Zhang</strong>, X. Zhang & F. Wang, <a href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-03850-4">Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia</a>, <u><i>BMC medicine</i></u>, 23(1):38, 2025.</font>',text:"H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, W. Zhang, X. Zhang & F. Wang, Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia, BMC medicine, 23(1):38, 2025."},{html:'<font face="Arial"><strong>Q. Zhao</strong>, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://arxiv.org/pdf/2409.15697.pdf">dnaGrinder: a lightweight and high-capacity genomic foundation model</a>, arXiv, 2024, https://arxiv.org/abs/2409.15697.</font>',text:"Q. Zhao, C. Zhang, W. Zhang, dnaGrinder: a lightweight and high-capacity genomic foundation model, arXiv, 2024, https://arxiv.org/abs/2409.15697."}]}},Fw={book:Bw,byYear:Uw},Ti=Fw,Ow=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"publications-container",children:f.jsxs("div",{className:"pub-list",children:[Ti.book.length>0&&f.jsx("div",{className:"pub-section",children:f.jsxs("font",{face:"Arial",children:[f.jsx("strong",{children:"Book"}),f.jsx("blockquote",{children:f.jsx("ul",{style:{listStyle:"none",padding:0},children:Ti.book.map((e,t)=>f.jsx(bd,{html:e.html},`book-${t}`))})}),f.jsx("hr",{})]})}),Object.keys(Ti.byYear).sort((e,t)=>parseInt(t)-parseInt(e)).map(e=>{const t=Ti.byYear[e];return t.items.length===0?null:f.jsxs("div",{className:"pub-year-section",children:[f.jsx("p",{children:f.jsx("font",{face:"Arial",children:f.jsxs("b",{children:[e,f.jsx("a",{name:e})]})})}),f.jsx("ul",{children:t.items.map((n,a)=>f.jsx(bd,{html:n.html},`${e}-${a}`))})]},e)})]})})}),Gw=()=>f.jsxs("div",{className:"software-container",children:[f.jsx("p",{className:"intro-text",children:"The software tools here were developed in the Zhang lab over many years by grant support from NSF, NIH, The Alzheimer's Association and Monsanto Corporation."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Computational Biology"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"AmpSeq-SSR"}),f.jsxs("div",{className:"software-description",children:["An accurate and efficient method for large-scale SSR genotyping and applications"," ","(",f.jsx("a",{href:`${O.baseurl}/software/AmpSeq-SSR-scripts.zip`,children:"software"}),","," ",f.jsx("a",{href:`${O.baseurl}/SSR_ST2.pdf`,children:"supplemental table"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRvial"}),f.jsxs("div",{className:"software-description",children:["A computational method and software package for detecting and characterizing microRNAs of diverse genomic origins"," ","(",f.jsx("a",{href:`${O.baseurl}/software/miRvial.tgz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"BlocBuster"}),f.jsxs("div",{className:"software-description",children:["An allele-specific and network-based GWAS method"," ","(",f.jsx("a",{href:"http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003766",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ","paper2,"," ",f.jsx("a",{href:"http://www.blocbuster.org",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"mgRF"}),f.jsxs("div",{className:"software-description",children:["Module-guided Random Forests for integration of genotypic variation and gene expression for analyzing complex traits"," ","(",f.jsx("a",{href:"http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1002956",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/mgrf.tar.bz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRank"}),f.jsxs("div",{className:"software-description",children:["MicroRNA prediction with a novel ranking algorithm based on random walks"," ","(",f.jsx("a",{href:"http://bioinformatics.oxfordjournals.org/content/24/13/i50.full",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/miRank.tgz`,children:"software and data files"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Qcut and HQcut"}),f.jsxs("div",{className:"software-description",children:["Finding communities in networks; also with scripts for visualizing clustering results and for constructing and clustering gene co-expression networks"," ","(",f.jsx("a",{href:"http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ",f.jsx("a",{href:"http://www.researchgate.net/publication/5500334_Identifying_network_communities_with_a_high_resolution",target:"_blank",rel:"noopener noreferrer",children:"paper2"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/qcut.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"WordSpy"}),f.jsx("div",{className:"software-description",children:"A steganalysis-based, genome scale motif finding method (software)"})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Rearrangement clustering"}),f.jsxs("div",{className:"software-description",children:["A method with application to gene expression analysis"," ","(",f.jsx("a",{href:"http://jmlr.org/papers/volume7/climer06a/climer06a.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:"http://cic.cs.wustl.edu/TSP_k/",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"DBTree"}),f.jsxs("div",{className:"software-description",children:["A bi-directional regression tree approach to modeling transcriptional regulation"," ","(",f.jsx("a",{href:"http://www.ncbi.nlm.nih.gov/pubmed/16303796?dopt=Abstract",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${O.baseurl}/software/bdtree-1.01.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Iterated loop matching"}),f.jsxs("div",{className:"software-description",children:["A method for RNA folding with pseudonots"," ","(",f.jsx("a",{href:`${O.baseurl}/software/ilm.tar.gz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Degenerate multiple PCR primers"}),f.jsxs("div",{className:"software-description",children:["A method for selecting degenerate multiple PCR primers"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/mips.zip",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Optimization and Search"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Cut-and-solve for the ATSP"}),f.jsxs("div",{className:"software-description",children:["(",f.jsx("a",{href:"http://www.cse.wustl.edu/~sclimer/i-right5.htm#download",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"MaxSolver"}),f.jsxs("div",{className:"software-description",children:["An exact max-SAT solver"," ","(",f.jsx("a",{href:"http://cic.cs.wustl.edu/maxsolver/index.htm",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Backbone guided WalkSAT"}),f.jsxs("div",{className:"software-description",children:["A method with dynamic noise strategy for SAT and Max-SAT"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/backboneGuidedSearch/bgwalksat/index.html",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]})]}),Xw=[{name:"Negesso, Abebe Edao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/AbebeEdao.jpg",position:"Ph.D. Student",description:"Abebe Edao earned a Bachelor of science degree in Medical Laboratory Technology and a Master's degree in Clinical Chemistry from Addis Ababa University, Ethiopia."},{name:"Deng Jing",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Dengjing.jpg",position:"Research Assistant",description:"She received her bachelor's degree from Southwest University of Science and Technology and her master's degree from Yanbian University. During her master's studies, she spent two years as an exchange student at the Institute of Cardiopulmonary Research, Capital Medical University. Her major is Biochemistry and Molecular Biology. She is currently working as a research assistant in Professor Zhang's group, focusing on molecular experiments and animal studies."},{name:"Junyi Chen, Ph.D.",startdate:["2024-10-07"],enddate:[""],image:"/img/members/ChenJunyi.jpg",position:"Research Assistant Professor",description:"Dr. CHEN  finished his Ph.D. in Computer Science at the City University of Hong Kong. His research focuses on the application of artificial intelligence in bioinformatics, including single-cell RNA-seq analysis, and sequence analysis",email:"jerry-junyi dot chen at polyu dot edu dot hk"},{name:"Li Yixin",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Liyixin.jpg",position:"Ph.D. Student",description:"Li Yixin obtained her bachelor's degree from Hubei University of Medicine and her master's degree in psychiatry and mental health from the First Clinical School of Wuhan University. She worked in Professor Zhang's bench group, focusing on research involving depression mouse models and related molecular mechanisms."},{name:"Zhao Qihang",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Qihangzhao.jpg",position:"Ph.D. Student",description:"Qihang holds a Bachelor’s degree in Computer Engineering from the University of Illinois Urbana-Champaign and a Master’s degree in Computer Science from Washington University in St. Louis. In the STEM Lab, Qihang focuses on genomic foundation models and deep learning approaches to tackle specific genomic challenges."},{name:"Shulan Qiu, Ph.D.",startdate:["2023-05-10"],enddate:[""],image:"/img/members/Qiushulan.jpg",position:"Principal Research Fellow",description:"As Lab Manager, Dr. Qiu received her Bachelor and Ph.D degrees in Beijing Normal University of Cell Biology. She worked as Associate Professor  in Beijing Anzhen Hospital Affiliated to Capital Medical University/Beijing Institute of Heart, Lung, and Blood Vessel Diseases (2016), then worked as Instructor in Sam and Ann Barshop Institute for Longevity and Aging Studies, University of Texas Health Science Center at San Antonio, US (2022). She has been as PI of  Youth Project and General Project of National Natural Science Foundation of China (NSFC), and as co-I in many other projects. She published  31 reviewed papers including 13 of h-index.",email:"shulan dot qiu at polyu dot edu dot hk"},{name:"Sun Canghao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Suncanghao.jpg",position:"Ph.D. Student",description:"He earned his bachelor's degree in Medical Laboratory Technology from Dalian Medical University. Currently, he is pursuing an MPhil under the supervision of Professor Zhang, focusing on molecular biology and computational biology."},{name:"Yue Tu, Ph.D.",startdate:["2024-06-17"],enddate:[""],image:"/img/members/TuYue.jpg",position:"Postdoctoral Scholar",description:'"Dr. Tu received his Bachelor’s, Master’s, and Ph.D. in Computer Application Technology from Northeastern University, under the supervision of Prof. QIAO Jianzhong and Prof. LIN Shukuan. His primary research interests include medical image analysis, computer-aided diagnosis, Magnetic Resonance Imaging, and neuroscience.'},{name:"Xin Diao, Ph.D.",startdate:["2025-11-01"],enddate:[""],image:"/img/members/DiaoXin.jpg",position:"Postdoctoral Scholar",description:"Dr. Diao received his Ph.D. in Chemistry from Hong Kong Baptist University, where he developed expertise in spatial multi-omics. At Prof. Zhang's lab, he now leverages this expertise to investigate the biology of depression through spatial proteomics."},{name:"Weixiong Zhang, Ph.D.",startdate:["2020-08-01"],enddate:[""],image:"/img/members/Zhangweixiong.jpg",position:"Principal Investigator",description:`**Background**:
- BS in Computer Engineering, Tsinghua University
- PhD in Computer Science, UCLA

**Position**:
- Hong Kong Global STEM Professor
- Chair Professor of Systems Biology and Artificial Intelligence
- Associate Director, [PolyU Academy of Interdisciplinary Research](https://www.polyu.edu.hk/pair/)

**Affiliation**:
- [Dept of Health Technology & Informatics](https://www.polyu.edu.hk/hti/)
- [Dept of Data Science & Artificial Intelligence](https://www.polyu.edu.hk/dsai/)
- [Dept of Computing](https://www.polyu.edu.hk/comp/)`,email:"weixiong dot zhang at polyu dot edu dot hk",scholar:"Minb5QMAAAAJ"},{name:"Fu QingHui",startdate:["2024-03-18"],enddate:[""],image:"/img/members/FuQinghui.jpg",position:"Ph.D. Student",description:"Fu Qinghui earned her bachelor's degree in Pharmacy from Shenzhen University and a master's degree in Medical Microbiology from The University of Manchester. Currently, in Zhang's lab, she is working on utilizing behavioral models and molecular methods to understand the neural and immunological mechanisms underlying depression."},{name:"Han Nan",startdate:["2024-05-01"],enddate:[""],image:"/img/members/HanNan.jpg",position:"Ph.D. Student",description:"Nan Han completed her Bachelor's degree in Bioinformatics at Harbin Medical University, where she researched enhancer and miRNA/lncRNA regulation with Prof. Juan Xu. She then earned her Master's degree in Bioinformatics from the Beijing Institute of Genomics, Chinese Academy of Sciences / China National Center for Bioinformation, conducting research on alternative splicing and their role in development with Prof. Zhaoqi Liu. Currently, in Prof. Zhang’s lab, she focuses on epigenetic signals and their role in depression."},{name:"Yin Huang, Ph.D.",startdate:["2024-05-01"],enddate:["2025-09-08"],image:"/img/members/HuangYin.jpg",position:"Research Fellow",description:"Dr. Huang finished his Ph.D. in Computational Biology at the University of Chinese Academy of Sciences, followed by postdoctoral research experience at Columbia University and the Guangzhou National Lab. His research has focused on developing computational methods and analyzing large-scale genomic and single-cell data."},{name:"Jiang Jiahao",startdate:["2025-01-15"],enddate:[""],image:"/img/members/JiangJiahao.jpg",position:"Ph.D. Student",description:"Jiahao earned his Bachelor's and Master's degrees in Clinical Medicine from Tongji University in China. During his studies, he developed a strong interest in cancer biology, particularly in the role of non-coding RNAs within tumor-derived exosomes. Under the guidance of Professor Zhang, Jiahao leverage advanced techniques to uncover potential biomarkers and therapeutic targets for cancer diagnosis and treatment."},{name:"Li Kang",startdate:["2022-09-01"],enddate:[""],image:"/img/members/LiKang.jpg",position:"Ph.D. Student",description:"Kang received his bachelor's degree in computer science and technology in Northeastern University in China and master's degree in Software Engineering in JiangNan University. He researches noncoding RNA and explainable AI in genomic model."},{name:"Ma Ke",startdate:["2024-01-01"],enddate:[""],image:"/img/members/MaKe.jpg",position:"Ph.D. Student",description:"Ke received his Bachelor's and Master's degrees in Mechanical Engineering from Nanjing University of Science and Technology and South China University of Technology, respectively. Then, he worked as an engineer in Zhongshan Ophthalmic Center, focusing on intelligent diagnosis of ophthalmic diseases based on EEG signals, clinical data and images. In Prof. ZHANG's lab, he is currently working on single-cell and spatial transcriptome-based disease mechanism studies."},{name:"Chunyu Pan, Ph.D.",startdate:["2024-05-01"],enddate:[""],image:"/img/members/PanChunyu.jpg",position:"Postdoctoral Scholar",description:"Dr. Pan earned his Ph.D. in Computer Science from Northeastern University. His research specializes in complex network theory and its applications in biological networks, with a particular focus on brain network alterations in various psychiatric disorders."},{name:"Peng Yuling",startdate:["2024-01-01"],enddate:[""],image:"/img/members/PengYuling.jpg",position:"Research Assistant",description:"Yuling PENG obtained her bachelor's degree from Southwest Medical University and her academic master's degree from Guangzhou Medical University. During her master's studies, she focused on basic research. Currently, she works as a research assistant in Professor Zhang's lab, where she primarily conducts molecular experiments and animal studies."},{name:"Qin Haoning",startdate:["2024-01-03"],enddate:[""],image:"/img/members/QinHaoning.jpg",position:"MPhil Student",description:"Haoning received her Bachelor of Science in Biochemistry from the University of Hong Kong (HKU). Her undergraduate studies laid the foundation for her interest in molecular biology and genetics. In Prof. Zhang's lab, Haoning employs a variety of molecular biology techniques to unravel the complex roles of non-coding RNAs in disease progression and brain function."},{name:"Tan Yejun",startdate:["2024-12-20"],enddate:[""],image:"/img/members/Tanyejun.jpg",position:"Ph.D. Student",description:`Yejun received his Bachelor's degree in Mathematical Biology (Genomics specialization) in University of Minnesota, Twin Cities (UMN). He is also an awardee of <span class=\\"fellowship-highlight\\">HKPFS</span> and <span class=\\"fellowship-highlight\\">PPPFS</span>. Under the guidance of Professor Zhang, Yejun is currently conducting research on epidemiology and non-coding RNA at the JC-STEM laboratory.`},{name:"Wang Weixu",startdate:["2022-09-01"],enddate:[""],image:"/img/members/WangWeixu.png",position:"Ph.D. Student",description:`"Weixu earned his Bachelor's and Master's degrees in Computer Science and Technology from Heilongjiang University of Science and Technology and Northeastern University, respectively.`},{name:"Wang Yuchuan",startdate:["2024-09-01"],enddate:[""],image:"/img/members/WangYuchuan.jpg",position:"Ph.D. Student",description:`"Yuchuan received his Bachelor's degree in Information Management and Information Systems from China University in Geosciences (Beijing). He then earned his Master's degree in Computer Science from Washington University in St. Louis, where he was advised by Prof. William YEOH and co-advised by Prof. Chein-Ju HO.`},{name:"Wang Zhenqian",startdate:["2024-09-01"],enddate:["2025-09-09"],image:"/img/members/WangZhenqian.png",position:"",description:"Zhenqian holds a Bachelor's degree in Statistics from Nanjing Agricultural University and a Master's degree in Epidemiology and Health Statistics from Sun Yat-sen University. He is currently focused on developing network-based GWAS methods to identify the allelic networks of disorders and utilizing these genetic biomarkers to subtype diseases."},{name:"Zeng Xianlin",startdate:["2024-12-09"],enddate:[""],image:"/img/members/ZengXianlin.jpg",position:"Ph.D. Student",description:"Xianlin received his Bachelor's degree in Biology at City University of Hong Kong and Master's in Bioinformatics at Johns Hopkins University. In Prof. Zhang's lab, Xianlin will maintain the animal model of depression and explore disease epigenomics in the process of depression intergenerational inheritance leveraging bioinformatics tools."},{name:"Zhang Chi",startdate:["2024-05-01"],enddate:["2025-09-09"],image:"/img/members/ZhangChi.jpg",position:"",description:"Chi received his Master's degree (2023) of Electronic Information Engineering at the University of Electronic Science and Technology of China, and Bachelor's degree (2020) of Communication Engineering from the North China Institute of Aerospace Engineering."},{name:"Zhang Fei",startdate:["2023-01-01"],enddate:[""],image:"/img/members/ZhangFei.png",position:"Ph.D. Student",description:"Zhang Fei earned a bachelor's degree from the School of Mathematics and Statistics, Central South University, and a master's degree from Weill Medical College of Cornell University. In Zhang's lab, she researches linkage disequilibrium, haplotype blocks, and SNP causality to develop novel GWAS models and uncover psychiatric disorder mechanisms."},{name:"Zhang Jie",startdate:["2024-09-01"],enddate:[""],image:"/img/members/ZhangJie.jpg",position:"Ph.D. Student",description:"Jie ZHANG received her  Bachelor's degree in clinical medicine and master's degree in clinical oncology from WuHan University, where she focused on the colorectal cancer basic research supervised by prof. Qibin SONG. In ZHANG lab, she will pay attention on the biogenesis and function of circular RNA."},{name:"Zhu Yan",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Zhuyan.jpg",position:"Ph.D. Student",description:"ZHU Yan earned her Bachelor's degree in Science from Jining University and her Master's degree in Science from Dalian Maritime University. Currently, she is enrolled in a joint dual-degree program organized by The Hong Kong Polytechnic University and Harbin Institute of Technology. Her research paper focuses on the prediction of protein-ligand interactions using deep learning. In Professor Zhang's lab, ZHU Yan will apply deep learning techniques to investigate the interactions between proteins and compounds of environmental pollutants, and delve into the underlying molecular mechanisms."},{name:"Zhu Yanan",startdate:["2023-12-27"],enddate:[""],image:"/img/members/ZhuYanan.jpg",position:"Research Assistant",description:"Yanan graduated with a master's degree from Zhengzhou University, focusing on research in chronic pain and circRNA. As a Research Assistant  in Prof. Zhang's lab, she is primarily responsible for administrative tasks. When needed, she also assists with animal and molecular experiments."}],vd=Xw||[],Yw=()=>{const[e,t]=E.useState({}),[n,a]=E.useState([]);return E.useEffect(()=>{const i=jw(vd);t(i);const r=Dw(vd);a(r)},[]),f.jsxs("div",{className:"members-container",children:[Hh.map(i=>{const r=e[i]||[];return r.length===0?null:f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[i,i!=="Principal Investigator"&&"s"]}),r.map(o=>f.jsx(_l,{member:o},o.name))]},i)}),n.length>0&&f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[f.jsx("span",{className:"material-icons position-title__icon",children:"school"}),"Alumni"]}),n.map(i=>f.jsx(_l,{member:i},i.name))]})]})},Vw=()=>f.jsxs("div",{className:"join-container",children:[f.jsx("p",{className:"intro-text",children:"We welcome applicants with backgrounds in Computer Science and Engineering, Biology, Computational Biology, Genomics, Biomedical Engineering, Medicine and related disciplines to join the Hong Kong Jockey Club STEM Laboratory of Genomics and AI in Healthcare."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Opportunities"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistant Professors"}),f.jsx("div",{className:"card-body",children:"Lead or co-lead projects at the interface of AI and genomics; mentor junior researchers."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"(Senior) Research Fellows"}),f.jsx("div",{className:"card-body",children:"Drive cutting-edge methods and applications; collaborate across computational and wet-lab teams."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Postdoctoral Fellows"}),f.jsx("div",{className:"card-body",children:"Develop algorithms, models and experiments for genomic medicine and AI for healthcare."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistants"}),f.jsx("div",{className:"card-body",children:"Support data analysis, software engineering and/or molecular experiments."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"PhD and Master's students"}),f.jsx("div",{className:"card-body",children:"Pursue graduate research in computational genomics, systems biology, and AI."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Undergraduate Interns"}),f.jsx("div",{className:"card-body",children:"Gain hands-on research experience in computational biology or molecular biology."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"About the Laboratory"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Computational Laboratory"}),f.jsx("div",{className:"card-body",children:"Cluster with CPUs, H100/A800/A6000 GPUs, file servers and petabyte-scale storage."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Molecular Biology Laboratory"}),f.jsx("div",{className:"card-body",children:"Instruments for genomics, cellular/molecular mechanism studies and conventional techniques."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Application"})}),f.jsxs("div",{className:"contact-box",children:["Prospective applicants may send inquiry to: ",f.jsx("strong",{children:"genomics@polyu.edu.hk"})]})]}),Kw=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"contact-container",children:f.jsx("div",{className:"contact-content",children:f.jsxs("p",{children:["Department of Health Technology and Informatics",f.jsx("br",{}),"Lee Shau Kee Building, Block Y520, The Hong Kong Polytechnic University",f.jsx("br",{}),"Yuk Choi Road, Hung Hom",f.jsx("br",{}),f.jsx("br",{}),f.jsx("strong",{children:"Email:"})," ",f.jsx("a",{href:"mailto:genomics@polyu.edu.hk",children:"genomics@polyu.edu.hk"}),f.jsx("br",{}),f.jsx("strong",{children:"Phone:"})," +852 3400 8567",f.jsx("br",{}),f.jsx("strong",{children:f.jsx("a",{style:{color:"#1e3a8a"},href:"https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E6%9D%8E%E5%85%86%E5%9F%BA%E6%A5%BC/@22.3060237,114.1808547,17z/data=!3m1!4b1!4m6!3m5!1s0x340400e7ea4cd421:0xc9fb261caeaaf54a!8m2!3d22.3060237!4d114.1808547!16s%2Fg%2F11b67ll0tq?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",children:"Google Map"})})]})})})}),$w=()=>f.jsx(I0,{children:f.jsxs(u0,{children:[f.jsx(Ct,{path:"/",element:f.jsx(R0,{})}),f.jsx(Ct,{path:"/news",element:f.jsx(zw,{})}),f.jsx(Ct,{path:"/research",element:f.jsx(Jw,{})}),f.jsx(Ct,{path:"/publications",element:f.jsx(Ow,{})}),f.jsx(Ct,{path:"/software",element:f.jsx(Gw,{})}),f.jsx(Ct,{path:"/members",element:f.jsx(Yw,{})}),f.jsx(Ct,{path:"/join",element:f.jsx(Vw,{})}),f.jsx(Ct,{path:"/contact",element:f.jsx(Kw,{})})]})}),Qw="/";Zo.createRoot(document.getElementById("root")).render(f.jsx(Wd.StrictMode,{children:f.jsx(S0,{basename:Qw,children:f.jsx($w,{})})}));
