/*
 Highcharts JS v11.0.0 (2023-04-27)

 (c) 2014-2021 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
'use strict';var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.arrayIteratorImpl=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}};$jscomp.arrayIterator=function(a){return{next:$jscomp.arrayIteratorImpl(a)}};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.SIMPLE_FROUND_POLYFILL=!1;$jscomp.ISOLATE_POLYFILLS=!1;
$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};$jscomp.getGlobal=function(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");};$jscomp.global=$jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX="jscomp_symbol_";$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.SymbolClass=function(a,b){this.$jscomp$symbol$id_=a;$jscomp.defineProperty(this,"description",{configurable:!0,writable:!0,value:b})};$jscomp.SymbolClass.prototype.toString=function(){return this.$jscomp$symbol$id_};
$jscomp.Symbol=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new $jscomp.SymbolClass($jscomp.SYMBOL_PREFIX+(c||"")+"_"+b++,c)}var b=0;return a}();
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.iteratorPrototype($jscomp.arrayIteratorImpl(this))}});$jscomp.initSymbolIterator=function(){}};
$jscomp.initSymbolAsyncIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.asyncIterator;a||(a=$jscomp.global.Symbol.asyncIterator=$jscomp.global.Symbol("Symbol.asyncIterator"));$jscomp.initSymbolAsyncIterator=function(){}};$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};
$jscomp.iteratorFromArray=function(a,b){$jscomp.initSymbolIterator();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d};$jscomp.polyfills={};$jscomp.propertyToPolyfillSymbol={};$jscomp.POLYFILL_PREFIX="$jscp$";$jscomp.IS_SYMBOL_NATIVE="function"===typeof Symbol&&"symbol"===typeof Symbol("x");
var $jscomp$lookupPolyfilledValue=function(a,b){var c=$jscomp.propertyToPolyfillSymbol[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]};$jscomp.polyfill=function(a,b,c,d){b&&($jscomp.ISOLATE_POLYFILLS?$jscomp.polyfillIsolated(a,b,c,d):$jscomp.polyfillUnisolated(a,b,c,d))};
$jscomp.polyfillUnisolated=function(a,b,c,d){c=$jscomp.global;a=a.split(".");for(d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})};
$jscomp.polyfillIsolated=function(a,b,c,d){var e=a.split(".");a=1===e.length;d=e[0];d=!a&&d in $jscomp.polyfills?$jscomp.polyfills:$jscomp.global;for(var w=0;w<e.length-1;w++){var n=e[w];n in d||(d[n]={});d=d[n]}e=e[e.length-1];c=$jscomp.IS_SYMBOL_NATIVE&&"es6"===c?d[e]:null;b=b(c);null!=b&&(a?$jscomp.defineProperty($jscomp.polyfills,e,{configurable:!0,writable:!0,value:b}):b!==c&&($jscomp.propertyToPolyfillSymbol[e]=$jscomp.IS_SYMBOL_NATIVE?$jscomp.global.Symbol(e):$jscomp.POLYFILL_PREFIX+e,e=$jscomp.propertyToPolyfillSymbol[e],
$jscomp.defineProperty(d,e,{configurable:!0,writable:!0,value:b})))};$jscomp.polyfill("Array.prototype.values",function(a){return a?a:function(){return $jscomp.iteratorFromArray(this,function(a,c){return c})}},"es8","es3");
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/treemap",["highcharts"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,d,e,b){a.hasOwnProperty(d)||(a[d]=b.apply(null,e),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,module:a[d]}})))}a=a?a._modules:{};b(a,
"Series/ColorMapComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d){const {column:{prototype:c}}=a.seriesTypes,{addEvent:b,defined:n}=d;var f;(function(a){function e(a){this.moveToTopOnHover&&this.graphic&&this.graphic.attr({zIndex:a&&"hover"===a.state?1:0})}const f=[];a.pointMembers={dataLabelOnNull:!0,moveToTopOnHover:!0,isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value&&(void 0===this.value||!isNaN(this.value))}};a.seriesMembers=
{colorKey:"value",axisTypes:["xAxis","yAxis","colorAxis"],parallelArrays:["x","y","value"],pointArrayMap:["value"],trackerGroups:["group","markerGroup","dataLabelsGroup"],colorAttribs:function(a){const d={};!n(a.color)||a.state&&"normal"!==a.state||(d[this.colorProp||"fill"]=a.color);return d},pointAttribs:c.pointAttribs};a.compose=function(a){const g=a.prototype.pointClass;d.pushUnique(f,g)&&b(g,"afterSetState",e);return a}})(f||(f={}));return f});b(a,"Series/Treemap/TreemapAlgorithmGroup.js",[],
function(){class a{constructor(a,c,b,n){this.height=a;this.width=c;this.plot=n;this.startDirection=this.direction=b;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,d){return Math.max(a/d,d/a)}}}addElement(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=
this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)}reset(){this.lW=this.nW=0;this.elArr=[];this.total=0}}return a});b(a,"Series/DrawPointUtilities.js",[a["Core/Utilities.js"]],function(a){return{draw:function(a,c){const {animatableAttribs:d,onComplete:b,
css:e,renderer:m}=c,k=a.series&&a.series.chart.hasRendered?void 0:a.series&&a.series.options.animation;let l=a.graphic;c.attribs=Object.assign(Object.assign({},c.attribs),{"class":a.getClassName()})||{};if(a.shouldDraw())l||(a.graphic=l="text"===c.shapeType?m.text():m[c.shapeType](c.shapeArgs||{}),l.add(c.group)),e&&l.css(e),l.attr(c.attribs).animate(d,c.isNew?!1:k,b);else if(l){const c=()=>{a.graphic=l=l&&l.destroy();"function"===typeof b&&b()};Object.keys(d).length?l.animate(d,void 0,()=>c()):c()}}}});
b(a,"Series/Treemap/TreemapPoint.js",[a["Series/DrawPointUtilities.js"],a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d,b){const {series:{prototype:{pointClass:c}},seriesTypes:{pie:{prototype:{pointClass:e}},scatter:{prototype:{pointClass:f}}}}=d,{extend:m,isNumber:k,pick:l}=b;class g extends f{constructor(){super(...arguments);this.series=this.options=this.node=this.name=void 0;this.shapeType="rect";this.value=void 0}draw(c){a.draw(this,c)}getClassName(){let a=c.prototype.getClassName.call(this),
d=this.series,g=d.options;this.node.level<=d.nodeMap[d.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||l(g.interactByLeaf,!g.allowTraversingTree)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a}isValid(){return!(!this.id&&!k(this.value))}setState(a){c.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})}shouldDraw(){return k(this.plotY)&&null!==this.y}}m(g.prototype,{setVisible:e.prototype.setVisible});
return g});b(a,"Series/Treemap/TreemapUtilities.js",[a["Core/Utilities.js"]],function(a){const {objectEach:c}=a;var b;(function(a){function d(a,c,b=this){a=c.call(b,a);!1!==a&&d(a,c,b)}a.AXIS_MAX=100;a.isBoolean=function(a){return"boolean"===typeof a};a.eachObject=function(a,d,b){b=b||this;c(a,function(c,g){d.call(b,c,g,a)})};a.recursive=d})(b||(b={}));return b});b(a,"Series/TreeUtilities.js",[a["Core/Color/Color.js"],a["Core/Utilities.js"]],function(a,b){function c(a,b){var g=b.before;const e=b.idRoot,
k=b.mapIdToNode[e],r=b.points[a.i],m=r&&r.options||{},y=[];let f=0;a.levelDynamic=a.level-(!1!==b.levelIsConstant?0:k.level);a.name=l(r&&r.name,"");a.visible=e===a.id||!0===b.visible;"function"===typeof g&&(a=g(a,b));a.children.forEach((g,e)=>{const t=d({},b);d(t,{index:e,siblings:a.children.length,visible:a.visible});g=c(g,t);y.push(g);g.visible&&(f+=g.val)});g=l(m.value,f);a.visible=0<=g&&(0<f||a.visible);a.children=y;a.childrenTotal=f;a.isLeaf=a.visible&&!f;a.val=g;return a}const {extend:d,isArray:n,
isNumber:f,isObject:m,merge:k,pick:l}=b;return{getColor:function(b,c){const d=c.index;var g=c.mapOptionsToLevel;const e=c.parentColor,k=c.parentColorIndex,f=c.series;var m=c.colors;const r=c.siblings;var u=f.points,n=f.chart.options.chart;let t;var v;let z;if(b){u=u[b.i];b=g[b.level]||{};if(g=u&&b.colorByPoint){t=u.index%(m?m.length:n.colorCount);var K=m&&m[t]}if(!f.chart.styledMode){m=u&&u.options.color;n=b&&b.color;if(v=e)v=(v=b&&b.colorVariation)&&"brightness"===v.key&&d&&r?a.parse(e).brighten(d/
r*v.to).get():e;v=l(m,n,K,v,f.color)}z=l(u&&u.options.colorIndex,b&&b.colorIndex,t,k,c.colorIndex)}return{color:v,colorIndex:z}},getLevelOptions:function(a){let b={},c,d,e;if(m(a)){e=f(a.from)?a.from:1;var g=a.levels;d={};c=m(a.defaults)?a.defaults:{};n(g)&&(d=g.reduce((a,b)=>{let d,g;m(b)&&f(b.level)&&(g=k({},b),d=l(g.levelIsConstant,c.levelIsConstant),delete g.levelIsConstant,delete g.level,b=b.level+(d?0:e-1),m(a[b])?k(!0,a[b],g):a[b]=g);return a},{}));g=f(a.to)?a.to:1;for(a=0;a<=g;a++)b[a]=k({},
c,m(d[a])?d[a]:{})}return b},setTreeValues:c,updateRootId:function(a){if(m(a)){var b=m(a.options)?a.options:{};b=l(a.rootNode,b.rootId,"");m(a.userOptions)&&(a.userOptions.rootId=b);a.rootNode=b}return b}}});b(a,"Extensions/Breadcrumbs/BreadcrumbsDefaults.js",[],function(){return{lang:{mainBreadcrumb:"Main"},options:{buttonTheme:{fill:"none",height:18,padding:2,"stroke-width":0,zIndex:7,states:{select:{fill:"none"}},style:{color:"#334eff"}},buttonSpacing:5,floating:!1,format:void 0,relativeTo:"plotBox",
rtl:!1,position:{align:"left",verticalAlign:"top",x:0,y:void 0},separator:{text:"/",style:{color:"#666666",fontSize:"0.8em"}},showFullPath:!0,style:{},useHTML:!1,zIndex:7}}});b(a,"Extensions/Breadcrumbs/Breadcrumbs.js",[a["Extensions/Breadcrumbs/BreadcrumbsDefaults.js"],a["Core/Chart/Chart.js"],a["Core/FormatUtilities.js"],a["Core/Utilities.js"]],function(a,b,e,w){function c(){if(this.breadcrumbs){const a=this.resetZoomButton&&this.resetZoomButton.getBBox(),b=this.breadcrumbs.options;a&&"right"===
b.position.align&&"plotBox"===b.relativeTo&&this.breadcrumbs.alignBreadcrumbsGroup(-a.width-b.buttonSpacing)}}function d(){this.breadcrumbs&&(this.breadcrumbs.destroy(),this.breadcrumbs=void 0)}function m(){const a=this.breadcrumbs;if(a&&!a.options.floating&&a.level){var b=a.options,c=b.buttonTheme;c=(c.height||0)+2*(c.padding||0)+b.buttonSpacing;b=b.position.verticalAlign;"bottom"===b?(this.marginBottom=(this.marginBottom||0)+c,a.yOffset=c):"middle"!==b?(this.plotTop+=c,a.yOffset=-c):a.yOffset=void 0}}
function k(){this.breadcrumbs&&this.breadcrumbs.redraw()}function l(a){!0===a.resetSelection&&this.breadcrumbs&&this.breadcrumbs.alignBreadcrumbsGroup()}const {format:g}=e,{addEvent:r,defined:I,extend:P,fireEvent:Q,isString:J,merge:B,objectEach:y,pick:D}=w,u=[];class E{static compose(t,v){w.pushUnique(u,t)&&(r(b,"destroy",d),r(b,"afterShowResetZoom",c),r(b,"getMargins",m),r(b,"redraw",k),r(b,"selection",l));w.pushUnique(u,v)&&P(v.lang,a.lang)}constructor(a,b){this.elementList={};this.isDirty=!0;this.level=
0;this.list=[];b=B(a.options.drilldown&&a.options.drilldown.drillUpButton,E.defaultOptions,a.options.navigation&&a.options.navigation.breadcrumbs,b);this.chart=a;this.options=b||{}}updateProperties(a){this.setList(a);this.setLevel();this.isDirty=!0}setList(a){this.list=a}setLevel(){this.level=this.list.length&&this.list.length-1}getLevel(){return this.level}getButtonText(a){const b=this.chart,c=this.options;var d=b.options.lang;const e=D(c.format,c.showFullPath?"{level.name}":"\u2190 {level.name}");
d=d&&D(d.drillUpText,d.mainBreadcrumb);a=c.formatter&&c.formatter(a)||g(e,{level:a.levelOptions},b)||"";(J(a)&&!a.length||"\u2190 "===a)&&I(d)&&(a=c.showFullPath?d:"\u2190 "+d);return a}redraw(){this.isDirty&&this.render();this.group&&this.group.align();this.isDirty=!1}render(){const a=this.chart,b=this.options;!this.group&&b&&(this.group=a.renderer.g("breadcrumbs-group").addClass("highcharts-no-tooltip highcharts-breadcrumbs").attr({zIndex:b.zIndex}).add());b.showFullPath?this.renderFullPathButtons():
this.renderSingleButton();this.alignBreadcrumbsGroup()}renderFullPathButtons(){this.destroySingleButton();this.resetElementListState();this.updateListElements();this.destroyListElements()}renderSingleButton(){const a=this.chart;var b=this.list;const c=this.options.buttonSpacing;this.destroyListElements();const d=this.group?this.group.getBBox().width:c;b=b[b.length-2];!a.drillUpButton&&0<this.level?a.drillUpButton=this.renderButton(b,d,c):a.drillUpButton&&(0<this.level?this.updateSingleButton():this.destroySingleButton())}alignBreadcrumbsGroup(a){if(this.group){var b=
this.options;const d=b.buttonTheme,e=b.position,g="chart"===b.relativeTo||"spacingBox"===b.relativeTo?void 0:"scrollablePlotBox";var c=this.group.getBBox();b=2*(d.padding||0)+b.buttonSpacing;e.width=c.width+b;e.height=c.height+b;c=B(e);a&&(c.x+=a);this.options.rtl&&(c.x+=e.width);c.y=D(c.y,this.yOffset,0);this.group.align(c,!0,g)}}renderButton(a,b,c){const d=this,e=this.chart,g=d.options,t=B(g.buttonTheme);b=e.renderer.button(d.getButtonText(a),b,c,function(b){const c=g.events&&g.events.click;let e;
c&&(e=c.call(d,b,a));!1!==e&&(b.newLevel=g.showFullPath?a.level:d.level-1,Q(d,"up",b))},t).addClass("highcharts-breadcrumbs-button").add(d.group);e.styledMode||b.attr(g.style);return b}renderSeparator(a,b){const c=this.chart,d=this.options.separator;a=c.renderer.label(d.text,a,b,void 0,void 0,void 0,!1).addClass("highcharts-breadcrumbs-separator").add(this.group);c.styledMode||a.css(d.style);return a}update(a){B(!0,this.options,a);this.destroy();this.isDirty=!0}updateSingleButton(){const a=this.chart,
b=this.list[this.level-1];a.drillUpButton&&a.drillUpButton.attr({text:this.getButtonText(b)})}destroy(){this.destroySingleButton();this.destroyListElements(!0);this.group&&this.group.destroy();this.group=void 0}destroyListElements(a){const b=this.elementList;y(b,(c,d)=>{if(a||!b[d].updated)c=b[d],c.button&&c.button.destroy(),c.separator&&c.separator.destroy(),delete c.button,delete c.separator,delete b[d]});a&&(this.elementList={})}destroySingleButton(){this.chart.drillUpButton&&(this.chart.drillUpButton.destroy(),
this.chart.drillUpButton=void 0)}resetElementListState(){y(this.elementList,a=>{a.updated=!1})}updateListElements(){const a=this.elementList,b=this.options.buttonSpacing,c=this.list,d=this.options.rtl,e=d?-1:1,g=function(a,b){return e*a.getBBox().width+e*b},m=function(a,b,c){a.translate(b-a.getBBox().width,c)};let f=this.group?g(this.group,b):b,k,l;for(let n=0,t=c.length;n<t;++n){const r=n===t-1;let h,p;l=c[n];a[l.level]?(k=a[l.level],h=k.button,k.separator||r?k.separator&&r&&(k.separator.destroy(),
delete k.separator):(f+=e*b,k.separator=this.renderSeparator(f,b),d&&m(k.separator,f,b),f+=g(k.separator,b)),a[l.level].updated=!0):(h=this.renderButton(l,f,b),d&&m(h,f,b),f+=g(h,b),r||(p=this.renderSeparator(f,b),d&&m(p,f,b),f+=g(p,b)),a[l.level]={button:h,separator:p,updated:!0});h&&h.setState(r?2:0)}}}E.defaultOptions=a.options;"";return E});b(a,"Series/Treemap/TreemapComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Series/Treemap/TreemapUtilities.js"],a["Core/Utilities.js"]],function(a,
b,e){({series:a}=a);const {addEvent:c,extend:d}=e;let f=!1;c(a,"afterBindAxes",function(){let a=this.xAxis,c=this.yAxis,e;a&&c&&(this.is("treemap")?(e={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,minPadding:0,max:b.AXIS_MAX,maxPadding:0,startOnTick:!1,title:void 0,tickPositions:[]},d(c.options,e),d(a.options,e),f=!0):f&&(c.setOptions(c.userOptions),a.setOptions(a.userOptions),f=!1))})});b(a,"Series/Treemap/TreemapNode.js",[],function(){class a{constructor(){this.childrenTotal=0;this.visible=!1}init(a,
b,c,n,f,m,k){this.id=a;this.i=b;this.children=c;this.height=n;this.level=f;this.series=m;this.parent=k;return this}}return a});b(a,"Series/Treemap/TreemapSeries.js",[a["Core/Color/Color.js"],a["Series/ColorMapComposition.js"],a["Core/Globals.js"],a["Core/Legend/LegendSymbol.js"],a["Core/Series/SeriesRegistry.js"],a["Series/Treemap/TreemapAlgorithmGroup.js"],a["Series/Treemap/TreemapPoint.js"],a["Series/Treemap/TreemapUtilities.js"],a["Series/TreeUtilities.js"],a["Extensions/Breadcrumbs/Breadcrumbs.js"],
a["Core/Utilities.js"],a["Series/Treemap/TreemapNode.js"]],function(a,b,e,w,n,f,m,k,l,g,r,I){const {parse:c}=a;({noop:a}=e);const {series:d,seriesTypes:{column:J,heatmap:B,scatter:y}}=n,{getColor:D,getLevelOptions:u,updateRootId:E}=l,{addEvent:t,correctFloat:v,defined:z,error:K,extend:H,fireEvent:R,isArray:M,isObject:S,isString:L,merge:A,pick:x,stableSort:T}=r;class F extends y{constructor(){super(...arguments);this.level=this.tree=this.rootNode=this.points=this.options=this.nodeList=this.nodeMap=
this.mapOptionsToLevel=this.data=this.axisRatio=void 0}algorithmCalcPoints(a,b,c,d){let h,p,q,e,C=c.lW,g=c.lH,f=c.plot,k,m=0,l=c.elArr.length-1;b?(C=c.nW,g=c.nH):k=c.elArr[c.elArr.length-1];c.elArr.forEach(function(a){if(b||m<l)0===c.direction?(h=f.x,p=f.y,q=C,e=a/q):(h=f.x,p=f.y,e=g,q=a/e),d.push({x:h,y:p,width:q,height:v(e)}),0===c.direction?f.y+=e:f.x+=q;m+=1});c.reset();0===c.direction?c.width-=C:c.height-=g;f.y=f.parent.y+(f.parent.height-c.height);f.x=f.parent.x+(f.parent.width-c.width);a&&
(c.direction=1-c.direction);b||c.addElement(k)}algorithmFill(a,b,c){let h=[],p,d=b.direction,q=b.x,e=b.y,g=b.width,f=b.height,k,m,l,n;c.forEach(function(c){p=c.val/b.val*b.height*b.width;k=q;m=e;0===d?(n=f,l=p/n,g-=l,q+=l):(l=g,n=p/l,f-=n,e+=n);h.push({x:k,y:m,width:l,height:n});a&&(d=1-d)});return h}algorithmLowAspectRatio(a,b,c){let h=[],d=this,p,q={x:b.x,y:b.y,parent:b},e=0,g=c.length-1,k=new f(b.height,b.width,b.direction,q);c.forEach(function(c){p=c.val/b.val*b.height*b.width;k.addElement(p);
k.lP.nR>k.lP.lR&&d.algorithmCalcPoints(a,!1,k,h,q);e===g&&d.algorithmCalcPoints(a,!0,k,h,q);e+=1});return h}alignDataLabel(a,b,c){const h=c.style;h&&!z(h.textOverflow)&&b.text&&b.getBBox().width>b.text.textWidth&&b.css({textOverflow:"ellipsis",width:h.width+="px"});J.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})}calculateChildrenAreas(a,b){let c=this,h=c.options,d=c.mapOptionsToLevel[a.level+1],p=x(c[d&&d.layoutAlgorithm]&&d.layoutAlgorithm,
h.layoutAlgorithm),e=h.alternateStartingDirection,g=[];a=a.children.filter(function(a){return!a.ignore});d&&d.layoutStartingDirection&&(b.direction="vertical"===d.layoutStartingDirection?0:1);g=c[p](b,a);a.forEach(function(a,h){h=g[h];a.values=A(h,{val:a.childrenTotal,direction:e?1-b.direction:b.direction});a.pointValues=A(h,{x:h.x/c.axisRatio,y:k.AXIS_MAX-h.y-h.height,width:h.width/c.axisRatio});a.children.length&&c.calculateChildrenAreas(a,a.values)})}createList(a){var b=this.chart;const c=[];if(b.breadcrumbs){let h=
0;c.push({level:h,levelOptions:b.series[0]});b=a.target.nodeMap[a.newRootId];const d=[];for(;b.parent||""===b.parent;)d.push(b),b=a.target.nodeMap[b.parent];d.reverse().forEach(function(a){c.push({level:++h,levelOptions:a})});1>=c.length&&(c.length=0)}return c}drawDataLabels(){let a=this,b=a.mapOptionsToLevel,c,e;a.points.filter(function(a){return a.node.visible}).forEach(function(h){e=b[h.node.level];c={style:{}};h.node.isLeaf||(c.enabled=!1);e&&e.dataLabels&&(c=A(c,e.dataLabels),a._hasPointLabels=
!0);h.shapeArgs&&(c.style.width=h.shapeArgs.width,h.dataLabel&&h.dataLabel.css({width:h.shapeArgs.width+"px"}));h.dlOptions=A(c,h.options.dataLabels)});d.prototype.drawDataLabels.call(this)}drawPoints(a=this.points){const b=this,c=b.chart,h=c.renderer,d=c.styledMode,e=b.options,g=d?{}:e.shadow,f=e.borderRadius,k=c.pointCount<e.animationLimit,l=e.allowTraversingTree;a.forEach(function(a){const c=a.node.levelDynamic,p={},q={},N={},G="level-group-"+a.node.level,O=!!a.graphic,m=k&&O,C=a.shapeArgs;a.shouldDraw()&&
(a.isInside=!0,f&&(q.r=f),A(!0,m?p:q,O?C:{},d?{}:b.pointAttribs(a,a.selected?"select":void 0)),b.colorAttribs&&d&&H(N,b.colorAttribs(a)),b[G]||(b[G]=h.g(G).attr({zIndex:1E3-(c||0)}).add(b.group),b[G].survive=!0));a.draw({animatableAttribs:p,attribs:q,css:N,group:b[G],renderer:h,shadow:g,shapeArgs:C,shapeType:a.shapeType});l&&a.graphic&&(a.drillId=e.interactByLeaf?b.drillToByLeaf(a):b.drillToByGroup(a))})}drillToByGroup(a){let b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||
(b=a.id);return b}drillToByLeaf(a){let b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b}drillToNode(a,b){K(32,!1,void 0,{"treemap.drillToNode":"use treemap.setRootNode"});this.setRootNode(a,b)}drillUp(){const a=this.nodeMap[this.rootNode];a&&L(a.parent)&&this.setRootNode(a.parent,!0,{trigger:"traverseUpButton"})}getExtremes(){const {dataMin:a,dataMax:b}=d.prototype.getExtremes.call(this,this.colorValueData);
this.valueMin=a;this.valueMax=b;return d.prototype.getExtremes.call(this)}getListOfParents(a,b){a=M(a)?a:[];const c=M(b)?b:[];b=a.reduce(function(a,b,c){b=x(b.parent,"");"undefined"===typeof a[b]&&(a[b]=[]);a[b].push(c);return a},{"":[]});k.eachObject(b,function(a,b,h){""!==b&&-1===c.indexOf(b)&&(a.forEach(function(a){h[""].push(a)}),delete h[b])});return b}getTree(){var a=this.data.map(function(a){return a.id});a=this.getListOfParents(this.data,a);this.nodeMap={};this.nodeList=[];return this.buildTree("",
-1,0,a)}buildTree(a,b,c,d,e){let h=this,p=[],g=h.points[b],q=0,f,k;(d[a]||[]).forEach(function(b){k=h.buildTree(h.points[b].id,b,c+1,d,a);q=Math.max(k.height+1,q);p.push(k)});f=(new h.NodeClass).init(a,b,p,q,c,h,e);p.forEach(a=>{a.parentNode=f});h.nodeMap[f.id]=f;h.nodeList.push(f);g&&(g.node=f,f.point=g);return f}hasData(){return!!this.processedXData.length}init(a,b){const c=this,h=A(b.drillUpButton,b.breadcrumbs);let e;e=t(c,"setOptions",function(a){a=a.userOptions;z(a.allowDrillToNode)&&!z(a.allowTraversingTree)&&
(a.allowTraversingTree=a.allowDrillToNode,delete a.allowDrillToNode);z(a.drillUpButton)&&!z(a.traverseUpButton)&&(a.traverseUpButton=a.drillUpButton,delete a.drillUpButton)});d.prototype.init.call(c,a,b);delete c.opacity;c.eventsToUnbind.push(e);c.options.allowTraversingTree&&(c.eventsToUnbind.push(t(c,"click",c.onClickDrillToNode)),c.eventsToUnbind.push(t(c,"setRootNode",function(a){const b=c.chart;b.breadcrumbs&&b.breadcrumbs.updateProperties(c.createList(a))})),c.eventsToUnbind.push(t(c,"update",
function(a,b){(b=this.chart.breadcrumbs)&&a.options.breadcrumbs&&b.update(a.options.breadcrumbs)})),c.eventsToUnbind.push(t(c,"destroy",function(a){const b=this.chart;b.breadcrumbs&&(b.breadcrumbs.destroy(),a.keepEventsForUpdate||(b.breadcrumbs=void 0))})));a.breadcrumbs||(a.breadcrumbs=new g(a,h));c.eventsToUnbind.push(t(a.breadcrumbs,"up",function(a){a=this.level-a.newLevel;for(let b=0;b<a;b++)c.drillUp()}))}onClickDrillToNode(a){const b=(a=a.point)&&a.drillId;L(b)&&(a.setState(""),this.setRootNode(b,
!0,{trigger:"click"}))}pointAttribs(a,b){var d=S(this.mapOptionsToLevel)?this.mapOptionsToLevel:{};let h=a&&d[a.node.level]||{};d=this.options;let e=b&&d.states&&d.states[b]||{},g=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||h.borderColor||e.borderColor||d.borderColor,"stroke-width":x(a&&a.borderWidth,h.borderWidth,e.borderWidth,d.borderWidth),dashstyle:a&&a.borderDashStyle||h.borderDashStyle||e.borderDashStyle||d.borderDashStyle,fill:a&&a.color||this.color};-1!==g.indexOf("highcharts-above-level")?
(a.fill="none",a["stroke-width"]=0):-1!==g.indexOf("highcharts-internal-node-interactive")?(b=x(e.opacity,d.opacity),a.fill=c(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==g.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=c(a.fill).brighten(e.brightness).get());return a}setColorRecursive(a,b,c,d,e){let h=this;var g=h&&h.chart;g=g&&g.options&&g.options.colors;let f;if(a){f=D(a,{colors:g,index:d,mapOptionsToLevel:h.mapOptionsToLevel,parentColor:b,parentColorIndex:c,series:h,siblings:e});
if(b=h.points[a.i])b.color=f.color,b.colorIndex=f.colorIndex;(a.children||[]).forEach(function(b,c){h.setColorRecursive(b,f.color,f.colorIndex,c,a.children.length)})}}setPointValues(){const a=this,{points:b,xAxis:c,yAxis:d}=a,e=a.chart.styledMode;b.forEach(function(b){const {pointValues:h,visible:g}=b.node;if(h&&g){const {height:g,width:p,x:l,y:m}=h;var f=e?0:(a.pointAttribs(b)["stroke-width"]||0)%2/2,k=Math.round(c.toPixels(l,!0))-f;const q=Math.round(c.toPixels(l+p,!0))-f,n=Math.round(d.toPixels(m,
!0))-f;f=Math.round(d.toPixels(m+g,!0))-f;k={x:Math.min(k,q),y:Math.min(n,f),width:Math.abs(q-k),height:Math.abs(f-n)};b.plotX=k.x+k.width/2;b.plotY=k.y+k.height/2;b.shapeArgs=k}else delete b.plotX,delete b.plotY})}setRootNode(a,b,c){a=H({newRootId:a,previousRootId:this.rootNode,redraw:x(b,!0),series:this},c);R(this,"setRootNode",a,function(a){const b=a.series;b.idPreviousRoot=a.previousRootId;b.rootNode=a.newRootId;b.isDirty=!0;a.redraw&&b.chart.redraw()})}setState(a){this.options.inactiveOtherPoints=
!0;d.prototype.setState.call(this,a,!1);this.options.inactiveOtherPoints=!1}setTreeValues(a){let b=this;var c=b.options;let d=b.nodeMap[b.rootNode];c=k.isBoolean(c.levelIsConstant)?c.levelIsConstant:!0;let h=0,e=[],g,f=b.points[a.i];a.children.forEach(function(a){a=b.setTreeValues(a);e.push(a);a.ignore||(h+=a.val)});T(e,function(a,b){return(a.sortIndex||0)-(b.sortIndex||0)});g=x(f&&f.options.value,h);f&&(f.value=g);H(a,{children:e,childrenTotal:h,ignore:!(x(f&&f.visible,!0)&&0<g),isLeaf:a.visible&&
!h,levelDynamic:a.level-(c?0:d.level),name:x(f&&f.name,""),sortIndex:x(f&&f.sortIndex,-g),val:g});return a}sliceAndDice(a,b){return this.algorithmFill(!0,a,b)}squarified(a,b){return this.algorithmLowAspectRatio(!0,a,b)}strip(a,b){return this.algorithmLowAspectRatio(!1,a,b)}stripes(a,b){return this.algorithmFill(!1,a,b)}translate(){let a=this;var b=a.options,c=E(a);let e,f;d.prototype.translate.call(a);f=a.tree=a.getTree();e=a.nodeMap[c];""===c||e&&e.children.length||(a.setRootNode("",!1),c=a.rootNode,
e=a.nodeMap[c]);a.mapOptionsToLevel=u({from:e.level+1,levels:b.levels,to:f.height,defaults:{levelIsConstant:a.options.levelIsConstant,colorByPoint:b.colorByPoint}});k.recursive(a.nodeMap[a.rootNode],function(b){let c=!1,d=b.parent;b.visible=!0;if(d||""===d)c=a.nodeMap[d];return c});k.recursive(a.nodeMap[a.rootNode].children,function(a){let b=!1;a.forEach(function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(f);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=
c={x:0,y:0,width:k.AXIS_MAX,height:k.AXIS_MAX};a.nodeMap[""].values=c=A(c,{width:c.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:f.val});a.calculateChildrenAreas(f,c);a.colorAxis||b.colorByPoint||a.setColorRecursive(a.tree);b.allowTraversingTree&&(b=e.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()}}F.defaultOptions=A(y.defaultOptions,{allowTraversingTree:!1,animationLimit:250,
borderRadius:0,showInLegend:!1,marker:void 0,colorByPoint:!1,dataLabels:{defer:!1,enabled:!0,formatter:function(){const a=this&&this.point?this.point:{};return L(a.name)?a.name:""},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:"",pointFormat:"<b>{point.name}</b>: {point.value}<br/>"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,traverseUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",
borderWidth:1,colorKey:"colorValue",opacity:.15,states:{hover:{borderColor:"#999999",brightness:B?0:.1,halo:!1,opacity:.75,shadow:!1}}});H(F.prototype,{buildKDTree:a,colorAttribs:b.seriesMembers.colorAttribs,colorKey:"colorValue",directTouch:!0,drawLegendSymbol:w.drawRectangle,getExtremesFromAll:!0,getSymbol:a,optionalAxis:"colorAxis",parallelArrays:["x","y","value","colorValue"],pointArrayMap:["value"],pointClass:m,NodeClass:I,trackerGroups:["group","dataLabelsGroup"],utils:{recursive:k.recursive}});
b.compose(F);n.registerSeriesType("treemap",F);"";return F});b(a,"masters/modules/treemap.src.js",[a["Core/Globals.js"],a["Extensions/Breadcrumbs/Breadcrumbs.js"]],function(a,b){a.Breadcrumbs=b;b.compose(a.Chart,a.defaultOptions)})});
//# sourceMappingURL=treemap.js.map