/*
 Highcharts JS v10.0.0 (2022-03-16)

 Marker clusters module for Highcharts

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
(function(p){"object"===typeof module&&module.exports?(p["default"]=p,module.exports=p):"function"===typeof define&&define.amd?define("highcharts/modules/marker-clusters",["highcharts"],function(w){p(w);p.Highcharts=w;return p}):p("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(p){function w(p,w,N,I){p.hasOwnProperty(w)||(p[w]=I.apply(null,N))}p=p?p._modules:{};w(p,"Extensions/MarkerClusters.js",[p["Core/Animation/AnimationUtilities.js"],p["Core/Chart/Chart.js"],p["Core/DefaultOptions.js"],
p["Core/Series/Point.js"],p["Core/Series/Series.js"],p["Core/Series/SeriesRegistry.js"],p["Core/Renderer/SVG/SVGRenderer.js"],p["Core/Utilities.js"],p["Core/Axis/Axis.js"]],function(p,w,N,I,O,P,t,x,fa){function J(a){var b=a.length,c=0,e=0,d;for(d=0;d<b;d++)c+=a[d].x,e+=a[d].y;return{x:c/b,y:e/b}}function U(a,b){var c=[];c.length=b;a.clusters.forEach(function(a){a.data.forEach(function(a){c[a.dataIndex]=a})});a.noise.forEach(function(a){c[a.data[0].dataIndex]=a.data[0]});return c}function V(a,b,c,
e,d){a.point&&(e&&a.point.graphic&&(a.point.graphic.show(),a.point.graphic.attr({opacity:b}).animate({opacity:1},c)),d&&a.point.dataLabel&&(a.point.dataLabel.show(),a.point.dataLabel.attr({opacity:b}).animate({opacity:1},c)))}function W(a,b,c){a.point&&(b&&a.point.graphic&&a.point.graphic.hide(),c&&a.point.dataLabel&&a.point.dataLabel.hide())}function ha(a){a&&X(a,function(a){a.point&&a.point.destroy&&a.point.destroy()})}function Q(a,b,c,e){V(a,e,c,!0,!0);b.forEach(function(a){a.point&&a.point.destroy&&
a.point.destroy()})}var Y=p.animObject;p=N.defaultOptions;P=P.seriesTypes;var K=t.prototype.symbols,A=x.addEvent,B=x.defined,Z=x.error,aa=x.isArray,R=x.isFunction,S=x.isObject,E=x.isNumber,T=x.merge,X=x.objectEach,ba=x.relativeLength,L=x.syncTimeout;"";t=P.scatter;var ca=O.prototype.generatePoints,M=[],da=0,C={enabled:!1,allowOverlap:!0,animation:{duration:500},drillToCluster:!0,minimumClusterSize:2,layoutAlgorithm:{gridSize:50,distance:40,kmeansThreshold:100},marker:{symbol:"cluster",radius:15,lineWidth:0,
lineColor:"#ffffff"},dataLabels:{enabled:!0,format:"{point.clusterPointsAmount}",verticalAlign:"middle",align:"center",style:{color:"contrast"},inside:!0}};(p.plotOptions||{}).series=T((p.plotOptions||{}).series,{cluster:C,tooltip:{clusterFormat:"<span>Clustered points: {point.clusterPointsAmount}</span><br/>"}});var H=function(a,b){var c=a.chart,e=a.xAxis;a=a.yAxis;return c.mapView?c.mapView.pixelsToProjectedUnits(b):{x:e?e.toValue(b.x):0,y:a?a.toValue(b.y):0}},G=function(a,b){var c=a.chart,e=a.xAxis;
a=a.yAxis;return c.mapView?c.mapView.projectedUnitsToPixels(b):{x:e?e.toPixels(b.x):0,y:a?a.toPixels(b.y):0}};K.cluster=function(a,b,c,e){c/=2;e/=2;var d=K.arc(a+c,b+e,c-4,e-4,{start:.5*Math.PI,end:2.5*Math.PI,open:!1}),h=K.arc(a+c,b+e,c-3,e-3,{start:.5*Math.PI,end:2.5*Math.PI,innerR:c-2,open:!1});return K.arc(a+c,b+e,c-1,e-1,{start:.5*Math.PI,end:2.5*Math.PI,innerR:c,open:!1}).concat(h,d)};t.prototype.animateClusterPoint=function(a){var b=this.chart,c=b.mapView,e=Y((this.options.cluster||{}).animation),
d=e.duration||500,h=(this.markerClusterInfo||{}).pointsState,k=(h||{}).newState,m=(h||{}).oldState,r=[],n=h=0,q=0,l=!1,y=!1;if(m&&k){var g=k[a.stateId];h=G(this,g);n=h.x-(c?0:b.plotLeft);q=h.y-(c?0:b.plotTop);if(1===g.parentsId.length){a=(k||{})[a.stateId].parentsId[0];var f=m[a];g.point&&g.point.graphic&&f&&f.point&&f.point.plotX&&f.point.plotY&&f.point.plotX!==g.point.plotX&&f.point.plotY!==g.point.plotY&&(a=g.point.graphic.getBBox(),h=g.point.graphic&&g.point.graphic.isImg?0:a.width/2,g.point.graphic.attr({x:f.point.plotX-
h,y:f.point.plotY-h}),g.point.graphic.animate({x:n-(g.point.graphic.radius||0),y:q-(g.point.graphic.radius||0)},e,function(){y=!0;f.point&&f.point.destroy&&f.point.destroy()}),g.point.dataLabel&&g.point.dataLabel.alignAttr&&f.point.dataLabel&&f.point.dataLabel.alignAttr&&(g.point.dataLabel.attr({x:f.point.dataLabel.alignAttr.x,y:f.point.dataLabel.alignAttr.y}),g.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,y:g.point.dataLabel.alignAttr.y},e)))}else 0===g.parentsId.length?(W(g,!0,!0),L(function(){V(g,
.1,e,!0,!0)},d/2)):(W(g,!0,!0),g.parentsId.forEach(function(a){m&&m[a]&&(f=m[a],r.push(f),f.point&&f.point.graphic&&(l=!0,f.point.graphic.show(),f.point.graphic.animate({x:n-(f.point.graphic.radius||0),y:q-(f.point.graphic.radius||0),opacity:.4},e,function(){y=!0;Q(g,r,e,.7)}),f.point.dataLabel&&-9999!==f.point.dataLabel.y&&g.point&&g.point.dataLabel&&g.point.dataLabel.alignAttr&&(f.point.dataLabel.show(),f.point.dataLabel.animate({x:g.point.dataLabel.alignAttr.x,y:g.point.dataLabel.alignAttr.y,opacity:.4},
e))))}),L(function(){y||Q(g,r,e,.85)},d),l||L(function(){Q(g,r,e,.1)},d/2))}};t.prototype.getGridOffset=function(){var a=this.chart,b=this.xAxis,c=this.yAxis;b=b&&this.dataMinX&&this.dataMaxX?b.reversed?b.toPixels(this.dataMaxX):b.toPixels(this.dataMinX):a.plotLeft;a=c&&this.dataMinY&&this.dataMaxY?c.reversed?c.toPixels(this.dataMinY):c.toPixels(this.dataMaxY):a.plotTop;return{plotLeft:b,plotTop:a}};t.prototype.getScaledGridSize=function(a){var b=this.xAxis,c=this.chart.mapView;a=a.processedGridSize||
C.layoutAlgorithm.gridSize;var e=!0,d=1,h=1;this.gridValueSize||(this.gridValueSize=c?a/c.getScale():Math.abs(b.toValue(a)-b.toValue(0)));b=c?this.gridValueSize*c.getScale():b.toPixels(this.gridValueSize)-b.toPixels(0);for(b=+(a/b).toFixed(14);e&&1!==b;)c=Math.pow(2,d),.75<b&&1.25>b?e=!1:b>=1/c&&b<1/c*2?(e=!1,h=c):b<=c&&b>c/2&&(e=!1,h=1/c),d++;return a/h/b};t.prototype.getRealExtremes=function(){var a=this.chart,b=a.mapView?0:a.plotLeft,c=H(this,{x:b,y:a.mapView?0:a.plotTop}),e=H(this,{x:b+a.plotWidth,
y:b+a.plotHeight});a=c.x;b=e.x;c=c.y;e=e.y;return{minX:Math.min(a,b),maxX:Math.max(a,b),minY:Math.min(c,e),maxY:Math.max(c,e)}};t.prototype.onDrillToCluster=function(a){(a.point||a.target).firePointEvent("drillToCluster",a,function(a){var b=a.point||a.target,e=b.series.xAxis,d=b.series.yAxis,h=b.series.chart,k=h.mapView;if((b.series.options.cluster||{}).drillToCluster&&b.clusteredData){var m=b.clusteredData.map(function(a){return a.x}).sort(function(a,b){return a-b});b=b.clusteredData.map(function(a){return a.y}).sort(function(a,
b){return a-b});var r=m[0],n=m[m.length-1];m=b[0];var q=b[b.length-1],l=Math.abs(.1*(n-r)),y=Math.abs(.1*(q-m));b=Math.min(r,n)-l;r=Math.max(r,n)+l;n=Math.min(m,q)-y;m=Math.max(m,q)+y;k?k.fitToBounds({x1:b,x2:r,y1:n,y2:m}):e&&d&&(h.pointer.zoomX=!0,h.pointer.zoomY=!0,h.zoom({originalEvent:a,xAxis:[{axis:e,min:b,max:r}],yAxis:[{axis:d,min:n,max:m}]}))}})};t.prototype.getClusterDistancesFromPoint=function(a,b,c){for(var e=[],d=0;d<a.length;d++){var h=G(this,{x:b,y:c}),k=G(this,{x:a[d].posX,y:a[d].posY});
e.push({clusterIndex:d,distance:Math.sqrt(Math.pow(h.x-k.x,2)+Math.pow(h.y-k.y,2))})}return e.sort(function(a,b){return a.distance-b.distance})};t.prototype.getPointsState=function(a,b,c){b=b?U(b,c):[];c=U(a,c);var e={},d;M=[];a.clusters.forEach(function(a){e[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}});a.noise.forEach(function(a){e[a.stateId]={x:a.x,y:a.y,id:a.stateId,point:a.point,parentsId:[]}});for(d=0;d<c.length;d++){a=c[d];var h=b[d];a&&h&&a.parentStateId&&h.parentStateId&&
e[a.parentStateId]&&-1===e[a.parentStateId].parentsId.indexOf(h.parentStateId)&&(e[a.parentStateId].parentsId.push(h.parentStateId),-1===M.indexOf(h.parentStateId)&&M.push(h.parentStateId))}return e};t.prototype.markerClusterAlgorithms={grid:function(a,b,c,e){var d={},h=this.getGridOffset(),k=this.getScaledGridSize(e);for(e=0;e<a.length;e++){var m=G(this,{x:a[e],y:b[e]});var r=m.x-h.plotLeft;m=m.y-h.plotTop;r=Math.floor(r/k);m=Math.floor(m/k);r=m+"-"+r;d[r]||(d[r]=[]);d[r].push({dataIndex:c[e],x:a[e],
y:b[e]})}return d},kmeans:function(a,b,c,e){var d=[],h=[],k={},m=e.processedDistance||C.layoutAlgorithm.distance,r=e.iterations,n=0,q=!0,l=0,y=0;var g=[];var f;e.processedGridSize=e.processedDistance;l=this.markerClusterAlgorithms?this.markerClusterAlgorithms.grid.call(this,a,b,c,e):{};for(f in l)1<l[f].length&&(g=J(l[f]),d.push({posX:g.x,posY:g.y,oldX:0,oldY:0,startPointsLen:l[f].length,points:[]}));for(;q;){d.map(function(a){a.points.length=0;return a});for(q=h.length=0;q<a.length;q++)l=a[q],y=
b[q],g=this.getClusterDistancesFromPoint(d,l,y),g.length&&g[0].distance<m?d[g[0].clusterIndex].points.push({x:l,y:y,dataIndex:c[q]}):h.push({x:l,y:y,dataIndex:c[q]});for(f=0;f<d.length;f++)1===d[f].points.length&&(g=this.getClusterDistancesFromPoint(d,d[f].points[0].x,d[f].points[0].y),g[1].distance<m&&(d[g[1].clusterIndex].points.push(d[f].points[0]),d[g[0].clusterIndex].points.length=0));q=!1;for(f=0;f<d.length;f++)if(g=J(d[f].points),d[f].oldX=d[f].posX,d[f].oldY=d[f].posY,d[f].posX=g.x,d[f].posY=
g.y,d[f].posX>d[f].oldX+1||d[f].posX<d[f].oldX-1||d[f].posY>d[f].oldY+1||d[f].posY<d[f].oldY-1)q=!0;r&&(q=n<r-1);n++}d.forEach(function(a,b){k["cluster"+b]=a.points});h.forEach(function(a,b){k["noise"+b]=[a]});return k},optimizedKmeans:function(a,b,c,e){var d=this,h=e.processedDistance||C.layoutAlgorithm.gridSize,k={},m=d.getRealExtremes(),r=(d.options.cluster||{}).marker,n,q,l;!d.markerClusterInfo||d.initMaxX&&d.initMaxX<m.maxX||d.initMinX&&d.initMinX>m.minX||d.initMaxY&&d.initMaxY<m.maxY||d.initMinY&&
d.initMinY>m.minY?(d.initMaxX=m.maxX,d.initMinX=m.minX,d.initMaxY=m.maxY,d.initMinY=m.minY,k=d.markerClusterAlgorithms?d.markerClusterAlgorithms.kmeans.call(d,a,b,c,e):{},d.baseClusters=null):(d.baseClusters||(d.baseClusters={clusters:d.markerClusterInfo.clusters,noise:d.markerClusterInfo.noise}),d.baseClusters.clusters.forEach(function(a){a.pointsOutside=[];a.pointsInside=[];a.data.forEach(function(b){var e=G(d,b),c=G(d,a);q=Math.sqrt(Math.pow(e.x-c.x,2)+Math.pow(e.y-c.y,2));l=a.clusterZone&&a.clusterZone.marker&&
a.clusterZone.marker.radius?a.clusterZone.marker.radius:r&&r.radius?r.radius:C.marker.radius;n=0<=h-l?h-l:l;q>l+n&&B(a.pointsOutside)?a.pointsOutside.push(b):B(a.pointsInside)&&a.pointsInside.push(b)});a.pointsInside.length&&(k[a.id]=a.pointsInside);a.pointsOutside.forEach(function(b,e){k[a.id+"_noise"+e]=[b]})}),d.baseClusters.noise.forEach(function(a){k[a.id]=a.data}));return k}};t.prototype.preventClusterCollisions=function(a){var b=this,c=a.key.split("-").map(parseFloat),e=c[0],d=c[1],h=a.gridSize,
k=a.groupedData,m=a.defaultRadius,r=a.clusterRadius,n=d*h,q=e*h;c=G(b,a);var l=c.x,y=c.y;c=[];var g=0,f=0,p=(b.options.cluster||{}).marker,u=(b.options.cluster||{}).zones,v=b.getGridOffset(),t,ea,z,x,w,A,E;l-=v.plotLeft;y-=v.plotTop;for(z=1;5>z;z++){var F=z%2?-1:1;var D=3>z?-1:1;F=Math.floor((l+F*r)/h);D=Math.floor((y+D*r)/h);F=[D+"-"+F,D+"-"+d,e+"-"+F];for(D=0;D<F.length;D++)-1===c.indexOf(F[D])&&F[D]!==a.key&&c.push(F[D])}c.forEach(function(a){if(k[a]){k[a].posX||(A=J(k[a]),k[a].posX=A.x,k[a].posY=
A.y);var c=G(b,{x:k[a].posX||0,y:k[a].posY||0});t=c.x-v.plotLeft;ea=c.y-v.plotTop;c=a.split("-").map(parseFloat);w=c[0];x=c[1];if(u)for(g=k[a].length,z=0;z<u.length;z++)g>=u[z].from&&g<=u[z].to&&(f=B((u[z].marker||{}).radius)?u[z].marker.radius||0:p&&p.radius?p.radius:C.marker.radius);1<k[a].length&&0===f&&p&&p.radius?f=p.radius:1===k[a].length&&(f=m);E=r+f;f=0;x!==d&&Math.abs(l-t)<E&&(l=0>x-d?n+r:n+h-r);w!==e&&Math.abs(y-ea)<E&&(y=0>w-e?q+r:q+h-r)}});c=H(b,{x:l+v.plotLeft,y:y+v.plotTop});k[a.key].posX=
c.x;k[a.key].posY=c.y;return c};t.prototype.isValidGroupedDataObject=function(a){var b=!1,c;if(!S(a))return!1;X(a,function(a){b=!0;if(aa(a)&&a.length)for(c=0;c<a.length;c++){if(!S(a[c])||!a[c].x||!a[c].y){b=!1;break}}else b=!1});return b};t.prototype.getClusteredData=function(a,b){var c=[],e=[],d=[],h=[],k=[],m=0,r=Math.max(2,b.minimumClusterSize||2),n,q;if(R(b.layoutAlgorithm.type)&&!this.isValidGroupedDataObject(a))return Z("Highcharts marker-clusters module: The custom algorithm result is not valid!",
!1,this.chart),!1;for(q in a)if(a[q].length>=r){var l=a[q];var p=Math.random().toString(36).substring(2,7)+"-"+da++;var g=l.length;if(b.zones)for(n=0;n<b.zones.length;n++)if(g>=b.zones[n].from&&g<=b.zones[n].to){var f=b.zones[n];f.zoneIndex=n;var t=b.zones[n].marker;var u=b.zones[n].className}var v=J(l);"grid"!==b.layoutAlgorithm.type||b.allowOverlap?v={x:v.x,y:v.y}:(n=this.options.marker||{},v=this.preventClusterCollisions({x:v.x,y:v.y,key:q,groupedData:a,gridSize:this.getScaledGridSize(b.layoutAlgorithm),
defaultRadius:n.radius||3+(n.lineWidth||0),clusterRadius:t&&t.radius?t.radius:(b.marker||{}).radius||C.marker.radius}));for(n=0;n<g;n++)l[n].parentStateId=p;d.push({x:v.x,y:v.y,id:q,stateId:p,index:m,data:l,clusterZone:f,clusterZoneClassName:u});c.push(v.x);e.push(v.y);k.push({options:{formatPrefix:"cluster",dataLabels:b.dataLabels,marker:T(b.marker,{states:b.states},t||{})}});if(this.options.data&&this.options.data.length)for(n=0;n<g;n++)S(this.options.data[l[n].dataIndex])&&(l[n].options=this.options.data[l[n].dataIndex]);
m++;t=null}else for(n=0;n<a[q].length;n++)l=a[q][n],p=Math.random().toString(36).substring(2,7)+"-"+da++,g=((this.options||{}).data||[])[l.dataIndex],c.push(l.x),e.push(l.y),l.parentStateId=p,h.push({x:l.x,y:l.y,id:q,stateId:p,index:m,data:a[q]}),p=g&&"object"===typeof g&&!aa(g)?T(g,{x:l.x,y:l.y}):{userOptions:g,x:l.x,y:l.y},k.push({options:p}),m++;return{clusters:d,noise:h,groupedXData:c,groupedYData:e,groupMap:k}};t.prototype.destroyClusteredData=function(){(this.markerClusterSeriesData||[]).forEach(function(a){a&&
a.destroy&&a.destroy()});this.markerClusterSeriesData=null};t.prototype.hideClusteredData=function(){var a=this.markerClusterSeriesData,b=((this.markerClusterInfo||{}).pointsState||{}).oldState||{},c=M.map(function(a){return(b[a].point||{}).id||""});(a||[]).forEach(function(a){a&&-1!==c.indexOf(a.id)?(a.graphic&&a.graphic.hide(),a.dataLabel&&a.dataLabel.hide()):a&&a.destroy&&a.destroy()})};t.prototype.generatePoints=function(){var a=this,b=a.chart,c=b.mapView,e=a.xData,d=a.yData,h=a.options.cluster,
k=a.getRealExtremes(),m=[],p=[],n=[],q,l,t;c&&a.is("mappoint")&&e&&d&&(a.options.data||[]).forEach(function(b,c){if(b=a.projectPoint(b))e[c]=b.x,d[c]=b.y});if(h&&h.enabled&&e&&e.length&&d&&d.length&&!b.polar){var g=h.layoutAlgorithm.type;c=h.layoutAlgorithm;c.processedGridSize=ba(c.gridSize||C.layoutAlgorithm.gridSize,b.plotWidth);c.processedDistance=ba(c.distance||C.layoutAlgorithm.distance,b.plotWidth);b=c.kmeansThreshold||C.layoutAlgorithm.kmeansThreshold;var f=c.processedGridSize/2;var x=H(a,
{x:0,y:0});var u=H(a,{x:f,y:f});f=Math.abs(x.x-u.x);x=Math.abs(x.y-u.y);for(u=0;u<e.length;u++){if(!a.dataMaxX)if(B(v)&&B(q)&&B(w)&&B(l))E(d[u])&&E(w)&&E(l)&&(v=Math.max(e[u],v),q=Math.min(e[u],q),w=Math.max(d[u]||w,w),l=Math.min(d[u]||l,l));else{var v=q=e[u];var w=l=d[u]}e[u]>=k.minX-f&&e[u]<=k.maxX+f&&(d[u]||k.minY)>=k.minY-x&&(d[u]||k.maxY)<=k.maxY+x&&(m.push(e[u]),p.push(d[u]),n.push(u))}B(v)&&B(q)&&E(w)&&E(l)&&(a.dataMaxX=v,a.dataMinX=q,a.dataMaxY=w,a.dataMinY=l);k=R(g)?g:a.markerClusterAlgorithms?
g&&a.markerClusterAlgorithms[g]?a.markerClusterAlgorithms[g]:m.length<b?a.markerClusterAlgorithms.kmeans:a.markerClusterAlgorithms.grid:function(){return!1};k=(m=k.call(this,m,p,n,c))?a.getClusteredData(m,h):m;h.animation&&a.markerClusterInfo&&a.markerClusterInfo.pointsState&&a.markerClusterInfo.pointsState.oldState?(ha(a.markerClusterInfo.pointsState.oldState),m=a.markerClusterInfo.pointsState.newState):m={};p=e.length;n=a.markerClusterInfo;k&&(a.processedXData=k.groupedXData,a.processedYData=k.groupedYData,
a.hasGroupedData=!0,a.markerClusterInfo=k,a.groupMap=k.groupMap);ca.apply(this);k&&a.markerClusterInfo&&((a.markerClusterInfo.clusters||[]).forEach(function(b){t=a.points[b.index];t.isCluster=!0;t.clusteredData=b.data;t.clusterPointsAmount=b.data.length;b.point=t;A(t,"click",a.onDrillToCluster)}),(a.markerClusterInfo.noise||[]).forEach(function(b){b.point=a.points[b.index]}),h.animation&&a.markerClusterInfo&&(a.markerClusterInfo.pointsState={oldState:m,newState:a.getPointsState(k,n,p)}),h.animation?
this.hideClusteredData():this.destroyClusteredData(),this.markerClusterSeriesData=this.hasGroupedData?this.points:null)}else ca.apply(this)};A(w,"render",function(){(this.series||[]).forEach(function(a){if(a.markerClusterInfo){var b=((a.markerClusterInfo||{}).pointsState||{}).oldState;(a.options.cluster||{}).animation&&a.markerClusterInfo&&0===a.chart.pointer.pinchDown.length&&"pan"!==((a.xAxis||{}).eventArgs||{}).trigger&&b&&Object.keys(b).length&&(a.markerClusterInfo.clusters.forEach(function(b){a.animateClusterPoint(b)}),
a.markerClusterInfo.noise.forEach(function(b){a.animateClusterPoint(b)}))}})});A(I,"update",function(){if(this.dataGroup)return Z("Highcharts marker-clusters module: Running `Point.update` when point belongs to clustered series is not supported.",!1,this.series.chart),!1});A(O,"destroy",t.prototype.destroyClusteredData);A(O,"afterRender",function(){var a=(this.options.cluster||{}).drillToCluster;this.markerClusterInfo&&this.markerClusterInfo.clusters&&this.markerClusterInfo.clusters.forEach(function(b){b.point&&
b.point.graphic&&(b.point.graphic.addClass("highcharts-cluster-point"),a&&b.point&&(b.point.graphic.css({cursor:"pointer"}),b.point.dataLabel&&b.point.dataLabel.css({cursor:"pointer"})),B(b.clusterZone)&&b.point.graphic.addClass(b.clusterZoneClassName||"highcharts-cluster-zone-"+b.clusterZone.zoneIndex))})});A(I,"drillToCluster",function(a){var b=(((a.point||a.target).series.options.cluster||{}).events||{}).drillToCluster;R(b)&&b.call(this,a)});A(fa,"setExtremes",function(){var a=this.chart,b=0,c;
a.series.forEach(function(a){a.markerClusterInfo&&(c=Y((a.options.cluster||{}).animation),b=c.duration||0)});L(function(){a.tooltip&&a.tooltip.destroy()},b)})});w(p,"masters/modules/marker-clusters.src.js",[],function(){})});
//# sourceMappingURL=marker-clusters.js.map