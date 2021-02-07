(window.webpackJsonp=window.webpackJsonp||[]).push([[819],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),l=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,d=b["".concat(s,".").concat(p)]||b[p]||m[p]||i;return n?a.a.createElement(d,o(o({ref:t},c),{},{components:n})):a.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},898:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(1441)),s={id:"JPT.FindSubAssemblyByName",title:"JPT.FindSubAssemblyByName()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get the related information of the inputted sub assembly name"},o={unversionedId:"psj-utility/JPT.FindSubAssemblyByName",id:"psj-utility/JPT.FindSubAssemblyByName",isDocsHomePage:!1,title:"JPT.FindSubAssemblyByName()",description:"Get the related information of the inputted sub assembly name",source:"@site/docs\\psj-utility\\PSJ-Utility_FindSubAssemblyByName.md",slug:"/psj-utility/JPT.FindSubAssemblyByName",permalink:"/testweb/docs/psj-utility/JPT.FindSubAssemblyByName",version:"current",sidebar:"api",previous:{title:"JPT.FindSubAssemblyByID()",permalink:"/testweb/docs/psj-utility/JPT.FindSubAssemblyByID"},next:{title:"JPT.GetAllByTypeID()",permalink:"/testweb/docs/psj-utility/JPT.GetAllByTypeID"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>subAssemName</code>",id:"subassemname",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Get the related information of the inputted sub assembly name."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.FindSubAssemblyByName(subAssemName)\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("h3",{id:"subassemname"},Object(i.b)("inlineCode",{parentName:"h3"},"subAssemName")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Name of the target sub assembly."),Object(i.b)("li",{parentName:"ul"},"This is a required input.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"A ",Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"DItemVector"}),"DItemVector"))," object standing for a ",Object(i.b)("em",{parentName:"p"},"list")," of found sub assembly."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,6}","{0,6}":!0}),"# Create 2 sub assemblies under All Parts assembly\nJPT.CreateSubAssembly('CreateSubAsm0',JPT.DItem())\nJPT.CreateSubAssembly('CreateSubAsm1',JPT.DItem())\n\n# Get the information of the sub assembly with name = CreateSubAsm0\nJPT.Debugger(JPT.FindSubAssemblyByName('CreateSubAsm0'))\n\n")))}l.isMDXComponent=!0}}]);