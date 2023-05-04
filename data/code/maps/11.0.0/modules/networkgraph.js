/*
 Highcharts JS v11.0.0 (2023-04-27)

 Force directed graph module

 (c) 2010-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
'use strict';(function(d){"object"===typeof module&&module.exports?(d["default"]=d,module.exports=d):"function"===typeof define&&define.amd?define("highcharts/modules/networkgraph",["highcharts"],function(h){d(h);d.Highcharts=h;return d}):d("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(d){function h(b,a,c,f){b.hasOwnProperty(a)||(b[a]=f.apply(null,c),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:a,module:b[a]}})))}d=d?
d._modules:{};h(d,"Series/DragNodesComposition.js",[d["Core/Utilities.js"]],function(b){function a(){const a=this;let b,f,d;a.container&&(b=c(a.container,"mousedown",b=>{const e=a.hoverPoint;e&&e.series&&e.series.hasDraggableNodes&&e.series.options.draggable&&(e.series.onMouseDown(e,b),f=c(a.container,"mousemove",a=>e&&e.series&&e.series.onMouseMove(e,a)),d=c(a.container.ownerDocument,"mouseup",a=>{f();d();return e&&e.series&&e.series.onMouseUp(e,a)}))}));c(a,"destroy",function(){b()})}const {addEvent:c}=
b,f=[];return{compose:function(e){b.pushUnique(f,e)&&c(e,"load",a)},onMouseDown:function(a,b){b=this.chart.pointer.normalize(b);a.fixedPosition={chartX:b.chartX,chartY:b.chartY,plotX:a.plotX,plotY:a.plotY};a.inDragMode=!0},onMouseMove:function(a,b){if(a.fixedPosition&&a.inDragMode){const f=this.chart;b=f.pointer.normalize(b);var c=a.fixedPosition.chartX-b.chartX,e=a.fixedPosition.chartY-b.chartY;b=f.graphLayoutsLookup;if(5<Math.abs(c)||5<Math.abs(e))c=a.fixedPosition.plotX-c,e=a.fixedPosition.plotY-
e,f.isInsidePlot(c,e)&&(a.plotX=c,a.plotY=e,a.hasDragged=!0,this.redrawHalo(a),b.forEach(a=>{a.restartSimulation()}))}},onMouseUp:function(a,b){a.fixedPosition&&(a.hasDragged&&(this.layout.enableSimulation?this.layout.start():this.chart.redraw()),a.inDragMode=a.hasDragged=!1,this.options.fixedDraggable||delete a.fixedPosition)},redrawHalo:function(a){a&&this.halo&&this.halo.attr({d:a.haloPath(this.options.states.hover.halo.size)})}}});h(d,"Series/GraphLayoutComposition.js",[d["Core/Animation/AnimationUtilities.js"],
d["Core/Utilities.js"]],function(b,a){function c(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(a=>{a.updateSimulation()}),this.redraw())}function f(){this.graphLayoutsLookup&&(this.graphLayoutsLookup.forEach(a=>{a.updateSimulation(!1)}),this.redraw())}function e(){this.graphLayoutsLookup&&this.graphLayoutsLookup.forEach(a=>{a.stop()})}function d(){let a,b=!1;const c=c=>{c.maxIterations--&&isFinite(c.temperature)&&!c.isStable()&&!c.enableSimulation&&(c.beforeStep&&c.beforeStep(),c.step(),
a=!1,b=!0)};if(this.graphLayoutsLookup){u(!1,this);for(this.graphLayoutsLookup.forEach(a=>a.start());!a;)a=!0,this.graphLayoutsLookup.forEach(c);b&&this.series.forEach(a=>{a&&a.layout&&a.render()})}}const {setAnimation:u}=b,{addEvent:h}=a,m=[];return{compose:function(b){a.pushUnique(m,b)&&(h(b,"afterPrint",c),h(b,"beforePrint",f),h(b,"predraw",e),h(b,"render",d))},integrations:{},layouts:{}}});h(d,"Series/NodesComposition.js",[d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(b,
a){const {series:{prototype:c,prototype:{pointClass:{prototype:f}}}}=b,{defined:e,extend:d,find:h,merge:r,pick:m}=a;var p;(function(b){function n(){this.data=[].concat(this.points||[],this.nodes);return c.destroy.apply(this,arguments)}function l(){this.nodes&&(this.nodes.forEach(a=>{a.destroy()}),this.nodes.length=0);c.setData.apply(this,arguments)}function k(a){const b=arguments,k=this.isNode?this.linksTo.concat(this.linksFrom):[this.fromNode,this.toNode];"select"!==a&&k.forEach(a=>{a&&a.series&&
(f.setState.apply(a,b),a.isNode||(a.fromNode.graphic&&f.setState.apply(a.fromNode,b),a.toNode&&a.toNode.graphic&&f.setState.apply(a.toNode,b)))});f.setState.apply(this,b)}function g(a,b,k,c){const g=this.series.options.nodes,q=this.series.options.data,e=q&&q.length||0,d=q&&q[this.index];f.update.call(this,a,this.isNode?!1:b,k,c);this.isNode&&(a=(g||[]).reduce((a,b,k)=>this.id===b.id?k:a,-1),c=r(g&&g[a]||{},q&&q[this.index]||{}),q&&(d?q[this.index]=d:q.length=e),g?0<=a?g[a]=c:g.push(c):this.series.options.nodes=
[c],m(b,!0)&&this.series.chart.redraw(k))}const t=[];b.compose=function(b,c){a.pushUnique(t,b)&&(b=b.prototype,b.setNodeState=k,b.setState=k,b.update=g);a.pushUnique(t,c)&&(b=c.prototype,b.destroy=n,b.setData=l);return c};b.createNode=function(a){const b=this.pointClass;var k=(a,b)=>h(a,a=>a.id===b);let c=k(this.nodes,a);if(!c){k=this.options.nodes&&k(this.options.nodes,a);const g=(new b).init(this,d({className:"highcharts-node",isNode:!0,id:a,y:1},k));g.linksTo=[];g.linksFrom=[];g.getSum=function(){let a=
0,b=0;g.linksTo.forEach(b=>{a+=b.weight||0});g.linksFrom.forEach(a=>{b+=a.weight||0});return Math.max(a,b)};g.offset=function(a,b){let c=0;for(let k=0;k<g[b].length;k++){if(g[b][k]===a)return c;c+=g[b][k].weight}};g.hasShape=function(){let a=0;g.linksTo.forEach(b=>{b.outgoing&&a++});return!g.linksTo.length||a!==g.linksTo.length};g.index=this.nodes.push(g)-1;c=g}c.formatPrefix="node";c.name=c.name||c.options.id||"";c.mass=m(c.options.mass,c.options.marker&&c.options.marker.radius,this.options.marker&&
this.options.marker.radius,4);return c};b.destroy=n;b.generatePoints=function(){const a=this.chart,b={};c.generatePoints.call(this);this.nodes||(this.nodes=[]);this.colorCounter=0;this.nodes.forEach(a=>{a.linksFrom.length=0;a.linksTo.length=0;a.level=a.options.level});this.points.forEach(c=>{e(c.from)&&(b[c.from]||(b[c.from]=this.createNode(c.from)),b[c.from].linksFrom.push(c),c.fromNode=b[c.from],a.styledMode?c.colorIndex=m(c.options.colorIndex,b[c.from].colorIndex):c.color=c.options.color||b[c.from].color);
e(c.to)&&(b[c.to]||(b[c.to]=this.createNode(c.to)),b[c.to].linksTo.push(c),c.toNode=b[c.to]);c.name=c.name||c.id},this);this.nodeLookup=b};b.setNodeState=k;b.updateNode=g})(p||(p={}));return p});h(d,"Series/Networkgraph/NetworkgraphPoint.js",[d["Series/NodesComposition.js"],d["Core/Series/SeriesRegistry.js"],d["Core/Utilities.js"]],function(b,a,c){const {series:{prototype:f,prototype:{pointClass:e}}}=a,{addEvent:d,css:h,defined:r,extend:m,pick:p}=c;class v extends e{destroy(){this.isNode&&this.linksFrom.concat(this.linksTo).forEach(function(a){a.destroyElements&&
a.destroyElements()});this.series.layout.removeElementFromCollection(this,this.series.layout[this.isNode?"nodes":"links"]);return e.prototype.destroy.apply(this,arguments)}getDegree(){const a=this.isNode?this.linksFrom.length+this.linksTo.length:0;return 0===a?1:a}getLinkAttributes(){const a=this.series.options.link,b=this.options;return{"stroke-width":p(b.width,a.width),stroke:b.color||a.color,dashstyle:b.dashStyle||a.dashStyle,opacity:p(b.opacity,a.opacity,1)}}getLinkPath(){let a=this.fromNode,
b=this.toNode;a.plotX>b.plotX&&(a=this.toNode,b=this.fromNode);return[["M",a.plotX||0,a.plotY||0],["L",b.plotX||0,b.plotY||0]]}getMass(){const a=this.fromNode.mass,b=this.toNode.mass,c=a+b;return{fromNode:1-a/c,toNode:1-b/c}}init(a,b,c){super.init(a,b,c);this.series.options.draggable&&!this.series.chart.styledMode&&(d(this,"mouseOver",function(){h(this.series.chart.container,{cursor:"move"})}),d(this,"mouseOut",function(){h(this.series.chart.container,{cursor:"default"})}));return this}isValid(){return!this.isNode||
r(this.id)}redrawLink(){var a=this.getLinkPath();let b;if(this.graphic){this.shapeArgs={d:a};this.series.chart.styledMode||(b=this.series.pointAttribs(this),this.graphic.attr(b),(this.dataLabels||[]).forEach(function(a){a&&a.attr({opacity:b.opacity})}));this.graphic.animate(this.shapeArgs);const c=a[0];a=a[1];"M"===c[0]&&"L"===a[0]&&(this.plotX=(c[1]+a[1])/2,this.plotY=(c[2]+a[2])/2)}}remove(a,b){let c=this.series,g=c.options.nodes||[],e,d=g.length;if(this.isNode){c.points=[];[].concat(this.linksFrom).concat(this.linksTo).forEach(function(a){e=
a.fromNode.linksFrom.indexOf(a);-1<e&&a.fromNode.linksFrom.splice(e,1);e=a.toNode.linksTo.indexOf(a);-1<e&&a.toNode.linksTo.splice(e,1);f.removePoint.call(c,c.data.indexOf(a),!1,!1)});c.points=c.data.slice();for(c.nodes.splice(c.nodes.indexOf(this),1);d--;)if(g[d].id===this.options.id){c.options.nodes.splice(d,1);break}this&&this.destroy();c.isDirty=!0;c.isDirtyData=!0;a&&c.chart.redraw(a)}else c.removePoint(c.data.indexOf(this),a,b)}renderLink(){let a;this.graphic||(this.graphic=this.series.chart.renderer.path(this.getLinkPath()).addClass(this.getClassName(),
!0).add(this.series.group),this.series.chart.styledMode||(a=this.series.pointAttribs(this),this.graphic.attr(a),(this.dataLabels||[]).forEach(function(b){b&&b.attr({opacity:a.opacity})})))}}m(v.prototype,{setState:b.setNodeState});return v});h(d,"Series/Networkgraph/NetworkgraphSeriesDefaults.js",[],function(){"";return{stickyTracking:!1,inactiveOtherPoints:!0,marker:{enabled:!0,states:{inactive:{opacity:.3,animation:{duration:50}}}},states:{inactive:{linkOpacity:.3,animation:{duration:50}}},dataLabels:{formatter:function(){return this.key},
linkFormatter:function(){return this.point.fromNode.name+"<br>"+this.point.toNode.name},linkTextPath:{enabled:!0},textPath:{enabled:!1},style:{transition:"opacity 2000ms"},defer:!0,animation:{defer:1E3}},link:{color:"rgba(100, 100, 100, 0.5)",width:1},draggable:!0,layoutAlgorithm:{initialPositions:"circle",initialPositionRadius:1,enableSimulation:!1,theta:.5,maxSpeed:10,approximation:"none",type:"reingold-fruchterman",integration:"euler",maxIterations:1E3,gravitationalConstant:.0625,friction:-.981},
showInLegend:!1}});h(d,"Series/Networkgraph/EulerIntegration.js",[],function(){return{attractive:function(b,a,c,f){const e=b.getMass(),d=c.x/f*a;a*=c.y/f;b.fromNode.fixedPosition||(b.fromNode.dispX-=d*e.fromNode/b.fromNode.degree,b.fromNode.dispY-=a*e.fromNode/b.fromNode.degree);b.toNode.fixedPosition||(b.toNode.dispX+=d*e.toNode/b.toNode.degree,b.toNode.dispY+=a*e.toNode/b.toNode.degree)},attractiveForceFunction:function(b,a){return b*b/a},barycenter:function(){const b=this.options.gravitationalConstant,
a=this.barycenter.xFactor,c=this.barycenter.yFactor;this.nodes.forEach(function(f){if(!f.fixedPosition){var e=f.getDegree();e*=1+e/2;f.dispX+=(a-f.plotX)*b*e/f.degree;f.dispY+=(c-f.plotY)*b*e/f.degree}})},getK:function(b){return Math.pow(b.box.width*b.box.height/b.nodes.length,.3)},integrate:function(b,a){let c;a.dispX+=a.dispX*b.options.friction;a.dispY+=a.dispY*b.options.friction;c=a.temperature=b.vectorLength({x:a.dispX,y:a.dispY});0!==c&&(a.plotX+=a.dispX/c*Math.min(Math.abs(a.dispX),b.temperature),
a.plotY+=a.dispY/c*Math.min(Math.abs(a.dispY),b.temperature))},repulsive:function(b,a,c,f){b.dispX+=c.x/f*a/b.degree;b.dispY+=c.y/f*a/b.degree},repulsiveForceFunction:function(b,a){return a*a/b}}});h(d,"Series/Networkgraph/QuadTreeNode.js",[],function(){class b{constructor(a){this.isInternal=this.isEmpty=this.body=!1;this.nodes=[];this.box=a;this.boxSize=Math.min(a.width,a.height)}divideBox(){const a=this.box.width/2,c=this.box.height/2;this.nodes[0]=new b({left:this.box.left,top:this.box.top,width:a,
height:c});this.nodes[1]=new b({left:this.box.left+a,top:this.box.top,width:a,height:c});this.nodes[2]=new b({left:this.box.left+a,top:this.box.top+c,width:a,height:c});this.nodes[3]=new b({left:this.box.left,top:this.box.top+c,width:a,height:c})}getBoxPosition(a){const b=a.plotY<this.box.top+this.box.height/2;return a.plotX<this.box.left+this.box.width/2?b?0:3:b?1:2}insert(a,c){this.isInternal?this.nodes[this.getBoxPosition(a)].insert(a,c-1):(this.isEmpty=!1,this.body?c?(this.isInternal=!0,this.divideBox(),
!0!==this.body&&(this.nodes[this.getBoxPosition(this.body)].insert(this.body,c-1),this.body=!0),this.nodes[this.getBoxPosition(a)].insert(a,c-1)):(c=new b({top:a.plotX||NaN,left:a.plotY||NaN,width:.1,height:.1}),c.body=a,c.isInternal=!1,this.nodes.push(c)):(this.isInternal=!1,this.body=a))}updateMassAndCenter(){let a=0,b=0,f=0;if(this.isInternal){for(const c of this.nodes)c.isEmpty||(a+=c.mass,b+=c.plotX*c.mass,f+=c.plotY*c.mass);b/=a;f/=a}else this.body&&(a=this.body.mass,b=this.body.plotX,f=this.body.plotY);
this.mass=a;this.plotX=b;this.plotY=f}}return b});h(d,"Series/Networkgraph/QuadTree.js",[d["Series/Networkgraph/QuadTreeNode.js"]],function(b){class a{constructor(a,f,e,d){this.box={left:a,top:f,width:e,height:d};this.maxDepth=25;this.root=new b(this.box);this.root.isInternal=!0;this.root.isRoot=!0;this.root.divideBox()}calculateMassAndCenter(){this.visitNodeRecursive(null,null,function(a){a.updateMassAndCenter()})}insertNodes(a){for(const b of a)this.root.insert(b,this.maxDepth)}visitNodeRecursive(a,
b,e){let c;a||(a=this.root);a===this.root&&b&&(c=b(a));if(!1!==c){for(const d of a.nodes){if(d.isInternal){b&&(c=b(d));if(!1===c)continue;this.visitNodeRecursive(d,b,e)}else d.body&&b&&b(d.body);e&&e(d)}a===this.root&&e&&e(a)}}}return a});h(d,"Series/Networkgraph/VerletIntegration.js",[],function(){return{attractive:function(b,a,c){const d=b.getMass(),e=-c.x*a*this.diffTemperature;a=-c.y*a*this.diffTemperature;b.fromNode.fixedPosition||(b.fromNode.plotX-=e*d.fromNode/b.fromNode.degree,b.fromNode.plotY-=
a*d.fromNode/b.fromNode.degree);b.toNode.fixedPosition||(b.toNode.plotX+=e*d.toNode/b.toNode.degree,b.toNode.plotY+=a*d.toNode/b.toNode.degree)},attractiveForceFunction:function(b,a){return(a-b)/b},barycenter:function(){let b=this.options.gravitationalConstant,a=this.barycenter.xFactor,c=this.barycenter.yFactor;a=(a-(this.box.left+this.box.width)/2)*b;c=(c-(this.box.top+this.box.height)/2)*b;this.nodes.forEach(function(b){b.fixedPosition||(b.plotX-=a/b.mass/b.degree,b.plotY-=c/b.mass/b.degree)})},
getK:function(b){return Math.pow(b.box.width*b.box.height/b.nodes.length,.5)},integrate:function(b,a){var c=-b.options.friction;let d=b.options.maxSpeed,e=(a.plotX+a.dispX-a.prevX)*c;c*=a.plotY+a.dispY-a.prevY;var h=Math.abs;let u=h(e)/(e||1);h=h(c)/(c||1);e=u*Math.min(d,Math.abs(e));c=h*Math.min(d,Math.abs(c));a.prevX=a.plotX+a.dispX;a.prevY=a.plotY+a.dispY;a.plotX+=e;a.plotY+=c;a.temperature=b.vectorLength({x:e,y:c})},repulsive:function(b,a,c){a=a*this.diffTemperature/b.mass/b.degree;b.fixedPosition||
(b.plotX+=c.x*a,b.plotY+=c.y*a)},repulsiveForceFunction:function(b,a){return(a-b)/b*(a>b?1:0)}}});h(d,"Series/Networkgraph/ReingoldFruchtermanLayout.js",[d["Series/Networkgraph/EulerIntegration.js"],d["Core/Globals.js"],d["Series/GraphLayoutComposition.js"],d["Series/Networkgraph/QuadTree.js"],d["Core/Utilities.js"],d["Series/Networkgraph/VerletIntegration.js"]],function(b,a,c,d,e,h){const {win:f}=a,{clamp:l,defined:m,isFunction:p,fireEvent:v,pick:n}=e;class w{constructor(){this.attractiveForce=void 0;
this.box={};this.currentStep=0;this.initialRendering=!0;this.integration=void 0;this.links=[];this.nodes=[];this.repulsiveForce=this.quadTree=this.options=void 0;this.series=[];this.simulation=!1}static compose(a){c.compose(a);c.integrations.euler=b;c.integrations.verlet=h;c.layouts["reingold-fruchterman"]=w}init(a){this.options=a;this.nodes=[];this.links=[];this.series=[];this.box={x:0,y:0,width:0,height:0};this.setInitialRendering(!0);this.integration=c.integrations[a.integration];this.enableSimulation=
a.enableSimulation;this.attractiveForce=n(a.attractiveForce,this.integration.attractiveForceFunction);this.repulsiveForce=n(a.repulsiveForce,this.integration.repulsiveForceFunction);this.approximation=a.approximation}updateSimulation(a){this.enableSimulation=n(a,this.options.enableSimulation)}start(){const a=this.series,b=this.options;this.currentStep=0;this.forces=a[0]&&a[0].forces||[];this.chart=a[0]&&a[0].chart;this.initialRendering&&(this.initPositions(),a.forEach(function(a){a.finishedAnimating=
!0;a.render()}));this.setK();this.resetSimulation(b);this.enableSimulation&&this.step()}step(){const a=this.series;this.currentStep++;"barnes-hut"===this.approximation&&(this.createQuadTree(),this.quadTree.calculateMassAndCenter());for(const a of this.forces||[])this[a+"Forces"](this.temperature);this.applyLimits();this.temperature=this.coolDown(this.startTemperature,this.diffTemperature,this.currentStep);this.prevSystemTemperature=this.systemTemperature;this.systemTemperature=this.getSystemTemperature();
if(this.enableSimulation){for(const b of a)b.chart&&b.render();this.maxIterations--&&isFinite(this.temperature)&&!this.isStable()?(this.simulation&&f.cancelAnimationFrame(this.simulation),this.simulation=f.requestAnimationFrame(()=>this.step())):(this.simulation=!1,this.series.forEach(a=>{v(a,"afterSimulation")}))}}stop(){this.simulation&&f.cancelAnimationFrame(this.simulation)}setArea(a,b,c,d){this.box={left:a,top:b,width:c,height:d}}setK(){this.k=this.options.linkLength||this.integration.getK(this)}addElementsToCollection(a,
b){for(const c of a)-1===b.indexOf(c)&&b.push(c)}removeElementFromCollection(a,b){a=b.indexOf(a);-1!==a&&b.splice(a,1)}clear(){this.nodes.length=0;this.links.length=0;this.series.length=0;this.resetSimulation()}resetSimulation(){this.forcedStop=!1;this.systemTemperature=0;this.setMaxIterations();this.setTemperature();this.setDiffTemperature()}restartSimulation(){this.simulation?this.resetSimulation():(this.setInitialRendering(!1),this.enableSimulation?this.start():this.setMaxIterations(1),this.chart&&
this.chart.redraw(),this.setInitialRendering(!0))}setMaxIterations(a){this.maxIterations=n(a,this.options.maxIterations)}setTemperature(){this.temperature=this.startTemperature=Math.sqrt(this.nodes.length)}setDiffTemperature(){this.diffTemperature=this.startTemperature/(this.options.maxIterations+1)}setInitialRendering(a){this.initialRendering=a}createQuadTree(){this.quadTree=new d(this.box.left,this.box.top,this.box.width,this.box.height);this.quadTree.insertNodes(this.nodes)}initPositions(){const a=
this.options.initialPositions;if(p(a)){a.call(this);for(const a of this.nodes)m(a.prevX)||(a.prevX=a.plotX),m(a.prevY)||(a.prevY=a.plotY),a.dispX=0,a.dispY=0}else"circle"===a?this.setCircularPositions():this.setRandomPositions()}setCircularPositions(){const a=this.box;var b=this.nodes;const c=2*Math.PI/(b.length+1),d=b.filter(function(a){return 0===a.linksTo.length}),e={},f=this.options.initialPositionRadius,h=a=>{for(const b of a.linksFrom||[])e[b.toNode.id]||(e[b.toNode.id]=!0,l.push(b.toNode),
h(b.toNode))};let l=[];for(const a of d)l.push(a),h(a);if(l.length)for(const a of b)-1===l.indexOf(a)&&l.push(a);else l=b;for(let d=0,e=l.length;d<e;++d)b=l[d],b.plotX=b.prevX=n(b.plotX,a.width/2+f*Math.cos(d*c)),b.plotY=b.prevY=n(b.plotY,a.height/2+f*Math.sin(d*c)),b.dispX=0,b.dispY=0}setRandomPositions(){const a=this.box,b=this.nodes,c=b.length+1,d=a=>{a=a*a/Math.PI;return a-=Math.floor(a)};let e;for(let g=0,k=b.length;g<k;++g)e=b[g],e.plotX=e.prevX=n(e.plotX,a.width*d(g)),e.plotY=e.prevY=n(e.plotY,
a.height*d(c+g)),e.dispX=0,e.dispY=0}force(a,...b){this.integration[a].apply(this,b)}barycenterForces(){this.getBarycenter();this.force("barycenter")}getBarycenter(){let a=0,b=0,c=0;for(const d of this.nodes)b+=d.plotX*d.mass,c+=d.plotY*d.mass,a+=d.mass;return this.barycenter={x:b,y:c,xFactor:b/a,yFactor:c/a}}barnesHutApproximation(a,b){const c=this.getDistXY(a,b),d=this.vectorLength(c);let e,g;a!==b&&0!==d&&(b.isInternal?b.boxSize/d<this.options.theta&&0!==d?(g=this.repulsiveForce(d,this.k),this.force("repulsive",
a,g*b.mass,c,d),e=!1):e=!0:(g=this.repulsiveForce(d,this.k),this.force("repulsive",a,g*b.mass,c,d)));return e}repulsiveForces(){if("barnes-hut"===this.approximation)for(const a of this.nodes)this.quadTree.visitNodeRecursive(null,b=>this.barnesHutApproximation(a,b));else{let a,b,c;for(const d of this.nodes)for(const e of this.nodes)d===e||d.fixedPosition||(c=this.getDistXY(d,e),b=this.vectorLength(c),0!==b&&(a=this.repulsiveForce(b,this.k),this.force("repulsive",d,a*e.mass,c,b)))}}attractiveForces(){let a,
b,c;for(const d of this.links)d.fromNode&&d.toNode&&(a=this.getDistXY(d.fromNode,d.toNode),b=this.vectorLength(a),0!==b&&(c=this.attractiveForce(b,this.k),this.force("attractive",d,c,a,b)))}applyLimits(){const a=this.nodes;for(const b of a){if(b.fixedPosition)break;this.integration.integrate(this,b);this.applyLimitBox(b,this.box);b.dispX=0;b.dispY=0}}applyLimitBox(a,b){const c=a.radius;a.plotX=l(a.plotX,b.left+c,b.width-c);a.plotY=l(a.plotY,b.top+c,b.height-c)}coolDown(a,b,c){return a-b*c}isStable(){return.00001>
Math.abs(this.systemTemperature-this.prevSystemTemperature)||0>=this.temperature}getSystemTemperature(){let a=0;for(const b of this.nodes)a+=b.temperature;return a}vectorLength(a){return Math.sqrt(a.x*a.x+a.y*a.y)}getDistR(a,b){a=this.getDistXY(a,b);return this.vectorLength(a)}getDistXY(a,b){const c=a.plotX-b.plotX;a=a.plotY-b.plotY;return{x:c,y:a,absX:Math.abs(c),absY:Math.abs(a)}}}return w});h(d,"Series/SimulationSeriesUtilities.js",[d["Core/Utilities.js"],d["Core/Animation/AnimationUtilities.js"]],
function(b,a){const {syncTimeout:c}=b,{animObject:d}=a;return{initDataLabels:function(){const a=this.options.dataLabels;if(!this.dataLabelsGroup){const b=this.initDataLabelsGroup();!this.chart.styledMode&&(null===a||void 0===a?0:a.style)&&b.css(a.style);b.attr({opacity:0});this.visible&&b.show();return b}this.dataLabelsGroup.attr({opacity:1});return this.dataLabelsGroup},initDataLabelsDefer:function(){var a;const b=this.options.dataLabels;(null===b||void 0===b?0:b.defer)&&(null===(a=this.options.layoutAlgorithm)||
void 0===a?0:a.enableSimulation)?c(()=>{this.deferDataLabels=!1},b?d(b.animation).defer:0):this.deferDataLabels=!1}}});h(d,"Series/Networkgraph/NetworkgraphSeries.js",[d["Series/DragNodesComposition.js"],d["Series/GraphLayoutComposition.js"],d["Core/Globals.js"],d["Series/Networkgraph/NetworkgraphPoint.js"],d["Series/Networkgraph/NetworkgraphSeriesDefaults.js"],d["Series/NodesComposition.js"],d["Series/Networkgraph/ReingoldFruchtermanLayout.js"],d["Core/Series/SeriesRegistry.js"],d["Series/SimulationSeriesUtilities.js"],
d["Core/Utilities.js"]],function(b,a,c,d,e,h,u,r,m,p){({noop:c}=c);const {series:f,seriesTypes:{column:{prototype:l},line:{prototype:w}}}=r,{initDataLabels:k,initDataLabelsDefer:g}=m,{addEvent:t,defined:y,extend:A,merge:B,pick:z}=p;class x extends f{constructor(){super(...arguments);this.points=this.options=this.nodes=this.data=void 0;this.deferDataLabels=!0}static compose(a){b.compose(a);u.compose(a)}deferLayout(){let b=this.options.layoutAlgorithm,c=this.chart.graphLayoutsStorage,d=this.chart.graphLayoutsLookup,
e=this.chart.options.chart,f;this.visible&&(c||(this.chart.graphLayoutsStorage=c={},this.chart.graphLayoutsLookup=d=[]),f=c[b.type],f||(b.enableSimulation=y(e.forExport)?!e.forExport:b.enableSimulation,c[b.type]=f=new a.layouts[b.type],f.init(b),d.splice(f.index,0,f)),this.layout=f,f.setArea(0,0,this.chart.plotWidth,this.chart.plotHeight),f.addElementsToCollection([this],f.series),f.addElementsToCollection(this.nodes,f.nodes),f.addElementsToCollection(this.points,f.links))}destroy(){this.layout&&
this.layout.removeElementFromCollection(this,this.layout.series);h.destroy.call(this)}drawDataLabels(){if(!this.deferDataLabels){var a=this.options.dataLabels;if(null===a||void 0===a?0:a.textPath)var b=a.textPath;f.prototype.drawDataLabels.call(this,this.nodes);if(null===a||void 0===a?0:a.linkTextPath)a.textPath=a.linkTextPath;f.prototype.drawDataLabels.call(this,this.data);if(null===a||void 0===a?0:a.textPath)a.textPath=b}}generatePoints(){let a,b;h.generatePoints.apply(this,arguments);this.options.nodes&&
this.options.nodes.forEach(function(a){this.nodeLookup[a.id]||(this.nodeLookup[a.id]=this.createNode(a.id))},this);for(b=this.nodes.length-1;0<=b;b--)a=this.nodes[b],a.degree=a.getDegree(),a.radius=z(a.marker&&a.marker.radius,this.options.marker&&this.options.marker.radius,0),this.nodeLookup[a.id]||a.remove();this.data.forEach(function(a){a.formatPrefix="link"});this.indexateNodes()}getPointsCollection(){return this.nodes||[]}indexateNodes(){this.nodes.forEach(function(a,b){a.index=b})}init(a,b){super.init(a,
b);g.call(this);t(this,"updatedData",()=>{this.layout&&this.layout.stop()});t(this,"afterUpdate",()=>{this.nodes.forEach(a=>{a&&a.series&&a.resolveColor()})});t(this,"afterSimulation",function(){this.deferDataLabels=!1;this.drawDataLabels()});return this}markerAttribs(a,b){b=f.prototype.markerAttribs.call(this,a,b);y(a.plotY)||(b.y=0);b.x=(a.plotX||0)-(b.width||0)/2;return b}pointAttribs(a,b){var c=b||a&&a.state||"normal";b=f.prototype.pointAttribs.call(this,a,c);c=this.options.states[c];a&&!a.isNode&&
(b=a.getLinkAttributes(),c&&(b={stroke:c.linkColor||b.stroke,dashstyle:c.linkDashStyle||b.dashstyle,opacity:z(c.linkOpacity,b.opacity),"stroke-width":c.linkColor||b["stroke-width"]}));return b}render(){const a=this.points,b=this.chart.hoverPoint,c=[];this.points=this.nodes;w.render.call(this);this.points=a;a.forEach(function(a){a.fromNode&&a.toNode&&(a.renderLink(),a.redrawLink())});b&&b.series===this&&this.redrawHalo(b);this.chart.hasRendered&&!this.options.dataLabels.allowOverlap&&(this.nodes.concat(this.points).forEach(function(a){a.dataLabel&&
c.push(a.dataLabel)}),this.chart.hideOverlappingLabels(c))}setState(a,b){b?(this.points=this.nodes.concat(this.data),f.prototype.setState.apply(this,arguments),this.points=this.data):f.prototype.setState.apply(this,arguments);this.layout.simulation||a||this.render()}translate(){this.processedXData||this.processData();this.generatePoints();this.deferLayout();this.nodes.forEach(function(a){a.isInside=!0;a.linksFrom.forEach(function(a){a.shapeType="path";a.y=1})})}}x.defaultOptions=B(f.defaultOptions,
e);A(x.prototype,{pointClass:d,animate:void 0,directTouch:!0,drawGraph:void 0,forces:["barycenter","repulsive","attractive"],hasDraggableNodes:!0,isCartesian:!1,noSharedTooltip:!0,pointArrayMap:["from","to"],requireSorting:!1,trackerGroups:["group","markerGroup","dataLabelsGroup"],initDataLabels:k,buildKDTree:c,createNode:h.createNode,drawTracker:l.drawTracker,onMouseDown:b.onMouseDown,onMouseMove:b.onMouseMove,onMouseUp:b.onMouseUp,redrawHalo:b.redrawHalo});r.registerSeriesType("networkgraph",x);
"";return x});h(d,"masters/modules/networkgraph.src.js",[d["Core/Globals.js"],d["Series/Networkgraph/NetworkgraphSeries.js"]],function(b,a){a.compose(b.Chart)})});
//# sourceMappingURL=networkgraph.js.map