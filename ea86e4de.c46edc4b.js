(window.webpackJsonp=window.webpackJsonp||[]).push([[1226],{1305:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(1441)),c={id:"Geometry.FindFeature.Edges",title:"Geometry.FindFeature.Edges()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Find specific edges from part"},l={unversionedId:"psj-command/geometry/Geometry.FindFeature.Edges",id:"psj-command/geometry/Geometry.FindFeature.Edges",isDocsHomePage:!1,title:"Geometry.FindFeature.Edges()",description:"Find specific edges from part",source:"@site/docs\\psj-command\\geometry\\Geometry.FindFeature.Edges.md",slug:"/psj-command/geometry/Geometry.FindFeature.Edges",permalink:"/testweb/docs/psj-command/geometry/Geometry.FindFeature.Edges",version:"current",sidebar:"api",previous:{title:"Geometry.FindFeature.DelCircChamfer()",permalink:"/testweb/docs/psj-command/geometry/Geometry.FindFeature.DelCircChamfer"},next:{title:"Geometry.FindFeature.Faces()",permalink:"/testweb/docs/psj-command/geometry/Geometry.FindFeature.Faces"}},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],o={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This method finds and selects the specific edges according to their characteristic."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.FindFeature.Edges(crlPart=[],iOption=0, crlEdge=[], bCylinder=True, bDisc=False,\n    bFourCorners=True, dMinThickness=0.1, dMaxThickness=2.0, dDiameterMin=1.0, dDiameterMax=2.0,\n    crlFace=[])\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Geometry-Geom_FindFeatures")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Find Feature --\x3e Edges")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crlPart")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"List of Cursor")," specifying the parts to find the specific faces. This argument must be specified if the ",Object(i.b)("em",{parentName:"li"},"iOption")," argument value is not equal to 4."),Object(i.b)("li",{parentName:"ul"},"The default value is [].")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iOption")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the specified type of Edges."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("em",{parentName:"li"},"iOption=0"),", find and select the straight edge lines."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("em",{parentName:"li"},"iOption=1"),", find and select the edges that form a closed profile."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("em",{parentName:"li"},"iOption=2"),", find and select the edges of circular shape."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("em",{parentName:"li"},"iOption=3"),", find and select the edges of semi-circular shape."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("em",{parentName:"li"},"iOption=4"),", find and select the edges of bolt hole."),Object(i.b)("li",{parentName:"ul"},"If ",Object(i.b)("em",{parentName:"li"},"iOption=5"),", find and select the concentric edge of the specified edge.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crlEdge")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"List of Cursor")," specifying the edges used to find the their concentric edges. This argument must be specified if ",Object(i.b)("em",{parentName:"li"},"iOption=5"),"."),Object(i.b)("li",{parentName:"ul"},"The default value is [].")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bCylinder")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying whether to find cylinder face of map mesh."),Object(i.b)("li",{parentName:"ul"},"The default value is ",Object(i.b)("em",{parentName:"li"},"True"),".")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bDisc")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying whether to find disk-shaped face of map mesh."),Object(i.b)("li",{parentName:"ul"},"The default value is ",Object(i.b)("em",{parentName:"li"},"False"),".")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bFourCorners")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying whether to find the faces that are bounded by four corners of map mesh."),Object(i.b)("li",{parentName:"ul"},"The default value is ",Object(i.b)("em",{parentName:"li"},"True"),".")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dMinThickness")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the minimum thickness of the circular chamfer surface."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dMaxThickness")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the maximum thickness of the circular chamfer surface."),Object(i.b)("li",{parentName:"ul"},"The default value is 2.0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dDiameterMin")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the minimum diameter of bolt hole."),Object(i.b)("li",{parentName:"ul"},"The default value is 1.0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dDiameterMax")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the maximum diameter of bolt hole."),Object(i.b)("li",{parentName:"ul"},"The default value is 2.0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crlFace")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"List of Cursor")," specifying the faces used to find the edges of bolt hole. This argument is to be used if ",Object(i.b)("em",{parentName:"li"},"iOption=4"),"."),Object(i.b)("li",{parentName:"ul"},"The default value is [].")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Cube()\n\nGeometry.FindFeature.Edges(crlPart=[Part(1)])\n\n")))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(c,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(d,l(l({ref:t},o),{},{components:n})):a.a.createElement(d,l({ref:t},o))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<i;o++)c[o]=n[o];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);