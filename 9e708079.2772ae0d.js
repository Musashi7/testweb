(window.webpackJsonp=window.webpackJsonp||[]).push([[784],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(a,".").concat(b)]||d[b]||s[b]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},863:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),i=(n(0),n(1441)),a={id:"EntityInfo",title:"EntityInfo",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/utility/EntityInfo",id:"macro/utility/EntityInfo",isDocsHomePage:!1,title:"EntityInfo",description:"Description",source:"@site/docs\\macro\\utility\\Macro-Utility-EntityInfo.md",slug:"/macro/utility/EntityInfo",permalink:"/testweb/docs/macro/utility/EntityInfo",version:"current",sidebar:"api",previous:{title:"ViewFindEntities",permalink:"/testweb/docs/macro/utility/ViewFindEntities"},next:{title:"FindFacesInPart",permalink:"/testweb/docs/macro/utility/FindFacesInPart"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Get Entity Information from Cursor"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"EntityInfo(Cursor Entity,String Target)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  Cursor\nEntity Cursor ","[?:*]","(?=Item Number,*=ID)"),Object(i.b)("p",null,"2",".","  String\nTarget( CENTER = Part,Face,Edge,Elem NORMAL = Face,Elem COORD = Node XMAX = Part,Face,Edge,Elem XMIN = Part,Face,Edge,Elem YMAX = Part,Face,Edge,Elem YMIN = Part,Face,Edge,Elem ZMAX = Part,Face,Edge,Elem ZMIN = Part,Face,Edge,Elem MATNAME = Part,Face,Edge,Elem MATERIAL= Part,Face,Edge,Elem)"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'EntityInfo(3:1,"CENTER") or EntityInfo(6:26,"NORMAL")\n\n')))}p.isMDXComponent=!0}}]);