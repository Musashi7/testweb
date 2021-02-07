(window.webpackJsonp=window.webpackJsonp||[]).push([[1253],{1332:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(3),r=t(7),i=(t(0),t(1441)),l={id:"Analysis.TSSS.LinearBuckling",title:"Analysis.TSSS.LinearBuckling()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Export TechnoStar SunShine Linear Buckling solver file (SOL 105)"},c={unversionedId:"psj-command/analysis/Analysis.TSSS.LinearBuckling",id:"psj-command/analysis/Analysis.TSSS.LinearBuckling",isDocsHomePage:!1,title:"Analysis.TSSS.LinearBuckling()",description:"Export TechnoStar SunShine Linear Buckling solver file (SOL 105)",source:"@site/docs\\psj-command\\analysis\\Analysis.TSSS.LinearBuckling.md",slug:"/psj-command/analysis/Analysis.TSSS.LinearBuckling",permalink:"/testweb/docs/psj-command/analysis/Analysis.TSSS.LinearBuckling",version:"current",sidebar:"api",previous:{title:"Analysis.Permas.Job()",permalink:"/testweb/docs/psj-command/analysis/Analysis.Permas.Job"},next:{title:"Analysis.TSSS.LinearStatic()",permalink:"/testweb/docs/psj-command/analysis/Analysis.TSSS.LinearStatic"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:o};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This method exports the Input Deck for TechnoStar SunShine Linear Buckling analysis (SOL 105)."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Analysis.TSSS.LinearBuckling(strName="Job_1", strDescription="", crlTarget=[],\n    nastranAnalysis=NASTRAN_ANALYSIS(), crEdit=None, strPath="",\n    iModelCheckAnswer=0, iDeleteSlaveNodesAnswer=0)\n')),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Analysis-SunShine-LinearBuckling")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Analysis --\x3e SunShine --\x3e Linear Buckling(SOL 105)")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strName")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the job name of TechnoStar SunShine solver. Output set by this name will be saved in the Assembly tree."),Object(i.b)("li",{parentName:"ul"},'The default value is "Job_1".')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strDescription")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the description of TechnoStar SunShine solver job."),Object(i.b)("li",{parentName:"ul"},'The default value is "".')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crlTarget")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the list of target part."),Object(i.b)("li",{parentName:"ul"},"The default value is [] (all parts in the model).")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"nastranAnalysis")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Nastran Analysis")," specifying the TechnoStar SunShine solver input parameter.")),Object(i.b)("p",null,": The default value is ",Object(i.b)("em",{parentName:"p"},"[NASTRAN_ANALYSIS`()"),".](NASTRAN",Object(i.b)("em",{parentName:"p"},"ANALYSIS`()"),".): The default value is ",Object(i.b)("em",{parentName:"p"},"{ref}",Object(i.b)("inlineCode",{parentName:"em"},"NASTRAN_ANALYSIS"),"()"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crEdit")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying the created TechnoStar SunShine solver job. If this parameter is used, the value will be DynamisJob(",Object(i.b)("em",{parentName:"li"},"ID"),"), where ",Object(i.b)("em",{parentName:"li"},"ID")," is the ID of the solver job had been created. If it is left ",Object(i.b)("em",{parentName:"li"},"None"),", a new TechnoStar solver job will be created."),Object(i.b)("li",{parentName:"ul"},"The default value is ",Object(i.b)("em",{parentName:"li"},"None"),".")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strPath")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the export location for bdf file."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iModelCheckAnswer")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the model checking option."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"iDeleteSlaveNodesAnswer")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the deleting slave nodes option."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube(dlLength=[0.01, 0.001, 0.01], ilNodeCnt=[10, 2, 10], iColorPart=14905456)\nMeshing.SolidMeshing(crlPart=[Part(1)], bTet10=True, dGradingFactor=1.05,\n    dStretchLimit=0.1, iSpeedVsQual=1, iRegion=1, bSafeMode=False, \n    iParallel=12, bInternalMeshOnly=False, iPartColor=65280)\n\nBoundaryConditions.FixedConstraint(crlTarget=[Face(25)])\nBoundaryConditions.Pressure.General(dFpressure=10000000.0, dlDirection=[0.0, 0.0, -1.0], \n    crlTarget=[Face(26)])\n\nProperties.Material.Add("Structural_Steel", [Density([(DENSITY, 7.849999999999999e-09)]),\n    Elastic([(YOUNGS_MODULUS, 200000.0), (POISSONS_RATIO, 0.3)])])\nProperties.Solid(crMaterial=Material(1), dDynaRemeshVal1=DFLT_DBL,\n    dDynaRemeshVal2=DFLT_DBL, dDispHG=DFLT_DBL, crlTarget=[Part(1)], iFLG=-1)\n\ninput_param = NASTRAN_ANALYSIS(iSolverType=6, iGridFormatType=1, dEpsilon=DFLT_DBL,\n    iMaxNumOfIter=DFLT_INT, iNumberOfThreads=1, iMemory=2, iNcpu=1, iSolNo=105,\n    nastranOutputRequest=NASTRAN_OUTPUT_REQUEST(iTypeStress=0, iTypeStrain=0),\n    nastranNonlinear=NASTRAN_NONLINEAR(bUseEPSW=True))\nAnalysis.TSSS.LinearBuckling(nastranAnalysis = input_param, strPath="C:/temp/Job_1.bdf")\n\n\n')))}b.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(t),m=a,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.a.createElement(d,c(c({ref:n},s),{},{components:t})):r.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);