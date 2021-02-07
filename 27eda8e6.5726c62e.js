(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1441:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=o.a.createContext({}),l=function(e){var r=o.a.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(a.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,a=i(e,["components","mdxType","originalType","parentName"]),s=l(t),b=n,m=s["".concat(c,".").concat(b)]||s[b]||d[b]||p;return t?o.a.createElement(m,u(u({ref:r},a),{},{components:t})):o.a.createElement(m,u({ref:r},a))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,c=new Array(p);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var a=2;a<p;a++)c[a]=t[a];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},281:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"toc",(function(){return i})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),p=(t(0),t(1441)),c={id:"Groups.RightClick.AddSupGroup",title:"Groups.RightClick.AddSupGroup()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Add supper group"},u={unversionedId:"psj-command/groups/Groups.RightClick.AddSupGroup",id:"psj-command/groups/Groups.RightClick.AddSupGroup",isDocsHomePage:!1,title:"Groups.RightClick.AddSupGroup()",description:"Add supper group",source:"@site/docs\\psj-command\\groups\\Groups.RightClick.AddSupGroup.md",slug:"/psj-command/groups/Groups.RightClick.AddSupGroup",permalink:"/testweb/docs/psj-command/groups/Groups.RightClick.AddSupGroup",version:"current",sidebar:"api",previous:{title:"Geometry.Transform.Translation()",permalink:"/testweb/docs/psj-command/geometry/Geometry.Transform.Translation"},next:{title:"Groups.RightClick.CopyGroup()",permalink:"/testweb/docs/psj-command/groups/Groups.RightClick.CopyGroup"}},i=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],a={toc:i};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},a,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"description"},"Description"),Object(p.b)("p",null,"Add supper group"),Object(p.b)("h2",{id:"syntax"},"Syntax"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Groups.RightClick.AddSupGroup(crSupGroupSelected=None)\n")),Object(p.b)("p",null,"Macro: {ref}",Object(p.b)("inlineCode",{parentName:"p"},"Macro-Groups-AddSupGroup")),Object(p.b)("p",null,"Ribbon: {menuselection}",Object(p.b)("inlineCode",{parentName:"p"},"Groups --\x3e RightClick --\x3e AddSupGroup")),Object(p.b)("h2",{id:"inputs"},"Inputs"),Object(p.b)("p",null,Object(p.b)("strong",{parentName:"p"},Object(p.b)("inlineCode",{parentName:"strong"},"crSupGroupSelected"))),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"A ",Object(p.b)("em",{parentName:"li"},"Cursor")," specifying the sup group selected. The default value is None.")),Object(p.b)("h2",{id:"return-code"},"Return Code"),Object(p.b)("p",null,"An ",Object(p.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(p.b)("h2",{id:"sample-code"},"Sample Code"),Object(p.b)("pre",null,Object(p.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"Groups.RightClick.AddSupGroup(crSupGroupSelected=None)\n")))}l.isMDXComponent=!0}}]);