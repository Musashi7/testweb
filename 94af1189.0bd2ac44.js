(window.webpackJsonp=window.webpackJsonp||[]).push([[731],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),s=r,m=d["".concat(o,".").concat(s)]||d[s]||b[s]||c;return t?a.a.createElement(m,i(i({ref:n},p),{},{components:t})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=s;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},810:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),c=(t(0),t(1441)),o={id:"HexModeling.FaceToFace",title:"HexModeling.FaceToFace()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:null},i={unversionedId:"psj-command/hex-modeling/HexModeling.FaceToFace",id:"psj-command/hex-modeling/HexModeling.FaceToFace",isDocsHomePage:!1,title:"HexModeling.FaceToFace()",description:"Description",source:"@site/docs\\psj-command\\hex-modeling\\HexModeling.FaceToFace.md",slug:"/psj-command/hex-modeling/HexModeling.FaceToFace",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.FaceToFace",version:"current",sidebar:"api",previous:{title:"HexModeling.Curve()",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.Curve"},next:{title:"HexModeling.FromMidPlane()",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.FromMidPlane"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"HexModeling.FaceToFace(crSrcFace, crDstFace, bDeleteOriginalParts=True)\n")),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-HexModeling-HexSweepFaceToFace")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"HexModeling --\x3e FaceToFace")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crSrcFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the source face. This is a required input.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crDstFace"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying the dst face. This is a required input.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"bDeleteOriginalParts"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Boolean")," specifying the delete original parts. The default value is True.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"HexModeling.FaceToFace(crSrcFace, crDstFace, bDeleteOriginalParts=True)\n")))}u.isMDXComponent=!0}}]);