(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),s=r,d=b["".concat(c,".").concat(s)]||b[s]||m[s]||a;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(1441)),c={id:"ImportSpatial",title:"ImportSpatial",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},i={unversionedId:"macro/home/ImportSpatial",id:"macro/home/ImportSpatial",isDocsHomePage:!1,title:"ImportSpatial",description:"Description",source:"@site/docs\\macro\\home\\Macro-Home-ImportSpatial.md",slug:"/macro/home/ImportSpatial",permalink:"/testweb/docs/macro/home/ImportSpatial",version:"current",sidebar:"api",previous:{title:"CaptureToImageFile",permalink:"/testweb/docs/macro/home/CaptureToImageFile"},next:{title:"ImportGeomBDF",permalink:"/testweb/docs/macro/home/ImportGeomBDF"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Import CAD file by Spatial interface"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"ImportSpatial(string[] vecPath, double surface_plane_tolerance, double suface_plane_angle, double max_facet_width, int NX_multibody, int healing, int isNXDirect, int setFaceColor, String facetParamCsvFile)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  String[]\nMultiple CAD file paths"),Object(a.b)("p",null,"2",".","  Double\nSurface plane tolerance option"),Object(a.b)("p",null,"3",".","  Double\nSuface plane angle option"),Object(a.b)("p",null,"4",".","  Double\nMax facet width option"),Object(a.b)("p",null,"5",".","  Int\nFlag of NX Multibody"),Object(a.b)("p",null,"6",".","  Int\nFlag of healing option"),Object(a.b)("p",null,"7",".","  Int\nFlag of NXDirect"),Object(a.b)("p",null,"8",".","  Int\nFlag of setting face color option"),Object(a.b)("p",null,"9",".","  String\nFacet parameter csv file path"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'ImportSpatial(["D:/ImportFile/Spatial_Test.SAT"], 0, 20, 0.1, 1, 1, 0, 1, "")\n')))}u.isMDXComponent=!0}}]);