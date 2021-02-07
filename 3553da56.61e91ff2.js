(window.webpackJsonp=window.webpackJsonp||[]).push([[277],{1441:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=l(t),b=n,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||c;return t?o.a.createElement(m,a(a({ref:r},i),{},{components:t})):o.a.createElement(m,a({ref:r},i))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,u=new Array(c);u[0]=b;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,u[1]=a;for(var i=2;i<c;i++)u[i]=t[i];return o.a.createElement.apply(null,u)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},353:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return u})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),c=(t(0),t(1441)),u={id:"Pressure2Nodes",title:"Pressure2Nodes",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/boundary-conditions/Pressure2Nodes",id:"macro/boundary-conditions/Pressure2Nodes",isDocsHomePage:!1,title:"Pressure2Nodes",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-Pressure2Nodes.md",slug:"/macro/boundary-conditions/Pressure2Nodes",permalink:"/testweb/docs/macro/boundary-conditions/Pressure2Nodes",version:"current",sidebar:"api",previous:{title:"ConcentrateFlux",permalink:"/testweb/docs/macro/boundary-conditions/ConcentrateFlux"},next:{title:"InitialStressGeneral",permalink:"/testweb/docs/macro/boundary-conditions/InitialStressGeneral"}},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create Pressure 2 nodes"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"Pressure2Nodes(string strName, cursor crNodeA, double dPressureA, int iNodeAUnit, cursor crNodeB, double dPressureB, int iNodeBUnit, cursor[] taTarget, cursor crEdit)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  String\nPressure 2 nodes name"),Object(c.b)("p",null,"2",".","  Cursor\nNode A key cursor(10:Node ID)"),Object(c.b)("p",null,"3",".","  Double\nPressure A value"),Object(c.b)("p",null,"4",".","  Int\nNode A unit type"),Object(c.b)("p",null,"5",".","  Cursor\nNode B key cursor(10:Node ID)"),Object(c.b)("p",null,"6",".","  Double\nPressure B value"),Object(c.b)("p",null,"7",".","  Int\nNode B unit type"),Object(c.b)("p",null,"8",".","  Cursor[]\nTarget entities cursor"),Object(c.b)("p",null,"9",".","  Cursor\nN/A: Edit cursor"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Pressure2Nodes("PressureLinear1", 10:351, 2000, 0, 10:350, 4000, 0, 2, [6:5, 11:553, 11:554, 10:351, 10:350], 0:0)\n')))}l.isMDXComponent=!0}}]);