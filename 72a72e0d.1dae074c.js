(window.webpackJsonp=window.webpackJsonp||[]).push([[585],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},664:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(1441)),l={id:"HexModeling.Sweep.Linear",title:"HexModeling.Sweep.Linear()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Unknown Description"},o={unversionedId:"psj-command/hex-modeling/HexModeling.Sweep.Linear",id:"psj-command/hex-modeling/HexModeling.Sweep.Linear",isDocsHomePage:!1,title:"HexModeling.Sweep.Linear()",description:"Unknown Description",source:"@site/docs\\psj-command\\hex-modeling\\HexModeling.Sweep.Linear.md",slug:"/psj-command/hex-modeling/HexModeling.Sweep.Linear",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.Sweep.Linear",version:"current",sidebar:"api",previous:{title:"HexModeling.Sweep.Layer()",permalink:"/testweb/docs/psj-command/hex-modeling/HexModeling.Sweep.Layer"},next:{title:"Home.CopyToClipboard()",permalink:"/testweb/docs/psj-command/home/Home.CopyToClipboard"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Unknown Description"),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"HexModeling.Sweep.Linear(crlFace=[], dLength=10, iLayer=10, dlSweepDirection=[], bInterfaceElemFlag=False, iLinearMethod=0, bDeleteOriginalParts=False, bDeleteTargetParts=False, iMethodBias=0, dFactor=2.0, iProgression=0)\n")),Object(i.b)("p",null,"Macro: {ref}",Object(i.b)("inlineCode",{parentName:"p"},"Macro-HexModeling-HexSweepLinear")),Object(i.b)("p",null,"Ribbon: {menuselection}",Object(i.b)("inlineCode",{parentName:"p"},"HexModeling --\x3e Sweep --\x3e Linear")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"crlFace"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor List")," specifying the face. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dLength"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the length. The default value is 10.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iLayer"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the layer. The default value is 10.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dlSweepDirection"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double List")," specifying the sweep direction. The default value is [].")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bInterfaceElemFlag"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the interface element flag. The default value is False.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iLinearMethod"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the linear method. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bDeleteOriginalParts"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the delete original parts. The default value is False.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"bDeleteTargetParts"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Boolean")," specifying the delete target parts. The default value is False.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iMethodBias"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the method bias. The default value is 0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"dFactor"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying the factor. The default value is 2.0.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"iProgression"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying the progression. The default value is 0.")),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"An ",Object(i.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"HexModeling.Sweep.Linear(crlFace=[], dLength=10, iLayer=10, dlSweepDirection=[], bInterfaceElemFlag=False, iLinearMethod=0, bDeleteOriginalParts=False, bDeleteTargetParts=False, iMethodBias=0, dFactor=2.0, iProgression=0)\n")))}p.isMDXComponent=!0}}]);