(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=p(r),m=n,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return r?o.a.createElement(b,a(a({ref:t},l),{},{components:r})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},364:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(1441)),c={id:"MeshEditMoveNodeDeform",title:"MeshEditMoveNodeDeform",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/mesh-edit/MeshEditMoveNodeDeform",id:"macro/mesh-edit/MeshEditMoveNodeDeform",isDocsHomePage:!1,title:"MeshEditMoveNodeDeform",description:"Description",source:"@site/docs\\macro\\mesh-edit\\Macro-Mesh-Edit-MeshEditMoveNodeDeform.md",slug:"/macro/mesh-edit/MeshEditMoveNodeDeform",permalink:"/testweb/docs/macro/mesh-edit/MeshEditMoveNodeDeform",version:"current",sidebar:"api",previous:{title:"NodeMovedByDirection",permalink:"/testweb/docs/macro/mesh-edit/NodeMovedByDirection"},next:{title:"MoveNodeStraightenMidNodes",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeStraightenMidNodes"}},d=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:d};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Move nodes deform"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"MeshEditMoveNodeDeform(int m_solverType,String m_strFilePath,int m_iStep,double m_dScale)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  int\ntype of solver"),Object(i.b)("p",null,"2",".","  String\nfile path"),Object(i.b)("p",null,"3",".","  int\nStep"),Object(i.b)("p",null,"4",".","  double\nvalue of scale"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'MeshEditMoveNodeDeform(1,"Test",1,0.001)\n\n')))}p.isMDXComponent=!0}}]);