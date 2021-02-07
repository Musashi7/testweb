(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var i=n(0),a=n.n(i);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),o=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=o(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,b=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=o(n),m=i,s=p["".concat(b,".").concat(m)]||p[m]||u[m]||l;return n?a.a.createElement(s,r(r({ref:t},d),{},{components:n})):a.a.createElement(s,r({ref:t},d))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,b=new Array(l);b[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:i,b[1]=r;for(var d=2;d<l;d++)b[d]=n[d];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},767:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return r})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return o}));var i=n(3),a=n(7),l=(n(0),n(1441)),b={title:"LOCAL_MESH",id:"LOCAL_MESH"},r={unversionedId:"data-type/psj-command/parameter-types/LOCAL_MESH",id:"data-type/psj-command/parameter-types/LOCAL_MESH",isDocsHomePage:!1,title:"LOCAL_MESH",description:"Description",source:"@site/docs\\data-type\\psj-command\\parameter-types\\Data-Type_JPT_LOCAL_MESH.md",slug:"/data-type/psj-command/parameter-types/LOCAL_MESH",permalink:"/testweb/docs/data-type/psj-command/parameter-types/LOCAL_MESH",version:"current",sidebar:"api",previous:{title:"LBC_THERMAL_CONVECTION_DATA",permalink:"/testweb/docs/data-type/psj-command/parameter-types/LBC_THERMAL_CONVECTION_DATA"},next:{title:"MESH_PART_INFO_TOOL",permalink:"/testweb/docs/data-type/psj-command/parameter-types/MESH_PART_INFO_TOOL"}},c=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[{value:"<code>iEntityType</code>",id:"ientitytype",children:[]},{value:"<code>bEnableSizeParams</code>",id:"benablesizeparams",children:[]},{value:"<code>dAvgElemSize</code>",id:"davgelemsize",children:[]},{value:"<code>dMaxElemSize</code>",id:"dmaxelemsize",children:[]},{value:"<code>dMinElemSize</code>",id:"dminelemsize",children:[]},{value:"<code>bEnableTrimAngle</code>",id:"benabletrimangle",children:[]},{value:"<code>dTrimAngle</code>",id:"dtrimangle",children:[]},{value:"<code>bEnableMeshCount</code>",id:"benablemeshcount",children:[]},{value:"<code>iNodeCount</code>",id:"inodecount",children:[]},{value:"<code>iBiasNodeId</code>",id:"ibiasnodeid",children:[]},{value:"<code>dBiasFactor</code>",id:"dbiasfactor",children:[]},{value:"<code>iBiasMethod</code>",id:"ibiasmethod",children:[]},{value:"<code>iBiasProgression</code>",id:"ibiasprogression",children:[]},{value:"<code>bEnableMeshPattern</code>",id:"benablemeshpattern",children:[]},{value:"<code>iMeshPatternType</code>",id:"imeshpatterntype",children:[]},{value:"<code>bEnableKeepEntity</code>",id:"benablekeepentity",children:[]},{value:"<code>dFixedPointX</code>",id:"dfixedpointx",children:[]},{value:"<code>dFixedPointY</code>",id:"dfixedpointy",children:[]},{value:"<code>dFixedPointZ</code>",id:"dfixedpointz",children:[]},{value:"<code>iFixedPointId</code>",id:"ifixedpointid",children:[]}]}],d={toc:c};function o(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"description"},"Description"),Object(l.b)("p",null,"A data type uses to control parameters of Local Mesh"),Object(l.b)("h2",{id:"attributes"},"Attributes"),Object(l.b)("h3",{id:"ientitytype"},Object(l.b)("inlineCode",{parentName:"h3"},"iEntityType")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying entity type."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("h3",{id:"benablesizeparams"},Object(l.b)("inlineCode",{parentName:"h3"},"bEnableSizeParams")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," enable/disable enable size params."),Object(l.b)("li",{parentName:"ul"},"The default value is False.")),Object(l.b)("h3",{id:"davgelemsize"},Object(l.b)("inlineCode",{parentName:"h3"},"dAvgElemSize")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying avg elem size."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"dmaxelemsize"},Object(l.b)("inlineCode",{parentName:"h3"},"dMaxElemSize")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying maximum elem size."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"dminelemsize"},Object(l.b)("inlineCode",{parentName:"h3"},"dMinElemSize")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying minimum elem size."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"benabletrimangle"},Object(l.b)("inlineCode",{parentName:"h3"},"bEnableTrimAngle")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," enable/disable enable trim angle."),Object(l.b)("li",{parentName:"ul"},"The default value is False.")),Object(l.b)("h3",{id:"dtrimangle"},Object(l.b)("inlineCode",{parentName:"h3"},"dTrimAngle")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying trim angle."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"benablemeshcount"},Object(l.b)("inlineCode",{parentName:"h3"},"bEnableMeshCount")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," enable/disable enable mesh count."),Object(l.b)("li",{parentName:"ul"},"The default value is False.")),Object(l.b)("h3",{id:"inodecount"},Object(l.b)("inlineCode",{parentName:"h3"},"iNodeCount")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying node count."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("h3",{id:"ibiasnodeid"},Object(l.b)("inlineCode",{parentName:"h3"},"iBiasNodeId")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying bias node ID."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("h3",{id:"dbiasfactor"},Object(l.b)("inlineCode",{parentName:"h3"},"dBiasFactor")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying bias factor."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"ibiasmethod"},Object(l.b)("inlineCode",{parentName:"h3"},"iBiasMethod")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying bias method."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("h3",{id:"ibiasprogression"},Object(l.b)("inlineCode",{parentName:"h3"},"iBiasProgression")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying bias progression."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("h3",{id:"benablemeshpattern"},Object(l.b)("inlineCode",{parentName:"h3"},"bEnableMeshPattern")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," enable/disable enable mesh pattern."),Object(l.b)("li",{parentName:"ul"},"The default value is False.")),Object(l.b)("h3",{id:"imeshpatterntype"},Object(l.b)("inlineCode",{parentName:"h3"},"iMeshPatternType")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying mesh pattern type."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")),Object(l.b)("h3",{id:"benablekeepentity"},Object(l.b)("inlineCode",{parentName:"h3"},"bEnableKeepEntity")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Boolean")," enable/disable enable keep entity."),Object(l.b)("li",{parentName:"ul"},"The default value is False.")),Object(l.b)("h3",{id:"dfixedpointx"},Object(l.b)("inlineCode",{parentName:"h3"},"dFixedPointX")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying fixed point x."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"dfixedpointy"},Object(l.b)("inlineCode",{parentName:"h3"},"dFixedPointY")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying fixed point y."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"dfixedpointz"},Object(l.b)("inlineCode",{parentName:"h3"},"dFixedPointZ")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"A ",Object(l.b)("em",{parentName:"li"},"Double")," specifying fixed point z."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.0.")),Object(l.b)("h3",{id:"ifixedpointid"},Object(l.b)("inlineCode",{parentName:"h3"},"iFixedPointId")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"An ",Object(l.b)("em",{parentName:"li"},"Integer")," specifying fixed point ID."),Object(l.b)("li",{parentName:"ul"},"The default value is 0.")))}o.isMDXComponent=!0}}]);