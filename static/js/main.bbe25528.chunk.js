(this["webpackJsonpgone-fishing"]=this["webpackJsonpgone-fishing"]||[]).push([[0],[,,,,function(e,n,o){e.exports=o(12)},,,,,function(e,n,o){},function(e,n,o){},function(e,n,o){},function(e,n,o){"use strict";o.r(n);var t=o(0),a=o.n(t),i=o(2),c=o.n(i),r=(o(9),o(3)),l=(o(10),!1),s=!1,u=function(){l?console.log("You must reel in your hook before you may cast again"):(l=!0,setTimeout((function(){l&&(console.log("You have a bite! Catch it!"),s=!0,setInterval((function(){setTimeout((function(){s&&(console.log("It got away..."),l=!1,s=!1)}),700)})))}),function(e,n){var o=Math.floor(Math.random()*(n-e+1)+e);return console.log("Casting line..."),console.log("Waiting for a bite..."),o}(7e3,35e3)))};function h(){var e=Object(t.useState)(0),n=Object(r.a)(e,2),o=n[0],i=n[1],c=function(){if(l)return l&&!s?(console.log("You reel in your hook with no success."),void(l=!1)):(console.log("You caught a fish!"),s=!1,l=!1,i(o+1));alert("You have not cast your line out!")};return a.a.createElement("div",{className:"Fishing-Container"},a.a.createElement("div",{className:"Fishing-Viewport",onClick:c}),a.a.createElement("div",{className:"Fishing-Dashboard"},a.a.createElement("p",null,"Caught: ",o," \ud83d\udc1f"),a.a.createElement("button",{onClick:u},"Cast"),a.a.createElement("button",{onClick:c},"Reel In")))}o(11);var m=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.bbe25528.chunk.js.map