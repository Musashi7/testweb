(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),u=n,d=m["".concat(c,".").concat(u)]||m[u]||b[u]||o;return r?a.a.createElement(d,l(l({ref:t},p),{},{components:r})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},482:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(1441)),c={id:"Geometry.LogoRemoval",title:"Geometry.LogoRemoval()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create Face From Edges"},l={unversionedId:"psj-command/geometry/Geometry.LogoRemoval",id:"psj-command/geometry/Geometry.LogoRemoval",isDocsHomePage:!1,title:"Geometry.LogoRemoval()",description:"Create Face From Edges",source:"@site/docs\\psj-command\\geometry\\Geometry.LogoRemoval.md",slug:"/psj-command/geometry/Geometry.LogoRemoval",permalink:"/testweb/docs/psj-command/geometry/Geometry.LogoRemoval",version:"current",sidebar:"api",previous:{title:"Geometry.FindFeature.Fillet()",permalink:"/testweb/docs/psj-command/geometry/Geometry.FindFeature.Fillet"},next:{title:"Geometry.MakeFacePlanar()",permalink:"/testweb/docs/psj-command/geometry/Geometry.MakeFacePlanar"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:i};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Create Face From Edges"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Geometry.LogoRemoval(crlStartFaces=[], crlStopFaces=[], iLayers=5, bMergeFaces=False)\n")),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Geometry-LogoRemoval")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Geometry --\x3e LogoRemoval")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlStartFaces"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the start faces. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlStopFaces"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the stop faces. The default value is [].")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iLayers"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the layers. The default value is 5.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"bMergeFaces"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Boolean")," specifying the merge faces. The default value is False.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Geometry.LogoRemoval(crlStartFaces=[], crlStopFaces=[], iLayers=5, bMergeFaces=False)\n")))}s.isMDXComponent=!0}}]);