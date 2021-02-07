(window.webpackJsonp=window.webpackJsonp||[]).push([[677],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},756:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1441)),i={id:"Geometry.Transform.Translation",title:"Geometry.Transform.Translation()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Translate Part entity"},l={unversionedId:"psj-command/geometry/Geometry.Transform.Translation",id:"psj-command/geometry/Geometry.Transform.Translation",isDocsHomePage:!1,title:"Geometry.Transform.Translation()",description:"Translate Part entity",source:"@site/docs\\psj-command\\geometry\\Geometry.Transform.Translation.md",slug:"/psj-command/geometry/Geometry.Transform.Translation",permalink:"/testweb/docs/psj-command/geometry/Geometry.Transform.Translation",version:"current",sidebar:"api",previous:{title:"Geometry.Transform.Scaling()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Transform.Scaling"},next:{title:"Groups.RightClick.AddSupGroup()",permalink:"/testweb/docs/psj-command/groups/Groups.RightClick.AddSupGroup"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This method moves the parts along a given vector. The direction and magnitude of the vector are arbitrary or along the specific axis in Cartesian coordinates."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Transform.Translation(crlPart=[], poslTranslates=[], crCoord=None, bCreateNewPart=False,\n    bCopyLBC=False, bCopyProperty=False, iCopyCount=1)\n")),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-Geometry-TranslateBody")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Geometry --\x3e Transform --\x3e Translation")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"crlPart")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"List of Cursor")," specifying the parts to be moved."),Object(o.b)("li",{parentName:"ul"},"The default value is [].")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"poslTranslates")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"List of Position")," specifying the translation vector in ",Object(o.b)("em",{parentName:"li"},"crCoord")," coordinates system that defines the direction and magnitude of the particular translation."),Object(o.b)("li",{parentName:"ul"},"The default value is [].")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"crCoord")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the local coordinate system in which to define ",Object(o.b)("em",{parentName:"li"},"poslTranslates"),"."),Object(o.b)("li",{parentName:"ul"},"The default value is None.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bCreateNewPart")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Boolean")," specifying whether to copy the copies to new parts."),Object(o.b)("li",{parentName:"ul"},"The default value is ",Object(o.b)("em",{parentName:"li"},"False"),".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bCopyLBC")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Boolean")," specifying whether to copy load boundary conditions from the existing part to new parts."),Object(o.b)("li",{parentName:"ul"},"The default value is ",Object(o.b)("em",{parentName:"li"},"False"),".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"bCopyProperty")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Boolean")," specifying whether to copy property from the existing part to new parts."),Object(o.b)("li",{parentName:"ul"},"The default value is ",Object(o.b)("em",{parentName:"li"},"False"),".")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iCopyCount")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the number of copies."),Object(o.b)("li",{parentName:"ul"},"The default value is 1.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if fail."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Geometry.Part.Cube(iColorPart=8124407)\n\nGeometry.Transform.Translation(crlPart=[Part(1)], poslTranslates=[[-0.00666, 0.00222, 0]])\n\n\n")))}b.isMDXComponent=!0}}]);