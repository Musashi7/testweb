(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||c;return n?o.a.createElement(m,l(l({ref:t},b),{},{components:n})):o.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},274:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(1441)),i={id:"Tools.BySelection.SelectionOrder",title:"Tools.BySelection.SelectionOrder()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Renumber by selection order"},l={unversionedId:"psj-command/tools/Tools.BySelection.SelectionOrder",id:"psj-command/tools/Tools.BySelection.SelectionOrder",isDocsHomePage:!1,title:"Tools.BySelection.SelectionOrder()",description:"Renumber by selection order",source:"@site/docs\\psj-command\\tools\\Tools.BySelection.SelectionOrder.md",slug:"/psj-command/tools/Tools.BySelection.SelectionOrder",permalink:"/testweb/docs/psj-command/tools/Tools.BySelection.SelectionOrder",version:"current",sidebar:"api",previous:{title:"Tools.BySelection.Position()",permalink:"/testweb/docs/psj-command/tools/Tools.BySelection.Position"},next:{title:"Tools.Connections()",permalink:"/testweb/docs/psj-command/tools/Tools.Connections"}},a=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],b={toc:a};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Renumber by selection order"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Tools.BySelection.SelectionOrder(crlTarget=[], iType=0, iMethod=0, iStartID=1, iIncrementStep=1, bAscending=True)\n")),Object(c.b)("p",null,"Macro: {ref}",Object(c.b)("inlineCode",{parentName:"p"},"Macro-Tools-RenumberSpecify")),Object(c.b)("p",null,"Ribbon: {menuselection}",Object(c.b)("inlineCode",{parentName:"p"},"Tools --\x3e BySelection --\x3e SelectionOrder")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor List")," specifying the target. The default value is [].")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iType"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the type. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iMethod"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the method. The default value is 0.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iStartID"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the start ID. The default value is 1.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"iIncrementStep"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying the increment step. The default value is 1.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"bAscending"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Boolean")," specifying the ascending. The default value is True.")),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,"An ",Object(c.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"Tools.BySelection.SelectionOrder(crlTarget=[], iType=0, iMethod=0, iStartID=1, iIncrementStep=1, bAscending=True)\n")))}p.isMDXComponent=!0}}]);