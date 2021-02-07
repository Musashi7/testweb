(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{1441:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),s=n,m=b["".concat(c,".").concat(s)]||b[s]||d[s]||i;return r?a.a.createElement(m,o(o({ref:t},l),{},{components:r})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},570:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),i=(r(0),r(1441)),c={title:"TEMP_LOAD_LBC",id:"TEMP_LOAD_LBC"},o={unversionedId:"data-type/psj-command/parameter-types/TEMP_LOAD_LBC",id:"data-type/psj-command/parameter-types/TEMP_LOAD_LBC",isDocsHomePage:!1,title:"TEMP_LOAD_LBC",description:"Description",source:"@site/docs\\data-type\\psj-command\\parameter-types\\Data-Type_JPT_TEMP_LOAD_LBC.md",slug:"/data-type/psj-command/parameter-types/TEMP_LOAD_LBC",permalink:"/testweb/docs/data-type/psj-command/parameter-types/TEMP_LOAD_LBC",version:"current",sidebar:"api",previous:{title:"SURFACE_MESH",permalink:"/testweb/docs/data-type/psj-command/parameter-types/SURFACE_MESH"},next:{title:"TIME_POINTS",permalink:"/testweb/docs/data-type/psj-command/parameter-types/TIME_POINTS"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"<code>iType</code>",id:"itype",children:[]},{value:"<code>dFTemp</code>",id:"dftemp",children:[]},{value:"<code>strFilePathName</code>",id:"strfilepathname",children:[]},{value:"<code>crTable</code>",id:"crtable",children:[]}]}],l={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"A data type uses to control parameters of Temp Load Lbc"),Object(i.b)("h2",{id:"attributes"},"Attributes"),Object(i.b)("h3",{id:"itype"},Object(i.b)("inlineCode",{parentName:"h3"},"iType")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An ",Object(i.b)("em",{parentName:"li"},"Integer")," specifying type."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("h3",{id:"dftemp"},Object(i.b)("inlineCode",{parentName:"h3"},"dFTemp")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Double")," specifying f temp."),Object(i.b)("li",{parentName:"ul"},"The default value is 0.")),Object(i.b)("h3",{id:"strfilepathname"},Object(i.b)("inlineCode",{parentName:"h3"},"strFilePathName")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"String")," specifying file path name."),Object(i.b)("li",{parentName:"ul"},'The default value is "".')),Object(i.b)("h3",{id:"crtable"},Object(i.b)("inlineCode",{parentName:"h3"},"crTable")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("em",{parentName:"li"},"Cursor")," specifying table."),Object(i.b)("li",{parentName:"ul"},"The default value is None.")))}u.isMDXComponent=!0}}]);