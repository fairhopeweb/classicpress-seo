!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=236)}([function(t,n){t.exports=Array.isArray},,,,,,function(t,n){t.exports=function(t){return t}},,,,,function(t,n,r){var e=r(63);t.exports=function(t,n){for(var r=t.length;r--;)if(e(t[r][0],n))return r;return-1}},,,,,,,function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},function(t,n,r){var e=r(0),o=r(21),i=r(124),u=r(60);t.exports=function(t,n){return e(t)?t:o(t,n)?[t]:i(u(t))}},function(t,n,r){var e=r(103),o=r(106)(e);t.exports=o},function(t,n,r){var e=r(0),o=r(123),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,u=/^\w*$/;t.exports=function(t,n){if(e(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||u.test(t)||!i.test(t)||null!=n&&t in Object(n)}},,,,,,,function(t,n,r){var e=r(33)(Object.keys,Object);t.exports=e},function(t,n,r){var e=r(62),o=r(50);t.exports=function(t){return null!=t&&o(t.length)&&!e(t)}},function(t,n,r){var e=r(19),o=r(6);t.exports=function(t,n){for(var r=0,i=(n=e(n,t)).length;null!=t&&i>r;)t=t[o(n[r++])];return r&&r==i?t:void 0}},function(t,n,r){var e=r(107),o=r(121),i=r(101),u=r(0),a=r(127);t.exports=function(t){return"function"==typeof t?t:null==t?i:"object"==typeof t?u(t)?o(t[0],t[1]):e(t):a(t)}},,function(t,n){t.exports=function(t,n){return function(r){return t(n(r))}}},,,,,,,,,,,,,,,,,function(t,n){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&9007199254740991>=t}},function(t,n,r){var e=r(109),o=r(110),i=r(111),u=r(112),a=r(113);function f(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}f.prototype.clear=e,f.prototype.delete=o,f.prototype.get=i,f.prototype.has=u,f.prototype.set=a,t.exports=f},function(t,n,r){var e=r(114),o=r(59);t.exports=function t(n,r,i,u,a){return n===r||(null==n||null==r||!o(n)&&!o(r)?n!=n&&r!=r:e(n,r,i,u,t,a))}},function(t,n){t.exports=function(t,n,r){for(var e=r-1,o=t.length;++e<o;)if(t[e]===n)return e;return-1}},function(t,n,r){var e=r(18);t.exports=function(t){return t==t&&!e(t)}},function(t,n){t.exports=function(t,n){return function(r){return null!=r&&r[t]===n&&(void 0!==n||t in Object(r))}}},,,function(t,n){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,n){t.exports=function(t){return t}},function(t,n){t.exports=function(t){return void 0===t}},function(t,n,r){var e=r(58),o=r(18);t.exports=function(t){if(!o(t))return!1;var n=e(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n}},function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},function(t,n,r){var e=r(126),o=r(99);t.exports=function(t,n){return null!=t&&o(t,n,e)}},function(t,n){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var e=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==e||"symbol"!=e&&r.test(t))&&t>-1&&t%1==0&&n>t}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){var e=r(0);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return e(t)?t:[t]}},function(t,n,r){var e=r(53);t.exports=function(t,n){return!(null==t||!t.length)&&e(t,n,0)>-1}},function(t,n){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,n){t.exports=function(){return!1}},function(t,n){t.exports=function(){return!1}},function(t,n,r){var e=r(19),o=r(100),i=r(0),u=r(65),a=r(50),f=r(6);t.exports=function(t,n,r){for(var c=-1,s=(n=e(n,t)).length,l=!1;++c<s;){var p=f(n[c]);if(!(l=null!=t&&r(t,p)))break;t=t[p]}return l||++c!=s?l:!!(s=null==t?0:t.length)&&a(s)&&u(p,s)&&(i(t)||o(t))}},function(t,n){t.exports=function(){return!1}},function(t,n){t.exports=function(t){return t}},,function(t,n,r){var e=r(104),o=r(28);t.exports=function(t,n){return t&&e(t,n,o)}},function(t,n,r){var e=r(105)();t.exports=e},function(t,n){t.exports=function(t){return function(n,r,e){for(var o=-1,i=Object(n),u=e(n),a=u.length;a--;){var f=u[t?a:++o];if(!1===r(i[f],f,i))break}return n}}},function(t,n,r){var e=r(29);t.exports=function(t,n){return function(r,o){if(null==r)return r;if(!e(r))return t(r,o);for(var i=r.length,u=n?i:-1,a=Object(r);(n?u--:++u<i)&&!1!==o(a[u],u,a););return r}}},function(t,n,r){var e=r(108),o=r(120),i=r(55);t.exports=function(t){var n=o(t);return 1==n.length&&n[0][2]?i(n[0][0],n[0][1]):function(r){return r===t||e(r,t,n)}}},function(t,n,r){var e=r(51),o=r(52);t.exports=function(t,n,r,i){var u=r.length,a=u,f=!i;if(null==t)return!a;for(t=Object(t);u--;){var c=r[u];if(f&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}for(;++u<a;){var s=(c=r[u])[0],l=t[s],p=c[1];if(f&&c[2]){if(void 0===l&&!(s in t))return!1}else{var d=new e;if(i)var g=i(l,p,s,t,n,d);if(!(void 0===g?o(p,l,3,i,d):g))return!1}}return!0}},function(t,n){t.exports=function(){this.__data__=[],this.size=0}},function(t,n,r){var e=r(11),o=Array.prototype.splice;t.exports=function(t){var n=this.__data__,r=e(n,t);return r>=0&&(r==n.length-1?n.pop():o.call(n,r,1),--this.size,!0)}},function(t,n,r){var e=r(11);t.exports=function(t){var n=this.__data__,r=e(n,t);return 0>r?void 0:n[r][1]}},function(t,n,r){var e=r(11);t.exports=function(t){return e(this.__data__,t)>-1}},function(t,n,r){var e=r(11);t.exports=function(t,n){var r=this.__data__,o=e(r,t);return 0>o?(++this.size,r.push([t,n])):r[o][1]=n,this}},function(t,n,r){var e=r(51),o=r(115),i=r(117),u=r(118),a=r(96),f=r(0),c=r(97),s=r(98),l="[object Arguments]",p="[object Array]",d="[object Object]",g=Object.prototype.hasOwnProperty;t.exports=function(t,n,r,v,h,y){var b=f(t),x=f(n),_=b?p:a(t),m=x?p:a(n),j=(_=_==l?d:_)==d,O=(m=m==l?d:m)==d,w=_==m;if(w&&c(t)){if(!c(n))return!1;b=!0,j=!1}if(w&&!j)return y||(y=new e),b||s(t)?o(t,n,r,v,h,y):i(t,n,_,r,v,h,y);if(!(1&r)){var k=j&&g.call(t,"__wrapped__"),P=O&&g.call(n,"__wrapped__");if(k||P){var M=k?t.value():t,F=P?n.value():n;return y||(y=new e),h(M,F,r,v,y)}}return!!w&&(y||(y=new e),u(t,n,r,v,h,y))}},function(t,n,r){var e=r(94),o=r(116),i=r(95);t.exports=function(t,n,r,u,a,f){var c=1&r,s=t.length,l=n.length;if(!(s==l||c&&l>s))return!1;var p=f.get(t);if(p&&f.get(n))return p==n;var d=-1,g=!0,v=2&r?new e:void 0;for(f.set(t,n),f.set(n,t);++d<s;){var h=t[d],y=n[d];if(u)var b=c?u(y,h,d,n,t,f):u(h,y,d,t,n,f);if(void 0!==b){if(b)continue;g=!1;break}if(v){if(!o(n,function(t,n){if(!i(v,n)&&(h===t||a(h,t,r,u,f)))return v.push(n)})){g=!1;break}}else if(h!==y&&!a(h,y,r,u,f)){g=!1;break}}return f.delete(t),f.delete(n),g}},function(t,n){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;return!1}},function(t,n){t.exports=function(t,n){return t===n||t!=t&&n!=n}},function(t,n,r){var e=r(119),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,r,i,u,a){var f=1&r,c=e(t),s=c.length;if(s!=e(n).length&&!f)return!1;for(var l=s;l--;){var p=c[l];if(!(f?p in n:o.call(n,p)))return!1}var d=a.get(t);if(d&&a.get(n))return d==n;var g=!0;a.set(t,n),a.set(n,t);for(var v=f;++l<s;){var h=t[p=c[l]],y=n[p];if(i)var b=f?i(y,h,p,n,t,a):i(h,y,p,t,n,a);if(!(void 0===b?h===y||u(h,y,r,i,a):b)){g=!1;break}v||(v="constructor"==p)}if(g&&!v){var x=t.constructor,_=n.constructor;x!=_&&"constructor"in t&&"constructor"in n&&!("function"==typeof x&&x instanceof x&&"function"==typeof _&&_ instanceof _)&&(g=!1)}return a.delete(t),a.delete(n),g}},function(t,n,r){var e=r(33)(Object.keys,Object);t.exports=e},function(t,n,r){var e=r(54),o=r(28);t.exports=function(t){for(var n=o(t),r=n.length;r--;){var i=n[r],u=t[i];n[r]=[i,u,e(u)]}return n}},function(t,n,r){var e=r(52),o=r(122),i=r(64),u=r(21),a=r(54),f=r(55),c=r(6);t.exports=function(t,n){return u(t)&&a(n)?f(c(t),n):function(r){var u=o(r,t);return void 0===u&&u===n?i(r,t):e(n,u,3)}}},function(t,n,r){var e=r(30);t.exports=function(t,n,r){var o=null==t?void 0:e(t,n);return void 0===o?r:o}},function(t,n){t.exports=function(){return!1}},function(t,n,r){var e=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,i=r(125)(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(e,function(t,r,e,i){n.push(e?i.replace(o,"$1"):r||t)}),n});t.exports=i},function(t,n){t.exports=function(t){return t}},function(t,n){t.exports=function(t,n){return null!=t&&n in Object(t)}},function(t,n,r){var e=r(128),o=r(129),i=r(21),u=r(6);t.exports=function(t){return i(t)?e(u(t)):o(t)}},function(t,n){t.exports=function(t){return function(n){return null==n?void 0:n[t]}}},function(t,n,r){var e=r(30);t.exports=function(t){return function(n){return e(n,t)}}},,,,function(t,n,r){var e=r(146),o=r(20),i=r(31),u=r(147),a=r(0);t.exports=function(t,n,r){var f=a(t)?e:u,c=3>arguments.length;return f(t,i(n,4),r,c,o)}},,,,,,,,,,,,,function(t,n){t.exports=function(t,n,r,e){var o=-1,i=null==t?0:t.length;for(e&&i&&(r=t[++o]);++o<i;)r=n(r,t[o],o,t);return r}},function(t,n){t.exports=function(t,n,r,e,o){return o(t,function(t,o,i){r=e?(e=!1,t):n(r,t,o,i)}),r}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,n,r){var e=r(222),o=r(20),i=r(223),u=r(0);t.exports=function(t,n){return(u(t)?e:o)(t,i(n))}},function(t,n){t.exports=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e&&!1!==n(t[r],r,t););return t}},function(t,n){t.exports=function(t){return t}},,,,,,,,,,function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=a(r(61)),i=a(r(221)),u=a(r(133));function a(t){return t&&t.__esModule?t:{default:t}}var f=function(t){this.app=t,this.loaded=!1,this.preloadThreshold=3e3,this.plugins={},this.modifications={},setTimeout(this._pollLoadingPlugins.bind(this),1500)};f.prototype._registerPlugin=function(t,n){return"string"!=typeof t?(console.error("Failed to register plugin. Expected parameter `pluginName` to be a string."),!1):(0,o.default)(n)||"object"===(void 0===n?"undefined":e(n))?!1===this._validateUniqueness(t)?(console.error("Failed to register plugin. Plugin with name "+t+" already exists"),!1):(this.plugins[t]=n,!0):(console.error("Failed to register plugin "+t+". Expected parameters `options` to be a object."),!1)},f.prototype._ready=function(t){return"string"!=typeof t?(console.error("Failed to modify status for plugin "+t+". Expected parameter `pluginName` to be a string."),!1):(0,o.default)(this.plugins[t])?(console.error("Failed to modify status for plugin "+t+". The plugin was not properly registered."),!1):(this.plugins[t].status="ready",!0)},f.prototype._reloaded=function(t){return"string"!=typeof t?(console.error("Failed to reload Content Analysis for "+t+". Expected parameter `pluginName` to be a string."),!1):(0,o.default)(this.plugins[t])?(console.error("Failed to reload Content Analysis for plugin "+t+". The plugin was not properly registered."),!1):(this.app.refresh(),!0)},f.prototype._registerModification=function(t,n,r,e){if("string"!=typeof t)return console.error("Failed to register modification for plugin "+r+". Expected parameter `modification` to be a string."),!1;if("function"!=typeof n)return console.error("Failed to register modification for plugin "+r+". Expected parameter `callable` to be a function."),!1;if("string"!=typeof r)return console.error("Failed to register modification for plugin "+r+". Expected parameter `pluginName` to be a string."),!1;if(!1===this._validateOrigin(r))return console.error("Failed to register modification for plugin "+r+". The integration has not finished loading yet."),!1;var i={callable:n,origin:r,priority:"number"==typeof e?e:10};return(0,o.default)(this.modifications[t])&&(this.modifications[t]=[]),this.modifications[t].push(i),this.app.registerCustomDataCallback(n),!0},f.prototype._applyModifications=function(t,n,r){var o=this.modifications[t];return o instanceof Array&&o.length>0&&((o=this._stripIllegalModifications(o)).sort(function(t,n){return t.priority-n.priority}),(0,i.default)(o,function(o){var i=(0,o.callable)(n,r);(void 0===i?"undefined":e(i))===(void 0===n?"undefined":e(n))?n=i:console.error("Modification with name "+t+" performed by plugin with name "+o.origin+" was ignored because the data that was returned by it was of a different type than the data we had passed it.")})),n},f.prototype._pollLoadingPlugins=function(t){t=(0,o.default)(t)?0:t,!0===this._allReady()?(this.loaded=!0,this.app.pluginsLoaded()):this.preloadThreshold>t?setTimeout(this._pollLoadingPlugins.bind(this,t+=50),50):this._pollTimeExceeded()},f.prototype._pollTimeExceeded=function(){(0,i.default)(this.plugins,function(t,n){(0,o.default)(t.options)||"ready"===t.options.status||(console.error("Error: Plugin "+n+". did not finish loading in time."),delete this.plugins[n])}),this.loaded=!0,this.app.pluginsLoaded()},f.prototype._allReady=function(){return(0,u.default)(this.plugins,function(t,n){return t&&"ready"===n.status},!0)},f.prototype._validateOrigin=function(t){return"ready"===this.plugins[t].status},f.prototype._validateUniqueness=function(t){return!!(0,o.default)(this.plugins[t])},n.default=f},,,function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u(r(62)),o=u(r(0)),i=(u(r(221)),u(r(233)));function u(t){return t&&t.__esModule?t:{default:t}}var a=function(t){this.callbacks={},this.pluggable=new i.default(this)};a.prototype.registerPlugin=function(t,n){return this.pluggable._registerPlugin(t,n)},a.prototype.pluginReady=function(t){return this.pluggable._ready(t)},a.prototype.registerModification=function(t,n,r,e){return this.pluggable._registerModification(t,n,r,e)},a.prototype.registerCustomDataCallback=function(t){this.callbacks.custom||(this.callbacks.custom=[]),(0,e.default)(t)&&this.callbacks.custom.push(t)},a.prototype.pluginReloaded=function(t){return this.pluggable._reloaded(t)},a.prototype.getData=function(){var t="";return(0,o.default)(this.callbacks.custom)&&this.callbacks.custom.forEach(function(n){var r=n(t);t=t+"\n"+r}),t},a.prototype.pluginsLoaded=function(){this.refresh()},a.prototype.refresh=function(){this.pluggable.loaded&&this._pureRefresh()},a.prototype._pureRefresh=function(){wp.hooks.addFilter("cpseo_content","classicPress",this.analyze_content)},a.prototype.analyze_content=function(t){return t+"\n"+classicPress.app.getData()},n.default=a}]);