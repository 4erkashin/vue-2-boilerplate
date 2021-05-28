(function(t){function e(e){for(var r,s,i=e[0],u=e[1],c=e[2],l=0,p=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var u=a[s];0!==n[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5854b7fa"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,a[1](c)}n[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-2-boilerplate/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var f=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"},cd49:function(t,e,a){"use strict";a.r(e);a("9f54"),a("0cb0"),a("79f9"),a("1153");var r=a("fdec"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{color:"primary",app:"","clipped-right":"",dark:""}},[a("v-container",{staticClass:"d-flex justify-space-between",attrs:{fluid:""}},[a("v-app-bar-title",[t._v("Vue 2 showreel")]),a("nav",[a("v-btn",{staticClass:"mx-1",attrs:{to:"/",outlined:""}},[t._v("Home")]),a("v-btn",{staticClass:"mx-1",attrs:{to:"/about",outlined:""}},[t._v("About")])],1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{padless:"padless",app:"",color:"primary",dark:""}},[a("pre",[t._v("The foo now is: "+t._s(t.foo))])])],1)},o=[],s=a("c1d7"),i=a("aea4"),u=a("2bd4"),c=a("fe88"),l=a("cfde"),f=a("3b82"),p=a("b6da"),h=a("4f71");r["a"].use(h["a"]);var v=new h["a"].Store({}),b=function(t){Object(u["a"])(a,t);var e=Object(c["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.foo=0,t}return Object(i["a"])(a,[{key:"MUTATE_STATE",value:function(t){this.foo=t}},{key:"updateState",value:function(t){return t}}]),a}(p["d"]);Object(l["a"])([p["c"]],b.prototype,"MUTATE_STATE",null),Object(l["a"])([Object(p["a"])({commit:"MUTATE_STATE"})],b.prototype,"updateState",null),b=Object(l["a"])([Object(p["b"])({dynamic:!0,store:v,name:"foo"})],b);var m=Object(p["e"])(b),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v("please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},y=[],g=r["a"].extend({name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}}),j=g,_=a("39c8"),w=a("8945"),x=a.n(w),O=a("1262"),k=a("c70b"),C=a("37fa"),T=a("fb50"),A=Object(_["a"])(j,d,y,!1,null,null,null),V=A.exports;x()(A,{VCol:O["a"],VContainer:k["a"],VImg:C["a"],VRow:T["a"]});var E=function(t){Object(u["a"])(a,t);var e=Object(c["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"foo",get:function(){return m.foo}},{key:"updateFoo",value:function(t){m.updateState(t)}}]),a}(f["b"]);E=Object(l["a"])([Object(f["a"])({name:"App",components:{HelloWorld:V}})],E);var S=E,P=S,M=a("c050"),H=a("ce65"),L=a("b264"),q=a("9ce6"),F=a("afd5"),W=a("a32e"),$=Object(_["a"])(P,n,o,!1,null,null,null),B=$.exports;x()($,{VApp:M["a"],VAppBar:H["a"],VAppBarTitle:L["a"],VBtn:q["a"],VContainer:k["a"],VFooter:F["a"],VMain:W["a"]});a("ceed"),a("be12"),a("547f");var U=a("2eb4"),D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("This is a main page")])},I=[],J={},N=Object(_["a"])(J,D,I,!1,null,null,null),G=N.exports,Q=function(t,e){var a=e._c;return a("div",[a("h1",[e._v("Page not found")]),a("router-link",{attrs:{to:{name:"Home"}}},[e._v("Go home!")])],1)},R=[],z={},K=Object(_["a"])(z,Q,R,!0,null,null,null),X=K.exports;r["a"].use(U["a"]);var Y=[{path:"/",name:"Home",component:G},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"*",component:X}],Z=new U["a"]({mode:"history",base:"/vue-2-boilerplate/",routes:Y}),tt=Z,et=a("4f38");r["a"].use(et["a"]);var at=new et["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:tt,store:v,vuetify:at,render:function(t){return t(B)}}).$mount("#app")}});
//# sourceMappingURL=app.11e96947.js.map