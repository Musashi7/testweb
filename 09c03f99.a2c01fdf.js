(window.webpackJsonp=window.webpackJsonp||[]).push([[18,59,218],{612:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),c=t(624),i=t(85),n=t.n(i);var o=[{title:"State Machine",preview:t(678),source:"https://github.com/miroiu/nodify/tree/master/Examples/Nodify.StateMachine",category:"example-app"},{title:"Calculator",preview:t(679),source:"https://github.com/miroiu/nodify/tree/master/Examples/Nodify.Calculator",category:"example-app"},{title:"Playground",preview:t(680),source:"https://github.com/miroiu/nodify/tree/master/Examples/Nodify.Playground",category:"example-app"}],m=t(3),p=t(7),s=t(616),A=t(618),g=t(86),d=t.n(g),h=function(e){var a=e.className,t=Object(p.a)(e,["className"]);return r.a.createElement(A.a,Object(m.a)({className:Object(s.a)("button button--primary button--lg margin-top--lg",a),href:t.url},t),"Submit yours")},u=function(e){var a=e.submitUrl;return r.a.createElement("header",{className:"row"},r.a.createElement("div",{className:"col col--8"},r.a.createElement("h1",{className:"hero__title"},"Explore these awesome applications we are building with",r.a.createElement("span",{className:d.a.highlightText}," PSJ")," or",r.a.createElement("div",null,r.a.createElement(h,{url:a,className:d.a.addApplicationButton})))),r.a.createElement("div",{className:"col col--4"}))},b=function(e){var a=e.submitUrl;return r.a.createElement("div",{className:Object(s.a)("hero",d.a.banner)},r.a.createElement("div",{className:"container"},r.a.createElement(u,{submitUrl:a})))},E=t(681),w=t(60),f=t.n(w);const N=({picture:e,title:a,website:t,description:l,source:c})=>r.a.createElement("div",{className:Object(s.a)("card",f.a.cardContainer)},r.a.createElement("div",{className:Object(s.a)("card__image",f.a.image)},r.a.createElement(E.a,{img:e,alt:a})),r.a.createElement("div",{className:"card__body"},r.a.createElement("h3",{className:f.a.title},a),r.a.createElement("p",{className:"avatar__subtitle"},l)),r.a.createElement("div",{className:"card__footer"},r.a.createElement("div",{className:"button-group button-group--block"},t&&r.a.createElement(A.a,{href:t,className:Object(s.a)("button button--small button--block",f.a.button,f.a.outline)},"Website"),c&&r.a.createElement(A.a,{href:c,className:Object(s.a)("button button--small button--primary button--block",f.a.button)},"Source")))),v=({id:e,name:a,apps:t,...l})=>r.a.createElement("section",l,r.a.createElement("h2",{id:e,className:f.a.listName},a,r.a.createElement("a",{href:`#${e}`,className:"hash-link"},"#")),r.a.createElement("div",{className:"row"},t.map((e=>r.a.createElement("div",{key:e.title,className:"col col--4 margin-bottom--lg"},r.a.createElement(N,Object(m.a)({},e,{picture:e.preview}))))))),x=o.filter((e=>"example-app"===e.category)),S=o.filter((e=>"example-app"!==e.category));a.default=()=>r.a.createElement(c.a,{title:"Showcase",description:"Explore these awesome applications people are building with PSJ",wrapperClassName:n.a.fullWrapper},r.a.createElement(b,{submitUrl:"https://www.e-technostar.com/contact"}),r.a.createElement("main",{className:"container"},S.length>0&&r.a.createElement(v,{id:"all",name:"Your applications",apps:S}),r.a.createElement(v,{id:"examples",name:"Example applications",apps:x})))},629:function(e,a,t){"use strict";var l=t(0),r=t.n(l),c=t(617),i=t(616),n=(t(59),t(3)),o=t(618),m=t(619);const p=({to:e,href:a,label:t,...l})=>{const c=Object(m.a)(e),i=Object(m.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(o.a,Object(n.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:i}:{to:c},l),t)},s=()=>r.a.createElement("div",null,r.a.createElement("div",{className:"copyright-color"},"Copyright \xa9 ",(new Date).getFullYear()," TechnoStar Co. Ltd.")),A=[{label:"Docs",to:"docs/"},{label:"Showcase",to:"showcase/"},{label:"Github",href:"https://github.com/miroiu/nodify"},{label:"Nuget",href:"https://www.nuget.org/packages/Nodify"}];a.a=()=>{const{footer:e}=Object(c.useThemeConfig)();return r.a.createElement("footer",{className:Object(i.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container text--center"},r.a.createElement("div",{className:"footer__links"},A.map(((e,a)=>r.a.createElement(r.a.Fragment,{key:e.href||e.to},r.a.createElement(p,e),a<A.length-1&&r.a.createElement("span",{className:"footer__link-separator"},"\xb7"))))),r.a.createElement(s,null)))}},678:function(e,a,t){e.exports={src:{srcSet:t.p+"ideal-img/example-state-machine.d680cac.640.png 640w,"+t.p+"ideal-img/example-state-machine.83365c3.838.png 838w",images:[{path:t.p+"ideal-img/example-state-machine.d680cac.640.png",width:640,height:322},{path:t.p+"ideal-img/example-state-machine.83365c3.838.png",width:838,height:422}],src:t.p+"ideal-img/example-state-machine.d680cac.640.png",toString:function(){return t.p+"ideal-img/example-state-machine.d680cac.640.png"},placeholder:void 0,width:640,height:322},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAlklEQVQI1zWNQQ6CMAAE+/+fedALGBCwRAUToGCLEizQjoJxkr1sJrsilopj2pBcXnRmwrsFa2e0GWmUwTnHikjydhNPeY8ePL2qeKiGxcNhHzBb+xMj2RGmLXH+ROlpK62duBYd7WCI7me894iitgSpZhdqWrNs4vieOMYlYXYjzCXOO0TVOdaUymG+1+A3eV3JZM2fD61jvcYbvMmOAAAAAElFTkSuQmCC",palette:null}},679:function(e,a,t){e.exports={src:{srcSet:t.p+"ideal-img/example-calculator.3abb7ba.640.png 640w,"+t.p+"ideal-img/example-calculator.3e59351.837.png 837w",images:[{path:t.p+"ideal-img/example-calculator.3abb7ba.640.png",width:640,height:344},{path:t.p+"ideal-img/example-calculator.3e59351.837.png",width:837,height:450}],src:t.p+"ideal-img/example-calculator.3abb7ba.640.png",toString:function(){return t.p+"ideal-img/example-calculator.3abb7ba.640.png"},placeholder:void 0,width:640,height:344},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAjUlEQVQI1zWOzQqDMBCEff8H6q2vUCj2Ir20tDSKQY0xvyaOuwmFncPAfDvTTDpgXCy0T7DxgNsPmJixkd98LjIho7k9vrhcW0gCGBKjhlx9BUIFLAe1S2D1k0X3kvj8FvSzw7zFEqSSGmTDWhkgmg6a/DBbtM8B905Amcgfd7DqpoS/d7TzLVRpUSbgBNuEv+qonj/AAAAAAElFTkSuQmCC",palette:null}},680:function(e,a,t){e.exports={src:{srcSet:t.p+"ideal-img/example-playground.d27e266.640.png 640w,"+t.p+"ideal-img/example-playground.a8ee625.841.png 841w",images:[{path:t.p+"ideal-img/example-playground.d27e266.640.png",width:640,height:343},{path:t.p+"ideal-img/example-playground.a8ee625.841.png",width:841,height:451}],src:t.p+"ideal-img/example-playground.d27e266.640.png",toString:function(){return t.p+"ideal-img/example-playground.d27e266.640.png"},placeholder:void 0,width:640,height:343},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAArklEQVQI1y3Iu07DMBhAYT8DErc2dozTWHacy+9ElFZVaWEAscBE1y7dKwae/4AQw9EnHSV5QoaRpumIaSD0S2Le4NNIoQ3FzSXF9QWqzffoKuB8opJHZvsT85cz87dv9OsXendErz9Rg2TqRYWva+qQcKGjajK+f8DJFrv6QC/fUTlnxmnCWktROtpxTf90+LNrEzEE9O0VSkSIMWKM+a/EyDPGeUp7h3UL9O/7AXYjS7BCM831AAAAAElFTkSuQmCC",palette:null}}}]);