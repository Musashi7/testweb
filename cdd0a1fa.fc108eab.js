(window.webpackJsonp=window.webpackJsonp||[]).push([[1065],{1144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),l=(n(0),n(1441)),c={id:"Lbc_Bolt_Modeling_Type_C_Edge",title:"Lbc_Bolt_Modeling_Type_C_Edge",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/connections/Lbc_Bolt_Modeling_Type_C_Edge",id:"macro/connections/Lbc_Bolt_Modeling_Type_C_Edge",isDocsHomePage:!1,title:"Lbc_Bolt_Modeling_Type_C_Edge",description:"Description",source:"@site/docs\\macro\\connections\\Macro-Connections-Lbc-Bolt-Modeling-Type-C-Edge.md",slug:"/macro/connections/Lbc_Bolt_Modeling_Type_C_Edge",permalink:"/testweb/docs/macro/connections/Lbc_Bolt_Modeling_Type_C_Edge",version:"current",sidebar:"api",previous:{title:"Property1DPlot",permalink:"/testweb/docs/macro/connections/Property1DPlot"},next:{title:"ContactClearance",permalink:"/testweb/docs/macro/connections/ContactClearance"}},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],a={toc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Create Lbc TypeC Bolt Edge method"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"Lbc_Bolt_Modeling_Type_C_Edge(Cursor taEdgeCur1,Cursor taEdgeCur2,CString strRbeName,double dPlaneTol,double dMaxBoltHeight,int nConnectionType, int nCoincidentNodes, double dTolerance, int nGround,double dStiffnessX,double dStiffnessY,double dStiffnessZ,int nLocalStiffUnit,double dRotateStiffX,double dRotateStiffY,double dRotateStiffZ,int nLocalRotateStiffUnit, double dDampCoef, double dStressCoef,Cursor curCoord,int nTopRbeType,double dTopPitch,double dTopRemoveDepth,int nBotRbeType,double dBotPitch,double dBotRemoveDepth)"),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,"1",".","  Cursor[]\nfaces with circular edges in top side"),Object(l.b)("p",null,"2",".","  Cursor[]\nfaces with circular edges in bottom side"),Object(l.b)("p",null,"3",".","  CString\nname of Rbe"),Object(l.b)("p",null,"4",".","  double\nPlane tolerance angle around the selected edge."),Object(l.b)("p",null,"5",".","  double\nMaximum distance between top and bottom rbe"),Object(l.b)("p",null,"6",".","  int\nconnection type,0 = Spring,1 = Rbe2"),Object(l.b)("p",null,"7",".","  int\nCoincident Nodes"),Object(l.b)("p",null,"8",".","  double\nTolerance"),Object(l.b)("p",null,"9",".","  int\nGround"),Object(l.b)("p",null,"10",".","  double\nStiffness X value"),Object(l.b)("p",null,"11",".","  double\nStiffness Y value"),Object(l.b)("p",null,"12",".","  double\nStiffness Z value"),Object(l.b)("p",null,"13",".","  int\nLocal Stiffness Unit"),Object(l.b)("p",null,"14",".","  double\nRotation Stiffness X value"),Object(l.b)("p",null,"15",".","  double\nRotation Stiffness Y value"),Object(l.b)("p",null,"16",".","  double\nRotation Stiffness Z value"),Object(l.b)("p",null,"17",".","  int\nLocal Rotate Stiffness Unit"),Object(l.b)("p",null,"18",".","  double\nDamping Coefficient"),Object(l.b)("p",null,"19",".","  double\nStress Coefficient"),Object(l.b)("p",null,"20",".","  Cursor\nreferred coordinate system, NULL is global"),Object(l.b)("p",null,"21",".","  int\ntop Rbe type,0=RBE3,1=Rbe2"),Object(l.b)("p",null,"22",".","  double\nTop bolt hole rbe range"),Object(l.b)("p",null,"23",".","  double\ntop slave nodes in this range will not be considered"),Object(l.b)("p",null,"24",".","  int\nbottom Rbe type,0=RBE3,1=Rbe2"),Object(l.b)("p",null,"25",".","  double\nbottom bolt hole rbe range"),Object(l.b)("p",null,"26",".","  double\nbottom slave nodes in this range will not be considered"),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'Lbc_Bolt_Modeling_Type_C_Edge([5:66319], [5:10000031], "RBE", 20, 0.1, 0, 1, 2.22507e-308, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 1.79769e+308, 1.79769e+308, 0:0, 0, 0.01, 0, 0, 0.01, 0)\n')))}u.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=r.a.createContext({}),u=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,a=b(e,["components","mdxType","originalType","parentName"]),d=u(n),s=o,f=d["".concat(c,".").concat(s)]||d[s]||p[s]||l;return n?r.a.createElement(f,i(i({ref:t},a),{},{components:n})):r.a.createElement(f,i({ref:t},a))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var a=2;a<l;a++)c[a]=n[a];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);