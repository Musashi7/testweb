(window.webpackJsonp=window.webpackJsonp||[]).push([[374],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(615)),i={title:"Image Control",id:"image-control"},c={unversionedId:"gui-command-builder/image-control",id:"gui-command-builder/image-control",isDocsHomePage:!1,title:"Image Control",description:"Create an image container.",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_ImageCtrl.md",slug:"/gui-command-builder/image-control",permalink:"/testweb/docs/gui-command-builder/image-control",version:"current",sidebar:"extensions",previous:{title:"Button",permalink:"/testweb/docs/gui-command-builder/button"},next:{title:"Spin",permalink:"/testweb/docs/gui-command-builder/spin"}},l=[{value:"Parameters",id:"parameters",children:[{value:"<code>Name</code>",id:"name",children:[]},{value:"<code>Image File</code>",id:"image-file",children:[]}]},{value:"Command to use",id:"command-to-use",children:[]}],m={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},m,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create an image container."),Object(o.b)("p",null,Object(o.b)("img",{src:n(793).default})),Object(o.b)("p",null,"Preview dialog:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(794).default})),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"name"},Object(o.b)("inlineCode",{parentName:"h3"},"Name")),Object(o.b)("p",null,"Enter the name of the image control component."),Object(o.b)("h3",{id:"image-file"},Object(o.b)("inlineCode",{parentName:"h3"},"Image File")),Object(o.b)("p",null,"Display the link to the image."),Object(o.b)("h2",{id:"command-to-use"},"Command to use"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Command"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Sample Code"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),'dlg.set_image_file("name", "link")'),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set the location to the image file"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"Input:")," ",Object(o.b)("inlineCode",{parentName:"td"},'dlg.set_image_file("ImageCtrl", "C:/Users/M3.JPG")'))))))}u.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=r,s=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(s,c(c({ref:t},m),{},{components:n})):a.a.createElement(s,c({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},793:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_ImageCtrl-f1a61a00c57948e40a59b38e78a74254.png"},794:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_ImageCtrl2-9ee0b95730131693de0bdd47c627223e.png"}}]);