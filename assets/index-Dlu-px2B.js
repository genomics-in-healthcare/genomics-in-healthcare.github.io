function Hh(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var $i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gd={exports:{}},Pa={},md={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var si=Symbol.for("react.element"),_h=Symbol.for("react.portal"),Bh=Symbol.for("react.fragment"),zh=Symbol.for("react.strict_mode"),Jh=Symbol.for("react.profiler"),Fh=Symbol.for("react.provider"),Uh=Symbol.for("react.context"),Oh=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Xh=Symbol.for("react.memo"),Yh=Symbol.for("react.lazy"),au=Symbol.iterator;function Vh(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var yd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wd=Object.assign,xd={};function or(e,n,t){this.props=e,this.context=n,this.refs=xd,this.updater=t||yd}or.prototype.isReactComponent={};or.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};or.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function vd(){}vd.prototype=or.prototype;function Jl(e,n,t){this.props=e,this.context=n,this.refs=xd,this.updater=t||yd}var Fl=Jl.prototype=new vd;Fl.constructor=Jl;wd(Fl,or.prototype);Fl.isPureReactComponent=!0;var ou=Array.isArray,Ad=Object.prototype.hasOwnProperty,Ul={current:null},Sd={key:!0,ref:!0,__self:!0,__source:!0};function bd(e,n,t){var r,i={},a=null,o=null;if(n!=null)for(r in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Ad.call(n,r)&&!Sd.hasOwnProperty(r)&&(i[r]=n[r]);var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:si,type:e,key:a,ref:o,props:i,_owner:Ul.current}}function Qh(e,n){return{$$typeof:si,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===si}function Kh(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var lu=/\/+/g;function Xa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?Kh(""+e.key):n.toString(36)}function Hi(e,n,t,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case si:case _h:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Xa(o,0):r,ou(i)?(t="",e!=null&&(t=e.replace(lu,"$&/")+"/"),Hi(i,n,t,"",function(u){return u})):i!=null&&(Ol(i)&&(i=Qh(i,t+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(lu,"$&/")+"/")+e)),n.push(i)),1;if(o=0,r=r===""?".":r+":",ou(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Xa(a,l);o+=Hi(a,n,t,s,i)}else if(s=Vh(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Xa(a,l++),o+=Hi(a,n,t,s,i);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function yi(e,n,t){if(e==null)return e;var r=[],i=0;return Hi(e,r,"","",function(a){return n.call(t,a,i++)}),r}function $h(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},_i={transition:null},qh={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:_i,ReactCurrentOwner:Ul};function kd(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:yi,forEach:function(e,n,t){yi(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return yi(e,function(){n++}),n},toArray:function(e){return yi(e,function(n){return n})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=or;F.Fragment=Bh;F.Profiler=Jh;F.PureComponent=Jl;F.StrictMode=zh;F.Suspense=Gh;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh;F.act=kd;F.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=wd({},e.props),i=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Ul.current),n.key!==void 0&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Ad.call(n,s)&&!Sd.hasOwnProperty(s)&&(r[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)r.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:si,type:e.type,key:i,ref:a,props:r,_owner:o}};F.createContext=function(e){return e={$$typeof:Uh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fh,_context:e},e.Consumer=e};F.createElement=bd;F.createFactory=function(e){var n=bd.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:Oh,render:e}};F.isValidElement=Ol;F.lazy=function(e){return{$$typeof:Yh,_payload:{_status:-1,_result:e},_init:$h}};F.memo=function(e,n){return{$$typeof:Xh,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=_i.transition;_i.transition={};try{e()}finally{_i.transition=n}};F.unstable_act=kd;F.useCallback=function(e,n){return Me.current.useCallback(e,n)};F.useContext=function(e){return Me.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};F.useEffect=function(e,n){return Me.current.useEffect(e,n)};F.useId=function(){return Me.current.useId()};F.useImperativeHandle=function(e,n,t){return Me.current.useImperativeHandle(e,n,t)};F.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return Me.current.useMemo(e,n)};F.useReducer=function(e,n,t){return Me.current.useReducer(e,n,t)};F.useRef=function(e){return Me.current.useRef(e)};F.useState=function(e){return Me.current.useState(e)};F.useSyncExternalStore=function(e,n,t){return Me.current.useSyncExternalStore(e,n,t)};F.useTransition=function(){return Me.current.useTransition()};F.version="18.3.1";md.exports=F;var N=md.exports;const Cd=zl(N),eg=Hh({__proto__:null,default:Cd},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=N,tg=Symbol.for("react.element"),rg=Symbol.for("react.fragment"),ig=Object.prototype.hasOwnProperty,ag=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,og={key:!0,ref:!0,__self:!0,__source:!0};function Pd(e,n,t){var r,i={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(r in n)ig.call(n,r)&&!og.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps,n)i[r]===void 0&&(i[r]=n[r]);return{$$typeof:tg,type:e,key:a,ref:o,props:i,_owner:ag.current}}Pa.Fragment=rg;Pa.jsx=Pd;Pa.jsxs=Pd;gd.exports=Pa;var f=gd.exports,Mo={},Ld={exports:{}},Qe={},Ed={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,H){var y=R.length;R.push(H);e:for(;0<y;){var X=y-1>>>1,$=R[X];if(0<i($,H))R[X]=H,R[y]=$,y=X;else break e}}function t(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var H=R[0],y=R.pop();if(y!==H){R[0]=y;e:for(var X=0,$=R.length,v=$>>>1;X<v;){var we=2*(X+1)-1,on=R[we],re=we+1,gn=R[re];if(0>i(on,y))re<$&&0>i(gn,on)?(R[X]=gn,R[re]=y,X=re):(R[X]=on,R[we]=y,X=we);else if(re<$&&0>i(gn,y))R[X]=gn,R[re]=y,X=re;else break e}}return H}function i(R,H){var y=R.sortIndex-H.sortIndex;return y!==0?y:R.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,h=3,p=!1,x=!1,A=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(R){for(var H=t(u);H!==null;){if(H.callback===null)r(u);else if(H.startTime<=R)r(u),H.sortIndex=H.expirationTime,n(s,H);else break;H=t(u)}}function b(R){if(A=!1,w(R),!x)if(t(s)!==null)x=!0,he(P);else{var H=t(u);H!==null&&fe(b,H.startTime-R)}}function P(R,H){x=!1,A&&(A=!1,g(M),M=-1),p=!0;var y=h;try{for(w(H),d=t(s);d!==null&&(!(d.expirationTime>H)||R&&!T());){var X=d.callback;if(typeof X=="function"){d.callback=null,h=d.priorityLevel;var $=X(d.expirationTime<=H);H=e.unstable_now(),typeof $=="function"?d.callback=$:d===t(s)&&r(s),w(H)}else r(s);d=t(s)}if(d!==null)var v=!0;else{var we=t(u);we!==null&&fe(b,we.startTime-H),v=!1}return v}finally{d=null,h=y,p=!1}}var S=!1,I=null,M=-1,_=5,D=-1;function T(){return!(e.unstable_now()-D<_)}function j(){if(I!==null){var R=e.unstable_now();D=R;var H=!0;try{H=I(!0,R)}finally{H?Q():(S=!1,I=null)}}else S=!1}var Q;if(typeof m=="function")Q=function(){m(j)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,O=le.port2;le.port1.onmessage=j,Q=function(){O.postMessage(null)}}else Q=function(){k(j,0)};function he(R){I=R,S||(S=!0,Q())}function fe(R,H){M=k(function(){R(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,he(P))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var y=h;h=H;try{return R()}finally{h=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,H){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var y=h;h=R;try{return H()}finally{h=y}},e.unstable_scheduleCallback=function(R,H,y){var X=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?X+y:X):y=X,R){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=y+$,R={id:c++,callback:H,priorityLevel:R,startTime:y,expirationTime:$,sortIndex:-1},y>X?(R.sortIndex=y,n(u,R),t(s)===null&&R===t(u)&&(A?(g(M),M=-1):A=!0,fe(b,y-X))):(R.sortIndex=$,n(s,R),x||p||(x=!0,he(P))),R},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(R){var H=h;return function(){var y=h;h=H;try{return R.apply(this,arguments)}finally{h=y}}}})(Nd);Ed.exports=Nd;var lg=Ed.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sg=N,Ve=lg;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,Jr={};function St(e,n){qt(e,n),qt(e+"Capture",n)}function qt(e,n){for(Jr[e]=n,e=0;e<n.length;e++)Id.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zo=Object.prototype.hasOwnProperty,ug=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},uu={};function cg(e){return Zo.call(uu,e)?!0:Zo.call(su,e)?!1:ug.test(e)?uu[e]=!0:(su[e]=!0,!1)}function dg(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fg(e,n,t,r){if(n===null||typeof n>"u"||dg(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function Ze(e,n,t,r,i,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new Ze(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Gl,Xl);Ce[n]=new Ze(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Gl,Xl);Ce[n]=new Ze(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Gl,Xl);Ce[n]=new Ze(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,n,t,r){var i=Ce.hasOwnProperty(n)?Ce[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(fg(n,t,i,r)&&(t=null),r||i===null?cg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Tn=sg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wi=Symbol.for("react.element"),Rt=Symbol.for("react.portal"),Mt=Symbol.for("react.fragment"),Vl=Symbol.for("react.strict_mode"),Do=Symbol.for("react.profiler"),Wd=Symbol.for("react.provider"),Rd=Symbol.for("react.context"),Ql=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),jo=Symbol.for("react.suspense_list"),Kl=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Md=Symbol.for("react.offscreen"),cu=Symbol.iterator;function gr(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ya;function Cr(e){if(Ya===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ya=n&&n[1]||""}return`
`+Ya+e}var Va=!1;function Qa(e,n){if(!e||Va)return"";Va=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var r=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){r=u}e.call(n.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,l=a.length-1;1<=o&&0<=l&&i[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==a[l]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{Va=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Cr(e):""}function pg(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=Qa(e.type,!1),e;case 11:return e=Qa(e.type.render,!1),e;case 1:return e=Qa(e.type,!0),e;default:return""}}function Ho(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mt:return"Fragment";case Rt:return"Portal";case Do:return"Profiler";case Vl:return"StrictMode";case To:return"Suspense";case jo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Rd:return(e.displayName||"Context")+".Consumer";case Wd:return(e._context.displayName||"Context")+".Provider";case Ql:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kl:return n=e.displayName||null,n!==null?n:Ho(e.type)||"Memo";case Bn:n=e._payload,e=e._init;try{return Ho(e(n))}catch{}}return null}function hg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ho(n);case 8:return n===Vl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function tt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gg(e){var n=Zd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xi(e){e._valueTracker||(e._valueTracker=gg(e))}function Dd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Zd(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function qi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _o(e,n){var t=n.checked;return ce({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function du(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=tt(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Td(e,n){n=n.checked,n!=null&&Yl(e,"checked",n,!1)}function Bo(e,n){Td(e,n);var t=tt(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?zo(e,n.type,t):n.hasOwnProperty("defaultValue")&&zo(e,n.type,tt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function zo(e,n,t){(n!=="number"||qi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Pr=Array.isArray;function Ut(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+tt(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Jo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return ce({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(Pr(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:tt(t)}}function jd(e,n){var t=tt(n.value),r=tt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function hu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Hd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Hd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Fr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mg=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){mg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ir[n]=Ir[e]})});function Bd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+n).trim():n+"px"}function zd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=Bd(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var yg=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uo(e,n){if(n){if(yg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function Oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Ot=null,Gt=null;function gu(e){if(e=di(e)){if(typeof Xo!="function")throw Error(L(280));var n=e.stateNode;n&&(n=Wa(n),Xo(e.stateNode,e.type,n))}}function Jd(e){Ot?Gt?Gt.push(e):Gt=[e]:Ot=e}function Fd(){if(Ot){var e=Ot,n=Gt;if(Gt=Ot=null,gu(e),n)for(e=0;e<n.length;e++)gu(n[e])}}function Ud(e,n){return e(n)}function Od(){}var Ka=!1;function Gd(e,n,t){if(Ka)return e(n,t);Ka=!0;try{return Ud(e,n,t)}finally{Ka=!1,(Ot!==null||Gt!==null)&&(Od(),Fd())}}function Ur(e,n){var t=e.stateNode;if(t===null)return null;var r=Wa(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var Yo=!1;if(Rn)try{var mr={};Object.defineProperty(mr,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",mr,mr),window.removeEventListener("test",mr,mr)}catch{Yo=!1}function wg(e,n,t,r,i,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Wr=!1,ea=null,na=!1,Vo=null,xg={onError:function(e){Wr=!0,ea=e}};function vg(e,n,t,r,i,a,o,l,s){Wr=!1,ea=null,wg.apply(xg,arguments)}function Ag(e,n,t,r,i,a,o,l,s){if(vg.apply(this,arguments),Wr){if(Wr){var u=ea;Wr=!1,ea=null}else throw Error(L(198));na||(na=!0,Vo=u)}}function bt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Xd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mu(e){if(bt(e)!==e)throw Error(L(188))}function Sg(e){var n=e.alternate;if(!n){if(n=bt(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===t)return mu(i),e;if(a===r)return mu(i),n;a=a.sibling}throw Error(L(188))}if(t.return!==r.return)t=i,r=a;else{for(var o=!1,l=i.child;l;){if(l===t){o=!0,t=i,r=a;break}if(l===r){o=!0,r=i,t=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===t){o=!0,t=a,r=i;break}if(l===r){o=!0,r=a,t=i;break}l=l.sibling}if(!o)throw Error(L(189))}}if(t.alternate!==r)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function Yd(e){return e=Sg(e),e!==null?Vd(e):null}function Vd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Vd(e);if(n!==null)return n;e=e.sibling}return null}var Qd=Ve.unstable_scheduleCallback,yu=Ve.unstable_cancelCallback,bg=Ve.unstable_shouldYield,kg=Ve.unstable_requestPaint,pe=Ve.unstable_now,Cg=Ve.unstable_getCurrentPriorityLevel,ql=Ve.unstable_ImmediatePriority,Kd=Ve.unstable_UserBlockingPriority,ta=Ve.unstable_NormalPriority,Pg=Ve.unstable_LowPriority,$d=Ve.unstable_IdlePriority,La=null,An=null;function Lg(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:Ig,Eg=Math.log,Ng=Math.LN2;function Ig(e){return e>>>=0,e===0?32:31-(Eg(e)/Ng|0)|0}var Ai=64,Si=4194304;function Lr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ra(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~i;l!==0?r=Lr(l):(a&=o,a!==0&&(r=Lr(a)))}else o=t&~i,o!==0?r=Lr(o):a!==0&&(r=Lr(a));if(r===0)return 0;if(n!==0&&n!==r&&!(n&i)&&(i=r&-r,a=n&-n,i>=a||i===16&&(a&4194240)!==0))return n;if(r&4&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-fn(n),i=1<<t,r|=e[t],n&=~i;return r}function Wg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rg(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-fn(a),l=1<<o,s=i[o];s===-1?(!(l&t)||l&r)&&(i[o]=Wg(l,n)):s<=n&&(e.expiredLanes|=l),a&=~l}}function Qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function qd(){var e=Ai;return Ai<<=1,!(Ai&4194240)&&(Ai=64),e}function $a(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ui(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-fn(n),e[n]=t}function Mg(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-fn(t),a=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~a}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-fn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var K=0;function ef(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nf,ns,tf,rf,af,Ko=!1,bi=[],Xn=null,Yn=null,Vn=null,Or=new Map,Gr=new Map,Jn=[],Zg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,n){switch(e){case"focusin":case"focusout":Xn=null;break;case"dragenter":case"dragleave":Yn=null;break;case"mouseover":case"mouseout":Vn=null;break;case"pointerover":case"pointerout":Or.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(n.pointerId)}}function yr(e,n,t,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},n!==null&&(n=di(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Dg(e,n,t,r,i){switch(n){case"focusin":return Xn=yr(Xn,e,n,t,r,i),!0;case"dragenter":return Yn=yr(Yn,e,n,t,r,i),!0;case"mouseover":return Vn=yr(Vn,e,n,t,r,i),!0;case"pointerover":var a=i.pointerId;return Or.set(a,yr(Or.get(a)||null,e,n,t,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Gr.set(a,yr(Gr.get(a)||null,e,n,t,r,i)),!0}return!1}function of(e){var n=ft(e.target);if(n!==null){var t=bt(n);if(t!==null){if(n=t.tag,n===13){if(n=Xd(t),n!==null){e.blockedOn=n,af(e.priority,function(){tf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Bi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$o(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Go=r,t.target.dispatchEvent(r),Go=null}else return n=di(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function xu(e,n,t){Bi(e)&&t.delete(n)}function Tg(){Ko=!1,Xn!==null&&Bi(Xn)&&(Xn=null),Yn!==null&&Bi(Yn)&&(Yn=null),Vn!==null&&Bi(Vn)&&(Vn=null),Or.forEach(xu),Gr.forEach(xu)}function wr(e,n){e.blockedOn===n&&(e.blockedOn=null,Ko||(Ko=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,Tg)))}function Xr(e){function n(i){return wr(i,e)}if(0<bi.length){wr(bi[0],e);for(var t=1;t<bi.length;t++){var r=bi[t];r.blockedOn===e&&(r.blockedOn=null)}}for(Xn!==null&&wr(Xn,e),Yn!==null&&wr(Yn,e),Vn!==null&&wr(Vn,e),Or.forEach(n),Gr.forEach(n),t=0;t<Jn.length;t++)r=Jn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)of(t),t.blockedOn===null&&Jn.shift()}var Xt=Tn.ReactCurrentBatchConfig,ia=!0;function jg(e,n,t,r){var i=K,a=Xt.transition;Xt.transition=null;try{K=1,ts(e,n,t,r)}finally{K=i,Xt.transition=a}}function Hg(e,n,t,r){var i=K,a=Xt.transition;Xt.transition=null;try{K=4,ts(e,n,t,r)}finally{K=i,Xt.transition=a}}function ts(e,n,t,r){if(ia){var i=$o(e,n,t,r);if(i===null)so(e,n,r,aa,t),wu(e,r);else if(Dg(i,e,n,t,r))r.stopPropagation();else if(wu(e,r),n&4&&-1<Zg.indexOf(e)){for(;i!==null;){var a=di(i);if(a!==null&&nf(a),a=$o(e,n,t,r),a===null&&so(e,n,r,aa,t),a===i)break;i=a}i!==null&&r.stopPropagation()}else so(e,n,r,null,t)}}var aa=null;function $o(e,n,t,r){if(aa=null,e=$l(r),e=ft(e),e!==null)if(n=bt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Xd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return aa=e,null}function lf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cg()){case ql:return 1;case Kd:return 4;case ta:case Pg:return 16;case $d:return 536870912;default:return 16}default:return 16}}var Un=null,rs=null,zi=null;function sf(){if(zi)return zi;var e,n=rs,t=n.length,r,i="value"in Un?Un.value:Un.textContent,a=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===i[a-r];r++);return zi=i.slice(e,1<r?1-r:void 0)}function Ji(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function vu(){return!1}function Ke(e){function n(t,r,i,a,o){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?ki:vu,this.isPropagationStopped=vu,this}return ce(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),n}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},is=Ke(lr),ci=ce({},lr,{view:0,detail:0}),_g=Ke(ci),qa,eo,xr,Ea=ce({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xr&&(xr&&e.type==="mousemove"?(qa=e.screenX-xr.screenX,eo=e.screenY-xr.screenY):eo=qa=0,xr=e),qa)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),Au=Ke(Ea),Bg=ce({},Ea,{dataTransfer:0}),zg=Ke(Bg),Jg=ce({},ci,{relatedTarget:0}),no=Ke(Jg),Fg=ce({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=Ke(Fg),Og=ce({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=Ke(Og),Xg=ce({},lr,{data:0}),Su=Ke(Xg),Yg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qg[e])?!!n[e]:!1}function as(){return Kg}var $g=ce({},ci,{key:function(e){if(e.key){var n=Yg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ji(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?Ji(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ji(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qg=Ke($g),em=ce({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Ke(em),nm=ce({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),tm=Ke(nm),rm=ce({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),im=Ke(rm),am=ce({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=Ke(am),lm=[9,13,27,32],os=Rn&&"CompositionEvent"in window,Rr=null;Rn&&"documentMode"in document&&(Rr=document.documentMode);var sm=Rn&&"TextEvent"in window&&!Rr,uf=Rn&&(!os||Rr&&8<Rr&&11>=Rr),ku=" ",Cu=!1;function cf(e,n){switch(e){case"keyup":return lm.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Zt=!1;function um(e,n){switch(e){case"compositionend":return df(n);case"keypress":return n.which!==32?null:(Cu=!0,ku);case"textInput":return e=n.data,e===ku&&Cu?null:e;default:return null}}function cm(e,n){if(Zt)return e==="compositionend"||!os&&cf(e,n)?(e=sf(),zi=rs=Un=null,Zt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uf&&n.locale!=="ko"?null:n.data;default:return null}}var dm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dm[e.type]:n==="textarea"}function ff(e,n,t,r){Jd(r),n=oa(n,"onChange"),0<n.length&&(t=new is("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var Mr=null,Yr=null;function fm(e){bf(e,0)}function Na(e){var n=jt(e);if(Dd(n))return e}function pm(e,n){if(e==="change")return n}var pf=!1;if(Rn){var to;if(Rn){var ro="oninput"in document;if(!ro){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),ro=typeof Lu.oninput=="function"}to=ro}else to=!1;pf=to&&(!document.documentMode||9<document.documentMode)}function Eu(){Mr&&(Mr.detachEvent("onpropertychange",hf),Yr=Mr=null)}function hf(e){if(e.propertyName==="value"&&Na(Yr)){var n=[];ff(n,Yr,e,$l(e)),Gd(fm,n)}}function hm(e,n,t){e==="focusin"?(Eu(),Mr=n,Yr=t,Mr.attachEvent("onpropertychange",hf)):e==="focusout"&&Eu()}function gm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na(Yr)}function mm(e,n){if(e==="click")return Na(n)}function ym(e,n){if(e==="input"||e==="change")return Na(n)}function wm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:wm;function Vr(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!Zo.call(n,i)||!hn(e[i],n[i]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,n){var t=Nu(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Nu(t)}}function gf(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?gf(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function mf(){for(var e=window,n=qi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=qi(e.document)}return n}function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xm(e){var n=mf(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&gf(t.ownerDocument.documentElement,t)){if(r!==null&&ls(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Iu(t,a);var o=Iu(t,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=Rn&&"documentMode"in document&&11>=document.documentMode,Dt=null,qo=null,Zr=null,el=!1;function Wu(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;el||Dt==null||Dt!==qi(r)||(r=Dt,"selectionStart"in r&&ls(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&Vr(Zr,r)||(Zr=r,r=oa(qo,"onSelect"),0<r.length&&(n=new is("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Dt)))}function Ci(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Tt={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},io={},yf={};Rn&&(yf=document.createElement("div").style,"AnimationEvent"in window||(delete Tt.animationend.animation,delete Tt.animationiteration.animation,delete Tt.animationstart.animation),"TransitionEvent"in window||delete Tt.transitionend.transition);function Ia(e){if(io[e])return io[e];if(!Tt[e])return e;var n=Tt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in yf)return io[e]=n[t];return e}var wf=Ia("animationend"),xf=Ia("animationiteration"),vf=Ia("animationstart"),Af=Ia("transitionend"),Sf=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,n){Sf.set(e,n),St(n,[e])}for(var ao=0;ao<Ru.length;ao++){var oo=Ru[ao],Am=oo.toLowerCase(),Sm=oo[0].toUpperCase()+oo.slice(1);it(Am,"on"+Sm)}it(wf,"onAnimationEnd");it(xf,"onAnimationIteration");it(vf,"onAnimationStart");it("dblclick","onDoubleClick");it("focusin","onFocus");it("focusout","onBlur");it(Af,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);St("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));St("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));St("onBeforeInput",["compositionend","keypress","textInput","paste"]);St("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));St("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));St("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Mu(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Ag(r,n,void 0,e),e.currentTarget=null}function bf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var a=void 0;if(n)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&i.isPropagationStopped())break e;Mu(i,l,u),a=s}else for(o=0;o<r.length;o++){if(l=r[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&i.isPropagationStopped())break e;Mu(i,l,u),a=s}}}if(na)throw e=Vo,na=!1,Vo=null,e}function ie(e,n){var t=n[al];t===void 0&&(t=n[al]=new Set);var r=e+"__bubble";t.has(r)||(kf(n,e,2,!1),t.add(r))}function lo(e,n,t){var r=0;n&&(r|=4),kf(t,e,r,n)}var Pi="_reactListening"+Math.random().toString(36).slice(2);function Qr(e){if(!e[Pi]){e[Pi]=!0,Id.forEach(function(t){t!=="selectionchange"&&(bm.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pi]||(n[Pi]=!0,lo("selectionchange",!1,n))}}function kf(e,n,t,r){switch(lf(n)){case 1:var i=jg;break;case 4:i=Hg;break;default:i=ts}t=i.bind(null,n,t,e),i=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function so(e,n,t,r,i){var a=r;if(!(n&1)&&!(n&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;l!==null;){if(o=ft(l),o===null)return;if(s=o.tag,s===5||s===6){r=a=o;continue e}l=l.parentNode}}r=r.return}Gd(function(){var u=a,c=$l(t),d=[];e:{var h=Sf.get(e);if(h!==void 0){var p=is,x=e;switch(e){case"keypress":if(Ji(t)===0)break e;case"keydown":case"keyup":p=qg;break;case"focusin":x="focus",p=no;break;case"focusout":x="blur",p=no;break;case"beforeblur":case"afterblur":p=no;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=tm;break;case wf:case xf:case vf:p=Ug;break;case Af:p=im;break;case"scroll":p=_g;break;case"wheel":p=om;break;case"copy":case"cut":case"paste":p=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=bu}var A=(n&4)!==0,k=!A&&e==="scroll",g=A?h!==null?h+"Capture":null:h;A=[];for(var m=u,w;m!==null;){w=m;var b=w.stateNode;if(w.tag===5&&b!==null&&(w=b,g!==null&&(b=Ur(m,g),b!=null&&A.push(Kr(m,b,w)))),k)break;m=m.return}0<A.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:A}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&t!==Go&&(x=t.relatedTarget||t.fromElement)&&(ft(x)||x[Mn]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?ft(x):null,x!==null&&(k=bt(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(A=Au,b="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=bu,b="onPointerLeave",g="onPointerEnter",m="pointer"),k=p==null?h:jt(p),w=x==null?h:jt(x),h=new A(b,m+"leave",p,t,c),h.target=k,h.relatedTarget=w,b=null,ft(c)===u&&(A=new A(g,m+"enter",x,t,c),A.target=w,A.relatedTarget=k,b=A),k=b,p&&x)n:{for(A=p,g=x,m=0,w=A;w;w=It(w))m++;for(w=0,b=g;b;b=It(b))w++;for(;0<m-w;)A=It(A),m--;for(;0<w-m;)g=It(g),w--;for(;m--;){if(A===g||g!==null&&A===g.alternate)break n;A=It(A),g=It(g)}A=null}else A=null;p!==null&&Zu(d,h,p,A,!1),x!==null&&k!==null&&Zu(d,k,x,A,!0)}}e:{if(h=u?jt(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=pm;else if(Pu(h))if(pf)P=ym;else{P=gm;var S=hm}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=mm);if(P&&(P=P(e,u))){ff(d,P,t,c);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&zo(h,"number",h.value)}switch(S=u?jt(u):window,e){case"focusin":(Pu(S)||S.contentEditable==="true")&&(Dt=S,qo=u,Zr=null);break;case"focusout":Zr=qo=Dt=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Wu(d,t,c);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":Wu(d,t,c)}var I;if(os)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Zt?cf(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(uf&&t.locale!=="ko"&&(Zt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Zt&&(I=sf()):(Un=c,rs="value"in Un?Un.value:Un.textContent,Zt=!0)),S=oa(u,M),0<S.length&&(M=new Su(M,e,null,t,c),d.push({event:M,listeners:S}),I?M.data=I:(I=df(t),I!==null&&(M.data=I)))),(I=sm?um(e,t):cm(e,t))&&(u=oa(u,"onBeforeInput"),0<u.length&&(c=new Su("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=I))}bf(d,n)})}function Kr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function oa(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Ur(e,t),a!=null&&r.unshift(Kr(e,a,i)),a=Ur(e,n),a!=null&&r.push(Kr(e,a,i))),e=e.return}return r}function It(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Zu(e,n,t,r,i){for(var a=n._reactName,o=[];t!==null&&t!==r;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=Ur(t,a),s!=null&&o.unshift(Kr(t,s,l))):i||(s=Ur(t,a),s!=null&&o.push(Kr(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var km=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(Cm,"")}function Li(e,n,t){if(n=Du(n),Du(e)!==n&&t)throw Error(L(425))}function la(){}var nl=null,tl=null;function rl(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Lm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(Em)}:il;function Em(e){setTimeout(function(){throw e})}function uo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),Xr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);Xr(n)}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),xn="__reactFiber$"+sr,$r="__reactProps$"+sr,Mn="__reactContainer$"+sr,al="__reactEvents$"+sr,Nm="__reactListeners$"+sr,Im="__reactHandles$"+sr;function ft(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ju(e);e!==null;){if(t=e[xn])return t;e=ju(e)}return n}e=t,t=e.parentNode}return null}function di(e){return e=e[xn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function jt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Wa(e){return e[$r]||null}var ol=[],Ht=-1;function at(e){return{current:e}}function ae(e){0>Ht||(e.current=ol[Ht],ol[Ht]=null,Ht--)}function ne(e,n){Ht++,ol[Ht]=e.current,e.current=n}var rt={},Ne=at(rt),He=at(!1),yt=rt;function er(e,n){var t=e.type.contextTypes;if(!t)return rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in t)i[a]=n[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function _e(e){return e=e.childContextTypes,e!=null}function sa(){ae(He),ae(Ne)}function Hu(e,n,t){if(Ne.current!==rt)throw Error(L(168));ne(Ne,n),ne(He,t)}function Cf(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(L(108,hg(e)||"Unknown",i));return ce({},t,r)}function ua(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||rt,yt=Ne.current,ne(Ne,e),ne(He,He.current),!0}function _u(e,n,t){var r=e.stateNode;if(!r)throw Error(L(169));t?(e=Cf(e,n,yt),r.__reactInternalMemoizedMergedChildContext=e,ae(He),ae(Ne),ne(Ne,e)):ae(He),ne(He,t)}var En=null,Ra=!1,co=!1;function Pf(e){En===null?En=[e]:En.push(e)}function Wm(e){Ra=!0,Pf(e)}function ot(){if(!co&&En!==null){co=!0;var e=0,n=K;try{var t=En;for(K=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}En=null,Ra=!1}catch(i){throw En!==null&&(En=En.slice(e+1)),Qd(ql,ot),i}finally{K=n,co=!1}}return null}var _t=[],Bt=0,ca=null,da=0,$e=[],qe=0,wt=null,Nn=1,In="";function ut(e,n){_t[Bt++]=da,_t[Bt++]=ca,ca=e,da=n}function Lf(e,n,t){$e[qe++]=Nn,$e[qe++]=In,$e[qe++]=wt,wt=e;var r=Nn;e=In;var i=32-fn(r)-1;r&=~(1<<i),t+=1;var a=32-fn(n)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nn=1<<32-fn(n)+i|t<<i|r,In=a+e}else Nn=1<<a|t<<i|r,In=e}function ss(e){e.return!==null&&(ut(e,1),Lf(e,1,0))}function us(e){for(;e===ca;)ca=_t[--Bt],_t[Bt]=null,da=_t[--Bt],_t[Bt]=null;for(;e===wt;)wt=$e[--qe],$e[qe]=null,In=$e[--qe],$e[qe]=null,Nn=$e[--qe],$e[qe]=null}var Ye=null,Ge=null,oe=!1,dn=null;function Ef(e,n){var t=nn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Bu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ye=e,Ge=Qn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ye=e,Ge=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=wt!==null?{id:Nn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=nn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ye=e,Ge=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(oe){var n=Ge;if(n){var t=n;if(!Bu(e,n)){if(ll(e))throw Error(L(418));n=Qn(t.nextSibling);var r=Ye;n&&Bu(e,n)?Ef(r,t):(e.flags=e.flags&-4097|2,oe=!1,Ye=e)}}else{if(ll(e))throw Error(L(418));e.flags=e.flags&-4097|2,oe=!1,Ye=e}}}function zu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function Ei(e){if(e!==Ye)return!1;if(!oe)return zu(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!rl(e.type,e.memoizedProps)),n&&(n=Ge)){if(ll(e))throw Nf(),Error(L(418));for(;n;)Ef(e,n),n=Qn(n.nextSibling)}if(zu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Ge=Qn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Ge=null}}else Ge=Ye?Qn(e.stateNode.nextSibling):null;return!0}function Nf(){for(var e=Ge;e;)e=Qn(e.nextSibling)}function nr(){Ge=Ye=null,oe=!1}function cs(e){dn===null?dn=[e]:dn.push(e)}var Rm=Tn.ReactCurrentBatchConfig;function vr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var r=t.stateNode}if(!r)throw Error(L(147,e));var i=r,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var l=i.refs;o===null?delete l[a]:l[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function Ni(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ju(e){var n=e._init;return n(e._payload)}function If(e){function n(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=et(g,m),g.index=0,g.sibling=null,g}function a(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,w,b){return m===null||m.tag!==6?(m=wo(w,g.mode,b),m.return=g,m):(m=i(m,w),m.return=g,m)}function s(g,m,w,b){var P=w.type;return P===Mt?c(g,m,w.props.children,b,w.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bn&&Ju(P)===m.type)?(b=i(m,w.props),b.ref=vr(g,m,w),b.return=g,b):(b=Vi(w.type,w.key,w.props,null,g.mode,b),b.ref=vr(g,m,w),b.return=g,b)}function u(g,m,w,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=xo(w,g.mode,b),m.return=g,m):(m=i(m,w.children||[]),m.return=g,m)}function c(g,m,w,b,P){return m===null||m.tag!==7?(m=mt(w,g.mode,b,P),m.return=g,m):(m=i(m,w),m.return=g,m)}function d(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wo(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case wi:return w=Vi(m.type,m.key,m.props,null,g.mode,w),w.ref=vr(g,null,m),w.return=g,w;case Rt:return m=xo(m,g.mode,w),m.return=g,m;case Bn:var b=m._init;return d(g,b(m._payload),w)}if(Pr(m)||gr(m))return m=mt(m,g.mode,w,null),m.return=g,m;Ni(g,m)}return null}function h(g,m,w,b){var P=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return P!==null?null:l(g,m,""+w,b);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case wi:return w.key===P?s(g,m,w,b):null;case Rt:return w.key===P?u(g,m,w,b):null;case Bn:return P=w._init,h(g,m,P(w._payload),b)}if(Pr(w)||gr(w))return P!==null?null:c(g,m,w,b,null);Ni(g,w)}return null}function p(g,m,w,b,P){if(typeof b=="string"&&b!==""||typeof b=="number")return g=g.get(w)||null,l(m,g,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case wi:return g=g.get(b.key===null?w:b.key)||null,s(m,g,b,P);case Rt:return g=g.get(b.key===null?w:b.key)||null,u(m,g,b,P);case Bn:var S=b._init;return p(g,m,w,S(b._payload),P)}if(Pr(b)||gr(b))return g=g.get(w)||null,c(m,g,b,P,null);Ni(m,b)}return null}function x(g,m,w,b){for(var P=null,S=null,I=m,M=m=0,_=null;I!==null&&M<w.length;M++){I.index>M?(_=I,I=null):_=I.sibling;var D=h(g,I,w[M],b);if(D===null){I===null&&(I=_);break}e&&I&&D.alternate===null&&n(g,I),m=a(D,m,M),S===null?P=D:S.sibling=D,S=D,I=_}if(M===w.length)return t(g,I),oe&&ut(g,M),P;if(I===null){for(;M<w.length;M++)I=d(g,w[M],b),I!==null&&(m=a(I,m,M),S===null?P=I:S.sibling=I,S=I);return oe&&ut(g,M),P}for(I=r(g,I);M<w.length;M++)_=p(I,g,M,w[M],b),_!==null&&(e&&_.alternate!==null&&I.delete(_.key===null?M:_.key),m=a(_,m,M),S===null?P=_:S.sibling=_,S=_);return e&&I.forEach(function(T){return n(g,T)}),oe&&ut(g,M),P}function A(g,m,w,b){var P=gr(w);if(typeof P!="function")throw Error(L(150));if(w=P.call(w),w==null)throw Error(L(151));for(var S=P=null,I=m,M=m=0,_=null,D=w.next();I!==null&&!D.done;M++,D=w.next()){I.index>M?(_=I,I=null):_=I.sibling;var T=h(g,I,D.value,b);if(T===null){I===null&&(I=_);break}e&&I&&T.alternate===null&&n(g,I),m=a(T,m,M),S===null?P=T:S.sibling=T,S=T,I=_}if(D.done)return t(g,I),oe&&ut(g,M),P;if(I===null){for(;!D.done;M++,D=w.next())D=d(g,D.value,b),D!==null&&(m=a(D,m,M),S===null?P=D:S.sibling=D,S=D);return oe&&ut(g,M),P}for(I=r(g,I);!D.done;M++,D=w.next())D=p(I,g,M,D.value,b),D!==null&&(e&&D.alternate!==null&&I.delete(D.key===null?M:D.key),m=a(D,m,M),S===null?P=D:S.sibling=D,S=D);return e&&I.forEach(function(j){return n(g,j)}),oe&&ut(g,M),P}function k(g,m,w,b){if(typeof w=="object"&&w!==null&&w.type===Mt&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case wi:e:{for(var P=w.key,S=m;S!==null;){if(S.key===P){if(P=w.type,P===Mt){if(S.tag===7){t(g,S.sibling),m=i(S,w.props.children),m.return=g,g=m;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Bn&&Ju(P)===S.type){t(g,S.sibling),m=i(S,w.props),m.ref=vr(g,S,w),m.return=g,g=m;break e}t(g,S);break}else n(g,S);S=S.sibling}w.type===Mt?(m=mt(w.props.children,g.mode,b,w.key),m.return=g,g=m):(b=Vi(w.type,w.key,w.props,null,g.mode,b),b.ref=vr(g,m,w),b.return=g,g=b)}return o(g);case Rt:e:{for(S=w.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){t(g,m.sibling),m=i(m,w.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=xo(w,g.mode,b),m.return=g,g=m}return o(g);case Bn:return S=w._init,k(g,m,S(w._payload),b)}if(Pr(w))return x(g,m,w,b);if(gr(w))return A(g,m,w,b);Ni(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(t(g,m.sibling),m=i(m,w),m.return=g,g=m):(t(g,m),m=wo(w,g.mode,b),m.return=g,g=m),o(g)):t(g,m)}return k}var tr=If(!0),Wf=If(!1),fa=at(null),pa=null,zt=null,ds=null;function fs(){ds=zt=pa=null}function ps(e){var n=fa.current;ae(fa),e._currentValue=n}function ul(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Yt(e,n){pa=e,ds=zt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(je=!0),e.firstContext=null)}function rn(e){var n=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:n,next:null},zt===null){if(pa===null)throw Error(L(308));zt=e,pa.dependencies={lanes:0,firstContext:e}}else zt=zt.next=e;return n}var pt=null;function hs(e){pt===null?pt=[e]:pt.push(e)}function Rf(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,hs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Zn(e,r)}function Zn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var zn=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Kn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Zn(e,t)}return i=r.interleaved,i===null?(n.next=n,hs(r)):(n.next=i.next,i.next=n),r.interleaved=n,Zn(e,t)}function Fi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}function Fu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?i=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?i=a=n:a=a.next=n}else i=a=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ha(e,n,t,r){var i=e.updateQueue;zn=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=i.baseState;o=0,c=u=s=null,l=a;do{var h=l.lane,p=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,A=l;switch(h=n,p=t,A.tag){case 1:if(x=A.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=A.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ce({},d,h);break e;case 2:zn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=d):c=c.next=p,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=c,n=i.shared.interleaved,n!==null){i=n;do o|=i.lane,i=i.next;while(i!==n)}else a===null&&(i.shared.lanes=0);vt|=o,e.lanes=o,e.memoizedState=d}}function Uu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var fi={},Sn=at(fi),qr=at(fi),ei=at(fi);function ht(e){if(e===fi)throw Error(L(174));return e}function ms(e,n){switch(ne(ei,n),ne(qr,e),ne(Sn,fi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Fo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Fo(n,e)}ae(Sn),ne(Sn,n)}function rr(){ae(Sn),ae(qr),ae(ei)}function Zf(e){ht(ei.current);var n=ht(Sn.current),t=Fo(n,e.type);n!==t&&(ne(qr,e),ne(Sn,t))}function ys(e){qr.current===e&&(ae(Sn),ae(qr))}var se=at(0);function ga(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fo=[];function ws(){for(var e=0;e<fo.length;e++)fo[e]._workInProgressVersionPrimary=null;fo.length=0}var Ui=Tn.ReactCurrentDispatcher,po=Tn.ReactCurrentBatchConfig,xt=0,ue=null,xe=null,Ae=null,ma=!1,Dr=!1,ni=0,Mm=0;function Pe(){throw Error(L(321))}function xs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!hn(e[t],n[t]))return!1;return!0}function vs(e,n,t,r,i,a){if(xt=a,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ui.current=e===null||e.memoizedState===null?jm:Hm,e=t(r,i),Dr){a=0;do{if(Dr=!1,ni=0,25<=a)throw Error(L(301));a+=1,Ae=xe=null,n.updateQueue=null,Ui.current=_m,e=t(r,i)}while(Dr)}if(Ui.current=ya,n=xe!==null&&xe.next!==null,xt=0,Ae=xe=ue=null,ma=!1,n)throw Error(L(300));return e}function As(){var e=ni!==0;return ni=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ue.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function an(){if(xe===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var n=Ae===null?ue.memoizedState:Ae.next;if(n!==null)Ae=n,xe=e;else{if(e===null)throw Error(L(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ae===null?ue.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ti(e,n){return typeof n=="function"?n(e):n}function ho(e){var n=an(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=xe,i=r.baseQueue,a=t.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}r.baseQueue=i=a,t.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((xt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=r):s=s.next=d,ue.lanes|=c,vt|=c}u=u.next}while(u!==null&&u!==a);s===null?o=r:s.next=l,hn(r,n.memoizedState)||(je=!0),n.memoizedState=r,n.baseState=o,n.baseQueue=s,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do a=i.lane,ue.lanes|=a,vt|=a,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function go(e){var n=an(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,a=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);hn(a,n.memoizedState)||(je=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,r]}function Df(){}function Tf(e,n){var t=ue,r=an(),i=n(),a=!hn(r.memoizedState,i);if(a&&(r.memoizedState=i,je=!0),r=r.queue,Ss(_f.bind(null,t,r,e),[e]),r.getSnapshot!==n||a||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,ri(9,Hf.bind(null,t,r,i,n),void 0,null),Se===null)throw Error(L(349));xt&30||jf(t,n,i)}return i}function jf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hf(e,n,t,r){n.value=t,n.getSnapshot=r,Bf(n)&&zf(e)}function _f(e,n,t){return t(function(){Bf(n)&&zf(e)})}function Bf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!hn(e,t)}catch{return!0}}function zf(e){var n=Zn(e,1);n!==null&&pn(n,e,1,-1)}function Ou(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},n.queue=e,e=e.dispatch=Tm.bind(null,ue,e),[n.memoizedState,e]}function ri(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Jf(){return an().memoizedState}function Oi(e,n,t,r){var i=yn();ue.flags|=e,i.memoizedState=ri(1|n,t,void 0,r===void 0?null:r)}function Ma(e,n,t,r){var i=an();r=r===void 0?null:r;var a=void 0;if(xe!==null){var o=xe.memoizedState;if(a=o.destroy,r!==null&&xs(r,o.deps)){i.memoizedState=ri(n,t,a,r);return}}ue.flags|=e,i.memoizedState=ri(1|n,t,a,r)}function Gu(e,n){return Oi(8390656,8,e,n)}function Ss(e,n){return Ma(2048,8,e,n)}function Ff(e,n){return Ma(4,2,e,n)}function Uf(e,n){return Ma(4,4,e,n)}function Of(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Gf(e,n,t){return t=t!=null?t.concat([e]):null,Ma(4,4,Of.bind(null,n,e),t)}function bs(){}function Xf(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xs(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Yf(e,n){var t=an();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&xs(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Vf(e,n,t){return xt&21?(hn(t,n)||(t=qd(),ue.lanes|=t,vt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=t)}function Zm(e,n){var t=K;K=t!==0&&4>t?t:4,e(!0);var r=po.transition;po.transition={};try{e(!1),n()}finally{K=t,po.transition=r}}function Qf(){return an().memoizedState}function Dm(e,n,t){var r=qn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Kf(e))$f(n,t);else if(t=Rf(e,n,t,r),t!==null){var i=Re();pn(t,e,r,i),qf(t,n,r)}}function Tm(e,n,t){var r=qn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kf(e))$f(n,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,l=a(o,t);if(i.hasEagerState=!0,i.eagerState=l,hn(l,o)){var s=n.interleaved;s===null?(i.next=i,hs(n)):(i.next=s.next,s.next=i),n.interleaved=i;return}}catch{}finally{}t=Rf(e,n,i,r),t!==null&&(i=Re(),pn(t,e,r,i),qf(t,n,r))}}function Kf(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function $f(e,n){Dr=ma=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qf(e,n,t){if(t&4194240){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,es(e,t)}}var ya={readContext:rn,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},jm={readContext:rn,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:rn,useEffect:Gu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Oi(4194308,4,Of.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Oi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Oi(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=yn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Dm.bind(null,ue,e),[r.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:Ou,useDebugValue:bs,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Ou(!1),n=e[0];return e=Zm.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ue,i=yn();if(oe){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),Se===null)throw Error(L(349));xt&30||jf(r,n,t)}i.memoizedState=t;var a={value:t,getSnapshot:n};return i.queue=a,Gu(_f.bind(null,r,a,e),[e]),r.flags|=2048,ri(9,Hf.bind(null,r,a,t,n),void 0,null),t},useId:function(){var e=yn(),n=Se.identifierPrefix;if(oe){var t=In,r=Nn;t=(r&~(1<<32-fn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=ni++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Mm++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hm={readContext:rn,useCallback:Xf,useContext:rn,useEffect:Ss,useImperativeHandle:Gf,useInsertionEffect:Ff,useLayoutEffect:Uf,useMemo:Yf,useReducer:ho,useRef:Jf,useState:function(){return ho(ti)},useDebugValue:bs,useDeferredValue:function(e){var n=an();return Vf(n,xe.memoizedState,e)},useTransition:function(){var e=ho(ti)[0],n=an().memoizedState;return[e,n]},useMutableSource:Df,useSyncExternalStore:Tf,useId:Qf,unstable_isNewReconciler:!1},_m={readContext:rn,useCallback:Xf,useContext:rn,useEffect:Ss,useImperativeHandle:Gf,useInsertionEffect:Ff,useLayoutEffect:Uf,useMemo:Yf,useReducer:go,useRef:Jf,useState:function(){return go(ti)},useDebugValue:bs,useDeferredValue:function(e){var n=an();return xe===null?n.memoizedState=e:Vf(n,xe.memoizedState,e)},useTransition:function(){var e=go(ti)[0],n=an().memoizedState;return[e,n]},useMutableSource:Df,useSyncExternalStore:Tf,useId:Qf,unstable_isNewReconciler:!1};function un(e,n){if(e&&e.defaultProps){n=ce({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function cl(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:ce({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Za={isMounted:function(e){return(e=e._reactInternals)?bt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Re(),i=qn(e),a=Wn(r,i);a.payload=n,t!=null&&(a.callback=t),n=Kn(e,a,i),n!==null&&(pn(n,e,i,r),Fi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Re(),i=qn(e),a=Wn(r,i);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Kn(e,a,i),n!==null&&(pn(n,e,i,r),Fi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Re(),r=qn(e),i=Wn(t,r);i.tag=2,n!=null&&(i.callback=n),n=Kn(e,i,r),n!==null&&(pn(n,e,r,t),Fi(n,e,r))}};function Xu(e,n,t,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,o):n.prototype&&n.prototype.isPureReactComponent?!Vr(t,r)||!Vr(i,a):!0}function ep(e,n,t){var r=!1,i=rt,a=n.contextType;return typeof a=="object"&&a!==null?a=rn(a):(i=_e(n)?yt:Ne.current,r=n.contextTypes,a=(r=r!=null)?er(e,i):rt),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Za,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),n}function Yu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Za.enqueueReplaceState(n,n.state,null)}function dl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},gs(e);var a=n.contextType;typeof a=="object"&&a!==null?i.context=rn(a):(a=_e(n)?yt:Ne.current,i.context=er(e,a)),i.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(cl(e,n,a,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Za.enqueueReplaceState(i,i.state,null),ha(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,n){try{var t="",r=n;do t+=pg(r),r=r.return;while(r);var i=t}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:i,digest:null}}function mo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function fl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Bm=typeof WeakMap=="function"?WeakMap:Map;function np(e,n,t){t=Wn(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){xa||(xa=!0,Sl=r),fl(e,n)},t}function tp(e,n,t){t=Wn(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){fl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){fl(e,n),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function Vu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Bm;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=ey.bind(null,e,n,t),n.then(e,e))}function Qu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Ku(e,n,t,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Wn(-1,1),n.tag=2,Kn(t,n,1))),t.lanes|=1),e)}var zm=Tn.ReactCurrentOwner,je=!1;function We(e,n,t,r){n.child=e===null?Wf(n,null,t,r):tr(n,e.child,t,r)}function $u(e,n,t,r,i){t=t.render;var a=n.ref;return Yt(n,i),r=vs(e,n,t,r,a,i),t=As(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Dn(e,n,i)):(oe&&t&&ss(n),n.flags|=1,We(e,n,r,i),n.child)}function qu(e,n,t,r,i){if(e===null){var a=t.type;return typeof a=="function"&&!Ws(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,rp(e,n,a,r,i)):(e=Vi(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&i)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:Vr,t(o,r)&&e.ref===n.ref)return Dn(e,n,i)}return n.flags|=1,e=et(a,r),e.ref=n.ref,e.return=n,n.child=e}function rp(e,n,t,r,i){if(e!==null){var a=e.memoizedProps;if(Vr(a,r)&&e.ref===n.ref)if(je=!1,n.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(je=!0);else return n.lanes=e.lanes,Dn(e,n,i)}return pl(e,n,t,r,i)}function ip(e,n,t){var r=n.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Ft,Oe),Oe|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Ft,Oe),Oe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:t,ne(Ft,Oe),Oe|=r}else a!==null?(r=a.baseLanes|t,n.memoizedState=null):r=t,ne(Ft,Oe),Oe|=r;return We(e,n,i,t),n.child}function ap(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function pl(e,n,t,r,i){var a=_e(t)?yt:Ne.current;return a=er(n,a),Yt(n,i),t=vs(e,n,t,r,a,i),r=As(),e!==null&&!je?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,Dn(e,n,i)):(oe&&r&&ss(n),n.flags|=1,We(e,n,t,i),n.child)}function ec(e,n,t,r,i){if(_e(t)){var a=!0;ua(n)}else a=!1;if(Yt(n,i),n.stateNode===null)Gi(e,n),ep(n,t,r),dl(n,t,r,i),r=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=rn(u):(u=_e(t)?yt:Ne.current,u=er(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Yu(n,o,r,u),zn=!1;var h=n.memoizedState;o.state=h,ha(n,r,o,i),s=n.memoizedState,l!==r||h!==s||He.current||zn?(typeof c=="function"&&(cl(n,t,c,r),s=n.memoizedState),(l=zn||Xu(n,t,l,r,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{o=n.stateNode,Mf(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:un(n.type,l),o.props=u,d=n.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=rn(s):(s=_e(t)?yt:Ne.current,s=er(n,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Yu(n,o,r,s),zn=!1,h=n.memoizedState,o.state=h,ha(n,r,o,i);var x=n.memoizedState;l!==d||h!==x||He.current||zn?(typeof p=="function"&&(cl(n,t,p,r),x=n.memoizedState),(u=zn||Xu(n,t,u,r,h,x,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=x),o.props=r,o.state=x,o.context=s,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),r=!1)}return hl(e,n,t,r,a,i)}function hl(e,n,t,r,i,a){ap(e,n);var o=(n.flags&128)!==0;if(!r&&!o)return i&&_u(n,t,!1),Dn(e,n,a);r=n.stateNode,zm.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&o?(n.child=tr(n,e.child,null,a),n.child=tr(n,null,l,a)):We(e,n,l,a),n.memoizedState=r.state,i&&_u(n,t,!0),n.child}function op(e){var n=e.stateNode;n.pendingContext?Hu(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Hu(e,n.context,!1),ms(e,n.containerInfo)}function nc(e,n,t,r,i){return nr(),cs(i),n.flags|=256,We(e,n,t,r),n.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function lp(e,n,t){var r=n.pendingProps,i=se.current,a=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ne(se,i&1),e===null)return sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=r.children,e=r.fallback,a?(r=n.mode,a=n.child,o={mode:"hidden",children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=ja(o,r,0,null),e=mt(e,r,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=ml(t),n.memoizedState=gl,e):ks(n,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Jm(e,n,o,r,l,i,t);if(a){a=r.fallback,o=n.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(o&1)&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=s,n.deletions=null):(r=et(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=et(l,a):(a=mt(a,o,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,o=e.child.memoizedState,o=o===null?ml(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=gl,r}return a=e.child,e=a.sibling,r=et(a,{mode:"visible",children:r.children}),!(n.mode&1)&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function ks(e,n){return n=ja({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ii(e,n,t,r){return r!==null&&cs(r),tr(n,e.child,null,t),e=ks(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Jm(e,n,t,r,i,a,o){if(t)return n.flags&256?(n.flags&=-257,r=mo(Error(L(422))),Ii(e,n,o,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=r.fallback,i=n.mode,r=ja({mode:"visible",children:r.children},i,0,null),a=mt(a,i,o,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,n.mode&1&&tr(n,e.child,null,o),n.child.memoizedState=ml(o),n.memoizedState=gl,a);if(!(n.mode&1))return Ii(e,n,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(L(419)),r=mo(a,r,void 0),Ii(e,n,o,r)}if(l=(o&e.childLanes)!==0,je||l){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Zn(e,i),pn(r,e,i,-1))}return Is(),r=mo(Error(L(421))),Ii(e,n,o,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=ny.bind(null,e),i._reactRetry=n,null):(e=a.treeContext,Ge=Qn(i.nextSibling),Ye=n,oe=!0,dn=null,e!==null&&($e[qe++]=Nn,$e[qe++]=In,$e[qe++]=wt,Nn=e.id,In=e.overflow,wt=n),n=ks(n,r.children),n.flags|=4096,n)}function tc(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),ul(e.return,n,t)}function yo(e,n,t,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=t,a.tailMode=i)}function sp(e,n,t){var r=n.pendingProps,i=r.revealOrder,a=r.tail;if(We(e,n,r.children,t),r=se.current,r&2)r=r&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,t,n);else if(e.tag===19)tc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),!(n.mode&1))n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&ga(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),yo(n,!1,i,t,a);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&ga(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}yo(n,!0,t,null,a);break;case"together":yo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Gi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Dn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),vt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Fm(e,n,t){switch(n.tag){case 3:op(n),nr();break;case 5:Zf(n);break;case 1:_e(n.type)&&ua(n);break;case 4:ms(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;ne(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),n.flags|=128,null):t&n.child.childLanes?lp(e,n,t):(ne(se,se.current&1),e=Dn(e,n,t),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(t&n.childLanes)!==0,e.flags&128){if(r)return sp(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return n.lanes=0,ip(e,n,t)}return Dn(e,n,t)}var up,yl,cp,dp;up=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yl=function(){};cp=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,ht(Sn.current);var a=null;switch(t){case"input":i=_o(e,i),r=_o(e,r),a=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),a=[];break;case"textarea":i=Jo(e,i),r=Jo(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=la)}Uo(t,r);var o;t=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Jr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(a||(a=[]),a.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ie("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};dp=function(e,n,t,r){t!==r&&(n.flags|=4)};function Ar(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Um(e,n,t){var r=n.pendingProps;switch(us(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return _e(n.type)&&sa(),Le(n),null;case 3:return r=n.stateNode,rr(),ae(He),ae(Ne),ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ei(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,dn!==null&&(Cl(dn),dn=null))),yl(e,n),Le(n),null;case 5:ys(n);var i=ht(ei.current);if(t=n.type,e!==null&&n.stateNode!=null)cp(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(L(166));return Le(n),null}if(e=ht(Sn.current),Ei(n)){r=n.stateNode,t=n.type;var a=n.memoizedProps;switch(r[xn]=n,r[$r]=a,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)ie(Er[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":du(r,a),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ie("invalid",r);break;case"textarea":pu(r,a),ie("invalid",r)}Uo(t,a),i=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&Li(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Li(r.textContent,l,e),i=["children",""+l]):Jr.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ie("scroll",r)}switch(t){case"input":xi(r),fu(r,a,!0);break;case"textarea":xi(r),hu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=la)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(t,{is:r.is}):(e=o.createElement(t),t==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,t),e[xn]=n,e[$r]=r,up(e,n,!1,!1),n.stateNode=e;e:{switch(o=Oo(t,r),t){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)ie(Er[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":du(e,r),i=_o(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ie("invalid",e);break;case"textarea":pu(e,r),i=Jo(e,r),ie("invalid",e);break;default:i=r}Uo(t,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?zd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&_d(e,s)):a==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Fr(e,s):typeof s=="number"&&Fr(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Jr.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ie("scroll",e):s!=null&&Yl(e,a,s,o))}switch(t){case"input":xi(e),fu(e,r,!1);break;case"textarea":xi(e),hu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+tt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Ut(e,!!r.multiple,a,!1):r.defaultValue!=null&&Ut(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=la)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)dp(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(L(166));if(t=ht(ei.current),ht(Sn.current),Ei(n)){if(r=n.stateNode,t=n.memoizedProps,r[xn]=n,(a=r.nodeValue!==t)&&(e=Ye,e!==null))switch(e.tag){case 3:Li(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Li(r.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[xn]=n,n.stateNode=r}return Le(n),null;case 13:if(ae(se),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ge!==null&&n.mode&1&&!(n.flags&128))Nf(),nr(),n.flags|=98560,a=!1;else if(a=Ei(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(L(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(L(317));a[xn]=n}else nr(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),a=!1}else dn!==null&&(Cl(dn),dn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,n.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):Is())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return rr(),yl(e,n),e===null&&Qr(n.stateNode.containerInfo),Le(n),null;case 10:return ps(n.type._context),Le(n),null;case 17:return _e(n.type)&&sa(),Le(n),null;case 19:if(ae(se),a=n.memoizedState,a===null)return Le(n),null;if(r=(n.flags&128)!==0,o=a.rendering,o===null)if(r)Ar(a,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ga(e),o!==null){for(n.flags|=128,Ar(a,!1),r=o.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)a=t,e=r,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(se,se.current&1|2),n.child}e=e.sibling}a.tail!==null&&pe()>ar&&(n.flags|=128,r=!0,Ar(a,!1),n.lanes=4194304)}else{if(!r)if(e=ga(o),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Ar(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!oe)return Le(n),null}else 2*pe()-a.renderingStartTime>ar&&t!==1073741824&&(n.flags|=128,r=!0,Ar(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=pe(),n.sibling=null,t=se.current,ne(se,r?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Ns(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&n.mode&1?Oe&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function Om(e,n){switch(us(n),n.tag){case 1:return _e(n.type)&&sa(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rr(),ae(He),ae(Ne),ws(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ys(n),null;case 13:if(ae(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));nr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(se),null;case 4:return rr(),null;case 10:return ps(n.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Wi=!1,Ee=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,Z=null;function Jt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){de(e,n,r)}else t.current=null}function wl(e,n,t){try{t()}catch(r){de(e,n,r)}}var rc=!1;function Xm(e,n){if(nl=ia,e=mf(),ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,h=null;n:for(;;){for(var p;d!==t||i!==0&&d.nodeType!==3||(l=o+i),d!==a||r!==0&&d.nodeType!==3||(s=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break n;if(h===t&&++u===i&&(l=o),h===a&&++c===r&&(s=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(tl={focusedElem:e,selectionRange:t},ia=!1,Z=n;Z!==null;)if(n=Z,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Z=e;else for(;Z!==null;){n=Z;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var A=x.memoizedProps,k=x.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?A:un(n.type,A),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=n.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(b){de(n,n.return,b)}if(e=n.sibling,e!==null){e.return=n.return,Z=e;break}Z=n.return}return x=rc,rc=!1,x}function Tr(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&wl(n,t,a)}i=i.next}while(i!==r)}}function Da(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function xl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function fp(e){var n=e.alternate;n!==null&&(e.alternate=null,fp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[$r],delete n[al],delete n[Nm],delete n[Im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pp(e){return e.tag===5||e.tag===3||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=la));else if(r!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function Al(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Al(e,n,t),e=e.sibling;e!==null;)Al(e,n,t),e=e.sibling}var be=null,cn=!1;function Hn(e,n,t){for(t=t.child;t!==null;)hp(e,n,t),t=t.sibling}function hp(e,n,t){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(La,t)}catch{}switch(t.tag){case 5:Ee||Jt(t,n);case 6:var r=be,i=cn;be=null,Hn(e,n,t),be=r,cn=i,be!==null&&(cn?(e=be,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):be.removeChild(t.stateNode));break;case 18:be!==null&&(cn?(e=be,t=t.stateNode,e.nodeType===8?uo(e.parentNode,t):e.nodeType===1&&uo(e,t),Xr(e)):uo(be,t.stateNode));break;case 4:r=be,i=cn,be=t.stateNode.containerInfo,cn=!0,Hn(e,n,t),be=r,cn=i;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&wl(t,n,o),i=i.next}while(i!==r)}Hn(e,n,t);break;case 1:if(!Ee&&(Jt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(l){de(t,n,l)}Hn(e,n,t);break;case 21:Hn(e,n,t);break;case 22:t.mode&1?(Ee=(r=Ee)||t.memoizedState!==null,Hn(e,n,t),Ee=r):Hn(e,n,t);break;default:Hn(e,n,t)}}function ac(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Gm),n.forEach(function(r){var i=ty.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function sn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var a=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,cn=!1;break e;case 3:be=l.stateNode.containerInfo,cn=!0;break e;case 4:be=l.stateNode.containerInfo,cn=!0;break e}l=l.return}if(be===null)throw Error(L(160));hp(a,o,i),be=null,cn=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){de(i,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)gp(n,e),n=n.sibling}function gp(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(sn(n,e),mn(e),r&4){try{Tr(3,e,e.return),Da(3,e)}catch(A){de(e,e.return,A)}try{Tr(5,e,e.return)}catch(A){de(e,e.return,A)}}break;case 1:sn(n,e),mn(e),r&512&&t!==null&&Jt(t,t.return);break;case 5:if(sn(n,e),mn(e),r&512&&t!==null&&Jt(t,t.return),e.flags&32){var i=e.stateNode;try{Fr(i,"")}catch(A){de(e,e.return,A)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Td(i,a),Oo(l,o);var u=Oo(l,a);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?zd(i,d):c==="dangerouslySetInnerHTML"?_d(i,d):c==="children"?Fr(i,d):Yl(i,c,d,u)}switch(l){case"input":Bo(i,a);break;case"textarea":jd(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Ut(i,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?Ut(i,!!a.multiple,a.defaultValue,!0):Ut(i,!!a.multiple,a.multiple?[]:"",!1))}i[$r]=a}catch(A){de(e,e.return,A)}}break;case 6:if(sn(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(A){de(e,e.return,A)}}break;case 3:if(sn(n,e),mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Xr(n.containerInfo)}catch(A){de(e,e.return,A)}break;case 4:sn(n,e),mn(e);break;case 13:sn(n,e),mn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ls=pe())),r&4&&ac(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||c,sn(n,e),Ee=u):sn(n,e),mn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(Z=e,c=e.child;c!==null;){for(d=Z=c;Z!==null;){switch(h=Z,p=h.child,h.tag){case 0:case 11:case 14:case 15:Tr(4,h,h.return);break;case 1:Jt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,t=h.return;try{n=r,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(A){de(r,t,A)}}break;case 5:Jt(h,h.return);break;case 22:if(h.memoizedState!==null){lc(d);continue}}p!==null?(p.return=h,Z=p):lc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Bd("display",o))}catch(A){de(e,e.return,A)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(A){de(e,e.return,A)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:sn(n,e),mn(e),r&4&&ac(e);break;case 21:break;default:sn(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(pp(t)){var r=t;break e}t=t.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Fr(i,""),r.flags&=-33);var a=ic(e);Al(e,a,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ic(e);vl(e,l,o);break;default:throw Error(L(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ym(e,n,t){Z=e,mp(e)}function mp(e,n,t){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Wi;if(!o){var l=i.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=Wi;var u=Ee;if(Wi=o,(Ee=s)&&!u)for(Z=i;Z!==null;)o=Z,s=o.child,o.tag===22&&o.memoizedState!==null?sc(i):s!==null?(s.return=o,Z=s):sc(i);for(;a!==null;)Z=a,mp(a),a=a.sibling;Z=i,Wi=l,Ee=u}oc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,Z=a):oc(e)}}function oc(e){for(;Z!==null;){var n=Z;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||Da(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ee)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:un(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Uu(n,a,r);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Uu(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Xr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ee||n.flags&512&&xl(n)}catch(h){de(n,n.return,h)}}if(n===e){Z=null;break}if(t=n.sibling,t!==null){t.return=n.return,Z=t;break}Z=n.return}}function lc(e){for(;Z!==null;){var n=Z;if(n===e){Z=null;break}var t=n.sibling;if(t!==null){t.return=n.return,Z=t;break}Z=n.return}}function sc(e){for(;Z!==null;){var n=Z;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Da(4,n)}catch(s){de(n,t,s)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(s){de(n,i,s)}}var a=n.return;try{xl(n)}catch(s){de(n,a,s)}break;case 5:var o=n.return;try{xl(n)}catch(s){de(n,o,s)}}}catch(s){de(n,n.return,s)}if(n===e){Z=null;break}var l=n.sibling;if(l!==null){l.return=n.return,Z=l;break}Z=n.return}}var Vm=Math.ceil,wa=Tn.ReactCurrentDispatcher,Cs=Tn.ReactCurrentOwner,tn=Tn.ReactCurrentBatchConfig,Y=0,Se=null,me=null,ke=0,Oe=0,Ft=at(0),ve=0,ii=null,vt=0,Ta=0,Ps=0,jr=null,Te=null,Ls=0,ar=1/0,Ln=null,xa=!1,Sl=null,$n=null,Ri=!1,On=null,va=0,Hr=0,bl=null,Xi=-1,Yi=0;function Re(){return Y&6?pe():Xi!==-1?Xi:Xi=pe()}function qn(e){return e.mode&1?Y&2&&ke!==0?ke&-ke:Rm.transition!==null?(Yi===0&&(Yi=qd()),Yi):(e=K,e!==0||(e=window.event,e=e===void 0?16:lf(e.type)),e):1}function pn(e,n,t,r){if(50<Hr)throw Hr=0,bl=null,Error(L(185));ui(e,t,r),(!(Y&2)||e!==Se)&&(e===Se&&(!(Y&2)&&(Ta|=t),ve===4&&Fn(e,ke)),Be(e,r),t===1&&Y===0&&!(n.mode&1)&&(ar=pe()+500,Ra&&ot()))}function Be(e,n){var t=e.callbackNode;Rg(e,n);var r=ra(e,e===Se?ke:0);if(r===0)t!==null&&yu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&yu(t),n===1)e.tag===0?Wm(uc.bind(null,e)):Pf(uc.bind(null,e)),Lm(function(){!(Y&6)&&ot()}),t=null;else{switch(ef(r)){case 1:t=ql;break;case 4:t=Kd;break;case 16:t=ta;break;case 536870912:t=$d;break;default:t=ta}t=kp(t,yp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function yp(e,n){if(Xi=-1,Yi=0,Y&6)throw Error(L(327));var t=e.callbackNode;if(Vt()&&e.callbackNode!==t)return null;var r=ra(e,e===Se?ke:0);if(r===0)return null;if(r&30||r&e.expiredLanes||n)n=Aa(e,r);else{n=r;var i=Y;Y|=2;var a=xp();(Se!==e||ke!==n)&&(Ln=null,ar=pe()+500,gt(e,n));do try{$m();break}catch(l){wp(e,l)}while(!0);fs(),wa.current=a,Y=i,me!==null?n=0:(Se=null,ke=0,n=ve)}if(n!==0){if(n===2&&(i=Qo(e),i!==0&&(r=i,n=kl(e,i))),n===1)throw t=ii,gt(e,0),Fn(e,r),Be(e,pe()),t;if(n===6)Fn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Qm(i)&&(n=Aa(e,r),n===2&&(a=Qo(e),a!==0&&(r=a,n=kl(e,a))),n===1))throw t=ii,gt(e,0),Fn(e,r),Be(e,pe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(L(345));case 2:ct(e,Te,Ln);break;case 3:if(Fn(e,r),(r&130023424)===r&&(n=Ls+500-pe(),10<n)){if(ra(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=il(ct.bind(null,e,Te,Ln),n);break}ct(e,Te,Ln);break;case 4:if(Fn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var o=31-fn(r);a=1<<o,o=n[o],o>i&&(i=o),r&=~a}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Vm(r/1960))-r,10<r){e.timeoutHandle=il(ct.bind(null,e,Te,Ln),r);break}ct(e,Te,Ln);break;case 5:ct(e,Te,Ln);break;default:throw Error(L(329))}}}return Be(e,pe()),e.callbackNode===t?yp.bind(null,e):null}function kl(e,n){var t=jr;return e.current.memoizedState.isDehydrated&&(gt(e,n).flags|=256),e=Aa(e,n),e!==2&&(n=Te,Te=t,n!==null&&Cl(n)),e}function Cl(e){Te===null?Te=e:Te.push.apply(Te,e)}function Qm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],a=i.getSnapshot;i=i.value;try{if(!hn(a(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fn(e,n){for(n&=~Ps,n&=~Ta,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-fn(n),r=1<<t;e[t]=-1,n&=~r}}function uc(e){if(Y&6)throw Error(L(327));Vt();var n=ra(e,0);if(!(n&1))return Be(e,pe()),null;var t=Aa(e,n);if(e.tag!==0&&t===2){var r=Qo(e);r!==0&&(n=r,t=kl(e,r))}if(t===1)throw t=ii,gt(e,0),Fn(e,n),Be(e,pe()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ct(e,Te,Ln),Be(e,pe()),null}function Es(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(ar=pe()+500,Ra&&ot())}}function At(e){On!==null&&On.tag===0&&!(Y&6)&&Vt();var n=Y;Y|=1;var t=tn.transition,r=K;try{if(tn.transition=null,K=1,e)return e()}finally{K=r,tn.transition=t,Y=n,!(Y&6)&&ot()}}function Ns(){Oe=Ft.current,ae(Ft)}function gt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pm(t)),me!==null)for(t=me.return;t!==null;){var r=t;switch(us(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:rr(),ae(He),ae(Ne),ws();break;case 5:ys(r);break;case 4:rr();break;case 13:ae(se);break;case 19:ae(se);break;case 10:ps(r.type._context);break;case 22:case 23:Ns()}t=t.return}if(Se=e,me=e=et(e.current,null),ke=Oe=n,ve=0,ii=null,Ps=Ta=vt=0,Te=jr=null,pt!==null){for(n=0;n<pt.length;n++)if(t=pt[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,a=t.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}t.pending=r}pt=null}return e}function wp(e,n){do{var t=me;try{if(fs(),Ui.current=ya,ma){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ma=!1}if(xt=0,Ae=xe=ue=null,Dr=!1,ni=0,Cs.current=null,t===null||t.return===null){ve=1,ii=n,me=null;break}e:{var a=e,o=t.return,l=t,s=n;if(n=ke,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Qu(o);if(p!==null){p.flags&=-257,Ku(p,o,l,a,n),p.mode&1&&Vu(a,u,n),n=p,s=u;var x=n.updateQueue;if(x===null){var A=new Set;A.add(s),n.updateQueue=A}else x.add(s);break e}else{if(!(n&1)){Vu(a,u,n),Is();break e}s=Error(L(426))}}else if(oe&&l.mode&1){var k=Qu(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ku(k,o,l,a,n),cs(ir(s,l));break e}}a=s=ir(s,l),ve!==4&&(ve=2),jr===null?jr=[a]:jr.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var g=np(a,s,n);Fu(a,g);break e;case 1:l=s;var m=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&($n===null||!$n.has(w)))){a.flags|=65536,n&=-n,a.lanes|=n;var b=tp(a,l,n);Fu(a,b);break e}}a=a.return}while(a!==null)}Ap(t)}catch(P){n=P,me===t&&t!==null&&(me=t=t.return);continue}break}while(!0)}function xp(){var e=wa.current;return wa.current=ya,e===null?ya:e}function Is(){(ve===0||ve===3||ve===2)&&(ve=4),Se===null||!(vt&268435455)&&!(Ta&268435455)||Fn(Se,ke)}function Aa(e,n){var t=Y;Y|=2;var r=xp();(Se!==e||ke!==n)&&(Ln=null,gt(e,n));do try{Km();break}catch(i){wp(e,i)}while(!0);if(fs(),Y=t,wa.current=r,me!==null)throw Error(L(261));return Se=null,ke=0,ve}function Km(){for(;me!==null;)vp(me)}function $m(){for(;me!==null&&!bg();)vp(me)}function vp(e){var n=bp(e.alternate,e,Oe);e.memoizedProps=e.pendingProps,n===null?Ap(e):me=n,Cs.current=null}function Ap(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Om(t,n),t!==null){t.flags&=32767,me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,me=null;return}}else if(t=Um(t,n,Oe),t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);ve===0&&(ve=5)}function ct(e,n,t){var r=K,i=tn.transition;try{tn.transition=null,K=1,qm(e,n,t,r)}finally{tn.transition=i,K=r}return null}function qm(e,n,t,r){do Vt();while(On!==null);if(Y&6)throw Error(L(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Mg(e,a),e===Se&&(me=Se=null,ke=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ri||(Ri=!0,kp(ta,function(){return Vt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=tn.transition,tn.transition=null;var o=K;K=1;var l=Y;Y|=4,Cs.current=null,Xm(e,t),gp(t,e),xm(tl),ia=!!nl,tl=nl=null,e.current=t,Ym(t),kg(),Y=l,K=o,tn.transition=a}else e.current=t;if(Ri&&(Ri=!1,On=e,va=i),a=e.pendingLanes,a===0&&($n=null),Lg(t.stateNode),Be(e,pe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(xa)throw xa=!1,e=Sl,Sl=null,e;return va&1&&e.tag!==0&&Vt(),a=e.pendingLanes,a&1?e===bl?Hr++:(Hr=0,bl=e):Hr=0,ot(),null}function Vt(){if(On!==null){var e=ef(va),n=tn.transition,t=K;try{if(tn.transition=null,K=16>e?16:e,On===null)var r=!1;else{if(e=On,On=null,va=0,Y&6)throw Error(L(331));var i=Y;for(Y|=4,Z=e.current;Z!==null;){var a=Z,o=a.child;if(Z.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(Z=u;Z!==null;){var c=Z;switch(c.tag){case 0:case 11:case 15:Tr(8,c,a)}var d=c.child;if(d!==null)d.return=c,Z=d;else for(;Z!==null;){c=Z;var h=c.sibling,p=c.return;if(fp(c),c===u){Z=null;break}if(h!==null){h.return=p,Z=h;break}Z=p}}}var x=a.alternate;if(x!==null){var A=x.child;if(A!==null){x.child=null;do{var k=A.sibling;A.sibling=null,A=k}while(A!==null)}}Z=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,Z=o;else e:for(;Z!==null;){if(a=Z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Tr(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,Z=g;break e}Z=a.return}}var m=e.current;for(Z=m;Z!==null;){o=Z;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Z=w;else e:for(o=m;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Da(9,l)}}catch(P){de(l,l.return,P)}if(l===o){Z=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,Z=b;break e}Z=l.return}}if(Y=i,ot(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(La,e)}catch{}r=!0}return r}finally{K=t,tn.transition=n}}return!1}function cc(e,n,t){n=ir(t,n),n=np(e,n,1),e=Kn(e,n,1),n=Re(),e!==null&&(ui(e,1,n),Be(e,n))}function de(e,n,t){if(e.tag===3)cc(e,e,t);else for(;n!==null;){if(n.tag===3){cc(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){e=ir(t,e),e=tp(n,e,1),n=Kn(n,e,1),e=Re(),n!==null&&(ui(n,1,e),Be(n,e));break}}n=n.return}}function ey(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&t,Se===e&&(ke&t)===t&&(ve===4||ve===3&&(ke&130023424)===ke&&500>pe()-Ls?gt(e,0):Ps|=t),Be(e,n)}function Sp(e,n){n===0&&(e.mode&1?(n=Si,Si<<=1,!(Si&130023424)&&(Si=4194304)):n=1);var t=Re();e=Zn(e,n),e!==null&&(ui(e,n,t),Be(e,t))}function ny(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Sp(e,t)}function ty(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(n),Sp(e,t)}var bp;bp=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||He.current)je=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return je=!1,Fm(e,n,t);je=!!(e.flags&131072)}else je=!1,oe&&n.flags&1048576&&Lf(n,da,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;Gi(e,n),e=n.pendingProps;var i=er(n,Ne.current);Yt(n,t),i=vs(null,n,r,e,i,t);var a=As();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,_e(r)?(a=!0,ua(n)):a=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gs(n),i.updater=Za,n.stateNode=i,i._reactInternals=n,dl(n,r,e,t),n=hl(null,n,r,!0,a,t)):(n.tag=0,oe&&a&&ss(n),We(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(Gi(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=iy(r),e=un(r,e),i){case 0:n=pl(null,n,r,e,t);break e;case 1:n=ec(null,n,r,e,t);break e;case 11:n=$u(null,n,r,e,t);break e;case 14:n=qu(null,n,r,un(r.type,e),t);break e}throw Error(L(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),pl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),ec(e,n,r,i,t);case 3:e:{if(op(n),e===null)throw Error(L(387));r=n.pendingProps,a=n.memoizedState,i=a.element,Mf(e,n),ha(n,r,null,t);var o=n.memoizedState;if(r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){i=ir(Error(L(423)),n),n=nc(e,n,r,t,i);break e}else if(r!==i){i=ir(Error(L(424)),n),n=nc(e,n,r,t,i);break e}else for(Ge=Qn(n.stateNode.containerInfo.firstChild),Ye=n,oe=!0,dn=null,t=Wf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(nr(),r===i){n=Dn(e,n,t);break e}We(e,n,r,t)}n=n.child}return n;case 5:return Zf(n),e===null&&sl(n),r=n.type,i=n.pendingProps,a=e!==null?e.memoizedProps:null,o=i.children,rl(r,i)?o=null:a!==null&&rl(r,a)&&(n.flags|=32),ap(e,n),We(e,n,o,t),n.child;case 6:return e===null&&sl(n),null;case 13:return lp(e,n,t);case 4:return ms(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=tr(n,null,r,t):We(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),$u(e,n,r,i,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,a=n.memoizedProps,o=i.value,ne(fa,r._currentValue),r._currentValue=o,a!==null)if(hn(a.value,o)){if(a.children===i.children&&!He.current){n=Dn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Wn(-1,t&-t),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),ul(a.return,t,n),l.lanes|=t;break}s=s.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(L(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),ul(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}We(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,Yt(n,t),i=rn(i),r=r(i),n.flags|=1,We(e,n,r,t),n.child;case 14:return r=n.type,i=un(r,n.pendingProps),i=un(r.type,i),qu(e,n,r,i,t);case 15:return rp(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:un(r,i),Gi(e,n),n.tag=1,_e(r)?(e=!0,ua(n)):e=!1,Yt(n,t),ep(n,r,i),dl(n,r,i,t),hl(null,n,r,!0,e,t);case 19:return sp(e,n,t);case 22:return ip(e,n,t)}throw Error(L(156,n.tag))};function kp(e,n){return Qd(e,n)}function ry(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,n,t,r){return new ry(e,n,t,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iy(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ql)return 11;if(e===Kl)return 14}return 2}function et(e,n){var t=e.alternate;return t===null?(t=nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Vi(e,n,t,r,i,a){var o=2;if(r=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Mt:return mt(t.children,i,a,n);case Vl:o=8,i|=8;break;case Do:return e=nn(12,t,n,i|2),e.elementType=Do,e.lanes=a,e;case To:return e=nn(13,t,n,i),e.elementType=To,e.lanes=a,e;case jo:return e=nn(19,t,n,i),e.elementType=jo,e.lanes=a,e;case Md:return ja(t,i,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Wd:o=10;break e;case Rd:o=9;break e;case Ql:o=11;break e;case Kl:o=14;break e;case Bn:o=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=nn(o,t,n,i),n.elementType=e,n.type=r,n.lanes=a,n}function mt(e,n,t,r){return e=nn(7,e,r,n),e.lanes=t,e}function ja(e,n,t,r){return e=nn(22,e,r,n),e.elementType=Md,e.lanes=t,e.stateNode={isHidden:!1},e}function wo(e,n,t){return e=nn(6,e,null,n),e.lanes=t,e}function xo(e,n,t){return n=nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ay(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rs(e,n,t,r,i,a,o,l,s){return e=new ay(e,n,t,l,s),n===1?(n=1,a===!0&&(n|=8)):n=0,a=nn(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(a),e}function oy(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Cp(e){if(!e)return rt;e=e._reactInternals;e:{if(bt(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(_e(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(_e(t))return Cf(e,t,n)}return n}function Pp(e,n,t,r,i,a,o,l,s){return e=Rs(t,r,!0,e,i,a,o,l,s),e.context=Cp(null),t=e.current,r=Re(),i=qn(t),a=Wn(r,i),a.callback=n??null,Kn(t,a,i),e.current.lanes=i,ui(e,i,r),Be(e,r),e}function Ha(e,n,t,r){var i=n.current,a=Re(),o=qn(i);return t=Cp(t),n.context===null?n.context=t:n.pendingContext=t,n=Wn(a,o),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Kn(i,n,o),e!==null&&(pn(e,i,o,a),Fi(e,i,o)),o}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ms(e,n){dc(e,n),(e=e.alternate)&&dc(e,n)}function ly(){return null}var Lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zs(e){this._internalRoot=e}_a.prototype.render=Zs.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));Ha(e,n,null,null)};_a.prototype.unmount=Zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;At(function(){Ha(null,e,null,null)}),n[Mn]=null}};function _a(e){this._internalRoot=e}_a.prototype.unstable_scheduleHydration=function(e){if(e){var n=rf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Jn.length&&n!==0&&n<Jn[t].priority;t++);Jn.splice(t,0,e),t===0&&of(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function sy(e,n,t,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var u=Sa(o);a.call(u)}}var o=Pp(n,r,e,0,null,!1,!1,"",fc);return e._reactRootContainer=o,e[Mn]=o.current,Qr(e.nodeType===8?e.parentNode:e),At(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Sa(s);l.call(u)}}var s=Rs(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=s,e[Mn]=s.current,Qr(e.nodeType===8?e.parentNode:e),At(function(){Ha(n,s,t,r)}),s}function za(e,n,t,r,i){var a=t._reactRootContainer;if(a){var o=a;if(typeof i=="function"){var l=i;i=function(){var s=Sa(o);l.call(s)}}Ha(n,o,e,i)}else o=sy(t,n,e,i,r);return Sa(o)}nf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Lr(n.pendingLanes);t!==0&&(es(n,t|1),Be(n,pe()),!(Y&6)&&(ar=pe()+500,ot()))}break;case 13:At(function(){var r=Zn(e,1);if(r!==null){var i=Re();pn(r,e,1,i)}}),Ms(e,1)}};ns=function(e){if(e.tag===13){var n=Zn(e,134217728);if(n!==null){var t=Re();pn(n,e,134217728,t)}Ms(e,134217728)}};tf=function(e){if(e.tag===13){var n=qn(e),t=Zn(e,n);if(t!==null){var r=Re();pn(t,e,n,r)}Ms(e,n)}};rf=function(){return K};af=function(e,n){var t=K;try{return K=e,n()}finally{K=t}};Xo=function(e,n,t){switch(n){case"input":if(Bo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=Wa(r);if(!i)throw Error(L(90));Dd(r),Bo(r,i)}}}break;case"textarea":jd(e,t);break;case"select":n=t.value,n!=null&&Ut(e,!!t.multiple,n,!1)}};Ud=Es;Od=At;var uy={usingClientEntryPoint:!1,Events:[di,jt,Wa,Jd,Fd,Es]},Sr={findFiberByHostInstance:ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Yd(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||ly,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mi.isDisabled&&Mi.supportsFiber)try{La=Mi.inject(cy),An=Mi}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uy;Qe.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(n))throw Error(L(200));return oy(e,n,null,t)};Qe.createRoot=function(e,n){if(!Ds(e))throw Error(L(299));var t=!1,r="",i=Lp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=Rs(e,1,!1,null,null,t,!1,r,i),e[Mn]=n.current,Qr(e.nodeType===8?e.parentNode:e),new Zs(n)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=Yd(n),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return At(e)};Qe.hydrate=function(e,n,t){if(!Ba(n))throw Error(L(200));return za(null,e,n,!0,t)};Qe.hydrateRoot=function(e,n,t){if(!Ds(e))throw Error(L(405));var r=t!=null&&t.hydratedSources||null,i=!1,a="",o=Lp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Pp(n,null,e,1,t??null,i,!1,a,o),e[Mn]=n.current,Qr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new _a(n)};Qe.render=function(e,n,t){if(!Ba(n))throw Error(L(200));return za(null,e,n,!1,t)};Qe.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(L(40));return e._reactRootContainer?(At(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Qe.unstable_batchedUpdates=Es;Qe.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Ba(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return za(e,n,t,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function Ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ep)}catch(e){console.error(e)}}Ep(),Ld.exports=Qe;var Np=Ld.exports,pc=Np;Mo.createRoot=pc.createRoot,Mo.hydrateRoot=pc.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ai.apply(this,arguments)}var Gn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Gn||(Gn={}));const hc="popstate";function dy(e){e===void 0&&(e={});function n(r,i){let{pathname:a,search:o,hash:l}=r.location;return Pl("",{pathname:a,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function t(r,i){return typeof i=="string"?i:ba(i)}return py(n,t,null,e)}function ye(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ts(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function fy(){return Math.random().toString(36).substr(2,8)}function gc(e,n){return{usr:e.state,key:e.key,idx:n}}function Pl(e,n,t,r){return t===void 0&&(t=null),ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ur(n):n,{state:t,key:n&&n.key||r||fy()})}function ba(e){let{pathname:n="/",search:t="",hash:r=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function ur(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let r=e.indexOf("?");r>=0&&(n.search=e.substr(r),e=e.substr(0,r)),e&&(n.pathname=e)}return n}function py(e,n,t,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,l=Gn.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(ai({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Gn.Pop;let k=c(),g=k==null?null:k-u;u=k,s&&s({action:l,location:A.location,delta:g})}function h(k,g){l=Gn.Push;let m=Pl(A.location,k,g);u=c()+1;let w=gc(m,u),b=A.createHref(m);try{o.pushState(w,"",b)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(b)}a&&s&&s({action:l,location:A.location,delta:1})}function p(k,g){l=Gn.Replace;let m=Pl(A.location,k,g);u=c();let w=gc(m,u),b=A.createHref(m);o.replaceState(w,"",b),a&&s&&s({action:l,location:A.location,delta:0})}function x(k){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof k=="string"?k:ba(k);return m=m.replace(/ $/,"%20"),ye(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let A={get action(){return l},get location(){return e(i,o)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(hc,d),s=k,()=>{i.removeEventListener(hc,d),s=null}},createHref(k){return n(i,k)},createURL:x,encodeLocation(k){let g=x(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(k){return o.go(k)}};return A}var mc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(mc||(mc={}));function hy(e,n,t){return t===void 0&&(t="/"),gy(e,n,t)}function gy(e,n,t,r){let i=typeof n=="string"?ur(n):n,a=js(i.pathname||"/",t);if(a==null)return null;let o=Ip(e);my(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Ey(a);l=Cy(o[s],u)}return l}function Ip(e,n,t,r){n===void 0&&(n=[]),t===void 0&&(t=[]),r===void 0&&(r="");let i=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(ye(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=nt([r,s.relativePath]),c=t.concat(s);a.children&&a.children.length>0&&(ye(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ip(a.children,n,c,u)),!(a.path==null&&!a.index)&&n.push({path:u,score:by(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,o);else for(let s of Wp(a.path))i(a,o,s)}),n}function Wp(e){let n=e.split("/");if(n.length===0)return[];let[t,...r]=n,i=t.endsWith("?"),a=t.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let o=Wp(r.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),i&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function my(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:ky(n.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const yy=/^:[\w-]+$/,wy=3,xy=2,vy=1,Ay=10,Sy=-2,yc=e=>e==="*";function by(e,n){let t=e.split("/"),r=t.length;return t.some(yc)&&(r+=Sy),n&&(r+=xy),t.filter(i=>!yc(i)).reduce((i,a)=>i+(yy.test(a)?wy:a===""?vy:Ay),r)}function ky(e,n){return e.length===n.length&&e.slice(0,-1).every((r,i)=>r===n[i])?e[e.length-1]-n[n.length-1]:0}function Cy(e,n,t){let{routesMeta:r}=e,i={},a="/",o=[];for(let l=0;l<r.length;++l){let s=r[l],u=l===r.length-1,c=a==="/"?n:n.slice(a.length)||"/",d=Py({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),h=s.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:nt([a,d.pathname]),pathnameBase:My(nt([a,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(a=nt([a,d.pathnameBase]))}return o}function Py(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,r]=Ly(e.path,e.caseSensitive,e.end),i=n.match(t);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let A=l[d]||"";o=a.slice(0,a.length-A.length).replace(/(.)\/+$/,"$1")}const x=l[d];return p&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function Ly(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ts(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,n?void 0:"i"),r]}function Ey(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ts(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function js(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,r=e.charAt(t);return r&&r!=="/"?null:e.slice(t)||"/"}const Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Iy=e=>Ny.test(e);function Wy(e,n){n===void 0&&(n="/");let{pathname:t,search:r="",hash:i=""}=typeof e=="string"?ur(e):e,a;if(t)if(Iy(t))a=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Ts(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?a=wc(t.substring(1),"/"):a=wc(t,n)}else a=n;return{pathname:a,search:Zy(r),hash:Dy(i)}}function wc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?t.length>1&&t.pop():i!=="."&&t.push(i)}),t.length>1?t.join("/"):"/"}function vo(e,n,t,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ry(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Rp(e,n){let t=Ry(e);return n?t.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Mp(e,n,t,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=ur(e):(i=ai({},e),ye(!i.pathname||!i.pathname.includes("?"),vo("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),vo("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),vo("#","search","hash",i)));let a=e===""||i.pathname==="",o=a?"/":i.pathname,l;if(o==null)l=t;else{let d=n.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?n[d]:"/"}let s=Wy(i,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const nt=e=>e.join("/").replace(/\/\/+/g,"/"),My=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Zy=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Dy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ty(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zp=["post","put","patch","delete"];new Set(Zp);const jy=["get",...Zp];new Set(jy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},oi.apply(this,arguments)}const Hs=N.createContext(null),Hy=N.createContext(null),kt=N.createContext(null),Ja=N.createContext(null),Ct=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Dp=N.createContext(null);function _y(e,n){let{relative:t}=n===void 0?{}:n;pi()||ye(!1);let{basename:r,navigator:i}=N.useContext(kt),{hash:a,pathname:o,search:l}=jp(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:nt([r,o])),i.createHref({pathname:s,search:l,hash:a})}function pi(){return N.useContext(Ja)!=null}function cr(){return pi()||ye(!1),N.useContext(Ja).location}function Tp(e){N.useContext(kt).static||N.useLayoutEffect(e)}function By(){let{isDataRoute:e}=N.useContext(Ct);return e?qy():zy()}function zy(){pi()||ye(!1);let e=N.useContext(Hs),{basename:n,future:t,navigator:r}=N.useContext(kt),{matches:i}=N.useContext(Ct),{pathname:a}=cr(),o=JSON.stringify(Rp(i,t.v7_relativeSplatPath)),l=N.useRef(!1);return Tp(()=>{l.current=!0}),N.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Mp(u,JSON.parse(o),a,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:nt([n,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[n,r,o,a,e])}function jp(e,n){let{relative:t}=n===void 0?{}:n,{future:r}=N.useContext(kt),{matches:i}=N.useContext(Ct),{pathname:a}=cr(),o=JSON.stringify(Rp(i,r.v7_relativeSplatPath));return N.useMemo(()=>Mp(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function Jy(e,n){return Fy(e,n)}function Fy(e,n,t,r){pi()||ye(!1);let{navigator:i}=N.useContext(kt),{matches:a}=N.useContext(Ct),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=cr(),c;if(n){var d;let k=typeof n=="string"?ur(n):n;s==="/"||(d=k.pathname)!=null&&d.startsWith(s)||ye(!1),c=k}else c=u;let h=c.pathname||"/",p=h;if(s!=="/"){let k=s.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=hy(e,{pathname:p}),A=Yy(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},l,k.params),pathname:nt([s,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?s:nt([s,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,t,r);return n&&A?N.createElement(Ja.Provider,{value:{location:oi({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Gn.Pop}},A):A}function Uy(){let e=$y(),n=Ty(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),t?N.createElement("pre",{style:i},t):null,null)}const Oy=N.createElement(Uy,null);class Gy extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?N.createElement(Ct.Provider,{value:this.props.routeContext},N.createElement(Dp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xy(e){let{routeContext:n,match:t,children:r}=e,i=N.useContext(Hs);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(Ct.Provider,{value:n},r)}function Yy(e,n,t,r){var i;if(n===void 0&&(n=[]),t===void 0&&(t=null),r===void 0&&(r=null),e==null){var a;if(!t)return null;if(t.errors)e=t.matches;else if((a=r)!=null&&a.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(i=t)==null?void 0:i.errors;if(l!=null){let c=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||ye(!1),o=o.slice(0,Math.min(o.length,c+1))}let s=!1,u=-1;if(t&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:p}=t,x=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||x){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let p,x=!1,A=null,k=null;t&&(p=l&&d.route.id?l[d.route.id]:void 0,A=d.route.errorElement||Oy,s&&(u<0&&h===0?(e0("route-fallback"),x=!0,k=null):u===h&&(x=!0,k=d.route.hydrateFallbackElement||null)));let g=n.concat(o.slice(0,h+1)),m=()=>{let w;return p?w=A:x?w=k:d.route.Component?w=N.createElement(d.route.Component,null):d.route.element?w=d.route.element:w=c,N.createElement(Xy,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:t!=null},children:w})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?N.createElement(Gy,{location:t.location,revalidation:t.revalidation,component:A,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Hp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hp||{}),_p=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_p||{});function Vy(e){let n=N.useContext(Hs);return n||ye(!1),n}function Qy(e){let n=N.useContext(Hy);return n||ye(!1),n}function Ky(e){let n=N.useContext(Ct);return n||ye(!1),n}function Bp(e){let n=Ky(),t=n.matches[n.matches.length-1];return t.route.id||ye(!1),t.route.id}function $y(){var e;let n=N.useContext(Dp),t=Qy(),r=Bp();return n!==void 0?n:(e=t.errors)==null?void 0:e[r]}function qy(){let{router:e}=Vy(Hp.UseNavigateStable),n=Bp(_p.UseNavigateStable),t=N.useRef(!1);return Tp(()=>{t.current=!0}),N.useCallback(function(i,a){a===void 0&&(a={}),t.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,oi({fromRouteId:n},a)))},[e,n])}const xc={};function e0(e,n,t){xc[e]||(xc[e]=!0)}function n0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pn(e){ye(!1)}function t0(e){let{basename:n="/",children:t=null,location:r,navigationType:i=Gn.Pop,navigator:a,static:o=!1,future:l}=e;pi()&&ye(!1);let s=n.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:s,navigator:a,static:o,future:oi({v7_relativeSplatPath:!1},l)}),[s,l,a,o]);typeof r=="string"&&(r=ur(r));let{pathname:c="/",search:d="",hash:h="",state:p=null,key:x="default"}=r,A=N.useMemo(()=>{let k=js(c,s);return k==null?null:{location:{pathname:k,search:d,hash:h,state:p,key:x},navigationType:i}},[s,c,d,h,p,x,i]);return A==null?null:N.createElement(kt.Provider,{value:u},N.createElement(Ja.Provider,{children:t,value:A}))}function r0(e){let{children:n,location:t}=e;return Jy(Ll(n),t)}new Promise(()=>{});function Ll(e,n){n===void 0&&(n=[]);let t=[];return N.Children.forEach(e,(r,i)=>{if(!N.isValidElement(r))return;let a=[...n,i];if(r.type===N.Fragment){t.push.apply(t,Ll(r.props.children,a));return}r.type!==Pn&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ll(r.props.children,a)),t.push(o)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function El(){return El=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},El.apply(this,arguments)}function i0(e,n){if(e==null)return{};var t={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(n.indexOf(i)>=0)&&(t[i]=e[i]);return t}function a0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function o0(e,n){return e.button===0&&(!n||n==="_self")&&!a0(e)}const l0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],s0="6";try{window.__reactRouterVersion=s0}catch{}const u0="startTransition",vc=eg[u0];function c0(e){let{basename:n,children:t,future:r,window:i}=e,a=N.useRef();a.current==null&&(a.current=dy({window:i,v5Compat:!0}));let o=a.current,[l,s]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=N.useCallback(d=>{u&&vc?vc(()=>s(d)):s(d)},[s,u]);return N.useLayoutEffect(()=>o.listen(c),[o,c]),N.useEffect(()=>n0(r),[r]),N.createElement(t0,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:r})}const d0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",f0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Nr=N.forwardRef(function(n,t){let{onClick:r,relative:i,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c,viewTransition:d}=n,h=i0(n,l0),{basename:p}=N.useContext(kt),x,A=!1;if(typeof u=="string"&&f0.test(u)&&(x=u,d0))try{let w=new URL(window.location.href),b=u.startsWith("//")?new URL(w.protocol+u):new URL(u),P=js(b.pathname,p);b.origin===w.origin&&P!=null?u=P+b.search+b.hash:A=!0}catch{}let k=_y(u,{relative:i}),g=p0(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:i,viewTransition:d});function m(w){r&&r(w),w.defaultPrevented||g(w)}return N.createElement("a",El({},h,{href:x||k,onClick:A||a?r:m,ref:t,target:s}))});var Ac;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ac||(Ac={}));var Sc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sc||(Sc={}));function p0(e,n){let{target:t,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:l}=n===void 0?{}:n,s=By(),u=cr(),c=jp(e,{relative:o});return N.useCallback(d=>{if(o0(d,t)){d.preventDefault();let h=r!==void 0?r:ba(u)===ba(c);s(e,{replace:h,state:i,preventScrollReset:a,relative:o,viewTransition:l})}},[u,s,c,r,i,t,e,a,o,l])}const Ao=[{name:"Home",link:"/",group:"home"},{name:"News",link:"/news",group:"news"},{name:"Research",link:"/research",group:"research"},{name:"Publications",link:"/publications",group:"publications"},{name:"Software",link:"/software",group:"software"},{name:"Members",link:"/members",group:"members"},{name:"Join",link:"/join",group:"join"},{name:"Contact",link:"/contact",group:"contact"}],zp=()=>"/",h0=e=>{let n=e.startsWith("/")?e.slice(1):e;n=n.startsWith("static/")?n.slice(7):n;const t=zp(),r=n.startsWith("/")?n:`/${n}`;return!t||t==="/"?r:`${t.endsWith("/")?t.slice(0,-1):t}${r}`},U={name:"Genomics and Artificial Intelligence in Healthcare Lab",description:"This is the official web page for the Genomics and Artificial Intelligence in Healthcare Lab at Hong Kong PolyU.",url:"https://genomics-in-healthcare.github.io/",baseurl:zp(),static:h0},g0=()=>{const[e,n]=N.useState(!1),[t,r]=N.useState(!1),i=cr(),a=i.pathname==="/"||i.pathname==="/genomics-in-healthcare.github.io/";N.useEffect(()=>{const c=()=>{const d=window.pageYOffset||document.documentElement.scrollTop;r(d>50)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const o=()=>{n(!e)},l=()=>{n(!1)},u=(()=>{const c=i.pathname,d=Ao.find(h=>{const p=h.link==="/"?"/":h.link;return c===p||c===`${U.baseurl}${p}`});return(d==null?void 0:d.group)||""})();return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:`md-app-bar ${a?"home":""} ${t?"scrolled":""}`,children:f.jsxs("div",{className:"md-app-bar__container",children:[f.jsx("button",{className:"md-button md-button--text md-menu-button",id:"menuButton","aria-label":"Open menu",onClick:o,style:{color:"#64748b"},children:f.jsxs("span",{className:"md-menu-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})}),f.jsx("div",{className:"md-app-bar__brand",style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Nr,{to:"/",style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-app-bar__logo",src:U.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{className:"md-app-bar__title",children:[f.jsx("div",{className:"md-app-bar__title-main",style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{className:"md-app-bar__title-sub",style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("nav",{className:"md-app-bar__actions",id:"desktopNav",style:{gap:"4px"},children:Ao.map(c=>f.jsx(Nr,{to:c.link,className:`md-button md-button--text ${u===c.group?"md-button--active":""}`,style:{color:"#64748b",fontWeight:500,padding:"10px 12px",borderRadius:"4px",transition:"background-color 0.15s ease",fontSize:"1.125rem",fontFamily:"'Inter', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"},children:c.name},c.link))})]})}),f.jsxs("aside",{className:`md-navigation-drawer ${e?"open":""}`,id:"navigationDrawer",children:[f.jsx("div",{className:"md-navigation-drawer__header",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Nr,{to:"/",onClick:l,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-navigation-drawer__logo",src:U.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("button",{className:"md-button md-button--text md-close-button",id:"closeDrawerButton","aria-label":"Close menu",onClick:l,style:{color:"#64748b",padding:"8px"},children:f.jsxs("span",{className:"md-close-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{})]})})]})}),f.jsx("div",{className:"md-navigation-drawer__content",children:Ao.map(c=>f.jsx(Nr,{to:c.link,onClick:l,className:`md-navigation-drawer__item ${u===c.group?"active":""}`,tabIndex:0,style:{backgroundColor:"transparent !important",color:"#1a1c1e !important",border:"none !important",boxShadow:"none !important"},children:c.name},c.link))})]}),f.jsx("div",{className:`md-backdrop ${e?"open":""}`,id:"backdrop",onClick:l})]})},m0=()=>f.jsx("footer",{children:f.jsx("div",{children:f.jsx("p",{children:"© 2025 Hong Kong JC STEM Lab of Genomics and AI in Healthcare. All rights reserved."})})}),y0=({children:e})=>{const n=cr(),t=n.pathname==="/"||n.pathname==="/genomics-in-healthcare.github.io/";return N.useEffect(()=>{t?(document.body.classList.add("home"),document.body.classList.remove("non-home")):(document.body.classList.add("non-home"),document.body.classList.remove("home")),document.querySelectorAll("table").forEach(a=>{if(!a.parentElement.classList.contains("table-responsive")){const o=document.createElement("div");o.className="table-responsive",o.style.overflowX="auto",o.style.margin="16px 0",a.parentNode.insertBefore(o,a),o.appendChild(a)}});const i=document.querySelector(".md-main-content");i&&i.classList.add("md-fade-in")},[t,n]),f.jsxs("div",{className:`layout ${t?"home":"non-home"}`,children:[f.jsx(g0,{}),f.jsx("main",{className:"md-main-content",children:e}),f.jsx(m0,{})]})},w0=()=>{const e=U.static("img/logo/homepage_background.png"),n=[{src:U.static("img/logo/hksar.png"),alt:"Hong Kong SAR"},{src:U.static("img/logo/rgc.png"),alt:"RGC"},{src:U.static("img/logo/nsfc.png"),alt:"NSFC"},{src:U.static("img/logo/hkjcct.png"),alt:"Hong Kong Jockey Club Charities Trust"}];return f.jsxs(f.Fragment,{children:[f.jsx("section",{className:"hero-section",style:{background:`linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%), url('${e}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",color:"white",height:"35vh",minHeight:"240px",maxHeight:"400px",width:"100vw",maxWidth:"100vw",display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:"32px 0",position:"relative",marginTop:"60px",marginLeft:"calc(-50vw + 50%)",marginRight:"calc(-50vw + 50%)",boxShadow:"inset 0 0 100px rgba(0, 0, 0, 0.1)",overflow:"visible"},children:f.jsx("div",{style:{textAlign:"center",width:"100%",maxWidth:"1200px",padding:"0 clamp(16px, 2.5vw, 32px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0 auto",wordWrap:"break-word",overflowWrap:"break-word",boxSizing:"border-box"},children:f.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:400,margin:0,lineHeight:1.5,color:"#334155",textShadow:"1px 1px 2px rgba(0,0,0,0.06)",textAlign:"center",width:"100%",display:"block",fontFamily:"'Georgia', 'Times New Roman', 'serif'",letterSpacing:"0.02em",wordWrap:"break-word",overflowWrap:"break-word",hyphens:"auto"},children:"Our mission is to advance AI and genomic technologies to enable personalized diagnosis and treatment for complex diseases, especially cancer and neuropsychiatric disorders like depression and schizophrenia. We focus on developing and combining AI with biological techniques, including reliable, explainable machine learning and single-cell spatial transcriptomics. Our research is highly interdisciplinary, spanning AI, data science, molecular biology, genetics, genomics, and neuroscience"})})}),f.jsxs("div",{className:"md-main-content",style:{marginTop:0,position:"relative",zIndex:2,paddingTop:0},children:[f.jsxs("section",{className:"lab-description-section",style:{margin:"24px 0 8px 0",position:"relative"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:600,margin:0,color:"#334155",position:"relative",textAlign:"center",lineHeight:1.6},children:f.jsxs("span",{style:{position:"relative",zIndex:1,background:"#f8f9fa",padding:0,lineHeight:1.6},children:["Our Laboratory combines",f.jsx("br",{}),"a computational biology lab (the Dry Lab) and a molecular biology lab (the Wet Lab)"]})})}),f.jsx("div",{style:{width:"100%",maxWidth:"800px",margin:"0 auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 10px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Dry Lab features a high-performance computing setup, including GPU and CPU clusters, large disk arrays, and filer servers"})})]}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",margin:"20px 0",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:U.static("img/data_center.jpg"),alt:"Data Center - CPU and GPU clusters",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:U.static("img/office_workspace.jpg"),alt:"Office Workspace - Computational Biology Lab",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]}),f.jsx("div",{className:"lab-description-text",style:{width:"100%",maxWidth:"800px",margin:"20px auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 20px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Wet Lab is equipped for molecular biology research and animal study, including high-throughput sequencers"})}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px",margin:"20px 0",width:"100%",maxWidth:"1200px",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:U.static("img/wet_lab1.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 1",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:U.static("img/wet_lab2.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 2",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:U.static("img/wet_lab3.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 3",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]})]}),f.jsx("section",{style:{margin:0,position:"relative",background:"#f8f9fa",padding:"16px 0"},children:f.jsxs("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("h2",{className:"funding-title",style:{fontSize:"1.5rem",fontWeight:600,margin:"0 0 12px 0",color:"#334155",textAlign:"center"},children:"Research Supported By"}),f.jsx("div",{className:"funding-partners",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px"},children:n.map((t,r)=>f.jsx("img",{src:t.src,alt:t.alt,style:{height:"40px",width:"auto",margin:"2px",display:"inline-block",filter:"grayscale(0%)",opacity:.9,transition:"opacity 0.3s ease"}},r))})]})})]})},x0=N.memo(function({children:n,variant:t="text",size:r="medium",active:i=!1,className:a="",onClick:o,style:l={},disabled:s=!1,type:u="button",...c}){const d=["ui-button",`ui-button--${t}`,`ui-button--${r}`,i&&"ui-button--active",s&&"ui-button--disabled",a].filter(Boolean).join(" ");return f.jsx("button",{type:u,className:d,onClick:o,style:l,disabled:s,...c,children:n})});x0.displayName="Button";const Jp=N.memo(function({children:n,className:t="",style:r={},elevated:i=!1,outlined:a=!1,...o}){const l=["ui-card",i&&"ui-card--elevated",a&&"ui-card--outlined",t].filter(Boolean).join(" ");return f.jsx("div",{className:l,style:r,...o,children:n})});Jp.displayName="Card";const Qt=N.memo(function({children:n,to:t,href:r,external:i=!1,variant:a="default",className:o="",...l}){const s=["ui-link",`ui-link--${a}`,o].filter(Boolean).join(" ");return r||i?f.jsx("a",{href:r||t,className:s,target:i?"_blank":void 0,rel:i?"noopener noreferrer":void 0,...l,children:n}):f.jsx(Nr,{to:t,className:s,...l,children:n})});Qt.displayName="Link";const Fp=N.memo(function({src:n,alt:t,className:r="",style:i={},lazy:a=!0,...o}){let l=n;if(!n.startsWith("http")){const u=n.startsWith("/")?n:`/${n}`;U.baseurl==="/"?l=u:l=`${U.baseurl}${u}`}const s=["ui-image",r].filter(Boolean).join(" ");return f.jsx("img",{src:l,alt:t,className:s,style:i,loading:a?"lazy":"eager",...o})});Fp.displayName="Image";const v0=N.memo(function({children:n,className:t="",style:r={},variant:i="default",background:a=!1,...o}){const l=["ui-section",`ui-section--${i}`,a&&"ui-section--background",t].filter(Boolean).join(" ");return f.jsx("section",{className:l,style:r,...o,children:n})});v0.displayName="Section";const A0=N.memo(function({children:n,className:t="",style:r={},size:i="medium",...a}){const o=["ui-container",`ui-container--${i}`,t].filter(Boolean).join(" ");return f.jsx("div",{className:o,style:r,...a,children:n})});A0.displayName="Container";const S0=N.memo(function({isOpen:n,onClose:t,title:r,children:i,size:a="medium",closeOnBackdrop:o=!0,className:l=""}){if(N.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]),N.useEffect(()=>{const d=h=>{h.key==="Escape"&&n&&t()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[n,t]),!n)return null;const s=d=>{o&&d.target===d.currentTarget&&t()},u=["ui-modal",`ui-modal--${a}`,l].filter(Boolean).join(" "),c=f.jsx("div",{className:"ui-modal__backdrop",onClick:s,children:f.jsxs("div",{className:u,children:[(r||o)&&f.jsxs("div",{className:"ui-modal__header",children:[r&&f.jsx("h2",{className:"ui-modal__title",children:r}),o&&f.jsx("button",{className:"ui-modal__close",onClick:t,"aria-label":"Close modal",children:f.jsx("span",{className:"material-icons",children:"close"})})]}),f.jsx("div",{className:"ui-modal__content",children:i})]})});return Np.createPortal(c,document.body)});S0.displayName="Modal";const b0=N.memo(function({options:n,value:t,onChange:r,placeholder:i="请选择...",disabled:a=!1,className:o="",variant:l="default"}){const[s,u]=N.useState(!1),c=N.useRef(null);N.useEffect(()=>{const x=A=>{c.current&&!c.current.contains(A.target)&&u(!1)};return s&&document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[s]);const d=n.find(x=>x.value===t),h=x=>{var A;(A=n.find(k=>k.value===x))!=null&&A.disabled||(r(x),u(!1))},p=["ui-dropdown",`ui-dropdown--${l}`,s&&"ui-dropdown--open",a&&"ui-dropdown--disabled",o].filter(Boolean).join(" ");return f.jsxs("div",{className:p,ref:c,children:[f.jsxs("button",{className:"ui-dropdown__trigger",onClick:()=>!a&&u(!s),disabled:a,type:"button",children:[f.jsx("span",{className:"ui-dropdown__selected",children:d?f.jsxs(f.Fragment,{children:[d.icon&&f.jsx("span",{className:"material-icons ui-dropdown__icon",children:d.icon}),d.label]}):f.jsx("span",{className:"ui-dropdown__placeholder",children:i})}),f.jsx("span",{className:"material-icons ui-dropdown__arrow",children:s?"expand_less":"expand_more"})]}),s&&f.jsx("div",{className:"ui-dropdown__menu",children:n.map(x=>f.jsxs("button",{className:`ui-dropdown__option ${x.value===t?"ui-dropdown__option--selected":""} ${x.disabled?"ui-dropdown__option--disabled":""}`,onClick:()=>h(x.value),disabled:x.disabled,type:"button",children:[x.icon&&f.jsx("span",{className:"material-icons ui-dropdown__option-icon",children:x.icon}),x.label]},x.value))})]})});b0.displayName="Dropdown";const k0=N.memo(function({tabs:n,defaultTab:t,onChange:r,variant:i="default",className:a=""}){var d,h;const[o,l]=N.useState(t||((d=n[0])==null?void 0:d.id)||""),s=p=>{const x=n.find(A=>A.id===p);x&&!x.disabled&&(l(p),r==null||r(p))},u=(h=n.find(p=>p.id===o))==null?void 0:h.content,c=["ui-tabs",`ui-tabs--${i}`,a].filter(Boolean).join(" ");return f.jsxs("div",{className:c,children:[f.jsx("div",{className:"ui-tabs__header",children:n.map(p=>f.jsxs("button",{className:`ui-tabs__tab ${o===p.id?"ui-tabs__tab--active":""} ${p.disabled?"ui-tabs__tab--disabled":""}`,onClick:()=>s(p.id),disabled:p.disabled,type:"button",children:[p.icon&&f.jsx("span",{className:"material-icons ui-tabs__tab-icon",children:p.icon}),p.label]},p.id))}),f.jsx("div",{className:"ui-tabs__content",children:u})]})});k0.displayName="Tabs";function C0(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const P0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,L0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,E0={};function bc(e,n){return(E0.jsx?L0:P0).test(e)}const N0=/[ \t\n\f\r]/g;function I0(e){return typeof e=="object"?e.type==="text"?kc(e.value):!1:kc(e)}function kc(e){return e.replace(N0,"")===""}class hi{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}hi.prototype.normal={};hi.prototype.property={};hi.prototype.space=void 0;function Up(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new hi(t,r,n)}function Nl(e){return e.toLowerCase()}class Je{constructor(n,t){this.attribute=t,this.property=n}}Je.prototype.attribute="";Je.prototype.booleanish=!1;Je.prototype.boolean=!1;Je.prototype.commaOrSpaceSeparated=!1;Je.prototype.commaSeparated=!1;Je.prototype.defined=!1;Je.prototype.mustUseProperty=!1;Je.prototype.number=!1;Je.prototype.overloadedBoolean=!1;Je.prototype.property="";Je.prototype.spaceSeparated=!1;Je.prototype.space=void 0;let W0=0;const J=Pt(),ge=Pt(),Il=Pt(),E=Pt(),ee=Pt(),Kt=Pt(),Ue=Pt();function Pt(){return 2**++W0}const Wl=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:ge,commaOrSpaceSeparated:Ue,commaSeparated:Kt,number:E,overloadedBoolean:Il,spaceSeparated:ee},Symbol.toStringTag,{value:"Module"})),So=Object.keys(Wl);class _s extends Je{constructor(n,t,r,i){let a=-1;if(super(n,t),Cc(this,"space",i),typeof r=="number")for(;++a<So.length;){const o=So[a];Cc(this,So[a],(r&Wl[o])===Wl[o])}}}_s.prototype.defined=!0;function Cc(e,n,t){t&&(e[n]=t)}function dr(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const a=new _s(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),n[r]=a,t[Nl(r)]=r,t[Nl(a.attribute)]=r}return new hi(n,t,e.space)}const Op=dr({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:ee,ariaCurrent:null,ariaDescribedBy:ee,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:ee,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:ee,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ee,ariaLevel:E,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:ee,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:ee,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:ge,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Gp(e,n){return n in e?e[n]:n}function Xp(e,n){return Gp(e,n.toLowerCase())}const R0=dr({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Kt,acceptCharset:ee,accessKey:ee,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:ee,autoFocus:J,autoPlay:J,blocking:ee,capture:null,charSet:null,checked:J,cite:null,className:ee,cols:E,colSpan:null,content:null,contentEditable:ge,controls:J,controlsList:ee,coords:E|Kt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:Il,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:ee,height:E,hidden:Il,high:E,href:null,hrefLang:null,htmlFor:ee,httpEquiv:ee,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:ee,itemRef:ee,itemScope:J,itemType:ee,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:E,pattern:null,ping:ee,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:ee,required:J,reversed:J,rows:E,rowSpan:E,sandbox:ee,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:ge,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ee,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:Xp}),M0=dr({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ue,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:ee,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Kt,g2:Kt,glyphName:Kt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:Ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ee,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ue,rev:Ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ue,requiredFeatures:Ue,requiredFonts:Ue,requiredFormats:Ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:Ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ue,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Gp}),Yp=dr({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Vp=dr({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Xp}),Qp=dr({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Z0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},D0=/[A-Z]/g,Pc=/-[a-z]/g,T0=/^data[-\w.:]+$/i;function j0(e,n){const t=Nl(n);let r=n,i=Je;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&T0.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(Pc,_0);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!Pc.test(a)){let o=a.replace(D0,H0);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}i=_s}return new i(r,n)}function H0(e){return"-"+e.toLowerCase()}function _0(e){return e.charAt(1).toUpperCase()}const B0=Up([Op,R0,Yp,Vp,Qp],"html"),Bs=Up([Op,M0,Yp,Vp,Qp],"svg");function z0(e){return e.join(" ").trim()}var zs={},Lc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,J0=/\n/g,F0=/^\s*/,U0=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,O0=/^:\s*/,G0=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,X0=/^[;\s]*/,Y0=/^\s+|\s+$/g,V0=`
`,Ec="/",Nc="*",dt="",Q0="comment",K0="declaration";function $0(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,r=1;function i(x){var A=x.match(J0);A&&(t+=A.length);var k=x.lastIndexOf(V0);r=~k?x.length-k:r+x.length}function a(){var x={line:t,column:r};return function(A){return A.position=new o(x),u(),A}}function o(x){this.start=x,this.end={line:t,column:r},this.source=n.source}o.prototype.content=e;function l(x){var A=new Error(n.source+":"+t+":"+r+": "+x);if(A.reason=x,A.filename=n.source,A.line=t,A.column=r,A.source=e,!n.silent)throw A}function s(x){var A=x.exec(e);if(A){var k=A[0];return i(k),e=e.slice(k.length),A}}function u(){s(F0)}function c(x){var A;for(x=x||[];A=d();)A!==!1&&x.push(A);return x}function d(){var x=a();if(!(Ec!=e.charAt(0)||Nc!=e.charAt(1))){for(var A=2;dt!=e.charAt(A)&&(Nc!=e.charAt(A)||Ec!=e.charAt(A+1));)++A;if(A+=2,dt===e.charAt(A-1))return l("End of comment missing");var k=e.slice(2,A-2);return r+=2,i(k),e=e.slice(A),r+=2,x({type:Q0,comment:k})}}function h(){var x=a(),A=s(U0);if(A){if(d(),!s(O0))return l("property missing ':'");var k=s(G0),g=x({type:K0,property:Ic(A[0].replace(Lc,dt)),value:k?Ic(k[0].replace(Lc,dt)):dt});return s(X0),g}}function p(){var x=[];c(x);for(var A;A=h();)A!==!1&&(x.push(A),c(x));return x}return u(),p()}function Ic(e){return e?e.replace(Y0,dt):dt}var q0=$0,e1=$i&&$i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zs,"__esModule",{value:!0});zs.default=t1;const n1=e1(q0);function t1(e,n){let t=null;if(!e||typeof e!="string")return t;const r=(0,n1.default)(e),i=typeof n=="function";return r.forEach(a=>{if(a.type!=="declaration")return;const{property:o,value:l}=a;i?n(o,l,a):l&&(t=t||{},t[o]=l)}),t}var Fa={};Object.defineProperty(Fa,"__esModule",{value:!0});Fa.camelCase=void 0;var r1=/^--[a-zA-Z0-9_-]+$/,i1=/-([a-z])/g,a1=/^[^-]+$/,o1=/^-(webkit|moz|ms|o|khtml)-/,l1=/^-(ms)-/,s1=function(e){return!e||a1.test(e)||r1.test(e)},u1=function(e,n){return n.toUpperCase()},Wc=function(e,n){return"".concat(n,"-")},c1=function(e,n){return n===void 0&&(n={}),s1(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(l1,Wc):e=e.replace(o1,Wc),e.replace(i1,u1))};Fa.camelCase=c1;var d1=$i&&$i.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},f1=d1(zs),p1=Fa;function Rl(e,n){var t={};return!e||typeof e!="string"||(0,f1.default)(e,function(r,i){r&&i&&(t[(0,p1.camelCase)(r,n)]=i)}),t}Rl.default=Rl;var h1=Rl;const g1=zl(h1),Kp=$p("end"),Js=$p("start");function $p(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function m1(e){const n=Js(e),t=Kp(e);if(n&&t)return{start:n,end:t}}function _r(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Rc(e.position):"start"in e||"end"in e?Rc(e):"line"in e||"column"in e?Ml(e):""}function Ml(e){return Mc(e&&e.line)+":"+Mc(e&&e.column)}function Rc(e){return Ml(e&&e.start)+"-"+Ml(e&&e.end)}function Mc(e){return e&&typeof e=="number"?e:1}class Ie extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",a={},o=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?i=n:!a.cause&&n&&(o=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof r=="string"){const s=r.indexOf(":");s===-1?a.ruleId=r:(a.source=r.slice(0,s),a.ruleId=r.slice(s+1))}if(!a.place&&a.ancestors&&a.ancestors){const s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=l?l.line:void 0,this.name=_r(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ie.prototype.file="";Ie.prototype.name="";Ie.prototype.reason="";Ie.prototype.message="";Ie.prototype.stack="";Ie.prototype.column=void 0;Ie.prototype.line=void 0;Ie.prototype.ancestors=void 0;Ie.prototype.cause=void 0;Ie.prototype.fatal=void 0;Ie.prototype.place=void 0;Ie.prototype.ruleId=void 0;Ie.prototype.source=void 0;const Fs={}.hasOwnProperty,y1=new Map,w1=/[A-Z]/g,x1=new Set(["table","tbody","thead","tfoot","tr"]),v1=new Set(["td","th"]),qp="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function A1(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=N1(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=E1(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Bs:B0,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=eh(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function eh(e,n,t){if(n.type==="element")return S1(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return b1(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return C1(e,n,t);if(n.type==="mdxjsEsm")return k1(e,n);if(n.type==="root")return P1(e,n,t);if(n.type==="text")return L1(e,n)}function S1(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=Bs,e.schema=i),e.ancestors.push(n);const a=th(e,n.tagName,!1),o=I1(e,n);let l=Os(e,n);return x1.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!I0(s):!0})),nh(e,o,a,n),Us(o,l),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function b1(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}li(e,n.position)}function k1(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);li(e,n.position)}function C1(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=Bs,e.schema=i),e.ancestors.push(n);const a=n.name===null?e.Fragment:th(e,n.name,!0),o=W1(e,n),l=Os(e,n);return nh(e,o,a,n),Us(o,l),e.ancestors.pop(),e.schema=r,e.create(n,a,o,t)}function P1(e,n,t){const r={};return Us(r,Os(e,n)),e.create(n,e.Fragment,r,t)}function L1(e,n){return n.value}function nh(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function Us(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function E1(e,n,t){return r;function r(i,a,o,l){const u=Array.isArray(o.children)?t:n;return l?u(a,o,l):u(a,o)}}function N1(e,n){return t;function t(r,i,a,o){const l=Array.isArray(a.children),s=Js(r);return n(i,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function I1(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&Fs.call(n.properties,i)){const a=R1(e,i,n.properties[i]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&v1.has(n.tagName)?r=l:t[o]=l}}if(r){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function W1(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else li(e,n.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const l=r.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else li(e,n.position);else a=r.value===null?!0:r.value;t[i]=a}return t}function Os(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:y1;for(;++r<n.children.length;){const a=n.children[r];let o;if(e.passKeys){const s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){const u=i.get(s)||0;o=s+"-"+u,i.set(s,u+1)}}const l=eh(e,a,o);l!==void 0&&t.push(l)}return t}function R1(e,n,t){const r=j0(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?C0(t):z0(t)),r.property==="style"){let i=typeof t=="object"?t:M1(e,String(t));return e.stylePropertyNameCase==="css"&&(i=Z1(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Z0[r.property]||r.property:r.attribute,t]}}function M1(e,n){try{return g1(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new Ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=qp+"#cannot-parse-style-attribute",i}}function th(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,o;for(;++a<i.length;){const l=bc(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}r=o}else r=bc(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return Fs.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);li(e)}function li(e,n){const t=new Ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=qp+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Z1(e){const n={};let t;for(t in e)Fs.call(e,t)&&(n[D1(t)]=e[t]);return n}function D1(e){let n=e.replace(w1,T1);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function T1(e){return"-"+e.toLowerCase()}const bo={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},j1={};function H1(e,n){const t=j1,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return rh(e,r,i)}function rh(e,n,t){if(_1(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Zc(e.children,n,t)}return Array.isArray(e)?Zc(e,n,t):""}function Zc(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=rh(e[i],n,t);return r.join("")}function _1(e){return!!(e&&typeof e=="object")}const Dc=document.createElement("i");function Gs(e){const n="&"+e+";";Dc.innerHTML=n;const t=Dc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function bn(e,n,t,r){const i=e.length;let a=0,o;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)o=Array.from(r),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);a<r.length;)o=r.slice(a,a+1e4),o.unshift(n,0),e.splice(...o),a+=1e4,n+=1e4}function en(e,n){return e.length>0?(bn(e,e.length,0,n),e):n}const Tc={}.hasOwnProperty;function B1(e){const n={};let t=-1;for(;++t<e.length;)z1(n,e[t]);return n}function z1(e,n){let t;for(t in n){const i=(Tc.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let o;if(a)for(o in a){Tc.call(i,o)||(i[o]=[]);const l=a[o];J1(i[o],Array.isArray(l)?l:l?[l]:[])}}}function J1(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);bn(e,0,0,r)}function ih(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function $t(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const vn=lt(/[A-Za-z]/),Xe=lt(/[\dA-Za-z]/),F1=lt(/[#-'*+\--9=?A-Z^-~]/);function Zl(e){return e!==null&&(e<32||e===127)}const Dl=lt(/\d/),U1=lt(/[\dA-Fa-f]/),O1=lt(/[!-/:-@[-`{-~]/);function B(e){return e!==null&&e<-2}function ze(e){return e!==null&&(e<0||e===32)}function V(e){return e===-2||e===-1||e===32}const G1=lt(new RegExp("\\p{P}|\\p{S}","u")),X1=lt(/\s/);function lt(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function fr(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const a=e.charCodeAt(t);let o="";if(a===37&&Xe(e.charCodeAt(t+1))&&Xe(e.charCodeAt(t+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(t+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),i=1):o="�"}else o=String.fromCharCode(a);o&&(n.push(e.slice(r,t),encodeURIComponent(o)),r=t+i+1,o=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function te(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(s){return V(s)?(e.enter(t),l(s)):n(s)}function l(s){return V(s)&&a++<i?(e.consume(s),l):(e.exit(t),n(s))}}const Y1={tokenize:V1};function V1(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),te(e,n,"linePrefix")}function i(l){return e.enter("paragraph"),a(l)}function a(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return B(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const Q1={tokenize:K1},jc={tokenize:$1};function K1(e){const n=this,t=[];let r=0,i,a,o;return l;function l(w){if(r<t.length){const b=t[r];return n.containerState=b[1],e.attempt(b[0].continuation,s,u)(w)}return u(w)}function s(w){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&m();const b=n.events.length;let P=b,S;for(;P--;)if(n.events[P][0]==="exit"&&n.events[P][1].type==="chunkFlow"){S=n.events[P][1].end;break}g(r);let I=b;for(;I<n.events.length;)n.events[I][1].end={...S},I++;return bn(n.events,P+1,0,n.events.slice(b)),n.events.length=I,u(w)}return l(w)}function u(w){if(r===t.length){if(!i)return h(w);if(i.currentConstruct&&i.currentConstruct.concrete)return x(w);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(jc,c,d)(w)}function c(w){return i&&m(),g(r),h(w)}function d(w){return n.parser.lazy[n.now().line]=r!==t.length,o=n.now().offset,x(w)}function h(w){return n.containerState={},e.attempt(jc,p,x)(w)}function p(w){return r++,t.push([n.currentConstruct,n.containerState]),h(w)}function x(w){if(w===null){i&&m(),g(0),e.consume(w);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),A(w)}function A(w){if(w===null){k(e.exit("chunkFlow"),!0),g(0),e.consume(w);return}return B(w)?(e.consume(w),k(e.exit("chunkFlow")),r=0,n.interrupt=void 0,l):(e.consume(w),A)}function k(w,b){const P=n.sliceStream(w);if(b&&P.push(null),w.previous=a,a&&(a.next=w),a=w,i.defineSkip(w.start),i.write(P),n.parser.lazy[w.start.line]){let S=i.events.length;for(;S--;)if(i.events[S][1].start.offset<o&&(!i.events[S][1].end||i.events[S][1].end.offset>o))return;const I=n.events.length;let M=I,_,D;for(;M--;)if(n.events[M][0]==="exit"&&n.events[M][1].type==="chunkFlow"){if(_){D=n.events[M][1].end;break}_=!0}for(g(r),S=I;S<n.events.length;)n.events[S][1].end={...D},S++;bn(n.events,M+1,0,n.events.slice(I)),n.events.length=S}}function g(w){let b=t.length;for(;b-- >w;){const P=t[b];n.containerState=P[1],P[0].exit.call(n,e)}t.length=w}function m(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function $1(e,n,t){return te(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Hc(e){if(e===null||ze(e)||X1(e))return 1;if(G1(e))return 2}function Xs(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(n=a(n,t),r.push(a))}return n}const Tl={name:"attention",resolveAll:q1,tokenize:ew};function q1(e,n){let t=-1,r,i,a,o,l,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d={...e[r][1].end},h={...e[t][1].start};_c(d,-s),_c(h,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[r][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},a={type:s>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[r][1].end={...o.start},e[t][1].start={...l.end},u=[],e[r][1].end.offset-e[r][1].start.offset&&(u=en(u,[["enter",e[r][1],n],["exit",e[r][1],n]])),u=en(u,[["enter",i,n],["enter",o,n],["exit",o,n],["enter",a,n]]),u=en(u,Xs(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),u=en(u,[["exit",a,n],["enter",l,n],["exit",l,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=en(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,bn(e,r-1,t-r+3,u),t=r+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function ew(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Hc(r);let a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;const u=e.exit("attentionSequence"),c=Hc(s),d=!c||c===2&&i||t.includes(s),h=!i||i===2&&c||t.includes(r);return u._open=!!(a===42?d:d&&(i||!h)),u._close=!!(a===42?h:h&&(c||!d)),n(s)}}function _c(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const nw={name:"autolink",tokenize:tw};function tw(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return vn(p)?(e.consume(p),o):p===64?t(p):u(p)}function o(p){return p===43||p===45||p===46||Xe(p)?(r=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),r=0,s):(p===43||p===45||p===46||Xe(p))&&r++<32?(e.consume(p),l):(r=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||Zl(p)?t(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),c):F1(p)?(e.consume(p),u):t(p)}function c(p){return Xe(p)?d(p):t(p)}function d(p){return p===46?(e.consume(p),r=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):h(p)}function h(p){if((p===45||Xe(p))&&r++<63){const x=p===45?h:d;return e.consume(p),x}return t(p)}}const Ua={partial:!0,tokenize:rw};function rw(e,n,t){return r;function r(a){return V(a)?te(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||B(a)?n(a):t(a)}}const ah={continuation:{tokenize:aw},exit:ow,name:"blockQuote",tokenize:iw};function iw(e,n,t){const r=this;return i;function i(o){if(o===62){const l=r.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return t(o)}function a(o){return V(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function aw(e,n,t){const r=this;return i;function i(o){return V(o)?te(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(ah,n,t)(o)}}function ow(e){e.exit("blockQuote")}const oh={name:"characterEscape",tokenize:lw};function lw(e,n,t){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return O1(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const lh={name:"characterReference",tokenize:sw};function sw(e,n,t){const r=this;let i=0,a,o;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=Xe,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=U1,c):(e.enter("characterReferenceValue"),a=7,o=Dl,c(d))}function c(d){if(d===59&&i){const h=e.exit("characterReferenceValue");return o===Xe&&!Gs(r.sliceSerialize(h))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(d)&&i++<a?(e.consume(d),c):t(d)}}const Bc={partial:!0,tokenize:cw},zc={concrete:!0,name:"codeFenced",tokenize:uw};function uw(e,n,t){const r=this,i={partial:!0,tokenize:P};let a=0,o=0,l;return s;function s(S){return u(S)}function u(S){const I=r.events[r.events.length-1];return a=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,l=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(S)}function c(S){return S===l?(o++,e.consume(S),c):o<3?t(S):(e.exit("codeFencedFenceSequence"),V(S)?te(e,d,"whitespace")(S):d(S))}function d(S){return S===null||B(S)?(e.exit("codeFencedFence"),r.interrupt?n(S):e.check(Bc,A,b)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(S))}function h(S){return S===null||B(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(S)):V(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),te(e,p,"whitespace")(S)):S===96&&S===l?t(S):(e.consume(S),h)}function p(S){return S===null||B(S)?d(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(S))}function x(S){return S===null||B(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(S)):S===96&&S===l?t(S):(e.consume(S),x)}function A(S){return e.attempt(i,b,k)(S)}function k(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),g}function g(S){return a>0&&V(S)?te(e,m,"linePrefix",a+1)(S):m(S)}function m(S){return S===null||B(S)?e.check(Bc,A,b)(S):(e.enter("codeFlowValue"),w(S))}function w(S){return S===null||B(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),w)}function b(S){return e.exit("codeFenced"),n(S)}function P(S,I,M){let _=0;return D;function D(O){return S.enter("lineEnding"),S.consume(O),S.exit("lineEnding"),T}function T(O){return S.enter("codeFencedFence"),V(O)?te(S,j,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):j(O)}function j(O){return O===l?(S.enter("codeFencedFenceSequence"),Q(O)):M(O)}function Q(O){return O===l?(_++,S.consume(O),Q):_>=o?(S.exit("codeFencedFenceSequence"),V(O)?te(S,le,"whitespace")(O):le(O)):M(O)}function le(O){return O===null||B(O)?(S.exit("codeFencedFence"),I(O)):M(O)}}}function cw(e,n,t){const r=this;return i;function i(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}const ko={name:"codeIndented",tokenize:fw},dw={partial:!0,tokenize:pw};function fw(e,n,t){const r=this;return i;function i(u){return e.enter("codeIndented"),te(e,a,"linePrefix",5)(u)}function a(u){const c=r.events[r.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(u):t(u)}function o(u){return u===null?s(u):B(u)?e.attempt(dw,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||B(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function pw(e,n,t){const r=this;return i;function i(o){return r.parser.lazy[r.now().line]?t(o):B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),i):te(e,a,"linePrefix",5)(o)}function a(o){const l=r.events[r.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):B(o)?i(o):t(o)}}const hw={name:"codeText",previous:mw,resolve:gw,tokenize:yw};function gw(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function mw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function yw(e,n,t){let r=0,i,a;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),l(d)}function l(d){return d===96?(e.consume(d),r++,l):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(a=e.enter("codeTextSequence"),i=0,c(d)):B(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||B(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),u)}function c(d){return d===96?(e.consume(d),i++,c):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(a.type="codeTextData",u(d))}}class ww{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&br(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),br(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),br(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);br(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);br(this.left,t.reverse())}}}function br(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function sh(e){const n={};let t=-1,r,i,a,o,l,s,u;const c=new ww(e);for(;++t<c.length;){for(;t in n;)t=n[t];if(r=c.get(t),t&&r[1].type==="chunkFlow"&&c.get(t-1)[1].type==="listItemPrefix"&&(s=r[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,xw(c,t)),t=n[t],u=!0);else if(r[1]._container){for(a=t,i=void 0;a--;)if(o=c.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(i&&(c.get(i)[1].type="lineEndingBlank"),o[1].type="lineEnding",i=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;i&&(r[1].end={...c.get(i)[1].start},l=c.slice(i,t),l.unshift(r),c.splice(i,t-i+1,l))}}return bn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function xw(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const a=[];let o=t._tokenizer;o||(o=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,s=[],u={};let c,d,h=-1,p=t,x=0,A=0;const k=[A];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(c=r.sliceStream(p),p.next||c.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=t;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(A=h+1,k.push(A),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):k.pop(),h=k.length;h--;){const g=l.slice(k[h],k[h+1]),m=a.pop();s.push([m,m+g.length-1]),e.splice(m,2,g)}for(s.reverse(),h=-1;++h<s.length;)u[x+s[h][0]]=x+s[h][1],x+=s[h][1]-s[h][0]-1;return u}const vw={resolve:Sw,tokenize:bw},Aw={partial:!0,tokenize:kw};function Sw(e){return sh(e),e}function bw(e,n){let t;return r;function r(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(l)}function i(l){return l===null?a(l):B(l)?e.check(Aw,o,a)(l):(e.consume(l),i)}function a(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function kw(e,n,t){const r=this;return i;function i(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),te(e,a,"linePrefix")}function a(o){if(o===null||B(o))return t(o);const l=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(r.parser.constructs.flow,t,n)(o)}}function uh(e,n,t,r,i,a,o,l,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return d;function d(g){return g===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(g),e.exit(a),h):g===null||g===32||g===41||Zl(g)?t(g):(e.enter(r),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),A(g))}function h(g){return g===62?(e.enter(a),e.consume(g),e.exit(a),e.exit(i),e.exit(r),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(l),h(g)):g===null||g===60||B(g)?t(g):(e.consume(g),g===92?x:p)}function x(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function A(g){return!c&&(g===null||g===41||ze(g))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(r),n(g)):c<u&&g===40?(e.consume(g),c++,A):g===41?(e.consume(g),c--,A):g===null||g===32||g===40||Zl(g)?t(g):(e.consume(g),g===92?k:A)}function k(g){return g===40||g===41||g===92?(e.consume(g),A):A(g)}}function ch(e,n,t,r,i,a){const o=this;let l=0,s;return u;function u(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(a),c}function c(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(a),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):B(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||B(p)||l++>999?(e.exit("chunkString"),c(p)):(e.consume(p),s||(s=!V(p)),p===92?h:d)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,d):d(p)}}function dh(e,n,t,r,i,a){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),o=h===40?41:h,s):t(h)}function s(h){return h===o?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):(e.enter(a),u(h))}function u(h){return h===o?(e.exit(a),s(o)):h===null?t(h):B(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),te(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===o||h===null||B(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?d:c)}function d(h){return h===o||h===92?(e.consume(h),c):c(h)}}function Br(e,n){let t;return r;function r(i){return B(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):V(i)?te(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const Cw={name:"definition",tokenize:Lw},Pw={partial:!0,tokenize:Ew};function Lw(e,n,t){const r=this;let i;return a;function a(p){return e.enter("definition"),o(p)}function o(p){return ch.call(r,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return i=$t(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return ze(p)?Br(e,u)(p):u(p)}function u(p){return uh(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(Pw,d,d)(p)}function d(p){return V(p)?te(e,h,"whitespace")(p):h(p)}function h(p){return p===null||B(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function Ew(e,n,t){return r;function r(l){return ze(l)?Br(e,i)(l):t(l)}function i(l){return dh(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return V(l)?te(e,o,"whitespace")(l):o(l)}function o(l){return l===null||B(l)?n(l):t(l)}}const Nw={name:"hardBreakEscape",tokenize:Iw};function Iw(e,n,t){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return B(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const Ww={name:"headingAtx",resolve:Rw,tokenize:Mw};function Rw(e,n){let t=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},a={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},bn(e,r,t-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),e}function Mw(e,n,t){let r=0;return i;function i(c){return e.enter("atxHeading"),a(c)}function a(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&r++<6?(e.consume(c),o):c===null||ze(c)?(e.exit("atxHeadingSequence"),l(c)):t(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||B(c)?(e.exit("atxHeading"),n(c)):V(c)?te(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||ze(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}const Zw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Jc=["pre","script","style","textarea"],Dw={concrete:!0,name:"htmlFlow",resolveTo:Hw,tokenize:_w},Tw={partial:!0,tokenize:zw},jw={partial:!0,tokenize:Bw};function Hw(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function _w(e,n,t){const r=this;let i,a,o,l,s;return u;function u(v){return c(v)}function c(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),d}function d(v){return v===33?(e.consume(v),h):v===47?(e.consume(v),a=!0,A):v===63?(e.consume(v),i=3,r.interrupt?n:y):vn(v)?(e.consume(v),o=String.fromCharCode(v),k):t(v)}function h(v){return v===45?(e.consume(v),i=2,p):v===91?(e.consume(v),i=5,l=0,x):vn(v)?(e.consume(v),i=4,r.interrupt?n:y):t(v)}function p(v){return v===45?(e.consume(v),r.interrupt?n:y):t(v)}function x(v){const we="CDATA[";return v===we.charCodeAt(l++)?(e.consume(v),l===we.length?r.interrupt?n:j:x):t(v)}function A(v){return vn(v)?(e.consume(v),o=String.fromCharCode(v),k):t(v)}function k(v){if(v===null||v===47||v===62||ze(v)){const we=v===47,on=o.toLowerCase();return!we&&!a&&Jc.includes(on)?(i=1,r.interrupt?n(v):j(v)):Zw.includes(o.toLowerCase())?(i=6,we?(e.consume(v),g):r.interrupt?n(v):j(v)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(v):a?m(v):w(v))}return v===45||Xe(v)?(e.consume(v),o+=String.fromCharCode(v),k):t(v)}function g(v){return v===62?(e.consume(v),r.interrupt?n:j):t(v)}function m(v){return V(v)?(e.consume(v),m):D(v)}function w(v){return v===47?(e.consume(v),D):v===58||v===95||vn(v)?(e.consume(v),b):V(v)?(e.consume(v),w):D(v)}function b(v){return v===45||v===46||v===58||v===95||Xe(v)?(e.consume(v),b):P(v)}function P(v){return v===61?(e.consume(v),S):V(v)?(e.consume(v),P):w(v)}function S(v){return v===null||v===60||v===61||v===62||v===96?t(v):v===34||v===39?(e.consume(v),s=v,I):V(v)?(e.consume(v),S):M(v)}function I(v){return v===s?(e.consume(v),s=null,_):v===null||B(v)?t(v):(e.consume(v),I)}function M(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||ze(v)?P(v):(e.consume(v),M)}function _(v){return v===47||v===62||V(v)?w(v):t(v)}function D(v){return v===62?(e.consume(v),T):t(v)}function T(v){return v===null||B(v)?j(v):V(v)?(e.consume(v),T):t(v)}function j(v){return v===45&&i===2?(e.consume(v),he):v===60&&i===1?(e.consume(v),fe):v===62&&i===4?(e.consume(v),X):v===63&&i===3?(e.consume(v),y):v===93&&i===5?(e.consume(v),H):B(v)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Tw,$,Q)(v)):v===null||B(v)?(e.exit("htmlFlowData"),Q(v)):(e.consume(v),j)}function Q(v){return e.check(jw,le,$)(v)}function le(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),O}function O(v){return v===null||B(v)?Q(v):(e.enter("htmlFlowData"),j(v))}function he(v){return v===45?(e.consume(v),y):j(v)}function fe(v){return v===47?(e.consume(v),o="",R):j(v)}function R(v){if(v===62){const we=o.toLowerCase();return Jc.includes(we)?(e.consume(v),X):j(v)}return vn(v)&&o.length<8?(e.consume(v),o+=String.fromCharCode(v),R):j(v)}function H(v){return v===93?(e.consume(v),y):j(v)}function y(v){return v===62?(e.consume(v),X):v===45&&i===2?(e.consume(v),y):j(v)}function X(v){return v===null||B(v)?(e.exit("htmlFlowData"),$(v)):(e.consume(v),X)}function $(v){return e.exit("htmlFlow"),n(v)}}function Bw(e,n,t){const r=this;return i;function i(o){return B(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):t(o)}function a(o){return r.parser.lazy[r.now().line]?t(o):n(o)}}function zw(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Ua,n,t)}}const Jw={name:"htmlText",tokenize:Fw};function Fw(e,n,t){const r=this;let i,a,o;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),P):y===63?(e.consume(y),w):vn(y)?(e.consume(y),M):t(y)}function u(y){return y===45?(e.consume(y),c):y===91?(e.consume(y),a=0,x):vn(y)?(e.consume(y),m):t(y)}function c(y){return y===45?(e.consume(y),p):t(y)}function d(y){return y===null?t(y):y===45?(e.consume(y),h):B(y)?(o=d,fe(y)):(e.consume(y),d)}function h(y){return y===45?(e.consume(y),p):d(y)}function p(y){return y===62?he(y):y===45?h(y):d(y)}function x(y){const X="CDATA[";return y===X.charCodeAt(a++)?(e.consume(y),a===X.length?A:x):t(y)}function A(y){return y===null?t(y):y===93?(e.consume(y),k):B(y)?(o=A,fe(y)):(e.consume(y),A)}function k(y){return y===93?(e.consume(y),g):A(y)}function g(y){return y===62?he(y):y===93?(e.consume(y),g):A(y)}function m(y){return y===null||y===62?he(y):B(y)?(o=m,fe(y)):(e.consume(y),m)}function w(y){return y===null?t(y):y===63?(e.consume(y),b):B(y)?(o=w,fe(y)):(e.consume(y),w)}function b(y){return y===62?he(y):w(y)}function P(y){return vn(y)?(e.consume(y),S):t(y)}function S(y){return y===45||Xe(y)?(e.consume(y),S):I(y)}function I(y){return B(y)?(o=I,fe(y)):V(y)?(e.consume(y),I):he(y)}function M(y){return y===45||Xe(y)?(e.consume(y),M):y===47||y===62||ze(y)?_(y):t(y)}function _(y){return y===47?(e.consume(y),he):y===58||y===95||vn(y)?(e.consume(y),D):B(y)?(o=_,fe(y)):V(y)?(e.consume(y),_):he(y)}function D(y){return y===45||y===46||y===58||y===95||Xe(y)?(e.consume(y),D):T(y)}function T(y){return y===61?(e.consume(y),j):B(y)?(o=T,fe(y)):V(y)?(e.consume(y),T):_(y)}function j(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),i=y,Q):B(y)?(o=j,fe(y)):V(y)?(e.consume(y),j):(e.consume(y),le)}function Q(y){return y===i?(e.consume(y),i=void 0,O):y===null?t(y):B(y)?(o=Q,fe(y)):(e.consume(y),Q)}function le(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||ze(y)?_(y):(e.consume(y),le)}function O(y){return y===47||y===62||ze(y)?_(y):t(y)}function he(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function fe(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),R}function R(y){return V(y)?te(e,H,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):H(y)}function H(y){return e.enter("htmlTextData"),o(y)}}const Ys={name:"labelEnd",resolveAll:Xw,resolveTo:Yw,tokenize:Vw},Uw={tokenize:Qw},Ow={tokenize:Kw},Gw={tokenize:$w};function Xw(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&bn(e,0,e.length,t),e}function Yw(e,n){let t=e.length,r=0,i,a,o,l;for(;t--;)if(i=e[t][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(o=t);const s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,n],["enter",u,n]],l=en(l,e.slice(a+1,a+r+3)),l=en(l,[["enter",c,n]]),l=en(l,Xs(n.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),n)),l=en(l,[["exit",c,n],e[o-2],e[o-1],["exit",u,n]]),l=en(l,e.slice(o+1)),l=en(l,[["exit",s,n]]),bn(e,a,e.length,l),e}function Vw(e,n,t){const r=this;let i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return l;function l(h){return a?a._inactive?d(h):(o=r.parser.defined.includes($t(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),s):t(h)}function s(h){return h===40?e.attempt(Uw,c,o?c:d)(h):h===91?e.attempt(Ow,c,o?u:d)(h):o?c(h):d(h)}function u(h){return e.attempt(Gw,c,d)(h)}function c(h){return n(h)}function d(h){return a._balanced=!0,t(h)}}function Qw(e,n,t){return r;function r(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),i}function i(d){return ze(d)?Br(e,a)(d):a(d)}function a(d){return d===41?c(d):uh(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return ze(d)?Br(e,s)(d):c(d)}function l(d){return t(d)}function s(d){return d===34||d===39||d===40?dh(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return ze(d)?Br(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function Kw(e,n,t){const r=this;return i;function i(l){return ch.call(r,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return r.parser.defined.includes($t(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function o(l){return t(l)}}function $w(e,n,t){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const qw={name:"labelStartImage",resolveAll:Ys.resolveAll,tokenize:ex};function ex(e,n,t){const r=this;return i;function i(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):t(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const nx={name:"labelStartLink",resolveAll:Ys.resolveAll,tokenize:tx};function tx(e,n,t){const r=this;return i;function i(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const Co={name:"lineEnding",tokenize:rx};function rx(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),te(e,n,"linePrefix")}}const Qi={name:"thematicBreak",tokenize:ix};function ix(e,n,t){let r=0,i;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return i=u,l(u)}function l(u){return u===i?(e.enter("thematicBreakSequence"),s(u)):r>=3&&(u===null||B(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===i?(e.consume(u),r++,s):(e.exit("thematicBreakSequence"),V(u)?te(e,l,"whitespace")(u):l(u))}}const De={continuation:{tokenize:sx},exit:cx,name:"list",tokenize:lx},ax={partial:!0,tokenize:dx},ox={partial:!0,tokenize:ux};function lx(e,n,t){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,o=0;return l;function l(p){const x=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Dl(p)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(Qi,t,u)(p):u(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return Dl(p)&&++o<10?(e.consume(p),s):(!r.interrupt||o<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(Ua,r.interrupt?t:c,e.attempt(ax,h,d))}function c(p){return r.containerState.initialBlankLine=!0,a++,h(p)}function d(p){return V(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):t(p)}function h(p){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function sx(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(Ua,i,a);function i(l){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,te(e,n,"listItemIndent",r.containerState.size+1)(l)}function a(l){return r.containerState.furtherBlankLines||!V(l)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(l)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(ox,n,o)(l))}function o(l){return r.containerState._closeFlow=!0,r.interrupt=void 0,te(e,e.attempt(De,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function ux(e,n,t){const r=this;return te(e,i,"listItemIndent",r.containerState.size+1);function i(a){const o=r.events[r.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===r.containerState.size?n(a):t(a)}}function cx(e){e.exit(this.containerState.type)}function dx(e,n,t){const r=this;return te(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const o=r.events[r.events.length-1];return!V(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const Fc={name:"setextUnderline",resolveTo:fx,tokenize:px};function fx(e,n){let t=e.length,r,i,a;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!a&&e[t][1].type==="definition"&&(a=t);const o={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",o,n]),e.splice(a+1,0,["exit",e[r][1],n]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push(["exit",o,n]),e}function px(e,n,t){const r=this;let i;return a;function a(u){let c=r.events.length,d;for(;c--;)if(r.events[c][1].type!=="lineEnding"&&r.events[c][1].type!=="linePrefix"&&r.events[c][1].type!=="content"){d=r.events[c][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||d)?(e.enter("setextHeadingLine"),i=u,o(u)):t(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===i?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),V(u)?te(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||B(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const hx={tokenize:gx};function gx(e){const n=this,t=e.attempt(Ua,r,e.attempt(this.parser.constructs.flowInitial,i,te(e,e.attempt(this.parser.constructs.flow,i,e.attempt(vw,i)),"linePrefix")));return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const mx={resolveAll:ph()},yx=fh("string"),wx=fh("text");function fh(e){return{resolveAll:ph(e==="text"?xx:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],a=t.attempt(i,o,l);return o;function o(c){return u(c)?a(c):l(c)}function l(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),a(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const d=i[c];let h=-1;if(d)for(;++h<d.length;){const p=d[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function ph(e){return n;function n(t,r){let i=-1,a;for(;++i<=t.length;)a===void 0?t[i]&&t[i][1].type==="data"&&(a=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==a+2&&(t[a][1].end=t[i-1][1].end,t.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(t,r):t}}function xx(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let a=i.length,o=-1,l=0,s;for(;a--;){const u=i[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(u===-2)s=!0,l++;else if(u!==-1){a++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(l=0),l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-l,offset:r.end.offset-l},end:{...r.end}};r.end={...u.start},r.start.offset===r.end.offset?Object.assign(r,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const vx={42:De,43:De,45:De,48:De,49:De,50:De,51:De,52:De,53:De,54:De,55:De,56:De,57:De,62:ah},Ax={91:Cw},Sx={[-2]:ko,[-1]:ko,32:ko},bx={35:Ww,42:Qi,45:[Fc,Qi],60:Dw,61:Fc,95:Qi,96:zc,126:zc},kx={38:lh,92:oh},Cx={[-5]:Co,[-4]:Co,[-3]:Co,33:qw,38:lh,42:Tl,60:[nw,Jw],91:nx,92:[Nw,oh],93:Ys,95:Tl,96:hw},Px={null:[Tl,mx]},Lx={null:[42,95]},Ex={null:[]},Nx=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Lx,contentInitial:Ax,disable:Ex,document:vx,flow:bx,flowInitial:Sx,insideSpan:Px,string:kx,text:Cx},Symbol.toStringTag,{value:"Module"}));function Ix(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},a=[];let o=[],l=[];const s={attempt:I(P),check:I(S),consume:m,enter:w,exit:b,interrupt:I(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:A,events:[],now:x,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:d};let c=n.tokenize.call(u,s);return n.resolveAll&&a.push(n),u;function d(T){return o=en(o,T),k(),o[o.length-1]!==null?[]:(M(n,0),u.events=Xs(a,u.events,u),u.events)}function h(T,j){return Rx(p(T),j)}function p(T){return Wx(o,T)}function x(){const{_bufferIndex:T,_index:j,line:Q,column:le,offset:O}=r;return{_bufferIndex:T,_index:j,line:Q,column:le,offset:O}}function A(T){i[T.line]=T.column,D()}function k(){let T;for(;r._index<o.length;){const j=o[r._index];if(typeof j=="string")for(T=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===T&&r._bufferIndex<j.length;)g(j.charCodeAt(r._bufferIndex));else g(j)}}function g(T){c=c(T)}function m(T){B(T)?(r.line++,r.column=1,r.offset+=T===-3?2:1,D()):T!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),u.previous=T}function w(T,j){const Q=j||{};return Q.type=T,Q.start=x(),u.events.push(["enter",Q,u]),l.push(Q),Q}function b(T){const j=l.pop();return j.end=x(),u.events.push(["exit",j,u]),j}function P(T,j){M(T,j.from)}function S(T,j){j.restore()}function I(T,j){return Q;function Q(le,O,he){let fe,R,H,y;return Array.isArray(le)?$(le):"tokenize"in le?$([le]):X(le);function X(re){return gn;function gn(jn){const Lt=jn!==null&&re[jn],Et=jn!==null&&re.null,mi=[...Array.isArray(Lt)?Lt:Lt?[Lt]:[],...Array.isArray(Et)?Et:Et?[Et]:[]];return $(mi)(jn)}}function $(re){return fe=re,R=0,re.length===0?he:v(re[R])}function v(re){return gn;function gn(jn){return y=_(),H=re,re.partial||(u.currentConstruct=re),re.name&&u.parser.constructs.disable.null.includes(re.name)?on():re.tokenize.call(j?Object.assign(Object.create(u),j):u,s,we,on)(jn)}}function we(re){return T(H,y),O}function on(re){return y.restore(),++R<fe.length?v(fe[R]):he}}}function M(T,j){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&bn(u.events,j,u.events.length-j,T.resolve(u.events.slice(j),u)),T.resolveTo&&(u.events=T.resolveTo(u.events,u))}function _(){const T=x(),j=u.previous,Q=u.currentConstruct,le=u.events.length,O=Array.from(l);return{from:le,restore:he};function he(){r=T,u.previous=j,u.currentConstruct=Q,u.events.length=le,l=O,D()}}function D(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Wx(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let o;if(t===i)o=[e[t].slice(r,a)];else{if(o=e.slice(t,i),r>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function Rx(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const a=e[t];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&i)continue;o=" ";break}default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join("")}function Mx(e){const r={constructs:B1([Nx,...(e||{}).extensions||[]]),content:i(Y1),defined:[],document:i(Q1),flow:i(hx),lazy:{},string:i(yx),text:i(wx)};return r;function i(a){return o;function o(l){return Ix(r,a,l)}}}function Zx(e){for(;!sh(e););return e}const Uc=/[\0\t\n\r]/g;function Dx(){let e=1,n="",t=!0,r;return i;function i(a,o,l){const s=[];let u,c,d,h,p;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),d=0,n="",t&&(a.charCodeAt(0)===65279&&d++,t=void 0);d<a.length;){if(Uc.lastIndex=d,u=Uc.exec(a),h=u&&u.index!==void 0?u.index:a.length,p=a.charCodeAt(h),!u){n=a.slice(d);break}if(p===10&&d===h&&r)s.push(-3),r=void 0;else switch(r&&(s.push(-5),r=void 0),d<h&&(s.push(a.slice(d,h)),e+=h-d),p){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:r=!0,e=1}d=h+1}return l&&(r&&s.push(-5),n&&s.push(n),s.push(null)),s}}const Tx=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function jx(e){return e.replace(Tx,Hx)}function Hx(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),a=i===120||i===88;return ih(t.slice(a?2:1),a?16:10)}return Gs(t)||e}const hh={}.hasOwnProperty;function _x(e,n,t){return typeof n!="string"&&(t=n,n=void 0),Bx(t)(Zx(Mx(t).document().write(Dx()(e,n,!0))))}function Bx(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(ru),autolinkProtocol:_,autolinkEmail:_,atxHeading:a(eu),blockQuote:a(Et),characterEscape:_,characterReference:_,codeFenced:a(mi),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(mi,o),codeText:a(Nh,o),codeTextData:_,data:_,codeFlowValue:_,definition:a(Ih),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Wh),hardBreakEscape:a(nu),hardBreakTrailing:a(nu),htmlFlow:a(tu,o),htmlFlowData:_,htmlText:a(tu,o),htmlTextData:_,image:a(Rh),label:o,link:a(ru),listItem:a(Mh),listItemValue:h,listOrdered:a(iu,d),listUnordered:a(iu),paragraph:a(Zh),reference:v,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(eu),strong:a(Dh),thematicBreak:a(jh)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:Lt,autolinkProtocol:jn,blockQuote:s(),characterEscapeValue:D,characterReferenceMarkerHexadecimal:on,characterReferenceMarkerNumeric:on,characterReferenceValue:re,characterReference:gn,codeFenced:s(k),codeFencedFence:A,codeFencedFenceInfo:p,codeFencedFenceMeta:x,codeFlowValue:D,codeIndented:s(g),codeText:s(O),codeTextData:D,data:D,definition:s(),definitionDestinationString:b,definitionLabelString:m,definitionTitleString:w,emphasis:s(),hardBreakEscape:s(j),hardBreakTrailing:s(j),htmlFlow:s(Q),htmlFlowData:D,htmlText:s(le),htmlTextData:D,image:s(fe),label:H,labelText:R,lineEnding:T,link:s(he),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:we,resourceDestinationString:y,resourceTitleString:X,resource:$,setextHeading:s(M),setextHeadingLineSequence:I,setextHeadingText:S,strong:s(),thematicBreak:s()}};gh(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(C){let W={type:"root",children:[]};const z={stack:[W],tokenStack:[],config:n,enter:l,exit:u,buffer:o,resume:c,data:t},G=[];let q=-1;for(;++q<C.length;)if(C[q][1].type==="listOrdered"||C[q][1].type==="listUnordered")if(C[q][0]==="enter")G.push(q);else{const ln=G.pop();q=i(C,ln,q)}for(q=-1;++q<C.length;){const ln=n[C[q][0]];hh.call(ln,C[q][1].type)&&ln[C[q][1].type].call(Object.assign({sliceSerialize:C[q][2].sliceSerialize},z),C[q][1])}if(z.tokenStack.length>0){const ln=z.tokenStack[z.tokenStack.length-1];(ln[1]||Oc).call(z,void 0,ln[0])}for(W.position={start:_n(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:_n(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<n.transforms.length;)W=n.transforms[q](W)||W;return W}function i(C,W,z){let G=W-1,q=-1,ln=!1,st,kn,pr,hr;for(;++G<=z;){const Fe=C[G];switch(Fe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Fe[0]==="enter"?q++:q--,hr=void 0;break}case"lineEndingBlank":{Fe[0]==="enter"&&(st&&!hr&&!q&&!pr&&(pr=G),hr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:hr=void 0}if(!q&&Fe[0]==="enter"&&Fe[1].type==="listItemPrefix"||q===-1&&Fe[0]==="exit"&&(Fe[1].type==="listUnordered"||Fe[1].type==="listOrdered")){if(st){let Nt=G;for(kn=void 0;Nt--;){const Cn=C[Nt];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;kn&&(C[kn][1].type="lineEndingBlank",ln=!0),Cn[1].type="lineEnding",kn=Nt}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}pr&&(!kn||pr<kn)&&(st._spread=!0),st.end=Object.assign({},kn?C[kn][1].start:Fe[1].end),C.splice(kn||G,0,["exit",st,Fe[2]]),G++,z++}if(Fe[1].type==="listItemPrefix"){const Nt={type:"listItem",_spread:!1,start:Object.assign({},Fe[1].start),end:void 0};st=Nt,C.splice(G,0,["enter",Nt,Fe[2]]),G++,z++,pr=void 0,hr=!0}}}return C[W][1]._spread=ln,z}function a(C,W){return z;function z(G){l.call(this,C(G),G),W&&W.call(this,G)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(C,W,z){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([W,z||void 0]),C.position={start:_n(W.start),end:void 0}}function s(C){return W;function W(z){C&&C.call(this,z),u.call(this,z)}}function u(C,W){const z=this.stack.pop(),G=this.tokenStack.pop();if(G)G[0].type!==C.type&&(W?W.call(this,C,G[0]):(G[1]||Oc).call(this,C,G[0]));else throw new Error("Cannot close `"+C.type+"` ("+_r({start:C.start,end:C.end})+"): it’s not open");z.position.end=_n(C.end)}function c(){return H1(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(C){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function p(){const C=this.resume(),W=this.stack[this.stack.length-1];W.lang=C}function x(){const C=this.resume(),W=this.stack[this.stack.length-1];W.meta=C}function A(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function k(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C.replace(/(\r?\n|\r)$/g,"")}function m(C){const W=this.resume(),z=this.stack[this.stack.length-1];z.label=W,z.identifier=$t(this.sliceSerialize(C)).toLowerCase()}function w(){const C=this.resume(),W=this.stack[this.stack.length-1];W.title=C}function b(){const C=this.resume(),W=this.stack[this.stack.length-1];W.url=C}function P(C){const W=this.stack[this.stack.length-1];if(!W.depth){const z=this.sliceSerialize(C).length;W.depth=z}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function I(C){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function _(C){const z=this.stack[this.stack.length-1].children;let G=z[z.length-1];(!G||G.type!=="text")&&(G=Th(),G.position={start:_n(C.start),end:void 0},z.push(G)),this.stack.push(G)}function D(C){const W=this.stack.pop();W.value+=this.sliceSerialize(C),W.position.end=_n(C.end)}function T(C){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=W.children[W.children.length-1];z.position.end=_n(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(W.type)&&(_.call(this,C),D.call(this,C))}function j(){this.data.atHardBreak=!0}function Q(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C}function le(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C}function O(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C}function he(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=W,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function fe(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=W,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function R(C){const W=this.sliceSerialize(C),z=this.stack[this.stack.length-2];z.label=jx(W),z.identifier=$t(W).toLowerCase()}function H(){const C=this.stack[this.stack.length-1],W=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const G=C.children;z.children=G}else z.alt=W}function y(){const C=this.resume(),W=this.stack[this.stack.length-1];W.url=C}function X(){const C=this.resume(),W=this.stack[this.stack.length-1];W.title=C}function $(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function we(C){const W=this.resume(),z=this.stack[this.stack.length-1];z.label=W,z.identifier=$t(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function on(C){this.data.characterReferenceType=C.type}function re(C){const W=this.sliceSerialize(C),z=this.data.characterReferenceType;let G;z?(G=ih(W,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):G=Gs(W);const q=this.stack[this.stack.length-1];q.value+=G}function gn(C){const W=this.stack.pop();W.position.end=_n(C.end)}function jn(C){D.call(this,C);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(C)}function Lt(C){D.call(this,C);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(C)}function Et(){return{type:"blockquote",children:[]}}function mi(){return{type:"code",lang:null,meta:null,value:""}}function Nh(){return{type:"inlineCode",value:""}}function Ih(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Wh(){return{type:"emphasis",children:[]}}function eu(){return{type:"heading",depth:0,children:[]}}function nu(){return{type:"break"}}function tu(){return{type:"html",value:""}}function Rh(){return{type:"image",title:null,url:"",alt:null}}function ru(){return{type:"link",title:null,url:"",children:[]}}function iu(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function Mh(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function Zh(){return{type:"paragraph",children:[]}}function Dh(){return{type:"strong",children:[]}}function Th(){return{type:"text",value:""}}function jh(){return{type:"thematicBreak"}}}function _n(e){return{line:e.line,column:e.column,offset:e.offset}}function gh(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?gh(e,r):zx(e,r)}}function zx(e,n){let t;for(t in n)if(hh.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function Oc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+_r({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+_r({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+_r({start:n.start,end:n.end})+") is still open")}function Jx(e){const n=this;n.parser=t;function t(r){return _x(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function Fx(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Ux(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function Ox(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(a.data={meta:n.meta}),e.patch(n,a),a=e.applyData(n,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(n,a),a}function Gx(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Xx(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Yx(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=fr(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let o,l=e.footnoteCounts.get(r);l===void 0?(l=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(r,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function Vx(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Qx(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function mh(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const o=i[i.length-1];return o&&o.type==="text"?o.value+=r:i.push({type:"text",value:r}),i}function Kx(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return mh(e,n);const i={src:fr(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function $x(e,n){const t={src:fr(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function qx(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function ev(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return mh(e,n);const i={href:fr(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function nv(e,n){const t={href:fr(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function tv(e,n,t){const r=e.all(n),i=t?rv(t):yh(n),a={},o=[];if(typeof n.checked=="boolean"){const c=r[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},r.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<r.length;){const c=r[l];(i||l!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!i?o.push(...c.children):o.push(c)}const s=r[r.length-1];s&&(i||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:o};return e.patch(n,u),e.applyData(n,u)}function rv(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=yh(t[r])}return n}function yh(e){const n=e.spread;return n??e.children.length>1}function iv(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const o=r[i];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function av(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function ov(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function lv(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function sv(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],o),i.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=Js(n.children[1]),s=Kp(n.children[n.children.length-1]);l&&s&&(o.position={start:l,end:s}),i.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function uv(e,n,t){const r=t?t.children:void 0,a=(r?r.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:n.children.length;let s=-1;const u=[];for(;++s<l;){const d=n.children[s],h={},p=o?o[s]:void 0;p&&(h.align=p);let x={type:"element",tagName:a,properties:h,children:[]};d&&(x.children=e.all(d),e.patch(d,x),x=e.applyData(d,x)),u.push(x)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,c),e.applyData(n,c)}function cv(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Gc=9,Xc=32;function dv(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const a=[];for(;r;)a.push(Yc(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return a.push(Yc(n.slice(i),i>0,!1)),a.join("")}function Yc(e,n,t){let r=0,i=e.length;if(n){let a=e.codePointAt(r);for(;a===Gc||a===Xc;)r++,a=e.codePointAt(r)}if(t){let a=e.codePointAt(i-1);for(;a===Gc||a===Xc;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function fv(e,n){const t={type:"text",value:dv(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function pv(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const hv={blockquote:Fx,break:Ux,code:Ox,delete:Gx,emphasis:Xx,footnoteReference:Yx,heading:Vx,html:Qx,imageReference:Kx,image:$x,inlineCode:qx,linkReference:ev,link:nv,listItem:tv,list:iv,paragraph:av,root:ov,strong:lv,table:sv,tableCell:cv,tableRow:uv,text:fv,thematicBreak:pv,toml:Zi,yaml:Zi,definition:Zi,footnoteDefinition:Zi};function Zi(){}const wh=-1,Oa=0,zr=1,ka=2,Vs=3,Qs=4,Ks=5,$s=6,xh=7,vh=8,Vc=typeof self=="object"?self:globalThis,gv=(e,n)=>{const t=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,o]=n[i];switch(a){case Oa:case wh:return t(o,i);case zr:{const l=t([],i);for(const s of o)l.push(r(s));return l}case ka:{const l=t({},i);for(const[s,u]of o)l[r(s)]=r(u);return l}case Vs:return t(new Date(o),i);case Qs:{const{source:l,flags:s}=o;return t(new RegExp(l,s),i)}case Ks:{const l=t(new Map,i);for(const[s,u]of o)l.set(r(s),r(u));return l}case $s:{const l=t(new Set,i);for(const s of o)l.add(r(s));return l}case xh:{const{name:l,message:s}=o;return t(new Vc[l](s),i)}case vh:return t(BigInt(o),i);case"BigInt":return t(Object(BigInt(o)),i);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new Vc[a](o),i)};return r},Qc=e=>gv(new Map,e)(0),Wt="",{toString:mv}={},{keys:yv}=Object,kr=e=>{const n=typeof e;if(n!=="object"||!e)return[Oa,n];const t=mv.call(e).slice(8,-1);switch(t){case"Array":return[zr,Wt];case"Object":return[ka,Wt];case"Date":return[Vs,Wt];case"RegExp":return[Qs,Wt];case"Map":return[Ks,Wt];case"Set":return[$s,Wt];case"DataView":return[zr,t]}return t.includes("Array")?[zr,t]:t.includes("Error")?[xh,t]:[ka,t]},Di=([e,n])=>e===Oa&&(n==="function"||n==="symbol"),wv=(e,n,t,r)=>{const i=(o,l)=>{const s=r.push(o)-1;return t.set(l,s),s},a=o=>{if(t.has(o))return t.get(o);let[l,s]=kr(o);switch(l){case Oa:{let c=o;switch(s){case"bigint":l=vh,c=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return i([wh],o)}return i([l,c],o)}case zr:{if(s){let h=o;return s==="DataView"?h=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(h=new Uint8Array(o)),i([s,[...h]],o)}const c=[],d=i([l,c],o);for(const h of o)c.push(a(h));return d}case ka:{if(s)switch(s){case"BigInt":return i([s,o.toString()],o);case"Boolean":case"Number":case"String":return i([s,o.valueOf()],o)}if(n&&"toJSON"in o)return a(o.toJSON());const c=[],d=i([l,c],o);for(const h of yv(o))(e||!Di(kr(o[h])))&&c.push([a(h),a(o[h])]);return d}case Vs:return i([l,o.toISOString()],o);case Qs:{const{source:c,flags:d}=o;return i([l,{source:c,flags:d}],o)}case Ks:{const c=[],d=i([l,c],o);for(const[h,p]of o)(e||!(Di(kr(h))||Di(kr(p))))&&c.push([a(h),a(p)]);return d}case $s:{const c=[],d=i([l,c],o);for(const h of o)(e||!Di(kr(h)))&&c.push(a(h));return d}}const{message:u}=o;return i([l,{name:s,message:u}],o)};return a},Kc=(e,{json:n,lossy:t}={})=>{const r=[];return wv(!(n||t),!!n,new Map,r)(e),r},Ca=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?Qc(Kc(e,n)):structuredClone(e):(e,n)=>Qc(Kc(e,n));function xv(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function vv(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Av(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||xv,r=e.options.footnoteBackLabel||vv,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),d=String(u.identifier).toUpperCase(),h=fr(d.toLowerCase());let p=0;const x=[],A=e.footnoteCounts.get(d);for(;A!==void 0&&++p<=A;){x.length>0&&x.push({type:"text",value:" "});let m=typeof t=="string"?t:t(s,p);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const k=c[c.length-1];if(k&&k.type==="element"&&k.tagName==="p"){const m=k.children[k.children.length-1];m&&m.type==="text"?m.value+=" ":k.children.push({type:"text",value:" "}),k.children.push(...x)}else c.push(...x);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(c,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Ca(o),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Ah=function(e){if(e==null)return Cv;if(typeof e=="function")return Ga(e);if(typeof e=="object")return Array.isArray(e)?Sv(e):bv(e);if(typeof e=="string")return kv(e);throw new Error("Expected function, string, or object as test")};function Sv(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Ah(e[t]);return Ga(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function bv(e){const n=e;return Ga(t);function t(r){const i=r;let a;for(a in e)if(i[a]!==n[a])return!1;return!0}}function kv(e){return Ga(n);function n(t){return t&&t.type===e}}function Ga(e){return n;function n(t,r,i){return!!(Pv(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function Cv(){return!0}function Pv(e){return e!==null&&typeof e=="object"&&"type"in e}const Sh=[],Lv=!0,$c=!1,Ev="skip";function Nv(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const a=Ah(i),o=r?-1:1;l(e,void 0,[])();function l(s,u,c){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Sh,x,A,k;if((!n||a(s,u,c[c.length-1]||void 0))&&(p=Iv(t(s,c)),p[0]===$c))return p;if("children"in s&&s.children){const g=s;if(g.children&&p[0]!==Ev)for(A=(r?g.children.length:-1)+o,k=c.concat(g);A>-1&&A<g.children.length;){const m=g.children[A];if(x=l(m,A,k)(),x[0]===$c)return x;A=typeof x[1]=="number"?x[1]:A+o}}return p}}}function Iv(e){return Array.isArray(e)?e:typeof e=="number"?[Lv,e]:e==null?Sh:[e]}function bh(e,n,t,r){let i,a,o;typeof n=="function"&&typeof t!="function"?(a=void 0,o=n,i=t):(a=n,o=t,i=r),Nv(e,a,l,i);function l(s,u){const c=u[u.length-1],d=c?c.children.indexOf(s):void 0;return o(s,d,c)}}const jl={}.hasOwnProperty,Wv={};function Rv(e,n){const t=n||Wv,r=new Map,i=new Map,a=new Map,o={...hv,...t.handlers},l={all:u,applyData:Zv,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:t,patch:Mv,wrap:Tv};return bh(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?r:i,h=String(c.identifier).toUpperCase();d.has(h)||d.set(h,c)}}),l;function s(c,d){const h=c.type,p=l.handlers[h];if(jl.call(l.handlers,h)&&p)return p(l,c,d);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in c){const{children:A,...k}=c,g=Ca(k);return g.children=l.all(c),g}return Ca(c)}return(l.options.unknownHandler||Dv)(l,c,d)}function u(c){const d=[];if("children"in c){const h=c.children;let p=-1;for(;++p<h.length;){const x=l.one(h[p],c);if(x){if(p&&h[p-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=qc(x.value)),!Array.isArray(x)&&x.type==="element")){const A=x.children[0];A&&A.type==="text"&&(A.value=qc(A.value))}Array.isArray(x)?d.push(...x):d.push(x)}}}return d}}function Mv(e,n){e.position&&(n.position=m1(e))}function Zv(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const o="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:o}}t.type==="element"&&a&&Object.assign(t.properties,Ca(a)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function Dv(e,n){const t=n.data||{},r="value"in n&&!(jl.call(t,"hProperties")||jl.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Tv(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function qc(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function ed(e,n){const t=Rv(e,n),r=t.one(e,void 0),i=Av(t),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function jv(e,n){return e&&"run"in e?async function(t,r){const i=ed(t,{file:r,...n});await e.run(i,r)}:function(t,r){return ed(t,{file:r,...e||n})}}function nd(e){if(e)throw e}var Ki=Object.prototype.hasOwnProperty,kh=Object.prototype.toString,td=Object.defineProperty,rd=Object.getOwnPropertyDescriptor,id=function(n){return typeof Array.isArray=="function"?Array.isArray(n):kh.call(n)==="[object Array]"},ad=function(n){if(!n||kh.call(n)!=="[object Object]")return!1;var t=Ki.call(n,"constructor"),r=n.constructor&&n.constructor.prototype&&Ki.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!r)return!1;var i;for(i in n);return typeof i>"u"||Ki.call(n,i)},od=function(n,t){td&&t.name==="__proto__"?td(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},ld=function(n,t){if(t==="__proto__")if(Ki.call(n,t)){if(rd)return rd(n,t).value}else return;return n[t]},Hv=function e(){var n,t,r,i,a,o,l=arguments[0],s=1,u=arguments.length,c=!1;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)r=ld(l,t),i=ld(n,t),l!==i&&(c&&i&&(ad(i)||(a=id(i)))?(a?(a=!1,o=r&&id(r)?r:[]):o=r&&ad(r)?r:{},od(l,{name:t,newValue:e(c,o,i)})):typeof i<"u"&&od(l,{name:t,newValue:i}));return l};const Po=zl(Hv);function Hl(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function _v(){const e=[],n={run:t,use:r};return n;function t(...i){let a=-1;const o=i.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...i);function l(s,...u){const c=e[++a];let d=-1;if(s){o(s);return}for(;++d<i.length;)(u[d]===null||u[d]===void 0)&&(u[d]=i[d]);i=u,c?Bv(c,l)(...u):o(null,...u)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function Bv(e,n){let t;return r;function r(...o){const l=e.length>o.length;let s;l&&o.push(i);try{s=e.apply(this,o)}catch(u){const c=u;if(l&&t)throw c;return i(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,i):s instanceof Error?i(s):a(s))}function i(o,...l){t||(t=!0,n(o,...l))}function a(o){i(null,o)}}const wn={basename:zv,dirname:Jv,extname:Fv,join:Uv,sep:"/"};function zv(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');gi(e);let t=0,r=-1,i=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let o=-1,l=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else o<0&&(a=!0,o=i+1),l>-1&&(e.codePointAt(i)===n.codePointAt(l--)?l<0&&(r=i):(l=-1,r=o));return t===r?r=o:r<0&&(r=e.length),e.slice(t,r)}function Jv(e){if(gi(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Fv(e){gi(e);let n=e.length,t=-1,r=0,i=-1,a=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){r=n+1;break}continue}t<0&&(o=!0,t=n+1),l===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||t<0||a===0||a===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function Uv(...e){let n=-1,t;for(;++n<e.length;)gi(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Ov(t)}function Ov(e){gi(e);const n=e.codePointAt(0)===47;let t=Gv(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Gv(e,n){let t="",r=0,i=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",r=0):(t=t.slice(0,s),r=t.length-1-t.lastIndexOf("/")),i=o,a=0;continue}}else if(t.length>0){t="",r=0,i=o,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,o):t=e.slice(i+1,o),r=o-i-1;i=o,a=0}else l===46&&a>-1?a++:a=-1}return t}function gi(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Xv={cwd:Yv};function Yv(){return"/"}function _l(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Vv(e){if(typeof e=="string")e=new URL(e);else if(!_l(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return Qv(e)}function Qv(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Lo=["history","path","basename","stem","extname","dirname"];class Ch{constructor(n){let t;n?_l(n)?t={path:n}:typeof n=="string"||Kv(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Xv.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Lo.length;){const a=Lo[r];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let i;for(i in t)Lo.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?wn.basename(this.path):void 0}set basename(n){No(n,"basename"),Eo(n,"basename"),this.path=wn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?wn.dirname(this.path):void 0}set dirname(n){sd(this.basename,"dirname"),this.path=wn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?wn.extname(this.path):void 0}set extname(n){if(Eo(n,"extname"),sd(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=wn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){_l(n)&&(n=Vv(n)),No(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?wn.basename(this.path,this.extname):void 0}set stem(n){No(n,"stem"),Eo(n,"stem"),this.path=wn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new Ie(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Eo(e,n){if(e&&e.includes(wn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+wn.sep+"`")}function No(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function sd(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function Kv(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const $v=function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a},qv={}.hasOwnProperty;class qs extends $v{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=_v()}copy(){const n=new qs;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Po(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Ro("data",this.frozen),this.namespace[n]=t,this):qv.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Ro("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Ti(n),r=this.parser||this.Parser;return Io("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Io("process",this.parser||this.Parser),Wo("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(a,o){const l=Ti(n),s=r.parse(l);r.run(s,l,function(c,d,h){if(c||!d||!h)return u(c);const p=d,x=r.stringify(p,h);t2(x)?h.value=x:h.result=x,u(c,h)});function u(c,d){c||!d?o(c):a?a(d):t(void 0,d)}}}processSync(n){let t=!1,r;return this.freeze(),Io("processSync",this.parser||this.Parser),Wo("processSync",this.compiler||this.Compiler),this.process(n,i),cd("processSync","process",t),r;function i(a,o){t=!0,nd(a),r=o}}run(n,t,r){ud(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?a(void 0,r):new Promise(a);function a(o,l){const s=Ti(t);i.run(n,s,u);function u(c,d,h){const p=d||n;c?l(c):o?o(p):r(void 0,p,h)}}}runSync(n,t){let r=!1,i;return this.run(n,t,a),cd("runSync","run",r),i;function a(o,l){nd(o),i=l,r=!0}}stringify(n,t){this.freeze();const r=Ti(t),i=this.compiler||this.Compiler;return Wo("stringify",i),ud(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Ro("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;s(c,d)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(i.settings=Po(!0,i.settings,u.settings))}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];a(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let d=-1,h=-1;for(;++d<r.length;)if(r[d][0]===u){h=d;break}if(h===-1)r.push([u,...c]);else if(c.length>0){let[p,...x]=c;const A=r[h][1];Hl(A)&&Hl(p)&&(p=Po(!0,A,p)),r[h]=[u,p,...x]}}}}const e2=new qs().freeze();function Io(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Wo(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ro(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ud(e){if(!Hl(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function cd(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Ti(e){return n2(e)?e:new Ch(e)}function n2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function t2(e){return typeof e=="string"||r2(e)}function r2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const i2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",dd=[],fd={allowDangerousHtml:!0},a2=/^(https?|ircs?|mailto|xmpp)$/i,o2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ph(e){const n=l2(e),t=s2(e);return u2(n.runSync(n.parse(t),t),e)}function l2(e){const n=e.rehypePlugins||dd,t=e.remarkPlugins||dd,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...fd}:fd;return e2().use(Jx).use(t).use(jv,r).use(n)}function s2(e){const n=e.children||"",t=new Ch;return typeof n=="string"&&(t.value=n),t}function u2(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,a=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,s=n.urlTransform||c2;for(const c of o2)Object.hasOwn(n,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+i2+c.id,void 0);return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),bh(e,u),A1(e,{Fragment:f.Fragment,components:i,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function u(c,d,h){if(c.type==="raw"&&h&&typeof d=="number")return o?h.children.splice(d,1):h.children[d]={type:"text",value:c.value},d;if(c.type==="element"){let p;for(p in bo)if(Object.hasOwn(bo,p)&&Object.hasOwn(c.properties,p)){const x=c.properties[p],A=bo[p];(A===null||A.includes(c.tagName))&&(c.properties[p]=s(String(x||""),p,c))}}if(c.type==="element"){let p=t?!t.includes(c.tagName):a?a.includes(c.tagName):!1;if(!p&&r&&typeof d=="number"&&(p=!r(c,d,h)),p&&h&&typeof d=="number")return l&&c.children?h.children.splice(d,1,...c.children):h.children.splice(d,1),d}}}function c2(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||a2.test(e.slice(0,n))?e:""}const Lh=N.memo(function({post:n,formatDate:t}){const r=i=>i.toLowerCase().replace(/\s+/g,"-");return f.jsxs("div",{className:"news-item",children:[f.jsx("div",{className:"news-item__date",children:t(n.date)}),f.jsxs("div",{className:"news-item__content",children:[f.jsx(Ph,{children:n.content}),(n.author||n.tags&&n.tags.length>0)&&f.jsxs("div",{className:"news-item__meta",children:[n.author&&f.jsx("span",{className:"news-item__author",children:f.jsx(Qt,{to:`${U.baseurl}/members#${n.author}`,children:n.author})}),n.tags&&n.tags.length>0&&f.jsxs(f.Fragment,{children:[n.author&&" | ",f.jsx("span",{className:"news-item__tags-label",children:"tags:"}),n.tags.map((i,a)=>f.jsxs(Qt,{to:`${U.baseurl}/tags/${r(i)}/`,variant:"tag",className:"news-item__tag",children:["#",i]},a))]})]})]})]})});Lh.displayName="NewsItem";const Eh=["Principal Investigator","Principal Research Fellow","Research Assistant Professor","Postdoctoral Scholar","Ph.D. Student","MPhil Student","Research Assistant"];function d2(e){return e?e.replace(/ DOT /gi,".").replace(/ dot /gi,".").replace(/ Dot /gi,".").replace(/ AT /gi,"@").replace(/ at /gi,"@").replace(/ At /gi,"@"):null}function f2(e){return e?e.replace("@"," at ").replace(/\./g," dot "):""}function p2(e){return!!(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(t=>t&&t.trim()!==""))}function h2(e){const n={};return Eh.forEach(t=>{n[t]=e.filter(r=>r.position===t&&p2(r)).sort((r,i)=>r.name.localeCompare(i.name))}),n}function g2(e){if(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(r=>r&&r.trim()!==""))return!1;const t=(e.position||"").toLowerCase();return!((t.includes("srtp")||t.includes("intern")||t.includes("sep")||t.includes("visiting")||t.includes("high school"))&&!t.includes("affiliate"))}function m2(e){return e.filter(g2).sort((n,t)=>{const r=n.enddate&&n.enddate.length>0?n.enddate[n.enddate.length-1]:"";return(t.enddate&&t.enddate.length>0?t.enddate[t.enddate.length-1]:"").localeCompare(r)})}const Bl=N.memo(function({member:n}){const[t,r]=N.useState(n.image),i=d2(n.email),a=i?f2(i):null,o=()=>{n.altimage&&r(n.altimage)},l=()=>{r(n.image)},u=[{key:"orcid",icon:"fingerprint",label:"ORCID",url:`http://orcid.org/${n.orcid}`,isButton:!1},{key:"linkedIn",icon:"work",label:"LinkedIn",url:`http://www.linkedin.com/in/${n.linkedIn}`,isButton:!1},{key:"UCSF",icon:"account_circle",label:"UCSF Profile",url:`http://profiles.ucsf.edu/${n.UCSF}`,isButton:!1},{key:"scholar",icon:"school",label:"Scholar",url:`http://scholar.google.com/citations?user=${n.scholar}`,isButton:!0},{key:"twitTer",icon:"chat",label:"Twitter",url:`http://twitter.com/${n.twitTer}`,isButton:!1},{key:"bsky",icon:"chat_bubble",label:"Bluesky",url:`https://bsky.app/profile/${n.bsky}`,isButton:!1},{key:"github",icon:"code",label:"GitHub",url:`http://github.com/${n.github}`,isButton:!1}].filter(h=>n[h.key]),c=u.filter(h=>h.isButton),d=u.filter(h=>!h.isButton);return f.jsxs(Jp,{className:"member-card",id:n.name,children:[f.jsx("div",{className:"member-card__photo-wrapper",children:f.jsx(Fp,{src:t,alt:n.name,className:"member-card__photo",onMouseEnter:o,onMouseLeave:l})}),f.jsxs("div",{className:"member-card__info",children:[f.jsx("h3",{className:"member-card__name",children:n.name}),n.pronouns&&f.jsx("p",{className:"member-card__position",children:n.pronouns}),(i||n.website)&&f.jsxs("div",{className:"member-card__contact",children:[a&&f.jsx("span",{className:"member-card__email",children:a}),n.website&&f.jsx(Qt,{href:n.website,external:!0,children:"Website"})]}),c.length>0&&f.jsx("div",{className:"member-card__buttons",children:c.map(h=>f.jsx(Qt,{href:h.url,external:!0,variant:"button",className:"member-card__button",children:h.label},h.key))}),d.length>0&&f.jsx("div",{className:"member-card__links",children:d.map(h=>f.jsxs(Qt,{href:h.url,external:!0,className:"member-card__link",children:[f.jsx("span",{className:"material-icons",children:h.icon}),h.label]},h.key))}),n.description&&f.jsx("div",{className:"member-card__description",children:f.jsx(Ph,{children:n.description})})]})]})});Bl.displayName="MemberCard";const y2=[{filename:"2026-05-28-news.md",date:"2026-05-28",title:"Six papers accepted to top international conferences (2026)",link_title:"Six papers accepted to top international conferences (2026)",published:!0,layout:"post",group:"news",content:`We are thrilled to announce that six papers from our group have been accepted by prestigious international conferences in 2026, including KDD, WWW, AAAI, IJCAI, and ICIBM.

- [KDD 2026] Liang C., Huang Y., He D., Li P., Li Y., Jin D., Zhang W. Unified Multi-Domain Graph Pre-training for Homogeneous and Heterogeneous Graphs via Domain-Specific Expert Encoding.
- [WWW 2026] Shan L., Zhao J., He D., Liu S., Cui J., Zhang W. LEDA: Latent Semantic Distribution Alignment for Multi-domain Graph Pre-training. (CCF-A full paper)
- [AAAI 2026] Shan L., Zhao J., He D., Huang Y., Feng Z., Zhang W. MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training.
- [IJCAI 2026] Wang Z., He D., Yu Z., Khysru K., Zhang W. DNFormer: Differential Attention for Graph Transformers.
- [IJCAI 2026] Li P., Huang Y., He D., Jin D., Zhang W. CHoE: Cross-Domain Heterogeneous Graph Prompt Learning via Structure-Conditioned Experts.
- [ICIBM 2026] Ma K., Wang W., Li K., Zhang F., Qiu S., Zhang W. Comprehensive Benchmarking of Long-read Fusion-detection Methods Leads to Improved Fusion Discovery. (Accepted for Oral Presentation and considered for publication in Briefings in Bioinformatics)
`,author:"",tags:[]},{filename:"2026-03-04-news.md",date:"2026-03-04",title:"New manuscript on circular RNA identification posted on bioRxiv",link_title:"New manuscript on circular RNA identification posted on bioRxiv",published:!0,layout:"post",group:"news",content:`A new manuscript on circular RNA identification using genomic language model has been posted on bioRxiv:

Li K, Wang W, Jiang J, Deng J, Zhang J, Qiu S, Zhang W. (2026). Circular RNA identification using a genomic language model and a small number of authenticated examples. bioRxiv preprint. doi:10.64898/2026.03.04.709677.`,author:"",tags:[]},{filename:"2026-01-26-news.md",date:"2026-01-26",title:"Two new manuscripts posted on bioRxiv",link_title:"Two new manuscripts posted on bioRxiv",published:!0,layout:"post",group:"news",content:`Two new manuscript from our team report advances in depression research, including circuit-specific resting-state fMRI signatures for first-episode MDD and multimodal behavior scoring across chronic stress models has been posted on bioRxiv:

(1) Tu Y, Hao K, Wang F, Qiu S, Zhang W. (2026). Circuit-specific resting-state fMRI signatures for stratifying first-episode major depressive disorder and predicting recurrence risk. bioRxiv preprint. doi:10.64898/2026.01.26.701909.

(2) Tu Y., Fu Q., Li Y., Sun C., Zhu Y., Deng J., Qin H., Zeng X., Wang Y., Qiu S., Zhang W. (2026). Multimodal behavior scoring quantifies depression-like severity across chronic stress models and identifies stress-resilient mice. bioRxiv preprint. doi:10.64898/2026.01.26.701905.`,author:"",tags:[]},{filename:"2025-11-10-news.md",date:"2025-11-10",title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",link_title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",published:!0,layout:"post",group:"news",content:'Weixiong has a paper accepted to AAAI-2026, titled "MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training"',author:"",tags:[]},{filename:"2025-11-01-news.md",date:"2025-11-01",title:"Welcome Diao Xin to the lab as Postdoc",link_title:"Welcome Diao Xin to the lab as Postdoc",published:!0,layout:"post",group:"news",content:"Welcome Diao Xin to the lab as Postdoc",author:"",tags:[]},{filename:"2025-10-29-news.md",date:"2025-10-29",title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",link_title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",published:!0,layout:"post",group:"news",content:"Yan Zhu's work on a language model for PM2.5 and human health has been accepted to Environmental Science & Technology (a top journal in environmental science)",author:"",tags:[]},{filename:"2025-10-21-news.md",date:"2025-10-21",title:"Talk at 1st Asia Pacific Precision Oncology Conf",link_title:"Talk at 1st Asia Pacific Precision Oncology Conf",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a talk on Noncanonical circular RNAs as cancer diagnostic biomarkers at the [1st Asia Pacific Precision Oncology Conference](https://apacprecisiononcology.com) on 01/11/25",author:"",tags:[]},{filename:"2025-10-12-news.md",date:"2025-10-12",title:"The 10th Big Data Forum for Life and Health Sciences",link_title:"The 10th Big Data Forum for Life and Health Sciences",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a keynote talk at [The 10th Big Data Forum for Life and Health Sciences](https://ngdc.cncb.ac.cn/conference/bdf2025) on 15/10/25",author:"",tags:[]},{filename:"2025-09-01-news.md",date:"2025-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"",author:"",tags:[]},{filename:"2025-08-30-news.md",date:"2025-08-30",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Chunyu's paper, Adaptive control of dynamic networks, has been accepted to IEEE Trans on Network Science and Engineering",author:"",tags:[]},{filename:"2025-05-14-news.md",date:"2025-05-14",title:"Cracking the Code of Complex Diseases",link_title:"Cracking the Code of Complex Diseases",published:!0,layout:"post",group:"news",content:"[Cracking the Code of Complex Diseases](https://www.polyu.edu.hk/publications/excelximpact/en/issue/202516/cover-story/cracking-the-code-of-complex-diseases)",author:"",tags:[]},{filename:"2024-11-24-news.md",date:"2024-11-24",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to ACM Transactions on Intelligent Systems and Technology. The title is 'Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning'",author:"",tags:[]},{filename:"2024-11-01-join.md",date:"2024-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Huang Yin to the Lab as Research Fellow and Pan Chunyu as Postdoc!",author:"",tags:[]},{filename:"2024-10-01-join.md",date:"2024-10-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Chen Junyi to the Lab as RAP!",author:"",tags:[]},{filename:"2024-09-01-join.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Edao Abebe, Li Yixin, Han Nan, Wang Zhenqian, Wang Yuchuan and Zhang Jie to the Lab as PhD students!",author:"",tags:[]},{filename:"2024-09-01-news.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"We built our first foundation model on genomics, called dnaGrinder. A preprint of the manuscript on dnaGrinder is available at arXiv",author:"",tags:[]},{filename:"2024-09-01-promote.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan has been promoted to Principal Research Fellow, the highest rank in the research track. Congratulations, Shulan!",author:"",tags:[]},{filename:"2024-08-01-news.md",date:"2024-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has been appointed to the position of Associate Director of PolyU Academy of Interdisciplinary Research (PAIR)",author:"",tags:[]},{filename:"2024-05-01-news.md",date:"2024-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Welcome Zhang Chi to the Lab as PhD student!<br>Edao Abebe received <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span>',author:"",tags:[]},{filename:"2024-04-02-news.md",date:"2024-04-02",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to IJCAI-24. The title of the paper: Generalized taxonomy-guided graph neural networks",author:"",tags:[]},{filename:"2024-04-01-news.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Tu Yue to the Lab as Postdoc!",author:"",tags:[]},{filename:"2024-04-01-pub.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong published a paper with IEEE Transactions on Neural Networks and Learning Systems. The title of the paper: Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning",author:"",tags:[]},{filename:"2024-01-01-news.md",date:"2024-01-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Fu Qinghui and Ma Ke to the Lab as PhD students!",author:"",tags:[]},{filename:"2023-12-01-news.md",date:"2023-12-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Wang Zhenqian, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-join.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Wang Xin, a new coming postdoc, received PolyU Distinguished Postdoctoral Fellowship",author:"",tags:[]},{filename:"2023-11-01-join2.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Ma Ke, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-news.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on A neuroimaging-based precision medicine framework for depression was published online with Asian J Psychiatry",author:"",tags:[]},{filename:"2023-11-01-prestigious.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Weixiong was selected into the list of "Top 2% of Global Scientists"',author:"",tags:[]},{filename:"2023-09-01-pub.md",date:"2023-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on Total network controllability analysis discovers explainable drugs for Covid-19 treatment was published in Biology Direct",author:"",tags:[]},{filename:"2023-08-01-news.md",date:"2023-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan was promoted to Senior Research Fellow and took the position of STEM Lab manager",author:"",tags:[]},{filename:"2023-07-01-news.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong was interviewed on NOW NEWS, a Hong Kong TV news station, to discuss the newly funded RGC Strategic Target Grant (STG) funding on developing AI/genomic technologies to diagnose and treat major psychiatric disorders",author:"",tags:[]},{filename:"2023-07-01-promote.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong, as project PC, received RGC Strategic Target Grant (STG) funding (five years and $37 million) to develop AI, genomic and biomedical technologies for developing genetic and neuroimaging markers and integrative approaches for objective diagnosis and personalized therapy of major psychiatric disorders, including depression, schizophrenia, and bipolar disorder",author:"",tags:[]},{filename:"2023-07-01-pub.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on cancer-keeper genes as therapeutic targets published online with iScience, a Cell Press journal",author:"",tags:[]},{filename:"2023-05-01-news.md",date:"2023-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Dr. Qiu Shulan joined the lab as Research Fellow",author:"",tags:[]},{filename:"2023-04-01-news.md",date:"2023-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: Constructive learning meets homophily: Two birds with one stone",author:"",tags:[]},{filename:"2023-02-01-news.md",date:"2023-02-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: A survey of community detection approaches: From statistical modeling to deep learning",author:"",tags:[]},{filename:"2022-05-01-news.md",date:"2022-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong received Health and Medical Research Fund (HMRF, three years and $1.4 million) to study schizophrenia using systems biology approaches",author:"",tags:[]},{filename:"2025-1-09-join.md",date:"2025-01-09",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Tan Yejun, an RA in the lab, received both Hong Kong PhD Fellowship (HKPFS) and PolyU Presidential PhD Fellowship (PPPFS)",author:"",tags:[]}],w2={filename:"2026-01-26-news.md",date:"2026-01-26",title:"Two new manuscripts posted on bioRxiv",link_title:"Two new manuscripts posted on bioRxiv",published:!0,layout:"post",group:"news",content:`Two new manuscript from our team report advances in depression research, including circuit-specific resting-state fMRI signatures for first-episode MDD and multimodal behavior scoring across chronic stress models has been posted on bioRxiv:

(1) Tu Y, Hao K, Wang F, Qiu S, Zhang W. (2026). Circuit-specific resting-state fMRI signatures for stratifying first-episode major depressive disorder and predicting recurrence risk. bioRxiv preprint. doi:10.64898/2026.01.26.701909.

(2) Tu Y., Fu Q., Li Y., Sun C., Zhu Y., Deng J., Qin H., Zeng X., Wang Y., Qiu S., Zhang W. (2026). Multimodal behavior scoring quantifies depression-like severity across chronic stress models and identifies stress-resilient mice. bioRxiv preprint. doi:10.64898/2026.01.26.701905.`,author:"",tags:[]},x2=()=>{const e=N.useMemo(()=>{let t=[w2,...y2];const r=new Set;return t=t.filter(i=>r.has(i.filename||"")?!1:(r.add(i.filename||""),!0)),t.filter(i=>i.group==="news"&&i.published!==!1).sort((i,a)=>i.date<a.date?1:i.date>a.date?-1:0)},[]),n=t=>{if(!t)return"";const r=new Date(t),i=String(r.getDate()).padStart(2,"0"),a=String(r.getMonth()+1).padStart(2,"0"),o=String(r.getFullYear()).slice(-2);return`${i}/${a}/${o}`};return f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"news-container",children:e.map((t,r)=>f.jsx(Lh,{post:t,formatDate:n},r))})})},v2=()=>f.jsx("div",{className:"md-main-content",children:f.jsxs("div",{className:"research-container",children:[f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Integrated innovative artificial intelligence, genomic, and biomedical technologies in healthcare: Objective diagnosis, personalized therapy, and determining the etiology of major mental disorders"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Strategic Topic Grant (STG), HKD $37.236M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:U.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop innovative AI and genomic technologies for objective diagnosis and personalized treatment of major psychiatric disorders, including major depressive disorder, schizophrenia and bipolar disorder."]}),f.jsx("img",{src:U.static("img/projects/fig1.png"),alt:"Project 1 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Unravelling the black box between air pollution and public health for transformative air quality management"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Theme-based Research Scheme (TRS), HKD $41.4M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:U.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Develop integrated approaches that address the global puzzle of what components drive PM2.5 health effects in different regions."}),f.jsx("li",{children:"Generate solid evidence of key PM2.5 toxic components and emission sources to specific index diseases as a foundation for making public policies."})]})]}),f.jsx("img",{src:U.static("img/projects/fig2.png"),alt:"Project 2 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Understanding the molecular mechanism linking mRNA decay and capping with post-transcriptional gene silencing"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," NSFC/RGC Collaborative Research Scheme (NSFC/RGC CRS), HKD $3.6M + RMB 3M"]}),f.jsxs("div",{className:"research-description logo-row",style:{textAlign:"center"},children:[f.jsx("img",{src:U.static("img/logo/nsfc.png"),alt:"NSFC",style:{maxWidth:"180px",height:"auto",margin:"6px",display:"inline-block"}}),f.jsx("img",{src:U.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})]}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Determine if and how the translation process leads to ct-siRNA generation."}),f.jsx("li",{children:"Determine the effects of the defects in mRNA capping on siRNA generation and its interconnection with the translational process."}),f.jsx("li",{children:"Reveal biological functions and mechanisms linking ct-siRNA biogenesis and PTGS of genes with plant stress responses."})]})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Subtyping and diagnosis of schizophrenia by systems-biology analytics"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," Health and Medical Research Fund (HMRF), HKD $1.420M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:U.static("img/logo/hmrf.png"),alt:"HMRF",style:{maxWidth:"260px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Define objective subtypes of schizophrenia using systems-biology analytics and develop personalized therapy for schizophrenia treatment."]}),f.jsxs("div",{className:"research-description",children:[f.jsx("img",{src:U.static("img/projects/fig3.png"),alt:"Project 4 image A",style:{maxWidth:"100%",height:"auto",marginRight:"6px"}}),f.jsx("img",{src:U.static("img/projects/fig4.png"),alt:"Project 4 image B",style:{maxWidth:"100%",height:"auto"}})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"High-resolution single-cell multi-omics: Joint profiling of multiple types of biomolecules in the same single cell"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Collaborative Research Fund (CRF), HKD $6.412M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:U.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop an innovative technology for profiling DNA, RNA and proteins in the same single cell at the same time; apply the new technology to cancer research."]}),f.jsx("img",{src:U.static("img/projects/fig5.png"),alt:"Project 5 image",style:{maxWidth:"100%",height:"auto"}})]})]})]})}),pd=({html:e})=>f.jsx("li",{dangerouslySetInnerHTML:{__html:e}}),A2=[{html:`<a href="book.html"><em>State-Space Search: Algorithms,\r
              Complexity, Extensions and Applications</em></a>,\r
          Springer, 1999. ISBN 0-387-98832-7`,text:`State-Space Search: Algorithms,\r
              Complexity, Extensions and Applications,\r
          Springer, 1999. ISBN 0-387-98832-7`}],S2={2e3:{year:"2000",items:[{html:`\r
          <p><font face="Arial">M. Tambe and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Towards flexible teamwork in\r
                persistent teams: Extended report</span>,&nbsp; <span\r
                style="font-style: italic;">Autonomous Agents and\r
                Multi-Agent Systems,</span><i> </i><b>3</b>(2):159-83,\r
              2000. (selected from the Best of ICMAS-98) </font></p>\r
        `,text:`M. Tambe and W. Zhang, Towards flexible teamwork in\r
                persistent teams: Extended report,&nbsp; Autonomous Agents and\r
                Multi-Agent Systems, 3(2):159-83,\r
              2000. (selected from the Best of ICMAS-98)`},{html:`\r
          <p><font face="Arial">R. E. Korf and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Divided-and-conquer frontier\r
                search applied to optimal sequence alignment</span>, <span\r
                style="font-style: italic;">Proc. 17-th National Conf.\r
                on Artificial Intelligence (AAAI-2000)</span>, Austin,\r
              Texas, July 30-August 3, 2000, pp.910-6. </font></p>\r
        `,text:`R. E. Korf and W. Zhang, Divided-and-conquer frontier\r
                search applied to optimal sequence alignment, Proc. 17-th National Conf.\r
                on Artificial Intelligence (AAAI-2000), Austin,\r
              Texas, July 30-August 3, 2000, pp.910-6.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Depth-first branch-and-bound vs. local search: A\r
                case study</span><i>, </i><span style="font-style:\r
                italic;">Proc. 17-th National Conf. on Artificial\r
                Intelligence (AAAI-2000)</span>, Austin, Texas, July\r
              30-August 3, 2000, pp.930-5.&nbsp; <a\r
                href="atsp-aaai00.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a><a\r
href="http://www.cs.wustl.edu/%7Ezhang/publications/atsp-aaai00.ps"> </a></font></p>\r
        `,text:`W. Zhang, Depth-first branch-and-bound vs. local search: A\r
                case study, Proc. 17-th National Conf. on Artificial\r
                Intelligence (AAAI-2000), Austin, Texas, July\r
              30-August 3, 2000, pp.930-5.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R. Hill, <span\r
                style="font-weight: bold;">A template-based and\r
                pattern-driven approach to situation awareness and\r
                assessment in virtual humans</span>, <span\r
                style="font-style: italic;">Proc. of 4th Intern. Conf.\r
                on Autonomous Agents (Agents 2000)</span>, Barcelona,\r
              Catalonia, Spain, June 3-7, 2000.&nbsp; <a\r
                href="awareness.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang and R. Hill, A template-based and\r
                pattern-driven approach to situation awareness and\r
                assessment in virtual humans, Proc. of 4th Intern. Conf.\r
                on Autonomous Agents (Agents 2000), Barcelona,\r
              Catalonia, Spain, June 3-7, 2000.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R. Hill, <span\r
                style="font-weight: bold;">Situation awareness and\r
                assessment: Issues and computational approaches</span>,\r
              <span style="font-style: italic;">Proc. 9th Conference on\r
                Computer Generated Forces and Behavioral Representation</span>,\r
              May 16-18, 2000.</font></p>\r
        `,text:`W. Zhang and R. Hill, Situation awareness and\r
                assessment: Issues and computational approaches,\r
              Proc. 9th Conference on\r
                Computer Generated Forces and Behavioral Representation,\r
              May 16-18, 2000.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Association-based multiple imputation in\r
                multivariate datasets: A summary</span>, <span\r
                style="font-style: italic;">Proc. 16-th Intern. Conf. on\r
                Data Engineering (ICDE-2000)</span>, San Diego, CA, Feb.\r
              29-March 3, 2000.</font></p>\r
        `,text:`W. Zhang, Association-based multiple imputation in\r
                multivariate datasets: A summary, Proc. 16-th Intern. Conf. on\r
                Data Engineering (ICDE-2000), San Diego, CA, Feb.\r
              29-March 3, 2000.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span\r
                style="font-weight: bold;">A study of complexity\r
                transitions on the asymmetric traveling salesman problem</span>,\r
              <span style="font-style: italic;">Artificial Intelligence</span>,\r
              <b>81</b>(1-2):223-39, 1996. &nbsp; <a href="tspaij.ps"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font> </p>\r
        `,text:`W. Zhang and R.E. Korf, A study of complexity\r
                transitions on the asymmetric traveling salesman problem,\r
              Artificial Intelligence,\r
              81(1-2):223-39, 1996. &nbsp;`},{html:`\r
          <p><font face="Arial">J.C. Pemberton and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Epsilon-transformation:\r
                Exploiting Phase Transitions to solve combinatorial\r
                optimization problems</span>, <span style="font-style:\r
                italic;">Artificial Intelligence</span>, <b>81</b>(1-2):297-325,\r
\r
\r
\r
              1996.&nbsp; <a href="epsilonaij.ps"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font> </p>\r
        `,text:`J.C. Pemberton and W. Zhang, Epsilon-transformation:\r
                Exploiting Phase Transitions to solve combinatorial\r
                optimization problems, Artificial Intelligence, 81(1-2):297-325,\r
\r
\r
\r
              1996.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">A note on the complexity of the asymmetric\r
                Traveling Salesman Problem</span>, <span\r
                style="font-style: italic;">Operations Research Letters</span>,\r
              <b>20:</b>31-8<b>, </b>1997.</font></p>\r
        `,text:`W. Zhang, A note on the complexity of the asymmetric\r
                Traveling Salesman Problem, Operations Research Letters,\r
              20:31-8, 1997.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span\r
                style="font-weight: bold;">Performance of linear-space\r
                search algorithms</span>, <span style="font-style:\r
                italic;">Artificial Intelligence</span>, <b>79</b>(2):241-92,\r
\r
\r
\r
              1995.&nbsp; <a href="bnbaij.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font> </p>\r
        `,text:`W. Zhang and R.E. Korf, Performance of linear-space\r
                search algorithms, Artificial Intelligence, 79(2):241-92,\r
\r
\r
\r
              1995.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span\r
                style="font-weight: bold;">Parallel Heap Operations on\r
                EREW PRAM</span>, <span style="font-style: italic;">J.\r
                Parallel and Distributed Computing</span>, <b>20</b>(2):248-55,\r
\r
\r
\r
              1994.</font></p>\r
        `,text:`W. Zhang and R.E. Korf, Parallel Heap Operations on\r
                EREW PRAM, J.\r
                Parallel and Distributed Computing, 20(2):248-55,\r
\r
\r
\r
              1994.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and N.S.V. Rao, <span\r
                style="font-weight: bold;">Heuristic tree search with\r
                nonparametric statistical inference methods</span>, <span\r
                style="font-style: italic;">J. Computer Mathematics</span>,\r
              <b>39</b>(1+2):133-52, 1991.</font></p>\r
        `,text:`W. Zhang and N.S.V. Rao, Heuristic tree search with\r
                nonparametric statistical inference methods, J. Computer Mathematics,\r
              39(1+2):133-52, 1991.`},{html:`\r
          <p><font face="Arial">S. Olariu, Z. Wen and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">A faster optimal algorithm\r
                for the measure problem</span>, <span\r
                style="font-style: italic;">Parallel Computing</span>, <b>17</b>,\r
              1991, pp.683-7.</font></p>\r
        `,text:`S. Olariu, Z. Wen and W. Zhang, A faster optimal algorithm\r
                for the measure problem, Parallel Computing, 17,\r
              1991, pp.683-7.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong><span style="font-weight: bold;">,\r
                Representation of assembly and automatic robot planning\r
                by Petri net</span>, <span style="font-style: italic;">IEEE\r
\r
\r
\r
                Trans. on Systems, Man and Cybernetics</span>, <b>19</b>(2):418-22,\r
\r
\r
\r
              1989.</font></p>\r
        `,text:`W. Zhang,\r
                Representation of assembly and automatic robot planning\r
                by Petri net, IEEE\r
\r
\r
\r
                Trans. on Systems, Man and Cybernetics, 19(2):418-22,\r
\r
\r
\r
              1989.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Flexible and approximate computation through\r
                state-space reduction</span>, <span style="font-style:\r
                italic;">Proc. 14-th Annual Conference on Uncertainty in\r
                Artificial Intelligence (UAI-98)</span>, Madison,\r
              Wisconsin, July 24-26, 1998, pp.531-38.</font></p>\r
        `,text:`W. Zhang, Flexible and approximate computation through\r
                state-space reduction, Proc. 14-th Annual Conference on Uncertainty in\r
                Artificial Intelligence (UAI-98), Madison,\r
              Wisconsin, July 24-26, 1998, pp.531-38.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong><span style="font-weight: bold;">,\r
                Complete Anytime Beam Search</span>, <span\r
                style="font-style: italic;">Proc. 15-th National Conf.\r
                on Artificial Intelligence (AAAI-98)</span>, Madison,\r
              Wisconsin, July 26-30, 1998, pp.425-30.</font></p>\r
        `,text:`W. Zhang,\r
                Complete Anytime Beam Search, Proc. 15-th National Conf.\r
                on Artificial Intelligence (AAAI-98), Madison,\r
              Wisconsin, July 26-30, 1998, pp.425-30.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Forward estimation for game-tree search</span>, <span\r
                style="font-style: italic;">Proc. 13-th National Conf.\r
                on Artificial Intelligence (AAAI-96)</span>, Portland,\r
              OR, 1996, pp.240-5</font></p>\r
        `,text:`W. Zhang, Forward estimation for game-tree search, Proc. 13-th National Conf.\r
                on Artificial Intelligence (AAAI-96), Portland,\r
              OR, 1996, pp.240-5`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and J. C. Pemberton, <span\r
                style="font-weight: bold;">Epsilon-transformation:\r
                Exploiting complexity transitions to solve combinatorial\r
                optimization problems - Initial results</span>, <span\r
                style="font-style: italic;">Proc. 12-th National Conf.\r
                on Artificial Intelligence (AAAI-94)</span>, Seattle,\r
              WA, July 31-Aug. 4, 1994, pp.895-900.</font></p>\r
        `,text:`W. Zhang and J. C. Pemberton, Epsilon-transformation:\r
                Exploiting complexity transitions to solve combinatorial\r
                optimization problems - Initial results, Proc. 12-th National Conf.\r
                on Artificial Intelligence (AAAI-94), Seattle,\r
              WA, July 31-Aug. 4, 1994, pp.895-900.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span\r
                style="font-weight: bold;">Depth-first vs. best-first\r
                search: New results</span>, <span style="font-style:\r
                italic;">Proc. 11-th National Conf. on Artificial\r
                Intelligence (AAAI-93)</span>, Washington, DC, July\r
              11-15, 1993, pp.769-75.</font></p>\r
        `,text:`W. Zhang and R.E. Korf, Depth-first vs. best-first\r
                search: New results, Proc. 11-th National Conf. on Artificial\r
                Intelligence (AAAI-93), Washington, DC, July\r
              11-15, 1993, pp.769-75.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong><span style="font-weight: bold;">,\r
                Truncated branch-and-bound: A case study on the\r
                asymmetric traveling salesman problem</span>, <span\r
                style="font-style: italic;">Proc. of AAAI 1993 Spring\r
                Symposium on AI and NP-Hard Problems</span>, Stanford,\r
              CA, March 23-25, 1993, pp.160-6. [<a\r
                href="atsp-aaai93-symp.ps">ps file</a>]</font></p>\r
        `,text:`W. Zhang,\r
                Truncated branch-and-bound: A case study on the\r
                asymmetric traveling salesman problem, Proc. of AAAI 1993 Spring\r
                Symposium on AI and NP-Hard Problems, Stanford,\r
              CA, March 23-25, 1993, pp.160-6. [ps file]`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and R.E. Korf, <span\r
                style="font-weight: bold;">An average-case analysis of\r
                branch-and-bound with applications: Summary of results</span>,\r
              <span style="font-style: italic;">Proc. 10-th National\r
                Conf. on Artificial Intelligence (AAAI-92)</span>, San\r
              Jose, CA, July 12-17, 1992, pp.545-50. </font></p>\r
        `,text:`W. Zhang and R.E. Korf, An average-case analysis of\r
                branch-and-bound with applications: Summary of results,\r
              Proc. 10-th National\r
                Conf. on Artificial Intelligence (AAAI-92), San\r
              Jose, CA, July 12-17, 1992, pp.545-50.`},{html:`\r
          <p><font face="Arial">Weixiong Zhang and Volker Sorge,\r
              Distributed Constraint Problem Solving and Reasoning in\r
              Multi-agent Systems, editers, IOS Press, 2004.</font></p>\r
        `,text:`Weixiong Zhang and Volker Sorge,\r
              Distributed Constraint Problem Solving and Reasoning in\r
              Multi-agent Systems, editers, IOS Press, 2004.`},{html:`\r
          <p><font face="Arial">Weixiong Zhang, Rina Dechter and Richard\r
              E. Korf, <a\r
                href="http://www.elsevier.com/gej-ng/10/10/48/198/27/show/toc.htt"><em>Artificial\r
\r
\r
                  Intelligence, vol. 129, no 1-2, </em>special issue on\r
                Heuristic Search</a>; Editorial: <a\r
                href="http://www.elsevier.com/gej-ng/10/10/48/198/27/show/toc.htt">Heuristic\r
\r
\r
\r
                search in artificial intelligence</a><br>\r
            </font> </p>\r
        `,text:`Weixiong Zhang, Rina Dechter and Richard\r
              E. Korf, Artificial\r
\r
\r
                  Intelligence, vol. 129, no 1-2, special issue on\r
                Heuristic Search; Editorial: Heuristic\r
\r
\r
\r
                search in artificial intelligence`},{html:`<font face="Arial">Weixiong Zhang and Sven Koenig, <a\r
              href="http://www.aaai.org/Press/Reports/Symposia/Spring/ss-99-07.html"><em>Search\r
\r
\r
                Techniques for Problem Solving Under Uncertainty and\r
                Incomplete Information</em></a>, Papers from 1999 AAAI\r
            Spring Symposium. ISBN 1-57735-106-1 </font>`,text:`Weixiong Zhang and Sven Koenig, Search\r
\r
\r
                Techniques for Problem Solving Under Uncertainty and\r
                Incomplete Information, Papers from 1999 AAAI\r
            Spring Symposium. ISBN 1-57735-106-1`},{html:`\r
          <p><font face="Arial">Weixiong Zhang,<span style="font-style:\r
                italic;"> <a\r
                  href="http://www.aaai.org/Conferences/AAAI/2006/aaai06tutorials.php#sa3">Computational\r
\r
\r
                  biology: Perspective and approaches based on feature\r
                  extraction and selection</a></span>, <em>National\r
                Conference on Artificial Intelligence (AAAI-06)</em>.<em></em></font></p>\r
        `,text:`Weixiong Zhang, Computational\r
\r
\r
                  biology: Perspective and approaches based on feature\r
                  extraction and selection, National\r
                Conference on Artificial Intelligence (AAAI-06).`},{html:`\r
          <p><font face="Arial">Weixiong Zhang and Sharlee Climer, <a\r
                href="http://ijcai05.csd.abdn.ac.uk/index.php?section=tutorialprog#t3">Techniques\r
\r
\r
                for computing and using bounds for combinatorial\r
                optimization problems</a>, <em>19th International Joint\r
                Conference on Artificial Intelligence (IJCAI-05)</em>.</font></p>\r
        `,text:`Weixiong Zhang and Sharlee Climer, Techniques\r
\r
\r
                for computing and using bounds for combinatorial\r
                optimization problems, 19th International Joint\r
                Conference on Artificial Intelligence (IJCAI-05).`},{html:`\r
          <p><font face="Arial">Weixiong&nbsp; Zhang and Sharlee Climer,\r
              <a\r
                href="http://www.aaai.org/Conferences/National/2005/tutorials05.html">Systematic\r
\r
\r
\r
                bounding techniques for combinatorial optimization</a>,\r
              <em>12th National Conf. on Artificial Intelligence\r
                (AAAI-05)</em>.</font></p>\r
        `,text:`Weixiong&nbsp; Zhang and Sharlee Climer,\r
              Systematic\r
\r
\r
\r
                bounding techniques for combinatorial optimization,\r
              12th National Conf. on Artificial Intelligence\r
                (AAAI-05).`},{html:`<font face="Arial">Carla Gomes, Tad Hogg, Toby Walsh and\r
            Weixiong Zhang, <a\r
href="http://www.cs.wustl.edu/%7Ezhang/links/ijcai-phase-transitions.html">Phase\r
Transitions\r
and\r
Structure\r
in\r
Combinatorial\r
\r
\r
\r
              Problems</a>, <em>17th International Joint Conference on\r
              Artificial Intelligence (IJCAI-01).</em><em></em></font>`,text:`Carla Gomes, Tad Hogg, Toby Walsh and\r
            Weixiong Zhang, Phase\r
Transitions\r
and\r
Structure\r
in\r
Combinatorial\r
\r
\r
\r
              Problems, 17th International Joint Conference on\r
              Artificial Intelligence (IJCAI-01).`}]},2001:{year:"2001",items:[{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Iterative state-space reduction for flexible\r
                computation</span>, <span style="font-style: italic;">Artificial\r
\r
\r
\r
                Intelligence</span>, <b>126</b>(1-2):109-138,\r
              2001.&nbsp; <a\r
                href="http://www.elsevier.nl/gej-ng/10/10/48/185/26/show/toc.htt"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, Iterative state-space reduction for flexible\r
                computation, Artificial\r
\r
\r
\r
                Intelligence, 126(1-2):109-138,\r
              2001.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Phase transitions and backbones of 3-SAT and\r
                Maximum 3-SAT</span>, <span style="font-style: italic;">Proc.\r
\r
\r
\r
                7th Intern. Conf. on Principles and Practice of\r
                Consstraint Programming (CP-2001)</span>, Paphos,\r
              Cyprus, Nov. 26 - Dec. 1, 2001.&nbsp; <a href="cp2001.ps"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, Phase transitions and backbones of 3-SAT and\r
                Maximum 3-SAT, Proc.\r
\r
\r
\r
                7th Intern. Conf. on Principles and Practice of\r
                Consstraint Programming (CP-2001), Paphos,\r
              Cyprus, Nov. 26 - Dec. 1, 2001.&nbsp;`},{html:`\r
          <p><font face="Arial">J. Cirasella, D.S. Johnson, L. A.\r
              McGeoch and <strong>W. Zhang</strong>, <span style="font-weight: bold;">The\r
\r
\r
\r
                asymmetric Traveling Salesman Problem: Algorithms,\r
                instance generators, and tests</span>, in <span\r
                style="font-style: italic;">Proc. of ALENEX 2001</span>.&nbsp;\r
\r
\r
\r
              <a href="atsp-alenex.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`J. Cirasella, D.S. Johnson, L. A.\r
              McGeoch and W. Zhang, The\r
\r
\r
\r
                asymmetric Traveling Salesman Problem: Algorithms,\r
                instance generators, and tests, in Proc. of ALENEX 2001.&nbsp;`}]},2002:{year:"2002",items:[{html:`\r
          <p><font face="Arial">D. S. Johnson, G. Gutin, L. A. McGeoch,\r
              A. Yeo, <strong>W. Zhang</strong> and A. Zverovich, <span\r
                style="font-weight: bold;">Experimental analysis of\r
                heuristics for the ATSP</span>, in <span\r
                style="font-style: italic;">The Traveling Salesman\r
                Problem and its Variations</span>, G. Gutin and A.\r
              Punnen, Editors, Kluwer Academic Publishers, 2002,\r
              pp.445-88.&nbsp; <a href="atspchap.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font></p>\r
        `,text:`D. S. Johnson, G. Gutin, L. A. McGeoch,\r
              A. Yeo, W. Zhang and A. Zverovich, Experimental analysis of\r
                heuristics for the ATSP, in The Traveling Salesman\r
                Problem and its Variations, G. Gutin and A.\r
              Punnen, Editors, Kluwer Academic Publishers, 2002,\r
              pp.445-88.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Search techniques</span>, to appear as Chapter 8\r
              of <span style="font-style: italic;">Handbook of Data\r
                Mining and Knowledge Discovery</span>, Oxford University\r
              Press, 2002.</font></p>\r
        `,text:`W. Zhang, Search techniques, to appear as Chapter 8\r
              of Handbook of Data\r
                Mining and Knowledge Discovery, Oxford University\r
              Press, 2002.`},{html:`\r
          <p><font face="Arial">Z. Deng and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Localization and dynamic\r
                tracking using wireless-networked sensors and\r
                multi-agent technology: First steps</span>, <em>IEICE\r
                Transactions on Fundamentals of Electronics,\r
                Communications and Computer Sciences, </em><strong>E85-A</strong>(11)\r
\r
\r
              2002 (invited paper).<span style="font-weight: bold;"></span></font></p>\r
        `,text:`Z. Deng and W. Zhang, Localization and dynamic\r
                tracking using wireless-networked sensors and\r
                multi-agent technology: First steps, IEICE\r
                Transactions on Fundamentals of Electronics,\r
                Communications and Computer Sciences, E85-A(11)\r
\r
\r
              2002 (invited paper).`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and L. Wittenburg, <span\r
                style="font-weight: bold;">Distributed breakout\r
                revisited</span>, in <span style="font-style: italic;">Proc.\r
\r
\r
                18-th National Conf. on Artificial Intelligence\r
                (AAAI-2002)</span>, Edmonton, Canada, July 28-August 1,\r
              2002, pp.352-7.&nbsp; <a href="dba-aaai02.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang and L. Wittenburg, Distributed breakout\r
                revisited, in Proc.\r
\r
\r
                18-th National Conf. on Artificial Intelligence\r
                (AAAI-2002), Edmonton, Canada, July 28-August 1,\r
              2002, pp.352-7.&nbsp;`},{html:`\r
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Searching for backbones and\r
                fat: A limit-crossing approach with applications</span>,\r
              in <em>Proc. 18-th National Conf. on Artificial\r
                Intelligence (AAAI-2002)</em>, Edmonton, Canada, July\r
              28-August 1, 2002, pp.707-12.&nbsp; <a\r
                href="lc-aaai02.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`S. Climer and W. Zhang, Searching for backbones and\r
                fat: A limit-crossing approach with applications,\r
              in Proc. 18-th National Conf. on Artificial\r
                Intelligence (AAAI-2002), Edmonton, Canada, July\r
              28-August 1, 2002, pp.707-12.&nbsp;`},{html:`\r
          <p><font face="Arial">A. K. Sen, A. Bagchi and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">An average-case analysis of\r
                graph search</span>, in <span style="font-style:\r
                italic;">Proc. 18-th National Conf. on Artificial\r
                Intelligence (AAAI-2002)</span>, Edmonton, Canada, July\r
              28-August 1, 2002, pp.757-62.&nbsp; <a\r
                href="AAAI02ASen.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`A. K. Sen, A. Bagchi and W. Zhang, An average-case analysis of\r
                graph search, in Proc. 18-th National Conf. on Artificial\r
                Intelligence (AAAI-2002), Edmonton, Canada, July\r
              28-August 1, 2002, pp.757-62.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Phase transitions, backbones, measurement\r
                accuracy, and phase aware approximations: The ATSP as a\r
                case study</span>, <em>Proc. 4th Intern. Workshop on\r
                Integration of AI and OR techniques in Constraint\r
                Programming for Combinatorial Optimization Problems</em><span\r
                style="font-style: italic;"> (AI-OR-CP-02)</span>, 2002.</font></p>\r
        `,text:`W. Zhang, Phase transitions, backbones, measurement\r
                accuracy, and phase aware approximations: The ATSP as a\r
                case study, Proc. 4th Intern. Workshop on\r
                Integration of AI and OR techniques in Constraint\r
                Programming for Combinatorial Optimization Problems (AI-OR-CP-02), 2002.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, G. Wang and L. Wittenburg, <span\r
                style="font-weight: bold;">Distributed stochastic search\r
                for constraint satisfaction and optimization:\r
                Parallelism, phase transitions and performance</span>,\r
              in <em>Proc. </em><span style="font-style: italic;">AAAI\r
                Workshop on Probabilistic Approaches in Search</span>,\r
              Edmonton, Canada, July 28, 2002, pp.53-9.&nbsp; <a\r
                href="dsa-aaai.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, G. Wang and L. Wittenburg, Distributed stochastic search\r
                for constraint satisfaction and optimization:\r
                Parallelism, phase transitions and performance,\r
              in Proc. AAAI\r
                Workshop on Probabilistic Approaches in Search,\r
              Edmonton, Canada, July 28, 2002, pp.53-9.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and Z. Xing, <span\r
                style="font-weight: bold;">Distributed breakout vs.\r
                distributed stochastic: A comparative evaluation on scan\r
                scheduling</span>, in <span style="font-style: italic;">Proc.\r
\r
\r
\r
                AAMAS-02 Third International Workshop on Distributed\r
                Constraint Reasoning</span>, July 16, 2002, Bologna,\r
              Italy, pp.192-201.&nbsp; <a href="scan-aamas.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang and Z. Xing, Distributed breakout vs.\r
                distributed stochastic: A comparative evaluation on scan\r
                scheduling, in Proc.\r
\r
\r
\r
                AAMAS-02 Third International Workshop on Distributed\r
                Constraint Reasoning, July 16, 2002, Bologna,\r
              Italy, pp.192-201.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, Z. Deng, G. Wang, L.\r
              Wittenburg and Z. Xing, <span style="font-weight: bold;">Distributed\r
\r
\r
\r
                problem solving in sensor networks</span>, in <span\r
                style="font-style: italic;">Proc. </span><em>1st\r
                Intern. Joint Conf. on Autonomous Agents &amp; Multi\r
                Agent Systems</em><span style="font-style: italic;">\r
                (AAMAS-02)</span>, July 15-19, Bologna, Italy, poster\r
              paper.&nbsp; <a href="aamas02-zhang1.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font> </p>\r
        `,text:`W. Zhang, Z. Deng, G. Wang, L.\r
              Wittenburg and Z. Xing, Distributed\r
\r
\r
\r
                problem solving in sensor networks, in Proc. 1st\r
                Intern. Joint Conf. on Autonomous Agents &amp; Multi\r
                Agent Systems\r
                (AAMAS-02), July 15-19, Bologna, Italy, poster\r
              paper.&nbsp;`}]},2003:{year:"2003",items:[{html:`\r
          <p><font face="Arial">R. Souvenir, J. Buhler, G. Stormo and W.\r
              Zhang*, <span style="font-weight: bold;">Selecting\r
                degenerate multiplex PCR primers</span>, in <em>Proc.\r
                Workshop on Algorithms in Bioinformatics (WABI-03)</em>,\r
              September 15-20, 2003, Budapest, Hungary.&nbsp; [<a\r
                href="http://www.cse.wustl.edu/%7Ezhang/projects/mips.zip">software</a>]&nbsp;\r
\r
\r
\r
              <a href="mips-wabi03.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`R. Souvenir, J. Buhler, G. Stormo and W.\r
              Zhang*, Selecting\r
                degenerate multiplex PCR primers, in Proc.\r
                Workshop on Algorithms in Bioinformatics (WABI-03),\r
              September 15-20, 2003, Budapest, Hungary.&nbsp; [software]&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Phase transitions of the asymmetric Traveling\r
                Salesman</span>, <em>Proc. 18th Intern. Joint Conf. on\r
                AI (IJCAI-03)</em>, Acapulco, Mexico, Aug. 9-15, 2003,\r
              pages 1202-7.&nbsp; <a href="atsp-ijcai03.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, Phase transitions of the asymmetric Traveling\r
                Salesman, Proc. 18th Intern. Joint Conf. on\r
                AI (IJCAI-03), Acapulco, Mexico, Aug. 9-15, 2003,\r
              pages 1202-7.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, A. Rangan and M. Looks, <span\r
                style="font-weight: bold;">Backbone guided local search\r
                for maximum satisfiability</span>, <em>Proc. 18th\r
                Intern. Joint Conf. on Artificial Intelligence\r
                (IJCAI-03)</em>, Acapulco, Mexico, Aug. 9-15, 2003,\r
              pages 1179-84.&nbsp; [<a\r
href="http://www.cse.wustl.edu/%7Ezhang/projects/backboneGuidedSearch/bgwalksat/index.html">software</a>]&nbsp;\r
\r
\r
\r
              <a href="bgwalksat-ijcai03.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, A. Rangan and M. Looks, Backbone guided local search\r
                for maximum satisfiability, Proc. 18th\r
                Intern. Joint Conf. on Artificial Intelligence\r
                (IJCAI-03), Acapulco, Mexico, Aug. 9-15, 2003,\r
              pages 1179-84.&nbsp; [software]&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, Z. Xing, G. Wang and L.\r
              Wittenburg, <span style="font-weight: bold;">An analysis\r
                and application of distributed constraint satisfaction\r
                and optimization algorithms in sensor networks</span>, <em>Proc.\r
\r
\r
\r
                2nd Intern. Joint Conf. on Autonomous Agents &amp; Multi\r
                Agent Systems (AAMAS-03)</em>, Melbourne, Australia,\r
              July 14-18, 2003, pages 185-92.&nbsp; <a\r
                href="dsadba-aamas03.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, Z. Xing, G. Wang and L.\r
              Wittenburg, An analysis\r
                and application of distributed constraint satisfaction\r
                and optimization algorithms in sensor networks, Proc.\r
\r
\r
\r
                2nd Intern. Joint Conf. on Autonomous Agents &amp; Multi\r
                Agent Systems (AAMAS-03), Melbourne, Australia,\r
              July 14-18, 2003, pages 185-92.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and L. Wittenburg, <span\r
                style="font-weight: bold;">Distributed breakout\r
                algorithm for distributed constraint optimization\r
                problems - DBArelax</span>, <em>Proc. 2nd Intern. Joint\r
                Conf. on Autonomous Agents &amp; Multi Agent Systems\r
                (AAMAS-03)</em>, Melbourne, Australia, July 14-18, 2003,\r
              (poster).</font></p>\r
        `,text:`W. Zhang and L. Wittenburg, Distributed breakout\r
                algorithm for distributed constraint optimization\r
                problems - DBArelax, Proc. 2nd Intern. Joint\r
                Conf. on Autonomous Agents &amp; Multi Agent Systems\r
                (AAMAS-03), Melbourne, Australia, July 14-18, 2003,\r
              (poster).`},{html:`\r
          <p><font face="Arial">G. Wang, <strong>W. Zhang</strong>, R. Mailler and V.\r
              Lesser, <span style="font-weight: bold;">Analysis of\r
                negotiation protocols by distributed search</span>, in <em>Distributed\r
\r
\r
\r
                Sensor Networks: A Multiagent Systems Approach</em>, V.\r
              Lesser, C. Ortiz, and M. Tambe (eds.), Kluwer, 2003, pages\r
              339-62.</font></p>\r
        `,text:`G. Wang, W. Zhang, R. Mailler and V.\r
              Lesser, Analysis of\r
                negotiation protocols by distributed search, in Distributed\r
\r
\r
\r
                Sensor Networks: A Multiagent Systems Approach, V.\r
              Lesser, C. Ortiz, and M. Tambe (eds.), Kluwer, 2003, pages\r
              339-62.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, G. Wang, Z. Xing and L.\r
              Wittenburg, <span style="font-weight: bold;">A\r
                comparative study of distributed constraint algorithms\r
                with applications to problems in sensor networks</span>,\r
              in <em>Distributed Sensor Networks: A Multiagent Systems\r
                Approach</em>, V. Lesser, C. Ortiz, and M. Tambe (eds.),\r
              Kluwer, 2003, pages 319-38.</font></p>\r
        `,text:`W. Zhang, G. Wang, Z. Xing and L.\r
              Wittenburg, A\r
                comparative study of distributed constraint algorithms\r
                with applications to problems in sensor networks,\r
              in Distributed Sensor Networks: A Multiagent Systems\r
                Approach, V. Lesser, C. Ortiz, and M. Tambe (eds.),\r
              Kluwer, 2003, pages 319-38.`}]},2011:{year:"2011",items:[{html:`\r
          <p><font face="Arial">C.E. Joyce, X. Zhou, J. Xia, C. Ryan, B.\r
              Thrash, A. Menter, <strong>W. Zhang</strong>* and A.M. Bowcock*, <span\r
                style="font-weight: bold;">Deep sequencing of small RNAs\r
                from human skin reveals major alterations in the\r
                psoriasis miRNAome</span>, <span style="font-style:\r
                italic;">Human Molecular Genetics</span>, <span\r
                style="font-weight: bold;">20</span>(20):4025-40, 2011.\r
              <a href="HMG11.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid; border: 0px solid; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`C.E. Joyce, X. Zhou, J. Xia, C. Ryan, B.\r
              Thrash, A. Menter, W. Zhang* and A.M. Bowcock*, Deep sequencing of small RNAs\r
                from human skin reveals major alterations in the\r
                psoriasis miRNAome, Human Molecular Genetics, 20(20):4025-40, 2011.`},{html:`<font face="Arial"><strong>W. Zhang</strong>*, S. Gao, X. Zhou, P.\r
            Chellappan, Z. Chen, X. Zhou, X. Zhang, N. Fromuth, G.\r
            Coutino, M. Coffey, H. Jin*, <span style="font-weight:\r
              bold;">Bacterial-responsive microRNAs regulate plant\r
              innate immunity by modulating plant hormone networks</span>,\r
            <span style="font-style: italic;">Plant Molecular Biology</span>,\r
            <span style="font-weight: bold;">75</span>(1-2):93-105,\r
            2011. <a href="http://www.ncbi.nlm.nih.gov/pubmed/21153682"><img\r
                alt="pmb" src="pdf.jpg" style="border: 0px solid;\r
                border: 0px solid; width: 12px; height: 13px;"></a></font>`,text:`W. Zhang*, S. Gao, X. Zhou, P.\r
            Chellappan, Z. Chen, X. Zhou, X. Zhang, N. Fromuth, G.\r
            Coutino, M. Coffey, H. Jin*, Bacterial-responsive microRNAs regulate plant\r
              innate immunity by modulating plant hormone networks,\r
            Plant Molecular Biology,\r
            75(1-2):93-105,\r
            2011.`},{html:`\r
          <p><font face="Arial"><strong style="font-weight: bold;\r
                font-style: italic; text-decoration: underline;"><em></em></strong>W.\r
\r
\r
\r
              Zhang*, S. Guo, J. Xia, X. Zhou, P. Chellappan, X. Zhou,\r
              X. Zhang and H. Jin*, <span style="font-weight: bold;">Multiple\r
\r
\r
\r
                distinct small RNAs originate from the same microRNA\r
                precursors</span>, <span style="font-style: italic;">Genome\r
\r
\r
\r
                Biology</span>, <span style="font-weight: bold;">11</span>:R81,\r
\r
\r
\r
              2010.<span style="font-weight: bold;"></span> <a\r
                href="http://genomebiology.com/2010/11/8/R81/abstract"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"> <img style="width: 91px;\r
                  height: 12px;" alt="" src="highlyaccessed.gif"></a></font>\r
          </p>\r
        `,text:`W.\r
\r
\r
\r
              Zhang*, S. Guo, J. Xia, X. Zhou, P. Chellappan, X. Zhou,\r
              X. Zhang and H. Jin*, Multiple\r
\r
\r
\r
                distinct small RNAs originate from the same microRNA\r
                precursors, Genome\r
\r
\r
\r
                Biology, 11:R81,\r
\r
\r
\r
              2010.`},{html:`\r
          <p><font face="Arial">T.A. Reese, J. Xia, L.S. Johnson, X.\r
              Zhou, <strong>W. Zhang</strong>* and H.W. Virgin*, <span\r
                style="font-weight: bold;">Identification of novel\r
                microRNA-like molecules generated from herpesvirus and\r
                host tRNA transcripts</span>, <span style="font-style:\r
                italic;">J. Virology</span>, <span style="font-weight:\r
                bold;">84</span>(19):10344-53, 2010. <a\r
                href="http://jvi.asm.org/cgi/content/abstract/JVI.00707-10v1"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`T.A. Reese, J. Xia, L.S. Johnson, X.\r
              Zhou, W. Zhang* and H.W. Virgin*, Identification of novel\r
                microRNA-like molecules generated from herpesvirus and\r
                host tRNA transcripts, J. Virology, 84(19):10344-53, 2010.`},{html:`\r
          <p><font face="Arial">P. Chellappan, J. Xia, X. Zhou, S. Gao,\r
              X. Zhang, G. Coutino, F. Vazquez, <strong>W. Zhang</strong>* and H. Jin*<span\r
                style="font-weight: bold;"></span>, <span\r
                style="font-weight: bold;">siRNAs from miRNA sites\r
                mediate DNA methylation of target genes</span>, <span\r
                style="font-style: italic;">Nucleic Acids Research</span>,\r
              <span style="font-weight: bold;">38</span>(20):6883-94,\r
              2010. <a\r
                href="http://nar.oxfordjournals.org/cgi/content/full/gkq590"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`P. Chellappan, J. Xia, X. Zhou, S. Gao,\r
              X. Zhang, G. Coutino, F. Vazquez, W. Zhang* and H. Jin*, siRNAs from miRNA sites\r
                mediate DNA methylation of target genes, Nucleic Acids Research,\r
              38(20):6883-94,\r
              2010.`},{html:`\r
          <p><font face="Arial">C. Zeng, W. Wang, Y. Zheng, X. Chen, X.\r
              Bo, S. Song, <strong>W. Zhang</strong>* and M. Peng*, <span\r
                style="font-weight: bold;">Conservation and divergence\r
                of microRNAs and their functions in Euphorbiaceous\r
                plants</span>, <span style="font-style: italic;">Nucleic\r
\r
\r
                Acids Research</span>, <span style="font-weight: bold;">38</span>(3):981-95,\r
\r
\r
              2010. <a\r
                href="http://nar.oxfordjournals.org/cgi/screenpdf/gkp1035"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font> </p>\r
        `,text:`C. Zeng, W. Wang, Y. Zheng, X. Chen, X.\r
              Bo, S. Song, W. Zhang* and M. Peng*, Conservation and divergence\r
                of microRNAs and their functions in Euphorbiaceous\r
                plants, Nucleic\r
\r
\r
                Acids Research, 38(3):981-95,\r
\r
\r
              2010.`},{html:`\r
          <p><font face="Arial">Y-F. Li, Y. Zheng, C. Addo-Quaye, L.\r
              Zhang, A. Saini, G. Jagadeeswaran, M. Axtell, <strong>W. Zhang</strong> and\r
              R. Sunkar*,&nbsp;<span style="font-weight: bold;">Transcriptome-wide\r
\r
\r
\r
                identification of microRNA targets in rice</span>,<span\r
                style="font-style: italic;"> The Plant Journal</span>,\r
              62(5):742-59, 2010. <a\r
                href="http://www3.interscience.wiley.com/journal/123304837/abstract"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a><a\r
                href="http://www.biomedcentral.com/1471-2164/11/52"> </a><span\r
                class="src"></span></font></p>\r
        `,text:`Y-F. Li, Y. Zheng, C. Addo-Quaye, L.\r
              Zhang, A. Saini, G. Jagadeeswaran, M. Axtell, W. Zhang and\r
              R. Sunkar*,&nbsp;Transcriptome-wide\r
\r
\r
\r
                identification of microRNA targets in rice, The Plant Journal,\r
              62(5):742-59, 2010.`},{html:`\r
          <p><font face="Arial">G. Jagadeeswaran, Y. Zheng, N.\r
              Sumathipala, H. Jiang, E. Arese, J.L. Soulages, <strong>W. Zhang</strong>\r
              and R. Sunkar*, <span style="font-weight: bold;">Deep\r
                sequencing of small RNA libraries reveals dynamic\r
                regulation of conserved and novel microRNAs and\r
                microRNA-stars during silkworm development</span>,<span\r
                style="font-style: italic;"> BMC Genomics</span>, <span\r
                style="font-weight: bold;">11:</span>52, <span\r
                style="font-style: italic;"></span>2010. <a\r
                href="http://www.biomedcentral.com/1471-2164/11/52"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"> </a><img style="width: 91px;\r
                height: 12px;" alt="" src="highlyaccessed.gif"></font></p>\r
        `,text:`G. Jagadeeswaran, Y. Zheng, N.\r
              Sumathipala, H. Jiang, E. Arese, J.L. Soulages, W. Zhang\r
              and R. Sunkar*, Deep\r
                sequencing of small RNA libraries reveals dynamic\r
                regulation of conserved and novel microRNAs and\r
                microRNA-stars during silkworm development, BMC Genomics, 11:52, 2010.`},{html:`<font face="Arial">Y. Zheng* and <strong>W. Zhang</strong>*, <span\r
              style="font-weight: bold;">Animal microRNA target\r
              prediction using diverse sequence-specific determinants</span>,\r
            <span style="font-style: italic;">J. Bioinformatics and\r
              Computational Biology</span>, <span style="font-weight:\r
              bold;">8</span>(4):763-88, 2010. <a\r
              href="http://www.worldscinet.com/jbcb/08/0804/S0219720010004896.html"><img\r
                alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                12px; height: 13px;"></a> `,text:`Y. Zheng* and W. Zhang*, Animal microRNA target\r
              prediction using diverse sequence-specific determinants,\r
            J. Bioinformatics and\r
              Computational Biology, 8(4):763-88, 2010.`},{html:`\r
          <p><font face="Arial"><strong style="font-weight: normal;">M.\r
                Ray</strong> and <strong>W. Zhang</strong>*, <span style="font-weight:\r
                bold;">Analysis of Alzheimer's disease severity across\r
                brain regions by topological analysis of gene\r
                co-expression networks</span>, <em>BMC Systems Biology</em>,\r
              <span style="font-weight: bold;">4</span>:136, <em></em>2010.\r
\r
\r
\r
              <a href="http://www.biomedcentral.com/1752-0509/4/136"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font> </p>\r
        `,text:`M.\r
                Ray and W. Zhang*, Analysis of Alzheimer's disease severity across\r
                brain regions by topological analysis of gene\r
                co-expression networks, BMC Systems Biology,\r
              4:136, 2010.`},{html:`\r
          <p><font face="Arial"><strong style="font-weight: normal;">J.\r
                Ruan</strong>*, A.K. Dean and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">A general co-expression\r
                network-based approach to gene expression analysis:\r
                Comparison and applications</span>, <em>BMC Systems\r
                Biology</em>, <span style="font-weight: bold;">4</span>:8<em>,\r
              </em>2010. <a\r
                href="http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"> </a><img style="width: 91px;\r
                height: 12px;" alt="" src="highlyaccessed.gif"> [<a\r
                href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]<br>\r
            </font></p>\r
        `,text:`J.\r
                Ruan*, A.K. Dean and W. Zhang*, A general co-expression\r
                network-based approach to gene expression analysis:\r
                Comparison and applications, BMC Systems\r
                Biology, 4:8,\r
              2010.   [Software]`},{html:`<font face="Arial">S. Pinaki, <strong>W. Zhang</strong>, P. Cobb and A.\r
            Nehorai*, <span style="font-weight: bold;">Gene\r
              reachability using Page Ranking on gene co-expression\r
              networks</span>, Chapter 21, in <span style="font-style:\r
              italic;">Link Mining: Models, Algorithms and Applications</span>,\r
            Springer, pp.557-68, 2010.</font>`,text:`S. Pinaki, W. Zhang, P. Cobb and A.\r
            Nehorai*, Gene\r
              reachability using Page Ranking on gene co-expression\r
              networks, Chapter 21, in Link Mining: Models, Algorithms and Applications,\r
            Springer, pp.557-68, 2010.`},{html:`<font face="Arial">X. Zhou, J. Ruan and <strong>W. Zhang</strong>, <span\r
              style="font-weight: bold;">Promoter prediction based on a\r
              multiple instance learning scheme</span>, <span\r
              style="font-style: italic;">ACM Intern. Conf. on\r
              Bioinformatics and Computational Biology</span>, Aug. 2-4,\r
            2010, Niagara Falls, NY, USA, accepted as a full paper.</font>`,text:`X. Zhou, J. Ruan and W. Zhang, Promoter prediction based on a\r
              multiple instance learning scheme, ACM Intern. Conf. on\r
              Bioinformatics and Computational Biology, Aug. 2-4,\r
            2010, Niagara Falls, NY, USA, accepted as a full paper.`},{html:`\r
          <p><font face="Arial">S. Climer, A. Templeton and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">SplittingHeirs: Inferring\r
                haplotypes by optimizing resultant dense graphs</span>,<span\r
                style="font-style: italic;"> ACM Intern. Conf. on\r
                Bioinformatics and Computational Biology</span>, Aug.\r
              2-4, 2010, Niagara Falls, NY, USA, accepted as a full\r
              paper.<br>\r
            </font> </p>\r
        `,text:`S. Climer, A. Templeton and W. Zhang, SplittingHeirs: Inferring\r
                haplotypes by optimizing resultant dense graphs, ACM Intern. Conf. on\r
                Bioinformatics and Computational Biology, Aug.\r
              2-4, 2010, Niagara Falls, NY, USA, accepted as a full\r
              paper.`},{html:`<font face="Arial">G. Jaeger and <strong>W. Zhang</strong>, <span\r
              style="font-weight: bold;">Phase transitions of and an\r
              efficient algorithm for the directed Hamiltonian cycle\r
              problem</span>,<span style="font-style: italic;"> J.\r
              Artificial Intelligence Research, </span>39:663-87, 2010.\r
            <a href="http://jair.org/papers/paper3109.html"><img\r
                alt="http://jair.org/papers/paper3109.html"\r
                src="pdf.jpg" style="border: 0px solid; border: 0px\r
                solid; width: 12px; height: 13px;"></a></font> `,text:`G. Jaeger and W. Zhang, Phase transitions of and an\r
              efficient algorithm for the directed Hamiltonian cycle\r
              problem, J.\r
              Artificial Intelligence Research, 39:663-87, 2010.`},{html:`<font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span\r
              style="font-weight: bold;">A novel transition based\r
              encoding scheme for planning as Satisfiability</span>, <span\r
              style="font-style: italic;">Proc. 24th AAAI Conference on\r
              Artificial Intelligence (AAAI-10</span><span\r
              style="font-style: italic;">)</span>, Atlanta, Georgia,\r
            USA, July 11-15, 2010; <span style="color: rgb(204, 0, 0);">Winner\r
\r
\r
\r
              of the Outstanding Paper Award of AAAI-10</span>.&nbsp;<a\r
              href="SASE-Encoding-aaai10.pdf"><img alt="aaai00 best\r
                paper" src="pdf.jpg" style="border: 0px solid; border:\r
                0px solid; width: 12px; height: 13px;"></a> (<a\r
              href="http://www.cse.wustl.edu/%7Ehuangr/sase.htm">source\r
              code</a>)<br>\r
          </font> `,text:`R. Huang, Y. Chen and W. Zhang, A novel transition based\r
              encoding scheme for planning as Satisfiability, Proc. 24th AAAI Conference on\r
              Artificial Intelligence (AAAI-10), Atlanta, Georgia,\r
            USA, July 11-15, 2010; Winner\r
\r
\r
\r
              of the Outstanding Paper Award of AAAI-10.&nbsp; (source\r
              code)`},{html:`<font face="Arial">G. Jaeger and <strong>W. Zhang</strong>, A SAT based\r
            effective algorithm for the directed Hamiltonian cycle\r
            problem, Proc. of CSR-2010, 216-27.</font>`,text:`G. Jaeger and W. Zhang, A SAT based\r
            effective algorithm for the directed Hamiltonian cycle\r
            problem, Proc. of CSR-2010, 216-27.`},{html:`\r
          <p><font face="Arial">X. Zhou, R. Sunkar, H. Jin, J-K. Zhu and\r
              <strong>W. Zhang</strong>*, <span style="font-weight: bold;">Genome-wide\r
                identification and analysis of small RNAs originate from\r
                natural antisense transcripts in <span\r
                  style="font-style: italic;">Oryza sativa</span></span>,\r
              <span style="font-style: italic;">Genome Research, </span><span\r
                style="font-weight: bold;">19</span>:70-8, 2009.&nbsp; <a\r
                href="ricenat.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`X. Zhou, R. Sunkar, H. Jin, J-K. Zhu and\r
              W. Zhang*, Genome-wide\r
                identification and analysis of small RNAs originate from\r
                natural antisense transcripts in Oryza sativa,\r
              Genome Research, 19:70-8, 2009.&nbsp;`},{html:`\r
          <p><font face="Arial">G. Jagadeeswaran, Y. Zheng, Y-f. Li,\r
              L.I. Shukla, J. Matts, P. Hoyt, S.L. Macmil, G.B. Wiley,\r
              B.A. Roe, <strong>W. Zhang</strong>, R. Sunkar*, <span style="font-weight:\r
                bold;">Cloning and characterization of small RNAs from\r
                Medicago truncatula reveals novel legume-specific and\r
                candidate microRNAs</span>, <span style="font-style:\r
                italic;">New Phytologist, </span>184(1):85-98, 2009.</font></p>\r
        `,text:`G. Jagadeeswaran, Y. Zheng, Y-f. Li,\r
              L.I. Shukla, J. Matts, P. Hoyt, S.L. Macmil, G.B. Wiley,\r
              B.A. Roe, W. Zhang, R. Sunkar*, Cloning and characterization of small RNAs from\r
                Medicago truncatula reveals novel legume-specific and\r
                candidate microRNAs, New Phytologist, 184(1):85-98, 2009.`},{html:`\r
          <p><font face="Arial">A.M. Reddy, Y. Zheng, G. Jagadeeswaran,\r
              S.L. Macmil, G.B. Wiley, B.A. Roe, U. Desilva, <strong>W. Zhang</strong>\r
              and R. Sunkar*, <span style="font-weight: bold;">Cloning,\r
                characterization and expression analysis of porcine\r
                microRNAs</span>, <span style="font-style: italic;">BMC\r
                Genomics</span>, <span style="font-weight: bold;">10</span>:65,\r
\r
\r
\r
              2009.&nbsp; <a\r
                href="http://www.biomedcentral.com/1471-2164/10/65"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a> &nbsp;<img style="width:\r
                91px; height: 12px;" alt="" src="highlyaccessed.gif"></font>\r
          </p>\r
        `,text:`A.M. Reddy, Y. Zheng, G. Jagadeeswaran,\r
              S.L. Macmil, G.B. Wiley, B.A. Roe, U. Desilva, W. Zhang\r
              and R. Sunkar*, Cloning,\r
                characterization and expression analysis of porcine\r
                microRNAs, BMC\r
                Genomics, 10:65,\r
\r
\r
\r
              2009.&nbsp;  &nbsp;`},{html:`\r
          <p><font face="Arial">J.A. Webster, J.R. Cibbs, J. Clarke, M.\r
              Ray, <strong>W. Zhang</strong>, P. Holmans, K. Rohrer, A. Zhao, L. Marlowe,\r
              M. Kaleem, D.S. McCorquodale III, C. Cuello, D. Leung, L.\r
              Bryden, P. Nath, V.L. Zisman, K. Joshipura, M.J.\r
              Huentelman, D. H Lince, K.D. Coon, D.W. Craig, J.V.\r
              Pearson, C.B. Heward, E.M. Reiman, D. Stephan, J. Hardy,\r
              A.J. Myers*, <span style="font-weight: bold;">Genetic\r
                control of human brain transcript expression in\r
                Alzheimer's disease</span>, <span style="font-style:\r
                italic;">American J. of Human Genetics</span>, <span\r
                style="font-weight: bold;">84</span>:445-458, 2009.<strong\r
                style="font-weight: normal;"></strong></font></p>\r
        `,text:`J.A. Webster, J.R. Cibbs, J. Clarke, M.\r
              Ray, W. Zhang, P. Holmans, K. Rohrer, A. Zhao, L. Marlowe,\r
              M. Kaleem, D.S. McCorquodale III, C. Cuello, D. Leung, L.\r
              Bryden, P. Nath, V.L. Zisman, K. Joshipura, M.J.\r
              Huentelman, D. H Lince, K.D. Coon, D.W. Craig, J.V.\r
              Pearson, C.B. Heward, E.M. Reiman, D. Stephan, J. Hardy,\r
              A.J. Myers*, Genetic\r
                control of human brain transcript expression in\r
                Alzheimer's disease, American J. of Human Genetics, 84:445-458, 2009.`},{html:`\r
          <p><font face="Arial">M. Ray and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">Integrating genetic and\r
                phenotypic information to analyze Alzheimer's disease</span>,\r
              <span style="font-style: italic;">J. of Alzheimer's\r
                Disease</span>, <span style="font-weight: bold;">16</span>(1):73-84,\r
\r
\r
\r
              2009.&nbsp; <a href="multireg.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a><strong style="font-weight:\r
                normal;"></strong></font></p>\r
        `,text:`M. Ray and W. Zhang*, Integrating genetic and\r
                phenotypic information to analyze Alzheimer's disease,\r
              J. of Alzheimer's\r
                Disease, 16(1):73-84,\r
\r
\r
\r
              2009.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong style="font-weight: normal;">J.\r
                Ruan</strong>*, Y Deng, E.J. Perkins and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">An ensemble learning approach\r
                to reverse-engineering transcriptional regulatory\r
                networks from time-series expression data</span>, <em>BMC\r
\r
\r
                Genomics</em>, Suppl 1:S8, 2009. <br>\r
            </font> </p>\r
        `,text:`J.\r
                Ruan*, Y Deng, E.J. Perkins and W. Zhang*, An ensemble learning approach\r
                to reverse-engineering transcriptional regulatory\r
                networks from time-series expression data, BMC\r
\r
\r
                Genomics, Suppl 1:S8, 2009.`},{html:`\r
          <p><font face="Arial">S. Climer, G. Jaeger, A. Templeton and\r
              <strong>W. Zhang</strong>*, <span style="font-weight: bold;">How frugal is\r
                mother nature with haplotypes?</span> <span\r
                style="font-style: italic;">Bioinformatics</span>, <span\r
                style="font-weight: bold;">25</span>(1):68-74, 2009. <a\r
                href="frugal.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`S. Climer, G. Jaeger, A. Templeton and\r
              W. Zhang*, How frugal is\r
                mother nature with haplotypes? Bioinformatics, 25(1):68-74, 2009.`},{html:`\r
          <p><font face="Arial">G. Jaeger, S. Climer and <strong>W. Zhang</strong>. <span\r
                style="font-weight: bold;">Complete parsimony haplotype\r
                inference problem and algorithms, </span><span\r
                style="font-style: italic;">Proc. 17th Annual European\r
                Symposium on Algorithms</span> (ESA-09), Copenhagen,\r
              Sept, 7-9, 2009.</font></p>\r
        `,text:`G. Jaeger, S. Climer and W. Zhang. Complete parsimony haplotype\r
                inference problem and algorithms, Proc. 17th Annual European\r
                Symposium on Algorithms (ESA-09), Copenhagen,\r
              Sept, 7-9, 2009.`},{html:`\r
          <p><font face="Arial">Y. Chen, R. Huang, Z. Xing and <strong>W. Zhang</strong>,\r
              <span style="font-weight: bold;">Long-distance mutual\r
                exclusion for planning</span>, <em>Artificial\r
                Intelligence</em>, <span style="font-weight: bold;">173</span>:365-91,\r
\r
\r
              2009. <a href="londexaij.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`Y. Chen, R. Huang, Z. Xing and W. Zhang,\r
              Long-distance mutual\r
                exclusion for planning, Artificial\r
                Intelligence, 173:365-91,\r
\r
\r
              2009.`},{html:`<font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span\r
              style="font-weight: bold;">An optimal temporally\r
              expressive planner: Initial results and application to P2P\r
              network optimization</span>, <span style="font-style:\r
              italic;">Proc. 19th Intern. Conf. on Automated Planning\r
              and Scheduling</span> (ICAPS-09), Thessaloniki, Greece,\r
            Sept. 19-23, 2009.<br>\r
          </font> `,text:`R. Huang, Y. Chen and W. Zhang, An optimal temporally\r
              expressive planner: Initial results and application to P2P\r
              network optimization, Proc. 19th Intern. Conf. on Automated Planning\r
              and Scheduling (ICAPS-09), Thessaloniki, Greece,\r
            Sept. 19-23, 2009.`},{html:`\r
          <p><font face="Arial">Y. Xu, X. Zhou and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">MicroRNA prediction with a\r
                novel ranking algorithm based on random walks</span>, <span\r
                style="font-style: italic;">Bioinformatics </span><span\r
                style="font-weight: bold;">24</span>:i50-i58, 2008, (<span\r
                style="font-style: italic;">Proc. 16th Annual Intern.\r
                Conf. on Intelligent Systems for Molecular Biology</span>\r
              <span style="font-style: italic;">(ISMB-2008)</span>). <a\r
                href="miRank.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>\r
          </p>\r
        `,text:`Y. Xu, X. Zhou and W. Zhang*, MicroRNA prediction with a\r
                novel ranking algorithm based on random walks, Bioinformatics 24:i50-i58, 2008, (Proc. 16th Annual Intern.\r
                Conf. on Intelligent Systems for Molecular Biology\r
              (ISMB-2008)).`},{html:`\r
          <p><font face="Arial">R. Sunkar, X. Zhou, Y. Zheng, <strong>W. Zhang</strong>\r
              and J-K. Zhu*, <span style="font-weight: bold;">Identification\r
\r
\r
\r
                of novel and candidate miRNAs in rice by high throughput\r
                sequencing</span>, <span style="font-style: italic;">BMC\r
\r
\r
\r
                Plant Biology</span>, <span style="font-weight: bold;">8</span>:25,\r
\r
\r
\r
              2008. <a\r
                href="http://www.biomedcentral.com/1471-2229/8/25"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a>&nbsp;&nbsp; <img\r
                style="width: 91px; height: 12px;" alt=""\r
                src="highlyaccessed.gif">&nbsp; </font></p>\r
        `,text:`R. Sunkar, X. Zhou, Y. Zheng, W. Zhang\r
              and J-K. Zhu*, Identification\r
\r
\r
\r
                of novel and candidate miRNAs in rice by high throughput\r
                sequencing, BMC\r
\r
\r
\r
                Plant Biology, 8:25,\r
\r
\r
\r
              2008. &nbsp;&nbsp; &nbsp;`},{html:`\r
          <p><font face="Arial">X. Zhou, G. Wang, K. Sutoh, J-K. Zhu and\r
              <strong>W. Zhang</strong>*, <span style="font-weight: bold;">Identification\r
\r
\r
\r
                of cold inducible microRNAs in plants by transcriptome\r
                analysis</span>, <span style="font-style: italic;">Biochim\r
\r
\r
\r
                Biophys Acta</span>, <span style="font-weight: bold;">1779</span>(11):780-8,\r
\r
\r
\r
              2008. <a href="coldmirBBA.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`X. Zhou, G. Wang, K. Sutoh, J-K. Zhu and\r
              W. Zhang*, Identification\r
\r
\r
\r
                of cold inducible microRNAs in plants by transcriptome\r
                analysis, Biochim\r
\r
\r
\r
                Biophys Acta, 1779(11):780-8,\r
\r
\r
\r
              2008.`},{html:`\r
          <p><font face="Arial">M. Ray, J. Ruan and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">Variations in the\r
                transcriptome of Alzheimer's disease reveal modular\r
                networks involved in cardiovascular diseases</span>, <span\r
                style="font-style: italic;">Genome Biology</span>, <span\r
                style="font-weight: bold;">9</span>(10):R148, 2008. <a\r
href="http://genomebiology.com/content/pdf/gb-2008-9-10-r148.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a>&nbsp; <img style="width:\r
                91px; height: 12px;" alt="" src="highlyaccessed.gif"></font>\r
          </p>\r
        `,text:`M. Ray, J. Ruan and W. Zhang*, Variations in the\r
                transcriptome of Alzheimer's disease reveal modular\r
                networks involved in cardiovascular diseases, Genome Biology, 9(10):R148, 2008. &nbsp;`},{html:`\r
          <p><font face="Arial">J.E. McDunn, K. Husain, A.D. Polpitiya,\r
              A. Burykin, J. Ruan, Q. Li, W. Schierding, N. Lin, D.\r
              Dixon, <strong>W. Zhang</strong>, C.M. Coopersmith, W.M. Dunne, M. Colonna,\r
              B.K. Ghosh and J.P. Cobb*, <span style="font-weight:\r
                bold;">Plasticity of the systemic inflammatory reponse\r
                to acute infection during critical illness: Development\r
                of the riboleukogram</span>, <span style="font-style:\r
                italic;">PLoS ONE</span>, <span style="font-weight:\r
                bold;">3</span>(2):e1564, 2008. <a\r
href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0001564"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a><a href="PLoSONE-vap.pdf"> </a></font></p>\r
        `,text:`J.E. McDunn, K. Husain, A.D. Polpitiya,\r
              A. Burykin, J. Ruan, Q. Li, W. Schierding, N. Lin, D.\r
              Dixon, W. Zhang, C.M. Coopersmith, W.M. Dunne, M. Colonna,\r
              B.K. Ghosh and J.P. Cobb*, Plasticity of the systemic inflammatory reponse\r
                to acute infection during critical illness: Development\r
                of the riboleukogram, PLoS ONE, 3(2):e1564, 2008.`},{html:`\r
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Identifying network\r
                communities with a high resolution</span>,<span\r
                style="font-weight: bold;"> </span><span\r
                style="font-style: italic;">Physical Review E</span>, <span\r
                style="font-weight: bold;">77</span>:016104, 2008. <a\r
href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0001564"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"><br>\r
              </a></font></p>\r
        `,text:`J. Ruan and W. Zhang, Identifying network\r
                communities with a high resolution, Physical Review E, 77:016104, 2008.`},{html:`\r
          <p><font face="Arial">Y. Chen, R. Huang and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Fast planning by search in\r
                domain transition graphs</span>, <span\r
                style="font-style: italic;">Proc. 23rd AAAI Conference\r
                on Artificial Intelligence (AAAI-08</span><span\r
                style="font-style: italic;">)</span>, Chicago, IL, USA,\r
              July 13-17, 2008.&nbsp; <a\r
                href="http://www.cse.wustl.edu/%7Echen/public/DTG.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`Y. Chen, R. Huang and W. Zhang, Fast planning by search in\r
                domain transition graphs, Proc. 23rd AAAI Conference\r
                on Artificial Intelligence (AAAI-08), Chicago, IL, USA,\r
              July 13-17, 2008.&nbsp;`},{html:`\r
          <p><font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">DTG-Plan: Fast planning by\r
                search in domain transition graphs</span>, <span\r
                style="font-style: italic;">Proc. 6th International\r
                Planning Competition, International Conf. on Automated\r
                Planning and Scheduling, </span>2008.&nbsp; <a\r
                href="http://www.cse.wustl.edu/%7Echen/public/DTG-Plan.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`R. Huang, Y. Chen and W. Zhang, DTG-Plan: Fast planning by\r
                search in domain transition graphs, Proc. 6th International\r
                Planning Competition, International Conf. on Automated\r
                Planning and Scheduling, 2008.&nbsp;`},{html:`  \r
          <p><font face="Arial">X. Zhou, G. Wang and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">UV-B light responsive\r
                microRNA genes in <span style="font-style: italic;">Arabidopsis\r
\r
\r
\r
                  thaliana</span>, </span><span style="font-style:\r
                italic;">Molecular Systems Biology</span>, <span\r
                style="font-weight: bold;">3</span>:103, 2007. <a\r
                href="msb4100143.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>\r
          </p>\r
        `,text:`X. Zhou, G. Wang and W. Zhang*, UV-B light responsive\r
                microRNA genes in Arabidopsis\r
\r
\r
\r
                  thaliana, Molecular Systems Biology, 3:103, 2007.`},{html:`\r
          <p><font face="Arial">X. Zhou, J. Ruan, G. Wang and <strong>W. Zhang</strong>*,\r
              <span style="font-weight: bold;">Characterization and\r
                identification of microRNA core promoters in four model\r
                species</span>, <em>PLoS Computational Biology</em>, <span\r
                style="font-weight: bold;">3</span>(3):e37, 2007. <a\r
href="http://www.ploscompbiol.org/article/info:doi%2F10.1371%2Fjournal.pcbi.0030037"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a>. <span\r
                style="text-decoration: underline;">[</span><a\r
                href="http://cic.cse.wustl.edu/microrna/promoters.html">Supplemental\r
\r
\r
\r
                materials</a>] </font></p>\r
        `,text:`X. Zhou, J. Ruan, G. Wang and W. Zhang*,\r
              Characterization and\r
                identification of microRNA core promoters in four model\r
                species, PLoS Computational Biology, 3(3):e37, 2007. . [Supplemental\r
\r
\r
\r
                materials]`},{html:`\r
          <p><font face="Arial">M. Ray, S. Dharmarajan, J. Freudenberg,\r
              <strong>W. Zhang</strong>* and G.A. Patterson*, <span style="font-weight:\r
                bold;">Expression profiling of human donor lungs to\r
                understand primary graft dysfunction after lung\r
                transplantation</span>,<span style="font-weight: bold;">\r
              </span><span style="font-style: italic;">American J. of\r
                Transplantation</span>, <span style="font-weight:\r
                bold;">7</span>:2396-405, 2007.&nbsp; <a\r
                href="lung-j.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>\r
          </p>\r
        `,text:`M. Ray, S. Dharmarajan, J. Freudenberg,\r
              W. Zhang* and G.A. Patterson*, Expression profiling of human donor lungs to\r
                understand primary graft dysfunction after lung\r
                transplantation,\r
              American J. of\r
                Transplantation, 7:2396-405, 2007.&nbsp;`},{html:`\r
          <p><font face="Arial">H. Zeng, L. Luo, <strong>W. Zhang</strong>, J. Zhou, Z.\r
              Li, H. Liu, T. Zhu, X. Feng and Y. Zhong*, <span\r
                style="font-weight: bold;">PlantQTL-GE: A database for\r
                searching candidate genes by gene expression and QTL\r
                information</span>, <em>Nucleic Acids Research</em>, <span\r
                style="font-weight: bold;">35</span>:D879-82, 2007. <a\r
href="http://nar.oxfordjournals.org/cgi/content/full/gkl814v1"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font> </p>\r
        `,text:`H. Zeng, L. Luo, W. Zhang, J. Zhou, Z.\r
              Li, H. Liu, T. Zhu, X. Feng and Y. Zhong*, PlantQTL-GE: A database for\r
                searching candidate genes by gene expression and QTL\r
                information, Nucleic Acids Research, 35:D879-82, 2007.`},{html:`\r
          <p><font face="Arial">X. Zhou and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">Combinatory circuits of\r
                miRNAs and transcription factors for plant gene\r
                regulation</span><span style="font-weight: bold;"><span\r
                  style="font-style: italic;"></span>, </span><span\r
                style="font-style: italic;">RECOMB Satellite Conference\r
                on Systems Biology</span>, San Diego, Nov. 30 - Dec. 1,\r
              2007.&nbsp;</font></p>\r
        `,text:`X. Zhou and W. Zhang*, Combinatory circuits of\r
                miRNAs and transcription factors for plant gene\r
                regulation, RECOMB Satellite Conference\r
                on Systems Biology, San Diego, Nov. 30 - Dec. 1,\r
              2007.&nbsp;`},{html:`\r
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">An efficient spectral\r
                algorithm for network community discovery and its\r
                applications to biological and social networks</span>, <span\r
                style="font-style: italic;">Proc. IEEE Intern. Conf. on\r
                Data Mining, ICDM-07</span>, Omaha, NE, USA, Oct. 28-31,\r
              2007. <a href="network-icdm.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font> </p>\r
        `,text:`J. Ruan and W. Zhang, An efficient spectral\r
                algorithm for network community discovery and its\r
                applications to biological and social networks, Proc. IEEE Intern. Conf. on\r
                Data Mining, ICDM-07, Omaha, NE, USA, Oct. 28-31,\r
              2007.`},{html:`\r
          <p><font face="Arial">M. Ray, S. Dharmarajan, J. Freudenberg,\r
              G.A. Patterson and <strong>W. Zhang</strong>*, <span style="font-weight:\r
                bold;">Gene expression profiling and machine learning to\r
                understand and predict primary graft dysfunction</span>,<span\r
                style="font-weight: bold;"> </span><span\r
                style="font-style: italic;">Proc. IEEE 7-th Intern.\r
                Conf. on BioInfornatics &amp; BioEngineering</span>,\r
              Boson, MA, Oct. 14-17<span style="font-weight: bold;"></span>,\r
              2007.</font></p>\r
        `,text:`M. Ray, S. Dharmarajan, J. Freudenberg,\r
              G.A. Patterson and W. Zhang*, Gene expression profiling and machine learning to\r
                understand and predict primary graft dysfunction, Proc. IEEE 7-th Intern.\r
                Conf. on BioInfornatics &amp; BioEngineering,\r
              Boson, MA, Oct. 14-17,\r
              2007.`},{html:`\r
          <p><font face="Arial">R. Souvenir, J. Buhler, G. Stormo and W.\r
              Zhang*, <span style="font-weight: bold;">An iterative\r
                method for selecting degenerate multiplex PCR primers</span>,\r
              <em>Methods in Molecular Biology, </em>402:245-68, 2007.\r
              <a href="pcrprimer.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a>\r
              [<a href="http://www.cse.wustl.edu/%7Ezhang/projects/mips.zip">software</a>]</font></p>\r
        `,text:`R. Souvenir, J. Buhler, G. Stormo and W.\r
              Zhang*, An iterative\r
                method for selecting degenerate multiplex PCR primers,\r
              Methods in Molecular Biology, 402:245-68, 2007.\r
              \r
              [software]`},{html:`\r
          <p><font face="Arial">M. Ray, J. Freudenberg and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">A comprehensive analysis of\r
                the effect of microarray data preprocessing methods on\r
                differentially expressed transcript selection</span>, in\r
              <span style="font-style: italic;">Normalization Concepts\r
                for Microarray Technologies</span>, Phillip Stafford\r
              (editor), Taylor and Francis Publications, 2007.&nbsp; <a\r
                href="normalization-bookchapter.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font></p>\r
        `,text:`M. Ray, J. Freudenberg and W. Zhang*, A comprehensive analysis of\r
                the effect of microarray data preprocessing methods on\r
                differentially expressed transcript selection, in\r
              Normalization Concepts\r
                for Microarray Technologies, Phillip Stafford\r
              (editor), Taylor and Francis Publications, 2007.&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Xing, Y. Chen and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Long-distance mutual\r
                exclusions for propositional planning</span>, <span\r
                style="font-style: italic;">Proc. 20th Intern. Joint\r
                Conf. on </span><em>Artificial Intelligence </em><span\r
                style="font-style: italic;">(IJCAI-07)</span>,\r
              Hyderabad, India, Jan. 9-12, 2007.&nbsp; <a\r
                href="ijcai07final.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>\r
          </p>\r
        `,text:`Z. Xing, Y. Chen and W. Zhang, Long-distance mutual\r
                exclusions for propositional planning, Proc. 20th Intern. Joint\r
                Conf. on Artificial Intelligence (IJCAI-07),\r
              Hyderabad, India, Jan. 9-12, 2007.&nbsp;`},{html:`\r
          <p><font face="Arial">G. Wang and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">A steganalysis-based approach\r
                to comprehensive identification and characterization of\r
                functional regulatory elements</span>, <em>Genome\r
                Biology</em>, <span style="font-weight: bold;">7</span>(6):R49,\r
\r
\r
\r
              2006.&nbsp;[<a href="http://cic.cse.wustl.edu/wordspy">software</a>]&nbsp;\r
\r
\r
\r
              <a href="http://genomebiology.com/2006/7/6/R49"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a>&nbsp; <img style="width:\r
                91px; height: 12px;" alt="" src="highlyaccessed.gif"></font></p>\r
        `,text:`G. Wang and W. Zhang*, A steganalysis-based approach\r
                to comprehensive identification and characterization of\r
                functional regulatory elements, Genome\r
                Biology, 7(6):R49,\r
\r
\r
\r
              2006.&nbsp;[software]&nbsp;\r
\r
\r
\r
              &nbsp;`},{html:`\r
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Rearrangement clustering:\r
                Pitfalls, remedies and applications</span>, <em>J.\r
                Machine Learning Research</em>, <span\r
                style="font-weight: bold;">7</span>:919-43, 2006. [<a\r
                href="http://cic.cse.wustl.edu/TSP_k/">software</a>]&nbsp;\r
\r
\r
\r
              <a\r
                href="http://jmlr.csail.mit.edu/papers/volume7/climer06a/climer06a.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`S. Climer and W. Zhang, Rearrangement clustering:\r
                Pitfalls, remedies and applications, J.\r
                Machine Learning Research, 7:919-43, 2006. [software]&nbsp;`},{html:`\r
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">A bi-dimensional regression\r
                tree approach to the modeling of gene expression\r
                regulation</span>, <em>Bioinformatics</em>, <span\r
                style="font-weight: bold;">22</span>(3):332-40, 2006. <a\r
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=pubmed&amp;cmd=Retrieve&amp;dopt=Abstract&amp;list_uids=16303796&amp;query_hl=3&amp;itool=pubmed_docsum"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`J. Ruan and W. Zhang*, A bi-dimensional regression\r
                tree approach to the modeling of gene expression\r
                regulation, Bioinformatics, 22(3):332-40, 2006.`},{html:`\r
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Identification and evaluation\r
                of weak community structures in networks</span>, <em>Proc.\r
\r
\r
\r
                21st National Conf. on Artificial Intelligence,\r
                (AAAI-06)</em>, Boston, Massachusetts, July 16-20, 2006,\r
              pp.470-5.&nbsp; <a href="aaai06.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a><br>\r
            </font> </p>\r
        `,text:`J. Ruan and W. Zhang, Identification and evaluation\r
                of weak community structures in networks, Proc.\r
\r
\r
\r
                21st National Conf. on Artificial Intelligence,\r
                (AAAI-06), Boston, Massachusetts, July 16-20, 2006,\r
              pp.470-5.&nbsp;`},{html:`\r
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">Identification and evaluation\r
                of functional modules in gene co-expression networks, </span><span\r
                style="font-style: italic;">RECOMB Satellite Conference\r
                on Systems Biology</span>, San Diego, Dec. 1-3, 2006,\r
              (oral presentation).</font></p>\r
        `,text:`J. Ruan and W. Zhang*, Identification and evaluation\r
                of functional modules in gene co-expression networks, RECOMB Satellite Conference\r
                on Systems Biology, San Diego, Dec. 1-3, 2006,\r
              (oral presentation).`},{html:`\r
          <p><font face="Arial">X. Zhou, G. Wang and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">UV-B light responsive\r
                microRNA genes in <span style="font-style: italic;">Arabidopsis\r
\r
\r
\r
                  thaliana</span>, </span><span style="font-style:\r
                italic;">RECOMB Satellite Conference on Systems Biology</span>,\r
              San Diego, Dec. 1-3, 2006, (oral presentation).</font></p>\r
        `,text:`X. Zhou, G. Wang and W. Zhang*, UV-B light responsive\r
                microRNA genes in Arabidopsis\r
\r
\r
\r
                  thaliana, RECOMB Satellite Conference on Systems Biology,\r
              San Diego, Dec. 1-3, 2006, (oral presentation).`},{html:`\r
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Cut-and-solve: A linear\r
                search strategy for combinatorial optimization problems</span>,\r
              <em>Artificial Intelligence</em>, <span\r
                style="font-weight: bold;">170</span>(8-9):714-38,\r
              2006.&nbsp; <a href="cutsolve.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a> [<a\r
                href="http://cic.cse.wustl.edu/cnstsp">software</a>]&nbsp;&nbsp;</font></p>\r
        `,text:`S. Climer and W. Zhang, Cut-and-solve: A linear\r
                search strategy for combinatorial optimization problems,\r
              Artificial Intelligence, 170(8-9):714-38,\r
              2006.&nbsp;  [software]&nbsp;&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Xing, Y. Chen and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">An efficient hybrid strategy\r
                for temporal planning</span>, <span style="font-style:\r
                italic;">Proc. 3rd Intern. Conf. on Integration of AI\r
                and OR Techniques for Constraint Programming for\r
                Combinatorial Optimization Problems (CP-AI-OR 2006)</span>,\r
              Cork, Ireland, May 30-June 2, 2006.&nbsp; <a\r
                href="cpaior06.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`Z. Xing, Y. Chen and W. Zhang, An efficient hybrid strategy\r
                for temporal planning, Proc. 3rd Intern. Conf. on Integration of AI\r
                and OR Techniques for Constraint Programming for\r
                Combinatorial Optimization Problems (CP-AI-OR 2006),\r
              Cork, Ireland, May 30-June 2, 2006.&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Xing, Y. Chen and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Optimal STRIPS planning by\r
                maximum satisfiability and accumulative learning</span>,\r
              <em>Proc. Intern. Conf. on Automated Planning and\r
                Scheduling (ICAPS-06)</em>, Cumbia, UK, June 6-10, 2006,\r
              pp.442-7.&nbsp; <a href="icaps06.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font> </p>\r
        `,text:`Z. Xing, Y. Chen and W. Zhang, Optimal STRIPS planning by\r
                maximum satisfiability and accumulative learning,\r
              Proc. Intern. Conf. on Automated Planning and\r
                Scheduling (ICAPS-06), Cumbia, UK, June 6-10, 2006,\r
              pp.442-7.&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Xing and Y. Chen and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">MaxPlan: Optimal planning by\r
                decomposed satisfiability and backward reduction</span>,\r
              <em>Proc. 5th International Planning Competition, Intern.\r
                Conf. on Automated Planning and Scheduling (ICAPS-06)</em>,\r
              Cumbia, UK, June 6-10, 2006, pp.53-6. (<span style="color:\r
                rgb(204, 0, 0);">First Place Award</span>, Optimal\r
              Planning Track)&nbsp; <a href="MaxPlan-final.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`Z. Xing and Y. Chen and W. Zhang, MaxPlan: Optimal planning by\r
                decomposed satisfiability and backward reduction,\r
              Proc. 5th International Planning Competition, Intern.\r
                Conf. on Automated Planning and Scheduling (ICAPS-06),\r
              Cumbia, UK, June 6-10, 2006, pp.53-6. (First Place Award, Optimal\r
              Planning Track)&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>*, J. Ruan, T-h. D. Ho, Y. You,\r
              T. Yu and R.S. Quatrano, <em style="font-weight: bold;">Cis</em><span\r
                style="font-weight: bold;">-regulatory element based\r
                targeted gene finding: Genome-wide identification of\r
                ABA- and abiotic stress-responsive genes in </span><em\r
                style="font-weight: bold;">Arabidopsis thaliana</em>, <em>\r
                Bioinformatics</em>, <strong>21</strong>(14):3074-81,\r
              2005.&nbsp; <a\r
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15890746&amp;query_hl=1"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang*, J. Ruan, T-h. D. Ho, Y. You,\r
              T. Yu and R.S. Quatrano, Cis-regulatory element based\r
                targeted gene finding: Genome-wide identification of\r
                ABA- and abiotic stress-responsive genes in Arabidopsis thaliana, \r
                Bioinformatics, 21(14):3074-81,\r
              2005.&nbsp;`},{html:`\r
          <p><font face="Arial">G. Wang, T. Yu and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">WordSpy: Identify\r
                transcription factor binding motifs by building a\r
                dictionary and learning a grammar</span>, <em>Nucleic\r
                Acids Research</em>, <strong>33</strong>:W412-6, 2005.\r
              [<a href="http://cic.cse.wustl.edu/wordspy">web server</a>]&nbsp;\r
\r
\r
\r
              <a\r
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15980501&amp;query_hl=4"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`G. Wang, T. Yu and W. Zhang*, WordSpy: Identify\r
                transcription factor binding motifs by building a\r
                dictionary and learning a grammar, Nucleic\r
                Acids Research, 33:W412-6, 2005.\r
              [web server]&nbsp;`},{html:`\r
          <p><font face="Arial">J. Ruan and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">CAGER: Classification\r
                analysis of gene expression regulation using multiple\r
                information sources</span>, <em>BMC Bioinformatics</em>,\r
              <strong>6</strong>:114, 2005.&nbsp; <a\r
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15890068&amp;query_hl=6"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`J. Ruan and W. Zhang*, CAGER: Classification\r
                analysis of gene expression regulation using multiple\r
                information sources, BMC Bioinformatics,\r
              6:114, 2005.&nbsp;`},{html:`\r
          <p><font face="Arial">G. Wang and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">Genome-wide identification of\r
                cis-regulatory elements: A steganalysis approach</span><em></em>,\r
              <em>Proc. of First Annual RECOMB Satellite Workshop on\r
                Systems Biology and the Second Annual RECOMB Satellite\r
                Workshop on Regulatory Genomics</em>, San Diego, CA,\r
              Dec. 2-4, 2005. (Oral presentation. The final version\r
              appeared in <em>Genome Biology</em> in 2006.)</font></p>\r
        `,text:`G. Wang and W. Zhang*, Genome-wide identification of\r
                cis-regulatory elements: A steganalysis approach,\r
              Proc. of First Annual RECOMB Satellite Workshop on\r
                Systems Biology and the Second Annual RECOMB Satellite\r
                Workshop on Regulatory Genomics, San Diego, CA,\r
              Dec. 2-4, 2005. (Oral presentation. The final version\r
              appeared in Genome Biology in 2006.)`},{html:`\r
          <p><font face="Arial">X. Zhou, J. Ruan, G. Wang and <strong>W. Zhang</strong>*,\r
              <span style="font-weight: bold;">Characterization of the\r
                promoters of microRNA genes: A genome-scale analysis on\r
              </span><em style="font-weight: bold;">C. elegans</em><span\r
                style="font-weight: bold;">, </span><em\r
                style="font-weight: bold;">A. thaliana</em><span\r
                style="font-weight: bold;"> and </span><em\r
                style="font-weight: bold;">H. sapiens</em>, <em>Proc.\r
                of First Annual RECOMB Satellite Workshop on Systems\r
                Biology and the Second Annual RECOMB Satellite Workshop\r
                on Regulatory Genomics</em>, San Diego, CA, Dec. 2-4,\r
              2005. (Poster presentation. The final version will appear\r
              in <em>PLoS Computational Biology</em>.</font></p>\r
        `,text:`X. Zhou, J. Ruan, G. Wang and W. Zhang*,\r
              Characterization of the\r
                promoters of microRNA genes: A genome-scale analysis on\r
              C. elegans, A. thaliana and H. sapiens, Proc.\r
                of First Annual RECOMB Satellite Workshop on Systems\r
                Biology and the Second Annual RECOMB Satellite Workshop\r
                on Regulatory Genomics, San Diego, CA, Dec. 2-4,\r
              2005. (Poster presentation. The final version will appear\r
              in PLoS Computational Biology.`},{html:`\r
          <p><font face="Arial">R. Korf, <strong>W. Zhang</strong>, I. Thayer and H.\r
              Hohwald, <span style="font-weight: bold;">Frontier search</span>,\r
              <em>J. ACM</em>, <strong>52</strong>(5):715-48,\r
              2005.&nbsp; <a\r
href="http://portal.acm.org/citation.cfm?id=1089023.1089024&amp;coll=GUIDE&amp;dl=GUIDE&amp;idx=1089023&amp;part=periodical&amp;WantType=periodical&amp;title=Journal%20of%20the%20ACM%20%28JACM%29&amp;CFID=72757175&amp;CFTOKEN=93721332"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font> </p>\r
        `,text:`R. Korf, W. Zhang, I. Thayer and H.\r
              Hohwald, Frontier search,\r
              J. ACM, 52(5):715-48,\r
              2005.&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Xing and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">MaxSolver: An efficient exact\r
                algorithm for (weighted) maximum satisfiability</span>,\r
              <em>Artificial Intelligence</em>, <strong>164</strong>(1-2):47-80,\r
\r
\r
              2005. [<a href="http://cic.cse.wustl.edu/maxsolver">software</a>]&nbsp;\r
\r
\r
\r
              <a href="maxsolver.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`Z. Xing and W. Zhang, MaxSolver: An efficient exact\r
                algorithm for (weighted) maximum satisfiability,\r
              Artificial Intelligence, 164(1-2):47-80,\r
\r
\r
              2005. [software]&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, G. Wang, Z. Xing and L.\r
              Wittenberg, <span style="font-weight: bold;">Distributed\r
                stochastic search and distributed breakout: Properties,\r
                comparison and applications to constraint optimization\r
                problems in sensor networks</span>, <em>Artificial\r
                Intelligence</em>, <strong>161</strong>(1-2):55-87,\r
              2005.&nbsp; <a href="distsearch.pdf"><img alt=""\r
                  src="pdf.jpg" style="border: 0px solid ; width: 12px;\r
                  height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, G. Wang, Z. Xing and L.\r
              Wittenberg, Distributed\r
                stochastic search and distributed breakout: Properties,\r
                comparison and applications to constraint optimization\r
                problems in sensor networks, Artificial\r
                Intelligence, 161(1-2):55-87,\r
              2005.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and M. Looks <span\r
                style="font-weight: bold;">A novel local search\r
                algorithm for the Traveling Salesman Problem that\r
                exploits backbones</span>, <em>Proc. 19th Intern. Joint\r
                Conf. on Artificial Intelligence (IJCAI-05)</em>.&nbsp;\r
              <a href="bgtsp.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font>\r
          </p>\r
        `,text:`W. Zhang and M. Looks A novel local search\r
                algorithm for the Traveling Salesman Problem that\r
                exploits backbones, Proc. 19th Intern. Joint\r
                Conf. on Artificial Intelligence (IJCAI-05).&nbsp;`},{html:`\r
          <p><font face="Arial">J. Ruan, G. Stormo and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">ILM: A web server for\r
                predicting RNA secondary structures with pseudoknots</span>,\r
              <em>Nucleic Acids Research</em>, <strong>32</strong>:W146-9,\r
\r
\r
\r
              2004.&nbsp;[<a href="http://cic.cse.wustl.edu/RNA/">web server</a>]&nbsp; <a\r
href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&amp;db=pubmed&amp;dopt=Abstract&amp;list_uids=15215368&amp;query_hl=8"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`J. Ruan, G. Stormo and W. Zhang*, ILM: A web server for\r
                predicting RNA secondary structures with pseudoknots,\r
              Nucleic Acids Research, 32:W146-9,\r
\r
\r
\r
              2004.&nbsp;[web server]&nbsp;`},{html:`\r
          <p><font face="Arial">J. Ruan, G. Stormo and <strong>W. Zhang</strong>*, <span\r
                style="font-weight: bold;">An iterated loop matching\r
                approach to the prediction of RNA secondary structures\r
                with pseudoknots</span>, <em>Bioinformatics</em>, <strong>20</strong>(1)58-66,\r
\r
\r
\r
              2004.&nbsp; [<a href="http://cic.cse.wustl.edu/RNA/">softare\r
\r
\r
\r
                and web server</a>]&nbsp; <a\r
                href="http://www.cs.wustl.edu/%7Ezhang/projects/rna/ilm/index.html"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`J. Ruan, G. Stormo and W. Zhang*, An iterated loop matching\r
                approach to the prediction of RNA secondary structures\r
                with pseudoknots, Bioinformatics, 20(1)58-66,\r
\r
\r
\r
              2004.&nbsp; [softare\r
\r
\r
\r
                and web server]&nbsp;`},{html:`\r
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Take a walk and cluster\r
                genes: A TSP-based approach to optimal rearrangement\r
                clustering</span>, <em>Proc. Intern. Conf. on Machine\r
                Learning (ICML-04)</em>, Alberta, Canada, July 4-8,\r
              2004.&nbsp; [<a href="http://cic.cse.wustl.edu/TSP_k/">software</a>]&nbsp;\r
\r
\r
\r
              <a href="tsp-icml04.pdf"><img alt="" src="pdf.jpg"\r
                  style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:`S. Climer and W. Zhang, Take a walk and cluster\r
                genes: A TSP-based approach to optimal rearrangement\r
                clustering, Proc. Intern. Conf. on Machine\r
                Learning (ICML-04), Alberta, Canada, July 4-8,\r
              2004.&nbsp; [software]&nbsp;`},{html:`\r
          <p><font face="Arial">J. Buhler, R. Souvenir, <strong>W. Zhang</strong> and R.\r
              Mitra, <span style="font-weight: bold;">Design of a\r
                high-throughput assay for alternative splicing using\r
                polymerase colonies</span>, <em>Proc. Pacific Symposium\r
                on Biocomputing (PSB-04), </em><strong>9</strong>:5-16,\r
              2004.&nbsp; <a\r
                href="http://www-smi.stanford.edu/projects/helix/psb04/buhler.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`J. Buhler, R. Souvenir, W. Zhang and R.\r
              Mitra, Design of a\r
                high-throughput assay for alternative splicing using\r
                polymerase colonies, Proc. Pacific Symposium\r
                on Biocomputing (PSB-04), 9:5-16,\r
              2004.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>,<span style="font-weight:\r
                bold;"> Configuartion landscape analysis and backbone\r
                guided local search: Part I: Satisfiability and maximum\r
                satisfiability</span>, <em>Artificial Intelligence</em>,\r
              <strong>158</strong>(1):1-26, 2004.&nbsp; <a\r
href="http://www.sciencedirect.com/science?_ob=IssueURL&amp;_tockey=%23TOC%235617%232004%23998419998%23511518%23FLA%23Volume_158,_Issue_1,_Pages_1-108_%28September_2004%29&amp;_auth=y&amp;view=c&amp;_acct=C000000938&amp;_version=1&amp;_urlVersion=0&amp;_userid=840033&amp;md5=950cc93c318fb3fcc3812b7788aa9de5"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`W. Zhang, Configuartion landscape analysis and backbone\r
                guided local search: Part I: Satisfiability and maximum\r
                satisfiability, Artificial Intelligence,\r
              158(1):1-26, 2004.&nbsp;`},{html:`\r
          <p><font face="Arial">A. K. Sen, A. Bagchi and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Average case analysis of\r
                best-first search in two representative directed acyclic\r
                graphs</span>, <em>Artificial Intelligence</em>, <strong>155</strong>(1-2):183-206,\r
\r
\r
\r
              2004.&nbsp; <a\r
href="http://www.sciencedirect.com/science?_ob=IssueURL&amp;_tockey=%23TOC%235617%232004%23998449998%23490436%23FLP%23Volume_155,_Issues_1-2,_Pages_1-209_%28May_2004%29&amp;_auth=y&amp;view=c&amp;_acct=C000050221&amp;_version=1&amp;_urlVersion=0&amp;_userid=10&amp;md5=4cd44fd31afb1ff54aa11725a99228f6"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a></font></p>\r
        `,text:`A. K. Sen, A. Bagchi and W. Zhang, Average case analysis of\r
                best-first search in two representative directed acyclic\r
                graphs, Artificial Intelligence, 155(1-2):183-206,\r
\r
\r
\r
              2004.&nbsp;`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
                bold;">Phase transitions and backbones of the asymmetric\r
                Traveling Salesman Problem</span>, <em>J. Artificial\r
                Intelligence</em> <em>Research</em>, <strong>20</strong>:471-97,\r
\r
\r
\r
              2004.&nbsp; <a\r
href="http://www-2.cs.cmu.edu/afs/cs/project/jair/pub/volume21/zhang04b.pdf"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid ; width:\r
                  12px; height: 13px;"></a><a\r
href="http://www-2.cs.cmu.edu/afs/cs/project/jair/pub/volume21/zhang04b.ps">\r
              </a></font></p>\r
        `,text:`W. Zhang, Phase transitions and backbones of the asymmetric\r
                Traveling Salesman Problem, J. Artificial\r
                Intelligence Research, 20:471-97,\r
\r
\r
\r
              2004.&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Xing and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">Efficient strategies for\r
                (weighted) maximum satisfiability</span>, <em>Proc.\r
                10th Intern. Conf. on Principles and Practice of\r
                Constraint Programming (CP-04)</em>, Toronto, Canada,\r
              Sept. 27 - Oct. 1, 2004, pp.690-705.</font></p>\r
        `,text:`Z. Xing and W. Zhang, Efficient strategies for\r
                (weighted) maximum satisfiability, Proc.\r
                10th Intern. Conf. on Principles and Practice of\r
                Constraint Programming (CP-04), Toronto, Canada,\r
              Sept. 27 - Oct. 1, 2004, pp.690-705.`},{html:`\r
          <p><font face="Arial">S. Climer and <strong>W. Zhang</strong>, <span\r
                style="font-weight: bold;">A linear search strategy with\r
                bounds</span>, <em>Proc. 14th Intern. Conf. on\r
                Automated Planning and Scheduling (ICAPS-04)</em>,\r
              British Columbia, Canada, June 3-7, 2004.</font></p>\r
        `,text:`S. Climer and W. Zhang, A linear search strategy with\r
                bounds, Proc. 14th Intern. Conf. on\r
                Automated Planning and Scheduling (ICAPS-04),\r
              British Columbia, Canada, June 3-7, 2004.`},{html:`\r
          <p><font face="Arial"><strong>W. Zhang</strong> and X. Zhang, <span\r
                style="font-weight: bold;">An improved integer local\r
                search for complex scheduling problems</span>, <em>Proc.\r
\r
\r
\r
                14th Intern. Conf. on Automated Planning and Scheduling\r
                (ICAPS-04)</em>, British Columbia, Canada, June 3-7,\r
              2004. </font></p>\r
        `,text:`W. Zhang and X. Zhang, An improved integer local\r
                search for complex scheduling problems, Proc.\r
\r
\r
\r
                14th Intern. Conf. on Automated Planning and Scheduling\r
                (ICAPS-04), British Columbia, Canada, June 3-7,\r
              2004.`}]},2012:{year:"2012",items:[{html:`<font face="Arial">X. Zhang, J. Xia, Y. Lii, B.E.\r
              Barrera-Figueroa, X. Zhou, S. Gao, L. Lu, D. Nie, Z. Chen,\r
              C. Leung, T. Wong, H. Zhang, J. Guo, Y. Li, R. Liu, W.\r
              Liang, J-K. Zhu, <strong>W. Zhang</strong>*, H. Jin*, <b>Genome-wide analysis of plant\r
                nat-siRNAs reveals insights into their distribution,\r
                biogenesis and function</b>, <i>Genome Biology</i>,\r
              13:R20, 2012. <a\r
                href="http://genomebiology.com/2012/13/3/R20"><img\r
                  alt="" src="pdf.jpg" width="12" height="13" border="0"></a></font>`,text:`X. Zhang, J. Xia, Y. Lii, B.E.\r
              Barrera-Figueroa, X. Zhou, S. Gao, L. Lu, D. Nie, Z. Chen,\r
              C. Leung, T. Wong, H. Zhang, J. Guo, Y. Li, R. Liu, W.\r
              Liang, J-K. Zhu, W. Zhang*, H. Jin*, Genome-wide analysis of plant\r
                nat-siRNAs reveals insights into their distribution,\r
                biogenesis and function, Genome Biology,\r
              13:R20, 2012.`},{html:`<font face="Arial">Y. Zheng, Y-F. Li, R. Sunkar and W.\r
              Zhang, <b>SeqTar: An\r
                effective method for identifying microRNA guided\r
                cleavage sites from degradome of polyadenylated\r
                transcripts in plants</b>, <i>Nucleic Acids Research</i>, 40(4):e28, 2012.\r
              <a href="http://www.ncbi.nlm.nih.gov/pubmed/22140118"><img\r
                  alt="" src="pdf.jpg" style="border: 0px solid; border:\r
                  0px solid; width: 12px; height: 13px;" width="12"\r
                  height="13" border="0"></a></font>`,text:`Y. Zheng, Y-F. Li, R. Sunkar and W.\r
              Zhang, SeqTar: An\r
                effective method for identifying microRNA guided\r
                cleavage sites from degradome of polyadenylated\r
                transcripts in plants, Nucleic Acids Research, 40(4):e28, 2012.`},{html:`<font face="Arial">J. Xia and <strong>W. Zhang</strong>*, <b>Noncanonical microRNAs and\r
              endogenous siRNAs in lytic infection of murine\r
              gammaherpesvirus</b>, <i>PLOS ONE</i>, 7(10):e47863,\r
            2012. <a\r
href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0047863"><img\r
                alt="" src="pdf.jpg" width="12" height="13" border="0"></a></font>`,text:`J. Xia and W. Zhang*, Noncanonical microRNAs and\r
              endogenous siRNAs in lytic infection of murine\r
              gammaherpesvirus, PLOS ONE, 7(10):e47863,\r
            2012.`},{html:`<font face="Arial">J.K. Greenberg, J. Xia, X. Zhou, S.R.\r
              Thatcher, X. Gu, S.A. Ament, T.C. Newman, P.J. Green, W.\r
              Zhang, G.E. Robinson and Y. Ben-Shahar*, <b>Behavioral plasticity in\r
                honey bees is associated with major differences in brain\r
                microRNA transcriptome</b>. <i>Genes, Brain and Behavior</i>, 11(6):660-70,\r
              2012. <a href="honeybee.pdf"><img alt="" src="pdf.jpg"\r
                  width="12" height="13" border="0"></a></font>`,text:`J.K. Greenberg, J. Xia, X. Zhou, S.R.\r
              Thatcher, X. Gu, S.A. Ament, T.C. Newman, P.J. Green, W.\r
              Zhang, G.E. Robinson and Y. Ben-Shahar*, Behavioral plasticity in\r
                honey bees is associated with major differences in brain\r
                microRNA transcriptome. Genes, Brain and Behavior, 11(6):660-70,\r
              2012.`},{html:`<font face="Arial"><strong>W. Zhang</strong>*, X. Zhou, J. Xia and X. Zhou,\r
              <b>Identification of\r
                microRNAs and natural antisense transcript-originated\r
                endogenous siRNAs from small-RNA deep sequencing data</b>,\r
              in <i>Methods in Molecular Biology</i>, 883:221-7, 2012. </font>`,text:`W. Zhang*, X. Zhou, J. Xia and X. Zhou,\r
              Identification of\r
                microRNAs and natural antisense transcript-originated\r
                endogenous siRNAs from small-RNA deep sequencing data,\r
              in Methods in Molecular Biology, 883:221-7, 2012.`},{html:`<font face="Arial"> D. He, D. Liu, <strong>W. Zhang</strong>, B. Yang and D.\r
            Jin, <b>Discovering link communities in complex networks by\r
              exploiting link dynamics</b>, <i>J. Statistical Mechanics</i>,\r
            P10015, 2012.<br>\r
          </font> `,text:`D. He, D. Liu, W. Zhang, B. Yang and D.\r
            Jin, Discovering link communities in complex networks by\r
              exploiting link dynamics, J. Statistical Mechanics,\r
            P10015, 2012.`},{html:`\r
          <p><font face="Arial">Y. Gan, J. Guan*, S. Zhou and <strong>W. Zhang</strong>*,\r
              <span style="font-weight: bold;">Structural features based\r
                genome-wide characterization and prediction of\r
                nucleosome organization</span>, <span\r
                style="font-style: italic;">BMC Bioinformatics</span>,\r
              13:49, 2012.&nbsp;<a\r
                href="http://www.biomedcentral.com/1471-2105/13/49"><img\r
                  alt="" src="pdf.jpg" width="12" height="13" border="0"></a><a\r
                href="http://genomebiology.com/2010/11/8/R81/abstract">&nbsp;</a><a\r
                href="http://genomebiology.com/2010/11/8/R81/abstract"><img\r
                  alt="" src="highlyaccessed.gif" width="91" height="12"\r
                  border="0"></a></font></p>\r
        `,text:`Y. Gan, J. Guan*, S. Zhou and W. Zhang*,\r
              Structural features based\r
                genome-wide characterization and prediction of\r
                nucleosome organization, BMC Bioinformatics,\r
              13:49, 2012.&nbsp;&nbsp;`},{html:`<font face="Arial">R. Huang, Y. Chen and <strong>W. Zhang</strong>, <span\r
              style="font-weight: bold;">SAS+ planning as Satisfiability</span>,<span\r
              style="font-style: italic;"> J. Artificial Intelligence\r
              Research, </span>43:293-328, 2012. <span style="color:\r
              rgb(255, 0, 0);">AAAI 2010 Outstanding Paper Award</span>.\r
            <a href="http://www.jair.org/papers/paper3442.html"><img\r
                alt="" src="pdf.jpg" style="border: 0px solid; border:\r
                0px solid; width: 12px; height: 13px;"></a></font>`,text:`R. Huang, Y. Chen and W. Zhang, SAS+ planning as Satisfiability, J. Artificial Intelligence\r
              Research, 43:293-328, 2012. AAAI 2010 Outstanding Paper Award.`}]},2021:{year:"2021",items:[{html:`<font face="Arial"><font face="Arial">M. Chang, F. Womer, X.\r
            Gong, X. Chen, L. Tang, R. Feng, S. Dong, J. Duan, Y. Chen,\r
            R. Zhang, Y. Wang, S. Ren, Y. Wang, J. Kang, Z. Yin, Y. Wei,\r
            S. Wei, X. Jian, K. Xu, B. Cao, Y. Zhang, <strong>W. Zhang</strong>, Y. Tang,\r
            X. Zhang, F. Wang, <a href="https://www.nature.com/articles/s41380-020-00892-3">Identifying and validating subtypes\r
              within major psychiatric disorders based on\r
              frontal-posterior functional imbalance via deep learning</a>,\r
            <u><i>Molecular Psychiatry</i></u>, available online.</font>.\r
        </font> `,text:`M. Chang, F. Womer, X.\r
            Gong, X. Chen, L. Tang, R. Feng, S. Dong, J. Duan, Y. Chen,\r
            R. Zhang, Y. Wang, S. Ren, Y. Wang, J. Kang, Z. Yin, Y. Wei,\r
            S. Wei, X. Jian, K. Xu, B. Cao, Y. Zhang, W. Zhang, Y. Tang,\r
            X. Zhang, F. Wang, Identifying and validating subtypes\r
              within major psychiatric disorders based on\r
              frontal-posterior functional imbalance via deep learning,\r
            Molecular Psychiatry, available online..`},{html:`\r
        <p><font face="Arial"><font face="Arial"><font face="Arial">X.\r
                Liu, J. Frost, A. Bowcock, <strong>W. Zhang</strong>*, <a href="https://pubmed.ncbi.nlm.nih.gov/34068434/">Canonical and\r
                  interior circular RNAs function as competing\r
                  endogenous RNAs in psoriatic skin</a>, <u><i>Intern</i></u><u><i>.\r
                    J. Molecular Sciences</i></u>, 22(10):5182, 2021.</font></font>.\r
            <br>\r
          </font></p>\r
      `,text:`X.\r
                Liu, J. Frost, A. Bowcock, W. Zhang*, Canonical and\r
                  interior circular RNAs function as competing\r
                  endogenous RNAs in psoriatic skin, Intern.\r
                    J. Molecular Sciences, 22(10):5182, 2021..`},{html:`<font face="Arial">L. Chen, J. Zhou, T. Li, Z. Fang, L. Li, G.\r
          Huang, L. Gao, X. Zhu, X. Zhou, H. Xiao, J. Zhang, Q. Xiong,\r
          J. Zhang, A. Ma, W. Zhai, <strong>W. Zhang</strong>*, and H. Peng*, <a href="https://www.sciencedirect.com/science/article/abs/pii/S0963996921005615">GmoDetector:\r
\r
            An accurate and efficient GMO identification approach and\r
            its application</a>, <u><i>Food Research International</i></u>,\r
          149:110662, 2021.</font>`,text:`L. Chen, J. Zhou, T. Li, Z. Fang, L. Li, G.\r
          Huang, L. Gao, X. Zhu, X. Zhou, H. Xiao, J. Zhang, Q. Xiong,\r
          J. Zhang, A. Ma, W. Zhai, W. Zhang*, and H. Peng*, GmoDetector:\r
\r
            An accurate and efficient GMO identification approach and\r
            its application, Food Research International,\r
          149:110662, 2021.`},{html:`<font face="Arial"><font face="Arial">D. Jin, Z. Yu, P. Jiao,\r
            S. Pan, D. He, J. Wu, P. Yu, and <strong>W. Zhang</strong>, <a href="https://www.computer.org/csdl/journal/tk/5555/01/09511798/1vYRDDazcJ2">A survey of\r
              community detection approaches: From statistical modeling\r
              to deep learning</a>, <u><i>IEEE Trans. on Knowledge and\r
                Data Engineering</i></u>, available online.</font>.</font>`,text:`D. Jin, Z. Yu, P. Jiao,\r
            S. Pan, D. He, J. Wu, P. Yu, and W. Zhang, A survey of\r
              community detection approaches: From statistical modeling\r
              to deep learning, IEEE Trans. on Knowledge and\r
                Data Engineering, available online..`},{html:`<font face="Arial">Z. Zhang, T. Zhao, H. Gay, <strong>W. Zhang</strong>*, B.\r
          Sun*, <b>Weaving attention U-net: A novel hybrid CNN and attention-based method for organs-at-risk segmentation in head and neck CT images</b>, <u><i>Medical Physics</i></u>, in press. </font>`,text:`Z. Zhang, T. Zhao, H. Gay, W. Zhang*, B.\r
          Sun*, Weaving attention U-net: A novel hybrid CNN and attention-based method for organs-at-risk segmentation in head and neck CT images, Medical Physics, in press.`},{html:`<font face="Arial">Z. Zhang, T. Zhao, H. Gay, <strong>W. Zhang</strong>*, B.\r
          Sun*, <a href="https://pubmed.ncbi.nlm.nih.gov/33151620/">ARPM-net: A novel CNN-based adversarial method with\r
            Markov Random Field enhancement for prostate and organs at\r
            risk segmentation in pelvic CT images</a>, <u><i>Medical\r
            Physics</i></u>, 48(1):227-37, 2021.</font>`,text:`Z. Zhang, T. Zhao, H. Gay, W. Zhang*, B.\r
          Sun*, ARPM-net: A novel CNN-based adversarial method with\r
            Markov Random Field enhancement for prostate and organs at\r
            risk segmentation in pelvic CT images, Medical\r
            Physics, 48(1):227-37, 2021.`},{html:'<font face="Arial">Z. Zhang, T. Zhao, H. Gay, <strong>W. Zhang</strong>*, B. Sun*, <b>Semi-supervised semantic segmentation of prostate and organs-at-risk on 3D pelvic CT images</b>, <u><i>Biomedical Physics & Engineering Express</i></u>, in press.</font>',text:"Z. Zhang, T. Zhao, H. Gay, W. Zhang*, B. Sun*, Semi-supervised semantic segmentation of prostate and organs-at-risk on 3D pelvic CT images, Biomedical Physics & Engineering Express, in press."},{html:`\r
          <p>X. Liu, Z. Hu, J. Zhou, C. Tian, G. Tian, M. He, L. Gao, L.\r
            Chen, T. Li, H. Peng, and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/31532701">Interior circular\r
              RNA</a>, <u><i>RNA Biology</i></u>, 17(1):87-97, 2020.\r
            <font color="#cc0000"><a\r
href="https://engineering.wustl.edu/news/Pages/Big-data-analysis-leads-to-discovery-of-new-class-of-RNA.aspx">News\r
\r
\r
\r
                about our discovery</a></font></p>\r
        `,text:`X. Liu, Z. Hu, J. Zhou, C. Tian, G. Tian, M. He, L. Gao, L.\r
            Chen, T. Li, H. Peng, and W. Zhang*, Interior circular\r
              RNA, RNA Biology, 17(1):87-97, 2020.\r
            News\r
\r
\r
\r
                about our discovery`},{html:`<font face="Arial"><font face="Arial"><font face="Arial">P.\r
                Xuan, T. Shen, X. Wang, T. Zhang and <strong>W. Zhang</strong>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/30281474">Inferring\r
\r
\r
                  disease-associated microRNAs in heterogeneous networks\r
                  with node attributes</a>, <u><i>IEEE/</i></u><u><i>ACM\r
\r
\r
                    Trans. Computational Biology a</i></u><u><i>nd\r
                    Bioinformati</i></u><u><i>cs</i></u>, 17(3):1019-31,\r
                2020.</font></font></font>`,text:`P.\r
                Xuan, T. Shen, X. Wang, T. Zhang and W. Zhang, Inferring\r
\r
\r
                  disease-associated microRNAs in heterogeneous networks\r
                  with node attributes, IEEE/ACM\r
\r
\r
                    Trans. Computational Biology and\r
                    Bioinformatics, 17(3):1019-31,\r
                2020.`},{html:`\r
          <p><font face="Arial">S. Climer*, A.R. Templeton, M. Garvin,\r
              D. Jacobson, M. Lane, S. Hulver, B. Scheid, and <strong>W. Zhang</strong>*,\r
              <a href="https://www.biorxiv.org/content/10.1101/2020.01.28.923730v1.">Syncronized genetic activities in Alzheimer's brains\r
                revealed by heterogeneity-capturing network analysis</a>,\r
              bioRxiv.</font><br>\r
            </p>\r
        `,text:`S. Climer*, A.R. Templeton, M. Garvin,\r
              D. Jacobson, M. Lane, S. Hulver, B. Scheid, and W. Zhang*,\r
              Syncronized genetic activities in Alzheimer's brains\r
                revealed by heterogeneity-capturing network analysis,\r
              bioRxiv.`},{html:`S. Zhang, Z. Xia, <strong>W. Zhang</strong>, C. Li, X. Wang, X. Lu, X. Zhao,\r
          H. Ma, <strong>W. Zhang</strong>, X. Zhou, T. Zhu, P. Liu, G. Liu, H. Yang, J.\r
          Arango, M. Peters, W. Wang*, and T. Xia*, <a href="https://www.biorxiv.org/content/10.1101/2020.02.28.970749v1">Chromosome-scale\r
            genome assembly provides insights into speciation of\r
            allotetraploid and massive biomass accumulation of elephant\r
            grass (<i>Pennisetum purpureum Schum.</i>)</a>, bioRxiv.<br>\r
        `,text:`S. Zhang, Z. Xia, W. Zhang, C. Li, X. Wang, X. Lu, X. Zhao,\r
          H. Ma, W. Zhang, X. Zhou, T. Zhu, P. Liu, G. Liu, H. Yang, J.\r
          Arango, M. Peters, W. Wang*, and T. Xia*, Chromosome-scale\r
            genome assembly provides insights into speciation of\r
            allotetraploid and massive biomass accumulation of elephant\r
            grass (Pennisetum purpureum Schum.), bioRxiv.`},{html:`<font face="Arial">M. Li, D. Jin, D. He, and <strong>W. Zhang</strong>, <b>Modeling\r
                    with node popularities for autonomous overlapping\r
                    community detection</b>, <u><i>ACM Transactions on\r
                      Information Systems</i></u>, 11(3):27, 2020</font></font></font></font>.`,text:`M. Li, D. Jin, D. He, and W. Zhang, Modeling\r
                    with node popularities for autonomous overlapping\r
                    community detection, ACM Transactions on\r
                      Information Systems, 11(3):27, 2020.`},{html:`<font face="Arial">X. Zhang, J. Gao, Y. Lv and <strong>W. Zhang</strong>, <b>Early and\r
              efficient identification of useless constraint propagation\r
              for alldifferent constraints</b>, <i>Proc 29-th Intern.\r
              Joint Conf. on AI </i>(IJCAI-20)</font>`,text:`X. Zhang, J. Gao, Y. Lv and W. Zhang, Early and\r
              efficient identification of useless constraint propagation\r
              for alldifferent constraints, Proc 29-th Intern.\r
              Joint Conf. on AI (IJCAI-20)`},{html:`<font face="Arial">D. He, Y. Song, D. Jin, Z. Feng, B.\r
            Zhang, Z. Yu and <strong>W. Zhang</strong>, <b>Community-centric graph\r
              Convolutional Network for unsupervised community detection</b>,\r
            <i>Proc 29-th Intern. Joint Conf. on AI </i>(IJCAI-20)</font>`,text:`D. He, Y. Song, D. Jin, Z. Feng, B.\r
            Zhang, Z. Yu and W. Zhang, Community-centric graph\r
              Convolutional Network for unsupervised community detection,\r
            Proc 29-th Intern. Joint Conf. on AI (IJCAI-20)`},{html:`L. Li, H. Peng, S. Tan, J. Zhou, Z. Fang, Z. Hu, L. Gao, T.\r
          Li, <strong>W. Zhang</strong>*, and L. Chen*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/31251979">Effects of early cold stress\r
            on gene expression in Chlamydomonas reinhardtii</a>, <i>Genomics</i>,\r
          2019, doi: 10.1016/j.ygeno.2019.06.027.<i><br>\r
          </i>`,text:`L. Li, H. Peng, S. Tan, J. Zhou, Z. Fang, Z. Hu, L. Gao, T.\r
          Li, W. Zhang*, and L. Chen*, Effects of early cold stress\r
            on gene expression in Chlamydomonas reinhardtii, Genomics,\r
          2019, doi: 10.1016/j.ygeno.2019.06.027.`},{html:`\r
          <p>D. Lam, X. Zhang, H. Li, Y. Deshan, B. Schott, T. Zhao, W.\r
            Zhang, S. Mutic, and B. Sun*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/31386761">Predicting gamma passing\r
              rates for portal dosimetry-based IMRT QA using machine\r
              learning</a>, <i>Medical Physics</i>, doi:\r
            10.1002/mp.13752, 2019.</p>\r
        `,text:`D. Lam, X. Zhang, H. Li, Y. Deshan, B. Schott, T. Zhao, W.\r
            Zhang, S. Mutic, and B. Sun*, Predicting gamma passing\r
              rates for portal dosimetry-based IMRT QA using machine\r
              learning, Medical Physics, doi:\r
            10.1002/mp.13752, 2019.`},{html:`X. Wang, D. Jin, D. He, and <strong>W. Zhang</strong>, <b>Robust detection\r
            of link communities with summary description in\r
            social networks</b>, <i>IEEE Trans</i><i>actions on\r
            Knowledge Discovery and Engineering</i>, accepted.<br>\r
        `,text:`X. Wang, D. Jin, D. He, and W. Zhang, Robust detection\r
            of link communities with summary description in\r
            social networks, IEEE Transactions on\r
            Knowledge Discovery and Engineering, accepted.`},{html:`L. Yang, Y. Wang, J. Gu, X. Cao, X. Wang, D. Jin, G. Ding,\r
          J. Han, and <strong>W. Zhang</strong>, <a href="https://dl.acm.org/citation.cfm?id=3355393">Autonomous semantic community\r
            detection via adaptively weighted low-rank approximation</a>,\r
          <i>ACM Transactions on Multimedia Computing</i>, <i>Communications,\r
\r
\r
\r
            and Applications</i> (TOMM), 15(3s), 2019.`,text:`L. Yang, Y. Wang, J. Gu, X. Cao, X. Wang, D. Jin, G. Ding,\r
          J. Han, and W. Zhang, Autonomous semantic community\r
            detection via adaptively weighted low-rank approximation,\r
          ACM Transactions on Multimedia Computing, Communications,\r
\r
\r
\r
            and Applications (TOMM), 15(3s), 2019.`},{html:`\r
          <p>D. Jin, Z. Liu, W. Li, D. He, and <strong>W. Zhang</strong>, <a href="https://www.aaai.org/ojs/index.php/AAAI/article/view/3780/3658">Graph\r
              Convolutional Networks meet Markov Random Fields:\r
              Semi-supervised community detection in attribute networks</a>,\r
            <i>Pr</i><i>oc 33-rd</i><i> AAAI Conf</i><i> on A</i><i>I</i>\r
            (AAAI-19).<br>\r
          </p>\r
        `,text:`D. Jin, Z. Liu, W. Li, D. He, and W. Zhang, Graph\r
              Convolutional Networks meet Markov Random Fields:\r
              Semi-supervised community detection in attribute networks,\r
            Proc 33-rd AAAI Conf on AI\r
            (AAAI-19).`},{html:`D. Jin, B. Li, P. Jiao, D. He, and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2019/0370.pdf">Network-specific\r
\r
\r
\r
            variational auto-encoder for embedding of attributed\r
            networks</a>, <i>Proc 28-th IJCAI</i> (IJCAI-19).<br>\r
        `,text:`D. Jin, B. Li, P. Jiao, D. He, and W. Zhang, Network-specific\r
\r
\r
\r
            variational auto-encoder for embedding of attributed\r
            networks, Proc 28-th IJCAI (IJCAI-19).`},{html:`\r
          <p><font face="Arial">L. Li, G. Tian, H. Peng, D. Meng, L.\r
              Wang, X. Hu, C. Tian, M. He, J. Zhou, L. Chen, C. Fu, W.\r
              Zhang* and Z. Hu*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/29632184">New class of transcription factors\r
                controls flagellar assembly by recruiting RNA polymerase\r
                II in <i>Chlamydomonas</i></a>, <i><u>Proceedings\r
\r
\r
                  of National Academy of Sciences of the USA</u> </i>(PNAS),\r
\r
\r
\r
              115(17):4435-40, 2018</font><font face="Arial">.</font></p>\r
        `,text:`L. Li, G. Tian, H. Peng, D. Meng, L.\r
              Wang, X. Hu, C. Tian, M. He, J. Zhou, L. Chen, C. Fu, W.\r
              Zhang* and Z. Hu*, New class of transcription factors\r
                controls flagellar assembly by recruiting RNA polymerase\r
                II in Chlamydomonas, Proceedings\r
\r
\r
                  of National Academy of Sciences of the USA (PNAS),\r
\r
\r
\r
              115(17):4435-40, 2018.`},{html:`\r
          <p><font face="Arial"><font face="Arial">L. Gao, Z. Fang, J.\r
                Zhou, L. Li, L. Lu, L. Li, L. Chen, <strong>W. Zhang</strong>, W. Zhai,\r
                and H. Peng*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/30120263">Transcriptional insights into the\r
                  pyramided resistance to rice bacterial blight</a>, </font><font\r
                face="Arial"><font face="Arial"><u><i><font face="Arial"><i>Scientific\r
\r
\r
\r
                          Reports</i></font></i></u><font face="Arial">,\r
                    8(1):12358, 2018, doi:10.1038/s41598-018-29899-1. </font></font></font></font></p>\r
        `,text:`L. Gao, Z. Fang, J.\r
                Zhou, L. Li, L. Lu, L. Li, L. Chen, W. Zhang, W. Zhai,\r
                and H. Peng*, Transcriptional insights into the\r
                  pyramided resistance to rice bacterial blight, Scientific\r
\r
\r
\r
                          Reports,\r
                    8(1):12358, 2018, doi:10.1038/s41598-018-29899-1.`},{html:`\r
          <p><font face="Arial">Y. Zhong, P. Xuan*, X. Wang, T. Zhang,\r
              J. Li, Y. Liu and <strong>W. Zhang</strong>, <a href="https://www.ncbi.nlm.nih.gov/pubmed/28968753">A non-negative matrix\r
                factorization based method for predicting\r
                disease-associated miRNAs in miRNA-disease bilayer\r
                network</a>, <u><i>Bioinformatics</i></u>,\r
              34(2):267-77, 2018. </font><font\r
              face="Arial">.</font></p>\r
        `,text:`Y. Zhong, P. Xuan*, X. Wang, T. Zhang,\r
              J. Li, Y. Liu and W. Zhang, A non-negative matrix\r
                factorization based method for predicting\r
                disease-associated miRNAs in miRNA-disease bilayer\r
                network, Bioinformatics,\r
              34(2):267-77, 2018. .`},{html:`<font face="Arial">X. Zhang and <strong>W. Zhang</strong>, <b>A fast\r
              algorithm for generalized arc consistency of the\r
              alldifferent constraint</b>, <i>Proc 27-th Intern. Joint\r
              Conf. on AI </i>(IJCAI-18).</font>`,text:`X. Zhang and W. Zhang, A fast\r
              algorithm for generalized arc consistency of the\r
              alldifferent constraint, Proc 27-th Intern. Joint\r
              Conf. on AI (IJCAI-18).`},{html:'<font face="Arial">G. Meng, D. Jin and <strong>W. Zhang</strong>, <b>Integrative network embedding via deep joint reconstruction</b>, <i>Proc 27-th Intern. Joint Conf. on AI </i>(IJCAI-18).</font>',text:"G. Meng, D. Jin and W. Zhang, Integrative network embedding via deep joint reconstruction, Proc 27-th Intern. Joint Conf. on AI (IJCAI-18)."},{html:`<font face="Arial">D. He, X. You, Z. Feng, D. Jin, X. Yang\r
              and <strong>W. Zhang</strong>, <b>A network-specific Markov Random Field approach to community detection</b>, <i>Proc 32-nd AAAI\r
                Conf on A I</i> (AAAI-18).</font>`,text:`D. He, X. You, Z. Feng, D. Jin, X. Yang\r
              and W. Zhang, A network-specific Markov Random Field approach to community detection, Proc 32-nd AAAI\r
                Conf on A I (AAAI-18).`},{html:`<font face="Arial"><font face="Arial"><font face="Arial">D.\r
                Jin, X. Wang, R. He, D. He and <strong>W. Zhang</strong>, </font><b><font\r
                  face="Arial">Robust detection of link communities in\r
                  large social networks by exploiting link semantics</font></b><font\r
                face="Arial">, </font><font face="Arial"><i>Pr</i><i>oc\r
                  32-nd</i><i> AAAI Conf</i><i> on A</i><i>I</i>\r
                (AAAI-18)</font></font>.</font>`,text:`D.\r
                Jin, X. Wang, R. He, D. He and W. Zhang, Robust detection of link communities in\r
                  large social networks by exploiting link semantics, Proc\r
                  32-nd AAAI Conf on AI\r
                (AAAI-18).`},{html:`<font face="Arial">L. Li, Z. Fang, J. Zhou, H. Chen, Z. Hu,\r
            L. Gao, L. Chen, S. Ren, H. Ma, L. Lu, <strong>W. Zhang</strong>* and H.\r
            Peng*, <a href="https://academic.oup.com/nar/article/45/10/e88/2981921/An-accurate-and-efficient-method-for-large-scale">An accurate and efficient method for large-scale\r
              SSR genotyping and applications</a>, <i>Nucleic Acids\r
              Research</i>, 45(10):e88, 2017, doi:10.1093/nar/gkx093. </font>\r
          </font>`,text:`L. Li, Z. Fang, J. Zhou, H. Chen, Z. Hu,\r
            L. Gao, L. Chen, S. Ren, H. Ma, L. Lu, W. Zhang* and H.\r
            Peng*, An accurate and efficient method for large-scale\r
              SSR genotyping and applications, Nucleic Acids\r
              Research, 45(10):e88, 2017, doi:10.1093/nar/gkx093.`},{html:`\r
          <p><font face="Arial">J. Xia, L. Li, T. Li, Z. Fang, K. Zhang,\r
              J. Zhou, H. Peng, and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/29036674">Detecting and\r
                characterizing microRNAs of diverse genomic origins via\r
                miRvial</a>, </font><font face="Arial"><font\r
                face="Arial"><i>Nucleic Acids Research</i></font>,\r
              45(21):e176, 2017. </font><br>\r
            </font></p>\r
        `,text:`J. Xia, L. Li, T. Li, Z. Fang, K. Zhang,\r
              J. Zhou, H. Peng, and W. Zhang*, Detecting and\r
                characterizing microRNAs of diverse genomic origins via\r
                miRvial, Nucleic Acids Research,\r
              45(21):e176, 2017.`},{html:`<font face="Arial">C. Zeng, J. Xia, X. Chen, Y. Zhou, M.\r
              Peng* and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/29214993">MicroRNA-like RNAs from the\r
                same miRNA precursors play a role in cassava\r
              chilling responses</a>, <i>Scientific Reports</i>,\r
              7(1):17135, 2017. </font><br>\r
          </font>`,text:`C. Zeng, J. Xia, X. Chen, Y. Zhou, M.\r
              Peng* and W. Zhang*, MicroRNA-like RNAs from the\r
                same miRNA precursors play a role in cassava\r
              chilling responses, Scientific Reports,\r
              7(1):17135, 2017.`},{html:`\r
          <p><font face="Arial">TP Michael, D. Bryant, R. Gutierrez, N.\r
              Borisjuk, P. Chu, H. Zhang, J. Xia, J. Zhou, H. Peng, M.E.\r
              Baidouri, B. ten Hallers, AR. Hastie, T. Liang, K. Acosta,\r
              S. Gilbert, C. McEntee, SA. Jackson, TC. Mockler, <strong>W. Zhang</strong>\r
              and E. Lam*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/27754575">Comprehensive definition of genome\r
                features in Spirodela polyrhiza by high-depth physical\r
                mapping and short-read DNA sequencing strategies</a>, <i>The\r
\r
\r
                Plant J</i><i>ournal</i>, 89(3):617-35, 2017</font><font\r
              face="Arial">. </font>\r
          </p>\r
        `,text:`TP Michael, D. Bryant, R. Gutierrez, N.\r
              Borisjuk, P. Chu, H. Zhang, J. Xia, J. Zhou, H. Peng, M.E.\r
              Baidouri, B. ten Hallers, AR. Hastie, T. Liang, K. Acosta,\r
              S. Gilbert, C. McEntee, SA. Jackson, TC. Mockler, W. Zhang\r
              and E. Lam*, Comprehensive definition of genome\r
                features in Spirodela polyrhiza by high-depth physical\r
                mapping and short-read DNA sequencing strategies, The\r
\r
\r
                Plant Journal, 89(3):617-35, 2017.`},{html:`\r
          <p><font face="Arial"><font face="Arial"><font face="Arial"><font\r
                    face="Arial">D. He, D. Jin and <strong>W. Zhang</strong>, </font><a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14251"><font\r
                      face="Arial">Joint identification of network\r
                      communities and semantics via integrative modeling\r
                      of network topologies and node contents</font></a><font\r
                    face="Arial">, </font><font face="Arial"><i>Pr</i><i>oc\r
\r
\r
\r
                      31-st</i><i> AAAI Conf</i><i> on A</i><i>I</i>\r
                    (AAAI-17)</font></font></font>.</font></p>\r
        `,text:`D. He, D. Jin and W. Zhang, Joint identification of network\r
                      communities and semantics via integrative modeling\r
                      of network topologies and node contents, Proc\r
\r
\r
\r
                      31-st AAAI Conf on AI\r
                    (AAAI-17).`},{html:`\r
          <p><font face="Arial"><font face="Arial">J. Fu, <strong>W. Zhang</strong> and\r
                J. Wu, </font><a href="https://www.nature.com/articles/s41598-017-00718-3"><font face="Arial">Identification of\r
                  leader and self-organizing communities in complex\r
                  networks</font></a><font face="Arial">, </font><font\r
                face="Arial"><i>Scientific Reports</i>, 7(1):704, 2017.\r
                </\r
              </font></font></p>\r
        `,text:`J. Fu, W. Zhang and\r
                J. Wu, Identification of\r
                  leader and self-organizing communities in complex\r
                  networks, Scientific Reports, 7(1):704, 2017.`},{html:`<font face="Arial"><font face="Arial"><font face="Arial"><font\r
                  face="Arial">X. Zhang, J. Han and <strong>W. Zhang</strong>, <a href="https://www.nature.com/articles/s41598-017-10744-w">An\r
                    efficient algorithm for finding all possible input\r
                    nodes for controlling complex networks</a></font><font\r
                  face="Arial">, </font><font face="Arial"><i>Scientific\r
\r
\r
\r
                    Reports</i>, 7(1):10677, 2017</font></font></font>.\r
            </font><br>\r
          </font>`,text:`X. Zhang, J. Han and W. Zhang, An\r
                    efficient algorithm for finding all possible input\r
                    nodes for controlling complex networks, Scientific\r
\r
\r
\r
                    Reports, 7(1):10677, 2017.`},{html:`<font face="Arial">D. Tiosano, L. Audi, S. Climer, <strong>W. Zhang</strong>,\r
            A.R. Templeton*, M. Fernandez-Cancio, R. Gershoni-Baruch,\r
            J.M. Sanchez-Muro, M.E. Kholy, Z. Hochberg, <a href="https://www.g3journal.org/content/6/5/1251.long">Latitudinal\r
              Clines of the human Vitamin D receptor and\r
              skin color-genes</a>, <i>Genes, Genomes,\r
              Genetics</i>, 6(5):1251-66, 2016. doi:\r
            10.1534/g3.115.026773.</font>`,text:`D. Tiosano, L. Audi, S. Climer, W. Zhang,\r
            A.R. Templeton*, M. Fernandez-Cancio, R. Gershoni-Baruch,\r
            J.M. Sanchez-Muro, M.E. Kholy, Z. Hochberg, Latitudinal\r
              Clines of the human Vitamin D receptor and\r
              skin color-genes, Genes, Genomes,\r
              Genetics, 6(5):1251-66, 2016. doi:\r
            10.1534/g3.115.026773.`},{html:`\r
          <p><font face="Arial">J. Xia, X. Wang, P-F. Perroud, Y. He, R.\r
                Quatrano and <strong>W. Zhang</strong>*, <a href="https://www.nature.com/articles/srep30118">Endogenous small-noncoding\r
                RNAs and potential functions in desiccation tolerance in\r
                Physcomitrella patens</a>, <i>Scientific Reports</i>,\r
              6:30118, 2016. </font><br>\r
            <meta name="Title" content="">\r
          </p>\r
          <p>\r
            <meta name="Keywords" content="">\r
            <meta http-equiv="Content-Type" content="text/html;\r
              charset=windows-1252">\r
            <meta name="ProgId" content="Word.Document">\r
            <meta name="Generator" content="Microsoft Word 14">\r
            <meta name="Originator" content="Microsoft Word 14">\r
            <link rel="File-List"\r
href="file://localhost/Users/weixiongzhang/Library/Caches/TemporaryItems/msoclip/0clip_filelist.xml">\r
            <!--[if gte mso 9]><xml>\r
 <o:OfficeDocumentSettings>\r
  <o:AllowPNG/>\r
 </o:OfficeDocumentSettings>\r
</xml><![endif]-->\r
            <link rel="themeData"\r
href="file://localhost/Users/weixiongzhang/Library/Caches/TemporaryItems/msoclip/0clip_themedata.xml">\r
            <!--[if gte mso 9]><xml>\r
 <w:WordDocument>\r
  <w:View>Normal</w:View>\r
  <w:Zoom>0</w:Zoom>\r
  <w:TrackMoves/>\r
  <w:TrackFormatting/>\r
  <w:PunctuationKerning/>\r
  <w:ValidateAgainstSchemas/>\r
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>\r
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>\r
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>\r
  <w:DoNotPromoteQF/>\r
  <w:LidThemeOther>EN-US</w:LidThemeOther>\r
  <w:LidThemeAsian>JA</w:LidThemeAsian>\r
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>\r
  <w:Compatibility>\r
   <w:BreakWrappedTables/>\r
   <w:SnapToGridInCell/>\r
   <w:WrapTextWithPunct/>\r
   <w:UseAsianBreakRules/>\r
   <w:DontGrowAutofit/>\r
   <w:SplitPgBreakAndParaMark/>\r
   <w:EnableOpenTypeKerning/>\r
   <w:DontFlipMirrorIndents/>\r
   <w:OverrideTableStyleHps/>\r
   <w:UseFELayout/>\r
  </w:Compatibility>\r
  <m:mathPr>\r
   <m:mathFont m:val="Cambria Math"/>\r
   <m:brkBin m:val="before"/>\r
   <m:brkBinSub m:val="&#45;-"/>\r
   <m:smallFrac m:val="off"/>\r
   <m:dispDef/>\r
   <m:lMargin m:val="0"/>\r
   <m:rMargin m:val="0"/>\r
   <m:defJc m:val="centerGroup"/>\r
   <m:wrapIndent m:val="1440"/>\r
   <m:intLim m:val="subSup"/>\r
   <m:naryLim m:val="undOvr"/>\r
  </m:mathPr></w:WordDocument>\r
</xml><![endif]--><!--[if gte mso 9]><xml>\r
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="true"\r
  DefSemiHidden="true" DefQFormat="false" DefPriority="99"\r
  LatentStyleCount="276">\r
  <w:LsdException Locked="false" Priority="0" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Normal"/>\r
  <w:LsdException Locked="false" Priority="9" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="heading 1"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 2"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 3"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 4"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 5"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 6"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 7"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 8"/>\r
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 9"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 1"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 2"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 3"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 4"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 5"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 6"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 7"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 8"/>\r
  <w:LsdException Locked="false" Priority="39" Name="toc 9"/>\r
  <w:LsdException Locked="false" Priority="35" QFormat="true" Name="caption"/>\r
  <w:LsdException Locked="false" Priority="10" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Title"/>\r
  <w:LsdException Locked="false" Priority="1" Name="Default Paragraph Font"/>\r
  <w:LsdException Locked="false" Priority="11" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Subtitle"/>\r
  <w:LsdException Locked="false" Priority="22" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Strong"/>\r
  <w:LsdException Locked="false" Priority="20" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Emphasis"/>\r
  <w:LsdException Locked="false" Priority="59" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Table Grid"/>\r
  <w:LsdException Locked="false" UnhideWhenUsed="false" Name="Placeholder Text"/>\r
  <w:LsdException Locked="false" Priority="1" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="No Spacing"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading Accent 1"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List Accent 1"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid Accent 1"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 1"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 1"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1 Accent 1"/>\r
  <w:LsdException Locked="false" UnhideWhenUsed="false" Name="Revision"/>\r
  <w:LsdException Locked="false" Priority="34" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="List Paragraph"/>\r
  <w:LsdException Locked="false" Priority="29" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Quote"/>\r
  <w:LsdException Locked="false" Priority="30" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Intense Quote"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2 Accent 1"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 1"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 1"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 1"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List Accent 1"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading Accent 1"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List Accent 1"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid Accent 1"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading Accent 2"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List Accent 2"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid Accent 2"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 2"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List Accent 2"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading Accent 2"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List Accent 2"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid Accent 2"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading Accent 3"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List Accent 3"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid Accent 3"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 3"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List Accent 3"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading Accent 3"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List Accent 3"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid Accent 3"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading Accent 4"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List Accent 4"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid Accent 4"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 4"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List Accent 4"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading Accent 4"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List Accent 4"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid Accent 4"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading Accent 5"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List Accent 5"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid Accent 5"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 5"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List Accent 5"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading Accent 5"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List Accent 5"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid Accent 5"/>\r
  <w:LsdException Locked="false" Priority="60" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Shading Accent 6"/>\r
  <w:LsdException Locked="false" Priority="61" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light List Accent 6"/>\r
  <w:LsdException Locked="false" Priority="62" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Light Grid Accent 6"/>\r
  <w:LsdException Locked="false" Priority="63" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 1 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="64" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Shading 2 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="65" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 1 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="66" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium List 2 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="67" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 1 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="68" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 2 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="69" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Medium Grid 3 Accent 6"/>\r
  <w:LsdException Locked="false" Priority="70" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Dark List Accent 6"/>\r
  <w:LsdException Locked="false" Priority="71" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Shading Accent 6"/>\r
  <w:LsdException Locked="false" Priority="72" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful List Accent 6"/>\r
  <w:LsdException Locked="false" Priority="73" SemiHidden="false"\r
   UnhideWhenUsed="false" Name="Colorful Grid Accent 6"/>\r
  <w:LsdException Locked="false" Priority="19" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Subtle Emphasis"/>\r
  <w:LsdException Locked="false" Priority="21" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Intense Emphasis"/>\r
  <w:LsdException Locked="false" Priority="31" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Subtle Reference"/>\r
  <w:LsdException Locked="false" Priority="32" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Intense Reference"/>\r
  <w:LsdException Locked="false" Priority="33" SemiHidden="false"\r
   UnhideWhenUsed="false" QFormat="true" Name="Book Title"/>\r
  <w:LsdException Locked="false" Priority="37" Name="Bibliography"/>\r
  <w:LsdException Locked="false" Priority="39" QFormat="true" Name="TOC Heading"/>\r
 </w:LatentStyles>\r
</xml><![endif]-->\r
            <style>\r
<!--\r
 /* Font Definitions */\r
@font-face\r
	{font-family:Arial;\r
	panose-1:2 11 6 4 2 2 2 2 2 4;\r
	mso-font-charset:0;\r
	mso-generic-font-family:auto;\r
	mso-font-pitch:variable;\r
	mso-font-signature:-536859905 -1073711037 9 0 511 0;}\r
@font-face\r
	{font-family:Times;\r
	panose-1:2 0 5 0 0 0 0 0 0 0;\r
	mso-font-charset:0;\r
	mso-generic-font-family:auto;\r
	mso-font-pitch:variable;\r
	mso-font-signature:3 0 0 0 1 0;}\r
@font-face\r
	{font-family:Times;\r
	panose-1:2 0 5 0 0 0 0 0 0 0;\r
	mso-font-charset:0;\r
	mso-generic-font-family:auto;\r
	mso-font-pitch:variable;\r
	mso-font-signature:3 0 0 0 1 0;}\r
@font-face\r
	{font-family:Cambria;\r
	panose-1:2 4 5 3 5 4 6 3 2 4;\r
	mso-font-charset:0;\r
	mso-generic-font-family:auto;\r
	mso-font-pitch:variable;\r
	mso-font-signature:-536870145 1073743103 0 0 415 0;}\r
@font-face\r
	{font-family:"MS Mincho";\r
	mso-font-alt:"&#65325;&#65331; &#26126;&#26397;";\r
	mso-font-charset:128;\r
	mso-generic-font-family:modern;\r
	mso-font-pitch:fixed;\r
	mso-font-signature:-536870145 1791491579 18 0 131231 0;}\r
 /* Style Definitions */\r
p.MsoNormal, li.MsoNormal, div.MsoNormal\r
	{mso-style-unhide:no;\r
	mso-style-qformat:yes;\r
	mso-style-parent:"";\r
	margin-top:0in;\r
	margin-right:0in;\r
	margin-bottom:10.0pt;\r
	margin-left:0in;\r
	mso-pagination:widow-orphan;\r
	font-size:12.0pt;\r
	mso-bidi-font-size:10.0pt;\r
	font-family:Times;\r
	mso-fareast-font-family:"MS Mincho";\r
	mso-bidi-font-family:Arial;\r
	color:black;\r
	mso-font-kerning:14.0pt;\r
	mso-fareast-language:JA;}\r
.MsoChpDefault\r
	{mso-style-type:export-only;\r
	mso-default-props:yes;\r
	font-size:10.0pt;\r
	mso-ansi-font-size:10.0pt;\r
	mso-bidi-font-size:10.0pt;\r
	font-family:Cambria;\r
	mso-ascii-font-family:Cambria;\r
	mso-fareast-font-family:"MS Mincho";\r
	mso-hansi-font-family:Cambria;\r
	mso-bidi-font-family:Arial;}\r
@page WordSection1\r
	{size:8.5in 11.0in;\r
	margin:1.0in 1.25in 1.0in 1.25in;\r
	mso-header-margin:.5in;\r
	mso-footer-margin:.5in;\r
	mso-paper-source:0;}\r
div.WordSection1\r
	{page:WordSection1;}\r
-->\r
</style><!--[if gte mso 10]>\r
<style>\r
 /* Style Definitions */\r
table.MsoNormalTable\r
	{mso-style-name:"Table Normal";\r
	mso-tstyle-rowband-size:0;\r
	mso-tstyle-colband-size:0;\r
	mso-style-noshow:yes;\r
	mso-style-priority:99;\r
	mso-style-parent:"";\r
	mso-padding-alt:0in 5.4pt 0in 5.4pt;\r
	mso-para-margin:0in;\r
	mso-para-margin-bottom:.0001pt;\r
	mso-pagination:widow-orphan;\r
	font-size:10.0pt;\r
</style>\r
<![endif]-->\r
            <!--StartFragment--><span\r
              style="font-size:12.0pt;mso-bidi-font-size:10.0pt;\r
              font-family:&quot;Times New\r
              Roman&quot;;mso-fareast-font-family:&quot;MS\r
              Mincho&quot;;color:#0D0D0D;\r
              mso-font-kerning:14.0pt;mso-ansi-language:EN-US;mso-fareast-language:JA;\r
              mso-bidi-language:HE"></span><!--EndFragment--> </p>\r
        `,text:`J. Xia, X. Wang, P-F. Perroud, Y. He, R.\r
                Quatrano and W. Zhang*, Endogenous small-noncoding\r
                RNAs and potential functions in desiccation tolerance in\r
                Physcomitrella patens, Scientific Reports,\r
              6:30118, 2016. \r
            \r
          \r
          \r
            \r
            \r
            \r
            \r
            \r
            \r
            \r
 \r
  \r
 \r
\r
            \r
            \r
 \r
  Normal\r
  0\r
  \r
  \r
  \r
  \r
  false\r
  false\r
  false\r
  \r
  EN-US\r
  JA\r
  X-NONE\r
  \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
  \r
  \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
   \r
  \r
\r
 \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
  \r
 \r
\r
            \r
\r
\r
\r
 /* Style Definitions */\r
table.MsoNormalTable\r
	{mso-style-name:"Table Normal";\r
	mso-tstyle-rowband-size:0;\r
	mso-tstyle-colband-size:0;\r
	mso-style-noshow:yes;\r
	mso-style-priority:99;\r
	mso-style-parent:"";\r
	mso-padding-alt:0in 5.4pt 0in 5.4pt;\r
	mso-para-margin:0in;\r
	mso-para-margin-bottom:.0001pt;\r
	mso-pagination:widow-orphan;\r
	font-size:10.0pt;`},{html:`\r
          <p> <font face="Arial"><font face="Arial">Z-Y. Li, J. Xia, Z.\r
                Chen, Y. Yu, Q-F. Li, Y-C. Zhang, J-P. Zhang, C-Y. Wang,\r
                X-Y. Zhu, <strong>W. Zhang</strong>* and Y-Q. Chen*, <a href="https://www.nature.com/articles/srep25493">Large-scale\r
                  rewiring of innate immunity circuitry and microRNA\r
                  regulation during initial rice blast infection</a>, <i>Scientific\r
\r
\r
\r
                  Reports</i>, 6:25493, 2016. </font></font></p>\r
        `,text:`Z-Y. Li, J. Xia, Z.\r
                Chen, Y. Yu, Q-F. Li, Y-C. Zhang, J-P. Zhang, C-Y. Wang,\r
                X-Y. Zhu, W. Zhang* and Y-Q. Chen*, Large-scale\r
                  rewiring of innate immunity circuitry and microRNA\r
                  regulation during initial rice blast infection, Scientific\r
\r
\r
\r
                  Reports, 6:25493, 2016.`},{html:`\r
          <p><font face="Arial">L. <font face="Arial">Chen, J. Han, X.\r
                Deng, S. Tan, L. Li, L. Li, J. Zhou, H. Peng, G. Yang*,\r
                <strong>W. Zhang</strong>*, <a href="https://www.nature.com/articles/srep21623">Expansion and stress responses of\r
                  AP2/EREBP superfamily in Brachypodium distachyon</i></a>,\r
                <i>Scientific Reports</i>, 6:21623, 2016</font>. </font><font\r
              face="Arial"><font color="#000099"><b><span\r
                    style="text-decoration: underline;"></span></b></font></font></p>\r
        `,text:`L. Chen, J. Han, X.\r
                Deng, S. Tan, L. Li, L. Li, J. Zhou, H. Peng, G. Yang*,\r
                W. Zhang*, Expansion and stress responses of\r
                  AP2/EREBP superfamily in Brachypodium distachyon,\r
                Scientific Reports, 6:21623, 2016.`},{html:`\r
          <p><font face="Arial">G. Jager, S. Climer and <strong>W. Zhang</strong></font><font\r
              face="Arial">. </font><font face="Arial">\r
              <meta http-equiv="content-type" content="text/html;\r
                charset=windows-1252">\r
              <a href="https://www.sciencedirect.com/science/article/pii/S1570866716300090">Complete Parsimony Haplotype Inference Problem and\r
                Algorithms Based on Integer Programming,\r
                Branch-and-Bound and Boolean Satisfiability</a>, <i>J</i><i>.\r
                Discrete Algorithms</i>, 37:68-83, 2016. </font><br>\r
            </font></p>\r
        `,text:`G. Jager, S. Climer and W. Zhang. \r
              \r
              Complete Parsimony Haplotype Inference Problem and\r
                Algorithms Based on Integer Programming,\r
                Branch-and-Bound and Boolean Satisfiability, J.\r
                Discrete Algorithms, 37:68-83, 2016.`},{html:`<font face="Arial">L. Yang, X. Cao, D. He, <strong>W. Zhang</strong>, <a\r
            href="https://www.ijcai.org/Proceedings/16/Papers/200.pdf">Modularity\r
              based community detection with deep learning</a>,\r
            <i>Proc 25-th Intern. Joint Conf. on AI</i> (IJCAI-16), to\r
            appear. </font><br>\r
          </font>`,text:`L. Yang, X. Cao, D. He, W. Zhang, Modularity\r
              based community detection with deep learning,\r
            Proc 25-th Intern. Joint Conf. on AI (IJCAI-16), to\r
            appear.`},{html:`\r
          <p><font face="Arial">D. Jin, H. Wang, J. Dang, D. He and W.\r
              Zhang, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/view/12111">Detect overlapping communities via ranking node\r
                popularities</a>, <i>Pr</i><i>oc 30</i><i>-</i><i>th\r
                AAAI Conf</i><i> on A</i><i>I</i> (AAAI-16), to appear.\r
            </font></p>\r
        `,text:`D. Jin, H. Wang, J. Dang, D. He and W.\r
              Zhang, Detect overlapping communities via ranking node\r
                popularities, Proc 30-th\r
                AAAI Conf on AI (AAAI-16), to appear.`},{html:`\r
          <p><font face="Arial">X. Wang, D. Jin, X. Cao, L. Yang and W.\r
            Zhang, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/view/12111">Semantic community identification in large\r
                attribute networks</a>, </font><font face="Arial"><i>Pr</i><i>oc\r
\r
\r
\r
                30</i><i>-</i><i>th AAAI Conf</i><i> on A</i><i>I</i>\r
              (AAAI-16), to appear. </font></p>\r
        `,text:`X. Wang, D. Jin, X. Cao, L. Yang and W.\r
            Zhang, Semantic community identification in large\r
                attribute networks, Proc\r
\r
\r
\r
                30-th AAAI Conf on AI\r
              (AAAI-16), to appear.`},{html:` <font face="Arial">S. Climer*, A. Templeton and <strong>W. Zhang</strong>*,\r
              <a href="https://www.nature.com/articles/ncomms7534">Human <i>gephyrin</i> is encompassed within giant\r
              functional noncoding yin-yang sequences</a>, <i>Nature\r
              Communications</i>, 6:6534, 2015, doi: 10.1038/ncomms7534.\r
            [<a href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]\r
            [<a\r
              href="http://news.wustl.edu/news/Pages/big-data-genetic-clues.aspx">News</a>]<strong\r
              style="font-weight: bold; font-style: italic;\r
              text-decoration: underline;"><em></em></strong></font>`,text:`S. Climer*, A. Templeton and W. Zhang*,\r
              Human gephyrin is encompassed within giant\r
              functional noncoding yin-yang sequences, Nature\r
              Communications, 6:6534, 2015, doi: 10.1038/ncomms7534.\r
            [Software]\r
            [News]`},{html:`<font face="Arial">H. Peng, Z. Chen, Z. Fang, J. Zhou, Z.\r
            Xia, L. Gao, L. Chen, L. Li, T. Li, W. Zhai, and <strong>W. Zhang</strong>*,\r
            <a href="https://www.nature.com/articles/srep12165">Rice Xa21 primed genes and pathways that are\r
              critical for combating bacterial blight infection</a>, <i>Scientific\r
\r
\r
\r
              Reports</i>, 5:12165, 2015 </font>`,text:`H. Peng, Z. Chen, Z. Fang, J. Zhou, Z.\r
            Xia, L. Gao, L. Chen, L. Li, T. Li, W. Zhai, and W. Zhang*,\r
            Rice Xa21 primed genes and pathways that are\r
              critical for combating bacterial blight infection, Scientific\r
\r
\r
\r
              Reports, 5:12165, 2015`},{html:`\r
          <p><font face="Arial">X. Chen, J. Xia, Z. Xia, H. Zhang, C.\r
              Zeng, C. Lu, <strong>W. Zhang</strong> and W. Wang*, <a href="http://www.biomedcentral.com/1471-2229/15/33">Potential\r
                functions of microRNAs in starch metabolism and\r
                development revealed by miRNA transcriptome profiling of\r
                cassava cultivars and their wild progenitor</a>, <i>BMC\r
                Plant Biology</i>, 15(1):33, 2015.&nbsp; </font></p>\r
        `,text:`X. Chen, J. Xia, Z. Xia, H. Zhang, C.\r
              Zeng, C. Lu, W. Zhang and W. Wang*, Potential\r
                functions of microRNAs in starch metabolism and\r
                development revealed by miRNA transcriptome profiling of\r
                cassava cultivars and their wild progenitor, BMC\r
                Plant Biology, 15(1):33, 2015.&nbsp;`},{html:`\r
          <p><font face="Arial">D. Nie, J. Xia, C. Jiang, B. Qi, X.\r
              Ling, S. Lin, <strong>W. Zhang</strong>, J. Guo, H. Jin and H. Zhao, <a href="http://www.ncbi.nlm.nih.gov/pubmed/26526683">Bacillus\r
\r
\r
\r
                cereus AR156 primes induced systemic resistance by\r
                suppressing miR825/825* and activating defense related\r
                genes in Arabidopsis</a>, <i>J Integrative Plant Biol.</i>,\r
              doi: 10.1111/jipb.12446. </font>\r
          </p>\r
        `,text:`D. Nie, J. Xia, C. Jiang, B. Qi, X.\r
              Ling, S. Lin, W. Zhang, J. Guo, H. Jin and H. Zhao, Bacillus\r
\r
\r
\r
                cereus AR156 primes induced systemic resistance by\r
                suppressing miR825/825* and activating defense related\r
                genes in Arabidopsis, J Integrative Plant Biol.,\r
              doi: 10.1111/jipb.12446.`},{html:`<font face="Arial">D. He, D. Jin, Z. Chen and <strong>W. Zhang</strong>, <a href="https://www.nature.com/articles/srep08638">Identification\r
\r
\r
\r
              of hybrid node and link communities in complex networks</a>,\r
            <i>Scientific Reports</i>, 5:8638, 2015.&nbsp; </font>\r
        `,text:`D. He, D. Jin, Z. Chen and W. Zhang, Identification\r
\r
\r
\r
              of hybrid node and link communities in complex networks,\r
            Scientific Reports, 5:8638, 2015.&nbsp;`},{html:`\r
          <p><font face="Arial">Z. Chen, M. Chen, K. Weinberger and W.\r
              Zhang, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI15/paper/view/9595">Marginalized denoising for link prediction and\r
                multi-label learning</a>, <i>Pr</i><i>oc 2</i><i>9-</i><i>th\r
\r
\r
\r
                AAAI Conf</i><i> on A</i><i>I</i> (AAAI-15), Jan 25-30,\r
                Austin, Texas, USA. </font></p>\r
        `,text:`Z. Chen, M. Chen, K. Weinberger and W.\r
              Zhang, Marginalized denoising for link prediction and\r
                multi-label learning, Proc 29-th\r
\r
\r
\r
                AAAI Conf on AI (AAAI-15), Jan 25-30,\r
                Austin, Texas, USA.`},{html:`\r
          <p><font face="Arial">D. Jin, Z. Chen, D. He and <strong>W. Zhang</strong>, <span style="font-weight: bold;">Modeling with node degree preservation can accurately find communities</span>, <i>Proc 29-th AAAI Conf on AI</i> (AAAI-15), Jan 25-30, Austin, Texas, USA. <a href="nodeDegreeAAA15.pdf"><img alt="" src="pdf.jpg" style="border: 0px solid ; width: 12px; height: 13px;"></a></font></p>\r
        `,text:"D. Jin, Z. Chen, D. He and W. Zhang, Modeling with node degree preservation can accurately find communities, Proc 29-th AAAI Conf on AI (AAAI-15), Jan 25-30, Austin, Texas, USA."},{html:`\r
          <p><font face="Arial">D. He, D. Liu, D. Jin and <strong>W. Zhang</strong>, <a href="https://www.aaai.org/ocs/index.php/AAAI/AAAI15/paper/view/9595">A stochastic model for the detection of heterogeneous link\r
              communities in complex networks</a>, <i>Proc 29-th AAAI Conf on AI</i> (AAAI-15), Jan 25-30, Austin, Texas, USA.\r
              </font></p>\r
        `,text:`D. He, D. Liu, D. Jin and W. Zhang, A stochastic model for the detection of heterogeneous link\r
              communities in complex networks, Proc 29-th AAAI Conf on AI (AAAI-15), Jan 25-30, Austin, Texas, USA.`},{html:`<font face="Arial"><strong>W. Zhang</strong>, <span style="font-weight:\r
              bold;">Ten simple rules for writing research papers</span>,\r
            <i>PLOS Computational Biology</i>, 10(1):e1003453, 2014. \r
          </font>`,text:`W. Zhang, Ten simple rules for writing research papers,\r
            PLOS Computational Biology, 10(1):e1003453, 2014.`},{html:`<font face="Arial">W. Wang, B. Feng, J. Xiao, Z. Xia, X.\r
            Zhou, P. Li, <strong>W. Zhang</strong>, et al., <span style="font-weight:\r
              bold;">Cassava genome from a wild ancestor to cultivated\r
              varieties</span><span style="font-style: italic;">, Nature\r
              Communications</span>, 5:5110, 2014. <br>\r
          </font> `,text:`W. Wang, B. Feng, J. Xiao, Z. Xia, X.\r
            Zhou, P. Li, W. Zhang, et al., Cassava genome from a wild ancestor to cultivated\r
              varieties, Nature\r
              Communications, 5:5110, 2014.`},{html:`<font face="Arial"> S. Climer*, A. Templeton and <strong>W. Zhang</strong>*,\r
            <a href="https://www.ploscompbiol.org/article/info:doi/10.1371/journal.pcbi.1003766">Allele-specific network reveals combinatorial\r
              interactions that transcends small effects in psoriasis\r
              GWAS</a>, <i>PLOS Computational Biology</i>,\r
            10(9):e1003766.&nbsp; \r
            [<a href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]<br>\r
          </font>`,text:`S. Climer*, A. Templeton and W. Zhang*,\r
            Allele-specific network reveals combinatorial\r
              interactions that transcends small effects in psoriasis\r
              GWAS, PLOS Computational Biology,\r
            10(9):e1003766.&nbsp; \r
            [Software]`},{html:`\r
          <p><font face="Arial">J. Xia and <strong>W. Zhang</strong>*, <a href="https://www.ncbi.nlm.nih.gov/pubmed/24326350">MicroRNAs in normal and\r
                psoriatic skin, <span style="font-style: italic;">\r
                Physiological Genomics</span>, 46(4):113-22, 2014.&nbsp;\r
                Invited review. <br>\r
            </font> </p>\r
        `,text:`J. Xia and W. Zhang*, MicroRNAs in normal and\r
                psoriatic skin, \r
                Physiological Genomics, 46(4):113-22, 2014.&nbsp;\r
                Invited review.`},{html:`\r
          <p><font face="Arial">J. Xia and <strong>W. Zhang</strong>*, <a href="http://nar.oxfordjournals.org/content/42/3/1427.long">A meta-analysis revealed\r
                insights into the sources, conservation and impact of\r
                microRNA 5'-isoforms in four model species</a><span\r
                style="font-style: italic;">, Nucleic Acids Research</span>,\r
              42(3):1427-41, 2014. </font></p>\r
        `,text:`J. Xia and W. Zhang*, A meta-analysis revealed\r
                insights into the sources, conservation and impact of\r
                microRNA 5'-isoforms in four model species, Nucleic Acids Research,\r
              42(3):1427-41, 2014.`},{html:`\r
          <p><font face="Arial">J. Xia, C. Zeng, Z. Chen, K. Zhang, X.\r
              Chen, Y. Zhou, S. Song, C. Lu, R. Yang, Z. Yang, J. Zhou,\r
              H. Peng, W. Wang, M. Peng*, <strong>W. Zhang</strong>*, <a href="http://www.biomedcentral.com/1471-2164/15/634">Endogenous\r
                small-noncoding RNAs and their roles in chilling\r
                response and stress acclimation in cassava</a>, <i>BMC\r
                Genomics</i>, 15:634, 2014. </font></p>\r
        `,text:`J. Xia, C. Zeng, Z. Chen, K. Zhang, X.\r
              Chen, Y. Zhou, S. Song, C. Lu, R. Yang, Z. Yang, J. Zhou,\r
              H. Peng, W. Wang, M. Peng*, W. Zhang*, Endogenous\r
                small-noncoding RNAs and their roles in chilling\r
                response and stress acclimation in cassava, BMC\r
                Genomics, 15:634, 2014.`},{html:`<font face="Arial">W. Goettel, Z. Liu, J. Xia, <strong>W. Zhang</strong>,\r
            P.X. Zhao and Y-Q. An*, <a href="http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0086153">Systems and evolutionary\r
              characterization of microRNAs and their underlying\r
              regulatory networks in soybean cotyledons</a>, <i>PLOS\r
                ONE</i>, 9(1):e86153, 2014. \r
          </font>`,text:`W. Goettel, Z. Liu, J. Xia, W. Zhang,\r
            P.X. Zhao and Y-Q. An*, Systems and evolutionary\r
              characterization of microRNAs and their underlying\r
              regulatory networks in soybean cotyledons, PLOS\r
                ONE, 9(1):e86153, 2014.`},{html:`\r
          <p><font face="Arial">C. Zeng, Z. Chen, J. Xia, K. Zhang, X.\r
              Chen, Y. Zhou, W. Bo, S. Song, D. Deng, X. Guo, B. Wang,\r
              J. Zhou, H. Peng, W. Wang, M. Peng*, <strong>W. Zhang</strong>*, <a href="http://www.biomedcentral.com/1471-2229/14/207">Chilling\r
\r
\r
\r
                acclimation provides immunity to stress by altering\r
                regulatory networks and inducing genes with protective\r
                functions in cassava</a>, <i>BMC Plant Biology</i>,\r
              14(1):207, 2014. </font></p>\r
        `,text:`C. Zeng, Z. Chen, J. Xia, K. Zhang, X.\r
              Chen, Y. Zhou, W. Bo, S. Song, D. Deng, X. Guo, B. Wang,\r
              J. Zhou, H. Peng, W. Wang, M. Peng*, W. Zhang*, Chilling\r
\r
\r
\r
                acclimation provides immunity to stress by altering\r
                regulatory networks and inducing genes with protective\r
                functions in cassava, BMC Plant Biology,\r
              14(1):207, 2014.`},{html:`<font face="Arial">Z. Chen and <strong>W. Zhang</strong>, A marginalized denoising method\r
              for link prediction in relational data,<span\r
              style="font-style: italic;">Proc. SIAM Intern. Conf. on\r
              Data Mining, </span>April 24-26, 2014, Philadelphia, USA.\r
            (Full paper, oral presentation) </font>`,text:`Z. Chen and W. Zhang, A marginalized denoising method\r
              for link prediction in relational data,Proc. SIAM Intern. Conf. on\r
              Data Mining, April 24-26, 2014, Philadelphia, USA.\r
            (Full paper, oral presentation)`},{html:`\r
          <p><font face="Arial">Y. Gan, J. Guan, S. Zhou and <strong>W. Zhang</strong>*,\r
              <a href="https://ieeexplore.ieee.org/document/6646168">Identifying cis-regulatory elements and modules using\r
                Conditional Random Fields</a>, <i>IEEE/ACM Transactions\r
                on Computational Biology and Bioinformatics</i>,\r
              11(1):73-82, 2014. \r
            </font></p>\r
        `,text:`Y. Gan, J. Guan, S. Zhou and W. Zhang*,\r
              Identifying cis-regulatory elements and modules using\r
                Conditional Random Fields, IEEE/ACM Transactions\r
                on Computational Biology and Bioinformatics,\r
              11(1):73-82, 2014.`},{html:`<font face="Arial">J. Xia, C.E. Joyce, A.M. Bowcock* and W.\r
              Zhang*, <b>Noncanonical\r
                microRNAs and endogenous siRNAs in normal and psoriatic\r
                human skin</b>, <i>Human Molecular Genetics</i>, 22(4):737-48, 2013. </font>`,text:`J. Xia, C.E. Joyce, A.M. Bowcock* and W.\r
              Zhang*, Noncanonical\r
                microRNAs and endogenous siRNAs in normal and psoriatic\r
                human skin, Human Molecular Genetics, 22(4):737-48, 2013.`},{html:`<font face="Arial">Z. Chen and <strong>W. Zhang</strong>*, <b>Integrative\r
                analysis using module-guided Random Forests reveals\r
                correlated genetic factors related to mouse weight</b>,\r
              <i>PLOS Computational Biology</i>, 9(3):e1002956, 2013. \r
              [<a href="http://www.cse.wustl.edu/%7Ezhang/software">Software</a>]</font>`,text:`Z. Chen and W. Zhang*, Integrative\r
                analysis using module-guided Random Forests reveals\r
                correlated genetic factors related to mouse weight,\r
              PLOS Computational Biology, 9(3):e1002956, 2013. \r
              [Software]`},{html:`<font face="Arial">L. Gao, Y. Cao, Z. Xia, G. Jiang, G.\r
              Liu, <strong>W. Zhang</strong>* and W. Zhai*, <b>Do transgenesis and\r
                backcross breeding produce substantially equivalent\r
                plants? - A comparative study of transgenic and\r
                backcross rice with disease resistant gene Xa21</b>, <i>BMC\r
                Genomics</i>, 14(1):738, 2013.</font>`,text:`L. Gao, Y. Cao, Z. Xia, G. Jiang, G.\r
              Liu, W. Zhang* and W. Zhai*, Do transgenesis and\r
                backcross breeding produce substantially equivalent\r
                plants? - A comparative study of transgenic and\r
                backcross rice with disease resistant gene Xa21, BMC\r
                Genomics, 14(1):738, 2013.`},{html:`<font face="Arial">H. Peng, G. Jiang, J. Zhang, <strong>W. Zhang</strong> and\r
            W. Zhai*, <b>DNA methylation polymorphism and stability in\r
              Chinese indica hybrid rice</b>, Sci. China Life Sci.,\r
            56(12):1097-106, 2013. <a\r
              href="http://www.ncbi.nlm.nih.gov/pubmed/24302290"><img\r
                alt="" src="/static/img/pdf-icon.svg" width="12" height="13" border="0"></a><br>\r
          </font> `,text:`H. Peng, G. Jiang, J. Zhang, W. Zhang and\r
            W. Zhai*, DNA methylation polymorphism and stability in\r
              Chinese indica hybrid rice, Sci. China Life Sci.,\r
            56(12):1097-106, 2013.`},{html:`<font face="Arial">Z. Chen and <strong>W. Zhang</strong>, <b>Domain\r
                adaptation with topical correspondence learning</b>, <i>Proc.\r
                23rd Intern. Joint Conf. on Artificial Intelligence</i>\r
              (IJCAI-13), Aug. 3-9, 2013, Beijing, China, to appear.\r
              (Oral presentation, acceptance rate: ~28%.) <a\r
                href="http://ijcai.org/papers13/Papers/IJCAI13-193.pdf"><img\r
                  alt="" src="/static/img/pdf-icon.svg" width="12" height="13" border="0"></a></font>`,text:`Z. Chen and W. Zhang, Domain\r
                adaptation with topical correspondence learning, Proc.\r
                23rd Intern. Joint Conf. on Artificial Intelligence\r
              (IJCAI-13), Aug. 3-9, 2013, Beijing, China, to appear.\r
              (Oral presentation, acceptance rate: ~28%.)`},{html:`<font face="Arial">Q. Lu, R. Huang, Y. Chen, Y. Xu, W.\r
              Zhang, G. Sun and G. Chen, <b>A SAT-based approach to cost sensitive temporally\r
                expressive planning</b>, <i>ACM Transactions on Intelligent Systems and\r
                Technology</i>, 5(1):18, 2013.&nbsp;<a\r
                href="http://dl.acm.org/citation.cfm?id=2542200"><img\r
                  alt="" src="pdf.jpg" width="12" height="13" border="0"></a></font>`,text:`Q. Lu, R. Huang, Y. Chen, Y. Xu, W.\r
              Zhang, G. Sun and G. Chen, A SAT-based approach to cost sensitive temporally\r
                expressive planning, ACM Transactions on Intelligent Systems and\r
                Technology, 5(1):18, 2013.&nbsp;`}]},2022:{year:"2022",items:[{html:'<font face="Arial">D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2022/0293.pdf">RAW-GNN: Random Walk Aggregation based graph neural network</a>, <u><i>Proc 31-st Intern. Joint Conf. on AI</i></u> (IJCAI-22).</font>',text:"D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and W. Zhang, RAW-GNN: Random Walk Aggregation based graph neural network, Proc 31-st Intern. Joint Conf. on AI (IJCAI-22)."},{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, published online March 2022.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, published online March 2022."},{html:'<font face="Arial">P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, <strong>W. Zhang</strong>, <a href="https://pubmed.ncbi.nlm.nih.gov/34813484/">Graph Triple-Attention Network for Disease-Related LncRNA Prediction</a>, <u><i>IEEE Journal of Biomedical and Health Informatics</i></u>, 26(6):2839-49, 2022.</font>',text:"P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, W. Zhang, Graph Triple-Attention Network for Disease-Related LncRNA Prediction, IEEE Journal of Biomedical and Health Informatics, 26(6):2839-49, 2022."},{html:`<font face="Arial">Palavicini, J. P., L. Ding, M. Pan, <strong>S. Qiu</strong>, H. Wang, Q. Shen, J. L. Dupree and X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/36613677/">Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(1), 2022.</font>`,text:"Palavicini, J. P., L. Ding, M. Pan, S. Qiu, H. Wang, Q. Shen, J. L. Dupree and X. Han, Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks, International Journal of Molecular Sciences, 24(1), 2022."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2023:{year:"2023",items:[{html:'<font face="Arial">D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=YIcb3pR8ld">Contrastive learning meets homophily: Two birds with one stone</a>, <u><i>Conference on Machine Learning</i></u> (ICML-2023).</font>',text:"D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and W. Zhang, Contrastive learning meets homophily: Two birds with one stone, Conference on Machine Learning (ICML-2023)."},{html:'<font face="Arial">X. Wei, <strong>C. Pan</strong>, X. Zhang*, <strong>W. Zhang</strong>*, <a href="https://biologydirect.biomedcentral.com/articles/10.1186/s13062-023-00410-9">Total network controllability analysis discovers explainable drugs for Covid-19 treatment</a>, <u><i>Biology Direct</i></u>, 18(1):55, 2023.</font>',text:"X. Wei, C. Pan, X. Zhang*, W. Zhang*, Total network controllability analysis discovers explainable drugs for Covid-19 treatment, Biology Direct, 18(1):55, 2023."},{html:'<font face="Arial">X. Zhang*, <strong>C. Pan</strong>, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and <strong>W. Zhang</strong>*, <a href="https://pubmed.ncbi.nlm.nih.gov/37520717/">Cancer-keeper genes as therapeutic targets</a>, <u><i>iScience</i></u>, 26(8):107296, 2023.</font>',text:"X. Zhang*, C. Pan, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and W. Zhang*, Cancer-keeper genes as therapeutic targets, iScience, 26(8):107296, 2023."},{html:'<font face="Arial">D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, <strong>W. Zhang</strong>, <a href="hhttps://arxiv.org/pdf/2101.01669">A survey of community detection approaches: From statistical modeling to deep learning</a>, <u><i>IEEE Transactions on Knowledge and Data Engineering</i></u>, 35(2):1149-90, 2023.</font>',text:"D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, W. Zhang, A survey of community detection approaches: From statistical modeling to deep learning, IEEE Transactions on Knowledge and Data Engineering, 35(2):1149-90, 2023."},{html:'<font face="Arial">Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, <strong>W. Zhang</strong>, Z. Liu, X. Zhang, F. Wang*, <a href="https://pubmed.ncbi.nlm.nih.gov/37992593/">A neuroimaging-based precision medicine framework for depression</a>, <u><i>Asian Journal of Psychiatry</i></u>, 91:103803, 2023.</font>',text:"Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, W. Zhang, Z. Liu, X. Zhang, F. Wang*, A neuroimaging-based precision medicine framework for depression, Asian Journal of Psychiatry, 91:103803, 2023."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2024:{year:"2024",items:[{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, 35(4):4438-50, 2024.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, 35(4):4438-50, 2024."},{html:'<font face="Arial">D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=R8SolCx62K&referrer=%5Bthe%20profile%20of%20Zhen%20Wang%5D(%2Fprofile%3Fid%3D~Zhen_Wang11)">Exploitation of a latent mechanism in graph contrastive learning: Representation scattering</a>, <u><i>Proc 38-th Conference on Neural Information Processing Systems</i></u> (NeurIPS 2024).</font>',text:"D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, W. Zhang, Exploitation of a latent mechanism in graph contrastive learning: Representation scattering, Proc 38-th Conference on Neural Information Processing Systems (NeurIPS 2024)."},{html:'<font face="Arial">Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2024/289">Generalized taxonomy-guided graph neural networks</a>, <u><i>Proc 33-rd Intern. Joint Conf. on AI</i></u> (IJCAI-24).</font>',text:"Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and W. Zhang, Generalized taxonomy-guided graph neural networks, Proc 33-rd Intern. Joint Conf. on AI (IJCAI-24)."},{html:'<font face="Arial">Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, <strong>S. Qiu</strong>, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, <u><i>CCS Chemistry</i></u>, 6(11):2662-2670, 2024.</font>',text:"Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, S. Qiu, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, CCS Chemistry, 6(11):2662-2670, 2024."},{html:`<font face="Arial">X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, <strong>S. Qiu</strong>, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, <u><i>Chinese Chemical Letters</i></u>, 35(11):109653, 2024.</font>`,text:"X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, S. Qiu, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, Chinese Chemical Letters, 35(11):109653, 2024."}]},2025:{year:"2025",items:[{html:'<font face="Arial">L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and <strong>W. Zhang</strong>, <a href="https://doi.org/10.1609/aaai.v40i30.39718">MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training</a>, <u><i>Proc. AAAI-26</i></u>, 2025, DOI: 10.1609/aaai.v40i30.39718.</font>',text:"L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and W. Zhang, MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training, Proc. AAAI-26, 2025, DOI: 10.1609/aaai.v40i30.39718."},{html:'<font face="Arial"><strong>Y. Zhu</strong>, S. Wang, Y. Han, Y. Lu, A. Xiong, <strong>S. Qiu</strong>, L. N. Jin, and <strong>W. Zhang</strong>, <a href="https://pubs.acs.org/doi/10.1021/acs.est.5c12915">A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant–Human Protein Interactions</a>, <u><i>Environmental Science &amp; Technology</i></u>, 2025, DOI: 10.1021/acs.est.5c12915.</font>',text:"Y. Zhu, S. Wang, Y. Han, Y. Lu, A. Xiong, S. Qiu, L. N. Jin, and W. Zhang, A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant–Human Protein Interactions, Environmental Science &amp; Technology, 2025, DOI: 10.1021/acs.est.5c12915."},{html:'<font face="Arial"><strong>C. Pan</strong>, X. Zhang, H. Zheng, Z. Su, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/document/11150536">Adaptive Control of Dynamic Networks</a>, <u><i>IEEE Transactions on Network Science and Engineering</i></u>, 14(8), 2025.</font>',text:"C. Pan, X. Zhang, H. Zheng, Z. Su, C. Zhang, W. Zhang, Adaptive Control of Dynamic Networks, IEEE Transactions on Network Science and Engineering, 14(8), 2025."},{html:'<font face="Arial">C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and <strong>W. Zhang</strong>, <a href="https://dl.acm.org/doi/abs/10.1145/3706115">Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning</a>, <u><i>ACM Trans. Intell. Syst. Technol</i></u>, 2025, 16(1):1-21.</font>',text:"C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and W. Zhang, Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning, ACM Trans. Intell. Syst. Technol, 2025, 16(1):1-21."},{html:'<font face="Arial">H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, <strong>W. Zhang</strong>, X. Zhang & F. Wang, <a href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-03850-4">Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia</a>, <u><i>BMC medicine</i></u>, 23(1):38, 2025.</font>',text:"H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, W. Zhang, X. Zhang & F. Wang, Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia, BMC medicine, 23(1):38, 2025."},{html:'<font face="Arial"><strong>Q. Zhao</strong>, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://arxiv.org/abs/2409.15697">dnaGrinder: a lightweight and high-capacity genomic foundation model</a>, <u><i>arXiv</i></u>, 2024, arXiv:2409.15697.</font>',text:"Q. Zhao, C. Zhang, W. Zhang, dnaGrinder: a lightweight and high-capacity genomic foundation model, arXiv, 2024, arXiv:2409.15697."}]},2026:{year:"2026",items:[{html:'<font face="Arial"><strong>K. Li</strong>, W. Wang, J. Jiang, J. Deng, J. Zhang, <strong>S. Qiu</strong>, and <strong>W. Zhang</strong>, <a href="https://www.biorxiv.org/content/10.1101/2026.03.04.709677v1">Circular RNA identification using a genomic language model and a small number of authenticated examples</a>, <u><i>bioRxiv</i></u>, 2026, DOI: 10.64898/2026.03.04.709677.</font>',text:"K. Li, W. Wang, J. Jiang, J. Deng, J. Zhang, S. Qiu, and W. Zhang, Circular RNA identification using a genomic language model and a small number of authenticated examples, bioRxiv, 2026, DOI: 10.64898/2026.03.04.709677."},{html:'<font face="Arial"><strong>Y. Tu</strong>, K. Hao, F. Wang, <strong>S. Qiu</strong>, and <strong>W. Zhang</strong>, <a href="https://doi.org/10.64898/2026.01.26.701909">Circuit-specific resting-state fMRI signatures for stratifying first-episode major depressive disorder and predicting recurrence risk</a>, <u><i>bioRxiv</i></u>, 2026, DOI: 10.64898/2026.01.26.701909.</font>',text:"Y. Tu, K. Hao, F. Wang, S. Qiu, and W. Zhang, Circuit-specific resting-state fMRI signatures for stratifying first-episode major depressive disorder and predicting recurrence risk, bioRxiv, 2026, DOI: 10.64898/2026.01.26.701909."},{html:'<font face="Arial"><strong>Y. Tu</strong>, Q. Fu, Y. Li, C. Sun, Y. Zhu, J. Deng, H. Qin, X. Zeng, Y. Wang, <strong>S. Qiu</strong>, and <strong>W. Zhang</strong>, <a href="https://doi.org/10.64898/2026.01.26.701905">Multimodal behavior scoring quantifies depression-like severity across chronic stress models and identifies stress-resilient mice</a>, <u><i>bioRxiv</i></u>, 2026, DOI: 10.64898/2026.01.26.701905.</font>',text:"Y. Tu, Q. Fu, Y. Li, C. Sun, Y. Zhu, J. Deng, H. Qin, X. Zeng, Y. Wang, S. Qiu, and W. Zhang, Multimodal behavior scoring quantifies depression-like severity across chronic stress models and identifies stress-resilient mice, bioRxiv, 2026, DOI: 10.64898/2026.01.26.701905."},{html:'<font face="Arial">C. Liang, Y. Huang, D. He, P. Li, Y. Li, D. Jin and <strong>W. Zhang</strong>, <em>Unified Multi-Domain Graph Pre-training for Homogeneous and Heterogeneous Graphs via Domain-Specific Expert Encoding</em>, <u><i>Proc. 32nd ACM SIGKDD Intern. Conf. on Knowledge Discovery and Data Mining (KDD-26)</i></u>, 2026.</font>',text:"C. Liang, Y. Huang, D. He, P. Li, Y. Li, D. Jin and W. Zhang, Unified Multi-Domain Graph Pre-training for Homogeneous and Heterogeneous Graphs via Domain-Specific Expert Encoding, Proc. 32nd ACM SIGKDD Intern. Conf. on Knowledge Discovery and Data Mining (KDD-26), 2026."},{html:'<font face="Arial">L. Shan, J. Zhao, D. He, S. Liu, J. Cui and <strong>W. Zhang</strong>, <em>LEDA: Latent Semantic Distribution Alignment for Multi-domain Graph Pre-training</em>, <u><i>Proc. 35th Intern. World Wide Web Conf. (WWW-26)</i></u>, 2026. (CCF-A full paper)</font>',text:"L. Shan, J. Zhao, D. He, S. Liu, J. Cui and W. Zhang, LEDA: Latent Semantic Distribution Alignment for Multi-domain Graph Pre-training, Proc. 35th Intern. World Wide Web Conf. (WWW-26), 2026. (CCF-A full paper)"},{html:'<font face="Arial">L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng and <strong>W. Zhang</strong>, <em>MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training</em>, <u><i>Proc. 40th AAAI Conf. on Artificial Intelligence (AAAI-26)</i></u>, 2026.</font>',text:"L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng and W. Zhang, MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training, Proc. 40th AAAI Conf. on Artificial Intelligence (AAAI-26), 2026."},{html:'<font face="Arial">Z. Wang, D. He, Z. Yu, K. Khysru and <strong>W. Zhang</strong>, <em>DNFormer: Differential Attention for Graph Transformers</em>, <u><i>Proc. 35th Intern. Joint Conf. on AI (IJCAI-26)</i></u>, 2026.</font>',text:"Z. Wang, D. He, Z. Yu, K. Khysru and W. Zhang, DNFormer: Differential Attention for Graph Transformers, Proc. 35th Intern. Joint Conf. on AI (IJCAI-26), 2026."},{html:'<font face="Arial">P. Li, Y. Huang, D. He, D. Jin and <strong>W. Zhang</strong>, <em>CHoE: Cross-Domain Heterogeneous Graph Prompt Learning via Structure-Conditioned Experts</em>, <u><i>Proc. 35th Intern. Joint Conf. on AI (IJCAI-26)</i></u>, 2026.</font>',text:"P. Li, Y. Huang, D. He, D. Jin and W. Zhang, CHoE: Cross-Domain Heterogeneous Graph Prompt Learning via Structure-Conditioned Experts, Proc. 35th Intern. Joint Conf. on AI (IJCAI-26), 2026."},{html:'<font face="Arial"><strong>K. Ma</strong>, W. Wang, K. Li, F. Zhang, <strong>S. Qiu</strong> and <strong>W. Zhang</strong>, <em>Comprehensive Benchmarking of Long-read Fusion-detection Methods Leads to Improved Fusion Discovery</em>, <u><i>Proc. Intern. Conf. on Intelligent Biology and Medicine (ICIBM-26)</i></u>, 2026. (Accepted for Oral Presentation)</font>',text:"K. Ma, W. Wang, K. Li, F. Zhang, S. Qiu and W. Zhang, Comprehensive Benchmarking of Long-read Fusion-detection Methods Leads to Improved Fusion Discovery, Proc. Intern. Conf. on Intelligent Biology and Medicine (ICIBM-26), 2026. (Accepted for Oral Presentation)"}]}},b2={book:A2,byYear:S2},ji=b2,k2=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"publications-container",children:f.jsxs("div",{className:"pub-list",children:[ji.book.length>0&&f.jsx("div",{className:"pub-section",children:f.jsxs("font",{face:"Arial",children:[f.jsx("strong",{children:"Book"}),f.jsx("blockquote",{children:f.jsx("ul",{style:{listStyle:"none",padding:0},children:ji.book.map((e,n)=>f.jsx(pd,{html:e.html},`book-${n}`))})}),f.jsx("hr",{})]})}),Object.keys(ji.byYear).sort((e,n)=>parseInt(n)-parseInt(e)).map(e=>{const n=ji.byYear[e];return n.items.length===0?null:f.jsxs("div",{className:"pub-year-section",children:[f.jsx("p",{children:f.jsx("font",{face:"Arial",children:f.jsxs("b",{children:[e,f.jsx("a",{name:e})]})})}),f.jsx("ul",{children:n.items.map((t,r)=>f.jsx(pd,{html:t.html},`${e}-${r}`))})]},e)})]})})}),C2=()=>f.jsxs("div",{className:"software-container",children:[f.jsx("p",{className:"intro-text",children:"The software tools here were developed in the Zhang lab over many years by grant support from NSF, NIH, The Alzheimer's Association and Monsanto Corporation."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Computational Biology"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"AmpSeq-SSR"}),f.jsxs("div",{className:"software-description",children:["An accurate and efficient method for large-scale SSR genotyping and applications"," ","(",f.jsx("a",{href:`${U.baseurl}/software/AmpSeq-SSR-scripts.zip`,children:"software"}),","," ",f.jsx("a",{href:`${U.baseurl}/SSR_ST2.pdf`,children:"supplemental table"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRvial"}),f.jsxs("div",{className:"software-description",children:["A computational method and software package for detecting and characterizing microRNAs of diverse genomic origins"," ","(",f.jsx("a",{href:`${U.baseurl}/software/miRvial.tgz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"BlocBuster"}),f.jsxs("div",{className:"software-description",children:["An allele-specific and network-based GWAS method"," ","(",f.jsx("a",{href:"http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003766",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ","paper2,"," ",f.jsx("a",{href:"http://www.blocbuster.org",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"mgRF"}),f.jsxs("div",{className:"software-description",children:["Module-guided Random Forests for integration of genotypic variation and gene expression for analyzing complex traits"," ","(",f.jsx("a",{href:"http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1002956",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${U.baseurl}/software/mgrf.tar.bz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRank"}),f.jsxs("div",{className:"software-description",children:["MicroRNA prediction with a novel ranking algorithm based on random walks"," ","(",f.jsx("a",{href:"http://bioinformatics.oxfordjournals.org/content/24/13/i50.full",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${U.baseurl}/software/miRank.tgz`,children:"software and data files"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Qcut and HQcut"}),f.jsxs("div",{className:"software-description",children:["Finding communities in networks; also with scripts for visualizing clustering results and for constructing and clustering gene co-expression networks"," ","(",f.jsx("a",{href:"http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ",f.jsx("a",{href:"http://www.researchgate.net/publication/5500334_Identifying_network_communities_with_a_high_resolution",target:"_blank",rel:"noopener noreferrer",children:"paper2"}),","," ",f.jsx("a",{href:`${U.baseurl}/software/qcut.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"WordSpy"}),f.jsx("div",{className:"software-description",children:"A steganalysis-based, genome scale motif finding method (software)"})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Rearrangement clustering"}),f.jsxs("div",{className:"software-description",children:["A method with application to gene expression analysis"," ","(",f.jsx("a",{href:"http://jmlr.org/papers/volume7/climer06a/climer06a.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:"http://cic.cs.wustl.edu/TSP_k/",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"DBTree"}),f.jsxs("div",{className:"software-description",children:["A bi-directional regression tree approach to modeling transcriptional regulation"," ","(",f.jsx("a",{href:"http://www.ncbi.nlm.nih.gov/pubmed/16303796?dopt=Abstract",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${U.baseurl}/software/bdtree-1.01.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Iterated loop matching"}),f.jsxs("div",{className:"software-description",children:["A method for RNA folding with pseudonots"," ","(",f.jsx("a",{href:`${U.baseurl}/software/ilm.tar.gz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Degenerate multiple PCR primers"}),f.jsxs("div",{className:"software-description",children:["A method for selecting degenerate multiple PCR primers"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/mips.zip",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Optimization and Search"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Cut-and-solve for the ATSP"}),f.jsxs("div",{className:"software-description",children:["(",f.jsx("a",{href:"http://www.cse.wustl.edu/~sclimer/i-right5.htm#download",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"MaxSolver"}),f.jsxs("div",{className:"software-description",children:["An exact max-SAT solver"," ","(",f.jsx("a",{href:"http://cic.cs.wustl.edu/maxsolver/index.htm",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Backbone guided WalkSAT"}),f.jsxs("div",{className:"software-description",children:["A method with dynamic noise strategy for SAT and Max-SAT"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/backboneGuidedSearch/bgwalksat/index.html",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]})]}),P2=[{name:"Negesso, Abebe Edao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/AbebeEdao.jpg",position:"Ph.D. Student",description:"Abebe Edao earned a Bachelor of science degree in Medical Laboratory Technology and a Master's degree in Clinical Chemistry from Addis Ababa University, Ethiopia."},{name:"Deng Jing",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Dengjing.jpg",position:"Research Assistant",description:"She received her bachelor's degree from Southwest University of Science and Technology and her master's degree from Yanbian University. During her master's studies, she spent two years as an exchange student at the Institute of Cardiopulmonary Research, Capital Medical University. Her major is Biochemistry and Molecular Biology. She is currently working as a research assistant in Professor Zhang's group, focusing on molecular experiments and animal studies."},{name:"Zhang Yiran",startdate:["2026-01-01"],enddate:[""],image:"/img/members/ZhangYiran.jpg",position:"Research Assistant",description:"Zhang Yiran received her bachelor's degree in Electronic Information Science and Technology from Southwest Jiaotong University and a master's degree in Bioinformatics from Beijing Institute of Genomics of Chinese Academy of Sciences (China National Center of Bioinformation), conducting research on the causal relationship between obesity-associated DNA methylation and various cancers with Prof. Yiming Bao and Senior engineer Rujiao Li."},{name:"Junyi Chen, Ph.D.",startdate:["2024-10-07"],enddate:[""],image:"/img/members/ChenJunyi.jpg",position:"Research Assistant Professor",description:"Dr. CHEN  finished his Ph.D. in Computer Science at the City University of Hong Kong. His research focuses on the application of artificial intelligence in bioinformatics, including single-cell RNA-seq analysis, and sequence analysis",email:"jerry-junyi dot chen at polyu dot edu dot hk"},{name:"Li Yixin",startdate:["2024-09-01"],enddate:["2026-01-01"],image:"/img/members/Liyixin.jpg",position:"Ph.D. Student",description:"Li Yixin obtained her bachelor's degree from Hubei University of Medicine and her master's degree in psychiatry and mental health from the First Clinical School of Wuhan University. She worked in Professor Zhang's bench group, focusing on research involving depression mouse models and related molecular mechanisms."},{name:"Zhao Qihang",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Qihangzhao.jpg",position:"Ph.D. Student",description:"Qihang holds a Bachelor’s degree in Computer Engineering from the University of Illinois Urbana-Champaign and a Master’s degree in Computer Science from Washington University in St. Louis. In the STEM Lab, Qihang focuses on genomic foundation models and deep learning approaches to tackle specific genomic challenges."},{name:"Shulan Qiu, Ph.D.",startdate:["2023-05-10"],enddate:[""],image:"/img/members/Qiushulan.jpg",position:"Principal Research Fellow",description:"As Lab Manager, Dr. Qiu received her Bachelor and Ph.D degrees in Beijing Normal University of Cell Biology. She worked as Associate Professor  in Beijing Anzhen Hospital Affiliated to Capital Medical University/Beijing Institute of Heart, Lung, and Blood Vessel Diseases (2016), then worked as Instructor in Sam and Ann Barshop Institute for Longevity and Aging Studies, University of Texas Health Science Center at San Antonio, US (2022). She has been as PI of  Youth Project and General Project of National Natural Science Foundation of China (NSFC), and as co-I in many other projects. She published  31 reviewed papers including 13 of h-index.",email:"shulan dot qiu at polyu dot edu dot hk"},{name:"Sun Canghao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Suncanghao.jpg",position:"Ph.D. Student",description:"He earned his bachelor's degree in Medical Laboratory Technology from Dalian Medical University. Currently, he is pursuing an MPhil under the supervision of Professor Zhang, focusing on molecular biology and computational biology."},{name:"Yue Tu, Ph.D.",startdate:["2024-06-17"],enddate:[""],image:"/img/members/TuYue.jpg",position:"Postdoctoral Scholar",description:"Dr. Tu received his Bachelor's, Master's, and Ph.D. in Computer Application Technology from Northeastern University, under the supervision of Prof. QIAO Jianzhong and Prof. LIN Shukuan. His primary research interests include medical image analysis, computer-aided diagnosis, Magnetic Resonance Imaging, and neuroscience."},{name:"Xin Diao, Ph.D.",startdate:["2025-11-01"],enddate:[""],image:"/img/members/DiaoXin.jpg",position:"Postdoctoral Scholar",description:"Dr. Diao received his Ph.D. in Chemistry from Hong Kong Baptist University, where he developed expertise in spatial multi-omics. At Prof. Zhang's lab, he now leverages this expertise to investigate the biology of depression through spatial proteomics."},{name:"Weixiong Zhang, Ph.D.",startdate:["2020-08-01"],enddate:[""],image:"/img/members/Zhangweixiong.jpg",position:"Principal Investigator",description:`**Background**:
- BS in Computer Engineering, Tsinghua University
- PhD in Computer Science, UCLA

**Position**:
- Hong Kong Global STEM Professor
- Chair Professor of Systems Biology and Artificial Intelligence
- Associate Director, [PolyU Academy of Interdisciplinary Research](https://www.polyu.edu.hk/pair/)

**Affiliation**:
- [Dept of Health Technology & Informatics](https://www.polyu.edu.hk/hti/)
- [Dept of Data Science & Artificial Intelligence](https://www.polyu.edu.hk/dsai/)
- [Dept of Computing](https://www.polyu.edu.hk/comp/)`,email:"weixiong dot zhang at polyu dot edu dot hk",scholar:"Minb5QMAAAAJ"},{name:"Fu QingHui",startdate:["2024-03-18"],enddate:[""],image:"/img/members/FuQinghui.jpg",position:"Ph.D. Student",description:"Fu Qinghui earned her bachelor's degree in Pharmacy from Shenzhen University and a master's degree in Medical Microbiology from The University of Manchester. Currently, in Zhang's lab, she is working on utilizing behavioral models and molecular methods to understand the neural and immunological mechanisms underlying depression."},{name:"Han Nan",startdate:["2024-05-01"],enddate:[""],image:"/img/members/HanNan.jpg",position:"Ph.D. Student",description:"Nan Han completed her Bachelor's degree in Bioinformatics at Harbin Medical University, where she researched enhancer and miRNA/lncRNA regulation with Prof. Juan Xu. She then earned her Master's degree in Bioinformatics from the Beijing Institute of Genomics, Chinese Academy of Sciences / China National Center for Bioinformation, conducting research on alternative splicing and their role in development with Prof. Zhaoqi Liu. Currently, in Prof. Zhang’s lab, she focuses on epigenetic signals and their role in depression."},{name:"Yin Huang, Ph.D.",startdate:["2024-05-01"],enddate:["2025-09-08"],image:"/img/members/HuangYin.jpg",position:"Research Fellow",description:"Dr. Huang finished his Ph.D. in Computational Biology at the University of Chinese Academy of Sciences, followed by postdoctoral research experience at Columbia University and the Guangzhou National Lab. His research has focused on developing computational methods and analyzing large-scale genomic and single-cell data."},{name:"Jiang Jiahao",startdate:["2025-01-15"],enddate:[""],image:"/img/members/JiangJiahao.jpg",position:"Ph.D. Student",description:"Jiahao earned his Bachelor's and Master's degrees in Clinical Medicine from Tongji University in China. During his studies, he developed a strong interest in cancer biology, particularly in the role of non-coding RNAs within tumor-derived exosomes. Under the guidance of Professor Zhang, Jiahao leverage advanced techniques to uncover potential biomarkers and therapeutic targets for cancer diagnosis and treatment."},{name:"Li Kang",startdate:["2022-09-01"],enddate:[""],image:"/img/members/LiKang.jpg",position:"Ph.D. Student",description:"Kang received his bachelor's degree in computer science and technology in Northeastern University in China and master's degree in Software Engineering in JiangNan University. He researches noncoding RNA and explainable AI in genomic model."},{name:"Ma Ke",startdate:["2024-01-01"],enddate:[""],image:"/img/members/MaKe.jpg",position:"Ph.D. Student",description:"Ke received his Bachelor's and Master's degrees in Mechanical Engineering from Nanjing University of Science and Technology and South China University of Technology, respectively. Then, he worked as an engineer in Zhongshan Ophthalmic Center, focusing on intelligent diagnosis of ophthalmic diseases based on EEG signals, clinical data and images. In Prof. ZHANG's lab, he is currently working on single-cell and spatial transcriptome-based disease mechanism studies."},{name:"Chunyu Pan, Ph.D.",startdate:["2024-05-01"],enddate:[""],image:"/img/members/PanChunyu.jpg",position:"Postdoctoral Scholar",description:"Dr. Pan earned his Ph.D. in Computer Science from Northeastern University. His research specializes in complex network theory and its applications in biological networks, with a particular focus on brain network alterations in various psychiatric disorders."},{name:"Peng Yuling",startdate:["2024-01-01"],enddate:[""],image:"/img/members/PengYuling.jpg",position:"Research Assistant",description:"Yuling PENG obtained her bachelor's degree from Southwest Medical University and her academic master's degree from Guangzhou Medical University. During her master's studies, she focused on basic research. Currently, she works as a research assistant in Professor Zhang's lab, where she primarily conducts molecular experiments and animal studies."},{name:"Qin Haoning",startdate:["2024-01-03"],enddate:[""],image:"/img/members/QinHaoning.jpg",position:"MPhil Student",description:"Haoning received her Bachelor of Science in Biochemistry from the University of Hong Kong (HKU). Her undergraduate studies laid the foundation for her interest in molecular biology and genetics. In Prof. Zhang's lab, Haoning employs a variety of molecular biology techniques to unravel the complex roles of non-coding RNAs in disease progression and brain function."},{name:"Tan Yejun",startdate:["2024-12-20"],enddate:[""],image:"/img/members/Tanyejun.jpg",position:"Ph.D. Student",description:"Yejun received his Bachelor's degree in Mathematical Biology (Genomics specialization) in University of Minnesota, Twin Cities (UMN). He is also an awardee of HKPFS and PPPFS. Under the guidance of Professor Zhang, Yejun is currently conducting research on epidemiology and non-coding RNA at the JC-STEM laboratory."},{name:"Wang Weixu",startdate:["2022-09-01"],enddate:[""],image:"/img/members/WangWeixu.png",position:"Ph.D. Student",description:"Weixu earned his Bachelor's and Master's degrees in Computer Science and Technology from Heilongjiang University of Science and Technology and Northeastern University, respectively."},{name:"Wang Yuchuan",startdate:["2024-09-01"],enddate:[""],image:"/img/members/WangYuchuan.jpg",position:"Ph.D. Student",description:"Yuchuan received his Bachelor's degree in Information Management and Information Systems from China University in Geosciences (Beijing). He then earned his Master's degree in Computer Science from Washington University in St. Louis, where he was advised by Prof. William YEOH and co-advised by Prof. Chein-Ju HO."},{name:"Wang Zhenqian",startdate:["2024-09-01"],enddate:["2025-09-09"],image:"/img/members/WangZhenqian.png",position:"",description:"Zhenqian holds a Bachelor's degree in Statistics from Nanjing Agricultural University and a Master's degree in Epidemiology and Health Statistics from Sun Yat-sen University. He is currently focused on developing network-based GWAS methods to identify the allelic networks of disorders and utilizing these genetic biomarkers to subtype diseases."},{name:"Zeng Xianlin",startdate:["2024-12-09"],enddate:[""],image:"/img/members/ZengXianlin.jpg",position:"Ph.D. Student",description:"Xianlin received his Bachelor's degree in Biology at City University of Hong Kong and Master's in Bioinformatics at Johns Hopkins University. In Prof. Zhang's lab, Xianlin will maintain the animal model of depression and explore disease epigenomics in the process of depression intergenerational inheritance leveraging bioinformatics tools."},{name:"Zhang Chi",startdate:["2024-05-01"],enddate:["2025-09-09"],image:"/img/members/ZhangChi.jpg",position:"",description:"Chi received his Master's degree (2023) of Electronic Information Engineering at the University of Electronic Science and Technology of China, and Bachelor's degree (2020) of Communication Engineering from the North China Institute of Aerospace Engineering."},{name:"Zhang Fei",startdate:["2023-01-01"],enddate:[""],image:"/img/members/ZhangFei.png",position:"Ph.D. Student",description:"Zhang Fei earned a bachelor's degree from the School of Mathematics and Statistics, Central South University, and a master's degree from Weill Medical College of Cornell University. In Zhang's lab, she researches linkage disequilibrium, haplotype blocks, and SNP causality to develop novel GWAS models and uncover psychiatric disorder mechanisms."},{name:"Zhang Jie",startdate:["2024-09-01"],enddate:[""],image:"/img/members/ZhangJie.jpg",position:"Ph.D. Student",description:"Jie ZHANG received her  Bachelor's degree in clinical medicine and master's degree in clinical oncology from WuHan University, where she focused on the colorectal cancer basic research supervised by prof. Qibin SONG. In ZHANG lab, she will pay attention on the biogenesis and function of circular RNA."},{name:"Zhu Yan",startdate:["2023-09-01"],enddate:["2026-01-01"],image:"/img/members/Zhuyan.jpg",position:"Ph.D. Student",description:"ZHU Yan earned her Bachelor's degree in Science from Jining University and her Master's degree in Science from Dalian Maritime University. Currently, she is enrolled in a joint dual-degree program organized by The Hong Kong Polytechnic University and Harbin Institute of Technology. Her research paper focuses on the prediction of protein-ligand interactions using deep learning. In Professor Zhang's lab, ZHU Yan will apply deep learning techniques to investigate the interactions between proteins and compounds of environmental pollutants, and delve into the underlying molecular mechanisms."},{name:"Zhu Yanan",startdate:["2023-12-27"],enddate:["2026-01-01"],image:"/img/members/ZhuYanan.jpg",position:"Research Assistant",description:"Yanan graduated with a master's degree from Zhengzhou University, focusing on research in chronic pain and circRNA. As a Research Assistant  in Prof. Zhang's lab, she is primarily responsible for administrative tasks. When needed, she also assists with animal and molecular experiments."}],hd=P2||[],L2=()=>{const[e,n]=N.useState({}),[t,r]=N.useState([]);return N.useEffect(()=>{const i=h2(hd);n(i);const a=m2(hd);r(a)},[]),f.jsxs("div",{className:"members-container",children:[Eh.map(i=>{const a=e[i]||[];return a.length===0?null:f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[i,i!=="Principal Investigator"&&"s"]}),a.map(o=>f.jsx(Bl,{member:o},o.name))]},i)}),t.length>0&&f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[f.jsx("span",{className:"material-icons position-title__icon",children:"school"}),"Alumni"]}),t.map(i=>f.jsx(Bl,{member:i},i.name))]})]})},E2=()=>f.jsxs("div",{className:"join-container",children:[f.jsx("p",{className:"intro-text",children:"We welcome applicants with backgrounds in Computer Science and Engineering, Biology, Computational Biology, Genomics, Biomedical Engineering, Medicine and related disciplines to join the Hong Kong Jockey Club STEM Laboratory of Genomics and AI in Healthcare."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Opportunities"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistant Professors"}),f.jsx("div",{className:"card-body",children:"Lead or co-lead projects at the interface of AI and genomics; mentor junior researchers."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"(Senior) Research Fellows"}),f.jsx("div",{className:"card-body",children:"Drive cutting-edge methods and applications; collaborate across computational and wet-lab teams."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Postdoctoral Fellows"}),f.jsx("div",{className:"card-body",children:"Develop algorithms, models and experiments for genomic medicine and AI for healthcare."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistants"}),f.jsx("div",{className:"card-body",children:"Support data analysis, software engineering and/or molecular experiments."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"PhD and Master's students"}),f.jsx("div",{className:"card-body",children:"Pursue graduate research in computational genomics, systems biology, and AI."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Undergraduate Interns"}),f.jsx("div",{className:"card-body",children:"Gain hands-on research experience in computational biology or molecular biology."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"About the Laboratory"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Computational Laboratory"}),f.jsx("div",{className:"card-body",children:"Cluster with CPUs, H100/A800/A6000 GPUs, file servers and petabyte-scale storage."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Molecular Biology Laboratory"}),f.jsx("div",{className:"card-body",children:"Instruments for genomics, cellular/molecular mechanism studies and conventional techniques."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Application"})}),f.jsxs("div",{className:"contact-box",children:["Prospective applicants may send inquiry to: ",f.jsx("strong",{children:"genomics@polyu.edu.hk"})]})]}),N2=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"contact-container",children:f.jsx("div",{className:"contact-content",children:f.jsxs("p",{children:["Department of Health Technology and Informatics",f.jsx("br",{}),"Lee Shau Kee Building, Block Y520, The Hong Kong Polytechnic University",f.jsx("br",{}),"Yuk Choi Road, Hung Hom",f.jsx("br",{}),f.jsx("br",{}),f.jsx("strong",{children:"Email:"})," ",f.jsx("a",{href:"mailto:genomics@polyu.edu.hk",children:"genomics@polyu.edu.hk"}),f.jsx("br",{}),f.jsx("strong",{children:"Phone:"})," +852 3400 8567",f.jsx("br",{}),f.jsx("strong",{children:f.jsx("a",{style:{color:"#1e3a8a"},href:"https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E6%9D%8E%E5%85%86%E5%9F%BA%E6%A5%BC/@22.3060237,114.1808547,17z/data=!3m1!4b1!4m6!3m5!1s0x340400e7ea4cd421:0xc9fb261caeaaf54a!8m2!3d22.3060237!4d114.1808547!16s%2Fg%2F11b67ll0tq?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",children:"Google Map"})})]})})})}),I2=()=>f.jsx(y0,{children:f.jsxs(r0,{children:[f.jsx(Pn,{path:"/",element:f.jsx(w0,{})}),f.jsx(Pn,{path:"/news",element:f.jsx(x2,{})}),f.jsx(Pn,{path:"/research",element:f.jsx(v2,{})}),f.jsx(Pn,{path:"/publications",element:f.jsx(k2,{})}),f.jsx(Pn,{path:"/software",element:f.jsx(C2,{})}),f.jsx(Pn,{path:"/members",element:f.jsx(L2,{})}),f.jsx(Pn,{path:"/join",element:f.jsx(E2,{})}),f.jsx(Pn,{path:"/contact",element:f.jsx(N2,{})})]})}),W2="/";Mo.createRoot(document.getElementById("root")).render(f.jsx(Cd.StrictMode,{children:f.jsx(c0,{basename:W2,children:f.jsx(I2,{})})}));
