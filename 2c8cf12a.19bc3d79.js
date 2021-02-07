(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=o(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},314:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),s=(n(0),n(1441)),i={id:"Analysis.Ansys.Steady",title:"Analysis.Ansys.Steady()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Export the Ansys Steady Static Heat Transfer solver file."},l={unversionedId:"psj-command/analysis/Analysis.Ansys.Steady",id:"psj-command/analysis/Analysis.Ansys.Steady",isDocsHomePage:!1,title:"Analysis.Ansys.Steady()",description:"Export the Ansys Steady Static Heat Transfer solver file.",source:"@site/docs\\psj-command\\analysis\\Analysis.Ansys.Steady.md",slug:"/psj-command/analysis/Analysis.Ansys.Steady",permalink:"/testweb/docs/psj-command/analysis/Analysis.Ansys.Steady",version:"current",sidebar:"api",previous:{title:"Analysis.Ansys.NormalModes()",permalink:"/testweb/docs/psj-command/analysis/Analysis.Ansys.NormalModes"},next:{title:"Analysis.ExportAbaqus()",permalink:"/testweb/docs/psj-command/analysis/Analysis.ExportAbaqus"}},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("p",null,"Create and export Ansys job for Steady Heat Transfer"),Object(s.b)("h2",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Analysis.Ansys.Steady(strName, strAnsysJobName="Job1", strAnsysJobDescription="", ansysAnalysisBasic=BASIC(), bRunAPDL=False, bWriteResultDB=False, iLoadCaseId=0, ansysAnalysisSteadyStatic=STEADY_STATIC(), strAnsysVersion="", strCommandLineOption="", bOutputSOLVE=False, crEdit=None, strFileName="")\n')),Object(s.b)("p",null,"Macro: {ref}",Object(s.b)("inlineCode",{parentName:"p"},"Macro-Analysis-Ansys_SteadyHeatTransfer")),Object(s.b)("p",null,"Ribbon: {menuselection}",Object(s.b)("inlineCode",{parentName:"p"},"Analysis --\x3e Ansys --\x3e Steady")),Object(s.b)("h2",{id:"inputs"},"Inputs"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strName"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String")," specifying the job name of Ansys analysis. This is a required input.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strAnsysJobName"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the the name of Ansys Steady Static Heat Transfer analysis. The default value is "Job1".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strJobName"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the description for new Ansys analysis. The default value is "".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"ansysAnalysisBasic"))),Object(s.b)("p",null,":  A ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"BASIC"}),"BASIC"))," specifying the Ansys Analysis - Linear Static Structure input parameter. The default value is {ref}",Object(s.b)("inlineCode",{parentName:"p"},"BASIC()"),".",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"BASIC()%60."}),"BASIC()`."),":  A "),Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"BASIC"}),"BASIC"),"_ specifying the Ansys Analysis - Linear Static Structure input parameter. The default value is {ref}",Object(s.b)("inlineCode",{parentName:"p"},"BASIC()"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"bRunAPDL"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Boolean")," enable/disalbe the option that running Ansys Parametric Design Language (APDL). The default value is False.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"bWriteResultDB"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Boolean")," enable/disalbe the option that write result database. The default value is False.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"iLoadCaseId"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("em",{parentName:"li"},"Integer")," specifying the load case identify number . The default value is 0.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"ansysAnalysisSteadyStatic"))),Object(s.b)("p",null,":  A ",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"STEADY_STATIC"}),"STEADY_STATIC"))," specifying the Ansys Analysis - Steady Static Heat Transfer input parameter. The default value is {ref}",Object(s.b)("inlineCode",{parentName:"p"},"STEADY_STATIC()"),".",Object(s.b)("em",{parentName:"p"},Object(s.b)("a",Object(a.a)({parentName:"em"},{href:"STEADY_STATIC()%60."}),"STEADY_STATIC()`."),":  A "),Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"STEADY_STATIC"}),"STEADY_STATIC"),"_ specifying the Ansys Analysis - Steady Static Heat Transfer input parameter. The default value is {ref}",Object(s.b)("inlineCode",{parentName:"p"},"STEADY_STATIC()"),"."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strAnsysVersion"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the Ansys Version information. The default value is "".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strCommandLineOption"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the Command Line Option information. The default value is "".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"bOutputSOLVE"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Boolean")," enable/disalbe SOLVE command write out. The default value is False.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Cursor")," specifying the editing ansys job. The default value is None.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strFileName"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the exporting path for .dat file. The default value is "".')),Object(s.b)("h2",{id:"return-code"},"Return Code"),Object(s.b)("p",null,"An ",Object(s.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(s.b)("h2",{id:"sample-code"},"Sample Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube()\n\nAnalysis.Ansys.Steady("Job1", ansysAnalysisBasic=BASIC(dTimeStepSize=1.0, dMinTimeStep=1.0), iLoadCaseId=1, ansysAnalysisSteadyStatic=STEADY_STATIC(bSteadyStaticMemorySave=True), strFileName="C:/Job1.dat")\n')))}o.isMDXComponent=!0}}]);