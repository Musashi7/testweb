(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return a}));var o=n(3),r=n(7),c=(n(0),n(615)),l={id:"ImportElysium",title:"ImportElysium",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},i={unversionedId:"macro/home/ImportElysium",id:"macro/home/ImportElysium",isDocsHomePage:!1,title:"ImportElysium",description:"Description",source:"@site/docs\\macro\\home\\Macro-Home-ImportElysium.md",slug:"/macro/home/ImportElysium",permalink:"/testweb/docs/macro/home/ImportElysium",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:u};function a(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Import CAD file by Elysium interface"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," String[]\nPath directory"),Object(c.b)("p",null,"2","."," Double\nHeight tolerance option"),Object(c.b)("p",null,"3","."," Double\nAngle tolerance degree option"),Object(c.b)("p",null,"4","."," Double\nIsolated curve"),Object(c.b)("p",null,"5","."," Double\nIges fixedCurvePreference option"),Object(c.b)("p",null,"6","."," Double\nIges autoStitch option"),Object(c.b)("p",null,"7","."," Double\nIges stitchTolerance option"),Object(c.b)("p",null,"8","."," Double\nCatia convertNotShowedElement option"),Object(c.b)("p",null,"9","."," Double\nCatia convertNotShowedInstance option"),Object(c.b)("p",null,"10","."," Double\nCatia convertAxis option"),Object(c.b)("p",null,"11","."," Double\nStep createSeam option"),Object(c.b)("p",null,"12","."," Double\nStep pointTolerance option"),Object(c.b)("p",null,"13","."," Double\nAcis healAcisBeforeVersio option"),Object(c.b)("p",null,"14","."," Double\njt convertGeometryType option"),Object(c.b)("p",null,"15","."," Double\njt convertGeneralBody option"),Object(c.b)("p",null,"16","."," Double\njt convertAxis option"),Object(c.b)("p",null,"17","."," Double\njt convertCenterLine option"),Object(c.b)("p",null,"18","."," Bool\nM_setFaceColor option"),Object(c.b)("p",null,"19","."," Double\ndek_cleanSelfIntersectingLoop option"),Object(c.b)("p",null,"20","."," Double\nPoint coincident tolerance option"),Object(c.b)("p",null,"21","."," Double\ndek_volumToBody option"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'ImportElysium(["D:/ImportFile/Elysium_Test.SAT"], 1, 5, 0, 0, 1, 0.1, 0, 0, 1, 1, 0, 0, 2, 1, 1, 0, 1, 2, 0.01, 4)\n')))}a.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),a=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=a(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),b=a(n),m=o,d=b["".concat(l,".").concat(m)]||b[m]||s[m]||c;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);