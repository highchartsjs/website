/*
 Highcharts JS v11.0.0 (2023-04-27)

 Highcharts variwide module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/variwide",["highcharts"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,h,g,c){a.hasOwnProperty(h)||(a[h]=c.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,module:a[h]}})))}a=a?a._modules:
{};g(a,"Series/Variwide/VariwideComposition.js",[a["Core/Utilities.js"]],function(a){function h(a){this.variwide&&this.cross&&this.cross.attr("stroke-width",a.point&&a.point.crosshairWidth)}function g(){var a=this;!this.horiz&&this.variwide&&this.chart.labelCollectors.push(function(){return a.tickPositions.filter(function(f){return a.ticks[f].label}).map(function(f,n){f=a.ticks[f].label;f.labelrank=a.zData[n];return f})})}function c(a){var f=this.axis,n=f.horiz?"x":"y";f.variwide&&(this[n+"Orig"]=
a.pos[n],this.postTranslate(a.pos,n,this.pos))}function w(a,f,n){var d=this.axis,k=a[f]-d.pos;d.horiz||(k=d.len-k);k=d.series[0].postTranslate(n,k);d.horiz||(k=d.len-k);a[f]=d.pos+k}function p(a,f,n,d,k,q,e,x){var b=Array.prototype.slice.call(arguments,1),t=k?"x":"y";this.axis.variwide&&"number"===typeof this[t+"Orig"]&&(b[k?0:1]=this[t+"Orig"]);b=a.apply(this,b);this.axis.variwide&&this.axis.categories&&this.postTranslate(b,t,this.pos);return b}var b=a.addEvent,u=a.wrap,r=[];return{compose:function(m,
f){a.pushUnique(r,m)&&(b(m,"afterDrawCrosshair",h),b(m,"afterRender",g));a.pushUnique(r,f)&&(b(f,"afterGetPosition",c),m=f.prototype,m.postTranslate=w,u(m,"getLabelPosition",p))}}});g(a,"Series/Variwide/VariwidePoint.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,h){var g=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,
c)&&(a[c]=b[c])};return a(c,b)};return function(c,b){function g(){this.constructor=c}if("function"!==typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");a(c,b);c.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}(),c=h.isNumber;return function(a){function h(){var b=null!==a&&a.apply(this,arguments)||this;b.crosshairWidth=void 0;b.options=void 0;b.series=void 0;return b}g(h,a);h.prototype.isValid=function(){return c(this.y)&&c(this.z)};
return h}(a.seriesTypes.column.prototype.pointClass)});g(a,"Series/Variwide/VariwideSeries.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Variwide/VariwideComposition.js"],a["Series/Variwide/VariwidePoint.js"],a["Core/Utilities.js"]],function(a,g,v,c){var h=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])};return a(b,d)};
return function(b,d){function c(){this.constructor=b}if("function"!==typeof d&&null!==d)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");a(b,d);b.prototype=null===d?Object.create(d):(c.prototype=d.prototype,new c)}}(),p=a.seriesTypes.column,b=c.addEvent,u=c.extend,r=c.merge,m=c.pick;c=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;a.relZ=void 0;a.totalZ=void 0;a.zData=void 0;return a}h(c,b);
c.prototype.processData=function(b){this.totalZ=0;this.relZ=[];a.seriesTypes.column.prototype.processData.call(this,b);(this.xAxis.reversed?this.zData.slice().reverse():this.zData).forEach(function(a,b){this.relZ[b]=this.totalZ;this.totalZ+=a},this);this.xAxis.categories&&(this.xAxis.variwide=!0,this.xAxis.zData=this.zData)};c.prototype.postTranslate=function(a,b,c){var e=this.xAxis,d=this.relZ;a=e.reversed?d.length-a:a;var f=e.reversed?-1:1,g=e.toPixels(e.reversed?(e.dataMax||0)+e.pointRange:e.dataMin||
0),l=e.toPixels(e.reversed?e.dataMin||0:(e.dataMax||0)+e.pointRange),h=Math.abs(l-g),k=this.totalZ;e=this.chart.inverted?l-(this.chart.plotTop-f*e.minPixelPadding):g-this.chart.plotLeft-f*e.minPixelPadding;g=a/d.length*h;l=(a+f)/d.length*h;var q=m(d[a],k)/k*h;d=m(d[a+f],k)/k*h;c&&(c.crosshairWidth=d-q);return e+q+(b-(e+g))*(d-q)/(l-g)};c.prototype.translate=function(){this.crispOption=this.options.crisp;this.options.crisp=!1;b.prototype.translate.call(this);this.options.crisp=this.crispOption};c.prototype.correctStackLabels=
function(){for(var a=this.options,b=this.yAxis,c,e,f,g=0,h=this.points;g<h.length;g++){var l=h[g];f=l.x;e=l.shapeArgs.width;(c=b.stacking.stacks[(this.negStacks&&l.y<(a.startFromThreshold?0:a.threshold)?"-":"")+this.stackKey])&&(c=c[f])&&!l.isNull&&c.setOffset(-(e/2)||0,e||0,void 0,void 0,l.plotX,this.xAxis)}};c.compose=g.compose;c.defaultOptions=r(p.defaultOptions,{pointPadding:0,groupPadding:0});return c}(p);b(c,"afterColumnTranslate",function(){var a=this,b=this.xAxis,c=this.chart.inverted,g=this.borderWidth%
2/2;this.points.forEach(function(d,e){var f=d.shapeArgs||{},h=f.x;h=void 0===h?0:h;var k=f.width;k=void 0===k?0:k;var l=d.plotX,m=void 0===l?0:l;l=d.tooltipPos;var n=d.z;n=void 0===n?0:n;b.variwide?(m=a.postTranslate(e,h,d),e=a.postTranslate(e,h+k)):e=b.translate(d.x+n,!1,!1,!1,!0);a.crispOption&&(m=Math.round(m)-g,e=Math.round(e)-g);f.x=m;f.width=Math.max(e-m,1);d.plotX=(m+e)/2;l&&(c?l[1]=b.len-f.x-f.width/2:l[0]=f.x+f.width/2)});this.options.stacking&&this.correctStackLabels()},{order:2});u(c.prototype,
{irregularWidths:!0,pointArrayMap:["y","z"],parallelArrays:["x","y","z"],pointClass:v});a.registerSeriesType("variwide",c);"";return c});g(a,"masters/modules/variwide.src.js",[a["Core/Globals.js"],a["Series/Variwide/VariwideSeries.js"]],function(a,g){g.compose(a.Axis,a.Tick)})});
//# sourceMappingURL=variwide.js.map