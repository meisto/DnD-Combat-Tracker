import{s as A,r as M,b as O,n as S}from"../chunks/scheduler.2u-IS242.js";import{S as U,i as j,e as g,s as y,o as z,c as b,g as B,d as E,b as x,p as G,h as u,j as k,k as w,q as K,m as N,t as P,r as J,u as Q,n as V,v as T,w as C,l as p,x as R}from"../chunks/index.6e14F-yC.js";import{e as F}from"../chunks/each.osoN_7aC.js";import{F as W}from"../chunks/FancyBox.tPH7n3gv.js";function q(i,t,o){const s=i.slice();return s[8]=t[o],s[10]=o,s}function H(i,t,o){const s=i.slice();return s[11]=t[o],s[13]=o,s}function X(i){let t,o,s=i[11].name+"",l,n,e,d=i[11].weight+"",_,m,f,h=i[11].amount+"",a;return{c(){t=g("tr"),o=g("td"),l=T(s),n=y(),e=g("td"),_=T(d),m=y(),f=g("td"),a=T(h),this.h()},l(c){t=b(c,"TR",{});var r=x(t);o=b(r,"TD",{class:!0});var v=x(o);l=C(v,s),v.forEach(u),n=E(r),e=b(r,"TD",{class:!0});var D=x(e);_=C(D,d),D.forEach(u),m=E(r),f=b(r,"TD",{class:!0});var $=x(f);a=C($,h),$.forEach(u),r.forEach(u),this.h()},h(){k(o,"class","p-1 pl-2"),k(e,"class","w-2 px-1 pr-8"),k(f,"class","w-2 px-1 pr-8")},m(c,r){w(c,t,r),p(t,o),p(o,l),p(t,n),p(t,e),p(e,_),p(t,m),p(t,f),p(f,a)},p:S,d(c){c&&u(t)}}}function Y(i){let t,o,s=i[11].name+"",l,n,e,d=i[11].weight+"",_,m,f,h=i[11].amount+"",a;return{c(){t=g("tr"),o=g("td"),l=T(s),n=y(),e=g("td"),_=T(d),m=y(),f=g("td"),a=T(h),this.h()},l(c){t=b(c,"TR",{class:!0});var r=x(t);o=b(r,"TD",{class:!0});var v=x(o);l=C(v,s),v.forEach(u),n=E(r),e=b(r,"TD",{class:!0});var D=x(e);_=C(D,d),D.forEach(u),m=E(r),f=b(r,"TD",{class:!0});var $=x(f);a=C($,h),$.forEach(u),r.forEach(u),this.h()},h(){k(o,"class","p-1 pl-2"),k(e,"class","w-2 px-1 pr-8"),k(f,"class","w-2 px-1 pr-8"),k(t,"class","bg-gradient-to-r from-gray-500/80")},m(c,r){w(c,t,r),p(t,o),p(o,l),p(t,n),p(t,e),p(e,_),p(t,m),p(t,f),p(f,a),i[6](t)},p:S,d(c){c&&u(t),i[6](null)}}}function I(i){let t;function o(n,e){return n[10]==n[2]&&n[13]==n[0]?Y:X}let s=o(i),l=s(i);return{c(){l.c(),t=R()},l(n){l.l(n),t=R()},m(n,e){l.m(n,e),w(n,t,e)},p(n,e){s===(s=o(n))&&l?l.p(n,e):(l.d(1),l=s(n),l&&(l.c(),l.m(t.parentNode,t)))},d(n){n&&u(t),l.d(n)}}}function L(i){let t,o=i[8].name+"",s,l,n,e,d='<th class="border-8 border-transparent text-left">Kategorie</th> <th class="border-8 border-transparent text-left">Gewicht</th> <th class="border-8 border-transparent text-left">Anzahl</th>',_,m,f=F(i[8].elements),h=[];for(let a=0;a<f.length;a+=1)h[a]=I(H(i,f,a));return{c(){t=g("h1"),s=T(o),l=y(),n=g("table"),e=g("tr"),e.innerHTML=d,_=y();for(let a=0;a<h.length;a+=1)h[a].c();m=y(),this.h()},l(a){t=b(a,"H1",{class:!0});var c=x(t);s=C(c,o),c.forEach(u),l=E(a),n=b(a,"TABLE",{class:!0});var r=x(n);e=b(r,"TR",{"data-svelte-h":!0}),B(e)!=="svelte-1vicwqk"&&(e.innerHTML=d),_=E(r);for(let v=0;v<h.length;v+=1)h[v].l(r);m=E(r),r.forEach(u),this.h()},h(){k(t,"class","w-full text-center font-Rakkas text-xl font-bold"),k(n,"class","mb-8 w-full")},m(a,c){w(a,t,c),p(t,s),w(a,l,c),w(a,n,c),p(n,e),p(n,_);for(let r=0;r<h.length;r+=1)h[r]&&h[r].m(n,null);p(n,m)},p(a,c){if(c&15){f=F(a[8].elements);let r;for(r=0;r<f.length;r+=1){const v=H(a,f,r);h[r]?h[r].p(v,c):(h[r]=I(v),h[r].c(),h[r].m(n,m))}for(;r<h.length;r+=1)h[r].d(1);h.length=f.length}},d(a){a&&(u(t),u(l),u(n)),V(h,a)}}}function Z(i){let t,o=F(i[3]),s=[];for(let l=0;l<o.length;l+=1)s[l]=L(q(i,o,l));return{c(){t=g("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){t=b(l,"DIV",{class:!0});var n=x(t);for(let e=0;e<s.length;e+=1)s[e].l(n);n.forEach(u),this.h()},h(){k(t,"class","max-h-96 overflow-scroll p-2")},m(l,n){w(l,t,n);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null)},p(l,n){if(n&15){o=F(l[3]);let e;for(e=0;e<o.length;e+=1){const d=q(l,o,e);s[e]?s[e].p(d,n):(s[e]=L(d),s[e].c(),s[e].m(t,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=o.length}},d(l){l&&u(t),V(s,l)}}}function tt(i){let t,o="Next Element",s,l,n="Next Category",e,d,_,m,f,h;return _=new W({props:{$$slots:{default:[Z]},$$scope:{ctx:i}}}),{c(){t=g("button"),t.textContent=o,s=y(),l=g("button"),l.textContent=n,e=y(),d=g("div"),z(_.$$.fragment),this.h()},l(a){t=b(a,"BUTTON",{"data-svelte-h":!0}),B(t)!=="svelte-18lmr60"&&(t.textContent=o),s=E(a),l=b(a,"BUTTON",{"data-svelte-h":!0}),B(l)!=="svelte-3o2qeg"&&(l.textContent=n),e=E(a),d=b(a,"DIV",{class:!0});var c=x(d);G(_.$$.fragment,c),c.forEach(u),this.h()},h(){k(d,"class","bg-gray-0 h-full w-full")},m(a,c){w(a,t,c),w(a,s,c),w(a,l,c),w(a,e,c),w(a,d,c),K(_,d,null),m=!0,f||(h=[N(t,"click",i[5]),N(l,"click",i[4])],f=!0)},p(a,[c]){const r={};c&16391&&(r.$$scope={dirty:c,ctx:a}),_.$set(r)},i(a){m||(P(_.$$.fragment,a),m=!0)},o(a){J(_.$$.fragment,a),m=!1},d(a){a&&(u(t),u(s),u(l),u(e),u(d)),Q(_),f=!1,M(h)}}}function et(i,t,o){const s=[{name:"First",weight:12.3,amount:12},{name:"Second",weight:.1,amount:8},{name:"Third",weight:3.09,amount:99},{name:"Fourth",weight:123,amount:1},{name:"Fifth",weight:12,amount:2}],l=[{name:"Bewaffnung",elements:s},{name:"Rüstung",elements:s},{name:"Category 3",elements:s},{name:"Category 4",elements:s},{name:"Category 5",elements:s}];let n=0,e=0;const d=()=>{n+1>=l.length?o(2,n=0):o(2,n+=1),o(0,e=0)},_=()=>{e+1>=l[n].elements.length?o(0,e=0):o(0,e+=1)};let m;function f(h){O[h?"unshift":"push"](()=>{m=h,o(1,m)})}return i.$$.update=()=>{i.$$.dirty&3&&(console.log(e),m&&m.scrollIntoView({behavior:"smooth"}))},[e,m,n,l,d,_,f]}class rt extends U{constructor(t){super(),j(this,t,et,tt,A,{})}}export{rt as component};