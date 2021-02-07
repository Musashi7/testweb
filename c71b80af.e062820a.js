(window.webpackJsonp=window.webpackJsonp||[]).push([[1019],{1098:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(1441)),a={id:"FindEntities",title:"FindEntities",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/utility/FindEntities",id:"macro/utility/FindEntities",isDocsHomePage:!1,title:"FindEntities",description:"Description",source:"@site/docs\\macro\\utility\\Macro-Utility-FindEntities.md",slug:"/macro/utility/FindEntities",permalink:"/testweb/docs/macro/utility/FindEntities",version:"current",sidebar:"api",previous:{title:"ModelInfo",permalink:"/testweb/docs/macro/utility/ModelInfo"},next:{title:"MeasureDistanceByEdge_Node",permalink:"/testweb/docs/macro/utility/MeasureDistanceByEdge_Node"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Find for entity"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"FindEntities(string strID/PartName/Coordinate, string strEntityType, bool bMatch)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  String\nID, Coordinate or Part Name*"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'*Entity ID of Part, Face, Edge, Vertex, 3D Element, 2D Element, 1D Element, Node, Group, Force, Pressure, Constraint, DoF Set, Centrifugal Force, Gravity, Connection, Contact or Coordinate\n\n\u2002Coordinate: "Position of X coordinate, Position of Y coordinate, Position of Z coordinate"\n\n\u2002Part Name: String of part name\n')),Object(i.b)("p",null,"2",".","  String\nTarget entity name (ID/Coordinate/Part Name)*"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"*Entity ID name: Part, Face, Edge, Vertex, 3D Element, 2D Element, 1D Element, Node, Group, Force, Pressure, Constraint, DoF Set, Centrifugal Force, Gravity, Connection, Contact or Coordinate\n\n\u2002Coordinate: Part, Face, Edge, 3D Element, 2D Element, 1D Element, Node\n\n\u2002Part Name: Part\n")),Object(i.b)("p",null,"3",".","  Bool\nMatch bool flag True = 1, False = 0"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'FindEntities("Cube_1","Part") or FindEntities("1","Part") or FindEntities("0.00555,0.01,0.005555","Part")\n\n')))}d.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||s[b]||i;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);