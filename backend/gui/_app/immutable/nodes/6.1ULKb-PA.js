import{s as Be,n as te,r as Ee,c as _e}from"../chunks/scheduler.2u-IS242.js";import{S as Re,i as Te,e as c,s as M,c as f,b as g,g as $,d as A,h as d,j as h,k as F,l as a,m as Q,A as he,n as pe,v as J,w as L,C as le,y as G,J as ne}from"../chunks/index.6e14F-yC.js";import{e as ee}from"../chunks/each.osoN_7aC.js";import{g as ke}from"../chunks/entry.ugwizDdW.js";import{g as me,f as ae,e as we,p as De}from"../chunks/utils.6ZWUAGcy.js";const Ce="http://localhost:8070/api",Ie=async(t,e=null)=>fetch(Ce+t,{method:"POST",body:e!=null?JSON.stringify(e):null,headers:{"Content-Type":"application/json",Accept:"application/json"}}),Ne=async t=>{const e=l=>{let n=l.dexBonus+l.additionalBonus;return l.d20Roll!=null&&(n+=l.d20Roll),{id:l.id,value:n}};return Ie("/characters/set_initiative",t.map(e))};function ve(t,e,l){const n=t.slice();return n[10]=e[l],n[11]=e,n[12]=l,n}function be(t,e,l){const n=t.slice();return n[13]=e[l],n[14]=e,n[15]=l,n}function Oe(t){let e;return{c(){e=J("-")},l(l){e=L(l,"-")},m(l,n){F(l,e,n)},p:te,d(l){l&&d(e)}}}function Ve(t){let e,l=t[13].d20Roll+t[13].dexBonus+t[13].additionalBonus+"",n;return{c(){e=J("="),n=J(l)},l(o){e=L(o,"="),n=L(o,l)},m(o,b){F(o,e,b),F(o,n,b)},p(o,b){b&1&&l!==(l=o[13].d20Roll+o[13].dexBonus+o[13].additionalBonus+"")&&G(n,l)},d(o){o&&(d(e),d(n))}}}function ge(t){let e,l,n=t[13].name+"",o,b,i,p,N,D,R=ae(t[13].dexBonus)+"",S,C,r,y,m,j;function _(){t[4].call(p,t[14],t[15])}function V(T,B){return T[13].d20Roll!=null?Ve:Oe}let P=V(t),I=P(t);return{c(){e=c("tr"),l=c("td"),o=J(n),b=M(),i=c("td"),p=c("input"),N=M(),D=c("td"),S=J(R),C=M(),r=c("td"),I.c(),y=M(),this.h()},l(T){e=f(T,"TR",{});var B=g(e);l=f(B,"TD",{class:!0});var z=g(l);o=L(z,n),z.forEach(d),b=A(B),i=f(B,"TD",{class:!0});var k=g(i);p=f(k,"INPUT",{type:!0,class:!0}),k.forEach(d),N=A(B),D=f(B,"TD",{class:!0});var E=g(D);S=L(E,R),E.forEach(d),C=A(B),r=f(B,"TD",{class:!0});var v=g(r);I.l(v),v.forEach(d),y=A(B),B.forEach(d),this.h()},h(){h(l,"class","w-60 p-2"),h(p,"type","number"),h(p,"class","w-20"),h(i,"class","w-20"),h(D,"class","w-12 text-center font-bold"),h(r,"class","w-20 font-bold")},m(T,B){F(T,e,B),a(e,l),a(l,o),a(e,b),a(e,i),a(i,p),le(p,t[13].d20Roll),a(e,N),a(e,D),a(D,S),a(e,C),a(e,r),I.m(r,null),a(e,y),m||(j=Q(p,"input",_),m=!0)},p(T,B){t=T,B&1&&n!==(n=t[13].name+"")&&G(o,n),B&1&&ne(p.value)!==t[13].d20Roll&&le(p,t[13].d20Roll),B&1&&R!==(R=ae(t[13].dexBonus)+"")&&G(S,R),P===(P=V(t))&&I?I.p(t,B):(I.d(1),I=P(t),I&&(I.c(),I.m(r,null)))},d(T){T&&d(e),I.d(),m=!1,j()}}}function Se(t){let e;return{c(){e=J("-")},l(l){e=L(l,"-")},m(l,n){F(l,e,n)},p:te,d(l){l&&d(e)}}}function je(t){let e,l=t[10].d20Roll+t[10].dexBonus+t[10].additionalBonus+"",n;return{c(){e=J("="),n=J(l)},l(o){e=L(o,"="),n=L(o,l)},m(o,b){F(o,e,b),F(o,n,b)},p(o,b){b&2&&l!==(l=o[10].d20Roll+o[10].dexBonus+o[10].additionalBonus+"")&&G(n,l)},d(o){o&&(d(e),d(n))}}}function ye(t){let e,l,n=t[10].name+"",o,b,i,p=(t[10].d20Roll?t[10].d20Roll:"-")+"",N,D,R,S=ae(t[10].dexBonus)+"",C,r,y,m,j,_,V,P,I;function T(){t[5].call(m,t[11],t[12])}function B(E,v){return E[10].d20Roll!=null?je:Se}let z=B(t),k=z(t);return{c(){e=c("tr"),l=c("td"),o=J(n),b=M(),i=c("td"),N=J(p),D=M(),R=c("td"),C=J(S),r=M(),y=c("td"),m=c("input"),j=M(),_=c("td"),k.c(),V=M(),this.h()},l(E){e=f(E,"TR",{});var v=g(e);l=f(v,"TD",{class:!0});var K=g(l);o=L(K,n),K.forEach(d),b=A(v),i=f(v,"TD",{class:!0});var W=g(i);N=L(W,p),W.forEach(d),D=A(v),R=f(v,"TD",{class:!0});var X=g(R);C=L(X,S),X.forEach(d),r=A(v),y=f(v,"TD",{});var w=g(y);m=f(w,"INPUT",{type:!0,class:!0}),w.forEach(d),j=A(v),_=f(v,"TD",{class:!0});var Y=g(_);k.l(Y),Y.forEach(d),V=A(v),v.forEach(d),this.h()},h(){h(l,"class","w-60 p-2"),h(i,"class","w-12 text-center"),h(R,"class","w-12 text-center font-bold"),h(m,"type","number"),h(m,"class","w-20"),h(_,"class","w-12 text-center font-bold")},m(E,v){F(E,e,v),a(e,l),a(l,o),a(e,b),a(e,i),a(i,N),a(e,D),a(e,R),a(R,C),a(e,r),a(e,y),a(y,m),le(m,t[10].additionalBonus),a(e,j),a(e,_),k.m(_,null),a(e,V),P||(I=Q(m,"input",T),P=!0)},p(E,v){t=E,v&2&&n!==(n=t[10].name+"")&&G(o,n),v&2&&p!==(p=(t[10].d20Roll?t[10].d20Roll:"-")+"")&&G(N,p),v&2&&S!==(S=ae(t[10].dexBonus)+"")&&G(C,S),v&2&&ne(m.value)!==t[10].additionalBonus&&le(m,t[10].additionalBonus),z===(z=B(t))&&k?k.p(t,v):(k.d(1),k=z(t),k&&(k.c(),k.m(_,null)))},d(E){E&&d(e),k.d(),P=!1,I()}}}function Me(t){let e,l,n,o="Initiative",b,i,p,N,D,R,S,C,r,y,m,j,_,V,P="Roll Individually",I,T,B="Roll by Creature Type",z,k,E,v="Submit",K,W,X=ee(t[0]),w=[];for(let u=0;u<X.length;u+=1)w[u]=ge(be(t,X,u));let Y=ee(t[1]),O=[];for(let u=0;u<Y.length;u+=1)O[u]=ye(ve(t,Y,u));return{c(){e=c("div"),l=c("div"),n=c("h1"),n.textContent=o,b=M(),i=c("form"),p=c("div"),N=c("div"),D=c("table"),R=c("tbody");for(let u=0;u<w.length;u+=1)w[u].c();S=M(),C=c("div"),r=c("div"),y=c("table"),m=c("tbody");for(let u=0;u<O.length;u+=1)O[u].c();j=M(),_=c("div"),V=c("button"),V.textContent=P,I=M(),T=c("button"),T.textContent=B,z=M(),k=c("div"),E=c("button"),E.textContent=v,this.h()},l(u){e=f(u,"DIV",{class:!0});var q=g(e);l=f(q,"DIV",{class:!0});var s=g(l);n=f(s,"H1",{class:!0,"data-svelte-h":!0}),$(n)!=="svelte-1s7a2ob"&&(n.textContent=o),b=A(s),i=f(s,"FORM",{class:!0});var U=g(i);p=f(U,"DIV",{class:!0});var se=g(p);N=f(se,"DIV",{class:!0});var oe=g(N);D=f(oe,"TABLE",{});var re=g(D);R=f(re,"TBODY",{});var ie=g(R);for(let H=0;H<w.length;H+=1)w[H].l(ie);ie.forEach(d),re.forEach(d),oe.forEach(d),se.forEach(d),S=A(U),C=f(U,"DIV",{class:!0});var Z=g(C);r=f(Z,"DIV",{class:!0});var de=g(r);y=f(de,"TABLE",{});var ue=g(y);m=f(ue,"TBODY",{});var ce=g(m);for(let H=0;H<O.length;H+=1)O[H].l(ce);ce.forEach(d),ue.forEach(d),de.forEach(d),j=A(Z),_=f(Z,"DIV",{class:!0});var x=g(_);V=f(x,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),$(V)!=="svelte-123m0t"&&(V.textContent=P),I=A(x),T=f(x,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),$(T)!=="svelte-1pewzre"&&(T.textContent=B),x.forEach(d),Z.forEach(d),z=A(U),k=f(U,"DIV",{class:!0});var fe=g(k);E=f(fe,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),$(E)!=="svelte-1v3y1wz"&&(E.textContent=v),fe.forEach(d),U.forEach(d),s.forEach(d),q.forEach(d),this.h()},h(){h(n,"class","my-4 w-full text-center text-4xl font-bold"),h(N,"class",""),h(p,"class","flex w-[500px] flex-col gap-1"),h(r,"class","h-96 overflow-scroll"),h(V,"type","button"),h(V,"class","btn"),h(T,"type","button"),h(T,"class","btn"),h(_,"class","flex h-12 w-full flex-row flex-wrap items-center justify-center gap-2"),h(C,"class","flex flex-col gap-1"),h(E,"type","submit"),h(E,"class","btn"),h(k,"class","flex flex-col items-center justify-center lg:col-span-2"),h(i,"class","grid grid-cols-1 gap-6 p-2 lg:grid-cols-2"),h(l,"class","parchment h-fit w-fit rounded-3xl p-2"),h(e,"class","flex h-fit w-screen flex-col items-center justify-center p-2 pt-8 md:mt-0 md:h-screen")},m(u,q){F(u,e,q),a(e,l),a(l,n),a(l,b),a(l,i),a(i,p),a(p,N),a(N,D),a(D,R);for(let s=0;s<w.length;s+=1)w[s]&&w[s].m(R,null);a(i,S),a(i,C),a(C,r),a(r,y),a(y,m);for(let s=0;s<O.length;s+=1)O[s]&&O[s].m(m,null);a(C,j),a(C,_),a(_,V),a(_,I),a(_,T),a(i,z),a(i,k),a(k,E),K||(W=[Q(V,"click",t[6]),Q(T,"click",t[7]),Q(E,"click",he(t[3])),Q(i,"submit",he(t[3]))],K=!0)},p(u,[q]){if(q&1){X=ee(u[0]);let s;for(s=0;s<X.length;s+=1){const U=be(u,X,s);w[s]?w[s].p(U,q):(w[s]=ge(U),w[s].c(),w[s].m(R,null))}for(;s<w.length;s+=1)w[s].d(1);w.length=X.length}if(q&2){Y=ee(u[1]);let s;for(s=0;s<Y.length;s+=1){const U=ve(u,Y,s);O[s]?O[s].p(U,q):(O[s]=ye(U),O[s].c(),O[s].m(m,null))}for(;s<O.length;s+=1)O[s].d(1);O.length=Y.length}},i:te,o:te,d(u){u&&d(e),pe(w,u),pe(O,u),K=!1,Ee(W)}}}function Ae(t,e,l){let n,o;_e(t,we,r=>l(8,n=r)),_e(t,De,r=>l(9,o=r));let b=o.map(r=>({id:0,dexBonus:me(r.DEX),additionalBonus:0,d20Roll:0,individualName:r.name,name:r.name})),i=Array.from(n.values()).map(r=>({id:0,name:r.name,dexBonus:me(r.DEX),additionalBonus:0,individualName:r.name}));function p(r=!1){const y=()=>Math.ceil(Math.random()*20);if(r){new Set([].map(_=>_.general_name));let m=[],j=new Map;for(let _ of i)_.name!=null?(j.has(_.name)||j.set(_.name,y()),_.d20Roll=j.get(_.name),m.push(_)):(_.d20Roll=y(),m.push(_));l(1,i=m)}else l(1,i=i.map(m=>({...m,d20Roll:y()})))}const N=()=>{Ne(b.concat(i)).then(r=>{r.ok?ke("/"):alert("Response not ok.")}).catch(()=>{alert("Error while submitting.")})};function D(r,y){r[y].d20Roll=ne(this.value),l(0,b)}function R(r,y){r[y].additionalBonus=ne(this.value),l(1,i)}return[b,i,p,N,D,R,()=>p(!1),()=>p(!0)]}class Xe extends Re{constructor(e){super(),Te(this,e,Ae,Me,Be,{})}}export{Xe as component};