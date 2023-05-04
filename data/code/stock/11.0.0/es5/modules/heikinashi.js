/*
 Highstock JS v11.0.0 (2023-04-27)

 HeikinAshi series type for Highcharts Stock

 (c) 2010-2021 Karol Kolodziej

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/heikinashi",["highcharts","highcharts/modules/stock"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,e,b,g){a.hasOwnProperty(e)||(a[e]=g.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,
module:a[e]}})))}a=a?a._modules:{};b(a,"Series/HeikinAshi/HeikinAshiPoint.js",[a["Core/Series/SeriesRegistry.js"]],function(a){var e=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var b in c)Object.prototype.hasOwnProperty.call(c,b)&&(a[b]=c[b])};return a(b,c)};return function(b,c){function e(){this.constructor=b}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+
String(c)+" is not a constructor or null");a(b,c);b.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)}}();a=a.seriesTypes;var b=a.hlc.prototype.pointClass;return function(a){function g(){var c=null!==a&&a.apply(this,arguments)||this;c.resolveColor=b.prototype.resolveColor;return c}e(g,a);return g}(a.candlestick.prototype.pointClass)});b(a,"Series/HeikinAshi/HeikinAshiSeriesDefaults.js",[],function(){"";return{dataGrouping:{groupAll:!0}}});b(a,"Series/HeikinAshi/HeikinAshiSeries.js",
[a["Series/HeikinAshi/HeikinAshiPoint.js"],a["Series/HeikinAshi/HeikinAshiSeriesDefaults.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,b,p,g){function e(){this.series.forEach(function(a){a.is("heikinashi")&&(a.heikiashiData.length=0,a.getHeikinashiData())})}function c(){for(var a=this.points,b=this.heikiashiData,d=this.cropStart||0,k=this.processedYData.length=0;k<a.length;k++){var h=a[k],c=b[k+d];h.open=c[0];h.high=c[1];h.low=c[2];h.close=c[3];this.processedYData.push([h.open,
h.high,h.low,h.close])}}function r(){this.heikiashiData.length&&(this.heikiashiData.length=0)}var t=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var b in d)Object.prototype.hasOwnProperty.call(d,b)&&(a[b]=d[b])};return a(b,d)};return function(b,d){function c(){this.constructor=b}if("function"!==typeof d&&null!==d)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");
a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),l=p.seriesTypes.candlestick,m=g.addEvent,u=g.merge,q=[],n=function(a){function f(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.heikiashiData=[];d.options=void 0;d.points=void 0;d.yData=void 0;d.processedYData=void 0;return d}t(f,a);f.compose=function(a,b){for(var d=2;d<arguments.length;d++);l.compose(a);g.pushUnique(q,b)&&m(b,"postProcessData",e);g.pushUnique(q,f)&&(m(f,"afterTranslate",c),m(f,"updatedData",
r))};f.prototype.getHeikinashiData=function(){var a=this.allGroupedData||this.yData,b=this.heikiashiData;if(!b.length&&a&&a.length){this.modifyFirstPointValue(a[0]);for(var c=1;c<a.length;c++)this.modifyDataPoint(a[c],b[c-1])}this.heikiashiData=b};f.prototype.init=function(){a.prototype.init.apply(this,arguments);this.heikiashiData=[]};f.prototype.modifyFirstPointValue=function(a){this.heikiashiData.push([(a[0]+a[1]+a[2]+a[3])/4,a[1],a[2],(a[0]+a[3])/2])};f.prototype.modifyDataPoint=function(a,b){b=
(b[0]+b[3])/2;var c=(a[0]+a[1]+a[2]+a[3])/4;this.heikiashiData.push([b,Math.max(a[1],c,b),Math.min(a[2],c,b),c])};f.defaultOptions=u(l.defaultOptions,b);return f}(l);n.prototype.pointClass=a;p.registerSeriesType("heikinashi",n);return n});b(a,"masters/modules/heikinashi.src.js",[a["Core/Globals.js"],a["Series/HeikinAshi/HeikinAshiSeries.js"]],function(a,b){b.compose(a.Series,a.Axis)})});
//# sourceMappingURL=heikinashi.js.map