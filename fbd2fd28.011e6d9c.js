(window.webpackJsonp=window.webpackJsonp||[]).push([[1330],{1409:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(1441)),i={id:"BoundaryConditions.HeatFlux.SurfaceFlux",title:"BoundaryConditions.HeatFlux.SurfaceFlux()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"create surface flux"},c={unversionedId:"psj-command/boundary-conditions/BoundaryConditions.HeatFlux.SurfaceFlux",id:"psj-command/boundary-conditions/BoundaryConditions.HeatFlux.SurfaceFlux",isDocsHomePage:!1,title:"BoundaryConditions.HeatFlux.SurfaceFlux()",description:"create surface flux",source:"@site/docs\\psj-command\\boundary-conditions\\BoundaryConditions.HeatFlux.SurfaceFlux.md",slug:"/psj-command/boundary-conditions/BoundaryConditions.HeatFlux.SurfaceFlux",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.HeatFlux.SurfaceFlux",version:"current",sidebar:"api",previous:{title:"BoundaryConditions.HeatFlux.ConcentrateFlux()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.HeatFlux.ConcentrateFlux"},next:{title:"BoundaryConditions.HeatFlux.SurfaceMapping()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.HeatFlux.SurfaceMapping"}},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Create surface flux"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"BoundaryConditions.HeatFlux.SurfaceFlux(strName, dFflux, iDistributionMethod, crTable, crlTarget, crEdit=None)\n")),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-BoundaryConditions-SurfaceFlux")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"BoundaryConditions --\x3e HeatFlux --\x3e SurfaceFlux")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"strName"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String")," specifying the name. This is a required input.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"dFflux"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the fflux. This is a required input.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"iDistributionMethod"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the distribution method. This is a required input.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crTable"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the table. This is a required input.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the target. This is a required input.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"An ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"BoundaryConditions.HeatFlux.SurfaceFlux(strName, dFflux, iDistributionMethod, crTable, crlTarget, crEdit=None)\n")))}b.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||d[s]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);