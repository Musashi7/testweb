(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},791:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),a=(n(0),n(1441)),c={id:"Meshing.LocalSettings.Edge",title:"Meshing.LocalSettings.Edge()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"LocalSettings.Edge"},o={unversionedId:"psj-command/meshing/Meshing.LocalSettings.Edge",id:"psj-command/meshing/Meshing.LocalSettings.Edge",isDocsHomePage:!1,title:"Meshing.LocalSettings.Edge()",description:"LocalSettings.Edge",source:"@site/docs\\psj-command\\meshing\\Meshing.LocalSettings.Edge.md",slug:"/psj-command/meshing/Meshing.LocalSettings.Edge",permalink:"/testweb/docs/psj-command/meshing/Meshing.LocalSettings.Edge",version:"current",sidebar:"api",previous:{title:"Meshing.LocalSetting.SearchTargetFaces()",permalink:"/testweb/docs/psj-command/meshing/Meshing.LocalSetting.SearchTargetFaces"},next:{title:"Meshing.LocalSettings.Face()",permalink:"/testweb/docs/psj-command/meshing/Meshing.LocalSettings.Face"}},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Set the mesh size for the selected edges.\nDefine the settings  before  surface mesh creation."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Meshing.LocalSettings.Edge(strName, localMesh, crlTarget, crEditTarget=None)\n")),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-Meshing-CreateLocalSetting_Edge")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"Meshing --\x3e LocalSettings --\x3e Edge")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strName"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String")," specifying the name of the local mesh setting. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"localMesh"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"LOCAL_MESH"}),"LOCAL_MESH"))," specifying the local mesh setting's parameter. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor List")," specifying the target Edges of the local mesh setting. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crEditTarget"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying an existed local mesh setting Edge. When this parameter is used, the specified local mesh setting Edge will be overwritten. When it is not used, a new local mesh setting Edge will be created. The default value is None.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if succeeded, or 0 if failed."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube()\n\nMeshing.LocalSettings.Edge(strName="MeshParam_1", localMesh=LOCAL_MESH(iEntityType=3, dAvgElemSize=0.005, dMaxElemSize=0.01, dMinElemSize=0.001, dTrimAngle=0.7853981634, bEnableMeshCount=True, iNodeCount=8), crlTarget=[Edge(18)])\nGeometry.FCircleAdjustVertex(crlPart=[Part(1)])\nMeshing.SetMeshAttribute(crlPart=[Part(1)], surfaceMesh=SURFACE_MESH(dMaxElemSize=0.015, dMinElemSize=0.0005, dGeomAngle=0.7853981634, dGeomMinSize=0.0005, dMinStretchVal=0.0, iPerformanceMode=1, dAutoMergeTinyFacesAngle=0.5235987756, bGeomApprox=True, iNextEntityOffsetId=0))\nMeshing.SurfaceMeshing(crlPart=[Part(1)], surfaceMesh=SURFACE_MESH(dMaxElemSize=0.015, dMinElemSize=0.0005, dGeomAngle=0.7853981634, dGeomMinSize=0.0005, dMinStretchVal=0.0, iPerformanceMode=1, dAutoMergeTinyFacesAngle=0.5235987756, bGeomApprox=True, iNextEntityOffsetId=0), iThreadNum=4)\n\n')))}p.isMDXComponent=!0}}]);