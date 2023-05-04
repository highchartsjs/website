/*
 Highstock JS v11.0.0 (2023-04-27)

 (c) 2010-2021 Highsoft AS
 Author: Sebastian Domas

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/cmf",["highcharts","highcharts/modules/stock"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,e,g,k){a.hasOwnProperty(e)||(a[e]=k.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,
module:a[e]}})))}a=a?a._modules:{};g(a,"Stock/Indicators/CMF/CMFIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,e){var g=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var f in a)Object.prototype.hasOwnProperty.call(a,f)&&(b[f]=a[f])};return a(c,b)};return function(c,b){function t(){this.constructor=c}if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+
String(b)+" is not a constructor or null");a(c,b);c.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}}(),k=a.seriesTypes.sma,u=e.merge;e=function(a){function c(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.options=void 0;b.points=void 0;b.volumeSeries=void 0;b.linkedParent=void 0;b.yData=void 0;b.nameBase="Chaikin Money Flow";return b}g(c,a);c.prototype.isValid=function(){var a=this.chart,c=this.options,h=this.linkedParent;a=this.volumeSeries||(this.volumeSeries=
a.get(c.params.volumeSeriesID));var f=h&&h.yData&&4===h.yData[0].length;return!!(h&&a&&h.xData&&h.xData.length>=c.params.period&&a.xData&&a.xData.length>=c.params.period&&f)};c.prototype.getValues=function(a,c){if(this.isValid())return this.getMoneyFlow(a.xData,a.yData,this.volumeSeries.yData,c.period)};c.prototype.getMoneyFlow=function(a,c,h,f){function b(a,b){var c=a[1],e=a[2];a=a[3];return null!==b&&null!==c&&null!==e&&null!==a&&c!==e?(a-e-(c-a))/(c-e)*b:(q=d,null)}var g=c.length,e=[],k=[],n=[],
r=[],d,q=-1,l=0,m=0;if(0<f&&f<=g){for(d=0;d<f;d++)e[d]=b(c[d],h[d]),l+=h[d],m+=e[d];k.push(a[d-1]);n.push(d-q>=f&&0!==l?m/l:null);for(r.push([k[0],n[0]]);d<g;d++){e[d]=b(c[d],h[d]);l-=h[d-f];l+=h[d];m-=e[d-f];m+=e[d];var p=[a[d],d-q>=f?m/l:null];k.push(p[0]);n.push(p[1]);r.push([p[0],p[1]])}}return{values:r,xData:k,yData:n}};c.defaultOptions=u(k.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}});return c}(k);a.registerSeriesType("cmf",e);"";return e});g(a,"masters/indicators/cmf.src.js",
[],function(){})});
//# sourceMappingURL=cmf.js.map