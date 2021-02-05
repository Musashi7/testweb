(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{333:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(615)),c={id:"JPT.DItemToMacroListTCursor",title:"JPT.DItemToMacroListTCursor()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert DItem object to cursor list (Macro string type)"},i={unversionedId:"psj-utility/JPT.DItemToMacroListTCursor",id:"psj-utility/JPT.DItemToMacroListTCursor",isDocsHomePage:!1,title:"JPT.DItemToMacroListTCursor()",description:"Convert DItem object to cursor list (Macro string type)",source:"@site/docs\\psj-utility\\PSJ-Utility_DItemToMacroListTCursor.md",slug:"/psj-utility/JPT.DItemToMacroListTCursor",permalink:"/testweb/docs/psj-utility/JPT.DItemToMacroListTCursor",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Convert ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"DItem"}),"DItem"))," object to cursor list (Macro string type)."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.DItemToMacroListTCursor(DItem)\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"DItem")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"A ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"DItem"}),"DItem"))," object.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"This is a required input."))),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"string")," containing all the converted items."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,9}","{0,9}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Get all the existing nodes and convert one of them to cursor list (Macro string type)\nlistNode = [JPT.CastToDItem(node) for node in JPT.GetAllNodes()]\nnode = listNode[0] # DItem object\nJPT.Debugger(JPT.DItemToMacroListTCursor(node)) # Return a string object with value = [10:772]\n')))}p.isMDXComponent=!0},615:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return r?o.a.createElement(d,i(i({ref:t},s),{},{components:r})):o.a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);