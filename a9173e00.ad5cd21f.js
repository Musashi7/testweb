(window.webpackJsonp=window.webpackJsonp||[]).push([[340],{419:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return i}));var l=n(3),r=n(7),c=(n(0),n(615)),o={id:"AdvcDynamicProcess",title:"AdvcDynamicProcess",author:"TechnoStar Co., Ltd.",author_url:"https://www.e-technostar.com/"},a={unversionedId:"macro/analysis/AdvcDynamicProcess",id:"macro/analysis/AdvcDynamicProcess",isDocsHomePage:!1,title:"AdvcDynamicProcess",description:"Description",source:"@site/docs\\macro\\analysis\\Macro-Analysis-AdvcDynamicProcess.md",slug:"/macro/analysis/AdvcDynamicProcess",permalink:"/testweb/docs/macro/analysis/AdvcDynamicProcess",version:"current"},b=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],u={toc:b};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"description"},"Description"),Object(c.b)("p",null,"Create advc dynamic process"),Object(c.b)("h2",{id:"syntax"},"Syntax"),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("p",null,"1","."," String\nName of advc dynamic process"),Object(c.b)("p",null,"2","."," Int\nGeom nonlinear","[0:blank; 1:Total Langrange; 2:Updated Langrange;]"),Object(c.b)("p",null,"3","."," Int\nTime","[0:Auto; 1:Fixed]"),Object(c.b)("p",null,"4","."," Int\nNumber of increment"),Object(c.b)("p",null,"5","."," Double\nMax time"),Object(c.b)("p",null,"6","."," Double\nMax dt"),Object(c.b)("p",null,"7","."," Double\nMin dt"),Object(c.b)("p",null,"8","."," Int\nLoad type","[-1:default; 0:Step; 1:Ramp]"),Object(c.b)("p",null,"9","."," Int\nOutput last","[-1:default; 0:No; 1:Yes]"),Object(c.b)("p",null,"10","."," Int\nOutput interval"),Object(c.b)("p",null,"11","."," Int\nRestart last","[-1:default; 0:No; 1:Yes]"),Object(c.b)("p",null,"12","."," Int\nRestart interval"),Object(c.b)("p",null,"13","."," Double\nOutput time interval"),Object(c.b)("p",null,"14","."," Double\nRestart time interval"),Object(c.b)("p",null,"15","."," Bool\nIf convergence parameter defined"),Object(c.b)("p",null,"16","."," Double\ncg_tol"),Object(c.b)("p",null,"17","."," Double\ncg_nr_tol"),Object(c.b)("p",null,"18","."," Double\ncg_disp_tol"),Object(c.b)("p",null,"19","."," Double\ncg_nr_disp_tol"),Object(c.b)("p",null,"20","."," Double\ncg_disp_limit_tol"),Object(c.b)("p",null,"21","."," Double\ncg_total_disp_limit_tol"),Object(c.b)("p",null,"22","."," Double\nnewton_tol"),Object(c.b)("p",null,"23","."," Double\nnewton_disp_tol"),Object(c.b)("p",null,"24","."," Double\nnewton_disp_limit_tol"),Object(c.b)("p",null,"25","."," Double\nnewton_total_disp_limit_tol"),Object(c.b)("p",null,"26","."," Int\ncgloop_max"),Object(c.b)("p",null,"27","."," Int\nnewton_max"),Object(c.b)("p",null,"28","."," Double\nht_nl_loop_tol"),Object(c.b)("p",null,"29","."," Int\nht_nl_loop_max"),Object(c.b)("p",null,"30","."," Bool\nIf contact parameter defined"),Object(c.b)("p",null,"31","."," Int\nsubdivide_mode","[-1:default; 0:No; 1:Yes]"),Object(c.b)("p",null,"32","."," Int\ncontactloop_max"),Object(c.b)("p",null,"33","."," Int\ninternal_contactloop_max"),Object(c.b)("p",null,"34","."," Double\nseparation_tol"),Object(c.b)("p",null,"35","."," Double\nrelative_separation_tol"),Object(c.b)("p",null,"36","."," Double\npenetration_tol"),Object(c.b)("p",null,"37","."," Double\nrelative_penetration_tol"),Object(c.b)("p",null,"38","."," Int\nmaxchp"),Object(c.b)("p",null,"39","."," Int\nfriction_onset","[0:delayd; 1:immediate]"),Object(c.b)("p",null,"40","."," Double\nstick_slip_tol"),Object(c.b)("p",null,"41","."," Double\nfriction_tol"),Object(c.b)("p",null,"42","."," Int\nestimate_impact_time","[-1:default; 0:No; 1:Yes]"),Object(c.b)("p",null,"43","."," Bool\nIf auto increment parameter defined"),Object(c.b)("p",null,"44","."," Int\nnewton_residue_incr_max"),Object(c.b)("p",null,"45","."," Int\nbegin_residue_incr_check"),Object(c.b)("p",null,"46","."," Int\nbegin_logarithmic_rate_check"),Object(c.b)("p",null,"47","."," Double\ncut_back_factor_for_divergence"),Object(c.b)("p",null,"48","."," Double\ncut_back_factor_for_too_slow_convergence"),Object(c.b)("p",null,"49","."," Double\ncut_back_factor_for_excessive_distortion"),Object(c.b)("p",null,"50","."," Int\nincr_enlarge_newton_max"),Object(c.b)("p",null,"51","."," Int\nincr_enlarge_suppress"),Object(c.b)("p",null,"52","."," Double\nincrease_factor_for_static"),Object(c.b)("p",null,"53","."," Double\nincrease_factor_for_dynamic"),Object(c.b)("p",null,"54","."," Double\nincrease_factor_for_creep"),Object(c.b)("p",null,"55","."," Double\nincrease_factor_for_rdnlk"),Object(c.b)("p",null,"56","."," Double\ntemperature_incr_max"),Object(c.b)("p",null,"57","."," Int\nuse_temperature_incr_max","[-1:default; 0:No; 1:Yes]"),Object(c.b)("p",null,"58","."," Double\nhalf_step_tol"),Object(c.b)("p",null,"59","."," Double\nstra_tol"),Object(c.b)("p",null,"60","."," Double\ncreep_stra_tol"),Object(c.b)("p",null,"61","."," Double\nrdnlk_stra_tol"),Object(c.b)("p",null,"62","."," Bool\nIf dynamic parameter defined"),Object(c.b)("p",null,"63","."," Double\nAlpha"),Object(c.b)("p",null,"64","."," Double\nBeta"),Object(c.b)("p",null,"65","."," Double\nGamma"),Object(c.b)("p",null,"66","."," Cursor\nEdit cursor"),Object(c.b)("p",null,"67","."," List\nStatus of Loads"),Object(c.b)("p",null,"68","."," List\nStatus of Load Cases"),Object(c.b)("p",null,"69","."," List\nStatus and other data of Contacts"),Object(c.b)("p",null,"70","."," List\nOutput parameters"),Object(c.b)("p",null,"71","."," Int\nReference result type","[0:Temperature Load; 1:Stress]"),Object(c.b)("p",null,"72","."," String\nPath of reference result"),Object(c.b)("p",null,"73","."," List\nData of reference result"),Object(c.b)("h2",{id:"return-code"},"Return Code"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"1")," - The function is executed correctly."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"0")," - Cannot execute."),Object(c.b)("h2",{id:"sample-code"},"Sample Code"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-python"}),'AdvcDynamicProcess("Test",1,1,1,0.001,0.001,0.001,1,1,1,1,1,0.001,0.001,1,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,1,1,0.001,1,1,1,1,1,0.001,0.001,0.001,0.001,1,1,0.001,0.001,1,1,1,1,1,0.001,0.001,0.001,1,1,0.001,0.001,0.001,0.001,0.001,1,0.001,0.001,0.001,0.001,1,0.001,0.001,0.001,1:11,,,,,1,"Test",)\n')))}i.isMDXComponent=!0},615:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var l=n(0),r=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),i=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=i(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,o=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),p=i(n),d=l,O=p["".concat(o,".").concat(d)]||p[d]||s[d]||c;return n?r.a.createElement(O,a(a({ref:t},u),{},{components:n})):r.a.createElement(O,a({ref:t},u))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,o=new Array(c);o[0]=d;var a={};for(var b in t)hasOwnProperty.call(t,b)&&(a[b]=t[b]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var u=2;u<c;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);