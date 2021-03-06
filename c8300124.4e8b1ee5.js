(window.webpackJsonp=window.webpackJsonp||[]).push([[1024],{1103:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(1441)),i={id:"Home.ImportCAD.Parasolid",title:"Home.ImportCAD.Parasolid()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Import CAD - Parasolid"},o={unversionedId:"psj-command/home/Home.ImportCAD.Parasolid",id:"psj-command/home/Home.ImportCAD.Parasolid",isDocsHomePage:!1,title:"Home.ImportCAD.Parasolid()",description:"Import CAD - Parasolid",source:"@site/docs\\psj-command\\home\\Home.ImportCAD.Parasolid.md",slug:"/psj-command/home/Home.ImportCAD.Parasolid",permalink:"/testweb/docs/psj-command/home/Home.ImportCAD.Parasolid",version:"current",sidebar:"api",previous:{title:"Home.ImportCAD.Elysium()",permalink:"/testweb/docs/psj-command/home/Home.ImportCAD.Elysium"},next:{title:"Home.ImportCAD.ProECreoDirect()",permalink:"/testweb/docs/psj-command/home/Home.ImportCAD.ProECreoDirect"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Import Parasolid file."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Home.ImportCAD.Parasolid(strlPath, dChordHeightTolerance=0.0, dAngleToleranceDegree=7.0, \n    iConvertIsolatedCurve=0, dSurfacePlaneTolerance=0.0, dSurfacePlaneAngle=20.0,\n    dMaxFacetWidth=0.1, dMinFacetWidth=0.0, dScale=0.001)\n")),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-Home-ImportDirect_Parasolid")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"Home --\x3e Import CAD --\x3e Parasolid")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"strlPath")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String List")," specifying the list of the paths of the CAD files."),Object(l.b)("li",{parentName:"ul"},"This is a required input.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dChordHeightTolerance")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the maximum distance from the actual surface to the facet face. The smaller the Chord Height, the smaller the facets and the more accurate the curvature of the surface is represented."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dAngleToleranceDegree")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the angle tolerance which influences the tessellation of curves with relatively small radii in comparison to the overall size of the CAD model."),Object(l.b)("li",{parentName:"ul"},"The default value is 7.0.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"iConvertIsolatedCurve")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the convert isolated curve."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dSurfacePlaneTolerance")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the maximum divergence distance when converting the original surface into a facet plane."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dSurfacePlaneAngle")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the maintained areas with the setting angles larger than the angle between facets of the surface plane of the geometry."),Object(l.b)("li",{parentName:"ul"},"The default value is 20.0.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dMaxFacetWidth")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the maximum size of a single facet edge."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.1.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dMinFacetWidth")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the minimum size of a single facet edge."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"dScale")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the unit ratio imported from the file's unit into the document's unit."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.001.")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"A ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if succeed, or 0 if fail."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Home.ImportCAD.Parasolid(strlPath=[JPT.GetProgramPath() + "SampleData\\\\CAD_Model\\\\Parasolid_File.x_t"],\n    dAngleToleranceDegree=7.0, dScale=0.001)\n\n')))}u.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),u=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),s=a,d=b["".concat(i,".").concat(s)]||b[s]||m[s]||l;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);