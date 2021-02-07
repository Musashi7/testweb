(window.webpackJsonp=window.webpackJsonp||[]).push([[579],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,O=u["".concat(o,".").concat(m)]||u[m]||s[m]||l;return n?a.a.createElement(O,i(i({ref:t},c),{},{components:n})):a.a.createElement(O,i({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},658:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(1441)),o={id:"SNOnePush.DropTest.UpdateFloor",title:"SNOnePush.DropTest.UpdateFloor()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Assemble cylinder layer"},i={unversionedId:"psj-command/sn-onepush/SNOnePush.DropTest.UpdateFloor",id:"psj-command/sn-onepush/SNOnePush.DropTest.UpdateFloor",isDocsHomePage:!1,title:"SNOnePush.DropTest.UpdateFloor()",description:"Assemble cylinder layer",source:"@site/docs\\psj-command\\sn-onepush\\SNOnePush.DropTest.UpdateFloor.md",slug:"/psj-command/sn-onepush/SNOnePush.DropTest.UpdateFloor",permalink:"/testweb/docs/psj-command/sn-onepush/SNOnePush.DropTest.UpdateFloor",version:"current",sidebar:"api",previous:{title:"SNOnePush.DropTest.DropRotation()",permalink:"/testweb/docs/psj-command/sn-onepush/SNOnePush.DropTest.DropRotation"},next:{title:"SNOnePush.DropTestSNOnePush()",permalink:"/testweb/docs/psj-command/sn-onepush/SNOnePush.DropTestSNOnePush"}},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"Assemble cylinder layer"),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'SNOnePush.DropTest.UpdateFloor(strName="", iDir=0, dRopHeight=0.0, dSolutionTime=0.0, iNumberOutput=20, dContactFriction=0.1, iRotAxis=0, dRotAngle=0.0, dRelevantElemRate=0.0, dChangeMassRate=0.0, dMinTimeStep=0.0, strSolverFile="", dFloorSize=0.0, bRename=True, crMat=None)\n')),Object(l.b)("p",null,"Macro: {ref}",Object(l.b)("inlineCode",{parentName:"p"},"Macro-SNOnePush-UpdateFloor")),Object(l.b)("p",null,"Ribbon: {menuselection}",Object(l.b)("inlineCode",{parentName:"p"},"SNOnePush --\x3e DropTest --\x3e UpdateFloor")),Object(l.b)("h2",{id:"inputs"},"Inputs"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"strName"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String"),' specifying the name. The default value is "".')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iDir"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the direction. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dRopHeight"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the drop height. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dSolutionTime"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the solution time. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iNumberOutput"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the number output. The default value is 20.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dContactFriction"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the contact friction. The default value is 0.1.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"iRotAxis"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying the rotation axis. The default value is 0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dRotAngle"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the rotation angle. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dRelevantElemRate"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the relevant element rate. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dChangeMassRate"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the change mass rate. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dMinTimeStep"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the minimum time step. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"strSolverFile"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"String"),' specifying the solver file. The default value is "".')),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"dFloorSize"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying the floor size. The default value is 0.0.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"bRename"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," specifying the rename. The default value is True.")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("inlineCode",{parentName:"strong"},"crMat"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Cursor")," specifying the material. The default value is None.")),Object(l.b)("h2",{id:"return-code"},"Return Code"),Object(l.b)("p",null,"An ",Object(l.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(l.b)("h2",{id:"sample-code"},"Sample Code"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'SNOnePush.DropTest.UpdateFloor(strName="", iDir=0, dRopHeight=0.0, dSolutionTime=0.0, iNumberOutput=20, dContactFriction=0.1, iRotAxis=0, dRotAngle=0.0, dRelevantElemRate=0.0, dChangeMassRate=0.0, dMinTimeStep=0.0, strSolverFile="", dFloorSize=0.0, bRename=True, crMat=None)\n')))}p.isMDXComponent=!0}}]);