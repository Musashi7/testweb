(window.webpackJsonp=window.webpackJsonp||[]).push([[1076],{1155:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1441)),i={id:"Geometry.Part.Sphere",title:"Geometry.Part.Sphere()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create Sphere Part"},c={unversionedId:"psj-command/geometry/Geometry.Part.Sphere",id:"psj-command/geometry/Geometry.Part.Sphere",isDocsHomePage:!1,title:"Geometry.Part.Sphere()",description:"Create Sphere Part",source:"@site/docs\\psj-command\\geometry\\Geometry.Part.Sphere.md",slug:"/psj-command/geometry/Geometry.Part.Sphere",permalink:"/testweb/docs/psj-command/geometry/Geometry.Part.Sphere",version:"current",sidebar:"api",previous:{title:"Geometry.Part.Elems()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Part.Elems"},next:{title:"Geometry.Part.Torus()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Part.Torus"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This method creates a sphere shaped body in a specific location. This relative location is computed to the specified local coordinate system."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Sphere(dlOrigin=[0, 0, 0], dRadius=0.005, iLatitudeNodeCnt=20, iLongitudeNodeCnt=20, strPartName="Sphere_1", iColorPart=7105764, crCoord=None)\n')),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Geometry-CreateSphere")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Part --\x3e Sphere")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dlOrigin")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"List of Double")," representing the X-, Y-, and Z-coordinates of f the center of the sphere."),Object(o.b)("li",{parentName:"ul"},"The default value is ","[0,0,0]",".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dRadius")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the radius of the sphere. in meters."),Object(o.b)("li",{parentName:"ul"},"The default value is 0.005.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iLatitudeNodeCnt")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the number of divisions in the latitude direction."),Object(o.b)("li",{parentName:"ul"},"The default value is 20.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iLongitudeNodeCnt")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the number of divisions in the longitude direction."),Object(o.b)("li",{parentName:"ul"},"The default value is 20.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"strPartName")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String")," specifying the name of the newly created part."),Object(o.b)("li",{parentName:"ul"},'The default value is "Sphere_1".')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iColorPart")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the color of the newly created part."),Object(o.b)("li",{parentName:"ul"},"The default value is 7105764.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"crCoord")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the local coordinate system."),Object(o.b)("li",{parentName:"ul"},"The default value is ",Object(o.b)("em",{parentName:"li"},"None"),".")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Sphere(dlOrigin=[0.005, 0.0, 0.0], iColorPart=13259210)\n")))}b.isMDXComponent=!0},1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||o;return r?a.a.createElement(d,c(c({ref:t},p),{},{components:r})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);