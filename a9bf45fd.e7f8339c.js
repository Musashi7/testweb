(window.webpackJsonp=window.webpackJsonp||[]).push([[857],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||c;return t?a.a.createElement(m,u(u({ref:n},i),{},{components:t})):a.a.createElement(m,u({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var i=2;i<c;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},936:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),c=(t(0),t(1441)),o={id:"MC_Mesh_Quality_Manual_Check_Quad",title:"MC_Mesh_Quality_Manual_Check_Quad",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},u={unversionedId:"macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Quad",id:"macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Quad",isDocsHomePage:!1,title:"MC_Mesh_Quality_Manual_Check_Quad",description:"Description",source:"@site/docs\\macro\\mesh-clearnup\\Macro-Mesh-Cleanup-MC-Mesh-Quality-Manual-Check-Quad.md",slug:"/macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Quad",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Manual_Check_Quad",version:"current",sidebar:"api",previous:{title:"ChangeTopologyFace",permalink:"/testweb/docs/macro/mesh-clearnup/ChangeTopologyFace"},next:{title:"MC_Mesh_Quality_Auto_Check_Tet",permalink:"/testweb/docs/macro/mesh-clearnup/MC_Mesh_Quality_Auto_Check_Tet"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Mesh_Quality_Manual_Check_Quad"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"MC_Mesh_Quality_Manual_Check_Quad(cursor[] crBody, cursor[] crFace, cursor[] crElem, int iElemType, int iCond, int dSafeFact, double dDispValue)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor[]\nTarget part cursor(","[3:Part ID]",")"),Object(c.b)("p",null,"2",".","  Cursor[]\nTarget face cursor(","[6:Face ID]",")"),Object(c.b)("p",null,"3",".","  Cursor[]\nTarget element cursor(","[11:Elem ID]",")"),Object(c.b)("p",null,"4",".","  Int\nElement type (1-Quad Element)"),Object(c.b)("p",null,"5",".","  Int\nElement quality metric type*"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*0: Stretch\n\n\u20021: Aspect Ratio\n\n\u20022: Warping\n\n\u20023: Skewness\n\n\u20024: Edge length\n\n\u20025: Area\n\n\u20026: Node Valence\n\n\u20027: Interior angle\n\n\u20028: Taper\n\n\u20029: Duplicate Elements\n\n\u200210: Node free edges\n")),Object(c.b)("p",null,"6",".","  Int\nCondition Display"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"*0: <=\n\n\u20021: >=\n\n\u20022: <\n\n\u20023: >\n")),Object(c.b)("p",null,"7",".","  double\nDisplay value"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MC_Mesh_Quality_Manual_Check_Quad([3:1], [], [], 1, 0, 0, 0.1)\n")))}p.isMDXComponent=!0}}]);