"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[652],{854:function(e,t,n){var r=n(643),o=n(184);t.Z=function(){return(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)(r.yk,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})})}},126:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(689),o=n(87),a=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,a.jsx)("ul",{className:"list-group flex-row flex-wrap",children:t.map((function(e){return(0,a.jsx)("li",{className:"list-group-item btn btn-primary w-50 p-0 border",children:(0,a.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:n},className:"text-decoration-none text-black d-block  p-3",children:e.title})},e.id)}))})}},652:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var r=n(439),o=n(791),a=n(87),i=n(184),s=function(e){var t=e.onSubmit,n=(0,o.useState)(""),s=(0,r.Z)(n,2),c=s[0],u=s[1],l=(0,a.lr)(),f=(0,r.Z)(l,1)[0];(0,o.useEffect)((function(){var e=f.get("search");e&&u(e)}),[f]);return(0,i.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault(),t(c),u("")},className:"mb-5 ms-2",children:[(0,i.jsx)("label",{htmlFor:"",className:"w-25 me-2",children:(0,i.jsx)("input",{type:"text",value:c,onChange:function(e){var t=e.currentTarget.value;u(t)},name:"query",className:"form-control"})}),(0,i.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Search"})]})},c=n(126),u=n(194);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=n(433);function v(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=v(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var h=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=v(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],y=["delay","staleId"],b=function(e){return"number"==typeof e&&!isNaN(e)},E=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},C=function(e){return E(e)||T(e)?e:null},O=function(e){return(0,o.isValidElement)(e)||E(e)||T(e)||b(e)};function w(e){var t=e.enter,n=e.exit,r=e.appendPosition,a=void 0!==r&&r,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,i=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,p=a?"".concat(t,"--").concat(i):t,v=a?"".concat(n,"--").concat(i):n,h=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var e,t=f.current,n=p.split(" "),r=function e(r){var o;r.target===f.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==r.type&&(o=t.classList).remove.apply(o,(0,m.Z)(n)))};(e=t.classList).add.apply(e,(0,m.Z)(n)),t.addEventListener("animationend",r),t.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[d]),o.createElement(o.Fragment,null,r)}}function _(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,m.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},x=function(e){var t=e.theme,n=e.type,r=p(e,g);return o.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},L={info:function(e){return o.createElement(x,d({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return o.createElement(x,d({},e),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return o.createElement(x,d({},e),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return o.createElement(x,d({},e),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function N(e){var t=(0,o.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],u=(0,o.useRef)(null),l=(0,o.useRef)(new Map).current,f=function(e){return-1!==s.indexOf(e)},v=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!v.props.limit||t&&v.containerId!==t||(v.count-=v.queue.length,v.queue=[])}function g(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function w(){var e=v.queue.shift();N(e.toastContent,e.toastProps,e.staleId)}function x(e,t){var r=t.delay,a=t.staleId,i=p(t,y);if(O(e)&&!function(e){return!u.current||v.props.enableMultiContainer&&e.containerId!==v.props.containerId||l.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,c=i.updateId,f=i.data,m=v.props,h=function(){return g(s)},x=null==c;x&&v.count++;var k,P,R=d(d(d({},m),{},{style:m.toastStyle,key:v.toastKey++},i),{},{toastId:s,updateId:c,data:f,closeToast:h,isIn:!1,className:C(i.className||m.toastClassName),bodyClassName:C(i.bodyClassName||m.bodyClassName),progressClassName:C(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(k=i.autoClose,P=m.autoClose,!1===k||b(k)&&k>0?k:P),deleteToast:function(){var e=_(l.get(s),"removed");l.delete(s),I.emit(4,e);var t=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),t>0){var r=null==s?v.props.limit:1;if(1===t||1===r)v.displayedToast++,w();else{var o=r>t?t:r;v.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});R.iconOut=function(e){var t=e.theme,n=e.type,r=e.isLoading,a=e.icon,i=null,s={theme:t,type:n};return!1===a||(T(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):E(a)||b(a)?i=a:r?i=L.spinner():function(e){return e in L}(n)&&(i=L[n](s))),i}(R),T(i.onOpen)&&(R.onOpen=i.onOpen),T(i.onClose)&&(R.onClose=i.onClose),R.closeButton=m.closeButton,!1===i.closeButton||O(i.closeButton)?R.closeButton=i.closeButton:!0===i.closeButton&&(R.closeButton=!O(m.closeButton)||m.closeButton);var j=e;(0,o.isValidElement)(e)&&!E(e.type)?j=(0,o.cloneElement)(e,{closeToast:h,toastProps:R,data:f}):T(e)&&(j=e({closeToast:h,toastProps:R,data:f})),m.limit&&m.limit>0&&v.count>m.limit&&x?v.queue.push({toastContent:j,toastProps:R,staleId:a}):b(r)?setTimeout((function(){N(j,R,a)}),r):N(j,R,a)}}function N(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,m.Z)(e),[r]).filter((function(e){return e!==n}))})),I.emit(4,_(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return v.containerId=e.containerId,I.cancelEmit(3).on(0,x).on(1,(function(e){return u.current&&g(e)})).on(5,h).emit(2,v),function(){l.clear(),I.emit(3,v)}}),[]),(0,o.useEffect)((function(){v.props=e,v.isToastActive=f,v.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function P(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function R(e){var t=(0,o.useState)(!1),n=(0,r.Z)(t,2),a=n[0],i=n[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],f=(0,o.useRef)(null),d=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(e),m=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),d.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",_),document.addEventListener("touchmove",w),document.addEventListener("touchend",_);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=k(t.nativeEvent),d.y=P(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(d.boundingRect){var n=d.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&d.x>=a&&d.x<=i&&d.y>=r&&d.y<=o?O():C()}}function C(){i(!0)}function O(){i(!1)}function w(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,a&&O(),d.x=k(t),d.y=P(t),d.delta="x"===e.draggableDirection?d.x-d.start:d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(d.delta,"px)"),n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function _(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",_);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,o.useEffect)((function(){p.current=e})),(0,o.useEffect)((function(){return f.current&&f.current.addEventListener("d",C,{once:!0}),T(e.onOpen)&&e.onOpen((0,o.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;T(e.onClose)&&e.onClose((0,o.isValidElement)(e.children)&&e.children.props)}}),[]),(0,o.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||O(),window.addEventListener("focus",C),window.addEventListener("blur",O)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(I.onMouseEnter=O,I.onMouseLeave=C),y&&(I.onClick=function(e){g&&g(e),d.canCloseOnClick&&h()}),{playToast:C,pauseToast:O,isRunning:a,preventExitTransition:u,toastRef:f,eventHandlers:I}}function j(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function M(e){var t=e.delay,n=e.isRunning,r=e.closeToast,a=e.type,i=void 0===a?"default":a,s=e.hide,c=e.className,u=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,v=e.isIn,g=e.theme,y=s||f&&0===p,b=d(d({},u),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});f&&(b.transform="scaleX(".concat(p,")"));var E=h("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),C=T(c)?c({rtl:m,type:i,defaultClassName:E}):h(E,c);return o.createElement("div",l({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:C,style:b},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){v&&r()}))}var D=function(e){var t=R(e),n=t.isRunning,r=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,s=e.closeButton,c=e.children,u=e.autoClose,l=e.onClick,f=e.type,p=e.hideProgressBar,m=e.closeToast,v=e.transition,g=e.position,y=e.className,b=e.style,E=e.bodyClassName,C=e.bodyStyle,O=e.progressClassName,w=e.progressStyle,_=e.updateId,I=e.role,x=e.progress,L=e.rtl,N=e.toastId,k=e.deleteToast,P=e.isIn,D=e.isLoading,S=e.iconOut,B=e.closeOnClick,A=e.theme,Z=h("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(f),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":B}),z=T(y)?y({rtl:L,position:g,type:f,defaultClassName:Z}):h(Z,y),F=!!x||!u,H={closeToast:m,type:f,theme:A},q=null;return!1===s||(q=T(s)?s(H):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,H):j(H)),o.createElement(v,{isIn:P,done:k,position:g,preventExitTransition:r,nodeRef:a},o.createElement("div",d(d({id:N,onClick:l,className:z},i),{},{style:b,ref:a}),o.createElement("div",d(d({},P&&{role:I}),{},{className:T(E)?E({type:f}):h("Toastify__toast-body",E),style:C}),null!=S&&o.createElement("div",{className:h("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},S),o.createElement("div",null,c)),q,o.createElement(M,d(d({},_&&!F?{key:"pb-".concat(_)}:{}),{},{rtl:L,theme:A,delay:u,isRunning:n,isIn:P,closeToast:m,hide:p,type:f,style:w,className:O,controlledProgress:F,progress:x||0}))))},S=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},B=w(S("bounce",!0)),A=(w(S("slide",!0)),w(S("zoom")),w(S("flip")),(0,o.forwardRef)((function(e,t){var n=N(e),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=e.className,c=e.style,u=e.rtl,l=e.containerId;function f(e){var t=h("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":u});return T(s)?s({position:e,rtl:u,defaultClassName:t}):h(t,C(s))}return(0,o.useEffect)((function(){t&&(t.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:l},r((function(e,t){var n=t.length?d({},c):d(d({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:f(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var r=e.content,a=e.props;return o.createElement(D,d(d({},a),{},{isIn:i(a.toastId),style:d(d({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),r)})))})))})));A.displayName="ToastContainer",A.defaultProps={position:"top-right",transition:B,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var Z,z=new Map,F=[],H=1;function q(){return""+H++}function Q(e){return e&&(E(e.toastId)||b(e.toastId))?e.toastId:q()}function V(e,t){return z.size>0?I.emit(0,e,t):F.push({content:e,options:t}),t.toastId}function U(e,t){return d(d({},t),{},{type:t&&t.type||e,toastId:Q(t)})}function G(e){return function(t,n){return V(t,U(e,n))}}function W(e,t){return V(e,U("default",t))}W.loading=function(e,t){return V(e,U("default",d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=E(o)?W.loading(o,n):W.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=d(d(d({type:e},s),n),{},{data:o}),i=E(t)?{render:t}:t;return r?W.update(r,d(d({},a),i)):W(i.render,d(d({},a),i)),o}W.dismiss(r)},u=T(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},W.success=G("success"),W.info=G("info"),W.error=G("error"),W.warning=G("warning"),W.warn=W.warning,W.dark=function(e,t){return V(e,U("default",d({theme:"dark"},t)))},W.dismiss=function(e){z.size>0?I.emit(1,e):F=F.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},W.isActive=function(e){var t=!1;return z.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=z.get(n||Z);return r&&r.getToast(e)}(e,t);if(n){var r=n.props,o=n.content,a=d(d(d({},r),t),{},{toastId:t.toastId||e,updateId:q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,V(i,a)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){Z=e.containerId||e,z.set(Z,e),F.forEach((function(e){I.emit(0,e.content,e.options)})),F=[]})).on(3,(function(e){z.delete(e.containerId||e),0===z.size&&I.off(0).off(1).off(5)}));var X=n(854),Y=function(){var e=(0,o.useState)(null),t=(0,r.Z)(e,2),n=t[0],l=t[1],f=(0,o.useState)(!1),d=(0,r.Z)(f,2),p=d[0],m=d[1],v=(0,a.lr)(),h=(0,r.Z)(v,2),g=h[0],y=h[1];(0,o.useEffect)((function(){var e=g.get("search");e&&(m(!0),setTimeout((function(){(0,u.Pv)(e).then((function(e){if(!e.length)throw new Error;l(e)})).catch((function(t){return W.error((0,i.jsxs)("span",{children:["No movies matched your query (",(0,i.jsx)("b",{children:e}),")"]}))})).finally((function(){return m(!1)}))}),500))}),[g]);return(0,i.jsxs)("main",{children:[(0,i.jsx)(s,{onSubmit:function(e){var t=e.toLowerCase().trim();t&&(l(null),y({search:t}))}}),p&&(0,i.jsx)(X.Z,{}),n&&(0,i.jsx)(c.e,{movies:n}),(0,i.jsx)(A,{position:"top-right",autoClose:5e3,limit:3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"colored"})]})}},194:function(e,t,n){n.d(t,{Mc:function(){return c},Pv:function(){return s},wr:function(){return u}});var r=n(861),o=n(757),a=n.n(o),i=n(263).Z.create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179",query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(a().mark((function e(t){var n,r,o=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"",e.next=3,i.get("/movie/"+t+n,{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day",{params:{api_key:"94b41ec0e6f6b6ffeb7ae80dc6b59179"}});case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=652.64141a82.chunk.js.map