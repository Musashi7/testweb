(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(615)),i={title:"Layout",id:"layout"},c={unversionedId:"gui-command-builder/layout",id:"gui-command-builder/layout",isDocsHomePage:!1,title:"Layout",description:"Create a layout to arrange components inside.",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_Layout.md",slug:"/gui-command-builder/layout",permalink:"/testweb/docs/gui-command-builder/layout",version:"current",sidebar:"extensions",previous:{title:"GUI Command Builder",permalink:"/testweb/docs/gui-command-builder"},next:{title:"Group Box",permalink:"/testweb/docs/gui-command-builder/group-box"}},l=[{value:"Parameters",id:"parameters",children:[{value:"<code>Name</code>",id:"name",children:[]},{value:"<code>Orientation</code>",id:"orientation",children:[]},{value:"<code>Margin</code>",id:"margin",children:[]}]},{value:"Command to use",id:"command-to-use",children:[]}],u={toc:l};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a layout to arrange components inside."),Object(o.b)("p",null,Object(o.b)("img",{src:n(709).default})),Object(o.b)("p",null,"Preview dialog:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(710).default})),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"name"},Object(o.b)("inlineCode",{parentName:"h3"},"Name")),Object(o.b)("p",null,"Enter the name of the layout component."),Object(o.b)("h3",{id:"orientation"},Object(o.b)("inlineCode",{parentName:"h3"},"Orientation")),Object(o.b)("p",null,"Specify the position of components inside."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Horizontal\xa0:\xa0Arrange the inside components horizontally"),Object(o.b)("li",{parentName:"ul"},"Vertical\xa0:\xa0Arrange the inside components vertically")),Object(o.b)("h3",{id:"margin"},Object(o.b)("inlineCode",{parentName:"h3"},"Margin")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Left\xa0:\xa0Put a margin to the left of the Group Box. (in pixels)"),Object(o.b)("li",{parentName:"ul"},"Top\xa0:\xa0Put a margin above the Group Box. (in pixels)"),Object(o.b)("li",{parentName:"ul"},"Right\xa0:\xa0Put a margin to the right of the Group Box. (in pixels)"),Object(o.b)("li",{parentName:"ul"},"Bottom\xa0:\xa0Put a margin below the Group Box. (in pixels)")),Object(o.b)("h2",{id:"command-to-use"},"Command to use"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Command"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Sample Code"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'dlg.show_layout("name")'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Show the specified Layout"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"Input:")," ",Object(o.b)("inlineCode",{parentName:"td"},'dlg.show_layout("Layout5")'))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'dlg.hide_layout("name")'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hide the specified Layout"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"Input:")," ",Object(o.b)("inlineCode",{parentName:"td"},'dlg.hide_layout("Layout5")'))))))}b.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),b=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=b(n),d=a,s=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return n?r.a.createElement(s,c(c({ref:t},u),{},{components:n})):r.a.createElement(s,c({ref:t},u))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},709:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_Layout-fc3dda7bbcafc865c4e7535f49dfa52c.png"},710:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_Layout2-a4f204bc07e9417bcccecb9ff5a727a0.png"}}]);