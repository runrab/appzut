(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"08e7":function(t,n,s){"use strict";var a=s("4ea4");s("d3b7"),s("4d63"),s("ac1f"),s("25f0"),s("5319"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(s("5530")),e=(s("8053"),s("26cb")),o=(a(s("470b")),{data:function(){return{shape:"",loading:!1,userName:"demo",password:"123456",phoneNo:"",smsCode:"",showPassword:!1,loginWay:1,smsCountDown:0,smsCountInterval:null,toggleDelay:!1,version:"",thirdType:"",thirdLoginInfo:"",thirdLoginState:!1,bindingPhoneModal:!1,thirdUserUuid:"",url:{bindingThirdPhone:"/sys/thirdLogin/bindingThirdPhone"}}},onLoad:function(){},computed:{isSendSMSEnable:function(){return this.smsCountDown<=0&&this.phoneNo.length>4},getSendBtnText:function(){return this.smsCountDown>0?this.smsCountDown+"秒后发送":"发送验证码"},canSMSLogin:function(){return this.userName.length>4&&this.smsCode.length>4},canPwdLogin:function(){return this.userName.length>4&&this.password.length>4}},methods:(0,i.default)((0,i.default)({},(0,e.mapActions)(["mLogin","PhoneLogin","ThirdLogin"])),{},{onLogin:function(){var t=this;if(this.userName&&0!=this.userName.length)if(this.password&&0!=this.password.length){var n={username:this.userName,password:this.password};this.loading=!0,this.mLogin(n).then((function(n){t.loading=!1,console.log(n.data.success),console.log("区分教师: "+n.data.result.userInfo.identity),console.log("可见性: "+n.data.result.userInfo.visible),n.data.success?(t.$tip.success("登录成功!"),t.$Router.replaceAll({name:"index"})):t.$tip.alert(n.data.message)})).catch((function(n){var s=n.data.message||"请求出现错误，请稍后再试";t.loading=!1,t.$tip.alert(s)})).finally((function(){t.loading=!1}))}else this.$tip.toast("请填写密码");else this.$tip.toast("请填写用户名")},saveClientId:function(){var t=this,n=plus.push.getClientInfo(),s=n.clientid;this.$http.get("/sys/user/saveClientId",{params:{clientId:s}}).then((function(n){console.log("res::saveClientId>",n),t.$tip.success("登录成功!"),t.$Router.replaceAll({name:"index"})}))},changePassword:function(){this.showPassword=!this.showPassword},onSMSSend:function(){var t=this,n={};n.mobile=this.phoneNo,n.smsmode="0";var s=new RegExp(/^[1]([3-9])[0-9]{9}$/);return n.mobile&&0!=n.mobile.length?s.test(n.mobile)?void this.$http.post("/sys/sms",n).then((function(n){n.data.success?(t.smsCountDown=60,t.startSMSTimer()):(t.smsCountDown=0,t.$tip.toast(n.data.message))})):(this.$tip.toast("请输入正确的手机号"),!1):(this.$tip.toast("请输入手机号"),!1)},startSMSTimer:function(){var t=this;this.smsCountInterval=setInterval((function(){t.smsCountDown--,t.smsCountDown<=0&&clearInterval(t.smsCountInterval)}),1e3)},onSMSLogin:function(){var t=this,n=new RegExp(/^[1]([3-9])[0-9]{9}$/);if(this.phoneNo&&0!=this.phoneNo.length){if(!n.test(this.phoneNo))return this.$tip.toast("请输入正确的手机号"),!1;if(this.smsCode&&0!=this.smsCode.length){var s={mobile:this.phoneNo,captcha:this.smsCode};this.PhoneLogin(s).then((function(n){console.log("res====》",n),n.data.success?(t.$tip.success("登录成功!"),t.$Router.replaceAll({name:"index"})):t.$tip.error(n.data.message)})).catch((function(n){var s=((n.response||{}).data||{}).message||n.data.message||"请求出现错误，请稍后再试";t.$tip.error(s)}))}else this.$tip.toast("请填短信验证码")}else this.$tip.toast("请填写手机号")},loginSuccess:function(){this.$Router.replace({name:"index"})},requestFailed:function(t){this.$message.warning("登录失败")}}),beforeDestroy:function(){this.smsCountInterval&&clearInterval(this.smsCountInterval)}});n.default=o},"2f8b":function(t,n,s){"use strict";s.r(n);var a=s("08e7"),i=s.n(a);for(var e in a)"default"!==e&&function(t){s.d(n,t,(function(){return a[t]}))}(e);n["default"]=i.a},"48ed":function(t,n,s){"use strict";var a=s("cec9"),i=s.n(a);i.a},"572c":function(t,n,s){"use strict";s.r(n);var a=s("7e11"),i=s("2f8b");for(var e in i)"default"!==e&&function(t){s.d(n,t,(function(){return i[t]}))}(e);s("48ed");var o,r=s("f0c5"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"49ba292b",null,!1,a["a"],o);n["default"]=l.exports},"7e11":function(t,n,s){"use strict";var a;s.d(n,"b",(function(){return i})),s.d(n,"c",(function(){return e})),s.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("v-uni-view",{staticClass:"zai-box"},[s("v-uni-scroll-view",{staticClass:"page",attrs:{"scroll-y":!0}},[s("v-uni-view",{staticClass:"text-center",style:[{animation:"show 0.4s 1"}]},[s("v-uni-image",{staticClass:"zai-logo ",attrs:{src:"https://cdn.jsdelivr.net/gh/runrab/oss@main/app/static/lab/favicon.ico",mode:"aspectFit"}}),s("v-uni-view",{staticClass:"zai-title text-shadow "},[t._v("高校毕业生信息去向跟踪系统")])],1),s("v-uni-view",{staticClass:"box padding-lr-xl login-paddingtop",style:[{animation:"show 0.6s 1"}]},[1==t.loginWay?[s("v-uni-view",{staticClass:"cu-form-group margin-top  shadow-warp",class:["round"==t.shape?"round":""]},[s("v-uni-view",{staticClass:"title"},[s("v-uni-text",{staticClass:"cuIcon-people margin-right-xs"}),t._v("账号:")],1),s("v-uni-input",{attrs:{placeholder:"请输入账号",name:"input"},model:{value:t.userName,callback:function(n){t.userName=n},expression:"userName"}})],1),s("v-uni-view",{staticClass:"cu-form-group margin-top shadow-warp",class:["round"==t.shape?"round":""]},[s("v-uni-view",{staticClass:"title"},[s("v-uni-text",{staticClass:"cuIcon-lock margin-right-xs"}),t._v("密码:")],1),s("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码",password:!t.showPassword},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}}),s("v-uni-view",{staticClass:"action text-lg"},[s("v-uni-text",{class:[t.showPassword?"cuIcon-attention":"cuIcon-attentionforbid"],on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.changePassword.apply(void 0,arguments)}}})],1)],1),s("v-uni-view",{staticClass:"padding text-center margin-top"},[s("v-uni-button",{staticClass:"cu-btn bg-blue lg margin-right shadow",class:["round"==t.shape?"round":""],attrs:{loading:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onLogin.apply(void 0,arguments)}}},[s("v-uni-text",{attrs:{space:"emsp"}},[t._v(t._s(t.loading?"登录中...":" 登录 "))])],1),s("v-uni-button",{staticClass:"cu-btn line-blue lg margin-left shadow",class:["round"==t.shape?"round":""],attrs:{loading:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.loginWay=3-t.loginWay}}},[t._v("短信登录")])],1)]:[s("v-uni-view",{staticClass:"cu-form-group margin-top  shadow-warp",class:["round"==t.shape?"round":""]},[s("v-uni-view",{staticClass:"title"},[s("v-uni-text",{staticClass:"cuIcon-mobile margin-right-xs"}),t._v("手机号:")],1),s("v-uni-input",{attrs:{placeholder:"请输入手机号",type:"number",maxlength:"11"},model:{value:t.phoneNo,callback:function(n){t.phoneNo=n},expression:"phoneNo"}})],1),s("v-uni-view",{staticClass:"cu-form-group margin-top shadow-warp",class:["round"==t.shape?"round":""]},[s("v-uni-view",{staticClass:"title"},[s("v-uni-text",{staticClass:"cuIcon-lock margin-right-xs"}),t._v("验证码:")],1),s("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入验证码"},model:{value:t.smsCode,callback:function(n){t.smsCode=n},expression:"smsCode"}}),s("v-uni-view",{staticClass:"action"},[s("v-uni-button",{staticClass:"cu-btn line-blue sm",attrs:{disabled:!t.isSendSMSEnable},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSMSSend.apply(void 0,arguments)}}},[t._v(t._s(t.getSendBtnText))])],1)],1),s("v-uni-view",{staticClass:"padding text-center margin-top"},[s("v-uni-button",{staticClass:"cu-btn bg-blue lg margin-right shadow",class:["round"==t.shape?"round":""],attrs:{loading:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.onSMSLogin.apply(void 0,arguments)}}},[s("v-uni-text",{attrs:{space:"emsp"}},[t._v(t._s(t.loading?"登录中...":" 登录 "))])],1),s("v-uni-button",{staticClass:"cu-btn line-blue lg margin-left shadow",class:["round"==t.shape?"round":""],attrs:{loading:t.loading},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.loginWay=1}}},[t._v("账户登录")])],1)]],2)],1),t.loading?s("v-uni-view",{staticClass:"cu-load load-modal"},[s("v-uni-image",{staticClass:"round",attrs:{src:"https://img.runrab.com/i/2022/03/20/6236e926318ab.png",mode:"aspectFit"}}),s("v-uni-view",{staticClass:"gray-text"},[t._v("登录中...")])],1):t._e()],1)},e=[]},b8b7:function(t,n,s){var a=s("24fb");n=a(!1),n.push([t.i,".login-paddingtop[data-v-49ba292b]{padding-top:%?100?%}.zai-box[data-v-49ba292b]{padding:0 %?20?%;padding-top:%?100?%;position:relative}.zai-logo[data-v-49ba292b]{width:%?200?%;height:150px}.zai-title[data-v-49ba292b]{font-size:%?58?%;color:#000;text-align:center}.input-placeholder[data-v-49ba292b], .zai-input[data-v-49ba292b]{color:#94afce}.zai-label[data-v-49ba292b]{padding:%?60?% 0;text-align:center;font-size:%?30?%;color:#a7b6d0}.zai-btn[data-v-49ba292b]{background:#ff65a3;color:#fff;border:0;border-radius:%?100?%;font-size:%?36?%}.zai-btn[data-v-49ba292b]:after{border:0}\n\n/*按钮点击效果*/.zai-btn.button-hover[data-v-49ba292b]{-webkit-transform:translate(%?1?%,%?1?%);transform:translate(%?1?%,%?1?%)}",""]),t.exports=n},cec9:function(t,n,s){var a=s("b8b7");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("4d33acfa",a,!0,{sourceMap:!1,shadowMode:!1})}}]);