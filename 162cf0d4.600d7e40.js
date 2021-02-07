(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||a;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(1441)),i={id:"JPT.GetSelectedEdges",title:"JPT.GetSelectedEdges()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get all information of the selected edges"},c={unversionedId:"psj-utility/JPT.GetSelectedEdges",id:"psj-utility/JPT.GetSelectedEdges",isDocsHomePage:!1,title:"JPT.GetSelectedEdges()",description:"Get all information of the selected edges",source:"@site/docs\\psj-utility\\PSJ-Utility_GetSelectedEdges.md",slug:"/psj-utility/JPT.GetSelectedEdges",permalink:"/testweb/docs/psj-utility/JPT.GetSelectedEdges",version:"current",sidebar:"api",previous:{title:"JPT.GetRedoCount()",permalink:"/testweb/docs/psj-utility/JPT.GetRedoCount"},next:{title:"JPT.GetSelectedEdgesCr()",permalink:"/testweb/docs/psj-utility/JPT.GetSelectedEdgesCr"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Get all information of the selected edges."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetSelectedEdges()\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"This utility function does not require any input value."),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"EdgeVector"}),"EdgeVector"))," object containing a ",Object(a.b)("em",{parentName:"p"},"list")," of selected edges with their information."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,12}","{0,12}":!0}),'# Create sample parts\nGeometry.Part.Cube(iColorPart=7138156)\nGeometry.Part.Cube(strPartName="Cube_2", iColorPart=5921475)\nGeometry.Part.Cube(strPartName="Cube_3", iColorPart=6678117)\nGeometry.Part.Cube(strPartName="Cube_4", iColorPart=11908427)\nGeometry.Part.Cube(strPartName="Cube_5", iColorPart=15429611)\nGeometry.Part.Cube(strPartName="Cube_6", iColorPart=7531634)\nGeometry.Part.Cube(strPartName="Cube_7", iColorPart=12434775)\nHome.Find(strSearch="87 90 91 94 95 96 97 98", strSeletedType="Edge")\n\n# Get the information of all selected edges\nselEdges = JPT.GetSelectedEdges()\nJPT.Debugger(selEdges)\nJPT.Debugger(selEdges[3])\n')))}u.isMDXComponent=!0}}]);