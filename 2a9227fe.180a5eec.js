(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return n?o.a.createElement(b,a(a({ref:t},u),{},{components:n})):o.a.createElement(b,a({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(1441)),c={id:"Imprint_ExtendLine",title:"Imprint_ExtendLine",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/geometry/Imprint_ExtendLine",id:"macro/geometry/Imprint_ExtendLine",isDocsHomePage:!1,title:"Imprint_ExtendLine",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-Imprint-ExtendLine.md",slug:"/macro/geometry/Imprint_ExtendLine",permalink:"/testweb/docs/macro/geometry/Imprint_ExtendLine",version:"current",sidebar:"api",previous:{title:"Imprint_Projection_LineS",permalink:"/testweb/docs/macro/geometry/Imprint_Projection_LineS"},next:{title:"CreateFaceByElem",permalink:"/testweb/docs/macro/geometry/CreateFaceByElem"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Create imprint Extend line"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"Imprint_ExtendLine(int Edge_ID,int Method_Type,int Position_Type,bool Break_Face ,Cursor[] bodyCursor)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  int\nEdge ID"),Object(i.b)("p",null,"2",".","  int\nMethod Type 0=Straight,1=Same Curvature"),Object(i.b)("p",null,"3",".","  int\nPosition Type 0=Nearest Edge,1=Boundary Edge"),Object(i.b)("p",null,"4",".","  bool\nFlag true = 1,false=0"),Object(i.b)("p",null,"5",".","  Cursor[]\nBody Cursor(","[3:*]","*=Body ID)"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Imprint_ExtendLine(27, 0, 0, 1, [3:1])\n")))}l.isMDXComponent=!0}}]);