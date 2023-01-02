/*
 Highstock JS v10.1.0 (2022-05-20)

 HeikinAshi series type for Highcharts Stock

 (c) 2010-2021 Karol Kolodziej

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/heikinashi",["highcharts","highcharts/modules/stock"],function(g){b(g);b.Highcharts=g;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function g(b,c,a,h){b.hasOwnProperty(c)||(b[c]=h.apply(null,a),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:c,module:b[c]}})))}
b=b?b._modules:{};g(b,"Series/HeikinAshi/HeikinAshiPoint.js",[b["Core/Series/SeriesRegistry.js"]],function(b){var c=this&&this.__extends||function(){var b=function(a,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var d in a)a.hasOwnProperty(d)&&(b[d]=a[d])};return b(a,d)};return function(a,d){function c(){this.constructor=a}b(a,d);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}();return function(b){function a(){var a=
null!==b&&b.apply(this,arguments)||this;a.series=void 0;return a}c(a,b);return a}(b.seriesTypes.candlestick.prototype.pointClass)});g(b,"Series/HeikinAshi/HeikinAshiSeries.js",[b["Series/HeikinAshi/HeikinAshiPoint.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"],b["Core/Axis/Axis.js"]],function(b,c,a,g){var d=this&&this.__extends||function(){var b=function(a,f){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,f){b.__proto__=f}||function(b,f){for(var a in f)f.hasOwnProperty(a)&&
(b[a]=f[a])};return b(a,f)};return function(a,f){function m(){this.constructor=a}b(a,f);a.prototype=null===f?Object.create(f):(m.prototype=f.prototype,new m)}}(),l=c.seriesTypes.candlestick,k=a.addEvent,h=a.merge;a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.heikiashiData=[];a.options=void 0;a.points=void 0;a.yData=void 0;a.processedYData=void 0;return a}d(a,b);a.prototype.getHeikinashiData=function(){var a=this.allGroupedData||this.yData,b=this.heikiashiData;
if(!b.length&&a&&a.length){this.modifyFirstPointValue(a[0]);for(var e=1;e<a.length;e++)this.modifyDataPoint(a[e],b[e-1])}this.heikiashiData=b};a.prototype.init=function(){b.prototype.init.apply(this,arguments);this.heikiashiData=[]};a.prototype.modifyFirstPointValue=function(a){this.heikiashiData.push([(a[0]+a[1]+a[2]+a[3])/4,a[1],a[2],(a[0]+a[3])/2])};a.prototype.modifyDataPoint=function(a,b){b=(b[0]+b[3])/2;var e=(a[0]+a[1]+a[2]+a[3])/4;this.heikiashiData.push([b,Math.max(a[1],e,b),Math.min(a[2],
e,b),e])};a.defaultOptions=h(l.defaultOptions,{dataGrouping:{groupAll:!0}});return a}(l);k(a,"afterTranslate",function(){for(var a=this.points,b=this.heikiashiData,f=this.cropStart||0,c=this.processedYData.length=0;c<a.length;c++){var e=a[c],d=b[c+f];e.open=d[0];e.high=d[1];e.low=d[2];e.close=d[3];this.processedYData.push([e.open,e.high,e.low,e.close])}});k(a,"updatedData",function(){this.heikiashiData.length&&(this.heikiashiData.length=0)});k(g,"postProcessData",function(){this.series.forEach(function(a){a.is("heikinashi")&&
(a.heikiashiData.length=0,a.getHeikinashiData())})});a.prototype.pointClass=b;c.registerSeriesType("heikinashi",a);"";return a});g(b,"masters/modules/heikinashi.src.js",[],function(){})});
//# sourceMappingURL=heikinashi.js.map