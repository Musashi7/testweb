(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(i,".").concat(b)]||u[b]||s[b]||c;return n?r.a.createElement(m,d(d({ref:t},l),{},{components:n})):r.a.createElement(m,d({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=b;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<c;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(1441)),i={id:"MidPlaneEdit.AddItems.Edge.FaceTwoFace",title:"MidPlaneEdit.AddItems.Edge.FaceTwoFace()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Exent face to face"},d={unversionedId:"psj-command/midplane-edit/MidPlaneEdit.AddItems.Edge.FaceTwoFace",id:"psj-command/midplane-edit/MidPlaneEdit.AddItems.Edge.FaceTwoFace",isDocsHomePage:!1,title:"MidPlaneEdit.AddItems.Edge.FaceTwoFace()",description:"Exent face to face",source:"@site/docs\\psj-command\\midplane-edit\\MidPlaneEdit.AddItems.Edge.FaceTwoFace.md",slug:"/psj-command/midplane-edit/MidPlaneEdit.AddItems.Edge.FaceTwoFace",permalink:"/testweb/docs/psj-command/midplane-edit/MidPlaneEdit.AddItems.Edge.FaceTwoFace",version:"current",sidebar:"api",previous:{title:"MidPlane.FindMidPlane()",permalink:"/testweb/docs/psj-command/midplane/MidPlane.FindMidPlane"},next:{title:"MidPlaneEdit.AddItems.Edge.ProjectEdgeToFace()",permalink:"/testweb/docs/psj-command/midplane-edit/MidPlaneEdit.AddItems.Edge.ProjectEdgeToFace"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Exent face to face"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MidPlaneEdit.AddItems.Edge.FaceTwoFace(crRefFace=None, crExtFace=None, iExtendType=0)\n")),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-MidPlaneEdit-GeometryAddItemsEdgeExtendCylinderFace")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"MidPlaneEdit --\x3e AddItems --\x3e Edge --\x3e FaceTwoFace")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crRefFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the reference face. The default value is None.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crExtFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the extend face. The default value is None.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iExtendType"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the extend type. The default value is 0.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MidPlaneEdit.AddItems.Edge.FaceTwoFace(crRefFace=None, crExtFace=None, iExtendType=0)\n")))}p.isMDXComponent=!0}}]);