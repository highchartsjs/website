/*
 Highcharts JS v10.0.0 (2022-03-16)

 (c) 2016-2021 Highsoft AS
 Authors: Jon Arild Nygard

 License: www.highcharts.com/license
*/
(function(e){"object"===typeof module&&module.exports?(e["default"]=e,module.exports=e):"function"===typeof define&&define.amd?define("highcharts/modules/wordcloud",["highcharts"],function(h){e(h);e.Highcharts=h;return e}):e("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(e){function h(e,f,k,g){e.hasOwnProperty(f)||(e[f]=g.apply(null,k))}e=e?e._modules:{};h(e,"Series/DrawPointComposition.js",[],function(){var e;(function(e){function f(c){var e=this,f=c.animatableAttribs,g=c.onComplete,
r=c.css,k=c.renderer,t=this.series&&this.series.chart.hasRendered?void 0:this.series&&this.series.options.animation,l=this.graphic;c.attribs=c.attribs||{};c.attribs["class"]=this.getClassName();if(this.shouldDraw())l||(this.graphic=l="text"===c.shapeType?k.text():k[c.shapeType](c.shapeArgs||{}),l.add(c.group)),r&&l.css(r),l.attr(c.attribs).animate(f,c.isNew?!1:t,g);else if(l){var h=function(){e.graphic=l=l&&l.destroy();"function"===typeof g&&g()};Object.keys(f).length?l.animate(f,void 0,function(){h()}):
h()}}function g(){return!this.isNull}var r=[];e.compose=function(c){if(-1===r.indexOf(c)){r.push(c);var e=c.prototype;e.draw=f;e.shouldDraw||(e.shouldDraw=g)}return c}})(e||(e={}));return e});h(e,"Series/Wordcloud/WordcloudPoint.js",[e["Series/DrawPointComposition.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(e,f,k){var g=this&&this.__extends||function(){var e=function(c,f){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,e){c.__proto__=e}||function(c,
e){for(var f in e)e.hasOwnProperty(f)&&(c[f]=e[f])};return e(c,f)};return function(c,f){function g(){this.constructor=c}e(c,f);c.prototype=null===f?Object.create(f):(g.prototype=f.prototype,new g)}}();k=k.extend;f=function(e){function c(){var c=null!==e&&e.apply(this,arguments)||this;c.dimensions=void 0;c.options=void 0;c.polygon=void 0;c.rect=void 0;c.series=void 0;return c}g(c,e);c.prototype.isValid=function(){return!0};return c}(f.seriesTypes.column.prototype.pointClass);k(f.prototype,{weight:1});
e.compose(f);return f});h(e,"Series/Wordcloud/WordcloudUtils.js",[e["Core/Globals.js"],e["Core/Utilities.js"]],function(e,f){function k(b,a){return!(a.left>b.right||a.right<b.left||a.top>b.bottom||a.bottom<b.top)}function g(b,a){var d=a[0]-b[0];b=a[1]-b[1];return[[-b,d],[b,-d]]}function h(b){var a=b.axes||[];if(!a.length){a=[];var d=d=b.concat([b[0]]);d.reduce(function(b,d){var c=g(b,d)[0];D(a,function(a){return a[0]===c[0]&&a[1]===c[1]})||a.push(c);return d});b.axes=a}return a}function c(b,a){b=
b.map(function(b){return b[0]*a[0]+b[1]*a[1]});return{min:Math.min.apply(this,b),max:Math.max.apply(this,b)}}function C(b,a){var d=h(b),e=h(a);d=d.concat(e);return!D(d,function(d){var e=c(b,d);d=c(a,d);return!!(d.min>e.max||d.max<e.min)})}function m(b,a){var d=!1,c=b.rect,e=b.polygon,f=b.lastCollidedWith,g=function(a){var d=k(c,a.rect);d&&(b.rotation%90||a.rotation%90)&&(d=C(e,a.polygon));return d};f&&((d=g(f))||delete b.lastCollidedWith);d||(d=!!D(a,function(a){var d=g(a);d&&(b.lastCollidedWith=
a);return d}));return d}function x(b,a){a=4*b;var d=Math.ceil((Math.sqrt(a)-1)/2),c=2*d+1,e=Math.pow(c,2),f=!1;--c;1E4>=b&&("boolean"===typeof f&&a>=e-c&&(f={x:d-(e-a),y:-d}),e-=c,"boolean"===typeof f&&a>=e-c&&(f={x:-d,y:-d+(e-a)}),e-=c,"boolean"===typeof f&&(f=a>=e-c?{x:-d+(e-a),y:d}:{x:d,y:d-(e-a-c)}),f.x*=5,f.y*=5);return f}function w(b,a){var d=a.width/2,c=-(a.height/2),e=a.height/2;return!(-(a.width/2)<b.left&&d>b.right&&c<b.top&&e>b.bottom)}function A(b,a,d){return d.map(function(d){return[d[0]+
b,d[1]+a]})}function t(b,a){a=p(a)?a:14;a=Math.pow(10,a);return Math.round(b*a)/a}function l(b,a){var d=b[0];b=b[1];var c=E*-a;a=Math.cos(c);c=Math.sin(c);return[t(d*a-b*c),t(d*c+b*a)]}function B(b,a,d){b=l([b[0]-a[0],b[1]-a[1]],d);return[b[0]+a[0],b[1]+a[1]]}var E=e.deg2rad,G=f.extend,D=f.find,p=f.isNumber,q=f.isObject,y=f.merge;return{archimedeanSpiral:function(b,a){var d=a.field;a=!1;d=d.width*d.width+d.height*d.height;var c=.8*b;1E4>=b&&(a={x:c*Math.cos(c),y:c*Math.sin(c)},Math.min(Math.abs(a.x),
Math.abs(a.y))<d||(a=!1));return a},extendPlayingField:function(b,a){if(q(b)&&q(a)){var d=a.bottom-a.top;var c=a.right-a.left;a=b.ratioX;var e=b.ratioY;d=c*a>d*e?c:d;b=y(b,{width:b.width+d*a*2,height:b.height+d*e*2})}return b},getBoundingBoxFromPolygon:function(b){return b.reduce(function(a,b){var d=b[0];b=b[1];a.left=Math.min(d,a.left);a.right=Math.max(d,a.right);a.bottom=Math.max(b,a.bottom);a.top=Math.min(b,a.top);return a},{left:Number.MAX_VALUE,right:-Number.MAX_VALUE,bottom:-Number.MAX_VALUE,
top:Number.MAX_VALUE})},getPlayingField:function(b,a,d){d=d.reduce(function(a,b){b=b.dimensions;var d=Math.max(b.width,b.height);a.maxHeight=Math.max(a.maxHeight,b.height);a.maxWidth=Math.max(a.maxWidth,b.width);a.area+=d*d;return a},{maxHeight:0,maxWidth:0,area:0});d=Math.max(d.maxHeight,d.maxWidth,.85*Math.sqrt(d.area));var c=b>a?b/a:1;b=a>b?a/b:1;return{width:d*c,height:d*b,ratioX:c,ratioY:b}},getPolygon:function(b,a,d,c,e){var f=[b,a],g=b-d/2;b+=d/2;d=a-c/2;a+=c/2;return[[g,d],[b,d],[b,a],[g,
a]].map(function(a){return B(a,f,-e)})},getRandomPosition:function(b){return Math.round(b*(Math.random()+.5)/2)},getRotation:function(b,a,d,c){var e=!1;p(b)&&p(a)&&p(d)&&p(c)&&0<b&&-1<a&&c>d&&(e=d+a%b*((c-d)/(b-1||1)));return e},getScale:function(b,a,d){var c=2*Math.max(Math.abs(d.top),Math.abs(d.bottom));d=2*Math.max(Math.abs(d.left),Math.abs(d.right));return Math.min(0<d?1/d*b:1,0<c?1/c*a:1)},getSpiral:function(b,a){var d,c=[];for(d=1;1E4>d;d++)c.push(b(d,a));return function(a){return 1E4>=a?c[a-
1]:!1}},intersectionTesting:function(b,a){var c=a.placed,e=a.field,f=a.rectangle,g=a.polygon,l=a.spiral,h=1,k={x:0,y:0},z=b.rect=G({},f);b.polygon=g;for(b.rotation=a.rotation;!1!==k&&(m(b,c)||w(z,e));)k=l(h),q(k)&&(z.left=f.left+k.x,z.right=f.right+k.x,z.top=f.top+k.y,z.bottom=f.bottom+k.y,b.polygon=A(k.x,k.y,g)),h++;return k},isPolygonsColliding:C,isRectanglesIntersecting:k,rectangularSpiral:function(b,a){b=x(b,a);a=a.field;b&&(b.x*=a.ratioX,b.y*=a.ratioY);return b},rotate2DToOrigin:l,rotate2DToPoint:B,
squareSpiral:x,updateFieldBoundaries:function(b,a){if(!p(b.left)||b.left>a.left)b.left=a.left;if(!p(b.right)||b.right<a.right)b.right=a.right;if(!p(b.top)||b.top>a.top)b.top=a.top;if(!p(b.bottom)||b.bottom<a.bottom)b.bottom=a.bottom;return b}}});h(e,"Series/Wordcloud/WordcloudSeries.js",[e["Core/Globals.js"],e["Core/Series/Series.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"],e["Series/Wordcloud/WordcloudPoint.js"],e["Series/Wordcloud/WordcloudUtils.js"]],function(e,f,k,g,h,c){var r=
this&&this.__extends||function(){var a=function(b,c){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(b,c)};return function(b,c){function d(){this.constructor=b}a(b,c);b.prototype=null===c?Object.create(c):(d.prototype=c.prototype,new d)}}(),m=e.noop,x=k.seriesTypes.column,w=g.extend,A=g.isArray,t=g.isNumber,l=g.isObject,B=g.merge;g=c.archimedeanSpiral;var E=c.extendPlayingField,G=c.getBoundingBoxFromPolygon,
D=c.getPlayingField,p=c.getPolygon,q=c.getRandomPosition,y=c.getRotation,b=c.getScale,a=c.getSpiral,d=c.intersectionTesting,H=c.isPolygonsColliding,I=c.rectangularSpiral,J=c.rotate2DToOrigin,K=c.rotate2DToPoint,L=c.squareSpiral,M=c.updateFieldBoundaries;c=function(c){function g(){var a=null!==c&&c.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}r(g,c);g.prototype.bindAxes=function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,maxPadding:0,startOnTick:!1,title:void 0,
tickPositions:[]};f.prototype.bindAxes.call(this);w(this.yAxis.options,a);w(this.xAxis.options,a)};g.prototype.pointAttribs=function(a,b){a=e.seriesTypes.column.prototype.pointAttribs.call(this,a,b);delete a.stroke;delete a["stroke-width"];return a};g.prototype.deriveFontSize=function(a,b,c){a=t(a)?a:0;b=t(b)?b:1;c=t(c)?c:1;return Math.floor(Math.max(c,a*b))};g.prototype.drawPoints=function(){var c=this,e=c.hasRendered,f=c.xAxis,g=c.yAxis,k=c.group,h=c.options,N=h.animation,z=h.allowExtendPlayingField,
r=c.chart.renderer,m=r.text().add(k),q=[],x=c.placementStrategy[h.placementStrategy],y=h.rotation,B=c.points.map(function(a){return a.weight}),A=Math.max.apply(null,B),F=c.points.concat().sort(function(a,b){return b.weight-a.weight});c.group.attr({scaleX:1,scaleY:1});F.forEach(function(a){var b=c.deriveFontSize(1/A*a.weight,h.maxFontSize,h.minFontSize);b=w({fontSize:b+"px"},h.style);m.css(b).attr({x:0,y:0,text:a.name});b=m.getBBox(!0);a.dimensions={height:b.height,width:b.width}});var v=D(f.len,g.len,
F);var C=a(c.spirals[h.spiral],{field:v});F.forEach(function(a){var b=c.deriveFontSize(1/A*a.weight,h.maxFontSize,h.minFontSize);b=w({fontSize:b+"px"},h.style);var f=x(a,{data:F,field:v,placed:q,rotation:y}),g=w(c.pointAttribs(a,a.selected&&"select"),{align:"center","alignment-baseline":"middle","dominant-baseline":"middle",x:f.x,y:f.y,text:a.name,rotation:t(f.rotation)?f.rotation:void 0}),m=p(f.x,f.y,a.dimensions.width,a.dimensions.height,f.rotation),n=G(m),u=d(a,{rectangle:n,polygon:m,field:v,placed:q,
spiral:C,rotation:f.rotation});!u&&z&&(v=E(v,n),u=d(a,{rectangle:n,polygon:m,field:v,placed:q,spiral:C,rotation:f.rotation}));l(u)?(g.x=(g.x||0)+u.x,g.y=(g.y||0)+u.y,n.left+=u.x,n.right+=u.x,n.top+=u.y,n.bottom+=u.y,v=M(v,n),q.push(a),a.isNull=!1,a.isInside=!0):a.isNull=!0;if(N){var O={x:g.x,y:g.y};e?(delete g.x,delete g.y):(g.x=0,g.y=0)}a.draw({animatableAttribs:O,attribs:g,css:b,group:k,renderer:r,shapeArgs:void 0,shapeType:"text"})});m=m.destroy();f=b(f.len,g.len,v);c.group.attr({scaleX:f,scaleY:f})};
g.prototype.hasData=function(){return l(this)&&!0===this.visible&&A(this.points)&&0<this.points.length};g.prototype.getPlotBox=function(){var a=this.chart,b=a.inverted,c=this[b?"yAxis":"xAxis"];b=this[b?"xAxis":"yAxis"];return{translateX:(c?c.left:a.plotLeft)+(c?c.len:a.plotWidth)/2,translateY:(b?b.top:a.plotTop)+(b?b.len:a.plotHeight)/2,scaleX:1,scaleY:1}};g.defaultOptions=B(x.defaultOptions,{allowExtendPlayingField:!0,animation:{duration:500},borderWidth:0,clip:!1,colorByPoint:!0,cropThreshold:Infinity,
minFontSize:1,maxFontSize:25,placementStrategy:"center",rotation:{from:0,orientations:2,to:90},showInLegend:!1,spiral:"rectangular",style:{fontFamily:"sans-serif",fontWeight:"900",whiteSpace:"nowrap"},tooltip:{followPointer:!0,pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.weight}</b><br/>'}});return g}(x);w(c.prototype,{animate:m,animateDrilldown:m,animateDrillupFrom:m,pointClass:h,setClip:m,placementStrategy:{random:function(a,b){var c=b.field;b=b.rotation;
return{x:q(c.width)-c.width/2,y:q(c.height)-c.height/2,rotation:y(b.orientations,a.index,b.from,b.to)}},center:function(a,b){b=b.rotation;return{x:0,y:0,rotation:y(b.orientations,a.index,b.from,b.to)}}},pointArrayMap:["weight"],spirals:{archimedean:g,rectangular:I,square:L},utils:{extendPlayingField:E,getRotation:y,isPolygonsColliding:H,rotate2DToOrigin:J,rotate2DToPoint:K}});k.registerSeriesType("wordcloud",c);"";return c});h(e,"masters/modules/wordcloud.src.js",[],function(){})});
//# sourceMappingURL=wordcloud.js.map