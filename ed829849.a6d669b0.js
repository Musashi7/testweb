(window.webpackJsonp=window.webpackJsonp||[]).push([[1245],{1324:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(3),l=t(7),r=(t(0),t(1441)),o={id:"MeshCleanup.Manual3D.Collapse.EdgeCollapse",title:"MeshCleanup.Manual3D.Collapse.EdgeCollapse()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"collapse"},p={unversionedId:"psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.EdgeCollapse",id:"psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.EdgeCollapse",isDocsHomePage:!1,title:"MeshCleanup.Manual3D.Collapse.EdgeCollapse()",description:"collapse",source:"@site/docs\\psj-command\\mesh-clearnup\\MeshCleanup.Manual3D.Collapse.EdgeCollapse.md",slug:"/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.EdgeCollapse",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.EdgeCollapse",version:"current",sidebar:"api",previous:{title:"MeshCleanup.Manual3D.Collapse.CenterFaceCollapse()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.CenterFaceCollapse"},next:{title:"MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:c};function u(e){var n=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Collapse"),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Manual3D.Collapse.EdgeCollapse(crplElemEdge=[], crlNode=[])\n")),Object(r.b)("p",null,"Macro: {ref}",Object(r.b)("inlineCode",{parentName:"p"},"Macro-MeshCleanup-CleaunpEdgeCollapse")),Object(r.b)("p",null,"Ribbon: {menuselection}",Object(r.b)("inlineCode",{parentName:"p"},"MeshCleanup --\x3e Manual3D --\x3e Collapse --\x3e EdgeCollapse")),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"crplElemEdge"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor Pair List")," specifying the element edge. The default value is [].")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"crlNode"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor List")," specifying the node. The default value is [].")),Object(r.b)("h2",{id:"return-code"},"Return Code"),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(r.b)("h2",{id:"sample-code"},"Sample Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Manual3D.Collapse.EdgeCollapse(crplElemEdge=[], crlNode=[])\n")))}u.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=l.a.createContext({}),u=function(e){var n=l.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},i=function(e){var n=u(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},b=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=u(t),b=a,m=i["".concat(o,".").concat(b)]||i[b]||d[b]||r;return t?l.a.createElement(m,p(p({ref:n},s),{},{components:t})):l.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=t[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);