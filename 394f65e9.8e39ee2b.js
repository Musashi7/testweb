(window.webpackJsonp=window.webpackJsonp||[]).push([[299],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),o=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=o(n),d=a,m=s["".concat(p,".").concat(d)]||s[d]||u[d]||r;return n?i.a.createElement(m,l(l({ref:t},b),{},{components:n})):i.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,p[1]=l;for(var b=2;b<r;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},375:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),i=n(7),r=(n(0),n(1441)),p={title:"Data Type",sidebar_label:"Overview",id:"data-type",description:"All data types used in PSJ.",keywords:["PSJ","data","type","python"]},l={unversionedId:"data-type",id:"data-type",isDocsHomePage:!1,title:"Data Type",description:"All data types used in PSJ.",source:"@site/docs\\data-type.md",slug:"/data-type",permalink:"/testweb/docs/data-type",version:"current",sidebar_label:"Overview",sidebar:"api",previous:{title:"PSJ Structure",permalink:"/testweb/docs/api"},next:{title:"Built-in Types",permalink:"/testweb/docs/data-type/psj-command/built-in-types"}},c=[{value:"Python Standard Built-in Types",id:"python-standard-built-in-types",children:[]},{value:"PSJ-Command Types",id:"psj-command-types",children:[{value:"Built-in Types",id:"built-in-types",children:[]},{value:"Enumerations Types",id:"enumerations-types",children:[]}]},{value:"PSJ-Utility Types",id:"psj-utility-types",children:[{value:"Built-in Types",id:"built-in-types-1",children:[]},{value:"Enumerations Types",id:"enumerations-types-1",children:[]}]}],b={toc:c};function o(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PSJ has 3 data types:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Python Standard Built-in Types"),Object(r.b)("li",{parentName:"ul"},"PSJ-Command Types"),Object(r.b)("li",{parentName:"ul"},"PSJ-Utility Types")),Object(r.b)("p",null,"Below session will briefly introduce their structures and usages."),Object(r.b)("h2",{id:"python-standard-built-in-types"},"Python Standard Built-in Types"),Object(r.b)("p",null,"The principal built-in types are numerics, sequences, mappings, classes, instances and exceptions.\nFor more information, please visit ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/stdtypes.html"}),"Python official document")),Object(r.b)("h2",{id:"psj-command-types"},"PSJ-Command Types"),Object(r.b)("p",null,"Data types used by PSJ-Command functions, including:"),Object(r.b)("h3",{id:"built-in-types"},"Built-in Types"),Object(r.b)("p",null,"Data types used in all PSJ-Commands functions, including: ",Object(r.b)("inlineCode",{parentName:"p"},"int"),", ",Object(r.b)("inlineCode",{parentName:"p"},"double"),", ",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cursor"),", ",Object(r.b)("inlineCode",{parentName:"p"},"position"),", ",Object(r.b)("inlineCode",{parentName:"p"},"vector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"double list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"string list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cursor list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cursor list list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"position list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"vector list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"bool list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cursor pair"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cursor pair list"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TSheetd")),Object(r.b)("p",null,"You can see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"data-type/psj-command/built-in-types"}),"detailed information here"),"."),Object(r.b)("h3",{id:"enumerations-types"},"Enumerations Types"),Object(r.b)("p",null,"This includes enumerations used for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-command/entity-types"}),"Representing type of item")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-command/element-types"}),"Representing element types")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-command/parameter-types"}),"Representing data structure of mesh and analysis"))),Object(r.b)("h2",{id:"psj-utility-types"},"PSJ-Utility Types"),Object(r.b)("p",null,"Data types used by PSJ-Utility functions, including:"),Object(r.b)("h3",{id:"built-in-types-1"},"Built-in Types"),Object(r.b)("p",null,"Data structure used mainly for storing model database, including: ",Object(r.b)("inlineCode",{parentName:"p"},"BodyVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"VersionInfo"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DBody"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DEdge"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DElem"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DFace"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DGroup"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DItem"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DItemVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DNode"),", ",Object(r.b)("inlineCode",{parentName:"p"},"DoubleVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"EdgeVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ElemVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"FaceVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"GroupVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"NodeVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"StringVector"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TVector3d"),", ",Object(r.b)("inlineCode",{parentName:"p"},"VersionInfo")),Object(r.b)("p",null,"You can see the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"data-type/psj-utility/built-in-types"}),"full list here"),"."),Object(r.b)("h3",{id:"enumerations-types-1"},"Enumerations Types"),Object(r.b)("p",null,"This includes data structure used for:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/unit-types"}),"Working with unit")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/associate-types"}),"Representing associated pick")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/path-types"}),"Representing full link to the specified path")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/dtable-types"}),"Representing table")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/bool-types"}),"Representing boolean")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/msgbox-types"}),"Representing message box type")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"data-type/psj-utility/select-method-types"}),"Representing select method"))))}o.isMDXComponent=!0}}]);