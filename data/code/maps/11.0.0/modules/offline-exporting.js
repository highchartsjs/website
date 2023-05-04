/*
 Highcharts JS v11.0.0 (2023-04-27)

 Client side exporting module

 (c) 2015-2021 Torstein Honsi / Oystein Moseng

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/offline-exporting",["highcharts","highcharts/modules/exporting"],function(b){a(b);a.Highcharts=b;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function b(a,u,d,b){a.hasOwnProperty(u)||(a[u]=b.apply(null,d),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:u,
module:a[u]}})))}a=a?a._modules:{};b(a,"Extensions/DownloadURL.js",[a["Core/Globals.js"]],function(a){const {isSafari:u}=a,d=a.win,b=d.document,h=d.URL||d.webkitURL||d,r=a.dataURLtoBlob=function(a){if((a=a.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/))&&3<a.length&&d.atob&&d.ArrayBuffer&&d.Uint8Array&&d.Blob&&h.createObjectURL){const b=d.atob(a[3]);var p=new d.ArrayBuffer(b.length);p=new d.Uint8Array(p);for(let a=0;a<p.length;++a)p[a]=b.charCodeAt(a);a=new d.Blob([p],
{type:a[1]});return h.createObjectURL(a)}};a=a.downloadURL=function(a,h){var n=d.navigator;const q=b.createElement("a");if("string"===typeof a||a instanceof String||!n.msSaveOrOpenBlob){a=`${a}`;n=/Edge\/\d+/.test(n.userAgent);if(u&&"string"===typeof a&&0===a.indexOf("data:application/pdf")||n||2E6<a.length)if(a=r(a)||"",!a)throw Error("Failed to convert to blob");if("undefined"!==typeof q.download)q.href=a,q.download=h,b.body.appendChild(q),q.click(),b.body.removeChild(q);else try{const b=d.open(a,
"chart");if("undefined"===typeof b||null===b)throw Error("Failed to open window");}catch(S){d.location.href=a}}else n.msSaveOrOpenBlob(a,h)};return{dataURLtoBlob:r,downloadURL:a}});b(a,"Extensions/OfflineExporting/OfflineExportingDefaults.js",[],function(){return{libURL:"https://code.highcharts.com/11.0.0/lib/",menuItemDefinitions:{downloadPNG:{textKey:"downloadPNG",onclick:function(){this.exportChartLocal()}},downloadJPEG:{textKey:"downloadJPEG",onclick:function(){this.exportChartLocal({type:"image/jpeg"})}},
downloadSVG:{textKey:"downloadSVG",onclick:function(){this.exportChartLocal({type:"image/svg+xml"})}},downloadPDF:{textKey:"downloadPDF",onclick:function(){this.exportChartLocal({type:"application/pdf"})}}}}});b(a,"Extensions/OfflineExporting/OfflineExporting.js",[a["Core/Renderer/HTML/AST.js"],a["Core/Chart/Chart.js"],a["Core/Defaults.js"],a["Extensions/DownloadURL.js"],a["Extensions/Exporting/Exporting.js"],a["Core/Globals.js"],a["Core/HttpUtilities.js"],a["Extensions/OfflineExporting/OfflineExportingDefaults.js"],
a["Core/Utilities.js"]],function(a,b,d,I,B,r,p,J,n){const {defaultOptions:u}=d,{downloadURL:h}=I,{win:g,doc:z}=r,{ajax:K}=p,{addEvent:L,error:A,extend:M,fireEvent:N,merge:F}=n;a.allowedAttributes.push("data-z-index","fill-opacity","rx","ry","stroke-dasharray","stroke-linejoin","text-anchor","transform","version","viewBox","visibility","xmlns","xmlns:xlink");a.allowedTags.push("desc","clippath","g");const O=[];var y;(function(b){function d(a,f){const c=this,e=F(c.options.exporting,a),x=function(a){!1===
e.fallbackToExportServer?e.error?e.error(e,a):A(28,!0):c.exportChart(e)};a=function(){return[].some.call(c.container.getElementsByTagName("image"),function(a){a=a.getAttribute("href");return""!==a&&"string"===typeof a&&0!==a.indexOf("data:")})};r.isMS&&c.styledMode&&!B.inlineAllowlist.length&&B.inlineAllowlist.push(/^blockSize/,/^border/,/^caretColor/,/^color/,/^columnRule/,/^columnRuleColor/,/^cssFloat/,/^cursor/,/^fill$/,/^fillOpacity/,/^font/,/^inlineSize/,/^length/,/^lineHeight/,/^opacity/,/^outline/,
/^parentRule/,/^rx$/,/^ry$/,/^stroke/,/^textAlign/,/^textAnchor/,/^textDecoration/,/^transform/,/^vectorEffect/,/^visibility/,/^x$/,/^y$/);r.isMS&&("application/pdf"===e.type||c.container.getElementsByTagName("image").length&&"image/svg+xml"!==e.type)||"application/pdf"===e.type&&a()?x(Error("Image type not supported for this chart/browser.")):c.getSVGForLocalExport(e,f||{},x,function(a){-1<a.indexOf("<foreignObject")&&"image/svg+xml"!==e.type&&(r.isMS||"application/pdf"===e.type)?x(Error("Image type not supported for charts with embedded HTML")):
b.downloadSVGLocal(a,M({filename:c.getFilename()},e),x,()=>N(c,"exportChartLocalSuccess"))})}function p(a,f){const c=z.getElementsByTagName("head")[0],e=z.createElement("script");e.type="text/javascript";e.src=a;e.onload=f;e.onerror=function(){A("Error loading script "+a)};c.appendChild(e)}function q(a,f,d,e){const c=this,g=(a,f,b)=>{++h;b.imageElement.setAttributeNS("http://www.w3.org/1999/xlink","href",a);m&&h===v&&e(c.sanitizeSVG(k.innerHTML,l))};let t,k,l,G=null,m,v=0,h=0;c.unbindGetSVG=L(c,"getSVG",
a=>{l=a.chartCopy.options;m=(k=a.chartCopy.container.cloneNode(!0))&&k.getElementsByTagName("image")||[];v=m.length});c.getSVGForExport(a,f);try{if(!m||!m.length){e(c.sanitizeSVG(k.innerHTML,l));return}for(f=0;f<m.length;f++)t=m[f],(G=t.getAttributeNS("http://www.w3.org/1999/xlink","href"))?b.imageToDataUrl(G,"image/png",{imageElement:t},a.scale,g,d,d,d):(h++,t.parentNode.removeChild(t),f--,m&&h===v&&e(c.sanitizeSVG(k.innerHTML,l)))}catch(w){d(w)}c.unbindGetSVG()}function y(a,f,d,e,h,u,t,p,l){let c=
new g.Image,m;const k=()=>{setTimeout(function(){const b=z.createElement("canvas"),g=b.getContext&&b.getContext("2d");let k;try{if(g){b.height=c.height*e;b.width=c.width*e;g.drawImage(c,0,0,b.width,b.height);try{k=b.toDataURL(f),h(k,f,d,e)}catch(D){m(a,f,d,e)}}else t(a,f,d,e)}finally{l&&l(a,f,d,e)}},b.loadEventDeferDelay)},x=()=>{p(a,f,d,e);l&&l(a,f,d,e)};m=()=>{c=new g.Image;m=u;c.crossOrigin="Anonymous";c.onload=k;c.onerror=x;c.src=a};c.onload=k;c.onerror=x;c.src=a}function E(a){var c=g.navigator.userAgent;
c=-1<c.indexOf("WebKit")&&0>c.indexOf("Chrome");try{if(!c&&-1===a.indexOf("<foreignObject"))return b.domurl.createObjectURL(new g.Blob([a],{type:"image/svg+xml;charset-utf-16"}))}catch(k){}return"data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(a)}function H(a,b,d){const c=Number(a.getAttribute("width"))+2*b;b=Number(a.getAttribute("height"))+2*b;const f=new g.jspdf.jsPDF(b>c?"p":"l","pt",[c,b]);[].forEach.call(a.querySelectorAll('*[visibility="hidden"]'),function(a){a.parentNode.removeChild(a)});
const h=a.querySelectorAll("linearGradient");for(let a=0;a<h.length;a++){const b=h[a].querySelectorAll("stop");let c=0;for(;c<b.length&&"0"===b[c].getAttribute("offset")&&"0"===b[c+1].getAttribute("offset");)b[c].remove(),c++}[].forEach.call(a.querySelectorAll("tspan"),a=>{"\u200b"===a.textContent&&(a.textContent=" ",a.setAttribute("dx",-5))});f.svg(a,{x:0,y:0,width:c,height:b,removeInvalid:!0}).then(()=>d(f.output("datauristring")))}b.CanVGRenderer={};b.domurl=g.URL||g.webkitURL||g;b.loadEventDeferDelay=
r.isMS?150:0;b.compose=function(a){if(n.pushUnique(O,a)){const b=a.prototype;b.getSVGForLocalExport=q;b.exportChartLocal=d;F(!0,u.exporting,J)}return a};b.downloadSVGLocal=function(c,d,k,e){const f=z.createElement("div"),n=d.type||"image/png",t=(d.filename||"chart")+"."+("image/svg+xml"===n?"svg":n.split("/")[1]),q=d.scale||1;let l,r,m,v=d.libURL||u.exporting.libURL,C=!0,w=d.pdfFont;v="/"!==v.slice(-1)?v+"/":v;const B=(a,b)=>{const c=(a,b)=>{g.jspdf.jsPDF.API.events.push(["initialized",function(){this.addFileToVFS(a,
b);this.addFont(a,"HighchartsFont",a);this.getFontList().HighchartsFont||this.setFont("HighchartsFont")}])};w&&!/[^\u0000-\u007F\u200B]+/.test(a.textContent||"")&&(w=void 0);const d=["normal","italic","bold","bolditalic"];let e;const f=()=>{const a=d.shift();if(!a)return b();const h=w&&w[a];h?K({url:h,responseType:"blob",success:(b,d)=>{b=new FileReader;b.onloadend=function(){if("string"===typeof this.result){const b=this.result.split(",")[1];c(a,b);"normal"===a&&(e=b)}f()};b.readAsDataURL(d.response)},
error:f}):(e&&c(a,e),f())};f()},A=()=>{a.setElementHTML(f,c);const b=f.getElementsByTagName("text");let d;[].forEach.call(b,function(a){["fontFamily","fontSize"].forEach(b=>{for(var c=a;c&&c!==f;){if(c.style[b]){c=c.style[b];"fontSize"===b&&/em$/.test(c)&&(c=Math.round(16*parseFloat(c))+"px");a.style[b]=c;break}c=c.parentNode}});a.style.fontFamily=w&&w.normal?"HighchartsFont":String(a.style.fontFamily&&a.style.fontFamily.split(" ").splice(-1));d=a.getElementsByTagName("title");[].forEach.call(d,function(b){a.removeChild(b)})});
const g=f.querySelector("svg");g&&B(g,()=>{H(g,0,a=>{try{h(a,t),e&&e()}catch(Q){k(Q)}})})};if("image/svg+xml"===n)try{"undefined"!==typeof g.MSBlobBuilder?(r=new g.MSBlobBuilder,r.append(c),l=r.getBlob("image/svg+xml")):l=E(c),h(l,t),e&&e()}catch(D){k(D)}else"application/pdf"===n?g.jspdf&&g.jspdf.jsPDF?A():(C=!0,p(v+"jspdf.js",function(){p(v+"svg2pdf.js",A)})):(l=E(c),m=function(){try{b.domurl.revokeObjectURL(l)}catch(D){}},y(l,n,{},q,function(a){try{h(a,t),e&&e()}catch(P){k(P)}},function(){const a=
z.createElement("canvas"),b=a.getContext("2d"),d=c.match(/^<svg[^>]*width\s*=\s*"?(\d+)"?[^>]*>/)[1]*q,f=c.match(/^<svg[^>]*height\s*=\s*"?(\d+)"?[^>]*>/)[1]*q,l=function(){g.canvg.Canvg.fromString(b,c).start();try{h(g.navigator.msSaveOrOpenBlob?a.msToBlob():a.toDataURL(n),t),e&&e()}catch(R){k(R)}finally{m()}};a.width=d;a.height=f;g.canvg?l():(C=!0,p(v+"canvg.js",function(){l()}))},k,k,function(){C&&m()}))};b.getScript=p;b.imageToDataUrl=y;b.svgToDataUrl=E;b.svgToPdf=H})(y||(y={}));return y});b(a,
"masters/modules/offline-exporting.src.js",[a["Core/Globals.js"],a["Extensions/OfflineExporting/OfflineExporting.js"]],function(a,b){a.downloadSVGLocal=b.downloadSVGLocal;b.compose(a.Chart)})});
//# sourceMappingURL=offline-exporting.js.map