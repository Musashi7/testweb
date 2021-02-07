(window.webpackJsonp=window.webpackJsonp||[]).push([[470],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(a,".").concat(b)]||s[b]||d[b]||c;return r?o.a.createElement(m,l(l({ref:t},u),{},{components:r})):o.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<c;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},546:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(1441)),a={id:"CloseHoleEdgeFace",title:"CloseHoleEdgeFace",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/ac-modeling/CloseHoleEdgeFace",id:"macro/ac-modeling/CloseHoleEdgeFace",isDocsHomePage:!1,title:"CloseHoleEdgeFace",description:"Description",source:"@site/docs\\macro\\ac-modeling\\Macro-AC-Modeling-CloseHoleEdgeFace.md",slug:"/macro/ac-modeling/CloseHoleEdgeFace",permalink:"/testweb/docs/macro/ac-modeling/CloseHoleEdgeFace",version:"current",sidebar:"api",previous:{title:"RotateBody",permalink:"/testweb/docs/macro/ac-modeling/RotateBody"},next:{title:"ACM_CloseHoleMultiEdgeFace",permalink:"/testweb/docs/macro/ac-modeling/ACM_CloseHoleMultiEdgeFace"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:i};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"ACM_CloseHole_EdgeFace"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"CloseHoleEdgeFace(cursor[] crBody, cursor[] crFace, cursor[] crEdge, bool bSelBelPart, bool SpecPart, bool bNewPart, string strName, bool bRemesh, double dElemSize)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor[]\nTarget body cursor(","[3:Body ID]",")"),Object(c.b)("p",null,"2",".","  Cursor[]\nTarget face cursor(","[6:Face ID]",")"),Object(c.b)("p",null,"3",".","  Cursor[]\nTarget edge cursor(","[5:Edge ID]",")"),Object(c.b)("p",null,"4",".","  Bool\nSelect belong part bool flag True = 1, False = 0"),Object(c.b)("p",null,"5",".","  Bool\nSpecified part bool flag True = 1, False = 0"),Object(c.b)("p",null,"6",".","  Bool\nNew part bool flag True = 1, False = 0"),Object(c.b)("p",null,"7",".","  String\nNew part name"),Object(c.b)("p",null,"8",".","  Bool\nRemesh bool flag True = 1, False = 0"),Object(c.b)("p",null,"9",".","  Double\nElement size"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'CloseHoleEdgeFace([], [6:62], [5:10000157], 0, 0, 0, "", 1, 0.008)\n')))}p.isMDXComponent=!0}}]);