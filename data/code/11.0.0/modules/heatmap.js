/*
 Highmaps JS v11.0.0 (2023-04-27)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/heatmap",["highcharts"],function(q){b(q);b.Highcharts=q;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function q(b,h,l,E){b.hasOwnProperty(h)||(b[h]=E.apply(null,l),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,module:b[h]}})))}b=b?b._modules:
{};q(b,"Core/Axis/Color/ColorAxisComposition.js",[b["Core/Color/Color.js"],b["Core/Utilities.js"]],function(b,h){const {parse:l}=b,{addEvent:n,extend:y,merge:u,pick:x,splat:k}=h;var w;(function(b){function A(){const a=this.options;this.colorAxis=[];a.colorAxis&&(a.colorAxis=k(a.colorAxis),a.colorAxis.forEach((a,c)=>{a.index=c;new z(this,a)}))}function w(a){const c=c=>{c=a.allItems.indexOf(c);-1!==c&&(this.destroyItem(a.allItems[c]),a.allItems.splice(c,1))};let d=[],e,f;(this.chart.colorAxis||[]).forEach(function(a){(e=
a.options)&&e.showInLegend&&(e.dataClasses&&e.visible?d=d.concat(a.getDataClassLegendSymbols()):e.visible&&d.push(a),a.series.forEach(function(a){if(!a.options.showInLegend||e.dataClasses)"point"===a.options.legendType?a.points.forEach(function(a){c(a)}):c(a)}))});for(f=d.length;f--;)a.allItems.unshift(d[f])}function r(a){a.visible&&a.item.legendColor&&a.item.legendItem.symbol.attr({fill:a.item.legendColor})}function m(){const a=this.chart.colorAxis;a&&a.forEach(function(a,c,d){a.update({},d)})}function d(){(this.chart.colorAxis&&
this.chart.colorAxis.length||this.colorAttribs)&&this.translateColors()}function c(){const a=this.axisTypes;a?-1===a.indexOf("colorAxis")&&a.push("colorAxis"):this.axisTypes=["colorAxis"]}function e(a){const c=this,d=a?"show":"hide";c.visible=c.options.visible=!!a;["graphic","dataLabel"].forEach(function(a){if(c[a])c[a][d]()});this.series.buildKDTree()}function a(){const a=this,c=this.options.nullColor,d=this.colorAxis,e=this.colorKey;(this.data.length?this.data:this.points).forEach(f=>{var g=f.getNestedProperty(e);
(g=f.options.color||(f.isNull||null===f.value?c:d&&"undefined"!==typeof g?d.toColor(g,f):f.color||a.color))&&f.color!==g&&(f.color=g,"point"===a.options.legendType&&f.legendItem&&f.legendItem.label&&a.chart.legend.colorizeItem(f,f.visible))})}function f(a){const c=a.prototype.createAxis;a.prototype.createAxis=function(a,d){if("colorAxis"!==a)return c.apply(this,arguments);const f=new z(this,u(d.axis,{index:this[a].length,isX:!1}));this.isDirtyLegend=!0;this.axes.forEach(function(a){a.series=[]});
this.series.forEach(function(a){a.bindAxes();a.isDirtyData=!0});x(d.redraw,!0)&&this.redraw(d.animation);return f}}function B(){this.elem.attr("fill",l(this.start).tweenTo(l(this.end),this.pos),void 0,!0)}function p(){this.elem.attr("stroke",l(this.start).tweenTo(l(this.end),this.pos),void 0,!0)}const g=[];let z;b.compose=function(b,k,t,l,C){z||(z=b);h.pushUnique(g,k)&&(b=k.prototype,b.collectionsWithUpdate.push("colorAxis"),b.collectionsWithInit.colorAxis=[b.addColorAxis],n(k,"afterGetAxes",A),f(k));
h.pushUnique(g,t)&&(k=t.prototype,k.fillSetter=B,k.strokeSetter=p);h.pushUnique(g,l)&&(n(l,"afterGetAllItems",w),n(l,"afterColorizeItem",r),n(l,"afterUpdate",m));h.pushUnique(g,C)&&(y(C.prototype,{optionalAxis:"colorAxis",translateColors:a}),y(C.prototype.pointClass.prototype,{setVisible:e}),n(C,"afterTranslate",d,{order:1}),n(C,"bindAxes",c))};b.pointSetVisible=e})(w||(w={}));return w});q(b,"Core/Axis/Color/ColorAxisDefaults.js",[],function(){return{lineWidth:0,minPadding:0,maxPadding:0,gridLineColor:"#ffffff",
gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{distance:8,overflow:"justify",rotation:0},minColor:"#e6e9ff",maxColor:"#0022ff",tickLength:5,showInLegend:!0}});q(b,"Core/Axis/Color/ColorAxis.js",[b["Core/Axis/Axis.js"],b["Core/Color/Color.js"],b["Core/Axis/Color/ColorAxisComposition.js"],b["Core/Axis/Color/ColorAxisDefaults.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],
function(b,h,l,q,y,u,x){const {parse:k}=h,{series:w}=u,{extend:A,isNumber:t,merge:n,pick:r}=x;class m extends b{static compose(d,c,e,a){l.compose(m,d,c,e,a)}constructor(d,c){super(d,c);this.beforePadding=!1;this.chart=void 0;this.coll="colorAxis";this.stops=this.options=this.dataClasses=void 0;this.visible=!0;this.init(d,c)}init(d,c){var e=d.options.legend||{};const a=c.layout?"vertical"!==c.layout:"vertical"!==e.layout,f=c.visible;e=n(m.defaultColorAxisOptions,c,{showEmpty:!1,title:null,visible:e.enabled&&
!1!==f});this.coll="colorAxis";this.side=c.side||a?2:1;this.reversed=c.reversed||!a;this.opposite=!a;super.init(d,e);this.userOptions.visible=f;c.dataClasses&&this.initDataClasses(c);this.initStops();this.horiz=a;this.zoomEnabled=!1}initDataClasses(d){const c=this.chart,e=this.legendItem=this.legendItem||{},a=d.dataClasses.length,f=this.options;let b,p=0,g=c.options.chart.colorCount;this.dataClasses=b=[];e.labels=[];(d.dataClasses||[]).forEach(function(d,e){d=n(d);b.push(d);if(c.styledMode||!d.color)"category"===
f.dataClassColor?(c.styledMode||(e=c.options.colors,g=e.length,d.color=e[p]),d.colorIndex=p,p++,p===g&&(p=0)):d.color=k(f.minColor).tweenTo(k(f.maxColor),2>a?.5:e/(a-1))})}hasData(){return!!(this.tickPositions||[]).length}setTickPositions(){if(!this.dataClasses)return super.setTickPositions()}initStops(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];this.stops.forEach(function(d){d.color=k(d[1])})}setOptions(d){super.setOptions(d);this.options.crosshair=this.options.marker}setAxisSize(){var d=
this.legendItem&&this.legendItem.symbol;const c=this.chart;var e=c.options.legend||{};let a,f;d?(this.left=e=d.attr("x"),this.top=a=d.attr("y"),this.width=f=d.attr("width"),this.height=d=d.attr("height"),this.right=c.chartWidth-e-f,this.bottom=c.chartHeight-a-d,this.len=this.horiz?f:d,this.pos=this.horiz?e:a):this.len=(this.horiz?e.symbolWidth:e.symbolHeight)||m.defaultLegendLength}normalizedValue(d){this.logarithmic&&(d=this.logarithmic.log2lin(d));return 1-(this.max-d)/(this.max-this.min||1)}toColor(d,
c){const e=this.dataClasses;var a=this.stops;let f,b,p,g;if(e)for(g=e.length;g--;){if(p=e[g],f=p.from,a=p.to,("undefined"===typeof f||d>=f)&&("undefined"===typeof a||d<=a)){b=p.color;c&&(c.dataClass=g,c.colorIndex=p.colorIndex);break}}else{d=this.normalizedValue(d);for(g=a.length;g--&&!(d>a[g][0]););f=a[g]||a[g+1];a=a[g+1]||f;d=1-(a[0]-d)/(a[0]-f[0]||1);b=f.color.tweenTo(a.color,d)}return b}getOffset(){const d=this.legendItem&&this.legendItem.group,c=this.chart.axisOffset[this.side];if(d){this.axisParent=
d;super.getOffset();const e=this.chart.legend;e.allItems.forEach(function(a){a instanceof m&&a.drawLegendSymbol(e,a)});e.render();this.chart.getMargins(!0);this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width);this.chart.axisOffset[this.side]=c}}setLegendColor(){var d=this.reversed,c=d?1:0;d=d?0:1;c=this.horiz?[c,0,d,0]:[0,d,0,c];this.legendColor={linearGradient:{x1:c[0],y1:c[1],x2:c[2],y2:c[3]},stops:this.stops}}drawLegendSymbol(d,c){var e;c=c.legendItem||{};const a=d.padding,f=
d.options,b=this.options.labels,p=r(f.itemDistance,10),g=this.horiz,k=r(f.symbolWidth,g?m.defaultLegendLength:12),D=r(f.symbolHeight,g?12:m.defaultLegendLength),h=r(f.labelPadding,g?16:30);this.setLegendColor();c.symbol||(c.symbol=this.chart.renderer.symbol("roundedRect",0,d.baseline-11,k,D,{r:null!==(e=f.symbolRadius)&&void 0!==e?e:3}).attr({zIndex:1}).add(c.group));c.labelWidth=k+a+(g?p:r(b.x,b.distance)+this.maxLabelLength);c.labelHeight=D+a+(g?h:0)}setState(d){this.series.forEach(function(c){c.setState(d)})}setVisible(){}getSeriesExtremes(){const d=
this.series;let c;let e,a,f=d.length,b,p;this.dataMin=Infinity;for(this.dataMax=-Infinity;f--;){a=d[f];c=a.colorKey=r(a.options.colorKey,a.colorKey,a.pointValKey,a.zoneAxis,"y");var g=a.pointArrayMap;e=a[c+"Min"]&&a[c+"Max"];if(a[c+"Data"])var k=a[c+"Data"];else if(g){if(k=[],g=g.indexOf(c),b=a.yData,0<=g&&b)for(p=0;p<b.length;p++)k.push(r(b[p][g],b[p]))}else k=a.yData;e?(a.minColorValue=a[c+"Min"],a.maxColorValue=a[c+"Max"]):(k=w.prototype.getExtremes.call(a,k),a.minColorValue=k.dataMin,a.maxColorValue=
k.dataMax);"undefined"!==typeof a.minColorValue&&(this.dataMin=Math.min(this.dataMin,a.minColorValue),this.dataMax=Math.max(this.dataMax,a.maxColorValue));e||w.prototype.applyExtremes.call(a)}}drawCrosshair(d,c){const e=this.legendItem||{},a=c&&c.plotX,f=c&&c.plotY,b=this.pos,k=this.len;let g;c&&(g=this.toPixels(c.getNestedProperty(c.series.colorKey)),g<b?g=b-2:g>b+k&&(g=b+k+2),c.plotX=g,c.plotY=this.len-g,super.drawCrosshair(d,c),c.plotX=a,c.plotY=f,this.cross&&!this.cross.addedToColorAxis&&e.group&&
(this.cross.addClass("highcharts-coloraxis-marker").add(e.group),this.cross.addedToColorAxis=!0,this.chart.styledMode||"object"!==typeof this.crosshair||this.cross.attr({fill:this.crosshair.color})))}getPlotLinePath(d){const c=this.left,e=d.translatedValue,a=this.top;return t(e)?this.horiz?[["M",e-4,a-6],["L",e+4,a-6],["L",e,a],["Z"]]:[["M",c,e],["L",c-6,e+6],["L",c-6,e-6],["Z"]]:super.getPlotLinePath(d)}update(d,c){const e=this.chart.legend;this.series.forEach(a=>{a.isDirtyData=!0});(d.dataClasses&&
e.allItems||this.dataClasses)&&this.destroyItems();super.update(d,c);this.legendItem&&this.legendItem.label&&(this.setLegendColor(),e.colorizeItem(this,!0))}destroyItems(){const d=this.chart,c=this.legendItem||{};if(c.label)d.legend.destroyItem(this);else if(c.labels)for(const e of c.labels)d.legend.destroyItem(e);d.isDirtyLegend=!0}destroy(){this.chart.isDirtyLegend=!0;this.destroyItems();super.destroy(...[].slice.call(arguments))}remove(d){this.destroyItems();super.remove(d)}getDataClassLegendSymbols(){const d=
this,c=d.chart,e=d.legendItem&&d.legendItem.labels||[],a=c.options.legend,f=r(a.valueDecimals,-1),b=r(a.valueSuffix,""),k=a=>d.series.reduce((c,d)=>{c.push(...d.points.filter(c=>c.dataClass===a));return c},[]);let g;e.length||d.dataClasses.forEach((a,p)=>{const B=a.from,h=a.to,{numberFormatter:z}=c;let m=!0;g="";"undefined"===typeof B?g="< ":"undefined"===typeof h&&(g="> ");"undefined"!==typeof B&&(g+=z(B,f)+b);"undefined"!==typeof B&&"undefined"!==typeof h&&(g+=" - ");"undefined"!==typeof h&&(g+=
z(h,f)+b);e.push(A({chart:c,name:g,options:{},drawLegendSymbol:y.drawRectangle,visible:!0,isDataClass:!0,setState:a=>{for(const c of k(p))c.setState(a)},setVisible:function(){this.visible=m=d.visible=!m;for(const a of k(p))a.setVisible(m);c.legend.colorizeItem(this,m)}},a))});return e}}m.defaultColorAxisOptions=q;m.defaultLegendLength=200;m.keepProps=["legendItem"];Array.prototype.push.apply(b.keepProps,m.keepProps);"";return m});q(b,"Series/ColorMapComposition.js",[b["Core/Series/SeriesRegistry.js"],
b["Core/Utilities.js"]],function(b,h){const {column:{prototype:l}}=b.seriesTypes,{addEvent:n,defined:q}=h;var u;(function(b){function k(b){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:b&&"hover"===b.state?1:0})}const w=[];b.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value&&(void 0===this.value||!isNaN(this.value))}};b.seriesMembers={colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],
parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(b){const k={};!q(b.color)||b.state&&"normal"!==b.state||(k[this.colorProp||"fill"]=b.color);return k},pointAttribs:l.pointAttribs};b.compose=function(b){const l=b.prototype.pointClass;h.pushUnique(w,l)&&n(l,"afterSetState",k);return b}})(u||(u={}));return u});q(b,"Series/Heatmap/HeatmapPoint.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,
h){({seriesTypes:{scatter:{prototype:{pointClass:b}}}}=b);const {clamp:l,defined:n,extend:q,pick:u}=h;class x extends b{constructor(){super(...arguments);this.y=this.x=this.value=this.series=this.options=void 0}applyOptions(b,h){(this.isNull||null===this.value)&&delete this.color;super.applyOptions(b,h);this.formatPrefix=this.isNull||null===this.value?"null":"point";return this}getCellAttributes(){var b=this.series;const h=b.options,q=(h.colsize||1)/2,t=(h.rowsize||1)/2,v=b.xAxis,r=b.yAxis,m=this.options.marker||
b.options.marker;b=b.pointPlacementToXValue();const d=u(this.pointPadding,h.pointPadding,0),c={x1:l(Math.round(v.len-v.translate(this.x-q,!1,!0,!1,!0,-b)),-v.len,2*v.len),x2:l(Math.round(v.len-v.translate(this.x+q,!1,!0,!1,!0,-b)),-v.len,2*v.len),y1:l(Math.round(r.translate(this.y-t,!1,!0,!1,!0)),-r.len,2*r.len),y2:l(Math.round(r.translate(this.y+t,!1,!0,!1,!0)),-r.len,2*r.len)};[["width","x"],["height","y"]].forEach(function(b){var a=b[0];b=b[1];let f=b+"1",e=b+"2";const k=Math.abs(c[f]-c[e]),g=
m&&m.lineWidth||0,h=Math.abs(c[f]+c[e])/2;a=m&&m[a];n(a)&&a<k&&(a=a/2+g/2,c[f]=h-a,c[e]=h+a);if(d){if("x"===b&&v.reversed||"y"===b&&!r.reversed)f=e,e=b+"1";c[f]+=d;c[e]-=d}});return c}haloPath(b){if(!b)return[];const {x:k=0,y:h=0,width:l=0,height:n=0}=this.shapeArgs||{};return[["M",k-b,h-b],["L",k-b,h+n+b],["L",k+l+b,h+n+b],["L",k+l+b,h-b],["Z"]]}isValid(){return Infinity!==this.value&&-Infinity!==this.value}}q(x.prototype,{dataLabelOnNull:!0,moveToTopOnHover:!0,ttBelow:!1});return x});q(b,"Series/Heatmap/HeatmapSeries.js",
[b["Core/Color/Color.js"],b["Series/ColorMapComposition.js"],b["Series/Heatmap/HeatmapPoint.js"],b["Core/Legend/LegendSymbol.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Renderer/SVG/SVGRenderer.js"],b["Core/Utilities.js"]],function(b,h,l,q,y,u,x){const {series:k,seriesTypes:{column:n,scatter:A}}=y,{prototype:{symbols:t}}=u,{extend:v,fireEvent:r,isNumber:m,merge:d,pick:c}=x;class e extends A{constructor(){super(...arguments);this.points=this.options=this.data=this.colorAxis=void 0;this.valueMin=
this.valueMax=NaN}drawPoints(){if((this.options.marker||{}).enabled||this._hasPointMarkers)k.prototype.drawPoints.call(this),this.points.forEach(a=>{a.graphic&&(a.graphic[this.chart.styledMode?"css":"animate"](this.colorAttribs(a)),null===a.value&&a.graphic.addClass("highcharts-null-point"))})}getExtremes(){const {dataMin:a,dataMax:b}=k.prototype.getExtremes.call(this,this.valueData);m(a)&&(this.valueMin=a);m(b)&&(this.valueMax=b);return k.prototype.getExtremes.call(this)}getValidPoints(a,b){return k.prototype.getValidPoints.call(this,
a,b,!0)}hasData(){return!!this.processedXData.length}init(){super.init.apply(this,arguments);const a=this.options;a.pointRange=c(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1;t.ellipse=t.circle;a.marker&&m(a.borderRadius)&&(a.marker.r=a.borderRadius)}markerAttribs(a,b){const c=a.shapeArgs||{};if(a.hasImage)return{x:a.plotX,y:a.plotY};if(b&&"normal"!==b){var d=a.options.marker||{};a=this.options.marker||{};a=a.states&&a.states[b]||{};d=d.states&&d.states[b]||{};b=(d.width||a.width||
c.width||0)+(d.widthPlus||a.widthPlus||0);a=(d.height||a.height||c.height||0)+(d.heightPlus||a.heightPlus||0);return{x:(c.x||0)+((c.width||0)-b)/2,y:(c.y||0)+((c.height||0)-a)/2,width:b,height:a}}return c}pointAttribs(a,c){const e=k.prototype.pointAttribs.call(this,a,c),f=this.options||{};var g=this.chart.options.plotOptions||{},h=g.series||{};const m=g.heatmap||{};g=a&&a.options.borderColor||f.borderColor||m.borderColor||h.borderColor;h=a&&a.options.borderWidth||f.borderWidth||m.borderWidth||h.borderWidth||
e["stroke-width"];e.stroke=a&&a.marker&&a.marker.lineColor||f.marker&&f.marker.lineColor||g||this.color;e["stroke-width"]=h;c&&"normal"!==c&&(a=d(f.states&&f.states[c],f.marker&&f.marker.states&&f.marker.states[c],a&&a.options.states&&a.options.states[c]||{}),e.fill=a.color||b.parse(e.fill).brighten(a.brightness||0).get(),e.stroke=a.lineColor||e.stroke);return e}translate(){const {borderRadius:a,marker:b}=this.options,c=b&&b.symbol||"rect",e=t[c]?c:"rect",g=-1!==["circle","square"].indexOf(e);this.generatePoints();
this.points.forEach(function(b){const f=b.getCellAttributes();let h=Math.min(f.x1,f.x2);var k=Math.min(f.y1,f.y2);let l=Math.max(Math.abs(f.x2-f.x1),0),n=Math.max(Math.abs(f.y2-f.y1),0);b.hasImage=0===(b.marker&&b.marker.symbol||c||"").indexOf("url");g&&(k=Math.abs(l-n),h=Math.min(f.x1,f.x2)+(l<n?0:k/2),k=Math.min(f.y1,f.y2)+(l<n?k/2:0),l=n=Math.min(l,n));b.hasImage&&(b.marker={width:l,height:n});b.plotX=b.clientX=(f.x1+f.x2)/2;b.plotY=(f.y1+f.y2)/2;b.shapeType="path";b.shapeArgs=d(!0,{x:h,y:k,width:l,
height:n},{d:t[e](h,k,l,n,{r:m(a)?a:0})})});r(this,"afterTranslate")}}e.defaultOptions=d(A.defaultOptions,{animation:!1,borderRadius:0,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){const {numberFormatter:a}=this.series.chart,{value:b}=this.point;return m(b)?a(b,-1):""},inside:!0,verticalAlign:"middle",crop:!1,overflow:"allow",padding:0},marker:{symbol:"rect",radius:0,lineColor:void 0,states:{hover:{lineWidthPlus:0},select:{}}},clip:!0,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}<br/>"},
states:{hover:{halo:!1,brightness:.2}}});v(e.prototype,{axisTypes:h.seriesMembers.axisTypes,colorKey:h.seriesMembers.colorKey,directTouch:!0,getExtremesFromAll:!0,parallelArrays:h.seriesMembers.parallelArrays,pointArrayMap:["y","value"],pointClass:l,specialGroup:"group",trackerGroups:h.seriesMembers.trackerGroups,alignDataLabel:n.prototype.alignDataLabel,colorAttribs:h.seriesMembers.colorAttribs,drawLegendSymbol:q.drawRectangle,getSymbol:k.prototype.getSymbol});h.compose(e);y.registerSeriesType("heatmap",
e);"";"";return e});q(b,"masters/modules/heatmap.src.js",[b["Core/Globals.js"],b["Core/Axis/Color/ColorAxis.js"]],function(b,h){b.ColorAxis=h;h.compose(b.Chart,b.Fx,b.Legend,b.Series)})});
//# sourceMappingURL=heatmap.js.map