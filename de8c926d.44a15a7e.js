(window.webpackJsonp=window.webpackJsonp||[]).push([[1149],{1228:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(1441)),u={id:"MC_ManualCleanup_2TrisToQuad",title:"MC_ManualCleanup_2TrisToQuad",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/mesh-clearnup/MC_ManualCleanup_2TrisToQuad",id:"macro/mesh-clearnup/MC_ManualCleanup_2TrisToQuad",isDocsHomePage:!1,title:"MC_ManualCleanup_2TrisToQuad",description:"Description",source:"@site/docs\\macro\\mesh-clearnup\\Macro-Mesh-Cleanup-MC-ManualCleanup-2TrisToQuad.md",slug:"/macro/mesh-clearnup/MC_ManualCleanup_2TrisToQuad",permalink:"/testweb/docs/macro/mesh-clearnup/MC_ManualCleanup_2TrisToQuad",version:"current",sidebar:"api",previous:{title:"SwapElemEdge",permalink:"/testweb/docs/macro/mesh-clearnup/SwapElemEdge"},next:{title:"MC_ManualCleanup_2QuadToQuad",permalink:"/testweb/docs/macro/mesh-clearnup/MC_ManualCleanup_2QuadToQuad"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Merge two Tri element into one Quad element"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"MC_ManualCleanup_2TrisToQuad(Cursor[] elements)"),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"1",".","  Cursor[]\nArray of only 2 Tri elements"),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MC_ManualCleanup_2TrisToQuad([11:1068,11:1066])\n")))}p.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=r,b=s["".concat(u,".").concat(m)]||s[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:n},i),{},{components:t})):a.a.createElement(b,c({ref:n},i))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,u=new Array(o);u[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,u[1]=c;for(var i=2;i<o;i++)u[i]=t[i];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);