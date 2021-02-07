(window.webpackJsonp=window.webpackJsonp||[]).push([[1081],{1160:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),i=(t(0),t(1441)),l={id:"Analysis.TSSolver.ModalTransientResponse",title:"Analysis.TSSolver.ModalTransientResponse()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Export TechnoStar Modal Transient Response solver file (SOL 112)"},o={unversionedId:"psj-command/analysis/Analysis.TSSolver.ModalTransientResponse",id:"psj-command/analysis/Analysis.TSSolver.ModalTransientResponse",isDocsHomePage:!1,title:"Analysis.TSSolver.ModalTransientResponse()",description:"Export TechnoStar Modal Transient Response solver file (SOL 112)",source:"@site/docs\\psj-command\\analysis\\Analysis.TSSolver.ModalTransientResponse.md",slug:"/psj-command/analysis/Analysis.TSSolver.ModalTransientResponse",permalink:"/testweb/docs/psj-command/analysis/Analysis.TSSolver.ModalTransientResponse",version:"current",sidebar:"api",previous:{title:"Analysis.TSSolver.ModalFrequencyResponse()",permalink:"/testweb/docs/psj-command/analysis/Analysis.TSSolver.ModalFrequencyResponse"},next:{title:"Analysis.TSSolver.NonlinearFrequency()",permalink:"/testweb/docs/psj-command/analysis/Analysis.TSSolver.NonlinearFrequency"}},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This method exports the Input Deck for TechnoStar Modal Transient Response analysis (SOL 112)."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Analysis.TSSolver.ModalTransientResponse(strName="", strDescription="", crlTarget=[],\n    nastranAnalysis=NASTRAN_ANALYSIS(), crEdit=None, strPath="")\n')),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Analysis-TSSolver-ModalTransientResponse")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Analysis --\x3e TS-Solver --\x3e Modal Transient Response(SOL 112)")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strName")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the job name of TechnoStar solver.  Output set by this name will be saved in the Assembly tree."),Object(i.b)("li",{parentName:"ul"},'The default value is "Job_1".')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strDescription")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the description of TechnoStar solver job."),Object(i.b)("li",{parentName:"ul"},'The default value is "".')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crlTarget")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying list of target part."),Object(i.b)("li",{parentName:"ul"},"The default value is [] (all parts in the model).")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"nastranAnalysis")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Nastran Analysis")," specifying the TechnoStar solver input parameter.")),Object(i.b)("p",null,": The default value is ",Object(i.b)("em",{parentName:"p"},"[NASTRAN_ANALYSIS`()"),".](NASTRAN",Object(i.b)("em",{parentName:"p"},"ANALYSIS`()"),".): The default value is ",Object(i.b)("em",{parentName:"p"},"{ref}",Object(i.b)("inlineCode",{parentName:"em"},"NASTRAN_ANALYSIS"),"()"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"crEdit")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying the created TechnoStar solver job. If this parameter is used, the value will be DynamisJob(",Object(i.b)("em",{parentName:"li"},"ID"),"), where ",Object(i.b)("em",{parentName:"li"},"ID")," is the ID of the solver job had been created. If it is left ",Object(i.b)("em",{parentName:"li"},"None"),", a new TechnoStar solver job will be created."),Object(i.b)("li",{parentName:"ul"},"The default value is ",Object(i.b)("em",{parentName:"li"},"None"),".")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strPath")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the export location for bdf file."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube(iColorPart=12603072)\nMeshing.SolidMeshing(crlPart=[Part(1)], bTet10=True, dGradingFactor=1.05,\n    dStretchLimit=0.1, iSpeedVsQual=1, iRegion=1, bSafeMode=False,\n    iParallel=12, bInternalMeshOnly=False, iPartColor=65280)\n\nProperties.Material.Add("Structural_Steel", [Density([(DENSITY, 7.849999999999999e-09)]),\n    Elastic([(YOUNGS_MODULUS, 200000.0), (POISSONS_RATIO, 0.3)])])\nProperties.Solid(crMaterial=Material(1), dDynaRemeshVal1=DFLT_DBL,\n    dDynaRemeshVal2=DFLT_DBL, dDispHG=DFLT_DBL, crlTarget=[Part(1)], iFLG=-1)\n\nBoundaryConditions.FixedConstraint(crlTarget=[Face(25)])\nBoundaryConditions.Pressure.General(dFpressure=10.0, dlDirection=[0.0, 0.0, -1.0],\n    crlTarget=[Face(26)])\n\ninput_param = NASTRAN_ANALYSIS(iSolverType=3, iGridFormatType=1, dEpsilon=DFLT_DBL, \n    iMaxNumOfIter=DFLT_INT, iMemory=1024, iSolNo=112,\n    nastranEigen=NASTRAN_EIGEN(dStartFreq=0.0, dEndFreq=10.0, ioOfModes=10),\n    nastranFreqTimestep=NASTRAN_FREQ_TIMESTEP(iDampingType=1),\n    nastranOutputRequest=NASTRAN_OUTPUT_REQUEST(iValueAcceleration=DFLT_INT, iValueVelocity=DFLT_INT,\n    iTypeStress=0, iTypeStrain=0),\n    nastranNonlinear=NASTRAN_NONLINEAR(bUseEPSW=True))\nAnalysis.TSSolver.ModalTransientResponse(nastranAnalysis= input_param, strPath="C:/temp/Job_1.bdf")\n\n\n')))}p.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||i;return t?a.a.createElement(m,o(o({ref:n},c),{},{components:t})):a.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);