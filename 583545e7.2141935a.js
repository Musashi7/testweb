(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{259:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var i=n(3),a=n(7),r=(n(0),n(615)),o={id:"release-note-v414",title:"Release Note V4.1.4",sidebar_label:"v4.1.4"},l={unversionedId:"release-notes/release-note-v414",id:"release-notes/release-note-v414",isDocsHomePage:!1,title:"Release Note V4.1.4",description:"This release mainly focuses on PSJ-Utility improvements along with few enhancements and bug fixes.",source:"@site/docs\\release-notes\\v4.1.4.md",slug:"/release-notes/release-note-v414",permalink:"/testweb/docs/release-notes/release-note-v414",version:"current",sidebar_label:"v4.1.4",sidebar:"intro",previous:{title:"Release Note V4.1.5",permalink:"/testweb/docs/release-notes/release-note-v415"},next:{title:"Release Note V4.1.3",permalink:"/testweb/docs/release-notes/release-note-v413"}},b=[{value:"New Features",id:"new-features",children:[{value:"Data types",id:"data-types",children:[]},{value:"PSJ-Utility",id:"psj-utility",children:[]}]}],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This release mainly focuses on PSJ-Utility improvements along with few enhancements and bug fixes."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add new data types"),Object(r.b)("li",{parentName:"ul"},"Add new PSJ-Utility commands (API) and samples")),Object(r.b)("h2",{id:"new-features"},"New Features"),Object(r.b)("h3",{id:"data-types"},"Data types"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add some new properties to ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"DBody"))," (",Object(r.b)("inlineCode",{parentName:"p"},"vertexs"),", ",Object(r.b)("inlineCode",{parentName:"p"},"colorMesh"),", ",Object(r.b)("inlineCode",{parentName:"p"},"transparance"),"), ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"DEdge"))," (",Object(r.b)("inlineCode",{parentName:"p"},"color"),"), ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"DFace"))," (",Object(r.b)("inlineCode",{parentName:"p"},"color"),"), ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"DNode"))," (",Object(r.b)("inlineCode",{parentName:"p"},"isFloating"),"), ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"DElem"))," (",Object(r.b)("inlineCode",{parentName:"p"},"kind"),", ",Object(r.b)("inlineCode",{parentName:"p"},"color"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add new ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"Associate types")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"Bool types")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"Entity types")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"Path types")),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Add new list classes ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"DItemVector")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"BodyVector")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"FaceVector")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"ElemVector")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"GroupVector")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"NodeVector")),", ",Object(r.b)("em",{parentName:"p"},"{ref}",Object(r.b)("inlineCode",{parentName:"em"},"EdgeVector"))))),Object(r.b)("h3",{id:"psj-utility"},"PSJ-Utility"),Object(r.b)("h4",{id:"api"},"API"),Object(r.b)("p",null,"Below new commands are added:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"addObj()")," : Append a value to the current list."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clearVec()")," : Clear all the list \u2192 The size of the list after using clearVec is equal to 0."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"deleteObj()")," : Delete an object of a list by inputting its index."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"extendVec()")," : Append another list to the selected list."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"isContainObj()")," : Check whether the inputted object is existing in the current list or not."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastDItemToDBody()")," : Convert DItem to DBody to get the information of the selected body."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastDItemToDEdge()")," : Convert DItem to DEdge to get the information of the selected Edge."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastDItemToDElem()")," : Convert DItem to DElement to get the information of the selected Element."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastDItemToDFace()")," : Convert DItem to DFace to get the information of the selected Face."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastDItemToDGroup()")," : Convert DItem to DGroup to get the information of the selected DGroup."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastDItemToDNode()")," : Convert DItem to DNode to get the information of the selected DNode."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.CastToDItem()")," : Convert the selected one to DItem to get all the related information."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ClearLog()")," : Clear all the text existing in the Python API window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ConvertJPTColorToRGB()")," : Convert color code in Jupiter to RBG values."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ConvertRGBToJPTColor()")," : Convert RBG values to Jupiter color code."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.Debugger()")," : Show all the related information of the inputted parameter (value, class, etc.) in the Python API window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.DItemListToMacroListTCursor()")," : Convert DItem list to the macro list cursor."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetAppPathInfo()")," : Get the information of the selected path type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetElemsByKind()")," : Get all the related information of the inputted element type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetEntitiesByAdjacent()")," : Get all the entities (Faces/Elements) relating to the inputted entity with the inputted condition (Angle)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetEntitiesByAssociation()")," : Get all the entities relating to the inputted target with the inputted conditions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetEntitiesByID()")," : Get all the related information of the inputted entity and its ID."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetEntitiesByName()")," : Get all the related information of the entities which are having the name similar (Option = 0) or exactly the same (Option = 1) to the inputted conditions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetEntitiesByPosition()")," : Get all the related information of the entities which are having the coordinate equal or same to the inputted conditions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetMaxIDEntity()")," : Get the maximum ID of the inputted entity type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetMinIDEntity()")," : Get the minimum ID of the inputted entity type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetPythonAPILog()")," : Get the text which is existing on the Python API window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.GetRandomJPTColor()")," Get a random color code in Jupiter (Integer value)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.InverseHideBodies()")," : Show the inputted item only on the display window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ListDoubleToMacroVector()")," : Convert list of values to a string of macro type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.MacroListTCursorToListDItem()")," : Convert a string of macro type to DItemVector type."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.PrintAppPathInfo()")," : Show all the related information of the current model file on the Python API window, including program path, temp path, appdata path, document path (jtdb path)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.PrintPSJUtilityManual()")," : Show all the existing Python API function with its information on the Python API window."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.QuitApplication()")," : Close Jupiter"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.RemoveEntitiesByID()")," : Remove an inputted entity type and its ID"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.RemoveEntitiesByName()")," : Remove all the entities which are containing the name is similar (Option 3 = 0) or exactly the same (Option 3 = 1) to the inputted value"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ShowHideAllParts()")," : Show/Hide all the existing parts on the model"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ShowHideEntitiesByID()")," : Show/Hide the inputted item id"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"JPT.ViewFitToModel()")," : Change the current view to fit to the model")),Object(r.b)("h4",{id:"sample"},"Sample"),Object(r.b)("p",null,"Add 26 samples to ",Object(r.b)("em",{parentName:"p"},"\\SampleData\\PSJ\\PSJ-Utility")," folder, instruct user how to make use of PSJ-Utility effectively."))}p.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),s=i,u=m["".concat(o,".").concat(s)]||m[s]||d[s]||r;return n?a.a.createElement(u,l(l({ref:t},c),{},{components:n})):a.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=s;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);