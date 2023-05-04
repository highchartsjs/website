/*
 Highcharts JS v11.0.0 (2023-04-27)

 Bullet graph series type for Highcharts

 (c) 2010-2021 Kacper Madej

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/bullet",["highcharts"],function(f){b(f);b.Highcharts=f;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function f(b,e,a,r){b.hasOwnProperty(e)||(b[e]=r.apply(null,a),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:b[e]}})))}b=b?b._modules:
{};f(b,"Series/Bullet/BulletPoint.js",[b["Series/Column/ColumnSeries.js"]],function(b){var e=this&&this.__extends||function(){var b=function(a,c){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c])};return b(a,c)};return function(a,c){function e(){this.constructor=a}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");
b(a,c);a.prototype=null===c?Object.create(c):(e.prototype=c.prototype,new e)}}();return function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.options=void 0;a.series=void 0;return a}e(a,b);a.prototype.destroy=function(){this.targetGraphic&&(this.targetGraphic=this.targetGraphic.destroy());b.prototype.destroy.apply(this,arguments)};return a}(b.prototype.pointClass)});f(b,"Series/Bullet/BulletSeries.js",[b["Series/Bullet/BulletPoint.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],
function(b,e,a){var f=this&&this.__extends||function(){var b=function(a,d){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,d){b.__proto__=d}||function(b,d){for(var a in d)Object.prototype.hasOwnProperty.call(d,a)&&(b[a]=d[a])};return b(a,d)};return function(a,d){function c(){this.constructor=a}if("function"!==typeof d&&null!==d)throw new TypeError("Class extends value "+String(d)+" is not a constructor or null");b(a,d);a.prototype=null===d?Object.create(d):(c.prototype=d.prototype,
new c)}}(),c=e.seriesTypes.column,t=a.extend,k=a.isNumber,u=a.merge,p=a.pick,v=a.relativeLength;a=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;a.targetData=void 0;return a}f(a,b);a.prototype.drawPoints=function(){var a=this,c=a.chart,e=a.options,f=e.animationLimit||250;b.prototype.drawPoints.apply(this,arguments);a.points.forEach(function(b){var d=b.options,n=b.target,q=b.y,g=b.targetGraphic;if(k(n)&&null!==n){var h=u(e.targetOptions,
d.targetOptions);var r=h.height;var l=b.shapeArgs;b.dlBox&&l&&!k(l.width)&&(l=b.dlBox);var m=v(h.width,l.width);var t=a.yAxis.translate(n,!1,!0,!1,!0)-h.height/2-.5;m=a.crispCol.apply({chart:c,borderWidth:h.borderWidth,options:{crisp:e.crisp}},[l.x+l.width/2-m/2,t,m,r]);g?(g[c.pointCount<f?"animate":"attr"](m),k(q)&&null!==q?g.element.point=b:g.element.point=void 0):b.targetGraphic=g=c.renderer.rect().attr(m).add(a.group);c.styledMode||g.attr({fill:p(h.color,d.color,a.zones.length&&(b.getZone.call({series:a,
x:b.x,y:n,options:{}}).color||a.color)||void 0,b.color,a.color),stroke:p(h.borderColor,b.borderColor,a.options.borderColor),"stroke-width":h.borderWidth,r:h.borderRadius});k(q)&&null!==q&&(g.element.point=b);g.addClass(b.getClassName()+" highcharts-bullet-target",!0)}else g&&(b.targetGraphic=g.destroy())})};a.prototype.getExtremes=function(a){a=b.prototype.getExtremes.call(this,a);var c=this.targetData;c&&c.length&&(c=b.prototype.getExtremes.call(this,c),k(c.dataMin)&&(a.dataMin=Math.min(p(a.dataMin,
Infinity),c.dataMin)),k(c.dataMax)&&(a.dataMax=Math.max(p(a.dataMax,-Infinity),c.dataMax)));return a};a.defaultOptions=u(c.defaultOptions,{targetOptions:{width:"140%",height:3,borderWidth:0,borderRadius:0},tooltip:{pointFormat:'<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.y}</b>. Target: <b>{point.target}</b><br/>'}});return a}(c);t(a.prototype,{parallelArrays:["x","y","target"],pointArrayMap:["y","target"]});a.prototype.pointClass=b;e.registerSeriesType("bullet",a);"";
return a});f(b,"masters/modules/bullet.src.js",[],function(){})});
//# sourceMappingURL=bullet.js.map