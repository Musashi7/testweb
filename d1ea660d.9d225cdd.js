(window.webpackJsonp=window.webpackJsonp||[]).push([[1083],{1162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),l=(n(0),n(1441)),i={id:"Geometry.AdjustHalfCylinder",title:"Geometry.AdjustHalfCylinder()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Adjust half cylinder"},o={unversionedId:"psj-command/geometry/Geometry.AdjustHalfCylinder",id:"psj-command/geometry/Geometry.AdjustHalfCylinder",isDocsHomePage:!1,title:"Geometry.AdjustHalfCylinder()",description:"Adjust half cylinder",source:"@site/docs\\psj-command\\geometry\\Geometry.AdjustHalfCylinder.md",slug:"/psj-command/geometry/Geometry.AdjustHalfCylinder",permalink:"/testweb/docs/psj-command/geometry/Geometry.AdjustHalfCylinder",version:"current",sidebar:"api",previous:{title:"FileMenu.Save()",permalink:"/testweb/docs/psj-command/file-menu/FileMenu.Save"},next:{title:"Geometry.AdvancedShellAssembly()",permalink:"/testweb/docs/psj-command/geometry/Geometry.AdvancedShellAssembly"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"This command is used to adjust the split position of the cylinder face for example the bolt or bolt hole."),Object(l.b)("p",null,"By using this function, unevenly meshing caused by the difference of split positions can be avoided."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.AdjustHalfCylinder(poslPoint=[], crlFace=[], crCoord=None, iAxisPlane=0, bDivideFace=True, crlPart=[], bMergeEdge=True)\n")),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-Geometry-MeshEditAdjustHalfCylinderCoordinateCr")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"Geometry --\x3e AdjustHalfCylinder")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"poslPoint"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Position List"),' specifying list of 3 points to define the plane. The default value is []. This argument is required when option "3 points" was selected.')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crlFace"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor List")," specifying list of face to cut. This is a required input.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crCoord"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor")," specifying the coordinate. The default value is None.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iAxisPlane"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the axis plane. The default value is 0."),Object(l.b)("li",{parentName:"ul"},"If this value equal to 0, the cut plane is Oyz."),Object(l.b)("li",{parentName:"ul"},"If this value equal to 1, the cut plane is Oxz."),Object(l.b)("li",{parentName:"ul"},"If this value equal to 2, the cut plane is Oxy."),Object(l.b)("li",{parentName:"ul"},'If this value equal to 3, the cut plane is specified by 3 nodes that user input in "poslPoint".')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bDivideFace"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean"),' enable/disable option "divide face". The default value is True.')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crlPart"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor List")," specifying list of the part. The default value is [].")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bMergeEdge"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean"),' enable/disable option "merge edge". The default value is True.')),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cylinder(iPartCol=16579696)\nGeometry.Part.Cylinder(dlOrigin=[0.0, 0.01, 0.0], dTopRadius=0.005, dBotRadius=0.005, strName="Cylinder_2", iPartCol=7666683)\nGeometry.AdjustHalfCylinder(poslPoint=[[-2.775557561562891e-16, 0, -5.551115123125783e-17]], crlFace=[Face(5)], iAxisPlane=2)\nGeometry.AdjustHalfCylinder(poslPoint=[[0, 0.009999999999999898, 6.938893903907228e-18]], crlFace=[Face(10)], iAxisPlane=2)\n')))}s.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||l;return n?a.a.createElement(m,o(o({ref:t},u),{},{components:n})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);