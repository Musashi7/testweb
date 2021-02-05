(window.webpackJsonp=window.webpackJsonp||[]).push([[354],{433:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(615)),b={},c={unversionedId:"gui-command-builder/GUI_CommandBuilder_Component-Parameter_RadioButton",id:"gui-command-builder/GUI_CommandBuilder_Component-Parameter_RadioButton",isDocsHomePage:!1,title:"GUI_CommandBuilder_Component-Parameter_RadioButton",description:"Radio Button",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_RadioButton.md",slug:"/gui-command-builder/GUI_CommandBuilder_Component-Parameter_RadioButton",permalink:"/testweb/docs/gui-command-builder/GUI_CommandBuilder_Component-Parameter_RadioButton",version:"current"},l=[{value:"Parameters",id:"parameters",children:[]},{value:"Command to use",id:"command-to-use",children:[]}],i={toc:l};function u(e){var t=e.components,b=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"radio-button"},"Radio Button"),Object(o.b)("p",null,"Create a radio button."),Object(o.b)("p",null,Object(o.b)("img",{src:n(791).default})),Object(o.b)("p",null,"Preview dialog:"),Object(o.b)("p",null,Object(o.b)("img",{src:n(792).default})),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Text")),Object(o.b)("p",null,"Enter the text appears next to the radio button."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Name")),Object(o.b)("p",null,"Enter the name of the Radio Button component."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Checked")),Object(o.b)("p",null,"Specify the default status."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"True"),"\xa0:\xa0Check On"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"False"),"\xa0:\xa0Check Off")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Width")),Object(o.b)("p",null,"Specify the minimum width of the radio button. (in pixels)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Height")),Object(o.b)("p",null,"Specify the minimum height of the radio button. (in pixels)"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Enable")),Object(o.b)("p",null,"Specify whether to enable it or not."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Check On"),"\xa0:\xa0Available"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Check Off"),"\xa0:\xa0Unavailable (grayed out)")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Left text")),Object(o.b)("p",null,"Display the text on the left side of the radio button."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Check On"),"\xa0:\xa0Text will be on the left side"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Check Off"),"\xa0:\xa0Text will be on the default (right) side")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Group")),Object(o.b)("p",null,"The below Radio Button components in the Hierarchy window will be in the same group."),Object(o.b)("h2",{id:"command-to-use"},"Command to use"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Command"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Sample Code"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'dlg.isbutton_checked("component name")'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Check whether the radio button is checked or not Return a Boolean value (",Object(o.b)("inlineCode",{parentName:"td"},"True"),"/",Object(o.b)("inlineCode",{parentName:"td"},"False"),")"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"Input:")," ",Object(o.b)("inlineCode",{parentName:"td"},'dlg.isbutton_checked("CheckBoxButton")'))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'dlg.set_radiobutton_state("name", Bool)'),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Specify the radio button status (checked or unchecked)"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("em",{parentName:"td"},"Input:")," ",Object(o.b)("inlineCode",{parentName:"td"},'dlg.set_radiobutton_state("CheckBox1", True)'))))))}u.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,O=p["".concat(b,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(O,c(c({ref:t},i),{},{components:n})):r.a.createElement(O,c({ref:t},i))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,b=new Array(o);b[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,b[1]=c;for(var i=2;i<o;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},791:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/GUI_CommandBuilder_Component-Parameter_RadioButton-4207ee396ad118bb8d0b3a50e3ae62a9.png"},792:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);