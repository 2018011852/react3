(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{170:function(e,t,n){var a={"./1.jpg":171,"./2.jpg":172,"./3.jpg":173,"./4.jpg":174,"./5.jpg":175,"./detail1.jpg":68,"./detail2.jpg":69};function c(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}c.keys=function(){return Object.keys(a)},c.resolve=o,e.exports=c,c.id=170},171:function(e,t,n){e.exports=n.p+"static/media/1.11e5ba8a.jpg"},172:function(e,t,n){e.exports=n.p+"static/media/2.6a0b0a0a.jpg"},173:function(e,t,n){e.exports=n.p+"static/media/3.92edc9fc.jpg"},174:function(e,t,n){e.exports=n.p+"static/media/4.35eb894e.jpg"},175:function(e,t,n){e.exports=n.p+"static/media/5.6608fe94.jpg"},179:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(9),l=n.n(o),r=n(29),i=n(11),s=n(10),m=n(21),u=n(22),p=n(24),d=n(23),h=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(s.b,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u8981\u641c\u7d22\u7684\u5185\u5bb9",onFocus:function(){window.location.href="/home/search"}}),c.a.createElement(s.d,null))}}]),n}(a.Component),f=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={data:["1","2","3","4","5"],imgHeight:176},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1","2","3","4","5"]})}),100)}},{key:"render",value:function(){var e=this;return c.a.createElement(s.e,null,c.a.createElement(s.a,{autoplay:!0,infinite:!0},this.state.data.map((function(t){return c.a.createElement("a",{key:t,style:{display:"inline-block",width:"100%",height:e.state.imgHeight}},c.a.createElement("img",{src:n(170)("./".concat(t,".jpg")),alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))))}}]),a}(a.Component),E=function(){return c.a.createElement(a.Fragment,null,c.a.createElement(r.b,{style:{width:"43%",marginLeft:"15px",float:"left"},to:"/home/detail"},c.a.createElement("img",{style:{width:"100%"},src:n(68)}),c.a.createElement(a.Fragment,null,"  ",c.a.createElement("div",{style:{marginBottom:"10px",marginLeft:"3px",height:"70px",color:"#333"}},"\u8d85\u503c\u97e9\u7248\u6b27\u7248\u7cbe\u7f8e\u8377\u53f6\u8fb9\u5d4c\u857e\u4e1d\u82b1\u8fb9\u9ad8\u652f\u8d21\u7f0e\u7eaf\u68c9\u5355\u4ef6\u5e8a\u88d9\u5e8a\u5355\u5e8a\u7f69"),c.a.createElement("span",{style:{color:"#ff5500",marginLeft:"5px",height:"30px"}},"\uffe5 49"),c.a.createElement("span",{style:{color:"#999",marginLeft:"10px"}},"227\u4eba\u5df2\u8d2d\u4e70"))),c.a.createElement(r.b,{style:{width:"43%",marginRight:"15px",float:"right"},to:"/home/detail2"},c.a.createElement("img",{style:{width:"100%"},src:n(69)}),c.a.createElement(a.Fragment,null,"  ",c.a.createElement("div",{style:{marginBottom:"10px",marginLeft:"3px",height:"70px",color:"#333"}},"\u4ebf\u5609\u5317\u6b27\u9910\u5177\u5957\u88c5\u521b\u610f\u5355\u4e2a\u9762\u7897\u5bb6\u7528\u9676\u74f7\u65e5\u5f0f\u60c5\u4fa3\u5e73\u5e95\u996d\u7897\u9ea6\u7247\u7897"),c.a.createElement("span",{style:{color:"#ff5500",marginLeft:"5px",height:"30px"}},"\uffe519.9"),c.a.createElement("span",{style:{color:"#999",marginLeft:"10px"}},"52\u4eba\u5df2\u8d2d\u4e70"))))},g=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return console.log(t),t.split("/").length>2?null:c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(s.c,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(s.c.Item,{title:"\u9996\u9875",key:"home",icon:c.a.createElement("i",{className:"iconfont icon-shouye"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shouye1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-gouwuche"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-gouwuche1"}),title:"\u8d2d\u7269\u8f66",key:"cart",selected:"/cart"===t,onPress:function(){e.props.history.push("/cart")},"data-seed":"logId1"}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-dingdan"}),selectedIcon:c.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),title:"\u8ba2\u5355\u5217\u8868",key:"Friend",selected:"greenTab"===this.state.selectedTab,onPress:function(){}}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-wode"}),selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},title:"\u6211\u7684\u6dd8\u5b9d",key:"my",selected:"yellowTab"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"yellowTab"})}})))}}]),n}(c.a.Component),b=Object(i.f)(g),y=function(e){return c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement(f,null),c.a.createElement(s.d,null),c.a.createElement(E,null),c.a.createElement(s.d,null),c.a.createElement(E,null),c.a.createElement(s.d,null),c.a.createElement(E,null),c.a.createElement(s.d,null),c.a.createElement(E,null),c.a.createElement(s.d,null),c.a.createElement(E,null),c.a.createElement(s.d,null),c.a.createElement(b,null))},v=function(e){return c.a.createElement("div",null,"\u8d2d\u7269\u8f66",c.a.createElement(b,null))},j=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={selectedTab:"blueTab"},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.location.pathname;return c.a.createElement("div",{style:{position:"fixed",width:"100%",bottom:0}},c.a.createElement(s.c,{unselectedTintColor:"#949494",tintColor:"red",barTintColor:"white"},c.a.createElement(s.c.Item,{title:"\u5e97\u94fa",key:"dianpu",icon:c.a.createElement("i",{className:"iconfont icon-dianpu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-dianpu1"}),selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId"}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-kefu"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-kefu1"}),title:"\u5ba2\u670d",key:"kefu",selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId1"}),c.a.createElement(s.c.Item,{icon:c.a.createElement("i",{className:"iconfont icon-shoucang"}),selectedIcon:c.a.createElement("i",{className:"iconfont icon-shoucang1"}),title:"\u6536\u85cf",key:"shoucang",selected:"/"===t,onPress:function(){e.props.history.push("/")},"data-seed":"logId1"}),c.a.createElement(s.c,{title:"\u52a0\u5165\u8d2d\u7269\u8f66"}),c.a.createElement(s.c.Item,{title:"\u7acb\u5373\u8d2d\u4e70"})))}}]),n}(c.a.Component),w=Object(i.f)(j),x=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:n(68),style:{width:"100%",position:"absolute"}}),c.a.createElement("button",{onClick:function(){window.location.href="/"},style:{width:"30px",height:"30px",background:"rgba(0, 0, 0, 0.4)",color:"#fff",fontSize:"20px",borderRadius:"100%",position:"relative",margin:"15px"}},c.a.createElement("span",null,"<")),c.a.createElement(w,null))},k=function(){return c.a.createElement("div",null,c.a.createElement("img",{src:n(69),style:{width:"100%",position:"absolute"}}),c.a.createElement("button",{onClick:function(){window.location.href="/"},style:{width:"30px",height:"30px",background:"rgba(0, 0, 0, 0.4)",color:"#fff",fontSize:"20px",borderRadius:"100%",position:"relative",margin:"15px"}},c.a.createElement("span",null,"<")),c.a.createElement(w,null))},I=function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).back=function(){window.location.href="/"},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.autoFocusInst.focus()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(s.b,{placeholder:"\u8bf7\u8f93\u5165\u4f60\u8981\u641c\u7d22\u7684\u5185\u5bb9",ref:function(t){return e.autoFocusInst=t},onCancel:this.back}),c.a.createElement(s.d,null))}}]),n}(a.Component),O=function(){return c.a.createElement(r.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:y}),c.a.createElement(i.a,{path:"/cart",component:v}),c.a.createElement(i.a,{path:"/home/search",component:I}),c.a.createElement(i.a,{path:"/home/detail",component:x}),c.a.createElement(i.a,{path:"/home/detail2",component:k})))};n(178);l.a.render(c.a.createElement(O,null),document.getElementById("root"));fetch("https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login",{method:"post",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return console.log(e)}))},68:function(e,t,n){e.exports=n.p+"static/media/detail1.e83a9eea.jpg"},69:function(e,t,n){e.exports=n.p+"static/media/detail2.29091c7c.jpg"},96:function(e,t,n){e.exports=n(179)}},[[96,1,2]]]);
//# sourceMappingURL=main.12c86c88.chunk.js.map