(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(108)),i={title:"Installation",sidebar_label:"Installation"},c={unversionedId:"getting-started/installation",id:"getting-started/installation",isDocsHomePage:!1,title:"Installation",description:"PSJ is delivered as a NuGet package which can be installed from the command line or by using the Visual Studio PSJ package manager. Or if you prefer, you can build it yourself directly from the source.",source:"@site/docs\\getting-started\\installation.md",slug:"/getting-started/installation",permalink:"/testweb/docs/getting-started/installation",version:"current",sidebar_label:"Installation",sidebar:"docs",previous:{title:"PSJ Introduction",permalink:"/testweb/docs/"},next:{title:"Components Overview",permalink:"/testweb/docs/getting-started/hierarchy"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Installing the latest version",id:"installing-the-latest-version",children:[]}],s={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"PSJ is delivered as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nuget.org/packages/Nodify"}),"NuGet package")," which can be installed from the command line or by using the Visual Studio ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"}),"PSJ package manager"),". Or if you prefer, you can build it yourself directly from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/miroiu/nodify"}),"the source"),"."),Object(o.b)("h2",{id:"requirements"},"Requirements"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://dotnet.microsoft.com/download/dotnet-core/3.1"}),".NET Core")," version 3.1 or above")),Object(o.b)("h2",{id:"installing-the-latest-version"},"Installing the latest version"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"using nuget package manager")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cmd"}),"Install-Package Nodify\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"using .NET CLI")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cmd"}),"dotnet add package Nodify\n")))}u.isMDXComponent=!0}}]);