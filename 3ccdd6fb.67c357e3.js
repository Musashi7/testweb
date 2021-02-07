(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{1441:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=d(t),b=n,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||a;return t?o.a.createElement(m,i(i({ref:r},s),{},{components:t})):o.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},396:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(3),o=t(7),a=(t(0),t(1441)),c={id:"PressureQuadratic",title:"PressureQuadratic",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/boundary-conditions/PressureQuadratic",id:"macro/boundary-conditions/PressureQuadratic",isDocsHomePage:!1,title:"PressureQuadratic",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-PressureQuadratic.md",slug:"/macro/boundary-conditions/PressureQuadratic",permalink:"/testweb/docs/macro/boundary-conditions/PressureQuadratic",version:"current",sidebar:"api",previous:{title:"SubmodelForcedTemp",permalink:"/testweb/docs/macro/boundary-conditions/SubmodelForcedTemp"},next:{title:"TemperatureLoadADVCFile",permalink:"/testweb/docs/macro/boundary-conditions/TemperatureLoadADVCFile"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:u};function d(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Create Pressure quadratic"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"PressureQuadratic(String name, double a, double b, Cursor crCoordinate, double angleRange, int pressureDirectionMode, Vector pressureDirection, Cursor[] targets, Cursor crEdit)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  String\nname"),Object(a.b)("p",null,"2",".","  double\na"),Object(a.b)("p",null,"3",".","  double\nb"),Object(a.b)("p",null,"4",".","  Cursor\ncoordinate system"),Object(a.b)("p",null,"5",".","  double\nangle range"),Object(a.b)("p",null,"6",".","  int\ndirection mode (0: normal, 1: direction)"),Object(a.b)("p",null,"7",".","  Vector\npressure direction"),Object(a.b)("p",null,"8",".","  Cursor[]\ntargets"),Object(a.b)("p",null,"9",".","  Cursor\nedit target"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'PressureQuadratic("PressureQuadratic1", 1e+06, 2e+06, 0:0, 0.523599, 0, [0, 0, 0], [6:23], 0:0)\n')))}d.isMDXComponent=!0}}]);