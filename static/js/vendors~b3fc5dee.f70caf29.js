(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{162:function(e,t,r){"use strict";r.d(t,"a",(function(){return D}));var n=r(9),a=r.n(n),i=r(93),o=r.n(i),c=r(0),l=r.n(c),s=r(12),u=r.n(s),h=r(60),d=r(22),v=r(79),f=r(6),p=r(2),g=r(300),y=r(8);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=M(e);if(t){var a=M(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return j(this,r)}}function j(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?E(e):t}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var X=function(e){return e.changedTouches&&!!e.changedTouches.length},D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(s,e);var t,r,n,i=S(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=i.call(this,e)).leaveTimer=void 0,t.travellerDragStartHandlers=void 0,t.handleDrag=function(e){t.leaveTimer&&(clearTimeout(t.leaveTimer),t.leaveTimer=null),t.state.isTravellerMoving?t.handleTravellerMove(e):t.state.isSlideMoving&&t.handleSlideDrag(e)},t.handleTouchMove=function(e){null!=e.changedTouches&&e.changedTouches.length>0&&t.handleDrag(e.changedTouches[0])},t.handleDragEnd=function(){t.setState({isTravellerMoving:!1,isSlideMoving:!1}),t.detachDragEndListener()},t.handleLeaveWrapper=function(){(t.state.isTravellerMoving||t.state.isSlideMoving)&&(t.leaveTimer=window.setTimeout(t.handleDragEnd,t.props.leaveTimeOut))},t.handleEnterSlideOrTraveller=function(){t.setState({isTextActive:!0})},t.handleLeaveSlideOrTraveller=function(){t.setState({isTextActive:!1})},t.handleSlideDragStart=function(e){var r=X(e)?e.changedTouches[0]:e;t.setState({isTravellerMoving:!1,isSlideMoving:!0,slideMoveStartX:r.pageX}),t.attachDragEndListener()},t.travellerDragStartHandlers={startX:t.handleTravellerDragStart.bind(E(t),"startX"),endX:t.handleTravellerDragStart.bind(E(t),"endX")},t.state={},t}return t=s,n=[{key:"renderDefaultTraveller",value:function(e){var t=e.x,r=e.y,n=e.width,a=e.height,i=e.stroke,o=Math.floor(r+a/2)-1;return l.a.createElement(l.a.Fragment,null,l.a.createElement("rect",{x:t,y:r,width:n,height:a,fill:i,stroke:"none"}),l.a.createElement("line",{x1:t+1,y1:o,x2:t+n-1,y2:o,fill:"none",stroke:"#fff"}),l.a.createElement("line",{x1:t+1,y1:o+2,x2:t+n-1,y2:o+2,fill:"none",stroke:"#fff"}))}},{key:"renderTraveller",value:function(e,t){return l.a.isValidElement(e)?l.a.cloneElement(e,t):a()(e)?e(t):s.renderDefaultTraveller(t)}},{key:"getDerivedStateFromProps",value:function(e,t){var r=e.data,n=e.width,a=e.x,i=e.travellerWidth,c=e.updateId,l=e.startIndex,s=e.endIndex;if(r!==t.prevData||c!==t.prevUpdateId)return x({prevData:r,prevTravellerWidth:i,prevUpdateId:c,prevX:a,prevWidth:n},r&&r.length?function(e){var t=e.data,r=e.startIndex,n=e.endIndex,a=e.x,i=e.width,c=e.travellerWidth;if(!t||!t.length)return{};var l=t.length,s=Object(h.b)().domain(o()(0,l)).range([a,a+i-c]),u=s.domain().map((function(e){return s(e)}));return{isTextActive:!1,isSlideMoving:!1,isTravellerMoving:!1,startX:s(r),endX:s(n),scale:s,scaleValues:u}}({data:r,width:n,x:a,travellerWidth:i,startIndex:l,endIndex:s}):{scale:null,scaleValues:null});if(t.scale&&(n!==t.prevWidth||a!==t.prevX||i!==t.prevTravellerWidth)){t.scale.range([a,a+n-i]);var u=t.scale.domain().map((function(e){return t.scale(e)}));return{prevData:r,prevTravellerWidth:i,prevUpdateId:c,prevX:a,prevWidth:n,startX:t.scale(e.startIndex),endX:t.scale(e.endIndex),scaleValues:u}}return null}},{key:"getIndexInRange",value:function(e,t){for(var r=0,n=e.length-1;n-r>1;){var a=Math.floor((r+n)/2);e[a]>t?n=a:r=a}return t>=e[n]?n:r}}],(r=[{key:"componentWillUnmount",value:function(){this.leaveTimer&&(clearTimeout(this.leaveTimer),this.leaveTimer=null),this.detachDragEndListener()}},{key:"getIndex",value:function(e){var t=e.startX,r=e.endX,n=this.state.scaleValues,a=this.props,i=a.gap,o=a.data.length-1,c=Math.min(t,r),l=Math.max(t,r),u=s.getIndexInRange(n,c),h=s.getIndexInRange(n,l);return{startIndex:u-u%i,endIndex:h===o?o:h-h%i}}},{key:"getTextOfTick",value:function(e){var t=this.props,r=t.data,n=t.tickFormatter,i=t.dataKey,o=Object(f.v)(r[e],i,e);return a()(n)?n(o,e):o}},{key:"attachDragEndListener",value:function(){window.addEventListener("mouseup",this.handleDragEnd,!0),window.addEventListener("touchend",this.handleDragEnd,!0)}},{key:"detachDragEndListener",value:function(){window.removeEventListener("mouseup",this.handleDragEnd,!0),window.removeEventListener("touchend",this.handleDragEnd,!0)}},{key:"handleSlideDrag",value:function(e){var t=this.state,r=t.slideMoveStartX,n=t.startX,a=t.endX,i=this.props,o=i.x,c=i.width,l=i.travellerWidth,s=i.startIndex,u=i.endIndex,h=i.onChange,d=e.pageX-r;d>0?d=Math.min(d,o+c-l-a,o+c-l-n):d<0&&(d=Math.max(d,o-n,o-a));var v=this.getIndex({startX:n+d,endX:a+d});v.startIndex===s&&v.endIndex===u||!h||h(v),this.setState({startX:n+d,endX:a+d,slideMoveStartX:e.pageX})}},{key:"handleTravellerDragStart",value:function(e,t){var r=X(t)?t.changedTouches[0]:t;this.setState({isSlideMoving:!1,isTravellerMoving:!0,movingTravellerId:e,brushMoveStartX:r.pageX}),this.attachDragEndListener()}},{key:"handleTravellerMove",value:function(e){var t,r=this.state,n=r.brushMoveStartX,a=r.movingTravellerId,i=r.endX,o=r.startX,c=this.state[a],l=this.props,s=l.x,u=l.width,h=l.travellerWidth,d=l.onChange,v=l.gap,f=l.data,p={startX:this.state.startX,endX:this.state.endX},g=e.pageX-n;g>0?g=Math.min(g,s+u-h-c):g<0&&(g=Math.max(g,s-c)),p[a]=c+g;var y=this.getIndex(p),m=y.startIndex,b=y.endIndex;this.setState((O(t={},a,c+g),O(t,"brushMoveStartX",e.pageX),t),(function(){var e;d&&(e=f.length-1,("startX"===a&&(i>o?m%v==0:b%v==0)||i<o&&b===e||"endX"===a&&(i>o?b%v==0:m%v==0)||i>o&&b===e)&&d(y))}))}},{key:"renderBackground",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,a=e.height,i=e.fill,o=e.stroke;return l.a.createElement("rect",{stroke:o,fill:i,x:t,y:r,width:n,height:a})}},{key:"renderPanorama",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,a=e.height,i=e.data,o=e.children,s=e.padding,u=c.Children.only(o);return u?l.a.cloneElement(u,{x:t,y:r,width:n,height:a,margin:s,compact:!0,data:i}):null}},{key:"renderTravellerLayer",value:function(e,t){var r=this.props,n=r.y,a=r.travellerWidth,i=r.height,o=r.traveller,c=Math.max(e,this.props.x),u=x(x({},Object(y.c)(this.props)),{},{x:c,y:n,width:a,height:i});return l.a.createElement(d.a,{className:"recharts-brush-traveller",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.travellerDragStartHandlers[t],onTouchStart:this.travellerDragStartHandlers[t],style:{cursor:"col-resize"}},s.renderTraveller(o,u))}},{key:"renderSlide",value:function(e,t){var r=this.props,n=r.y,a=r.height,i=r.stroke,o=r.travellerWidth,c=Math.min(e,t)+o,s=Math.max(Math.abs(t-e)-o,0);return l.a.createElement("rect",{className:"recharts-brush-slide",onMouseEnter:this.handleEnterSlideOrTraveller,onMouseLeave:this.handleLeaveSlideOrTraveller,onMouseDown:this.handleSlideDragStart,onTouchStart:this.handleSlideDragStart,style:{cursor:"move"},stroke:"none",fill:i,fillOpacity:.2,x:c,y:n,width:s,height:a})}},{key:"renderText",value:function(){var e=this.props,t=e.startIndex,r=e.endIndex,n=e.y,a=e.height,i=e.travellerWidth,o=e.stroke,c=this.state,s=c.startX,u=c.endX,h={pointerEvents:"none",fill:o};return l.a.createElement(d.a,{className:"recharts-brush-texts"},l.a.createElement(v.a,b({textAnchor:"end",verticalAnchor:"middle",x:Math.min(s,u)-5,y:n+a/2},h),this.getTextOfTick(t)),l.a.createElement(v.a,b({textAnchor:"start",verticalAnchor:"middle",x:Math.max(s,u)+i+5,y:n+a/2},h),this.getTextOfTick(r)))}},{key:"render",value:function(){var e=this.props,t=e.data,r=e.className,n=e.children,a=e.x,i=e.y,o=e.width,c=e.height,s=e.alwaysShowText,h=this.state,v=h.startX,f=h.endX,y=h.isTextActive,m=h.isSlideMoving,b=h.isTravellerMoving;if(!t||!t.length||!Object(p.g)(a)||!Object(p.g)(i)||!Object(p.g)(o)||!Object(p.g)(c)||o<=0||c<=0)return null;var k=u()("recharts-brush",r),x=1===l.a.Children.count(n),O=Object(g.a)("userSelect","none");return l.a.createElement(d.a,{className:k,onMouseMove:this.handleDrag,onMouseLeave:this.handleLeaveWrapper,onTouchMove:this.handleTouchMove,style:O},this.renderBackground(),x&&this.renderPanorama(),this.renderSlide(v,f),this.renderTravellerLayer(v,"startX"),this.renderTravellerLayer(f,"endX"),(y||m||b||s)&&this.renderText())}}])&&w(t.prototype,r),n&&w(t,n),s}(c.PureComponent);D.displayName="Brush",D.defaultProps={height:40,travellerWidth:5,gap:1,fill:"#fff",stroke:"#666",padding:{top:1,right:1,bottom:1,left:1},leaveTimeOut:1e3,alwaysShowText:!1}},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var n=r(30),a=r.n(n),i=r(9),o=r.n(i),c=r(0),l=r.n(c),s=r(12),u=r.n(s),h=r(71),d=r(45),v=r(22),f=r(79),p=r(49),g=r(51),y=r(2),m=r(8);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=D(e);if(t){var a=D(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return X(this,r)}}function X(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(c,e);var t,r,n,i=M(c);function c(){return S(this,c),i.apply(this,arguments)}return t=c,n=[{key:"getTicks",value:function(e){var t=e.tick,r=e.ticks,n=e.viewBox,a=e.minTickGap,i=e.orientation,o=e.interval,l=e.tickFormatter,s=e.unit;return r&&r.length&&t?Object(y.g)(o)||g.a.isSsr?c.getNumberIntervalTicks(r,"number"==typeof o&&Object(y.g)(o)?o:0):"preserveStartEnd"===o?c.getTicksStart({ticks:r,tickFormatter:l,viewBox:n,orientation:i,minTickGap:a,unit:s},!0):"preserveStart"===o?c.getTicksStart({ticks:r,tickFormatter:l,viewBox:n,orientation:i,minTickGap:a,unit:s}):c.getTicksEnd({ticks:r,tickFormatter:l,viewBox:n,orientation:i,minTickGap:a,unit:s}):[]}},{key:"getNumberIntervalTicks",value:function(e,t){return e.filter((function(e,r){return r%(t+1)==0}))}},{key:"getTicksStart",value:function(e,t){var r,n,a=e.ticks,i=e.tickFormatter,c=e.viewBox,l=e.orientation,s=e.minTickGap,u=e.unit,h=c.x,v=c.y,f=c.width,p=c.height,g="top"===l||"bottom"===l?"width":"height",m=(a||[]).slice(),b=u&&"width"===g?Object(d.c)(u)[g]:0,k=m.length,x=k>=2?Object(y.i)(m[1].coordinate-m[0].coordinate):1;if(1===x?(r="width"===g?h:v,n="width"===g?h+f:v+p):(r="width"===g?h+f:v+p,n="width"===g?h:v),t){var w=a[k-1],T=o()(i)?i(w.value,k-1):w.value,S=Object(d.c)(T)[g]+b,j=x*(w.coordinate+x*S/2-n);m[k-1]=w=O(O({},w),{},{tickCoord:j>0?w.coordinate-j*x:w.coordinate}),x*(w.tickCoord-x*S/2-r)>=0&&x*(w.tickCoord+x*S/2-n)<=0&&(n=w.tickCoord-x*(S/2+s),m[k-1]=O(O({},w),{},{isShow:!0}))}for(var E=t?k-1:k,M=0;M<E;M++){var X=m[M],D=o()(i)?i(X.value,M):X.value,P=Object(d.c)(D)[g]+b;if(0===M){var I=x*(X.coordinate-x*P/2-r);m[M]=X=O(O({},X),{},{tickCoord:I<0?X.coordinate-I*x:X.coordinate})}else m[M]=X=O(O({},X),{},{tickCoord:X.coordinate});x*(X.tickCoord-x*P/2-r)>=0&&x*(X.tickCoord+x*P/2-n)<=0&&(r=X.tickCoord+x*(P/2+s),m[M]=O(O({},X),{},{isShow:!0}))}return m.filter((function(e){return e.isShow}))}},{key:"getTicksEnd",value:function(e){var t,r,n=e.ticks,a=e.tickFormatter,i=e.viewBox,c=e.orientation,l=e.minTickGap,s=e.unit,u=i.x,h=i.y,v=i.width,f=i.height,p="top"===c||"bottom"===c?"width":"height",g=s&&"width"===p?Object(d.c)(s)[p]:0,m=(n||[]).slice(),b=m.length,k=b>=2?Object(y.i)(m[1].coordinate-m[0].coordinate):1;1===k?(t="width"===p?u:h,r="width"===p?u+v:h+f):(t="width"===p?u+v:h+f,r="width"===p?u:h);for(var x=b-1;x>=0;x--){var w=m[x],T=o()(a)?a(w.value,b-x-1):w.value,S=Object(d.c)(T)[p]+g;if(x===b-1){var j=k*(w.coordinate+k*S/2-r);m[x]=w=O(O({},w),{},{tickCoord:j>0?w.coordinate-j*k:w.coordinate})}else m[x]=w=O(O({},w),{},{tickCoord:w.coordinate});k*(w.tickCoord-k*S/2-t)>=0&&k*(w.tickCoord+k*S/2-r)<=0&&(r=w.tickCoord-k*(S/2+l),m[x]=O(O({},w),{},{isShow:!0}))}return m.filter((function(e){return e.isShow}))}},{key:"renderTickItem",value:function(e,t,r){return l.a.isValidElement(e)?l.a.cloneElement(e,t):o()(e)?e(t):l.a.createElement(f.a,k({},t,{className:"recharts-cartesian-axis-tick-value"}),r)}}],(r=[{key:"shouldComponentUpdate",value:function(e){var t=e.viewBox,r=T(e,["viewBox"]),n=this.props,a=n.viewBox,i=T(n,["viewBox"]);return!Object(h.a)(t,a)||!Object(h.a)(r,i)}},{key:"getTickLineCoord",value:function(e){var t,r,n,a,i,o,c=this.props,l=c.x,s=c.y,u=c.width,h=c.height,d=c.orientation,v=c.tickSize,f=c.mirror,p=c.tickMargin,g=f?-1:1,m=e.tickSize||v,b=Object(y.g)(e.tickCoord)?e.tickCoord:e.coordinate;switch(d){case"top":t=r=e.coordinate,o=(n=(a=s+ +!f*h)-g*m)-g*p,i=b;break;case"left":n=a=e.coordinate,i=(t=(r=l+ +!f*u)-g*m)-g*p,o=b;break;case"right":n=a=e.coordinate,i=(t=(r=l+ +f*u)+g*m)+g*p,o=b;break;default:t=r=e.coordinate,o=(n=(a=s+ +f*h)+g*m)+g*p,i=b}return{line:{x1:t,y1:n,x2:r,y2:a},tick:{x:i,y:o}}}},{key:"getTickTextAnchor",value:function(){var e,t=this.props,r=t.orientation,n=t.mirror;switch(r){case"left":e=n?"start":"end";break;case"right":e=n?"end":"start";break;default:e="middle"}return e}},{key:"getTickVerticalAnchor",value:function(){var e=this.props,t=e.orientation,r=e.mirror,n="end";switch(t){case"left":case"right":n="middle";break;case"top":n=r?"start":"end";break;default:n=r?"end":"start"}return n}},{key:"renderAxisLine",value:function(){var e=this.props,t=e.x,r=e.y,n=e.width,i=e.height,o=e.orientation,c=e.mirror,s=e.axisLine,h=O(O(O({},Object(m.c)(this.props)),Object(m.c)(s)),{},{fill:"none"});if("top"===o||"bottom"===o){var d=+("top"===o&&!c||"bottom"===o&&c);h=O(O({},h),{},{x1:t,y1:r+d*i,x2:t+n,y2:r+d*i})}else{var v=+("left"===o&&!c||"right"===o&&c);h=O(O({},h),{},{x1:t+v*n,y1:r,x2:t+v*n,y2:r+i})}return l.a.createElement("line",k({},h,{className:u()("recharts-cartesian-axis-line",a()(s,"className"))}))}},{key:"renderTicks",value:function(e){var t=this,r=this.props,n=r.tickLine,i=r.stroke,s=r.tick,h=r.tickFormatter,d=r.unit,f=c.getTicks(O(O({},this.props),{},{ticks:e})),p=this.getTickTextAnchor(),g=this.getTickVerticalAnchor(),y=Object(m.c)(this.props),b=Object(m.c)(s),x=O(O({},y),{},{fill:"none"},Object(m.c)(n)),w=f.map((function(e,r){var w=t.getTickLineCoord(e),T=w.line,S=w.tick,j=O(O(O(O({textAnchor:p,verticalAnchor:g},y),{},{stroke:"none",fill:i},b),S),{},{index:r,payload:e,visibleTicksCount:f.length,tickFormatter:h});return l.a.createElement(v.a,k({className:"recharts-cartesian-axis-tick",key:"tick-".concat(r)},Object(m.b)(t.props,e,r)),n&&l.a.createElement("line",k({},x,T,{className:u()("recharts-cartesian-axis-tick-line",a()(n,"className"))})),s&&c.renderTickItem(s,j,"".concat(o()(h)?h(e.value,r):e.value).concat(d||"")))}));return l.a.createElement("g",{className:"recharts-cartesian-axis-ticks"},w)}},{key:"render",value:function(){var e=this.props,t=e.axisLine,r=e.width,n=e.height,a=e.ticksGenerator,i=e.className;if(e.hide)return null;var c=this.props,s=c.ticks,h=T(c,["ticks"]),d=s;return o()(a)&&(d=s&&s.length>0?a(this.props):a(h)),r<=0||n<=0||!d||!d.length?null:l.a.createElement(v.a,{className:u()("recharts-cartesian-axis",i)},t&&this.renderAxisLine(),this.renderTicks(d),p.a.renderCallByParent(this.props))}}])&&j(t.prototype,r),n&&j(t,n),c}(c.Component);P.displayName="CartesianAxis",P.defaultProps={x:0,y:0,width:0,height:0,viewBox:{x:0,y:0,width:0,height:0},orientation:"bottom",ticks:[],stroke:"#666",tickLine:!0,axisLine:!0,tick:!0,mirror:!1,minTickGap:5,tickSize:6,tickMargin:2,interval:"preserveEnd"}}}]);