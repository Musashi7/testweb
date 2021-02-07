(window.webpackJsonp=window.webpackJsonp||[]).push([[656],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},735:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),o=(r(0),r(1441)),i={id:"JPT.GetSelectedPartsCr",title:"JPT.GetSelectedPartsCr()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get all information of the selected parts"},c={unversionedId:"psj-utility/JPT.GetSelectedPartsCr",id:"psj-utility/JPT.GetSelectedPartsCr",isDocsHomePage:!1,title:"JPT.GetSelectedPartsCr()",description:"Get all information of the selected parts",source:"@site/docs\\psj-utility\\PSJ-Utility_GetSelectedPartsCr.md",slug:"/psj-utility/JPT.GetSelectedPartsCr",permalink:"/testweb/docs/psj-utility/JPT.GetSelectedPartsCr",version:"current",sidebar:"api",previous:{title:"JPT.GetSelectedParts()",permalink:"/testweb/docs/psj-utility/JPT.GetSelectedParts"},next:{title:"JPT.GetSharedElements()",permalink:"/testweb/docs/psj-utility/JPT.GetSharedElements"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Get all information of the selected parts."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetSelectedPartsCr()\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"This utility function does not require any input value."),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"string")," standing for a cursor list (Macro string type) containing typeID and ID of the selected parts."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,12}","{0,12}":!0}),'# Create sample parts\nGeometry.Part.Cube(iColorPart=7138156)\nGeometry.Part.Cube(strPartName="Cube_2", iColorPart=5921475)\nGeometry.Part.Cube(strPartName="Cube_3", iColorPart=6678117)\nGeometry.Part.Cube(strPartName="Cube_4", iColorPart=11908427)\nGeometry.Part.Cube(strPartName="Cube_5", iColorPart=15429611)\nGeometry.Part.Cube(strPartName="Cube_6", iColorPart=7531634)\nGeometry.Part.Cube(strPartName="Cube_7", iColorPart=12434775)\nHome.Find(strSearch="5 6 7 8", strSeletedType="Part")\n\n# Get the information of all selected parts\nselParts = JPT.GetSelectedPartsCr()\nJPT.Debugger(selParts)\n')))}u.isMDXComponent=!0}}]);