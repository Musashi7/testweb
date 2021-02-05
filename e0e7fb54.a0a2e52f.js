(window.webpackJsonp=window.webpackJsonp||[]).push([[465],{544:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return a})),t.d(n,"default",(function(){return d}));var r=t(3),l=t(7),o=(t(0),t(615)),i={title:"Open File/Folder",id:"open-file-folder"},c={unversionedId:"gui-command-builder/open-file-folder",id:"gui-command-builder/open-file-folder",isDocsHomePage:!1,title:"Open File/Folder",description:"Create a open file/folder selection.",source:"@site/docs\\gui-command-builder\\GUI_CommandBuilder_Component-Parameter_OpenFile_Folder.md",slug:"/gui-command-builder/open-file-folder",permalink:"/testweb/docs/gui-command-builder/open-file-folder",version:"current",sidebar:"extensions",previous:{title:"Separator",permalink:"/testweb/docs/gui-command-builder/separator"},next:{title:"Table",permalink:"/testweb/docs/gui-command-builder/table"}},a=[{value:"Parameters",id:"parameters",children:[{value:"<code>Name</code>",id:"name",children:[]},{value:"<code>Enable</code>",id:"enable",children:[]},{value:"<code>Mode</code>",id:"mode",children:[]},{value:"<code>Default</code>",id:"default",children:[]},{value:"<code>Filter</code>",id:"filter",children:[]},{value:"<code>Allow Multiple Selection</code>",id:"allow-multiple-selection",children:[]}]}],u={toc:a};function d(e){var n=e.components,i=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,i,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Create a open file/folder selection."),Object(o.b)("p",null,Object(o.b)("img",{src:t(798).default})),Object(o.b)("p",null,"Preview dialog:"),Object(o.b)("p",null,Object(o.b)("img",{src:t(799).default})),Object(o.b)("h2",{id:"parameters"},"Parameters"),Object(o.b)("h3",{id:"name"},Object(o.b)("inlineCode",{parentName:"h3"},"Name")),Object(o.b)("p",null,"Enter the Open File/Folder component name."),Object(o.b)("h3",{id:"enable"},Object(o.b)("inlineCode",{parentName:"h3"},"Enable")),Object(o.b)("p",null,"Specify whether to enable it or not."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check On\xa0:\xa0Available"),Object(o.b)("li",{parentName:"ul"},"Check Off\xa0:\xa0Unavailable (grayed out)")),Object(o.b)("h3",{id:"mode"},Object(o.b)("inlineCode",{parentName:"h3"},"Mode")),Object(o.b)("p",null,"Specify the selection mode."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"File\xa0:\xa0Only the file type can be selected."),Object(o.b)("li",{parentName:"ul"},"Folder\xa0:\xa0Only the Folder type can be selected.")),Object(o.b)("h3",{id:"default"},Object(o.b)("inlineCode",{parentName:"h3"},"Default")),Object(o.b)("p",null,"The default value (File/Folder) link to display."),Object(o.b)("h3",{id:"filter"},Object(o.b)("inlineCode",{parentName:"h3"},"Filter")),Object(o.b)("p",null,"Enter the File type user can select."),Object(o.b)("p",null,"Filter format:"),Object(o.b)("p",null,"Description 1 (Extension 1, Extension 2, ...), Description 2 (Extension 1, Extension 2, ...), ..."),Object(o.b)("h3",{id:"allow-multiple-selection"},Object(o.b)("inlineCode",{parentName:"h3"},"Allow Multiple Selection")),Object(o.b)("p",null,"Choose if multiple files can be selected or not."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Check On\xa0:\xa0Allowed"),Object(o.b)("li",{parentName:"ul"},"Check Off\xa0:\xa0Not allowed")))}d.isMDXComponent=!0},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),l=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=l.a.createContext({}),d=function(e){var n=l.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=d(e.components);return l.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},m=l.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),b=d(t),m=r,f=b["".concat(i,".").concat(m)]||b[m]||p[m]||o;return t?l.a.createElement(f,c(c({ref:n},u),{},{components:t})):l.a.createElement(f,c({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},798:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/GUI_CommandBuilder_Component-Parameter_OpenFile_Folder-4eb48045a9bd441d3b16dcf8940ac7ee.png"},799:function(e,n,t){"use strict";t.r(n),n.default="data:image/png;base64,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"}}]);