(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2cbc":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("h1",{staticClass:"my-4"},[t._v(t._s(t.user.name))]),a("b-row",[a("b-col",{attrs:{lg:"6","offset-lg":"3"}},[a("EventsControl",{model:{value:t.controlsValue,callback:function(e){t.controlsValue=e},expression:"controlsValue"}})],1)],1),a("b-row",{staticClass:"my-5"},[a("b-col",{attrs:{lg:"4"}},[a("UserInfo",{staticClass:"info",attrs:{user:t.userVM}})],1),a("b-col",{attrs:{lg:"2"}},[a("div",{staticClass:"chart-container"},[a("h3",[t._v("Lety na pozici")]),t.loaded?a("DonutGraph",{attrs:{data:t.escortEventsCountData}}):t._e()],1)]),a("b-col",{attrs:{lg:"3"}},[a("div",{staticClass:"chart-container"},[a("h3",[t._v("Lety v měsících")]),t.loaded?a("BarGraph",{attrs:{data:t.monthsCounts}}):t._e()],1)]),a("b-col",{attrs:{lg:"3"}},[a("div",{staticClass:"chart-container"},[a("h3",[t._v("Lety ve dnech")]),t.loaded?a("BarGraph",{attrs:{data:t.weekDayCounts}}):t._e()],1)])],1),a("b-row",[a("b-col",[a("h2",[t._v("Seznam letů")]),a("Events",{staticClass:"info",attrs:{events:t.filteredEvents}})],1)],1)],1)},r=[],s=(a("4de4"),a("caad"),a("d81d"),a("13d5"),a("d3b7"),a("25f0"),a("2532"),a("3ca3"),a("ddb0"),a("3835")),c=(a("96cf"),a("1da1")),o=a("d4ec"),u=a("bee2"),i=a("262e"),l=a("2caf"),d=a("9ab4"),v=a("60a3"),f=a("c8be"),b=a("dac6"),h=a("19b8"),p=a("d720"),j=a("1fca"),m=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(u["a"])(a,[{key:"mounted",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var t={maintainAspectRatio:!1};this.renderChart(this.data,t)}}]),a}(Object(v["b"])(j["b"]));Object(d["a"])([Object(v["c"])({required:!0})],m.prototype,"data",void 0),Object(d["a"])([Object(v["e"])("data")],m.prototype,"drawChart",null),m=Object(d["a"])([v["a"]],m);var y,O,w=m,D=w,g=a("2877"),C=Object(g["a"])(D,y,O,!1,null,null,null),k=C.exports,E=a("f4a1"),V=a("3b7b"),_=function(t){Object(i["a"])(a,t);var e=Object(l["a"])(a);function a(){var t;return Object(o["a"])(this,a),t=e.apply(this,arguments),t.user={},t.userVM={},t.events=[],t.loaded=!1,t.controlsValue={entriesDate:"",eventTypes:["1","2"]},t}return Object(u["a"])(a,[{key:"created",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.LoadData();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"LoadData",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=parseInt(this.$route.params.id),Promise.all([Object(f["b"])(e),Object(f["c"])(e)]).then((function(t){var e=Object(s["a"])(t,2),n=e[0],r=e[1];a.user=n,a.events=r,a.userVM=n,a.userVM.eventCount=a.events.length,a.userVM.customerCount=a.events.map((function(t){return t.customerCount})).reduce((function(t,e){return t+e}));var c=a.events.sort((function(t,e){return new Date(t.startDate).getTime()-new Date(e.startDate).getTime()}));c.length>0&&(a.userVM.firstEventDate=new Date(c[0].startDate).toLocaleDateString(),a.userVM.lastEventDate=new Date(c[c.length-1].startDate).toLocaleDateString()),a.loaded=!0}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"filteredEvents",get:function(){var t=this;return this.events.filter((function(e){return e.startDate>t.controlsValue.entriesDate&&t.controlsValue.eventTypes.includes(e.eventType.toString())}))}},{key:"escortEventsCountData",get:function(){return V["a"](this.filteredEvents,this.user.id)}},{key:"weekDayCounts",get:function(){return V["d"](this.filteredEvents)}},{key:"monthsCounts",get:function(){return V["b"](this.filteredEvents)}}]),a}(v["d"]);Object(d["a"])([Object(v["e"])("$route")],_.prototype,"LoadData",null),_=Object(d["a"])([Object(v["a"])({components:{UserInfo:b["a"],Events:h["a"],BarGraph:p["a"],DonutGraph:k,EventsControl:E["a"]}})],_);var L=_,M=L,x=(a("f31c"),Object(g["a"])(M,n,r,!1,null,"71c3b7f4",null));e["default"]=x.exports},"912f":function(t,e,a){},f31c:function(t,e,a){"use strict";a("912f")}}]);
//# sourceMappingURL=about.3fd7340e.js.map