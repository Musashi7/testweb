(window.webpackJsonp=window.webpackJsonp||[]).push([[716],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||c;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<c;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},795:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),c=(n(0),n(1441)),i={title:"ROTATE_LBC_COPY",id:"ROTATE_LBC_COPY"},l={unversionedId:"data-type/psj-command/parameter-types/ROTATE_LBC_COPY",id:"data-type/psj-command/parameter-types/ROTATE_LBC_COPY",isDocsHomePage:!1,title:"ROTATE_LBC_COPY",description:"Description",source:"@site/docs\\data-type\\psj-command\\parameter-types\\Data-Type_JPT_ROTATE_LBC_COPY.md",slug:"/data-type/psj-command/parameter-types/ROTATE_LBC_COPY",permalink:"/testweb/docs/data-type/psj-command/parameter-types/ROTATE_LBC_COPY",version:"current",sidebar:"api",previous:{title:"ROD_1D_PROP",permalink:"/testweb/docs/data-type/psj-command/parameter-types/ROD_1D_PROP"},next:{title:"SPACE_MESH",permalink:"/testweb/docs/data-type/psj-command/parameter-types/SPACE_MESH"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"<code>iAxis</code>",id:"iaxis",children:[]},{value:"<code>iCenter</code>",id:"icenter",children:[]},{value:"<code>dlCenterVec</code>",id:"dlcentervec",children:[]},{value:"<code>dlAxisVec</code>",id:"dlaxisvec",children:[]},{value:"<code>crCoord</code>",id:"crcoord",children:[]},{value:"<code>dAngle</code>",id:"dangle",children:[]}]}],p={toc:o};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"A data type uses to control parameters of Rotate Lbc Copy"),Object(c.b)("h2",{id:"attributes"},"Attributes"),Object(c.b)("h3",{id:"iaxis"},Object(c.b)("inlineCode",{parentName:"h3"},"iAxis")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying axis."),Object(c.b)("li",{parentName:"ul"},"The default value is 0.")),Object(c.b)("h3",{id:"icenter"},Object(c.b)("inlineCode",{parentName:"h3"},"iCenter")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An ",Object(c.b)("em",{parentName:"li"},"Integer")," specifying center."),Object(c.b)("li",{parentName:"ul"},"The default value is 2.")),Object(c.b)("h3",{id:"dlcentervec"},Object(c.b)("inlineCode",{parentName:"h3"},"dlCenterVec")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double List")," specifying center vec."),Object(c.b)("li",{parentName:"ul"},"The default value is 0.")),Object(c.b)("h3",{id:"dlaxisvec"},Object(c.b)("inlineCode",{parentName:"h3"},"dlAxisVec")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double List")," specifying axis vec."),Object(c.b)("li",{parentName:"ul"},"The default value is 0.")),Object(c.b)("h3",{id:"crcoord"},Object(c.b)("inlineCode",{parentName:"h3"},"crCoord")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Cursor")," specifying coord."),Object(c.b)("li",{parentName:"ul"},"The default value is None.")),Object(c.b)("h3",{id:"dangle"},Object(c.b)("inlineCode",{parentName:"h3"},"dAngle")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A ",Object(c.b)("em",{parentName:"li"},"Double")," specifying angle."),Object(c.b)("li",{parentName:"ul"},"The default value is 0.")))}b.isMDXComponent=!0}}]);