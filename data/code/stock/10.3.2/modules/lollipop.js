/*
 Highcharts JS v10.3.2 (2022-11-29)

 (c) 2009-2021 Sebastian Bochan, Rafal Sebestjanski

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/lollipop",["highcharts"],function(c){b(c);b.Highcharts=c;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function c(b,d,f,c){b.hasOwnProperty(d)||(b[d]=c.apply(null,f),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:b[d]}})))}b=b?b._modules:{};c(b,
"Series/Lollipop/LollipopPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,d){var f=this&&this.__extends||function(){var b=function(a,e){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var h in a)a.hasOwnProperty(h)&&(b[h]=a[h])};return b(a,e)};return function(a,e){function d(){this.constructor=a}b(a,e);a.prototype=null===e?Object.create(e):(d.prototype=e.prototype,new d)}}(),c=b.series.prototype.pointClass.prototype,
a=b.seriesTypes;b=a.area.prototype;var g=d.isObject;d=d.extend;a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.options=void 0;a.series=void 0;return a}f(a,b);a.prototype.init=function(b,a,d){g(a)&&"low"in a&&(a.y=a.low,delete a.low);return c.init.apply(this,arguments)};return a}(a.dumbbell.prototype.pointClass);d(a.prototype,{pointSetState:b.pointClass.prototype.setState,isValid:c.isValid});return a});c(b,"Series/Lollipop/LollipopSeries.js",[b["Series/Lollipop/LollipopPoint.js"],
b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,d,c){var f=this&&this.__extends||function(){var b=function(a,c){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])};return b(a,c)};return function(a,c){function d(){this.constructor=a}b(a,c);a.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),a=d.seriesTypes,g=a.area.prototype,l=a.column.prototype,k=a.dumbbell,
e=c.pick,m=c.merge;c=c.extend;a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}f(a,b);a.prototype.toYData=function(a){return[e(a.y,a.low)]};a.defaultOptions=m(k.defaultOptions,{lowColor:void 0,threshold:0,connectorWidth:1,groupPadding:.2,pointPadding:.1,states:{hover:{lineWidthPlus:0,connectorWidthPlus:1,halo:!1}},tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>'}});
return a}(k);c(a.prototype,{pointArrayMap:["y"],pointValKey:"y",translatePoint:g.translate,drawPoint:g.drawPoints,drawDataLabels:l.drawDataLabels,setShapeArgs:l.translate,pointClass:b});d.registerSeriesType("lollipop",a);"";return a});c(b,"masters/modules/lollipop.src.js",[],function(){})});
//# sourceMappingURL=lollipop.js.map