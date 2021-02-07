(window.webpackJsonp=window.webpackJsonp||[]).push([[749],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,O=p["".concat(a,".").concat(d)]||p[d]||s[d]||c;return n?o.a.createElement(O,i(i({ref:t},u),{},{components:n})):o.a.createElement(O,i({ref:t},u))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},828:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),c=(n(0),n(1441)),a={id:"ContactNXNastran",title:"ContactNXNastran",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/connections/ContactNXNastran",id:"macro/connections/ContactNXNastran",isDocsHomePage:!1,title:"ContactNXNastran",description:"Description",source:"@site/docs\\macro\\connections\\Macro-Connections-ContactNXNastran.md",slug:"/macro/connections/ContactNXNastran",permalink:"/testweb/docs/macro/connections/ContactNXNastran",version:"current",sidebar:"api",previous:{title:"Lbc_Bolt_Modeling_Type_B_Face",permalink:"/testweb/docs/macro/connections/Lbc_Bolt_Modeling_Type_B_Face"},next:{title:"Lbc_Bolt_Modeling_Type_C_Face",permalink:"/testweb/docs/macro/connections/Lbc_Bolt_Modeling_Type_C_Face"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"create contact for nastran"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"ContactNXNastran(String m_strName,int iType,int iAlg,double dNorPenFactor,double dTanPenFactor,double dForceConTol,double dMaxForceIter,double dMaxStaIter,double dChangeNum,double dMinContactPer,int iShellThickness,int iContactStatus,int iInitGapPenetra,int iRegionRefine,int iEvaluPts,double dMinSearDist,double dMaxSearDist,double dFricCoef,double dSearchDist,double dPenatlyFactor,int iShellOffset,Cursor[] m_taTarget,Cursor m_crEdit,int m_Color,int m_iMethod)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  String\nname of contact"),Object(c.b)("p",null,"2",".","  int\ncontact type","[0:General; 1:Tied]"),Object(c.b)("p",null,"3",".","  int\nalgorithm","[0:face to face]"),Object(c.b)("p",null,"4",".","  double\nnormal penalty factor"),Object(c.b)("p",null,"5",".","  double\ntangential penalty factor"),Object(c.b)("p",null,"6",".","  double\nforce convergence tol"),Object(c.b)("p",null,"7",".","  double\nmax force iterations"),Object(c.b)("p",null,"8",".","  double\nmax status iterations"),Object(c.b)("p",null,"9",".","  double\nchange number"),Object(c.b)("p",null,"10",".","  double\nmin contact percentage"),Object(c.b)("p",null,"11",".","  int\nshell thickness","[0:Include; 1:Not Include]"),Object(c.b)("p",null,"12",".","  int\ncontact status","[0:Previous; 1:Initial]"),Object(c.b)("p",null,"13",".","  int\ninitial gap or penetration","[0:No Correction; 1:Reset Penetration; 2:Reset Both]"),Object(c.b)("p",null,"14",".","  int\nregion refine","[0:Refine; 1:Not Refine]"),Object(c.b)("p",null,"15",".","  int\nevaluation points","[0:Low; 1:Mid; 2:High]"),Object(c.b)("p",null,"16",".","  double\nmin search dist"),Object(c.b)("p",null,"17",".","  double\nmax search dist"),Object(c.b)("p",null,"18",".","  double\nfriction coef"),Object(c.b)("p",null,"19",".","  double\nsearch dist"),Object(c.b)("p",null,"20",".","  double\npenalty factor"),Object(c.b)("p",null,"21",".","  int\nshell thickness","[0:Include; 1:Not Include]"),Object(c.b)("p",null,"22",".","  Cursor[]\ntargets"),Object(c.b)("p",null,"23",".","  Cursor\nedit cursor"),Object(c.b)("p",null,"24",".","  int\ncontact maker color"),Object(c.b)("p",null,"25",".","  int\nmethod type","[0:MANUAL_FACE; 1:MANUAL_GROUP; 2:BY_GROUP_MATRIX; 3:SHARE_FACE; 4:AUTO_SETTING; 5:METHOD_UNKNOWN]"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'ContactNXNastran("ContactNXNastran_1", 0, 0, 10, 1, 0.01, 10, 20, 0.02, 100, 0, 0, 0, 0, 1, 0, 0.01, 0, 10, 1, 0, [79:1-79:2], 0:0, 16711680, 1)\n')))}b.isMDXComponent=!0}}]);