(window.webpackJsonp=window.webpackJsonp||[]).push([[736],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,y=p["".concat(o,".").concat(b)]||p[b]||d[b]||a;return n?i.a.createElement(y,c(c({ref:t},l),{},{components:n})):i.a.createElement(y,c({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},815:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(7),a=(n(0),n(1441)),o={id:"MeasureAngleBy2Axis",title:"MeasureAngleBy2Axis",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/utility/MeasureAngleBy2Axis",id:"macro/utility/MeasureAngleBy2Axis",isDocsHomePage:!1,title:"MeasureAngleBy2Axis",description:"Description",source:"@site/docs\\macro\\utility\\Macro-Utility-MeasureAngleBy2Axis.md",slug:"/macro/utility/MeasureAngleBy2Axis",permalink:"/testweb/docs/macro/utility/MeasureAngleBy2Axis",version:"current",sidebar:"api",previous:{title:"FindFacesInPart",permalink:"/testweb/docs/macro/utility/FindFacesInPart"},next:{title:"MeasureRadiusByEdge",permalink:"/testweb/docs/macro/utility/MeasureRadiusByEdge"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Measure the angle created by 2 Axis."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"MeasureAngleBy2Axis(Axis xyz1,Axis xyz2,String Target,Integer N)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  Axis\nunit vector(","[x,y,z]",")"),Object(a.b)("p",null,"2",".","  Axis\nunit vector(","[x,y,z]",")"),Object(a.b)("p",null,"3",".","  String\nTarget (Angle or XY or YZ or ZX or ALL)"),Object(a.b)("p",null,"4",".","  Integer N\nspecify the number of decimal places (0<=N<=30)"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'MeasureAngleBy2Axis([0,0,1],[1,1,1],"ALL",6) or MeasureAngleBy2Axis([0,0,1],[1,1,1],"Angle",6)\n')))}s.isMDXComponent=!0}}]);