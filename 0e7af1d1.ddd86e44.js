(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),u=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?c.a.createElement(m,a(a({ref:t},s),{},{components:n})):c.a.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<o;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),c=n(7),o=(n(0),n(1441)),i={id:"AdvcEigenProcess",title:"AdvcEigenProcess",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/"},a={unversionedId:"macro/analysis/AdvcEigenProcess",id:"macro/analysis/AdvcEigenProcess",isDocsHomePage:!1,title:"AdvcEigenProcess",description:"Description",source:"@site/docs\\macro\\analysis\\Macro-Analysis-AdvcEigenProcess.md",slug:"/macro/analysis/AdvcEigenProcess",permalink:"/testweb/docs/macro/analysis/AdvcEigenProcess",version:"current",sidebar:"api",previous:{title:"AdvcStaticProcess",permalink:"/testweb/docs/macro/analysis/AdvcStaticProcess"},next:{title:"AdvcFatigueProcess",permalink:"/testweb/docs/macro/analysis/AdvcFatigueProcess"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Create advc eigen value process"),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"AdvcEigenProcess(String m_strName,BOOL m_bEigenValue,int number_of_modes,int eigenvec_norm,double shift,double cgcgpi_tol,double cgcgpi_eig_tol,int cgcgpi_loop_max,double cgcgpi_inner_tol,int cgcgpi_block_size,int cgcgpi_extra_mode,Cursor m_crEdit,List m_LoadNodeList,List m_LoadCaseNodeList,List m_LoadNodeContactList,List m_OutputParamList,int m_iRefType,String m_strRefPath,List m_ReferenceResultList)"),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,"string\nName of advc eigen value process"),Object(o.b)("p",null,"bool\nIf eigen value parameter defined"),Object(o.b)("p",null,"int\nNumber of modes"),Object(o.b)("p",null,"int\nEigenvec_norm","[-1:default; 0:mass; 1:max; 2:unity]"),Object(o.b)("p",null,"double\nShift"),Object(o.b)("p",null,"double\ncgcgpi_tol"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"cgcgpi_eig_tol"),Object(o.b)("p",null,"int"),Object(o.b)("p",null,"cgcgpi_loop_max"),Object(o.b)("p",null,"double"),Object(o.b)("p",null,"cgcgpi_inner_tol"),Object(o.b)("p",null,"int"),Object(o.b)("p",null,"cgcgpi_block_size"),Object(o.b)("p",null,"int"),Object(o.b)("p",null,"cgcgpi_extra_mode"),Object(o.b)("p",null,"Cursor"),Object(o.b)("p",null,"edit cursor"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"status of Loads"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"status of Load Cases"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"status and other data of Contacts"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"output parameters"),Object(o.b)("p",null,"int"),Object(o.b)("p",null,"reference result type","[0:Temperature Load; 1:Stress]"),Object(o.b)("p",null,"String"),Object(o.b)("p",null,"path of reference result"),Object(o.b)("p",null,"List"),Object(o.b)("p",null,"data of reference result"),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'AdvcEigenProcess("Test",1,1,1,0.001,0.001,0.001,1,0.001,1,1,1:11,,,,,1,"Test",)\n')))}u.isMDXComponent=!0}}]);