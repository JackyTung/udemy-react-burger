(this["webpackJsonpudemy-react-burger"]=this["webpackJsonpudemy-react-burger"]||[]).push([[1],{96:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(91),i=a(11),c=a(46),d=a(97),s=function(e){return{BreadBottom:{height:"13%",width:"80%",background:"linear-gradient(#F08E4A, #e27b36)",borderRadius:"0 0 30px 30px",boxShadow:"inset -15px 0 #c15711",margin:"2% auto"},BreadTop:{height:"20%",width:"80%",background:"linear-gradient(#bc581e, #e27b36)",borderRadius:"50% 50% 0 0",boxShadow:"inset -15px 0 #c15711",margin:"2% auto",position:"relative"},Seeds1:{width:"10%",height:"15%",position:"absolute",backgroundColor:"white",left:"30%",top:"50%",borderRadius:"40%",transform:"rotate(-20deg)",boxShadow:"inset -2px -3px #c9c9c9","&:before":{content:"",width:"100%",height:"100%",position:"absolute",backgroundColor:"white",left:"180%",top:"-50%",borderRadius:"40%",transform:"rotate(60deg)",boxShadow:"inset -1px -3px #c9c9c9"},"&:after":{content:"",width:"100%",height:"100%",position:"absolute",backgroundColor:"white",left:"-170%",top:"-260%",borderRadius:"40%",transform:"rotate(60deg)",boxShadow:"inset -1px 2px #c9c9c9"}},Seeds2:{width:"10%",height:"15%",position:"absolute",backgroundColor:"white",left:"64%",top:"50%",borderRadius:"40%",transform:"rotate(10deg)",boxShadow:"inset -3px 0 #c9c9c9","&:before":{content:"",width:"100%",height:"100%",position:"absolute",backgroundColor:"white",left:"150%",top:"-130%",borderRadius:"40%",transform:"rotate(90deg)",boxShadow:"inset 1px 3px #c9c9c9"},"&:after":{}},Meat:{width:"80%",height:"8%",background:"linear-gradient(#7f3608, #702e05)",margin:"2% auto",borderRadius:"15px"},Cheese:{width:"90%",height:"4.5%",margin:"2% auto",background:"linear-gradient(#f4d004, #d6bb22)",borderRadius:"20px"},Salad:{width:"85%",height:"7%",margin:"2% auto",background:"linear-gradient(#228c1d, #91ce50)",borderRadius:"20px"},Bacon:{width:"80%",height:"3%",background:"linear-gradient(#bf3813, #c45e38)",margin:"2% auto"}}},u=Object(c.a)(Object(d.a)(s)),b=function(e){var t=e.type,a=u();switch(t){case"bread-bottom":return o.a.createElement("div",{className:a.BreadBottom});case"bread-top":return o.a.createElement("div",{className:a.BreadTop},o.a.createElement("div",{className:a.Seeds1}),o.a.createElement("div",{className:a.Seeds2}));case"meat":return o.a.createElement("div",{className:a.Meat});case"cheese":return o.a.createElement("div",{className:a.Cheese});case"bacon":return o.a.createElement("div",{className:a.Bacon});case"salad":return o.a.createElement("div",{className:a.Salad});default:return null}},l=function(e){return{Burger:{width:"100%",margin:"auto",height:"250px",overflow:"scroll",textAlign:"center",fontWeight:"bold",fontSize:"1.2rem"}}},h=Object(c.a)(Object(d.a)(l)),g=function(e){var t=h();return o.a.createElement("div",{className:t.Burger},o.a.createElement(b,{type:"bread-top"}),o.a.createElement(b,{type:"bread-bottom"}))},m=a(79),p=a(83),f=a(95),w=a(92),x=Object(w.a)({name:"profile",initialState:{salad:0,bacon:0,cheese:0,meat:0},reducers:{updateIngredients:function(){}}}),v=(x.actions.updateIngredients,x.reducer),E=Object(m.combineReducers)({ingredients:v}),S=Object(f.a)(),k=function(){return Object(m.createStore)(E,Object(p.composeWithDevTools)({trace:!0})(Object(m.applyMiddleware)(S)))}();t.default=function(){var e=Object(i.g)().url;return o.a.createElement(n.a,{store:k},o.a.createElement(i.d,null,o.a.createElement(i.b,{path:e,component:g}),o.a.createElement(i.a,{from:e,to:e})))}}}]);
//# sourceMappingURL=order.3cb04d70.chunk.js.map