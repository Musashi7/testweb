(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),l=(n(0),n(615)),i={id:"JPT.RemoveAllSolverjob",title:"JPT.RemoveAllSolverjob()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Remove all the existing solver jobs (Analysis jobs)"},a={unversionedId:"psj-utility/JPT.RemoveAllSolverjob",id:"psj-utility/JPT.RemoveAllSolverjob",isDocsHomePage:!1,title:"JPT.RemoveAllSolverjob()",description:"Remove all the existing solver jobs (Analysis jobs)",source:"@site/docs\\psj-utility\\PSJ-Utility_RemoveAllSolverjob.md",slug:"/psj-utility/JPT.RemoveAllSolverjob",permalink:"/testweb/docs/psj-utility/JPT.RemoveAllSolverjob",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Remove all the existing solver jobs (Analysis jobs)."),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.RemoveAllSolverjob()\n")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,"This utility function does not require any input value."),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"This utility function does not have output value."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,33}","{0,33}":!0}),'# Create solver jobs\nJPT.Exec(\'Nastran_LinearStatic("Job_1", "", [], 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, \\\n                               1.79769e+308, 2147483647, 0, 2147483647, 0, 1, 101, "", \\\n                               [1.79769e+308, 1.79769e+308, 2147483647], [0, 1.79769e+308, \\\n                               1.79769e+308, 2147483647, 0, 0, 1.79769e+308, 1.79769e+308, \\\n                               2147483647], [1.79769e+308, 1.79769e+308, 2147483647, 0], \\\n                               [2147483647, 1.79769e+308, 2147483647, 2, 0], [2147483647, \\\n                               2147483647, 2147483647, 2147483647, 2147483647, 2147483647, \\\n                               2147483647, 0, 0, 2147483647, 0, 2147483647, 2147483647, 0, \\\n                               0, 0, 0, 2147483647, 2147483647, 1, 0, 0, 0, 1, 0, 0, 0, 0, \\\n                               0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0], [0, ""], [2147483647, \\\n                               2147483647, 2147483647, 2147483647, 2147483647, 2147483647], \\\n                               [-1, 0, 0, "", "", "", "", 2147483647, 2, 0, 1.79769e+308, \\\n                               1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, \\\n                               2147483647, 1, 0], [1, 3, 1, 0, 0, 1, 0.01, 0.01, 0.01], \\\n                               [2147483647, 1.79769e+308, 2147483647], [], "", "", "", "", \\\n                               "", 0, 1, 0, 0:0, "", 0, 0)\')\nJPT.Exec(\'CreateAbaqusJob("Job_3", 0, 0, 0, 0, 1, 0, "", [], 0:0, [], 0, 0, 0, 0, 1, 0:0, 1)\')\nJPT.Exec(\'TSSolverLinearStatic("Job_4", "", [], 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1.79769e+308, 2147483647, \\\n                               0, 1024, 0, 0, 101, "", [1.79769e+308, 1.79769e+308, 2147483647], [0, \\\n                               1.79769e+308, 1.79769e+308, 2147483647, 0, 0, 1.79769e+308, 1.79769e+308, \\\n                               2147483647], [1.79769e+308, 1.79769e+308, 2147483647, 0], [2147483647, \\\n                               1.79769e+308, 2147483647, 2, 0], [2147483647, 2147483647, 2147483647, \\\n                               2147483647, 2147483647, 2147483647, 2147483647, 0, 0, 2147483647, 0, 0, 0, \\\n                               0, 0, 0, 0, 2147483647, 2147483647, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, \\\n                               0, 0, 0, 0, 0, 0], [0], [0, ""], [2147483647, 2147483647, 2147483647, 2147483647, \\\n                               2147483647, 2147483647], [-1, 0, 0, "", "", "", "", 2147483647, 2, 0, 1.79769e+308, \\\n                               1.79769e+308, 1.79769e+308, 1.79769e+308, 1.79769e+308, 0, 2147483647, 1, 0], [1, \\\n                               3, 2147483647, 0, 0, 1, 1.79769e+308, 1.79769e+308, 0.01], [2147483647, 1.79769e+308, \\\n                               2147483647], [], "", "", "", "", "", 0, 0:0, "")\')\n\n# Remove all the created solver jobs\nJPT.RemoveAllSolverjob()\n')))}s.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,v=p["".concat(i,".").concat(d)]||p[d]||b[d]||l;return n?o.a.createElement(v,a(a({ref:t},u),{},{components:n})):o.a.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);