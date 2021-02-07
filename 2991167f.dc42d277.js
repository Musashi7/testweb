(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),l=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=l.a.createContext({}),u=function(e){var n=l.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return l.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},d=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,b=s["".concat(o,".").concat(d)]||s[d]||m[d]||a;return t?l.a.createElement(b,c(c({ref:n},p),{},{components:t})):l.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},298:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var r=t(3),l=t(7),a=(t(0),t(1441)),o={id:"MeshCleanup.Element.SolidElement",title:"MeshCleanup.Element.SolidElement()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Change Topology for Solid Element"},c={unversionedId:"psj-command/mesh-clearnup/MeshCleanup.Element.SolidElement",id:"psj-command/mesh-clearnup/MeshCleanup.Element.SolidElement",isDocsHomePage:!1,title:"MeshCleanup.Element.SolidElement()",description:"Change Topology for Solid Element",source:"@site/docs\\psj-command\\mesh-clearnup\\MeshCleanup.Element.SolidElement.md",slug:"/psj-command/mesh-clearnup/MeshCleanup.Element.SolidElement",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Element.SolidElement",version:"current",sidebar:"api",previous:{title:"MeshCleanup.CorrectModel()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.CorrectModel"},next:{title:"MeshCleanup.Element.SurfaceElement()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Element.SurfaceElement"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:i};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Change Topology for Solid Element"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Element.SolidElement(crlElem, crPart=None)\n")),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-MeshCleanup-ChangeTopoSolidElem")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"MeshCleanup --\x3e Element --\x3e SolidElement")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlElem"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor List")," specifying the element. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crPart"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the part. The default value is None.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Element.SolidElement(crlElem, crPart=None)\n")))}u.isMDXComponent=!0}}]);