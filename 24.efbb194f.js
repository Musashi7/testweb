(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{105:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},202:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(0),r=n.n(a),o=n(105),c=n(99),i=n.n(c);function l(e){var t=e.onReload,n=Object(a.useState)(!0),c=n[0],l=n[1];return c&&r.a.createElement("div",{className:Object(o.a)("alert","alert--secondary",i.a.popup)},r.a.createElement("p",null,"New version available"),r.a.createElement("div",{className:i.a.buttonContainer},r.a.createElement("button",{className:"button button--link",type:"button",onClick:function(){l(!1),t()}},"Refresh"),r.a.createElement("button",{"aria-label":"Close",className:"close",type:"button",onClick:function(){return l(!1)}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))}}}]);