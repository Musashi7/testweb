(window.webpackJsonp=window.webpackJsonp||[]).push([[1049],{1128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return i}));var o=n(3),r=n(7),l=(n(0),n(1441)),b={id:"Property1DBeam",title:"Property1DBeam",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/properties/Property1DBeam",id:"macro/properties/Property1DBeam",isDocsHomePage:!1,title:"Property1DBeam",description:"Description",source:"@site/docs\\macro\\properties\\Macro-Properties-Property1DBeam.md",slug:"/macro/properties/Property1DBeam",permalink:"/testweb/docs/macro/properties/Property1DBeam",version:"current",sidebar:"api",previous:{title:"Prop2DShell",permalink:"/testweb/docs/macro/properties/Prop2DShell"},next:{title:"Property1DSectionBar",permalink:"/testweb/docs/macro/properties/Property1DSectionBar"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],a={toc:u};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"1D Beam property"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("p",null,"Property1DBeam(CString Name, int Id, Cursor Section, int ShapeDataType, Cursor Material, double Area, double","[3]"," Orient, double","[3]"," Inertia, double TorConst, double NSM, double NSM_A, double NSM_B, double NSM_NodeAy, double NSM_NodeAz, double NSM_NodeBy, double NSM_NodeBz, double ShearStiffnessK1, double ShearStiffnessK2, double AreaReliefS1, double AreaReliefS2, double WrapCoefficientA, double WrapCoefficientB, double Y_NA_NodeA, double Z_NA_NodeA, double Y_NA_NodeB, double Z_NA_NodeB, double StressRevoceryCoeff_Cy, double StressRevoceryCoeff_Cz, double StressRevoceryCoeff_Dy, double StressRevoceryCoeff_Dz, double StressRevoceryCoeff_Ey, double StressRevoceryCoeff_Ez, double StressRevoceryCoeff_Fy, double StressRevoceryCoeff_Fz, bool PinA0, bool PinA1, bool PinA2, bool PinA3, bool PinA4, bool PinA5, bool PinB0, bool PinB1, bool PinB2, bool PinB3, bool PinB4, bool PinB5, double","[3]"," OffsetPointA, double","[3]"," OffsetPointB, int LocalLengthUnit, int LocalMassUnit, Cursor[] Target, Cursor credit, bool Tapped, int IntePtNum)"),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,"1",".","  CString\nName"),Object(l.b)("p",null,"2",".","  Int\nID"),Object(l.b)("p",null,"3",".","  Int\nShape data type ","[SHAPE_TYPE_UNKNOWN = 0, SHAPE_TYPE_M3 = 1, SHAPE_TYPE_M4 =2, SHAPE_TYPE_M6 = 3, SHAPE_TYPE_M8 = 4, SHAPE_TYPE_M10 = 5, SHAPE_TYPE_M12 = 6, SHAPE_TYPE_M14 = 7, SHAPE_TYPE_M16 = 8, SHAPE_TYPE_M18 = 9, SHAPE_TYPE_M20 = 10, SHAPE_TYPE_M22 = 11, SHAPE_TYPE_M24 = 12, SHAPE_TYPE_M26 = 13, SHAPE_TYPE_M28 = 14, SHAPE_TYPE_M30 = 15, SHAPE_TYPE_M32 = 16, SHAPE_TYPE_M34 = 17, SHAPE_TYPE_M36 = 18, SHAPE_TYPE_CIRC = 19]"),Object(l.b)("p",null,"4",".","  Cursor\nMaterial"),Object(l.b)("p",null,"5",".","  Double\nArea"),Object(l.b)("p",null,"6",".","  Double","[3]","\nOrient Vector double list ","[x,y,z]"),Object(l.b)("p",null,"7",".","  Double","[3]","\nInertia double list ","[Izz,Iyy,Izy]"),Object(l.b)("p",null,"8",".","  Double\nTor const"),Object(l.b)("p",null,"9",".","  Double\nNSM"),Object(l.b)("p",null,"10",".","  Double\nNSM_A"),Object(l.b)("p",null,"11",".","  Double\nNSM_B"),Object(l.b)("p",null,"12",".","  Double\nNSM_NodeAy"),Object(l.b)("p",null,"13",".","  Double\nNSM_NodeAz"),Object(l.b)("p",null,"14",".","  Double\nNSM_NodeBy"),Object(l.b)("p",null,"15",".","  Double\nNSM_NodeBz"),Object(l.b)("p",null,"16",".","  Double\nShear stiffness K1"),Object(l.b)("p",null,"17",".","  Double\nShear stiffness K2"),Object(l.b)("p",null,"18",".","  Double\nShear area relief S1"),Object(l.b)("p",null,"19",".","  Double\nShear area relief S2"),Object(l.b)("p",null,"20",".","  Double\nWrap Coefficient A"),Object(l.b)("p",null,"21",".","  Double\nWrap Coefficient B"),Object(l.b)("p",null,"22",".","  Double\nStress recovery coefficient Cy"),Object(l.b)("p",null,"23",".","  Double\nStress recovery coefficient Cz"),Object(l.b)("p",null,"24",".","  Double\nStress recovery coefficient Dy"),Object(l.b)("p",null,"25",".","  Double\nStress recovery coefficient Dz"),Object(l.b)("p",null,"26",".","  Double\nStress recovery coefficient Ey"),Object(l.b)("p",null,"27",".","  Double\nStress recovery coefficient Ez"),Object(l.b)("p",null,"28",".","  Double\nStress recovery coefficient Fy"),Object(l.b)("p",null,"29",".","  Double\nStress recovery coefficient Fz"),Object(l.b)("p",null,"30",".","  Bool\nPin flag at A3 true = 1, false = 0"),Object(l.b)("p",null,"31",".","  Bool\nPin flag at A4 true = 1, false = 0"),Object(l.b)("p",null,"32",".","  Bool\nPin flag at A5 true = 1, false = 0"),Object(l.b)("p",null,"33",".","  Bool\nPin flag at B0 true = 1, false = 0"),Object(l.b)("p",null,"34",".","  Bool\nPin flag at B1 true = 1, false = 0"),Object(l.b)("p",null,"35",".","  Bool\nPin flag at B2 true = 1, false = 0"),Object(l.b)("p",null,"36",".","  Bool\nPin flag at B3 true = 1, false = 0"),Object(l.b)("p",null,"37",".","  Bool\nPin flag at B4 true = 1, false = 0"),Object(l.b)("p",null,"38",".","  Bool\nPin flag at B5 true = 1, false = 0"),Object(l.b)("p",null,"39",".","  Double","[3]","\nOffset PointA double list"),Object(l.b)("p",null,"40",".","  Double","[3]","\nOffset PointB double list"),Object(l.b)("p",null,"41",".","  Int\nLocal Unit Length"),Object(l.b)("p",null,"42",".","  Int\nLocal Unit mass"),Object(l.b)("p",null,"43",".","  Cursor[]\nTarget list"),Object(l.b)("p",null,"44",".","  Cursor\nEdit 1D Beam"),Object(l.b)("p",null,"45",".","  Bool\nTapped flag true = 1, false = 0"),Object(l.b)("p",null,"46",".","  Int\nIntegration Points Num"),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'Property1DBeam("BEAM2", 2, 93:1, 0, 22:2, 1.25664e-07, [1, 3, 3], [1.257e-15, 1.257e-15, 0], 2.513e-15, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0.9, 0.9, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0.0002, -0, 0, 0.0002, -0.0002, 0, -0, -0.0002, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, [1.7976931e+308, 1.7976931e+308, 1.7976931e+308], [1.7976931e+308, 1.7976931e+308, 1.7976931e+308], 0, 0, [5:1], 0:0, 0, 2147483647)\n')))}i.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var o=n(0),r=n.n(o);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var a=r.a.createContext({}),i=function(e){var t=r.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,b=e.parentName,a=u(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,d=p["".concat(b,".").concat(f)]||p[f]||s[f]||l;return n?r.a.createElement(d,c(c({ref:t},a),{},{components:n})):r.a.createElement(d,c({ref:t},a))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,b=new Array(l);b[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,b[1]=c;for(var a=2;a<l;a++)b[a]=n[a];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);