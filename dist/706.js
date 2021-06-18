/*! For license information please see 706.js.LICENSE.txt */
(self.webpackChunkwp5_starter_react=self.webpackChunkwp5_starter_react||[]).push([[706],{6706:(n,e,t)=>{"use strict";t.d(e,{i:()=>p});var r,o=t(655),i=t(1467),u=t(9329),c=t.n(u),a=t(4604);function f(n,e){return e?e(n):c().of()}function s(n){return"function"==typeof n?new p(n):n}function l(n){return n.request.length<=1}r=Error,(0,o.ZT)((function(n,e){var t=r.call(this,n)||this;return t.link=e,t}),r);var p=function(){function n(n){n&&(this.request=n)}return n.empty=function(){return new n((function(){return c().of()}))},n.from=function(e){return 0===e.length?n.empty():e.map(s).reduce((function(n,e){return n.concat(e)}))},n.split=function(e,t,r){var o=s(t),i=s(r||new n(f));return l(o)&&l(i)?new n((function(n){return e(n)?o.request(n)||c().of():i.request(n)||c().of()})):new n((function(n,t){return e(n)?o.request(n,t)||c().of():i.request(n,t)||c().of()}))},n.execute=function(n,e){return n.request(function(n,e){var t=(0,o.pi)({},n);return Object.defineProperty(e,"setContext",{enumerable:!1,value:function(n){t="function"==typeof n?(0,o.pi)((0,o.pi)({},t),n(t)):(0,o.pi)((0,o.pi)({},t),n)}}),Object.defineProperty(e,"getContext",{enumerable:!1,value:function(){return(0,o.pi)({},t)}}),e}(e.context,function(n){var e={variables:n.variables||{},extensions:n.extensions||{},operationName:n.operationName,query:n.query};return e.operationName||(e.operationName="string"!=typeof e.query?(0,a.rY)(e.query)||void 0:""),e}(function(n){for(var e=["query","operationName","variables","extensions","context"],t=0,r=Object.keys(n);t<r.length;t++){var o=r[t];if(e.indexOf(o)<0)throw new i.ej(26)}return n}(e))))||c().of()},n.concat=function(e,t){var r=s(e);if(l(r))return r;var o=s(t);return l(o)?new n((function(n){return r.request(n,(function(n){return o.request(n)||c().of()}))||c().of()})):new n((function(n,e){return r.request(n,(function(n){return o.request(n,e)||c().of()}))||c().of()}))},n.prototype.split=function(e,t,r){return this.concat(n.split(e,t,r||new n(f)))},n.prototype.concat=function(e){return n.concat(this,e)},n.prototype.request=function(n,e){throw new i.ej(21)},n.prototype.onError=function(n,e){if(e&&e.error)return e.error(n),!1;throw n},n.prototype.setOnError=function(n){return this.onError=n,this},n}()},9770:(n,e,t)=>{"use strict";t.d(e,{Yk:()=>i,F:()=>u,hi:()=>c});var r=t(655),o=t(1467);function i(n,e){var t=e,i=[];return n.definitions.forEach((function(n){if("OperationDefinition"===n.kind)throw new o.ej(42);"FragmentDefinition"===n.kind&&i.push(n)})),void 0===t&&((0,o.kG)(1===i.length,43),t=i[0].name.value),(0,r.pi)((0,r.pi)({},n),{definitions:(0,r.pr)([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:t}}]}}],n.definitions)})}function u(n){void 0===n&&(n=[]);var e={};return n.forEach((function(n){e[n.name.value]=n})),e}function c(n,e){switch(n.kind){case"InlineFragment":return n;case"FragmentSpread":var t=e&&e[n.name.value];return(0,o.kG)(t,44),t;default:return null}}},4604:(n,e,t)=>{"use strict";t.d(e,{A$:()=>i,$H:()=>u,rY:()=>c,kU:()=>a,iW:()=>f,pD:()=>s,p$:()=>l,O4:()=>p});var r=t(1467),o=t(386);function i(n){(0,r.kG)(n&&"Document"===n.kind,45);var e=n.definitions.filter((function(n){return"FragmentDefinition"!==n.kind})).map((function(n){if("OperationDefinition"!==n.kind)throw new r.ej(46);return n}));return(0,r.kG)(e.length<=1,47),n}function u(n){return i(n),n.definitions.filter((function(n){return"OperationDefinition"===n.kind}))[0]}function c(n){return n.definitions.filter((function(n){return"OperationDefinition"===n.kind&&n.name})).map((function(n){return n.name.value}))[0]||null}function a(n){return n.definitions.filter((function(n){return"FragmentDefinition"===n.kind}))}function f(n){var e=u(n);return(0,r.kG)(e&&"query"===e.operation,48),e}function s(n){(0,r.kG)("Document"===n.kind,49),(0,r.kG)(n.definitions.length<=1,50);var e=n.definitions[0];return(0,r.kG)("FragmentDefinition"===e.kind,51),e}function l(n){var e;i(n);for(var t=0,o=n.definitions;t<o.length;t++){var u=o[t];if("OperationDefinition"===u.kind){var c=u.operation;if("query"===c||"mutation"===c||"subscription"===c)return u}"FragmentDefinition"!==u.kind||e||(e=u)}if(e)return e;throw new r.ej(52)}function p(n){var e=Object.create(null),t=n&&n.variableDefinitions;return t&&t.length&&t.forEach((function(n){n.defaultValue&&(0,o.vb)(e,n.variable.name,n.defaultValue)})),e}},386:(n,e,t)=>{"use strict";t.d(e,{kQ:()=>c,Yk:()=>a,vb:()=>f,vf:()=>s,PT:()=>p,NC:()=>v,u2:()=>y,qw:()=>h,My:()=>b,Ao:()=>d});var r=t(5035),o=t.n(r),i=t(1467),u=t(9770);function c(n){return{__ref:String(n)}}function a(n){return Boolean(n&&"object"==typeof n&&"string"==typeof n.__ref)}function f(n,e,t,r){if(function(n){return"IntValue"===n.kind}(t)||function(n){return"FloatValue"===n.kind}(t))n[e.value]=Number(t.value);else if(function(n){return"BooleanValue"===n.kind}(t)||function(n){return"StringValue"===n.kind}(t))n[e.value]=t.value;else if(function(n){return"ObjectValue"===n.kind}(t)){var o={};t.fields.map((function(n){return f(o,n.name,n.value,r)})),n[e.value]=o}else if(function(n){return"Variable"===n.kind}(t)){var u=(r||{})[t.name.value];n[e.value]=u}else if(function(n){return"ListValue"===n.kind}(t))n[e.value]=t.values.map((function(n){var t={};return f(t,e,n,r),t[e.value]}));else if(function(n){return"EnumValue"===n.kind}(t))n[e.value]=t.value;else{if(!function(n){return"NullValue"===n.kind}(t))throw new i.ej(53);n[e.value]=null}}function s(n,e){var t=null;n.directives&&(t={},n.directives.forEach((function(n){t[n.name.value]={},n.arguments&&n.arguments.forEach((function(r){var o=r.name,i=r.value;return f(t[n.name.value],o,i,e)}))})));var r=null;return n.arguments&&n.arguments.length&&(r={},n.arguments.forEach((function(n){var t=n.name,o=n.value;return f(r,t,o,e)}))),p(n.name.value,r,t)}var l=["connection","include","skip","client","rest","export"];function p(n,e,t){if(e&&t&&t.connection&&t.connection.key){if(t.connection.filter&&t.connection.filter.length>0){var r=t.connection.filter?t.connection.filter:[];r.sort();var i={};return r.forEach((function(n){i[n]=e[n]})),t.connection.key+"("+JSON.stringify(i)+")"}return t.connection.key}var u=n;if(e){var c=o()(e);u+="("+c+")"}return t&&Object.keys(t).forEach((function(n){-1===l.indexOf(n)&&(t[n]&&Object.keys(t[n]).length?u+="@"+n+"("+JSON.stringify(t[n])+")":u+="@"+n)})),u}function v(n,e){if(n.arguments&&n.arguments.length){var t={};return n.arguments.forEach((function(n){var r=n.name,o=n.value;return f(t,r,o,e)})),t}return null}function y(n){return n.alias?n.alias.value:n.name.value}function h(n,e,t){if("string"==typeof n.__typename)return n.__typename;for(var r=0,o=e.selections;r<o.length;r++){var i=o[r];if(b(i)){if("__typename"===i.name.value)return n[y(i)]}else{var c=h(n,(0,u.hi)(i,t).selectionSet,t);if("string"==typeof c)return c}}}function b(n){return"Field"===n.kind}function d(n){return"InlineFragment"===n.kind}},5035:n=>{"use strict";n.exports=function(n,e){e||(e={}),"function"==typeof e&&(e={cmp:e});var t,r="boolean"==typeof e.cycles&&e.cycles,o=e.cmp&&(t=e.cmp,function(n){return function(e,r){var o={key:e,value:n[e]},i={key:r,value:n[r]};return t(o,i)}}),i=[];return function n(e){if(e&&e.toJSON&&"function"==typeof e.toJSON&&(e=e.toJSON()),void 0!==e){if("number"==typeof e)return isFinite(e)?""+e:"null";if("object"!=typeof e)return JSON.stringify(e);var t,u;if(Array.isArray(e)){for(u="[",t=0;t<e.length;t++)t&&(u+=","),u+=n(e[t])||"null";return u+"]"}if(null===e)return"null";if(-1!==i.indexOf(e)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var c=i.push(e)-1,a=Object.keys(e).sort(o&&o(e));for(u="",t=0;t<a.length;t++){var f=a[t],s=n(e[f]);s&&(u&&(u+=","),u+=JSON.stringify(f)+":"+s)}return i.splice(c,1),"{"+u+"}"}}(n)}},1467:(n,e,t)=>{"use strict";t.d(e,{ej:()=>c,kG:()=>a,U6:()=>p});var r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])})(n,e)};Object.create,Object.create;var o="Invariant Violation",i=Object.setPrototypeOf,u=void 0===i?function(n,e){return n.__proto__=e,n}:i,c=function(n){function e(t){void 0===t&&(t=o);var r=n.call(this,"number"==typeof t?o+": "+t+" (see https://github.com/apollographql/invariant-packages)":t)||this;return r.framesToPop=1,r.name=o,u(r,e.prototype),r}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}(e,n),e}(Error);function a(n,e){if(!n)throw new c(e)}var f=["log","warn","error","silent"],s=f.indexOf("log");function l(n){return function(){if(f.indexOf(n)>=s)return console[n].apply(console,arguments)}}function p(n){var e=f[s];return s=Math.max(0,f.indexOf(n)),e}!function(n){n.log=l("log"),n.warn=l("warn"),n.error=l("error")}(a||(a={})),"object"==typeof process&&"object"==typeof process.env&&process},655:(n,e,t)=>{"use strict";t.d(e,{ZT:()=>o,pi:()=>i,_T:()=>u,mG:()=>c,Jh:()=>a,pr:()=>f});var r=function(n,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(n,e)};function o(n,e){function t(){this.constructor=n}r(n,e),n.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}var i=function(){return(i=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}).apply(this,arguments)};function u(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}function c(n,e,t,r){return new(t||(t=Promise))((function(o,i){function u(n){try{a(r.next(n))}catch(n){i(n)}}function c(n){try{a(r.throw(n))}catch(n){i(n)}}function a(n){var e;n.done?o(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(u,c)}a((r=r.apply(n,e||[])).next())}))}function a(n,e){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(n){i=[6,n],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}function f(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;var r=Array(n),o=0;for(e=0;e<t;e++)for(var i=arguments[e],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r}},9329:(n,e,t)=>{n.exports=t(516).Observable},516:(n,e)=>{"use strict";function t(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(n,e,t){return e&&r(n.prototype,e),t&&r(n,t),n}e.Observable=void 0;var i=function(){return"function"==typeof Symbol},u=function(n){return i()&&Boolean(Symbol[n])},c=function(n){return u(n)?Symbol[n]:"@@"+n};i()&&!u("observable")&&(Symbol.observable=Symbol("observable"));var a=c("iterator"),f=c("observable"),s=c("species");function l(n,e){var t=n[e];if(null!=t){if("function"!=typeof t)throw new TypeError(t+" is not a function");return t}}function p(n){var e=n.constructor;return void 0!==e&&null===(e=e[s])&&(e=void 0),void 0!==e?e:_}function v(n){return n instanceof _}function y(n){y.log?y.log(n):setTimeout((function(){throw n}))}function h(n){Promise.resolve().then((function(){try{n()}catch(n){y(n)}}))}function b(n){var e=n._cleanup;if(void 0!==e&&(n._cleanup=void 0,e))try{if("function"==typeof e)e();else{var t=l(e,"unsubscribe");t&&t.call(e)}}catch(n){y(n)}}function d(n){n._observer=void 0,n._queue=void 0,n._state="closed"}function m(n,e,t){n._state="running";var r=n._observer;try{var o=l(r,e);switch(e){case"next":o&&o.call(r,t);break;case"error":if(d(n),!o)throw t;o.call(r,t);break;case"complete":d(n),o&&o.call(r)}}catch(n){y(n)}"closed"===n._state?b(n):"running"===n._state&&(n._state="ready")}function w(n,e,t){if("closed"!==n._state){if("buffering"!==n._state)return"ready"!==n._state?(n._state="buffering",n._queue=[{type:e,value:t}],void h((function(){return function(n){var e=n._queue;if(e){n._queue=void 0,n._state="ready";for(var t=0;t<e.length&&(m(n,e[t].type,e[t].value),"closed"!==n._state);++t);}}(n)}))):void m(n,e,t);n._queue.push({type:e,value:t})}}var g=function(){function n(e,r){t(this,n),this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";var o=new k(this);try{this._cleanup=r.call(void 0,o)}catch(n){o.error(n)}"initializing"===this._state&&(this._state="ready")}return o(n,[{key:"unsubscribe",value:function(){"closed"!==this._state&&(d(this),b(this))}},{key:"closed",get:function(){return"closed"===this._state}}]),n}(),k=function(){function n(e){t(this,n),this._subscription=e}return o(n,[{key:"next",value:function(n){w(this._subscription,"next",n)}},{key:"error",value:function(n){w(this._subscription,"error",n)}},{key:"complete",value:function(){w(this._subscription,"complete")}},{key:"closed",get:function(){return"closed"===this._subscription._state}}]),n}(),_=function(){function n(e){if(t(this,n),!(this instanceof n))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof e)throw new TypeError("Observable initializer must be a function");this._subscriber=e}return o(n,[{key:"subscribe",value:function(n){return"object"==typeof n&&null!==n||(n={next:n,error:arguments[1],complete:arguments[2]}),new g(n,this._subscriber)}},{key:"forEach",value:function(n){var e=this;return new Promise((function(t,r){if("function"==typeof n)var o=e.subscribe({next:function(e){try{n(e,i)}catch(n){r(n),o.unsubscribe()}},error:r,complete:t});else r(new TypeError(n+" is not a function"));function i(){o.unsubscribe(),t()}}))}},{key:"map",value:function(n){var e=this;if("function"!=typeof n)throw new TypeError(n+" is not a function");return new(p(this))((function(t){return e.subscribe({next:function(e){try{e=n(e)}catch(n){return t.error(n)}t.next(e)},error:function(n){t.error(n)},complete:function(){t.complete()}})}))}},{key:"filter",value:function(n){var e=this;if("function"!=typeof n)throw new TypeError(n+" is not a function");return new(p(this))((function(t){return e.subscribe({next:function(e){try{if(!n(e))return}catch(n){return t.error(n)}t.next(e)},error:function(n){t.error(n)},complete:function(){t.complete()}})}))}},{key:"reduce",value:function(n){var e=this;if("function"!=typeof n)throw new TypeError(n+" is not a function");var t=p(this),r=arguments.length>1,o=!1,i=arguments[1],u=i;return new t((function(t){return e.subscribe({next:function(e){var i=!o;if(o=!0,!i||r)try{u=n(u,e)}catch(n){return t.error(n)}else u=e},error:function(n){t.error(n)},complete:function(){if(!o&&!r)return t.error(new TypeError("Cannot reduce an empty sequence"));t.next(u),t.complete()}})}))}},{key:"concat",value:function(){for(var n=this,e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=p(this);return new o((function(e){var r,i=0;return function n(u){r=u.subscribe({next:function(n){e.next(n)},error:function(n){e.error(n)},complete:function(){i===t.length?(r=void 0,e.complete()):n(o.from(t[i++]))}})}(n),function(){r&&(r.unsubscribe(),r=void 0)}}))}},{key:"flatMap",value:function(n){var e=this;if("function"!=typeof n)throw new TypeError(n+" is not a function");var t=p(this);return new t((function(r){var o=[],i=e.subscribe({next:function(e){if(n)try{e=n(e)}catch(n){return r.error(n)}var i=t.from(e).subscribe({next:function(n){r.next(n)},error:function(n){r.error(n)},complete:function(){var n=o.indexOf(i);n>=0&&o.splice(n,1),u()}});o.push(i)},error:function(n){r.error(n)},complete:function(){u()}});function u(){i.closed&&0===o.length&&r.complete()}return function(){o.forEach((function(n){return n.unsubscribe()})),i.unsubscribe()}}))}},{key:f,value:function(){return this}}],[{key:"from",value:function(e){var t="function"==typeof this?this:n;if(null==e)throw new TypeError(e+" is not an object");var r=l(e,f);if(r){var o=r.call(e);if(Object(o)!==o)throw new TypeError(o+" is not an object");return v(o)&&o.constructor===t?o:new t((function(n){return o.subscribe(n)}))}if(u("iterator")&&(r=l(e,a)))return new t((function(n){h((function(){if(!n.closed){var t=!0,o=!1,i=void 0;try{for(var u,c=r.call(e)[Symbol.iterator]();!(t=(u=c.next()).done);t=!0){var a=u.value;if(n.next(a),n.closed)return}}catch(n){o=!0,i=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}n.complete()}}))}));if(Array.isArray(e))return new t((function(n){h((function(){if(!n.closed){for(var t=0;t<e.length;++t)if(n.next(e[t]),n.closed)return;n.complete()}}))}));throw new TypeError(e+" is not observable")}},{key:"of",value:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o="function"==typeof this?this:n;return new o((function(n){h((function(){if(!n.closed){for(var e=0;e<t.length;++e)if(n.next(t[e]),n.closed)return;n.complete()}}))}))}},{key:s,get:function(){return this}}]),n}();e.Observable=_,i()&&Object.defineProperty(_,Symbol("extensions"),{value:{symbol:f,hostReportError:y},configurable:!0})}}]);