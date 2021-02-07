(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,d=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},744:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(1441)),o={id:"JPT.GetEntitiesByName",title:"JPT.GetEntitiesByName()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get information of the inputted entity name"},c={unversionedId:"psj-utility/JPT.GetEntitiesByName",id:"psj-utility/JPT.GetEntitiesByName",isDocsHomePage:!1,title:"JPT.GetEntitiesByName()",description:"Get information of the inputted entity name",source:"@site/docs\\psj-utility\\PSJ-Utility_GetEntitiesByName.md",slug:"/psj-utility/JPT.GetEntitiesByName",permalink:"/testweb/docs/psj-utility/JPT.GetEntitiesByName",version:"current",sidebar:"api",previous:{title:"JPT.GetEntitiesByID()",permalink:"/testweb/docs/psj-utility/JPT.GetEntitiesByID"},next:{title:"JPT.GetEntitiesByPosition()",permalink:"/testweb/docs/psj-utility/JPT.GetEntitiesByPosition"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>DTableType</code>",id:"dtabletype",children:[]},{value:"<code>itemName</code>",id:"itemname",children:[]},{value:"<code>BoolType</code>",id:"booltype",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Get information of the inputted entity name."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetEntitiesByName(DTableType, itemName, BoolType)\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("h3",{id:"dtabletype"},Object(i.b)("inlineCode",{parentName:"h3"},"DTableType")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DTableType"}),"DTableType"))," is an ",Object(i.b)("em",{parentName:"li"},"integer")," value standing for a type of ",Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," object in Jupiter."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h3",{id:"itemname"},Object(i.b)("inlineCode",{parentName:"h3"},"itemName")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"string")," value standing for the name of the inputted ",Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DTableType"}),"DTableType")),"."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h3",{id:"booltype"},Object(i.b)("inlineCode",{parentName:"h3"},"BoolType")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"BoolType"}),"BoolType"))," is an ",Object(i.b)("em",{parentName:"li"},"integer")," value standing for:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"False")," (Or value = 0): Approximate match."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"True")," (Or value = 1): Exact match."))),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DItemVector"}),"DItemVector"))," object standing for a ",Object(i.b)("em",{parentName:"p"},"list")," containing the information of the inputted entity."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,7}","{0,7}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Get the information of the part with name = "_" and store it to a list\nlistBody = JPT.GetEntitiesByName(JPT.DTableType.DTABLE_BODY, "_", JPT.BoolType.FALSE_VAL)\nprint(listBody[0].name) # Cube_1\nprint(listBody[2].name) # Cube_3\nprint(listBody[2].id) # 3\n')))}b.isMDXComponent=!0}}]);