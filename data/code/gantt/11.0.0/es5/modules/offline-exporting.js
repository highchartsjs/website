/*
 Highcharts JS v11.0.0 (2023-04-27)

 Client side exporting module

 (c) 2015-2021 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/offline-exporting",["highcharts","highcharts/modules/exporting"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,h,b,d){a.hasOwnProperty(h)||(a[h]=d.apply(null,b),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:h,
module:a[h]}})))}a=a?a._modules:{};d(a,"Extensions/DownloadURL.js",[a["Core/Globals.js"]],function(a){var h=a.isSafari,b=a.win,d=b.document,k=b.URL||b.webkitURL||b,q=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&b.atob&&b.ArrayBuffer&&b.Uint8Array&&b.Blob&&k.createObjectURL){var t=b.atob(a[3]),f=new b.ArrayBuffer(t.length);f=new b.Uint8Array(f);for(var p=0;p<f.length;++p)f[p]=t.charCodeAt(p);a=new b.Blob([f],{type:a[1]});
return k.createObjectURL(a)}};a=a.downloadURL=function(a,k){var f=b.navigator,p=d.createElement("a");if("string"===typeof a||a instanceof String||!f.msSaveOrOpenBlob){a="".concat(a);f=/Edge\/\d+/.test(f.userAgent);if(h&&"string"===typeof a&&0===a.indexOf("data:application/pdf")||f||2E6<a.length)if(a=q(a)||"",!a)throw Error("Failed to convert to blob");if("undefined"!==typeof p.download)p.href=a,p.download=k,d.body.appendChild(p),p.click(),d.body.removeChild(p);else try{var z=b.open(a,"chart");if("undefined"===
typeof z||null===z)throw Error("Failed to open window");}catch(m){b.location.href=a}}else f.msSaveOrOpenBlob(a,k)};return{dataURLtoBlob:q,downloadURL:a}});d(a,"Extensions/OfflineExporting/OfflineExportingDefaults.js",[],function(){return{libURL:"https://code.highcharts.com/11.0.0/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},downloadSVG:{textKey:"downloadSVG",
onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}}});d(a,"Extensions/OfflineExporting/OfflineExporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Defaults.js"],a["Extensions/DownloadURL.js"],a["Extensions/Exporting/Exporting.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Extensions/OfflineExporting/OfflineExportingDefaults.js"],a["Core/Utilities.js"]],
function(a,d,b,G,C,q,t,H,f){var p=b.defaultOptions,h=G.downloadURL,m=q.win,k=q.doc,I=t.ajax,J=f.addEvent,A=f.error,K=f.extend,L=f.fireEvent,B=f.merge;a.allowedAttributes.push("data-z-index","fill-opacity","rx","ry","stroke-dasharray","stroke-linejoin","text-anchor","transform","version","viewBox","visibility","xmlns","xmlns:xlink");a.allowedTags.push("desc","clippath","g");var M=[],u;(function(b){function d(a,g){var c=this,e=B(c.options.exporting,a),v=function(a){!1===e.fallbackToExportServer?e.error?
e.error(e,a):A(28,!0):c.exportChart(e)};a=function(){return[].some.call(c.container.getElementsByTagName("image"),function(a){a=a.getAttribute("href");return""!==a&&"string"===typeof a&&0!==a.indexOf("data:")})};q.isMS&&c.styledMode&&!C.inlineAllowlist.length&&C.inlineAllowlist.push(/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,/^parentRule/,/^rx$/,/^ry$/,
/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/);q.isMS&&("application/pdf"===e.type||c.container.getElementsByTagName("image").length&&"image/svg+xml"!==e.type)||"application/pdf"===e.type&&a()?v(Error("Image type not supported for this chart/browser.")):c.getSVGForLocalExport(e,g||{},v,function(a){-1<a.indexOf("<foreignObject")&&"image/svg+xml"!==e.type&&(q.isMS||"application/pdf"===e.type)?v(Error("Image type not supported for charts with embedded HTML")):
b.downloadSVGLocal(a,K({filename:c.getFilename()},e),v,function(){return L(c,"exportChartLocalSuccess")})})}function t(a,g){var c=k.getElementsByTagName("head")[0],e=k.createElement("script");e.type="text/javascript";e.src=a;e.onload=g;e.onerror=function(){A("Error loading script "+a)};c.appendChild(e)}function u(a,g,r,e){var c=this,f=function(){n&&h===k&&e(c.sanitizeSVG(d.innerHTML,l))},m=function(a,c,e){++h;e.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);f()},d,l,y=null,n,
k=0,h=0;c.unbindGetSVG=J(c,"getSVG",function(a){l=a.chartCopy.options;n=(d=a.chartCopy.container.cloneNode(!0))&&d.getElementsByTagName("image")||[];k=n.length});c.getSVGForExport(a,g);try{if(!n||!n.length){e(c.sanitizeSVG(d.innerHTML,l));return}for(g=0;g<n.length;g++){var x=n[g];(y=x.getAttributeNS("http://www.w3.org/1999/xlink","href"))?b.imageToDataUrl(y,"image/png",{imageElement:x},a.scale,m,r,r,r):(h++,x.parentNode.removeChild(x),g--,f())}}catch(w){r(w)}c.unbindGetSVG()}function z(a,g,d,e,f,
h,p,N,l){var c=new m.Image,n=function(){setTimeout(function(){var b=k.createElement("canvas"),h=b.getContext&&b.getContext("2d");try{if(h){b.height=c.height*e;b.width=c.width*e;h.drawImage(c,0,0,b.width,b.height);try{var m=b.toDataURL(g);f(m,g,d,e)}catch(D){v(a,g,d,e)}}else p(a,g,d,e)}finally{l&&l(a,g,d,e)}},b.loadEventDeferDelay)},r=function(){N(a,g,d,e);l&&l(a,g,d,e)};var v=function(){c=new m.Image;v=h;c.crossOrigin="Anonymous";c.onload=n;c.onerror=r;c.src=a};c.onload=n;c.onerror=r;c.src=a}function E(a){var c=
m.navigator.userAgent;c=-1<c.indexOf("WebKit")&&0>c.indexOf("Chrome");try{if(!c&&-1===a.indexOf("<foreignObject"))return b.domurl.createObjectURL(new m.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(r){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(a)}function F(a,b,d){var c=Number(a.getAttribute("width"))+2*b;b=Number(a.getAttribute("height"))+2*b;var g=new m.jspdf.jsPDF(b>c?"p":"l","pt",[c,b]);[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),function(a){a.parentNode.removeChild(a)});
for(var h=a.querySelectorAll("linearGradient"),f=0;f<h.length;f++)for(var k=h[f].querySelectorAll("stop"),l=0;l<k.length&&"0"===k[l].getAttribute("offset")&&"0"===k[l+1].getAttribute("offset");)k[l].remove(),l++;[].forEach.call(a.querySelectorAll("tspan"),function(a){"\u200b"===a.textContent&&(a.textContent=" ",a.setAttribute("dx",-5))});g.svg(a,{x:0,y:0,width:c,height:b,removeInvalid:!0}).then(function(){return d(g.output("datauristring"))})}b.CanVGRenderer={};b.domurl=m.URL||m.webkitURL||m;b.loadEventDeferDelay=
q.isMS?150:0;b.compose=function(a){if(f.pushUnique(M,a)){var b=a.prototype;b.getSVGForLocalExport=u;b.exportChartLocal=d;B(!0,p.exporting,H)}return a};b.downloadSVGLocal=function(c,d,f,e){var g=k.createElement("div"),q=d.type||"image/png",r=(d.filename||"chart")+"."+("image/svg+xml"===q?"svg":q.split("/")[1]),u=d.scale||1,l=d.libURL||p.exporting.libURL,y=!0,n=d.pdfFont;l="/"!==l.slice(-1)?l+"/":l;var C=function(a,b){var c=function(a,b){m.jspdf.jsPDF.API.events.push(["initialized",function(){this.addFileToVFS(a,
b);this.addFont(a,"HighchartsFont",a);this.getFontList().HighchartsFont||this.setFont("HighchartsFont")}])};n&&!/[^\u0000-\u007F\u200B]+/.test(a.textContent||"")&&(n=void 0);var e=["normal","italic","bold","bolditalic"],d,f=function(){var a=e.shift();if(!a)return b();var h=n&&n[a];h?I({url:h,responseType:"blob",success:function(b,e){b=new FileReader;b.onloadend=function(){if("string"===typeof this.result){var b=this.result.split(",")[1];c(a,b);"normal"===a&&(d=b)}f()};b.readAsDataURL(e.response)},
error:f}):(d&&c(a,d),f())};f()},A=function(){a.setElementHTML(g,c);var b=g.getElementsByTagName("text"),d;[].forEach.call(b,function(a){["fontFamily","fontSize"].forEach(function(b){for(var c=a;c&&c!==g;){if(c.style[b]){c=c.style[b];"fontSize"===b&&/em$/.test(c)&&(c=Math.round(16*parseFloat(c))+"px");a.style[b]=c;break}c=c.parentNode}});a.style.fontFamily=n&&n.normal?"HighchartsFont":String(a.style.fontFamily&&a.style.fontFamily.split(" ").splice(-1));d=a.getElementsByTagName("title");[].forEach.call(d,
function(b){a.removeChild(b)})});var k=g.querySelector("svg");k&&C(k,function(){F(k,0,function(a){try{h(a,r),e&&e()}catch(P){f(P)}})})};if("image/svg+xml"===q)try{if("undefined"!==typeof m.MSBlobBuilder){var x=new m.MSBlobBuilder;x.append(c);var w=x.getBlob("image/svg+xml")}else w=E(c);h(w,r);e&&e()}catch(D){f(D)}else if("application/pdf"===q)m.jspdf&&m.jspdf.jsPDF?A():(y=!0,t(l+"jspdf.js",function(){t(l+"svg2pdf.js",A)}));else{w=E(c);var B=function(){try{b.domurl.revokeObjectURL(w)}catch(D){}};z(w,
q,{},u,function(a){try{h(a,r),e&&e()}catch(O){f(O)}},function(){var a=k.createElement("canvas"),b=a.getContext("2d"),d=c.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*u,g=c.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*u,n=function(){m.canvg.Canvg.fromString(b,c).start();try{h(m.navigator.msSaveOrOpenBlob?a.msToBlob():a.toDataURL(q),r),e&&e()}catch(Q){f(Q)}finally{B()}};a.width=d;a.height=g;m.canvg?n():(y=!0,t(l+"canvg.js",function(){n()}))},f,f,function(){y&&B()})}};b.getScript=t;b.imageToDataUrl=
z;b.svgToDataUrl=E;b.svgToPdf=F})(u||(u={}));return u});d(a,"masters/modules/offline-exporting.src.js",[a["Core/Globals.js"],a["Extensions/OfflineExporting/OfflineExporting.js"]],function(a,d){a.downloadSVGLocal=d.downloadSVGLocal;d.compose(a.Chart)})});
//# sourceMappingURL=offline-exporting.js.map