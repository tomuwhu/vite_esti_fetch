var X=Object.defineProperty;var Y=(e,t,n)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var z=(e,t,n)=>Y(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function E(){}function H(e){return e()}function F(){return Object.create(null)}function x(e){e.forEach(H)}function J(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ee(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function te(e,t,n){e.insertBefore(t,n||null)}function Q(e){e.parentNode&&e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function L(){return p(" ")}function ne(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function K(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function re(e){return Array.from(e.childNodes)}function k(e,t){t=""+t,e.data!==t&&(e.data=t)}function R(e,t){e.value=t??""}let B;function S(e){B=e}const m=[],V=[];let g=[];const G=[],oe=Promise.resolve();let j=!1;function ie(){j||(j=!0,oe.then(W))}function D(e){g.push(e)}const I=new Set;let _=0;function W(){if(_!==0)return;const e=B;do{try{for(;_<m.length;){const t=m[_];_++,S(t),le(t.$$)}}catch(t){throw m.length=0,_=0,t}for(S(null),m.length=0,_=0;V.length;)V.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];I.has(n)||(I.add(n),n())}g.length=0}while(m.length);for(;G.length;)G.pop()();j=!1,I.clear(),S(e)}function le(e){if(e.fragment!==null){e.update(),x(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(D)}}function se(e){const t=[],n=[];g.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),g=t}const ue=new Set;function fe(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function ce(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),D(()=>{const i=e.$$.on_mount.map(H).filter(J);e.$$.on_destroy?e.$$.on_destroy.push(...i):x(i),e.$$.on_mount=[]}),r.forEach(D)}function ae(e,t){const n=e.$$;n.fragment!==null&&(se(n.after_update),x(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function de(e,t){e.$$.dirty[0]===-1&&(m.push(e),ie(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function pe(e,t,n,o,r,i,f=null,$=[-1]){const a=B;S(e);const l=e.$$={fragment:null,ctx:[],props:i,update:E,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(a?a.$$.context:[])),callbacks:F(),dirty:$,skip_bound:!1,root:t.target||a.$$.root};f&&f(l.root);let y=!1;if(l.ctx=n?n(e,t.props||{},(s,b,...v)=>{const w=v.length?v[0]:b;return l.ctx&&r(l.ctx[s],l.ctx[s]=w)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](w),y&&de(e,s)),b}):[],l.update(),y=!0,x(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const s=re(t.target);l.fragment&&l.fragment.l(s),s.forEach(Q)}else l.fragment&&l.fragment.c();t.intro&&fe(e.$$.fragment),ce(e,t.target,t.anchor),W()}S(a)}class he{constructor(){z(this,"$$");z(this,"$$set")}$destroy(){ae(this,1),this.$destroy=E}$on(t,n){if(!J(n))return E;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const _e="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_e);function me(e){let t,n,o=e[0].toLocaleTimeString()+"",r,i,f=e[0].toLocaleDateString()+"",$,a,l,y,s,b,v,w,N=Number(e[1]).toString(2)+"",A,T,U,M,O=Number(e[1]).toString(16).toLocaleUpperCase()+"",C,P,q;return{c(){t=h("main"),n=h("h1"),r=p(o),i=L(),$=p(f),a=L(),l=h("hr"),y=L(),s=h("input"),b=L(),v=h("br"),w=p(`
  2-es számrendszer: `),A=p(N),T=L(),U=h("br"),M=p(`
  16-os számrendszer: `),C=p(O),K(s,"type","text"),K(s,"class","svelte-2gsh97")},m(c,d){te(c,t,d),u(t,n),u(n,r),u(t,i),u(t,$),u(t,a),u(t,l),u(t,y),u(t,s),R(s,e[1]),u(t,b),u(t,v),u(t,w),u(t,A),u(t,T),u(t,U),u(t,M),u(t,C),P||(q=ne(s,"input",e[2]),P=!0)},p(c,[d]){d&1&&o!==(o=c[0].toLocaleTimeString()+"")&&k(r,o),d&1&&f!==(f=c[0].toLocaleDateString()+"")&&k($,f),d&2&&s.value!==c[1]&&R(s,c[1]),d&2&&N!==(N=Number(c[1]).toString(2)+"")&&k(A,N),d&2&&O!==(O=Number(c[1]).toString(16).toLocaleUpperCase()+"")&&k(C,O)},i:E,o:E,d(c){c&&Q(t),P=!1,q()}}}function ge(e,t,n){var o=new Date,r=0;setInterval(()=>n(0,o=new Date),1e3);function i(){r=this.value,n(1,r)}return[o,r,i]}class $e extends he{constructor(t){super(),pe(this,t,ge,me,Z,{})}}new $e({target:document.getElementById("app")});
