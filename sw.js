!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/testweb/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter((e=>t in e)),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map((({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"2327dd7cfa9f11f2c7a9e9aa419701a9","url":"09c03f99.7ece99d2.js"},{"revision":"dea0d95f2a55fb77b364332f10848bcd","url":"1.0df1db22.js"},{"revision":"03cb4e4e4d81b5c1ee24a6bd3b3fa3b5","url":"1a366355.e2622ba0.js"},{"revision":"d7c35d302a027f6cdffb8a2313b1106c","url":"1be78505.c2189bb9.js"},{"revision":"27332f60d0e95732d0c8315196d090d5","url":"2.696f1c68.js"},{"revision":"64f73e9f9d8f72e90da82d875a511a1b","url":"20b36bce.0a0bf566.js"},{"revision":"36b7a0644db01859955d705aa2eaaebb","url":"22.8fa11a26.js"},{"revision":"281faac094ef04d12c627e7d9ddd8a4d","url":"23.2cebaa54.js"},{"revision":"44cc7f7a12c1525bdbd79073cb2db365","url":"24.38f14554.js"},{"revision":"aac11dbd4a04dd2a664568a3760314b6","url":"25.32fa33d7.js"},{"revision":"12b102281cb977310c3166643f54f933","url":"258ba1ea.02759c18.js"},{"revision":"998c9fe0f23ad7c9df02b2a372a8f6a4","url":"26.97cd4bd5.js"},{"revision":"3fe5730f79b967d29fe9359d8d0bb30f","url":"27.074ea8a5.js"},{"revision":"3f651a8df3e6f141fe8b781058c1f3bf","url":"27060418.b5de9701.js"},{"revision":"971d513e74062ec1706a6f8d52099604","url":"28.28801ae7.js"},{"revision":"708b4b4d89d69528ff39b1cc91125182","url":"29.f4b05dad.js"},{"revision":"16a8d9511caeab0838b592b0db7e0e29","url":"30.c191f3da.js"},{"revision":"d7bbf2cc4e87599338037c7d21f91275","url":"404.html"},{"revision":"c150262859a4912919d0c8466ed894b7","url":"44f55294.53a21eb8.js"},{"revision":"27dce339417025051c1099b5ab13e344","url":"6a7ffb0f.1f5920d1.js"},{"revision":"b9480b28ffffcb4198c15cb65ae4af7d","url":"6ba564ed.d2fd55a6.js"},{"revision":"f87c11d3e6dcc0466786c428582877ae","url":"788d3f90.28f67f46.js"},{"revision":"7ecc4ea4e1040dcdda0878b921f1b16a","url":"ae374a03.5f17fc78.js"},{"revision":"2c805ef34a181a27c83193544472f285","url":"b038069d.04200742.js"},{"revision":"207c029c665a61a3a14868656e5fcdbd","url":"baf0cc60.8871a819.js"},{"revision":"ca6c2770c01bad708bb03dd727a1299e","url":"docs/components/connections/index.html"},{"revision":"0dff1fcf7373e073e3aba3d463eb1f42","url":"docs/components/connectors/index.html"},{"revision":"ea16e7759c504dc1e28641baec96d123","url":"docs/components/JPT.GetAllLoadsBCs/index.html"},{"revision":"893cd64ccb2afeb4c0d78a29f3e91f57","url":"docs/components/Meshing.SetMeshAttribute/index.html"},{"revision":"74c3e2d75f3d27912ff1c2b13ffdf0b4","url":"docs/components/Meshing.SurfaceMeshing/index.html"},{"revision":"8d57d9a3acb4b390e4767929665da9d9","url":"docs/components/nodes/index.html"},{"revision":"1e165ee4e60694a90cec3b7beb80aaf2","url":"docs/faq/index.html"},{"revision":"d4fdad553c7a5ea0d5dbcc16e774882d","url":"docs/getting-started/async-loading/index.html"},{"revision":"7914e9f3bcec00c961ef5b2ba4767c8d","url":"docs/getting-started/hierarchy/index.html"},{"revision":"1eb32e143ee92545330844fe014562fc","url":"docs/getting-started/installation/index.html"},{"revision":"50a3e069e458bf3dfeeaeee64ed268fb","url":"docs/getting-started/usage/index.html"},{"revision":"4be730951bbdaf4fc2cebc009abbf1c2","url":"docs/index.html"},{"revision":"509c33885808a36e1de8feeeaa0138e5","url":"eb1ac586.4649d136.js"},{"revision":"ef1619ee4df01c1d3c7d248caea11a30","url":"ee32db93.11aada23.js"},{"revision":"42e376c3906b35378d0ae55e5b75bee2","url":"f7b49192.e9a7480b.js"},{"revision":"6c1f9abf60c6cf793da4dff1a89fe91b","url":"f976f453.62a9040a.js"},{"revision":"2cce0148a130990e99c1fdc9e6cb4512","url":"index.html"},{"revision":"7431dd04d45576cdb4af54e9937e6a36","url":"main.503b7f03.js"},{"revision":"8d83ac080d0bd54a9b2c34600f0af097","url":"manifest.json"},{"revision":"5a2c1c8c8c19cea0628d1576073d53ff","url":"runtime~main.03bd261c.js"},{"revision":"7dc02948e612a25816bd4a6a16c892f9","url":"search/index.html"},{"revision":"53f1275180516d34fe4ec1d42b6a7786","url":"showcase/index.html"},{"revision":"16d61424ab978395d4e2c2fc767ca0cf","url":"styles.0511f2bc.js"},{"revision":"5826a4adede7ad14baac8c095acd7eca","url":"styles.d1dec919.css"},{"revision":"6c922eef7c90a67b261986a27eb00e8b","url":"assets/images/benefit-a48a15c5864d1e6b837e3ba0f2f90f37.jpg"},{"revision":"21c557bfe94fb8da10a156009553dd19","url":"assets/images/example-calculator-ff1ebd551c958e1f3de637727b93d9ea.png"},{"revision":"b98669273703c06e2bd4bb752254942f","url":"assets/images/example-playground-6f3834bec78f3edfde260c196e61f3e4.png"},{"revision":"6ac53fb5656fd22dc422dc41069235c6","url":"assets/images/example-state-machine-8ad7282356ace4420e9b1385ca525fba.png"},{"revision":"6ae0c7bcb3be74cabb23540b53346af9","url":"assets/images/features-b6addd250593958aa9b9b53759f5632d.jpg"},{"revision":"3abb7ba83d7c9ce731fbfd896799ee26","url":"ideal-img/example-calculator.3abb7ba.640.png"},{"revision":"3e5935102f972d4f54c593a09e92de43","url":"ideal-img/example-calculator.3e59351.837.png"},{"revision":"a8ee6257eccaec568d055eed3a3564df","url":"ideal-img/example-playground.a8ee625.841.png"},{"revision":"d27e266dc239b295a277e3fd1f4e5a68","url":"ideal-img/example-playground.d27e266.640.png"},{"revision":"83365c302c00b69813aa4e2b0265d29e","url":"ideal-img/example-state-machine.83365c3.838.png"},{"revision":"d680cac95ab5d55ddf3126d839c359c2","url":"ideal-img/example-state-machine.d680cac.640.png"},{"revision":"2072c82e3c0b64b09a215c488f894bb4","url":"ideal-img/hierarchy.2072c82.700.png"},{"revision":"49a77c2a3b757ba9804e9e9f032eccfa","url":"ideal-img/hierarchy.49a77c2.640.png"},{"revision":"ff1d9ad354f15197f36c9ec2f713242c","url":"img/circuit_board_dark.svg"},{"revision":"2562a0652d76e8212db4275f082e817d","url":"img/circuit_board.svg"},{"revision":"b1726266c165da12d3d91e97084172be","url":"img/favicon.ico"},{"revision":"64b7a7feefa37fb96ea6b230163835d0","url":"img/github_logo_dark.svg"},{"revision":"6cfcea2f19db75fd43a158dd22ddbfa5","url":"img/github_logo.svg"},{"revision":"4c3a69248fc3e5d4371cbda81769dd35","url":"img/logo_192.png"},{"revision":"eb676f11282c5520c58ea7c9a1924448","url":"img/logo_512.png"},{"revision":"a1cdb6cd280e6d894666c77dadde77f5","url":"img/logo.png"},{"revision":"5fa694a490daaf1389a79ecf69f2bf10","url":"img/logo.svg"},{"revision":"bd3a3f516873ce100d6143d2aeda4f83","url":"img/nodify_soc.png"},{"revision":"a0199774bfba5a40ac43c577f78c10be","url":"img/NuGet_logo_dark.svg"},{"revision":"04e61ecdd25682e57cd0724bcfc31dab","url":"img/NuGet_logo.svg"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",(e=>{e.waitUntil(n.install())})),self.addEventListener("activate",(e=>{e.waitUntil(n.activate())})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(`${n.href}index.html`):t.push(`${n.href}/index.html`)),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}})),self.addEventListener("message",(async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()}))})()}]);