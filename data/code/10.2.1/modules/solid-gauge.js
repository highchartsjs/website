/*
 Highcharts JS v10.2.1 (2022-10-13)

 Solid angular gauge module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/solid-gauge",["highcharts","highcharts/highcharts-more"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,h,g,f){a.hasOwnProperty(h)||(a[h]=f.apply(null,g),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,module:a[h]}})))}
a=a?a._modules:{};b(a,"Core/Axis/SolidGaugeAxis.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,h){var g=a.parse,f=h.extend,c=h.merge,b;(function(a){var b={initDataClasses:function(a){var r=this.chart,w,b=0,d=this.options;this.dataClasses=w=[];a.dataClasses.forEach(function(k,l){k=c(k);w.push(k);k.color||("category"===d.dataClassColor?(l=r.options.colors,k.color=l[b++],b===l.length&&(b=0)):k.color=g(d.minColor).tweenTo(g(d.maxColor),l/(a.dataClasses.length-1)))})},initStops:function(a){this.stops=
a.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(a){a.color=g(a[1])})},toColor:function(a,c){var b=this.stops,g=this.dataClasses,d;if(g)for(d=g.length;d--;){var k=g[d];var l=k.from;b=k.to;if(("undefined"===typeof l||a>=l)&&("undefined"===typeof b||a<=b)){var f=k.color;c&&(c.dataClass=d);break}}else{this.logarithmic&&(a=this.val2lin(a));a=1-(this.max-a)/(this.max-this.min);for(d=b.length;d--&&!(a>b[d][0]););l=b[d]||b[d+1];b=b[d+1]||l;a=1-(b[0]-a)/(b[0]-l[0]||
1);f=l.color.tweenTo(b.color,a)}return f}};a.init=function(a){f(a,b)}})(b||(b={}));return b});b(a,"Series/SolidGauge/SolidGaugeSeriesDefaults.js",[],function(){"";return{colorByPoint:!0,dataLabels:{y:0}}});b(a,"Series/SolidGauge/SolidGaugeComposition.js",[a["Core/Renderer/SVG/SVGRenderer.js"]],function(a){a=a.prototype;var b=a.symbols.arc;a.symbols.arc=function(a,f,c,h,e){a=b(a,f,c,h,e);e&&e.rounded&&(c=((e.r||c)-(e.innerR||0))/2,f=a[0],e=a[2],"M"===f[0]&&"L"===e[0]&&(f=["A",c,c,0,1,1,f[1],f[2]],
a[2]=["A",c,c,0,1,1,e[1],e[2]],a[4]=f));return a}});b(a,"Series/SolidGauge/SolidGaugeSeries.js",[a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Axis/SolidGaugeAxis.js"],a["Series/SolidGauge/SolidGaugeSeriesDefaults.js"],a["Core/Utilities.js"]],function(a,b,g,f,c){var h=this&&this.__extends||function(){var a=function(b,n){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var n in b)b.hasOwnProperty(n)&&(a[n]=b[n])};
return a(b,n)};return function(b,n){function c(){this.constructor=b}a(b,n);b.prototype=null===n?Object.create(n):(c.prototype=n.prototype,new c)}}(),e=b.seriesTypes,x=e.gauge,r=e.pie.prototype,y=c.clamp,w=c.extend,z=c.isNumber,d=c.merge,k=c.pick,l=c.pInt;c=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.data=void 0;b.points=void 0;b.options=void 0;b.axis=void 0;b.yAxis=void 0;b.startAngleRad=void 0;b.thresholdAngleRad=void 0;return b}h(b,a);b.prototype.translate=function(){var a=
this.yAxis;g.init(a);!a.dataClasses&&a.options.dataClasses&&a.initDataClasses(a.options);a.initStops(a.options);x.prototype.translate.call(this)};b.prototype.drawPoints=function(){var a=this.yAxis,b=a.center,c=this.options,f=this.chart.renderer,d=c.overshoot;d=z(d)?d/180*Math.PI:0;var e;z(c.threshold)&&(e=a.startAngleRad+a.translate(c.threshold,void 0,void 0,void 0,!0));this.thresholdAngleRad=k(e,a.startAngleRad);e=0;for(var h=this.points;e<h.length;e++){var m=h[e];if(!m.isNull){var g=l(k(m.options.radius,
c.radius,100))*b[2]/200,t=l(k(m.options.innerRadius,c.innerRadius,60))*b[2]/200,u=Math.min(a.startAngleRad,a.endAngleRad),r=Math.max(a.startAngleRad,a.endAngleRad),q=m.graphic,p=a.startAngleRad+a.translate(m.y,void 0,void 0,void 0,!0),v=a.toColor(m.y,m);"none"===v&&(v=m.color||this.color||"none");"none"!==v&&(m.color=v);p=y(p,u-d,r+d);!1===c.wrap&&(p=y(p,u,r));u=Math.min(p,this.thresholdAngleRad);p=Math.max(p,this.thresholdAngleRad);p-u>2*Math.PI&&(p=u+2*Math.PI);m.shapeArgs=t={x:b[0],y:b[1],r:g,
innerR:t,start:u,end:p,rounded:c.rounded};m.startR=g;q?(g=t.d,q.animate(w({fill:v},t)),g&&(t.d=g)):m.graphic=q=f.arc(t).attr({fill:v,"sweep-flag":0}).add(this.group);this.chart.styledMode||("square"!==c.linecap&&q.attr({"stroke-linecap":"round","stroke-linejoin":"round"}),q.attr({stroke:c.borderColor||"none","stroke-width":c.borderWidth||0}));q&&q.addClass(m.getClassName(),!0)}}};b.prototype.animate=function(a){a||(this.startAngleRad=this.thresholdAngleRad,r.animate.call(this,a))};b.defaultOptions=
d(x.defaultOptions,f);return b}(x);w(c.prototype,{drawLegendSymbol:a.drawRectangle});b.registerSeriesType("solidgauge",c);return c});b(a,"masters/modules/solid-gauge.src.js",[],function(){})});
//# sourceMappingURL=solid-gauge.js.map