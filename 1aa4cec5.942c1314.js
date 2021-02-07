(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1441:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return y}));var o=t(0),n=t.n(o);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=n.a.createContext({}),p=function(e){var r=n.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},b=function(e){var r=p(e.components);return n.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},s=n.a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(t),s=o,y=b["".concat(c,".").concat(s)]||b[s]||d[s]||a;return t?n.a.createElement(y,l(l({ref:r},u),{},{components:t})):n.a.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=s;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<a;u++)c[u]=t[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},209:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return l})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return p}));var o=t(3),n=t(7),a=(t(0),t(1441)),c={id:"MirrorBody",title:"MirrorBody",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},l={unversionedId:"macro/geometry/MirrorBody",id:"macro/geometry/MirrorBody",isDocsHomePage:!1,title:"MirrorBody",description:"Description",source:"@site/docs\\macro\\geometry\\Macro-Geometry-MirrorBody.md",slug:"/macro/geometry/MirrorBody",permalink:"/testweb/docs/macro/geometry/MirrorBody",version:"current",sidebar:"api",previous:{title:"MergeBodyFace",permalink:"/testweb/docs/macro/geometry/MergeBodyFace"},next:{title:"ImprintOffsetLineS",permalink:"/testweb/docs/macro/geometry/ImprintOffsetLineS"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:i};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Mirror Body"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("p",null,"MirrorBody(cursor[] taBody, double[] scaleVector, double dOffset, bool bCreateNewBody, bool bCopyLBC, bool bCopyProperty, bool bRemoveDupFace, bool bMergeNode, double dTolerance)"),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"1",".","  Cursor[]\nTarget part cursor(","[3:Part ID]",")"),Object(a.b)("p",null,"2",".","  Double[]\nMirror plane point (","[xi, yi, zi]",")"),Object(a.b)("p",null,"3",".","  Double\nMirror offset value"),Object(a.b)("p",null,"4",".","  Bool\nCreate new part bool flag True = 1, False = 0"),Object(a.b)("p",null,"5",".","  Bool\nLBC Copy bool flag True = 1, False = 0"),Object(a.b)("p",null,"6",".","  Bool\nCopy property info bool flag True = 1, False = 0"),Object(a.b)("p",null,"7",".","  Bool\nRemove duplicate faces bool flag True = 1, False = 0"),Object(a.b)("p",null,"8",".","  Bool\nEquivalance nodes bool flag True = 1, False = 0"),Object(a.b)("p",null,"9",".","  Double\nEquivalance nodes tolerance value"),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"MirrorBody([3:2], [[0, 0.004999999888241291, 0], [0.004999999888241291, 0.004999999888241291, 0], [0, 0, 0]], 0.002, 1, 0, 0, 0, 0, 1e-08)\n")))}p.isMDXComponent=!0}}]);