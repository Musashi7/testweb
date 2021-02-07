(window.webpackJsonp=window.webpackJsonp||[]).push([[714],{1441:function(e,r,n){"use strict";n.d(r,"a",(function(){return d})),n.d(r,"b",(function(){return m}));var t=n(0),o=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=t,m=d["".concat(i,".").concat(s)]||d[s]||b[s]||c;return n?o.a.createElement(m,a(a({ref:r},p),{},{components:n})):o.a.createElement(m,a({ref:r},p))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,i=new Array(c);i[0]=s;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:t,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},793:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return i})),n.d(r,"metadata",(function(){return a})),n.d(r,"toc",(function(){return l})),n.d(r,"default",(function(){return u}));var t=n(3),o=n(7),c=(n(0),n(1441)),i={id:"ImprintPerpendicularCylinderLineS",title:"ImprintPerpendicularCylinderLineS",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/geometry/ImprintPerpendicularCylinderLineS",id:"macro/geometry/ImprintPerpendicularCylinderLineS",isDocsHomePage:!1,title:"ImprintPerpendicularCylinderLineS",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-ImprintPerpendicularCylinderLineS.md",slug:"/macro/geometry/ImprintPerpendicularCylinderLineS",permalink:"/testweb/docs/macro/geometry/ImprintPerpendicularCylinderLineS",version:"current",sidebar:"api",previous:{title:"CreateFaceFromMeshFace",permalink:"/testweb/docs/macro/geometry/CreateFaceFromMeshFace"},next:{title:"GeometoryImprintEdgeSpline",permalink:"/testweb/docs/macro/geometry/GeometoryImprintEdgeSpline"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function u(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create imprint PerpendicularCylinder line"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("p",null,"ImprintPerpendicularCylinderLineS(cursor[] crNode, cursor[] crFace, int iMethod, double dLength, bool bOpSide, bool bBrFace)"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1",".","  Cursor[]\nTarget node cursor(","[10:Node ID]",")"),Object(c.b)("p",null,"2",".","  Cursor[]\nTarget face cursor(","[6:Face ID]",")"),Object(c.b)("p",null,"3",".","  Int\nImprint method*"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{}),"*0: Center angle\n\n\u20021: ArcLength\n")),Object(c.b)("p",null,"4",".","  Double\nLength/ Angle offset"),Object(c.b)("p",null,"5",".","  Bool\nOpposite side bool flag True = 1, False = 0"),Object(c.b)("p",null,"6",".","  Bool\nBreak face bool flag True = 1, False = 0"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"ImprintPerpendicularCylinderLineS([10:283, 10:281], [6:5], 0, 3, 0, 1)\n")))}u.isMDXComponent=!0}}]);