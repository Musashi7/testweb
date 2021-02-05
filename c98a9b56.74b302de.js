(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{492:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t(3),c=t(7),o=(t(0),t(615)),a={id:"SurfaceFlux",title:"SurfaceFlux",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},u={unversionedId:"macro/boundary-conditions/SurfaceFlux",id:"macro/boundary-conditions/SurfaceFlux",isDocsHomePage:!1,title:"SurfaceFlux",description:"Description",source:"@site/docs\\macro\\boundary-conditions\\Macro-Boundary-Conditions-SurfaceFlux.md",slug:"/macro/boundary-conditions/SurfaceFlux",permalink:"/testweb/docs/macro/boundary-conditions/SurfaceFlux",version:"current"},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:i};function p(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"create surface flux"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"1","."," String\nSurface flux name"),Object(o.b)("p",null,"2","."," Double\nSurface flux value"),Object(o.b)("p",null,"3","."," Int\nInput unit type","*"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"*0: MW/mm^2\n\n\u20021: W/m^2\n\n\u20022:MiuW/mm^2\n\n\u20023: kcal/mm^2*h\n\n\u20024: Lbf/ft*s\n\n\u20025: Lbf/in*s\n")),Object(o.b)("p",null,"4","."," Cursor\nTable field data cursor(81:FieldData ID)"),Object(o.b)("p",null,"5","."," Cursor[]\nTarget entities cursor"),Object(o.b)("p",null,"6","."," Cursor\nN/A: Edit cursor"),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'SurfaceFlux("SurfaceHeatFlux1", 1000, 1, 81:4, [6:3, 11:693], 0:0)\n')))}p.isMDXComponent=!0},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var r=t(0),c=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),p=function(e){var n=c.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},b=function(e){var n=p(e.components);return c.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},d=c.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,f=b["".concat(a,".").concat(d)]||b[d]||s[d]||o;return t?c.a.createElement(f,u(u({ref:n},l),{},{components:t})):c.a.createElement(f,u({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<o;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);