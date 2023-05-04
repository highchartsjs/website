/*
 Highcharts JS v11.0.0 (2023-04-27)

 Marker clusters module for Highcharts

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
'use strict';(function(n){"object"===typeof module&&module.exports?(n["default"]=n,module.exports=n):"function"===typeof define&&define.amd?define("highcharts/modules/marker-clusters",["highcharts"],function(z){n(z);n.Highcharts=z;return n}):n("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(n){function z(n,F,z,I){n.hasOwnProperty(F)||(n[F]=I.apply(null,z),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:F,module:n[F]}})))}n=
n?n._modules:{};z(n,"Extensions/MarkerClusters.js",[n["Core/Animation/AnimationUtilities.js"],n["Core/Chart/Chart.js"],n["Core/Defaults.js"],n["Core/Series/Point.js"],n["Core/Series/Series.js"],n["Core/Series/SeriesRegistry.js"],n["Core/Renderer/SVG/SVGRenderer.js"],n["Core/Utilities.js"],n["Core/Axis/Axis.js"]],function(n,z,ea,I,O,P,y,fa,ha){function F(a){let b=a.length,d=0,e=0,c;for(c=0;c<b;c++)d+=a[c].x,e+=a[c].y;return{x:d/b,y:e/b}}function U(a,b){const d=[];d.length=b;a.clusters.forEach(function(a){a.data.forEach(function(a){d[a.dataIndex]=
a})});a.noise.forEach(function(a){d[a.data[0].dataIndex]=a.data[0]});return d}function V(a,b,d,e,c){a.point&&(e&&a.point.graphic&&(a.point.graphic.show(),a.point.graphic.attr({opacity:b}).animate({opacity:1},d)),c&&a.point.dataLabel&&(a.point.dataLabel.show(),a.point.dataLabel.attr({opacity:b}).animate({opacity:1},d)))}function W(a,b,d){a.point&&(b&&a.point.graphic&&a.point.graphic.hide(),d&&a.point.dataLabel&&a.point.dataLabel.hide())}function ia(a){a&&X(a,function(a){a.point&&a.point.destroy&&a.point.destroy()})}
function Q(a,b,d,e){V(a,e,d,!0,!0);b.forEach(function(a){a.point&&a.point.destroy&&a.point.destroy()})}const {animObject:Y}=n;({defaultOptions:n}=ea);({seriesTypes:P}=P);const {prototype:{symbols:L}}=y,{addEvent:B,defined:C,error:Z,isArray:aa,isFunction:R,isObject:S,isNumber:G,merge:T,objectEach:X,relativeLength:ba,syncTimeout:M}=fa;"";y=P.scatter;const ca=O.prototype.generatePoints;let N=[],da=0;const D={enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,
distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}};(n.plotOptions||{}).series=T((n.plotOptions||{}).series,{cluster:D,tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}});const K=(a,b)=>{const {chart:d,xAxis:e,yAxis:c}=a;return d.mapView?d.mapView.pixelsToProjectedUnits(b):{x:e?
e.toValue(b.x):0,y:c?c.toValue(b.y):0}},J=(a,b)=>{const {chart:d,xAxis:e,yAxis:c}=a;return d.mapView?d.mapView.projectedUnitsToPixels(b):{x:e?e.toPixels(b.x):0,y:c?c.toPixels(b.y):0}};L.cluster=function(a,b,d,e){d/=2;e/=2;const c=L.arc(a+d,b+e,d-4,e-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),k=L.arc(a+d,b+e,d-3,e-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:d-2,open:!1});return L.arc(a+d,b+e,d-1,e-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:d,open:!1}).concat(k,c)};y.prototype.animateClusterPoint=
function(a){const b=this.chart,d=b.mapView,e=Y((this.options.cluster||{}).animation),c=e.duration||500;var k=(this.markerClusterInfo||{}).pointsState;const m=(k||{}).newState,l=(k||{}).oldState,r=[];let f,g,q=k=0,t=0,p=!1,h=!1;l&&m&&(g=m[a.stateId],k=J(this,g),q=k.x-(d?0:b.plotLeft),t=k.y-(d?0:b.plotTop),1===g.parentsId.length?(a=(m||{})[a.stateId].parentsId[0],f=l[a],g.point&&g.point.graphic&&f&&f.point&&f.point.plotX&&f.point.plotY&&f.point.plotX!==g.point.plotX&&f.point.plotY!==g.point.plotY&&
(a=g.point.graphic.getBBox(),k=g.point.graphic&&g.point.graphic.isImg?0:a.width/2,g.point.graphic.attr({x:f.point.plotX-k,y:f.point.plotY-k}),g.point.graphic.animate({x:q-(g.point.graphic.radius||0),y:t-(g.point.graphic.radius||0)},e,function(){h=!0;f.point&&f.point.destroy&&f.point.destroy()}),g.point.dataLabel&&g.point.dataLabel.alignAttr&&f.point.dataLabel&&f.point.dataLabel.alignAttr&&(g.point.dataLabel.attr({x:f.point.dataLabel.alignAttr.x,y:f.point.dataLabel.alignAttr.y}),g.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,
y:g.point.dataLabel.alignAttr.y},e)))):0===g.parentsId.length?(W(g,!0,!0),M(function(){V(g,.1,e,!0,!0)},c/2)):(W(g,!0,!0),g.parentsId.forEach(function(a){l&&l[a]&&(f=l[a],r.push(f),f.point&&f.point.graphic&&(p=!0,f.point.graphic.show(),f.point.graphic.animate({x:q-(f.point.graphic.radius||0),y:t-(f.point.graphic.radius||0),opacity:.4},e,function(){h=!0;Q(g,r,e,.7)}),f.point.dataLabel&&-9999!==f.point.dataLabel.y&&g.point&&g.point.dataLabel&&g.point.dataLabel.alignAttr&&(f.point.dataLabel.show(),f.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,
y:g.point.dataLabel.alignAttr.y,opacity:.4},e))))}),M(function(){h||Q(g,r,e,.85)},c),p||M(function(){Q(g,r,e,.1)},c/2)))};y.prototype.getGridOffset=function(){var a=this.chart,b=this.xAxis;let d=this.yAxis;b=b&&this.dataMinX&&this.dataMaxX?b.reversed?b.toPixels(this.dataMaxX):b.toPixels(this.dataMinX):a.plotLeft;a=d&&this.dataMinY&&this.dataMaxY?d.reversed?d.toPixels(this.dataMinY):d.toPixels(this.dataMaxY):a.plotTop;return{plotLeft:b,plotTop:a}};y.prototype.getScaledGridSize=function(a){var b=this.xAxis,
d=this.chart.mapView;a=a.processedGridSize||D.layoutAlgorithm.gridSize;let e=!0,c=1,k=1;this.gridValueSize||(this.gridValueSize=d?a/d.getScale():Math.abs(b.toValue(a)-b.toValue(0)));b=d?this.gridValueSize*d.getScale():b.toPixels(this.gridValueSize)-b.toPixels(0);for(b=+(a/b).toFixed(14);e&&1!==b;)d=Math.pow(2,c),.75<b&&1.25>b?e=!1:b>=1/d&&b<1/d*2?(e=!1,k=d):b<=d&&b>d/2&&(e=!1,k=1/d),c++;return a/k/b};y.prototype.getRealExtremes=function(){var a=this.chart,b=a.mapView?0:a.plotLeft,d=K(this,{x:b,y:a.mapView?
0:a.plotTop}),e=K(this,{x:b+a.plotWidth,y:b+a.plotHeight});a=d.x;b=e.x;d=d.y;e=e.y;return{minX:Math.min(a,b),maxX:Math.max(a,b),minY:Math.min(d,e),maxY:Math.max(d,e)}};y.prototype.onDrillToCluster=function(a){(a.point||a.target).firePointEvent("drillToCluster",a,function(a){var b=a.point||a.target;const e=b.series.xAxis,c=b.series.yAxis,k=b.series.chart,m=k.mapView;if((b.series.options.cluster||{}).drillToCluster&&b.clusteredData){var l=b.clusteredData.map(a=>a.x).sort((a,b)=>a-b);b=b.clusteredData.map(a=>
a.y).sort((a,b)=>a-b);var r=l[0],f=l[l.length-1];l=b[0];const d=b[b.length-1],q=Math.abs(.1*(f-r)),t=Math.abs(.1*(d-l));b=Math.min(r,f)-q;r=Math.max(r,f)+q;f=Math.min(l,d)-t;l=Math.max(l,d)+t;m?m.fitToBounds({x1:b,x2:r,y1:f,y2:l}):e&&c&&(k.pointer.zoomX=!0,k.pointer.zoomY=!0,k.zoom({originalEvent:a,xAxis:[{axis:e,min:b,max:r}],yAxis:[{axis:c,min:f,max:l}]}))}})};y.prototype.getClusterDistancesFromPoint=function(a,b,d){const e=[];for(let c=0;c<a.length;c++){const k=J(this,{x:b,y:d}),m=J(this,{x:a[c].posX,
y:a[c].posY});e.push({clusterIndex:c,distance:Math.sqrt(Math.pow(k.x-m.x,2)+Math.pow(k.y-m.y,2))})}return e.sort((a,b)=>a.distance-b.distance)};y.prototype.getPointsState=function(a,b,d){b=b?U(b,d):[];d=U(a,d);let e={},c,k;N=[];a.clusters.forEach(function(a){e[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}});a.noise.forEach(function(a){e[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}});for(k=0;k<d.length;k++)a=d[k],c=b[k],a&&c&&a.parentStateId&&c.parentStateId&&
e[a.parentStateId]&&-1===e[a.parentStateId].parentsId.indexOf(c.parentStateId)&&(e[a.parentStateId].parentsId.push(c.parentStateId),-1===N.indexOf(c.parentStateId)&&N.push(c.parentStateId));return e};y.prototype.markerClusterAlgorithms={grid:function(a,b,d,e){const c={},k=this.getGridOffset();const m=this.getScaledGridSize(e);for(e=0;e<a.length;e++){var l=J(this,{x:a[e],y:b[e]});var r=l.x-k.plotLeft;l=l.y-k.plotTop;r=Math.floor(r/m);l=Math.floor(l/m);r=l+"-"+r;c[r]||(c[r]=[]);c[r].push({dataIndex:d[e],
x:a[e],y:b[e]})}return c},kmeans:function(a,b,d,e){let c=[],k=[],m={},l=e.processedDistance||D.layoutAlgorithm.distance,r=e.iterations,f=0;var g=!0,q=0;let t=0;var p=[];var h;e.processedGridSize=e.processedDistance;q=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,a,b,d,e):{};for(h in q)1<q[h].length&&(p=F(q[h]),c.push({posX:p.x,posY:p.y,oldX:0,oldY:0,startPointsLen:q[h].length,points:[]}));for(;g;){c.map(a=>{a.points.length=0;return a});for(g=k.length=0;g<a.length;g++)q=
a[g],t=b[g],p=this.getClusterDistancesFromPoint(c,q,t),p.length&&p[0].distance<l?c[p[0].clusterIndex].points.push({x:q,y:t,dataIndex:d[g]}):k.push({x:q,y:t,dataIndex:d[g]});for(h=0;h<c.length;h++)1===c[h].points.length&&(p=this.getClusterDistancesFromPoint(c,c[h].points[0].x,c[h].points[0].y),p[1].distance<l&&(c[p[1].clusterIndex].points.push(c[h].points[0]),c[p[0].clusterIndex].points.length=0));g=!1;for(h=0;h<c.length;h++)if(p=F(c[h].points),c[h].oldX=c[h].posX,c[h].oldY=c[h].posY,c[h].posX=p.x,
c[h].posY=p.y,c[h].posX>c[h].oldX+1||c[h].posX<c[h].oldX-1||c[h].posY>c[h].oldY+1||c[h].posY<c[h].oldY-1)g=!0;r&&(g=f<r-1);f++}c.forEach(function(a,b){m["cluster"+b]=a.points});k.forEach(function(a,b){m["noise"+b]=[a]});return m},optimizedKmeans:function(a,b,d,e){let c=this,k=e.processedDistance||D.layoutAlgorithm.gridSize,m={},l=c.getRealExtremes(),r=(c.options.cluster||{}).marker,f,g,q;!c.markerClusterInfo||c.initMaxX&&c.initMaxX<l.maxX||c.initMinX&&c.initMinX>l.minX||c.initMaxY&&c.initMaxY<l.maxY||
c.initMinY&&c.initMinY>l.minY?(c.initMaxX=l.maxX,c.initMinX=l.minX,c.initMaxY=l.maxY,c.initMinY=l.minY,m=c.markerClusterAlgorithms?c.markerClusterAlgorithms.kmeans.call(c,a,b,d,e):{},c.baseClusters=null):(c.baseClusters||(c.baseClusters={clusters:c.markerClusterInfo.clusters,noise:c.markerClusterInfo.noise}),c.baseClusters.clusters.forEach(function(a){a.pointsOutside=[];a.pointsInside=[];a.data.forEach(function(b){const e=J(c,b),d=J(c,a);g=Math.sqrt(Math.pow(e.x-d.x,2)+Math.pow(e.y-d.y,2));q=a.clusterZone&&
a.clusterZone.marker&&a.clusterZone.marker.radius?a.clusterZone.marker.radius:r&&r.radius?r.radius:D.marker.radius;f=0<=k-q?k-q:q;g>q+f&&C(a.pointsOutside)?a.pointsOutside.push(b):C(a.pointsInside)&&a.pointsInside.push(b)});a.pointsInside.length&&(m[a.id]=a.pointsInside);a.pointsOutside.forEach(function(b,c){m[a.id+"_noise"+c]=[b]})}),c.baseClusters.noise.forEach(function(a){m[a.id]=a.data}));return m}};y.prototype.preventClusterCollisions=function(a){let b=this,[d,e]=a.key.split("-").map(parseFloat),
c=a.gridSize,k=a.groupedData,m=a.defaultRadius,l=a.clusterRadius,r=e*c,f=d*c;var g=J(b,a);let q=g.x,n=g.y;g=[];let p=0,h=0,x=(b.options.cluster||{}).marker,u=(b.options.cluster||{}).zones,v=b.getGridOffset(),w,y;let A,z,B,G,I;q-=v.plotLeft;n-=v.plotTop;for(A=1;5>A;A++){var H=A%2?-1:1;var E=3>A?-1:1;H=Math.floor((q+H*l)/c);E=Math.floor((n+E*l)/c);H=[E+"-"+H,E+"-"+e,d+"-"+H];for(E=0;E<H.length;E++)-1===g.indexOf(H[E])&&H[E]!==a.key&&g.push(H[E])}g.forEach(function(a){if(k[a]){k[a].posX||(G=F(k[a]),
k[a].posX=G.x,k[a].posY=G.y);const g=J(b,{x:k[a].posX||0,y:k[a].posY||0});w=g.x-v.plotLeft;y=g.y-v.plotTop;[B,z]=a.split("-").map(parseFloat);if(u)for(p=k[a].length,A=0;A<u.length;A++)p>=u[A].from&&p<=u[A].to&&(h=C((u[A].marker||{}).radius)?u[A].marker.radius||0:x&&x.radius?x.radius:D.marker.radius);1<k[a].length&&0===h&&x&&x.radius?h=x.radius:1===k[a].length&&(h=m);I=l+h;h=0;z!==e&&Math.abs(q-w)<I&&(q=0>z-e?r+l:r+c-l);B!==d&&Math.abs(n-y)<I&&(n=0>B-d?f+l:f+c-l)}});g=K(b,{x:q+v.plotLeft,y:n+v.plotTop});
k[a.key].posX=g.x;k[a.key].posY=g.y;return g};y.prototype.isValidGroupedDataObject=function(a){let b=!1,d;if(!S(a))return!1;X(a,function(a){b=!0;if(aa(a)&&a.length)for(d=0;d<a.length;d++){if(!S(a[d])||!a[d].x||!a[d].y){b=!1;break}}else b=!1});return b};y.prototype.getClusteredData=function(a,b){let d=[],e=[],c=[],k=[],m=[],l=0,n=Math.max(2,b.minimumClusterSize||2);var f;let g,q,t,p;if(R(b.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(a))return Z("Highcharts marker-clusters module: The custom algorithm result is not valid!",
!1,this.chart),!1;for(p in a)if(a[p].length>=n){var h=a[p];var x=Math.random().toString(36).substring(2,7)+"-"+da++;var u=h.length;if(b.zones)for(f=0;f<b.zones.length;f++)u>=b.zones[f].from&&u<=b.zones[f].to&&(q=b.zones[f],q.zoneIndex=f,g=b.zones[f].marker,t=b.zones[f].className);var v=F(h);"grid"!==b.layoutAlgorithm.type||b.allowOverlap?v={x:v.x,y:v.y}:(f=this.options.marker||{},v=this.preventClusterCollisions({x:v.x,y:v.y,key:p,groupedData:a,gridSize:this.getScaledGridSize(b.layoutAlgorithm),defaultRadius:f.radius||
3+(f.lineWidth||0),clusterRadius:g&&g.radius?g.radius:(b.marker||{}).radius||D.marker.radius}));for(f=0;f<u;f++)h[f].parentStateId=x;c.push({x:v.x,y:v.y,id:p,stateId:x,index:l,data:h,clusterZone:q,clusterZoneClassName:t});d.push(v.x);e.push(v.y);m.push({options:{formatPrefix:"cluster",dataLabels:b.dataLabels,marker:T(b.marker,{states:b.states},g||{})}});if(this.options.data&&this.options.data.length)for(f=0;f<u;f++)S(this.options.data[h[f].dataIndex])&&(h[f].options=this.options.data[h[f].dataIndex]);
l++;g=null}else for(f=0;f<a[p].length;f++)h=a[p][f],x=Math.random().toString(36).substring(2,7)+"-"+da++,u=((this.options||{}).data||[])[h.dataIndex],d.push(h.x),e.push(h.y),h.parentStateId=x,k.push({x:h.x,y:h.y,id:p,stateId:x,index:l,data:a[p]}),x=u&&"object"===typeof u&&!aa(u)?T(u,{x:h.x,y:h.y}):{userOptions:u,x:h.x,y:h.y},m.push({options:x}),l++;return{clusters:c,noise:k,groupedXData:d,groupedYData:e,groupMap:m}};y.prototype.destroyClusteredData=function(){(this.markerClusterSeriesData||[]).forEach(function(a){a&&
a.destroy&&a.destroy()});this.markerClusterSeriesData=null};y.prototype.hideClusteredData=function(){const a=this.markerClusterSeriesData,b=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},d=N.map(a=>(b[a].point||{}).id||"");(a||[]).forEach(function(a){a&&-1!==d.indexOf(a.id)?(a.graphic&&a.graphic.hide(),a.dataLabel&&a.dataLabel.hide()):a&&a.destroy&&a.destroy()})};y.prototype.generatePoints=function(){const a=this;var b=a.chart,d=b.mapView;const e=a.xData,c=a.yData,k=a.options.cluster;
var m=a.getRealExtremes(),l=[],n=[],f=[];let g,q,t,p,h,x;d&&a.is("mappoint")&&e&&c&&(a.options.data||[]).forEach((b,d)=>{if(b=a.projectPoint(b))e[d]=b.x,c[d]=b.y});if(k&&k.enabled&&e&&e.length&&c&&c.length&&!b.polar){h=k.layoutAlgorithm.type;d=k.layoutAlgorithm;d.processedGridSize=ba(d.gridSize||D.layoutAlgorithm.gridSize,b.plotWidth);d.processedDistance=ba(d.distance||D.layoutAlgorithm.distance,b.plotWidth);b=d.kmeansThreshold||D.layoutAlgorithm.kmeansThreshold;var u=d.processedGridSize/2;var v=
K(a,{x:0,y:0});var w=K(a,{x:u,y:u});u=Math.abs(v.x-w.x);v=Math.abs(v.y-w.y);for(w=0;w<e.length;w++)a.dataMaxX||(C(q)&&C(g)&&C(p)&&C(t)?G(c[w])&&G(p)&&G(t)&&(q=Math.max(e[w],q),g=Math.min(e[w],g),p=Math.max(c[w]||p,p),t=Math.min(c[w]||t,t)):(q=g=e[w],p=t=c[w])),e[w]>=m.minX-u&&e[w]<=m.maxX+u&&(c[w]||m.minY)>=m.minY-v&&(c[w]||m.maxY)<=m.maxY+v&&(l.push(e[w]),n.push(c[w]),f.push(w));C(q)&&C(g)&&G(p)&&G(t)&&(a.dataMaxX=q,a.dataMinX=g,a.dataMaxY=p,a.dataMinY=t);m=R(h)?h:a.markerClusterAlgorithms?h&&a.markerClusterAlgorithms[h]?
a.markerClusterAlgorithms[h]:l.length<b?a.markerClusterAlgorithms.kmeans:a.markerClusterAlgorithms.grid:function(){return!1};m=(l=m.call(this,l,n,f,d))?a.getClusteredData(l,k):l;k.animation&&a.markerClusterInfo&&a.markerClusterInfo.pointsState&&a.markerClusterInfo.pointsState.oldState?(ia(a.markerClusterInfo.pointsState.oldState),l=a.markerClusterInfo.pointsState.newState):l={};n=e.length;f=a.markerClusterInfo;m&&(a.processedXData=m.groupedXData,a.processedYData=m.groupedYData,a.hasGroupedData=!0,
a.markerClusterInfo=m,a.groupMap=m.groupMap);ca.apply(this);m&&a.markerClusterInfo&&((a.markerClusterInfo.clusters||[]).forEach(function(b){x=a.points[b.index];x.isCluster=!0;x.clusteredData=b.data;x.clusterPointsAmount=b.data.length;b.point=x;B(x,"click",a.onDrillToCluster)}),(a.markerClusterInfo.noise||[]).forEach(function(b){b.point=a.points[b.index]}),k.animation&&a.markerClusterInfo&&(a.markerClusterInfo.pointsState={oldState:l,newState:a.getPointsState(m,f,n)}),k.animation?this.hideClusteredData():
this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else ca.apply(this)};B(z,"render",function(){(this.series||[]).forEach(function(a){if(a.markerClusterInfo){const b=((a.markerClusterInfo||{}).pointsState||{}).oldState;(a.options.cluster||{}).animation&&a.markerClusterInfo&&0===a.chart.pointer.pinchDown.length&&"pan"!==((a.xAxis||{}).eventArgs||{}).trigger&&b&&Object.keys(b).length&&(a.markerClusterInfo.clusters.forEach(function(b){a.animateClusterPoint(b)}),
a.markerClusterInfo.noise.forEach(function(b){a.animateClusterPoint(b)}))}})});B(I,"update",function(){if(this.dataGroup)return Z("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1});B(O,"destroy",y.prototype.destroyClusteredData);B(O,"afterRender",function(){const a=(this.options.cluster||{}).drillToCluster;this.markerClusterInfo&&this.markerClusterInfo.clusters&&this.markerClusterInfo.clusters.forEach(function(b){b.point&&
b.point.graphic&&(b.point.graphic.addClass("highcharts-cluster-point"),a&&b.point&&(b.point.graphic.css({cursor:"pointer"}),b.point.dataLabel&&b.point.dataLabel.css({cursor:"pointer"})),C(b.clusterZone)&&b.point.graphic.addClass(b.clusterZoneClassName||"highcharts-cluster-zone-"+b.clusterZone.zoneIndex))})});B(I,"drillToCluster",function(a){const b=(((a.point||a.target).series.options.cluster||{}).events||{}).drillToCluster;R(b)&&b.call(this,a)});B(ha,"setExtremes",function(){let a=this.chart,b=0,
d;a.series.forEach(function(a){a.markerClusterInfo&&(d=Y((a.options.cluster||{}).animation),b=d.duration||0)});M(function(){a.tooltip&&a.tooltip.destroy()},b)})});z(n,"masters/modules/marker-clusters.src.js",[],function(){})});
//# sourceMappingURL=marker-clusters.js.map