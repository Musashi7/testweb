(window.webpackJsonp=window.webpackJsonp||[]).push([[1305],{1384:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),l=n(7),i=(n(0),n(1441)),a={id:"JPT.GetAllElems",title:"JPT.GetAllElems()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get all the information of all existing elements"},o={unversionedId:"psj-utility/JPT.GetAllElems",id:"psj-utility/JPT.GetAllElems",isDocsHomePage:!1,title:"JPT.GetAllElems()",description:"Get all the information of all existing elements",source:"@site/docs\\psj-utility\\PSJ-Utility_GetAllElems.md",slug:"/psj-utility/JPT.GetAllElems",permalink:"/testweb/docs/psj-utility/JPT.GetAllElems",version:"current",sidebar:"api",previous:{title:"JPT.GetAllEdges()",permalink:"/testweb/docs/psj-utility/JPT.GetAllEdges"},next:{title:"JPT.GetAllFaces()",permalink:"/testweb/docs/psj-utility/JPT.GetAllFaces"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Get all the information of all existing elements."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetAllElems()\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"This utility function does not require any input value."),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"ElemVector"}),"ElemVector"))," object containing a ",Object(i.b)("em",{parentName:"p"},"list")," of existing elements with their information."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,7}","{0,7}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Get the information of all existing elements\nelems = JPT.GetAllElems()\nJPT.Debugger(elems)\n')))}u.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),l=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),u=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},b=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||m[b]||i;return n?l.a.createElement(d,o(o({ref:t},s),{},{components:n})):l.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return l.a.createElement.apply(null,a)}return l.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);