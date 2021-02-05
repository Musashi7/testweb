(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{427:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(615)),a={id:"Property1DRod",title:"Property1DRod",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},p={unversionedId:"macro/properties/Property1DRod",id:"macro/properties/Property1DRod",isDocsHomePage:!1,title:"Property1DRod",description:"Description",source:"@site/docs\\macro\\properties\\Macro-Properties-Property1DRod.md",slug:"/macro/properties/Property1DRod",permalink:"/testweb/docs/macro/properties/Property1DRod",version:"current"},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"1D Rod property"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," String\nProperty 1D rod name"),Object(c.b)("p",null,"2","."," Int\nProperty 1D ID input"),Object(c.b)("p",null,"3","."," Cursor\nSection cursor(93:SectionGeneral ID)"),Object(c.b)("p",null,"4","."," Cursor\nData material cursor(22:Material ID)"),Object(c.b)("p",null,"5","."," Double\nArea value"),Object(c.b)("p",null,"6","."," Double\nTorsional const value"),Object(c.b)("p",null,"7","."," Double\nTorsional stress coefficient"),Object(c.b)("p",null,"8","."," Double\nNonstruct Mass"),Object(c.b)("p",null,"9","."," Int\nInput length unit","*"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*0: Mm\n\n\u20021: M\n\n\u20022: Ft\n\n\u20023: In\n\n\u20024: Cm\n")),Object(c.b)("p",null,"10","."," Int\nInput mass unit","*"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*-1: Blank\n\n\u20020: T\n\n\u20021: kg\n\n\u20022: kgf*s^2/mm\n\n\u20023: Lbf*s^2/in\n")),Object(c.b)("p",null,"11","."," Cursor[]\nTarget entities cursor"),Object(c.b)("p",null,"12","."," Cursor\nN/A: Edit cursor"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Property1DRod("ROD10", 8, 93:1, 22:6, 1e-05, 2e-12, 4, 3e+06, 0, 0, [5:53], 0:0)\n')))}l.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,O=b["".concat(a,".").concat(d)]||b[d]||s[d]||c;return n?o.a.createElement(O,p(p({ref:t},u),{},{components:n})):o.a.createElement(O,p({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);