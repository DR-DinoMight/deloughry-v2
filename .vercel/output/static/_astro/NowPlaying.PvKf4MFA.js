import{j as m}from"./jsx-runtime.Dla7y0KP.js";import{r as E,R as _t}from"./index.CfLG8xVc.js";var Wt={exports:{}},kt={},X=E;function Zt(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t}var te="function"==typeof Object.is?Object.is:Zt,ee=X.useState,ne=X.useEffect,se=X.useLayoutEffect,re=X.useDebugValue;function oe(e,t){var n=t(),r=ee({inst:{value:n,getSnapshot:t}}),s=r[0].inst,i=r[1];return se((function(){s.value=n,s.getSnapshot=t,ft(s)&&i({inst:s})}),[e,n,t]),ne((function(){return ft(s)&&i({inst:s}),e((function(){ft(s)&&i({inst:s})}))}),[e]),re(n),n}function ft(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!te(e,n)}catch{return!0}}function ie(e,t){return t()}var ae=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ie:oe;kt.useSyncExternalStore=void 0!==X.useSyncExternalStore?X.useSyncExternalStore:ae,Wt.exports=kt;var ce=Wt.exports;const W=()=>{},y=W(),dt=Object,c=e=>e===y,M=e=>"function"==typeof e,k=(e,t)=>({...e,...t}),ue=e=>M(e.then),it=new WeakMap;let le=0;const et=e=>{const t=typeof e,n=e&&e.constructor,r=n==Date;let s,i;if(dt(e)!==e||r||n==RegExp)s=r?e.toJSON():"symbol"==t?e.toString():"string"==t?JSON.stringify(e):""+e;else{if(s=it.get(e),s)return s;if(s=++le+"~",it.set(e,s),n==Array){for(s="@",i=0;i<e.length;i++)s+=et(e[i])+",";it.set(e,s)}if(n==dt){s="#";const t=dt.keys(e).sort();for(;!c(i=t.pop());)c(e[i])||(s+=i+":"+et(e[i])+",");it.set(e,s)}}return s},F=new WeakMap,ht={},at={},St="undefined",ct=typeof window!=St,pt=typeof document!=St,fe=()=>ct&&typeof window.requestAnimationFrame!=St,Ut=(e,t)=>{const n=F.get(e);return[()=>!c(t)&&e.get(t)||ht,r=>{if(!c(t)){const s=e.get(t);t in at||(at[t]=s),n[5](t,k(s,r),s||ht)}},n[6],()=>!c(t)&&t in at?at[t]:!c(t)&&e.get(t)||ht]};let wt=!0;const de=()=>wt,[Rt,vt]=ct&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[W,W],he=()=>{const e=pt&&document.visibilityState;return c(e)||"hidden"!==e},Ee=e=>(pt&&document.addEventListener("visibilitychange",e),Rt("focus",e),()=>{pt&&document.removeEventListener("visibilitychange",e),vt("focus",e)}),ge=e=>{const t=()=>{wt=!0,e()},n=()=>{wt=!1};return Rt("online",t),Rt("offline",n),()=>{vt("online",t),vt("offline",n)}},me={isOnline:de,isVisible:he},pe={initFocus:Ee,initReconnect:ge},jt=!_t.useId,nt=!ct||"Deno"in window,we=e=>fe()?window.requestAnimationFrame(e):setTimeout(e,1),Et=nt?E.useEffect:E.useLayoutEffect,gt=typeof navigator<"u"&&navigator.connection,Pt=!nt&&gt&&(["slow-2g","2g"].includes(gt.effectiveType)||gt.saveData),Tt=e=>{if(M(e))try{e=e()}catch{e=""}const t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?et(e):"",t]};let Re=0;const xt=()=>++Re,qt=0,zt=1,Ht=2,ve=3;var tt={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function $t(...e){const[t,n,r,s]=e,i=k({populateCache:!0,throwOnError:!0},"boolean"==typeof s?{revalidate:s}:s||{});let a=i.populateCache;const o=i.rollbackOnError;let l=i.optimisticData;const u=!1!==i.revalidate,d=i.throwOnError;if(M(n)){const e=n,r=[],s=t.keys();for(const n of s)!/^\$(inf|sub)\$/.test(n)&&e(t.get(n)._k)&&r.push(n);return Promise.all(r.map(f))}return f(n);async function f(n){const[s]=Tt(n);if(!s)return;const[i,f]=Ut(t,s),[g,m,h,p]=F.get(t),E=()=>{const e=g[s];return u&&(delete h[s],delete p[s],e&&e[0])?e[0](2).then((()=>i().data)):i().data};if(e.length<3)return E();let w,v=r;const x=xt();m[s]=[x,0];const _=!c(l),b=i(),k=b.data,R=b._c,S=c(R)?k:R;if(_&&(l=M(l)?l(S,k):l,f({data:l,_c:S})),M(v))try{v=v(S)}catch(e){w=e}if(v&&ue(v)){if(v=await v.catch((e=>{w=e})),x!==m[s][0]){if(w)throw w;return v}w&&_&&(e=>"function"==typeof o?o(e):!1!==o)(w)&&(a=!0,f({data:S,_c:y}))}if(a&&!w)if(M(a)){const e=a(v,S);f({data:e,error:y,_c:y})}else f({data:v,error:y,_c:y});if(m[s][1]=xt(),Promise.resolve(E()).then((()=>{f({_c:y})})),!w)return v;if(d)throw w}}const Ft=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},xe=(e,t)=>{if(!F.has(e)){const n=k(pe,t),r={},s=$t.bind(y,e);let i=W;const a={},o=(e,t)=>{const n=a[e]||[];return a[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},c=(t,n,r)=>{e.set(t,n);const s=a[t];if(s)for(const e of s)e(n,r)},l=()=>{if(!F.has(e)&&(F.set(e,[r,{},{},{},s,c,o]),!nt)){const t=n.initFocus(setTimeout.bind(y,Ft.bind(y,r,0))),s=n.initReconnect(setTimeout.bind(y,Ft.bind(y,r,1)));i=()=>{t&&t(),s&&s(),F.delete(e)}}};return l(),[e,s,l,i]}return[e,F.get(e)[4]]},_e=(e,t,n,r,s)=>{const i=n.errorRetryCount,a=s.retryCount,o=~~((Math.random()+.5)*(1<<(a<8?a:8)))*n.errorRetryInterval;!c(i)&&a>i||setTimeout(r,o,s)},Se=(e,t)=>et(e)==et(t),[Bt,Te]=xe(new Map),ye=k({onLoadingSlow:W,onSuccess:W,onError:W,onErrorRetry:_e,onDiscarded:W,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Pt?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:Pt?5e3:3e3,compare:Se,isPaused:()=>!1,cache:Bt,mutate:Te,fallback:{}},me),be=(e,t)=>{const n=k(e,t);if(t){const{use:r,fallback:s}=e,{use:i,fallback:a}=t;r&&i&&(n.use=r.concat(i)),s&&a&&(n.fallback=k(s,a))}return n},Ce=E.createContext({}),De="$inf$",Jt=ct&&window.__SWR_DEVTOOLS_USE__,Oe=Jt?window.__SWR_DEVTOOLS_USE__:[],Ne=()=>{Jt&&(window.__SWR_DEVTOOLS_REACT__=_t)},Ae=e=>M(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],Ie=()=>k(ye,E.useContext(Ce)),Le=e=>(t,n,r)=>e(t,n&&((...e)=>{const[r]=Tt(t),[,,,s]=F.get(Bt);if(r.startsWith(De))return n(...e);const i=s[r];return c(i)?n(...e):(delete s[r],i)}),r),Ve=Oe.concat(Le),je=e=>function(...t){const n=Ie(),[r,s,i]=Ae(t),a=be(n,i);let o=e;const{use:c}=a,l=(c||[]).concat(Ve);for(let e=l.length;e--;)o=l[e](o);return o(r,s||a.fetcher||null,a)},Pe=(e,t,n)=>{const r=t[e]||(t[e]=[]);return r.push(n),()=>{const e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}};Ne();const Mt=_t.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((t=>{e.status="fulfilled",e.value=t}),(t=>{e.status="rejected",e.reason=t})),e)}),mt={dedupe:!0},Fe=(e,t,n)=>{const{cache:r,compare:s,suspense:i,fallbackData:a,revalidateOnMount:o,revalidateIfStale:l,refreshInterval:u,refreshWhenHidden:d,refreshWhenOffline:f,keepPreviousData:g}=n,[m,h,p,w]=F.get(r),[v,x]=Tt(e),_=E.useRef(!1),b=E.useRef(!1),R=E.useRef(v),S=E.useRef(t),T=E.useRef(n),j=()=>T.current,O=()=>j().isVisible()&&j().isOnline(),[N,L,V,C]=Ut(r,v),W=E.useRef({}).current,P=c(a)?n.fallback[v]:a,D=(e,t)=>{for(const n in W){const r=n;if("data"===r){if(!(s(e[r],t[r])||c(e[r])&&s(J,t[r])))return!1}else if(t[r]!==e[r])return!1}return!0},I=E.useMemo((()=>{const e=!(!v||!t)&&(c(o)?!j().isPaused()&&!i&&(!!c(l)||l):o),n=t=>{const n=k(t);return delete n._k,e?{isValidating:!0,isLoading:!0,...n}:n},r=N(),s=C(),a=n(r),u=r===s?a:n(s);let d=a;return[()=>{const e=n(N());return D(e,d)?(d.data=e.data,d.isLoading=e.isLoading,d.isValidating=e.isValidating,d.error=e.error,d):(d=e,e)},()=>u]}),[r,v]),A=ce.useSyncExternalStore(E.useCallback((e=>V(v,((t,n)=>{D(n,t)||e()}))),[r,v]),I[0],I[1]),U=!_.current,$=m[v]&&m[v].length>0,z=A.data,X=c(z)?P:z,q=A.error,B=E.useRef(X),J=g?c(z)?B.current:z:X,H=!($&&!c(q))&&(U&&!c(o)?o:!j().isPaused()&&(i?!c(X)&&l:c(X)||l)),Z=!!(v&&t&&U&&H),G=c(A.isValidating)?Z:A.isValidating,K=c(A.isLoading)?Z:A.isLoading,Q=E.useCallback((async e=>{const t=S.current;if(!v||!t||b.current||j().isPaused())return!1;let r,i,a=!0;const o=e||{},l=!p[v]||!o.dedupe,u=()=>jt?!b.current&&v===R.current&&_.current:v===R.current,d={isValidating:!1,isLoading:!1},f=()=>{L(d)},g=()=>{const e=p[v];e&&e[1]===i&&delete p[v]},E={isValidating:!0};c(N().data)&&(E.isLoading=!0);try{if(l&&(L(E),n.loadingTimeout&&c(N().data)&&setTimeout((()=>{a&&u()&&j().onLoadingSlow(v,n)}),n.loadingTimeout),p[v]=[t(x),xt()]),[r,i]=p[v],r=await r,l&&setTimeout(g,n.dedupingInterval),!p[v]||p[v][1]!==i)return l&&u()&&j().onDiscarded(v),!1;d.error=y;const e=h[v];if(!c(e)&&(i<=e[0]||i<=e[1]||0===e[1]))return f(),l&&u()&&j().onDiscarded(v),!1;const o=N().data;d.data=s(o,r)?o:r,l&&u()&&j().onSuccess(r,v,n)}catch(e){g();const t=j(),{shouldRetryOnError:n}=t;t.isPaused()||(d.error=e,l&&u()&&(t.onError(e,v,t),(!0===n||M(n)&&n(e))&&O()&&t.onErrorRetry(e,v,t,(e=>{const t=m[v];t&&t[0]&&t[0](tt.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(o.retryCount||0)+1,dedupe:!0})))}return a=!1,f(),!0}),[v,r]),Y=E.useCallback(((...e)=>$t(r,R.current,...e)),[]);if(Et((()=>{S.current=t,T.current=n,c(z)||(B.current=z)})),Et((()=>{if(!v)return;const e=Q.bind(y,mt);let t=0;const n=Pe(v,m,((n,r={})=>{if(n==tt.FOCUS_EVENT){const n=Date.now();j().revalidateOnFocus&&n>t&&O()&&(t=n+j().focusThrottleInterval,e())}else if(n==tt.RECONNECT_EVENT)j().revalidateOnReconnect&&O()&&e();else{if(n==tt.MUTATE_EVENT)return Q();if(n==tt.ERROR_REVALIDATE_EVENT)return Q(r)}}));return b.current=!1,R.current=v,_.current=!0,L({_k:x}),H&&(c(X)||nt?e():we(e)),()=>{b.current=!0,n()}}),[v]),Et((()=>{let e;function t(){const t=M(u)?u(N().data):u;t&&-1!==e&&(e=setTimeout(n,t))}function n(){N().error||!d&&!j().isVisible()||!f&&!j().isOnline()?t():Q(mt).then(t)}return t(),()=>{e&&(clearTimeout(e),e=-1)}}),[u,d,f,v]),E.useDebugValue(J),i&&c(X)&&v){if(!jt&&nt)throw new Error("Fallback data is required when using suspense in SSR.");S.current=t,T.current=n,b.current=!1;const e=w[v];if(!c(e)){const t=Y(e);Mt(t)}if(!c(q))throw q;{const e=Q(mt);c(J)||(e.status="fulfilled",e.value=!0),Mt(e)}}return{mutate:Y,get data(){return W.data=!0,J},get error(){return W.error=!0,q},get isValidating(){return W.isValidating=!0,G},get isLoading(){return W.isLoading=!0,K}}},Me=je(Fe),We=({progress:e,isPlaying:t})=>{const[n,r]=E.useState([]),s=E.useRef();E.useEffect((()=>{const e=[];for(let t=0;t<90;t++)e.push(Math.floor(1e3*Math.random())+500+"ms");r(e)}),[]);return m.jsx("div",{className:"sw "+(t?"":" sw--pause"),children:m.jsx("svg",{ref:s,width:"302",height:"28",viewBox:"0 0 344 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(()=>{const t=Math.floor(e/2),r=[];for(let e=1;e<91;e++)r.push(m.jsx("line",{className:e<=t?"sw__full":"",x1:e+6*e,y1:20,x2:e+6*e,y2:0,strokeWidth:"6",style:{animationDuration:n[e]}},e));return r})()})})},ke=({image:e,isLiked:t,className:n})=>m.jsxs("div",{className:n,children:[m.jsx("img",{src:e,className:"h-full w-full",alt:"Currently now-playing image"}),t&&m.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] ",children:m.jsx("svg",{className:"thumbsUp h-[70%] w-[70%] fill-accent-bg stroke-accent shadow-lg",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",children:m.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})})})]}),Ue=e=>fetch(e).then((e=>e.json()));function $e(){let e=null;const[t,n]=E.useState(0),{data:r,mutate:s,error:i,isLoading:a}=Me("https://api.deloughry.co.uk/spotify/now-playing",Ue,{onSuccess:t=>{clearInterval(e),n(t?.song?.progress)}});return E.useEffect((()=>(r&&(e=setInterval((()=>{n((t=>(t>=r?.song?.duration&&(clearInterval(e),s()),t+1e3)))}),1e3)),()=>clearInterval(e))),[r?.song?.progress,r?.song?.duration]),m.jsxs("div",{className:(r?.isPlaying?"visible":"invisible")+" flex flex-col justify-center align-middle transition-all duration-250 ease-in-out",children:[r?.isPlaying&&m.jsxs("div",{className:"sticky space-around mb-4 flex w-full items-center space-x-0 overflow-hidden rounded-lg bg-zinc-200 p-2 align-middle shadow-lg dark:bg-zinc-700 sm:space-x-2",children:[m.jsx(ke,{image:r?.song?.albumArt[2].url,className:"relative mr-2 w-[70px] aspect-square",isLiked:r?.song?.isLiked}),m.jsxs("div",{children:[m.jsx("span",{className:"flex-col items-center sm:flex-row",children:r?.isPlaying?m.jsxs("a",{className:"capsize font-sm text-wrap flex w-full flex-col flex-wrap truncate break-all dark:text-white no-underline",href:r?.song?.uri,target:"_blank",rel:"noopener noreferrer",children:[m.jsx("span",{className:"truncaste text-accent font-oswald font-bold text-lg uupercase",children:r?.song?.name}),m.jsx("span",{className:"capsize truncate break-all text-xs text-zinc-700 dark:text-gray-200",children:r?.song?.artist})]}):m.jsx("p",{className:"capsize font-md text-gray-200",children:"Not Playing"})}),m.jsx(We,{progress:Math.floor(t/r?.song?.duration*100)||0,isPlaying:r?.isPlaying})]})]}),!r?.isPlaying&&m.jsx("p",{className:"min-h-[102px]",children:"Spotify Not Playing"})]})}export{$e as default};