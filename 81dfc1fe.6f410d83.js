(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),d=b(r),s=n,f=d["".concat(a,".").concat(s)]||d[s]||p[s]||c;return r?o.a.createElement(f,l(l({ref:t},i),{},{components:r})):o.a.createElement(f,l({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,a=new Array(c);a[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var i=2;i<c;i++)a[i]=r[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},716:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(3),o=r(7),c=(r(0),r(1441)),a={id:"EnforcedAcceleration",title:"EnforcedAcceleration",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/boundary-conditions/EnforcedAcceleration",id:"macro/boundary-conditions/EnforcedAcceleration",isDocsHomePage:!1,title:"EnforcedAcceleration",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-EnforcedAcceleration.md",slug:"/macro/boundary-conditions/EnforcedAcceleration",permalink:"/testweb/docs/macro/boundary-conditions/EnforcedAcceleration",version:"current",sidebar:"api",previous:{title:"TemperatureLoadADVCFile",permalink:"/testweb/docs/macro/boundary-conditions/TemperatureLoadADVCFile"},next:{title:"BoundaryTemperature",permalink:"/testweb/docs/macro/boundary-conditions/BoundaryTemperature"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:u};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"create enforced acceleration"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"EnforcedAcceleration(String m_strName,int dwDof,double fVel","[0]",",double fVel","[1]",",double fVel","[2]",",double fVel","[3]",",double fVel","[4]",",double fVel","[5]",",Cursor curCoord,int enArrowDir,Cursor crTable,Cursor crNodeSet,double m_fPhase,double m_fDelay,Cursor crPhaseTable,BOOL bExport,Cursor crMEExport","[0]",",Cursor crMEExport","[1]",",Cursor crMEExport","[2]",",Cursor crMEExport","[3]",",Cursor crMEExport","[4]",",Cursor crMEExport","[5]",",int iAcUnit,int iRotUnit,Cursor[] m_taTarget,Cursor m_crEdit)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  String\nname of enforced acceleration"),Object(c.b)("p",null,"2",".","  int\ndof"),Object(c.b)("p",null,"3",".","  double\ntranslation x"),Object(c.b)("p",null,"4",".","  double\ntranslation y"),Object(c.b)("p",null,"5",".","  double\ntranslation z"),Object(c.b)("p",null,"6",".","  double\nrotate x"),Object(c.b)("p",null,"7",".","  double\nrotate y"),Object(c.b)("p",null,"8",".","  double\nrotate z"),Object(c.b)("p",null,"9",".","  Cursor\ncoordinate system"),Object(c.b)("p",null,"10",".","  int\narrow direction","[0:Start at Node; 1:End at Node]"),Object(c.b)("p",null,"11",".","  Cursor\nselect table"),Object(c.b)("p",null,"12",".","  Cursor\nnode set table"),Object(c.b)("p",null,"13",".","  double\nphase"),Object(c.b)("p",null,"14",".","  double\ndelay"),Object(c.b)("p",null,"15",".","  Cursor\nphase table"),Object(c.b)("p",null,"16",".","  BOOL\nif export defined"),Object(c.b)("p",null,"17",".","  Cursor\ntranslation x"),Object(c.b)("p",null,"18",".","  Cursor\ntranslation y"),Object(c.b)("p",null,"19",".","  Cursor\ntranslation z"),Object(c.b)("p",null,"20",".","  Cursor\nrotation x"),Object(c.b)("p",null,"21",".","  Cursor\nrotation y"),Object(c.b)("p",null,"22",".","  Cursor\nrotation z"),Object(c.b)("p",null,"23",".","  int\nunit of acceleration"),Object(c.b)("p",null,"24",".","  int\nunit of rotate"),Object(c.b)("p",null,"25",".","  Cursor[]\ntargets"),Object(c.b)("p",null,"26",".","  Cursor\nedit cursor"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'EnforcedAcceleration("EnforcedAcceleration1", 63, 0.001, 0.002, 0.003, 3, 2, 1, 0:0, 0, 0:0, 0:0, 1.79769e+308, 1.79769e+308, 0:0, 0, 0:0, 0:0, 0:0, 0:0, 0:0, 0:0, 0, 0, [6:26], 0:0)\n')))}b.isMDXComponent=!0}}]);