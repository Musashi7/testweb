(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=l,O=u["".concat(r,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(O,o(o({ref:t},b),{},{components:n})):a.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var b=2;b<i;b++)r[b]=n[b];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},178:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var l=n(3),a=n(7),i=(n(0),n(1441)),r={id:"Home.ImportCAD.Elysium",title:"Home.ImportCAD.Elysium()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Import CAD - Elysium"},o={unversionedId:"psj-command/home/Home.ImportCAD.Elysium",id:"psj-command/home/Home.ImportCAD.Elysium",isDocsHomePage:!1,title:"Home.ImportCAD.Elysium()",description:"Import CAD - Elysium",source:"@site/docs\\psj-command\\home\\Home.ImportCAD.Elysium.md",slug:"/psj-command/home/Home.ImportCAD.Elysium",permalink:"/testweb/docs/psj-command/home/Home.ImportCAD.Elysium",version:"current",sidebar:"api",previous:{title:"Home.FullScreen()",permalink:"/testweb/docs/psj-command/home/Home.FullScreen"},next:{title:"Home.ImportCAD.Parasolid()",permalink:"/testweb/docs/psj-command/home/Home.ImportCAD.Parasolid"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Import CAD file by Elysium interface."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-python"}),"Home.ImportCAD.Elysium(strlPath, dChordHeightTolerance=1.0, dAngleToleranceDegree=5.0,\n    dPointCoincidentTolerance=0.01, iConvertIsolatedCurve=0, iDekCleanselfintersectingloop=2,\n    iDekVolumetopart=4, iIgesFixedcurvepreference=0, iIgesAutostitch=1, dIgesStitchtolerance=0.1,\n    iCatiaConvertnotshownelement=0, iCatiaConvertnotshowninstance=0, iCatiaConvertaxis=1,\n    iStepCreateseam=1, dStepPointtolerance=0.0, iAcisHealacisbeforeversion=0, iJtConvertgeometrytype=1,\n    bFaceColor=False, iJtConvertgeneralpart=1, iJtConvertaxis=1, iJtConvertcenterline=0)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Home-Import Elysium")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Home --\x3e Import CAD --\x3e Elysium")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strlPath")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String List")," specifying the list of the paths of the CAD files."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dChordHeightTolerance")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the maximum distance from the actual surface to the facet face. The smaller the Chord Height, the smaller the facets and the more accurate the curvature of the surface is represented."),Object(i.b)("li",{parentName:"ul"},"The default value is 1.0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dAngleToleranceDegree")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the angle tolerance which influences the tessellation of curves with relatively small radii in comparison to the overall size of the CAD model."),Object(i.b)("li",{parentName:"ul"},"The default value is 5.0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dPointCoincidentTolerance")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the tolerance which influences the detection of coincident (connected) parts."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.01.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iConvertIsolatedCurve")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the convert isolated curve option."),Object(i.b)("li",{parentName:"ul"},"The default value is 0."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iDekCleanselfintersectingloop")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that detects and eliminates loops that are self-intersecting at vertex locations."),Object(i.b)("li",{parentName:"ul"},"0: Disable cleaning."),Object(i.b)("li",{parentName:"ul"},"2: Detect and eliminate self-intersecting loops at vertex locations."),Object(i.b)("li",{parentName:"ul"},"3: Detect and eliminate self-intersecting loops."),Object(i.b)("li",{parentName:"ul"},"The default value is 2.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iDekVolumetopart")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the number of volumes to part."),Object(i.b)("li",{parentName:"ul"},"The default value is 4.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iIgesFixedcurvepreference")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the calculation method of the trim curve. Using for IGES CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Value in IGES file"),Object(i.b)("li",{parentName:"ul"},"1: 2D Curve"),Object(i.b)("li",{parentName:"ul"},"2: 3D Curve"),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iIgesAutostitch")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that control (on/off) filling the gaps of the IGES file without a topology. Using for IGES CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dIgesStitchtolerance")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the tolerance for filling the gaps. Using for IGES CAD type."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iCatiaConvertnotshownelement")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that controls the conversion of hidden elements. Using for CATIA CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iCatiaConvertnotshowninstance")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that controls the conversion of hidden instances. Using for CATIA CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iCatiaConvertaxis")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that controls the conversion of coordinate systems. Using for CATIA CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iStepCreateseam")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that creates seam to topologies without an outer loop. Using for STEP CAD type."),Object(i.b)("li",{parentName:"ul"},"0: No Seam"),Object(i.b)("li",{parentName:"ul"},"1: Dependent on CAD"),Object(i.b)("li",{parentName:"ul"},"2: Add Seam"),Object(i.b)("li",{parentName:"ul"},"The default value is 1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"dStepPointtolerance")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the tolerance to check the same point. Using for STEP CAD type."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iAcisHealacisbeforeversion")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option using healing function. Using for ACIS CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iJtConvertgeometrytype")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the target element type for conversion. Using for JT CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: Brep"),Object(i.b)("li",{parentName:"ul"},"The default value is 1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"bFaceColor")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," enable/disable using color information."),Object(i.b)("li",{parentName:"ul"},"The default value is False.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iJtConvertgeneralpart")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that control the conversion of the General Part types. Using for JT CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iJtConvertaxis")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that control the conversion of coordinate systems. Using for JT CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 1.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iJtConvertcenterline")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the option that control the conversion of the center line. Using for JT CAD type."),Object(i.b)("li",{parentName:"ul"},"0: Off"),Object(i.b)("li",{parentName:"ul"},"1: On"),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if succeed, or 0 if fail."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-python"}),'Home.ImportCAD.Elysium(strlPath=[JPT.GetProgramPath() + "SampleData\\\\CAD_Model\\\\RectangleBar.stp"],\n    dPointCoincidentTolerance=0.0, iDekCleanselfintersectingloop=1, iDekVolumetopart=0.1, \n    iIgesAutostitch=0, dIgesStitchtolerance=1.0, iCatiaConvertnotshownelement=1, \n    iCatiaConvertaxis=0, iStepCreateseam=2, dStepPointtolerance=1.0, iAcisHealacisbeforeversion=1,\n    iJtConvertgeometrytype=0, iJtConvertgeneralpart=2, iJtConvertaxis=0.01, iJtConvertcenterline=4)\n\n')))}p.isMDXComponent=!0}}]);