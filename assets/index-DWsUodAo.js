function Yh(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(e,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ad={exports:{}},Pa={},Sd={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var or=Symbol.for("react.element"),$h=Symbol.for("react.portal"),Vh=Symbol.for("react.fragment"),Qh=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),qh=Symbol.for("react.provider"),eg=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),tg=Symbol.for("react.suspense"),ig=Symbol.for("react.memo"),rg=Symbol.for("react.lazy"),au=Symbol.iterator;function ag(e){return e===null||typeof e!="object"?null:(e=au&&e[au]||e["@@iterator"],typeof e=="function"?e:null)}var kd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bd=Object.assign,Cd={};function ai(e,n,t){this.props=e,this.context=n,this.refs=Cd,this.updater=t||kd}ai.prototype.isReactComponent={};ai.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ai.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pd(){}Pd.prototype=ai.prototype;function Jl(e,n,t){this.props=e,this.context=n,this.refs=Cd,this.updater=t||kd}var Ul=Jl.prototype=new Pd;Ul.constructor=Jl;bd(Ul,ai.prototype);Ul.isPureReactComponent=!0;var ou=Array.isArray,Ld=Object.prototype.hasOwnProperty,Fl={current:null},Ed={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,n,t){var i,r={},a=null,o=null;if(n!=null)for(i in n.ref!==void 0&&(o=n.ref),n.key!==void 0&&(a=""+n.key),n)Ld.call(n,i)&&!Ed.hasOwnProperty(i)&&(r[i]=n[i]);var l=arguments.length-2;if(l===1)r.children=t;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}if(e&&e.defaultProps)for(i in l=e.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:or,type:e,key:a,ref:o,props:r,_owner:Fl.current}}function og(e,n){return{$$typeof:or,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===or}function lg(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var lu=/\/+/g;function Xa(e,n){return typeof e=="object"&&e!==null&&e.key!=null?lg(""+e.key):n.toString(36)}function Dr(e,n,t,i,r){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case or:case $h:o=!0}}if(o)return o=e,r=r(o),e=i===""?"."+Xa(o,0):i,ou(r)?(t="",e!=null&&(t=e.replace(lu,"$&/")+"/"),Dr(r,n,t,"",function(u){return u})):r!=null&&(Ol(r)&&(r=og(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lu,"$&/")+"/")+e)),n.push(r)),1;if(o=0,i=i===""?".":i+":",ou(e))for(var l=0;l<e.length;l++){a=e[l];var s=i+Xa(a,l);o+=Dr(a,n,t,s,r)}else if(s=ag(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=i+Xa(a,l++),o+=Dr(a,n,t,s,r);else if(a==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return o}function mr(e,n,t){if(e==null)return e;var i=[],r=0;return Dr(e,i,"","",function(a){return n.call(t,a,r++)}),i}function sg(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},_r={transition:null},ug={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:_r,ReactCurrentOwner:Fl};function Id(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:mr,forEach:function(e,n,t){mr(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return mr(e,function(){n++}),n},toArray:function(e){return mr(e,function(n){return n})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=ai;U.Fragment=Vh;U.Profiler=Kh;U.PureComponent=Jl;U.StrictMode=Qh;U.Suspense=tg;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ug;U.act=Id;U.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=bd({},e.props),r=e.key,a=e.ref,o=e._owner;if(n!=null){if(n.ref!==void 0&&(a=n.ref,o=Fl.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in n)Ld.call(n,s)&&!Ed.hasOwnProperty(s)&&(i[s]=n[s]===void 0&&l!==void 0?l[s]:n[s])}var s=arguments.length-2;if(s===1)i.children=t;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:or,type:e.type,key:r,ref:a,props:i,_owner:o}};U.createContext=function(e){return e={$$typeof:eg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qh,_context:e},e.Consumer=e};U.createElement=Nd;U.createFactory=function(e){var n=Nd.bind(null,e);return n.type=e,n};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:ng,render:e}};U.isValidElement=Ol;U.lazy=function(e){return{$$typeof:rg,_payload:{_status:-1,_result:e},_init:sg}};U.memo=function(e,n){return{$$typeof:ig,type:e,compare:n===void 0?null:n}};U.startTransition=function(e){var n=_r.transition;_r.transition={};try{e()}finally{_r.transition=n}};U.unstable_act=Id;U.useCallback=function(e,n){return Me.current.useCallback(e,n)};U.useContext=function(e){return Me.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};U.useEffect=function(e,n){return Me.current.useEffect(e,n)};U.useId=function(){return Me.current.useId()};U.useImperativeHandle=function(e,n,t){return Me.current.useImperativeHandle(e,n,t)};U.useInsertionEffect=function(e,n){return Me.current.useInsertionEffect(e,n)};U.useLayoutEffect=function(e,n){return Me.current.useLayoutEffect(e,n)};U.useMemo=function(e,n){return Me.current.useMemo(e,n)};U.useReducer=function(e,n,t){return Me.current.useReducer(e,n,t)};U.useRef=function(e){return Me.current.useRef(e)};U.useState=function(e){return Me.current.useState(e)};U.useSyncExternalStore=function(e,n,t){return Me.current.useSyncExternalStore(e,n,t)};U.useTransition=function(){return Me.current.useTransition()};U.version="18.3.1";Sd.exports=U;var N=Sd.exports;const Wd=Bl(N),cg=Yh({__proto__:null,default:Wd},[N]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg=N,fg=Symbol.for("react.element"),pg=Symbol.for("react.fragment"),hg=Object.prototype.hasOwnProperty,gg=dg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mg={key:!0,ref:!0,__self:!0,__source:!0};function Rd(e,n,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(o=n.ref);for(i in n)hg.call(n,i)&&!mg.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:fg,type:e,key:a,ref:o,props:r,_owner:gg.current}}Pa.Fragment=pg;Pa.jsx=Rd;Pa.jsxs=Rd;Ad.exports=Pa;var f=Ad.exports,Mo={},Md={exports:{}},Ye={},jd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(R,_){var y=R.length;R.push(_);e:for(;0<y;){var X=y-1>>>1,Q=R[X];if(0<r(Q,_))R[X]=_,R[y]=Q,y=X;else break e}}function t(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var _=R[0],y=R.pop();if(y!==_){R[0]=y;e:for(var X=0,Q=R.length,v=Q>>>1;X<v;){var ye=2*(X+1)-1,an=R[ye],ie=ye+1,gn=R[ie];if(0>r(an,y))ie<Q&&0>r(gn,an)?(R[X]=gn,R[ie]=y,X=ie):(R[X]=an,R[ye]=y,X=ye);else if(ie<Q&&0>r(gn,y))R[X]=gn,R[ie]=y,X=ie;else break e}}return _}function r(R,_){var y=R.sortIndex-_.sortIndex;return y!==0?y:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var s=[],u=[],c=1,d=null,h=3,p=!1,x=!1,A=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(R){for(var _=t(u);_!==null;){if(_.callback===null)i(u);else if(_.startTime<=R)i(u),_.sortIndex=_.expirationTime,n(s,_);else break;_=t(u)}}function k(R){if(A=!1,w(R),!x)if(t(s)!==null)x=!0,he(P);else{var _=t(u);_!==null&&fe(k,_.startTime-R)}}function P(R,_){x=!1,A&&(A=!1,g(M),M=-1),p=!0;var y=h;try{for(w(_),d=t(s);d!==null&&(!(d.expirationTime>_)||R&&!T());){var X=d.callback;if(typeof X=="function"){d.callback=null,h=d.priorityLevel;var Q=X(d.expirationTime<=_);_=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(s)&&i(s),w(_)}else i(s);d=t(s)}if(d!==null)var v=!0;else{var ye=t(u);ye!==null&&fe(k,ye.startTime-_),v=!1}return v}finally{d=null,h=y,p=!1}}var S=!1,I=null,M=-1,H=5,Z=-1;function T(){return!(e.unstable_now()-Z<H)}function D(){if(I!==null){var R=e.unstable_now();Z=R;var _=!0;try{_=I(!0,R)}finally{_?$():(S=!1,I=null)}}else S=!1}var $;if(typeof m=="function")$=function(){m(D)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,O=le.port2;le.port1.onmessage=D,$=function(){O.postMessage(null)}}else $=function(){b(D,0)};function he(R){I=R,S||(S=!0,$())}function fe(R,_){M=b(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||p||(x=!0,he(P))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return t(s)},e.unstable_next=function(R){switch(h){case 1:case 2:case 3:var _=3;break;default:_=h}var y=h;h=_;try{return R()}finally{h=y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var y=h;h=R;try{return _()}finally{h=y}},e.unstable_scheduleCallback=function(R,_,y){var X=e.unstable_now();switch(typeof y=="object"&&y!==null?(y=y.delay,y=typeof y=="number"&&0<y?X+y:X):y=X,R){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=y+Q,R={id:c++,callback:_,priorityLevel:R,startTime:y,expirationTime:Q,sortIndex:-1},y>X?(R.sortIndex=y,n(u,R),t(s)===null&&R===t(u)&&(A?(g(M),M=-1):A=!0,fe(k,y-X))):(R.sortIndex=Q,n(s,R),x||p||(x=!0,he(P))),R},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(R){var _=h;return function(){var y=h;h=_;try{return R.apply(this,arguments)}finally{h=y}}}})(Zd);jd.exports=Zd;var yg=jd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg=N,Xe=yg;function L(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Td=new Set,Bi={};function vt(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Bi[e]=n,e=0;e<n.length;e++)Td.add(n[e])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jo=Object.prototype.hasOwnProperty,xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,su={},uu={};function vg(e){return jo.call(uu,e)?!0:jo.call(su,e)?!1:xg.test(e)?uu[e]=!0:(su[e]=!0,!1)}function Ag(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sg(e,n,t,i){if(n===null||typeof n>"u"||Ag(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function je(e,n,t,i,r,a,o){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=a,this.removeEmptyString=o}var Ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ce[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];Ce[n]=new je(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ce[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ce[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ce[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ce[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ce[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ce[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ce[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gl=/[\-:]([a-z])/g;function Xl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Gl,Xl);Ce[n]=new je(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Gl,Xl);Ce[n]=new je(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Gl,Xl);Ce[n]=new je(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ce[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});Ce.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ce[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yl(e,n,t,i){var r=Ce.hasOwnProperty(n)?Ce[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Sg(n,t,r,i)&&(t=null),i||r===null?vg(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Tn=wg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yr=Symbol.for("react.element"),It=Symbol.for("react.portal"),Wt=Symbol.for("react.fragment"),$l=Symbol.for("react.strict_mode"),Zo=Symbol.for("react.profiler"),Dd=Symbol.for("react.provider"),_d=Symbol.for("react.context"),Vl=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),Do=Symbol.for("react.suspense_list"),Ql=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),Hd=Symbol.for("react.offscreen"),cu=Symbol.iterator;function hi(e){return e===null||typeof e!="object"?null:(e=cu&&e[cu]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,Ya;function bi(e){if(Ya===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Ya=n&&n[1]||""}return`
`+Ya+e}var $a=!1;function Va(e,n){if(!e||$a)return"";$a=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var i=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){i=u}e.call(n.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,l=a.length-1;1<=o&&0<=l&&r[o]!==a[l];)l--;for(;1<=o&&0<=l;o--,l--)if(r[o]!==a[l]){if(o!==1||l!==1)do if(o--,l--,0>l||r[o]!==a[l]){var s=`
`+r[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=l);break}}}finally{$a=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?bi(e):""}function kg(e){switch(e.tag){case 5:return bi(e.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return e=Va(e.type,!1),e;case 11:return e=Va(e.type.render,!1),e;case 1:return e=Va(e.type,!0),e;default:return""}}function _o(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Wt:return"Fragment";case It:return"Portal";case Zo:return"Profiler";case $l:return"StrictMode";case To:return"Suspense";case Do:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _d:return(e.displayName||"Context")+".Consumer";case Dd:return(e._context.displayName||"Context")+".Provider";case Vl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ql:return n=e.displayName||null,n!==null?n:_o(e.type)||"Memo";case zn:n=e._payload,e=e._init;try{return _o(e(n))}catch{}}return null}function bg(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _o(n);case 8:return n===$l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cg(e){var n=zd(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,a=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function wr(e){e._valueTracker||(e._valueTracker=Cg(e))}function Bd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=zd(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,n){var t=n.checked;return ce({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function du(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=nt(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Jd(e,n){n=n.checked,n!=null&&Yl(e,"checked",n,!1)}function zo(e,n){Jd(e,n);var t=nt(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Bo(e,n.type,t):n.hasOwnProperty("defaultValue")&&Bo(e,n.type,nt(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function fu(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Bo(e,n,t){(n!=="number"||Kr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Ci=Array.isArray;function Ut(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+nt(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Jo(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(L(91));return ce({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pu(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(L(92));if(Ci(t)){if(1<t.length)throw Error(L(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:nt(t)}}function Ud(e,n){var t=nt(n.value),i=nt(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function hu(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uo(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Fd(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var xr,Od=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(xr=xr||document.createElement("div"),xr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ji(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pg=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(e){Pg.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Ni[n]=Ni[e]})});function Gd(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Ni.hasOwnProperty(e)&&Ni[e]?(""+n).trim():n+"px"}function Xd(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Gd(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Lg=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fo(e,n){if(n){if(Lg[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(L(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(L(61))}if(n.style!=null&&typeof n.style!="object")throw Error(L(62))}}function Oo(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Go=null;function Kl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Xo=null,Ft=null,Ot=null;function gu(e){if(e=ur(e)){if(typeof Xo!="function")throw Error(L(280));var n=e.stateNode;n&&(n=Wa(n),Xo(e.stateNode,e.type,n))}}function Yd(e){Ft?Ot?Ot.push(e):Ot=[e]:Ft=e}function $d(){if(Ft){var e=Ft,n=Ot;if(Ot=Ft=null,gu(e),n)for(e=0;e<n.length;e++)gu(n[e])}}function Vd(e,n){return e(n)}function Qd(){}var Qa=!1;function Kd(e,n,t){if(Qa)return e(n,t);Qa=!0;try{return Vd(e,n,t)}finally{Qa=!1,(Ft!==null||Ot!==null)&&(Qd(),$d())}}function Ui(e,n){var t=e.stateNode;if(t===null)return null;var i=Wa(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(L(231,n,typeof t));return t}var Yo=!1;if(Rn)try{var gi={};Object.defineProperty(gi,"passive",{get:function(){Yo=!0}}),window.addEventListener("test",gi,gi),window.removeEventListener("test",gi,gi)}catch{Yo=!1}function Eg(e,n,t,i,r,a,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(c){this.onError(c)}}var Ii=!1,qr=null,ea=!1,$o=null,Ng={onError:function(e){Ii=!0,qr=e}};function Ig(e,n,t,i,r,a,o,l,s){Ii=!1,qr=null,Eg.apply(Ng,arguments)}function Wg(e,n,t,i,r,a,o,l,s){if(Ig.apply(this,arguments),Ii){if(Ii){var u=qr;Ii=!1,qr=null}else throw Error(L(198));ea||(ea=!0,$o=u)}}function At(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function qd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function mu(e){if(At(e)!==e)throw Error(L(188))}function Rg(e){var n=e.alternate;if(!n){if(n=At(e),n===null)throw Error(L(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===t)return mu(r),e;if(a===i)return mu(r),n;a=a.sibling}throw Error(L(188))}if(t.return!==i.return)t=r,i=a;else{for(var o=!1,l=r.child;l;){if(l===t){o=!0,t=r,i=a;break}if(l===i){o=!0,i=r,t=a;break}l=l.sibling}if(!o){for(l=a.child;l;){if(l===t){o=!0,t=a,i=r;break}if(l===i){o=!0,i=a,t=r;break}l=l.sibling}if(!o)throw Error(L(189))}}if(t.alternate!==i)throw Error(L(190))}if(t.tag!==3)throw Error(L(188));return t.stateNode.current===t?e:n}function ef(e){return e=Rg(e),e!==null?nf(e):null}function nf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=nf(e);if(n!==null)return n;e=e.sibling}return null}var tf=Xe.unstable_scheduleCallback,yu=Xe.unstable_cancelCallback,Mg=Xe.unstable_shouldYield,jg=Xe.unstable_requestPaint,pe=Xe.unstable_now,Zg=Xe.unstable_getCurrentPriorityLevel,ql=Xe.unstable_ImmediatePriority,rf=Xe.unstable_UserBlockingPriority,na=Xe.unstable_NormalPriority,Tg=Xe.unstable_LowPriority,af=Xe.unstable_IdlePriority,La=null,An=null;function Dg(e){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(La,e,void 0,(e.current.flags&128)===128)}catch{}}var fn=Math.clz32?Math.clz32:zg,_g=Math.log,Hg=Math.LN2;function zg(e){return e>>>=0,e===0?32:31-(_g(e)/Hg|0)|0}var vr=64,Ar=4194304;function Pi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,a=e.pingedLanes,o=t&268435455;if(o!==0){var l=o&~r;l!==0?i=Pi(l):(a&=o,a!==0&&(i=Pi(a)))}else o=t&~r,o!==0?i=Pi(o):a!==0&&(i=Pi(a));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,a=n&-n,r>=a||r===16&&(a&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-fn(n),r=1<<t,i|=e[t],n&=~r;return i}function Bg(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jg(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-fn(a),l=1<<o,s=r[o];s===-1?(!(l&t)||l&i)&&(r[o]=Bg(l,n)):s<=n&&(e.expiredLanes|=l),a&=~l}}function Vo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function of(){var e=vr;return vr<<=1,!(vr&4194240)&&(vr=64),e}function Ka(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function lr(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-fn(n),e[n]=t}function Ug(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-fn(t),a=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~a}}function es(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-fn(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var V=0;function lf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sf,ns,uf,cf,df,Qo=!1,Sr=[],Gn=null,Xn=null,Yn=null,Fi=new Map,Oi=new Map,Jn=[],Fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wu(e,n){switch(e){case"focusin":case"focusout":Gn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":Fi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(n.pointerId)}}function mi(e,n,t,i,r,a){return e===null||e.nativeEvent!==a?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},n!==null&&(n=ur(n),n!==null&&ns(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Og(e,n,t,i,r){switch(n){case"focusin":return Gn=mi(Gn,e,n,t,i,r),!0;case"dragenter":return Xn=mi(Xn,e,n,t,i,r),!0;case"mouseover":return Yn=mi(Yn,e,n,t,i,r),!0;case"pointerover":var a=r.pointerId;return Fi.set(a,mi(Fi.get(a)||null,e,n,t,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Oi.set(a,mi(Oi.get(a)||null,e,n,t,i,r)),!0}return!1}function ff(e){var n=ct(e.target);if(n!==null){var t=At(n);if(t!==null){if(n=t.tag,n===13){if(n=qd(t),n!==null){e.blockedOn=n,df(e.priority,function(){uf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Ko(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);Go=i,t.target.dispatchEvent(i),Go=null}else return n=ur(t),n!==null&&ns(n),e.blockedOn=t,!1;n.shift()}return!0}function xu(e,n,t){Hr(e)&&t.delete(n)}function Gg(){Qo=!1,Gn!==null&&Hr(Gn)&&(Gn=null),Xn!==null&&Hr(Xn)&&(Xn=null),Yn!==null&&Hr(Yn)&&(Yn=null),Fi.forEach(xu),Oi.forEach(xu)}function yi(e,n){e.blockedOn===n&&(e.blockedOn=null,Qo||(Qo=!0,Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority,Gg)))}function Gi(e){function n(r){return yi(r,e)}if(0<Sr.length){yi(Sr[0],e);for(var t=1;t<Sr.length;t++){var i=Sr[t];i.blockedOn===e&&(i.blockedOn=null)}}for(Gn!==null&&yi(Gn,e),Xn!==null&&yi(Xn,e),Yn!==null&&yi(Yn,e),Fi.forEach(n),Oi.forEach(n),t=0;t<Jn.length;t++)i=Jn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<Jn.length&&(t=Jn[0],t.blockedOn===null);)ff(t),t.blockedOn===null&&Jn.shift()}var Gt=Tn.ReactCurrentBatchConfig,ia=!0;function Xg(e,n,t,i){var r=V,a=Gt.transition;Gt.transition=null;try{V=1,ts(e,n,t,i)}finally{V=r,Gt.transition=a}}function Yg(e,n,t,i){var r=V,a=Gt.transition;Gt.transition=null;try{V=4,ts(e,n,t,i)}finally{V=r,Gt.transition=a}}function ts(e,n,t,i){if(ia){var r=Ko(e,n,t,i);if(r===null)so(e,n,i,ra,t),wu(e,i);else if(Og(r,e,n,t,i))i.stopPropagation();else if(wu(e,i),n&4&&-1<Fg.indexOf(e)){for(;r!==null;){var a=ur(r);if(a!==null&&sf(a),a=Ko(e,n,t,i),a===null&&so(e,n,i,ra,t),a===r)break;r=a}r!==null&&i.stopPropagation()}else so(e,n,i,null,t)}}var ra=null;function Ko(e,n,t,i){if(ra=null,e=Kl(i),e=ct(e),e!==null)if(n=At(e),n===null)e=null;else if(t=n.tag,t===13){if(e=qd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return ra=e,null}function pf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zg()){case ql:return 1;case rf:return 4;case na:case Tg:return 16;case af:return 536870912;default:return 16}default:return 16}}var Fn=null,is=null,zr=null;function hf(){if(zr)return zr;var e,n=is,t=n.length,i,r="value"in Fn?Fn.value:Fn.textContent,a=r.length;for(e=0;e<t&&n[e]===r[e];e++);var o=t-e;for(i=1;i<=o&&n[t-i]===r[a-i];i++);return zr=r.slice(e,1<i?1-i:void 0)}function Br(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function kr(){return!0}function vu(){return!1}function $e(e){function n(t,i,r,a,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(t=e[l],this[l]=t?t(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?kr:vu,this.isPropagationStopped=vu,this}return ce(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),n}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=$e(oi),sr=ce({},oi,{view:0,detail:0}),$g=$e(sr),qa,eo,wi,Ea=ce({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:as,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(qa=e.screenX-wi.screenX,eo=e.screenY-wi.screenY):eo=qa=0,wi=e),qa)},movementY:function(e){return"movementY"in e?e.movementY:eo}}),Au=$e(Ea),Vg=ce({},Ea,{dataTransfer:0}),Qg=$e(Vg),Kg=ce({},sr,{relatedTarget:0}),no=$e(Kg),qg=ce({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),em=$e(qg),nm=ce({},oi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tm=$e(nm),im=ce({},oi,{data:0}),Su=$e(im),rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},am={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},om={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lm(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=om[e])?!!n[e]:!1}function as(){return lm}var sm=ce({},sr,{key:function(e){if(e.key){var n=rm[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?am[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:as,charCode:function(e){return e.type==="keypress"?Br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),um=$e(sm),cm=ce({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=$e(cm),dm=ce({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:as}),fm=$e(dm),pm=ce({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),hm=$e(pm),gm=ce({},Ea,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mm=$e(gm),ym=[9,13,27,32],os=Rn&&"CompositionEvent"in window,Wi=null;Rn&&"documentMode"in document&&(Wi=document.documentMode);var wm=Rn&&"TextEvent"in window&&!Wi,gf=Rn&&(!os||Wi&&8<Wi&&11>=Wi),bu=" ",Cu=!1;function mf(e,n){switch(e){case"keyup":return ym.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function xm(e,n){switch(e){case"compositionend":return yf(n);case"keypress":return n.which!==32?null:(Cu=!0,bu);case"textInput":return e=n.data,e===bu&&Cu?null:e;default:return null}}function vm(e,n){if(Rt)return e==="compositionend"||!os&&mf(e,n)?(e=hf(),zr=is=Fn=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gf&&n.locale!=="ko"?null:n.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Am[e.type]:n==="textarea"}function wf(e,n,t,i){Yd(i),n=aa(n,"onChange"),0<n.length&&(t=new rs("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var Ri=null,Xi=null;function Sm(e){Nf(e,0)}function Na(e){var n=Zt(e);if(Bd(n))return e}function km(e,n){if(e==="change")return n}var xf=!1;if(Rn){var to;if(Rn){var io="oninput"in document;if(!io){var Lu=document.createElement("div");Lu.setAttribute("oninput","return;"),io=typeof Lu.oninput=="function"}to=io}else to=!1;xf=to&&(!document.documentMode||9<document.documentMode)}function Eu(){Ri&&(Ri.detachEvent("onpropertychange",vf),Xi=Ri=null)}function vf(e){if(e.propertyName==="value"&&Na(Xi)){var n=[];wf(n,Xi,e,Kl(e)),Kd(Sm,n)}}function bm(e,n,t){e==="focusin"?(Eu(),Ri=n,Xi=t,Ri.attachEvent("onpropertychange",vf)):e==="focusout"&&Eu()}function Cm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Na(Xi)}function Pm(e,n){if(e==="click")return Na(n)}function Lm(e,n){if(e==="input"||e==="change")return Na(n)}function Em(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:Em;function Yi(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!jo.call(n,r)||!hn(e[r],n[r]))return!1}return!0}function Nu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Iu(e,n){var t=Nu(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Nu(t)}}function Af(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Af(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sf(){for(var e=window,n=Kr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Kr(e.document)}return n}function ls(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Nm(e){var n=Sf(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Af(t.ownerDocument.documentElement,t)){if(i!==null&&ls(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!e.extend&&a>i&&(r=i,i=a,a=r),r=Iu(t,a);var o=Iu(t,i);r&&o&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),a>i?(e.addRange(n),e.extend(o.node,o.offset)):(n.setEnd(o.node,o.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Im=Rn&&"documentMode"in document&&11>=document.documentMode,Mt=null,qo=null,Mi=null,el=!1;function Wu(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;el||Mt==null||Mt!==Kr(i)||(i=Mt,"selectionStart"in i&&ls(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mi&&Yi(Mi,i)||(Mi=i,i=aa(qo,"onSelect"),0<i.length&&(n=new rs("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Mt)))}function br(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var jt={animationend:br("Animation","AnimationEnd"),animationiteration:br("Animation","AnimationIteration"),animationstart:br("Animation","AnimationStart"),transitionend:br("Transition","TransitionEnd")},ro={},kf={};Rn&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete jt.animationend.animation,delete jt.animationiteration.animation,delete jt.animationstart.animation),"TransitionEvent"in window||delete jt.transitionend.transition);function Ia(e){if(ro[e])return ro[e];if(!jt[e])return e;var n=jt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in kf)return ro[e]=n[t];return e}var bf=Ia("animationend"),Cf=Ia("animationiteration"),Pf=Ia("animationstart"),Lf=Ia("transitionend"),Ef=new Map,Ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function it(e,n){Ef.set(e,n),vt(n,[e])}for(var ao=0;ao<Ru.length;ao++){var oo=Ru[ao],Wm=oo.toLowerCase(),Rm=oo[0].toUpperCase()+oo.slice(1);it(Wm,"on"+Rm)}it(bf,"onAnimationEnd");it(Cf,"onAnimationIteration");it(Pf,"onAnimationStart");it("dblclick","onDoubleClick");it("focusin","onFocus");it("focusout","onBlur");it(Lf,"onTransitionEnd");Kt("onMouseEnter",["mouseout","mouseover"]);Kt("onMouseLeave",["mouseout","mouseover"]);Kt("onPointerEnter",["pointerout","pointerover"]);Kt("onPointerLeave",["pointerout","pointerover"]);vt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vt("onBeforeInput",["compositionend","keypress","textInput","paste"]);vt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Li));function Mu(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Wg(i,n,void 0,e),e.currentTarget=null}function Nf(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var a=void 0;if(n)for(var o=i.length-1;0<=o;o--){var l=i[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&r.isPropagationStopped())break e;Mu(r,l,u),a=s}else for(o=0;o<i.length;o++){if(l=i[o],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&r.isPropagationStopped())break e;Mu(r,l,u),a=s}}}if(ea)throw e=$o,ea=!1,$o=null,e}function re(e,n){var t=n[al];t===void 0&&(t=n[al]=new Set);var i=e+"__bubble";t.has(i)||(If(n,e,2,!1),t.add(i))}function lo(e,n,t){var i=0;n&&(i|=4),If(t,e,i,n)}var Cr="_reactListening"+Math.random().toString(36).slice(2);function $i(e){if(!e[Cr]){e[Cr]=!0,Td.forEach(function(t){t!=="selectionchange"&&(Mm.has(t)||lo(t,!1,e),lo(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Cr]||(n[Cr]=!0,lo("selectionchange",!1,n))}}function If(e,n,t,i){switch(pf(n)){case 1:var r=Xg;break;case 4:r=Yg;break;default:r=ts}t=r.bind(null,n,t,e),r=void 0,!Yo||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function so(e,n,t,i,r){var a=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===r||s.nodeType===8&&s.parentNode===r))return;o=o.return}for(;l!==null;){if(o=ct(l),o===null)return;if(s=o.tag,s===5||s===6){i=a=o;continue e}l=l.parentNode}}i=i.return}Kd(function(){var u=a,c=Kl(t),d=[];e:{var h=Ef.get(e);if(h!==void 0){var p=rs,x=e;switch(e){case"keypress":if(Br(t)===0)break e;case"keydown":case"keyup":p=um;break;case"focusin":x="focus",p=no;break;case"focusout":x="blur",p=no;break;case"beforeblur":case"afterblur":p=no;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fm;break;case bf:case Cf:case Pf:p=em;break;case Lf:p=hm;break;case"scroll":p=$g;break;case"wheel":p=mm;break;case"copy":case"cut":case"paste":p=tm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=ku}var A=(n&4)!==0,b=!A&&e==="scroll",g=A?h!==null?h+"Capture":null:h;A=[];for(var m=u,w;m!==null;){w=m;var k=w.stateNode;if(w.tag===5&&k!==null&&(w=k,g!==null&&(k=Ui(m,g),k!=null&&A.push(Vi(m,k,w)))),b)break;m=m.return}0<A.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:A}))}}if(!(n&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&t!==Go&&(x=t.relatedTarget||t.fromElement)&&(ct(x)||x[Mn]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?ct(x):null,x!==null&&(b=At(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(A=Au,k="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(A=ku,k="onPointerLeave",g="onPointerEnter",m="pointer"),b=p==null?h:Zt(p),w=x==null?h:Zt(x),h=new A(k,m+"leave",p,t,c),h.target=b,h.relatedTarget=w,k=null,ct(c)===u&&(A=new A(g,m+"enter",x,t,c),A.target=w,A.relatedTarget=b,k=A),b=k,p&&x)n:{for(A=p,g=x,m=0,w=A;w;w=Et(w))m++;for(w=0,k=g;k;k=Et(k))w++;for(;0<m-w;)A=Et(A),m--;for(;0<w-m;)g=Et(g),w--;for(;m--;){if(A===g||g!==null&&A===g.alternate)break n;A=Et(A),g=Et(g)}A=null}else A=null;p!==null&&ju(d,h,p,A,!1),x!==null&&b!==null&&ju(d,b,x,A,!0)}}e:{if(h=u?Zt(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=km;else if(Pu(h))if(xf)P=Lm;else{P=Cm;var S=bm}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=Pm);if(P&&(P=P(e,u))){wf(d,P,t,c);break e}S&&S(e,h,u),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&Bo(h,"number",h.value)}switch(S=u?Zt(u):window,e){case"focusin":(Pu(S)||S.contentEditable==="true")&&(Mt=S,qo=u,Mi=null);break;case"focusout":Mi=qo=Mt=null;break;case"mousedown":el=!0;break;case"contextmenu":case"mouseup":case"dragend":el=!1,Wu(d,t,c);break;case"selectionchange":if(Im)break;case"keydown":case"keyup":Wu(d,t,c)}var I;if(os)e:{switch(e){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else Rt?mf(e,t)&&(M="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(M="onCompositionStart");M&&(gf&&t.locale!=="ko"&&(Rt||M!=="onCompositionStart"?M==="onCompositionEnd"&&Rt&&(I=hf()):(Fn=c,is="value"in Fn?Fn.value:Fn.textContent,Rt=!0)),S=aa(u,M),0<S.length&&(M=new Su(M,e,null,t,c),d.push({event:M,listeners:S}),I?M.data=I:(I=yf(t),I!==null&&(M.data=I)))),(I=wm?xm(e,t):vm(e,t))&&(u=aa(u,"onBeforeInput"),0<u.length&&(c=new Su("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=I))}Nf(d,n)})}function Vi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function aa(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ui(e,t),a!=null&&i.unshift(Vi(e,a,r)),a=Ui(e,n),a!=null&&i.push(Vi(e,a,r))),e=e.return}return i}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ju(e,n,t,i,r){for(var a=n._reactName,o=[];t!==null&&t!==i;){var l=t,s=l.alternate,u=l.stateNode;if(s!==null&&s===i)break;l.tag===5&&u!==null&&(l=u,r?(s=Ui(t,a),s!=null&&o.unshift(Vi(t,s,l))):r||(s=Ui(t,a),s!=null&&o.push(Vi(t,s,l)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var jm=/\r\n?/g,Zm=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(jm,`
`).replace(Zm,"")}function Pr(e,n,t){if(n=Zu(n),Zu(e)!==n&&t)throw Error(L(425))}function oa(){}var nl=null,tl=null;function il(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rl=typeof setTimeout=="function"?setTimeout:void 0,Tm=typeof clearTimeout=="function"?clearTimeout:void 0,Tu=typeof Promise=="function"?Promise:void 0,Dm=typeof queueMicrotask=="function"?queueMicrotask:typeof Tu<"u"?function(e){return Tu.resolve(null).then(e).catch(_m)}:rl;function _m(e){setTimeout(function(){throw e})}function uo(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),Gi(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Gi(n)}function $n(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Du(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var li=Math.random().toString(36).slice(2),xn="__reactFiber$"+li,Qi="__reactProps$"+li,Mn="__reactContainer$"+li,al="__reactEvents$"+li,Hm="__reactListeners$"+li,zm="__reactHandles$"+li;function ct(e){var n=e[xn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Mn]||t[xn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Du(e);e!==null;){if(t=e[xn])return t;e=Du(e)}return n}e=t,t=e.parentNode}return null}function ur(e){return e=e[xn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Wa(e){return e[Qi]||null}var ol=[],Tt=-1;function rt(e){return{current:e}}function ae(e){0>Tt||(e.current=ol[Tt],ol[Tt]=null,Tt--)}function ne(e,n){Tt++,ol[Tt]=e.current,e.current=n}var tt={},Ne=rt(tt),_e=rt(!1),gt=tt;function qt(e,n){var t=e.type.contextTypes;if(!t)return tt;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in t)r[a]=n[a];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function He(e){return e=e.childContextTypes,e!=null}function la(){ae(_e),ae(Ne)}function _u(e,n,t){if(Ne.current!==tt)throw Error(L(168));ne(Ne,n),ne(_e,t)}function Wf(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(L(108,bg(e)||"Unknown",r));return ce({},t,i)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tt,gt=Ne.current,ne(Ne,e),ne(_e,_e.current),!0}function Hu(e,n,t){var i=e.stateNode;if(!i)throw Error(L(169));t?(e=Wf(e,n,gt),i.__reactInternalMemoizedMergedChildContext=e,ae(_e),ae(Ne),ne(Ne,e)):ae(_e),ne(_e,t)}var En=null,Ra=!1,co=!1;function Rf(e){En===null?En=[e]:En.push(e)}function Bm(e){Ra=!0,Rf(e)}function at(){if(!co&&En!==null){co=!0;var e=0,n=V;try{var t=En;for(V=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}En=null,Ra=!1}catch(r){throw En!==null&&(En=En.slice(e+1)),tf(ql,at),r}finally{V=n,co=!1}}return null}var Dt=[],_t=0,ua=null,ca=0,Ve=[],Qe=0,mt=null,Nn=1,In="";function lt(e,n){Dt[_t++]=ca,Dt[_t++]=ua,ua=e,ca=n}function Mf(e,n,t){Ve[Qe++]=Nn,Ve[Qe++]=In,Ve[Qe++]=mt,mt=e;var i=Nn;e=In;var r=32-fn(i)-1;i&=~(1<<r),t+=1;var a=32-fn(n)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Nn=1<<32-fn(n)+r|t<<r|i,In=a+e}else Nn=1<<a|t<<r|i,In=e}function ss(e){e.return!==null&&(lt(e,1),Mf(e,1,0))}function us(e){for(;e===ua;)ua=Dt[--_t],Dt[_t]=null,ca=Dt[--_t],Dt[_t]=null;for(;e===mt;)mt=Ve[--Qe],Ve[Qe]=null,In=Ve[--Qe],Ve[Qe]=null,Nn=Ve[--Qe],Ve[Qe]=null}var Ge=null,Oe=null,oe=!1,cn=null;function jf(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function zu(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ge=e,Oe=$n(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ge=e,Oe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=mt!==null?{id:Nn,overflow:In}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ge=e,Oe=null,!0):!1;default:return!1}}function ll(e){return(e.mode&1)!==0&&(e.flags&128)===0}function sl(e){if(oe){var n=Oe;if(n){var t=n;if(!zu(e,n)){if(ll(e))throw Error(L(418));n=$n(t.nextSibling);var i=Ge;n&&zu(e,n)?jf(i,t):(e.flags=e.flags&-4097|2,oe=!1,Ge=e)}}else{if(ll(e))throw Error(L(418));e.flags=e.flags&-4097|2,oe=!1,Ge=e}}}function Bu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Lr(e){if(e!==Ge)return!1;if(!oe)return Bu(e),oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!il(e.type,e.memoizedProps)),n&&(n=Oe)){if(ll(e))throw Zf(),Error(L(418));for(;n;)jf(e,n),n=$n(n.nextSibling)}if(Bu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Oe=$n(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Oe=null}}else Oe=Ge?$n(e.stateNode.nextSibling):null;return!0}function Zf(){for(var e=Oe;e;)e=$n(e.nextSibling)}function ei(){Oe=Ge=null,oe=!1}function cs(e){cn===null?cn=[e]:cn.push(e)}var Jm=Tn.ReactCurrentBatchConfig;function xi(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(L(309));var i=t.stateNode}if(!i)throw Error(L(147,e));var r=i,a=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===a?n.ref:(n=function(o){var l=r.refs;o===null?delete l[a]:l[a]=o},n._stringRef=a,n)}if(typeof e!="string")throw Error(L(284));if(!t._owner)throw Error(L(290,e))}return e}function Er(e,n){throw e=Object.prototype.toString.call(n),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ju(e){var n=e._init;return n(e._payload)}function Tf(e){function n(g,m){if(e){var w=g.deletions;w===null?(g.deletions=[m],g.flags|=16):w.push(m)}}function t(g,m){if(!e)return null;for(;m!==null;)n(g,m),m=m.sibling;return null}function i(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function r(g,m){return g=qn(g,m),g.index=0,g.sibling=null,g}function a(g,m,w){return g.index=w,e?(w=g.alternate,w!==null?(w=w.index,w<m?(g.flags|=2,m):w):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,m,w,k){return m===null||m.tag!==6?(m=wo(w,g.mode,k),m.return=g,m):(m=r(m,w),m.return=g,m)}function s(g,m,w,k){var P=w.type;return P===Wt?c(g,m,w.props.children,k,w.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===zn&&Ju(P)===m.type)?(k=r(m,w.props),k.ref=xi(g,m,w),k.return=g,k):(k=Yr(w.type,w.key,w.props,null,g.mode,k),k.ref=xi(g,m,w),k.return=g,k)}function u(g,m,w,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==w.containerInfo||m.stateNode.implementation!==w.implementation?(m=xo(w,g.mode,k),m.return=g,m):(m=r(m,w.children||[]),m.return=g,m)}function c(g,m,w,k,P){return m===null||m.tag!==7?(m=ht(w,g.mode,k,P),m.return=g,m):(m=r(m,w),m.return=g,m)}function d(g,m,w){if(typeof m=="string"&&m!==""||typeof m=="number")return m=wo(""+m,g.mode,w),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case yr:return w=Yr(m.type,m.key,m.props,null,g.mode,w),w.ref=xi(g,null,m),w.return=g,w;case It:return m=xo(m,g.mode,w),m.return=g,m;case zn:var k=m._init;return d(g,k(m._payload),w)}if(Ci(m)||hi(m))return m=ht(m,g.mode,w,null),m.return=g,m;Er(g,m)}return null}function h(g,m,w,k){var P=m!==null?m.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return P!==null?null:l(g,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case yr:return w.key===P?s(g,m,w,k):null;case It:return w.key===P?u(g,m,w,k):null;case zn:return P=w._init,h(g,m,P(w._payload),k)}if(Ci(w)||hi(w))return P!==null?null:c(g,m,w,k,null);Er(g,w)}return null}function p(g,m,w,k,P){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(w)||null,l(m,g,""+k,P);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case yr:return g=g.get(k.key===null?w:k.key)||null,s(m,g,k,P);case It:return g=g.get(k.key===null?w:k.key)||null,u(m,g,k,P);case zn:var S=k._init;return p(g,m,w,S(k._payload),P)}if(Ci(k)||hi(k))return g=g.get(w)||null,c(m,g,k,P,null);Er(m,k)}return null}function x(g,m,w,k){for(var P=null,S=null,I=m,M=m=0,H=null;I!==null&&M<w.length;M++){I.index>M?(H=I,I=null):H=I.sibling;var Z=h(g,I,w[M],k);if(Z===null){I===null&&(I=H);break}e&&I&&Z.alternate===null&&n(g,I),m=a(Z,m,M),S===null?P=Z:S.sibling=Z,S=Z,I=H}if(M===w.length)return t(g,I),oe&&lt(g,M),P;if(I===null){for(;M<w.length;M++)I=d(g,w[M],k),I!==null&&(m=a(I,m,M),S===null?P=I:S.sibling=I,S=I);return oe&&lt(g,M),P}for(I=i(g,I);M<w.length;M++)H=p(I,g,M,w[M],k),H!==null&&(e&&H.alternate!==null&&I.delete(H.key===null?M:H.key),m=a(H,m,M),S===null?P=H:S.sibling=H,S=H);return e&&I.forEach(function(T){return n(g,T)}),oe&&lt(g,M),P}function A(g,m,w,k){var P=hi(w);if(typeof P!="function")throw Error(L(150));if(w=P.call(w),w==null)throw Error(L(151));for(var S=P=null,I=m,M=m=0,H=null,Z=w.next();I!==null&&!Z.done;M++,Z=w.next()){I.index>M?(H=I,I=null):H=I.sibling;var T=h(g,I,Z.value,k);if(T===null){I===null&&(I=H);break}e&&I&&T.alternate===null&&n(g,I),m=a(T,m,M),S===null?P=T:S.sibling=T,S=T,I=H}if(Z.done)return t(g,I),oe&&lt(g,M),P;if(I===null){for(;!Z.done;M++,Z=w.next())Z=d(g,Z.value,k),Z!==null&&(m=a(Z,m,M),S===null?P=Z:S.sibling=Z,S=Z);return oe&&lt(g,M),P}for(I=i(g,I);!Z.done;M++,Z=w.next())Z=p(I,g,M,Z.value,k),Z!==null&&(e&&Z.alternate!==null&&I.delete(Z.key===null?M:Z.key),m=a(Z,m,M),S===null?P=Z:S.sibling=Z,S=Z);return e&&I.forEach(function(D){return n(g,D)}),oe&&lt(g,M),P}function b(g,m,w,k){if(typeof w=="object"&&w!==null&&w.type===Wt&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case yr:e:{for(var P=w.key,S=m;S!==null;){if(S.key===P){if(P=w.type,P===Wt){if(S.tag===7){t(g,S.sibling),m=r(S,w.props.children),m.return=g,g=m;break e}}else if(S.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===zn&&Ju(P)===S.type){t(g,S.sibling),m=r(S,w.props),m.ref=xi(g,S,w),m.return=g,g=m;break e}t(g,S);break}else n(g,S);S=S.sibling}w.type===Wt?(m=ht(w.props.children,g.mode,k,w.key),m.return=g,g=m):(k=Yr(w.type,w.key,w.props,null,g.mode,k),k.ref=xi(g,m,w),k.return=g,g=k)}return o(g);case It:e:{for(S=w.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===w.containerInfo&&m.stateNode.implementation===w.implementation){t(g,m.sibling),m=r(m,w.children||[]),m.return=g,g=m;break e}else{t(g,m);break}else n(g,m);m=m.sibling}m=xo(w,g.mode,k),m.return=g,g=m}return o(g);case zn:return S=w._init,b(g,m,S(w._payload),k)}if(Ci(w))return x(g,m,w,k);if(hi(w))return A(g,m,w,k);Er(g,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,m!==null&&m.tag===6?(t(g,m.sibling),m=r(m,w),m.return=g,g=m):(t(g,m),m=wo(w,g.mode,k),m.return=g,g=m),o(g)):t(g,m)}return b}var ni=Tf(!0),Df=Tf(!1),da=rt(null),fa=null,Ht=null,ds=null;function fs(){ds=Ht=fa=null}function ps(e){var n=da.current;ae(da),e._currentValue=n}function ul(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function Xt(e,n){fa=e,ds=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(De=!0),e.firstContext=null)}function tn(e){var n=e._currentValue;if(ds!==e)if(e={context:e,memoizedValue:n,next:null},Ht===null){if(fa===null)throw Error(L(308));Ht=e,fa.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return n}var dt=null;function hs(e){dt===null?dt=[e]:dt.push(e)}function _f(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,hs(n)):(t.next=r.next,r.next=t),n.interleaved=t,jn(e,i)}function jn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Bn=!1;function gs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Wn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Vn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,Y&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,jn(e,t)}return r=i.interleaved,r===null?(n.next=n,hs(i)):(n.next=r.next,r.next=n),i.interleaved=n,jn(e,t)}function Jr(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,es(e,t)}}function Uu(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,a=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};a===null?r=a=o:a=a.next=o,t=t.next}while(t!==null);a===null?r=a=n:a=a.next=n}else r=a=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function pa(e,n,t,i){var r=e.updateQueue;Bn=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var s=l,u=s.next;s.next=null,o===null?a=u:o.next=u,o=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=r.baseState;o=0,c=u=s=null,l=a;do{var h=l.lane,p=l.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,A=l;switch(h=n,p=t,A.tag){case 1:if(x=A.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=A.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=ce({},d,h);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else p={eventTime:p,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=p,s=d):c=c.next=p,o|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(s=d),r.baseState=s,r.firstBaseUpdate=u,r.lastBaseUpdate=c,n=r.shared.interleaved,n!==null){r=n;do o|=r.lane,r=r.next;while(r!==n)}else a===null&&(r.shared.lanes=0);wt|=o,e.lanes=o,e.memoizedState=d}}function Fu(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(L(191,r));r.call(i)}}}var cr={},Sn=rt(cr),Ki=rt(cr),qi=rt(cr);function ft(e){if(e===cr)throw Error(L(174));return e}function ms(e,n){switch(ne(qi,n),ne(Ki,e),ne(Sn,cr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Uo(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Uo(n,e)}ae(Sn),ne(Sn,n)}function ti(){ae(Sn),ae(Ki),ae(qi)}function zf(e){ft(qi.current);var n=ft(Sn.current),t=Uo(n,e.type);n!==t&&(ne(Ki,e),ne(Sn,t))}function ys(e){Ki.current===e&&(ae(Sn),ae(Ki))}var se=rt(0);function ha(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fo=[];function ws(){for(var e=0;e<fo.length;e++)fo[e]._workInProgressVersionPrimary=null;fo.length=0}var Ur=Tn.ReactCurrentDispatcher,po=Tn.ReactCurrentBatchConfig,yt=0,ue=null,we=null,Ae=null,ga=!1,ji=!1,er=0,Um=0;function Pe(){throw Error(L(321))}function xs(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!hn(e[t],n[t]))return!1;return!0}function vs(e,n,t,i,r,a){if(yt=a,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ur.current=e===null||e.memoizedState===null?Xm:Ym,e=t(i,r),ji){a=0;do{if(ji=!1,er=0,25<=a)throw Error(L(301));a+=1,Ae=we=null,n.updateQueue=null,Ur.current=$m,e=t(i,r)}while(ji)}if(Ur.current=ma,n=we!==null&&we.next!==null,yt=0,Ae=we=ue=null,ga=!1,n)throw Error(L(300));return e}function As(){var e=er!==0;return er=0,e}function yn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?ue.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function rn(){if(we===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var n=Ae===null?ue.memoizedState:Ae.next;if(n!==null)Ae=n,we=e;else{if(e===null)throw Error(L(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ae===null?ue.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function nr(e,n){return typeof n=="function"?n(e):n}function ho(e){var n=rn(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var i=we,r=i.baseQueue,a=t.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,t.pending=null}if(r!==null){a=r.next,i=i.baseState;var l=o=null,s=null,u=a;do{var c=u.lane;if((yt&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,o=i):s=s.next=d,ue.lanes|=c,wt|=c}u=u.next}while(u!==null&&u!==a);s===null?o=i:s.next=l,hn(i,n.memoizedState)||(De=!0),n.memoizedState=i,n.baseState=o,n.baseQueue=s,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do a=r.lane,ue.lanes|=a,wt|=a,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function go(e){var n=rn(),t=n.queue;if(t===null)throw Error(L(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,a=n.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do a=e(a,o.action),o=o.next;while(o!==r);hn(a,n.memoizedState)||(De=!0),n.memoizedState=a,n.baseQueue===null&&(n.baseState=a),t.lastRenderedState=a}return[a,i]}function Bf(){}function Jf(e,n){var t=ue,i=rn(),r=n(),a=!hn(i.memoizedState,r);if(a&&(i.memoizedState=r,De=!0),i=i.queue,Ss(Of.bind(null,t,i,e),[e]),i.getSnapshot!==n||a||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,tr(9,Ff.bind(null,t,i,r,n),void 0,null),Se===null)throw Error(L(349));yt&30||Uf(t,n,r)}return r}function Uf(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ff(e,n,t,i){n.value=t,n.getSnapshot=i,Gf(n)&&Xf(e)}function Of(e,n,t){return t(function(){Gf(n)&&Xf(e)})}function Gf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!hn(e,t)}catch{return!0}}function Xf(e){var n=jn(e,1);n!==null&&pn(n,e,1,-1)}function Ou(e){var n=yn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nr,lastRenderedState:e},n.queue=e,e=e.dispatch=Gm.bind(null,ue,e),[n.memoizedState,e]}function tr(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=ue.updateQueue,n===null?(n={lastEffect:null,stores:null},ue.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Yf(){return rn().memoizedState}function Fr(e,n,t,i){var r=yn();ue.flags|=e,r.memoizedState=tr(1|n,t,void 0,i===void 0?null:i)}function Ma(e,n,t,i){var r=rn();i=i===void 0?null:i;var a=void 0;if(we!==null){var o=we.memoizedState;if(a=o.destroy,i!==null&&xs(i,o.deps)){r.memoizedState=tr(n,t,a,i);return}}ue.flags|=e,r.memoizedState=tr(1|n,t,a,i)}function Gu(e,n){return Fr(8390656,8,e,n)}function Ss(e,n){return Ma(2048,8,e,n)}function $f(e,n){return Ma(4,2,e,n)}function Vf(e,n){return Ma(4,4,e,n)}function Qf(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kf(e,n,t){return t=t!=null?t.concat([e]):null,Ma(4,4,Qf.bind(null,n,e),t)}function ks(){}function qf(e,n){var t=rn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&xs(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function ep(e,n){var t=rn();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&xs(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function np(e,n,t){return yt&21?(hn(t,n)||(t=of(),ue.lanes|=t,wt|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=t)}function Fm(e,n){var t=V;V=t!==0&&4>t?t:4,e(!0);var i=po.transition;po.transition={};try{e(!1),n()}finally{V=t,po.transition=i}}function tp(){return rn().memoizedState}function Om(e,n,t){var i=Kn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},ip(e))rp(n,t);else if(t=_f(e,n,t,i),t!==null){var r=Re();pn(t,e,i,r),ap(t,n,i)}}function Gm(e,n,t){var i=Kn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(ip(e))rp(n,r);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=n.lastRenderedReducer,a!==null))try{var o=n.lastRenderedState,l=a(o,t);if(r.hasEagerState=!0,r.eagerState=l,hn(l,o)){var s=n.interleaved;s===null?(r.next=r,hs(n)):(r.next=s.next,s.next=r),n.interleaved=r;return}}catch{}finally{}t=_f(e,n,r,i),t!==null&&(r=Re(),pn(t,e,i,r),ap(t,n,i))}}function ip(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function rp(e,n){ji=ga=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ap(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,es(e,t)}}var ma={readContext:tn,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},Xm={readContext:tn,useCallback:function(e,n){return yn().memoizedState=[e,n===void 0?null:n],e},useContext:tn,useEffect:Gu,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fr(4194308,4,Qf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fr(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fr(4,2,e,n)},useMemo:function(e,n){var t=yn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=yn();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Om.bind(null,ue,e),[i.memoizedState,e]},useRef:function(e){var n=yn();return e={current:e},n.memoizedState=e},useState:Ou,useDebugValue:ks,useDeferredValue:function(e){return yn().memoizedState=e},useTransition:function(){var e=Ou(!1),n=e[0];return e=Fm.bind(null,e[1]),yn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=ue,r=yn();if(oe){if(t===void 0)throw Error(L(407));t=t()}else{if(t=n(),Se===null)throw Error(L(349));yt&30||Uf(i,n,t)}r.memoizedState=t;var a={value:t,getSnapshot:n};return r.queue=a,Gu(Of.bind(null,i,a,e),[e]),i.flags|=2048,tr(9,Ff.bind(null,i,a,t,n),void 0,null),t},useId:function(){var e=yn(),n=Se.identifierPrefix;if(oe){var t=In,i=Nn;t=(i&~(1<<32-fn(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=er++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Um++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Ym={readContext:tn,useCallback:qf,useContext:tn,useEffect:Ss,useImperativeHandle:Kf,useInsertionEffect:$f,useLayoutEffect:Vf,useMemo:ep,useReducer:ho,useRef:Yf,useState:function(){return ho(nr)},useDebugValue:ks,useDeferredValue:function(e){var n=rn();return np(n,we.memoizedState,e)},useTransition:function(){var e=ho(nr)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Bf,useSyncExternalStore:Jf,useId:tp,unstable_isNewReconciler:!1},$m={readContext:tn,useCallback:qf,useContext:tn,useEffect:Ss,useImperativeHandle:Kf,useInsertionEffect:$f,useLayoutEffect:Vf,useMemo:ep,useReducer:go,useRef:Yf,useState:function(){return go(nr)},useDebugValue:ks,useDeferredValue:function(e){var n=rn();return we===null?n.memoizedState=e:np(n,we.memoizedState,e)},useTransition:function(){var e=go(nr)[0],n=rn().memoizedState;return[e,n]},useMutableSource:Bf,useSyncExternalStore:Jf,useId:tp,unstable_isNewReconciler:!1};function sn(e,n){if(e&&e.defaultProps){n=ce({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function cl(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:ce({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ja={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=Re(),r=Kn(e),a=Wn(i,r);a.payload=n,t!=null&&(a.callback=t),n=Vn(e,a,r),n!==null&&(pn(n,e,r,i),Jr(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=Re(),r=Kn(e),a=Wn(i,r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Vn(e,a,r),n!==null&&(pn(n,e,r,i),Jr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Re(),i=Kn(e),r=Wn(t,i);r.tag=2,n!=null&&(r.callback=n),n=Vn(e,r,i),n!==null&&(pn(n,e,i,t),Jr(n,e,i))}};function Xu(e,n,t,i,r,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,o):n.prototype&&n.prototype.isPureReactComponent?!Yi(t,i)||!Yi(r,a):!0}function op(e,n,t){var i=!1,r=tt,a=n.contextType;return typeof a=="object"&&a!==null?a=tn(a):(r=He(n)?gt:Ne.current,i=n.contextTypes,a=(i=i!=null)?qt(e,r):tt),n=new n(t,a),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=ja,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),n}function Yu(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&ja.enqueueReplaceState(n,n.state,null)}function dl(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},gs(e);var a=n.contextType;typeof a=="object"&&a!==null?r.context=tn(a):(a=He(n)?gt:Ne.current,r.context=qt(e,a)),r.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(cl(e,n,a,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&ja.enqueueReplaceState(r,r.state,null),pa(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ii(e,n){try{var t="",i=n;do t+=kg(i),i=i.return;while(i);var r=t}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:n,stack:r,digest:null}}function mo(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function fl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Vm=typeof WeakMap=="function"?WeakMap:Map;function lp(e,n,t){t=Wn(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){wa||(wa=!0,Sl=i),fl(e,n)},t}function sp(e,n,t){t=Wn(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){fl(e,n)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){fl(e,n),typeof i!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})}),t}function $u(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new Vm;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=cy.bind(null,e,n,t),n.then(e,e))}function Vu(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Qu(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Wn(-1,1),n.tag=2,Vn(t,n,1))),t.lanes|=1),e)}var Qm=Tn.ReactCurrentOwner,De=!1;function We(e,n,t,i){n.child=e===null?Df(n,null,t,i):ni(n,e.child,t,i)}function Ku(e,n,t,i,r){t=t.render;var a=n.ref;return Xt(n,r),i=vs(e,n,t,i,a,r),t=As(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Zn(e,n,r)):(oe&&t&&ss(n),n.flags|=1,We(e,n,i,r),n.child)}function qu(e,n,t,i,r){if(e===null){var a=t.type;return typeof a=="function"&&!Ws(a)&&a.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=a,up(e,n,a,i,r)):(e=Yr(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(a=e.child,!(e.lanes&r)){var o=a.memoizedProps;if(t=t.compare,t=t!==null?t:Yi,t(o,i)&&e.ref===n.ref)return Zn(e,n,r)}return n.flags|=1,e=qn(a,i),e.ref=n.ref,e.return=n,n.child=e}function up(e,n,t,i,r){if(e!==null){var a=e.memoizedProps;if(Yi(a,i)&&e.ref===n.ref)if(De=!1,n.pendingProps=i=a,(e.lanes&r)!==0)e.flags&131072&&(De=!0);else return n.lanes=e.lanes,Zn(e,n,r)}return pl(e,n,t,i,r)}function cp(e,n,t){var i=n.pendingProps,r=i.children,a=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Bt,Fe),Fe|=t;else{if(!(t&1073741824))return e=a!==null?a.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,ne(Bt,Fe),Fe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:t,ne(Bt,Fe),Fe|=i}else a!==null?(i=a.baseLanes|t,n.memoizedState=null):i=t,ne(Bt,Fe),Fe|=i;return We(e,n,r,t),n.child}function dp(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function pl(e,n,t,i,r){var a=He(t)?gt:Ne.current;return a=qt(n,a),Xt(n,r),t=vs(e,n,t,i,a,r),i=As(),e!==null&&!De?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Zn(e,n,r)):(oe&&i&&ss(n),n.flags|=1,We(e,n,t,r),n.child)}function ec(e,n,t,i,r){if(He(t)){var a=!0;sa(n)}else a=!1;if(Xt(n,r),n.stateNode===null)Or(e,n),op(n,t,i),dl(n,t,i,r),i=!0;else if(e===null){var o=n.stateNode,l=n.memoizedProps;o.props=l;var s=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=He(t)?gt:Ne.current,u=qt(n,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==i||s!==u)&&Yu(n,o,i,u),Bn=!1;var h=n.memoizedState;o.state=h,pa(n,i,o,r),s=n.memoizedState,l!==i||h!==s||_e.current||Bn?(typeof c=="function"&&(cl(n,t,c,i),s=n.memoizedState),(l=Bn||Xu(n,t,l,i,h,s,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(n.flags|=4194308)):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=s),o.props=i,o.state=s,o.context=u,i=l):(typeof o.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{o=n.stateNode,Hf(e,n),l=n.memoizedProps,u=n.type===n.elementType?l:sn(n.type,l),o.props=u,d=n.pendingProps,h=o.context,s=t.contextType,typeof s=="object"&&s!==null?s=tn(s):(s=He(t)?gt:Ne.current,s=qt(n,s));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==s)&&Yu(n,o,i,s),Bn=!1,h=n.memoizedState,o.state=h,pa(n,i,o,r);var x=n.memoizedState;l!==d||h!==x||_e.current||Bn?(typeof p=="function"&&(cl(n,t,p,i),x=n.memoizedState),(u=Bn||Xu(n,t,u,i,h,x,s)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,s)),typeof o.componentDidUpdate=="function"&&(n.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=x),o.props=i,o.state=x,o.context=s,i=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(n.flags|=1024),i=!1)}return hl(e,n,t,i,a,r)}function hl(e,n,t,i,r,a){dp(e,n);var o=(n.flags&128)!==0;if(!i&&!o)return r&&Hu(n,t,!1),Zn(e,n,a);i=n.stateNode,Qm.current=n;var l=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&o?(n.child=ni(n,e.child,null,a),n.child=ni(n,null,l,a)):We(e,n,l,a),n.memoizedState=i.state,r&&Hu(n,t,!0),n.child}function fp(e){var n=e.stateNode;n.pendingContext?_u(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_u(e,n.context,!1),ms(e,n.containerInfo)}function nc(e,n,t,i,r){return ei(),cs(r),n.flags|=256,We(e,n,t,i),n.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function pp(e,n,t){var i=n.pendingProps,r=se.current,a=!1,o=(n.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(r&2)!==0),l?(a=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),ne(se,r&1),e===null)return sl(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(o=i.children,e=i.fallback,a?(i=n.mode,a=n.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Da(o,i,0,null),e=ht(e,i,t,null),a.return=n,e.return=n,a.sibling=e,n.child=a,n.child.memoizedState=ml(t),n.memoizedState=gl,e):bs(n,o));if(r=e.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Km(e,n,o,i,l,r,t);if(a){a=i.fallback,o=n.mode,r=e.child,l=r.sibling;var s={mode:"hidden",children:i.children};return!(o&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=s,n.deletions=null):(i=qn(r,s),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?a=qn(l,a):(a=ht(a,o,t,null),a.flags|=2),a.return=n,i.return=n,i.sibling=a,n.child=i,i=a,a=n.child,o=e.child.memoizedState,o=o===null?ml(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~t,n.memoizedState=gl,i}return a=e.child,e=a.sibling,i=qn(a,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function bs(e,n){return n=Da({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Nr(e,n,t,i){return i!==null&&cs(i),ni(n,e.child,null,t),e=bs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Km(e,n,t,i,r,a,o){if(t)return n.flags&256?(n.flags&=-257,i=mo(Error(L(422))),Nr(e,n,o,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(a=i.fallback,r=n.mode,i=Da({mode:"visible",children:i.children},r,0,null),a=ht(a,r,o,null),a.flags|=2,i.return=n,a.return=n,i.sibling=a,n.child=i,n.mode&1&&ni(n,e.child,null,o),n.child.memoizedState=ml(o),n.memoizedState=gl,a);if(!(n.mode&1))return Nr(e,n,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,a=Error(L(419)),i=mo(a,i,void 0),Nr(e,n,o,i)}if(l=(o&e.childLanes)!==0,De||l){if(i=Se,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,jn(e,r),pn(i,e,r,-1))}return Is(),i=mo(Error(L(421))),Nr(e,n,o,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=dy.bind(null,e),r._reactRetry=n,null):(e=a.treeContext,Oe=$n(r.nextSibling),Ge=n,oe=!0,cn=null,e!==null&&(Ve[Qe++]=Nn,Ve[Qe++]=In,Ve[Qe++]=mt,Nn=e.id,In=e.overflow,mt=n),n=bs(n,i.children),n.flags|=4096,n)}function tc(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),ul(e.return,n,t)}function yo(e,n,t,i,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(a.isBackwards=n,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=t,a.tailMode=r)}function hp(e,n,t){var i=n.pendingProps,r=i.revealOrder,a=i.tail;if(We(e,n,i.children,t),i=se.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,t,n);else if(e.tag===19)tc(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(ne(se,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&ha(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),yo(n,!1,r,t,a);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&ha(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}yo(n,!0,t,null,a);break;case"together":yo(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Or(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Zn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),wt|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(L(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function qm(e,n,t){switch(n.tag){case 3:fp(n),ei();break;case 5:zf(n);break;case 1:He(n.type)&&sa(n);break;case 4:ms(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;ne(da,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(ne(se,se.current&1),n.flags|=128,null):t&n.child.childLanes?pp(e,n,t):(ne(se,se.current&1),e=Zn(e,n,t),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return hp(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ne(se,se.current),i)break;return null;case 22:case 23:return n.lanes=0,cp(e,n,t)}return Zn(e,n,t)}var gp,yl,mp,yp;gp=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};yl=function(){};mp=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,ft(Sn.current);var a=null;switch(t){case"input":r=Ho(e,r),i=Ho(e,i),a=[];break;case"select":r=ce({},r,{value:void 0}),i=ce({},i,{value:void 0}),a=[];break;case"textarea":r=Jo(e,r),i=Jo(e,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=oa)}Fo(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(o in l)l.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bi.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var s=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in s)s.hasOwnProperty(o)&&l[o]!==s[o]&&(t||(t={}),t[o]=s[o])}else t||(a||(a=[]),a.push(u,t)),t=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&re("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}t&&(a=a||[]).push("style",t);var u=a;(n.updateQueue=u)&&(n.flags|=4)}};yp=function(e,n,t,i){t!==i&&(n.flags|=4)};function vi(e,n){if(!oe)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function ey(e,n,t){var i=n.pendingProps;switch(us(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return He(n.type)&&la(),Le(n),null;case 3:return i=n.stateNode,ti(),ae(_e),ae(Ne),ws(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Lr(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,cn!==null&&(Cl(cn),cn=null))),yl(e,n),Le(n),null;case 5:ys(n);var r=ft(qi.current);if(t=n.type,e!==null&&n.stateNode!=null)mp(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(L(166));return Le(n),null}if(e=ft(Sn.current),Lr(n)){i=n.stateNode,t=n.type;var a=n.memoizedProps;switch(i[xn]=n,i[Qi]=a,e=(n.mode&1)!==0,t){case"dialog":re("cancel",i),re("close",i);break;case"iframe":case"object":case"embed":re("load",i);break;case"video":case"audio":for(r=0;r<Li.length;r++)re(Li[r],i);break;case"source":re("error",i);break;case"img":case"image":case"link":re("error",i),re("load",i);break;case"details":re("toggle",i);break;case"input":du(i,a),re("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},re("invalid",i);break;case"textarea":pu(i,a),re("invalid",i)}Fo(t,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="children"?typeof l=="string"?i.textContent!==l&&(a.suppressHydrationWarning!==!0&&Pr(i.textContent,l,e),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&Pr(i.textContent,l,e),r=["children",""+l]):Bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&re("scroll",i)}switch(t){case"input":wr(i),fu(i,a,!0);break;case"textarea":wr(i),hu(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=oa)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Fd(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=o.createElement(t,{is:i.is}):(e=o.createElement(t),t==="select"&&(o=e,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):e=o.createElementNS(e,t),e[xn]=n,e[Qi]=i,gp(e,n,!1,!1),n.stateNode=e;e:{switch(o=Oo(t,i),t){case"dialog":re("cancel",e),re("close",e),r=i;break;case"iframe":case"object":case"embed":re("load",e),r=i;break;case"video":case"audio":for(r=0;r<Li.length;r++)re(Li[r],e);r=i;break;case"source":re("error",e),r=i;break;case"img":case"image":case"link":re("error",e),re("load",e),r=i;break;case"details":re("toggle",e),r=i;break;case"input":du(e,i),r=Ho(e,i),re("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=ce({},i,{value:void 0}),re("invalid",e);break;case"textarea":pu(e,i),r=Jo(e,i),re("invalid",e);break;default:r=i}Fo(t,r),l=r;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Xd(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Od(e,s)):a==="children"?typeof s=="string"?(t!=="textarea"||s!=="")&&Ji(e,s):typeof s=="number"&&Ji(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Bi.hasOwnProperty(a)?s!=null&&a==="onScroll"&&re("scroll",e):s!=null&&Yl(e,a,s,o))}switch(t){case"input":wr(e),fu(e,i,!1);break;case"textarea":wr(e),hu(e);break;case"option":i.value!=null&&e.setAttribute("value",""+nt(i.value));break;case"select":e.multiple=!!i.multiple,a=i.value,a!=null?Ut(e,!!i.multiple,a,!1):i.defaultValue!=null&&Ut(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=oa)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Le(n),null;case 6:if(e&&n.stateNode!=null)yp(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(L(166));if(t=ft(qi.current),ft(Sn.current),Lr(n)){if(i=n.stateNode,t=n.memoizedProps,i[xn]=n,(a=i.nodeValue!==t)&&(e=Ge,e!==null))switch(e.tag){case 3:Pr(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Pr(i.nodeValue,t,(e.mode&1)!==0)}a&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[xn]=n,n.stateNode=i}return Le(n),null;case 13:if(ae(se),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Oe!==null&&n.mode&1&&!(n.flags&128))Zf(),ei(),n.flags|=98560,a=!1;else if(a=Lr(n),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(L(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(L(317));a[xn]=n}else ei(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Le(n),a=!1}else cn!==null&&(Cl(cn),cn=null),a=!0;if(!a)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||se.current&1?xe===0&&(xe=3):Is())),n.updateQueue!==null&&(n.flags|=4),Le(n),null);case 4:return ti(),yl(e,n),e===null&&$i(n.stateNode.containerInfo),Le(n),null;case 10:return ps(n.type._context),Le(n),null;case 17:return He(n.type)&&la(),Le(n),null;case 19:if(ae(se),a=n.memoizedState,a===null)return Le(n),null;if(i=(n.flags&128)!==0,o=a.rendering,o===null)if(i)vi(a,!1);else{if(xe!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(o=ha(e),o!==null){for(n.flags|=128,vi(a,!1),i=o.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)a=t,e=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,e=o.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ne(se,se.current&1|2),n.child}e=e.sibling}a.tail!==null&&pe()>ri&&(n.flags|=128,i=!0,vi(a,!1),n.lanes=4194304)}else{if(!i)if(e=ha(o),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!oe)return Le(n),null}else 2*pe()-a.renderingStartTime>ri&&t!==1073741824&&(n.flags|=128,i=!0,vi(a,!1),n.lanes=4194304);a.isBackwards?(o.sibling=n.child,n.child=o):(t=a.last,t!==null?t.sibling=o:n.child=o,a.last=o)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=pe(),n.sibling=null,t=se.current,ne(se,i?t&1|2:t&1),n):(Le(n),null);case 22:case 23:return Ns(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?Fe&1073741824&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),null;case 24:return null;case 25:return null}throw Error(L(156,n.tag))}function ny(e,n){switch(us(n),n.tag){case 1:return He(n.type)&&la(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ti(),ae(_e),ae(Ne),ws(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return ys(n),null;case 13:if(ae(se),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(L(340));ei()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(se),null;case 4:return ti(),null;case 10:return ps(n.type._context),null;case 22:case 23:return Ns(),null;case 24:return null;default:return null}}var Ir=!1,Ee=!1,ty=typeof WeakSet=="function"?WeakSet:Set,j=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){de(e,n,i)}else t.current=null}function wl(e,n,t){try{t()}catch(i){de(e,n,i)}}var ic=!1;function iy(e,n){if(nl=ia,e=Sf(),ls(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{t.nodeType,a.nodeType}catch{t=null;break e}var o=0,l=-1,s=-1,u=0,c=0,d=e,h=null;n:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(l=o+r),d!==a||i!==0&&d.nodeType!==3||(s=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break n;if(h===t&&++u===r&&(l=o),h===a&&++c===i&&(s=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=l===-1||s===-1?null:{start:l,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(tl={focusedElem:e,selectionRange:t},ia=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var x=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var A=x.memoizedProps,b=x.memoizedState,g=n.stateNode,m=g.getSnapshotBeforeUpdate(n.elementType===n.type?A:sn(n.type,A),b);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var w=n.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(k){de(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return x=ic,ic=!1,x}function Zi(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var a=r.destroy;r.destroy=void 0,a!==void 0&&wl(n,t,a)}r=r.next}while(r!==i)}}function Za(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function xl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function wp(e){var n=e.alternate;n!==null&&(e.alternate=null,wp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[xn],delete n[Qi],delete n[al],delete n[Hm],delete n[zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xp(e){return e.tag===5||e.tag===3||e.tag===4}function rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=oa));else if(i!==4&&(e=e.child,e!==null))for(vl(e,n,t),e=e.sibling;e!==null;)vl(e,n,t),e=e.sibling}function Al(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Al(e,n,t),e=e.sibling;e!==null;)Al(e,n,t),e=e.sibling}var ke=null,un=!1;function _n(e,n,t){for(t=t.child;t!==null;)vp(e,n,t),t=t.sibling}function vp(e,n,t){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(La,t)}catch{}switch(t.tag){case 5:Ee||zt(t,n);case 6:var i=ke,r=un;ke=null,_n(e,n,t),ke=i,un=r,ke!==null&&(un?(e=ke,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ke.removeChild(t.stateNode));break;case 18:ke!==null&&(un?(e=ke,t=t.stateNode,e.nodeType===8?uo(e.parentNode,t):e.nodeType===1&&uo(e,t),Gi(e)):uo(ke,t.stateNode));break;case 4:i=ke,r=un,ke=t.stateNode.containerInfo,un=!0,_n(e,n,t),ke=i,un=r;break;case 0:case 11:case 14:case 15:if(!Ee&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&wl(t,n,o),r=r.next}while(r!==i)}_n(e,n,t);break;case 1:if(!Ee&&(zt(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(l){de(t,n,l)}_n(e,n,t);break;case 21:_n(e,n,t);break;case 22:t.mode&1?(Ee=(i=Ee)||t.memoizedState!==null,_n(e,n,t),Ee=i):_n(e,n,t);break;default:_n(e,n,t)}}function ac(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ty),n.forEach(function(i){var r=fy.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ln(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var a=e,o=n,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,un=!1;break e;case 3:ke=l.stateNode.containerInfo,un=!0;break e;case 4:ke=l.stateNode.containerInfo,un=!0;break e}l=l.return}if(ke===null)throw Error(L(160));vp(a,o,r),ke=null,un=!1;var s=r.alternate;s!==null&&(s.return=null),r.return=null}catch(u){de(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ap(n,e),n=n.sibling}function Ap(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ln(n,e),mn(e),i&4){try{Zi(3,e,e.return),Za(3,e)}catch(A){de(e,e.return,A)}try{Zi(5,e,e.return)}catch(A){de(e,e.return,A)}}break;case 1:ln(n,e),mn(e),i&512&&t!==null&&zt(t,t.return);break;case 5:if(ln(n,e),mn(e),i&512&&t!==null&&zt(t,t.return),e.flags&32){var r=e.stateNode;try{Ji(r,"")}catch(A){de(e,e.return,A)}}if(i&4&&(r=e.stateNode,r!=null)){var a=e.memoizedProps,o=t!==null?t.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Jd(r,a),Oo(l,o);var u=Oo(l,a);for(o=0;o<s.length;o+=2){var c=s[o],d=s[o+1];c==="style"?Xd(r,d):c==="dangerouslySetInnerHTML"?Od(r,d):c==="children"?Ji(r,d):Yl(r,c,d,u)}switch(l){case"input":zo(r,a);break;case"textarea":Ud(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Ut(r,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?Ut(r,!!a.multiple,a.defaultValue,!0):Ut(r,!!a.multiple,a.multiple?[]:"",!1))}r[Qi]=a}catch(A){de(e,e.return,A)}}break;case 6:if(ln(n,e),mn(e),i&4){if(e.stateNode===null)throw Error(L(162));r=e.stateNode,a=e.memoizedProps;try{r.nodeValue=a}catch(A){de(e,e.return,A)}}break;case 3:if(ln(n,e),mn(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Gi(n.containerInfo)}catch(A){de(e,e.return,A)}break;case 4:ln(n,e),mn(e);break;case 13:ln(n,e),mn(e),r=e.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Ls=pe())),i&4&&ac(e);break;case 22:if(c=t!==null&&t.memoizedState!==null,e.mode&1?(Ee=(u=Ee)||c,ln(n,e),Ee=u):ln(n,e),mn(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(j=e,c=e.child;c!==null;){for(d=j=c;j!==null;){switch(h=j,p=h.child,h.tag){case 0:case 11:case 14:case 15:Zi(4,h,h.return);break;case 1:zt(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{n=i,x.props=n.memoizedProps,x.state=n.memoizedState,x.componentWillUnmount()}catch(A){de(i,t,A)}}break;case 5:zt(h,h.return);break;case 22:if(h.memoizedState!==null){lc(d);continue}}p!==null?(p.return=h,j=p):lc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Gd("display",o))}catch(A){de(e,e.return,A)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(A){de(e,e.return,A)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ln(n,e),mn(e),i&4&&ac(e);break;case 21:break;default:ln(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(xp(t)){var i=t;break e}t=t.return}throw Error(L(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ji(r,""),i.flags&=-33);var a=rc(e);Al(e,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,l=rc(e);vl(e,l,o);break;default:throw Error(L(161))}}catch(s){de(e,e.return,s)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ry(e,n,t){j=e,Sp(e)}function Sp(e,n,t){for(var i=(e.mode&1)!==0;j!==null;){var r=j,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ir;if(!o){var l=r.alternate,s=l!==null&&l.memoizedState!==null||Ee;l=Ir;var u=Ee;if(Ir=o,(Ee=s)&&!u)for(j=r;j!==null;)o=j,s=o.child,o.tag===22&&o.memoizedState!==null?sc(r):s!==null?(s.return=o,j=s):sc(r);for(;a!==null;)j=a,Sp(a),a=a.sibling;j=r,Ir=l,Ee=u}oc(e)}else r.subtreeFlags&8772&&a!==null?(a.return=r,j=a):oc(e)}}function oc(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ee||Za(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!Ee)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:sn(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=n.updateQueue;a!==null&&Fu(n,a,i);break;case 3:var o=n.updateQueue;if(o!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Fu(n,o,t)}break;case 5:var l=n.stateNode;if(t===null&&n.flags&4){t=l;var s=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&t.focus();break;case"img":s.src&&(t.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Gi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ee||n.flags&512&&xl(n)}catch(h){de(n,n.return,h)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function lc(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function sc(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Za(4,n)}catch(s){de(n,t,s)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(s){de(n,r,s)}}var a=n.return;try{xl(n)}catch(s){de(n,a,s)}break;case 5:var o=n.return;try{xl(n)}catch(s){de(n,o,s)}}}catch(s){de(n,n.return,s)}if(n===e){j=null;break}var l=n.sibling;if(l!==null){l.return=n.return,j=l;break}j=n.return}}var ay=Math.ceil,ya=Tn.ReactCurrentDispatcher,Cs=Tn.ReactCurrentOwner,en=Tn.ReactCurrentBatchConfig,Y=0,Se=null,me=null,be=0,Fe=0,Bt=rt(0),xe=0,ir=null,wt=0,Ta=0,Ps=0,Ti=null,Te=null,Ls=0,ri=1/0,Ln=null,wa=!1,Sl=null,Qn=null,Wr=!1,On=null,xa=0,Di=0,kl=null,Gr=-1,Xr=0;function Re(){return Y&6?pe():Gr!==-1?Gr:Gr=pe()}function Kn(e){return e.mode&1?Y&2&&be!==0?be&-be:Jm.transition!==null?(Xr===0&&(Xr=of()),Xr):(e=V,e!==0||(e=window.event,e=e===void 0?16:pf(e.type)),e):1}function pn(e,n,t,i){if(50<Di)throw Di=0,kl=null,Error(L(185));lr(e,t,i),(!(Y&2)||e!==Se)&&(e===Se&&(!(Y&2)&&(Ta|=t),xe===4&&Un(e,be)),ze(e,i),t===1&&Y===0&&!(n.mode&1)&&(ri=pe()+500,Ra&&at()))}function ze(e,n){var t=e.callbackNode;Jg(e,n);var i=ta(e,e===Se?be:0);if(i===0)t!==null&&yu(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&yu(t),n===1)e.tag===0?Bm(uc.bind(null,e)):Rf(uc.bind(null,e)),Dm(function(){!(Y&6)&&at()}),t=null;else{switch(lf(i)){case 1:t=ql;break;case 4:t=rf;break;case 16:t=na;break;case 536870912:t=af;break;default:t=na}t=Ip(t,kp.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kp(e,n){if(Gr=-1,Xr=0,Y&6)throw Error(L(327));var t=e.callbackNode;if(Yt()&&e.callbackNode!==t)return null;var i=ta(e,e===Se?be:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=va(e,i);else{n=i;var r=Y;Y|=2;var a=Cp();(Se!==e||be!==n)&&(Ln=null,ri=pe()+500,pt(e,n));do try{sy();break}catch(l){bp(e,l)}while(!0);fs(),ya.current=a,Y=r,me!==null?n=0:(Se=null,be=0,n=xe)}if(n!==0){if(n===2&&(r=Vo(e),r!==0&&(i=r,n=bl(e,r))),n===1)throw t=ir,pt(e,0),Un(e,i),ze(e,pe()),t;if(n===6)Un(e,i);else{if(r=e.current.alternate,!(i&30)&&!oy(r)&&(n=va(e,i),n===2&&(a=Vo(e),a!==0&&(i=a,n=bl(e,a))),n===1))throw t=ir,pt(e,0),Un(e,i),ze(e,pe()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(L(345));case 2:st(e,Te,Ln);break;case 3:if(Un(e,i),(i&130023424)===i&&(n=Ls+500-pe(),10<n)){if(ta(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){Re(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=rl(st.bind(null,e,Te,Ln),n);break}st(e,Te,Ln);break;case 4:if(Un(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var o=31-fn(i);a=1<<o,o=n[o],o>r&&(r=o),i&=~a}if(i=r,i=pe()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ay(i/1960))-i,10<i){e.timeoutHandle=rl(st.bind(null,e,Te,Ln),i);break}st(e,Te,Ln);break;case 5:st(e,Te,Ln);break;default:throw Error(L(329))}}}return ze(e,pe()),e.callbackNode===t?kp.bind(null,e):null}function bl(e,n){var t=Ti;return e.current.memoizedState.isDehydrated&&(pt(e,n).flags|=256),e=va(e,n),e!==2&&(n=Te,Te=t,n!==null&&Cl(n)),e}function Cl(e){Te===null?Te=e:Te.push.apply(Te,e)}function oy(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],a=r.getSnapshot;r=r.value;try{if(!hn(a(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n){for(n&=~Ps,n&=~Ta,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-fn(n),i=1<<t;e[t]=-1,n&=~i}}function uc(e){if(Y&6)throw Error(L(327));Yt();var n=ta(e,0);if(!(n&1))return ze(e,pe()),null;var t=va(e,n);if(e.tag!==0&&t===2){var i=Vo(e);i!==0&&(n=i,t=bl(e,i))}if(t===1)throw t=ir,pt(e,0),Un(e,n),ze(e,pe()),t;if(t===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,st(e,Te,Ln),ze(e,pe()),null}function Es(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(ri=pe()+500,Ra&&at())}}function xt(e){On!==null&&On.tag===0&&!(Y&6)&&Yt();var n=Y;Y|=1;var t=en.transition,i=V;try{if(en.transition=null,V=1,e)return e()}finally{V=i,en.transition=t,Y=n,!(Y&6)&&at()}}function Ns(){Fe=Bt.current,ae(Bt)}function pt(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Tm(t)),me!==null)for(t=me.return;t!==null;){var i=t;switch(us(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&la();break;case 3:ti(),ae(_e),ae(Ne),ws();break;case 5:ys(i);break;case 4:ti();break;case 13:ae(se);break;case 19:ae(se);break;case 10:ps(i.type._context);break;case 22:case 23:Ns()}t=t.return}if(Se=e,me=e=qn(e.current,null),be=Fe=n,xe=0,ir=null,Ps=Ta=wt=0,Te=Ti=null,dt!==null){for(n=0;n<dt.length;n++)if(t=dt[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,a=t.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}t.pending=i}dt=null}return e}function bp(e,n){do{var t=me;try{if(fs(),Ur.current=ma,ga){for(var i=ue.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ga=!1}if(yt=0,Ae=we=ue=null,ji=!1,er=0,Cs.current=null,t===null||t.return===null){xe=1,ir=n,me=null;break}e:{var a=e,o=t.return,l=t,s=n;if(n=be,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Vu(o);if(p!==null){p.flags&=-257,Qu(p,o,l,a,n),p.mode&1&&$u(a,u,n),n=p,s=u;var x=n.updateQueue;if(x===null){var A=new Set;A.add(s),n.updateQueue=A}else x.add(s);break e}else{if(!(n&1)){$u(a,u,n),Is();break e}s=Error(L(426))}}else if(oe&&l.mode&1){var b=Vu(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qu(b,o,l,a,n),cs(ii(s,l));break e}}a=s=ii(s,l),xe!==4&&(xe=2),Ti===null?Ti=[a]:Ti.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,n&=-n,a.lanes|=n;var g=lp(a,s,n);Uu(a,g);break e;case 1:l=s;var m=a.type,w=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Qn===null||!Qn.has(w)))){a.flags|=65536,n&=-n,a.lanes|=n;var k=sp(a,l,n);Uu(a,k);break e}}a=a.return}while(a!==null)}Lp(t)}catch(P){n=P,me===t&&t!==null&&(me=t=t.return);continue}break}while(!0)}function Cp(){var e=ya.current;return ya.current=ma,e===null?ma:e}function Is(){(xe===0||xe===3||xe===2)&&(xe=4),Se===null||!(wt&268435455)&&!(Ta&268435455)||Un(Se,be)}function va(e,n){var t=Y;Y|=2;var i=Cp();(Se!==e||be!==n)&&(Ln=null,pt(e,n));do try{ly();break}catch(r){bp(e,r)}while(!0);if(fs(),Y=t,ya.current=i,me!==null)throw Error(L(261));return Se=null,be=0,xe}function ly(){for(;me!==null;)Pp(me)}function sy(){for(;me!==null&&!Mg();)Pp(me)}function Pp(e){var n=Np(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,n===null?Lp(e):me=n,Cs.current=null}function Lp(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=ny(t,n),t!==null){t.flags&=32767,me=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xe=6,me=null;return}}else if(t=ey(t,n,Fe),t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);xe===0&&(xe=5)}function st(e,n,t){var i=V,r=en.transition;try{en.transition=null,V=1,uy(e,n,t,i)}finally{en.transition=r,V=i}return null}function uy(e,n,t,i){do Yt();while(On!==null);if(Y&6)throw Error(L(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var a=t.lanes|t.childLanes;if(Ug(e,a),e===Se&&(me=Se=null,be=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Wr||(Wr=!0,Ip(na,function(){return Yt(),null})),a=(t.flags&15990)!==0,t.subtreeFlags&15990||a){a=en.transition,en.transition=null;var o=V;V=1;var l=Y;Y|=4,Cs.current=null,iy(e,t),Ap(t,e),Nm(tl),ia=!!nl,tl=nl=null,e.current=t,ry(t),jg(),Y=l,V=o,en.transition=a}else e.current=t;if(Wr&&(Wr=!1,On=e,xa=r),a=e.pendingLanes,a===0&&(Qn=null),Dg(t.stateNode),ze(e,pe()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(wa)throw wa=!1,e=Sl,Sl=null,e;return xa&1&&e.tag!==0&&Yt(),a=e.pendingLanes,a&1?e===kl?Di++:(Di=0,kl=e):Di=0,at(),null}function Yt(){if(On!==null){var e=lf(xa),n=en.transition,t=V;try{if(en.transition=null,V=16>e?16:e,On===null)var i=!1;else{if(e=On,On=null,xa=0,Y&6)throw Error(L(331));var r=Y;for(Y|=4,j=e.current;j!==null;){var a=j,o=a.child;if(j.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(j=u;j!==null;){var c=j;switch(c.tag){case 0:case 11:case 15:Zi(8,c,a)}var d=c.child;if(d!==null)d.return=c,j=d;else for(;j!==null;){c=j;var h=c.sibling,p=c.return;if(wp(c),c===u){j=null;break}if(h!==null){h.return=p,j=h;break}j=p}}}var x=a.alternate;if(x!==null){var A=x.child;if(A!==null){x.child=null;do{var b=A.sibling;A.sibling=null,A=b}while(A!==null)}}j=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,j=o;else e:for(;j!==null;){if(a=j,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Zi(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,j=g;break e}j=a.return}}var m=e.current;for(j=m;j!==null;){o=j;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,j=w;else e:for(o=m;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Za(9,l)}}catch(P){de(l,l.return,P)}if(l===o){j=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,j=k;break e}j=l.return}}if(Y=r,at(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(La,e)}catch{}i=!0}return i}finally{V=t,en.transition=n}}return!1}function cc(e,n,t){n=ii(t,n),n=lp(e,n,1),e=Vn(e,n,1),n=Re(),e!==null&&(lr(e,1,n),ze(e,n))}function de(e,n,t){if(e.tag===3)cc(e,e,t);else for(;n!==null;){if(n.tag===3){cc(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Qn===null||!Qn.has(i))){e=ii(t,e),e=sp(n,e,1),n=Vn(n,e,1),e=Re(),n!==null&&(lr(n,1,e),ze(n,e));break}}n=n.return}}function cy(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=Re(),e.pingedLanes|=e.suspendedLanes&t,Se===e&&(be&t)===t&&(xe===4||xe===3&&(be&130023424)===be&&500>pe()-Ls?pt(e,0):Ps|=t),ze(e,n)}function Ep(e,n){n===0&&(e.mode&1?(n=Ar,Ar<<=1,!(Ar&130023424)&&(Ar=4194304)):n=1);var t=Re();e=jn(e,n),e!==null&&(lr(e,n,t),ze(e,t))}function dy(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ep(e,t)}function fy(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(L(314))}i!==null&&i.delete(n),Ep(e,t)}var Np;Np=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||_e.current)De=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return De=!1,qm(e,n,t);De=!!(e.flags&131072)}else De=!1,oe&&n.flags&1048576&&Mf(n,ca,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Or(e,n),e=n.pendingProps;var r=qt(n,Ne.current);Xt(n,t),r=vs(null,n,i,e,r,t);var a=As();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,He(i)?(a=!0,sa(n)):a=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gs(n),r.updater=ja,n.stateNode=r,r._reactInternals=n,dl(n,i,e,t),n=hl(null,n,i,!0,a,t)):(n.tag=0,oe&&a&&ss(n),We(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Or(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=hy(i),e=sn(i,e),r){case 0:n=pl(null,n,i,e,t);break e;case 1:n=ec(null,n,i,e,t);break e;case 11:n=Ku(null,n,i,e,t);break e;case 14:n=qu(null,n,i,sn(i.type,e),t);break e}throw Error(L(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:sn(i,r),pl(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:sn(i,r),ec(e,n,i,r,t);case 3:e:{if(fp(n),e===null)throw Error(L(387));i=n.pendingProps,a=n.memoizedState,r=a.element,Hf(e,n),pa(n,i,null,t);var o=n.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},n.updateQueue.baseState=a,n.memoizedState=a,n.flags&256){r=ii(Error(L(423)),n),n=nc(e,n,i,t,r);break e}else if(i!==r){r=ii(Error(L(424)),n),n=nc(e,n,i,t,r);break e}else for(Oe=$n(n.stateNode.containerInfo.firstChild),Ge=n,oe=!0,cn=null,t=Df(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ei(),i===r){n=Zn(e,n,t);break e}We(e,n,i,t)}n=n.child}return n;case 5:return zf(n),e===null&&sl(n),i=n.type,r=n.pendingProps,a=e!==null?e.memoizedProps:null,o=r.children,il(i,r)?o=null:a!==null&&il(i,a)&&(n.flags|=32),dp(e,n),We(e,n,o,t),n.child;case 6:return e===null&&sl(n),null;case 13:return pp(e,n,t);case 4:return ms(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ni(n,null,i,t):We(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:sn(i,r),Ku(e,n,i,r,t);case 7:return We(e,n,n.pendingProps,t),n.child;case 8:return We(e,n,n.pendingProps.children,t),n.child;case 12:return We(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,a=n.memoizedProps,o=r.value,ne(da,i._currentValue),i._currentValue=o,a!==null)if(hn(a.value,o)){if(a.children===r.children&&!_e.current){n=Zn(e,n,t);break e}}else for(a=n.child,a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var s=l.firstContext;s!==null;){if(s.context===i){if(a.tag===1){s=Wn(-1,t&-t),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=t,s=a.alternate,s!==null&&(s.lanes|=t),ul(a.return,t,n),l.lanes|=t;break}s=s.next}}else if(a.tag===10)o=a.type===n.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(L(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),ul(o,t,n),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===n){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}We(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,Xt(n,t),r=tn(r),i=i(r),n.flags|=1,We(e,n,i,t),n.child;case 14:return i=n.type,r=sn(i,n.pendingProps),r=sn(i.type,r),qu(e,n,i,r,t);case 15:return up(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:sn(i,r),Or(e,n),n.tag=1,He(i)?(e=!0,sa(n)):e=!1,Xt(n,t),op(n,i,r),dl(n,i,r,t),hl(null,n,i,!0,e,t);case 19:return hp(e,n,t);case 22:return cp(e,n,t)}throw Error(L(156,n.tag))};function Ip(e,n){return tf(e,n)}function py(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,i){return new py(e,n,t,i)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hy(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vl)return 11;if(e===Ql)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Yr(e,n,t,i,r,a){var o=2;if(i=e,typeof e=="function")Ws(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Wt:return ht(t.children,r,a,n);case $l:o=8,r|=8;break;case Zo:return e=qe(12,t,n,r|2),e.elementType=Zo,e.lanes=a,e;case To:return e=qe(13,t,n,r),e.elementType=To,e.lanes=a,e;case Do:return e=qe(19,t,n,r),e.elementType=Do,e.lanes=a,e;case Hd:return Da(t,r,a,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dd:o=10;break e;case _d:o=9;break e;case Vl:o=11;break e;case Ql:o=14;break e;case zn:o=16,i=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return n=qe(o,t,n,r),n.elementType=e,n.type=i,n.lanes=a,n}function ht(e,n,t,i){return e=qe(7,e,i,n),e.lanes=t,e}function Da(e,n,t,i){return e=qe(22,e,i,n),e.elementType=Hd,e.lanes=t,e.stateNode={isHidden:!1},e}function wo(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function xo(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function gy(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ka(0),this.expirationTimes=Ka(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ka(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Rs(e,n,t,i,r,a,o,l,s){return e=new gy(e,n,t,l,s),n===1?(n=1,a===!0&&(n|=8)):n=0,a=qe(3,null,null,n),e.current=a,a.stateNode=e,a.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gs(a),e}function my(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function Wp(e){if(!e)return tt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(L(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(He(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(L(171))}if(e.tag===1){var t=e.type;if(He(t))return Wf(e,t,n)}return n}function Rp(e,n,t,i,r,a,o,l,s){return e=Rs(t,i,!0,e,r,a,o,l,s),e.context=Wp(null),t=e.current,i=Re(),r=Kn(t),a=Wn(i,r),a.callback=n??null,Vn(t,a,r),e.current.lanes=r,lr(e,r,i),ze(e,i),e}function _a(e,n,t,i){var r=n.current,a=Re(),o=Kn(r);return t=Wp(t),n.context===null?n.context=t:n.pendingContext=t,n=Wn(a,o),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=Vn(r,n,o),e!==null&&(pn(e,r,o,a),Jr(e,r,o)),o}function Aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function dc(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ms(e,n){dc(e,n),(e=e.alternate)&&dc(e,n)}function yy(){return null}var Mp=typeof reportError=="function"?reportError:function(e){console.error(e)};function js(e){this._internalRoot=e}Ha.prototype.render=js.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(L(409));_a(e,n,null,null)};Ha.prototype.unmount=js.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;xt(function(){_a(null,e,null,null)}),n[Mn]=null}};function Ha(e){this._internalRoot=e}Ha.prototype.unstable_scheduleHydration=function(e){if(e){var n=cf();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Jn.length&&n!==0&&n<Jn[t].priority;t++);Jn.splice(t,0,e),t===0&&ff(e)}};function Zs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fc(){}function wy(e,n,t,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=Aa(o);a.call(u)}}var o=Rp(n,i,e,0,null,!1,!1,"",fc);return e._reactRootContainer=o,e[Mn]=o.current,$i(e.nodeType===8?e.parentNode:e),xt(),o}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=Aa(s);l.call(u)}}var s=Rs(e,0,!1,null,null,!1,!1,"",fc);return e._reactRootContainer=s,e[Mn]=s.current,$i(e.nodeType===8?e.parentNode:e),xt(function(){_a(n,s,t,i)}),s}function Ba(e,n,t,i,r){var a=t._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var l=r;r=function(){var s=Aa(o);l.call(s)}}_a(n,o,e,r)}else o=wy(t,n,e,r,i);return Aa(o)}sf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Pi(n.pendingLanes);t!==0&&(es(n,t|1),ze(n,pe()),!(Y&6)&&(ri=pe()+500,at()))}break;case 13:xt(function(){var i=jn(e,1);if(i!==null){var r=Re();pn(i,e,1,r)}}),Ms(e,1)}};ns=function(e){if(e.tag===13){var n=jn(e,134217728);if(n!==null){var t=Re();pn(n,e,134217728,t)}Ms(e,134217728)}};uf=function(e){if(e.tag===13){var n=Kn(e),t=jn(e,n);if(t!==null){var i=Re();pn(t,e,n,i)}Ms(e,n)}};cf=function(){return V};df=function(e,n){var t=V;try{return V=e,n()}finally{V=t}};Xo=function(e,n,t){switch(n){case"input":if(zo(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=Wa(i);if(!r)throw Error(L(90));Bd(i),zo(i,r)}}}break;case"textarea":Ud(e,t);break;case"select":n=t.value,n!=null&&Ut(e,!!t.multiple,n,!1)}};Vd=Es;Qd=xt;var xy={usingClientEntryPoint:!1,Events:[ur,Zt,Wa,Yd,$d,Es]},Ai={findFiberByHostInstance:ct,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vy={bundleType:Ai.bundleType,version:Ai.version,rendererPackageName:Ai.rendererPackageName,rendererConfig:Ai.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ef(e),e===null?null:e.stateNode},findFiberByHostInstance:Ai.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rr.isDisabled&&Rr.supportsFiber)try{La=Rr.inject(vy),An=Rr}catch{}}Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xy;Ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zs(n))throw Error(L(200));return my(e,n,null,t)};Ye.createRoot=function(e,n){if(!Zs(e))throw Error(L(299));var t=!1,i="",r=Mp;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=Rs(e,1,!1,null,null,t,!1,i,r),e[Mn]=n.current,$i(e.nodeType===8?e.parentNode:e),new js(n)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=ef(n),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return xt(e)};Ye.hydrate=function(e,n,t){if(!za(n))throw Error(L(200));return Ba(null,e,n,!0,t)};Ye.hydrateRoot=function(e,n,t){if(!Zs(e))throw Error(L(405));var i=t!=null&&t.hydratedSources||null,r=!1,a="",o=Mp;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),n=Rp(n,null,e,1,t??null,r,!1,a,o),e[Mn]=n.current,$i(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Ha(n)};Ye.render=function(e,n,t){if(!za(n))throw Error(L(200));return Ba(null,e,n,!1,t)};Ye.unmountComponentAtNode=function(e){if(!za(e))throw Error(L(40));return e._reactRootContainer?(xt(function(){Ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Ye.unstable_batchedUpdates=Es;Ye.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!za(t))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Ba(e,n,t,!1,i)};Ye.version="18.3.1-next-f1338f8080-20240426";function jp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(jp)}catch(e){console.error(e)}}jp(),Md.exports=Ye;var Zp=Md.exports,pc=Zp;Mo.createRoot=pc.createRoot,Mo.hydrateRoot=pc.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Pl.apply(this,arguments)}var Sa;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sa||(Sa={}));function ve(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Ts(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function hc(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function dr(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}var gc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gc||(gc={}));function Ay(e,n,t){return t===void 0&&(t="/"),Sy(e,n,t)}function Sy(e,n,t,i){let r=typeof n=="string"?dr(n):n,a=_p(r.pathname||"/",t);if(a==null)return null;let o=Tp(e);ky(o);let l=null;for(let s=0;l==null&&s<o.length;++s){let u=Zy(a);l=Ry(o[s],u)}return l}function Tp(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(a,o,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};s.relativePath.startsWith("/")&&(ve(s.relativePath.startsWith(i),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(i.length));let u=et([i,s.relativePath]),c=t.concat(s);a.children&&a.children.length>0&&(ve(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tp(a.children,n,c,u)),!(a.path==null&&!a.index)&&n.push({path:u,score:Iy(u,a.index),routesMeta:c})};return e.forEach((a,o)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))r(a,o);else for(let s of Dp(a.path))r(a,o,s)}),n}function Dp(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,r=t.endsWith("?"),a=t.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=Dp(i.join("/")),l=[];return l.push(...o.map(s=>s===""?a:[a,s].join("/"))),r&&l.push(...o),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function ky(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Wy(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const by=/^:[\w-]+$/,Cy=3,Py=2,Ly=1,Ey=10,Ny=-2,mc=e=>e==="*";function Iy(e,n){let t=e.split("/"),i=t.length;return t.some(mc)&&(i+=Ny),n&&(i+=Py),t.filter(r=>!mc(r)).reduce((r,a)=>r+(by.test(a)?Cy:a===""?Ly:Ey),i)}function Wy(e,n){return e.length===n.length&&e.slice(0,-1).every((i,r)=>i===n[r])?e[e.length-1]-n[n.length-1]:0}function Ry(e,n,t){let{routesMeta:i}=e,r={},a="/",o=[];for(let l=0;l<i.length;++l){let s=i[l],u=l===i.length-1,c=a==="/"?n:n.slice(a.length)||"/",d=My({path:s.relativePath,caseSensitive:s.caseSensitive,end:u},c),h=s.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:et([a,d.pathname]),pathnameBase:zy(et([a,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(a=et([a,d.pathnameBase]))}return o}function My(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=jy(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),l=r.slice(1);return{params:i.reduce((u,c,d)=>{let{paramName:h,isOptional:p}=c;if(h==="*"){let A=l[d]||"";o=a.slice(0,a.length-A.length).replace(/(.)\/+$/,"$1")}const x=l[d];return p&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:o,pattern:e}}function jy(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Ts(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,s)=>(i.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),i]}function Zy(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Ts(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function _p(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}const Ty=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dy=e=>Ty.test(e);function _y(e,n){n===void 0&&(n="/");let{pathname:t,search:i="",hash:r=""}=typeof e=="string"?dr(e):e,a;if(t)if(Dy(t))a=t;else{if(t.includes("//")){let o=t;t=t.replace(/\/\/+/g,"/"),Ts(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+t))}t.startsWith("/")?a=yc(t.substring(1),"/"):a=yc(t,n)}else a=n;return{pathname:a,search:By(i),hash:Jy(r)}}function yc(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function vo(e,n,t,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hy(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Hp(e,n){let t=Hy(e);return n?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function zp(e,n,t,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=dr(e):(r=Pl({},e),ve(!r.pathname||!r.pathname.includes("?"),vo("?","pathname","search",r)),ve(!r.pathname||!r.pathname.includes("#"),vo("#","pathname","hash",r)),ve(!r.search||!r.search.includes("#"),vo("#","search","hash",r)));let a=e===""||r.pathname==="",o=a?"/":r.pathname,l;if(o==null)l=t;else{let d=n.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}l=d>=0?n[d]:"/"}let s=_y(r,l),u=o&&o!=="/"&&o.endsWith("/"),c=(a||o===".")&&t.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const et=e=>e.join("/").replace(/\/\/+/g,"/"),zy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),By=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Jy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Uy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bp=["post","put","patch","delete"];new Set(Bp);const Fy=["get",...Bp];new Set(Fy);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rr(){return rr=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},rr.apply(this,arguments)}const Ds=N.createContext(null),Oy=N.createContext(null),St=N.createContext(null),Ja=N.createContext(null),kt=N.createContext({outlet:null,matches:[],isDataRoute:!1}),Jp=N.createContext(null);function Gy(e,n){let{relative:t}=n===void 0?{}:n;fr()||ve(!1);let{basename:i,navigator:r}=N.useContext(St),{hash:a,pathname:o,search:l}=Fp(e,{relative:t}),s=o;return i!=="/"&&(s=o==="/"?i:et([i,o])),r.createHref({pathname:s,search:l,hash:a})}function fr(){return N.useContext(Ja)!=null}function si(){return fr()||ve(!1),N.useContext(Ja).location}function Up(e){N.useContext(St).static||N.useLayoutEffect(e)}function Xy(){let{isDataRoute:e}=N.useContext(kt);return e?o0():Yy()}function Yy(){fr()||ve(!1);let e=N.useContext(Ds),{basename:n,future:t,navigator:i}=N.useContext(St),{matches:r}=N.useContext(kt),{pathname:a}=si(),o=JSON.stringify(Hp(r,t.v7_relativeSplatPath)),l=N.useRef(!1);return Up(()=>{l.current=!0}),N.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){i.go(u);return}let d=zp(u,JSON.parse(o),a,c.relative==="path");e==null&&n!=="/"&&(d.pathname=d.pathname==="/"?n:et([n,d.pathname])),(c.replace?i.replace:i.push)(d,c.state,c)},[n,i,o,a,e])}function Fp(e,n){let{relative:t}=n===void 0?{}:n,{future:i}=N.useContext(St),{matches:r}=N.useContext(kt),{pathname:a}=si(),o=JSON.stringify(Hp(r,i.v7_relativeSplatPath));return N.useMemo(()=>zp(e,JSON.parse(o),a,t==="path"),[e,o,a,t])}function $y(e,n){return Vy(e,n)}function Vy(e,n,t,i){fr()||ve(!1);let{navigator:r}=N.useContext(St),{matches:a}=N.useContext(kt),o=a[a.length-1],l=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let u=si(),c;if(n){var d;let b=typeof n=="string"?dr(n):n;s==="/"||(d=b.pathname)!=null&&d.startsWith(s)||ve(!1),c=b}else c=u;let h=c.pathname||"/",p=h;if(s!=="/"){let b=s.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=Ay(e,{pathname:p}),A=n0(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:et([s,r.encodeLocation?r.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?s:et([s,r.encodeLocation?r.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,t,i);return n&&A?N.createElement(Ja.Provider,{value:{location:rr({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Sa.Pop}},A):A}function Qy(){let e=a0(),n=Uy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},n),t?N.createElement("pre",{style:r},t):null,null)}const Ky=N.createElement(Qy,null);class qy extends N.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?N.createElement(kt.Provider,{value:this.props.routeContext},N.createElement(Jp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e0(e){let{routeContext:n,match:t,children:i}=e,r=N.useContext(Ds);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),N.createElement(kt.Provider,{value:n},i)}function n0(e,n,t,i){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),i===void 0&&(i=null),e==null){var a;if(!t)return null;if(t.errors)e=t.matches;else if((a=i)!=null&&a.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,l=(r=t)==null?void 0:r.errors;if(l!=null){let c=o.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||ve(!1),o=o.slice(0,Math.min(o.length,c+1))}let s=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:p}=t,x=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||x){s=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let p,x=!1,A=null,b=null;t&&(p=l&&d.route.id?l[d.route.id]:void 0,A=d.route.errorElement||Ky,s&&(u<0&&h===0?(l0("route-fallback"),x=!0,b=null):u===h&&(x=!0,b=d.route.hydrateFallbackElement||null)));let g=n.concat(o.slice(0,h+1)),m=()=>{let w;return p?w=A:x?w=b:d.route.Component?w=N.createElement(d.route.Component,null):d.route.element?w=d.route.element:w=c,N.createElement(e0,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:t!=null},children:w})};return t&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?N.createElement(qy,{location:t.location,revalidation:t.revalidation,component:A,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var Op=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Op||{}),Gp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gp||{});function t0(e){let n=N.useContext(Ds);return n||ve(!1),n}function i0(e){let n=N.useContext(Oy);return n||ve(!1),n}function r0(e){let n=N.useContext(kt);return n||ve(!1),n}function Xp(e){let n=r0(),t=n.matches[n.matches.length-1];return t.route.id||ve(!1),t.route.id}function a0(){var e;let n=N.useContext(Jp),t=i0(),i=Xp();return n!==void 0?n:(e=t.errors)==null?void 0:e[i]}function o0(){let{router:e}=t0(Op.UseNavigateStable),n=Xp(Gp.UseNavigateStable),t=N.useRef(!1);return Up(()=>{t.current=!0}),N.useCallback(function(r,a){a===void 0&&(a={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,rr({fromRouteId:n},a)))},[e,n])}const wc={};function l0(e,n,t){wc[e]||(wc[e]=!0)}function s0(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pn(e){ve(!1)}function u0(e){let{basename:n="/",children:t=null,location:i,navigationType:r=Sa.Pop,navigator:a,static:o=!1,future:l}=e;fr()&&ve(!1);let s=n.replace(/^\/*/,"/"),u=N.useMemo(()=>({basename:s,navigator:a,static:o,future:rr({v7_relativeSplatPath:!1},l)}),[s,l,a,o]);typeof i=="string"&&(i=dr(i));let{pathname:c="/",search:d="",hash:h="",state:p=null,key:x="default"}=i,A=N.useMemo(()=>{let b=_p(c,s);return b==null?null:{location:{pathname:b,search:d,hash:h,state:p,key:x},navigationType:r}},[s,c,d,h,p,x,r]);return A==null?null:N.createElement(St.Provider,{value:u},N.createElement(Ja.Provider,{children:t,value:A}))}function c0(e){let{children:n,location:t}=e;return $y(Ll(n),t)}new Promise(()=>{});function Ll(e,n){n===void 0&&(n=[]);let t=[];return N.Children.forEach(e,(i,r)=>{if(!N.isValidElement(i))return;let a=[...n,r];if(i.type===N.Fragment){t.push.apply(t,Ll(i.props.children,a));return}i.type!==Pn&&ve(!1),!i.props.index||!i.props.children||ve(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ll(i.props.children,a)),t.push(o)}),t}/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ka.apply(this,arguments)}var Jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Jt||(Jt={}));const xc="popstate";function d0(e){e===void 0&&(e={});function n(i,r){let{pathname:a,search:o,hash:l}=i.location;return El("",{pathname:a,search:o,hash:l},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Yp(r)}return g0(n,t,null,e)}function f0(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function p0(){return Math.random().toString(36).substr(2,8)}function vc(e,n){return{usr:e.state,key:e.key,idx:n}}function El(e,n,t,i){return t===void 0&&(t=null),ka({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?h0(n):n,{state:t,key:n&&n.key||i||p0()})}function Yp(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function h0(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function g0(e,n,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,l=Jt.Pop,s=null,u=c();u==null&&(u=0,o.replaceState(ka({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){l=Jt.Pop;let b=c(),g=b==null?null:b-u;u=b,s&&s({action:l,location:A.location,delta:g})}function h(b,g){l=Jt.Push;let m=El(A.location,b,g);u=c()+1;let w=vc(m,u),k=A.createHref(m);try{o.pushState(w,"",k)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(k)}a&&s&&s({action:l,location:A.location,delta:1})}function p(b,g){l=Jt.Replace;let m=El(A.location,b,g);u=c();let w=vc(m,u),k=A.createHref(m);o.replaceState(w,"",k),a&&s&&s({action:l,location:A.location,delta:0})}function x(b){let g=r.location.origin!=="null"?r.location.origin:r.location.href,m=typeof b=="string"?b:Yp(b);return m=m.replace(/ $/,"%20"),f0(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let A={get action(){return l},get location(){return e(r,o)},listen(b){if(s)throw new Error("A history only accepts one active listener");return r.addEventListener(xc,d),s=b,()=>{r.removeEventListener(xc,d),s=null}},createHref(b){return n(r,b)},createURL:x,encodeLocation(b){let g=x(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:p,go(b){return o.go(b)}};return A}var Ac;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ac||(Ac={}));function m0(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}const $p=["post","put","patch","delete"];new Set($p);const y0=["get",...$p];new Set(y0);/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Nl.apply(this,arguments)}function w0(e,n){if(e==null)return{};var t={},i=Object.keys(e),r,a;for(a=0;a<i.length;a++)r=i[a],!(n.indexOf(r)>=0)&&(t[r]=e[r]);return t}function x0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function v0(e,n){return e.button===0&&(!n||n==="_self")&&!x0(e)}const A0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],S0="6";try{window.__reactRouterVersion=S0}catch{}const k0="startTransition",Sc=cg[k0];function b0(e){let{basename:n,children:t,future:i,window:r}=e,a=N.useRef();a.current==null&&(a.current=d0({window:r,v5Compat:!0}));let o=a.current,[l,s]=N.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=N.useCallback(d=>{u&&Sc?Sc(()=>s(d)):s(d)},[s,u]);return N.useLayoutEffect(()=>o.listen(c),[o,c]),N.useEffect(()=>s0(i),[i]),N.createElement(u0,{basename:n,children:t,location:l.location,navigationType:l.action,navigator:o,future:i})}const C0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ei=N.forwardRef(function(n,t){let{onClick:i,relative:r,reloadDocument:a,replace:o,state:l,target:s,to:u,preventScrollReset:c,viewTransition:d}=n,h=w0(n,A0),{basename:p}=N.useContext(St),x,A=!1;if(typeof u=="string"&&P0.test(u)&&(x=u,C0))try{let w=new URL(window.location.href),k=u.startsWith("//")?new URL(w.protocol+u):new URL(u),P=m0(k.pathname,p);k.origin===w.origin&&P!=null?u=P+k.search+k.hash:A=!0}catch{}let b=Gy(u,{relative:r}),g=L0(u,{replace:o,state:l,target:s,preventScrollReset:c,relative:r,viewTransition:d});function m(w){i&&i(w),w.defaultPrevented||g(w)}return N.createElement("a",Nl({},h,{href:x||b,onClick:A||a?i:m,ref:t,target:s}))});var kc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(kc||(kc={}));var bc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bc||(bc={}));function L0(e,n){let{target:t,replace:i,state:r,preventScrollReset:a,relative:o,viewTransition:l}=n===void 0?{}:n,s=Xy(),u=si(),c=Fp(e,{relative:o});return N.useCallback(d=>{if(v0(d,t)){d.preventDefault();let h=i!==void 0?i:hc(u)===hc(c);s(e,{replace:h,state:r,preventScrollReset:a,relative:o,viewTransition:l})}},[u,s,c,i,r,t,e,a,o,l])}const Ao=[{name:"Home",link:"/",group:"home"},{name:"News",link:"/news",group:"news"},{name:"Research",link:"/research",group:"research"},{name:"Publications",link:"/publications",group:"publications"},{name:"Software",link:"/software",group:"software"},{name:"Members",link:"/members",group:"members"},{name:"Join",link:"/join",group:"join"},{name:"Contact",link:"/contact",group:"contact"}],Vp=()=>"/",E0=e=>{let n=e.startsWith("/")?e.slice(1):e;n=n.startsWith("static/")?n.slice(7):n;const t=Vp(),i=n.startsWith("/")?n:`/${n}`;return!t||t==="/"?i:`${t.endsWith("/")?t.slice(0,-1):t}${i}`},F={name:"Genomics and Artificial Intelligence in Healthcare Lab",description:"This is the official web page for the Genomics and Artificial Intelligence in Healthcare Lab at Hong Kong PolyU.",url:"https://genomics-in-healthcare.github.io/",baseurl:Vp(),static:E0},N0=()=>{const[e,n]=N.useState(!1),[t,i]=N.useState(!1),r=si(),a=r.pathname==="/"||r.pathname==="/genomics-in-healthcare.github.io/";N.useEffect(()=>{const c=()=>{const d=window.pageYOffset||document.documentElement.scrollTop;i(d>50)};return window.addEventListener("scroll",c,{passive:!0}),c(),()=>window.removeEventListener("scroll",c)},[]);const o=()=>{n(!e)},l=()=>{n(!1)},u=(()=>{const c=r.pathname,d=Ao.find(h=>{const p=h.link==="/"?"/":h.link;return c===p||c===`${F.baseurl}${p}`});return(d==null?void 0:d.group)||""})();return f.jsxs(f.Fragment,{children:[f.jsx("header",{className:`md-app-bar ${a?"home":""} ${t?"scrolled":""}`,children:f.jsxs("div",{className:"md-app-bar__container",children:[f.jsx("button",{className:"md-button md-button--text md-menu-button",id:"menuButton","aria-label":"Open menu",onClick:o,style:{color:"#64748b"},children:f.jsxs("span",{className:"md-menu-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]})}),f.jsx("div",{className:"md-app-bar__brand",style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Ei,{to:"/",style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-app-bar__logo",src:F.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{className:"md-app-bar__title",children:[f.jsx("div",{className:"md-app-bar__title-main",style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{className:"md-app-bar__title-sub",style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("nav",{className:"md-app-bar__actions",id:"desktopNav",style:{gap:"4px"},children:Ao.map(c=>f.jsx(Ei,{to:c.link,className:`md-button md-button--text ${u===c.group?"md-button--active":""}`,style:{color:"#64748b",fontWeight:500,padding:"10px 12px",borderRadius:"4px",transition:"background-color 0.15s ease",fontSize:"1.125rem",fontFamily:"'Inter', 'Noto Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif"},children:c.name},c.link))})]})}),f.jsxs("aside",{className:`md-navigation-drawer ${e?"open":""}`,id:"navigationDrawer",children:[f.jsx("div",{className:"md-navigation-drawer__header",children:f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",flex:1},children:f.jsxs(Ei,{to:"/",onClick:l,style:{display:"flex",alignItems:"center",textDecoration:"none",color:"inherit"},children:[f.jsx("img",{className:"md-navigation-drawer__logo",src:F.static("img/logo/logo.png"),alt:"JC STEM Lab",style:{height:"43px",marginRight:"14px"}}),f.jsxs("div",{children:[f.jsx("div",{style:{fontSize:"0.8125rem",fontWeight:600,color:"#64748b",lineHeight:1.25},children:"Hong Kong JC STEM Lab"}),f.jsx("div",{style:{fontSize:"1.125rem",color:"#1e3a8a",lineHeight:1.25,fontWeight:550},children:"Genomics and AI in Healthcare"})]})]})}),f.jsx("button",{className:"md-button md-button--text md-close-button",id:"closeDrawerButton","aria-label":"Close menu",onClick:l,style:{color:"#64748b",padding:"8px"},children:f.jsxs("span",{className:"md-close-icon","aria-hidden":"true",children:[f.jsx("span",{}),f.jsx("span",{})]})})]})}),f.jsx("div",{className:"md-navigation-drawer__content",children:Ao.map(c=>f.jsx(Ei,{to:c.link,onClick:l,className:`md-navigation-drawer__item ${u===c.group?"active":""}`,tabIndex:0,style:{backgroundColor:"transparent !important",color:"#1a1c1e !important",border:"none !important",boxShadow:"none !important"},children:c.name},c.link))})]}),f.jsx("div",{className:`md-backdrop ${e?"open":""}`,id:"backdrop",onClick:l})]})},I0=()=>f.jsx("footer",{children:f.jsx("div",{children:f.jsx("p",{children:"© 2025 Hong Kong JC STEM Lab of Genomics and AI in Healthcare. All rights reserved."})})}),W0=({children:e})=>{const n=si(),t=n.pathname==="/"||n.pathname==="/genomics-in-healthcare.github.io/";return N.useEffect(()=>{t?(document.body.classList.add("home"),document.body.classList.remove("non-home")):(document.body.classList.add("non-home"),document.body.classList.remove("home")),document.querySelectorAll("table").forEach(a=>{if(!a.parentElement.classList.contains("table-responsive")){const o=document.createElement("div");o.className="table-responsive",o.style.overflowX="auto",o.style.margin="16px 0",a.parentNode.insertBefore(o,a),o.appendChild(a)}});const r=document.querySelector(".md-main-content");r&&r.classList.add("md-fade-in")},[t,n]),f.jsxs("div",{className:`layout ${t?"home":"non-home"}`,children:[f.jsx(N0,{}),f.jsx("main",{className:"md-main-content",children:e}),f.jsx(I0,{})]})},R0=()=>{const e=F.static("img/logo/homepage_background.png"),n=[{src:F.static("img/logo/hksar.png"),alt:"Hong Kong SAR"},{src:F.static("img/logo/rgc.png"),alt:"RGC"},{src:F.static("img/logo/nsfc.png"),alt:"NSFC"},{src:F.static("img/logo/hkjcct.png"),alt:"Hong Kong Jockey Club Charities Trust"}];return f.jsxs(f.Fragment,{children:[f.jsx("section",{className:"hero-section",style:{background:`linear-gradient(135deg, rgba(30, 64, 175, 0.1) 0%, rgba(30, 64, 175, 0.05) 100%), url('${e}')`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",color:"white",height:"35vh",minHeight:"240px",maxHeight:"400px",width:"100vw",maxWidth:"100vw",display:"flex",alignItems:"center",justifyContent:"center",margin:0,padding:"32px 0",position:"relative",marginTop:"60px",marginLeft:"calc(-50vw + 50%)",marginRight:"calc(-50vw + 50%)",boxShadow:"inset 0 0 100px rgba(0, 0, 0, 0.1)",overflow:"visible"},children:f.jsx("div",{style:{textAlign:"center",width:"100%",maxWidth:"1200px",padding:"0 clamp(16px, 2.5vw, 32px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"0 auto",wordWrap:"break-word",overflowWrap:"break-word",boxSizing:"border-box"},children:f.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:400,margin:0,lineHeight:1.5,color:"#334155",textShadow:"1px 1px 2px rgba(0,0,0,0.06)",textAlign:"center",width:"100%",display:"block",fontFamily:"'Georgia', 'Times New Roman', 'serif'",letterSpacing:"0.02em",wordWrap:"break-word",overflowWrap:"break-word",hyphens:"auto"},children:"Our mission is to advance AI and genomic technologies to enable personalized diagnosis and treatment for complex diseases, especially cancer and neuropsychiatric disorders like depression and schizophrenia. We focus on developing and combining AI with biological techniques, including reliable, explainable machine learning and single-cell spatial transcriptomics. Our research is highly interdisciplinary, spanning AI, data science, molecular biology, genetics, genomics, and neuroscience"})})}),f.jsxs("div",{className:"md-main-content",style:{marginTop:0,position:"relative",zIndex:2,paddingTop:0},children:[f.jsxs("section",{className:"lab-description-section",style:{margin:"24px 0 8px 0",position:"relative"},children:[f.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:600,margin:0,color:"#334155",position:"relative",textAlign:"center",lineHeight:1.6},children:f.jsxs("span",{style:{position:"relative",zIndex:1,background:"#f8f9fa",padding:0,lineHeight:1.6},children:["Our Laboratory combines",f.jsx("br",{}),"a computational biology lab (the Dry Lab) and a molecular biology lab (the Wet Lab)"]})})}),f.jsx("div",{style:{width:"100%",maxWidth:"800px",margin:"0 auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 10px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Dry Lab features a high-performance computing setup, including GPU and CPU clusters, large disk arrays, and filer servers"})})]}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px",margin:"20px 0",width:"100%",maxWidth:"1000px",marginLeft:"auto",marginRight:"auto",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:F.static("img/data_center.jpg"),alt:"Data Center - CPU and GPU clusters",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:F.static("img/office_workspace.jpg"),alt:"Office Workspace - Computational Biology Lab",style:{width:"45%",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]}),f.jsx("div",{className:"lab-description-text",style:{width:"100%",maxWidth:"800px",margin:"20px auto",color:"#334155",lineHeight:1.6,fontSize:"1.25rem",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:f.jsx("p",{style:{margin:"0 0 20px 0",fontWeight:500,textAlign:"center",letterSpacing:"normal",color:"#334155"},children:"The Wet Lab is equipped for molecular biology research and animal study, including high-throughput sequencers"})}),f.jsxs("div",{className:"lab-images",style:{display:"flex",justifyContent:"center",alignItems:"center",gap:"15px",margin:"20px 0",width:"100%",maxWidth:"1200px",marginLeft:"auto",marginRight:"auto",flexWrap:"wrap",paddingLeft:"clamp(16px, 2.5vw, 32px)",paddingRight:"clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("img",{src:F.static("img/wet_lab1.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 1",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:F.static("img/wet_lab2.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 2",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),f.jsx("img",{src:F.static("img/wet_lab3.jpg"),alt:"Wet Lab - Molecular Biology Research Facility 3",style:{width:"30%",minWidth:"280px",height:"300px",objectFit:"cover",boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}})]})]}),f.jsx("section",{style:{margin:0,position:"relative",background:"#f8f9fa",padding:"16px 0"},children:f.jsxs("div",{style:{width:"100%",maxWidth:"1200px",margin:"0 auto",padding:"0 clamp(16px, 2.5vw, 32px)",boxSizing:"border-box"},children:[f.jsx("h2",{className:"funding-title",style:{fontSize:"1.5rem",fontWeight:600,margin:"0 0 12px 0",color:"#334155",textAlign:"center"},children:"Research Supported By"}),f.jsx("div",{className:"funding-partners",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px"},children:n.map((t,i)=>f.jsx("img",{src:t.src,alt:t.alt,style:{height:"40px",width:"auto",margin:"2px",display:"inline-block",filter:"grayscale(0%)",opacity:.9,transition:"opacity 0.3s ease"}},i))})]})})]})},M0=N.memo(function({children:n,variant:t="text",size:i="medium",active:r=!1,className:a="",onClick:o,style:l={},disabled:s=!1,type:u="button",...c}){const d=["ui-button",`ui-button--${t}`,`ui-button--${i}`,r&&"ui-button--active",s&&"ui-button--disabled",a].filter(Boolean).join(" ");return f.jsx("button",{type:u,className:d,onClick:o,style:l,disabled:s,...c,children:n})});M0.displayName="Button";const Qp=N.memo(function({children:n,className:t="",style:i={},elevated:r=!1,outlined:a=!1,...o}){const l=["ui-card",r&&"ui-card--elevated",a&&"ui-card--outlined",t].filter(Boolean).join(" ");return f.jsx("div",{className:l,style:i,...o,children:n})});Qp.displayName="Card";const $t=N.memo(function({children:n,to:t,href:i,external:r=!1,variant:a="default",className:o="",...l}){const s=["ui-link",`ui-link--${a}`,o].filter(Boolean).join(" ");return i||r?f.jsx("a",{href:i||t,className:s,target:r?"_blank":void 0,rel:r?"noopener noreferrer":void 0,...l,children:n}):f.jsx(Ei,{to:t,className:s,...l,children:n})});$t.displayName="Link";const Kp=N.memo(function({src:n,alt:t,className:i="",style:r={},lazy:a=!0,...o}){let l=n;if(!n.startsWith("http")){const u=n.startsWith("/")?n:`/${n}`;F.baseurl==="/"?l=u:l=`${F.baseurl}${u}`}const s=["ui-image",i].filter(Boolean).join(" ");return f.jsx("img",{src:l,alt:t,className:s,style:r,loading:a?"lazy":"eager",...o})});Kp.displayName="Image";const j0=N.memo(function({children:n,className:t="",style:i={},variant:r="default",background:a=!1,...o}){const l=["ui-section",`ui-section--${r}`,a&&"ui-section--background",t].filter(Boolean).join(" ");return f.jsx("section",{className:l,style:i,...o,children:n})});j0.displayName="Section";const Z0=N.memo(function({children:n,className:t="",style:i={},size:r="medium",...a}){const o=["ui-container",`ui-container--${r}`,t].filter(Boolean).join(" ");return f.jsx("div",{className:o,style:i,...a,children:n})});Z0.displayName="Container";const T0=N.memo(function({isOpen:n,onClose:t,title:i,children:r,size:a="medium",closeOnBackdrop:o=!0,className:l=""}){if(N.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]),N.useEffect(()=>{const d=h=>{h.key==="Escape"&&n&&t()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[n,t]),!n)return null;const s=d=>{o&&d.target===d.currentTarget&&t()},u=["ui-modal",`ui-modal--${a}`,l].filter(Boolean).join(" "),c=f.jsx("div",{className:"ui-modal__backdrop",onClick:s,children:f.jsxs("div",{className:u,children:[(i||o)&&f.jsxs("div",{className:"ui-modal__header",children:[i&&f.jsx("h2",{className:"ui-modal__title",children:i}),o&&f.jsx("button",{className:"ui-modal__close",onClick:t,"aria-label":"Close modal",children:f.jsx("span",{className:"material-icons",children:"close"})})]}),f.jsx("div",{className:"ui-modal__content",children:r})]})});return Zp.createPortal(c,document.body)});T0.displayName="Modal";const D0=N.memo(function({options:n,value:t,onChange:i,placeholder:r="请选择...",disabled:a=!1,className:o="",variant:l="default"}){const[s,u]=N.useState(!1),c=N.useRef(null);N.useEffect(()=>{const x=A=>{c.current&&!c.current.contains(A.target)&&u(!1)};return s&&document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[s]);const d=n.find(x=>x.value===t),h=x=>{var A;(A=n.find(b=>b.value===x))!=null&&A.disabled||(i(x),u(!1))},p=["ui-dropdown",`ui-dropdown--${l}`,s&&"ui-dropdown--open",a&&"ui-dropdown--disabled",o].filter(Boolean).join(" ");return f.jsxs("div",{className:p,ref:c,children:[f.jsxs("button",{className:"ui-dropdown__trigger",onClick:()=>!a&&u(!s),disabled:a,type:"button",children:[f.jsx("span",{className:"ui-dropdown__selected",children:d?f.jsxs(f.Fragment,{children:[d.icon&&f.jsx("span",{className:"material-icons ui-dropdown__icon",children:d.icon}),d.label]}):f.jsx("span",{className:"ui-dropdown__placeholder",children:r})}),f.jsx("span",{className:"material-icons ui-dropdown__arrow",children:s?"expand_less":"expand_more"})]}),s&&f.jsx("div",{className:"ui-dropdown__menu",children:n.map(x=>f.jsxs("button",{className:`ui-dropdown__option ${x.value===t?"ui-dropdown__option--selected":""} ${x.disabled?"ui-dropdown__option--disabled":""}`,onClick:()=>h(x.value),disabled:x.disabled,type:"button",children:[x.icon&&f.jsx("span",{className:"material-icons ui-dropdown__option-icon",children:x.icon}),x.label]},x.value))})]})});D0.displayName="Dropdown";const _0=N.memo(function({tabs:n,defaultTab:t,onChange:i,variant:r="default",className:a=""}){var d,h;const[o,l]=N.useState(t||((d=n[0])==null?void 0:d.id)||""),s=p=>{const x=n.find(A=>A.id===p);x&&!x.disabled&&(l(p),i==null||i(p))},u=(h=n.find(p=>p.id===o))==null?void 0:h.content,c=["ui-tabs",`ui-tabs--${r}`,a].filter(Boolean).join(" ");return f.jsxs("div",{className:c,children:[f.jsx("div",{className:"ui-tabs__header",children:n.map(p=>f.jsxs("button",{className:`ui-tabs__tab ${o===p.id?"ui-tabs__tab--active":""} ${p.disabled?"ui-tabs__tab--disabled":""}`,onClick:()=>s(p.id),disabled:p.disabled,type:"button",children:[p.icon&&f.jsx("span",{className:"material-icons ui-tabs__tab-icon",children:p.icon}),p.label]},p.id))}),f.jsx("div",{className:"ui-tabs__content",children:u})]})});_0.displayName="Tabs";function H0(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const z0=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,B0=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,J0={};function Cc(e,n){return(J0.jsx?B0:z0).test(e)}const U0=/[ \t\n\f\r]/g;function F0(e){return typeof e=="object"?e.type==="text"?Pc(e.value):!1:Pc(e)}function Pc(e){return e.replace(U0,"")===""}class pr{constructor(n,t,i){this.normal=t,this.property=n,i&&(this.space=i)}}pr.prototype.normal={};pr.prototype.property={};pr.prototype.space=void 0;function qp(e,n){const t={},i={};for(const r of e)Object.assign(t,r.property),Object.assign(i,r.normal);return new pr(t,i,n)}function Il(e){return e.toLowerCase()}class Be{constructor(n,t){this.attribute=t,this.property=n}}Be.prototype.attribute="";Be.prototype.booleanish=!1;Be.prototype.boolean=!1;Be.prototype.commaOrSpaceSeparated=!1;Be.prototype.commaSeparated=!1;Be.prototype.defined=!1;Be.prototype.mustUseProperty=!1;Be.prototype.number=!1;Be.prototype.overloadedBoolean=!1;Be.prototype.property="";Be.prototype.spaceSeparated=!1;Be.prototype.space=void 0;let O0=0;const B=bt(),ge=bt(),Wl=bt(),E=bt(),ee=bt(),Vt=bt(),Ue=bt();function bt(){return 2**++O0}const Rl=Object.freeze(Object.defineProperty({__proto__:null,boolean:B,booleanish:ge,commaOrSpaceSeparated:Ue,commaSeparated:Vt,number:E,overloadedBoolean:Wl,spaceSeparated:ee},Symbol.toStringTag,{value:"Module"})),So=Object.keys(Rl);class _s extends Be{constructor(n,t,i,r){let a=-1;if(super(n,t),Lc(this,"space",r),typeof i=="number")for(;++a<So.length;){const o=So[a];Lc(this,So[a],(i&Rl[o])===Rl[o])}}}_s.prototype.defined=!0;function Lc(e,n,t){t&&(e[n]=t)}function ui(e){const n={},t={};for(const[i,r]of Object.entries(e.properties)){const a=new _s(i,e.transform(e.attributes||{},i),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(a.mustUseProperty=!0),n[i]=a,t[Il(i)]=i,t[Il(a.attribute)]=i}return new pr(n,t,e.space)}const eh=ui({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:E,ariaColIndex:E,ariaColSpan:E,ariaControls:ee,ariaCurrent:null,ariaDescribedBy:ee,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:ee,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:ee,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:ee,ariaLevel:E,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:ee,ariaPlaceholder:null,ariaPosInSet:E,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:ee,ariaRowCount:E,ariaRowIndex:E,ariaRowSpan:E,ariaSelected:ge,ariaSetSize:E,ariaSort:null,ariaValueMax:E,ariaValueMin:E,ariaValueNow:E,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function nh(e,n){return n in e?e[n]:n}function th(e,n){return nh(e,n.toLowerCase())}const G0=ui({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Vt,acceptCharset:ee,accessKey:ee,action:null,allow:null,allowFullScreen:B,allowPaymentRequest:B,allowUserMedia:B,alt:null,as:null,async:B,autoCapitalize:null,autoComplete:ee,autoFocus:B,autoPlay:B,blocking:ee,capture:null,charSet:null,checked:B,cite:null,className:ee,cols:E,colSpan:null,content:null,contentEditable:ge,controls:B,controlsList:ee,coords:E|Vt,crossOrigin:null,data:null,dateTime:null,decoding:null,default:B,defer:B,dir:null,dirName:null,disabled:B,download:Wl,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:B,formTarget:null,headers:ee,height:E,hidden:Wl,high:E,href:null,hrefLang:null,htmlFor:ee,httpEquiv:ee,id:null,imageSizes:null,imageSrcSet:null,inert:B,inputMode:null,integrity:null,is:null,isMap:B,itemId:null,itemProp:ee,itemRef:ee,itemScope:B,itemType:ee,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:B,low:E,manifest:null,max:null,maxLength:E,media:null,method:null,min:null,minLength:E,multiple:B,muted:B,name:null,nonce:null,noModule:B,noValidate:B,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:B,optimum:E,pattern:null,ping:ee,placeholder:null,playsInline:B,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:B,referrerPolicy:null,rel:ee,required:B,reversed:B,rows:E,rowSpan:E,sandbox:ee,scope:null,scoped:B,seamless:B,selected:B,shadowRootClonable:B,shadowRootDelegatesFocus:B,shadowRootMode:null,shape:null,size:E,sizes:null,slot:null,span:E,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:E,step:null,style:null,tabIndex:E,target:null,title:null,translate:null,type:null,typeMustMatch:B,useMap:null,value:ge,width:E,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:ee,axis:null,background:null,bgColor:null,border:E,borderColor:null,bottomMargin:E,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:B,declare:B,event:null,face:null,frame:null,frameBorder:null,hSpace:E,leftMargin:E,link:null,longDesc:null,lowSrc:null,marginHeight:E,marginWidth:E,noResize:B,noHref:B,noShade:B,noWrap:B,object:null,profile:null,prompt:null,rev:null,rightMargin:E,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:E,valueType:null,version:null,vAlign:null,vLink:null,vSpace:E,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:B,disableRemotePlayback:B,prefix:null,property:null,results:E,security:null,unselectable:null},space:"html",transform:th}),X0=ui({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Ue,accentHeight:E,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:E,amplitude:E,arabicForm:null,ascent:E,attributeName:null,attributeType:null,azimuth:E,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:E,by:null,calcMode:null,capHeight:E,className:ee,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:E,diffuseConstant:E,direction:null,display:null,dur:null,divisor:E,dominantBaseline:null,download:B,dx:null,dy:null,edgeMode:null,editable:null,elevation:E,enableBackground:null,end:null,event:null,exponent:E,externalResourcesRequired:null,fill:null,fillOpacity:E,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Vt,g2:Vt,glyphName:Vt,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:E,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:E,horizOriginX:E,horizOriginY:E,id:null,ideographic:E,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:E,k:E,k1:E,k2:E,k3:E,k4:E,kernelMatrix:Ue,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:E,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:E,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:E,overlineThickness:E,paintOrder:null,panose1:null,path:null,pathLength:E,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:ee,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:E,pointsAtY:E,pointsAtZ:E,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Ue,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Ue,rev:Ue,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Ue,requiredFeatures:Ue,requiredFonts:Ue,requiredFormats:Ue,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:E,specularExponent:E,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:E,strikethroughThickness:E,string:null,stroke:null,strokeDashArray:Ue,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:E,strokeOpacity:E,strokeWidth:null,style:null,surfaceScale:E,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Ue,tabIndex:E,tableValues:null,target:null,targetX:E,targetY:E,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Ue,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:E,underlineThickness:E,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:E,values:null,vAlphabetic:E,vMathematical:E,vectorEffect:null,vHanging:E,vIdeographic:E,version:null,vertAdvY:E,vertOriginX:E,vertOriginY:E,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:E,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:nh}),ih=ui({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),rh=ui({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:th}),ah=ui({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Y0={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},$0=/[A-Z]/g,Ec=/-[a-z]/g,V0=/^data[-\w.:]+$/i;function Q0(e,n){const t=Il(n);let i=n,r=Be;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&V0.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(Ec,q0);i="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!Ec.test(a)){let o=a.replace($0,K0);o.charAt(0)!=="-"&&(o="-"+o),n="data"+o}}r=_s}return new r(i,n)}function K0(e){return"-"+e.toLowerCase()}function q0(e){return e.charAt(1).toUpperCase()}const e1=qp([eh,G0,ih,rh,ah],"html"),Hs=qp([eh,X0,ih,rh,ah],"svg");function n1(e){return e.join(" ").trim()}var zs={},Nc=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,t1=/\n/g,i1=/^\s*/,r1=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,a1=/^:\s*/,o1=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l1=/^[;\s]*/,s1=/^\s+|\s+$/g,u1=`
`,Ic="/",Wc="*",ut="",c1="comment",d1="declaration";function f1(e,n){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];n=n||{};var t=1,i=1;function r(x){var A=x.match(t1);A&&(t+=A.length);var b=x.lastIndexOf(u1);i=~b?x.length-b:i+x.length}function a(){var x={line:t,column:i};return function(A){return A.position=new o(x),u(),A}}function o(x){this.start=x,this.end={line:t,column:i},this.source=n.source}o.prototype.content=e;function l(x){var A=new Error(n.source+":"+t+":"+i+": "+x);if(A.reason=x,A.filename=n.source,A.line=t,A.column=i,A.source=e,!n.silent)throw A}function s(x){var A=x.exec(e);if(A){var b=A[0];return r(b),e=e.slice(b.length),A}}function u(){s(i1)}function c(x){var A;for(x=x||[];A=d();)A!==!1&&x.push(A);return x}function d(){var x=a();if(!(Ic!=e.charAt(0)||Wc!=e.charAt(1))){for(var A=2;ut!=e.charAt(A)&&(Wc!=e.charAt(A)||Ic!=e.charAt(A+1));)++A;if(A+=2,ut===e.charAt(A-1))return l("End of comment missing");var b=e.slice(2,A-2);return i+=2,r(b),e=e.slice(A),i+=2,x({type:c1,comment:b})}}function h(){var x=a(),A=s(r1);if(A){if(d(),!s(a1))return l("property missing ':'");var b=s(o1),g=x({type:d1,property:Rc(A[0].replace(Nc,ut)),value:b?Rc(b[0].replace(Nc,ut)):ut});return s(l1),g}}function p(){var x=[];c(x);for(var A;A=h();)A!==!1&&(x.push(A),c(x));return x}return u(),p()}function Rc(e){return e?e.replace(s1,ut):ut}var p1=f1,h1=Qr&&Qr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(zs,"__esModule",{value:!0});zs.default=m1;const g1=h1(p1);function m1(e,n){let t=null;if(!e||typeof e!="string")return t;const i=(0,g1.default)(e),r=typeof n=="function";return i.forEach(a=>{if(a.type!=="declaration")return;const{property:o,value:l}=a;r?n(o,l,a):l&&(t=t||{},t[o]=l)}),t}var Ua={};Object.defineProperty(Ua,"__esModule",{value:!0});Ua.camelCase=void 0;var y1=/^--[a-zA-Z0-9_-]+$/,w1=/-([a-z])/g,x1=/^[^-]+$/,v1=/^-(webkit|moz|ms|o|khtml)-/,A1=/^-(ms)-/,S1=function(e){return!e||x1.test(e)||y1.test(e)},k1=function(e,n){return n.toUpperCase()},Mc=function(e,n){return"".concat(n,"-")},b1=function(e,n){return n===void 0&&(n={}),S1(e)?e:(e=e.toLowerCase(),n.reactCompat?e=e.replace(A1,Mc):e=e.replace(v1,Mc),e.replace(w1,k1))};Ua.camelCase=b1;var C1=Qr&&Qr.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},P1=C1(zs),L1=Ua;function Ml(e,n){var t={};return!e||typeof e!="string"||(0,P1.default)(e,function(i,r){i&&r&&(t[(0,L1.camelCase)(i,n)]=r)}),t}Ml.default=Ml;var E1=Ml;const N1=Bl(E1),oh=lh("end"),Bs=lh("start");function lh(e){return n;function n(t){const i=t&&t.position&&t.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function I1(e){const n=Bs(e),t=oh(e);if(n&&t)return{start:n,end:t}}function _i(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?jc(e.position):"start"in e||"end"in e?jc(e):"line"in e||"column"in e?jl(e):""}function jl(e){return Zc(e&&e.line)+":"+Zc(e&&e.column)}function jc(e){return jl(e&&e.start)+"-"+jl(e&&e.end)}function Zc(e){return e&&typeof e=="number"?e:1}class Ie extends Error{constructor(n,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let r="",a={},o=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?r=n:!a.cause&&n&&(o=!0,r=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof i=="string"){const s=i.indexOf(":");s===-1?a.ruleId=i:(a.source=i.slice(0,s),a.ruleId=i.slice(s+1))}if(!a.place&&a.ancestors&&a.ancestors){const s=a.ancestors[a.ancestors.length-1];s&&(a.place=s.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file="",this.message=r,this.line=l?l.line:void 0,this.name=_i(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}Ie.prototype.file="";Ie.prototype.name="";Ie.prototype.reason="";Ie.prototype.message="";Ie.prototype.stack="";Ie.prototype.column=void 0;Ie.prototype.line=void 0;Ie.prototype.ancestors=void 0;Ie.prototype.cause=void 0;Ie.prototype.fatal=void 0;Ie.prototype.place=void 0;Ie.prototype.ruleId=void 0;Ie.prototype.source=void 0;const Js={}.hasOwnProperty,W1=new Map,R1=/[A-Z]/g,M1=new Set(["table","tbody","thead","tfoot","tr"]),j1=new Set(["td","th"]),sh="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function Z1(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=U1(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=J1(t,n.jsx,n.jsxs)}const r={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?Hs:e1,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=uh(r,e,void 0);return a&&typeof a!="string"?a:r.create(e,r.Fragment,{children:a||void 0},void 0)}function uh(e,n,t){if(n.type==="element")return T1(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return D1(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return H1(e,n,t);if(n.type==="mdxjsEsm")return _1(e,n);if(n.type==="root")return z1(e,n,t);if(n.type==="text")return B1(e,n)}function T1(e,n,t){const i=e.schema;let r=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Hs,e.schema=r),e.ancestors.push(n);const a=dh(e,n.tagName,!1),o=F1(e,n);let l=Fs(e,n);return M1.has(n.tagName)&&(l=l.filter(function(s){return typeof s=="string"?!F0(s):!0})),ch(e,o,a,n),Us(o,l),e.ancestors.pop(),e.schema=i,e.create(n,a,o,t)}function D1(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}ar(e,n.position)}function _1(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);ar(e,n.position)}function H1(e,n,t){const i=e.schema;let r=i;n.name==="svg"&&i.space==="html"&&(r=Hs,e.schema=r),e.ancestors.push(n);const a=n.name===null?e.Fragment:dh(e,n.name,!0),o=O1(e,n),l=Fs(e,n);return ch(e,o,a,n),Us(o,l),e.ancestors.pop(),e.schema=i,e.create(n,a,o,t)}function z1(e,n,t){const i={};return Us(i,Fs(e,n)),e.create(n,e.Fragment,i,t)}function B1(e,n){return n.value}function ch(e,n,t,i){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=i)}function Us(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function J1(e,n,t){return i;function i(r,a,o,l){const u=Array.isArray(o.children)?t:n;return l?u(a,o,l):u(a,o)}}function U1(e,n){return t;function t(i,r,a,o){const l=Array.isArray(a.children),s=Bs(i);return n(r,a,o,l,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function F1(e,n){const t={};let i,r;for(r in n.properties)if(r!=="children"&&Js.call(n.properties,r)){const a=G1(e,r,n.properties[r]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&j1.has(n.tagName)?i=l:t[o]=l}}if(i){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function O1(e,n){const t={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const a=i.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(t,e.evaluater.evaluateExpression(l.argument))}else ar(e,n.position);else{const r=i.name;let a;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const l=i.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else ar(e,n.position);else a=i.value===null?!0:i.value;t[r]=a}return t}function Fs(e,n){const t=[];let i=-1;const r=e.passKeys?new Map:W1;for(;++i<n.children.length;){const a=n.children[i];let o;if(e.passKeys){const s=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(s){const u=r.get(s)||0;o=s+"-"+u,r.set(s,u+1)}}const l=uh(e,a,o);l!==void 0&&t.push(l)}return t}function G1(e,n,t){const i=Q0(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?H0(t):n1(t)),i.property==="style"){let r=typeof t=="object"?t:X1(e,String(t));return e.stylePropertyNameCase==="css"&&(r=Y1(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&i.space?Y0[i.property]||i.property:i.attribute,t]}}function X1(e,n){try{return N1(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const i=t,r=new Ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=sh+"#cannot-parse-style-attribute",r}}function dh(e,n,t){let i;if(!t)i={type:"Literal",value:n};else if(n.includes(".")){const r=n.split(".");let a=-1,o;for(;++a<r.length;){const l=Cc(r[a])?{type:"Identifier",name:r[a]}:{type:"Literal",value:r[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}i=o}else i=Cc(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const r=i.value;return Js.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(i);ar(e)}function ar(e,n){const t=new Ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=sh+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Y1(e){const n={};let t;for(t in e)Js.call(e,t)&&(n[$1(t)]=e[t]);return n}function $1(e){let n=e.replace(R1,V1);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function V1(e){return"-"+e.toLowerCase()}const ko={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},Q1={};function K1(e,n){const t=Q1,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,r=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return fh(e,i,r)}function fh(e,n,t){if(q1(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Tc(e.children,n,t)}return Array.isArray(e)?Tc(e,n,t):""}function Tc(e,n,t){const i=[];let r=-1;for(;++r<e.length;)i[r]=fh(e[r],n,t);return i.join("")}function q1(e){return!!(e&&typeof e=="object")}const Dc=document.createElement("i");function Os(e){const n="&"+e+";";Dc.innerHTML=n;const t=Dc.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function kn(e,n,t,i){const r=e.length;let a=0,o;if(n<0?n=-n>r?0:r+n:n=n>r?r:n,t=t>0?t:0,i.length<1e4)o=Array.from(i),o.unshift(n,t),e.splice(...o);else for(t&&e.splice(n,t);a<i.length;)o=i.slice(a,a+1e4),o.unshift(n,0),e.splice(...o),a+=1e4,n+=1e4}function Ke(e,n){return e.length>0?(kn(e,e.length,0,n),e):n}const _c={}.hasOwnProperty;function ew(e){const n={};let t=-1;for(;++t<e.length;)nw(n,e[t]);return n}function nw(e,n){let t;for(t in n){const r=(_c.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let o;if(a)for(o in a){_c.call(r,o)||(r[o]=[]);const l=a[o];tw(r[o],Array.isArray(l)?l:l?[l]:[])}}}function tw(e,n){let t=-1;const i=[];for(;++t<n.length;)(n[t].add==="after"?e:i).push(n[t]);kn(e,0,0,i)}function ph(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Qt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}function Gs(e){return e!==null&&e<-2}function Hc(e){return e===-2||e===-1||e===32}function te(e,n,t,i){const r=i?i-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(s){return Hc(s)?(e.enter(t),l(s)):n(s)}function l(s){return Hc(s)&&a++<r?(e.consume(s),l):(e.exit(t),n(s))}}const iw={tokenize:rw};function rw(e){const n=e.attempt(this.parser.constructs.contentInitial,i,r);let t;return n;function i(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),te(e,n,"linePrefix")}function r(l){return e.enter("paragraph"),a(l)}function a(l){const s=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=s),t=s,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return Gs(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const aw={tokenize:ow},zc={tokenize:lw};function ow(e){const n=this,t=[];let i=0,r,a,o;return l;function l(w){if(i<t.length){const k=t[i];return n.containerState=k[1],e.attempt(k[0].continuation,s,u)(w)}return u(w)}function s(w){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,r&&m();const k=n.events.length;let P=k,S;for(;P--;)if(n.events[P][0]==="exit"&&n.events[P][1].type==="chunkFlow"){S=n.events[P][1].end;break}g(i);let I=k;for(;I<n.events.length;)n.events[I][1].end={...S},I++;return kn(n.events,P+1,0,n.events.slice(k)),n.events.length=I,u(w)}return l(w)}function u(w){if(i===t.length){if(!r)return h(w);if(r.currentConstruct&&r.currentConstruct.concrete)return x(w);n.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(zc,c,d)(w)}function c(w){return r&&m(),g(i),h(w)}function d(w){return n.parser.lazy[n.now().line]=i!==t.length,o=n.now().offset,x(w)}function h(w){return n.containerState={},e.attempt(zc,p,x)(w)}function p(w){return i++,t.push([n.currentConstruct,n.containerState]),h(w)}function x(w){if(w===null){r&&m(),g(0),e.consume(w);return}return r=r||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:a}),A(w)}function A(w){if(w===null){b(e.exit("chunkFlow"),!0),g(0),e.consume(w);return}return Gs(w)?(e.consume(w),b(e.exit("chunkFlow")),i=0,n.interrupt=void 0,l):(e.consume(w),A)}function b(w,k){const P=n.sliceStream(w);if(k&&P.push(null),w.previous=a,a&&(a.next=w),a=w,r.defineSkip(w.start),r.write(P),n.parser.lazy[w.start.line]){let S=r.events.length;for(;S--;)if(r.events[S][1].start.offset<o&&(!r.events[S][1].end||r.events[S][1].end.offset>o))return;const I=n.events.length;let M=I,H,Z;for(;M--;)if(n.events[M][0]==="exit"&&n.events[M][1].type==="chunkFlow"){if(H){Z=n.events[M][1].end;break}H=!0}for(g(i),S=I;S<n.events.length;)n.events[S][1].end={...Z},S++;kn(n.events,M+1,0,n.events.slice(I)),n.events.length=S}}function g(w){let k=t.length;for(;k-- >w;){const P=t[k];n.containerState=P[1],P[0].exit.call(n,e)}t.length=w}function m(){r.write([null]),a=void 0,r=void 0,n.containerState._closeFlow=void 0}}function lw(e,n,t){return te(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function sw(e){return e!==null&&(e<0||e===32)}const uw=hh(new RegExp("\\p{P}|\\p{S}","u")),cw=hh(/\s/);function hh(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Bc(e){if(e===null||sw(e)||cw(e))return 1;if(uw(e))return 2}function Xs(e,n,t){const i=[];let r=-1;for(;++r<e.length;){const a=e[r].resolveAll;a&&!i.includes(a)&&(n=a(n,t),i.push(a))}return n}const Zl={name:"attention",resolveAll:dw,tokenize:fw};function dw(e,n){let t=-1,i,r,a,o,l,s,u,c;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(i=t;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;s=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d={...e[i][1].end},h={...e[t][1].start};Jc(d,-s),Jc(h,s),o={type:s>1?"strongSequence":"emphasisSequence",start:d,end:{...e[i][1].end}},l={type:s>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},a={type:s>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},r={type:s>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[i][1].end={...o.start},e[t][1].start={...l.end},u=[],e[i][1].end.offset-e[i][1].start.offset&&(u=Ke(u,[["enter",e[i][1],n],["exit",e[i][1],n]])),u=Ke(u,[["enter",r,n],["enter",o,n],["exit",o,n],["enter",a,n]]),u=Ke(u,Xs(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),u=Ke(u,[["exit",a,n],["enter",l,n],["exit",l,n],["exit",r,n]]),e[t][1].end.offset-e[t][1].start.offset?(c=2,u=Ke(u,[["enter",e[t][1],n],["exit",e[t][1],n]])):c=0,kn(e,i-1,t-i+3,u),t=i+u.length-c-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function fw(e,n){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Bc(i);let a;return o;function o(s){return a=s,e.enter("attentionSequence"),l(s)}function l(s){if(s===a)return e.consume(s),l;const u=e.exit("attentionSequence"),c=Bc(s),d=!c||c===2&&r||t.includes(s),h=!r||r===2&&c||t.includes(i);return u._open=!!(a===42?d:d&&(r||!h)),u._close=!!(a===42?h:h&&(c||!d)),n(s)}}function Jc(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const vn=ci(/[A-Za-z]/),dn=ci(/[\dA-Za-z]/),pw=ci(/[#-'*+\--9=?A-Z^-~]/);function hw(e){return e!==null&&(e<32||e===127)}const Tl=ci(/\d/),gw=ci(/[\dA-Fa-f]/),mw=ci(/[!-/:-@[-`{-~]/);function J(e){return e!==null&&e<-2}function nn(e){return e!==null&&(e<0||e===32)}function K(e){return e===-2||e===-1||e===32}function ci(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}const yw={name:"autolink",tokenize:ww};function ww(e,n,t){let i=0;return r;function r(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return vn(p)?(e.consume(p),o):p===64?t(p):u(p)}function o(p){return p===43||p===45||p===46||dn(p)?(i=1,l(p)):u(p)}function l(p){return p===58?(e.consume(p),i=0,s):(p===43||p===45||p===46||dn(p))&&i++<32?(e.consume(p),l):(i=0,u(p))}function s(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||hw(p)?t(p):(e.consume(p),s)}function u(p){return p===64?(e.consume(p),c):pw(p)?(e.consume(p),u):t(p)}function c(p){return dn(p)?d(p):t(p)}function d(p){return p===46?(e.consume(p),i=0,c):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):h(p)}function h(p){if((p===45||dn(p))&&i++<63){const x=p===45?h:d;return e.consume(p),x}return t(p)}}const Fa={partial:!0,tokenize:xw};function xw(e,n,t){return i;function i(a){return K(a)?te(e,r,"linePrefix")(a):r(a)}function r(a){return a===null||J(a)?n(a):t(a)}}const gh={continuation:{tokenize:Aw},exit:Sw,name:"blockQuote",tokenize:vw};function vw(e,n,t){const i=this;return r;function r(o){if(o===62){const l=i.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return t(o)}function a(o){return K(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(o))}}function Aw(e,n,t){const i=this;return r;function r(o){return K(o)?te(e,a,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(gh,n,t)(o)}}function Sw(e){e.exit("blockQuote")}const mh={name:"characterEscape",tokenize:kw};function kw(e,n,t){return i;function i(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),r}function r(a){return mw(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const yh={name:"characterReference",tokenize:bw};function bw(e,n,t){const i=this;let r=0,a,o;return l;function l(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),s}function s(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),u):(e.enter("characterReferenceValue"),a=31,o=dn,c(d))}function u(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=gw,c):(e.enter("characterReferenceValue"),a=7,o=Tl,c(d))}function c(d){if(d===59&&r){const h=e.exit("characterReferenceValue");return o===dn&&!Os(i.sliceSerialize(h))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return o(d)&&r++<a?(e.consume(d),c):t(d)}}const Uc={partial:!0,tokenize:Pw},Fc={concrete:!0,name:"codeFenced",tokenize:Cw};function Cw(e,n,t){const i=this,r={partial:!0,tokenize:P};let a=0,o=0,l;return s;function s(S){return u(S)}function u(S){const I=i.events[i.events.length-1];return a=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,l=S,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),c(S)}function c(S){return S===l?(o++,e.consume(S),c):o<3?t(S):(e.exit("codeFencedFenceSequence"),K(S)?te(e,d,"whitespace")(S):d(S))}function d(S){return S===null||J(S)?(e.exit("codeFencedFence"),i.interrupt?n(S):e.check(Uc,A,k)(S)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(S))}function h(S){return S===null||J(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(S)):K(S)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),te(e,p,"whitespace")(S)):S===96&&S===l?t(S):(e.consume(S),h)}function p(S){return S===null||J(S)?d(S):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(S))}function x(S){return S===null||J(S)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(S)):S===96&&S===l?t(S):(e.consume(S),x)}function A(S){return e.attempt(r,k,b)(S)}function b(S){return e.enter("lineEnding"),e.consume(S),e.exit("lineEnding"),g}function g(S){return a>0&&K(S)?te(e,m,"linePrefix",a+1)(S):m(S)}function m(S){return S===null||J(S)?e.check(Uc,A,k)(S):(e.enter("codeFlowValue"),w(S))}function w(S){return S===null||J(S)?(e.exit("codeFlowValue"),m(S)):(e.consume(S),w)}function k(S){return e.exit("codeFenced"),n(S)}function P(S,I,M){let H=0;return Z;function Z(O){return S.enter("lineEnding"),S.consume(O),S.exit("lineEnding"),T}function T(O){return S.enter("codeFencedFence"),K(O)?te(S,D,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):D(O)}function D(O){return O===l?(S.enter("codeFencedFenceSequence"),$(O)):M(O)}function $(O){return O===l?(H++,S.consume(O),$):H>=o?(S.exit("codeFencedFenceSequence"),K(O)?te(S,le,"whitespace")(O):le(O)):M(O)}function le(O){return O===null||J(O)?(S.exit("codeFencedFence"),I(O)):M(O)}}}function Pw(e,n,t){const i=this;return r;function r(o){return o===null?t(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return i.parser.lazy[i.now().line]?t(o):n(o)}}const bo={name:"codeIndented",tokenize:Ew},Lw={partial:!0,tokenize:Nw};function Ew(e,n,t){const i=this;return r;function r(u){return e.enter("codeIndented"),te(e,a,"linePrefix",5)(u)}function a(u){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?o(u):t(u)}function o(u){return u===null?s(u):J(u)?e.attempt(Lw,o,s)(u):(e.enter("codeFlowValue"),l(u))}function l(u){return u===null||J(u)?(e.exit("codeFlowValue"),o(u)):(e.consume(u),l)}function s(u){return e.exit("codeIndented"),n(u)}}function Nw(e,n,t){const i=this;return r;function r(o){return i.parser.lazy[i.now().line]?t(o):J(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):te(e,a,"linePrefix",5)(o)}function a(o){const l=i.events[i.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):J(o)?r(o):t(o)}}const Iw={name:"codeText",previous:Rw,resolve:Ww,tokenize:Mw};function Ww(e){let n=e.length-4,t=3,i,r;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)r===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(r=i):(i===n||e[i][1].type==="lineEnding")&&(e[r][1].type="codeTextData",i!==r+2&&(e[r][1].end=e[i-1][1].end,e.splice(r+2,i-r-2),n-=i-r-2,i=r+2),r=void 0);return e}function Rw(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Mw(e,n,t){let i=0,r,a;return o;function o(d){return e.enter("codeText"),e.enter("codeTextSequence"),l(d)}function l(d){return d===96?(e.consume(d),i++,l):(e.exit("codeTextSequence"),s(d))}function s(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),s):d===96?(a=e.enter("codeTextSequence"),r=0,c(d)):J(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),s):(e.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||J(d)?(e.exit("codeTextData"),s(d)):(e.consume(d),u)}function c(d){return d===96?(e.consume(d),r++,c):r===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(a.type="codeTextData",u(d))}}class jw{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(n,i):n>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(n,t,i){const r=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&Si(this.left,i),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Si(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Si(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Si(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Si(this.left,t.reverse())}}}function Si(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function wh(e){const n={};let t=-1,i,r,a,o,l,s,u;const c=new jw(e);for(;++t<c.length;){for(;t in n;)t=n[t];if(i=c.get(t),t&&i[1].type==="chunkFlow"&&c.get(t-1)[1].type==="listItemPrefix"&&(s=i[1]._tokenizer.events,a=0,a<s.length&&s[a][1].type==="lineEndingBlank"&&(a+=2),a<s.length&&s[a][1].type==="content"))for(;++a<s.length&&s[a][1].type!=="content";)s[a][1].type==="chunkText"&&(s[a][1]._isInFirstContentOfListItem=!0,a++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,Zw(c,t)),t=n[t],u=!0);else if(i[1]._container){for(a=t,r=void 0;a--;)if(o=c.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(r&&(c.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;r&&(i[1].end={...c.get(r)[1].start},l=c.slice(r,t),l.unshift(i),c.splice(r,t-r+1,l))}}return kn(e,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function Zw(e,n){const t=e.get(n)[1],i=e.get(n)[2];let r=n-1;const a=[];let o=t._tokenizer;o||(o=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,s=[],u={};let c,d,h=-1,p=t,x=0,A=0;const b=[A];for(;p;){for(;e.get(++r)[1]!==p;);a.push(r),p._tokenizer||(c=i.sliceStream(p),p.next||c.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(c),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=t;++h<l.length;)l[h][0]==="exit"&&l[h-1][0]==="enter"&&l[h][1].type===l[h-1][1].type&&l[h][1].start.line!==l[h][1].end.line&&(A=h+1,b.push(A),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):b.pop(),h=b.length;h--;){const g=l.slice(b[h],b[h+1]),m=a.pop();s.push([m,m+g.length-1]),e.splice(m,2,g)}for(s.reverse(),h=-1;++h<s.length;)u[x+s[h][0]]=x+s[h][1],x+=s[h][1]-s[h][0]-1;return u}const Tw={resolve:_w,tokenize:Hw},Dw={partial:!0,tokenize:zw};function _w(e){return wh(e),e}function Hw(e,n){let t;return i;function i(l){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),r(l)}function r(l){return l===null?a(l):J(l)?e.check(Dw,o,a)(l):(e.consume(l),r)}function a(l){return e.exit("chunkContent"),e.exit("content"),n(l)}function o(l){return e.consume(l),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,r}}function zw(e,n,t){const i=this;return r;function r(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),te(e,a,"linePrefix")}function a(o){if(o===null||J(o))return t(o);const l=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?n(o):e.interrupt(i.parser.constructs.flow,t,n)(o)}}function Oc(e){return e!==null&&(e<32||e===127)}function Bw(e){return e!==null&&e<-2}function Jw(e){return e!==null&&(e<0||e===32)}function xh(e,n,t,i,r,a,o,l,s){const u=s||Number.POSITIVE_INFINITY;let c=0;return d;function d(g){return g===60?(e.enter(i),e.enter(r),e.enter(a),e.consume(g),e.exit(a),h):g===null||g===32||g===41||Oc(g)?t(g):(e.enter(i),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),A(g))}function h(g){return g===62?(e.enter(a),e.consume(g),e.exit(a),e.exit(r),e.exit(i),n):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(g))}function p(g){return g===62?(e.exit("chunkString"),e.exit(l),h(g)):g===null||g===60||Bw(g)?t(g):(e.consume(g),g===92?x:p)}function x(g){return g===60||g===62||g===92?(e.consume(g),p):p(g)}function A(g){return!c&&(g===null||g===41||Jw(g))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(i),n(g)):c<u&&g===40?(e.consume(g),c++,A):g===41?(e.consume(g),c--,A):g===null||g===32||g===40||Oc(g)?t(g):(e.consume(g),g===92?b:A)}function b(g){return g===40||g===41||g===92?(e.consume(g),A):A(g)}}function vh(e,n,t,i,r,a){const o=this;let l=0,s;return u;function u(p){return e.enter(i),e.enter(r),e.consume(p),e.exit(r),e.enter(a),c}function c(p){return l>999||p===null||p===91||p===93&&!s||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?t(p):p===93?(e.exit(a),e.enter(r),e.consume(p),e.exit(r),e.exit(i),n):J(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||J(p)||l++>999?(e.exit("chunkString"),c(p)):(e.consume(p),s||(s=!K(p)),p===92?h:d)}function h(p){return p===91||p===92||p===93?(e.consume(p),l++,d):d(p)}}function Gc(e){return e!==null&&e<-2}function Ah(e,n,t,i,r,a){let o;return l;function l(h){return h===34||h===39||h===40?(e.enter(i),e.enter(r),e.consume(h),e.exit(r),o=h===40?41:h,s):t(h)}function s(h){return h===o?(e.enter(r),e.consume(h),e.exit(r),e.exit(i),n):(e.enter(a),u(h))}function u(h){return h===o?(e.exit(a),s(o)):h===null?t(h):Gc(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),te(e,u,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===o||h===null||Gc(h)?(e.exit("chunkString"),u(h)):(e.consume(h),h===92?d:c)}function d(h){return h===o||h===92?(e.consume(h),c):c(h)}}function Uw(e){return e!==null&&e<-2}function Fw(e){return e===-2||e===-1||e===32}function Hi(e,n){let t;return i;function i(r){return Uw(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),t=!0,i):Fw(r)?te(e,i,t?"linePrefix":"lineSuffix")(r):n(r)}}const Ow={name:"definition",tokenize:Xw},Gw={partial:!0,tokenize:Yw};function Xw(e,n,t){const i=this;let r;return a;function a(p){return e.enter("definition"),o(p)}function o(p){return vh.call(i,e,l,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return r=Qt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),s):t(p)}function s(p){return nn(p)?Hi(e,u)(p):u(p)}function u(p){return xh(e,c,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return e.attempt(Gw,d,d)(p)}function d(p){return K(p)?te(e,h,"whitespace")(p):h(p)}function h(p){return p===null||J(p)?(e.exit("definition"),i.parser.defined.push(r),n(p)):t(p)}}function Yw(e,n,t){return i;function i(l){return nn(l)?Hi(e,r)(l):t(l)}function r(l){return Ah(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return K(l)?te(e,o,"whitespace")(l):o(l)}function o(l){return l===null||J(l)?n(l):t(l)}}const $w={name:"hardBreakEscape",tokenize:Vw};function Vw(e,n,t){return i;function i(a){return e.enter("hardBreakEscape"),e.consume(a),r}function r(a){return J(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const Qw={name:"headingAtx",resolve:Kw,tokenize:qw};function Kw(e,n){let t=e.length-2,i=3,r,a;return e[i][1].type==="whitespace"&&(i+=2),t-2>i&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&e[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i&&(r={type:"atxHeadingText",start:e[i][1].start,end:e[t][1].end},a={type:"chunkText",start:e[i][1].start,end:e[t][1].end,contentType:"text"},kn(e,i,t-i+1,[["enter",r,n],["enter",a,n],["exit",a,n],["exit",r,n]])),e}function qw(e,n,t){let i=0;return r;function r(c){return e.enter("atxHeading"),a(c)}function a(c){return e.enter("atxHeadingSequence"),o(c)}function o(c){return c===35&&i++<6?(e.consume(c),o):c===null||nn(c)?(e.exit("atxHeadingSequence"),l(c)):t(c)}function l(c){return c===35?(e.enter("atxHeadingSequence"),s(c)):c===null||J(c)?(e.exit("atxHeading"),n(c)):K(c)?te(e,l,"whitespace")(c):(e.enter("atxHeadingText"),u(c))}function s(c){return c===35?(e.consume(c),s):(e.exit("atxHeadingSequence"),l(c))}function u(c){return c===null||c===35||nn(c)?(e.exit("atxHeadingText"),l(c)):(e.consume(c),u)}}const ex=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Xc=["pre","script","style","textarea"],nx={concrete:!0,name:"htmlFlow",resolveTo:rx,tokenize:ax},tx={partial:!0,tokenize:lx},ix={partial:!0,tokenize:ox};function rx(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function ax(e,n,t){const i=this;let r,a,o,l,s;return u;function u(v){return c(v)}function c(v){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(v),d}function d(v){return v===33?(e.consume(v),h):v===47?(e.consume(v),a=!0,A):v===63?(e.consume(v),r=3,i.interrupt?n:y):vn(v)?(e.consume(v),o=String.fromCharCode(v),b):t(v)}function h(v){return v===45?(e.consume(v),r=2,p):v===91?(e.consume(v),r=5,l=0,x):vn(v)?(e.consume(v),r=4,i.interrupt?n:y):t(v)}function p(v){return v===45?(e.consume(v),i.interrupt?n:y):t(v)}function x(v){const ye="CDATA[";return v===ye.charCodeAt(l++)?(e.consume(v),l===ye.length?i.interrupt?n:D:x):t(v)}function A(v){return vn(v)?(e.consume(v),o=String.fromCharCode(v),b):t(v)}function b(v){if(v===null||v===47||v===62||nn(v)){const ye=v===47,an=o.toLowerCase();return!ye&&!a&&Xc.includes(an)?(r=1,i.interrupt?n(v):D(v)):ex.includes(o.toLowerCase())?(r=6,ye?(e.consume(v),g):i.interrupt?n(v):D(v)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(v):a?m(v):w(v))}return v===45||dn(v)?(e.consume(v),o+=String.fromCharCode(v),b):t(v)}function g(v){return v===62?(e.consume(v),i.interrupt?n:D):t(v)}function m(v){return K(v)?(e.consume(v),m):Z(v)}function w(v){return v===47?(e.consume(v),Z):v===58||v===95||vn(v)?(e.consume(v),k):K(v)?(e.consume(v),w):Z(v)}function k(v){return v===45||v===46||v===58||v===95||dn(v)?(e.consume(v),k):P(v)}function P(v){return v===61?(e.consume(v),S):K(v)?(e.consume(v),P):w(v)}function S(v){return v===null||v===60||v===61||v===62||v===96?t(v):v===34||v===39?(e.consume(v),s=v,I):K(v)?(e.consume(v),S):M(v)}function I(v){return v===s?(e.consume(v),s=null,H):v===null||J(v)?t(v):(e.consume(v),I)}function M(v){return v===null||v===34||v===39||v===47||v===60||v===61||v===62||v===96||nn(v)?P(v):(e.consume(v),M)}function H(v){return v===47||v===62||K(v)?w(v):t(v)}function Z(v){return v===62?(e.consume(v),T):t(v)}function T(v){return v===null||J(v)?D(v):K(v)?(e.consume(v),T):t(v)}function D(v){return v===45&&r===2?(e.consume(v),he):v===60&&r===1?(e.consume(v),fe):v===62&&r===4?(e.consume(v),X):v===63&&r===3?(e.consume(v),y):v===93&&r===5?(e.consume(v),_):J(v)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(tx,Q,$)(v)):v===null||J(v)?(e.exit("htmlFlowData"),$(v)):(e.consume(v),D)}function $(v){return e.check(ix,le,Q)(v)}function le(v){return e.enter("lineEnding"),e.consume(v),e.exit("lineEnding"),O}function O(v){return v===null||J(v)?$(v):(e.enter("htmlFlowData"),D(v))}function he(v){return v===45?(e.consume(v),y):D(v)}function fe(v){return v===47?(e.consume(v),o="",R):D(v)}function R(v){if(v===62){const ye=o.toLowerCase();return Xc.includes(ye)?(e.consume(v),X):D(v)}return vn(v)&&o.length<8?(e.consume(v),o+=String.fromCharCode(v),R):D(v)}function _(v){return v===93?(e.consume(v),y):D(v)}function y(v){return v===62?(e.consume(v),X):v===45&&r===2?(e.consume(v),y):D(v)}function X(v){return v===null||J(v)?(e.exit("htmlFlowData"),Q(v)):(e.consume(v),X)}function Q(v){return e.exit("htmlFlow"),n(v)}}function ox(e,n,t){const i=this;return r;function r(o){return J(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):t(o)}function a(o){return i.parser.lazy[i.now().line]?t(o):n(o)}}function lx(e,n,t){return i;function i(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Fa,n,t)}}const sx={name:"htmlText",tokenize:ux};function ux(e,n,t){const i=this;let r,a,o;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),s}function s(y){return y===33?(e.consume(y),u):y===47?(e.consume(y),P):y===63?(e.consume(y),w):vn(y)?(e.consume(y),M):t(y)}function u(y){return y===45?(e.consume(y),c):y===91?(e.consume(y),a=0,x):vn(y)?(e.consume(y),m):t(y)}function c(y){return y===45?(e.consume(y),p):t(y)}function d(y){return y===null?t(y):y===45?(e.consume(y),h):J(y)?(o=d,fe(y)):(e.consume(y),d)}function h(y){return y===45?(e.consume(y),p):d(y)}function p(y){return y===62?he(y):y===45?h(y):d(y)}function x(y){const X="CDATA[";return y===X.charCodeAt(a++)?(e.consume(y),a===X.length?A:x):t(y)}function A(y){return y===null?t(y):y===93?(e.consume(y),b):J(y)?(o=A,fe(y)):(e.consume(y),A)}function b(y){return y===93?(e.consume(y),g):A(y)}function g(y){return y===62?he(y):y===93?(e.consume(y),g):A(y)}function m(y){return y===null||y===62?he(y):J(y)?(o=m,fe(y)):(e.consume(y),m)}function w(y){return y===null?t(y):y===63?(e.consume(y),k):J(y)?(o=w,fe(y)):(e.consume(y),w)}function k(y){return y===62?he(y):w(y)}function P(y){return vn(y)?(e.consume(y),S):t(y)}function S(y){return y===45||dn(y)?(e.consume(y),S):I(y)}function I(y){return J(y)?(o=I,fe(y)):K(y)?(e.consume(y),I):he(y)}function M(y){return y===45||dn(y)?(e.consume(y),M):y===47||y===62||nn(y)?H(y):t(y)}function H(y){return y===47?(e.consume(y),he):y===58||y===95||vn(y)?(e.consume(y),Z):J(y)?(o=H,fe(y)):K(y)?(e.consume(y),H):he(y)}function Z(y){return y===45||y===46||y===58||y===95||dn(y)?(e.consume(y),Z):T(y)}function T(y){return y===61?(e.consume(y),D):J(y)?(o=T,fe(y)):K(y)?(e.consume(y),T):H(y)}function D(y){return y===null||y===60||y===61||y===62||y===96?t(y):y===34||y===39?(e.consume(y),r=y,$):J(y)?(o=D,fe(y)):K(y)?(e.consume(y),D):(e.consume(y),le)}function $(y){return y===r?(e.consume(y),r=void 0,O):y===null?t(y):J(y)?(o=$,fe(y)):(e.consume(y),$)}function le(y){return y===null||y===34||y===39||y===60||y===61||y===96?t(y):y===47||y===62||nn(y)?H(y):(e.consume(y),le)}function O(y){return y===47||y===62||nn(y)?H(y):t(y)}function he(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),n):t(y)}function fe(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),R}function R(y){return K(y)?te(e,_,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):_(y)}function _(y){return e.enter("htmlTextData"),o(y)}}const Ys={name:"labelEnd",resolveAll:px,resolveTo:hx,tokenize:gx},cx={tokenize:mx},dx={tokenize:yx},fx={tokenize:wx};function px(e){let n=-1;const t=[];for(;++n<e.length;){const i=e[n][1];if(t.push(e[n]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",n+=r}}return e.length!==t.length&&kn(e,0,e.length,t),e}function hx(e,n){let t=e.length,i=0,r,a,o,l;for(;t--;)if(r=e[t][1],a){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[t][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(o){if(e[t][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(a=t,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(o=t);const s={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},u={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},c={type:"labelText",start:{...e[a+i+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",s,n],["enter",u,n]],l=Ke(l,e.slice(a+1,a+i+3)),l=Ke(l,[["enter",c,n]]),l=Ke(l,Xs(n.parser.constructs.insideSpan.null,e.slice(a+i+4,o-3),n)),l=Ke(l,[["exit",c,n],e[o-2],e[o-1],["exit",u,n]]),l=Ke(l,e.slice(o+1)),l=Ke(l,[["exit",s,n]]),kn(e,a,e.length,l),e}function gx(e,n,t){const i=this;let r=i.events.length,a,o;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){a=i.events[r][1];break}return l;function l(h){return a?a._inactive?d(h):(o=i.parser.defined.includes(Qt(i.sliceSerialize({start:a.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),s):t(h)}function s(h){return h===40?e.attempt(cx,c,o?c:d)(h):h===91?e.attempt(dx,c,o?u:d)(h):o?c(h):d(h)}function u(h){return e.attempt(fx,c,d)(h)}function c(h){return n(h)}function d(h){return a._balanced=!0,t(h)}}function mx(e,n,t){return i;function i(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),r}function r(d){return nn(d)?Hi(e,a)(d):a(d)}function a(d){return d===41?c(d):xh(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function o(d){return nn(d)?Hi(e,s)(d):c(d)}function l(d){return t(d)}function s(d){return d===34||d===39||d===40?Ah(e,u,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return nn(d)?Hi(e,c)(d):c(d)}function c(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function yx(e,n,t){const i=this;return r;function r(l){return vh.call(i,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return i.parser.defined.includes(Qt(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(l):t(l)}function o(l){return t(l)}}function wx(e,n,t){return i;function i(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),r}function r(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const xx={name:"labelStartImage",resolveAll:Ys.resolveAll,tokenize:vx};function vx(e,n,t){const i=this;return r;function r(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):t(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(l):n(l)}}const Ax={name:"labelStartLink",resolveAll:Ys.resolveAll,tokenize:Sx};function Sx(e,n,t){const i=this;return r;function r(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(o):n(o)}}const Co={name:"lineEnding",tokenize:kx};function kx(e,n){return t;function t(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),te(e,n,"linePrefix")}}const $r={name:"thematicBreak",tokenize:bx};function bx(e,n,t){let i=0,r;return a;function a(u){return e.enter("thematicBreak"),o(u)}function o(u){return r=u,l(u)}function l(u){return u===r?(e.enter("thematicBreakSequence"),s(u)):i>=3&&(u===null||J(u))?(e.exit("thematicBreak"),n(u)):t(u)}function s(u){return u===r?(e.consume(u),i++,s):(e.exit("thematicBreakSequence"),K(u)?te(e,l,"whitespace")(u):l(u))}}const Ze={continuation:{tokenize:Ex},exit:Ix,name:"list",tokenize:Lx},Cx={partial:!0,tokenize:Wx},Px={partial:!0,tokenize:Nx};function Lx(e,n,t){const i=this,r=i.events[i.events.length-1];let a=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return l;function l(p){const x=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:Tl(p)){if(i.containerState.type||(i.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check($r,t,u)(p):u(p);if(!i.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),s(p)}return t(p)}function s(p){return Tl(p)&&++o<10?(e.consume(p),s):(!i.interrupt||o<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),u(p)):t(p)}function u(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,e.check(Fa,i.interrupt?t:c,e.attempt(Cx,h,d))}function c(p){return i.containerState.initialBlankLine=!0,a++,h(p)}function d(p){return K(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):t(p)}function h(p){return i.containerState.size=a+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Ex(e,n,t){const i=this;return i.containerState._closeFlow=void 0,e.check(Fa,r,a);function r(l){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,te(e,n,"listItemIndent",i.containerState.size+1)(l)}function a(l){return i.containerState.furtherBlankLines||!K(l)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,o(l)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(Px,n,o)(l))}function o(l){return i.containerState._closeFlow=!0,i.interrupt=void 0,te(e,e.attempt(Ze,n,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function Nx(e,n,t){const i=this;return te(e,r,"listItemIndent",i.containerState.size+1);function r(a){const o=i.events[i.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===i.containerState.size?n(a):t(a)}}function Ix(e){e.exit(this.containerState.type)}function Wx(e,n,t){const i=this;return te(e,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(a){const o=i.events[i.events.length-1];return!K(a)&&o&&o[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const Yc={name:"setextUnderline",resolveTo:Rx,tokenize:Mx};function Rx(e,n){let t=e.length,i,r,a;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){i=t;break}e[t][1].type==="paragraph"&&(r=t)}else e[t][1].type==="content"&&e.splice(t,1),!a&&e[t][1].type==="definition"&&(a=t);const o={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",a?(e.splice(r,0,["enter",o,n]),e.splice(a+1,0,["exit",e[i][1],n]),e[i][1].end={...e[a][1].end}):e[i][1]=o,e.push(["exit",o,n]),e}function Mx(e,n,t){const i=this;let r;return a;function a(u){let c=i.events.length,d;for(;c--;)if(i.events[c][1].type!=="lineEnding"&&i.events[c][1].type!=="linePrefix"&&i.events[c][1].type!=="content"){d=i.events[c][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||d)?(e.enter("setextHeadingLine"),r=u,o(u)):t(u)}function o(u){return e.enter("setextHeadingLineSequence"),l(u)}function l(u){return u===r?(e.consume(u),l):(e.exit("setextHeadingLineSequence"),K(u)?te(e,s,"lineSuffix")(u):s(u))}function s(u){return u===null||J(u)?(e.exit("setextHeadingLine"),n(u)):t(u)}}const jx={tokenize:Zx};function Zx(e){const n=this,t=e.attempt(Fa,i,e.attempt(this.parser.constructs.flowInitial,r,te(e,e.attempt(this.parser.constructs.flow,r,e.attempt(Tw,r)),"linePrefix")));return t;function i(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const Tx={resolveAll:kh()},Dx=Sh("string"),_x=Sh("text");function Sh(e){return{resolveAll:kh(e==="text"?Hx:void 0),tokenize:n};function n(t){const i=this,r=this.parser.constructs[e],a=t.attempt(r,o,l);return o;function o(c){return u(c)?a(c):l(c)}function l(c){if(c===null){t.consume(c);return}return t.enter("data"),t.consume(c),s}function s(c){return u(c)?(t.exit("data"),a(c)):(t.consume(c),s)}function u(c){if(c===null)return!0;const d=r[c];let h=-1;if(d)for(;++h<d.length;){const p=d[h];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function kh(e){return n;function n(t,i){let r=-1,a;for(;++r<=t.length;)a===void 0?t[r]&&t[r][1].type==="data"&&(a=r,r++):(!t[r]||t[r][1].type!=="data")&&(r!==a+2&&(t[a][1].end=t[r-1][1].end,t.splice(a+2,r-a-2),r=a+2),a=void 0);return e?e(t,i):t}}function Hx(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const i=e[t-1][1],r=n.sliceStream(i);let a=r.length,o=-1,l=0,s;for(;a--;){const u=r[a];if(typeof u=="string"){for(o=u.length;u.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(u===-2)s=!0,l++;else if(u!==-1){a++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(l=0),l){const u={type:t===e.length||s||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:i.start._bufferIndex+o,_index:i.start._index+a,line:i.end.line,column:i.end.column-l,offset:i.end.offset-l},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(e.splice(t,0,["enter",u,n],["exit",u,n]),t+=2)}t++}return e}const zx={42:Ze,43:Ze,45:Ze,48:Ze,49:Ze,50:Ze,51:Ze,52:Ze,53:Ze,54:Ze,55:Ze,56:Ze,57:Ze,62:gh},Bx={91:Ow},Jx={[-2]:bo,[-1]:bo,32:bo},Ux={35:Qw,42:$r,45:[Yc,$r],60:nx,61:Yc,95:$r,96:Fc,126:Fc},Fx={38:yh,92:mh},Ox={[-5]:Co,[-4]:Co,[-3]:Co,33:xx,38:yh,42:Zl,60:[yw,sx],91:Ax,92:[$w,mh],93:Ys,95:Zl,96:Iw},Gx={null:[Zl,Tx]},Xx={null:[42,95]},Yx={null:[]},$x=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Xx,contentInitial:Bx,disable:Yx,document:zx,flow:Ux,flowInitial:Jx,insideSpan:Gx,string:Fx,text:Ox},Symbol.toStringTag,{value:"Module"}));function Vx(e,n,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const r={},a=[];let o=[],l=[];const s={attempt:I(P),check:I(S),consume:m,enter:w,exit:k,interrupt:I(S,{interrupt:!0})},u={code:null,containerState:{},defineSkip:A,events:[],now:x,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:d};let c=n.tokenize.call(u,s);return n.resolveAll&&a.push(n),u;function d(T){return o=Ke(o,T),b(),o[o.length-1]!==null?[]:(M(n,0),u.events=Xs(a,u.events,u),u.events)}function h(T,D){return Kx(p(T),D)}function p(T){return Qx(o,T)}function x(){const{_bufferIndex:T,_index:D,line:$,column:le,offset:O}=i;return{_bufferIndex:T,_index:D,line:$,column:le,offset:O}}function A(T){r[T.line]=T.column,Z()}function b(){let T;for(;i._index<o.length;){const D=o[i._index];if(typeof D=="string")for(T=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===T&&i._bufferIndex<D.length;)g(D.charCodeAt(i._bufferIndex));else g(D)}}function g(T){c=c(T)}function m(T){Gs(T)?(i.line++,i.column=1,i.offset+=T===-3?2:1,Z()):T!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=T}function w(T,D){const $=D||{};return $.type=T,$.start=x(),u.events.push(["enter",$,u]),l.push($),$}function k(T){const D=l.pop();return D.end=x(),u.events.push(["exit",D,u]),D}function P(T,D){M(T,D.from)}function S(T,D){D.restore()}function I(T,D){return $;function $(le,O,he){let fe,R,_,y;return Array.isArray(le)?Q(le):"tokenize"in le?Q([le]):X(le);function X(ie){return gn;function gn(Dn){const Ct=Dn!==null&&ie[Dn],Pt=Dn!==null&&ie.null,gr=[...Array.isArray(Ct)?Ct:Ct?[Ct]:[],...Array.isArray(Pt)?Pt:Pt?[Pt]:[]];return Q(gr)(Dn)}}function Q(ie){return fe=ie,R=0,ie.length===0?he:v(ie[R])}function v(ie){return gn;function gn(Dn){return y=H(),_=ie,ie.partial||(u.currentConstruct=ie),ie.name&&u.parser.constructs.disable.null.includes(ie.name)?an():ie.tokenize.call(D?Object.assign(Object.create(u),D):u,s,ye,an)(Dn)}}function ye(ie){return T(_,y),O}function an(ie){return y.restore(),++R<fe.length?v(fe[R]):he}}}function M(T,D){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&kn(u.events,D,u.events.length-D,T.resolve(u.events.slice(D),u)),T.resolveTo&&(u.events=T.resolveTo(u.events,u))}function H(){const T=x(),D=u.previous,$=u.currentConstruct,le=u.events.length,O=Array.from(l);return{from:le,restore:he};function he(){i=T,u.previous=D,u.currentConstruct=$,u.events.length=le,l=O,Z()}}function Z(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function Qx(e,n){const t=n.start._index,i=n.start._bufferIndex,r=n.end._index,a=n.end._bufferIndex;let o;if(t===r)o=[e[t].slice(i,a)];else{if(o=e.slice(t,r),i>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(i):o.shift()}a>0&&o.push(e[r].slice(0,a))}return o}function Kx(e,n){let t=-1;const i=[];let r;for(;++t<e.length;){const a=e[t];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=n?" ":"	";break}case-1:{if(!n&&r)continue;o=" ";break}default:o=String.fromCharCode(a)}r=a===-2,i.push(o)}return i.join("")}function qx(e){const i={constructs:ew([$x,...(e||{}).extensions||[]]),content:r(iw),defined:[],document:r(aw),flow:r(jx),lazy:{},string:r(Dx),text:r(_x)};return i;function r(a){return o;function o(l){return Vx(i,a,l)}}}function ev(e){for(;!wh(e););return e}const $c=/[\0\t\n\r]/g;function nv(){let e=1,n="",t=!0,i;return r;function r(a,o,l){const s=[];let u,c,d,h,p;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),d=0,n="",t&&(a.charCodeAt(0)===65279&&d++,t=void 0);d<a.length;){if($c.lastIndex=d,u=$c.exec(a),h=u&&u.index!==void 0?u.index:a.length,p=a.charCodeAt(h),!u){n=a.slice(d);break}if(p===10&&d===h&&i)s.push(-3),i=void 0;else switch(i&&(s.push(-5),i=void 0),d<h&&(s.push(a.slice(d,h)),e+=h-d),p){case 0:{s.push(65533),e++;break}case 9:{for(c=Math.ceil(e/4)*4,s.push(-2);e++<c;)s.push(-1);break}case 10:{s.push(-4),e=1;break}default:i=!0,e=1}d=h+1}return l&&(i&&s.push(-5),n&&s.push(n),s.push(null)),s}}const tv=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function iv(e){return e.replace(tv,rv)}function rv(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const r=t.charCodeAt(1),a=r===120||r===88;return ph(t.slice(a?2:1),a?16:10)}return Os(t)||e}const bh={}.hasOwnProperty;function av(e,n,t){return typeof n!="string"&&(t=n,n=void 0),ov(t)(ev(qx(t).document().write(nv()(e,n,!0))))}function ov(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(iu),autolinkProtocol:H,autolinkEmail:H,atxHeading:a(eu),blockQuote:a(Pt),characterEscape:H,characterReference:H,codeFenced:a(gr),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(gr,o),codeText:a(Hh,o),codeTextData:H,data:H,codeFlowValue:H,definition:a(zh),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Bh),hardBreakEscape:a(nu),hardBreakTrailing:a(nu),htmlFlow:a(tu,o),htmlFlowData:H,htmlText:a(tu,o),htmlTextData:H,image:a(Jh),label:o,link:a(iu),listItem:a(Uh),listItemValue:h,listOrdered:a(ru,d),listUnordered:a(ru),paragraph:a(Fh),reference:v,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(eu),strong:a(Oh),thematicBreak:a(Xh)},exit:{atxHeading:s(),atxHeadingSequence:P,autolink:s(),autolinkEmail:Ct,autolinkProtocol:Dn,blockQuote:s(),characterEscapeValue:Z,characterReferenceMarkerHexadecimal:an,characterReferenceMarkerNumeric:an,characterReferenceValue:ie,characterReference:gn,codeFenced:s(b),codeFencedFence:A,codeFencedFenceInfo:p,codeFencedFenceMeta:x,codeFlowValue:Z,codeIndented:s(g),codeText:s(O),codeTextData:Z,data:Z,definition:s(),definitionDestinationString:k,definitionLabelString:m,definitionTitleString:w,emphasis:s(),hardBreakEscape:s(D),hardBreakTrailing:s(D),htmlFlow:s($),htmlFlowData:Z,htmlText:s(le),htmlTextData:Z,image:s(fe),label:_,labelText:R,lineEnding:T,link:s(he),listItem:s(),listOrdered:s(),listUnordered:s(),paragraph:s(),referenceString:ye,resourceDestinationString:y,resourceTitleString:X,resource:Q,setextHeading:s(M),setextHeadingLineSequence:I,setextHeadingText:S,strong:s(),thematicBreak:s()}};Ch(n,(e||{}).mdastExtensions||[]);const t={};return i;function i(C){let W={type:"root",children:[]};const z={stack:[W],tokenStack:[],config:n,enter:l,exit:u,buffer:o,resume:c,data:t},G=[];let q=-1;for(;++q<C.length;)if(C[q][1].type==="listOrdered"||C[q][1].type==="listUnordered")if(C[q][0]==="enter")G.push(q);else{const on=G.pop();q=r(C,on,q)}for(q=-1;++q<C.length;){const on=n[C[q][0]];bh.call(on,C[q][1].type)&&on[C[q][1].type].call(Object.assign({sliceSerialize:C[q][2].sliceSerialize},z),C[q][1])}if(z.tokenStack.length>0){const on=z.tokenStack[z.tokenStack.length-1];(on[1]||Vc).call(z,void 0,on[0])}for(W.position={start:Hn(C.length>0?C[0][1].start:{line:1,column:1,offset:0}),end:Hn(C.length>0?C[C.length-2][1].end:{line:1,column:1,offset:0})},q=-1;++q<n.transforms.length;)W=n.transforms[q](W)||W;return W}function r(C,W,z){let G=W-1,q=-1,on=!1,ot,bn,fi,pi;for(;++G<=z;){const Je=C[G];switch(Je[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Je[0]==="enter"?q++:q--,pi=void 0;break}case"lineEndingBlank":{Je[0]==="enter"&&(ot&&!pi&&!q&&!fi&&(fi=G),pi=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:pi=void 0}if(!q&&Je[0]==="enter"&&Je[1].type==="listItemPrefix"||q===-1&&Je[0]==="exit"&&(Je[1].type==="listUnordered"||Je[1].type==="listOrdered")){if(ot){let Lt=G;for(bn=void 0;Lt--;){const Cn=C[Lt];if(Cn[1].type==="lineEnding"||Cn[1].type==="lineEndingBlank"){if(Cn[0]==="exit")continue;bn&&(C[bn][1].type="lineEndingBlank",on=!0),Cn[1].type="lineEnding",bn=Lt}else if(!(Cn[1].type==="linePrefix"||Cn[1].type==="blockQuotePrefix"||Cn[1].type==="blockQuotePrefixWhitespace"||Cn[1].type==="blockQuoteMarker"||Cn[1].type==="listItemIndent"))break}fi&&(!bn||fi<bn)&&(ot._spread=!0),ot.end=Object.assign({},bn?C[bn][1].start:Je[1].end),C.splice(bn||G,0,["exit",ot,Je[2]]),G++,z++}if(Je[1].type==="listItemPrefix"){const Lt={type:"listItem",_spread:!1,start:Object.assign({},Je[1].start),end:void 0};ot=Lt,C.splice(G,0,["enter",Lt,Je[2]]),G++,z++,fi=void 0,pi=!0}}}return C[W][1]._spread=on,z}function a(C,W){return z;function z(G){l.call(this,C(G),G),W&&W.call(this,G)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(C,W,z){this.stack[this.stack.length-1].children.push(C),this.stack.push(C),this.tokenStack.push([W,z||void 0]),C.position={start:Hn(W.start),end:void 0}}function s(C){return W;function W(z){C&&C.call(this,z),u.call(this,z)}}function u(C,W){const z=this.stack.pop(),G=this.tokenStack.pop();if(G)G[0].type!==C.type&&(W?W.call(this,C,G[0]):(G[1]||Vc).call(this,C,G[0]));else throw new Error("Cannot close `"+C.type+"` ("+_i({start:C.start,end:C.end})+"): it’s not open");z.position.end=Hn(C.end)}function c(){return K1(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(C){if(this.data.expectingFirstListItemValue){const W=this.stack[this.stack.length-2];W.start=Number.parseInt(this.sliceSerialize(C),10),this.data.expectingFirstListItemValue=void 0}}function p(){const C=this.resume(),W=this.stack[this.stack.length-1];W.lang=C}function x(){const C=this.resume(),W=this.stack[this.stack.length-1];W.meta=C}function A(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function b(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function g(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C.replace(/(\r?\n|\r)$/g,"")}function m(C){const W=this.resume(),z=this.stack[this.stack.length-1];z.label=W,z.identifier=Qt(this.sliceSerialize(C)).toLowerCase()}function w(){const C=this.resume(),W=this.stack[this.stack.length-1];W.title=C}function k(){const C=this.resume(),W=this.stack[this.stack.length-1];W.url=C}function P(C){const W=this.stack[this.stack.length-1];if(!W.depth){const z=this.sliceSerialize(C).length;W.depth=z}}function S(){this.data.setextHeadingSlurpLineEnding=!0}function I(C){const W=this.stack[this.stack.length-1];W.depth=this.sliceSerialize(C).codePointAt(0)===61?1:2}function M(){this.data.setextHeadingSlurpLineEnding=void 0}function H(C){const z=this.stack[this.stack.length-1].children;let G=z[z.length-1];(!G||G.type!=="text")&&(G=Gh(),G.position={start:Hn(C.start),end:void 0},z.push(G)),this.stack.push(G)}function Z(C){const W=this.stack.pop();W.value+=this.sliceSerialize(C),W.position.end=Hn(C.end)}function T(C){const W=this.stack[this.stack.length-1];if(this.data.atHardBreak){const z=W.children[W.children.length-1];z.position.end=Hn(C.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(W.type)&&(H.call(this,C),Z.call(this,C))}function D(){this.data.atHardBreak=!0}function $(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C}function le(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C}function O(){const C=this.resume(),W=this.stack[this.stack.length-1];W.value=C}function he(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=W,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function fe(){const C=this.stack[this.stack.length-1];if(this.data.inReference){const W=this.data.referenceType||"shortcut";C.type+="Reference",C.referenceType=W,delete C.url,delete C.title}else delete C.identifier,delete C.label;this.data.referenceType=void 0}function R(C){const W=this.sliceSerialize(C),z=this.stack[this.stack.length-2];z.label=iv(W),z.identifier=Qt(W).toLowerCase()}function _(){const C=this.stack[this.stack.length-1],W=this.resume(),z=this.stack[this.stack.length-1];if(this.data.inReference=!0,z.type==="link"){const G=C.children;z.children=G}else z.alt=W}function y(){const C=this.resume(),W=this.stack[this.stack.length-1];W.url=C}function X(){const C=this.resume(),W=this.stack[this.stack.length-1];W.title=C}function Q(){this.data.inReference=void 0}function v(){this.data.referenceType="collapsed"}function ye(C){const W=this.resume(),z=this.stack[this.stack.length-1];z.label=W,z.identifier=Qt(this.sliceSerialize(C)).toLowerCase(),this.data.referenceType="full"}function an(C){this.data.characterReferenceType=C.type}function ie(C){const W=this.sliceSerialize(C),z=this.data.characterReferenceType;let G;z?(G=ph(W,z==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):G=Os(W);const q=this.stack[this.stack.length-1];q.value+=G}function gn(C){const W=this.stack.pop();W.position.end=Hn(C.end)}function Dn(C){Z.call(this,C);const W=this.stack[this.stack.length-1];W.url=this.sliceSerialize(C)}function Ct(C){Z.call(this,C);const W=this.stack[this.stack.length-1];W.url="mailto:"+this.sliceSerialize(C)}function Pt(){return{type:"blockquote",children:[]}}function gr(){return{type:"code",lang:null,meta:null,value:""}}function Hh(){return{type:"inlineCode",value:""}}function zh(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Bh(){return{type:"emphasis",children:[]}}function eu(){return{type:"heading",depth:0,children:[]}}function nu(){return{type:"break"}}function tu(){return{type:"html",value:""}}function Jh(){return{type:"image",title:null,url:"",alt:null}}function iu(){return{type:"link",title:null,url:"",children:[]}}function ru(C){return{type:"list",ordered:C.type==="listOrdered",start:null,spread:C._spread,children:[]}}function Uh(C){return{type:"listItem",spread:C._spread,checked:null,children:[]}}function Fh(){return{type:"paragraph",children:[]}}function Oh(){return{type:"strong",children:[]}}function Gh(){return{type:"text",value:""}}function Xh(){return{type:"thematicBreak"}}}function Hn(e){return{line:e.line,column:e.column,offset:e.offset}}function Ch(e,n){let t=-1;for(;++t<n.length;){const i=n[t];Array.isArray(i)?Ch(e,i):lv(e,i)}}function lv(e,n){let t;for(t in n)if(bh.call(n,t))switch(t){case"canContainEols":{const i=n[t];i&&e[t].push(...i);break}case"transforms":{const i=n[t];i&&e[t].push(...i);break}case"enter":case"exit":{const i=n[t];i&&Object.assign(e[t],i);break}}}function Vc(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+_i({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+_i({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+_i({start:n.start,end:n.end})+") is still open")}function sv(e){const n=this;n.parser=t;function t(i){return av(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function uv(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function cv(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function dv(e,n){const t=n.value?n.value+`
`:"",i={},r=n.lang?n.lang.split(/\s+/):[];r.length>0&&(i.className=["language-"+r[0]]);let a={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return n.meta&&(a.data={meta:n.meta}),e.patch(n,a),a=e.applyData(n,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(n,a),a}function fv(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function pv(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Qc=hv(/[\dA-Za-z]/);function hv(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function di(e){const n=[];let t=-1,i=0,r=0;for(;++t<e.length;){const a=e.charCodeAt(t);let o="";if(a===37&&Qc(e.charCodeAt(t+1))&&Qc(e.charCodeAt(t+2)))r=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(t+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),r=1):o="�"}else o=String.fromCharCode(a);o&&(n.push(e.slice(i,t),encodeURIComponent(o)),i=t+r+1,o=""),r&&(t+=r,r=0)}return n.join("")+e.slice(i)}function gv(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),r=di(i.toLowerCase()),a=e.footnoteOrder.indexOf(i);let o,l=e.footnoteCounts.get(i);l===void 0?(l=0,e.footnoteOrder.push(i),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(i,l);const s={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+r,id:t+"fnref-"+r+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(n,s);const u={type:"element",tagName:"sup",properties:{},children:[s]};return e.patch(n,u),e.applyData(n,u)}function mv(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function yv(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function Ph(e,n){const t=n.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const r=e.all(n),a=r[0];a&&a.type==="text"?a.value="["+a.value:r.unshift({type:"text",value:"["});const o=r[r.length-1];return o&&o.type==="text"?o.value+=i:r.push({type:"text",value:i}),r}function wv(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return Ph(e,n);const r={src:di(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(n,a),e.applyData(n,a)}function xv(e,n){const t={src:di(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,i),e.applyData(n,i)}function vv(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,i),e.applyData(n,i)}function Av(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return Ph(e,n);const r={href:di(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const a={type:"element",tagName:"a",properties:r,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Sv(e,n){const t={href:di(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function kv(e,n,t){const i=e.all(n),r=t?bv(t):Lh(n),a={},o=[];if(typeof n.checked=="boolean"){const c=i[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},i.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<i.length;){const c=i[l];(r||l!==0||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!r?o.push(...c.children):o.push(c)}const s=i[i.length-1];s&&(r||s.type!=="element"||s.tagName!=="p")&&o.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:a,children:o};return e.patch(n,u),e.applyData(n,u)}function bv(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let i=-1;for(;!n&&++i<t.length;)n=Lh(t[i])}return n}function Lh(e){const n=e.spread;return n??e.children.length>1}function Cv(e,n){const t={},i=e.all(n);let r=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++r<i.length;){const o=i[r];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function Pv(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Lv(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Ev(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Nv(e,n){const t=e.all(n),i=t.shift(),r=[];if(i){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],o),r.push(o)}if(t.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},l=Bs(n.children[1]),s=oh(n.children[n.children.length-1]);l&&s&&(o.position={start:l,end:s}),r.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function Iv(e,n,t){const i=t?t.children:void 0,a=(i?i.indexOf(n):1)===0?"th":"td",o=t&&t.type==="table"?t.align:void 0,l=o?o.length:n.children.length;let s=-1;const u=[];for(;++s<l;){const d=n.children[s],h={},p=o?o[s]:void 0;p&&(h.align=p);let x={type:"element",tagName:a,properties:h,children:[]};d&&(x.children=e.all(d),e.patch(d,x),x=e.applyData(d,x)),u.push(x)}const c={type:"element",tagName:"tr",properties:{},children:e.wrap(u,!0)};return e.patch(n,c),e.applyData(n,c)}function Wv(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const Kc=9,qc=32;function Rv(e){const n=String(e),t=/\r?\n|\r/g;let i=t.exec(n),r=0;const a=[];for(;i;)a.push(ed(n.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=t.exec(n);return a.push(ed(n.slice(r),r>0,!1)),a.join("")}function ed(e,n,t){let i=0,r=e.length;if(n){let a=e.codePointAt(i);for(;a===Kc||a===qc;)i++,a=e.codePointAt(i)}if(t){let a=e.codePointAt(r-1);for(;a===Kc||a===qc;)r--,a=e.codePointAt(r-1)}return r>i?e.slice(i,r):""}function Mv(e,n){const t={type:"text",value:Rv(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function jv(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Zv={blockquote:uv,break:cv,code:dv,delete:fv,emphasis:pv,footnoteReference:gv,heading:mv,html:yv,imageReference:wv,image:xv,inlineCode:vv,linkReference:Av,link:Sv,listItem:kv,list:Cv,paragraph:Pv,root:Lv,strong:Ev,table:Nv,tableCell:Wv,tableRow:Iv,text:Mv,thematicBreak:jv,toml:Mr,yaml:Mr,definition:Mr,footnoteDefinition:Mr};function Mr(){}const Eh=-1,Oa=0,zi=1,ba=2,$s=3,Vs=4,Qs=5,Ks=6,Nh=7,Ih=8,nd=typeof self=="object"?self:globalThis,Tv=(e,n)=>{const t=(r,a)=>(e.set(a,r),r),i=r=>{if(e.has(r))return e.get(r);const[a,o]=n[r];switch(a){case Oa:case Eh:return t(o,r);case zi:{const l=t([],r);for(const s of o)l.push(i(s));return l}case ba:{const l=t({},r);for(const[s,u]of o)l[i(s)]=i(u);return l}case $s:return t(new Date(o),r);case Vs:{const{source:l,flags:s}=o;return t(new RegExp(l,s),r)}case Qs:{const l=t(new Map,r);for(const[s,u]of o)l.set(i(s),i(u));return l}case Ks:{const l=t(new Set,r);for(const s of o)l.add(i(s));return l}case Nh:{const{name:l,message:s}=o;return t(new nd[l](s),r)}case Ih:return t(BigInt(o),r);case"BigInt":return t(Object(BigInt(o)),r);case"ArrayBuffer":return t(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return t(new DataView(l),o)}}return t(new nd[a](o),r)};return i},td=e=>Tv(new Map,e)(0),Nt="",{toString:Dv}={},{keys:_v}=Object,ki=e=>{const n=typeof e;if(n!=="object"||!e)return[Oa,n];const t=Dv.call(e).slice(8,-1);switch(t){case"Array":return[zi,Nt];case"Object":return[ba,Nt];case"Date":return[$s,Nt];case"RegExp":return[Vs,Nt];case"Map":return[Qs,Nt];case"Set":return[Ks,Nt];case"DataView":return[zi,t]}return t.includes("Array")?[zi,t]:t.includes("Error")?[Nh,t]:[ba,t]},jr=([e,n])=>e===Oa&&(n==="function"||n==="symbol"),Hv=(e,n,t,i)=>{const r=(o,l)=>{const s=i.push(o)-1;return t.set(l,s),s},a=o=>{if(t.has(o))return t.get(o);let[l,s]=ki(o);switch(l){case Oa:{let c=o;switch(s){case"bigint":l=Ih,c=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+s);c=null;break;case"undefined":return r([Eh],o)}return r([l,c],o)}case zi:{if(s){let h=o;return s==="DataView"?h=new Uint8Array(o.buffer):s==="ArrayBuffer"&&(h=new Uint8Array(o)),r([s,[...h]],o)}const c=[],d=r([l,c],o);for(const h of o)c.push(a(h));return d}case ba:{if(s)switch(s){case"BigInt":return r([s,o.toString()],o);case"Boolean":case"Number":case"String":return r([s,o.valueOf()],o)}if(n&&"toJSON"in o)return a(o.toJSON());const c=[],d=r([l,c],o);for(const h of _v(o))(e||!jr(ki(o[h])))&&c.push([a(h),a(o[h])]);return d}case $s:return r([l,o.toISOString()],o);case Vs:{const{source:c,flags:d}=o;return r([l,{source:c,flags:d}],o)}case Qs:{const c=[],d=r([l,c],o);for(const[h,p]of o)(e||!(jr(ki(h))||jr(ki(p))))&&c.push([a(h),a(p)]);return d}case Ks:{const c=[],d=r([l,c],o);for(const h of o)(e||!jr(ki(h)))&&c.push(a(h));return d}}const{message:u}=o;return r([l,{name:s,message:u}],o)};return a},id=(e,{json:n,lossy:t}={})=>{const i=[];return Hv(!(n||t),!!n,new Map,i)(e),i},Ca=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?td(id(e,n)):structuredClone(e):(e,n)=>td(id(e,n));function zv(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Bv(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function Jv(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||zv,i=e.options.footnoteBackLabel||Bv,r=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let s=-1;for(;++s<e.footnoteOrder.length;){const u=e.footnoteById.get(e.footnoteOrder[s]);if(!u)continue;const c=e.all(u),d=String(u.identifier).toUpperCase(),h=di(d.toLowerCase());let p=0;const x=[],A=e.footnoteCounts.get(d);for(;A!==void 0&&++p<=A;){x.length>0&&x.push({type:"text",value:" "});let m=typeof t=="string"?t:t(s,p);typeof m=="string"&&(m={type:"text",value:m}),x.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(s,p),className:["data-footnote-backref"]},children:Array.isArray(m)?m:[m]})}const b=c[c.length-1];if(b&&b.type==="element"&&b.tagName==="p"){const m=b.children[b.children.length-1];m&&m.type==="text"?m.value+=" ":b.children.push({type:"text",value:" "}),b.children.push(...x)}else c.push(...x);const g={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(c,!0)};e.patch(u,g),l.push(g)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Ca(o),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Wh=function(e){if(e==null)return Gv;if(typeof e=="function")return Ga(e);if(typeof e=="object")return Array.isArray(e)?Uv(e):Fv(e);if(typeof e=="string")return Ov(e);throw new Error("Expected function, string, or object as test")};function Uv(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Wh(e[t]);return Ga(i);function i(...r){let a=-1;for(;++a<n.length;)if(n[a].apply(this,r))return!0;return!1}}function Fv(e){const n=e;return Ga(t);function t(i){const r=i;let a;for(a in e)if(r[a]!==n[a])return!1;return!0}}function Ov(e){return Ga(n);function n(t){return t&&t.type===e}}function Ga(e){return n;function n(t,i,r){return!!(Xv(t)&&e.call(this,t,typeof i=="number"?i:void 0,r||void 0))}}function Gv(){return!0}function Xv(e){return e!==null&&typeof e=="object"&&"type"in e}const Rh=[],Yv=!0,rd=!1,$v="skip";function Vv(e,n,t,i){let r;typeof n=="function"&&typeof t!="function"?(i=t,t=n):r=n;const a=Wh(r),o=i?-1:1;l(e,void 0,[])();function l(s,u,c){const d=s&&typeof s=="object"?s:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(s.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Rh,x,A,b;if((!n||a(s,u,c[c.length-1]||void 0))&&(p=Qv(t(s,c)),p[0]===rd))return p;if("children"in s&&s.children){const g=s;if(g.children&&p[0]!==$v)for(A=(i?g.children.length:-1)+o,b=c.concat(g);A>-1&&A<g.children.length;){const m=g.children[A];if(x=l(m,A,b)(),x[0]===rd)return x;A=typeof x[1]=="number"?x[1]:A+o}}return p}}}function Qv(e){return Array.isArray(e)?e:typeof e=="number"?[Yv,e]:e==null?Rh:[e]}function Mh(e,n,t,i){let r,a,o;typeof n=="function"&&typeof t!="function"?(a=void 0,o=n,r=t):(a=n,o=t,r=i),Vv(e,a,l,r);function l(s,u){const c=u[u.length-1],d=c?c.children.indexOf(s):void 0;return o(s,d,c)}}const Dl={}.hasOwnProperty,Kv={};function qv(e,n){const t=n||Kv,i=new Map,r=new Map,a=new Map,o={...Zv,...t.handlers},l={all:u,applyData:n2,definitionById:i,footnoteById:r,footnoteCounts:a,footnoteOrder:[],handlers:o,one:s,options:t,patch:e2,wrap:i2};return Mh(e,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?i:r,h=String(c.identifier).toUpperCase();d.has(h)||d.set(h,c)}}),l;function s(c,d){const h=c.type,p=l.handlers[h];if(Dl.call(l.handlers,h)&&p)return p(l,c,d);if(l.options.passThrough&&l.options.passThrough.includes(h)){if("children"in c){const{children:A,...b}=c,g=Ca(b);return g.children=l.all(c),g}return Ca(c)}return(l.options.unknownHandler||t2)(l,c,d)}function u(c){const d=[];if("children"in c){const h=c.children;let p=-1;for(;++p<h.length;){const x=l.one(h[p],c);if(x){if(p&&h[p-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=ad(x.value)),!Array.isArray(x)&&x.type==="element")){const A=x.children[0];A&&A.type==="text"&&(A.value=ad(A.value))}Array.isArray(x)?d.push(...x):d.push(x)}}}return d}}function e2(e,n){e.position&&(n.position=I1(e))}function n2(e,n){let t=n;if(e&&e.data){const i=e.data.hName,r=e.data.hChildren,a=e.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const o="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:o}}t.type==="element"&&a&&Object.assign(t.properties,Ca(a)),"children"in t&&t.children&&r!==null&&r!==void 0&&(t.children=r)}return t}function t2(e,n){const t=n.data||{},i="value"in n&&!(Dl.call(t,"hProperties")||Dl.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function i2(e,n){const t=[];let i=-1;for(n&&t.push({type:"text",value:`
`});++i<e.length;)i&&t.push({type:"text",value:`
`}),t.push(e[i]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function ad(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function od(e,n){const t=qv(e,n),i=t.one(e,void 0),r=Jv(t),a=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&a.children.push({type:"text",value:`
`},r),a}function r2(e,n){return e&&"run"in e?async function(t,i){const r=od(t,{file:i,...n});await e.run(r,i)}:function(t,i){return od(t,{file:i,...e||n})}}function ld(e){if(e)throw e}var Vr=Object.prototype.hasOwnProperty,jh=Object.prototype.toString,sd=Object.defineProperty,ud=Object.getOwnPropertyDescriptor,cd=function(n){return typeof Array.isArray=="function"?Array.isArray(n):jh.call(n)==="[object Array]"},dd=function(n){if(!n||jh.call(n)!=="[object Object]")return!1;var t=Vr.call(n,"constructor"),i=n.constructor&&n.constructor.prototype&&Vr.call(n.constructor.prototype,"isPrototypeOf");if(n.constructor&&!t&&!i)return!1;var r;for(r in n);return typeof r>"u"||Vr.call(n,r)},fd=function(n,t){sd&&t.name==="__proto__"?sd(n,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):n[t.name]=t.newValue},pd=function(n,t){if(t==="__proto__")if(Vr.call(n,t)){if(ud)return ud(n,t).value}else return;return n[t]},a2=function e(){var n,t,i,r,a,o,l=arguments[0],s=1,u=arguments.length,c=!1;for(typeof l=="boolean"&&(c=l,l=arguments[1]||{},s=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});s<u;++s)if(n=arguments[s],n!=null)for(t in n)i=pd(l,t),r=pd(n,t),l!==r&&(c&&r&&(dd(r)||(a=cd(r)))?(a?(a=!1,o=i&&cd(i)?i:[]):o=i&&dd(i)?i:{},fd(l,{name:t,newValue:e(c,o,r)})):typeof r<"u"&&fd(l,{name:t,newValue:r}));return l};const Po=Bl(a2);function _l(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function o2(){const e=[],n={run:t,use:i};return n;function t(...r){let a=-1;const o=r.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...r);function l(s,...u){const c=e[++a];let d=-1;if(s){o(s);return}for(;++d<r.length;)(u[d]===null||u[d]===void 0)&&(u[d]=r[d]);r=u,c?l2(c,l)(...u):o(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),n}}function l2(e,n){let t;return i;function i(...o){const l=e.length>o.length;let s;l&&o.push(r);try{s=e.apply(this,o)}catch(u){const c=u;if(l&&t)throw c;return r(c)}l||(s&&s.then&&typeof s.then=="function"?s.then(a,r):s instanceof Error?r(s):a(s))}function r(o,...l){t||(t=!0,n(o,...l))}function a(o){r(null,o)}}const wn={basename:s2,dirname:u2,extname:c2,join:d2,sep:"/"};function s2(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');hr(e);let t=0,i=-1,r=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(a){t=r+1;break}}else i<0&&(a=!0,i=r+1);return i<0?"":e.slice(t,i)}if(n===e)return"";let o=-1,l=n.length-1;for(;r--;)if(e.codePointAt(r)===47){if(a){t=r+1;break}}else o<0&&(a=!0,o=r+1),l>-1&&(e.codePointAt(r)===n.codePointAt(l--)?l<0&&(i=r):(l=-1,i=o));return t===i?i=o:i<0&&(i=e.length),e.slice(t,i)}function u2(e){if(hr(e),e.length===0)return".";let n=-1,t=e.length,i;for(;--t;)if(e.codePointAt(t)===47){if(i){n=t;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function c2(e){hr(e);let n=e.length,t=-1,i=0,r=-1,a=0,o;for(;n--;){const l=e.codePointAt(n);if(l===47){if(o){i=n+1;break}continue}t<0&&(o=!0,t=n+1),l===46?r<0?r=n:a!==1&&(a=1):r>-1&&(a=-1)}return r<0||t<0||a===0||a===1&&r===t-1&&r===i+1?"":e.slice(r,t)}function d2(...e){let n=-1,t;for(;++n<e.length;)hr(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":f2(t)}function f2(e){hr(e);const n=e.codePointAt(0)===47;let t=p2(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function p2(e,n){let t="",i=0,r=-1,a=0,o=-1,l,s;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(r===o-1||a===1))if(r!==o-1&&a===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(s=t.lastIndexOf("/"),s!==t.length-1){s<0?(t="",i=0):(t=t.slice(0,s),i=t.length-1-t.lastIndexOf("/")),r=o,a=0;continue}}else if(t.length>0){t="",i=0,r=o,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+e.slice(r+1,o):t=e.slice(r+1,o),i=o-r-1;r=o,a=0}else l===46&&a>-1?a++:a=-1}return t}function hr(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const h2={cwd:g2};function g2(){return"/"}function Hl(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function m2(e){if(typeof e=="string")e=new URL(e);else if(!Hl(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return y2(e)}function y2(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const i=n.codePointAt(t+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(n)}const Lo=["history","path","basename","stem","extname","dirname"];class Zh{constructor(n){let t;n?Hl(n)?t={path:n}:typeof n=="string"||w2(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":h2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Lo.length;){const a=Lo[i];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let r;for(r in t)Lo.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path=="string"?wn.basename(this.path):void 0}set basename(n){No(n,"basename"),Eo(n,"basename"),this.path=wn.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?wn.dirname(this.path):void 0}set dirname(n){hd(this.basename,"dirname"),this.path=wn.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?wn.extname(this.path):void 0}set extname(n){if(Eo(n,"extname"),hd(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=wn.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){Hl(n)&&(n=m2(n)),No(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?wn.basename(this.path,this.extname):void 0}set stem(n){No(n,"stem"),Eo(n,"stem"),this.path=wn.join(this.dirname||"",n+(this.extname||""))}fail(n,t,i){const r=this.message(n,t,i);throw r.fatal=!0,r}info(n,t,i){const r=this.message(n,t,i);return r.fatal=void 0,r}message(n,t,i){const r=new Ie(n,t,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Eo(e,n){if(e&&e.includes(wn.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+wn.sep+"`")}function No(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function hd(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function w2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const x2=function(e){const i=this.constructor.prototype,r=i[e],a=function(){return r.apply(a,arguments)};return Object.setPrototypeOf(a,i),a},v2={}.hasOwnProperty;class qs extends x2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=o2()}copy(){const n=new qs;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];n.use(...i)}return n.data(Po(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Ro("data",this.frozen),this.namespace[n]=t,this):v2.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Ro("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=t.call(n,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Zr(n),i=this.parser||this.Parser;return Io("parse",i),i(String(t),t)}process(n,t){const i=this;return this.freeze(),Io("process",this.parser||this.Parser),Wo("process",this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(a,o){const l=Zr(n),s=i.parse(l);i.run(s,l,function(c,d,h){if(c||!d||!h)return u(c);const p=d,x=i.stringify(p,h);k2(x)?h.value=x:h.result=x,u(c,h)});function u(c,d){c||!d?o(c):a?a(d):t(void 0,d)}}}processSync(n){let t=!1,i;return this.freeze(),Io("processSync",this.parser||this.Parser),Wo("processSync",this.compiler||this.Compiler),this.process(n,r),md("processSync","process",t),i;function r(a,o){t=!0,ld(a),i=o}}run(n,t,i){gd(n),this.freeze();const r=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?a(void 0,i):new Promise(a);function a(o,l){const s=Zr(t);r.run(n,s,u);function u(c,d,h){const p=d||n;c?l(c):o?o(p):i(void 0,p,h)}}}runSync(n,t){let i=!1,r;return this.run(n,t,a),md("runSync","run",i),r;function a(o,l){ld(o),r=l,i=!0}}stringify(n,t){this.freeze();const i=Zr(t),r=this.compiler||this.Compiler;return Wo("stringify",r),gd(n),r(n,i)}use(n,...t){const i=this.attachers,r=this.namespace;if(Ro("use",this.frozen),n!=null)if(typeof n=="function")s(n,t);else if(typeof n=="object")Array.isArray(n)?l(n):o(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(u){if(typeof u=="function")s(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;s(c,d)}else o(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function o(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(u.plugins),u.settings&&(r.settings=Po(!0,r.settings,u.settings))}function l(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];a(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function s(u,c){let d=-1,h=-1;for(;++d<i.length;)if(i[d][0]===u){h=d;break}if(h===-1)i.push([u,...c]);else if(c.length>0){let[p,...x]=c;const A=i[h][1];_l(A)&&_l(p)&&(p=Po(!0,A,p)),i[h]=[u,p,...x]}}}}const A2=new qs().freeze();function Io(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Wo(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Ro(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function gd(e){if(!_l(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function md(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Zr(e){return S2(e)?e:new Zh(e)}function S2(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function k2(e){return typeof e=="string"||b2(e)}function b2(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const C2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",yd=[],wd={allowDangerousHtml:!0},P2=/^(https?|ircs?|mailto|xmpp)$/i,L2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Th(e){const n=E2(e),t=N2(e);return I2(n.runSync(n.parse(t),t),e)}function E2(e){const n=e.rehypePlugins||yd,t=e.remarkPlugins||yd,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...wd}:wd;return A2().use(sv).use(t).use(r2,i).use(n)}function N2(e){const n=e.children||"",t=new Zh;return typeof n=="string"&&(t.value=n),t}function I2(e,n){const t=n.allowedElements,i=n.allowElement,r=n.components,a=n.disallowedElements,o=n.skipHtml,l=n.unwrapDisallowed,s=n.urlTransform||W2;for(const c of L2)Object.hasOwn(n,c.from)&&(""+c.from+(c.to?"use `"+c.to+"` instead":"remove it")+C2+c.id,void 0);return n.className&&(e={type:"element",tagName:"div",properties:{className:n.className},children:e.type==="root"?e.children:[e]}),Mh(e,u),Z1(e,{Fragment:f.Fragment,components:r,ignoreInvalidStyle:!0,jsx:f.jsx,jsxs:f.jsxs,passKeys:!0,passNode:!0});function u(c,d,h){if(c.type==="raw"&&h&&typeof d=="number")return o?h.children.splice(d,1):h.children[d]={type:"text",value:c.value},d;if(c.type==="element"){let p;for(p in ko)if(Object.hasOwn(ko,p)&&Object.hasOwn(c.properties,p)){const x=c.properties[p],A=ko[p];(A===null||A.includes(c.tagName))&&(c.properties[p]=s(String(x||""),p,c))}}if(c.type==="element"){let p=t?!t.includes(c.tagName):a?a.includes(c.tagName):!1;if(!p&&i&&typeof d=="number"&&(p=!i(c,d,h)),p&&h&&typeof d=="number")return l&&c.children?h.children.splice(d,1,...c.children):h.children.splice(d,1),d}}}function W2(e){const n=e.indexOf(":"),t=e.indexOf("?"),i=e.indexOf("#"),r=e.indexOf("/");return n===-1||r!==-1&&n>r||t!==-1&&n>t||i!==-1&&n>i||P2.test(e.slice(0,n))?e:""}const Dh=N.memo(function({post:n,formatDate:t}){const i=r=>r.toLowerCase().replace(/\s+/g,"-");return f.jsxs("div",{className:"news-item",children:[f.jsx("div",{className:"news-item__date",children:t(n.date)}),f.jsxs("div",{className:"news-item__content",children:[f.jsx(Th,{children:n.content}),(n.author||n.tags&&n.tags.length>0)&&f.jsxs("div",{className:"news-item__meta",children:[n.author&&f.jsx("span",{className:"news-item__author",children:f.jsx($t,{to:`${F.baseurl}/members#${n.author}`,children:n.author})}),n.tags&&n.tags.length>0&&f.jsxs(f.Fragment,{children:[n.author&&" | ",f.jsx("span",{className:"news-item__tags-label",children:"tags:"}),n.tags.map((r,a)=>f.jsxs($t,{to:`${F.baseurl}/tags/${i(r)}/`,variant:"tag",className:"news-item__tag",children:["#",r]},a))]})]})]})]})});Dh.displayName="NewsItem";const _h=["Principal Investigator","Principal Research Fellow","Research Assistant Professor","Postdoctoral Scholar","Ph.D. Student","MPhil Student","Research Assistant"];function R2(e){return e?e.replace(/ DOT /gi,".").replace(/ dot /gi,".").replace(/ Dot /gi,".").replace(/ AT /gi,"@").replace(/ at /gi,"@").replace(/ At /gi,"@"):null}function M2(e){return e?e.replace("@"," at ").replace(/\./g," dot "):""}function j2(e){return!!(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(t=>t&&t.trim()!==""))}function Z2(e){const n={};return _h.forEach(t=>{n[t]=e.filter(i=>i.position===t&&j2(i)).sort((i,r)=>i.name.localeCompare(r.name))}),n}function T2(e){if(!e.enddate||e.enddate.length===0||e.startdate&&e.startdate.length!==e.enddate.length||!e.enddate.some(i=>i&&i.trim()!==""))return!1;const t=(e.position||"").toLowerCase();return!((t.includes("srtp")||t.includes("intern")||t.includes("sep")||t.includes("visiting")||t.includes("high school"))&&!t.includes("affiliate"))}function D2(e){return e.filter(T2).sort((n,t)=>{const i=n.enddate&&n.enddate.length>0?n.enddate[n.enddate.length-1]:"";return(t.enddate&&t.enddate.length>0?t.enddate[t.enddate.length-1]:"").localeCompare(i)})}const zl=N.memo(function({member:n}){const[t,i]=N.useState(n.image),r=R2(n.email),a=r?M2(r):null,o=()=>{n.altimage&&i(n.altimage)},l=()=>{i(n.image)},u=[{key:"orcid",icon:"fingerprint",label:"ORCID",url:`http://orcid.org/${n.orcid}`,isButton:!1},{key:"linkedIn",icon:"work",label:"LinkedIn",url:`http://www.linkedin.com/in/${n.linkedIn}`,isButton:!1},{key:"UCSF",icon:"account_circle",label:"UCSF Profile",url:`http://profiles.ucsf.edu/${n.UCSF}`,isButton:!1},{key:"scholar",icon:"school",label:"Scholar",url:`http://scholar.google.com/citations?user=${n.scholar}`,isButton:!0},{key:"twitTer",icon:"chat",label:"Twitter",url:`http://twitter.com/${n.twitTer}`,isButton:!1},{key:"bsky",icon:"chat_bubble",label:"Bluesky",url:`https://bsky.app/profile/${n.bsky}`,isButton:!1},{key:"github",icon:"code",label:"GitHub",url:`http://github.com/${n.github}`,isButton:!1}].filter(h=>n[h.key]),c=u.filter(h=>h.isButton),d=u.filter(h=>!h.isButton);return f.jsxs(Qp,{className:"member-card",id:n.name,children:[f.jsx("div",{className:"member-card__photo-wrapper",children:f.jsx(Kp,{src:t,alt:n.name,className:"member-card__photo",onMouseEnter:o,onMouseLeave:l})}),f.jsxs("div",{className:"member-card__info",children:[f.jsx("h3",{className:"member-card__name",children:n.name}),n.pronouns&&f.jsx("p",{className:"member-card__position",children:n.pronouns}),(r||n.website)&&f.jsxs("div",{className:"member-card__contact",children:[a&&f.jsx("span",{className:"member-card__email",children:a}),n.website&&f.jsx($t,{href:n.website,external:!0,children:"Website"})]}),c.length>0&&f.jsx("div",{className:"member-card__buttons",children:c.map(h=>f.jsx($t,{href:h.url,external:!0,variant:"button",className:"member-card__button",children:h.label},h.key))}),d.length>0&&f.jsx("div",{className:"member-card__links",children:d.map(h=>f.jsxs($t,{href:h.url,external:!0,className:"member-card__link",children:[f.jsx("span",{className:"material-icons",children:h.icon}),h.label]},h.key))}),n.description&&f.jsx("div",{className:"member-card__description",children:f.jsx(Th,{children:n.description})})]})]})});zl.displayName="MemberCard";const _2=[{filename:"2025-11-10-news.md",date:"2025-11-10",title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",link_title:"MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training",published:!0,layout:"post",group:"news",content:'Weixiong has a paper accepted to AAAI-2026, titled "MUG: Meta-path-aware Universal Heterogeneous Graph Pre-Training"',author:"",tags:[]},{filename:"2025-11-01-news.md",date:"2025-11-01",title:"Welcome Diao Xin to the lab as Postdoc",link_title:"Welcome Diao Xin to the lab as Postdoc",published:!0,layout:"post",group:"news",content:"Welcome Diao Xin to the lab as Postdoc",author:"",tags:[]},{filename:"2025-10-29-news.md",date:"2025-10-29",title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",link_title:"Yan Zhu's PM2.5 and human health LM accepted to Environmental Science & Technology",published:!0,layout:"post",group:"news",content:"Yan Zhu's work on a language model for PM2.5 and human health has been accepted to Environmental Science & Technology (a top journal in environmental science)",author:"",tags:[]},{filename:"2025-10-21-news.md",date:"2025-10-21",title:"Talk at 1st Asia Pacific Precision Oncology Conf",link_title:"Talk at 1st Asia Pacific Precision Oncology Conf",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a talk on Noncanonical circular RNAs as cancer diagnostic biomarkers at the [1st Asia Pacific Precision Oncology Conference](https://apacprecisiononcology.com) on 01/11/25",author:"",tags:[]},{filename:"2025-10-12-news.md",date:"2025-10-12",title:"The 10th Big Data Forum for Life and Health Sciences",link_title:"The 10th Big Data Forum for Life and Health Sciences",published:!0,layout:"post",group:"news",content:"Weixiong Zhang will give a keynote talk at [The 10th Big Data Forum for Life and Health Sciences](https://ngdc.cncb.ac.cn/conference/bdf2025) on 15/10/25",author:"",tags:[]},{filename:"2025-09-01-news.md",date:"2025-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"",author:"",tags:[]},{filename:"2025-08-30-news.md",date:"2025-08-30",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Chunyu's paper, Adaptive control of dynamic networks, has been accepted to IEEE Trans on Network Science and Engineering",author:"",tags:[]},{filename:"2025-05-14-news.md",date:"2025-05-14",title:"Cracking the Code of Complex Diseases",link_title:"Cracking the Code of Complex Diseases",published:!0,layout:"post",group:"news",content:"[Cracking the Code of Complex Diseases](https://www.polyu.edu.hk/publications/excelximpact/en/issue/202516/cover-story/cracking-the-code-of-complex-diseases)",author:"",tags:[]},{filename:"2024-11-24-news.md",date:"2024-11-24",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to ACM Transactions on Intelligent Systems and Technology. The title is 'Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning'",author:"",tags:[]},{filename:"2024-11-01-join.md",date:"2024-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Huang Yin to the Lab as Research Fellow and Pan Chunyu as Postdoc!",author:"",tags:[]},{filename:"2024-10-01-join.md",date:"2024-10-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Chen Junyi to the Lab as RAP!",author:"",tags:[]},{filename:"2024-09-01-join.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Edao Abebe, Li Yixin, Han Nan, Wang Zhenqian, Wang Yuchuan and Zhang Jie to the Lab as PhD students!",author:"",tags:[]},{filename:"2024-09-01-news.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"We built our first foundation model on genomics, called dnaGrinder. A preprint of the manuscript on dnaGrinder is available at arXiv",author:"",tags:[]},{filename:"2024-09-01-promote.md",date:"2024-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan has been promoted to Principal Research Fellow, the highest rank in the research track. Congratulations, Shulan!",author:"",tags:[]},{filename:"2024-08-01-news.md",date:"2024-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has been appointed to the position of Associate Director of PolyU Academy of Interdisciplinary Research (PAIR)",author:"",tags:[]},{filename:"2024-05-01-news.md",date:"2024-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Welcome Zhang Chi to the Lab as PhD student!<br>Edao Abebe received <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span>',author:"",tags:[]},{filename:"2024-04-02-news.md",date:"2024-04-02",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong has a paper accepted to IJCAI-24. The title of the paper: Generalized taxonomy-guided graph neural networks",author:"",tags:[]},{filename:"2024-04-01-news.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Tu Yue to the Lab as Postdoc!",author:"",tags:[]},{filename:"2024-04-01-pub.md",date:"2024-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong published a paper with IEEE Transactions on Neural Networks and Learning Systems. The title of the paper: Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning",author:"",tags:[]},{filename:"2024-01-01-news.md",date:"2024-01-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Welcome Fu Qinghui and Ma Ke to the Lab as PhD students!",author:"",tags:[]},{filename:"2023-12-01-news.md",date:"2023-12-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Wang Zhenqian, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-join.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Wang Xin, a new coming postdoc, received PolyU Distinguished Postdoctoral Fellowship",author:"",tags:[]},{filename:"2023-11-01-join2.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Ma Ke, a new coming student, received <span class="fellowship-highlight">PolyU Presidential PhD Fellowship</span>',author:"",tags:[]},{filename:"2023-11-01-news.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on A neuroimaging-based precision medicine framework for depression was published online with Asian J Psychiatry",author:"",tags:[]},{filename:"2023-11-01-prestigious.md",date:"2023-11-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Weixiong was selected into the list of "Top 2% of Global Scientists"',author:"",tags:[]},{filename:"2023-09-01-pub.md",date:"2023-09-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on Total network controllability analysis discovers explainable drugs for Covid-19 treatment was published in Biology Direct",author:"",tags:[]},{filename:"2023-08-01-news.md",date:"2023-08-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Shulan was promoted to Senior Research Fellow and took the position of STEM Lab manager",author:"",tags:[]},{filename:"2023-07-01-news.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong was interviewed on NOW NEWS, a Hong Kong TV news station, to discuss the newly funded RGC Strategic Target Grant (STG) funding on developing AI/genomic technologies to diagnose and treat major psychiatric disorders",author:"",tags:[]},{filename:"2023-07-01-promote.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong, as project PC, received RGC Strategic Target Grant (STG) funding (five years and $37 million) to develop AI, genomic and biomedical technologies for developing genetic and neuroimaging markers and integrative approaches for objective diagnosis and personalized therapy of major psychiatric disorders, including depression, schizophrenia, and bipolar disorder",author:"",tags:[]},{filename:"2023-07-01-pub.md",date:"2023-07-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Our paper on cancer-keeper genes as therapeutic targets published online with iScience, a Cell Press journal",author:"",tags:[]},{filename:"2023-05-01-news.md",date:"2023-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Dr. Qiu Shulan joined the lab as Research Fellow",author:"",tags:[]},{filename:"2023-04-01-news.md",date:"2023-04-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: Constructive learning meets homophily: Two birds with one stone",author:"",tags:[]},{filename:"2023-02-01-news.md",date:"2023-02-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"This is a joint work with Professors Jin Di and He Dongxiao's groups at Tianjin University. The title of the paper: A survey of community detection approaches: From statistical modeling to deep learning",author:"",tags:[]},{filename:"2022-05-01-news.md",date:"2022-05-01",title:"",link_title:"",published:!0,layout:"post",group:"news",content:"Weixiong received Health and Medical Research Fund (HMRF, three years and $1.4 million) to study schizophrenia using systems biology approaches",author:"",tags:[]},{filename:"2025-2-01-join.md",date:"",title:"",link_title:"",published:!0,layout:"post",group:"news",content:'Tan Yejun, an RA in the lab, received both <span class="fellowship-highlight">Hong Kong PhD Fellowship (HKPFS)</span> and <span class="fellowship-highlight">PolyU Presidential PhD Fellowship (PPPFS)</span>',author:"",tags:[]}],H2=_2||[],z2=()=>{const[e,n]=N.useState([]);N.useEffect(()=>{const i=H2.filter(r=>r.group==="news"&&r.published!==!1).sort((r,a)=>r.date<a.date?1:r.date>a.date?-1:0);n(i)},[]);const t=i=>{if(!i)return"";const r=new Date(i),a=String(r.getDate()).padStart(2,"0"),o=String(r.getMonth()+1).padStart(2,"0"),l=String(r.getFullYear()).slice(-2);return`${a}/${o}/${l}`};return f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"news-container",children:e.map((i,r)=>f.jsx(Dh,{post:i,formatDate:t},r))})})},B2=()=>f.jsx("div",{className:"md-main-content",children:f.jsxs("div",{className:"research-container",children:[f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Integrated innovative artificial intelligence, genomic, and biomedical technologies in healthcare: Objective diagnosis, personalized therapy, and determining the etiology of major mental disorders"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Strategic Topic Grant (STG), HKD $37.236M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:F.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop innovative AI and genomic technologies for objective diagnosis and personalized treatment of major psychiatric disorders, including major depressive disorder, schizophrenia and bipolar disorder."]}),f.jsx("img",{src:F.static("img/projects/fig1.png"),alt:"Project 1 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Unravelling the black box between air pollution and public health for transformative air quality management"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Theme-based Research Scheme (TRS), HKD $41.4M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:F.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Develop integrated approaches that address the global puzzle of what components drive PM2.5 health effects in different regions."}),f.jsx("li",{children:"Generate solid evidence of key PM2.5 toxic components and emission sources to specific index diseases as a foundation for making public policies."})]})]}),f.jsx("img",{src:F.static("img/projects/fig2.png"),alt:"Project 2 image",style:{maxWidth:"100%",height:"auto"}})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Understanding the molecular mechanism linking mRNA decay and capping with post-transcriptional gene silencing"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," NSFC/RGC Collaborative Research Scheme (NSFC/RGC CRS), HKD $3.6M + RMB 3M"]}),f.jsxs("div",{className:"research-description logo-row",style:{textAlign:"center"},children:[f.jsx("img",{src:F.static("img/logo/nsfc.png"),alt:"NSFC",style:{maxWidth:"180px",height:"auto",margin:"6px",display:"inline-block"}}),f.jsx("img",{src:F.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})]}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"}),f.jsxs("ol",{children:[f.jsx("li",{children:"Determine if and how the translation process leads to ct-siRNA generation."}),f.jsx("li",{children:"Determine the effects of the defects in mRNA capping on siRNA generation and its interconnection with the translational process."}),f.jsx("li",{children:"Reveal biological functions and mechanisms linking ct-siRNA biogenesis and PTGS of genes with plant stress responses."})]})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"Subtyping and diagnosis of schizophrenia by systems-biology analytics"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," Health and Medical Research Fund (HMRF), HKD $1.420M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:F.static("img/logo/hmrf.png"),alt:"HMRF",style:{maxWidth:"260px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Define objective subtypes of schizophrenia using systems-biology analytics and develop personalized therapy for schizophrenia treatment."]}),f.jsxs("div",{className:"research-description",children:[f.jsx("img",{src:F.static("img/projects/fig3.png"),alt:"Project 4 image A",style:{maxWidth:"100%",height:"auto",marginRight:"6px"}}),f.jsx("img",{src:F.static("img/projects/fig4.png"),alt:"Project 4 image B",style:{maxWidth:"100%",height:"auto"}})]})]})]}),f.jsxs("div",{className:"research-item",children:[f.jsx("div",{className:"research-category",style:{display:"none"},children:"Project"}),f.jsxs("div",{className:"research-content",children:[f.jsx("h4",{className:"research-title",children:"High-resolution single-cell multi-omics: Joint profiling of multiple types of biomolecules in the same single cell"}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Funding:"})," RGC Collaborative Research Fund (CRF), HKD $6.412M"]}),f.jsx("div",{className:"research-description",style:{textAlign:"center"},children:f.jsx("img",{src:F.static("img/logo/rgc.png"),alt:"RGC",style:{maxWidth:"200px",height:"auto",margin:"6px",display:"inline-block"}})}),f.jsxs("div",{className:"research-description",children:[f.jsx("strong",{children:"Objectives:"})," Develop an innovative technology for profiling DNA, RNA and proteins in the same single cell at the same time; apply the new technology to cancer research."]}),f.jsx("img",{src:F.static("img/projects/fig5.png"),alt:"Project 5 image",style:{maxWidth:"100%",height:"auto"}})]})]})]})}),xd=({html:e})=>f.jsx("li",{dangerouslySetInnerHTML:{__html:e}}),J2=[{html:`<a href="book.html"><em>State-Space Search: Algorithms,
              Complexity, Extensions and Applications</em></a>,
          Springer, 1999. ISBN 0-387-98832-7`,text:`State-Space Search: Algorithms,
              Complexity, Extensions and Applications,
          Springer, 1999. ISBN 0-387-98832-7`}],U2={2e3:{year:"2000",items:[{html:`
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
                Technology, 5(1):18, 2013.&nbsp;`}]},2022:{year:"2022",items:[{html:'<font face="Arial">D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2022/0293.pdf">RAW-GNN: Random Walk Aggregation based graph neural network</a>, <u><i>Proc 31-st Intern. Joint Conf. on AI</i></u> (IJCAI-22).</font>',text:"D. Jin, R. Wang, M. Ge, H. He, X. Li, W. Lin and W. Zhang, RAW-GNN: Random Walk Aggregation based graph neural network, Proc 31-st Intern. Joint Conf. on AI (IJCAI-22)."},{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, published online March 2022.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, published online March 2022."},{html:'<font face="Arial">P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, <strong>W. Zhang</strong>, <a href="https://pubmed.ncbi.nlm.nih.gov/34813484/">Graph Triple-Attention Network for Disease-Related LncRNA Prediction</a>, <u><i>IEEE Journal of Biomedical and Health Informatics</i></u>, 26(6):2839-49, 2022.</font>',text:"P. Xuan*, L. Zhan, H. Cui, T. Zhang, T. Nakaguchi, W. Zhang, Graph Triple-Attention Network for Disease-Related LncRNA Prediction, IEEE Journal of Biomedical and Health Informatics, 26(6):2839-49, 2022."},{html:`<font face="Arial">Palavicini, J. P., L. Ding, M. Pan, <strong>S. Qiu</strong>, H. Wang, Q. Shen, J. L. Dupree and X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/36613677/">Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(1), 2022.</font>`,text:"Palavicini, J. P., L. Ding, M. Pan, S. Qiu, H. Wang, Q. Shen, J. L. Dupree and X. Han, Sulfatide Deficiency, an Early Alzheimer's Lipidomic Signature, Causes Brain Ventricular Enlargement in the Absence of Classical Neuropathological Hallmarks, International Journal of Molecular Sciences, 24(1), 2022."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2023:{year:"2023",items:[{html:'<font face="Arial">D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=YIcb3pR8ld">Contrastive learning meets homophily: Two birds with one stone</a>, <u><i>Conference on Machine Learning</i></u> (ICML-2023).</font>',text:"D. He, J. Zhao, R. Guo, Z. Feng, D. Jin, Y. Huang, Z. Wang and W. Zhang, Contrastive learning meets homophily: Two birds with one stone, Conference on Machine Learning (ICML-2023)."},{html:'<font face="Arial">X. Wei, <strong>C. Pan</strong>, X. Zhang*, <strong>W. Zhang</strong>*, <a href="https://biologydirect.biomedcentral.com/articles/10.1186/s13062-023-00410-9">Total network controllability analysis discovers explainable drugs for Covid-19 treatment</a>, <u><i>Biology Direct</i></u>, 18(1):55, 2023.</font>',text:"X. Wei, C. Pan, X. Zhang*, W. Zhang*, Total network controllability analysis discovers explainable drugs for Covid-19 treatment, Biology Direct, 18(1):55, 2023."},{html:'<font face="Arial">X. Zhang*, <strong>C. Pan</strong>, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and <strong>W. Zhang</strong>*, <a href="https://pubmed.ncbi.nlm.nih.gov/37520717/">Cancer-keeper genes as therapeutic targets</a>, <u><i>iScience</i></u>, 26(8):107296, 2023.</font>',text:"X. Zhang*, C. Pan, X. Wei, M. Yu, S. Liu, J. An, J. Yang, B. Wei, W. Hao, Y. Yao*, Y. Zhu*, and W. Zhang*, Cancer-keeper genes as therapeutic targets, iScience, 26(8):107296, 2023."},{html:'<font face="Arial">D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, <strong>W. Zhang</strong>, <a href="hhttps://arxiv.org/pdf/2101.01669">A survey of community detection approaches: From statistical modeling to deep learning</a>, <u><i>IEEE Transactions on Knowledge and Data Engineering</i></u>, 35(2):1149-90, 2023.</font>',text:"D. Jin, Z. Yu, P. Jiao, S. Pan, D. He, J. Wu, P. Yu, W. Zhang, A survey of community detection approaches: From statistical modeling to deep learning, IEEE Transactions on Knowledge and Data Engineering, 35(2):1149-90, 2023."},{html:'<font face="Arial">Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, <strong>W. Zhang</strong>, Z. Liu, X. Zhang, F. Wang*, <a href="https://pubmed.ncbi.nlm.nih.gov/37992593/">A neuroimaging-based precision medicine framework for depression</a>, <u><i>Asian Journal of Psychiatry</i></u>, 91:103803, 2023.</font>',text:"Y. Xiao, FY. Womer, S. Dong, R.Zhu, R. Zhang, J. Yang, L. Zhang, J. Liu, W. Zhang, Z. Liu, X. Zhang, F. Wang*, A neuroimaging-based precision medicine framework for depression, Asian Journal of Psychiatry, 91:103803, 2023."},{html:`<font face="Arial">S. He, <strong>S. Qiu</strong>, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC10361545/">Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease</a>, <u><i>Clinical and Translational Medicine</i></u>, 2023.</font>`,text:"S. He, S. Qiu, M.Pan, J. P Palavicini, H. Wang, X. Li, A. Bhattacharjee, S. Barannikov, K. F Bieniek, J. L Dupree and X. Han, Marked reduction of spinal cord lipids causes neurogenic bladder in late Alzheimer's disease, Clinical and Translational Medicine, 2023."},{html:'<font face="Arial"><strong>S. Qiu</strong>, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/37445661/">Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging</a>, <u><i>International Journal of Molecular Sciences</i></u>, 24(13), 2023.</font>',text:"S. Qiu, S. He, J. Wang, H. Wang, A. Bhattacharjee, X. Li, M. Saeed, J. L. Dupree, X. Han, Adult-onset CNS sulfatide deficiency causes sex-dependent metabolic disruption in aging, International Journal of Molecular Sciences, 24(13), 2023."},{html:`<font face="Arial"><strong>S. Qiu</strong>, J. P. Palavicini, X. Han, <a href="https://pubmed.ncbi.nlm.nih.gov/35799524/">Myelin lipid deficiency: a new key driver of Alzheimer's disease</a>, <u><i>Neural Regeneration Research</i></u>, 18:121-122, 2023.</font>`,text:"S. Qiu, J. P. Palavicini, X. Han, Myelin lipid deficiency: a new key driver of Alzheimer's disease, Neural Regeneration Research, 18:121-122, 2023."},{html:'<font face="Arial">Dustin, E., E. Suarez-Pozos, C. Stotesberry, <strong>S. Qiu</strong>, J. P. Palavicini, X. Han and J. L. Dupree, <a href="https://pubmed.ncbi.nlm.nih.gov/37239102/">Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion</a>, <u><i>Biomedicines</i></u>, 11(5), 2023.</font>',text:"Dustin, E., E. Suarez-Pozos, C. Stotesberry, S. Qiu, J. P. Palavicini, X. Han and J. L. Dupree, Compromised Myelin and Axonal Molecular Organization Following Adult-Onset Sulfatide Depletion, Biomedicines, 11(5), 2023."}]},2024:{year:"2024",items:[{html:'<font face="Arial">D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/iel7/5962385/6104215/09724614.pdf">Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning</a>, <u><i>IEEE Transactions on Neural Networks and Learning Systems</i></u>, 35(4):4438-50, 2024.</font>',text:"D. He, C. Liang, C. Huo, Z. Feng, D. Jin, L. Yang, and W. Zhang, Analyzing heterogeneous networks with missing attributes by unsupervised contrastive learning, IEEE Transactions on Neural Networks and Learning Systems, 35(4):4438-50, 2024."},{html:'<font face="Arial">D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, <strong>W. Zhang</strong>, <a href="https://openreview.net/forum?id=R8SolCx62K&referrer=%5Bthe%20profile%20of%20Zhen%20Wang%5D(%2Fprofile%3Fid%3D~Zhen_Wang11)">Exploitation of a latent mechanism in graph contrastive learning: Representation scattering</a>, <u><i>Proc 38-th Conference on Neural Information Processing Systems</i></u> (NeurIPS 2024).</font>',text:"D. He, L. Shan, J. Zhao, H. Zhang, Z. Wang, W. Zhang, Exploitation of a latent mechanism in graph contrastive learning: Representation scattering, Proc 38-th Conference on Neural Information Processing Systems (NeurIPS 2024)."},{html:'<font face="Arial">Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and <strong>W. Zhang</strong>, <a href="https://www.ijcai.org/proceedings/2024/289">Generalized taxonomy-guided graph neural networks</a>, <u><i>Proc 33-rd Intern. Joint Conf. on AI</i></u> (IJCAI-24).</font>',text:"Y. Zhou, D. Jin, J. Wei, D. He, Z. Yu, and W. Zhang, Generalized taxonomy-guided graph neural networks, Proc 33-rd Intern. Joint Conf. on AI (IJCAI-24)."},{html:'<font face="Arial">Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, <strong>S. Qiu</strong>, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, <u><i>CCS Chemistry</i></u>, 6(11):2662-2670, 2024.</font>',text:"Y. L. W. Hung, C. Xie, J. Wang, X. Diao, R. Li, X. Wang, S. Qiu, J. Fang, Z. Cai, Expansion strategy-driven micron-level resolution mass spectrometry imaging of lipids in mouse brain tissue, CCS Chemistry, 6(11):2662-2670, 2024."},{html:`<font face="Arial">X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, <strong>S. Qiu</strong>, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, <u><i>Chinese Chemical Letters</i></u>, 35(11):109653, 2024.</font>`,text:"X. Wang, B. Wang, F. Ji, J. Yan, J. Fang, D. Zhang, J. Xu, J. Ji, X. Hao, H. Luan, Y. Hong, S. Qiu, M. Li, Z. Yang, W. Liu, X. Cai, Z. Cai, Discovery of plasma biomarkers for Parkinson's disease diagnoses based on metabolomics and lipidomics, Chinese Chemical Letters, 35(11):109653, 2024."}]},2025:{year:"2025",items:[{html:'<font face="Arial">L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and <strong>W. Zhang</strong>, <b>MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training</b>, AAAI-2026, 2025.</font>',text:"L. Shan, J. Zhao, D. He, Y. Huang, Z. Feng, and W. Zhang, MUG: Meta-Path-Aware Universal Heterogeneous Graph Pre-Training, AAAI-2026, 2025."},{html:'<font face="Arial"><strong>Y. Zhu</strong>, S. Wang, Y. Han, Y. Lu, A. Xiong, <strong>S. Qiu</strong>, L. N. Jin, and <strong>W. Zhang</strong>, A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant-Human Protein Interactions, <u><i>Environmental Science &amp; Technology</i></u>, 2025, accepted.</font>',text:"Y. Zhu, S. Wang, Y. Han, Y. Lu, A. Xiong, S. Qiu, L. N. Jin, and W. Zhang, A Transformer-Based Deep Learning Approach to Predicting Air Organic Pollutant-Human Protein Interactions, Environmental Science &amp; Technology, 2025, accepted."},{html:'<font face="Arial"><strong>C. Pan</strong>, X. Zhang, H. Zheng, Z. Su, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://ieeexplore.ieee.org/document/11150536">Adaptive Control of Dynamic Networks</a>, <u><i>IEEE Transactions on Network Science and Engineering</i></u>, 14(8), 2025.</font>',text:"C. Pan, X. Zhang, H. Zheng, Z. Su, C. Zhang, W. Zhang, Adaptive Control of Dynamic Networks, IEEE Transactions on Network Science and Engineering, 14(8), 2025."},{html:'<font face="Arial">C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and <strong>W. Zhang</strong>, <a href="https://dl.acm.org/doi/abs/10.1145/3706115">Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning</a>, <u><i>ACM Trans. Intell. Syst. Technol</i></u>, 2025, 16(1):1-21.</font>',text:"C. Huo, D. He, Y. Li, D. Jin, J. Dang, W. Pedrycz, L. Wu, and W. Zhang, Heterogeneous Graph Neural Networks using Self-supervised Reciprocally Contrastive Learning, ACM Trans. Intell. Syst. Technol, 2025, 16(1):1-21."},{html:'<font face="Arial">H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, <strong>W. Zhang</strong>, X. Zhang & F. Wang, <a href="https://bmcmedicine.biomedcentral.com/articles/10.1186/s12916-025-03850-4">Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia</a>, <u><i>BMC medicine</i></u>, 23(1):38, 2025.</font>',text:"H. Guo, Y. Xiao, S. Dong, J. Yang, P. Zhao, T. Zhao, A. Cai, L. Tang, J. Liu, H. Wang, R. Hua, R. Liu, Y. Wei, D. Sun, Z. Liu, M. Xia, Y. He, Y. Wu, T. Si, F. Womer, F. Xu, Y. Tang, J. Wang, W. Zhang, X. Zhang & F. Wang, Bridging animal models and humans: neuroimaging as intermediate phenotypes linking genetic or stress factors to anhedonia, BMC medicine, 23(1):38, 2025."},{html:'<font face="Arial"><strong>Q. Zhao</strong>, <strong>C. Zhang</strong>, <strong>W. Zhang</strong>, <a href="https://arxiv.org/pdf/2409.15697.pdf">dnaGrinder: a lightweight and high-capacity genomic foundation model</a>, arXiv, 2024, https://arxiv.org/abs/2409.15697.</font>',text:"Q. Zhao, C. Zhang, W. Zhang, dnaGrinder: a lightweight and high-capacity genomic foundation model, arXiv, 2024, https://arxiv.org/abs/2409.15697."}]}},F2={book:J2,byYear:U2},Tr=F2,O2=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"publications-container",children:f.jsxs("div",{className:"pub-list",children:[Tr.book.length>0&&f.jsx("div",{className:"pub-section",children:f.jsxs("font",{face:"Arial",children:[f.jsx("strong",{children:"Book"}),f.jsx("blockquote",{children:f.jsx("ul",{style:{listStyle:"none",padding:0},children:Tr.book.map((e,n)=>f.jsx(xd,{html:e.html},`book-${n}`))})}),f.jsx("hr",{})]})}),Object.keys(Tr.byYear).sort((e,n)=>parseInt(n)-parseInt(e)).map(e=>{const n=Tr.byYear[e];return n.items.length===0?null:f.jsxs("div",{className:"pub-year-section",children:[f.jsx("p",{children:f.jsx("font",{face:"Arial",children:f.jsxs("b",{children:[e,f.jsx("a",{name:e})]})})}),f.jsx("ul",{children:n.items.map((t,i)=>f.jsx(xd,{html:t.html},`${e}-${i}`))})]},e)})]})})}),G2=()=>f.jsxs("div",{className:"software-container",children:[f.jsx("p",{className:"intro-text",children:"The software tools here were developed in the Zhang lab over many years by grant support from NSF, NIH, The Alzheimer's Association and Monsanto Corporation."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Computational Biology"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"AmpSeq-SSR"}),f.jsxs("div",{className:"software-description",children:["An accurate and efficient method for large-scale SSR genotyping and applications"," ","(",f.jsx("a",{href:`${F.baseurl}/software/AmpSeq-SSR-scripts.zip`,children:"software"}),","," ",f.jsx("a",{href:`${F.baseurl}/SSR_ST2.pdf`,children:"supplemental table"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRvial"}),f.jsxs("div",{className:"software-description",children:["A computational method and software package for detecting and characterizing microRNAs of diverse genomic origins"," ","(",f.jsx("a",{href:`${F.baseurl}/software/miRvial.tgz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"BlocBuster"}),f.jsxs("div",{className:"software-description",children:["An allele-specific and network-based GWAS method"," ","(",f.jsx("a",{href:"http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003766",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ","paper2,"," ",f.jsx("a",{href:"http://www.blocbuster.org",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"mgRF"}),f.jsxs("div",{className:"software-description",children:["Module-guided Random Forests for integration of genotypic variation and gene expression for analyzing complex traits"," ","(",f.jsx("a",{href:"http://www.ploscompbiol.org/article/info%3Adoi%2F10.1371%2Fjournal.pcbi.1002956",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${F.baseurl}/software/mgrf.tar.bz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"miRank"}),f.jsxs("div",{className:"software-description",children:["MicroRNA prediction with a novel ranking algorithm based on random walks"," ","(",f.jsx("a",{href:"http://bioinformatics.oxfordjournals.org/content/24/13/i50.full",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${F.baseurl}/software/miRank.tgz`,children:"software and data files"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Qcut and HQcut"}),f.jsxs("div",{className:"software-description",children:["Finding communities in networks; also with scripts for visualizing clustering results and for constructing and clustering gene co-expression networks"," ","(",f.jsx("a",{href:"http://www.biomedcentral.com/content/pdf/1752-0509-4-8.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper1"}),","," ",f.jsx("a",{href:"http://www.researchgate.net/publication/5500334_Identifying_network_communities_with_a_high_resolution",target:"_blank",rel:"noopener noreferrer",children:"paper2"}),","," ",f.jsx("a",{href:`${F.baseurl}/software/qcut.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"WordSpy"}),f.jsx("div",{className:"software-description",children:"A steganalysis-based, genome scale motif finding method (software)"})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Rearrangement clustering"}),f.jsxs("div",{className:"software-description",children:["A method with application to gene expression analysis"," ","(",f.jsx("a",{href:"http://jmlr.org/papers/volume7/climer06a/climer06a.pdf",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:"http://cic.cs.wustl.edu/TSP_k/",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"DBTree"}),f.jsxs("div",{className:"software-description",children:["A bi-directional regression tree approach to modeling transcriptional regulation"," ","(",f.jsx("a",{href:"http://www.ncbi.nlm.nih.gov/pubmed/16303796?dopt=Abstract",target:"_blank",rel:"noopener noreferrer",children:"paper"}),","," ",f.jsx("a",{href:`${F.baseurl}/software/bdtree-1.01.tar`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Iterated loop matching"}),f.jsxs("div",{className:"software-description",children:["A method for RNA folding with pseudonots"," ","(",f.jsx("a",{href:`${F.baseurl}/software/ilm.tar.gz`,children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Degenerate multiple PCR primers"}),f.jsxs("div",{className:"software-description",children:["A method for selecting degenerate multiple PCR primers"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/mips.zip",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Optimization and Search"})}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Cut-and-solve for the ATSP"}),f.jsxs("div",{className:"software-description",children:["(",f.jsx("a",{href:"http://www.cse.wustl.edu/~sclimer/i-right5.htm#download",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"MaxSolver"}),f.jsxs("div",{className:"software-description",children:["An exact max-SAT solver"," ","(",f.jsx("a",{href:"http://cic.cs.wustl.edu/maxsolver/index.htm",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]}),f.jsxs("div",{className:"software-item",children:[f.jsx("div",{className:"software-name",children:"Backbone guided WalkSAT"}),f.jsxs("div",{className:"software-description",children:["A method with dynamic noise strategy for SAT and Max-SAT"," ","(",f.jsx("a",{href:"http://www.cs.wustl.edu/~zhang/projects/backboneGuidedSearch/bgwalksat/index.html",target:"_blank",rel:"noopener noreferrer",children:"software"}),")"]})]})]}),X2=[{name:"Negesso, Abebe Edao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/AbebeEdao.jpg",position:"Ph.D. Student",description:"Abebe Edao earned a Bachelor of science degree in Medical Laboratory Technology and a Master's degree in Clinical Chemistry from Addis Ababa University, Ethiopia."},{name:"Deng Jing",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Dengjing.jpg",position:"Research Assistant",description:"She received her bachelor's degree from Southwest University of Science and Technology and her master's degree from Yanbian University. During her master's studies, she spent two years as an exchange student at the Institute of Cardiopulmonary Research, Capital Medical University. Her major is Biochemistry and Molecular Biology. She is currently working as a research assistant in Professor Zhang's group, focusing on molecular experiments and animal studies."},{name:"Junyi Chen, Ph.D.",startdate:["2024-10-07"],enddate:[""],image:"/img/members/ChenJunyi.jpg",position:"Research Assistant Professor",description:"Dr. CHEN  finished his Ph.D. in Computer Science at the City University of Hong Kong. His research focuses on the application of artificial intelligence in bioinformatics, including single-cell RNA-seq analysis, and sequence analysis",email:"jerry-junyi dot chen at polyu dot edu dot hk"},{name:"Li Yixin",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Liyixin.jpg",position:"Ph.D. Student",description:"Li Yixin obtained her bachelor's degree from Hubei University of Medicine and her master's degree in psychiatry and mental health from the First Clinical School of Wuhan University. She worked in Professor Zhang's bench group, focusing on research involving depression mouse models and related molecular mechanisms."},{name:"Zhao Qihang",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Qihangzhao.jpg",position:"Ph.D. Student",description:"Qihang holds a Bachelor’s degree in Computer Engineering from the University of Illinois Urbana-Champaign and a Master’s degree in Computer Science from Washington University in St. Louis. In the STEM Lab, Qihang focuses on genomic foundation models and deep learning approaches to tackle specific genomic challenges."},{name:"Shulan Qiu, Ph.D.",startdate:["2023-05-10"],enddate:[""],image:"/img/members/Qiushulan.jpg",position:"Principal Research Fellow",description:"As Lab Manager, Dr. Qiu received her Bachelor and Ph.D degrees in Beijing Normal University of Cell Biology. She worked as Associate Professor  in Beijing Anzhen Hospital Affiliated to Capital Medical University/Beijing Institute of Heart, Lung, and Blood Vessel Diseases (2016), then worked as Instructor in Sam and Ann Barshop Institute for Longevity and Aging Studies, University of Texas Health Science Center at San Antonio, US (2022). She has been as PI of  Youth Project and General Project of National Natural Science Foundation of China (NSFC), and as co-I in many other projects. She published  31 reviewed papers including 13 of h-index.",email:"shulan dot qiu at polyu dot edu dot hk"},{name:"Sun Canghao",startdate:["2024-09-01"],enddate:[""],image:"/img/members/Suncanghao.jpg",position:"Ph.D. Student",description:"He earned his bachelor's degree in Medical Laboratory Technology from Dalian Medical University. Currently, he is pursuing an MPhil under the supervision of Professor Zhang, focusing on molecular biology and computational biology."},{name:"Yue Tu, Ph.D.",startdate:["2024-06-17"],enddate:[""],image:"/img/members/TuYue.jpg",position:"Postdoctoral Scholar",description:'"Dr. Tu received his Bachelor’s, Master’s, and Ph.D. in Computer Application Technology from Northeastern University, under the supervision of Prof. QIAO Jianzhong and Prof. LIN Shukuan. His primary research interests include medical image analysis, computer-aided diagnosis, Magnetic Resonance Imaging, and neuroscience.'},{name:"Xin Diao, Ph.D.",startdate:["2025-11-01"],enddate:[""],image:"/img/members/DiaoXin.jpg",position:"Postdoctoral Scholar",description:"Dr. Diao received his Ph.D. in Chemistry from Hong Kong Baptist University, where he developed expertise in spatial multi-omics. At Prof. Zhang's lab, he now leverages this expertise to investigate the biology of depression through spatial proteomics."},{name:"Weixiong Zhang, Ph.D.",startdate:["2020-08-01"],enddate:[""],image:"/img/members/Zhangweixiong.jpg",position:"Principal Investigator",description:`**Background**:
- BS in Computer Engineering, Tsinghua University
- PhD in Computer Science, UCLA

**Position**:
- Hong Kong Global STEM Professor
- Chair Professor of Systems Biology and Artificial Intelligence
- Associate Director, [PolyU Academy of Interdisciplinary Research](https://www.polyu.edu.hk/pair/)

**Affiliation**:
- [Dept of Health Technology & Informatics](https://www.polyu.edu.hk/hti/)
- [Dept of Data Science & Artificial Intelligence](https://www.polyu.edu.hk/dsai/)
- [Dept of Computing](https://www.polyu.edu.hk/comp/)`,email:"weixiong dot zhang at polyu dot edu dot hk",scholar:"Minb5QMAAAAJ"},{name:"Fu QingHui",startdate:["2024-03-18"],enddate:[""],image:"/img/members/FuQinghui.jpg",position:"Ph.D. Student",description:"Fu Qinghui earned her bachelor's degree in Pharmacy from Shenzhen University and a master's degree in Medical Microbiology from The University of Manchester. Currently, in Zhang's lab, she is working on utilizing behavioral models and molecular methods to understand the neural and immunological mechanisms underlying depression."},{name:"Han Nan",startdate:["2024-05-01"],enddate:[""],image:"/img/members/HanNan.jpg",position:"Ph.D. Student",description:"Nan Han completed her Bachelor's degree in Bioinformatics at Harbin Medical University, where she researched enhancer and miRNA/lncRNA regulation with Prof. Juan Xu. She then earned her Master's degree in Bioinformatics from the Beijing Institute of Genomics, Chinese Academy of Sciences / China National Center for Bioinformation, conducting research on alternative splicing and their role in development with Prof. Zhaoqi Liu. Currently, in Prof. Zhang’s lab, she focuses on epigenetic signals and their role in depression."},{name:"Yin Huang, Ph.D.",startdate:["2024-05-01"],enddate:["2025-09-08"],image:"/img/members/HuangYin.jpg",position:"Research Fellow",description:"Dr. Huang finished his Ph.D. in Computational Biology at the University of Chinese Academy of Sciences, followed by postdoctoral research experience at Columbia University and the Guangzhou National Lab. His research has focused on developing computational methods and analyzing large-scale genomic and single-cell data."},{name:"Jiang Jiahao",startdate:["2025-01-15"],enddate:[""],image:"/img/members/JiangJiahao.jpg",position:"Ph.D. Student",description:"Jiahao earned his Bachelor's and Master's degrees in Clinical Medicine from Tongji University in China. During his studies, he developed a strong interest in cancer biology, particularly in the role of non-coding RNAs within tumor-derived exosomes. Under the guidance of Professor Zhang, Jiahao leverage advanced techniques to uncover potential biomarkers and therapeutic targets for cancer diagnosis and treatment."},{name:"Li Kang",startdate:["2022-09-01"],enddate:[""],image:"/img/members/LiKang.jpg",position:"Ph.D. Student",description:"Kang received his bachelor's degree in computer science and technology in Northeastern University in China and master's degree in Software Engineering in JiangNan University. He researches noncoding RNA and explainable AI in genomic model."},{name:"Ma Ke",startdate:["2024-01-01"],enddate:[""],image:"/img/members/MaKe.jpg",position:"Ph.D. Student",description:"Ke received his Bachelor's and Master's degrees in Mechanical Engineering from Nanjing University of Science and Technology and South China University of Technology, respectively. Then, he worked as an engineer in Zhongshan Ophthalmic Center, focusing on intelligent diagnosis of ophthalmic diseases based on EEG signals, clinical data and images. In Prof. ZHANG's lab, he is currently working on single-cell and spatial transcriptome-based disease mechanism studies."},{name:"Chunyu Pan, Ph.D.",startdate:["2024-05-01"],enddate:[""],image:"/img/members/PanChunyu.jpg",position:"Postdoctoral Scholar",description:"Dr. Pan earned his Ph.D. in Computer Science from Northeastern University. His research specializes in complex network theory and its applications in biological networks, with a particular focus on brain network alterations in various psychiatric disorders."},{name:"Peng Yuling",startdate:["2024-01-01"],enddate:[""],image:"/img/members/PengYuling.jpg",position:"Research Assistant",description:"Yuling PENG obtained her bachelor's degree from Southwest Medical University and her academic master's degree from Guangzhou Medical University. During her master's studies, she focused on basic research. Currently, she works as a research assistant in Professor Zhang's lab, where she primarily conducts molecular experiments and animal studies."},{name:"Qin Haoning",startdate:["2024-01-03"],enddate:[""],image:"/img/members/QinHaoning.jpg",position:"MPhil Student",description:"Haoning received her Bachelor of Science in Biochemistry from the University of Hong Kong (HKU). Her undergraduate studies laid the foundation for her interest in molecular biology and genetics. In Prof. Zhang's lab, Haoning employs a variety of molecular biology techniques to unravel the complex roles of non-coding RNAs in disease progression and brain function."},{name:"Tan Yejun",startdate:["2024-12-20"],enddate:[""],image:"/img/members/Tanyejun.jpg",position:"Ph.D. Student",description:`Yejun received his Bachelor's degree in Mathematical Biology (Genomics specialization) in University of Minnesota, Twin Cities (UMN). He is also an awardee of <span class=\\"fellowship-highlight\\">HKPFS</span> and <span class=\\"fellowship-highlight\\">PPPFS</span>. Under the guidance of Professor Zhang, Yejun is currently conducting research on epidemiology and non-coding RNA at the JC-STEM laboratory.`},{name:"Wang Weixu",startdate:["2022-09-01"],enddate:[""],image:"/img/members/WangWeixu.png",position:"Ph.D. Student",description:`"Weixu earned his Bachelor's and Master's degrees in Computer Science and Technology from Heilongjiang University of Science and Technology and Northeastern University, respectively.`},{name:"Wang Yuchuan",startdate:["2024-09-01"],enddate:[""],image:"/img/members/WangYuchuan.jpg",position:"Ph.D. Student",description:`"Yuchuan received his Bachelor's degree in Information Management and Information Systems from China University in Geosciences (Beijing). He then earned his Master's degree in Computer Science from Washington University in St. Louis, where he was advised by Prof. William YEOH and co-advised by Prof. Chein-Ju HO.`},{name:"Wang Zhenqian",startdate:["2024-09-01"],enddate:["2025-09-09"],image:"/img/members/WangZhenqian.png",position:"",description:"Zhenqian holds a Bachelor's degree in Statistics from Nanjing Agricultural University and a Master's degree in Epidemiology and Health Statistics from Sun Yat-sen University. He is currently focused on developing network-based GWAS methods to identify the allelic networks of disorders and utilizing these genetic biomarkers to subtype diseases."},{name:"Zeng Xianlin",startdate:["2024-12-09"],enddate:[""],image:"/img/members/ZengXianlin.jpg",position:"Ph.D. Student",description:"Xianlin received his Bachelor's degree in Biology at City University of Hong Kong and Master's in Bioinformatics at Johns Hopkins University. In Prof. Zhang's lab, Xianlin will maintain the animal model of depression and explore disease epigenomics in the process of depression intergenerational inheritance leveraging bioinformatics tools."},{name:"Zhang Chi",startdate:["2024-05-01"],enddate:["2025-09-09"],image:"/img/members/ZhangChi.jpg",position:"",description:"Chi received his Master's degree (2023) of Electronic Information Engineering at the University of Electronic Science and Technology of China, and Bachelor's degree (2020) of Communication Engineering from the North China Institute of Aerospace Engineering."},{name:"Zhang Fei",startdate:["2023-01-01"],enddate:[""],image:"/img/members/ZhangFei.png",position:"Ph.D. Student",description:"Zhang Fei earned a bachelor's degree from the School of Mathematics and Statistics, Central South University, and a master's degree from Weill Medical College of Cornell University. In Zhang's lab, she researches linkage disequilibrium, haplotype blocks, and SNP causality to develop novel GWAS models and uncover psychiatric disorder mechanisms."},{name:"Zhang Jie",startdate:["2024-09-01"],enddate:[""],image:"/img/members/ZhangJie.jpg",position:"Ph.D. Student",description:"Jie ZHANG received her  Bachelor's degree in clinical medicine and master's degree in clinical oncology from WuHan University, where she focused on the colorectal cancer basic research supervised by prof. Qibin SONG. In ZHANG lab, she will pay attention on the biogenesis and function of circular RNA."},{name:"Zhu Yan",startdate:["2023-09-01"],enddate:[""],image:"/img/members/Zhuyan.jpg",position:"Ph.D. Student",description:"ZHU Yan earned her Bachelor's degree in Science from Jining University and her Master's degree in Science from Dalian Maritime University. Currently, she is enrolled in a joint dual-degree program organized by The Hong Kong Polytechnic University and Harbin Institute of Technology. Her research paper focuses on the prediction of protein-ligand interactions using deep learning. In Professor Zhang's lab, ZHU Yan will apply deep learning techniques to investigate the interactions between proteins and compounds of environmental pollutants, and delve into the underlying molecular mechanisms."},{name:"Zhu Yanan",startdate:["2023-12-27"],enddate:[""],image:"/img/members/ZhuYanan.jpg",position:"Research Assistant",description:"Yanan graduated with a master's degree from Zhengzhou University, focusing on research in chronic pain and circRNA. As a Research Assistant  in Prof. Zhang's lab, she is primarily responsible for administrative tasks. When needed, she also assists with animal and molecular experiments."}],vd=X2||[],Y2=()=>{const[e,n]=N.useState({}),[t,i]=N.useState([]);return N.useEffect(()=>{const r=Z2(vd);n(r);const a=D2(vd);i(a)},[]),f.jsxs("div",{className:"members-container",children:[_h.map(r=>{const a=e[r]||[];return a.length===0?null:f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[r,r!=="Principal Investigator"&&"s"]}),a.map(o=>f.jsx(zl,{member:o},o.name))]},r)}),t.length>0&&f.jsxs("div",{className:"position-group",children:[f.jsxs("h2",{className:"position-title",children:[f.jsx("span",{className:"material-icons position-title__icon",children:"school"}),"Alumni"]}),t.map(r=>f.jsx(zl,{member:r},r.name))]})]})},$2=()=>f.jsxs("div",{className:"join-container",children:[f.jsx("p",{className:"intro-text",children:"We welcome applicants with backgrounds in Computer Science and Engineering, Biology, Computational Biology, Genomics, Biomedical Engineering, Medicine and related disciplines to join the Hong Kong Jockey Club STEM Laboratory of Genomics and AI in Healthcare."}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Opportunities"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistant Professors"}),f.jsx("div",{className:"card-body",children:"Lead or co-lead projects at the interface of AI and genomics; mentor junior researchers."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"(Senior) Research Fellows"}),f.jsx("div",{className:"card-body",children:"Drive cutting-edge methods and applications; collaborate across computational and wet-lab teams."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Postdoctoral Fellows"}),f.jsx("div",{className:"card-body",children:"Develop algorithms, models and experiments for genomic medicine and AI for healthcare."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Research Assistants"}),f.jsx("div",{className:"card-body",children:"Support data analysis, software engineering and/or molecular experiments."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"PhD and Master's students"}),f.jsx("div",{className:"card-body",children:"Pursue graduate research in computational genomics, systems biology, and AI."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Undergraduate Interns"}),f.jsx("div",{className:"card-body",children:"Gain hands-on research experience in computational biology or molecular biology."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"About the Laboratory"})}),f.jsxs("div",{className:"card-grid",children:[f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Computational Laboratory"}),f.jsx("div",{className:"card-body",children:"Cluster with CPUs, H100/A800/A6000 GPUs, file servers and petabyte-scale storage."})]}),f.jsxs("div",{className:"card",children:[f.jsx("div",{className:"card-title",children:"Molecular Biology Laboratory"}),f.jsx("div",{className:"card-body",children:"Instruments for genomics, cellular/molecular mechanism studies and conventional techniques."})]})]}),f.jsx("h2",{className:"section-header",children:f.jsx("strong",{children:"Application"})}),f.jsxs("div",{className:"contact-box",children:["Prospective applicants may send inquiry to: ",f.jsx("strong",{children:"genomics@polyu.edu.hk"})]})]}),V2=()=>f.jsx("div",{className:"md-main-content",children:f.jsx("div",{className:"contact-container",children:f.jsx("div",{className:"contact-content",children:f.jsxs("p",{children:["Department of Health Technology and Informatics",f.jsx("br",{}),"Lee Shau Kee Building, Block Y520, The Hong Kong Polytechnic University",f.jsx("br",{}),"Yuk Choi Road, Hung Hom",f.jsx("br",{}),f.jsx("br",{}),f.jsx("strong",{children:"Email:"})," ",f.jsx("a",{href:"mailto:genomics@polyu.edu.hk",children:"genomics@polyu.edu.hk"}),f.jsx("br",{}),f.jsx("strong",{children:"Phone:"})," +852 3400 8567",f.jsx("br",{}),f.jsx("strong",{children:f.jsx("a",{style:{color:"#1e3a8a"},href:"https://www.google.com/maps/place/%E9%A6%99%E6%B8%AF%E7%90%86%E5%B7%A5%E5%A4%A7%E5%AD%A6%E6%9D%8E%E5%85%86%E5%9F%BA%E6%A5%BC/@22.3060237,114.1808547,17z/data=!3m1!4b1!4m6!3m5!1s0x340400e7ea4cd421:0xc9fb261caeaaf54a!8m2!3d22.3060237!4d114.1808547!16s%2Fg%2F11b67ll0tq?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",target:"_blank",rel:"noopener noreferrer",children:"Google Map"})})]})})})}),Q2=()=>f.jsx(W0,{children:f.jsxs(c0,{children:[f.jsx(Pn,{path:"/",element:f.jsx(R0,{})}),f.jsx(Pn,{path:"/news",element:f.jsx(z2,{})}),f.jsx(Pn,{path:"/research",element:f.jsx(B2,{})}),f.jsx(Pn,{path:"/publications",element:f.jsx(O2,{})}),f.jsx(Pn,{path:"/software",element:f.jsx(G2,{})}),f.jsx(Pn,{path:"/members",element:f.jsx(Y2,{})}),f.jsx(Pn,{path:"/join",element:f.jsx($2,{})}),f.jsx(Pn,{path:"/contact",element:f.jsx(V2,{})})]})}),K2="/";Mo.createRoot(document.getElementById("root")).render(f.jsx(Wd.StrictMode,{children:f.jsx(b0,{basename:K2,children:f.jsx(Q2,{})})}));
