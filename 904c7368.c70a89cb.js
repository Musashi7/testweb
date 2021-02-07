(window.webpackJsonp=window.webpackJsonp||[]).push([[715],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),c=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?l.a.createElement(m,o(o({ref:t},s),{},{components:n})):l.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},794:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),l=n(7),r=(n(0),n(1441)),i={id:"Meshing.SolidMeshing",title:"Meshing.SolidMeshing()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Solid Meshing"},o={unversionedId:"psj-command/meshing/Meshing.SolidMeshing",id:"psj-command/meshing/Meshing.SolidMeshing",isDocsHomePage:!1,title:"Meshing.SolidMeshing()",description:"Solid Meshing",source:"@site/docs\\psj-command\\meshing\\Meshing.SolidMeshing.md",slug:"/psj-command/meshing/Meshing.SolidMeshing",permalink:"/testweb/docs/psj-command/meshing/Meshing.SolidMeshing",version:"current",sidebar:"api",previous:{title:"Meshing.SetMeshAttribute()",permalink:"/testweb/docs/psj-command/meshing/Meshing.SetMeshAttribute"},next:{title:"Meshing.SurfaceMeshing()",permalink:"/testweb/docs/psj-command/meshing/Meshing.SurfaceMeshing"}},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:b};function c(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"This function generate tetrahedral solid elements to target part."),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Meshing.SolidMeshing(crlPart, bTet10=False, dGradingFactor=0, dStretchLimit=0, iSpeedVsQual=0, iSpeedVsMem=0, iRegion=0, bInternalNodes=True, bSafeMode=True, iParallel=0, bSurfaceNodes=True, bEdgeNodes=True, bPreservation=True, bInternalMeshOnly=True, bMeshColor=False, iPartColor=2763429)\n")),Object(r.b)("p",null,"Macro: {ref}",Object(r.b)("inlineCode",{parentName:"p"},"Macro-Meshing-VolMeshing")),Object(r.b)("p",null,"Ribbon: {menuselection}",Object(r.b)("inlineCode",{parentName:"p"},"Meshing --\x3e SolidMeshing")),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"crlPart")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor List")," specifying the target Parts. This is a required input.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bTet10")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the Tet10 creation. If enabled, solid elements Tet4 will be converted to Tet10. The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dGradingFactor")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the grading factor. This parameter affects the change of mesh size from small mesh area to large mesh area. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dStretchLimit")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stretch limit of the result mesh. Created mesh will be adjusted in order to reduce the amount of elements whose stretch is greater than this parameter. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iSpeedVsQual")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the priority between mesh quality and mesh generation speed."),Object(r.b)("li",{parentName:"ul"},"If 0: Speed is prioritized (Fastest)."),Object(r.b)("li",{parentName:"ul"},"If 1: Mesh quality is prioritized (Optimized)."),Object(r.b)("li",{parentName:"ul"},"The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iSpeedVsMem")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the priority between memory usage and mesh generation speed."),Object(r.b)("li",{parentName:"ul"},"If 0: Speed is prioritized (Standard)."),Object(r.b)("li",{parentName:"ul"},"If 1: The reduction of memory usage is prioritized (Low Memory)."),Object(r.b)("li",{parentName:"ul"},"The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iRegion")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the region where mesh will be generated."),Object(r.b)("li",{parentName:"ul"},"If 0: Create the solid elements in only the main area of part (Main region)."),Object(r.b)("li",{parentName:"ul"},"If 1: Create solid element to all the area of the part (All Region)."),Object(r.b)("li",{parentName:"ul"},"The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bInternalNodes")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the creation of extra nodes. If disabled, nodes on surfaces will be modified. If enabled, only nodes will only be created inside target parts. The default value is True.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bSafeMode")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) safe mode. This mode is used to enhance very small element's quality. The default value is True.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iParallel")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the number of CPU threads for parallel meshing. This parameter must be smaller than the maximum number of CPU cores. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bSurfaceNodes")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the cleaning of surface nodes. This parameter is for clean-up step. If enabled, surface nodes will be slightly moved to improve mesh quality. The default value is True.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bEdgeNodes")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the cleaning of edge nodes. This parameter is for clean-up step. If enabled, edge nodes will be slightly moved to improve mesh quality. The default value is True.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bPreservation")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the preservation of nodes. This parameter is for clean-up step. If disabled, nodes can be moved to improve mesh quality. The default value is True.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bInternalMeshOnly")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the correction of internal mesh only. This parameter is for clean-up step. The default value is True.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bMeshColor")),Object(r.b)("p",null,": A ",Object(r.b)("em",{parentName:"p"},"Boolean")," to enable (True) or disable (False) the use of mesh color. If enabled, target parts' color will be changed according to ",Object(r.b)("inlineCode",{parentName:"p"},"iPartColor"),". The default value is False."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iPartColor")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the color of the result mesh parts. The default value is 2763429.")),Object(r.b)("h2",{id:"return-code"},"Return Code"),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"String")," of 1 if succeeded, or 0 if failed."),Object(r.b)("h2",{id:"sample-code"},"Sample Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Cube()\n\nMeshing.SolidMeshing(crlPart=[Part(1)], bTet10=True, dGradingFactor=1.05, dStretchLimit=0.1, iSpeedVsQual=1, iRegion=1, bSafeMode=False, iParallel=24, bSurfaceNodes=False, bEdgeNodes=False, bInternalMeshOnly=False, iPartColor=65280)\n")))}c.isMDXComponent=!0}}]);