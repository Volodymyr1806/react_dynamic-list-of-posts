(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),s=n(4),a=n(2),o=n.n(a),u=(n(11),n(12),n(3)),i=n(1),l=n.n(i),j=(n(14),"https://mate.academy/students-api"),b=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/posts"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=n(0),f=o.a.memo((function(e){var t=e.selectedUserId,n=e.selectPostId,c=e.selectedPostId,r=Object(a.useState)([]),o=Object(s.a)(r,2),i=o[0],j=o[1];Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var p,f=0!==(p=+t)?i.filter((function(e){return e.userId===p})):i;return Object(d.jsxs)("div",{className:"PostsList",children:[Object(d.jsx)("h2",{children:"Posts:"}),Object(d.jsx)("ul",{className:"PostsList__list",children:f.map((function(e){return Object(d.jsxs)("li",{className:"PostsList__item",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("b",{children:"[User #".concat(e.userId,"]:")}),e.title]}),c===e.id?Object(d.jsx)("button",{type:"button",className:"PostsList__button button button_close",onClick:function(){return n(0)},children:"Close"}):Object(d.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)},children:"Open"})]},e.id)}))})]})})),m=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments"));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c.filter((function(e){return e.postId===t})));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(l.a.mark((function e(t,n,c,r){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments"),{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({postId:t,name:n,email:c,body:r})});case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}}),e)})));return function(t,n,c,r){return e.apply(this,arguments)}}(),x=(n(16),o.a.memo((function(e){var t=e.postId,n=e.fetchComments,c=Object(a.useState)(""),r=Object(s.a)(c,2),o=r[0],i=r[1],j=Object(a.useState)(""),b=Object(s.a)(j,2),p=b[0],f=b[1],m=Object(a.useState)(""),h=Object(s.a)(m,2),x=h[0],v=h[1],_=function(){var e=Object(u.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,O(t,o,p,x);case 3:return e.next=5,n();case 5:v(""),f(""),i("");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("form",{className:"NewCommentForm",onSubmit:_,children:[Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{type:"text",name:"name",placeholder:"Your name",value:o,onChange:function(e){var t=e.target.value;i(t)},className:"NewCommentForm__input",required:!0})}),Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("input",{type:"text",name:"email",value:p,onChange:function(e){var t=e.target.value;f(t)},placeholder:"Your email",className:"NewCommentForm__input",required:!0})}),Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("textarea",{name:"body",value:x,onChange:function(e){var t=e.target.value;v(t)},placeholder:"Type comment here",className:"NewCommentForm__input",required:!0})}),Object(d.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}))),v=(n(17),o.a.memo((function(e){var t=e.selectedPostId,n=Object(a.useState)(null),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)([]),j=Object(s.a)(i,2),b=j[0],f=j[1],O=Object(a.useState)(!0),v=Object(s.a)(O,2),_=v[0],N=v[1],w=Object(a.useCallback)(Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)}))),[]),y=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=5;break}return e.next=3,m(r.id);case 3:t=e.sent,f(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return e.next=4,y();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){w()}),[t]),Object(a.useEffect)((function(){y()}),[t]),Object(d.jsxs)("div",{className:"PostDetails",children:[Object(d.jsx)("h2",{children:"Post details:"}),Object(d.jsx)("section",{className:"PostDetails__post",children:Object(d.jsx)("p",{children:null===r||void 0===r?void 0:r.body})}),b.length>0?Object(d.jsxs)("section",{className:"PostDetails__comments",children:[_&&Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return N(!_)},children:"Hide ".concat(b.length," comments")}),!_&&Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return N(!_)},children:"Show ".concat(b.length," comments")}),_&&Object(d.jsx)("ul",{className:"PostDetails__list",children:b.map((function(e){return Object(d.jsxs)("li",{className:"PostDetails__list-item",children:[Object(d.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return k(e.id)},children:"X"}),Object(d.jsx)("p",{children:e.body})]},e.id)}))})]}):"No comments yet",Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"PostDetails__form-wrapper",children:r&&Object(d.jsx)(x,{postId:r.id,fetchComments:y})})})]})}))),_=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=o.a.memo((function(e){var t=e.selectId,n=Object(a.useState)("0"),c=Object(s.a)(n,2),r=c[0],o=c[1],i=Object(a.useState)([]),j=Object(s.a)(i,2),b=j[0],p=j[1];Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(d.jsxs)("label",{htmlFor:"select",children:["Select a user: \xa0",Object(d.jsxs)("select",{className:"App__user-selector",value:r,onChange:function(e){var n=e.target.value;o(n),t(n)},children:[Object(d.jsx)("option",{value:"0",children:"Choose user"}),b.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})})),w=function(){var e=Object(a.useState)("0"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),o=Object(s.a)(r,2),u=o[0],i=o[1],l=Object(a.useCallback)((function(e){c(e)}),[]),j=Object(a.useCallback)((function(e){i(e)}),[]);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App__header",children:Object(d.jsx)(N,{selectId:l})}),Object(d.jsxs)("main",{className:"App__main",children:[Object(d.jsx)("div",{className:"App__sidebar",children:Object(d.jsx)(f,{selectedUserId:n,selectPostId:j,selectedPostId:u})}),Object(d.jsx)("div",{className:"App__content",children:0!==u&&Object(d.jsx)(v,{selectedPostId:u})})]})]})};r.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.75d4ea6f.chunk.js.map