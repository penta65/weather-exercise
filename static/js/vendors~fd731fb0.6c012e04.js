(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{171:function(e,t,r){(function(t){(function(){var r,n,o;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(r()-o)/1e6},n=t.hrtime,o=(r=function(){var e;return 1e9*(e=n())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,r(123))},281:function(e,t,r){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=r(3)},function(e,t){e.exports=r(122)},function(e,t){e.exports=r(349)},function(e,t){e.exports=r(350)},function(e,t){e.exports=r(351)},function(e,t){e.exports=r(352)},function(e,t){e.exports=r(360)},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(2),a=r.n(i),u=r(4),c=r.n(u),l=function(e){return 2*e.gutter},s=function(e){return e.gutter},f=function(e){var t=e.containerWidth,r=e.gutter,n=e.numberOfCards,o=e.firstAndLastGutter,i=r*(n-1);return e.showSlither&&(i+=2*s({gutter:r})),o&&(i+=l({gutter:r})),(t-i)/n},p=function(e){var t=e.index,r=e.firstAndLastGutter,n=e.gutter;return 0===t?r?l({gutter:n}):0:n/2},d=function(e){var t=e.index,r=e.firstAndLastGutter,n=e.gutter;return t===e.numberOfChildren-1?r?l({gutter:n}):0:n/2},h=function(e){var t,r=e.activeItemIndex,n=e.activePosition,o=e.containerWidth,i=e.numberOfChildren,a=e.numberOfCards,u=e.gutter,c=e.firstAndLastGutter,p=e.showSlither,d=e.infiniteLoop,h=r;if("center"===n&&(h-=Math.floor(a/2)),"right"===n&&(h-=a-1),(t={numberOfChildren:i,numberOfCards:a}).numberOfChildren<t.numberOfCards)return 0;if(!d&&h<=0)return 0;if(!d&&h>i-a-1)return function(e){var t=e.numberOfCards,r=e.gutter,n=e.firstAndLastGutter,o=e.showSlither,i=e.numberOfChildren-t,a=f({containerWidth:e.containerWidth,gutter:r,numberOfCards:t,firstAndLastGutter:n,showSlither:o})*i+r*i;return n&&!o&&(a+=l({gutter:r})),a}({activeItemIndex:h,activePosition:n,containerWidth:o,numberOfChildren:i,numberOfCards:a,gutter:u,firstAndLastGutter:c,showSlither:p});var m=f({containerWidth:o,gutter:u,numberOfCards:a,firstAndLastGutter:c,showSlither:p})*h+u*h;return p&&(m-=s({gutter:u})),c&&(m+=u),m},m=function(e){var t=e.activeItemIndex,r=e.activePosition,n=e.numberOfCards,o=e.numberOfChildren,i=e.slidesToScroll;return!(o<=n)&&b({activeItemIndex:t,activePosition:r,numberOfCards:n,numberOfChildren:o,slidesToScroll:i})>t},y=function(e){var t=e.activeItemIndex,r=e.activePosition,n=e.numberOfCards,o=e.numberOfChildren,i=e.slidesToScroll;return!(o<=n)&&v({activeItemIndex:t,activePosition:r,numberOfCards:n,numberOfChildren:o,slidesToScroll:i})<t},b=function(e){var t=e.activePosition,r=e.activeItemIndex,n=e.numberOfChildren,o=e.numberOfCards,i=e.slidesToScroll;switch(t){case"right":return c()([a()([r+i,n-1]),o]);case"center":return c()([a()([r+i,Math.floor(n-o/2)]),Math.floor(o/2)+1]);case"left":return a()([r+i,n-o])}},v=function(e){var t=e.activePosition,r=e.activeItemIndex,n=e.numberOfCards,o=e.numberOfChildren,i=e.slidesToScroll;switch(t){case"right":return c()([a()([r-i,o-1]),n-1]);case"center":return c()([a()([r-i,Math.floor(o-n/2)-1]),Math.floor(n/2)]);case"left":return a()([c()([r-i,0]),o-n-1])}};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e&&e.length>0?e[0].clientX:t},x=r(6),j=r.n(x);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function W(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var R=r(5),G=r(3),X=r.n(G),k=r(0),D=r.n(k),$={children:D.a.arrayOf(D.a.element).isRequired,numberOfCards:D.a.number,gutter:D.a.number,showSlither:D.a.bool,firstAndLastGutter:D.a.bool,enablePlaceholder:D.a.bool,placeholderItem:D.a.element,numberOfPlaceholderItems:D.a.number,requestToChangeActive:D.a.func.isRequired,activeItemIndex:D.a.number.isRequired,activePosition:D.a.oneOf(["left","center","right"]),rightChevron:D.a.oneOfType([D.a.element,D.a.string]),leftChevron:D.a.oneOfType([D.a.element,D.a.string]),chevronWidth:D.a.number,outsideChevron:D.a.bool,alwaysShowChevrons:D.a.bool,slidesToScroll:D.a.number,disableSwipe:D.a.bool,springConfig:D.a.shape({stiffness:D.a.number,damping:D.a.number,precision:D.a.number}),onActiveStateChange:D.a.func,classes:D.a.shape({wrapper:D.a.string,itemsWrapper:D.a.string,itemsInnerWrapper:D.a.string,itemWrapper:D.a.string,rightChevronWrapper:D.a.string,leftChevronWrapper:D.a.string}),infiniteLoop:D.a.bool,calculateActualTranslateX:D.a.func};function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){H(e,t,r[t])}))}return e}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function B(){var e=te(["\n  left: -","px;\n"]);return B=function(){return e},e}function K(){var e=te(["\n  right: -","px;\n"]);return K=function(){return e},e}function J(){var e=te(["\n  position: absolute;\n  height: 100%;\n  width: ","px;\n  cursor: pointer;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return J=function(){return e},e}function Q(){var e=te(["\n  width: ","px;\n  flex-shrink: 0;\n  margin-right: ","px;\n  margin-left: ","px;\n"]);return Q=function(){return e},e}function Y(){var e=te(["\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n"]);return Y=function(){return e},e}function Z(){var e=te(["\n  width: 100%;\n  overflow-x: hidden;\n"]);return Z=function(){return e},e}function ee(){var e=te(["\n  position: relative;\n  ","\n"]);return ee=function(){return e},e}function te(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var re=X.a.div(ee(),(function(e){return e.height&&"height: ".concat(e.height,"px;")})),ne=X.a.div(Z()),oe=X.a.div(Y()),ie=X.a.div(Q(),(function(e){return e.width}),(function(e){return e.rightGutter}),(function(e){return e.leftGutter})),ae=X.a.div(J(),(function(e){return e.chevronWidth+1})),ue=X()((function(e){return o.a.createElement(ae,e)}))(K(),(function(e){return e.outsideChevron?e.chevronWidth:0})),ce=X()((function(e){return o.a.createElement(ae,e)}))(B(),(function(e){return e.outsideChevron?e.chevronWidth:0})),le=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=this,o=(e=F(t)).call.apply(e,[this].concat(a)),r=!o||"object"!==q(o)&&"function"!=typeof o?U(n):o,H(U(U(r)),"getScrollState",(function(){var e=r.props,t=e.numberOfCards,n=e.activeItemIndex,o=e.activePosition,i=e.slidesToScroll,a=e.items;return{isLastScroll:!m({activeItemIndex:n,activePosition:o,numberOfChildren:a.length,numberOfCards:t,slidesToScroll:i}),isFirstScroll:!y({activeItemIndex:n,activePosition:o,numberOfChildren:a.length,numberOfCards:t,slidesToScroll:i})}})),r}var r,n;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,o.a.Component),r=t,(n=[{key:"componentDidUpdate",value:function(e){this.props.onActiveStateChange&&this.props.activeItemIndex!==e.activeItemIndex&&this.props.onActiveStateChange(V({},this.getScrollState()))}},{key:"renderList",value:function(e){var t=e.items,r=e.translateX,n=e.containerWidth,i=e.measureRef,a=this.props,u=a.gutter,c=a.numberOfCards,l=a.firstAndLastGutter,s=a.showSlither,h=a.classes,m=(0,a.calculateActualTranslateX)(r);return o.a.createElement(ne,{className:h.itemsWrapper},o.a.createElement(oe,{ref:i,style:{transform:"translateX(".concat(-1*m,"px)")},className:h.itemsInnerWrapper},t.map((function(e,r){return o.a.createElement(ie,{key:r,className:h.itemWrapper,width:f({firstAndLastGutter:l,containerWidth:n,gutter:u,numberOfCards:c,showSlither:s}),leftGutter:p({index:r,firstAndLastGutter:l,gutter:u}),rightGutter:d({index:r,firstAndLastGutter:l,gutter:u,numberOfChildren:t.length})},e)}))))}},{key:"render",value:function(){var e=this,t=this.props,r=t.containerWidth,n=t.measureRef,i=t.touchRelativeX,a=t.onWrapperTouchStart,u=t.onWrapperTouchEnd,c=t.onWrapperTouchMove,l=(t.gutter,t.numberOfCards,t.firstAndLastGutter,t.activePosition,t.springConfig),s=(t.showSlither,t.rightChevron),f=t.leftChevron,p=t.chevronWidth,d=t.outsideChevron,h=t.requestToChangeActive,m=(t.slidesToScroll,t.alwaysShowChevrons),y=t.classes,b=t.items,v=t.activeItemTranslateX,O=t.nextItemIndex,g=t.previousItemIndex,S=this.getScrollState(),w=S.isFirstScroll,C=S.isLastScroll,T=s&&(m||!C),I=f&&(m||!w);return o.a.createElement(re,{onTouchStart:a,onTouchEnd:u,onTouchMove:c,className:y.wrapper},o.a.createElement(R.Motion,{defaultStyle:{translateX:v},style:{translateX:Object(R.spring)(v+i,l)},children:function(t){var o=t.translateX;return e.renderList({items:b,measureRef:n,containerWidth:r,translateX:o})}}),T&&o.a.createElement(ue,{chevronWidth:p,outsideChevron:d,className:y.rightChevronWrapper,onClick:function(){return h(O)}},s),I&&o.a.createElement(ce,{chevronWidth:p,outsideChevron:d,className:y.leftChevronWrapper,onClick:function(){return h(g)}},f))}}])&&N(r.prototype,n),t}();le.defaultProps={onWrapperTouchStart:null,onWrapperTouchEnd:null,onWrapperTouchMove:null},le.propTypes=V({},$,{items:D.a.arrayOf(D.a.node).isRequired,activeItemTranslateX:D.a.number.isRequired,nextItemIndex:D.a.number.isRequired,previousItemIndex:D.a.number.isRequired,containerWidth:D.a.number.isRequired,measureRef:D.a.oneOfType([D.a.func,D.a.shape({current:D.a.object})]).isRequired,touchRelativeX:D.a.number.isRequired,onWrapperTouchStart:D.a.func,onWrapperTouchEnd:D.a.func,onWrapperTouchMove:D.a.func});var se=le;function fe(e){return(fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(){return(pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function de(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function me(e,t){return(me=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(){return(ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function Oe(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var ge=function(e){var t=e.activeItemIndex,r=e.activePosition,n=e.containerWidth,o=e.numberOfChildren,i=e.numberOfCards,a=e.gutter,u=e.firstAndLastGutter,c=e.showSlither;return h({activeItemIndex:t,activePosition:r,containerWidth:n,numberOfChildren:o,numberOfCards:i,gutter:a,firstAndLastGutter:u,showSlither:c,infiniteLoop:!0})},Se=ge;function we(){return(we=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var Ce=function(){return function(e){return function(t){var r=t.calculateActualTranslateX,n=t.numberOfCards,i=t.activeItemIndex,a=(t.numberOfChildren,t.slidesToScroll),u=t.containerWidth,c=t.gutter,l=t.firstAndLastGutter,s=t.showSlither,f=t.children,p=function(e,t){var r=t.numberOfCards;return[].concat(Oe(e.slice(e.length-r)),Oe(e),Oe(e.slice(0,r)))}(o.a.Children.toArray(f),{numberOfCards:n}),d=function(e){var t=e.activeItemIndex;return e.numberOfCards,t}({activeItemIndex:i,numberOfCards:n}),h=function(e){return e.activeItemIndex-e.slidesToScroll}({activeItemIndex:d,slidesToScroll:a}),m=function(e){return e.activeItemIndex+e.slidesToScroll}({activeItemIndex:d,slidesToScroll:a}),y=Se({activeItemIndex:d,activePosition:"left",containerWidth:u,numberOfChildren:p.length,numberOfCards:n,gutter:c,firstAndLastGutter:l,showSlither:s});return o.a.createElement(e,we({},t,{alwaysShowChevrons:!0,activePosition:"left",items:p,previousItemIndex:h,nextItemIndex:m,activeItemIndex:d,activeItemTranslateX:y,calculateActualTranslateX:function(e){var t=function(e,t,r){var n=r.activePosition,o=r.containerWidth,i=r.numberOfCards,a=r.gutter,u=r.firstAndLastGutter,c=r.showSlither,l=ge({numberOfChildren:e.length,activeItemIndex:e.length-2*i,activePosition:n,containerWidth:o,numberOfCards:i,gutter:a,firstAndLastGutter:u,showSlither:c}),s=t%l+ge({numberOfChildren:e.length,activeItemIndex:i,activePosition:n,containerWidth:o,numberOfCards:i,gutter:a,firstAndLastGutter:u,showSlither:c});return s<=0?l-Math.abs(s):s}(p,e,{activePosition:"left",containerWidth:u,numberOfCards:n,gutter:c,firstAndLastGutter:l,showSlither:s});return r(t)}}))}}},Te=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce((function(e,t){return t(e)}),e)}}((function(e){return function(t){function r(){var e,t,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=this,o=(e=w(r)).call.apply(e,[this].concat(a)),t=!o||"object"!==O(o)&&"function"!=typeof o?T(n):o,I(T(T(t)),"state",{startTouchX:0,currentTouchX:0}),I(T(T(t)),"onWrapperTouchStart",(function(e){var r=P(e.touches);t.setState({startTouchX:r,currentTouchX:r})})),I(T(T(t)),"onWrapperTouchEnd",(function(e){var r=t.props,n=r.containerWidth,o=r.gutter,i=r.numberOfCards,a=r.firstAndLastGutter,u=r.showSlither,c=r.requestToChangeActive,l=r.activeItemIndex,s=f({containerWidth:n,gutter:o,numberOfCards:i,firstAndLastGutter:a,showSlither:u}),p=P(e.changedTouches),d=t.state.startTouchX-p,h=Math.floor(Math.abs(d)/(s+o/2)+.75);h>0&&c(d<0?l-h:l+h),t.setState({startTouchX:0,currentTouchX:0})})),I(T(T(t)),"onWrapperTouchMove",(function(e){t.setState({currentTouchX:P(e.touches)})})),t}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(r,o.a.Component),n=r,(i=[{key:"render",value:function(){var t=this.props,r=t.disableSwipe,n=t.isPlaceholderMode,i=this.state,a=i.startTouchX,u=i.currentTouchX;return r||n?o.a.createElement(e,g({},this.props,{touchRelativeX:0})):o.a.createElement(e,g({},this.props,{onWrapperTouchStart:this.onWrapperTouchStart,onWrapperTouchEnd:this.onWrapperTouchEnd,onWrapperTouchMove:this.onWrapperTouchMove,touchRelativeX:a-u}))}}])&&S(n.prototype,i),r}()}),(function(e){return function(t){function r(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),n=he(r).call(this,e),t=!n||"object"!==fe(n)&&"function"!=typeof n?ye(this):n,be(ye(ye(t)),"startPlaceholderMinimumTimer",(function(){t.props.minimumPlaceholderTime&&(t.placeholderTimer=setTimeout((function(){t.placeholderTimer=null,o.a.Children.count(t.props.children)>0&&t.setState({isPlaceholderMode:!1})}),t.props.minimumPlaceholderTime))})),be(ye(ye(t)),"getPlaceholderItems",(function(){var e=t.props,r=e.placeholderItem,n=e.numberOfPlaceholderItems;return Array.from(Array(n)).map((function(e){return r}))})),t.state={isPlaceholderMode:t.props.enablePlaceholder&&0===o.a.Children.count(t.props.children)},t}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&me(e,t)}(r,o.a.Component),n=r,(i=[{key:"componentDidMount",value:function(){this.startPlaceholderMinimumTimer()}},{key:"componentWillUnmount",value:function(){this.placeholderTimer&&clearTimeout(this.placeholderTimer)}},{key:"componentDidUpdate",value:function(e){o.a.Children.count(this.props.children)>0&&0===o.a.Children.count(e.children)&&!this.placeholderTimer&&this.state.isPlaceholderMode&&this.setState({isPlaceholderMode:!1})}},{key:"render",value:function(){return o.a.createElement(e,pe({},this.props,{items:this.state.isPlaceholderMode?this.getPlaceholderItems():this.props.items}))}}])&&de(n.prototype,i),r}()}),(function(e){return function(t){var r=o.a.Children.toArray(t.children).length>=t.numberOfCards;return t.infiniteLoop&&r?Ce()(e)(t):function(e){return function(t){var r=t.children,n=t.activeItemIndex,i=t.activePosition,a=t.containerWidth,u=t.numberOfCards,c=t.slidesToScroll,l=t.gutter,s=t.firstAndLastGutter,f=t.showSlither,p=o.a.Children.toArray(r);return o.a.createElement(e,ve({},t,{items:p,nextItemIndex:b({activePosition:i,activeItemIndex:n,numberOfCards:u,slidesToScroll:c,numberOfChildren:p.length}),previousItemIndex:v({activePosition:i,activeItemIndex:n,numberOfCards:u,slidesToScroll:c,numberOfChildren:p.length}),activeItemTranslateX:h({activeItemIndex:n,activePosition:i,containerWidth:a,numberOfChildren:p.length,numberOfCards:u,gutter:l,firstAndLastGutter:s,showSlither:f})}))}}(e)(t)}}),(function(e){return function(t){function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),E(this,L(r).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(r,o.a.Component),n=r,(i=[{key:"render",value:function(){var t=this;return o.a.createElement(j.a,{bounds:!0,margin:!1,whitelist:["width","height"]},(function(r){var n=r.measureRef,i=r.contentRect;return o.a.createElement(e,_({},t.props,{measureRef:n,containerWidth:i.bounds.width||0,containerHeight:i.bounds.height||0}))}))}}])&&W(n.prototype,i),r}()}))(se);Te.propTypes=$,Te.defaultProps={numberOfCards:3,gutter:0,disableSwipe:!1,firstAndLastGutter:!1,showSlither:!1,enablePlaceholder:!1,activePosition:"left",slidesToScroll:1,placeholderItem:null,numberOfPlaceholderItems:0,rightChevron:null,leftChevron:null,onActiveStateChange:null,alwaysShowChevrons:!1,classes:{},infiniteLoop:!1,calculateActualTranslateX:function(e){return e}},t.default=Te}])},33:function(e,t,r){"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE){0;try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}}(),e.exports=r(342)},347:function(e,t,r){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n="function"==typeof Symbol&&Symbol.for,o=n?Symbol.for("react.element"):60103,i=n?Symbol.for("react.portal"):60106,a=n?Symbol.for("react.fragment"):60107,u=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,l=n?Symbol.for("react.provider"):60109,s=n?Symbol.for("react.context"):60110,f=n?Symbol.for("react.async_mode"):60111,p=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,h=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,y=n?Symbol.for("react.memo"):60115,b=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,O=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,S=n?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case a:case c:case u:case h:return e;default:switch(e=e&&e.$$typeof){case s:case d:case b:case y:case l:return e;default:return t}}case i:return t}}}function C(e){return w(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=s,t.ContextProvider=l,t.Element=o,t.ForwardRef=d,t.Fragment=a,t.Lazy=b,t.Memo=y,t.Portal=i,t.Profiler=c,t.StrictMode=u,t.Suspense=h,t.isAsyncMode=function(e){return C(e)||w(e)===f},t.isConcurrentMode=C,t.isContextConsumer=function(e){return w(e)===s},t.isContextProvider=function(e){return w(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return w(e)===d},t.isFragment=function(e){return w(e)===a},t.isLazy=function(e){return w(e)===b},t.isMemo=function(e){return w(e)===y},t.isPortal=function(e){return w(e)===i},t.isProfiler=function(e){return w(e)===c},t.isStrictMode=function(e){return w(e)===u},t.isSuspense=function(e){return w(e)===h},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===a||e===p||e===c||e===u||e===h||e===m||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===l||e.$$typeof===s||e.$$typeof===d||e.$$typeof===O||e.$$typeof===g||e.$$typeof===S||e.$$typeof===v)},t.typeOf=w},353:function(e,t,r){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var a=i(r(169)),u=i(r(124)),c=i(r(170)),l=i(r(171)),s=i(r(48)),f=i(r(172)),p=i(r(122)),d=i(r(3)),h=function(e){function t(r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,r),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,r=o.state,i=r.currentStyle,a=r.currentVelocity,u=r.lastIdealStyle,c=r.lastIdealVelocity;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var s=e[l];"number"==typeof s&&(t||(t=!0,i=n({},i),a=n({},a),u=n({},u),c=n({},c)),i[l]=s,a[l]=0,u[l]=s,c[l]=0)}t&&o.setState({currentStyle:i,currentVelocity:a,lastIdealStyle:u,lastIdealVelocity:c})},this.startAnimationIfNecessary=function(){o.animationID=s.default((function(e){var t=o.props.style;if(f.default(o.state.currentStyle,t,o.state.currentVelocity))return o.wasAnimating&&o.props.onRest&&o.props.onRest(),o.animationID=null,o.wasAnimating=!1,void(o.accumulatedTime=0);o.wasAnimating=!0;var r=e||l.default(),n=r-o.prevTime;if(o.prevTime=r,o.accumulatedTime=o.accumulatedTime+n,o.accumulatedTime>1e3/60*10&&(o.accumulatedTime=0),0===o.accumulatedTime)return o.animationID=null,void o.startAnimationIfNecessary();var i=(o.accumulatedTime-Math.floor(o.accumulatedTime/(1e3/60))*(1e3/60))/(1e3/60),a=Math.floor(o.accumulatedTime/(1e3/60)),u={},s={},p={},d={};for(var h in t)if(Object.prototype.hasOwnProperty.call(t,h)){var m=t[h];if("number"==typeof m)p[h]=m,d[h]=0,u[h]=m,s[h]=0;else{for(var y=o.state.lastIdealStyle[h],b=o.state.lastIdealVelocity[h],v=0;v<a;v++){var O=c.default(1e3/60/1e3,y,b,m.val,m.stiffness,m.damping,m.precision);y=O[0],b=O[1]}var g=c.default(1e3/60/1e3,y,b,m.val,m.stiffness,m.damping,m.precision),S=g[0],w=g[1];p[h]=y+(S-y)*i,d[h]=b+(w-b)*i,u[h]=y,s[h]=b}}o.animationID=null,o.accumulatedTime-=a*(1e3/60),o.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:u,lastIdealVelocity:s}),o.unreadPropStyle=null,o.startAnimationIfNecessary()}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,r=e.style,n=t||u.default(r),o=a.default(n);return{currentStyle:n,currentVelocity:o,lastIdealStyle:n,lastIdealVelocity:o}},t.prototype.componentDidMount=function(){this.prevTime=l.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=l.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(s.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=h,e.exports=t.default},48:function(e,t,r){(function(t){for(var n=r(354),o="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",u=o["request"+a],c=o["cancel"+a]||o["cancelRequest"+a],l=0;!u&&l<i.length;l++)u=o[i[l]+"Request"+a],c=o[i[l]+"Cancel"+a]||o[i[l]+"CancelRequest"+a];if(!u||!c){var s=0,f=0,p=[];u=function(e){if(0===p.length){var t=n(),r=Math.max(0,1e3/60-(t-s));s=r+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(r))}return p.push({handle:++f,callback:e,cancelled:!1}),f},c=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return u.call(o,e)},e.exports.cancel=function(){c.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=u,e.cancelAnimationFrame=c}}).call(this,r(62))},76:function(e,t,r){"use strict";e.exports=r(347)}}]);