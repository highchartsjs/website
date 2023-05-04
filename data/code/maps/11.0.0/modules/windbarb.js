/*
 Highcharts JS v11.0.0 (2023-04-27)

 Wind barb series module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/windbarb",["highcharts"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,h,q,f){a.hasOwnProperty(h)||(a[h]=f.apply(null,q),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,module:a[h]}})))}a=a?a._modules:
{};f(a,"Extensions/DataGrouping/ApproximationRegistry.js",[],function(){return{}});f(a,"Series/OnSeriesComposition.js",[a["Series/Column/ColumnSeries.js"],a["Core/Series/Series.js"],a["Core/Utilities.js"]],function(a,h,f){const {prototype:q}=a,{prototype:r}=h,{defined:w,stableSort:x}=f;var p;(function(a){function h(a){return r.getPlotBox.call(this.options.onSeries&&this.chart.get(this.options.onSeries)||this,a)}function p(){q.translate.apply(this);const a=this;var g=a.options,m=a.chart;const e=a.points;
var d=g.onSeries;const c=(d=d&&m.get(d))&&d.options.step,b=d&&d.points,h=m.inverted,f=a.xAxis,p=a.yAxis;m=e.length-1;let l;g=g.onKey||"y";let t=b&&b.length,r=0,n,u,v,y;if(d&&d.visible&&t){r=(d.pointXOffset||0)+(d.barW||0)/2;var k=d.currentDataGrouping;u=b[t-1].x+(k?k.totalRange:0);x(e,(a,b)=>a.x-b.x);for(g="plot"+g[0].toUpperCase()+g.substr(1);t--&&e[m]&&!(n=b[t],k=e[m],k.y=n.y,n.x<=k.x&&"undefined"!==typeof n[g]&&(k.x<=u&&(k.plotY=n[g],n.x<k.x&&!c&&(v=b[t+1])&&"undefined"!==typeof v[g]&&(y=(k.x-
n.x)/(v.x-n.x),k.plotY+=y*(v[g]-n[g]),k.y+=y*(v.y-n.y))),m--,t++,0>m)););}e.forEach((b,c)=>{let m;b.plotX+=r;if("undefined"===typeof b.plotY||h)0<=b.plotX&&b.plotX<=f.len?h?(b.plotY=f.translate(b.x,0,1,0,1),b.plotX=w(b.y)?p.translate(b.y,0,0,0,1):0):b.plotY=(f.opposite?0:a.yAxis.len)+f.offset:b.shapeArgs={};(l=e[c-1])&&l.plotX===b.plotX&&("undefined"===typeof l.stackIndex&&(l.stackIndex=0),m=l.stackIndex+1);b.stackIndex=m});this.onSeries=d}const l=[];a.compose=function(a){if(f.pushUnique(l,a)){const g=
a.prototype;g.getPlotBox=h;g.translate=p}return a};a.getPlotBox=h;a.translate=p})(p||(p={}));return p});f(a,"Series/Windbarb/WindbarbPoint.js",[a["Core/Utilities.js"],a["Series/Column/ColumnSeries.js"]],function(a,f){const {isNumber:h}=a;class l extends f.prototype.pointClass{constructor(){super(...arguments);this.series=this.options=this.direction=this.beaufortLevel=this.beaufort=void 0}isValid(){return h(this.value)&&0<=this.value}}return l});f(a,"Series/Windbarb/WindbarbSeries.js",[a["Core/Animation/AnimationUtilities.js"],
a["Extensions/DataGrouping/ApproximationRegistry.js"],a["Core/Globals.js"],a["Series/OnSeriesComposition.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Series/Windbarb/WindbarbPoint.js"]],function(a,f,q,l,r,z,x){const {animObject:h}=a,{series:w,seriesTypes:{column:u}}=r,{extend:B,merge:C,pick:A}=z;class g extends u{constructor(){super(...arguments);this.points=this.options=this.data=void 0}static registerApproximation(){f.windbarb||(f.windbarb=function(a,e){let d=0,c=0,b,m=a.length;
for(b=0;b<m;b++)d+=a[b]*Math.cos(e[b]*q.deg2rad),c+=a[b]*Math.sin(e[b]*q.deg2rad);return[a.reduce(function(a,b){return a+b},0)/a.length,Math.atan2(c,d)/q.deg2rad]})}init(a,e){g.registerApproximation();w.prototype.init.call(this,a,e)}pointAttribs(a,e){let d=this.options;a=a.color||this.color;let c=this.options.lineWidth;e&&(a=d.states[e].color||a,c=(d.states[e].lineWidth||c)+(d.states[e].lineWidthPlus||0));return{stroke:a,"stroke-width":c}}windArrow(a){let e=1.943844*a.value,d,c=this.options.vectorLength/
20,b=-10;if(a.isNull)return[];if(0===a.beaufortLevel)return this.chart.renderer.symbols.circle(-10*c,-10*c,20*c,20*c);a=[["M",0,7*c],["L",-1.5*c,7*c],["L",0,10*c],["L",1.5*c,7*c],["L",0,7*c],["L",0,-10*c]];d=(e-e%50)/50;if(0<d)for(;d--;)a.push(-10===b?["L",0,b*c]:["M",0,b*c],["L",5*c,b*c+2],["L",0,b*c+4]),e-=50,b+=7;d=(e-e%10)/10;if(0<d)for(;d--;)a.push(-10===b?["L",0,b*c]:["M",0,b*c],["L",7*c,b*c]),e-=10,b+=3;d=(e-e%5)/5;if(0<d)for(;d--;)a.push(-10===b?["L",0,b*c]:["M",0,b*c],["L",4*c,b*c]),e-=5,
b+=3;return a}drawPoints(){const a=this.chart,e=this.yAxis,d=a.inverted,c=this.options.vectorLength/2;this.points.forEach(function(b){const f=b.plotX,g=b.plotY;!1===this.options.clip||a.isInsidePlot(f,0)?(b.graphic||(b.graphic=this.chart.renderer.path().add(this.markerGroup).addClass("highcharts-point highcharts-color-"+A(b.colorIndex,b.series.colorIndex))),b.graphic.attr({d:this.windArrow(b),translateX:f+this.options.xOffset,translateY:g+this.options.yOffset,rotation:b.direction}),this.chart.styledMode||
b.graphic.attr(this.pointAttribs(b))):b.graphic&&(b.graphic=b.graphic.destroy());b.tooltipPos=[f+this.options.xOffset+(d&&!this.onSeries?c:0),g+this.options.yOffset-(d?0:c+e.pos-a.plotTop)]},this)}animate(a){a?this.markerGroup.attr({opacity:.01}):this.markerGroup.animate({opacity:1},h(this.options.animation))}markerAttribs(a,e){return{}}getExtremes(){return{}}shouldShowTooltip(a,e,d={}){d.ignoreX=this.chart.inverted;d.ignoreY=!d.ignoreX;return super.shouldShowTooltip(a,e,d)}}g.defaultOptions=C(u.defaultOptions,
{dataGrouping:{enabled:!0,approximation:"windbarb",groupPixelWidth:30},lineWidth:2,onSeries:null,states:{hover:{lineWidthPlus:0}},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.value}</b> ({point.beaufort})<br/>'},vectorLength:20,colorKey:"value",yOffset:-20,xOffset:0});l.compose(g);B(g.prototype,{beaufortFloor:[0,.3,1.6,3.4,5.5,8,10.8,13.9,17.2,20.8,24.5,28.5,32.7],beaufortName:"Calm;Light air;Light breeze;Gentle breeze;Moderate breeze;Fresh breeze;Strong breeze;Near gale;Gale;Strong gale;Storm;Violent storm;Hurricane".split(";"),
invertible:!1,parallelArrays:["x","value","direction"],pointArrayMap:["value","direction"],pointClass:x,trackerGroups:["markerGroup"],translate:function(){const a=this.beaufortFloor,e=this.beaufortName;l.translate.call(this);this.points.forEach(function(d){let c=0;for(;c<a.length&&!(a[c]>d.value);c++);d.beaufortLevel=c-1;d.beaufort=e[c-1]})}});g.registerApproximation();r.registerSeriesType("windbarb",g);"";return g});f(a,"masters/modules/windbarb.src.js",[],function(){})});
//# sourceMappingURL=windbarb.js.map