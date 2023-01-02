/*
 Highcharts JS v10.2.1 (2022-10-13)

 (c) 2014-2021 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/treemap",["highcharts"],function(u){a(u);a.Highcharts=u;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function u(a,d,b,m){a.hasOwnProperty(d)||(a[d]=m.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:a[d]}})))}a=a?a._modules:{};u(a,
"Series/ColorMapComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d){var b=a.seriesTypes.column.prototype,m=d.addEvent,l=d.defined,n;(function(a){function d(c){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:c&&"hover"===c.state?1:0})}var k=[];a.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value&&(void 0===this.value||!isNaN(this.value))}};a.seriesMembers=
{colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(c){var g={};!l(c.color)||c.state&&"normal"!==c.state||(g[this.colorProp||"fill"]=c.color);return g},pointAttribs:b.pointAttribs};a.compose=function(c){var g=c.prototype.pointClass;-1===k.indexOf(g)&&(k.push(g),m(g,"afterSetState",d));return c}})(n||(n={}));return n});u(a,"Series/Treemap/TreemapAlgorithmGroup.js",
[],function(){return function(){function a(a,b,m,l){this.height=a;this.width=b;this.plot=l;this.startDirection=this.direction=m;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,b){return Math.max(a/b,b/a)}}}a.prototype.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),
this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};a.prototype.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0};return a}()});u(a,"Series/DrawPointUtilities.js",[a["Core/Utilities.js"]],
function(a){return{draw:function(a,b){var d=b.animatableAttribs,l=b.onComplete,n=b.css,p=b.renderer,f=a.series&&a.series.chart.hasRendered?void 0:a.series&&a.series.options.animation,k=a.graphic;b.attribs=b.attribs||{};b.attribs["class"]=a.getClassName();if(a.shouldDraw())k||(a.graphic=k="text"===b.shapeType?p.text():p[b.shapeType](b.shapeArgs||{}),k.add(b.group)),n&&k.css(n),k.attr(b.attribs).animate(d,b.isNew?!1:f,l);else if(k){var c=function(){a.graphic=k=k&&k.destroy();"function"===typeof l&&
l()};Object.keys(d).length?k.animate(d,void 0,function(){return c()}):c()}}}});u(a,"Series/Treemap/TreemapPoint.js",[a["Series/DrawPointUtilities.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d,b){var m=this&&this.__extends||function(){var a=function(c,b){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var h in c)c.hasOwnProperty(h)&&(a[h]=c[h])};return a(c,b)};return function(c,b){function g(){this.constructor=
c}a(c,b);c.prototype=null===b?Object.create(b):(g.prototype=b.prototype,new g)}}(),l=d.series.prototype.pointClass,n=d.seriesTypes;d=n.pie.prototype.pointClass;var p=b.extend,f=b.isNumber,k=b.pick;b=function(c){function g(){var a=null!==c&&c.apply(this,arguments)||this;a.name=void 0;a.node=void 0;a.options=void 0;a.series=void 0;a.shapeType="rect";a.value=void 0;return a}m(g,c);g.prototype.draw=function(c){a.draw(this,c)};g.prototype.getClassName=function(){var a=l.prototype.getClassName.call(this),
c=this.series,g=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||k(g.interactByLeaf,!g.allowTraversingTree)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a};g.prototype.isValid=function(){return!(!this.id&&!f(this.value))};g.prototype.setState=function(a){l.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})};g.prototype.shouldDraw=function(){return f(this.plotY)&&
null!==this.y};return g}(n.scatter.prototype.pointClass);p(b.prototype,{setVisible:d.prototype.setVisible});return b});u(a,"Series/Treemap/TreemapUtilities.js",[a["Core/Utilities.js"]],function(a){var d=a.objectEach,b;(function(a){function b(a,d,f){void 0===f&&(f=this);a=d.call(f,a);!1!==a&&b(a,d,f)}a.AXIS_MAX=100;a.isBoolean=function(a){return"boolean"===typeof a};a.eachObject=function(a,b,f){f=f||this;d(a,function(d,c){b.call(f,d,c,a)})};a.recursive=b})(b||(b={}));return b});u(a,"Series/TreeUtilities.js",
[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,d){function b(a,g){var c=g.before,d=g.idRoot,v=g.mapIdToNode[d],h=g.points[a.i],r=h&&h.options||{},w=[],x=0;a.levelDynamic=a.level-(!1!==g.levelIsConstant?0:v.level);a.name=k(h&&h.name,"");a.visible=d===a.id||!0===g.visible;"function"===typeof c&&(a=c(a,g));a.children.forEach(function(h,c){var r=m({},g);m(r,{index:c,siblings:a.children.length,visible:a.visible});h=b(h,r);w.push(h);h.visible&&(x+=h.val)});c=k(r.value,x);a.visible=0<=c&&(0<
x||a.visible);a.children=w;a.childrenTotal=x;a.isLeaf=a.visible&&!x;a.val=c;return a}var m=d.extend,l=d.isArray,n=d.isNumber,p=d.isObject,f=d.merge,k=d.pick;return{getColor:function(c,b){var g=b.index,d=b.mapOptionsToLevel,v=b.parentColor,h=b.parentColorIndex,r=b.series,w=b.colors,x=b.siblings,f=r.points,l=r.chart.options.chart,m;if(c){f=f[c.i];c=d[c.level]||{};if(d=f&&c.colorByPoint){var p=f.index%(w?w.length:l.colorCount);var n=w&&w[p]}if(!r.chart.styledMode){w=f&&f.options.color;l=c&&c.color;if(m=
v)m=(m=c&&c.colorVariation)&&"brightness"===m.key&&g&&x?a.parse(v).brighten(g/x*m.to).get():v;m=k(w,l,n,m,r.color)}var A=k(f&&f.options.colorIndex,c&&c.colorIndex,p,h,b.colorIndex)}return{color:m,colorIndex:A}},getLevelOptions:function(a){var b={};if(p(a)){var c=n(a.from)?a.from:1;var d=a.levels;var v={};var h=p(a.defaults)?a.defaults:{};l(d)&&(v=d.reduce(function(a,b){if(p(b)&&n(b.level)){var r=f({},b);var d=k(r.levelIsConstant,h.levelIsConstant);delete r.levelIsConstant;delete r.level;b=b.level+
(d?0:c-1);p(a[b])?f(!0,a[b],r):a[b]=r}return a},{}));d=n(a.to)?a.to:1;for(a=0;a<=d;a++)b[a]=f({},h,p(v[a])?v[a]:{})}return b},setTreeValues:b,updateRootId:function(a){if(p(a)){var b=p(a.options)?a.options:{};b=k(a.rootNode,b.rootId,"");p(a.userOptions)&&(a.userOptions.rootId=b);a.rootNode=b}return b}}});u(a,"Extensions/Breadcrumbs.js",[a["Core/Chart/Chart.js"],a["Core/Globals.js"],a["Core/DefaultOptions.js"],a["Core/Utilities.js"],a["Core/FormatUtilities.js"]],function(a,d,b,m,l){var n=l.format;l=
m.addEvent;var p=m.objectEach,f=m.extend,k=m.fireEvent,c=m.merge,g=m.pick,u=m.defined,F=m.isString;f(b.defaultOptions.lang,{mainBreadcrumb:"Main"});b=function(){function a(h,b){this.group=void 0;this.list=[];this.elementList={};this.isDirty=!0;this.level=0;this.options=void 0;b=c(h.options.drilldown&&h.options.drilldown.drillUpButton,a.defaultBreadcrumbsOptions,h.options.navigation&&h.options.navigation.breadcrumbs,b);this.chart=h;this.options=b||{}}a.prototype.updateProperties=function(a){this.setList(a);
this.setLevel();this.isDirty=!0};a.prototype.setList=function(a){this.list=a};a.prototype.setLevel=function(){this.level=this.list.length&&this.list.length-1};a.prototype.getLevel=function(){return this.level};a.prototype.getButtonText=function(a){var b=this.chart,h=this.options,c=b.options.lang,d=g(h.format,h.showFullPath?"{level.name}":"\u2190 {level.name}");c=c&&g(c.drillUpText,c.mainBreadcrumb);a=h.formatter&&h.formatter(a)||n(d,{level:a.levelOptions},b)||"";(F(a)&&!a.length||"\u2190 "===a)&&
u(c)&&(a=h.showFullPath?c:"\u2190 "+c);return a};a.prototype.redraw=function(){this.isDirty&&this.render();this.group&&this.group.align();this.isDirty=!1};a.prototype.render=function(){var a=this.chart,b=this.options;!this.group&&b&&(this.group=a.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:b.zIndex}).add());b.showFullPath?this.renderFullPathButtons():this.renderSingleButton();this.alignBreadcrumbsGroup()};a.prototype.renderFullPathButtons=
function(){this.destroySingleButton();this.resetElementListState();this.updateListElements();this.destroyListElements()};a.prototype.renderSingleButton=function(){var a=this.chart,b=this.list,c=this.options.buttonSpacing;this.destroyListElements();var d=this.group?this.group.getBBox().width:c;b=b[b.length-2];!a.drillUpButton&&0<this.level?a.drillUpButton=this.renderButton(b,d,c):a.drillUpButton&&(0<this.level?this.updateSingleButton():this.destroySingleButton())};a.prototype.alignBreadcrumbsGroup=
function(a){if(this.group){var b=this.options,h=b.buttonTheme,d=b.position,f="chart"===b.relativeTo||"spacingBox"===b.relativeTo?void 0:"scrollablePlotBox",k=this.group.getBBox();b=2*(h.padding||0)+b.buttonSpacing;d.width=k.width+b;d.height=k.height+b;k=c(d);a&&(k.x+=a);this.options.rtl&&(k.x+=d.width);k.y=g(k.y,this.yOffset,0);this.group.align(k,!0,f)}};a.prototype.renderButton=function(a,b,d){var h=this,g=this.chart,f=h.options,r=c(f.buttonTheme);b=g.renderer.button(h.getButtonText(a),b,d,function(b){var c=
f.events&&f.events.click,d;c&&(d=c.call(h,b,a));!1!==d&&(b.newLevel=f.showFullPath?a.level:h.level-1,k(h,"up",b))},r).addClass("highcharts-breadcrumbs-button").add(h.group);g.styledMode||b.attr(f.style);return b};a.prototype.renderSeparator=function(a,b){var c=this.chart,h=this.options.separator;a=c.renderer.label(h.text,a,b,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);c.styledMode||a.css(h.style);return a};a.prototype.update=function(a){c(!0,this.options,
a);this.destroy();this.isDirty=!0};a.prototype.updateSingleButton=function(){var a=this.chart,b=this.list[this.level-1];a.drillUpButton&&a.drillUpButton.attr({text:this.getButtonText(b)})};a.prototype.destroy=function(){this.destroySingleButton();this.destroyListElements(!0);this.group&&this.group.destroy();this.group=void 0};a.prototype.destroyListElements=function(a){var b=this.elementList;p(b,function(c,h){if(a||!b[h].updated)c=b[h],c.button&&c.button.destroy(),c.separator&&c.separator.destroy(),
delete c.button,delete c.separator,delete b[h]});a&&(this.elementList={})};a.prototype.destroySingleButton=function(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)};a.prototype.resetElementListState=function(){p(this.elementList,function(a){a.updated=!1})};a.prototype.updateListElements=function(){var a=this,b=a.elementList,c=a.options.buttonSpacing,d=a.list,f=a.options.rtl,g=f?-1:1,k=function(a,b){return g*a.getBBox().width+g*b},m=a.group?k(a.group,
c):c,l;d.forEach(function(h,p){p=p===d.length-1;if(b[h.level]){l=b[h.level];var r=l.button;if(l.separator||p)l.separator&&p&&(l.separator.destroy(),delete l.separator);else{m+=g*c;l.separator=a.renderSeparator(m,c);if(f){var n=l.separator;n.translate(m-n.getBBox().width,c)}m+=k(l.separator,c)}b[h.level].updated=!0}else r=a.renderButton(h,m,c),f&&r.translate(m-r.getBBox().width,c),m+=k(r,c),p||(n=a.renderSeparator(m,c),f&&n.translate(m-n.getBBox().width,c),m+=k(n,c)),b[h.level]={button:r,separator:n,
updated:!0};r&&r.setState(p?2:0)})};a.defaultBreadcrumbsOptions={buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#335cad"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7};return a}();d.Breadcrumbs||(d.Breadcrumbs=b,l(a,"getMargins",function(){var a=this.breadcrumbs;
if(a&&!a.options.floating&&a.level){var b=a.options,c=b.buttonTheme;c=(c.height||0)+2*(c.padding||0)+b.buttonSpacing;b=b.position.verticalAlign;"bottom"===b?(this.marginBottom=(this.marginBottom||0)+c,a.yOffset=c):"middle"!==b?(this.plotTop+=c,a.yOffset=-c):a.yOffset=void 0}}),l(a,"redraw",function(){this.breadcrumbs&&this.breadcrumbs.redraw()}),l(a,"destroy",function(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}),l(a,"afterShowResetZoom",function(){if(this.breadcrumbs){var a=
this.resetZoomButton&&this.resetZoomButton.getBBox(),b=this.breadcrumbs.options;a&&"right"===b.position.align&&"plotBox"===b.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-a.width-b.buttonSpacing)}}),l(a,"selection",function(a){!0===a.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}));"";return b});u(a,"Series/Treemap/TreemapComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Treemap/TreemapUtilities.js"],a["Core/Utilities.js"]],function(a,d,b){var m=b.addEvent,
l=b.extend,n=!1;m(a.series,"afterBindAxes",function(){var a=this.xAxis,b=this.yAxis;if(a&&b)if(this.is("treemap")){var k={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:d.AXIS_MAX,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]};l(b.options,k);l(a.options,k);n=!0}else n&&(b.setOptions(b.userOptions),a.setOptions(a.userOptions),n=!1)})});u(a,"Series/Treemap/TreemapNode.js",[],function(){return function(){function a(){this.childrenTotal=0;this.visible=!1}a.prototype.init=
function(a,b,m,l,n,p,f){this.id=a;this.i=b;this.children=m;this.height=l;this.level=n;this.series=p;this.parent=f;return this};return a}()});u(a,"Series/Treemap/TreemapSeries.js",[a["Core/Color/Color.js"],a["Series/ColorMapComposition.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Treemap/TreemapAlgorithmGroup.js"],a["Series/Treemap/TreemapPoint.js"],a["Series/Treemap/TreemapUtilities.js"],a["Series/TreeUtilities.js"],a["Extensions/Breadcrumbs.js"],
a["Core/Utilities.js"],a["Series/Treemap/TreemapNode.js"]],function(a,d,b,m,l,n,p,f,k,c,g,u){var F=this&&this.__extends||function(){var a=function(b,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var b in e)e.hasOwnProperty(b)&&(a[b]=e[b])};return a(b,e)};return function(b,e){function q(){this.constructor=b}a(b,e);b.prototype=null===e?Object.create(e):(q.prototype=e.prototype,new q)}}(),v=a.parse;a=b.noop;var h=l.series;b=l.seriesTypes;
var r=b.column,w=b.heatmap,x=b.scatter,J=k.getColor,K=k.getLevelOptions,L=k.updateRootId,C=g.addEvent,M=g.correctFloat,A=g.defined,N=g.error,E=g.extend,O=g.fireEvent,I=g.isArray,P=g.isObject,H=g.isString,z=g.merge,y=g.pick,Q=g.stableSort;k=function(a){function b(){var b=null!==a&&a.apply(this,arguments)||this;b.axisRatio=void 0;b.data=void 0;b.mapOptionsToLevel=void 0;b.nodeMap=void 0;b.nodeList=void 0;b.options=void 0;b.points=void 0;b.rootNode=void 0;b.tree=void 0;b.level=void 0;return b}F(b,a);
b.prototype.algorithmCalcPoints=function(a,b,c,d){var e,q,t,h,G=c.lW,g=c.lH,f=c.plot,k=0,m=c.elArr.length-1;if(b)G=c.nW,g=c.nH;else var l=c.elArr[c.elArr.length-1];c.elArr.forEach(function(a){if(b||k<m)0===c.direction?(e=f.x,q=f.y,t=G,h=a/t):(e=f.x,q=f.y,h=g,t=a/h),d.push({x:e,y:q,width:t,height:M(h)}),0===c.direction?f.y+=h:f.x+=t;k+=1});c.reset();0===c.direction?c.width-=G:c.height-=g;f.y=f.parent.y+(f.parent.height-c.height);f.x=f.parent.x+(f.parent.width-c.width);a&&(c.direction=1-c.direction);
b||c.addElement(l)};b.prototype.algorithmFill=function(a,b,c){var e=[],q,t=b.direction,d=b.x,f=b.y,h=b.width,g=b.height,k,m,l,n;c.forEach(function(c){q=c.val/b.val*b.height*b.width;k=d;m=f;0===t?(n=g,l=q/n,h-=l,d+=l):(l=h,n=q/l,g-=n,f+=n);e.push({x:k,y:m,width:l,height:n});a&&(t=1-t)});return e};b.prototype.algorithmLowAspectRatio=function(a,b,c){var e=[],q=this,t,d={x:b.x,y:b.y,parent:b},f=0,h=c.length-1,g=new n(b.height,b.width,b.direction,d);c.forEach(function(c){t=c.val/b.val*b.height*b.width;
g.addElement(t);g.lP.nR>g.lP.lR&&q.algorithmCalcPoints(a,!1,g,e,d);f===h&&q.algorithmCalcPoints(a,!0,g,e,d);f+=1});return e};b.prototype.alignDataLabel=function(a,b,c){var e=c.style;e&&!A(e.textOverflow)&&b.text&&b.getBBox().width>b.text.textWidth&&b.css({textOverflow:"ellipsis",width:e.width+="px"});r.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})};b.prototype.calculateChildrenAreas=function(a,b){var e=this,c=e.options,q=e.mapOptionsToLevel[a.level+
1],B=y(e[q&&q.layoutAlgorithm]&&q.layoutAlgorithm,c.layoutAlgorithm),d=c.alternateStartingDirection,h=[];a=a.children.filter(function(a){return!a.ignore});q&&q.layoutStartingDirection&&(b.direction="vertical"===q.layoutStartingDirection?0:1);h=e[B](b,a);a.forEach(function(a,c){c=h[c];a.values=z(c,{val:a.childrenTotal,direction:d?1-b.direction:b.direction});a.pointValues=z(c,{x:c.x/e.axisRatio,y:f.AXIS_MAX-c.y-c.height,width:c.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})};
b.prototype.createList=function(a){var b=this.chart,e=[];if(b.breadcrumbs){var c=0;e.push({level:c,levelOptions:b.series[0]});b=a.target.nodeMap[a.newRootId];for(var d=[];b.parent||""===b.parent;)d.push(b),b=a.target.nodeMap[b.parent];d.reverse().forEach(function(a){e.push({level:++c,levelOptions:a})});1>=e.length&&(e.length=0)}return e};b.prototype.drawDataLabels=function(){var a=this,b=a.mapOptionsToLevel,c,d;a.points.filter(function(a){return a.node.visible}).forEach(function(e){d=b[e.node.level];
c={style:{}};e.node.isLeaf||(c.enabled=!1);d&&d.dataLabels&&(c=z(c,d.dataLabels),a._hasPointLabels=!0);e.shapeArgs&&(c.style.width=e.shapeArgs.width,e.dataLabel&&e.dataLabel.css({width:e.shapeArgs.width+"px"}));e.dlOptions=z(c,e.options.dataLabels)});h.prototype.drawDataLabels.call(this)};b.prototype.drawPoints=function(a){void 0===a&&(a=this.points);var b=this,e=b.chart,c=e.renderer,d=e.styledMode,B=b.options,h=d?{}:B.shadow,f=B.borderRadius,g=e.pointCount<B.animationLimit,k=B.allowTraversingTree;
a.forEach(function(a){var e=a.node.levelDynamic,q={},t={},l={},D="level-group-"+a.node.level,m=!!a.graphic,R=g&&m,n=a.shapeArgs;a.shouldDraw()&&(a.isInside=!0,f&&(t.r=f),z(!0,R?q:t,m?n:{},d?{}:b.pointAttribs(a,a.selected?"select":void 0)),b.colorAttribs&&d&&E(l,b.colorAttribs(a)),b[D]||(b[D]=c.g(D).attr({zIndex:1E3-(e||0)}).add(b.group),b[D].survive=!0));a.draw({animatableAttribs:q,attribs:t,css:l,group:b[D],renderer:c,shadow:h,shapeArgs:n,shapeType:a.shapeType});k&&a.graphic&&(a.drillId=B.interactByLeaf?
b.drillToByLeaf(a):b.drillToByGroup(a))})};b.prototype.drillToByGroup=function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b};b.prototype.drillToByLeaf=function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b};b.prototype.drillToNode=function(a,b){N(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"});this.setRootNode(a,b)};b.prototype.drillUp=
function(){var a=this.nodeMap[this.rootNode];a&&H(a.parent)&&this.setRootNode(a.parent,!0,{trigger:"traverseUpButton"})};b.prototype.getExtremes=function(){var a=h.prototype.getExtremes.call(this,this.colorValueData),b=a.dataMax;this.valueMin=a.dataMin;this.valueMax=b;return h.prototype.getExtremes.call(this)};b.prototype.getListOfParents=function(a,b){a=I(a)?a:[];var c=I(b)?b:[];b=a.reduce(function(a,b,c){b=y(b.parent,"");"undefined"===typeof a[b]&&(a[b]=[]);a[b].push(c);return a},{"":[]});f.eachObject(b,
function(a,b,e){""!==b&&-1===c.indexOf(b)&&(a.forEach(function(a){e[""].push(a)}),delete e[b])});return b};b.prototype.getTree=function(){var a=this.data.map(function(a){return a.id});a=this.getListOfParents(this.data,a);this.nodeMap={};this.nodeList=[];return this.buildTree("",-1,0,a)};b.prototype.buildTree=function(a,b,c,d,f){var e=this,h=[],q=e.points[b],g=0,t;(d[a]||[]).forEach(function(b){t=e.buildTree(e.points[b].id,b,c+1,d,a);g=Math.max(t.height+1,g);h.push(t)});var k=(new e.NodeClass).init(a,
b,h,g,c,e,f);h.forEach(function(a){a.parentNode=k});e.nodeMap[k.id]=k;e.nodeList.push(k);q&&(q.node=k,k.point=q);return k};b.prototype.hasData=function(){return!!this.processedXData.length};b.prototype.init=function(a,b){var e=this,d=z(b.drillUpButton,b.breadcrumbs);var f=C(e,"setOptions",function(a){a=a.userOptions;A(a.allowDrillToNode)&&!A(a.allowTraversingTree)&&(a.allowTraversingTree=a.allowDrillToNode,delete a.allowDrillToNode);A(a.drillUpButton)&&!A(a.traverseUpButton)&&(a.traverseUpButton=
a.drillUpButton,delete a.drillUpButton)});h.prototype.init.call(e,a,b);delete e.opacity;e.eventsToUnbind.push(f);e.options.allowTraversingTree&&(e.eventsToUnbind.push(C(e,"click",e.onClickDrillToNode)),e.eventsToUnbind.push(C(e,"setRootNode",function(a){var b=e.chart;b.breadcrumbs&&b.breadcrumbs.updateProperties(e.createList(a))})),e.eventsToUnbind.push(C(e,"update",function(a,b){(b=this.chart.breadcrumbs)&&a.options.breadcrumbs&&b.update(a.options.breadcrumbs)})),e.eventsToUnbind.push(C(e,"destroy",
function(a){var b=this.chart;b.breadcrumbs&&(b.breadcrumbs.destroy(),a.keepEventsForUpdate||(b.breadcrumbs=void 0))})));a.breadcrumbs||(a.breadcrumbs=new c(a,d));e.eventsToUnbind.push(C(a.breadcrumbs,"up",function(a){a=this.level-a.newLevel;for(var b=0;b<a;b++)e.drillUp()}))};b.prototype.onClickDrillToNode=function(a){var b=(a=a.point)&&a.drillId;H(b)&&(a.setState(""),this.setRootNode(b,!0,{trigger:"click"}))};b.prototype.pointAttribs=function(a,b){var c=P(this.mapOptionsToLevel)?this.mapOptionsToLevel:
{},e=a&&c[a.node.level]||{};c=this.options;var d=b&&c.states&&c.states[b]||{},f=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||e.borderColor||d.borderColor||c.borderColor,"stroke-width":y(a&&a.borderWidth,e.borderWidth,d.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||e.borderDashStyle||d.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==f.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==f.indexOf("highcharts-internal-node-interactive")?
(b=y(d.opacity,c.opacity),a.fill=v(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==f.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=v(a.fill).brighten(d.brightness).get());return a};b.prototype.setColorRecursive=function(a,b,c,d,f){var e=this,h=e&&e.chart;h=h&&h.options&&h.options.colors;if(a){var g=J(a,{colors:h,index:d,mapOptionsToLevel:e.mapOptionsToLevel,parentColor:b,parentColorIndex:c,series:e,siblings:f});if(b=e.points[a.i])b.color=g.color,b.colorIndex=g.colorIndex;(a.children||
[]).forEach(function(b,c){e.setColorRecursive(b,g.color,g.colorIndex,c,a.children.length)})}};b.prototype.setPointValues=function(){var a=this,b=a.xAxis,c=a.yAxis,d=a.chart.styledMode;a.points.forEach(function(e){var f=e.node,h=f.pointValues;f=f.visible;if(h&&f){f=h.height;var g=h.width,k=h.x,q=h.y,l=d?0:(a.pointAttribs(e)["stroke-width"]||0)%2/2;h=Math.round(b.toPixels(k,!0))-l;g=Math.round(b.toPixels(k+g,!0))-l;k=Math.round(c.toPixels(q,!0))-l;f=Math.round(c.toPixels(q+f,!0))-l;f={x:Math.min(h,
g),y:Math.min(k,f),width:Math.abs(g-h),height:Math.abs(f-k)};e.plotX=f.x+f.width/2;e.plotY=f.y+f.height/2;e.shapeArgs=f}else delete e.plotX,delete e.plotY})};b.prototype.setRootNode=function(a,b,c){a=E({newRootId:a,previousRootId:this.rootNode,redraw:y(b,!0),series:this},c);O(this,"setRootNode",a,function(a){var b=a.series;b.idPreviousRoot=a.previousRootId;b.rootNode=a.newRootId;b.isDirty=!0;a.redraw&&b.chart.redraw()})};b.prototype.setState=function(a){this.options.inactiveOtherPoints=!0;h.prototype.setState.call(this,
a,!1);this.options.inactiveOtherPoints=!1};b.prototype.setTreeValues=function(a){var b=this,c=b.options,e=b.nodeMap[b.rootNode];c=f.isBoolean(c.levelIsConstant)?c.levelIsConstant:!0;var d=0,h=[],g=b.points[a.i];a.children.forEach(function(a){a=b.setTreeValues(a);h.push(a);a.ignore||(d+=a.val)});Q(h,function(a,b){return(a.sortIndex||0)-(b.sortIndex||0)});var k=y(g&&g.options.value,d);g&&(g.value=k);E(a,{children:h,childrenTotal:d,ignore:!(y(g&&g.visible,!0)&&0<k),isLeaf:a.visible&&!d,levelDynamic:a.level-
(c?0:e.level),name:y(g&&g.name,""),sortIndex:y(g&&g.sortIndex,-k),val:k});return a};b.prototype.sliceAndDice=function(a,b){return this.algorithmFill(!0,a,b)};b.prototype.squarified=function(a,b){return this.algorithmLowAspectRatio(!0,a,b)};b.prototype.strip=function(a,b){return this.algorithmLowAspectRatio(!1,a,b)};b.prototype.stripes=function(a,b){return this.algorithmFill(!1,a,b)};b.prototype.translate=function(){var a=this,b=a.options,c=L(a);h.prototype.translate.call(a);var d=a.tree=a.getTree();
var g=a.nodeMap[c];""===c||g&&g.children.length||(a.setRootNode("",!1),c=a.rootNode,g=a.nodeMap[c]);a.mapOptionsToLevel=K({from:g.level+1,levels:b.levels,to:d.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});f.recursive(a.nodeMap[a.rootNode],function(b){var c=!1,d=b.parent;b.visible=!0;if(d||""===d)c=a.nodeMap[d];return c});f.recursive(a.nodeMap[a.rootNode].children,function(a){var b=!1;a.forEach(function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});
return b});a.setTreeValues(d);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=c={x:0,y:0,width:f.AXIS_MAX,height:f.AXIS_MAX};a.nodeMap[""].values=c=z(c,{width:c.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:d.val});a.calculateChildrenAreas(d,c);a.colorAxis||b.colorByPoint||a.setColorRecursive(a.tree);b.allowTraversingTree&&(b=g.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());
a.setPointValues()};b.defaultOptions=z(x.defaultOptions,{allowTraversingTree:!1,animationLimit:250,borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){var a=this&&this.point?this.point:{};return H(a.name)?a.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,
levelIsConstant:!0,traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:w?0:.1,halo:!1,opacity:.75,shadow:!1}}});return b}(x);E(k.prototype,{buildKDTree:a,colorAttribs:d.seriesMembers.colorAttribs,colorKey:"colorValue",directTouch:!0,drawLegendSymbol:m.drawRectangle,getExtremesFromAll:!0,getSymbol:a,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value"],
pointClass:p,NodeClass:u,trackerGroups:["group","dataLabelsGroup"],utils:{recursive:f.recursive}});d.compose(k);l.registerSeriesType("treemap",k);"";return k});u(a,"masters/modules/treemap.src.js",[a["Core/Globals.js"],a["Extensions/Breadcrumbs.js"]],function(a,d){a.Breadcrumbs=d})});
//# sourceMappingURL=treemap.js.map