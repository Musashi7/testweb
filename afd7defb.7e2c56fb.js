(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(n),m=r,s=b["".concat(c,".").concat(m)]||b[m]||d[m]||a;return n?i.a.createElement(s,o(o({ref:t},p),{},{components:n})):i.a.createElement(s,o({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<a;p++)c[p]=n[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},972:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(1441)),c={title:"SUBSPACE",id:"SUBSPACE"},o={unversionedId:"data-type/psj-command/parameter-types/SUBSPACE",id:"data-type/psj-command/parameter-types/SUBSPACE",isDocsHomePage:!1,title:"SUBSPACE",description:"Description",source:"@site/docs\\data-type\\psj-command\\parameter-types\\Data-Type_JPT_SUBSPACE.md",slug:"/data-type/psj-command/parameter-types/SUBSPACE",permalink:"/testweb/docs/data-type/psj-command/parameter-types/SUBSPACE",version:"current",sidebar:"api",previous:{title:"SUBMODEL_FORCED_TEMP_LBC",permalink:"/testweb/docs/data-type/psj-command/parameter-types/SUBMODEL_FORCED_TEMP_LBC"},next:{title:"SUNSHINE_CONTACT",permalink:"/testweb/docs/data-type/psj-command/parameter-types/SUNSHINE_CONTACT"}},l=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"<code>iRigidMode</code>",id:"irigidmode",children:[]},{value:"<code>iWorkSize</code>",id:"iworksize",children:[]},{value:"<code>iNPADNum</code>",id:"inpadnum",children:[]},{value:"<code>iBlockNum</code>",id:"iblocknum",children:[]},{value:"<code>iMaxIteratorCnt</code>",id:"imaxiteratorcnt",children:[]},{value:"<code>iMinNShift</code>",id:"iminnshift",children:[]}]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"A data type uses to control parameters of Subspace"),Object(a.b)("h2",{id:"attributes"},"Attributes"),Object(a.b)("h3",{id:"irigidmode"},Object(a.b)("inlineCode",{parentName:"h3"},"iRigidMode")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying rigid mode."),Object(a.b)("li",{parentName:"ul"},"The default value is 0.")),Object(a.b)("h3",{id:"iworksize"},Object(a.b)("inlineCode",{parentName:"h3"},"iWorkSize")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying work size."),Object(a.b)("li",{parentName:"ul"},"The default value is 8.")),Object(a.b)("h3",{id:"inpadnum"},Object(a.b)("inlineCode",{parentName:"h3"},"iNPADNum")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying n p a d number."),Object(a.b)("li",{parentName:"ul"},"The default value is 4.")),Object(a.b)("h3",{id:"iblocknum"},Object(a.b)("inlineCode",{parentName:"h3"},"iBlockNum")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying block number."),Object(a.b)("li",{parentName:"ul"},"The default value is 5.")),Object(a.b)("h3",{id:"imaxiteratorcnt"},Object(a.b)("inlineCode",{parentName:"h3"},"iMaxIteratorCnt")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying maximum iterator cnt."),Object(a.b)("li",{parentName:"ul"},"The default value is 0.")),Object(a.b)("h3",{id:"iminnshift"},Object(a.b)("inlineCode",{parentName:"h3"},"iMinNShift")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying minimum n shift."),Object(a.b)("li",{parentName:"ul"},"The default value is 0.")))}u.isMDXComponent=!0}}]);