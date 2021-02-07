(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||a;return t?o.a.createElement(d,c(c({ref:n},p),{},{components:t})):o.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),o=t(7),a=(t(0),t(1441)),i={id:"ImprintPlannarLineS",title:"ImprintPlannarLineS",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},c={unversionedId:"macro/geometry/ImprintPlannarLineS",id:"macro/geometry/ImprintPlannarLineS",isDocsHomePage:!1,title:"ImprintPlannarLineS",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-ImprintPlannarLineS.md",slug:"/macro/geometry/ImprintPlannarLineS",permalink:"/testweb/docs/macro/geometry/ImprintPlannarLineS",version:"current",sidebar:"api",previous:{title:"GeometryCADTrim",permalink:"/testweb/docs/macro/geometry/GeometryCADTrim"},next:{title:"Imprint_Projection_LineS",permalink:"/testweb/docs/macro/geometry/Imprint_Projection_LineS"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Create imprint planar line"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"ImprintPlannarLineS(double[] taPositions, cursor[] taTargetFace, cursor crLocalCoor, int iType, bool bBreakFace)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  Double[]\nTarget points for imprinting -> Point_n(","[xi, yi, zi]",")"),Object(a.b)("p",null,"2",".","  Cursor[]\nTarget faces cursor(","[6:Face ID]",")"),Object(a.b)("p",null,"3",".","  Cursor\nWhether use local coordinate or not True = 27:*, False = 0:0"),Object(a.b)("p",null,"4",".","  Int\nType option"),Object(a.b)("p",null,"5",".","  Bool\nWhether break face or not True = 1, False = 0"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"ImprintPlannarLineS([[0.0017364817766693, 0.004444444444444444, -0.009848077530122082]], [6:5], 0:0, 1, 0)\n")))}u.isMDXComponent=!0}}]);