(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{169:function(e,t,a){},184:function(e,t,a){"use strict";a.r(t),a.d(t,"firebaseConfig",(function(){return n}));var n={apiKey:"AIzaSyCk1ZtWs17sJek5RDb9q3lR9W3_955rjqg",authDomain:"konecta-c6c83.firebaseapp.com",databaseURL:"https://konecta-c6c83-default-rtdb.firebaseio.com",projectId:"konecta-c6c83",storageBucket:"konecta-c6c83.appspot.com",messagingSenderId:"700282207106",appId:"1:700282207106:web:f4b372ca47ea2f61e02d9b"}},185:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(17),r=a.n(i),s=(a(169),a(10)),o=a(47),l=a(23),d=a(67),j=a(6);function b(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),r=Object(s.a)(i,2),o=r[0],l=r[1];if(void 0==d.a.auth().currentUser)return Object(j.jsx)("div",{className:"container vertical-center ",children:Object(j.jsx)("div",{className:"auth-wrapper",children:Object(j.jsxs)("div",{className:"auth-inner",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Email address"}),Object(j.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){return c(e.target.value)},value:a})]}),Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsx)("button",{className:"btn btn-primary btn-block",onClick:function(){d.a.auth().signInWithEmailAndPassword(a,o).catch((function(e){}))},children:"Submit"})]})})})}a(174);var u=a(35),h=a(22),m=a(4),O=a(124),p=a(26),f=a(244),x=a(242),v=a(239),g=a(191),w=a(241),N=a(82),C=a(240),y=a(74),S=a(132),k=a.n(S),I=a(134),B=a.n(I),D=a(133),E=a.n(D),A=a(192),z=a(196),P=a(243),R=a(135),T=a.n(R),F=a(136),U=a.n(F),W=a(36),L=(a(104),a(72)),V=a(246),q=a(235),J=a(236),M=a(69);function G(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){W.a.firestore().collection("users").onSnapshot((function(e){var t=e.docs.map((function(e){var t=e.data(),a=e.id;return Object(u.a)({id:a},t)}));c(t)}))}),[]);var i=Object(l.e)(),r=[{field:"id",headerName:"ID",width:280},{field:"name",headerName:"Name",width:130},{field:"username",headerName:"Username",width:130},{field:"banned",headerName:"banned",width:150,renderCell:function(e){return Object(j.jsx)("div",{children:e.value?Object(j.jsx)(V.a,{icon:Object(j.jsx)(q.a,{}),label:"True",color:"primary",variant:"outlined"}):Object(j.jsx)(V.a,{icon:Object(j.jsx)(J.a,{}),label:"False",color:"secondary",variant:"outlined"})})}},{field:"link",headerName:"Detail",width:150,renderCell:function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(M.a,{variant:"contained",color:"primary",onClick:function(){i.push({pathname:"/user/".concat(e.row.id)})},children:"View"})})}}];return Object(j.jsx)("div",{style:{height:400,width:"100%",marginTop:"100px",backgroundColor:"white"},children:Object(j.jsx)(L.a,Object(h.a)({rows:a,columns:r,pageSize:5},"columns",r.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{disableClickEventBubbling:!0})}))))})}var _=a(197),H=a(110),K=a(248),X=a(116);function Z(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),d=o[0],b=o[1],m=(Object(l.f)(),Object(n.useState)([])),O=Object(s.a)(m,2),p=O[0],f=O[1];Object(n.useEffect)((function(){W.a.firestore().collection("posts").doc(e.match.params.id).collection("userPosts").onSnapshot((function(e){var t=e.docs.map((function(e){var t=e.data(),a=e.id;return Object(u.a)({id:a},t)}));f(t)}))}),[]),Object(n.useEffect)((function(){W.a.firestore().collection("users").doc(e.match.params.id).onSnapshot((function(e){if(e.exists){var t=e.data();t.uid=e.id,i(t)}}))}),[]);var x=Object(l.e)(),v=[{field:"caption",headerName:"caption",width:400},{field:"likesCount",headerName:"likesCount",width:130},{field:"commentsCount",headerName:"commentsCount",width:130},{field:"creation",headerName:"creation",width:200,valueGetter:function(e){return"".concat(new Date(1e3*e.value.seconds))}},{field:"link",headerName:"Detail",width:150,renderCell:function(t){return Object(j.jsx)("div",{children:Object(j.jsx)(M.a,{variant:"contained",color:"primary",onClick:function(){x.push({pathname:"/post/".concat(t.row.id,"/").concat(e.match.params.id)})},children:"View"})})}}];return 0==c.length?Object(j.jsx)(_.a,{variant:"indeterminate",size:40,thickness:4,value:100}):Object(j.jsxs)("div",{className:" row m-5",children:[Object(j.jsx)(H.a,{className:"col-md-3 m-3",elevation:5,children:Object(j.jsxs)("div",{style:{alignItems:"center"},className:"p-5 ",children:[Object(j.jsx)(K.a,{style:{height:"200px",width:"200px"},className:"m-auto mb-4",alt:"Travis Howard",src:c.image}),Object(j.jsx)("h3",{style:{textAlign:"center"},className:"mt-4",children:c.name}),Object(j.jsx)("h6",{style:{textAlign:"center"},children:c.username})]})}),Object(j.jsx)(H.a,{className:"col-md-8 m-3",elevation:5,children:Object(j.jsxs)("div",{style:{alignItems:"center"},className:"p-5 ",children:[Object(j.jsx)("p",{style:{textAlign:"left",fontWeight:"bold"},children:"email"}),Object(j.jsx)("p",{style:{textAlign:"left"},children:c.email}),Object(j.jsx)(C.a,{className:"mb-3"})]})}),Object(j.jsx)(H.a,{className:"col-md-3 m-3 p-5",elevation:5,children:c.banned?Object(j.jsx)("div",{children:Object(j.jsx)(M.a,{className:"col-md-12 mt-5",variant:"contained",color:"secondary",onClick:function(){W.a.firestore().collection("users").doc(e.match.params.id).update({banned:!1,banDetails:{}})},children:"Unban"})}):Object(j.jsxs)("div",{children:[Object(j.jsx)(X.a,{className:"col-md-12",id:"outlined-required",label:"Ban Reason",defaultValue:"",multiline:!0,variant:"outlined",inputMode:"numeric",onChange:b}),Object(j.jsx)(M.a,{className:"col-md-12 mt-5",variant:"contained",color:"secondary",onClick:function(){W.a.firestore().collection("users").doc(e.match.params.id).update({banned:!0,banDetails:{banReason:d.target.value,date:W.a.firestore.FieldValue.serverTimestamp()}})},children:"Ban"})]})}),Object(j.jsx)(H.a,{className:"col-md-8 m-3 p-5",elevation:5,style:{height:400},children:Object(j.jsx)(L.a,Object(h.a)({rows:p,columns:v,pageSize:5},"columns",v.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{disableClickEventBubbling:!0})}))))})]})}function Q(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)([]),o=Object(s.a)(r,2),d=o[0],b=o[1],m=Object(n.useState)(!1),O=Object(s.a)(m,2),p=O[0],f=O[1],x=(Object(l.f)(),Object(l.e)());Object(n.useEffect)((function(){W.a.firestore().collection("posts").doc(e.match.params.uid).collection("userPosts").doc(e.match.params.id).onSnapshot((function(e){if(e.exists){var t=e.data();t.id=e.id,i(t)}}))}),[]),Object(n.useEffect)((function(){null!=c&&W.a.firestore().collection("posts").doc(e.match.params.uid).collection("userPosts").doc(e.match.params.id).collection("comments").onSnapshot((function(e){var t=e.docs.map((function(e){var t=e.data(),a=e.id;return Object(u.a)({id:a},t)}));b(t),f(!0)}))}),[c]);var v=[{field:"id",headerName:"ID",width:280},{field:"text",headerName:"text",width:400},{field:"delete",headerName:"delete",width:150,renderCell:function(t){return Object(j.jsx)("div",{children:Object(j.jsx)(M.a,{variant:"contained",color:"secondary",onClick:function(){var a;a=t.row.id,W.a.firestore().collection("posts").doc(e.match.params.uid).collection("userPosts").doc(e.match.params.id).collection("comments").doc(a).delete()},children:"Delete"})})}},{field:"user",headerName:"user",width:150,renderCell:function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(M.a,{variant:"contained",color:"primary",onClick:function(){x.push({pathname:"/user/".concat(e.row.creator)})},children:"View"})})}}];if(!p)return Object(j.jsx)(_.a,{variant:"indeterminate",size:40,thickness:4,value:100});var g=new Date(1e3*c.creation.seconds);return Object(j.jsxs)("div",{className:" row m-5",children:[Object(j.jsxs)(H.a,{className:"col-md-8 m-3 p-5",elevation:5,children:[Object(j.jsxs)("div",{style:{alignItems:"center"},className:"pb-4",children:[Object(j.jsx)("p",{style:{textAlign:"left",fontWeight:"bold"},children:"Caption"}),Object(j.jsx)("p",{style:{textAlign:"left"},children:c.caption}),Object(j.jsx)(C.a,{className:"mb-3"}),Object(j.jsx)("p",{style:{textAlign:"left",fontWeight:"bold"},children:"Date"}),Object(j.jsx)("p",{children:g.toString()})]}),Object(j.jsx)(M.a,{variant:"contained",color:"primary",className:"mr-2 col-md-3",href:c.downloadURL,target:"_blank",children:"Open Media"}),Object(j.jsx)(M.a,{variant:"contained",color:"secondary",onClick:function(){W.a.firestore().collection("posts").doc(e.match.params.uid).collection("userPosts").doc(e.match.params.id).delete(),W.a.firestore().collection("feed").doc(c.id).delete()},children:"Delete"})]}),Object(j.jsx)(H.a,{className:"m-3",style:{height:400,width:"100%",marginTop:"100px",backgroundColor:"white"},elevation:5,children:Object(j.jsx)(L.a,Object(h.a)({rows:d,columns:v,pageSize:5},"columns",v.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{disableClickEventBubbling:!0})}))))})]})}var Y=240,$=Object(O.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:Y,width:"calc(100% - ".concat(Y,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:Y,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:Y,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(h.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(u.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function ee(){var e,t,a=$(),n=Object(p.a)(),i=c.a.useState(!1),r=Object(s.a)(i,2),d=r[0],b=r[1];Object(l.e)();return Object(j.jsx)(o.a,{children:Object(j.jsxs)("div",{className:a.root,children:[Object(j.jsx)(w.a,{}),Object(j.jsx)(x.a,{position:"fixed",className:Object(m.a)(a.appBar,Object(h.a)({},a.appBarShift,d)),children:Object(j.jsxs)(v.a,{children:[Object(j.jsx)(y.a,{color:"inherit","aria-label":"open drawer",onClick:function(){b(!0)},edge:"start",className:Object(m.a)(a.menuButton,Object(h.a)({},a.hide,d)),children:Object(j.jsx)(k.a,{})}),Object(j.jsx)(N.a,{variant:"h6",noWrap:!0,children:"FreeRide Admin"})]})}),Object(j.jsxs)(f.a,{variant:"permanent",className:Object(m.a)(a.drawer,(e={},Object(h.a)(e,a.drawerOpen,d),Object(h.a)(e,a.drawerClose,!d),e)),classes:{paper:Object(m.a)((t={},Object(h.a)(t,a.drawerOpen,d),Object(h.a)(t,a.drawerClose,!d),t))},children:[Object(j.jsx)("div",{className:a.toolbar,children:Object(j.jsx)(y.a,{onClick:function(){b(!1)},children:"rtl"===n.direction?Object(j.jsx)(E.a,{}):Object(j.jsx)(B.a,{})})}),Object(j.jsx)(C.a,{}),Object(j.jsx)(g.a,{children:["Users"].map((function(e,t){return Object(j.jsx)(A.a,{button:!0,children:Object(j.jsxs)(o.b,{style:{display:"table"},to:"/".concat(e),children:[Object(j.jsx)(z.a,{children:t%2===0?Object(j.jsx)(T.a,{}):Object(j.jsx)(U.a,{})}),Object(j.jsx)(P.a,{primary:e})]})},e)}))})]}),Object(j.jsx)("main",{className:a.content,children:Object(j.jsxs)("div",{style:{width:"100%",marginTop:"100px"},children:[Object(j.jsx)(l.a,{path:"/",exact:!0,component:G}),Object(j.jsx)(l.a,{path:"/Users",exact:!0,component:G}),Object(j.jsx)(l.a,{path:"/user/:id",exact:!0,component:Z}),Object(j.jsx)(l.a,{path:"/post/:id/:uid",exact:!0,component:Q})]})})]})})}var te=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){d.a.auth().onAuthStateChanged((function(e){c(!!e)}))}),[]),a?Object(j.jsx)(ee,{}):Object(j.jsx)(o.a,{children:Object(j.jsx)(l.a,{path:"/",exact:!0,component:b})})},ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,249)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))},ne=a(184).firebaseConfig;d.a.initializeApp(ne),r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(te,{})}),document.getElementById("root")),ae()}},[[185,1,2]]]);
//# sourceMappingURL=main.974c154e.chunk.js.map