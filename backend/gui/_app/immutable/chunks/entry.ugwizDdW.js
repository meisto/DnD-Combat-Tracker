import{t as re}from"./scheduler.2u-IS242.js";import{w as dt}from"./index.Zun0J0fK.js";new URL("sveltekit-internal://");function oe(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function se(t){return t.split("%25").map(decodeURI).join("%25")}function ie(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function st({href:t}){return t.split("#")[0]}const ce=["href","pathname","search","toString","toJSON"];function le(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return s=>(e(s),a[o](s));n();const i=Reflect.get(a,o);return typeof i=="function"?i.bind(a):i}}),enumerable:!0,configurable:!0});for(const a of ce)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const fe="/__data.json",ue=".html__data.json";function de(t){return t.endsWith(".html")?t.replace(/\.html$/,ue):t.replace(/\/$/,"")+fe}function he(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function pe(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Ot=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&V.delete(ht(t)),Ot(t,n));const V=new Map;function ge(t,n){const e=ht(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&V.set(e,{body:a,init:o,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=pe(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function me(t,n,e){if(V.size>0){const r=ht(t,e),a=V.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);V.delete(r)}}return window.fetch(n,e)}function ht(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${he(...a)}"]`}return r}const _e=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ye(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ve(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return it(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return it(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=_e.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?f===1&&i[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return it(c)}).join("")}).join("")}/?$`),params:n}}function we(t){return!/^\([^)]+\)$/.test(t)}function ve(t){return t.slice(1).split("/").filter(we)}function be(t,n,e){const r={},a=t.slice(1),o=a.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=a[s-i];if(c.chained&&c.rest&&i&&(f=a.slice(s-i,s+1).filter(u=>u).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](f)){r[c.name]=f;const u=n[s+1],h=a[s+1];u&&!u.rest&&u.optional&&h&&c.chained&&(i=0),!u&&!h&&Object.keys(r).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function it(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ee({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([s,[c,f,u]])=>{const{pattern:h,params:g}=ye(s),d={id:s,exec:m=>{const l=h.exec(m);if(l)return be(l,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...f||[]].map(i),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(s){const c=s<0;return c&&(s=~s),[c,t[s]]}function i(s){return s===void 0?s:[a.has(s),t[s]]}}function jt(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function At(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}var Ut;const I=((Ut=globalThis.__sveltekit_1l4lx6n)==null?void 0:Ut.base)??"";var Nt;const ke=((Nt=globalThis.__sveltekit_1l4lx6n)==null?void 0:Nt.assets)??I,Se="1706490565652",Dt="sveltekit:snapshot",$t="sveltekit:scroll",Ct="sveltekit:states",Ae="sveltekit:pageurl",j="sveltekit:history",F="sveltekit:navigation",K={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},H=location.origin;function Vt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function pt(){return{x:pageXOffset,y:pageYOffset}}function N(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Rt={...K,"":K.hover};function Ft(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Gt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Ft(t)}}function lt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||tt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===H&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function Y(t){let n=null,e=null,r=null,a=null,o=null,i=null,s=t;for(;s&&s!==document.documentElement;)r===null&&(r=N(s,"preload-code")),a===null&&(a=N(s,"preload-data")),n===null&&(n=N(s,"keepfocus")),e===null&&(e=N(s,"noscroll")),o===null&&(o=N(s,"reload")),i===null&&(i=N(s,"replacestate")),s=Ft(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Rt[r??"off"],preload_data:Rt[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(i)}}function It(t){const n=dt(t);let e=!0;function r(){e=!0,n.update(i=>i)}function a(i){e=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||e&&c!==s)&&i(s=c)})}return{notify:r,set:a,subscribe:o}}function Re(){const{set:t,subscribe:n}=dt(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${ke}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Se;return i&&(t(!0),clearTimeout(e)),i}catch{return!1}}return{subscribe:n,check:r}}function tt(t,n){return t.origin!==H||!t.pathname.startsWith(n)}const Ie=-1,Le=-2,Pe=-3,xe=-4,Te=-5,Ue=-6;function Ne(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,i=!1){if(o===Ie)return;if(o===Pe)return NaN;if(o===xe)return 1/0;if(o===Te)return-1/0;if(o===Ue)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const s=e[o];if(!s||typeof s!="object")r[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return r[o]=f(a(s[1]));switch(c){case"Date":r[o]=new Date(s[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<s.length;d+=1)u.add(a(s[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<s.length;d+=2)h.set(a(s[d]),a(s[d+1]));break;case"RegExp":r[o]=new RegExp(s[1],s[2]);break;case"Object":r[o]=Object(s[1]);break;case"BigInt":r[o]=BigInt(s[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<s.length;d+=2)g[s[d]]=a(s[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);r[o]=c;for(let f=0;f<s.length;f+=1){const u=s[f];u!==Le&&(c[f]=a(u))}}else{const c={};r[o]=c;for(const f in s){const u=s[f];c[f]=a(u)}}return r[o]}return a(0)}const Mt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Mt];const Oe=new Set([...Mt]);[...Oe];function je(t){return t.filter(n=>n!=null)}class et{constructor(n,e){this.status=n,typeof e=="string"?this.body={message:e}:e?this.body=e:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class qt{constructor(n,e){this.status=n,this.location=e}}class gt extends Error{constructor(n,e,r){super(r),this.status=n,this.text=e}}const De="x-sveltekit-invalidated",$e="x-sveltekit-trailing-slash";function J(t){return t instanceof et||t instanceof gt?t.status:500}function Ce(t){return t instanceof gt?t.text:"Internal Error"}const U=jt($t)??{},G=jt(Dt)??{},x={url:It({}),page:It({}),navigating:dt(null),updated:Re()};function mt(t){U[t]=pt()}function Ve(t,n){let e=t+1;for(;U[e];)delete U[e],e+=1;for(e=n+1;G[e];)delete G[e],e+=1}function D(t){return location.href=t.href,new Promise(()=>{})}function Lt(){}let nt,ft,W,L,ut,$;const Ht=[],z=[];let P=null;const Bt=[],Fe=[];let O=[],w={branch:[],error:null,url:null},_t=!1,X=!1,Pt=!0,M=!1,C=!1,Kt=!1,yt=!1,wt,k,A,R,Z;async function Xe(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),$=t,nt=Ee(t),L=document.documentElement,ut=n,ft=t.nodes[0],W=t.nodes[1],ft(),W(),k=(a=history.state)==null?void 0:a[j],A=(o=history.state)==null?void 0:o[F],k||(k=A=Date.now(),history.replaceState({...history.state,[j]:k,[F]:A},""));const r=U[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await Ye(ut,e):Be(location.href,{replaceState:!0}),Ke()}function Yt(t){z.some(n=>n==null?void 0:n.snapshot)&&(G[t]=z.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function Jt(t){var n;(n=G[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=z[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function xt(){mt(k),At($t,U),Yt(A),At(Dt,G)}async function Wt(t,n,e,r){return B({type:"goto",url:Vt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(yt=!0)}})}async function Ge(t){return P={id:t.id,promise:Xt(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function ct(t){const n=nt.find(e=>e.exec(Zt(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function zt(t,n){var a;w=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),R=t.props.page,wt=new $.root({target:n,props:{...t.props,stores:x,components:z},hydrate:!0}),Jt(A);const r={from:null,to:{params:w.params,route:{id:((a=w.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};O.forEach(o=>o(r)),X=!0}async function Q({url:t,params:n,branch:e,status:r,error:a,route:o,form:i}){let s="never";if(I&&(t.pathname===I||t.pathname===I+"/"))s="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(s=d.slash);t.pathname=oe(t.pathname,s),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:je(e).map(d=>d.node.component),page:R}};i!==void 0&&(c.props.form=i);let f={},u=!R,h=0;for(let d=0;d<Math.max(e.length,w.branch.length);d+=1){const m=e[d],l=w.branch[d];(m==null?void 0:m.data)!==(l==null?void 0:l.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||t.href!==w.url.href||w.error!==a||i!==void 0&&i!==R.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:i??null,data:u?f:R.data}),c}async function vt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await t();if((u=f.universal)!=null&&u.load){let d=function(...l){for(const _ of l){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(l,_)=>(s&&(c.route=!0),l[_])}),params:new Proxy(r,{get:(l,_)=>(s&&c.params.add(_),l[_])}),data:(o==null?void 0:o.data)??null,url:le(e,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)}),async fetch(l,_){let v;l instanceof Request?(v=l.url,_={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,..._}):v=l;const S=new URL(v,e);return s&&d(S.href),S.origin===e.origin&&(v=S.href.slice(e.origin.length)),X?me(v,S.href,_):ge(v,_)},setHeaders:()=>{},depends:d,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:t,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Tt(t,n,e,r,a,o){if(yt)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(o[i]!==w.params[i])return!0;for(const i of a.dependencies)if(Ht.some(s=>s(new URL(i))))return!0;return!1}function bt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Me(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(i=>o.includes(i))&&o.every(i=>a.includes(i))&&e.delete(r)}return e}async function Xt({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:i,leaf:s}=a,c=[...i,s];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let f=null;const u=w.url?t!==w.url.pathname+w.url.search:!1,h=w.route?a.id!==w.route.id:!1,g=Me(w.url,e);let d=!1;const m=c.map((p,y)=>{var T;const b=w.branch[y],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Tt(d,h,u,g,(T=b.server)==null?void 0:T.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{f=await ee(e,m)}catch(p){return at({status:J(p),error:await q(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(f.type==="redirect")return f}const l=f==null?void 0:f.nodes;let _=!1;const v=c.map(async(p,y)=>{var rt;if(!p)return;const b=w.branch[y],E=l==null?void 0:l[y];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Tt(_,h,u,g,(rt=b.universal)==null?void 0:rt.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return vt({loader:p[1],url:e,params:r,route:a,parent:async()=>{var St;const kt={};for(let ot=0;ot<y;ot+=1)Object.assign(kt,(St=await v[ot])==null?void 0:St.data);return kt},server_data_node:bt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const S=[];for(let p=0;p<c.length;p+=1)if(c[p])try{S.push(await v[p])}catch(y){if(y instanceof qt)return{type:"redirect",location:y.location};let b=J(y),E;if(l!=null&&l.includes(y))b=y.status??b,E=y.error;else if(y instanceof et)E=y.body;else{if(await x.updated.check())return await D(e);E=await q(y,{params:r,url:e,route:{id:a.id}})}const T=await qe(p,S,o);return T?await Q({url:e,params:r,branch:S.slice(0,T.idx).concat(T.node),status:b,error:E,route:a}):await te(e,{id:a.id},E,b)}else S.push(void 0);return await Q({url:e,params:r,branch:S,status:200,error:null,route:a,form:n?void 0:null})}async function qe(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function at({status:t,error:n,url:e,route:r}){const a={};let o=null;if($.server_loads[0]===0)try{const f=await ee(e,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(e.origin!==H||e.pathname!==location.pathname||_t)&&await D(e)}const s=await vt({loader:ft,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:bt(o)}),c={node:await W(),loader:W,universal:null,server:null,data:null};return await Q({url:e,params:a,branch:[s,c],status:t,error:n,route:null})}function Et(t,n){if(!t||tt(t,I))return;let e;try{e=$.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=Zt(e);for(const a of nt){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:ie(o),url:t}}}function Zt(t){return se(t.slice(I.length)||"/")}function Qt({url:t,type:n,intent:e,delta:r}){let a=!1;const o=ae(w,e,t,n);r!==void 0&&(o.navigation.delta=r);const i={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return M||Bt.forEach(s=>s(i)),a?null:o}async function B({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Lt,block:u=Lt}){const h=Et(n,!1),g=Qt({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=k,m=A;f(),M=!0,X&&x.navigating.set(g.navigation),Z=c;let l=h&&await Xt(h);if(!l){if(tt(n,I))return await D(n);l=await te(n,{id:null},await q(new gt(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,Z!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await at({status:500,error:await q(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Wt(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await x.updated.check()&&await D(n);if(Ht.length=0,yt=!1,mt(d),Yt(m),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=e?e.state:i,!e){const p=o?0:1,y={[j]:k+=p,[F]:A+=p,[Ct]:i};(o?history.replaceState:history.pushState).call(history,y,"",n),o||Ve(k,A)}if(P=null,l.props.page.state=i,X){w=l.state,l.props.page&&(l.props.page.url=n);const p=(await Promise.all(Fe.map(y=>y(g.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){O=O.filter(b=>!p.includes(b))};p.push(y),O.push(...p)}wt.$set(l.props),Kt=!0}else zt(l,ut);const{activeElement:_}=document;await re();const v=e?e.scroll:a?pt():null;if(Pt){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const S=document.activeElement!==_&&document.activeElement!==document.body;!r&&!S&&Je(),Pt=!0,l.props.page&&(R=l.props.page),M=!1,t==="popstate"&&Jt(A),g.fulfil(void 0),O.forEach(p=>p(g.navigation)),x.navigating.set(null)}async function te(t,n,e,r){return t.origin===H&&t.pathname===location.pathname&&!_t?await at({status:r,error:e,url:t,route:n}):await D(t)}function He(){let t;L.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(t),t=setTimeout(()=>{r(i,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ct(i.target.href),e.unobserve(i.target))},{threshold:0});function r(o,i){const s=Gt(o,L);if(!s)return;const{url:c,external:f,download:u}=lt(s,I);if(f||u)return;const h=Y(s);if(!h.reload)if(i<=h.preload_data){const g=Et(c,!1);g&&Ge(g)}else i<=h.preload_code&&ct(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:i,external:s,download:c}=lt(o,I);if(s||c)continue;const f=Y(o);f.reload||(f.preload_code===K.viewport&&e.observe(o),f.preload_code===K.eager&&ct(i.pathname))}}O.push(a),a()}function q(t,n){if(t instanceof et)return t.body;const e=J(t),r=Ce(t);return $.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Be(t,n={}){return t=Vt(t),t.origin!==H?Promise.reject(new Error("goto: invalid URL")):Wt(t,n,0)}function Ke(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(xt(),!M){const a=ae(w,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Bt.forEach(i=>i(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xt()}),(n=navigator.connection)!=null&&n.saveData||He(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Gt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:i,download:s}=lt(r,I);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=Y(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||s)return;if(o||c.reload){Qt({url:a,type:"link"})?M=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===st(location)){const[,d]=w.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(C=!0,mt(k),t(a),!c.replace_state)return;C=!1}e.preventDefault(),B({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(tt(i,I))return;const s=e.target,c=Y(s);if(c.reload)return;e.preventDefault(),e.stopPropagation();const f=new FormData(s),u=a==null?void 0:a.getAttribute("name");u&&f.append(u,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(f).toString(),B({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[j]){const a=e.state[j];if(Z={},a===k)return;const o=U[a],i=e.state[Ct]??{},s=new URL(e.state[Ae]??location.href),c=e.state[F],f=st(location)===st(w.url);if(c===A&&(Kt||f)){t(s),U[k]=pt(),o&&scrollTo(o.x,o.y),i!==R.state&&(R={...R,state:i},wt.$set({page:R})),k=a;return}const h=a-k;await B({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{k=a,A=c},block:()=>{history.go(-h)},nav_token:Z})}else if(!C){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[j]:++k,[F]:A},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&x.navigating.set(null)});function t(e){w.url=e,x.page.set({...R,url:e}),x.page.notify()}}async function Ye(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:i,form:s}){_t=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=Et(c,!1)||{});let f;try{const u=r.map(async(d,m)=>{const l=i[m];return l!=null&&l.uses&&(l.uses=ne(l.uses)),vt({loader:$.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:bt(l)})}),h=await Promise.all(u),g=nt.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}f=await Q({url:c,params:a,branch:h,status:n,error:e,form:s,route:g??null})}catch(u){if(u instanceof qt){await D(new URL(u.location,location.href));return}f=await at({status:J(u),error:await q(u,{url:c,params:a,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),zt(f,t)}async function ee(t,n){var a;const e=new URL(t);e.pathname=de(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append($e,"1"),e.searchParams.append(De,n.map(o=>o?"1":"0").join(""));const r=await Ot(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new et(r.status,o)}return new Promise(async o=>{var h;const i=new Map,s=r.body.getReader(),c=new TextDecoder;function f(g){return Ne(g,{Promise:d=>new Promise((m,l)=>{i.set(d,{fulfil:m,reject:l})})})}let u="";for(;;){const{done:g,value:d}=await s.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const l=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=ne(_.uses),_.data=f(_.data))}),o(l);else if(l.type==="chunk"){const{id:_,data:v,error:S}=l,p=i.get(_);i.delete(_),S?p.reject(f(S)):p.fulfil(f(v))}}}})}function ne(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function Je(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const i=a[o],s=r.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}r.removeAllRanges()}})}}}function ae(t,n,e,r){var c,f;let a,o;const i=new Promise((u,h)=>{a=u,o=h});return i.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:e},willUnload:!n,type:r,complete:i},fulfil:a,reject:o}}export{Xe as a,Be as g,x as s};
