(window.webpackJsonp=window.webpackJsonp||[]).push([[813],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,b=p["".concat(o,".").concat(d)]||p[d]||y[d]||i;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},892:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(1441)),o={id:"MeasureAreaByEntity",title:"MeasureAreaByEntity",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/utility/MeasureAreaByEntity",id:"macro/utility/MeasureAreaByEntity",isDocsHomePage:!1,title:"MeasureAreaByEntity",description:"Description",source:"@site/docs\\macro\\utility\\Macro-Utility-MeasureAreaByEntity.md",slug:"/macro/utility/MeasureAreaByEntity",permalink:"/testweb/docs/macro/utility/MeasureAreaByEntity",version:"current",sidebar:"api",previous:{title:"MeasureAngleBy2ElemEdges",permalink:"/testweb/docs/macro/utility/MeasureAngleBy2ElemEdges"},next:{title:"MeasureDistanceBy2Points",permalink:"/testweb/docs/macro/utility/MeasureDistanceBy2Points"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:u};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Measure the Area"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"MeasureAreaByEntity(cursor[] entitycursor,String Target,Integer N)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  cursor[]\nentity cursor(s)(","[*,**]",",*=EntityID,**=ID in Entity)"),Object(i.b)("p",null,"2",".","  Integer N\nspecify the number of decimal places (0<=N<=30)"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"MeasureAreaByEntity([3:1],3) or MeasureAreaByEntity([6:24,6:23],6) or MeasureAreaByEntity([11:379],0)\n")))}l.isMDXComponent=!0}}]);