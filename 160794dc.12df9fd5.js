(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),l=(n(0),n(1441)),i={id:"Meshing.LocalRemesh.Surface",title:"Meshing.LocalRemesh.Surface()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"local surface remesh"},c={unversionedId:"psj-command/meshing/Meshing.LocalRemesh.Surface",id:"psj-command/meshing/Meshing.LocalRemesh.Surface",isDocsHomePage:!1,title:"Meshing.LocalRemesh.Surface()",description:"local surface remesh",source:"@site/docs\\psj-command\\meshing\\Meshing.LocalRemesh.Surface.md",slug:"/psj-command/meshing/Meshing.LocalRemesh.Surface",permalink:"/testweb/docs/psj-command/meshing/Meshing.LocalRemesh.Surface",version:"current",sidebar:"api",previous:{title:"Meshing.LocalRemesh.Solid()",permalink:"/testweb/docs/psj-command/meshing/Meshing.LocalRemesh.Solid"},next:{title:"Meshing.LocalSetting.SearchTargetFaces()",permalink:"/testweb/docs/psj-command/meshing/Meshing.LocalSetting.SearchTargetFaces"}},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],o={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"User can remesh on selected face."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Meshing.LocalRemesh.Surface(crlTarget, surfaceMesh, bUseSetting=True, bGrading=False, bFMesher=False, iOverrideType=1, bKeepConnection=False, bProjCAD=True, bTinyFaceMerge=False, dMinFaceWidth=0, dMaxFaceWidth=0.001, bIDcheck = False, bKeepRemeshEdge=False)\n")),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-Meshing-LocalRemeshTriQuad")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"Meshing --\x3e LocalRemesh --\x3e Surface")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor List")," specifying the target for surface remeshing. This target can be Parts, Faces, Edges, or Elements. This is a required input.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"surfaceMesh"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},Object(l.b)("a",Object(a.a)({parentName:"em"},{href:"SURFACE_MESH"}),"SURFACE_MESH"))," specifying the mesh parameter. This is a required input.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bUseSetting"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," to enable or disable the use of local setting. If this parameter is disabled (False), the existing local mesh settings will not be used. The default value is True.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bGrading"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," to enable or disable the gradation of mesh. If enabled (True), surrounding faces will be remeshed together with the seletected targets. If disabled (False), only selected targets will be remeshed. The default value is False.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bFMesher"))),Object(l.b)("p",null,": A ",Object(l.b)("em",{parentName:"p"},"Boolean")," to enable or disable the use of F-mesher. F-mesher is a mesher to create only Quad4 elements. If ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"surfaceMesh"))," is set to create Tri3 element, this options does not have any effect. The default value is False."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iOverrideType"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the mesh pattern type."),Object(l.b)("li",{parentName:"ul"},"0: IsoMesh: Create isotropic mesh (structured mesh) on selected targets, if applicable."),Object(l.b)("li",{parentName:"ul"},"1: FreeMesh: Create free mesh (unstructured mesh) on selected targets."),Object(l.b)("li",{parentName:"ul"},"The default value is 1.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bKeepConnection"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the keeping of connection (boundary conditions) after meshing. The default value is False.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bProjCAD"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) the projection of remeshed targets onto CAD models. The default value is True.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bIDcheck"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," to enable or disable ID check when projecting.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bTinyFaceMerge"))),Object(l.b)("p",null,": A ",Object(l.b)("em",{parentName:"p"},"Boolean")," to enable (True) or disable (False) the merge of tiny faces before remeshing. This option is equivalent to {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Geometry.MergeEntities.TinyFacesMerge"),". The default value is False.",Object(l.b)("em",{parentName:"p"},"[Geometry.MergeEntities.TinyFacesMerge`. The default value is False.]","(Geometry.MergeEntities.TinyFacesMerge`. The default value is False.): A _Boolean")," to enable (True) or disable (False) the merge of tiny faces before remeshing. This option is equivalent to {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Geometry.MergeEntities.TinyFacesMerge"),". The default value is False."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dMinFaceWidth"))),Object(l.b)("p",null,": A ",Object(l.b)("em",{parentName:"p"},"Double")," specifying the minimum face width. If ",Object(l.b)("inlineCode",{parentName:"p"},"bTinyFaceMerge")," is True, this parameter will be used to search for tiny faces. The default value is 0."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dMaxFaceWidth"))),Object(l.b)("p",null,": A ",Object(l.b)("em",{parentName:"p"},"Double")," specifying the maximum face width. If ",Object(l.b)("inlineCode",{parentName:"p"},"bTinyFaceMerge")," is True, this parameter will be used to search for tiny faces. The default value is 0.001."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bKeepRemeshEdge"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," to enable (True) or disable (False) thee keeping of edges created when remeshing. This option only works when selected targets are Elements 2D. If disabled, the selected elements will be separated into new faces, new edges will also be created. If enabled, new faces and edges will not be created. The default value is False.")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if succeeded, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Cube()\n\nMeshing.LocalRemesh.Surface(crlTarget=[Face(26)], surfaceMesh=SURFACE_MESH(dAvgElemSize=0.0005, dMaxElemSize=0.001, dMinElemSize=0.0001, dGeomAngle=0.7853981853, iPerformanceMode=1, dAutoMergeTinyFacesAngle=0.5235987902, bLocalRemesh=True, iNextEntityOffsetId=8985, iNextElemOffsetId=2601), bGrading=True, iOverrideType=0)\n")))}b.isMDXComponent=!0}}]);