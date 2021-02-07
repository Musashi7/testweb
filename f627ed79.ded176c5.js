(window.webpackJsonp=window.webpackJsonp||[]).push([[1297],{1376:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(1441)),o={id:"JPT.GetMaterialDBByID",title:"JPT.GetMaterialDBByID()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Check whether the inputted material is existing on the material database or not"},l={unversionedId:"psj-utility/JPT.GetMaterialDBByID",id:"psj-utility/JPT.GetMaterialDBByID",isDocsHomePage:!1,title:"JPT.GetMaterialDBByID()",description:"Check whether the inputted material is existing on the material database or not",source:"@site/docs\\psj-utility\\PSJ-Utility_GetMaterialDBById.md",slug:"/psj-utility/JPT.GetMaterialDBByID",permalink:"/testweb/docs/psj-utility/JPT.GetMaterialDBByID",version:"current",sidebar:"api",previous:{title:"JPT.GetMacroLog()",permalink:"/testweb/docs/psj-utility/JPT.GetMacroLog"},next:{title:"JPT.GetMaterialXML()",permalink:"/testweb/docs/psj-utility/JPT.GetMaterialXML"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>userMaterialID</code>",id:"usermaterialid",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Check whether the inputted material is existing on the material database or not."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetMaterialDBByID(userMaterialID)\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("h3",{id:"usermaterialid"},Object(i.b)("inlineCode",{parentName:"h3"},"userMaterialID")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"integer")," value standing for the user material ID in the User Material DB."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"integer")," value standing for the ID of the inputted user material in the Material Library Database.\nIt will return the value as below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"0")," if the inputted user material ID does not exist on the Material Library Database."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"> 0")," if the inputted user material ID is existing on the Material Library Database.")),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:"{13,18}","{13,18}":!0}),'# Create user material data base\nProperties.Material.Add("Copper_Alloy", [Density([(DENSITY, 8.3e-09)]),\n                        Elastic([(YOUNGS_MODULUS, 110000.0), (POISSONS_RATIO, 0.34)])])\n                        # User material ID = 1 (Existing on the Library material database)\nProperties.Material.Add("Titanium_Alloy", [Density([(DENSITY, 4.62e-09)]),\n                        Elastic([(YOUNGS_MODULUS, 96000.0), (POISSONS_RATIO, 0.36)])])\n                        # User material ID = 2 (Does not exist on the Library material database)\n\n# Check the ID of the created material whether it\'s existing on the\n# Library material database or not\n# Return 1 - Existing on the Library material database and\n# its ID on the Library material database is 1\nfirstMat = JPT.GetMaterialDBByID(1)\nJPT.Debugger(firstMat)\n\n# Return 0 - Does not exist on the Library material database\n# with user material ID = 2\nsecondMat = JPT.GetMaterialDBByID(2)\nJPT.Debugger(secondMat)\n')))}u.isMDXComponent=!0},1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);