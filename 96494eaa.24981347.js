(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{369:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(615)),i={id:"JPT.ShowHideAllParts",title:"JPT.ShowHideAllParts()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Show or Hide all part existing on the screen"},l={unversionedId:"psj-utility/JPT.ShowHideAllParts",id:"psj-utility/JPT.ShowHideAllParts",isDocsHomePage:!1,title:"JPT.ShowHideAllParts()",description:"Show or Hide all part existing on the screen",source:"@site/docs\\psj-utility\\PSJ-Utility_ShowHideAllParts.md",slug:"/psj-utility/JPT.ShowHideAllParts",permalink:"/testweb/docs/psj-utility/JPT.ShowHideAllParts",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Show or Hide all part existing on the screen."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.ShowHideAllParts(BoolType)\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"BoolType")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"BoolType"}),"BoolType"))," is an ",Object(o.b)("em",{parentName:"p"},"integer")," value standing for:")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"False")," (Or value = 0): Hide all parts."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},"True")," (Or value = 1): Show all parts."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This is a required input."))),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"This utility function does not have output value."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,7}","{0,7}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Show all parts\nJPT.ShowHideAllParts(JPT.BoolType.TRUE_VAL)\n')))}u.isMDXComponent=!0},615:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,l(l({ref:t},p),{},{components:r})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);