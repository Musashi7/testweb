(window.webpackJsonp=window.webpackJsonp||[]).push([[1006],{1085:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),i=n(7),r=(n(0),n(1441)),l={id:"Analysis.AbaqusStep.SteadyStateStep",title:"Analysis.AbaqusStep.SteadyStateStep()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create Abaqus Step - Coupled Steady State Type"},b={unversionedId:"psj-command/analysis/Analysis.AbaqusStep.SteadyStateStep",id:"psj-command/analysis/Analysis.AbaqusStep.SteadyStateStep",isDocsHomePage:!1,title:"Analysis.AbaqusStep.SteadyStateStep()",description:"Create Abaqus Step - Coupled Steady State Type",source:"@site/docs\\psj-command\\analysis\\Analysis.AbaqusStep.SteadyStateStep.md",slug:"/psj-command/analysis/Analysis.AbaqusStep.SteadyStateStep",permalink:"/testweb/docs/psj-command/analysis/Analysis.AbaqusStep.SteadyStateStep",version:"current",sidebar:"api",previous:{title:"Analysis.AbaqusStep.StaticRiskStep()",permalink:"/testweb/docs/psj-command/analysis/Analysis.AbaqusStep.StaticRiskStep"},next:{title:"Analysis.AbaqusStep.TransientStep()",permalink:"/testweb/docs/psj-command/analysis/Analysis.AbaqusStep.TransientStep"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Abaqus Steady State Step"),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Analysis.AbaqusStep.SteadyStateStep(strName, strDesp="", iAutomatic=0, iMaxInc=100, iInitSize=1, dMinSize=1.0e-5, dMaxSize=1.0, dMaxAllowTChange=DFLT_DBL, endStepTemp=ABAQUS_PAIR(), dMaxAllowEmissivityChange=0.1, iMethod=0, iMatrixStorage=0, iSolutionTech=0, iAllowedIters=8, iAdjustFactor=1, iMaxContactIter=30, iNlgeom=0, dTimePeriod=1.0, iConvertDscntIter=0, iRamp=0, iExtrapolateMethod=0, listAbaqusOutputRequest=[], crEdit=None)\n')),Object(r.b)("p",null,"Macro: {ref}",Object(r.b)("inlineCode",{parentName:"p"},"Macro-Analysis-AbaqusSteadyStateStep")),Object(r.b)("p",null,"Ribbon: {menuselection}",Object(r.b)("inlineCode",{parentName:"p"},"Analysis --\x3e AbaqusStep --\x3e SteadyStateStep")),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"strName"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"String")," specifying the Steady State step name. This is a required input.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"strDesp"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"String"),' specifying the Steady State step description. The default value is "".')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iAutomatic"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the increment method. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iMaxInc"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the maximum number of increments. The default value is 100.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iInitSize"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the initial increment size. The default value is 1.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"dMinSize"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the minimum increment size. The default value is 1.0e-5.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"dMaxSize"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the maximum increment size. The default value is 1.0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"dMaxAllowTChange"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the maximum value of the allowable temperature change. The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"endStepTemp"))),Object(r.b)("p",null,": A ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"ABAQUS_PAIR"}),"ABAQUS_PAIR"))," specifying the end step temperature information. The default value is {ref}",Object(r.b)("inlineCode",{parentName:"p"},"ABAQUS_PAIR()"),".",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"ABAQUS_PAIR()%60."}),"ABAQUS_PAIR()`."),": A "),Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"ABAQUS_PAIR"}),"ABAQUS_PAIR"),"_ specifying the end step temperature information. The default value is {ref}",Object(r.b)("inlineCode",{parentName:"p"},"ABAQUS_PAIR()"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"dMaxAllowEmissivityChange"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the maximum allowable emissivity change per increment. The default value is 0.1.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the equation solver method. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iMatrixStorage"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the equation solver matrix storage setting. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iSolutionTech"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the solution technique. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iAllowedIters"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the number of iterations allowed before the kernel matrix is reformed. The default value is 8.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iAdjustFactor"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the adjustment factor for the number of solutions in any iteration. The default value is 1.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iMaxContactIter"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the maximum number of contact iterations. The default value is 30.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iEnableNlgeom"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying whether or not to consider geometric nonlinear (large deformation) analysis. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"dTimePeriod"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the analysis time. The default value is 1.0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iConvertDscntIter"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the conversion of severe discontinuity iterations. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iRamp"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the number of linear change over step. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"iExtrapolateMethod"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the Extrapolate previous state at start of each increment. The default value is 0.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"listAbaqusOutputRequest"))),Object(r.b)("p",null,": A ",Object(r.b)("em",{parentName:"p"},"[ABAQUS_OUTPUT_REQUEST` List")," specifying the list of abaqus output request. The default value is [].](ABAQUS",Object(r.b)("em",{parentName:"p"},"OUTPUT_REQUEST` List")," specifying the list of abaqus output request. The default value is [].): A ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"ABAQUS_OUTPUT_REQUEST")," List")," specifying the list of abaqus output request. The default value is []."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor")," specifying the editing Steady State step. The default value is None.")),Object(r.b)("h2",{id:"return-code"},"Return Code"),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(r.b)("h2",{id:"sample-code"},"Sample Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Analysis.AbaqusStep.SteadyStateStep("Step1", iAutomatic=1, iRamp=1)\n')))}s.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},o=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),o=s(n),m=a,O=o["".concat(l,".").concat(m)]||o[m]||u[m]||r;return n?i.a.createElement(O,b(b({ref:t},c),{},{components:n})):i.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);