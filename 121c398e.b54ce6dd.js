(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),b=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=b(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=b(r),m=n,d=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return r?a.a.createElement(d,s(s({ref:t},u),{},{components:r})):a.a.createElement(d,s({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},156:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return b}));var n=r(3),a=r(7),l=(r(0),r(1441)),o={id:"JPT.GetAllPartsInSubAssembly",title:"JPT.GetAllPartsInSubAssembly()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get all the information of all parts under the inputted sub assembly"},s={unversionedId:"psj-utility/JPT.GetAllPartsInSubAssembly",id:"psj-utility/JPT.GetAllPartsInSubAssembly",isDocsHomePage:!1,title:"JPT.GetAllPartsInSubAssembly()",description:"Get all the information of all parts under the inputted sub assembly",source:"@site/docs\\psj-utility\\PSJ-Utility_GetAllPartsInSubAssembly.md",slug:"/psj-utility/JPT.GetAllPartsInSubAssembly",permalink:"/testweb/docs/psj-utility/JPT.GetAllPartsInSubAssembly",version:"current",sidebar:"api",previous:{title:"JPT.GetAllParts()",permalink:"/testweb/docs/psj-utility/JPT.GetAllParts"},next:{title:"JPT.GetAllSelected()",permalink:"/testweb/docs/psj-utility/JPT.GetAllSelected"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>subAssem</code>",id:"subassem",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:i};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Get all the information of all parts under the inputted sub assembly."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetAllPartsInSubAssembly(subAssem)\n")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("h3",{id:"subassem"},Object(l.b)("inlineCode",{parentName:"h3"},"subAssem")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," object standing for the inputted sub assembly."),Object(l.b)("li",{parentName:"ul"},"This is a required input.")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"A ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(n.a)({parentName:"em"},{href:"DItemVector"}),"DItemVector"))," object standing for a ",Object(l.b)("em",{parentName:"p"},"list")," of the part belonging to the inputted sub assembly."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:"{0,13}","{0,13}":!0}),'# Create sample model\nGeometry.Part.Cube(iColorPart=15426917)\nGeometry.Part.Cube(strPartName="Cube_2", iColorPart=13390932)\nGeometry.Part.Cube(strPartName="Cube_3", iColorPart=16448103)\nGeometry.Part.Cube(strPartName="Cube_4", iColorPart=13619046)\nGeometry.Part.Cube(strPartName="Cube_5", iColorPart=7861111)\nAssembly.RightClick.AddSubAssembly()\nAssembly.RightClick.AddSubAssembly()\npartForCopying = ", ".join([("3:" + str(part.id)) for part in JPT.GetAllParts()])\nJPT.Exec(\'CmdCopyBody([{0}], [], 2:1, 0)\'.format(partForCopying))\n\n# Get the information of all parts belonging to the inputted sub assembly\npartInSelSubAssem = JPT.GetAllPartsInSubAssembly(JPT.FindSubAssemblyByID(1))\nJPT.Debugger(partInSelSubAssem)\n')))}b.isMDXComponent=!0}}]);