(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{477:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(615)),o={id:"JPT.RemoveAllMeshSettings",title:"JPT.RemoveAllMeshSettings()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Remove all the existing local mesh settings"},l={unversionedId:"psj-utility/JPT.RemoveAllMeshSettings",id:"psj-utility/JPT.RemoveAllMeshSettings",isDocsHomePage:!1,title:"JPT.RemoveAllMeshSettings()",description:"Remove all the existing local mesh settings",source:"@site/docs\\psj-utility\\PSJ-Utility_RemoveAllMeshSettings.md",slug:"/psj-utility/JPT.RemoveAllMeshSettings",permalink:"/testweb/docs/psj-utility/JPT.RemoveAllMeshSettings",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Remove all the existing local mesh settings."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.RemoveAllMeshSettings()\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,"This utility function does not require any input value."),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"This utility function does not have output value."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,30}","{0,30}":!0}),'# Create sample model\nGeometry.Part.Cube(iColorPart=5688524)\nMeshing.LocalSettings.Face(strName="MeshParam_1",\n                           localMesh=LOCAL_MESH(iEntityType=2,\n                                                bEnableSizeParams=True,\n                                                dAvgElemSize=0.005,\n                                                dMaxElemSize=0.01,\n                                                dMinElemSize=0.001,\n                                                bEnableMeshPattern=True,\n                                                iMeshPatternType=1),\n                           crlTarget=[Face(26)])\nMeshing.LocalSettings.Edge(strName="MeshParam_2",\n                           localMesh=LOCAL_MESH(iEntityType=3,\n                                                dAvgElemSize=0.005,\n                                                dMaxElemSize=0.01,\n                                                dMinElemSize=0.001,\n                                                dTrimAngle=0.7853981634,\n                                                bEnableMeshCount=True,\n                                                iNodeCount=1),\n                           crlTarget=[Edge(18, 17, 19)])\nMeshing.LocalSettings.Part(strName="MeshParam_3",\n                           localMesh=LOCAL_MESH(iEntityType=1,\n                                                bEnableSizeParams=True,\n                                                dAvgElemSize=0.005,\n                                                dMaxElemSize=0.01,\n                                                dMinElemSize=0.001),\n                           crlTarget=[Part(1)])\n\n# Delete all the created local meshing\nJPT.RemoveAllMeshSettings()\n')))}u.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||a;return n?i.a.createElement(b,l(l({ref:t},s),{},{components:n})):i.a.createElement(b,l({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);