(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-addressbook-level-address-book"],{"1d9e":function(t,e,s){"use strict";var i;s.d(e,"b",(function(){return a})),s.d(e,"c",(function(){return r})),s.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("v-uni-view",{staticClass:"cu-bar fixed",class:[t.NavBarColor],style:t.style},[s("v-uni-view",{staticClass:"cuIcon-back margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.backRoute()}}},[s("v-uni-text",{staticClass:"margin-left-sm"},[t._v("返回")])],1),s("v-uni-view",{staticClass:"content",style:[{top:t.StatusBar+"px"}]},[t._v("通讯录")])],1),s("v-uni-view",{staticClass:"bg-gray text-gray padding",style:[{marginTop:t.CustomBar+"px"}]},[t._v(t._s(t.levelTitle))]),s("v-uni-view",{staticClass:"cu-list menu sm-border"},[t._l(t.comList,(function(e,i){return s("v-uni-view",{key:e.key,staticClass:"cu-item",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goMember(e)}}},[s("v-uni-image",{staticClass:"line2-icon",attrs:{src:"/static/folder.png"}}),s("v-uni-view",{staticClass:"content margin-left-sm"},[s("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.title))])],1)],1)})),t._l(t.childrenUserList,(function(e,i){return s("v-uni-view",{key:i,staticClass:"cu-item",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.goMemberInfo(e)}}},[s("v-uni-view",{staticClass:"cu-avatar round lx",style:[{backgroundImage:"url("+e.avatar+")"}]}),s("v-uni-view",{staticClass:"content margin-left-sm"},[s("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.realname))])],1)],1)}))],2)],1)},r=[]},"2f47":function(t,e,s){"use strict";s.r(e);var i=s("c50a"),a=s.n(i);for(var r in i)"default"!==r&&function(t){s.d(e,t,(function(){return i[t]}))}(r);e["default"]=a.a},"823b":function(t,e,s){var i=s("24fb");e=i(!1),e.push([t.i,".line2-icon[data-v-449d351b]{width:25px;height:20px}",""]),t.exports=e},9303:function(t,e,s){"use strict";var i=s("ec57"),a=s.n(i);a.a},bfe8:function(t,e,s){"use strict";s.r(e);var i=s("1d9e"),a=s("2f47");for(var r in a)"default"!==r&&function(t){s.d(e,t,(function(){return a[t]}))}(r);s("9303");var n,l=s("f0c5"),o=Object(l["a"])(a["default"],i["b"],i["c"],!1,null,"449d351b",null,!1,i["a"],n);e["default"]=o.exports},c50a:function(t,e,s){"use strict";var i=s("4ea4");s("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(s("5530")),r=i(s("b85c")),n=s("0dbe"),l={name:"level-address-book",data:function(){return{CustomBar:this.CustomBar,StatusBar:this.StatusBar,NavBarColor:this.NavBarColor,value:"",derpartment:"通讯录",comList:[],childrenUserList:[],metaList:[],depart2Url:"/sys/sysDepart/queryTreeList",queryTreeByKeyWord:"/sys/sysDepart/queryTreeByKeyWord",queryUserByDid:"/sys/user/appQueryByDepartId",level:0,titleArray:[],parentId:""}},computed:{levelTitle:function(){return this.titleArray&&this.titleArray.length>0?this.titleArray.join(" > "):(console.log("this.titleArray",this.titleArray),"企业通讯录")},style:function(){var t=this.StatusBar,e=this.CustomBar,s="height:".concat(e,"px;padding-top:").concat(t,"px;");return s}},onLoad:function(){console.log("this.CustomBar",this.CustomBar),this.loadList()},methods:{backRoute:function(){console.log("this.level",this.level),console.log("this.parentId",this.parentId),0==this.level?this.$Router.replaceAll({name:"index"}):(this.getCyclePnode(this.metaList,""),this.titleArray.pop(),this.level--)},onRefresh:function(){this.comList=[],this.childrenUserList=[],this.titleArray=[],this.loadList()},loadList:function(){var t=this;if(console.log("loadList==>$Route",this.$Route),this.$Route.query.level){var e=this.$Route.query;return this.level=e.level,this.comList=e.comList,this.metaList=e.metaList,this.childrenUserList=e.childrenUserList,this.derpartment=e.derpartment,this.parentId=e.parentId,void(this.titleArray=e.titleArray)}this.$http.get(this.queryTreeByKeyWord).then((function(e){if(console.log("部门通讯树：：",e),e.data.success&&(console.log("部门：：",e.data.result.departList),e.data.result.departList&&e.data.result.departList.length>0)){var s,i=(0,r.default)(e.data.result.departList);try{for(i.s();!(s=i.n()).done;){var a=s.value;console.log("item::",a),t.comList.push(a),t.metaList.push(a)}}catch(n){i.e(n)}finally{i.f()}t.derpartment=t.comList[0].title}})).catch((function(t){console.log("queryTreeByKeyWord 请求错误",t)}))},getUser:function(t,e){var s=this;this.$http.get(this.queryUserByDid,{params:{departId:t}}).then((function(t){s.childrenUserList=t.data.result;var i,a=(0,r.default)(s.childrenUserList);try{for(a.s();!(i=a.n()).done;){var n=i.value;n.departName=e,s.avatarHandler(n)}}catch(l){a.e(l)}finally{a.f()}}))},avatarHandler:function(t){var e=t.avatar;if(e){var s=(0,n.getFileAccessHttpUrl)(e);t.avatar=s}else"2"==t.sex?t.avatar="https://static.jeecg.com/upload/test/avatar_girl_1595818025488.png":t.avatar="https://static.jeecg.com/upload/test/avatar_boy_1595818012577.png"},goMember:function(t){var e=(0,a.default)({},t);if(e.children&&e.children.length>0){this.level++,this.comList=[],this.childrenUserList=[];var s,i=(0,r.default)(e.children);try{for(i.s();!(s=i.n()).done;){var n=s.value;this.comList.push(n)}}catch(l){i.e(l)}finally{i.f()}this.getUser(e.id,e.title),this.titleArray.push(e.title),this.parentId=e.id,this.derpartment=e.title}else console.log("params==>toMember",e),e.level=this.level,e.comList=this.comList,e.metaList=this.metaList,e.childrenUserList=this.childrenUserList,e.derpartment=this.derpartment,e.parentId=this.parentId,e.titleArray=this.titleArray,this.$Router.push({name:"member",params:e})},getCyclePnode:function(t,e){var s,i=(0,r.default)(t);try{for(i.s();!(s=i.n()).done;){var a=s.value;if(a.id==this.parentId){this.comList=t,this.childrenUserList=[],this.derpartment=this.comList[0].title,this.parentId=e,this.getUser(this.parentId,a.title);break}a.children&&a.children.length>0&&this.getCyclePnode(a.children,a.id)}}catch(n){i.e(n)}finally{i.f()}},goMemberInfo:function(t){console.log("item",t);var e=(0,a.default)({},t);console.log("parmas",e),e.page="levelAddressBook",this.$Router.push({name:"addressDetail",params:e})}}};e.default=l},ec57:function(t,e,s){var i=s("823b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=s("4f06").default;a("0724f2fd",i,!0,{sourceMap:!1,shadowMode:!1})}}]);