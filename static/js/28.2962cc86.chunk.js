(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[28,29],{112:function(t,e,n){!function(t,e){function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var i="Left",c="Right",a="Up",r="Down",o={delta:10,preventDefaultTouchmoveEvent:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},l="mousemove",u="mouseup",d="touchend",h="touchmove",p="touchstart";function v(t,e,n,o){return t>e?n>0?c:i:o>0?r:a}function f(t,e){if(0===e)return t;var n=Math.PI/180*e;return[t[0]*Math.cos(n)+t[1]*Math.sin(n),t[1]*Math.cos(n)-t[0]*Math.sin(n)]}function j(t,e){var i=function(e){e&&"touches"in e&&e.touches.length>1||t((function(t,i){i.trackMouse&&(document.addEventListener(l,c),document.addEventListener(u,o));var a="touches"in e?e.touches[0]:e,r=f([a.clientX,a.clientY],i.rotationAngle);return n({},t,s,{initial:[].concat(r),xy:r,start:e.timeStamp||0})}))},c=function(e){t((function(t,i){if("touches"in e&&e.touches.length>1)return t;var c="touches"in e?e.touches[0]:e,a=f([c.clientX,c.clientY],i.rotationAngle),r=a[0],o=a[1],s=r-t.xy[0],l=o-t.xy[1],u=Math.abs(s),d=Math.abs(l),h=(e.timeStamp||0)-t.start,p=Math.sqrt(u*u+d*d)/(h||1),j=[s/(h||1),l/(h||1)];if(u<i.delta&&d<i.delta&&!t.swiping)return t;var b=v(u,d,s,l),O={absX:u,absY:d,deltaX:s,deltaY:l,dir:b,event:e,first:t.first,initial:t.initial,velocity:p,vxvy:j};O.first&&i.onSwipeStart&&i.onSwipeStart(O),i.onSwiping&&i.onSwiping(O);var m=!1;return(i.onSwiping||i.onSwiped||"onSwiped"+b in i)&&(m=!0),m&&i.preventDefaultTouchmoveEvent&&i.trackTouch&&e.cancelable&&e.preventDefault(),n({},t,{first:!1,eventData:O,swiping:!0})}))},a=function(e){t((function(t,i){var c;if(t.swiping&&t.eventData){c=n({},t.eventData,{event:e}),i.onSwiped&&i.onSwiped(c);var a="onSwiped"+c.dir;a in i&&i[a](c)}else i.onTap&&i.onTap({event:e});return n({},t,s,{eventData:c})}))},r=function(){document.removeEventListener(l,c),document.removeEventListener(u,o)},o=function(t){r(),a(t)},j=function(t,e){var n=function(){};if(t&&t.addEventListener){var r=[[p,i],[h,c],[d,a]];r.forEach((function(n){var i=n[0],c=n[1];return t.addEventListener(i,c,{passive:e})})),n=function(){return r.forEach((function(e){var n=e[0],i=e[1];return t.removeEventListener(n,i)}))}}return n},b={ref:function(e){null!==e&&t((function(t,i){if(t.el===e)return t;var c={};return t.el&&t.el!==e&&t.cleanUpTouch&&(t.cleanUpTouch(),c.cleanUpTouch=void 0),i.trackTouch&&e&&(c.cleanUpTouch=j(e,!i.preventDefaultTouchmoveEvent)),n({},t,{el:e},c)}))}};return e.trackMouse&&(b.onMouseDown=i),[b,j]}function b(t,e,i){var c={};return!e.trackTouch&&t.cleanUpTouch?(t.cleanUpTouch(),c.cleanUpTouch=void 0):e.trackTouch&&!t.cleanUpTouch&&t.el&&(c.cleanUpTouch=i(t.el,!e.preventDefaultTouchmoveEvent)),n({},t,c)}function O(t){var i=t.trackMouse,c=e.useRef(n({},s)),a=e.useRef(n({},o));a.current=n({},o,t);var r=e.useMemo((function(){return j((function(t){return c.current=t(c.current,a.current)}),{trackMouse:i})}),[i]),l=r[0],u=r[1];return c.current=b(c.current,a.current,u),l}t.DOWN=r,t.LEFT=i,t.RIGHT=c,t.UP=a,t.useSwipeable=O}(e,n(2))},229:function(t,e,n){"use strict";n.r(e);var i=n(97),c=n(39),a=n(82),r=n(7),o=n(101),s=n(18),l=function(t){var e=t.width,n=t.statistic,i=window.innerWidth;e||(e=i>769?480:i);var c=(i>769?.9:1)*e/.885,a=42+r.k+c;return Object(s.jsxs)(o.a,{viewBox:"0 0 ".concat(e," ").concat(a),height:a,width:e,speed:2,backgroundColor:r.w[n].color,children:[Object(s.jsx)("circle",{cx:.4*e,cy:a/2,r:"5"}),Object(s.jsx)("circle",{cx:.5*e,cy:a/2,r:"5"}),Object(s.jsx)("circle",{cx:.6*e,cy:a/2,r:"5"})]})},u=n(22),d=n(90),h=n(85),p=n.n(h),v=n(84),f=n.n(v),j=n(94),b=n(2),O=n(294),m=n(5),g=n(91),x=n(112),T=n(286),C=Object(b.lazy)((function(){return Object(u.l)((function(){return Promise.all([n.e(1),n.e(15),n.e(41)]).then(n.bind(null,299))}))}));function y(t){var e,n=this,o=t.stateCode,h=void 0===o?"TT":o,v=t.data,f=t.mapStatistic,y=t.setMapStatistic,w=t.regionHighlighted,S=t.setRegionHighlighted,k=t.anchor,E=t.setAnchor,U=t.expandTable,D=void 0!==U&&U,N=t.hideDistrictData,L=void 0!==N&&N,M=t.lastUpdatedDate,R=Object(O.a)().t,B=Object(b.useRef)(),I=Object(T.a)().width,H=Object(b.useState)(r.o.DISTRICTS),P=Object(a.a)(H,2),A=P[0],Y=P[1],W=Object(b.useState)(r.p.BUBBLES),X=Object(a.a)(W,2),z=X[0],V=X[1],F=r.l[h],J=F.mapType===r.n.COUNTRY?v:Object(c.a)({},h,v[h]),_=Object(b.useMemo)((function(){var t,e,n=(w.districtName?null===(t=v[w.stateCode])||void 0===t||null===(e=t.districts)||void 0===e?void 0:e[w.districtName]:v[w.stateCode])||{};return Object(j.a)(n,(function(t){t.name=w.districtName||r.v[w.stateCode]}))}),[v,w.stateCode,w.districtName]),q=Object(b.useCallback)((function(t){switch(t){case r.p.CHOROPLETH:V(r.p.CHOROPLETH);break;case r.p.BUBBLES:V(r.p.BUBBLES)}}),[V]),G=Object(b.useCallback)((function(){var t=A===r.o.DISTRICTS?r.o.STATES:r.o.DISTRICTS;t===r.o.STATES&&S({stateCode:w.stateCode,districtName:null}),Y(t)}),[A,S,w.stateCode]),Z=Object(b.useMemo)((function(){return Object(s.jsx)("svg",{width:"314",height:"314",viewBox:"0 0 314 314",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(s.jsx)("path",{d:"M78.2861 145.778C80.6671 155.387 84.6108 164.28 92.421 170.488C94.5409 174.766 93.7381 180.115 96.2412 184.535C99.7619 190.751 102.898 195.156 110.758 195.156C119.259 195.156 127.582 192.241 132.576 184.963C136.539 179.187 143.562 174.194 150.658 178.968C156.039 182.587 157.864 191.253 161.949 196.312C168.044 203.859 175.962 212.131 184.107 217.339C190.795 221.615 199.602 221.297 207.368 220.551C214.111 219.903 220.088 212.137 223.71 207.189C227.102 202.555 230.602 198.075 233.006 192.843C238.463 180.961 236.721 162.008 225.62 153.958C213.23 144.974 196.881 145.725 183.343 139.654C175.796 136.27 175.843 122.587 174.174 115.758C172.492 108.876 170.655 99.867 164.581 95.3733C155.36 88.5509 146.436 93.7458 137.075 96.444C133.325 97.525 131.816 100.817 129.095 103.424L129.093 103.426C126.105 106.29 121.531 110.674 117.974 112.632C113.709 114.979 111.262 119.456 105.834 119.612C104.487 119.651 98.6801 120.375 97.7693 119.227C94.2704 114.814 92.1979 113.445 86.6906 113.445C83.0636 113.445 77.14 118.241 77.14 122.31C77.14 130.086 76.4094 138.205 78.2861 145.778Z",strokeWidth:"10",strokeLinecap:"round",strokeLinejoin:"round"})})}),[]),K=Object(b.useMemo)((function(){return Object(s.jsxs)("svg",{width:"22",height:"27",viewBox:"-1 -5 22 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(s.jsx)("circle",{cx:"5.5",cy:"5.5",r:"5.5",fillOpacity:"0.4"}),Object(s.jsx)("circle",{cx:"5.5",cy:"5.5",r:"5",strokeOpacity:"0.5"}),Object(s.jsx)("circle",{cx:"6.5",cy:"11.5",r:"3.5",fillOpacity:"0.4"}),Object(s.jsx)("circle",{cx:"6.5",cy:"11.5",r:"3",strokeOpacity:"0.5"}),Object(s.jsx)("circle",{cx:"13.5",cy:"9.5",r:"6.5",fillOpacity:"0.4"}),Object(s.jsx)("circle",{cx:"13.5",cy:"9.5",r:"6",strokeOpacity:"0.5"})]})}),[]),Q=Object(m.g)(),$=Object(b.useRef)();Object(b.useEffect)((function(){"#MapExplorer"===Q.location.hash&&$.current.scrollIntoView()}),[Q]);var tt=Object(b.useMemo)((function(){var t=[];return[0,0,0,0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),et=z===r.p.CHOROPLETH,nt=Object(b.useCallback)((function(t){return Object(u.h)(t,"total",f,{expiredDate:M,normalizedByPopulationPer:et?"lakh":null})}),[f,et,M]),it=Object(g.useSpring)({total:nt(_),config:Object(i.a)({tension:250},r.s)}),ct=function(t){var e=r.m.indexOf(f),n=(r.m.length+e+t)%r.m.length;y(r.m[n])},at=Object(x.useSwipeable)({onSwipedLeft:ct.bind(this,1),onSwipedRight:ct.bind(this,-1)}),rt=r.w[f],ot=A===r.o.DISTRICTS&&!L,st="mapexplorer"===k||D&&I>769;return Object(s.jsxs)("div",{className:p()("MapExplorer",{stickied:st},{hidden:k&&"mapexplorer"!==k&&(!D||I<769)}),children:[Object(s.jsx)("div",{className:p()("anchor","fadeInUp",{stickied:st}),style:{display:I<769||I>769&&D?"none":""},onClick:E&&E.bind(this,"mapexplorer"===k?null:"mapexplorer"),children:Object(s.jsx)(d.p,{})}),Object(s.jsxs)("div",{className:"panel",ref:$,children:[Object(s.jsxs)("div",{className:"panel-left fadeInUp",style:tt[0],children:[Object(s.jsxs)("h2",{className:p()(f),children:[R(_.name),_.name===r.E&&" [".concat(R(r.v[w.stateCode]),"]")]}),w.stateCode&&Object(s.jsxs)("h1",{className:p()("district",f),children:[Object(s.jsx)(g.animated.div,{children:it.total.to((function(t){return Object(u.e)(t,"short"===rt.format?"long":rt.format,f)}))}),Object(s.jsx)("span",{children:"".concat(R(Object(u.a)(rt.displayName))).concat(et&&!(null===rt||void 0===rt?void 0:rt.nonLinear)?" ".concat(R("per lakh people")):"")})]})]}),Object(s.jsxs)("div",{className:p()("panel-right","is-".concat(f)),children:[Object(s.jsxs)("div",{className:"switch-type",children:[Object(s.jsx)("div",{className:p()("choropleth fadeInUp",{"is-highlighted":z===r.p.CHOROPLETH}),onClick:q.bind(this,r.p.CHOROPLETH),style:tt[1],children:Z}),Object(s.jsx)("div",{className:p()("bubble fadeInUp",{"is-highlighted":z===r.p.BUBBLES}),onClick:q.bind(this,r.p.BUBBLES),style:tt[2],children:K}),F.mapType===r.n.COUNTRY&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"divider"}),Object(s.jsx)("div",{className:p()("boundary fadeInUp",{"is-highlighted":ot}),onClick:G.bind(this),style:tt[3],children:Object(s.jsx)(d.o,{})})]}),F.mapType===r.n.STATE&&Object(s.jsx)("div",{className:"back fadeInUp",onClick:function(){Q.push("/#MapExplorer")},style:tt[4],children:Object(s.jsx)(d.b,{})})]}),(D||I<769)&&Object(s.jsx)("div",{className:"switch-statistic fadeInUp",style:tt[5],children:r.m.map((function(t){return Object(s.jsx)("div",{className:p()("statistic-option","is-".concat(t),{"is-highlighted":f===t}),onClick:y.bind(n,t),children:Object(s.jsx)(d.g,{})},t)}))})]})]}),Object(s.jsx)("div",Object(i.a)(Object(i.a)({ref:B,className:"fadeInUp",style:tt[3]},at),{},{children:f&&Object(s.jsx)(b.Suspense,{fallback:Object(s.jsx)(l,{className:"map-loader",width:null===(e=B.current)||void 0===e?void 0:e.clientWidth,statistic:f}),children:Object(s.jsx)(C,{mapCode:h,isDistrictView:ot,mapViz:z,data:J,regionHighlighted:w,setRegionHighlighted:S,statistic:f,getStatistic:nt})})}))]})}var w=function(t,e){var n,i,c,a,r,o,s,l,u,d;return!!f()(t.stateCode,e.stateCode)&&(!!f()(t.regionHighlighted,e.regionHighlighted)&&(!!f()(t.mapStatistic,e.mapStatistic)&&(!!f()(t.anchor,e.anchor)&&(!!f()(t.hideDistrictData,e.hideDistrictData)&&(!!f()(t.expandTable,e.expandTable)&&(!!f()(null===(n=t.data)||void 0===n||null===(i=n.TT)||void 0===i||null===(c=i.meta)||void 0===c?void 0:c.last_updated,null===(a=e.data)||void 0===a||null===(r=a.TT)||void 0===r||null===(o=r.meta)||void 0===o?void 0:o.last_updated)&&!!f()(null===(s=t.data)||void 0===s||null===(l=s.TT)||void 0===l?void 0:l.total,null===(u=e.data)||void 0===u||null===(d=u.TT)||void 0===d?void 0:d.total)))))))};e.default=Object(b.memo)(y,w)},84:function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var i,c,a;if(Array.isArray(e)){if((i=e.length)!=n.length)return!1;for(c=i;0!==c--;)if(!t(e[c],n[c]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((i=(a=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(c=i;0!==c--;)if(!Object.prototype.hasOwnProperty.call(n,a[c]))return!1;for(c=i;0!==c--;){var r=a[c];if(!t(e[r],n[r]))return!1}return!0}return e!==e&&n!==n}}}]);
//# sourceMappingURL=28.2962cc86.chunk.js.map