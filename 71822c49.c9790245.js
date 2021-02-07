(window.webpackJsonp=window.webpackJsonp||[]).push([[581],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(l,".").concat(m)]||b[m]||u[m]||s;return t?r.a.createElement(d,i(i({ref:n},c),{},{components:t})):r.a.createElement(d,i({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},660:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),s=(t(0),t(1441)),l={id:"Analysis.Nastran.ModalTransientResponse",title:"Analysis.Nastran.ModalTransientResponse()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Export Nastran Modal Transient Response"},i={unversionedId:"psj-command/analysis/Analysis.Nastran.ModalTransientResponse",id:"psj-command/analysis/Analysis.Nastran.ModalTransientResponse",isDocsHomePage:!1,title:"Analysis.Nastran.ModalTransientResponse()",description:"Export Nastran Modal Transient Response",source:"@site/docs\\psj-command\\analysis\\Analysis.Nastran.ModalTransientResponse.md",slug:"/psj-command/analysis/Analysis.Nastran.ModalTransientResponse",permalink:"/testweb/docs/psj-command/analysis/Analysis.Nastran.ModalTransientResponse",version:"current",sidebar:"api",previous:{title:"Analysis.Nastran.ModalFrequencyResponse()",permalink:"/testweb/docs/psj-command/analysis/Analysis.Nastran.ModalFrequencyResponse"},next:{title:"Analysis.Nastran.NormalModes()",permalink:"/testweb/docs/psj-command/analysis/Analysis.Nastran.NormalModes"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:o};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("p",null,"Export Nastran Modal Transient Response"),Object(s.b)("h2",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Analysis.Nastran.ModalTransientResponse(strName="Job_1", strDescription="", crlTarget=[], nastranAnalysis=NASTRAN_ANALYSIS(), bDummyPropAutoAssign=False, iDummyPropMaterialID=0, crEdit=None, strPath="", iModelCheckAnswer=0, iDeleteSlaveNodesAnswer=0)\n')),Object(s.b)("p",null,"Macro: {ref}",Object(s.b)("inlineCode",{parentName:"p"},"Macro-Analysis-Nastran_ModalTransientResponse")),Object(s.b)("p",null,"Ribbon: {menuselection}",Object(s.b)("inlineCode",{parentName:"p"},"Analysis --\x3e Nastran --\x3e ModalTransientResponse")),Object(s.b)("h2",{id:"inputs"},"Inputs"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strName"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "Job_1".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strDescription"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the description. The default value is "".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Cursor List")," specifying the target. The default value is [].")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"nastranAnalysis"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"NASTRAN_ANALYSIS")," specifying the nastran analysis data structure. The default value is NASTRAN_ANALYSIS().")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"bDummyPropAutoAssign"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Boolean")," specifying the dummy property auto assign. The default value is False.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"iDummyPropMaterialID"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("em",{parentName:"li"},"Integer")," specifying the dummy property material ID. The default value is 0.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"strPath"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"String"),' specifying the path. The default value is "".')),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"iModelCheckAnswer"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("em",{parentName:"li"},"Integer")," specifying the model check answer. The default value is 0.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"iDeleteSlaveNodesAnswer"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("em",{parentName:"li"},"Integer")," specifying the delete slave nodes answer. The default value is 0.")),Object(s.b)("h2",{id:"return-code"},"Return Code"),Object(s.b)("p",null,"An ",Object(s.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(s.b)("h2",{id:"sample-code"},"Sample Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Analysis.Nastran.ModalTransientResponse(strName="Job_1", strDescription="", crlTarget=[], nastranAnalysis=NASTRAN_ANALYSIS(), bDummyPropAutoAssign=False, iDummyPropMaterialID=0, crEdit=None, strPath="", iModelCheckAnswer=0, iDeleteSlaveNodesAnswer=0)\n')))}p.isMDXComponent=!0}}]);