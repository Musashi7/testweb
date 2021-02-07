(window.webpackJsonp=window.webpackJsonp||[]).push([[709],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,m=s["".concat(i,".").concat(b)]||s[b]||d[b]||a;return n?o.a.createElement(m,u(u({ref:t},l),{},{components:n})):o.a.createElement(m,u({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},788:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(1441)),i={id:"JPT.GetUndoCount",title:"JPT.GetUndoCount()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get the total number of undo action which is capable for executing"},u={unversionedId:"psj-utility/JPT.GetUndoCount",id:"psj-utility/JPT.GetUndoCount",isDocsHomePage:!1,title:"JPT.GetUndoCount()",description:"Get the total number of undo action which is capable for executing",source:"@site/docs\\psj-utility\\PSJ-Utility_GetUndoCount.md",slug:"/psj-utility/JPT.GetUndoCount",permalink:"/testweb/docs/psj-utility/JPT.GetUndoCount",version:"current",sidebar:"api",previous:{title:"JPT.GetSharedNodes()",permalink:"/testweb/docs/psj-utility/JPT.GetSharedNodes"},next:{title:"JPT.ShowHideAllParts()",permalink:"/testweb/docs/psj-utility/JPT.ShowHideAllParts"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Get the total number of undo action which is capable for executing."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetUndoCount()\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"This utility function does not require any input value."),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"integer")," value standing for the number of Undo."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,11}","{0,11}":!0}),'# Prepare undo steps\nGeometry.Part.Cube(strPartName="Cube_11", iColorPart=11842649)\nGeometry.Part.Cube(strPartName="Cube_12", iColorPart=14968422)\nGeometry.Part.Cube(strPartName="Cube_13", iColorPart=6250447)\nGeometry.Part.Cube(strPartName="Cube_14", iColorPart=12734402)\nGeometry.Part.Cube(strPartName="Cube_15", iColorPart=16579696)\nGeometry.Part.Cube(strPartName="Cube_16", iColorPart=7666683)\nGeometry.Part.Cube(strPartName="Cube_17", iColorPart=12867524)\n\n# Get the number of the available Undo\nundoSteps = JPT.GetUndoCount()\nJPT.Debugger(undoSteps) # Return an integer object with value = 7\n')))}p.isMDXComponent=!0}}]);