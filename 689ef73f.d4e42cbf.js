(window.webpackJsonp=window.webpackJsonp||[]).push([[531],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},607:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(1441)),o={id:"JPT.GetMaterialXML",title:"JPT.GetMaterialXML()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get the information of all user material in xml format"},l={unversionedId:"psj-utility/JPT.GetMaterialXML",id:"psj-utility/JPT.GetMaterialXML",isDocsHomePage:!1,title:"JPT.GetMaterialXML()",description:"Get the information of all user material in xml format",source:"@site/docs\\psj-utility\\PSJ-Utility_GetMaterialXML.md",slug:"/psj-utility/JPT.GetMaterialXML",permalink:"/testweb/docs/psj-utility/JPT.GetMaterialXML",version:"current",sidebar:"api",previous:{title:"JPT.GetMaterialDBByID()",permalink:"/testweb/docs/psj-utility/JPT.GetMaterialDBByID"},next:{title:"JPT.GetMaxIDEntity()",permalink:"/testweb/docs/psj-utility/JPT.GetMaxIDEntity"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:c};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Get the information of all user material in xml format."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetMaterialXML()\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"This utility function does not require any input value."),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"string")," containing all the created user material in XML format."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,6}","{0,6}":!0}),'# Create user material data base\nProperties.Material.Add("Copper_Alloy", [Density([(DENSITY, 8.3e-09)]),\n                        Elastic([(YOUNGS_MODULUS, 110000.0), (POISSONS_RATIO, 0.34)])])\n\n# Get all the created user material and store it in XML format\ncreatedMat = JPT.GetMaterialDBByID()\nJPT.Debugger(createdMat)\n')))}p.isMDXComponent=!0}}]);