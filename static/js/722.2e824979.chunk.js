"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[722],{722:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),i=e(87),o=e(689),f=e(78),p=e(184),l=function(){var t=(0,s.useState)([]),n=(0,a.Z)(t,2),e=n[0],u=n[1],l=(0,o.TH)();if((0,s.useEffect)((function(){var t=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Tg)();case 3:n=t.sent,u(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();0===e.length&&t()}),[e]),0!==e.length)return console.log(e),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)("ul",{children:e.map((function(t){var n=t.original_title,e=t.id;return(0,p.jsx)("li",{children:(0,p.jsx)(i.OL,{to:"movies/movie?id=".concat(e),state:{from:l},children:n})},e)}))})]})},v={},d=function(){return(0,p.jsx)("div",{className:v.homepage,children:(0,p.jsx)(l,{})})}},78:function(t,n,e){e.d(n,{Bt:function(){return p},Fn:function(){return v},Ny:function(){return f},PI:function(){return l},Tg:function(){return o}});var r=e(861),a=e(757),u=e.n(a),c=e(263),s="?api_key=b6baed1eb57186fb03779557a2765daa",i=c.Z.create({baseURL:"https://api.themoviedb.org/3/",timeout:3e3}),o=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("".concat("trending/movie/day").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n).concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n,"/reviews").concat(s));case 2:if(0!==(e=t.sent).data.results.length){t.next=5;break}return t.abrupt("return",null);case 5:return t.abrupt("return",e.data.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("movie/".concat(n,"/credits").concat(s));case 2:if(0!==(e=t.sent).data.cast.length){t.next=5;break}return t.abrupt("return",null);case 5:return t.abrupt("return",e.data.cast);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.get("search/movie".concat(s,"&query=").concat(n,"&language=en-US&page=1&include_adult=true"));case 2:if(0!==(e=t.sent).data.results){t.next=5;break}return t.abrupt("return",null);case 5:return t.abrupt("return",e.data.results);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=722.2e824979.chunk.js.map