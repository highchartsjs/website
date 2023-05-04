/*
 Highcharts JS v11.0.0 (2023-04-27)

 Variable Pie module for Highcharts

 (c) 2010-2021 Grzegorz Blachliski

 License: www.highcharts.com/license
*/
'use strict';(function(b){"object"===typeof module&&module.exports?(b["default"]=b,module.exports=b):"function"===typeof define&&define.amd?define("highcharts/modules/variable-pie",["highcharts"],function(e){b(e);b.Highcharts=e;return b}):b("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(b){function e(b,g,e,p){b.hasOwnProperty(g)||(b[g]=p.apply(null,e),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:g,module:b[g]}})))}b=b?
b._modules:{};e(b,"Series/VariablePie/VariablePieSeries.js",[b["Core/Series/SeriesRegistry.js"],b["Core/Utilities.js"]],function(b,e){const {seriesTypes:{pie:g}}=b,{arrayMax:p,arrayMin:v,clamp:x,extend:y,fireEvent:z,merge:A,pick:q}=e;class m extends g{constructor(){super(...arguments);this.radii=this.points=this.options=this.data=void 0}calculateExtremes(){var a=this.chart;let b=this.options;var c=this.zData;let e=Math.min(a.plotWidth,a.plotHeight)-2*(b.slicedOffset||0),k={};a=this.center||this.getCenter();
["minPointSize","maxPointSize"].forEach(function(a){let c=b[a],l=/%$/.test(c);c=parseInt(c,10);k[a]=l?e*c/100:2*c});this.minPxSize=a[3]+k.minPointSize;this.maxPxSize=x(a[2],a[3]+k.minPointSize,k.maxPointSize);c.length&&(a=q(b.zMin,v(c.filter(this.zValEval))),c=q(b.zMax,p(c.filter(this.zValEval))),this.getRadii(a,c,this.minPxSize,this.maxPxSize))}getRadii(a,b,c,e){let k=0;let w=this.zData,g=w.length,l=[],q="radius"!==this.options.sizeBy,t=b-a;for(k;k<g;k++){var h=this.zValEval(w[k])?w[k]:a;h<=a?h=
c/2:h>=b?h=e/2:(h=0<t?(h-a)/t:.5,q&&(h=Math.sqrt(h)),h=Math.ceil(c+h*(e-c))/2);l.push(h)}this.radii=l}redraw(){this.center=null;super.redraw.apply(this,arguments)}translate(a){this.generatePoints();let b=0;var c=this.options;let e=c.slicedOffset,k=e+(c.borderWidth||0);var g=c.startAngle||0;let m=Math.PI/180*(g-90);var l=Math.PI/180*(q(c.endAngle,g+360)-90);g=l-m;let p=this.points,t,h=c.dataLabels.distance;c=c.ignoreHiddenPoint;let v=p.length,f;this.startAngleRad=m;this.endAngleRad=l;this.calculateExtremes();
a||(this.center=a=this.getCenter());for(l=0;l<v;l++){f=p[l];var n=this.radii[l];f.labelDistance=q(f.options.dataLabels&&f.options.dataLabels.distance,h);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,f.labelDistance);var d=m+b*g;if(!c||f.visible)b+=f.percentage/100;var r=m+b*g;f.shapeType="arc";f.shapeArgs={x:a[0],y:a[1],r:n,innerR:a[3]/2,start:Math.round(1E3*d)/1E3,end:Math.round(1E3*r)/1E3};d=(r+d)/2;d>1.5*Math.PI?d-=2*Math.PI:d<-Math.PI/2&&(d+=2*Math.PI);f.slicedTranslation={translateX:Math.round(Math.cos(d)*
e),translateY:Math.round(Math.sin(d)*e)};var u=Math.cos(d)*a[2]/2;t=Math.sin(d)*a[2]/2;r=Math.cos(d)*n;n*=Math.sin(d);f.tooltipPos=[a[0]+.7*u,a[1]+.7*t];f.half=d<-Math.PI/2||d>Math.PI/2?1:0;f.angle=d;u=Math.min(k,f.labelDistance/5);f.labelPosition={natural:{x:a[0]+r+Math.cos(d)*f.labelDistance,y:a[1]+n+Math.sin(d)*f.labelDistance},computed:{},alignment:f.half?"right":"left",connectorPosition:{breakAt:{x:a[0]+r+Math.cos(d)*u,y:a[1]+n+Math.sin(d)*u},touchingSliceAt:{x:a[0]+r,y:a[1]+n}}}}z(this,"afterTranslate")}zValEval(a){return"number"!==
typeof a||isNaN(a)?null:!0}}m.defaultOptions=A(g.defaultOptions,{minPointSize:"10%",maxPointSize:"100%",zMin:void 0,zMax:void 0,sizeBy:"area",tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}<br/>Value: {point.y}<br/>Size: {point.z}<br/>'}});y(m.prototype,{pointArrayMap:["y","z"],parallelArrays:["x","y","z"]});b.registerSeriesType("variablepie",m);"";"";return m});e(b,"masters/modules/variable-pie.src.js",[],function(){})});
//# sourceMappingURL=variable-pie.js.map