(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),i=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=i(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||p;return n?o.a.createElement(d,s(s({ref:t},l),{},{components:n})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<p;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},714:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return i}));var r=n(3),o=n(7),p=(n(0),n(1441)),a={id:"Post.ImportResults.ImportOp2Mesh",title:"Post.ImportResults.ImportOp2Mesh()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"import Nastran op2 mesh"},s={unversionedId:"psj-command/post/Post.ImportResults.ImportOp2Mesh",id:"psj-command/post/Post.ImportResults.ImportOp2Mesh",isDocsHomePage:!1,title:"Post.ImportResults.ImportOp2Mesh()",description:"import Nastran op2 mesh",source:"@site/docs\\psj-command\\post\\Post.ImportResults.ImportOp2Mesh.md",slug:"/psj-command/post/Post.ImportResults.ImportOp2Mesh",permalink:"/testweb/docs/psj-command/post/Post.ImportResults.ImportOp2Mesh",version:"current",sidebar:"api",previous:{title:"Post.ImportResults.HDF5Mesh()",permalink:"/testweb/docs/psj-command/post/Post.ImportResults.HDF5Mesh"},next:{title:"Post.ImportResults.ImportTsdbMesh()",permalink:"/testweb/docs/psj-command/post/Post.ImportResults.ImportTsdbMesh"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:c};function i(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"description"},"Description"),Object(p.b)("p",null,"Import Nastran op2 mesh"),Object(p.b)("h2",{id:"syntax"},"Syntax"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Post.ImportResults.ImportOp2Mesh(strlFilePaths, iImportType=0, dFaceAngle=60.0, dEdgeAngle=60.0)\n")),Object(p.b)("p",null,"Macro: {ref}",Object(p.b)("inlineCode",{parentName:"p"},"Macro-Post-ImportOp2Mesh")),Object(p.b)("p",null,"Ribbon: {menuselection}",Object(p.b)("inlineCode",{parentName:"p"},"Post --\x3e ImportResults --\x3e ImportOp2Mesh")),Object(p.b)("h2",{id:"inputs"},"Inputs"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"strong"},"strlFilePaths"))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"A ",Object(p.b)("em",{parentName:"li"},"String List")," specifying the file paths. This is a required input.")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"strong"},"iImportType"))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"An ",Object(p.b)("em",{parentName:"li"},"Integer")," specifying the import type. The default value is 0.")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"strong"},"dFaceAngle"))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"A ",Object(p.b)("em",{parentName:"li"},"Double")," specifying the face angle. The default value is 60.0.")),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"strong"},"dEdgeAngle"))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"A ",Object(p.b)("em",{parentName:"li"},"Double")," specifying the edge angle. The default value is 60.0.")),Object(p.b)("h2",{id:"return-code"},"Return Code"),Object(p.b)("p",null,"An ",Object(p.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(p.b)("h2",{id:"sample-code"},"Sample Code"),Object(p.b)("pre",null,Object(p.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Post.ImportResults.ImportOp2Mesh(strlFilePaths, iImportType=0, dFaceAngle=60.0, dEdgeAngle=60.0)\n")))}i.isMDXComponent=!0}}]);