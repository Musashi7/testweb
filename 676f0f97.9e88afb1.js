(window.webpackJsonp=window.webpackJsonp||[]).push([[523],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||c;return t?r.a.createElement(d,i(i({ref:n},b),{},{components:t})):r.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},599:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(1441)),o={id:"Connections.MPC.General.FacesToFaces",title:"Connections.MPC.General.FacesToFaces()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Unknown Description"},i={unversionedId:"psj-command/connections/Connections.MPC.General.FacesToFaces",id:"psj-command/connections/Connections.MPC.General.FacesToFaces",isDocsHomePage:!1,title:"Connections.MPC.General.FacesToFaces()",description:"Unknown Description",source:"@site/docs\\psj-command\\connections\\Connections.MPC.General.FacesToFaces.md",slug:"/psj-command/connections/Connections.MPC.General.FacesToFaces",permalink:"/testweb/docs/psj-command/connections/Connections.MPC.General.FacesToFaces",version:"current",sidebar:"api",previous:{title:"Connections.MPC.Equation.TwoFace()",permalink:"/testweb/docs/psj-command/connections/Connections.MPC.Equation.TwoFace"},next:{title:"Connections.MPC.General.NodeToAny()",permalink:"/testweb/docs/psj-command/connections/Connections.MPC.General.NodeToAny"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Unknown Description"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.MPC.General.FacesToFaces(strName="MPC_1", crlMaster=[], crlSlave=[], listMpcConnection=[], dSearchTol=0.0, dValue=0.0, iMPCType=0, iSearchType=1, iCoordSys=0, bUpdateDispCS=True, crEdit=None)\n')),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Connections-Mpc")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Connections --\x3e MPC --\x3e General --\x3e FacesToFaces")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"strName"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "MPC_1".')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlMaster"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the master. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlSlave"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the slave. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"listMpcConnection"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"MPC_CONNECTION List")," specifying the mpc connection. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dSearchTol"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the search tolerance. The default value is 0.0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dValue"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the value. The default value is 0.0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iMPCType"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the MPC type. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iSearchType"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the search type. The default value is 1.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iCoordSys"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the coordinate system. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"bUpdateDispCS"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Boolean")," specifying the update displacement coordinate system. The default value is True.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.MPC.General.FacesToFaces(strName="MPC_1", crlMaster=[], crlSlave=[], listMpcConnection=[], dSearchTol=0.0, dValue=0.0, iMPCType=0, iSearchType=1, iCoordSys=0, bUpdateDispCS=True, crEdit=None)\n')))}p.isMDXComponent=!0}}]);