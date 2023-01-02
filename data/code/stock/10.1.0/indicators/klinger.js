/*
 Highcharts Stock JS v10.1.0 (2022-05-20)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Karol Kolodziej

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/indicators/klinger",["highcharts","highcharts/modules/stock"],function(l){b(l);b.Highcharts=l;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function l(b,f,g,l){b.hasOwnProperty(f)||(b[f]=l.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:f,module:b[f]}})))}
b=b?b._modules:{};l(b,"Stock/Indicators/MultipleLinesComposition.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,f){var g=b.seriesTypes.sma,l=f.defined,n=f.error,r=f.merge,k;(function(f){function k(c){var a,d=[];c=c||this.points;if(this.fillGraph&&this.nextPoints){if((a=g.prototype.getGraphPath.call(this,this.nextPoints))&&a.length){a[0][0]="L";d=g.prototype.getGraphPath.call(this,c);a=a.slice(0,d.length);for(var h=a.length-1;0<=h;h--)d.push(a[h])}}else d=g.prototype.getGraphPath.apply(this,
arguments);return d}function q(){var c=this,a=c.linesApiNames,d=c.areaLinesNames,h=c.points,m=c.options,e=c.graph,w={options:{gapSize:m.gapSize}},f=[],p=c.getTranslatedLinesNames(c.pointValKey),k=h.length,t;p.forEach(function(c,a){for(f[a]=[];k--;)t=h[k],f[a].push({x:t.x,plotX:t.plotX,plotY:t[c],isNull:!l(t[c])});k=h.length});if(this.userOptions.fillColor&&d.length){var q=p.indexOf(v(d[0]));q=f[q];d=1===d.length?h:f[p.indexOf(v(d[1]))];p=c.color;c.points=d;c.nextPoints=q;c.color=this.userOptions.fillColor;
c.options=r(h,w);c.graph=c.area;c.fillGraph=!0;b.seriesTypes.sma.prototype.drawGraph.call(c);c.area=c.graph;delete c.nextPoints;delete c.fillGraph;c.color=p}a.forEach(function(a,d){f[d]?(c.points=f[d],m[a]?c.options=r(m[a].styles,w):n('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names." at mixin/multiple-line.js:34'),c.graph=c["graph"+a],g.prototype.drawGraph.call(c),c["graph"+a]=c.graph):n('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});
c.points=h;c.options=m;c.graph=e;g.prototype.drawGraph.call(c)}function u(c){var a=[];(this.pointArrayMap||[]).forEach(function(d){d!==c&&a.push(v(d))});return a}function v(a){return"plot"+a.charAt(0).toUpperCase()+a.slice(1)}function e(a){var c=[];(this.pointArrayMap||[]).forEach(function(d){c.push(a[d])});return c}function a(){var a=this,d=a.pointArrayMap,h=[],b;h=a.getTranslatedLinesNames();g.prototype.translate.apply(a,arguments);a.points.forEach(function(c){d.forEach(function(d,m){b=c[d];a.dataModify&&
(b=a.dataModify.modifyValue(b));null!==b&&(c[h[m]]=a.yAxis.toPixels(b,!0))})})}var d=[],h=["bottomLine"],m=["top","bottom"],w=["top"];f.compose=function(c){if(-1===d.indexOf(c)){d.push(c);var b=c.prototype;b.linesApiNames=b.linesApiNames||h.slice();b.pointArrayMap=b.pointArrayMap||m.slice();b.pointValKey=b.pointValKey||"top";b.areaLinesNames=b.areaLinesNames||w.slice();b.drawGraph=q;b.getGraphPath=k;b.toYData=e;b.translate=a;b.getTranslatedLinesNames=u}return c}})(k||(k={}));return k});l(b,"Stock/Indicators/Klinger/KlingerIndicator.js",
[b["Stock/Indicators/MultipleLinesComposition.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,f,g){var l=this&&this.__extends||function(){var b=function(e,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return b(e,a)};return function(e,a){function d(){this.constructor=e}b(e,a);e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),n=f.seriesTypes,r=
n.sma,k=n.ema,q=g.correctFloat,x=g.error;n=g.extend;var y=g.isArray,u=g.merge;g=function(b){function e(){var a=null!==b&&b.apply(this,arguments)||this;a.data=void 0;a.points=void 0;a.options=void 0;a.volumeSeries=void 0;return a}l(e,b);e.prototype.calculateTrend=function(a,d){return a[d][1]+a[d][2]+a[d][3]>a[d-1][1]+a[d-1][2]+a[d-1][3]?1:-1};e.prototype.isValidData=function(a){var d=this.chart,b=this.options,m=this.linkedParent;a=y(a)&&4===a.length;(d=this.volumeSeries||(this.volumeSeries=d.get(b.params.volumeSeriesID)))||
x("Series "+b.params.volumeSeriesID+" not found! Check `volumeSeriesID`.",!0,m.chart);return!(![m,d].every(function(a){return a&&a.xData&&a.xData.length>=b.params.slowAvgPeriod})||!a)};e.prototype.getCM=function(a,b,h,m,e){return q(b+(h===m?a:e))};e.prototype.getDM=function(a,b){return q(a-b)};e.prototype.getVolumeForce=function(a){var b=[],h=1;var m=0;var e=a[0][1]-a[0][2];var c=0;for(h;h<a.length;h++){var f=this.calculateTrend(a,h);var g=this.getDM(a[h][1],a[h][2]);m=this.getCM(m,g,f,c,e);c=this.volumeSeries.yData[h]*
f*Math.abs(2*(g/m-1))*100;b.push([c]);c=f;e=g}return b};e.prototype.getEMA=function(a,b,h,e,f,c,g){return k.prototype.calculateEma(g||[],a,"undefined"===typeof c?1:c,e,b,"undefined"===typeof f?-1:f,h)};e.prototype.getSMA=function(a,b,h){return k.prototype.accumulatePeriodPoints(a,b,h)/a};e.prototype.getValues=function(a,b){var d=[],e=a.xData;a=a.yData;var f=[],c=[],g=[],l,k=0,n=0,r=void 0,v=void 0,u=null;if(this.isValidData(a[0])){var p=this.getVolumeForce(a),x=this.getSMA(b.fastAvgPeriod,0,p),t=
this.getSMA(b.slowAvgPeriod,0,p),y=2/(b.fastAvgPeriod+1),z=2/(b.slowAvgPeriod+1);for(k;k<a.length;k++)k>=b.fastAvgPeriod&&(r=n=this.getEMA(p,r,x,y,0,k,e)[1]),k>=b.slowAvgPeriod&&(v=l=this.getEMA(p,v,t,z,0,k,e)[1],l=q(n-l),g.push(l),g.length>=b.signalPeriod&&(u=g.slice(-b.signalPeriod).reduce(function(a,b){return a+b})/b.signalPeriod),d.push([e[k],l,u]),f.push(e[k]),c.push([l,u]));return{values:d,xData:f,yData:c}}};e.defaultOptions=u(r.defaultOptions,{params:{fastAvgPeriod:34,slowAvgPeriod:55,signalPeriod:13,
volumeSeriesID:"volume"},signalLine:{styles:{lineWidth:1,lineColor:"#ff0000"}},dataGrouping:{approximation:"averages"},tooltip:{pointFormat:'<span style="color: {point.color}">\u25cf</span><b> {series.name}</b><br/><span style="color: {point.color}">Klinger</span>: {point.y}<br/><span style="color: {point.series.options.signalLine.styles.lineColor}">Signal</span>: {point.signal}<br/>'}});return e}(r);n(g.prototype,{areaLinesNames:[],linesApiNames:["signalLine"],nameBase:"Klinger",nameComponents:["fastAvgPeriod",
"slowAvgPeriod"],pointArrayMap:["y","signal"],parallelArrays:["x","y","signal"],pointValKey:"y"});b.compose(g);f.registerSeriesType("klinger",g);"";return g});l(b,"masters/indicators/klinger.src.js",[],function(){})});
//# sourceMappingURL=klinger.js.map