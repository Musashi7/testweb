(window.webpackJsonp=window.webpackJsonp||[]).push([[497],{576:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),c=(n(0),n(615)),a={id:"MoveNodeFacePoint",title:"MoveNodeFacePoint",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},i={unversionedId:"macro/mesh-edit/MoveNodeFacePoint",id:"macro/mesh-edit/MoveNodeFacePoint",isDocsHomePage:!1,title:"MoveNodeFacePoint",description:"Description",source:"@site/docs\\macro\\mesh-edit\\Macro-Mesh-Edit-MoveNodeFacePoint.md",slug:"/macro/mesh-edit/MoveNodeFacePoint",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeFacePoint",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:u};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Move node(s) to a Face Point position"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," double\nx: 1st coordinate of the point where to move the node."),Object(c.b)("p",null,"2","."," double\ny: 2nd coordinate of the point where to move the node."),Object(c.b)("p",null,"3","."," double\nz: 3rd coordinate of the point where to move the node."),Object(c.b)("p",null,"4","."," int[]\nList with the nodes to move"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MoveNodeFacePoint(0.00505433,0.01,0.00508144, [191, 215])\n")))}d.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(a,".").concat(b)]||l[b]||s[b]||c;return n?o.a.createElement(m,i(i({ref:t},p),{},{components:n})):o.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<c;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);