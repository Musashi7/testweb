(window.webpackJsonp=window.webpackJsonp||[]).push([[605],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=l.a.createContext({}),o=function(e){var t=l.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return l.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=o(n),j=a,m=u["".concat(b,".").concat(j)]||u[j]||s[j]||i;return n?l.a.createElement(m,c(c({ref:t},p),{},{components:n})):l.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=j;var c={};for(var r in t)hasOwnProperty.call(t,r)&&(c[r]=t[r]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var p=2;p<i;p++)b[p]=n[p];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},684:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return r})),n.d(t,"default",(function(){return o}));var a=n(3),l=n(7),i=(n(0),n(1441)),b={id:"Connections.Contacts.ADVC.ContactGroupByMatrix",title:"Connections.Contacts.ADVC.ContactGroupByMatrix()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"create ADVC contact Group By Matrix"},c={unversionedId:"psj-command/connections/Connections.Contacts.ADVC.ContactGroupByMatrix",id:"psj-command/connections/Connections.Contacts.ADVC.ContactGroupByMatrix",isDocsHomePage:!1,title:"Connections.Contacts.ADVC.ContactGroupByMatrix()",description:"create ADVC contact Group By Matrix",source:"@site/docs\\psj-command\\connections\\Connections.Contacts.ADVC.ContactGroupByMatrix.md",slug:"/psj-command/connections/Connections.Contacts.ADVC.ContactGroupByMatrix",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.ADVC.ContactGroupByMatrix",version:"current",sidebar:"api",previous:{title:"Connections.Contacts.ADVC.ContactClearance()",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.ADVC.ContactClearance"},next:{title:"Connections.Contacts.ADVC.ContactShareFace()",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.ADVC.ContactShareFace"}},r=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:r};function o(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Create ADVC contact Group By Matrix"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.Contacts.ADVC.ContactGroupByMatrix(strName="ContactADVC", iContactType=0, iSlidingType=0, iInitialState=0, dInitialStateTol=DFLT_DBL, dKineticFrictionCoef=DFLT_DBL, dExponentialCoef=DFLT_DBL, iBehavior=0, dClearance=DFLT_DBL, iAdjust2Clearance=0, dInterference=DFLT_DBL, iAdjust2Interference=0, iAutoShrink=0, iAdvAdjust=0, dAdjustValue=DFLT_DBL, dFrictionCoef=DFLT_DBL, dMaxShear=DFLT_DBL, dElasticSlip=DFLT_DBL, dSlipTolerance=DFLT_DBL, dSearchWidth=DFLT_DBL, dSearchGap=DFLT_DBL, dSearchDepth=DFLT_DBL, dCritialPenetration=DFLT_DBL, iEstimationImpactTime=0, iFormula=0, iConstraintType=0, iDataType=0, iTypeId=0, bTemperatureDependency=False, iNumDependencies=0, tshTableClearance=[], bStabilized=0, iStabilizeType=0, dResidualFactor=DFLT_DBL, dEffectiveDist=DFLT_DBL, dCN=DFLT_DBL, dCT=DFLT_DBL, crlClearance=[], crplTarget=[], crEdit=None, dSearchAngle=DFLT_DBL, iConstraintTypeExplicit=0, dPenaltyFact=DFLT_DBL, dPenaltyFactExplicit=DFLT_DBL, iColor=16711680, iAlg=0, iMethod=0)\n')),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Connections-LbcContactAdvc_ContactGroupByMatrix")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Connections --\x3e Contacts --\x3e ADVC --\x3e ContactGroupByMatrix")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"strName"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "ContactADVC".')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iContactType"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the contact type. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iSlidingType"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the sliding type. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iInitialState"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the initial state. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dInitialStateTol"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the initial state tolerance. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dKineticFrictionCoef"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the kinetic friction coefficient . The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dExponentialCoef"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the exponential coefficient . The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iBehavior"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the behavior. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dClearance"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the clearance. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iAdjust2Clearance"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the adjust2 clearance. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dInterference"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the interference. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iAdjust2Interference"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the adjust2 interference. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iAutoShrink"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the auto shrink. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iAdvAdjust"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the adv adjust. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dAdjustValue"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the adjust value. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dFrictionCoef"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the friction coefficient . The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dMaxShear"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the maximum shear. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dElasticSlip"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the elastic slip. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dSlipTolerance"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the slip tolerance. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dSearchWidth"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the search width. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dSearchGap"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the search gap. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dSearchDepth"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the search depth. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dCritialPenetration"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the critial penetration. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iEstimationImpactTime"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the estimation impact time. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iFormula"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the formula. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iConstraintType"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the constraint type. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iDataType"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the data type. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iTypeId"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the type ID. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bTemperatureDependency"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the temperature dependency. The default value is False.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iNumDependencies"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the number dependencies. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"tshTableClearance"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Table Sheet")," specifying the table clearance. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bStabilized"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the stabilized. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iStabilizeType"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the stabilize type. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dResidualFactor"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the residual factor. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dEffectiveDist"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the effective dist. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dCN"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the c n. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dCT"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the c t. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crlClearance"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the clearance. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crplTarget"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor Pair List")," specifying the target. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dSearchAngle"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the search angle. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iConstraintTypeExplicit"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the constraint type explicit. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dPenaltyFact"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the penalty fact. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dPenaltyFactExplicit"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the penalty fact explicit. The default value is DFLT_DBL.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iColor"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the color. The default value is 16711680.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iAlg"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the algorithm. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the method. The default value is 0.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.Contacts.ADVC.ContactGroupByMatrix(strName="ContactADVC", iContactType=0, iSlidingType=0, iInitialState=0, dInitialStateTol=DFLT_DBL, dKineticFrictionCoef=DFLT_DBL, dExponentialCoef=DFLT_DBL, iBehavior=0, dClearance=DFLT_DBL, iAdjust2Clearance=0, dInterference=DFLT_DBL, iAdjust2Interference=0, iAutoShrink=0, iAdvAdjust=0, dAdjustValue=DFLT_DBL, dFrictionCoef=DFLT_DBL, dMaxShear=DFLT_DBL, dElasticSlip=DFLT_DBL, dSlipTolerance=DFLT_DBL, dSearchWidth=DFLT_DBL, dSearchGap=DFLT_DBL, dSearchDepth=DFLT_DBL, dCritialPenetration=DFLT_DBL, iEstimationImpactTime=0, iFormula=0, iConstraintType=0, iDataType=0, iTypeId=0, bTemperatureDependency=False, iNumDependencies=0, tshTableClearance=[], bStabilized=0, iStabilizeType=0, dResidualFactor=DFLT_DBL, dEffectiveDist=DFLT_DBL, dCN=DFLT_DBL, dCT=DFLT_DBL, crlClearance=[], crplTarget=[], crEdit=None, dSearchAngle=DFLT_DBL, iConstraintTypeExplicit=0, dPenaltyFact=DFLT_DBL, dPenaltyFactExplicit=DFLT_DBL, iColor=16711680, iAlg=0, iMethod=0)\n')))}o.isMDXComponent=!0}}]);