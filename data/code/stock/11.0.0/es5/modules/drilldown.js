/*
 Highcharts JS v11.0.0 (2023-04-27)

 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/drilldown",["highcharts"],function(u){b(u);b.Highcharts=u;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function u(b,p,k,r){b.hasOwnProperty(p)||(b[p]=r.apply(null,k),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:p,module:b[p]}})))}b=b?b._modules:
{};u(b,"Extensions/Breadcrumbs/BreadcrumbsDefaults.js",[],function(){return{lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}}});u(b,"Extensions/Breadcrumbs/Breadcrumbs.js",
[b["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"],b["Core/Chart/Chart.js"],b["Core/FormatUtilities.js"],b["Core/Utilities.js"]],function(b,p,k,r){function H(){if(this.breadcrumbs){var d=this.resetZoomButton&&this.resetZoomButton.getBBox(),e=this.breadcrumbs.options;d&&"right"===e.position.align&&"plotBox"===e.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-d.width-e.buttonSpacing)}}function u(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function I(){var d=this.breadcrumbs;
if(d&&!d.options.floating&&d.level){var e=d.options,g=e.buttonTheme;g=(g.height||0)+2*(g.padding||0)+e.buttonSpacing;e=e.position.verticalAlign;"bottom"===e?(this.marginBottom=(this.marginBottom||0)+g,d.yOffset=g):"middle"!==e?(this.plotTop+=g,d.yOffset=-g):d.yOffset=void 0}}function z(){this.breadcrumbs&&this.breadcrumbs.redraw()}function C(d){!0===d.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}var x=k.format,A=r.addEvent,D=r.defined,n=r.extend,E=r.fireEvent,P=r.isString,
y=r.merge,F=r.objectEach,m=r.pick,w=[];k=function(){function d(e,g){this.elementList={};this.isDirty=!0;this.level=0;this.list=[];g=y(e.options.drilldown&&e.options.drilldown.drillUpButton,d.defaultOptions,e.options.navigation&&e.options.navigation.breadcrumbs,g);this.chart=e;this.options=g||{}}d.compose=function(e,g){r.pushUnique(w,e)&&(A(p,"destroy",u),A(p,"afterShowResetZoom",H),A(p,"getMargins",I),A(p,"redraw",z),A(p,"selection",C));r.pushUnique(w,g)&&n(g.lang,b.lang)};d.prototype.updateProperties=
function(e){this.setList(e);this.setLevel();this.isDirty=!0};d.prototype.setList=function(e){this.list=e};d.prototype.setLevel=function(){this.level=this.list.length&&this.list.length-1};d.prototype.getLevel=function(){return this.level};d.prototype.getButtonText=function(e){var g=this.chart,d=this.options,b=g.options.lang,k=m(d.format,d.showFullPath?"{level.name}":"\u2190 {level.name}");b=b&&m(b.drillUpText,b.mainBreadcrumb);e=d.formatter&&d.formatter(e)||x(k,{level:e.levelOptions},g)||"";(P(e)&&
!e.length||"\u2190 "===e)&&D(b)&&(e=d.showFullPath?b:"\u2190 "+b);return e};d.prototype.redraw=function(){this.isDirty&&this.render();this.group&&this.group.align();this.isDirty=!1};d.prototype.render=function(){var e=this.chart,g=this.options;!this.group&&g&&(this.group=e.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:g.zIndex}).add());g.showFullPath?this.renderFullPathButtons():this.renderSingleButton();this.alignBreadcrumbsGroup()};d.prototype.renderFullPathButtons=
function(){this.destroySingleButton();this.resetElementListState();this.updateListElements();this.destroyListElements()};d.prototype.renderSingleButton=function(){var e=this.chart,g=this.list,d=this.options.buttonSpacing;this.destroyListElements();var b=this.group?this.group.getBBox().width:d;g=g[g.length-2];!e.drillUpButton&&0<this.level?e.drillUpButton=this.renderButton(g,b,d):e.drillUpButton&&(0<this.level?this.updateSingleButton():this.destroySingleButton())};d.prototype.alignBreadcrumbsGroup=
function(e){if(this.group){var g=this.options,d=g.buttonTheme,b=g.position,k="chart"===g.relativeTo||"spacingBox"===g.relativeTo?void 0:"scrollablePlotBox",h=this.group.getBBox();g=2*(d.padding||0)+g.buttonSpacing;b.width=h.width+g;b.height=h.height+g;h=y(b);e&&(h.x+=e);this.options.rtl&&(h.x+=b.width);h.y=m(h.y,this.yOffset,0);this.group.align(h,!0,k)}};d.prototype.renderButton=function(e,g,d){var b=this,k=this.chart,h=b.options,m=y(h.buttonTheme);g=k.renderer.button(b.getButtonText(e),g,d,function(g){var d=
h.events&&h.events.click,c;d&&(c=d.call(b,g,e));!1!==c&&(g.newLevel=h.showFullPath?e.level:b.level-1,E(b,"up",g))},m).addClass("highcharts-breadcrumbs-button").add(b.group);k.styledMode||g.attr(h.style);return g};d.prototype.renderSeparator=function(e,g){var b=this.chart,d=this.options.separator;e=b.renderer.label(d.text,e,g,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);b.styledMode||e.css(d.style);return e};d.prototype.update=function(e){y(!0,this.options,
e);this.destroy();this.isDirty=!0};d.prototype.updateSingleButton=function(){var e=this.chart,g=this.list[this.level-1];e.drillUpButton&&e.drillUpButton.attr({text:this.getButtonText(g)})};d.prototype.destroy=function(){this.destroySingleButton();this.destroyListElements(!0);this.group&&this.group.destroy();this.group=void 0};d.prototype.destroyListElements=function(e){var g=this.elementList;F(g,function(b,d){if(e||!g[d].updated)b=g[d],b.button&&b.button.destroy(),b.separator&&b.separator.destroy(),
delete b.button,delete b.separator,delete g[d]});e&&(this.elementList={})};d.prototype.destroySingleButton=function(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),this.chart.drillUpButton=void 0)};d.prototype.resetElementListState=function(){F(this.elementList,function(b){b.updated=!1})};d.prototype.updateListElements=function(){for(var b=this.elementList,d=this.options.buttonSpacing,k=this.list,m=this.options.rtl,p=m?-1:1,h=function(a,c){return p*a.getBBox().width+p*c},r=function(a,
c,f){a.translate(c-a.getBBox().width,f)},n=this.group?h(this.group,d):d,q,c,a=0,f=k.length;a<f;++a){var t=a===f-1,l=void 0;q=void 0;c=k[a];b[c.level]?(q=b[c.level],l=q.button,q.separator||t?q.separator&&t&&(q.separator.destroy(),delete q.separator):(n+=p*d,q.separator=this.renderSeparator(n,d),m&&r(q.separator,n,d),n+=h(q.separator,d)),b[c.level].updated=!0):(l=this.renderButton(c,n,d),m&&r(l,n,d),n+=h(l,d),t||(q=this.renderSeparator(n,d),m&&r(q,n,d),n+=h(q,d)),b[c.level]={button:l,separator:q,updated:!0});
l&&l.setState(t?2:0)}};d.defaultOptions=b.options;return d}();"";return k});u(b,"Extensions/Drilldown.js",[b["Core/Animation/AnimationUtilities.js"],b["Core/Axis/Axis.js"],b["Core/Chart/Chart.js"],b["Core/Color/Color.js"],b["Series/Column/ColumnSeries.js"],b["Core/Globals.js"],b["Core/Defaults.js"],b["Core/Series/Point.js"],b["Core/Series/Series.js"],b["Core/Series/SeriesRegistry.js"],b["Core/Renderer/SVG/SVGRenderer.js"],b["Core/Axis/Tick.js"],b["Core/Utilities.js"],b["Extensions/Breadcrumbs/Breadcrumbs.js"]],
function(b,p,k,r,u,O,I,z,C,x,A,D,n,E){function H(c){var a=y(this.chart.options.drilldown.animation);c&&(c.hide(),K(function(){c&&c.added&&c.fadeIn()},Math.max(a.duration-50,0)))}var y=b.animObject,F=O.noop;b=I.defaultOptions;x=x.seriesTypes;var m=n.addEvent,w=n.extend,d=n.fireEvent,e=n.merge,g=n.objectEach,B=n.pick,Q=n.removeEvent,K=n.syncTimeout;n=x.pie;x=x.map;var h=1;w(b.lang,{});b.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",
color:"#0022ff",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}},mapZooming:!0};A.prototype.Element.prototype.fadeIn=function(c){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:B(this.newOpacity,1)},c||{duration:250})};k.prototype.addSeriesAsDrilldown=function(c,a){var f=this;if(f.mapView)if(c.series.isDrilling=!0,c.series.options.inactiveOtherPoints=!0,f.options.drilldown&&f.options.drilldown.animation&&f.options.drilldown.mapZooming){c.series.dataLabelsGroup&&
(c.series.dataLabelsGroup.destroy(),delete c.series.dataLabelsGroup);f.mapView.allowTransformAnimation=!0;var t=y(f.options.drilldown.animation);if("boolean"!==typeof t){var b=t.complete,d=function(b){b&&b.applyDrilldown&&f.mapView&&(f.addSingleSeriesAsDrilldown(c,a),f.applyDrilldown(),f.mapView.allowTransformAnimation=!1)};t.complete=function(){b&&b.apply(this,arguments);d.apply(this,arguments)}}c.zoomTo(t)}else f.addSingleSeriesAsDrilldown(c,a),f.applyDrilldown();else f.addSingleSeriesAsDrilldown(c,
a),f.applyDrilldown()};k.prototype.addSingleSeriesAsDrilldown=function(c,a){var f=c.series,b=f.xAxis,d=f.yAxis,g=[],J=[],v;var G=this.styledMode?{colorIndex:B(c.colorIndex,f.colorIndex)}:{color:c.color||f.color};this.drilldownLevels||(this.drilldownLevels=[]);var k=f.options._levelNumber||0;(v=this.drilldownLevels[this.drilldownLevels.length-1])&&v.levelNumber!==k&&(v=void 0);a=w(w({_ddSeriesId:h++},G),a);var m=f.points.indexOf(c);f.chart.series.forEach(function(a){a.xAxis===b&&(a.options._ddSeriesId=
a.options._ddSeriesId||h++,a.options._colorIndex=a.userOptions._colorIndex,a.options._levelNumber=a.options._levelNumber||k,v?(g=v.levelSeries,J=v.levelSeriesOptions):(g.push(a),a.purgedOptions=e({_ddSeriesId:a.options._ddSeriesId,_levelNumber:a.options._levelNumber,selected:a.options.selected},a.userOptions),J.push(a.purgedOptions)))});c=w({levelNumber:k,seriesOptions:f.options,seriesPurgedOptions:f.purgedOptions,levelSeriesOptions:J,levelSeries:g,shapeArgs:c.shapeArgs,bBox:c.graphic?c.graphic.getBBox():
{},color:c.isNull?r.parse(G.color).setOpacity(0).get():G.color,lowerSeriesOptions:a,pointOptions:f.options.data[m],pointIndex:m,oldExtremes:{xMin:b&&b.userMin,xMax:b&&b.userMax,yMin:d&&d.userMin,yMax:d&&d.userMax},resetZoomButton:v&&v.levelNumber===k?void 0:this.resetZoomButton},G);this.drilldownLevels.push(c);b&&b.names&&(b.names.length=0);a=c.lowerSeries=this.addSeries(a,!1);a.options._levelNumber=k+1;b&&(b.oldPos=b.pos,b.userMin=b.userMax=null,d.userMin=d.userMax=null);a.isDrilling=!0;f.type===
a.type&&(a.animate=a.animateDrilldown||F,a.options.animation=!0)};k.prototype.applyDrilldown=function(){var c=this,a=this.drilldownLevels;if(a&&0<a.length){var f=a[a.length-1].levelNumber;this.drilldownLevels.forEach(function(a){c.mapView&&c.options.drilldown&&c.options.drilldown.mapZooming&&(c.redraw(),a.lowerSeries.isDrilling=!1,c.mapView.fitToBounds(a.lowerSeries.bounds),a.lowerSeries.isDrilling=!0);a.levelNumber===f&&a.levelSeries.forEach(function(a,b){c.mapView?a.options&&a.options._levelNumber===
f&&a.group&&(b={},c.options.drilldown&&(b=c.options.drilldown.animation),a.group.animate({opacity:0},b,function(){a.remove(!1);c.resetZoomButton&&(c.resetZoomButton.hide(),delete c.resetZoomButton);c.pointer.reset();d(c,"afterDrilldown");c.mapView&&(c.series.forEach(function(a){a.isDirtyData=!0}),c.mapView.setView(void 0,1));c.series.forEach(function(a){a.isDrilling=!1});d(c,"afterApplyDrilldown")})):a.options&&a.options._levelNumber===f&&a.remove(!1)})})}c.mapView||(this.resetZoomButton&&(this.resetZoomButton.hide(),
delete this.resetZoomButton),this.pointer.reset(),d(this,"afterDrilldown"),this.redraw(),d(this,"afterApplyDrilldown"))};var L=function(c){var a=[];(c=c.drilldownLevels)&&c.length&&(a[0]||a.push({level:0,levelOptions:c[0].seriesOptions}),c.forEach(function(c,b){c.levelNumber+1>a[a.length-1].level&&a.push({level:c.levelNumber+1,levelOptions:e({name:c.lowerSeries.name},c.pointOptions)})}));return a};k.prototype.drillUp=function(c){if(this.drilldownLevels&&0!==this.drilldownLevels.length){d(this,"beforeDrillUp");
for(var a=this,b=a.drilldownLevels,t=b[b.length-1].levelNumber,e=a.series,g=a.drilldownLevels.length,k=function(c,b){e.forEach(function(a){a.options._ddSeriesId===c._ddSeriesId&&(f=a)});var f=f||a.addSeries(c,!1);f.type===b.type&&f.animateDrillupTo&&(f.animate=f.animateDrillupTo);if(c===h.seriesPurgedOptions)return f},v=function(c){c.remove(!1);a.series.forEach(function(a){a.colorAxis&&(a.isDirtyData=!0);a.options.inactiveOtherPoints=!1});a.redraw()},m=b.length,n,h,p,r=function(){var f;h=b[m];if(h.levelNumber===
t){b.pop();var l=h.lowerSeries;if(!l.chart)for(n=e.length;n--;)if(e[n].options.id===h.lowerSeriesOptions.id&&e[n].options._levelNumber===t+1){l=e[n];break}l.xData=[];l.xAxis&&l.xAxis.names&&(0===g||m===g)&&(l.xAxis.names.length=0);h.levelSeriesOptions.forEach(function(a){f=k(a,l)});d(a,"drillup",{seriesOptions:h.seriesPurgedOptions||h.seriesOptions});f&&(f.type===l.type&&(f.drilldownLevel=h,f.options.animation=a.options.drilldown.animation,l.animateDrillupFrom&&l.chart&&l.animateDrillupFrom(h)),f.options._levelNumber=
t);a.mapView||l.remove(!1);f&&f.xAxis&&(p=h.oldExtremes,f.xAxis.setExtremes(p.xMin,p.xMax,!1),f.yAxis.setExtremes(p.yMin,p.yMax,!1));h.resetZoomButton&&(a.resetZoomButton=h.resetZoomButton);if(q.mapView){var N=a.options.drilldown&&a.options.drilldown.animation&&a.options.drilldown.mapZooming;h.levelNumber===t&&c?l.remove(!1):(l.dataLabelsGroup&&(l.dataLabelsGroup.destroy(),delete l.dataLabelsGroup),a.mapView&&f&&(N&&(l.isDrilling=!0,f.isDrilling=!0,a.redraw(!1),a.mapView.fitToBounds(l.bounds,void 0,
!0,!1)),a.mapView.allowTransformAnimation=!0,d(a,"afterDrillUp",{seriesOptions:f?f.userOptions:void 0}),N?a.mapView.setView(void 0,1,!0,{complete:function(){Object.prototype.hasOwnProperty.call(this,"complete")&&v(l)}}):(a.mapView.allowTransformAnimation=!1,l.group?l.group.animate({opacity:0},a.options.drilldown.animation,function(){v(l);a.mapView&&(a.mapView.allowTransformAnimation=!0)}):(v(l),a.mapView.allowTransformAnimation=!0)),f.isDrilling=!1,a.ddDupes&&(a.ddDupes.length=0),d(a,"drillupall")))}else d(a,
"afterDrillUp"),q.redraw(),q.ddDupes&&(q.ddDupes.length=0),d(a,"drillupall")}},q=this;m--;)r()}};m(k,"afterInit",function(){var c=this;c.drilldown={chart:c,fadeInGroup:H,update:function(a,f){e(!0,c.options.drilldown,a);B(f,!0)&&c.redraw()}}});m(k,"render",function(){(this.xAxis||[]).forEach(function(c){c.ddPoints={};c.series.forEach(function(a){var f,b=a.xData||[],d=a.points;for(f=0;f<b.length;f++){var e=a.options.data[f];"number"!==typeof e&&(e=a.pointClass.prototype.optionsToObject.call({series:a},
e),e.drilldown&&(c.ddPoints[b[f]]||(c.ddPoints[b[f]]=[]),e=f-(a.cropStart||0),c.ddPoints[b[f]].push(d&&0<=e&&e<d.length?d[e]:!0)))}});g(c.ticks,D.prototype.drillable)})});m(E,"up",function(c){var a=this.chart;c=this.getLevel()-c.newLevel;for(var b=1<c,d=0;d<c;d++)d===c-1&&(b=!1),a.drillUp(b)});m(k,"afterDrilldown",function(){var c=this.options.drilldown;c=c&&c.breadcrumbs;this.breadcrumbs||(this.breadcrumbs=new E(this,c));this.breadcrumbs.updateProperties(L(this))});m(k,"afterDrillUp",function(){this.breadcrumbs&&
this.breadcrumbs.updateProperties(L(this))});m(k,"update",function(c){var a=this.breadcrumbs,b=c.options.drilldown&&c.options.drilldown.breadcrumbs;a&&b&&a.update(c.options.drilldown.breadcrumbs)});u.prototype.animateDrillupTo=function(c){if(!c){var a=this,b=a.drilldownLevel;this.points.forEach(function(a){var c=a.dataLabel;a.graphic&&a.graphic.hide();c&&(c.hidden="hidden"===c.attr("visibility"),c.hidden||(c.hide(),a.connector&&a.connector.hide()))});K(function(){if(a.points){var c=[];a.data.forEach(function(a){c.push(a)});
a.nodes&&(c=c.concat(a.nodes));c.forEach(function(a,c){c=c===(b&&b.pointIndex)?"show":"fadeIn";var f="show"===c?!0:void 0,d=a.dataLabel;if(a.graphic&&a.visible)a.graphic[c](f);d&&!d.hidden&&(d.fadeIn(),a.connector&&a.connector.fadeIn())})}},Math.max(this.chart.options.drilldown.animation.duration-50,0));delete this.animate}};u.prototype.animateDrilldown=function(c){var a=this,b=this.chart,d=b.drilldownLevels,e,g=y(b.options.drilldown.animation),h=this.xAxis,k=b.styledMode;c||(d.forEach(function(c){a.options._ddSeriesId===
c.lowerSeriesOptions._ddSeriesId&&(e=c.shapeArgs,k||(e.fill=c.color))}),e.x+=B(h.oldPos,h.pos)-h.pos,this.points.forEach(function(c){var b=c.shapeArgs;k||(b.fill=c.color);c.graphic&&c.graphic.attr(e).animate(w(c.shapeArgs,{fill:c.color||a.color}),g)}),b.drilldown&&b.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate)};u.prototype.animateDrillupFrom=function(c){var a=y(this.chart.options.drilldown.animation),b=this.group,d=b!==this.chart.columnGroup,g=this;g.trackerGroups.forEach(function(a){if(g[a])g[a].on("mouseover")});
d&&delete this.group;this.points.forEach(function(f){var l=f.graphic,h=c.shapeArgs,t=function(){l.destroy();b&&d&&(b=b.destroy())};l&&h&&(delete f.graphic,g.chart.styledMode||(h.fill=c.color),a.duration?l.animate(h,e(a,{complete:t})):(l.attr(h),t()))})};n&&w(n.prototype,{animateDrillupTo:u.prototype.animateDrillupTo,animateDrillupFrom:u.prototype.animateDrillupFrom,animateDrilldown:function(c){var a=this.chart.drilldownLevels[this.chart.drilldownLevels.length-1],b=this.chart.options.drilldown.animation;
this.is("item")&&(b.duration=0);if(this.center){var d=a.shapeArgs,g=d.start,h=(d.end-g)/this.points.length,k=this.chart.styledMode;c||(this.points.forEach(function(c,f){var l=c.shapeArgs;k||(d.fill=a.color,l.fill=c.color);if(c.graphic)c.graphic.attr(e(d,{start:g+f*h,end:g+(f+1)*h}))[b?"animate":"attr"](l,b)}),this.chart.drilldown&&this.chart.drilldown.fadeInGroup(this.dataLabelsGroup),delete this.animate)}}});x&&w(x.prototype,{animateDrilldown:function(c){var a=this,b=this.chart,d=this.group;b&&d&&
a.options&&(c&&b.mapView?(d.attr({opacity:.01}),b.mapView.allowTransformAnimation=!1,a.options.inactiveOtherPoints=!0,a.options.enableMouseTracking=!1):(d.animate({opacity:1},b.options.drilldown.animation,function(){a.options&&(a.options.inactiveOtherPoints=!1,a.options.enableMouseTracking=B(a.userOptions&&a.userOptions.enableMouseTracking,!0))}),b.drilldown&&b.drilldown.fadeInGroup(this.dataLabelsGroup)))},animateDrillupFrom:function(){var c=this.chart;c&&c.mapView&&(c.mapView.allowTransformAnimation=
!1);this.options&&(this.options.inactiveOtherPoints=!0)},animateDrillupTo:function(c){var a=this.chart,b=this.group;a&&b&&(c?(b.attr({opacity:.01}),this.options&&(this.options.inactiveOtherPoints=!0)):(b.animate({opacity:1},a.options.drilldown.animation),a.drilldown&&a.drilldown.fadeInGroup(this.dataLabelsGroup)))}});z.prototype.doDrilldown=function(){this.runDrilldown()};z.prototype.runDrilldown=function(c,a,b){var f=this.series.chart,e=f.options.drilldown,g=(e.series||[]).length;f.ddDupes||(f.ddDupes=
[]);for(;g--&&!h;)if(e.series[g].id===this.drilldown&&-1===f.ddDupes.indexOf(this.drilldown)){var h=e.series[g];f.ddDupes.push(this.drilldown)}d(f,"drilldown",{point:this,seriesOptions:h,category:a,originalEvent:b,points:"undefined"!==typeof a&&this.series.xAxis.getDDPoints(a).slice(0)},function(a){var b=a.point.series&&a.point.series.chart,d=a.seriesOptions;b&&d&&(c?b.addSingleSeriesAsDrilldown(a.point,d):b.addSeriesAsDrilldown(a.point,d))})};p.prototype.drilldownCategory=function(c,a){this.getDDPoints(c).forEach(function(b){b&&
b.series&&b.series.visible&&b.runDrilldown&&b.runDrilldown(!0,c,a)});this.chart.applyDrilldown()};p.prototype.getDDPoints=function(c){return this.ddPoints&&this.ddPoints[c]||[]};D.prototype.drillable=function(){var c=this.pos,a=this.label,b=this.axis,d="xAxis"===b.coll&&b.getDDPoints,g=d&&b.getDDPoints(c),h=b.chart.styledMode;d&&(a&&g&&g.length?(a.drillable=!0,a.basicStyles||h||(a.basicStyles=e(a.styles)),a.addClass("highcharts-drilldown-axis-label"),a.removeOnDrillableClick&&Q(a.element,"click"),
a.removeOnDrillableClick=m(a.element,"click",function(a){a.preventDefault();b.drilldownCategory(c,a)}),h||a.css(b.chart.options.drilldown.activeAxisLabelStyle)):a&&a.drillable&&a.removeOnDrillableClick&&(h||(a.styles={},a.element.removeAttribute("style"),a.css(a.basicStyles)),a.removeOnDrillableClick(),a.removeClass("highcharts-drilldown-axis-label")))};m(z,"afterInit",function(){this.drilldown&&!this.unbindDrilldownClick&&(this.unbindDrilldownClick=m(this,"click",M));return this});m(z,"update",function(c){c=
c.options||{};c.drilldown&&!this.unbindDrilldownClick?this.unbindDrilldownClick=m(this,"click",M):!c.drilldown&&void 0!==c.drilldown&&this.unbindDrilldownClick&&(this.unbindDrilldownClick=this.unbindDrilldownClick())});var M=function(c){var a=this.series;a.xAxis&&!1===a.chart.options.drilldown.allowPointDrilldown?a.xAxis.drilldownCategory(this.x,c):this.runDrilldown(void 0,void 0,c)};m(C,"afterDrawDataLabels",function(){var c=this.chart.options.drilldown.activeDataLabelStyle,a=this.chart.renderer,
b=this.chart.styledMode;this.points.forEach(function(d){var e=d.options.dataLabels,f=B(d.dlOptions,e&&e.style,{});d.drilldown&&d.dataLabel&&("contrast"!==c.color||b||(f.color=a.getContrast(d.color||this.color)),e&&e.color&&(f.color=e.color),d.dataLabel.addClass("highcharts-drilldown-data-label"),b||d.dataLabel.css(c).css(f))},this)});var q=function(c,a,b,d){c[b?"addClass":"removeClass"]("highcharts-drilldown-point");d||c.css({cursor:a})};m(C,"afterDrawTracker",function(){var c=this.chart.styledMode;
this.points.forEach(function(a){a.drilldown&&a.graphic&&q(a.graphic,"pointer",!0,c)})});m(z,"afterSetState",function(){var c=this.series.chart.styledMode;this.drilldown&&this.series.halo&&"hover"===this.state?q(this.series.halo,"pointer",!0,c):this.series.halo&&q(this.series.halo,"auto",!1,c)});m(k,"drillup",function(){this.resetZoomButton&&(this.resetZoomButton=this.resetZoomButton.destroy())});m(k,"drillupall",function(){this.resetZoomButton&&this.showResetZoom()})});u(b,"masters/modules/drilldown.src.js",
[b["Core/Globals.js"],b["Extensions/Breadcrumbs/Breadcrumbs.js"]],function(b,p){b.Breadcrumbs=p;p.compose(b.Chart,b.defaultOptions)})});
//# sourceMappingURL=drilldown.js.map