!function(t,e){"object"==typeof exports?module.exports=e():void 0===t.jQuery&&(t.$=e())}(this,function(){function t(t){return"length"in t&&t!==window?[].slice.call(t):[t]}function e(t,e){return[].filter.call(t,e)}function n(t,e){return[].map.call(t,e)}function r(t,e){return(Element.prototype.matches||Element.prototype.msMatchesSelector).call(t,e)}var i=function(){this.events={}};i.prototype={bind:function(t,e,n){var r=t.split(".")[0];n.addEventListener(r,e,!1),this.events[t]={type:r,listener:e}},unbind:function(t,e){t in this.events&&(e.removeEventListener(this.events[t].type,this.events[t].listener,!1),delete this.events[t])}};var o=function(t){return this.selector=t,this._setup([])};return o.Constructor=function(t,e){return new o(t).init(e)},o.prototype={constructor:o,init:function(e){if(!this.selector)return this;if("string"==typeof this.selector){if("<"===this.selector[0]){var n=this._setup([this._create(this.selector)]);return e?n.attr(e):n}return this._setup(t(document.querySelectorAll(this.selector)))}return this.selector.nodeType?this._setup([this.selector]):"function"==typeof this.selector?this._setup([document]).ready(this.selector):this._setup(t(this.selector))},_create:function(t){var e=t.substr(t.indexOf("<")+1,t.indexOf(">")-1).replace("/","");return document.createElement(e)},_setup:function(t){for(var e=0;e<t.length;e++)delete this[e];for(this.elements=t,this.length=t.length,e=0;e<t.length;e++)this[e]=t[e];return this},_first:function(t,e){var n=this.elements[0];return n?t?t.call(this,n):n:e},_classes:function(t,e){var n=e.split(" ");if(!(n.length>1)){if("contains"===t){var r=this._first();return!!r&&r.classList.contains(e)}return""===e?this:this.each(function(n,r){r.classList[t](e)})}n.forEach(this._classes.bind(this,t))},_access:function(t,e,n){if("object"==typeof t)for(var r in t)this._access(r,t[r],n);else if(void 0===e)return this._first(function(e){return n(e,t)});return this.each(function(r,i){n(i,t,e)})},each:function(t,e){e=e||this.elements;for(var n=0;n<e.length&&!1!==t.call(e[n],n,e[n]);n++);return this}},o.extend=function(t){Object.keys(t).forEach(function(e){o.prototype[e]=t[e]})},o.extend({ready:function(t){return(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?t():document.addEventListener("DOMContentLoaded",t),this}}),o.extend({css:function(t,e){return this._access(t,e,function(t,e,n){var r="number"==typeof n?"px":"";return void 0===n?function(e,n){return t.style[n]||getComputedStyle(t)[n]}(0,e):t.style[e]=n+r})},attr:function(t,e){return this._access(t,e,function(t,e,n){return void 0===n?t.getAttribute(e):t.setAttribute(e,n)})},prop:function(t,e){return this._access(t,e,function(t,e,n){return void 0===n?t[e]:t[e]=n})},position:function(){return this._first(function(t){return{left:t.offsetLeft,top:t.offsetTop}})},scrollTop:function(t){return this._access("scrollTop",t,function(t,e,n){return void 0===n?t[e]:t[e]=n})},outerHeight:function(t){return this._first(function(e){var n=getComputedStyle(e),r=t?parseInt(n.marginTop,10)+parseInt(n.marginBottom,10):0;return e.offsetHeight+r})},index:function(){return this._first(function(e){return t(e.parentNode.children).indexOf(e)},-1)}}),o.extend({children:function(t){var e=[];return this.each(function(t,r){e=e.concat(n(r.children,function(t){return t}))}),o.Constructor(e).filter(t)},siblings:function(){var t=[];return this.each(function(n,r){t=t.concat(e(r.parentNode.children,function(t){return t!==r}))}),o.Constructor(t)},parent:function(){var t=n(this.elements,function(t){return t.parentNode});return o.Constructor(t)},parents:function(t){var e=[];return this.each(function(t,n){for(var r=n.parentElement;r;r=r.parentElement)e.push(r)}),o.Constructor(e).filter(t)},find:function(t){var e=[];return this.each(function(r,i){e=e.concat(n(i.querySelectorAll(t),function(t){return t}))}),o.Constructor(e)},filter:function(t){if(!t)return this;var n=e(this.elements,function(e){return r(e,t)});return o.Constructor(n)},is:function(t){var e=!1;return this.each(function(n,i){return!(e=r(i,t))}),e}}),o.extend({appendTo:function(t){return t=t.nodeType?t:t._first(),this.each(function(e,n){t.appendChild(n)})},append:function(t){return t=t.nodeType?t:t._first(),this.each(function(e,n){n.appendChild(t)})},insertAfter:function(t){var e=document.querySelector(t);return this.each(function(t,n){e.parentNode.insertBefore(n,e.nextSibling)})},clone:function(){var t=n(this.elements,function(t){return t.cloneNode(!0)});return o.Constructor(t)},remove:function(){this.each(function(t,e){delete e.events,delete e.data,e.parentNode&&e.parentNode.removeChild(e)}),this._setup([])}}),o.extend({data:function(t,e){var n=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,r="data-"+t.replace(/[A-Z]/g,"-$&").toLowerCase();return void 0===e?this._first(function(e){if(e.data&&e.data[t])return e.data[t];var i=e.getAttribute(r);return"true"===i||"false"!==i&&(i===+i+""?+i:n.test(i)?JSON.parse(i):i)}):this.each(function(n,r){r.data=r.data||{},r.data[t]=e})}}),o.extend({trigger:function(t){t=t.split(".")[0];var e=document.createEvent("HTMLEvents");return e.initEvent(t,!0,!1),this.each(function(t,n){n.dispatchEvent(e)})},blur:function(){return this.trigger("blur")},focus:function(){return this.trigger("focus")},on:function(t,e){return this.each(function(n,r){r.events||(r.events=new i),t.split(" ").forEach(function(t){r.events.bind(t,e,r)})})},off:function(t){return this.each(function(e,n){n.events&&(n.events.unbind(t,n),delete n.events)})}}),o.extend({toggleClass:function(t){return this._classes("toggle",t)},addClass:function(t){return this._classes("add",t)},removeClass:function(t){return this._classes("remove",t)},hasClass:function(t){return this._classes("contains",t)}}),o.Constructor}),function(t){var e,n=0,r=document.querySelector(".preloader"),i=document.querySelector(".preloader-progress-bar"),o=document.querySelector("body");function s(){clearTimeout(e),i&&(i.style.width="100%"),setTimeout(function(){r.addEventListener("transitionend",function(){r.className="preloader-hidden"}),r.className+=" preloader-hidden-add preloader-hidden-add-active",o.style.overflow=""},300)}r&&(o.style.overflow="hidden",e=setTimeout(function t(){n+=.015*Math.pow(1-Math.sqrt(100-n),2),i&&(i.style.width=Math.round(n)+"%"),e=setTimeout(t,20)},20),t.appBootstrap=function(){setTimeout(s,1e3)})}(window);