(window.webpackJsonp=window.webpackJsonp||[]).push([[627],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},706:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(1441)),o={id:"Properties.Material.Add",title:"Properties.Material.Add()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Add/Create new material to User's Database"},c={unversionedId:"psj-command/properties/Properties.Material.Add",id:"psj-command/properties/Properties.Material.Add",isDocsHomePage:!1,title:"Properties.Material.Add()",description:"Add/Create new material to User's Database",source:"@site/docs\\psj-command\\properties\\Properties.Material.Add.md",slug:"/psj-command/properties/Properties.Material.Add",permalink:"/testweb/docs/psj-command/properties/Properties.Material.Add",version:"current",sidebar:"api",previous:{title:"Properties.Gasket()",permalink:"/testweb/docs/psj-command/properties/Properties.Gasket"},next:{title:"Properties.Material.Delete()",permalink:"/testweb/docs/psj-command/properties/Properties.Material.Delete"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"This method uses to add a material data that is referenced in the existent property data library or create a new material with user's setting for property information."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Properties.Material.Add(strMaterialName, listMaterialProperty)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-Properties-CreateMaterial")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"Properties --\x3e Material --\x3e Add")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"strMaterialName")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying the material name."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"listMaterialProperty")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"MATERIAL_PROPERTY List")," specifying the list of all attributes of property such as density, elasticity, etc."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Properties.Material.Add("Structural_Steel", [Density([(DENSITY, 7.85e-09)]),\n    Elastic([(YOUNGS_MODULUS, 200000.0), (POISSONS_RATIO, 0.3)])])\n\n\n')))}s.isMDXComponent=!0}}]);