(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||s[b]||a;return n?o.a.createElement(m,i(i({ref:t},u),{},{components:n})):o.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},383:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(1441)),c={id:"TranslateBody",title:"TranslateBody",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/ac-modeling/TranslateBody",id:"macro/ac-modeling/TranslateBody",isDocsHomePage:!1,title:"TranslateBody",description:"Description",source:"@site/docs\\macro\\ac-modeling\\Macro-AC-Modeling-TranslateBody.md",slug:"/macro/ac-modeling/TranslateBody",permalink:"/testweb/docs/macro/ac-modeling/TranslateBody",version:"current",sidebar:"api",previous:{title:"ACM_ImportCommand",permalink:"/testweb/docs/macro/ac-modeling/ACM_ImportCommand"},next:{title:"ACM_ImportCmd_OnclickedImportButton",permalink:"/testweb/docs/macro/ac-modeling/ACM_ImportCmd_OnclickedImportButton"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Translate Body"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"TranslateBody(Cursor[] body, double","[3]"," trans_vector, Cursor coordinate, bool create_new, bool copy_lbc, int copy_count)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  Cursor[]\nBody List"),Object(a.b)("p",null,"2",".","  double","[3]","\nTranslation Vector"),Object(a.b)("p",null,"3",".","  Cursor\nReference Coordinate"),Object(a.b)("p",null,"4",".","  Bool\nCreate New Body 1=Yes, 0=No"),Object(a.b)("p",null,"5",".","  Bool\nCopy LBC 1=Yes, 0=No"),Object(a.b)("p",null,"6",".","  Int\nCopy Count"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"TranslateBody([3:2], [[0.002, 0, 0]], 0:0, 0, 0, 0)\n")))}p.isMDXComponent=!0}}]);