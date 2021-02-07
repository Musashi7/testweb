(window.webpackJsonp=window.webpackJsonp||[]).push([[482],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||c;return n?a.a.createElement(m,l(l({ref:t},i),{},{components:n})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},558:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(1441)),o={id:"MC_Mesh_Quality_Manual_Check_Hex",title:"MC_Mesh_Quality_Manual_Check_Hex",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Hex",id:"macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Hex",isDocsHomePage:!1,title:"MC_Mesh_Quality_Manual_Check_Hex",description:"Description",source:"@site/docs\\macro\\mesh-clearnup\\Macro-Mesh-Cleanup-MC-Mesh-Quality-Manual-Check-Hex.md",slug:"/macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Hex",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Hex",version:"current",sidebar:"api",previous:{title:"MC_Mesh_Quality_Auto_Check_Quad",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_Quad"},next:{title:"Collapse",permalink:"/testweb/docs/macro/mesh-clearnup/Collapse"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Mesh_Quality_Manual_Check_Hex"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"MC_Mesh_Quality_Manual_Check_Hex(cursor[] crBody, cursor[] crFace, cursor[] crElem, int iElemType, int elemQualityType, int iCond, double dSafeFact, double dDispValue)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor[]\nTarget part cursor(","[3:Part ID]",")"),Object(c.b)("p",null,"2",".","  Cursor[]\nTarget face cursor(","[6:Face ID]",")"),Object(c.b)("p",null,"3",".","  Cursor[]\nTarget element cursor(","[11:Elem ID]",")"),Object(c.b)("p",null,"4",".","  Int\nElement type (3-Hex Element)"),Object(c.b)("p",null,"5",".","  Int\nElement quality metric type*"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*0: Stretch\n\n\u20021: Aspect Ratio\n\n\u20022: Edge Length\n\n\u20023: Volume\n\n\u20024: Unstable\n\n\u20025: Time Step (Abaqus)\n")),Object(c.b)("p",null,"6",".","  Int\nCondition Display"),Object(c.b)("p",null,"7",".","  double\nSafety factor"),Object(c.b)("p",null,"8",".","  double\nDisplay value"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MC_Mesh_Quality_Manual_Check_Hex([3:1], [], [], 3, 0, 0, 1, 0.1)\n")))}p.isMDXComponent=!0}}]);