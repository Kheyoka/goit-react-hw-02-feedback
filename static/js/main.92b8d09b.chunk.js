(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),o=a.n(r),l=a(3),u=a(4),i=a(5),s=a(8),m=a(6),b=a(9),d=a(7),v=function(e){var t=Object(d.a)(e.options,3),a=t[0],n=t[1],r=t[2],o=e.onLeaveFeedback;return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",name:a,onClick:o},a),c.a.createElement("button",{type:"button",name:n,onClick:o},n),c.a.createElement("button",{type:"button",name:r,onClick:o},r))},f=function(e){var t=e.name,a=e.value;return c.a.createElement("li",null,"".concat(t,": ").concat(a))};f.defaultProps={value:0};var k=f,E=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,o=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h2",null,"Statistics"),c.a.createElement("ul",{style:{listStyle:"none"}},c.a.createElement(k,{name:"Good",value:t}),c.a.createElement(k,{name:"Neutral",value:a}),c.a.createElement(k,{name:"Bad",value:n}),c.a.createElement(k,{name:"Total",value:r}),c.a.createElement(k,{name:"Positive feedback",value:o})))},p=function(e){var t=e.message;return c.a.createElement("p",null,t)},g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={good:0,neutral:0,bad:0},a.countonLeaveFeedback=function(e){var t=e.target.name;a.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},a.countTotalFeedback=function(){return Object.values(a.state).reduce((function(e,t){return e+t}))},a.countPositiveFeedbackPercentage=function(){return"".concat((a.state.good/a.countTotalFeedback()*100).toFixed(0),"%")},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.title,t=this.state,a=t.good,n=t.neutral,r=t.bad,o=Object.keys(this.state);return c.a.createElement("section",null,c.a.createElement("h1",null,e),c.a.createElement(v,{options:o,onLeaveFeedback:this.countonLeaveFeedback}),this.countTotalFeedback()>0?c.a.createElement(E,{good:a,neutral:n,bad:r,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):c.a.createElement(p,{message:"No feedback given"}))}}]),t}(n.Component);g.defaultProps={title:"Please leave feedback"};var h=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null))};o.a.render(c.a.createElement(h,null),document.querySelector("#root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.92b8d09b.chunk.js.map