(window.webpackJsonp=window.webpackJsonp||[]).push([[382],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return f}));var o=t(0),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),d=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=d(t),s=o,f=u["".concat(i,".").concat(s)]||u[s]||b[s]||c;return t?r.a.createElement(f,l(l({ref:n},p),{},{components:t})):r.a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=s;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<c;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},458:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return d}));var o=t(3),r=t(7),c=(t(0),t(1441)),i={id:"MoveNodeAlongDirection",title:"MoveNodeAlongDirection",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/mesh-edit/MoveNodeAlongDirection",id:"macro/mesh-edit/MoveNodeAlongDirection",isDocsHomePage:!1,title:"MoveNodeAlongDirection",description:"Description",source:"@site/docs\\macro\\mesh-edit\\Macro-Mesh-Edit-MoveNodeAlongDirection.md",slug:"/macro/mesh-edit/MoveNodeAlongDirection",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeAlongDirection",version:"current",sidebar:"api",previous:{title:"SeparateNode",permalink:"/testweb/docs/macro/mesh-edit/SeparateNode"},next:{title:"MeshCopy",permalink:"/testweb/docs/macro/mesh-edit/MeshCopy"}},a=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:a};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Move node(s) in a specified direction"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"MoveNodeAlongDirection(double dX, double dY, double dZ, double planept","[0][0]",", double planept","[0][1]",", double planept","[0][2]",", double planept","[1][0]",", double planept","[1][1]",", double planept","[1][2]",", double planept","[2][0]",", double planept","[2][1]",", double planept","[2][2]",", Cursor face, double magnitude, bool facepicked, bool elempicked, int[] node)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  double\nDisplacement in X Direction"),Object(c.b)("p",null,"2",".","  double\nDisplacement in Y Direction"),Object(c.b)("p",null,"3",".","  double\nDisplacement in Z Direction"),Object(c.b)("p",null,"4",".","  double\n1st coordinate of plane point1"),Object(c.b)("p",null,"5",".","  double\n2nd coordinate of plane point1"),Object(c.b)("p",null,"6",".","  double\n3rd coordinate of plane point1"),Object(c.b)("p",null,"7",".","  double\n1st coordinate of plane point2"),Object(c.b)("p",null,"8",".","  double\n2nd coordinate of plane point2"),Object(c.b)("p",null,"9",".","  double\n3rd coordinate of plane point2"),Object(c.b)("p",null,"10",".","  double\n1st coordinate of plane point3"),Object(c.b)("p",null,"11",".","  double\n2nd coordinate of plane point3"),Object(c.b)("p",null,"12",".","  double\n3rd coordinate of plane point3"),Object(c.b)("p",null,"13",".","  Cursor\nselected face cursor"),Object(c.b)("p",null,"14",".","  double\nMagnitude"),Object(c.b)("p",null,"15",".","  bool\nis face picked 0=no,1=yes"),Object(c.b)("p",null,"16",".","  bool\nis element picked 0=no,1=yes"),Object(c.b)("p",null,"17",".","  int[]\nNode List"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"MoveNodeAlongDirection(0.00333333, 0, -0.00111111, 0.01, 0, 0, 0.01, 0.00111111, 0, 0.01, 0.00111111, 0.00111111, 6:24, 0.00351364, 1, 0, [443, 437])\n")))}d.isMDXComponent=!0}}]);