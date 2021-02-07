(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return C}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,C=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(C,i(i({ref:t},l),{},{components:n})):r.a.createElement(C,i({ref:t},l))}));function C(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},327:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(1441)),o={id:"Connections.Contacts.MSCNastran.ManualFace",title:"Connections.Contacts.MSCNastran.ManualFace()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Define contact settings between specified faces for MSC Nastran"},i={unversionedId:"psj-command/connections/Connections.Contacts.MSCNastran.ManualFace",id:"psj-command/connections/Connections.Contacts.MSCNastran.ManualFace",isDocsHomePage:!1,title:"Connections.Contacts.MSCNastran.ManualFace()",description:"Define contact settings between specified faces for MSC Nastran",source:"@site/docs\\psj-command\\connections\\Connections.Contacts.MSCNastran.ManualFace.md",slug:"/psj-command/connections/Connections.Contacts.MSCNastran.ManualFace",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.MSCNastran.ManualFace",version:"current",sidebar:"api",previous:{title:"Connections.Contacts.MSCNastran.ContactTable()",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.MSCNastran.ContactTable"},next:{title:"Connections.Contacts.MSCNastran.ManualGroup()",permalink:"/testweb/docs/psj-command/connections/Connections.Contacts.MSCNastran.ManualGroup"}},s=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create contacts of MSC Nastran Manual Face"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Connections.Contacts.MSCNastran.ManualFace(crlFaceMaster=[], crlFaceSlave=[], strName="ContactMSCNastran", nastranContact=NASTRAN_CONTACT(), crEdit=None, iColor=65280, iMethod=0)\n')),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Connections-LbcContactManualFaceMSCNastran")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Connections --\x3e Contacts --\x3e MSCNastran --\x3e ManualFace")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlFaceMaster"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the list of faces as master face. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlFaceSlave"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the list of faces as slave face. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"strName"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"String"),' specifying the contact name. The default value is "ContactMSCNastran".')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"nastranContact"))),Object(c.b)("p",null,": A {ref}",Object(c.b)("em",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"em"},"NASTRAN_CONTACT"))," specifying the Nastran contact parameters. The default value is NASTRAN",Object(c.b)("em",{parentName:"p"},"CONTACT."),Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"NASTRAN_CONTACT"}),"NASTRAN_CONTACT"),"_ specifying the Nastran contact parameters. The default value is NASTRAN_CONTACT."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the existed contact settings item to modify it instead of creating new ones. The default value is None.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iColor"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the contact color. The default value is 65280.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the contact setting method. The default value is 0.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube()\n\nGeometry.Part.Cube(dlOrigin=[0.01, 0.0, 0.0], strPartName="Cube_2", iColorPart=6409934)\n\nConnections.Contacts.MSCNastran.ManualFace(crlFaceMaster=[Face(49)], crlFaceSlave=[Face(24)], strName="ContactMSCNastran_1", nastranContact=NASTRAN_CONTACT(dRROR=0.0005), iColor=16711680)\n')))}b.isMDXComponent=!0}}]);