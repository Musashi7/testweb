(window.webpackJsonp=window.webpackJsonp||[]).push([[895],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return y}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,y=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return r?o.a.createElement(y,i(i({ref:t},l),{},{components:r})):o.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},974:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(1441)),a={id:"BodyCutBy3PointsS",title:"BodyCutBy3PointsS",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/geometry/BodyCutBy3PointsS",id:"macro/geometry/BodyCutBy3PointsS",isDocsHomePage:!1,title:"BodyCutBy3PointsS",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-BodyCutBy3PointsS.md",slug:"/macro/geometry/BodyCutBy3PointsS",permalink:"/testweb/docs/macro/geometry/BodyCutBy3PointsS",version:"current",sidebar:"api",previous:{title:"CreateEdgeByElemEdge",permalink:"/testweb/docs/macro/geometry/CreateEdgeByElemEdge"},next:{title:"DeleteFace",permalink:"/testweb/docs/macro/geometry/DeleteFace"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Body Cut By 3 Points"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"BodyCutBy3PointsS(cursor crBody, double[] cutPosition, double dOffset , bool bSplit, bool makeSectionFace, bool shareFace)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor\nPart key cursor(Part ID)"),Object(c.b)("p",null,"2",".","  Double[]\nTarget points for cutting"),Object(c.b)("p",null,"3",".","  Double\nOffset value from cutting plane"),Object(c.b)("p",null,"4",".","  Bool\nWhether split face or not True = 1, False = 0"),Object(c.b)("p",null,"5",".","  Bool\nWhether make section face or not True = 1, False = 0"),Object(c.b)("p",null,"6",".","  Bool\nWhether share face or not True = 1, False = 0"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"BodyCutBy3PointsS(3:2, [[0.01, 0.003333333333333333, 0.01], [0.02, 0.003333333333333333, 0.01], [0.02, 0.003333333333333333, 0]], 0.0022, 0, 1, 0)\n")))}p.isMDXComponent=!0}}]);