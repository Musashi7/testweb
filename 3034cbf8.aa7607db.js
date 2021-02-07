(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||a;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},326:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(1441)),o={id:"JPT.GetEntitiesByID",title:"JPT.GetEntitiesByID()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Get information of the inputted entity ID"},c={unversionedId:"psj-utility/JPT.GetEntitiesByID",id:"psj-utility/JPT.GetEntitiesByID",isDocsHomePage:!1,title:"JPT.GetEntitiesByID()",description:"Get information of the inputted entity ID",source:"@site/docs\\psj-utility\\PSJ-Utility_GetEntitiesByID.md",slug:"/psj-utility/JPT.GetEntitiesByID",permalink:"/testweb/docs/psj-utility/JPT.GetEntitiesByID",version:"current",sidebar:"api",previous:{title:"JPT.GetEntitiesByAssociation()",permalink:"/testweb/docs/psj-utility/JPT.GetEntitiesByAssociation"},next:{title:"JPT.GetEntitiesByName()",permalink:"/testweb/docs/psj-utility/JPT.GetEntitiesByName"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>DItemType</code>",id:"ditemtype",children:[]},{value:"<code>itemID</code>",id:"itemid",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:p};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Get information of the inputted entity ID."),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.GetEntitiesByID(DItemType, itemID)\n")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("h3",{id:"ditemtype"},Object(a.b)("inlineCode",{parentName:"h3"},"DItemType")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType"))," is an ",Object(a.b)("em",{parentName:"li"},"integer")," value standing for a type of ",Object(a.b)("em",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"./../data-type/psj-utility/built-in-types/DItem"}),"DItem"))," object in Jupiter."),Object(a.b)("li",{parentName:"ul"},"This is a required input.")),Object(a.b)("h3",{id:"itemid"},Object(a.b)("inlineCode",{parentName:"h3"},"itemID")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"integer")," value standing for the ID of the inputted ",Object(a.b)("em",{parentName:"li"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"DItemType"}),"DItemType")),"."),Object(a.b)("li",{parentName:"ul"},"This is a required input.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"ItemVector"}),"ItemVector"))," object standing for a ",Object(a.b)("em",{parentName:"p"},"list")," containing the information of the inputted entity."),Object(a.b)("p",null,"Note that the inputted entity is the first element of this list."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0,7}","{0,7}":!0}),'# Create sample parts\nGeometry.Part.Cube()\nGeometry.Part.Cube(strPartName="Cube_2")\nGeometry.Part.Cube(strPartName="Cube_3")\n\n# Get the information of the part with ID = 2 and store it to a list\nselPart = JPT.GetEntitiesByID(JPT.DItemType.BODY, 2)\n\n# Print the name of the selected part\nJPT.Debugger(selPart[0])\n')))}u.isMDXComponent=!0}}]);