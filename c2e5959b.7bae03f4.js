(window.webpackJsonp=window.webpackJsonp||[]).push([[991],{1070:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(1441)),a={id:"JPT.Debugger",title:"JPT.Debugger()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Console debugger for PSJ"},u={unversionedId:"psj-utility/JPT.Debugger",id:"psj-utility/JPT.Debugger",isDocsHomePage:!1,title:"JPT.Debugger()",description:"Console debugger for PSJ",source:"@site/docs\\psj-utility\\PSJ-Utility_Debugger.md",slug:"/psj-utility/JPT.Debugger",permalink:"/testweb/docs/psj-utility/JPT.Debugger",version:"current",sidebar:"api",previous:{title:"JPT.ClearUndo()",permalink:"/testweb/docs/psj-utility/JPT.ClearUndo"},next:{title:"JPT.Exec()",permalink:"/testweb/docs/psj-utility/JPT.Exec"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>inputValue</code>",id:"inputvalue",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Console debugger for PSJ. This utility will show all the related information of the inputted value to the Python API window."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.Debugger(inputValue)\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("h3",{id:"inputvalue"},Object(o.b)("inlineCode",{parentName:"h3"},"inputValue")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A value needing to know its information."),Object(o.b)("li",{parentName:"ul"},"This is a required input.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"This utility function does not have output value."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,6}","{0,6}":!0}),"# Create sample part\nGeometry.Part.Cube()\n# Get the information of all existing parts\nallParts = JPT.GetAllParts()\n# Print all the related information of the first part to the screen\nJPT.Debugger(allParts[0])\n")))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,f=s["".concat(a,".").concat(b)]||s[b]||d[b]||o;return n?i.a.createElement(f,u(u({ref:t},c),{},{components:n})):i.a.createElement(f,u({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);