(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return n?r.a.createElement(d,c(c({ref:t},o),{},{components:n})):r.a.createElement(d,c({ref:t},o))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<s;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},929:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return i}));var a=n(3),r=n(7),s=(n(0),n(1441)),l={id:"Assemble.AssembleFaces",title:"Assemble.AssembleFaces()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Assemble AssembleFaces"},c={unversionedId:"psj-command/assemble/Assemble.AssembleFaces",id:"psj-command/assemble/Assemble.AssembleFaces",isDocsHomePage:!1,title:"Assemble.AssembleFaces()",description:"Assemble AssembleFaces",source:"@site/docs\\psj-command\\assemble\\Assemble.AssembleFaces.md",slug:"/psj-command/assemble/Assemble.AssembleFaces",permalink:"/testweb/docs/psj-command/assemble/Assemble.AssembleFaces",version:"current",sidebar:"api",previous:{title:"Assemble.AssembleFace()",permalink:"/testweb/docs/psj-command/assemble/Assemble.AssembleFace"},next:{title:"Assemble.Boolean()",permalink:"/testweb/docs/psj-command/assemble/Assemble.Boolean"}},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],o={toc:b};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"description"},"Description"),Object(s.b)("p",null,"Assemble AssembleFaces"),Object(s.b)("h2",{id:"syntax"},"Syntax"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Assemble.AssembleFaces(ilPairFaceToMakeShareFace=[], dTolerance=0.1, iTypeConnectPos=1, bUseSnapInput=False, dSnapTolerance=0.005, bFitEdge=False)\n")),Object(s.b)("p",null,"Macro: {ref}",Object(s.b)("inlineCode",{parentName:"p"},"Macro-Assemble-Assemble_Faces")),Object(s.b)("p",null,"Ribbon: {menuselection}",Object(s.b)("inlineCode",{parentName:"p"},"Assemble --\x3e AssembleFaces")),Object(s.b)("h2",{id:"inputs"},"Inputs"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"ilPairFaceToMakeShareFace"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Integer List")," specifying the pair face to make share face. The default value is [].")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"dTolerance"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Double")," specifying the tolerance. The default value is 0.1.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"iTypeConnectPos"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"An ",Object(s.b)("em",{parentName:"li"},"Integer")," specifying the type connect position. The default value is 1.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"bUseSnapInput"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Boolean")," specifying the use snap input. The default value is False.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"dSnapTolerance"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Double")," specifying the snap tolerance. The default value is 0.005.")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},Object(s.b)("inlineCode",{parentName:"strong"},"bFitEdge"))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A ",Object(s.b)("em",{parentName:"li"},"Boolean")," specifying the fit edge. The default value is False.")),Object(s.b)("h2",{id:"return-code"},"Return Code"),Object(s.b)("p",null,"An ",Object(s.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(s.b)("h2",{id:"sample-code"},"Sample Code"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"Assemble.AssembleFaces(ilPairFaceToMakeShareFace=[], dTolerance=0.1, iTypeConnectPos=1, bUseSnapInput=False, dSnapTolerance=0.005, bFitEdge=False)\n")))}i.isMDXComponent=!0}}]);