(window.webpackJsonp=window.webpackJsonp||[]).push([[1223],{1302:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return s}));var n=r(3),o=r(7),i=(r(0),r(1441)),c={id:"MoveNodeStraightenMidNodes",title:"MoveNodeStraightenMidNodes",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/mesh-edit/MoveNodeStraightenMidNodes",id:"macro/mesh-edit/MoveNodeStraightenMidNodes",isDocsHomePage:!1,title:"MoveNodeStraightenMidNodes",description:"Description",source:"@site/docs\\macro\\mesh-edit\\Macro-Mesh-Edit-MoveNodeStraightenMidNodes.md",slug:"/macro/mesh-edit/MoveNodeStraightenMidNodes",permalink:"/testweb/docs/macro/mesh-edit/MoveNodeStraightenMidNodes",version:"current",sidebar:"api",previous:{title:"MeshEditMoveNodeDeform",permalink:"/testweb/docs/macro/mesh-edit/MeshEditMoveNodeDeform"},next:{title:"MirrorCopy",permalink:"/testweb/docs/macro/mesh-edit/MirrorCopy"}},d=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:d};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Move mid-node(s) to correct position"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("p",null,"MoveNodeStraightenMidNodes(int[] taBodyKey, int[] taFaceKey, int[] taEdgeKey, int[] taNodeKey)"),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"1",".","  Int[]\nBody key cursor(","[Body ID]",")"),Object(i.b)("p",null,"2",".","  Int[]\nFace key cursor(","[Face ID]",")"),Object(i.b)("p",null,"3",".","  Int[]\nEdge key cursor(","[Edge ID]",")"),Object(i.b)("p",null,"4",".","  Int[]\nNode key cursor(","[Node ID]",")"),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"MoveNodeStraightenMidNodes([], [25], [], [444, 460])\n")))}s.isMDXComponent=!0},1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||l[b]||i;return r?o.a.createElement(m,a(a({ref:t},u),{},{components:r})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);