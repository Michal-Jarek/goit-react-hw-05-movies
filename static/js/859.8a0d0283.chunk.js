"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[859],{859:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(439),a=n(861),c=n(757),s=n.n(c),i=n(831),u=n(791),o=n(78),l="MovieDetails_template__FWs7W",d=n(184),f=function(e){var t=e.filmId,n=(0,u.useState)(null),c=(0,r.Z)(n,2),f=c[0],v=c[1];if((0,u.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("w fetch reviews"),e.next=4,(0,o.Ny)(t);case 4:n=e.sent,v(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){return v(null)}}),[t]),f){var h=f.poster_path,p=f.title,x=f.release_date,j=f.vote_average,m=f.overview,g=f.genres;return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("div",{children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(h),alt:p})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{children:"".concat(p," (").concat(x.slice(0,4),")")}),(0,d.jsxs)("span",{children:["User Score: ",Math.round(10*j),"%"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("span",{children:m}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("span",{children:g.map((function(e){return"".concat(e.name,", ")}))})]})]})})}return(0,d.jsx)(i.a,{})},v=n(87),h=n(689),p="MovieDetailsPage_card__ESakD",x=function(){var e=(0,v.lr)(),t=(0,r.Z)(e,2),n=t[0],a=(t[1],(0,u.useState)(null)),c=(0,r.Z)(a,2),s=c[0],i=c[1];if((0,u.useEffect)((function(){i(n.get("id"))}),[]),console.log(s),s)return(0,d.jsxs)("div",{className:p,children:[(0,d.jsx)(f,{filmId:s}),(0,d.jsx)("div",{children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(v.OL,{to:"cast?id=".concat(s),children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(v.OL,{to:"reviews?id=".concat(s),children:"Reviews"})})]})}),(0,d.jsx)(h.j3,{})]})}},78:function(e,t,n){n.d(t,{Bt:function(){return d},Ny:function(){return l},Tg:function(){return o}});var r=n(861),a=n(757),c=n.n(a),s=n(263),i="?api_key=b6baed1eb57186fb03779557a2765daa",u=s.Z.create({baseURL:"https://api.themoviedb.org/3/",timeout:3e3}),o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("".concat("trending/movie/day").concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t).concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("movie/".concat(t,"/reviews").concat(i));case 2:if(0!==(n=e.sent).data.results.length){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=859.8a0d0283.chunk.js.map