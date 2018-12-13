webpackJsonp([1],{"83Nx":function(e,t,o){e.exports=o.p+"static/img/mongodb-logo-white.b74c8b1.png"},EfjP:function(e,t){},LicG:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("7+uW"),l={name:"App",methods:{logout:function(){i.default.http.delete("/sessions").then(function(e){window&&(window.location.href="/")}).catch(function(e){window&&(window.location.href="/")})}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-row",{staticClass:"header"},[t("el-col",{attrs:{span:4}},[t("img",{attrs:{src:o("83Nx"),height:"30px"}})]),this._v(" "),t("el-col",{attrs:{span:16}},[this._v(" ")]),this._v(" "),t("el-col",{attrs:{span:4}},[t("el-button",{staticStyle:{color:"white"},attrs:{type:"text"},on:{click:this.logout}},[this._v("Logout")])],1)],1),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var n=o("VU/8")(l,s,!1,function(e){o("Q2RP")},null,null).exports,a=o("/ocq"),r=o("mvHQ"),u=o.n(r),c={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"Login admin mongodb user",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[o("el-form",[o("el-form-item",{attrs:{label:"URL","label-width":e.formLabelWidth}},[o("el-input",{attrs:{placeholder:"MongoDB URL"},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"DB","label-width":e.formLabelWidth}},[o("el-input",{attrs:{placeholder:"DB Name"},model:{value:e.dbName,callback:function(t){e.dbName=t},expression:"dbName"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("Login")]),e._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:e.logout}},[e._v("Logout")])],1)],1)},staticRenderFns:[]},d=o("VU/8")({props:["visible"],data:function(){return{url:"",dbName:"",formLabelWidth:"100px",msg:"Welcome to Your Vue.js App"}},methods:{login:function(){this.$emit("login",{url:this.url,dbName:this.dbName})},logout:function(){this.$emit("logout")}}},c,!1,null,null,null).exports,h=o("jMcx"),f=o.n(h),p=this,b={props:["visible","user","db","roles"],data:function(){return{alive:0,aliveX:0,checkedRole:[],formLabelWidth:"100px"}},watch:{db:function(){p.aliveX=0,p.checkedRole=p.roles}},methods:{formatTooltip:function(e){return e<=10?(this.alive=6e4,"1 min"):e<=20?(this.alive=6e4,"10 mins"):e<=30?(this.alive=6e4,"30 mins"):e<=40?(this.alive=36e5,"1 hour"):e<=50?(this.alive=108e5,"3 hours"):e<=60?(this.alive=216e5,"6 hours"):e<=70?(this.alive=432e5,"12 hours"):e<=80?(this.alive=864e5,"1 days"):e<=90?(this.alive=2592e5,"3 days"):(this.alive=6048e5,"7 days")},ok:function(){var e=this;this.aliveX=0;var t={db:this.db,user:this.user,alive:this.alive,roles:f.a.map(this.checkedRole,function(t){return{role:t,db:e.db}})};this.$emit("ok",t)},cancel:function(){this.aliveX=0,this.$emit("cancel")}}},m={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-dialog",{attrs:{title:"Login admin mongodb user",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[o("el-form",[o("el-form-item",{attrs:{label:"Roles","label-width":e.formLabelWidth}},[o("el-checkbox-group",{model:{value:e.checkedRole,callback:function(t){e.checkedRole=t},expression:"checkedRole"}},e._l(["read","readWrite","backup","restore"],function(t){return o("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1)],1),e._v(" "),o("el-form-item",{attrs:{label:"Duration","label-width":e.formLabelWidth}},[o("el-slider",{attrs:{"format-tooltip":e.formatTooltip},model:{value:e.aliveX,callback:function(t){e.aliveX=t},expression:"aliveX"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.ok}},[e._v("OK")]),e._v(" "),o("el-button",{attrs:{type:"warning"},on:{click:e.cancel}},[e._v("Cancel")])],1)],1)},staticRenderFns:[]},v={name:"HelloWorld",data:function(){return{user:{user:"",db:"",roles:[]},users:[],dialogFormVisible:!1,dialogOpsVisible:!1}},created:function(){var e=this;i.default.http.get("/users").then(function(t){var o=t;o=f.a.map(o,function(e){return{user:e.user,db:e.db,roles:u()(e.roles)}}),e.users=o}).catch(function(t){401===t.code&&(e.dialogFormVisible=!0)})},methods:{handleOps:function(e){var t=JSON.parse(e.roles);t=f.a.filter(t,function(t){return t.db===e.db}),this.user={user:e.user,db:e.db,roles:f.a.pluck(t,"role")},this.dialogOpsVisible=!0},login:function(e){var t=this;this.dialogFormVisible=!1,i.default.http.post("/sessions",e).then(function(e){i.default.http.get("/users").then(function(e){var o=e;o=f.a.map(o,function(e){return{user:e.user,db:e.db,roles:u()(e.roles)}}),t.users=o}).catch(function(e){401===e.code&&(t.dialogFormVisible=!0)})}).catch(function(e){})},updateRole:function(e){var t=this;this.dialogOpsVisible=!1;var o=e.user,l=e.db;delete e.user,delete e.db,i.default.http.put("/dbs/"+l+"/users/"+o,e).then(function(e){t.$message({message:"SUCCESS!",type:"success"})}).catch(function(e){t.$message({message:""+e.message,type:"warning"})})},cancelRole:function(){this.dialogOpsVisible=!1},logout:function(){this.dialogFormVisible=!1}},components:{Login:d,ViewOps:o("VU/8")(b,m,!1,null,null,null).exports}},g={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("login",{attrs:{visible:e.dialogFormVisible},on:{login:e.login,logout:e.logout}}),e._v(" "),o("view-ops",{attrs:{user:e.user.user,db:e.user.db,roles:e.user.roles,visible:e.dialogOpsVisible},on:{ok:e.updateRole,cancel:e.cancelRole}}),e._v(" "),o("el-main",[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,border:""}},[o("el-table-column",{attrs:{fixed:"",prop:"db",label:"DB",width:"150"}}),e._v(" "),o("el-table-column",{attrs:{prop:"user",label:"User",width:"120"}}),e._v(" "),o("el-table-column",{attrs:{prop:"roles",label:"Roles"}}),e._v(" "),o("el-table-column",{attrs:{fixed:"right",label:"option",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){e.handleOps(t.row)}}},[e._v("View")])]}}])})],1)],1),e._v(" "),o("el-footer")],1)},staticRenderFns:[]};var w=o("VU/8")(v,g,!1,function(e){o("EfjP")},"data-v-13d06e7d",null).exports;i.default.use(a.a);var _=new a.a({routes:[{path:"/",name:"HelloWorld",component:w}]}),k=o("DVuL"),x=o.n(k),V=o("//Fk"),R=o.n(V),y=o("aozt"),L=o.n(y).a.create();function N(e){N.installed||(e.http=L)}L.interceptors.request.use(function(e){return e}),L.interceptors.response.use(function(e){return e.data},function(e){return R.a.reject({code:e.response.status,message:e.message})}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(N);var F=N;o("LicG");i.default.use(x.a),i.default.use(F),i.default.config.productionTip=!1,new i.default({el:"#app",router:_,components:{App:n},template:"<App/>"})},Q2RP:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.8712c47171ec239ce512.js.map