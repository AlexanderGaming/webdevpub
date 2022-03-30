var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function l(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const f=new Set;function m(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&u(m)}function h(t){let e;return 0===f.size&&u(m),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}function d(t,e){t.appendChild(e)}function p(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function y(t){const e=$("style");return function(t,e){d(t.head||t,e)}(p(t),e),e}function g(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function _(){return k(" ")}function w(){return k("")}function A(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function z(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function I(t,e){t.value=null==e?"":e}function C(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}const j=new Set;let D,S=0;function N(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),S-=s,S||u((()=>{S||(j.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),j.clear())})))}function O(t){D=t}const P=[],R=[],M=[],T=[],q=Promise.resolve();let B=!1;function L(t){M.push(t)}let F=!1;const G=new Set;function H(){if(!F){F=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];O(e),J(e.$$)}for(O(null),P.length=0;R.length;)R.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];G.has(e)||(G.add(e),e())}M.length=0}while(P.length);for(;T.length;)T.pop()();B=!1,F=!1,G.clear()}}function J(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let K;function Q(t,e,n){t.dispatchEvent(function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(`${e?"intro":"outro"}${n}`))}const U=new Set;let V;function W(){V={r:0,c:[],p:V}}function X(){V.r||s(V.c),V=V.p}function Y(t,e){t&&t.i&&(U.delete(t),t.i(e))}function Z(t,e,n,r){if(t&&t.o){if(U.has(t))return;U.add(t),V.c.push((()=>{U.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const tt={duration:0};function et(n,r,s){let i,o,c=r(n,s),u=!1,f=0;function m(){i&&N(n,i)}function d(){const{delay:r=0,duration:s=300,easing:l=e,tick:d=t,css:g}=c||tt;g&&(i=function(t,e,n,r,s,l,i,o=0){const c=16.666/r;let a="{\n";for(let t=0;t<=1;t+=c){const r=e+(n-e)*l(t);a+=100*t+`%{${i(r,1-r)}}\n`}const u=a+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${o}`,m=p(t);j.add(m);const h=m.__svelte_stylesheet||(m.__svelte_stylesheet=y(t).sheet),d=m.__svelte_rules||(m.__svelte_rules={});d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${r}ms linear ${s}ms 1 both`,S+=1,f}(n,0,1,s,r,l,g,f++)),d(0,1);const v=a()+r,x=v+s;o&&o.abort(),u=!0,L((()=>Q(n,!0,"start"))),o=h((t=>{if(u){if(t>=x)return d(1,0),Q(n,!0,"end"),m(),u=!1;if(t>=v){const e=l((t-v)/s);d(e,1-e)}}return u}))}let g=!1;return{start(){g||(g=!0,N(n),l(c)?(c=c(),(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then(d)):d())},invalidate(){g=!1},end(){u&&(m(),u=!1)}}}function nt(t,e){-1===t.$$.dirty[0]&&(P.push(t),B||(B=!0,q.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function rt(e,i,o,c,a,u,f,m=[-1]){const h=D;O(e);const d=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:r(),dirty:m,skip_bound:!1,root:i.target||h.$$.root};f&&f(d.root);let p=!1;if(d.ctx=o?o(e,i.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&nt(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);d.fragment&&d.fragment.l(t),t.forEach(v)}else d.fragment&&d.fragment.c();i.intro&&Y(e.$$.fragment),function(t,e,r,i){const{fragment:o,on_mount:c,on_destroy:a,after_update:u}=t.$$;o&&o.m(e,r),i||L((()=>{const e=c.map(n).filter(l);a?a.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(L)}(e,i.target,i.anchor,i.customElement),H()}O(h)}const st=[];class lt{constructor(t,e){this.hour=t,this.minute=e,this.minutezero=!1,this.hourzero=!1,this.zero="",this.zero2="",this.minute=e,this.alarm=0,this.alarmIsActive=!0}activateAlarm(){this.alarmIsActive=!0}deactivateAlarm(){this.alarmIsActive=!1}tick(){this.minutezero=!1,this.hourzero=!1,this.zero="",this.zero2="",this.hour==this.hour2&&this.minute==this.minute2&&this.alarmIsActive&&console.log("Alarm!!!"),59==this.minute?(this.hour++,this.minute=0):this.minute++,24==this.hour&&(this.hour=0,this.minute=0),this.minute<10&&(this.minutezero=!0),this.hour<10&&(this.hourzero=!0),this.minutezero&&(this.zero="0"),this.hourzero&&(this.zero2="0")}get time(){return this.zero2+this.hour+":"+this.zero+this.minute}setAlarm(t,e){this.hour2=t,this.minute2=e}}function it(t){const e=t-1;return e*e*e+1}function ot(t,{delay:e=0,duration:n=400,easing:r=it,x:s=0,y:l=0,opacity:i=0}={}){const o=getComputedStyle(t),c=+o.opacity,a="none"===o.transform?"":o.transform,u=c*(1-i);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*s}px, ${(1-t)*l}px);\n\t\t\topacity: ${c-u*e}`}}function ct(t){return"[object Date]"===Object.prototype.toString.call(t)}function at(t,e,n,r){if("number"==typeof n||ct(n)){const s=r-n,l=(n-e)/(t.dt||1/60),i=(l+(t.opts.stiffness*s-t.opts.damping*l)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(s)<t.opts.precision?r:(t.settled=!1,ct(n)?new Date(n.getTime()+i):n+i)}if(Array.isArray(n))return n.map(((s,l)=>at(t,e[l],n[l],r[l])));if("object"==typeof n){const s={};for(const l in n)s[l]=at(t,e[l],n[l],r[l]);return s}throw new Error(`Cannot spring ${typeof n} values`)}function ut(e,n={}){const r=function(e,n=t){let r;const s=new Set;function l(t){if(i(e,t)&&(e=t,r)){const t=!st.length;for(const t of s)t[1](),st.push(t,e);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:l,update:function(t){l(t(e))},subscribe:function(i,o=t){const c=[i,o];return s.add(c),1===s.size&&(r=n(l)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}(e),{stiffness:s=.15,damping:l=.8,precision:o=.01}=n;let c,u,f,m=e,d=e,p=1,y=0,g=!1;function v(t,n={}){d=t;const s=f={};if(null==e||n.hard||x.stiffness>=1&&x.damping>=1)return g=!0,c=a(),m=t,r.set(e=d),Promise.resolve();if(n.soft){const t=!0===n.soft?.5:+n.soft;y=1/(60*t),p=0}return u||(c=a(),g=!1,u=h((t=>{if(g)return g=!1,u=null,!1;p=Math.min(p+y,1);const n={inv_mass:p,opts:x,settled:!0,dt:60*(t-c)/1e3},s=at(n,m,e,d);return c=t,m=e,r.set(e=s),n.settled&&(u=null),!n.settled}))),new Promise((t=>{u.promise.then((()=>{s===f&&t()}))}))}const x={set:v,update:(t,n)=>v(t(d,e),n),subscribe:r.subscribe,stiffness:s,damping:l,precision:o};return x}function ft(t,e,n){const r=t.slice();return r[12]=e[n],r}function mt(t,e,n){const r=t.slice();return r[15]=e[n],r}function ht(t,e,n){const r=t.slice();return r[18]=e[n],r}function dt(t,e,n){const r=t.slice();return r[18]=e[n],r}function pt(t,e,n){const r=t.slice();return r[18]=e[n],r}function yt(t,e,n){const r=t.slice();return r[18]=e[n],r}function gt(e){let n,r,s;return{c(){n=b("line"),z(n,"x1",r=0+5*e[18]),z(n,"y1","210"),z(n,"x2",s=0+5*e[18]),z(n,"y2","220"),C(n,"stroke-width","1"),C(n,"stroke","black")},m(t,e){g(t,n,e)},p:t,d(t){t&&v(n)}}}function vt(e){let n,r,s;return{c(){n=b("line"),z(n,"x1",r=0+25*e[18]),z(n,"y1","208"),z(n,"x2",s=0+25*e[18]),z(n,"y2","222"),C(n,"stroke-width","2"),C(n,"stroke","black")},m(t,e){g(t,n,e)},p:t,d(t){t&&v(n)}}}function xt(e){let n,r,s;return{c(){n=b("line"),z(n,"x1","-20"),z(n,"y1",r=200-7*e[18]),z(n,"x2","-10"),z(n,"y2",s=200-7*e[18]),C(n,"stroke-width","1"),C(n,"stroke","black")},m(t,e){g(t,n,e)},p:t,d(t){t&&v(n)}}}function $t(e){let n,r,s;return{c(){n=b("line"),z(n,"x1","-22"),z(n,"y1",r=200-21*e[18]),z(n,"x2","-8"),z(n,"y2",s=200-21*e[18]),C(n,"stroke-width","2"),C(n,"stroke","black")},m(t,e){g(t,n,e)},p:t,d(t){t&&v(n)}}}function bt(e){let n,r,s,l=e[1].hour+"";return{c(){n=$("span"),r=k(l),z(n,"class","svelte-14irc54")},m(t,e){g(t,n,e),d(n,r)},p(t,e){2&e&&l!==(l=t[1].hour+"")&&E(r,l)},i(t){s||L((()=>{s=et(n,ot,{y:-20}),s.start()}))},o:t,d(t){t&&v(n)}}}function kt(e){let n,r,s,l=e[1].minute+"";return{c(){n=$("span"),r=k(l),z(n,"class","svelte-14irc54")},m(t,e){g(t,n,e),d(n,r)},p(t,e){2&e&&l!==(l=t[1].minute+"")&&E(r,l)},i(t){s||L((()=>{s=et(n,ot,{y:-20}),s.start()}))},o:t,d(t){t&&v(n)}}}function _t(t){let e,n;return{c(){e=b("line"),z(e,"class","minor svelte-14irc54"),z(e,"y1","42"),z(e,"y2","45"),z(e,"transform",n="rotate("+6*(t[12]+t[15])+")")},m(t,n){g(t,e,n)},d(t){t&&v(e)}}}function wt(e){let n,r,s,l=[1,2,3,4],i=[];for(let t=0;t<4;t+=1)i[t]=_t(mt(e,l,t));return{c(){n=b("line");for(let t=0;t<4;t+=1)i[t].c();s=w(),z(n,"class","major svelte-14irc54"),z(n,"y1","40"),z(n,"y2","45"),z(n,"transform",r="rotate("+30*e[12]+")")},m(t,e){g(t,n,e);for(let n=0;n<4;n+=1)i[n].m(t,e);g(t,s,e)},p:t,d(t){t&&v(n),x(i,t),t&&v(s)}}}function At(t){let e;return{c(){e=$("script"),e.textContent='alert("Detta är en certifierad alarm händelse");'},m(t,n){g(t,e,n)},d(t){t&&v(e)}}}function zt(t){let e;return{c(){e=$("script"),e.textContent='alert("Detta är en certifierad alarm händelse");'},m(t,n){g(t,e,n)},d(t){t&&v(e)}}}function Et(t){let e;return{c(){e=$("script"),e.textContent='alert("Detta är en certifierad alarm händelse");'},m(t,n){g(t,e,n)},d(t){t&&v(e)}}}function It(e){let n,r,l,o,c,a,u,f,m,h,p,y,E,j,D,S,N,O,P,R,M,T,q,B,L,F,G,H,J,K,Q,U,V,tt,et,nt,rt,st,lt,it,ot,ct,at,ut,mt,_t,It,Ct,jt,Dt,St,Nt,Ot,Pt,Rt,Mt,Tt,qt,Bt,Lt,Ft,Gt,Ht,Jt,Kt,Qt,Ut,Vt,Wt,Xt,Yt,Zt,te,ee,ne,re,se,le,ie,oe,ce,ae,ue,fe,me,he,de,pe,ye,ge=e[1].hour,ve=e[1].minute,xe=[...Array(61).keys()],$e=[];for(let t=0;t<xe.length;t+=1)$e[t]=gt(yt(e,xe,t));let be=[...Array(13).keys()],ke=[];for(let t=0;t<be.length;t+=1)ke[t]=vt(pt(e,be,t));let _e=[...Array(24).keys()],we=[];for(let t=0;t<_e.length;t+=1)we[t]=xt(dt(e,_e,t));let Ae=[...Array(9).keys()],ze=[];for(let t=0;t<Ae.length;t+=1)ze[t]=$t(ht(e,Ae,t));let Ee=bt(e),Ie=kt(e),Ce=[0,5,10,15,20,25,30,35,40,45,50,55],je=[];for(let t=0;t<12;t+=1)je[t]=wt(ft(e,Ce,t));let De=e[0].time==e[0].alarm&&At(),Se=e[1].time==e[1].alarm&&zt(),Ne=e[2].time==e[2].alarm&&Et();return{c(){n=$("main"),r=$("div"),l=$("div"),o=$("div"),c=b("svg");for(let t=0;t<$e.length;t+=1)$e[t].c();a=w();for(let t=0;t<ke.length;t+=1)ke[t].c();u=w();for(let t=0;t<we.length;t+=1)we[t].c();f=w();for(let t=0;t<ze.length;t+=1)ze[t].c();m=b("text"),h=k("0"),p=b("text"),y=k("5"),E=b("text"),j=k("10"),D=b("text"),S=k("15"),N=b("text"),O=k("20"),P=b("text"),R=k("25"),M=b("text"),T=k("30"),q=b("text"),B=k("35"),L=b("text"),F=k("40"),G=b("text"),H=k("45"),J=b("text"),K=k("50"),Q=b("text"),U=k("55"),V=b("text"),tt=k("60"),et=b("text"),nt=k("0"),rt=b("text"),st=k("3"),lt=b("text"),it=k("6"),ot=b("text"),ct=k("9"),at=b("text"),ut=k("12"),mt=b("text"),_t=k("15"),It=b("text"),Ct=k("18"),jt=b("text"),Dt=k("21"),St=b("text"),Nt=k("24"),Ot=b("line"),Pt=b("line"),Rt=b("svg"),Mt=b("polygon"),Tt=b("polygon"),qt=b("rect"),Bt=_(),Lt=$("div"),Ft=$("input"),Gt=_(),Ht=$("div"),Jt=$("h2"),Kt=$("div"),Ee.c(),Qt=_(),Ut=$("span"),Ut.textContent=":",Vt=_(),Ie.c(),Wt=_(),Xt=$("div"),Yt=$("input"),Zt=_(),te=$("div"),ee=$("h3"),ne=b("svg"),re=b("circle");for(let t=0;t<12;t+=1)je[t].c();se=b("line"),ie=b("g"),oe=b("line"),ae=_(),ue=$("div"),fe=$("input"),me=_(),De&&De.c(),he=_(),Se&&Se.c(),de=_(),Ne&&Ne.c(),z(m,"x","-5"),z(m,"y","240"),z(m,"class","small svelte-14irc54"),z(p,"x","20"),z(p,"y","240"),z(p,"class","small svelte-14irc54"),z(E,"x","40"),z(E,"y","240"),z(E,"class","small svelte-14irc54"),z(D,"x","65"),z(D,"y","240"),z(D,"class","small svelte-14irc54"),z(N,"x","90"),z(N,"y","240"),z(N,"class","small svelte-14irc54"),z(P,"x","115"),z(P,"y","240"),z(P,"class","small svelte-14irc54"),z(M,"x","140"),z(M,"y","240"),z(M,"class","small svelte-14irc54"),z(q,"x","165"),z(q,"y","240"),z(q,"class","small svelte-14irc54"),z(L,"x","190"),z(L,"y","240"),z(L,"class","small svelte-14irc54"),z(G,"x","215"),z(G,"y","240"),z(G,"class","small svelte-14irc54"),z(J,"x","240"),z(J,"y","240"),z(J,"class","small svelte-14irc54"),z(Q,"x","265"),z(Q,"y","240"),z(Q,"class","small svelte-14irc54"),z(V,"x","290"),z(V,"y","240"),z(V,"class","small svelte-14irc54"),z(et,"x","-35"),z(et,"y","205"),z(et,"class","small svelte-14irc54"),z(rt,"x","-35"),z(rt,"y","184"),z(rt,"class","small svelte-14irc54"),z(lt,"x","-35"),z(lt,"y","163"),z(lt,"class","small svelte-14irc54"),z(ot,"x","-35"),z(ot,"y","142"),z(ot,"class","small svelte-14irc54"),z(at,"x","-43"),z(at,"y","121"),z(at,"class","small svelte-14irc54"),z(mt,"x","-43"),z(mt,"y","100"),z(mt,"class","small svelte-14irc54"),z(It,"x","-43"),z(It,"y","79"),z(It,"class","small svelte-14irc54"),z(jt,"x","-43"),z(jt,"y","58"),z(jt,"class","small svelte-14irc54"),z(St,"x","-43"),z(St,"y","38"),z(St,"class","small svelte-14irc54"),z(Ot,"x1","-15"),z(Ot,"y1","215"),z(Ot,"x2","320"),z(Ot,"y2","215"),C(Ot,"stroke-width","3"),C(Ot,"stroke","black"),z(Pt,"x1","-15"),z(Pt,"y1","25"),z(Pt,"x2","-15"),z(Pt,"y2","215"),C(Pt,"stroke-width","3"),C(Pt,"stroke","black"),z(Mt,"points","325,215 305,222 305,208"),C(Mt,"fill","black"),C(Mt,"stroke","black"),C(Mt,"stroke-width","1"),z(Tt,"points","-15,5 -22,25 -8,25"),C(Tt,"fill","black"),C(Tt,"stroke","black"),C(Tt,"stroke-width","1"),z(Rt,"height","210"),z(Rt,"width","500"),z(Rt,"class","svelte-14irc54"),z(qt,"x","0"),z(qt,"y","0"),z(qt,"width",e[3]),z(qt,"height",e[4]),z(qt,"transform","scale (1, -1)"),z(qt,"transform-origin","center"),C(qt,"fill","rgb(150,150,150)"),C(qt,"stroke-width","3"),C(qt,"stroke","rgb(0,0,0)"),z(c,"width","300"),z(c,"height","200"),z(c,"class","svelte-14irc54"),z(o,"class","flex svelte-14irc54"),z(Ft,"type","time"),z(Lt,"class","grid-box svelte-14irc54"),z(l,"class","grid-item svelte-14irc54"),z(Ut,"class","svelte-14irc54"),z(Jt,"class","svelte-14irc54"),z(Yt,"type","time"),z(Xt,"class","grid-box1 svelte-14irc54"),z(Ht,"class","grid-item svelte-14irc54"),z(re,"class","clock-face svelte-14irc54"),z(re,"r","48"),z(se,"class","hour svelte-14irc54"),z(se,"y1","33"),z(se,"y2","38"),z(se,"transform",le="rotate("+(.5*e[5]-180)+")"),z(oe,"class","minute svelte-14irc54"),z(oe,"y1","30"),z(oe,"y2","38"),z(ie,"transform",ce="rotate("+(6*e[5]-180)+")"),z(ne,"viewBox","0 -50 100 100"),z(ne,"class","svelte-14irc54"),z(ee,"class","svelte-14irc54"),z(fe,"type","time"),z(ue,"class","grid-box2 svelte-14irc54"),z(te,"class","grid-item svelte-14irc54"),z(r,"class","grid-container svelte-14irc54"),z(n,"class","svelte-14irc54")},m(t,s){g(t,n,s),d(n,r),d(r,l),d(l,o),d(o,c);for(let t=0;t<$e.length;t+=1)$e[t].m(c,null);d(c,a);for(let t=0;t<ke.length;t+=1)ke[t].m(c,null);d(c,u);for(let t=0;t<we.length;t+=1)we[t].m(c,null);d(c,f);for(let t=0;t<ze.length;t+=1)ze[t].m(c,null);d(c,m),d(m,h),d(c,p),d(p,y),d(c,E),d(E,j),d(c,D),d(D,S),d(c,N),d(N,O),d(c,P),d(P,R),d(c,M),d(M,T),d(c,q),d(q,B),d(c,L),d(L,F),d(c,G),d(G,H),d(c,J),d(J,K),d(c,Q),d(Q,U),d(c,V),d(V,tt),d(c,et),d(et,nt),d(c,rt),d(rt,st),d(c,lt),d(lt,it),d(c,ot),d(ot,ct),d(c,at),d(at,ut),d(c,mt),d(mt,_t),d(c,It),d(It,Ct),d(c,jt),d(jt,Dt),d(c,St),d(St,Nt),d(c,Ot),d(c,Pt),d(c,Rt),d(Rt,Mt),d(Rt,Tt),d(c,qt),d(l,Bt),d(l,Lt),d(Lt,Ft),I(Ft,e[0].alarm),d(r,Gt),d(r,Ht),d(Ht,Jt),d(Jt,Kt),Ee.m(Kt,null),d(Kt,Qt),d(Kt,Ut),d(Kt,Vt),Ie.m(Kt,null),d(Ht,Wt),d(Ht,Xt),d(Xt,Yt),I(Yt,e[0].alarm),d(r,Zt),d(r,te),d(te,ee),d(ee,ne),d(ne,re);for(let t=0;t<12;t+=1)je[t].m(ne,null);d(ne,se),d(ne,ie),d(ie,oe),d(te,ae),d(te,ue),d(ue,fe),I(fe,e[0].alarm),d(n,me),De&&De.m(n,null),d(n,he),Se&&Se.m(n,null),d(n,de),Ne&&Ne.m(n,null),pe||(ye=[A(Ft,"input",e[7]),A(Yt,"input",e[8]),A(fe,"input",e[9])],pe=!0)},p(e,[r]){if(0&r){let t;for(xe=[...Array(61).keys()],t=0;t<xe.length;t+=1){const n=yt(e,xe,t);$e[t]?$e[t].p(n,r):($e[t]=gt(n),$e[t].c(),$e[t].m(c,a))}for(;t<$e.length;t+=1)$e[t].d(1);$e.length=xe.length}if(0&r){let t;for(be=[...Array(13).keys()],t=0;t<be.length;t+=1){const n=pt(e,be,t);ke[t]?ke[t].p(n,r):(ke[t]=vt(n),ke[t].c(),ke[t].m(c,u))}for(;t<ke.length;t+=1)ke[t].d(1);ke.length=be.length}if(0&r){let t;for(_e=[...Array(24).keys()],t=0;t<_e.length;t+=1){const n=dt(e,_e,t);we[t]?we[t].p(n,r):(we[t]=xt(n),we[t].c(),we[t].m(c,f))}for(;t<we.length;t+=1)we[t].d(1);we.length=_e.length}if(0&r){let t;for(Ae=[...Array(9).keys()],t=0;t<Ae.length;t+=1){const n=ht(e,Ae,t);ze[t]?ze[t].p(n,r):(ze[t]=$t(n),ze[t].c(),ze[t].m(c,m))}for(;t<ze.length;t+=1)ze[t].d(1);ze.length=Ae.length}8&r&&z(qt,"width",e[3]),16&r&&z(qt,"height",e[4]),1&r&&I(Ft,e[0].alarm),2&r&&i(ge,ge=e[1].hour)?(W(),Z(Ee,1,1,t),X(),Ee=bt(e),Ee.c(),Y(Ee),Ee.m(Kt,Qt)):Ee.p(e,r),2&r&&i(ve,ve=e[1].minute)?(W(),Z(Ie,1,1,t),X(),Ie=kt(e),Ie.c(),Y(Ie),Ie.m(Kt,null)):Ie.p(e,r),1&r&&I(Yt,e[0].alarm),32&r&&le!==(le="rotate("+(.5*e[5]-180)+")")&&z(se,"transform",le),32&r&&ce!==(ce="rotate("+(6*e[5]-180)+")")&&z(ie,"transform",ce),1&r&&I(fe,e[0].alarm),e[0].time==e[0].alarm?De||(De=At(),De.c(),De.m(n,he)):De&&(De.d(1),De=null),e[1].time==e[1].alarm?Se||(Se=zt(),Se.c(),Se.m(n,de)):Se&&(Se.d(1),Se=null),e[2].time==e[2].alarm?Ne||(Ne=Et(),Ne.c(),Ne.m(n,null)):Ne&&(Ne.d(1),Ne=null)},i(t){Y(Ee),Y(Ie)},o(t){Z(Ee),Z(Ie)},d(t){t&&v(n),x($e,t),x(ke,t),x(we,t),x(ze,t),Ee.d(t),Ie.d(t),x(je,t),De&&De.d(),Se&&Se.d(),Ne&&Ne.d(),pe=!1,s(ye)}}}function Ct(t,e,n){let r,s=new lt(10,44);setInterval((()=>{s.tick(),n(0,s)}),1e3);let l=new lt(10,10);setInterval((()=>{l.tick(),n(1,l)}),1e3);let i=new lt(5,10);setInterval((()=>{i.tick(),n(2,i)}),1e3);let c=ut(60*parseInt(i.hour)+parseInt(i.minute));o(t,c,(t=>n(5,r=t))),setInterval((()=>{i.tick(),c.set(60*parseInt(i.hour)+parseInt(i.minute))}),50),setInterval((function(){n(3,a=5*s.minute+1)}),50),setInterval((function(){n(4,u=7*s.hour+1)}),50);var a="",u="";return[s,l,i,a,u,r,c,function(){s.alarm=this.value,n(0,s)},function(){s.alarm=this.value,n(0,s)},function(){s.alarm=this.value,n(0,s)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),rt(this,t,Ct,It,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
