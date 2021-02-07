(window.webpackJsonp=window.webpackJsonp||[]).push([[643],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(n),b=r,y=s["".concat(c,".").concat(b)]||s[b]||d[b]||i;return n?o.a.createElement(y,a(a({ref:t},u),{},{components:n})):o.a.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},722:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(1441)),c={id:"PositionBody",title:"PositionBody",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/geometry/PositionBody",id:"macro/geometry/PositionBody",isDocsHomePage:!1,title:"PositionBody",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-PositionBody.md",slug:"/macro/geometry/PositionBody",permalink:"/testweb/docs/macro/geometry/PositionBody",version:"current",sidebar:"api",previous:{title:"Geom_FindFeatures",permalink:"/testweb/docs/macro/geometry/Geom_FindFeatures"},next:{title:"ImprintExtendLine",permalink:"/testweb/docs/macro/geometry/ImprintExtendLine"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Position Body"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"PositionBody(Cursor[] body, Point","[6]"," point, bool create_new, bool copy_lbc)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  Cursor[]\nBody List"),Object(i.b)("p",null,"2",".","  Point","[6]","\nPoint: ","[targetA, targetB, targetC, baseA, baseB, baseC]"),Object(i.b)("p",null,"3",".","  bool\nCreate New Body 1=Yes,0=No"),Object(i.b)("p",null,"4",".","  bool\nCopy LBC 1=Yes,0=No"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"PositionBody([3:8], [[0.0208889, 0.00111111, 0.01], [0.0208889, 0.00333333, 0.01], [0.0186667, 0.00111111, 0.01], [0.00111111, 0.00111111, 0.01], [0.00111111, 0.00333333, 0.01], [0.00333333, 0.00111111, 0.01]], 0, 1)\n")))}l.isMDXComponent=!0}}]);