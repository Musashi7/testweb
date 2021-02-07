(window.webpackJsonp=window.webpackJsonp||[]).push([[778],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return r?a.a.createElement(d,i(i({ref:t},l),{},{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},857:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1441)),c={id:"CreateCube()",title:"CreateCube()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/geometry/CreateCube()",id:"macro/geometry/CreateCube()",isDocsHomePage:!1,title:"CreateCube()",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-CreateCube.md",slug:"/macro/geometry/CreateCube()",permalink:"/testweb/docs/macro/geometry/CreateCube()",version:"current",sidebar:"api",previous:{title:"Imprint_Circle",permalink:"/testweb/docs/macro/geometry/Imprint_Circle"},next:{title:"ImprintCloseLineS",permalink:"/testweb/docs/macro/geometry/ImprintCloseLineS"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This function creates a cube shape body in a specific location.\nUser can select coordinate sysstem and its relative location to this coordinate."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"CreateCube(double[3] vdOriginXYZ, double[3] vdLength, int[3] vlNodeCnt, string strBodyName,\ncolor colBody, cursor crCoord)\n")),Object(o.b)("p",null,"PSJ-Command: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Geometry.Part.Cube")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Part --\x3e Cube")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("em",{parentName:"p"},"Double List")," specifying the relative location to the coordinate sysem chosen.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("em",{parentName:"p"},"Double List")," speicifying the size in meter unit.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("em",{parentName:"p"},"Integer List")," specifying the number of nodes along each axis.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("em",{parentName:"p"},"String")," specifying the part name.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("em",{parentName:"p"},"Color")," value specifying the colour of the part.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"A ",Object(o.b)("em",{parentName:"p"},"Cursor")," specifying the coodinate sysmtem used."))),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"Int")," of 1 if successed, or 0 if failed."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'CreateCube([0, 0, 0], [0.01, 0.01, 0.01], [10, 10, 10], "Cube_1", 5093709, 0:0)\n')))}b.isMDXComponent=!0}}]);