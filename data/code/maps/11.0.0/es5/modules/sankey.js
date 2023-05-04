/*
 Highcharts JS v11.0.0 (2023-04-27)

 Sankey diagram module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/sankey",["highcharts"],function(n){b(n);b.Highcharts=n;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function n(b,k,m,l){b.hasOwnProperty(k)||(b[k]=l.apply(null,m),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:k,module:b[k]}})))}b=b?b._modules:
{};n(b,"Series/NodesComposition.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,k){b=b.series;var m=b.prototype,l=b.prototype.pointClass.prototype,z=k.defined,y=k.extend,h=k.find,c=k.merge,e=k.pick,a;(function(a){function g(){this.data=[].concat(this.points||[],this.nodes);return m.destroy.apply(this,arguments)}function b(){this.nodes&&(this.nodes.forEach(function(a){a.destroy()}),this.nodes.length=0);m.setData.apply(this,arguments)}function v(a){var c=arguments,e=this.isNode?
this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==a&&e.forEach(function(a){a&&a.series&&(l.setState.apply(a,c),a.isNode||(a.fromNode.graphic&&l.setState.apply(a.fromNode,c),a.toNode&&a.toNode.graphic&&l.setState.apply(a.toNode,c)))});l.setState.apply(this,c)}function q(a,g,b,d){var f=this,x=this.series.options.nodes,A=this.series.options.data,C=A&&A.length||0,p=A&&A[this.index];l.update.call(this,a,this.isNode?!1:g,b,d);this.isNode&&(a=(x||[]).reduce(function(a,x,d){return f.id===
x.id?d:a},-1),d=c(x&&x[a]||{},A&&A[this.index]||{}),A&&(p?A[this.index]=p:A.length=C),x?0<=a?x[a]=d:x.push(d):this.series.options.nodes=[d],e(g,!0)&&this.series.chart.redraw(b))}var r=[];a.compose=function(a,c){k.pushUnique(r,a)&&(a=a.prototype,a.setNodeState=v,a.setState=v,a.update=q);k.pushUnique(r,c)&&(a=c.prototype,a.destroy=g,a.setData=b);return c};a.createNode=function(a){var c=this.pointClass,g=function(f,a){return h(f,function(f){return f.id===a})},d=g(this.nodes,a);if(!d){g=this.options.nodes&&
g(this.options.nodes,a);var f=(new c).init(this,y({className:"highcharts-node",isNode:!0,id:a,y:1},g));f.linksTo=[];f.linksFrom=[];f.getSum=function(){var a=0,d=0;f.linksTo.forEach(function(f){a+=f.weight||0});f.linksFrom.forEach(function(f){d+=f.weight||0});return Math.max(a,d)};f.offset=function(a,d){for(var c=0,x=0;x<f[d].length;x++){if(f[d][x]===a)return c;c+=f[d][x].weight}};f.hasShape=function(){var a=0;f.linksTo.forEach(function(f){f.outgoing&&a++});return!f.linksTo.length||a!==f.linksTo.length};
f.index=this.nodes.push(f)-1;d=f}d.formatPrefix="node";d.name=d.name||d.options.id||"";d.mass=e(d.options.mass,d.options.marker&&d.options.marker.radius,this.options.marker&&this.options.marker.radius,4);return d};a.destroy=g;a.generatePoints=function(){var a=this,c=this.chart,g={};m.generatePoints.call(this);this.nodes||(this.nodes=[]);this.colorCounter=0;this.nodes.forEach(function(a){a.linksFrom.length=0;a.linksTo.length=0;a.level=a.options.level});this.points.forEach(function(d){z(d.from)&&(g[d.from]||
(g[d.from]=a.createNode(d.from)),g[d.from].linksFrom.push(d),d.fromNode=g[d.from],c.styledMode?d.colorIndex=e(d.options.colorIndex,g[d.from].colorIndex):d.color=d.options.color||g[d.from].color);z(d.to)&&(g[d.to]||(g[d.to]=a.createNode(d.to)),g[d.to].linksTo.push(d),d.toNode=g[d.to]);d.name=d.name||d.id},this);this.nodeLookup=g};a.setNodeState=v;a.updateNode=q})(a||(a={}));return a});n(b,"Series/Sankey/SankeyPoint.js",[b["Core/Series/Point.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],
function(b,k,m){var l=this&&this.__extends||function(){var b=function(h,c){b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,a){c.__proto__=a}||function(c,a){for(var g in a)Object.prototype.hasOwnProperty.call(a,g)&&(c[g]=a[g])};return b(h,c)};return function(h,c){function e(){this.constructor=h}if("function"!==typeof c&&null!==c)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");b(h,c);h.prototype=null===c?Object.create(c):(e.prototype=c.prototype,
new e)}}(),z=m.defined;return function(k){function h(){var c=null!==k&&k.apply(this,arguments)||this;c.className=void 0;c.fromNode=void 0;c.level=void 0;c.linkBase=void 0;c.linksFrom=void 0;c.linksTo=void 0;c.mass=void 0;c.nodeX=void 0;c.nodeY=void 0;c.options=void 0;c.series=void 0;c.toNode=void 0;return c}l(h,k);h.prototype.applyOptions=function(c,e){b.prototype.applyOptions.call(this,c,e);z(this.options.level)&&(this.options.column=this.column=this.options.level);return this};h.prototype.getClassName=
function(){return(this.isNode?"highcharts-node ":"highcharts-link ")+b.prototype.getClassName.call(this)};h.prototype.getFromNode=function(){for(var c=-1,e,a=0;a<this.linksTo.length;a++){var g=this.linksTo[a];g.fromNode.column>c&&g.fromNode!==this&&(e=g.fromNode,c=e.column)}return{fromNode:e,fromColumn:c}};h.prototype.setNodeColumn=function(){z(this.options.column)||(this.column=0===this.linksTo.length?0:this.getFromNode().fromColumn+1)};h.prototype.isValid=function(){return this.isNode||"number"===
typeof this.weight};return h}(k.seriesTypes.column.prototype.pointClass)});n(b,"Series/Sankey/SankeySeriesDefaults.js",[],function(){"";return{borderWidth:0,colorByPoint:!0,curveFactor:.33,dataLabels:{enabled:!0,backgroundColor:"none",crop:!1,nodeFormat:void 0,nodeFormatter:function(){return this.point.name},format:void 0,formatter:function(){},inside:!0},inactiveOtherPoints:!0,linkOpacity:.5,opacity:1,minLinkWidth:0,nodeWidth:20,nodePadding:10,showInLegend:!1,states:{hover:{linkOpacity:1,opacity:1},
inactive:{linkOpacity:.1,opacity:.1,animation:{duration:50}}},tooltip:{followPointer:!0,headerFormat:'<span style="font-size: 0.8em">{series.name}</span><br/>',pointFormat:"{point.fromNode.name} \u2192 {point.toNode.name}: <b>{point.weight}</b><br/>",nodeFormat:"{point.name}: <b>{point.sum}</b><br/>"}}});n(b,"Series/Sankey/SankeyColumnComposition.js",[b["Core/Utilities.js"]],function(b){var k=b.defined,m=b.relativeLength,l;(function(b){b.compose=function(b,c){b.sankeyColumn=new l(b,c);return b};var l=
function(){function b(c,b){this.points=c;this.series=b}b.prototype.getTranslationFactor=function(c){for(var b=this.points,a=b.slice(),g=c.options.minLinkWidth||0,t=0,k,h=(c.chart.plotSizeY||0)-(c.options.borderWidth||0)-(b.length-1)*c.nodePadding;b.length;){t=h/b.sankeyColumn.sum();c=!1;for(k=b.length;k--;)b[k].getSum()*t<g&&(b.splice(k,1),h-=g,c=!0);if(!c)break}b.length=0;a.forEach(function(a){b.push(a)});return t};b.prototype.top=function(b){var c=this.series,a=c.nodePadding,g=this.points.reduce(function(g,
e){0<g&&(g+=a);e=Math.max(e.getSum()*b,c.options.minLinkWidth||0);return g+e},0);return((c.chart.plotSizeY||0)-g)/2};b.prototype.left=function(b){var c=this.series,a=c.chart,g=c.options.equalNodes,k=a.inverted?a.plotHeight:a.plotWidth,h=c.nodePadding,v=this.points.reduce(function(a,e){0<a&&(a+=h);e=g?k/e.series.nodes.length-h:Math.max(e.getSum()*b,c.options.minLinkWidth||0);return a+e},0);return((a.plotSizeX||0)-Math.round(v))/2};b.prototype.sum=function(){return this.points.reduce(function(b,e){return b+
e.getSum()},0)};b.prototype.offset=function(b,e){var a=this.points,c=this.series,h=c.nodePadding,l=0;if(c.is("organization")&&b.hangsFrom)return{absoluteTop:b.hangsFrom.nodeY};for(var v=0;v<a.length;v++){var q=a[v].getSum();var r=Math.max(q*e,c.options.minLinkWidth||0),p=b.options[c.chart.inverted?"offsetHorizontal":"offsetVertical"],w=b.options.offset||0;q=q?r+h:0;if(a[v]===b)return{relativeTop:l+(k(p)?m(p,r):m(w,q))};l+=q}};return b}();b.SankeyColumnAdditions=l})(l||(l={}));return l});n(b,"Series/TreeUtilities.js",
[b["Core/Color/Color.js"],b["Core/Utilities.js"]],function(b,k){function m(a,b){var c=b.before,g=b.idRoot,k=b.mapIdToNode[g],h=b.points[a.i],r=h&&h.options||{},p=[],w=0;a.levelDynamic=a.level-(!1!==b.levelIsConstant?0:k.level);a.name=e(h&&h.name,"");a.visible=g===a.id||!0===b.visible;"function"===typeof c&&(a=c(a,b));a.children.forEach(function(c,d){var f=l({},b);l(f,{index:d,siblings:a.children.length,visible:a.visible});c=m(c,f);p.push(c);c.visible&&(w+=c.val)});c=e(r.value,w);a.visible=0<=c&&(0<
w||a.visible);a.children=p;a.childrenTotal=w;a.isLeaf=a.visible&&!w;a.val=c;return a}var l=k.extend,n=k.isArray,y=k.isNumber,h=k.isObject,c=k.merge,e=k.pick;return{getColor:function(a,c){var g=c.index,h=c.mapOptionsToLevel,k=c.parentColor,l=c.parentColorIndex,r=c.series,p=c.colors,w=c.siblings,u=r.points,d=r.chart.options.chart,f;if(a){u=u[a.i];a=h[a.level]||{};if(h=u&&a.colorByPoint){var x=u.index%(p?p.length:d.colorCount);var A=p&&p[x]}if(!r.chart.styledMode){p=u&&u.options.color;d=a&&a.color;if(f=
k)f=(f=a&&a.colorVariation)&&"brightness"===f.key&&g&&w?b.parse(k).brighten(g/w*f.to).get():k;f=e(p,d,A,f,r.color)}var C=e(u&&u.options.colorIndex,a&&a.colorIndex,x,l,c.colorIndex)}return{color:f,colorIndex:C}},getLevelOptions:function(a){var b={};if(h(a)){var k=y(a.from)?a.from:1;var l=a.levels;var m={};var q=h(a.defaults)?a.defaults:{};n(l)&&(m=l.reduce(function(a,b){if(h(b)&&y(b.level)){var g=c({},b);var l=e(g.levelIsConstant,q.levelIsConstant);delete g.levelIsConstant;delete g.level;b=b.level+
(l?0:k-1);h(a[b])?c(!0,a[b],g):a[b]=g}return a},{}));l=y(a.to)?a.to:1;for(a=0;a<=l;a++)b[a]=c({},q,h(m[a])?m[a]:{})}return b},setTreeValues:m,updateRootId:function(a){if(h(a)){var b=h(a.options)?a.options:{};b=e(a.rootNode,b.rootId,"");h(a.userOptions)&&(a.userOptions.rootId=b);a.rootNode=b}return b}}});n(b,"Series/Sankey/SankeySeries.js",[b["Core/Color/Color.js"],b["Core/Globals.js"],b["Series/NodesComposition.js"],b["Series/Sankey/SankeyPoint.js"],b["Series/Sankey/SankeySeriesDefaults.js"],b["Core/Series/SeriesRegistry.js"],
b["Series/Sankey/SankeyColumnComposition.js"],b["Series/TreeUtilities.js"],b["Core/Utilities.js"]],function(b,k,m,l,n,y,h,c,e){var a=this&&this.__extends||function(){var a=function(b,f){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,f){a.__proto__=f}||function(a,f){for(var b in f)Object.prototype.hasOwnProperty.call(f,b)&&(a[b]=f[b])};return a(b,f)};return function(b,f){function c(){this.constructor=b}if("function"!==typeof f&&null!==f)throw new TypeError("Class extends value "+
String(f)+" is not a constructor or null");a(b,f);b.prototype=null===f?Object.create(f):(c.prototype=f.prototype,new c)}}(),g=y.series,t=y.seriesTypes.column,z=c.getLevelOptions;c=e.extend;var v=e.isObject,q=e.merge,r=e.pick,p=e.relativeLength,w=e.stableSort;e=function(c){function d(){var a=null!==c&&c.apply(this,arguments)||this;a.colDistance=void 0;a.data=void 0;a.group=void 0;a.nodeLookup=void 0;a.nodePadding=void 0;a.nodes=void 0;a.nodeWidth=void 0;a.options=void 0;a.points=void 0;a.translationFactor=
void 0;return a}a(d,c);d.getDLOptions=function(a){var b=v(a.optionsPoint)?a.optionsPoint.dataLabels:{};a=v(a.level)?a.level.dataLabels:{};return q({style:{}},a,b)};d.prototype.createNodeColumns=function(){var a=[];this.nodes.forEach(function(b){b.setNodeColumn();a[b.column]||(a[b.column]=h.compose([],this));a[b.column].push(b)},this);for(var b=0;b<a.length;b++)"undefined"===typeof a[b]&&(a[b]=h.compose([],this));return a};d.prototype.order=function(a,b){var f=this;"undefined"===typeof a.level&&(a.level=
b,a.linksFrom.forEach(function(a){a.toNode&&f.order(a.toNode,b+1)}))};d.prototype.generatePoints=function(){m.generatePoints.apply(this,arguments);var a=this;this.orderNodes&&(this.nodes.filter(function(a){return 0===a.linksTo.length}).forEach(function(b){a.order(b,0)}),w(this.nodes,function(a,b){return a.level-b.level}))};d.prototype.getNodePadding=function(){var a=this.options.nodePadding||0;if(this.nodeColumns){var b=this.nodeColumns.reduce(function(a,b){return Math.max(a,b.length)},0);b*a>this.chart.plotSizeY&&
(a=this.chart.plotSizeY/b)}return a};d.prototype.hasData=function(){return!!this.processedXData.length};d.prototype.pointAttribs=function(a,c){if(!a)return{};var f=this,d=f.mapOptionsToLevel[(a.isNode?a.level:a.fromNode.level)||0]||{},g=a.options,e=d.states&&d.states[c||""]||{};c=["colorByPoint","borderColor","borderWidth","linkOpacity","opacity"].reduce(function(a,b){a[b]=r(e[b],g[b],d[b],f.options[b]);return a},{});var k=r(e.color,g.color,c.colorByPoint?a.color:d.color);return a.isNode?{fill:k,
stroke:c.borderColor,"stroke-width":c.borderWidth,opacity:c.opacity}:{fill:b.parse(k).setOpacity(c.linkOpacity).get()}};d.prototype.drawTracker=function(){t.prototype.drawTracker.call(this,this.points);t.prototype.drawTracker.call(this,this.nodes)};d.prototype.drawPoints=function(){t.prototype.drawPoints.call(this,this.points);t.prototype.drawPoints.call(this,this.nodes)};d.prototype.drawDataLabels=function(){t.prototype.drawDataLabels.call(this,this.points);t.prototype.drawDataLabels.call(this,this.nodes)};
d.prototype.translate=function(){this.processedXData||this.processData();this.generatePoints();this.nodeColumns=this.createNodeColumns();this.nodeWidth=p(this.options.nodeWidth,this.chart.plotSizeX);var a=this,b=this.chart,c=this.options,d=this.nodeWidth,g=this.nodeColumns;this.nodePadding=this.getNodePadding();this.translationFactor=g.reduce(function(b,c){return Math.min(b,c.sankeyColumn.getTranslationFactor(a))},Infinity);this.colDistance=(b.plotSizeX-d-c.borderWidth)/Math.max(1,g.length-1);a.mapOptionsToLevel=
z({from:1,levels:c.levels,to:g.length-1,defaults:{borderColor:c.borderColor,borderRadius:c.borderRadius,borderWidth:c.borderWidth,color:a.color,colorByPoint:c.colorByPoint,levelIsConstant:!0,linkColor:c.linkColor,linkLineWidth:c.linkLineWidth,linkOpacity:c.linkOpacity,states:c.states}});g.forEach(function(b){b.forEach(function(c){a.translateNode(c,b)})},this);this.nodes.forEach(function(b){b.linksFrom.forEach(function(b){(b.weight||b.isNull)&&b.to&&(a.translateLink(b),b.allowShadow=!1)})})};d.prototype.translateLink=
function(a){var b=function(b,c){c=b.offset(a,c)*g;return Math.min(b.nodeY+c,b.nodeY+(b.shapeArgs&&b.shapeArgs.height||0)-e)},c=a.fromNode,d=a.toNode,f=this.chart,g=this.translationFactor,e=Math.max(a.weight*g,this.options.minLinkWidth),k=(f.inverted?-this.colDistance:this.colDistance)*this.options.curveFactor,h=b(c,"linksFrom");b=b(d,"linksTo");var l=c.nodeX,m=this.nodeWidth;d=d.nodeX;var p=a.outgoing,r=d>l+m;f.inverted&&(h=f.plotSizeY-h,b=(f.plotSizeY||0)-b,m=-m,e=-e,r=l>d);a.shapeType="path";a.linkBase=
[h,h+e,b,b+e];if(r&&"number"===typeof b)a.shapeArgs={d:[["M",l+m,h],["C",l+m+k,h,d-k,b,d,b],["L",d+(p?m:0),b+e/2],["L",d,b+e],["C",d-k,b+e,l+m+k,h+e,l+m,h+e],["Z"]]};else if("number"===typeof b){k=d-20-e;p=d-20;r=l+m;var n=r+20,q=n+e,v=h,t=h+e,w=t+20,y=w+(f.plotHeight-h-e),u=y+20,z=u+e,D=b,B=D+e,E=B+20,F=u+.7*e,G=d-.7*e,H=r+.7*e;a.shapeArgs={d:[["M",r,v],["C",H,v,q,t-.7*e,q,w],["L",q,y],["C",q,F,H,z,r,z],["L",d,z],["C",G,z,k,F,k,y],["L",k,E],["C",k,B-.7*e,G,D,d,D],["L",d,B],["C",p,B,p,B,p,E],["L",
p,y],["C",p,u,p,u,d,u],["L",r,u],["C",n,u,n,u,n,y],["L",n,w],["C",n,t,n,t,r,t],["Z"]]}}a.dlBox={x:l+(d-l+m)/2,y:h+(b-h)/2,height:e,width:0};a.tooltipPos=f.inverted?[f.plotSizeY-a.dlBox.y-e/2,f.plotSizeX-a.dlBox.x]:[a.dlBox.x,a.dlBox.y+e/2];a.y=a.plotY=1;a.x=a.plotX=1;a.color||(a.color=c.color)};d.prototype.translateNode=function(a,b){var c=this.translationFactor,e=this.chart,f=this.options,g=f.borderRadius,k=f.borderWidth,h=void 0===k?0:k,l=a.getSum();k=Math.max(Math.round(l*c),this.options.minLinkWidth);
var m=Math.round(this.nodeWidth),n=Math.round(h)%2/2,q=b.sankeyColumn.offset(a,c);b=Math.floor(r(q.absoluteTop,b.sankeyColumn.top(c)+q.relativeTop))+n;c=Math.floor(this.colDistance*a.column+h/2)+p(a.options.offsetHorizontal||0,m)+n;c=e.inverted?e.plotSizeX-c:c;(a.sum=l)?(a.shapeType="roundedRect",a.nodeX=c,a.nodeY=b,l=c,h=b,n=a.options.width||f.width||m,q=a.options.height||f.height||k,g=p("object"===typeof g?g.radius:g||0,n),e.inverted&&(l=c-m,h=e.plotSizeY-b-k,n=a.options.height||f.height||m,q=a.options.width||
f.width||k),a.dlOptions=d.getDLOptions({level:this.mapOptionsToLevel[a.level],optionsPoint:a.options}),a.plotX=1,a.plotY=1,a.tooltipPos=e.inverted?[e.plotSizeY-h-q/2,e.plotSizeX-l-n/2]:[l+n/2,h+q/2],a.shapeArgs={x:l,y:h,width:n,height:q,r:g,display:a.hasShape()?"":"none"}):a.dlOptions={enabled:!1}};d.defaultOptions=q(t.defaultOptions,n);return d}(t);m.compose(l,e);c(e.prototype,{animate:g.prototype.animate,createNode:m.createNode,forceDL:!0,invertible:!0,isCartesian:!1,orderNodes:!0,noSharedTooltip:!0,
pointArrayMap:["from","to","weight"],pointClass:l,searchPoint:k.noop});y.registerSeriesType("sankey",e);"";return e});n(b,"masters/modules/sankey.src.js",[],function(){})});
//# sourceMappingURL=sankey.js.map