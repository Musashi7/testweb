(window.webpackJsonp=window.webpackJsonp||[]).push([[522],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||p[b]||c;return n?o.a.createElement(f,i(i({ref:t},d),{},{components:n})):o.a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var d=2;d<c;d++)a[d]=n[d];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},598:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),c=(n(0),n(1441)),a={id:"MoveNodeOffset",title:"MoveNodeOffset",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/mesh-edit/MoveNodeOffset",id:"macro/mesh-edit/MoveNodeOffset",isDocsHomePage:!1,title:"MoveNodeOffset",description:"Description",source:"@site/docs\\macro\\mesh-edit\\Macro-Mesh-Edit-MoveNodeOffset.md",slug:"/macro/mesh-edit/MoveNodeOffset",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeOffset",version:"current",sidebar:"api",previous:{title:"MoveNodeNode2PlanElem",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeNode2PlanElem"},next:{title:"CreateNode",permalink:"/testweb/docs/macro/mesh-edit/CreateNode"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],d={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Move node(s) to an offset position"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"MoveNodeOffset(double dDeltaX, double dDeltaY, double dDeltaZ, cursor crCoord, int[] taNodeKey)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Double\nX coordinate to move the node"),Object(c.b)("p",null,"2",".","  Double\nY coordinate to move the node"),Object(c.b)("p",null,"3",".","  Double\nZ coordinate to move the node"),Object(c.b)("p",null,"4",".","  Cursor\nWhether use local coordinate or not True = 27:*, False = 0:0"),Object(c.b)("p",null,"5",".","  Int[]\nNode key cursor(","[Node ID]",")"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MoveNodeOffset(0, 0, 0.0005, 0:0, [1068])\n")))}u.isMDXComponent=!0}}]);