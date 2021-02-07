(window.webpackJsonp=window.webpackJsonp||[]).push([[1010],{1089:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var r=t(3),i=t(7),a=(t(0),t(1441)),o={id:"Connections.SpringsDampers.Spring.OneToOne.differentDoFs",title:"Connections.SpringsDampers.Spring.OneToOne.differentDoFs()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Spring connection One to One different DOFs"},c={unversionedId:"psj-command/connections/Connections.SpringsDampers.Spring.OneToOne.differentDoFs",id:"psj-command/connections/Connections.SpringsDampers.Spring.OneToOne.differentDoFs",isDocsHomePage:!1,title:"Connections.SpringsDampers.Spring.OneToOne.differentDoFs()",description:"Spring connection One to One different DOFs",source:"@site/docs\\psj-command\\connections\\Connections.SpringsDampers.Spring.OneToOne.differentDoFs.md",slug:"/psj-command/connections/Connections.SpringsDampers.Spring.OneToOne.differentDoFs",permalink:"/testweb/docs/psj-command/connections/Connections.SpringsDampers.Spring.OneToOne.differentDoFs",version:"current",sidebar:"api",previous:{title:"Connections.SpringsDampers.Spring.Nodeswithtolerance.sameDoFs()",permalink:"/testweb/docs/psj-command/connections/Connections.SpringsDampers.Spring.Nodeswithtolerance.sameDoFs"},next:{title:"Connections.SpringsDampers.Spring.OneToOne.sameDoFs()",permalink:"/testweb/docs/psj-command/connections/Connections.SpringsDampers.Spring.OneToOne.sameDoFs"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Spring connection One to One different DOFs"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Connections.SpringsDampers.Spring.OneToOne.differentDoFs(iMethod=0, strName="SPRING", crlMasterTarget=[], crlSlaveTarget=[], crCoordSys=None, iSpringType=0, iGround=0, dTolerance=0.0, iDirection=0, iDistributeMode=0, iDof1=0, iDof2=0, dDampCoef=DFLT_DBL, dStressCoef=DFLT_DBL, posTStiffness=[0,0,0], posRStiffness=[0,0,0], bUpdateDispCS=True, crEdit=None)\n')),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-Connections-SpringOneToOneDOFs")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"Connections --\x3e SpringsDampers --\x3e Spring --\x3e OneToOne --\x3e differentDoFs")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the method. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strName"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "SPRING".')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlMasterTarget"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor List")," specifying the master target. The default value is [].")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlSlaveTarget"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor List")," specifying the slave target. The default value is [].")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crCoordSys"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the coordinate system. The default value is None.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iSpringType"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the spring type. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iGround"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the ground. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dTolerance"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the tolerance. The default value is 0.0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iDirection"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the direction. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iDistributeMode"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the distribute mode. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iDof1"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the dof1. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iDof2"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the dof2. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dDampCoef"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the damp coefficient . The default value is DFLT_DBL.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dStressCoef"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the stress coefficient . The default value is DFLT_DBL.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"posTStiffness"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Position")," specifying the t stiffness. The default value is ","[0,0,0]",".")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"posRStiffness"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Position")," specifying the r stiffness. The default value is ","[0,0,0]",".")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"bUpdateDispCS"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying the update displacement coordinate system. The default value is True.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Connections.SpringsDampers.Spring.OneToOne.differentDoFs(iMethod=0, strName="SPRING", crlMasterTarget=[], crlSlaveTarget=[], crCoordSys=None, iSpringType=0, iGround=0, dTolerance=0.0, iDirection=0, iDistributeMode=0, iDof1=0, iDof2=0, dDampCoef=DFLT_DBL, dStressCoef=DFLT_DBL, posTStiffness=[0,0,0], posRStiffness=[0,0,0], bUpdateDispCS=True, crEdit=None)\n')))}b.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),i=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},O=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),O=r,m=s["".concat(o,".").concat(O)]||s[O]||u[O]||a;return t?i.a.createElement(m,c(c({ref:n},p),{},{components:t})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=O;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);