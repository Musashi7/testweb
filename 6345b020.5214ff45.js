(window.webpackJsonp=window.webpackJsonp||[]).push([[505],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=b(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||s[u]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},581:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1441)),i={id:"Home.ImportMesh.AbaqusINP",title:"Home.ImportMesh.AbaqusINP()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Import Mesh - ABAQUS File"},c={unversionedId:"psj-command/home/Home.ImportMesh.AbaqusINP",id:"psj-command/home/Home.ImportMesh.AbaqusINP",isDocsHomePage:!1,title:"Home.ImportMesh.AbaqusINP()",description:"Import Mesh - ABAQUS File",source:"@site/docs\\psj-command\\home\\Home.ImportMesh.AbaqusINP.md",slug:"/psj-command/home/Home.ImportMesh.AbaqusINP",permalink:"/testweb/docs/psj-command/home/Home.ImportMesh.AbaqusINP",version:"current",sidebar:"api",previous:{title:"Home.ImportMesh.ADVCADX()",permalink:"/testweb/docs/psj-command/home/Home.ImportMesh.ADVCADX"},next:{title:"Home.ImportMesh.AnsysDat()",permalink:"/testweb/docs/psj-command/home/Home.ImportMesh.AnsysDat"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Import Abaqus INP file."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Home.ImportMesh.AbaqusINP(strlPath, dFaceAngle=60.0, dEdgeAngle=60.0, iImportType=1)\n")),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Home-ImportInp")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Home --\x3e ImportMesh --\x3e AbaqusINP")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"strlFilePaths")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String List")," specifying the list of the path of the Abaqus INP files."),Object(o.b)("li",{parentName:"ul"},"This is a required input.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dFaceAngle")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the angle tolerance in order to determine the face division. Define a face by creating an edge between adjacent elements with an angle smaller than the specified value."),Object(o.b)("li",{parentName:"ul"},"The default value is 60.0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dEdgeAngle")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the angle tolerance in order to determine the edge division. Divide an edge by creating a vertex on adjacent edge elements with an angle larger than the specified value."),Object(o.b)("li",{parentName:"ul"},"The default value is 60.0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iImportType")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the import type."),Object(o.b)("li",{parentName:"ul"},"0: Standard Abaqus Inp - Import the model geometry only."),Object(o.b)("li",{parentName:"ul"},"1: Standard Abaqus Inp by Property - Import the model geometry and material property. A body is created for each material property."),Object(o.b)("li",{parentName:"ul"},"The default value is 1.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if succeed, or 0 if fail."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Home.ImportMesh.AbaqusINP(strlPath=[JPT.GetProgramPath() + "SampleData\\\\Mesh_Model\\\\Abaqus_File.inp"])\n\n\n')))}b.isMDXComponent=!0}}]);