(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),i=n(7),o=(n(0),n(615)),a={id:"JPT.ConvertValueToMacroUnit",title:"JPT.ConvertValueToMacroUnit()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Convert the inputted value from the SI[m] unit (Jupiter macro unit) to the specified unit"},u={unversionedId:"psj-utility/JPT.ConvertValueToMacroUnit",id:"psj-utility/JPT.ConvertValueToMacroUnit",isDocsHomePage:!1,title:"JPT.ConvertValueToMacroUnit()",description:"Convert the inputted value from the SI\\[m\\] unit (Jupiter macro unit) to the specified unit",source:"@site/docs\\psj-utility\\PSJ-Utility_ConvertValueToMacroUnit.md",slug:"/psj-utility/JPT.ConvertValueToMacroUnit",permalink:"/testweb/docs/psj-utility/JPT.ConvertValueToMacroUnit",version:"current"},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"Convert the inputted value from the SI","[","m","]"," unit (Jupiter macro unit) to the specified unit.\nThe return value will be the value after conversion."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"JPT.ConvertValueToMacroUnit(inputValue, unitType, outputValueType)\n")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"inputValue")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The value which will be used for converting.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This is a required input."))),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"unitType")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Type of the unit which will be used as the reference for converting.")),Object(o.b)("p",null,": Note that this is the unit type of macro, not from {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Home --\x3e Preference --\x3e Unit")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"This is a required input.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"outputValueType")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The unit which will be used as an output unit.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"This is a required input."))),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A converted Value (",Object(o.b)("em",{parentName:"p"},"Float")," type)."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:"{0, 2}","{0,":!0,"2}":!0}),"# Convert 1m from Jupiter macro unit system to mm\nconvToMacr = JPT.ConvertValueToMacroUnit(1, JPT.UnitType.Unit_Length, 'mm') # 1m -> mm\nJPT.Debugger(convToMacr) # 1000\n")))}p.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(a,".").concat(m)]||b[m]||s[m]||o;return n?i.a.createElement(d,u(u({ref:t},l),{},{components:n})):i.a.createElement(d,u({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);