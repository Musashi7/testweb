(window.webpackJsonp=window.webpackJsonp||[]).push([[1342],{1421:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return i}));var a=t(3),r=t(7),l=(t(0),t(1441)),p={id:"MeshCleanup.Manual2D.Swap",title:"MeshCleanup.Manual2D.Swap()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Swap Element Edge"},c={unversionedId:"psj-command/mesh-clearnup/MeshCleanup.Manual2D.Swap",id:"psj-command/mesh-clearnup/MeshCleanup.Manual2D.Swap",isDocsHomePage:!1,title:"MeshCleanup.Manual2D.Swap()",description:"Swap Element Edge",source:"@site/docs\\psj-command\\mesh-clearnup\\MeshCleanup.Manual2D.Swap.md",slug:"/psj-command/mesh-clearnup/MeshCleanup.Manual2D.Swap",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual2D.Swap",version:"current",sidebar:"api",previous:{title:"MeshCleanup.Manual2D.SplitElement.QuadToTrans4Quads()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual2D.SplitElement.QuadToTrans4Quads"},next:{title:"MeshCleanup.Manual3D.Collapse.CenterFaceCollapse()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.CenterFaceCollapse"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:o};function i(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Swap Element Edge"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Manual2D.Swap(crplElemEdge=[])\n")),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-MeshCleanup-SwapElemEdge")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"MeshCleanup --\x3e Manual2D --\x3e Swap")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crplElemEdge"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor Pair List")," specifying the element edge. The default value is [].")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Manual2D.Swap(crplElemEdge=[])\n")))}i.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),i=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=i(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=i(t),m=a,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||l;return t?r.a.createElement(b,c(c({ref:n},u),{},{components:t})):r.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var u=2;u<l;u++)p[u]=t[u];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);