"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{126:function(e,r,t){t.d(r,{e:function(){return u}});var n=t(689),a=t(87),c=t(184),u=function(e){var r=e.movies,t=(0,n.TH)();return(0,c.jsx)("ul",{className:"list-group flex-row flex-wrap",children:r.map((function(e){return(0,c.jsx)("li",{className:"list-group-item btn btn-primary w-50 p-0 border",children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},className:"text-decoration-none text-black d-block  p-3",children:e.title})},e.id)}))})}},544:function(e,r,t){t.r(r);var n=t(439),a=t(126),c=t(791),u=t(194),s=t(184);r.default=function(){var e=(0,c.useState)(),r=(0,n.Z)(e,2),t=r[0],i=r[1];if((0,c.useEffect)((function(){(0,u.wr)().then(i)}),[]),t)return(0,s.jsxs)("main",{children:[(0,s.jsx)("h1",{className:"mb-5 ms-5",children:"Trending Today"}),(0,s.jsx)(a.e,{movies:t})]})}},194:function(e,r,t){t.d(r,{Mc:function(){return i},Pv:function(){return s},wr:function(){return o}});var n=t(861),a=t(757),c=t.n(a),u=t(263).Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/search/movie",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179",query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",e.next=3,u.get("/movie/"+r+t,{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/trending/movie/day",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.48b2f35f.chunk.js.map