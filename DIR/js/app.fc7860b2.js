(function(){var t={1706:function(){},7902:function(t,e,r){"use strict";r(6699);var n=r(6369),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("transition",{key:t.loading,attrs:{appear:"",name:"loading"}},[t.loading?e("div",{staticClass:"loading"},[e("img",{staticClass:"loadingimage",attrs:{src:r(3826)}})]):t._e()]),e("div",{staticClass:"logobar"},[e("ul",{staticClass:"logobar-inner"},[e("ul",{staticClass:"desktop nav left"},[e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Shop":"Magasin")+" ")]),e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Calendar":"Calendrier")+" ")])]),e("li",[e("router-link",{attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:r(4804)}})])],1),e("ul",{staticClass:"desktop nav right"},[e("li",[e("router-link",{attrs:{to:"/map"}},[t._v(t._s("en"===t.lang?"Map":"Carte"))])],1),e("li",{staticClass:"coming_soon"},[t._v(" "+t._s("en"===t.lang?"Settings":"Réglages")+" ")])])]),t._m(0)]),e("router-view"),e("FooterArea"),e("div",{staticClass:"mobile_logobar"},[e("ul",[e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"/"}}),t._v(" Home ")],1),e("li",{staticClass:"coming_soon"},[t._v(" Shop ")]),e("li",{staticClass:"coming_soon"},[t._v(" Calendar ")]),e("li",[e("router-link",{staticClass:"mobile_a",attrs:{to:"/map"}}),t._v(" Map ")],1),e("li",{staticClass:"coming_soon"},[t._v(" Settings ")])])])],1)},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"langs"},[e("small",[e("a",{attrs:{href:"https://carllective.ca"}},[t._v("English")])]),e("small",[e("a",{attrs:{href:"https://fr.carllective.ca"}},[t._v("Français")])])])}],i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"footer-inner"},[e("a",{staticClass:"button signup",attrs:{href:"http://eepurl.com/h7ok6D"}},[t._v(t._s(t.$CTA))]),"en"===t.lang?e("p",[t._v("© Copyright "+t._s(t.year())+" Carllective. All Rights Reserved. ")]):e("p",[t._v("© Copyright "+t._s(t.year())+" Carllective. Tous droits reservés. ")]),e("p",[t._v(t._s("en"===t.lang?"Created by ":"Crée par ")+" Rebecca Jane "),e("a",{attrs:{href:"https://www.instagram.com/designbyrebj",target:"_blank"}},[t._v("(@designbyrebj)")])])])])},s=[],l=r(3822),c={name:"FooterArea",components:{},watch:{},computed:{...(0,l.rn)(["lang"])},methods:{year(){return(new Date).toString().split(" ")[3]}},data(){return{}},mounted(){}},u=c,p=r(1001),d=(0,p.Z)(u,i,s,!1,null,"61a068de",null),f=d.exports,g={name:"App",components:{FooterArea:f},watch:{},computed:{...(0,l.rn)(["loading","lang"])},methods:{},data(){return{}},mounted(){}},m=g,h=(0,p.Z)(m,o,a,!1,null,null,null),v=h.exports,y=r(2415);n.ZP.use(l.ZP);var _=new l.ZP.Store({state:{your_location:null,your_ip:null,loading:!0,lang:"en"},mutations:{setYourLocation(t,e){n.ZP.set(t,"your_location",e)},setYourIp(t,e){n.ZP.set(t,"your_ip",e)},setLoading(t,e){n.ZP.set(t,"loading",e)},setLang(t,e){n.ZP.set(t,"lang",e)}},actions:{setYourIp(t,e){t.commit("setYourIp",e)},setLoading(t,e){t.commit("setLoading",e)},setLang(t,e){t.commit("setLang",e)}},plugins:[(0,y.Z)()]}),b=r(6265);const C="appTstPp0g20fQA2b",w="tblkFpWzKkk9IbNIf",P="tbljvU0FGVULYx6rM",A="keyaJEowLnEfKAamU",T=`https://api.airtable.com/v0/${C}/${w}?api_key=${A}`,k=`https://api.airtable.com/v0/${C}/${P}?api_key=${A}`;var L=new class{constructor(){}process_latlng(t,e){return new Promise((n=>{var o=r(1059),a=new o({apiKey:A}).base("appTstPp0g20fQA2b"),i=e.split(" ").join("%20");b.get(`https://api.geoapify.com/v1/geocode/search?text=${i}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((t=>({lat:t.data.features[0].properties.lat,long:t.data.features[0].properties.lon}))).then((e=>{a("Table 1").update([{id:t,fields:{Lat:e.lat.toString(),Long:e.long.toString()}}]),n(e)}))}))}init_airtable2(){return new Promise((t=>{b.get(k).then((e=>{console.log(e.data.records[0].fields),"fr"===_.state.lang?(n.ZP.prototype.$header=e.data.records[0].fields.Header_fr,n.ZP.prototype.$smalltext=e.data.records[0].fields.Small_Text_fr,n.ZP.prototype.$CTA=e.data.records[0].fields.CTA_fr,n.ZP.prototype.$sort_CTA=e.data.records[0].fields.Sort_CTA_fr):(n.ZP.prototype.$header=e.data.records[0].fields.Header,n.ZP.prototype.$smalltext=e.data.records[0].fields.Small_Text,n.ZP.prototype.$CTA=e.data.records[0].fields.CTA,n.ZP.prototype.$sort_CTA=e.data.records[0].fields.Sort_CTA),t(e)}))}))}init_airtable(){return new Promise((t=>{b.get(T).then((e=>{var r=e.data.records.map((t=>({...t.fields,id:t.id}))).filter((t=>"True"!==t.Hidden)).sort(((t,e)=>parseInt(t.Date.split(":")[0].split("T")[0].split("-").join(""))-parseInt(e.Date.split(":")[0].split("T")[0].split("-").join("")))),o=0;for(let t=0;t<r.length;t++){if(r[t]["Date"])var a=r[t]["Date"].split(":")[0].split("T")[0].split("-")[1],i=r[t]["Date"].split(":")[0].split("T")[0].split("-")[2],s=r[t]["Date"].split("-")[0];r[t]["Lat"]&&r[t]["Long"]||this.process_latlng(r[t].id,r[t].Address).then((e=>{r[t]["Lat"]=e.lat,r[t]["Long"]=e.long})),a&&"fr"!==_.state.lang?r[t]["Month"]=this.getMonth(a):a&&"fr"===_.state.lang&&(r[t]["Month"]=this.getMonth_fr(a)),i&&(r[t]["Day"]=i),r[t].Name&&(r[t]["url"]=`${r[t].Name.toLowerCase().split(" ").join("-")}-${r[t].Month.toLowerCase()}-${r[t].Day.toLowerCase()}`),(new Date).toString().includes(`${r[t]["Month"].split("").splice(0,3).join("")} ${r[t]["Day"]} ${s}`)&&(r[t]["Today"]=!0),o++}o===r.length&&(n.ZP.prototype.$meets=r,t(r))}))}))}getMonth_fr(t){switch(t){case"01":return"Janvier";case"02":return"Fevrier";case"03":return"Mars";case"04":return"Avril";case"05":return"Mai";case"06":return"Juin";case"07":return"Juillet";case"08":return"Aout";case"09":return"Semptembre";case"10":return"Octobre";case"11":return"Novembre";case"12":return"Decembre"}}getMonth(t){switch(t){case"01":return"January";case"02":return"February";case"03":return"March";case"04":return"April";case"05":return"May";case"06":return"June";case"07":return"July";case"08":return"August";case"09":return"September";case"10":return"October";case"11":return"November";case"12":return"December"}}},$=r(6265),Z=new class{constructor(){}async init(){return new Promise((t=>{$.get("https://api.bigdatacloud.net/data/client-ip").then((t=>(console.log(navigator.language),t.data.ipString))).then((e=>{var r=[];_.state.your_location&&(r=["string"===typeof _.state.your_location.city,"string"===typeof _.state.your_location.state_code,"string"===typeof _.state.your_location.country]),!_.state.your_location||e!==_.state.your_ip||r.indexOf(!1)>-1?(_.commit("setYourIp",e),this.fetchLocation().then((e=>t(e)))):t(_.state.your_location)}))}))}fetchLocation(){return console.log("setting Location..."),new Promise((t=>{navigator.geolocation.getCurrentPosition((e=>{$.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${e.coords.latitude}&lon=${e.coords.longitude}&apiKey=7f74dc1e41fd4ffaa8377ea7d95ce297`).then((e=>{console.log("making API call"),_.commit("setYourLocation",e.data.features[0].properties),t(e.data.features[0].properties)}),(t=>{console.log(t,"Try again in a minute.")}))}))}))}nearest(t){return new Promise((e=>{if(_.state.your_location){const r={method:"GET",url:`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${_.state.your_location.lat}${_.state.your_location.lon}/nearbyCities`,params:t,headers:{"X-RapidAPI-Key":"6d50373928msh8ea7650abbc2053p1c1465jsn8d11a1823388","X-RapidAPI-Host":"wft-geo-db.p.rapidapi.com"}};$.request(r).then((function(t){e(t.data)})).catch((function(t){console.log("Please set your location",t)}))}else e()}))}},S=r(2631);n.ZP.use(S.Z);const j=new S.Z({base:"/",mode:"history",routes:[{path:"",component:()=>r.e(791).then(r.bind(r,8791))},{path:"/map",component:()=>r.e(546).then(r.bind(r,9546))},{path:"/:slug",component:()=>r.e(956).then(r.bind(r,4956))},{path:"/?:slug",component:()=>r.e(956).then(r.bind(r,4956))}]});var M=j,O=r(1706),x=r.n(O);let D=x().localize;function E(){return new Promise((t=>{n.ZP.prototype.$geoAPI=Z,n.ZP.prototype.$geoAPI.init({format:"json"}),new n.ZP({v_localize:D,store:_,router:M,render:t=>t(v)}).$mount("#app"),t()}))}n.ZP.config.productionTip=!1,window.location.href.includes("fr.")?_.commit("setLang","fr"):_.commit("setLang","en"),_.commit("setLoading",!0),setTimeout((()=>{_.commit("setLoading",!1)}),1500),Promise.all([L.init_airtable(),L.init_airtable2()]).then((()=>E()))},3826:function(t,e,r){"use strict";t.exports=r.p+"img/C.c9ba85c9.gif"},4804:function(t,e,r){"use strict";t.exports=r.p+"img/Carllective Wht.21c6f077.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],a=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(s=!1,a<i&&(i=a));if(s){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/"+t+"."+{546:"234c9553",791:"07a67f76",956:"97346856"}[t]+".js"}}(),function(){r.miniCssF=function(t){return"css/"+t+"."+{546:"76ae447e",791:"1e295cab",956:"95f653d0"}[t]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="carllective:";r.l=function(n,o,a,i){if(t[n])t[n].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+a){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+a),s.src=n),t[n]=[o];var d=function(e,r){s.onerror=s.onload=null,clearTimeout(f);var o=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(r)})),e)return e(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="DIR/"}(),function(){var t=function(t,e,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),n(l)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){o=i[n],a=o.getAttribute("data-href");if(a===t||a===e)return o}},n=function(n){return new Promise((function(o,a){var i=r.miniCssF(n),s=r.p+i;if(e(i,s))return o();t(n,s,o,a)}))},o={143:0};r.f.miniCss=function(t,e){var r={546:1,791:1,956:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=n(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=a);var i=r.p+r.u(e),s=new Error,l=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};r.l(i,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,i=n[0],s=n[1],l=n[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(l)var u=l(r)}for(e&&e(n);c<i.length;c++)a=i[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},n=self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7902)}));n=r.O(n)})();
//# sourceMappingURL=app.fc7860b2.js.map