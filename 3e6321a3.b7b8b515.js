(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return r?o.a.createElement(b,i(i({ref:t},p),{},{components:r})):o.a.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},403:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(1441)),c={id:"Geometry.DeleteEntity.Vertex",title:"Geometry.DeleteEntity.Vertex()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Delete Part entity"},i={unversionedId:"psj-command/geometry/Geometry.DeleteEntity.Vertex",id:"psj-command/geometry/Geometry.DeleteEntity.Vertex",isDocsHomePage:!1,title:"Geometry.DeleteEntity.Vertex()",description:"Delete Part entity",source:"@site/docs\\psj-command\\geometry\\Geometry.DeleteEntity.Vertex.md",slug:"/psj-command/geometry/Geometry.DeleteEntity.Vertex",permalink:"/testweb/docs/psj-command/geometry/Geometry.DeleteEntity.Vertex",version:"current",sidebar:"api",previous:{title:"Geometry.DeleteEntity.Part()",permalink:"/testweb/docs/psj-command/geometry/Geometry.DeleteEntity.Part"},next:{title:"Geometry.Edge.Angle()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Edge.Angle"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"This method deletes the Vertex entity."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Geometry.DeleteEntity.Vertex(crlVertex=[])\n")),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-Geometry-DeleteVertexCr")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Delete Entity --\x3e Vertex")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlVertex"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"List of Cursor")," specifying vertexes to be deleted."),Object(a.b)("li",{parentName:"ul"},"The default value is [].")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Cube()\n\nGeometry.BreakEntity.Edge(crlEdge=[Edge(18)], crlNode=[Node(85)])\n\nGeometry.DeleteEntity.Vertex(crlVertex=[Vertex(27)])\n\n")))}u.isMDXComponent=!0}}]);