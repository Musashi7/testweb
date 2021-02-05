(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{351:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),c=(n(0),n(615)),o={id:"JPT.CastDItemToDFace",title:"JPT.CastDItemToDFace()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert DItem object to DFace object"},i={unversionedId:"psj-utility/JPT.CastDItemToDFace",id:"psj-utility/JPT.CastDItemToDFace",isDocsHomePage:!1,title:"JPT.CastDItemToDFace()",description:"Convert DItem object to DFace object",source:"@site/docs\\psj-utility\\PSJ-Utility_CastDItemToDFace.md",slug:"/psj-utility/JPT.CastDItemToDFace",permalink:"/testweb/docs/psj-utility/JPT.CastDItemToDFace",version:"current"},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:b};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"CConvert ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"DItem"}),"DItem"))," object to ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"DFace"}),"DFace"))," object to get the information of the selected (Inputted) face(s)."),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.CastDItemToDFace(ditemObject)\n")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ditemObject")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"An object specifying Jupiter ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"DItem"}),"DItem"))," type.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"This is a required input."))),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"DFace"}),"DFace"))," object (Face with relating information)."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,12}","{0,12}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Select 1 object from the created DItem objects\nlistDItemObject = JPT.GetAllByType(JPT.DItemType.BODY)\nditemObject = listDItemObject[0]\nJPT.Debugger(ditemObject)\n\n# Convert from the above DItem object to DFace object\ndfaceObject = JPT.CastDItemToDFace(ditemObject)\n# Print all the related information of the created DFace object to the screen\nJPT.Debugger(dfaceObject)\n')))}u.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),l=u(n),s=r,d=l["".concat(o,".").concat(s)]||l[s]||m[s]||c;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);