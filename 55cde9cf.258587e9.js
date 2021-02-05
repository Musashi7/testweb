(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(615)),o={id:"JPT.RemoveEntitiesByID",title:"JPT.RemoveEntitiesByID()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Delete specified entity by inputting its type and its ID"},c={unversionedId:"psj-utility/JPT.RemoveEntitiesByID",id:"psj-utility/JPT.RemoveEntitiesByID",isDocsHomePage:!1,title:"JPT.RemoveEntitiesByID()",description:"Delete specified entity by inputting its type and its ID",source:"@site/docs\\psj-utility\\PSJ-Utility_RemoveEntitiesByID.md",slug:"/psj-utility/JPT.RemoveEntitiesByID",permalink:"/testweb/docs/psj-utility/JPT.RemoveEntitiesByID",version:"current"},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Delete specified entity by inputting its type and its ID."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.RemoveEntitiesByID(DItemType, itemID)\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DItemType")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType"))," is an ",Object(a.b)("em",{parentName:"p"},"integer")," value standing for a type of ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"DItem"}),"DItem"))," object in Jupiter.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This is a required input."))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"itemID")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"An ",Object(a.b)("em",{parentName:"p"},"integer")," value standing for the ID of the inputted ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType")),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This is a required input."))),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"This utility function does not have output value."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,7}","{0,7}":!0}),'# Create sample model\nGeometry.Part.Cube(iColorPart=12829526)\nGeometry.Part.Cube(strPartName="Cube_2", iColorPart=8060538)\nGeometry.Part.Cube(strPartName="Cube_3", iColorPart=13787489)\n\n# Delete Cube_2 part\nJPT.RemoveEntitiesByID(JPT.EntityType.BODY, 2)\n')))}l.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return y}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,y=b["".concat(o,".").concat(m)]||b[m]||s[m]||a;return n?i.a.createElement(y,c(c({ref:t},u),{},{components:n})):i.a.createElement(y,c({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);