/*
 Highstock JS v11.0.0 (2023-04-27)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Sebastian Bochan

 License: www.highcharts.com/license
*/
'use strict';(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/indicators/ichimoku-kinko-hyo",["highcharts","highcharts/modules/stock"],function(n){e(n);e.Highcharts=n;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function n(e,m,q,n){e.hasOwnProperty(m)||(e[m]=n.apply(null,q),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:m,
module:e[m]}})))}e=e?e._modules:{};n(e,"Stock/Indicators/IKH/IKHIndicator.js",[e["Extensions/DataGrouping/ApproximationRegistry.js"],e["Core/Color/Color.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,m,q,n){function E(a){return a.reduce(function(a,d){return Math.max(a,d[1])},-Infinity)}function F(a){return a.reduce(function(a,d){return Math.min(a,d[2])},Infinity)}function B(a){return{high:E(a),low:F(a)}}function G(a){let c,d,e,l,h;a.series.forEach(function(a){if(a.xData)for(l=
a.xData,h=d=a.xIncrement?1:l.length-1;0<h;h--)if(e=l[h]-l[h-1],"undefined"===typeof c||e<c)c=e});return c}function H(a,c,d,e){if(a&&c&&d&&e){const h=c.plotX-a.plotX;c=c.plotY-a.plotY;var l=e.plotX-d.plotX;e=e.plotY-d.plotY;const p=a.plotX-d.plotX,f=a.plotY-d.plotY;d=(-c*p+h*f)/(-l*c+h*e);l=(l*f-e*p)/(-l*c+h*e);if(0<=d&&1>=d&&0<=l&&1>=l)return{plotX:a.plotX+l*h,plotY:a.plotY+l*c}}}function D(a){const c=a.indicator;c.points=a.points;c.nextPoints=a.nextPoints;c.color=a.color;c.options=A(a.options.senkouSpan.styles,
a.gap);c.graph=a.graph;c.fillGraph=!0;q.seriesTypes.sma.prototype.drawGraph.call(c)}const {parse:C}=m;({sma:m}=q.seriesTypes);const {defined:I,extend:J,isArray:K,isNumber:L,merge:A,objectEach:M}=n;class y extends m{constructor(){super(...arguments);this.data=[];this.options={};this.points=[];this.graphCollection=[]}init(){super.init.apply(this,arguments);this.options=A({tenkanLine:{styles:{lineColor:this.color}},kijunLine:{styles:{lineColor:this.color}},chikouLine:{styles:{lineColor:this.color}},
senkouSpanA:{styles:{lineColor:this.color,fill:C(this.color).setOpacity(.5).get()}},senkouSpanB:{styles:{lineColor:this.color,fill:C(this.color).setOpacity(.5).get()}},senkouSpan:{styles:{fill:C(this.color).setOpacity(.2).get()}}},this.options)}toYData(a){return[a.tenkanSen,a.kijunSen,a.chikouSpan,a.senkouSpanA,a.senkouSpanB]}translate(){q.seriesTypes.sma.prototype.translate.apply(this);for(const a of this.points)for(const c of this.pointArrayMap){const d=a[c];L(d)&&(a["plot"+c]=this.yAxis.toPixels(d,
!0),a.plotY=a["plot"+c],a.tooltipPos=[a.plotX,a["plot"+c]],a.isNull=!1)}}drawGraph(){const a=this,c=a.points,d=a.options,e=a.graph,l=a.color,h={options:{gapSize:d.gapSize}};var p=a.pointArrayMap.length;const f=[[],[],[],[],[],[]],k={tenkanLine:f[0],kijunLine:f[1],chikouLine:f[2],senkouSpanA:f[3],senkouSpanB:f[4],senkouSpan:f[5]},z=[];var b=a.options.senkouSpan;const n=b.color||b.styles.fill,m=b.negativeColor,r=[[],[]],t=[[],[]];b=c.length;let w=0;var v;let y;var x;for(a.ikhMap=k;b--;){var u=c[b];
for(v=0;v<p;v++){var g=a.pointArrayMap[v];I(u[g])&&f[v].push({plotX:u.plotX,plotY:u["plot"+g],isNull:!1})}m&&b!==c.length-1&&(g=k.senkouSpanB.length-1,u=H(k.senkouSpanA[g-1],k.senkouSpanA[g],k.senkouSpanB[g-1],k.senkouSpanB[g]))&&(u={plotX:u.plotX,plotY:u.plotY,isNull:!1,intersectPoint:!0},k.senkouSpanA.splice(g,0,u),k.senkouSpanB.splice(g,0,u),z.push(g))}M(k,(b,c)=>{d[c]&&"senkouSpan"!==c&&(a.points=f[w],a.options=A(d[c].styles,h),a.graph=a["graph"+c],a.fillGraph=!1,a.color=l,q.seriesTypes.sma.prototype.drawGraph.call(a),
a["graph"+c]=a.graph);w++});if(a.graphCollection)for(x of a.graphCollection)a[x].destroy(),delete a[x];a.graphCollection=[];if(m&&k.senkouSpanA[0]&&k.senkouSpanB[0]){z.unshift(0);z.push(k.senkouSpanA.length-1);for(x=0;x<z.length-1;x++){b=z[x];g=z[x+1];p=k.senkouSpanB.slice(b,g+1);b=k.senkouSpanA.slice(b,g+1);if(1<=Math.floor(p.length/2))if(g=Math.floor(p.length/2),p[g].plotY===b[g].plotY){for(v=u=g=0;v<p.length;v++)g+=p[v].plotY,u+=b[v].plotY;g=g>u?0:1}else g=p[g].plotY>b[g].plotY?0:1;else g=p[0].plotY>
b[0].plotY?0:1;r[g]=r[g].concat(p);t[g]=t[g].concat(b)}["graphsenkouSpanColor","graphsenkouSpanNegativeColor"].forEach(function(b,c){r[c].length&&t[c].length&&(y=0===c?n:m,D({indicator:a,points:r[c],nextPoints:t[c],color:y,options:d,gap:h,graph:a[b]}),a[b]=a.graph,a.graphCollection.push(b))})}else D({indicator:a,points:k.senkouSpanB,nextPoints:k.senkouSpanA,color:n,options:d,gap:h,graph:a.graphsenkouSpan}),a.graphsenkouSpan=a.graph;delete a.nextPoints;delete a.fillGraph;a.points=c;a.options=d;a.graph=
e;a.color=l}getGraphPath(a){let c=[];var d;a=a||this.points;if(this.fillGraph&&this.nextPoints){if((d=q.seriesTypes.sma.prototype.getGraphPath.call(this,this.nextPoints))&&d.length){d[0][0]="L";c=q.seriesTypes.sma.prototype.getGraphPath.call(this,a);d=d.slice(0,c.length);for(let a=d.length-1;0<=a;a--)c.push(d[a])}}else c=q.seriesTypes.sma.prototype.getGraphPath.apply(this,arguments);return c}getValues(a,c){const d=c.period,e=c.periodTenkan;c=c.periodSenkouSpanB;const l=a.xData,h=a.yData,p=h&&h.length||
0;a=G(a.xAxis);const f=[],k=[];let m;let b;let n;if(!(l.length<=d)&&K(h[0])&&4===h[0].length){var q=l[0]-d*a;for(b=0;b<d;b++)k.push(q+b*a);for(b=0;b<p;b++){if(b>=e){var r=h.slice(b-e,b);r=B(r);r=(r.high+r.low)/2}if(b>=d){var t=h.slice(b-d,b);t=B(t);t=(t.high+t.low)/2;n=(r+t)/2}if(b>=c){var w=h.slice(b-c,b);w=B(w);w=(w.high+w.low)/2}q=h[b][3];m=l[b];"undefined"===typeof f[b]&&(f[b]=[]);"undefined"===typeof f[b+d-1]&&(f[b+d-1]=[]);f[b+d-1][0]=r;f[b+d-1][1]=t;f[b+d-1][2]=void 0;"undefined"===typeof f[b+
1]&&(f[b+1]=[]);f[b+1][2]=q;b<=d&&(f[b+d-1][3]=void 0,f[b+d-1][4]=void 0);"undefined"===typeof f[b+2*d-2]&&(f[b+2*d-2]=[]);f[b+2*d-2][3]=n;f[b+2*d-2][4]=w;k.push(m)}for(b=1;b<=d;b++)k.push(m+b*a);return{values:f,xData:k,yData:f}}}}y.defaultOptions=A(m.defaultOptions,{params:{index:void 0,period:26,periodTenkan:9,periodSenkouSpanB:52},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>TENKAN SEN: {point.tenkanSen:.3f}<br/>KIJUN SEN: {point.kijunSen:.3f}<br/>CHIKOU SPAN: {point.chikouSpan:.3f}<br/>SENKOU SPAN A: {point.senkouSpanA:.3f}<br/>SENKOU SPAN B: {point.senkouSpanB:.3f}<br/>'},
tenkanLine:{styles:{lineWidth:1,lineColor:void 0}},kijunLine:{styles:{lineWidth:1,lineColor:void 0}},chikouLine:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanA:{styles:{lineWidth:1,lineColor:void 0}},senkouSpanB:{styles:{lineWidth:1,lineColor:void 0}},senkouSpan:{styles:{fill:"rgba(255, 0, 0, 0.5)"}},dataGrouping:{approximation:"ichimoku-averages"}});J(y.prototype,{pointArrayMap:["tenkanSen","kijunSen","chikouSpan","senkouSpanA","senkouSpanB"],pointValKey:"tenkanSen",nameComponents:["periodSenkouSpanB",
"period","periodTenkan"]});e["ichimoku-averages"]=function(){const a=[];let c;[].forEach.call(arguments,function(d,m){a.push(e.average(d));c=!c&&"undefined"===typeof a[m]});return c?void 0:a};q.registerSeriesType("ikh",y);"";return y});n(e,"masters/indicators/ichimoku-kinko-hyo.src.js",[],function(){})});
//# sourceMappingURL=ichimoku-kinko-hyo.js.map