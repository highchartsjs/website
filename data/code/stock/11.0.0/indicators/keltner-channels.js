/*
 Highstock JS v11.0.0 (2023-04-27)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Daniel Studencki

 License: www.highcharts.com/license
*/
'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};
$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");
var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};
$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var f=0;f<e.length-1;f++){var n=e[f];n in d||(d[n]={});d=d[n]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=$jscomp.propertyToPolyfillSymbol[e],
$jscomp.defineProperty(d,e,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,c){return c})}},"es8","es3");
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/keltner-channels",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,b,e,f){a.hasOwnProperty(b)||(a[b]=f.apply(null,e),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,
module:a[b]}})))}a=a?a._modules:{};b(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b){const {sma:{prototype:c}}=a.seriesTypes,{defined:d,error:n,merge:v}=b;var k;(function(a){function e(a){return"plot"+a.charAt(0).toUpperCase()+a.slice(1)}function x(a,b){const r=[];(a.pointArrayMap||[]).forEach(a=>{a!==b&&r.push(e(a))});return r}function f(){const a=this,b=a.linesApiNames;var g=a.areaLinesNames;const m=a.points,f=a.options,
k=a.graph,l={options:{gapSize:f.gapSize}},h=[];var q=x(a,a.pointValKey);let p=m.length,u;q.forEach((a,b)=>{for(h[b]=[];p--;)u=m[p],h[b].push({x:u.x,plotX:u.plotX,plotY:u[a],isNull:!d(u[a])});p=m.length});if(a.userOptions.fillColor&&g.length){var w=q.indexOf(e(g[0]));w=h[w];g=1===g.length?m:h[q.indexOf(e(g[1]))];q=a.color;a.points=g;a.nextPoints=w;a.color=a.userOptions.fillColor;a.options=v(m,l);a.graph=a.area;a.fillGraph=!0;c.drawGraph.call(a);a.area=a.graph;delete a.nextPoints;delete a.fillGraph;
a.color=q}b.forEach((b,d)=>{h[d]?(a.points=h[d],f[b]?a.options=v(f[b].styles,l):n('Error: "There is no '+b+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),a.graph=a["graph"+b],c.drawGraph.call(a),a["graph"+b]=a.graph):n('Error: "'+b+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});a.points=m;a.options=f;a.graph=k;c.drawGraph.call(a)}function k(a){var b;let d=[];a=a||this.points;if(this.fillGraph&&
this.nextPoints){if((b=c.getGraphPath.call(this,this.nextPoints))&&b.length){b[0][0]="L";d=c.getGraphPath.call(this,a);b=b.slice(0,d.length);for(let a=b.length-1;0<=a;a--)d.push(b[a])}}else d=c.getGraphPath.apply(this,arguments);return d}function l(a){const b=[];(this.pointArrayMap||[]).forEach(c=>{b.push(a[c])});return b}function h(){const a=this.pointArrayMap;let b=[],d;b=x(this);c.translate.apply(this,arguments);this.points.forEach(c=>{a.forEach((a,e)=>{d=c[a];this.dataModify&&(d=this.dataModify.modifyValue(d));
null!==d&&(c[b[e]]=this.yAxis.toPixels(d,!0))})})}const y=[],z=["bottomLine"],A=["top","bottom"],p=["top"];a.compose=function(a){if(b.pushUnique(y,a)){const b=a.prototype;b.linesApiNames=b.linesApiNames||z.slice();b.pointArrayMap=b.pointArrayMap||A.slice();b.pointValKey=b.pointValKey||"top";b.areaLinesNames=b.areaLinesNames||p.slice();b.drawGraph=f;b.getGraphPath=k;b.toYData=l;b.translate=h}return a}})(k||(k={}));return k});b(a,"Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b,e){const {sma:c}=b.seriesTypes,{correctFloat:d,extend:v,merge:k}=e;class l extends c{constructor(){super(...arguments);this.points=this.options=this.data=void 0}init(){b.seriesTypes.sma.prototype.init.apply(this,arguments);this.options=k({topLine:{styles:{lineColor:this.color}},bottomLine:{styles:{lineColor:this.color}}},this.options)}getValues(a,c){const e=c.period,f=c.periodATR,k=c.multiplierATR;var h=a.yData;h=h?h.length:0;
const l=[];c=b.seriesTypes.ema.prototype.getValues(a,{period:e,index:c.index});a=b.seriesTypes.atr.prototype.getValues(a,{period:f});const n=[],q=[];let p;let r,t;if(!(h<e)){for(t=e;t<=h;t++){var g=c.values[t-e];var m=a.values[t-f];r=g[0];p=d(g[1]+k*m[1]);m=d(g[1]-k*m[1]);g=g[1];l.push([r,p,g,m]);n.push(r);q.push([p,g,m])}return{values:l,xData:n,yData:q}}}}l.defaultOptions=k(c.defaultOptions,{params:{index:0,period:20,periodATR:10,multiplierATR:2},bottomLine:{styles:{lineWidth:1,lineColor:void 0}},
topLine:{styles:{lineWidth:1,lineColor:void 0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Upper Channel: {point.top}<br/>EMA({series.options.params.period}): {point.middle}<br/>Lower Channel: {point.bottom}<br/>'},marker:{enabled:!1},dataGrouping:{approximation:"averages"},lineWidth:1});v(l.prototype,{nameBase:"Keltner Channels",areaLinesNames:["top","bottom"],nameComponents:["period","periodATR","multiplierATR"],linesApiNames:["topLine","bottomLine"],
pointArrayMap:["top","middle","bottom"],pointValKey:"middle"});a.compose(l);b.registerSeriesType("keltnerchannels",l);"";return l});b(a,"masters/indicators/keltner-channels.src.js",[],function(){})});
//# sourceMappingURL=keltner-channels.js.map