(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{279:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(615)),l={id:"JPT.RemoveAllFieldTables",title:"JPT.RemoveAllFieldTables()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Remove all the existing field tables"},o={unversionedId:"psj-utility/JPT.RemoveAllFieldTables",id:"psj-utility/JPT.RemoveAllFieldTables",isDocsHomePage:!1,title:"JPT.RemoveAllFieldTables()",description:"Remove all the existing field tables",source:"@site/docs\\psj-utility\\PSJ-Utility_RemoveAllFieldTables.md",slug:"/psj-utility/JPT.RemoveAllFieldTables",permalink:"/testweb/docs/psj-utility/JPT.RemoveAllFieldTables",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Remove all the existing field tables."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.RemoveAllFieldTables()\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"This utility function does not require any input value."),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"This utility function does not have output value."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,10}","{0,10}":!0}),'# Create sample fields data\nBoundaryConditions.FieldData(strName="test_1", iType=1,\n                             ilSheet=[3, 4, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3])\nBoundaryConditions.FieldData(strName="test_2", iType=4,\n                             ilSheet=[3, 2, 1, 1, 2, 2, 3, 3])\nBoundaryConditions.FieldData(strName="test_3", iType=3,\n                             ilSheet=[3, 2, 1, 1, 2, 2, 3, 3])\n\n# Remove all the created fields data\nJPT.RemoveAllFieldTables()\n')))}s.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,m=p["".concat(l,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(m,o(o({ref:t},u),{},{components:n})):i.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);