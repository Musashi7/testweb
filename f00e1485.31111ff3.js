(window.webpackJsonp=window.webpackJsonp||[]).push([[1260],{1339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),i=(n(0),n(1441)),c={id:"MeshEdit.MoveNode.CoincidentNodes",title:"MeshEdit.MoveNode.CoincidentNodes()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Coincident Nodes"},a={unversionedId:"psj-command/mesh-edit/MeshEdit.MoveNode.CoincidentNodes",id:"psj-command/mesh-edit/MeshEdit.MoveNode.CoincidentNodes",isDocsHomePage:!1,title:"MeshEdit.MoveNode.CoincidentNodes()",description:"Coincident Nodes",source:"@site/docs\\psj-command\\mesh-edit\\MeshEdit.MoveNode.CoincidentNodes.md",slug:"/psj-command/mesh-edit/MeshEdit.MoveNode.CoincidentNodes",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.MoveNode.CoincidentNodes",version:"current",sidebar:"api",previous:{title:"MeshEdit.MoveNode.CADFollows()",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.MoveNode.CADFollows"},next:{title:"MeshEdit.MoveNode.Equalize()",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.MoveNode.Equalize"}},d=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:d};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Coincident Nodes"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"MeshEdit.MoveNode.CoincidentNodes(crlNode=[], dTol=0.01, bDesOrder=False)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-MeshEdit-Coincident_Nodes")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"MeshEdit --\x3e MoveNode --\x3e CoincidentNodes")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crlNode"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the node. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dTol"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the tolerance. The default value is 0.01.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bDesOrder"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the des order. The default value is False.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"MeshEdit.MoveNode.CoincidentNodes(crlNode=[], dTol=0.01, bDesOrder=False)\n")))}l.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,a(a({ref:t},s),{},{components:n})):r.a.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=b;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);