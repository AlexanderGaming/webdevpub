var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(o)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function a(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function u(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function p(t,e,n,o){if(t){const i=d(t,e,n,o);return t[0](i)}}function d(t,e,o,i){return t[1]&&i?n(o.ctx.slice(),t[1](i(e))):o.ctx}function m(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}function f(t,e,n,o,i,s){if(i){const r=d(e,n,o,s);t.p(r,i)}}function g(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function v(t,e,n){return t.set(n),e}function b(e){return e&&r(e.destroy)?e.destroy:t}const $="undefined"!=typeof window;let y=$?()=>window.performance.now():()=>Date.now(),w=$?t=>requestAnimationFrame(t):t;const _=new Set;function k(t){_.forEach((e=>{e.c(t)||(_.delete(e),e.f())})),0!==_.size&&w(k)}function x(t){let e;return 0===_.size&&w(k),{promise:new Promise((n=>{_.add(e={c:t,f:n})})),abort(){_.delete(e)}}}function C(t,e){t.appendChild(e)}function E(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function z(t){const e=L("style");return function(t,e){C(t.head||t,e)}(E(t),e),e}function j(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode.removeChild(t)}function L(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function T(){return B(" ")}function M(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function D(t){return function(e){return e.preventDefault(),t.call(this,e)}}function O(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function R(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function F(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:R(t,o,e[o])}function N(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function q(t,e,n){t.classList[n?"add":"remove"](e)}const P=new Set;let I,X=0;function H(t,e,n,o,i,s,r,l=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);a+=100*t+`%{${r(o,1-o)}}\n`}const u=a+`100% {${r(n,1-n)}}\n}`,p=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,d=E(t);P.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=z(t).sheet),f=d.__svelte_rules||(d.__svelte_rules={});f[p]||(f[p]=!0,m.insertRule(`@keyframes ${p} ${u}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${p} ${o}ms linear ${i}ms 1 both`,X+=1,p}function Y(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),i=n.length-o.length;i&&(t.style.animation=o.join(", "),X-=i,X||w((()=>{X||(P.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),P.clear())})))}function W(t){I=t}function G(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const J=[],V=[],K=[],U=[],Q=Promise.resolve();let Z=!1;function tt(t){K.push(t)}let et=!1;const nt=new Set;function ot(){if(!et){et=!0;do{for(let t=0;t<J.length;t+=1){const e=J[t];W(e),it(e.$$)}for(W(null),J.length=0;V.length;)V.pop()();for(let t=0;t<K.length;t+=1){const e=K[t];nt.has(e)||(nt.add(e),e())}K.length=0}while(J.length);for(;U.length;)U.pop()();Z=!1,et=!1,nt.clear()}}function it(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(tt)}}let st;function rt(){return st||(st=Promise.resolve(),st.then((()=>{st=null}))),st}function lt(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const ct=new Set;let at;function ut(){at={r:0,c:[],p:at}}function pt(){at.r||s(at.c),at=at.p}function dt(t,e){t&&t.i&&(ct.delete(t),t.i(e))}function mt(t,e,n,o){if(t&&t.o){if(ct.has(t))return;ct.add(t),at.c.push((()=>{ct.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ft={duration:0};const gt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ht(t){t&&t.c()}function vt(t,e,n,i){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,n),i||tt((()=>{const e=c.map(o).filter(r);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(tt)}function bt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(J.push(t),Z||(Z=!0,Q.then(ot)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function yt(e,n,o,r,l,c,a,u=[-1]){const p=I;W(e);const d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(p?p.$$.context:[])),callbacks:i(),dirty:u,skip_bound:!1,root:n.target||p.$$.root};a&&a(d.root);let m=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=i)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](i),m&&$t(e,t)),n})):[],d.update(),m=!0,s(d.before_update),d.fragment=!!r&&r(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(S)}else d.fragment&&d.fragment.c();n.intro&&dt(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),ot()}W(p)}class wt{$destroy(){bt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _t={color:"currentColor",class:"",opacity:.1,centered:!1,spreadingDuration:".4s",spreadingDelay:"0s",spreadingTimingFunction:"linear",clearingDuration:"1s",clearingDelay:"0s",clearingTimingFunction:"ease-in-out"};function kt(t,e={}){t.stopImmediatePropagation();const n={..._t,...e},o=!!t.touches&&!!t.touches[0],i=o?t.touches[0].currentTarget:t.currentTarget,s=document.createElement("div"),r=s.style;s.className=`material-ripple ${n.class}`,r.position="absolute",r.color="inherit",r.borderRadius="50%",r.pointerEvents="none",r.width="100px",r.height="100px",r.marginTop="-50px",r.marginLeft="-50px",i.appendChild(s),r.opacity=n.opacity,r.transition=`transform ${n.spreadingDuration} ${n.spreadingTimingFunction} ${n.spreadingDelay},opacity ${n.clearingDuration} ${n.clearingTimingFunction} ${n.clearingDelay}`,r.transform="scale(0) translate(0,0)",r.background=n.color;const l=i.getBoundingClientRect();if(n.centered)r.top=l.height/2+"px",r.left=l.width/2+"px";else{const e=o?t.touches[0].clientY:t.clientY,n=o?t.touches[0].clientX:t.clientX;r.top=e-l.top+"px",r.left=n-l.left+"px"}return r.transform=`scale(${.02*Math.max(l.width,l.height)}) translate(0,0)`,s}var xt=(t,e={})=>{let n,o=e,i=!1,s=!1;const r=t=>{n=kt(t,o)},l=()=>function(t){t&&(t.addEventListener("transitionend",(e=>{"opacity"===e.propertyName&&t.remove()})),t.style.opacity=0)}(n),c=t=>{s||13!==t.keyCode&&32!==t.keyCode||(n=kt(t,{...o,centered:!0}),s=!0)},a=()=>{s=!1,l()};function u(){t.classList.add("s-ripple-container"),t.addEventListener("pointerdown",r),t.addEventListener("pointerup",l),t.addEventListener("pointerleave",l),t.addEventListener("keydown",c),t.addEventListener("keyup",a),i=!1}function p(){t.classList.remove("s-ripple-container"),t.removeEventListener("pointerdown",r),t.removeEventListener("pointerup",l),t.removeEventListener("pointerleave",l),t.removeEventListener("keydown",c),t.removeEventListener("keyup",a),i=!0}return o&&u(),{update(t){o=t,o&&i?u():o||i||p()},destroy:p}};const Ct=t=>t.split(" ").filter((t=>!!t));var Et=(t,e)=>{let n=e;return t.classList.add(...Ct((t=>t.filter((t=>!!t)))(n).join(" "))),{update(e){const o=e;o.forEach(((e,o)=>{e?t.classList.add(...Ct(e)):n[o]&&t.classList.remove(...Ct(n[o]))})),n=o}}};function zt(t){let e,o,i,l,c,a,u,d;const h=t[19].default,v=p(h,t,t[18],null);let $=[{class:i="s-btn size-"+t[5]+" "+t[1]},{type:t[14]},{style:t[16]},{disabled:t[11]},{"aria-disabled":t[11]},t[17]],y={};for(let t=0;t<$.length;t+=1)y=n(y,$[t]);return{c(){e=L("button"),o=L("span"),v&&v.c(),R(o,"class","s-btn__content"),F(e,y),q(e,"s-btn--fab",t[2]),q(e,"icon",t[3]),q(e,"block",t[4]),q(e,"tile",t[6]),q(e,"text",t[7]||t[3]),q(e,"depressed",t[8]||t[7]||t[11]||t[9]||t[3]),q(e,"outlined",t[9]),q(e,"rounded",t[10]),q(e,"disabled",t[11])},m(n,i){j(n,e,i),C(e,o),v&&v.m(o,null),e.autofocus&&e.focus(),t[21](e),a=!0,u||(d=[b(l=Et.call(null,e,[t[12]&&t[13]])),b(c=xt.call(null,e,t[15])),M(e,"click",t[20])],u=!0)},p(t,[n]){v&&v.p&&(!a||262144&n)&&f(v,h,t,t[18],a?m(h,t[18],n,null):g(t[18]),null),F(e,y=function(t,e){const n={},o={},i={$$scope:1};let s=t.length;for(;s--;){const r=t[s],l=e[s];if(l){for(const t in r)t in l||(o[t]=1);for(const t in l)i[t]||(n[t]=l[t],i[t]=1);t[s]=l}else for(const t in r)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}($,[(!a||34&n&&i!==(i="s-btn size-"+t[5]+" "+t[1]))&&{class:i},(!a||16384&n)&&{type:t[14]},(!a||65536&n)&&{style:t[16]},(!a||2048&n)&&{disabled:t[11]},(!a||2048&n)&&{"aria-disabled":t[11]},131072&n&&t[17]])),l&&r(l.update)&&12288&n&&l.update.call(null,[t[12]&&t[13]]),c&&r(c.update)&&32768&n&&c.update.call(null,t[15]),q(e,"s-btn--fab",t[2]),q(e,"icon",t[3]),q(e,"block",t[4]),q(e,"tile",t[6]),q(e,"text",t[7]||t[3]),q(e,"depressed",t[8]||t[7]||t[11]||t[9]||t[3]),q(e,"outlined",t[9]),q(e,"rounded",t[10]),q(e,"disabled",t[11])},i(t){a||(dt(v,t),a=!0)},o(t){mt(v,t),a=!1},d(n){n&&S(e),v&&v.d(n),t[21](null),u=!1,s(d)}}}function jt(t,e,o){const i=["class","fab","icon","block","size","tile","text","depressed","outlined","rounded","disabled","active","activeClass","type","ripple","style","button"];let s=h(e,i),{$$slots:r={},$$scope:l}=e,{class:c=""}=e,{fab:a=!1}=e,{icon:u=!1}=e,{block:p=!1}=e,{size:d="default"}=e,{tile:m=!1}=e,{text:f=!1}=e,{depressed:g=!1}=e,{outlined:v=!1}=e,{rounded:b=!1}=e,{disabled:$=null}=e,{active:y=!1}=e,{activeClass:w="active"}=e,{type:_="button"}=e,{ripple:k={}}=e,{style:x=null}=e,{button:C=null}=e;return t.$$set=t=>{e=n(n({},e),function(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}(t)),o(17,s=h(e,i)),"class"in t&&o(1,c=t.class),"fab"in t&&o(2,a=t.fab),"icon"in t&&o(3,u=t.icon),"block"in t&&o(4,p=t.block),"size"in t&&o(5,d=t.size),"tile"in t&&o(6,m=t.tile),"text"in t&&o(7,f=t.text),"depressed"in t&&o(8,g=t.depressed),"outlined"in t&&o(9,v=t.outlined),"rounded"in t&&o(10,b=t.rounded),"disabled"in t&&o(11,$=t.disabled),"active"in t&&o(12,y=t.active),"activeClass"in t&&o(13,w=t.activeClass),"type"in t&&o(14,_=t.type),"ripple"in t&&o(15,k=t.ripple),"style"in t&&o(16,x=t.style),"button"in t&&o(0,C=t.button),"$$scope"in t&&o(18,l=t.$$scope)},[C,c,a,u,p,d,m,f,g,v,b,$,y,w,_,k,x,s,l,r,function(e){G.call(this,t,e)},function(t){V[t?"unshift":"push"]((()=>{C=t,o(0,C)}))}]}class St extends wt{constructor(t){super(),yt(this,t,jt,zt,l,{class:1,fab:2,icon:3,block:4,size:5,tile:6,text:7,depressed:8,outlined:9,rounded:10,disabled:11,active:12,activeClass:13,type:14,ripple:15,style:16,button:0})}}const Lt=[];function Bt(e,n=t){let o;const i=new Set;function s(t){if(l(e,t)&&(e=t,o)){const t=!Lt.length;for(const t of i)t[1](),Lt.push(t,e);if(t){for(let t=0;t<Lt.length;t+=2)Lt[t][0](Lt[t+1]);Lt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(r,l=t){const c=[r,l];return i.add(c),1===i.size&&(o=n(s)||t),r(e),()=>{i.delete(c),0===i.size&&(o(),o=null)}}}}let Tt=36,Mt="";for(;Tt--;)Mt+=Tt.toString(36);function Dt(t,{delay:n=0,duration:o=400,easing:i=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:i,css:t=>"opacity: "+t*s}}const Ot=["primary","secondary","success","info","warning","error"];function Rt(t,e){if(/^(#|rgb|hsl|currentColor)/.test(e))return t.style.backgroundColor=e,!1;if(e.startsWith("--"))return t.style.backgroundColor=`var(${e})`,!1;const n=function(t){return t.split(" ").map((t=>Ot.includes(t)?`${t}-color`:t))}(e);return t.classList.add(...n),n}var Ft=(t,e)=>{let n;return"string"==typeof e&&(n=Rt(t,e)),{update(e){n?t.classList.remove(...n):t.style.backgroundColor=null,"string"==typeof e&&(n=Rt(t,e))}}};function Nt(n){let o,i,l,c,a,u,d,h,v,$,w,_;const k=n[11].default,E=p(k,n,n[10],null);return{c(){o=L("div"),i=L("div"),c=T(),a=L("div"),E&&E.c(),R(i,"class","s-overlay__scrim svelte-zop6hb"),A(i,"opacity",n[5]),R(a,"class","s-overlay__content svelte-zop6hb"),R(o,"class",u="s-overlay "+n[0]+" svelte-zop6hb"),R(o,"style",d="z-index:"+n[7]+";"+n[9]),q(o,"absolute",n[8])},m(t,e){j(t,o,e),C(o,i),C(o,c),C(o,a),E&&E.m(a,null),$=!0,w||(_=[b(l=Ft.call(null,i,n[6])),M(o,"click",n[12])],w=!0)},p(t,e){n=t,(!$||32&e)&&A(i,"opacity",n[5]),l&&r(l.update)&&64&e&&l.update.call(null,n[6]),E&&E.p&&(!$||1024&e)&&f(E,k,n,n[10],$?m(k,n[10],e,null):g(n[10]),null),(!$||1&e&&u!==(u="s-overlay "+n[0]+" svelte-zop6hb"))&&R(o,"class",u),(!$||640&e&&d!==(d="z-index:"+n[7]+";"+n[9]))&&R(o,"style",d),257&e&&q(o,"absolute",n[8])},i(i){$||(dt(E,i),tt((()=>{v&&v.end(1),h=function(n,o,i){let s,l,c=o(n,i),a=!1,u=0;function p(){s&&Y(n,s)}function d(){const{delay:o=0,duration:i=300,easing:r=e,tick:d=t,css:m}=c||ft;m&&(s=H(n,0,1,i,o,r,m,u++)),d(0,1);const f=y()+o,g=f+i;l&&l.abort(),a=!0,tt((()=>lt(n,!0,"start"))),l=x((t=>{if(a){if(t>=g)return d(1,0),lt(n,!0,"end"),p(),a=!1;if(t>=f){const e=r((t-f)/i);d(e,1-e)}}return a}))}let m=!1;return{start(){m||(m=!0,Y(n),r(c)?(c=c(),rt().then(d)):d())},invalidate(){m=!1},end(){a&&(p(),a=!1)}}}(o,n[1],n[2]),h.start()})),$=!0)},o(i){mt(E,i),h&&h.invalidate(),v=function(n,o,i){let l,c=o(n,i),a=!0;const u=at;function p(){const{delay:o=0,duration:i=300,easing:r=e,tick:p=t,css:d}=c||ft;d&&(l=H(n,1,0,i,o,r,d));const m=y()+o,f=m+i;tt((()=>lt(n,!1,"start"))),x((t=>{if(a){if(t>=f)return p(0,1),lt(n,!1,"end"),--u.r||s(u.c),!1;if(t>=m){const e=r((t-m)/i);p(1-e,e)}}return a}))}return u.r+=1,r(c)?rt().then((()=>{c=c(),p()})):p(),{end(t){t&&c.tick&&c.tick(1,0),a&&(l&&Y(n,l),a=!1)}}}(o,n[1],n[3]),$=!1},d(t){t&&S(o),E&&E.d(t),t&&v&&v.end(),w=!1,s(_)}}}function At(t){let e,n,o=t[4]&&Nt(t);return{c(){o&&o.c(),e=B("")},m(t,i){o&&o.m(t,i),j(t,e,i),n=!0},p(t,[n]){t[4]?o?(o.p(t,n),16&n&&dt(o,1)):(o=Nt(t),o.c(),dt(o,1),o.m(e.parentNode,e)):o&&(ut(),mt(o,1,1,(()=>{o=null})),pt())},i(t){n||(dt(o),n=!0)},o(t){mt(o),n=!1},d(t){o&&o.d(t),t&&S(e)}}}function qt(t,e,n){let{$$slots:o={},$$scope:i}=e,{class:s=""}=e,{transition:r=Dt}=e,{inOpts:l={duration:250}}=e,{outOpts:c={duration:250}}=e,{active:a=!0}=e,{opacity:u=.46}=e,{color:p="rgb(33, 33, 33)"}=e,{index:d=5}=e,{absolute:m=!1}=e,{style:f=""}=e;return t.$$set=t=>{"class"in t&&n(0,s=t.class),"transition"in t&&n(1,r=t.transition),"inOpts"in t&&n(2,l=t.inOpts),"outOpts"in t&&n(3,c=t.outOpts),"active"in t&&n(4,a=t.active),"opacity"in t&&n(5,u=t.opacity),"color"in t&&n(6,p=t.color),"index"in t&&n(7,d=t.index),"absolute"in t&&n(8,m=t.absolute),"style"in t&&n(9,f=t.style),"$$scope"in t&&n(10,i=t.$$scope)},[s,r,l,c,a,u,p,d,m,f,i,o,function(e){G.call(this,t,e)}]}class Pt extends wt{constructor(t){super(),yt(this,t,qt,At,l,{class:0,transition:1,inOpts:2,outOpts:3,active:4,opacity:5,color:6,index:7,absolute:8,style:9})}}const It=Bt(),Xt=Bt(!1),{isNaN:Ht}=gt;function Yt(e){let n,o,i,r,l,c,u,p,d,m,f,g,h,v,b,$,y,_,k,x,E=!1,z=!0,F=Wt(e[0])+"",q=Wt(e[1])+"";function P(){cancelAnimationFrame(c),o.paused||(c=w(P),E=!0),e[9].call(o)}return{c(){n=L("div"),o=L("video"),i=L("track"),u=T(),p=L("div"),d=L("div"),m=L("span"),f=B(F),g=T(),h=L("span"),v=L("span"),b=B(q),$=T(),y=L("progress"),R(i,"kind","captions"),R(o,"id","vid"),R(o,"poster",r=e[4].gaming),a(o.src,l=e[4].src)||R(o,"src",l),R(o,"class","svelte-u32bgo"),void 0===e[1]&&tt((()=>e[10].call(o))),R(m,"class","time svelte-u32bgo"),R(v,"class","time svelte-u32bgo"),R(h,"class","svelte-u32bgo"),R(d,"class","info svelte-u32bgo"),y.value=_=e[0]/e[1]||0,R(y,"class","svelte-u32bgo"),R(p,"class","controls svelte-u32bgo"),A(p,"opacity",e[1]&&e[3]?1:0),R(n,"id","container"),R(n,"class","svelte-u32bgo")},m(t,s){j(t,n,s),C(n,o),C(o,i),C(n,u),C(n,p),C(p,d),C(d,m),C(m,f),C(d,g),C(d,h),C(h,v),C(v,b),C(p,$),C(p,y),k||(x=[M(window,"keydown",D(e[8])),M(o,"mousedown",O(D(e[6]))),M(o,"mouseup",O(D(e[7]))),M(o,"timeupdate",P),M(o,"durationchange",e[10]),M(o,"play",e[11]),M(o,"pause",e[11]),M(p,"mousemove",O(D(e[5]))),M(p,"touchmove",O(D(e[5]))),M(p,"mousedown",O(D(e[5]))),M(p,"mouseup",O(D(e[5])))],k=!0)},p(t,[e]){16&e&&r!==(r=t[4].gaming)&&R(o,"poster",r),16&e&&!a(o.src,l=t[4].src)&&R(o,"src",l),!E&&1&e&&!Ht(t[0])&&(o.currentTime=t[0]),E=!1,4&e&&z!==(z=t[2])&&o[z?"pause":"play"](),1&e&&F!==(F=Wt(t[0])+"")&&N(f,F),2&e&&q!==(q=Wt(t[1])+"")&&N(b,q),3&e&&_!==(_=t[0]/t[1]||0)&&(y.value=_),10&e&&A(p,"opacity",t[1]&&t[3]?1:0)},i:t,o:t,d(t){t&&S(n),k=!1,s(x)}}}function Wt(t){if(isNaN(t))return"...";const e=Math.floor(t/60);return(t=Math.floor(t%60))<10&&(t="0"+t),`${e}:${t}`}function Gt(t,e,n){let o;u(t,It,(t=>n(4,o=t)));let i,s,r,l=0,c=!0,a=!0;return[l,i,c,a,o,function(t){if(clearTimeout(s),s=setTimeout((()=>n(3,a=!1)),2500),n(3,a=!0),!i)return;if("touchmove"!==t.type&&!(1&t.buttons))return;const e="touchmove"===t.type?t.touches[0].clientX:t.clientX,{left:o,right:r}=this.getBoundingClientRect();n(0,l=i*(e-o)/(r-o))},function(t){r=new Date},function(t){new Date-r<300&&(c?t.target.play():t.target.pause())},function(t){let e=document.getElementById("vid");t&&" "==t.key&&(c?e.play():e.pause())},function(){l=this.currentTime,n(0,l)},function(){i=this.duration,n(1,i)},function(){c=this.paused,n(2,c)}]}class Jt extends wt{constructor(t){super(),yt(this,t,Gt,Yt,l,{})}}var Vt=1;function Kt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t}function Ut(){window.setTimeout((function(){var t,e,n,o,i,s,r=Kt(220,400),l=.65*r,c=Kt(0,1500-r),a=Kt(0,750-l),u=Math.ceil(1*Math.random());Vt+=1,1==u&&(u="callsaul.jpg",console.log("bruh")),t=u,e=r,n=l,o="JavaScriptImage",i=`position: absolute;left:${c}px;top:${a}px;`,(s=document.createElement("img")).src=t,s.width=e,s.height=n,s.alt=o,s.style=i,s.onmouseover=t=>{document.getElementById(t.target.id).remove()},s.id=Vt,document.body.appendChild(s),Ut()}),5e4*Math.random())}Ut();const Qt=[{poster:"https://cdn.abicart.com/shop/4862/art62/h1493/31011493-origpic-a85dc4.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://m.media-amazon.com/images/I/71xd2Jh8U1L._AC_SY741_.jpg",src:"Saulgoodman3d.mp4",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/430717/036bc194d5ced940b74c38414454fed5-better_20call_20saul.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://sportshub.cbsistatic.com/i/2022/03/10/7d0bf2f6-d1df-40b9-927a-8a03441541eb/better-call-saul-season-6-key-art.jpg?auto=webp&width=928&height=1375&crop=0.675:1,smart",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://ae01.alicdn.com/kf/HTB15WKMXuOSBuNjy0Fdq6zDnVXaf/Breaking-Bad-Better-Call-Saul-Season-1-Lawyer-Retro-Vintage-Poster-Canvas-Painting-Wall-Sticker-Home.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://cdn.flickeringmyth.com/wp-content/uploads/2018/06/Better-Call-Saul-s4-poster.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://images.justwatch.com/poster/8636010/s592/season-1",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://m.media-amazon.com/images/I/71a4GDBxqOL._AC_SY741_.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://static.posters.cz/image/750/poster/better-call-saul-paint-i47519.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"},{poster:"https://ae01.alicdn.com/kf/H6023f3ca39f74a9d9480da07806792cbL/Better-Call-Saul-Season-1-2-3-4-poster-Living-room-decoration-with-white-posters-and.jpg_640x640.jpg",src:"https://movietrailers.apple.com/movies/wb/thelegobatmanmovie/the-logo-batman-movie-clip-batman-will-stop-you_i320.m4v",gaming:"https://www.giantfreakinrobot.com/wp-content/uploads/2022/02/Better-Call-Saul.jpeg"}];function Zt(e){let n,o,i;return{c(){n=L("div"),R(n,"class","grid-item svelte-k1038u"),A(n,"background-image","url("+e[0].poster+")")},m(t,s){j(t,n,s),o||(i=M(n,"click",e[3]),o=!0)},p(t,[e]){1&e&&A(n,"background-image","url("+t[0].poster+")")},i:t,o:t,d(t){t&&S(n),o=!1,i()}}}function te(t,e,n){let o,i;u(t,It,(t=>n(1,o=t))),u(t,Xt,(t=>n(2,i=t)));let{video:s}=e;return t.$$set=t=>{"video"in t&&n(0,s=t.video)},[s,o,i,()=>{v(It,o=s,o),v(Xt,i=!0,i)}]}class ee extends wt{constructor(t){super(),yt(this,t,te,Zt,l,{video:0})}}function ne(t,e,n){const o=t.slice();return o[6]=e[n],o[8]=n,o}function oe(e){let n,o;return n=new ee({props:{video:Qt[e[8]%10]}}),{c(){ht(n.$$.fragment)},m(t,e){vt(n,t,e),o=!0},p:t,i(t){o||(dt(n.$$.fragment,t),o=!0)},o(t){mt(n.$$.fragment,t),o=!1},d(t){bt(n,t)}}}function ie(t){let e;return{c(){e=B("Close")},m(t,n){j(t,e,n)},d(t){t&&S(e)}}}function se(t){let e,n=t[0]?"Minimize":"Theatre Mode";return{c(){e=B(n)},m(t,n){j(t,e,n)},p(t,o){1&o&&n!==(n=t[0]?"Minimize":"Theatre Mode")&&N(e,n)},d(t){t&&S(e)}}}function re(t){let e,n,o;return n=new St({props:{size:"small",class:"secondary-color",$$slots:{default:[le]},$$scope:{ctx:t}}}),n.$on("click",t[4]),{c(){e=L("div"),ht(n.$$.fragment),R(e,"id","gigascreen"),R(e,"class","svelte-12mi2ze")},m(t,i){j(t,e,i),vt(n,e,null),o=!0},p(t,e){const o={};512&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){o||(dt(n.$$.fragment,t),o=!0)},o(t){mt(n.$$.fragment,t),o=!1},d(t){t&&S(e),bt(n)}}}function le(e){let n;return{c(){n=B("Gigascreen")},m(t,e){j(t,n,e)},p:t,d(t){t&&S(n)}}}function ce(t){let e,n,o,i,s,r,l,c,a,u,p,d;o=new St({props:{class:"error-color",size:"small",$$slots:{default:[ie]},$$scope:{ctx:t}}}),o.$on("click",t[2]),r=new St({props:{size:"small",class:"primary-color",$$slots:{default:[se]},$$scope:{ctx:t}}}),r.$on("click",t[3]);let m=t[0]&&re(t);return a=new Jt({}),{c(){e=L("div"),n=L("div"),ht(o.$$.fragment),i=T(),s=L("div"),ht(r.$$.fragment),l=T(),m&&m.c(),c=T(),ht(a.$$.fragment),R(n,"id","close"),R(n,"class","svelte-12mi2ze"),R(s,"id","fullscreen"),R(s,"class","svelte-12mi2ze"),R(e,"id","video"),R(e,"class","svelte-12mi2ze"),q(e,"fullscreen",1==t[0])},m(t,f){j(t,e,f),C(e,n),vt(o,n,null),C(e,i),C(e,s),vt(r,s,null),C(e,l),m&&m.m(e,null),C(e,c),vt(a,e,null),u=!0,p||(d=M(e,"click",ue),p=!0)},p(t,n){const i={};512&n&&(i.$$scope={dirty:n,ctx:t}),o.$set(i);const s={};513&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s),t[0]?m?(m.p(t,n),1&n&&dt(m,1)):(m=re(t),m.c(),dt(m,1),m.m(e,c)):m&&(ut(),mt(m,1,1,(()=>{m=null})),pt()),1&n&&q(e,"fullscreen",1==t[0])},i(t){u||(dt(o.$$.fragment,t),dt(r.$$.fragment,t),dt(m),dt(a.$$.fragment,t),u=!0)},o(t){mt(o.$$.fragment,t),mt(r.$$.fragment,t),mt(m),mt(a.$$.fragment,t),u=!1},d(t){t&&S(e),bt(o),bt(r),m&&m.d(),bt(a),p=!1,d()}}}function ae(t){let e,n,o,i,s,r,l,c,a,u=Array(10),p=[];for(let e=0;e<u.length;e+=1)p[e]=oe(ne(t,u,e));const d=t=>mt(p[t],1,1,(()=>{p[t]=null}));return r=new Pt({props:{opacity:t[0]?1:.7,color:"black",active:t[1],$$slots:{default:[ce]},$$scope:{ctx:t}}}),r.$on("click",t[5]),{c(){e=L("main"),n=L("div"),n.innerHTML='<img src="23movies.png" alt="Title" height="70" width="280" id="myparentsaregone" class="svelte-12mi2ze"/>',o=T(),i=L("div");for(let t=0;t<p.length;t+=1)p[t].c();s=T(),ht(r.$$.fragment),l=T(),c=L("src"),R(n,"class","top svelte-12mi2ze"),R(i,"class","grid svelte-12mi2ze"),R(e,"class","svelte-12mi2ze")},m(t,u){j(t,e,u),C(e,n),C(e,o),C(e,i);for(let t=0;t<p.length;t+=1)p[t].m(i,null);C(e,s),vt(r,e,null),C(e,l),C(e,c),a=!0},p(t,[e]){if(0&e){let n;for(u=Array(10),n=0;n<u.length;n+=1){const o=ne(t,u,n);p[n]?(p[n].p(o,e),dt(p[n],1)):(p[n]=oe(o),p[n].c(),dt(p[n],1),p[n].m(i,null))}for(ut(),n=u.length;n<p.length;n+=1)d(n);pt()}const n={};1&e&&(n.opacity=t[0]?1:.7),2&e&&(n.active=t[1]),515&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i(t){if(!a){for(let t=0;t<u.length;t+=1)dt(p[t]);dt(r.$$.fragment,t),a=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)mt(p[t]);mt(r.$$.fragment,t),a=!1},d(t){t&&S(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(p,t),bt(r)}}}const ue=t=>{t.stopPropagation()};function pe(t,e,n){let o;u(t,Xt,(t=>n(1,o=t)));let i=!1;Ut();return[i,o,()=>{v(Xt,o=!1,o)},()=>{n(0,i=!i),document.activeElement!=document.body&&document.activeElement.blur()},()=>{document.activeElement!=document.body&&document.activeElement.blur();let t=document.getElementById("vid");t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullScreen&&t.msRequestFullScreen()},()=>{v(Xt,o=!1,o)}]}return new class extends wt{constructor(t){super(),yt(this,t,pe,ae,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map