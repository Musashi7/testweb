(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,s=u["".concat(i,".").concat(O)]||u[O]||m[O]||b;return n?r.a.createElement(s,l(l({ref:t},o),{},{components:n})):r.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},544:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),b=(n(0),n(1441)),i={title:"DItem",id:"DItem"},l={unversionedId:"data-type/psj-utility/built-in-types/DItem",id:"data-type/psj-utility/built-in-types/DItem",isDocsHomePage:!1,title:"DItem",description:"Description",source:"@site/docs\\data-type\\psj-utility\\built-in-types\\Class_DItem.md",slug:"/data-type/psj-utility/built-in-types/DItem",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/DItem",version:"current",sidebar:"api",previous:{title:"ElemVector",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/ElemVector"},next:{title:"DItemVector",permalink:"/testweb/docs/data-type/psj-utility/built-in-types/DItemVector"}},c=[{value:"Description",id:"description",children:[]},{value:"Properties",id:"properties",children:[]}],o={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"description"},"Description"),Object(b.b)("p",null,"Base class for all items in Jupiter."),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Attribute"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"isValid"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Determine if it can be used. True if available.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Check if Entity is available"),Object(b.b)("br",null)," The return value is ",Object(b.b)("inlineCode",{parentName:"td"},"True")," if available, ",Object(b.b)("inlineCode",{parentName:"td"},"False")," if not")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"type"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The type of item.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Get ItemType of Entity"),Object(b.b)("br",null),"The return value is ",Object(b.b)("inlineCode",{parentName:"td"},"ItemType"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"typeID"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The item type ID (The DItemType)",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Get the integer value of Entity ItemType"),Object(b.b)("br",null),"The return value is an ",Object(b.b)("inlineCode",{parentName:"td"},"int"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"key"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The internal ID of the item. This is a ",Object(b.b)("em",{parentName:"td"},"unique ID")," within each ",Object(b.b)("em",{parentName:"td"},"typeID")," and ",Object(b.b)("strong",{parentName:"td"},"cannot be changed")," by the user.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Get the internal Key of Entity."),Object(b.b)("br",null),"The return value is ",Object(b.b)("inlineCode",{parentName:"td"},"ID (int)"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Item external ID.",Object(b.b)("br",null),"It can be duplicated within each ",Object(b.b)("inlineCode",{parentName:"td"},"TypeID"),", but it is not recommended.",Object(b.b)("br",null),"Some entity IDs can be changed with the renumber function.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Get the external ID of Entity"),Object(b.b)("br",null),"The return value is ID (int).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of the item.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Get Entity name or name setting"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"targets"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Another Item that Item holds.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Acquisition of Entity set in Entity"),Object(b.b)("br",null),"The return value is an array of DItem.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"masters"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Master/face/edge/node of connection/contact.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Acquisition of Master Entity set in Entity"),Object(b.b)("br",null),"The return value is an array of DItem.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"slaves"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"It refers to the slave side face/edge/node of connection/contact.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Acquisition of Slave Entity set in Entity"),Object(b.b)("br",null),"The return value is an array of DItem.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"children"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Refers to a sub-assembly of an assembly item within the assembly tree.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Acquisition of child Entity when it is nested on the tree, array of return value DItem"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"parent"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A sub-assembly that is the parent of an item in the assembly tree.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Acquisition of parent Entity when nested in tree, DItem"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"info"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Entity information for parts and faces.",Object(b.b)("br",null),"Including the number of meshes.",Object(b.b)("br",null),Object(b.b)("em",{parentName:"td"},"#Display entity information. Must be a Tree Item or PartItem"))))))}p.isMDXComponent=!0}}]);