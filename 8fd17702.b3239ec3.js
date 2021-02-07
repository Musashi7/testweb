(window.webpackJsonp=window.webpackJsonp||[]).push([[710],{1441:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),s=function(e){var n=r.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(d.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),p=a,m=u["".concat(i,".").concat(p)]||u[p]||b[p]||o;return t?r.a.createElement(m,c(c({ref:n},d),{},{components:t})):r.a.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<o;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},789:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),o=(t(0),t(1441)),i={id:"BoundaryConditions.LoadCase",title:"BoundaryConditions.LoadCase()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create Load Case from Boundary Condition"},c={unversionedId:"psj-command/boundary-conditions/BoundaryConditions.LoadCase",id:"psj-command/boundary-conditions/BoundaryConditions.LoadCase",isDocsHomePage:!1,title:"BoundaryConditions.LoadCase()",description:"Create Load Case from Boundary Condition",source:"@site/docs\\psj-command\\boundary-conditions\\BoundaryConditions.LoadCase.md",slug:"/psj-command/boundary-conditions/BoundaryConditions.LoadCase",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.LoadCase",version:"current",sidebar:"api",previous:{title:"BoundaryConditions.LbcContactConvert()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.LbcContactConvert"},next:{title:"BoundaryConditions.Pressure.By2Nodes()",permalink:"/testweb/docs/psj-command/boundary-conditions/BoundaryConditions.Pressure.By2Nodes"}},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],d={toc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"This method creates a load case that bundles loads and constraints. Load cases can be referenced when creating analysis solver input data."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'BoundaryConditions.LoadCase(strName="LoadCase1", dFactor=1.0, crlTarget=[], iExportId=1, dlTargetFactor=[], crEdit=None)\n')),Object(o.b)("p",null,"Macro: {ref}",Object(o.b)("inlineCode",{parentName:"p"},"Macro-BoundaryConditions-LoadCase")),Object(o.b)("p",null,"Ribbon: {menuselection}",Object(o.b)("inlineCode",{parentName:"p"},"Boundary Conditions --\x3e LoadCase")),Object(o.b)("h2",{id:"inputs"},"Inputs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"strName")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"String")," specifying the name of the load case to be created."),Object(o.b)("li",{parentName:"ul"},'The default value is "LoadCase1".')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dFactor")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double")," specifying the load factor for Nastran that applies to the entire load case to be created. Used when multiplying the load by a factor."),Object(o.b)("li",{parentName:"ul"},"The default value is 1.0.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"crlTarget")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor List")," specifying the list of all created boundary conditions."),Object(o.b)("li",{parentName:"ul"},"The default value is [].")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"iExportId")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"An ",Object(o.b)("em",{parentName:"li"},"Integer")," specifying the export identity number of load case."),Object(o.b)("li",{parentName:"ul"},"The default value is 1.")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"dlTargetFactor")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Double List")," specifying the list factor of each boundary condition."),Object(o.b)("li",{parentName:"ul"},"The default value is [].")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"crEdit")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("em",{parentName:"li"},"Cursor")," specifying an existing load case. If this parameter is used, the specified load case will be modified. If it is left None, a new load case will be created."),Object(o.b)("li",{parentName:"ul"},"The default value is None.")),Object(o.b)("h2",{id:"return-code"},"Return Code"),Object(o.b)("p",null,"A ",Object(o.b)("em",{parentName:"p"},"String")," of 1 if succeed, or 0 if fail."),Object(o.b)("h2",{id:"sample-code"},"Sample Code"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube()\n\nBoundaryConditions.Pressure.General(dFpressure=1000000.0, crlTarget=[Face(24)])\n\nBoundaryConditions.Pressure.General(strName="Pressure2", dFpressure=2000000.0, \n    crlTarget=[Face(21)])\n\nBoundaryConditions.Pressure.General(strName="Pressure3", dFpressure=3000000.0, \n    crlTarget=[Face(25)])\n\nBoundaryConditions.LoadCase(crlTarget=[LbcGPressure(1, 2, 3)], iExportId=4, \n    dlTargetFactor=[1.0, 1.0, 1.0])\n\n\n')))}s.isMDXComponent=!0}}]);