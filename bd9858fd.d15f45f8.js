(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{1042:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(1441)),a={id:"ViewShowContact",title:"ViewShowContact",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/view-control/ViewShowContact",id:"macro/view-control/ViewShowContact",isDocsHomePage:!1,title:"ViewShowContact",description:"Description",source:"@site/docs\\macro\\view-control\\Macro-View-Control-ViewShowContact.md",slug:"/macro/view-control/ViewShowContact",permalink:"/testweb/docs/macro/view-control/ViewShowContact",version:"current",sidebar:"api",previous:{title:"ViewShowBackFace",permalink:"/testweb/docs/macro/view-control/ViewShowBackFace"},next:{title:"ViewToggleShowBackFace",permalink:"/testweb/docs/macro/view-control/ViewToggleShowBackFace"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Turn ON/OFF Show Contact"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"ViewShowContact(bool Flag)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  bool\nTurn on/off display switch 0=On 1=OFF"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"ViewShowContact(0)\n\n")))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return w}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,w=s["".concat(a,".").concat(d)]||s[d]||b[d]||c;return n?o.a.createElement(w,i(i({ref:t},u),{},{components:n})):o.a.createElement(w,i({ref:t},u))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);