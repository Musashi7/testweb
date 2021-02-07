(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||s[d]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(1441)),i={id:"Connections.MPC.Equation.MultiNodes",title:"Connections.MPC.Equation.MultiNodes()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Unknown Description"},c={unversionedId:"psj-command/connections/Connections.MPC.Equation.MultiNodes",id:"psj-command/connections/Connections.MPC.Equation.MultiNodes",isDocsHomePage:!1,title:"Connections.MPC.Equation.MultiNodes()",description:"Unknown Description",source:"@site/docs\\psj-command\\connections\\Connections.MPC.Equation.MultiNodes.md",slug:"/psj-command/connections/Connections.MPC.Equation.MultiNodes",permalink:"/testweb/docs/psj-command/connections/Connections.MPC.Equation.MultiNodes",version:"current",sidebar:"api",previous:{title:"Connections.GapsDetail()",permalink:"/testweb/docs/psj-command/connections/Connections.GapsDetail"},next:{title:"Connections.MPC.Equation.SemiAuto()",permalink:"/testweb/docs/psj-command/connections/Connections.MPC.Equation.SemiAuto"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Unknown Description"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Connections.MPC.Equation.MultiNodes(strName="MPC_1", crlMaster=[], crlSlave=[], listMpcConnection=[], dSearchTol=0.0, dValue=0.0, iMPCType=0, iSearchType=1, iCoordSys=0, bUpdateDispCS=True, crEdit=None)\n')),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Connections-Mpc")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Connections --\x3e MPC --\x3e Equation --\x3e MultiNodes")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"strName"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "MPC_1".')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlMaster"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the master. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlSlave"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the slave. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"listMpcConnection"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"MPC_CONNECTION List")," specifying the mpc connection. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dSearchTol"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the search tolerance. The default value is 0.0.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dValue"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the value. The default value is 0.0.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iMPCType"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the MPC type. The default value is 0.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iSearchType"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the search type. The default value is 1.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iCoordSys"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the coordinate system. The default value is 0.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"bUpdateDispCS"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Boolean")," specifying the update displacement coordinate system. The default value is True.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Connections.MPC.Equation.MultiNodes(strName="MPC_1", crlMaster=[], crlSlave=[], listMpcConnection=[], dSearchTol=0.0, dValue=0.0, iMPCType=0, iSearchType=1, iCoordSys=0, bUpdateDispCS=True, crEdit=None)\n')))}p.isMDXComponent=!0}}]);