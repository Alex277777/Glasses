(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zh(t,e){const n=new Set(t.split(","));return i=>n.has(i)}const Tt={},Ks=[],$n=()=>{},rx=()=>!1,cl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Jh=t=>t.startsWith("onUpdate:"),$t=Object.assign,Qh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},sx=Object.prototype.hasOwnProperty,et=(t,e)=>sx.call(t,e),Ue=Array.isArray,Ys=t=>ll(t)==="[object Map]",u_=t=>ll(t)==="[object Set]",We=t=>typeof t=="function",Vt=t=>typeof t=="string",Ts=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",h_=t=>(bt(t)||We(t))&&We(t.then)&&We(t.catch),f_=Object.prototype.toString,ll=t=>f_.call(t),ox=t=>ll(t).slice(8,-1),d_=t=>ll(t)==="[object Object]",ef=t=>Vt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ea=Zh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ax=/-(\w)/g,io=ul(t=>t.replace(ax,(e,n)=>n?n.toUpperCase():"")),cx=/\B([A-Z])/g,Eo=ul(t=>t.replace(cx,"-$1").toLowerCase()),p_=ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),$l=ul(t=>t?`on${p_(t)}`:""),Nr=(t,e)=>!Object.is(t,e),Zl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},m_=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},lx=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zd;const g_=()=>zd||(zd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tf(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Vt(i)?dx(i):tf(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Vt(t)||bt(t))return t}const ux=/;(?![^(]*\))/g,hx=/:([^]+)/,fx=/\/\*[^]*?\*\//g;function dx(t){const e={};return t.replace(fx,"").split(ux).forEach(n=>{if(n){const i=n.split(hx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function nf(t){let e="";if(Vt(t))e=t;else if(Ue(t))for(let n=0;n<t.length;n++){const i=nf(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const px="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mx=Zh(px);function __(t){return!!t||t===""}const gx=t=>Vt(t)?t:t==null?"":Ue(t)||bt(t)&&(t.toString===f_||!We(t.toString))?JSON.stringify(t,v_,2):String(t),v_=(t,e)=>e&&e.__v_isRef?v_(t,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Jl(i,s)+" =>"]=r,n),{})}:u_(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Jl(n))}:Ts(e)?Jl(e):bt(e)&&!Ue(e)&&!d_(e)?String(e):e,Jl=(t,e="")=>{var n;return Ts(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let si;class _x{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=si,!e&&si&&(this.index=(si.scopes||(si.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=si;try{return si=this,e()}finally{si=n}}}on(){si=this}off(){si=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function vx(t,e=si){e&&e.active&&e.effects.push(t)}function xx(){return si}let ps;class rf{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,vx(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Gr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(yx(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Wr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Rr,n=ps;try{return Rr=!0,ps=this,this._runnings++,Vd(this),this.fn()}finally{Gd(this),this._runnings--,ps=n,Rr=e}}stop(){this.active&&(Vd(this),Gd(this),this.onStop&&this.onStop(),this.active=!1)}}function yx(t){return t.value}function Vd(t){t._trackId++,t._depsLength=0}function Gd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)x_(t.deps[e],t);t.deps.length=t._depsLength}}function x_(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Rr=!0,th=0;const y_=[];function Gr(){y_.push(Rr),Rr=!1}function Wr(){const t=y_.pop();Rr=t===void 0?!0:t}function sf(){th++}function of(){for(th--;!th&&nh.length;)nh.shift()()}function M_(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&x_(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const nh=[];function S_(t,e,n){sf();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&nh.push(i.scheduler)))}of()}const E_=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ih=new WeakMap,ms=Symbol(""),rh=Symbol("");function Tn(t,e,n){if(Rr&&ps){let i=ih.get(t);i||ih.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=E_(()=>i.delete(n))),M_(ps,r)}}function tr(t,e,n,i,r,s){const o=ih.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ue(t)){const c=Number(i);o.forEach((l,u)=>{(u==="length"||!Ts(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ue(t)?ef(n)&&a.push(o.get("length")):(a.push(o.get(ms)),Ys(t)&&a.push(o.get(rh)));break;case"delete":Ue(t)||(a.push(o.get(ms)),Ys(t)&&a.push(o.get(rh)));break;case"set":Ys(t)&&a.push(o.get(ms));break}sf();for(const c of a)c&&S_(c,4);of()}const Mx=Zh("__proto__,__v_isRef,__isVue"),T_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ts)),Wd=Sx();function Sx(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=at(this);for(let s=0,o=this.length;s<o;s++)Tn(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(at)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Gr(),sf();const i=at(this)[e].apply(this,n);return of(),Wr(),i}}),t}function Ex(t){Ts(t)||(t=String(t));const e=at(this);return Tn(e,"has",t),e.hasOwnProperty(t)}class A_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Ox:C_:s?R_:w_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!r){if(o&&et(Wd,n))return Reflect.get(Wd,n,i);if(n==="hasOwnProperty")return Ex}const a=Reflect.get(e,n,i);return(Ts(n)?T_.has(n):Mx(n))||(r||Tn(e,"get",n),s)?a:An(a)?o&&ef(n)?a:a.value:bt(a)?r?L_(a):Cr(a):a}}class b_ extends A_{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const c=da(s);if(!kc(i)&&!da(i)&&(s=at(s),i=at(i)),!Ue(e)&&An(s)&&!An(i))return c?!1:(s.value=i,!0)}const o=Ue(e)&&ef(n)?Number(n)<e.length:et(e,n),a=Reflect.set(e,n,i,r);return e===at(r)&&(o?Nr(i,s)&&tr(e,"set",n,i):tr(e,"add",n,i)),a}deleteProperty(e,n){const i=et(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&tr(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ts(n)||!T_.has(n))&&Tn(e,"has",n),i}ownKeys(e){return Tn(e,"iterate",Ue(e)?"length":ms),Reflect.ownKeys(e)}}class Tx extends A_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ax=new b_,bx=new Tx,wx=new b_(!0);const af=t=>t,hl=t=>Reflect.getPrototypeOf(t);function Ha(t,e,n=!1,i=!1){t=t.__v_raw;const r=at(t),s=at(e);n||(Nr(e,s)&&Tn(r,"get",e),Tn(r,"get",s));const{has:o}=hl(r),a=i?af:n?uf:pa;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function za(t,e=!1){const n=this.__v_raw,i=at(n),r=at(t);return e||(Nr(t,r)&&Tn(i,"has",t),Tn(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Va(t,e=!1){return t=t.__v_raw,!e&&Tn(at(t),"iterate",ms),Reflect.get(t,"size",t)}function Xd(t){t=at(t);const e=at(this);return hl(e).has.call(e,t)||(e.add(t),tr(e,"add",t,t)),this}function jd(t,e){e=at(e);const n=at(this),{has:i,get:r}=hl(n);let s=i.call(n,t);s||(t=at(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?Nr(e,o)&&tr(n,"set",t,e):tr(n,"add",t,e),this}function qd(t){const e=at(this),{has:n,get:i}=hl(e);let r=n.call(e,t);r||(t=at(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&tr(e,"delete",t,void 0),s}function Kd(){const t=at(this),e=t.size!==0,n=t.clear();return e&&tr(t,"clear",void 0,void 0),n}function Ga(t,e){return function(i,r){const s=this,o=s.__v_raw,a=at(o),c=e?af:t?uf:pa;return!t&&Tn(a,"iterate",ms),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function Wa(t,e,n){return function(...i){const r=this.__v_raw,s=at(r),o=Ys(s),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...i),u=n?af:e?uf:pa;return!e&&Tn(s,"iterate",c?rh:ms),{next(){const{value:h,done:f}=l.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function hr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rx(){const t={get(s){return Ha(this,s)},get size(){return Va(this)},has:za,add:Xd,set:jd,delete:qd,clear:Kd,forEach:Ga(!1,!1)},e={get(s){return Ha(this,s,!1,!0)},get size(){return Va(this)},has:za,add:Xd,set:jd,delete:qd,clear:Kd,forEach:Ga(!1,!0)},n={get(s){return Ha(this,s,!0)},get size(){return Va(this,!0)},has(s){return za.call(this,s,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:Ga(!0,!1)},i={get(s){return Ha(this,s,!0,!0)},get size(){return Va(this,!0)},has(s){return za.call(this,s,!0)},add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear"),forEach:Ga(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Wa(s,!1,!1),n[s]=Wa(s,!0,!1),e[s]=Wa(s,!1,!0),i[s]=Wa(s,!0,!0)}),[t,n,e,i]}const[Cx,Lx,Px,Ix]=Rx();function cf(t,e){const n=e?t?Ix:Px:t?Lx:Cx;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(et(n,r)&&r in i?n:i,r,s)}const Dx={get:cf(!1,!1)},Nx={get:cf(!1,!0)},Ux={get:cf(!0,!1)};const w_=new WeakMap,R_=new WeakMap,C_=new WeakMap,Ox=new WeakMap;function Fx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bx(t){return t.__v_skip||!Object.isExtensible(t)?0:Fx(ox(t))}function Cr(t){return da(t)?t:lf(t,!1,Ax,Dx,w_)}function kx(t){return lf(t,!1,wx,Nx,R_)}function L_(t){return lf(t,!0,bx,Ux,C_)}function lf(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=Bx(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function ta(t){return da(t)?ta(t.__v_raw):!!(t&&t.__v_isReactive)}function da(t){return!!(t&&t.__v_isReadonly)}function kc(t){return!!(t&&t.__v_isShallow)}function P_(t){return t?!!t.__v_raw:!1}function at(t){const e=t&&t.__v_raw;return e?at(e):t}function Hx(t){return Object.isExtensible(t)&&m_(t,"__v_skip",!0),t}const pa=t=>bt(t)?Cr(t):t,uf=t=>bt(t)?L_(t):t;class I_{constructor(e,n,i,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new rf(()=>e(this._value),()=>Ac(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=at(this);return(!e._cacheable||e.effect.dirty)&&Nr(e._value,e._value=e.effect.run())&&Ac(e,4),D_(e),e.effect._dirtyLevel>=2&&Ac(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function zx(t,e,n=!1){let i,r;const s=We(t);return s?(i=t,r=$n):(i=t.get,r=t.set),new I_(i,r,s||!r,n)}function D_(t){var e;Rr&&ps&&(t=at(t),M_(ps,(e=t.dep)!=null?e:t.dep=E_(()=>t.dep=void 0,t instanceof I_?t:void 0)))}function Ac(t,e=4,n){t=at(t);const i=t.dep;i&&S_(i,e)}function An(t){return!!(t&&t.__v_isRef===!0)}function zt(t){return Vx(t,!1)}function Vx(t,e){return An(t)?t:new Gx(t,e)}class Gx{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:at(e),this._value=n?e:pa(e)}get value(){return D_(this),this._value}set value(e){const n=this.__v_isShallow||kc(e)||da(e);e=n?e:at(e),Nr(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pa(e),Ac(this,4))}}function sh(t){return An(t)?t.value:t}const Wx={get:(t,e,n)=>sh(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return An(r)&&!An(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function N_(t){return ta(t)?t:new Proxy(t,Wx)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Lr(t,e,n,i){try{return i?t(...i):t()}catch(r){fl(r,e,n)}}function ui(t,e,n,i){if(We(t)){const r=Lr(t,e,n,i);return r&&h_(r)&&r.catch(s=>{fl(s,e,n)}),r}if(Ue(t)){const r=[];for(let s=0;s<t.length;s++)r.push(ui(t[s],e,n,i));return r}}function fl(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Gr(),Lr(c,null,10,[t,o,a]),Wr();return}}Xx(t,n,r,i)}function Xx(t,e,n,i=!0){console.error(t)}let ma=!1,oh=!1;const an=[];let Ai=0;const $s=[];let yr=null,cs=0;const U_=Promise.resolve();let hf=null;function O_(t){const e=hf||U_;return t?e.then(this?t.bind(this):t):e}function jx(t){let e=Ai+1,n=an.length;for(;e<n;){const i=e+n>>>1,r=an[i],s=ga(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function ff(t){(!an.length||!an.includes(t,ma&&t.allowRecurse?Ai+1:Ai))&&(t.id==null?an.push(t):an.splice(jx(t.id),0,t),F_())}function F_(){!ma&&!oh&&(oh=!0,hf=U_.then(k_))}function qx(t){const e=an.indexOf(t);e>Ai&&an.splice(e,1)}function Kx(t){Ue(t)?$s.push(...t):(!yr||!yr.includes(t,t.allowRecurse?cs+1:cs))&&$s.push(t),F_()}function Yd(t,e,n=ma?Ai+1:0){for(;n<an.length;n++){const i=an[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;an.splice(n,1),n--,i()}}}function B_(t){if($s.length){const e=[...new Set($s)].sort((n,i)=>ga(n)-ga(i));if($s.length=0,yr){yr.push(...e);return}for(yr=e,cs=0;cs<yr.length;cs++)yr[cs]();yr=null,cs=0}}const ga=t=>t.id==null?1/0:t.id,Yx=(t,e)=>{const n=ga(t)-ga(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function k_(t){oh=!1,ma=!0,an.sort(Yx);try{for(Ai=0;Ai<an.length;Ai++){const e=an[Ai];e&&e.active!==!1&&Lr(e,null,14)}}finally{Ai=0,an.length=0,B_(),ma=!1,hf=null,(an.length||$s.length)&&k_()}}function $x(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Tt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=i[u]||Tt;f&&(r=n.map(d=>Vt(d)?d.trim():d)),h&&(r=n.map(lx))}let a,c=i[a=$l(e)]||i[a=$l(io(e))];!c&&s&&(c=i[a=$l(Eo(e))]),c&&ui(c,t,6,r);const l=i[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ui(l,t,6,r)}}function H_(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!We(t)){const c=l=>{const u=H_(l,e,!0);u&&(a=!0,$t(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!a?(bt(t)&&i.set(t,null),null):(Ue(s)?s.forEach(c=>o[c]=null):$t(o,s),bt(t)&&i.set(t,o),o)}function dl(t,e){return!t||!cl(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(t,e[0].toLowerCase()+e.slice(1))||et(t,Eo(e))||et(t,e))}let Ri=null,z_=null;function Hc(t){const e=Ri;return Ri=t,z_=t&&t.type.__scopeId||null,e}function ah(t,e=Ri,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&sp(-1);const s=Hc(e);let o;try{o=t(...r)}finally{Hc(s),i._d&&sp(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ql(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:v}=t,m=Hc(t);let p,A;try{if(n.shapeFlag&4){const T=r||i,U=T;p=Si(l.call(U,T,u,h,d,f,g)),A=a}else{const T=e;p=Si(T.length>1?T(h,{attrs:a,slots:o,emit:c}):T(h,null)),A=e.props?a:Zx(a)}}catch(T){ra.length=0,fl(T,t,1),p=Sn(_a)}let y=p;if(A&&v!==!1){const T=Object.keys(A),{shapeFlag:U}=y;T.length&&U&7&&(s&&T.some(Jh)&&(A=Jx(A,s)),y=Ur(y,A,!1,!0))}return n.dirs&&(y=Ur(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),p=y,Hc(m),p}const Zx=t=>{let e;for(const n in t)(n==="class"||n==="style"||cl(n))&&((e||(e={}))[n]=t[n]);return e},Jx=(t,e)=>{const n={};for(const i in t)(!Jh(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Qx(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return i?$d(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!dl(l,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$d(i,o,l):!0:!!o;return!1}function $d(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!dl(n,s))return!0}return!1}function e2({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const t2=Symbol.for("v-ndc"),n2=t=>t.__isSuspense;function i2(t,e){e&&e.pendingBranch?Ue(t)?e.effects.push(...t):e.effects.push(t):Kx(t)}const r2=Symbol.for("v-scx"),s2=()=>ai(r2),Xa={};function Zs(t,e,n){return V_(t,e,n)}function V_(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=Tt){if(e&&s){const R=e;e=(...C)=>{R(...C),U()}}const c=gn,l=R=>i===!0?R:Ws(R,i===!1?1:void 0);let u,h=!1,f=!1;if(An(t)?(u=()=>t.value,h=kc(t)):ta(t)?(u=()=>l(t),h=!0):Ue(t)?(f=!0,h=t.some(R=>ta(R)||kc(R)),u=()=>t.map(R=>{if(An(R))return R.value;if(ta(R))return l(R);if(We(R))return Lr(R,c,2)})):We(t)?e?u=()=>Lr(t,c,2):u=()=>(d&&d(),ui(t,c,3,[g])):u=$n,e&&i){const R=u;u=()=>Ws(R())}let d,g=R=>{d=y.onStop=()=>{Lr(R,c,4),d=y.onStop=void 0}},v;if(gl)if(g=$n,e?n&&ui(e,c,3,[u(),f?[]:void 0,g]):u(),r==="sync"){const R=s2();v=R.__watcherHandles||(R.__watcherHandles=[])}else return $n;let m=f?new Array(t.length).fill(Xa):Xa;const p=()=>{if(!(!y.active||!y.dirty))if(e){const R=y.run();(i||h||(f?R.some((C,G)=>Nr(C,m[G])):Nr(R,m)))&&(d&&d(),ui(e,c,3,[R,m===Xa?void 0:f&&m[0]===Xa?[]:m,g]),m=R)}else y.run()};p.allowRecurse=!!e;let A;r==="sync"?A=p:r==="post"?A=()=>Mn(p,c&&c.suspense):(p.pre=!0,c&&(p.id=c.uid),A=()=>ff(p));const y=new rf(u,$n,A),T=xx(),U=()=>{y.stop(),T&&Qh(T.effects,y)};return e?n?p():m=y.run():r==="post"?Mn(y.run.bind(y),c&&c.suspense):y.run(),v&&v.push(U),U}function o2(t,e,n){const i=this.proxy,r=Vt(t)?t.includes(".")?G_(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const o=Aa(this),a=V_(r,s.bind(i),n);return o(),a}function G_(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Ws(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,An(t))Ws(t.value,e,n);else if(Ue(t))for(let i=0;i<t.length;i++)Ws(t[i],e,n);else if(u_(t)||Ys(t))t.forEach(i=>{Ws(i,e,n)});else if(d_(t))for(const i in t)Ws(t[i],e,n);return t}function Yr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Gr(),ui(c,n,8,[t.el,a,t,e]),Wr())}}/*! #__NO_SIDE_EFFECTS__ */function df(t,e){return We(t)?$t({name:t.name},e,{setup:t}):t}const bc=t=>!!t.type.__asyncLoader,W_=t=>t.type.__isKeepAlive;function a2(t,e){X_(t,"a",e)}function c2(t,e){X_(t,"da",e)}function X_(t,e,n=gn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(pl(e,i,n),n){let r=n.parent;for(;r&&r.parent;)W_(r.parent.vnode)&&l2(i,e,n,r),r=r.parent}}function l2(t,e,n,i){const r=pl(e,t,i,!0);mf(()=>{Qh(i[e],r)},n)}function pl(t,e,n=gn,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Gr();const a=Aa(n),c=ui(e,n,t,o);return a(),Wr(),c});return i?r.unshift(s):r.push(s),s}}const cr=t=>(e,n=gn)=>(!gl||t==="sp")&&pl(t,(...i)=>e(...i),n),u2=cr("bm"),pf=cr("m"),h2=cr("bu"),f2=cr("u"),d2=cr("bum"),mf=cr("um"),p2=cr("sp"),m2=cr("rtg"),g2=cr("rtc");function _2(t,e=gn){pl("ec",t,e)}function v2(t,e,n,i){let r;const s=n;if(Ue(t)||Vt(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,s)}}else r=[];return r}const ch=t=>t?s0(t)?xf(t)||t.proxy:ch(t.parent):null,na=$t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ch(t.parent),$root:t=>ch(t.root),$emit:t=>t.emit,$options:t=>gf(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ff(t.update)}),$nextTick:t=>t.n||(t.n=O_.bind(t.proxy)),$watch:t=>o2.bind(t)}),eu=(t,e)=>t!==Tt&&!t.__isScriptSetup&&et(t,e),x2={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(eu(i,e))return o[e]=1,i[e];if(r!==Tt&&et(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&et(l,e))return o[e]=3,s[e];if(n!==Tt&&et(n,e))return o[e]=4,n[e];lh&&(o[e]=0)}}const u=na[e];let h,f;if(u)return e==="$attrs"&&Tn(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Tt&&et(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,et(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return eu(r,e)?(r[e]=n,!0):i!==Tt&&et(i,e)?(i[e]=n,!0):et(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==Tt&&et(t,o)||eu(e,o)||(a=s[0])&&et(a,o)||et(i,o)||et(na,o)||et(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:et(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zd(t){return Ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let lh=!0;function y2(t){const e=gf(t),n=t.proxy,i=t.ctx;lh=!1,e.beforeCreate&&Jd(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:y,unmounted:T,render:U,renderTracked:R,renderTriggered:C,errorCaptured:G,serverPrefetch:E,expose:x,inheritAttrs:V,components:$,directives:D,filters:J}=e;if(l&&M2(l,i,null),o)for(const te in o){const z=o[te];We(z)&&(i[te]=z.bind(n))}if(r){const te=r.call(n,n);bt(te)&&(t.data=Cr(te))}if(lh=!0,s)for(const te in s){const z=s[te],ce=We(z)?z.bind(n,n):We(z.get)?z.get.bind(n,n):$n,le=!We(z)&&We(z.set)?z.set.bind(n):$n,Me=hs({get:ce,set:le});Object.defineProperty(i,te,{enumerable:!0,configurable:!0,get:()=>Me.value,set:Ce=>Me.value=Ce})}if(a)for(const te in a)j_(a[te],i,n,te);if(c){const te=We(c)?c.call(n):c;Reflect.ownKeys(te).forEach(z=>{Mi(z,te[z])})}u&&Jd(u,t,"c");function oe(te,z){Ue(z)?z.forEach(ce=>te(ce.bind(n))):z&&te(z.bind(n))}if(oe(u2,h),oe(pf,f),oe(h2,d),oe(f2,g),oe(a2,v),oe(c2,m),oe(_2,G),oe(g2,R),oe(m2,C),oe(d2,A),oe(mf,T),oe(p2,E),Ue(x))if(x.length){const te=t.exposed||(t.exposed={});x.forEach(z=>{Object.defineProperty(te,z,{get:()=>n[z],set:ce=>n[z]=ce})})}else t.exposed||(t.exposed={});U&&t.render===$n&&(t.render=U),V!=null&&(t.inheritAttrs=V),$&&(t.components=$),D&&(t.directives=D)}function M2(t,e,n=$n){Ue(t)&&(t=uh(t));for(const i in t){const r=t[i];let s;bt(r)?"default"in r?s=ai(r.from||i,r.default,!0):s=ai(r.from||i):s=ai(r),An(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Jd(t,e,n){ui(Ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function j_(t,e,n,i){const r=i.includes(".")?G_(n,i):()=>n[i];if(Vt(t)){const s=e[t];We(s)&&Zs(r,s)}else if(We(t))Zs(r,t.bind(n));else if(bt(t))if(Ue(t))t.forEach(s=>j_(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&Zs(r,s,t)}}function gf(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!n&&!i?c=e:(c={},r.length&&r.forEach(l=>zc(c,l,o,!0)),zc(c,e,o)),bt(e)&&s.set(e,c),c}function zc(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&zc(t,s,n,!0),r&&r.forEach(o=>zc(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=S2[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const S2={data:Qd,props:ep,emits:ep,methods:Yo,computed:Yo,beforeCreate:fn,created:fn,beforeMount:fn,mounted:fn,beforeUpdate:fn,updated:fn,beforeDestroy:fn,beforeUnmount:fn,destroyed:fn,unmounted:fn,activated:fn,deactivated:fn,errorCaptured:fn,serverPrefetch:fn,components:Yo,directives:Yo,watch:T2,provide:Qd,inject:E2};function Qd(t,e){return e?t?function(){return $t(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function E2(t,e){return Yo(uh(t),uh(e))}function uh(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function fn(t,e){return t?[...new Set([].concat(t,e))]:e}function Yo(t,e){return t?$t(Object.create(null),t,e):e}function ep(t,e){return t?Ue(t)&&Ue(e)?[...new Set([...t,...e])]:$t(Object.create(null),Zd(t),Zd(e??{})):e}function T2(t,e){if(!t)return e;if(!e)return t;const n=$t(Object.create(null),t);for(const i in e)n[i]=fn(t[i],e[i]);return n}function q_(){return{app:null,config:{isNativeTag:rx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let A2=0;function b2(t,e){return function(i,r=null){We(i)||(i=$t({},i)),r!=null&&!bt(r)&&(r=null);const s=q_(),o=new WeakSet;let a=!1;const c=s.app={_uid:A2++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Z2,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&We(l.install)?(o.add(l),l.install(c,...u)):We(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,h){if(!a){const f=Sn(i,r);return f.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(f,l):t(f,l,h),a=!0,c._container=l,l.__vue_app__=c,xf(f.component)||f.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){const u=ia;ia=c;try{return l()}finally{ia=u}}};return c}}let ia=null;function Mi(t,e){if(gn){let n=gn.provides;const i=gn.parent&&gn.parent.provides;i===n&&(n=gn.provides=Object.create(i)),n[t]=e}}function ai(t,e,n=!1){const i=gn||Ri;if(i||ia){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:ia._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}const K_={},Y_=()=>Object.create(K_),$_=t=>Object.getPrototypeOf(t)===K_;function w2(t,e,n,i=!1){const r={},s=Y_();t.propsDefaults=Object.create(null),Z_(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:kx(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function R2(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=at(r),[c]=t.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(dl(t.emitsOptions,f))continue;const d=e[f];if(c)if(et(s,f))d!==s[f]&&(s[f]=d,l=!0);else{const g=io(f);r[g]=hh(c,a,g,d,t,!1)}else d!==s[f]&&(s[f]=d,l=!0)}}}else{Z_(t,e,r,s)&&(l=!0);let u;for(const h in a)(!e||!et(e,h)&&((u=Eo(h))===h||!et(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(r[h]=hh(c,a,h,void 0,t,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!et(e,h))&&(delete s[h],l=!0)}l&&tr(t.attrs,"set","")}function Z_(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ea(c))continue;const l=e[c];let u;r&&et(r,u=io(c))?!s||!s.includes(u)?n[u]=l:(a||(a={}))[u]=l:dl(t.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=at(n),l=a||Tt;for(let u=0;u<s.length;u++){const h=s[u];n[h]=hh(r,c,h,l[h],t,!et(l,h))}}return o}function hh(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=et(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&We(c)){const{propsDefaults:l}=r;if(n in l)i=l[n];else{const u=Aa(r);i=l[n]=c.call(null,e),u()}}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Eo(n))&&(i=!0))}return i}function J_(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let c=!1;if(!We(t)){const u=h=>{c=!0;const[f,d]=J_(h,e,!0);$t(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!c)return bt(t)&&i.set(t,Ks),Ks;if(Ue(s))for(let u=0;u<s.length;u++){const h=io(s[u]);tp(h)&&(o[h]=Tt)}else if(s)for(const u in s){const h=io(u);if(tp(h)){const f=s[u],d=o[h]=Ue(f)||We(f)?{type:f}:$t({},f);if(d){const g=rp(Boolean,d.type),v=rp(String,d.type);d[0]=g>-1,d[1]=v<0||g<v,(g>-1||et(d,"default"))&&a.push(h)}}}const l=[o,a];return bt(t)&&i.set(t,l),l}function tp(t){return t[0]!=="$"&&!ea(t)}function np(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ip(t,e){return np(t)===np(e)}function rp(t,e){return Ue(e)?e.findIndex(n=>ip(n,t)):We(e)&&ip(e,t)?0:-1}const Q_=t=>t[0]==="_"||t==="$stable",_f=t=>Ue(t)?t.map(Si):[Si(t)],C2=(t,e,n)=>{if(e._n)return e;const i=ah((...r)=>_f(e(...r)),n);return i._c=!1,i},e0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Q_(r))continue;const s=t[r];if(We(s))e[r]=C2(r,s,i);else if(s!=null){const o=_f(s);e[r]=()=>o}}},t0=(t,e)=>{const n=_f(e);t.slots.default=()=>n},L2=(t,e)=>{const n=t.slots=Y_();if(t.vnode.shapeFlag&32){const i=e._;i?($t(n,e),m_(n,"_",i,!0)):e0(e,n)}else e&&t0(t,e)},P2=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=Tt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:($t(r,e),!n&&a===1&&delete r._):(s=!e.$stable,e0(e,r)),o=e}else e&&(t0(t,e),o={default:1});if(s)for(const a in r)!Q_(a)&&o[a]==null&&delete r[a]};function fh(t,e,n,i,r=!1){if(Ue(t)){t.forEach((f,d)=>fh(f,e&&(Ue(e)?e[d]:e),n,i,r));return}if(bc(i)&&!r)return;const s=i.shapeFlag&4?xf(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Tt?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Vt(l)?(u[l]=null,et(h,l)&&(h[l]=null)):An(l)&&(l.value=null)),We(c))Lr(c,a,12,[o,u]);else{const f=Vt(c),d=An(c);if(f||d){const g=()=>{if(t.f){const v=f?et(h,c)?h[c]:u[c]:c.value;r?Ue(v)&&Qh(v,s):Ue(v)?v.includes(s)||v.push(s):f?(u[c]=[s],et(h,c)&&(h[c]=u[c])):(c.value=[s],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,et(h,c)&&(h[c]=o)):d&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Mn(g,n)):g()}}}const Mn=i2;function I2(t){return D2(t)}function D2(t,e){const n=g_();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=$n,insertStaticContent:g}=t,v=(w,b,N,H=null,W=null,ne=null,M=void 0,_=null,L=!!b.dynamicChildren)=>{if(w===b)return;w&&!Bo(w,b)&&(H=he(w),Ce(w,W,ne,!0),w=null),b.patchFlag===-2&&(L=!1,b.dynamicChildren=null);const{type:P,ref:k,shapeFlag:q}=b;switch(P){case ml:m(w,b,N,H);break;case _a:p(w,b,N,H);break;case nu:w==null&&A(b,N,H,M);break;case Kn:$(w,b,N,H,W,ne,M,_,L);break;default:q&1?U(w,b,N,H,W,ne,M,_,L):q&6?D(w,b,N,H,W,ne,M,_,L):(q&64||q&128)&&P.process(w,b,N,H,W,ne,M,_,L,B)}k!=null&&W&&fh(k,w&&w.ref,ne,b||w,!b)},m=(w,b,N,H)=>{if(w==null)i(b.el=a(b.children),N,H);else{const W=b.el=w.el;b.children!==w.children&&l(W,b.children)}},p=(w,b,N,H)=>{w==null?i(b.el=c(b.children||""),N,H):b.el=w.el},A=(w,b,N,H)=>{[w.el,w.anchor]=g(w.children,b,N,H,w.el,w.anchor)},y=({el:w,anchor:b},N,H)=>{let W;for(;w&&w!==b;)W=f(w),i(w,N,H),w=W;i(b,N,H)},T=({el:w,anchor:b})=>{let N;for(;w&&w!==b;)N=f(w),r(w),w=N;r(b)},U=(w,b,N,H,W,ne,M,_,L)=>{b.type==="svg"?M="svg":b.type==="math"&&(M="mathml"),w==null?R(b,N,H,W,ne,M,_,L):E(w,b,W,ne,M,_,L)},R=(w,b,N,H,W,ne,M,_)=>{let L,P;const{props:k,shapeFlag:q,transition:re,dirs:Z}=w;if(L=w.el=o(w.type,ne,k&&k.is,k),q&8?u(L,w.children):q&16&&G(w.children,L,null,H,W,tu(w,ne),M,_),Z&&Yr(w,null,H,"created"),C(L,w,w.scopeId,M,H),k){for(const _e in k)_e!=="value"&&!ea(_e)&&s(L,_e,null,k[_e],ne,w.children,H,W,de);"value"in k&&s(L,"value",null,k.value,ne),(P=k.onVnodeBeforeMount)&&_i(P,H,w)}Z&&Yr(w,null,H,"beforeMount");const ie=N2(W,re);ie&&re.beforeEnter(L),i(L,b,N),((P=k&&k.onVnodeMounted)||ie||Z)&&Mn(()=>{P&&_i(P,H,w),ie&&re.enter(L),Z&&Yr(w,null,H,"mounted")},W)},C=(w,b,N,H,W)=>{if(N&&d(w,N),H)for(let ne=0;ne<H.length;ne++)d(w,H[ne]);if(W){let ne=W.subTree;if(b===ne){const M=W.vnode;C(w,M,M.scopeId,M.slotScopeIds,W.parent)}}},G=(w,b,N,H,W,ne,M,_,L=0)=>{for(let P=L;P<w.length;P++){const k=w[P]=_?Mr(w[P]):Si(w[P]);v(null,k,b,N,H,W,ne,M,_)}},E=(w,b,N,H,W,ne,M)=>{const _=b.el=w.el;let{patchFlag:L,dynamicChildren:P,dirs:k}=b;L|=w.patchFlag&16;const q=w.props||Tt,re=b.props||Tt;let Z;if(N&&$r(N,!1),(Z=re.onVnodeBeforeUpdate)&&_i(Z,N,b,w),k&&Yr(b,w,N,"beforeUpdate"),N&&$r(N,!0),P?x(w.dynamicChildren,P,_,N,H,tu(b,W),ne):M||z(w,b,_,null,N,H,tu(b,W),ne,!1),L>0){if(L&16)V(_,b,q,re,N,H,W);else if(L&2&&q.class!==re.class&&s(_,"class",null,re.class,W),L&4&&s(_,"style",q.style,re.style,W),L&8){const ie=b.dynamicProps;for(let _e=0;_e<ie.length;_e++){const se=ie[_e],ge=q[se],De=re[se];(De!==ge||se==="value")&&s(_,se,ge,De,W,w.children,N,H,de)}}L&1&&w.children!==b.children&&u(_,b.children)}else!M&&P==null&&V(_,b,q,re,N,H,W);((Z=re.onVnodeUpdated)||k)&&Mn(()=>{Z&&_i(Z,N,b,w),k&&Yr(b,w,N,"updated")},H)},x=(w,b,N,H,W,ne,M)=>{for(let _=0;_<b.length;_++){const L=w[_],P=b[_],k=L.el&&(L.type===Kn||!Bo(L,P)||L.shapeFlag&70)?h(L.el):N;v(L,P,k,null,H,W,ne,M,!0)}},V=(w,b,N,H,W,ne,M)=>{if(N!==H){if(N!==Tt)for(const _ in N)!ea(_)&&!(_ in H)&&s(w,_,N[_],null,M,b.children,W,ne,de);for(const _ in H){if(ea(_))continue;const L=H[_],P=N[_];L!==P&&_!=="value"&&s(w,_,P,L,M,b.children,W,ne,de)}"value"in H&&s(w,"value",N.value,H.value,M)}},$=(w,b,N,H,W,ne,M,_,L)=>{const P=b.el=w?w.el:a(""),k=b.anchor=w?w.anchor:a("");let{patchFlag:q,dynamicChildren:re,slotScopeIds:Z}=b;Z&&(_=_?_.concat(Z):Z),w==null?(i(P,N,H),i(k,N,H),G(b.children||[],N,k,W,ne,M,_,L)):q>0&&q&64&&re&&w.dynamicChildren?(x(w.dynamicChildren,re,N,W,ne,M,_),(b.key!=null||W&&b===W.subTree)&&n0(w,b,!0)):z(w,b,N,k,W,ne,M,_,L)},D=(w,b,N,H,W,ne,M,_,L)=>{b.slotScopeIds=_,w==null?b.shapeFlag&512?W.ctx.activate(b,N,H,M,L):J(b,N,H,W,ne,M,L):Q(w,b,L)},J=(w,b,N,H,W,ne,M)=>{const _=w.component=X2(w,H,W);if(W_(w)&&(_.ctx.renderer=B),j2(_),_.asyncDep){if(W&&W.registerDep(_,oe),!w.el){const L=_.subTree=Sn(_a);p(null,L,b,N)}}else oe(_,w,b,N,W,ne,M)},Q=(w,b,N)=>{const H=b.component=w.component;if(Qx(w,b,N))if(H.asyncDep&&!H.asyncResolved){te(H,b,N);return}else H.next=b,qx(H.update),H.effect.dirty=!0,H.update();else b.el=w.el,H.vnode=b},oe=(w,b,N,H,W,ne,M)=>{const _=()=>{if(w.isMounted){let{next:k,bu:q,u:re,parent:Z,vnode:ie}=w;{const Re=i0(w);if(Re){k&&(k.el=ie.el,te(w,k,M)),Re.asyncDep.then(()=>{w.isUnmounted||_()});return}}let _e=k,se;$r(w,!1),k?(k.el=ie.el,te(w,k,M)):k=ie,q&&Zl(q),(se=k.props&&k.props.onVnodeBeforeUpdate)&&_i(se,Z,k,ie),$r(w,!0);const ge=Ql(w),De=w.subTree;w.subTree=ge,v(De,ge,h(De.el),he(De),w,W,ne),k.el=ge.el,_e===null&&e2(w,ge.el),re&&Mn(re,W),(se=k.props&&k.props.onVnodeUpdated)&&Mn(()=>_i(se,Z,k,ie),W)}else{let k;const{el:q,props:re}=b,{bm:Z,m:ie,parent:_e}=w,se=bc(b);if($r(w,!1),Z&&Zl(Z),!se&&(k=re&&re.onVnodeBeforeMount)&&_i(k,_e,b),$r(w,!0),q&&we){const ge=()=>{w.subTree=Ql(w),we(q,w.subTree,w,W,null)};se?b.type.__asyncLoader().then(()=>!w.isUnmounted&&ge()):ge()}else{const ge=w.subTree=Ql(w);v(null,ge,N,H,w,W,ne),b.el=ge.el}if(ie&&Mn(ie,W),!se&&(k=re&&re.onVnodeMounted)){const ge=b;Mn(()=>_i(k,_e,ge),W)}(b.shapeFlag&256||_e&&bc(_e.vnode)&&_e.vnode.shapeFlag&256)&&w.a&&Mn(w.a,W),w.isMounted=!0,b=N=H=null}},L=w.effect=new rf(_,$n,()=>ff(P),w.scope),P=w.update=()=>{L.dirty&&L.run()};P.id=w.uid,$r(w,!0),P()},te=(w,b,N)=>{b.component=w;const H=w.vnode.props;w.vnode=b,w.next=null,R2(w,b.props,H,N),P2(w,b.children,N),Gr(),Yd(w),Wr()},z=(w,b,N,H,W,ne,M,_,L=!1)=>{const P=w&&w.children,k=w?w.shapeFlag:0,q=b.children,{patchFlag:re,shapeFlag:Z}=b;if(re>0){if(re&128){le(P,q,N,H,W,ne,M,_,L);return}else if(re&256){ce(P,q,N,H,W,ne,M,_,L);return}}Z&8?(k&16&&de(P,W,ne),q!==P&&u(N,q)):k&16?Z&16?le(P,q,N,H,W,ne,M,_,L):de(P,W,ne,!0):(k&8&&u(N,""),Z&16&&G(q,N,H,W,ne,M,_,L))},ce=(w,b,N,H,W,ne,M,_,L)=>{w=w||Ks,b=b||Ks;const P=w.length,k=b.length,q=Math.min(P,k);let re;for(re=0;re<q;re++){const Z=b[re]=L?Mr(b[re]):Si(b[re]);v(w[re],Z,N,null,W,ne,M,_,L)}P>k?de(w,W,ne,!0,!1,q):G(b,N,H,W,ne,M,_,L,q)},le=(w,b,N,H,W,ne,M,_,L)=>{let P=0;const k=b.length;let q=w.length-1,re=k-1;for(;P<=q&&P<=re;){const Z=w[P],ie=b[P]=L?Mr(b[P]):Si(b[P]);if(Bo(Z,ie))v(Z,ie,N,null,W,ne,M,_,L);else break;P++}for(;P<=q&&P<=re;){const Z=w[q],ie=b[re]=L?Mr(b[re]):Si(b[re]);if(Bo(Z,ie))v(Z,ie,N,null,W,ne,M,_,L);else break;q--,re--}if(P>q){if(P<=re){const Z=re+1,ie=Z<k?b[Z].el:H;for(;P<=re;)v(null,b[P]=L?Mr(b[P]):Si(b[P]),N,ie,W,ne,M,_,L),P++}}else if(P>re)for(;P<=q;)Ce(w[P],W,ne,!0),P++;else{const Z=P,ie=P,_e=new Map;for(P=ie;P<=re;P++){const Je=b[P]=L?Mr(b[P]):Si(b[P]);Je.key!=null&&_e.set(Je.key,P)}let se,ge=0;const De=re-ie+1;let Re=!1,ve=0;const Ne=new Array(De);for(P=0;P<De;P++)Ne[P]=0;for(P=Z;P<=q;P++){const Je=w[P];if(ge>=De){Ce(Je,W,ne,!0);continue}let Pe;if(Je.key!=null)Pe=_e.get(Je.key);else for(se=ie;se<=re;se++)if(Ne[se-ie]===0&&Bo(Je,b[se])){Pe=se;break}Pe===void 0?Ce(Je,W,ne,!0):(Ne[Pe-ie]=P+1,Pe>=ve?ve=Pe:Re=!0,v(Je,b[Pe],N,null,W,ne,M,_,L),ge++)}const je=Re?U2(Ne):Ks;for(se=je.length-1,P=De-1;P>=0;P--){const Je=ie+P,Pe=b[Je],I=Je+1<k?b[Je+1].el:H;Ne[P]===0?v(null,Pe,N,I,W,ne,M,_,L):Re&&(se<0||P!==je[se]?Me(Pe,N,I,2):se--)}}},Me=(w,b,N,H,W=null)=>{const{el:ne,type:M,transition:_,children:L,shapeFlag:P}=w;if(P&6){Me(w.component.subTree,b,N,H);return}if(P&128){w.suspense.move(b,N,H);return}if(P&64){M.move(w,b,N,B);return}if(M===Kn){i(ne,b,N);for(let q=0;q<L.length;q++)Me(L[q],b,N,H);i(w.anchor,b,N);return}if(M===nu){y(w,b,N);return}if(H!==2&&P&1&&_)if(H===0)_.beforeEnter(ne),i(ne,b,N),Mn(()=>_.enter(ne),W);else{const{leave:q,delayLeave:re,afterLeave:Z}=_,ie=()=>i(ne,b,N),_e=()=>{q(ne,()=>{ie(),Z&&Z()})};re?re(ne,ie,_e):_e()}else i(ne,b,N)},Ce=(w,b,N,H=!1,W=!1)=>{const{type:ne,props:M,ref:_,children:L,dynamicChildren:P,shapeFlag:k,patchFlag:q,dirs:re}=w;if(_!=null&&fh(_,null,N,w,!0),k&256){b.ctx.deactivate(w);return}const Z=k&1&&re,ie=!bc(w);let _e;if(ie&&(_e=M&&M.onVnodeBeforeUnmount)&&_i(_e,b,w),k&6)ue(w.component,N,H);else{if(k&128){w.suspense.unmount(N,H);return}Z&&Yr(w,null,b,"beforeUnmount"),k&64?w.type.remove(w,b,N,W,B,H):P&&(ne!==Kn||q>0&&q&64)?de(P,b,N,!1,!0):(ne===Kn&&q&384||!W&&k&16)&&de(L,b,N),H&&Ke(w)}(ie&&(_e=M&&M.onVnodeUnmounted)||Z)&&Mn(()=>{_e&&_i(_e,b,w),Z&&Yr(w,null,b,"unmounted")},N)},Ke=w=>{const{type:b,el:N,anchor:H,transition:W}=w;if(b===Kn){Y(N,H);return}if(b===nu){T(w);return}const ne=()=>{r(N),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(w.shapeFlag&1&&W&&!W.persisted){const{leave:M,delayLeave:_}=W,L=()=>M(N,ne);_?_(w.el,ne,L):L()}else ne()},Y=(w,b)=>{let N;for(;w!==b;)N=f(w),r(w),w=N;r(b)},ue=(w,b,N)=>{const{bum:H,scope:W,update:ne,subTree:M,um:_}=w;H&&Zl(H),W.stop(),ne&&(ne.active=!1,Ce(M,w,b,N)),_&&Mn(_,b),Mn(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},de=(w,b,N,H=!1,W=!1,ne=0)=>{for(let M=ne;M<w.length;M++)Ce(w[M],b,N,H,W)},he=w=>w.shapeFlag&6?he(w.component.subTree):w.shapeFlag&128?w.suspense.next():f(w.anchor||w.el);let ke=!1;const He=(w,b,N)=>{w==null?b._vnode&&Ce(b._vnode,null,null,!0):v(b._vnode||null,w,b,null,null,null,N),ke||(ke=!0,Yd(),B_(),ke=!1),b._vnode=w},B={p:v,um:Ce,m:Me,r:Ke,mt:J,mc:G,pc:z,pbc:x,n:he,o:t};let nt,we;return{render:He,hydrate:nt,createApp:b2(He,nt)}}function tu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $r({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function N2(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function n0(t,e,n=!1){const i=t.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mr(r[s]),a.el=o.el),n||n0(o,a)),a.type===ml&&(a.el=o.el)}}function U2(t){const e=t.slice(),n=[0];let i,r,s,o,a;const c=t.length;for(i=0;i<c;i++){const l=t[i];if(l!==0){if(r=n[n.length-1],t[r]<l){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<l?s=a+1:o=a;l<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function i0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:i0(e)}const O2=t=>t.__isTeleport,Kn=Symbol.for("v-fgt"),ml=Symbol.for("v-txt"),_a=Symbol.for("v-cmt"),nu=Symbol.for("v-stc"),ra=[];let ci=null;function dh(t=!1){ra.push(ci=t?null:[])}function F2(){ra.pop(),ci=ra[ra.length-1]||null}let va=1;function sp(t){va+=t}function B2(t){return t.dynamicChildren=va>0?ci||Ks:null,F2(),va>0&&ci&&ci.push(t),t}function ph(t,e,n,i,r,s){return B2(Zi(t,e,n,i,r,s,!0))}function mh(t){return t?t.__v_isVNode===!0:!1}function Bo(t,e){return t.type===e.type&&t.key===e.key}const r0=({key:t})=>t??null,wc=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Vt(t)||An(t)||We(t)?{i:Ri,r:t,k:e,f:!!n}:t:null);function Zi(t,e=null,n=null,i=0,r=null,s=t===Kn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&r0(e),ref:e&&wc(e),scopeId:z_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ri};return a?(vf(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=Vt(n)?8:16),va>0&&!o&&ci&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ci.push(c),c}const Sn=k2;function k2(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===t2)&&(t=_a),mh(t)){const a=Ur(t,e,!0);return n&&vf(a,n),va>0&&!s&&ci&&(a.shapeFlag&6?ci[ci.indexOf(t)]=a:ci.push(a)),a.patchFlag|=-2,a}if($2(t)&&(t=t.__vccOpts),e){e=H2(e);let{class:a,style:c}=e;a&&!Vt(a)&&(e.class=nf(a)),bt(c)&&(P_(c)&&!Ue(c)&&(c=$t({},c)),e.style=tf(c))}const o=Vt(t)?1:n2(t)?128:O2(t)?64:bt(t)?4:We(t)?2:0;return Zi(t,e,n,i,r,o,s,!0)}function H2(t){return t?P_(t)||$_(t)?$t({},t):t:null}function Ur(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=t,l=e?V2(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&r0(l),ref:e&&e.ref?n&&s?Ue(s)?s.concat(wc(e)):[s,wc(e)]:wc(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Kn?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ur(t.ssContent),ssFallback:t.ssFallback&&Ur(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&i&&(u.transition=c.clone(u)),u}function z2(t=" ",e=0){return Sn(ml,null,t,e)}function Si(t){return t==null||typeof t=="boolean"?Sn(_a):Ue(t)?Sn(Kn,null,t.slice()):typeof t=="object"?Mr(t):Sn(ml,null,String(t))}function Mr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ur(t)}function vf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ue(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),vf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!$_(e)?e._ctx=Ri:r===3&&Ri&&(Ri.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Ri},n=32):(e=String(e),i&64?(n=16,e=[z2(e)]):n=8);t.children=e,t.shapeFlag|=n}function V2(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=nf([e.class,i.class]));else if(r==="style")e.style=tf([e.style,i.style]);else if(cl(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function _i(t,e,n,i=null){ui(t,e,7,[n,i])}const G2=q_();let W2=0;function X2(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||G2,s={uid:W2++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new _x(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:J_(i,r),emitsOptions:H_(i,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=$x.bind(null,s),t.ce&&t.ce(s),s}let gn=null,Vc,gh;{const t=g_(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Vc=e("__VUE_INSTANCE_SETTERS__",n=>gn=n),gh=e("__VUE_SSR_SETTERS__",n=>gl=n)}const Aa=t=>{const e=gn;return Vc(t),t.scope.on(),()=>{t.scope.off(),Vc(e)}},op=()=>{gn&&gn.scope.off(),Vc(null)};function s0(t){return t.vnode.shapeFlag&4}let gl=!1;function j2(t,e=!1){e&&gh(e);const{props:n,children:i}=t.vnode,r=s0(t);w2(t,n,r,e),L2(t,i);const s=r?q2(t,e):void 0;return e&&gh(!1),s}function q2(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,x2);const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?Y2(t):null,s=Aa(t);Gr();const o=Lr(i,t,0,[t.props,r]);if(Wr(),s(),h_(o)){if(o.then(op,op),e)return o.then(a=>{ap(t,a,e)}).catch(a=>{fl(a,t,0)});t.asyncDep=o}else ap(t,o,e)}else o0(t,e)}function ap(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=N_(e)),o0(t,n)}let cp;function o0(t,e,n){const i=t.type;if(!t.render){if(!e&&cp&&!i.render){const r=i.template||gf(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=i,l=$t($t({isCustomElement:s,delimiters:a},o),c);i.render=cp(r,l)}}t.render=i.render||$n}{const r=Aa(t);Gr();try{y2(t)}finally{Wr(),r()}}}const K2={get(t,e){return Tn(t,"get",""),t[e]}};function Y2(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,K2),slots:t.slots,emit:t.emit,expose:e}}function xf(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(N_(Hx(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in na)return na[n](t)},has(e,n){return n in e||n in na}}))}function $2(t){return We(t)&&"__vccOpts"in t}const hs=(t,e)=>zx(t,e,gl);function Xs(t,e,n){const i=arguments.length;return i===2?bt(e)&&!Ue(e)?mh(e)?Sn(t,null,[e]):Sn(t,e):Sn(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&mh(n)&&(n=[n]),Sn(t,e,n))}const Z2="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const J2="http://www.w3.org/2000/svg",Q2="http://www.w3.org/1998/Math/MathML",Sr=typeof document<"u"?document:null,lp=Sr&&Sr.createElement("template"),ey={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Sr.createElementNS(J2,t):e==="mathml"?Sr.createElementNS(Q2,t):Sr.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Sr.createTextNode(t),createComment:t=>Sr.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sr.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{lp.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=lp.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ty=Symbol("_vtc");function ny(t,e,n){const i=t[ty];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const up=Symbol("_vod"),iy=Symbol("_vsh"),ry=Symbol(""),sy=/(^|;)\s*display\s*:/;function oy(t,e,n){const i=t.style,r=Vt(n);let s=!1;if(n&&!r){if(e)if(Vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Rc(i,a,"")}else for(const o in e)n[o]==null&&Rc(i,o,"");for(const o in n)o==="display"&&(s=!0),Rc(i,o,n[o])}else if(r){if(e!==n){const o=i[ry];o&&(n+=";"+o),i.cssText=n,s=sy.test(n)}}else e&&t.removeAttribute("style");up in t&&(t[up]=s?i.display:"",t[iy]&&(i.display="none"))}const hp=/\s*!important$/;function Rc(t,e,n){if(Ue(n))n.forEach(i=>Rc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ay(t,e);hp.test(n)?t.setProperty(Eo(i),n.replace(hp,""),"important"):t[i]=n}}const fp=["Webkit","Moz","ms"],iu={};function ay(t,e){const n=iu[e];if(n)return n;let i=io(e);if(i!=="filter"&&i in t)return iu[e]=i;i=p_(i);for(let r=0;r<fp.length;r++){const s=fp[r]+i;if(s in t)return iu[e]=s}return e}const dp="http://www.w3.org/1999/xlink";function cy(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(dp,e.slice(6,e.length)):t.setAttributeNS(dp,e,n);else{const s=mx(e);n==null||s&&!__(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function ly(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=__(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function uy(t,e,n,i){t.addEventListener(e,n,i)}function hy(t,e,n,i){t.removeEventListener(e,n,i)}const pp=Symbol("_vei");function fy(t,e,n,i,r=null){const s=t[pp]||(t[pp]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=dy(e);if(i){const l=s[e]=gy(i,r);uy(t,a,l,c)}else o&&(hy(t,a,o,c),s[e]=void 0)}}const mp=/(?:Once|Passive|Capture)$/;function dy(t){let e;if(mp.test(t)){e={};let i;for(;i=t.match(mp);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Eo(t.slice(2)),e]}let ru=0;const py=Promise.resolve(),my=()=>ru||(py.then(()=>ru=0),ru=Date.now());function gy(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ui(_y(i,n.value),e,5,[i])};return n.value=t,n.attached=my(),n}function _y(t,e){if(Ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const gp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vy=(t,e,n,i,r,s,o,a,c)=>{const l=r==="svg";e==="class"?ny(t,i,l):e==="style"?oy(t,n,i):cl(e)?Jh(e)||fy(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xy(t,e,i,l))?ly(t,e,i,s,o,a,c):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),cy(t,e,i,l))};function xy(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&gp(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return gp(e)&&Vt(n)?!1:e in t}const yy=$t({patchProp:vy},ey);let _p;function My(){return _p||(_p=I2(yy))}const Sy=(...t)=>{const e=My().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Ty(i);if(!r)return;const s=e._component;!We(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Ey(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ey(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ty(t){return Vt(t)?document.querySelector(t):t}var ba=typeof self<"u"?self:{};function a0(t){e:{for(var e=["CLOSURE_FLAGS"],n=ba,i=0;i<e.length;i++)if((n=n[e[i]])==null){e=null;break e}e=n}return(t=e&&e[t])!=null&&t}function Zr(){throw Error("Invalid UTF8")}function vp(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let ja,su;const Ay=typeof TextDecoder<"u";let by;const wy=typeof TextEncoder<"u";function c0(t){if(wy)t=(by||(by=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(128>e)i[n++]=e;else{if(2048>e)i[n++]=e>>6|192;else{if(55296<=e&&57343>=e){if(56319>=e&&r<t.length){const s=t.charCodeAt(++r);if(56320<=s&&57343>=s){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var xa,l0=a0(610401301),Ry=a0(188588736);const xp=ba.navigator;function _h(t){return!!l0&&!!xa&&xa.brands.some(({brand:e})=>e&&e.indexOf(t)!=-1)}function Yn(t){var e;return(e=ba.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function Tr(){return!!l0&&!!xa&&0<xa.brands.length}function ou(){return Tr()?_h("Chromium"):(Yn("Chrome")||Yn("CriOS"))&&!(!Tr()&&Yn("Edge"))||Yn("Silk")}function yf(t){return yf[" "](t),t}xa=xp&&xp.userAgentData||null,yf[" "]=function(){};var Cy=!Tr()&&(Yn("Trident")||Yn("MSIE"));!Yn("Android")||ou(),ou(),Yn("Safari")&&(ou()||!Tr()&&Yn("Coast")||!Tr()&&Yn("Opera")||!Tr()&&Yn("Edge")||(Tr()?_h("Microsoft Edge"):Yn("Edg/"))||Tr()&&_h("Opera"));var u0={},$o=null;function Ly(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),r=0;return function(s,o){function a(d){for(;c<s.length;){var g=s.charAt(c++),v=$o[g];if(v!=null)return v;if(!/^[\s\xa0]*$/.test(g))throw Error("Unknown base64 encoding at char: "+g)}return d}h0();for(var c=0;;){var l=a(-1),u=a(0),h=a(64),f=a(64);if(f===64&&l===-1)break;o(l<<2|u>>4),h!=64&&(o(u<<4&240|h>>2),f!=64&&o(h<<6&192|f))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function h0(){if(!$o){$o={};for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],n=0;5>n;n++){var i=t.concat(e[n].split(""));u0[n]=i;for(var r=0;r<i.length;r++){var s=i[r];$o[s]===void 0&&($o[s]=r)}}}}var f0=typeof Uint8Array<"u",d0=!Cy&&typeof btoa=="function";function yp(t){if(!d0){var e;e===void 0&&(e=0),h0(),e=u0[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],o=t[c+2],a=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|o>>6],o=e[63&o],n[l++]=a+r+s+o}switch(a=0,o=i,t.length-c){case 2:o=e[(15&(a=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|a>>4]+o+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const Mp=/[-_.]/g,Py={"-":"+",_:"/",".":"="};function Iy(t){return Py[t]||""}function p0(t){if(!d0)return Ly(t);Mp.test(t)&&(t=t.replace(Mp,Iy)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function wa(t){return f0&&t!=null&&t instanceof Uint8Array}let Dy;function _l(){return Dy||(Dy=new Uint8Array(0))}var ro={};let Ny;function m0(t){if(t!==ro)throw Error("illegal external caller")}function ys(){return Ny||(Ny=new nr(null,ro))}function Mf(t){m0(ro);var e=t.g;return(e=e==null||wa(e)?e:typeof e=="string"?p0(e):null)==null?e:t.g=e}var nr=class{constructor(t,e){if(m0(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}h(){const t=Mf(this);return t?new Uint8Array(t):_l()}};function g0(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function Sf(){return Error("Failed to read varint, encoding is invalid.")}function _0(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function Ef(t){if(typeof t=="string")return{buffer:p0(t),P:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),P:!1};if(t.constructor===Uint8Array)return{buffer:t,P:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),P:!1};if(t.constructor===nr)return{buffer:Mf(t)||_l(),P:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),P:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Tf(){return typeof BigInt=="function"}const Uy=typeof Uint8Array.prototype.slice=="function";let v0,xt=0,kt=0;function gs(t){const e=0>t;let n=(t=Math.abs(t))>>>0;if(t=Math.floor((t-n)/4294967296),e){const[i,r]=wf(n,t);t=r,n=i}xt=n>>>0,kt=t>>>0}function Af(t){const e=v0||(v0=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),kt=0,xt=e.getUint32(0,!0)}function vh(t,e){return 4294967296*e+(t>>>0)}function bf(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),t=vh(t,e),n?-t:t}function Gc(t,e){if(t>>>=0,2097151>=(e>>>=0))var n=""+(4294967296*e+t);else Tf()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,1e7<=t&&(n+=Math.floor(t/1e7),t%=1e7),1e7<=n&&(e+=Math.floor(n/1e7),n%=1e7),n=e+Sp(n)+Sp(t));return n}function Sp(t){return t=String(t),"0000000".slice(t.length)+t}function x0(){var t=xt,e=kt;if(2147483648&e)if(Tf())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=wf(t,e);t="-"+Gc(n,i)}else t=Gc(t,e);return t}function vl(t){if(16>t.length)gs(Number(t));else if(Tf())t=BigInt(t),xt=Number(t&BigInt(4294967295))>>>0,kt=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");kt=xt=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));kt*=1e6,xt=1e6*xt+s,4294967296<=xt&&(kt+=Math.trunc(xt/4294967296),kt>>>=0,xt>>>=0)}if(e){const[i,r]=wf(xt,kt);xt=i,kt=r}}}function wf(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Rf(t,e){let n,i=0,r=0,s=0;const o=t.h;let a=t.g;do n=o[a++],i|=(127&n)<<s,s+=7;while(32>s&&128&n);for(32<s&&(r|=(127&n)>>4),s=3;32>s&&128&n;s+=7)n=o[a++],r|=(127&n)<<s;if(_s(t,a),128>n)return e(i>>>0,r>>>0);throw Sf()}function Cf(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return _s(t,n),!!(127&e)}throw Sf()}function Or(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Sf();return _s(t,n),r}function Fr(t){return Or(t)>>>0}function xh(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],_s(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function yh(t){var e=xh(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:1/0*t:n==0?t*Math.pow(2,-149)*e:t*Math.pow(2,n-150)*(e+Math.pow(2,23))}function Oy(t){return Or(t)}function au(t,e,{ca:n=!1}={}){t.ca=n,e&&(e=Ef(e),t.h=e.buffer,t.m=e.P,t.j=0,t.l=t.h.length,t.g=t.j)}function _s(t,e){if(t.g=e,e>t.l)throw _0(t.l,e)}function y0(t,e){if(0>e)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw _0(e,t.l-n);return t.g=i,n}function M0(t,e){if(e==0)return ys();var n=y0(t,e);return t.ca&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?_l():Uy?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?ys():new nr(n,ro)}var Ep=[];function S0(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=Fr(t.g);if(e=n>>>3,!(0<=(n&=7)&&5>=n))throw g0(n,t.l);if(1>e)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Cc(t){switch(t.h){case 0:t.h!=0?Cc(t):Cf(t.g);break;case 1:_s(t=t.g,t.g+8);break;case 2:if(t.h!=2)Cc(t);else{var e=Fr(t.g);_s(t=t.g,t.g+e)}break;case 5:_s(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!S0(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Cc(t)}break;default:throw g0(t.h,t.l)}}function Ra(t,e,n){const i=t.g.l,r=Fr(t.g),s=t.g.g+r;let o=s-i;if(0>=o&&(t.g.l=s,n(e,t,void 0,void 0,void 0),o=s-t.g.g),o)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-o} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function Lf(t){var e=Fr(t.g),n=y0(t=t.g,e);if(t=t.h,Ay){var i,r=t;(i=su)||(i=su=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(a){if(ja===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),ja=!0}catch{ja=!1}}throw!ja&&(su=void 0),a}}else{e=(s=n)+e,n=[];let a,c=null;for(;s<e;){var o=t[s++];128>o?n.push(o):224>o?s>=e?Zr():(a=t[s++],194>o||(192&a)!=128?(s--,Zr()):n.push((31&o)<<6|63&a)):240>o?s>=e-1?Zr():(a=t[s++],(192&a)!=128||o===224&&160>a||o===237&&160<=a||(192&(i=t[s++]))!=128?(s--,Zr()):n.push((15&o)<<12|(63&a)<<6|63&i)):244>=o?s>=e-2?Zr():(a=t[s++],(192&a)!=128||a-144+(o<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,Zr()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&r,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):Zr(),8192<=n.length&&(c=vp(c,n),n.length=0)}s=vp(c,n)}return s}function E0(t){const e=Fr(t.g);return M0(t.g,e)}function xl(t,e,n){var i=Fr(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var qa=[];function Tp(t){return t?/^\d+$/.test(t)?(vl(t),new Ap(xt,kt)):null:Fy||(Fy=new Ap(0,0))}var Ap=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let Fy;function bp(t){return t?/^-?\d+$/.test(t)?(vl(t),new wp(xt,kt)):null:By||(By=new wp(0,0))}var wp=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let By;function Wc(t,e,n){for(;0<n||127<e;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function Ca(t,e){for(;127<e;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function yl(t,e){if(0<=e)Ca(t,e);else{for(let n=0;9>n;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function ya(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function so(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function Qn(t,e,n){Ca(t.g,8*e+n)}function Pf(t,e){return Qn(t,e,2),e=t.g.end(),so(t,e),e.push(t.h),e}function If(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;127<n;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function Ml(t,e,n){Qn(t,e,2),Ca(t.g,n.length),so(t,t.g.end()),so(t,n)}function Mh(t,e,n,i){n!=null&&(e=Pf(t,e),i(n,t),If(t,e))}class To{constructor(e,n,i,r){this.g=e,this.h=n,this.l=i,this.pa=r}}function Bn(t){return Array.prototype.slice.call(t)}function Df(t){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():t}var Pi=Df(),Rp=Df("0di"),cu=Df("2ex"),Nf=Pi?(t,e)=>{t[Pi]|=e}:(t,e)=>{t.g!==void 0?t.g|=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}})},Xc=Pi?(t,e)=>{t[Pi]&=~e}:(t,e)=>{t.g!==void 0&&(t.g&=~e)};function sn(t,e,n){return n?t|e:t&~e}var It=Pi?t=>0|t[Pi]:t=>0|t.g,ct=Pi?t=>t[Pi]:t=>t.g,Pt=Pi?(t,e)=>(t[Pi]=e,t):(t,e)=>(t.g!==void 0?t.g=e:Object.defineProperties(t,{g:{value:e,configurable:!0,writable:!0,enumerable:!1}}),t);function Ao(t){return Nf(t,34),t}function ky(t,e){Pt(e,-14591&(0|t))}function Sh(t,e){Pt(e,-14557&(34|t))}function T0(t){return(t=t>>14&1023)===0?536870912:t}var Uf,La={},A0={};function Cp(t){return!(!t||typeof t!="object"||t.Ja!==A0)}function Of(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function Ff(t,e,n){if(t!=null){if(typeof t=="string")t=t?new nr(t,ro):ys();else if(t.constructor!==nr)if(wa(t))t=t.length?new nr(n?t:new Uint8Array(t),ro):ys();else{if(!e)throw Error();t=void 0}}return t}function jc(t,e,n){if(!Array.isArray(t)||t.length)return!1;const i=It(t);return!!(1&i)||!(!e||!(Array.isArray(e)?e.includes(n):e.has(n)))&&(Pt(t,1|i),!0)}const Lp=[];function Oi(t){if(2&t)throw Error()}Pt(Lp,55),Uf=Object.freeze(Lp);class qc{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new qc(this.g,this.h,this.m)}}let Pr,Hy,zy;function b0(t,e){(e=Pr?e[Pr]:void 0)&&(t[Pr]=Bn(e))}function w0(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Vy(){const t=Error();w0(t,"incident"),function(e){ba.setTimeout(()=>{throw e},0)}(t)}function Eh(t){return w0(t=Error(t),"warning"),t}function Xr(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function R0(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}Object.freeze(new class{}),Object.freeze(new class{});const Gy=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Sl(t){const e=typeof t;return e==="number"?Number.isFinite(t):e==="string"&&Gy.test(t)}function bo(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?0|t:void 0}function Wy(t){if(t==null)return t;if(typeof t=="string"){if(!t)return;t=+t}return typeof t=="number"&&Number.isFinite(t)?t>>>0:void 0}function Pp(t){return t[0]!=="-"&&(20>t.length||t.length===20&&184467>Number(t.substring(0,6)))}function C0(t){return t[0]==="-"?20>t.length||t.length===20&&-922337<Number(t.substring(0,7)):19>t.length||t.length===19&&922337>Number(t.substring(0,6))}function Bf(t){return t=Math.trunc(t),Number.isSafeInteger(t)||(gs(t),t=bf(xt,kt)),t}function kf(t){var e=Math.trunc(Number(t));return Number.isSafeInteger(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),C0(t)||(vl(t),t=x0()),t)}function Kc(t){return t==null?t:Sl(t)?typeof t=="number"?Bf(t):kf(t):void 0}function Pa(t){if(typeof t!="string")throw Error();return t}function wo(t){if(t!=null&&typeof t!="string")throw Error();return t}function vs(t){return t==null||typeof t=="string"?t:void 0}function Hf(t,e,n,i){if(t!=null&&typeof t=="object"&&t.X===La)return t;if(!Array.isArray(t))return n?2&i?(t=e[Rp])?e=t:(Ao((t=new e).s),e=e[Rp]=t):e=new e:e=void 0,e;let r=n=It(t);return r===0&&(r|=32&i),r|=2&i,r!==n&&Pt(t,r),new e(t)}function Xy(t,e,n){if(e){var i=!!i;if(!Sl(e=t))throw Eh("int64");typeof e=="string"?i=kf(e):i?(i=Math.trunc(e),Number.isSafeInteger(i)?i=String(i):C0(e=String(i))?i=e:(gs(i),i=x0())):i=Bf(e)}else i=Kc(t);return typeof(n=(t=i)==null?n?0:void 0:t)=="string"&&(i=+n,Number.isSafeInteger(i))?i:n}let Yc,zf,jy;function $c(t){switch(typeof t){case"boolean":return zf||(zf=[0,void 0,!0]);case"number":return 0<t?void 0:t===0?jy||(jy=[0,void 0]):[-t,void 0];case"string":return[0,t];case"object":return t}}function xs(t,e){return L0(t,e[0],e[1])}function L0(t,e,n){if(t==null&&(t=Yc),Yc=void 0,t==null){var i=96;n?(t=[n],i|=512):t=[],e&&(i=-16760833&i|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(2048&(i=It(t)))throw Error("farr");if(64&i)return t;if(i|=64,n&&(i|=512,n!==t[0]))throw Error("mid");e:{const r=(n=t).length;if(r){const s=r-1;if(Of(n[s])){if(1024<=(e=s-(+!!(512&(i|=256))-1)))throw Error("pvtlmt");i=-16760833&i|(1023&e)<<14;break e}}if(e){if(1024<(e=Math.max(e,r-(+!!(512&i)-1))))throw Error("spvt");i=-16760833&i|(1023&e)<<14}}}return Pt(t,i),t}const qy={};let Ky=function(){try{return yf(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class lu{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const Yy=Ky?(Object.setPrototypeOf(lu.prototype,Map.prototype),Object.defineProperties(lu.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),lu):class extends Map{constructor(){super()}};function Ip(t){return t}function uu(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}var Jn=class extends Yy{constructor(t,e,n=Ip,i=Ip){super();let r=It(t);r|=64,Pt(t,r),this.N=r,this.U=e,this.S=n,this.Z=this.U?$y:i;for(let s=0;s<t.length;s++){const o=t[s],a=n(o[0],!1,!0);let c=o[1];e?c===void 0&&(c=null):c=i(o[1],!1,!0,void 0,void 0,r),super.set(a,c)}}oa(t=Dp){if(this.size!==0)return this.Y(t)}Y(t=Dp){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){uu(this),super.clear()}delete(t){return uu(this),super.delete(this.S(t,!0,!1))}entries(){var t=this.na();return new qc(t,Zy,this)}keys(){return this.Ia()}values(){var t=this.na();return new qc(t,Jn.prototype.get,this)}forEach(t,e){super.forEach((n,i)=>{t.call(e,this.get(i),i,this)})}set(t,e){return uu(this),(t=this.S(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Z(e,!0,!0,this.U,!1,this.N))}Oa(t){const e=this.S(t[0],!1,!0);t=t[1],t=this.U?t===void 0?null:t:this.Z(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.S(t,!1,!1))}get(t){t=this.S(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.U;return n?((n=this.Z(e,!1,!0,n,this.ta,this.N))!==e&&super.set(t,n),n):e}}na(){return Array.from(super.keys())}Ia(){return super.keys()}[Symbol.iterator](){return this.entries()}};function $y(t,e,n,i,r,s){return t=Hf(t,i,n,s),r&&(t=Tl(t)),t}function Dp(t){return t}function Zy(t){return[t,this.get(t)]}let Jy;function Np(){return Jy||(Jy=new Jn(Ao([]),void 0,void 0,void 0,qy))}function Vf(t,e,n,i,r){if(t!=null){if(Array.isArray(t))t=jc(t,void 0,0)?void 0:r&&2&It(t)?t:El(t,e,n,i!==void 0,r);else if(Of(t)){const s={};for(let o in t)s[o]=Vf(t[o],e,n,i,r);t=s}else t=e(t,i);return t}}function El(t,e,n,i,r){const s=i||n?It(t):0;i=i?!!(32&s):void 0;const o=Bn(t);for(let a=0;a<o.length;a++)o[a]=Vf(o[a],e,n,i,r);return n&&(b0(o,t),n(s,o)),o}function Qy(t){return Vf(t,Gf,void 0,void 0,!1)}function Gf(t){return t.X===La?t.toJSON():t instanceof Jn?t.oa(Qy):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(jc(e,void 0,0))return}else{if(wa(e))return yp(e);if(e instanceof nr){const n=e.g;return n==null?"":typeof n=="string"?n:e.g=yp(n)}if(e instanceof Jn)return e.oa()}}return e}(t)}function Th(t,e,n=Sh){if(t!=null){if(f0&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=It(t);return 2&i||(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),t=e?Pt(t,-12293&(34|i)):El(t,Th,4&i?Sh:n,!0,!0)),t}return t.X===La?(n=t.s,t=2&(i=ct(n))?t:Wf(t,n,i,!0)):t instanceof Jn&&!(2&t.N)&&(n=Ao(t.Y(Th)),t=new Jn(n,t.U,t.S,t.Z)),t}}function Wf(t,e,n,i){return t=t.constructor,Yc=e=P0(e,n,i),e=new t(e),Yc=void 0,e}function P0(t,e,n){const i=n||2&e?Sh:ky,r=!!(32&e);return t=function(s,o,a){const c=Bn(s);var l=c.length;const u=256&o?c[l-1]:void 0;for(l+=u?-1:0,o=512&o?1:0;o<l;o++)c[o]=a(c[o]);if(u){o=c[o]={};for(const h in u)o[h]=a(u[h])}return b0(c,s),c}(t,e,s=>Th(s,r,i)),Nf(t,32|(n?2:0)),t}function Tl(t){const e=t.s,n=ct(e);return 2&n?Wf(t,e,n,!1):t}function I0(t,e,n,i){return!(4&e)||n!=null}function Br(t,e){return Fi(t=t.s,ct(t),e)}function Up(t,e,n,i){if(!(0>(e=i+(+!!(512&e)-1))||e>=t.length||e>=n))return t[e]}function Fi(t,e,n,i){if(n===-1)return null;const r=T0(e);if(!(n>=r)){var s=t.length;return i&&256&e&&(i=t[s-1][n])!=null?(Up(t,e,r,n)&&cu!=null&&(4<=(e=(t=zy??(zy={}))[cu]||0)||(t[cu]=e+1,Vy())),i):Up(t,e,r,n)}return 256&e?t[t.length-1][n]:void 0}function mt(t,e,n,i){const r=t.s;let s=ct(r);return Oi(s),yt(r,s,e,n,i),t}function yt(t,e,n,i,r){const s=T0(e);if(n>=s||r){let o=e;if(256&e)r=t[t.length-1];else{if(i==null)return o;r=t[s+(+!!(512&e)-1)]={},o|=256}return r[n]=i,n<s&&(t[n+(+!!(512&e)-1)]=void 0),o!==e&&Pt(t,o),o}return t[n+(+!!(512&e)-1)]=i,256&e&&n in(t=t[t.length-1])&&delete t[n],e}function Ro(t,e,n,i,r){var s=2&e;let o=Fi(t,e,n,r);Array.isArray(o)||(o=Uf);const a=!(2&i);i=!(1&i);const c=!!(32&e);let l=It(o);return l!==0||!c||s||a?1&l||(l|=1,Pt(o,l)):(l|=33,Pt(o,l)),s?(t=!1,2&l||(Ao(o),t=!!(4&l)),(i||t)&&Object.freeze(o)):(s=!!(2&l)||!!(2048&l),i&&s?(o=Bn(o),i=1,c&&!a&&(i|=32),Pt(o,i),yt(t,e,n,o,r)):a&&32&l&&!s&&Xc(o,32)),o}function Lc(t,e){t=t.s;let n=ct(t);const i=Fi(t,n,e),r=Xr(i);return r!=null&&r!==i&&yt(t,n,e,r),r}function D0(t){t=t.s;let e=ct(t);const n=Fi(t,e,1),i=Ff(n,!0,!!(34&e));return i!=null&&i!==n&&yt(t,e,1,i),i}function js(t,e,n){const i=t.s;let r=ct(i);const s=2&r?1:2;let o=N0(i,r,e);var a=It(o);if(I0(t,a,void 0)){(4&a||Object.isFrozen(o))&&(o=Bn(o),a=Ms(a,r),r=yt(i,r,e,o));let c=t=0;for(;t<o.length;t++){const l=n(o[t]);l!=null&&(o[c++]=l)}c<t&&(o.length=c),a=sn(a=U0(a,r),20,!0),a=sn(a,4096,!1),a=sn(a,8192,!1),Pt(o,a),2&a&&Object.freeze(o)}return sa(a)||(n=a,(a=(t=s===1||s===4&&!!(32&a))?sn(a,2,!0):oo(a,r,!1))!==n&&Pt(o,a),t&&Object.freeze(o)),s===2&&sa(a)&&(o=Bn(o),a=oo(a=Ms(a,r),r,!1),Pt(o,a),yt(i,r,e,o)),o}function N0(t,e,n){return t=Fi(t,e,n),Array.isArray(t)?t:Uf}function U0(t,e){return t===0&&(t=Ms(t,e)),sn(t,1,!0)}function sa(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function O0(t){t=Bn(t);for(let e=0;e<t.length;e++){const n=t[e]=Bn(t[e]);Array.isArray(n[1])&&(n[1]=Ao(n[1]))}return t}function Zc(t,e,n){{const a=t.s;let c=ct(a);if(Oi(c),n==null)yt(a,c,e);else{var i,r=It(n),s=r,o=!!(2&r)||Object.isFrozen(n);if((i=!o)&&(i=!1),I0(t,r))for(r=21,o&&(n=Bn(n),s=0,r=oo(r=Ms(r,c),c,!0)),t=0;t<n.length;t++)n[t]=Pa(n[t]);i&&(n=Bn(n),s=0,r=oo(r=Ms(r,c),c,!0)),r!==s&&Pt(n,r),yt(a,c,e,n)}}}function Ah(t,e,n,i){t=t.s;let r=ct(t);Oi(r),yt(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Ia(t,e,n,i){const r=ct(t);Oi(r),t=Ro(t,r,e,2),i=n(i,!!(4&(e=It(t)))&&!!(4096&e)),t.push(i)}function eM(t){return t}function hu(t,e){return Xf(t=t.s,ct(t),y1)===e?e:-1}function Xf(t,e,n){let i=0;for(let r=0;r<n.length;r++){const s=n[r];Fi(t,e,s)!=null&&(i!==0&&(e=yt(t,e,i)),i=s)}return i}function jf(t,e,n,i){let r=ct(t);Oi(r);const s=Fi(t,r,n,i);let o;if(s!=null&&s.X===La)return(e=Tl(s))!==s&&yt(t,r,n,e,i),e.s;if(Array.isArray(s)){const a=It(s);o=2&a?P0(s,a,!1):s,o=xs(o,e)}else o=xs(void 0,e);return o!==s&&yt(t,r,n,o,i),o}function F0(t,e,n,i){t=t.s;let r=ct(t);const s=Fi(t,r,n,i);return(e=Hf(s,e,!1,r))!==s&&e!=null&&yt(t,r,n,e,i),e}function tt(t,e,n,i=!1){if((e=F0(t,e,n,i))==null)return e;t=t.s;let r=ct(t);if(!(2&r)){const s=Tl(e);s!==e&&yt(t,r,n,e=s,i)}return e}function B0(t,e,n,i,r,s){var o=2,a=!!(2&e);o=a?1:o,r=!!r,s&&(s=!a),a=N0(t,e,i);var c=It(a);const l=!!(4&c);if(!l){var u=a,h=e;const f=!!(2&(c=U0(c,e)));f&&(h=sn(h,2,!0));let d=!f,g=!0,v=0,m=0;for(;v<u.length;v++){const p=Hf(u[v],n,!1,h);if(p instanceof n){if(!f){const A=!!(2&It(p.s));d&&(d=!A),g&&(g=A)}u[m++]=p}}m<v&&(u.length=m),c=sn(c,4,!0),c=sn(c,16,g),c=sn(c,8,d),Pt(u,c),f&&Object.freeze(u)}if(s&&!(8&c||!a.length&&(o===1||o===4&&32&c))){for(sa(c)&&(a=Bn(a),c=Ms(c,e),e=yt(t,e,i,a)),n=a,s=c,u=0;u<n.length;u++)(c=n[u])!==(h=Tl(c))&&(n[u]=h);s=sn(s,8,!0),s=sn(s,16,!n.length),Pt(n,s),c=s}return sa(c)||(n=c,(c=(s=o===1||o===4&&!!(32&c))?sn(c,!a.length||16&c&&(!l||32&c)?2:2048,!0):oo(c,e,r))!==n&&Pt(a,c),s&&Object.freeze(a)),o===2&&sa(c)&&(a=Bn(a),c=oo(c=Ms(c,e),e,r),Pt(a,c),yt(t,e,i,a)),a}function or(t,e,n){t=t.s;const i=ct(t);return B0(t,i,e,n,!1,!(2&i))}function Le(t,e,n,i,r){return i==null&&(i=void 0),mt(t,n,i,r)}function oa(t,e,n,i){i==null&&(i=void 0),t=t.s;let r=ct(t);Oi(r),(n=Xf(t,r,n))&&n!==e&&i!=null&&(r=yt(t,r,n)),yt(t,r,e,i)}function Ms(t,e){return t=sn(t,2,!!(2&e)),t=sn(t,32,!0),sn(t,2048,!1)}function oo(t,e,n){return 32&e&&n||(t=sn(t,32,!1)),t}function Jc(t,e,n,i){t=t.s;const r=ct(t);Oi(r),e=B0(t,r,n,e,!0),n=i??new n,e.push(n),2&It(n.s)?Xc(e,8):Xc(e,16)}function Zn(t,e){return bo(Br(t,e))}function fi(t,e){return t??e}function Nt(t,e){return fi(Lc(t,e),0)}function Ii(t,e){return fi(vs(Br(t,e)),"")}function Ma(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);mt(t,e,n)}function Di(t,e,n){if(n!=null){if(typeof n!="number"||!Number.isFinite(n))throw Eh("int32");n|=0}mt(t,e,n)}function Ee(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);mt(t,e,n)}function di(t,e,n){e.g?e.m(t,e.g,e.h,n,!0):e.m(t,e.h,n,!0)}Jn.prototype.toJSON=void 0,Jn.prototype.Ja=A0;var Se=class{constructor(t,e){this.s=L0(t,e)}toJSON(){return k0(this,El(this.s,Gf,void 0,void 0,!1),!0)}l(){var t=oS;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.s;return Wf(this,t,ct(t),!1)}P(){return!!(2&It(this.s))}};function k0(t,e,n){var i=Ry?void 0:t.constructor.B;const r=ct(n?t.s:e);if(!(t=e.length))return e;let s,o;if(Of(n=e[t-1])){e:{var a=n;let u={},h=!1;for(var c in a){let f=a[c];if(Array.isArray(f)){let d=f;(jc(f,i,+c)||Cp(f)&&f.size===0)&&(f=null),f!=d&&(h=!0)}f!=null?u[c]=f:h=!0}if(h){for(var l in u){a=u;break e}a=null}}a!=n&&(s=!0),t--}for(c=+!!(512&r)-1;0<t&&(n=e[l=t-1],l-=c,n==null||jc(n,i,l)||Cp(n)&&n.size===0);t--)o=!0;return(s||o)&&(e=Array.prototype.slice.call(e,0,t),a&&e.push(a)),e}function H0(t){return Array.isArray(t)?t[0]instanceof To?t:[hM,t]:[t,void 0]}function Co(t,e){if(Array.isArray(e)){var n=It(e);if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Pt(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}Se.prototype.X=La,Se.prototype.toString=function(){return k0(this,this.s,!1).toString()};const Op=Symbol();function qf(t){let e=t[Op];if(!e){const n=V0(t),i=Yf(t),r=i.l;e=r?(s,o)=>r(s,o,i):(s,o)=>{for(;S0(o)&&o.h!=4;){var a=o.m,c=i[a];if(!c){var l=i.ea;l&&(l=l[a])&&(c=i[a]=tM(l))}c&&c(o,s,a)||(a=(c=o).l,Cc(c),c.ia?c=void 0:(l=c.g.g-a,c.g.g=a,c=M0(c.g,l)),a=s,c&&(Pr||(Pr=Symbol()),(l=a[Pr])?l.push(c):a[Pr]=[c]))}n===z0||n===Pc||n.j||(s[Hy||(Hy=Symbol())]=n)},t[Op]=e}return e}function tM(t){const e=(t=H0(t))[0].g;if(t=t[1]){const n=qf(t),i=Yf(t).T;return(r,s,o)=>e(r,s,o,i,n)}return e}class fu{}let z0,Pc;const aa=Symbol();function nM(t,e,n){const i=n[1];let r;if(i){const s=i[aa];r=s?s.T:$c(i[0]),t[e]=s??i}r&&r===zf?(t.g||(t.g=new Set)).add(e):n[0]&&(t.h||(t.h=new Set)).add(e)}function Fp(t,e){return[t.l,!e||0<e[0]?void 0:e]}function V0(t){var e=t[aa];if(e)return e;if(!(e=Kf(t,t[aa]=new fu,Fp,Fp,nM)).ea&&!e.h&&!e.g){let n=!0;for(let i in e)isNaN(i)||(n=!1);n?($c(t[0])===zf?Pc?e=Pc:((e=new fu).T=$c(!0),e=Pc=e):e=z0||(z0=new fu),e=t[aa]=e):e.j=!0}return e}function iM(t,e,n){t[e]=n}function Kf(t,e,n,i,r=iM){e.T=$c(t[0]);let s=0;var o=t[++s];o&&o.constructor===Object&&(e.ea=o,typeof(o=t[++s])=="function"&&(e.l=o,e.m=t[++s],o=t[++s]));const a={};for(;Array.isArray(o)&&typeof o[0]=="number"&&0<o[0];){for(var c=0;c<o.length;c++)a[o[c]]=o;o=t[++s]}for(c=1;o!==void 0;){let h;typeof o=="number"&&(c+=o,o=t[++s]);var l=void 0;if(o instanceof To?h=o:(h=fM,s--),h.pa){o=t[++s],l=t;var u=s;typeof o=="function"&&(o=o(),l[u]=o),l=o}for(u=c+1,typeof(o=t[++s])=="number"&&0>o&&(u-=o,o=t[++s]);c<u;c++){const f=a[c];r(e,c,l?i(h,l,f):n(h,f))}}return e}const Bp=Symbol();function G0(t){let e=t[Bp];if(!e){const n=Al(t);e=(i,r)=>X0(i,r,n),t[Bp]=e}return e}const bh=Symbol();function rM(t){return t.h}function sM(t,e){let n,i;const r=t.h;return(s,o,a)=>r(s,o,a,i||(i=Al(e).T),n||(n=G0(e)))}function Al(t){let e=t[bh];return e||(e=Kf(t,t[bh]={},rM,sM),W0(t),e)}const wh=Symbol();function oM(t,e){const n=t.g;return e?(i,r,s)=>n(i,r,s,e):n}function aM(t,e,n){const i=t.g;let r,s;return(o,a,c)=>i(o,a,c,s||(s=Yf(e).T),r||(r=qf(e)),n)}function Yf(t){let e=t[wh];return e||(V0(t),e=Kf(t,t[wh]={},oM,aM),W0(t),e)}function W0(t){wh in t&&aa in t&&bh in t&&(t.length=0)}function kp(t,e){var n=t[e];if(n)return n;if((n=t.ea)&&(n=n[e])){var i=(n=H0(n))[0].h;if(n=n[1]){const r=G0(n),s=Al(n).T;n=(n=t.m)?n(s,r):(o,a,c)=>i(o,a,c,s,r)}else n=i;return t[e]=n}}function X0(t,e,n){for(var i=ct(t),r=+!!(512&i)-1,s=t.length,o=512&i?1:0,a=s+(256&i?-1:0);o<a;o++){const c=t[o];if(c==null)continue;const l=o-r,u=kp(n,l);u&&u(e,c,l)}if(256&i){i=t[s-1];for(let c in i)r=+c,Number.isNaN(r)||(s=i[c])!=null&&(a=kp(n,r))&&a(e,s,r)}if(t=Pr?t[Pr]:void 0)for(so(e,e.g.end()),n=0;n<t.length;n++)so(e,Mf(t[n])||_l())}function wn(t,e){return new To(t,e,!1,!1)}function Lo(t,e){return new To(t,e,!0,!1)}function bl(t,e){return new To(t,e,!1,!0)}function Rn(t,e,n){yt(t,ct(t),e,n)}var cM=bl(function(t,e,n,i,r){return t.h===2&&(t=Ra(t,xs([void 0,void 0],i),r),Oi(i=ct(e)),(r=Fi(e,i,n))instanceof Jn?2&r.N?((r=r.Y()).push(t),yt(e,i,n,r)):r.Oa(t):Array.isArray(r)?(2&It(r)&&yt(e,i,n,r=O0(r)),r.push(t)):yt(e,i,n,[t]),!0)},function(t,e,n,i,r){if(e instanceof Jn)e.forEach((s,o)=>{Mh(t,n,xs([o,s],i),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const o=e[s];Array.isArray(o)&&Mh(t,n,xs(o,i),r)}});function j0(t,e,n){e:if(e!=null){if(Sl(e)){if(typeof e=="string"){e=kf(e);break e}if(typeof e=="number"){e=Bf(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&bp(e),e!=null&&(Qn(t,n,0),typeof e=="number"?(t=t.g,gs(e),Wc(t,xt,kt)):(n=bp(e),Wc(t.g,n.h,n.g))))}function q0(t,e,n){(e=bo(e))!=null&&e!=null&&(Qn(t,n,0),yl(t.g,e))}function K0(t,e,n){(e=R0(e))!=null&&(Qn(t,n,0),t.g.g.push(e?1:0))}function Y0(t,e,n){(e=vs(e))!=null&&Ml(t,n,c0(e))}function wl(t,e,n,i,r){Mh(t,n,e instanceof Se?e.s:Array.isArray(e)?xs(e,i):void 0,r)}function $0(t,e,n){(e=e==null||typeof e=="string"||wa(e)||e instanceof nr?e:void 0)!=null&&Ml(t,n,Ef(e).buffer)}function Z0(t,e,n){return(t.h===5||t.h===2)&&(e=Ro(e,ct(e),n,2,!1),t.h==2?xl(t,yh,e):e.push(yh(t.g)),!0)}var Ht,ir=wn(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=xh(i);const r=xh(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,Rn(e,n,s==2047?t?NaN:1/0*i:s==0?i*Math.pow(2,-1074)*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=Xr(e))!=null&&(Qn(t,n,1),t=t.g,(n=v0||(v0=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),xt=n.getUint32(0,!0),kt=n.getUint32(4,!0),ya(t,xt),ya(t,kt))}),Gt=wn(function(t,e,n){return t.h===5&&(Rn(e,n,yh(t.g)),!0)},function(t,e,n){(e=Xr(e))!=null&&(Qn(t,n,5),t=t.g,Af(e),ya(t,xt))}),lM=Lo(Z0,function(t,e,n){if((e=Co(Xr,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Qn(i,r,5),i=i.g,Af(s),ya(i,xt))}}),$f=Lo(Z0,function(t,e,n){if((e=Co(Xr,e))!=null&&e.length){Qn(t,n,2),Ca(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,Af(e[i]),ya(n,xt)}}),kr=wn(function(t,e,n){return t.h===0&&(Rn(e,n,Rf(t.g,bf)),!0)},j0),du=wn(function(t,e,n){return t.h===0&&(Rn(e,n,(t=Rf(t.g,bf))===0?void 0:t),!0)},j0),uM=wn(function(t,e,n){return t.h===0&&(Rn(e,n,Rf(t.g,vh)),!0)},function(t,e,n){e:if(e!=null){if(Sl(e)){if(typeof e=="string"){var i=Math.trunc(Number(e));Number.isSafeInteger(i)&&0<=i?e=String(i):((i=e.indexOf("."))!==-1&&(e=e.substring(0,i)),Pp(e)||(vl(e),e=Gc(xt,kt)));break e}if(typeof e=="number"){e=0<=(e=Math.trunc(e))&&Number.isSafeInteger(e)?e:function(r){if(0>r){gs(r);const s=Gc(xt,kt);return r=Number(s),Number.isSafeInteger(r)?r:s}return Pp(String(r))?r:(gs(r),vh(xt,kt))}(e);break e}}e=void 0}e!=null&&(typeof e=="string"&&Tp(e),e!=null&&(Qn(t,n,0),typeof e=="number"?(t=t.g,gs(e),Wc(t,xt,kt)):(n=Tp(e),Wc(t.g,n.h,n.g))))}),Dt=wn(function(t,e,n){return t.h===0&&(Rn(e,n,Or(t.g)),!0)},q0),Rl=Lo(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ro(e,ct(e),n,2,!1),t.h==2?xl(t,Or,e):e.push(Or(t.g)),!0)},function(t,e,n){if((e=Co(bo,e))!=null&&e.length){n=Pf(t,n);for(let i=0;i<e.length;i++)yl(t.g,e[i]);If(t,n)}}),ao=wn(function(t,e,n){return t.h===0&&(Rn(e,n,(t=Or(t.g))===0?void 0:t),!0)},q0),Ut=wn(function(t,e,n){return t.h===0&&(Rn(e,n,Cf(t.g)),!0)},K0),ca=wn(function(t,e,n){return t.h===0&&(Rn(e,n,(t=Cf(t.g))===!1?void 0:t),!0)},K0),cn=Lo(function(t,e,n){return t.h===2&&(Ia(e,n,eM,t=Lf(t)),!0)},function(t,e,n){if((e=Co(vs,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&Ml(i,r,c0(s))}}),Hr=wn(function(t,e,n){return t.h===2&&(Rn(e,n,(t=Lf(t))===""?void 0:t),!0)},Y0),ft=wn(function(t,e,n){return t.h===2&&(Rn(e,n,Lf(t)),!0)},Y0),hM=bl(function(t,e,n,i,r){return t.h===2&&(Ra(t,jf(e,i,n,!0),r),!0)},wl),fM=bl(function(t,e,n,i,r){return t.h===2&&(Ra(t,jf(e,i,n),r),!0)},wl);Ht=new To(function(t,e,n,i,r){if(t.h!==2)return!1;i=xs(void 0,i);let s=ct(e);Oi(s);let o=Ro(e,s,n,3);return s=ct(e),4&It(o)&&(o=Bn(o),Pt(o,-2079&(1|It(o))),yt(e,s,n,o)),o.push(i),Ra(t,i,r),!0},function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)wl(t,e[s],n,i,r)},!0,!0);var dt=bl(function(t,e,n,i,r,s){if(t.h!==2)return!1;let o=ct(e);return Oi(o),(s=Xf(e,o,s))&&n!==s&&yt(e,o,s),Ra(t,e=jf(e,i,n),r),!0},wl),J0=wn(function(t,e,n){return t.h===2&&(Rn(e,n,E0(t)),!0)},$0),dM=Lo(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ro(e,ct(e),n,2,!1),t.h==2?xl(t,Fr,e):e.push(Fr(t.g)),!0)},function(t,e,n){if((e=Co(Wy,e))!=null)for(let o=0;o<e.length;o++){var i=t,r=n,s=e[o];s!=null&&(Qn(i,r,0),Ca(i.g,s))}}),Ni=wn(function(t,e,n){return t.h===0&&(Rn(e,n,Or(t.g)),!0)},function(t,e,n){(e=bo(e))!=null&&(e=parseInt(e,10),Qn(t,n,0),yl(t.g,e))}),pM=Lo(function(t,e,n){return(t.h===0||t.h===2)&&(e=Ro(e,ct(e),n,2,!1),t.h==2?xl(t,Oy,e):e.push(Or(t.g)),!0)},function(t,e,n){if((e=Co(bo,e))!=null&&e.length){n=Pf(t,n);for(let i=0;i<e.length;i++)yl(t.g,e[i]);If(t,n)}});class mM{constructor(e,n){this.h=e,this.g=n,this.l=tt,this.m=Le,this.defaultValue=void 0}}function pi(t,e){return new mM(t,e)}function jr(t,e){return(n,i)=>{if(qa.length){const s=qa.pop();s.o(i),au(s.g,n,i),n=s}else n=new class{constructor(s,o){if(Ep.length){const a=Ep.pop();au(a,s,o),s=a}else s=new class{constructor(a,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,au(this,a,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ca=!1}}(s,o);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(o)}o({ia:s=!1}={}){this.ia=s}}(n,i);try{const s=new t,o=s.s;qf(e)(o,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,100>qa.length&&qa.push(n)}return r}}function Cl(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};X0(this.s,e,Al(t)),so(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let o=0;o<r;o++){const a=i[o];n.set(a,s),s+=a.length}return e.l=[n],n}}var Hp=class extends Se{constructor(t){super(t)}},Q0=[0,Hr,wn(function(t,e,n){return t.h===2&&(Rn(e,n,(t=E0(t))===ys()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof Se){const i=e.Qa;return void(i&&(e=i(e),e!=null&&Ml(t,n,Ef(e).buffer)))}if(Array.isArray(e))return}$0(t,e,n)})],gM=[0,ft],e1=[0,Dt,Ni,Ut,-1,Rl,Ni,-1],_M=[0,Ut,-1],t1=class extends Se{constructor(){super()}};t1.B=[6];var n1=[0,Ut,ft,Ut,Ni,-1,pM,ft,-1,_M,Ni],i1=[0,ft,-2],zp=class extends Se{constructor(){super()}},r1=[0],s1=[0,Dt,Ut,-4],kn=class extends Se{constructor(t){super(t,2)}},At={},vM=[-2,At,Ut];At[336783863]=[0,ft,Ut,-1,Dt,[0,[1,2,3,4,5,6],dt,r1,dt,n1,dt,i1,dt,s1,dt,e1,dt,[0,ft]],gM,Ut,[0,[1,3],[2,4],dt,[0,Rl],-1,dt,[0,cn],-1,Ht,[0,ft,-1]],ft];var xM=[0,Hr,ca],o1=[0,du,-1,ca,-3,du,Rl,Hr,ao,du,-1,ca,ao,ca,-2,Hr],Da=[-1,{}],a1=[0,ft,1,Da],c1=[0,ft,cn,Da];function Hn(t,e){Ah(t,2,wo(e),"")}function gt(t,e){Ia(t.s,3,Pa,e)}function Qe(t,e){Ia(t.s,4,Pa,e)}var ln=class extends Se{constructor(t){super(t,500)}o(t){return Le(this,0,7,t)}};ln.B=[3,4,5,6,8,13,17,1005];var yM=[-500,Hr,-1,cn,-3,vM,Ht,Q0,ao,-1,a1,c1,Ht,xM,Hr,o1,ao,cn,987,cn],MM=[0,Hr,-1,Da],SM=[-500,ft,-1,[-1,{}],998,ft],EM=[-500,ft,cn,-1,[-2,{},Ut],997,cn,-1],TM=[-500,ft,cn,Da,998,cn];function zn(t,e){Jc(t,1,ln,e)}function Mt(t,e){Ia(t.s,10,Pa,e)}function rt(t,e){Ia(t.s,15,Pa,e)}var xn=class extends Se{constructor(t){super(t,500)}o(t){return Le(this,0,1001,t)}};xn.B=[1,6,7,9,10,15,16,17,14,1002];var l1=[-500,Ht,yM,4,Ht,SM,Ht,EM,ao,Ht,TM,cn,ao,a1,c1,Ht,MM,cn,-2,o1,Hr,-1,ca,979,Da,Ht,Q0],AM=jr(xn,l1);xn.prototype.g=Cl(l1);var bM=[0,Ht,[0,Dt,-2]],wM=class extends Se{constructor(t){super(t)}},RM=[0,Dt,Gt,ft,-1],Zf=class extends Se{constructor(t){super(t)}g(){return or(this,wM,1)}};Zf.B=[1];var u1=[0,Ht,RM],Ll=jr(Zf,u1),CM=[0,Dt,Gt],LM=[0,Dt,-1,bM],PM=class extends Se{constructor(t){super(t)}},IM=[0,Dt,-3],DM=[0,Gt,-3],NM=class extends Se{constructor(t){super(t)}},UM=[0,Gt,-1,ft,Gt],Ic=class extends Se{constructor(t){super(t)}h(){return tt(this,PM,2)}g(){return or(this,NM,5)}};Ic.B=[5];var OM=[0,Ni,IM,DM,LM,Ht,UM],h1=class extends Se{constructor(t){super(t)}};h1.B=[1,2,3,8,9];var f1=jr(h1,[0,cn,Rl,$f,OM,ft,-1,kr,Ht,CM,cn,kr]),d1=class extends Se{constructor(t){super(t)}},FM=[0,Gt,-4],p1=class extends Se{constructor(t){super(t)}};p1.B=[1];var Js=jr(p1,[0,Ht,FM]),m1=class extends Se{constructor(t){super(t)}},BM=[0,Gt,-4],g1=class extends Se{constructor(t){super(t)}};g1.B=[1];var Na=jr(g1,[0,Ht,BM]),_1=class extends Se{constructor(t){super(t)}};_1.B=[3];var kM=[0,Dt,-1,$f,Ni],v1=class extends Se{constructor(){super()}};v1.prototype.g=Cl([0,Gt,-4,kr]);var HM=class extends Se{constructor(t){super(t)}},zM=[0,1,Dt,ft,u1],x1=class extends Se{constructor(t){super(t)}};x1.B=[1];var VM=jr(x1,[0,Ht,zM,kr]),Rh=class extends Se{constructor(t){super(t)}};Rh.B=[1];var GM=class extends Se{constructor(t){super(t)}qa(){const t=D0(this);return t??ys()}},WM=class extends Se{constructor(t){super(t)}},y1=[1,2],XM=[0,y1,dt,[0,$f],dt,[0,J0],Dt,ft],M1=class extends Se{constructor(t){super(t)}};M1.B=[1];var jM=jr(M1,[0,Ht,XM,kr]),Pl=class extends Se{constructor(t){super(t)}};Pl.B=[4,5];var S1=[0,ft,Dt,Gt,cn,-1],Vp=class extends Se{constructor(t){super(t)}},qM=[0,Ut,-1],Gp=class extends Se{constructor(t){super(t)}},Dc=[1,2,3,4,5],Qc=class extends Se{constructor(t){super(t)}g(){return D0(this)!=null}h(){return vs(Br(this,2))!=null}},E1=[0,J0,ft,[0,Dt,kr,-1],[0,uM,kr]],wt=class extends Se{constructor(t){super(t)}g(){return R0(Br(this,2))??!1}},Ot=[0,E1,Ut,[0,Dc,dt,s1,dt,n1,dt,e1,dt,r1,dt,i1],Ni],Il=class extends Se{constructor(t){super(t)}},Jf=[0,Ot,Gt,-1,Dt],KM=pi(502141897,Il);At[502141897]=Jf;var T1=[0,E1];At[512499200]=T1;var A1=[0,T1];At[515723506]=A1;var YM=jr(class extends Se{constructor(t){super(t)}},[0,[0,Ni,-1,lM,dM],kM]),b1=[0,Ot];At[508981768]=b1;var w1=class extends Se{constructor(t){super(t)}},Qf=[0,Ot,Gt,b1,Ut],R1=class extends Se{constructor(t){super(t)}},C1=[0,Ot,Jf,Qf,Gt,A1];At[508968149]=Qf;var $M=pi(508968150,R1);At[508968150]=C1;var L1=class extends Se{constructor(t){super(t)}},ZM=pi(513916220,L1);At[513916220]=[0,Ot,C1,Dt];var As=class extends Se{constructor(t){super(t)}h(){return tt(this,Pl,2)}g(){mt(this,2)}},P1=[0,Ot,S1];At[478825465]=P1;var I1=[0,Ot];At[478825422]=I1;var JM=class extends Se{constructor(t){super(t)}},D1=[0,Ot,I1,P1,-1],N1=class extends Se{constructor(t){super(t)}},U1=[0,Ot,Gt,Dt],ed=class extends Se{constructor(t){super(t)}},td=[0,Ot,Gt],nd=class extends Se{constructor(t){super(t)}},O1=[0,Ot,U1,td,Gt],F1=class extends Se{constructor(t){super(t)}},QM=[0,Ot,O1,D1];At[463370452]=D1,At[464864288]=U1,At[474472470]=td;var eS=pi(462713202,nd);At[462713202]=O1;var tS=pi(479097054,F1);At[479097054]=QM;var nS=class extends Se{constructor(t){super(t)}},iS=[0,Ot],B1=class extends Se{constructor(t){super(t)}},id=[0,Ot,Gt,-1,Dt];At[514774813]=id;var k1=class extends Se{constructor(t){super(t)}},rd=[0,Ot,Gt,Ut];At[518928384]=rd;var H1=class extends Se{constructor(){super()}};H1.prototype.g=Cl([0,Ot,td,iS,Jf,Qf,id,rd]);var z1=class extends Se{constructor(t){super(t)}},rS=pi(456383383,z1);At[456383383]=[0,Ot,S1];var V1=class extends Se{constructor(t){super(t)}},sS=pi(476348187,V1);At[476348187]=[0,Ot,qM];var G1=class extends Se{constructor(t){super(t)}},W1=[0,Ni,-1],Ch=class extends Se{constructor(t){super(t)}};Ch.B=[3];var oS=pi(458105876,class extends Se{constructor(t){super(t)}g(){var t=this.s;const e=ct(t);var n=2&e;return t=function(i,r,s){var o=Ch;const a=2&r;let c=!1;if(s==null){if(a)return Np();s=[]}else if(s.constructor===Jn){if(!(2&s.N)||a)return s;s=s.Y()}else Array.isArray(s)?c=!!(2&It(s)):s=[];if(a){if(!s.length)return Np();c||(c=!0,Ao(s))}else c&&(c=!1,s=O0(s));return c||(64&It(s)?Xc(s,32):32&r&&Nf(s,32)),yt(i,r,2,o=new Jn(s,o,Xy,void 0),!1),o}(t,e,Fi(t,e,2)),t==null||!n&&Ch&&(t.ta=!0),n=t}});At[458105876]=[0,W1,cM,[!0,kr,[0,ft,-1,cn]]];var sd=class extends Se{constructor(t){super(t)}},X1=pi(458105758,sd);At[458105758]=[0,Ot,ft,W1];var od=class extends Se{constructor(t){super(t)}};od.B=[5,6];var aS=pi(443442058,od);At[443442058]=[0,Ot,ft,Dt,Gt,cn,-1];var j1=class extends Se{constructor(t){super(t)}},cS=pi(516587230,j1);function Lh(t,e){return e=e?e.clone():new Pl,t.displayNamesLocale!==void 0?mt(e,1,wo(t.displayNamesLocale)):t.displayNamesLocale===void 0&&mt(e,1),t.maxResults!==void 0?Di(e,2,t.maxResults):"maxResults"in t&&mt(e,2),t.scoreThreshold!==void 0?Ee(e,3,t.scoreThreshold):"scoreThreshold"in t&&mt(e,3),t.categoryAllowlist!==void 0?Zc(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&mt(e,4),t.categoryDenylist!==void 0?Zc(e,5,t.categoryDenylist):"categoryDenylist"in t&&mt(e,5),e}function ad(t,e=-1,n=""){return{categories:t.map(i=>({index:fi(Zn(i,1),0)??-1,score:Nt(i,2)??0,categoryName:Ii(i,3)??"",displayName:Ii(i,4)??""})),headIndex:e,headName:n}}function q1(t){var o,a;var e=js(t,3,Xr),n=js(t,2,bo),i=js(t,1,vs),r=js(t,9,vs);const s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(o=tt(t,Ic,4))==null?void 0:o.h())&&(s.boundingBox={originX:Zn(e,1)??0,originY:Zn(e,2)??0,width:Zn(e,3)??0,height:Zn(e,4)??0,angle:0}),(a=tt(t,Ic,4))==null?void 0:a.g().length)for(const c of tt(t,Ic,4).g())s.keypoints.push({x:Lc(c,1)??0,y:Lc(c,2)??0,score:Lc(c,4)??0,label:vs(Br(c,3))??""});return s}function Dl(t){const e=[];for(const n of or(t,m1,1))e.push({x:Nt(n,1)??0,y:Nt(n,2)??0,z:Nt(n,3)??0,visibility:Nt(n,4)??0});return e}function la(t){const e=[];for(const n of or(t,d1,1))e.push({x:Nt(n,1)??0,y:Nt(n,2)??0,z:Nt(n,3)??0,visibility:Nt(n,4)??0});return e}function Wp(t){return Array.from(t,e=>127<e?e-256:e)}function Xp(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(0>=i||0>=r)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let Ka;At[516587230]=[0,Ot,id,rd,Gt];const lS=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function K1(){if(Ka===void 0)try{await WebAssembly.instantiate(lS),Ka=!0}catch{Ka=!1}return Ka}async function ko(t,e=""){const n=await K1()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var ss=class{};function Y1(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&1<=t.length&&17<=Number(t[1])))}async function jp(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(t.toString())}function $1(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Ae(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function qp(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=$1(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function Kp(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function vi(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function fr(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,o)=>{s?(n(i,o),i=[]):i.push(r)}}ss.forVisionTasks=function(t){return ko("vision",t)},ss.forTextTasks=function(t){return ko("text",t)},ss.forGenAiExperimentalTasks=function(t){return ko("genai_experimental",t)},ss.forGenAiTasks=function(t){return ko("genai",t)},ss.forAudioTasks=function(t){return ko("audio",t)},ss.isSimdSupported=function(){return K1()};async function uS(t,e,n,i){return t=await(async(r,s,o,a,c)=>{if(s&&await jp(s),!self.ModuleFactory||o&&(await jp(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,a)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function pu(t,e){const n=tt(t.baseOptions,Qc,1)||new Qc;typeof e=="string"?(mt(n,2,wo(e)),mt(n,1)):e instanceof Uint8Array&&(mt(n,1,Ff(e,!1,!1)),mt(n,2)),Le(t.baseOptions,0,1,n)}function Yp(t){try{const e=t.K.length;if(e===1)throw Error(t.K[0].message);if(1<e)throw Error("Encountered multiple errors: "+t.K.map(n=>n.message).join(", "))}finally{t.K=[]}}function ye(t,e){t.J=Math.max(t.J,e)}function Nl(t,e){t.C=new ln,Hn(t.C,"PassThroughCalculator"),gt(t.C,"free_memory"),Qe(t.C,"free_memory_unused_out"),Mt(e,"free_memory"),zn(e,t.C)}function co(t,e){gt(t.C,e),Qe(t.C,e+"_unused_out")}function Ul(t){t.g.addBoolToStream(!0,"free_memory",t.J)}var Nc=class{constructor(t){this.g=t,this.K=[],this.J=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,o,a;if(e){const c=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=tt(this.baseOptions,Qc,1))!=null&&r.g()||(s=tt(this.baseOptions,Qc,1))!=null&&s.h()||(o=t.baseOptions)!=null&&o.modelAssetBuffer||(a=t.baseOptions)!=null&&a.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,u){let h=tt(l.baseOptions,Gp,3);if(!h){var f=h=new Gp,d=new zp;oa(f,4,Dc,d)}"delegate"in u&&(u.delegate==="GPU"?(u=h,f=new t1,oa(u,2,Dc,f)):(u=h,f=new zp,oa(u,4,Dc,f))),Le(l.baseOptions,0,3,h)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),pu(this,"/model.dat"),this.m(),this.L()});if(c.modelAssetBuffer instanceof Uint8Array)pu(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return async function(l){const u=[];for(var h=0;;){const{done:f,value:d}=await l.read();if(f)break;u.push(d),h+=d.length}if(u.length===0)return new Uint8Array(0);if(u.length===1)return u[0];l=new Uint8Array(h),h=0;for(const f of u)l.set(f,h),h+=f.length;return l}(c.modelAssetBuffer).then(l=>{pu(this,l),this.m(),this.L()})}return this.m(),this.L(),Promise.resolve()}L(){}fa(){let t;if(this.g.fa(e=>{t=AM(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.K.push(Error(i))}),this.g.Ma(),this.g.setGraph(t,e),this.C=void 0,Yp(this)}finishProcessing(){this.g.finishProcessing(),Yp(this)}close(){this.C=void 0,this.g.closeGraph()}};function rr(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Nc.prototype.close=Nc.prototype.close,function(t,e){t=t.split(".");var n,i=ba;for((t[0]in i)||i.execScript===void 0||i.execScript("var "+t[0]);t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}("TaskRunner",Nc);class hS{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function $p(t,e,n){const i=t.g;if(n=rr(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Zp(t,e){const n=t.g,i=rr(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=rr(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.K),n.vertexAttribPointer(t.K,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=rr(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.J),n.vertexAttribPointer(t.J,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new hS(n,i,r,s)}function cd(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function ld(t,e,n,i){return cd(t,e),t.h||(t.m(),t.D()),n?(t.v||(t.v=Zp(t,!0)),n=t.v):(t.A||(t.A=Zp(t,!1)),n=t.A),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function Ol(t,e,n){return cd(t,e),t=rr(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Fl(t,e,n){cd(t,e),t.u||(t.u=rr(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.u),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function ud(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var hd=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=rr(t.createProgram(),"Failed to create WebGL program"),this.ba=$p(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=$p(this,this.H(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.K=t.getAttribLocation(this.h,"aVertex"),this.J=t.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.ba),t.deleteShader(this.aa)}this.u&&this.g.deleteFramebuffer(this.u),this.A&&this.A.close(),this.v&&this.v.close()}};function Ji(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Ph(t){var e=Ji(t,1);if(!e){if(e=Ji(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=lo(t);var n=fd(t);if(Fl(n,i,Z1(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function Z1(t){let e=Ji(t,2);if(!e){const n=lo(t);e=Q1(t);const i=Ph(t),r=J1(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Ih(t)}return e}function lo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=rr(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function J1(t){if(t=lo(t),!Ya)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Ya=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Ya=t.R16F}return Ya}function fd(t){return t.l||(t.l=new hd),t.l}function Q1(t){const e=lo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ji(t,2);return n||(n=Ol(fd(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Ih(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var Ya,qt=class{constructor(t,e,n,i,r,s,o){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=o,this.j&&--Jp===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ha(){return!!Ji(this,0)}la(){return!!Ji(this,1)}R(){return!!Ji(this,2)}ka(){return(e=Ji(t=this,0))||(e=Ph(t),e=new Uint8Array(e.map(n=>255*n)),t.g.push(e)),e;var t,e}ja(){return Ph(this)}O(){return Z1(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=lo(this),r=fd(this);i.activeTexture(i.TEXTURE1),n=Ol(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=J1(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Fl(r,i,n),ld(r,i,!1,()=>{Q1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ih(this)}),ud(r),Ih(this)}}t.push(n)}return new qt(t,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&lo(this).deleteTexture(Ji(this,2)),Jp=-1}};qt.prototype.close=qt.prototype.close,qt.prototype.clone=qt.prototype.clone,qt.prototype.getAsWebGLTexture=qt.prototype.O,qt.prototype.getAsFloat32Array=qt.prototype.ja,qt.prototype.getAsUint8Array=qt.prototype.ka,qt.prototype.hasWebGLTexture=qt.prototype.R,qt.prototype.hasFloat32Array=qt.prototype.la,qt.prototype.hasUint8Array=qt.prototype.Ha;var Jp=250;function Ei(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function ev(t){var e=Ei(t,0);if(!e){e=uo(t);const n=Bl(t),i=new Uint8Array(t.width*t.height*4);Fl(n,e,Uc(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),ud(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function Uc(t){let e=Ei(t,2);if(!e){const n=uo(t);e=Oc(t);const i=Ei(t,1)||ev(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Zo(t)}return e}function uo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when iniitializing the image.");return t.h||(t.h=rr(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function Bl(t){return t.l||(t.l=new hd),t.l}function Oc(t){const e=uo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Ei(t,2);return n||(n=Ol(Bl(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Zo(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Qp(t){const e=uo(t);return ld(Bl(t),e,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,o=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=o,n}(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}var Kt=class{constructor(t,e,n,i,r,s,o){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=o,(this.j||this.m)&&--em===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ga(){return!!Ei(this,0)}ma(){return!!Ei(this,1)}R(){return!!Ei(this,2)}Ea(){return ev(this)}Da(){var t=Ei(this,1);return t||(Uc(this),Oc(this),t=Qp(this),Zo(this),this.g.push(t),this.j=!0),t}O(){return Uc(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=uo(this),r=Bl(this);i.activeTexture(i.TEXTURE1),n=Ol(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Fl(r,i,n),ld(r,i,!1,()=>{Oc(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Zo(this)}),ud(r),Zo(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Uc(this),Oc(this),n=Qp(this),Zo(this)}t.push(n)}return new Kt(t,this.ma(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Ei(this,1).close(),this.m&&uo(this).deleteTexture(Ei(this,2)),em=-1}};Kt.prototype.close=Kt.prototype.close,Kt.prototype.clone=Kt.prototype.clone,Kt.prototype.getAsWebGLTexture=Kt.prototype.O,Kt.prototype.getAsImageBitmap=Kt.prototype.Da,Kt.prototype.getAsImageData=Kt.prototype.Ea,Kt.prototype.hasWebGLTexture=Kt.prototype.R,Kt.prototype.hasImageBitmap=Kt.prototype.ma,Kt.prototype.hasImageData=Kt.prototype.Ga;var em=250;function mi(...t){return t.map(([e,n])=>({start:e,end:n}))}const fS=function(t){return class extends t{Ma(){this.i._registerModelResourcesGraphService()}}}((tm=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:Y1()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Ae(this,i||"input_audio",s=>{Ae(this,r=r||"audio_header",o=>{this.i._configureAudio(s,o,t,e,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}fa(t){vi(this,"__graph_config__",e=>{t(e)}),Ae(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),Ae(this,i,o=>{this.i._addAudioToInputStream(this.g,e,n,o,r)})}addGpuBufferToStream(t,e,n){Ae(this,e,i=>{const[r,s]=qp(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){Ae(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Ae(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Ae(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Ae(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Ae(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Ae(this,e,i=>{Ae(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){Ae(this,e,i=>{Kp(this,Object.keys(t),r=>{Kp(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Ae(this,n,r=>{Ae(this,e,s=>{const o=this.i._malloc(t.length);this.i.HEAPU8.set(t,o),this.i._addProtoToInputStream(o,t.length,s,r,i),this.i._free(o)})})}addEmptyPacketToStream(t,e){Ae(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){Ae(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)Ae(this,s,o=>{this.i._addStringVectorEntry(r,o)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Ae(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Ae(this,e,n=>{Ae(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Ae(this,n,i=>{Ae(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Ae(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)Ae(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){vi(this,t,e),Ae(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){fr(this,t,e),Ae(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){vi(this,t,e),Ae(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){fr(this,t,e),Ae(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){vi(this,t,e),Ae(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){fr(this,t,e),Ae(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){vi(this,t,e),Ae(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){fr(this,t,e),Ae(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){vi(this,t,e),Ae(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){fr(this,t,e),Ae(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){vi(this,t,e),Ae(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){fr(this,t,e),Ae(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){vi(this,t,e),Ae(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){fr(this,t,e),Ae(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),vi(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),Ae(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends tm{get ha(){return this.i}sa(t,e,n){Ae(this,e,i=>{const[r,s]=qp(this,t,i);this.ha._addBoundTextureAsImageToStream(i,r,s,n)})}W(t,e){vi(this,t,e),Ae(this,t,n=>{this.ha._attachImageListener(n)})}da(t,e){fr(this,t,e),Ae(this,t,n=>{this.ha._attachImageVectorListener(n)})}}));var tm,ei=class extends fS{};async function Ze(t,e,n){return async function(i,r,s,o){return uS(i,r,s,o)}(t,n.canvas??(Y1()?void 0:document.createElement("canvas")),e,n)}function tv(t,e,n,i){if(t.V){const s=new v1;if(n!=null&&n.regionOfInterest){if(!t.ra)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(0>r.left||0>r.top||1<r.right||1<r.bottom)throw Error("Expected RectF values to be in [0,1].");Ee(s,1,(r.left+r.right)/2),Ee(s,2,(r.top+r.bottom)/2),Ee(s,4,r.right-r.left),Ee(s,3,r.bottom-r.top)}else Ee(s,1,.5),Ee(s,2,.5),Ee(s,4,1),Ee(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Ee(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[o,a]=$1(e);n=Nt(s,3)*a/o,r=Nt(s,4)*o/a,Ee(s,4,n),Ee(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.V,i)}t.g.sa(e,t.ba,i??performance.now()),t.finishProcessing()}function ti(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");tv(t,e,n,t.J+1)}function Bi(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");tv(t,e,n,i)}function ho(t,e,n,i){var r=e.data;const s=e.width,o=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==o)throw Error("Unsupported channel count: "+r.length/o);return t=new qt([r],n,!1,t.g.i.canvas,t.M,s,e),i?t.clone():t}var bn=class extends Nc{constructor(t,e,n,i){super(t),this.g=t,this.ba=e,this.V=n,this.ra=i,this.M=new hd}l(t,e=!0){if("runningMode"in t&&Ma(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.M.close(),super.close()}};bn.prototype.close=bn.prototype.close;var Gn=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Le(t=this.h=new Il,0,1,e=new wt),Ee(this.h,2,.5),Ee(this.h,3,.3)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&Ee(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ee(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}F(t,e){return this.j={detections:[]},ti(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Bi(this,t,n,e),this.j}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect_in"),rt(t,"detections");const e=new kn;di(e,KM,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect_in"),Qe(n,"DETECTIONS:detections"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=f1(s),this.j.detections.push(q1(i));ye(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Gn.prototype.detectForVideo=Gn.prototype.G,Gn.prototype.detect=Gn.prototype.F,Gn.prototype.setOptions=Gn.prototype.o,Gn.createFromModelPath=async function(t,e){return Ze(Gn,t,{baseOptions:{modelAssetPath:e}})},Gn.createFromModelBuffer=function(t,e){return Ze(Gn,t,{baseOptions:{modelAssetBuffer:e}})},Gn.createFromOptions=function(t,e){return Ze(Gn,t,e)};var dd=mi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),pd=mi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),md=mi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),nv=mi([474,475],[475,476],[476,477],[477,474]),gd=mi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),_d=mi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),iv=mi([469,470],[470,471],[471,472],[472,469]),vd=mi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),rv=[...dd,...pd,...md,...gd,..._d,...vd],sv=mi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function nm(t){t.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Rt=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!1),this.u={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Le(t=this.h=new R1,0,1,e=new wt),this.H=new w1,Le(this.h,0,3,this.H),this.j=new Il,Le(this.h,0,2,this.j),Di(this.j,4,1),Ee(this.j,2,.5),Ee(this.H,2,.5),Ee(this.h,4,.5)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numFaces"in t&&Di(this.j,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ee(this.j,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ee(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}F(t,e){return nm(this),ti(this,t,e),this.u}G(t,e,n){return nm(this),Bi(this,t,n,e),this.u}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect"),rt(t,"face_landmarks");const e=new kn;di(e,$M,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=Na(s),this.u.faceLandmarks.push(Dl(i));ye(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{ye(this,i)}),this.outputFaceBlendshapes&&(rt(t,"blendshapes"),Qe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=Ll(s),this.u.faceBlendshapes.push(ad(i.g()??[]));ye(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{ye(this,i)})),this.outputFacialTransformationMatrixes&&(rt(t,"face_geometry"),Qe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=tt(YM(s),_1,2))&&this.u.facialTransformationMatrixes.push({rows:fi(Zn(i,1),0)??0,columns:fi(Zn(i,2),0)??0,data:js(i,3,Xr).slice()??[]});ye(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Rt.prototype.detectForVideo=Rt.prototype.G,Rt.prototype.detect=Rt.prototype.F,Rt.prototype.setOptions=Rt.prototype.o,Rt.createFromModelPath=function(t,e){return Ze(Rt,t,{baseOptions:{modelAssetPath:e}})},Rt.createFromModelBuffer=function(t,e){return Ze(Rt,t,{baseOptions:{modelAssetBuffer:e}})},Rt.createFromOptions=function(t,e){return Ze(Rt,t,e)},Rt.FACE_LANDMARKS_LIPS=dd,Rt.FACE_LANDMARKS_LEFT_EYE=pd,Rt.FACE_LANDMARKS_LEFT_EYEBROW=md,Rt.FACE_LANDMARKS_LEFT_IRIS=nv,Rt.FACE_LANDMARKS_RIGHT_EYE=gd,Rt.FACE_LANDMARKS_RIGHT_EYEBROW=_d,Rt.FACE_LANDMARKS_RIGHT_IRIS=iv,Rt.FACE_LANDMARKS_FACE_OVAL=vd,Rt.FACE_LANDMARKS_CONTOURS=rv,Rt.FACE_LANDMARKS_TESSELATION=sv;var xi=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!0),Le(t=this.j=new L1,0,1,e=new wt)}get baseOptions(){return tt(this.j,wt,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){return super.l(t)}Pa(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,ti(this,t,i??{}),!this.h)return this.u}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect"),rt(t,"stylized_image");const e=new kn;di(e,ZM,this.j);const n=new ln;Hn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),zn(t,n),this.g.W("stylized_image",(i,r)=>{var s=!this.h,o=i.data,a=i.width;const c=a*(i=i.height);if(o instanceof Uint8Array)if(o.length===3*c){const l=new Uint8ClampedArray(4*c);for(let u=0;u<c;++u)l[4*u]=o[3*u],l[4*u+1]=o[3*u+1],l[4*u+2]=o[3*u+2],l[4*u+3]=255;o=new ImageData(l,a,i)}else{if(o.length!==4*c)throw Error("Unsupported channel count: "+o.length/c);o=new ImageData(new Uint8ClampedArray(o.buffer,o.byteOffset,o.length),a,i)}else if(!(o instanceof WebGLTexture))throw Error(`Unsupported format: ${o.constructor.name}`);a=new Kt([o],!1,!1,this.g.i.canvas,this.M,a,i),this.u=s=s?a.clone():a,this.h&&this.h(s),ye(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.u=null,this.h&&this.h(null),ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};xi.prototype.stylize=xi.prototype.Pa,xi.prototype.setOptions=xi.prototype.o,xi.createFromModelPath=function(t,e){return Ze(xi,t,{baseOptions:{modelAssetPath:e}})},xi.createFromModelBuffer=function(t,e){return Ze(xi,t,{baseOptions:{modelAssetBuffer:e}})},xi.createFromOptions=function(t,e){return Ze(xi,t,e)};var xd=mi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function im(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function rm(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function sm(t,e=!0){const n=[];for(const r of t){var i=Ll(r);t=[];for(const s of i.g())i=e&&Zn(s,1)!=null?fi(Zn(s,1),0):-1,t.push({score:Nt(s,2)??0,index:i,categoryName:Ii(s,3)??"",displayName:Ii(s,4)??""});n.push(t)}return n}var Ln=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.v=new F1,0,1,e=new wt),this.A=new nd,Le(this.v,0,2,this.A),this.u=new ed,Le(this.A,0,3,this.u),this.h=new N1,Le(this.A,0,2,this.h),this.j=new JM,Le(this.v,0,3,this.j),Ee(this.h,2,.5),Ee(this.A,4,.5),Ee(this.u,2,.5)}get baseOptions(){return tt(this.v,wt,1)}set baseOptions(t){Le(this.v,0,1,t)}o(t){var r,s,o,a;if(Di(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ee(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.A,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ee(this.u,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new As,n=e,i=Lh(t.cannedGesturesClassifierOptions,(r=tt(this.j,As,3))==null?void 0:r.h());Le(n,0,2,i),Le(this.j,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=tt(this.j,As,3))==null||s.g());return t.customGesturesClassifierOptions?(Le(n=e=new As,0,2,i=Lh(t.customGesturesClassifierOptions,(o=tt(this.j,As,4))==null?void 0:o.h())),Le(this.j,0,4,e)):t.customGesturesClassifierOptions===void 0&&((a=tt(this.j,As,4))==null||a.g()),this.l(t)}Ka(t,e){return im(this),ti(this,t,e),rm(this)}La(t,e,n){return im(this),Bi(this,t,n,e),rm(this)}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect"),rt(t,"hand_gestures"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new kn;di(e,tS,this.v);const n=new ln;Hn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"HAND_GESTURES:hand_gestures"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=Na(s);const o=[];for(const a of or(i,m1,1))o.push({x:Nt(a,1)??0,y:Nt(a,2)??0,z:Nt(a,3)??0,visibility:Nt(a,4)??0});this.landmarks.push(o)}ye(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ye(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Js(s);const o=[];for(const a of or(i,d1,1))o.push({x:Nt(a,1)??0,y:Nt(a,2)??0,z:Nt(a,3)??0,visibility:Nt(a,4)??0});this.worldLandmarks.push(o)}ye(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ye(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...sm(i,!1)),ye(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{ye(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...sm(i)),ye(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function om(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}Ln.prototype.recognizeForVideo=Ln.prototype.La,Ln.prototype.recognize=Ln.prototype.Ka,Ln.prototype.setOptions=Ln.prototype.o,Ln.createFromModelPath=function(t,e){return Ze(Ln,t,{baseOptions:{modelAssetPath:e}})},Ln.createFromModelBuffer=function(t,e){return Ze(Ln,t,{baseOptions:{modelAssetBuffer:e}})},Ln.createFromOptions=function(t,e){return Ze(Ln,t,e)},Ln.HAND_CONNECTIONS=xd;var Pn=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.j=new nd,0,1,e=new wt),this.u=new ed,Le(this.j,0,3,this.u),this.h=new N1,Le(this.j,0,2,this.h),Di(this.h,3,1),Ee(this.h,2,.5),Ee(this.u,2,.5),Ee(this.j,4,.5)}get baseOptions(){return tt(this.j,wt,1)}set baseOptions(t){Le(this.j,0,1,t)}o(t){return"numHands"in t&&Di(this.h,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ee(this.h,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.j,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ee(this.u,2,t.minHandPresenceConfidence??.5),this.l(t)}F(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ti(this,t,e),om(this)}G(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Bi(this,t,n,e),om(this)}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect"),rt(t,"hand_landmarks"),rt(t,"world_hand_landmarks"),rt(t,"handedness");const e=new kn;di(e,eS,this.j);const n=new ln;Hn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"LANDMARKS:hand_landmarks"),Qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),Qe(n,"HANDEDNESS:handedness"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=Na(s),this.landmarks.push(Dl(i));ye(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{ye(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Js(s),this.worldLandmarks.push(la(i));ye(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{ye(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,o=s.push;const a=[];for(const c of i){i=Ll(c);const l=[];for(const u of i.g())l.push({score:Nt(u,2)??0,index:fi(Zn(u,1),0)??-1,categoryName:Ii(u,3)??"",displayName:Ii(u,4)??""});a.push(l)}o.call(s,...a),ye(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Pn.prototype.detectForVideo=Pn.prototype.G,Pn.prototype.detect=Pn.prototype.F,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(t,e){return Ze(Pn,t,{baseOptions:{modelAssetPath:e}})},Pn.createFromModelBuffer=function(t,e){return Ze(Pn,t,{baseOptions:{modelAssetBuffer:e}})},Pn.createFromOptions=function(t,e){return Ze(Pn,t,e)},Pn.HAND_CONNECTIONS=xd;var ov=mi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function am(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function cm(t){try{if(!t.I)return t.h;t.I(t.h)}finally{Ul(t)}}function $a(t,e){t=Na(t),e.push(Dl(t))}var Et=class extends bn{constructor(t,e){super(new ei(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Le(t=this.A=new H1,0,1,e=new wt),this.u=new ed,Le(this.A,0,2,this.u),this.aa=new nS,Le(this.A,0,3,this.aa),this.j=new Il,Le(this.A,0,4,this.j),this.H=new w1,Le(this.A,0,5,this.H),this.v=new B1,Le(this.A,0,6,this.v),this.D=new k1,Le(this.A,0,7,this.D),Ee(this.j,2,.5),Ee(this.j,3,.3),Ee(this.H,2,.5),Ee(this.v,2,.5),Ee(this.v,3,.3),Ee(this.D,2,.5),Ee(this.u,2,.5)}get baseOptions(){return tt(this.A,wt,1)}set baseOptions(t){Le(this.A,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&Ee(this.j,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ee(this.j,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ee(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ee(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ee(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ee(this.D,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ee(this.u,2,t.minHandLandmarksConfidence??.5),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.I=typeof e=="function"?e:n,am(this),ti(this,t,i),cm(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.I=typeof n=="function"?n:i,am(this),Bi(this,t,r,e),cm(this)}m(){var t=new xn;Mt(t,"input_frames_image"),rt(t,"pose_landmarks"),rt(t,"pose_world_landmarks"),rt(t,"face_landmarks"),rt(t,"left_hand_landmarks"),rt(t,"left_hand_world_landmarks"),rt(t,"right_hand_landmarks"),rt(t,"right_hand_world_landmarks");const e=new kn,n=new Hp;Ah(n,1,wo("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))mt(r,2,El(s,Gf,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof nr||wa(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Ah(r,2,Ff(s,!1,!1),ys())}}(n,this.A.g());const i=new ln;Hn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Jc(i,8,Hp,n),gt(i,"IMAGE:input_frames_image"),Qe(i,"POSE_LANDMARKS:pose_landmarks"),Qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),Qe(i,"FACE_LANDMARKS:face_landmarks"),Qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),Qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),Qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),Qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),zn(t,i),Nl(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{$a(r,this.h.poseLandmarks),ye(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{ye(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var o=this.h.poseWorldLandmarks;r=Js(r),o.push(la(r)),ye(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{ye(this,r)}),this.outputPoseSegmentationMasks&&(Qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),co(this,"pose_segmentation_mask"),this.g.W("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[ho(this,r,!0,!this.I)],ye(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],ye(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{$a(r,this.h.faceLandmarks),ye(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{ye(this,r)}),this.outputFaceBlendshapes&&(rt(t,"extra_blendshapes"),Qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=Ll(r),o.push(ad(r.g()??[]))),ye(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{ye(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{$a(r,this.h.leftHandLandmarks),ye(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{ye(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var o=this.h.leftHandWorldLandmarks;r=Js(r),o.push(la(r)),ye(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{ye(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{$a(r,this.h.rightHandLandmarks),ye(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{ye(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var o=this.h.rightHandWorldLandmarks;r=Js(r),o.push(la(r)),ye(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{ye(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Et.prototype.detectForVideo=Et.prototype.G,Et.prototype.detect=Et.prototype.F,Et.prototype.setOptions=Et.prototype.o,Et.createFromModelPath=function(t,e){return Ze(Et,t,{baseOptions:{modelAssetPath:e}})},Et.createFromModelBuffer=function(t,e){return Ze(Et,t,{baseOptions:{modelAssetBuffer:e}})},Et.createFromOptions=function(t,e){return Ze(Et,t,e)},Et.HAND_CONNECTIONS=xd,Et.POSE_CONNECTIONS=ov,Et.FACE_LANDMARKS_LIPS=dd,Et.FACE_LANDMARKS_LEFT_EYE=pd,Et.FACE_LANDMARKS_LEFT_EYEBROW=md,Et.FACE_LANDMARKS_LEFT_IRIS=nv,Et.FACE_LANDMARKS_RIGHT_EYE=gd,Et.FACE_LANDMARKS_RIGHT_EYEBROW=_d,Et.FACE_LANDMARKS_RIGHT_IRIS=iv,Et.FACE_LANDMARKS_FACE_OVAL=vd,Et.FACE_LANDMARKS_CONTOURS=rv,Et.FACE_LANDMARKS_TESSELATION=sv;var Wn=class extends bn{constructor(t,e){super(new ei(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Le(t=this.h=new z1,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return Le(this.h,0,2,Lh(t,tt(this.h,Pl,2))),this.l(t)}ua(t,e){return this.j={classifications:[]},ti(this,t,e),this.j}va(t,e,n){return this.j={classifications:[]},Bi(this,t,n,e),this.j}m(){var t=new xn;Mt(t,"input_image"),Mt(t,"norm_rect"),rt(t,"classifications");const e=new kn;di(e,rS,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),gt(n,"IMAGE:input_image"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"CLASSIFICATIONS:classifications"),n.o(e),zn(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const o={classifications:or(s,HM,1).map(a=>{var c;return ad(((c=tt(a,Zf,4))==null?void 0:c.g())??[],fi(Zn(a,2),0),Ii(a,3))})};return Kc(Br(s,2))!=null&&(o.timestampMs=fi(Kc(Br(s,2)),0)),o}(VM(i)),ye(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Wn.prototype.classifyForVideo=Wn.prototype.va,Wn.prototype.classify=Wn.prototype.ua,Wn.prototype.setOptions=Wn.prototype.o,Wn.createFromModelPath=function(t,e){return Ze(Wn,t,{baseOptions:{modelAssetPath:e}})},Wn.createFromModelBuffer=function(t,e){return Ze(Wn,t,{baseOptions:{modelAssetBuffer:e}})},Wn.createFromOptions=function(t,e){return Ze(Wn,t,e)};var In=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!0),this.h=new V1,this.embeddings={embeddings:[]},Le(t=this.h,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){var e=this.h,n=tt(this.h,Vp,2);return n=n?n.clone():new Vp,t.l2Normalize!==void 0?Ma(n,1,t.l2Normalize):"l2Normalize"in t&&mt(n,1),t.quantize!==void 0?Ma(n,2,t.quantize):"quantize"in t&&mt(n,2),Le(e,0,2,n),this.l(t)}Ba(t,e){return ti(this,t,e),this.embeddings}Ca(t,e,n){return Bi(this,t,n,e),this.embeddings}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect"),rt(t,"embeddings_out");const e=new kn;di(e,sS,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"EMBEDDINGS:embeddings_out"),n.o(e),zn(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=jM(i),this.embeddings=function(s){return{embeddings:or(s,WM,1).map(o=>{var c,l;const a={headIndex:fi(Zn(o,3),0)??-1,headName:Ii(o,4)??""};if(F0(o,Rh,hu(o,1))!==void 0)o=js(o=tt(o,Rh,hu(o,1)),1,Xr),a.floatEmbedding=o.slice();else{const u=new Uint8Array(0);a.quantizedEmbedding=((l=(c=tt(o,GM,hu(o,2)))==null?void 0:c.qa())==null?void 0:l.h())??u}return a}),timestampMs:fi(Kc(Br(s,2)),0)}}(i),ye(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};In.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Xp(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Xp(Wp(t.quantizedEmbedding),Wp(e.quantizedEmbedding))}return t},In.prototype.embedForVideo=In.prototype.Ca,In.prototype.embed=In.prototype.Ba,In.prototype.setOptions=In.prototype.o,In.createFromModelPath=function(t,e){return Ze(In,t,{baseOptions:{modelAssetPath:e}})},In.createFromModelBuffer=function(t,e){return Ze(In,t,{baseOptions:{modelAssetBuffer:e}})},In.createFromOptions=function(t,e){return Ze(In,t,e)};var Dh=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function lm(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function um(t){try{const e=new Dh(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{Ul(t)}}Dh.prototype.close=Dh.prototype.close;var yn=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new sd,this.v=new G1,Le(this.h,0,3,this.v),Le(t=this.h,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?mt(this.h,2,wo(t.displayNamesLocale)):"displayNamesLocale"in t&&mt(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}L(){(function(t){var n,i;const e=or(t.fa(),ln,1).filter(r=>Ii(r,1).includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.u=[],1<e.length)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=tt(e[0],kn,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.u[Number(s)]=Ii(r,1)})})(this)}ga(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,lm(this),ti(this,t,i),um(this)}Na(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,lm(this),Bi(this,t,r,e),um(this)}Fa(){return this.u}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect");const e=new kn;di(e,X1,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),n.o(e),zn(t,n),Nl(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),co(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ho(this,s,!0,!this.j)),ye(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ye(this,i)})),this.outputCategoryMask&&(rt(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),co(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=ho(this,i,!1,!this.j),ye(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ye(this,i)})),rt(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ye(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.prototype.getLabels=yn.prototype.Fa,yn.prototype.segmentForVideo=yn.prototype.Na,yn.prototype.segment=yn.prototype.ga,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=function(t,e){return Ze(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return Ze(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return Ze(yn,t,e)};var Nh=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Nh.prototype.close=Nh.prototype.close;var dS=class extends Se{constructor(t){super(t)}},fo=[0,Dt,-2],pS=[0,ir,-3,Ut],kl=[0,ir,-3,Ut,ir,-1],av=[0,kl],mS=[0,av,fo],gS=[0,kl,fo],cv=[0,kl,Dt,-1],_S=[0,cv,fo],vS=[0,ir,-3,Ut,fo,-1],xS=[0,ir,-3,Ut,Ni],mu=class extends Se{constructor(t){super(t)}},hm=[0,ir,-1,Ut],lv=class extends Se{constructor(){super()}};lv.B=[1];var fm=class extends Se{constructor(t){super(t)}},Uh=[1,2,3,4,5,6,7,8,9,10,14,15],yS=[0,Uh,dt,kl,dt,gS,dt,av,dt,mS,dt,hm,dt,xS,dt,pS,dt,[0,ft,ir,-2,Ut,Dt,Ut,-1,2,ir,fo],dt,cv,dt,_S,ir,fo,ft,dt,vS,dt,[0,Ht,hm]],MS=[0,ft,Dt,-1,Ut],Oh=class extends Se{constructor(){super()}};Oh.B=[1],Oh.prototype.g=Cl([0,Ht,yS,ft,MS]);var yi=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new sd,this.v=new G1,Le(this.h,0,3,this.v),Le(t=this.h,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}ga(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new Oh;const s=new fm;var o=new dS;if(Di(o,1,255),Le(s,0,12,o),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var a=new mu;Ma(a,3,!0),Ee(a,1,e.keypoint.x),Ee(a,2,e.keypoint.y),oa(s,5,Uh,a)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(a of(o=new lv,e.scribble))Ma(e=new mu,3,!0),Ee(e,1,a.x),Ee(e,2,a.y),Jc(o,1,mu,e);oa(s,15,Uh,o)}Jc(i,1,fm,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),ti(this,t,r);e:{try{const l=new Nh(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{Ul(this)}c=void 0}return c}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"roi_in"),Mt(t,"norm_rect_in");const e=new kn;di(e,X1,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),gt(n,"IMAGE:image_in"),gt(n,"ROI:roi_in"),gt(n,"NORM_RECT:norm_rect_in"),n.o(e),zn(t,n),Nl(this,t),this.outputConfidenceMasks&&(rt(t,"confidence_masks"),Qe(n,"CONFIDENCE_MASKS:confidence_masks"),co(this,"confidence_masks"),this.g.da("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>ho(this,s,!0,!this.j)),ye(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],ye(this,i)})),this.outputCategoryMask&&(rt(t,"category_mask"),Qe(n,"CATEGORY_MASK:category_mask"),co(this,"category_mask"),this.g.W("category_mask",(i,r)=>{this.categoryMask=ho(this,i,!1,!this.j),ye(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,ye(this,i)})),rt(t,"quality_scores"),Qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,ye(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yi.prototype.segment=yi.prototype.ga,yi.prototype.setOptions=yi.prototype.o,yi.createFromModelPath=function(t,e){return Ze(yi,t,{baseOptions:{modelAssetPath:e}})},yi.createFromModelBuffer=function(t,e){return Ze(yi,t,{baseOptions:{modelAssetBuffer:e}})},yi.createFromOptions=function(t,e){return Ze(yi,t,e)};var Xn=class extends bn{constructor(t,e){super(new ei(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Le(t=this.h=new od,0,1,e=new wt)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?mt(this.h,2,wo(t.displayNamesLocale)):"displayNamesLocale"in t&&mt(this.h,2),t.maxResults!==void 0?Di(this.h,3,t.maxResults):"maxResults"in t&&mt(this.h,3),t.scoreThreshold!==void 0?Ee(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&mt(this.h,4),t.categoryAllowlist!==void 0?Zc(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&mt(this.h,5),t.categoryDenylist!==void 0?Zc(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&mt(this.h,6),this.l(t)}F(t,e){return this.j={detections:[]},ti(this,t,e),this.j}G(t,e,n){return this.j={detections:[]},Bi(this,t,n,e),this.j}m(){var t=new xn;Mt(t,"input_frame_gpu"),Mt(t,"norm_rect"),rt(t,"detections");const e=new kn;di(e,aS,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),gt(n,"IMAGE:input_frame_gpu"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"DETECTIONS:detections"),n.o(e),zn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=f1(s),this.j.detections.push(q1(i));ye(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{ye(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Xn.prototype.detectForVideo=Xn.prototype.G,Xn.prototype.detect=Xn.prototype.F,Xn.prototype.setOptions=Xn.prototype.o,Xn.createFromModelPath=async function(t,e){return Ze(Xn,t,{baseOptions:{modelAssetPath:e}})},Xn.createFromModelBuffer=function(t,e){return Ze(Xn,t,{baseOptions:{modelAssetBuffer:e}})},Xn.createFromOptions=function(t,e){return Ze(Xn,t,e)};var Fh=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function dm(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function pm(t){try{const e=new Fh(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.j)return e;t.j(e)}finally{Ul(t)}}Fh.prototype.close=Fh.prototype.close;var Dn=class extends bn{constructor(t,e){super(new ei(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Le(t=this.h=new j1,0,1,e=new wt),this.D=new k1,Le(this.h,0,3,this.D),this.v=new B1,Le(this.h,0,2,this.v),Di(this.v,4,1),Ee(this.v,2,.5),Ee(this.D,2,.5),Ee(this.h,4,.5)}get baseOptions(){return tt(this.h,wt,1)}set baseOptions(t){Le(this.h,0,1,t)}o(t){return"numPoses"in t&&Di(this.v,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ee(this.v,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ee(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ee(this.D,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}F(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,dm(this),ti(this,t,i),pm(this)}G(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,dm(this),Bi(this,t,r,e),pm(this)}m(){var t=new xn;Mt(t,"image_in"),Mt(t,"norm_rect"),rt(t,"normalized_landmarks"),rt(t,"world_landmarks"),rt(t,"segmentation_masks");const e=new kn;di(e,cS,this.h);const n=new ln;Hn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),gt(n,"IMAGE:image_in"),gt(n,"NORM_RECT:norm_rect"),Qe(n,"NORM_LANDMARKS:normalized_landmarks"),Qe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),zn(t,n),Nl(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=Na(s),this.landmarks.push(Dl(i));ye(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],ye(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Js(s),this.worldLandmarks.push(la(i));ye(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],ye(this,i)}),this.outputSegmentationMasks&&(Qe(n,"SEGMENTATION_MASK:segmentation_masks"),co(this,"segmentation_masks"),this.g.da("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>ho(this,s,!0,!this.j)),ye(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],ye(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Dn.prototype.detectForVideo=Dn.prototype.G,Dn.prototype.detect=Dn.prototype.F,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=function(t,e){return Ze(Dn,t,{baseOptions:{modelAssetPath:e}})},Dn.createFromModelBuffer=function(t,e){return Ze(Dn,t,{baseOptions:{modelAssetBuffer:e}})},Dn.createFromOptions=function(t,e){return Ze(Dn,t,e)},Dn.POSE_CONNECTIONS=ov;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yd="164",SS=0,mm=1,ES=2,uv=1,TS=2,$i=3,ar=0,En=1,bi=2,Ir=0,Qs=1,gm=2,_m=3,vm=4,AS=5,ls=100,bS=101,wS=102,RS=103,CS=104,LS=200,PS=201,IS=202,DS=203,Bh=204,kh=205,NS=206,US=207,OS=208,FS=209,BS=210,kS=211,HS=212,zS=213,VS=214,GS=0,WS=1,XS=2,el=3,jS=4,qS=5,KS=6,YS=7,hv=0,$S=1,ZS=2,Dr=0,JS=1,QS=2,e3=3,t3=4,n3=5,i3=6,r3=7,xm="attached",s3="detached",fv=300,po=301,mo=302,Hh=303,zh=304,Hl=306,go=1e3,br=1001,tl=1002,_n=1003,dv=1004,Jo=1005,On=1006,Fc=1007,Qi=1008,zr=1009,o3=1010,a3=1011,pv=1012,mv=1013,_o=1014,Ci=1015,zl=1016,gv=1017,_v=1018,Ua=1020,c3=35902,l3=1021,u3=1022,li=1023,h3=1024,f3=1025,eo=1026,Sa=1027,vv=1028,xv=1029,d3=1030,yv=1031,Mv=1033,gu=33776,_u=33777,vu=33778,xu=33779,ym=35840,Mm=35841,Sm=35842,Em=35843,Tm=36196,Am=37492,bm=37496,wm=37808,Rm=37809,Cm=37810,Lm=37811,Pm=37812,Im=37813,Dm=37814,Nm=37815,Um=37816,Om=37817,Fm=37818,Bm=37819,km=37820,Hm=37821,yu=36492,zm=36494,Vm=36495,p3=36283,Gm=36284,Wm=36285,Xm=36286,Ea=2300,vo=2301,Mu=2302,jm=2400,qm=2401,Km=2402,m3=2500,g3=0,Sv=1,Vh=2,_3=3200,v3=3201,Ev=0,x3=1,Ar="",pn="srgb",Jt="srgb-linear",Md="display-p3",Vl="display-p3-linear",nl="linear",vt="srgb",il="rec709",rl="p3",bs=7680,Ym=519,y3=512,M3=513,S3=514,Tv=515,E3=516,T3=517,A3=518,b3=519,Gh=35044,$m="300 es",er=2e3,sl=2001;class Po{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zm=1234567;const ua=Math.PI/180,xo=180/Math.PI;function hi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function on(t,e,n){return Math.max(e,Math.min(n,t))}function Sd(t,e){return(t%e+e)%e}function w3(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function R3(t,e,n){return t!==e?(n-t)/(e-t):0}function ha(t,e,n){return(1-n)*t+n*e}function C3(t,e,n,i){return ha(t,e,1-Math.exp(-n*i))}function L3(t,e=1){return e-Math.abs(Sd(t,e*2)-e)}function P3(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function I3(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function D3(t,e){return t+Math.floor(Math.random()*(e-t+1))}function N3(t,e){return t+Math.random()*(e-t)}function U3(t){return t*(.5-Math.random())}function O3(t){t!==void 0&&(Zm=t);let e=Zm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F3(t){return t*ua}function B3(t){return t*xo}function k3(t){return(t&t-1)===0&&t!==0}function H3(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function z3(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function V3(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),c=o(n/2),l=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,c*h,c*f,a*l);break;case"YZY":t.set(c*f,a*u,c*h,a*l);break;case"ZXZ":t.set(c*h,c*f,a*u,a*l);break;case"XZX":t.set(a*u,c*g,c*d,a*l);break;case"YXY":t.set(c*d,a*u,c*g,a*l);break;case"ZYZ":t.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ut(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const G3={DEG2RAD:ua,RAD2DEG:xo,generateUUID:hi,clamp:on,euclideanModulo:Sd,mapLinear:w3,inverseLerp:R3,lerp:ha,damp:C3,pingpong:L3,smoothstep:P3,smootherstep:I3,randInt:D3,randFloat:N3,randFloatSpread:U3,seededRandom:O3,degToRad:F3,radToDeg:B3,isPowerOfTwo:k3,ceilPowerOfTwo:H3,floorPowerOfTwo:z3,setQuaternionFromProperEuler:V3,normalize:ut,denormalize:oi};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,c,l){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l)}set(e,n,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],A=r[1],y=r[4],T=r[7],U=r[2],R=r[5],C=r[8];return s[0]=o*v+a*A+c*U,s[3]=o*m+a*y+c*R,s[6]=o*p+a*T+c*C,s[1]=l*v+u*A+h*U,s[4]=l*m+u*y+h*R,s[7]=l*p+u*T+h*C,s[2]=f*v+d*A+g*U,s[5]=f*m+d*y+g*R,s[8]=f*p+d*T+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return n*o*u-n*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=n*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*l-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(u*n-r*c)*v,e[5]=(r*s-a*n)*v,e[6]=d*v,e[7]=(i*c-l*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Su.makeScale(e,n)),this}rotate(e){return this.premultiply(Su.makeRotation(-e)),this}translate(e,n){return this.premultiply(Su.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Su=new Ge;function Av(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ta(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function W3(){const t=Ta("canvas");return t.style.display="block",t}const Jm={};function bv(t){t in Jm||(Jm[t]=!0,console.warn(t))}const Qm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eg=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Za={[Jt]:{transfer:nl,primaries:il,toReference:t=>t,fromReference:t=>t},[pn]:{transfer:vt,primaries:il,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vl]:{transfer:nl,primaries:rl,toReference:t=>t.applyMatrix3(eg),fromReference:t=>t.applyMatrix3(Qm)},[Md]:{transfer:vt,primaries:rl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(eg),fromReference:t=>t.applyMatrix3(Qm).convertLinearToSRGB()}},X3=new Set([Jt,Vl]),ot={enabled:!0,_workingColorSpace:Jt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!X3.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Za[e].toReference,r=Za[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Za[t].primaries},getTransfer:function(t){return t===Ar?nl:Za[t].transfer}};function to(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Eu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class j3{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Ta("canvas")),ws.width=e.width,ws.height=e.height;const i=ws.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ta("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=to(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(to(n[i]/255)*255):n[i]=to(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let q3=0;class wv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q3++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Tu(r[o].image)):s.push(Tu(r[o]))}else s=Tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?j3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K3=0;class Yt extends Po{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=br,r=br,s=On,o=Qi,a=li,c=zr,l=Yt.DEFAULT_ANISOTROPY,u=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K3++}),this.uuid=hi(),this.name="",this.source=new wv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case tl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case tl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=fv;Yt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(l+1)/2,T=(d+1)/2,U=(p+1)/2,R=(u+f)/4,C=(h+v)/4,G=(g+m)/4;return y>T&&y>U?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=R/i,s=C/i):T>U?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=G/r):U<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),i=C/s,r=G/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-v)/A,this.z=(f-u)/A,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y3 extends Po{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends Y3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rv extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $3 extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=d,e[n+2]=g,e[n+3]=v;return}if(h!==v||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*v,A=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const U=Math.sqrt(y),R=Math.atan2(U,p*A);m=Math.sin(m*R)/U,a=Math.sin(a*R)/U}const T=a*A;if(c=c*m+f*T,l=l*m+d*T,u=u*m+g*T,h=h*m+v*T,m===1-a){const U=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=U,l*=U,u*=U,h*=U}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[n]=a*g+u*h+c*d-l*f,e[n+1]=c*g+u*f+l*h-a*d,e[n+2]=l*g+u*d+a*f-c*h,e[n+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),h=a(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],h=n[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*r+n*this._y,this._z=d*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-n)*u)/l,f=Math.sin(n*u)/l;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+c*l+o*h-a*u,this.y=i+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Au.copy(this).projectOnVector(e),this.sub(Au)}reflect(e){return this.sub(Au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(on(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Au=new O,tg=new qr;class lr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Qa.subVectors(this.max,Ho),Rs.subVectors(e.a,Ho),Cs.subVectors(e.b,Ho),Ls.subVectors(e.c,Ho),dr.subVectors(Cs,Rs),pr.subVectors(Ls,Cs),Jr.subVectors(Rs,Ls);let n=[0,-dr.z,dr.y,0,-pr.z,pr.y,0,-Jr.z,Jr.y,dr.z,0,-dr.x,pr.z,0,-pr.x,Jr.z,0,-Jr.x,-dr.y,dr.x,0,-pr.y,pr.x,0,-Jr.y,Jr.x,0];return!bu(n,Rs,Cs,Ls,Qa)||(n=[1,0,0,0,1,0,0,0,1],!bu(n,Rs,Cs,Ls,Qa))?!1:(ec.crossVectors(dr,pr),n=[ec.x,ec.y,ec.z],bu(n,Rs,Cs,Ls,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new O,new O,new O,new O,new O,new O,new O,new O],ni=new O,Ja=new lr,Rs=new O,Cs=new O,Ls=new O,dr=new O,pr=new O,Jr=new O,Ho=new O,Qa=new O,ec=new O,Qr=new O;function bu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Qr.fromArray(t,s);const a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),c=e.dot(Qr),l=n.dot(Qr),u=i.dot(Qr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Z3=new lr,zo=new O,wu=new O;class ki{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Z3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const n=zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(wu)),this.expandByPoint(zo.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new O,Ru=new O,tc=new O,mr=new O,Cu=new O,nc=new O,Lu=new O;class Gl{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,n),Xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ru.copy(e).add(n).multiplyScalar(.5),tc.copy(n).sub(e).normalize(),mr.copy(this.origin).sub(Ru);const s=e.distanceTo(n)*.5,o=-this.direction.dot(tc),a=mr.dot(this.direction),c=-mr.dot(tc),l=mr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ru).addScaledVector(tc,f),d}intersectSphere(e,n){Xi.subVectors(e.center,this.origin);const i=Xi.dot(this.direction),r=Xi.dot(Xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,n,i,r,s){Cu.subVectors(n,e),nc.subVectors(i,e),Lu.crossVectors(Cu,nc);let o=this.direction.dot(Lu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,e);const c=a*this.direction.dot(nc.crossVectors(mr,nc));if(c<0)return null;const l=a*this.direction.dot(Cu.cross(mr));if(l<0||c+l>o)return null;const u=-a*mr.dot(Lu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,n,i,r,s,o,a,c,l,u,h,f,d,g,v,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,l,u,h,f,d,g,v,m)}set(e,n,i,r,s,o,a,c,l,u,h,f,d,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Ps.setFromMatrixColumn(e,0).length(),s=1/Ps.setFromMatrixColumn(e,1).length(),o=1/Ps.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,v=a*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=d+g*l,n[5]=f-v*l,n[9]=-a*c,n[2]=v-f*l,n[6]=g+d*l,n[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,v=l*h;n[0]=f+v*a,n[4]=g*a-d,n[8]=o*l,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=d*a-g,n[6]=v+f*a,n[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,v=l*h;n[0]=f-v*a,n[4]=-o*h,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*u,n[9]=v-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,v=a*h;n[0]=c*u,n[4]=g*l-d,n[8]=f*l+v,n[1]=c*h,n[5]=v*l+f,n[9]=d*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,v=a*l;n[0]=c*u,n[4]=v-f*h,n[8]=g*h+d,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=d*h+g,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,v=a*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=f*h+v,n[5]=o*u,n[9]=d*h-g,n[2]=g*h-d,n[6]=a*u,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J3,e,Q3)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),gr.crossVectors(i,Nn),gr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),gr.crossVectors(i,Nn)),gr.normalize(),ic.crossVectors(Nn,gr),r[0]=gr.x,r[4]=ic.x,r[8]=Nn.x,r[1]=gr.y,r[5]=ic.y,r[9]=Nn.y,r[2]=gr.z,r[6]=ic.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],A=i[3],y=i[7],T=i[11],U=i[15],R=r[0],C=r[4],G=r[8],E=r[12],x=r[1],V=r[5],$=r[9],D=r[13],J=r[2],Q=r[6],oe=r[10],te=r[14],z=r[3],ce=r[7],le=r[11],Me=r[15];return s[0]=o*R+a*x+c*J+l*z,s[4]=o*C+a*V+c*Q+l*ce,s[8]=o*G+a*$+c*oe+l*le,s[12]=o*E+a*D+c*te+l*Me,s[1]=u*R+h*x+f*J+d*z,s[5]=u*C+h*V+f*Q+d*ce,s[9]=u*G+h*$+f*oe+d*le,s[13]=u*E+h*D+f*te+d*Me,s[2]=g*R+v*x+m*J+p*z,s[6]=g*C+v*V+m*Q+p*ce,s[10]=g*G+v*$+m*oe+p*le,s[14]=g*E+v*D+m*te+p*Me,s[3]=A*R+y*x+T*J+U*z,s[7]=A*C+y*V+T*Q+U*ce,s[11]=A*G+y*$+T*oe+U*le,s[15]=A*E+y*D+T*te+U*Me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*a*f+i*l*f+r*a*d-i*c*d)+v*(+n*c*d-n*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+n*l*h-n*a*d-s*o*h+i*o*d+s*a*u-i*l*u)+p*(-r*a*u-n*c*h+n*a*f+r*o*h-i*o*f+i*c*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=h*m*l-v*f*l+v*c*d-a*m*d-h*c*p+a*f*p,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,T=u*v*l-g*h*l+g*a*d-o*v*d-u*a*p+o*h*p,U=g*h*c-u*v*c-g*a*f+o*v*f+u*a*m-o*h*m,R=n*A+i*y+r*T+s*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=A*C,e[1]=(v*f*s-h*m*s-v*r*d+i*m*d+h*r*p-i*f*p)*C,e[2]=(a*m*s-v*c*s+v*r*l-i*m*l-a*r*p+i*c*p)*C,e[3]=(h*c*s-a*f*s-h*r*l+i*f*l+a*r*d-i*c*d)*C,e[4]=y*C,e[5]=(u*m*s-g*f*s+g*r*d-n*m*d-u*r*p+n*f*p)*C,e[6]=(g*c*s-o*m*s-g*r*l+n*m*l+o*r*p-n*c*p)*C,e[7]=(o*f*s-u*c*s+u*r*l-n*f*l-o*r*d+n*c*d)*C,e[8]=T*C,e[9]=(g*h*s-u*v*s-g*i*d+n*v*d+u*i*p-n*h*p)*C,e[10]=(o*v*s-g*a*s+g*i*l-n*v*l-o*i*p+n*a*p)*C,e[11]=(u*a*s-o*h*s-u*i*l+n*h*l+o*i*d-n*a*d)*C,e[12]=U*C,e[13]=(u*v*r-g*h*r+g*i*f-n*v*f-u*i*m+n*h*m)*C,e[14]=(g*a*r-o*v*r-g*i*c+n*v*c+o*i*m-n*a*m)*C,e[15]=(o*h*r-u*a*r+u*i*c-n*h*c-o*i*f+n*a*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,v=o*u,m=o*h,p=a*h,A=c*l,y=c*u,T=c*h,U=i.x,R=i.y,C=i.z;return r[0]=(1-(v+p))*U,r[1]=(d+T)*U,r[2]=(g-y)*U,r[3]=0,r[4]=(d-T)*R,r[5]=(1-(f+p))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(g+y)*C,r[9]=(m-A)*C,r[10]=(1-(f+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Ps.set(r[0],r[1],r[2]).length();const o=Ps.set(r[4],r[5],r[6]).length(),a=Ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const l=1/s,u=1/o,h=1/a;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=u,ii.elements[5]*=u,ii.elements[6]*=u,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,n.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=er){const c=this.elements,l=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let d,g;if(a===er)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===sl)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=er){const c=this.elements,l=1/(n-e),u=1/(i-r),h=1/(o-s),f=(n+e)*l,d=(i+r)*u;let g,v;if(a===er)g=(o+s)*h,v=-2*h;else if(a===sl)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ps=new O,ii=new Xe,J3=new O(0,0,0),Q3=new O(1,1,1),gr=new O,ic=new O,Nn=new O,ng=new Xe,ig=new qr;class Ui{constructor(e=0,n=0,i=0,r=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ng,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ig.setFromEuler(this),this.setFromQuaternion(ig,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Cv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eE=0;const rg=new O,Is=new qr,ji=new Xe,rc=new O,Vo=new O,tE=new O,nE=new qr,sg=new O(1,0,0),og=new O(0,1,0),ag=new O(0,0,1),cg={type:"added"},iE={type:"removed"},Ds={type:"childadded",child:null},Pu={type:"childremoved",child:null};class Ct extends Po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eE++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new O,n=new Ui,i=new qr,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ge}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,n){return Is.setFromAxisAngle(e,n),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(sg,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(ag,e)}translateOnAxis(e,n){return rg.copy(e).applyQuaternion(this.quaternion),this.position.add(rg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sg,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(ag,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rc.copy(e):rc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Vo,rc,this.up):ji.lookAt(rc,Vo,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(ji),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cg),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iE),Pu.child=e,this.dispatchEvent(Pu),Pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cg),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,tE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,nE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new O(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new O,qi=new O,Iu=new O,Ki=new O,Ns=new O,Us=new O,lg=new O,Du=new O,Nu=new O,Uu=new O;class wi{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ri.subVectors(e,n),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ri.subVectors(r,n),qi.subVectors(i,n),Iu.subVectors(e,n);const o=ri.dot(ri),a=ri.dot(qi),c=ri.dot(Iu),l=qi.dot(qi),u=qi.dot(Iu),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,Ki)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ki.x),c.addScaledVector(o,Ki.y),c.addScaledVector(a,Ki.z),c)}static isFrontFacing(e,n,i,r){return ri.subVectors(i,n),qi.subVectors(e,n),ri.cross(qi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),ri.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return wi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ns.subVectors(r,i),Us.subVectors(s,i),Du.subVectors(e,i);const c=Ns.dot(Du),l=Us.dot(Du);if(c<=0&&l<=0)return n.copy(i);Nu.subVectors(e,r);const u=Ns.dot(Nu),h=Us.dot(Nu);if(u>=0&&h<=u)return n.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Ns,o);Uu.subVectors(e,s);const d=Ns.dot(Uu),g=Us.dot(Uu);if(g>=0&&d<=g)return n.copy(s);const v=d*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Us,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return lg.subVectors(s,r),a=(h-u)/(h-u+(d-g)),n.copy(r).addScaledVector(lg,a);const p=1/(m+v+f);return o=v*p,a=f*p,n.copy(i).addScaledVector(Ns,o).addScaledVector(Us,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},sc={h:0,s:0,l:0};function Ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Oe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=Sd(e,1),n=on(n,0,1),i=on(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ou(o,s,e+1/3),this.g=Ou(o,s,e),this.b=Ou(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=Lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=to(e.r),this.g=to(e.g),this.b=to(e.b),this}copyLinearToSRGB(e){return this.r=Eu(e.r),this.g=Eu(e.g),this.b=Eu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return ot.fromWorkingColorSpace(rn.copy(this),e),Math.round(on(rn.r*255,0,255))*65536+Math.round(on(rn.g*255,0,255))*256+Math.round(on(rn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=pn){ot.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(_r),this.setHSL(_r.h+e,_r.s+n,_r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(_r),e.getHSL(sc);const i=ha(_r.h,sc.h,n),r=ha(_r.s,sc.s,n),s=ha(_r.l,sc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Oe;Oe.NAMES=Lv;let rE=0;class Li extends Po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Qs,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=kh,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=el,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==kh&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==el&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ym&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fs extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=hv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bt=new O,oc=new $e;class vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bv("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)oc.fromBufferAttribute(this,n),oc.applyMatrix3(e),this.setXY(n,oc.x,oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=oi(n,this.array)),n}setX(e,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=oi(n,this.array)),n}setY(e,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=oi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=oi(n,this.array)),n}setW(e,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gh&&(e.usage=this.usage),e}}class Pv extends vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Iv extends vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sr extends vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sE=0;const jn=new Xe,Fu=new Ct,Os=new O,Un=new lr,Go=new lr,jt=new O;class Hi extends Po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sE++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Av(e)?Iv:Pv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,i){return jn.makeTranslation(e,n,i),this.applyMatrix4(jn),this}scale(e,n,i){return jn.makeScale(e,n,i),this.applyMatrix4(jn),this}lookAt(e){return Fu.lookAt(e),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ki);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(Un.min,Go.min),Un.expandByPoint(jt),jt.addVectors(Un.max,Go.max),Un.expandByPoint(jt)):(Un.expandByPoint(Go.min),Un.expandByPoint(Go.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)jt.fromBufferAttribute(a,l),c&&(Os.fromBufferAttribute(e,l),jt.add(Os)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let G=0;G<i.count;G++)a[G]=new O,c[G]=new O;const l=new O,u=new O,h=new O,f=new $e,d=new $e,g=new $e,v=new O,m=new O;function p(G,E,x){l.fromBufferAttribute(i,G),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,G),d.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const V=1/(d.x*g.y-g.x*d.y);isFinite(V)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(V),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(V),a[G].add(v),a[E].add(v),a[x].add(v),c[G].add(m),c[E].add(m),c[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let G=0,E=A.length;G<E;++G){const x=A[G],V=x.start,$=x.count;for(let D=V,J=V+$;D<J;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new O,T=new O,U=new O,R=new O;function C(G){U.fromBufferAttribute(r,G),R.copy(U);const E=a[G];y.copy(E),y.sub(U.multiplyScalar(U.dot(E))).normalize(),T.crossVectors(R,E);const V=T.dot(c[G])<0?-1:1;o.setXYZW(G,y.x,y.y,y.z,V)}for(let G=0,E=A.length;G<E;++G){const x=A[G],V=x.start,$=x.count;for(let D=V,J=V+$;D<J;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=n.count;f<d;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?d=c[v]*a.data.stride+a.offset:d=c[v]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new vn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hi,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);n.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ug=new Xe,es=new Gl,ac=new ki,hg=new O,Fs=new O,Bs=new O,ks=new O,Bu=new O,cc=new O,lc=new $e,uc=new $e,hc=new $e,fg=new O,dg=new O,pg=new O,fc=new O,dc=new O;class Fn extends Ct{constructor(e=new Hi,n=new fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){cc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],h=s[c];u!==0&&(Bu.fromBufferAttribute(h,e),o?cc.addScaledVector(Bu,u):cc.addScaledVector(Bu.sub(n),u))}n.add(cc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ac.copy(i.boundingSphere),ac.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(ac.containsPoint(es.origin)===!1&&(es.intersectSphere(ac,hg)===null||es.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(ug.copy(s).invert(),es.copy(e.ray).applyMatrix4(ug),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,es)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let T=A,U=y;T<U;T+=3){const R=a.getX(T),C=a.getX(T+1),G=a.getX(T+2);r=pc(this,p,e,i,l,u,h,R,C,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=a.getX(m),y=a.getX(m+1),T=a.getX(m+2);r=pc(this,o,e,i,l,u,h,A,y,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let T=A,U=y;T<U;T+=3){const R=T,C=T+1,G=T+2;r=pc(this,p,e,i,l,u,h,R,C,G),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){const A=m,y=m+1,T=m+2;r=pc(this,o,e,i,l,u,h,A,y,T),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function oE(t,e,n,i,r,s,o,a){let c;if(e.side===En?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===ar,a),c===null)return null;dc.copy(a),dc.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(dc);return l<n.near||l>n.far?null:{distance:l,point:dc.clone(),object:t}}function pc(t,e,n,i,r,s,o,a,c,l){t.getVertexPosition(a,Fs),t.getVertexPosition(c,Bs),t.getVertexPosition(l,ks);const u=oE(t,e,n,i,Fs,Bs,ks,fc);if(u){r&&(lc.fromBufferAttribute(r,a),uc.fromBufferAttribute(r,c),hc.fromBufferAttribute(r,l),u.uv=wi.getInterpolation(fc,Fs,Bs,ks,lc,uc,hc,new $e)),s&&(lc.fromBufferAttribute(s,a),uc.fromBufferAttribute(s,c),hc.fromBufferAttribute(s,l),u.uv1=wi.getInterpolation(fc,Fs,Bs,ks,lc,uc,hc,new $e)),o&&(fg.fromBufferAttribute(o,a),dg.fromBufferAttribute(o,c),pg.fromBufferAttribute(o,l),u.normal=wi.getInterpolation(fc,Fs,Bs,ks,fg,dg,pg,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new O,materialIndex:0};wi.getNormal(Fs,Bs,ks,h.normal),u.face=h}return u}class Oa extends Hi{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new sr(l,3)),this.setAttribute("normal",new sr(u,3)),this.setAttribute("uv",new sr(h,2));function g(v,m,p,A,y,T,U,R,C,G,E){const x=T/C,V=U/G,$=T/2,D=U/2,J=R/2,Q=C+1,oe=G+1;let te=0,z=0;const ce=new O;for(let le=0;le<oe;le++){const Me=le*V-D;for(let Ce=0;Ce<Q;Ce++){const Ke=Ce*x-$;ce[v]=Ke*A,ce[m]=Me*y,ce[p]=J,l.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),h.push(Ce/C),h.push(1-le/G),te+=1}}for(let le=0;le<G;le++)for(let Me=0;Me<C;Me++){const Ce=f+Me+Q*le,Ke=f+Me+Q*(le+1),Y=f+(Me+1)+Q*(le+1),ue=f+(Me+1)+Q*le;c.push(Ce,Ke,ue),c.push(Ke,Y,ue),z+=6}a.addGroup(d,z,E),d+=z,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function dn(t){const e={};for(let n=0;n<t.length;n++){const i=yo(t[n]);for(const r in i)e[r]=i[r]}return e}function aE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const cE={clone:yo,merge:dn};var lE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vr extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lE,this.fragmentShader=uE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=aE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nv extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=er}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vr=new O,mg=new $e,gg=new $e;class mn extends Nv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xo*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vr.x,vr.y).multiplyScalar(-e/vr.z),vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vr.x,vr.y).multiplyScalar(-e/vr.z)}getViewSize(e,n){return this.getViewBounds(e,mg,gg),n.subVectors(gg,mg)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ua*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,zs=1;class hE extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Hs,zs,e,n);r.layers=this.layers,this.add(r);const s=new mn(Hs,zs,e,n);s.layers=this.layers,this.add(s);const o=new mn(Hs,zs,e,n);o.layers=this.layers,this.add(o);const a=new mn(Hs,zs,e,n);a.layers=this.layers,this.add(a);const c=new mn(Hs,zs,e,n);c.layers=this.layers,this.add(c);const l=new mn(Hs,zs,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const l of n)this.remove(l);if(e===er)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Uv extends Yt{constructor(e,n,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],n=n!==void 0?n:po,super(e,n,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fE extends Ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:On}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oa(5,5,5),s=new Vr({name:"CubemapFromEquirect",uniforms:yo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ir});s.uniforms.tEquirect.value=n;const o=new Fn(r,s),a=n.minFilter;return n.minFilter===Qi&&(n.minFilter=On),new hE(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const ku=new O,dE=new O,pE=new Ge;class os{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ku.subVectors(i,n).cross(dE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ku),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pE.getNormalMatrix(e),r=this.coplanarPoint(ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ki,mc=new O;class Ed{constructor(e=new os,n=new os,i=new os,r=new os,s=new os,o=new os){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=er){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],A=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-s,f-l,m-d,T-p).normalize(),i[1].setComponents(c+s,f+l,m+d,T+p).normalize(),i[2].setComponents(c+o,f+u,m+g,T+A).normalize(),i[3].setComponents(c-o,f-u,m-g,T-A).normalize(),i[4].setComponents(c-a,f-h,m-v,T-y).normalize(),n===er)i[5].setComponents(c+a,f+h,m+v,T+y).normalize();else if(n===sl)i[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(mc.x=r.normal.x>0?e.max.x:e.min.x,mc.y=r.normal.y>0?e.max.y:e.min.y,mc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ov(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mE(t){const e=new WeakMap;function n(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=t.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=t.SHORT;else if(l instanceof Uint32Array)d=t.UNSIGNED_INT;else if(l instanceof Int32Array)d=t.INT;else if(l instanceof Int8Array)d=t.BYTE;else if(l instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,l){const u=c.array,h=c._updateRange,f=c.updateRanges;if(t.bindBuffer(l,a),h.count===-1&&f.length===0&&t.bufferSubData(l,0,u),f.length!==0){for(let d=0,g=f.length;d<g;d++){const v=f[d];t.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(l,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);if(l===void 0)e.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}class Wl extends Hi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,h=e/a,f=n/c,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let y=0;y<l;y++){const T=y*h-s;g.push(T,-A,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let A=0;A<a;A++){const y=A+l*p,T=A+l*(p+1),U=A+1+l*(p+1),R=A+1+l*p;d.push(y,T,R),d.push(T,U,R)}this.setIndex(d),this.setAttribute("position",new sr(g,3)),this.setAttribute("normal",new sr(v,3)),this.setAttribute("uv",new sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wl(e.width,e.height,e.widthSegments,e.heightSegments)}}var gE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_E=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ME=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,SE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,bE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,IE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,BE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jE="gl_FragColor = linearToOutputTexel( gl_FragColor );",qE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,KE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,YE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$E=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,QE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,lT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_T=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ST=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ET=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,IT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,DT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,NT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,BT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,XT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$T=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,JT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,QT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,eA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,SA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,EA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,FA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:gE,alphahash_pars_fragment:_E,alphamap_fragment:vE,alphamap_pars_fragment:xE,alphatest_fragment:yE,alphatest_pars_fragment:ME,aomap_fragment:SE,aomap_pars_fragment:EE,batching_pars_vertex:TE,batching_vertex:AE,begin_vertex:bE,beginnormal_vertex:wE,bsdfs:RE,iridescence_fragment:CE,bumpmap_pars_fragment:LE,clipping_planes_fragment:PE,clipping_planes_pars_fragment:IE,clipping_planes_pars_vertex:DE,clipping_planes_vertex:NE,color_fragment:UE,color_pars_fragment:OE,color_pars_vertex:FE,color_vertex:BE,common:kE,cube_uv_reflection_fragment:HE,defaultnormal_vertex:zE,displacementmap_pars_vertex:VE,displacementmap_vertex:GE,emissivemap_fragment:WE,emissivemap_pars_fragment:XE,colorspace_fragment:jE,colorspace_pars_fragment:qE,envmap_fragment:KE,envmap_common_pars_fragment:YE,envmap_pars_fragment:$E,envmap_pars_vertex:ZE,envmap_physical_pars_fragment:cT,envmap_vertex:JE,fog_vertex:QE,fog_pars_vertex:eT,fog_fragment:tT,fog_pars_fragment:nT,gradientmap_pars_fragment:iT,lightmap_pars_fragment:rT,lights_lambert_fragment:sT,lights_lambert_pars_fragment:oT,lights_pars_begin:aT,lights_toon_fragment:lT,lights_toon_pars_fragment:uT,lights_phong_fragment:hT,lights_phong_pars_fragment:fT,lights_physical_fragment:dT,lights_physical_pars_fragment:pT,lights_fragment_begin:mT,lights_fragment_maps:gT,lights_fragment_end:_T,logdepthbuf_fragment:vT,logdepthbuf_pars_fragment:xT,logdepthbuf_pars_vertex:yT,logdepthbuf_vertex:MT,map_fragment:ST,map_pars_fragment:ET,map_particle_fragment:TT,map_particle_pars_fragment:AT,metalnessmap_fragment:bT,metalnessmap_pars_fragment:wT,morphinstance_vertex:RT,morphcolor_vertex:CT,morphnormal_vertex:LT,morphtarget_pars_vertex:PT,morphtarget_vertex:IT,normal_fragment_begin:DT,normal_fragment_maps:NT,normal_pars_fragment:UT,normal_pars_vertex:OT,normal_vertex:FT,normalmap_pars_fragment:BT,clearcoat_normal_fragment_begin:kT,clearcoat_normal_fragment_maps:HT,clearcoat_pars_fragment:zT,iridescence_pars_fragment:VT,opaque_fragment:GT,packing:WT,premultiplied_alpha_fragment:XT,project_vertex:jT,dithering_fragment:qT,dithering_pars_fragment:KT,roughnessmap_fragment:YT,roughnessmap_pars_fragment:$T,shadowmap_pars_fragment:ZT,shadowmap_pars_vertex:JT,shadowmap_vertex:QT,shadowmask_pars_fragment:eA,skinbase_vertex:tA,skinning_pars_vertex:nA,skinning_vertex:iA,skinnormal_vertex:rA,specularmap_fragment:sA,specularmap_pars_fragment:oA,tonemapping_fragment:aA,tonemapping_pars_fragment:cA,transmission_fragment:lA,transmission_pars_fragment:uA,uv_pars_fragment:hA,uv_pars_vertex:fA,uv_vertex:dA,worldpos_vertex:pA,background_vert:mA,background_frag:gA,backgroundCube_vert:_A,backgroundCube_frag:vA,cube_vert:xA,cube_frag:yA,depth_vert:MA,depth_frag:SA,distanceRGBA_vert:EA,distanceRGBA_frag:TA,equirect_vert:AA,equirect_frag:bA,linedashed_vert:wA,linedashed_frag:RA,meshbasic_vert:CA,meshbasic_frag:LA,meshlambert_vert:PA,meshlambert_frag:IA,meshmatcap_vert:DA,meshmatcap_frag:NA,meshnormal_vert:UA,meshnormal_frag:OA,meshphong_vert:FA,meshphong_frag:BA,meshphysical_vert:kA,meshphysical_frag:HA,meshtoon_vert:zA,meshtoon_frag:VA,points_vert:GA,points_frag:WA,shadow_vert:XA,shadow_frag:jA,sprite_vert:qA,sprite_frag:KA},fe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Ti={basic:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:dn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:dn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:dn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:dn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:dn([fe.points,fe.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:dn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:dn([fe.common,fe.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:dn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:dn([fe.sprite,fe.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:dn([fe.common,fe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:dn([fe.lights,fe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ti.physical={uniforms:dn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const gc={r:0,b:0,g:0},ns=new Ui,YA=new Xe;function $A(t,e,n,i,r,s,o){const a=new Oe(0);let c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(A){let y=A.isScene===!0?A.background:null;return y&&y.isTexture&&(y=(A.backgroundBlurriness>0?n:e).get(y)),y}function v(A){let y=!1;const T=g(A);T===null?p(a,c):T&&T.isColor&&(p(T,1),y=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil)}function m(A,y){const T=g(y);T&&(T.isCubeTexture||T.mapping===Hl)?(u===void 0&&(u=new Fn(new Oa(1,1,1),new Vr({name:"BackgroundCubeMaterial",uniforms:yo(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ns.copy(y.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(YA.makeRotationFromEuler(ns)),u.material.toneMapped=ot.getTransfer(T.colorSpace)!==vt,(h!==T||f!==T.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=t.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new Fn(new Wl(2,2),new Vr({name:"BackgroundMaterial",uniforms:yo(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ot.getTransfer(T.colorSpace)!==vt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,d=t.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null))}function p(A,y){A.getRGB(gc,Dv(t)),i.buffers.color.setClear(gc.r,gc.g,gc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(A,y=1){a.set(A),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,p(a,c)},render:v,addToRenderList:m}}function ZA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,V,$,D,J){let Q=!1;const oe=h(D,$,V);s!==oe&&(s=oe,l(s.object)),Q=d(x,D,$,J),Q&&g(x,D,$,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,T(x,V,$,D),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return t.createVertexArray()}function l(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function h(x,V,$){const D=$.wireframe===!0;let J=i[x.id];J===void 0&&(J={},i[x.id]=J);let Q=J[V.id];Q===void 0&&(Q={},J[V.id]=Q);let oe=Q[D];return oe===void 0&&(oe=f(c()),Q[D]=oe),oe}function f(x){const V=[],$=[],D=[];for(let J=0;J<n;J++)V[J]=0,$[J]=0,D[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:D,object:x,attributes:{},index:null}}function d(x,V,$,D){const J=s.attributes,Q=V.attributes;let oe=0;const te=$.getAttributes();for(const z in te)if(te[z].location>=0){const le=J[z];let Me=Q[z];if(Me===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor)),le===void 0||le.attribute!==Me||Me&&le.data!==Me.data)return!0;oe++}return s.attributesNum!==oe||s.index!==D}function g(x,V,$,D){const J={},Q=V.attributes;let oe=0;const te=$.getAttributes();for(const z in te)if(te[z].location>=0){let le=Q[z];le===void 0&&(z==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),z==="instanceColor"&&x.instanceColor&&(le=x.instanceColor));const Me={};Me.attribute=le,le&&le.data&&(Me.data=le.data),J[z]=Me,oe++}s.attributes=J,s.attributesNum=oe,s.index=D}function v(){const x=s.newAttributes;for(let V=0,$=x.length;V<$;V++)x[V]=0}function m(x){p(x,0)}function p(x,V){const $=s.newAttributes,D=s.enabledAttributes,J=s.attributeDivisors;$[x]=1,D[x]===0&&(t.enableVertexAttribArray(x),D[x]=1),J[x]!==V&&(t.vertexAttribDivisor(x,V),J[x]=V)}function A(){const x=s.newAttributes,V=s.enabledAttributes;for(let $=0,D=V.length;$<D;$++)V[$]!==x[$]&&(t.disableVertexAttribArray($),V[$]=0)}function y(x,V,$,D,J,Q,oe){oe===!0?t.vertexAttribIPointer(x,V,$,J,Q):t.vertexAttribPointer(x,V,$,D,J,Q)}function T(x,V,$,D){v();const J=D.attributes,Q=$.getAttributes(),oe=V.defaultAttributeValues;for(const te in Q){const z=Q[te];if(z.location>=0){let ce=J[te];if(ce===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(ce=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(ce=x.instanceColor)),ce!==void 0){const le=ce.normalized,Me=ce.itemSize,Ce=e.get(ce);if(Ce===void 0)continue;const Ke=Ce.buffer,Y=Ce.type,ue=Ce.bytesPerElement,de=Y===t.INT||Y===t.UNSIGNED_INT||ce.gpuType===mv;if(ce.isInterleavedBufferAttribute){const he=ce.data,ke=he.stride,He=ce.offset;if(he.isInstancedInterleavedBuffer){for(let B=0;B<z.locationSize;B++)p(z.location+B,he.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let B=0;B<z.locationSize;B++)m(z.location+B);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let B=0;B<z.locationSize;B++)y(z.location+B,Me/z.locationSize,Y,le,ke*ue,(He+Me/z.locationSize*B)*ue,de)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<z.locationSize;he++)p(z.location+he,ce.meshPerAttribute);x.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<z.locationSize;he++)m(z.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let he=0;he<z.locationSize;he++)y(z.location+he,Me/z.locationSize,Y,le,Me*ue,Me/z.locationSize*he*ue,de)}}else if(oe!==void 0){const le=oe[te];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(z.location,le);break;case 3:t.vertexAttrib3fv(z.location,le);break;case 4:t.vertexAttrib4fv(z.location,le);break;default:t.vertexAttrib1fv(z.location,le)}}}}A()}function U(){G();for(const x in i){const V=i[x];for(const $ in V){const D=V[$];for(const J in D)u(D[J].object),delete D[J];delete V[$]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const V=i[x.id];for(const $ in V){const D=V[$];for(const J in D)u(D[J].object),delete D[J];delete V[$]}delete i[x.id]}function C(x){for(const V in i){const $=i[V];if($[x.id]===void 0)continue;const D=$[x.id];for(const J in D)u(D[J].object),delete D[J];delete $[x.id]}}function G(){E(),o=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:G,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function JA(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,h){h!==0&&(t.drawArraysInstanced(i,l,u,h),n.update(u,i,h))}function a(l,u,h){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<h;d++)this.render(l[d],u[d]);else{f.multiDrawArraysWEBGL(i,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];n.update(d,i,1)}}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<f.length;v++)n.update(g,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function QA(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==li&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===zl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==zr&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Ci&&!C)}function c(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=d>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:p,maxVaryings:A,maxFragmentUniforms:y,vertexTextures:T,maxSamples:U}}function eb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new os,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const A=s?0:i,y=A*4;let T=p.clippingState||null;c.value=T,T=u(g,f,y,d);for(let U=0;U!==y;++U)T[U]=n[U];p.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=d+v*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,T=d;y!==v;++y,T+=4)o.copy(h[y]).applyMatrix4(A,a),o.normal.toArray(m,T),m[T+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function tb(t){let e=new WeakMap;function n(o,a){return a===Hh?o.mapping=po:a===zh&&(o.mapping=mo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Hh||a===zh)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new fE(c.height);return l.fromEquirectangularTexture(t,o),e.set(o,l),o.addEventListener("dispose",r),n(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Td extends Nv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const qs=4,_g=[.125,.215,.35,.446,.526,.582],us=20,Hu=new Td,vg=new Oe;let zu=null,Vu=0,Gu=0,Wu=!1;const as=(1+Math.sqrt(5))/2,Vs=1/as,xg=[new O(-as,Vs,0),new O(as,Vs,0),new O(-Vs,0,as),new O(Vs,0,as),new O(0,as,-Vs),new O(0,as,Vs),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Vu,Gu),this._renderer.xr.enabled=Wu,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Vu=this._renderer.getActiveCubeFace(),Gu=this._renderer.getActiveMipmapLevel(),Wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:zl,format:li,colorSpace:Jt,depthBuffer:!1},r=Mg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nb(s)),this._blurMaterial=ib(s,e,n)}return r}_compileMaterial(e){const n=new Fn(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,i,r){const a=new mn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(vg),u.toneMapping=Dr,u.autoClear=!1;const d=new fs({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),g=new Fn(new Oa,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(vg),v=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):A===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;_c(r,A*y,p>2?y:0,y,y),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===po||e.mapping===mo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;_c(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Hu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xg[(r-s-1)%xg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Fn(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*us-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const p=[];let A=0;for(let C=0;C<us;++C){const G=C/v,E=Math.exp(-G*G/2);p.push(E),C===0?A+=E:C<m&&(A+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const T=this._sizeLods[r],U=3*T*(r>y-qs?r-y+qs:0),R=4*(this._cubeSize-T);_c(n,U,R,3*T,2*T),c.setRenderTarget(n),c.render(h,Hu)}}function nb(t){const e=[],n=[],i=[];let r=t;const s=t-qs+1+_g.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-qs?c=_g[o-t+qs-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*d),y=new Float32Array(m*g*d),T=new Float32Array(p*g*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,G=R>2?0:-1,E=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];A.set(E,v*g*R),y.set(f,m*g*R);const x=[R,R,R,R,R,R];T.set(x,p*g*R)}const U=new Hi;U.setAttribute("position",new vn(A,v)),U.setAttribute("uv",new vn(y,m)),U.setAttribute("faceIndex",new vn(T,p)),e.push(U),r>qs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Mg(t,e,n){const i=new Ss(t,e,n);return i.texture.mapping=Hl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _c(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ib(t,e,n){const i=new Float32Array(us),r=new O(0,1,0);return new Vr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Sg(){return new Vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Eg(){return new Vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ad(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Ad(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Hh||c===zh,u=c===po||c===mo;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new yg(t)),h=l?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(n===null&&(n=new yg(t)),h=l?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function sb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ob(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],t.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let v=0;if(d!==null){const A=d.array;v=d.version;for(let y=0,T=A.length;y<T;y+=3){const U=A[y+0],R=A[y+1],C=A[y+2];f.push(U,R,R,C,C,U)}}else if(g!==void 0){const A=g.array;v=g.version;for(let y=0,T=A.length/3-1;y<T;y+=3){const U=y+0,R=y+1,C=y+2;f.push(U,R,R,C,C,U)}}else return;const m=new(Av(f)?Iv:Pv)(f,1);m.version=v;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ab(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){t.drawElements(i,d,s,f*o),n.update(d,i,1)}function l(f,d,g){g!==0&&(t.drawElementsInstanced(i,d,s,f*o,g),n.update(d,i,g))}function u(f,d,g){if(g===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g;m++)this.render(f[m]/o,d[m]);else{v.multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}}function h(f,d,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A];for(let A=0;A<v.length;A++)n.update(p,i,v[A])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lb(t,e,n){const i=new WeakMap,r=new pt;function s(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){G.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),v===!0&&(T=2),m===!0&&(T=3);let U=a.attributes.position.count*T,R=1;U>e.maxTextureSize&&(R=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*R*4*h),G=new Rv(C,U,R,h);G.type=Ci,G.needsUpdate=!0;const E=T*4;for(let V=0;V<h;V++){const $=p[V],D=A[V],J=y[V],Q=U*R*4*V;for(let oe=0;oe<$.count;oe++){const te=oe*E;g===!0&&(r.fromBufferAttribute($,oe),C[Q+te+0]=r.x,C[Q+te+1]=r.y,C[Q+te+2]=r.z,C[Q+te+3]=0),v===!0&&(r.fromBufferAttribute(D,oe),C[Q+te+4]=r.x,C[Q+te+5]=r.y,C[Q+te+6]=r.z,C[Q+te+7]=0),m===!0&&(r.fromBufferAttribute(J,oe),C[Q+te+8]=r.x,C[Q+te+9]=r.y,C[Q+te+10]=r.z,C[Q+te+11]=J.itemSize===4?r.w:1)}}f={count:h,texture:G,size:new $e(U,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",v),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ub(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:o}}class Fv extends Yt{constructor(e,n,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:eo,u!==eo&&u!==Sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===eo&&(i=_o),i===void 0&&u===Sa&&(i=Ua),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:_n,this.minFilter=c!==void 0?c:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Bv=new Yt,kv=new Fv(1,1);kv.compareFunction=Tv;const Hv=new Rv,zv=new $3,Vv=new Uv,Tg=[],Ag=[],bg=new Float32Array(16),wg=new Float32Array(9),Rg=new Float32Array(4);function Io(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tg[r];if(s===void 0&&(s=new Float32Array(r),Tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Ag[e];n===void 0&&(n=new Int32Array(e),Ag[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function mb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;Rg.set(i),t.uniformMatrix2fv(this.addr,!1,Rg),Xt(n,i)}}function gb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;wg.set(i),t.uniformMatrix3fv(this.addr,!1,wg),Xt(n,i)}}function _b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;bg.set(i),t.uniformMatrix4fv(this.addr,!1,bg),Xt(n,i)}}function vb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function Mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function Sb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function Tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?kv:Bv;n.setTexture2D(e||s,r)}function wb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||zv,r)}function Rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vv,r)}function Cb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Hv,r)}function Lb(t){switch(t){case 5126:return hb;case 35664:return fb;case 35665:return db;case 35666:return pb;case 35674:return mb;case 35675:return gb;case 35676:return _b;case 5124:case 35670:return vb;case 35667:case 35671:return xb;case 35668:case 35672:return yb;case 35669:case 35673:return Mb;case 5125:return Sb;case 36294:return Eb;case 36295:return Tb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return wb;case 35680:case 36300:case 36308:case 36293:return Rb;case 36289:case 36303:case 36311:case 36292:return Cb}}function Pb(t,e){t.uniform1fv(this.addr,e)}function Ib(t,e){const n=Io(e,this.size,2);t.uniform2fv(this.addr,n)}function Db(t,e){const n=Io(e,this.size,3);t.uniform3fv(this.addr,n)}function Nb(t,e){const n=Io(e,this.size,4);t.uniform4fv(this.addr,n)}function Ub(t,e){const n=Io(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ob(t,e){const n=Io(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Fb(t,e){const n=Io(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Bb(t,e){t.uniform1iv(this.addr,e)}function kb(t,e){t.uniform2iv(this.addr,e)}function Hb(t,e){t.uniform3iv(this.addr,e)}function zb(t,e){t.uniform4iv(this.addr,e)}function Vb(t,e){t.uniform1uiv(this.addr,e)}function Gb(t,e){t.uniform2uiv(this.addr,e)}function Wb(t,e){t.uniform3uiv(this.addr,e)}function Xb(t,e){t.uniform4uiv(this.addr,e)}function jb(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Bv,s[o])}function qb(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||zv,s[o])}function Kb(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Vv,s[o])}function Yb(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Hv,s[o])}function $b(t){switch(t){case 5126:return Pb;case 35664:return Ib;case 35665:return Db;case 35666:return Nb;case 35674:return Ub;case 35675:return Ob;case 35676:return Fb;case 5124:case 35670:return Bb;case 35667:case 35671:return kb;case 35668:case 35672:return Hb;case 35669:case 35673:return zb;case 5125:return Vb;case 36294:return Gb;case 36295:return Wb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Kb;case 36289:case 36303:case 36311:case 36292:return Yb}}class Zb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Lb(n.type)}}class Jb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$b(n.type)}}class Qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function Cg(t,e){t.seq.push(e),t.map[e.id]=e}function ew(t,e,n){const i=t.name,r=i.length;for(Xu.lastIndex=0;;){const s=Xu.exec(i),o=Xu.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Cg(n,l===void 0?new Zb(a,t,e):new Jb(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Qb(a),Cg(n,h)),n=h}}}class Bc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);ew(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Lg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tw=37297;let nw=0;function iw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function rw(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===rl&&n===il?i="LinearDisplayP3ToLinearSRGB":e===il&&n===rl&&(i="LinearSRGBToLinearDisplayP3"),t){case Jt:case Vl:return[i,"LinearTransferOETF"];case pn:case Md:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Pg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iw(t.getShaderSource(e),o)}else return r}function sw(t,e){const n=rw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ow(t,e){let n;switch(e){case JS:n="Linear";break;case QS:n="Reinhard";break;case e3:n="OptimizedCineon";break;case t3:n="ACESFilmic";break;case i3:n="AgX";break;case r3:n="Neutral";break;case n3:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function Ig(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(t){return t.replace(uw,fw)}const hw=new Map;function fw(t,e){let n=Ve[e];if(n===void 0){const i=hw.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wh(n)}const dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ng(t){return t.replace(dw,pw)}function pw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ug(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===uv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===TS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function gw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case Hl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _w(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function vw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case hv:e="ENVMAP_BLENDING_MULTIPLY";break;case $S:e="ENVMAP_BLENDING_MIX";break;case ZS:e="ENVMAP_BLENDING_ADD";break}return e}function xw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=mw(n),l=gw(n),u=_w(n),h=vw(n),f=xw(n),d=aw(n),g=cw(s),v=r.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Qo).join(`
`),p.length>0&&(p+=`
`)):(m=[Ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),p=[Ug(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Dr?"#define TONE_MAPPING":"",n.toneMapping!==Dr?Ve.tonemapping_pars_fragment:"",n.toneMapping!==Dr?ow("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,sw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Wh(o),o=Ig(o,n),o=Dg(o,n),a=Wh(a),a=Ig(a,n),a=Dg(a,n),o=Ng(o),a=Ng(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=A+m+o,T=A+p+a,U=Lg(r,r.VERTEX_SHADER,y),R=Lg(r,r.FRAGMENT_SHADER,T);r.attachShader(v,U),r.attachShader(v,R),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(V){if(t.debug.checkShaderErrors){const $=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(U).trim(),J=r.getShaderInfoLog(R).trim();let Q=!0,oe=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,U,R);else{const te=Pg(r,U,"vertex"),z=Pg(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+te+`
`+z)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(D===""||J==="")&&(oe=!1);oe&&(V.diagnostics={runnable:Q,programLog:$,vertexShader:{log:D,prefix:m},fragmentShader:{log:J,prefix:p}})}r.deleteShader(U),r.deleteShader(R),G=new Bc(r,v),E=lw(r,v)}let G;this.getUniforms=function(){return G===void 0&&C(this),G};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,tw)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=R,this}let Mw=0;class Sw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ew(e),n.set(e,i)),i}}class Ew{constructor(e){this.id=Mw++,this.code=e,this.usedTimes=0}}function Tw(t,e,n,i,r,s,o){const a=new Cv,c=new Sw,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,x,V,$,D){const J=$.fog,Q=D.geometry,oe=E.isMeshStandardMaterial?$.environment:null,te=(E.isMeshStandardMaterial?n:e).get(E.envMap||oe),z=te&&te.mapping===Hl?te.image.height:null,ce=g[E.type];E.precision!==null&&(d=r.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const le=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Me=le!==void 0?le.length:0;let Ce=0;Q.morphAttributes.position!==void 0&&(Ce=1),Q.morphAttributes.normal!==void 0&&(Ce=2),Q.morphAttributes.color!==void 0&&(Ce=3);let Ke,Y,ue,de;if(ce){const lt=Ti[ce];Ke=lt.vertexShader,Y=lt.fragmentShader}else Ke=E.vertexShader,Y=E.fragmentShader,c.update(E),ue=c.getVertexShaderID(E),de=c.getFragmentShaderID(E);const he=t.getRenderTarget(),ke=D.isInstancedMesh===!0,He=D.isBatchedMesh===!0,B=!!E.map,nt=!!E.matcap,we=!!te,w=!!E.aoMap,b=!!E.lightMap,N=!!E.bumpMap,H=!!E.normalMap,W=!!E.displacementMap,ne=!!E.emissiveMap,M=!!E.metalnessMap,_=!!E.roughnessMap,L=E.anisotropy>0,P=E.clearcoat>0,k=E.dispersion>0,q=E.iridescence>0,re=E.sheen>0,Z=E.transmission>0,ie=L&&!!E.anisotropyMap,_e=P&&!!E.clearcoatMap,se=P&&!!E.clearcoatNormalMap,ge=P&&!!E.clearcoatRoughnessMap,De=q&&!!E.iridescenceMap,Re=q&&!!E.iridescenceThicknessMap,ve=re&&!!E.sheenColorMap,Ne=re&&!!E.sheenRoughnessMap,je=!!E.specularMap,Je=!!E.specularColorMap,Pe=!!E.specularIntensityMap,I=Z&&!!E.transmissionMap,ae=Z&&!!E.thicknessMap,ee=!!E.gradientMap,pe=!!E.alphaMap,xe=E.alphaTest>0,it=!!E.alphaHash,_t=!!E.extensions;let Lt=Dr;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Lt=t.toneMapping);const Qt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:Y,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:He,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Jt,alphaToCoverage:!!E.alphaToCoverage,map:B,matcap:nt,envMap:we,envMapMode:we&&te.mapping,envMapCubeUVHeight:z,aoMap:w,lightMap:b,bumpMap:N,normalMap:H,displacementMap:f&&W,emissiveMap:ne,normalMapObjectSpace:H&&E.normalMapType===x3,normalMapTangentSpace:H&&E.normalMapType===Ev,metalnessMap:M,roughnessMap:_,anisotropy:L,anisotropyMap:ie,clearcoat:P,clearcoatMap:_e,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:k,iridescence:q,iridescenceMap:De,iridescenceThicknessMap:Re,sheen:re,sheenColorMap:ve,sheenRoughnessMap:Ne,specularMap:je,specularColorMap:Je,specularIntensityMap:Pe,transmission:Z,transmissionMap:I,thicknessMap:ae,gradientMap:ee,opaque:E.transparent===!1&&E.blending===Qs&&E.alphaToCoverage===!1,alphaMap:pe,alphaTest:xe,alphaHash:it,combine:E.combine,mapUv:B&&v(E.map.channel),aoMapUv:w&&v(E.aoMap.channel),lightMapUv:b&&v(E.lightMap.channel),bumpMapUv:N&&v(E.bumpMap.channel),normalMapUv:H&&v(E.normalMap.channel),displacementMapUv:W&&v(E.displacementMap.channel),emissiveMapUv:ne&&v(E.emissiveMap.channel),metalnessMapUv:M&&v(E.metalnessMap.channel),roughnessMapUv:_&&v(E.roughnessMap.channel),anisotropyMapUv:ie&&v(E.anisotropyMap.channel),clearcoatMapUv:_e&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(E.sheenRoughnessMap.channel),specularMapUv:je&&v(E.specularMap.channel),specularColorMapUv:Je&&v(E.specularColorMap.channel),specularIntensityMapUv:Pe&&v(E.specularIntensityMap.channel),transmissionMapUv:I&&v(E.transmissionMap.channel),thicknessMapUv:ae&&v(E.thicknessMap.channel),alphaMapUv:pe&&v(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(H||L),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Q.attributes.uv&&(B||pe),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ce,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&V.length>0,shadowMapType:t.shadowMap.type,toneMapping:Lt,useLegacyLights:t._useLegacyLights,decodeVideoTexture:B&&E.map.isVideoTexture===!0&&ot.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bi,flipSided:E.side===En,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:_t&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:_t&&E.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const V in E.defines)x.push(V),x.push(E.defines[V]);return E.isRawShaderMaterial===!1&&(A(x,E),y(x,E),x.push(t.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function A(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.useLegacyLights&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.alphaToCoverage&&a.enable(20),E.push(a.mask)}function T(E){const x=g[E.type];let V;if(x){const $=Ti[x];V=cE.clone($.uniforms)}else V=E.uniforms;return V}function U(E,x){let V;for(let $=0,D=u.length;$<D;$++){const J=u[$];if(J.cacheKey===x){V=J,++V.usedTimes;break}}return V===void 0&&(V=new yw(t,x,E,s),u.push(V)),V}function R(E){if(--E.usedTimes===0){const x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function C(E){c.remove(E)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:U,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:G}}function Aw(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function bw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Og(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,d,g,v,m){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},t[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function a(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):n.push(p)}function c(h,f,d,g,v,m){const p=o(h,f,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):n.unshift(p)}function l(h,f){n.length>1&&n.sort(h||bw),i.length>1&&i.sort(f||Og),r.length>1&&r.sort(f||Og)}function u(){for(let h=e,f=t.length;h<f;h++){const d=t[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ww(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Fg,t.set(i,[o])):r>=s.length?(o=new Fg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Rw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Oe};break;case"SpotLight":n={position:new O,direction:new O,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":n={color:new Oe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function Cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Lw=0;function Pw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Iw(t){const e=new Rw,n=Cw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new Xe,o=new Xe;function a(l,u){let h=0,f=0,d=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,v=0,m=0,p=0,A=0,y=0,T=0,U=0,R=0,C=0,G=0;l.sort(Pw);const E=u===!0?Math.PI:1;for(let V=0,$=l.length;V<$;V++){const D=l[V],J=D.color,Q=D.intensity,oe=D.distance,te=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=J.r*Q*E,f+=J.g*Q*E,d+=J.b*Q*E;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],Q);G++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*E),D.castShadow){const ce=D.shadow,le=n.get(D);le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize=ce.mapSize,i.directionalShadow[g]=le,i.directionalShadowMap[g]=te,i.directionalShadowMatrix[g]=D.shadow.matrix,y++}i.directional[g]=z,g++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(J).multiplyScalar(Q*E),z.distance=oe,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[m]=z;const ce=D.shadow;if(D.map&&(i.spotLightMap[R]=D.map,R++,ce.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[m]=ce.matrix,D.castShadow){const le=n.get(D);le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize=ce.mapSize,i.spotShadow[m]=le,i.spotShadowMap[m]=te,U++}m++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(J).multiplyScalar(Q),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=z,p++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*E),z.distance=D.distance,z.decay=D.decay,D.castShadow){const ce=D.shadow,le=n.get(D);le.shadowBias=ce.bias,le.shadowNormalBias=ce.normalBias,le.shadowRadius=ce.radius,le.shadowMapSize=ce.mapSize,le.shadowCameraNear=ce.camera.near,le.shadowCameraFar=ce.camera.far,i.pointShadow[v]=le,i.pointShadowMap[v]=te,i.pointShadowMatrix[v]=D.shadow.matrix,T++}i.point[v]=z,v++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(Q*E),z.groundColor.copy(D.groundColor).multiplyScalar(Q*E),i.hemi[A]=z,A++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const x=i.hash;(x.directionalLength!==g||x.pointLength!==v||x.spotLength!==m||x.rectAreaLength!==p||x.hemiLength!==A||x.numDirectionalShadows!==y||x.numPointShadows!==T||x.numSpotShadows!==U||x.numSpotMaps!==R||x.numLightProbes!==G)&&(i.directional.length=g,i.spot.length=m,i.rectArea.length=p,i.point.length=v,i.hemi.length=A,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=U,i.spotShadowMap.length=U,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=U+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=G,x.directionalLength=g,x.pointLength=v,x.spotLength=m,x.rectAreaLength=p,x.hemiLength=A,x.numDirectionalShadows=y,x.numPointShadows=T,x.numSpotShadows=U,x.numSpotMaps=R,x.numLightProbes=G,i.version=Lw++)}function c(l,u){let h=0,f=0,d=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=l.length;p<A;p++){const y=l[p];if(y.isDirectionalLight){const T=i.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),h++}else if(y.isSpotLight){const T=i.spot[d];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const T=i.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const T=i.hemi[v];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function Bg(t){const e=new Iw(t),n=[],i=[];function r(u){l.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(u){e.setup(n,u)}function c(u){e.setupView(n,u)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Dw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bg(t),e.set(r,[a])):s>=o.length?(a=new Bg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Nw extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uw extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Bw(t,e,n){let i=new Ed;const r=new $e,s=new $e,o=new pt,a=new Nw({depthPacking:v3}),c=new Uw,l={},u=n.maxTextureSize,h={[ar]:En,[En]:ar,[bi]:bi},f=new Vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:Ow,fragmentShader:Fw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Hi;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Fn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uv;let p=this.type;this.render=function(R,C,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=t.getRenderTarget(),x=t.getActiveCubeFace(),V=t.getActiveMipmapLevel(),$=t.state;$.setBlending(Ir),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const D=p!==$i&&this.type===$i,J=p===$i&&this.type!==$i;for(let Q=0,oe=R.length;Q<oe;Q++){const te=R[Q],z=te.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ce=z.getFrameExtents();if(r.multiply(ce),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ce.x),r.x=s.x*ce.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ce.y),r.y=s.y*ce.y,z.mapSize.y=s.y)),z.map===null||D===!0||J===!0){const Me=this.type!==$i?{minFilter:_n,magFilter:_n}:{};z.map!==null&&z.map.dispose(),z.map=new Ss(r.x,r.y,Me),z.map.texture.name=te.name+".shadowMap",z.camera.updateProjectionMatrix()}t.setRenderTarget(z.map),t.clear();const le=z.getViewportCount();for(let Me=0;Me<le;Me++){const Ce=z.getViewport(Me);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),$.viewport(o),z.updateMatrices(te,Me),i=z.getFrustum(),T(C,G,z.camera,te,this.type)}z.isPointLightShadow!==!0&&this.type===$i&&A(z,G),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(E,x,V)};function A(R,C){const G=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ss(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,G,f,v,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,G,d,v,null)}function y(R,C,G,E){let x=null;const V=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(V!==void 0)x=V;else if(x=G.isPointLight===!0?c:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=x.uuid,D=C.uuid;let J=l[$];J===void 0&&(J={},l[$]=J);let Q=J[D];Q===void 0&&(Q=x.clone(),J[D]=Q,C.addEventListener("dispose",U)),x=Q}if(x.visible=C.visible,x.wireframe=C.wireframe,E===$i?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,G.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const $=t.properties.get(x);$.light=G}return x}function T(R,C,G,E,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===$i)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);const D=e.update(R),J=R.material;if(Array.isArray(J)){const Q=D.groups;for(let oe=0,te=Q.length;oe<te;oe++){const z=Q[oe],ce=J[z.materialIndex];if(ce&&ce.visible){const le=y(R,ce,E,x);R.onBeforeShadow(t,R,C,G,D,le,z),t.renderBufferDirect(G,null,D,le,R,z),R.onAfterShadow(t,R,C,G,D,le,z)}}}else if(J.visible){const Q=y(R,J,E,x);R.onBeforeShadow(t,R,C,G,D,Q,null),t.renderBufferDirect(G,null,D,Q,R,null),R.onAfterShadow(t,R,C,G,D,Q,null)}}const $=R.children;for(let D=0,J=$.length;D<J;D++)T($[D],C,G,E,x)}function U(R){R.target.removeEventListener("dispose",U);for(const G in l){const E=l[G],x=R.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}function kw(t){function e(){let I=!1;const ae=new pt;let ee=null;const pe=new pt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){I=xe},setClear:function(xe,it,_t,Lt,Qt){Qt===!0&&(xe*=Lt,it*=Lt,_t*=Lt),ae.set(xe,it,_t,Lt),pe.equals(ae)===!1&&(t.clearColor(xe,it,_t,Lt),pe.copy(ae))},reset:function(){I=!1,ee=null,pe.set(-1,0,0,0)}}}function n(){let I=!1,ae=null,ee=null,pe=null;return{setTest:function(xe){xe?de(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(xe){ae!==xe&&!I&&(t.depthMask(xe),ae=xe)},setFunc:function(xe){if(ee!==xe){switch(xe){case GS:t.depthFunc(t.NEVER);break;case WS:t.depthFunc(t.ALWAYS);break;case XS:t.depthFunc(t.LESS);break;case el:t.depthFunc(t.LEQUAL);break;case jS:t.depthFunc(t.EQUAL);break;case qS:t.depthFunc(t.GEQUAL);break;case KS:t.depthFunc(t.GREATER);break;case YS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=xe}},setLocked:function(xe){I=xe},setClear:function(xe){pe!==xe&&(t.clearDepth(xe),pe=xe)},reset:function(){I=!1,ae=null,ee=null,pe=null}}}function i(){let I=!1,ae=null,ee=null,pe=null,xe=null,it=null,_t=null,Lt=null,Qt=null;return{setTest:function(lt){I||(lt?de(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(lt){ae!==lt&&!I&&(t.stencilMask(lt),ae=lt)},setFunc:function(lt,gi,un){(ee!==lt||pe!==gi||xe!==un)&&(t.stencilFunc(lt,gi,un),ee=lt,pe=gi,xe=un)},setOp:function(lt,gi,un){(it!==lt||_t!==gi||Lt!==un)&&(t.stencilOp(lt,gi,un),it=lt,_t=gi,Lt=un)},setLocked:function(lt){I=lt},setClear:function(lt){Qt!==lt&&(t.clearStencil(lt),Qt=lt)},reset:function(){I=!1,ae=null,ee=null,pe=null,xe=null,it=null,_t=null,Lt=null,Qt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,A=null,y=null,T=null,U=null,R=new Oe(0,0,0),C=0,G=!1,E=null,x=null,V=null,$=null,D=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(te)[1]),Q=oe>=1):te.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),Q=oe>=2);let z=null,ce={};const le=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Ce=new pt().fromArray(le),Ke=new pt().fromArray(Me);function Y(I,ae,ee,pe){const xe=new Uint8Array(4),it=t.createTexture();t.bindTexture(I,it),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let _t=0;_t<ee;_t++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ae+_t,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return it}const ue={};ue[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ue[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ue[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(el),N(!1),H(mm),de(t.CULL_FACE),w(Ir);function de(I){l[I]!==!0&&(t.enable(I),l[I]=!0)}function he(I){l[I]!==!1&&(t.disable(I),l[I]=!1)}function ke(I,ae){return u[I]!==ae?(t.bindFramebuffer(I,ae),u[I]=ae,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ae),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function He(I,ae){let ee=f,pe=!1;if(I){ee=h.get(ae),ee===void 0&&(ee=[],h.set(ae,ee));const xe=I.textures;if(ee.length!==xe.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let it=0,_t=xe.length;it<_t;it++)ee[it]=t.COLOR_ATTACHMENT0+it;ee.length=xe.length,pe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,pe=!0);pe&&t.drawBuffers(ee)}function B(I){return d!==I?(t.useProgram(I),d=I,!0):!1}const nt={[ls]:t.FUNC_ADD,[bS]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};nt[RS]=t.MIN,nt[CS]=t.MAX;const we={[LS]:t.ZERO,[PS]:t.ONE,[IS]:t.SRC_COLOR,[Bh]:t.SRC_ALPHA,[BS]:t.SRC_ALPHA_SATURATE,[OS]:t.DST_COLOR,[NS]:t.DST_ALPHA,[DS]:t.ONE_MINUS_SRC_COLOR,[kh]:t.ONE_MINUS_SRC_ALPHA,[FS]:t.ONE_MINUS_DST_COLOR,[US]:t.ONE_MINUS_DST_ALPHA,[kS]:t.CONSTANT_COLOR,[HS]:t.ONE_MINUS_CONSTANT_COLOR,[zS]:t.CONSTANT_ALPHA,[VS]:t.ONE_MINUS_CONSTANT_ALPHA};function w(I,ae,ee,pe,xe,it,_t,Lt,Qt,lt){if(I===Ir){g===!0&&(he(t.BLEND),g=!1);return}if(g===!1&&(de(t.BLEND),g=!0),I!==AS){if(I!==v||lt!==G){if((m!==ls||y!==ls)&&(t.blendEquation(t.FUNC_ADD),m=ls,y=ls),lt)switch(I){case Qs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.ONE,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Qs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _m:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}p=null,A=null,T=null,U=null,R.set(0,0,0),C=0,v=I,G=lt}return}xe=xe||ae,it=it||ee,_t=_t||pe,(ae!==m||xe!==y)&&(t.blendEquationSeparate(nt[ae],nt[xe]),m=ae,y=xe),(ee!==p||pe!==A||it!==T||_t!==U)&&(t.blendFuncSeparate(we[ee],we[pe],we[it],we[_t]),p=ee,A=pe,T=it,U=_t),(Lt.equals(R)===!1||Qt!==C)&&(t.blendColor(Lt.r,Lt.g,Lt.b,Qt),R.copy(Lt),C=Qt),v=I,G=!1}function b(I,ae){I.side===bi?he(t.CULL_FACE):de(t.CULL_FACE);let ee=I.side===En;ae&&(ee=!ee),N(ee),I.blending===Qs&&I.transparent===!1?w(Ir):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const pe=I.stencilWrite;o.setTest(pe),pe&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ne(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function N(I){E!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),E=I)}function H(I){I!==SS?(de(t.CULL_FACE),I!==x&&(I===mm?t.cullFace(t.BACK):I===ES?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),x=I}function W(I){I!==V&&(Q&&t.lineWidth(I),V=I)}function ne(I,ae,ee){I?(de(t.POLYGON_OFFSET_FILL),($!==ae||D!==ee)&&(t.polygonOffset(ae,ee),$=ae,D=ee)):he(t.POLYGON_OFFSET_FILL)}function M(I){I?de(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function _(I){I===void 0&&(I=t.TEXTURE0+J-1),z!==I&&(t.activeTexture(I),z=I)}function L(I,ae,ee){ee===void 0&&(z===null?ee=t.TEXTURE0+J-1:ee=z);let pe=ce[ee];pe===void 0&&(pe={type:void 0,texture:void 0},ce[ee]=pe),(pe.type!==I||pe.texture!==ae)&&(z!==ee&&(t.activeTexture(ee),z=ee),t.bindTexture(I,ae||ue[I]),pe.type=I,pe.texture=ae)}function P(){const I=ce[z];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function k(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(I){Ce.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ce.copy(I))}function Ne(I){Ke.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ke.copy(I))}function je(I,ae){let ee=c.get(ae);ee===void 0&&(ee=new WeakMap,c.set(ae,ee));let pe=ee.get(I);pe===void 0&&(pe=t.getUniformBlockIndex(ae,I.name),ee.set(I,pe))}function Je(I,ae){const pe=c.get(ae).get(I);a.get(ae)!==pe&&(t.uniformBlockBinding(ae,pe,I.__bindingPointIndex),a.set(ae,pe))}function Pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),l={},z=null,ce={},u={},h=new WeakMap,f=[],d=null,g=!1,v=null,m=null,p=null,A=null,y=null,T=null,U=null,R=new Oe(0,0,0),C=0,G=!1,E=null,x=null,V=null,$=null,D=null,Ce.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:he,bindFramebuffer:ke,drawBuffers:He,useProgram:B,setBlending:w,setMaterial:b,setFlipSided:N,setCullFace:H,setLineWidth:W,setPolygonOffset:ne,setScissorTest:M,activeTexture:_,bindTexture:L,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:q,texImage2D:De,texImage3D:Re,updateUBOMapping:je,uniformBlockBinding:Je,texStorage2D:se,texStorage3D:ge,texSubImage2D:re,texSubImage3D:Z,compressedTexSubImage2D:ie,compressedTexSubImage3D:_e,scissor:ve,viewport:Ne,reset:Pe}}function Hw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return d?new OffscreenCanvas(M,_):Ta("canvas")}function v(M,_,L){let P=1;const k=ne(M);if((k.width>L||k.height>L)&&(P=L/Math.max(k.width,k.height)),P<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const q=Math.floor(P*k.width),re=Math.floor(P*k.height);h===void 0&&(h=g(q,re));const Z=_?g(q,re):h;return Z.width=q,Z.height=re,Z.getContext("2d").drawImage(M,0,0,q,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+q+"x"+re+")."),Z}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==_n&&M.minFilter!==On}function p(M){t.generateMipmap(M)}function A(M,_,L,P,k=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let q=_;if(_===t.RED&&(L===t.FLOAT&&(q=t.R32F),L===t.HALF_FLOAT&&(q=t.R16F),L===t.UNSIGNED_BYTE&&(q=t.R8)),_===t.RED_INTEGER&&(L===t.UNSIGNED_BYTE&&(q=t.R8UI),L===t.UNSIGNED_SHORT&&(q=t.R16UI),L===t.UNSIGNED_INT&&(q=t.R32UI),L===t.BYTE&&(q=t.R8I),L===t.SHORT&&(q=t.R16I),L===t.INT&&(q=t.R32I)),_===t.RG&&(L===t.FLOAT&&(q=t.RG32F),L===t.HALF_FLOAT&&(q=t.RG16F),L===t.UNSIGNED_BYTE&&(q=t.RG8)),_===t.RG_INTEGER&&(L===t.UNSIGNED_BYTE&&(q=t.RG8UI),L===t.UNSIGNED_SHORT&&(q=t.RG16UI),L===t.UNSIGNED_INT&&(q=t.RG32UI),L===t.BYTE&&(q=t.RG8I),L===t.SHORT&&(q=t.RG16I),L===t.INT&&(q=t.RG32I)),_===t.RGB&&L===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),_===t.RGBA){const re=k?nl:ot.getTransfer(P);L===t.FLOAT&&(q=t.RGBA32F),L===t.HALF_FLOAT&&(q=t.RGBA16F),L===t.UNSIGNED_BYTE&&(q=re===vt?t.SRGB8_ALPHA8:t.RGBA8),L===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),L===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(M,_){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==_n&&M.minFilter!==On?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function T(M){const _=M.target;_.removeEventListener("dispose",T),R(_),_.isVideoTexture&&u.delete(_)}function U(M){const _=M.target;_.removeEventListener("dispose",U),G(_)}function R(M){const _=i.get(M);if(_.__webglInit===void 0)return;const L=M.source,P=f.get(L);if(P){const k=P[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&C(M),Object.keys(P).length===0&&f.delete(L)}i.remove(M)}function C(M){const _=i.get(M);t.deleteTexture(_.__webglTexture);const L=M.source,P=f.get(L);delete P[_.__cacheKey],o.memory.textures--}function G(M){const _=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(_.__webglFramebuffer[P]))for(let k=0;k<_.__webglFramebuffer[P].length;k++)t.deleteFramebuffer(_.__webglFramebuffer[P][k]);else t.deleteFramebuffer(_.__webglFramebuffer[P]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[P])}else{if(Array.isArray(_.__webglFramebuffer))for(let P=0;P<_.__webglFramebuffer.length;P++)t.deleteFramebuffer(_.__webglFramebuffer[P]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let P=0;P<_.__webglColorRenderbuffer.length;P++)_.__webglColorRenderbuffer[P]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[P]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=M.textures;for(let P=0,k=L.length;P<k;P++){const q=i.get(L[P]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),o.memory.textures--),i.remove(L[P])}i.remove(M)}let E=0;function x(){E=0}function V(){const M=E;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),E+=1,M}function $(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function D(M,_){const L=i.get(M);if(M.isVideoTexture&&H(M),M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){const P=M.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(L,M,_);return}}n.bindTexture(t.TEXTURE_2D,L.__webglTexture,t.TEXTURE0+_)}function J(M,_){const L=i.get(M);if(M.version>0&&L.__version!==M.version){Ce(L,M,_);return}n.bindTexture(t.TEXTURE_2D_ARRAY,L.__webglTexture,t.TEXTURE0+_)}function Q(M,_){const L=i.get(M);if(M.version>0&&L.__version!==M.version){Ce(L,M,_);return}n.bindTexture(t.TEXTURE_3D,L.__webglTexture,t.TEXTURE0+_)}function oe(M,_){const L=i.get(M);if(M.version>0&&L.__version!==M.version){Ke(L,M,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+_)}const te={[go]:t.REPEAT,[br]:t.CLAMP_TO_EDGE,[tl]:t.MIRRORED_REPEAT},z={[_n]:t.NEAREST,[dv]:t.NEAREST_MIPMAP_NEAREST,[Jo]:t.NEAREST_MIPMAP_LINEAR,[On]:t.LINEAR,[Fc]:t.LINEAR_MIPMAP_NEAREST,[Qi]:t.LINEAR_MIPMAP_LINEAR},ce={[y3]:t.NEVER,[b3]:t.ALWAYS,[M3]:t.LESS,[Tv]:t.LEQUAL,[S3]:t.EQUAL,[A3]:t.GEQUAL,[E3]:t.GREATER,[T3]:t.NOTEQUAL};function le(M,_){if(_.type===Ci&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===On||_.magFilter===Fc||_.magFilter===Jo||_.magFilter===Qi||_.minFilter===On||_.minFilter===Fc||_.minFilter===Jo||_.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,te[_.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,te[_.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,te[_.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,z[_.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,z[_.minFilter]),_.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===_n||_.minFilter!==Jo&&_.minFilter!==Qi||_.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Me(M,_){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",T));const P=_.source;let k=f.get(P);k===void 0&&(k={},f.set(P,k));const q=$(_);if(q!==M.__cacheKey){k[q]===void 0&&(k[q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,L=!0),k[q].usedTimes++;const re=k[M.__cacheKey];re!==void 0&&(k[M.__cacheKey].usedTimes--,re.usedTimes===0&&C(_)),M.__cacheKey=q,M.__webglTexture=k[q].texture}return L}function Ce(M,_,L){let P=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(P=t.TEXTURE_3D);const k=Me(M,_),q=_.source;n.bindTexture(P,M.__webglTexture,t.TEXTURE0+L);const re=i.get(q);if(q.version!==re.__version||k===!0){n.activeTexture(t.TEXTURE0+L);const Z=ot.getPrimaries(ot.workingColorSpace),ie=_.colorSpace===Ar?null:ot.getPrimaries(_.colorSpace),_e=_.colorSpace===Ar||Z===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);let se=v(_.image,!1,r.maxTextureSize);se=W(_,se);const ge=s.convert(_.format,_.colorSpace),De=s.convert(_.type);let Re=A(_.internalFormat,ge,De,_.colorSpace,_.isVideoTexture);le(P,_);let ve;const Ne=_.mipmaps,je=_.isVideoTexture!==!0,Je=re.__version===void 0||k===!0,Pe=q.dataReady,I=y(_,se);if(_.isDepthTexture)Re=t.DEPTH_COMPONENT16,_.type===Ci?Re=t.DEPTH_COMPONENT32F:_.type===_o?Re=t.DEPTH_COMPONENT24:_.type===Ua&&(Re=t.DEPTH24_STENCIL8),Je&&(je?n.texStorage2D(t.TEXTURE_2D,1,Re,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,ge,De,null));else if(_.isDataTexture)if(Ne.length>0){je&&Je&&n.texStorage2D(t.TEXTURE_2D,I,Re,Ne[0].width,Ne[0].height);for(let ae=0,ee=Ne.length;ae<ee;ae++)ve=Ne[ae],je?Pe&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,ge,De,ve.data):n.texImage2D(t.TEXTURE_2D,ae,Re,ve.width,ve.height,0,ge,De,ve.data);_.generateMipmaps=!1}else je?(Je&&n.texStorage2D(t.TEXTURE_2D,I,Re,se.width,se.height),Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,ge,De,se.data)):n.texImage2D(t.TEXTURE_2D,0,Re,se.width,se.height,0,ge,De,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){je&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,I,Re,Ne[0].width,Ne[0].height,se.depth);for(let ae=0,ee=Ne.length;ae<ee;ae++)ve=Ne[ae],_.format!==li?ge!==null?je?Pe&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,se.depth,ge,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Re,ve.width,ve.height,se.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,ve.width,ve.height,se.depth,ge,De,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Re,ve.width,ve.height,se.depth,0,ge,De,ve.data)}else{je&&Je&&n.texStorage2D(t.TEXTURE_2D,I,Re,Ne[0].width,Ne[0].height);for(let ae=0,ee=Ne.length;ae<ee;ae++)ve=Ne[ae],_.format!==li?ge!==null?je?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):je?Pe&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ve.width,ve.height,ge,De,ve.data):n.texImage2D(t.TEXTURE_2D,ae,Re,ve.width,ve.height,0,ge,De,ve.data)}else if(_.isDataArrayTexture)je?(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,I,Re,se.width,se.height,se.depth),Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,De,se.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,se.width,se.height,se.depth,0,ge,De,se.data);else if(_.isData3DTexture)je?(Je&&n.texStorage3D(t.TEXTURE_3D,I,Re,se.width,se.height,se.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,De,se.data)):n.texImage3D(t.TEXTURE_3D,0,Re,se.width,se.height,se.depth,0,ge,De,se.data);else if(_.isFramebufferTexture){if(Je)if(je)n.texStorage2D(t.TEXTURE_2D,I,Re,se.width,se.height);else{let ae=se.width,ee=se.height;for(let pe=0;pe<I;pe++)n.texImage2D(t.TEXTURE_2D,pe,Re,ae,ee,0,ge,De,null),ae>>=1,ee>>=1}}else if(Ne.length>0){if(je&&Je){const ae=ne(Ne[0]);n.texStorage2D(t.TEXTURE_2D,I,Re,ae.width,ae.height)}for(let ae=0,ee=Ne.length;ae<ee;ae++)ve=Ne[ae],je?Pe&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ge,De,ve):n.texImage2D(t.TEXTURE_2D,ae,Re,ge,De,ve);_.generateMipmaps=!1}else if(je){if(Je){const ae=ne(se);n.texStorage2D(t.TEXTURE_2D,I,Re,ae.width,ae.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,De,se)}else n.texImage2D(t.TEXTURE_2D,0,Re,ge,De,se);m(_)&&p(P),re.__version=q.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Ke(M,_,L){if(_.image.length!==6)return;const P=Me(M,_),k=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+L);const q=i.get(k);if(k.version!==q.__version||P===!0){n.activeTexture(t.TEXTURE0+L);const re=ot.getPrimaries(ot.workingColorSpace),Z=_.colorSpace===Ar?null:ot.getPrimaries(_.colorSpace),ie=_.colorSpace===Ar||re===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ee=0;ee<6;ee++)!_e&&!se?ge[ee]=v(_.image[ee],!0,r.maxCubemapSize):ge[ee]=se?_.image[ee].image:_.image[ee],ge[ee]=W(_,ge[ee]);const De=ge[0],Re=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),Ne=A(_.internalFormat,Re,ve,_.colorSpace),je=_.isVideoTexture!==!0,Je=q.__version===void 0||P===!0,Pe=k.dataReady;let I=y(_,De);le(t.TEXTURE_CUBE_MAP,_);let ae;if(_e){je&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,I,Ne,De.width,De.height);for(let ee=0;ee<6;ee++){ae=ge[ee].mipmaps;for(let pe=0;pe<ae.length;pe++){const xe=ae[pe];_.format!==li?Re!==null?je?Pe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,xe.width,xe.height,Re,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ne,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):je?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,0,0,xe.width,xe.height,Re,ve,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe,Ne,xe.width,xe.height,0,Re,ve,xe.data)}}}else{if(ae=_.mipmaps,je&&Je){ae.length>0&&I++;const ee=ne(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,I,Ne,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){je?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ge[ee].width,ge[ee].height,Re,ve,ge[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,ge[ee].width,ge[ee].height,0,Re,ve,ge[ee].data);for(let pe=0;pe<ae.length;pe++){const it=ae[pe].image[ee].image;je?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,it.width,it.height,Re,ve,it.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ne,it.width,it.height,0,Re,ve,it.data)}}else{je?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,ve,ge[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ne,Re,ve,ge[ee]);for(let pe=0;pe<ae.length;pe++){const xe=ae[pe];je?Pe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,0,0,Re,ve,xe.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,pe+1,Ne,Re,ve,xe.image[ee])}}}m(_)&&p(t.TEXTURE_CUBE_MAP),q.__version=k.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function Y(M,_,L,P,k,q){const re=s.convert(L.format,L.colorSpace),Z=s.convert(L.type),ie=A(L.internalFormat,re,Z,L.colorSpace);if(!i.get(_).__hasExternalTextures){const se=Math.max(1,_.width>>q),ge=Math.max(1,_.height>>q);k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?n.texImage3D(k,q,ie,se,ge,_.depth,0,re,Z,null):n.texImage2D(k,q,ie,se,ge,0,re,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),N(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,k,i.get(L).__webglTexture,0,b(_)):(k===t.TEXTURE_2D||k>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,k,i.get(L).__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(M,_,L){if(t.bindRenderbuffer(t.RENDERBUFFER,M),_.depthBuffer&&!_.stencilBuffer){let P=t.DEPTH_COMPONENT24;if(L||N(_)){const k=_.depthTexture;k&&k.isDepthTexture&&(k.type===Ci?P=t.DEPTH_COMPONENT32F:k.type===_o&&(P=t.DEPTH_COMPONENT24));const q=b(_);N(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,P,_.width,_.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,q,P,_.width,_.height)}else t.renderbufferStorage(t.RENDERBUFFER,P,_.width,_.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(_.depthBuffer&&_.stencilBuffer){const P=b(_);L&&N(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,P,t.DEPTH24_STENCIL8,_.width,_.height):N(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P,t.DEPTH24_STENCIL8,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const P=_.textures;for(let k=0;k<P.length;k++){const q=P[k],re=s.convert(q.format,q.colorSpace),Z=s.convert(q.type),ie=A(q.internalFormat,re,Z,q.colorSpace),_e=b(_);L&&N(_)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ie,_.width,_.height):N(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,ie,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ie,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(M,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),D(_.depthTexture,0);const P=i.get(_.depthTexture).__webglTexture,k=b(_);if(_.depthTexture.format===eo)N(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0);else if(_.depthTexture.format===Sa)N(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0,k):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function he(M){const _=i.get(M),L=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");de(_.__webglFramebuffer,M)}else if(L){_.__webglDepthbuffer=[];for(let P=0;P<6;P++)n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[P]),_.__webglDepthbuffer[P]=t.createRenderbuffer(),ue(_.__webglDepthbuffer[P],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=t.createRenderbuffer(),ue(_.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(M,_,L){const P=i.get(M);_!==void 0&&Y(P.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),L!==void 0&&he(M)}function He(M){const _=M.texture,L=i.get(M),P=i.get(_);M.addEventListener("dispose",U);const k=M.textures,q=M.isWebGLCubeRenderTarget===!0,re=k.length>1;if(re||(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=_.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[Z]=[];for(let ie=0;ie<_.mipmaps.length;ie++)L.__webglFramebuffer[Z][ie]=t.createFramebuffer()}else L.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)L.__webglFramebuffer[Z]=t.createFramebuffer()}else L.__webglFramebuffer=t.createFramebuffer();if(re)for(let Z=0,ie=k.length;Z<ie;Z++){const _e=i.get(k[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&N(M)===!1){L.__webglMultisampledFramebuffer=t.createFramebuffer(),L.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let Z=0;Z<k.length;Z++){const ie=k[Z];L.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,L.__webglColorRenderbuffer[Z]);const _e=s.convert(ie.format,ie.colorSpace),se=s.convert(ie.type),ge=A(ie.internalFormat,_e,se,ie.colorSpace,M.isXRRenderTarget===!0),De=b(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ge,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,L.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(L.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),le(t.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Y(L.__webglFramebuffer[Z][ie],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie);else Y(L.__webglFramebuffer[Z],M,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(_)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(re){for(let Z=0,ie=k.length;Z<ie;Z++){const _e=k[Z],se=i.get(_e);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),le(t.TEXTURE_2D,_e),Y(L.__webglFramebuffer,M,_e,t.COLOR_ATTACHMENT0+Z,t.TEXTURE_2D,0),m(_e)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Z=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,P.__webglTexture),le(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)Y(L.__webglFramebuffer[ie],M,_,t.COLOR_ATTACHMENT0,Z,ie);else Y(L.__webglFramebuffer,M,_,t.COLOR_ATTACHMENT0,Z,0);m(_)&&p(Z),n.unbindTexture()}M.depthBuffer&&he(M)}function B(M){const _=M.textures;for(let L=0,P=_.length;L<P;L++){const k=_[L];if(m(k)){const q=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,re=i.get(k).__webglTexture;n.bindTexture(q,re),p(q),n.unbindTexture()}}}const nt=[],we=[];function w(M){if(M.samples>0){if(N(M)===!1){const _=M.textures,L=M.width,P=M.height;let k=t.COLOR_BUFFER_BIT;const q=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=i.get(M),Z=_.length>1;if(Z)for(let ie=0;ie<_.length;ie++)n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ie=0;ie<_.length;ie++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(k|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(k|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,re.__webglColorRenderbuffer[ie]);const _e=i.get(_[ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,_e,0)}t.blitFramebuffer(0,0,L,P,0,0,L,P,k,t.NEAREST),c===!0&&(nt.length=0,we.length=0,nt.push(t.COLOR_ATTACHMENT0+ie),M.depthBuffer&&M.resolveDepthBuffer===!1&&(nt.push(q),we.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,we)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ie=0;ie<_.length;ie++){n.bindFramebuffer(t.FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,re.__webglColorRenderbuffer[ie]);const _e=i.get(_[ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,_e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function b(M){return Math.min(r.maxSamples,M.samples)}function N(M){const _=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function H(M){const _=o.render.frame;u.get(M)!==_&&(u.set(M,_),M.update())}function W(M,_){const L=M.colorSpace,P=M.format,k=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Jt&&L!==Ar&&(ot.getTransfer(L)===vt?(P!==li||k!==zr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),_}function ne(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=x,this.setTexture2D=D,this.setTexture2DArray=J,this.setTexture3D=Q,this.setTextureCube=oe,this.rebindTextures=ke,this.setupRenderTarget=He,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=w,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=N}function zw(t,e){function n(i,r=Ar){let s;const o=ot.getTransfer(r);if(i===zr)return t.UNSIGNED_BYTE;if(i===gv)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_v)return t.UNSIGNED_SHORT_5_5_5_1;if(i===c3)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===o3)return t.BYTE;if(i===a3)return t.SHORT;if(i===pv)return t.UNSIGNED_SHORT;if(i===mv)return t.INT;if(i===_o)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===zl)return t.HALF_FLOAT;if(i===l3)return t.ALPHA;if(i===u3)return t.RGB;if(i===li)return t.RGBA;if(i===h3)return t.LUMINANCE;if(i===f3)return t.LUMINANCE_ALPHA;if(i===eo)return t.DEPTH_COMPONENT;if(i===Sa)return t.DEPTH_STENCIL;if(i===vv)return t.RED;if(i===xv)return t.RED_INTEGER;if(i===d3)return t.RG;if(i===yv)return t.RG_INTEGER;if(i===Mv)return t.RGBA_INTEGER;if(i===gu||i===_u||i===vu||i===xu)if(o===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===gu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===gu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_u)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ym||i===Mm||i===Sm||i===Em)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ym)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Em)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tm||i===Am||i===bm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tm||i===Am)return o===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===wm||i===Rm||i===Cm||i===Lm||i===Pm||i===Im||i===Dm||i===Nm||i===Um||i===Om||i===Fm||i===Bm||i===km||i===Hm)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Lm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Im)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Um)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Om)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===km)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hm)return o===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yu||i===zm||i===Vm)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===yu)return o===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zm)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vm)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===p3||i===Gm||i===Wm||i===Xm)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gm)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wm)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xm)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ua?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Vw extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gw={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gw)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ww=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new Vr({vertexShader:Ww,fragmentShader:Xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Fn(new Wl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class qw extends Po{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const v=new jw,m=n.getContextAttributes();let p=null,A=null;const y=[],T=[],U=new $e;let R=null;const C=new mn;C.layers.enable(1),C.viewport=new pt;const G=new mn;G.layers.enable(2),G.viewport=new pt;const E=[C,G],x=new Vw;x.layers.enable(1),x.layers.enable(2);let V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ue=y[Y];return ue===void 0&&(ue=new ju,y[Y]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Y){let ue=y[Y];return ue===void 0&&(ue=new ju,y[Y]=ue),ue.getGripSpace()},this.getHand=function(Y){let ue=y[Y];return ue===void 0&&(ue=new ju,y[Y]=ue),ue.getHandSpace()};function D(Y){const ue=T.indexOf(Y.inputSource);if(ue===-1)return;const de=y[ue];de!==void 0&&(de.update(Y.inputSource,Y.frame,l||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<y.length;Y++){const ue=T[Y];ue!==null&&(T[Y]=null,y[Y].disconnect(ue))}V=null,$=null,v.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,A=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0){const ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Ss(d.framebufferWidth,d.framebufferHeight,{format:li,type:zr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,de=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=m.stencil?Sa:eo,de=m.stencil?Ua:_o);const ke={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(ke),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Ss(f.textureWidth,f.textureHeight,{format:li,type:zr,depthTexture:new Fv(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(Y){for(let ue=0;ue<Y.removed.length;ue++){const de=Y.removed[ue],he=T.indexOf(de);he>=0&&(T[he]=null,y[he].disconnect(de))}for(let ue=0;ue<Y.added.length;ue++){const de=Y.added[ue];let he=T.indexOf(de);if(he===-1){for(let He=0;He<y.length;He++)if(He>=T.length){T.push(de),he=He;break}else if(T[He]===null){T[He]=de,he=He;break}if(he===-1)break}const ke=y[he];ke&&ke.connect(de)}}const oe=new O,te=new O;function z(Y,ue,de){oe.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(de.matrixWorld);const he=oe.distanceTo(te),ke=ue.projectionMatrix.elements,He=de.projectionMatrix.elements,B=ke[14]/(ke[10]-1),nt=ke[14]/(ke[10]+1),we=(ke[9]+1)/ke[5],w=(ke[9]-1)/ke[5],b=(ke[8]-1)/ke[0],N=(He[8]+1)/He[0],H=B*b,W=B*N,ne=he/(-b+N),M=ne*-b;ue.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(M),Y.translateZ(ne),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const _=B+ne,L=nt+ne,P=H-M,k=W+(he-M),q=we*nt/L*_,re=w*nt/L*_;Y.projectionMatrix.makePerspective(P,k,q,re,_,L),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function ce(Y,ue){ue===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ue.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),x.near=G.near=C.near=Y.near,x.far=G.far=C.far=Y.far,(V!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),V=x.near,$=x.far,C.near=V,C.far=$,G.near=V,G.far=$,C.updateProjectionMatrix(),G.updateProjectionMatrix(),Y.updateProjectionMatrix());const ue=Y.parent,de=x.cameras;ce(x,ue);for(let he=0;he<de.length;he++)ce(de[he],ue);de.length===2?z(x,C,G):x.projectionMatrix.copy(C.projectionMatrix),le(Y,x,ue)};function le(Y,ue,de){de===null?Y.matrix.copy(ue.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ue.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ue.projectionMatrix),Y.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null};let Me=null;function Ce(Y,ue){if(u=ue.getViewerPose(l||o),g=ue,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let he=!1;de.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let He=0;He<de.length;He++){const B=de[He];let nt=null;if(d!==null)nt=d.getViewport(B);else{const w=h.getViewSubImage(f,B);nt=w.viewport,He===0&&(e.setRenderTargetTextures(A,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(A))}let we=E[He];we===void 0&&(we=new mn,we.layers.enable(He),we.viewport=new pt,E[He]=we),we.matrix.fromArray(B.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(B.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(nt.x,nt.y,nt.width,nt.height),He===0&&(x.matrix.copy(we.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(we)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const He=h.getDepthInformation(de[0]);He&&He.isValid&&He.texture&&v.init(e,He,r.renderState)}}for(let de=0;de<y.length;de++){const he=T[de],ke=y[de];he!==null&&ke!==void 0&&ke.update(he,ue,l||o)}v.render(e,x),Me&&Me(Y,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const Ke=new Ov;Ke.setAnimationLoop(Ce),this.setAnimationLoop=function(Y){Me=Y},this.dispose=function(){}}}const is=new Ui,Kw=new Xe;function Yw(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dv(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,y,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,T)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,A,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),y=A.envMap,T=A.envMapRotation;if(y&&(m.envMap.value=y,is.copy(T),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(Kw.makeRotationFromEuler(is)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const U=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*U,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,A,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $w(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,y){const T=y.program;i.uniformBlockBinding(A,T)}function l(A,y){let T=r[A.id];T===void 0&&(g(A),T=u(A),r[A.id]=T,A.addEventListener("dispose",m));const U=y.program;i.updateUBOMapping(A,U);const R=e.render.frame;s[A.id]!==R&&(f(A),s[A.id]=R)}function u(A){const y=h();A.__bindingPointIndex=y;const T=t.createBuffer(),U=A.__size,R=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,U,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,T),T}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const y=r[A.id],T=A.uniforms,U=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let R=0,C=T.length;R<C;R++){const G=Array.isArray(T[R])?T[R]:[T[R]];for(let E=0,x=G.length;E<x;E++){const V=G[E];if(d(V,R,E,U)===!0){const $=V.__offset,D=Array.isArray(V.value)?V.value:[V.value];let J=0;for(let Q=0;Q<D.length;Q++){const oe=D[Q],te=v(oe);typeof oe=="number"||typeof oe=="boolean"?(V.__data[0]=oe,t.bufferSubData(t.UNIFORM_BUFFER,$+J,V.__data)):oe.isMatrix3?(V.__data[0]=oe.elements[0],V.__data[1]=oe.elements[1],V.__data[2]=oe.elements[2],V.__data[3]=0,V.__data[4]=oe.elements[3],V.__data[5]=oe.elements[4],V.__data[6]=oe.elements[5],V.__data[7]=0,V.__data[8]=oe.elements[6],V.__data[9]=oe.elements[7],V.__data[10]=oe.elements[8],V.__data[11]=0):(oe.toArray(V.__data,J),J+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,V.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function d(A,y,T,U){const R=A.value,C=y+"_"+T;if(U[C]===void 0)return typeof R=="number"||typeof R=="boolean"?U[C]=R:U[C]=R.clone(),!0;{const G=U[C];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return U[C]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function g(A){const y=A.uniforms;let T=0;const U=16;for(let C=0,G=y.length;C<G;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,V=E.length;x<V;x++){const $=E[x],D=Array.isArray($.value)?$.value:[$.value];for(let J=0,Q=D.length;J<Q;J++){const oe=D[J],te=v(oe),z=T%U;z!==0&&U-z<te.boundary&&(T+=U-z),$.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=T,T+=te.storage}}}const R=T%U;return R>0&&(T+=U-R),A.__size=T,A.__cache={},this}function v(A){const y={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(y.boundary=4,y.storage=4):A.isVector2?(y.boundary=8,y.storage=8):A.isVector3||A.isColor?(y.boundary=16,y.storage=12):A.isVector4?(y.boundary=16,y.storage=16):A.isMatrix3?(y.boundary=48,y.storage=48):A.isMatrix4?(y.boundary=64,y.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),y}function m(A){const y=A.target;y.removeEventListener("dispose",m);const T=o.indexOf(y.__bindingPointIndex);o.splice(T,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}class Zw{constructor(e={}){const{canvas:n=W3(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this._useLegacyLights=!1,this.toneMapping=Dr,this.toneMappingExposure=1;const y=this;let T=!1,U=0,R=0,C=null,G=-1,E=null;const x=new pt,V=new pt;let $=null;const D=new Oe(0);let J=0,Q=n.width,oe=n.height,te=1,z=null,ce=null;const le=new pt(0,0,Q,oe),Me=new pt(0,0,Q,oe);let Ce=!1;const Ke=new Ed;let Y=!1,ue=!1;const de=new Xe,he=new O,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function He(){return C===null?te:1}let B=i;function nt(S,F){return n.getContext(S,F)}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yd}`),n.addEventListener("webglcontextlost",I,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",ee,!1),B===null){const F="webgl2";if(B=nt(F,S),B===null)throw nt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let we,w,b,N,H,W,ne,M,_,L,P,k,q,re,Z,ie,_e,se,ge,De,Re,ve,Ne,je;function Je(){we=new sb(B),we.init(),ve=new zw(B,we),w=new QA(B,we,e,ve),b=new kw(B),N=new cb(B),H=new Aw,W=new Hw(B,we,b,H,w,ve,N),ne=new tb(y),M=new rb(y),_=new mE(B),Ne=new ZA(B,_),L=new ob(B,_,N,Ne),P=new ub(B,L,_,N),ge=new lb(B,w,W),ie=new eb(H),k=new Tw(y,ne,M,we,w,Ne,ie),q=new Yw(y,H),re=new ww,Z=new Dw(we),se=new $A(y,ne,M,b,P,f,c),_e=new Bw(y,P,w),je=new $w(B,N,w,b),De=new JA(B,we,N),Re=new ab(B,we,N),N.programs=k.programs,y.capabilities=w,y.extensions=we,y.properties=H,y.renderLists=re,y.shadowMap=_e,y.state=b,y.info=N}Je();const Pe=new qw(y,B);this.xr=Pe,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const S=we.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=we.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(Q,oe,!1))},this.getSize=function(S){return S.set(Q,oe)},this.setSize=function(S,F,K=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=S,oe=F,n.width=Math.floor(S*te),n.height=Math.floor(F*te),K===!0&&(n.style.width=S+"px",n.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Q*te,oe*te).floor()},this.setDrawingBufferSize=function(S,F,K){Q=S,oe=F,te=K,n.width=Math.floor(S*K),n.height=Math.floor(F*K),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,F,K,X){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,F,K,X),b.viewport(x.copy(le).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(Me)},this.setScissor=function(S,F,K,X){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,F,K,X),b.scissor(V.copy(Me).multiplyScalar(te).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(S){b.setScissorTest(Ce=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){ce=S},this.getClearColor=function(S){return S.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(S=!0,F=!0,K=!0){let X=0;if(S){let j=!1;if(C!==null){const me=C.texture.format;j=me===Mv||me===yv||me===xv}if(j){const me=C.texture.type,Te=me===zr||me===_o||me===pv||me===Ua||me===gv||me===_v,be=se.getClearColor(),Ie=se.getClearAlpha(),Fe=be.r,ze=be.g,qe=be.b;Te?(d[0]=Fe,d[1]=ze,d[2]=qe,d[3]=Ie,B.clearBufferuiv(B.COLOR,0,d)):(g[0]=Fe,g[1]=ze,g[2]=qe,g[3]=Ie,B.clearBufferiv(B.COLOR,0,g))}else X|=B.COLOR_BUFFER_BIT}F&&(X|=B.DEPTH_BUFFER_BIT),K&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",I,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),re.dispose(),Z.dispose(),H.dispose(),ne.dispose(),M.dispose(),P.dispose(),Ne.dispose(),je.dispose(),k.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",lt),Pe.removeEventListener("sessionend",gi),un.stop()};function I(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const S=N.autoReset,F=_e.enabled,K=_e.autoUpdate,X=_e.needsUpdate,j=_e.type;Je(),N.autoReset=S,_e.enabled=F,_e.autoUpdate=K,_e.needsUpdate=X,_e.type=j}function ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function pe(S){const F=S.target;F.removeEventListener("dispose",pe),xe(F)}function xe(S){it(S),H.remove(S)}function it(S){const F=H.get(S).programs;F!==void 0&&(F.forEach(function(K){k.releaseProgram(K)}),S.isShaderMaterial&&k.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,K,X,j,me){F===null&&(F=ke);const Te=j.isMesh&&j.matrixWorld.determinant()<0,be=ex(S,F,K,X,j);b.setMaterial(X,Te);let Ie=K.index,Fe=1;if(X.wireframe===!0){if(Ie=L.getWireframeAttribute(K),Ie===void 0)return;Fe=2}const ze=K.drawRange,qe=K.attributes.position;let Ft=ze.start*Fe,en=(ze.start+ze.count)*Fe;me!==null&&(Ft=Math.max(Ft,me.start*Fe),en=Math.min(en,(me.start+me.count)*Fe)),Ie!==null?(Ft=Math.max(Ft,0),en=Math.min(en,Ie.count)):qe!=null&&(Ft=Math.max(Ft,0),en=Math.min(en,qe.count));const Cn=en-Ft;if(Cn<0||Cn===1/0)return;Ne.setup(j,X,be,K,Ie);let Gi,st=De;if(Ie!==null&&(Gi=_.get(Ie),st=Re,st.setIndex(Gi)),j.isMesh)X.wireframe===!0?(b.setLineWidth(X.wireframeLinewidth*He()),st.setMode(B.LINES)):st.setMode(B.TRIANGLES);else if(j.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),b.setLineWidth(Be*He()),j.isLineSegments?st.setMode(B.LINES):j.isLineLoop?st.setMode(B.LINE_LOOP):st.setMode(B.LINE_STRIP)}else j.isPoints?st.setMode(B.POINTS):j.isSprite&&st.setMode(B.TRIANGLES);if(j.isBatchedMesh)j._multiDrawInstances!==null?st.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances):st.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)st.renderInstances(Ft,Cn,j.count);else if(K.isInstancedBufferGeometry){const Be=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Oo=Math.min(K.instanceCount,Be);st.renderInstances(Ft,Cn,Oo)}else st.render(Ft,Cn)};function _t(S,F,K){S.transparent===!0&&S.side===bi&&S.forceSinglePass===!1?(S.side=En,S.needsUpdate=!0,ka(S,F,K),S.side=ar,S.needsUpdate=!0,ka(S,F,K),S.side=bi):ka(S,F,K)}this.compile=function(S,F,K=null){K===null&&(K=S),m=Z.get(K),m.init(F),A.push(m),K.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),S!==K&&S.traverseVisible(function(j){j.isLight&&j.layers.test(F.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(y._useLegacyLights);const X=new Set;return S.traverse(function(j){const me=j.material;if(me)if(Array.isArray(me))for(let Te=0;Te<me.length;Te++){const be=me[Te];_t(be,K,j),X.add(be)}else _t(me,K,j),X.add(me)}),A.pop(),m=null,X},this.compileAsync=function(S,F,K=null){const X=this.compile(S,F,K);return new Promise(j=>{function me(){if(X.forEach(function(Te){H.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){j(S);return}setTimeout(me,10)}we.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Lt=null;function Qt(S){Lt&&Lt(S)}function lt(){un.stop()}function gi(){un.start()}const un=new Ov;un.setAnimationLoop(Qt),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(S){Lt=S,Pe.setAnimationLoop(S),S===null?un.stop():un.start()},Pe.addEventListener("sessionstart",lt),Pe.addEventListener("sessionend",gi),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(F),F=Pe.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,F,C),m=Z.get(S,A.length),m.init(F),A.push(m),de.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ke.setFromProjectionMatrix(de),ue=this.localClippingEnabled,Y=ie.init(this.clippingPlanes,ue),v=re.get(S,p.length),v.init(),p.push(v),Dd(S,F,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(z,ce);const K=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1;K&&se.addToRenderList(v,S),this.info.render.frame++,Y===!0&&ie.beginShadows();const X=m.state.shadowsArray;_e.render(X,S,F),Y===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,me=v.transmissive;if(m.setupLights(y._useLegacyLights),F.isArrayCamera){const Te=F.cameras;if(me.length>0)for(let be=0,Ie=Te.length;be<Ie;be++){const Fe=Te[be];Ud(j,me,S,Fe)}K&&se.render(S);for(let be=0,Ie=Te.length;be<Ie;be++){const Fe=Te[be];Nd(v,S,Fe,Fe.viewport)}}else me.length>0&&Ud(j,me,S,F),K&&se.render(S),Nd(v,S,F);C!==null&&(W.updateMultisampleRenderTarget(C),W.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(y,S,F),Ne.resetDefaultState(),G=-1,E=null,A.pop(),A.length>0?(m=A[A.length-1],Y===!0&&ie.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Dd(S,F,K,X){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ke.intersectsSprite(S)){X&&he.setFromMatrixPosition(S.matrixWorld).applyMatrix4(de);const Te=P.update(S),be=S.material;be.visible&&v.push(S,Te,be,K,he.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ke.intersectsObject(S))){const Te=P.update(S),be=S.material;if(X&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),he.copy(S.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),he.copy(Te.boundingSphere.center)),he.applyMatrix4(S.matrixWorld).applyMatrix4(de)),Array.isArray(be)){const Ie=Te.groups;for(let Fe=0,ze=Ie.length;Fe<ze;Fe++){const qe=Ie[Fe],Ft=be[qe.materialIndex];Ft&&Ft.visible&&v.push(S,Te,Ft,K,he.z,qe)}}else be.visible&&v.push(S,Te,be,K,he.z,null)}}const me=S.children;for(let Te=0,be=me.length;Te<be;Te++)Dd(me[Te],F,K,X)}function Nd(S,F,K,X){const j=S.opaque,me=S.transmissive,Te=S.transparent;m.setupLightsView(K),Y===!0&&ie.setGlobalState(y.clippingPlanes,K),X&&b.viewport(x.copy(X)),j.length>0&&Ba(j,F,K),me.length>0&&Ba(me,F,K),Te.length>0&&Ba(Te,F,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Ud(S,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Ss(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")||we.has("EXT_color_buffer_float")?zl:zr,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const me=m.state.transmissionRenderTarget[X.id],Te=X.viewport||x;me.setSize(Te.z,Te.w);const be=y.getRenderTarget();y.setRenderTarget(me),y.getClearColor(D),J=y.getClearAlpha(),J<1&&y.setClearColor(16777215,.5),y.clear();const Ie=y.toneMapping;y.toneMapping=Dr;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),Y===!0&&ie.setGlobalState(y.clippingPlanes,X),Ba(S,K,X),W.updateMultisampleRenderTarget(me),W.updateRenderTargetMipmap(me),we.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let qe=0,Ft=F.length;qe<Ft;qe++){const en=F[qe],Cn=en.object,Gi=en.geometry,st=en.material,Be=en.group;if(st.side===bi&&Cn.layers.test(X.layers)){const Oo=st.side;st.side=En,st.needsUpdate=!0,Od(Cn,K,X,Gi,st,Be),st.side=Oo,st.needsUpdate=!0,ze=!0}}ze===!0&&(W.updateMultisampleRenderTarget(me),W.updateRenderTargetMipmap(me))}y.setRenderTarget(be),y.setClearColor(D,J),Fe!==void 0&&(X.viewport=Fe),y.toneMapping=Ie}function Ba(S,F,K){const X=F.isScene===!0?F.overrideMaterial:null;for(let j=0,me=S.length;j<me;j++){const Te=S[j],be=Te.object,Ie=Te.geometry,Fe=X===null?Te.material:X,ze=Te.group;be.layers.test(K.layers)&&Od(be,F,K,Ie,Fe,ze)}}function Od(S,F,K,X,j,me){S.onBeforeRender(y,F,K,X,j,me),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(y,F,K,X,S,me),j.transparent===!0&&j.side===bi&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,y.renderBufferDirect(K,F,X,j,S,me),j.side=ar,j.needsUpdate=!0,y.renderBufferDirect(K,F,X,j,S,me),j.side=bi):y.renderBufferDirect(K,F,X,j,S,me),S.onAfterRender(y,F,K,X,j,me)}function ka(S,F,K){F.isScene!==!0&&(F=ke);const X=H.get(S),j=m.state.lights,me=m.state.shadowsArray,Te=j.state.version,be=k.getParameters(S,j.state,me,F,K),Ie=k.getProgramCacheKey(be);let Fe=X.programs;X.environment=S.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(S.isMeshStandardMaterial?M:ne).get(S.envMap||X.environment),X.envMapRotation=X.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Fe===void 0&&(S.addEventListener("dispose",pe),Fe=new Map,X.programs=Fe);let ze=Fe.get(Ie);if(ze!==void 0){if(X.currentProgram===ze&&X.lightsStateVersion===Te)return Bd(S,be),ze}else be.uniforms=k.getUniforms(S),S.onBuild(K,be,y),S.onBeforeCompile(be,y),ze=k.acquireProgram(be,Ie),Fe.set(Ie,ze),X.uniforms=be.uniforms;const qe=X.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(qe.clippingPlanes=ie.uniform),Bd(S,be),X.needsLights=nx(S),X.lightsStateVersion=Te,X.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMap.value=j.state.directionalShadowMap,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotShadowMap.value=j.state.spotShadowMap,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMap.value=j.state.pointShadowMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=ze,X.uniformsList=null,ze}function Fd(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=Bc.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Bd(S,F){const K=H.get(S);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function ex(S,F,K,X,j){F.isScene!==!0&&(F=ke),W.resetTextureUnits();const me=F.fog,Te=X.isMeshStandardMaterial?F.environment:null,be=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Jt,Ie=(X.isMeshStandardMaterial?M:ne).get(X.envMap||Te),Fe=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),qe=!!K.morphAttributes.position,Ft=!!K.morphAttributes.normal,en=!!K.morphAttributes.color;let Cn=Dr;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Cn=y.toneMapping);const Gi=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,st=Gi!==void 0?Gi.length:0,Be=H.get(X),Oo=m.state.lights;if(Y===!0&&(ue===!0||S!==E)){const Vn=S===E&&X.id===G;ie.setState(X,S,Vn)}let St=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Oo.state.version||Be.outputColorSpace!==be||j.isBatchedMesh&&Be.batching===!1||!j.isBatchedMesh&&Be.batching===!0||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||j.isInstancedMesh&&Be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Be.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Be.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Be.instancingMorph===!1&&j.morphTexture!==null||Be.envMap!==Ie||X.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ie.numPlanes||Be.numIntersection!==ie.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==ze||Be.morphTargets!==qe||Be.morphNormals!==Ft||Be.morphColors!==en||Be.toneMapping!==Cn||Be.morphTargetsCount!==st)&&(St=!0):(St=!0,Be.__version=X.version);let Kr=Be.currentProgram;St===!0&&(Kr=ka(X,F,j));let kd=!1,Fo=!1,ql=!1;const tn=Kr.getUniforms(),ur=Be.uniforms;if(b.useProgram(Kr.program)&&(kd=!0,Fo=!0,ql=!0),X.id!==G&&(G=X.id,Fo=!0),kd||E!==S){tn.setValue(B,"projectionMatrix",S.projectionMatrix),tn.setValue(B,"viewMatrix",S.matrixWorldInverse);const Vn=tn.map.cameraPosition;Vn!==void 0&&Vn.setValue(B,he.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&tn.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&tn.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Fo=!0,ql=!0)}if(j.isSkinnedMesh){tn.setOptional(B,j,"bindMatrix"),tn.setOptional(B,j,"bindMatrixInverse");const Vn=j.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),tn.setValue(B,"boneTexture",Vn.boneTexture,W))}j.isBatchedMesh&&(tn.setOptional(B,j,"batchingTexture"),tn.setValue(B,"batchingTexture",j._matricesTexture,W));const Kl=K.morphAttributes;if((Kl.position!==void 0||Kl.normal!==void 0||Kl.color!==void 0)&&ge.update(j,K,Kr),(Fo||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,tn.setValue(B,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ur.envMap.value=Ie,ur.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(ur.envMapIntensity.value=F.environmentIntensity),Fo&&(tn.setValue(B,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&tx(ur,ql),me&&X.fog===!0&&q.refreshFogUniforms(ur,me),q.refreshMaterialUniforms(ur,X,te,oe,m.state.transmissionRenderTarget[S.id]),Bc.upload(B,Fd(Be),ur,W)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Bc.upload(B,Fd(Be),ur,W),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&tn.setValue(B,"center",j.center),tn.setValue(B,"modelViewMatrix",j.modelViewMatrix),tn.setValue(B,"normalMatrix",j.normalMatrix),tn.setValue(B,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vn=X.uniformsGroups;for(let Yl=0,ix=Vn.length;Yl<ix;Yl++){const Hd=Vn[Yl];je.update(Hd,Kr),je.bind(Hd,Kr)}}return Kr}function tx(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function nx(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,F,K){H.get(S.texture).__webglTexture=F,H.get(S.depthTexture).__webglTexture=K;const X=H.get(S);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=K===void 0,X.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const K=H.get(S);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,K=0){C=S,U=F,R=K;let X=!0,j=null,me=!1,Te=!1;if(S){const Ie=H.get(S);Ie.__useDefaultFramebuffer!==void 0?(b.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Ie.__webglFramebuffer===void 0?W.setupRenderTarget(S):Ie.__hasExternalTextures&&W.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);const Fe=S.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Te=!0);const ze=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?j=ze[F][K]:j=ze[F],me=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?j=H.get(S).__webglMultisampledFramebuffer:Array.isArray(ze)?j=ze[K]:j=ze,x.copy(S.viewport),V.copy(S.scissor),$=S.scissorTest}else x.copy(le).multiplyScalar(te).floor(),V.copy(Me).multiplyScalar(te).floor(),$=Ce;if(b.bindFramebuffer(B.FRAMEBUFFER,j)&&X&&b.drawBuffers(S,j),b.viewport(x),b.scissor(V),b.setScissorTest($),me){const Ie=H.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ie.__webglTexture,K)}else if(Te){const Ie=H.get(S.texture),Fe=F||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ie.__webglTexture,K||0,Fe)}G=-1},this.readRenderTargetPixels=function(S,F,K,X,j,me,Te){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be){b.bindFramebuffer(B.FRAMEBUFFER,be);try{const Ie=S.texture,Fe=Ie.format,ze=Ie.type;if(!w.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!w.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-X&&K>=0&&K<=S.height-j&&B.readPixels(F,K,X,j,ve.convert(Fe),ve.convert(ze),me)}finally{const Ie=C!==null?H.get(C).__webglFramebuffer:null;b.bindFramebuffer(B.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(S,F,K=0){const X=Math.pow(2,-K),j=Math.floor(F.image.width*X),me=Math.floor(F.image.height*X);W.setTexture2D(F,0),B.copyTexSubImage2D(B.TEXTURE_2D,K,0,0,S.x,S.y,j,me),b.unbindTexture()},this.copyTextureToTexture=function(S,F,K,X=0){const j=F.image.width,me=F.image.height,Te=ve.convert(K.format),be=ve.convert(K.type);W.setTexture2D(K,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment),F.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,S.x,S.y,j,me,Te,be,F.image.data):F.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Te,F.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,S.x,S.y,Te,be,F.image),X===0&&K.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),b.unbindTexture()},this.copyTextureToTexture3D=function(S,F,K,X,j=0){const me=S.max.x-S.min.x,Te=S.max.y-S.min.y,be=S.max.z-S.min.z,Ie=ve.convert(X.format),Fe=ve.convert(X.type);let ze;if(X.isData3DTexture)W.setTexture3D(X,0),ze=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)W.setTexture2DArray(X,0),ze=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const qe=B.getParameter(B.UNPACK_ROW_LENGTH),Ft=B.getParameter(B.UNPACK_IMAGE_HEIGHT),en=B.getParameter(B.UNPACK_SKIP_PIXELS),Cn=B.getParameter(B.UNPACK_SKIP_ROWS),Gi=B.getParameter(B.UNPACK_SKIP_IMAGES),st=K.isCompressedTexture?K.mipmaps[j]:K.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,st.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,st.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,S.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,S.min.z),K.isDataTexture||K.isData3DTexture?B.texSubImage3D(ze,j,F.x,F.y,F.z,me,Te,be,Ie,Fe,st.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,j,F.x,F.y,F.z,me,Te,be,Ie,st.data):B.texSubImage3D(ze,j,F.x,F.y,F.z,me,Te,be,Ie,Fe,st),B.pixelStorei(B.UNPACK_ROW_LENGTH,qe),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft),B.pixelStorei(B.UNPACK_SKIP_PIXELS,en),B.pixelStorei(B.UNPACK_SKIP_ROWS,Cn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Gi),j===0&&X.generateMipmaps&&B.generateMipmap(ze),b.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),b.unbindTexture()},this.resetState=function(){U=0,R=0,C=null,b.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Md?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===Vl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Jw extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qw{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Gh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return bv("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const hn=new O;class bd{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=oi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=oi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=oi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=oi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=oi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ut(n,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const kg=new O,Hg=new pt,zg=new pt,e4=new O,Vg=new Xe,vc=new O,qu=new ki,Gg=new Xe,Ku=new Gl;class t4 extends Fn{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xm,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new lr),this.boundingBox.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,vc),this.boundingBox.expandByPoint(vc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ki),this.boundingSphere.makeEmpty();const n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,vc),this.boundingSphere.expandByPoint(vc)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qu.copy(this.boundingSphere),qu.applyMatrix4(r),e.ray.intersectsSphere(qu)!==!1&&(Gg.copy(r).invert(),Ku.copy(e.ray).applyMatrix4(Gg),!(this.boundingBox!==null&&Ku.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Ku)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){e.fromBufferAttribute(n,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===s3?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){const i=this.skeleton,r=this.geometry;Hg.fromBufferAttribute(r.attributes.skinIndex,e),zg.fromBufferAttribute(r.attributes.skinWeight,e),kg.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let s=0;s<4;s++){const o=zg.getComponent(s);if(o!==0){const a=Hg.getComponent(s);Vg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),n.addScaledVector(e4.copy(kg).applyMatrix4(Vg),o)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Gv extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wv extends Yt{constructor(e=null,n=1,i=1,r,s,o,a,c,l=_n,u=_n,h,f){super(null,o,a,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wg=new Xe,n4=new Xe;class wd{constructor(e=[],n=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:n4;Wg.multiplyMatrices(a,n[s]),Wg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new wd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const n=new Float32Array(e*e*4);n.set(this.boneMatrices);const i=new Wv(n,e,e,li,Ci);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=n[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Gv),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,s=n.length;r<s;r++){const o=n[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Xh extends vn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new Xe,Xg=new Xe,xc=[],jg=new lr,i4=new Xe,Wo=new Fn,Xo=new ki;class r4 extends Fn{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Xh(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,i4)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new lr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Gs),jg.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(jg)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ki),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Gs),Xo.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(Xo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xo.copy(this.boundingSphere),Xo.applyMatrix4(i),e.ray.intersectsSphere(Xo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gs),Xg.multiplyMatrices(i,Gs),Wo.matrixWorld=Xg,Wo.raycast(e,xc);for(let o=0,a=xc.length;o<a;o++){const c=xc[o];c.instanceId=s,c.object=this,n.push(c)}xc.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Xh(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Wv(new Float32Array(r*this.count),r,this.count,vv,Ci));const s=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xv extends Li{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ol=new O,al=new O,qg=new Xe,jo=new Gl,yc=new ki,Yu=new O,Kg=new O;class Rd extends Ct{constructor(e=new Hi,n=new Xv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)ol.fromBufferAttribute(n,r-1),al.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=ol.distanceTo(al);e.setAttribute("lineDistance",new sr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;qg.copy(r).invert(),jo.copy(e.ray).applyMatrix4(qg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=u.getX(v),A=u.getX(v+1),y=Mc(this,e,jo,c,p,A);y&&n.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(d),p=Mc(this,e,jo,c,v,m);p&&n.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=d,m=g-1;v<m;v+=l){const p=Mc(this,e,jo,c,v,v+1);p&&n.push(p)}if(this.isLineLoop){const v=Mc(this,e,jo,c,g-1,d);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Mc(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(ol.fromBufferAttribute(o,r),al.fromBufferAttribute(o,s),n.distanceSqToSegment(ol,al,Yu,Kg)>i)return;Yu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Yu);if(!(c<e.near||c>e.far))return{distance:c,point:Kg.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Yg=new O,$g=new O;class s4 extends Rd{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Yg.fromBufferAttribute(n,r),$g.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Yg.distanceTo($g);e.setAttribute("lineDistance",new sr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class o4 extends Rd{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}}class jv extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zg=new Xe,jh=new Gl,Sc=new ki,Ec=new O;class a4 extends Ct{constructor(e=new Hi,n=new jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(r),Sc.radius+=s,e.ray.intersectsSphere(Sc)===!1)return;Zg.copy(r).invert(),jh.copy(e.ray).applyMatrix4(Zg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,h=i.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,v=d;g<v;g++){const m=l.getX(g);Ec.fromBufferAttribute(h,m),Jg(Ec,m,c,r,e,n,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,v=d;g<v;g++)Ec.fromBufferAttribute(h,g),Jg(Ec,g,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Jg(t,e,n,i,r,s,o){const a=jh.distanceSqToPoint(t);if(a<n){const c=new O;jh.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class Cd extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ev,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zi extends Cd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new $e(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Tc(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function c4(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function l4(t){function e(r,s){return t[r]-t[s]}const n=t.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(e),i}function Qg(t,e,n){const i=t.length,r=new t.constructor(i);for(let s=0,o=0;o!==i;++s){const a=n[s]*e;for(let c=0;c!==e;++c)r[o++]=t[a+c]}return r}function qv(t,e,n,i){let r=1,s=t[0];for(;s!==void 0&&s[i]===void 0;)s=t[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),n.push.apply(n,o)),s=t[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(n,n.length)),s=t[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),n.push(o)),s=t[r++];while(s!==void 0)}class Fa{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){const a=n[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class u4 extends Fa{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jm,endingEnd:jm}}intervalChanged_(e,n,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case qm:s=e,a=2*n-i;break;case Km:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case qm:o=e,c=2*i-n;break;case Km:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=n}const l=(i-n)*.5,u=this.valueSize;this._weightPrev=l/(n-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-n)/(r-n),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,A=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*v+.5*g,T=d*m-d*v;for(let U=0;U!==a;++U)s[U]=p*o[u+U]+A*o[l+U]+y*o[c+U]+T*o[h+U];return s}}class h4 extends Fa{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-n)/(r-n),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}}class f4 extends Fa{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Vi{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tc(n,this.TimeBufferType),this.values=Tc(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const n=e.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Tc(e.times,Array),values:Tc(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new f4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new h4(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new u4(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Ea:n=this.InterpolantFactoryMethodDiscrete;break;case vo:n=this.InterpolantFactoryMethodLinear;break;case Mu:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ea;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return Mu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&c4(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Mu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const v=n[h+g];if(v!==n[f+g]||v!==n[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)n[f+d]=n[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)n[c+l]=n[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){const e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}}Vi.prototype.TimeBufferType=Float32Array;Vi.prototype.ValueBufferType=Float32Array;Vi.prototype.DefaultInterpolation=vo;class Do extends Vi{}Do.prototype.ValueTypeName="bool";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Ea;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class Kv extends Vi{}Kv.prototype.ValueTypeName="color";class Mo extends Vi{}Mo.prototype.ValueTypeName="number";class d4 extends Fa{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-n)/(r-n);let l=e*a;for(let u=l+a;l!==u;l+=4)qr.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Es extends Vi{InterpolantFactoryMethodLinear(e){return new d4(this.times,this.values,this.getValueSize(),e)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.DefaultInterpolation=vo;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class No extends Vi{}No.prototype.ValueTypeName="string";No.prototype.ValueBufferType=Array;No.prototype.DefaultInterpolation=Ea;No.prototype.InterpolantFactoryMethodLinear=void 0;No.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends Vi{}So.prototype.ValueTypeName="vector";class p4{constructor(e="",n=-1,i=[],r=m3){this.name=e,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=hi(),this.duration<0&&this.resetDuration()}static parse(e){const n=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)n.push(g4(i[o]).scale(r));const s=new this(e.name,e.duration,n,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const n=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)n.push(Vi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,n,i,r){const s=n.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=l4(c);c=Qg(c,1,u),l=Qg(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new Mo(".morphTargetInfluences["+n[a].name+"]",c,l).scale(1/i))}return new this(e,-1,o)}static findByName(e,n){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,n,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],n,i));return o}static parseAnimation(e,n){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,v){if(d.length!==0){const m=[],p=[];qv(d,m,p,g),m.length!==0&&v.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)d[f[g].morphTargets[v]]=-1;for(const v in d){const m=[],p=[];for(let A=0;A!==f[g].morphTargets.length;++A){const y=f[g];m.push(y.time),p.push(y.morphTarget===v?1:0)}r.push(new Mo(".morphTargetInfluence["+v+"]",m,p))}c=d.length*o}else{const d=".bones["+n[h].name+"]";i(So,d+".position",f,"pos",r),i(Es,d+".quaternion",f,"rot",r),i(So,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let n=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];n=Math.max(n,s.times[s.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function m4(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return Kv;case"quaternion":return Es;case"bool":case"boolean":return Do;case"string":return No}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function g4(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=m4(t.type);if(t.times===void 0){const n=[],i=[];qv(t.keys,n,i,"value"),t.times=n,t.values=i}return e.parse!==void 0?e.parse(t):new e(t.name,t.times,t.values,t.interpolation)}const wr={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _4{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const v4=new _4;class Uo{constructor(e){this.manager=e!==void 0?e:v4,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yi={};class x4 extends Error{constructor(e,n){super(e),this.response=n}}class Yv extends Uo{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Yi[e]!==void 0){Yi[e].push({onLoad:n,onProgress:i,onError:r});return}Yi[e]=[],Yi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Yi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let v=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:y,value:T})=>{if(y)p.close();else{v+=T.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:d});for(let R=0,C=u.length;R<C;R++){const G=u[R];G.onProgress&&G.onProgress(U)}p.enqueue(T),A()}})}}});return new Response(m)}else throw new x4(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{wr.add(e,l);const u=Yi[e];delete Yi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Yi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Yi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class y4 extends Uo{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Ta("img");function c(){u(),wr.add(e,this),n&&n(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class M4 extends Uo{constructor(e){super(e)}load(e,n,i,r){const s=new Yt,o=new y4(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class jl extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const $u=new Xe,e_=new O,t_=new O;class Ld{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ed,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;e_.setFromMatrixPosition(e.matrixWorld),n.position.copy(e_),t_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(t_),n.updateMatrixWorld(),$u.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($u),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class S4 extends Ld{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=xo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class E4 extends jl{constructor(e,n,i=0,r=Math.PI/3,s=0,o=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new S4}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const n_=new Xe,qo=new O,Zu=new O;class T4 extends Ld{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new $e(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),qo.setFromMatrixPosition(e.matrixWorld),i.position.copy(qo),Zu.copy(i.position),Zu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Zu),i.updateMatrixWorld(),r.makeTranslation(-qo.x,-qo.y,-qo.z),n_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(n_)}}class $v extends jl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new T4}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class A4 extends Ld{constructor(){super(new Td(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b4 extends jl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new A4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class w4 extends jl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class fa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let n="";for(let i=0,r=e.length;i<r;i++)n+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(e){const n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}}class R4 extends Uo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wr.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(l=>{n&&n(l),s.manager.itemEnd(e)}).catch(l=>{r&&r(l)});return}return setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return wr.add(e,l),n&&n(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),wr.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});wr.add(e,c),s.manager.itemStart(e)}}const Pd="\\[\\]\\.:\\/",C4=new RegExp("["+Pd+"]","g"),Id="[^"+Pd+"]",L4="[^"+Pd.replace("\\.","")+"]",P4=/((?:WC+[\/:])*)/.source.replace("WC",Id),I4=/(WCOD+)?/.source.replace("WCOD",L4),D4=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Id),N4=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Id),U4=new RegExp("^"+P4+I4+D4+N4+"$"),O4=["material","materials","bones","map"];class F4{constructor(e,n,i){const r=i||ht.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class ht{constructor(e,n,i){this.path=n,this.parsedPath=i||ht.parseTrackName(n),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,n,i):new ht(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C4,"")}static parseTrackName(e){const n=U4.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);O4.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const c=i(a.children);if(c)return c}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=ht.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=F4;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yd);function i_(t,e){if(e===g3)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===Vh||e===Sv){let n=t.getIndex();if(n===null){const o=[],a=t.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);t.setIndex(o),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const i=n.count-2,r=[];if(e===Vh)for(let o=1;o<=i;o++)r.push(n.getX(0)),r.push(n.getX(o)),r.push(n.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(n.getX(o)),r.push(n.getX(o+1)),r.push(n.getX(o+2))):(r.push(n.getX(o+2)),r.push(n.getX(o+1)),r.push(n.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=t.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}class B4 extends Uo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new G4(n)}),this.register(function(n){return new W4(n)}),this.register(function(n){return new Q4(n)}),this.register(function(n){return new eR(n)}),this.register(function(n){return new tR(n)}),this.register(function(n){return new j4(n)}),this.register(function(n){return new q4(n)}),this.register(function(n){return new K4(n)}),this.register(function(n){return new Y4(n)}),this.register(function(n){return new V4(n)}),this.register(function(n){return new $4(n)}),this.register(function(n){return new X4(n)}),this.register(function(n){return new J4(n)}),this.register(function(n){return new Z4(n)}),this.register(function(n){return new H4(n)}),this.register(function(n){return new nR(n)}),this.register(function(n){return new iR(n)})}load(e,n,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=fa.extractUrlBase(e);o=fa.resolveURL(l,this.path)}else o=fa.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Yv(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){n(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let s;const o={},a={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Zv){try{o[Ye.KHR_BINARY_GLTF]=new rR(e)}catch(h){r&&r(h);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new _R(s,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new z4;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new sR(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new oR;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new aR;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(i,r)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,n,r,s)})}}function k4(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class H4{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const s=n[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const n=this.parser,i="light:"+e;let r=n.cache.get(i);if(r)return r;const s=n.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Jt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new b4(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $v(u),l.distance=h;break;case"spot":l=new E4(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Er(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=n.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){const n=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return i._getNodeRef(n.cache,a,c)})}}class z4{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return fs}extendParams(e,n,i){const r=[];e.color=new Oe(1,1,1),e.opacity=1;const s=n.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Jt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,pn))}return Promise.all(r)}}class V4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(n.emissiveIntensity=s),Promise.resolve()}}class G4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(n.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(n,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new $e(a,a)}return Promise.all(s)}}class W4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class X4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(n.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(n.iridescenceIOR=o.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(n,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class j4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];n.sheenColor=new Oe(0,0,0),n.sheenRoughness=0,n.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;n.sheenColor.setRGB(a[0],a[1],a[2],Jt)}return o.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(n,"sheenColorMap",o.sheenColorTexture,pn)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(n,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class q4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(n.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(n,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class K4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(n,"thicknessMap",o.thicknessTexture)),n.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return n.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Jt),Promise.all(s)}}class Y4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return n.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];n.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(n,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return n.specularColor=new Oe().setRGB(a[0],a[1],a[2],Jt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(n,"specularColorMap",o.specularColorTexture,pn)),Promise.all(s)}}class Z4{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return n.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(n,"bumpMap",o.bumpTexture)),Promise.all(s)}}class J4{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:zi}extendMaterialParams(e,n){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(n.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(n.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(n,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Q4{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=n.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,s.source,o)}}class eR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class tR{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const n=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[n])return null;const o=s.extensions[n],a=r.images[o.source];let c=i.textureLoader;if(a.uri){const l=i.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return i.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){e(n.height===1)}})),this.isSupported}}class nR{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class iR{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==qn.TRIANGLES&&l.mode!==qn.TRIANGLE_STRIP&&l.mode!==qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const v=new Xe,m=new O,p=new qr,A=new O(1,1,1),y=new r4(g.geometry,g.material,f);for(let T=0;T<f;T++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,T),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,T),c.SCALE&&A.fromBufferAttribute(c.SCALE,T),y.setMatrixAt(T,v.compose(m,p,A));for(const T in c)if(T==="_COLOR_0"){const U=c[T];y.instanceColor=new Xh(U.array,U.itemSize,U.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,c[T]);Ct.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Zv="glTF",Ko=12,r_={JSON:1313821514,BIN:5130562};class rR{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(e,0,Ko),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Zv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ko,s=new DataView(e,Ko);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const c=s.getUint32(o,!0);if(o+=4,c===r_.JSON){const l=new Uint8Array(e,Ko+o,a);this.content=i.decode(l)}else if(c===r_.BIN){const l=Ko+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sR{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=qh[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=qh[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=no[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return n.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const v=d.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}h(d)},a,l,Jt,f)})})}}class oR{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){return(n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),e.needsUpdate=!0),e}}class aR{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Jv extends Fa{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)n[o]=i[s+o];return n}interpolate_(e,n,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-n,h=(i-n)/u,f=h*h,d=f*h,g=e*l,v=g-l,m=-2*d+3*f,p=d-f,A=1-m,y=p-f+h;for(let T=0;T!==a;T++){const U=o[v+T+a],R=o[v+T+c]*u,C=o[g+T+a],G=o[g+T]*u;s[T]=A*U+y*R+m*C+p*G}return s}}const cR=new qr;class lR extends Jv{interpolate_(e,n,i,r){const s=super.interpolate_(e,n,i,r);return cR.fromArray(s).normalize().toArray(s),s}}const qn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},no={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},s_={9728:_n,9729:On,9984:dv,9985:Fc,9986:Jo,9987:Qi},o_={33071:br,33648:tl,10497:go},Ju={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},uR={CUBICSPLINE:void 0,LINEAR:vo,STEP:Ea},Qu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hR(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Cd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ar})),t.DefaultMaterial}function rs(t,e,n){for(const i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function Er(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fR(t,e,n){let i=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(t);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(i){const f=h.POSITION!==void 0?n.getDependency("accessor",h.POSITION):t.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?n.getDependency("accessor",h.NORMAL):t.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?n.getDependency("accessor",h.COLOR_0):t.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return i&&(t.morphAttributes.position=u),r&&(t.morphAttributes.normal=h),s&&(t.morphAttributes.color=f),t.morphTargetsRelative=!0,t})}function dR(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){const n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pR(t){let e;const n=t.extensions&&t.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+eh(n.attributes):e=t.indices+":"+eh(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,r=t.targets.length;i<r;i++)e+=":"+eh(t.targets[i]);return e}function eh(t){let e="";const n=Object.keys(t).sort();for(let i=0,r=n.length;i<r;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Kh(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mR(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const gR=new Xe;class _R{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new k4,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new M4(this.options.manager):this.textureLoader=new R4(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return rs(s,a,r),Er(a,r),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(n)}_markDefs(){const e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=n.length;r<s;r++){const o=n[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;const r=i.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=e(n[i]);if(r)return r}return null}_invokeAll(e){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const s=e(n[r]);s&&i.push(s)}return i}getDependency(e,n){const i=e+":"+n;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(n)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,n)}return n}loadBuffer(e){const n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(fa.resolveURL(n.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){const n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,s=n.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Ju[r.type],a=no[r.componentType],c=r.normalized===!0,l=new a(r.count*o);return Promise.resolve(new vn(l,o,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Ju[r.type],l=no[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(d&&d!==h){const p=Math.floor(f/d),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let y=n.cache.get(A);y||(v=new l(a,p*d,r.count*d/u),y=new Qw(v,d/u),n.cache.add(A,y)),m=new bd(y,c,f%d/u,g)}else a===null?v=new l(r.count*c):v=new l(a,f,r.count*c),m=new vn(v,c,g);if(r.sparse!==void 0){const p=Ju.SCALAR,A=no[r.sparse.indices.componentType],y=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,U=new A(o[1],y,r.sparse.count*p),R=new l(o[2],T,r.sparse.count*c);a!==null&&(m=new vn(m.array.slice(),m.itemSize,m.normalized));for(let C=0,G=U.length;C<G;C++){const E=U[C];if(m.setX(E,R[C*c]),c>=2&&m.setY(E,R[C*c+1]),c>=3&&m.setZ(E,R[C*c+2]),c>=4&&m.setW(E,R[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const n=this.json,i=this.options,s=n.textures[e].source,o=n.images[s];let a=this.textureLoader;if(o.uri){const c=i.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,n,i){const r=this,s=this.json,o=s.textures[e],a=s.images[n],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(n,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=s_[f.magFilter]||On,u.minFilter=s_[f.minFilter]||Qi,u.wrapS=o_[f.wrapS]||go,u.wrapT=o_[f.wrapT]||go,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,n){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=i.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;n.isImageBitmapLoader===!0&&(g=function(v){const m=new Yt(v);m.needsUpdate=!0,f(m)}),n.load(fa.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||mR(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,n,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.colorSpace=r),e[n]=o,o})}assignFinalMaterial(e){const n=e.geometry;let i=e.material;const r=n.attributes.tangent===void 0,s=n.attributes.color!==void 0,o=n.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new jv,Li.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(a,c)),i=c}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let c=this.cache.get(a);c||(c=new Xv,Li.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(a,c)),i=c}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=i.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Cd}loadMaterial(e){const n=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const h=r[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,s,n))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Jt),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(n.assignTexture(a,"map",h.baseColorTexture,pn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(n.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(n.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=bi);const u=s.alphaMode||Qu.OPAQUE;if(u===Qu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qu.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==fs&&(l.push(n.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new $e(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==fs&&(l.push(n.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==fs){const h=s.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Jt)}return s.emissiveTexture!==void 0&&o!==fs&&l.push(n.assignTexture(a,"emissiveMap",s.emissiveTexture,pn)),Promise.all(l).then(function(){const h=new o(a);return s.name&&(h.name=s.name),Er(h,s),n.associations.set(h,{materials:e}),s.extensions&&rs(r,h,s),h})}createUniqueName(e){const n=ht.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){const n=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,n).then(function(c){return a_(c,a,n)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=pR(l),h=r[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=a_(new Hi,l,n),r[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const n=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?hR(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(n.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const v=u[d],m=o[d];let p;const A=l[d];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new t4(v,A):new Fn(v,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?p.geometry=i_(p.geometry,Sv):m.mode===qn.TRIANGLE_FAN&&(p.geometry=i_(p.geometry,Vh));else if(m.mode===qn.LINES)p=new s4(v,A);else if(m.mode===qn.LINE_STRIP)p=new Rd(v,A);else if(m.mode===qn.LINE_LOOP)p=new o4(v,A);else if(m.mode===qn.POINTS)p=new a4(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&dR(p,s),p.name=n.createUniqueName(s.name||"mesh_"+e),Er(p,s),m.extensions&&rs(r,p,m),n.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)n.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&rs(r,h[0],s),h[0];const f=new ds;s.extensions&&rs(r,f,s),n.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let n;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new mn(G3.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new Td(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),Er(n,i),Promise.resolve(n)}loadSkin(e){const n=this.json.skins[e],i=[];for(let r=0,s=n.joints.length;r<s;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new Xe;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[l])}return new wd(a,c)})}loadAnimation(e){const n=this.json,i=this,r=n.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],g=r.samplers[d.sampler],v=d.target,m=v.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,A=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",A)),l.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let A=0,y=f.length;A<y;A++){const T=f[A],U=d[A],R=g[A],C=v[A],G=m[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const E=i._createAnimationTracks(T,U,R,C,G);if(E)for(let x=0;x<E.length;x++)p.push(E[x])}return new p4(s,void 0,p)})}createNodeMesh(e){const n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const n=this.json,i=this,r=n.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let l=0,u=a.length;l<u;l++)o.push(i.getDependency("node",a[l]));const c=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gR)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=n.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(s.isBone===!0?u=new Gv:l.length>1?u=new ds:l.length===1?u=l[0]:u=new Ct,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),Er(u,s),s.extensions&&rs(i,u,s),s.matrix!==void 0){const h=new Xe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const n=this.extensions,i=this.json.scenes[e],r=this,s=new ds;i.name&&(s.name=r.createUniqueName(i.name)),Er(s,i),i.extensions&&rs(n,s,i);const o=i.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(r.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Li||f instanceof Yt)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,n,i,r,s){const o=[],a=e.name?e.name:e.uuid,c=[];xr[s.path]===xr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(xr[s.path]){case xr.weights:l=Mo;break;case xr.rotation:l=Es;break;case xr.position:case xr.scale:l=So;break;default:switch(i.itemSize){case 1:l=Mo;break;case 2:case 3:default:l=So;break}break}const u=r.interpolation!==void 0?uR[r.interpolation]:vo,h=this._getArrayFromAccessor(i);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+xr[s.path],n.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){const i=Kh(n.constructor),r=new Float32Array(n.length);for(let s=0,o=n.length;s<o;s++)r[s]=n[s]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof Es?lR:Jv;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function vR(t,e,n){const i=e.attributes,r=new lr;if(i.POSITION!==void 0){const a=n.json.accessors[i.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new O(c[0],c[1],c[2]),new O(l[0],l[1],l[2])),a.normalized){const u=Kh(no[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,c=new O;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const f=n.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const v=Kh(no[f.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}t.boundingBox=r;const o=new ki;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,t.boundingSphere=o}function a_(t,e,n){const i=e.attributes,r=[];function s(o,a){return n.getDependency("accessor",o).then(function(c){t.setAttribute(a,c)})}for(const o in i){const a=qh[o]||o.toLowerCase();a in t.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!t.index){const o=n.getDependency("accessor",e.indices).then(function(a){t.setIndex(a)});r.push(o)}return ot.workingColorSpace!==Jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Er(t,e),vR(t,e,n),Promise.all(r).then(function(){return e.targets!==void 0?fR(t,e.targets,n):t})}/**
 * Vue 3 Carousel 0.3.3
 * (c) 2024
 * @license MIT
 */const Zt={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},c_={itemsToShow:{default:Zt.itemsToShow,type:Number},itemsToScroll:{default:Zt.itemsToScroll,type:Number},wrapAround:{default:Zt.wrapAround,type:Boolean},throttle:{default:Zt.throttle,type:Number},snapAlign:{default:Zt.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:Zt.transition,type:Number},breakpoints:{default:Zt.breakpoints,type:Object},autoplay:{default:Zt.autoplay,type:Number},pauseAutoplayOnHover:{default:Zt.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:Zt.mouseDrag,type:Boolean},touchDrag:{default:Zt.touchDrag,type:Boolean},dir:{default:Zt.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:Zt.i18n,type:Object},settings:{default(){return{}},type:Object}};function xR({config:t,slidesCount:e}){const{snapAlign:n,wrapAround:i,itemsToShow:r=1}=t;if(i)return Math.max(e-1,0);let s;switch(n){case"start":s=e-r;break;case"end":s=e-1;break;case"center":case"center-odd":s=e-Math.ceil((r-.5)/2);break;case"center-even":s=e-Math.ceil(r/2);break;default:s=0;break}return Math.max(s,0)}function yR({config:t,slidesCount:e}){const{wrapAround:n,snapAlign:i,itemsToShow:r=1}=t;let s=0;if(n||r>e)return s;switch(i){case"start":s=0;break;case"end":s=r-1;break;case"center":case"center-odd":s=Math.floor((r-1)/2);break;case"center-even":s=Math.floor((r-2)/2);break;default:s=0;break}return s}function Yh({val:t,max:e,min:n}){return e<n?t:Math.min(Math.max(t,n),e)}function MR({config:t,currentSlide:e,slidesCount:n}){const{snapAlign:i,wrapAround:r,itemsToShow:s=1}=t;let o=e;switch(i){case"center":case"center-odd":o-=(s-1)/2;break;case"center-even":o-=(s-2)/2;break;case"end":o-=s-1;break}return r?o:Yh({val:o,max:n-s,min:0})}function Qv(t){return t?t.reduce((e,n)=>{var i;return n.type===Kn?[...e,...Qv(n.children)]:((i=n.type)===null||i===void 0?void 0:i.name)==="CarouselSlide"?[...e,n]:e},[]):[]}function $h({val:t,max:e,min:n=0}){return t>e?$h({val:t-(e+1),max:e,min:n}):t<n?$h({val:t+(e+1),max:e,min:n}):t}function SR(t,e){let n;return e?function(...i){const r=this;n||(t.apply(r,i),n=!0,setTimeout(()=>n=!1,e))}:t}function ER(t,e){let n;return function(...i){n&&clearTimeout(n),n=setTimeout(()=>{t(...i),n=null},e)}}function TR(t="",e={}){return Object.entries(e).reduce((n,[i,r])=>n.replace(`{${i}}`,String(r)),t)}var AR=df({name:"ARIA",setup(){const t=ai("config",Cr(Object.assign({},Zt))),e=ai("currentSlide",zt(0)),n=ai("slidesCount",zt(0));return()=>Xs("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},TR(t.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:n.value}))}}),bR=df({name:"Carousel",props:c_,setup(t,{slots:e,emit:n,expose:i}){var r;const s=zt(null),o=zt([]),a=zt(0),c=zt(0),l=Cr(Object.assign({},Zt));let u=Object.assign({},Zt),h;const f=zt((r=t.modelValue)!==null&&r!==void 0?r:0),d=zt(0),g=zt(0),v=zt(0),m=zt(0);let p,A;Mi("config",l),Mi("slidesCount",c),Mi("currentSlide",f),Mi("maxSlide",v),Mi("minSlide",m),Mi("slideWidth",a);function y(){h=Object.assign({},t.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),t),{i18n:Object.assign(Object.assign({},u.i18n),t.i18n),breakpoints:void 0}),U(u)}function T(){if(!h||!Object.keys(h).length)return;const b=Object.keys(h).map(H=>Number(H)).sort((H,W)=>+W-+H);let N=Object.assign({},u);b.some(H=>{const W=window.matchMedia(`(min-width: ${H}px)`).matches;return W&&(N=Object.assign(Object.assign({},N),h[H])),W}),U(N)}function U(b){Object.entries(b).forEach(([N,H])=>l[N]=H)}const R=ER(()=>{T(),G(),C()},16);function C(){if(!s.value)return;const b=s.value.getBoundingClientRect();a.value=b.width/l.itemsToShow}function G(){c.value<=0||(g.value=Math.ceil((c.value-1)/2),v.value=xR({config:l,slidesCount:c.value}),m.value=yR({config:l,slidesCount:c.value}),l.wrapAround||(f.value=Yh({val:f.value,max:v.value,min:m.value})))}pf(()=>{O_(()=>C()),setTimeout(()=>C(),1e3),T(),le(),window.addEventListener("resize",R,{passive:!0}),n("init")}),mf(()=>{A&&clearTimeout(A),p&&clearInterval(p),window.removeEventListener("resize",R,{passive:!0})});let E=!1;const x={x:0,y:0},V={x:0,y:0},$=Cr({x:0,y:0}),D=zt(!1),J=zt(!1),Q=()=>{D.value=!0},oe=()=>{D.value=!1};function te(b){["INPUT","TEXTAREA","SELECT"].includes(b.target.tagName)||(E=b.type==="touchstart",E||b.preventDefault(),!(!E&&b.button!==0||Ce.value)&&(x.x=E?b.touches[0].clientX:b.clientX,x.y=E?b.touches[0].clientY:b.clientY,document.addEventListener(E?"touchmove":"mousemove",z,!0),document.addEventListener(E?"touchend":"mouseup",ce,!0)))}const z=SR(b=>{J.value=!0,V.x=E?b.touches[0].clientX:b.clientX,V.y=E?b.touches[0].clientY:b.clientY;const N=V.x-x.x,H=V.y-x.y;$.y=H,$.x=N},l.throttle);function ce(){const b=l.dir==="rtl"?-1:1,N=Math.sign($.x)*.4,H=Math.round($.x/a.value+N)*b;if(H&&!E){const W=ne=>{window.removeEventListener("click",W,!0)};window.addEventListener("click",W,!0)}Ke(f.value-H),$.x=0,$.y=0,J.value=!1,document.removeEventListener(E?"touchmove":"mousemove",z,!0),document.removeEventListener(E?"touchend":"mouseup",ce,!0)}function le(){!l.autoplay||l.autoplay<=0||(p=setInterval(()=>{l.pauseAutoplayOnHover&&D.value||Y()},l.autoplay))}function Me(){p&&(clearInterval(p),p=null),le()}const Ce=zt(!1);function Ke(b){const N=l.wrapAround?b:Yh({val:b,max:v.value,min:m.value});f.value===N||Ce.value||(n("slide-start",{slidingToIndex:b,currentSlideIndex:f.value,prevSlideIndex:d.value,slidesCount:c.value}),Ce.value=!0,d.value=f.value,f.value=N,A=setTimeout(()=>{if(l.wrapAround){const H=$h({val:N,max:v.value,min:0});H!==f.value&&(f.value=H,n("loop",{currentSlideIndex:f.value,slidingToIndex:b}))}n("update:modelValue",f.value),n("slide-end",{currentSlideIndex:f.value,prevSlideIndex:d.value,slidesCount:c.value}),Ce.value=!1,Me()},l.transition))}function Y(){Ke(f.value+l.itemsToScroll)}function ue(){Ke(f.value-l.itemsToScroll)}const de={slideTo:Ke,next:Y,prev:ue};Mi("nav",de),Mi("isSliding",Ce);const he=hs(()=>MR({config:l,currentSlide:f.value,slidesCount:c.value}));Mi("slidesToScroll",he);const ke=hs(()=>{const b=l.dir==="rtl"?-1:1,N=he.value*a.value*b;return{transform:`translateX(${$.x-N}px)`,transition:`${Ce.value?l.transition:0}ms`,margin:l.wrapAround?`0 -${c.value*a.value}px`:"",width:"100%"}});function He(){y(),T(),G(),C(),Me()}Object.keys(c_).forEach(b=>{["modelValue"].includes(b)||Zs(()=>t[b],He)}),Zs(()=>t.modelValue,b=>{b!==f.value&&Ke(Number(b))}),Zs(c,G),n("before-init"),y();const B={config:l,slidesCount:c,slideWidth:a,next:Y,prev:ue,slideTo:Ke,currentSlide:f,maxSlide:v,minSlide:m,middleSlide:g};i({updateBreakpointsConfigs:T,updateSlidesData:G,updateSlideWidth:C,initDefaultConfigs:y,restartCarousel:He,slideTo:Ke,next:Y,prev:ue,nav:de,data:B});const nt=e.default||e.slides,we=e.addons,w=Cr(B);return()=>{const b=Qv(nt==null?void 0:nt(w)),N=(we==null?void 0:we(w))||[];b.forEach((M,_)=>M.props.index=_);let H=b;if(l.wrapAround){const M=b.map((L,P)=>Ur(L,{index:-b.length+P,isClone:!0,key:`clone-before-${P}`})),_=b.map((L,P)=>Ur(L,{index:b.length+P,isClone:!0,key:`clone-after-${P}`}));H=[...M,...b,..._]}o.value=b,c.value=Math.max(b.length,1);const W=Xs("ol",{class:"carousel__track",style:ke.value,onMousedownCapture:l.mouseDrag?te:null,onTouchstartPassiveCapture:l.touchDrag?te:null},H),ne=Xs("div",{class:"carousel__viewport"},W);return Xs("section",{ref:s,class:{carousel:!0,"is-sliding":Ce.value,"is-dragging":J.value,"is-hover":D.value,"carousel--rtl":l.dir==="rtl"},dir:l.dir,"aria-label":l.i18n.ariaGallery,tabindex:"0",onMouseenter:Q,onMouseleave:oe},[ne,N,Xs(AR)])}}}),l_;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(l_||(l_={}));var wR=df({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:e}){const n=ai("config",Cr(Object.assign({},Zt))),i=ai("currentSlide",zt(0)),r=ai("slidesToScroll",zt(0)),s=ai("isSliding",zt(!1)),o=hs(()=>t.index===i.value),a=hs(()=>t.index===i.value-1),c=hs(()=>t.index===i.value+1),l=hs(()=>{const u=Math.floor(r.value),h=Math.ceil(r.value+n.itemsToShow-1);return t.index>=u&&t.index<=h});return()=>{var u;return Xs("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":l.value,"carousel__slide--active":o.value,"carousel__slide--prev":a.value,"carousel__slide--next":c.value,"carousel__slide--sliding":s.value},"aria-hidden":!l.value},(u=e.default)===null||u===void 0?void 0:u.call(e,{isActive:o.value,isClone:t.isClone,isPrev:a.value,isNext:c.value,isSliding:s.value,isVisible:l.value}))}}});const RR={class:"canvas-container"},CR=Zi("canvas",{id:"overlay",class:"three"},null,-1),LR={class:"carousel-container"},PR={class:"carousel__slide"},IR=["src"],DR=["onClick"],NR={__name:"Face2",setup(t){const e=zt(null),n=zt(null);let i,r,s=null,o=null,a=null,c=null,l=640,u=480;const h=[{id:0,name:"glasses_1.glb",relativeScale:390,image:"image_1.png",x:3,y:30,z:100},{id:1,name:"glasses_7.glb",relativeScale:5050,image:"image_3.png",x:5,y:20,z:0},{id:2,name:"glasses_3.glb",relativeScale:195,image:"image_7.png",x:4,y:30,z:120},{id:3,name:"glasses_4.glb",relativeScale:580,image:"image_6.png",x:0,y:30,z:130},{id:4,name:"glasses_5.glb",relativeScale:430,image:"image_2.png",x:0,y:10,z:100},{id:5,name:"glasses_2.glb",relativeScale:5330,image:"image_5.png",x:3,y:30,z:0}];let f=h[0];const d=new B4;pf(()=>{e.value=e.value,n.value=n.value,navigator.mediaDevices.getUserMedia({video:!0}).then(async A=>{e.value.srcObject=A,await g(),v(),await m()})});async function g(){i=await ss.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm"),r=await Rt.createFromModelPath(i,"https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task")}function v(){l=e.value.videoWidth,u=e.value.videoHeight,s=new Jw,o=new mn(35,1,.1,1070),a=new Zw({canvas:document.getElementById("overlay"),alpha:!0,antialiasing:!0}),a.setPixelRatio(Math.min(2,window.devicePixelRatio)),a.setSize(l,u),d.load(`models/${f.name}`,A=>{c=A.scene,s.add(c)}),s.add(new w4(13421772,2.4)),o.add(new $v(16777215,1.8)),o.position.x=l/2,o.position.y=-u/2,o.position.z=u/2/Math.tan(45/2)}async function m(){var V;const A=document.querySelector("video"),y=await r.detect(A);if(requestAnimationFrame(m),!((V=y==null?void 0:y.faceLandmarks)!=null&&V.length))return;const T=y.faceLandmarks[0][6],U=y.faceLandmarks[0][1],R=y.faceLandmarks[0][226],C=y.faceLandmarks[0][446];if(!c)return;c.position.x=T.x*l-f.x,c.position.y=-T.y*u-f.y,c.position.z=-o.position.z+T.z-f.z,c.up.x=T.x-U.x,c.up.y=-(T.y-U.y),c.up.z=T.z-U.z;const G=Math.sqrt(c.up.x**2+c.up.y**2+c.up.z**2);c.up.x/=G,c.up.y/=G,c.up.z=0;let E=Math.atan2(c.up.y,c.up.x);const x=Math.sqrt((R.x-C.x)**2+(R.y-C.y)**2+(R.z-C.z)**2);c.scale.x=x*f.relativeScale,c.scale.y=x*f.relativeScale,c.scale.z=x*f.relativeScale*2,c.rotation.y=E-Math.PI/2,c.rotation.z=-(Math.PI/2-Math.acos(c.up.x)),a.render(s,o)}function p(A){f=h[A],s.children.forEach(y=>{y!=null&&y.name&&s.remove(y)}),d.load(`models/${f.name}`,y=>{c=y.scene,s.add(c)})}return(A,y)=>(dh(),ph(Kn,null,[Zi("div",RR,[Zi("video",{class:"video",ref_key:"video",ref:e,width:"auto",height:"auto",autoplay:""},null,512),CR]),Zi("div",LR,[Sn(sh(bR),{"items-to-show":4},{default:ah(()=>[(dh(),ph(Kn,null,v2(h,T=>Sn(sh(wR),{key:T.id},{default:ah(()=>[Zi("div",PR,[Zi("img",{class:"carousel__img",src:`images/${T.image}`,alt:""},null,8,IR),Zi("button",{onClick:U=>p(T.id)}," Model "+gx(T.id+1),9,DR)])]),_:2},1024)),64))]),_:1})])],64))}},UR=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},OR={class:"container"},FR={__name:"App",setup(t){return(e,n)=>(dh(),ph("div",OR,[Sn(NR)]))}},BR=UR(FR,[["__scopeId","data-v-42b486ea"]]);Sy(BR).mount("#app");
