(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=u(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||p[d]||a;return t?o.a.createElement(m,c(c({ref:n},s),{},{components:t})):o.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},309:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(1441)),l={id:"VolMeshing",title:"VolMeshing",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/meshing/VolMeshing",id:"macro/meshing/VolMeshing",isDocsHomePage:!1,title:"VolMeshing",description:"Description",source:"@site/docs\\macro\\meshing\\Macro-Meshing-VolMeshing.md",slug:"/macro/meshing/VolMeshing",permalink:"/testweb/docs/macro/meshing/VolMeshing",version:"current",sidebar:"api",previous:{title:"CadProject_Part",permalink:"/testweb/docs/macro/meshing/CadProject_Part"},next:{title:"DoBoxMesh",permalink:"/testweb/docs/macro/meshing/DoBoxMesh"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:i};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Solid Meshing"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"VolMeshing(Cursor[] body, VolMeshParam param, bool use_mesh_color, COLOR color)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  Cursor[]\nBody List"),Object(a.b)("p",null,"2",".","  VolMeshParam::bool\nTet10 0=No,1=Yes"),Object(a.b)("p",null,"3",".","  VolMeshParam::double\nGrading Factor"),Object(a.b)("p",null,"4",".","  VolMeshParam::bool\nGravity Centre 0=No,1=Yes"),Object(a.b)("p",null,"5",".","  VolMeshParam::double\nStretch Limit"),Object(a.b)("p",null,"6",".","  VolMeshParam::int\nQuality 0=Fastest,1=Standard,2=Optimize"),Object(a.b)("p",null,"7",".","  VolMeshParam::int\nMemory 0=Standard,1=LowMemory"),Object(a.b)("p",null,"8",".","  VolMeshParam::int\nRegion 0=AllRegion,1=MainRegion"),Object(a.b)("p",null,"9",".","  VolMeshParam::bool\nInternal Nodes 0=No,1=Yes"),Object(a.b)("p",null,"10",".","  VolMeshParam::bool\nSafe Mode 0=No,1=Yes"),Object(a.b)("p",null,"11",".","  VolMeshParam::int\nParallel Number"),Object(a.b)("p",null,"12",".","  VolMeshParam::bool\nSurface Nodes 0=No,1=Yes"),Object(a.b)("p",null,"13",".","  VolMeshParam::bool\nEdge Nodes 0=No,1=Yes"),Object(a.b)("p",null,"14",".","  VolMeshParam::bool\nPreservation 0=No,1=Yes"),Object(a.b)("p",null,"15",".","  VolMeshParam::bool\nInternal Mesh Only 0=No,1=Yes"),Object(a.b)("p",null,"16",".","  bool\nUse Mesh Color 0=No,1=Yes"),Object(a.b)("p",null,"17",".","  COLOR\nMesh Color"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"VolMeshing([3:1], {1, 1.05, 0, 0.1, 1, 0, 1, 1, 0, 4, 1, 1, 1, 0}, 0, 65280)\n")))}u.isMDXComponent=!0}}]);