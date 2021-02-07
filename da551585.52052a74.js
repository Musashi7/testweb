(window.webpackJsonp=window.webpackJsonp||[]).push([[1129],{1208:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),i=(t(0),t(1441)),c={id:"SubmodelForcedDisp",title:"SubmodelForcedDisp",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/boundary-conditions/SubmodelForcedDisp",id:"macro/boundary-conditions/SubmodelForcedDisp",isDocsHomePage:!1,title:"SubmodelForcedDisp",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-SubmodelForcedDisp.md",slug:"/macro/boundary-conditions/SubmodelForcedDisp",permalink:"/testweb/docs/macro/boundary-conditions/SubmodelForcedDisp",version:"current",sidebar:"api",previous:{title:"MappingPressure",permalink:"/testweb/docs/macro/boundary-conditions/MappingPressure"},next:{title:"InitialDynamic",permalink:"/testweb/docs/macro/boundary-conditions/InitialDynamic"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"create sub model forced displacement"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"SubmodelForcedDisp(String m_strName,int iSolver,String strFilePathName,int iProcessNo,BOOL bTranslationX,BOOL bTranslationY,BOOL bTranslationZ,int iReferType,double dExtensionRange,double dExtensionTol,double dExtensionLimitTol,String strFilePathName,int iUseBucket,int iNumBucketMaxX,int iNumBucketMaxY,int iNumBucketMaxZ,int iPrevBc,Cursor[] m_taTarget,Cursor m_crEdit)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  String\nname of sub model forced displacement"),Object(i.b)("p",null,"2",".","  int\nslover","[0:ADVC]"),Object(i.b)("p",null,"3",".","  String\nfile path"),Object(i.b)("p",null,"4",".","  int\nprocess number"),Object(i.b)("p",null,"5",".","  BOOL\nif translation X used"),Object(i.b)("p",null,"6",".","  BOOL\nif translation Y used"),Object(i.b)("p",null,"7",".","  BOOL\nif translation Z used"),Object(i.b)("p",null,"8",".","  int\nrefer type","[0:blank; 1:result; 2:restart]"),Object(i.b)("p",null,"9",".","  double\nextension_range"),Object(i.b)("p",null,"10",".","  double\nextension_tol"),Object(i.b)("p",null,"11",".","  double\nextension_limit_tol"),Object(i.b)("p",null,"12",".","  String\nglobal_element_set"),Object(i.b)("p",null,"13",".","  int\nuse_bucket","[0:blank; 1:Yes; 2:No]"),Object(i.b)("p",null,"14",".","  int\nnum_bucket_max_x"),Object(i.b)("p",null,"15",".","  int\nnum_bucket_max_y"),Object(i.b)("p",null,"16",".","  int\nnum_bucket_max_z"),Object(i.b)("p",null,"17",".","  int\nprev_bc","[0:blank; 1:default hold]"),Object(i.b)("p",null,"18",".","  Cursor[]\ntargets"),Object(i.b)("p",null,"19",".","  Cursor\nedit cursor"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'SubmodelForcedDisp("SubmodelForcedDisplacement1", 0, "/home/", 0, 1, 1, 1, -1, 1.79769e+308, 1.79769e+308, 1.79769e+308, "", -1, 2147483647, 2147483647, 2147483647, -1, [6:21], 0:0)\n')))}b.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=b(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=b(t),d=r,m=s["".concat(c,".").concat(d)]||s[d]||p[d]||i;return t?o.a.createElement(m,a(a({ref:n},u),{},{components:t})):o.a.createElement(m,a({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);