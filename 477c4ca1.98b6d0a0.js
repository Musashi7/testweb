(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(n),s=r,d=m["".concat(c,".").concat(s)]||m[s]||b[s]||i;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},452:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(1441)),c={id:"JPT.GetMaxIDEntity",title:"JPT.GetMaxIDEntity()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get the maximum ID of the inputted DItemType"},o={unversionedId:"psj-utility/JPT.GetMaxIDEntity",id:"psj-utility/JPT.GetMaxIDEntity",isDocsHomePage:!1,title:"JPT.GetMaxIDEntity()",description:"Get the maximum ID of the inputted DItemType",source:"@site/docs\\psj-utility\\PSJ-Utility_GetMaxIDEntity.md",slug:"/psj-utility/JPT.GetMaxIDEntity",permalink:"/testweb/docs/psj-utility/JPT.GetMaxIDEntity",version:"current",sidebar:"api",previous:{title:"JPT.GetMaterialXML()",permalink:"/testweb/docs/psj-utility/JPT.GetMaterialXML"},next:{title:"JPT.GetMaxMaterialID()",permalink:"/testweb/docs/psj-utility/JPT.GetMaxMaterialID"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>DItemType</code>",id:"ditemtype",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Get the maximum ID of the inputted ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType")),"."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetMaxIDEntity(DItemType)\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("h3",{id:"ditemtype"},Object(i.b)("inlineCode",{parentName:"h3"},"DItemType")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType"))," is an ",Object(i.b)("em",{parentName:"li"},"integer")," value standing for a type of ",Object(i.b)("em",{parentName:"li"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," object in Jupiter."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"The maximum ID of the inputted ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType")),"."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,7}","{0,7}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Get the maximum ID of the created parts\nmaxID = JPT.GetMaxIDEntity(JPT.DItemType.BODY)\nJPT.Debugger(maxID)\n')))}l.isMDXComponent=!0}}]);