(window.webpackJsonp=window.webpackJsonp||[]).push([[952],{1031:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(1441)),i={id:"JPT.CastDItemToDNode",title:"JPT.CastDItemToDNode()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert DItem object to DNode object"},c={unversionedId:"psj-utility/JPT.CastDItemToDNode",id:"psj-utility/JPT.CastDItemToDNode",isDocsHomePage:!1,title:"JPT.CastDItemToDNode()",description:"Convert DItem object to DNode object",source:"@site/docs\\psj-utility\\PSJ-Utility_CastDItemToDNode.md",slug:"/psj-utility/JPT.CastDItemToDNode",permalink:"/testweb/docs/psj-utility/JPT.CastDItemToDNode",version:"current",sidebar:"api",previous:{title:"JPT.CastDItemToDGroup()",permalink:"/testweb/docs/psj-utility/JPT.CastDItemToDGroup"},next:{title:"JPT.CastToDItem()",permalink:"/testweb/docs/psj-utility/JPT.CastToDItem"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>ditemObject</code>",id:"ditemobject",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Convert ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," object to ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DNode"}),"DNode"))," object to get the information of the selected node."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.CastDItemToDNode(ditemObject)\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("h3",{id:"ditemobject"},Object(a.b)("inlineCode",{parentName:"h3"},"ditemObject")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An object specifying Jupiter ",Object(a.b)("em",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," type."),Object(a.b)("li",{parentName:"ul"},"This is a required input.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DNode"}),"DNode"))," object (Node with relating information)."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,12}","{0,12}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Select 1 object from the created DItem objects\nlistDItemObject = JPT.GetAllByType(JPT.DItemType.BODY)\nditemObject = listDItemObject[0]\nJPT.Debugger(ditemObject)\n\n# Convert from the above DItem object to DNode object\ndnodeObject = JPT.CastDItemToDNode(ditemObject)\nJPT.Debugger(dnodeObject)\n')))}u.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),u=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=u(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||s[d]||a;return n?o.a.createElement(m,c(c({ref:t},b),{},{components:n})):o.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<a;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);