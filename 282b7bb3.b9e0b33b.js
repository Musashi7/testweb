(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(615)),i={id:"JPT.GetPythonAPILog",title:"JPT.GetPythonAPILog()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get the text existing on the Python API window"},c={unversionedId:"psj-utility/JPT.GetPythonAPILog",id:"psj-utility/JPT.GetPythonAPILog",isDocsHomePage:!1,title:"JPT.GetPythonAPILog()",description:"Get the text existing on the Python API window",source:"@site/docs\\psj-utility\\PSJ-Utility_GetPythonAPILog.md",slug:"/psj-utility/JPT.GetPythonAPILog",permalink:"/testweb/docs/psj-utility/JPT.GetPythonAPILog",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Get the text existing on the Python API window."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetPythonAPILog()\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"This utility function does not require any input value."),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"A ",Object(a.b)("em",{parentName:"p"},"string")," containing all the text existing on the Python API window."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,2}","{0,2}":!0}),'# Storing text to Python API window\nGeometry.Part.Cube(strPartName="Cube_5", iColorPart=7463537)\nGeometry.Part.Cube(strPartName="Cube_6", iColorPart=7434735)\nGeometry.Part.Cube(strPartName="Cube_7", iColorPart=14903267)\nGeometry.Part.Cube(strPartName="Cube_8", iColorPart=15658599)\nGeometry.Part.Cube(strPartName="Cube_9", iColorPart=7961077)\nGeometry.Part.Cube(strPartName="Cube_10", iColorPart=7829501)\n\n# Get the stored text in Python API window\nlog = JPT.GetPythonAPILog()\nJPT.Debugger(log)\n')))}p.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},P={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(i,".").concat(b)]||s[b]||P[b]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);