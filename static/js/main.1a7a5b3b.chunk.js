(this.webpackJsonpdixbetapp=this.webpackJsonpdixbetapp||[]).push([[0],{125:function(e,t,c){},126:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(18),i=c.n(s),r=c(16),a=c.n(r),d=c(24),o=c.n(d),j=c(28),b=c(20),l=c(9),h=(c(123),c(5)),u=function(e){var t=e.id,c=e.go,n=e.fetchedUser;return Object(h.jsxs)(l.i,{id:t,children:[Object(h.jsx)(l.j,{children:"Example"}),n&&Object(h.jsx)(l.g,{header:Object(h.jsx)(l.h,{mode:"secondary",children:"User Data Fetched with VK Bridge"}),children:Object(h.jsx)(l.e,{before:n.photo_200?Object(h.jsx)(l.c,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:"",children:"".concat(n.first_name," ").concat(n.last_name)})}),Object(h.jsx)(l.g,{header:Object(h.jsx)(l.h,{mode:"secondary",children:"Navigation Example"}),children:Object(h.jsx)(l.f,{children:Object(h.jsx)(l.d,{stretched:!0,size:"l",mode:"secondary",onClick:c,"data-to":"persik",children:"ru \ufffd\ufffd\ufffd\ufffd\ufffd Persika"})})})]})},p=c.p+"static/media/persik.ae9f0072.png",O=(c(125),function(e){return Object(h.jsxs)(l.i,{id:e.id,children:[Object(h.jsx)(l.j,{left:Object(h.jsx)(l.k,{onClick:e.go,"data-to":"home"}),children:"Persik"}),Object(h.jsx)("img",{className:"Persik",src:p,alt:"Persik The Cat"})]})}),x=function(){var e=Object(n.useState)("home"),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(null),r=Object(b.a)(i,2),d=r[0],p=r[1],x=Object(n.useState)(Object(h.jsx)(l.l,{size:"large"})),f=Object(b.a)(x,2),m=f[0],g=f[1];Object(n.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,p(t),g(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.a.subscribe((function(e){var t=e.detail,c=t.type,n=t.data;if("VKWebAppUpdateConfig"===c){var s=document.createAttribute("scheme");s.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(s)}})),function(){e.apply(this,arguments)}()}),[]);var k=function(e){s(e.currentTarget.dataset.to)};return Object(h.jsx)(l.a,{children:Object(h.jsx)(l.b,{children:Object(h.jsxs)(l.m,{activePanel:c,popout:m,children:[Object(h.jsx)(u,{id:"home",fetchedUser:d,go:k}),Object(h.jsx)(O,{id:"persik",go:k})]})})})};a.a.send("VKWebAppInit"),i.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[126,1,2]]]);
//# sourceMappingURL=main.1a7a5b3b.chunk.js.map