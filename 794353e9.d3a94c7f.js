(window.webpackJsonp=window.webpackJsonp||[]).push([[603],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return n?o.a.createElement(m,a(a({ref:t},s),{},{components:n})):o.a.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},682:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),i=(n(0),n(1441)),c={id:"Meshing.CADProjection.NodeToEdge",title:"Meshing.CADProjection.NodeToEdge()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"CadProject for Node to Edge"},a={unversionedId:"psj-command/meshing/Meshing.CADProjection.NodeToEdge",id:"psj-command/meshing/Meshing.CADProjection.NodeToEdge",isDocsHomePage:!1,title:"Meshing.CADProjection.NodeToEdge()",description:"CadProject for Node to Edge",source:"@site/docs\\psj-command\\meshing\\Meshing.CADProjection.NodeToEdge.md",slug:"/psj-command/meshing/Meshing.CADProjection.NodeToEdge",permalink:"/testweb/docs/psj-command/meshing/Meshing.CADProjection.NodeToEdge",version:"current",sidebar:"api",previous:{title:"Meshing.CADProjection.FaceToFace()",permalink:"/testweb/docs/psj-command/meshing/Meshing.CADProjection.FaceToFace"},next:{title:"Meshing.CADProjection.NodeToFace()",permalink:"/testweb/docs/psj-command/meshing/Meshing.CADProjection.NodeToFace"}},d=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Project selected noode to selected CAD Edge"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Meshing.CADProjection.NodeToEdge(crCadEdge, crlMeshedNode, iDirection=0)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Meshing-CadProject_NodeToEdge")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Meshing --\x3e CADProjection --\x3e NodeToEdge")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crCadEdge"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying the CAD Edges. These Edges will be the reference edges for projection. This is a required input.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crlMeshedNode"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the Meshed Nodes. These Nodes will be projected onto the reference edges. This is a required input.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iDirection"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the direction for projection.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cylinder(iPartCol=12603072)\nMeshing.SetMeshAttribute(crlPart=[Part(1)], surfaceMesh=SURFACE_MESH(dAvgElemSize=0.004, dMaxElemSize=0.015, dMinElemSize=0.0005, dGeomAngle=0.7853981634, dGeomMinSize=0.0005, dMinStretchVal=0.0, iPerformanceMode=1, dAutoMergeTinyFacesAngle=0.5235987756, bGeomApprox=True, iNextEntityOffsetId=0))\nMeshing.SurfaceMeshing(crlPart=[Part(1)], surfaceMesh=SURFACE_MESH(dAvgElemSize=0.004, dMaxElemSize=0.015, dMinElemSize=0.0005, dGeomAngle=0.7853981634, dGeomMinSize=0.0005, dMinStretchVal=0.0, iPerformanceMode=1, dAutoMergeTinyFacesAngle=0.5235987756, bGeomApprox=True, iNextEntityOffsetId=0), iThreadNum=4)\nMeshing.SolidMeshing(crlPart=[Part(1)], bTet10=True, dGradingFactor=1.05, dStretchLimit=0.1, iSpeedVsQual=1, iRegion=1, bSafeMode=False, iParallel=4, bInternalMeshOnly=False, iPartColor=65280)\ntargetn=MainWindow.RightClick.AssociatedPick(crlInput=[Edge(1)], strTarget="Node")\nMeshing.CADProjection.NodeToEdge(crCadEdge=RefEdge(1), crlMeshedNode=targetn)\n\n')))}l.isMDXComponent=!0}}]);