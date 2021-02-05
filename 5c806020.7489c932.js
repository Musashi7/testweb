(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{267:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(615)),c={id:"MeasureMassByManual",title:"MeasureMassByManual",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},i={unversionedId:"macro/utility/MeasureMassByManual",id:"macro/utility/MeasureMassByManual",isDocsHomePage:!1,title:"MeasureMassByManual",description:"Description",source:"@site/docs\\macro\\utility\\Macro-Utility-MeasureMassByManual.md",slug:"/macro/utility/MeasureMassByManual",permalink:"/testweb/docs/macro/utility/MeasureMassByManual",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Measure the Volume"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"1","."," cursor[]\nPart cursor(s)(","[3,*]",",","*","=part Id)"),Object(o.b)("p",null,"2","."," String\nDensity Value or Material Name"),Object(o.b)("p",null,"3","."," String\nTarget(Mass,Gravity Center X,Gravity Center Y,Gravity Center Z,Moment Inertial XX,Moment Inertial YY,Moment Inertial ZZ,Moment Inertial XY,Moment Inertial XZ,Moment Inertial YZ,Principal Moment X,Principal Moment Y,Principal Moment Z,Traits Vector XX,Traits Vector XY,Traits Vector XZ,Traits Vector YX,Traits Vector YY,Traits Vector YZ,Traits Vector ZX,Traits Vector ZY,Traits Vector ZZ,Euler Angle X,Euler Angle Y,Euler Angle Z,ALL)"),Object(o.b)("p",null,"4","."," Integer N\nspecify the number of decimal places (0<=N<=30)"),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'MeasureMassByManual([3:1,3:2],"1.0","ALL",6) or MeasureMassByManual([3:1,3:2],"Copper_Alloy","ALL",6)\n')))}s.isMDXComponent=!0},615:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return y}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,y=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return r?a.a.createElement(y,i(i({ref:t},l),{},{components:r})):a.a.createElement(y,i({ref:t},l))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);