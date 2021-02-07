(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return n?i.a.createElement(d,u(u({ref:t},l),{},{components:n})):i.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(1441)),c={id:"JPT.ConvertFromDocUnit",title:"JPT.ConvertFromDocUnit()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert the inputted value from the current Jupiter unit system to SI[m] units (Jupiter macro units)"},u={unversionedId:"psj-utility/JPT.ConvertFromDocUnit",id:"psj-utility/JPT.ConvertFromDocUnit",isDocsHomePage:!1,title:"JPT.ConvertFromDocUnit()",description:"Convert the inputted value from the current Jupiter unit system to SI\\[m\\] units (Jupiter macro units)",source:"@site/docs\\psj-utility\\PSJ-Utility_ConvertFromDocUnit.md",slug:"/psj-utility/JPT.ConvertFromDocUnit",permalink:"/testweb/docs/psj-utility/JPT.ConvertFromDocUnit",version:"current",sidebar:"api",previous:{title:"JPT.CastToDItem()",permalink:"/testweb/docs/psj-utility/JPT.CastToDItem"},next:{title:"JPT.ConvertFromMacroUnit()",permalink:"/testweb/docs/psj-utility/JPT.ConvertFromMacroUnit"}},a=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[{value:"<code>inputValue</code>",id:"inputvalue",children:[]},{value:"<code>unitType</code>",id:"unittype",children:[]}]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:a};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Convert the inputted value from the current Jupiter unit system to SI","[","m","]"," unit (Jupiter macro unit).\nThe return value will be the value after the conversion."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.ConvertFromDocUnit(inputValue, unitType)\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("h3",{id:"inputvalue"},Object(o.b)("inlineCode",{parentName:"h3"},"inputValue")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The value which will be used for converting."),Object(o.b)("li",{parentName:"ul"},"This is a required input.")),Object(o.b)("h3",{id:"unittype"},Object(o.b)("inlineCode",{parentName:"h3"},"unitType")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type of the unit which will be used as the reference for converting."),Object(o.b)("li",{parentName:"ul"},"The type of unit can be found at: {menuselection}",Object(o.b)("inlineCode",{parentName:"li"},"Home --\x3e Preference --\x3e Unit")),Object(o.b)("li",{parentName:"ul"},"This is a required input.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A converted Value (",Object(o.b)("em",{parentName:"p"},"Float")," type)."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0, 2}","{0,":!0,"2}":!0}),"# Convert the value = 1 from the current Jupiter Unit system to Jupiter macro unit system\nconvFromDoc = JPT.ConvertFromDocUnit(1, JPT.UnitType.Unit_Length)\nJPT.Debugger(convFromDoc)\n")))}p.isMDXComponent=!0}}]);