(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{615:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||c;return r?o.a.createElement(m,a(a({ref:t},l),{},{components:r})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),c=(r(0),r(615)),i={id:"ForceNormalDirection",title:"ForceNormalDirection",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},a={unversionedId:"macro/boundary-conditions/ForceNormalDirection",id:"macro/boundary-conditions/ForceNormalDirection",isDocsHomePage:!1,title:"ForceNormalDirection",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-ForceNormalDirection.md",slug:"/macro/boundary-conditions/ForceNormalDirection",permalink:"/testweb/docs/macro/boundary-conditions/ForceNormalDirection",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create Force (normal direction)"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," String\nname"),Object(c.b)("p",null,"2","."," Vector\nforce"),Object(c.b)("p",null,"3","."," int\narrorDir (0: Start at node, 1: End at node)"),Object(c.b)("p",null,"4","."," int\ndistributionMethod (0: Per selected entity, 1: Per node, 2: Total of select)"),Object(c.b)("p",null,"5","."," Cursor\ncoordinate system"),Object(c.b)("p",null,"6","."," Cursor[]\ntargets"),Object(c.b)("p",null,"7","."," Cursor\nedit target"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'ForceNormalDirection("Force3", [0, -1, 0], 0, 0, 0:0, [6:21], 0:0)\n')))}p.isMDXComponent=!0}}]);