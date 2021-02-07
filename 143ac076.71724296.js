(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,m=s["".concat(c,".").concat(u)]||s[u]||b[u]||i;return n?a.a.createElement(m,d(d({ref:t},l),{},{components:n})):a.a.createElement(m,d({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,c[1]=d;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return d})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(1441)),c={id:"MidPlaneEdit.Face.EdgesToEdges",title:"MidPlaneEdit.Face.EdgesToEdges()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"add face by edges"},d={unversionedId:"psj-command/midplane-edit/MidPlaneEdit.Face.EdgesToEdges",id:"psj-command/midplane-edit/MidPlaneEdit.Face.EdgesToEdges",isDocsHomePage:!1,title:"MidPlaneEdit.Face.EdgesToEdges()",description:"add face by edges",source:"@site/docs\\psj-command\\midplane-edit\\MidPlaneEdit.Face.EdgesToEdges.md",slug:"/psj-command/midplane-edit/MidPlaneEdit.Face.EdgesToEdges",permalink:"/testweb/docs/psj-command/midplane-edit/MidPlaneEdit.Face.EdgesToEdges",version:"current",sidebar:"api",previous:{title:"MidPlaneEdit.ExtendFace.PlanarFace()",permalink:"/testweb/docs/psj-command/midplane-edit/MidPlaneEdit.ExtendFace.PlanarFace"},next:{title:"MidPlaneEdit.Face.FaceExtendToIntersection()",permalink:"/testweb/docs/psj-command/midplane-edit/MidPlaneEdit.Face.FaceExtendToIntersection"}},o=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Add face by edges"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MidPlaneEdit.Face.EdgesToEdges(crlEdge, bImprint=False, bMultiEdges=False)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-MidPlaneEdit-GeometryAddItemFaceByEdges")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"MidPlaneEdit --\x3e Face --\x3e EdgesToEdges")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crlEdge"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the edge. This is a required input.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bImprint"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the imprint. The default value is False.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bMultiEdges"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the multi edges. The default value is False.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MidPlaneEdit.Face.EdgesToEdges(crlEdge, bImprint=False, bMultiEdges=False)\n")))}p.isMDXComponent=!0}}]);