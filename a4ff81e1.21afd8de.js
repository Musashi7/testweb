(window.webpackJsonp=window.webpackJsonp||[]).push([[823],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||s[m]||c;return n?a.a.createElement(d,i(i({ref:t},p),{},{components:n})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},902:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(1441)),o={id:"Geometry.ShowAdjacent.Faces",title:"Geometry.ShowAdjacent.Faces()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Show Adjacent Face"},i={unversionedId:"psj-command/geometry/Geometry.ShowAdjacent.Faces",id:"psj-command/geometry/Geometry.ShowAdjacent.Faces",isDocsHomePage:!1,title:"Geometry.ShowAdjacent.Faces()",description:"Show Adjacent Face",source:"@site/docs\\psj-command\\geometry\\Geometry.ShowAdjacent.Faces.md",slug:"/psj-command/geometry/Geometry.ShowAdjacent.Faces",permalink:"/testweb/docs/psj-command/geometry/Geometry.ShowAdjacent.Faces",version:"current",sidebar:"api",previous:{title:"Geometry.ShowAdjacent.Elements()",permalink:"/testweb/docs/psj-command/geometry/Geometry.ShowAdjacent.Elements"},next:{title:"Geometry.SquareUpFillet()",permalink:"/testweb/docs/psj-command/geometry/Geometry.SquareUpFillet"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Unknown Description"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.ShowAdjacent.Faces(dAngle=0.0, iIncludeStopFace=0, iLayer=1, bIsPreview=0, crlStartFace=[] , crlStopFace=[])\n")),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Geometry-Geom_ShowAdjacent")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Geometry --\x3e ShowAdjacent --\x3e Faces")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"dAngle"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying the angle as a boundary. The default value is 0.0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iIncludeStopFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," enable/disable including stop face. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iLayer"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the number of layer. This is a required input.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"bIsPreview"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Boolean")," enable/disable preview option. The default value is False.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlStartFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the list of start face. This is a required input.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlStopFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the list of stop face. This is a required input.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.ShowAdjacent.Faces(dAngle=0.0, iIncludeStopFace=0, iLayer=1, bIsPreview=0, crlStartFace=[] , crlStopFace=[])\n")))}b.isMDXComponent=!0}}]);