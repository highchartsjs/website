/*
 Highcharts Gantt JS v10.2.1 (2022-10-13)

 Tree Grid

 (c) 2016-2021 Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/treegrid",["highcharts"],function(F){c(F);c.Highcharts=F;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function F(c,w,C,u){c.hasOwnProperty(w)||(c[w]=u.apply(null,C),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:w,module:c[w]}})))}c=c?c._modules:{};F(c,
"Core/Axis/BrokenAxis.js",[c["Core/Axis/Stacking/StackItem.js"],c["Core/Utilities.js"]],function(c,w){var C=w.addEvent,u=w.find,E=w.fireEvent,B=w.isArray,p=w.isNumber,y=w.pick,z;(function(a){function A(){"undefined"!==typeof this.brokenAxis&&this.brokenAxis.setBreaks(this.options.breaks,!1)}function D(){this.brokenAxis&&this.brokenAxis.hasBreaks&&(this.options.ordinal=!1)}function H(){var a=this.brokenAxis;if(a&&a.hasBreaks){for(var b=this.tickPositions,d=this.tickPositions.info,l=[],e=0;e<b.length;e++)a.isInAnyBreak(b[e])||
l.push(b[e]);this.tickPositions=l;this.tickPositions.info=d}}function t(){this.brokenAxis||(this.brokenAxis=new z(this))}function r(){var a=this.options.connectNulls,b=this.points,d=this.xAxis,l=this.yAxis;if(this.isDirty)for(var e=b.length;e--;){var k=b[e],h=!(null===k.y&&!1===a)&&(d&&d.brokenAxis&&d.brokenAxis.isInAnyBreak(k.x,!0)||l&&l.brokenAxis&&l.brokenAxis.isInAnyBreak(k.y,!0));k.visible=h?!1:!1!==k.options.visible}}function m(){this.drawBreaks(this.xAxis,["x"]);this.drawBreaks(this.yAxis,
y(this.pointArrayMap,["y"]))}function f(a,b){var d=this,l=d.points,e,k,h,x;if(a&&a.brokenAxis&&a.brokenAxis.hasBreaks){var f=a.brokenAxis;b.forEach(function(b){e=f&&f.breakArray||[];k=a.isXAxis?a.min:y(d.options.threshold,a.min);l.forEach(function(l){x=y(l["stack"+b.toUpperCase()],l[b]);e.forEach(function(b){if(p(k)&&p(x)){h=!1;if(k<b.from&&x>b.to||k>b.from&&x<b.from)h="pointBreak";else if(k<b.from&&x>b.from&&x<b.to||k>b.from&&x>b.to&&x<b.from)h="pointInBreak";h&&E(a,h,{point:l,brk:b})}})})})}}function n(){var a=
this.currentDataGrouping,b=a&&a.gapSize;a=this.points.slice();var d=this.yAxis,l=this.options.gapSize,e=a.length-1,k;if(l&&0<e)for("value"!==this.options.gapUnit&&(l*=this.basePointRange),b&&b>l&&b>=this.basePointRange&&(l=b),k=void 0;e--;)k&&!1!==k.visible||(k=a[e+1]),b=a[e],!1!==k.visible&&!1!==b.visible&&(k.x-b.x>l&&(k=(b.x+k.x)/2,a.splice(e+1,0,{isNull:!0,x:k}),d.stacking&&this.options.stacking&&(k=d.stacking.stacks[this.stackKey][k]=new c(d,d.options.stackLabels,!1,k,this.stack),k.total=0)),
k=b);return this.getGraphPath(a)}var v=[];a.compose=function(a,b){-1===v.indexOf(a)&&(v.push(a),a.keepProps.push("brokenAxis"),C(a,"init",t),C(a,"afterInit",A),C(a,"afterSetTickPositions",H),C(a,"afterSetOptions",D));if(-1===v.indexOf(b)){v.push(b);var d=b.prototype;d.drawBreaks=f;d.gappedPath=n;C(b,"afterGeneratePoints",r);C(b,"afterRender",m)}return a};var z=function(){function a(a){this.hasBreaks=!1;this.axis=a}a.isInBreak=function(a,d){var b=a.repeat||Infinity,e=a.from,k=a.to-a.from;d=d>=e?(d-
e)%b:b-(e-d)%b;return a.inclusive?d<=k:d<k&&0!==d};a.lin2Val=function(b){var d=this.brokenAxis;d=d&&d.breakArray;if(!d||!p(b))return b;var l;for(l=0;l<d.length;l++){var e=d[l];if(e.from>=b)break;else e.to<b?b+=e.len:a.isInBreak(e,b)&&(b+=e.len)}return b};a.val2Lin=function(b){var d=this.brokenAxis;d=d&&d.breakArray;if(!d||!p(b))return b;var l=b,e;for(e=0;e<d.length;e++){var k=d[e];if(k.to<=b)l-=k.len;else if(k.from>=b)break;else if(a.isInBreak(k,b)){l-=b-k.from;break}}return l};a.prototype.findBreakAt=
function(a,d){return u(d,function(b){return b.from<a&&a<b.to})};a.prototype.isInAnyBreak=function(b,d){var l=this.axis,e=l.options.breaks||[],k=e.length,h;if(k&&p(b)){for(;k--;)if(a.isInBreak(e[k],b)){var x=!0;h||(h=y(e[k].showPoints,!l.isXAxis))}var f=x&&d?x&&!h:x}return f};a.prototype.setBreaks=function(b,d){var l=this,e=l.axis,k=B(b)&&!!b.length;e.isDirty=l.hasBreaks!==k;l.hasBreaks=k;e.options.breaks=e.userOptions.breaks=b;e.forceRedraw=!0;e.series.forEach(function(a){a.isDirty=!0});k||e.val2lin!==
a.val2Lin||(delete e.val2lin,delete e.lin2val);k&&(e.userOptions.ordinal=!1,e.lin2val=a.lin2Val,e.val2lin=a.val2Lin,e.setExtremes=function(a,b,d,k,f){if(l.hasBreaks){for(var h=this.options.breaks||[],x;x=l.findBreakAt(a,h);)a=x.to;for(;x=l.findBreakAt(b,h);)b=x.from;b<a&&(b=a)}e.constructor.prototype.setExtremes.call(this,a,b,d,k,f)},e.setAxisTranslation=function(){e.constructor.prototype.setAxisTranslation.call(this);l.unitLength=void 0;if(l.hasBreaks){var b=e.options.breaks||[],d=[],k=[],f=y(e.pointRangePadding,
0),t=0,n,m=e.userMin||e.min,r=e.userMax||e.max,v;b.forEach(function(g){n=g.repeat||Infinity;p(m)&&p(r)&&(a.isInBreak(g,m)&&(m+=g.to%n-m%n),a.isInBreak(g,r)&&(r-=r%n-g.from%n))});b.forEach(function(g){q=g.from;n=g.repeat||Infinity;if(p(m)&&p(r)){for(;q-n>m;)q-=n;for(;q<m;)q+=n;for(v=q;v<r;v+=n)d.push({value:v,move:"in"}),d.push({value:v+g.to-g.from,move:"out",size:g.breakSize})}});d.sort(function(g,a){return g.value===a.value?("in"===g.move?0:1)-("in"===a.move?0:1):g.value-a.value});var g=0;var q=
m;d.forEach(function(a){g+="in"===a.move?1:-1;1===g&&"in"===a.move&&(q=a.value);0===g&&p(q)&&(k.push({from:q,to:a.value,len:a.value-q-(a.size||0)}),t+=a.value-q-(a.size||0))});l.breakArray=k;p(m)&&p(r)&&p(e.min)&&(l.unitLength=r-m-t+f,E(e,"afterBreaks"),e.staticScale?e.transA=e.staticScale:l.unitLength&&(e.transA*=(r-e.min+f)/l.unitLength),f&&(e.minPixelPadding=e.transA*(e.minPointOffset||0)),e.min=m,e.max=r)}});y(d,!0)&&e.chart.redraw()};return a}();a.Additions=z})(z||(z={}));return z});F(c,"Core/Axis/GridAxis.js",
[c["Core/Axis/Axis.js"],c["Core/Axis/AxisDefaults.js"],c["Core/Globals.js"],c["Core/Utilities.js"]],function(c,w,C,u){function E(g,a){var q={width:0,height:0};a.forEach(function(a){a=g[a];if(u.isObject(a,!0)){var b=u.isObject(a.label,!0)?a.label:{};a=b.getBBox?b.getBBox().height:0;b.textStr&&!x(b.textPxLength)&&(b.textPxLength=b.getBBox().width);var J=x(b.textPxLength)?Math.round(b.textPxLength):0;b.textStr&&(J=Math.round(b.getBBox().width));q.height=Math.max(a,q.height);q.width=Math.max(J,q.width)}});
"treegrid"===this.options.type&&this.treeGrid&&this.treeGrid.mapOfPosToGridNode&&(q.width+=this.options.labels.indentation*((this.treeGrid.mapOfPosToGridNode[-1].height||0)-1));return q}function B(){var a=this.grid;(a&&a.columns||[]).forEach(function(a){a.getOffset()})}function p(a){if(!0===(this.options.grid||{}).enabled){var g=this.axisTitle,b=this.height,h=this.horiz,d=this.left,k=this.offset,e=this.opposite,f=this.options,l=this.top,x=this.width,n=this.tickSize(),t=g&&g.getBBox().width,m=f.title.x,
r=f.title.y,v=M(f.title.margin,h?5:10);g=this.chart.renderer.fontMetrics(f.title.style.fontSize,g).f;n=(h?l+b:d)+(h?1:-1)*(e?-1:1)*(n?n[0]/2:0)+(this.side===G.bottom?g:0);a.titlePosition.x=h?d-(t||0)/2-v+m:n+(e?x:0)+k+m;a.titlePosition.y=h?n-(e?b:0)+(e?g:-g)/2+k+r:l-v+r}}function y(){var a=this.chart,q=this.options.grid;q=void 0===q?{}:q;var b=this.userOptions;if(q.enabled){var h=this.options;h.labels.align=M(h.labels.align,"center");this.categories||(h.showLastLabel=!1);this.labelRotation=0;h.labels.rotation=
0}if(q.columns){h=this.grid.columns=[];for(var d=this.grid.columnIndex=0;++d<q.columns.length;){var k=I(b,q.columns[q.columns.length-d-1],{linkedTo:0,type:"category",scrollbar:{enabled:!1}});delete k.grid.columns;k=new c(this.chart,k);k.grid.isColumn=!0;k.grid.columnIndex=d;e(a.axes,k);e(a[this.coll],k);h.push(k)}}}function z(){var a=this.grid,q=this.options;if(!0===(q.grid||{}).enabled){var b=this.min||0,h=this.max||0;this.maxLabelDimensions=this.getMaxLabelDimensions(this.ticks,this.tickPositions);
this.rightWall&&this.rightWall.destroy();if(this.grid&&this.grid.isOuterAxis()&&this.axisLine){var k=q.lineWidth;if(k){k=this.getLinePath(k);var d=k[0],e=k[1],f=((this.tickSize("tick")||[1])[0]-1)*(this.side===G.top||this.side===G.left?-1:1);"M"===d[0]&&"L"===e[0]&&(this.horiz?(d[2]+=f,e[2]+=f):(d[1]+=f,e[1]+=f));!this.horiz&&this.chart.marginRight&&(d=[d,["L",this.left,d[2]||0]],f=["L",this.chart.chartWidth-this.chart.marginRight,this.toPixels(h+this.tickmarkOffset)],e=[["M",e[1]||0,this.toPixels(h+
this.tickmarkOffset)],f],this.grid.upperBorder||0===b%1||(this.grid.upperBorder=this.grid.renderBorder(d)),this.grid.upperBorder&&(this.grid.upperBorder.attr({stroke:q.lineColor,"stroke-width":q.lineWidth}),this.grid.upperBorder.animate({d:d})),this.grid.lowerBorder||0===h%1||(this.grid.lowerBorder=this.grid.renderBorder(e)),this.grid.lowerBorder&&(this.grid.lowerBorder.attr({stroke:q.lineColor,"stroke-width":q.lineWidth}),this.grid.lowerBorder.animate({d:e})));this.grid.axisLineExtra?(this.grid.axisLineExtra.attr({stroke:q.lineColor,
"stroke-width":q.lineWidth}),this.grid.axisLineExtra.animate({d:k})):this.grid.axisLineExtra=this.grid.renderBorder(k);this.axisLine[this.showAxis?"show":"hide"]()}}(a&&a.columns||[]).forEach(function(a){return a.render()});if(!this.horiz&&this.chart.hasRendered&&(this.scrollbar||this.linkedParent&&this.linkedParent.scrollbar)){a=this.tickmarkOffset;q=this.tickPositions[this.tickPositions.length-1];k=this.tickPositions[0];for(d=e=void 0;(e=this.hiddenLabels.pop())&&e.element;)e.show();for(;(d=this.hiddenMarks.pop())&&
d.element;)d.show();(e=this.ticks[k].label)&&(b-k>a?this.hiddenLabels.push(e.hide()):e.show());(e=this.ticks[q].label)&&(q-h>a?this.hiddenLabels.push(e.hide()):e.show());(b=this.ticks[q].mark)&&q-h<a&&0<q-h&&this.ticks[q].isLast&&this.hiddenMarks.push(b.hide())}}}function a(){var a=this.tickPositions&&this.tickPositions.info,q=this.options,b=this.userOptions.labels||{};(q.grid||{}).enabled&&(this.horiz?(this.series.forEach(function(a){a.options.pointRange=0}),a&&q.dateTimeLabelFormats&&q.labels&&
!l(b.align)&&(!1===q.dateTimeLabelFormats[a.unitName].range||1<a.count)&&(q.labels.align="left",l(b.x)||(q.labels.x=3))):"treegrid"!==this.options.type&&this.grid&&this.grid.columns&&(this.minPointOffset=this.tickInterval))}function A(a){var g=this.options;a=a.userOptions;var b=g&&u.isObject(g.grid,!0)?g.grid:{};if(!0===b.enabled){var h=I(!0,{className:"highcharts-grid-axis "+(a.className||""),dateTimeLabelFormats:{hour:{list:["%H:%M","%H"]},day:{list:["%A, %e. %B","%a, %e. %b","%E"]},week:{list:["Week %W",
"W%W"]},month:{list:["%B","%b","%o"]}},grid:{borderWidth:1},labels:{padding:2,style:{fontSize:"13px"}},margin:0,title:{text:null,reserveSpace:!1,rotation:0},units:[["millisecond",[1,10,100]],["second",[1,10]],["minute",[1,5,15]],["hour",[1,6]],["day",[1]],["week",[1]],["month",[1]],["year",null]]},a);"xAxis"===this.coll&&(l(a.linkedTo)&&!l(a.tickPixelInterval)&&(h.tickPixelInterval=350),l(a.tickPixelInterval)||!l(a.linkedTo)||l(a.tickPositioner)||l(a.tickInterval)||(h.tickPositioner=function(a,g){var b=
this.linkedParent&&this.linkedParent.tickPositions&&this.linkedParent.tickPositions.info;if(b){for(var q=h.units||[],d=void 0,e=1,k="year",f=0;f<q.length;f++){var J=q[f];if(J&&J[0]===b.unitName){d=f;break}}(q=x(d)&&q[d+1])?(k=q[0]||"year",e=(e=q[1])&&e[0]||1):"year"===b.unitName&&(e=10*b.count);b=O[k];this.tickInterval=b*e;return this.chart.time.getTimeTicks({unitRange:b,count:e,unitName:k},a,g,this.options.startOfWeek)}}));I(!0,this.options,h);this.horiz&&(g.minPadding=M(a.minPadding,0),g.maxPadding=
M(a.maxPadding,0));x(g.grid.borderWidth)&&(g.tickWidth=g.lineWidth=b.borderWidth)}}function D(a){a=(a=a.userOptions)&&a.grid||{};var g=a.columns;a.enabled&&g&&I(!0,this.options,g[g.length-1])}function H(){(this.grid.columns||[]).forEach(function(a){return a.setScale()})}function t(a){var g=w.defaultLeftAxisOptions,b=this.horiz,e=this.maxLabelDimensions,d=this.options.grid;d=void 0===d?{}:d;d.enabled&&e&&(g=2*Math.abs(g.labels.x),b=b?d.cellHeight||g+e.height:g+e.width,h(a.tickSize)?a.tickSize[0]=b:
a.tickSize=[b,0])}function r(){this.axes.forEach(function(a){(a.grid&&a.grid.columns||[]).forEach(function(a){a.setAxisSize();a.setAxisTranslation()})})}function m(a){var g=this.grid;(g.columns||[]).forEach(function(g){return g.destroy(a.keepEvents)});g.columns=void 0}function f(a){a=a.userOptions||{};var g=a.grid||{};g.enabled&&l(g.borderColor)&&(a.tickColor=a.lineColor=g.borderColor);this.grid||(this.grid=new Q(this));this.hiddenLabels=[];this.hiddenMarks=[]}function n(a){var b=this.label,g=this.axis,
h=g.reversed,d=g.chart,e=g.options.grid||{},k=g.options.labels,f=k.align,l=G[g.side],n=a.tickmarkOffset,t=g.tickPositions,m=this.pos-n;t=x(t[a.index+1])?t[a.index+1]-n:(g.max||0)+n;var r=g.tickSize("tick");n=r?r[0]:0;r=r?r[1]/2:0;if(!0===e.enabled){if("top"===l){e=g.top+g.offset;var v=e-n}else"bottom"===l?(v=d.chartHeight-g.bottom+g.offset,e=v+n):(e=g.top+g.len-(g.translate(h?t:m)||0),v=g.top+g.len-(g.translate(h?m:t)||0));"right"===l?(l=d.chartWidth-g.right+g.offset,h=l+n):"left"===l?(h=g.left+g.offset,
l=h-n):(l=Math.round(g.left+(g.translate(h?t:m)||0))-r,h=Math.min(Math.round(g.left+(g.translate(h?m:t)||0))-r,g.left+g.len));this.slotWidth=h-l;a.pos.x="left"===f?l:"right"===f?h:l+(h-l)/2;a.pos.y=v+(e-v)/2;d=d.renderer.fontMetrics(k.style.fontSize,b&&b.element);b=b?b.getBBox().height:0;k.useHTML?a.pos.y+=d.b+-(b/2):(b=Math.round(b/d.h),a.pos.y+=(d.b-(d.h-d.f))/2+-((b-1)*d.h/2));a.pos.x+=g.horiz&&k.x||0}}function v(a){var g=a.axis,b=a.value;if(g.options.grid&&g.options.grid.enabled){var h=g.tickPositions,
d=(g.linkedParent||g).series[0],e=b===h[0];h=b===h[h.length-1];var f=d&&k(d.options.data,function(a){return a[g.isXAxis?"x":"y"]===b}),l=void 0;f&&d.is("gantt")&&(l=I(f),C.seriesTypes.gantt.prototype.pointClass.setGanttPointAliases(l));a.isFirst=e;a.isLast=h;a.point=l}}function L(){var a=this.options,b=this.categories,h=this.tickPositions,d=h[0],e=h[h.length-1],k=this.linkedParent&&this.linkedParent.min||this.min,f=this.linkedParent&&this.linkedParent.max||this.max,l=this.tickInterval;!0!==(a.grid||
{}).enabled||b||!this.horiz&&!this.isLinked||(d<k&&d+l>k&&!a.startOnTick&&(h[0]=k),e>f&&e-l<f&&!a.endOnTick&&(h[h.length-1]=f))}function K(a){var g=this.options.grid;return!0===(void 0===g?{}:g).enabled&&this.categories?this.tickInterval:a.apply(this,Array.prototype.slice.call(arguments,1))}var b=C.dateFormats,d=u.addEvent,l=u.defined,e=u.erase,k=u.find,h=u.isArray,x=u.isNumber,I=u.merge,M=u.pick,O=u.timeUnits,P=u.wrap,G;(function(a){a[a.top=0]="top";a[a.right=1]="right";a[a.bottom=2]="bottom";a[a.left=
3]="left"})(G||(G={}));var N=[],Q=function(){function a(a){this.axis=a}a.prototype.isOuterAxis=function(){var a=this.axis,b=a.grid.columnIndex,g=a.linkedParent&&a.linkedParent.grid.columns||a.grid.columns,h=b?a.linkedParent:a,d=-1,e=0;(a.chart[a.coll]||[]).forEach(function(b,g){b.side!==a.side||b.options.isInternal||(e=g,b===h&&(d=g))});return e===d&&(x(b)?g.length===b:!0)};a.prototype.renderBorder=function(a){var b=this.axis,g=b.chart.renderer,h=b.options;a=g.path(a).addClass("highcharts-axis-line").add(b.axisBorder);
g.styledMode||a.attr({stroke:h.lineColor,"stroke-width":h.lineWidth,zIndex:7});return a};return a}();b.E=function(a){return this.dateFormat("%a",a,!0).charAt(0)};b.W=function(a){var b=this,g=new this.Date(a);["Hours","Milliseconds","Minutes","Seconds"].forEach(function(a){b.set(a,g,0)});var h=(this.get("Day",g)+6)%7;a=new this.Date(g.valueOf());this.set("Date",a,this.get("Date",g)-h+3);h=new this.Date(this.get("FullYear",a),0,1);4!==this.get("Day",h)&&(this.set("Month",g,0),this.set("Date",g,1+(11-
this.get("Day",h))%7));return(1+Math.floor((a.valueOf()-h.valueOf())/6048E5)).toString()};"";return{compose:function(b,h,e){-1===N.indexOf(b)&&(N.push(b),b.keepProps.push("grid"),b.prototype.getMaxLabelDimensions=E,P(b.prototype,"unsquish",K),d(b,"init",f),d(b,"afterGetOffset",B),d(b,"afterGetTitlePosition",p),d(b,"afterInit",y),d(b,"afterRender",z),d(b,"afterSetAxisTranslation",a),d(b,"afterSetOptions",A),d(b,"afterSetOptions",D),d(b,"afterSetScale",H),d(b,"afterTickSize",t),d(b,"trimTicks",L),d(b,
"destroy",m));-1===N.indexOf(h)&&d(h,"afterSetChartSize",r);-1===N.indexOf(e)&&(d(e,"afterGetLabelPosition",n),d(e,"labelFormat",v));return b}}});F(c,"Gantt/Tree.js",[c["Core/Utilities.js"]],function(c){var w=c.extend,C=c.isNumber,u=c.pick,E=function(c,y){var p=c.reduce(function(a,c){var p=u(c.parent,"");"undefined"===typeof a[p]&&(a[p]=[]);a[p].push(c);return a},{});Object.keys(p).forEach(function(a,c){var A=p[a];""!==a&&-1===y.indexOf(a)&&(A.forEach(function(a){c[""].push(a)}),delete c[a])});return p},
B=function(c,y,z,a,A,D){var p=0,t=0,r=D&&D.after,m=D&&D.before;y={data:a,depth:z-1,id:c,level:z,parent:y};var f,n;"function"===typeof m&&m(y,D);m=(A[c]||[]).map(function(a){var m=B(a.id,c,z+1,a,A,D),r=a.start;a=!0===a.milestone?r:a.end;f=!C(f)||r<f?r:f;n=!C(n)||a>n?a:n;p=p+1+m.descendants;t=Math.max(m.height+1,t);return m});a&&(a.start=u(a.start,f),a.end=u(a.end,n));w(y,{children:m,descendants:p,height:t});"function"===typeof r&&r(y,D);return y};return{getListOfParents:E,getNode:B,getTree:function(c,
y){var p=c.map(function(a){return a.id});c=E(c,p);return B("",null,1,null,c,y)}}});F(c,"Core/Axis/TreeGrid/TreeGridTick.js",[c["Core/Utilities.js"]],function(c){function w(){this.treeGrid||(this.treeGrid=new D(this))}function C(a,t){a=a.treeGrid;var r=!a.labelIcon,m=t.renderer,f=t.xy,n=t.options,c=n.width||0,p=n.height||0,A=f.x-c/2-(n.padding||0);f=f.y-p/2;var b=t.collapsed?90:180,d=t.show&&y(f),l=a.labelIcon;l||(a.labelIcon=l=m.path(m.symbols[n.type](n.x||0,n.y||0,c,p)).addClass("highcharts-label-icon").add(t.group));
l[d?"show":"hide"]();m.styledMode||l.attr({cursor:"pointer",fill:z(t.color,"#666666"),"stroke-width":1,stroke:n.lineColor,strokeWidth:n.lineWidth||0});l[r?"attr":"animate"]({translateX:A,translateY:f,rotation:b})}function u(a,t,r,m,f,n,c,A,w){var b=z(this.options&&this.options.labels,n);n=this.pos;var d=this.axis,l="treegrid"===d.options.type;a=a.apply(this,[t,r,m,f,b,c,A,w]);l&&(t=b&&p(b.symbol,!0)?b.symbol:{},b=b&&y(b.indentation)?b.indentation:0,n=(n=(d=d.treeGrid.mapOfPosToGridNode)&&d[n])&&n.depth||
1,a.x+=(t.width||0)+2*(t.padding||0)+(n-1)*b);return a}function E(a){var c=this,r=c.pos,m=c.axis,f=c.label,n=m.treeGrid.mapOfPosToGridNode,v=m.options,A=z(c.options&&c.options.labels,v&&v.labels),w=A&&p(A.symbol,!0)?A.symbol:{},b=(n=n&&n[r])&&n.depth;v="treegrid"===v.type;var d=-1<m.tickPositions.indexOf(r);r=m.chart.styledMode;v&&n&&f&&f.element&&f.addClass("highcharts-treegrid-node-level-"+b);a.apply(c,Array.prototype.slice.call(arguments,1));v&&f&&f.element&&n&&n.descendants&&0<n.descendants&&
(m=m.treeGrid.isCollapsed(n),C(c,{color:!r&&f.styles&&f.styles.color||"",collapsed:m,group:f.parentGroup,options:w,renderer:f.renderer,show:d,xy:f.xy}),w="highcharts-treegrid-node-"+(m?"expanded":"collapsed"),f.addClass("highcharts-treegrid-node-"+(m?"collapsed":"expanded")).removeClass(w),r||f.css({cursor:"pointer"}),[f,c.treeGrid.labelIcon].forEach(function(a){a&&!a.attachedTreeGridEvents&&(B(a.element,"mouseover",function(){f.addClass("highcharts-treegrid-node-active");f.renderer.styledMode||f.css({textDecoration:"underline"})}),
B(a.element,"mouseout",function(){var a=p(A.style)?A.style:{};f.removeClass("highcharts-treegrid-node-active");f.renderer.styledMode||f.css({textDecoration:a.textDecoration})}),B(a.element,"click",function(){c.treeGrid.toggleCollapse()}),a.attachedTreeGridEvents=!0)}))}var B=c.addEvent,p=c.isObject,y=c.isNumber,z=c.pick,a=c.wrap,A=[],D=function(){function c(a){this.tick=a}c.compose=function(c){-1===A.indexOf(c)&&(A.push(c),B(c,"init",w),a(c.prototype,"getLabelPosition",u),a(c.prototype,"renderLabel",
E),c.prototype.collapse=function(a){this.treeGrid.collapse(a)},c.prototype.expand=function(a){this.treeGrid.expand(a)},c.prototype.toggleCollapse=function(a){this.treeGrid.toggleCollapse(a)})};c.prototype.collapse=function(a){var c=this.tick,m=c.axis,f=m.brokenAxis;f&&m.treeGrid.mapOfPosToGridNode&&(c=m.treeGrid.collapse(m.treeGrid.mapOfPosToGridNode[c.pos]),f.setBreaks(c,z(a,!0)))};c.prototype.destroy=function(){this.labelIcon&&this.labelIcon.destroy()};c.prototype.expand=function(a){var c=this.tick,
m=c.axis,f=m.brokenAxis;f&&m.treeGrid.mapOfPosToGridNode&&(c=m.treeGrid.expand(m.treeGrid.mapOfPosToGridNode[c.pos]),f.setBreaks(c,z(a,!0)))};c.prototype.toggleCollapse=function(a){var c=this.tick,m=c.axis,f=m.brokenAxis;f&&m.treeGrid.mapOfPosToGridNode&&(c=m.treeGrid.toggleCollapse(m.treeGrid.mapOfPosToGridNode[c.pos]),f.setBreaks(c,z(a,!0)))};return c}();return D});F(c,"Series/TreeUtilities.js",[c["Core/Color/Color.js"],c["Core/Utilities.js"]],function(c,w){function C(a,c){var p=c.before,A=c.idRoot,
t=c.mapIdToNode[A],r=c.points[a.i],m=r&&r.options||{},f=[],n=0;a.levelDynamic=a.level-(!1!==c.levelIsConstant?0:t.level);a.name=z(r&&r.name,"");a.visible=A===a.id||!0===c.visible;"function"===typeof p&&(a=p(a,c));a.children.forEach(function(m,p){var r=u({},c);u(r,{index:p,siblings:a.children.length,visible:a.visible});m=C(m,r);f.push(m);m.visible&&(n+=m.val)});p=z(m.value,n);a.visible=0<=p&&(0<n||a.visible);a.children=f;a.childrenTotal=n;a.isLeaf=a.visible&&!n;a.val=p;return a}var u=w.extend,E=w.isArray,
B=w.isNumber,p=w.isObject,y=w.merge,z=w.pick;return{getColor:function(a,p){var A=p.index,w=p.mapOptionsToLevel,t=p.parentColor,r=p.parentColorIndex,m=p.series,f=p.colors,n=p.siblings,v=m.points,y=m.chart.options.chart,u;if(a){v=v[a.i];a=w[a.level]||{};if(w=v&&a.colorByPoint){var b=v.index%(f?f.length:y.colorCount);var d=f&&f[b]}if(!m.chart.styledMode){f=v&&v.options.color;y=a&&a.color;if(u=t)u=(u=a&&a.colorVariation)&&"brightness"===u.key&&A&&n?c.parse(t).brighten(A/n*u.to).get():t;u=z(f,y,d,u,m.color)}var l=
z(v&&v.options.colorIndex,a&&a.colorIndex,b,r,p.colorIndex)}return{color:u,colorIndex:l}},getLevelOptions:function(a){var c={};if(p(a)){var w=B(a.from)?a.from:1;var u=a.levels;var t={};var r=p(a.defaults)?a.defaults:{};E(u)&&(t=u.reduce(function(a,c){if(p(c)&&B(c.level)){var f=y({},c);var m=z(f.levelIsConstant,r.levelIsConstant);delete f.levelIsConstant;delete f.level;c=c.level+(m?0:w-1);p(a[c])?y(!0,a[c],f):a[c]=f}return a},{}));u=B(a.to)?a.to:1;for(a=0;a<=u;a++)c[a]=y({},r,p(t[a])?t[a]:{})}return c},
setTreeValues:C,updateRootId:function(a){if(p(a)){var c=p(a.options)?a.options:{};c=z(a.rootNode,c.rootId,"");p(a.userOptions)&&(a.userOptions.rootId=c);a.rootNode=c}return c}}});F(c,"Core/Axis/TreeGrid/TreeGridAxis.js",[c["Core/Axis/BrokenAxis.js"],c["Core/Axis/GridAxis.js"],c["Gantt/Tree.js"],c["Core/Axis/TreeGrid/TreeGridTick.js"],c["Series/TreeUtilities.js"],c["Core/Utilities.js"]],function(c,w,C,u,F,B){function p(a,b){var h=a.collapseEnd||0;a=a.collapseStart||0;h>=b&&(a-=.5);return{from:a,to:h,
showPoints:!1}}function y(a,b,c){var h=[],d=[],e={},k="boolean"===typeof b?b:!1,f={},l=-1;a=C.getTree(a,{after:function(a){a=f[a.pos];var b=0,h=0;a.children.forEach(function(a){h+=(a.descendants||0)+1;b=Math.max((a.height||0)+1,b)});a.descendants=h;a.height=b;a.collapsed&&d.push(a)},before:function(a){var b=n(a.data,!0)?a.data:{},c=v(b.name)?b.name:"",d=e[a.parent];d=n(d,!0)?f[d.pos]:null;var m=function(a){return a.name===c},x;k&&n(d,!0)&&(x=r(d.children,m))?(m=x.pos,x.nodes.push(a)):m=l++;f[m]||
(f[m]=x={depth:d?d.depth+1:0,name:c,id:b.id,nodes:[a],children:[],pos:m},-1!==m&&h.push(c),n(d,!0)&&d.children.push(x));v(a.id)&&(e[a.id]=a);x&&!0===b.collapsed&&(x.collapsed=!0);a.pos=m}});f=function(a,b){var h=function(a,c,d){var e=c+(-1===c?0:b-1),g=(e-c)/2,f=c+g;a.nodes.forEach(function(a){var b=a.data;n(b,!0)&&(b.y=c+(b.seriesIndex||0),delete b.seriesIndex);a.pos=f});d[f]=a;a.pos=f;a.tickmarkOffset=g+.5;a.collapseStart=e+.5;a.children.forEach(function(a){h(a,e+1,d);e=(a.collapseEnd||0)-.5});
a.collapseEnd=e+.5;return d};return h(a["-1"],-1,{})}(f,c);return{categories:h,mapOfIdToNode:e,mapOfPosToGridNode:f,collapsedNodes:d,tree:a}}function z(a){a.target.axes.filter(function(a){return"treegrid"===a.options.type}).forEach(function(b){var c=b.options||{},d=c.labels,h=c.uniqueNames;c=c.max;var e=0;if(!b.treeGrid.mapOfPosToGridNode||b.series.some(function(a){return!a.hasRendered||a.isDirtyData||a.isDirty})){var k=b.series.reduce(function(a,b){b.visible&&((b.options.data||[]).forEach(function(c){b.options.keys&&
b.options.keys.length&&(c=b.pointClass.prototype.optionsToObject.call({series:b},c),b.pointClass.setGanttPointAliases(c));n(c,!0)&&(c.seriesIndex=e,a.push(c))}),!0===h&&e++);return a},[]);if(c&&k.length<c)for(var l=k.length;l<=c;l++)k.push({name:l+"\u200b"});c=y(k,h||!1,!0===h?e:1);b.categories=c.categories;b.treeGrid.mapOfPosToGridNode=c.mapOfPosToGridNode;b.hasNames=!0;b.treeGrid.tree=c.tree;b.series.forEach(function(a){var b=(a.options.data||[]).map(function(b){f(b)&&a.options.keys&&a.options.keys.length&&
k.forEach(function(a){0<=b.indexOf(a.x)&&0<=b.indexOf(a.x2)&&(b=a)});return n(b,!0)?L(b):b});a.visible&&a.setData(b,!1)});b.treeGrid.mapOptionsToLevel=H({defaults:d,from:1,levels:d&&d.levels,to:b.treeGrid.tree&&b.treeGrid.tree.height});"beforeRender"===a.type&&(b.treeGrid.collapsedNodes=c.collapsedNodes)}})}function a(a,b){var c=this.treeGrid.mapOptionsToLevel||{},d=this.ticks,e=d[b],h;if("treegrid"===this.options.type&&this.treeGrid.mapOfPosToGridNode){var f=this.treeGrid.mapOfPosToGridNode[b];(c=
c[f.depth])&&(h={labels:c});!e&&l?d[b]=new l(this,b,void 0,void 0,{category:f.name,tickmarkOffset:f.tickmarkOffset,options:h}):(e.parameters.category=f.name,e.options=h,e.addLabel())}else a.apply(this,Array.prototype.slice.call(arguments,1))}function A(a,b,c){var d=this,h="treegrid"===c.type;d.treeGrid||(d.treeGrid=new e(d));h&&(t(b,"beforeRender",z),t(b,"beforeRedraw",z),t(b,"addSeries",function(a){a.options.data&&(a=y(a.options.data,c.uniqueNames||!1,1),d.treeGrid.collapsedNodes=(d.treeGrid.collapsedNodes||
[]).concat(a.collapsedNodes))}),t(d,"foundExtremes",function(){d.treeGrid.collapsedNodes&&d.treeGrid.collapsedNodes.forEach(function(a){var b=d.treeGrid.collapse(a);d.brokenAxis&&(d.brokenAxis.setBreaks(b,!1),d.treeGrid.collapsedNodes&&(d.treeGrid.collapsedNodes=d.treeGrid.collapsedNodes.filter(function(b){return a.collapseStart!==b.collapseStart||a.collapseEnd!==b.collapseEnd})))})}),t(d,"afterBreaks",function(){"yAxis"===d.coll&&!d.staticScale&&d.chart.options.chart.height&&(d.isDirty=!0)}),c=L({grid:{enabled:!0},
labels:{align:"left",levels:[{level:void 0},{level:1,style:{fontWeight:"bold"}}],symbol:{type:"triangle",x:-5,y:-5,height:10,width:10,padding:5}},uniqueNames:!1},c,{reversed:!0,grid:{columns:void 0}}));a.apply(d,[b,c]);h&&(d.hasNames=!0,d.options.showLastLabel=!0)}function E(a){var b=this.options;"treegrid"===b.type?(this.min=K(this.userMin,b.min,this.dataMin),this.max=K(this.userMax,b.max,this.dataMax),m(this,"foundExtremes"),this.setAxisTranslation(),this.tickmarkOffset=.5,this.tickInterval=1,this.tickPositions=
this.treeGrid.mapOfPosToGridNode?this.treeGrid.getTickPositions():[]):a.apply(this,Array.prototype.slice.call(arguments,1))}var H=F.getLevelOptions,t=B.addEvent,r=B.find,m=B.fireEvent,f=B.isArray,n=B.isObject,v=B.isString,L=B.merge,K=B.pick,b=B.wrap,d=[],l,e=function(){function e(a){this.axis=a}e.compose=function(e,f,k,m){if(-1===d.indexOf(e)){d.push(e);-1===e.keepProps.indexOf("treeGrid")&&e.keepProps.push("treeGrid");var h=e.prototype;b(h,"generateTick",a);b(h,"init",A);b(h,"setTickInterval",E);
h.utils={getNode:C.getNode}}-1===d.indexOf(m)&&(d.push(m),l||(l=m));w.compose(e,f,m);c.compose(e,k);u.compose(m);return e};e.prototype.setCollapsedStatus=function(a){var b=this.axis,c=b.chart;b.series.forEach(function(b){var d=b.options.data;if(a.id&&d){var e=c.get(a.id);b=d[b.data.indexOf(e)];e&&b&&(e.collapsed=a.collapsed,b.collapsed=a.collapsed)}})};e.prototype.collapse=function(a){var b=this.axis,c=b.options.breaks||[],d=p(a,b.max);c.push(d);a.collapsed=!0;b.treeGrid.setCollapsedStatus(a);return c};
e.prototype.expand=function(a){var b=this.axis,c=b.options.breaks||[],d=p(a,b.max);a.collapsed=!1;b.treeGrid.setCollapsedStatus(a);return c.reduce(function(a,b){b.to===d.to&&b.from===d.from||a.push(b);return a},[])};e.prototype.getTickPositions=function(){var a=this.axis,b=Math.floor(a.min/a.tickInterval)*a.tickInterval,c=Math.ceil(a.max/a.tickInterval)*a.tickInterval;return Object.keys(a.treeGrid.mapOfPosToGridNode||{}).reduce(function(d,e){e=+e;!(e>=b&&e<=c)||a.brokenAxis&&a.brokenAxis.isInAnyBreak(e)||
d.push(e);return d},[])};e.prototype.isCollapsed=function(a){var b=this.axis,c=b.options.breaks||[],d=p(a,b.max);return c.some(function(a){return a.from===d.from&&a.to===d.to})};e.prototype.toggleCollapse=function(a){return this.isCollapsed(a)?this.expand(a):this.collapse(a)};return e}();return e});F(c,"masters/modules/treegrid.src.js",[c["Core/Globals.js"],c["Core/Axis/TreeGrid/TreeGridAxis.js"]],function(c,w){w.compose(c.Axis,c.Chart,c.Series,c.Tick)})});
//# sourceMappingURL=treegrid.js.map