(window.webpackJsonp=window.webpackJsonp||[]).push([[487],{566:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(615)),i={id:"JPT.InverseHideBodies",title:"JPT.InverseHideBodies()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Show the part having the inputted ID only"},c={unversionedId:"psj-utility/JPT.InverseHideBodies",id:"psj-utility/JPT.InverseHideBodies",isDocsHomePage:!1,title:"JPT.InverseHideBodies()",description:"Show the part having the inputted ID only",source:"@site/docs\\psj-utility\\PSJ-Utility_InverseHideBodies.md",slug:"/psj-utility/JPT.InverseHideBodies",permalink:"/testweb/docs/psj-utility/JPT.InverseHideBodies",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Show the part having the inputted ID only."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.InverseHideBodies(partID)\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"partID")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"An ",Object(o.b)("em",{parentName:"p"},"integer")," value standing for the ID of the part which will be shown only.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This is a required input."))),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"This utility function does not have output value."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,11}","{0,11}":!0}),'# Create sample model\nGeometry.Part.Cube(strPartName="Cube_11", iColorPart=11842649)\nGeometry.Part.Cube(strPartName="Cube_12", iColorPart=14968422)\nGeometry.Part.Cube(strPartName="Cube_13", iColorPart=6250447)\nGeometry.Part.Cube(strPartName="Cube_14", iColorPart=12734402)\nGeometry.Part.Cube(strPartName="Cube_15", iColorPart=16579696)\n\n# Show the part with ID = 3 only (Cube_13)\nselAllParts = JPT.GetAllParts()\nshowPart = selAllParts[2].id\nJPT.Debugger(selAllParts[2])\nJPT.InverseHideBodies(showPart)\n')))}p.isMDXComponent=!0},615:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);