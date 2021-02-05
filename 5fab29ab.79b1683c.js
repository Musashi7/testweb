(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{273:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return d}));var c=n(3),a=n(7),r=(n(0),n(615)),i={title:"Check Box",id:"check-box"},b={unversionedId:"gui-command-builder/check-box",id:"gui-command-builder/check-box",isDocsHomePage:!1,title:"Check Box",description:"Create a check box.",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_CheckBox.md",slug:"/gui-command-builder/check-box",permalink:"/testweb/docs/gui-command-builder/check-box",version:"current",sidebar:"extensions",previous:{title:"List Box",permalink:"/testweb/docs/gui-command-builder/list-box"},next:{title:"Radio Button",permalink:"/testweb/docs/gui-command-builder/radio-button"}},o=[{value:"Parameters",id:"parameters",children:[{value:"<code>Text</code>",id:"text",children:[]},{value:"<code>Name</code>",id:"name",children:[]},{value:"<code>Checked</code>",id:"checked",children:[]},{value:"<code>Width</code>",id:"width",children:[]},{value:"<code>Height</code>",id:"height",children:[]},{value:"<code>Enable</code>",id:"enable",children:[]},{value:"<code>Left text</code>",id:"left-text",children:[]}]},{value:"Command to use",id:"command-to-use",children:[]}],l={toc:o};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(c.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Create a check box."),Object(r.b)("p",null,Object(r.b)("img",{src:n(726).default})),Object(r.b)("p",null,"Preview dialog:"),Object(r.b)("p",null,Object(r.b)("img",{src:n(727).default})),Object(r.b)("h2",{id:"parameters"},"Parameters"),Object(r.b)("h3",{id:"text"},Object(r.b)("inlineCode",{parentName:"h3"},"Text")),Object(r.b)("p",null,"Enter the text appears next to the check box."),Object(r.b)("h3",{id:"name"},Object(r.b)("inlineCode",{parentName:"h3"},"Name")),Object(r.b)("p",null,"Enter the name of the check box component."),Object(r.b)("h3",{id:"checked"},Object(r.b)("inlineCode",{parentName:"h3"},"Checked")),Object(r.b)("p",null,"Specify the default status."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check On\xa0:\xa0Checked."),Object(r.b)("li",{parentName:"ul"},"Check Off\xa0:\xa0Not Checked")),Object(r.b)("h3",{id:"width"},Object(r.b)("inlineCode",{parentName:"h3"},"Width")),Object(r.b)("p",null,"Specify the minimum width of the check box. (in pixels)"),Object(r.b)("h3",{id:"height"},Object(r.b)("inlineCode",{parentName:"h3"},"Height")),Object(r.b)("p",null,"Specify the minimum height of the check box. (in pixels)"),Object(r.b)("h3",{id:"enable"},Object(r.b)("inlineCode",{parentName:"h3"},"Enable")),Object(r.b)("p",null,"Specify whether to enable it or not."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check On\xa0:\xa0Available"),Object(r.b)("li",{parentName:"ul"},"Check Off\xa0:\xa0Unavailable (grayed out)")),Object(r.b)("h3",{id:"left-text"},Object(r.b)("inlineCode",{parentName:"h3"},"Left text")),Object(r.b)("p",null,"Display the text on the left side of the check box."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check On\xa0:\xa0Text will be on the left side"),Object(r.b)("li",{parentName:"ul"},"Check Off\xa0:\xa0Text will be on the default (right) side")),Object(r.b)("h2",{id:"command-to-use"},"Command to use"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Command"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"),Object(r.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Sample Code"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:null}),'dlg.isbutton_checked("component name")'),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Check if the check box is checked or not Returns a Boolean value (",Object(r.b)("inlineCode",{parentName:"td"},"True"),"/",Object(r.b)("inlineCode",{parentName:"td"},"False"),")"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Input:")," ",Object(r.b)("inlineCode",{parentName:"td"},'dlg.isbutton_checked("CheckBoxButton")'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:null}),'dlg.set_checkbox_state("name", Bool)'),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Specify the status (checked/unchecked) of the check box"),Object(r.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(r.b)("em",{parentName:"td"},"Input:")," ",Object(r.b)("inlineCode",{parentName:"td"},'dlg.set_checkbox_state("CheckBox1", True)'))))))}d.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var c=n(0),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=c,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return n?a.a.createElement(h,b(b({ref:t},l),{},{components:n})):a.a.createElement(h,b({ref:t},l))}));function h(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,i=new Array(r);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:c,i[1]=b;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},726:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_CheckBox-70f093929375065b2804def8bcccf09d.png"},727:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);