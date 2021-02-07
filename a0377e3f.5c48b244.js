(window.webpackJsonp=window.webpackJsonp||[]).push([[789],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),o=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=o(n),m=i,O=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.a.createElement(O,b(b({ref:t},c),{},{components:n})):r.a.createElement(O,b({ref:t},c))}));function O(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:i,l[1]=b;for(var c=2;c<a;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},868:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return o}));var i=n(3),r=n(7),a=(n(0),n(1441)),l={id:"EngReliability.SubModelBC",title:"EngReliability.SubModelBC()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"create mapping forced displacement"},b={unversionedId:"psj-command/eng-reliability/EngReliability.SubModelBC",id:"psj-command/eng-reliability/EngReliability.SubModelBC",isDocsHomePage:!1,title:"EngReliability.SubModelBC()",description:"create mapping forced displacement",source:"@site/docs\\psj-command\\eng-reliability\\EngReliability.SubModelBC.md",slug:"/psj-command/eng-reliability/EngReliability.SubModelBC",permalink:"/testweb/docs/psj-command/eng-reliability/EngReliability.SubModelBC",version:"current",sidebar:"api",previous:{title:"Designer.Material()",permalink:"/testweb/docs/psj-command/designer/Designer.Material"},next:{title:"ExManifoldModeling.SZ.WeldLine2()",permalink:"/testweb/docs/psj-command/ex-manifold-modeling/ExManifoldModeling.SZ.WeldLine2"}},p=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],c={toc:p};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Create mapping forced displacement"),Object(a.b)("h2",{id:"syntax"},"Syntax"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"EngReliability.SubModelBC(strName, crlTarget, iPos, iViewCp, iCp, iSrcType, iMappedCpIndexArr0, dScaleR, vecOffset, vecRotate, dScaleT, strPath, crEdit, iMappingMethod, iSubmodelBCMappingType, iMappingFromStepNo, bSetADVCFile, strADVCResultFile, bSetDetATol, dDetATol, bSetElementSet, strElementSet)\n")),Object(a.b)("p",null,"Macro: {ref}",Object(a.b)("inlineCode",{parentName:"p"},"Macro-EngReliability-MappingForcedDisplacement")),Object(a.b)("p",null,"Ribbon: {menuselection}",Object(a.b)("inlineCode",{parentName:"p"},"EngReliability --\x3e SubModelBC")),Object(a.b)("h2",{id:"inputs"},"Inputs"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strName"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String")," specifying the name. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crlTarget"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor List")," specifying the target. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iPos"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the position. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iViewCp"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the view component. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iCp"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the component. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iSrcType"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the source type. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iMappedCpIndexArr0"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the mapped component index arr0. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dScaleR"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the scale r. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"vecOffset"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Vector")," specifying the offset. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"vecRotate"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Vector")," specifying the rotate. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dScaleT"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the scale t. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strPath"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String")," specifying the path. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"crEdit"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Cursor")," specifying the edit. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iMappingMethod"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the mapping method. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iSubmodelBCMappingType"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the submodel  c mapping type. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"iMappingFromStepNo"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An ",Object(a.b)("em",{parentName:"li"},"Integer")," specifying the mapping from step no. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"bSetADVCFile"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying the set ADVC file. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strADVCResultFile"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String")," specifying the ADVC result file. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"bSetDetATol"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying the set det a tolerance. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"dDetATol"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Double")," specifying the det a tolerance. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"bSetElementSet"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"Boolean")," specifying the set element set. This is a required input.")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"strElementSet"))),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A ",Object(a.b)("em",{parentName:"li"},"String")," specifying the element set. This is a required input.")),Object(a.b)("h2",{id:"return-code"},"Return Code"),Object(a.b)("p",null,"An ",Object(a.b)("em",{parentName:"p"},"String")," of 1 if successed, or 0 if failed."),Object(a.b)("h2",{id:"sample-code"},"Sample Code"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"EngReliability.SubModelBC(strName, crlTarget, iPos, iViewCp, iCp, iSrcType, iMappedCpIndexArr0, dScaleR, vecOffset, vecRotate, dScaleT, strPath, crEdit, iMappingMethod, iSubmodelBCMappingType, iMappingFromStepNo, bSetADVCFile, strADVCResultFile, bSetDetATol, dDetATol, bSetElementSet, strElementSet)\n")))}o.isMDXComponent=!0}}]);