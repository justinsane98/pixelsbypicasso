webpackJsonp([37966293490765],{194:function(e,t){"use strict";function r(e,t){for(var n,o=0,a=e.length;o<a;o++)n=e[o],Array.isArray(n)?r(n,t):t.push(n);return t}e.exports=function(e){return r(e,[])}},195:function(e,t){"use strict";e.exports=function(e){if(!Array.isArray(e))throw new TypeError("arr-union expects the first argument to be an array.");for(var t=arguments.length,r=0;++r<t;){var n=arguments[r];if(n){Array.isArray(n)||(n=[n]);for(var o=0;o<n.length;o++){var a=n[o];e.indexOf(a)>=0||e.push(a)}}}return e}},196:function(e,t){"use strict";e.exports=function(e,t){if(null===e||"undefined"==typeof e)throw new TypeError("expected first argument to be an object.");if("undefined"==typeof t||"undefined"==typeof Symbol)return e;if("function"!=typeof Object.getOwnPropertySymbols)return e;for(var r=Object.prototype.propertyIsEnumerable,n=Object(e),o=arguments.length,a=0;++a<o;)for(var i=Object(arguments[a]),s=Object.getOwnPropertySymbols(i),c=0;c<s.length;c++){var u=s[c];r.call(i,u)&&(n[u]=i[u])}return n}},152:function(e,t,r){"use strict";function n(e,t){for(var r in t)s(t,r)&&(e[r]=t[r])}function o(e){return e&&"string"==typeof e}function a(e){var t={};for(var r in e)t[r]=e[r];return t}function i(e){return e&&"object"==typeof e||c(e)}function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var c=r(309),u=r(196);e.exports=Object.assign||function(e){if(null===e||"undefined"==typeof e)throw new TypeError("Cannot convert undefined or null to object");i(e)||(e={});for(var t=1;t<arguments.length;t++){var r=arguments[t];o(r)&&(r=a(r)),i(r)&&(n(e,r),u(e,r))}return e}},309:function(e,t,r){"use strict";var n=r(160);e.exports=function(e){return n(e)||"function"==typeof e||Array.isArray(e)}},323:function(e,t){"use strict";e.exports=function(e,t,r){for(var n in e)if(t.call(r,e[n],n,e)===!1)break}},324:function(e,t,r){"use strict";var n=r(323),o=Object.prototype.hasOwnProperty;e.exports=function(e,t,r){n(e,function(n,a){if(o.call(e,a))return t.call(r,e[a],a,e)})}},341:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){e.getImageData||(e=e.getContext("2d"));var n=e.getImageData(t,r,1,1).data;return n.r=n[0],n.b=n[1],n.g=n[2],n.a=n[3],n.rgb="rgb("+n.r+","+n.g+","+n.b+")",n.rgba="rgb("+n.r+","+n.g+","+n.b+","+n.a+")",n},e.exports=t.default},156:function(e,t){function r(e){return null!==e&&("object"==typeof e||"function"==typeof e)}function n(e){return e?Array.isArray(e)?e.join("."):e:""}e.exports=function(e,t,o,a,i){if(!r(e)||!t)return e;if(t=n(t),o&&(t+="."+n(o)),a&&(t+="."+n(a)),i&&(t+="."+n(i)),t in e)return e[t];for(var s=t.split("."),c=s.length,u=-1;e&&++u<c;){for(var l=s[u];"\\"===l[l.length-1];)l=l.slice(0,-1)+"."+s[++u];e=e[l]}return e}},342:function(e,t,r){"use strict";function n(e,t){if(null==e)return[];if(!Array.isArray(e))throw new TypeError("group-array expects an array.");if(1===arguments.length)return e;for(var r=u([].slice.call(arguments,1)),n=o(e,r[0]),a=1;a<r.length;a++)i(n,r[a]);return n}function o(e,t,r){for(var n={},o=0;o<e.length;o++){var i,c=e[o];switch(i="function"==typeof t?t.call(n,c,r):h(c,t),p(i)){case"undefined":break;case"string":case"number":case"boolean":l(n,s(String(i)),c);break;case"object":case"array":a(n,c,i);break;case"function":throw new Error("invalid argument type: "+r)}}return n}function a(e,t,r){Array.isArray(r)?r.forEach(function(r){l(e,s(r),t)}):f(r,function(r,n){l(e,s(n),t)})}function i(e,t){return f(e,function(r,n){Array.isArray(r)?e[n]=o(r,t,n):e[n]=i(r,t,n)}),e}function s(e){var t={strict:!1,keepEscaping:!0,keepDoubleQuotes:!0,keepSingleQuotes:!0};try{return c(e,t).join("\\.")}catch(t){return e}}var c=r(343),u=r(194),l=r(344),f=r(324),p=r(357),h=r(156);e.exports=n},343:function(e,t,r){"use strict";function n(e,t,r){var o=e.indexOf(t,r);return"\\"===e.charAt(o-1)?n(e,t,o+1):o}var o=r(152);e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("expected a string");"string"==typeof t&&(t={sep:t});for(var r,a=o({sep:"."},t),i=[""],s=e.length,c=-1;++c<s;){var u=e[c],l=e[c+1];if("\\"!==u){if('"'===u){if(r=n(e,'"',c+1),r===-1){if(a.strict!==!1)throw new Error("unclosed double quote: "+e);r=c}u=a.keepDoubleQuotes===!0?e.slice(c,r+1):e.slice(c+1,r),c=r}if("'"===u){if(r=n(e,"'",c+1),r===-1){if(a.strict!==!1)throw new Error("unclosed single quote: "+e);r=c}u=a.keepSingleQuotes===!0?e.slice(c,r+1):e.slice(c+1,r),c=r}u===a.sep?i.push(""):i[i.length-1]+=u}else{var f=a.keepEscaping===!0?u+l:l;i[i.length-1]+=f,c++}}return i}},344:function(e,t,r){"use strict";function n(e){return null===e||"undefined"==typeof e?[]:Array.isArray(e)?e:[e]}var o=r(104),a=r(195),i=r(156),s=r(464);e.exports=function(e,t,r){if(!o(e))throw new TypeError("union-value expects the first argument to be an object.");if("string"!=typeof t)throw new TypeError("union-value expects `prop` to be a string.");var c=n(i(e,t));return s(e,t,a(c,n(r))),e}},346:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function n(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}e.exports=function(e){return null!=e&&(r(e)||n(e)||!!e._isBuffer)}},104:function(e,t){"use strict";e.exports=function(e){return"undefined"!=typeof e&&null!==e&&("object"==typeof e||"function"==typeof e)}},160:function(e,t,r){"use strict";function n(e){return o(e)===!0&&"[object Object]"===Object.prototype.toString.call(e)}var o=r(347);e.exports=function(e){var t,r;return n(e)!==!1&&(t=e.constructor,"function"==typeof t&&(r=t.prototype,n(r)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1))}},347:function(e,t){"use strict";e.exports=function(e){return null!=e&&"object"==typeof e&&Array.isArray(e)===!1}},357:function(e,t,r){var n=r(346),o=Object.prototype.toString;e.exports=function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";if(e===!0||e===!1||e instanceof Boolean)return"boolean";if("string"==typeof e||e instanceof String)return"string";if("number"==typeof e||e instanceof Number)return"number";if("function"==typeof e||e instanceof Function)return"function";if("undefined"!=typeof Array.isArray&&Array.isArray(e))return"array";if(e instanceof RegExp)return"regexp";if(e instanceof Date)return"date";var t=o.call(e);return"[object RegExp]"===t?"regexp":"[object Date]"===t?"date":"[object Arguments]"===t?"arguments":"[object Error]"===t?"error":n(e)?"buffer":"[object Set]"===t?"set":"[object WeakSet]"===t?"weakset":"[object Map]"===t?"map":"[object WeakMap]"===t?"weakmap":"[object Symbol]"===t?"symbol":"[object Int8Array]"===t?"int8array":"[object Uint8Array]"===t?"uint8array":"[object Uint8ClampedArray]"===t?"uint8clampedarray":"[object Int16Array]"===t?"int16array":"[object Uint16Array]"===t?"uint16array":"[object Int32Array]"===t?"int32array":"[object Uint32Array]"===t?"uint32array":"[object Float32Array]"===t?"float32array":"[object Float64Array]"===t?"float64array":"object"}},360:function(e,t,r){(function(e){!function(t){function r(e,t){if(e=o(e),!e)return null;var n,a,i,s=1/0;t||(t=r.DEFAULT_COLORS);for(var c=0;c<t.length;++c)a=t[c].rgb,n=Math.sqrt(Math.pow(e.r-a.r,2)+Math.pow(e.g-a.g,2)+Math.pow(e.b-a.b,2)),n<s&&(s=n,i=t[c]);return i.name?{name:i.name,value:i.source,rgb:i.rgb,distance:s}:i.source}function n(e){return e instanceof Array?e.map(function(e){return a(e)}):Object.keys(e).map(function(t){return a(e[t],t)})}function o(e){var t,n,a;if("object"==typeof e)return e;if(e in r.STANDARD_COLORS)return o(r.STANDARD_COLORS[e]);var s=e.match(/^#((?:[0-9a-f]{3}){1,2})$/i);if(s)return s=s[1],s=3===s.length?[s.charAt(0)+s.charAt(0),s.charAt(1)+s.charAt(1),s.charAt(2)+s.charAt(2)]:[s.substring(0,2),s.substring(2,4),s.substring(4,6)],t=parseInt(s[0],16),n=parseInt(s[1],16),a=parseInt(s[2],16),{r:t,g:n,b:a};var c=e.match(/^rgb\(\s*(\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)\s*\)$/i);return c?(t=i(c[1]),n=i(c[2]),a=i(c[3]),{r:t,g:n,b:a}):null}function a(e,t){var r={};if(t&&(r.name=t),"string"==typeof e)r.source=e,r.rgb=o(e);else if("object"==typeof e){if(e.source)return a(e.source,e.name);r.rgb=e,r.source=s(e)}return r}function i(e){return"%"===e.charAt(e.length-1)?Math.round(255*parseInt(e,10)/100):Number(e)}function s(e){return"#"+c(e.r.toString(16))+c(e.g.toString(16))+c(e.b.toString(16))}function c(e){return 1===e.length&&(e="0"+e),e}r.from=function e(t){var o=n(t),a=r,i=function(e){return a(e,o)};return i.from=e,i.or=function(e){var t=o.concat(n(e));return r.from(t)},i},r.STANDARD_COLORS={aqua:"#0ff",black:"#000",blue:"#00f",fuchsia:"#f0f",gray:"#808080",green:"#008000",lime:"#0f0",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",purple:"#800080",red:"#f00",silver:"#c0c0c0",teal:"#008080",white:"#fff",yellow:"#ff0"},r.DEFAULT_COLORS=n(["#f00","#f80","#ff0","#0f0","#00f","#008","#808"]),r.VERSION="0.4.2","object"==typeof e&&e&&e.exports?e.exports=r:t.nearestColor=r}(this)}).call(t,r(472)(e))},447:function(e,t,r){"use strict";function n(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=n(o),i=n(r(7)),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},p=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h={buffer:"readAsArrayBuffer",binary:"readAsBinaryString",dataUrl:"readAsDataURL",text:"readAsText"},d=["onLoadStart","onLoadEnd","onLoad","onAbort","onError"],g={readAs:!0,abortIf:!0,cancelIf:!0,onCancel:!0},b=function(e){function t(e,r){c(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.handleChange=n.handleChange.bind(n),n}return f(t,e),u(t,[{key:"componentDidMount",value:function(){(window&&!window.File||!window.FileReader)&&console.warn("Browser does not appear to support API react-simple-file-input relies upon")}},{key:"handleChange",value:function(e){var t=this,r=this.props,n=r.readAs,o=r.cancelIf,a=r.onCancel,i=r.onProgress,c=r.abortIf,u=r.onChange,l=r.multiple,f=e.target.files;if(u&&u(l?f:f[0]),n)for(var p=function(e){var r=f[e];if(o&&o(r))return a&&a(r),{v:void 0};for(var s=new window.FileReader,u=function(e){var n=d[e];t.props[n]&&(s[n.toLowerCase()]=function(e){t.props[n](e,r)})},l=0;l<d.length;l++)u(l);void 0!==c?s.onprogress=function(e){c(e,r)?s.abort():i&&i(e,r)}:i&&(s.onprogress=i),s[h[n]](r)},g=0;g<f.length;g++){var b=p(g);if("object"===(void 0===b?"undefined":s(b)))return b.v}}},{key:"render",value:function(){var e={};for(var t in this.props)this.props.hasOwnProperty(t)&&!g[t]&&(e[t]=this.props[t]);return a.createElement("input",l({},e,{type:"file",onChange:this.handleChange}))}}]),t}(o.Component);b.propTypes={id:i.string,className:i.string,multiple:i.bool,readAs:i.oneOf(Object.keys(h)),onChange:i.func,cancelIf:i.func,onCancel:i.func,onLoadStart:i.func,abortIf:i.func,onAbort:i.func,onProgress:i.func,onLoad:i.func,onError:i.func,onLoadEnd:i.func},t.default=b},448:function(e,t,r){"use strict";e.exports=r(447)},464:function(e,t,r){"use strict";var n=r(468),o=r(465),a=r(160),i=r(104);e.exports=function(e,t,r){if(!i(e))return e;if(Array.isArray(t)&&(t=[].concat.apply([],t).join(".")),"string"!=typeof t)return e;for(var s=n(t,{sep:".",brackets:!0}),c=s.length,u=-1,l=e;++u<c;){var f=s[u];u===c-1?a(l[f])&&a(r)?l[f]=o({},l[f],r):l[f]=r:(i(l[f])||(l[f]={}),l=l[f])}return e}},465:function(e,t,r){"use strict";function n(e,t){for(var r in t)o(t,r)&&(e[r]=t[r])}function o(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var a=r(104);e.exports=function(e){a(e)||(e={});for(var t=arguments.length,r=1;r<t;r++){var o=arguments[r];a(o)&&n(e,o)}return e}},468:function(e,t,r){"use strict";function n(e,t,r,o){var a=e.indexOf(t,r);return"\\"===e.charAt(a-1)?n(e,t,a+1):a}function o(e,t){return t.keepDoubleQuotes===!0&&'"'===e||(t.keepSingleQuotes===!0&&"'"===e||t.keepQuotes)}function a(e,t,r){return"function"==typeof e.keepEscaping?e.keepEscaping(t,r):e.keepEscaping===!0||"\\"===t[r+1]}var i=r(152);e.exports=function(e,t,r){function s(){if(c&&h.length)return c[h[h.length-1]]}if("string"!=typeof e)throw new TypeError("expected a string");"function"==typeof t&&(r=t,t=null),"string"==typeof t&&(t={sep:t});var c,u=i({sep:"."},t),l=u.quotes||['"',"'","`"];u.brackets===!0?c={"<":">","(":")","[":"]","{":"}"}:u.brackets&&(c=u.brackets);for(var f,p=[],h=[],d=[""],g=u.sep,b=e.length,y=-1;++y<b;){var m=e[y],v=e[y+1],x={val:m,idx:y,arr:d,str:e};if(p.push(x),"\\"!==m){if(c&&c[m]){h.push(m);var w=s(),C=y+1;if(e.indexOf(w,C+1)!==-1)for(;h.length&&C<b;){var A=e[++C];if("\\"!==A)if(l.indexOf(A)===-1){if(w=s(),h.length&&e.indexOf(w,C+1)===-1)break;c[A]?h.push(A):w===A&&h.pop()}else C=n(e,A,C+1);else A++}if(f=C,f===-1){d[d.length-1]+=m;continue}m=e.slice(y,f+1),x.val=m,x.idx=y=f}if(l.indexOf(m)!==-1){if(f=n(e,m,y+1),f===-1){d[d.length-1]+=m;continue}m=o(m,u)===!0?e.slice(y,f+1):e.slice(y+1,f),x.val=m,x.idx=y=f}"function"==typeof r&&(r(x,p),m=x.val,y=x.idx),x.val!==g||x.split===!1?d[d.length-1]+=x.val:d.push("")}else x.val=a(u,e,y)===!0?m+v:v,x.escaped=!0,"function"==typeof r&&r(x),d[d.length-1]+=x.val,y++}return d}},472:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},205:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=r(2),a=(n(o),function(){return[{id:1,name:"Peach",rgb:[214,160,144],hex:"#d6a090",paint:"Coral"},{id:2,name:"Apple",rgb:[254,59,30],hex:"#fe3b1e",paint:"Red"},{id:3,name:"Cherry",rgb:[161,44,50],hex:"#a12c32",paint:"Cherry Cobbler"},{id:4,name:"Cupcake",rgb:[250,47,122],hex:"#fa2f7a",paint:"Bright Red"},{id:5,name:"Bubblegum",rgb:[251,159,218],hex:"#fb9fda",paint:"Pink Blast"},{id:6,name:"Sprinkles",rgb:[230,28,247],hex:"#e61cf7",paint:"Fuschia"},{id:7,name:"Eggplant",rgb:[153,47,124],hex:"#992f7c",paint:"Plum"},{id:8,name:"Wine",rgb:[71,1,31],hex:"#47011f",paint:"Wine"},{id:9,name:"Blueberry",rgb:[5,17,85],hex:"#051155",paint:"Violet"},{id:10,name:"Grape",rgb:[79,2,236],hex:"#4f02ec",paint:"Purple"},{id:11,name:"Tuna",rgb:[45,105,203],hex:"#2d69cb",paint:"Dark Blue"},{id:12,name:"Water",rgb:[0,166,238],hex:"#00a6ee",paint:"Bright Blue"},{id:13,name:"Cottoncandy",rgb:[111,235,255],hex:"#6febff",paint:"Robin Egg"},{id:14,name:"Mahi",rgb:[8,162,154],hex:"#08a29a",paint:"Turquoise"},{id:15,name:"Broccoli",rgb:[42,102,106],hex:"#2a666a",paint:"Green Teal"},{id:16,name:"Spinach",rgb:[6,54,25],hex:"#063619",paint:"Hunter Green"},{id:17,name:"Toast",rgb:[0,0,0],hex:"#000000",paint:"Black"},{id:18,name:"Oyster",rgb:[74,73,87],hex:"#4a4957",paint:"Dark Grey"},{id:19,name:"Plum",rgb:[142,123,164],hex:"#8e7ba4",paint:"Orchid"},{id:20,name:"Lavender",rgb:[183,192,255],hex:"#b7c0ff",paint:"Lavender"},{id:21,name:"Marshmallow",rgb:[255,255,255],hex:"#ffffff",paint:"White"},{id:22,name:"Pistachio",rgb:[172,190,156],hex:"#acbe9c",paint:"Tan"},{id:23,name:"Gravy",rgb:[130,124,112],hex:"#827c70",paint:"Grey"},{id:24,name:"Coffee",rgb:[90,59,28],hex:"#5a3b1c",paint:"Espresso"},{id:25,name:"Chocolate",rgb:[174,101,7],hex:"#ae6507",paint:"Brown"},{id:26,name:"Pumpkin",rgb:[247,170,48],hex:"#f7aa30",paint:"Pure Pumpkin"},{id:27,name:"Lemon",rgb:[244,234,92],hex:"#f4ea5c",paint:"Bright Yellow"},{id:28,name:"Pea",rgb:[155,149,0],hex:"#9b9500",paint:"Spanish Olive"},{id:29,name:"Olive",rgb:[86,98,4],hex:"#566204",paint:"Shamrock"},{id:30,name:"Lettuce",rgb:[17,150,59],hex:"#11963b",paint:"Grass Green"},{id:31,name:"Lime",rgb:[81,225,19],hex:"#51e113",paint:"Lime Green"},{id:32,name:"Frosting",rgb:[8,253,204],hex:"#08fdcc",paint:"Pale Blue"},{id:33,name:"Light Peach",rgb:[234,207,199],hex:"#EACFC7",paint:"Coral / White"},{id:34,name:"Light Apple",rgb:[249,157,142],hex:"#F99D8E",paint:"Red / White"},{id:35,name:"Light Cherry",rgb:[208,149,152],hex:"#D09598",paint:"Cherry Cobbler / White"},{id:36,name:"Light Cupcake",rgb:[252,151,188],hex:"#FC97BC",paint:"Bright Red / White"},{id:37,name:"Light Bubblegum",rgb:[253,207,236],hex:"#FDCFEC",paint:"Pink Blast / White"},{id:38,name:"Light Sprinkles",rgb:[242,141,251],hex:"#F28DFB",paint:"Fuschia / White"},{id:39,name:"Light Eggplant",rgb:[204,151,189],hex:"#CC97BD",paint:"Plum / White"},{id:40,name:"Light Wine",rgb:[163,128,143],hex:"#A3808F",paint:"Wine / White"},{id:41,name:"Light Blueberry",rgb:[130,136,170],hex:"#8288AA",paint:"Violet / White"},{id:42,name:"Light Grape",rgb:[167,128,245],hex:"#A780F5",paint:"Purple / White"},{id:43,name:"Light Tuna",rgb:[150,180,229],hex:"#96B4E5",paint:"Dark Blue / White"},{id:44,name:"Light Water",rgb:[128,210,246],hex:"#80D2F6",paint:"Bright Blue / White"},{id:45,name:"Light Cottoncandy",rgb:[183,245,255],hex:"#B7F5FF",paint:"Robin Egg / White"},{id:46,name:"Light Mahi",rgb:[131,208,204],hex:"#83D0CC",paint:"Turquoise / White"},{id:47,name:"Light Broccoli",rgb:[148,178,180],hex:"#94B2B4",paint:"Green Teal / White"},{id:48,name:"Light Spinach",rgb:[130,154,140],hex:"#829A8C",paint:"Hunter Green / White"},{id:49,name:"Light Toast",rgb:[128,128,128],hex:"#808080",paint:"Black / White"},{id:50,name:"Light Oyster",rgb:[164,164,171],hex:"#A4A4AB",paint:"Dark Grey / White"},{id:51,name:"Light Plum",rgb:[198,189,209],hex:"#C6BDD1",paint:"Orchid / White"},{id:52,name:"Light Lavender",rgb:[219,223,255],hex:"#DBDFFF",paint:"Lavender / White"},{id:53,name:"Light Pistachio",rgb:[213,222,205],hex:"#D5DECD",paint:"Tan / White"},{id:54,name:"Light Gravy",rgb:[192,189,183],hex:"#C0BDB7",paint:"Grey / White"},{id:55,name:"Light Coffee",rgb:[172,157,141],hex:"#AC9D8D",paint:"Espresso / White"},{id:56,name:"Light Chocolate",rgb:[214,178,131],hex:"#D6B283",paint:"Brown / White"},{id:57,name:"Light Pumpkin",rgb:[251,212,151],hex:"#FBD497",paint:"Pure Pumpkin / White"},{id:58,name:"Light Lemon",rgb:[249,244,173],hex:"#F9F4AD",paint:"Bright Yellow / White"},{id:59,name:"Light Pea",rgb:[205,202,128],hex:"#CDCA80",paint:"Spanish Olive / White"},{id:60,name:"Light Olive",rgb:[170,176,129],hex:"#AAB081",paint:"Shamrock / White"},{id:61,name:"Light Lettuce",rgb:[136,202,157],hex:"#88CA9D",paint:"Grass Green / White"},{id:62,name:"Light Lime",rgb:[168,240,137],hex:"#A8F089",paint:"Lime Green / White"},{id:63,name:"Light Frosting",rgb:[131,254,229],hex:"#83FEE5",paint:"Pale Blue / White"}]});t.default=a,e.exports=t.default},206:function(e,t){"use strict";t.__esModule=!0;var r=function(){return{color1:"rgb(214, 160, 144)",color2:"rgb(254, 59, 30)",color3:"rgb(161, 44, 50)",color4:"rgb(250, 47, 122)",color5:"rgb(251, 159, 218)",color6:"rgb(230, 28, 247)",color7:"rgb(153, 47, 124)",color8:"rgb(71, 1, 31)",color9:"rgb(5, 17, 85)",color10:"rgb(79, 2, 236)",color11:"rgb(45, 105, 203)",color12:"rgb(0, 166, 238)",color13:"rgb(111, 235, 255)",color14:"rgb(8, 162, 154)",color15:"rgb(42, 102, 106)",color16:"rgb(6, 54, 25)",color17:"rgb(0, 0, 0)",color18:"rgb(74, 73, 87)",color19:"rgb(142, 123, 164)",color20:"rgb(183, 192, 255)",color21:"rgb(255, 255, 255)",color22:"rgb(172, 190, 156)",color23:"rgb(130, 124, 112)",color24:"rgb(90, 59, 28)",color25:"rgb(174, 101, 7)",color26:"rgb(247, 170, 48)",color27:"rgb(244, 234, 92)",color28:"rgb(155, 149, 0)",color29:"rgb(86, 98, 4)",color30:"rgb(17, 150, 59)",color31:"rgb(81, 225, 19)",color32:"rgb(8, 253, 204)",color33:"rgb(234, 207, 199)",color34:"rgb(249, 157, 142)",color35:"rgb(208, 149, 152)",color36:"rgb(252, 151, 188)",color37:"rgb(253, 207, 236)",color38:"rgb(242, 141, 251)",color39:"rgb(204, 151, 189)",color40:"rgb(163, 128, 143)",color41:"rgb(130, 136, 170)",color42:"rgb(167, 128, 245)",color43:"rgb(150, 180, 229)",color44:"rgb(128, 210, 246)",color45:"rgb(183, 245, 255)",color46:"rgb(131, 208, 204)",color47:"rgb(148, 178, 180)",color48:"rgb(130, 154, 140)",color49:"rgb(128, 128, 128)",color50:"rgb(164, 164, 171)",color51:"rgb(198, 189, 209)",color52:"rgb(219, 223, 255)",color53:"rgb(213, 222, 205)",color54:"rgb(192, 189, 183)",color55:"rgb(172, 157, 141)",color56:"rgb(214, 178, 131)",color57:"rgb(251, 212, 151)",color58:"rgb(249, 244, 173)",color59:"rgb(205, 202, 128)",color60:"rgb(170, 176, 129)",color61:"rgb(136, 202, 157)",color62:"rgb(168, 240, 137)",color63:"rgb(131, 254, 22)"}};t.default=r,e.exports=t.default},207:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return p.indexOf(e.type)===-1}t.__esModule=!0;var c=r(2),u=n(c),l=r(448),f=n(l),p=["image/png","image/jpeg","image/gif"],h=function(e){function t(r,n){o(this,t);var i=a(this,e.call(this,r,n));return i.cancelButtonClicked=i.cancelButtonClicked.bind(i),i.resetCancelButtonClicked=i.resetCancelButtonClicked.bind(i),i.showProgressBar=i.showProgressBar.bind(i),i.updateProgressBar=i.updateProgressBar.bind(i),i.handleFileSelected=i.handleFileSelected.bind(i),i.state={cancelButtonClicked:!1},i}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",null,u.default.createElement("label",null,u.default.createElement(f.default,{readAs:"dataUrl",style:{display:"none"},onLoadStart:this.showProgressBar,onLoad:this.handleFileSelected,onProgress:this.updateProgressBar,cancelIf:s,abortIf:this.cancelButtonClicked,onCancel:this.showInvalidFileTypeMessage,onAbort:this.resetCancelButtonClicked}),u.default.createElement("span",{className:"button",style:{width:"100%",textAlign:"center",marginBottom:"20px"}},"Select a photo")))},t.prototype.cancelButtonClicked=function(){return this.state.cancelButtonClicked},t.prototype.resetCancelButtonClicked=function(){this.setState({cancelButtonClicked:!1})},t.prototype.showInvalidFileTypeMessage=function(e){window.alert("Tried to upload invalid filetype "+e.type)},t.prototype.showProgressBar=function(){this.setState({progressBarVisible:!0})},t.prototype.updateProgressBar=function(e){this.setState({progressPercent:e.loaded/e.total*100})},t.prototype.handleFileSelected=function(e,t){this.props.base64Image(e.target.result),this.props.readyToDraw(!1)},t}(u.default.Component);t.default=h,e.exports=t.default},209:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=r(2),c=n(s),u=r(210),l=n(u),f=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.colorArray.map(function(e,t){return c.default.createElement("li",{key:t},c.default.createElement(l.default,{rgb:e.rgb,id:e.id,paint:e.paint,locations:e.locations}))});return c.default.createElement("div",null,this.props.colorArray.length?c.default.createElement("h1",null,"Colors (",this.props.colorArray.length,")"):"",c.default.createElement("ul",{className:"legend naked"},e))},t}(c.default.Component);t.default=f,e.exports=t.default},210:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=r(2),c=n(s),u=function(e){function t(){return o(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",t=this.props.locations.map(function(t){return c.default.createElement("a",{key:t,href:"",onClick:function(e){e.preventDefault()},style:{display:"inline-block",width:"10%",textDecoration:"none",textAlign:"center",backgroundColor:"rgba(255,255,255,1)",margin:"0 5px 5px 0"}},c.default.createElement("span",{key:t},e.charAt(t[0]),t[1]))});return c.default.createElement("div",{key:this.props.rgb,style:{marginBottom:"50px",position:"relative"}},c.default.createElement("div",{className:"swatch",style:{backgroundColor:this.props.rgb}}),c.default.createElement("h3",null,this.props.paint," (#",this.props.id,")"),c.default.createElement("p",{style:{margin:"-10px 0 10px 0"}},c.default.createElement("strong",null,this.props.rgb)),c.default.createElement("p",null,c.default.createElement("strong",null,"Locations (",this.props.locations.length,"):"),c.default.createElement("br",null)),c.default.createElement("p",null,t))},t}(c.default.Component);t.default=u,e.exports=t.default},212:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=r(2),c=n(s),u=r(341),l=n(u),f=function(e){function t(r){o(this,t);var n=a(this,e.call(this,r));return n.colorInArray=function(e,t){for(var r=-1,n=0,o=t.length;n<o;n++)if(e===t[n].rgb)return r=n;return r},n.addCoordsToColorInColorCache=function(e,t,r,n,o){n[o].colorArray.push([e,t])},n.addPixelColorToColorCache=function(e,t){t.push(e)},n.getCanvasData=function(){for(var e=[],t=this,r=0;r<this.props.height;r++)for(var n=0;n<this.props.width;n++){var o=(0,l.default)(this.refs.canvas,n,r).rgb,a={rgb:o,colorArray:[[n,r]]};if(e.length>0){var i=this.colorInArray(o,e),s=this.colorInArray(o,e);this.colorToArray,this.coordsToColorInArray;i>-1?this.addCoordsToColorInColorCache(n,r,o,e,s):this.addPixelColorToColorCache(a,e)}else this.addPixelColorToColorCache(a,e)}e.length>0&&t.props.setColorArray(e)},n}return i(t,e),t.prototype.componentDidUpdate=function(){this.props.readyToDraw?(this.clearCanvas(),this.drawImageToCanvas(),this.props.readyToRead&&(this.getCanvasData(),this.props.setReadyToRead(!1))):this.loadCanvas()},t.prototype.loadCanvas=function(){var e=new Image,t=this;e.src=this.props.imageString,e.onload=function(){t.props.setCanvasData(e),t.props.setReadyToRead(!0)}},t.prototype.drawImageToCanvas=function(){this.refs.canvas.getContext("2d").drawImage(this.props.imageElem,0,0,this.props.width,this.props.height,0,0,this.props.width,this.props.height)},t.prototype.clearCanvas=function(){this.refs.canvas.getContext("2d").clearRect(0,0,this.props.width,this.props.height,0,0,this.props.width,this.props.height)},t.prototype.render=function(){return c.default.createElement("canvas",{ref:"canvas",id:this.props.id,width:this.props.width*this.props.zoom,height:this.props.height*this.props.zoom})},t}(c.default.Component);t.default=f,e.exports=t.default},216:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=r(2),c=n(s),u=r(342),l=n(u),f=r(65),p=n(f),h=r(207),d=n(h),g=r(209),b=n(g),y=r(212),m=n(y),v=r(205),x=n(v),w=r(206),C=n(w),A=function(e){function t(n){o(this,t);var i=a(this,e.call(this,n));return i.setImageBase64=function(e){this.setState({base64String:e})},i.setCanvasData=function(e){this.setState({canvasData:e}),this.setState({readyToDraw:!0})},i.setReadyToDraw=function(e){this.setState({readyToDraw:e})},i.setReadyToRead=function(e){this.setState({readyToRead:e})},i.setColorArray=function(e){if(this.state.colorArray!==e){var t=(0,C.default)(),n=(0,x.default)(),o=r(360).from(t),a=[];e.map(function(e,t){var r=o(e.rgb),i=r.name.substr(5),s=n[i].name,c=n[i].paint,u=r.value,l=Math.floor(r.distance),f={id:i,rgb:e.rgb,nearestName:s,nearestPaint:c,nearestRgb:u,distanceFromOriginal:l,locations:e.colorArray};a.push(f)});var i=(0,l.default)(a,"id"),s=[];for(var c in i)s.push([c,i[c]]);s.sort(function(e,t){return t[1].length-e[1].length});var u=[];s.map(function(e,t){var r=e[0],n=e[1],o=[],a=n[0].nearestName,i=n[0].rgb;n.map(function(e,t){o.push.apply(o,e.locations)}),o.sort(function(e,t){return e[0]-t[0]||e[1]-t[1]}),u.push({rgb:i,id:r,paint:a,locations:o})}),this.setLegend(u),this.setState({colorArray:e})}},i.setLegend=function(e){this.setState({legend:e})},i.nearestColorName=function(){var e=nearestColor(self.props.color.rgb).name,t=masterColorList[e.substr(5)].name;return t},i.nearestColorRgb=function(){return nearestColor(self.props.color.rgb).value},i.nearestColorPaint=function(){var e=nearestColor(self.props.color.rgb).name,t=masterColorList[e.substr(5)].paint;return t},i.nearestColorDistance=function(){return Math.floor(nearestColor(self.props.color.rgb).distance)},i.state={base64String:null,canvasData:[],colorArray:[],readyToDraw:!1,readyToRead:!1,legend:[]},i.setImageBase64=i.setImageBase64.bind(i),i.setCanvasData=i.setCanvasData.bind(i),i.setColorArray=i.setColorArray.bind(i),i.setReadyToDraw=i.setReadyToDraw.bind(i),i.setReadyToRead=i.setReadyToRead.bind(i),i}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"flex-container"},c.default.createElement("div",{className:"flex-box canvas-box"},c.default.createElement("h2",null,"Pardon the dust?"),c.default.createElement("p",null,"Thanks for helping us test our new product. If you have any questions or feedback please ",c.default.createElement(p.default,{
to:"/about/"},"let us know"),"."),c.default.createElement(d.default,{base64Image:this.setImageBase64,readyToDraw:this.setReadyToDraw}),c.default.createElement(m.default,{id:"picasso",width:"26",height:"26",zoom:"10",imageString:this.state.base64String,imageElem:this.state.canvasData,setCanvasData:this.setCanvasData,setColorArray:this.setColorArray,readyToDraw:this.state.readyToDraw,readyToRead:this.state.readyToRead,setReadyToRead:this.setReadyToRead})),c.default.createElement("div",{className:"flex-box directions-box"},c.default.createElement(b.default,{colorArray:this.state.legend})))},t}(c.default.Component);t.default=A,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-beta-js-510eff22e3d4136703fb.js.map