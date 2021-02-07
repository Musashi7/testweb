(window.webpackJsonp=window.webpackJsonp||[]).push([[1275],{1354:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(1441)),l={id:"Connections.Contacts.NXNastran.ContactShareFace",title:"Connections.Contacts.NXNastran.ContactShareFace()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create Contact NXNastran Contact Share Face"},i={unversionedId:"psj-command/connections/Connections.Contacts.NXNastran.ContactShareFace",id:"psj-command/connections/Connections.Contacts.NXNastran.ContactShareFace",isDocsHomePage:!1,title:"Connections.Contacts.NXNastran.ContactShareFace()",description:"Create Contact NXNastran Contact Share Face",source:"@site/docs\\psj-command\\connections\\Connections.Contacts.NXNastran.ContactShareFace.md",slug:"/psj-command/connections/Connections.Contacts.NXNastran.ContactShareFace",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.NXNastran.ContactShareFace",version:"current",sidebar:"api",previous:{title:"Connections.Contacts.NXNastran.ContactGroupByMatrix()",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.NXNastran.ContactGroupByMatrix"},next:{title:"Connections.Contacts.NXNastran.ContactTable()",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.NXNastran.ContactTable"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create Contact NXNastran Contact Share Face"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.Contacts.NXNastran.ContactShareFace(crlShareFace=[], strName="ContactNXNastran_1", iContactType=0, iContactAlg=0, dNorPenFactor=10, dTanPenFactor=1, dForceConTol=0.01, dMaxForceIter=10, dMaxStaIter=20, dChangeNum=0.02, dMinContactPer=100, iShellThickness=0, iContactStatus=0, iInitGapPenetra=0, iRegionRefine=0, iEvaluPts=1, dMinSearDist=0, dMaxSearDist=0.01, dFricCoef=0, dSearchDist=0, dPenatlyFactor=0, iShellOffset=0, iColor=0, iMethod=3, crEdit=None)\n')),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Connections-LbcContactShareFaceNxNastran")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Connections --\x3e Contacts --\x3e NXNastran --\x3e ContactShareFace")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlShareFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the share face. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"strName"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "ContactNXNastran_1".')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iContactType"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the contact type. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iContactAlg"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the contact algorithm. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dNorPenFactor"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the nor pen factor. The default value is 10.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dTanPenFactor"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the tan pen factor. The default value is 1.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dForceConTol"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the force con tolerance. The default value is 0.01.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dMaxForceIter"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the maximum force iterator. The default value is 10.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dMaxStaIter"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the maximum sta iterator. The default value is 20.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dChangeNum"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the change number. The default value is 0.02.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dMinContactPer"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the minimum contact per. The default value is 100.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iShellThickness"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the shell thickness. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iContactStatus"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the contact status. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iInitGapPenetra"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the initial gap penetra. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iRegionRefine"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the region refine. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iEvaluPts"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the evalu pts. The default value is 1.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dMinSearDist"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the minimum sear dist. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dMaxSearDist"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the maximum sear dist. The default value is 0.01.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dFricCoef"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the fric coefficient . The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dSearchDist"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the search dist. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dPenatlyFactor"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the penatly factor. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iShellOffset"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the shell offset. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iColor"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the color. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the method. The default value is 3.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.Contacts.NXNastran.ContactShareFace(crlShareFace=[], strName="ContactNXNastran_1", iContactType=0, iContactAlg=0, dNorPenFactor=10, dTanPenFactor=1, dForceConTol=0.01, dMaxForceIter=10, dMaxStaIter=20, dChangeNum=0.02, dMinContactPer=100, iShellThickness=0, iContactStatus=0, iInitGapPenetra=0, iRegionRefine=0, iEvaluPts=1, dMinSearDist=0, dMaxSearDist=0.01, dFricCoef=0, dSearchDist=0, dPenatlyFactor=0, iShellOffset=0, iColor=0, iMethod=3, crEdit=None)\n')))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,O=s["".concat(l,".").concat(m)]||s[m]||u[m]||c;return n?r.a.createElement(O,i(i({ref:t},b),{},{components:n})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);