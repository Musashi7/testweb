(window.webpackJsonp=window.webpackJsonp||[]).push([[931],{1010:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var o=n(3),r=n(7),c=(n(0),n(1441)),a={id:"Tools.NodeCS",title:"Tools.NodeCS()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"create Node CS"},l={unversionedId:"psj-command/tools/Tools.NodeCS",id:"psj-command/tools/Tools.NodeCS",isDocsHomePage:!1,title:"Tools.NodeCS()",description:"create Node CS",source:"@site/docs\\psj-command\\tools\\Tools.NodeCS.md",slug:"/psj-command/tools/Tools.NodeCS",permalink:"/testweb/docs/psj-command/tools/Tools.NodeCS",version:"current",sidebar:"api",previous:{title:"Tools.ModelInfo()",permalink:"/testweb/docs/psj-command/tools/Tools.ModelInfo"},next:{title:"Tools.NodeCSGroup()",permalink:"/testweb/docs/psj-command/tools/Tools.NodeCSGroup"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create Node CS"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"Tools.NodeCS(crlInst=[], crCoordSystem=None)\n")),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Tools-AddNodeCS")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Tools --\x3e NodeCS")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlInst"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the inst. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crCoordSystem"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the coordinate system. The default value is None.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"Tools.NodeCS(crlInst=[], crCoordSystem=None)\n")))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||c;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=b;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);