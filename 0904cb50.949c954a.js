(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(1441)),l={id:"AdvcJob",title:"AdvcJob",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/analysis/AdvcJob",id:"macro/analysis/AdvcJob",isDocsHomePage:!1,title:"AdvcJob",description:"Description",source:"@site/docs\\macro\\analysis\\Macro-Analysis-AdvcJob.md",slug:"/macro/analysis/AdvcJob",permalink:"/testweb/docs/macro/analysis/AdvcJob",version:"current",sidebar:"api",previous:{title:"AdvcRandomProcess",permalink:"/testweb/docs/macro/analysis/AdvcRandomProcess"},next:{title:"MergeNode",permalink:"/testweb/docs/macro/mesh-edit/MergeNode"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Create advc job"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"AdvcJob(CString Name, CString Description, int eJobType, Cursor[] processSequence, Cursor[] elemLocationGroup, Cursor[] nodeLocationGroup, bool WriteGroup, Cursor Edit, bool ResultReference, int iSeparateFile, bool ExportRelatedAllLBCs, bool UseEntityName, bool MatrixSloverParam, int PreconditionType, int MatrixStructure, Cursor[] Target, int LoadType,bool SameOutputOnAllProcess, bool DeleteFloatingNode, bool BC, bool CheckBCDuplicate, bool AutoAssignDummyProp, Cursor crDummyPropMaterial, bool ReferenceRestartData, Cstring ReferenceRestartDataPath, int ReferenceRestartDataProcessNum, int ReferenceRestartDataStepNum, int ReferenceRestartDataCoordType, int ReferenceRestartDataUpdateContactSearch, LoadNodeData[] LoadData, int HeatConvection)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  Cstring\nName of ADVC Job"),Object(a.b)("p",null,"2",".","  Cstring\nDescription of ADVC Job"),Object(a.b)("p",null,"3",".","  int\nJob type","[0:Structural; 1:Heat Transfer]"),Object(a.b)("p",null,"4",".","  Cursor[]\nAdvc process sequence"),Object(a.b)("p",null,"5",".","  Cursor[]\nElement location group"),Object(a.b)("p",null,"6",".","  Cursor[]\nNode location group"),Object(a.b)("p",null,"7",".","  bool\nWrite group flag true = 1, false = 0"),Object(a.b)("p",null,"8",".","  Cursor\nEdit ADVC Job"),Object(a.b)("p",null,"9",".","  bool\nResult reference flag true = 1, flase = 0"),Object(a.b)("p",null,"10",".","  int\nSeparated file type","[0:None; 1:By Model; 2:By Body; 3:By Selected Body]"),Object(a.b)("p",null,"11",".","  bool\nExport all related LBCs flag true = 1, false = 0"),Object(a.b)("p",null,"12",".","  bool\nUse entity name flag true = 1, false = 0"),Object(a.b)("p",null,"13",".","  bool\nDefine matrix solver parameter flag true = 1, false = 0"),Object(a.b)("p",null,"14",".","  int\nPrecondition type","[0:Scaling; 1:CGCG; 2:CGCG2; 3:CGCG2_Diag; 4:CGCG2-SOR]"),Object(a.b)("p",null,"15",".","  int\nMatrix structure ","[0:Symmetry; 1:Asymmetry]"),Object(a.b)("p",null,"16",".","  Cursor[]\nTarget list"),Object(a.b)("p",null,"17",".","  int\nLoad type ","[0:Load Case; 1:Load]"),Object(a.b)("p",null,"18",".","  bool\nAll outputs are same flag true = 1, false = 0"),Object(a.b)("p",null,"19",".","  bool\nDelete floating node flag true = 1, false = 0"),Object(a.b)("p",null,"20",".","  bool\nBoundary condition flag true = 1, false = 0"),Object(a.b)("p",null,"21",".","  bool\nCheck Boundary condition Duplicate flag true = 1, false = 0"),Object(a.b)("p",null,"22",".","  bool\nAuto Assign Dummy Property"),Object(a.b)("p",null,"23",".","  Cursor\nDummy Property Material"),Object(a.b)("p",null,"24",".","  bool\nReference Restart Data flag true = 1, false = 0"),Object(a.b)("p",null,"25",".","  Cstring\nReference Restart Data Path"),Object(a.b)("p",null,"26",".","  int\nReference Restart Data Process Num"),Object(a.b)("p",null,"27",".","  int\nReference Restart Data Step Num"),Object(a.b)("p",null,"28",".","  int\nReference Restart Data Coord Type"),Object(a.b)("p",null,"29",".","  int\nReference Restart Data Update Contact Search"),Object(a.b)("p",null,"30",".","  LoadNodeData[]\nLoadNodeData list"),Object(a.b)("p",null,"31",".","  LoadNodeData\n(Cursor data, Cursor modify, int flag, double contactInterference, bool shrink, int Stabilized, double residualFactor, double EffectiveDist, int Type, double CN, double CT)"),Object(a.b)("p",null,"32",".","  int\nHeat Convection"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'AdvcJob("ADVC", "", 1, [128:2], [], [], 0, 0:0, 0, 0, 0, 0, 0, 0, 0, [3:1], 1, 1, 1, 1, 0, 1, 22:2, 0, "", 2147483647, 2147483647, 0, 1, [], 1)\n')))}b.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,f=s["".concat(l,".").concat(d)]||s[d]||p[d]||a;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);