/*
 Highstock JS v10.0.0 (2022-03-16)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon-oscillator",["highcharts","highcharts/modules/stock"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,d,e,g){a.hasOwnProperty(d)||(a[d]=g.apply(null,e))}a=a?a._modules:{};g(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],
function(a,d){var e=a.seriesTypes.sma,g=d.defined,n=d.error,v=d.merge,f;(function(d){function t(b){var h,a=[];b=b||this.points;if(this.fillGraph&&this.nextPoints){if((h=e.prototype.getGraphPath.call(this,this.nextPoints))&&h.length){h[0][0]="L";a=e.prototype.getGraphPath.call(this,b);h=h.slice(0,a.length);for(var c=h.length-1;0<=c;c--)a.push(h[c])}}else a=e.prototype.getGraphPath.apply(this,arguments);return a}function p(){var b=this,h=b.linesApiNames,c=b.areaLinesNames,d=b.points,p=b.options,u=b.graph,
t={options:{gapSize:p.gapSize}},f=[],m=b.getTranslatedLinesNames(b.pointValKey),r=d.length,q;m.forEach(function(b,c){for(f[c]=[];r--;)q=d[r],f[c].push({x:q.x,plotX:q.plotX,plotY:q[b],isNull:!g(q[b])});r=d.length});if(this.userOptions.fillColor&&c.length){var l=m.indexOf(k(c[0]));l=f[l];c=1===c.length?d:f[m.indexOf(k(c[1]))];m=b.color;b.points=c;b.nextPoints=l;b.color=this.userOptions.fillColor;b.options=v(d,t);b.graph=b.area;b.fillGraph=!0;a.seriesTypes.sma.prototype.drawGraph.call(b);b.area=b.graph;
delete b.nextPoints;delete b.fillGraph;b.color=m}h.forEach(function(c,a){f[a]?(b.points=f[a],p[c]?b.options=v(p[c].styles,t):n('Error: "There is no '+c+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),b.graph=b["graph"+c],e.prototype.drawGraph.call(b),b["graph"+c]=b.graph):n('Error: "'+c+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=d;b.options=p;b.graph=
u;e.prototype.drawGraph.call(b)}function c(b){var c=[];(this.pointArrayMap||[]).forEach(function(a){a!==b&&c.push(k(a))});return c}function k(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function u(b){var c=[];(this.pointArrayMap||[]).forEach(function(a){c.push(b[a])});return c}function m(){var b=this,c=b.pointArrayMap,a=[],d;a=b.getTranslatedLinesNames();e.prototype.translate.apply(b,arguments);b.points.forEach(function(h){c.forEach(function(c,k){d=h[c];b.dataModify&&(d=b.dataModify.modifyValue(d));
null!==d&&(h[a[k]]=b.yAxis.toPixels(d,!0))})})}var f=[],r=["bottomLine"],x=["top","bottom"],l=["top"];d.compose=function(b){if(-1===f.indexOf(b)){f.push(b);var a=b.prototype;a.linesApiNames=a.linesApiNames||r.slice();a.pointArrayMap=a.pointArrayMap||x.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||l.slice();a.drawGraph=p;a.getGraphPath=t;a.toYData=u;a.translate=m;a.getTranslatedLinesNames=c}return b}})(f||(f={}));return f});g(a,"Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js",
[a["Stock/Indicators/MultipleLinesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d,e){var g=this&&this.__extends||function(){var a=function(d,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return a(d,c)};return function(d,c){function k(){this.constructor=d}a(d,c);d.prototype=null===c?Object.create(c):(k.prototype=c.prototype,new k)}}(),n=d.seriesTypes.aroon,
l=e.extend,f=e.merge,w=d.seriesTypes.aroon;e=function(a){function d(){var c=null!==a&&a.apply(this,arguments)||this;c.data=void 0;c.options=void 0;c.points=void 0;return c}g(d,a);d.prototype.getValues=function(a,d){var c=[],e=[],f=[];a=w.prototype.getValues.call(this,a,d);for(d=0;d<a.yData.length;d++){var g=a.yData[d][0];var k=a.yData[d][1];g-=k;c.push([a.xData[d],g]);e.push(a.xData[d]);f.push(g)}return{values:c,xData:e,yData:f}};d.defaultOptions=f(n.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b>: {point.y}'}});
return d}(n);l(e.prototype,{nameBase:"Aroon Oscillator",linesApiNames:[],pointArrayMap:["y"],pointValKey:"y"});a.compose(n);d.registerSeriesType("aroonoscillator",e);"";return e});g(a,"masters/indicators/aroon-oscillator.src.js",[],function(){})});
//# sourceMappingURL=aroon-oscillator.js.map