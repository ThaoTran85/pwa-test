if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),b={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>b[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Yv751EKWvJD8m1iRN6Hdo/_buildManifest.js",revision:"fd44b2731e78ac926c0a47fd825b2523"},{url:"/_next/static/Yv751EKWvJD8m1iRN6Hdo/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/Yv751EKWvJD8m1iRN6Hdo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-1c75b2a932ea3332.js",revision:"1c75b2a932ea3332"},{url:"/_next/static/chunks/pages/_app-13fdd38b0be0f78c.js",revision:"13fdd38b0be0f78c"},{url:"/_next/static/chunks/pages/_error-1995526792b513b2.js",revision:"1995526792b513b2"},{url:"/_next/static/chunks/pages/index-c03f9d6611322a93.js",revision:"c03f9d6611322a93"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/45cc6d3be5f07efb.css",revision:"45cc6d3be5f07efb"},{url:"/_next/static/css/e0bf1aaac2b12553.css",revision:"e0bf1aaac2b12553"},{url:"/_next/static/media/about-extra-1.96dade5b.svg",revision:"4c6b68b46c56e1ba112a58ddd2e5f077"},{url:"/_next/static/media/about-extra-2.f8fb26c0.svg",revision:"8602884651d0ee17258ae1554cfe9d81"},{url:"/_next/static/media/about-img.728e2a1d.svg",revision:"289a1e0eb327b3d7ebee60ab1b296fc8"},{url:"/_next/static/media/doitac.80a161fb.png",revision:"adccf5ec058308747bcc50464495f750"},{url:"/_next/static/media/intro-bg.3193fe5f.png",revision:"20e8f8600db51020010f62b7cc172419"},{url:"/_next/static/media/intro-img.8565f15b.svg",revision:"2586459b5b0c9acd5320bc38cd3e22fc"},{url:"/_next/static/media/nangluc10.17455b15.jpeg",revision:"5bcc0ab229412a966b60fd7091f96656"},{url:"/_next/static/media/nangluc12.efec0013.png",revision:"ced2cefcd9012b3af1333ad3e5a70c16"},{url:"/_next/static/media/nangluc13.8be946d3.png",revision:"20129bbf9acb0fa5b0f9a2c8db800dce"},{url:"/_next/static/media/nangluc14.5a031d08.png",revision:"98a526bb47fbdf045b0ac9be83273a3b"},{url:"/_next/static/media/nangluc15.9ddaf27b.png",revision:"24b6fa321a898a24c5ebf88c9cc9714b"},{url:"/_next/static/media/nangluc16.8fedf6d1.png",revision:"d661620ecd13285386c4cf9c4cea1df4"},{url:"/_next/static/media/nangluc17.2f3855b1.png",revision:"acab20c796336fbef175cbc20d8f747c"},{url:"/_next/static/media/nangluc6.ea77c1b1.png",revision:"ca897767bc3cc302bdb286825569bea5"},{url:"/_next/static/media/nangluc7.07cf9cd9.png",revision:"a176666ba5e3ac04430c1b820cdec02a"},{url:"/_next/static/media/products.d9cc5115.png",revision:"77888de3f53bfcbc5a43ec127e15abd4"},{url:"/_next/static/media/support.80b518be.svg",revision:"30882ec268110f53f276c8632155b3bb"},{url:"/assets/img/CTC.jpg",revision:"5e1572784e329f3098e5f584f99022de"},{url:"/assets/img/about-extra-1.svg",revision:"4c6b68b46c56e1ba112a58ddd2e5f077"},{url:"/assets/img/about-extra-2.svg",revision:"8602884651d0ee17258ae1554cfe9d81"},{url:"/assets/img/about-img.svg",revision:"289a1e0eb327b3d7ebee60ab1b296fc8"},{url:"/assets/img/doitac.png",revision:"adccf5ec058308747bcc50464495f750"},{url:"/assets/img/intro-bg.png",revision:"20e8f8600db51020010f62b7cc172419"},{url:"/assets/img/intro-img.svg",revision:"2586459b5b0c9acd5320bc38cd3e22fc"},{url:"/assets/img/logo.png",revision:"019d6bb03245b0aa9ca9145ea40fe1ba"},{url:"/assets/img/nangluc1.png",revision:"ecce2ef4f0b6f34aa7668c56f9308887"},{url:"/assets/img/nangluc10.jpeg",revision:"5bcc0ab229412a966b60fd7091f96656"},{url:"/assets/img/nangluc11.jpeg",revision:"2bfafa1f8c49f248df3d39beca66dce3"},{url:"/assets/img/nangluc12.png",revision:"ced2cefcd9012b3af1333ad3e5a70c16"},{url:"/assets/img/nangluc13.png",revision:"20129bbf9acb0fa5b0f9a2c8db800dce"},{url:"/assets/img/nangluc14.png",revision:"98a526bb47fbdf045b0ac9be83273a3b"},{url:"/assets/img/nangluc15.png",revision:"24b6fa321a898a24c5ebf88c9cc9714b"},{url:"/assets/img/nangluc16.png",revision:"d661620ecd13285386c4cf9c4cea1df4"},{url:"/assets/img/nangluc17.png",revision:"acab20c796336fbef175cbc20d8f747c"},{url:"/assets/img/nangluc18.png",revision:"10c4014bd8665686e0ad9baf2da9a4d4"},{url:"/assets/img/nangluc19.png",revision:"376e56a4e543df0c869cc14562547b7f"},{url:"/assets/img/nangluc2.png",revision:"867cb4c322dcbf52b4ca3a2924499810"},{url:"/assets/img/nangluc3.png",revision:"a79cf1303868b63c260db70826c18e2b"},{url:"/assets/img/nangluc4.png",revision:"07e24f463ee1566e2087aa48ff664a0b"},{url:"/assets/img/nangluc5.png",revision:"6d008b35ec13430f3e80d618a1486848"},{url:"/assets/img/nangluc6.png",revision:"ca897767bc3cc302bdb286825569bea5"},{url:"/assets/img/nangluc7.png",revision:"a176666ba5e3ac04430c1b820cdec02a"},{url:"/assets/img/nangluc8.png",revision:"4bfe53ed27ea42714be480bf85842f76"},{url:"/assets/img/nangluc9.jpeg",revision:"75061f3799a38d09ef31cc24283255fc"},{url:"/assets/img/nguyenvanhau.jpg",revision:"34934dbda590a6ccb33bb1655ae6f315"},{url:"/assets/img/phandieuhuong.jpg",revision:"417c26f7ae4dcc8aefccff4144868a08"},{url:"/assets/img/products.png",revision:"77888de3f53bfcbc5a43ec127e15abd4"},{url:"/assets/img/support.svg",revision:"30882ec268110f53f276c8632155b3bb"},{url:"/assets/img/tranthanhho.jpg",revision:"e8db25315de95a4168846bc2d0edf04b"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"3f4e7fcded41f9f0efdb50ef0a9f0947"},{url:"/icon-256x256.png",revision:"e02aeb3daf2239167000dc3cc85b19cd"},{url:"/icon-384x384.png",revision:"8ea076f3b219cd84ca7ae25ec869b7f0"},{url:"/icon-512x512.png",revision:"a47234e1098c79e242dcceb32a351219"},{url:"/manifest.json",revision:"55bf4bc800f2584f3e7379d64181ff6f"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
