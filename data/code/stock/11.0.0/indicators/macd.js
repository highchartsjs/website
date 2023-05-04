/*
 Highstock JS v11.0.0 (2023-04-27)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Sebastian Bochan

 License: www.highcharts.com/license
*/
'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(a,c){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:c})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};
$jscomp.Symbol=function(){function a(b){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(b||"")+"_"+c++,b)}var c=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,c){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var b=0,e={next:function(){if(b<a.length){var d=b++;return{value:c(d,a[d]),done:!1}}e.next=function(){return{done:!0,value:void 0}};return e.next()}};e[Symbol.iterator]=function(){return e};return e};$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");
var $jscomp$lookupPolyfilledValue=function(a,c){var b=$jscomp.propertyToPolyfillSymbol[c];if(null==b)return a[c];b=a[b];return void 0!==b?b:a[c]};$jscomp.polyfill=function(a,c,b,e){c&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,c,b,e):$jscomp.polyfillUnisolated(a,c,b,e))};
$jscomp.polyfillUnisolated=function(a,c,b,e){b=$jscomp.global;a=a.split(".");for(e=0;e<a.length-1;e++){var d=a[e];d in b||(b[d]={});b=b[d]}a=a[a.length-1];e=b[a];c=c(e);c!=e&&null!=c&&$jscomp.defineProperty(b,a,{configurable:!0,writable:!0,value:c})};
$jscomp.polyfillIsolated=function(a,c,b,e){var d=a.split(".");a=1===d.length;e=d[0];e=!a&&e in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var g=0;g<d.length-1;g++){var p=d[g];p in e||(e[p]={});e=e[p]}d=d[d.length-1];b=$jscomp.IS_SYMBOL_NATIVE&&"es6"===b?e[d]:null;c=c(b);null!=c&&(a?$jscomp.defineProperty($jscomp.polyfills,d,{configurable:!0,writable:!0,value:c}):c!==b&&($jscomp.propertyToPolyfillSymbol[d]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(d):$jscomp.POLYFILL_PREFIX+d,d=$jscomp.propertyToPolyfillSymbol[d],
$jscomp.defineProperty(e,d,{configurable:!0,writable:!0,value:c})))};$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,b){return b})}},"es8","es3");
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/macd",["highcharts","highcharts/modules/stock"],function(c){a(c);a.Highcharts=c;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function c(a,c,d,g){a.hasOwnProperty(c)||(a[c]=g.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:a[c]}})))}
a=a?a._modules:{};c(a,"Stock/Indicators/MACD/MACDIndicator.js",[a["Core/Globals.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,c,d){const {noop:b}=a,{sma:e}=c.seriesTypes,{extend:t,correctFloat:q,defined:l,merge:r}=d;class n extends e{constructor(){super(...arguments);this.signalZones=this.points=this.options=this.macdZones=this.data=void 0}init(){c.seriesTypes.sma.prototype.init.apply(this,arguments);const a=this.color,b=this.userOptions._colorIndex;this.options&&(l(this.userOptions._colorIndex)&&
(this.options.signalLine&&this.options.signalLine.styles&&!this.options.signalLine.styles.lineColor&&(this.userOptions._colorIndex++,this.getCyclic("color",void 0,this.chart.options.colors),this.options.signalLine.styles.lineColor=this.color),this.options.macdLine&&this.options.macdLine.styles&&!this.options.macdLine.styles.lineColor&&(this.userOptions._colorIndex++,this.getCyclic("color",void 0,this.chart.options.colors),this.options.macdLine.styles.lineColor=this.color)),this.macdZones={zones:this.options.macdLine.zones,
startIndex:0},this.signalZones={zones:this.macdZones.zones.concat(this.options.signalLine.zones),startIndex:this.macdZones.zones.length},this.resetZones=!0);this.color=a;this.userOptions._colorIndex=b}toYData(a){return[a.y,a.signal,a.MACD]}translate(){const h=this,c=["plotSignal","plotMACD"];a.seriesTypes.column.prototype.translate.apply(h);h.points.forEach(function(a){[a.signal,a.MACD].forEach(function(b,e){null!==b&&(a[c[e]]=h.yAxis.toPixels(b,!0))})})}destroy(){this.graph=null;this.graphmacd=this.graphmacd&&
this.graphmacd.destroy();this.graphsignal=this.graphsignal&&this.graphsignal.destroy();c.seriesTypes.sma.prototype.destroy.apply(this,arguments)}drawGraph(){const a=this,b=a.points,e=a.options,d=a.zones,g={options:{gapSize:e.gapSize}},k=[[],[]];let f,m=b.length;for(;m--;)f=b[m],l(f.plotMACD)&&k[0].push({plotX:f.plotX,plotY:f.plotMACD,isNull:!l(f.plotMACD)}),l(f.plotSignal)&&k[1].push({plotX:f.plotX,plotY:f.plotSignal,isNull:!l(f.plotMACD)});["macd","signal"].forEach(function(b,h){a.points=k[h];a.options=
r(e[b+"Line"].styles,g);a.graph=a["graph"+b];a.currentLineZone=b+"Zones";a.zones=a[a.currentLineZone].zones;c.seriesTypes.sma.prototype.drawGraph.call(a);a["graph"+b]=a.graph});a.points=b;a.options=e;a.zones=d;a.currentLineZone=void 0}getZonesGraphs(a){const c=super.getZonesGraphs(a);let b=c;this.currentLineZone&&(b=c.splice(this[this.currentLineZone].startIndex+1),b.length?b.splice(0,0,a[0]):b=[a[0]]);return b}applyZones(){const a=this.zones;this.zones=this.signalZones.zones;c.seriesTypes.sma.prototype.applyZones.call(this);
this.graphmacd&&this.options.macdLine.zones.length&&this.graphmacd.hide();this.zones=a}getValues(a,b){const e=b.longPeriod-b.shortPeriod,d=[],g=[],k=[];let f,m,h=0;if(!(a.xData.length<b.longPeriod+b.signalPeriod)){f=c.seriesTypes.ema.prototype.getValues(a,{period:b.shortPeriod,index:b.index});m=c.seriesTypes.ema.prototype.getValues(a,{period:b.longPeriod,index:b.index});f=f.values;m=m.values;for(a=0;a<=f.length;a++)l(m[a])&&l(m[a][1])&&l(f[a+e])&&l(f[a+e][0])&&d.push([f[a+e][0],0,null,f[a+e][1]-m[a][1]]);
for(a=0;a<d.length;a++)g.push(d[a][0]),k.push([0,null,d[a][3]]);b=c.seriesTypes.ema.prototype.getValues({xData:g,yData:k},{period:b.signalPeriod,index:2});b=b.values;for(a=0;a<d.length;a++)d[a][0]>=b[0][0]&&(d[a][2]=b[h][1],k[a]=[0,b[h][1],d[a][3]],null===d[a][3]?(d[a][1]=0,k[a][0]=0):(d[a][1]=q(d[a][3]-b[h][1]),k[a][0]=q(d[a][3]-b[h][1])),h++);return{values:d,xData:g,yData:k}}}}n.defaultOptions=r(e.defaultOptions,{params:{shortPeriod:12,longPeriod:26,signalPeriod:9,period:26},signalLine:{zones:[],
styles:{lineWidth:1,lineColor:void 0}},macdLine:{zones:[],styles:{lineWidth:1,lineColor:void 0}},threshold:0,groupPadding:.1,pointPadding:.1,crisp:!1,states:{hover:{halo:{size:0}}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Value: {point.MACD}<br/>Signal: {point.signal}<br/>Histogram: {point.y}<br/>'},dataGrouping:{approximation:"averages"},minPointLength:0});t(n.prototype,{nameComponents:["longPeriod","shortPeriod","signalPeriod"],pointArrayMap:["y",
"signal","MACD"],parallelArrays:["x","y","signal","MACD"],pointValKey:"y",markerAttribs:b,getColumnMetrics:a.seriesTypes.column.prototype.getColumnMetrics,crispCol:a.seriesTypes.column.prototype.crispCol,drawPoints:a.seriesTypes.column.prototype.drawPoints});c.registerSeriesType("macd",n);"";return n});c(a,"masters/indicators/macd.src.js",[],function(){})});
//# sourceMappingURL=macd.js.map