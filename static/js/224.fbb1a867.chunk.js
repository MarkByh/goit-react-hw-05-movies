"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[224],{224:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(439),a=t(791),u=t(689),c="Reviews_revItem__q9Ik7",i="Reviews_revList__O2LWE",o=t(690),s=t(184);function f(){var e=(0,a.useState)([]),n=(0,r.Z)(e,2),t=n[0],f=n[1],p=(0,u.UO)().id;return(0,a.useEffect)((function(){(0,o.Jh)(p).then((function(e){f(e.results)})).catch((function(e){console.log(e)}))}),[p]),(0,s.jsxs)("div",{children:[(0,s.jsx)("ul",{className:i,children:null===t||void 0===t?void 0:t.map((function(e){return(0,s.jsxs)("li",{className:c,children:[(0,s.jsxs)("h3",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))}),0===(null===t||void 0===t?void 0:t.length)&&(0,s.jsx)("h2",{children:"We don't have any reviews for this movie"})]})}},690:function(e,n,t){t.d(n,{Hg:function(){return o},Jh:function(){return v},TP:function(){return f},z1:function(){return s},zv:function(){return p}});var r=t(861),a=t(757),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="6730498ead9b53c83d6423d9a3bbfa5b",o=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=224.fbb1a867.chunk.js.map