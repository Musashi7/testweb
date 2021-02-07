(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),i=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=i(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(r),d=n,O=b["".concat(a,".").concat(d)]||b[d]||p[d]||o;return r?c.a.createElement(O,l(l({ref:t},u),{},{components:r})):c.a.createElement(O,l({ref:t},u))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},338:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return i}));var n=r(3),c=r(7),o=(r(0),r(1441)),a={id:"AdvcModalFreqRespProcess",title:"AdvcModalFreqRespProcess",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/analysis/AdvcModalFreqRespProcess",id:"macro/analysis/AdvcModalFreqRespProcess",isDocsHomePage:!1,title:"AdvcModalFreqRespProcess",description:"Description",source:"@site/docs\\macro\\analysis\\Macro-Analysis-AdvcModalFreqRespProcess.md",slug:"/macro/analysis/AdvcModalFreqRespProcess",permalink:"/testweb/docs/macro/analysis/AdvcModalFreqRespProcess",version:"current",sidebar:"api",previous:{title:"AdvcTHProcess",permalink:"/testweb/docs/macro/analysis/AdvcTHProcess"},next:{title:"CreateAnsysJob",permalink:"/testweb/docs/macro/analysis/CreateAnsysJob"}},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:s};function i(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"create advc modal frequency response process"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"AdvcModalFreqRespProcess(String m_strName,string strRefEigenDir,double dRefLowFreq,double dRefHighFreq,Cursor crModalDampingRatio,Cursor crExcitationFreq,bool bAutoFreqInterval,double dMaxFreq,double dMinFreq,int iNumFreqPoint,double dBiasParam,Cursor m_crEdit,List m_LoadNodeList,List m_LoadCaseNodeList,List m_LoadNodeContactList,List m_OutputParamList,int m_iRefType,String m_strRefPath,List m_ReferenceResultList)"),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"String"),Object(o.b)("p",null,"name of advc modal frequency response process"),Object(o.b)("p",null,"string"),Object(o.b)("p",null,"the path of result file"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"refer low frequency"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"refer high frequency"),Object(o.b)("p",null,"Cursor"),Object(o.b)("p",null,"modal damping ratio"),Object(o.b)("p",null,"Cursor"),Object(o.b)("p",null,"Excitation Frequencies"),Object(o.b)("p",null,"bool"),Object(o.b)("p",null,"if auto frequency interval"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"Max Frequency"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"Min Frequency"),Object(o.b)("p",null,"int"),Object(o.b)("p",null,"Number Frequency Point"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"Bias Parameter"),Object(o.b)("p",null,"Cursor"),Object(o.b)("p",null,"edit cursor"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"status of Loads"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"status of Load Cases"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"status and other data of Contacts"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"output parameters"),Object(o.b)("p",null,"int"),Object(o.b)("p",null,"reference result type","[0:Temperature Load; 1:Stress]"),Object(o.b)("p",null,"String"),Object(o.b)("p",null,"path of reference result"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"data of reference result"),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'AdvcModalFreqRespProcess("Test",,0.001,0.001,1:11,1:11,1,0.001,0.001,1,0.001,1:11,,,,,1,"Test",)\n')))}i.isMDXComponent=!0}}]);