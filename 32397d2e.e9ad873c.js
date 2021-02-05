(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return b}));var r=t(3),o=t(7),c=(t(0),t(615)),l={id:"Lbc_Bolt_Modeling_Type_A_Edge",title:"Lbc_Bolt_Modeling_Type_A_Edge",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},i={unversionedId:"macro/connections/Lbc_Bolt_Modeling_Type_A_Edge",id:"macro/connections/Lbc_Bolt_Modeling_Type_A_Edge",isDocsHomePage:!1,title:"Lbc_Bolt_Modeling_Type_A_Edge",description:"Description",source:"@site/docs\\macro\\connections\\Macro-Connections-Lbc-Bolt-Modeling-Type-A-Edge.md",slug:"/macro/connections/Lbc_Bolt_Modeling_Type_A_Edge",permalink:"/testweb/docs/macro/connections/Lbc_Bolt_Modeling_Type_A_Edge",version:"current"},a=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:a};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create Lbc TypeA Bolt Edge method"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," Cursor[]\ncircular edges in top side"),Object(c.b)("p",null,"2","."," Cursor[]\ncircular edges in bottom side"),Object(c.b)("p",null,"3","."," String\nname of Rbe"),Object(c.b)("p",null,"4","."," String\nname of BarBody"),Object(c.b)("p",null,"5","."," int\nConnection type, 0: cbar, 1: rbe2"),Object(c.b)("p",null,"6","."," Cursor\nbar property cursor,"),Object(c.b)("p",null,"7","."," double\nPlane tolerance angle around the selected edge.Used in finding slave nodes around the selected edge"),Object(c.b)("p",null,"8","."," double\nMaximum distance between top and bottom rbe"),Object(c.b)("p",null,"9","."," bool\nPretensionLoad flag,0=false,1=true"),Object(c.b)("p",null,"10","."," int\nType of pretension Solver,0=All option pretension,1=Abaqus pretension"),Object(c.b)("p",null,"11","."," double\nforce value.Used in pretension connection"),Object(c.b)("p",null,"12","."," int\nPretension DoF at target"),Object(c.b)("p",null,"13","."," Cursor\nreferred coordinate system, NULL is global"),Object(c.b)("p",null,"14","."," int\nBoltFixLength used in Pretension"),Object(c.b)("p",null,"15","."," int\ntop side slot bolt flag,0=false,1=true"),Object(c.b)("p",null,"16","."," double\ntop rbe slave node diameter range"),Object(c.b)("p",null,"17","."," int\nbottom side slot bolt flag,0=false,1=true"),Object(c.b)("p",null,"18","."," double\nbottom rbe slave node diameter range"),Object(c.b)("p",null,"19","."," bool\nOption ADVC Static process, 0: No, 1:Yes"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'Lbc_Bolt_Modeling_Type_A_Edge([5:66319], [5:10000031], "RBE", "Bar_2", 0, 0:0, 20, 0.1, 0, 0, 0, 0, 0:0, 0, 0, 0.0081206, 0, 0.0081206, 0)\n')))}b.isMDXComponent=!0},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),b=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=b(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=b(t),s=r,f=p["".concat(l,".").concat(s)]||p[s]||d[s]||c;return t?o.a.createElement(f,i(i({ref:n},u),{},{components:t})):o.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,l=new Array(c);l[0]=s;var i={};for(var a in n)hasOwnProperty.call(n,a)&&(i[a]=n[a]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<c;u++)l[u]=t[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);