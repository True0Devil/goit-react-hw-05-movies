"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[726],{726:function(e,r,t){t.r(r);var n=t(439),a=t(791),u=t(689),c=t(194),s=t(184);r.default=function(){var e=(0,a.useState)(),r=(0,n.Z)(e,2),t=r[0],i=r[1],o=(0,u.UO)().movieID;if((0,a.useEffect)((function(){(0,c.Mc)(o,"/reviews").then((function(e){return i(e.results)}))}),[o]),t)return(0,s.jsx)("ul",{children:t.length>0?t.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsx)("h5",{children:e.author_details.username}),(0,s.jsx)("p",{children:e.content})]},e.id)})):(0,s.jsx)("div",{children:"No reviews"})})}},194:function(e,r,t){t.d(r,{Mc:function(){return i},Pv:function(){return s},wr:function(){return o}});var n=t(861),a=t(757),u=t.n(a),c=t(263).Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179",query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",e.next=3,c.get("/movie/"+r+t,{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=726.8f9e3605.chunk.js.map