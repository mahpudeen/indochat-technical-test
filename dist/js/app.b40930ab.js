(function(t){function a(a){for(var i,r,n=a[0],l=a[1],c=a[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(a);while(p.length)p.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],i=!0,n=1;n<e.length;n++){var l=e[n];0!==s[l]&&(i=!1)}i&&(o.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},o=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=a,n=n.slice();for(var c=0;c<n.length;c++)a(n[c]);var u=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHh Lpr lFf"}},[e("q-header",{staticClass:"header1"},[e("q-toolbar",[e("q-btn",{attrs:{round:""}},[e("q-avatar",{attrs:{size:"30px"}},[e("img",{attrs:{src:"/icons/phone.png"}})])],1),e("q-toolbar-title"),e("div",[e("q-btn",{attrs:{unelevated:"",rounded:"",color:"grey-4","text-color":"black","no-caps":"",label:"Home"}}),e("q-btn",{attrs:{flat:"",rounded:"",color:"black","no-caps":"",label:"Discover"}}),e("q-btn",{attrs:{flat:"",rounded:"",color:"black","no-caps":"",label:"Register"}}),e("q-btn",{attrs:{flat:"",round:"",color:"black",icon:"search"}})],1)],1)],1),e("q-page-container",[e("Home")],1)],1)},o=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("q-img",{staticStyle:{width:"108%"},attrs:{src:"/images/laptop.png"}},[e("div",{staticClass:"txtcenter",staticStyle:{background:"transparent",color:"#000000"}},[e("div",[e("span",{staticClass:"fs20m"},[e("b",[t._v("Booked Tool")]),t._v(" enables you to "),e("br"),t._v(" create Interactive Advertisement")])]),e("div",[e("q-btn",{staticStyle:{"margin-top":"10px"},attrs:{color:"primary","no-caps":"",label:"What is it?"}})],1)])])],1),e("div",{staticClass:"col"},[e("q-img",{attrs:{src:"/images/keyboard.png"}})],1)]),e("div",{staticClass:"row bggrey flex flex-center"},[e("div",{staticClass:"col-1"}),e("div",{staticClass:"col"},[e("span",{staticClass:"fs20m"},[t._v("Please login to start using "),e("br"),t._v(" "),e("b",[t._v("Booked Tool")])])]),e("div",{staticStyle:{width:"1%"}}),e("div",{staticClass:"col"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"Email"}})],1),e("div",{staticStyle:{width:"1%"}}),e("div",{staticClass:"col"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"Password",type:"password"}})],1),e("div",{staticStyle:{width:"1%"}}),e("div",{staticClass:"col"},[e("q-btn",{attrs:{color:"primary","no-caps":"",label:"Login"}})],1)]),e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),e("div",{staticClass:"col-8 ctr"},[e("div",{staticClass:"martop30"},[e("i",{staticClass:"fas fa-desktop fa-3x"})]),e("div",{staticClass:"martop10"},[e("span",{staticClass:"fs20"},[e("b",[t._v("DISCOVER")]),t._v(" "),e("br"),t._v(" BOOKED TOOL")])]),e("div",{staticClass:"martop10"},[e("q-img",{staticClass:"rounded-borders",staticStyle:{width:"501px"},attrs:{transition:t.trans,src:t.img,"spinner-color":"white"}})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"col"}),e("div",{staticClass:"col-8 left"},[e("q-tabs",{attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"discover1","no-caps":"",label:"Discover A"},on:{click:function(a){return t.changeTab(1)}}}),e("q-tab",{attrs:{name:"discover2","no-caps":"",label:"Discover B"},on:{click:function(a){return t.changeTab(2)}}}),e("q-tab",{attrs:{name:"discover3","no-caps":"",label:"Discover C"},on:{click:function(a){return t.changeTab(3)}}}),e("q-tab",{attrs:{name:"discover4","no-caps":"",label:"Discover D"},on:{click:function(a){return t.changeTab(4)}}})],1),e("q-separator"),e("q-tab-panels",{attrs:{animated:""},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab-panel",{staticClass:"q-pa-l",attrs:{name:"discover1"}},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ")]),e("q-tab-panel",{staticClass:"q-pa-l",attrs:{name:"discover2"}},[t._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? ")]),e("q-tab-panel",{staticClass:"q-pa-l",attrs:{name:"discover3"}},[t._v(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? ")]),e("q-tab-panel",{staticClass:"q-pa-l",attrs:{name:"discover4"}},[t._v(" At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat ")])],1)],1),e("div",{staticClass:"col"})])]),e("div",{staticClass:"col"})]),e("div",{staticClass:"row bggrey"},[e("div",{staticClass:"col"}),e("div",{staticClass:"col-8 ctr"},[e("i",{staticClass:"far fa-clipboard fa-3x"}),e("div",{staticClass:"martop10"},[e("span",{staticClass:"fs20"},[e("b",[t._v("Get in touch")]),t._v(" "),e("br"),t._v("Want to get in touch? We'd love to hear from you. Here's how you can reach us..")])]),e("div",{staticClass:"martop30"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"Search.."},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"search"}})]},proxy:!0}])})],1),e("div",{staticClass:"row martop30"},[e("div",{staticClass:"col left"},[e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.620967517708!2d106.82200961402762!3d-6.181458095524855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f42c022144c3%3A0xfe6941ee5d3ab9d8!2sWisma%20Antara%2C%20Jl.%20Medan%20Merdeka%20Sel.%20No.17%2C%20RT.11%2FRW.2%2C%20Gambir%2C%20Kecamatan%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010110!5e0!3m2!1sid!2sid!4v1606340835348!5m2!1sid!2sid",width:"100%",height:"420",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})]),e("div",{staticClass:"col left bgwhite"},[e("b",{staticClass:"fs20"},[t._v("Feedback")]),e("div",{staticClass:"row martop10"},[e("div",{staticClass:"col-5"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"First"}})],1),e("div",{staticStyle:{width:"2%"}}),e("div",{staticClass:"col"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"Last"}})],1)]),e("div",{staticClass:"martop10"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"Email"}})],1),e("div",{staticClass:"martop10"},[e("q-input",{attrs:{outlined:"","bg-color":"white",label:"Message",type:"textarea"}})],1),e("div",{staticClass:"martop10"},[e("q-btn",{attrs:{color:"primary","no-caps":"",label:"Send"}})],1)])])]),e("div",{staticClass:"col"})])])},n=[],l={name:"Homepage",data(){return{tab:"discover1",img:"/images/screen.png",trans:"rotate"}},methods:{changeTab(t){1==t?(this.img="/images/screen.png",this.trans="rotate"):2==t?(this.img="/images/screen2.jpg",this.trans="flip-up"):3==t?(this.img="/images/screen3.jpg",this.trans="scale"):4==t&&(this.img="/images/screen4.jpeg",this.trans="jump-down")}}},c=l,u=e("2877"),d=e("9989"),p=e("068f"),m=e("9c40"),b=e("27f9"),v=e("429b"),f=e("7460"),h=e("eb85"),g=e("adad"),q=e("823b"),y=e("0016"),C=e("93dc"),w=e.n(C),x=Object(u["a"])(c,r,n,!1,null,null,null),k=x.exports;w()(x,"components",{QPage:d["a"],QImg:p["a"],QBtn:m["a"],QInput:b["a"],QTabs:v["a"],QTab:f["a"],QSeparator:h["a"],QTabPanels:g["a"],QTabPanel:q["a"],QIcon:y["a"]});var _={name:"LayoutDefault",components:{Home:k},data(){return{}}},S=_,T=e("4d5a"),j=e("e359"),O=e("65c6"),Q=e("cb32"),P=e("6ac5"),D=e("09e3"),I=Object(u["a"])(S,s,o,!1,null,null,null),B=I.exports;w()(I,"components",{QLayout:T["a"],QHeader:j["a"],QToolbar:O["a"],QBtn:m["a"],QAvatar:Q["a"],QToolbarTitle:P["a"],QPageContainer:D["a"]});var E=e("8c4f");i["a"].use(E["a"]);const H=[{path:"/",name:"Home",component:k}],L=new E["a"]({mode:"history",base:"/",routes:H});var M=L,A=(e("c867"),e("e54f"),e("573e"),e("b05d"));i["a"].use(A["a"],{config:{},plugins:{}}),i["a"].config.productionTip=!1,new i["a"]({router:M,render:function(t){return t(B)}}).$mount("#app")},c867:function(t,a,e){}});
//# sourceMappingURL=app.b40930ab.js.map