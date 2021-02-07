(window.webpackJsonp=window.webpackJsonp||[]).push([[956],{1035:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(1441)),o={id:"Geometry.ExtractRefSurface",title:"Geometry.ExtractRefSurface()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Extract reference surfaces"},i={unversionedId:"psj-command/geometry/Geometry.ExtractRefSurface",id:"psj-command/geometry/Geometry.ExtractRefSurface",isDocsHomePage:!1,title:"Geometry.ExtractRefSurface()",description:"Extract reference surfaces",source:"@site/docs\\psj-command\\geometry\\Geometry.ExtractRefSurface.md",slug:"/psj-command/geometry/Geometry.ExtractRefSurface",permalink:"/testweb/docs/psj-command/geometry/Geometry.ExtractRefSurface",version:"current",sidebar:"api",previous:{title:"Geometry.Edge.SplineFreeEdges()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Edge.SplineFreeEdges"},next:{title:"Geometry.ExtractSurfaces()",permalink:"/testweb/docs/psj-command/geometry/Geometry.ExtractSurfaces"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"This method creates a new part by recursively finding adjacent surfaces that are at an angle of less than or equal to the specified angle."),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Geometry.ExtractRefSurface(crlFace, dAngle=60.0, strName="ExtractFace_1", bMergePart=False)\n')),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Geometry-MeshEditExtractRefSurfaces")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Extract Surfaces")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"crlFace")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"List of Cursor")," specifying the faces to be extracted."),Object(c.b)("li",{parentName:"ul"},"This is a required input.")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"dAngle")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the angle in degrees between the adjacent faces to be extracted. If ",Object(c.b)("em",{parentName:"li"},"dAngle=-1"),", the selected faces are extracted only."),Object(c.b)("li",{parentName:"ul"},"The default value is 60.0.")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"strName")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"String")," specifying the original name of new parts. The final name is a concatenation of the original name and sequence number."),Object(c.b)("li",{parentName:"ul"},'The default value is "ExtractFace_1".')),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"bMergePart")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Boolean")," specifying whether to merge new parts into a single part."),Object(c.b)("li",{parentName:"ul"},"The default value is ",Object(c.b)("em",{parentName:"li"},"False"),".")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"A ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube()\n\nGeometry.ExtractSurfaces(crlFace=[Face(26)], dAngle=5156.620156179, strName="ExtractFace_2")\n\n')))}p.isMDXComponent=!0},1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||s[m]||c;return r?a.a.createElement(d,i(i({ref:t},u),{},{components:r})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);