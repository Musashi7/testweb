(window.webpackJsonp=window.webpackJsonp||[]).push([[1106],{1185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),l=(t(0),t(1441)),o={id:"MeshCleanup.ChangeTopology.Element.SurfaceElement",title:"MeshCleanup.ChangeTopology.Element.SurfaceElement()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Unknown Description"},c={unversionedId:"psj-command/mesh-clearnup/MeshCleanup.ChangeTopology.Element.SurfaceElement",id:"psj-command/mesh-clearnup/MeshCleanup.ChangeTopology.Element.SurfaceElement",isDocsHomePage:!1,title:"MeshCleanup.ChangeTopology.Element.SurfaceElement()",description:"Unknown Description",source:"@site/docs\\psj-command\\mesh-clearnup\\MeshCleanup.ChangeTopology.Element.SurfaceElement.md",slug:"/psj-command/mesh-clearnup/MeshCleanup.ChangeTopology.Element.SurfaceElement",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.ChangeTopology.Element.SurfaceElement",version:"current",sidebar:"api",previous:{title:"MeshCleanup.AutoCheck()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.AutoCheck"},next:{title:"MeshCleanup.Cleanup.CloseGap()",permalink:"/testweb/docs/psj-command/mesh-clearnup/MeshCleanup.Cleanup.CloseGap"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],i={toc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Unknown Description"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.ChangeTopology.Element.SurfaceElement(ilElement, ilFace, ilPart, iCreateNewPart)\n")),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-MeshCleanup-ChangeTopologyElement")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"MeshCleanup --\x3e ChangeTopology --\x3e Element --\x3e SurfaceElement")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"ilElement"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Integer List")," specifying the element. This is a required input.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"ilFace"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Integer List")," specifying the face. This is a required input.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"ilPart"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Integer List")," specifying the part. This is a required input.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iCreateNewPart"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the create new part. This is a required input.")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"MeshCleanup.ChangeTopology.Element.SurfaceElement(ilElement, ilFace, ilPart, iCreateNewPart)\n")))}u.isMDXComponent=!0},1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),u=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||l;return t?a.a.createElement(d,c(c({ref:n},i),{},{components:t})):a.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var i=2;i<l;i++)o[i]=t[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);