/*
 Highmaps JS v10.0.0 (2022-03-16)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/heatmap",["highcharts"],function(x){b(x);b.Highcharts=x;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function x(b,h,z,n){b.hasOwnProperty(h)||(b[h]=n.apply(null,z))}b=b?b._modules:{};x(b,"Core/Axis/Color/ColorAxisComposition.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],function(b,h){var r=b.parse,n=h.addEvent,
y=h.extend,t=h.merge,A=h.pick,C=h.splat,m;(function(g){function b(){var a=this,d=this.options;this.colorAxis=[];d.colorAxis&&(d.colorAxis=C(d.colorAxis),d.colorAxis.forEach(function(d,c){d.index=c;new k(a,d)}))}function h(a){var d=this,c=function(c){c=a.allItems.indexOf(c);-1!==c&&(d.destroyItem(a.allItems[c]),a.allItems.splice(c,1))},e=[],p,k;(this.chart.colorAxis||[]).forEach(function(a){(p=a.options)&&p.showInLegend&&(p.dataClasses&&p.visible?e=e.concat(a.getDataClassLegendSymbols()):p.visible&&
e.push(a),a.series.forEach(function(a){if(!a.options.showInLegend||p.dataClasses)"point"===a.options.legendType?a.points.forEach(function(a){c(a)}):c(a)}))});for(k=e.length;k--;)a.allItems.unshift(e[k])}function m(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}function u(){var a=this.chart.colorAxis;a&&a.forEach(function(a,d,c){a.update({},c)})}function w(){(this.chart.colorAxis&&this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function q(){var a=
this.axisTypes;a?-1===a.indexOf("colorAxis")&&a.push("colorAxis"):this.axisTypes=["colorAxis"]}function E(a){var d=this,c=a?"show":"hide";d.visible=d.options.visible=!!a;["graphic","dataLabel"].forEach(function(a){if(d[a])d[a][c]()});this.series.buildKDTree()}function f(){var a=this,d=this.options.nullColor,c=this.colorAxis,e=this.colorKey;(this.data.length?this.data:this.points).forEach(function(k){var l=k.getNestedProperty(e);(l=k.options.color||(k.isNull||null===k.value?d:c&&"undefined"!==typeof l?
c.toColor(l,k):k.color||a.color))&&k.color!==l&&(k.color=l,"point"===a.options.legendType&&k.legendItem&&a.chart.legend.colorizeItem(k,k.visible))})}function e(a){var d=a.prototype.createAxis;a.prototype.createAxis=function(a,c){if("colorAxis"!==a)return d.apply(this,arguments);var e=new k(this,t(c.axis,{index:this[a].length,isX:!1}));this.isDirtyLegend=!0;this.axes.forEach(function(a){a.series=[]});this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0});A(c.redraw,!0)&&this.redraw(c.animation);
return e}}function c(){this.elem.attr("fill",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}function a(){this.elem.attr("stroke",r(this.start).tweenTo(r(this.end),this.pos),void 0,!0)}var d=[],k;g.compose=function(p,l,B,g,v){k||(k=p);-1===d.indexOf(l)&&(d.push(l),p=l.prototype,p.collectionsWithUpdate.push("colorAxis"),p.collectionsWithInit.colorAxis=[p.addColorAxis],n(l,"afterGetAxes",b),e(l));-1===d.indexOf(B)&&(d.push(B),l=B.prototype,l.fillSetter=c,l.strokeSetter=a);-1===d.indexOf(g)&&
(d.push(g),n(g,"afterGetAllItems",h),n(g,"afterColorizeItem",m),n(g,"afterUpdate",u));-1===d.indexOf(v)&&(d.push(v),y(v.prototype,{optionalAxis:"colorAxis",translateColors:f}),y(v.prototype.pointClass.prototype,{setVisible:E}),n(v,"afterTranslate",w),n(v,"bindAxes",q))};g.pointSetVisible=E})(m||(m={}));return m});x(b,"Core/Axis/Color/ColorAxisDefaults.js",[],function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},
width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0}});x(b,"Core/Axis/Color/ColorAxis.js",[b["Core/Axis/Axis.js"],b["Core/Color/Color.js"],b["Core/Axis/Color/ColorAxisComposition.js"],b["Core/Axis/Color/ColorAxisDefaults.js"],b["Core/Globals.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,h,z,n,y,t,A,C){var m=this&&this.__extends||function(){var g=function(f,
e){g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d])};return g(f,e)};return function(f,e){function c(){this.constructor=f}g(f,e);f.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),g=h.parse,v=y.noop,r=A.series,D=C.extend,u=C.isNumber,w=C.merge,q=C.pick;h=function(b){function f(e,c){var a=b.call(this,e,c)||this;a.beforePadding=!1;a.chart=void 0;a.coll="colorAxis";a.dataClasses=
void 0;a.legendItem=void 0;a.legendItems=void 0;a.name="";a.options=void 0;a.stops=void 0;a.visible=!0;a.init(e,c);return a}m(f,b);f.compose=function(e,c,a,d){z.compose(f,e,c,a,d)};f.prototype.init=function(e,c){var a=e.options.legend||{},d=c.layout?"vertical"!==c.layout:"vertical"!==a.layout,k=c.visible;a=w(f.defaultColorAxisOptions,c,{showEmpty:!1,title:null,visible:a.enabled&&!1!==k});this.coll="colorAxis";this.side=c.side||d?2:1;this.reversed=c.reversed||!d;this.opposite=!d;b.prototype.init.call(this,
e,a);this.userOptions.visible=k;c.dataClasses&&this.initDataClasses(c);this.initStops();this.horiz=d;this.zoomEnabled=!1};f.prototype.initDataClasses=function(e){var c=this.chart,a=this.options,d=e.dataClasses.length,k,b=0,l=c.options.chart.colorCount;this.dataClasses=k=[];this.legendItems=[];(e.dataClasses||[]).forEach(function(e,f){e=w(e);k.push(e);if(c.styledMode||!e.color)"category"===a.dataClassColor?(c.styledMode||(f=c.options.colors,l=f.length,e.color=f[b]),e.colorIndex=b,b++,b===l&&(b=0)):
e.color=g(a.minColor).tweenTo(g(a.maxColor),2>d?.5:f/(d-1))})};f.prototype.hasData=function(){return!!(this.tickPositions||[]).length};f.prototype.setTickPositions=function(){if(!this.dataClasses)return b.prototype.setTickPositions.call(this)};f.prototype.initStops=function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(e){e.color=g(e[1])})};f.prototype.setOptions=function(e){b.prototype.setOptions.call(this,e);this.options.crosshair=
this.options.marker};f.prototype.setAxisSize=function(){var e=this.legendSymbol,c=this.chart,a=c.options.legend||{},d,k;e?(this.left=a=e.attr("x"),this.top=d=e.attr("y"),this.width=k=e.attr("width"),this.height=e=e.attr("height"),this.right=c.chartWidth-a-k,this.bottom=c.chartHeight-d-e,this.len=this.horiz?k:e,this.pos=this.horiz?a:d):this.len=(this.horiz?a.symbolWidth:a.symbolHeight)||f.defaultLegendLength};f.prototype.normalizedValue=function(e){this.logarithmic&&(e=this.logarithmic.log2lin(e));
return 1-(this.max-e)/(this.max-this.min||1)};f.prototype.toColor=function(e,c){var a=this.dataClasses,d=this.stops,k;if(a)for(k=a.length;k--;){var b=a[k];var l=b.from;d=b.to;if(("undefined"===typeof l||e>=l)&&("undefined"===typeof d||e<=d)){var f=b.color;c&&(c.dataClass=k,c.colorIndex=b.colorIndex);break}}else{e=this.normalizedValue(e);for(k=d.length;k--&&!(e>d[k][0]););l=d[k]||d[k+1];d=d[k+1]||l;e=1-(d[0]-e)/(d[0]-l[0]||1);f=l.color.tweenTo(d.color,e)}return f};f.prototype.getOffset=function(){var e=
this.legendGroup,c=this.chart.axisOffset[this.side];if(e){this.axisParent=e;b.prototype.getOffset.call(this);var a=this.chart.legend;a.allItems.forEach(function(d){d instanceof f&&d.drawLegendSymbol(a,d)});a.render();this.chart.getMargins(!0);this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width);this.chart.axisOffset[this.side]=c}};f.prototype.setLegendColor=function(){var e=this.reversed,c=e?1:0;e=e?0:1;c=this.horiz?[c,0,e,0]:[0,e,0,c];this.legendColor={linearGradient:{x1:c[0],
y1:c[1],x2:c[2],y2:c[3]},stops:this.stops}};f.prototype.drawLegendSymbol=function(e,c){var a=e.padding,d=e.options,k=this.horiz,b=q(d.symbolWidth,k?f.defaultLegendLength:12),l=q(d.symbolHeight,k?12:f.defaultLegendLength),g=q(d.labelPadding,k?16:30);d=q(d.itemDistance,10);this.setLegendColor();c.legendSymbol||(c.legendSymbol=this.chart.renderer.rect(0,e.baseline-11,b,l).attr({zIndex:1}).add(c.legendGroup));this.legendItemWidth=b+a+(k?d:this.options.labels.x+this.maxLabelLength);this.legendItemHeight=
l+a+(k?g:0)};f.prototype.setState=function(e){this.series.forEach(function(c){c.setState(e)})};f.prototype.setVisible=function(){};f.prototype.getSeriesExtremes=function(){var e=this.series,c=e.length,a;this.dataMin=Infinity;for(this.dataMax=-Infinity;c--;){var d=e[c];var k=d.colorKey=q(d.options.colorKey,d.colorKey,d.pointValKey,d.zoneAxis,"y");var b=d.pointArrayMap;var l=d[k+"Min"]&&d[k+"Max"];if(d[k+"Data"])var f=d[k+"Data"];else if(b){f=[];b=b.indexOf(k);var g=d.yData;if(0<=b&&g)for(a=0;a<g.length;a++)f.push(q(g[a][b],
g[a]))}else f=d.yData;l?(d.minColorValue=d[k+"Min"],d.maxColorValue=d[k+"Max"]):(f=r.prototype.getExtremes.call(d,f),d.minColorValue=f.dataMin,d.maxColorValue=f.dataMax);"undefined"!==typeof d.minColorValue&&(this.dataMin=Math.min(this.dataMin,d.minColorValue),this.dataMax=Math.max(this.dataMax,d.maxColorValue));l||r.prototype.applyExtremes.call(d)}};f.prototype.drawCrosshair=function(e,c){var a=c&&c.plotX,d=c&&c.plotY,k=this.pos,f=this.len;if(c){var g=this.toPixels(c.getNestedProperty(c.series.colorKey));
g<k?g=k-2:g>k+f&&(g=k+f+2);c.plotX=g;c.plotY=this.len-g;b.prototype.drawCrosshair.call(this,e,c);c.plotX=a;c.plotY=d;this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!==typeof this.crosshair||this.cross.attr({fill:this.crosshair.color}))}};f.prototype.getPlotLinePath=function(e){var c=this.left,a=e.translatedValue,d=this.top;return u(a)?this.horiz?[["M",
a-4,d-6],["L",a+4,d-6],["L",a,d],["Z"]]:[["M",c,a],["L",c-6,a+6],["L",c-6,a-6],["Z"]]:b.prototype.getPlotLinePath.call(this,e)};f.prototype.update=function(e,c){var a=this.chart.legend;this.series.forEach(function(a){a.isDirtyData=!0});(e.dataClasses&&a.allItems||this.dataClasses)&&this.destroyItems();b.prototype.update.call(this,e,c);this.legendItem&&(this.setLegendColor(),a.colorizeItem(this,!0))};f.prototype.destroyItems=function(){var e=this.chart;this.legendItem?e.legend.destroyItem(this):this.legendItems&&
this.legendItems.forEach(function(c){e.legend.destroyItem(c)});e.isDirtyLegend=!0};f.prototype.destroy=function(){this.chart.isDirtyLegend=!0;this.destroyItems();b.prototype.destroy.apply(this,[].slice.call(arguments))};f.prototype.remove=function(e){this.destroyItems();b.prototype.remove.call(this,e)};f.prototype.getDataClassLegendSymbols=function(){var e=this,c=e.chart,a=e.legendItems,d=c.options.legend,k=d.valueDecimals,b=d.valueSuffix||"",f;a.length||e.dataClasses.forEach(function(d,g){var l=
d.from,B=d.to,h=c.numberFormatter,p=!0;f="";"undefined"===typeof l?f="< ":"undefined"===typeof B&&(f="> ");"undefined"!==typeof l&&(f+=h(l,k)+b);"undefined"!==typeof l&&"undefined"!==typeof B&&(f+=" - ");"undefined"!==typeof B&&(f+=h(B,k)+b);a.push(D({chart:c,name:f,options:{},drawLegendSymbol:t.drawRectangle,visible:!0,setState:v,isDataClass:!0,setVisible:function(){p=e.visible=!p;e.series.forEach(function(a){a.points.forEach(function(a){a.dataClass===g&&a.setVisible(p)})});c.legend.colorizeItem(this,
p)}},d))});return a};f.defaultColorAxisOptions=n;f.defaultLegendLength=200;f.keepProps=["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"];return f}(b);Array.prototype.push.apply(b.keepProps,h.keepProps);"";return h});x(b,"Series/ColorMapMixin.js",[b["Core/Globals.js"],b["Core/Series/Point.js"],b["Core/Utilities.js"]],function(b,h,z){var r=b.noop;b=b.seriesTypes;var y=z.defined;z=z.addEvent;z(h,"afterSetState",function(b){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:b&&
"hover"===b.state?1:0})});return{PointMixin:{dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value}},SeriesMixin:{pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:r,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:b.column.prototype.pointAttribs,colorAttribs:function(b){var h={};!y(b.color)||b.state&&"normal"!==b.state||(h[this.colorProp||
"fill"]=b.color);return h}}}});x(b,"Series/Heatmap/HeatmapPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,h){var r=this&&this.__extends||function(){var b=function(h,g){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,g){b.__proto__=g}||function(b,g){for(var h in g)g.hasOwnProperty(h)&&(b[h]=g[h])};return b(h,g)};return function(h,g){function v(){this.constructor=h}b(h,g);h.prototype=null===g?Object.create(g):(v.prototype=g.prototype,new v)}}(),n=
h.clamp,y=h.defined,t=h.extend,A=h.pick;b=function(b){function h(){var g=null!==b&&b.apply(this,arguments)||this;g.options=void 0;g.series=void 0;g.value=void 0;g.x=void 0;g.y=void 0;return g}r(h,b);h.prototype.applyOptions=function(g,h){g=b.prototype.applyOptions.call(this,g,h);g.formatPrefix=g.isNull||null===g.value?"null":"point";return g};h.prototype.getCellAttributes=function(){var b=this.series,h=b.options,r=(h.colsize||1)/2,m=(h.rowsize||1)/2,u=b.xAxis,w=b.yAxis,q=this.options.marker||b.options.marker;
b=b.pointPlacementToXValue();var t=A(this.pointPadding,h.pointPadding,0),f={x1:n(Math.round(u.len-(u.translate(this.x-r,!1,!0,!1,!0,-b)||0)),-u.len,2*u.len),x2:n(Math.round(u.len-(u.translate(this.x+r,!1,!0,!1,!0,-b)||0)),-u.len,2*u.len),y1:n(Math.round(w.translate(this.y-m,!1,!0,!1,!0)||0),-w.len,2*w.len),y2:n(Math.round(w.translate(this.y+m,!1,!0,!1,!0)||0),-w.len,2*w.len)};[["width","x"],["height","y"]].forEach(function(b){var c=b[0];b=b[1];var a=b+"1",d=b+"2",e=Math.abs(f[a]-f[d]),g=q&&q.lineWidth||
0,h=Math.abs(f[a]+f[d])/2;c=q&&q[c];y(c)&&c<e&&(c=c/2+g/2,f[a]=h-c,f[d]=h+c);t&&("y"===b&&(a=d,d=b+"1"),f[a]+=t,f[d]-=t)});return f};h.prototype.haloPath=function(b){if(!b)return[];var g=this.shapeArgs;return["M",g.x-b,g.y-b,"L",g.x-b,g.y+g.height+b,g.x+g.width+b,g.y+g.height+b,g.x+g.width+b,g.y-b,"Z"]};h.prototype.isValid=function(){return Infinity!==this.value&&-Infinity!==this.value};return h}(b.seriesTypes.scatter.prototype.pointClass);t(b.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1});
return b});x(b,"Series/Heatmap/HeatmapSeries.js",[b["Core/Color/Color.js"],b["Series/ColorMapMixin.js"],b["Series/Heatmap/HeatmapPoint.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Renderer/SVG/SVGRenderer.js"],b["Core/Utilities.js"]],function(b,h,x,n,y,t,A){var r=this&&this.__extends||function(){var b=function(c,a){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])};
return b(c,a)};return function(c,a){function d(){this.constructor=c}b(c,a);c.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}(),m=y.series,g=y.seriesTypes,v=g.column,z=g.scatter,D=t.prototype.symbols,u=A.extend,w=A.fireEvent,q=A.isNumber,E=A.merge,f=A.pick;t=function(e){function c(){var a=null!==e&&e.apply(this,arguments)||this;a.colorAxis=void 0;a.data=void 0;a.options=void 0;a.points=void 0;a.valueMax=NaN;a.valueMin=NaN;return a}r(c,e);c.prototype.drawPoints=function(){var a=
this;if((this.options.marker||{}).enabled||this._hasPointMarkers)m.prototype.drawPoints.call(this),this.points.forEach(function(b){b.graphic&&(b.graphic[a.chart.styledMode?"css":"animate"](a.colorAttribs(b)),null===b.value&&b.graphic.addClass("highcharts-null-point"))})};c.prototype.getExtremes=function(){var a=m.prototype.getExtremes.call(this,this.valueData),b=a.dataMin;a=a.dataMax;q(b)&&(this.valueMin=b);q(a)&&(this.valueMax=a);return m.prototype.getExtremes.call(this)};c.prototype.getValidPoints=
function(a,b){return m.prototype.getValidPoints.call(this,a,b,!0)};c.prototype.hasData=function(){return!!this.processedXData.length};c.prototype.init=function(){m.prototype.init.apply(this,arguments);var a=this.options;a.pointRange=f(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1;D.ellipse=D.circle;a.marker&&(a.marker.r=a.borderRadius)};c.prototype.markerAttribs=function(a,b){var d=a.marker||{},c=this.options.marker||{},e=a.shapeArgs||{},f={};if(a.hasImage)return{x:a.plotX,y:a.plotY};
if(b){var g=c.states[b]||{};var h=d.states&&d.states[b]||{};[["width","x"],["height","y"]].forEach(function(a){f[a[0]]=(h[a[0]]||g[a[0]]||e[a[0]])+(h[a[0]+"Plus"]||g[a[0]+"Plus"]||0);f[a[1]]=e[a[1]]+(e[a[0]]-f[a[0]])/2})}return b?f:e};c.prototype.pointAttribs=function(a,d){var c=m.prototype.pointAttribs.call(this,a,d),e=this.options||{},f=this.chart.options.plotOptions||{},g=f.series||{},h=f.heatmap||{};f=a&&a.options.borderColor||e.borderColor||h.borderColor||g.borderColor;g=a&&a.options.borderWidth||
e.borderWidth||h.borderWidth||g.borderWidth||c["stroke-width"];c.stroke=a&&a.marker&&a.marker.lineColor||e.marker&&e.marker.lineColor||f||this.color;c["stroke-width"]=g;d&&(a=E(e.states[d],e.marker&&e.marker.states[d],a&&a.options.states&&a.options.states[d]||{}),d=a.brightness,c.fill=a.color||b.parse(c.fill).brighten(d||0).get(),c.stroke=a.lineColor);return c};c.prototype.setClip=function(a){var b=this.chart;m.prototype.setClip.apply(this,arguments);(!1!==this.options.clip||a)&&this.markerGroup.clip((a||
this.clipBox)&&this.sharedClipKey?b.sharedClips[this.sharedClipKey]:b.clipRect)};c.prototype.translate=function(){var a=this.options,b=a.marker&&a.marker.symbol||"rect",c=D[b]?b:"rect",e=-1!==["circle","square"].indexOf(c);this.generatePoints();this.points.forEach(function(d){var f=d.getCellAttributes(),g={};g.x=Math.min(f.x1,f.x2);g.y=Math.min(f.y1,f.y2);g.width=Math.max(Math.abs(f.x2-f.x1),0);g.height=Math.max(Math.abs(f.y2-f.y1),0);var h=d.hasImage=0===(d.marker&&d.marker.symbol||b||"").indexOf("url");
if(e){var k=Math.abs(g.width-g.height);g.x=Math.min(f.x1,f.x2)+(g.width<g.height?0:k/2);g.y=Math.min(f.y1,f.y2)+(g.width<g.height?k/2:0);g.width=g.height=Math.min(g.width,g.height)}k={plotX:(f.x1+f.x2)/2,plotY:(f.y1+f.y2)/2,clientX:(f.x1+f.x2)/2,shapeType:"path",shapeArgs:E(!0,g,{d:D[c](g.x,g.y,g.width,g.height,{r:a.borderRadius})})};h&&(d.marker={width:g.width,height:g.height});u(d,k)});w(this,"afterTranslate")};c.defaultOptions=E(z.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,nullColor:"#f7f7f7",
dataLabels:{formatter:function(){var a=this.series.chart.numberFormatter,b=this.point.value;return q(b)?a(b,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},states:{hover:{halo:!1,brightness:.2}}});return c}(z);u(t.prototype,{alignDataLabel:v.prototype.alignDataLabel,axisTypes:h.SeriesMixin.axisTypes,
colorAttribs:h.SeriesMixin.colorAttribs,colorKey:h.SeriesMixin.colorKey,directTouch:!0,drawLegendSymbol:n.drawRectangle,getExtremesFromAll:!0,getSymbol:m.prototype.getSymbol,parallelArrays:h.SeriesMixin.parallelArrays,pointArrayMap:["y","value"],pointClass:x,trackerGroups:h.SeriesMixin.trackerGroups});y.registerSeriesType("heatmap",t);"";"";return t});x(b,"masters/modules/heatmap.src.js",[b["Core/Globals.js"],b["Core/Axis/Color/ColorAxis.js"]],function(b,h){b.ColorAxis=h;h.compose(b.Chart,b.Fx,b.Legend,
b.Series)})});
//# sourceMappingURL=heatmap.js.map