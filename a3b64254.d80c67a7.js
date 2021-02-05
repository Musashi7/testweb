(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{396:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(615)),c={title:"Creating a standard bolt",id:"creating-bolt",sidebar_label:"Creating a standard bolt",description:null,image:"./creating-bolt/purpose_target.png"},i={unversionedId:"tutorials/creating-bolt",id:"tutorials/creating-bolt",isDocsHomePage:!1,title:"Creating a standard bolt",description:"This tutorial demonstrates how to make a custom bolt using a pre-defined template by using Jupiter macro. Finally, it will integrates the macro to a custom UI using GUI Command Builder.",source:"@site/docs\\tutorials\\creating-bolt.md",slug:"/tutorials/creating-bolt",permalink:"/testweb/docs/tutorials/creating-bolt",version:"current",sidebar_label:"Creating a standard bolt",sidebar:"intro",previous:{title:"Release Note V4.1.2",permalink:"/testweb/docs/release-notes/release-note-v412"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Procedure",id:"procedure",children:[{value:"Get Macro",id:"get-macro",children:[]},{value:"Create DEF function in Python",id:"create-def-function-in-python",children:[]},{value:"Create User Interface (UI)",id:"create-user-interface-ui",children:[]}]}],b={toc:l};function s(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial demonstrates how to make a custom bolt using a pre-defined template by using Jupiter macro. Finally, it will integrates the macro to a custom UI using GUI Command Builder."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Purpose and target")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ol",{parentName:"div"},Object(o.b)("li",{parentName:"ol"},"Understand how to get and make use of Jupiter macro"),Object(o.b)("li",{parentName:"ol"},"Implement the Jupiter macro to a general Python script for automatic process"),Object(o.b)("li",{parentName:"ol"},"Create a dialogue using GUI Command Builder"),Object(o.b)("li",{parentName:"ol"},"Intergrate the user's script in (2.) to the dialogue made in (3.) to make a custom UI function"),Object(o.b)("li",{parentName:"ol"},"Add the custom UI function to Jupiter's ribbon and start using it")))),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"In this tutorial, user will make a UI dialoge to embed the Jupiter's customized Python macro for automatic work."),Object(o.b)("p",null,"After user selects the bolt's size and press Apply or OK button (left figure), a user-standard bolt will be made and show in Jupiter's screen (right figure)."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Purpose and Target",src:n(783).default})),Object(o.b)("h2",{id:"procedure"},"Procedure"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Get Macro"),": Run Jupiter available functions to get the respective Macro")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Create def function in Python"),": Combine Macro with Python based script in order to create a full user function")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Create User Interface (UI)"),": Use GUI Command Builder to make a UI dialogue connecting to the user function")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Implement"),": Register the new UI dialogue to Jupiter software"))),Object(o.b)("h3",{id:"get-macro"},"Get Macro"),Object(o.b)("h4",{id:"creating-2-cylinders"},"Creating 2 cylinders"),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"Geometry > Create Entity > Part > Cylinder")," function to make 2 cylinders in sequence: one for bolt head, another for bolt body."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Make 2 cylinders",src:n(784).default})),Object(o.b)("p",null,"User then can see the bolt created in Jupiter's screen:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Get macro",src:n(785).default})),Object(o.b)("p",null,"as well as the corresponded macro in Macro window:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'CreateCylinderFrustum([0, 0, 0], 0.003, 0.003, 0.002, 36, 10, "Head", 12999622, 0:0)\nCreateCylinderFrustum([0, 0.002, 0], 0.0015, 0.0015, 0.01, 36, 10, "Body", 7731705, 0:0)\n')),Object(o.b)("h4",{id:"creating-assemble-face"},"Creating assemble face"),Object(o.b)("p",null,"Then, using ",Object(o.b)("inlineCode",{parentName:"p"},"Assemble > Assemble > Assemble Faces")," to make to cylinder share one same face (this would help mesh continue between 2 parts)."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Assemble",src:n(786).default})),Object(o.b)("p",null,"A corresponded macro in Macro window will be generated:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"AssembleFaceMatingStep([], [], [3:1, 3:2], 0.0003)\n")),Object(o.b)("h4",{id:"merging-2-parts"},"Merging 2 parts"),Object(o.b)("p",null,"Next, using ",Object(o.b)("inlineCode",{parentName:"p"},"Geometry > Edit Entity > Merge Entities > Parts")," to merge 2 cylinders into 1 body. This part will be considered as a simple bolt geometry used in this tutorial."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Merge 2 parts",src:n(787).default})),Object(o.b)("p",null,"A corresponded macro in Macro window will be generated:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"MergePart(1e-08, 1, [3:2, 3:1])\n")),Object(o.b)("h4",{id:"renaming-part"},"Renaming part"),Object(o.b)("p",null,"Finally, right click on the part in Assembly window to rename this part to ",Object(o.b)("strong",{parentName:"p"},"BOLT"),"."),Object(o.b)("p",null,Object(o.b)("img",{alt:"Rename the bolt",src:n(788).default})),Object(o.b)("p",null,"A corresponded macro in Macro window will be generated:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Macro output")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'RenameItem("BOLT", 3:2)\n')),Object(o.b)("h3",{id:"create-def-function-in-python"},"Create DEF function in Python"),Object(o.b)("p",null,"To recap, below is the total macro collected in the above steps:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{code-block}",metastring:"python",python:!0}),'---\nlineno-start: 1\ncaption: Macro used in this tutorial\n---\nCreateCylinderFrustum([0, 0, 0], 0.003, 0.003, 0.002, 36, 10, "Head", 12999622, 0:0)\nCreateCylinderFrustum([0, 0.002, 0], 0.0015, 0.0015, 0.01, 36, 10, "Body", 7731705, 0:0)\nAssembleFaceMatingStep([], [], [3:1, 3:2], 0.0003)\nMergePart(1e-08, 1, [3:2, 3:1])\nRenameItem("BOLT", 3:2)\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To execute the code into Python, use the format of ",Object(o.b)("inlineCode",{parentName:"p"},"JPT.Exec(\u201cMacro\u201d)"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Using the above script, now parameterize the numbers and add some built-in Python functions (if\u2026else, for, while, etc.) to make the script adapt to different input parameters."))),Object(o.b)("p",null,"In this sample, the def function ",Object(o.b)("inlineCode",{parentName:"p"},"<on_execute_button_clicked()>")," is responsible for implementing the OK or Apply button."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def on_execute_button_clicked(dlg, part_name, coord_system, bolt_type, bolt_length):\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-{admonition}",metastring:"Note",Note:!0}),":class: note\nThe Macro is added to create the bolt according to the value generated by user. From now, user can combine the knowledge about Python language and just generated Macro to create def function\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Create def function",src:n(789).default})),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Further information")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"For further information on creating the def function in Python, please refer to the comments in the sample code ",Object(o.b)("inlineCode",{parentName:"p"},"CreateBolt.py")))),Object(o.b)("h3",{id:"create-user-interface-ui"},"Create User Interface (UI)"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Create def function",src:n(790).default})),Object(o.b)("p",null,"Open GUI Command Builder: ",Object(o.b)("inlineCode",{parentName:"p"},"Python ribbon > Python Script in Jupiter > GUI Command Builder")))}s.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?r.a.createElement(m,i(i({ref:t},b),{},{components:n})):r.a.createElement(m,i({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<o;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},783:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/purpose_target-f2fedb79b4fef277ebe276a1da3f8ebc.png"},784:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Get_macro-2f2695bf1a26992c80559e0b77ee65ce.png"},785:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/output1-5d6fcfd8875715ccc9e7ecbd2951965b.png"},786:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/assemble-5e0732a6b69b29deb999ec58597f41cf.png"},787:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/merge2parts-fa4dc7187543abf88fbae2a2fe3dce2f.png"},788:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/rename_part-c1690a3fc717429fc7a9dd1e5e04458a.png"},789:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/create_def_function-c91b01cc4bc71f8ea4bd947f74a53aeb.png"},790:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ui1-545090e50e4903aad1d502d6199694c6.png"}}]);