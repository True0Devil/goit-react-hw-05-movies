"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[205],{126:function(e,r,t){t.d(r,{e:function(){return i}});var n=t(689),a=t(87),u=t(184),i=function(e){var r=e.movies,t=(0,n.TH)();return(0,u.jsx)("ul",{children:r.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:t},children:e.title})},e.id)}))})}},205:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(439),a=t(791),u=t(87),i=t(184),o=function(e){var r=e.onSubmit,t=(0,a.useState)(""),u=(0,n.Z)(t,2),o=u[0],c=u[1];return(0,i.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),r(o),c("")},children:[(0,i.jsx)("label",{htmlFor:"",children:(0,i.jsx)("input",{type:"text",value:o,onChange:function(e){var r=e.currentTarget.value;c(r)},name:"query"})}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})},c=t(126),s=t(194),f=t(596),l=t(643),p=function(){return(0,i.jsx)("div",{children:(0,i.jsx)(l.yk,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})},h=function(){var e=(0,a.useState)(null),r=(0,n.Z)(e,2),t=r[0],l=r[1],h=(0,a.useState)(!1),d=(0,n.Z)(h,2),v=d[0],m=d[1],b=(0,u.lr)(),x=(0,n.Z)(b,2),w=x[0],g=x[1];(0,a.useEffect)((function(){var e=w.get("search");e&&(m(!0),setTimeout((function(){(0,s.Pv)(e).then((function(e){if(!e.length)throw new Error;l(e)})).catch((function(r){return f.Am.error((0,i.jsxs)("span",{children:["No movies matched your query (",(0,i.jsx)("b",{children:e}),")"]}))})).finally((function(){return m(!1)}))}),500))}),[w]);return(0,i.jsxs)("main",{children:[(0,i.jsx)(o,{onSubmit:function(e){var r=e.toLowerCase().trim();r&&g({search:r})}}),v&&(0,i.jsx)(p,{}),t&&(0,i.jsx)(c.e,{movies:t}),(0,i.jsx)(f.Ix,{position:"top-right",autoClose:5e3,limit:3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}},194:function(e,r,t){t.d(r,{Mc:function(){return c},Pv:function(){return o},wr:function(){return s}});var n=t(861),a=t(757),u=t.n(a),i=t(263).Z.create({baseURL:"https://api.themoviedb.org/3"}),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179",query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n,a=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:"",e.next=3,i.get("/movie/"+r+t,{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=205.1cb91f7e.chunk.js.map