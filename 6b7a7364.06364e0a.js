(window.webpackJsonp=window.webpackJsonp||[]).push([[545],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(n),b=o,m=p["".concat(a,".").concat(b)]||p[b]||s[b]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},623:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(7),c=(n(0),n(1441)),a={id:"MoveNodePoint",title:"MoveNodePoint",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/mesh-edit/MoveNodePoint",id:"macro/mesh-edit/MoveNodePoint",isDocsHomePage:!1,title:"MoveNodePoint",description:"Description",source:"@site/docs\\macro\\mesh-edit\\Macro-Mesh-Edit-MoveNodePoint.md",slug:"/macro/mesh-edit/MoveNodePoint",permalink:"/testweb/docs/macro/mesh-edit/MoveNodePoint",version:"current",sidebar:"api",previous:{title:"MoveNodeNormalOffset",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeNormalOffset"},next:{title:"MoveNodeAbsolute",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeAbsolute"}},d=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:d};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Move node(s) to an Face(Edge) Point position"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"MoveNodePoint(double dDeltaX, double dDeltaY, double dDeltaZ, int[] taNodeKey)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Double\nX coordinate to move the node"),Object(c.b)("p",null,"2",".","  Double\nY coordinate to move the node"),Object(c.b)("p",null,"3",".","  Double\nZ coordinate to move the node"),Object(c.b)("p",null,"4",".","  Int[]\nNode key cursor(","[Node ID]",")"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"MoveNodePoint(0.0044675, 0.0056845, -3.46945e-18, [410, 369])\n")))}u.isMDXComponent=!0}}]);