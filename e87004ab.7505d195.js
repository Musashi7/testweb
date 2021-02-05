(window.webpackJsonp=window.webpackJsonp||[]).push([[480],{559:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(615)),i={id:"JPT.ListDoubleToMacroVector",title:"JPT.ListDoubleToMacroVector()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert a list of 3 double values to a vector3d (Macro string type)"},c={unversionedId:"psj-utility/JPT.ListDoubleToMacroVector",id:"psj-utility/JPT.ListDoubleToMacroVector",isDocsHomePage:!1,title:"JPT.ListDoubleToMacroVector()",description:"Convert a list of 3 double values to a vector3d (Macro string type)",source:"@site/docs\\psj-utility\\PSJ-Utility_ListDoubleToMacroVector.md",slug:"/psj-utility/JPT.ListDoubleToMacroVector",permalink:"/testweb/docs/psj-utility/JPT.ListDoubleToMacroVector",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Convert a ",Object(a.b)("em",{parentName:"p"},"list")," of 3 ",Object(a.b)("em",{parentName:"p"},"double")," values to a vector3d (Macro string type)."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.ListDoubleToMacroVector(doubleValue1, doubleValue2, doubleValue3)\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"doubleValue1")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A ",Object(a.b)("em",{parentName:"p"},"double")," value standing for the first value which will be used for converting.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This is a required input."))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"doubleValue2")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A ",Object(a.b)("em",{parentName:"p"},"double")," value standing for the second value which will be used for converting.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This is a required input."))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"doubleValue3")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A ",Object(a.b)("em",{parentName:"p"},"double")," value standing for the third value which will be used for converting.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This is a required input."))),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"A converted vector3d (Macro string type)."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,6}","{0,6}":!0}),"# Convert a list of 3 double values to a vector3d (Macro string type)\ninputValue1 = 0.001\ninputValue2 = 2.1\ninputValue3 = 5.5\n# Return a string object with value = [0.001,2.1,5.5]\nJPT.Debugger(JPT.ListDoubleToMacroVector(inputValue1, inputValue2, inputValue3))\n")))}p.isMDXComponent=!0},615:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(m,c(c({ref:t},u),{},{components:r})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);