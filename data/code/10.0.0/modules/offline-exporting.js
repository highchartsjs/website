/*
 Highcharts JS v10.0.0 (2022-03-16)

 Client side exporting module

 (c) 2015-2021 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/offline-exporting",["highcharts","highcharts/modules/exporting"],function(g){a(g);a.Highcharts=g;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function g(a,k,b,g){a.hasOwnProperty(k)||(a[k]=g.apply(null,b))}a=a?a._modules:{};g(a,"Extensions/DownloadURL.js",[a["Core/Globals.js"]],function(a){var g=a.isSafari,b=a.win,
t=b.document,u=b.URL||b.webkitURL||b,p=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&u.createObjectURL){var r=b.atob(a[3]),d=new b.ArrayBuffer(r.length);d=new b.Uint8Array(d);for(var h=0;h<d.length;++h)d[h]=r.charCodeAt(h);a=new b.Blob([d],{type:a[1]});return u.createObjectURL(a)}};a=a.downloadURL=function(a,k){var d=b.navigator,h=t.createElement("a");if("string"===typeof a||
a instanceof String||!d.msSaveOrOpenBlob){a=""+a;d=/Edge\/\d+/.test(d.userAgent);if(g&&"string"===typeof a&&0===a.indexOf("data:application/pdf")||d||2E6<a.length)if(a=p(a)||"",!a)throw Error("Failed to convert to blob");if("undefined"!==typeof h.download)h.href=a,h.download=k,t.body.appendChild(h),h.click(),t.body.removeChild(h);else try{var A=b.open(a,"chart");if("undefined"===typeof A||null===A)throw Error("Failed to open window");}catch(l){b.location.href=a}}else d.msSaveOrOpenBlob(a,k)};return{dataURLtoBlob:p,
downloadURL:a}});g(a,"Extensions/OfflineExporting/OfflineExportingDefaults.js",[],function(){return{libURL:"https://code.highcharts.com/10.0.0/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}}});
g(a,"Extensions/OfflineExporting/OfflineExporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/DefaultOptions.js"],a["Extensions/DownloadURL.js"],a["Extensions/Exporting/Exporting.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Extensions/OfflineExporting/OfflineExportingDefaults.js"],a["Core/Utilities.js"]],function(a,g,b,G,u,p,r,H,d){var h=b.defaultOptions,k=G.downloadURL,l=p.win,t=p.doc,I=r.ajax,J=d.addEvent,D=d.error,K=d.extend,L=d.fireEvent,B=d.merge;a.allowedAttributes.push("data-z-index",
"fill-opacity","rx","ry","stroke-dasharray","stroke-linejoin","text-anchor","transform","version","viewBox","visibility","xmlns","xmlns:xlink");a.allowedTags.push("desc","clippath","g");var C=[],y;(function(b){function d(a,f){var c=this,e=B(c.options.exporting,a),v=function(a){!1===e.fallbackToExportServer?e.error?e.error(e,a):D(28,!0):c.exportChart(e)};a=function(){return[].some.call(c.container.getElementsByTagName("image"),function(a){a=a.getAttribute("href");return""!==a&&"string"===typeof a&&
0!==a.indexOf("data:")})};p.isMS&&c.styledMode&&!u.inlineWhitelist.length&&u.inlineWhitelist.push(/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/);p.isMS&&("application/pdf"===e.type||c.container.getElementsByTagName("image").length&&
"image/svg+xml"!==e.type)||"application/pdf"===e.type&&a()?v(Error("Image type not supported for this chart/browser.")):c.getSVGForLocalExport(e,f||{},v,function(a){-1<a.indexOf("<foreignObject")&&"image/svg+xml"!==e.type&&(p.isMS||"application/pdf"===e.type)?v(Error("Image type not supported for charts with embedded HTML")):b.downloadSVGLocal(a,K({filename:c.getFilename()},e),v,function(){return L(c,"exportChartLocalSuccess")})})}function g(a,f){var c=t.getElementsByTagName("head")[0],e=t.createElement("script");
e.type="text/javascript";e.src=a;e.onload=f;e.onerror=function(){D("Error loading script "+a)};c.appendChild(e)}function r(a,f,q,e){var c=this,d=function(){n&&k===h&&e(c.sanitizeSVG(l.innerHTML,m))},g=function(a,c,e){++k;e.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);d()},l,m,z=null,n,h=0,k=0;c.unbindGetSVG=J(c,"getSVG",function(a){m=a.chartCopy.options;n=(l=a.chartCopy.container.cloneNode(!0))&&l.getElementsByTagName("image")||[];h=n.length});c.getSVGForExport(a,f);try{if(!n||
!n.length){e(c.sanitizeSVG(l.innerHTML,m));return}for(f=0;f<n.length;f++){var x=n[f];(z=x.getAttributeNS("http://www.w3.org/1999/xlink","href"))?b.imageToDataUrl(z,"image/png",{imageElement:x},a.scale,g,q,q,q):(k++,x.parentNode.removeChild(x),f--,d())}}catch(w){q(w)}c.unbindGetSVG()}function y(a,f,d,e,g,k,h,M,m){var c=new l.Image,n=function(){setTimeout(function(){var b=t.createElement("canvas"),l=b.getContext&&b.getContext("2d");try{if(l){b.height=c.height*e;b.width=c.width*e;l.drawImage(c,0,0,b.width,
b.height);try{var k=b.toDataURL(f);g(k,f,d,e)}catch(E){v(a,f,d,e)}}else h(a,f,d,e)}finally{m&&m(a,f,d,e)}},b.loadEventDeferDelay)},q=function(){M(a,f,d,e);m&&m(a,f,d,e)};var v=function(){c=new l.Image;v=k;c.crossOrigin="Anonymous";c.onload=n;c.onerror=q;c.src=a};c.onload=n;c.onerror=q;c.src=a}function F(a){var c=l.navigator.userAgent;c=-1<c.indexOf("WebKit")&&0>c.indexOf("Chrome");try{if(!c&&-1===a.indexOf("<foreignObject"))return b.domurl.createObjectURL(new l.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(q){}return"data:image/svg+xml;charset=UTF-8,"+
encodeURIComponent(a)}function A(a,b,d){var c=Number(a.getAttribute("width"))+2*b;b=Number(a.getAttribute("height"))+2*b;var f=new l.jspdf.jsPDF(b>c?"p":"l","pt",[c,b]);[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),function(a){a.parentNode.removeChild(a)});for(var g=a.querySelectorAll("linearGradient"),k=0;k<g.length;k++)for(var h=g[k].querySelectorAll("stop"),m=0;m<h.length&&"0"===h[m].getAttribute("offset")&&"0"===h[m+1].getAttribute("offset");)h[m].remove(),m++;[].forEach.call(a.querySelectorAll("tspan"),
function(a){"\u200b"===a.textContent&&(a.textContent=" ",a.setAttribute("dx",-5))});f.svg(a,{x:0,y:0,width:c,height:b,removeInvalid:!0}).then(function(){return d(f.output("datauristring"))})}b.CanVGRenderer={};b.domurl=l.URL||l.webkitURL||l;b.loadEventDeferDelay=p.isMS?150:0;b.compose=function(a){if(-1===C.indexOf(a)){C.push(a);var b=a.prototype;b.getSVGForLocalExport=r;b.exportChartLocal=d;B(!0,h.exporting,H)}return a};b.downloadSVGLocal=function(c,d,q,e){var f=t.createElement("div"),p=d.type||"image/png",
r=(d.filename||"chart")+"."+("image/svg+xml"===p?"svg":p.split("/")[1]),u=d.scale||1,m=d.libURL||h.exporting.libURL,z=!0,n=d.pdfFont;m="/"!==m.slice(-1)?m+"/":m;var D=function(a,b){var c=function(a,b){l.jspdf.jsPDF.API.events.push(["initialized",function(){this.addFileToVFS(a,b);this.addFont(a,"HighchartsFont",a);this.getFontList().HighchartsFont||this.setFont("HighchartsFont")}])};n&&!/[^\u0000-\u007F\u200B]+/.test(a.textContent||"")&&(n=void 0);var e=["normal","italic","bold","bolditalic"],d,f=
function(){var a=e.shift();if(!a)return b();var k=n&&n[a];k?I({url:k,responseType:"blob",success:function(b,e){b=new FileReader;b.onloadend=function(){if("string"===typeof this.result){var b=this.result.split(",")[1];c(a,b);"normal"===a&&(d=b)}f()};b.readAsDataURL(e.response)},error:f}):(d&&c(a,d),f())};f()},B=function(){a.setElementHTML(f,c);var b=f.getElementsByTagName("text"),d;[].forEach.call(b,function(a){["font-family","font-size"].forEach(function(b){for(var c=a;c&&c!==f;){if(c.style[b]){a.style[b]=
c.style[b];break}c=c.parentNode}});a.style.fontFamily=n&&n.normal?"HighchartsFont":String(a.style.fontFamily&&a.style.fontFamily.split(" ").splice(-1));d=a.getElementsByTagName("title");[].forEach.call(d,function(b){a.removeChild(b)})});var g=f.querySelector("svg");g&&D(g,function(){A(g,0,function(a){try{k(a,r),e&&e()}catch(O){q(O)}})})};if("image/svg+xml"===p)try{if("undefined"!==typeof l.navigator.msSaveOrOpenBlob){var x=new MSBlobBuilder;x.append(c);var w=x.getBlob("image/svg+xml")}else w=F(c);
k(w,r);e&&e()}catch(E){q(E)}else if("application/pdf"===p)l.jspdf&&l.jspdf.jsPDF?B():(z=!0,g(m+"jspdf.js",function(){g(m+"svg2pdf.js",B)}));else{w=F(c);var C=function(){try{b.domurl.revokeObjectURL(w)}catch(E){}};y(w,p,{},u,function(a){try{k(a,r),e&&e()}catch(N){q(N)}},function(){var a=t.createElement("canvas"),b=a.getContext("2d"),d=c.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*u,f=c.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*u,h=function(){l.canvg.Canvg.fromString(b,c).start();try{k(l.navigator.msSaveOrOpenBlob?
a.msToBlob():a.toDataURL(p),r),e&&e()}catch(P){q(P)}finally{C()}};a.width=d;a.height=f;l.canvg?h():(z=!0,g(m+"canvg.js",function(){h()}))},q,q,function(){z&&C()})}};b.getScript=g;b.imageToDataUrl=y;b.svgToDataUrl=F;b.svgToPdf=A})(y||(y={}));return y});g(a,"masters/modules/offline-exporting.src.js",[a["Core/Globals.js"],a["Extensions/OfflineExporting/OfflineExporting.js"]],function(a,g){a.downloadSVGLocal=g.downloadSVGLocal;g.compose(a.Chart)})});
//# sourceMappingURL=offline-exporting.js.map