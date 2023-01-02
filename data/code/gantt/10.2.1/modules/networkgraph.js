/*
 Highcharts JS v10.2.1 (2022-10-13)

 Force directed graph module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/modules/networkgraph",["highcharts"],function(k){d(k);d.Highcharts=k;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function k(b,a,c,f){b.hasOwnProperty(a)||(b[a]=f.apply(null,c),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:a,module:b[a]}})))}d=d?d._modules:{};
k(d,"Series/DragNodesComposition.js",[d["Core/Utilities.js"]],function(b){function a(){var a=this,b,f,d;a.container&&(b=c(a.container,"mousedown",function(b){var e=a.hoverPoint;e&&e.series&&e.series.hasDraggableNodes&&e.series.options.draggable&&(e.series.onMouseDown(e,b),f=c(a.container,"mousemove",function(a){return e&&e.series&&e.series.onMouseMove(e,a)}),d=c(a.container.ownerDocument,"mouseup",function(a){f();d();return e&&e.series&&e.series.onMouseUp(e,a)}))}));c(a,"destroy",function(){b()})}
var c=b.addEvent,f=[];return{compose:function(b){-1===f.indexOf(b)&&(f.push(b),c(b,"load",a))},onMouseDown:function(a,b){b=this.chart.pointer.normalize(b);a.fixedPosition={chartX:b.chartX,chartY:b.chartY,plotX:a.plotX,plotY:a.plotY};a.inDragMode=!0},onMouseMove:function(a,b){if(a.fixedPosition&&a.inDragMode){var c=this.chart,f=c.pointer.normalize(b);b=a.fixedPosition.chartX-f.chartX;f=a.fixedPosition.chartY-f.chartY;var e=c.graphLayoutsLookup,d=void 0,m=void 0;if(5<Math.abs(b)||5<Math.abs(f))d=a.fixedPosition.plotX-
b,m=a.fixedPosition.plotY-f,c.isInsidePlot(d,m)&&(a.plotX=d,a.plotY=m,a.hasDragged=!0,this.redrawHalo(a),e.forEach(function(a){a.restartSimulation()}))}},onMouseUp:function(a,b){a.fixedPosition&&(a.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),a.inDragMode=a.hasDragged=!1,this.options.fixedDraggable||delete a.fixedPosition)},redrawHalo:function(a){a&&this.halo&&this.halo.attr({d:a.haloPath(this.options.states.hover.halo.size)})}}});k(d,"Series/GraphLayoutComposition.js",
[d["Core/Animation/AnimationUtilities.js"],d["Core/Utilities.js"]],function(b,a){function c(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(function(a){a.updateSimulation()}),this.redraw())}function f(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(function(a){a.updateSimulation(!1)}),this.redraw())}function e(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(function(a){a.stop()})}function d(){var a=!1,b=function(g){g.maxIterations--&&isFinite(g.temperature)&&!g.isStable()&&
!g.enableSimulation&&(g.beforeStep&&g.beforeStep(),g.step(),c=!1,a=!0)};if(this.graphLayoutsLookup){p(!1,this);for(this.graphLayoutsLookup.forEach(function(a){return a.start()});!c;){var c=!0;this.graphLayoutsLookup.forEach(b)}a&&this.series.forEach(function(a){a&&a.layout&&a.render()})}}var p=b.setAnimation,q=a.addEvent,l=[];return{compose:function(a){l.indexOf(a)&&(l.push(a),q(a,"afterPrint",c),q(a,"beforePrint",f),q(a,"predraw",e),q(a,"render",d))},integrations:{},layouts:{}}});k(d,"Series/NodesComposition.js",
[d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(b,a){b=b.series;var c=b.prototype,f=b.prototype.pointClass.prototype,e=a.defined,d=a.extend,p=a.find,q=a.merge,l=a.pick,k;(function(a){function b(){this.data=[].concat(this.points||[],this.nodes);return c.destroy.apply(this,arguments)}function g(){this.nodes&&(this.nodes.forEach(function(a){a.destroy()}),this.nodes.length=0);c.setData.apply(this,arguments)}function h(a){var g=arguments,b=this.isNode?this.linksTo.concat(this.linksFrom):
[this.fromNode,this.toNode];"select"!==a&&b.forEach(function(a){a&&a.series&&(f.setState.apply(a,g),a.isNode||(a.fromNode.graphic&&f.setState.apply(a.fromNode,g),a.toNode&&a.toNode.graphic&&f.setState.apply(a.toNode,g)))});f.setState.apply(this,g)}function r(a,g,b,h){var c=this,r=this.series.options.nodes,n=this.series.options.data,u=n&&n.length||0,e=n&&n[this.index];f.update.call(this,a,this.isNode?!1:g,b,h);this.isNode&&(a=(r||[]).reduce(function(a,g,b){return c.id===g.id?b:a},-1),h=q(r&&r[a]||
{},n&&n[this.index]||{}),n&&(e?n[this.index]=e:n.length=u),r?0<=a?r[a]=h:r.push(h):this.series.options.nodes=[h],l(g,!0)&&this.series.chart.redraw(b))}var u=[];a.compose=function(a,c){-1===u.indexOf(a)&&(u.push(a),a=a.prototype,a.setNodeState=h,a.setState=h,a.update=r);-1===u.indexOf(c)&&(u.push(c),a=c.prototype,a.destroy=b,a.setData=g);return c};a.createNode=function(a){var g=this.pointClass,b=function(a,g){return p(a,function(a){return a.id===g})},h=b(this.nodes,a);if(!h){b=this.options.nodes&&
b(this.options.nodes,a);var c=(new g).init(this,d({className:"highcharts-node",isNode:!0,id:a,y:1},b));c.linksTo=[];c.linksFrom=[];c.getSum=function(){var a=0,g=0;c.linksTo.forEach(function(g){a+=g.weight||0});c.linksFrom.forEach(function(a){g+=a.weight||0});return Math.max(a,g)};c.offset=function(a,g){for(var b=0,h=0;h<c[g].length;h++){if(c[g][h]===a)return b;b+=c[g][h].weight}};c.hasShape=function(){var a=0;c.linksTo.forEach(function(g){g.outgoing&&a++});return!c.linksTo.length||a!==c.linksTo.length};
c.index=this.nodes.push(c)-1;h=c}h.formatPrefix="node";h.name=h.name||h.options.id||"";h.mass=l(h.options.mass,h.options.marker&&h.options.marker.radius,this.options.marker&&this.options.marker.radius,4);return h};a.destroy=b;a.generatePoints=function(){var a=this,g=this.chart,b={};c.generatePoints.call(this);this.nodes||(this.nodes=[]);this.colorCounter=0;this.nodes.forEach(function(a){a.linksFrom.length=0;a.linksTo.length=0;a.level=a.options.level});this.points.forEach(function(h){e(h.from)&&(b[h.from]||
(b[h.from]=a.createNode(h.from)),b[h.from].linksFrom.push(h),h.fromNode=b[h.from],g.styledMode?h.colorIndex=l(h.options.colorIndex,b[h.from].colorIndex):h.color=h.options.color||b[h.from].color);e(h.to)&&(b[h.to]||(b[h.to]=a.createNode(h.to)),b[h.to].linksTo.push(h),h.toNode=b[h.to]);h.name=h.name||h.id},this);this.nodeLookup=b};a.setNodeState=h;a.updateNode=r})(k||(k={}));return k});k(d,"Series/Networkgraph/NetworkgraphPoint.js",[d["Series/NodesComposition.js"],d["Core/Series/SeriesRegistry.js"],
d["Core/Utilities.js"]],function(b,a,c){var f=this&&this.__extends||function(){var a=function(b,g){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,g){a.__proto__=g}||function(a,g){for(var b in g)g.hasOwnProperty(b)&&(a[b]=g[b])};return a(b,g)};return function(b,g){function h(){this.constructor=b}a(b,g);b.prototype=null===g?Object.create(g):(h.prototype=g.prototype,new h)}}();a=a.series;var e=a.prototype,d=a.prototype.pointClass,p=c.addEvent,k=c.css,l=c.defined;a=c.extend;var w=
c.pick;c=function(a){function b(){return null!==a&&a.apply(this,arguments)||this}f(b,a);b.prototype.destroy=function(){this.isNode&&this.linksFrom.concat(this.linksTo).forEach(function(a){a.destroyElements&&a.destroyElements()});this.series.layout.removeElementFromCollection(this,this.series.layout[this.isNode?"nodes":"links"]);return d.prototype.destroy.apply(this,arguments)};b.prototype.getDegree=function(){var a=this.isNode?this.linksFrom.length+this.linksTo.length:0;return 0===a?1:a};b.prototype.getLinkAttributes=
function(){var a=this.series.options.link,b=this.options;return{"stroke-width":w(b.width,a.width),stroke:b.color||a.color,dashstyle:b.dashStyle||a.dashStyle,opacity:w(b.opacity,a.opacity,1)}};b.prototype.getLinkPath=function(){var a=this.fromNode,b=this.toNode;a.plotX>b.plotX&&(a=this.toNode,b=this.fromNode);return[["M",a.plotX||0,a.plotY||0],["L",b.plotX||0,b.plotY||0]]};b.prototype.getMass=function(){var a=this.fromNode.mass,b=this.toNode.mass,c=a+b;return{fromNode:1-a/c,toNode:1-b/c}};b.prototype.init=
function(b,h,c){a.prototype.init.call(this,b,h,c);this.series.options.draggable&&!this.series.chart.styledMode&&(p(this,"mouseOver",function(){k(this.series.chart.container,{cursor:"move"})}),p(this,"mouseOut",function(){k(this.series.chart.container,{cursor:"default"})}));return this};b.prototype.isValid=function(){return!this.isNode||l(this.id)};b.prototype.redrawLink=function(){var a=this.getLinkPath();if(this.graphic){this.shapeArgs={d:a};if(!this.series.chart.styledMode){var b=this.series.pointAttribs(this);
this.graphic.attr(b);(this.dataLabels||[]).forEach(function(a){a&&a.attr({opacity:b.opacity})})}this.graphic.animate(this.shapeArgs);var c=a[0];a=a[1];"M"===c[0]&&"L"===a[0]&&(this.plotX=(c[1]+a[1])/2,this.plotY=(c[2]+a[2])/2)}};b.prototype.remove=function(a,b){var g=this.series,c=g.options.nodes||[],h,f=c.length;if(this.isNode){g.points=[];[].concat(this.linksFrom).concat(this.linksTo).forEach(function(a){h=a.fromNode.linksFrom.indexOf(a);-1<h&&a.fromNode.linksFrom.splice(h,1);h=a.toNode.linksTo.indexOf(a);
-1<h&&a.toNode.linksTo.splice(h,1);e.removePoint.call(g,g.data.indexOf(a),!1,!1)});g.points=g.data.slice();for(g.nodes.splice(g.nodes.indexOf(this),1);f--;)if(c[f].id===this.options.id){g.options.nodes.splice(f,1);break}this&&this.destroy();g.isDirty=!0;g.isDirtyData=!0;a&&g.chart.redraw(a)}else g.removePoint(g.data.indexOf(this),a,b)};b.prototype.renderLink=function(){if(!this.graphic&&(this.graphic=this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(),!0).add(this.series.group),
!this.series.chart.styledMode)){var a=this.series.pointAttribs(this);this.graphic.attr(a);(this.dataLabels||[]).forEach(function(b){b&&b.attr({opacity:a.opacity})})}};return b}(d);a(c.prototype,{setState:b.setNodeState});return c});k(d,"Series/Networkgraph/NetworkgraphSeriesDefaults.js",[],function(){"";return{stickyTracking:!1,inactiveOtherPoints:!0,marker:{enabled:!0,states:{inactive:{opacity:.3,animation:{duration:50}}}},states:{inactive:{linkOpacity:.3,animation:{duration:50}}},dataLabels:{formatter:function(){return this.key},
linkFormatter:function(){return this.point.fromNode.name+"<br>"+this.point.toNode.name},linkTextPath:{enabled:!0},textPath:{enabled:!1},style:{transition:"opacity 2000ms"}},link:{color:"rgba(100, 100, 100, 0.5)",width:1},draggable:!0,layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:1,enableSimulation:!1,theta:.5,maxSpeed:10,approximation:"none",type:"reingold-fruchterman",integration:"euler",maxIterations:1E3,gravitationalConstant:.0625,friction:-.981},showInLegend:!1}});k(d,"Series/Networkgraph/EulerIntegration.js",
[],function(){return{attractive:function(b,a,c,f){var e=b.getMass(),d=c.x/f*a;a*=c.y/f;b.fromNode.fixedPosition||(b.fromNode.dispX-=d*e.fromNode/b.fromNode.degree,b.fromNode.dispY-=a*e.fromNode/b.fromNode.degree);b.toNode.fixedPosition||(b.toNode.dispX+=d*e.toNode/b.toNode.degree,b.toNode.dispY+=a*e.toNode/b.toNode.degree)},attractiveForceFunction:function(b,a){return b*b/a},barycenter:function(){var b=this.options.gravitationalConstant,a=this.barycenter.xFactor,c=this.barycenter.yFactor;this.nodes.forEach(function(f){if(!f.fixedPosition){var d=
f.getDegree();d*=1+d/2;f.dispX+=(a-f.plotX)*b*d/f.degree;f.dispY+=(c-f.plotY)*b*d/f.degree}})},getK:function(b){return Math.pow(b.box.width*b.box.height/b.nodes.length,.3)},integrate:function(b,a){a.dispX+=a.dispX*b.options.friction;a.dispY+=a.dispY*b.options.friction;var c=a.temperature=b.vectorLength({x:a.dispX,y:a.dispY});0!==c&&(a.plotX+=a.dispX/c*Math.min(Math.abs(a.dispX),b.temperature),a.plotY+=a.dispY/c*Math.min(Math.abs(a.dispY),b.temperature))},repulsive:function(b,a,c,f){b.dispX+=c.x/f*
a/b.degree;b.dispY+=c.y/f*a/b.degree},repulsiveForceFunction:function(b,a){return a*a/b}}});k(d,"Series/Networkgraph/QuadTreeNode.js",[],function(){return function(){function b(a){this.isInternal=this.isEmpty=this.body=!1;this.nodes=[];this.box=a;this.boxSize=Math.min(a.width,a.height)}b.prototype.divideBox=function(){var a=this.box.width/2,c=this.box.height/2;this.nodes[0]=new b({left:this.box.left,top:this.box.top,width:a,height:c});this.nodes[1]=new b({left:this.box.left+a,top:this.box.top,width:a,
height:c});this.nodes[2]=new b({left:this.box.left+a,top:this.box.top+c,width:a,height:c});this.nodes[3]=new b({left:this.box.left,top:this.box.top+c,width:a,height:c})};b.prototype.getBoxPosition=function(a){var b=a.plotY<this.box.top+this.box.height/2;return a.plotX<this.box.left+this.box.width/2?b?0:3:b?1:2};b.prototype.insert=function(a,c){this.isInternal?this.nodes[this.getBoxPosition(a)].insert(a,c-1):(this.isEmpty=!1,this.body?c?(this.isInternal=!0,this.divideBox(),!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,
c-1),this.body=!0),this.nodes[this.getBoxPosition(a)].insert(a,c-1)):(c=new b({top:a.plotX||NaN,left:a.plotY||NaN,width:.1,height:.1}),c.body=a,c.isInternal=!1,this.nodes.push(c)):(this.isInternal=!1,this.body=a))};b.prototype.updateMassAndCenter=function(){var a=0,b=0,f=0;if(this.isInternal){for(var d=0,k=this.nodes;d<k.length;d++){var p=k[d];p.isEmpty||(a+=p.mass,b+=p.plotX*p.mass,f+=p.plotY*p.mass)}b/=a;f/=a}else this.body&&(a=this.body.mass,b=this.body.plotX,f=this.body.plotY);this.mass=a;this.plotX=
b;this.plotY=f};return b}()});k(d,"Series/Networkgraph/QuadTree.js",[d["Series/Networkgraph/QuadTreeNode.js"]],function(b){return function(){function a(a,f,d,k){this.box={left:a,top:f,width:d,height:k};this.maxDepth=25;this.root=new b(this.box);this.root.isInternal=!0;this.root.isRoot=!0;this.root.divideBox()}a.prototype.calculateMassAndCenter=function(){this.visitNodeRecursive(null,null,function(a){a.updateMassAndCenter()})};a.prototype.insertNodes=function(a){for(var b=0;b<a.length;b++)this.root.insert(a[b],
this.maxDepth)};a.prototype.visitNodeRecursive=function(a,b,d){var c;a||(a=this.root);a===this.root&&b&&(c=b(a));if(!1!==c){for(var f=0,e=a.nodes;f<e.length;f++){var l=e[f];if(l.isInternal){b&&(c=b(l));if(!1===c)continue;this.visitNodeRecursive(l,b,d)}else l.body&&b&&b(l.body);d&&d(l)}a===this.root&&d&&d(a)}};return a}()});k(d,"Series/Networkgraph/VerletIntegration.js",[],function(){return{attractive:function(b,a,c){var d=b.getMass(),e=-c.x*a*this.diffTemperature;a=-c.y*a*this.diffTemperature;b.fromNode.fixedPosition||
(b.fromNode.plotX-=e*d.fromNode/b.fromNode.degree,b.fromNode.plotY-=a*d.fromNode/b.fromNode.degree);b.toNode.fixedPosition||(b.toNode.plotX+=e*d.toNode/b.toNode.degree,b.toNode.plotY+=a*d.toNode/b.toNode.degree)},attractiveForceFunction:function(b,a){return(a-b)/b},barycenter:function(){var b=this.options.gravitationalConstant,a=this.barycenter.xFactor,c=this.barycenter.yFactor;a=(a-(this.box.left+this.box.width)/2)*b;c=(c-(this.box.top+this.box.height)/2)*b;this.nodes.forEach(function(b){b.fixedPosition||
(b.plotX-=a/b.mass/b.degree,b.plotY-=c/b.mass/b.degree)})},getK:function(b){return Math.pow(b.box.width*b.box.height/b.nodes.length,.5)},integrate:function(b,a){var c=-b.options.friction,d=b.options.maxSpeed,e=(a.plotX+a.dispX-a.prevX)*c;c*=a.plotY+a.dispY-a.prevY;var k=Math.abs,p=k(e)/(e||1);k=k(c)/(c||1);e=p*Math.min(d,Math.abs(e));c=k*Math.min(d,Math.abs(c));a.prevX=a.plotX+a.dispX;a.prevY=a.plotY+a.dispY;a.plotX+=e;a.plotY+=c;a.temperature=b.vectorLength({x:e,y:c})},repulsive:function(b,a,c){a=
a*this.diffTemperature/b.mass/b.degree;b.fixedPosition||(b.plotX+=c.x*a,b.plotY+=c.y*a)},repulsiveForceFunction:function(b,a){return(a-b)/b*(a>b?1:0)}}});k(d,"Series/Networkgraph/ReingoldFruchtermanLayout.js",[d["Series/Networkgraph/EulerIntegration.js"],d["Core/Globals.js"],d["Series/GraphLayoutComposition.js"],d["Series/Networkgraph/QuadTree.js"],d["Core/Utilities.js"],d["Series/Networkgraph/VerletIntegration.js"]],function(b,a,c,d,e,k){var f=a.win,q=e.clamp,l=e.defined,w=e.isFunction,m=e.pick;
return function(){function a(){this.attractiveForce=void 0;this.box={};this.currentStep=0;this.initialRendering=!0;this.integration=void 0;this.links=[];this.nodes=[];this.repulsiveForce=this.quadTree=this.options=void 0;this.series=[];this.simulation=!1}a.compose=function(g){c.compose(g);c.integrations.euler=b;c.integrations.verlet=k;c.layouts["reingold-fruchterman"]=a};a.prototype.init=function(a){this.options=a;this.nodes=[];this.links=[];this.series=[];this.box={x:0,y:0,width:0,height:0};this.setInitialRendering(!0);
this.integration=c.integrations[a.integration];this.enableSimulation=a.enableSimulation;this.attractiveForce=m(a.attractiveForce,this.integration.attractiveForceFunction);this.repulsiveForce=m(a.repulsiveForce,this.integration.repulsiveForceFunction);this.approximation=a.approximation};a.prototype.updateSimulation=function(a){this.enableSimulation=m(a,this.options.enableSimulation)};a.prototype.start=function(){var a=this.series,b=this.options;this.currentStep=0;this.forces=a[0]&&a[0].forces||[];
this.chart=a[0]&&a[0].chart;this.initialRendering&&(this.initPositions(),a.forEach(function(a){a.finishedAnimating=!0;a.render()}));this.setK();this.resetSimulation(b);this.enableSimulation&&this.step()};a.prototype.step=function(){var a=this,b=this.series;this.currentStep++;"barnes-hut"===this.approximation&&(this.createQuadTree(),this.quadTree.calculateMassAndCenter());for(var c=0,d=this.forces||[];c<d.length;c++)this[d[c]+"Forces"](this.temperature);this.applyLimits();this.temperature=this.coolDown(this.startTemperature,
this.diffTemperature,this.currentStep);this.prevSystemTemperature=this.systemTemperature;this.systemTemperature=this.getSystemTemperature();if(this.enableSimulation){for(c=0;c<b.length;c++)d=b[c],d.chart&&d.render();this.maxIterations--&&isFinite(this.temperature)&&!this.isStable()?(this.simulation&&f.cancelAnimationFrame(this.simulation),this.simulation=f.requestAnimationFrame(function(){return a.step()})):this.simulation=!1}};a.prototype.stop=function(){this.simulation&&f.cancelAnimationFrame(this.simulation)};
a.prototype.setArea=function(a,b,c,d){this.box={left:a,top:b,width:c,height:d}};a.prototype.setK=function(){this.k=this.options.linkLength||this.integration.getK(this)};a.prototype.addElementsToCollection=function(a,b){for(var c=0;c<a.length;c++){var g=a[c];-1===b.indexOf(g)&&b.push(g)}};a.prototype.removeElementFromCollection=function(a,b){a=b.indexOf(a);-1!==a&&b.splice(a,1)};a.prototype.clear=function(){this.nodes.length=0;this.links.length=0;this.series.length=0;this.resetSimulation()};a.prototype.resetSimulation=
function(){this.forcedStop=!1;this.systemTemperature=0;this.setMaxIterations();this.setTemperature();this.setDiffTemperature()};a.prototype.restartSimulation=function(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&this.chart.redraw(),this.setInitialRendering(!0))};a.prototype.setMaxIterations=function(a){this.maxIterations=m(a,this.options.maxIterations)};a.prototype.setTemperature=function(){this.temperature=
this.startTemperature=Math.sqrt(this.nodes.length)};a.prototype.setDiffTemperature=function(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)};a.prototype.setInitialRendering=function(a){this.initialRendering=a};a.prototype.createQuadTree=function(){this.quadTree=new d(this.box.left,this.box.top,this.box.width,this.box.height);this.quadTree.insertNodes(this.nodes)};a.prototype.initPositions=function(){var a=this.options.initialPositions;if(w(a)){a.call(this);a=0;for(var b=
this.nodes;a<b.length;a++){var c=b[a];l(c.prevX)||(c.prevX=c.plotX);l(c.prevY)||(c.prevY=c.plotY);c.dispX=0;c.dispY=0}}else"circle"===a?this.setCircularPositions():this.setRandomPositions()};a.prototype.setCircularPositions=function(){for(var a=this.box,b=this.nodes,c=2*Math.PI/(b.length+1),d=b.filter(function(a){return 0===a.linksTo.length}),f={},e=this.options.initialPositionRadius,k=function(a){var b=0;for(a=a.linksFrom||[];b<a.length;b++){var c=a[b];f[c.toNode.id]||(f[c.toNode.id]=!0,n.push(c.toNode),
k(c.toNode))}},n=[],t=0;t<d.length;t++){var v=d[t];n.push(v);k(v)}if(n.length)for(d=0;d<b.length;d++)t=b[d],-1===n.indexOf(t)&&n.push(t);else n=b;d=0;for(t=n.length;d<t;++d)b=n[d],b.plotX=b.prevX=m(b.plotX,a.width/2+e*Math.cos(d*c)),b.plotY=b.prevY=m(b.plotY,a.height/2+e*Math.sin(d*c)),b.dispX=0,b.dispY=0};a.prototype.setRandomPositions=function(){for(var a=this.box,b=this.nodes,c=b.length+1,d=function(a){a=a*a/Math.PI;return a-=Math.floor(a)},f,e=0,k=b.length;e<k;++e)f=b[e],f.plotX=f.prevX=m(f.plotX,
a.width*d(e)),f.plotY=f.prevY=m(f.plotY,a.height*d(c+e)),f.dispX=0,f.dispY=0};a.prototype.force=function(a){for(var b=[],c=1;c<arguments.length;c++)b[c-1]=arguments[c];this.integration[a].apply(this,b)};a.prototype.barycenterForces=function(){this.getBarycenter();this.force("barycenter")};a.prototype.getBarycenter=function(){for(var a=0,b=0,c=0,d=0,f=this.nodes;d<f.length;d++){var e=f[d];b+=e.plotX*e.mass;c+=e.plotY*e.mass;a+=e.mass}return this.barycenter={x:b,y:c,xFactor:b/a,yFactor:c/a}};a.prototype.barnesHutApproximation=
function(a,b){var c=this.getDistXY(a,b),d=this.vectorLength(c);if(a!==b&&0!==d)if(b.isInternal)if(b.boxSize/d<this.options.theta&&0!==d){var g=this.repulsiveForce(d,this.k);this.force("repulsive",a,g*b.mass,c,d);var h=!1}else h=!0;else g=this.repulsiveForce(d,this.k),this.force("repulsive",a,g*b.mass,c,d);return h};a.prototype.repulsiveForces=function(){var a=this;if("barnes-hut"===this.approximation)for(var b=function(b){c.quadTree.visitNodeRecursive(null,function(c){return a.barnesHutApproximation(b,
c)})},c=this,d=0,f=this.nodes;d<f.length;d++){var e=f[d];b(e)}else{f=d=b=void 0;for(var k=0,n=this.nodes;k<n.length;k++){e=n[k];for(var t=0,v=this.nodes;t<v.length;t++){var y=v[t];e===y||e.fixedPosition||(f=this.getDistXY(e,y),d=this.vectorLength(f),0!==d&&(b=this.repulsiveForce(d,this.k),this.force("repulsive",e,b*y.mass,f,d)))}}}};a.prototype.attractiveForces=function(){for(var a,b,c,d=0,f=this.links;d<f.length;d++){var e=f[d];e.fromNode&&e.toNode&&(a=this.getDistXY(e.fromNode,e.toNode),b=this.vectorLength(a),
0!==b&&(c=this.attractiveForce(b,this.k),this.force("attractive",e,c,a,b)))}};a.prototype.applyLimits=function(){for(var a=0,b=this.nodes;a<b.length;a++){var c=b[a];if(c.fixedPosition)break;this.integration.integrate(this,c);this.applyLimitBox(c,this.box);c.dispX=0;c.dispY=0}};a.prototype.applyLimitBox=function(a,b){var c=a.radius;a.plotX=q(a.plotX,b.left+c,b.width-c);a.plotY=q(a.plotY,b.top+c,b.height-c)};a.prototype.coolDown=function(a,b,c){return a-b*c};a.prototype.isStable=function(){return.00001>
Math.abs(this.systemTemperature-this.prevSystemTemperature)||0>=this.temperature};a.prototype.getSystemTemperature=function(){for(var a=0,b=0,c=this.nodes;b<c.length;b++)a+=c[b].temperature;return a};a.prototype.vectorLength=function(a){return Math.sqrt(a.x*a.x+a.y*a.y)};a.prototype.getDistR=function(a,b){a=this.getDistXY(a,b);return this.vectorLength(a)};a.prototype.getDistXY=function(a,b){var c=a.plotX-b.plotX;a=a.plotY-b.plotY;return{x:c,y:a,absX:Math.abs(c),absY:Math.abs(a)}};return a}()});k(d,
"Series/Networkgraph/NetworkgraphSeries.js",[d["Series/DragNodesComposition.js"],d["Series/GraphLayoutComposition.js"],d["Core/Globals.js"],d["Series/Networkgraph/NetworkgraphPoint.js"],d["Series/Networkgraph/NetworkgraphSeriesDefaults.js"],d["Series/NodesComposition.js"],d["Series/Networkgraph/ReingoldFruchtermanLayout.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(b,a,c,d,e,k,p,q,l){var f=this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof
Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}();c=c.noop;var m=q.series,x=q.seriesTypes,g=x.column.prototype,h=x.line.prototype,r=l.addEvent,u=l.defined;x=l.extend;var A=l.merge,z=l.pick;l=function(c){function d(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.nodes=void 0;a.options=void 0;
a.points=void 0;return a}f(d,c);d.compose=function(a){b.compose(a);p.compose(a)};d.prototype.deferLayout=function(){var b=this.options.layoutAlgorithm,c=this.chart.graphLayoutsStorage,d=this.chart.graphLayoutsLookup,f=this.chart.options.chart;if(this.visible){c||(this.chart.graphLayoutsStorage=c={},this.chart.graphLayoutsLookup=d=[]);var e=c[b.type];e||(b.enableSimulation=u(f.forExport)?!f.forExport:b.enableSimulation,c[b.type]=e=new a.layouts[b.type],e.init(b),d.splice(e.index,0,e));this.layout=
e;e.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight);e.addElementsToCollection([this],e.series);e.addElementsToCollection(this.nodes,e.nodes);e.addElementsToCollection(this.points,e.links)}};d.prototype.destroy=function(){this.layout&&this.layout.removeElementFromCollection(this,this.layout.series);k.destroy.call(this)};d.prototype.drawDataLabels=function(){var a=this.options.dataLabels.textPath;m.prototype.drawDataLabels.call(this,this.nodes);this.options.dataLabels.textPath=this.options.dataLabels.linkTextPath;
m.prototype.drawDataLabels.call(this,this.data);this.options.dataLabels.textPath=a};d.prototype.generatePoints=function(){var a;k.generatePoints.apply(this,arguments);this.options.nodes&&this.options.nodes.forEach(function(a){this.nodeLookup[a.id]||(this.nodeLookup[a.id]=this.createNode(a.id))},this);for(a=this.nodes.length-1;0<=a;a--){var b=this.nodes[a];b.degree=b.getDegree();b.radius=z(b.marker&&b.marker.radius,this.options.marker&&this.options.marker.radius,0);this.nodeLookup[b.id]||b.remove()}this.data.forEach(function(a){a.formatPrefix=
"link"});this.indexateNodes()};d.prototype.getPointsCollection=function(){return this.nodes||[]};d.prototype.indexateNodes=function(){this.nodes.forEach(function(a,b){a.index=b})};d.prototype.init=function(a,b){var d=this;c.prototype.init.call(this,a,b);r(this,"updatedData",function(){d.layout&&d.layout.stop()});r(this,"afterUpdate",function(){d.nodes.forEach(function(a){a&&a.series&&a.resolveColor()})});return this};d.prototype.markerAttribs=function(a,b){b=m.prototype.markerAttribs.call(this,a,
b);u(a.plotY)||(b.y=0);b.x=(a.plotX||0)-(b.width||0)/2;return b};d.prototype.pointAttribs=function(a,b){var c=b||a&&a.state||"normal";b=m.prototype.pointAttribs.call(this,a,c);c=this.options.states[c];a&&!a.isNode&&(b=a.getLinkAttributes(),c&&(b={stroke:c.linkColor||b.stroke,dashstyle:c.linkDashStyle||b.dashstyle,opacity:z(c.linkOpacity,b.opacity),"stroke-width":c.linkColor||b["stroke-width"]}));return b};d.prototype.render=function(){var a=this.points,b=this.chart.hoverPoint,c=[];this.points=this.nodes;
h.render.call(this);this.points=a;a.forEach(function(a){a.fromNode&&a.toNode&&(a.renderLink(),a.redrawLink())});b&&b.series===this&&this.redrawHalo(b);this.chart.hasRendered&&!this.options.dataLabels.allowOverlap&&(this.nodes.concat(this.points).forEach(function(a){a.dataLabel&&c.push(a.dataLabel)}),this.chart.hideOverlappingLabels(c))};d.prototype.setState=function(a,b){b?(this.points=this.nodes.concat(this.data),m.prototype.setState.apply(this,arguments),this.points=this.data):m.prototype.setState.apply(this,
arguments);this.layout.simulation||a||this.render()};d.prototype.translate=function(){this.processedXData||this.processData();this.generatePoints();this.deferLayout();this.nodes.forEach(function(a){a.isInside=!0;a.linksFrom.forEach(function(a){a.shapeType="path";a.y=1})})};d.defaultOptions=A(m.defaultOptions,e);return d}(m);x(l.prototype,{pointClass:d,animate:void 0,directTouch:!0,drawGraph:void 0,forces:["barycenter","repulsive","attractive"],hasDraggableNodes:!0,isCartesian:!1,noSharedTooltip:!0,
pointArrayMap:["from","to"],requireSorting:!1,trackerGroups:["group","markerGroup","dataLabelsGroup"],buildKDTree:c,createNode:k.createNode,drawTracker:g.drawTracker,onMouseDown:b.onMouseDown,onMouseMove:b.onMouseMove,onMouseUp:b.onMouseUp,redrawHalo:b.redrawHalo});q.registerSeriesType("networkgraph",l);"";return l});k(d,"masters/modules/networkgraph.src.js",[d["Core/Globals.js"],d["Series/Networkgraph/NetworkgraphSeries.js"]],function(b,a){a.compose(b.Chart)})});
//# sourceMappingURL=networkgraph.js.map