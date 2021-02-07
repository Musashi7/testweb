(window.webpackJsonp=window.webpackJsonp||[]).push([[451],{1441:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},s=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,O=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return a?l.a.createElement(O,b(b({ref:t},o),{},{components:a})):l.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var o=2;o<r;o++)i[o]=a[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},527:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),l=a(7),r=(a(0),a(1441)),i={id:"Properties.BAR",title:"Properties.BAR()",author:"TechnoStar Co., Ltd.",authorURL:"https://www.e-technostar.com/",description:"Create 1D bar property"},b={unversionedId:"psj-command/properties/Properties.BAR",id:"psj-command/properties/Properties.BAR",isDocsHomePage:!1,title:"Properties.BAR()",description:"Create 1D bar property",source:"@site/docs\\psj-command\\properties\\Properties.BAR.md",slug:"/psj-command/properties/Properties.BAR",permalink:"/testweb/docs/psj-command/properties/Properties.BAR",version:"current",sidebar:"api",previous:{title:"Post.ImportResults.NastranOp2PostJob()",permalink:"/testweb/docs/psj-command/post/Post.ImportResults.NastranOp2PostJob"},next:{title:"Properties.Beam()",permalink:"/testweb/docs/psj-command/properties/Properties.Beam"}},c=[{value:"Description",id:"description",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Inputs",id:"inputs",children:[]},{value:"Return Code",id:"return-code",children:[]},{value:"Sample Code",id:"sample-code",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"This method uses to create a property data of one-dimensional Bar element."),Object(r.b)("h2",{id:"syntax"},"Syntax"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Properties.BAR(strName="", iId=1, crSection=None, iShapeDataType=0, crDatacrMat=None, dDatadArea=DFLT_DBL, dlDataOrient=[0, 0, 0], dlDataInertia=[0, 0, 0], dDatadTorConst=DFLT_DBL, dDatadNSM=DFLT_DBL, dDataShearAreaFactor0=DFLT_DBL, dDataShearAreaFactor1=DFLT_DBL, dDataStressRecoveryCoeff0=DFLT_DBL, dDataStressRecoveryCoeff1=DFLT_DBL, dDataStressRecoveryCoeff2=DFLT_DBL, dDataStressRecoveryCoeff3=DFLT_DBL, dDataStressRecoveryCoeff4=DFLT_DBL, dDataStressRecoveryCoeff5=DFLT_DBL, dDataStressRecoveryCoeff6=DFLT_DBL, dDataStressRecoveryCoeff7=DFLT_DBL, bDataPinA0=False, bDataPinA1=False, bDataPinA2=False, bDataPinA3=False, bDataPinA4=False, bDataPinA5=False, bDataPinB0=False, bDataPinB1=False, bDataPinB2=False, bDataPinB3=False, bDataPinB4=False, bDataPinB5=False, dlDataOffset0=[DFLT_DBL, DFLT_DBL, DFLT_DBL], dlDataOffset1=[DFLT_DBL, DFLT_DBL, DFLT_DBL], iLocalLengthUnit=0, iLocalMassUnit=0, crlTarget=[], crEdit=None)\n')),Object(r.b)("p",null,"Macro: {ref}",Object(r.b)("inlineCode",{parentName:"p"},"Macro-Properties-Property1DBar")),Object(r.b)("p",null,"Ribbon: {menuselection}",Object(r.b)("inlineCode",{parentName:"p"},"Properties --\x3e BAR")),Object(r.b)("h2",{id:"inputs"},"Inputs"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"strName")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"String")," specifying the property name."),Object(r.b)("li",{parentName:"ul"},'The default value is "".')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iId")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the property identification number."),Object(r.b)("li",{parentName:"ul"},"The default value is 1.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"crSection")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor")," specifying the section of Bar."),Object(r.b)("li",{parentName:"ul"},"The default value is None.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iShapeDataType")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the shape data type."),Object(r.b)("li",{parentName:"ul"},"The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"crDatacrMat")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor")," specifying the material will be applied for bar."),Object(r.b)("li",{parentName:"ul"},"The default value is None.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDatadArea")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the area of bar cross section."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dlDataOrient")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double List")," specifying the orientation of bar cross section."),Object(r.b)("li",{parentName:"ul"},"The default value is ","[0, 0, 0]",".")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dlDataInertia")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double List")," specifying the three components area moments of inertia, expressed in the principal axis of the bar."),Object(r.b)("li",{parentName:"ul"},"The default value is ","[0, 0, 0]",".")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDatadTorConst")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the torsion constant which is involved in the relationship between angle of twist and applied torque along the axis of the bar."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDatadNSM")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the Non-Structural Mass which is a contribution to the model mass from features that have negligible structural stiffness."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataShearAreaFactor0")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the area factor for shear (Y axis)."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataShearAreaFactor1")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the the area factor for shear (Z axis)."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff0")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the y coordinates in the BAR element coordinate system of point C at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff1")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the z coordinates in the BAR element coordinate system of point C at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff2")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the y coordinates in the BAR element coordinate system of point D at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff3")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the z coordinates in the BAR element coordinate system of point D at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff4")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the y coordinates in the BAR element coordinate system of point E at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff5")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the z coordinates in the BAR element coordinate system of point E at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff6")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the y coordinates in the BAR element coordinate system of point F at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dDataStressRecoveryCoeff7")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double")," specifying the stress recovery coefficients at the z coordinates in the BAR element coordinate system of point F at which stresses are computed."),Object(r.b)("li",{parentName:"ul"},"The default value is DFLT_DBL.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinA0")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable translation UX at Pin Flag-Point A."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinA1")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable translation UY at Pin Flag-Point A."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinA2")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable translation UZ at Pin Flag-Point A."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinA3")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable rotation RX at Pin Flag-Point A."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinA4")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable rotation RY at Pin Flag-Point A."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinA5")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable rotation RZ at Pin Flag-Point A."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinB0")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable translation UX at Pin Flag-Point B."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinB1")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable translation UY at Pin Flag-Point B."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinB2")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable translation Uz at Pin Flag-Point B."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinB3")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable rotation RX at Pin Flag-Point B."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinB4")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable rotation RY at Pin Flag-Point B."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"bDataPinB5")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Boolean")," enable/disable rotation RZ at Pin Flag-Point B."),Object(r.b)("li",{parentName:"ul"},"The default value is False.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dlDataOffset0")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double List")," specifying the coordinate of Point A as the first Point of offset vector."),Object(r.b)("li",{parentName:"ul"},"The default value is ","[DFLT_DBL, DFLT_DBL, DFLT_DBL]",".")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"dlDataOffset1")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Double List")," specifying the coordinate of Point B as the second Point of offset vector."),Object(r.b)("li",{parentName:"ul"},"The default value is ","[DFLT_DBL, DFLT_DBL, DFLT_DBL]",".")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iLocalLengthUnit")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the local unit in Length unit."),Object(r.b)("li",{parentName:"ul"},"The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"iLocalMassUnit")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"An ",Object(r.b)("em",{parentName:"li"},"Integer")," specifying the local unit in Mass unit."),Object(r.b)("li",{parentName:"ul"},"The default value is 0.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"crlTarget")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor List")," specifying the list of Bar target (Bar Part, Edge, 1D Element)."),Object(r.b)("li",{parentName:"ul"},"The default value is [].")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"crEdit")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("em",{parentName:"li"},"Cursor")," specifying the existing Bar property to modify it. This option uses only for editing property purpose."),Object(r.b)("li",{parentName:"ul"},"The default value is None.")),Object(r.b)("h2",{id:"return-code"},"Return Code"),Object(r.b)("p",null,"An ",Object(r.b)("em",{parentName:"p"},"String")," of 1 if success, or 0 if failed."),Object(r.b)("h2",{id:"sample-code"},"Sample Code"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'Geometry.Part.Cube(iColorPart=12999622)\nProperties.Material.Add("Structural_Steel", [Density([(DENSITY, 7.85e-09)]),\n    Elastic([(YOUNGS_MODULUS, 200000.0), (POISSONS_RATIO, 0.3)])])\nProperties.Section.AddGeneral(strName="Circle", iSecGenType=2, dDsecGensizeT1=0.0002)\n\nProperties.BAR(strName="BAR1", iId=2, crSection=SectionGeneral(1), crDatacrMat=Material(1), \n    dDatadArea=1.25664e-07, dlDataOrient=[0.0, 1.0, 0.0], dlDataInertia=[1.257e-15, 1.257e-15, 0.0], \n    dDatadTorConst=2.513e-15, dDataShearAreaFactor0=0.9, dDataShearAreaFactor1=0.9, dDataStressRecoveryCoeff0=0.0002, \n    dDataStressRecoveryCoeff1=0.0, dDataStressRecoveryCoeff2=0.0, dDataStressRecoveryCoeff3=0.0002, \n    dDataStressRecoveryCoeff4=-0.0002, dDataStressRecoveryCoeff5=0.0, dDataStressRecoveryCoeff6=0.0, \n    dDataStressRecoveryCoeff7=-0.0002, crlTarget=[Edge(19)])\n\n')))}p.isMDXComponent=!0}}]);