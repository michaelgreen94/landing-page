(function(t){function a(a){for(var s,r,o=a[0],l=a[1],c=a[2],u=0,p=[];u<o.length;u++)r=o[u],n[r]&&p.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},i=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/landing-page/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("c21b"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("097d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},i=[],r=(e("034f"),e("2877")),o={},l=Object(r["a"])(o,n,i,!1,null,null,null);l.options.__file="App.vue";var c=l.exports,d=e("8c4f"),u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[t._m(0),e("div",{attrs:{id:"top"}}),t._m(1),t._m(2),t._m(3),e("Projects"),e("div",{attrs:{id:"contact"}},[t._m(4),e("div",{staticClass:"contact-body"},[e("div",{staticClass:"contact-me"},[e("form",{staticClass:"contact-form",attrs:{method:"POST",action:t.formSpreeTarget}},[e("input",{attrs:{type:"text",placeholder:"NAME",name:"name"}}),e("input",{attrs:{type:"text",placeholder:"YOUR EMAIL",name:"_replyto"}}),e("input",{attrs:{type:"text",placeholder:"SUBJECT",name:"subject",required:""}}),e("textarea",{attrs:{type:"text",placeholder:"CONTENT",name:"content",required:""}}),e("button",{staticClass:"form-button",attrs:{type:"submit"}},[t._v("SEND")])])])]),t._m(5),t._m(6)])],1)},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("nav",{staticClass:"navbar navbar-fixed-top navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand nav-link",attrs:{"data-scroll":"#top"}},[t._v("Michael Green")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-scroll":"#skills"}},[t._v("Skills")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-scroll":"#about"}},[t._v("About")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-scroll":"#projects"}},[t._v("Projects")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-scroll":"#contact"}},[t._v("Contact")])]),e("li",{staticClass:"nav-item dropdown"},[e("a",{staticClass:"nav-link dropdown-toggle",attrs:{"data-scroll":"#app",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n              Professional\n            ")]),e("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"https://github.com/michaelgreen94",target:"_blank"}},[e("i",{staticClass:"fab fa-github"}),t._v("\n                Github")]),e("a",{staticClass:"dropdown-item",attrs:{href:"https://www.linkedin.com/in/michael-green-756841b9/",target:"_blank"}},[e("i",{staticClass:"fab fa-linkedin"}),t._v(" LinkedIn")]),e("div",{staticClass:"dropdown-divider"}),e("a",{staticClass:"dropdown-item",attrs:{href:"https://docs.google.com/document/d/1JFKnWHeaH96eqi0OkCwS_i0KjpMfLubLJ6NmRUUMNus/edit",target:"_blank"}},[e("i",{staticClass:"fas fa-file"}),t._v(" Resume")])])])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"inspirational"},[e("div",{staticClass:"ins-content"},[e("p",[t._v("I'm Michael Green, a"),e("br"),e("strong",{staticClass:"special-text"},[t._v("Full Stack Developer")]),e("br"),t._v("I builds things on the\n        Internet")])]),e("div",{staticClass:"ska"},[e("div",{staticClass:"skillsbelow"},[e("p",[t._v("C:\\ npm i Skills")])]),e("div",{staticClass:"arrow bounce"},[e("a",{staticClass:"nav-link",attrs:{"data-scroll":"#skills"}},[e("i",{staticClass:"fa fa-angle-down fa-1x",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"skills"}},[e("div",{staticClass:"skills-header"},[e("div",{staticClass:"skillsbox"},[e("p",[t._v("SKILLS")])])]),e("div",{staticClass:"skill-icons"},[e("i",{staticClass:"devicon-html5-plain"}),e("i",{staticClass:"devicon-vuejs-plain"}),e("i",{staticClass:"devicon-nodejs-plain"}),e("i",{staticClass:"devicon-css3-plain"}),e("i",{staticClass:"devicon-javascript-plain"}),e("i",{staticClass:"devicon-csharp-line"}),e("i",{staticClass:"devicon-mysql-plain"}),e("i",{staticClass:"devicon-mongodb-plain"}),e("i",{staticClass:"devicon-dot-net-plain-wordmark"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"about"}},[s("div",{staticClass:"about-header"},[s("div",{staticClass:"aboutbox"},[s("p",[t._v("ABOUT")])])]),s("div",{staticClass:"about-body"},[s("div",{staticClass:"img-holder"},[s("img",{staticClass:"bio-img",attrs:{src:e("cf05"),alt:""}})]),s("div",{staticClass:"bio"},[s("div",{staticClass:"biotext"},[s("p",[t._v("\n            I'm a Software Developer with over 500 hours of front and back-end development from Boise Codeworks\n            immersed bootcamp.\n            I have A knack for problem solving, and the ability to think outside of the box. "),s("br"),s("br"),t._v(" My passion for\n            technology led to a career in software development after years of customer service and construction\n            experience.\n            I'm a highly motivated developer with strong front & back-end development skills.\n          ")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-header"},[e("div",{staticClass:"aboutbox"},[e("p",[t._v("CONTACT")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"backtotop"},[e("a",{staticClass:"nav-link btop",attrs:{"data-scroll":"#top"}},[e("i",{staticClass:"fas fa-angle-double-up"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-footer"},[e("p",[t._v("© 2018 Michael L. Green")])])}],v=(e("ac6a"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"projects"}},[t._m(0),e("div",{staticClass:"carousel"},[e("v-carousel",{attrs:{"hide-delimiters":"",interval:"60000",light:""}},t._l(t.items,function(t,a){return e("v-carousel-item",{key:a,attrs:{src:t.src}})}))],1)])}),f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"projectsheader"},[e("div",{staticClass:"projectbox"},[e("p",[t._v("PROJECTS")])])])}],b={name:"Projects",data:function(){return{items:[{src:"../assets/bullutinfullscreen.PNG"},{src:"../assets/battle-cards.PNG"},{src:"../assets/usingmusic.PNG"},{src:"../assets/kanban.PNG"}]}}},m=b,h=(e("f6ca"),Object(r["a"])(m,v,f,!1,null,null,null));h.options.__file="Projects.vue";var C=h.exports,_={name:"home",data:function(){return{formSpreeTarget:"https://formspree.io/michael.green94@hotmail.com"}},components:{Projects:C},methods:{},mounted:function(){document.querySelectorAll(".nav-link").forEach(function(t){t.addEventListener("click",function(){return document.querySelector(t.getAttribute("data-scroll")).scrollIntoView({behavior:"smooth"})})}),$(window).scroll(function(){$(".arrow").css("opacity",1-$(window).scrollTop()/250)}),$(window).ready(function(){0==$(window).scrollTop()&&$(".backtotop").css("display","none")}),$(window).scroll(function(){$(".btop").css("opacity",0+$(window).scrollTop()/250),$(".backtotop").css("display","block")})}},g=_,w=(e("b495"),Object(r["a"])(g,u,p,!1,null,"af50823c",null));w.options.__file="Home.vue";var k=w.exports;s["default"].use(d["a"]);var y=new d["a"]({routes:[{path:"/",name:"home",component:k}]}),x=e("2f62");s["default"].use(x["a"]);var j=new x["a"].Store({state:{},mutations:{},actions:{}}),S=e("ce5b"),E=e.n(S);e("bf40");s["default"].use(E.a),s["default"].config.productionTip=!1,new s["default"]({router:y,store:j,render:function(t){return t(c)}}).$mount("#app")},b495:function(t,a,e){"use strict";var s=e("c838"),n=e.n(s);n.a},b9f2:function(t,a,e){},c21b:function(t,a,e){},c838:function(t,a,e){},cf05:function(t,a,e){t.exports=e.p+"img/logo.82b9c7a5.png"},f6ca:function(t,a,e){"use strict";var s=e("b9f2"),n=e.n(s);n.a}});
//# sourceMappingURL=app.5738f1ec.js.map