(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{121:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(1441)),c={title:"DNode",id:"DNode"},o={unversionedId:"data-type/psj-utility/built-in-types/DNode",id:"data-type/psj-utility/built-in-types/DNode",isDocsHomePage:!1,title:"DNode",description:"Description",source:"@site/docs\\data-type\\psj-utility\\built-in-types\\Class_DNode.md",slug:"/data-type/psj-utility/built-in-types/DNode",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/DNode",version:"current",sidebar:"api",previous:{title:"BodyVector",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/BodyVector"},next:{title:"NodeVector",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/NodeVector"}},b=[{value:"Description",id:"description",children:[]},{value:"Properties",id:"properties",children:[]}],l={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Node item class."),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"typeID"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Item type ID (=3)",Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"#Get the integer value of Entity ItemType"),Object(i.b)("br",null),"The return value is an ",Object(i.b)("inlineCode",{parentName:"td"},"int(DItemw::GetItemTypeInt)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"key"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The internal ID of the item. This is a ",Object(i.b)("em",{parentName:"td"},"unique ID")," within each ",Object(i.b)("em",{parentName:"td"},"typeID")," and ",Object(i.b)("strong",{parentName:"td"},"cannot be changed")," by the user.",Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"#Internal Key acquisition of Entity"),Object(i.b)("br",null),"The return value is ",Object(i.b)("inlineCode",{parentName:"td"},"ID (int)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The external ID of the item.",Object(i.b)("br",null),"It can be duplicated within each typeID, but it is not recommended.",Object(i.b)("br",null),"Some entity IDs can be changed with the renumber function.",Object(i.b)("br",null),Object(i.b)("em",{parentName:"td"},"#Entity external ID acquisition"),Object(i.b)("br",null),"The return value is ",Object(i.b)("inlineCode",{parentName:"td"},"ID (int)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"isFloating"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The return value is True for floating nodes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"pos"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Holds the position coordinates of the node in TVector3d type.")))))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,O=u["".concat(c,".").concat(s)]||u[s]||d[s]||i;return n?a.a.createElement(O,o(o({ref:t},l),{},{components:n})):a.a.createElement(O,o({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);