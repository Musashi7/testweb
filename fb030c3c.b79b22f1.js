(window.webpackJsonp=window.webpackJsonp||[]).push([[1324],{1403:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(1441)),i={title:"DFace",id:"DFace"},b={unversionedId:"data-type/psj-utility/built-in-types/DFace",id:"data-type/psj-utility/built-in-types/DFace",isDocsHomePage:!1,title:"DFace",description:"Description",source:"@site/docs\\data-type\\psj-utility\\built-in-types\\Class_DFace.md",slug:"/data-type/psj-utility/built-in-types/DFace",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/DFace",version:"current",sidebar:"api",previous:{title:"EdgeVector",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/EdgeVector"},next:{title:"FaceVector",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/FaceVector"}},l=[{value:"Description",id:"description",children:[]},{value:"Properties",id:"properties",children:[]}],o={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Face item class."),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Attribute"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"typeID"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Item type ID (=6). The DItemType.",Object(c.b)("br",null),Object(c.b)("em",{parentName:"td"},"#Get the integer value of Entity ItemType."),Object(c.b)("br",null),"The return value is int(DItemw::GetItemTypeInt).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"key"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The internal ID of the item. This is a ",Object(c.b)("em",{parentName:"td"},"unique ID")," within each ",Object(c.b)("em",{parentName:"td"},"typeID")," and ",Object(c.b)("strong",{parentName:"td"},"cannot be changed")," by the user.",Object(c.b)("br",null),Object(c.b)("em",{parentName:"td"},"#Get the internal Key of Entity."),Object(c.b)("br",null),"The return value is ID (int).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The external ID of the item.",Object(c.b)("br",null),"It can be duplicated within each typeID, but it is not recommended.",Object(c.b)("br",null),"Some entity IDs can be changed with the renumber function.",Object(c.b)("br",null),Object(c.b)("em",{parentName:"td"},"#Get the external ID of Entity."),Object(c.b)("br",null),"The return value is ID (int).")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"edges"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("em",{parentName:"td"},"#Get Edge information set for Face."),Object(c.b)("br",null),"The return value is a DEdgeW array.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"elems"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Nodes (array of ElemVector class) included in the item.",Object(c.b)("br",null),Object(c.b)("em",{parentName:"td"},"#Get the element information set in Face."),Object(c.b)("br",null),"Get the element information set in Face.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"nodes"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Nodes included in the item (Array of NodeVector class).",Object(c.b)("br",null),Object(c.b)("em",{parentName:"td"},"#Get the node information set for Face."),Object(c.b)("br",null),"The return value is a DNodeW array.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"color"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Item color information.")))))}p.isMDXComponent=!0},1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,s=u["".concat(i,".").concat(m)]||u[m]||d[m]||c;return n?a.a.createElement(s,b(b({ref:t},o),{},{components:n})):a.a.createElement(s,b({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var o=2;o<c;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);