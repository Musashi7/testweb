(window.webpackJsonp=window.webpackJsonp||[]).push([[412],{491:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),i=(t(0),t(615)),c={id:"JPT.RemoveAllConnections",title:"JPT.RemoveAllConnections()",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/",description:"Remove all the existing connections"},a={unversionedId:"psj-utility/JPT.RemoveAllConnections",id:"psj-utility/JPT.RemoveAllConnections",isDocsHomePage:!1,title:"JPT.RemoveAllConnections()",description:"Remove all the existing connections",source:"@site/docs\\psj-utility\\PSJ-Utility_RemoveAllConnections.md",slug:"/psj-utility/JPT.RemoveAllConnections",permalink:"/testweb/docs/psj-utility/JPT.RemoveAllConnections",version:"current"},l=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Remove all the existing connections."),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"JPT.RemoveAllConnections()\n")),Object(i.b)("h2",{id:"inputs"},"Inputs"),Object(i.b)("p",null,"This utility function does not require any input value."),Object(i.b)("h2",{id:"return-code"},"Return Code"),Object(i.b)("p",null,"This utility function does not have output value."),Object(i.b)("h2",{id:"sample-code"},"Sample Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python",metastring:"{0,37}","{0,37}":!0}),'# Create sample model\nGeometry.Part.Cube(iColorPart=7011837)\nConnections.RigidElements.RBE2.OneToMany(crlMasterTarget=[Node(446)],\n                                         crlSlaveTarget=[Node(467)])\nConnections.RigidElements.RBE2.OneToMany(crlMasterTarget=[Node(443)],\n                                         crlSlaveTarget=[Node(470)],\n                                         strName="RBE2_2")\nConnections.RigidElements.RBE3.OneToMany(crlMasterTarget=[Node(450)],\n                                         crlSlaveTarget=[Node(455)],\n                                         listRbe3TermConnection=[(0, 63, 1), (1, 7, 1)],\n                                         strName="RBE3_1")\nConnections.RigidElements.RBE3.OneToMany(crlMasterTarget=[Node(463)],\n                                         crlSlaveTarget=[Node(458)],\n                                         listRbe3TermConnection=[(0, 63, 1), (1, 7, 1)],\n                                         strName="RBE3_2")\nConnections.MPC.General.NodeToNode(crlMaster=[Node(436)],\n                                   crlSlave=[Node(476)],\n                                   listMpcConnection=[MPC_CONNECTION(iDof=1),\n                                                      MPC_CONNECTION(iDof=2),\n                                                      MPC_CONNECTION(iDof=4),\n                                                      MPC_CONNECTION(),\n                                                      MPC_CONNECTION(),\n                                                      MPC_CONNECTION()],\n                                   bUpdateDispCS=1)\nConnections.MPC.General.NodeToNode(strName="MPC_2",\n                                   crlMaster=[Node(437)],\n                                   crlSlave=[Node(477)],\n                                   listMpcConnection=[MPC_CONNECTION(iDof=1),\n                                                      MPC_CONNECTION(iDof=2),\n                                                      MPC_CONNECTION(iDof=4),\n                                                      MPC_CONNECTION(),\n                                                      MPC_CONNECTION(),\n                                                      MPC_CONNECTION()],\n                                   bUpdateDispCS=1)\n\n# Remove all created connections\nJPT.RemoveAllConnections()\n')))}u.isMDXComponent=!0},615:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},C=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),C=o,m=p["".concat(c,".").concat(C)]||p[C]||d[C]||i;return t?r.a.createElement(m,a(a({ref:n},s),{},{components:t})):r.a.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=C;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}C.displayName="MDXCreateElement"}}]);