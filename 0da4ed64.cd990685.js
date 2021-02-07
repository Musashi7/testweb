(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{142:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return p})),a.d(n,"toc",(function(){return c})),a.d(n,"default",(function(){return u}));var t=a(3),l=a(7),r=(a(0),a(1441)),o={id:"MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse",title:"MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"mash cleanup by manual for half edge collapse"},p={unversionedId:"psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse",id:"psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse",isDocsHomePage:!1,title:"MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse()",description:"mash cleanup by manual for half edge collapse",source:"@site/docs\\psj-command\\mesh-clearnup\\MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse.md",slug:"/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse",version:"current",sidebar:"api",previous:{title:"MeshCleanup.Manual3D.Collapse.EdgeCollapse()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.Collapse.EdgeCollapse"},next:{title:"MeshCleanup.Manual3D.CreateHex()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Manual3D.CreateHex"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:c};function u(e){var n=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},s,a,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Mash cleanup by manual for half edge collapse"),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse(crplElemEdge)\n")),Object(r.b)("p",null,"Macro: {ref}",Object(r.b)("inlineCode",{parentName:"p"},"Macro-MeshCleanup-CleanupHalfEdgeCollapse")),Object(r.b)("p",null,"Ribbon: {menuselection}",Object(r.b)("inlineCode",{parentName:"p"},"MeshCleanup --\x3e Manual3D --\x3e Collapse --\x3e HalfEdgeCollapse")),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"crplElemEdge"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor Pair List")," specifying the element edge. This is a required input.")),Object(r.b)("h2",{id:"return-code"},"Return Code"),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(r.b)("h2",{id:"sample-code"},"Sample Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.Manual3D.Collapse.HalfEdgeCollapse(crplElemEdge)\n")))}u.isMDXComponent=!0},1441:function(e,n,a){"use strict";a.d(n,"a",(function(){return i})),a.d(n,"b",(function(){return m}));var t=a(0),l=a.n(t);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),u=function(e){var n=l.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},i=function(e){var n=u(e.components);return l.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},b=l.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=u(a),b=t,m=i["".concat(o,".").concat(b)]||i[b]||d[b]||r;return a?l.a.createElement(m,p(p({ref:n},s),{},{components:a})):l.a.createElement(m,p({ref:n},s))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=b;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return l.a.createElement.apply(null,o)}return l.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);