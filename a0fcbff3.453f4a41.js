(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{389:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return i}));var r=t(3),o=t(7),a=(t(0),t(615)),l={id:"SurfaceMeshing2D",title:"SurfaceMeshing2D",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},c={unversionedId:"macro/meshing/SurfaceMeshing2D",id:"macro/meshing/SurfaceMeshing2D",isDocsHomePage:!1,title:"SurfaceMeshing2D",description:"Description",source:"@site/docs\\macro\\meshing\\Macro-Meshing-SurfaceMeshing2D.md",slug:"/macro/meshing/SurfaceMeshing2D",permalink:"/testweb/docs/macro/meshing/SurfaceMeshing2D",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:u};function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Surface Meshing 2D"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1","."," Cursor[]\nbody List"),Object(a.b)("p",null,"2","."," MeshParam::double\nAvg_Element_Size"),Object(a.b)("p",null,"3","."," MeshParam::double\nMax_Element_Size"),Object(a.b)("p",null,"4","."," MeshParam::double\nMin_Element_Size"),Object(a.b)("p",null,"5","."," MeshParam::double\nReduction_Factor"),Object(a.b)("p",null,"6","."," MeshParam::double\nGeom_Angle"),Object(a.b)("p",null,"7","."," MeshParam::double\nGeom_MinSize"),Object(a.b)("p",null,"8","."," MeshParam::double\nGrading_Factor"),Object(a.b)("p",null,"9","."," MeshParam::double\nMin_Stretch_Val"),Object(a.b)("p",null,"10","."," MeshParam::double\nGeom_Edge_Deviation"),Object(a.b)("p",null,"11","."," MeshParam::double\nGeom_Quality_Ratio"),Object(a.b)("p",null,"12","."," MeshParam::double\nGeom_Count_Ratio"),Object(a.b)("p",null,"13","."," MeshParam::int\nPerformance_Mode 0=Fastest,1=Good Quality,2=Best Quality"),Object(a.b)("p",null,"14","."," MeshParam::int\nOptimization_Level 0=Disable,1=Level1,2=Level2,3=Level3,4=Level4,5=Level5"),Object(a.b)("p",null,"15","."," MeshParam::bool\nAuto_Merge_Edges 0=No 1=Yes"),Object(a.b)("p",null,"16","."," MeshParam::bool\nAuto_Merge_Faces 0=No 1=Yes"),Object(a.b)("p",null,"17","."," MeshParam::double\nAuto_MeshPattern_MinElemAngle"),Object(a.b)("p",null,"18","."," MeshParam::double\nAuto_MergeTinyFaces_Angle"),Object(a.b)("p",null,"19","."," MeshParam::bool\nOutput_Quad_Mesh 0=No 1=Yes"),Object(a.b)("p",null,"20","."," MeshParam::bool\nPure_Quad_Mesh 0=No 1=Yes"),Object(a.b)("p",null,"21","."," MeshParam::bool\nBad_Input_Model 0=No 1=Yes"),Object(a.b)("p",null,"22","."," MeshParam::bool\nClose_Gaps 0=No 1=Yes"),Object(a.b)("p",null,"23","."," MeshParam::bool\nLocal_Remesh 0=No 1=Yes"),Object(a.b)("p",null,"24","."," MeshParam::bool\nGeom_Approximation 0=No 1=Yes"),Object(a.b)("p",null,"25","."," MeshParam::bool\nCurvature_Control 0=No 1=Yes"),Object(a.b)("p",null,"26","."," MeshParam::bool\nDelete_CircChamfer 0=No 1=Yes"),Object(a.b)("p",null,"27","."," MeshParam::int\nNext_Entity_Offset_Id"),Object(a.b)("p",null,"28","."," MeshParam::int\nNext_Elem_Offset_Id"),Object(a.b)("p",null,"29","."," MeshParam::int\nNext_Node_Offset_Id"),Object(a.b)("p",null,"30","."," bool\nUse Local Settings 0=No 1=Yes"),Object(a.b)("p",null,"31","."," bool\nUse FMesher 0=No 1=Yes"),Object(a.b)("p",null,"32","."," int\nThread Number"),Object(a.b)("p",null,"33","."," bool\nKeep Reference Data 0=No 1=Yes"),Object(a.b)("p",null,"34","."," bool\nUse mesh color 0=No 1=Yes"),Object(a.b)("p",null,"35","."," COLOR\nMesh Color"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"SurfaceMeshing2D([3:1], {0.005, 0.01, 0.001, 1, 0.785398, 0.001, 1.25, 0.1, 0.1, 0.7, 0.5, 1, 3, 0, 0, 0, 0.523599, 0, 0, 0, 0, 0, 0, 0, 0, 10000000, 0, 0}, 1, 0, 4, 1, 0, 65280)\n")))}i.isMDXComponent=!0},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b=o.a.createContext({}),i=function(e){var n=o.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return o.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),s=i(t),m=r,d=s["".concat(l,".").concat(m)]||s[m]||p[m]||a;return t?o.a.createElement(d,c(c({ref:n},b),{},{components:t})):o.a.createElement(d,c({ref:n},b))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<a;b++)l[b]=t[b];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);