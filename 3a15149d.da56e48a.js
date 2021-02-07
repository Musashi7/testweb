(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,s=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.a.createElement(s,o(o({ref:t},b),{},{components:n})):a.a.createElement(s,o({ref:t},b))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1539:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_Label-25f3f16bf042e22e2cc798204b1440d3.png"},1540:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_Label2-305ef05cad20f040f693a74d2fa1e3b9.png"},381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(1441)),l={title:"Label",id:"label"},o={unversionedId:"gui-command-builder/label",id:"gui-command-builder/label",isDocsHomePage:!1,title:"Label",description:"Add a label.",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_Label.md",slug:"/gui-command-builder/label",permalink:"/testweb/docs/gui-command-builder/label",version:"current",sidebar:"extensions",previous:{title:"Tab Control",permalink:"/testweb/docs/gui-command-builder/tab-control"},next:{title:"Text Box",permalink:"/testweb/docs/gui-command-builder/text-box"}},c=[{value:"Parameters",id:"parameters",children:[{value:"<code>Text</code>",id:"text",children:[]},{value:"<code>Name</code>",id:"name",children:[]},{value:"<code>Enable</code>",id:"enable",children:[]},{value:"<code>Width</code>",id:"width",children:[]},{value:"<code>Height</code>",id:"height",children:[]}]}],b={toc:c};function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Add a label."),Object(i.b)("p",null,Object(i.b)("img",{src:n(1539).default})),Object(i.b)("p",null,"Preview dialog:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(1540).default})),Object(i.b)("h2",{id:"parameters"},"Parameters"),Object(i.b)("h3",{id:"text"},Object(i.b)("inlineCode",{parentName:"h3"},"Text")),Object(i.b)("p",null,"Enter the text displayed as a label."),Object(i.b)("h3",{id:"name"},Object(i.b)("inlineCode",{parentName:"h3"},"Name")),Object(i.b)("p",null,"Enter the name of the label component."),Object(i.b)("h3",{id:"enable"},Object(i.b)("inlineCode",{parentName:"h3"},"Enable")),Object(i.b)("p",null,"Specify whether to enable it or not."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check On\xa0:\xa0Available"),Object(i.b)("li",{parentName:"ul"},"Check Off\xa0:\xa0Unavailable (grayed out)")),Object(i.b)("h3",{id:"width"},Object(i.b)("inlineCode",{parentName:"h3"},"Width")),Object(i.b)("p",null,"Specify the minimum width of the label. (in pixels)"),Object(i.b)("h3",{id:"height"},Object(i.b)("inlineCode",{parentName:"h3"},"Height")),Object(i.b)("p",null,"Specify the minimum height of the label. (in pixels)"))}u.isMDXComponent=!0}}]);