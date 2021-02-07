(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},679:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(1441)),i={id:"InitialTemperature",title:"InitialTemperature",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/boundary-conditions/InitialTemperature",id:"macro/boundary-conditions/InitialTemperature",isDocsHomePage:!1,title:"InitialTemperature",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-InitialTemperature.md",slug:"/macro/boundary-conditions/InitialTemperature",permalink:"/testweb/docs/macro/boundary-conditions/InitialTemperature",version:"current",sidebar:"api",previous:{title:"InitialDynamic",permalink:"/testweb/docs/macro/boundary-conditions/InitialDynamic"},next:{title:"SubmodelForcedFlux",permalink:"/testweb/docs/macro/boundary-conditions/SubmodelForcedFlux"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"create initial temperature"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"InitialTemperature(string strName, int nType, double dTemp, string strFilePathName, bool bUseDefault, cursor crTable, cursor[] taTarget, cursor crEdit)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1","."," String\nInitial temperature name"),Object(a.b)("p",null,"2","."," Int\nThermal type","*"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"*0: Constant\n\n\u20022: ADVC File\n\n\u20023: Nastran Punch\n")),Object(a.b)("p",null,"3","."," Double\nTemperature value"),Object(a.b)("p",null,"4","."," String\ndirectory file path"),Object(a.b)("p",null,"5","."," Bool\nUse default temperature bool flag True = 1, False = 0; corresponding to Type 2, 3"),Object(a.b)("p",null,"6","."," Cursor\nN/A: Table cursor"),Object(a.b)("p",null,"7","."," Cursor[]\nTarget entities cursor"),Object(a.b)("p",null,"8","."," Cursor\nN/A: Edit cursor"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'InitialTemperature("InitialTemperature1", 3, 1.79769e+308, "D:/ImportFile/1_heat.pch", 0, 0:0, [3:1], 0:0)\n')))}p.isMDXComponent=!0}}]);