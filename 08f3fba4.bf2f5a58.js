(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(7),l=(n(0),n(1441)),i={id:"BoundaryConditions.TemperatureLoads.WholeMapping",title:"BoundaryConditions.TemperatureLoads.WholeMapping()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create mapping pressure"},p={unversionedId:"psj-command/boundary-conditions/BoundaryConditions.TemperatureLoads.WholeMapping",id:"psj-command/boundary-conditions/BoundaryConditions.TemperatureLoads.WholeMapping",isDocsHomePage:!1,title:"BoundaryConditions.TemperatureLoads.WholeMapping()",description:"Create mapping pressure",source:"@site/docs\\psj-command\\boundary-conditions\\BoundaryConditions.TemperatureLoads.WholeMapping.md",slug:"/psj-command/boundary-conditions/BoundaryConditions.TemperatureLoads.WholeMapping",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.TemperatureLoads.WholeMapping",version:"current",sidebar:"api",previous:{title:"BoundaryConditions.TemperatureLoads.NastranPunch()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.TemperatureLoads.NastranPunch"},next:{title:"Connections.BarBeam()",permalink:"/testweb/docs/psj-command/connections/Connections.BarBeam"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Create mapping pressure"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'BoundaryConditions.TemperatureLoads.WholeMapping(strName="TemperatureLoadsWholeMapping", crlTarget=[], iMAPPos=0, iViewCp=0, iCp=1, iSrcType=0, iMappedCpIndexArr0=0, iMappedCpIndexArr1=0, iDScaleFactor=1, posOffset=[0,0,0], posRotate=[0,0,0], dCorScale=1, dSearchRange=0, strPath="", crEdit=None, iMappingMethod=0, iSubmodelBCMappingType=2, iMappingFromStepNo=0, bSetADVCFile=False, strADVCResultFile="", bSetDetATol=False, dDetATol=DFLT_DBL, bSetElementSet=False, strElementSet="")\n')),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-BoundaryConditions-MappingTemperatureLoad")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"BoundaryConditions --\x3e TemperatureLoads --\x3e WholeMapping")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"strName"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "TemperatureLoadsWholeMapping".')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor List")," specifying the target. The default value is [].")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iMAPPos"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the m a p position. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iViewCp"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the view component. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iCp"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the component. The default value is 1.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iSrcType"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the source type. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iMappedCpIndexArr0"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the mapped component index arr0. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iMappedCpIndexArr1"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the mapped component index arr1. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iDScaleFactor"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the d scale factor. The default value is 1.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"posOffset"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Position")," specifying the offset. The default value is ","[0,0,0]",".")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"posRotate"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Position")," specifying the rotate. The default value is ","[0,0,0]",".")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dCorScale"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the cor scale. The default value is 1.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dSearchRange"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the search range. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"strPath"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String"),' specifying the path. The default value is "".')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iMappingMethod"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the mapping method. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iSubmodelBCMappingType"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the submodel  c mapping type. The default value is 2.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iMappingFromStepNo"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the mapping from step no. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bSetADVCFile"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," specifying the set ADVC file. The default value is False.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"strADVCResultFile"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String"),' specifying the ADVC result file. The default value is "".')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bSetDetATol"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," specifying the set det a tolerance. The default value is False.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dDetATol"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the det a tolerance. The default value is DFLT_DBL.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bSetElementSet"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," specifying the set element set. The default value is False.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"strElementSet"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String"),' specifying the element set. The default value is "".')),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'BoundaryConditions.TemperatureLoads.WholeMapping(strName="TemperatureLoadsWholeMapping", crlTarget=[], iMAPPos=0, iViewCp=0, iCp=1, iSrcType=0, iMappedCpIndexArr0=0, iMappedCpIndexArr1=0, iDScaleFactor=1, posOffset=[0,0,0], posRotate=[0,0,0], dCorScale=1, dSearchRange=0, strPath="", crEdit=None, iMappingMethod=0, iSubmodelBCMappingType=2, iMappingFromStepNo=0, bSetADVCFile=False, strADVCResultFile="", bSetDetATol=False, dDetATol=DFLT_DBL, bSetElementSet=False, strElementSet="")\n')))}c.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),c=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,d=u["".concat(i,".").concat(m)]||u[m]||s[m]||l;return n?r.a.createElement(d,p(p({ref:t},b),{},{components:n})):r.a.createElement(d,p({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var b=2;b<l;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);