(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return u})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(615)),c={id:"TemperatureLoad",title:"TemperatureLoad",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},u={unversionedId:"macro/boundary-conditions/TemperatureLoad",id:"macro/boundary-conditions/TemperatureLoad",isDocsHomePage:!1,title:"TemperatureLoad",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-TemperatureLoad.md",slug:"/macro/boundary-conditions/TemperatureLoad",permalink:"/testweb/docs/macro/boundary-conditions/TemperatureLoad",version:"current"},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:i};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"create temperature load"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1","."," String\nname of temperature load"),Object(a.b)("p",null,"2","."," int\ntype","[0:Constant; 1:Nastran Punch]"),Object(a.b)("p",null,"3","."," double\nvalue of temperature"),Object(a.b)("p",null,"4","."," String\nfile path"),Object(a.b)("p",null,"5","."," Cursor\nselect table"),Object(a.b)("p",null,"6","."," Cursor[]\ntargets"),Object(a.b)("p",null,"7","."," Cursor\nedit cursor"),Object(a.b)("p",null,"8","."," BOOL\nif use as material reference temperature"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'TemperatureLoad("Test",1,0.001,"Test",1:11,[1:11,2:12],1:11,1)\n')))}l.isMDXComponent=!0},615:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return r?o.a.createElement(m,u(u({ref:t},p),{},{components:r})):o.a.createElement(m,u({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);