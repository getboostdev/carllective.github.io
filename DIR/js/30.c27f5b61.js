"use strict";(self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[]).push([[30],{1941:function(t,i,n){n.r(i),n.d(i,{default:function(){return r}});var a=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"meetspage"}},[t.info?i("div",{staticClass:"banner",style:`background-image: url(${t.info.Image?t.info.Image[0].url:""})`},[i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[t.info.Name?i("h1",[t._v(t._s(t.info.Name))]):t._e(),t.info.Town?i("h3",{staticClass:"location"},[t._v(t._s(t.info.Town))]):t._e()]),i("div",{staticClass:"date"},[t.info.Month?i("h4",{staticClass:"month"},[t._v(t._s(t.info.Month))]):t._e(),t.info.Day?i("h3",{staticClass:"day"},[t._v(t._s(t.info.Day))]):t._e()])])]):t._e(),t.info?i("div",{staticClass:"page"},[i("table",{staticClass:"pageinfo"},[i("tr",[t.info.Address?i("td",[i("h2",[t._v("Location")]),i("p",[t._v(t._s(t.info.Address))])]):t._e(),t.info.Time?i("td",[i("h2",[t._v("Time")]),i("p",[t._v(t._s(t.info.Time))])]):t._e()])]),t.info.Info?i("div",[i("h2",[t._v("Additional Info")]),i("p",{domProps:{innerHTML:t._s(t.parsedInfo(t.info.Info))}})]):t._e(),i("div",{staticClass:"ctas"},[t.info.Calendar_Link?i("a",{staticClass:"button",attrs:{target:"_blank",href:t.info.Calendar_Link}},[t._v("Save to Calendar")]):t._e(),t.info.Website_Link?i("a",{staticClass:"button",attrs:{target:"_blank",href:t.info.Website_Link}},[t._v("Visit Website")]):t._e(),t.info.Buy_Tickets_Link?i("a",{staticClass:"button fullwidth",attrs:{target:"_blank",href:t.info.Buy_Tickets_Link}},[t._v("Buy Tickets")]):t._e()])]):t._e()])},e=[],s={name:"MeetsPage",components:{},watch:{},computed:{},methods:{parsedInfo(t){var i=t.replace(/(?:\r\n|\r|\n)/g,"<br />");return i}},data(){return{info:null}},mounted(){try{this.info=this.$meets.filter((t=>`/${t.url}`===window.location.pathname))[0]}catch{window.location.href="/"}console.log(this.info)}},o=s,l=n(1001),f=(0,l.Z)(o,a,e,!1,null,"24d8faa9",null),r=f.exports}}]);
//# sourceMappingURL=30.c27f5b61.js.map