(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),b=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||s[u]||i;return n?o.a.createElement(m,a(a({ref:t},d),{},{components:n})):o.a.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var d=2;d<i;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},515:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),i=(n(0),n(1441)),c={id:"MeshEdit.MoveNode.AlongDirection",title:"MeshEdit.MoveNode.AlongDirection()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:null},a={unversionedId:"psj-command/mesh-edit/MeshEdit.MoveNode.AlongDirection",id:"psj-command/mesh-edit/MeshEdit.MoveNode.AlongDirection",isDocsHomePage:!1,title:"MeshEdit.MoveNode.AlongDirection()",description:"Description",source:"@site/docs\\psj-command\\mesh-edit\\MeshEdit.MoveNode.AlongDirection.md",slug:"/psj-command/mesh-edit/MeshEdit.MoveNode.AlongDirection",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.MoveNode.AlongDirection",version:"current",sidebar:"api",previous:{title:"MeshEdit.MoveNode.AlongCylinder()",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.MoveNode.AlongCylinder"},next:{title:"MeshEdit.MoveNode.AlongEdge()",permalink:"/testweb/docs/psj-command/mesh-edit/MeshEdit.MoveNode.AlongEdge"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],d={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MeshEdit.MoveNode.AlongDirection(crlNode=[], crElem=None, crFace=None, vecDirection=[0,0,0], dMagnitude=0.0, bDestination=False)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-MeshEdit-NodeMovedByDirection")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"MeshEdit --\x3e MoveNode --\x3e AlongDirection")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crlNode"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the node. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crElem"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying the element. The default value is None.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crFace"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying the face. The default value is None.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"vecDirection"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Vector")," specifying the direction. The default value is ","[0,0,0]",".")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dMagnitude"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the magnitude. The default value is 0.0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bDestination"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the destination. The default value is False.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MeshEdit.MoveNode.AlongDirection(crlNode=[], crElem=None, crFace=None, vecDirection=[0,0,0], dMagnitude=0.0, bDestination=False)\n")))}b.isMDXComponent=!0}}]);