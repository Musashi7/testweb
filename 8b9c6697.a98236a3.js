(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),d=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=d(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(t),b=a,m=s["".concat(o,".").concat(b)]||s[b]||p[b]||r;return t?i.a.createElement(m,l(l({ref:n},u),{},{components:t})):i.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=b;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},763:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(3),i=t(7),r=(t(0),t(1441)),o={id:"BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General",title:"BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Unknown Description"},l={unversionedId:"psj-command/boundary-conditions/BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General",id:"psj-command/boundary-conditions/BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General",isDocsHomePage:!1,title:"BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General()",description:"Unknown Description",source:"@site/docs\\psj-command\\boundary-conditions\\BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General.md",slug:"/psj-command/boundary-conditions/BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General",version:"current",sidebar:"api",previous:{title:"BoundaryConditions.InitialNodalValue.InitialAngularVelocity.Abaqus()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.InitialNodalValue.InitialAngularVelocity.Abaqus"},next:{title:"BoundaryConditions.InitialNodalValue.RotationAngle()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.InitialNodalValue.RotationAngle"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:c};function d(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"Unknown Description"),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General(strName="InitialAngularVelocity1", stData=LBC_DYNAMIC_INITIAL_CONDITION_DATA(), crlTarget=[], crEdit=None)\n')),Object(r.b)("p",null,"Macro: {ref}",Object(r.b)("inlineCode",{parentName:"p"},"Macro-BoundaryConditions-InitialDynamic")),Object(r.b)("p",null,"Ribbon: {menuselection}",Object(r.b)("inlineCode",{parentName:"p"},"BoundaryConditions --\x3e InitialNodalValue --\x3e InitialAngularVelocity --\x3e General")),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"strName"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "InitialAngularVelocity1".')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"stData"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"ST_DATA")," specifying the data. The default value is LBC_DYNAMIC_INITIAL_CONDITION_DATA().")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor List")," specifying the target. The default value is [].")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor")," specifying the edit. The default value is None.")),Object(r.b)("h2",{id:"return-code"},"Return Code"),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(r.b)("h2",{id:"sample-code"},"Sample Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'BoundaryConditions.InitialNodalValue.InitialAngularVelocity.General(strName="InitialAngularVelocity1", stData=LBC_DYNAMIC_INITIAL_CONDITION_DATA(), crlTarget=[], crEdit=None)\n')))}d.isMDXComponent=!0}}]);