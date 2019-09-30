(window.webpackJsonpsite=window.webpackJsonpsite||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(4),r=n.n(c),l=(n(10),n(2)),u=o.a.createContext(),i=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),m=s[0],b=s[1],d=Object(a.useState)(""),p=Object(l.a)(d,2),f=p[0],E=p[1],h=function(){b(c),r("")};return o.a.createElement(u.Provider,{value:{handleSetDisplayValue:function(e){c.includes(".")&&"."===e||r("".concat((c+e).replace(/^0+/,"")))},handleSetStoredValue:h,handleBackButton:function(){if(""!==c){var e=c.slice(0,c.length-1);r(e)}},handleClearValue:function(){r(""),b(""),E("")},handleSetCalcFunction:function(e){console.log("Function"),c&&(E(e),h()),m&&E(e)},handleToggleNegative:function(){if(c)if(c>0)r("-".concat(c));else{var e=c.slice(1);r(e)}else if(m>0)b("-".concat(m));else{var t=m.slice(1);b(t)}},handleMath:function(){var e=function(e){return e.length>9?e.slice(0,8):e};if(c&&m){switch(f){case"+":b("".concat(e("".concat(parseFloat(m)+parseFloat(c)))));break;case"-":b("".concat(e("".concat(parseFloat(m)-parseFloat(c)))));break;case"/":b("".concat(e("".concat(parseFloat(m)/parseFloat(c)))));break;case"*":b("".concat(e("".concat(parseFloat(m)*parseFloat(c)))))}r("")}},number:c,storedNumber:m,setNumber:r,functionType:f}},e.children)},s=function(e){var t=e.buttonValue,n=Object(a.useContext)(u).handleSetDisplayValue;return o.a.createElement("button",{type:"button",className:"button ".concat(0===t?"button-zero":""),onClick:function(){return n(t)}},t)},m=function(){var e=Object(a.useContext)(u).handleMath;return o.a.createElement("button",{type:"button",className:"button button-operator",onClick:function(){return e()}},"=")},b=function(){var e=Object(a.useContext)(u).handleClearValue;return o.a.createElement("button",{type:"button",className:"button button-modifier",onClick:function(){return e()}},"C")},d=[{operator:"/",code:"247"},{operator:"*",code:"215"},{operator:"-",code:"8722"},{operator:"+",code:"43"}],p=function(e){var t=e.buttonValue,n=Object(a.useContext)(u).handleSetCalcFunction;return o.a.createElement("button",{type:"button",className:"button button-operator",onClick:function(){return n(t)}},String.fromCharCode(d.filter((function(e){return e.operator===t})).map((function(e){return e.code}))))},f=function(){var e=Object(a.useContext)(u).handleToggleNegative;return o.a.createElement("button",{type:"button",className:"button button-modifier",onClick:function(){return e()}},"-/+")},E=function(){var e=Object(a.useContext)(u).handleBackButton;return o.a.createElement("button",{type:"button",className:"button button-modifier",onClick:function(){return e()}},String.fromCharCode(8592))},h=function(){return o.a.createElement("div",{className:"calc-buttons"},o.a.createElement(b,null),o.a.createElement(E,null),o.a.createElement(f,null),o.a.createElement(p,{buttonValue:"/"}),o.a.createElement(s,{buttonValue:7}),o.a.createElement(s,{buttonValue:8}),o.a.createElement(s,{buttonValue:9}),o.a.createElement(p,{buttonValue:"*"}),o.a.createElement(s,{buttonValue:4}),o.a.createElement(s,{buttonValue:5}),o.a.createElement(s,{buttonValue:6}),o.a.createElement(p,{buttonValue:"-"}),o.a.createElement(s,{buttonValue:1}),o.a.createElement(s,{buttonValue:2}),o.a.createElement(s,{buttonValue:3}),o.a.createElement(p,{buttonValue:"+"}),o.a.createElement(s,{buttonValue:0}),o.a.createElement(s,{buttonValue:"."}),o.a.createElement(m,null))},v=function(e){var t=Object(a.useContext)(u),n=t.number,c=t.storedNumber,r=t.functionType;return o.a.createElement("div",{className:"calc-display"},o.a.createElement("span",{className:"display-expression"},c&&r&&n?"".concat(c," ").concat(r," ").concat(n):""),o.a.createElement("span",{className:"display-number"},n.length||c?n||c:"0"))},C=n(1),g=function(){return o.a.createElement("div",null,o.a.createElement(C.a.div,{className:"calc-wrapper",animate:{scale:.9}},o.a.createElement(v,null),o.a.createElement(h,null)))},V=function(){return o.a.createElement(C.a.aside,{className:"sidebar-main",animate:{opacity:1},transition:{duration:1.5}},o.a.createElement("div",{className:"sidebar-container"},o.a.createElement("h1",null,"Calc."),o.a.createElement("p",null,"This calculator is largely based on the app found in iOS. I built it using React in order to better understand React Hooks. State is managed with the useContext API. Let me know if you have questions, or check out my other projects"," ",o.a.createElement("a",{href:"http://ethanling.com/projects"},"here")),o.a.createElement("p",null,"Made in 2019 by ",o.a.createElement("a",{href:"http://ethanling.com"},"Ethan Ling"),".")))};var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(V,null),o.a.createElement(i,null,o.a.createElement(g,null)),o.a.createElement("div",{className:"sidebar-spacer"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.09aeef3b.chunk.js.map