(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),u=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),p=u(t),s=o,m=p["".concat(l,".").concat(s)]||p[s]||d[s]||c;return t?r.a.createElement(m,i(i({ref:n},b),{},{components:t})):r.a.createElement(m,i({ref:n},b))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var b=2;b<c;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},415:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),c=(t(0),t(1441)),l={id:"Lbc_Bolt_Modeling_Type_B_Edge",title:"Lbc_Bolt_Modeling_Type_B_Edge",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/connections/Lbc_Bolt_Modeling_Type_B_Edge",id:"macro/connections/Lbc_Bolt_Modeling_Type_B_Edge",isDocsHomePage:!1,title:"Lbc_Bolt_Modeling_Type_B_Edge",description:"Description",source:"@site/docs\\macro\\connections\\Macro-Connections-Lbc-Bolt-Modeling-Type-B-Edge.md",slug:"/macro/connections/Lbc_Bolt_Modeling_Type_B_Edge",permalink:"/testweb/docs/macro/connections/Lbc_Bolt_Modeling_Type_B_Edge",version:"current",sidebar:"api",previous:{title:"Connector",permalink:"/testweb/docs/macro/connections/Connector"},next:{title:"ContactAbaqus",permalink:"/testweb/docs/macro/connections/ContactAbaqus"}},a=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:a};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create Lbc TypeB Bolt Edge method"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"Lbc_Bolt_Modeling_Type_B_Edge(Cursor taEdgeCur1,TCursor taEdgeCur2,CString strRbeName,CString strBarName,int nShaftType,Cursor curBarProperty,double dPlaneTol,double dMaxBoltHeight,bool bPretensionLoad,int nSolverType,double dForceValue,int nPreTenDof,Cursor curCoord,int nBoltFixLength,int nTopSlot,double dRBE1,double dRBE2,double dBotDtDia,double dPitch,int nBotRbeConnType, bool IsCreate2ADVCStaticProcessForFixLength)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor[]\ncircular edges in top side"),Object(c.b)("p",null,"2",".","  Cursor[]\ncircular edges in bottom side"),Object(c.b)("p",null,"3",".","  String\nname of Rbe"),Object(c.b)("p",null,"4",".","  String\nname of BarBody"),Object(c.b)("p",null,"5",".","  int\nConnection type, 0: cbar, 1: rbe2"),Object(c.b)("p",null,"6",".","  Cursor\nbar property cursor"),Object(c.b)("p",null,"7",".","  double\nPlane tolerance angle around the selected edge.Used in finding slave nodes around the selected edge"),Object(c.b)("p",null,"8",".","  double\nMaximum distance between top and bottom rbe"),Object(c.b)("p",null,"9",".","  bool\nPretensionLoad flag,0=false,1=true"),Object(c.b)("p",null,"10",".","  int\nType of pretension Solver,0=All option pretension,1=Abaqus pretension"),Object(c.b)("p",null,"11",".","  double\nforce value.Used in pretension connection"),Object(c.b)("p",null,"12",".","  int\nPretension DoF at target"),Object(c.b)("p",null,"13",".","  Cursor\nreferred coordinate system, NULL is global"),Object(c.b)("p",null,"14",".","  int\nBoltFixLength used in Pretension"),Object(c.b)("p",null,"15",".","  int\ntop side slot bolt flag,0=false,1=true"),Object(c.b)("p",null,"16",".","  double\ntop rbe slave node diameter range"),Object(c.b)("p",null,"17",".","  double\nAlways zero.No need to consider here"),Object(c.b)("p",null,"18",".","  double\nbottom bolt hole diameter"),Object(c.b)("p",null,"19",".","  double\nbottom Rbe Pitch distance"),Object(c.b)("p",null,"20",".","  int\nbottom Rbe connection type,0=down,1=up,2=center"),Object(c.b)("p",null,"21",".","  bool\nOption ADVC Static process, 0: No, 1:Yes"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'Lbc_Bolt_Modeling_Type_B_Edge([5:66319], [5:10000031], "RBE", "Bar_2", 0, 0:0, 20, 0.1, 0, 0, 0, 0, 0:0, 0, 0, 0.0081206, 0, 0.0027248, 0.01, 0, 0)\n')))}u.isMDXComponent=!0}}]);