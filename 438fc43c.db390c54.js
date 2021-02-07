(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||a;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var b=2;b<a;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},424:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),a=(n(0),n(1441)),c={id:"Tools.Coordinates.AttachNode",title:"Tools.Coordinates.AttachNode()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"create Coordinate by AttachNode"},i={unversionedId:"psj-command/tools/Tools.Coordinates.AttachNode",id:"psj-command/tools/Tools.Coordinates.AttachNode",isDocsHomePage:!1,title:"Tools.Coordinates.AttachNode()",description:"create Coordinate by AttachNode",source:"@site/docs\\psj-command\\tools\\Tools.Coordinates.AttachNode.md",slug:"/psj-command/tools/Tools.Coordinates.AttachNode",permalink:"/testweb/docs/psj-command/tools/Tools.Coordinates.AttachNode",version:"current",sidebar:"api",previous:{title:"Tools.Coordinates.AttachCircle()",permalink:"/testweb/docs/psj-command/tools/Tools.Coordinates.AttachCircle"},next:{title:"Tools.Coordinates.CylinderFace()",permalink:"/testweb/docs/psj-command/tools/Tools.Coordinates.CylinderFace"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Create Coordinate by AttachNode"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'Tools.Coordinates.AttachNode(strName="CRect1", iCoordType=0, crNode=None, bCreateNew=True, crRefCoord=None, crEdit=None)\n')),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-Tools-CreateCoordinateAttachNode")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"Tools --\x3e Coordinates --\x3e AttachNode")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strName"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "CRect1".')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iCoordType"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the coordinate type. The default value is 0.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crNode"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the node. The default value is None.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"bCreateNew"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying the create new. The default value is True.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crRefCoord"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the reference coordinate. The default value is None.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),'Tools.Coordinates.AttachNode(strName="CRect1", iCoordType=0, crNode=None, bCreateNew=True, crRefCoord=None, crEdit=None)\n')))}s.isMDXComponent=!0}}]);