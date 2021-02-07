(window.webpackJsonp=window.webpackJsonp||[]).push([[836],{1441:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return u}));var l=n(0),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(n),p=l,u=s["".concat(r,".").concat(p)]||s[p]||m[p]||i;return n?a.a.createElement(u,o(o({ref:t},c),{},{components:n})):a.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=p;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},915:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var l=n(3),a=n(7),i=(n(0),n(1441)),r={id:"release-note-v413",title:"Release Note V4.1.3",sidebar_label:"v4.1.3"},o={unversionedId:"release-notes/release-note-v413",id:"release-notes/release-note-v413",isDocsHomePage:!1,title:"Release Note V4.1.3",description:"This release mainly focuses on PSJ-Utility and PSJ-GUI improvements along with few enhancements and bug fixes.",source:"@site/docs\\release-notes\\v4.1.3.md",slug:"/release-notes/release-note-v413",permalink:"/testweb/docs/release-notes/release-note-v413",version:"current",sidebar_label:"v4.1.3",sidebar:"intro",previous:{title:"Release Note V4.1.4",permalink:"/testweb/docs/release-notes/release-note-v414"},next:{title:"Release Note V4.1.2",permalink:"/testweb/docs/release-notes/release-note-v412"}},b=[{value:"New Features",id:"new-features",children:[{value:"PSJ-Utility",id:"psj-utility",children:[]},{value:"PSJ-GUI",id:"psj-gui",children:[]}]}],c={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This release mainly focuses on PSJ-Utility and PSJ-GUI improvements along with few enhancements and bug fixes."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add new PSJ-Utility commands (API)"),Object(i.b)("li",{parentName:"ul"},"Add new PSJ-GUI commands (API)"),Object(i.b)("li",{parentName:"ul"},"Add advanced control to GUI Command Builder")),Object(i.b)("h2",{id:"new-features"},"New Features"),Object(i.b)("h3",{id:"psj-utility"},"PSJ-Utility"),Object(i.b)("h4",{id:"api"},"API"),Object(i.b)("p",null,"Below new commands are added:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.CheckLicense()")," : Check whether the inputted license is activated or not."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.ClearRedo()")," : Clear all the saved redo steps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.ClearUndo()")," : Clear all the saved undo steps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.ConvertFromDocUnit()")," : Convert the user's unit to the SI unit system."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.ConvertFromMacroUnit()")," : Convert the user's unit to the macro unit system."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.ConvertValueToDocUnit()")," : Convert the SI unit system to the user's unit."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.ConvertValueToMacroUnit()")," : Convert the macro unit system to the user's unit."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.CopyToClipBoard()")," : Take a screenshot of the current view and save it to window clipboard."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.CreateSubAssembly()")," : Create sub assembly automatically."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.DeleteSubAssembly()")," : Delete the inputted sub assembly containing all the related information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.Exec()")," : Run Jupiter macro by inputting that macro to this function."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.FindSubAssemblyByID()")," : Get all the related information of the inputted assembly ID."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.FindSubAssemblyByName()")," : Get all the related information of the inputted assembly name."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllByTableTypeID()")," : Get all the information of the inputted table type id (To check the current available table type id, user can use ",Object(i.b)("inlineCode",{parentName:"li"},"JPT.Debugger(JPT.DTableType.values)"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllByType()")," : Get all the information of the inputted type id (To check the current available type id, user can use ",Object(i.b)("inlineCode",{parentName:"li"},"JPT.Debugger(JPT.EntityType.values)"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllEdges()")," : Get all the information of all existing edges on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllElems()")," : Get all the information of all existing elements on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllFaces()")," : Get all the information of all existing faces on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllGroups()")," : Get all the information of all existing groups on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllLoadsBCs()")," : Get all the information of all existing boundary conditions on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllNodes()")," : Get all the information of all existing nodes on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllParts()")," : Get all the information of all existing parts on the model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllPartsInSubAssembly()")," : Get all the related information of the parts which are belonging to the inputted assembly."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetAllSelected()")," : Get all the information of all the selected items (Part, nodes, elements, etc.)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetCenterOfEntities()")," : Get the center of the selected entities."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetCountByType()")," : Get the total number of the inputted type."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetCurrentDocumentPath()")," : Get the path of the current working Jupiter file."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetJPTTempPath()")," : Get the link of the temporary folder of Jupiter."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetLastCreatedCursor()")," : Get the last created cursor and all of its related information."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetMacroLog()")," : Get the text which is existing on the Macro window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetMaterialDBById()")," : Get the material ID in the Material Database of the inputted material ID."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetMaterialXML()")," : Get all the existing materials in the Material Database."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetOpnList()")," : Get all the available functions of Jupiter which are having their own GUI."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetProgramPath()")," : Get the Jupiter installation folder path."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetRedoCount()")," : Get all the redo steps existing on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedEdges()")," : Get all the information of the selected edges."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedEdgesCr()")," : Get the ID of the selected edges."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedElems()")," : Get all the information of the selected elements."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedElemsCr()")," : Get the ID of the selected elements."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedFaces()")," : Get all the information of the selected faces."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedFacesCr()")," : Get the ID of the selected faces."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedGroups()")," : Get all the information of the selected groups."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedGroupsCr()")," : Get the ID of the selected groups."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedNodes()")," : Get all the information of the selected nodes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedNodesCr()")," : Get the ID of the selected nodes."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedParts()")," : Get all the information of the selected parts."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSelectedPartsCr()")," : Get the ID of the selected parts."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSharedElements()")," : Get all the related information of the shared elements which are relating to the inputted conditions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSharedFaces()")," : Get all the related information of the shared faces which are relating to the inputted conditions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetSharedNodes()")," : Get all the related information of the shared nodes which are relating to the inputted conditions."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.GetUndoCount()")," : Get the total number of undo steps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.MsgOut()")," : Print the inputted text to the Python API window."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllAbaqusStep()")," : Remove all the existing Abaqus steps on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllByTableType()")," : Remove all the related items of the inputted table type."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllConnections()")," : Remove all the existing connections on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllContacts()")," : Remove all the existing contacts on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllCoordinates()")," : Remove all the existing coordinates on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllFieldTables()")," : Remove all the existing field data table on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllLoadCases()")," : Remove all the existing load cases on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllLoadsBCs()")," : Remove all the existing boundary conditions on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllMaterials()")," : Remove all the existing material on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllMeshSettings()")," : Remove all the existing mesh settings on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveAllSolverjob()")," : Remove all the existing solver jobs on the current model."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"JPT.RemoveWSProperties()")," : Remove all the existing properties on the current model.")),Object(i.b)("h3",{id:"psj-gui"},"PSJ-GUI"),Object(i.b)("h4",{id:"api-1"},"API"),Object(i.b)("p",null,"Below new commands are added:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_1delement_selector()")," : Add a 1D element selector to dialog and user can select 1D element only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_2delement_selector()")," : Add a 2D element selector to dialog and user can select 2D element only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_3delement_selector()")," : Add a 3D element selector to dialog and user can select 3D element only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_barpart_selector()")," : Add a bar part selector to dialog and user can select bar part only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_edge_selector()")," : Add an edge selector to dialog and user can select edge only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_elementedge_selector()")," : Add an element edge selector to dialog and user can select element edge only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_face_selector()")," : Add a face selector to dialog and user can select face only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_node_selector()")," : Add a node selector to dialog and user can select node only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_part_selector()")," : Add a part selector to dialog and user can select part only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_vertex_selector()")," : Add a vertex selector to dialog and user can select vertex only."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_browser()")," : Add a file/folder browser component to dialog."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_pagesctrl()")," : Add a pagesctrl component to dialog."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_pagesctrl_page()")," : Add a new page window to an existed pagectrl."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dlg.add_table()")," : Add a table component to dialog.")),Object(i.b)("h4",{id:"gui-command-builder"},"GUI Command Builder"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add open a save database"),Object(i.b)("li",{parentName:"ul"},"Add advanced UI controls: Open File/Folder, Table, Wizard.")))}d.isMDXComponent=!0}}]);