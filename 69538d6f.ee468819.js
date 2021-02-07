(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.a.createElement(s,l(l({ref:t},p),{},{components:r})):a.a.createElement(s,l({ref:t},p))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},610:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),o=(r(0),r(1441)),i={id:"Geometry.Part.Trapezoid",title:"Geometry.Part.Trapezoid()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create a trapezoid part"},l={unversionedId:"psj-command/geometry/Geometry.Part.Trapezoid",id:"psj-command/geometry/Geometry.Part.Trapezoid",isDocsHomePage:!1,title:"Geometry.Part.Trapezoid()",description:"Create a trapezoid part",source:"@site/docs\\psj-command\\geometry\\Geometry.Part.Trapezoid.md",slug:"/psj-command/geometry/Geometry.Part.Trapezoid",permalink:"/testweb/docs/psj-command/geometry/Geometry.Part.Trapezoid",version:"current",sidebar:"api",previous:{title:"Geometry.Part.Torus()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Part.Torus"},next:{title:"Geometry.Part.Tube()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Part.Tube"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This method creates a trapezoid body in a specific location. This relative location is computed to the specified local coordinate system."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Trapezoid(dlOrigin=[0.0,0.0,0.0], dlLength=[0.01, 0.01, 0.01], dTopXLength=7.0,dRadius=0,\n    ilNodeCnt=[10, 10, 10], strPartName="Trapezoid_1", iColorPart=7105764, crCoord=None)\n')),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Geometry-CreateTrapezoid")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Part --\x3e Trapezoid")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dlOrigin")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"List of Double")," representing the X-, Y-, and Z-coordinates of the origin point."),Object(o.b)("li",{parentName:"ul"},"The default value is ","[0.0,0.0,0.0]",".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dlLength")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"List of Double")," specifying the trapezoid length in meters in the X-, Y-, Z-axis direction."),Object(o.b)("li",{parentName:"ul"},"The default value is ","[0.01,0.01,0.01]",".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dTopXLength")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the length of the X-axis direction at top face."),Object(o.b)("li",{parentName:"ul"},"The default value is 7.0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dRadius")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the radius in degrees of top face."),Object(o.b)("li",{parentName:"ul"},"The default value is 0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"ilNodeCnt")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"List of Integer")," specifying the number of nodes in X-, Y-, Z-axis direction, respectively."),Object(o.b)("li",{parentName:"ul"},"The default value is ","[10,10,10]",".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"strPartName")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String")," specifying the name of the newly created part."),Object(o.b)("li",{parentName:"ul"},'The default value is "Trapezoid_1".')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iColorPart")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the color of the newly created part."),Object(o.b)("li",{parentName:"ul"},"The default value is 7105764.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"crCoord")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the local coordinate system."),Object(o.b)("li",{parentName:"ul"},"The default value is ",Object(o.b)("em",{parentName:"li"},"None"),".")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Trapezoid(dlLength=[0.02, 0.01, 0.01], strPartName="Trapezoid_5", iColorPart=7961077)\n')))}b.isMDXComponent=!0}}]);