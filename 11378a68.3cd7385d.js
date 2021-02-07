(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?o.a.createElement(b,d(d({ref:t},l),{},{components:n})):o.a.createElement(b,d({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(1441)),c={id:"AddItemsEdgeElementEdges",title:"AddItemsEdgeElementEdges",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},d={unversionedId:"macro/midplane/AddItemsEdgeElementEdges",id:"macro/midplane/AddItemsEdgeElementEdges",isDocsHomePage:!1,title:"AddItemsEdgeElementEdges",description:"Description",source:"@site/docs\\macro\\midplane\\Macro-Midplane-AddItemsEdgeElementEdges.md",slug:"/macro/midplane/AddItemsEdgeElementEdges",permalink:"/testweb/docs/macro/midplane/AddItemsEdgeElementEdges",version:"current",sidebar:"api",previous:{title:"AddItemsEdgeExtendEdgeFacetoFace",permalink:"/testweb/docs/macro/midplane/AddItemsEdgeExtendEdgeFacetoFace"},next:{title:"AddItemsEdgeNodes",permalink:"/testweb/docs/macro/midplane/AddItemsEdgeNodes"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Add Items Edge from Element Edges"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"AddItemsEdgeElementEdges(ElemEdge[] ElemEdge, bool BreakFace)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  ElemEdge []\nTarget Element Edges for Creating New Edge"),Object(a.b)("p",null,"2",".","  bool\nBreak Face. true = 1,false = 0"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"CreateEdgeByElemEdge([10:172-10:180, 10:180-10:188, 10:188-10:196], 1)\n")))}p.isMDXComponent=!0}}]);