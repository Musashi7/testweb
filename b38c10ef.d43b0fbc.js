(window.webpackJsonp=window.webpackJsonp||[]).push([[907],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return n?o.a.createElement(m,l(l({ref:t},p),{},{components:n})):o.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},986:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(1441)),i={id:"HexModeling.AutoSweep",title:"HexModeling.AutoSweep()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Hex Modeling Auto Sweep"},l={unversionedId:"psj-command/hex-modeling/HexModeling.AutoSweep",id:"psj-command/hex-modeling/HexModeling.AutoSweep",isDocsHomePage:!1,title:"HexModeling.AutoSweep()",description:"Hex Modeling Auto Sweep",source:"@site/docs\\psj-command\\hex-modeling\\HexModeling.AutoSweep.md",slug:"/psj-command/hex-modeling/HexModeling.AutoSweep",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.AutoSweep",version:"current",sidebar:"api",previous:{title:"Groups.RightClick.Rename()",permalink:"/testweb/docs/psj-command/groups/Groups.RightClick.Rename"},next:{title:"HexModeling.BallHexa()",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.BallHexa"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Hex Modeling Auto Sweep"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"HexModeling.AutoSweep(crlPart=[], dMeshSize=0.0, bLayers=False, iLayers=2)\n")),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-HexModeling-HexModelAutoSweep")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"HexModeling --\x3e AutoSweep")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlPart"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor List")," specifying the part. The default value is [].")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dMeshSize"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the mesh size. The default value is 0.0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"bLayers"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying the layers. The default value is False.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iLayers"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the layers. The default value is 2.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"HexModeling.AutoSweep(crlPart=[], dMeshSize=0.0, bLayers=False, iLayers=2)\n")))}u.isMDXComponent=!0}}]);