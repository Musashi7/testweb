(window.webpackJsonp=window.webpackJsonp||[]).push([[971],{1050:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(1441)),l={id:"SplitElement",title:"SplitElement",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/mesh-clearnup/SplitElement",id:"macro/mesh-clearnup/SplitElement",isDocsHomePage:!1,title:"SplitElement",description:"Description",source:"@site/docs\\macro\\mesh-clearnup\\Macro-Mesh-Cleanup-SplitElement.md",slug:"/macro/mesh-clearnup/SplitElement",permalink:"/testweb/docs/macro/mesh-clearnup/SplitElement",version:"current",sidebar:"api",previous:{title:"MC_Mesh_Quality_Auto_Check_TriQuad",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_TriQuad"},next:{title:"SwapElemEdge",permalink:"/testweb/docs/macro/mesh-clearnup/SwapElemEdge"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Split Element"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"SplitElement(cursor[] taElems, cursor datum0, cursor datum1, int iMethod, bool bAutoExecute, bool AutoTransition, bool bCADProject, bool bMergeNodes)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor[]\nTarget element cursor(","[11:Element ID]",")"),Object(c.b)("p",null,"2",".","  Cursor\nN/A: datum0 = 0:0"),Object(c.b)("p",null,"3",".","  Cursor\nN/A: datum1 = 0:0"),Object(c.b)("p",null,"4",".","  Int\nN/A: Method = 0"),Object(c.b)("p",null,"5",".","  Bool\nAuto execution bool flag True = 1, False = 0"),Object(c.b)("p",null,"6",".","  Bool\nAuto transition bool flag True = 1, False = 0"),Object(c.b)("p",null,"7",".","  Bool\nCAD Projection bool flag True = 1, False = 0"),Object(c.b)("p",null,"8",".","  Bool\nMerge Nodes bool flag True = 1, False = 0"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"SplitElement([11:1090], 0:0, 0:0, 0, 1, 0, 0, 1)\n")))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(l,".").concat(m)]||s[m]||b[m]||c;return n?o.a.createElement(d,a(a({ref:t},i),{},{components:n})):o.a.createElement(d,a({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var i=2;i<c;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);