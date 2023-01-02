/*
 Highcharts JS v10.1.0 (2022-05-20)

 Wind barb series module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/windbarb",["highcharts"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,b,d,t){a.hasOwnProperty(b)||(a[b]=t.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:b,module:a[b]}})))}a=a?a._modules:{};f(a,
"Series/OnSeriesComposition.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,b,d){var t=a.prototype,h=b.prototype,w=d.defined,y=d.stableSort,k;(function(a){function b(){return h.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this)}function k(){t.translate.apply(this);var a=this,g=a.options,q=a.chart,e=a.points,c=g.onSeries,x=(c=c&&q.get(c))&&c.options.step,r=c&&c.points,m=q.inverted,b=a.xAxis,h=a.yAxis;q=e.length-
1;var k;g=g.onKey||"y";var d=r&&r.length,f=0,p;if(c&&c.visible&&d){f=(c.pointXOffset||0)+(c.barW||0)/2;var l=c.currentDataGrouping;var v=r[d-1].x+(l?l.totalRange:0);y(e,function(e,c){return e.x-c.x});for(g="plot"+g[0].toUpperCase()+g.substr(1);d--&&e[q];){var n=r[d];l=e[q];l.y=n.y;if(n.x<=l.x&&"undefined"!==typeof n[g]){if(l.x<=v&&(l.plotY=n[g],n.x<l.x&&!x&&(p=r[d+1])&&"undefined"!==typeof p[g])){var u=(l.x-n.x)/(p.x-n.x);l.plotY+=u*(p[g]-n[g]);l.y+=u*(p.y-n.y)}q--;d++;if(0>q)break}}}e.forEach(function(c,
x){c.plotX+=f;if("undefined"===typeof c.plotY||m)0<=c.plotX&&c.plotX<=b.len?m?(c.plotY=b.translate(c.x,0,1,0,1),c.plotX=w(c.y)?h.translate(c.y,0,0,0,1):0):c.plotY=(b.opposite?0:a.yAxis.len)+b.offset:c.shapeArgs={};if((k=e[x-1])&&k.plotX===c.plotX){"undefined"===typeof k.stackIndex&&(k.stackIndex=0);var r=k.stackIndex+1}c.stackIndex=r});this.onSeries=c}var d=[];a.compose=function(a){if(-1===d.indexOf(a)){d.push(a);var g=a.prototype;g.getPlotBox=b;g.translate=k}return a};a.getPlotBox=b;a.translate=
k})(k||(k={}));return k});f(a,"Series/Windbarb/WindbarbPoint.js",[a["Core/Utilities.js"],a["Series/Column/ColumnSeries.js"]],function(a,b){var d=this&&this.__extends||function(){var a=function(b,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};return a(b,d)};return function(b,d){function h(){this.constructor=b}a(b,d);b.prototype=null===d?Object.create(d):(h.prototype=d.prototype,new h)}}(),f=a.isNumber;
return function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.beaufort=void 0;b.beaufortLevel=void 0;b.direction=void 0;b.options=void 0;b.series=void 0;return b}d(b,a);b.prototype.isValid=function(){return f(this.value)&&0<=this.value};return b}(b.prototype.pointClass)});f(a,"Series/Windbarb/WindbarbSeries.js",[a["Core/Animation/AnimationUtilities.js"],a["Core/Globals.js"],a["Series/OnSeriesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Series/Windbarb/WindbarbPoint.js"]],
function(a,b,d,f,h,w){var t=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var c in e)e.hasOwnProperty(c)&&(a[c]=e[c])};return a(b,e)};return function(b,e){function c(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),k=a.animObject;a=b.noop;var p=f.series,v=f.seriesTypes.column,u=h.extend,A=h.merge,z=h.pick;h=function(a){function d(){var e=
null!==a&&a.apply(this,arguments)||this;e.data=void 0;e.options=void 0;e.points=void 0;return e}t(d,a);d.registerApproximation=function(){b.approximations&&!b.approximations.windbarb&&(b.approximations.windbarb=function(a,c){var e=0,d=0,m,g=a.length;for(m=0;m<g;m++)e+=a[m]*Math.cos(c[m]*b.deg2rad),d+=a[m]*Math.sin(c[m]*b.deg2rad);return[a.reduce(function(a,c){return a+c},0)/a.length,Math.atan2(d,e)/b.deg2rad]})};d.prototype.init=function(a,c){d.registerApproximation();p.prototype.init.call(this,a,
c)};d.prototype.pointAttribs=function(a,c){var b=this.options;a=a.color||this.color;var e=this.options.lineWidth;c&&(a=b.states[c].color||a,e=(b.states[c].lineWidth||e)+(b.states[c].lineWidthPlus||0));return{stroke:a,"stroke-width":e}};d.prototype.windArrow=function(a){var c=1.943844*a.value,b=this.options.vectorLength/20,d=-10;if(a.isNull)return[];if(0===a.beaufortLevel)return this.chart.renderer.symbols.circle(-10*b,-10*b,20*b,20*b);a=[["M",0,7*b],["L",-1.5*b,7*b],["L",0,10*b],["L",1.5*b,7*b],["L",
0,7*b],["L",0,-10*b]];var e=(c-c%50)/50;if(0<e)for(;e--;)a.push(-10===d?["L",0,d*b]:["M",0,d*b],["L",5*b,d*b+2],["L",0,d*b+4]),c-=50,d+=7;e=(c-c%10)/10;if(0<e)for(;e--;)a.push(-10===d?["L",0,d*b]:["M",0,d*b],["L",7*b,d*b]),c-=10,d+=3;e=(c-c%5)/5;if(0<e)for(;e--;)a.push(-10===d?["L",0,d*b]:["M",0,d*b],["L",4*b,d*b]),c-=5,d+=3;return a};d.prototype.drawPoints=function(){var a=this.chart,b=this.yAxis,d=a.inverted,g=this.options.vectorLength/2;this.points.forEach(function(c){var e=c.plotX,f=c.plotY;!1===
this.options.clip||a.isInsidePlot(e,0)?(c.graphic||(c.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+z(c.colorIndex,c.series.colorIndex))),c.graphic.attr({d:this.windArrow(c),translateX:e+this.options.xOffset,translateY:f+this.options.yOffset,rotation:c.direction}),this.chart.styledMode||c.graphic.attr(this.pointAttribs(c))):c.graphic&&(c.graphic=c.graphic.destroy());c.tooltipPos=[e+this.options.xOffset+(d&&!this.onSeries?g:0),f+this.options.yOffset-
(d?0:g+b.pos-a.plotTop)]},this)};d.prototype.animate=function(a){a?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},k(this.options.animation))};d.prototype.markerAttribs=function(a,b){return{}};d.prototype.getExtremes=function(){return{}};d.prototype.shouldShowTooltip=function(b,c,d){void 0===d&&(d={});d.ignoreX=this.chart.inverted;d.ignoreY=!d.ignoreX;return a.prototype.shouldShowTooltip.call(this,b,c,d)};d.defaultOptions=A(v.defaultOptions,{dataGrouping:{enabled:!0,approximation:"windbarb",
groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0});return d}(v);d.compose(h);u(h.prototype,{beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],beaufortName:"Calm;Light air;Light breeze;Gentle breeze;Moderate breeze;Fresh breeze;Strong breeze;Near gale;Gale;Strong gale;Storm;Violent storm;Hurricane".split(";"),
parallelArrays:["x","value","direction"],pointArrayMap:["value","direction"],pointClass:w,trackerGroups:["markerGroup"],invertGroups:a,translate:function(){var a=this.beaufortFloor,b=this.beaufortName;d.translate.call(this);this.points.forEach(function(d){for(var c=0;c<a.length&&!(a[c]>d.value);c++);d.beaufortLevel=c-1;d.beaufort=b[c-1]})}});h.registerApproximation();f.registerSeriesType("windbarb",h);"";return h});f(a,"masters/modules/windbarb.src.js",[],function(){})});
//# sourceMappingURL=windbarb.js.map