(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,s=p["".concat(o,".").concat(m)]||p[m]||d[m]||c;return n?a.a.createElement(s,l(l({ref:t},u),{},{components:n})):a.a.createElement(s,l({ref:t},u))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<c;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(1441)),o={id:"ViewSelectMethod",title:"ViewSelectMethod",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/view-control/ViewSelectMethod",id:"macro/view-control/ViewSelectMethod",isDocsHomePage:!1,title:"ViewSelectMethod",description:"Description",source:"@site/docs\\macro\\view-control\\Macro-View-Control-ViewSelectMethod.md",slug:"/macro/view-control/ViewSelectMethod",permalink:"/testweb/docs/macro/view-control/ViewSelectMethod",version:"current",sidebar:"api",previous:{title:"ViewShowNode",permalink:"/testweb/docs/macro/view-control/ViewShowNode"},next:{title:"ViewToggleShowSurface",permalink:"/testweb/docs/macro/view-control/ViewToggleShowSurface"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Change selection filter."),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"ViewSelectMethod(int FilterType)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"int"),Object(c.b)("p",null,"FilterType: Type of selection filter."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"0: Nothing"),Object(c.b)("li",{parentName:"ul"},"1: Part"),Object(c.b)("li",{parentName:"ul"},"2: Bar Part"),Object(c.b)("li",{parentName:"ul"},"3: Face"),Object(c.b)("li",{parentName:"ul"},"4: Edge"),Object(c.b)("li",{parentName:"ul"},"5: Vertex"),Object(c.b)("li",{parentName:"ul"},"6: Solid Element"),Object(c.b)("li",{parentName:"ul"},"7: 2D Element"),Object(c.b)("li",{parentName:"ul"},"8: 1D Element"),Object(c.b)("li",{parentName:"ul"},"9: Element Edge"),Object(c.b)("li",{parentName:"ul"},"10: Node"),Object(c.b)("li",{parentName:"ul"},"11: LBC"),Object(c.b)("li",{parentName:"ul"},"12: Coordinate"),Object(c.b)("li",{parentName:"ul"},"13: Group"),Object(c.b)("li",{parentName:"ul"},"15: Face Point"),Object(c.b)("li",{parentName:"ul"},"16: Edge Point"),Object(c.b)("li",{parentName:"ul"},"30: Tet4"),Object(c.b)("li",{parentName:"ul"},"31: Tet10"),Object(c.b)("li",{parentName:"ul"},"32: Hex8"),Object(c.b)("li",{parentName:"ul"},"33: Hexx20"),Object(c.b)("li",{parentName:"ul"},"34: Penta6"),Object(c.b)("li",{parentName:"ul"},"35: Penta15"),Object(c.b)("li",{parentName:"ul"},"36: Pyramid5"),Object(c.b)("li",{parentName:"ul"},"38: Tri3"),Object(c.b)("li",{parentName:"ul"},"39: Tri6"),Object(c.b)("li",{parentName:"ul"},"40: Quad4"),Object(c.b)("li",{parentName:"ul"},"41: Quad8")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"ViewSelectMethod(1)\n\n")))}b.isMDXComponent=!0}}]);