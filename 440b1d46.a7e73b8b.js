(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,o=u(e,["components","mdxType","originalType","parentName"]),b=p(t),m=a,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||l;return t?r.a.createElement(d,i(i({ref:n},o),{},{components:t})):r.a.createElement(d,i({ref:n},o))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,c=new Array(l);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var o=2;o<l;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},429:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),l=(t(0),t(1441)),c={id:"MeshCleanup.ManualCheck.Tri",title:"MeshCleanup.ManualCheck.Tri()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Unknown Description"},i={unversionedId:"psj-command/mesh-clearnup/MeshCleanup.ManualCheck.Tri",id:"psj-command/mesh-clearnup/MeshCleanup.ManualCheck.Tri",isDocsHomePage:!1,title:"MeshCleanup.ManualCheck.Tri()",description:"Unknown Description",source:"@site/docs\\psj-command\\mesh-clearnup\\MeshCleanup.ManualCheck.Tri.md",slug:"/psj-command/mesh-clearnup/MeshCleanup.ManualCheck.Tri",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.ManualCheck.Tri",version:"current",sidebar:"api",previous:{title:"MeshCleanup.ManualCheck()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.ManualCheck"},next:{title:"MeshEdit.AdjustOrientation()",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.AdjustOrientation"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],o={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Unknown Description"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.ManualCheck.Tri(crlPart=[], nElemType=0, veQuality=0, nCheckCondition=0, dLimitValue=0.0, CFLValue=0.0, nNonManifold=0, nCleanupMode=0, crlElem=[])\n")),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-MeshCleanup-CleanupManual")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"MeshCleanup --\x3e ManualCheck --\x3e Tri")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crlPart"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor List")," specifying the part. The default value is [].")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"nElemType"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"N_ELEM_TYPE")," specifying the element type. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"veQuality"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"VE_QUALITY")," specifying the quality. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"nCheckCondition"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"N_CHECK_CONDITION")," specifying the check condition. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dLimitValue"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the limit value. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"CFLValue"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"CFLVALUE")," specifying the  l value. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"nNonManifold"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"N_NON_MANIFOLD")," specifying the non manifold. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"nCleanupMode"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"N_CLEANUP_MODE")," specifying the cleanup mode. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crlElem"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor List")," specifying the element. The default value is [].")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.ManualCheck.Tri(crlPart=[], nElemType=0, veQuality=0, nCheckCondition=0, dLimitValue=0.0, CFLValue=0.0, nNonManifold=0, nCleanupMode=0, crlElem=[])\n")))}p.isMDXComponent=!0}}]);