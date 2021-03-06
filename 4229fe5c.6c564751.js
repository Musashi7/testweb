(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),u=l(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},419:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(1441)),i={id:"JPT.CastDItemToDEdge",title:"JPT.CastDItemToDEdge()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert DItem object to DEdge object"},c={unversionedId:"psj-utility/JPT.CastDItemToDEdge",id:"psj-utility/JPT.CastDItemToDEdge",isDocsHomePage:!1,title:"JPT.CastDItemToDEdge()",description:"Convert DItem object to DEdge object",source:"@site/docs\\psj-utility\\PSJ-Utility_CastDItemToDEdge.md",slug:"/psj-utility/JPT.CastDItemToDEdge",permalink:"/testweb/docs/psj-utility/JPT.CastDItemToDEdge",version:"current",sidebar:"api",previous:{title:"JPT.CastDItemToDBody()",permalink:"/testweb/docs/psj-utility/JPT.CastDItemToDBody"},next:{title:"JPT.CastDItemToDElem()",permalink:"/testweb/docs/psj-utility/JPT.CastDItemToDElem"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>ditemObject</code>",id:"ditemobject",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Convert ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," object to ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DEdge"}),"DEdge"))," object to get the information of the selected edge."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.CastDItemToDEdge(ditemObject)\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("h3",{id:"ditemobject"},Object(o.b)("inlineCode",{parentName:"h3"},"ditemObject")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An object specifying Jupiter ",Object(o.b)("em",{parentName:"li"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," type."),Object(o.b)("li",{parentName:"ul"},"This is a required input.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DEdge"}),"DEdge"))," object (Edge with relating information)."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,12}","{0,12}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Select 1 object from the created DItem objects\nlistDItemObject = JPT.GetAllByType(JPT.DItemType.BODY)\nditemObject = listDItemObject[0]\nJPT.Debugger(ditemObject)\n\n# Convert from the above DItem object to DEdge object\ndedgeObject = JPT.CastDItemToDEdge(ditemObject)\nJPT.Debugger(dedgeObject)\n')))}l.isMDXComponent=!0}}]);