(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{254:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),o=t(7),c=(t(0),t(615)),a={id:"RenumberE",title:"RenumberE",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},i={unversionedId:"macro/ac-modeling/RenumberE",id:"macro/ac-modeling/RenumberE",isDocsHomePage:!1,title:"RenumberE",description:"Description",source:"@site/docs\\macro\\ac-modeling\\Macro-AC-Modeling-RenumberE.md",slug:"/macro/ac-modeling/RenumberE",permalink:"/testweb/docs/macro/ac-modeling/RenumberE",version:"current"},u=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:u};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"RenumberE"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," RenumberItem[]\nRenumberItem is a list:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"Cursor Target\n\nint Begin\n\nint NodeOrElem\n\nint Counter\n\nint Increasement\n\nint Order\n\nint Method\n\nCursor CoordinateReference\n\nint[] CoordinateOrder\n\nint[] Offset\n\ndouble[] CoordinateTolerance\n\nint ConflictStrategy\n\nint Solver\n\nbool Enable\n")),Object(c.b)("p",null,"2","."," Bool\nProperty Assigned flag True = 1, False =0"),Object(c.b)("p",null,"3","."," Bool\nSurface Corner first flag True = 1, False = 0"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"RenumberE([(3:1, 1, 0, 7743, 0, 0, 0, 0:0, [0, 0, 0], [10000, 100, 1], [0.1, 0.1, 0.1], 0, 0, 1)], 1, 0)\n")))}p.isMDXComponent=!0},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=p(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=p(t),s=r,m=b["".concat(a,".").concat(s)]||b[s]||d[s]||c;return t?o.a.createElement(m,i(i({ref:n},l),{},{components:t})):o.a.createElement(m,i({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);