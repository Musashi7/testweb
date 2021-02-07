(window.webpackJsonp=window.webpackJsonp||[]).push([[1138],{1217:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),o=(t(0),t(1441)),c={id:"CylinderLayer",title:"CylinderLayer",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/assemble/CylinderLayer",id:"macro/assemble/CylinderLayer",isDocsHomePage:!1,title:"CylinderLayer",description:"Description",source:"@site/docs\\macro\\assemble\\Macro-Assemble-CylinderLayer.md",slug:"/macro/assemble/CylinderLayer",permalink:"/testweb/docs/macro/assemble/CylinderLayer",version:"current",sidebar:"api",previous:{title:"Assemble_Faces_MatingStep",permalink:"/testweb/docs/macro/assemble/Assemble_Faces_MatingStep"},next:{title:"ASMSeparateSolid",permalink:"/testweb/docs/macro/assemble/ASMSeparateSolid"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Cylinder Layer"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"CylinderLayer(cursor crFace, cursor crNode)"),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"1",".","  Cursor\nFace cursor(6:Face ID)"),Object(o.b)("p",null,"2",".","  Cursor\nNode cursor(10:Node ID)"),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"CylinderLayer(6:8, 10:478)\n")))}u.isMDXComponent=!0},1441:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return y}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),u=function(e){var r=a.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=n,y=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(y,i(i({ref:r},s),{},{components:t})):a.a.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=b;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);