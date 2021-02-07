(window.webpackJsonp=window.webpackJsonp||[]).push([[917],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),b=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=b(n),p=r,s=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return n?a.a.createElement(s,c(c({ref:t},m),{},{components:n})):a.a.createElement(s,c({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1619:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_ImageCtrl-f1a61a00c57948e40a59b38e78a74254.png"},1620:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_ImageCtrl2-9ee0b95730131693de0bdd47c627223e.png"},996:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),i=(n(0),n(1441)),o={title:"Image Control",id:"image-control"},c={unversionedId:"gui-command-builder/image-control",id:"gui-command-builder/image-control",isDocsHomePage:!1,title:"Image Control",description:"Create an image container.",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_ImageCtrl.md",slug:"/gui-command-builder/image-control",permalink:"/testweb/docs/gui-command-builder/image-control",version:"current",sidebar:"extensions",previous:{title:"Button",permalink:"/testweb/docs/gui-command-builder/button"},next:{title:"Spin",permalink:"/testweb/docs/gui-command-builder/spin"}},l=[{value:"Parameters",id:"parameters",children:[{value:"<code>Name</code>",id:"name",children:[]},{value:"<code>Image File</code>",id:"image-file",children:[]}]},{value:"API assciated with",id:"api-assciated-with",children:[]}],m={toc:l};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create an image container."),Object(i.b)("p",null,Object(i.b)("img",{src:n(1619).default})),Object(i.b)("p",null,"Preview dialog:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(1620).default})),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("h3",{id:"name"},Object(i.b)("inlineCode",{parentName:"h3"},"Name")),Object(i.b)("p",null,"Enter the name of the image control component."),Object(i.b)("h3",{id:"image-file"},Object(i.b)("inlineCode",{parentName:"h3"},"Image File")),Object(i.b)("p",null,"Display the link to the image."),Object(i.b)("h2",{id:"api-assciated-with"},"API assciated with"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Command"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Sample Code"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'dlg.set_image_file("name", "link")'),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set the location to the image file"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("em",{parentName:"td"},"Input:")," ",Object(i.b)("inlineCode",{parentName:"td"},'dlg.set_image_file("ImageCtrl", "C:/Users/M3.JPG")'))))))}b.isMDXComponent=!0}}]);