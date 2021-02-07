(window.webpackJsonp=window.webpackJsonp||[]).push([[1222],{1301:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),o=(n(0),n(1441)),i={id:"Connections.SpringsDampers.Bush.OnetoOne",title:"Connections.SpringsDampers.Bush.OnetoOne()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create bush connection"},l={unversionedId:"psj-command/connections/Connections.SpringsDampers.Bush.OnetoOne",id:"psj-command/connections/Connections.SpringsDampers.Bush.OnetoOne",isDocsHomePage:!1,title:"Connections.SpringsDampers.Bush.OnetoOne()",description:"Create bush connection",source:"@site/docs\\psj-command\\connections\\Connections.SpringsDampers.Bush.OnetoOne.md",slug:"/psj-command/connections/Connections.SpringsDampers.Bush.OnetoOne",permalink:"/testweb/docs/psj-command/connections/Connections.SpringsDampers.Bush.OnetoOne",version:"current",sidebar:"api",previous:{title:"Connections.SpringsDampers.Bush.AnyEntities()",permalink:"/testweb/docs/psj-command/connections/Connections.SpringsDampers.Bush.AnyEntities"},next:{title:"Connections.SpringsDampers.Bush.TwoNodes()",permalink:"/testweb/docs/psj-command/connections/Connections.SpringsDampers.Bush.TwoNodes"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Create bush connection"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Connections.SpringsDampers.Bush.OnetoOne(iMethod=21, strName="BUSH_1", crlMaster=[], crlSlave=[], crCoord=None, dTol=DFLT_DBL, iGround=0, iOriMode=0, iEqual=1, poslVector=[], dlStiffness=[], dlDampCoef=[], dlDampConst=[], dRotStrain=DFLT_DBL, dTransStrain=DFLT_DBL, dRotStress=DFLT_DBL, dTransStress=DFLT_DBL, crEditObj=None)\n')),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Connections-ConnBush_OnetoOne")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Connections --\x3e SpringsDampers --\x3e Bush --\x3e OnetoOne")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the method. The default value is 21.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"strName"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "BUSH_1".')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlMaster"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the master. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlSlave"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the slave. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crCoord"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the coordinate. The default value is None.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dTol"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the tolerance. The default value is DFLT_DBL.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iGround"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the ground. The default value is 0.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iOriMode"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the ori mode. The default value is 0.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iEqual"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the equal. The default value is 1.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"poslVector"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Position List")," specifying the vector. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dlStiffness"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double List")," specifying the stiffness. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dlDampCoef"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double List")," specifying the damp coefficient . The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dlDampConst"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double List")," specifying the damp const. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dRotStrain"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the rotation strain. The default value is DFLT_DBL.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dTransStrain"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the trans strain. The default value is DFLT_DBL.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dRotStress"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the rotation stress. The default value is DFLT_DBL.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dTransStress"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the trans stress. The default value is DFLT_DBL.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crEditObj"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the edit object. The default value is None.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Connections.SpringsDampers.Bush.OnetoOne(iMethod=21, strName="BUSH_1", crlMaster=[], crlSlave=[], crCoord=None, dTol=DFLT_DBL, iGround=0, iOriMode=0, iEqual=1, poslVector=[], dlStiffness=[], dlDampCoef=[], dlDampConst=[], dRotStrain=DFLT_DBL, dTransStrain=DFLT_DBL, dRotStress=DFLT_DBL, dTransStress=DFLT_DBL, crEditObj=None)\n')))}s.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),O=r,m=p["".concat(i,".").concat(O)]||p[O]||u[O]||o;return n?a.a.createElement(m,l(l({ref:t},b),{},{components:n})):a.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);