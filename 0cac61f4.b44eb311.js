(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),b=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||s[d]||c;return n?o.a.createElement(f,i(i({ref:t},u),{},{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),o=n(7),c=(n(0),n(615)),a={id:"Rbe3",title:"Rbe3",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},i={unversionedId:"macro/connections/Rbe3",id:"macro/connections/Rbe3",isDocsHomePage:!1,title:"Rbe3",description:"Description",source:"@site/docs\\macro\\connections\\Macro-Connections-Rbe3.md",slug:"/macro/connections/Rbe3",permalink:"/testweb/docs/macro/connections/Rbe3",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create rbe3 connection"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," Int\nMethod RBE3 = 3"),Object(c.b)("p",null,"2","."," Cursor[]\nMaster Target"),Object(c.b)("p",null,"3","."," Cursor[]\nSlave Target"),Object(c.b)("p",null,"4","."," RBE3TermAttribute[]\nTerm attribute list","*"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*RBE3TermAttribute:(double Coefficient, int DOF, int Count)\n")),Object(c.b)("p",null,"5","."," Int\nRBE3 Type"),Object(c.b)("p",null,"6","."," Cstring\nName of RBE3"),Object(c.b)("p",null,"7","."," Cursor\nCoordinate"),Object(c.b)("p",null,"8","."," Double\nTolerance"),Object(c.b)("p",null,"9","."," Double","[3]","\nVisual node position"),Object(c.b)("p",null,"10","."," Int\nSurface definition ByNodeSet = 0, ByElementSet = 1"),Object(c.b)("p",null,"11","."," Cursor\nEdit RBE3"),Object(c.b)("p",null,"12","."," Bool\nUpdate disp Coordinate System flag true = 1, false = 0"),Object(c.b)("p",null,"13","."," Bool\nCorner only flag true = 1, false = 0"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Rbe3(17, [10:157854], [10:224981], [(0, 63, 1), (1, 7, 1)], 3, "RBE3_1", 0:0, 0, [0, 0, 0], 0, 0:0, 1, 0)\n')))}b.isMDXComponent=!0}}]);