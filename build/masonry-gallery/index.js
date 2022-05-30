!function(){"use strict";var e,a={489:function(){var e=window.wp.element,a=window.wp.blocks,l=JSON.parse('{"apiVersion":2,"name":"migb/masonry-gallery","version":"0.1.0","title":"Gallery","category":"ucla-blocks","description":"Showcase Images in a Masonry Gallery View.","keywords":["Masonry","Gallery","Images","Image Gallery"],"supports":{"html":false,"anchor":true},"attributes":{"galleryId":{"type":"string"},"images":{"type":"array"},"colDevice":{"type":"string","default":"desktop"},"deskCol":{"type":"number","default":3},"tabCol":{"type":"number","default":2},"phoneCol":{"type":"number","default":1},"gapDevice":{"type":"string","default":"desktop"},"deskGap":{"type":"number","default":10},"tabGap":{"type":"number","default":10},"phoneGap":{"type":"number","default":5},"enableLightbox":{"type":"boolean","default":true},"imageHoverEffect":{"type":"string","default":"none"}},"textdomain":"ucla-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),t=window.wp.blockEditor,n=window.wp.components,r=a=>{let{title:l,device:t,renderFunction:r}=a;return(0,e.createElement)("div",{className:"res__devices"},(0,e.createElement)("div",{className:"res__label"},l),(0,e.createElement)("div",{className:"res__btns"},(0,e.createElement)(n.Button,{onClick:()=>r("desktop"),isSmall:!0,isPressed:"desktop"===t},(0,e.createElement)("span",{className:"dashicons dashicons-desktop"})),(0,e.createElement)(n.Button,{onClick:()=>r("tablet"),isSmall:!0,isPressed:"tablet"===t},(0,e.createElement)("span",{className:"dashicons dashicons-tablet"})),(0,e.createElement)(n.Button,{onClick:()=>r("smartphone"),isSmall:!0,isPressed:"smartphone"===t},(0,e.createElement)("span",{className:"dashicons dashicons-smartphone"}))))};const{Fragment:o}=wp.element,{__:__}=wp.i18n;function i(){return i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},i.apply(this,arguments)}var s=window.wp.i18n;(0,a.registerBlockType)(l,{icon:{src:(0,e.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24"},(0,e.createElement)("path",{d:"M10 15c0-.552.448-1 1.001-1s.999.448.999 1-.446 1-.999 1-1.001-.448-1.001-1zm6.2 0l-1.7 2.6-1.3-1.6-3.2 4h10l-3.8-5zm7.8-5v14h-18v-14h18zm-2 2h-14v10h14v-10zm-6.462-9.385l2.244 5.385h2.167l-3.334-8-16.615 6.923 4 9.663v-5.265l-1.384-3.321 12.922-5.385z"})),foreground:"#006BA1"},edit:function(a){let{attributes:l,setAttributes:i,clientId:s}=a;const{galleryId:m,images:c,colDevice:g,deskCol:p,tabCol:d,phoneCol:u,gapDevice:y,deskGap:h,tabGap:v,phoneGap:b,enableLightbox:_,imageHoverEffect:f}=l,E=c?p:1;return i({galleryId:s.slice(0,8)}),(0,e.createElement)(o,null,(0,e.createElement)(t.InspectorControls,null,(0,e.createElement)(n.PanelBody,{title:__("Gallery Settings","masonry-image-gallery"),initialOpen:!0},(0,e.createElement)(r,{device:g,title:__("Number of Columns","masonry-image-gallery"),renderFunction:e=>i({colDevice:e})}),"desktop"===g&&(0,e.createElement)(n.RangeControl,{value:p,onChange:e=>i({deskCol:e}),min:1,max:5}),"tablet"===g&&(0,e.createElement)(n.RangeControl,{value:d,onChange:e=>i({tabCol:e}),min:1,max:5}),"smartphone"===g&&(0,e.createElement)(n.RangeControl,{value:u,onChange:e=>i({phoneCol:e}),min:1,max:5}),(0,e.createElement)(r,{device:y,title:__("Items Gutter","masonry-image-gallery"),renderFunction:e=>i({gapDevice:e})}),"desktop"===y&&(0,e.createElement)(n.RangeControl,{value:h,onChange:e=>i({deskGap:e}),min:0,max:100,help:__("unit in pixel (px)","masonry-image-gallery")}),"tablet"===y&&(0,e.createElement)(n.RangeControl,{value:v,onChange:e=>i({tabGap:e}),min:0,max:100,help:__("unit in pixel (px)","masonry-image-gallery")}),"smartphone"===y&&(0,e.createElement)(n.RangeControl,{value:b,onChange:e=>i({phoneGap:e}),min:0,max:100,help:__("unit in pixel (px)","masonry-image-gallery")})),(0,e.createElement)(n.PanelBody,{title:__("Gallery Image Settings","masonry-image-gallery"),initialOpen:!1},(0,e.createElement)(n.ToggleControl,{label:__("Enable Lightbox"),checked:_,onChange:()=>i({enableLightbox:!_})}),(0,e.createElement)(n.SelectControl,{label:__("Image Hover Effect","masonry-image-gallery"),value:f,options:[{label:__("None","masonry-image-gallery"),value:"none"},{label:__("Zoom In","masonry-image-gallery"),value:"zoom__in"},{label:__("Zoom Out","masonry-image-gallery"),value:"zoom__out"},{label:__("GrayScale","masonry-image-gallery"),value:"gray__scale"}],onChange:e=>{i({imageHoverEffect:e})}}))),c&&(0,e.createElement)(t.BlockControls,null,(0,e.createElement)(n.ToolbarGroup,null,(0,e.createElement)(t.MediaUploadCheck,null,(0,e.createElement)(t.MediaUpload,{multiple:!0,onSelect:e=>i({images:e}),gallery:!0,allowedTypes:["image"],value:c.map((e=>e.id)),render:a=>{let{open:l}=a;return(0,e.createElement)(n.ToolbarButton,{label:__("Edit Images","masonry-image-gallery"),onClick:l,icon:"edit"})}})))),(0,e.createElement)("div",(0,t.useBlockProps)({className:`dc__${E} tc__${d} pc__${u} dg__${h} tg__${v} pg__${b}`}),c?c.map((a=>(0,e.createElement)("div",{key:a.id,className:`single-gallery-image ${f} dg__${h} tg__${v} pg__${b}`},(0,e.createElement)("img",{src:a.url,alt:a.alt?a.alt:__("Gallery Image","masonry-image-gallery"),className:`wp-image${a.id}`})))):(0,e.createElement)(t.MediaPlaceholder,{multiple:!0,onSelect:e=>i({images:e}),onFilesPreUpload:e=>i({images:e}),onSelectURL:!1,allowedTypes:["image"],labels:{title:__("Add Gallery Images","masonry-image-gallery")}})))},save:function(a){let{attributes:l}=a;const{galleryId:n,images:r,deskCol:o,tabCol:m,phoneCol:c,deskGap:g,tabGap:p,phoneGap:d,enableLightbox:u,imageHoverEffect:y}=l;return(0,e.createElement)("div",i({},t.useBlockProps.save({className:`dc__${o} tc__${m} pc__${c} dg__${g} tg__${p} pg__${d}`}),{"data-id":n,id:n}),r&&r.map((a=>u?(0,e.createElement)("a",{className:`single-gallery-image ${y} dg__${g} tg__${p} pg__${d}`,href:a.url},(0,e.createElement)("img",{src:a.url,alt:a.alt?a.alt:(0,s.__)("Gallery Image","masonry-image-gallery"),className:`wp-image-${a.id}`})):(0,e.createElement)("div",{className:`single-gallery-image ${y} dg__${g} tg__${p} pg__${d}`},(0,e.createElement)("img",{src:a.url,alt:a.alt?a.alt:(0,s.__)("Gallery Image","masonry-image-gallery"),className:`wp-image-${a.id}`})))))}})}},l={};function t(e){var n=l[e];if(void 0!==n)return n.exports;var r=l[e]={exports:{}};return a[e](r,r.exports,t),r.exports}t.m=a,e=[],t.O=function(a,l,n,r){if(!l){var o=1/0;for(c=0;c<e.length;c++){l=e[c][0],n=e[c][1],r=e[c][2];for(var i=!0,s=0;s<l.length;s++)(!1&r||o>=r)&&Object.keys(t.O).every((function(e){return t.O[e](l[s])}))?l.splice(s--,1):(i=!1,r<o&&(o=r));if(i){e.splice(c--,1);var m=n();void 0!==m&&(a=m)}}return a}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[l,n,r]},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},function(){var e={415:0,917:0};t.O.j=function(a){return 0===e[a]};var a=function(a,l){var n,r,o=l[0],i=l[1],s=l[2],m=0;if(o.some((function(a){return 0!==e[a]}))){for(n in i)t.o(i,n)&&(t.m[n]=i[n]);if(s)var c=s(t)}for(a&&a(l);m<o.length;m++)r=o[m],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(c)},l=self.webpackChunkboilerplate=self.webpackChunkboilerplate||[];l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l))}();var n=t.O(void 0,[917],(function(){return t(489)}));n=t.O(n)}();