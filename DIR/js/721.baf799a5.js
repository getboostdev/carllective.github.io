"use strict";(self["webpackChunkcarllective"]=self["webpackChunkcarllective"]||[]).push([[721],{3721:function(t,s,i){i.r(s),i.d(s,{default:function(){return l}});var e=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"meets"}},[s("div",{staticClass:"title-section"},[s("h3",{staticClass:"pre-title"},[t._v("Beta Version! :)")]),s("h1",{staticClass:"header"},[t._v("Upcoming Car Meets")]),s("table",{staticClass:"today"},[s("tr",{staticClass:"small"},[s("img",{staticClass:"icon",attrs:{src:i(6918)}}),s("span",{domProps:{innerHTML:t._s(t.todaysDate())}})]),s("tr",{staticClass:"small"},[s("img",{staticClass:"icon",attrs:{src:i(6639)}}),s("span",{domProps:{innerHTML:t._s(t.location())}})])]),s("div",{staticClass:"select"},[s("h3",[t._v("Sort By")]),s("div",{staticClass:"dropdown"},[s("p",{staticClass:"mainoption",on:{click:function(s){t.showDropdown=!t.showDropdown}}},[t._v(t._s(t.activeOption)+" "),s("span",{class:"chevron "+(t.showDropdown?"up":"down")},[t._v("▼")])]),s("ul",{style:t.showDropdown?"height: auto; overflow: visible":"height: 0%; overflow: hidden"},[s("li",{on:{click:function(s){return t.sortBy("0")}}},[t._v("All")]),s("li",{on:{click:function(s){return t.sortBy("10")}}},[t._v("Within 10km")]),s("li",{on:{click:function(s){return t.sortBy("50")}}},[t._v("Within 50km")]),s("li",{on:{click:function(s){return t.sortBy("100")}}},[t._v("Within 100km")])])])])]),s("div",{staticClass:"meets_cards"},t._l(t.meets,(function(i,e){return s("a",{key:e,staticClass:"meet_card_link",attrs:{name:"meet_card_link",href:`/${i.url}`}},[s("div",{staticClass:"meet_card",style:`background-image: url(${i.Image[0].url})`},[s("div",{staticClass:"meet_card_inner"},[s("div",{staticClass:"title"},[s("h2",[t._v(t._s(i.Name))]),s("h3",{staticClass:"location"},[t._v(t._s(i.Town)+", "+t._s(i.Province))])]),s("div",{staticClass:"date"},[s("h4",{staticClass:"month"},[t._v(t._s(i.Month))]),s("h3",{staticClass:"day"},[t._v(t._s(i.Day))])])])])])})),0)])},a=[],n={name:"MeetsList",components:{},watch:{},computed:{},methods:{todaysDate(){return(new Date).toString().split(" ").splice(0,4).join(" ")},location(){return`${this.$geo.city.name}, ${this.$geo.area.code.split("-")[1]}, ${this.$geo.country.name}`},sortBy(t){if(this.activeOption=`Within ${t} km`,this.showDropdown=!1,"0"===t)return this.meets=this.$meets,void(this.activeOption="All");this.$geoAPI.nearest({radius:t,limit:"10",distanceUnit:"KM",minPopulation:"100000"}).then((t=>{var s=t.data.map((t=>`${t.city}, ${t.regionCode}`));this.meets=this.$meets.filter((t=>{if(s.indexOf(`${t.Town}, ${t.Province}`)>-1)return t}))}))}},data(){return{meets:this.$meets,showDropdown:!1,activeOption:"All"}}},o=n,r=i(1001),c=(0,r.Z)(o,e,a,!1,null,"ea174c2a",null),l=c.exports},6918:function(t,s,i){t.exports=i.p+"img/Calendar.c8f437a6.svg"},6639:function(t,s,i){t.exports=i.p+"img/Location.83f10a00.svg"}}]);
//# sourceMappingURL=721.baf799a5.js.map