(window.webpackJsonp=window.webpackJsonp||[]).push([[1194],{1273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),a=(n(0),n(1441)),i={id:"Geometry.Edge.Line",title:"Geometry.Edge.Line()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create Edge line by connecting points"},c={unversionedId:"psj-command/geometry/Geometry.Edge.Line",id:"psj-command/geometry/Geometry.Edge.Line",isDocsHomePage:!1,title:"Geometry.Edge.Line()",description:"Create Edge line by connecting points",source:"@site/docs\\psj-command\\geometry\\Geometry.Edge.Line.md",slug:"/psj-command/geometry/Geometry.Edge.Line",permalink:"/testweb/docs/psj-command/geometry/Geometry.Edge.Line",version:"current",sidebar:"api",previous:{title:"Geometry.Edge.IntersectionLine()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Edge.IntersectionLine"},next:{title:"Geometry.Edge.NodeShortestPath()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Edge.NodeShortestPath"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This method creates an Edge by connecting the given points."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Edge.Line(veclPosition, crlTargetFace, bBreakFace=True)\n")),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-Geometry-ImprintLineS")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Edge --\x3e Line")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"veclPosition")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"List of Position")," specifying points on the target faces."),Object(a.b)("li",{parentName:"ul"},"This is a required input.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"crlTargetFace")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"List of Cursor")," specifying the target faces."),Object(a.b)("li",{parentName:"ul"},"This is a required input.")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"bBreakFace")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying whether to break the target faces where possible."),Object(a.b)("li",{parentName:"ul"},"The default value is ",Object(a.b)("em",{parentName:"li"},"True"),".")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Cube(iColorPart=6215639)\n\nGeometry.Edge.Line(veclPosition=[[0.01, 0, 0.01], [0, 0.01, 0.01]], crlTargetFace=[Face(26)])\n\n")))}b.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?o.a.createElement(d,c(c({ref:t},p),{},{components:n})):o.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);