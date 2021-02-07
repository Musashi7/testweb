(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),b=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,a=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,m=p["".concat(a,".").concat(d)]||p[d]||s[d]||l;return n?o.a.createElement(m,c(c({ref:t},i),{},{components:n})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<l;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},575:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),l=(n(0),n(1441)),a={id:"MC_Mesh_Quality_Auto_Check_Tet",title:"MC_Mesh_Quality_Auto_Check_Tet",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_Tet",id:"macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_Tet",isDocsHomePage:!1,title:"MC_Mesh_Quality_Auto_Check_Tet",description:"Description",source:"@site/docs\\macro\\mesh-clearnup\\Macro-Mesh-Cleanup-MC-Mesh-Quality-Auto-Check-Tet.md",slug:"/macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_Tet",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_Tet",version:"current",sidebar:"api",previous:{title:"MC_Mesh_Quality_Manual_Check_Quad",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Quad"},next:{title:"FindHoles",permalink:"/testweb/docs/macro/mesh-clearnup/FindHoles"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:u};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Mesh_Quality_Auto_Check_Tet"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"MC_Mesh_Quality_Auto_Check_Tet(Cursor[] Part Cursor,Cursor[] Element Cursor,int nElemType, bool nStretchCheck, bool nAspectRatioCheck, bool nVolumeCheck, bool nJacobFactCheck, bool nTetCollapseCheck, bool nTetSkewCheck, double dStretchLimitValue,double dAspectRatioLimitValue, double dVolumeLimitValue,double dJacobFactLimitValue,double dTetCollapseLimitValue,double dTetSkewLimitValue)"),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,"1",".","  Cursor[]\nPart Cursor(","[3:*]","*=Part ID)"),Object(l.b)("p",null,"2",".","  Cursor[]\nElement Cursor(","[11:*]","*=Element ID)"),Object(l.b)("p",null,"3",".","  int\nElem Type(2-Tet Element)"),Object(l.b)("p",null,"4",".","  bool\nStretch Check flag,true = 1,false=0"),Object(l.b)("p",null,"5",".","  bool\nAspect Ratio Check flag,true = 1,false=0"),Object(l.b)("p",null,"6",".","  bool\nVolume bool flag,true = 1,false=0"),Object(l.b)("p",null,"7",".","  bool\nJacob factor bool flag,true = 1,false=0"),Object(l.b)("p",null,"8",".","  bool\nTet Collapse bool flag,true = 1,false=0"),Object(l.b)("p",null,"9",".","  bool\nTet skew flag,true = 1,false=0"),Object(l.b)("p",null,"10",".","  double\nStretch limit value"),Object(l.b)("p",null,"11",".","  double\nAspect Ratio limit value"),Object(l.b)("p",null,"12",".","  double\nVolume limit value"),Object(l.b)("p",null,"13",".","  double\nJacob factor limit value"),Object(l.b)("p",null,"14",".","  double\nTet Collapse limit value"),Object(l.b)("p",null,"15",".","  double\nTet skew limit value"),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MC_Mesh_Quality_Auto_Check_Tet([3:1], [], 2, 0, 0, 0, 0, 0, 0, 0.1, 10, 0, 0, 0.05, 0.9)\n")))}b.isMDXComponent=!0}}]);