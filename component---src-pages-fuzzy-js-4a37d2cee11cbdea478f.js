(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{192:function(e,t,n){"use strict";n.r(t);n(135);var a=n(0),o=n.n(a),r=(n(196),function(){var e=[];return $.each(["p","td","h1","h2","h3","h4","h5","h6","li","label","pre","code","blockquote"],function(t,n){e=e.concat([].slice.call(document.getElementsByTagName(n)))}),e}),c=function(e,t){return new Fuse(t,{keys:["innerText"]}).search(e)};$(document).ready(function(){var e,t,n=r();$("#fuzzysearchbox, #site-search-query").on("input",function(a){var o=a.currentTarget.value;if(o){e&&i(e,!1);var r=c(o,n);e=r,t||(t=setInterval(function(){i(e,!0)},100))}else e&&(i(e,!1),e=null),clearInterval(t),t=null})});var i=function(e,t){var n=e.length;$.each(e,function(e,a){var o=Math.floor(255*Math.random()),r=Math.floor(255*Math.random()),c=Math.floor(255*Math.random()),i=.6*(1-e/n)+.4,l=$(a);t?l.css("background-color","rgba("+o+", "+r+", "+c+" , "+i+")"):l.css("background-color","transparent")})};t.default=function(){return useEffect(function(){var e,t,n=r();$("#fuzzysearchbox, #site-search-query").on("input",function(a){var o=a.currentTarget.value;if(o){e&&i(e,!1);var r=c(o,n);e=r,t||(t=setInterval(function(){i(e,!0)},100))}else e&&(i(e,!1),e=null),clearInterval(t),t=null});for(var a,o,l,u=["The quick brown fox jumped over the lazy dog.","Romeo, Romeo, where fore art thou, Romeo.","I like big butts and I cannot lie, you other brothers can't deny.","It was the best of times, it was the worst of times.","Dat tho.","They see me rollin', they hatin', patrollin', and tryin' to catch me ridin' dirty.","Billy Jean is not my lover, she just the girl who thinks that I am the one, but the kid is not my son."],s=0;s<500;s++)o=document.createElement("P"),a=Math.floor(Math.random()*u.length),l=document.createTextNode(u[a]),console.log(l),o.appendChild(l),document.getElementById("source").appendChild(o)},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:"z-index: 100;"},o.a.createElement("div",{style:"margin-top: 20em; margin-bottom: 1em; "},o.a.createElement("h1",{style:"background-color: white; color: #666666; font-size: 24px; font-weight: 300; width: 400px; text-align: center;text-transform: uppercase; padding: 1em; border: 1px solid #666666; margin: 0 auto;"},"What is Fuzzy Search?")),o.a.createElement("input",{id:"fuzzysearchbox",style:"font-size: 16px; border: 1px solid #666666; display: block; margin: 0 auto;",type:"text"})),o.a.createElement("div",{id:"source",style:"z-index: -100; position: absolute; top: 0; "}))}},195:function(e,t,n){var a;e.exports=(a=n(197))&&a.default||a},196:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(66),c=n.n(r);n.d(t,"a",function(){return c.a});n(195),n(9).default.enqueue,o.a.createContext({})},197:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),o=n.n(a),r=n(91);t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-pages-fuzzy-js-4a37d2cee11cbdea478f.js.map