(window["webpackJsonpreact-js"]=window["webpackJsonpreact-js"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),o=a.n(i),c=(a(14),a(4)),l=a(5),s=a(7),p=a(8),h=(a(15),a(1)),d=a.n(h),m=a(6),u=a.n(m),y={fill:["fill-opacity"],line:["line-opacity"],circle:["circle-opacity","circle-stroke-opacity"],symbol:["icon-opacity","text-opacity"],raster:["raster-opacity"],"fill-extrusion":["fill-extrusion-opacity"]},f={left:"lefty",center:"centered",right:"righty"},E=function(e){var t=-1!==e.indexOf("?");return{url:e+(t?"&pluginName=journalismScrollytelling":"?pluginName=journalismScrollytelling")}};function g(e){var t=e.id,a=e.theme,n=e.title,i=e.image,o=e.description,c=t===e.currentChapterID?"step active":"step";return r.a.createElement("div",{id:t,className:c},r.a.createElement("div",{className:a},n&&r.a.createElement("h3",{className:"title"},n),i&&r.a.createElement("img",{src:i,alt:n}),o&&r.a.createElement("p",null,o)))}var C=function(e){Object(p.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={currentChapter:e.chapters[0]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chapters[0].location;d.a.accessToken=e.accessToken;var a=new d.a.Map({container:this.mapContainer,style:e.style,center:t.center,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,transformRequest:E}),n=new d.a.Marker;function r(e){(function(e){var t=a.getLayer(e).type;return y[t]})(e.layer).forEach((function(t){a.setPaintProperty(e.layer,t,e.opacity)}))}e.showMarkers&&n.setLngLat(t.center).addTo(a);var i=this.setState.bind(this),o=u()();a.on("load",(function(){o.setup({step:".step",offset:.5,progress:!0}).onStepEnter((function(t){var o=e.chapters.find((function(e){return e.id===t.element.id}));i({currentChapter:o}),a.flyTo(o.location),e.showMarkers&&n.setLngLat(o.location.center),o.onChapterEnter.length>0&&o.onChapterEnter.forEach(r)})).onStepExit((function(t){var a=e.chapters.find((function(e){return e.id===t.element.id}));a.onChapterExit.length>0&&a.onChapterExit.forEach(r)}))})),window.addEventListener("resize",o.resize)}},{key:"render",value:function(){var e=this,t=this.props,a=t.theme,n=this.state.currentChapter.id;return r.a.createElement("div",null,r.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"absolute top right left bottom"}),r.a.createElement("div",{id:"story"},t.title&&r.a.createElement("div",{id:"header",className:a},r.a.createElement("h1",null,t.title),t.subtitle&&r.a.createElement("h2",null,t.subtitle),t.byline&&r.a.createElement("p",null,t.byline)),r.a.createElement("div",{id:"features",className:f[t.alignment]},t.chapters.map((function(e){return r.a.createElement(g,Object.assign({key:e.id,theme:a},e,{currentChapterID:n}))}))),t.footer&&r.a.createElement("div",{id:"footer",className:a},r.a.createElement("p",null,t.footer))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v={style:"mapbox://styles/ruralinno/cjxytxnul151q1cq6u96niqs2",accessToken:"pk.eyJ1IjoicnVyYWxpbm5vIiwiYSI6ImNqeHl0cW0xODBlMm0zY2x0dXltYzRuazUifQ.zZBovoCHzLIW0wCZveEKzA",showMarkers:!1,alignment:"left",theme:"dark",title:"CORI basemap test",subtitle:"I can haz CORI storymap from mapbox template?",byline:"",footer:"Source: the infallible Chen Chen.",chapters:[{id:"glacier-np",title:"There are so many places to look on a map...",description:"... and yet one place always draws me back, no matter how hard I try...",location:{center:[-113.91666,48.66451],zoom:3,pitch:0,bearing:0},onChapterEnter:[],onChapterExit:[]},{id:"slide-2",title:"... Tiffin, OH",description:"We are a great town. Especially for mapping demos!",location:{center:[-83.17734,41.10888],zoom:13.99,pitch:60,bearing:0},onChapterEnter:[{layer:"water",opacity:0},{layer:"Child Care",opacity:0}],onChapterExit:[]},{id:"water slide (get it?)",title:"Tiffin haz wahtah",description:"And right through downtown, to boot!",location:{center:[-83.17734,41.10888],zoom:13.99,pitch:60,bearing:0},onChapterEnter:[{layer:"water",opacity:1}],onChapterExit:[{layer:"water",opacity:.5}]},{id:"jesus-slide",title:"Tiffin has the Lord",description:"The Holy Trinity!",location:{center:[-83.17489,41.11629],zoom:18.33,pitch:57,bearing:26.4},onChapterEnter:[{layer:"Child Care",opacity:0}],onChapterExit:[]},{id:"child-care-slide",title:"... and childcare nearby.",description:"The socio-religious trifecta!",location:{center:[-83.17472,41.11595],zoom:19.52,pitch:60,bearing:149.6},onChapterEnter:[{layer:"Child Care",opacity:1}],onChapterExit:[{layer:"Child Care",opacity:0}]}]};o.a.render(r.a.createElement(C,v),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.547f91d0.chunk.js.map